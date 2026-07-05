import type { Situation } from '../../content/schema';

export const jobcenter: Situation = {
  slug: 'jobcenter',
  theme: 'Government',
  subtheme: 'Jobcenter & Arbeitsagentur',
  category: 'Official life',
  title: 'Jobcenter & Arbeitsagentur',
  intro:
    'Dealing with the Agentur für Arbeit and Jobcenter: registering as unemployed, ' +
    'understanding a Bescheid, submitting Nachweise on time, and — at higher levels — ' +
    'appealing a decision and negotiating obligations with your Vermittler.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can handle an appointment at the Arbeitsagentur, understand what a letter is ' +
    'asking me to do, send the right documents before the deadline, and push back ' +
    'politely when a decision seems wrong.',

  vocab: [
    {
      label: 'A1 · Erste Wörter am Amt',
      items: [
        { gender: 'der', word: 'Termin', meaning: 'appointment', plural: 'Termine' },
        { gender: 'der', word: 'Brief', meaning: 'letter', plural: 'Briefe' },
        { gender: 'das', word: 'Formular', meaning: 'form', plural: 'Formulare' },
        { gender: 'der', word: 'Ausweis', meaning: 'ID card', plural: 'Ausweise' },
        { gender: 'die', word: 'Nummer', meaning: 'number (queue ticket)', plural: 'Nummern' },
        { gender: 'verb', word: 'warten', meaning: 'to wait' },
      ],
    },
    {
      label: 'A2 · Antrag & Geld',
      items: [
        { gender: 'der', word: 'Antrag', meaning: 'application', plural: 'Anträge' },
        { gender: 'das', word: 'Arbeitslosengeld', meaning: 'unemployment benefit' },
        { gender: 'die', word: 'Bewerbung', meaning: 'job application', plural: 'Bewerbungen' },
        { gender: 'verb', word: 'arbeitslos sein', meaning: 'to be unemployed' },
        { gender: 'verb', word: 'sich melden', meaning: 'to register / report', note: 'Ich melde mich arbeitslos.' },
        { gender: 'das', word: 'Konto', meaning: 'bank account', plural: 'Konten' },
      ],
    },
    {
      label: 'B1 · Bescheide & Nachweise',
      items: [
        { gender: 'der', word: 'Bescheid', meaning: 'official decision letter', plural: 'Bescheide' },
        { gender: 'der', word: 'Nachweis', meaning: 'proof / supporting document', plural: 'Nachweise' },
        { gender: 'die', word: 'Frist', meaning: 'deadline', plural: 'Fristen' },
        { gender: 'die', word: 'Arbeitsbescheinigung', meaning: 'employment certificate (from your employer)' },
        { gender: 'verb', word: 'einreichen', meaning: 'to submit', note: 'separable: Ich reiche die Unterlagen ein.' },
        { gender: 'verb', word: 'nachreichen', meaning: 'to submit later', note: 'separable: Ich reiche das Dokument nach.' },
        { gender: 'pl', word: 'Unterlagen', meaning: 'documents / paperwork' },
      ],
    },
    {
      label: 'B2 · Rechte & Pflichten',
      items: [
        { gender: 'der', word: 'Widerspruch', meaning: 'formal objection / appeal', note: 'Widerspruch einlegen gegen + A' },
        { gender: 'die', word: 'Sperrzeit', meaning: 'benefit suspension period', plural: 'Sperrzeiten' },
        { gender: 'die', word: 'Eingliederungsvereinbarung', meaning: 'integration agreement (your obligations)' },
        { gender: 'die', word: 'Maßnahme', meaning: 'training / support measure', plural: 'Maßnahmen' },
        { gender: 'der', word: 'Anspruch', meaning: 'entitlement', note: 'Anspruch haben auf + A' },
        { gender: 'verb', word: 'bewilligen', meaning: 'to approve / grant' },
        { gender: 'verb', word: 'ablehnen', meaning: 'to reject', note: 'separable: Der Antrag wurde abgelehnt.' },
        { gender: 'die', word: 'Mitwirkungspflicht', meaning: 'duty to cooperate' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'State your name and appointment, and hand over a form.',
      example: 'Ich habe einen Termin um 9 Uhr. Hier ist mein Formular.',
    },
    {
      level: 'A2',
      canDo: 'Say that you are unemployed and ask how to apply for benefits.',
      example: 'Ich bin arbeitslos. Wie beantrage ich Arbeitslosengeld?',
    },
    {
      level: 'B1',
      canDo: 'Understand what a letter requires and submit missing documents before a deadline.',
      example: 'Ich reiche die Arbeitsbescheinigung bis Freitag nach.',
    },
    {
      level: 'B2',
      canDo: 'Question a decision, ask about your entitlement, and formally object.',
      example: 'Gegen diesen Bescheid lege ich Widerspruch ein, weil die Berechnung nicht stimmt.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can check in for an appointment and hand over documents.', achieved: true },
    { level: 'A2', text: 'I can explain my situation and ask how to apply.', achieved: true },
    { level: 'B1', text: 'I can read a Bescheid and respond before the Frist.', achieved: false },
    { level: 'B2', text: 'I can write a Widerspruch and negotiate my obligations.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'einen Termin', role: 'mittelfeld' },
            { text: 'um 9 Uhr.', role: 'satzende' },
          ],
          caption: 'Checking in — the same sentence works at every German office.',
        },
        {
          slots: [
            { text: 'Hier', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'mein Formular.', role: 'mittelfeld' },
          ],
          caption: 'Handing something over — Hier ist … / Hier sind …',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Arriving and asking for basics',
          phrases: [
            'Ich habe einen Termin um … Uhr.',
            'Wo muss ich warten?',
            'Hier ist mein Ausweis.',
            'Können Sie das bitte langsam sagen?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Am Empfang',
        level: 'A1',
        lines: [
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Guten Morgen. Haben Sie einen Termin?',
            en: 'Good morning. Do you have an appointment?' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Ja, um 9 Uhr. Mein Name ist Wegner.',
            en: 'Yes, at 9 o’clock. My name is Wegner.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Danke. Bitte ziehen Sie eine Nummer und warten Sie dort.',
            en: 'Thank you. Please take a number and wait over there.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Alles klar, danke schön.',
            en: 'All right, thank you.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · für den Termin',
        parts: [
          { label: 'Notiz',
            de: 'Termin: Donnerstag, 9 Uhr, Agentur für Arbeit. Mitbringen: Ausweis, Formular, Kontonummer.',
            en: 'Appointment: Thursday, 9 a.m., employment agency. Bring: ID, form, account number.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'Arbeitslosengeld', role: 'mittelfeld' },
            { text: 'beantragen.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'möchte + infinitive at the end — the polite way to state your Anliegen.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Explaining your situation',
          phrases: [
            'Ich bin seit dem 1. März arbeitslos.',
            'Ich möchte mich arbeitslos melden.',
            'Welche Unterlagen brauchen Sie von mir?',
            'Wann bekomme ich eine Antwort?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Arbeitslos melden',
        level: 'A2',
        lines: [
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Wie kann ich Ihnen helfen?',
            en: 'How can I help you?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Mein Vertrag endet am 31. Mai. Ich möchte mich arbeitslos melden.',
            en: 'My contract ends on May 31st. I would like to register as unemployed.' },
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Gut, dass Sie früh kommen. Füllen Sie bitte dieses Formular aus.',
            en: 'Good that you’re coming early. Please fill in this form.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Und welche Unterlagen brauchen Sie noch?',
            en: 'And which documents do you still need?' },
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Ihren Ausweis, Ihren Arbeitsvertrag und Ihre Kontonummer.',
            en: 'Your ID, your work contract, and your account number.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hallo Tim, ich kann morgen nicht kommen — ich habe um 9 Uhr einen Termin beim Jobcenter. Danach melde ich mich. LG, Anna',
            en: 'Hi Tim, I can’t come tomorrow — I have an appointment at the Jobcenter at 9. I’ll be in touch afterwards. Best, Anna' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'reiche', role: 'verb', highlight: true },
            { text: 'die Arbeitsbescheinigung bis Freitag', role: 'mittelfeld' },
            { text: 'nach.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'nachreichen is separable — the prefix closes the bracket.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Handling letters and deadlines',
          phrases: [
            'Ich habe Ihren Brief vom 3. Mai erhalten.',
            'Bis wann muss ich die Unterlagen einreichen?',
            'Mir fehlt noch die Arbeitsbescheinigung — ich reiche sie nach.',
            'Könnten Sie die Frist um eine Woche verlängern?',
            'Was passiert, wenn ich den Termin nicht wahrnehmen kann?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Fehlende Unterlagen',
        level: 'B1',
        lines: [
          { speaker: 'Sachbearbeiter', speakerGender: 'der',
            de: 'In Ihrem Antrag fehlt noch die Arbeitsbescheinigung von Ihrem Arbeitgeber.',
            en: 'Your application is still missing the employment certificate from your employer.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Ich habe sie schon angefordert, aber noch keine Antwort bekommen.',
            en: 'I’ve already requested it, but haven’t received a reply yet.' },
          { speaker: 'Sachbearbeiter', speakerGender: 'der',
            de: 'Kein Problem. Sie können sie bis Ende des Monats nachreichen.',
            en: 'No problem. You can submit it by the end of the month.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Und wird mein Antrag trotzdem schon bearbeitet?',
            en: 'And will my application still be processed in the meantime?' },
          { speaker: 'Sachbearbeiter', speakerGender: 'der',
            de: 'Ja, aber der Bescheid kommt erst, wenn alle Nachweise da sind.',
            en: 'Yes, but the decision letter only comes once all proofs are in.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · formell',
        to: 'jobcenter-mitte@jobcenter-ge.de',
        subject: 'Nachreichung der Arbeitsbescheinigung — Kundennummer 123456',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'in Ihrem Schreiben vom 3. Mai bitten Sie um die Arbeitsbescheinigung meines früheren Arbeitgebers.',
            en: 'in your letter of May 3rd you request the employment certificate from my former employer.' },
          { label: 'Information',
            de: 'Die Bescheinigung finden Sie im Anhang. Bitte bestätigen Sie kurz den Erhalt.',
            en: 'You will find the certificate attached. Please briefly confirm receipt.',
            highlight: 'im Anhang' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Reference the letter and date (in Ihrem Schreiben vom …)',
          'Include your Kundennummer in the subject',
          'Name the attachment (im Anhang)',
          'Ask for confirmation of receipt',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Gegen diesen Bescheid', role: 'pos1' },
            { text: 'lege', role: 'verb', highlight: true },
            { text: 'ich hiermit Widerspruch', role: 'mittelfeld' },
            { text: 'ein.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'The fixed formula for a formal objection — Widerspruch einlegen gegen + Akkusativ.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Objecting and negotiating',
          phrases: [
            'Die Berechnung erscheint mir nicht korrekt, weil …',
            'Ich bitte Sie, den Bescheid zu überprüfen.',
            'Auf welche Leistungen habe ich Anspruch?',
            'Ich möchte die Eingliederungsvereinbarung erst prüfen, bevor ich sie unterschreibe.',
            'Welche Folgen hätte es, wenn ich die Maßnahme ablehne?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Beim Vermittler',
        level: 'B2',
        lines: [
          { speaker: 'Vermittlerin', speakerGender: 'die',
            de: 'Ich habe hier eine Weiterbildung als Maßnahme für Sie — einen Deutschkurs für den Beruf.',
            en: 'I have a training measure for you here — a German course for professional life.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Das klingt sinnvoll. Übernimmt die Agentur die Kosten vollständig?',
            en: 'That sounds useful. Does the agency cover the costs completely?' },
          { speaker: 'Vermittlerin', speakerGender: 'die',
            de: 'Ja, wenn die Maßnahme bewilligt wird. Sie müssen aber regelmäßig teilnehmen.',
            en: 'Yes, if the measure is approved. But you have to attend regularly.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Verstanden. Und falls sie abgelehnt wird — kann ich dagegen Widerspruch einlegen?',
            en: 'Understood. And if it’s rejected — can I appeal against that?' },
          { speaker: 'Vermittlerin', speakerGender: 'die',
            de: 'Ja, innerhalb eines Monats nach dem Bescheid. Die Frist steht im Brief.',
            en: 'Yes, within one month of the decision letter. The deadline is stated in the letter.' },
        ],
      },
      writing: {
        kind: 'letter',
        level: 'B2',
        title: 'Brief · Widerspruch',
        parts: [
          { label: 'Betreff',
            de: 'Widerspruch gegen den Bescheid vom 12. Juni, Kundennummer 123456',
            en: 'Objection to the decision letter of June 12th, customer number 123456' },
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Widerspruch',
            de: 'hiermit lege ich fristgerecht Widerspruch gegen den oben genannten Bescheid ein.',
            en: 'I hereby lodge a timely objection to the above-mentioned decision.',
            highlight: 'lege ich fristgerecht Widerspruch' },
          { label: 'Begründung',
            de: 'Die Berechnung berücksichtigt mein Einkommen aus dem Monat April nicht korrekt. Den entsprechenden Nachweis füge ich bei.',
            en: 'The calculation does not correctly take into account my income from April. I enclose the corresponding proof.' },
          { label: 'Bitte',
            de: 'Ich bitte Sie, den Bescheid zu überprüfen und mir das Ergebnis schriftlich mitzuteilen.',
            en: 'I ask you to review the decision and inform me of the result in writing.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Name the Bescheid and its date in the Betreff',
          'Use the fixed formula (hiermit lege ich Widerspruch ein)',
          'Give one concrete, checkable reason',
          'Mention enclosed evidence (füge ich bei)',
        ],
      },
      challenge:
        'Read your next real Bescheid from start to finish and write down: what was decided, ' +
        'what you must do, and by when. Then draft — even just for practice — the first two ' +
        'sentences of a Widerspruch.',
    },
  },

  foundationLinks: [
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'verbklammer' },
    { label: 'Passive (wird bearbeitet, wurde abgelehnt)', foundationSlug: 'passive' },
    { label: 'weil / wenn → verb to the end', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'Bei der Agentur für Arbeit — paperwork with deadlines attached.',
    alt: 'A waiting area with numbered tickets at a German government office',
  },
};
