import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/service/service-page-template";
import { getServiceBySlug } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Thuiszorg",
  description:
    "Thuiszorg door een vast, klein team — ondersteuning in en om het huis die aansluit bij uw eigen ritme.",
};

export default function ThuiszorgPage() {
  return <ServicePageTemplate service={getServiceBySlug("thuiszorg")!} />;
}
