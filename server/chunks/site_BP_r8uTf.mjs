// node_modules/@tracht-digital-labs/tds-shared/dist/site/index.js
var SiteKeyRejectedError = class extends Error {
	status;
	constructor(status, url, label = "tds-site", reconnectHint = "") {
		super(`[${label}] Der gekoppelte API-Zugang wurde abgelehnt (HTTP ${status}) von ${url}.` + (reconnectHint ? ` ${reconnectHint}` : ""));
		this.name = "SiteKeyRejectedError";
		this.status = status;
	}
};
var COUNTER = "__tdsSiteKeyRejectionCount__";
function siteKeyRejectionCount() {
	return globalThis[COUNTER] ?? 0;
}
function countRejection() {
	const store = globalThis;
	store[COUNTER] = (store[COUNTER] ?? 0) + 1;
}
function createSiteKeyGuard(source, options) {
	return {
		currentSiteKey: () => source.siteKey(),
		siteKeyHeaders: () => source.siteKeyHeaders(),
		assertKeyAccepted(res, url) {
			if (source.siteKey() === "") return;
			if (res.status !== 401 && res.status !== 403) return;
			countRejection();
			throw new SiteKeyRejectedError(res.status, String(url), options.label, options.reconnectHint);
		}
	};
}
async function guardSiteKey(next) {
	const before = siteKeyRejectionCount();
	const response = await next();
	if (siteKeyRejectionCount() === before) return response;
	const guarded = new Response(response.body, response);
	guarded.headers.set("cache-control", "no-store");
	return guarded;
}
var ContentHttpError = class extends Error {
	status;
	constructor(status, url) {
		super(`HTTP ${status} from ${String(url)}`);
		this.name = "ContentHttpError";
		this.status = status;
	}
};
function createContentReader(guard) {
	return async function readContentJson(url, timeoutMs = 1e4) {
		const res = await fetch(url, {
			headers: guard.siteKeyHeaders(),
			signal: AbortSignal.timeout(timeoutMs)
		});
		guard.assertKeyAccepted(res, url);
		if (!res.ok) throw new ContentHttpError(res.status, url);
		return await res.json();
	};
}
async function memoisedOr(cache, key, load, fallback, warn = (message, err) => console.warn(message, err)) {
	try {
		return await cache.get(key, load);
	} catch (err) {
		warn(`${key} unavailable \u2014 using the fallback:`, err);
		return typeof fallback === "function" ? fallback() : fallback;
	}
}
function canonicalPath(path) {
	const value = path.trim();
	if (value === "" || value === "/") return "/";
	return value.replace(/\/+$/, "") || "/";
}
function matchesPattern(path, pattern) {
	const value = pattern.trim();
	if (value === "") return false;
	if (value.endsWith("*")) {
		const prefix = value.slice(0, -1);
		return prefix === "" || canonicalPath(path).startsWith(prefix);
	}
	return canonicalPath(value) === canonicalPath(path);
}
function groupExcluded(paths, patterns) {
	return paths.some((path) => patterns.some((pattern) => matchesPattern(path, pattern)));
}
function createSitemapExclusions(o) {
	const group = o.hreflangGroup ?? ((path) => [canonicalPath(path)]);
	const load = async () => {
		const url = new URL(`${o.contentBase()}/sitemap-exclusions`);
		url.searchParams.set("site", o.siteId);
		const data = await o.read(url.toString());
		if (!Array.isArray(data?.paths)) return [];
		return data.paths.filter((p) => typeof p === "string" && p.trim() !== "");
	};
	const exclusionPatterns = () => o.disabled ? Promise.resolve([]) : o.memo("sitemap:exclusions", load, [], "sitemap exclusions (nothing excluded)");
	const isExcluded = async (path) => {
		const patterns = await exclusionPatterns();
		return patterns.length > 0 && groupExcluded(group(path), patterns);
	};
	return {
		exclusionPatterns,
		isExcluded
	};
}
var IMAGE_RIGHTS_URL = {
	de: "https://tracht-digital.de/bildrechte",
	en: "https://tracht-digital.de/en/image-rights"
};
function imageRights(lang, { portrait = false } = {}) {
	return {
		creator: portrait ? {
			"@type": "Person",
			name: "Julian Tracht"
		} : {
			"@type": "Organization",
			name: "ChatGPT (OpenAI)",
			url: "https://chatgpt.com"
		},
		creditText: "Tracht Digital Solutions",
		copyrightNotice: "© Tracht Digital Solutions",
		license: IMAGE_RIGHTS_URL[lang],
		acquireLicensePage: IMAGE_RIGHTS_URL[lang]
	};
}
function createImageCatalog(raw, { origin, about = "webpage", absoluteSrcSet = false }) {
	const assets = Object.values(raw);
	const imageInfo = (src) => {
		if (!src) return void 0;
		try {
			const url = new URL(src, origin);
			if (url.origin !== origin) return void 0;
			return assets.find((a) => a.src === url.pathname || a.variants.some((v) => v.src === url.pathname));
		} catch {
			return;
		}
	};
	const imageHints = (src, lang, sizes = "100vw") => {
		const image = imageInfo(src);
		if (!image) return void 0;
		return {
			alt: image.alt[lang],
			width: image.width,
			height: image.height,
			srcSet: image.variants.map((v) => `${absoluteSrcSet ? origin : ""}${v.src}?v=${v.hash} ${v.width}w`).join(", "),
			sizes,
			decoding: "async"
		};
	};
	const imageObject = (src, lang, pageUrl) => {
		const image = imageInfo(src);
		if (!image) return null;
		return {
			"@type": "ImageObject",
			"@id": pageUrl + "#editorial-image",
			contentUrl: origin + image.src,
			url: origin + image.src,
			caption: image.alt[lang],
			width: image.width,
			height: image.height,
			encodingFormat: "image/webp",
			digitalSourceType: image.digitalSourceType,
			...imageRights(lang),
			about: { "@id": about === "webpage" ? pageUrl + "#webpage" : pageUrl }
		};
	};
	return {
		imageInfo,
		imageHints,
		imageObject
	};
}
var TEXTUAL = /^(text\/[\w.+-]+|application\/(json|ld\+json|xml|rss\+xml|manifest\+json|javascript))\s*(;|$)/i;
function withUtf8Charset(response) {
	const type = response.headers.get("content-type");
	if (!type || /charset=/i.test(type) || !TEXTUAL.test(type)) return response;
	const value = `${type.replace(/;\s*$/, "")}; charset=utf-8`;
	try {
		response.headers.set("content-type", value);
		return response;
	} catch {
		const headers = new Headers(response.headers);
		headers.set("content-type", value);
		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers
		});
	}
}
export { groupExcluded as a, withUtf8Charset as c, createSitemapExclusions as i, createImageCatalog as n, guardSiteKey as o, createSiteKeyGuard as r, memoisedOr as s, createContentReader as t };
