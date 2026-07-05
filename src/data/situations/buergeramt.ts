import type { Situation } from '../../content/schema';

export const buergeramt: Situation = {
  slug: 'buergeramt',
  theme: 'Government',
  category: 'Official life',
  title: 'Bürgeramt',
  intro:
    'Navigating a German government office: confirming your appointment, understanding ' +
    'document requirements, handling missing paperwork, and at higher levels comparing ' +
    'procedures, rescheduling appointments, and clarifying official processing timelines.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can arrive at a German Bürgeramt, state my appointment details, follow instructions ' +
    'from staff, and handle setbacks like missing documents — without giving up and switching ' +
    'to English when things get complicated.',

  vocab: [
    {
      label: 'A1 · Terminmanagement',
      items: [
        { gender: 'der', word: 'Termin', meaning: 'appointment', plural: 'Termine' },
        { gender: 'die', word: 'Terminbestätigung', meaning: 'appointment confirmation', plural: 'Terminbestätigungen' },
        { gender: 'die', word: 'Terminbuchung', meaning: 'appointment booking' },
        { gender: 'die', word: 'Wartenummer', meaning: 'queue number / ticket', plural: 'Wartenummern' },
        { gender: 'die', word: 'Wartezeit', meaning: 'waiting time', plural: 'Wartezeiten' },
        { gender: 'der', word: 'Schalter', meaning: 'counter / desk', plural: 'Schalter' },
      ],
    },
    {
      label: 'A2 · Dokumente & Formulare',
      items: [
        { gender: 'das', word: 'Formular', meaning: 'form', plural: 'Formulare' },
        { gender: 'der', word: 'Ausweis', meaning: 'ID card', plural: 'Ausweise' },
        { gender: 'der', word: 'Reisepass', meaning: 'passport', plural: 'Reisepässe' },
        { gender: 'der', word: 'Bescheid', meaning: 'official decision / notification', plural: 'Bescheide' },
        { gender: 'die', word: 'Unterlage', meaning: 'document / paperwork', plural: 'Unterlagen' },
      ],
    },
    {
      label: 'B1 · Prozesse',
      items: [
        { gender: 'die', word: 'beantragen', meaning: 'to apply for', note: 'Ich beantrage einen neuen Ausweis.' },
        { gender: 'die', word: 'nachreichen', meaning: 'to submit later / hand in after the fact', note: 'separable: Ich reiche das nach.' },
        { gender: 'die', word: 'ausfüllen', meaning: 'to fill in (a form)', note: 'separable: Ich fülle das Formular aus.' },
        { gender: 'die', word: 'unterschreiben', meaning: 'to sign', note: 'separable: Ich unterschreibe hier.' },
        { gender: 'die', word: 'Bearbeitungszeit', meaning: 'processing time', plural: 'Bearbeitungszeiten' },
        { gender: 'der', word: 'Antrag', meaning: 'application / request', plural: 'Anträge' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'State your appointment time and name at reception.',
      example: 'Ich habe einen Termin um 10 Uhr. Mein Name ist …',
    },
    {
      level: 'A2',
      canDo: 'Ask what documents to bring and confirm you have them.',
      example: 'Was muss ich mitbringen?',
    },
    {
      level: 'B1',
      canDo: 'Explain a missing document and ask what to do next.',
      example: 'Mir fehlt leider das Formular. Was kann ich tun?',
    },
    {
      level: 'B2',
      canDo: 'Reschedule an appointment, ask about processing times, and compare procedures.',
      example: 'Wie lange dauert die Bearbeitung, und kann ich in der Zwischenzeit eine Bescheinigung bekommen?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can state my appointment time and name at the counter.', achieved: true },
    { level: 'A2', text: 'I can ask what documents I need and confirm I have them.', achieved: true },
    { level: 'B1', text: 'I can explain a missing document and ask what my options are.', achieved: false },
    { level: 'B2', text: 'I can reschedule, query processing times, and ask about workarounds.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'einen Termin', role: 'mittelfeld' },
            { text: 'um 10 Uhr.', role: 'satzende' },
          ],
          caption: 'Stating your appointment — simple present tense.',
        },
        {
          slots: [
            { text: 'Mein Name', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: '[Ihr Name].', role: 'mittelfeld' },
          ],
          caption: 'Giving your name — one of the most useful sentences at any counter.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Arriving and identifying yourself',
          phrases: [
            'Ich habe einen Termin um … Uhr.',
            'Mein Name ist …',
            'Ich bin hier für die Anmeldung.',
            'Wo ist der Schalter für …?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Am Schalter',
        level: 'A1',
        lines: [
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Guten Tag! Kann ich Ihnen helfen?', en: 'Good day! Can I help you?' },
          { speaker: 'Tom', speakerGender: 'der', de: 'Ja, ich habe einen Termin um 10 Uhr.', en: 'Yes, I have an appointment at 10 o\'clock.' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Wie ist Ihr Name?', en: 'What is your name?' },
          { speaker: 'Tom', speakerGender: 'der', de: 'Mein Name ist Tom Bauer.', en: 'My name is Tom Bauer.' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Wofür sind Sie hier?', en: 'What are you here for?' },
          { speaker: 'Tom', speakerGender: 'der', de: 'Ich bin hier für die Anmeldung.', en: 'I\'m here for the address registration.' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die', de: 'Haben Sie Ihren Ausweis dabei?', en: 'Do you have your ID with you?' },
          { speaker: 'Tom', speakerGender: 'der', de: 'Ja, hier ist mein Ausweis.', en: 'Yes, here is my ID.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Checkliste · Bürgeramt',
        parts: [
          { label: 'Termin', de: 'Ich habe einen Termin um … Uhr.', en: 'I have an appointment at … o\'clock.' },
          { label: 'Ausweis', de: 'der Ausweis / der Reisepass', en: 'ID card / passport' },
          { label: 'Schalter', de: 'Wo ist Schalter …?', en: 'Where is counter …?' },
          { label: 'Name', de: 'Mein Name ist …', en: 'My name is …' },
          { label: 'Frage', de: 'Was muss ich jetzt tun?', en: 'What do I have to do now?' },
        ],
      },
      challenge:
        'Practise saying your appointment time and name out loud before your next Bürgeramt visit — arriving prepared makes everything calmer.',
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Was', role: 'pos1' },
            { text: 'muss', role: 'verb', highlight: true },
            { text: 'ich', role: 'mittelfeld' },
            { text: 'mitbringen?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal verb bracket: muss in P2, infinitive at the end.',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'alles', role: 'mittelfeld' },
            { text: 'mitgebracht.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Perfekt: haben in P2, Partizip II at the end.',
        },
      ],
      dialogue: {
        title: 'Dialog · Ankunft beim Bürgeramt',
        level: 'A2',
        lines: [
          {
            speaker: 'Mitarbeiterin',
            speakerGender: 'die',
            de: 'Guten Morgen. Haben Sie einen Termin?',
            en: 'Good morning. Do you have an appointment?',
          },
          {
            speaker: 'Bürgerin',
            speakerGender: 'die',
            de: 'Ja. Ich habe einen Termin um 10:30 Uhr. Mein Name ist Yildiz.',
            en: 'Yes. I have an appointment at 10:30. My name is Yildiz.',
          },
          {
            speaker: 'Mitarbeiterin',
            speakerGender: 'die',
            de: 'Moment bitte … ja, ich sehe den Termin. Bitte gehen Sie zu Schalter 4.',
            en: 'One moment please … yes, I can see the appointment. Please go to counter 4.',
          },
          {
            speaker: 'Bürgerin',
            speakerGender: 'die',
            de: 'Danke. Was muss ich mitbringen?',
            en: 'Thank you. What do I need to bring?',
          },
          {
            speaker: 'Mitarbeiterin',
            speakerGender: 'die',
            de: 'Sie brauchen Ihren Ausweis oder Reisepass und das ausgefüllte Formular.',
            en: 'You need your ID or passport and the completed form.',
          },
          {
            speaker: 'Bürgerin',
            speakerGender: 'die',
            de: 'Ich habe alles mitgebracht. Danke!',
            en: 'I have brought everything. Thank you!',
          },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Confirming your appointment',
          phrases: [
            'Ich habe einen Termin um … Uhr.',
            'Meine Terminbestätigung ist hier.',
            'Wo ist Schalter …?',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Checking document requirements',
          phrases: [
            'Was muss ich mitbringen?',
            'Brauche ich auch …?',
            'Reicht der Reisepass?',
            'Muss das Formular ausgefüllt sein?',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · Termin bestätigen',
        parts: [
          { label: 'Opener', de: 'Hey! Kurze Info: Ich habe morgen einen Termin beim Bürgeramt um 10 Uhr.', en: 'Hey! Quick info: I have an appointment at the Bürgeramt tomorrow at 10.' },
          { label: 'Unterlagen', de: 'Ich muss meinen Reisepass und das Formular mitbringen.', en: 'I have to bring my passport and the form.', highlight: 'muss meinen Reisepass' },
          { label: 'Bitte', de: 'Kannst du mich erinnern, wenn ich es vergesse? 😅', en: 'Can you remind me if I forget? 😅' },
          { label: 'Gruß', de: 'Danke! Bis später. 😊', en: 'Thanks! See you later.' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Mir fehlt leider', role: 'pos1' },
            { text: 'das Formular.', role: 'mittelfeld' },
            { text: 'Was', role: 'satzende' },
            { text: 'kann', role: 'verb', highlight: true },
            { text: 'ich', role: 'mittelfeld' },
            { text: 'tun?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Stating a problem, then asking what to do — two simple sentences chained.',
        },
        {
          slots: [
            { text: 'Kann', role: 'pos1', highlight: true },
            { text: 'ich', role: 'mittelfeld' },
            { text: 'das', role: 'mittelfeld' },
            { text: 'nachreichen?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'nachreichen — separable verb at the end of the bracket.',
        },
      ],
      dialogue: {
        title: 'Dialog · Fehlende Unterlage',
        level: 'B1',
        lines: [
          {
            speaker: 'Sachbearbeiter',
            speakerGender: 'der',
            de: 'Guten Morgen. Was kann ich für Sie tun?',
            en: 'Good morning. What can I do for you?',
          },
          {
            speaker: 'Bürger',
            speakerGender: 'der',
            de: 'Ich habe einen Termin für die Ummeldung, aber mir fehlt leider das ausgefüllte Formular. Ich hatte es zu Hause vergessen.',
            en: 'I have an appointment for changing my address, but unfortunately I am missing the completed form. I forgot it at home.',
          },
          {
            speaker: 'Sachbearbeiter',
            speakerGender: 'der',
            de: 'Das Formular brauchen wir leider zwingend. Können Sie noch mal nach Hause fahren und es holen?',
            en: 'Unfortunately we definitely need the form. Can you go back home and fetch it?',
          },
          {
            speaker: 'Bürger',
            speakerGender: 'der',
            de: 'Das ist leider schwierig — ich wohne weit weg. Kann ich das Formular hier ausfüllen?',
            en: 'That is unfortunately difficult — I live far away. Can I fill in the form here?',
          },
          {
            speaker: 'Sachbearbeiter',
            speakerGender: 'der',
            de: 'Ja, das ist möglich. Wir haben Formulare hier am Schalter. Das dauert aber etwa zehn Minuten.',
            en: 'Yes, that is possible. We have forms here at the counter. But it will take about ten minutes.',
          },
          {
            speaker: 'Bürger',
            speakerGender: 'der',
            de: 'Das ist kein Problem. Kann ich danach gleich weitermachen, oder bekomme ich eine neue Wartenummer?',
            en: 'That is no problem. Can I continue straight after, or do I get a new queue number?',
          },
          {
            speaker: 'Sachbearbeiter',
            speakerGender: 'der',
            de: 'Sie können direkt zu mir zurückkommen. Ich notiere Ihren Fall.',
            en: 'You can come straight back to me. I will make a note of your case.',
          },
          {
            speaker: 'Bürger',
            speakerGender: 'der',
            de: 'Vielen Dank. Und wie lange dauert die Bearbeitung nach der Ummeldung?',
            en: 'Many thanks. And how long does the processing take after the change of address?',
          },
          {
            speaker: 'Sachbearbeiter',
            speakerGender: 'der',
            de: 'Sie bekommen die Meldebescheinigung sofort — noch heute.',
            en: 'You will get the registration certificate immediately — still today.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Explaining a missing document',
          phrases: [
            'Mir fehlt leider das Formular.',
            'Ich hatte es zu Hause vergessen.',
            'Kann ich das hier ausfüllen?',
            'Kann ich das nachreichen?',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Asking about next steps',
          phrases: [
            'Was kann ich tun?',
            'Wie lange dauert die Bearbeitung?',
            'Wann bekomme ich den Bescheid?',
            'Brauche ich einen neuen Termin?',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Terminanfrage',
        to: 'buergeramt@musterstadt.de',
        subject: 'Anfrage: Unterlagen für Ummeldung',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'ich möchte mich umzumelden, weil ich vor zwei Wochen in die Musterstraße 5 umgezogen bin.',
            en: 'I would like to change my registered address because I moved to Musterstraße 5 two weeks ago.',
            highlight: 'weil ich vor zwei Wochen in die Musterstraße 5 umgezogen bin' },
          { label: 'Bitte',
            de: 'Könnten Sie mir bitte mitteilen, welche Unterlagen ich für die Ummeldung benötige?',
            en: 'Could you please let me know which documents I need for the change of address?',
            highlight: 'Könnten Sie mir bitte mitteilen' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nKlaus Berger', en: 'Kind regards, Klaus Berger' },
        ],
        checklist: [
          'States reason with weil (verb at end)',
          'Polite request with Könnten Sie…',
          'Concise and clear — one question only',
          'Formal greeting and closing',
        ],
      },
      challenge:
        'Think of the one document you\'re most likely to forget — and practise saying in German that it\'s missing and asking what you can do. That one sentence could save your appointment.',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wie lange', role: 'pos1' },
            { text: 'dauert', role: 'verb', highlight: true },
            { text: 'die Bearbeitung', role: 'mittelfeld' },
            { text: 'in der Regel?', role: 'satzende' },
          ],
          caption: 'Asking about processing timelines — useful for any official process.',
        },
        {
          slots: [
            { text: 'Wäre es möglich,', role: 'pos1' },
            { text: 'den Termin', role: 'mittelfeld' },
            { text: 'zu verschieben?', role: 'verb-end', highlight: true },
          ],
          caption: 'Konjunktiv II wäre — a polite way to ask about rescheduling.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Rescheduling and timelines',
          phrases: [
            'Wäre es möglich, den Termin zu verschieben?',
            'Wie lange dauert die Bearbeitung in der Regel?',
            'Ich brauche den Bescheid bis … — ist das realistisch?',
            'Kann ich eine vorläufige Bescheinigung bekommen?',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Comparing and clarifying procedures',
          phrases: [
            'Was ist der Unterschied zwischen Anmeldung und Ummeldung?',
            'Gilt dieses Verfahren auch für nicht-EU-Bürger?',
            'Gibt es eine digitale Option für diesen Antrag?',
            'An wen kann ich mich wenden, wenn es Probleme gibt?',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Terminverschiebung',
        to: 'buergeramt@berlin.de',
        subject: 'Terminverschiebung — Antrag auf neuen Termin',
        parts: [
          {
            label: 'Anrede',
            de: 'Sehr geehrte Damen und Herren,',
            en: 'Dear Sir or Madam,',
          },
          {
            label: 'Anliegen',
            de: 'ich habe am [Datum] um [Uhrzeit] einen Termin bei Ihnen gebucht (Buchungsnummer: [Nummer]). Leider bin ich aufgrund eines unvorhergesehenen Terminkonflikts verhindert und muss den Termin verschieben.',
            en: 'I have a booking with you on [date] at [time] (booking reference: [number]). Unfortunately I am unable to attend due to an unforeseen scheduling conflict and need to reschedule.',
            highlight: 'muss den Termin verschieben',
          },
          {
            label: 'Bitte',
            de: 'Wäre es möglich, mir einen neuen Termin in der darauffolgenden Woche anzubieten? Ich bin montags bis donnerstags flexibel.',
            en: 'Would it be possible to offer me a new appointment in the following week? I am flexible Monday to Thursday.',
            highlight: 'Wäre es möglich',
          },
          {
            label: 'Unterlagen',
            de: 'Für den Termin bringe ich folgende Unterlagen mit: Reisepass, ausgefülltes Formular sowie die Wohnungsgeberbestätigung.',
            en: 'For the appointment I will bring the following documents: passport, completed form, and the landlord tenancy confirmation.',
          },
          {
            label: 'Dank',
            de: 'Vielen Dank für Ihre Hilfe und Ihr Verständnis.',
            en: 'Many thanks for your help and understanding.',
          },
          {
            label: 'Gruß',
            de: 'Mit freundlichen Grüßen,\n[Ihr Name]\n[Ihre Kontaktnummer]',
            en: 'Kind regards, [Your name] [Your contact number]',
          },
        ],
        checklist: [
          'Includes booking reference number',
          'Explains the reason briefly (no need for details)',
          'Polite request with Konjunktiv II (Wäre es möglich …)',
          'States availability to help them schedule',
          'Lists documents to show you are prepared',
          'Formal closing (Mit freundlichen Grüßen)',
        ],
      },
      challenge:
        'Write a rescheduling email to a Bürgeramt using the template above. If you don\'t have a real appointment to reschedule, invent the details — the language practice is the point.',
    },
  },

  foundationLinks: [
    { label: 'Modal verbs (müssen, können, dürfen)', foundationSlug: 'modal-verbs' },
    { label: 'Konjunktiv II for polite requests', foundationSlug: 'konjunktiv' },
    { label: 'Sentence architecture', foundationSlug: 'satzbau' },
    { label: 'Verb tenses — Perfekt and Präsens', foundationSlug: 'verb-tenses' },
  ],

  hero: {
    caption: 'Bürgeramt — navigating German bureaucracy one counter at a time.',
    alt: 'A waiting area at a German Bürgeramt with numbered counters and queue system',
  },
};
