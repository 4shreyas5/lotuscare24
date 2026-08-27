import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service/service-page-template";
import { getServiceBySlug } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "24-uurszorg",
  description:
    "24-uurszorg: continue zorg en nabijheid, dag en nacht, afgestemd op wat op dat moment nodig is.",
};

export default function VierentwintigUurszorgPage() {
  return <ServicePageTemplate service={getServiceBySlug("24-uurszorg")!} />;
}
