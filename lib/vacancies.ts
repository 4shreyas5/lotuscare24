/**
 * No confirmed open vacancies yet — see docs/CONTENT-REQUIREMENTS.md. These
 * are clearly marked placeholders showing the intended structure (role,
 * region, hours, short description) so the real listings can drop in later
 * without any component changes.
 */
export type Vacancy = {
  slug: string;
  title: string;
  hours: string;
  region: string;
  description: string;
  placeholder: true;
};

export const vacancies: Vacancy[] = [
  {
    slug: "verzorgende-ig",
    title: "Verzorgende IG",
    hours: "[CONTENT NODIG: uren]",
    region: "[CONTENT NODIG: regio]",
    description:
      "[CONTENT NODIG: functieomschrijving zodra deze vacature definitief is.]",
    placeholder: true,
  },
  {
    slug: "wijkverpleegkundige",
    title: "Wijkverpleegkundige",
    hours: "[CONTENT NODIG: uren]",
    region: "[CONTENT NODIG: regio]",
    description:
      "[CONTENT NODIG: functieomschrijving zodra deze vacature definitief is.]",
    placeholder: true,
  },
  {
    slug: "zorgcoordinator",
    title: "Zorgcoördinator",
    hours: "[CONTENT NODIG: uren]",
    region: "[CONTENT NODIG: regio]",
    description:
      "[CONTENT NODIG: functieomschrijving zodra deze vacature definitief is.]",
    placeholder: true,
  },
];

export const openSollicitatieOption = "open-sollicitatie";
