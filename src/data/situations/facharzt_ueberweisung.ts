import type { Situation } from '../../content/schema';

export const facharztUeberweisung: Situation = {
  slug: 'facharzt-ueberweisung',
  theme: 'Health',
  subtheme: 'Facharzt & Überweisung',
  category: 'Survival & daily life',
  title: 'Facharzt & Überweisung',
  intro:
    'Navigating the German healthcare system beyond a single appointment: getting an ' +
    'Überweisung from your Hausarzt, chasing a Facharzttermin, understanding ' +
    'Krankschreibung and Zuzahlung, and applying for Kostenübernahme when therapy ' +
    'or treatment needs approval.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can move through the German health system — referral, specialist, sick note, ' +
    'prescription, reimbursement — and chase a Termin or a Kostenübernahme without ' +
    'needing someone to translate.',

  vocab: [
    {
      label: 'A1 · Beim Arzt',
      items: [
        { gender: 'der', word: 'Arzt', meaning: 'doctor (m)', plural: 'Ärzte', note: 'die Ärztin, -nen' },
        { gender: 'der', word: 'Termin', meaning: 'appointment', plural: 'Termine' },
        { gender: 'verb', word: 'krank sein', meaning: 'to be ill' },
        { gender: 'die', word: 'Praxis', meaning: 'doctor’s practice', plural: 'Praxen' },
        { gender: 'das', word: 'Rezept', meaning: 'prescription', plural: 'Rezepte' },
        { gender: 'verb', word: 'warten', meaning: 'to wait' },
      ],
    },
    {
      label: 'A2 · Krank sein & Papiere',
      items: [
        { gender: 'die', word: 'Überweisung', meaning: 'referral (to a specialist)', plural: 'Überweisungen', note: 'same word as bank transfer — context decides' },
        { gender: 'der', word: 'Facharzt', meaning: 'specialist', plural: 'Fachärzte' },
        { gender: 'die', word: 'Krankschreibung', meaning: 'sick note (for work)', plural: 'Krankschreibungen' },
        { gender: 'das', word: 'Attest', meaning: 'medical certificate', plural: 'Atteste' },
        { gender: 'die', word: 'Versichertenkarte', meaning: 'health insurance card', plural: 'Versichertenkarten' },
        { gender: 'das', word: 'Wartezimmer', meaning: 'waiting room', plural: 'Wartezimmer' },
      ],
    },
    {
      label: 'B1 · Das System verstehen',
      items: [
        { gender: 'der', word: 'Hausarzt', meaning: 'GP / family doctor', plural: 'Hausärzte' },
        { gender: 'die', word: 'Zuzahlung', meaning: 'co-payment', plural: 'Zuzahlungen' },
        { gender: 'verb', word: 'ein Rezept einlösen', meaning: 'to fill a prescription' },
        { gender: 'die', word: 'Kostenübernahme', meaning: 'coverage of costs (by insurer)' },
        { gender: 'der', word: 'Befund', meaning: 'medical finding / result', plural: 'Befunde' },
        { gender: 'die', word: 'Untersuchung', meaning: 'examination', plural: 'Untersuchungen' },
      ],
    },
    {
      label: 'B2 · Therapie & Klärung',
      items: [
        { gender: 'der', word: 'Therapieplatz', meaning: 'therapy slot', plural: 'Therapieplätze' },
        { gender: 'die', word: 'Warteliste', meaning: 'waiting list', plural: 'Wartelisten' },
        { gender: 'die', word: 'Zweitmeinung', meaning: 'second opinion', plural: 'Zweitmeinungen' },
        { gender: 'der', word: 'Antrag auf Kostenübernahme', meaning: 'application for cost coverage' },
        { gender: 'verb', word: 'bewilligen', meaning: 'to approve' },
        { gender: 'die', word: 'Behandlung', meaning: 'treatment', plural: 'Behandlungen' },
        { gender: 'die', word: 'Terminservicestelle', meaning: 'appointment service (116 117)', note: 'helps find Facharzt appointments' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Say you are ill and make a simple appointment.',
      example: 'Ich bin krank. Ich brauche einen Termin.',
    },
    {
      level: 'A2',
      canDo: 'Ask for a referral, a sick note, or a prescription.',
      example: 'Ich brauche eine Überweisung zum Hautarzt.',
    },
    {
      level: 'B1',
      canDo: 'Chase a specialist appointment and understand costs and results.',
      example: 'Ich rufe an, weil ich seit Wochen auf einen Termin warte.',
    },
    {
      level: 'B2',
      canDo: 'Apply for cost coverage and argue for faster treatment.',
      example: 'Ich beantrage die Kostenübernahme für die Therapie bei meiner Krankenkasse.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can say I’m ill and book a Termin.', achieved: true },
    { level: 'A2', text: 'I can ask for Überweisung, Attest, or Krankschreibung.', achieved: true },
    { level: 'B1', text: 'I can chase appointments and understand Zuzahlungen.', achieved: false },
    { level: 'B2', text: 'I can pursue a Kostenübernahme and ask for a Zweitmeinung.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'brauche', role: 'verb', highlight: true },
            { text: 'einen Termin.', role: 'mittelfeld' },
          ],
          caption: 'brauchen + Akkusativ — the sentence that opens every Praxis phone call.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Getting seen',
          phrases: [
            'Ich bin krank.',
            'Ich brauche einen Termin.',
            'Hier ist meine Versichertenkarte.',
            'Wie lange muss ich warten?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · An der Anmeldung',
        level: 'A1',
        lines: [
          { speaker: 'Arzthelferin', speakerGender: 'die',
            de: 'Guten Morgen. Ihre Versichertenkarte, bitte.',
            en: 'Good morning. Your insurance card, please.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Hier bitte. Ich habe einen Termin um zehn Uhr.',
            en: 'Here you are. I have an appointment at ten.' },
          { speaker: 'Arzthelferin', speakerGender: 'die',
            de: 'Danke. Nehmen Sie bitte im Wartezimmer Platz.',
            en: 'Thank you. Please take a seat in the waiting room.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Arzttermin',
        parts: [
          { label: 'Notiz',
            de: 'Hautarzt: Dienstag, 10 Uhr. Mitbringen: Versichertenkarte, Überweisung.',
            en: 'Dermatologist: Tuesday, 10 a.m. Bring: insurance card, referral.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'brauche', role: 'verb', highlight: true },
            { text: 'eine Überweisung zum Hautarzt.', role: 'mittelfeld' },
          ],
          caption: 'Überweisung zu + Dativ — name the specialist you need.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Asking for documents',
          phrases: [
            'Ich brauche eine Überweisung zum Facharzt.',
            'Können Sie mich bitte krankschreiben?',
            'Wie lange bin ich krankgeschrieben?',
            'Brauche ich ein Attest für die Schule?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Beim Hausarzt',
        level: 'A2',
        lines: [
          { speaker: 'Ärztin', speakerGender: 'die',
            de: 'Der Ausschlag sollte sich ein Spezialist ansehen. Ich schreibe Ihnen eine Überweisung.',
            en: 'A specialist should look at that rash. I’ll write you a referral.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Danke. Und können Sie mich für diese Woche krankschreiben?',
            en: 'Thank you. And can you write me off sick for this week?' },
          { speaker: 'Ärztin', speakerGender: 'die',
            de: 'Ja, bis Freitag. Die Krankschreibung geht digital an Ihre Krankenkasse.',
            en: 'Yes, until Friday. The sick note goes digitally to your health insurer.' },
          { speaker: 'Patient', speakerGender: 'der',
            de: 'Muss ich meinem Arbeitgeber etwas geben?',
            en: 'Do I need to give my employer anything?' },
          { speaker: 'Ärztin', speakerGender: 'die',
            de: 'Nur Bescheid sagen — die Daten ruft er elektronisch ab.',
            en: 'Just let them know — they retrieve the data electronically.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · an den Arbeitgeber',
        parts: [
          { label: 'Nachricht',
            de: 'Guten Morgen Frau Klein, ich bin leider krank und bis Freitag krankgeschrieben. Die Krankmeldung läuft digital über die Krankenkasse. Viele Grüße, Anna Becker',
            en: 'Good morning Ms. Klein, unfortunately I’m ill and signed off until Friday. The sick note is processed digitally via the health insurer. Best regards, Anna Becker' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'rufe', role: 'verb', highlight: true },
            { text: 'an, weil ich seit sechs Wochen auf einen Termin', role: 'mittelfeld' },
            { text: 'warte.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'weil sends the verb to the end — and seit + Dativ makes the wait concrete.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Chasing appointments and costs',
          phrases: [
            'Ich warte seit sechs Wochen auf einen Termin — geht es auch früher?',
            'Können Sie mich auf die Warteliste setzen?',
            'Wie hoch ist die Zuzahlung für das Medikament?',
            'Wann bekomme ich den Befund?',
            'Ich habe über die 116 117 einen Termin bekommen.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Terminjagd beim Facharzt',
        level: 'B1',
        lines: [
          { speaker: 'Praxis', speakerGender: 'die',
            de: 'Praxis Dr. Schmidt, guten Tag. Der nächste freie Termin ist in drei Monaten.',
            en: 'Dr. Schmidt’s practice, good day. The next free appointment is in three months.' },
          { speaker: 'Patientin', speakerGender: 'die',
            de: 'Das ist sehr lang. Ich habe eine Überweisung mit Dringlichkeit — ändert das etwas?',
            en: 'That’s very long. I have an urgent referral — does that change anything?' },
          { speaker: 'Praxis', speakerGender: 'die',
            de: 'Mit einem Dringlichkeitscode können Sie über die Terminservicestelle einen früheren Termin bekommen.',
            en: 'With an urgency code you can get an earlier appointment via the appointment service.' },
          { speaker: 'Patientin', speakerGender: 'die',
            de: 'Gut, das mache ich. Können Sie mich trotzdem auf Ihre Warteliste setzen, falls etwas frei wird?',
            en: 'Good, I’ll do that. Can you still put me on your waiting list in case something opens up?' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Terminanfrage Facharzt',
        to: 'praxis@neurologie-mitte.de',
        subject: 'Terminanfrage mit Überweisung',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrtes Praxisteam,', en: 'Dear practice team,' },
          { label: 'Anliegen',
            de: 'ich habe eine Überweisung von meiner Hausärztin und möchte einen Termin vereinbaren.',
            en: 'I have a referral from my GP and would like to arrange an appointment.' },
          { label: 'Information',
            de: 'Ich bin zeitlich flexibel und kann auch kurzfristig kommen, falls ein Termin frei wird.',
            en: 'I am flexible and can also come at short notice if an appointment becomes free.',
            highlight: 'falls ein Termin frei wird' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Mention the Überweisung up front',
          'Offer flexibility — it genuinely speeds things up',
          'falls-clause for the short-notice option',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Kostenübernahme', role: 'pos1' },
            { text: 'muss', role: 'verb', highlight: true },
            { text: 'vor Beginn der Behandlung', role: 'mittelfeld' },
            { text: 'beantragt werden.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal + passive infinitive — how the Krankenkasse phrases its rules.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Approvals and second opinions',
          phrases: [
            'Ich beantrage die Kostenübernahme für eine Psychotherapie.',
            'Wie lange dauert die Bearbeitung des Antrags?',
            'Wurde der Antrag bewilligt oder abgelehnt?',
            'Ich möchte eine Zweitmeinung einholen.',
            'Gegen die Ablehnung lege ich Widerspruch ein.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Mit der Krankenkasse',
        level: 'B2',
        lines: [
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Sie möchten eine Therapie beginnen? Dann brauchen wir den Antrag auf Kostenübernahme und den Befundbericht.',
            en: 'You’d like to start therapy? Then we need the application for cost coverage and the medical report.' },
          { speaker: 'Versicherte', speakerGender: 'die',
            de: 'Den Befundbericht habe ich. Wie lange dauert die Bearbeitung in der Regel?',
            en: 'I have the medical report. How long does processing usually take?' },
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Drei bis fünf Wochen. Wenn ein Gutachten nötig ist, kann es länger dauern.',
            en: 'Three to five weeks. If an expert assessment is needed, it can take longer.' },
          { speaker: 'Versicherte', speakerGender: 'die',
            de: 'Und falls der Antrag abgelehnt wird — welche Möglichkeiten habe ich dann?',
            en: 'And if the application is rejected — what options do I have then?' },
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Sie können innerhalb eines Monats Widerspruch einlegen. Das steht dann auch im Bescheid.',
            en: 'You can object within one month. That will also be stated in the decision letter.' },
        ],
      },
      writing: {
        kind: 'letter',
        level: 'B2',
        title: 'Brief · Antrag auf Kostenübernahme',
        parts: [
          { label: 'Betreff',
            de: 'Antrag auf Kostenübernahme — Versichertennummer A123456789',
            en: 'Application for cost coverage — insurance number A123456789' },
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Antrag',
            de: 'hiermit beantrage ich die Übernahme der Kosten für eine ambulante Psychotherapie.',
            en: 'I hereby apply for coverage of the costs of outpatient psychotherapy.',
            highlight: 'beantrage ich die Übernahme der Kosten' },
          { label: 'Begründung',
            de: 'Den Befundbericht meiner Hausärztin sowie die Empfehlung des Therapeuten füge ich bei. Eine zeitnahe Behandlung ist aus ärztlicher Sicht dringend erforderlich.',
            en: 'I enclose my GP’s report and the therapist’s recommendation. From a medical point of view, timely treatment is urgently required.' },
          { label: 'Bitte',
            de: 'Bitte teilen Sie mir Ihre Entscheidung schriftlich mit.',
            en: 'Please inform me of your decision in writing.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Versichertennummer in the Betreff',
          'Fixed formula (hiermit beantrage ich)',
          'Evidence named and enclosed',
          'Urgency stated with a medical anchor',
        ],
      },
      challenge:
        'Call the 116 117 (or role-play it) and book — or ask about — a Facharzttermin ' +
        'entirely in German, including your Dringlichkeitscode.',
    },
  },

  foundationLinks: [
    { label: 'Passive + modal (muss beantragt werden)', foundationSlug: 'passive' },
    { label: 'weil / falls → verb to the end', foundationSlug: 'connectors' },
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'verbklammer' },
  ],

  hero: {
    src: '/images/doctor-arzt.png',
    caption: 'Facharzt & Überweisung — the paper trail between doctors.',
    alt: 'A referral slip and health insurance card on a clinic reception counter',
  },
};
