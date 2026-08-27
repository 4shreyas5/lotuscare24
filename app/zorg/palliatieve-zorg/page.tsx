import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service/service-page-template";
import { getServiceBySlug } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Palliatieve zorg",
  description:
    "Palliatieve zorg met rust, comfort en aandacht in de laatste levensfase — voor cliënt en naasten.",
};

export default function PalliatieveZorgPage() {
  return <ServicePageTemplate service={getServiceBySlug("palliatieve-zorg")!} />;
}
