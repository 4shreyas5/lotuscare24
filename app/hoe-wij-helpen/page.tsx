import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { Button } from "@/components/ui/button";
import { PullQuote } from "@/components/shared/pull-quote";
import { Reveal } from "@/components/motion/reveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Hoe wij helpen",
  description:
    "Hoe LotusCare24 zorg organiseert: van de eerste kennismaking tot zorgplanning en de rol van familie en mantelzorgers.",
};

export default function HoeWijHelpenPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Hoe wij helpen" }]} />
      <PageHero
        variant="hub"
        eyebrow="Hoe wij helpen"
        title="Zorg die begint bij een goed gesprek"
        intro="Voordat er iets georganiseerd wordt, luisteren we. Hier leest u hoe wij te werk gaan — van kennismaking tot doorlopende afstemming."
        image={images.gesprekAanTafel}
        actions={
          <Button size="lg" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />

      <Section>
        <SplitSection
          eyebrow="01 — Hoe werkt het?"
          title="Van kennismaking tot passende zorg"
          image={images.handenVertrouwen}
          imageVariant="overlap"
        >
          <p>
            Elk traject begint met een gesprek: wie bent u, wat speelt er, en
            wat heeft u nodig? Van daaruit bouwen we stap voor stap naar zorg
            die past — zonder overhaaste beslissingen.
          </p>
          <Link
            href="/hoe-wij-helpen/hoe-werkt-het"
            className="inline-flex w-fit items-center text-sm font-medium text-primary hover:underline"
          >
            Bekijk de volledige stappen
          </Link>
        </SplitSection>
      </Section>

      <Section surface="muted">
        <SplitSection
          eyebrow="02 — Zorgplanning"
          title="Zorg die overzichtelijk blijft"
          image={images.samenwerken}
          imagePosition="left"
          imageVariant="editorial"
        >
          <p>
            Wanneer meerdere vormen van zorg samenkomen, zorgen we dat het
            overzichtelijk blijft — voor u, en voor iedereen die bij uw zorg
            betrokken is.
          </p>
          <Link
            href="/hoe-wij-helpen/zorgplanning"
            className="inline-flex w-fit items-center text-sm font-medium text-primary hover:underline"
          >
            Lees over zorgplanning
          </Link>
        </SplitSection>
      </Section>

      <Section>
        <SplitSection
          eyebrow="03 — Mantelzorg"
          title="Ook aandacht voor uw naasten"
          image={images.mantelzorg}
          imageVariant="portrait"
        >
          <p>
            Zorg raakt niet alleen de cliënt. We houden rekening met de rol
            van familie en mantelzorgers, en denken mee over wat voor hen
            behapbaar is.
          </p>
          <Link
            href="/hoe-wij-helpen/mantelzorg"
            className="inline-flex w-fit items-center text-sm font-medium text-primary hover:underline"
          >
            Lees over mantelzorg
          </Link>
        </SplitSection>
      </Section>

      <Section surface="accent">
        <Reveal className="mx-auto max-w-2xl text-center">
          <PullQuote>
            Zorg werkt het beste wanneer u zich gehoord voelt — nog voordat
            er iets georganiseerd wordt.
          </PullQuote>
        </Reveal>
      </Section>

      <CTAQuiet
        title="Liever eerst even sparren?"
        intro="Een kennismakingsgesprek is vrijblijvend — u zit nergens aan vast."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}
