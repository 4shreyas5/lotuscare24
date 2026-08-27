import { CircleCheckBig } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { images } from "@/lib/images";

const points = [
  "Vaste teams die u en uw situatie leren kennen.",
  "Korte lijnen: u weet altijd wie er komt en waarom.",
  "Aandacht voor wat écht nodig is, niet voor afvinklijstjes.",
];

/**
 * Quality framework — no invented certifications or quality marks. This is the
 * visual slot where real ones go once confirmed; see docs/CONTENT-REQUIREMENTS.md.
 */
function QualitySection() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <PlaceholderImage
            src={images.handenVertrouwen.src}
            alt={images.handenVertrouwen.alt}
            variant="portrait"
            sizes="(min-width: 1024px) 36vw, 100vw"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5 lg:col-span-7">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Kwaliteit en vertrouwen
          </span>
          <h2 className="text-balance text-2xl leading-tight font-medium sm:text-3xl">
            Waar u op kunt rekenen
          </h2>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kwaliteit in de zorg is meer dan een keurmerk. Het zit in hoe we
            werken:
          </p>
          <ul className="flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CircleCheckBig
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-base text-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Certificeringen en kwaliteitsinformatie worden hier binnenkort
            toegevoegd.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export { QualitySection };
