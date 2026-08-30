/**
 * Centralized image configuration for LotusCare24.
 *
 * Client-supplied photography lives in:
 * /public/images/client/
 *
 * Temporary stock photography remains only where a confirmed
 * LotusCare24 client image is not yet available.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  credit: string;
  source?: "client" | "stock";
};

function pexels(id: number, width = 1920) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export const images = {
  /*
   * ============================================================
   * HOMEPAGE
   * ============================================================
   *
   * No confirmed client homepage hero photo has been supplied yet.
   * Keep temporary stock here until the correct client photograph
   * is provided.
   */
  heroThuiszorg: {
    src: pexels(29372734),
    alt: "Zorgverlener in gesprek met een oudere cliënt, thuis aan tafel",
    credit: "Jsme MILA — Pexels",
    source: "stock",
  },

  keukenWarmte: {
    src: pexels(29372712),
    alt: "Twee generaties in een warm gesprek aan de keukentafel",
    credit: "Jsme MILA — Pexels",
    source: "stock",
  },

  gesprekAanTafel: {
    src: pexels(29372713),
    alt: "Zorgverlener en cliënt in een ontspannen gesprek onder het genot van koffie",
    credit: "Jsme MILA — Pexels",
    source: "stock",
  },

  /*
   * ============================================================
   * ZORG
   * ============================================================
   */

  persoonlijkeVerzorging: {
    src: pexels(18459198),
    alt: "Zorgverlener die een moment van aandacht deelt met een oudere cliënt",
    credit: "Pexels",
    source: "stock",
  },

  /*
   * CONFIRMED CLIENT PHOTO
   *
   * File:
   * /public/images/client/verpleging.jpg
   *
   * Note: this file shows an outdoor, candid hand-holding moment — not a
   * clinical/nursing scene. Alt text describes what the photo actually
   * shows, not the service it illustrates; see docs/CONTENT-REQUIREMENTS.md.
   */
  verpleging: {
    src: "/images/client/verpleging.jpg",
    alt: "Een oudere vrouw die buitenshuis lachend iemands hand vasthoudt",
    credit: "Aangeleverd door de klant",
    source: "client",
  },

  begeleiding: {
    src: pexels(6135180),
    alt: "Twee mensen in een rustig gesprek",
    credit: "Pexels",
    source: "stock",
  },

  vierentwintigUur: {
    src: pexels(14866317),
    alt: "Een ouder echtpaar dat samen tijd doorbrengt",
    credit: "Pexels",
    source: "stock",
  },

  palliatief: {
    src: pexels(6129440),
    alt: "Een hand die troostend een andere hand vasthoudt",
    credit: "Pexels",
    source: "stock",
  },

  /*
   * ============================================================
   * MANTELZORG
   * ============================================================
   *
   * Confirmed client photo:
   * /public/images/client/mantelzorg.jpg
   *
   * Note: this file shows a caregiver with a visible id badge attending to
   * an older woman indoors — not the "mantelzorg" (informal family care)
   * scene the filename implies. Alt text describes what the photo actually
   * shows; see docs/CONTENT-REQUIREMENTS.md. Used only as a low-opacity
   * atmospheric background (via BackgroundImage, which renders alt="" —
   * this alt value isn't shown to visitors, only kept accurate for anyone
   * reusing this key elsewhere).
   */
  mantelzorg: {
    src: "/images/client/mantelzorg.jpg",
    alt: "Verpleegkundige met naamsticker die een oudere cliënt geruststellend een hand op de schouder legt, thuis in de woonkamer",
    credit: "Aangeleverd door de klant",
    source: "client",
  },

  /*
   * ============================================================
   * GENERAL / SUPPORTING IMAGERY
   * ============================================================
   */

  familie: {
    src: pexels(7492987),
    alt: "Familie die samen tijd doorbrengt",
    credit: "Kampus Production — Pexels",
    source: "stock",
  },

  team: {
    src: pexels(32082430),
    alt: "Team dat overlegt in een informele werkomgeving",
    credit: "Pexels",
    source: "stock",
  },

  samenwerken: {
    src: pexels(5439474),
    alt: "Collega's die samen een dossier bespreken",
    credit: "Pexels",
    source: "stock",
  },

  handenVertrouwen: {
    src: pexels(36237734),
    alt: "Close-up van oudere handen",
    credit: "Pexels",
    source: "stock",
  },

  /*
   * ============================================================
   * LEGACY ALIAS
   * ============================================================
   *
   * Existing pages may still reference ouderStelBankje.
   * Keep it pointing to the confirmed local client image so
   * existing pages do not break.
   */
  ouderStelBankje: {
    src: "/images/client/mantelzorg.jpg",
    alt: "Verpleegkundige met naamsticker die een oudere cliënt geruststellend een hand op de schouder legt, thuis in de woonkamer",
    credit: "Aangeleverd door de klant",
    source: "client",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;