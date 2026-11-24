// src/lib/toolCopy.ts
var toolCopyEn = {
	"qr-code-generator": {
		name: "QR Code Generator",
		description: "Create QR codes for free, no sign-up: for URLs, text, Wi-Fi access and vCards. PNG and SVG download, codes never expire, all local in your browser.",
		seoTitle: "Create a QR Code | free, no sign-up"
	},
	"passwort-generator": {
		name: "Password Generator",
		description: "Free password generator: secure random passwords with adjustable length and character sets. Runs entirely in your browser, nothing is transmitted.",
		seoTitle: "Password Generator | create secure passwords"
	},
	"utm-link-generator": {
		name: "UTM Generator",
		description: "Free UTM generator and builder: create trackable campaign links with utm_source, utm_medium and utm_campaign for Google Analytics. In your browser.",
		seoTitle: "UTM Generator | build UTM links for free"
	},
	"json-formatter": {
		name: "JSON Formatter & Validator",
		description: "Free JSON formatter: indent, validate and minify with precise error positions. Runs completely in your browser, your data is never uploaded.",
		seoTitle: "JSON Formatter & Validator | online, free"
	},
	"kontrast-checker": {
		name: "Colour Contrast Checker (WCAG)",
		description: "Free WCAG contrast checker: test the ratio between text and background against AA and AAA. For accessible, readable websites.",
		seoTitle: "Colour Contrast Checker (WCAG) | test accessibility"
	},
	"bild-komprimieren": {
		name: "Compress Image",
		description: "Compress images and reduce JPG file size: several photos at once, target size in KB, JPG, WebP, PNG and AVIF. Free, in your browser, nothing uploaded.",
		seoTitle: "Compress Images & Reduce JPG Size | free"
	},
	"pdf-werkzeuge": {
		name: "PDF Tools",
		description: "PDF tools: merge several PDFs, split out a page range and rotate pages. Straight in your browser, with no upload of your documents.",
		seoTitle: "PDF Tools | merge, split, rotate"
	},
	"pdf-komprimieren": {
		name: "Compress PDF",
		description: "Shrink a PDF without an upload: the embedded images are recomputed in your browser while the text is left untouched. For attachments too big to send.",
		seoTitle: "Compress PDF | reduce the file size"
	},
	"pdf-wasserzeichen": {
		name: "PDF Watermark",
		description: "Put a watermark on a PDF: “Draft”, “Confidential” or a wording of your own, with an adjustable angle and opacity. Runs locally in your browser.",
		seoTitle: "Add a PDF watermark | text stamp"
	},
	"bilder-zu-pdf": {
		name: "Images to PDF",
		description: "Turn photographed receipts and scans into one clean PDF: set the order, choose a page size, done. No upload, straight in your browser.",
		seoTitle: "Images to PDF | combine JPG and PNG"
	},
	"pdf-zu-bildern": {
		name: "PDF to Images",
		description: "Convert PDF pages into images: choose the resolution and the format, single pages or all of them. The file never leaves your machine.",
		seoTitle: "PDF to Images | pages as PNG or JPG"
	},
	"anfahrtskosten-rechner": {
		name: "Travel Cost Calculator",
		description: "Works out the trip from Schwarzenbek to an address: distance, driving time and cost at a price per kilometre of your choice, one way or return.",
		seoTitle: "Calculate travel costs from Schwarzenbek"
	},
	"etiketten-drucken": {
		name: "Print Labels",
		description: "Make your own label sheet: pick the grid, paste the addresses, print the PDF. Fits the common sheets and needs no installation at all.",
		seoTitle: "Print labels | address stickers as a PDF"
	},
	stundenzettel: {
		name: "Timesheet",
		description: "Create a monthly timesheet as a PDF: enter the hours, deduct the breaks, the totals are worked out. Ready to print and sign.",
		seoTitle: "Create a timesheet | record of working time"
	},
	texterkennung: {
		name: "Text Recognition (OCR)",
		description: "No more retyping: text recognition for photos and scanned images, German and English. It runs on your device and the picture stays there.",
		seoTitle: "Text recognition (OCR) online | text from an image"
	},
	"impressum-generator": {
		name: "German Imprint Generator",
		description: "Build a sample imprint under section 5 DDG: legal form, register, VAT ID and supervisory body appear as you tick them. Runs in your browser.",
		seoTitle: "Imprint generator | a sample under § 5 DDG"
	},
	"datenschutzerklaerung-generator": {
		name: "Privacy Policy Generator (GDPR)",
		description: "Assemble a sample GDPR privacy policy from blocks: hosting, contact form, cookies, analytics and newsletter. Nothing is uploaded anywhere.",
		seoTitle: "Privacy policy generator | a GDPR sample"
	},
	"barrierefreiheitserklaerung-generator": {
		name: "Accessibility Statement Generator",
		description: "Write an accessibility statement for the German BFSG or for BITV 2.0: compliance status, feedback route and enforcement, as a sample.",
		seoTitle: "Accessibility statement | BFSG and BITV 2.0"
	},
	"ki-kennzeichnung-bilder": {
		name: "AI Image Labelling",
		description: "Label AI images as required: burn a visible badge into the picture and embed a machine-readable note in the PNG or JPEG. All in your browser.",
		seoTitle: "Label AI images | badge and metadata"
	},
	"visitenkarten-designer": {
		name: "Business Card Designer",
		description: "Design a business card in the browser: accent colour, surface, corners, shadow and layout, with a live preview. PNG download at 85 × 55 mm, 300 dpi.",
		seoTitle: "Business Card Designer | design and download as PNG"
	},
	"designsystem-studio": {
		name: "Design System Studio",
		description: "Design a button or card visually, derive a design system with light and dark mode, check contrast and export it as CSS, SCSS or Tailwind.",
		seoTitle: "CSS design system generator | style components visually"
	}
};
/**
* The name / description / SEO title a tool page should render.
*
* German comes from the manifest (the pack owns it); English comes from the
* table above, falling back to the German manifest text so a new tool renders
* a complete page from the day it composes.
*/
function toolCopyFor(lang, tool, siteName) {
	const en = lang === "en" ? toolCopyEn[tool.slug] : void 0;
	if (en) return en;
	return {
		name: tool.name,
		description: tool.seo?.description ?? tool.description,
		seoTitle: tool.seo?.title ?? `${tool.name} | ${siteName}`
	};
}
export { toolCopyFor as t };
