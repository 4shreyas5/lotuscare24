import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Klachtenregeling",
  description: "Hoe u een klacht kunt indienen bij Lotus Vitaal.",
};

const sections = [
  {
    title: "Eerst het gesprek",
    body: "Heeft u een klacht over de zorg of onze dienstverlening? We horen dat het liefst rechtstreeks, zodat we samen naar een oplossing kunnen zoeken. Neem contact met ons op via info@lotusvitaal.com.",
  },
  {
    title: "Een klacht indienen",
    body: "U kunt uw klacht per e-mail aan ons doorgeven via info@lotusvitaal.com. Beschrijf kort wat er is gebeurd en wat u van ons verwacht, dan nemen wij contact met u op.",
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
