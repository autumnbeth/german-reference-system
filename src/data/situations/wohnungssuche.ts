import type { Situation } from '../../content/schema';

export const wohnungssuche: Situation = {
  slug: 'wohnungssuche',
  theme: 'Housing',
  category: 'Living in Germany',
  title: 'Wohnungssuche',
  intro:
    'Looking for a flat in Germany: stating what you need, asking the key questions about rent ' +
    'and availability, arranging a viewing, and writing the formal inquiry that makes landlords ' +
    'take you seriously.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can search for a flat in German, ask the right questions about price and conditions, ' +
    'explain why I\'d be a good tenant, and write a formal inquiry letter that stands out.',

  vocab: [
    {
      label: 'A1 · Wohnung & Zimmer',
      items: [
        { gender: 'die', word: 'Wohnung', meaning: 'flat / apartment', plural: 'Wohnungen' },
        { gender: 'das', word: 'Zimmer', meaning: 'room', plural: 'Zimmer' },
        { gender: 'das', word: 'Schlafzimmer', meaning: 'bedroom' },
        { gender: 'das', word: 'Wohnzimmer', meaning: 'living room' },
        { gender: 'die', word: 'Küche', meaning: 'kitchen' },
        { gender: 'das', word: 'Badezimmer', meaning: 'bathroom' },
        { gender: 'der', word: 'Balkon', meaning: 'balcony' },
        { gender: 'der', word: 'Keller', meaning: 'cellar / basement' },
        { gender: 'der', word: 'Aufzug', meaning: 'lift / elevator' },
        { gender: 'der', word: 'Stellplatz', meaning: 'parking space' },
      ],
    },
    {
      label: 'A2 · Miete & Kosten',
      items: [
        { gender: 'die', word: 'Kaltmiete', meaning: 'base rent (excl. utilities)' },
        { gender: 'die', word: 'Warmmiete', meaning: 'total rent (incl. utilities)' },
        { gender: 'die', word: 'Nebenkosten', meaning: 'additional costs / utilities', note: 'always plural' },
        { gender: 'die', word: 'Kaution', meaning: 'deposit', note: 'usually 2–3 months\' rent' },
        { gender: 'die', word: 'Miete', meaning: 'rent', plural: 'Mieten' },
        { gender: 'das', word: 'Mietverhältnis', meaning: 'tenancy / rental agreement' },
        { gender: 'der', word: 'Mietvertrag', meaning: 'rental contract' },
      ],
    },
    {
      label: 'B1 · Lage & Ausstattung',
      items: [
        { gender: 'die', word: 'Lage', meaning: 'location / position' },
        { gender: 'die', word: 'Haltestelle', meaning: 'public transport stop', plural: 'Haltestellen' },
        { gender: 'die', word: 'Etage', meaning: 'floor / storey', plural: 'Etagen' },
        { gender: 'die', word: 'Quadratmeter', meaning: 'square metres', note: 'm² or qm' },
        { gender: 'die', word: 'Ausstattung', meaning: 'furnishing / fittings' },
        { gender: 'die', word: 'möbliert', meaning: 'furnished', note: 'adjective, no gender' },
        { gender: 'die', word: 'unmöbliert', meaning: 'unfurnished', note: 'adjective, no gender' },
      ],
    },
    {
      label: 'B2 · Bewerbung',
      items: [
        { gender: 'die', word: 'Besichtigung', meaning: 'viewing appointment' },
        { gender: 'die', word: 'Schufa-Auskunft', meaning: 'credit check report', note: 'required by most landlords' },
        { gender: 'der', word: 'Gehaltsnachweis', meaning: 'proof of income', plural: 'Gehaltsnachweise' },
        { gender: 'der', word: 'Personalausweis', meaning: 'ID card' },
        { gender: 'die', word: 'Selbstauskunft', meaning: 'self-disclosure form' },
        { gender: 'die', word: 'Bewerbung', meaning: 'application', plural: 'Bewerbungen' },
        { gender: 'die', word: 'Referenz', meaning: 'reference', plural: 'Referenzen' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'State that you are looking for a flat and name basic requirements',
      example: 'Ich suche eine Wohnung. Zwei Zimmer, bitte.',
    },
    {
      level: 'A2',
      canDo: 'Ask about rent, availability and key features',
      example: 'Wie hoch ist die Miete? Wann ist die Wohnung frei? Gibt es einen Balkon?',
    },
    {
      level: 'B1',
      canDo: 'Explain why the flat suits you and arrange a viewing',
      example: 'Die Wohnung passt gut, weil sie nah an meiner Arbeit liegt. Wann wäre eine Besichtigung möglich?',
    },
    {
      level: 'B2',
      canDo: 'Compare flats, ask about the application process, and write a persuasive cover letter',
      example: 'Ich würde gerne verstehen, welche Unterlagen Sie benötigen, und Ihnen erklären, warum ich ein zuverlässiger Mieter wäre.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'Name what type of flat you need and where' },
    { level: 'A2', text: 'Ask and understand answers about price, size, and availability' },
    { level: 'B1', text: 'Arrange a viewing and briefly explain why you\'re interested' },
    { level: 'B2', text: 'Submit a complete application with formal inquiry letter and cover letter' },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'suche', role: 'verb', highlight: true },
            { text: 'eine Wohnung mit zwei Zimmern', role: 'mittelfeld' },
          ],
          caption: '"Ich suche..." — state what you\'re looking for',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'brauche', role: 'verb', highlight: true },
            { text: 'eine Küche und ein Badezimmer', role: 'mittelfeld' },
          ],
          caption: 'List your must-haves with "brauchen"',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Stating needs',
          phrases: [
            'Ich suche eine Wohnung.',
            'Zwei Zimmer, bitte.',
            'Ich brauche eine Küche.',
            'Mit Balkon, bitte.',
            'Kein Keller nötig.',
          ],
        },
      ],
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Wohnungsanforderungen',
        parts: [
          { label: 'Zimmer', de: 'Ich suche eine Wohnung mit … Zimmern.', en: 'I am looking for a flat with … rooms.' },
          { label: 'Preis', de: 'Wie viel kostet die Wohnung?', en: 'How much does the flat cost?' },
          { label: 'Balkon', de: 'Mit Balkon? Ja / Nein', en: 'With balcony? Yes / No' },
          { label: 'Besichtigung', de: 'Kann ich die Wohnung sehen?', en: 'Can I see the flat?' },
          { label: 'Verfügbar', de: 'Wann ist die Wohnung frei?', en: 'When is the flat available?' },
        ],
      },
      dialogue: {
        title: 'Dialog · Erste Anfrage',
        level: 'A1',
        lines: [
          { speaker: 'Interessentin', speakerGender: 'die',
            de: 'Guten Tag. Ich suche eine Wohnung.',
            en: 'Good day. I am looking for an apartment.' },
          { speaker: 'Vermieter', speakerGender: 'der',
            de: 'Wie viele Zimmer?',
            en: 'How many rooms?' },
          { speaker: 'Interessentin', speakerGender: 'die',
            de: 'Zwei Zimmer, bitte.',
            en: 'Two rooms, please.' },
          { speaker: 'Vermieter', speakerGender: 'der',
            de: 'Ich habe eine Wohnung. Sie hat zwei Zimmer.',
            en: 'I have an apartment. It has two rooms.' },
          { speaker: 'Interessentin', speakerGender: 'die',
            de: 'Wie viel kostet sie?',
            en: 'How much does it cost?' },
          { speaker: 'Vermieter', speakerGender: 'der',
            de: '800 Euro warm.',
            en: '800 euros warm.' },
          { speaker: 'Interessentin', speakerGender: 'die',
            de: 'Danke. Kann ich die Wohnung sehen?',
            en: 'Thank you. Can I see the apartment?' },
          { speaker: 'Vermieter', speakerGender: 'der',
            de: 'Ja, natürlich.',
            en: 'Yes, of course.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wie hoch', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'die Warmmiete', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: '"Wie hoch ist...?" — asking amounts (rent, costs)',
        },
        {
          slots: [
            { text: 'Wann', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'die Wohnung frei', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Asking about availability date',
        },
        {
          slots: [
            { text: 'Gibt', role: 'pos1' },
            { text: 'es', role: 'verb', highlight: false },
            { text: 'einen Aufzug', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: '"Gibt es...?" — checking if a feature exists',
        },
      ],
      dialogue: {
        title: 'Anruf wegen einer Wohnung',
        level: 'A2',
        lines: [
          { speaker: 'Bewerber', speakerGender: 'der', de: 'Guten Tag, ich rufe wegen der Wohnung in der Schillerstraße an. Ist die noch frei?', en: 'Good day, I\'m calling about the flat on Schillerstraße. Is it still available?' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: 'Ja, die Wohnung ist noch frei.', en: 'Yes, the flat is still available.' },
          { speaker: 'Bewerber', speakerGender: 'der', de: 'Wie hoch ist die Miete genau?', en: 'What exactly is the rent?' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: 'Die Kaltmiete ist 850 Euro, die Warmmiete 1.050 Euro.', en: 'The base rent is 850 euros, the total rent is 1,050 euros.' },
          { speaker: 'Bewerber', speakerGender: 'der', de: 'Und wie groß ist die Wohnung?', en: 'And how big is the flat?' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: '68 Quadratmeter, drei Zimmer, Küche und Bad.', en: '68 square metres, three rooms, kitchen and bathroom.' },
          { speaker: 'Bewerber', speakerGender: 'der', de: 'Wann ist die Wohnung frei?', en: 'When is the flat available?' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: 'Ab dem ersten Februar.', en: 'From the first of February.' },
          { speaker: 'Bewerber', speakerGender: 'der', de: 'Gut. Kann ich die Wohnung besichtigen?', en: 'Good. Can I view the flat?' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: 'Ja natürlich. Wie wäre es mit Samstag um 11 Uhr?', en: 'Yes of course. How about Saturday at 11 o\'clock?' },
          { speaker: 'Bewerber', speakerGender: 'der', de: 'Das passt sehr gut. Danke!', en: 'That works very well. Thank you!' },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Key questions',
          phrases: [
            'Wie hoch ist die Miete?',
            'Was sind die Nebenkosten?',
            'Wann ist die Wohnung frei?',
            'Wie groß ist die Wohnung?',
            'Im wievielten Stock liegt die Wohnung?',
            'Gibt es einen Balkon / Aufzug / Stellplatz?',
            'Ist die Wohnung möbliert?',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · nach der Besichtigung',
        parts: [
          { label: 'Opener', de: 'Hey! Ich habe heute eine Wohnung besichtigt. 🏠', en: 'Hey! I viewed a flat today.' },
          { label: 'Infos', de: 'Sie hat drei Zimmer, 68 Quadratmeter und einen Balkon. Die Miete ist 1050 Euro warm.', en: 'It has three rooms, 68 square metres and a balcony. The rent is €1,050 warm.', highlight: 'Sie hat drei Zimmer, 68 Quadratmeter' },
          { label: 'Meinung', de: 'Sie ist sehr schön! Ich möchte die Wohnung nehmen.', en: 'It\'s very nice! I\'d like to take the flat.' },
          { label: 'Gruß', de: 'Drück mir die Daumen! 🤞', en: 'Fingers crossed!' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Wohnung', role: 'pos1' },
            { text: 'passt', role: 'verb', highlight: true },
            { role: 'mittelfeld', text: 'gut, weil sie nah an meiner Arbeit' },
            { text: 'liegt', role: 'verb-end', highlight: true },
          ],
          caption: '"weil" sends the verb to the end of the clause',
          showBracket: true,
        },
        {
          slots: [
            { text: 'Wann', role: 'pos1' },
            { text: 'wäre', role: 'verb', highlight: true },
            { text: 'eine Besichtigung', role: 'mittelfeld' },
            { text: 'möglich', role: 'verb-end', highlight: false },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Konjunktiv II "wäre" for polite requests',
        },
      ],
      dialogue: {
        title: 'Besichtigungstermin vereinbaren',
        level: 'B1',
        lines: [
          { speaker: 'Bewerberin', speakerGender: 'die', de: 'Ich habe Ihr Inserat auf ImmobilienScout gesehen und interessiere mich sehr für die Wohnung.', en: 'I saw your listing on ImmobilienScout and am very interested in the flat.' },
          { speaker: 'Vermieter', speakerGender: 'der', de: 'Schön! Was genau interessiert Sie daran?', en: 'Lovely! What specifically interests you about it?' },
          { speaker: 'Bewerberin', speakerGender: 'die', de: 'Die Lage ist ideal — ich arbeite in der Nähe und die S-Bahn-Haltestelle ist gleich um die Ecke. Außerdem suche ich schon länger eine ruhige Wohnung.', en: 'The location is ideal — I work nearby and the S-Bahn stop is just around the corner. I\'ve also been looking for a quiet flat for a while.' },
          { speaker: 'Vermieter', speakerGender: 'der', de: 'Die Wohnung liegt im Hinterhof, also sehr ruhig. Was machen Sie beruflich, wenn ich fragen darf?', en: 'The flat is in the rear courtyard, so very quiet. What do you do professionally, if I may ask?' },
          { speaker: 'Bewerberin', speakerGender: 'die', de: 'Ich bin Ärztin und arbeite seit drei Jahren hier in München.', en: 'I\'m a doctor and have been working here in Munich for three years.' },
          { speaker: 'Vermieter', speakerGender: 'der', de: 'Gut. Können Sie zur Besichtigung auch Ihre Unterlagen mitbringen? Schufa und Gehaltsnachweis?', en: 'Good. Can you also bring your documents to the viewing? Schufa and proof of income?' },
          { speaker: 'Bewerberin', speakerGender: 'die', de: 'Natürlich, kein Problem. Wann wäre ein Termin möglich?', en: 'Of course, no problem. When would a viewing be possible?' },
          { speaker: 'Vermieter', speakerGender: 'der', de: 'Dienstag um 18 Uhr oder Donnerstag um 17 Uhr?', en: 'Tuesday at 6 p.m. or Thursday at 5 p.m.?' },
          { speaker: 'Bewerberin', speakerGender: 'die', de: 'Dienstag passt mir besser. Bis dann!', en: 'Tuesday suits me better. See you then!' },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Expressing interest',
          phrases: [
            'Ich interessiere mich für die Wohnung.',
            'Die Wohnung passt gut zu meinen Vorstellungen.',
            'Die Lage ist ideal für mich, weil...',
            'Ich bin seit X Jahren berufstätig und zahle immer pünktlich.',
            'Wann wäre eine Besichtigung möglich?',
            'Ich kann die Unterlagen gerne vorab zuschicken.',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'Anfrage-E-Mail für eine Wohnung',
        to: 'vermieter@beispiel.de',
        subject: 'Anfrage: 3-Zimmer-Wohnung Schillerstraße 12',
        parts: [
          {
            label: 'E-Mail',
            de: 'Sehr geehrte Frau Hoffmann,\n\nmit großem Interesse habe ich Ihr Inserat auf ImmobilienScout24 gelesen. Die Wohnung in der Schillerstraße entspricht genau meinen Vorstellungen: die Größe, die Lage und die ruhige Umgebung passen sehr gut zu mir.\n\nIch bin 31 Jahre alt, arbeite als Ingenieurin bei einem Münchner Unternehmen und lebe seit zwei Jahren in München. Die Miete würde problemlos in mein Budget passen.\n\nGerne würde ich die Wohnung besichtigen und Ihnen dabei meine Unterlagen (Schufa-Auskunft, aktuelle Gehaltsnachweise) vorlegen.\n\nWann wäre ein Besichtigungstermin für Sie möglich?\n\nMit freundlichen Grüßen\nAnna Berger\nTel.: 0176 12345678',
          },
        ],
        checklist: [
          'Formelle Anrede und Abschluss',
          'Bezug auf das Inserat nehmen',
          'Kurze Selbstvorstellung (Beruf, Situation)',
          'Interesse an Besichtigung und Unterlagen erwähnen',
          'Konkrete Frage oder nächsten Schritt vorschlagen',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Obwohl', role: 'pos1' },
            { text: 'die erste Wohnung', role: 'verb', highlight: false },
            { text: 'günstiger', role: 'mittelfeld' },
            { text: 'ist', role: 'verb-end', highlight: true },
          ],
          caption: '"obwohl" (although) — concessive clause, verb goes to end',
          showBracket: true,
        },
        {
          slots: [
            { text: 'Ich würde', role: 'pos1' },
            { text: 'mich', role: 'verb', highlight: false },
            { text: 'über eine Rückmeldung', role: 'mittelfeld' },
            { text: 'freuen', role: 'verb-end', highlight: true },
          ],
          caption: 'Konjunktiv II + reflexive — polite closing formula',
          showBracket: true,
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Comparing flats',
          phrases: [
            'Die zweite Wohnung ist zwar teurer, liegt aber deutlich zentraler.',
            'Im Vergleich zur ersten Wohnung hat diese mehr Stauraum.',
            'Beide Wohnungen haben Vor- und Nachteile.',
            'Für meine Situation ist die Lage wichtiger als die Größe.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Application process',
          phrases: [
            'Welche Unterlagen benötigen Sie von mir?',
            'Ich kann Schufa, Gehaltsnachweise der letzten drei Monate und eine Mietschuldenfreiheitsbescheinigung einreichen.',
            'Mein früherer Vermieter kann gerne als Referenz dienen.',
            'Ich bin flexibel beim Einzugstermin.',
          ],
        },
      ],
      writing: {
        kind: 'letter',
        level: 'B2',
        title: 'Bewerbungsanschreiben als Mieter',
        to: 'Frau Maria Hoffmann, Vermieter',
        subject: 'Meine Bewerbung für die Wohnung in der Schillerstraße 12, 3. OG',
        parts: [
          {
            label: 'Anschreiben',
            de: 'Sehr geehrte Frau Hoffmann,\n\nmit großem Interesse habe ich Ihre Wohnungsanzeige gelesen und möchte mich hiermit als Mieterin bewerben.\n\nIch bin 34 Jahre alt, lebe seit fünf Jahren in München und arbeite als Softwareentwicklerin in einem internationalen Unternehmen. Mein Nettoeinkommen beträgt monatlich rund 3.800 Euro, sodass ich die Miete problemlos und zuverlässig zahlen kann.\n\nIch schätze Ihre Wohnung besonders wegen der ruhigen Lage, der guten Anbindung an den öffentlichen Nahverkehr und der hellen Raumaufteilung. Langfristig möchte ich an einem Ort bleiben und bin an einem unbefristeten Mietverhältnis interessiert.\n\nAls zuverlässige und ordentliche Mieterin lege ich Wert auf ein gutes nachbarschaftliches Verhältnis. Mein bisheriger Vermieter steht Ihnen gerne als Referenz zur Verfügung.\n\nIch würde mich sehr über die Möglichkeit einer Besichtigung freuen und stehe für Fragen jederzeit gerne zur Verfügung. Anbei finden Sie meine Schufa-Auskunft sowie die Gehaltsnachweise der vergangenen drei Monate.\n\nMit freundlichen Grüßen\nAnna Berger',
          },
        ],
        checklist: [
          'Persönliche Vorstellung mit Beruf und Einkommen',
          'Konkreter Bezug auf die Wohnung (was gefällt, warum genau diese)',
          'Zuverlässigkeit und Langfristigkeit betonen',
          'Referenz anbieten',
          'Unterlagen erwähnen und Besichtigung anfragen',
          'Formelle Sprache durchgängig',
        ],
      },
      challenge:
        'You are applying for a highly competitive flat. Write a two-paragraph cover letter that ' +
        'explains (1) why this specific flat suits you, and (2) why you would be an ideal tenant. ' +
        'Use at least one "weil" clause, one "obwohl" clause, and Konjunktiv II at least once.',
    },
  },

  foundationLinks: [
    { label: 'Konnektoren: weil, obwohl, damit', foundationSlug: 'connectors' },
    { label: 'Konjunktiv II: wäre, würde, könnte', foundationSlug: 'konjunktiv' },
    { label: 'Satzbau: Nebensätze', foundationSlug: 'satzbau' },
  ],

  hero: {
    caption: 'From "Ich suche eine Wohnung" to a winning cover letter.',
    alt: 'A bright German apartment with large windows and wooden floors',
  },
};
