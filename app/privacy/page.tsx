import type { Metadata } from "next";
import { TriangleAlert } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Hoe LotusCare24 omgaat met persoonsgegevens.",
};

const sections = [
  {
    title: "Wie zijn wij",
    body: "[CONTENT NODIG: statutaire naam, KvK-nummer en contactgegevens van de verwerkingsverantwoordelijke.]",
  },
  {
    title: "Welke gegevens verzamelen wij",
    body: "[CONTENT NODIG: overzicht van verzamelde persoonsgegevens per doel, bijvoorbeeld via contactformulieren, kennismakingsaanvragen en sollicitaties.]",
  },
  {
    title: "Waarvoor gebruiken wij uw gegevens",
    body: "[CONTENT NODIG: rechtsgrond en doeleinden per verwerking, conform de AVG.]",
  },
  {
    title: "Hoe lang bewaren wij gegevens",
    body: "[CONTENT NODIG: bewaartermijnen per gegevenscategorie.]",
  },
  {
    title: "Delen met derden",
    body: "[CONTENT NODIG: eventuele verwerkers of derde partijen waarmee gegevens worden gedeeld, inclusief verwerkersovereenkomsten.]",
  },
  {
    title: "Cookies en analytics",
    body: "[CONTENT NODIG: welke cookies/analytics-tools daadwerkelijk worden gebruikt, en de bijbehorende toestemmingsvraag.]",
  },
  {
    title: "Uw rechten",
    body: "[CONTENT NODIG: contactroute voor inzage, correctie, verwijdering en het indienen van een klacht bij de Autoriteit Persoonsgegevens.]",
  },
  {
    title: "Contact",
    body: "[CONTENT NODIG: contactgegevens voor privacyvragen.]",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy" }]} />

      <Section>
        <Container size="content">
          <h1 className="text-3xl leading-tight font-medium sm:text-4xl">
            Privacyverklaring
          </h1>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-border bg-muted/40 p-4">
            <TriangleAlert
              className="mt-0.5 size-5 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Dit is de structuur van onze privacyverklaring. De inhoud is
              nog niet compleet en moet worden aangevuld en juridisch
              getoetst voordat deze als definitieve verklaring kan gelden —
              zie{" "}
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
