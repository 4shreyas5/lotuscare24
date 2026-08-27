import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, Users, Handshake } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { FeatureStrip } from "@/components/shared/feature-strip";

export const metadata: Metadata = {
  title: "Samenwerken",
  description:
    "Samenwerken met LotusCare24: voor huisartsen, verwijzers, zorgprofessionals en andere partners rond de cliënt.",
};

const audiences = [
  {
    icon: Stethoscope,
    title: "Huisartsen en verwijzers",
    description:
      "Korte lijnen over de zorg rond een gedeelde cliënt, met heldere terugkoppeling.",
  },
  {
    icon: Users,
    title: "Zorgprofessionals",
    description:
      "Samenwerking rond cliënten waarbij meerdere disciplines betrokken zijn.",
  },
  {
    icon: Handshake,
    title: "Organisaties en partners",
    description:
      "Ruimte voor samenwerking waar dat de zorg voor cliënten ten goede komt.",
  },
];

export default function SamenwerkenPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Samenwerken" }]} />
      <PageHero
        variant="minimal"
        eyebrow="Samenwerken"
        title="Goede zorg is zelden het werk van één partij"
        intro="LotusCare24 werkt waar nodig samen met huisartsen, verwijzers en andere zorgprofessionals — altijd met de cliënt als vertrekpunt."
      />

      <FeatureStrip items={audiences} />

      <Section surface="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We werken op dit moment aan het verder vormgeven van onze
            samenwerkingsverbanden.{" "}
            <span className="text-foreground">
              [CONTENT NODIG: bestaande samenwerkingspartners en
              ketenpartners]
            </span>{" "}
            worden hier vermeld zodra deze bevestigd zijn — we vermelden
            geen samenwerkingen die niet daadwerkelijk bestaan.
          </p>
        </Reveal>
      </Section>

      <CTAQuiet
        title="Wilt u samenwerken met LotusCare24?"
        intro="Neem contact op — we denken graag mee over de mogelijkheden."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/contact" />}>
            Neem contact op
          </Button>
        }
      />
    </>
  );
}
