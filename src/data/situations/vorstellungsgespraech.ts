import type { Situation } from '../../content/schema';

export const vorstellungsgespraech: Situation = {
  slug: 'vorstellungsgespraech',
  theme: 'Work',
  subtheme: 'Vorstellungsgespräch',
  category: 'Professional life',
  title: 'Vorstellungsgespräch',
  intro:
    'Walking into a German job interview: introducing yourself, describing your ' +
    'experience, answering questions about strengths and goals, and asking confident ' +
    'questions back — from a simple self-introduction to nuanced professional dialogue.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can introduce myself professionally, describe my background, talk about my ' +
    'strengths, and ask relevant questions in a German job interview — without freezing up.',

  vocab: [
    {
      label: 'A1 · Bewerbung',
      items: [
        { gender: 'die', word: 'Bewerbung', meaning: 'application', plural: 'Bewerbungen' },
        { gender: 'der', word: 'Lebenslauf', meaning: 'CV / résumé', plural: 'Lebensläufe' },
        { gender: 'das', word: 'Zeugnis', meaning: 'reference / school report', plural: 'Zeugnisse' },
        { gender: 'die', word: 'Stelle', meaning: 'position / job', plural: 'Stellen' },
        { gender: 'das', word: 'Vorstellungsgespräch', meaning: 'job interview', plural: 'Vorstellungsgespräche' },
      ],
    },
    {
      label: 'A2 · Erfahrung',
      items: [
        { gender: 'die', word: 'Erfahrung', meaning: 'experience', plural: 'Erfahrungen' },
        { gender: 'das', word: 'Praktikum', meaning: 'internship', plural: 'Praktika' },
        { gender: 'die', word: 'Ausbildung', meaning: 'vocational training / qualification', plural: 'Ausbildungen' },
        { gender: 'die', word: 'Probezeit', meaning: 'probationary period', plural: 'Probezeiten' },
        { gender: 'die', word: 'Einarbeitung', meaning: 'onboarding / induction', note: 'usually singular' },
      ],
    },
    {
      label: 'B1 · Eigenschaften',
      items: [
        { gender: 'die', word: 'Stärke', meaning: 'strength', plural: 'Stärken' },
        { gender: 'die', word: 'Teamfähigkeit', meaning: 'ability to work in a team', note: 'adjective: teamfähig' },
        { gender: 'die', word: 'Belastbarkeit', meaning: 'resilience / ability to handle pressure', note: 'adjective: belastbar' },
        { gender: 'die', word: 'Zuverlässigkeit', meaning: 'reliability', note: 'adjective: zuverlässig' },
      ],
    },
    {
      label: 'B2 · Arbeitsbedingungen',
      items: [
        { gender: 'die', word: 'Arbeitszeit', meaning: 'working hours', plural: 'Arbeitszeiten' },
        { gender: 'das', word: 'Gehalt', meaning: 'salary', plural: 'Gehälter' },
        { gender: 'die', word: 'Aufgabe', meaning: 'task / responsibility', plural: 'Aufgaben' },
      ],
    },
  ],

  progression: [
    {
      level: 'A1',
      canDo: 'State your name, job title, and where you are from.',
      example: 'Ich heiße Maria. Ich bin Verkäuferin. Ich komme aus Polen.',
    },
    {
      level: 'A2',
      canDo: 'Say where you worked, for how long, and what you did.',
      example: 'Ich habe zwei Jahre als Köchin in einem Restaurant gearbeitet.',
    },
    {
      level: 'B1',
      canDo: 'Describe strengths, goals, and explain why you want the job.',
      example: 'Meine Stärke ist, dass ich sehr zuverlässig und teamfähig bin.',
    },
    {
      level: 'B2',
      canDo: 'Ask nuanced questions, handle follow-ups, and negotiate professionally.',
      example: 'Könnten Sie mir mehr über die Aufgaben und die Einarbeitung erzählen?',
    },
  ],

  milestones: [
    { level: 'A1', text: 'I can say my name, nationality, and job title.', achieved: true },
    { level: 'A2', text: 'I can describe a previous job and how long I worked there.', achieved: true },
    { level: 'B1', text: 'I can talk about my strengths and career goals in full sentences.', achieved: false },
    { level: 'B2', text: 'I can hold a two-way professional conversation and ask strategic questions.', achieved: false },
  ],

  byLevel: {
    A1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'heiße', role: 'verb', highlight: true },
            { text: 'Maria Kowalski.', role: 'mittelfeld' },
          ],
          caption: 'Simple present: verb always in position 2.',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'bin', role: 'verb', highlight: true },
            { text: 'Verkäuferin.', role: 'mittelfeld' },
          ],
          caption: 'Job title after "bin" — no article needed in German.',
        },
      ],
      phrases: [
        {
          levels: ['A1'],
          funktion: 'Basic self-introduction',
          phrases: [
            'Ich heiße …',
            'Ich bin … (Berufsbezeichnung).',
            'Ich komme aus …',
            'Ich wohne in …',
            'Ich spreche Polnisch und ein bisschen Deutsch.',
          ],
        },
      ],
      dialogue: {
        title: 'Dialog · Einfache Vorstellung',
        level: 'A1',
        lines: [
          { speaker: 'Interviewerin', speakerGender: 'die',
            de: 'Guten Morgen. Bitte stellen Sie sich kurz vor.',
            en: 'Good morning. Please introduce yourself briefly.' },
          { speaker: 'Bewerberin', speakerGender: 'die',
            de: 'Guten Morgen. Ich heiße Maria Kowalski.',
            en: 'Good morning. My name is Maria Kowalski.' },
          { speaker: 'Interviewerin', speakerGender: 'die',
            de: 'Was sind Sie von Beruf?',
            en: 'What is your profession?' },
          { speaker: 'Bewerberin', speakerGender: 'die',
            de: 'Ich bin Verkäuferin.',
            en: 'I am a sales assistant.' },
          { speaker: 'Interviewerin', speakerGender: 'die',
            de: 'Woher kommen Sie?',
            en: 'Where are you from?' },
          { speaker: 'Bewerberin', speakerGender: 'die',
            de: 'Ich komme aus Polen.',
            en: 'I am from Poland.' },
          { speaker: 'Interviewerin', speakerGender: 'die',
            de: 'Sehr gut. Vielen Dank.',
            en: 'Very good. Thank you very much.' },
        ],
      },
      writing: {
        kind: 'note',
        level: 'A1',
        title: 'Notiz · Vorstellung vorbereiten',
        parts: [
          { label: 'Name', de: 'Ich heiße … / Mein Name ist …', en: 'My name is …' },
          { label: 'Beruf', de: 'Ich bin … (Berufsbezeichnung)', en: 'I am … (job title)' },
          { label: 'Herkunft', de: 'Ich komme aus …', en: 'I come from …' },
          { label: 'Wohnort', de: 'Ich wohne in …', en: 'I live in …' },
          { label: 'Sprachen', de: 'Ich spreche … und Deutsch.', en: 'I speak … and German.' },
        ],
      },
      challenge:
        'Introduce yourself in three sentences: name, job title, and where you are from. Say it aloud without reading.',
    },

    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'zwei Jahre als Köchin', role: 'mittelfeld' },
            { text: 'gearbeitet.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Perfekt: haben (P2) + Partizip II at the end — the verb bracket.',
        },
        {
          slots: [
            { text: 'Dort', role: 'pos1' },
            { text: 'habe', role: 'verb', highlight: true },
            { text: 'ich Kundenberatung gemacht und die Kasse', role: 'mittelfeld' },
            { text: 'bedient.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Time expression in Position 1 pushes the subject to the middle field.',
        },
      ],
      dialogue: {
        title: 'Dialog · Begrüßung und Vorstellung',
        level: 'A2',
        lines: [
          {
            speaker: 'Personalerin',
            speakerGender: 'die',
            de: 'Guten Morgen! Sie sind Frau Kowalski?',
            en: 'Good morning! You are Ms Kowalski?',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Ja, guten Morgen. Ich heiße Maria Kowalski.',
            en: 'Yes, good morning. My name is Maria Kowalski.',
          },
          {
            speaker: 'Personalerin',
            speakerGender: 'die',
            de: 'Schön, dass Sie da sind. Bitte setzen Sie sich.',
            en: 'Glad you are here. Please take a seat.',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Danke schön.',
            en: 'Thank you.',
          },
          {
            speaker: 'Personalerin',
            speakerGender: 'die',
            de: 'Frau Kowalski, erzählen Sie uns bitte kurz von sich.',
            en: 'Ms Kowalski, please tell us a little about yourself.',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Ich komme aus Polen und wohne seit drei Jahren in Berlin. Ich habe zwei Jahre als Verkäuferin in einem Supermarkt gearbeitet.',
            en: 'I am from Poland and have been living in Berlin for three years. I worked as a sales assistant in a supermarket for two years.',
          },
          {
            speaker: 'Personalerin',
            speakerGender: 'die',
            de: 'Was haben Sie dort gemacht?',
            en: 'What did you do there?',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Ich habe die Kunden beraten und an der Kasse gearbeitet.',
            en: 'I advised customers and worked at the checkout.',
          },
        ],
      },
      phrases: [
        {
          levels: ['A2'],
          funktion: 'Describing previous experience',
          phrases: [
            'Ich habe … Jahre als … gearbeitet.',
            'Ich habe Erfahrung in …',
            'Mein letzter Job war …',
            'Dort habe ich … gemacht.',
          ],
        },
      ],
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · nach dem Gespräch',
        parts: [
          { label: 'Opener', de: 'Hey! Das Vorstellungsgespräch war heute. 😊', en: 'Hey! The job interview was today.' },
          { label: 'Wie es war', de: 'Ich bin pünktlich angekommen. Alle waren freundlich.', en: 'I arrived on time. Everyone was friendly.', highlight: 'bin pünktlich angekommen' },
          { label: 'Was passiert ist', de: 'Ich habe von meiner Erfahrung als Verkäuferin erzählt und meine Sprachkenntnisse erklärt.', en: 'I talked about my experience as a sales assistant and explained my language skills.' },
          { label: 'Gruß', de: 'Bin gespannt! Bis bald 🤞', en: 'Fingers crossed! See you soon.' },
        ],
      },
      challenge:
        'Describe your last job (real or invented) in four sentences: where, how long, what role, and two main tasks.',
    },

    B1: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Meine größte Stärke', role: 'pos1' },
            { text: 'ist,', role: 'verb', highlight: true },
            { text: 'dass ich sehr zuverlässig', role: 'mittelfeld' },
            { text: 'bin.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: '"dass" sends the verb to the end of the subordinate clause.',
        },
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'in drei Jahren mehr Verantwortung',
              role: 'mittelfeld' },
            { text: 'übernehmen.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Modal + infinitive bracket — stating a career goal.',
        },
      ],
      dialogue: {
        title: 'Dialog · Stärken und Ziele',
        level: 'B1',
        lines: [
          {
            speaker: 'Personaler',
            speakerGender: 'der',
            de: 'Was würden Sie sagen, ist Ihre größte Stärke?',
            en: 'What would you say is your greatest strength?',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Meine Stärke ist, dass ich sehr zuverlässig und belastbar bin. Ich arbeite auch gerne im Team.',
            en: 'My strength is that I am very reliable and resilient. I also enjoy working in a team.',
          },
          {
            speaker: 'Personaler',
            speakerGender: 'der',
            de: 'Und wo sehen Sie sich in fünf Jahren?',
            en: 'And where do you see yourself in five years?',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Ich möchte meine Fachkenntnisse weiter ausbauen und mittelfristig mehr Verantwortung übernehmen — vielleicht in einer Teamleiterrolle.',
            en: 'I would like to further develop my expertise and take on more responsibility in the medium term — perhaps in a team leader role.',
          },
          {
            speaker: 'Personaler',
            speakerGender: 'der',
            de: 'Warum möchten Sie zu uns wechseln?',
            en: 'Why do you want to move to us?',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Weil Ihr Unternehmen einen sehr guten Ruf hat und ich die Möglichkeit schätze, mich hier weiterzuentwickeln.',
            en: 'Because your company has an excellent reputation and I appreciate the opportunity to develop further here.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B1'],
          funktion: 'Talking about strengths',
          phrases: [
            'Meine größte Stärke ist, dass ich …',
            'Ich bin sehr zuverlässig / belastbar / teamfähig.',
            'Ich arbeite gerne selbstständig, aber auch im Team.',
            'Ich lerne schnell und passe mich gut an.',
          ],
        },
        {
          levels: ['B1'],
          funktion: 'Career goals',
          phrases: [
            'Ich möchte mich in diesem Bereich weiterentwickeln.',
            'Mein Ziel ist es, mehr Verantwortung zu übernehmen.',
            'Ich interessiere mich besonders für …',
            'Ich sehe mich langfristig im Bereich …',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · Dankesnachricht nach dem Gespräch',
        to: 'j.mueller@firma-berlin.de',
        subject: 'Vielen Dank für das Gespräch heute',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrter Herr Müller,', en: 'Dear Mr Müller,' },
          {
            label: 'Dank',
            de: 'ich möchte mich herzlich für das angenehme Gespräch heute Morgen bedanken.',
            en: 'I would like to sincerely thank you for the pleasant conversation this morning.',
            highlight: 'ich möchte mich herzlich … bedanken',
          },
          {
            label: 'Interesse bestätigen',
            de: 'Das Gespräch hat mein Interesse an der Stelle noch einmal bestärkt. Ich bin überzeugt, dass ich mit meiner Erfahrung und Motivation einen guten Beitrag leisten kann.',
            en: 'The conversation has reinforced my interest in the position. I am convinced that with my experience and motivation I can make a good contribution.',
            highlight: 'ich bin überzeugt, dass',
          },
          {
            label: 'Abschluss',
            de: 'Ich freue mich auf Ihre Rückmeldung und stehe für Rückfragen gern zur Verfügung.',
            en: 'I look forward to your response and am happy to be available for any questions.',
          },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nMaria Kowalski', en: 'Kind regards, Maria Kowalski' },
        ],
        checklist: [
          'Formal greeting using correct title (Herr/Frau)',
          'Specific thanks referencing the interview',
          'Restates enthusiasm and a concrete reason',
          'Polite availability for follow-up',
          'Formal closing (Mit freundlichen Grüßen)',
        ],
      },
      challenge:
        'Answer the question "Was sind Ihre Schwächen?" in two sentences: name one honest weakness and immediately say what you are doing about it.',
    },

    B2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Könnten Sie', role: 'pos1' },
            { text: 'mir', role: 'mittelfeld' },
            { text: 'erklären,', role: 'verb', highlight: true },
            { text: 'wie die Einarbeitung', role: 'mittelfeld' },
            { text: 'aussieht?', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'Indirect question with Konjunktiv II (Könnten Sie) — the polite B2 register.',
        },
      ],
      dialogue: {
        title: 'Dialog · Rückfragen stellen',
        level: 'B2',
        lines: [
          {
            speaker: 'Personalerin',
            speakerGender: 'die',
            de: 'Haben Sie noch Fragen an uns?',
            en: 'Do you have any questions for us?',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Ja, gerne. Ich hätte eine Frage zur Einarbeitung: Wie sieht die in den ersten Wochen konkret aus?',
            en: 'Yes, gladly. I have a question about the onboarding: what does it look like concretely in the first few weeks?',
          },
          {
            speaker: 'Personalerin',
            speakerGender: 'die',
            de: 'Sie werden in den ersten vier Wochen eng von einer erfahrenen Kollegin begleitet.',
            en: 'You will be closely supported by an experienced colleague in the first four weeks.',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Das klingt sehr gut. Könnten Sie mir außerdem mehr über die typischen Aufgaben in dieser Stelle erzählen? Ich würde gerne verstehen, wie eine normale Arbeitswoche aussieht.',
            en: 'That sounds very good. Could you also tell me more about the typical tasks in this role? I would love to understand what a normal working week looks like.',
          },
          {
            speaker: 'Personalerin',
            speakerGender: 'die',
            de: 'Natürlich. Sie würden hauptsächlich Kundenprojekte betreuen, wöchentliche Meetings mit dem Team leiten und regelmäßige Berichte erstellen.',
            en: 'Of course. You would mainly manage client projects, lead weekly team meetings, and produce regular reports.',
          },
          {
            speaker: 'Maria',
            speakerGender: 'die',
            de: 'Und wie ist die Probezeit geregelt — sind das die üblichen sechs Monate?',
            en: 'And how is the probationary period structured — is it the usual six months?',
          },
          {
            speaker: 'Personalerin',
            speakerGender: 'die',
            de: 'Ja, sechs Monate. Danach gibt es ein ausführliches Feedbackgespräch.',
            en: 'Yes, six months. After that there is a thorough feedback conversation.',
          },
        ],
      },
      phrases: [
        {
          levels: ['B2'],
          funktion: 'Asking questions back professionally',
          phrases: [
            'Ich hätte eine Frage zu …',
            'Könnten Sie mir mehr über … erzählen?',
            'Wie sieht … konkret aus?',
            'Wie ist … geregelt?',
            'Was erwartet das Team von jemandem in dieser Rolle?',
            'Wie würden Sie die Unternehmenskultur beschreiben?',
          ],
        },
        {
          levels: ['B2'],
          funktion: 'Nuanced self-presentation',
          phrases: [
            'Ich bringe nicht nur … mit, sondern auch …',
            'Was mich besonders an dieser Stelle reizt, ist …',
            'Ich habe bereits Erfahrung darin, … zu …',
            'Im Vergleich zu meiner letzten Position würde ich hier … stärker einbringen.',
          ],
        },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B2',
        title: 'E-Mail · Dankeschön nach dem Gespräch',
        to: 'linda.weber@firma-beispiel.de',
        subject: 'Dankeschön für das Gespräch heute — Maria Kowalski',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Frau Weber,', en: 'Dear Ms Weber,' },
          { label: 'Dank',
            de: 'vielen Dank für das angenehme Gespräch heute Morgen und die Möglichkeit, mehr über das Unternehmen und die Stelle zu erfahren.',
            en: 'Many thanks for the pleasant conversation this morning and the opportunity to learn more about the company and the role.' },
          { label: 'Bestätigung',
            de: 'Ich bin nach dem Gespräch noch motivierter als zuvor, da ich überzeugt bin, dass meine Erfahrungen in der Kundenberatung und meine Mehrsprachigkeit gut zum Team passen würden.',
            en: 'After the conversation I am even more motivated than before, as I am convinced that my experience in customer consultancy and my multilingualism would be a good fit for the team.',
            highlight: 'da ich überzeugt bin, dass meine Erfahrungen' },
          { label: 'Ausblick', de: 'Ich freue mich auf Ihre Rückmeldung und stehe für Rückfragen jederzeit zur Verfügung.', en: 'I look forward to your response and am available for any further questions at any time.' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nMaria Kowalski', en: 'Kind regards, Maria Kowalski' },
        ],
        checklist: [
          'References the specific conversation (date, interviewer)',
          'da + verb at end (causal subordinate clause)',
          'dass + verb at end (second subordinate clause)',
          'Konjunktiv II: würden (polite conditional)',
          'Forward-looking close without being needy',
        ],
      },
      challenge:
        'Prepare three genuine questions for your next interview — one about the team, one about expectations, one about development opportunities. Write them in formal German.',
    },
  },

  foundationLinks: [
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'satzbau' },
    { label: 'Modal verbs', foundationSlug: 'modal-verbs' },
    { label: 'dass → verb to the end', foundationSlug: 'connectors' },
    { label: 'Konjunktiv II for polite requests', foundationSlug: 'konjunktiv' },
  ],

  hero: {
    src: '/images/interview-vorstellung.png',
    caption: 'Das Vorstellungsgespräch — presenting yourself with confidence.',
    alt: 'Two people sitting across a desk in a professional interview setting',
  },
};
