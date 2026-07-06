import type { Situation } from '../../content/schema';

export const familie: Situation = {
  slug: 'familie',
  theme: 'Social',
  subtheme: 'Familie',
  category: 'Social life',
  title: 'Familie',
  intro:
    'Talking about your family in German: naming who belongs to it, describing relatives ' +
    'and how you get on, telling stories about growing up, and — at higher levels — ' +
    'discussing family life, values, and balancing family with work.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can introduce my family, describe my relatives and our relationships, talk about ' +
    'how I grew up, and hold a real conversation about family topics — from childcare to ' +
    'generational differences — without running out of words.',

  vocab: [
    {
      label: 'A1 · Die Familie',
      items: [
        { gender: 'die', word: 'Familie', meaning: 'family', plural: 'Familien' },
        { gender: 'pl', word: 'Eltern', meaning: 'parents' },
        { gender: 'die', word: 'Mutter', meaning: 'mother', plural: 'Mütter', note: 'die Mama' },
        { gender: 'der', word: 'Vater', meaning: 'father', plural: 'Väter', note: 'der Papa' },
        { gender: 'das', word: 'Kind', meaning: 'child', plural: 'Kinder' },
        { gender: 'pl', word: 'Geschwister', meaning: 'siblings' },
        { gender: 'der', word: 'Bruder', meaning: 'brother', plural: 'Brüder' },
        { gender: 'die', word: 'Schwester', meaning: 'sister', plural: 'Schwestern' },
      ],
    },
    {
      label: 'A2 · Verwandte',
      items: [
        { gender: 'pl', word: 'Großeltern', meaning: 'grandparents' },
        { gender: 'die', word: 'Großmutter', meaning: 'grandmother', plural: 'Großmütter', note: 'die Oma' },
        { gender: 'der', word: 'Großvater', meaning: 'grandfather', plural: 'Großväter', note: 'der Opa' },
        { gender: 'der', word: 'Onkel', meaning: 'uncle', plural: 'Onkel' },
        { gender: 'die', word: 'Tante', meaning: 'aunt', plural: 'Tanten' },
        { gender: 'der', word: 'Cousin', meaning: 'cousin (m)', plural: 'Cousins', note: 'die Cousine (f)' },
        { gender: 'verb', word: 'verheiratet ↔ ledig', meaning: 'married ↔ single', note: 'also: geschieden = divorced' },
      ],
    },
    {
      label: 'B1 · Beziehungen & Alltag',
      items: [
        { gender: 'der', word: 'Verwandte', meaning: 'relative', note: 'ein Verwandter / die Verwandten' },
        { gender: 'der', word: 'Partner', meaning: 'partner', plural: 'Partner', note: 'die Partnerin (f)' },
        { gender: 'die', word: 'Beziehung', meaning: 'relationship', plural: 'Beziehungen' },
        { gender: 'verb', word: 'sich verstehen mit + D', meaning: 'to get on with', note: 'Ich verstehe mich gut mit meiner Schwester.' },
        { gender: 'verb', word: 'sich kümmern um + A', meaning: 'to take care of', note: 'Ich kümmere mich um meine Oma.' },
        { gender: 'verb', word: 'aufwachsen', meaning: 'to grow up', note: 'separable: Ich bin auf dem Land aufgewachsen.' },
        { gender: 'verb', word: 'alleinerziehend', meaning: 'single-parenting (adj.)' },
      ],
    },
    {
      label: 'B2 · Familienleben & Werte',
      items: [
        { gender: 'die', word: 'Erziehung', meaning: 'upbringing / parenting' },
        { gender: 'das', word: 'Verhältnis', meaning: 'relationship (quality of)', plural: 'Verhältnisse', note: 'ein enges Verhältnis zu jemandem' },
        { gender: 'der', word: 'Zusammenhalt', meaning: 'togetherness / solidarity' },
        { gender: 'die', word: 'Vereinbarkeit von Familie und Beruf', meaning: 'balancing family and work' },
        { gender: 'die', word: 'Elternzeit', meaning: 'parental leave' },
        { gender: 'verb', word: 'sich streiten ↔ sich versöhnen', meaning: 'to argue ↔ to make up' },
        { gender: 'die', word: 'Generation', meaning: 'generation', plural: 'Generationen' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Name the members of your family.',
      example: 'Ich habe einen Bruder und eine Schwester.',
    },
    {
      level: 'A2',
      canDo: 'Describe relatives — ages, jobs, marital status.',
      example: 'Meine Tante ist verheiratet und hat zwei Kinder.',
    },
    {
      level: 'B1',
      canDo: 'Talk about relationships and how you grew up.',
      example: 'Ich verstehe mich gut mit meinen Eltern, obwohl wir oft diskutieren.',
    },
    {
      level: 'B2',
      canDo: 'Discuss family life, values, and balancing family with work.',
      example: 'Die Vereinbarkeit von Familie und Beruf ist für viele Eltern eine echte Herausforderung.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can name everyone in my family.', achieved: true },
    { level: 'A2', text: 'I can describe my relatives and their lives.', achieved: true },
    { level: 'B1', text: 'I can talk about relationships and my childhood.', achieved: false },
    { level: 'B2', text: 'I can hold a real discussion about family topics.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'einen Bruder und eine Schwester.', role: 'mittelfeld' },
          ],
          caption: 'haben + Akkusativ — einen (m) / eine (f) for the people you have.',
        },
        {
          slots: [
            { text: 'Das', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'meine Mutter.', role: 'mittelfeld' },
          ],
          caption: 'Introducing someone — Das ist … + possessive.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Naming your family',
          phrases: [
            'Ich habe einen Bruder.',
            'Das ist meine Familie.',
            'Meine Eltern wohnen in Berlin.',
            'Ich habe keine Geschwister.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Über die Familie',
        level: 'A1',
        lines: [
          { speaker: 'Nour', speakerGender: 'die',
            de: 'Hast du Geschwister?',
            en: 'Do you have siblings?' },
          { speaker: 'Tim', speakerGender: 'der',
            de: 'Ja, ich habe einen Bruder und eine Schwester. Und du?',
            en: 'Yes, I have a brother and a sister. And you?' },
          { speaker: 'Nour', speakerGender: 'die',
            de: 'Ich bin Einzelkind. Aber ich habe viele Cousins.',
            en: 'I’m an only child. But I have a lot of cousins.' },
          { speaker: 'Tim', speakerGender: 'der',
            de: 'Wo wohnt deine Familie?',
            en: 'Where does your family live?' },
          { speaker: 'Nour', speakerGender: 'die',
            de: 'Meine Eltern wohnen in Hamburg.',
            en: 'My parents live in Hamburg.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Meine Familie',
        parts: [
          { label: 'Notiz',
            de: 'Meine Familie: Vater (Klaus), Mutter (Eva), ein Bruder (Max), eine Schwester (Lea). Oma wohnt bei uns.',
            en: 'My family: father (Klaus), mother (Eva), one brother (Max), one sister (Lea). Grandma lives with us.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Meine Tante', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'verheiratet und hat zwei Kinder.', role: 'mittelfeld' },
          ],
          caption: 'Two facts, one sentence — connected with und, verb stays in position 2.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Describing relatives',
          phrases: [
            'Mein Vater ist 58 Jahre alt.',
            'Meine Schwester ist Lehrerin.',
            'Mein Onkel ist verheiratet und hat drei Kinder.',
            'Meine Großeltern wohnen auf dem Land.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Fotos zeigen',
        level: 'A2',
        lines: [
          { speaker: 'Lena', speakerGender: 'die',
            de: 'Ist das ein Foto von deiner Familie? Wer ist das neben dir?',
            en: 'Is that a photo of your family? Who’s that next to you?' },
          { speaker: 'Jonas', speakerGender: 'der',
            de: 'Das ist mein großer Bruder. Er ist 32 und arbeitet als Ingenieur.',
            en: 'That’s my big brother. He’s 32 and works as an engineer.' },
          { speaker: 'Lena', speakerGender: 'die',
            de: 'Und die Frau mit dem Kind?',
            en: 'And the woman with the child?' },
          { speaker: 'Jonas', speakerGender: 'der',
            de: 'Das ist meine Schwester mit meiner kleinen Nichte. Sie ist gerade zwei geworden.',
            en: 'That’s my sister with my little niece. She just turned two.' },
          { speaker: 'Lena', speakerGender: 'die',
            de: 'Süß! Ihr seid eine große Familie.',
            en: 'Cute! You’re a big family.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi Sam! Am Wochenende kommt meine ganze Familie zu Besuch — meine Eltern, mein Bruder und meine Nichte. Wir grillen im Garten. Hast du Lust vorbeizukommen? LG, Anna',
            en: 'Hi Sam! This weekend my whole family is visiting — my parents, my brother and my niece. We’re barbecuing in the garden. Do you fancy coming by? Best, Anna' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'verstehe', role: 'verb', highlight: true },
            { text: 'mich gut mit meiner Schwester,', role: 'mittelfeld' },
            { text: 'obwohl wir sehr verschieden sind.', role: 'satzende' },
          ],
          caption: 'sich verstehen mit + Dativ, then obwohl sends its verb to the end.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Relationships and growing up',
          phrases: [
            'Ich verstehe mich gut / nicht so gut mit …',
            'Ich bin in einer kleinen Stadt aufgewachsen.',
            'Wir haben ein enges Verhältnis.',
            'Als Kind habe ich viel Zeit bei meiner Oma verbracht.',
            'Meine Eltern haben sich getrennt, als ich zehn war.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Über das Aufwachsen',
        level: 'B1',
        lines: [
          { speaker: 'Mara', speakerGender: 'die',
            de: 'Bist du in Deutschland aufgewachsen?',
            en: 'Did you grow up in Germany?' },
          { speaker: 'Ali', speakerGender: 'der',
            de: 'Die ersten Jahre in Syrien, dann sind wir umgezogen. Ich habe drei Geschwister.',
            en: 'The first years in Syria, then we moved. I have three siblings.' },
          { speaker: 'Mara', speakerGender: 'die',
            de: 'Versteht ihr euch gut?',
            en: 'Do you get on well?' },
          { speaker: 'Ali', speakerGender: 'der',
            de: 'Meistens ja. Mit meinem älteren Bruder streite ich manchmal, aber wir halten zusammen.',
            en: 'Mostly yes. I sometimes argue with my older brother, but we stick together.' },
          { speaker: 'Mara', speakerGender: 'die',
            de: 'Das kenne ich. Familie ist Familie.',
            en: 'I know that feeling. Family is family.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · von der Familie erzählen',
        parts: [
          { label: 'Nachricht',
            de: 'Liebe Yuki, du hast nach meiner Familie gefragt: Wir sind zu fünft. Ich bin mit zwei Brüdern auf dem Land aufgewachsen. Zu meiner Mutter habe ich ein sehr enges Verhältnis — wir telefonieren fast jeden Tag. Wie ist das bei dir? Viele Grüße, Anna',
            en: 'Dear Yuki, you asked about my family: there are five of us. I grew up with two brothers in the countryside. I have a very close relationship with my mother — we call almost every day. How is it for you? Best, Anna' },
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Vereinbarkeit von Familie und Beruf', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'für viele Eltern', role: 'mittelfeld' },
            { text: 'eine echte Herausforderung.', role: 'satzende' },
          ],
          caption: 'A long noun phrase in position 1 — the verb still holds position 2.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Discussing family topics',
          phrases: [
            'Der Zusammenhalt in der Familie ist mir wichtig.',
            'Zwischen den Generationen gibt es oft unterschiedliche Werte.',
            'Beide Eltern teilen sich heute die Erziehung häufiger.',
            'Ich finde, man sollte Beruf und Familie besser vereinbaren können.',
            'In meiner Familie wurde viel Wert auf Bildung gelegt.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Werte und Wandel',
        level: 'B2',
        lines: [
          { speaker: 'Elif', speakerGender: 'die',
            de: 'Findest du, dass sich das Familienbild verändert hat?',
            en: 'Do you think the image of family has changed?' },
          { speaker: 'Ben', speakerGender: 'der',
            de: 'Auf jeden Fall. Bei meinen Großeltern war die Rollenverteilung noch ganz klar.',
            en: 'Definitely. With my grandparents the division of roles was still very clear.' },
          { speaker: 'Elif', speakerGender: 'die',
            de: 'Genau. Heute nehmen auch viele Väter Elternzeit — das war früher undenkbar.',
            en: 'Exactly. Today many fathers take parental leave too — that was unthinkable before.' },
          { speaker: 'Ben', speakerGender: 'der',
            de: 'Ich finde das gut. Trotzdem bleibt die Vereinbarkeit von Familie und Beruf schwierig.',
            en: 'I think that’s good. Still, balancing family and work stays difficult.' },
          { speaker: 'Elif', speakerGender: 'die',
            de: 'Da hast du recht. Ohne bezahlbare Kinderbetreuung geht es kaum.',
            en: 'You’re right about that. Without affordable childcare it barely works.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'Forumsbeitrag · Meinung',
        subject: 'Familie heute — hat sich das Modell überholt?',
        parts: [
          { label: 'Einstieg',
            de: 'In der Diskussion über die moderne Familie wird oft behauptet, das klassische Modell habe ausgedient. Diese Ansicht teile ich nur teilweise.',
            en: 'In the debate about the modern family it is often claimed that the classic model is outdated. I share this view only partly.',
            highlight: 'teile ich nur teilweise' },
          { label: 'Argument',
            de: 'Einerseits übernehmen beide Eltern heute mehr Verantwortung, andererseits fehlt es vielen Familien an Zeit und an bezahlbarer Betreuung.',
            en: 'On the one hand both parents take on more responsibility today, on the other many families lack time and affordable childcare.' },
          { label: 'Fazit',
            de: 'Meiner Meinung nach ist nicht das Modell das Problem, sondern die Rahmenbedingungen, unter denen Familien leben.',
            en: 'In my opinion the problem is not the model, but the conditions under which families live.' },
        ],
        checklist: [
          'State your position, then qualify it (nur teilweise)',
          'Balance with einerseits … andererseits',
          'Close with a clear Fazit (meiner Meinung nach)',
        ],
      },
      challenge:
        'Describe your family to a German speaker for two minutes without stopping — ' +
        'who they are, how you get on, and one thing that has changed since your ' +
        'grandparents’ generation.',
    },
  },

  foundationLinks: [
    { label: 'Possessive pronouns (mein, meine, meiner)', foundationSlug: 'pronomen' },
    { label: 'obwohl / als → verb to the end', foundationSlug: 'connectors' },
    { label: 'Reflexive verbs (sich verstehen, sich streiten)', foundationSlug: 'pronomen' },
  ],
};
