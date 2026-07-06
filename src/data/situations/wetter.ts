import type { Situation } from '../../content/schema';

export const wetter: Situation = {
  slug: 'wetter',
  theme: 'Daily Life',
  subtheme: 'Wetter',
  category: 'Survival & daily life',
  title: 'Wetter',
  intro:
    'Talking about the weather in German: naming what you see out the window, checking ' +
    'the Wettervorhersage before you leave the house, and — at higher levels — using ' +
    'weather as the small-talk opener that keeps a German conversation going.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can describe today\'s weather, understand a forecast, warn someone about what\'s ' +
    'coming, and use the weather as easy small talk — the way Germans actually do it.',

  vocab: [
    {
      label: 'A1 · Grundwörter',
      items: [
        { gender: 'das', word: 'Wetter', meaning: 'weather' },
        { gender: 'die', word: 'Sonne', meaning: 'sun' },
        { gender: 'der', word: 'Regen', meaning: 'rain' },
        { gender: 'der', word: 'Schnee', meaning: 'snow' },
        { gender: 'der', word: 'Wind', meaning: 'wind' },
        { gender: 'verb', word: 'scheinen', meaning: 'to shine', note: 'Die Sonne scheint.' },
      ],
    },
    {
      label: 'A2 · Beschreiben',
      items: [
        { gender: 'die', word: 'Wolke', meaning: 'cloud', plural: 'Wolken' },
        { gender: 'verb', word: 'bewölkt sein', meaning: 'to be cloudy', note: 'Es ist bewölkt.' },
        { gender: 'verb', word: 'regnen', meaning: 'to rain', note: 'impersonal: Es regnet.' },
        { gender: 'verb', word: 'schneien', meaning: 'to snow', note: 'impersonal: Es schneit.' },
        { gender: 'die', word: 'Temperatur', meaning: 'temperature', plural: 'Temperaturen' },
        { gender: 'verb', word: 'kalt / warm sein', meaning: 'to be cold / warm', note: 'Es ist heute kalt.' },
      ],
    },
    {
      label: 'B1 · Vorhersage & Reaktion',
      items: [
        { gender: 'die', word: 'Wettervorhersage', meaning: 'weather forecast', plural: 'Wettervorhersagen' },
        { gender: 'der', word: 'Grad', meaning: 'degree(s)', note: 'Es sind 20 Grad.' },
        { gender: 'verb', word: 'sich abkühlen', meaning: 'to cool down', note: 'reflexive & separable: Es kühlt sich ab.' },
        { gender: 'verb', word: 'blitzen / donnern', meaning: 'to have lightning / thunder' },
        { gender: 'das', word: 'Gewitter', meaning: 'thunderstorm', plural: 'Gewitter' },
        { gender: 'verb', word: 'aufklaren', meaning: 'to clear up', note: 'separable: Es klart später auf.' },
      ],
    },
    {
      label: 'B2 · Wetter als Gesprächsthema',
      items: [
        { gender: 'verb', word: 'umschlagen', meaning: 'to turn / change abruptly', note: 'separable: Das Wetter schlägt um.' },
        { gender: 'die', word: 'Hitzewelle', meaning: 'heatwave', plural: 'Hitzewellen' },
        { gender: 'der', word: 'Klimawandel', meaning: 'climate change' },
        { gender: 'verb', word: 'auf etwas gefasst sein', meaning: 'to be prepared for something', note: 'Sind Sie auf den Regen gefasst?' },
        { gender: 'verb', word: 'schwül sein', meaning: 'to be humid / muggy' },
        { gender: 'verb', word: 'jemandem aufs Gemüt schlagen', meaning: 'to weigh on someone\'s mood', note: 'Der graue Himmel schlägt mir aufs Gemüt.' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Say what the weather is like today.',
      example: 'Die Sonne scheint. Es ist warm.',
    },
    {
      level: 'A2',
      canDo: 'Describe changing weather and give a temperature.',
      example: 'Es ist bewölkt und es regnet ein bisschen.',
    },
    {
      level: 'B1',
      canDo: 'Understand a forecast and react to it appropriately.',
      example: 'Laut der Vorhersage kühlt es sich am Abend ab.',
    },
    {
      level: 'B2',
      canDo: 'Use weather as small talk and comment on how it affects mood.',
      example: 'Dieses graue Wetter schlägt mir wirklich aufs Gemüt.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can name basic weather and say if it\'s warm or cold.', achieved: true },
    { level: 'A2', text: 'I can describe the weather and give a temperature.', achieved: true },
    { level: 'B1', text: 'I can follow a forecast and warn someone about it.', achieved: false },
    { level: 'B2', text: 'I can use weather naturally as small talk.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Sonne', role: 'pos1' },
            { text: 'scheint.', role: 'verb', highlight: true },
          ],
          caption: 'Subject-verb — the simplest possible weather sentence.',
        },
        {
          slots: [
            { text: 'Es', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'kalt.', role: 'mittelfeld' },
          ],
          caption: 'es ist + adjective — the dummy subject es for weather.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Basic descriptions',
          phrases: [
            'Die Sonne scheint.',
            'Es ist kalt / warm.',
            'Wie ist das Wetter heute?',
            'Es ist schön draußen!',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Vor der Tür',
        level: 'A1',
        lines: [
          { speaker: 'Nachbarin', speakerGender: 'die',
            de: 'Guten Morgen! Wie ist das Wetter heute?',
            en: 'Good morning! How’s the weather today?' },
          { speaker: 'Nachbar', speakerGender: 'der',
            de: 'Die Sonne scheint, aber es ist noch kalt.',
            en: 'The sun is shining, but it’s still cold.' },
          { speaker: 'Nachbarin', speakerGender: 'die',
            de: 'Gut, dann nehme ich eine Jacke mit.',
            en: 'Good, then I’ll bring a jacket.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Wetter heute',
        parts: [
          { label: 'Notiz',
            de: 'Heute: Sonne, kalt. Jacke und Schal mitnehmen!',
            en: 'Today: sun, cold. Bring jacket and scarf!' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Es', role: 'pos1' },
            { text: 'regnet', role: 'verb', highlight: true },
            { text: 'seit dem Morgen.', role: 'mittelfeld' },
          ],
          caption: 'Impersonal es regnet — no real subject, just the weather happening.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Describing changing weather',
          phrases: [
            'Es ist bewölkt, aber es regnet nicht.',
            'Heute sind es 15 Grad.',
            'Es soll morgen schneien.',
            'Nimm einen Schirm mit, es regnet!',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Vorhersage für morgen',
        level: 'A2',
        lines: [
          { speaker: 'Kollege', speakerGender: 'der',
            de: 'Weißt du, wie das Wetter morgen wird?',
            en: 'Do you know what the weather will be like tomorrow?' },
          { speaker: 'Kollegin', speakerGender: 'die',
            de: 'Ich habe gelesen, es wird bewölkt und windig — etwa 12 Grad.',
            en: 'I read that it’ll be cloudy and windy — about 12 degrees.' },
          { speaker: 'Kollege', speakerGender: 'der',
            de: 'Dann nehme ich lieber eine warme Jacke mit.',
            en: 'Then I’d better bring a warm jacket.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi! Es regnet gerade stark bei mir — nimm lieber den Schirm mit, wenn du rauskommst. LG',
            en: 'Hi! It’s raining hard here right now — better bring an umbrella if you’re heading out. Best' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Laut der Vorhersage', role: 'pos1' },
            { text: 'kühlt', role: 'verb', highlight: true },
            { text: 'es sich am Abend', role: 'mittelfeld' },
            { text: 'ab.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'laut + Dativ cites the source; sich abkühlen is separable & reflexive.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Forecasts and warnings',
          phrases: [
            'Laut der Vorhersage gibt es später ein Gewitter.',
            'Es soll den ganzen Tag regnen.',
            'Es klart gegen Nachmittag auf.',
            'Sei vorsichtig, es soll heute Abend blitzen und donnern.',
            'Die Temperaturen fallen in der Nacht unter null.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Vor dem Ausflug',
        level: 'B1',
        lines: [
          { speaker: 'Freundin', speakerGender: 'die',
            de: 'Sollen wir das Picknick wirklich heute machen? Ich habe gehört, es soll ein Gewitter geben.',
            en: 'Should we really do the picnic today? I heard there’s supposed to be a thunderstorm.' },
          { speaker: 'Freund', speakerGender: 'der',
            de: 'Laut der Vorhersage kommt das erst am Abend. Bis dahin sollten wir fertig sein.',
            en: 'According to the forecast that’s only coming in the evening. We should be done by then.' },
          { speaker: 'Freundin', speakerGender: 'die',
            de: 'Na gut, aber ich nehme trotzdem eine Jacke mit, falls es sich abkühlt.',
            en: 'All right, but I’ll bring a jacket anyway in case it cools down.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · Warnung',
        parts: [
          { label: 'Nachricht',
            de: 'Hey, laut Vorhersage soll es heute Nachmittag stark blitzen und donnern. Vielleicht verschieben wir den Ausflug lieber auf morgen — da soll es aufklaren.',
            en: 'Hey, according to the forecast there’s supposed to be a lot of lightning and thunder this afternoon. Maybe we should postpone the trip to tomorrow — it’s supposed to clear up then.' },
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Dieses graue Wetter', role: 'pos1' },
            { text: 'schlägt', role: 'verb', highlight: true },
            { text: 'mir wirklich', role: 'mittelfeld' },
            { text: 'aufs Gemüt.', role: 'satzende' },
          ],
          caption: 'jemandem aufs Gemüt schlagen — a fully idiomatic way to say weather affects your mood.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Weather as small talk',
          phrases: [
            'Was für ein Wetter heute, was?',
            'Kaum zu glauben, dass es letzte Woche noch so kalt war.',
            'Dieses Wetter schlägt mir echt aufs Gemüt.',
            'Man merkt den Klimawandel schon an den Sommern hier.',
            'Sind Sie auf den Regen morgen gefasst?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Kleiner Talk an der Bushaltestelle',
        level: 'B2',
        lines: [
          { speaker: 'Fremde', speakerGender: 'die',
            de: 'Was für ein Wetter heute, was? Erst Sonne, jetzt schon wieder Regen.',
            en: 'What weather today, huh? First sun, now rain again already.' },
          { speaker: 'Fremder', speakerGender: 'der',
            de: 'Ja, total unberechenbar. Letzte Woche war es noch richtig warm.',
            en: 'Yeah, totally unpredictable. Last week it was still really warm.' },
          { speaker: 'Fremde', speakerGender: 'die',
            de: 'Ich glaube, das Wetter schlägt langsam allen aufs Gemüt.',
            en: 'I think the weather is starting to weigh on everyone’s mood.' },
          { speaker: 'Fremder', speakerGender: 'der',
            de: 'Da sind Sie nicht allein — ich freue mich schon auf den Sommer.',
            en: 'You’re not alone there — I’m already looking forward to summer.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B2',
        title: 'Nachricht · über das Wetter klagen',
        parts: [
          { label: 'Nachricht',
            de: 'Ehrlich, dieses graue Novemberwetter schlägt mir jedes Jahr aufs Gemüt. Zum Glück soll es laut Vorhersage am Wochenende endlich aufklaren — dann machen wir den Ausflug, den wir schon lange planen!',
            en: 'Honestly, this grey November weather gets me down every year. Luckily the forecast says it should finally clear up this weekend — then we’ll do the trip we’ve been planning for ages!' },
        ],
      },
      challenge:
        'Use the weather to start a conversation with a stranger in German — at the bus ' +
        'stop, in a queue, anywhere — and see where the small talk goes from there.',
    },
  },

  foundationLinks: [
    { label: 'Impersonal es (es regnet)', foundationSlug: 'satzbau' },
    { label: 'Separable verbs (aufklaren, sich abkühlen)', foundationSlug: 'verbklammer' },
    { label: 'laut + Dativ', foundationSlug: 'cases' },
  ],

  hero: {
    src: '/images/weather.png',
    caption: 'Wetter — from Sonne to Gewitter, and the small talk in between.',
    alt: 'A goblin fighting a windy umbrella, surrounded by labelled weather icons',
  },
};
