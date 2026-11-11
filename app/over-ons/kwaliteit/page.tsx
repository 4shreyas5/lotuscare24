import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Scale } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { FeatureStrip } from "@/components/shared/feature-strip";

export const metadata: Metadata = {
  title: "Kwaliteit en vertrouwen",
  description:
    "Hoe Lotus Vitaal kwaliteit waarborgt, en waar u onze certificeringen, klachtenregeling en privacyverklaring vindt.",
};

const references = [
  {
    icon: Scale,
    title: "Klachtenregeling",
    description: "Onze procedure voor klachten, altijd inzichtelijk.",
    href: "/klachten",
    linkLabel: "Bekijk de klachtenregeling",
  },
  {
    icon: FileText,
    title: "Privacyverklaring",
    description: "Hoe wij omgaan met uw persoonsgegevens.",
    href: "/privacy",
    linkLabel: "Bekijk de privacyverklaring",
  },
];

export default function KwaliteitPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Over ons", href: "/over-ons" }, { label: "Kwaliteit" }]}
      />
      <PageHero
        variant="minimal"
        eyebrow="Kwaliteit en vertrouwen"
        title="Waar u op kunt rekenen"
        intro="Kwaliteit in de zorg is meer dan een keurmerk. Het zit in hoe we werken: met vaste teams, korte lijnen en aandacht voor wat écht nodig is."
      />

      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We vinden het belangrijk dat kwaliteit niet alleen voelbaar is,
            maar ook toetsbaar. Hieronder vindt u waar u meer kunt lezen
            over onze klachtenregeling en de omgang met uw gegevens.
          </p>
        </Reveal>
      </Section>

      <FeatureStrip items={references} />

      <CTAQuiet
        title="Vragen over kwaliteit of veiligheid?"
        intro="We beantwoorden ze graag persoonlijk."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/contact" />}>
            Neem contact op
          </Button>
        }
      />
    </>
  );
}
