export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  title: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    title: "Zorg",
    items: [
      {
        question: "Welke vormen van zorg biedt LotusCare24?",
        answer:
          "Wij bieden thuiszorg, persoonlijke verzorging, verpleging, begeleiding, 24-uurszorg en palliatieve zorg. Op de zorgpagina leest u per vorm wat dit inhoudt.",
      },
      {
        question: "Kan de zorg worden afgestemd op mijn persoonlijke situatie?",
        answer:
          "Ja. We starten altijd met een gesprek over uw situatie en wensen, en stemmen de zorg daarop af — in plaats van een standaardpakket aan te bieden.",
      },
      {
        question: "Werk ik steeds met dezelfde zorgverlener(s)?",
        answer:
          "We werken met een klein, vast team rond u, zodat u niet steeds met wisselende gezichten te maken krijgt.",
      },
    ],
  },
  {
    title: "Zorg aanvragen",
    items: [
      {
        question: "Hoe vraag ik zorg aan bij LotusCare24?",
        answer:
          "Neem contact met ons op via het contactformulier, telefonisch, of plan direct een kennismaking. In een vrijblijvend gesprek bespreken we uw situatie.",
      },
      {
        question: "Moet ik van tevoren weten welke zorg ik nodig heb?",
        answer:
          "Nee. U hoeft dit niet vooraf te bepalen — dat bespreken we samen tijdens de kennismaking.",
      },
      {
        question: "Hoe lang duurt het voordat de zorg kan starten?",
        answer:
          "[CONTENT NODIG: gemiddelde doorlooptijd, afhankelijk van planning en type zorg.]",
      },
    ],
  },
  {
    title: "Familie en mantelzorg",
    items: [
      {
        question: "Kan mijn familie of mantelzorger betrokken worden?",
        answer:
          "Zeker. We begrijpen dat zorg ook impact heeft op de mensen om de cliënt heen, en denken graag mee over hoe familie en mantelzorgers betrokken kunnen blijven.",
      },
      {
        question: "Ondersteunt LotusCare24 ook de mantelzorger zelf?",
        answer:
          "We houden rekening met de situatie van mantelzorgers en denken mee over wat voor hen behapbaar is. Lees meer op onze mantelzorgpagina.",
      },
    ],
  },
  {
    title: "Kennismaking",
    items: [
      {
        question: "Hoe verloopt een eerste kennismaking?",
        answer:
          "Een kennismaking is vrijblijvend en laagdrempelig. We luisteren naar uw situatie en leggen uit hoe LotusCare24 te werk gaat, zodat u een goed beeld heeft voordat u een keuze maakt.",
      },
      {
        question: "Zit ik ergens aan vast na een kennismakingsgesprek?",
        answer: "Nee, een kennismaking is altijd vrijblijvend.",
      },
    ],
  },
  {
    title: "Praktische zaken",
    items: [
      {
        question: "In welke regio is LotusCare24 actief?",
        answer: "[CONTENT NODIG: werkgebied/regio's die daadwerkelijk bediend worden.]",
      },
      {
        question: "Welke financieringsvormen worden ondersteund (Wlz, Zvw, pgb)?",
        answer:
          "[CONTENT NODIG: bevestigde financierings- en verzekeringsroutes. We noemen hier alleen wat daadwerkelijk van toepassing is.]",
      },
      {
        question: "Hoe gaat LotusCare24 om met mijn privacy?",
        answer:
          "Zie onze privacyverklaring voor een volledig overzicht van hoe wij met uw gegevens omgaan.",
      },
      {
        question: "Wat als ik niet tevreden ben over de zorg?",
        answer:
          "We horen dat graag zo snel mogelijk. Onze klachtenregeling beschrijft hoe u een klacht kunt indienen.",
      },
    ],
  },
];
