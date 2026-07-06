import type { Situation } from '../../content/schema';

export const zahnarzt: Situation = {
  slug: 'zahnarzt',
  theme: 'Health',
  subtheme: 'Zahnarzt',
  category: 'Survival & daily life',
  title: 'Zahnarzt',
  intro:
    'Going to the dentist in Germany: booking a Termin, describing toothache and where ' +
    'it hurts, understanding what the Zahnarzt wants to do, and — at higher levels — ' +
    'discussing costs, Zuzahlung, and what your Krankenkasse covers.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can book a dental appointment, describe my pain clearly, follow what the dentist ' +
    'explains during treatment, and ask what a procedure costs and what my insurance ' +
    'pays — without freezing up in the chair.',

  vocab: [
    {
      label: 'A1 · Beim Zahnarzt',
      items: [
        { gender: 'der', word: 'Zahn', meaning: 'tooth', plural: 'Zähne' },
        { gender: 'der', word: 'Mund', meaning: 'mouth', plural: 'Münder' },
        { gender: 'die', word: 'Zahnschmerzen', meaning: 'toothache', note: 'plural: Ich habe Zahnschmerzen.' },
        { gender: 'der', word: 'Termin', meaning: 'appointment', plural: 'Termine' },
        { gender: 'verb', word: 'weh tun', meaning: 'to hurt', note: 'Der Zahn tut weh.' },
        { gender: 'verb', word: 'aufmachen', meaning: 'to open (your mouth)', note: 'separable: Machen Sie bitte den Mund auf.' },
      ],
    },
    {
      label: 'A2 · Symptome & Behandlung',
      items: [
        { gender: 'das', word: 'Loch', meaning: 'hole / cavity', plural: 'Löcher' },
        { gender: 'die', word: 'Füllung', meaning: 'filling', plural: 'Füllungen', note: 'also: die Plombe' },
        { gender: 'die', word: 'Spritze', meaning: 'injection', plural: 'Spritzen' },
        { gender: 'die', word: 'Betäubung', meaning: 'anaesthetic / numbing' },
        { gender: 'die', word: 'Kontrolle', meaning: 'check-up', plural: 'Kontrollen', note: 'zur Kontrolle gehen' },
        { gender: 'verb', word: 'bohren', meaning: 'to drill', note: 'Muss der Zahn gebohrt werden?' },
      ],
    },
    {
      label: 'B1 · Genauer beschreiben',
      items: [
        { gender: 'das', word: 'Zahnfleisch', meaning: 'gums' },
        { gender: 'die', word: 'Wurzelbehandlung', meaning: 'root canal treatment', plural: 'Wurzelbehandlungen' },
        { gender: 'verb', word: 'ziehen', meaning: 'to pull / extract', note: 'Der Zahn muss gezogen werden.' },
        { gender: 'die', word: 'Prophylaxe', meaning: 'professional cleaning', note: 'die professionelle Zahnreinigung (PZR)' },
        { gender: 'verb', word: 'empfindlich sein', meaning: 'to be sensitive', note: 'Der Zahn ist empfindlich auf Kälte.' },
        { gender: 'die', word: 'Schwellung', meaning: 'swelling', plural: 'Schwellungen' },
        { gender: 'verb', word: 'entzündet sein', meaning: 'to be inflamed' },
      ],
    },
    {
      label: 'B2 · Kosten & Kasse',
      items: [
        { gender: 'der', word: 'Heil- und Kostenplan', meaning: 'treatment & cost plan (for the insurer)' },
        { gender: 'der', word: 'Eigenanteil', meaning: 'patient contribution / out-of-pocket share' },
        { gender: 'die', word: 'Krone', meaning: 'crown', plural: 'Kronen' },
        { gender: 'das', word: 'Implantat', meaning: 'implant', plural: 'Implantate' },
        { gender: 'der', word: 'Kostenvoranschlag', meaning: 'cost estimate', plural: 'Kostenvoranschläge' },
        { gender: 'verb', word: 'übernehmen', meaning: 'to cover (costs)', note: 'Was übernimmt die Kasse?' },
        { gender: 'die', word: 'Zahnzusatzversicherung', meaning: 'supplementary dental insurance' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Book an appointment and say a tooth hurts.',
      example: 'Ich habe Zahnschmerzen. Ich brauche einen Termin.',
    },
    {
      level: 'A2',
      canDo: 'Say which tooth hurts and understand the basic treatment.',
      example: 'Der Zahn hinten oben tut weh.',
    },
    {
      level: 'B1',
      canDo: 'Describe symptoms precisely and ask what the treatment involves.',
      example: 'Der Zahn ist empfindlich auf Kälte — muss er gezogen werden?',
    },
    {
      level: 'B2',
      canDo: 'Discuss the cost plan, your Eigenanteil, and what the Kasse covers.',
      example: 'Wie hoch ist mein Eigenanteil bei einer Krone?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can book a dental appointment and say a tooth hurts.', achieved: true },
    { level: 'A2', text: 'I can point to the right tooth and follow the basic treatment.', achieved: true },
    { level: 'B1', text: 'I can describe the symptom precisely and ask about the procedure.', achieved: false },
    { level: 'B2', text: 'I can understand the Heil- und Kostenplan and my Eigenanteil.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'Zahnschmerzen.', role: 'mittelfeld' },
          ],
          caption: 'haben + Zahnschmerzen — the sentence that gets you the appointment.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Getting an appointment',
          phrases: [
            'Ich habe Zahnschmerzen.',
            'Ich brauche einen Termin.',
            'Es ist dringend.',
            'Der Zahn tut sehr weh.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Anruf in der Praxis',
        level: 'A1',
        lines: [
          { speaker: 'Sprechstundenhilfe', speakerGender: 'die',
            de: 'Zahnarztpraxis Dr. Lang, guten Tag.',
            en: 'Dr. Lang’s dental practice, good day.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Guten Tag. Ich habe starke Zahnschmerzen. Ich brauche einen Termin.',
            en: 'Good day. I have bad toothache. I need an appointment.' },
          { speaker: 'Sprechstundenhilfe', speakerGender: 'die',
            de: 'Können Sie heute um 14 Uhr kommen?',
            en: 'Can you come today at 2 pm?' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Ja, sehr gern. Danke!',
            en: 'Yes, gladly. Thank you!' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Zahnarzttermin',
        parts: [
          { label: 'Notiz',
            de: 'Zahnarzt Dr. Lang: heute 14 Uhr. Mitbringen: Versichertenkarte. Zahn hinten links!',
            en: 'Dentist Dr. Lang: today 2 pm. Bring: insurance card. Tooth back left!' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Der Zahn', role: 'pos1' },
            { text: 'tut', role: 'verb', highlight: true },
            { text: 'hinten oben', role: 'mittelfeld' },
            { text: 'weh.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'weh tun is separable — the position words (hinten/oben/links) go in the middle.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Locating the pain',
          phrases: [
            'Der Schmerz ist hier — hinten oben rechts.',
            'Es tut weh, wenn ich etwas Kaltes trinke.',
            'Der Zahn ist seit drei Tagen empfindlich.',
            'Muss der Zahn gebohrt werden?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Im Behandlungsstuhl',
        level: 'A2',
        lines: [
          { speaker: 'Zahnärztin', speakerGender: 'die',
            de: 'Machen Sie bitte den Mund auf. Wo genau tut es weh?',
            en: 'Please open your mouth. Where exactly does it hurt?' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Hier hinten oben. Besonders bei kaltem Wasser.',
            en: 'Here at the back on top. Especially with cold water.' },
          { speaker: 'Zahnärztin', speakerGender: 'die',
            de: 'Ich sehe ein kleines Loch. Wir machen eine Füllung — mit Betäubung.',
            en: 'I see a small cavity. We’ll do a filling — with anaesthetic.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Tut die Spritze weh?',
            en: 'Does the injection hurt?' },
          { speaker: 'Zahnärztin', speakerGender: 'die',
            de: 'Nur ganz kurz. Danach merken Sie nichts mehr.',
            en: 'Only very briefly. After that you won’t feel anything.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi Lena, ich kann heute Abend leider nicht — ich muss zum Zahnarzt, ich habe seit gestern Zahnschmerzen. Verschieben wir auf morgen? LG, Anna',
            en: 'Hi Lena, I can’t make tonight unfortunately — I have to go to the dentist, I’ve had toothache since yesterday. Shall we move it to tomorrow? Best, Anna' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Der Zahn', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'empfindlich auf Kälte', role: 'mittelfeld' },
            { text: 'geworden.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'werden in the Perfekt — describing a change: it has become sensitive.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Describing the problem in detail',
          phrases: [
            'Das Zahnfleisch ist entzündet und blutet.',
            'Ich habe eine Schwellung an der Wange.',
            'Der Schmerz ist pochend und kommt in Wellen.',
            'Muss der Zahn gezogen werden, oder geht eine Wurzelbehandlung?',
            'Wann sollte ich zur nächsten Kontrolle kommen?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Die Diagnose',
        level: 'B1',
        lines: [
          { speaker: 'Zahnarzt', speakerGender: 'der',
            de: 'Der Zahn ist tief entzündet. Eine normale Füllung reicht leider nicht mehr.',
            en: 'The tooth is deeply inflamed. A normal filling unfortunately isn’t enough anymore.' },
          { speaker: 'Patientin', speakerGender: 'die',
            de: 'Heißt das, der Zahn muss gezogen werden?',
            en: 'Does that mean the tooth has to be pulled?' },
          { speaker: 'Zahnarzt', speakerGender: 'der',
            de: 'Nicht unbedingt. Wir können eine Wurzelbehandlung versuchen und den Zahn erhalten.',
            en: 'Not necessarily. We can try a root canal and save the tooth.' },
          { speaker: 'Patientin', speakerGender: 'die',
            de: 'Das wäre mir lieber. Wie viele Termine brauche ich dafür?',
            en: 'I’d prefer that. How many appointments do I need for it?' },
          { speaker: 'Zahnarzt', speakerGender: 'der',
            de: 'Meistens zwei. Heute reinige ich die Wurzel, beim nächsten Mal wird sie gefüllt.',
            en: 'Usually two. Today I clean the root, next time it gets filled.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Termin anfragen',
        to: 'praxis@zahnarzt-lang.de',
        subject: 'Terminanfrage — Schmerzen und lockere Füllung',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrtes Praxisteam,', en: 'Dear practice team,' },
          { label: 'Anliegen',
            de: 'seit zwei Tagen habe ich Schmerzen an einem hinteren Backenzahn, und eine alte Füllung fühlt sich locker an.',
            en: 'for two days I’ve had pain in a back molar, and an old filling feels loose.' },
          { label: 'Bitte',
            de: 'Könnten Sie mir kurzfristig einen Termin anbieten? Vormittags bin ich flexibel.',
            en: 'Could you offer me an appointment at short notice? I’m flexible in the mornings.',
            highlight: 'kurzfristig einen Termin' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'How long and what kind of pain',
          'Any concrete detail (loose filling)',
          'Offer flexibility for a quicker slot',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wie hoch', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'mein Eigenanteil', role: 'mittelfeld' },
            { text: 'bei einer Krone?', role: 'satzende' },
          ],
          caption: 'Asking about cost — Eigenanteil is the word that matters at the German dentist.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Costs and coverage',
          phrases: [
            'Können Sie mir einen Heil- und Kostenplan erstellen?',
            'Was übernimmt die gesetzliche Kasse, und was zahle ich selbst?',
            'Gibt es eine günstigere Alternative zum Implantat?',
            'Ich möchte den Kostenvoranschlag erst mit meiner Zusatzversicherung klären.',
            'Rechnet sich die professionelle Zahnreinigung für mich?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Kosten besprechen',
        level: 'B2',
        lines: [
          { speaker: 'Zahnärztin', speakerGender: 'die',
            de: 'Der Zahn lässt sich nicht mehr erhalten. Ich würde ein Implantat empfehlen.',
            en: 'The tooth can’t be saved anymore. I’d recommend an implant.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Das klingt teuer. Wie hoch wäre mein Eigenanteil ungefähr?',
            en: 'That sounds expensive. Roughly how high would my out-of-pocket share be?' },
          { speaker: 'Zahnärztin', speakerGender: 'die',
            de: 'Bei einem Implantat trägt die Kasse nur wenig — Sie müssten mit etwa 1.800 Euro rechnen.',
            en: 'For an implant the insurer covers only a little — you’d have to reckon with about 1,800 euros.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Gibt es eine Alternative, die die Kasse besser bezuschusst?',
            en: 'Is there an alternative that the insurer subsidises better?' },
          { speaker: 'Zahnärztin', speakerGender: 'die',
            de: 'Eine Brücke. Ich erstelle Ihnen für beide einen Heil- und Kostenplan, dann können Sie vergleichen.',
            en: 'A bridge. I’ll draw up a treatment-and-cost plan for both, then you can compare.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · an die Krankenkasse',
        to: 'service@meine-krankenkasse.de',
        subject: 'Frage zur Kostenübernahme — Heil- und Kostenplan im Anhang',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'mein Zahnarzt hat mir einen Heil- und Kostenplan für eine Krone erstellt, den ich Ihnen im Anhang zusenden.',
            en: 'my dentist has drawn up a treatment-and-cost plan for a crown, which I am sending you attached.' },
          { label: 'Frage',
            de: 'Könnten Sie mir mitteilen, welchen Festzuschuss Sie übernehmen und wie hoch mein Eigenanteil voraussichtlich ausfällt?',
            en: 'Could you tell me what fixed subsidy you cover and how high my out-of-pocket share is likely to be?',
            highlight: 'welchen Festzuschuss Sie übernehmen' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Reference the Heil- und Kostenplan and attach it',
          'Ask the two precise numbers: Festzuschuss and Eigenanteil',
          'Do this BEFORE treatment — approval must come first',
        ],
      },
      challenge:
        'At your next Kontrolle, ask the dentist one question about cost in German — ' +
        '„Was übernimmt die Kasse davon?“ — and follow the answer without switching to English.',
    },
  },

  foundationLinks: [
    { label: 'Passive (muss gezogen werden)', foundationSlug: 'passive' },
    { label: 'Modal verbs (muss / soll)', foundationSlug: 'modal-verbs' },
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'verbklammer' },
  ],

  hero: {
    src: '/images/dentist-zahnarzt.png',
    caption: 'Beim Zahnarzt — „Aua!“ and everything after it.',
    alt: 'A goblin in the dentist’s chair while the dentist examines a tooth',
  },
};
