import type { Situation } from '../../content/schema';

export const notfall: Situation = {
  slug: 'notfall',
  theme: 'Emergency',
  category: 'Safety & emergencies',
  title: 'Notfall',
  intro:
    'Communicating in an emergency in Germany: calling for help, giving your location, ' +
    'describing what happened, and following dispatcher instructions. ' +
    'Emergency language must be short, clear, and calm — the priority is getting help, not perfect grammar.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can call 112 in Germany, say what the emergency is, give my location clearly, ' +
    'and describe what has happened — even under stress and even if my German is not perfect.',

  vocab: [
    {
      label: 'Hilfsdienste · Emergency Services',
      items: [
        { gender: 'die', word: 'Feuerwehr', meaning: 'fire brigade (112)' },
        { gender: 'die', word: 'Polizei', meaning: 'police (110)' },
        { gender: 'der', word: 'Krankenwagen', meaning: 'ambulance' },
        { gender: 'der', word: 'Notarzt', meaning: 'emergency doctor' },
        { gender: 'die', word: 'Notrufnummer', meaning: 'emergency number' },
      ],
    },
    {
      label: 'Ortsangaben · Giving Location',
      items: [
        { gender: 'die', word: 'Straße', meaning: 'street' },
        { gender: 'die', word: 'Kreuzung', meaning: 'intersection / junction' },
        { gender: 'der', word: 'Bahnhof', meaning: 'train station' },
        { gender: 'der', word: 'Eingang', meaning: 'entrance' },
        { gender: 'die', word: 'Hausnummer', meaning: 'house number' },
        { gender: 'das', word: 'Stockwerk', meaning: 'floor / storey' },
      ],
    },
    {
      label: 'Verletzungen & Gefahren · Injuries & Dangers',
      items: [
        { gender: 'die', word: 'Verletzung', meaning: 'injury' },
        { gender: 'der', word: 'Unfall', meaning: 'accident' },
        { gender: 'das', word: 'Feuer', meaning: 'fire' },
        { gender: 'die', word: 'Bewusstlosigkeit', meaning: 'unconsciousness' },
        { gender: 'die', word: 'Atmung', meaning: 'breathing' },
        { gender: 'die', word: 'Blutung', meaning: 'bleeding' },
        { gender: 'der', word: 'Herzinfarkt', meaning: 'heart attack' },
        { gender: 'der', word: 'Sturz', meaning: 'fall' },
      ],
    },
    {
      label: 'Anweisungen · Instructions',
      items: [
        { gender: 'die', word: 'stabile Seitenlage', meaning: 'recovery position' },
        { gender: 'die', word: 'Herzmassage', meaning: 'chest compressions / CPR' },
        { gender: 'der', word: 'Verband', meaning: 'bandage' },
        { gender: 'die', word: 'Wunde', meaning: 'wound' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Call for help and give your location.',
      example: 'Hilfe! Ich bin in der Bahnhofstraße 12. Es ist ein Unfall.',
    },
    {
      level: 'A2',
      canDo: 'Describe what happened and the condition of the injured person.',
      example: 'Eine Frau ist gestürzt. Sie ist bewusstlos. Bitte kommen Sie schnell!',
    },
    {
      level: 'B1',
      canDo: 'Give precise details, answer the dispatcher\'s questions, and follow instructions.',
      example: 'Er atmet nicht. Ich habe schon mit der Herzmassage angefangen.',
    },
    {
      level: 'B2',
      canDo: 'Give a full account of the situation including vital signs and history.',
      example: 'Die Person ist bewusstlos, atmet aber noch. Der Puls ist schwach und unregelmäßig.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can shout for help and say where I am.', achieved: true },
    { level: 'A2', text: 'I can describe what happened and the injured person\'s condition.', achieved: true },
    { level: 'B1', text: 'I can answer a dispatcher\'s questions and follow instructions.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Hilfe!',   role: 'pos1' },
            { text: 'Ich',      role: 'mittelfeld' },
            { text: 'bin',      role: 'verb', highlight: true },
            { text: 'in der Bahnhofstraße.', role: 'satzende' },
          ],
          caption: 'Lead with Hilfe! — then your location. Grammar is secondary.',
        },
        {
          slots: [
            { text: 'Es',    role: 'pos1' },
            { text: 'ist',   role: 'verb', highlight: true },
            { text: 'ein Unfall / ein Feuer / ein Notfall.', role: 'mittelfeld' },
          ],
          caption: 'Es ist + what happened — three words the dispatcher needs immediately.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Calling for help',
          phrases: [
            'Hilfe!',
            'Ich brauche einen Krankenwagen!',
            'Bitte kommen Sie schnell!',
            'Es ist ein Notfall.',
          ],
        },
        {
          levels: ['A1'],
          funktion: 'Giving location',
          phrases: [
            'Ich bin in der [Straße] Nummer [Zahl].',
            'Ich bin am Bahnhof.',
            'Ich bin in der Nähe von …',
          ],
        },
      ],
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Eine Frau', role: 'pos1' },
            { text: 'ist',       role: 'verb', highlight: true },
            { text: '',          role: 'mittelfeld' },
            { text: 'gestürzt.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Perfekt to describe what just happened: ist (P2) · gestürzt (END).',
        },
        {
          slots: [
            { text: 'Sie',          role: 'pos1' },
            { text: 'ist',          role: 'verb', highlight: true },
            { text: 'bewusstlos.',  role: 'mittelfeld' },
          ],
          caption: 'Current condition: sein + adjective.',
        },
      ],
      dialogue: {
        title: 'Dialog · Sturz melden',
        level: 'A2',
        lines: [
          { speaker: 'Leitstellle', speakerGender: 'die',
            de: 'Notruf, was ist passiert?',
            en: 'Emergency services, what has happened?' },
          { speaker: 'Anrufer', speakerGender: 'der',
            de: 'Hilfe! Eine ältere Frau ist auf dem Gehweg gestürzt. Sie ist bewusstlos!',
            en: 'Help! An elderly woman has fallen on the pavement. She is unconscious!' },
          { speaker: 'Leitstellle', speakerGender: 'die',
            de: 'Wo sind Sie genau?',
            en: 'Where are you exactly?' },
          { speaker: 'Anrufer', speakerGender: 'der',
            de: 'Ich bin in der Goethestraße 7, in der Nähe vom Supermarkt.',
            en: 'I am at Goethestraße 7, near the supermarket.' },
          { speaker: 'Leitstellle', speakerGender: 'die',
            de: 'Wir schicken sofort einen Krankenwagen. Bleiben Sie bei der Person.',
            en: 'We are sending an ambulance immediately. Stay with the person.' },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Describing what happened',
          phrases: [
            'Eine Person ist gestürzt.',
            'Es hat einen Unfall gegeben.',
            'Jemand ist verletzt.',
            'Es gibt eine Blutung.',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Describing condition',
          phrases: [
            'Er / Sie ist bewusstlos.',
            'Er / Sie atmet nicht.',
            'Er / Sie blutet stark.',
            'Er / Sie ist ansprechbar.',
          ],
        },
      ],
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich habe', role: 'pos1' },
            { text: 'schon mit der Herzmassage', role: 'mittelfeld' },
            { text: 'angefangen.', role: 'verb-end', highlight: true },
          ],
          caption: 'Perfekt to report what you\'ve already done — important for the dispatcher.',
        },
        {
          slots: [
            { text: 'Er',     role: 'pos1' },
            { text: 'atmet',  role: 'verb', highlight: true },
            { text: 'nicht,', role: 'mittelfeld' },
            { text: 'aber',   role: 'mittelfeld' },
            { text: 'er hat', role: 'mittelfeld' },
            { text: 'einen Puls.', role: 'satzende' },
          ],
          caption: 'Contrasting two conditions with aber.',
        },
      ],
      dialogue: {
        title: 'Dialog · Atemprobleme am Bahnhof',
        level: 'B1',
        lines: [
          { speaker: 'Leitstelle', speakerGender: 'die',
            de: 'Notruf 112, was ist passiert?',
            en: 'Emergency 112, what has happened?' },
          { speaker: 'Anruferin', speakerGender: 'die',
            de: 'Ein Mann am U-Bahnhof Mitte hat Atemnot. Er ist etwa 60 Jahre alt.',
            en: 'A man at U-Bahnhof Mitte is having breathing difficulties. He is about 60 years old.' },
          { speaker: 'Leitstelle', speakerGender: 'die',
            de: 'Ist er noch bei Bewusstsein?',
            en: 'Is he still conscious?' },
          { speaker: 'Anruferin', speakerGender: 'die',
            de: 'Ja, er ist wach, aber er kann kaum sprechen. Er hält sich die Brust.',
            en: 'Yes, he is awake, but he can barely speak. He is holding his chest.' },
          { speaker: 'Leitstelle', speakerGender: 'die',
            de: 'Gut. Lassen Sie ihn hinsetzen und lockern Sie enge Kleidung. Der Notarzt kommt.',
            en: 'Good. Have him sit down and loosen any tight clothing. The emergency doctor is coming.' },
          { speaker: 'Anruferin', speakerGender: 'die',
            de: 'Okay. Ich bleibe bei ihm und warte auf den Krankenwagen.',
            en: 'Okay. I\'ll stay with him and wait for the ambulance.' },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Reporting what you\'ve already done',
          phrases: [
            'Ich habe schon die 112 angerufen.',
            'Ich habe ihn in die stabile Seitenlage gebracht.',
            'Ich habe mit der Herzmassage angefangen.',
            'Ich halte die Wunde zusammen.',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Answering dispatcher questions',
          phrases: [
            'Er ist bei Bewusstsein / bewusstlos.',
            'Er atmet / atmet nicht.',
            'Er hat einen Puls / keinen Puls.',
            'Die Verletzung ist am Kopf / am Bein.',
          ],
        },
      ],
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Person',    role: 'pos1' },
            { text: 'ist',           role: 'verb', highlight: true },
            { text: 'bewusstlos,',   role: 'mittelfeld' },
            { text: 'atmet aber noch.', role: 'satzende' },
          ],
          caption: 'Lead with the most critical information, then add qualifications.',
        },
        {
          slots: [
            { text: 'Der Puls',   role: 'pos1' },
            { text: 'ist',        role: 'verb', highlight: true },
            { text: 'schwach und unregelmäßig.', role: 'mittelfeld' },
          ],
          caption: 'Precise vital sign description — two adjectives with und.',
        },
      ],
      dialogue: {
        title: 'Dialog · bewusstlose Person',
        level: 'B2',
        lines: [
          { speaker: 'Leitstelle', speakerGender: 'die',
            de: 'Notruf, was ist der Notfall?',
            en: 'Emergency services, what is the emergency?' },
          { speaker: 'Anrufer', speakerGender: 'der',
            de: 'Ein Mann, etwa 50 Jahre alt, ist auf der Straße plötzlich zusammengebrochen und reagiert nicht mehr.',
            en: 'A man, about 50 years old, suddenly collapsed on the street and is no longer responding.' },
          { speaker: 'Leitstelle', speakerGender: 'die',
            de: 'Atmet er noch?',
            en: 'Is he still breathing?' },
          { speaker: 'Anrufer', speakerGender: 'der',
            de: 'Nein, ich kann keine Atemgeräusche feststellen. Der Puls ist sehr schwach.',
            en: 'No, I cannot detect any breathing sounds. The pulse is very weak.' },
          { speaker: 'Leitstelle', speakerGender: 'die',
            de: 'Beginnen Sie sofort mit der Herzmassage. 30 Drücke, dann zweimal beatmen. Ich leite Sie an.',
            en: 'Start chest compressions immediately. 30 compressions, then two rescue breaths. I will guide you.' },
          { speaker: 'Anrufer', speakerGender: 'der',
            de: 'Verstanden. Ich mache es. Wann kommt der Notarzt?',
            en: 'Understood. I\'m doing it. When is the emergency doctor arriving?' },
        ],
      },
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Precise situation assessment',
          phrases: [
            'Die Person ist bewusstlos und reagiert nicht auf Ansprache.',
            'Die Atmung ist flach und unregelmäßig.',
            'Der Puls ist kaum noch tastbar.',
            'Es gibt eine stark blutende Wunde am Kopf.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Following and confirming instructions',
          phrases: [
            'Verstanden, ich beginne mit der Herzmassage.',
            'Wie viele Drücke pro Minute soll ich machen?',
            'Soll ich ihn in die stabile Seitenlage bringen?',
            'Er reagiert — ich glaube, er kommt zu sich.',
          ],
        },
      ],
      challenge:
        'Prepare your "emergency card" in German: your name, address, blood type if known, allergies, ' +
        'and one contact person. Say it aloud at normal speaking speed — in an emergency, ' +
        'you\'ll need this information quickly and without hesitation.',
    },
  },

  foundationLinks: [
    { label: 'Perfekt — what just happened', foundationSlug: 'tense-stack' },
    { label: 'Modal verbs (soll, muss, kann)', foundationSlug: 'modal-verbs' },
    { label: 'Sentence position — verb stays in P2', foundationSlug: 'satzbau' },
  ],

  hero: {
    caption: 'Notfall — calling for help and giving clear information under pressure.',
    alt: 'An emergency phone or ambulance, wide shot',
  },
};
