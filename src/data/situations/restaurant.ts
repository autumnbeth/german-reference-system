import type { Situation } from '../../content/schema';

export const restaurant: Situation = {
  slug: 'restaurant',
  theme: 'Daily Life',
  subtheme: 'Restaurant',
  category: 'Survival & daily life',
  title: 'Im Restaurant',
  intro:
    'Ordering food and drinks, asking about the menu, communicating dietary needs, ' +
    'and paying the bill at a German restaurant — from a simple coffee order to a ' +
    'full dinner with allergies and special requests.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can order a meal in German, ask questions about the menu, explain my dietary ' +
    'restrictions clearly, and handle the bill — including splitting it — without ' +
    'feeling anxious at the table.',

  vocab: [
    {
      label: 'Speisekarte & Gänge · Menu & Courses',
      items: [
        { gender: 'die', word: 'Speisekarte', meaning: 'menu', plural: 'Speisekarten' },
        { gender: 'das', word: 'Gericht', meaning: 'dish / course', plural: 'Gerichte' },
        { gender: 'die', word: 'Vorspeise', meaning: 'starter', plural: 'Vorspeisen' },
        { gender: 'das', word: 'Hauptgericht', meaning: 'main course', plural: 'Hauptgerichte' },
        { gender: 'die', word: 'Nachspeise', meaning: 'dessert', plural: 'Nachspeisen' },
        { gender: 'die', word: 'Beilage', meaning: 'side dish', plural: 'Beilagen' },
        { gender: 'das', word: 'Tagesgericht', meaning: 'dish of the day' },
      ],
    },
    {
      label: 'Ernährung · Dietary',
      items: [
        { gender: 'die', word: 'Allergie', meaning: 'allergy', plural: 'Allergien' },
        { gender: 'die', word: 'Zutat', meaning: 'ingredient', plural: 'Zutaten' },
        { gender: 'das', word: 'Fleisch', meaning: 'meat' },
        { gender: 'der', word: 'Fisch', meaning: 'fish' },
        { gender: 'die', word: 'Milch', meaning: 'milk / dairy' },
        { gender: 'das', word: 'Gluten', meaning: 'gluten', note: 'no article needed in everyday use' },
        { gender: 'die', word: 'Laktose', meaning: 'lactose' },
        { gender: 'die', word: 'Nuss', meaning: 'nut', plural: 'Nüsse' },
      ],
    },
    {
      label: 'Adjektive · Dietary Adjectives',
      items: [
        { gender: 'die', word: 'vegetarisch', meaning: 'vegetarian', note: 'adjective, no gender' },
        { gender: 'die', word: 'vegan', meaning: 'vegan', note: 'adjective, no gender' },
        { gender: 'die', word: 'glutenfrei', meaning: 'gluten-free', note: 'adjective, no gender' },
        { gender: 'die', word: 'laktosefrei', meaning: 'lactose-free', note: 'adjective, no gender' },
        { gender: 'die', word: 'scharf', meaning: 'spicy', note: 'adjective, no gender' },
      ],
    },
    {
      label: 'Zahlen & Service · Payment & Service',
      items: [
        { gender: 'die', word: 'Rechnung', meaning: 'bill / check' },
        { gender: 'das', word: 'Trinkgeld', meaning: 'tip' },
        { gender: 'die', word: 'Karte', meaning: 'card (payment)' },
        { gender: 'das', word: 'Bargeld', meaning: 'cash', note: 'bar = in cash (adverb)' },
        { gender: 'der', word: 'Kellner', meaning: 'waiter' },
        { gender: 'die', word: 'Kellnerin', meaning: 'waitress' },
        { gender: 'der', word: 'Tisch', meaning: 'table' },
        { gender: 'die', word: 'Reservierung', meaning: 'reservation' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Order individual items by name using a few fixed phrases',
      example: 'Ich nehme eine Suppe und ein Wasser, bitte.',
    },
    {
      level: 'A2',
      canDo: 'Ask menu questions and make a full order with polite forms',
      example: 'Was empfehlen Sie? Ist das vegetarisch? Ich hätte gern das Tagesgericht.',
    },
    {
      level: 'B1',
      canDo: 'State dietary restrictions and ask about specific ingredients',
      example: 'Ich esse kein Fleisch. Enthält das Gericht Laktose?',
    },
    {
      level: 'B2',
      canDo: 'Discuss allergens in detail, make substitution requests, and handle any payment situation',
      example:
        'Ich habe eine Nussallergie — könnten Sie in der Küche nachfragen, ob die Soße Spuren von Nüssen enthält?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'Order food and a drink using "Ich nehme..." or "Ich hätte gern..."' },
    { level: 'A2', text: 'Ask about the menu and understand the waiter\'s answers' },
    { level: 'B1', text: 'Explain a dietary restriction and confirm what is safe to eat' },
    { level: 'B2', text: 'Handle allergen questions and special requests confidently in writing or in person' },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'nehme', role: 'verb', highlight: true },
            { text: 'eine Suppe und ein Wasser', role: 'mittelfeld' },
          ],
          caption: 'Simple order with "nehmen" (to take/have)',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'hätte', role: 'verb', highlight: true },
            { text: 'gern einen Kaffee', role: 'mittelfeld' },
          ],
          caption: '"Ich hätte gern..." is the polite way to order — use it from day one',
        },
        {
          slots: [
            { text: 'Ein Wasser', role: 'pos1' },
            { text: 'bitte', role: 'verb', highlight: true },
            { text: '', role: 'mittelfeld' },
          ],
          caption: 'Ultra-minimal: just the item + bitte',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Ordering',
          phrases: [
            'Ich nehme das Tagesgericht.',
            'Ich hätte gern eine Suppe.',
            'Ein Wasser, bitte.',
            'Zwei Bier, bitte.',
          ],
        },
        {
          levels: ['A1'],
          funktion: 'Basic requests at the table',
          phrases: [
            'Die Speisekarte, bitte.',
            'Danke.',
            'Entschuldigung!',
          ],
        },
      ],
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Was', role: 'pos1' },
            { text: 'empfehlen', role: 'verb', highlight: true },
            { text: 'Sie', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Asking for a recommendation — verb in position 2',
        },
        {
          slots: [
            { text: 'Ist', role: 'pos1' },
            { text: 'das', role: 'verb', highlight: false },
            { text: 'vegetarisch', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Yes/no question — verb moves to position 1',
        },
      ],
      dialogue: {
        title: 'Im Restaurant bestellen',
        level: 'A2',
        lines: [
          { speaker: 'Kellner', speakerGender: 'der', de: 'Guten Abend! Haben Sie schon gewählt?', en: 'Good evening! Have you chosen yet?' },
          { speaker: 'Gast', speakerGender: 'die', de: 'Noch nicht ganz. Was empfehlen Sie heute?', en: 'Not quite yet. What do you recommend today?' },
          { speaker: 'Kellner', speakerGender: 'der', de: 'Das Tagesgericht ist sehr gut — Lachsfilet mit Kartoffeln.', en: 'The dish of the day is very good — salmon fillet with potatoes.' },
          { speaker: 'Gast', speakerGender: 'die', de: 'Gut. Ich hätte gern das Tagesgericht. Und eine Gemüsesuppe als Vorspeise.', en: 'Good. I\'d like the dish of the day. And a vegetable soup as a starter.' },
          { speaker: 'Kellner', speakerGender: 'der', de: 'Sehr gern. Und was möchten Sie trinken?', en: 'Of course. And what would you like to drink?' },
          { speaker: 'Gast', speakerGender: 'die', de: 'Ein stilles Wasser, bitte.', en: 'A still water, please.' },
          { speaker: 'Kellner', speakerGender: 'der', de: 'Alles klar. Kommt sofort.', en: 'All right. Coming right up.' },
          { speaker: 'Gast', speakerGender: 'die', de: 'Entschuldigung — könnten wir bitte zahlen?', en: 'Excuse me — could we pay please?' },
          { speaker: 'Kellner', speakerGender: 'der', de: 'Natürlich. Zusammen oder getrennt?', en: 'Of course. Together or separately?' },
          { speaker: 'Gast', speakerGender: 'die', de: 'Zusammen, bitte. Mit Karte.', en: 'Together, please. By card.' },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Menu questions',
          phrases: [
            'Was empfehlen Sie?',
            'Ist das vegetarisch?',
            'Was ist das Tagesgericht?',
            'Haben Sie die Speisekarte auf Englisch?',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Paying',
          phrases: [
            'Können wir bitte zahlen?',
            'Die Rechnung, bitte.',
            'Getrennt oder zusammen?',
            'Zusammen, bitte.',
            'Mit Karte, bitte.',
            'Bar, bitte.',
            'Stimmt so.',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Restaurantreservierung — einfache Nachricht',
        parts: [
          {
            label: 'Nachricht',
            de: 'Guten Tag,\n\nich möchte gerne einen Tisch reservieren. Wir sind zwei Personen. Geht das am Freitag um 19 Uhr?\n\nMit freundlichen Grüßen\nSarah Müller',
          },
        ],
        checklist: [
          'Anzahl der Personen nennen',
          'Datum und Uhrzeit angeben',
          'Höfliche Begrüßung und Verabschiedung',
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'esse', role: 'verb', highlight: true },
            { text: 'kein Fleisch und keinen Fisch', role: 'mittelfeld' },
          ],
          caption: 'Stating what you don\'t eat — kein/keine + accusative',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'vertrage', role: 'verb', highlight: true },
            { text: 'Laktose leider nicht', role: 'mittelfeld' },
          ],
          caption: '"vertragen" = to tolerate — natural for intolerances',
        },
        {
          slots: [
            { text: 'Enthält', role: 'pos1' },
            { text: 'das', role: 'verb', highlight: false },
            { text: 'Gericht Gluten', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Asking about ingredients — "enthalten" (to contain)',
        },
      ],
      dialogue: {
        title: 'Ernährungsbedürfnisse erklären',
        level: 'B1',
        lines: [
          { speaker: 'Kellnerin', speakerGender: 'die', de: 'Haben Sie schon etwas ausgewählt?', en: 'Have you selected something?' },
          { speaker: 'Gast', speakerGender: 'der', de: 'Ja, ich hätte gerne den Risotto. Aber ich esse kein Fleisch — ist das wirklich vegetarisch?', en: 'Yes, I\'d like the risotto. But I don\'t eat meat — is it really vegetarian?' },
          { speaker: 'Kellnerin', speakerGender: 'die', de: 'Ja, der Risotto ist komplett vegetarisch. Er enthält aber Parmesan — also nicht vegan.', en: 'Yes, the risotto is completely vegetarian. It does contain parmesan though — so not vegan.' },
          { speaker: 'Gast', speakerGender: 'der', de: 'Das ist kein Problem. Ich vertrage nur keine Laktose. Kann man den Parmesan weglassen?', en: 'That\'s no problem. I just can\'t tolerate lactose. Can the parmesan be left out?' },
          { speaker: 'Kellnerin', speakerGender: 'die', de: 'Ja, das können wir machen. Ich gebe das in der Küche Bescheid.', en: 'Yes, we can do that. I\'ll let the kitchen know.' },
          { speaker: 'Gast', speakerGender: 'der', de: 'Wunderbar, danke schön!', en: 'Wonderful, thank you very much!' },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Dietary restrictions',
          phrases: [
            'Ich esse kein Fleisch.',
            'Ich bin Vegetarier / Vegetarierin.',
            'Ich lebe vegan.',
            'Ich vertrage keine Laktose.',
            'Ich habe eine Glutenunverträglichkeit.',
            'Ich bin allergisch gegen Nüsse.',
            'Enthält das Gericht Fleisch?',
            'Kann man das ohne Käse zubereiten?',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Reservierung mit Ernährungswunsch',
        parts: [
          {
            label: 'E-Mail',
            de: 'Sehr geehrte Damen und Herren,\n\nich würde gerne für kommenden Samstag, den 15. März, um 19:30 Uhr einen Tisch für vier Personen reservieren.\n\nEine Person in unserer Gruppe isst kein Fleisch und verträgt keine Laktose. Haben Sie vegetarische und laktosefreie Optionen auf der Karte?\n\nIch freue mich auf Ihre Antwort.\n\nMit freundlichen Grüßen\nKlaus Wagner',
          },
        ],
        checklist: [
          'Anzahl und Datum vollständig angeben',
          'Ernährungsbedürfnis klar benennen',
          'Frage nach Alternativen stellen',
          'Formelle Anrede und Abschluss verwenden',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Könnten Sie', role: 'pos1' },
            { text: 'nachfragen', role: 'verb', highlight: true },
            { text: 'ob die Soße Spuren von Erdnüssen', role: 'mittelfeld' },
            { text: 'enthält', role: 'verb-end', highlight: true },
          ],
          caption: 'Polite request + subordinate clause — "ob" sends verb to end',
          showBracket: true,
        },
        {
          slots: [
            { text: 'Ich würde es', role: 'pos1' },
            { text: 'bevorzugen', role: 'verb', highlight: true },
            { text: 'wenn das Fleisch separat', role: 'mittelfeld' },
            { text: 'serviert würde', role: 'verb-end', highlight: true },
          ],
          caption: 'Konjunktiv II for polite preferences',
          showBracket: true,
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Allergen & ingredient questions',
          phrases: [
            'Ich habe eine schwere Nussallergie — könnten Sie in der Küche nachfragen?',
            'Welche Zutaten sind in der Soße enthalten?',
            'Ist das mit demselben Öl gebraten wie die Fleischgerichte?',
            'Gibt es eine Karte mit Allergeninformationen?',
            'Kann das Gericht ohne Krustentiere zubereitet werden?',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Detailed requests & feedback',
          phrases: [
            'Das Fleisch ist leider etwas zu durch — könnten Sie das kurz reklamieren?',
            'Ich hätte es lieber medium bestellt.',
            'Könnten wir noch etwas Brot dazu bekommen?',
            'Stimmt das mit dem Preis? Ich hatte das Tagesgericht ohne Getränk bestellt.',
          ],
        },
      ],
      challenge:
        'You have a severe tree-nut allergy. Order a three-course meal, ask the waiter to verify ingredients ' +
        'with the kitchen for each course, request one substitution, and handle the bill including a tip. ' +
        'Do all of this without switching to English.',
    },
  },

  foundationLinks: [
    { label: 'Satzbau: Wortstellung im Deutschen', foundationSlug: 'satzbau' },
    { label: 'Modalverben: könnte, würde, möchte', foundationSlug: 'modal-verbs' },
    { label: 'Konjunktiv II für höfliche Anfragen', foundationSlug: 'konjunktiv' },
  ],

  hero: {
    caption: 'From "ein Wasser bitte" to navigating allergens — restaurants covered.',
    alt: 'A table set for dinner in a German restaurant, with a menu card',
  },
};
