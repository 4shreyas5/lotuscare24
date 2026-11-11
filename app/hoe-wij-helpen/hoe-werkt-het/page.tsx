import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/shared/timeline";

export const metadata: Metadata = {
  title: "Hoe werkt het?",
  description:
    "De vijf stappen van Lotus Vitaal: kennismaken, zorgbehoefte bespreken, zorg afstemmen, starten en blijven evalueren.",
};

const steps = [
  {
    title: "Kennismaken",
    description:
      "We beginnen met een vrijblijvend gesprek — telefonisch of bij u thuis. Geen verplichtingen, gewoon kennismaken en uitleggen hoe wij werken.",
  },
  {
    title: "Zorgbehoefte bespreken",
    description:
      "We bespreken uw situatie: wat er speelt, wat u nodig heeft en wat voor u belangrijk is. Ook de rol van familie of mantelzorgers komt hierbij aan bod.",
  },
  {
    title: "Zorg afstemmen",
    description:
      "Op basis van dat gesprek stellen we vast welke zorg passend is en door wie deze wordt uitgevoerd — met een klein, vast team dat u leert kennen.",
  },
  {
    title: "Start van de zorg",
    description:
      "De afgesproken zorg gaat van start. U weet wie er komt, wanneer, en waarvoor — zonder verrassingen.",
  },
  {
    title: "Blijven evalueren en afstemmen",
    description:
      "Situaties veranderen. We blijven in gesprek en stellen de zorg bij wanneer dat nodig is, zodat deze blijft aansluiten bij uw leven.",
  },
];

export default function HoeWerktHetPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Hoe wij helpen", href: "/hoe-wij-helpen" },
          { label: "Hoe werkt het?" },
        ]}
      />
      <PageHero
        variant="editorial"
        eyebrow="Hoe wij helpen"
        title="Vijf stappen naar passende zorg"
        intro="Zorg aanvragen voelt vaak spannend. Daarom houden wij het proces overzichtelijk en voorspelbaar — van eerste gesprek tot doorlopende afstemming."
      />

      <Section>
        <Timeline steps={steps} />
      </Section>

      <CTAQuiet
        title="Klaar voor de eerste stap?"
        intro="Een kennismakingsgesprek is vrijblijvend en verplicht u tot niets."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}
