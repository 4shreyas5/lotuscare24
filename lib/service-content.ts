import type { ImageKey } from "@/lib/images";
import type { ImageVariant } from "@/components/media/placeholder-image";

export type ServiceContent = {
  slug: string;
  href: string;
  label: string;
  eyebrow: string;
  heroTitle: string;
  heroIntro: string;
  image: ImageKey;
  /** Hero composition — see docs/DESIGN-SYSTEM.md for the rationale per service. */
  heroImagePosition: "left" | "right";
  heroImageVariant: ImageVariant;
  heroSpacious?: boolean;
  /** Generic explanation of what this form of care involves — not a repeat of heroIntro. */
  watBetekentDezeZorg: string;
  voorWie: string[];
  watKuntUVerwachten: string[];
};

export const serviceContent: ServiceContent[] = [
  {
    slug: "thuiszorg",
    href: "/zorg/thuiszorg",
    label: "Thuiszorg",
    eyebrow: "Zorg aan huis",
    heroTitle: "Thuiszorg die past bij uw dagelijks leven",
    heroIntro:
      "Ondersteuning in en om het huis, zodat u zo lang mogelijk zelfstandig kunt blijven wonen — op een manier die aansluit bij uw eigen ritme.",
    image: "heroThuiszorg",
    heroImagePosition: "right",
    heroImageVariant: "atmospheric",
    watBetekentDezeZorg:
      "Thuiszorg is ondersteuning bij het dagelijks leven, bij u thuis. Dat kan gaan om huishoudelijke hulp, een stukje structuur in de dag, of gewoon een vertrouwd gezicht dat regelmatig langskomt — afgestemd op wat op dit moment nodig is.",
    voorWie: [
      "Mensen die door leeftijd, ziekte of herstel wat extra ondersteuning thuis nodig hebben.",
      "Mensen die zelfstandig willen blijven wonen, maar niet meer alles alleen kunnen.",
      "Families die willen weten dat er thuis iemand vertrouwd langskomt.",
    ],
    watKuntUVerwachten: [
      "Een vast, klein team dat u en uw situatie leert kennen.",
      "Ondersteuning die meebeweegt als uw situatie verandert.",
      "Korte lijnen: u weet wie er komt en waarom.",
    ],
  },
  {
    slug: "persoonlijke-verzorging",
    href: "/zorg/persoonlijke-verzorging",
    label: "Persoonlijke verzorging",
    eyebrow: "Zorg aan huis",
    heroTitle: "Persoonlijke verzorging met aandacht voor waardigheid",
    heroIntro:
      "Hulp bij wassen, aankleden en andere dagelijkse verzorging — op een manier die uw privacy en eigenheid respecteert.",
    image: "persoonlijkeVerzorging",
    heroImagePosition: "right",
    heroImageVariant: "portrait",
    watBetekentDezeZorg:
      "Persoonlijke verzorging omvat de dagelijkse lichamelijke zorg die u zelf niet meer (volledig) kunt uitvoeren, zoals wassen en aankleden. Het wordt uitgevoerd met aandacht voor uw privacy en in uw eigen tempo.",
    voorWie: [
      "Mensen die moeite hebben met wassen, aankleden of andere lichamelijke verzorging.",
      "Mensen die deze hulp liever laten uitvoeren door een vertrouwd, vast gezicht.",
      "Families die willen dat verzorging met rust en respect gebeurt, niet gehaast.",
    ],
    watKuntUVerwachten: [
      "Verzorging in uw eigen tempo, niet volgens een vaste klok.",
      "Aandacht voor wat u zelf nog wilt en kunt doen.",
      "Een team dat weet hoe u het liefst geholpen wordt.",
    ],
  },
  {
    slug: "verpleging",
    href: "/zorg/verpleging",
    label: "Verpleging",
    eyebrow: "Zorg aan huis",
    heroTitle: "Verpleegkundige zorg, dichtbij en vakkundig",
    heroIntro:
      "Van wondverzorging tot medicatiebegeleiding: verpleegkundige zorg door vakbekwame professionals, uitgevoerd bij u thuis.",
    image: "verpleging",
    heroImagePosition: "left",
    heroImageVariant: "portrait",
    watBetekentDezeZorg:
      "Verpleging is medisch-verpleegkundige zorg bij u thuis, zoals wondzorg, medicatiebegeleiding of controle van gezondheidswaarden. Deze zorg wordt uitgevoerd door gekwalificeerde verpleegkundigen.",
    voorWie: [
      "Mensen die verpleegkundige handelingen nodig hebben, zoals wondzorg of medicatiebegeleiding.",
      "Mensen die na een ziekenhuisopname thuis verder herstellen.",
      "Mensen met een chronische aandoening die begeleiding vraagt.",
    ],
    watKuntUVerwachten: [
      "Zorg door verpleegkundigen die weten wat zij doen én waarom.",
      "Korte lijnen met uw huisarts of behandelend specialist waar nodig.",
      "Uitleg in gewone taal — geen medisch jargon zonder toelichting.",
    ],
  },
  {
    slug: "begeleiding",
    href: "/zorg/begeleiding",
    label: "Begeleiding",
    eyebrow: "Zorg aan huis",
    heroTitle: "Begeleiding bij structuur en dagelijks leven",
    heroIntro:
      "Ondersteuning bij het organiseren van de dag, praktische zaken en het behouden van overzicht — afgestemd op wat voor u werkt.",
    image: "begeleiding",
    heroImagePosition: "right",
    heroImageVariant: "overlap",
    watBetekentDezeZorg:
      "Begeleiding richt zich op structuur en overzicht in het dagelijks leven — denk aan hulp bij planning, administratie of het omgaan met veranderingen. Het gaat om meedenken, niet om overnemen.",
    voorWie: [
      "Mensen die moeite hebben om structuur in de dag te houden.",
      "Mensen die ondersteuning kunnen gebruiken bij praktische of administratieve zaken.",
      "Mensen die behoefte hebben aan een vast aanspreekpunt dat meedenkt.",
    ],
    watKuntUVerwachten: [
      "Begeleiding die uitgaat van wat u zelf kunt en wilt.",
      "Praktische hulp zonder overname van uw hele dag.",
      "Een team dat signaleert wanneer er meer ondersteuning nodig is.",
    ],
  },
  {
    slug: "24-uurszorg",
    href: "/zorg/24-uurszorg",
    label: "24-uurszorg",
    eyebrow: "Intensieve zorg",
    heroTitle: "24-uurszorg: nabijheid op elk moment van de dag",
    heroIntro:
      "Wanneer er de hele dag en nacht ondersteuning nodig is, organiseren wij zorg die dichtbij blijft — afgestemd op wat op dat moment nodig is.",
    image: "vierentwintigUur",
    heroImagePosition: "left",
    heroImageVariant: "atmospheric",
    heroSpacious: true,
    watBetekentDezeZorg:
      "24-uurszorg betekent dat er dag en nacht iemand beschikbaar is, afgestemd op wat op dat moment nodig is. Dit past bij situaties waarin voortdurende nabijheid of toezicht gewenst is.",
    voorWie: [
      "Mensen die continue nabijheid of toezicht nodig hebben.",
      "Mensen die na een ingrijpende gebeurtenis intensieve ondersteuning nodig hebben.",
      "Families die zich zorgen maken over wat er 's nachts of onverwacht kan gebeuren.",
    ],
    watKuntUVerwachten: [
      "Een team dat zorg rond de klok organiseert, niet in losse blokjes.",
      "Duidelijke afspraken over wie wanneer aanwezig is.",
      "Voortdurende afstemming met u en uw familie over wat nodig is.",
    ],
  },
  {
    slug: "palliatieve-zorg",
    href: "/zorg/palliatieve-zorg",
    label: "Palliatieve zorg",
    eyebrow: "Intensieve zorg",
    heroTitle: "Palliatieve zorg: rust en aandacht in de laatste levensfase",
    heroIntro:
      "In de laatste levensfase draait alles om comfort, rust en waardigheid — voor de cliënt, en voor de mensen daaromheen.",
    image: "palliatief",
    heroImagePosition: "right",
    heroImageVariant: "inset",
    heroSpacious: true,
    watBetekentDezeZorg:
      "Palliatieve zorg richt zich op comfort, rust en waardigheid in de laatste levensfase — niet op genezing. Er is aandacht voor zowel de cliënt als de mensen daaromheen.",
    voorWie: [
      "Mensen in de laatste levensfase die thuis willen blijven.",
      "Families die ondersteuning zoeken in een kwetsbare periode.",
      "Mensen voor wie comfort en rust vooropstaan, niet genezing.",
    ],
    watKuntUVerwachten: [
      "Zorg met rust, tijd en aandacht — niet gehaast.",
      "Ondersteuning die ook oog heeft voor familie en naasten.",
      "Een team dat met respect en zonder omhaal aanwezig is.",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return serviceContent.find((service) => service.slug === slug);
}

export function getRelatedServices(currentSlug: string, count = 3): ServiceContent[] {
  return serviceContent.filter((service) => service.slug !== currentSlug).slice(0, count);
}
