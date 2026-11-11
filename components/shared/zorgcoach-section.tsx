import { cn } from "@/lib/utils";
import { sectionVariants } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { BackgroundImage } from "@/components/media/background-image";
import { PullQuote } from "@/components/shared/pull-quote";
import { Reveal } from "@/components/motion/reveal";
import type { ImageAsset } from "@/lib/images";

/**
 * Strong editorial section for the "Uw zorgcoach" concept the business asked
 * for. The supporting paragraph is original phrasing (not a reused sentence
 * from any reference site — see CLAUDE.md §3), built from the same
 * underlying idea the business described: one steady point of contact who
 * helps plan care over time. Two specifics from that description — service
 * area, and independence from municipalities/other organizations — aren't
 * confirmed for Lotus Vitaal, so they're flagged rather than stated as fact.
 */
function ZorgcoachSection({ image }: { image: ImageAsset }) {
  return (
    <section className={cn(sectionVariants({ surface: "accent" }), "relative isolate overflow-hidden")}>
      <BackgroundImage image={image} intensity="subtle" />
      <Container size="content">
        <Reveal className="flex flex-col gap-6">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Zorgplanning
          </span>
          <h2 className="text-balance font-heading text-3xl leading-tight font-medium sm:text-4xl">
            Uw zorgcoach
          </h2>
          <PullQuote>Eén vast aanspreekpunt voor al uw zorgvragen.</PullQuote>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Een zorgcoach denkt met u mee: over wat er nu nodig is, en over
              wat er verandert naarmate uw situatie dat vraagt. Zo hoeft u dat
              overzicht niet zelf te bewaken.
            </p>
            <p>
              Waar gewenst plannen we periodiek een moment om samen terug en
              vooruit te kijken, zodat u altijd weet bij wie u terechtkunt.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { ZorgcoachSection };
