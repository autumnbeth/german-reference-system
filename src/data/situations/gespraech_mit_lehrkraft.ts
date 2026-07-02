import type { Situation } from '../../content/schema';

export const gespraechMitLehrkraft: Situation = {
  slug: 'gespraech-mit-lehrkraft',
  theme: 'Education',
  category: 'Family & school',
  title: 'Gespräch mit der Lehrkraft',
  intro:
    'Talking with your child\'s teacher: asking about progress, understanding feedback, ' +
    'expressing concerns, and working together to agree on next steps and support.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can talk with my child\'s teacher, ask how things are going, express concerns ' +
    'in clear German, and understand what support is available — without freezing up ' +
    'when the conversation gets detailed.',

  vocab: [
    {
      label: 'Schulleistung · School performance',
      items: [
        { gender: 'die', word: 'Note', meaning: 'grade / mark', plural: 'Noten' },
        { gender: 'der', word: 'Fortschritt', meaning: 'progress', plural: 'Fortschritte' },
        { gender: 'die', word: 'Mitarbeit', meaning: 'participation (in class)' },
        { gender: 'die', word: 'Hausaufgabe', meaning: 'homework', plural: 'Hausaufgaben' },
        { gender: 'die', word: 'Schwierigkeit', meaning: 'difficulty', plural: 'Schwierigkeiten' },
        { gender: 'das', word: 'Zeugnis', meaning: 'school report', plural: 'Zeugnisse' },
        { gender: 'die', word: 'Klassenarbeit', meaning: 'class test', plural: 'Klassenarbeiten' },
      ],
    },
    {
      label: 'Unterstützung · Support',
      items: [
        { gender: 'der', word: 'Förderplan', meaning: 'support plan', plural: 'Förderpläne' },
        { gender: 'die', word: 'Nachhilfe', meaning: 'private tutoring' },
        { gender: 'der', word: 'nächste Schritt', meaning: 'next step', plural: 'nächste Schritte' },
        { gender: 'die', word: 'Übung', meaning: 'practice / exercise', plural: 'Übungen' },
        { gender: 'die', word: 'Wiederholung', meaning: 'revision / repetition' },
        { gender: 'die', word: 'Rückmeldung', meaning: 'feedback' },
        { gender: 'die', word: 'Förderung', meaning: 'support / promotion' },
      ],
    },
    {
      label: 'Adjektive · Describing progress',
      items: [
        { gender: 'der', word: 'überfordert', meaning: 'overwhelmed (adj.)', note: 'used predicatively: Das Kind ist überfordert.' },
        { gender: 'der', word: 'unsicher', meaning: 'uncertain / unsure (adj.)', note: 'used predicatively: Mein Kind ist unsicher.' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Ask one basic question about how school is going.',
      example: 'Wie läuft es in der Schule?',
    },
    {
      level: 'A2',
      canDo: 'Ask whether the child has difficulties and understand simple feedback.',
      example: 'Hat mein Kind Schwierigkeiten in Mathe?',
    },
    {
      level: 'B1',
      canDo: 'Explain a concern using weil and follow a teacher\'s explanation.',
      example: 'Ich mache mir Sorgen, weil mein Kind die Hausaufgaben nicht versteht.',
    },
    {
      level: 'B2',
      canDo: 'Negotiate a support plan and ask detailed questions about next steps.',
      example: 'Können wir einen Förderplan besprechen?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can ask "How is it going at school?" and understand a simple answer.', achieved: true },
    { level: 'A2', text: 'I can ask whether my child has difficulties and understand basic feedback.', achieved: true },
    { level: 'B1', text: 'I can explain a concern with weil and follow a teacher\'s suggestions.', achieved: false },
    { level: 'B2', text: 'I can discuss and negotiate a support plan in detail.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wie', role: 'pos1' },
            { text: 'läuft', role: 'verb', highlight: true },
            { text: 'es in der Schule?', role: 'mittelfeld' },
          ],
          caption: 'A simple yes/no question — the verb moves to position 1 for questions.',
        },
        {
          slots: [
            { text: 'Ist', role: 'pos1', highlight: true },
            { text: 'mein Kind', role: 'mittelfeld' },
            { text: 'gut', role: 'satzende' },
            { text: 'in Mathe?', role: 'satzende' },
          ],
          caption: 'Direct question: verb in position 1.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Starting the conversation',
          phrases: [
            'Wie läuft es in der Schule?',
            'Ist das gut?',
            'Ich verstehe nicht. Können Sie das wiederholen?',
          ],
        },
      ],
      challenge:
        'Ask your child\'s teacher one question in German at the next parents\' evening — even just "Wie läuft es?" counts.',
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Hat', role: 'pos1', highlight: true },
            { text: 'mein Kind', role: 'mittelfeld' },
            { text: 'Schwierigkeiten', role: 'mittelfeld' },
            { text: 'in Mathe?', role: 'satzende' },
          ],
          caption: 'Asking a yes/no question — verb in position 1.',
        },
        {
          slots: [
            { text: 'Was', role: 'pos1' },
            { text: 'können', role: 'verb', highlight: true },
            { text: 'wir zu Hause', role: 'mittelfeld' },
            { text: 'üben?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal verb bracket: können in P2, infinitive at the end.',
        },
      ],
      dialogue: {
        title: 'Dialog · Gespräch über Fortschritte',
        level: 'A2',
        lines: [
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Guten Tag. Ich bin die Mutter von Sam. Wie läuft es in der Klasse?',
            en: 'Good day. I am Sam\'s mother. How is things going in class?',
          },
          {
            speaker: 'Lehrerin',
            speakerGender: 'die',
            de: 'Guten Tag! Sam macht gute Fortschritte, aber in Mathe ist es manchmal schwierig.',
            en: 'Good day! Sam is making good progress, but in Maths it is sometimes difficult.',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Hat Sam Schwierigkeiten in Mathe?',
            en: 'Does Sam have difficulties in Maths?',
          },
          {
            speaker: 'Lehrerin',
            speakerGender: 'die',
            de: 'Ja, ein bisschen. Sam versteht die Aufgaben manchmal nicht.',
            en: 'Yes, a little. Sam sometimes doesn\'t understand the tasks.',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Was können wir zu Hause üben?',
            en: 'What can we practise at home?',
          },
          {
            speaker: 'Lehrerin',
            speakerGender: 'die',
            de: 'Rechnen üben ist sehr gut. Zwanzig Minuten jeden Tag reichen.',
            en: 'Practising arithmetic is very good. Twenty minutes every day is enough.',
          },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Asking about progress',
          phrases: [
            'Hat mein Kind Schwierigkeiten in Mathe?',
            'Wie sind die Noten?',
            'Was können wir zu Hause üben?',
            'Macht mein Kind Fortschritte?',
          ],
        },
      ],
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich mache mir Sorgen,', role: 'pos1' },
            { text: 'weil', role: 'verb', highlight: true },
            { text: 'mein Kind die Hausaufgaben', role: 'mittelfeld' },
            { text: 'nicht versteht.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'weil sends the verb to the end of the clause.',
        },
        {
          slots: [
            { text: 'Ich habe den Eindruck,', role: 'pos1' },
            { text: 'dass', role: 'verb', highlight: true },
            { text: 'mein Kind überfordert', role: 'mittelfeld' },
            { text: 'ist.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'dass also sends the verb to the end — same rule as weil.',
        },
      ],
      dialogue: {
        title: 'Dialog · Sorgen ansprechen',
        level: 'B1',
        lines: [
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Ich wollte kurz über Sam sprechen. Ich mache mir ein bisschen Sorgen.',
            en: 'I wanted to briefly talk about Sam. I am a little worried.',
          },
          {
            speaker: 'Klassenlehrer',
            speakerGender: 'der',
            de: 'Natürlich. Was beobachten Sie zu Hause?',
            en: 'Of course. What do you observe at home?',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Ich mache mir Sorgen, weil Sam die Hausaufgaben in Mathe nicht versteht. Oft sitzt Sam eine Stunde daran.',
            en: 'I am worried because Sam doesn\'t understand the Maths homework. Sam often sits on it for an hour.',
          },
          {
            speaker: 'Klassenlehrer',
            speakerGender: 'der',
            de: 'Das höre ich öfter. Ich glaube, dass das Thema Bruchrechnung für viele Kinder schwierig ist.',
            en: 'I hear that quite often. I believe that fractions are a difficult topic for many children.',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Gibt es Möglichkeiten, Sam zu unterstützen?',
            en: 'Are there ways to support Sam?',
          },
          {
            speaker: 'Klassenlehrer',
            speakerGender: 'der',
            de: 'Ja, wir können einen kleinen Förderplan machen. Sam kann auch nach dem Unterricht zu mir kommen.',
            en: 'Yes, we can draw up a small support plan. Sam can also come to me after school.',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Das wäre sehr hilfreich. Wann können wir das besprechen?',
            en: 'That would be very helpful. When can we discuss that?',
          },
          {
            speaker: 'Klassenlehrer',
            speakerGender: 'der',
            de: 'Nächste Woche Donnerstag passt mir gut. Ich schicke Ihnen eine kurze Nachricht.',
            en: 'Next Thursday suits me well. I will send you a short message.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Expressing concerns',
          phrases: [
            'Ich mache mir Sorgen, weil …',
            'Mir ist aufgefallen, dass …',
            'Ich habe den Eindruck, dass mein Kind überfordert ist.',
            'Sam sitzt oft sehr lange an den Hausaufgaben.',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Requesting help',
          phrases: [
            'Gibt es Möglichkeiten, Sam zu unterstützen?',
            'Welche Unterstützung gibt es in der Schule?',
            'Wäre Nachhilfe sinnvoll?',
            'Können wir einen Förderplan besprechen?',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · Terminanfrage',
        to: 'Herr / Frau [Name der Lehrkraft]',
        subject: 'Kurze Rückfrage zu Sam',
        parts: [
          {
            label: 'Anrede',
            de: 'Guten Tag,',
            en: 'Good day,',
          },
          {
            label: 'Anliegen',
            de: 'ich würde gerne kurz mit Ihnen sprechen, weil ich mir Sorgen um Sam in Mathe mache.',
            en: 'I would like to speak with you briefly, because I am worried about Sam in Maths.',
            highlight: 'weil ich mir Sorgen um Sam in Mathe mache',
          },
          {
            label: 'Bitte',
            de: 'Hätten Sie nächste Woche einen kurzen Termin für mich? Ich bin flexibel.',
            en: 'Would you have a short appointment for me next week? I am flexible.',
            highlight: 'Hätten Sie',
          },
          {
            label: 'Gruß',
            de: 'Vielen Dank und mit freundlichen Grüßen,\n[Ihr Name]',
            en: 'Many thanks and kind regards, [Your name]',
          },
        ],
        checklist: [
          'States a reason using weil …',
          'Polite request with Hätten Sie … ?',
          'Friendly but not over-formal tone',
          'Short — teachers are busy',
        ],
      },
      challenge:
        'Send a short message to your child\'s teacher in German — just two or three sentences — using weil to explain your concern.',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Welche Unterstützung', role: 'pos1' },
            { text: 'gibt', role: 'verb', highlight: true },
            { text: 'es', role: 'mittelfeld' },
            { text: 'für Sam?', role: 'satzende' },
          ],
          caption: 'Asking about available support — direct question structure.',
        },
        {
          slots: [
            { text: 'Könnten', role: 'verb', highlight: true },
            { text: 'wir einen Förderplan', role: 'mittelfeld' },
            { text: 'besprechen?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Konjunktiv II makes the request politer than "Können wir …?"',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Negotiating support',
          phrases: [
            'Welche Unterstützung gibt es in der Schule?',
            'Könnten wir einen Förderplan besprechen?',
            'Wie oft würden wir Rückmeldung bekommen?',
            'Was wäre der nächste konkrete Schritt?',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Confirming next steps',
          phrases: [
            'Ich fasse kurz zusammen, was wir besprochen haben.',
            'Also, wir sprechen nächsten Monat wieder?',
            'Wer ist der erste Ansprechpartner, wenn es Probleme gibt?',
            'Ich schicke Ihnen eine kurze Bestätigung per E-Mail.',
          ],
        },
      ],
      challenge:
        'At the next teacher meeting, ask at least one follow-up question about the Förderplan — what the next step is and how you\'ll know if it\'s working.',
    },
  },

  foundationLinks: [
    { label: 'weil → verb to the end', foundationSlug: 'connectors' },
    { label: 'Modal verbs (können, würden)', foundationSlug: 'modal-verbs' },
    { label: 'Konjunktiv II for polite requests', foundationSlug: 'konjunktiv' },
  ],

  hero: {
    caption: 'Gespräch mit der Lehrkraft — discussing your child\'s progress.',
    alt: 'A parent and teacher sitting across a desk in conversation',
  },
};
