import type { Situation } from '../../content/schema';

export const ersterArbeitstag: Situation = {
  slug: 'erster-arbeitstag',
  theme: 'Work',
  subtheme: 'Erster Arbeitstag',
  category: 'Professional life',
  title: 'Erster Arbeitstag',
  intro:
    'Navigating your first day at a German workplace: introducing yourself to colleagues, ' +
    'finding your way around, asking for help with systems and processes, and making a ' +
    'good impression from the very first hour.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can introduce myself to new colleagues, ask orientation questions, request help ' +
    'with equipment or processes, and discuss my priorities — all on my first day.',

  vocab: [
    {
      label: 'A1 · Menschen',
      items: [
        { gender: 'der', word: 'Kollege', meaning: 'colleague (male)', plural: 'Kollegen' },
        { gender: 'die', word: 'Kollegin', meaning: 'colleague (female)', plural: 'Kolleginnen' },
        { gender: 'der', word: 'Vorgesetzte', meaning: 'supervisor / line manager (male)', plural: 'Vorgesetzten', note: 'adjective noun' },
        { gender: 'die', word: 'Vorgesetzte', meaning: 'supervisor / line manager (female)', plural: 'Vorgesetzten', note: 'adjective noun' },
        { gender: 'die', word: 'Abteilung', meaning: 'department', plural: 'Abteilungen' },
      ],
    },
    {
      label: 'A2 · Räume & Ausstattung',
      items: [
        { gender: 'der', word: 'Pausenraum', meaning: 'break room', plural: 'Pausenräume' },
        { gender: 'der', word: 'Besprechungsraum', meaning: 'meeting room', plural: 'Besprechungsräume' },
        { gender: 'die', word: 'Kantine', meaning: 'canteen / cafeteria', plural: 'Kantinen' },
        { gender: 'der', word: 'Drucker', meaning: 'printer', plural: 'Drucker' },
        { gender: 'die', word: 'IT-Abteilung', meaning: 'IT department', note: 'also: IT-Support' },
      ],
    },
    {
      label: 'B1 · Systeme & Abläufe',
      items: [
        { gender: 'das', word: 'Passwort', meaning: 'password', plural: 'Passwörter' },
        { gender: 'die', word: 'Zeiterfassung', meaning: 'time recording system', note: 'usually singular' },
        { gender: 'die', word: 'Einarbeitung', meaning: 'onboarding / induction', note: 'usually singular' },
        { gender: 'die', word: 'Aufgabe', meaning: 'task', plural: 'Aufgaben' },
        { gender: 'die', word: 'Priorität', meaning: 'priority', plural: 'Prioritäten' },
      ],
    },
    {
      label: 'B2 · Abläufe verstehen',
      items: [
        { gender: 'die', word: 'Besprechung', meaning: 'meeting', plural: 'Besprechungen' },
        { gender: 'die', word: 'Einarbeitung', meaning: 'onboarding / induction' },
        { gender: 'der', word: 'Ablauf', meaning: 'process / procedure', plural: 'Abläufe' },
        { gender: 'die', word: 'Rückmeldung', meaning: 'feedback / response', plural: 'Rückmeldungen' },
        { gender: 'verb', word: 'zeigen', meaning: 'to show' },
        { gender: 'verb', word: 'erklären', meaning: 'to explain' },
        { gender: 'verb', word: 'wiederholen', meaning: 'to repeat' },
        { gender: 'verb', word: 'richtig verstanden haben', meaning: 'to have understood correctly' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Introduce yourself by name and say you are new.',
      example: 'Hallo, ich bin Amir. Ich bin neu hier.',
    },
    {
      level: 'A2',
      canDo: 'Ask where things are and what you should do next.',
      example: 'Wo ist der Pausenraum, bitte? Was soll ich jetzt machen?',
    },
    {
      level: 'B1',
      canDo: 'Ask for step-by-step help with systems and confirm you understood.',
      example: 'Können Sie mir bitte zeigen, wie das System funktioniert?',
    },
    {
      level: 'B2',
      canDo: 'Discuss task priorities and proactively clarify expectations.',
      example: 'Ich möchte gern verstehen, welche Aufgaben heute Priorität haben.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can greet a new colleague and say my name.', achieved: true },
    { level: 'A2', text: 'I can ask where things are and understand basic instructions.', achieved: true },
    { level: 'B1', text: 'I can ask for help with a system and check my understanding.', achieved: false },
    { level: 'B2', text: 'I can discuss priorities and expectations confidently on day one.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'bin', role: 'verb', highlight: true },
            { text: 'Amir. Ich bin neu hier.', role: 'mittelfeld' },
          ],
          caption: '"Ich bin neu hier" — the most useful sentence on day one.',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'heiße', role: 'verb', highlight: true },
            { text: 'Amir Karimi.', role: 'mittelfeld' },
          ],
          caption: 'heißen vs. sein: "heiße" = my name is; "bin" = I am.',
        },
      ],
      dialogue: {
        title: 'Dialog · Erster Kontakt mit einer Kollegin',
        level: 'A1',
        lines: [
          {
            speaker: 'Sarah',
            speakerGender: 'die',
            de: 'Oh, hallo! Sind Sie neu hier?',
            en: 'Oh, hello! Are you new here?',
          },
          {
            speaker: 'Amir',
            speakerGender: 'der',
            de: 'Ja, hallo. Ich bin Amir. Ich bin neu hier.',
            en: 'Yes, hello. I am Amir. I am new here.',
          },
          {
            speaker: 'Sarah',
            speakerGender: 'die',
            de: 'Schön! Ich bin Sarah. Herzlich willkommen!',
            en: 'Great! I am Sarah. Welcome!',
          },
          {
            speaker: 'Amir',
            speakerGender: 'der',
            de: 'Danke! Freut mich.',
            en: 'Thank you! Nice to meet you.',
          },
          {
            speaker: 'Sarah',
            speakerGender: 'die',
            de: 'In welcher Abteilung arbeiten Sie?',
            en: 'Which department are you working in?',
          },
          {
            speaker: 'Amir',
            speakerGender: 'der',
            de: 'Im Marketing. Und Sie?',
            en: 'In Marketing. And you?',
          },
          {
            speaker: 'Sarah',
            speakerGender: 'die',
            de: 'Ich bin im Vertrieb. Wenn Sie etwas brauchen, fragen Sie mich einfach!',
            en: 'I am in Sales. If you need anything, just ask me!',
          },
        ],
      },
      phrases: [
        {
          levels: ['A1'],
          funktion: 'First meeting',
          phrases: [
            'Hallo, ich bin … Ich bin neu hier.',
            'Freut mich! / Sehr angenehm.',
            'Ich arbeite in der … Abteilung.',
            'Danke für Ihre Hilfe.',
          ],
        },
      ],
      challenge:
        'Introduce yourself to one new colleague today using only German. Say your name, that you are new, and which department you are in.',
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wo', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'der Pausenraum,', role: 'mittelfeld' },
            { text: 'bitte?', role: 'satzende' },
          ],
          caption: 'Question word in Position 1 — verb still in Position 2.',
        },
        {
          slots: [
            { text: 'Was', role: 'pos1' },
            { text: 'soll', role: 'verb', highlight: true },
            { text: 'ich jetzt', role: 'mittelfeld' },
            { text: 'machen?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal verb (soll) + infinitive at the end — asking what you should do.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Orientation questions',
          phrases: [
            'Wo ist …? (der Pausenraum / die Kantine / der Drucker)',
            'Was soll ich jetzt machen?',
            'Wer ist meine Ansprechperson?',
            'Wann fängt die Mittagspause an?',
            'Wo kann ich meine Sachen lassen?',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Asking for repetition',
          phrases: [
            'Könnten Sie das bitte wiederholen?',
            'Können Sie bitte langsamer sprechen?',
            'Entschuldigung, ich habe das nicht verstanden.',
          ],
        },
      ],
      challenge:
        'Ask three real orientation questions on your first day — where is the break room, where do you find office supplies, and what time is lunch.',
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Können Sie', role: 'pos1' },
            { text: 'mir', role: 'mittelfeld' },
            { text: 'zeigen,', role: 'verb', highlight: true },
            { text: 'wie das System', role: 'mittelfeld' },
            { text: 'funktioniert?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Indirect question: "wie … funktioniert" sends the verb to the end.',
        },
        {
          slots: [
            { text: 'Habe ich', role: 'pos1' },
            { text: 'das richtig', role: 'mittelfeld' },
            { text: 'verstanden,', role: 'verb', highlight: true },
            { text: 'dass ich erst einloggen muss?', role: 'mittelfeld' },
          ],
          caption: '"Habe ich das richtig verstanden?" — the most useful B1 checking phrase.',
        },
      ],
      dialogue: {
        title: 'Dialog · Hilfe beim IT-System',
        level: 'B1',
        lines: [
          {
            speaker: 'Amir',
            speakerGender: 'der',
            de: 'Entschuldigung, könnten Sie mir kurz helfen? Ich komme leider nicht ins System.',
            en: 'Excuse me, could you briefly help me? Unfortunately I cannot get into the system.',
          },
          {
            speaker: 'IT-Kollege',
            speakerGender: 'der',
            de: 'Natürlich. Was passiert denn, wenn Sie sich einloggen wollen?',
            en: 'Of course. What happens when you try to log in?',
          },
          {
            speaker: 'Amir',
            speakerGender: 'der',
            de: 'Es erscheint eine Fehlermeldung. Ich glaube, mein Passwort stimmt noch nicht.',
            en: 'An error message appears. I think my password is not yet correct.',
          },
          {
            speaker: 'IT-Kollege',
            speakerGender: 'der',
            de: 'Ah, das kenne ich. Sie müssen das Passwort beim ersten Mal selbst vergeben. Ich zeige Ihnen das kurz.',
            en: 'Ah, I know that one. You need to set the password yourself the first time. Let me show you quickly.',
          },
          {
            speaker: 'Amir',
            speakerGender: 'der',
            de: 'Habe ich das richtig verstanden, dass ich zuerst auf "Passwort zurücksetzen" klicken muss?',
            en: 'Have I understood correctly that I need to click "Reset password" first?',
          },
          {
            speaker: 'IT-Kollege',
            speakerGender: 'der',
            de: 'Genau richtig. Dann bekommen Sie eine E-Mail an Ihre neue Adresse.',
            en: 'Exactly right. Then you will receive an email to your new address.',
          },
          {
            speaker: 'Amir',
            speakerGender: 'der',
            de: 'Super, vielen Dank! Und wo trage ich meine Arbeitszeiten ein — in der Zeiterfassung?',
            en: 'Great, many thanks! And where do I record my working hours — in the time-tracking system?',
          },
          {
            speaker: 'IT-Kollege',
            speakerGender: 'der',
            de: 'Genau, das ist das blaue Symbol auf dem Desktop. Das erkläre ich Ihnen morgen gerne ausführlicher.',
            en: 'Exactly, that is the blue icon on the desktop. I will happily explain that in more detail tomorrow.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Asking for process help',
          phrases: [
            'Können Sie mir bitte zeigen, wie … funktioniert?',
            'Wo finde ich …?',
            'Was muss ich als Nächstes tun?',
            'Habe ich das richtig verstanden?',
            'Könnten Sie das bitte noch einmal erklären?',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Checking understanding',
          phrases: [
            'Habe ich das richtig verstanden, dass …?',
            'Das heißt, ich soll zuerst … und dann …, richtig?',
            'Wenn ich das richtig sehe, muss ich …',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · Dankesnachricht nach dem ersten Tag',
        parts: [
          {
            label: 'Anrede',
            de: 'Liebe Frau Schulz,',
            en: 'Dear Ms Schulz,',
          },
          {
            label: 'Dank',
            de: 'ich möchte mich herzlich für meinen ersten Tag bedanken. Das Team hat mich sehr freundlich aufgenommen.',
            en: 'I would like to sincerely thank you for my first day. The team welcomed me very warmly.',
            highlight: 'ich möchte mich herzlich … bedanken',
          },
          {
            label: 'Erfahrung',
            de: 'Ich habe heute schon viel gelernt und freue mich auf die Einarbeitung in den nächsten Wochen.',
            en: 'I have already learnt a lot today and am looking forward to the onboarding in the coming weeks.',
          },
          {
            label: 'Bitte',
            de: 'Falls ich noch etwas vergessen habe oder Fragen aufkommen, melde ich mich gerne.',
            en: 'If there is anything I have missed or questions arise, I will be happy to get in touch.',
          },
          {
            label: 'Gruß',
            de: 'Viele Grüße\nAmir Karimi',
            en: 'Best regards, Amir Karimi',
          },
        ],
        checklist: [
          'Warm but professional greeting',
          'Thanks specifically referencing the first day',
          'One concrete positive observation',
          'Forward-looking statement or offer',
          'Appropriate closing (Viele Grüße for semi-formal)',
        ],
      },
      challenge:
        'The next time a colleague explains a process, repeat it back using "Habe ich das richtig verstanden, dass …?" — do this at least twice on your first week.',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich möchte', role: 'pos1' },
            { text: 'gern', role: 'mittelfeld' },
            { text: 'verstehen,', role: 'verb', highlight: true },
            { text: 'welche Aufgaben heute Priorität', role: 'mittelfeld' },
            { text: 'haben.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Indirect question with "welche" — professional and forward-looking.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Discussing priorities and expectations',
          phrases: [
            'Ich möchte gern verstehen, welche Aufgaben Priorität haben.',
            'Was wäre aus Ihrer Sicht das Wichtigste für mich in den ersten Wochen?',
            'Wie kann ich am schnellsten einen Beitrag leisten?',
            'Gibt es etwas, worauf ich besonders achten soll?',
            'Welche Erwartungen haben Sie an mich in der Probezeit?',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Proactive communication',
          phrases: [
            'Ich halte Sie gerne auf dem Laufenden.',
            'Ich werde meinen Fortschritt bis Ende der Woche zusammenfassen.',
            'Falls sich Fragen ergeben, melde ich mich direkt bei Ihnen.',
            'Ich würde gerne ein kurzes Feedback-Gespräch am Ende der ersten Woche vereinbaren.',
          ],
        },
      ],
      challenge:
        'Before leaving on your first day, ask your supervisor one B2-level question about expectations or priorities. Write it down first, then say it out loud.',
    },
  },

  foundationLinks: [
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'satzbau' },
    { label: 'Modal verbs', foundationSlug: 'modal-verbs' },
    { label: 'Indirect questions with dass / wie / welche', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'Der erste Arbeitstag — finding your feet in a new workplace.',
    alt: 'A person at a new desk being greeted by a colleague',
  },
};
