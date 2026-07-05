import type { Situation } from '../../content/schema';

export const autoUndWerkstatt: Situation = {
  slug: 'auto-und-werkstatt',
  theme: 'Transport',
  subtheme: 'Auto & Werkstatt',
  category: 'Getting around',
  title: 'Auto & Werkstatt',
  intro:
    'Owning and running a car in Germany: filling up, describing a Panne, booking the ' +
    'Werkstatt, surviving TÜV and Zulassung, and dealing with insurance after an accident.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can describe what’s wrong with my car, understand what the Werkstatt proposes ' +
    'and what it costs, get through TÜV and registration, and handle an accident report ' +
    'without switching to English.',

  vocab: [
    {
      label: 'A1 · Das Auto',
      items: [
        { gender: 'das', word: 'Auto', meaning: 'car', plural: 'Autos' },
        { gender: 'verb', word: 'fahren', meaning: 'to drive', note: 'du fährst, er/sie fährt' },
        { gender: 'die', word: 'Tankstelle', meaning: 'petrol station', plural: 'Tankstellen' },
        { gender: 'verb', word: 'tanken', meaning: 'to fill up' },
        { gender: 'der', word: 'Reifen', meaning: 'tyre', plural: 'Reifen' },
        { gender: 'verb', word: 'kaputt sein', meaning: 'to be broken' },
      ],
    },
    {
      label: 'A2 · Panne & Werkstatt',
      items: [
        { gender: 'die', word: 'Werkstatt', meaning: 'garage / repair shop', plural: 'Werkstätten' },
        { gender: 'die', word: 'Panne', meaning: 'breakdown', plural: 'Pannen' },
        { gender: 'verb', word: 'reparieren', meaning: 'to repair' },
        { gender: 'die', word: 'Bremse', meaning: 'brake', plural: 'Bremsen' },
        { gender: 'der', word: 'Motor', meaning: 'engine', plural: 'Motoren' },
        { gender: 'verb', word: 'abholen', meaning: 'to pick up', note: 'separable: Ich hole das Auto ab.' },
      ],
    },
    {
      label: 'B1 · TÜV & Papiere',
      items: [
        { gender: 'der', word: 'TÜV', meaning: 'vehicle inspection', note: 'die Hauptuntersuchung (HU), every 2 years' },
        { gender: 'das', word: 'Kennzeichen', meaning: 'license plate', plural: 'Kennzeichen' },
        { gender: 'der', word: 'Führerschein', meaning: 'driving license', plural: 'Führerscheine' },
        { gender: 'die', word: 'Zulassung', meaning: 'vehicle registration', plural: 'Zulassungen' },
        { gender: 'der', word: 'Kostenvoranschlag', meaning: 'cost estimate', plural: 'Kostenvoranschläge' },
        { gender: 'verb', word: 'bestehen', meaning: 'to pass (an inspection)', note: 'Das Auto hat den TÜV bestanden.' },
      ],
    },
    {
      label: 'B2 · Versicherung & Unfall',
      items: [
        { gender: 'die', word: 'Kfz-Versicherung', meaning: 'car insurance' },
        { gender: 'die', word: 'Vollkasko', meaning: 'comprehensive insurance', note: 'die Teilkasko = partial coverage' },
        { gender: 'der', word: 'Unfallbericht', meaning: 'accident report', plural: 'Unfallberichte' },
        { gender: 'der', word: 'Gutachter', meaning: 'assessor / expert', plural: 'Gutachter' },
        { gender: 'verb', word: 'reklamieren', meaning: 'to complain about / dispute (a bill or repair)' },
        { gender: 'verb', word: 'verschulden', meaning: 'to be at fault for', note: 'Wer hat den Unfall verschuldet?' },
        { gender: 'die', word: 'Schadensmeldung', meaning: 'damage claim', plural: 'Schadensmeldungen' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Fill up, pay, and say something is broken.',
      example: 'Der Reifen ist kaputt.',
    },
    {
      level: 'A2',
      canDo: 'Describe a problem and book a repair.',
      example: 'Der Motor macht ein komisches Geräusch. Haben Sie morgen einen Termin?',
    },
    {
      level: 'B1',
      canDo: 'Handle TÜV, ask for an estimate, and question the work done.',
      example: 'Können Sie mir vorher einen Kostenvoranschlag machen?',
    },
    {
      level: 'B2',
      canDo: 'File an accident report and negotiate with the insurance.',
      example: 'Der Unfallgegner hat den Schaden verschuldet — seine Versicherung muss zahlen.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can tank, pay, and name a broken part.', achieved: true },
    { level: 'A2', text: 'I can describe a fault and make a Werkstatt appointment.', achieved: true },
    { level: 'B1', text: 'I can get through TÜV and challenge a repair bill.', achieved: false },
    { level: 'B2', text: 'I can handle an accident and the insurance that follows.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Der Reifen', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'kaputt.', role: 'mittelfeld' },
          ],
          caption: 'Thing + ist kaputt — works for every broken part.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'At the Tankstelle',
          phrases: [
            'Säule drei, bitte.',
            'Ich möchte tanken.',
            'Wo ist die Luft für die Reifen?',
            'Der Reifen ist kaputt.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · An der Tankstelle',
        level: 'A1',
        lines: [
          { speaker: 'Kassiererin', speakerGender: 'die',
            de: 'Guten Tag. Welche Säule?',
            en: 'Good day. Which pump?' },
          { speaker: 'Fahrer', speakerGender: 'der',
            de: 'Säule drei, bitte.',
            en: 'Pump three, please.' },
          { speaker: 'Kassiererin', speakerGender: 'die',
            de: 'Das macht 62 Euro 40. Mit Karte?',
            en: 'That’s 62 euros 40. By card?' },
          { speaker: 'Fahrer', speakerGender: 'der',
            de: 'Ja, bitte.',
            en: 'Yes, please.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Auto',
        parts: [
          { label: 'Notiz',
            de: 'Werkstatt: Freitag, 8 Uhr. Reifen wechseln. Auto um 16 Uhr abholen.',
            en: 'Garage: Friday, 8 a.m. Change tyres. Pick up the car at 4 p.m.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Der Motor', role: 'pos1' },
            { text: 'macht', role: 'verb', highlight: true },
            { text: 'ein komisches Geräusch.', role: 'mittelfeld' },
          ],
          caption: 'Describing a fault — X macht ein komisches Geräusch covers half of all car problems.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Booking a repair',
          phrases: [
            'Mein Auto hat eine Panne.',
            'Die Bremsen quietschen.',
            'Haben Sie diese Woche einen Termin frei?',
            'Wann kann ich das Auto abholen?',
            'Was kostet die Reparatur ungefähr?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Termin in der Werkstatt',
        level: 'A2',
        lines: [
          { speaker: 'Mechaniker', speakerGender: 'der',
            de: 'Werkstatt Krüger, guten Tag.',
            en: 'Krüger garage, good day.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Guten Tag. Mein Auto macht beim Bremsen ein lautes Geräusch.',
            en: 'Good day. My car makes a loud noise when braking.' },
          { speaker: 'Mechaniker', speakerGender: 'der',
            de: 'Das sollten wir uns ansehen. Können Sie morgen früh vorbeikommen?',
            en: 'We should look at that. Can you come by tomorrow morning?' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Ja, um acht. Wie lange dauert das ungefähr?',
            en: 'Yes, at eight. Roughly how long will it take?' },
          { speaker: 'Mechaniker', speakerGender: 'der',
            de: 'Wenn es die Bremsbeläge sind, ist das Auto am Nachmittag fertig.',
            en: 'If it’s the brake pads, the car will be ready in the afternoon.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi Sam, mein Auto ist in der Werkstatt — kannst du mich morgen zur Arbeit mitnehmen? Ich zahle den Kaffee! LG, Jo',
            en: 'Hi Sam, my car is in the garage — can you give me a lift to work tomorrow? Coffee’s on me! Best, Jo' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Können', role: 'verb', highlight: true },
            { text: 'Sie mir vorher einen Kostenvoranschlag', role: 'mittelfeld' },
            { text: 'machen?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Ask for the estimate before the repair — the bracket holds the request together.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'TÜV and estimates',
          phrases: [
            'Mein Auto muss zum TÜV — haben Sie nächste Woche einen Termin?',
            'Können Sie mir vorher einen Kostenvoranschlag machen?',
            'Bitte rufen Sie mich an, bevor Sie etwas Zusätzliches reparieren.',
            'Hat das Auto die Hauptuntersuchung bestanden?',
            'Was wurde genau gemacht? Die Rechnung ist höher als besprochen.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Nach dem TÜV',
        level: 'B1',
        lines: [
          { speaker: 'Mechanikerin', speakerGender: 'die',
            de: 'Ihr Auto ist fast durchgekommen — aber die hintere Bremse muss neu, sonst gibt es keine Plakette.',
            en: 'Your car almost passed — but the rear brake needs replacing, otherwise no sticker.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Was würde das kosten?',
            en: 'What would that cost?' },
          { speaker: 'Mechanikerin', speakerGender: 'die',
            de: 'Mit Material und Arbeit ungefähr 280 Euro. Danach machen wir die Nachprüfung direkt hier.',
            en: 'With parts and labour about 280 euros. Then we do the re-inspection right here.' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'In Ordnung. Aber bitte rufen Sie mich an, falls noch etwas dazukommt.',
            en: 'All right. But please call me if anything else comes up.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Frage zur Rechnung',
        to: 'info@werkstatt-krueger.de',
        subject: 'Frage zur Rechnung Nr. 2024-118',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'die Rechnung für die Reparatur vom 12. Juli ist 90 Euro höher als der Kostenvoranschlag.',
            en: 'the invoice for the repair on July 12th is 90 euros higher than the estimate.' },
          { label: 'Bitte',
            de: 'Könnten Sie mir bitte erklären, welche zusätzlichen Arbeiten durchgeführt wurden und warum ich vorher nicht informiert wurde?',
            en: 'Could you please explain what additional work was carried out and why I was not informed beforehand?',
            highlight: 'warum ich vorher nicht informiert wurde' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Invoice number in the subject',
          'Name the gap between Kostenvoranschlag and Rechnung',
          'Indirect questions (welche …, warum …)',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Der Unfall', role: 'pos1' },
            { text: 'wurde', role: 'verb', highlight: true },
            { text: 'vom anderen Fahrer', role: 'mittelfeld' },
            { text: 'verschuldet.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Passive Präteritum — assigning fault without pointing fingers grammatically.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Accident and insurance',
          phrases: [
            'Wir sollten gemeinsam einen Unfallbericht ausfüllen.',
            'Ich melde den Schaden noch heute meiner Versicherung.',
            'Der Unfallgegner hat die Vorfahrt missachtet.',
            'Die Versicherung schickt einen Gutachter.',
            'Übernimmt die Vollkasko auch den Mietwagen?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Schadensmeldung',
        level: 'B2',
        lines: [
          { speaker: 'Versicherungsmitarbeiter', speakerGender: 'der',
            de: 'Schildern Sie bitte kurz, wie es zu dem Unfall kam.',
            en: 'Please describe briefly how the accident happened.' },
          { speaker: 'Fahrerin', speakerGender: 'die',
            de: 'Ich stand an der roten Ampel, und der andere Wagen ist mir hinten aufgefahren.',
            en: 'I was stopped at a red light and the other car ran into the back of me.' },
          { speaker: 'Versicherungsmitarbeiter', speakerGender: 'der',
            de: 'Dann liegt die Schuld klar beim Unfallgegner. Haben Sie den Unfallbericht und Fotos?',
            en: 'Then the other party is clearly at fault. Do you have the accident report and photos?' },
          { speaker: 'Fahrerin', speakerGender: 'die',
            de: 'Ja, beides. Wir haben den europäischen Unfallbericht zusammen ausgefüllt.',
            en: 'Yes, both. We filled in the European accident report together.' },
          { speaker: 'Versicherungsmitarbeiter', speakerGender: 'der',
            de: 'Sehr gut. Wir melden den Schaden bei der gegnerischen Versicherung und schicken einen Gutachter.',
            en: 'Very good. We’ll report the damage to the other party’s insurer and send an assessor.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Schadensmeldung',
        to: 'schaden@kfz-versicherung.de',
        subject: 'Schadensmeldung — Vertragsnummer KV-556677, Unfall vom 3. Juli',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Sachverhalt',
            de: 'am 3. Juli gegen 17 Uhr wurde mein geparktes Fahrzeug in der Bergstraße von einem anderen Pkw beschädigt. Der Fahrer hat den Unfall verschuldet und dies im Unfallbericht bestätigt.',
            en: 'on July 3rd around 5 p.m. my parked vehicle on Bergstraße was damaged by another car. The driver was at fault and confirmed this in the accident report.',
            highlight: 'hat den Unfall verschuldet' },
          { label: 'Anlagen',
            de: 'Den Unfallbericht, Fotos des Schadens und die Kontaktdaten des Unfallgegners füge ich bei.',
            en: 'I enclose the accident report, photos of the damage, and the other party’s contact details.' },
          { label: 'Bitte',
            de: 'Bitte teilen Sie mir mit, wie es weitergeht und ob ein Gutachter beauftragt wird.',
            en: 'Please let me know the next steps and whether an assessor will be appointed.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Date, time, place in the first sentence',
          'Fault stated plainly (hat … verschuldet)',
          'All evidence listed as Anlagen',
        ],
      },
      challenge:
        'Download the europäischer Unfallbericht (it’s a standard form) and fill in the ' +
        'top half for an imaginary fender-bender — in German, without a dictionary.',
    },
  },

  foundationLinks: [
    { label: 'Passive (wurde beschädigt)', foundationSlug: 'passive' },
    { label: 'Modal verbs (muss zum TÜV)', foundationSlug: 'modal-verbs' },
    { label: 'wenn / falls clauses', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'Auto & Werkstatt — from the pump to the Gutachter.',
    alt: 'A car on a lift in a German repair shop',
  },
};
