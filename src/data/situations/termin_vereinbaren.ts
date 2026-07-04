import type { Situation } from '../../content/schema';

export const terminVereinbaren: Situation = {
  slug: 'termin-vereinbaren',
  theme: 'Daily Life',
  subtheme: 'Termin vereinbaren',
  category: 'Survival & daily life',
  title: 'Termin vereinbaren',
  intro:
    'Booking, rescheduling, and cancelling appointments in German: at the doctor, at an ' +
    'authority, or anywhere that requires a formal call or email — from a basic request ' +
    'to a detailed, polished email asking what documents to bring.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can book, change, or cancel an appointment by phone or email — and ask clearly ' +
    'what I need to bring — without freezing up or avoiding the call.',

  vocab: [
    {
      label: 'A1 · Termin',
      items: [
        { gender: 'der', word: 'Termin', meaning: 'appointment', plural: 'Termine' },
        { gender: 'die', word: 'Uhrzeit', meaning: 'time (of day)', plural: 'Uhrzeiten' },
        { gender: 'das', word: 'Datum', meaning: 'date', plural: 'Daten' },
        { gender: 'die', word: 'Warteliste', meaning: 'waiting list', plural: 'Wartelisten' },
        { gender: 'der', word: 'Rückruf', meaning: 'callback', plural: 'Rückrufe' },
      ],
    },
    {
      label: 'A2 · Aktionen',
      items: [
        { gender: 'die', word: 'Vereinbarung (vereinbaren)', meaning: 'arrangement (to arrange/book)', note: '"einen Termin vereinbaren"' },
        { gender: 'die', word: 'Verschiebung (verschieben)', meaning: 'postponement (to reschedule)', note: '"den Termin verschieben"' },
        { gender: 'die', word: 'Absage (absagen)', meaning: 'cancellation (to cancel)', note: '"den Termin absagen"' },
        { gender: 'die', word: 'Bestätigung (bestätigen)', meaning: 'confirmation (to confirm)', note: '"den Termin bestätigen"' },
        { gender: 'die', word: 'Erinnerung (erinnern)', meaning: 'reminder (to remind)', note: '"sich erinnern an + Akk."' },
      ],
    },
    {
      label: 'B1 · Unterlagen',
      items: [
        { gender: 'pl', word: 'Unterlagen', meaning: 'documents / paperwork', note: 'usually plural' },
        { gender: 'der', word: 'Ausweis', meaning: 'identity card / ID', plural: 'Ausweise' },
        { gender: 'die', word: 'Versicherungskarte', meaning: 'health insurance card', plural: 'Versicherungskarten' },
        { gender: 'das', word: 'Formular', meaning: 'form', plural: 'Formulare' },
        { gender: 'die', word: 'Überweisung', meaning: 'referral (medical)', plural: 'Überweisungen' },
      ],
    },
    {
      label: 'B2 · Verfügbarkeit & Kommunikation',
      items: [
        { gender: 'adj', word: 'verhindert', meaning: 'unable to attend / unavailable' },
        { gender: 'adj', word: 'flexibel', meaning: 'flexible' },
        { gender: 'adj', word: 'dringend', meaning: 'urgent' },
        { gender: 'der', word: 'Vorschlag', meaning: 'suggestion / proposal', plural: 'Vorschläge' },
        { gender: 'die', word: 'Alternative', meaning: 'alternative', plural: 'Alternativen' },
        { gender: 'verb', word: 'vorschlagen', meaning: 'to suggest / propose' },
        { gender: 'verb', word: 'nachfragen', meaning: 'to follow up / ask again' },
        { gender: 'verb', word: 'auf Wiederhören', meaning: 'goodbye (on the phone)' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'Ask for an appointment with a simple sentence.',
      example: 'Ich brauche einen Termin, bitte.',
    },
    {
      level: 'A2',
      canDo: 'Suggest and confirm a specific date and time.',
      example: 'Passt Ihnen Dienstag um 14 Uhr? — Ja, das passt gut.',
    },
    {
      level: 'B1',
      canDo: 'Reschedule an appointment and give a reason politely.',
      example: 'Ich möchte den Termin verschieben, weil ich leider verhindert bin.',
    },
    {
      level: 'B2',
      canDo: 'Write a formal request email, ask what to bring, and handle clarification.',
      example: 'Könnten Sie mir bestätigen, welche Unterlagen ich mitbringen soll?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can ask for an appointment and understand a simple answer.', achieved: true },
    { level: 'A2', text: 'I can confirm a date and time on the phone.', achieved: true },
    { level: 'B1', text: 'I can reschedule with a polite reason and accept an alternative.', achieved: false },
    { level: 'B2', text: 'I can write a formal appointment email asking for document details.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'brauche', role: 'verb', highlight: true },
            { text: 'einen Termin, bitte.', role: 'mittelfeld' },
          ],
          caption: 'The simplest request — verb in position 2, "bitte" softens it.',
        },
        {
          slots: [
            { text: 'Wann', role: 'pos1' },
            { text: 'haben', role: 'verb', highlight: true },
            { text: 'Sie einen Termin', role: 'mittelfeld' },
            { text: 'frei?', role: 'satzende' },
          ],
          caption: '"frei" acts as a result complement here — not a separable prefix.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Basic request',
          phrases: [
            'Ich brauche einen Termin.',
            'Ich möchte einen Termin machen.',
            'Haben Sie noch einen freien Termin?',
            'Wann ist der nächste Termin?',
          ],
        },
      ],
      challenge:
        'Call a service and say only "Guten Tag, ich brauche einen Termin, bitte." Then listen to what they say — even if you don\'t understand everything, you have started the conversation.',
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Passt', role: 'verb', highlight: true },
            { text: 'Ihnen Dienstag', role: 'mittelfeld' },
            { text: 'um 14 Uhr?', role: 'satzende' },
          ],
          caption: '"passen + Dativ" — "to suit someone". Verb-first yes/no question.',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'nehme', role: 'verb', highlight: true },
            { text: 'den Termin am Dienstag', role: 'mittelfeld' },
            { text: 'um 14 Uhr.', role: 'satzende' },
          ],
          caption: 'Confirming: "Ich nehme den Termin" — direct and clear.',
        },
      ],
      dialogue: {
        title: 'Dialog · Termin am Telefon buchen',
        level: 'A2',
        lines: [
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Praxis Dr. Weber, guten Tag.',
            en: 'Dr Weber\'s practice, good day.',
          },
          {
            speaker: 'Patientin',
            speakerGender: 'die',
            de: 'Guten Tag. Ich möchte gern einen Termin vereinbaren.',
            en: 'Good day. I would like to book an appointment.',
          },
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Wie ist Ihr Name, bitte?',
            en: 'What is your name, please?',
          },
          {
            speaker: 'Patientin',
            speakerGender: 'die',
            de: 'Mein Name ist Selin Arslan.',
            en: 'My name is Selin Arslan.',
          },
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Worum geht es? Haben Sie akute Beschwerden?',
            en: 'What is it about? Do you have acute complaints?',
          },
          {
            speaker: 'Patientin',
            speakerGender: 'die',
            de: 'Nein, es ist ein normaler Kontrolltermin.',
            en: 'No, it is a routine check-up.',
          },
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Gut. Passt Ihnen Dienstag der 15. Juli um 14 Uhr?',
            en: 'Good. Does Tuesday the 15th of July at 2 pm suit you?',
          },
          {
            speaker: 'Patientin',
            speakerGender: 'die',
            de: 'Ja, das passt gut. Danke schön.',
            en: 'Yes, that works well. Thank you very much.',
          },
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Bitte bringen Sie Ihre Versicherungskarte mit. Auf Wiederhören.',
            en: 'Please bring your insurance card with you. Goodbye.',
          },
          {
            speaker: 'Patientin',
            speakerGender: 'die',
            de: 'Auf Wiederhören.',
            en: 'Goodbye.',
          },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Scheduling by phone',
          phrases: [
            'Ich möchte gern einen Termin vereinbaren.',
            'Passt Ihnen …?',
            'Ja, das passt gut.',
            'Haben Sie etwas früher / später?',
            'Ich nehme den Termin.',
          ],
        },
        {
          levels: ['A2'],
          funktion: 'Phone basics',
          phrases: [
            'Können Sie das bitte wiederholen?',
            'Können Sie bitte langsamer sprechen?',
            'Können Sie das bitte buchstabieren?',
            'Auf Wiederhören.',
          ],
        },
      ],
      challenge:
        'Call a real appointment and use "Passt Ihnen …?" after you hear the first date offered — confirm it or ask for an alternative.',
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich möchte', role: 'pos1' },
            { text: 'den Termin', role: 'mittelfeld' },
            { text: 'verschieben,', role: 'verb', highlight: true },
            { text: 'weil ich leider verhindert', role: 'mittelfeld' },
            { text: 'bin.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: '"weil" sends the verb to the end of the clause — the key B1 pattern.',
        },
        {
          slots: [
            { text: 'Wäre', role: 'verb', highlight: true },
            { text: 'es möglich, einen neuen Termin', role: 'mittelfeld' },
            { text: 'zu vereinbaren?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: '"Wäre es möglich …?" — Konjunktiv II for a polite request.',
        },
      ],
      dialogue: {
        title: 'Dialog · Termin verschieben',
        level: 'B1',
        lines: [
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Praxis Dr. Weber, guten Tag.',
            en: 'Dr Weber\'s practice, good day.',
          },
          {
            speaker: 'Selin',
            speakerGender: 'die',
            de: 'Guten Tag, hier ist Selin Arslan. Ich habe einen Termin am Dienstag, den 15. Juli, um 14 Uhr. Leider muss ich diesen Termin verschieben, weil ich beruflich verhindert bin.',
            en: 'Good day, this is Selin Arslan. I have an appointment on Tuesday the 15th of July at 2 pm. Unfortunately I need to reschedule this appointment because I have a work commitment.',
          },
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Das ist kein Problem. Wäre der 22. Juli um 10 Uhr möglich?',
            en: 'That is no problem. Would the 22nd of July at 10 am be possible?',
          },
          {
            speaker: 'Selin',
            speakerGender: 'die',
            de: 'Hmm, der Vormittag ist leider schwierig. Haben Sie noch etwas am Nachmittag?',
            en: 'Hmm, the morning is unfortunately difficult. Do you have anything in the afternoon?',
          },
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Ja, am Mittwoch, dem 23., um 15:30 Uhr wäre noch etwas frei.',
            en: 'Yes, on Wednesday the 23rd at 3:30 pm there is still a slot free.',
          },
          {
            speaker: 'Selin',
            speakerGender: 'die',
            de: 'Das passt sehr gut. Vielen Dank für Ihr Entgegenkommen.',
            en: 'That works very well. Many thanks for your flexibility.',
          },
          {
            speaker: 'Praxis',
            speakerGender: 'die',
            de: 'Gern geschehen. Wir sehen Sie dann am 23. um 15:30 Uhr. Auf Wiederhören.',
            en: 'You are welcome. We will see you on the 23rd at 3:30 pm. Goodbye.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Rescheduling and cancelling',
          phrases: [
            'Ich möchte meinen Termin verschieben.',
            'Ich muss den Termin leider absagen, weil …',
            'Ich bin leider verhindert.',
            'Wäre es möglich, einen neuen Termin zu vereinbaren?',
            'Haben Sie noch etwas am Nachmittag / nächste Woche?',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Termin absagen',
        to: 'anmeldung@praxis-weber.de',
        subject: 'Absage meines Termins am 15. Juli',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          {
            label: 'Anliegen',
            de: 'hiermit möchte ich meinen Termin am Dienstag, dem 15. Juli 2025 um 14:00 Uhr absagen.',
            en: 'I hereby wish to cancel my appointment on Tuesday 15 July 2025 at 2:00 pm.',
            highlight: 'hiermit möchte ich … absagen',
          },
          {
            label: 'Begründung',
            de: 'Leider bin ich an diesem Tag beruflich verhindert und kann den Termin nicht wahrnehmen.',
            en: 'Unfortunately I have a work commitment on this day and cannot attend the appointment.',
            highlight: 'weil ich … verhindert bin',
          },
          {
            label: 'Bitte',
            de: 'Ich würde gerne einen Ersatztermin vereinbaren. Wäre es möglich, mir einen Termin in der darauf folgenden Woche anzubieten?',
            en: 'I would like to arrange a replacement appointment. Would it be possible to offer me an appointment in the following week?',
            highlight: 'Wäre es möglich, … anzubieten?',
          },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nSelin Arslan', en: 'Kind regards, Selin Arslan' },
        ],
        checklist: [
          'States the exact appointment details (date, time)',
          'Gives a brief, polite reason',
          'Asks for a replacement (not just cancels)',
          'Polite conditional (Wäre es möglich …?)',
          'Formal greeting and closing',
        ],
      },
      challenge:
        'Call and reschedule a real appointment. Prepare one sentence in advance using "weil ich leider … bin" — then say it.',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Könnten Sie', role: 'pos1' },
            { text: 'mir', role: 'mittelfeld' },
            { text: 'bestätigen,', role: 'verb', highlight: true },
            { text: 'welche Unterlagen ich mitbringen', role: 'mittelfeld' },
            { text: 'soll?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Indirect question embedded after "bestätigen" — verb goes to the very end.',
        },
        {
          slots: [
            { text: 'Ich würde', role: 'pos1' },
            { text: 'gerne', role: 'mittelfeld' },
            { text: 'wissen,', role: 'verb', highlight: true },
            { text: 'ob ein Überweisungsschein erforderlich', role: 'mittelfeld' },
            { text: 'ist.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: '"ob" (whether) triggers end-position — very common in formal enquiries.',
        },
      ],
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Formal requests and clarifications',
          phrases: [
            'Ich würde gerne einen Termin für … vereinbaren.',
            'Könnten Sie mir bestätigen, welche Unterlagen ich mitbringen soll?',
            'Ich würde gerne wissen, ob … erforderlich ist.',
            'Bitte teilen Sie mir mit, ob … notwendig ist.',
            'Falls Sie noch weitere Informationen benötigen, stehe ich gerne zur Verfügung.',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Handling complex scheduling',
          phrases: [
            'Ich bin flexibel und passe mich gerne an.',
            'Würde es sich einrichten lassen, dass …?',
            'Sollte der Termin nicht mehr verfügbar sein, wäre ich auch mit einem Termin auf der Warteliste einverstanden.',
            'Bitte lassen Sie mich wissen, falls sich etwas ändert.',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Terminanfrage mit Dokumentenfrage',
        to: 'anmeldung@facharzt-berlin.de',
        subject: 'Terminanfrage – Erstvorstellung',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          {
            label: 'Einleitung',
            de: 'mein Name ist Selin Arslan und ich wurde von meiner Hausärztin, Frau Dr. Weber, an Ihre Praxis überwiesen.',
            en: 'My name is Selin Arslan and I have been referred to your practice by my GP, Dr Weber.',
          },
          {
            label: 'Anliegen',
            de: 'Ich möchte gerne einen Termin zur Erstvorstellung vereinbaren. Ich bin wochentags ab 14:00 Uhr sowie ganztägig freitags verfügbar.',
            en: 'I would like to arrange an appointment for a first consultation. I am available on weekday afternoons from 2:00 pm and all day on Fridays.',
            highlight: 'Ich möchte gerne einen Termin … vereinbaren',
          },
          {
            label: 'Unterlagen',
            de: 'Könnten Sie mir außerdem bestätigen, welche Unterlagen ich zum Termin mitbringen soll? Ich würde gerne wissen, ob die Überweisung ausreicht oder ob Sie weitere Befunde benötigen.',
            en: 'Could you also confirm which documents I should bring to the appointment? I would like to know whether the referral is sufficient or whether you need additional test results.',
            highlight: 'Könnten Sie mir … bestätigen, welche Unterlagen',
          },
          {
            label: 'Abschluss',
            de: 'Falls Sie für eine Terminbestätigung eine Rückrufnummer bevorzugen, erreichen Sie mich unter 0176 123 45 67.',
            en: 'If you prefer a phone number for appointment confirmation, you can reach me on 0176 123 45 67.',
          },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nSelin Arslan', en: 'Kind regards, Selin Arslan' },
        ],
        checklist: [
          'States the referral context clearly',
          'Specifies availability (days and times)',
          'Politely asks about required documents',
          'Uses "ob" clause for an embedded yes/no question',
          'Offers alternative contact method',
          'Formal greeting and closing throughout',
        ],
      },
      challenge:
        'Write a formal appointment request email for a real or fictional appointment. Include your availability, ask what to bring, and use at least one "ob …" or "welche …" indirect question.',
    },
  },

  foundationLinks: [
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'satzbau' },
    { label: 'Modal verbs (möchten, müssen, sollen)', foundationSlug: 'modal-verbs' },
    { label: 'weil and ob — subordinate clauses', foundationSlug: 'connectors' },
    { label: 'Konjunktiv II for polite requests', foundationSlug: 'konjunktiv' },
  ],

  hero: {
    caption: 'Termin vereinbaren — booking appointments with confidence.',
    alt: 'A person on the phone at a desk, with a calendar open in front of them',
  },
};
