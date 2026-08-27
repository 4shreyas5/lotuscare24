import type { Metadata } from "next";
import { TriangleAlert } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Klachtenregeling",
  description: "Hoe u een klacht kunt indienen bij LotusCare24.",
};

const sections = [
  {
    title: "Eerst het gesprek",
    body: "Heeft u een klacht over de zorg of onze dienstverlening? We horen dat het liefst rechtstreeks, zodat we samen naar een oplossing kunnen zoeken. Neem contact op met [CONTENT NODIG: naam/functie van het aanspreekpunt voor klachten].",
  },
  {
    title: "Een officiële klacht indienen",
    body: "[CONTENT NODIG: de formele interne klachtenprocedure — hoe een klacht schriftelijk kan worden ingediend, bij wie, en binnen welke termijn een reactie volgt.]",
  },
  {
    title: "Onafhankelijke geschilleninstantie",
    body: "[CONTENT NODIG: naam en contactgegevens van de erkende, onafhankelijke geschilleninstantie waarbij LotusCare24 is aangesloten, conform de Wkkgz.]",
  },
  {
    title: "Vertrouwelijkheid",
    body: "[CONTENT NODIG: bevestiging van de wijze waarop klachten vertrouwelijk worden behandeld.]",
  },
];

export default function KlachtenPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Klachten" }]} />

      <Section>
        <Container size="content">
          <h1 className="text-3xl leading-tight font-medium sm:text-4xl">
            Klachtenregeling
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Wij vinden het belangrijk dat u weet wat u kunt doen als u niet
            tevreden bent over onze zorg of dienstverlening.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-border bg-muted/40 p-4">
            <TriangleAlert
              className="mt-0.5 size-5 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Dit is de structuur van onze klachtenregeling. Wij verzinnen
              geen klachtenorganisatie, contactroute of procedure — de
              onderdelen hieronder worden aangevuld zodra deze daadwerkelijk
              zijn vastgesteld, conform de Wkkgz. Zie{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">
                docs/CONTENT-REQUIREMENTS.md
              </code>
              .
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-medium text-foreground">
                  {section.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
