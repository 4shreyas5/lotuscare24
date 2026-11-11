import type { Metadata } from "next";
import Link from "next/link";
import { Compass, GraduationCap, HeartHandshake, Users } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CTAImage } from "@/components/layout/cta-image";
import { Button } from "@/components/ui/button";
import { FeatureStrip } from "@/components/shared/feature-strip";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Werken bij",
  description:
    "Werken bij Lotus Vitaal: zorg verlenen met ruimte voor persoonlijk vakmanschap, in een klein en vast team.",
};

const reasons = [
  {
    icon: Users,
    title: "Klein team, korte lijnen",
    description: "U werkt in een vast team en weet snel bij wie u moet zijn.",
  },
  {
    icon: Compass,
    title: "Ruimte voor eigen inzicht",
    description: "Vakmanschap wordt vertrouwd — geen strak keurslijf.",
  },
  {
    icon: HeartHandshake,
    title: "Aandacht voor u als mens",
    description: "Ook uw werkplezier en belastbaarheid tellen mee.",
  },
  {
    icon: GraduationCap,
    title: "Ruimte om te groeien",
    description: "Ontwikkeling die past bij uw rol en ambities.",
  },
];

export default function WerkenBijPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Werken bij" }]} />
      <PageHero
        variant="careers"
        eyebrow="Werken bij Lotus Vitaal"
        title="Zorg verlenen zoals het bedoeld is"
        intro="Bij Lotus Vitaal werkt u in een klein, vast team — met ruimte voor uw vakmanschap en aandacht voor wie u bent, niet alleen voor wat u doet."
        image={images.team}
        actions={
          <>
            <Button size="lg" render={<Link href="/werken-bij/vacatures" />}>
              Bekijk vacatures
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href="/werken-bij/solliciteren" />}
            >
              Open sollicitatie
            </Button>
          </>
        }
      />

      <FeatureStrip items={reasons} />

      <Section>
        <SplitSection
          eyebrow="Cultuur"
          title="Samen verantwoordelijk voor goede zorg"
          image={images.samenwerken}
          imageVariant="editorial"
        >
          <p>
            We geloven dat goede zorg begint bij mensen die met plezier
            werken. Daarom investeren we in een team waarin collega&apos;s
            elkaar kennen, elkaar aanspreken en elkaar ondersteunen.
          </p>
          <p>
            Wilt u weten wat wij te bieden hebben? Neem gerust vrijblijvend
            contact met ons op, dan vertellen we u er graag meer over.
          </p>
        </SplitSection>
      </Section>

      <Section surface="muted">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Rollen
          </span>
          <h2 className="text-balance text-2xl leading-tight font-medium sm:text-3xl">
            Bekijk de rollen waarvoor wij mensen zoeken
          </h2>
          <Button size="lg" variant="outline" render={<Link href="/werken-bij/vacatures" />}>
            Bekijk vacatures
          </Button>
        </div>
      </Section>

      <CTAImage
        title="Nieuwsgierig geworden?"
        intro="Bekijk onze actuele vacatures, of stuur een open sollicitatie."
        image={images.samenwerken}
        actions={
          <Button size="lg" render={<Link href="/werken-bij/vacatures" />}>
            Bekijk vacatures
          </Button>
        }
      />
    </>
  );
}
