import type { Situation } from '../../content/schema';

export const vermieterKontaktieren: Situation = {
  slug: 'vermieter-kontaktieren',
  theme: 'Housing',
  category: 'Living in Germany',
  title: 'Vermieter kontaktieren',
  intro:
    'Reporting problems to your landlord in German: from a simple one-line message about a broken ' +
    'heater to a formal written complaint with a repair deadline. Getting the tone right matters — ' +
    'too informal and you\'re ignored; too aggressive and you create conflict.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can tell my landlord about any household problem in German, explain how long it has been ' +
    'going on and why it matters, and write a formal complaint if the problem is not fixed.',

  vocab: [
    {
      label: 'A1 · Probleme in der Wohnung',
      items: [
        { gender: 'die', word: 'Heizung', meaning: 'heating system', plural: 'Heizungen' },
        { gender: 'das', word: 'Fenster', meaning: 'window', plural: 'Fenster' },
        { gender: 'der', word: 'Schimmel', meaning: 'mould' },
        { gender: 'der', word: 'Strom', meaning: 'electricity' },
        { gender: 'der', word: 'Wasserhahn', meaning: 'tap / faucet', plural: 'Wasserhähne' },
        { gender: 'der', word: 'Aufzug', meaning: 'lift / elevator', plural: 'Aufzüge' },
        { gender: 'der', word: 'Lärm', meaning: 'noise' },
        { gender: 'die', word: 'Tür', meaning: 'door', plural: 'Türen' },
        { gender: 'das', word: 'Schloss', meaning: 'lock', plural: 'Schlösser' },
        { gender: 'die', word: 'Leitung', meaning: 'pipe / line', plural: 'Leitungen' },
      ],
    },
    {
      label: 'A2 · Reparatur & Handwerker',
      items: [
        { gender: 'die', word: 'Reparatur', meaning: 'repair', plural: 'Reparaturen' },
        { gender: 'der', word: 'Handwerker', meaning: 'tradesperson / repairperson', plural: 'Handwerker' },
        { gender: 'der', word: 'Termin', meaning: 'appointment', plural: 'Termine' },
        { gender: 'die', word: 'Firma', meaning: 'company (repair firm)', plural: 'Firmen' },
        { gender: 'der', word: 'Schlüssel', meaning: 'key', plural: 'Schlüssel' },
        { gender: 'die', word: 'Frist', meaning: 'deadline', plural: 'Fristen', note: 'Reparaturfrist = repair deadline' },
        { gender: 'die', word: 'Bestätigung', meaning: 'confirmation', plural: 'Bestätigungen' },
      ],
    },
    {
      label: 'B1 · Kommunikation',
      items: [
        { gender: 'die', word: 'Miete', meaning: 'rent' },
        { gender: 'die', word: 'Mietminderung', meaning: 'rent reduction', note: 'legal right when flat is unusable' },
        { gender: 'die', word: 'Mängelanzeige', meaning: 'defect notice', note: 'formal written notice of a defect' },
        { gender: 'der', word: 'Bescheid', meaning: 'notification / decision', note: 'Bescheid geben = to let someone know' },
        { gender: 'die', word: 'Dringlichkeit', meaning: 'urgency' },
        { gender: 'die', word: 'Schriftform', meaning: 'written form', note: 'required for formal complaints' },
        { gender: 'der', word: 'Einschreiben', meaning: 'registered letter' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Name the broken item in one simple sentence',
      example: 'Die Heizung ist kaputt.',
    },
    {
      level: 'A2',
      canDo: 'State the problem and ask for someone to be sent',
      example: 'Die Heizung ist kaputt. Können Sie bitte jemanden schicken?',
    },
    {
      level: 'B1',
      canDo: 'Explain the problem with duration and impact in a short message',
      example: 'Die Heizung funktioniert seit gestern nicht. Deshalb ist es in der Wohnung sehr kalt.',
    },
    {
      level: 'B2',
      canDo: 'Write a formal written complaint with a repair deadline and request for written confirmation',
      example:
        'Ich bitte Sie, die Heizung bis spätestens Freitag, den 10. Januar, zu reparieren. ' +
        'Sollte die Reparatur nicht fristgerecht erfolgen, behalte ich mir eine Mietminderung vor.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'Identify and name a household problem in German' },
    { level: 'A2', text: 'Report a problem and ask for a repair' },
    { level: 'B1', text: 'Write a clear WhatsApp message explaining the issue with context' },
    { level: 'B2', text: 'Write a formal complaint letter with a repair deadline and legal reference' },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Heizung', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'kaputt', role: 'mittelfeld' },
          ],
          caption: '"kaputt" = broken — the most useful word in a German flat',
        },
        {
          slots: [
            { text: 'Das Fenster', role: 'pos1' },
            { text: 'geht', role: 'verb', highlight: true },
            { text: 'nicht auf', role: 'mittelfeld' },
          ],
          caption: '"geht nicht auf" = doesn\'t open — "auf" separates to the end',
        },
        {
          slots: [
            { text: 'Der Strom', role: 'pos1' },
            { text: 'funktioniert', role: 'verb', highlight: true },
            { text: 'nicht', role: 'mittelfeld' },
          ],
          caption: '"funktioniert nicht" — works for almost any broken thing',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Naming what is broken',
          phrases: [
            'Die Heizung ist kaputt.',
            'Der Aufzug funktioniert nicht.',
            'Das Fenster geht nicht auf.',
            'Der Wasserhahn tropft.',
            'Es gibt kein warmes Wasser.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Problem melden',
        level: 'A1',
        lines: [
          { speaker: 'Mieter', speakerGender: 'der',
            de: 'Guten Tag. Ich habe ein Problem.',
            en: 'Good day. I have a problem.' },
          { speaker: 'Vermieterin', speakerGender: 'die',
            de: 'Was ist los?',
            en: 'What is the matter?' },
          { speaker: 'Mieter', speakerGender: 'der',
            de: 'Die Heizung ist kaputt.',
            en: 'The heating is broken.' },
          { speaker: 'Vermieterin', speakerGender: 'die',
            de: 'Oh! Seit wann?',
            en: 'Oh! Since when?' },
          { speaker: 'Mieter', speakerGender: 'der',
            de: 'Seit heute.',
            en: 'Since today.' },
          { speaker: 'Vermieterin', speakerGender: 'die',
            de: 'Ich rufe den Handwerker an.',
            en: 'I will call the repair person.' },
          { speaker: 'Mieter', speakerGender: 'der',
            de: 'Danke.',
            en: 'Thank you.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Können', role: 'pos1' },
            { text: 'Sie', role: 'verb', highlight: false },
            { text: 'bitte jemanden', role: 'mittelfeld' },
            { text: 'schicken', role: 'verb-end', highlight: true },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Modal question — "schicken" (to send) goes to the end',
          showBracket: true,
        },
        {
          slots: [
            { text: 'Wann', role: 'pos1' },
            { text: 'kann', role: 'verb', highlight: true },
            { text: 'ein Handwerker', role: 'mittelfeld' },
            { text: 'kommen', role: 'verb-end', highlight: true },
            { text: '?', role: 'satzende' },
          ],
          caption: 'Asking when the repair person can come',
          showBracket: true,
        },
      ],
      dialogue: {
        title: 'Heizungsproblem melden',
        level: 'A2',
        lines: [
          { speaker: 'Mieter', speakerGender: 'der', de: 'Guten Tag, hier ist Thomas Fischer aus der Wohnung 14.', en: 'Good day, this is Thomas Fischer from flat 14.' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: 'Hallo Herr Fischer, was kann ich für Sie tun?', en: 'Hello Mr Fischer, what can I do for you?' },
          { speaker: 'Mieter', speakerGender: 'der', de: 'Die Heizung in meiner Wohnung ist kaputt. Es ist sehr kalt.', en: 'The heating in my flat is broken. It\'s very cold.' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: 'Oh, das tut mir leid! Seit wann ist das so?', en: 'Oh, I\'m sorry! How long has it been like that?' },
          { speaker: 'Mieter', speakerGender: 'der', de: 'Seit heute Morgen.', en: 'Since this morning.' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: 'Ich rufe sofort den Heizungsnotdienst an. Können Sie heute Nachmittag zu Hause sein?', en: 'I\'ll call the heating emergency service immediately. Can you be home this afternoon?' },
          { speaker: 'Mieter', speakerGender: 'der', de: 'Ja, ab 14 Uhr bin ich da.', en: 'Yes, I\'ll be there from 2 o\'clock.' },
          { speaker: 'Vermieterin', speakerGender: 'die', de: 'Gut, ich gebe Ihnen Bescheid, wann der Handwerker kommt.', en: 'Good, I\'ll let you know when the repair person is coming.' },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Reporting and requesting help',
          phrases: [
            'Die Heizung ist kaputt. Können Sie bitte jemanden schicken?',
            'Der Aufzug funktioniert seit heute nicht.',
            'Wann kann ein Handwerker kommen?',
            'Ich bin heute ab 15 Uhr zu Hause.',
            'Ist das dringend?',
          ],
        },
      ],
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Die Heizung', role: 'pos1' },
            { text: 'funktioniert', role: 'verb', highlight: true },
            { role: 'mittelfeld', text: 'seit gestern nicht,' },
          ],
          caption: '"seit" + present tense = ongoing situation (German uses present, not perfect)',
        },
        {
          slots: [
            { text: 'Deshalb', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'es in der Wohnung sehr kalt', role: 'mittelfeld' },
          ],
          caption: '"deshalb" (therefore) — links cause and consequence, verb stays in P2',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'wäre', role: 'verb', highlight: true },
            { role: 'mittelfeld', text: 'froh, wenn sich das schnell' },
            { text: 'lösen ließe', role: 'verb-end', highlight: true },
          ],
          caption: 'Double Konjunktiv II — polite pressure without aggression',
          showBracket: true,
        },
      ],
      dialogue: {
        title: 'Reparaturtermin vereinbaren',
        level: 'B1',
        lines: [
          { speaker: 'Mieterin', speakerGender: 'die', de: 'Guten Morgen. Ich wollte mich kurz melden, weil die Heizung bei mir seit zwei Tagen nicht funktioniert.', en: 'Good morning. I wanted to get in touch briefly because my heating hasn\'t been working for two days.' },
          { speaker: 'Verwalter', speakerGender: 'der', de: 'Das tut mir leid. Was genau passiert, wenn Sie die Heizung aufdrehen?', en: 'I\'m sorry to hear that. What exactly happens when you turn the heating on?' },
          { speaker: 'Mieterin', speakerGender: 'die', de: 'Die Heizkörper werden überhaupt nicht warm. Ich habe schon den Thermostat auf Maximum gestellt.', en: 'The radiators don\'t get warm at all. I\'ve already turned the thermostat to maximum.' },
          { speaker: 'Verwalter', speakerGender: 'der', de: 'Ich verstehe. Das klingt nach einem Problem mit der Pumpe. Ich schicke morgen einen Heizungstechniker vorbei.', en: 'I understand. That sounds like a pump problem. I\'ll send a heating technician round tomorrow.' },
          { speaker: 'Mieterin', speakerGender: 'die', de: 'Wann ungefähr? Ich muss mich gegebenenfalls freinehmen.', en: 'Approximately when? I may need to take the time off.' },
          { speaker: 'Verwalter', speakerGender: 'der', de: 'Zwischen 10 und 12 Uhr. Ich schreibe Ihnen heute noch eine SMS zur Bestätigung.', en: 'Between 10 and 12 o\'clock. I\'ll send you a text message for confirmation today.' },
          { speaker: 'Mieterin', speakerGender: 'die', de: 'Gut. Und falls der Techniker vorher fertig ist, könnten Sie mich bitte anrufen?', en: 'Good. And if the technician finishes earlier, could you please call me?' },
          { speaker: 'Verwalter', speakerGender: 'der', de: 'Selbstverständlich. Wir melden uns.', en: 'Of course. We\'ll be in touch.' },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'WhatsApp / message to landlord',
          phrases: [
            'Ich wollte Sie kurz informieren: die Heizung funktioniert seit gestern nicht.',
            'Es ist deshalb in der Wohnung sehr kalt — etwa 14 Grad.',
            'Wäre es möglich, diese Woche einen Handwerker vorbeizuschicken?',
            'Ich bin werktags ab 16 Uhr zu Hause, samstags ganztags.',
            'Ich freue mich auf Ihre Rückmeldung.',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'WhatsApp-Nachricht an den Vermieter',
        parts: [
          {
            label: 'Nachricht',
            de: 'Guten Morgen Frau Hoffmann,\n\nich wollte Sie kurz informieren: die Heizung in meiner Wohnung (Zimmer 3 und Küche) funktioniert seit gestern Abend nicht mehr. Die Heizkörper bleiben kalt, auch bei vollem Thermostat. Deshalb ist es in der Wohnung sehr kalt — ich schätze unter 15 Grad.\n\nKönnten Sie bitte so bald wie möglich einen Techniker vorbeischicken? Ich bin ab heute Abend um 17 Uhr zu Hause und morgen ganztags.\n\nVielen Dank und freundliche Grüße\nSophie Braun, Wohnung 7',
          },
        ],
        checklist: [
          'Problem klar benennen (was, wo, seit wann)',
          'Konsequenz / Dringlichkeit erklären',
          'Lösungswunsch höflich formulieren',
          'Verfügbare Zeiten nennen',
          'Freundlicher Abschluss',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { role: 'pos1', text: 'Ich bitte Sie,' },
            { text: 'die Reparatur', role: 'verb', highlight: false },
            { role: 'mittelfeld', text: 'bis spätestens Freitag, den 10. Januar,' },
            { text: 'durchzuführen', role: 'verb-end', highlight: true },
          ],
          caption: 'Formal request with deadline — infinitive clause at the end',
          showBracket: true,
        },
        {
          slots: [
            { text: 'Sollte die Reparatur', role: 'pos1' },
            { text: 'nicht', role: 'verb', highlight: false },
            { text: 'fristgerecht', role: 'mittelfeld' },
            { text: 'erfolgen', role: 'verb-end', highlight: true },
          ],
          caption: '"Sollte ... erfolgen" — conditional with Konjunktiv II, formal register',
          showBracket: true,
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Formal written notice phrases',
          phrases: [
            'Hiermit zeige ich Ihnen folgenden Mangel an: ...',
            'Der Mangel besteht seit dem [Datum] und beeinträchtigt die Bewohnbarkeit der Wohnung erheblich.',
            'Ich bitte Sie, den Mangel bis zum [Datum] zu beheben.',
            'Sollte die Reparatur nicht fristgerecht erfolgen, behalte ich mir eine Mietminderung gemäß § 536 BGB vor.',
            'Ich bitte um schriftliche Bestätigung des Eingangs dieser Mängelanzeige.',
            'Diese Nachricht sende ich per Einschreiben als Mängelanzeige im Sinne des Mietrechts.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Escalation phrases',
          phrases: [
            'Da ich bisher keine Reaktion erhalten habe, sehe ich mich gezwungen, schriftlich vorzugehen.',
            'Ich weise darauf hin, dass der Vermieter laut Mietrecht zur Instandhaltung der Wohnung verpflichtet ist.',
            'Im Wiederholungsfall werde ich den Mieterverein konsultieren.',
          ],
        },
      ],
      writing: {
        kind: 'letter',
        level: 'B2',
        title: 'Formelle Mängelanzeige mit Fristsetzung',
        to: 'Frau Maria Hoffmann, Vermieterin',
        subject: 'Mängelanzeige: Heizungsausfall — Wohnung Nr. 7, Schillerstraße 12',
        parts: [
          {
            label: 'Formelles Schreiben',
            de: 'Sehr geehrte Frau Hoffmann,\n\nhiermit zeige ich Ihnen schriftlich an, dass die Heizung in meiner Wohnung (Nr. 7, 3. Obergeschoss) seit dem 6. Januar 2026 vollständig ausgefallen ist. Trotz meiner telefonischen Meldung am 7. Januar und meiner Nachricht am 8. Januar ist bisher keine Reparatur erfolgt.\n\nDurch den Heizungsausfall ist die Wohnung derzeit nur eingeschränkt bewohnbar. Die Innentemperatur liegt dauerhaft unter 16 Grad Celsius, was einen erheblichen Mangel im Sinne des § 536 BGB darstellt.\n\nIch bitte Sie hiermit, den Defekt bis spätestens Freitag, den 10. Januar 2026, zu beheben und mir das geplante Datum der Reparatur schriftlich mitzuteilen.\n\nSollte die Reparatur nicht innerhalb dieser Frist erfolgen, behalte ich mir vor, die Miete angemessen zu mindern (§ 536 BGB) sowie weitere rechtliche Schritte einzuleiten.\n\nIch bitte um schriftliche Bestätigung des Eingangs dieses Schreibens.\n\nMit freundlichen Grüßen\n\nSophie Braun\nSchillerstraße 12, Whg. 7\n80336 München\nTel.: 0176 12345678\nE-Mail: s.braun@email.de',
          },
        ],
        checklist: [
          'Genaue Beschreibung des Mangels mit Datum',
          'Vorherige Kontaktversuche dokumentieren',
          'Frist klar und konkret setzen',
          'Konsequenzen benennen (Mietminderung, BGB)',
          'Schriftliche Bestätigung des Eingangs anfragen',
          'Formelle Anrede, Grußformel und vollständige Kontaktdaten',
        ],
      },
      challenge:
        'Your landlord has not responded to two messages about a mould problem ("Schimmel") in the ' +
        'bathroom. Write a formal written notice (Mängelanzeige) that: names the defect, documents the ' +
        'dates of your previous attempts to contact them, sets a 7-day repair deadline, and mentions ' +
        'the possibility of Mietminderung. Keep the tone firm but professional.',
    },
  },

  foundationLinks: [
    { label: 'Konnektoren: deshalb, damit, weil', foundationSlug: 'connectors' },
    { label: 'Modalverben: können, sollen, müssen', foundationSlug: 'modal-verbs' },
    { label: 'Konjunktiv II: sollte, wäre, ließe', foundationSlug: 'konjunktiv' },
    { label: 'Passiv: wurde repariert, muss behoben werden', foundationSlug: 'passive' },
  ],

  hero: {
    caption: 'From "kaputt" to a formal Mängelanzeige — know your rights as a tenant.',
    alt: 'A radiator on a white wall in a German apartment',
  },
};
