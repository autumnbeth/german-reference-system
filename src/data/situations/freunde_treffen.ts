import type { Situation } from '../../content/schema';

export const freundeTreffen: Situation = {
  slug: 'freunde-treffen',
  theme: 'Social',
  category: 'Social life',
  title: 'Freunde treffen',
  intro:
    'Making plans with friends in German: a simple invitation, agreeing on time and place, ' +
    'suggesting activities, politely declining with an alternative, and managing the last-minute ' +
    'changes that come with real social life.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can invite a friend out, suggest a time and place, handle a cancellation gracefully, ' +
    'and keep a group chat moving — all in natural, friendly German.',

  vocab: [
    {
      label: 'A1 · Verabredungen',
      items: [
        { gender: 'die', word: 'Verabredung', meaning: 'arrangement / date (social)', plural: 'Verabredungen' },
        { gender: 'der', word: 'Treffpunkt', meaning: 'meeting point', plural: 'Treffpunkte' },
        { gender: 'die', word: 'Uhrzeit', meaning: 'time (clock time)', plural: 'Uhrzeiten' },
        { gender: 'der', word: 'Vorschlag', meaning: 'suggestion', plural: 'Vorschläge' },
        { gender: 'die', word: 'Einladung', meaning: 'invitation', plural: 'Einladungen' },
        { gender: 'die', word: 'Absage', meaning: 'cancellation', plural: 'Absagen' },
        { gender: 'die', word: 'Freizeit', meaning: 'free time' },
      ],
    },
    {
      label: 'A2 · Verben',
      items: [
        { gender: 'verb', word: 'Lust haben auf + A', meaning: 'to feel like / to fancy', note: 'Ich habe Lust auf Kino.' },
        { gender: 'verb', word: 'vorschlagen', meaning: 'to suggest', note: 'separable, irregular: schlägt … vor' },
        { gender: 'verb', word: 'einladen', meaning: 'to invite', note: 'separable, irregular: lädt … ein' },
        { gender: 'verb', word: 'sich treffen mit + D', meaning: 'to meet up with', note: 'Wir treffen uns um drei.' },
        { gender: 'verb', word: 'vorbeikommen', meaning: 'to come over / drop by', note: 'separable: kommt … vorbei' },
        { gender: 'verb', word: 'mitbringen', meaning: 'to bring along', note: 'separable: bringt … mit' },
        { gender: 'verb', word: 'zusagen ↔ absagen', meaning: 'to accept ↔ to cancel', note: 'both separable' },
      ],
    },
    {
      label: 'B1 · Aktivitäten & Pläne',
      items: [
        { gender: 'das', word: 'Kino', meaning: 'cinema', plural: 'Kinos', note: 'ins Kino gehen' },
        { gender: 'der', word: 'Ausflug', meaning: 'day trip / outing', plural: 'Ausflüge', note: 'einen Ausflug machen' },
        { gender: 'die', word: 'Party', meaning: 'party', plural: 'Partys', note: 'eine Party schmeißen (informal)' },
        { gender: 'das', word: 'Restaurant', meaning: 'restaurant', plural: 'Restaurants', note: 'essen gehen' },
        { gender: 'der', word: 'Spaziergang', meaning: 'walk', plural: 'Spaziergänge', note: 'spazieren gehen' },
        { gender: 'verb', word: 'unternehmen', meaning: 'to do (an activity)', note: 'Was unternehmen wir am Wochenende?' },
        { gender: 'verb', word: 'sich verabreden mit + D', meaning: 'to arrange to meet' },
        { gender: 'verb', word: 'verschieben', meaning: 'to postpone', note: 'Können wir das auf Sonntag verschieben?' },
      ],
    },
    {
      label: 'B2 · Gruppenpläne & Feinheiten',
      items: [
        { gender: 'der', word: 'Kompromiss', meaning: 'compromise', plural: 'Kompromisse', note: 'einen Kompromiss finden' },
        { gender: 'verb', word: 'sich einigen auf + A', meaning: 'to agree on', note: 'Wir haben uns auf Samstag geeinigt.' },
        { gender: 'verb', word: 'kurzfristig absagen', meaning: 'to cancel at short notice' },
        { gender: 'verb', word: 'den Treffpunkt verlegen', meaning: 'to move the meeting point' },
        { gender: 'verb', word: 'Bescheid geben', meaning: 'to let someone know', note: 'Gib mir kurz Bescheid!' },
        { gender: 'verb', word: 'ausfallen', meaning: 'to be cancelled / fall through', note: 'separable: Das Treffen fällt aus.' },
        { gender: 'die', word: 'Rückmeldung', meaning: 'reply / response', plural: 'Rückmeldungen' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Make a simple invitation using "Wollen wir …?"',
      example: 'Wollen wir Kaffee trinken?',
    },
    {
      level: 'A2',
      canDo: 'Suggest a time and place and confirm the plan.',
      example: 'Hast du am Samstag um 15 Uhr Zeit? Wir treffen uns am Hauptbahnhof.',
    },
    {
      level: 'B1',
      canDo: 'Express preferences, decline politely, and offer an alternative.',
      example: 'Das passt mir leider nicht, aber wie wäre es mit Sonntag?',
    },
    {
      level: 'B2',
      canDo: 'Manage group plans, handle spontaneous changes, and express subtle preferences.',
      example: 'Ich würde eher etwas Ruhigeres vorschlagen — habt ihr Lust auf einen Abend bei mir?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can invite a friend for coffee in one sentence.', achieved: true },
    { level: 'A2', text: 'I can agree on a time, place, and activity.', achieved: true },
    { level: 'B1', text: 'I can decline with a reason and suggest an alternative date.', achieved: false },
    { level: 'B2', text: 'I can coordinate group plans and handle changes naturally.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wollen', role: 'verb', highlight: true },
            { text: 'wir', role: 'pos1' },
            { text: 'zusammen Kaffee', role: 'mittelfeld' },
            { text: 'trinken?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Wollen wir …? — the classic invitation. Verb first in yes/no questions.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Simple invitations',
          phrases: [
            'Wollen wir Kaffee trinken?',
            'Wollen wir ins Kino gehen?',
            'Kommst du mit?',
            'Hast du Lust?',
            'Ja, gerne! / Nein, leider nicht.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Einfache Einladung',
        level: 'A1',
        lines: [
          { speaker: 'Nico', speakerGender: 'der',
            de: 'Hey! Wollen wir Kaffee trinken?',
            en: 'Hey! Do you want to have coffee?' },
          { speaker: 'Mia', speakerGender: 'die',
            de: 'Ja, gerne! Wann?',
            en: 'Yes, gladly! When?' },
          { speaker: 'Nico', speakerGender: 'der',
            de: 'Heute um 15 Uhr?',
            en: 'Today at 3 o\'clock?' },
          { speaker: 'Mia', speakerGender: 'die',
            de: 'Ja! Wo?',
            en: 'Yes! Where?' },
          { speaker: 'Nico', speakerGender: 'der',
            de: 'Im Café am Marktplatz.',
            en: 'At the café on the market square.' },
          { speaker: 'Mia', speakerGender: 'die',
            de: 'Super, bis später!',
            en: 'Great, see you later!' },
          { speaker: 'Nico', speakerGender: 'der',
            de: 'Tschüss!',
            en: 'Bye!' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Treffen planen',
        parts: [
          { label: 'Einladung', de: 'Wollen wir …? (Kaffee / Kino / Park)', en: 'Do you want to …? (coffee / cinema / park)' },
          { label: 'Zeit', de: 'Wann? (heute / morgen / Samstag um 15 Uhr)', en: 'When? (today / tomorrow / Saturday at 3)' },
          { label: 'Ort', de: 'Wo? (Café / Park / bei mir)', en: 'Where? (café / park / at my place)' },
          { label: 'Bestätigung', de: 'Ja, gerne! / Nein, leider nicht.', en: 'Yes, gladly! / No, unfortunately not.' },
          { label: 'Tschüss', de: 'Bis dann! / Bis später!', en: 'See you then! / See you later!' },
        ],
      },
      challenge:
        'Send a real message to a German-speaking friend or language partner with a simple invitation using "Wollen wir …?"',
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Hast', role: 'verb', highlight: true },
            { text: 'du am Samstag um drei Uhr', role: 'mittelfeld' },
            { text: 'Zeit?', role: 'satzende' },
          ],
          caption: 'Yes/no question — verb first, time details in the middle field.',
        },
        {
          slots: [
            { text: 'Wir', role: 'pos1' },
            { text: 'treffen', role: 'verb', highlight: true },
            { text: 'uns um 15 Uhr am Marktplatz.', role: 'mittelfeld' },
          ],
          caption: '"treffen uns" — reflexive verb for meeting up.',
        },
      ],
      dialogue: {
        title: 'Dialog · Pläne machen',
        level: 'A2',
        lines: [
          {
            speaker: 'Lena',
            speakerGender: 'die',
            de: 'Hey, hast du am Samstag Zeit?',
            en: 'Hey, do you have time on Saturday?',
          },
          {
            speaker: 'Jonas',
            speakerGender: 'der',
            de: 'Ja, ich glaube schon. Was hast du vor?',
            en: 'Yes, I think so. What are you planning?',
          },
          {
            speaker: 'Lena',
            speakerGender: 'die',
            de: 'Wollen wir zusammen in die Stadt gehen? Und danach essen?',
            en: 'Do you want to go into town together? And then eat afterwards?',
          },
          {
            speaker: 'Jonas',
            speakerGender: 'der',
            de: 'Ja, gerne! Um wie viel Uhr?',
            en: 'Yes, great! At what time?',
          },
          {
            speaker: 'Lena',
            speakerGender: 'die',
            de: 'Um 14 Uhr? Wir treffen uns am Marktplatz.',
            en: 'At 2 pm? We meet at the market square.',
          },
          {
            speaker: 'Jonas',
            speakerGender: 'der',
            de: 'Perfekt! Und welches Restaurant? Hast du einen Vorschlag?',
            en: 'Perfect! And which restaurant? Do you have a suggestion?',
          },
          {
            speaker: 'Lena',
            speakerGender: 'die',
            de: 'Das neue italienische Restaurant in der Hauptstraße? Es soll sehr gut sein.',
            en: 'The new Italian restaurant on the main street? Apparently it is very good.',
          },
          {
            speaker: 'Jonas',
            speakerGender: 'der',
            de: 'Super! Bis Samstag dann.',
            en: 'Great! See you Saturday then.',
          },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Suggesting time and place',
          phrases: [
            'Hast du am … Zeit?',
            'Wie wäre es um … Uhr?',
            'Wir treffen uns am / beim / im …',
            'Passt dir … besser?',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Confirming plans',
          phrases: [
            'Alles klar! Bis dann.',
            'Ich komme! Bis Samstag.',
            'Super, ich freue mich!',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · Einladung',
        parts: [
          {
            label: 'Einladung',
            de: 'Hey Jonas! Hast du Lust, am Samstag mit mir in die Stadt zu gehen? Wir könnten um 14 Uhr am Marktplatz starten und danach essen gehen. Melde dich! 😊 Lena',
            en: 'Hey Jonas! Do you fancy coming into town with me on Saturday? We could start at 2 pm at the market square and then get something to eat. Let me know! Lena',
          },
        ],
      },
      challenge:
        'Write a WhatsApp-style message in German inviting a friend somewhere — include a day, a time, and a meeting point.',
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich hätte', role: 'pos1' },
            { text: 'ehrlich gesagt mehr Lust', role: 'mittelfeld' },
            { text: 'auf einen Spaziergang.', role: 'satzende' },
          ],
          caption: '"Ich hätte Lust auf …" — expressing a preference with Konjunktiv II (polite).',
        },
        {
          slots: [
            { text: 'Das', role: 'pos1' },
            { text: 'passt', role: 'verb', highlight: true },
            { text: 'mir leider nicht,', role: 'mittelfeld' },
            { text: 'aber wie wäre es mit Freitag?', role: 'satzende' },
          ],
          caption: 'Decline + alternative — the polite B1 combo.',
        },
      ],
      dialogue: {
        title: 'Dialog · Absagen und Alternativen',
        level: 'B1',
        lines: [
          {
            speaker: 'Lena',
            speakerGender: 'die',
            de: 'Hey, wollen wir am Donnerstag ins Kino gehen? Der neue Film soll super sein.',
            en: 'Hey, do you want to go to the cinema on Thursday? Apparently the new film is great.',
          },
          {
            speaker: 'Jonas',
            speakerGender: 'der',
            de: 'Oh, das klingt toll! Leider kann ich Donnerstag nicht, weil ich bis spät arbeite.',
            en: 'Oh, that sounds great! Unfortunately I cannot make Thursday because I am working late.',
          },
          {
            speaker: 'Lena',
            speakerGender: 'die',
            de: 'Schade! Wie wäre es mit Freitag? Der Film läuft noch die ganze Woche.',
            en: 'What a shame! How about Friday? The film is still showing all week.',
          },
          {
            speaker: 'Jonas',
            speakerGender: 'der',
            de: 'Freitag passt mir gut. Welche Uhrzeit hattest du dir vorgestellt?',
            en: 'Friday works for me. What time were you thinking?',
          },
          {
            speaker: 'Lena',
            speakerGender: 'die',
            de: 'Um 19:30 Uhr? Da gibt es eine Vorstellung. Ich könnte davor noch schnell essen.',
            en: 'At 7:30 pm? There is a showing then. I could grab a quick bite to eat before.',
          },
          {
            speaker: 'Jonas',
            speakerGender: 'der',
            de: 'Sehr gerne! Sollen wir vorher zusammen essen gehen? Ich kenne ein nettes Restaurant in der Nähe des Kinos.',
            en: 'I would love to! Shall we eat together beforehand? I know a nice restaurant near the cinema.',
          },
          {
            speaker: 'Lena',
            speakerGender: 'die',
            de: 'Perfekte Idee. Dann reserviere ich schon mal einen Tisch.',
            en: 'Perfect idea. I will go ahead and reserve a table.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Expressing preferences',
          phrases: [
            'Ich hätte Lust auf …',
            'Ich würde lieber … vorschlagen.',
            'Mir wäre … eigentlich lieber.',
            'Wie wäre es stattdessen mit …?',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Declining politely',
          phrases: [
            'Das passt mir leider nicht.',
            'Leider kann ich nicht, weil …',
            'Ich habe schon etwas vor.',
            'Können wir das verschieben?',
            'Das passt mir leider nicht, aber wie wäre es mit …?',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · Pläne bestätigen',
        parts: [
          {
            label: 'Bestätigung',
            de: 'Hey Lena! Also, ich freue mich schon sehr auf Freitag. Ich habe für 18:30 Uhr einen Tisch beim "Zur Linde" reserviert — das ist gleich um die Ecke vom Kino. Bringt du noch jemanden mit oder sind wir zu zweit?',
            en: 'Hey Lena! I am really looking forward to Friday. I have reserved a table for 6:30 pm at "Zur Linde" — it is right around the corner from the cinema. Are you bringing someone else or is it just the two of us?',
          },
        ],
      },
      challenge:
        'Practice declining an invitation in German. Use "Leider kann ich nicht, weil … — aber wie wäre es mit …?" Write it, then say it.',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich würde', role: 'pos1' },
            { text: 'eher etwas Ruhigeres', role: 'mittelfeld' },
            { text: 'vorschlagen,', role: 'verb', highlight: true },
            { text: 'wenn das für alle passt.', role: 'satzende' },
          ],
          caption: '"Ich würde … vorschlagen" — Konjunktiv II for a tentative group suggestion.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Managing group dynamics',
          phrases: [
            'Ich schlage vor, dass wir zuerst abstimmen — Kino oder Kneipe?',
            'Was meint ihr — passt Samstag für alle?',
            'Ich würde eher … vorschlagen, aber ich bin flexibel.',
            'Könnten wir vielleicht einen Kompromiss finden?',
            'Falls jemand absagen muss, einfach Bescheid geben.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Handling spontaneous changes',
          phrases: [
            'Tut mir leid, ich muss kurzfristig absagen.',
            'Können wir den Treffpunkt auf … verlegen?',
            'Ich komme etwas später — fang schon mal an!',
            'Ist es okay, wenn ich noch … mitbringe?',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'B2',
        title: 'Nachricht · Gruppenplanung',
        parts: [
          { label: 'Opener', de: 'Hey ihr! Ich würde gerne nächste Woche was unternehmen — wäre Samstag für alle okay?', en: 'Hey everyone! I\'d like to do something next week — would Saturday work for everyone?', highlight: 'wäre Samstag für alle okay' },
          { label: 'Vorschlag', de: 'Ich würde eher etwas Ruhigeres vorschlagen — z.B. ein Picknick im Park oder Spieleabend bei mir.', en: 'I\'d suggest something more relaxed — e.g. a picnic in the park or a games evening at mine.', highlight: 'würde eher etwas Ruhigeres vorschlagen' },
          { label: 'Abstimmung', de: 'Was meint ihr? Gebt kurz Bescheid, damit ich planen kann. 🙂', en: 'What do you think? Drop me a message so I can plan.' },
          { label: 'Gruß', de: 'LG! 👋', en: 'Best!' },
        ],
      },
      challenge:
        'Coordinate a plan with a group of three or more. Write a message in German that proposes a time, asks everyone to confirm, and suggests what each person could bring.',
    },
  },

  foundationLinks: [
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'satzbau' },
    { label: 'Modal verbs (wollen, können, sollen)', foundationSlug: 'modal-verbs' },
    { label: 'weil and aber — connecting ideas', foundationSlug: 'connectors' },
    { label: 'Konjunktiv II for polite suggestions', foundationSlug: 'konjunktiv' },
  ],

  hero: {
    src: '/images/meeting-friends.png',
    caption: 'Freunde treffen — making plans and enjoying time together.',
    alt: 'A group of friends sitting at a café table, laughing',
  },
};
