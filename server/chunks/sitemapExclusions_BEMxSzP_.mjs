import { t as apiBase } from "./connection_V641b1Ka.mjs";
import { i as createSitemapExclusions } from "./site_BP_r8uTf.mjs";
import { a as readContentJson, i as memoisedOr } from "./catalog_CuybNERq.mjs";
// node_modules/@tracht-digital-labs/tds-shared/dist/chunk-ZKMOXWKM.js
var PROPERTY_ORIGINS = {
	journal: "https://blog.tracht-digital.de",
	tools: "https://tools.tracht-digital.de",
	shop: "https://shop.tracht-digital.de",
	main: "https://tracht-digital.de"
};
var LABELS = {
	journal: {
		de: "Ratgeber",
		en: "Ratgeber"
	},
	tools: {
		de: "Online-Tools",
		en: "Online-Tools"
	},
	shop: {
		de: "Shop",
		en: "Shop"
	},
	main: {
		de: "Startseite",
		en: "Home"
	}
};
var ORDER = [
	"main",
	"journal",
	"tools",
	"shop"
];
function propertyHome(key, lang) {
	return `${PROPERTY_ORIGINS[key]}${lang === "en" ? "/en/" : "/"}`;
}
function propertyContact(lang) {
	return `${propertyHome("main", lang)}#contact`;
}
function propertyNav(current, lang, homeHref) {
	return ORDER.map((key) => ({
		key,
		label: LABELS[key][lang],
		href: key === current ? homeHref : propertyHome(key, lang),
		current: key === current
	}));
}
var LEGAL_LINKS = {
	imprint: `${PROPERTY_ORIGINS.main}/legal/impressum`,
	privacy: `${PROPERTY_ORIGINS.main}/legal/datenschutz`
};
[
	"a[href]",
	"button:not([disabled])",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(",");
// src/lib/i18n.ts
var copy = {
	de: {
		tagline: "Werkzeuge für Unternehmen, vieles kostenlos",
		/**
		* Order is deliberate: the concrete tool names come first (this site
		* ranks on tool queries), brand and town ride in the tail where they
		* still fit inside the ~160 characters a SERP renders.
		*/
		description: "Bilder komprimieren, QR-Codes erstellen, UTM-Links, PDF und Texterkennung im Browser, vieles kostenlos, ohne Anmeldung. Von TDS aus Schwarzenbek bei Hamburg.",
		heroHeadlineLead: "Digitale",
		heroHeadlineAccent: "Werkzeuge",
		heroHeadlineTail: "direkt im Browser.",
		navAllTools: "Alle Tools",
		navBlog: "Ratgeber",
		navHome: "Startseite",
		navMenu: "Menü",
		toBlog: "Zum Ratgeber",
		toHome: "Zur Startseite",
		cta: "Unverbindlich anfragen",
		skipToContent: "Zum Inhalt springen",
		emptyCatalog: "Zurzeit sind keine Tools verfügbar.",
		toolCount: (n) => `${n} ${n === 1 ? "Werkzeug" : "Werkzeuge"}`,
		filter: {
			toggle: "Filter",
			search: "Werkzeug suchen",
			category: "Kategorie",
			all: "Alle",
			access: "Zugang",
			accesses: {
				all: "Alle",
				free: "Kostenlos",
				premium: "Premium",
				login: "Mit Anmeldung"
			},
			reset: "Filter zurücksetzen",
			close: "Filter schließen",
			none: "Kein Werkzeug passt zu diesen Filtern."
		},
		guideHeading: "Ratgeber",
		guideUseCases: "Typische Anwendungsfälle",
		guideSteps: "Schritt für Schritt",
		guidePrivacy: "Was mit den Daten passiert",
		guideFaq: "Häufige Fragen",
		relatedHeading: "Passt dazu",
		breadcrumbAll: "Alle Tools",
		footerBlurb: "Digitale Werkzeuge direkt im Browser, ohne Installation, vieles davon kostenlos und ohne Anmeldung.",
		footerGroupBrand: "Tracht Digital",
		footerGroupLegal: "Rechtliches",
		footerGroupServices: "Leistungen",
		footerHome: "Startseite",
		footerBlog: "Ratgeber",
		footerPortal: "Kundenportal",
		footerContact: "Kontakt",
		footerImprint: "Impressum",
		footerPrivacy: "Datenschutz",
		footerAdConsent: "Werbe-Einwilligung ändern",
		footerTagline: "Digitalisierung für Unternehmen",
		access: {
			label: "Auf einen Blick",
			free: "Kostenlos",
			premium: "Premium",
			login: "Mit Anmeldung",
			noLogin: "Ohne Anmeldung",
			browser: "Läuft im Browser"
		},
		catalogFaqHeading: "Häufige Fragen",
		catalogFaq: [
			{
				q: "Welche Werkzeuge sind kostenlos?",
				a: "Jedes Werkzeug mit dem Kennzeichen „Kostenlos“ ist ohne Bezahlung nutzbar. Braucht es ein Konto, steht zusätzlich „Mit Anmeldung“ daran. Premium-Werkzeuge laufen über ein Monatsabo, zum Ende jedes Abrechnungsmonats kündbar."
			},
			{
				q: "Werden Dateien oder Eingaben hochgeladen?",
				a: "Nein. Die Werkzeuge rechnen im Browser, Eingaben, Dateien und Bilder verlassen das Gerät nicht. Wo ein Werkzeug davon abweicht, sagt es sein Ratgeber im Abschnitt zum Datenschutz."
			},
			{
				q: "Muss etwas installiert werden?",
				a: "Nein. Jedes Werkzeug läuft in einem aktuellen Browser auf Computer, Tablet oder Smartphone. Einmal geöffnete Werkzeugseiten funktionieren auf demselben Gerät auch offline."
			}
		],
		languageSwitch: "Sprache",
		languageOther: "English",
		premiumHeading: "Premium-Werkzeuge",
		premiumBody: "Für alles, was jede Woche wieder anfällt: Die Premium-Werkzeuge erledigen die aufwendigeren Arbeiten in einem Rutsch, genauso direkt im Browser wie alle anderen, ohne Upload und ohne Installation. Ein Abo schaltet alle Werkzeuge seiner Stufe frei.",
		premium: {
			plansHeading: "Premium-Stufen",
			perMonth: "im Monat",
			unlock: "Freischalten",
			recommended: "Empfohlen",
			unlocks: "Schaltet frei:",
			terms: "Monatliche Abrechnung über Stripe, zum Ende jedes Abrechnungsmonats kündbar.",
			noPlans: "Premium ist gerade nicht buchbar.",
			signupHint: "Zum Freischalten braucht es ein Konto. Das Anlegen dauert eine Minute.",
			createAccount: "Konto anlegen",
			signIn: "Anmelden",
			manage: "Abo verwalten",
			active: "Premium ist aktiv: Die freigeschalteten Werkzeuge stehen oben im Katalog.",
			redirecting: "Weiterleitung …",
			failed: "Das Freischalten konnte nicht gestartet werden. Bitte später erneut versuchen."
		},
		ratgeber: {
			heading: "Aus dem Ratgeber",
			read: "Ganzen Artikel im Ratgeber lesen",
			more: "Mehr Anleitungen und Hintergründe im Ratgeber",
			minutes: (n) => `${n} Min. Lesezeit`
		}
	},
	en: {
		tagline: "Digital tools for business, much of it free",
		description: "Compress images, create QR codes, UTM links, PDF tools and OCR in your browser, much of it free, no sign-up. By TDS in Schwarzenbek near Hamburg.",
		heroHeadlineLead: "Digital",
		heroHeadlineAccent: "tools",
		heroHeadlineTail: "right in your browser.",
		navAllTools: "All tools",
		navBlog: "Ratgeber",
		navHome: "Main site",
		navMenu: "Menu",
		toBlog: "To the Ratgeber",
		toHome: "To the home page",
		cta: "Get in touch",
		skipToContent: "Skip to content",
		emptyCatalog: "No tools are available at the moment.",
		toolCount: (n) => `${n} ${n === 1 ? "tool" : "tools"}`,
		filter: {
			toggle: "Filter",
			search: "Search tools",
			category: "Category",
			all: "All",
			access: "Access",
			accesses: {
				all: "All",
				free: "Free",
				premium: "Premium",
				login: "Sign-in required"
			},
			reset: "Reset filters",
			close: "Close filters",
			none: "No tool matches these filters."
		},
		guideHeading: "Guide",
		guideUseCases: "Typical use cases",
		guideSteps: "How to use it",
		guidePrivacy: "What happens to your data",
		guideFaq: "Frequently asked questions",
		relatedHeading: "Related tools",
		breadcrumbAll: "All tools",
		footerBlurb: "Digital tools right in your browser, nothing to install, much of it free and without a sign-up.",
		footerGroupBrand: "Tracht Digital",
		footerGroupLegal: "Legal",
		footerGroupServices: "Services",
		footerHome: "Main site",
		footerBlog: "Ratgeber",
		footerPortal: "Customer portal",
		footerContact: "Contact",
		footerImprint: "Imprint",
		footerPrivacy: "Privacy",
		footerAdConsent: "Change ad consent",
		footerTagline: "Digitalisation for businesses",
		access: {
			label: "At a glance",
			free: "Free",
			premium: "Premium",
			login: "Sign-in required",
			noLogin: "No sign-up",
			browser: "Runs in your browser"
		},
		catalogFaqHeading: "Frequently asked questions",
		catalogFaq: [
			{
				q: "Which tools are free?",
				a: "Every tool marked “Free” can be used without paying. If it needs an account, it is also marked “Sign-in required”. Premium tools come with a monthly subscription, cancellable at the end of any billing month."
			},
			{
				q: "Are files or inputs uploaded?",
				a: "No. The tools compute in your browser; inputs, files and images never leave your device. Where a tool differs, its guide says so in the section on data."
			},
			{
				q: "Is there anything to install?",
				a: "No. Every tool runs in a current browser on a computer, tablet or phone. Tool pages opened once keep working offline on the same device."
			}
		],
		languageSwitch: "Language",
		languageOther: "Deutsch",
		premiumHeading: "Premium tools",
		premiumBody: "For the jobs that come back every week: the premium tools handle the heavier work in one go, right in your browser like all the others, no upload, no installation. One subscription unlocks every tool in its plan.",
		premium: {
			plansHeading: "Premium plans",
			perMonth: "per month",
			unlock: "Unlock",
			recommended: "Recommended",
			unlocks: "Unlocks:",
			terms: "Billed monthly through Stripe, cancellable at the end of any billing month.",
			noPlans: "Premium cannot be booked right now.",
			signupHint: "Unlocking needs an account. Creating one takes a minute.",
			createAccount: "Create account",
			signIn: "Sign in",
			manage: "Manage subscription",
			active: "Premium is active: your unlocked tools are listed in the catalogue above.",
			redirecting: "Redirecting …",
			failed: "Unlocking could not be started. Please try again later."
		},
		ratgeber: {
			heading: "From the Ratgeber",
			read: "Read the full article in the Ratgeber",
			more: "More guides and background in the Ratgeber",
			minutes: (n) => `${n} min read`
		}
	}
};
/** The string table for a language. */
function t(lang) {
	return copy[lang];
}
/** Category section headings. */
var categoryLabels$1 = {
	de: {
		content: "Inhalte",
		developer: "Entwickler",
		design: "Design",
		marketing: "Marketing",
		media: "Medien",
		security: "Sicherheit",
		business: "Business",
		compliance: "Recht & Pflichten",
		other: "Weitere"
	},
	en: {
		content: "Content",
		developer: "Developer",
		design: "Design",
		marketing: "Marketing",
		media: "Media",
		security: "Security",
		business: "Business",
		compliance: "Compliance",
		other: "Other"
	}
};
// src/lib/site.ts
/** Site-wide constants + copy. Keep the NAP in sync with the Impressum + seo.ts
*  of the other TDS properties (SEO convention).
*
*  The German copy is DERIVED from `lib/i18n` rather than restated here: the
*  site publishes two languages now, and a second copy of the German strings
*  is how the two would drift. This module keeps the language-independent
*  identity (name, origin) and re-exports the German defaults that predate the
*  English tree, so nothing that already imported them had to change. */
var site = {
	/**
	* The site's name, as it is written everywhere it is written OUT — the SEO
	* title suffix, the OG eyebrow, the header's accessible name, the 404.
	*
	* "Online-Tools" since 2026-10-19 (was "TD Tools"): a name that says what
	* the site is, for search engines and answer engines. The header and
	* footer set it beside the TD mark; the rendered and the written name have
	* to agree, or the site is called one thing on the page and another in
	* every search result and share card. `fullName` ties it to the business
	* where there is room (WebSite node, og:site_name, manifest).
	*/
	name: "Online-Tools",
	fullName: "Online-Tools von Tracht Digital Solutions",
	origin: "https://tools.tracht-digital.de",
	tagline: copy.de.tagline,
	/**
	* Site-level meta description. Google renders roughly the first 155–160
	* characters and truncates the rest — `site.test.ts` fails the build past
	* that bound.
	*
	* This was 201 characters until 2026-08-16, so everything from "Von Tracht
	* Digital Solutions, 21493 Schwarzenbek bei Hamburg" onward was cut in the
	* SERP: the site lost its brand AND its local signal while keeping the
	* generic half. Exactly the defect the landingpage's seo.ts fixed in
	* 2026-07-29, repeated here because nothing measured it.
	*
	* Order is deliberate: the concrete tool names come first (this site ranks
	* on tool queries), and the brand + town ride in the tail where they still
	* fit inside the cut.
	*/
	description: copy.de.description
};
/**
* The sibling TDS properties this site links to.
*
* Declared once here rather than inline in the header/footer markup: the blog
* links back to this site from its own `nav.ts` (`TOOLS_URL`), and the two
* link sets are each other's counterpart — a public property that only ever
* gets linked TO is a dead end for a reader and an orphan for a crawler.
*
* Absolute URLs on purpose. These are separate hosts (`tracht-digital.de`,
* `blog.tracht-digital.de`), so a site-relative path would resolve against
* `tools.tracht-digital.de` and 404 into this site's own SPA-less 404 page.
*/
var links = {
	main: "https://tracht-digital.de",
	blog: "https://blog.tracht-digital.de",
	contact: "https://tracht-digital.de/#contact",
	portal: "https://app.tracht-digital.de",
	impressum: LEGAL_LINKS.imprint,
	datenschutz: LEGAL_LINKS.privacy
};
/** German labels for the tool categories (catalog section headings). */
var categoryLabels = categoryLabels$1.de;
/** Stable display order of the category sections in the catalog. */
var categoryOrder = [
	"marketing",
	"security",
	"developer",
	"design",
	"media",
	"content",
	"business",
	"compliance",
	"other"
];
// node_modules/@tracht-digital-labs/tds-shared/dist/i18n/index.js
var OG_LOCALE = {
	de: "de_DE",
	en: "en_GB"
};
function neutralPath(pathname) {
	return pathname.replace(/^\/en(?=\/|$)/, "") || "/";
}
function localizedPath(pathname, lang) {
	const neutral = neutralPath(pathname);
	if (lang === "de") return neutral;
	return neutral === "/" ? "/en/" : `/en${neutral}`;
}
// src/lib/seo.ts
/**
* SEO identity for the public tools site.
*
* This is the *who*, not the *what*: name, legal entity, NAP, coordinates,
* service area and topical focus. The copy (tagline, descriptions, category
* labels, sibling links) stays in `~/lib/site`; the JSON-LD renderers in
* `~/lib/jsonld` read from here.
*
* **Every value is a verbatim copy of `tds-landingpage-frontend/src/lib/seo.ts`.**
* That is the point: a local-business signal is only worth anything when the
* name, address and phone are byte-identical everywhere they appear (the
* Impressum, the landingpage's schema, the blog's, and this site's). A
* paraphrased street or a differently formatted phone number reads as a
* *different* business to a search engine, which is worse than emitting
* nothing at all. `seo.test.ts` compares the two files so a change on one side
* fails this build.
*
* What deliberately does NOT come along: `description` (this site describes
* tools, not services — see `site.description`), `pricing`, and the founder's
* `jobTitle` framing that only makes sense on the marketing site.
*/
var seoConfig = {
	/** Brand name as it should appear in search results. */
	name: "Tracht Digital Solutions",
	shortName: "TDS",
	/** This property's origin. Mirrors `astro.config.mjs#site` and `site.origin`. */
	url: "https://tools.tracht-digital.de",
	/** The main site — the entity all three properties belong to. */
	mainUrl: "https://tracht-digital.de",
	/** Sister origin where the journal lives. */
	blogUrl: "https://blog.tracht-digital.de",
	/** Verified contact channel. Safe to publish in schema. */
	email: "kontakt@tracht-digital.de",
	/** Verified phone (WhatsApp). E.164-friendly formatting for schema. */
	telephone: "+49 178 8224022",
	/** Legal entity behind the brand. */
	legalName: "Julian Tracht",
	/** USt-IdNr. gemäß § 27a UStG — verified, matches the Impressum. */
	vatID: "DE450639725",
	founder: {
		name: "Julian Tracht",
		jobTitle: "Inhaber & Entwickler"
	},
	/** Verified business address (matches the Impressum). */
	address: {
		streetAddress: "Elbinger Straße 19",
		postalCode: "21493",
		addressLocality: "Schwarzenbek",
		addressRegion: "Schleswig-Holstein",
		addressCountry: "DE"
	},
	/** Approximate coordinates of the business address. */
	geo: {
		latitude: 53.504,
		longitude: 10.48
	},
	/** Service area for the ProfessionalService node. */
	areaServed: [
		"Hamburg",
		"Schwarzenbek",
		"Norddeutschland",
		"Deutschland"
	],
	/** Topics for schema `knowsAbout` — the keyword set the brand targets. */
	knowsAbout: [
		"Digitalisierung für Unternehmen",
		"Prozessautomatisierung",
		"Webentwicklung",
		"Webshop",
		"Onlineshop für lokale Geschäfte",
		"Individualsoftware",
		"App-Entwicklung",
		"IT-Beratung"
	],
	/** Public social URLs — surface in JSON-LD `sameAs`. */
	socials: {
		linkedin: "https://www.linkedin.com/in/julian-tracht/",
		github: "https://github.com/Tracht-Digital-Labs"
	},
	/**
	* Default OG card, generated at build time by `src/pages/og/default.png.ts`.
	*
	* It used to be `/og-default.png`, a path that existed in NO repo — not in
	* `public/`, not in the built `dist/`. So every share of this site on
	* LinkedIn, WhatsApp or X rendered with a blank card from the day the site
	* launched, and nothing anywhere reported it: the tag is well-formed, the
	* build is green, and the only symptom lives in someone else's preview
	* pane. `seo.test.ts` now pins the path against the route that emits it.
	*/
	defaultOgImage: "/og/default.png"
};
// src/lib/sitemapExclusions.ts
/**
* Paths the panel has taken out of the index.
*
* The sitemap is built from the catalog (see `sitemap.ts`); this is the
* subtraction on top of it, maintained in the API because most of what an
* operator wants to hide has no row to hang a flag on. A disabled tool already
* disappears through `enabled`; this covers everything else, including whole
* subtrees via a trailing `*`.
*
* ### An exclusion takes the whole language group
*
* Both trees carry the same slugs here, so `/tools/x` and `/en/tools/x` are one
* page in two languages, and the sitemap emits reciprocal `hreflang` links for
* every URL. Dropping one side and keeping the other leaves an alternate
* pointing at a URL that is no longer offered — and one dangling alternate
* invalidates the entire set, the German side included. So a pattern matching
* either member excludes both. `isExcluded()` is what enforces that; nothing
* should compare a single path against the patterns directly.
*
* ### Fail-soft, in the safe direction
*
* Every failure answers "nothing excluded". The opposite default would empty
* the sitemap on an API hiccup, and since the API's own route is fail-soft too,
* neither end would go red.
*/
/** This site's id in the panel's site registry. */
var SITE_ID = "tools";
/**
* Every URL that shares one page's hreflang group. A pure prefix operation
* here, which is the whole reason the English tree was built with identical
* slugs. When `EN_ENABLED` is false there is no English tree.
*/
function hreflangGroup(pathname) {
	const neutral = neutralPath(pathname);
	return ["de", "en"].map((lang) => localizedPath(neutral, lang));
}
var exclusions = createSitemapExclusions({
	siteId: SITE_ID,
	contentBase: () => `${apiBase()}/content`,
	read: (url) => readContentJson(url),
	memo: (key, load, fallback, label) => memoisedOr(key, load, () => fallback, label),
	hreflangGroup,
	disabled: false
});
/** The patterns, memoised for the render generation; failures exclude nothing. */
var exclusionPatterns = exclusions.exclusionPatterns;
/** Is this page excluded — counting its English or German twin as the same page? */
var isExcluded = exclusions.isExcluded;
export { OG_LOCALE as a, categoryLabels as c, site as d, categoryLabels$1 as f, propertyNav as g, propertyContact as h, seoConfig as i, categoryOrder as l, t as m, hreflangGroup as n, localizedPath as o, copy as p, isExcluded as r, neutralPath as s, exclusionPatterns as t, links as u };
