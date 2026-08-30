import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { PullQuote } from "@/components/shared/pull-quote";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Hoe LotusCare24 zorg vormgeeft: van luisteren naar een zorgvraag tot een klein, vast team dat met u meebeweegt.",
};

export default function WerkwijzePage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Over ons", href: "/over-ons" }, { label: "Werkwijze" }]}
      />
      <PageHero
        variant="editorial"
        eyebrow="Onze werkwijze"
        title="Zorg die stap voor stap wordt opgebouwd"
        intro="Geen kant-en-klaar pakket, maar zorg die groeit vanuit een gesprek — en meebeweegt zolang dat nodig is."
      />

      <Section>
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Het begint altijd met luisteren. Niet naar een checklist met
            indicaties, maar naar iemands verhaal: wat er speelt, wat lastig
            is geworden, en wat iemand nog het liefst zelf doet. Pas daarna
            gaan we kijken wat er nodig is.
          </p>
        </Reveal>
      </Section>

      <Section surface="muted">
        <SplitSection
          eyebrow="Stap één"
          title="Een compleet beeld, geen momentopname"
          image={images.samenwerken}
          imageVariant="overlap"
        >
          <p>
            Een zorgvraag is zelden een op zichzelf staand probleem. We kijken
            naar de hele situatie: gezondheid, dagelijks leven, en de mensen
            eromheen. Zo voorkomen we dat zorg wordt georganiseerd rond een
            momentopname die morgen al achterhaald is.
          </p>
        </SplitSection>
      </Section>

      <Section>
        <SplitSection
          eyebrow="Stap twee"
          title="Een team dat past, niet toevallig beschikbaar is"
          image={images.mantelzorg}
          imagePosition="left"
          imageVariant="editorial"
        >
          <p>
            We stellen een klein team samen dat past bij de situatie — qua
            expertise, maar ook qua persoonlijkheid. Dat team blijft
            betrokken, in plaats van steeds te wisselen.
          </p>
        </SplitSection>
      </Section>

      <Section surface="muted">
        <SplitSection
          eyebrow="Stap drie"
          title="Meebewegen, niet vasthouden aan een plan"
          image={images.keukenWarmte}
          imageVariant="portrait"
        >
          <p>
            Een zorgplan is een startpunt, geen eindpunt. Situaties
            veranderen — soms geleidelijk, soms ineens. We blijven in gesprek
            en stellen bij waar dat nodig is, in plaats van vast te houden
            aan wat ooit is afgesproken.
          </p>
        </SplitSection>
      </Section>

      <Section surface="accent">
        <Reveal className="mx-auto max-w-2xl text-center">
          <PullQuote>Een zorgplan is een startpunt, geen wet.</PullQuote>
        </Reveal>
      </Section>

      <CTAQuiet
        title="Ervaar hoe dit in de praktijk werkt"
        intro="De beste manier om onze werkwijze te leren kennen, is een gesprek."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}
