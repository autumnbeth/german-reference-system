import type { Situation } from '../../content/schema';

export const kindKrankmelden: Situation = {
  slug: 'kind-krankmelden',
  theme: 'Education',
  subtheme: 'Kind krankmelden & Schulpost',
  category: 'Family & school',
  title: 'Kind krankmelden & Schulpost',
  intro:
    'The everyday admin of having a child in a German school: calling the Sekretariat ' +
    'to report them sick, writing the Entschuldigung, decoding Elternbriefe and ' +
    'permission slips, and requesting a Freistellung or support formally.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can report my child sick by phone before 8 a.m., write an Entschuldigung the ' +
    'teacher accepts, understand every Elternbrief in the schoolbag, and make formal ' +
    'requests to the school in writing.',

  vocab: [
    {
      label: 'A1 · Kind & Schule',
      items: [
        { gender: 'das', word: 'Kind', meaning: 'child', plural: 'Kinder' },
        { gender: 'verb', word: 'krank sein', meaning: 'to be ill' },
        { gender: 'die', word: 'Schule', meaning: 'school', plural: 'Schulen' },
        { gender: 'die', word: 'Lehrerin', meaning: 'teacher (f)', plural: 'Lehrerinnen', note: 'der Lehrer, -' },
        { gender: 'die', word: 'Klasse', meaning: 'class / grade', plural: 'Klassen' },
        { gender: 'verb', word: 'zu Hause bleiben', meaning: 'to stay at home' },
      ],
    },
    {
      label: 'A2 · Die Krankmeldung',
      items: [
        { gender: 'die', word: 'Entschuldigung', meaning: 'written excuse note', plural: 'Entschuldigungen' },
        { gender: 'das', word: 'Attest', meaning: 'doctor’s certificate', plural: 'Atteste' },
        { gender: 'verb', word: 'krankmelden', meaning: 'to report sick', note: 'separable: Ich melde mein Kind krank.' },
        { gender: 'das', word: 'Sekretariat', meaning: 'school office', plural: 'Sekretariate' },
        { gender: 'verb', word: 'anrufen', meaning: 'to call', note: 'separable: Ich rufe die Schule an.' },
        { gender: 'verb', word: 'fehlen', meaning: 'to be absent', note: 'Felix fehlt heute.' },
      ],
    },
    {
      label: 'B1 · Schulpost verstehen',
      items: [
        { gender: 'der', word: 'Elternbrief', meaning: 'letter to parents', plural: 'Elternbriefe' },
        { gender: 'die', word: 'AG', meaning: 'after-school club', note: 'die Arbeitsgemeinschaft' },
        { gender: 'der', word: 'Wandertag', meaning: 'school outing day', plural: 'Wandertage' },
        { gender: 'das', word: 'Einverständnis', meaning: 'consent', note: 'die Einverständniserklärung = consent form' },
        { gender: 'verb', word: 'unterschreiben', meaning: 'to sign' },
        { gender: 'die', word: 'Frist', meaning: 'deadline', plural: 'Fristen' },
        { gender: 'der', word: 'Zettel', meaning: 'slip of paper / form', plural: 'Zettel' },
      ],
    },
    {
      label: 'B2 · Anträge & Gespräche',
      items: [
        { gender: 'die', word: 'Freistellung', meaning: 'exemption from school (approved absence)', note: 'Freistellung vom Unterricht beantragen' },
        { gender: 'verb', word: 'beantragen', meaning: 'to apply for' },
        { gender: 'pl', word: 'Kinderkrankentage', meaning: 'paid child-sick days (for working parents)' },
        { gender: 'der', word: 'Förderbedarf', meaning: 'special support needs' },
        { gender: 'das', word: 'Zeugnis', meaning: 'report card', plural: 'Zeugnisse' },
        { gender: 'die', word: 'Klassenlehrerin', meaning: 'class teacher (f)', plural: 'Klassenlehrerinnen' },
        { gender: 'verb', word: 'ein Gespräch vereinbaren', meaning: 'to arrange a meeting' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Say your child is ill and staying home.',
      example: 'Mein Sohn ist krank. Er bleibt heute zu Hause.',
    },
    {
      level: 'A2',
      canDo: 'Call the school office and write a short excuse note.',
      example: 'Ich möchte meinen Sohn krankmelden. Er hat Fieber.',
    },
    {
      level: 'B1',
      canDo: 'Understand an Elternbrief and return forms on time.',
      example: 'Ich habe den Elternbrief gelesen und den Zettel unterschrieben.',
    },
    {
      level: 'B2',
      canDo: 'Request a Freistellung or extra support in formal writing.',
      example: 'Hiermit beantrage ich die Freistellung meines Sohnes für den 12. Mai.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can tell the school my child is sick.', achieved: true },
    { level: 'A2', text: 'I can make the morning call and write the Entschuldigung.', achieved: true },
    { level: 'B1', text: 'I can process any Elternbrief without a translator app.', achieved: false },
    { level: 'B2', text: 'I can write formal requests to the school and Hort.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Mein Sohn', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'krank.', role: 'mittelfeld' },
          ],
          caption: 'The core message — everything else is detail.',
        },
        {
          slots: [
            { text: 'Er', role: 'pos1' },
            { text: 'bleibt', role: 'verb', highlight: true },
            { text: 'heute zu Hause.', role: 'mittelfeld' },
          ],
          caption: 'bleiben + zu Hause — no extra verb needed.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'The essentials',
          phrases: [
            'Mein Sohn ist krank.',
            'Meine Tochter kommt heute nicht.',
            'Er hat Fieber.',
            'Sie ist in Klasse 4b.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Anruf am Morgen',
        level: 'A1',
        lines: [
          { speaker: 'Sekretärin', speakerGender: 'die',
            de: 'Grundschule am Park, guten Morgen.',
            en: 'Grundschule am Park, good morning.' },
          { speaker: 'Mutter', speakerGender: 'die',
            de: 'Guten Morgen. Mein Sohn Felix ist krank. Er ist in Klasse 4b.',
            en: 'Good morning. My son Felix is ill. He’s in class 4b.' },
          { speaker: 'Sekretärin', speakerGender: 'die',
            de: 'Danke für die Info. Gute Besserung!',
            en: 'Thanks for letting us know. Get well soon!' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Für den Anruf',
        parts: [
          { label: 'Notiz',
            de: 'Schule anrufen vor 8 Uhr: 030 1234567. Sagen: Name, Klasse 4b, krank, Fieber.',
            en: 'Call the school before 8: 030 1234567. Say: name, class 4b, ill, fever.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'meinen Sohn', role: 'mittelfeld' },
            { text: 'krankmelden.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'krankmelden closes the bracket — the standard formula for the morning call.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Calling and excusing',
          phrases: [
            'Ich möchte meine Tochter krankmelden.',
            'Er hat sich erkältet und bleibt heute zu Hause.',
            'Sie kommt wahrscheinlich morgen wieder.',
            'Braucht die Schule ein Attest?',
            'Ich schreibe eine Entschuldigung.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Im Sekretariat',
        level: 'A2',
        lines: [
          { speaker: 'Sekretärin', speakerGender: 'die',
            de: 'Grundschule am Park, guten Morgen.',
            en: 'Grundschule am Park, good morning.' },
          { speaker: 'Vater', speakerGender: 'der',
            de: 'Guten Morgen, hier ist Herr Becker. Ich möchte meine Tochter krankmelden — sie hat Bauchschmerzen.',
            en: 'Good morning, this is Mr. Becker. I’d like to report my daughter sick — she has a stomachache.' },
          { speaker: 'Sekretärin', speakerGender: 'die',
            de: 'Alles klar. Wie lange fehlt sie voraussichtlich?',
            en: 'All right. How long will she probably be absent?' },
          { speaker: 'Vater', speakerGender: 'der',
            de: 'Heute und vielleicht morgen. Braucht sie ein Attest?',
            en: 'Today and maybe tomorrow. Does she need a doctor’s note?' },
          { speaker: 'Sekretärin', speakerGender: 'die',
            de: 'Nein, ab drei Tagen. Eine schriftliche Entschuldigung reicht.',
            en: 'No, only from three days. A written excuse note is enough.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A2',
        title: 'Entschuldigung · klassisch',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Frau Müller,', en: 'Dear Ms. Müller,' },
          { label: 'Entschuldigung',
            de: 'mein Sohn Felix konnte am 3. und 4. Juli wegen einer Erkältung nicht am Unterricht teilnehmen. Bitte entschuldigen Sie sein Fehlen.',
            en: 'my son Felix could not attend lessons on July 3rd and 4th because of a cold. Please excuse his absence.',
            highlight: 'Bitte entschuldigen Sie sein Fehlen' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Exact dates of the absence',
          'A reason (wegen + G)',
          'The fixed sentence (Bitte entschuldigen Sie sein/ihr Fehlen)',
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Den Zettel', role: 'pos1' },
            { text: 'gebe', role: 'verb', highlight: true },
            { text: 'ich morgen unterschrieben', role: 'mittelfeld' },
            { text: 'ab.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'abgeben is separable — and fronting den Zettel makes it the topic.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Handling Schulpost',
          phrases: [
            'Bis wann muss ich den Zettel zurückgeben?',
            'Ich bin mit dem Ausflug einverstanden.',
            'Was kostet der Wandertag, und was soll mein Kind mitbringen?',
            'Kann meine Tochter an der AG teilnehmen?',
            'Ich habe den Elternbrief leider erst heute gesehen.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Nachfrage zum Elternbrief',
        level: 'B1',
        lines: [
          { speaker: 'Mutter', speakerGender: 'die',
            de: 'Im Elternbrief steht, dass die Klasse zum Theater fährt. Bis wann brauchen Sie die Einverständniserklärung?',
            en: 'The parents’ letter says the class is going to the theatre. By when do you need the consent form?' },
          { speaker: 'Lehrerin', speakerGender: 'die',
            de: 'Bis Freitag, zusammen mit den fünf Euro für die Fahrt.',
            en: 'By Friday, together with the five euros for the trip.' },
          { speaker: 'Mutter', speakerGender: 'die',
            de: 'Gut. Und wenn mein Sohn an dem Tag krank ist — bekommen wir das Geld zurück?',
            en: 'Good. And if my son is ill that day — do we get the money back?' },
          { speaker: 'Lehrerin', speakerGender: 'die',
            de: 'Ja, dann verrechnen wir das mit dem nächsten Ausflug.',
            en: 'Yes, then we offset it against the next trip.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · an die Klassenlehrerin',
        parts: [
          { label: 'Nachricht',
            de: 'Liebe Frau Müller, wir sind mit dem Theaterbesuch einverstanden — den unterschriebenen Zettel und das Geld bringt Felix morgen mit. Eine kurze Frage: Um wie viel Uhr ist die Klasse zurück? Viele Grüße, Anna Becker',
            en: 'Dear Ms. Müller, we agree to the theatre visit — Felix will bring the signed form and the money tomorrow. One quick question: what time will the class be back? Best regards, Anna Becker' },
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Hiermit', role: 'pos1' },
            { text: 'beantrage', role: 'verb', highlight: true },
            { text: 'ich die Freistellung meines Sohnes', role: 'mittelfeld' },
            { text: 'vom Unterricht.', role: 'satzende' },
          ],
          caption: 'beantragen + Genitiv (meines Sohnes) — the formal request pattern.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Formal requests and concerns',
          phrases: [
            'Hiermit beantrage ich die Freistellung vom Unterricht für den 12. Mai.',
            'Ich nehme heute einen Kinderkrankentag — das Attest reiche ich nach.',
            'Ich würde gern ein Gespräch über den Lernstand meines Sohnes vereinbaren.',
            'Uns ist aufgefallen, dass er zusätzliche Unterstützung in Mathematik braucht.',
            'Könnten wir gemeinsam überlegen, welche Fördermöglichkeiten es gibt?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Gespräch vereinbaren',
        level: 'B2',
        lines: [
          { speaker: 'Mutter', speakerGender: 'die',
            de: 'Ich würde gern mit Ihnen über Felix’ Leistungen in Deutsch sprechen — außerhalb des Elternsprechtags.',
            en: 'I’d like to talk to you about Felix’s performance in German — outside the regular parents’ day.' },
          { speaker: 'Klassenlehrerin', speakerGender: 'die',
            de: 'Gern. Passt Ihnen Donnerstag um 14 Uhr?',
            en: 'Gladly. Does Thursday at 2 p.m. suit you?' },
          { speaker: 'Mutter', speakerGender: 'die',
            de: 'Ja. Mir geht es vor allem darum, wie wir ihn zu Hause unterstützen können.',
            en: 'Yes. My main concern is how we can support him at home.' },
          { speaker: 'Klassenlehrerin', speakerGender: 'die',
            de: 'Gut, dann bringe ich Beispiele aus dem Unterricht mit, und wir besprechen konkrete Schritte.',
            en: 'Good, then I’ll bring examples from class and we’ll discuss concrete steps.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Antrag auf Freistellung',
        to: 'sekretariat@grundschule-am-park.de',
        subject: 'Antrag auf Freistellung vom Unterricht — Felix Becker, Klasse 4b',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Frau Direktorin Weber,', en: 'Dear Principal Weber,' },
          { label: 'Antrag',
            de: 'hiermit beantrage ich die Freistellung meines Sohnes Felix vom Unterricht am 12. Mai.',
            en: 'I hereby request that my son Felix be exempted from lessons on May 12th.',
            highlight: 'beantrage ich die Freistellung' },
          { label: 'Begründung',
            de: 'An diesem Tag findet ein wichtiger Familientermin statt, der sich nicht verschieben lässt. Den versäumten Stoff arbeiten wir selbstverständlich nach.',
            en: 'On that day there is an important family event that cannot be moved. We will of course catch up on the missed material.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Child’s name and class in the subject',
          'Fixed formula (hiermit beantrage ich die Freistellung)',
          'Reason + reassurance (Stoff nacharbeiten)',
          'Send it well before the date',
        ],
      },
      challenge:
        'Take the next real Elternbrief from the schoolbag and answer it the same day — ' +
        'in German, without translating it first.',
    },
  },

  foundationLinks: [
    { label: 'Separable verbs (krankmelden, abgeben)', foundationSlug: 'verbklammer' },
    { label: 'wegen + Genitiv', foundationSlug: 'cases' },
    { label: 'Konjunktiv II (ich würde gern …)', foundationSlug: 'konjunktiv' },
  ],

  hero: {
    src: '/images/school-schule.png',
    caption: 'Kind krankmelden — the 7:45 call and the note that follows.',
    alt: 'A parent writing a note beside a school bag and a thermometer',
  },
};
