import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { ZorgcoachSection } from "@/components/shared/zorgcoach-section";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Zorgplanning",
  description:
    "Hoe LotusCare24 zorg rond u coördineert — overzichtelijk, met korte lijnen naar u, uw familie en andere betrokken zorgverleners.",
};

export default function ZorgplanningPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Hoe wij helpen", href: "/hoe-wij-helpen" },
          { label: "Zorgplanning" },
        ]}
      />
      <PageHero
        variant="editorial"
        eyebrow="Hoe wij helpen"
        title="Zorg die overzichtelijk blijft"
        intro="Wanneer verschillende vormen van zorg samenkomen, is overzicht belangrijk — voor u, voor uw familie, en voor iedereen die bij uw zorg betrokken is."
      />

      <Section>
        <SplitSection
          eyebrow="Eén team, één overzicht"
          title="Een vast team houdt de lijnen kort"
          image={images.samenwerken}
          imageVariant="editorial"
        >
          <p>
            In plaats van losse, wisselende zorgverleners werkt u met een
            klein, vast team. Zij kennen uw situatie, weten wat er speelt en
            stemmen onderling af — zodat u dat niet zelf hoeft te doen.
          </p>
          <p>
            Wijzigt uw situatie, dan wordt de zorg opnieuw bekeken en waar
            nodig bijgesteld, in overleg met u.
          </p>
        </SplitSection>
      </Section>

      <Section surface="muted">
        <SplitSection
          eyebrow="Samenwerking"
          title="Afstemming met andere betrokkenen"
          image={images.keukenWarmte}
          imagePosition="left"
          imageVariant="atmospheric"
        >
          <p>
            Waar relevant stemmen wij af met andere betrokkenen rond uw zorg,
            zoals uw huisarts of andere behandelaars — met uw toestemming en
            altijd in uw belang.
          </p>
          <p>
            Zo blijft de zorg rondom u samenhangend, ook als er meerdere
            partijen bij betrokken zijn.
          </p>
        </SplitSection>
      </Section>

      <ZorgcoachSection image={images.gesprekAanTafel} />

      <CTAQuiet
        title="Vragen over hoe wij zorg coördineren?"
        intro="We lichten het graag persoonlijk toe in een kennismakingsgesprek."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}
