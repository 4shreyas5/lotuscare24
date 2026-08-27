import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { PullQuote } from "@/components/shared/pull-quote";

/** Pull-quote style callout — deliberately text-only and image-free for visual rhythm. */
function MantelzorgCallout() {
  return (
    <Section surface="accent">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="text-sm font-medium tracking-wide text-primary uppercase">
          Voor familie en mantelzorgers
        </span>
        <PullQuote className="lg:text-4xl">
          Zorg raakt niet alleen de cliënt — ook de mensen eromheen.
        </PullQuote>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          LotusCare24 ziet en begrijpt de rol van familie en mantelzorgers. We
          denken met u mee, houden u op de hoogte en zoeken naar zorg die ook
          voor u als naaste behapbaar is.
        </p>
        <Link
          href="/hoe-wij-helpen/mantelzorg"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Meer over mantelzorg
          <ArrowRightIcon className="size-3.5" aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}

export { MantelzorgCallout };
