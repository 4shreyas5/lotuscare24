/**
 * Centralized image configuration.
 *
 * TEMPORARY: every entry here is stock photography used as a stand-in for
 * real LotusCare24 photography (see docs/CONTENT-REQUIREMENTS.md). None of
 * the people shown are LotusCare24 staff or clients. Sourced from Pexels
 * (free license, no attribution required) — replace `src` with real
 * photography per entry as it becomes available; nothing else needs to change.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  /** Pexels photographer credit, kept for reference while the photo is temporary. */
  credit: string;
};

function pexels(id: number, width = 1920) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export const images = {
  heroThuiszorg: {
    src: pexels(29372734),
    alt: "Zorgverlener in gesprek met een oudere cliënt, thuis aan tafel",
    credit: "Jsme MILA — Pexels",
  },
  keukenWarmte: {
    src: pexels(29372712),
    alt: "Twee generaties in een warm gesprek aan de keukentafel",
    credit: "Jsme MILA — Pexels",
  },
  gesprekAanTafel: {
    src: pexels(29372713),
    alt: "Zorgverlener en cliënt in een ontspannen gesprek onder het genot van koffie",
    credit: "Jsme MILA — Pexels",
  },
  persoonlijkeVerzorging: {
    src: pexels(18459198),
    alt: "Zorgverlener die een moment van aandacht deelt met een oudere cliënt",
    credit: "Pexels",
  },
  verpleging: {
    src: pexels(6129688),
    alt: "Verpleegkundige die bij een cliënt thuis een controle uitvoert",
    credit: "Pexels",
  },
  begeleiding: {
    src: pexels(6135180),
    alt: "Twee mensen in een rustig gesprek op de bank",
    credit: "Pexels",
  },
  vierentwintigUur: {
    src: pexels(14866317),
    alt: "Een ouder echtpaar dat samen een wandeling maakt",
    credit: "Pexels",
  },
  palliatief: {
    src: pexels(6129440),
    alt: "Een hand die troostend een andere hand vasthoudt",
    credit: "Pexels",
  },
  mantelzorg: {
    src: pexels(5257479),
    alt: "Twee vrouwen die elkaars hand vasthouden tijdens een gesprek",
    credit: "Pexels",
  },
  familie: {
    src: pexels(7492987),
    alt: "Familie die samen tijd doorbrengt in de woonkamer",
    credit: "Kampus Production — Pexels",
  },
  team: {
    src: pexels(32082430),
    alt: "Team dat overlegt in een informele werkomgeving",
    credit: "Pexels",
  },
  samenwerken: {
    src: pexels(5439474),
    alt: "Collega's die samen een dossier bespreken",
    credit: "Pexels",
  },
  handenVertrouwen: {
    src: pexels(36237734),
    alt: "Close-up van gevouwen, oudere handen",
    credit: "Pexels",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
