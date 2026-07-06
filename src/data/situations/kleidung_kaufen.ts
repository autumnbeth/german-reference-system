import type { Situation } from '../../content/schema';

export const kleidungKaufen: Situation = {
  slug: 'kleidung-kaufen',
  theme: 'Daily Life',
  subtheme: 'Kleidung kaufen',
  category: 'Survival & daily life',
  title: 'Kleidung kaufen',
  intro:
    'Shopping for clothes in Germany: naming what you need, asking for your Größe, ' +
    'trying things on in the Umkleidekabine, and — at higher levels — negotiating an ' +
    'exchange or asking a sales assistant for real styling advice.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can find and ask for clothes in my size, use the changing room, understand what ' +
    'a size chart or label means, and handle an exchange or return without switching ' +
    'to English.',

  vocab: [
    {
      label: 'A1 · Kleidungsstücke',
      items: [
        { gender: 'die', word: 'Hose', meaning: 'trousers / pants', plural: 'Hosen' },
        { gender: 'die', word: 'Jacke', meaning: 'jacket', plural: 'Jacken' },
        { gender: 'das', word: 'Hemd', meaning: 'shirt', plural: 'Hemden' },
        { gender: 'der', word: 'Pullover', meaning: 'sweater', plural: 'Pullover' },
        { gender: 'die', word: 'Größe', meaning: 'size', plural: 'Größen' },
        { gender: 'verb', word: 'kaufen', meaning: 'to buy' },
      ],
    },
    {
      label: 'A2 · Im Geschäft',
      items: [
        { gender: 'die', word: 'Umkleidekabine', meaning: 'changing room', plural: 'Umkleidekabinen' },
        { gender: 'verb', word: 'anprobieren', meaning: 'to try on', note: 'separable: Ich probiere die Hose an.' },
        { gender: 'verb', word: 'passen', meaning: 'to fit', note: 'Die Hose passt nicht.' },
        { gender: 'der', word: 'Preis', meaning: 'price', plural: 'Preise' },
        { gender: 'das', word: 'Sonderangebot', meaning: 'special offer', plural: 'Sonderangebote' },
        { gender: 'verb', word: 'gefallen', meaning: 'to like / appeal to', note: 'Das gefällt mir.' },
      ],
    },
    {
      label: 'B1 · Beschreiben & Vergleichen',
      items: [
        { gender: 'der', word: 'Stoff', meaning: 'fabric', plural: 'Stoffe' },
        { gender: 'verb', word: 'zu eng / zu weit sein', meaning: 'to be too tight / too loose' },
        { gender: 'die', word: 'Farbe', meaning: 'colour', plural: 'Farben' },
        { gender: 'verb', word: 'stehen', meaning: 'to suit (someone)', note: 'Das steht dir gut.' },
        { gender: 'die', word: 'Anprobe', meaning: 'the trying-on / fitting' },
        { gender: 'verb', word: 'sich umziehen', meaning: 'to change clothes', note: 'separable & reflexive: Ich ziehe mich um.' },
      ],
    },
    {
      label: 'B2 · Umtausch & Beratung',
      items: [
        { gender: 'der', word: 'Umtausch', meaning: 'exchange', note: 'Umtausch nur mit Kassenbon' },
        { gender: 'verb', word: 'umtauschen', meaning: 'to exchange', note: 'separable: Ich tausche die Jacke um.' },
        { gender: 'die', word: 'Beratung', meaning: 'advice / consultation', plural: 'Beratungen' },
        { gender: 'der', word: 'Rabatt', meaning: 'discount', plural: 'Rabatte' },
        { gender: 'verb', word: 'reduziert sein', meaning: 'to be marked down', note: 'Der Mantel ist reduziert.' },
        { gender: 'die', word: 'Passform', meaning: 'fit / cut (of a garment)' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Name a piece of clothing and your size.',
      example: 'Ich brauche eine Hose in Größe M.',
    },
    {
      level: 'A2',
      canDo: 'Ask to try something on and say whether it fits.',
      example: 'Kann ich das anprobieren? Es passt nicht.',
    },
    {
      level: 'B1',
      canDo: 'Describe what is wrong with the fit and ask for an alternative.',
      example: 'Die Hose ist zu eng — haben Sie sie eine Nummer größer?',
    },
    {
      level: 'B2',
      canDo: 'Handle an exchange and ask a sales assistant for real advice.',
      example: 'Könnte ich das umtauschen, wenn es zu Hause nicht passt?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can name what I need and my size.', achieved: true },
    { level: 'A2', text: 'I can try things on and say if they fit.', achieved: true },
    { level: 'B1', text: 'I can describe fit problems and ask for a different size.', achieved: false },
    { level: 'B2', text: 'I can handle an exchange and ask for styling advice.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'brauche', role: 'verb', highlight: true },
            { text: 'eine Hose in Größe M.', role: 'mittelfeld' },
          ],
          caption: 'brauchen + Akkusativ + in Größe — your basic shopping sentence.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Naming what you need',
          phrases: [
            'Ich suche eine Jacke.',
            'Ich brauche Größe M.',
            'Wie viel kostet das?',
            'Das gefällt mir.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Im Kleidungsgeschäft',
        level: 'A1',
        lines: [
          { speaker: 'Verkäuferin', speakerGender: 'die',
            de: 'Guten Tag! Kann ich Ihnen helfen?',
            en: 'Good day! Can I help you?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Ja, ich suche ein Hemd in Größe L.',
            en: 'Yes, I’m looking for a shirt in size L.' },
          { speaker: 'Verkäuferin', speakerGender: 'die',
            de: 'Diese Hemden hier sind alle in Größe L.',
            en: 'These shirts here are all in size L.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Danke, das gefällt mir!',
            en: 'Thanks, I like this one!' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Einkaufsliste',
        parts: [
          { label: 'Notiz',
            de: 'Kaufen: Winterjacke Größe M, warme Socken, ein Pullover.',
            en: 'Buy: winter jacket size M, warm socks, a sweater.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Kann', role: 'verb', highlight: true },
            { text: 'ich das', role: 'mittelfeld' },
            { text: 'anprobieren?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal + separable verb — the standard changing-room request.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Trying things on',
          phrases: [
            'Kann ich das anprobieren?',
            'Wo ist die Umkleidekabine?',
            'Es passt leider nicht.',
            'Haben Sie das auch in Größe L?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Die Anprobe',
        level: 'A2',
        lines: [
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Entschuldigung, kann ich diesen Pullover anprobieren?',
            en: 'Excuse me, can I try on this sweater?' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Natürlich, die Umkleidekabine ist dort hinten.',
            en: 'Of course, the changing room is over there.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Danke. Hmm, er passt nicht — er ist zu klein.',
            en: 'Thanks. Hmm, it doesn’t fit — it’s too small.' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Kein Problem, ich hole Ihnen eine Größe größer.',
            en: 'No problem, I’ll get you one size bigger.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi Lea! Ich bin gerade im Kaufhaus — die blaue Jacke gefällt mir sehr, aber sie ist teuer. Was meinst du? LG',
            en: 'Hi Lea! I’m at the department store right now — I really like the blue jacket, but it’s expensive. What do you think? Best' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Hose', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'mir zu eng —', role: 'mittelfeld' },
            { text: 'haben Sie sie eine Nummer größer?', role: 'satzende' },
          ],
          caption: 'zu + adjective states the problem; the question offers the fix.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Describing fit problems',
          phrases: [
            'Die Hose ist mir zu eng / zu weit / zu lang.',
            'Der Stoff fühlt sich nicht gut an.',
            'Steht mir diese Farbe?',
            'Haben Sie das in einer anderen Farbe?',
            'Ich brauche etwas, das man im Büro tragen kann.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Beratung im Laden',
        level: 'B1',
        lines: [
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Die Jeans ist mir eigentlich zu eng, und der Stoff kratzt ein bisschen.',
            en: 'The jeans are actually too tight for me, and the fabric is a bit scratchy.' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Wir haben das gleiche Modell auch mit mehr Elasthan — das ist weicher.',
            en: 'We also have the same model with more elastane — that’s softer.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Gut, das probiere ich gern. Und steht mir eigentlich die dunkelblaue Farbe?',
            en: 'Good, I’d like to try that. And does the dark blue colour actually suit me?' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Ja, auf jeden Fall — die passt gut zu Ihrem Hauttyp.',
            en: 'Yes, definitely — it goes well with your skin tone.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Frage zum Online-Kauf',
        to: 'service@modeshop-online.de',
        subject: 'Frage zur Größe — Artikel Nr. 4471',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'ich interessiere mich für die Jacke (Artikel Nr. 4471), bin mir aber bei der Größe unsicher.',
            en: 'I’m interested in the jacket (item no. 4471), but I’m unsure about the size.' },
          { label: 'Frage',
            de: 'Fällt die Jacke eher groß oder klein aus? Ich trage normalerweise Größe M.',
            en: 'Does the jacket run larger or smaller than usual? I usually wear size M.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Name the exact item (Artikel Nr.)',
          'State your usual size for comparison',
          'One clear question — fällt … groß/klein aus?',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Könnte', role: 'verb', highlight: true },
            { text: 'ich das umtauschen,', role: 'mittelfeld' },
            { text: 'wenn es zu Hause nicht passt?', role: 'satzende' },
          ],
          caption: 'Konjunktiv II + wenn-clause — the polite conditional question.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Exchanges and advice',
          phrases: [
            'Könnte ich das umtauschen, wenn es nicht passt?',
            'Wie lange habe ich Zeit für einen Umtausch?',
            'Was würden Sie mir für einen lässigen Look empfehlen?',
            'Ist der Mantel reduziert, oder ist das der normale Preis?',
            'Die Passform gefällt mir nicht ganz — gibt es ein anderes Schnittmuster?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Stilberatung',
        level: 'B2',
        lines: [
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Ich brauche etwas für ein Vorstellungsgespräch — aber nicht zu förmlich.',
            en: 'I need something for a job interview — but not too formal.' },
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Wie wäre es mit diesem Sakko? Man kann es mit oder ohne Krawatte tragen.',
            en: 'How about this blazer? You can wear it with or without a tie.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Gefällt mir. Und falls es doch nicht passt — kann ich es umtauschen?',
            en: 'I like it. And if it doesn’t work out — can I exchange it?' },
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Klar, innerhalb von 30 Tagen mit Kassenbon, auch ungetragen mit Etikett.',
            en: 'Sure, within 30 days with the receipt, as long as it’s unworn with the tag.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B2',
        title: 'Nachricht · nach dem Einkauf',
        parts: [
          { label: 'Nachricht',
            de: 'Also, ich habe mir doch das Sakko geholt — die Beraterin meinte, es würde gut zu Vorstellungsgesprächen passen. Mal sehen, ob ich es nicht doch umtausche, wenn es zu Hause komisch aussieht 😄',
            en: 'So, I did get the blazer after all — the advisor said it would work well for interviews. We’ll see if I don’t end up exchanging it if it looks weird at home 😄' },
        ],
      },
      challenge:
        'Next time you buy clothes, ask the assistant one real styling question in German ' +
        '— „Was würden Sie mir empfehlen?" — and see where the conversation goes.',
    },
  },

  foundationLinks: [
    { label: 'Konjunktiv II (Könnte ich …?)', foundationSlug: 'konjunktiv' },
    { label: 'Dativ verbs (passen, gefallen, stehen)', foundationSlug: 'pronomen' },
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'verbklammer' },
  ],

  hero: {
    src: '/images/clothes-shopping.png',
    caption: 'Kleidung kaufen — from „Größe?" to the changing room.',
    alt: 'A goblin trying on a hat in a mirror while a shop assistant measures a garment',
  },
};
