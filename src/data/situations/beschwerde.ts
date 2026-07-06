import type { Situation } from '../../content/schema';

export const beschwerde: Situation = {
  slug: 'beschwerde',
  theme: 'Daily Life',
  subtheme: 'Beschwerde & Reklamation',
  category: 'Survival & daily life',
  title: 'Beschwerde & Reklamation',
  intro:
    'Complaining effectively in German: returning faulty goods with the Kassenbon, ' +
    'using Garantie and Gewährleistung, complaining about a service that went wrong, ' +
    'and escalating in writing with a Frist when polite asking stops working.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can take a broken product back to the shop, say clearly what is wrong and what ' +
    'I want, hold my ground politely when they push back, and write a formal complaint ' +
    'with a deadline when it matters.',

  vocab: [
    {
      label: 'A1 · Im Geschäft',
      items: [
        { gender: 'verb', word: 'kaputt sein', meaning: 'to be broken' },
        { gender: 'das', word: 'Problem', meaning: 'problem', plural: 'Probleme' },
        { gender: 'die', word: 'Quittung', meaning: 'receipt', plural: 'Quittungen', note: 'also: der Kassenbon' },
        { gender: 'verb', word: 'funktionieren', meaning: 'to work / function', note: 'Es funktioniert nicht.' },
        { gender: 'verb', word: 'zurückgeben', meaning: 'to return (an item)', note: 'separable: Ich gebe es zurück.' },
        { gender: 'das', word: 'Geld', meaning: 'money', note: 'das Geld zurückbekommen' },
      ],
    },
    {
      label: 'A2 · Umtausch & Garantie',
      items: [
        { gender: 'verb', word: 'umtauschen', meaning: 'to exchange', note: 'separable: Ich tausche die Jacke um.' },
        { gender: 'der', word: 'Umtausch', meaning: 'exchange', note: 'Umtausch nur mit Kassenbon' },
        { gender: 'die', word: 'Garantie', meaning: 'warranty', plural: 'Garantien', note: 'Ich habe noch Garantie darauf.' },
        { gender: 'verb', word: 'reklamieren', meaning: 'to complain about / claim (a fault)' },
        { gender: 'die', word: 'Größe', meaning: 'size', plural: 'Größen', note: 'die falsche Größe' },
        { gender: 'verb', word: 'zurückbekommen', meaning: 'to get back', note: 'separable: Bekomme ich mein Geld zurück?' },
      ],
    },
    {
      label: 'B1 · Sich beschweren',
      items: [
        { gender: 'die', word: 'Beschwerde', meaning: 'complaint', plural: 'Beschwerden' },
        { gender: 'verb', word: 'sich beschweren über + A / bei + D', meaning: 'to complain about / to', note: 'Ich beschwere mich beim Kundenservice über die Lieferung.' },
        { gender: 'die', word: 'Reklamation', meaning: 'complaint about goods', plural: 'Reklamationen' },
        { gender: 'der', word: 'Mangel', meaning: 'defect / fault', plural: 'Mängel' },
        { gender: 'verb', word: 'defekt sein', meaning: 'to be defective' },
        { gender: 'die', word: 'Erstattung', meaning: 'refund', plural: 'Erstattungen' },
        { gender: 'verb', word: 'sich wenden an + A', meaning: 'to turn to (someone)', note: 'Ich wende mich an den Kundenservice.' },
      ],
    },
    {
      label: 'B2 · Eskalation',
      items: [
        { gender: 'die', word: 'Gewährleistung', meaning: 'statutory warranty (2 years)', note: 'stronger than Garantie — it\'s the law' },
        { gender: 'verb', word: 'eine Frist setzen', meaning: 'to set a deadline', note: 'Ich setze Ihnen eine Frist bis zum 15. Juli.' },
        { gender: 'verb', word: 'bestehen auf + D', meaning: 'to insist on', note: 'Ich bestehe auf einer Erstattung.' },
        { gender: 'die', word: 'Verbraucherzentrale', meaning: 'consumer protection agency' },
        { gender: 'der', word: 'Vorfall', meaning: 'incident', plural: 'Vorfälle' },
        { gender: 'verb', word: 'unternehmen', meaning: 'to take (steps)', note: 'rechtliche Schritte unternehmen' },
        { gender: 'die', word: 'Kulanz', meaning: 'goodwill (beyond obligation)', note: 'aus Kulanz = as a goodwill gesture' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Say something is broken and show the receipt.',
      example: 'Das ist kaputt. Hier ist die Quittung.',
    },
    {
      level: 'A2',
      canDo: 'Ask for an exchange or your money back.',
      example: 'Kann ich das umtauschen? Ich habe den Kassenbon.',
    },
    {
      level: 'B1',
      canDo: 'Describe the defect precisely and state what you want.',
      example: 'Das Gerät war schon beim Auspacken defekt — ich möchte eine Erstattung.',
    },
    {
      level: 'B2',
      canDo: 'Invoke your rights, set deadlines, and escalate in writing.',
      example: 'Innerhalb der Gewährleistung bestehe ich auf einer kostenlosen Reparatur.',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can return something broken with the receipt.', achieved: true },
    { level: 'A2', text: 'I can ask for Umtausch or money back and mention the Garantie.', achieved: true },
    { level: 'B1', text: 'I can make a clear complaint and hold my position politely.', achieved: false },
    { level: 'B2', text: 'I can write a formal Beschwerde with Frist and escalate.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Das', role: 'pos1' },
            { text: 'funktioniert', role: 'verb', highlight: true },
            { text: 'nicht.', role: 'mittelfeld' },
          ],
          caption: 'The three-word complaint — works for anything with a plug.',
        },
        {
          slots: [
            { text: 'Hier', role: 'pos1' },
            { text: 'ist', role: 'verb', highlight: true },
            { text: 'die Quittung.', role: 'mittelfeld' },
          ],
          caption: 'The receipt sentence — say it before they ask.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Naming the problem',
          phrases: [
            'Das ist kaputt.',
            'Das funktioniert nicht.',
            'Ich habe das gestern gekauft.',
            'Hier ist die Quittung.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · An der Kasse',
        level: 'A1',
        lines: [
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Entschuldigung, diese Lampe ist kaputt.',
            en: 'Excuse me, this lamp is broken.' },
          { speaker: 'Verkäuferin', speakerGender: 'die',
            de: 'Oh, das tut mir leid. Haben Sie die Quittung?',
            en: 'Oh, I’m sorry. Do you have the receipt?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Ja, hier bitte.',
            en: 'Yes, here you are.' },
          { speaker: 'Verkäuferin', speakerGender: 'die',
            de: 'Danke. Möchten Sie eine neue Lampe oder das Geld zurück?',
            en: 'Thank you. Would you like a new lamp or your money back?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Das Geld zurück, bitte.',
            en: 'The money back, please.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Für den Umtausch',
        parts: [
          { label: 'Notiz',
            de: 'Lampe zurückbringen: Quittung mitnehmen! Gekauft am 3. Juli, 24,99 Euro.',
            en: 'Take the lamp back: bring the receipt! Bought July 3rd, 24.99 euros.' },
        ],
      },
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Kann', role: 'verb', highlight: true },
            { text: 'ich das', role: 'mittelfeld' },
            { text: 'umtauschen?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal question + separable verb — the polite exchange request.',
        },
      ],
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Exchange and refund',
          phrases: [
            'Kann ich das umtauschen?',
            'Die Jacke ist leider zu klein — haben Sie sie eine Größe größer?',
            'Bekomme ich mein Geld zurück?',
            'Ich habe noch Garantie auf das Gerät.',
            'Bis wann kann ich das zurückgeben?',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Der Umtausch',
        level: 'A2',
        lines: [
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Guten Tag. Ich möchte diesen Pullover umtauschen — er ist zu klein.',
            en: 'Good day. I’d like to exchange this sweater — it’s too small.' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Kein Problem. Haben Sie den Kassenbon dabei?',
            en: 'No problem. Do you have the receipt with you?' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Ja. Gibt es den Pullover auch in Größe M?',
            en: 'Yes. Is the sweater also available in size M?' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Moment, ich schaue nach … Leider nicht. Möchten Sie einen Gutschein oder das Geld zurück?',
            en: 'One moment, I’ll check … unfortunately not. Would you like a voucher or your money back?' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Lieber das Geld zurück, bitte.',
            en: 'I’d rather have the money back, please.' },
        ],
      },
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hi Mia, der Toaster von dem Onlineshop ist schon wieder kaputt! Ich reklamiere ihn morgen — zum Glück habe ich noch Garantie. LG',
            en: 'Hi Mia, the toaster from the online shop is broken again! I’m filing a claim tomorrow — luckily I still have warranty. Best' },
        ],
      },
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'mich über die Lieferung', role: 'mittelfeld' },
            { text: 'beschweren.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'sich beschweren über + Akkusativ — the announcement that opens a complaint.',
        },
      ],
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Making the complaint stick',
          phrases: [
            'Das Gerät war schon beim Auspacken defekt.',
            'Der Mangel ist erst nach einer Woche aufgetreten.',
            'Ich möchte eine Erstattung, keinen Gutschein.',
            'Mit wem kann ich darüber sprechen?',
            'Ich wende mich sonst an den Kundenservice.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Die Reklamation',
        level: 'B1',
        lines: [
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Ich möchte diesen Wasserkocher reklamieren. Er heizt nicht mehr — nach nur zwei Monaten.',
            en: 'I’d like to make a claim on this kettle. It doesn’t heat anymore — after only two months.' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Haben Sie ihn vielleicht falsch entkalkt? Das ist kein Garantiefall.',
            en: 'Did you perhaps descale it incorrectly? That’s not covered by warranty.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Nein, ich habe ihn nach der Anleitung benutzt. Der Mangel war nicht mein Fehler.',
            en: 'No, I used it according to the instructions. The defect wasn’t my fault.' },
          { speaker: 'Verkäufer', speakerGender: 'der',
            de: 'Hm. Ich kann Ihnen einen Gutschein anbieten.',
            en: 'Hm. I can offer you a voucher.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Danke, aber ich möchte lieber eine Erstattung oder ein neues Gerät. Das ist mein gutes Recht.',
            en: 'Thanks, but I’d rather have a refund or a new device. That’s my right.' },
        ],
      },
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Reklamation',
        to: 'service@elektro-shop.de',
        subject: 'Reklamation — Wasserkocher, Bestellnummer 55432',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Sachverhalt',
            de: 'am 3. Mai habe ich bei Ihnen einen Wasserkocher gekauft (Bestellnummer 55432). Seit letzter Woche heizt das Gerät nicht mehr.',
            en: 'on May 3rd I bought a kettle from you (order number 55432). Since last week the device no longer heats.' },
          { label: 'Forderung',
            de: 'Ich bitte um ein Ersatzgerät oder die Erstattung des Kaufpreises.',
            en: 'I request a replacement or a refund of the purchase price.',
            highlight: 'Ersatzgerät oder die Erstattung' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Bestellnummer in the subject',
          'Purchase date + when the fault appeared',
          'Say exactly what you want (Ersatz oder Erstattung)',
        ],
      },
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Innerhalb der Gewährleistung', role: 'pos1' },
            { text: 'bestehe', role: 'verb', highlight: true },
            { text: 'ich auf einer kostenlosen', role: 'mittelfeld' },
            { text: 'Reparatur.', role: 'satzende' },
          ],
          caption: 'bestehen auf + Dativ — invoking the two-year statutory warranty.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Rights and deadlines',
          phrases: [
            'Die gesetzliche Gewährleistung beträgt zwei Jahre.',
            'Ich setze Ihnen eine Frist bis zum 15. Juli.',
            'Sollte ich bis dahin nichts hören, wende ich mich an die Verbraucherzentrale.',
            'Ich bestehe auf einer schriftlichen Antwort.',
            'Aus Kulanz erwarte ich mindestens einen Preisnachlass.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Wenn der Support mauert',
        level: 'B2',
        lines: [
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Die Herstellergarantie ist abgelaufen — da können wir leider nichts machen.',
            en: 'The manufacturer’s warranty has expired — unfortunately there’s nothing we can do.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Die Garantie vielleicht, aber die gesetzliche Gewährleistung läuft zwei Jahre — und der Kauf war vor 14 Monaten.',
            en: 'The warranty maybe, but the statutory Gewährleistung runs two years — and the purchase was 14 months ago.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'Dafür müssten Sie aber nachweisen, dass der Mangel von Anfang an bestand.',
            en: 'But for that you would have to prove the defect existed from the start.' },
          { speaker: 'Kundin', speakerGender: 'die',
            de: 'Das Gerät hat laut Fehlerbericht einen bekannten Serienfehler. Ich schicke Ihnen den Bericht und setze eine Frist von 14 Tagen für die Reparatur.',
            en: 'According to the error report the device has a known serial defect. I’ll send you the report and set a 14-day deadline for the repair.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der',
            de: 'In dem Fall leite ich das an die Fachabteilung weiter. Sie erhalten diese Woche eine Antwort.',
            en: 'In that case I’ll forward it to the specialist department. You’ll receive an answer this week.' },
        ],
      },
      writing: {
        kind: 'letter',
        level: 'B2',
        title: 'Brief · Beschwerde mit Frist',
        parts: [
          { label: 'Betreff',
            de: 'Mängelrüge und Fristsetzung — Rechnung Nr. 2026-118 vom 3. Mai',
            en: 'Notice of defect and deadline — invoice no. 2026-118 of May 3rd' },
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Sachverhalt',
            de: 'das am 3. Mai gekaufte Gerät weist einen Mangel auf, der bereits zweimal erfolglos reklamiert wurde. Auf meine E-Mails vom 10. und 24. Juni haben Sie nicht reagiert.',
            en: 'the device purchased on May 3rd has a defect that has already been reported twice without success. You have not responded to my emails of June 10th and 24th.' },
          { label: 'Forderung',
            de: 'Ich fordere Sie auf, den Kaufpreis von 89 Euro bis zum 15. Juli zu erstatten.',
            en: 'I request that you refund the purchase price of 89 euros by July 15th.',
            highlight: 'bis zum 15. Juli' },
          { label: 'Konsequenz',
            de: 'Sollte die Frist ergebnislos verstreichen, werde ich die Verbraucherzentrale einschalten und rechtliche Schritte prüfen.',
            en: 'Should the deadline pass without result, I will involve the consumer protection agency and consider legal steps.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Document the history (dates of previous complaints)',
          'One concrete demand with amount and deadline',
          'Name the consequence — and be ready to follow through',
          'Send wichtige Briefe per Einschreiben (registered mail)',
        ],
      },
      challenge:
        'Next time something you bought disappoints — even slightly — make the complaint ' +
        'in German instead of letting it go. Start with „Ich möchte das reklamieren“ and ' +
        'see how far the script carries you.',
    },
  },

  foundationLinks: [
    { label: 'Reflexive pronouns (sich beschweren)', foundationSlug: 'pronomen' },
    { label: 'Konjunktiv II (Sollte die Frist …)', foundationSlug: 'konjunktiv' },
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'verbklammer' },
  ],

  hero: {
    src: '/images/complaint-beschwerde.png',
    caption: 'Die Beschwerde — polite, precise, and with a deadline.',
    alt: 'A goblin at a service counter returning a broken item',
  },
};
