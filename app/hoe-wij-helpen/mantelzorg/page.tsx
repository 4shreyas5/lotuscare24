import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { InfoList } from "@/components/service/info-list";
import { PullQuote } from "@/components/shared/pull-quote";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Mantelzorg",
  description:
    "De rol van familie en mantelzorgers bij LotusCare24 — hoe wij rekening houden met de mensen om de cliënt heen.",
};

export default function MantelzorgPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Hoe wij helpen", href: "/hoe-wij-helpen" },
          { label: "Mantelzorg" },
        ]}
      />
      <PageHero
        variant="editorial"
        eyebrow="Voor familie en mantelzorgers"
        title="Zorg raakt niet alleen de cliënt"
        intro="Ook de mensen eromheen voelen wat er speelt. LotusCare24 ziet en begrijpt die rol — en houdt daar in de zorg rekening mee."
        image={images.mantelzorg}
        actions={
          <Button size="lg" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />

      <Section surface="accent">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <PullQuote className="sm:text-4xl">U hoeft het niet alleen te doen.</PullQuote>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Of u nu dagelijks meehelpt of op afstand betrokken bent: we
            denken met u mee, houden u op de hoogte, en zoeken naar zorg die
            ook voor u als naaste behapbaar blijft.
          </p>
        </Reveal>
      </Section>

      <Section>
        <SplitSection
          eyebrow="Betrokkenheid"
          title="Betrokken zonder dat het moet"
          image={images.familie}
          imageVariant="portrait"
        >
          <p>
            Sommige mantelzorgers willen nauw betrokken blijven, anderen
            hebben juist behoefte aan ontlasting. Beide is goed. We bespreken
            samen met u en uw naaste hoe die betrokkenheid eruitziet.
          </p>
          <p>
            Zo blijft mantelzorg iets wat u kunt volhouden, in plaats van iets
            dat op uw schouders blijft rusten.
          </p>
        </SplitSection>
      </Section>

      <Section surface="muted">
        <InfoList
          title="Wat u van ons kunt verwachten"
          items={[
            "Een vast aanspreekpunt, ook voor u als familie of mantelzorger.",
            "Heldere afstemming over wie wat doet — zodat taken niet onduidelijk blijven.",
            "Ruimte om uw eigen grenzen aan te geven, zonder dat dit de zorg voor uw naaste in de weg staat.",
            "Aandacht voor hoe het met u gaat, niet alleen met de cliënt.",
          ]}
        />
      </Section>

      <CTAQuiet
        title="Wilt u weten wat dit voor uw situatie betekent?"
        intro="In een kennismakingsgesprek bespreken we ook uw rol als familie of mantelzorger."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}
