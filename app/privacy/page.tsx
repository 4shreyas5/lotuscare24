import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Hoe Lotus Vitaal omgaat met persoonsgegevens.",
};

const sections = [
  {
    title: "Wie zijn wij",
    body: "Lotus Vitaal is een aanbieder van thuiszorg. Voor vragen over deze privacyverklaring of over uw gegevens kunt u contact opnemen via info@lotusvitaal.com.",
  },
  {
    title: "Welke gegevens verzamelen wij",
    body: "Als u een van onze formulieren invult (contact, kennismaken of solliciteren), verwerken wij de gegevens die u zelf invult, zoals uw naam, e-mailadres, telefoonnummer en uw bericht. Bij een sollicitatie kunt u ook een cv meesturen.",
  },
  {
    title: "Waarvoor gebruiken wij uw gegevens",
    body: "Wij gebruiken uw gegevens alleen om uw vraag, kennismakingsaanvraag of sollicitatie te beantwoorden en af te handelen.",
  },
  {
    title: "Delen met derden",
    body: "Voor het verzenden van e-mail en het veilig opslaan van een meegestuurd cv maken wij gebruik van externe dienstverleners. Zij verwerken gegevens uitsluitend in onze opdracht.",
  },
  {
    title: "Uw rechten",
    body: "U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten verwijderen. Stuur hiervoor een e-mail naar info@lotusvitaal.com. Bent u het niet eens met hoe wij met uw gegevens omgaan, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.",
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
