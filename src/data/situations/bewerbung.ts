import type { Situation } from '../../content/schema';

export const bewerbung: Situation = {
  slug: 'bewerbung',
  theme: 'Work',
  subtheme: 'Bewerbung',
  category: 'Professional life',
  title: 'Bewerbung',
  intro:
    'Applying for a job in German: reading a Stellenanzeige, assembling Lebenslauf and ' +
    'Anschreiben, submitting your Unterlagen before the Frist, and following up when ' +
    'the Rückmeldung takes too long.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can find a Stellenanzeige, understand what it asks for, send a complete German ' +
    'application with a real Anschreiben, and follow up professionally — from search ' +
    'to Zusage.',

  vocab: [
    {
      label: 'A1 · Die Stelle',
      items: [
        { gender: 'die', word: 'Arbeit', meaning: 'work' },
        { gender: 'der', word: 'Job', meaning: 'job', plural: 'Jobs' },
        { gender: 'die', word: 'Stelle', meaning: 'position / post', plural: 'Stellen' },
        { gender: 'die', word: 'Firma', meaning: 'company', plural: 'Firmen' },
        { gender: 'verb', word: 'suchen', meaning: 'to look for', note: 'Ich suche eine Stelle.' },
        { gender: 'verb', word: 'arbeiten als', meaning: 'to work as' },
      ],
    },
    {
      label: 'A2 · Die Unterlagen',
      items: [
        { gender: 'die', word: 'Bewerbung', meaning: 'application', plural: 'Bewerbungen' },
        { gender: 'der', word: 'Lebenslauf', meaning: 'CV / résumé', plural: 'Lebensläufe' },
        { gender: 'das', word: 'Anschreiben', meaning: 'cover letter', plural: 'Anschreiben' },
        { gender: 'das', word: 'Zeugnis', meaning: 'certificate / reference', plural: 'Zeugnisse' },
        { gender: 'das', word: 'Stellenangebot', meaning: 'job listing', plural: 'Stellenangebote', note: 'also: die Stellenanzeige' },
        { gender: 'verb', word: 'sich bewerben', meaning: 'to apply', note: 'Ich bewerbe mich.' },
      ],
    },
    {
      label: 'B1 · Sich bewerben',
      items: [
        { gender: 'verb', word: 'sich bewerben als + N / bei + D / um + A', meaning: 'apply as (role) / at (company) / for (position)', note: 'Ich bewerbe mich als Designerin bei Bosch um die ausgeschriebene Stelle.' },
        { gender: 'die', word: 'Berufserfahrung', meaning: 'work experience' },
        { gender: 'die', word: 'Qualifikation', meaning: 'qualification', plural: 'Qualifikationen' },
        { gender: 'pl', word: 'Kenntnisse', meaning: 'skills / knowledge', note: 'Deutschkenntnisse, EDV-Kenntnisse' },
        { gender: 'die', word: 'Anlage', meaning: 'attachment / enclosure', plural: 'Anlagen' },
        { gender: 'die', word: 'Frist', meaning: 'deadline', plural: 'Fristen', note: 'die Bewerbungsfrist' },
        { gender: 'verb', word: 'einreichen', meaning: 'to submit', note: 'separable: Ich reiche die Bewerbung ein.' },
      ],
    },
    {
      label: 'B2 · Nach der Bewerbung',
      items: [
        { gender: 'die', word: 'Zusage ↔ Absage', meaning: 'acceptance ↔ rejection', note: 'Ich habe eine Zusage bekommen!' },
        { gender: 'die', word: 'Rückmeldung', meaning: 'response / feedback', plural: 'Rückmeldungen' },
        { gender: 'verb', word: 'nachfragen', meaning: 'to follow up', note: 'separable: Ich frage nach dem Stand nach.' },
        { gender: 'das', word: 'Arbeitszeugnis', meaning: 'employer reference letter', plural: 'Arbeitszeugnisse' },
        { gender: 'die', word: 'Gehaltsvorstellung', meaning: 'salary expectation', plural: 'Gehaltsvorstellungen' },
        { gender: 'die', word: 'Probezeit', meaning: 'probation period' },
        { gender: 'verb', word: 'unbefristet ↔ befristet', meaning: 'permanent ↔ fixed-term (contract)' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Say what work you are looking for.',
      example: 'Ich suche eine Stelle als Verkäuferin.',
    },
    {
      level: 'A2',
      canDo: 'Name your documents and ask what the application needs.',
      example: 'Ich schicke meinen Lebenslauf und das Anschreiben.',
    },
    {
      level: 'B1',
      canDo: 'Write a basic application email and describe your experience.',
      example: 'Ich bewerbe mich um die ausgeschriebene Stelle, weil ich drei Jahre Erfahrung habe.',
    },
    {
      level: 'B2',
      canDo: 'Write a persuasive Anschreiben, state salary expectations, and follow up.',
      example: 'Meine Gehaltsvorstellung liegt bei 48.000 Euro brutto im Jahr.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can say what job I am looking for.', achieved: true },
    { level: 'A2', text: 'I can name every document a German application needs.', achieved: true },
    { level: 'B1', text: 'I can send a complete application with a short cover email.', achieved: false },
    { level: 'B2', text: 'I can write a real Anschreiben and negotiate the follow-up.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'suche', role: 'verb', highlight: true },
            { text: 'eine Stelle als Köchin.', role: 'mittelfeld' },
          ],
          caption: 'suchen + als + profession — no article after als.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Talking about the search',
          phrases: [
            'Ich suche Arbeit.',
            'Ich suche eine Stelle als …',
            'Ist die Stelle noch frei?',
            'Wo kann ich mich bewerben?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Nachfrage im Laden',
        level: 'A1',
        lines: [
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Guten Tag. Ich habe das Schild gesehen — suchen Sie noch Personal?',
            en: 'Good day. I saw the sign — are you still looking for staff?' },
          { speaker: 'Chef', speakerGender: 'der',
            de: 'Ja, wir suchen eine Verkäuferin für den Nachmittag.',
            en: 'Yes, we’re looking for a salesperson for the afternoons.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Das passt gut! Wie kann ich mich bewerben?',
            en: 'That works well! How can I apply?' },
          { speaker: 'Chef', speakerGender: 'der',
            de: 'Bringen Sie einfach Ihren Lebenslauf vorbei.',
            en: 'Just drop off your CV.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Bewerbung vorbereiten',
        parts: [
          { label: 'Notiz',
            de: 'Bewerbung Bäckerei Krüger: Lebenslauf ausdrucken, Foto, Zeugnis. Bis Freitag abgeben!',
            en: 'Application for Krüger bakery: print CV, photo, certificate. Hand in by Friday!' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'mich um die Stelle', role: 'mittelfeld' },
            { text: 'bewerben.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'sich bewerben um + Akkusativ — the reflexive pronoun stays close to the subject.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Asking about the application',
          phrases: [
            'Welche Unterlagen brauchen Sie?',
            'Ich schicke Ihnen meinen Lebenslauf per E-Mail.',
            'Bis wann kann ich mich bewerben?',
            'Brauchen Sie auch meine Zeugnisse?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Anruf zur Stellenanzeige',
        level: 'A2',
        lines: [
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'Café Sonne, guten Tag.',
            en: 'Café Sonne, good day.' },
          { speaker: 'Bewerber', speakerGender: 'der',
            de: 'Guten Tag. Ich rufe wegen Ihrer Stellenanzeige an. Ist die Stelle noch frei?',
            en: 'Good day. I’m calling about your job ad. Is the position still open?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'Ja! Schicken Sie uns bitte Ihren Lebenslauf und ein kurzes Anschreiben.',
            en: 'Yes! Please send us your CV and a short cover letter.' },
          { speaker: 'Bewerber', speakerGender: 'der',
            de: 'Gern. An welche E-Mail-Adresse?',
            en: 'Gladly. To which email address?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'An bewerbung@cafe-sonne.de. Wir melden uns dann nächste Woche.',
            en: 'To bewerbung@cafe-sonne.de. We’ll get back to you next week.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi Tom, ich habe heute meine Bewerbung ans Café Sonne geschickt — Lebenslauf, Anschreiben, alles dabei. Drück mir die Daumen! LG, Anna',
            en: 'Hi Tom, I sent my application to Café Sonne today — CV, cover letter, everything. Fingers crossed! Best, Anna' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'bewerbe', role: 'verb', highlight: true },
            { text: 'mich um die ausgeschriebene Stelle,', role: 'mittelfeld' },
            { text: 'weil ich drei Jahre Erfahrung habe.', role: 'satzende' },
          ],
          caption: 'The application sentence + weil-clause — position and reason in one line.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Describing yourself',
          phrases: [
            'Ich habe drei Jahre Berufserfahrung als …',
            'Ich habe gute Deutschkenntnisse (Niveau B1).',
            'Zu meinen Stärken gehören Teamarbeit und Zuverlässigkeit.',
            'Meine Unterlagen finden Sie in der Anlage.',
            'Ich kann ab dem 1. September anfangen.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Bei der Arbeitsagentur',
        level: 'B1',
        lines: [
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Ihre Unterlagen sehen gut aus. Haben Sie schon Bewerbungen verschickt?',
            en: 'Your documents look good. Have you already sent applications?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Ja, fünf in den letzten zwei Wochen. Zwei Absagen, drei ohne Antwort.',
            en: 'Yes, five in the last two weeks. Two rejections, three no reply.' },
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Das ist normal. Passen Sie das Anschreiben immer an die Stelle an?',
            en: 'That’s normal. Do you always adapt the cover letter to the position?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Ehrlich gesagt schicke ich fast immer den gleichen Text.',
            en: 'Honestly, I almost always send the same text.' },
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Dann ändern wir das: Nehmen Sie zwei Anforderungen aus der Anzeige und zeigen Sie, dass Sie genau die erfüllen.',
            en: 'Then let’s change that: take two requirements from the ad and show that you meet exactly those.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Bewerbung schicken',
        to: 'bewerbung@cafe-sonne.de',
        subject: 'Bewerbung als Verkäuferin — Anna Becker',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Frau Krüger,', en: 'Dear Ms. Krüger,' },
          { label: 'Anliegen',
            de: 'hiermit bewerbe ich mich um die Stelle als Verkäuferin, die Sie auf Ihrer Webseite ausgeschrieben haben.',
            en: 'I am applying for the sales position you advertised on your website.',
            highlight: 'bewerbe ich mich um die Stelle' },
          { label: 'Kurzprofil',
            de: 'Ich habe zwei Jahre Erfahrung im Verkauf und arbeite gern mit Kunden. Meinen Lebenslauf und meine Zeugnisse finden Sie in der Anlage.',
            en: 'I have two years of sales experience and enjoy working with customers. You will find my CV and certificates attached.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Position + where you found it in sentence one',
          'One or two lines of relevant experience — not your life story',
          'Name the attachments (in der Anlage)',
          'Position and your name in the subject line',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Meine Gehaltsvorstellung', role: 'pos1' },
            { text: 'liegt', role: 'verb', highlight: true },
            { text: 'bei 48.000 Euro brutto', role: 'mittelfeld' },
            { text: 'im Jahr.', role: 'satzende' },
          ],
          caption: 'liegen bei + Dativ — the fixed formula for salary expectations.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Anschreiben power phrases',
          phrases: [
            'Mit großem Interesse habe ich Ihre Stellenanzeige gelesen.',
            'In meiner jetzigen Position verantworte ich …',
            'Besonders reizt mich an der Stelle, dass …',
            'Gern überzeuge ich Sie in einem persönlichen Gespräch.',
            'Meine Kündigungsfrist beträgt drei Monate zum Quartalsende.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Following up',
          phrases: [
            'Ich wollte mich nach dem Stand meiner Bewerbung erkundigen.',
            'Gibt es schon eine Rückmeldung zu meiner Bewerbung vom 3. Mai?',
            'Bis wann darf ich mit einer Entscheidung rechnen?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Nachfassen am Telefon',
        level: 'B2',
        lines: [
          { speaker: 'Personalerin', speakerGender: 'die',
            de: 'Personalabteilung, Weber.',
            en: 'HR department, Weber speaking.' },
          { speaker: 'Bewerber', speakerGender: 'der',
            de: 'Guten Tag, mein Name ist Becker. Ich habe mich vor drei Wochen als Projektassistent beworben und wollte mich nach dem Stand erkundigen.',
            en: 'Good day, my name is Becker. I applied three weeks ago as a project assistant and wanted to ask about the status.' },
          { speaker: 'Personalerin', speakerGender: 'die',
            de: 'Einen Moment … Ihre Bewerbung ist in der engeren Auswahl. Die Gespräche finden nächste Woche statt.',
            en: 'One moment … your application is on the shortlist. The interviews take place next week.' },
          { speaker: 'Bewerber', speakerGender: 'der',
            de: 'Das freut mich sehr. Ich bin flexibel — auch kurzfristige Termine sind kein Problem.',
            en: 'I’m very glad to hear that. I’m flexible — short-notice appointments are no problem.' },
          { speaker: 'Personalerin', speakerGender: 'die',
            de: 'Gut zu wissen. Sie hören diese Woche noch von uns.',
            en: 'Good to know. You’ll hear from us this week.' },
        ],
      },
      writing: {
        kind: 'letter',
        level: 'B2',
        title: 'Anschreiben · das Herzstück',
        parts: [
          { label: 'Betreff',
            de: 'Bewerbung als UX-Designerin — Referenznummer 2026-084',
            en: 'Application as UX designer — reference number 2026-084' },
          { label: 'Anrede', de: 'Sehr geehrte Frau Weber,', en: 'Dear Ms. Weber,' },
          { label: 'Einstieg',
            de: 'mit großem Interesse habe ich Ihre Stellenanzeige gelesen — die Verbindung aus Design und Barrierefreiheit ist genau das Feld, in dem ich seit fünf Jahren arbeite.',
            en: 'I read your job posting with great interest — the combination of design and accessibility is exactly the field I have worked in for five years.',
            highlight: 'mit großem Interesse' },
          { label: 'Hauptteil',
            de: 'In meiner jetzigen Position verantworte ich das Design einer Plattform mit 40.000 Nutzern. Dabei habe ich die Ladezeiten halbiert und die Zufriedenheit messbar gesteigert.',
            en: 'In my current position I am responsible for the design of a platform with 40,000 users. I halved loading times and measurably increased satisfaction.' },
          { label: 'Rahmendaten',
            de: 'Meine Gehaltsvorstellung liegt bei 52.000 Euro brutto jährlich; verfügbar bin ich zum 1. Oktober.',
            en: 'My salary expectation is 52,000 euros gross per year; I am available from October 1st.' },
          { label: 'Schluss',
            de: 'Gern überzeuge ich Sie in einem persönlichen Gespräch.',
            en: 'I would be happy to convince you in a personal interview.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Referenznummer in the Betreff if the ad has one',
          'First sentence connects YOU to THIS job — never „hiermit bewerbe ich mich“ at B2',
          'One concrete, quantified achievement',
          'Gehaltsvorstellung + Verfügbarkeit only if the ad asks',
          'One page. Always one page.',
        ],
      },
      challenge:
        'Take a real Stellenanzeige from stepstone.de or indeed.de, pick the two most ' +
        'important Anforderungen, and write just the Einstieg and Hauptteil of an ' +
        'Anschreiben tailored to them.',
    },
  },

  foundationLinks: [
    { label: 'Reflexive pronouns (sich bewerben)', foundationSlug: 'pronomen' },
    { label: 'weil → giving reasons', foundationSlug: 'connectors' },
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'verbklammer' },
  ],

  hero: {
    src: '/images/interview-vorstellung.png',
    caption: 'Die Bewerbung — from Stellenanzeige to Zusage.',
    alt: 'A goblin presenting application documents across a desk',
  },
};
