import type { ToolCategory } from "@tracht-digital-labs/tds-tools-contract";
import type { Lang } from "./seo";

/**
 * Everything the SITE says, in both languages.
 *
 * The split of responsibility is deliberate and worth keeping:
 *
 * - The **tool packs** own a tool's German name, description and SEO title
 *   (their manifests) and their own island labels (their `STRINGS` tables).
 * - **This file** owns the site chrome; **`toolCopy.ts`** owns the ENGLISH
 *   copy of each tool.
 * - **`content/guides`** owns the long-form guide in both languages.
 *
 * Why the English tool copy lives here rather than in the four pack manifests:
 * the packs publish independently, and this is the surface that actually
 * renders those strings into `<title>` and `<meta>` — the same reasoning that
 * already puts the description BUDGET test here rather than in the packs. A
 * pack shipping an over-long or duplicate English description would otherwise
 * fail nothing until it was live.
 *
 * German is the default everywhere: the audience is local businesses in
 * Northern Germany, and English is the addition, not the base.
 */

export interface SiteCopy {
  /** Used in the `<title>` of the catalog page. */
  tagline: string;
  /** Site-level meta description. Budget: 80 < n ≤ 160, brand + town inside. */
  description: string;
  heroHeadlineLead: string;
  heroHeadlineAccent: string;
  heroHeadlineTail: string;
  navAllTools: string;
  navBlog: string;
  navHome: string;
  /** Accessible name of the mobile navigation toggle. */
  navMenu: string;
  toBlog: string;
  toHome: string;
  cta: string;
  skipToContent: string;
  emptyCatalog: string;
  /** Heading above the catalog grid; the tool count sits beside it. */
  toolCount: (n: number) => string;
  /** The collapsible filter bar above the grid (tds-shared .tds-filterbar). */
  filter: {
    toggle: string;
    search: string;
    category: string;
    all: string;
    access: string;
    accesses: { all: string; free: string; premium: string; login: string };
    reset: string;
    close: string;
    none: string;
  };
  guideHeading: string;
  guideUseCases: string;
  guideSteps: string;
  guidePrivacy: string;
  guideFaq: string;
  relatedHeading: string;
  breadcrumbAll: string;
  footerBlurb: string;
  footerGroupBrand: string;
  footerGroupLegal: string;
  footerGroupServices: string;
  footerHome: string;
  footerBlog: string;
  footerPortal: string;
  footerContact: string;
  footerImprint: string;
  footerPrivacy: string;
  footerAdConsent: string;
  footerTagline: string;
  /**
   * Access labels on catalog cards and tool pages, derived from the catalog
   * flags (`isPremium`, `requiresLogin`) — never written per tool.
   */
  access: {
    /** Accessible name of the fact list on a tool page. */
    label: string;
    free: string;
    premium: string;
    login: string;
    noLogin: string;
    browser: string;
  };
  /** The short FAQ under the catalog; feeds the visible block and FAQPage. */
  catalogFaqHeading: string;
  catalogFaq: readonly { q: string; a: string }[];
  languageSwitch: string;
  languageOther: string;
  /** The premium block under the catalog (visitors without a premium account). */
  premiumHeading: string;
  premiumBody: string;
  premium: {
    plansHeading: string;
    perMonth: string;
    unlock: string;
    recommended: string;
    unlocks: string;
    terms: string;
    noPlans: string;
    signupHint: string;
    createAccount: string;
    signIn: string;
    manage: string;
    active: string;
    redirecting: string;
    failed: string;
  };
  /** The Ratgeber block on every tool page. */
  ratgeber: {
    heading: string;
    read: string;
    more: string;
    minutes: (n: number) => string;
  };
}

export const copy = {
  de: {
    tagline: "Werkzeuge für Unternehmen, vieles kostenlos",
    /**
     * Order is deliberate: the concrete tool names come first (this site
     * ranks on tool queries), brand and town ride in the tail where they
     * still fit inside the ~160 characters a SERP renders.
     */
    description:
      "Bilder komprimieren, QR-Codes erstellen, UTM-Links, PDF und Texterkennung im Browser, vieles kostenlos, ohne Anmeldung. Von TDS aus Schwarzenbek bei Hamburg.",
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
    toolCount: (n: number) => `${n} ${n === 1 ? "Werkzeug" : "Werkzeuge"}`,
    filter: {
      toggle: "Filter",
      search: "Werkzeug suchen",
      category: "Kategorie",
      all: "Alle",
      access: "Zugang",
      accesses: { all: "Alle", free: "Kostenlos", premium: "Premium", login: "Mit Anmeldung" },
      reset: "Filter zurücksetzen",
      close: "Filter schließen",
      none: "Kein Werkzeug passt zu diesen Filtern.",
    },
    guideHeading: "Ratgeber",
    guideUseCases: "Typische Anwendungsfälle",
    guideSteps: "Schritt für Schritt",
    guidePrivacy: "Was mit den Daten passiert",
    guideFaq: "Häufige Fragen",
    relatedHeading: "Passt dazu",
    breadcrumbAll: "Alle Tools",
    footerBlurb:
      "Digitale Werkzeuge direkt im Browser, ohne Installation, vieles davon kostenlos und ohne Anmeldung.",
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
      browser: "Läuft im Browser",
    },
    catalogFaqHeading: "Häufige Fragen",
    catalogFaq: [
      {
        q: "Welche Werkzeuge sind kostenlos?",
        a: "Jedes Werkzeug mit dem Kennzeichen „Kostenlos“ ist ohne Bezahlung nutzbar. Braucht es ein Konto, steht zusätzlich „Mit Anmeldung“ daran. Premium-Werkzeuge laufen über ein Monatsabo, zum Ende jedes Abrechnungsmonats kündbar.",
      },
      {
        q: "Werden Dateien oder Eingaben hochgeladen?",
        a: "Nein. Die Werkzeuge rechnen im Browser, Eingaben, Dateien und Bilder verlassen das Gerät nicht. Wo ein Werkzeug davon abweicht, sagt es sein Ratgeber im Abschnitt zum Datenschutz.",
      },
      {
        q: "Muss etwas installiert werden?",
        a: "Nein. Jedes Werkzeug läuft in einem aktuellen Browser auf Computer, Tablet oder Smartphone. Einmal geöffnete Werkzeugseiten funktionieren auf demselben Gerät auch offline.",
      },
    ],
    languageSwitch: "Sprache",
    languageOther: "English",
    premiumHeading: "Premium-Werkzeuge",
    premiumBody:
      "Für alles, was jede Woche wieder anfällt: Die Premium-Werkzeuge erledigen die aufwendigeren Arbeiten in einem Rutsch, genauso direkt im Browser wie alle anderen, ohne Upload und ohne Installation. Ein Abo schaltet alle Werkzeuge seiner Stufe frei.",
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
      failed: "Das Freischalten konnte nicht gestartet werden. Bitte später erneut versuchen.",
    },
    ratgeber: {
      heading: "Aus dem Ratgeber",
      read: "Ganzen Artikel im Ratgeber lesen",
      more: "Mehr Anleitungen und Hintergründe im Ratgeber",
      minutes: (n: number) => `${n} Min. Lesezeit`,
    },
  },
  en: {
    tagline: "Digital tools for business, much of it free",
    description:
      "Compress images, create QR codes, UTM links, PDF tools and OCR in your browser, much of it free, no sign-up. By TDS in Schwarzenbek near Hamburg.",
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
    toolCount: (n: number) => `${n} ${n === 1 ? "tool" : "tools"}`,
    filter: {
      toggle: "Filter",
      search: "Search tools",
      category: "Category",
      all: "All",
      access: "Access",
      accesses: { all: "All", free: "Free", premium: "Premium", login: "Sign-in required" },
      reset: "Reset filters",
      close: "Close filters",
      none: "No tool matches these filters.",
    },
    guideHeading: "Guide",
    guideUseCases: "Typical use cases",
    guideSteps: "How to use it",
    guidePrivacy: "What happens to your data",
    guideFaq: "Frequently asked questions",
    relatedHeading: "Related tools",
    breadcrumbAll: "All tools",
    footerBlurb:
      "Digital tools right in your browser, nothing to install, much of it free and without a sign-up.",
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
      browser: "Runs in your browser",
    },
    catalogFaqHeading: "Frequently asked questions",
    catalogFaq: [
      {
        q: "Which tools are free?",
        a: "Every tool marked “Free” can be used without paying. If it needs an account, it is also marked “Sign-in required”. Premium tools come with a monthly subscription, cancellable at the end of any billing month.",
      },
      {
        q: "Are files or inputs uploaded?",
        a: "No. The tools compute in your browser; inputs, files and images never leave your device. Where a tool differs, its guide says so in the section on data.",
      },
      {
        q: "Is there anything to install?",
        a: "No. Every tool runs in a current browser on a computer, tablet or phone. Tool pages opened once keep working offline on the same device.",
      },
    ],
    languageSwitch: "Language",
    languageOther: "Deutsch",
    premiumHeading: "Premium tools",
    premiumBody:
      "For the jobs that come back every week: the premium tools handle the heavier work in one go, right in your browser like all the others, no upload, no installation. One subscription unlocks every tool in its plan.",
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
      failed: "Unlocking could not be started. Please try again later.",
    },
    ratgeber: {
      heading: "From the Ratgeber",
      read: "Read the full article in the Ratgeber",
      more: "More guides and background in the Ratgeber",
      minutes: (n: number) => `${n} min read`,
    },
  },
} satisfies Record<Lang, SiteCopy>;

/** The string table for a language. */
export function t(lang: Lang): SiteCopy {
  return copy[lang];
}

/** Category section headings. */
export const categoryLabels: Record<Lang, Record<ToolCategory, string>> = {
  de: {
    content: "Inhalte",
    developer: "Entwickler",
    design: "Design",
    marketing: "Marketing",
    media: "Medien",
    security: "Sicherheit",
    business: "Business",
    compliance: "Recht & Pflichten",
    other: "Weitere",
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
    other: "Other",
  },
};
