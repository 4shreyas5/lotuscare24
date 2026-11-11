import type { Metadata } from "next";
import { CircleCheckBig } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section } from "@/components/layout/section";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { Reveal } from "@/components/motion/reveal";
import { KennismakenForm } from "@/components/forms/kennismaken-form";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kennismaken",
  description:
    "Plan een vrijblijvende kennismaking met Lotus Vitaal — een rustig gesprek over uw situatie, zonder verplichtingen.",
};

const reassurances = [
  "Vrijblijvend — u zit nergens aan vast.",
  "Wij luisteren eerst, voordat we iets voorstellen.",
  "U bepaalt het tempo van het gesprek.",
  "Geen medische details nodig — een korte omschrijving is genoeg.",
];

export default function KennismakenPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Kennismaken" }]} />

      <Section className="pt-16 pb-10 md:pt-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Kennismaken
          </span>
          <h1 className="text-display-md mt-4 text-balance font-heading leading-[1.05] font-medium">
            Laten we rustig kennismaken
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Geen verkooppraatje, geen verplichtingen — gewoon een gesprek
            over uw situatie, op uw tempo.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <PlaceholderImage
              src={images.gesprekAanTafel.src}
              alt={images.gesprekAanTafel.alt}
              variant="portrait"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <Reveal>
              <h2 className="text-lg font-medium text-foreground">
                Wat u van dit gesprek kunt verwachten
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {reassurances.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleCheckBig
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <KennismakenForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
