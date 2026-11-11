/**
 * Roles we are interested in hearing from. Details such as hours, region and
 * a role description are optional and only shown when they are filled in.
 */
export type Vacancy = {
  slug: string;
  title: string;
  hours?: string;
  region?: string;
  description?: string;
};

export const vacancies: Vacancy[] = [
  { slug: "verzorgende-ig", title: "Verzorgende IG" },
  { slug: "wijkverpleegkundige", title: "Wijkverpleegkundige" },
  { slug: "zorgcoordinator", title: "Zorgcoördinator" },
];

export const openSollicitatieOption = "open-sollicitatie";
