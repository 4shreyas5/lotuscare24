import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service/service-page-template";
import { getServiceBySlug } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Persoonlijke verzorging",
  description:
    "Hulp bij wassen, aankleden en andere dagelijkse verzorging — met aandacht voor waardigheid en privacy.",
};

export default function PersoonlijkeVerzorgingPage() {
  return (
    <ServicePageTemplate service={getServiceBySlug("persoonlijke-verzorging")!} />
  );
}
