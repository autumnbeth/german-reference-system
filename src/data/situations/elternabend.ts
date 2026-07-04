import type { Situation } from '../../content/schema';

export const elternabend: Situation = {
  slug: 'elternabend',
  theme: 'Education',
  subtheme: 'Elternabend',
  category: 'Family & school',
  title: 'Elternabend',
  intro:
    'Going to a German parents\' evening: introducing yourself, understanding class announcements, ' +
    'asking about your child\'s wellbeing, and — at higher levels — raising concerns and ' +
    'negotiating long-term support politely in Konjunktiv II.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can introduce myself at a parents\' evening, ask about class activities and my child\'s ' +
    'wellbeing, and at higher levels raise a concern and discuss support — all without reverting ' +
    'to English when the conversation moves beyond small talk.',

  vocab: [
    {
      label: 'Schulfächer · School subjects',
      items: [
        { gender: 'die', word: 'Mathe', meaning: 'Maths (short for Mathematik)' },
        { gender: 'das', word: 'Deutsch', meaning: 'German (language / subject)' },
        { gender: 'das', word: 'Englisch', meaning: 'English (language / subject)' },
        { gender: 'der', word: 'Sport', meaning: 'PE / sport' },
        { gender: 'die', word: 'Kunst', meaning: 'Art' },
        { gender: 'die', word: 'Musik', meaning: 'Music' },
        { gender: 'die', word: 'Sachkunde', meaning: 'General Studies (primary school)' },
      ],
    },
    {
      label: 'Personen · School roles',
      items: [
        { gender: 'die', word: 'Lehrerin', meaning: 'female teacher', plural: 'Lehrerinnen' },
        { gender: 'der', word: 'Lehrer', meaning: 'male teacher', plural: 'Lehrer' },
        { gender: 'der', word: 'Klassenlehrer', meaning: 'class teacher (male)', plural: 'Klassenlehrer' },
        { gender: 'die', word: 'Klassenlehrerin', meaning: 'class teacher (female)', plural: 'Klassenlehrerinnen' },
        { gender: 'das', word: 'Elternteil', meaning: 'parent', plural: 'Elternteile' },
        { gender: 'der', word: 'Elternsprecher', meaning: 'class parent representative (male)' },
        { gender: 'die', word: 'Elternsprecherin', meaning: 'class parent representative (female)' },
      ],
    },
    {
      label: 'Schulereignisse · School events',
      items: [
        { gender: 'der', word: 'Ausflug', meaning: 'school trip', plural: 'Ausflüge' },
        { gender: 'die', word: 'Klassenarbeit', meaning: 'class test', plural: 'Klassenarbeiten' },
        { gender: 'das', word: 'Zeugnis', meaning: 'school report', plural: 'Zeugnisse' },
        { gender: 'die', word: 'Hausaufgabe', meaning: 'homework', plural: 'Hausaufgaben' },
        { gender: 'der', word: 'Elternabend', meaning: 'parents\' evening', plural: 'Elternabende' },
        { gender: 'die', word: 'Projektwoche', meaning: 'project week', plural: 'Projektwochen' },
      ],
    },
    {
      label: 'Unterstützung · Support',
      items: [
        { gender: 'die', word: 'Rückmeldung', meaning: 'feedback' },
        { gender: 'die', word: 'Unterstützung', meaning: 'support' },
        { gender: 'die', word: 'Förderung', meaning: 'support / educational promotion' },
        { gender: 'der', word: 'Förderplan', meaning: 'support plan', plural: 'Förderpläne' },
        { gender: 'die', word: 'Nachhilfe', meaning: 'private tutoring' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Introduce yourself and ask one simple question about a school event.',
      example: 'Ich bin die Mutter von Sam. Wann ist der Ausflug?',
    },
    {
      level: 'A2',
      canDo: 'Ask what you can practise at home and follow simple class announcements.',
      example: 'Was können wir zu Hause üben?',
    },
    {
      level: 'B1',
      canDo: 'Raise a concern politely using weil and understand the teacher\'s response.',
      example: 'Ich mache mir Sorgen, weil mein Kind sich in der Klasse nicht wohlfühlt.',
    },
    {
      level: 'B2',
      canDo: 'Make polite requests with Konjunktiv II and discuss long-term support.',
      example: 'Es wäre hilfreich, wenn wir regelmäßiger Rückmeldung bekommen könnten.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can introduce myself and ask "When is the trip?"', achieved: true },
    { level: 'A2', text: 'I can ask what we can practise at home and understand simple replies.', achieved: true },
    { level: 'B1', text: 'I can raise a concern using weil without switching to English.', achieved: false },
    { level: 'B2', text: 'I can use Konjunktiv II to make polite suggestions in a formal setting.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'bin', role: 'verb', highlight: true },
            { text: 'die Mutter von Sam.', role: 'mittelfeld' },
          ],
          caption: 'Introduce yourself — bin stays in position 2.',
        },
        {
          slots: [
            { text: 'Wann', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'der Ausflug?', role: 'mittelfeld' },
          ],
          caption: 'Simple question word + verb + noun.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Introducing yourself',
          phrases: [
            'Guten Abend. Ich bin die Mutter von Sam.',
            'Guten Abend. Ich bin der Vater von Sam.',
            'Guten Abend. Ich bin das Elternteil von Sam.',
          ],
        },
        {
          levels: ['A1'],
          funktion: 'Asking one basic question',
          phrases: [
            'Wann ist der Ausflug?',
            'Wann ist die nächste Klassenarbeit?',
            'Wann gibt es das Zeugnis?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Ankommen beim Elternabend',
        level: 'A1',
        lines: [
          { speaker: 'Lehrerin', speakerGender: 'die',
            de: 'Guten Abend! Sind Sie neu hier?',
            en: 'Good evening! Are you new here?' },
          { speaker: 'Elternteil', speakerGender: 'die',
            de: 'Guten Abend. Ich bin die Mutter von Sam.',
            en: 'Good evening. I am Sam\'s mother.' },
          { speaker: 'Lehrerin', speakerGender: 'die',
            de: 'Willkommen! Ich bin Frau Müller, die Klassenlehrerin.',
            en: 'Welcome! I am Ms Müller, the class teacher.' },
          { speaker: 'Elternteil', speakerGender: 'die',
            de: 'Freut mich. Wann ist der Ausflug?',
            en: 'Nice to meet you. When is the class trip?' },
          { speaker: 'Lehrerin', speakerGender: 'die',
            de: 'Der Ausflug ist am 15. März.',
            en: 'The class trip is on 15th March.' },
          { speaker: 'Elternteil', speakerGender: 'die',
            de: 'Danke.',
            en: 'Thank you.' },
        ],
      },
      challenge:
        'At the next parents\' evening, introduce yourself in German and ask one question — even just "Wann ist der Ausflug?"',
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Was', role: 'pos1' },
            { text: 'können', role: 'verb', highlight: true },
            { text: 'wir zu Hause', role: 'mittelfeld' },
            { text: 'üben?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal verb bracket — können in P2, infinitive at the end.',
        },
      ],
      dialogue: {
        title: 'Dialog · Ankunft beim Elternabend',
        level: 'A2',
        lines: [
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Guten Abend! Ich bin die Mutter von Sam, aus der Klasse 3b.',
            en: 'Good evening! I am Sam\'s mother, from class 3b.',
          },
          {
            speaker: 'Klassenlehrerin',
            speakerGender: 'die',
            de: 'Guten Abend! Schön, dass Sie da sind. Ich bin Frau Müller.',
            en: 'Good evening! Nice that you are here. I am Mrs Müller.',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Wann ist der Ausflug in die Stadt?',
            en: 'When is the trip to the city?',
          },
          {
            speaker: 'Klassenlehrerin',
            speakerGender: 'die',
            de: 'Der Ausflug ist am fünfzehnten März. Ich schicke noch eine Information nach Hause.',
            en: 'The trip is on the fifteenth of March. I will still send information home.',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Danke. Und was können wir zu Hause üben?',
            en: 'Thank you. And what can we practise at home?',
          },
          {
            speaker: 'Klassenlehrerin',
            speakerGender: 'die',
            de: 'Lesen ist sehr wichtig. Zehn bis fünfzehn Minuten jeden Tag ist ideal.',
            en: 'Reading is very important. Ten to fifteen minutes every day is ideal.',
          },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Understanding announcements',
          phrases: [
            'Wann ist die nächste Klassenarbeit?',
            'Was müssen die Kinder mitbringen?',
            'Wie viele Hausaufgaben gibt es pro Woche?',
            'Was können wir zu Hause üben?',
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
            { text: 'mein Kind sich in der Klasse nicht', role: 'mittelfeld' },
            { text: 'wohlfühlt.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'weil sends the verb to the end — here the separable verb wohlfühlen stays together at the end.',
        },
        {
          slots: [
            { text: 'Mir ist aufgefallen,', role: 'pos1' },
            { text: 'dass', role: 'verb', highlight: true },
            { text: 'Sam manchmal nicht', role: 'mittelfeld' },
            { text: 'mitmachen möchte.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'dass works just like weil — the verb cluster goes to the end.',
        },
      ],
      dialogue: {
        title: 'Dialog · Ein Problem ansprechen',
        level: 'B1',
        lines: [
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Darf ich kurz etwas ansprechen? Ich mache mir Sorgen, weil Sam sich in der Klasse nicht wohlfühlt.',
            en: 'May I raise something briefly? I am worried because Sam doesn\'t feel comfortable in the class.',
          },
          {
            speaker: 'Klassenlehrerin',
            speakerGender: 'die',
            de: 'Oh, das tut mir leid zu hören. Können Sie mir mehr erzählen? Was beobachten Sie zu Hause?',
            en: 'Oh, I am sorry to hear that. Can you tell me more? What do you observe at home?',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Sam sagt oft, dass es in der Pause alleine ist. Es scheint keine Freunde in der Klasse zu haben.',
            en: 'Sam often says that it is alone at break. It seems to have no friends in the class.',
          },
          {
            speaker: 'Klassenlehrerin',
            speakerGender: 'die',
            de: 'Ich habe das auch bemerkt. Wir haben in der Klasse manchmal Gruppenaktivitäten, bei denen Sam etwas ruhiger ist.',
            en: 'I have noticed that too. We sometimes have group activities in class where Sam is a little quieter.',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Was können wir gemeinsam tun, damit Sam sich besser integriert?',
            en: 'What can we do together so that Sam integrates better?',
          },
          {
            speaker: 'Klassenlehrerin',
            speakerGender: 'die',
            de: 'Ich kann Sam beim nächsten Projekt in eine Gruppe einteilen, die gut zusammenpasst. Und ich spreche auch persönlich mit Sam.',
            en: 'I can put Sam into a group for the next project that works well together. And I will also speak personally with Sam.',
          },
          {
            speaker: 'Elternteil',
            speakerGender: 'die',
            de: 'Das wäre toll. Können Sie mir kurz Bescheid geben, wie es läuft?',
            en: 'That would be great. Could you let me know briefly how it goes?',
          },
          {
            speaker: 'Klassenlehrerin',
            speakerGender: 'die',
            de: 'Natürlich. Ich melde mich in zwei Wochen bei Ihnen.',
            en: 'Of course. I will be in touch with you in two weeks.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Raising a concern politely',
          phrases: [
            'Darf ich kurz etwas ansprechen?',
            'Ich mache mir Sorgen, weil …',
            'Mir ist aufgefallen, dass …',
            'Sam sagt oft, dass …',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Asking for action',
          phrases: [
            'Was können wir gemeinsam tun?',
            'Können Sie mir kurz Bescheid geben?',
            'Wie können wir Sam unterstützen?',
            'Wann sprechen wir wieder darüber?',
          ],
        },
      ],
      challenge:
        'Practise the B1 dialogue out loud, taking both parts. Then try raising one real concern with your child\'s teacher — you don\'t need perfect German, just "Ich mache mir Sorgen, weil …"',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Es wäre hilfreich,', role: 'pos1' },
            { text: 'wenn', role: 'verb', highlight: true },
            { text: 'wir regelmäßiger Rückmeldung', role: 'mittelfeld' },
            { text: 'bekommen könnten.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Konjunktiv II with wenn — both verbs go to the end of the wenn-clause.',
        },
        {
          slots: [
            { text: 'Wäre es möglich,', role: 'pos1' },
            { text: 'dass', role: 'verb', highlight: true },
            { text: 'wir monatlich kurz', role: 'mittelfeld' },
            { text: 'sprechen?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Indirect question with dass — more polite than a direct request.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Polite requests with Konjunktiv II',
          phrases: [
            'Es wäre hilfreich, wenn wir regelmäßiger Rückmeldung bekommen könnten.',
            'Wäre es möglich, monatlich kurz zu sprechen?',
            'Ich würde gerne einen Förderplan besprechen.',
            'Könnten wir vereinbaren, dass Sie mich bei Problemen direkt informieren?',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Discussing long-term support',
          phrases: [
            'Wie lange gilt der Förderplan?',
            'Wie messen wir den Fortschritt?',
            'Was passiert, wenn sich nichts verbessert?',
            'Welche weiteren Ressourcen gibt es in der Schule?',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Nachbereitung Elternabend',
        to: 'klassenlehrerin@grundschule-mitte.de',
        subject: 'Nachbereitung Elternabend — vereinbarte Maßnahmen für Sam',
        parts: [
          {
            label: 'Anrede',
            de: 'Sehr geehrte Frau Müller,',
            en: 'Dear Mrs Müller,',
          },
          {
            label: 'Dank',
            de: 'vielen Dank für das informative Gespräch beim gestrigen Elternabend.',
            en: 'Many thanks for the informative conversation at yesterday\'s parents\' evening.',
          },
          {
            label: 'Zusammenfassung',
            de: 'Ich möchte kurz zusammenfassen, was wir besprochen haben: Sam bekommt beim nächsten Projekt eine passende Gruppeneintelung, und Sie werden persönlich mit Sam sprechen.',
            en: 'I would like to briefly summarise what we discussed: Sam will be placed in a suitable group for the next project, and you will speak personally with Sam.',
            highlight: 'kurz zusammenfassen',
          },
          {
            label: 'Bitte',
            de: 'Es wäre hilfreich, wenn Sie sich in etwa zwei Wochen kurz bei mir melden könnten, damit ich weiß, wie es läuft.',
            en: 'It would be helpful if you could briefly get in touch with me in about two weeks, so that I know how things are going.',
            highlight: 'Es wäre hilfreich, wenn',
          },
          {
            label: 'Angebot',
            de: 'Falls Sie Informationen aus unserem häuslichen Umfeld brauchen, stehe ich gerne zur Verfügung.',
            en: 'If you need information from our home environment, I am happy to be available.',
          },
          {
            label: 'Gruß',
            de: 'Mit freundlichen Grüßen,\n[Ihr Name]',
            en: 'Kind regards, [Your name]',
          },
        ],
        checklist: [
          'Formal greeting and closing',
          'Thanks the teacher first',
          'Summarises agreed actions clearly',
          'Uses Konjunktiv II (es wäre hilfreich, wenn …)',
          'Offers cooperation rather than making demands',
        ],
      },
      challenge:
        'Write a follow-up email to a teacher after an Elternabend, summarising at least two things you agreed on, with at least one Konjunktiv II sentence.',
    },
  },

  foundationLinks: [
    { label: 'weil and dass → verb to the end', foundationSlug: 'connectors' },
    { label: 'Konjunktiv II for polite requests', foundationSlug: 'konjunktiv' },
    { label: 'Modal verbs (können, möchten)', foundationSlug: 'modal-verbs' },
    { label: 'Sentence architecture', foundationSlug: 'satzbau' },
  ],

  hero: {
    caption: 'Elternabend — understanding, asking, and advocating for your child.',
    alt: 'Parents sitting in a classroom at a parents\' evening, teacher at the front',
  },
};
