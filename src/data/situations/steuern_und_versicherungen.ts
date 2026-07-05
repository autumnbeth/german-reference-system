import type { Situation } from '../../content/schema';

export const steuernUndVersicherungen: Situation = {
  slug: 'steuern-und-versicherungen',
  theme: 'Money',
  subtheme: 'Steuern & Versicherungen',
  category: 'Official life',
  title: 'Steuern & Versicherungen',
  intro:
    'The paperwork side of German life: which insurances you actually need, how the ' +
    'Steuererklärung works, what the Finanzamt sends you back, and how to question a ' +
    'Steuerbescheid or file an insurance claim.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can talk to my Krankenkasse and insurance company, hand in a Steuererklärung ' +
    'without panic, read the Bescheid that comes back, and report a Schaden in clear German.',

  vocab: [
    {
      label: 'A1 · Grundwörter',
      items: [
        { gender: 'das', word: 'Geld', meaning: 'money' },
        { gender: 'die', word: 'Steuer', meaning: 'tax', plural: 'Steuern' },
        { gender: 'die', word: 'Versicherung', meaning: 'insurance', plural: 'Versicherungen' },
        { gender: 'verb', word: 'bezahlen', meaning: 'to pay' },
        { gender: 'das', word: 'Jahr', meaning: 'year', plural: 'Jahre' },
        { gender: 'der', word: 'Brief', meaning: 'letter', plural: 'Briefe' },
      ],
    },
    {
      label: 'A2 · Versicherungen im Alltag',
      items: [
        { gender: 'die', word: 'Krankenkasse', meaning: 'health insurance fund', plural: 'Krankenkassen' },
        { gender: 'die', word: 'Haftpflichtversicherung', meaning: 'personal liability insurance', note: 'the one insurance every German has' },
        { gender: 'die', word: 'Hausratversicherung', meaning: 'household contents insurance' },
        { gender: 'der', word: 'Beitrag', meaning: 'premium / contribution', plural: 'Beiträge' },
        { gender: 'verb', word: 'versichert sein', meaning: 'to be insured' },
        { gender: 'der', word: 'Schaden', meaning: 'damage / loss', plural: 'Schäden' },
      ],
    },
    {
      label: 'B1 · Die Steuererklärung',
      items: [
        { gender: 'die', word: 'Steuererklärung', meaning: 'tax return', plural: 'Steuererklärungen' },
        { gender: 'das', word: 'Finanzamt', meaning: 'tax office', plural: 'Finanzämter' },
        { gender: 'verb', word: 'absetzen', meaning: 'to deduct (from tax)', note: 'separable: Ich setze die Fahrtkosten ab.' },
        { gender: 'die', word: 'Steuerklasse', meaning: 'tax class', plural: 'Steuerklassen' },
        { gender: 'der', word: 'Freibetrag', meaning: 'tax-free allowance', plural: 'Freibeträge' },
        { gender: 'die', word: 'Quittung', meaning: 'receipt', plural: 'Quittungen' },
        { gender: 'verb', word: 'abgeben', meaning: 'to hand in / file', note: 'separable: Ich gebe die Erklärung online ab.' },
      ],
    },
    {
      label: 'B2 · Bescheide & Fristen',
      items: [
        { gender: 'der', word: 'Steuerbescheid', meaning: 'tax assessment notice', plural: 'Steuerbescheide' },
        { gender: 'die', word: 'Erstattung', meaning: 'refund', plural: 'Erstattungen' },
        { gender: 'die', word: 'Nachzahlung', meaning: 'back payment (you owe)', plural: 'Nachzahlungen' },
        { gender: 'der', word: 'Einspruch', meaning: 'formal objection (to the Finanzamt)', note: 'Einspruch einlegen gegen + A' },
        { gender: 'verb', word: 'eine Frist verlängern', meaning: 'to extend a deadline' },
        { gender: 'der', word: 'Steuerberater', meaning: 'tax advisor', plural: 'Steuerberater' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Say which insurances you have and what you pay.',
      example: 'Ich habe eine Versicherung. Sie kostet 8 Euro im Monat.',
    },
    {
      level: 'A2',
      canDo: 'Ask what an insurance covers and report simple damage.',
      example: 'Ist mein Fahrrad versichert?',
    },
    {
      level: 'B1',
      canDo: 'Ask what you can deduct and file your tax return.',
      example: 'Kann ich die Fahrtkosten von der Steuer absetzen?',
    },
    {
      level: 'B2',
      canDo: 'Question a Steuerbescheid and negotiate deadlines with the Finanzamt.',
      example: 'Gegen den Bescheid lege ich Einspruch ein, da die Werbungskosten fehlen.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can name my insurances and their monthly cost.', achieved: true },
    { level: 'A2', text: 'I can ask my Krankenkasse or insurer a simple question.', achieved: true },
    { level: 'B1', text: 'I can prepare and file a Steuererklärung with help.', achieved: false },
    { level: 'B2', text: 'I can read a Steuerbescheid and object when it is wrong.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'eine Haftpflichtversicherung.', role: 'mittelfeld' },
          ],
          caption: 'Naming what you have — the longest word is still just an object.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Naming the basics',
          phrases: [
            'Ich habe eine Versicherung.',
            'Was kostet das im Monat?',
            'Ich habe einen Brief vom Finanzamt.',
            'Ich verstehe den Brief nicht. Können Sie helfen?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Ein Brief kommt an',
        level: 'A1',
        lines: [
          { speaker: 'Nachbarin', speakerGender: 'die',
            de: 'Was ist das für ein Brief?',
            en: 'What kind of letter is that?' },
          { speaker: 'Nachbar', speakerGender: 'der',
            de: 'Er ist vom Finanzamt. Ich verstehe ihn nicht ganz.',
            en: 'It’s from the tax office. I don’t completely understand it.' },
          { speaker: 'Nachbarin', speakerGender: 'die',
            de: 'Zeig mal. Ah — das ist nur eine Information, kein Problem.',
            en: 'Let me see. Ah — that’s just information, no problem.' },
          { speaker: 'Nachbar', speakerGender: 'der',
            de: 'Puh, danke!',
            en: 'Phew, thanks!' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Meine Versicherungen',
        parts: [
          { label: 'Notiz',
            de: 'Krankenkasse: TK. Haftpflicht: 8 Euro im Monat. Hausrat: 12 Euro im Monat.',
            en: 'Health insurance: TK. Liability: 8 euros a month. Contents: 12 euros a month.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ist', role: 'verb', highlight: true },
            { text: 'mein Fahrrad', role: 'mittelfeld' },
            { text: 'versichert?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'sein + Partizip — asking what is covered.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Asking what is covered',
          phrases: [
            'Was ist in der Versicherung enthalten?',
            'Ist mein Fahrrad auch versichert?',
            'Wie hoch ist der Beitrag im Monat?',
            'Ich möchte einen Schaden melden.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Bei der Versicherung anrufen',
        level: 'A2',
        lines: [
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Guten Tag, wie kann ich Ihnen helfen?',
            en: 'Good day, how can I help you?' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Guten Tag. Ich möchte einen Schaden melden. Meine Waschmaschine hat Wasser verloren.',
            en: 'Good day. I’d like to report damage. My washing machine leaked water.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Das tut mir leid. Haben Sie Ihre Versicherungsnummer zur Hand?',
            en: 'I’m sorry to hear that. Do you have your insurance number handy?' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Ja, die Nummer ist HV-2298.',
            en: 'Yes, the number is HV-2298.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Danke. Machen Sie bitte Fotos von dem Schaden und schicken Sie sie uns per E-Mail.',
            en: 'Thank you. Please take photos of the damage and send them to us by email.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hallo Papa, ich habe jetzt eine Haftpflichtversicherung — nur 8 Euro im Monat. Der Vertrag kommt per Post. LG, Nora',
            en: 'Hi Dad, I now have liability insurance — only 8 euros a month. The contract is coming by post. Best, Nora' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Fahrtkosten', role: 'pos1' },
            { text: 'kann', role: 'verb', highlight: true },
            { text: 'ich von der Steuer', role: 'mittelfeld' },
            { text: 'absetzen.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal + separable verb — the deducted item takes position 1 for emphasis.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Doing the Steuererklärung',
          phrases: [
            'Bis wann muss ich die Steuererklärung abgeben?',
            'Kann ich die Fahrtkosten absetzen?',
            'Welche Quittungen soll ich aufheben?',
            'In welcher Steuerklasse bin ich?',
            'Ich gebe die Erklärung online über ELSTER ab.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Fragen an eine Freundin',
        level: 'B1',
        lines: [
          { speaker: 'Anna', speakerGender: 'die',
            de: 'Machst du deine Steuererklärung selbst?',
            en: 'Do you do your tax return yourself?' },
          { speaker: 'Jonas', speakerGender: 'der',
            de: 'Ja, mit ELSTER. Es ist einfacher, als es aussieht.',
            en: 'Yes, with ELSTER. It’s easier than it looks.' },
          { speaker: 'Anna', speakerGender: 'die',
            de: 'Was kann ich denn alles absetzen?',
            en: 'What can I actually deduct?' },
          { speaker: 'Jonas', speakerGender: 'der',
            de: 'Fahrtkosten, Arbeitsmittel, Fortbildungen — sogar deinen Deutschkurs, wenn er beruflich ist.',
            en: 'Travel costs, work equipment, training — even your German course, if it’s for work.' },
          { speaker: 'Anna', speakerGender: 'die',
            de: 'Dann hebe ich ab jetzt alle Quittungen auf.',
            en: 'Then from now on I’ll keep all my receipts.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · ans Finanzamt',
        to: 'poststelle@finanzamt-mitte.de',
        subject: 'Frage zur Steuererklärung 2025 — Steuernummer 12/345/67890',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'ich habe eine Frage zu meiner Steuererklärung für 2025: Kann ich die Kosten für meinen berufsbezogenen Deutschkurs als Werbungskosten absetzen?',
            en: 'I have a question about my tax return for 2025: can I deduct the costs of my work-related German course as income-related expenses?',
            highlight: 'als Werbungskosten absetzen' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Steuernummer in the subject',
          'One precise question per email',
          'Use the official term (Werbungskosten)',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Gegen den Steuerbescheid', role: 'pos1' },
            { text: 'lege', role: 'verb', highlight: true },
            { text: 'ich innerhalb der Frist Einspruch', role: 'mittelfeld' },
            { text: 'ein.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Einspruch einlegen — the Finanzamt version of Widerspruch (one month deadline).',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Questioning a Bescheid',
          phrases: [
            'Im Bescheid wurden meine Werbungskosten nicht berücksichtigt.',
            'Ich lege fristgerecht Einspruch gegen den Bescheid ein.',
            'Könnten Sie mir die Abgabefrist bis Ende September verlängern?',
            'Die Nachzahlung kann ich nur in Raten leisten.',
            'Ich lasse das von einem Steuerberater prüfen.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Anruf beim Finanzamt',
        level: 'B2',
        lines: [
          { speaker: 'Sachbearbeiterin', speakerGender: 'die',
            de: 'Finanzamt Mitte, guten Tag.',
            en: 'Tax office Mitte, good day.' },
          { speaker: 'Anrufer', speakerGender: 'der',
            de: 'Guten Tag. In meinem Steuerbescheid fehlen die Fortbildungskosten, die ich angegeben hatte.',
            en: 'Good day. My tax assessment is missing the training costs I had declared.' },
          { speaker: 'Sachbearbeiterin', speakerGender: 'die',
            de: 'Das kann ich mir ansehen. Haben Sie Belege für die Kosten eingereicht?',
            en: 'I can look at that. Did you submit receipts for the costs?' },
          { speaker: 'Anrufer', speakerGender: 'der',
            de: 'Ja, mit der Erklärung. Falls nötig, lege ich formell Einspruch ein — aber vielleicht lässt es sich so klären.',
            en: 'Yes, with the return. If necessary I’ll formally object — but maybe it can be resolved like this.' },
          { speaker: 'Sachbearbeiterin', speakerGender: 'die',
            de: 'Schicken Sie die Belege noch einmal mit einem kurzen Anschreiben — dann wird der Bescheid geprüft.',
            en: 'Send the receipts again with a short cover letter — then the assessment will be reviewed.' },
        ],
      },
      writing: {
        kind: 'letter',
        level: 'B2',
        title: 'Brief · Einspruch',
        parts: [
          { label: 'Betreff',
            de: 'Einspruch gegen den Steuerbescheid vom 4. Juni — Steuernummer 12/345/67890',
            en: 'Objection to the tax assessment of June 4th — tax number 12/345/67890' },
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Einspruch',
            de: 'hiermit lege ich fristgerecht Einspruch gegen den oben genannten Bescheid ein.',
            en: 'I hereby lodge a timely objection to the above-mentioned assessment.',
            highlight: 'Einspruch gegen den oben genannten Bescheid' },
          { label: 'Begründung',
            de: 'Die von mir geltend gemachten Fortbildungskosten in Höhe von 620 Euro wurden nicht berücksichtigt. Die Belege füge ich erneut bei.',
            en: 'The training costs of 620 euros that I claimed were not taken into account. I enclose the receipts again.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'One-month deadline — date your letter',
          'Name the exact amount and category',
          'Enclose evidence again, even if sent before',
        ],
      },
      challenge:
        'Find one real Quittung from this month that could count as Werbungskosten and ' +
        'write the one German sentence you would use to claim it.',
    },
  },

  foundationLinks: [
    { label: 'Modal verbs + separable verbs', foundationSlug: 'modal-verbs' },
    { label: 'Passive (wurden nicht berücksichtigt)', foundationSlug: 'passive' },
    { label: 'Konjunktiv II for polite requests', foundationSlug: 'konjunktiv' },
  ],

  hero: {
    caption: 'Steuern und Versicherungen — the German paperwork stack.',
    alt: 'Folders of receipts and insurance documents beside a laptop showing a tax form',
  },
};
