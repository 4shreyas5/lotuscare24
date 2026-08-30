import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section } from "@/components/layout/section";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { SollicitatieForm } from "@/components/forms/sollicitatie-form";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Solliciteren",
  description: "Solliciteer bij LotusCare24 — vast team, ruimte voor vakmanschap.",
};

export default async function SolliciterenPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const functie = typeof params.functie === "string" ? params.functie : undefined;

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Werken bij", href: "/werken-bij" }, { label: "Solliciteren" }]}
      />

      <Section className="pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-sm font-medium tracking-wide text-primary uppercase">
              Solliciteren
            </span>
            <h1 className="text-display-md mt-4 text-balance leading-[1.05] font-medium">
              Vertel ons over uzelf
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Vul onderstaand formulier in — we nemen persoonlijk contact met
              u op om kennis te maken.
            </p>
            <div className="mt-10">
              <SollicitatieForm defaultFunctie={functie} />
            </div>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderImage
              src={images.keukenWarmte.src}
              alt={images.keukenWarmte.alt}
              variant="editorial"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Ter illustratie — geen LotusCare24-medewerkers
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
