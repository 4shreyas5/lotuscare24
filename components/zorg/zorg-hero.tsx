import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { Reveal } from "@/components/motion/reveal";
import { Accent } from "@/components/shared/accent";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

/**
 * Bespoke hub hero for /zorg — not the shared PageHero. Asymmetric editorial
 * split, oversized Newsreader headline, generous whitespace. Deliberately a
 * question ("welke zorg past...") rather than a declarative statement, since
 * this page's entire job is helping the visitor find the right service.
 */
function ZorgHero() {
  return (
    <section className="bg-background pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
      <Container size="default">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-sm font-medium tracking-wide text-primary uppercase">
                Zorgaanbod
              </span>
              <h1 className="text-display mt-5 text-balance font-heading font-medium text-foreground">
                Welke zorg past{" "}
                <Accent>
                  <em className="font-normal italic">bij uw situatie</em>
                </Accent>
                ?
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Van een beetje hulp in het dagelijks leven tot intensieve
                24-uurszorg. Hieronder ontdekt u de zes vormen van zorg die
                wij bieden.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8">
              <Button size="lg" render={<Link href="/kennismaken" />}>
                Plan een kennismaking
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <PlaceholderImage
                src={images.verpleging.src}
                alt={images.verpleging.alt}
                variant="editorial"
                priority
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { ZorgHero };
