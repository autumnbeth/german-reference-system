import type { Situation } from '../../content/schema';

const apotheke: Situation = {
  slug: 'apotheke',
  theme: 'Health',
  subtheme: 'Apotheke',
  category: 'Survival & daily life',
  title: 'Apotheke',
  intro:
    'Asking for help at a German pharmacy: describing symptoms, requesting ' +
    'medicine, understanding instructions, and asking follow-up questions.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can go to a German pharmacy, explain what I need, understand basic ' +
    'advice, and ask follow-up questions without looking up every word first.',

  vocab: [
    {
      label: 'Symptome · Symptoms',
      items: [
        { gender: 'der', word: 'Husten', meaning: 'cough' },
        { gender: 'die', word: 'Halsschmerzen', meaning: 'sore throat' },
        { gender: 'das', word: 'Fieber', meaning: 'fever' },
        { gender: 'die', word: 'Erkältung', meaning: 'cold' },
      ],
    },
    {
      label: 'Darreichungsform · Medicine forms',
      items: [
        { gender: 'pl',  word: 'Tabletten', meaning: 'tablets' },
        { gender: 'der', word: 'Saft', meaning: 'syrup' },
        { gender: 'das', word: 'Spray', meaning: 'spray' },
        { gender: 'die', word: 'Salbe', meaning: 'ointment' },
      ],
    },
  ],

  progression: [
    { level: 'A1', canDo: 'Ask for help and name one basic symptom.',
      example: 'Ich habe Husten.' },
    { level: 'A2', canDo: 'Describe symptoms, duration, and ask for something.',
      example: 'Ich habe seit gestern Halsschmerzen.' },
    { level: 'B1', canDo: 'Explain what happened and ask how to take medicine.',
      example: 'Wie oft soll ich das nehmen?' },
    { level: 'B2', canDo: 'Compare options and explain constraints.',
      example: 'Ich suche etwas, das nicht müde macht.' },
  ],

  milestones: [
    { level: 'A1', text: 'I can ask for help and name one basic symptom.', achieved: true },
    { level: 'A2', text: 'I can ask for something and say how long I’ve had it.', achieved: true },
    { level: 'B1', text: 'I can explain what I tried and ask how to take medicine.', achieved: false },
  ],

  byLevel: {
    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'etwas gegen Husten', role: 'mittelfeld' },
            { text: 'kaufen.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'A polite request uses a modal verb — the two verb parts bracket the sentence.',
        },
      ],
      dialogue: {
        title: 'Dialog · in der Apotheke',
        level: 'A2',
        lines: [
          { speaker: 'Apothekerin', speakerGender: 'die',
            de: 'Guten Tag. Wie kann ich Ihnen helfen?',
            en: 'Good day. How can I help you?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Guten Tag. Ich habe Halsschmerzen.',
            en: 'Good day. I have a sore throat.' },
          { speaker: 'Apothekerin', speakerGender: 'die',
            de: 'Seit wann haben Sie die Schmerzen?',
            en: 'Since when have you had the pain?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Seit gestern Abend. Ich habe auch etwas Husten.',
            en: 'Since yesterday evening. I also have a bit of a cough.' },
        ],
      },
      phrases: [
        { levels: ['A1', 'A2'], funktion: 'Asking for help',
          phrases: ['Können Sie mir helfen?', 'Ich brauche etwas gegen …', 'Haben Sie etwas gegen …?'] },
      ],
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hallo Lisa, ich kann heute leider nicht kommen, weil ich krank bin. Können wir auf morgen verschieben? LG, Anna',
            en: "Hi Lisa, unfortunately I can’t come today because I’m sick. Can we move it to tomorrow? Take care, Anna" },
        ],
      },
      challenge:
        'Ask one prepared question in a real Apotheke — explain a symptom, say how ' +
        'long you’ve had it, and confirm the instructions without reading from a script.',
    },

    B1: {
      phrases: [
        { levels: ['B1'], funktion: 'Understanding advice',
          phrases: ['Wie oft soll ich das nehmen?', 'Muss ich das vor oder nach dem Essen nehmen?', 'Ist das auch für Kinder?'] },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · formell',
        to: 'praxis@hausarzt-berlin.de',
        subject: 'Terminanfrage',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'ich möchte gern einen Termin vereinbaren, weil ich seit einigen Tagen Halsschmerzen habe.',
            en: 'I would like to arrange an appointment, because I have had a sore throat for a few days.',
            highlight: 'weil ich seit einigen Tagen Halsschmerzen habe' },
          { label: 'Bitte',
            de: 'Könnten Sie mir bitte einen Termin in dieser Woche anbieten?',
            en: 'Could you please offer me an appointment this week?',
            highlight: 'Könnten Sie mir bitte' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Formal greeting & closing',
          'States a reason (weil…)',
          'Polite request (Könnten Sie…)',
          'One clear piece of key info',
        ],
      },
    },
  },

  foundationLinks: [
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'satzbau' },
    { label: 'Modal verbs', foundationSlug: 'modal-verbs' },
    { label: 'weil → verb to the end', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'In der Apotheke — asking for help at the counter.',
    alt: 'A pharmacy counter, wide shot',
  },
};

export default apotheke;
