import type { Situation } from '../../content/schema';

export const arzttermin: Situation = {
  slug: 'arzttermin',
  theme: 'Health',
  subtheme: 'Arzttermin',
  category: 'Survival & daily life',
  title: 'Arzttermin',
  intro:
    'Scheduling and attending a doctor\'s appointment in Germany: describing symptoms, ' +
    'explaining how long you\'ve had them, understanding medical advice, and asking ' +
    'for clarification when you don\'t understand the instructions.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can go to a German doctor\'s appointment, describe my symptoms and how long ' +
    'I\'ve had them, understand basic instructions, and ask follow-up questions ' +
    'without panicking when I don\'t understand something.',

  vocab: [
    {
      label: 'A1 · Menschen, Orte & Symptome',
      items: [
        { gender: 'der', word: 'Arzt', meaning: 'doctor (male)', plural: 'Ärzte' },
        { gender: 'die', word: 'Ärztin', meaning: 'doctor (female)', plural: 'Ärztinnen' },
        { gender: 'der', word: 'Patient', meaning: 'patient (male)', plural: 'Patienten' },
        { gender: 'die', word: 'Patientin', meaning: 'patient (female)', plural: 'Patientinnen' },
        { gender: 'die', word: 'Krankenschwester', meaning: 'nurse', plural: 'Krankenschwestern' },
        { gender: 'der', word: 'Zahnarzt', meaning: 'dentist (male)', plural: 'Zahnärzte' },
        { gender: 'die', word: 'Praxis', meaning: 'doctor\'s office / practice', plural: 'Praxen' },
        { gender: 'das', word: 'Krankenhaus', meaning: 'hospital', plural: 'Krankenhäuser' },
        { gender: 'die', word: 'Apotheke', meaning: 'pharmacy', plural: 'Apotheken' },
        { gender: 'die', word: 'Schmerzen', meaning: 'pain / ache', plural: 'Schmerzen' },
        { gender: 'das', word: 'Fieber', meaning: 'fever' },
        { gender: 'der', word: 'Husten', meaning: 'cough' },
        { gender: 'der', word: 'Schnupfen', meaning: 'runny nose' },
        { gender: 'die', word: 'Kopfschmerzen', meaning: 'headache' },
        { gender: 'die', word: 'Bauchschmerzen', meaning: 'stomach ache' },
        { gender: 'die', word: 'Zahnschmerzen', meaning: 'toothache' },
        { gender: 'verb', word: 'krank sein', meaning: 'to be sick' },
        { gender: 'verb', word: 'zum Arzt gehen', meaning: 'to go to the doctor' },
        { gender: 'verb', word: 'Medikamente nehmen', meaning: 'to take medicine' },
        { gender: 'verb', word: 'warten', meaning: 'to wait' },
      ],
    },
    {
      label: 'A2 · Symptome & Termine',
      items: [
        { gender: 'die', word: 'Halsschmerzen', meaning: 'sore throat' },
        { gender: 'die', word: 'Rückenschmerzen', meaning: 'back pain' },
        { gender: 'die', word: 'Übelkeit', meaning: 'nausea' },
        { gender: 'der', word: 'Schwindel', meaning: 'dizziness' },
        { gender: 'der', word: 'Durchfall', meaning: 'diarrhea' },
        { gender: 'das', word: 'Erbrechen', meaning: 'vomiting' },
        { gender: 'die', word: 'Erkältung', meaning: 'cold', plural: 'Erkältungen' },
        { gender: 'das', word: 'Wartezimmer', meaning: 'waiting room', plural: 'Wartezimmer' },
        { gender: 'die', word: 'Untersuchung', meaning: 'examination', plural: 'Untersuchungen' },
        { gender: 'das', word: 'Rezept', meaning: 'prescription', plural: 'Rezepte' },
        { gender: 'die', word: 'Tablette', meaning: 'tablet / pill', plural: 'Tabletten' },
        { gender: 'die', word: 'Salbe', meaning: 'ointment / cream', plural: 'Salben' },
        { gender: 'die', word: 'Impfung', meaning: 'vaccination', plural: 'Impfungen' },
        { gender: 'verb', word: 'untersuchen', meaning: 'to examine' },
        { gender: 'verb', word: 'verschreiben', meaning: 'to prescribe' },
        { gender: 'verb', word: 'sich ausruhen', meaning: 'to rest' },
        { gender: 'verb', word: 'gesund werden', meaning: 'to get better / recover' },
      ],
    },
    {
      label: 'B1 · Arztbesuche',
      items: [
        { gender: 'die', word: 'Krankschreibung', meaning: 'sick note / medical certificate', plural: 'Krankschreibungen' },
        { gender: 'die', word: 'Überweisung', meaning: 'referral to specialist', plural: 'Überweisungen' },
        { gender: 'der', word: 'Facharzt', meaning: 'specialist doctor', plural: 'Fachärzte' },
        { gender: 'die', word: 'Sprechstunde', meaning: 'office hours / consultation hour', plural: 'Sprechstunden' },
        { gender: 'die', word: 'Atembeschwerden', meaning: 'breathing difficulties' },
        { gender: 'das', word: 'Gelenk', meaning: 'joint', plural: 'Gelenke' },
        { gender: 'die', word: 'Schulter', meaning: 'shoulder', plural: 'Schultern' },
        { gender: 'der', word: 'Nacken', meaning: 'neck (back)' },
        { gender: 'die', word: 'Lunge', meaning: 'lung', plural: 'Lungen' },
        { gender: 'das', word: 'Herz', meaning: 'heart', plural: 'Herzen' },
        { gender: 'verb', word: 'Blut abnehmen', meaning: 'to draw blood' },
        { gender: 'verb', word: 'Diagnose stellen', meaning: 'to make a diagnosis' },
        { gender: 'verb', word: 'behandelt werden', meaning: 'to be treated' },
        { gender: 'verb', word: 'operiert werden', meaning: 'to be operated on' },
      ],
    },
    {
      label: 'B2 · Fortgeschrittene',
      items: [
        { gender: 'die', word: 'Entzündung', meaning: 'inflammation / infection', plural: 'Entzündungen' },
        { gender: 'die', word: 'Infektion', meaning: 'infection', plural: 'Infektionen' },
        { gender: 'die', word: 'Verletzung', meaning: 'injury', plural: 'Verletzungen' },
        { gender: 'die', word: 'chronische Krankheit', meaning: 'chronic illness', plural: 'chronische Krankheiten' },
        { gender: 'die', word: 'Nebenwirkung', meaning: 'side effect', plural: 'Nebenwirkungen' },
        { gender: 'die', word: 'Blutuntersuchung', meaning: 'blood test', plural: 'Blutuntersuchungen' },
        { gender: 'die', word: 'Röntgenaufnahme', meaning: 'X-ray', plural: 'Röntgenaufnahmen' },
        { gender: 'die', word: 'Physiotherapie', meaning: 'physiotherapy' },
        { gender: 'die', word: 'Operation', meaning: 'surgery / operation', plural: 'Operationen' },
        { gender: 'die', word: 'Behandlung', meaning: 'treatment', plural: 'Behandlungen' },
        { gender: 'verb', word: 'diagnostizieren', meaning: 'to diagnose' },
        { gender: 'verb', word: 'behandeln', meaning: 'to treat' },
        { gender: 'verb', word: 'heilen', meaning: 'to heal / cure' },
        { gender: 'verb', word: 'vorbeugen', meaning: 'to prevent' },
      ],
    },
    {
      label: 'C1 · Fachvokabular',
      items: [
        { gender: 'die', word: 'Vorerkrankung', meaning: 'pre-existing condition', plural: 'Vorerkrankungen' },
        { gender: 'die', word: 'Krankengeschichte', meaning: 'medical history', plural: 'Krankengeschichten' },
        { gender: 'die', word: 'Stoffwechselstörung', meaning: 'metabolic disorder', plural: 'Stoffwechselstörungen' },
        { gender: 'die', word: 'Autoimmunerkrankung', meaning: 'autoimmune disease', plural: 'Autoimmunerkrankungen' },
        { gender: 'die', word: 'psychische Belastung', meaning: 'psychological stress', plural: 'psychische Belastungen' },
        { gender: 'die', word: 'Krankenversicherung', meaning: 'health insurance', plural: 'Krankenversicherungen' },
        { gender: 'die', word: 'Rehabilitation', meaning: 'rehabilitation' },
        { gender: 'die', word: 'Vorsorgeuntersuchung', meaning: 'preventive health check', plural: 'Vorsorgeuntersuchungen' },
        { gender: 'die', word: 'Langzeittherapie', meaning: 'long-term therapy', plural: 'Langzeittherapien' },
        { gender: 'verb', word: 'verabreichen', meaning: 'to administer (medicine)' },
        { gender: 'verb', word: 'überwachen', meaning: 'to monitor' },
        { gender: 'verb', word: 'sich verschlimmern', meaning: 'to worsen' },
        { gender: 'verb', word: 'lindern', meaning: 'to alleviate / relieve' },
        { gender: 'verb', word: 'beeinträchtigen', meaning: 'to impair / affect negatively' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Name a symptom and say where it hurts.',
      example: 'Ich habe Kopfschmerzen. Hier tut es weh.',
    },
    {
      level: 'A2',
      canDo: 'Describe symptoms, say how long you\'ve had them, and answer the doctor\'s questions.',
      example: 'Ich habe seit drei Tagen Fieber und Halsschmerzen.',
    },
    {
      level: 'B1',
      canDo: 'Explain what happened, what you\'ve tried, and ask about treatment instructions.',
      example: 'Ich bin gekommen, weil es nicht besser wird. Wie oft soll ich das nehmen?',
    },
    {
      level: 'B2',
      canDo: 'Give detailed medical history, explain constraints, and request clarification.',
      example: 'Ich habe eine Penicillin-Allergie. Gibt es eine Alternative, die nicht so stark ist?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can name a symptom and point to where it hurts.', achieved: true },
    { level: 'A2', text: 'I can describe symptoms and say how long I\'ve had them.', achieved: true },
    { level: 'B1', text: 'I can ask about medication and understand basic instructions.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich',           role: 'pos1' },
            { text: 'habe',          role: 'verb', highlight: true },
            { text: 'Kopfschmerzen.', role: 'mittelfeld' },
          ],
          caption: 'Ich habe + symptom (plural or uncountable noun) — the basic pattern for naming symptoms.',
        },
        {
          slots: [
            { text: 'Hier',   role: 'pos1' },
            { text: 'tut',    role: 'verb', highlight: true },
            { text: 'es weh.', role: 'mittelfeld' },
          ],
          caption: 'Hier tut es weh — point to the location. Works without knowing body part vocabulary.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Naming symptoms',
          phrases: [
            'Ich habe Kopfschmerzen.',
            'Ich habe Fieber.',
            'Ich habe Husten.',
            'Mir ist schlecht.',
            'Hier tut es weh.',
          ],
        },
      ],
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich',      role: 'pos1' },
            { text: 'habe',     role: 'verb', highlight: true },
            { text: 'seit drei Tagen', role: 'mittelfeld' },
            { text: 'Fieber.',  role: 'satzende' },
          ],
          caption: 'seit + time expression — use with Präsens (not past tense) to say how long you\'ve had something.',
        },
        {
          slots: [
            { text: 'Ich',      role: 'pos1' },
            { text: 'möchte',   role: 'verb', highlight: true },
            { text: 'einen Termin', role: 'mittelfeld' },
            { text: 'vereinbaren.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Booking an appointment: möchte (P2) · vereinbaren (END).',
        },
      ],
      dialogue: {
        title: 'Dialog · beim Arzt',
        level: 'A2',
        lines: [
          { speaker: 'Arzthelferin', speakerGender: 'die',
            de: 'Guten Morgen. Was kann ich für Sie tun?',
            en: 'Good morning. What can I do for you?' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Guten Morgen. Ich habe einen Termin. Mein Name ist Müller.',
            en: 'Good morning. I have an appointment. My name is Müller.' },
          { speaker: 'Ärztin', speakerGender: 'die',
            de: 'Herr Müller, was fehlt Ihnen denn?',
            en: 'Mr Müller, what seems to be the problem?' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Ich habe seit drei Tagen Halsschmerzen und Fieber.',
            en: 'I\'ve had a sore throat and fever for three days.' },
          { speaker: 'Ärztin', speakerGender: 'die',
            de: 'Haben Sie auch Husten?',
            en: 'Do you also have a cough?' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Ja, ein bisschen.',
            en: 'Yes, a little.' },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Describing duration',
          phrases: [
            'Ich habe seit gestern Kopfschmerzen.',
            'Das ist schon seit einer Woche so.',
            'Es hat vor drei Tagen angefangen.',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Booking an appointment',
          phrases: [
            'Ich möchte einen Termin vereinbaren.',
            'Ich brauche einen Termin so bald wie möglich.',
            'Haben Sie einen Termin diese Woche?',
          ],
        },
      ],
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich bin gekommen,', role: 'pos1' },
            { text: 'weil',              role: 'verb', highlight: true },
            { text: 'es nicht besser',   role: 'mittelfeld' },
            { text: 'wird.',             role: 'verb-end', highlight: true },
          ],
          caption: 'weil → verb to the end. Explains the reason for the visit.',
        },
        {
          slots: [
            { text: 'Wie oft',  role: 'pos1' },
            { text: 'soll',     role: 'verb', highlight: true },
            { text: 'ich das',  role: 'mittelfeld' },
            { text: 'nehmen?',  role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Asking about medication: soll (P2) · nehmen (END).',
        },
      ],
      dialogue: {
        title: 'Dialog · Medikamente verstehen',
        level: 'B1',
        lines: [
          { speaker: 'Ärztin', speakerGender: 'die',
            de: 'Ich verschreibe Ihnen Antibiotika.',
            en: 'I\'m prescribing you antibiotics.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Wie oft soll ich die nehmen?',
            en: 'How often should I take them?' },
          { speaker: 'Ärztin', speakerGender: 'die',
            de: 'Dreimal täglich, nach dem Essen. Und bitte die ganze Packung aufbrauchen.',
            en: 'Three times a day, after meals. And please finish the whole pack.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Entschuldigung, ich habe das nicht ganz verstanden. Können Sie das bitte wiederholen?',
            en: 'Sorry, I didn\'t quite understand that. Could you please repeat it?' },
          { speaker: 'Ärztin', speakerGender: 'die',
            de: 'Natürlich. Dreimal am Tag — morgens, mittags, abends — immer nach dem Essen.',
            en: 'Of course. Three times a day — morning, noon, evening — always after eating.' },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Asking about treatment',
          phrases: [
            'Wie oft soll ich das nehmen?',
            'Muss ich das vor oder nach dem Essen nehmen?',
            'Wie lange soll ich das nehmen?',
            'Gibt es Nebenwirkungen?',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Asking for clarification',
          phrases: [
            'Entschuldigung, ich habe das nicht verstanden.',
            'Können Sie das bitte wiederholen?',
            'Können Sie das bitte aufschreiben?',
            'Was bedeutet das auf Englisch?',
          ],
        },
      ],
      writing: {
        kind: 'note',
        level: 'B1',
        title: 'Vorbereitung · vor dem Termin',
        parts: [
          { label: 'Symptome',
            de: 'Ich habe seit fünf Tagen Halsschmerzen und Fieber (38,5°C).',
            en: 'I have had a sore throat and fever (38.5°C) for five days.' },
          { label: 'Verlauf',
            de: 'Es wird nicht besser, obwohl ich viel geschlafen und Tee getrunken habe.',
            en: 'It is not getting better, even though I\'ve slept a lot and drunk tea.',
            highlight: 'obwohl ich viel geschlafen und Tee getrunken habe' },
          { label: 'Fragen',
            de: 'Brauche ich Antibiotika? Darf ich arbeiten gehen?',
            en: 'Do I need antibiotics? Am I allowed to go to work?' },
        ],
        checklist: [
          'Date symptoms started',
          'Temperature readings if taken',
          'What you\'ve already tried',
          'Current medications and allergies',
          'Your questions written down in advance',
        ],
      },
      challenge:
        'Prepare a one-minute symptom description in German before your next real or imaginary doctor\'s visit — ' +
        'symptoms, duration, what you\'ve tried, and one question about treatment. Say it aloud without reading.',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich habe',         role: 'pos1' },
            { text: 'eine Penicillin-Allergie,', role: 'mittelfeld' },
            { text: '',                  role: 'satzende' },
          ],
          caption: 'State a known allergy or constraint clearly before the doctor prescribes anything.',
        },
        {
          slots: [
            { text: 'Gibt es',       role: 'pos1' },
            { text: 'eine Alternative,', role: 'mittelfeld' },
            { text: 'die weniger Nebenwirkungen', role: 'mittelfeld' },
            { text: 'hat?',          role: 'satzende' },
          ],
          caption: 'Relative clause with die — asking about alternatives with fewer side effects.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Medical history and constraints',
          phrases: [
            'Ich habe eine Allergie gegen Penicillin.',
            'Ich nehme zurzeit folgende Medikamente: …',
            'Ich bin in der Vergangenheit operiert worden.',
            'Ich bin schwanger / stille.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Comparing options and negotiating',
          phrases: [
            'Gibt es eine Alternative, die nicht so stark ist?',
            'Ich würde lieber ohne Antibiotika auskommen, wenn möglich.',
            'Welche Nebenwirkungen kann ich erwarten?',
            'Wann sollte ich wiederkommen, wenn es nicht besser wird?',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Termin verschieben',
        to: 'praxis@dr-schmidt-berlin.de',
        subject: 'Terminverschiebung — Müller, 15. Juli 10:00 Uhr',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,' },
          { label: 'Anliegen',
            de: 'leider muss ich meinen Termin am 15. Juli um 10:00 Uhr absagen, da ich beruflich verhindert bin.',
            en: 'unfortunately I must cancel my appointment on 15 July at 10:00, as I have a work commitment.',
            highlight: 'da ich beruflich verhindert bin' },
          { label: 'Bitte',
            de: 'Könnten Sie mir bitte einen neuen Termin in der darauffolgenden Woche anbieten?',
            en: 'Could you please offer me a new appointment in the following week?',
            highlight: 'Könnten Sie mir bitte' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nThomas Müller' },
        ],
        checklist: [
          'Reference the original date and time in the subject line',
          'Give a reason (da / weil clause)',
          'Polite request for rescheduling (Könnten Sie…)',
          'Formal greeting and closing',
        ],
      },
    },
  },

  foundationLinks: [
    { label: 'seit + Präsens (duration)', foundationSlug: 'satzbau' },
    { label: 'Modal verbs (soll, muss, darf)', foundationSlug: 'modal-verbs' },
    { label: 'weil → verb to the end', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'Beim Arzt — describing symptoms and understanding advice.',
    alt: 'A doctor\'s consultation room, warm lighting',
  },
};
