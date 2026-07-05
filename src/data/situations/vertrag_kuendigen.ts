import type { Situation } from '../../content/schema';

export const vertragKuendigen: Situation = {
  slug: 'vertrag-kuendigen',
  theme: 'Money',
  subtheme: 'Vertrag kündigen',
  category: 'Living in Germany',
  title: 'Vertrag kündigen',
  intro:
    'Cancelling German contracts and subscriptions: understanding Laufzeit and ' +
    'Kündigungsfrist, writing a cancellation that actually counts, using your ' +
    'Widerrufsrecht, and pushing back when a Mahnung or price increase arrives.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can read the fine print of a German contract, cancel it in writing before ' +
    'the deadline, and insist on a written confirmation — instead of paying for ' +
    'another year of a gym I never visit.',

  vocab: [
    {
      label: 'A1 · Verträge im Alltag',
      items: [
        { gender: 'der', word: 'Vertrag', meaning: 'contract', plural: 'Verträge' },
        { gender: 'das', word: 'Handy', meaning: 'mobile phone', plural: 'Handys' },
        { gender: 'das', word: 'Abo', meaning: 'subscription', plural: 'Abos', note: 'short for das Abonnement' },
        { gender: 'der', word: 'Monat', meaning: 'month', plural: 'Monate' },
        { gender: 'verb', word: 'kosten', meaning: 'to cost' },
        { gender: 'verb', word: 'kündigen', meaning: 'to cancel / terminate' },
      ],
    },
    {
      label: 'A2 · Laufzeit & Kosten',
      items: [
        { gender: 'die', word: 'Laufzeit', meaning: 'contract term', plural: 'Laufzeiten' },
        { gender: 'die', word: 'Kündigung', meaning: 'cancellation / notice', plural: 'Kündigungen' },
        { gender: 'verb', word: 'monatlich zahlen', meaning: 'to pay monthly' },
        { gender: 'verb', word: 'sich verlängern', meaning: 'to renew itself', note: 'Der Vertrag verlängert sich automatisch.' },
        { gender: 'das', word: 'Angebot', meaning: 'offer', plural: 'Angebote' },
        { gender: 'der', word: 'Tarif', meaning: 'plan / rate', plural: 'Tarife' },
      ],
    },
    {
      label: 'B1 · Die Kündigung schreiben',
      items: [
        { gender: 'die', word: 'Kündigungsfrist', meaning: 'notice period', plural: 'Kündigungsfristen' },
        { gender: 'verb', word: 'fristgerecht kündigen', meaning: 'to cancel within the deadline' },
        { gender: 'die', word: 'Bestätigung', meaning: 'confirmation', plural: 'Bestätigungen' },
        { gender: 'verb', word: 'schriftlich kündigen', meaning: 'to cancel in writing' },
        { gender: 'verb', word: 'widerrufen', meaning: 'to revoke (within 14 days)', note: 'inseparable: Ich widerrufe den Kauf.' },
        { gender: 'die', word: 'Kundennummer', meaning: 'customer number', plural: 'Kundennummern' },
      ],
    },
    {
      label: 'B2 · Streit & Sonderfälle',
      items: [
        { gender: 'das', word: 'Sonderkündigungsrecht', meaning: 'right to extraordinary cancellation', note: 'e.g. after a Preiserhöhung or Umzug' },
        { gender: 'die', word: 'Mahnung', meaning: 'payment reminder / dunning letter', plural: 'Mahnungen' },
        { gender: 'die', word: 'Preiserhöhung', meaning: 'price increase', plural: 'Preiserhöhungen' },
        { gender: 'der', word: 'Widerruf', meaning: 'revocation', note: 'das Widerrufsrecht = 14-day right of withdrawal' },
        { gender: 'verb', word: 'eine Frist versäumen', meaning: 'to miss a deadline' },
        { gender: 'die', word: 'Verbraucherzentrale', meaning: 'consumer protection agency' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Name your contracts and what they cost.',
      example: 'Mein Handyvertrag kostet 20 Euro im Monat.',
    },
    {
      level: 'A2',
      canDo: 'Ask about the contract term and how to cancel.',
      example: 'Wie lange läuft der Vertrag? Wie kann ich kündigen?',
    },
    {
      level: 'B1',
      canDo: 'Write a cancellation letter with the standard formulas.',
      example: 'Hiermit kündige ich meinen Vertrag fristgerecht zum nächstmöglichen Termin.',
    },
    {
      level: 'B2',
      canDo: 'Invoke special cancellation rights and respond to a Mahnung.',
      example: 'Wegen der Preiserhöhung mache ich von meinem Sonderkündigungsrecht Gebrauch.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can say which contracts I have and what they cost.', achieved: true },
    { level: 'A2', text: 'I can ask about Laufzeit and cancellation before signing.', achieved: true },
    { level: 'B1', text: 'I can write a Kündigung that meets the deadline.', achieved: false },
    { level: 'B2', text: 'I can use my Sonderkündigungsrecht and answer a Mahnung.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Mein Vertrag', role: 'pos1' },
            { text: 'kostet', role: 'verb', highlight: true },
            { text: '20 Euro im Monat.', role: 'mittelfeld' },
          ],
          caption: 'Naming a price — kosten + amount + im Monat.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Talking about contracts',
          phrases: [
            'Ich habe einen Handyvertrag.',
            'Das Abo kostet 10 Euro im Monat.',
            'Das ist zu teuer.',
            'Ich möchte kündigen.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Im Handyladen',
        level: 'A1',
        lines: [
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Dieser Tarif kostet 15 Euro im Monat.',
            en: 'This plan costs 15 euros a month.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Und wie lange läuft der Vertrag?',
            en: 'And how long does the contract run?' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Vierundzwanzig Monate.',
            en: 'Twenty-four months.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Das ist lang. Gibt es auch einen Vertrag ohne Laufzeit?',
            en: 'That’s long. Is there also a contract without a fixed term?' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Meine Verträge',
        parts: [
          { label: 'Notiz',
            de: 'Handy: 15 Euro, bis Dezember. Fitnessstudio: 29 Euro, kündigen bis 30. September!',
            en: 'Phone: 15 euros, until December. Gym: 29 euros, cancel by September 30th!' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Der Vertrag', role: 'pos1' },
            { text: 'verlängert', role: 'verb', highlight: true },
            { text: 'sich automatisch um zwölf Monate.', role: 'mittelfeld' },
          ],
          caption: 'The sentence hiding in every German contract — sich verlängern um + time.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Asking before you sign',
          phrases: [
            'Wie lange ist die Laufzeit?',
            'Verlängert sich der Vertrag automatisch?',
            'Bis wann muss ich kündigen?',
            'Kann ich monatlich kündigen?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Nachfragen im Fitnessstudio',
        level: 'A2',
        lines: [
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'Die Mitgliedschaft kostet 29 Euro im Monat, Laufzeit zwölf Monate.',
            en: 'The membership costs 29 euros a month, twelve-month term.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Und was passiert nach den zwölf Monaten?',
            en: 'And what happens after the twelve months?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'Der Vertrag verlängert sich dann automatisch, aber Sie können monatlich kündigen.',
            en: 'The contract then renews automatically, but you can cancel monthly.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Gut. Muss die Kündigung schriftlich sein?',
            en: 'Good. Does the cancellation have to be in writing?' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'Ja, per E-Mail oder mit dem Formular auf unserer Webseite.',
            en: 'Yes, by email or with the form on our website.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi Leo, denk dran: Dein Streaming-Abo verlängert sich am Freitag automatisch. Wenn du es nicht mehr brauchst, kündige heute! LG',
            en: 'Hi Leo, remember: your streaming subscription renews automatically on Friday. If you don’t need it anymore, cancel today! Best' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Hiermit', role: 'pos1' },
            { text: 'kündige', role: 'verb', highlight: true },
            { text: 'ich meinen Vertrag', role: 'mittelfeld' },
            { text: 'zum nächstmöglichen Termin.', role: 'satzende' },
          ],
          caption: 'The standard cancellation formula — memorize it once, use it for every contract.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Cancelling in writing',
          phrases: [
            'Hiermit kündige ich meinen Vertrag fristgerecht zum 31. Dezember.',
            'Bitte bestätigen Sie mir die Kündigung schriftlich.',
            'Bitte nennen Sie mir das genaue Vertragsende.',
            'Ich widerrufe hiermit den Vertrag vom 3. Juli.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · An der Hotline',
        level: 'B1',
        lines: [
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Sie möchten kündigen? Darf ich fragen, warum?',
            en: 'You’d like to cancel? May I ask why?' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Ich nutze den Tarif kaum noch. Bis wann muss die Kündigung bei Ihnen sein?',
            en: 'I hardly use the plan anymore. By when does the cancellation have to reach you?' },
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Die Kündigungsfrist ist ein Monat zum Vertragsende, also bis zum 30. November.',
            en: 'The notice period is one month before the contract ends, so by November 30th.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Dann kündige ich hiermit zum 31. Dezember. Schicken Sie mir bitte eine Bestätigung per E-Mail.',
            en: 'Then I hereby cancel effective December 31st. Please send me a confirmation by email.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Kündigung',
        to: 'kundenservice@fitmax.de',
        subject: 'Kündigung meiner Mitgliedschaft — Kundennummer 78910',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Kündigung',
            de: 'hiermit kündige ich meine Mitgliedschaft fristgerecht zum nächstmöglichen Termin.',
            en: 'I hereby cancel my membership within the notice period, effective the earliest possible date.',
            highlight: 'hiermit kündige ich' },
          { label: 'Bitte',
            de: 'Bitte bestätigen Sie mir die Kündigung und das Vertragsende schriftlich.',
            en: 'Please confirm the cancellation and the contract end date to me in writing.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Kundennummer in the subject line',
          'The fixed formula (hiermit kündige ich … fristgerecht)',
          '„zum nächstmöglichen Termin“ if you don’t know the exact date',
          'Demand written confirmation',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Wegen der Preiserhöhung', role: 'pos1' },
            { text: 'mache', role: 'verb', highlight: true },
            { text: 'ich von meinem Sonderkündigungsrecht', role: 'mittelfeld' },
            { text: 'Gebrauch.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Gebrauch machen von + D — the formal idiom for exercising a right.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Special cases and disputes',
          phrases: [
            'Da Sie die Preise erhöhen, steht mir ein Sonderkündigungsrecht zu.',
            'Ihre Mahnung ist unberechtigt, da ich fristgerecht gekündigt habe.',
            'Ich habe die Kündigung nachweislich am 15. Oktober verschickt.',
            'Sollten Sie weiter abbuchen, werde ich die Lastschrift zurückbuchen lassen.',
            'Ich habe den Fall der Verbraucherzentrale vorgelegt.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Unberechtigte Mahnung',
        level: 'B2',
        lines: [
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'Laut unserem System ist Ihre Kündigung erst nach der Frist eingegangen.',
            en: 'According to our system, your cancellation only arrived after the deadline.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Das kann nicht stimmen. Ich habe sie am 15. Oktober per E-Mail geschickt und habe die Sendebestätigung.',
            en: 'That can’t be right. I sent it by email on October 15th and I have the delivery confirmation.' },
          { speaker: 'Mitarbeiterin', speakerGender: 'die',
            de: 'Können Sie uns die Bestätigung weiterleiten?',
            en: 'Can you forward us the confirmation?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Mache ich sofort. Bis dahin erwarte ich, dass Sie die Mahnung zurücknehmen und nichts weiter abbuchen.',
            en: 'I’ll do that right away. Until then I expect you to withdraw the reminder and not debit anything further.' },
        ],
      },
      writing: {
        kind: 'letter',
        level: 'B2',
        title: 'Brief · Sonderkündigung',
        parts: [
          { label: 'Betreff',
            de: 'Sonderkündigung wegen Preiserhöhung — Vertragsnummer 4455',
            en: 'Extraordinary cancellation due to price increase — contract number 4455' },
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Kündigung',
            de: 'mit Schreiben vom 1. Juli haben Sie eine Preiserhöhung angekündigt. Daher mache ich von meinem Sonderkündigungsrecht Gebrauch und kündige den Vertrag zum Zeitpunkt des Inkrafttretens der Erhöhung.',
            en: 'in your letter of July 1st you announced a price increase. I therefore exercise my right of extraordinary cancellation and terminate the contract effective the date the increase takes effect.',
            highlight: 'Sonderkündigungsrecht Gebrauch' },
          { label: 'Bitte',
            de: 'Bitte bestätigen Sie mir die Kündigung und das genaue Vertragsende innerhalb von 14 Tagen schriftlich.',
            en: 'Please confirm the cancellation and the exact contract end date to me in writing within 14 days.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Name the trigger (Preiserhöhung + date of their letter)',
          'Invoke the right explicitly (Sonderkündigungsrecht)',
          'Set a deadline for their confirmation',
        ],
      },
      challenge:
        'Pick one real subscription you have and find its Kündigungsfrist in the AGB — ' +
        'then write the two-sentence Kündigung and save it as a draft, ready to send.',
    },
  },

  foundationLinks: [
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'verbklammer' },
    { label: 'da / weil → giving reasons', foundationSlug: 'connectors' },
    { label: 'Konjunktiv II (Sollten Sie …)', foundationSlug: 'konjunktiv' },
  ],

  hero: {
    caption: 'Vertrag kündigen — beating the automatic renewal.',
    alt: 'A stack of contracts with a calendar marking a cancellation deadline',
  },
};
