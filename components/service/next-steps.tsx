import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  { title: "Kennismaken", description: "Een eerste, vrijblijvend gesprek." },
  {
    title: "Uw situatie bespreken",
    description: "Wat heeft u nodig, en wat is voor u belangrijk?",
  },
  {
    title: "Zorg afstemmen",
    description: "Samen stellen we vast welke zorg bij u past.",
  },
  {
    title: "Starten en bijstellen",
    description: "Met ruimte om mee te bewegen als uw situatie verandert.",
  },
];

/** Compact "hoe het werkt" recap, reused identically across all service pages. */
function NextSteps() {
  return (
    <Section surface="muted">
      <SectionHeading
        eyebrow="De volgende stap"
        title="Hoe het werkt"
        actions={
          <Link
            href="/hoe-wij-helpen/hoe-werkt-het"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Meer over ons proces
            <ArrowRightIcon className="size-3.5" aria-hidden="true" />
          </Link>
        }
      />
      <Reveal delay={0.1} className="mt-10">
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2">
              <span className="font-heading text-2xl text-primary" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

export { NextSteps };
