import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service/service-page-template";
import { getServiceBySlug } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Begeleiding",
  description:
    "Begeleiding bij structuur en dagelijks leven, afgestemd op wat voor u werkt.",
};

export default function BegeleidingPage() {
  return <ServicePageTemplate service={getServiceBySlug("begeleiding")!} />;
}
