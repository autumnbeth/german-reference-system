import type { Situation } from '../../content/schema';

export const anmeldung: Situation = {
  slug: 'anmeldung',
  theme: 'Government',
  category: 'Official life',
  title: 'Anmeldung',
  intro:
    'Registering your address (Anmeldung) at the Bürgeramt is a legal requirement in Germany — ' +
    'you must do it within two weeks of moving. This situation covers stating your details, ' +
    'understanding what documents you need, handling complications like a missing ' +
    'Wohnungsgeberbestätigung, and asking about edge cases for your family.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can go to the Bürgeramt for my Anmeldung, give my details, understand what documents ' +
    'are required, and explain if something is missing — without panicking when the clerk ' +
    'asks an unexpected question.',

  vocab: [
    {
      label: 'A1 · Dokumente',
      items: [
        { gender: 'der', word: 'Ausweis', meaning: 'ID card', plural: 'Ausweise' },
        { gender: 'der', word: 'Reisepass', meaning: 'passport', plural: 'Reisepässe' },
        { gender: 'die', word: 'Wohnungsgeberbestätigung', meaning: 'landlord confirmation of tenancy (required for Anmeldung)' },
        { gender: 'die', word: 'Meldebescheinigung', meaning: 'registration certificate (issued after Anmeldung)', plural: 'Meldebescheinigungen' },
        { gender: 'die', word: 'Geburtsurkunde', meaning: 'birth certificate', plural: 'Geburtsurkunden' },
        { gender: 'die', word: 'Heiratsurkunde', meaning: 'marriage certificate', plural: 'Heiratsurkunden' },
      ],
    },
    {
      label: 'A2 · Vorgänge',
      items: [
        { gender: 'die', word: 'Anmeldung', meaning: 'registration of address (moving in)' },
        { gender: 'die', word: 'Ummeldung', meaning: 'change of address registration (moving within Germany)' },
        { gender: 'die', word: 'Abmeldung', meaning: 'deregistration (leaving Germany or address)' },
        { gender: 'die', word: 'Meldeadresse', meaning: 'registered address', plural: 'Meldeadressen' },
        { gender: 'der', word: 'Hauptwohnsitz', meaning: 'main / primary residence', plural: 'Hauptwohnsitze' },
        { gender: 'der', word: 'Nebenwohnsitz', meaning: 'secondary residence', plural: 'Nebenwohnsitze' },
      ],
    },
    {
      label: 'B1 · Aktionen',
      items: [
        { gender: 'die', word: 'nachreichen', meaning: 'to submit later / hand in after the fact', note: 'separable verb: Ich reiche das nach.' },
        { gender: 'die', word: 'ausfüllen', meaning: 'to fill in (a form)', note: 'separable verb: Ich fülle das Formular aus.' },
        { gender: 'die', word: 'unterschreiben', meaning: 'to sign', note: 'separable verb: Ich unterschreibe das Formular.' },
        { gender: 'die', word: 'beantragen', meaning: 'to apply for', note: 'Ich beantrage eine Meldebescheinigung.' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'State your name and address at the counter.',
      example: 'Ich möchte mich anmelden. Ich wohne in der Hauptstraße 12.',
    },
    {
      level: 'A2',
      canDo: 'Ask what documents are needed and understand a basic checklist.',
      example: 'Welche Unterlagen brauche ich?',
    },
    {
      level: 'B1',
      canDo: 'Explain a complication and ask whether something can be submitted later.',
      example: 'Mir fehlt leider die Wohnungsgeberbestätigung. Kann ich das nachreichen?',
    },
    {
      level: 'B2',
      canDo: 'Ask about edge cases, family registrations, and alternative procedures.',
      example: 'Kann ich meine Kinder gleichzeitig anmelden, oder brauche ich separate Termine?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can say my name and give my address at the counter.', achieved: true },
    { level: 'A2', text: 'I can ask what documents I need and understand the answer.', achieved: true },
    { level: 'B1', text: 'I can explain a missing document and ask whether I can submit it later.', achieved: false },
    { level: 'B2', text: 'I can handle edge cases like family registration and secondary residences.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'mich', role: 'mittelfeld' },
            { text: 'anmelden.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal verb bracket: möchte in P2, infinitive anmelden at the end.',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'wohne', role: 'verb', highlight: true },
            { text: 'in der Hauptstraße 12.', role: 'mittelfeld' },
          ],
          caption: 'Stating your address — simple present tense.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Stating your purpose',
          phrases: [
            'Ich möchte mich anmelden.',
            'Ich möchte mich ummelden.',
            'Ich habe einen Termin.',
          ],
        },
        {
          levels: ['A1'],
          funktion: 'Giving your details',
          phrases: [
            'Mein Name ist …',
            'Ich wohne in der … [Straße] … [Hausnummer].',
            'Ich bin am … [Datum] geboren.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Ich möchte mich anmelden',
        level: 'A1',
        lines: [
          { speaker: 'Mitarbeiter', speakerGender: 'der', de: 'Guten Morgen! Was kann ich für Sie tun?', en: 'Good morning! What can I do for you?' },
          { speaker: 'Anna', speakerGender: 'die', de: 'Guten Morgen. Ich möchte mich anmelden.', en: 'Good morning. I\'d like to register my address.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der', de: 'Haben Sie einen Termin?', en: 'Do you have an appointment?' },
          { speaker: 'Anna', speakerGender: 'die', de: 'Ja, ich habe einen Termin um 10 Uhr.', en: 'Yes, I have an appointment at 10 o\'clock.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der', de: 'Wie ist Ihr Name?', en: 'What is your name?' },
          { speaker: 'Anna', speakerGender: 'die', de: 'Mein Name ist Anna Müller.', en: 'My name is Anna Müller.' },
          { speaker: 'Mitarbeiter', speakerGender: 'der', de: 'Und Ihre Adresse?', en: 'And your address?' },
          { speaker: 'Anna', speakerGender: 'die', de: 'Ich wohne in der Hauptstraße 12 in Berlin.', en: 'I live at Hauptstraße 12 in Berlin.' },
        ],
      },
      challenge:
        'Before your appointment, practise saying your name, address, and date of birth in German out loud — that\'s 90% of A1 Anmeldung language.',
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Welche Unterlagen', role: 'pos1' },
            { text: 'brauche', role: 'verb', highlight: true },
            { text: 'ich?', role: 'mittelfeld' },
          ],
          caption: 'Direct question — verb in position 2.',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'meinen Ausweis', role: 'mittelfeld' },
            { text: 'mitgebracht.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Perfekt: haben in P2, Partizip II at the end.',
        },
      ],
      dialogue: {
        title: 'Dialog · Anmeldung am Schalter',
        level: 'A2',
        lines: [
          {
            speaker: 'Sachbearbeiterin',
            speakerGender: 'die',
            de: 'Guten Morgen. Was kann ich für Sie tun?',
            en: 'Good morning. What can I do for you?',
          },
          {
            speaker: 'Antragsteller',
            speakerGender: 'der',
            de: 'Guten Morgen. Ich möchte mich anmelden. Ich bin neu in Berlin.',
            en: 'Good morning. I would like to register my address. I am new in Berlin.',
          },
          {
            speaker: 'Sachbearbeiterin',
            speakerGender: 'die',
            de: 'Haben Sie Ihren Ausweis oder Reisepass dabei?',
            en: 'Do you have your ID card or passport with you?',
          },
          {
            speaker: 'Antragsteller',
            speakerGender: 'der',
            de: 'Ja, ich habe meinen Reisepass mitgebracht.',
            en: 'Yes, I brought my passport.',
          },
          {
            speaker: 'Sachbearbeiterin',
            speakerGender: 'die',
            de: 'Gut. Und die Wohnungsgeberbestätigung — haben Sie die auch dabei?',
            en: 'Good. And the landlord confirmation — do you have that with you too?',
          },
          {
            speaker: 'Antragsteller',
            speakerGender: 'der',
            de: 'Ja, hier ist alles. Was passiert als nächstes?',
            en: 'Yes, here is everything. What happens next?',
          },
          {
            speaker: 'Sachbearbeiterin',
            speakerGender: 'die',
            de: 'Ich trage Ihre Daten ein und Sie bekommen heute noch die Meldebescheinigung.',
            en: 'I will enter your data and you will receive the registration certificate today.',
          },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Asking about documents',
          phrases: [
            'Welche Unterlagen brauche ich?',
            'Brauche ich auch eine Wohnungsgeberbestätigung?',
            'Reicht der Reisepass, oder brauche ich auch den Ausweis?',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Confirming what you have',
          phrases: [
            'Ich habe meinen Ausweis mitgebracht.',
            'Hier sind meine Unterlagen.',
            'Ich habe alles dabei.',
          ],
        },
      ],
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Mir fehlt leider', role: 'pos1' },
            { text: 'die Wohnungsgeberbestätigung.', role: 'mittelfeld' },
          ],
          caption: 'Dative construction: mir (to me) fehlt (is missing) — the subject is the document.',
        },
        {
          slots: [
            { text: 'Kann', role: 'pos1', highlight: true },
            { text: 'ich', role: 'mittelfeld' },
            { text: 'das', role: 'mittelfeld' },
            { text: 'nachreichen?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'nachreichen is separable — the verb cluster sits at the end of the bracket.',
        },
      ],
      dialogue: {
        title: 'Dialog · Fehlende Wohnungsgeberbestätigung',
        level: 'B1',
        lines: [
          {
            speaker: 'Antragsteller',
            speakerGender: 'der',
            de: 'Ich möchte mich anmelden, aber mir fehlt leider die Wohnungsgeberbestätigung. Mein Vermieter hat sie noch nicht ausgestellt.',
            en: 'I would like to register, but unfortunately I am missing the landlord confirmation. My landlord has not yet issued it.',
          },
          {
            speaker: 'Sachbearbeiterin',
            speakerGender: 'die',
            de: 'Das ist leider ein Pflichtdokument. Ohne die Bestätigung können wir die Anmeldung nicht abschließen.',
            en: 'Unfortunately that is a mandatory document. Without the confirmation we cannot complete the registration.',
          },
          {
            speaker: 'Antragsteller',
            speakerGender: 'der',
            de: 'Kann ich das nachreichen? Und kann ich heute schon einen Antrag stellen?',
            en: 'Can I submit that later? And can I already start an application today?',
          },
          {
            speaker: 'Sachbearbeiterin',
            speakerGender: 'die',
            de: 'Sie können das Formular heute ausfüllen und die Bestätigung innerhalb von zwei Wochen nachreichen.',
            en: 'You can fill in the form today and submit the confirmation within two weeks.',
          },
          {
            speaker: 'Antragsteller',
            speakerGender: 'der',
            de: 'Und wenn ich die Frist verpasse — was passiert dann?',
            en: 'And if I miss the deadline — what happens then?',
          },
          {
            speaker: 'Sachbearbeiterin',
            speakerGender: 'die',
            de: 'Dann müssen Sie einen neuen Termin machen. Die gesetzliche Frist für die Anmeldung sind zwei Wochen nach dem Einzug.',
            en: 'Then you would need to make a new appointment. The legal deadline for registration is two weeks after moving in.',
          },
          {
            speaker: 'Antragsteller',
            speakerGender: 'der',
            de: 'Alles klar. Ich spreche noch heute mit meinem Vermieter.',
            en: 'Understood. I will speak with my landlord today.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Explaining a missing document',
          phrases: [
            'Mir fehlt leider die Wohnungsgeberbestätigung.',
            'Mein Vermieter hat sie noch nicht ausgestellt.',
            'Kann ich das nachreichen?',
            'Wie lange habe ich Zeit, das nachzureichen?',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Asking about procedures',
          phrases: [
            'Welche Frist gilt für die Anmeldung?',
            'Kann ich das Formular schon heute ausfüllen?',
            'Was passiert, wenn ich die Frist verpasse?',
            'Bekomme ich die Meldebescheinigung sofort?',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'B1',
        title: 'Nachricht · an den Vermieter',
        to: 'Vermieter / Hausverwaltung',
        subject: 'Bitte um Wohnungsgeberbestätigung',
        parts: [
          {
            label: 'Anrede',
            de: 'Sehr geehrte/r [Name],',
            en: 'Dear [Name],',
          },
          {
            label: 'Anliegen',
            de: 'ich bin am [Datum] in die Wohnung in der [Adresse] eingezogen und muss mich innerhalb von zwei Wochen beim Bürgeramt anmelden.',
            en: 'I moved into the flat at [address] on [date] and need to register at the Bürgeramt within two weeks.',
            highlight: 'muss mich innerhalb von zwei Wochen',
          },
          {
            label: 'Bitte',
            de: 'Könnten Sie mir bitte die Wohnungsgeberbestätigung ausstellen? Das Formular kann ich Ihnen gerne zuschicken.',
            en: 'Could you please issue me the landlord confirmation of tenancy? I would be happy to send you the form.',
            highlight: 'Könnten Sie mir bitte',
          },
          {
            label: 'Dank',
            de: 'Vielen Dank im Voraus.',
            en: 'Many thanks in advance.',
          },
          {
            label: 'Gruß',
            de: 'Mit freundlichen Grüßen,\n[Ihr Name]',
            en: 'Kind regards, [Your name]',
          },
        ],
        checklist: [
          'States why the document is needed (deadline, legal requirement)',
          'Polite request with Könnten Sie …?',
          'Offers to help (sending the form)',
          'Short and clear — one clear ask per message',
        ],
      },
      challenge:
        'Before your Anmeldung appointment, contact your landlord for the Wohnungsgeberbestätigung in German — use the template above as a starting point.',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Können', role: 'verb', highlight: true },
            { text: 'wir meine Kinder gleichzeitig', role: 'mittelfeld' },
            { text: 'anmelden,', role: 'verb-end', highlight: true },
            { text: 'oder brauche ich separate Termine?', role: 'satzende' },
          ],
          showBracket: true,
          caption: 'Asking about a family edge case — two clauses joined by oder.',
        },
        {
          slots: [
            { text: 'Gilt das auch,', role: 'pos1' },
            { text: 'wenn', role: 'verb', highlight: true },
            { text: 'ich einen Nebenwohnsitz', role: 'mittelfeld' },
            { text: 'anmelden möchte?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'wenn sends the verb cluster to the end of the subordinate clause.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Edge cases and family registration',
          phrases: [
            'Können wir meine Kinder gleichzeitig anmelden?',
            'Meine Frau / mein Mann hat einen anderen Reisepass — wie gehen wir vor?',
            'Was ist der Unterschied zwischen Haupt- und Nebenwohnsitz?',
            'Gilt das auch für EU-Bürger?',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Clarifying timelines and procedures',
          phrases: [
            'Wie lange dauert die Bearbeitung?',
            'Wann kann ich mit der Meldebescheinigung rechnen?',
            'Muss ich die Ummeldung auch beim Arbeitgeber melden?',
            'Gibt es eine digitale Option für die Anmeldung?',
          ],
        },
      ],
      challenge:
        'Look up whether your Bürgeramt offers online appointment booking. If you have a complex situation (family, non-EU passport, secondary address), list the questions you\'d need to ask — then translate them into German.',
    },
  },

  foundationLinks: [
    { label: 'Modal verbs (können, müssen, dürfen)', foundationSlug: 'modal-verbs' },
    { label: 'Sentence architecture', foundationSlug: 'satzbau' },
    { label: 'weil and wenn → verb to the end', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'Anmeldung — registering your address within two weeks is the law.',
    alt: 'A counter at a German Bürgeramt, with official forms and a clerk window',
  },
};
