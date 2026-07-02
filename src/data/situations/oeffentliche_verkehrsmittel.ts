import type { Situation } from '../../content/schema';

export const oeffentlicheVerkehrsmittel: Situation = {
  slug: 'oeffentliche-verkehrsmittel',
  theme: 'Transport',
  category: 'Getting around',
  title: 'Öffentliche Verkehrsmittel',
  intro:
    'Getting around on buses, trams, U-Bahn, S-Bahn and trains in Germany: buying tickets, ' +
    'finding platforms, understanding delay announcements, and comparing routes when things go wrong.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can buy a ticket, find my platform, understand delay announcements, and figure out ' +
    'an alternative route — even when the public transport system is not cooperating.',

  vocab: [
    {
      label: 'Fahrkarten & Gültigkeit · Tickets & Validity',
      items: [
        { gender: 'die', word: 'Fahrkarte', meaning: 'ticket', plural: 'Fahrkarten' },
        { gender: 'der', word: 'Fahrschein', meaning: 'ticket (formal)', plural: 'Fahrscheine' },
        { gender: 'die', word: 'Tageskarte', meaning: 'day ticket' },
        { gender: 'die', word: 'Monatskarte', meaning: 'monthly pass' },
        { gender: 'die', word: 'Zone', meaning: 'zone', plural: 'Zonen', note: 'tickets are zone-based in most cities' },
        { gender: 'der', word: 'Automat', meaning: 'ticket machine', plural: 'Automaten' },
        { gender: 'die', word: 'Entwertung', meaning: 'validation (of ticket)', note: 'entwerten = to validate' },
        { gender: 'die', word: 'Gültigkeit', meaning: 'validity' },
      ],
    },
    {
      label: 'Infrastruktur · Infrastructure',
      items: [
        { gender: 'das', word: 'Gleis', meaning: 'platform track', plural: 'Gleise' },
        { gender: 'der', word: 'Bahnsteig', meaning: 'platform', plural: 'Bahnsteige' },
        { gender: 'die', word: 'Haltestelle', meaning: 'stop (bus / tram)', plural: 'Haltestellen' },
        { gender: 'der', word: 'Hauptbahnhof', meaning: 'main train station', note: 'Hbf for short' },
        { gender: 'die', word: 'Abfahrt', meaning: 'departure' },
        { gender: 'die', word: 'Ankunft', meaning: 'arrival' },
        { gender: 'der', word: 'Ausgang', meaning: 'exit', plural: 'Ausgänge' },
      ],
    },
    {
      label: 'Störungen · Disruptions',
      items: [
        { gender: 'die', word: 'Verspätung', meaning: 'delay', plural: 'Verspätungen' },
        { gender: 'die', word: 'Gleisänderung', meaning: 'platform change' },
        { gender: 'der', word: 'Ersatzverkehr', meaning: 'replacement service (bus/etc.)' },
        { gender: 'die', word: 'Sperrung', meaning: 'closure / blockage' },
        { gender: 'die', word: 'Verbindung', meaning: 'connection', plural: 'Verbindungen' },
        { gender: 'das', word: 'Umsteigen', meaning: 'changing trains/buses', note: 'umsteigen = to change (verb)' },
        { gender: 'der', word: 'Anschluss', meaning: 'connecting train/bus', plural: 'Anschlüsse' },
        { gender: 'die', word: 'Durchsage', meaning: 'announcement (PA)', plural: 'Durchsagen' },
      ],
    },
    {
      label: 'Transportmittel · Types of Transport',
      items: [
        { gender: 'der', word: 'Bus', meaning: 'bus', plural: 'Busse' },
        { gender: 'die', word: 'Straßenbahn', meaning: 'tram', plural: 'Straßenbahnen' },
        { gender: 'die', word: 'U-Bahn', meaning: 'underground / metro', plural: 'U-Bahnen' },
        { gender: 'die', word: 'S-Bahn', meaning: 'suburban rail', plural: 'S-Bahnen' },
        { gender: 'der', word: 'Zug', meaning: 'train', plural: 'Züge' },
        { gender: 'der', word: 'ICE', meaning: 'high-speed intercity train', note: 'Intercity-Express' },
        { gender: 'die', word: 'Regionalbahn', meaning: 'regional train', note: 'RB for short' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Read signs and find physical infrastructure',
      example: 'Wo ist Gleis 3? Wo ist die U-Bahn?',
    },
    {
      level: 'A2',
      canDo: 'Buy a ticket, ask about platforms and connections',
      example: 'Eine Fahrkarte nach München, bitte. Muss ich umsteigen? Von welchem Gleis fährt der Zug?',
    },
    {
      level: 'B1',
      canDo: 'Understand delay announcements and ask about alternatives',
      example: 'Hat der Zug Verspätung? Wann fährt der nächste Zug? Gibt es Ersatzverkehr?',
    },
    {
      level: 'B2',
      canDo: 'Compare routes, confirm ticket validity across transport types, and handle complex disruptions',
      example: 'Gilt meine Monatskarte auch für den Ersatzbus? Welche Route ist schneller — über Mannheim oder direkt?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'Read a departure board and find the right platform' },
    { level: 'A2', text: 'Buy a ticket and confirm which platform and whether to change trains' },
    { level: 'B1', text: 'Understand a PA delay announcement and find an alternative' },
    { level: 'B2', text: 'Navigate a full disruption scenario with route comparison and ticket questions' },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wo', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'Gleis drei', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: '"Wo ist...?" — finds any physical location',
        },
        {
          slots: [
            { text: 'Wo', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'der Ausgang', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Same structure, different noun — apply to any location',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Finding your way',
          phrases: [
            'Wo ist die U-Bahn?',
            'Wo ist Gleis drei?',
            'Wo ist der Bahnhof?',
            'Wo ist die Haltestelle?',
            'Entschuldigung — wo ist der Ausgang?',
          ],
        },
      ],
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Eine Fahrkarte', role: 'pos1' },
            { text: 'nach', role: 'verb', highlight: false },
            { text: 'Frankfurt', role: 'mittelfeld' },
            { text: 'bitte.', role: 'satzende' },
          ],
          caption: 'Buying a ticket — "nach" for cities, "zum/zur" for local stops',
        },
        {
          slots: [
            { text: 'Muss', role: 'pos1' },
            { text: 'ich', role: 'verb', highlight: false },
            { text: '', role: 'mittelfeld' },
            { text: 'umsteigen', role: 'verb-end', highlight: true },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Modal + infinitive — "umsteigen" goes to the end',
          showBracket: true,
        },
        {
          slots: [
            { text: 'Von welchem Gleis', role: 'pos1' },
            { text: 'fährt', role: 'verb', highlight: true },
            { text: 'der ICE nach Hamburg', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'W-question — verb stays in position 2',
        },
      ],
      dialogue: {
        title: 'Fahrkarte kaufen und Gleis finden',
        level: 'A2',
        lines: [
          { speaker: 'Reisende', speakerGender: 'die', de: 'Entschuldigung, eine Fahrkarte nach Heidelberg, bitte.', en: 'Excuse me, one ticket to Heidelberg, please.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der', de: 'Einfache Fahrt oder Hin- und Rückfahrt?', en: 'Single or return?' },
          { speaker: 'Reisende', speakerGender: 'die', de: 'Einfache Fahrt, bitte.', en: 'Single, please.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der', de: 'Das macht 14,90 Euro.', en: 'That\'s 14.90 euros.' },
          { speaker: 'Reisende', speakerGender: 'die', de: 'Danke. Muss ich umsteigen?', en: 'Thank you. Do I need to change?' },
          { speaker: 'Mitarbeiter', speakerGender: 'der', de: 'Ja, einmal in Mannheim, auf Gleis 7.', en: 'Yes, once in Mannheim, on platform 7.' },
          { speaker: 'Reisende', speakerGender: 'die', de: 'Und von welchem Gleis fährt der erste Zug hier ab?', en: 'And from which platform does the first train leave here?' },
          { speaker: 'Mitarbeiter', speakerGender: 'der', de: 'Von Gleis 4, Abfahrt in zehn Minuten.', en: 'From platform 4, departure in ten minutes.' },
          { speaker: 'Reisende', speakerGender: 'die', de: 'Super, vielen Dank!', en: 'Great, many thanks!' },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Buying tickets',
          phrases: [
            'Eine Fahrkarte nach Berlin, bitte.',
            'Einfache Fahrt, bitte.',
            'Hin- und Rückfahrt, bitte.',
            'Eine Tageskarte, bitte.',
            'Zahle ich mit Karte.',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Platform and journey questions',
          phrases: [
            'Von welchem Gleis fährt der Zug?',
            'Muss ich umsteigen?',
            'Wann fährt der nächste Zug nach Köln?',
            'Wie lange dauert die Fahrt?',
          ],
        },
      ],
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Hat', role: 'pos1' },
            { text: 'der Zug', role: 'verb', highlight: false },
            { text: 'Verspätung', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: '"Hat ... Verspätung?" — the most useful question at any German station',
        },
        {
          slots: [
            { text: 'Gibt', role: 'pos1' },
            { text: 'es', role: 'verb', highlight: false },
            { text: 'einen Ersatzverkehr', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: '"Gibt es...?" — asking if something exists / is available',
        },
      ],
      dialogue: {
        title: 'Verspätung und Gleisänderung',
        level: 'B1',
        lines: [
          { speaker: 'Reisender', speakerGender: 'der', de: 'Entschuldigung — hat der RE 15:42 nach Stuttgart Verspätung?', en: 'Excuse me — is the RE 15:42 to Stuttgart delayed?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Ja, leider. Der Zug hat voraussichtlich 25 Minuten Verspätung.', en: 'Yes, unfortunately. The train is expected to have a 25-minute delay.' },
          { speaker: 'Reisender', speakerGender: 'der', de: 'Oh nein. Und gibt es eine frühere Verbindung?', en: 'Oh no. And is there an earlier connection?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Es fährt um 15:55 ein ICE — aber der hält nicht in Bad Cannstatt.', en: 'There\'s an ICE at 15:55 — but it doesn\'t stop in Bad Cannstatt.' },
          { speaker: 'Reisender', speakerGender: 'der', de: 'Das ist kein Problem, ich brauche nur Stuttgart Hauptbahnhof.', en: 'That\'s no problem, I only need Stuttgart main station.' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Dann nehmen Sie den ICE, Gleis 9. Achtung — der fährt von Gleis 9, nicht von Gleis 11 wie ursprünglich geplant.', en: 'Then take the ICE, platform 9. Note — it departs from platform 9, not platform 11 as originally planned.' },
          { speaker: 'Reisender', speakerGender: 'der', de: 'Gilt meine Fahrkarte auch für den ICE?', en: 'Is my ticket also valid for the ICE?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Bei Verspätung über 20 Minuten können Sie jede Verbindung nehmen. Ich stempele das kurz für Sie ab.', en: 'With a delay of over 20 minutes you can take any connection. I\'ll stamp that for you quickly.' },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Asking about delays and disruptions',
          phrases: [
            'Hat der Zug Verspätung?',
            'Wie viel Verspätung hat der ICE?',
            'Fährt der Zug heute noch?',
            'Gibt es einen Ersatzverkehr?',
            'Hat sich das Gleis geändert?',
            'Schaffe ich noch meinen Anschluss?',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Understanding announcements',
          phrases: [
            'Auf Gleis 4 fährt ein: der ICE nach Hamburg.',
            'Achtung, Änderung! Der Zug fährt heute von Gleis 8.',
            'Der RE 4 fällt heute leider aus.',
            'Wegen Bauarbeiten kommt es zu Verspätungen.',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht wegen Verspätung',
        parts: [
          {
            label: 'WhatsApp-Nachricht',
            de: 'Hey Lisa,\n\ntut mir leid, ich komme etwas später als geplant. Mein Zug hat gerade 25 Minuten Verspätung — angeblich wegen einer Störung auf der Strecke. Ich nehme jetzt einen anderen Zug und bin voraussichtlich gegen 17:30 Uhr da statt um 17:00 Uhr.\n\nKannst du noch ein bisschen warten?\n\nBis gleich!\nMarco',
          },
        ],
        checklist: [
          'Verspätung erwähnen',
          'Grund (wenn bekannt) nennen',
          'Neue Ankunftszeit schätzen',
          'Freundlich um Verständnis bitten',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Gilt', role: 'pos1' },
            { text: 'meine', role: 'verb', highlight: false },
            { text: 'Monatskarte auch für den Ersatzbus', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Checking ticket validity across different transport types',
        },
        {
          slots: [
            { text: 'Welche Route', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'schneller — über Mannheim oder direkt über Frankfurt', role: 'mittelfeld' },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Comparing routes — "oder" joins two options',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Ticket validity and rights',
          phrases: [
            'Gilt meine Monatskarte auch für den Ersatzbus?',
            'Ab welcher Verspätung darf ich jeden Zug nehmen?',
            'Ich habe meinen Anschluss verpasst — was sind meine Optionen?',
            'Kann ich die Fahrt kostenlos umbuchen?',
            'Bei über 60 Minuten Verspätung habe ich Anspruch auf Entschädigung.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Route comparison',
          phrases: [
            'Welche Verbindung ist am schnellsten?',
            'Die Route über Hannover hat weniger Umstiege.',
            'Der Direktzug fährt erst in zwei Stunden, aber über Frankfurt bin ich früher da.',
            'Ist der Ersatzverkehr für alle Zonen gültig?',
          ],
        },
      ],
      challenge:
        'Your train is cancelled entirely ("fällt aus"). At the information desk, find out: (1) the next ' +
        'possible connection, (2) whether your existing ticket is valid, (3) whether you can get a refund ' +
        'or compensation. Do this entirely in German, using the vocabulary and structures from all levels.',
    },
  },

  foundationLinks: [
    { label: 'Satzbau: Fragen und W-Wörter', foundationSlug: 'satzbau' },
    { label: 'Modalverben: müssen, dürfen, können', foundationSlug: 'modal-verbs' },
    { label: 'Verb Tenses: Präsens und Futur', foundationSlug: 'verb-tenses' },
  ],

  hero: {
    caption: 'From finding Gleis 3 to surviving Verspätungen — public transport mastered.',
    alt: 'A German train station departure board showing various connections and platforms',
  },
};
