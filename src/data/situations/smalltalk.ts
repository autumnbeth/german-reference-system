import type { Situation } from '../../content/schema';

export const smalltalk: Situation = {
  slug: 'smalltalk',
  theme: 'Social',
  subtheme: 'Small Talk & Umgangssprache',
  category: 'Social life',
  title: 'Small Talk & Umgangssprache',
  intro:
    'The German that textbooks skip: greetings between friends, the little particles ' +
    '(doch, mal, halt) that make sentences sound native, colloquial reactions, and ' +
    'how to keep a casual conversation alive at work, at the Spielplatz, or in the Kneipe.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can chat — not just transact. I can open a conversation, react naturally ' +
    '(echt? krass! na ja …), soften requests with particles, and understand the ' +
    'colloquial German that real people actually speak.',

  vocab: [
    {
      label: 'A1 · Begrüßung & Floskeln',
      items: [
        { gender: 'verb', word: 'Na?', meaning: 'hey / how’s it going?', note: 'greeting and question in one syllable' },
        { gender: 'verb', word: 'Wie geht’s?', meaning: 'how are you?' },
        { gender: 'verb', word: 'Alles klar', meaning: 'all good / OK', note: 'both question and answer' },
        { gender: 'verb', word: 'super', meaning: 'great' },
        { gender: 'verb', word: 'na ja', meaning: 'well … (hedging)' },
        { gender: 'verb', word: 'Tschüs!', meaning: 'bye!', note: 'also: Mach’s gut! = take care' },
      ],
    },
    {
      label: 'A2 · Partikeln — the flavor words',
      items: [
        { gender: 'verb', word: 'doch', meaning: 'contradiction / encouragement', note: 'Komm doch mit! · Doch! (= yes it is!)' },
        { gender: 'verb', word: 'mal', meaning: 'softens a request', note: 'Guck mal! Sag mal, …' },
        { gender: 'verb', word: 'halt / eben', meaning: 'that’s just how it is', note: 'Ist halt so.' },
        { gender: 'verb', word: 'schon', meaning: 'concession', note: 'Das stimmt schon, aber …' },
        { gender: 'verb', word: 'eigentlich', meaning: 'actually / by the way', note: 'Was machst du eigentlich am Samstag?' },
        { gender: 'verb', word: 'denn', meaning: 'softens questions', note: 'Was ist denn los?' },
      ],
    },
    {
      label: 'B1 · Umgangssprache',
      items: [
        { gender: 'verb', word: 'krass', meaning: 'wild / intense (good or bad)' },
        { gender: 'der', word: 'Quatsch', meaning: 'nonsense', note: 'Quatsch! = no way / rubbish' },
        { gender: 'verb', word: 'passt schon', meaning: 'it’s fine / don’t worry' },
        { gender: 'verb', word: 'mal schauen', meaning: 'we’ll see' },
        { gender: 'verb', word: 'jein', meaning: 'yes and no' },
        { gender: 'der', word: 'Kumpel', meaning: 'buddy / mate', plural: 'Kumpel' },
        { gender: 'der', word: 'Feierabend', meaning: 'end of the workday', note: 'Schönen Feierabend!' },
      ],
    },
    {
      label: 'B2 · Reagieren & Ironie',
      items: [
        { gender: 'verb', word: 'Ach was!', meaning: 'no way! / you don’t say' },
        { gender: 'verb', word: 'Na und?', meaning: 'so what?' },
        { gender: 'verb', word: 'Von wegen!', meaning: 'yeah right! / as if!' },
        { gender: 'verb', word: 'Das kannst du laut sagen', meaning: 'you can say that again' },
        { gender: 'verb', word: 'meinetwegen', meaning: 'fine by me (grudging)' },
        { gender: 'verb', word: 'allerdings', meaning: 'indeed / however', note: 'as an answer: definitely!' },
        { gender: 'verb', word: 'Wahnsinn!', meaning: 'incredible!' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Greet, answer "Wie geht’s?", and close a chat politely.',
      example: 'Na, wie geht’s? — Gut, und dir?',
    },
    {
      level: 'A2',
      canDo: 'Use mal and doch to sound less abrupt.',
      example: 'Sag mal, kommst du am Samstag?',
    },
    {
      level: 'B1',
      canDo: 'React naturally and keep casual talk going.',
      example: 'Echt? Das ist ja krass. Und was hast du dann gemacht?',
    },
    {
      level: 'B2',
      canDo: 'Handle irony, banter, and regional color.',
      example: 'Von wegen ruhiges Wochenende — wir waren auf drei Geburtstagen.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can survive the "Na?" at the coffee machine.', achieved: true },
    { level: 'A2', text: 'I can soften requests with mal, doch, and denn.', achieved: true },
    { level: 'B1', text: 'I can react like a native (krass, echt, na ja).', achieved: false },
    { level: 'B2', text: 'I can banter, hedge, and read irony.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wie', role: 'pos1' },
            { text: 'geht’s', role: 'verb', highlight: true },
            { text: 'dir?', role: 'mittelfeld' },
          ],
          caption: 'The universal opener — answer with „Gut, und dir?“ and you’re in a conversation.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Opening and closing',
          phrases: [
            'Na, alles klar?',
            'Gut, und dir?',
            'Schönes Wochenende!',
            'Bis dann! Mach’s gut!',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · An der Kaffeemaschine',
        level: 'A1',
        lines: [
          { speaker: 'Kollege', speakerGender: 'der',
            de: 'Na, alles klar?',
            en: 'Hey, all good?' },
          { speaker: 'Kollegin', speakerGender: 'die',
            de: 'Ja, alles gut. Und bei dir?',
            en: 'Yes, all good. And with you?' },
          { speaker: 'Kollege', speakerGender: 'der',
            de: 'Auch. Schönen Tag noch!',
            en: 'Same. Have a nice day!' },
          { speaker: 'Kollegin', speakerGender: 'die',
            de: 'Danke, dir auch!',
            en: 'Thanks, you too!' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A1',
        title: 'Nachricht · kurz & locker',
        parts: [
          { label: 'Nachricht',
            de: 'Hi! Alles klar bei dir? Kaffee am Samstag? LG',
            en: 'Hi! All good with you? Coffee on Saturday? Best' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Komm', role: 'verb', highlight: true },
            { text: 'doch am Samstag', role: 'mittelfeld' },
            { text: 'mit!', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'doch turns a command into an invitation — mitkommen closes the bracket.',
        },
        {
          slots: [
            { text: 'Was', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'denn los?', role: 'mittelfeld' },
          ],
          caption: 'denn makes the question warm instead of interrogative.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Particles in action',
          phrases: [
            'Sag mal, hast du am Samstag Zeit?',
            'Komm doch mit!',
            'Guck mal, da drüben!',
            'Was ist denn los?',
            'Das ist halt so.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Auf dem Spielplatz',
        level: 'A2',
        lines: [
          { speaker: 'Vater', speakerGender: 'der',
            de: 'Ihre Tochter und mein Sohn spielen ja jeden Tag zusammen.',
            en: 'Your daughter and my son play together every day.' },
          { speaker: 'Mutter', speakerGender: 'die',
            de: 'Stimmt! Sag mal, wohnt ihr auch hier in der Straße?',
            en: 'True! Say, do you also live on this street?' },
          { speaker: 'Vater', speakerGender: 'der',
            de: 'Ja, gleich da vorne. Kommt doch mal zum Spielen vorbei!',
            en: 'Yes, just up there. Do come over for a playdate!' },
          { speaker: 'Mutter', speakerGender: 'die',
            de: 'Gern! Am Wochenende vielleicht?',
            en: 'Gladly! Maybe at the weekend?' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · Einladung',
        parts: [
          { label: 'Nachricht',
            de: 'Hallo Lena! Wir grillen am Samstag im Park. Komm doch vorbei — die Kinder können ja zusammen spielen. Sag mal Bescheid! LG, Anna',
            en: 'Hi Lena! We’re barbecuing in the park on Saturday. Do come by — the kids can play together. Let me know! Best, Anna' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Das', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'ja krass!', role: 'mittelfeld' },
          ],
          caption: 'ja + adjective = surprised reaction. The stress is on krass, not ja.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Reacting naturally',
          phrases: [
            'Echt? Erzähl mal!',
            'Krass, das hätte ich nicht gedacht.',
            'Na ja, so schlimm war es nicht.',
            'Quatsch! Das stimmt doch gar nicht.',
            'Mal schauen, ob das klappt.',
            'Passt schon, kein Stress.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · In der Kneipe',
        level: 'B1',
        lines: [
          { speaker: 'Freundin', speakerGender: 'die',
            de: 'Und, wie war die erste Woche im neuen Job?',
            en: 'So, how was the first week at the new job?' },
          { speaker: 'Freund', speakerGender: 'der',
            de: 'Na ja … die Kollegen sind super, aber der Chef ist ein bisschen speziell.',
            en: 'Well … the colleagues are great, but the boss is a bit … particular.' },
          { speaker: 'Freundin', speakerGender: 'die',
            de: 'Oh je. Wie speziell denn?',
            en: 'Oh dear. Particular how?' },
          { speaker: 'Freund', speakerGender: 'der',
            de: 'Er schreibt E-Mails um Mitternacht und wundert sich, wenn man nicht sofort antwortet.',
            en: 'He writes emails at midnight and is surprised when you don’t answer immediately.' },
          { speaker: 'Freundin', speakerGender: 'die',
            de: 'Krass. Na, Hauptsache, das Team stimmt. Prost erstmal!',
            en: 'Wow. Well, what matters is the team is right. Cheers for now!' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · nach dem Abend',
        parts: [
          { label: 'Nachricht',
            de: 'War echt schön gestern! Und mach dir wegen deines Chefs keinen Kopf — das wird schon. Nächste Woche wieder? Mal schauen, wer diesmal gewinnt beim Kicker 😄',
            en: 'Yesterday was really nice! And don’t worry about your boss — it’ll be fine. Same again next week? Let’s see who wins at table football this time 😄' },
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Von wegen', role: 'pos1' },
            { text: 'ruhiges Wochenende —', role: 'mittelfeld' },
            { text: 'wir waren auf drei Geburtstagen.', role: 'satzende' },
          ],
          caption: 'Von wegen + the claim you’re debunking — instant irony.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Banter and hedging',
          phrases: [
            'Ach was! Das glaube ich erst, wenn ich es sehe.',
            'Das kannst du laut sagen.',
            'Na und? Ist doch nicht schlimm.',
            'Meinetwegen können wir auch später fahren.',
            'Allerdings! Besser hätte ich es nicht sagen können.',
            'Jein — kommt drauf an, wen du fragst.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Feierabend-Banter',
        level: 'B2',
        lines: [
          { speaker: 'Kollegin', speakerGender: 'die',
            de: 'Na, war dein Meeting so produktiv wie immer?',
            en: 'So, was your meeting as productive as always?' },
          { speaker: 'Kollege', speakerGender: 'der',
            de: 'Von wegen produktiv. Zwei Stunden, und am Ende haben wir ein neues Meeting geplant.',
            en: 'Productive, yeah right. Two hours, and at the end we scheduled another meeting.' },
          { speaker: 'Kollegin', speakerGender: 'die',
            de: 'Das kannst du laut sagen — bei uns war es genauso. Wahnsinn, oder?',
            en: 'You can say that again — it was exactly the same for us. Unbelievable, right?' },
          { speaker: 'Kollege', speakerGender: 'der',
            de: 'Na ja, wenigstens ist jetzt Feierabend. Kommst du noch mit auf ein Getränk?',
            en: 'Well, at least it’s Feierabend now. Coming along for a drink?' },
          { speaker: 'Kollegin', speakerGender: 'die',
            de: 'Meinetwegen — aber nur eins, ich muss morgen früh raus.',
            en: 'Fine by me — but just one, I have to be up early tomorrow.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B2',
        title: 'Nachricht · mit Ironie',
        parts: [
          { label: 'Nachricht',
            de: 'Na, überlebt? 😄 Von wegen „kurzes Elternfest“ — drei Stunden Turnhalle! Aber die Kinder fanden’s klasse, und darum geht’s ja. Nächstes Mal schmuggeln wir Kaffee rein. Abgemacht?',
            en: 'So, did you survive? 😄 “Short school festival”, yeah right — three hours in the gym! But the kids loved it, and that’s what counts. Next time we smuggle in coffee. Deal?' },
        ],
      },
      challenge:
        'In your next real German conversation, use one particle (doch, mal, halt) and one ' +
        'reaction (krass, echt, na ja) — and notice how differently people respond to you.',
    },
  },

  foundationLinks: [
    { label: 'Word order in questions', foundationSlug: 'satzbau' },
    { label: 'Imperative + doch/mal', foundationSlug: 'praesens' },
    { label: 'Connectors for keeping talk flowing', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'Small Talk — the German between the textbook chapters.',
    alt: 'Two people chatting over coffee at a kitchen counter',
  },
};
