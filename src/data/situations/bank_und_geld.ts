import type { Situation } from '../../content/schema';

export const bankUndGeld: Situation = {
  slug: 'bank-und-geld',
  theme: 'Money',
  subtheme: 'Bank & Überweisungen',
  category: 'Living in Germany',
  title: 'Bank & Überweisungen',
  intro:
    'Everyday banking in Germany: using the Geldautomat, understanding your Kontoauszug, ' +
    'making an Überweisung with IBAN and Verwendungszweck, setting up a Dauerauftrag, ' +
    'and sorting out problems like a wrong Abbuchung.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can open and manage a German bank account, transfer money with the right ' +
    'reference details, and get a wrong charge reversed — in German, at the counter ' +
    'or on the phone.',

  vocab: [
    {
      label: 'A1 · Am Automaten',
      items: [
        { gender: 'das', word: 'Geld', meaning: 'money' },
        { gender: 'das', word: 'Konto', meaning: 'account', plural: 'Konten' },
        { gender: 'die', word: 'Karte', meaning: 'card', plural: 'Karten' },
        { gender: 'der', word: 'Geldautomat', meaning: 'ATM', plural: 'Geldautomaten' },
        { gender: 'die', word: 'Geheimzahl', meaning: 'PIN', note: 'also: die PIN' },
        { gender: 'verb', word: 'abheben', meaning: 'to withdraw', note: 'separable: Ich hebe 50 Euro ab.' },
      ],
    },
    {
      label: 'A2 · Konto & Karte',
      items: [
        { gender: 'das', word: 'Girokonto', meaning: 'current account', plural: 'Girokonten' },
        { gender: 'die', word: 'Überweisung', meaning: 'bank transfer', plural: 'Überweisungen' },
        { gender: 'verb', word: 'überweisen', meaning: 'to transfer (money)', note: 'inseparable: Ich überweise die Miete.' },
        { gender: 'der', word: 'Kontoauszug', meaning: 'account statement', plural: 'Kontoauszüge' },
        { gender: 'die', word: 'Gebühr', meaning: 'fee', plural: 'Gebühren' },
        { gender: 'das', word: 'Bargeld', meaning: 'cash' },
        { gender: 'verb', word: 'sparen', meaning: 'to save (money)' },
      ],
    },
    {
      label: 'B1 · Überweisung & Dauerauftrag',
      items: [
        { gender: 'der', word: 'Dauerauftrag', meaning: 'standing order', plural: 'Daueraufträge' },
        { gender: 'die', word: 'IBAN', meaning: 'IBAN (account number)' },
        { gender: 'der', word: 'Verwendungszweck', meaning: 'payment reference', note: 'e.g. "Miete Juli, Wohnung 3"' },
        { gender: 'der', word: 'Empfänger', meaning: 'recipient', plural: 'Empfänger' },
        { gender: 'die', word: 'TAN', meaning: 'one-time confirmation code' },
        { gender: 'das', word: 'Online-Banking', meaning: 'online banking' },
        { gender: 'verb', word: 'abbuchen', meaning: 'to debit', note: 'separable: Die Miete wird am 1. abgebucht.' },
      ],
    },
    {
      label: 'B2 · Probleme & Klärung',
      items: [
        { gender: 'die', word: 'Lastschrift', meaning: 'direct debit', plural: 'Lastschriften' },
        { gender: 'verb', word: 'zurückbuchen', meaning: 'to reverse (a debit)', note: 'separable: Ich lasse die Lastschrift zurückbuchen.' },
        { gender: 'der', word: 'Dispokredit', meaning: 'overdraft facility', note: 'short: der Dispo' },
        { gender: 'pl', word: 'Zinsen', meaning: 'interest' },
        { gender: 'verb', word: 'eröffnen', meaning: 'to open (an account)', note: 'Ich möchte ein Konto eröffnen.' },
        { gender: 'verb', word: 'auflösen', meaning: 'to close (an account)', note: 'separable: Ich löse das Konto auf.' },
        { gender: 'die', word: 'Vollmacht', meaning: 'power of attorney / authorization', plural: 'Vollmachten' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Withdraw money and ask where the ATM is.',
      example: 'Wo ist der Geldautomat? Ich möchte Geld abheben.',
    },
    {
      level: 'A2',
      canDo: 'Ask about fees and understand your account statement.',
      example: 'Kostet das Konto eine Gebühr?',
    },
    {
      level: 'B1',
      canDo: 'Make a transfer with the right details and set up a standing order.',
      example: 'Ich möchte einen Dauerauftrag für die Miete einrichten.',
    },
    {
      level: 'B2',
      canDo: 'Dispute a wrong charge and negotiate account conditions.',
      example: 'Diese Abbuchung kenne ich nicht — bitte buchen Sie den Betrag zurück.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can withdraw cash and name the basics of my account.', achieved: true },
    { level: 'A2', text: 'I can ask about fees and read my Kontoauszug.', achieved: true },
    { level: 'B1', text: 'I can transfer money and set up a Dauerauftrag myself.', achieved: false },
    { level: 'B2', text: 'I can get a wrong charge reversed and change my account terms.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'Geld', role: 'mittelfeld' },
            { text: 'abheben.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'möchte + infinitive — your all-purpose request at the bank.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Basics at the counter',
          phrases: [
            'Wo ist der Geldautomat?',
            'Ich möchte Geld abheben.',
            'Meine Karte funktioniert nicht.',
            'Können Sie mir helfen, bitte?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Am Schalter',
        level: 'A1',
        lines: [
          { speaker: 'Bankangestellte', speakerGender: 'die',
            de: 'Guten Tag. Was kann ich für Sie tun?',
            en: 'Good day. What can I do for you?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Guten Tag. Meine Karte funktioniert nicht.',
            en: 'Good day. My card isn’t working.' },
          { speaker: 'Bankangestellte', speakerGender: 'die',
            de: 'Haben Sie Ihren Ausweis dabei?',
            en: 'Do you have your ID with you?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Ja, hier bitte.',
            en: 'Yes, here you are.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Bankdaten',
        parts: [
          { label: 'Notiz',
            de: 'Bank: Sparkasse. Termin: Montag, 10 Uhr. Mitbringen: Ausweis, Meldebescheinigung.',
            en: 'Bank: Sparkasse. Appointment: Monday, 10 a.m. Bring: ID, registration certificate.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Kostet', role: 'verb', highlight: true },
            { text: 'das Konto', role: 'mittelfeld' },
            { text: 'eine Gebühr?', role: 'satzende' },
          ],
          caption: 'Yes/no question — the verb jumps to position 1.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Asking about the account',
          phrases: [
            'Ich möchte ein Konto eröffnen.',
            'Kostet das Konto eine Gebühr?',
            'Wie bekomme ich meine Kontoauszüge?',
            'Kann ich mit dieser Karte überall bezahlen?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Konto eröffnen',
        level: 'A2',
        lines: [
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Sie möchten ein Girokonto eröffnen. Haben Sie schon ein Konto bei uns?',
            en: 'You’d like to open a current account. Do you already have an account with us?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Nein, das ist mein erstes Konto in Deutschland.',
            en: 'No, this is my first account in Germany.' },
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Kein Problem. Ich brauche Ihren Pass und Ihre Meldebescheinigung.',
            en: 'No problem. I need your passport and your registration certificate.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Hier bitte. Kostet das Konto etwas?',
            en: 'Here you are. Does the account cost anything?' },
          { speaker: 'Beraterin', speakerGender: 'die',
            de: 'Die ersten sechs Monate sind kostenlos, danach drei Euro im Monat.',
            en: 'The first six months are free, after that three euros a month.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hallo Mia, ich habe dir das Geld für die Konzertkarte überwiesen — 35 Euro. Schau mal auf dein Konto! LG, Ben',
            en: 'Hi Mia, I transferred you the money for the concert ticket — 35 euros. Check your account! Best, Ben' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Miete', role: 'pos1' },
            { text: 'wird', role: 'verb', highlight: true },
            { text: 'am Ersten automatisch', role: 'mittelfeld' },
            { text: 'abgebucht.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Passive with werden — how banks describe what happens to your money.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Transfers and standing orders',
          phrases: [
            'Ich möchte einen Dauerauftrag für die Miete einrichten.',
            'Was muss ich in den Verwendungszweck schreiben?',
            'Die Überweisung ist noch nicht angekommen.',
            'Wie lange dauert eine Überweisung ins Ausland?',
            'Können Sie mir das im Online-Banking zeigen?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Dauerauftrag einrichten',
        level: 'B1',
        lines: [
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Ich möchte einen Dauerauftrag einrichten — für meine Miete.',
            en: 'I’d like to set up a standing order — for my rent.' },
          { speaker: 'Berater', speakerGender: 'der',
            de: 'Gern. Ich brauche die IBAN des Empfängers, den Betrag und das Datum.',
            en: 'Gladly. I need the recipient’s IBAN, the amount, and the date.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Immer zum Ersten, 850 Euro. Und in den Verwendungszweck bitte „Miete plus Wohnungsnummer“.',
            en: 'Always on the 1st, 850 euros. And in the reference please put “rent plus apartment number”.' },
          { speaker: 'Berater', speakerGender: 'der',
            de: 'Alles klar. Der erste Auftrag wird am 1. August ausgeführt.',
            en: 'All right. The first order will be executed on August 1st.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · formell',
        to: 'service@meinebank.de',
        subject: 'Frage zu einer Überweisung vom 2. Juli',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'am 2. Juli habe ich 200 Euro an Herrn Weber überwiesen, aber das Geld ist laut Empfänger noch nicht angekommen.',
            en: 'on July 2nd I transferred 200 euros to Mr. Weber, but according to the recipient the money has not yet arrived.' },
          { label: 'Bitte',
            de: 'Könnten Sie bitte prüfen, ob die Überweisung ausgeführt wurde?',
            en: 'Could you please check whether the transfer was executed?',
            highlight: 'Könnten Sie bitte prüfen, ob' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Date and amount in the first sentence',
          'Indirect question with ob (prüfen, ob …)',
          'Polite Konjunktiv II request (Könnten Sie …)',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Diese Abbuchung', role: 'pos1' },
            { text: 'kenne', role: 'verb', highlight: true },
            { text: 'ich nicht,', role: 'mittelfeld' },
            { text: 'deshalb bitte ich um Rückbuchung.', role: 'satzende' },
          ],
          caption: 'Front the disputed item (position 1), then state the consequence.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Disputing and negotiating',
          phrases: [
            'Diese Lastschrift habe ich nicht autorisiert.',
            'Bitte buchen Sie den Betrag zurück.',
            'Wie hoch sind die Zinsen für den Dispo?',
            'Unter welchen Bedingungen ist das Konto gebührenfrei?',
            'Ich überlege, das Konto aufzulösen, wenn sich die Konditionen nicht ändern.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Falsche Abbuchung',
        level: 'B2',
        lines: [
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Auf meinem Kontoauszug ist eine Lastschrift über 89 Euro, die ich nicht kenne.',
            en: 'On my statement there’s a direct debit of 89 euros that I don’t recognize.' },
          { speaker: 'Berater', speakerGender: 'der',
            de: 'Das kann ich mir ansehen. Von welchem Datum ist die Buchung?',
            en: 'I can look at that. What’s the date of the transaction?' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Vom 28. Juni, Empfänger ist eine Firma, mit der ich nie einen Vertrag hatte.',
            en: 'June 28th, the recipient is a company I never had a contract with.' },
          { speaker: 'Berater', speakerGender: 'der',
            de: 'Dann lassen wir die Lastschrift zurückbuchen. Das geht bis zu acht Wochen nach der Abbuchung.',
            en: 'Then we’ll have the direct debit reversed. That’s possible up to eight weeks after the debit.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Sehr gut. Kann ich die Firma zusätzlich für weitere Lastschriften sperren lassen?',
            en: 'Very good. Can I additionally block the company from further debits?' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Rückbuchung verlangen',
        to: 'service@meinebank.de',
        subject: 'Nicht autorisierte Lastschrift — Bitte um Rückbuchung',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Sachverhalt',
            de: 'auf meinem Konto wurde am 28. Juni eine Lastschrift über 89 Euro abgebucht, die ich nicht autorisiert habe.',
            en: 'on June 28th a direct debit of 89 euros was taken from my account which I did not authorize.',
            highlight: 'die ich nicht autorisiert habe' },
          { label: 'Forderung',
            de: 'Ich bitte Sie, den Betrag umgehend zurückzubuchen und mir den Eingang zu bestätigen.',
            en: 'I ask you to reverse the amount immediately and confirm this to me.' },
          { label: 'Frist',
            de: 'Sollte die Rückbuchung nicht bis zum 20. Juli erfolgen, werde ich mich an die Verbraucherzentrale wenden.',
            en: 'Should the reversal not take place by July 20th, I will contact the consumer protection agency.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Relative clause to pinpoint the item (die ich nicht … habe)',
          'Clear demand with a deadline',
          'Escalation path named (Verbraucherzentrale)',
        ],
      },
      challenge:
        'Log into your Online-Banking and rename the exercise: read one month of your ' +
        'Kontoauszug in German only, and say out loud what each Abbuchung was for.',
    },
  },

  foundationLinks: [
    { label: 'Passive (wird abgebucht)', foundationSlug: 'passive' },
    { label: 'Konjunktiv II for polite requests', foundationSlug: 'konjunktiv' },
    { label: 'ob-clauses → verb to the end', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'Bank und Geld — from the Automat to the Dauerauftrag.',
    alt: 'A row of ATMs inside a German bank branch',
  },
};
