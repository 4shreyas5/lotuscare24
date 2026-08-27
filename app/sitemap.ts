import type { MetadataRoute } from "next";

const baseUrl = "https://lotuscare24.com";

const routes = [
  "",
  "/zorg",
  "/zorg/thuiszorg",
  "/zorg/persoonlijke-verzorging",
  "/zorg/verpleging",
  "/zorg/begeleiding",
  "/zorg/24-uurszorg",
  "/zorg/palliatieve-zorg",
  "/hoe-wij-helpen",
  "/hoe-wij-helpen/hoe-werkt-het",
  "/hoe-wij-helpen/zorgplanning",
  "/hoe-wij-helpen/mantelzorg",
  "/over-ons",
  "/over-ons/werkwijze",
  "/over-ons/kwaliteit",
  "/werken-bij",
  "/werken-bij/vacatures",
  "/werken-bij/solliciteren",
  "/samenwerken",
  "/veelgestelde-vragen",
  "/contact",
  "/kennismaken",
  "/privacy",
  "/klachten",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
