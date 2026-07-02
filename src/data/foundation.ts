// ============================================================
// Foundation registry — add a new topic by:
//   1. Adding an entry to foundationTopics below
//   2. Dropping real content in when ready (sentenceFrames, progression, etc.)
// ============================================================

import type { FoundationTopic } from '../content/schema';

export const foundationTopics: FoundationTopic[] = [
  {
    slug: 'satzbau',
    title: 'Sentence Architecture',
    category: 'Structure',
    teaser: 'How German sentences are built: the verb-second rule, position 1, and the middle field.',
    relatedSituations: ['apotheke'],
    intro:
      'German word order follows two rules that explain almost every pattern you will encounter. ' +
      'In a main clause (Hauptsatz) the verb always occupies position 2 — no matter what comes first. ' +
      'In a subordinate clause (Nebensatz) the verb moves to the very end. ' +
      'Everything else in German sentence structure flows from those two rules.',

    sections: [
      // ── Section 1: The Hauptsatz ─────────────────────────────
      {
        title: 'The Hauptsatz · Main Clause',

        body:
          'The conjugated verb always sits in position 2. Position 1 can hold the subject, ' +
          'a time expression, or almost anything else — but the moment it moves, ' +
          'the verb stays in position 2 and the subject shifts to position 3.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich',     role: 'pos1' },
              { text: 'lerne',   role: 'verb', highlight: true },
              { text: 'heute Deutsch.', role: 'mittelfeld' },
            ],
            caption: 'Subject in position 1 — the default order.',
          },
          {
            slots: [
              { text: 'Heute',   role: 'pos1' },
              { text: 'lerne',   role: 'verb', highlight: true },
              { text: 'ich Deutsch.', role: 'mittelfeld' },
            ],
            caption: 'Time expression in position 1 — verb stays in position 2, subject moves to position 3.',
          },
        ],
      },

      // ── Section 2: Subordinating conjunctions ────────────────
      {
        title: 'Subordinating Conjunctions · Verb to the End',

        body:
          'Subordinating conjunctions introduce a Nebensatz (subordinate clause). ' +
          'They push the conjugated verb all the way to the end of that clause. ' +
          'The Hauptsatz and Nebensatz are separated by a comma.',
        connectors: [
          {
            kind: 'subordinating',
            label: 'Subordinating — verb moves to the end',
            note: 'weil ich krank bin · dass er kommt · obwohl es regnet',
            items: [
              { word: 'weil',    meaning: 'because' },
              { word: 'dass',    meaning: 'that' },
              { word: 'obwohl',  meaning: 'although' },
              { word: 'wenn',    meaning: 'when / if' },
              { word: 'als',     meaning: 'when (past)' },
              { word: 'ob',      meaning: 'whether' },
              { word: 'damit',   meaning: 'so that' },
              { word: 'während', meaning: 'while' },
              { word: 'bevor',   meaning: 'before' },
              { word: 'nachdem', meaning: 'after' },
            ],
          },
        ],
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich gehe zum Arzt,', role: 'pos1' },
              { text: 'weil',               role: 'mittelfeld' },
              { text: 'ich krank',          role: 'mittelfeld' },
              { text: 'bin.',               role: 'verb-end', highlight: true },
            ],
            caption: 'The verb "bin" is pushed to the very end of the Nebensatz.',
          },
          {
            slots: [
              { text: 'Er sagt,',  role: 'pos1' },
              { text: 'dass',      role: 'mittelfeld' },
              { text: 'er morgen', role: 'mittelfeld' },
              { text: 'kommt.',    role: 'verb-end', highlight: true },
            ],
            caption: 'dass introduces indirect speech — verb goes to the end.',
          },
        ],
      },

      // ── Section 3: Nebensatz first ───────────────────────────
      {
        title: 'Nebensatz First · Verb Inversion',

        body:
          'A Nebensatz can come before the Hauptsatz. When it does, the entire subordinate clause ' +
          'fills position 1. The Hauptsatz verb must still be in position 2 — ' +
          'which means it is the very first word of the Hauptsatz section, immediately after the comma.',
        callout: {
          kind: 'tip',
          label: 'The rule in one sentence',
          text: 'Nebensatz = Position 1. The Hauptsatz verb is still in Position 2 — so it lands right after the comma, as the first word of the main clause.',
        },
        sentenceFrames: [
          {
            slots: [
              { text: 'Weil ich krank bin,', role: 'pos1' },
              { text: 'gehe',               role: 'verb', highlight: true },
              { text: 'ich zum Arzt.',       role: 'mittelfeld' },
            ],
            caption: 'The whole Nebensatz fills position 1. "gehe" is position 2 — the first word after the comma.',
          },
          {
            slots: [
              { text: 'Obwohl es regnet,', role: 'pos1' },
              { text: 'fahren',            role: 'verb', highlight: true },
              { text: 'wir ans Meer.',     role: 'mittelfeld' },
            ],
            caption: 'Same pattern with obwohl. The subject "wir" is pushed to position 3.',
          },
        ],
      },

      // ── Section 4: Coordinating conjunctions ─────────────────
      {
        title: 'Coordinating Conjunctions · Verb Stays Put',

        body:
          'Coordinating conjunctions join two complete Hauptsatz clauses. ' +
          'They sit between the clauses but are not part of either one — ' +
          'they do not occupy position 1, so the word order of both clauses is unchanged.',
        connectors: [
          {
            kind: 'coordinating',
            label: 'Coordinating — verb stays in position 2',
            note: 'These conjunctions sit outside the clause. Word order on both sides is normal.',
            items: [
              { word: 'und',     meaning: 'and' },
              { word: 'aber',    meaning: 'but' },
              { word: 'oder',    meaning: 'or' },
              { word: 'denn',    meaning: 'because / for' },
              { word: 'sondern', meaning: 'but rather' },
            ],
          },
        ],
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich bin müde,', role: 'pos1' },
              { text: 'aber',          role: 'mittelfeld' },
              { text: 'ich',           role: 'mittelfeld' },
              { text: 'lerne',         role: 'verb', highlight: true },
              { text: 'weiter.',       role: 'mittelfeld' },
            ],
            caption: '"aber" sits between the two clauses. Verb in the second clause is still in position 2.',
          },
        ],
      },
    ],

    progression: [
      {
        level: 'A1',
        canDo: 'Build simple Hauptsatz sentences with the verb in position 2.',
        example: 'Heute lerne ich Deutsch.',
      },
      {
        level: 'A2',
        canDo: 'Join clauses with und/aber; form a Nebensatz with weil or dass; front a Nebensatz and invert correctly.',
        example: 'Weil ich krank bin, gehe ich zum Arzt.',
      },
      {
        level: 'B1',
        canDo: 'Use obwohl, während, bevor and nachdem; handle verb inversion confidently in speech.',
        example: 'Obwohl es spät war, haben wir weitergearbeitet.',
      },
      {
        level: 'B2',
        canDo: 'Chain multiple clauses; use dass and ob in indirect speech; vary position 1 for emphasis and style.',
        example: 'Er fragte, ob ich kommen würde, obwohl er die Antwort schon kannte.',
      },
    ],
  },
  {
    slug: 'verbklammer',
    title: 'Verb Bracket',
    intro: 'Placeholder — real content coming soon.',
    category: 'Structure',
    teaser: 'The bracket that opens at verb position 2 and closes at the end of the clause.',
    relatedSituations: ['apotheke'],
  },
  {
    slug: 'cases',
    title: 'The Case System',
    intro: 'Placeholder — real content coming soon.',
    category: 'Grammar',
    teaser: 'Nominative, accusative, dative, genitive — what changes and why it matters.',
  },
  {
    slug: 'modal-verbs',
    title: 'Modal Verbs',
    intro: 'Placeholder — real content coming soon.',
    category: 'Verbs',
    teaser: 'können, müssen, wollen, sollen, dürfen, möchten — and how they push the main verb to the end.',
    relatedSituations: ['apotheke'],
  },
  {
    slug: 'tense-stack',
    title: 'Tense Stack',
    category: 'Verbs',
    teaser: 'All eight German tenses — formation, register, and when to use each one.',
    intro:
      'Every German tense follows the same structural rule: one conjugated verb in position 2, ' +
      'everything else stacks at the end. ' +
      'Präsens uses one verb. Perfekt uses two. Futur II uses three. ' +
      'The frame never changes — only the verbs change. ' +
      'Master the ladder below and all eight tenses fall into place.',

    tenseLadder: [
      {
        tense: 'Präsens',
        verbCount: 1,
        structure: 'conjugated verb only',
        example: 'Ich lerne.',
        note: 'spoken & written',
      },
      {
        tense: 'Präteritum',
        verbCount: 1,
        structure: 'past stem (no auxiliary)',
        example: 'Ich lernte.',
        note: 'written / narrative',
      },
      {
        tense: 'Perfekt',
        verbCount: 2,
        structure: 'haben/sein (P2) + Partizip II (END)',
        example: 'Ich habe gelernt.',
        note: 'spoken past',
      },
      {
        tense: 'Plusquamperfekt',
        verbCount: 2,
        structure: 'hatte/war (P2) + Partizip II (END)',
        example: 'Ich hatte gelernt.',
        note: 'past before the past',
      },
      {
        tense: 'Futur I',
        verbCount: 2,
        structure: 'werden (P2) + Infinitiv (END)',
        example: 'Ich werde lernen.',
        note: 'future / assumption',
      },
      {
        tense: 'Futur II',
        verbCount: 3,
        structure: 'werden (P2) + Partizip II + haben/sein (END)',
        example: 'Ich werde gelernt haben.',
        note: 'completed future',
      },
      {
        tense: 'Konjunktiv II',
        verbCount: 2,
        structure: 'würde (P2) + Infinitiv (END)  ·  or irregular stem',
        example: 'Ich würde lernen.',
        note: 'hypothetical / polite',
      },
      {
        tense: 'Konjunktiv I',
        verbCount: 1,
        structure: 'Konj. I stem (reported speech)',
        example: 'Er lerne. (reported)',
        note: 'indirect speech · written',
      },
    ],

    habenSein: {
      seinNote: 'Motion, change of state, and being/staying',
      habenNote: 'Everything else — transitive and most intransitive verbs',
      seinVerbs: [
        'gehen', 'fahren', 'laufen', 'kommen', 'fliegen',
        'aufwachen', 'einschlafen', 'sterben', 'werden',
        'bleiben', 'sein', 'passieren', 'fallen',
      ],
      habenVerbs: [
        'lernen', 'essen', 'arbeiten', 'schreiben',
        'kaufen', 'sehen', 'hören', 'lesen',
        'machen', 'denken', 'helfen', 'nehmen',
      ],
    },

    tenseOverviews: [
      {
        name: 'Präsens',
        formula: 'stem + present endings',
        register: 'both',
        use: 'Current actions, habits, general truths, and scheduled future events. The most used tense in German.',
        example: 'Ich lerne jeden Tag Deutsch.',
        exampleEn: 'I learn German every day.',
        conjugation: {
          verb: 'lernen',
          rows: [
            { pronoun: 'ich',       form: 'lerne' },
            { pronoun: 'du',        form: 'lernst' },
            { pronoun: 'er/sie/es', form: 'lernt' },
            { pronoun: 'wir',       form: 'lernen' },
            { pronoun: 'ihr',       form: 'lernt' },
            { pronoun: 'sie/Sie',   form: 'lernen' },
          ],
        },
      },
      {
        name: 'Perfekt',
        formula: 'haben/sein (Präsens) + Partizip II',
        register: 'spoken',
        use: 'The spoken past. What happened — used in conversation and informal writing. Most verbs take haben; verbs of motion or change of state take sein.',
        example: 'Ich habe Deutsch gelernt.',
        exampleEn: 'I learned German. / I have learned German.',
        note: 'Sein-verbs: Ich bin gegangen / gefahren / aufgestanden.',
        conjugation: {
          verb: 'lernen (haben)',
          rows: [
            { pronoun: 'ich',       form: 'habe gelernt' },
            { pronoun: 'du',        form: 'hast gelernt' },
            { pronoun: 'er/sie/es', form: 'hat gelernt' },
            { pronoun: 'wir',       form: 'haben gelernt' },
            { pronoun: 'ihr',       form: 'habt gelernt' },
            { pronoun: 'sie/Sie',   form: 'haben gelernt' },
          ],
        },
      },
      {
        name: 'Präteritum',
        formula: 'stem + past endings (weak) · irregular stem (strong)',
        register: 'written',
        use: 'The written/narrative past. Used in books, news, and formal writing. In speech, mainly sein (war), haben (hatte), werden (wurde), and modal verbs.',
        example: 'Er lernte täglich Vokabeln.',
        exampleEn: 'He learned vocabulary every day.',
        note: 'In everyday speech, prefer Perfekt. Use Präteritum for war, hatte, wurde, and modal verbs at all levels.',
        conjugation: {
          verb: 'lernen',
          rows: [
            { pronoun: 'ich',       form: 'lernte' },
            { pronoun: 'du',        form: 'lerntest' },
            { pronoun: 'er/sie/es', form: 'lernte' },
            { pronoun: 'wir',       form: 'lernten' },
            { pronoun: 'ihr',       form: 'lerntet' },
            { pronoun: 'sie/Sie',   form: 'lernten' },
          ],
        },
      },
      {
        name: 'Plusquamperfekt',
        formula: 'haben/sein (Präteritum) + Partizip II',
        register: 'both',
        use: 'The past before the past. Used when narrating two past events and making clear which happened first.',
        example: 'Ich hatte schon gelernt, als er anrief.',
        exampleEn: 'I had already studied when he called.',
        conjugation: {
          verb: 'lernen (haben)',
          rows: [
            { pronoun: 'ich',       form: 'hatte gelernt' },
            { pronoun: 'du',        form: 'hattest gelernt' },
            { pronoun: 'er/sie/es', form: 'hatte gelernt' },
            { pronoun: 'wir',       form: 'hatten gelernt' },
            { pronoun: 'ihr',       form: 'hattet gelernt' },
            { pronoun: 'sie/Sie',   form: 'hatten gelernt' },
          ],
        },
      },
      {
        name: 'Futur I',
        formula: 'werden (Präsens) + Infinitiv',
        register: 'both',
        use: 'Future plans, intentions, and predictions. Also used to express an assumption about the present.',
        example: 'Ich werde morgen Deutsch lernen.',
        exampleEn: 'I will learn German tomorrow.',
        note: 'For definite plans, Präsens + time word is more natural: Ich lerne morgen Deutsch.',
        conjugation: {
          verb: 'lernen',
          rows: [
            { pronoun: 'ich',       form: 'werde lernen' },
            { pronoun: 'du',        form: 'wirst lernen' },
            { pronoun: 'er/sie/es', form: 'wird lernen' },
            { pronoun: 'wir',       form: 'werden lernen' },
            { pronoun: 'ihr',       form: 'werdet lernen' },
            { pronoun: 'sie/Sie',   form: 'werden lernen' },
          ],
        },
      },
      {
        name: 'Futur II',
        formula: 'werden (Präsens) + Partizip II + haben/sein',
        register: 'written',
        use: 'An action that will be completed by a future point in time. Also used for assumptions about something that has probably already happened.',
        example: 'Bis Freitag werde ich das Buch gelesen haben.',
        exampleEn: 'By Friday I will have read the book.',
        note: 'Assumption: Er wird das vergessen haben. (He will have forgotten that.)',
        conjugation: {
          verb: 'lernen (haben)',
          rows: [
            { pronoun: 'ich',       form: 'werde gelernt haben' },
            { pronoun: 'du',        form: 'wirst gelernt haben' },
            { pronoun: 'er/sie/es', form: 'wird gelernt haben' },
            { pronoun: 'wir',       form: 'werden gelernt haben' },
            { pronoun: 'ihr',       form: 'werdet gelernt haben' },
            { pronoun: 'sie/Sie',   form: 'werden gelernt haben' },
          ],
        },
      },
      {
        name: 'Konjunktiv I',
        formula: 'verb stem + Konjunktiv I endings (-e, -est, -e, -en, -et, -en)',
        register: 'written',
        use: 'Indirect (reported) speech in journalism and formal writing. Signals that you are reporting what someone else said — not your own words.',
        example: 'Er sagte, er lerne jeden Tag Deutsch.',
        exampleEn: 'He said he learns German every day. (reported)',
        note: 'Where Konjunktiv I forms are identical to Präsens (e.g. wir lernen), use Konjunktiv II or würde-form to make the indirect speech clear.',
        conjugation: {
          verb: 'lernen',
          rows: [
            { pronoun: 'ich',       form: 'lerne' },
            { pronoun: 'du',        form: 'lernest' },
            { pronoun: 'er/sie/es', form: 'lerne' },
            { pronoun: 'wir',       form: 'lernen' },
            { pronoun: 'ihr',       form: 'lernet' },
            { pronoun: 'sie/Sie',   form: 'lernen' },
          ],
        },
      },
      {
        name: 'Konjunktiv II',
        formula: 'Präteritum stem + Konj. II endings · or: würde + Infinitiv',
        register: 'both',
        use: 'Hypotheticals, wishes, unreal conditions, and polite requests. The würde-form is preferred in spoken German; the stem form is used in writing and with haben, sein, and modal verbs.',
        example: 'Wenn ich Zeit hätte, würde ich mehr lernen.',
        exampleEn: 'If I had time, I would learn more.',
        note: 'Key irregular forms: wäre (sein) · hätte (haben) · würde (werden) · könnte · müsste · dürfte.',
        conjugation: {
          verb: 'lernen (würde-form)',
          rows: [
            { pronoun: 'ich',       form: 'würde lernen' },
            { pronoun: 'du',        form: 'würdest lernen' },
            { pronoun: 'er/sie/es', form: 'würde lernen' },
            { pronoun: 'wir',       form: 'würden lernen' },
            { pronoun: 'ihr',       form: 'würdet lernen' },
            { pronoun: 'sie/Sie',   form: 'würden lernen' },
          ],
        },
      },
    ],

    progression: [
      {
        level: 'A1',
        canDo: 'Use Präsens to describe yourself, your habits, and the present moment.',
        example: 'Ich wohne in Berlin. Ich lerne Deutsch.',
      },
      {
        level: 'A2',
        canDo: 'Use Perfekt for past events in conversation; war and hatte in speech.',
        example: 'Ich habe gestern eingekauft. Es war sehr kalt.',
      },
      {
        level: 'B1',
        canDo: 'Use Präteritum in writing and narrative; Futur I for plans and predictions.',
        example: 'Er arbeitete lange. Ich werde das morgen erledigen.',
      },
      {
        level: 'B2',
        canDo: 'Use Plusquamperfekt to sequence past events; Konjunktiv II for hypotheticals and polite requests.',
        example: 'Wenn ich das gewusst hätte, wäre ich früher gekommen.',
      },
    ],
  },
  {
    slug: 'verb-tenses',
    title: 'Verb Tenses',
    intro:
      'German builds most of its tenses from three auxiliary verbs — haben, sein, and werden. ' +
      'Master their conjugations and the logic of each tense falls into place.',
    category: 'Verbs',
    teaser: 'haben, sein, werden — the three auxiliaries that build every German tense.',

    verbConjugations: [
      {
        verb: 'haben',
        meaning: 'to have',
        role: 'Perfekt auxiliary · most verbs',
        tenses: [
          {
            tense: 'Präsens',
            rows: [
              { pronoun: 'ich',        form: 'habe' },
              { pronoun: 'du',         form: 'hast' },
              { pronoun: 'er/sie/es',  form: 'hat' },
              { pronoun: 'wir',        form: 'haben' },
              { pronoun: 'ihr',        form: 'habt' },
              { pronoun: 'sie/Sie',    form: 'haben' },
            ],
          },
          {
            tense: 'Präteritum',
            rows: [
              { pronoun: 'ich',        form: 'hatte' },
              { pronoun: 'du',         form: 'hattest' },
              { pronoun: 'er/sie/es',  form: 'hatte' },
              { pronoun: 'wir',        form: 'hatten' },
              { pronoun: 'ihr',        form: 'hattet' },
              { pronoun: 'sie/Sie',    form: 'hatten' },
            ],
          },
          {
            tense: 'Perfekt',
            note: 'haben + gehabt',
            rows: [
              { pronoun: 'ich',        form: 'habe gehabt' },
              { pronoun: 'du',         form: 'hast gehabt' },
              { pronoun: 'er/sie/es',  form: 'hat gehabt' },
              { pronoun: 'wir',        form: 'haben gehabt' },
              { pronoun: 'ihr',        form: 'habt gehabt' },
              { pronoun: 'sie/Sie',    form: 'haben gehabt' },
            ],
          },
          {
            tense: 'Futur I',
            note: 'werden + haben',
            rows: [
              { pronoun: 'ich',        form: 'werde haben' },
              { pronoun: 'du',         form: 'wirst haben' },
              { pronoun: 'er/sie/es',  form: 'wird haben' },
              { pronoun: 'wir',        form: 'werden haben' },
              { pronoun: 'ihr',        form: 'werdet haben' },
              { pronoun: 'sie/Sie',    form: 'werden haben' },
            ],
          },
        ],
      },
      {
        verb: 'sein',
        meaning: 'to be',
        role: 'Perfekt auxiliary · motion & change verbs',
        tenses: [
          {
            tense: 'Präsens',
            rows: [
              { pronoun: 'ich',        form: 'bin' },
              { pronoun: 'du',         form: 'bist' },
              { pronoun: 'er/sie/es',  form: 'ist' },
              { pronoun: 'wir',        form: 'sind' },
              { pronoun: 'ihr',        form: 'seid' },
              { pronoun: 'sie/Sie',    form: 'sind' },
            ],
          },
          {
            tense: 'Präteritum',
            rows: [
              { pronoun: 'ich',        form: 'war' },
              { pronoun: 'du',         form: 'warst' },
              { pronoun: 'er/sie/es',  form: 'war' },
              { pronoun: 'wir',        form: 'waren' },
              { pronoun: 'ihr',        form: 'wart' },
              { pronoun: 'sie/Sie',    form: 'waren' },
            ],
          },
          {
            tense: 'Perfekt',
            note: 'sein + gewesen',
            rows: [
              { pronoun: 'ich',        form: 'bin gewesen' },
              { pronoun: 'du',         form: 'bist gewesen' },
              { pronoun: 'er/sie/es',  form: 'ist gewesen' },
              { pronoun: 'wir',        form: 'sind gewesen' },
              { pronoun: 'ihr',        form: 'seid gewesen' },
              { pronoun: 'sie/Sie',    form: 'sind gewesen' },
            ],
          },
          {
            tense: 'Futur I',
            note: 'werden + sein',
            rows: [
              { pronoun: 'ich',        form: 'werde sein' },
              { pronoun: 'du',         form: 'wirst sein' },
              { pronoun: 'er/sie/es',  form: 'wird sein' },
              { pronoun: 'wir',        form: 'werden sein' },
              { pronoun: 'ihr',        form: 'werdet sein' },
              { pronoun: 'sie/Sie',    form: 'werden sein' },
            ],
          },
        ],
      },
      {
        verb: 'werden',
        meaning: 'to become',
        role: 'Futur I auxiliary · passive auxiliary',
        tenses: [
          {
            tense: 'Präsens',
            rows: [
              { pronoun: 'ich',        form: 'werde' },
              { pronoun: 'du',         form: 'wirst' },
              { pronoun: 'er/sie/es',  form: 'wird' },
              { pronoun: 'wir',        form: 'werden' },
              { pronoun: 'ihr',        form: 'werdet' },
              { pronoun: 'sie/Sie',    form: 'werden' },
            ],
          },
          {
            tense: 'Präteritum',
            rows: [
              { pronoun: 'ich',        form: 'wurde' },
              { pronoun: 'du',         form: 'wurdest' },
              { pronoun: 'er/sie/es',  form: 'wurde' },
              { pronoun: 'wir',        form: 'wurden' },
              { pronoun: 'ihr',        form: 'wurdet' },
              { pronoun: 'sie/Sie',    form: 'wurden' },
            ],
          },
          {
            tense: 'Perfekt',
            note: 'sein + geworden',
            rows: [
              { pronoun: 'ich',        form: 'bin geworden' },
              { pronoun: 'du',         form: 'bist geworden' },
              { pronoun: 'er/sie/es',  form: 'ist geworden' },
              { pronoun: 'wir',        form: 'sind geworden' },
              { pronoun: 'ihr',        form: 'seid geworden' },
              { pronoun: 'sie/Sie',    form: 'sind geworden' },
            ],
          },
          {
            tense: 'Futur I',
            note: 'werden + werden (rare in practice)',
            rows: [
              { pronoun: 'ich',        form: 'werde werden' },
              { pronoun: 'du',         form: 'wirst werden' },
              { pronoun: 'er/sie/es',  form: 'wird werden' },
              { pronoun: 'wir',        form: 'werden werden' },
              { pronoun: 'ihr',        form: 'werdet werden' },
              { pronoun: 'sie/Sie',    form: 'werden werden' },
            ],
          },
        ],
      },
    ],

    progression: [
      {
        level: 'A1',
        canDo: 'Use sein and haben in the present tense to describe yourself and others.',
        example: 'Ich bin müde. Er hat Hunger.',
      },
      {
        level: 'A2',
        canDo: 'Form the Perfekt to talk about past events, choosing haben or sein correctly.',
        example: 'Ich habe gegessen. Sie ist nach Hause gegangen.',
      },
      {
        level: 'B1',
        canDo: 'Use Präteritum for written narrative; use werden for future plans and predictions.',
        example: 'Er hatte keine Zeit. Ich werde morgen kommen.',
      },
      {
        level: 'B2',
        canDo: 'Use werden to form the passive voice; switch between tenses fluently by register.',
        example: 'Das Rezept wird vom Arzt ausgestellt.',
      },
    ],
  },
  {
    slug: 'connectors',
    title: 'Connectors & Conjunctions',
    intro: 'Placeholder — real content coming soon.',
    category: 'Structure',
    teaser: 'und, aber, weil, dass, obwohl — coordinating vs. subordinating, and the verb-to-end rule.',
    relatedSituations: ['apotheke'],
  },
];

export function getFoundationTopic(slug: string): FoundationTopic | undefined {
  return foundationTopics.find((t) => t.slug === slug);
}

export function getFoundationByCategory(): Record<string, FoundationTopic[]> {
  const out: Record<string, FoundationTopic[]> = {};
  for (const t of foundationTopics) {
    const cat = t.category ?? 'General';
    if (!out[cat]) out[cat] = [];
    out[cat].push(t);
  }
  return out;
}
