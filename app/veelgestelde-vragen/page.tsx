import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqGroups } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over zorg, aanvragen, mantelzorg, kennismaking en praktische zaken bij Lotus Vitaal.",
};

function groupSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function VeelgesteldeVragenPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Veelgestelde vragen" }]} />
      <PageHero
        variant="minimal"
        eyebrow="Veelgestelde vragen"
        title="Antwoord op wat u waarschijnlijk afvraagt"
        intro="Staat uw vraag er niet tussen? Neem gerust rechtstreeks contact met ons op."
      />

      <Section className="pb-0">
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 border-b border-border pb-8">
          {faqGroups.map((group) => (
            <a
              key={group.title}
              href={`#${groupSlug(group.title)}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline"
            >
              {group.title}
            </a>
          ))}
        </Reveal>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          {faqGroups.map((group) => (
            <Reveal key={group.title} id={groupSlug(group.title)} className="scroll-mt-24">
              <h2 className="text-xl font-medium text-foreground sm:text-2xl">
                {group.title}
              </h2>
              <Accordion className="mt-4">
                {group.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTAQuiet
        title="Staat uw vraag er niet bij?"
        intro="Stel uw vraag rechtstreeks — we reageren persoonlijk."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/contact" />}>
            Neem contact op
          </Button>
        }
      />
    </>
  );
}
