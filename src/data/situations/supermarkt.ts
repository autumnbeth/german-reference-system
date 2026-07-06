import type { Situation } from '../../content/schema';

export const supermarkt: Situation = {
  slug: 'supermarkt',
  theme: 'Daily Life',
  subtheme: 'Supermarkt',
  category: 'Survival & daily life',
  title: 'Im Supermarkt',
  intro:
    'Navigating a German supermarket: finding items, understanding offers and labels, ' +
    'getting through the checkout, and dealing with price discrepancies on the receipt.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can find what I need in a German supermarket, understand offers and packaging, ' +
    'get through the checkout without stress, and sort out any receipt problem calmly.',

  vocab: [
    {
      label: 'A1 · Im Laden',
      items: [
        { gender: 'der', word: 'Einkaufswagen', meaning: 'shopping trolley', plural: 'Einkaufswagen' },
        { gender: 'der', word: 'Einkaufskorb', meaning: 'shopping basket', plural: 'Einkaufskörbe' },
        { gender: 'die', word: 'Kasse', meaning: 'checkout / till', plural: 'Kassen' },
        { gender: 'das', word: 'Kühlregal', meaning: 'refrigerated shelf', plural: 'Kühlregale' },
        { gender: 'die', word: 'Backwaren', meaning: 'bakery goods', note: 'always plural' },
        { gender: 'die', word: 'Gemüseabteilung', meaning: 'vegetable section' },
        { gender: 'der', word: 'Gang', meaning: 'aisle', plural: 'Gänge' },
        { gender: 'die', word: 'Tiefkühlabteilung', meaning: 'frozen food section' },
      ],
    },
    {
      label: 'A2 · Preise & Angebote',
      items: [
        { gender: 'das', word: 'Angebot', meaning: 'special offer', plural: 'Angebote' },
        { gender: 'der', word: 'Rabatt', meaning: 'discount' },
        { gender: 'der', word: 'Preis', meaning: 'price', plural: 'Preise' },
        { gender: 'die', word: 'Quittung', meaning: 'receipt', plural: 'Quittungen' },
        { gender: 'der', word: 'Bon', meaning: 'receipt / voucher', plural: 'Bons' },
        { gender: 'das', word: 'Pfand', meaning: 'deposit (on bottles)' },
        { gender: 'der', word: 'Pfandautomat', meaning: 'bottle return machine' },
        { gender: 'die', word: 'Tüte', meaning: 'bag', plural: 'Tüten' },
      ],
    },
    {
      label: 'B1 · Einkaufen',
      items: [
        { gender: 'die', word: 'Einkaufsliste', meaning: 'shopping list' },
        { gender: 'die', word: 'Menge', meaning: 'quantity / amount' },
        { gender: 'das', word: 'Gewicht', meaning: 'weight' },
        { gender: 'die', word: 'Packung', meaning: 'packet / pack', plural: 'Packungen' },
        { gender: 'die', word: 'Dose', meaning: 'tin / can', plural: 'Dosen' },
        { gender: 'die', word: 'Flasche', meaning: 'bottle', plural: 'Flaschen' },
        { gender: 'das', word: 'Mindesthaltbarkeitsdatum', meaning: 'best-before date', note: 'MHD for short' },
        { gender: 'die', word: 'Kundenkarte', meaning: 'loyalty card' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Name what you need and read basic labels',
      example: 'Ich brauche Brot, Milch und Eier.',
    },
    {
      level: 'A2',
      canDo: 'Ask where to find items and ask about prices',
      example: 'Entschuldigung, wo finde ich die Milch? Wie viel kostet das?',
    },
    {
      level: 'B1',
      canDo: 'Understand offer signs, ask quantity questions, get through checkout conversation',
      example: 'Ist das im Angebot? Haben Sie eine größere Packung? Ich habe auch eine Kundenkarte.',
    },
    {
      level: 'B2',
      canDo: 'Query a price discrepancy on the receipt and resolve it calmly',
      example: 'Ich glaube, der Preis stimmt nicht — auf der Quittung steht 3,99 €, aber das Regal zeigt 2,79 €.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'Write a German shopping list and identify items in the store' },
    { level: 'A2', text: 'Ask staff where to find something and understand basic answers' },
    { level: 'B1', text: 'Understand special offer signs and handle the full checkout process' },
    { level: 'B2', text: 'Dispute a price error on the receipt politely and get it corrected' },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'brauche', role: 'verb', highlight: true },
            { role: 'mittelfeld', text: 'Brot, Milch und Eier' },
          ],
          caption: '"brauchen" = to need — the simplest way to say what you want',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'suche', role: 'verb', highlight: true },
            { text: 'Butter', role: 'mittelfeld' },
          ],
          caption: '"suchen" = to look for — use this when you can\'t find something',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Naming what you need',
          phrases: [
            'Ich brauche Brot.',
            'Ich suche Milch.',
            'Haben Sie Eier?',
            'Wo ist der Käse?',
          ],
        },
        {
          levels: ['A1'],
          funktion: 'At the checkout',
          phrases: [
            'Das ist alles.',
            'Mit Karte, bitte.',
            'Danke.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Einfacher Einkauf',
        level: 'A1',
        lines: [
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Entschuldigung, wo finde ich Brot?',
            en: 'Excuse me, where can I find bread?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'Brot ist dort hinten, rechts.',
            en: 'Bread is over there at the back, on the right.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Danke!',
            en: 'Thank you!' },
          { speaker: 'Kassierer', speakerGender: 'der',
            de: 'Guten Tag. Das macht 8 Euro 50.',
            en: 'Good day. That comes to 8 euros 50.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Mit Karte, bitte.',
            en: 'By card, please.' },
          { speaker: 'Kassierer', speakerGender: 'der',
            de: 'Brauchen Sie eine Tüte?',
            en: 'Do you need a bag?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Nein, danke.',
            en: 'No, thank you.' },
          { speaker: 'Kassierer', speakerGender: 'der',
            de: 'Auf Wiedersehen!',
            en: 'Goodbye!' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Tschüss!',
            en: 'Bye!' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Einkaufsliste',
        parts: [
          {
            label: 'Einkaufsliste für die Woche',
            de: '• 1 Liter Milch\n• 6 Eier\n• 500 g Hackfleisch\n• 1 Brot (Vollkorn)\n• Butter\n• Tomaten\n• Kartoffeln (1 kg)\n• Mineralwasser (still, 1,5 L)',
          },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { role: 'pos1', text: 'Entschuldigung,' },
            { text: 'finde', role: 'verb', highlight: true },
            { text: 'ich hier auch Biomilch', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Question with verb in position 2 — inverted word order',
        },
        {
          slots: [
            { text: 'Wo', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'das Kühlregal', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: '"Wo ist...?" — the classic location question',
        },
      ],
      dialogue: {
        title: 'Wo finde ich...?',
        level: 'A2',
        lines: [
          { speaker: 'Kunde', speakerGender: 'der', de: 'Entschuldigung, wo finde ich den Joghurt?', en: 'Excuse me, where do I find the yoghurt?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Der Joghurt ist im Kühlregal, Gang drei, auf der linken Seite.', en: 'The yoghurt is in the fridge aisle, aisle three, on the left side.' },
          { speaker: 'Kunde', speakerGender: 'der', de: 'Danke. Und wo sind die Backwaren?', en: 'Thank you. And where is the bakery?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Gleich hinten links, am Ende des Ladens.', en: 'Just at the back left, at the end of the store.' },
          { speaker: 'Kunde', speakerGender: 'der', de: 'Wie viel kostet das Vollkornbrot hier?', en: 'How much does the wholegrain bread cost here?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Das kostet 2,49 Euro.', en: 'It costs 2.49 euros.' },
          { speaker: 'Kunde', speakerGender: 'der', de: 'Gut, danke schön!', en: 'Good, thank you very much!' },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Asking for location',
          phrases: [
            'Entschuldigung, wo finde ich die Milch?',
            'Wo ist das Kühlregal?',
            'Gibt es hier auch Bio-Produkte?',
            'Haben Sie das auch in kleiner?',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Price questions',
          phrases: [
            'Wie viel kostet das?',
            'Was kostet ein Kilo Äpfel?',
            'Ist das im Angebot?',
            'Haben Sie etwas Günstigeres?',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · Einkaufsliste',
        parts: [
          { label: 'Opener', de: 'Hey! Ich gehe gleich zum Supermarkt. Brauchst du noch etwas?', en: 'Hey! I\'m heading to the supermarket soon. Do you need anything?' },
          { label: 'Liste', de: 'Ich kaufe: Milch, Brot, Eier und Tomaten. Ich schaue auch nach Angeboten.', en: 'I\'m buying: milk, bread, eggs and tomatoes. I\'ll also look for offers.', highlight: 'schaue auch nach Angeboten' },
          { label: 'Frage', de: 'Soll ich auch Joghurt mitbringen?', en: 'Shall I bring yoghurt too?' },
          { label: 'Gruß', de: 'Bis später! 🛒', en: 'See you later!' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Das', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'heute im Angebot — 20 % Rabatt', role: 'mittelfeld' },
          ],
          caption: 'Understanding offer signs at the shelf',
        },
        {
          slots: [
            { text: 'Haben Sie', role: 'pos1' },
            { text: 'das', role: 'verb', highlight: false },
            { text: 'auch in der Zwei-Kilo-Packung', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Asking about quantities and pack sizes',
        },
      ],
      dialogue: {
        title: 'An der Kasse',
        level: 'B1',
        lines: [
          { speaker: 'Kassiererin', speakerGender: 'die', de: 'Hallo! Haben Sie eine Kundenkarte?', en: 'Hello! Do you have a loyalty card?' },
          { speaker: 'Kunde', speakerGender: 'der', de: 'Ja, hier bitte.', en: 'Yes, here you go.' },
          { speaker: 'Kassiererin', speakerGender: 'die', de: 'Möchten Sie eine Tüte?', en: 'Would you like a bag?' },
          { speaker: 'Kunde', speakerGender: 'der', de: 'Nein danke, ich habe meinen eigenen Beutel.', en: 'No thank you, I have my own bag.' },
          { speaker: 'Kassiererin', speakerGender: 'die', de: 'Das macht dann 18,43 Euro, bitte.', en: 'That comes to 18.43 euros, please.' },
          { speaker: 'Kunde', speakerGender: 'der', de: 'Mit Karte, bitte. Oh — kurze Frage: der Käse sollte doch im Angebot sein?', en: 'By card, please. Oh — quick question: the cheese was supposed to be on offer?' },
          { speaker: 'Kassiererin', speakerGender: 'die', de: 'Moment, ich schaue kurz nach... Ja, stimmt! Da wurde ein Fehler gemacht. Ich korrigiere das.', en: 'One moment, let me check... Yes, correct! There was a mistake. I\'ll correct that.' },
          { speaker: 'Kunde', speakerGender: 'der', de: 'Danke, das ist nett!', en: 'Thank you, that\'s kind!' },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Understanding offers',
          phrases: [
            '3 für 2 — drei kaufen, zwei bezahlen.',
            'Ab 2 Packungen 15 % Rabatt.',
            'Nur solange der Vorrat reicht.',
            'Das Angebot gilt bis Samstag.',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'At checkout',
          phrases: [
            'Ich habe meine Kundenkarte vergessen.',
            'Kann ich die Nummer eingeben?',
            'Können Sie das bitte nochmal scannen?',
            'Ich glaube, da fehlt ein Artikel.',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Reklamation: falscher Preis',
        to: 'kundenservice@beispiel-markt.de',
        subject: 'Reklamation: Falscher Kassenpreis vom 3. Juli',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'ich war am 3. Juli in Ihrer Filiale und habe Gouda-Käse gekauft. Am Regal stand ein Preis von 2,79 €, an der Kasse wurden mir jedoch 3,99 € berechnet.',
            en: 'I was in your branch on 3 July and bought Gouda cheese. The shelf showed a price of €2.79, but at the till I was charged €3.99.',
            highlight: 'am Regal stand ein Preis von 2,79 €' },
          { label: 'Bitte',
            de: 'Könnten Sie mir bitte die Differenz von 1,20 € erstatten?',
            en: 'Could you please refund me the difference of €1.20?',
            highlight: 'Könnten Sie mir bitte die Differenz' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nHans Müller', en: 'Kind regards, Hans Müller' },
        ],
        checklist: [
          'States date and item clearly',
          'Gives both prices — shelf vs. receipt',
          'Polite request with Könnten Sie…',
          'Formal greeting and closing',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { role: 'pos1', text: 'Ich glaube,' },
            { text: 'stimmt', role: 'verb', highlight: true },
            { text: 'der Preis auf der Quittung nicht —', role: 'mittelfeld' },
            { role: 'satzende', text: 'am Regal stand 2,79 €' },
          ],
          caption: 'Disputing a price — polite but clear',
        },
        {
          slots: [
            { text: 'Der Angebotspreis', role: 'pos1' },
            { text: 'wurde', role: 'verb', highlight: true },
            { text: 'nicht korrekt', role: 'mittelfeld' },
            { text: 'abgezogen', role: 'verb-end', highlight: true },
          ],
          caption: 'Passive voice — natural when describing what "was done"',
          showBracket: true,
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Querying the receipt',
          phrases: [
            'Ich glaube, der Preis stimmt nicht.',
            'Auf der Quittung steht 3,99 €, aber am Regal stand 2,79 €.',
            'Der Rabatt wurde nicht abgezogen.',
            'Könnten Sie das bitte überprüfen?',
            'Ich hätte gerne eine korrigierte Quittung.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Asking for the manager / next steps',
          phrases: [
            'Darf ich kurz mit dem Marktleiter sprechen?',
            'Ich habe das Foto vom Regalschild gemacht.',
            'Laut Preisauszeichnungsgesetz gilt der ausgewiesene Preis.',
            'Könnten Sie mir das schriftlich bestätigen?',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Preisauszeichnungsgesetz',
        to: 'kundenservice@beispiel-markt.de',
        subject: 'Beschwerde: Preisdifferenz und fehlendes Angebot — Filiale Berlin-Mitte, 3. Juli',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'ich möchte auf zwei Preisunstimmigkeiten hinweisen, die ich am 3. Juli beim Einkauf in Ihrer Filiale in Berlin-Mitte festgestellt habe.',
            en: 'I would like to draw attention to two pricing discrepancies I noticed on 3 July while shopping at your Berlin-Mitte branch.',
            highlight: 'auf zwei Preisunstimmigkeiten hinweisen' },
          { label: 'Vorfall',
            de: 'Erstens wurde der Angebotspreis für Gouda-Käse (Regalschild: 2,79 €) nicht korrekt abgezogen — die Quittung weist 3,99 € aus. Zweitens war ein Sonderangebot für Salatdressing (laut Werbeanzeige 1,49 €) an der Kasse nicht hinterlegt.',
            en: 'First, the offer price for Gouda cheese (shelf label: €2.79) was not correctly deducted — the receipt shows €3.99. Second, a special offer for salad dressing (€1.49 according to the advertisement) was not registered at the till.',
            highlight: 'Sonderangebot für Salatdressing' },
          { label: 'Bitte',
            de: 'Ich bitte Sie, die Differenz von insgesamt 2,70 € zu erstatten und die Preisauszeichnung in Ihrer Filiale zu überprüfen.',
            en: 'I request that you refund the total difference of €2.70 and check the price labelling in your branch.',
            highlight: 'Ich bitte Sie, die Differenz' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nKatharina Berger', en: 'Kind regards, Katharina Berger' },
        ],
        checklist: [
          'Precise branch and date reference',
          'Two separate issues clearly distinguished (Erstens, Zweitens)',
          'Legal register: "Preisauszeichnung", "ausweisen"',
          'Calculates total refund amount',
          'Formal complaint register throughout',
        ],
      },
      challenge:
        'You notice two pricing errors on your receipt after paying. Return to the service desk, ' +
        'explain both discrepancies clearly, reference what the shelf label showed, and ask for ' +
        'a refund or corrected receipt. Stay polite throughout.',
    },
  },

  foundationLinks: [
    { label: 'Satzbau: Fragen und Wortstellung', foundationSlug: 'satzbau' },
    { label: 'Verb Tenses: Perfekt für vergangene Käufe', foundationSlug: 'verb-tenses' },
    { label: 'Passiv: wurde abgezogen, wurde gemacht', foundationSlug: 'passive' },
  ],

  hero: {
    src: '/images/shopping-einkaufen.png',
    caption: 'From Einkaufsliste to receipt disputes — every checkout covered.',
    alt: 'Inside a German supermarket aisle with products on shelves',
  },
};
