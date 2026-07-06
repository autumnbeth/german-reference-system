import type { Situation } from '../../content/schema';

export const hobbys: Situation = {
  slug: 'hobbys',
  theme: 'Social',
  subtheme: 'Hobbys & Freizeit',
  category: 'Social life',
  title: 'Hobbys & Freizeit',
  intro:
    'Talking about hobbies and free time in German: saying what you enjoy, using gern ' +
    'and Lieblings-, joining a Verein or club, and — at higher levels — discussing why ' +
    'a hobby matters to you and debating its value with someone who disagrees.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can say what I do in my free time, ask others about their hobbies, talk about ' +
    'how often and why I do something, and join a real conversation about hobbies that ' +
    'goes beyond a simple list.',

  vocab: [
    {
      label: 'A1 · Hobbys nennen',
      items: [
        { gender: 'das', word: 'Hobby', meaning: 'hobby', plural: 'Hobbys' },
        { gender: 'die', word: 'Freizeit', meaning: 'free time' },
        { gender: 'der', word: 'Sport', meaning: 'sport / exercise' },
        { gender: 'die', word: 'Musik', meaning: 'music' },
        { gender: 'verb', word: 'spielen', meaning: 'to play' },
        { gender: 'verb', word: 'gern + verb', meaning: 'to like doing something', note: 'Ich lese gern. (word order: gern after the verb)' },
      ],
    },
    {
      label: 'A2 · Aktivitäten',
      items: [
        { gender: 'verb', word: 'malen', meaning: 'to paint' },
        { gender: 'verb', word: 'Fahrrad fahren', meaning: 'to cycle' },
        { gender: 'verb', word: 'fotografieren', meaning: 'to photograph' },
        { gender: 'die', word: 'Mannschaft', meaning: 'team', plural: 'Mannschaften' },
        { gender: 'der', word: 'Verein', meaning: 'club / association', plural: 'Vereine', note: 'Ich bin im Fußballverein.' },
        { gender: 'verb', word: 'trainieren', meaning: 'to train / practise' },
      ],
    },
    {
      label: 'B1 · Häufigkeit & Vorlieben',
      items: [
        { gender: 'verb', word: 'sich interessieren für + A', meaning: 'to be interested in', note: 'Ich interessiere mich für Fotografie.' },
        { gender: 'pl', word: 'regelmäßig', meaning: 'regularly' },
        { gender: 'die', word: 'Ausdauer', meaning: 'stamina / endurance' },
        { gender: 'verb', word: 'entspannen', meaning: 'to relax', note: 'reflexive: Ich entspanne mich beim Malen.' },
        { gender: 'die', word: 'Erfahrung', meaning: 'experience', plural: 'Erfahrungen' },
        { gender: 'verb', word: 'seit + Dativ', meaning: 'since / for (duration)', note: 'Ich spiele seit fünf Jahren Gitarre.' },
      ],
    },
    {
      label: 'B2 · Wert & Debatte',
      items: [
        { gender: 'der', word: 'Ausgleich', meaning: 'a counterbalance (to work/stress)', note: 'Sport ist ein guter Ausgleich zur Arbeit.' },
        { gender: 'verb', word: 'sich lohnen', meaning: 'to be worth it', note: 'Das Training lohnt sich.' },
        { gender: 'die', word: 'Leidenschaft', meaning: 'passion', plural: 'Leidenschaften' },
        { gender: 'verb', word: 'zeitaufwendig sein', meaning: 'to be time-consuming' },
        { gender: 'verb', word: 'überzeugen', meaning: 'to convince' },
        { gender: 'die', word: 'Gemeinschaft', meaning: 'community', plural: 'Gemeinschaften' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Name a hobby and say you like doing it.',
      example: 'Ich spiele gern Fußball.',
    },
    {
      level: 'A2',
      canDo: 'Say how often you do something and name a club.',
      example: 'Ich fahre jeden Sonntag Fahrrad. Ich bin im Sportverein.',
    },
    {
      level: 'B1',
      canDo: 'Explain what interests you and for how long you\'ve done it.',
      example: 'Ich interessiere mich seit der Schule für Fotografie.',
    },
    {
      level: 'B2',
      canDo: 'Discuss why a hobby matters and respond to someone who disagrees.',
      example: 'Für mich ist Sport ein wichtiger Ausgleich — auch wenn es zeitaufwendig ist.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can name my hobbies with gern.', achieved: true },
    { level: 'A2', text: 'I can say how often and mention a Verein.', achieved: true },
    { level: 'B1', text: 'I can explain my interest and how long I\'ve had it.', achieved: false },
    { level: 'B2', text: 'I can discuss the value of a hobby and defend my view.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'spiele', role: 'verb', highlight: true },
            { text: 'gern Fußball.', role: 'mittelfeld' },
          ],
          caption: 'gern goes right after the verb — not before it, unlike English "gladly".',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Naming your hobby',
          phrases: [
            'Mein Hobby ist Musik.',
            'Ich spiele gern Fußball.',
            'Ich lese gern.',
            'Was ist dein Hobby?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Hobbys austauschen',
        level: 'A1',
        lines: [
          { speaker: 'Lena', speakerGender: 'die',
            de: 'Was ist dein Hobby?',
            en: 'What’s your hobby?' },
          { speaker: 'Tom', speakerGender: 'der',
            de: 'Ich spiele gern Fußball. Und du?',
            en: 'I like playing football. And you?' },
          { speaker: 'Lena', speakerGender: 'die',
            de: 'Ich male gern. Malen macht mir Spaß.',
            en: 'I like painting. Painting is fun for me.' },
          { speaker: 'Tom', speakerGender: 'der',
            de: 'Cool! Zeigst du mir deine Bilder?',
            en: 'Cool! Will you show me your pictures?' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Meine Hobbys',
        parts: [
          { label: 'Notiz',
            de: 'Meine Hobbys: Fußball, Musik hören, Fahrrad fahren.',
            en: 'My hobbies: football, listening to music, cycling.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'fahre', role: 'verb', highlight: true },
            { text: 'jeden Sonntag', role: 'mittelfeld' },
            { text: 'Fahrrad.', role: 'satzende' },
          ],
          caption: 'jeden + day names how often — no preposition needed.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Frequency and clubs',
          phrases: [
            'Ich mache das einmal / zweimal die Woche.',
            'Ich bin seit einem Jahr im Verein.',
            'Wir trainieren am Mittwoch und am Samstag.',
            'Meine Mannschaft spielt am Wochenende.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Im Sportverein',
        level: 'A2',
        lines: [
          { speaker: 'Nachbarin', speakerGender: 'die',
            de: 'Ich habe gehört, du bist jetzt im Fußballverein?',
            en: 'I heard you’re in the football club now?' },
          { speaker: 'Nachbar', speakerGender: 'der',
            de: 'Ja, genau. Wir trainieren zweimal die Woche.',
            en: 'Yes, exactly. We train twice a week.' },
          { speaker: 'Nachbarin', speakerGender: 'die',
            de: 'Und spielt ihr auch Spiele gegen andere Mannschaften?',
            en: 'And do you also play matches against other teams?' },
          { speaker: 'Nachbar', speakerGender: 'der',
            de: 'Ja, am Wochenende. Komm doch mal vorbei und schau zu!',
            en: 'Yes, on weekends. Come by and watch sometime!' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi Ben! Ich bin jetzt im Fotoclub — wir treffen uns jeden Donnerstag. Hast du Lust mitzukommen? LG',
            en: 'Hi Ben! I’m in a photo club now — we meet every Thursday. Feel like coming along? Best' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'interessiere', role: 'verb', highlight: true },
            { text: 'mich seit der Schule', role: 'mittelfeld' },
            { text: 'für Fotografie.', role: 'satzende' },
          ],
          caption: 'sich interessieren für + Akkusativ — seit + Dativ gives the timeframe.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Explaining your interest',
          phrases: [
            'Ich interessiere mich seit Jahren für …',
            'Dabei kann ich mich richtig entspannen.',
            'Es macht mir Spaß, weil ich dabei kreativ sein kann.',
            'Ich habe schon viel Erfahrung damit.',
            'Am Anfang war es schwierig, aber jetzt macht es Spaß.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Warum dieses Hobby?',
        level: 'B1',
        lines: [
          { speaker: 'Kollegin', speakerGender: 'die',
            de: 'Du gehst jedes Wochenende klettern, oder? Warum eigentlich?',
            en: 'You go climbing every weekend, right? Why actually?' },
          { speaker: 'Kollege', speakerGender: 'der',
            de: 'Ich interessiere mich seit meiner Kindheit dafür. Es fordert mich körperlich und mental.',
            en: 'I’ve been interested in it since childhood. It challenges me physically and mentally.' },
          { speaker: 'Kollegin', speakerGender: 'die',
            de: 'Hast du keine Angst dabei?',
            en: 'Aren’t you afraid doing it?' },
          { speaker: 'Kollege', speakerGender: 'der',
            de: 'Am Anfang schon, aber mit der Erfahrung wird man sicherer. Und danach bin ich total entspannt.',
            en: 'At first yes, but with experience you get more confident. And afterwards I’m completely relaxed.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · Einladung zum Hobby',
        parts: [
          { label: 'Nachricht',
            de: 'Hallo Sam, ich weiß, dass du dich für Musik interessierst — wir suchen noch jemanden für unsere Band. Wir treffen uns seit einem Jahr jeden Dienstag zum Proben. Hättest du Lust, mal vorbeizuschauen?',
            en: 'Hi Sam, I know you’re interested in music — we’re still looking for someone for our band. We’ve been meeting every Tuesday to rehearse for a year. Would you like to come by sometime?' },
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Für mich', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'Sport ein wichtiger Ausgleich,', role: 'mittelfeld' },
            { text: 'auch wenn es zeitaufwendig ist.', role: 'satzende' },
          ],
          caption: 'auch wenn concedes a point without giving up your position.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Discussing the value of a hobby',
          phrases: [
            'Für mich ist das ein wichtiger Ausgleich zum Alltag.',
            'Klar, es kostet Zeit, aber es lohnt sich für mich.',
            'Manche verstehen nicht, warum ich so viel Zeit dafür investiere.',
            'Es geht nicht nur um das Ergebnis, sondern um den Prozess.',
            'Ich würde jedem empfehlen, ein Hobby zu haben, das nichts mit der Arbeit zu tun hat.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Eine Diskussion unter Freunden',
        level: 'B2',
        lines: [
          { speaker: 'Freund', speakerGender: 'der',
            de: 'Ehrlich gesagt verstehe ich nicht, warum du jedes Wochenende für einen Marathon trainierst. Das klingt nach Stress, nicht nach Erholung.',
            en: 'Honestly I don’t understand why you train for a marathon every weekend. That sounds like stress, not relaxation.' },
          { speaker: 'Freundin', speakerGender: 'die',
            de: 'Für dich vielleicht, aber für mich ist es genau umgekehrt — im Job denke ich ständig nach, beim Laufen schalte ich komplett ab.',
            en: 'Maybe for you, but for me it’s exactly the opposite — at work I’m constantly thinking, while running I switch off completely.' },
          { speaker: 'Freund', speakerGender: 'der',
            de: 'Aber ist es das nicht wert, wenigstens einen freien Tag zu haben?',
            en: 'But isn’t it worth having at least one day off?' },
          { speaker: 'Freundin', speakerGender: 'die',
            de: 'Doch, aber das Training gehört für mich genauso zur Erholung wie ein freier Tag. Jeder findet seinen eigenen Ausgleich.',
            en: 'Sure, but for me the training is just as much part of my recovery as a day off. Everyone finds their own balance.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B2',
        title: 'Nachricht · eine Meinung vertreten',
        parts: [
          { label: 'Nachricht',
            de: 'Ich weiß, du findest es übertrieben, dass ich so viel Zeit ins Klettern stecke. Aber ehrlich: Ohne dieses Hobby wäre ich im Job viel gestresster. Es ist mein Ausgleich, keine Zeitverschwendung — und das würde ich jederzeit verteidigen 😄',
            en: 'I know you think it’s excessive how much time I put into climbing. But honestly: without this hobby I’d be way more stressed at work. It’s my balance, not a waste of time — and I’d defend that any day 😄' },
        ],
      },
      challenge:
        'Have a real conversation about a hobby someone doesn\'t understand — either yours ' +
        'or theirs — using auch wenn to concede their point before making yours.',
    },
  },

  foundationLinks: [
    { label: 'seit + Dativ', foundationSlug: 'pronomen' },
    { label: 'Reflexive verbs (sich interessieren für)', foundationSlug: 'pronomen' },
    { label: 'Connectors (auch wenn, aber)', foundationSlug: 'connectors' },
  ],

  hero: {
    src: '/images/hobbies.png',
    caption: 'Hobbys & Freizeit — malen, Musik, Sport, and everything in between.',
    alt: 'A goblin surrounded by hobby icons — painting, music, video games, cycling, sport',
  },
};
