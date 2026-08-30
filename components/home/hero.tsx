import Link from "next/link";

import { Container } from "@/components/layout/container";
import { HeroImage } from "@/components/home/hero-image";
import { Reveal } from "@/components/motion/reveal";
import { Accent } from "@/components/shared/accent";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

/**
 * Full-bleed editorial hero — the highest-priority visual moment on the site.
 * The photograph fills the section edge to edge; the headline overlaps its lower
 * third directly on the image (a restrained bottom scrim for legibility, no card,
 * no glassmorphism). Deliberately its own composition, not the shared PageHero.
 */
function Hero() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden bg-primary sm:min-h-[85svh] lg:min-h-[92svh]">
      <HeroImage src={images.keukenWarmte.src} alt={images.keukenWarmte.alt} />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/80 via-black/35 to-transparent"
      />

      <Container size="default" className="relative w-full pt-32 pb-10 sm:pb-14 lg:pb-16">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-medium tracking-wide text-primary-foreground/80 uppercase">
              Persoonlijke thuiszorg
            </span>
            <h1 className="text-display mt-4 text-balance font-heading font-medium text-primary-foreground">
              Zorg die zich aanpast aan{" "}
              <Accent>
                <em className="font-normal italic">úw leven</em>
              </Accent>{" "}
              — niet andersom.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
              Een klein, vertrouwd team leert u en uw situatie kennen — zodat
              zorg nooit aanvoelt als iets dat u overkomt, maar als iets dat
              bij u past.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" render={<Link href="/kennismaken" />}>
              Plan een kennismaking
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href="/zorg" />}
            >
              Bekijk onze zorg
            </Button>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-xs text-primary-foreground/55">
              Ter illustratie — geen LotusCare24-cliënt of medewerker
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
