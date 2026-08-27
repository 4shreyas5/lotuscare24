import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service/service-page-template";
import { getServiceBySlug } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Verpleging",
  description:
    "Verpleegkundige zorg door vakkundige professionals, bij u thuis — van wondzorg tot medicatiebegeleiding.",
};

export default function VerplegingPage() {
  return <ServicePageTemplate service={getServiceBySlug("verpleging")!} />;
}
