import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTAQuiet } from "@/components/layout/cta-quiet";
import { Button } from "@/components/ui/button";
import { VacancyCard } from "@/components/careers/vacancy-card";
import { vacancies } from "@/lib/vacancies";

export const metadata: Metadata = {
  title: "Vacatures",
  description: "Actuele vacatures bij LotusCare24.",
};

export default function VacaturesPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Werken bij", href: "/werken-bij" }, { label: "Vacatures" }]}
      />
      <PageHero
        eyebrow="Werken bij LotusCare24"
        title="Actuele vacatures"
        intro="Onderstaande vacatures zijn voorbeelden van de rollen waarvoor wij mensen zoeken. De exacte invulling volgt zodra deze definitief is."
      />

      <Section>
        <div className="flex flex-col">
          {vacancies.map((vacancy) => (
            <VacancyCard key={vacancy.slug} vacancy={vacancy} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Staat uw functie er niet tussen, maar wilt u toch graag kennismaken?
          Een open sollicitatie is altijd welkom.
        </p>
      </Section>

      <CTAQuiet
        title="Geen passende vacature gezien?"
        intro="Stuur gerust een open sollicitatie — we denken graag met u mee."
        actions={
          <Button size="lg" variant="secondary" render={<Link href="/werken-bij/solliciteren" />}>
            Open sollicitatie
          </Button>
        }
      />
    </>
  );
}
