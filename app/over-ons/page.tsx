import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Sparkles, Users } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CTAImage } from "@/components/layout/cta-image";
import { Button } from "@/components/ui/button";
import { FeatureStrip } from "@/components/shared/feature-strip";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Lotus Vitaal is er voor mensen die zorg nodig hebben in hun eigen huis — met persoonlijke aandacht en een vast, klein team.",
};

const values = [
  {
    icon: Users,
    title: "Menselijk",
    description:
      "Achter elke zorgvraag zit een mens, geen dossier. Dat is waar we vanuit vertrekken.",
  },
  {
    icon: Sparkles,
    title: "Persoonlijk",
    description: "Geen standaardpakket, maar zorg die is afgestemd op u.",
  },
  {
    icon: HeartHandshake,
    title: "Betrokken",
    description:
      "Een vast team dat u leert kennen — en betrokken blijft, ook als uw situatie verandert.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Over ons" }]} />
      <PageHero
        variant="hub"
        eyebrow="Over Lotus Vitaal"
        title="Hier staat de mens centraal"
        intro="Lotus Vitaal is er voor mensen die zorg nodig hebben in hun eigen huis — en voor de mensen om hen heen. Wij geloven dat goede zorg begint met aandacht, niet met een protocol."
        image={images.familie}
        actions={
          <Button size="lg" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />

      <FeatureStrip items={values} />

      <Section surface="muted">
        <SplitSection
          eyebrow="Onze aanpak"
          title="Klein beginnen, goed luisteren"
          image={images.team}
          imageVariant="editorial"
        >
          <p>
            We werken bewust met kleine, vaste teams. Niet omdat het
            makkelijker organiseert, maar omdat continuïteit ertoe doet: een
            vertrouwd gezicht maakt zorg minder ingrijpend.
          </p>
          <p>
            Onze werkwijze lichten we graag verder toe — inclusief hoe we
            zorgvragen in kaart brengen en zorg vormgeven.
          </p>
          <Link
            href="/over-ons/werkwijze"
            className="inline-flex w-fit items-center text-sm font-medium text-primary hover:underline"
          >
            Lees over onze werkwijze
          </Link>
        </SplitSection>
      </Section>

      <Section>
        <SplitSection
          eyebrow="Kwaliteit"
          title="Vertrouwen dat u kunt controleren"
          image={images.handenVertrouwen}
          imagePosition="left"
          imageVariant="portrait"
        >
          <p>
            Vertrouwen ontstaat niet vanzelf. Op onze kwaliteitspagina leest u
            hoe wij kwaliteit waarborgen, en vindt u — zodra beschikbaar —
            onze certificeringen en kwaliteitsinformatie.
          </p>
          <Link
            href="/over-ons/kwaliteit"
            className="inline-flex w-fit items-center text-sm font-medium text-primary hover:underline"
          >
            Lees over kwaliteit en vertrouwen
          </Link>
        </SplitSection>
      </Section>

      <CTAImage
        title="Maak kennis met Lotus Vitaal"
        intro="Het beste beeld krijgt u in een persoonlijk gesprek."
        image={images.familie}
        actions={
          <Button size="lg" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}
