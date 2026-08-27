export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

/** Zorg is presented as a dropdown in the header. */
export const zorgNavLinks: NavLink[] = [
  {
    label: "Thuiszorg",
    href: "/zorg/thuiszorg",
    description: "Ondersteuning bij het dagelijks leven, thuis.",
  },
  {
    label: "Persoonlijke verzorging",
    href: "/zorg/persoonlijke-verzorging",
    description: "Hulp bij wassen, aankleden en andere dagelijkse zorg.",
  },
  {
    label: "Verpleging",
    href: "/zorg/verpleging",
    description: "Verpleegkundige zorg door vakkundige professionals.",
  },
  {
    label: "Begeleiding",
    href: "/zorg/begeleiding",
    description: "Ondersteuning bij structuur en dagelijks leven.",
  },
  {
    label: "24-uurszorg",
    href: "/zorg/24-uurszorg",
    description: "Continue zorg en nabijheid, dag en nacht.",
  },
  {
    label: "Palliatieve zorg",
    href: "/zorg/palliatieve-zorg",
    description: "Zorg en aandacht in de laatste levensfase.",
  },
];

export const hoeWijHelpenLinks: NavLink[] = [
  {
    label: "Hoe werkt het?",
    href: "/hoe-wij-helpen/hoe-werkt-het",
    description: "De stappen van kennismaking tot zorg.",
  },
  {
    label: "Zorgplanning",
    href: "/hoe-wij-helpen/zorgplanning",
    description: "Hoe we zorg rond u coördineren.",
  },
  {
    label: "Mantelzorg",
    href: "/hoe-wij-helpen/mantelzorg",
    description: "De rol van familie en naasten.",
  },
];

export const overOnsLinks: NavLink[] = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Werkwijze", href: "/over-ons/werkwijze" },
  { label: "Kwaliteit", href: "/over-ons/kwaliteit" },
];

export const werkenBijLinks: NavLink[] = [
  { label: "Werken bij LotusCare24", href: "/werken-bij" },
  { label: "Vacatures", href: "/werken-bij/vacatures" },
  { label: "Solliciteren", href: "/werken-bij/solliciteren" },
];

/** Primary header nav. The CTA button (→ /kennismaken) is separate, not listed here. */
export const primaryNavLinks: NavLink[] = [
  { label: "Hoe wij helpen", href: "/hoe-wij-helpen" },
  { label: "Over LotusCare24", href: "/over-ons" },
  { label: "Werken bij", href: "/werken-bij" },
  { label: "Samenwerken", href: "/samenwerken" },
];

export const footerNavGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Zorg",
    links: [{ label: "Overzicht zorgaanbod", href: "/zorg" }, ...zorgNavLinks],
  },
  {
    title: "Hoe wij helpen",
    links: [
      { label: "Overzicht", href: "/hoe-wij-helpen" },
      ...hoeWijHelpenLinks,
    ],
  },
  {
    title: "Organisatie",
    links: [...overOnsLinks, { label: "Samenwerken", href: "/samenwerken" }],
  },
  {
    title: "Werken bij",
    links: werkenBijLinks,
  },
  {
    title: "Contact",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Kennismaken", href: "/kennismaken" },
      { label: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
    ],
  },
];

export const legalNavLinks: NavLink[] = [
  { label: "Privacyverklaring", href: "/privacy" },
  { label: "Klachtenregeling", href: "/klachten" },
];
