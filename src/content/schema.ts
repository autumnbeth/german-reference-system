// ============================================================
// German Learning System — Content Schema
// The shape of every Situation and Foundation topic.
// Adding new content = filling out this structure, never coding a page.
//
// This maps 1:1 to the components in your Claude Design system:
//   vocab card · Satzbau diagram · dialogue block ·
//   writing sample · CEFR progression table · callouts/milestones
// ============================================================

// ---------- Shared primitives ----------

export type Gender = 'der' | 'die' | 'das' | 'pl' | 'verb'; // pl = plural (die, orange); verb = no article
export type CEFR = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

/** A single vocabulary item. Article is always carried and colored by gender. */
export interface VocabItem {
  gender: Gender;
  word: string;          // e.g. "Husten"  (no article — the component adds it)
  meaning: string;       // English gloss, e.g. "cough"
  plural?: string;       // optional explicit plural form
  note?: string;         // optional usage note
}

/** A themed group of vocabulary (never one long undifferentiated list). */
export interface VocabGroup {
  label: string;         // e.g. "Symptome · Symptoms"
  items: VocabItem[];
}

/** One slot in the Satzbau (sentence-structure) diagram. */
export interface SentenceSlot {
  text: string;          // the word(s) in this slot
  role?:                 // optional label shown above the slot
    | 'pos1'             // Position 1
    | 'verb'             // conjugated verb (Pos. 2) — highlighted teal
    | 'mittelfeld'       // middle field
    | 'satzende'         // sentence end
    | 'verb-end';        // closing verb part of the bracket — highlighted teal
  highlight?: boolean;   // force the teal verb-slot treatment
}

/** A Satzbau diagram row. If two slots are highlighted, the bracket line shows. */
export interface SentenceFrame {
  slots: SentenceSlot[];
  caption?: string;      // e.g. "The verb stays in position 2…"
  showBracket?: boolean; // draw the Verbklammer dashed line
}

/** One line of a practice dialogue. */
export interface DialogueLine {
  speaker: string;       // e.g. "Apothekerin" | "Kunde"
  speakerGender?: Gender;// colors the speaker label + left border (der=blue, die=pink)
  de: string;            // German line
  en?: string;           // English gloss (hidden when translations off)
}

export interface Dialogue {
  title: string;         // e.g. "Dialog · in der Apotheke"
  level: CEFR;
  lines: DialogueLine[];
}

/** A useful-phrase layer, grouped by level + function. */
export interface PhraseLayer {
  levels: CEFR[];        // e.g. ["A1","A2"]
  funktion: string;      // e.g. "Asking for help"
  phrases: string[];
}

/** An annotated writing sample (email, note, letter). */
export type WritingKind = 'email-formal' | 'message-informal' | 'letter' | 'note';

export interface WritingPart {
  label: string;         // e.g. "Anrede" | "Anliegen" | "Bitte" | "Gruß"
  de: string;            // the German text for this part
  en?: string;           // gloss
  highlight?: string;    // optional substring to underline-highlight (a reusable pattern)
}

export interface WritingSample {
  kind: WritingKind;
  level: CEFR;
  title: string;         // e.g. "E-Mail · formell"
  to?: string;           // email "An" field
  subject?: string;      // email "Betreff" field
  parts: WritingPart[];
  checklist?: string[];  // revision checklist items
}

/** One row of the CEFR progression table. */
export interface ProgressionRow {
  level: CEFR;
  canDo: string;         // "Ask for help and name one basic symptom."
  example: string;       // German example sentence
}

/** A confidence milestone (achieved or upcoming). */
export interface Milestone {
  level: CEFR;
  text: string;
  achieved?: boolean;
}

// ---------- The Situation (one themed real-life page) ----------

export interface Situation {
  // identity & placement in the theme hierarchy
  slug: string;          // "apotheke"
  theme: string;         // top hierarchy, e.g. "Health"
  subtheme?: string;     // e.g. "Apotheke" (theme→subtheme: Health→Doctor, Health→Apotheke)
  category?: string;     // e.g. "Survival & daily life"
  title: string;         // "Apotheke"
  intro: string;         // one-paragraph scene-setter (Newsreader)
  levels: CEFR[];        // which level tabs this page offers, e.g. ["A1","A2","B1","B2"]

  // the confidence promise shown in the teal callout
  confidenceOutcome: string;

  // CONTENT — most of these are keyed by level so the level tabs work.
  // Anything not level-keyed is shown across all levels.
  vocab: VocabGroup[];                         // shared core vocabulary
  progression: ProgressionRow[];               // the A1→C1 can-do table
  milestones?: Milestone[];

  // per-level content (the level tabs)
  byLevel: Partial<Record<CEFR, {
    sentenceFrames?: SentenceFrame[];          // grammar-in-context for this level
    dialogue?: Dialogue;
    phrases?: PhraseLayer[];
    writing?: WritingSample;
    challenge?: string;                        // real-world challenge callout
  }>>;

  // cross-links INTO the Foundation — what makes this a *system*, not flashcards
  foundationLinks?: {
    label: string;       // "Verb bracket (Verbklammer)"
    foundationSlug: string; // points at a Foundation topic slug
  }[];

  // optional media slots
  hero?: { caption?: string; alt: string };    // 3:1 situation hero
}

// ---------- Tense overview map ----------

export type TenseRegister = 'spoken' | 'written' | 'both';

export interface TenseOverview {
  name: string;           // "Perfekt"
  formula: string;        // "haben/sein (Präsens) + Partizip II"
  use: string;            // when and why to use this tense
  example: string;        // German example sentence
  exampleEn?: string;     // English gloss
  register: TenseRegister;
  note?: string;          // extra rule or caveat
  conjugation?: {         // optional full paradigm (verb name + 6 rows)
    verb: string;
    rows: { pronoun: string; form: string }[];
  };
}

// ---------- Tense ladder ----------

export interface TenseLadderRow {
  tense: string;          // "Perfekt"
  verbCount: 1 | 2 | 3;  // how many verb parts the tense uses
  structure: string;      // "haben/sein (P2) + Partizip II (END)"
  example: string;        // "Ich habe gelernt."
  note?: string;          // e.g. "spoken past"
}

export interface HabenSeinGuide {
  seinVerbs: string[];    // motion/change verbs that take sein
  habenVerbs: string[];   // all others
  seinNote: string;
  habenNote: string;
}

// ---------- Verb conjugation tables ----------

export interface ConjugationRow {
  pronoun: string;   // "ich" | "du" | "er/sie/es" | "wir" | "ihr" | "sie/Sie"
  form: string;      // the conjugated form, e.g. "habe"
}

export interface TenseTable {
  tense: string;     // "Präsens" | "Präteritum" | "Perfekt" | "Futur I"
  rows: ConjugationRow[];
  note?: string;     // e.g. "Perfekt uses sein as auxiliary"
}

export interface VerbConjugation {
  verb: string;      // "haben"
  meaning: string;   // "to have"
  role?: string;     // e.g. "auxiliary for Perfekt · direct object verbs"
  tenses: TenseTable[];
}

// ---------- Foundation sections (named blocks on a spoke page) ----------

export interface ConnectorItem {
  word: string;       // "weil"
  meaning: string;    // "because"
}

export interface ConnectorGroup {
  kind: 'coordinating' | 'subordinating' | 'adverbial' | 'correlative';
  label: string;
  note?: string;
  items: ConnectorItem[];
}

// ---------- Declension tables (case system) ----------

export interface DeclensionTable {
  title: string;
  note?: string;
  headers: string[];                          // e.g. ['', 'maskulin', 'feminin', 'neutrum', 'Plural']
  rows: { label: string; cells: string[] }[]; // one row per case
}

export interface FoundationSection {
  title: string;
  body?: string;      // explanatory paragraph (Newsreader)
  callout?: {
    kind?: 'tip' | 'confidence' | 'challenge';
    label?: string;
    text: string;
  };
  sentenceFrames?: SentenceFrame[];
  connectors?: ConnectorGroup[];
  exampleTable?: { label: string; de: string; en?: string }[];
  declensionTables?: DeclensionTable[];
}

// ---------- Modal stacking table ----------

export interface ModalStackRow {
  construction: string;  // "Präsens + Modal"
  formula: string;       // "Modal (P2) + INF (END)"
  example: string;       // "Er kann kommen."
  exampleEn?: string;
}

// ---------- The Foundation (the grammar "map") ----------
// Reuses the same primitives so Foundation and Situations look identical.

export interface FoundationTopic {
  slug: string;          // "satzbau" | "cases" | "tense-stack" | "verbklammer"
  title: string;         // "Sentence Architecture"
  intro: string;
  category?: string;     // "Structure" | "Grammar" | "Verbs"
  teaser?: string;       // one-line description shown on the hub card
  // Foundation pages are visual: they lean on these reusable blocks.
  sections?: FoundationSection[];
  tenseLadder?: TenseLadderRow[];
  habenSein?: HabenSeinGuide;
  tenseOverviews?: TenseOverview[];
  verbConjugations?: VerbConjugation[];
  sentenceFrames?: SentenceFrame[];
  progression?: ProgressionRow[];  // CEFR expansion of this concept
  // free-form sections can also carry vocab groups, tables, etc.
  vocab?: VocabGroup[];
  modalStack?: ModalStackRow[];
  declensionTables?: DeclensionTable[];
  relatedSituations?: string[];    // situation slugs that USE this concept
}

// ============================================================
// WORKED EXAMPLE — Apotheke
// Kept here for reference. The live data is in src/data/situations/apotheke.ts.
// ============================================================

export const apotheke: Situation = {
  slug: 'apotheke',
  theme: 'Health',
  subtheme: 'Apotheke',
  category: 'Survival & daily life',
  title: 'Apotheke',
  intro:
    'Asking for help at a German pharmacy: describing symptoms, requesting ' +
    'medicine, understanding instructions, and asking follow-up questions.',
  levels: ['A1', 'A2', 'B1', 'B2'],

  confidenceOutcome:
    'I can go to a German pharmacy, explain what I need, understand basic ' +
    'advice, and ask follow-up questions without looking up every word first.',

  vocab: [
    {
      label: 'Symptome · Symptoms',
      items: [
        { gender: 'der', word: 'Husten', meaning: 'cough' },
        { gender: 'die', word: 'Halsschmerzen', meaning: 'sore throat' },
        { gender: 'das', word: 'Fieber', meaning: 'fever' },
        { gender: 'die', word: 'Erkältung', meaning: 'cold' },
      ],
    },
    {
      label: 'Darreichungsform · Medicine forms',
      items: [
        { gender: 'pl',  word: 'Tabletten', meaning: 'tablets' },
        { gender: 'der', word: 'Saft', meaning: 'syrup' },
        { gender: 'das', word: 'Spray', meaning: 'spray' },
        { gender: 'die', word: 'Salbe', meaning: 'ointment' },
      ],
    },
  ],

  progression: [
    { level: 'A1', canDo: 'Ask for help and name one basic symptom.',
      example: 'Ich habe Husten.' },
    { level: 'A2', canDo: 'Describe symptoms, duration, and ask for something.',
      example: 'Ich habe seit gestern Halsschmerzen.' },
    { level: 'B1', canDo: 'Explain what happened and ask how to take medicine.',
      example: 'Wie oft soll ich das nehmen?' },
    { level: 'B2', canDo: 'Compare options and explain constraints.',
      example: 'Ich suche etwas, das nicht müde macht.' },
  ],

  milestones: [
    { level: 'A1', text: 'I can ask for help and name one basic symptom.', achieved: true },
    { level: 'A2', text: 'I can ask for something and say how long I’ve had it.', achieved: true },
    { level: 'B1', text: 'I can explain what I tried and ask how to take medicine.', achieved: false },
  ],

  byLevel: {
    A2: {
      sentenceFrames: [
        {
          slots: [
            { text: 'Ich', role: 'pos1' },
            { text: 'möchte', role: 'verb', highlight: true },
            { text: 'etwas gegen Husten', role: 'mittelfeld' },
            { text: 'kaufen.', role: 'verb-end', highlight: true },
          ],
          showBracket: true,
          caption: 'A polite request uses a modal verb — the two verb parts bracket the sentence.',
        },
      ],
      dialogue: {
        title: 'Dialog · in der Apotheke',
        level: 'A2',
        lines: [
          { speaker: 'Apothekerin', speakerGender: 'die',
            de: 'Guten Tag. Wie kann ich Ihnen helfen?',
            en: 'Good day. How can I help you?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Guten Tag. Ich habe Halsschmerzen.',
            en: 'Good day. I have a sore throat.' },
          { speaker: 'Apothekerin', speakerGender: 'die',
            de: 'Seit wann haben Sie die Schmerzen?',
            en: 'Since when have you had the pain?' },
          { speaker: 'Kunde', speakerGender: 'der',
            de: 'Seit gestern Abend. Ich habe auch etwas Husten.',
            en: 'Since yesterday evening. I also have a bit of a cough.' },
        ],
      },
      phrases: [
        { levels: ['A1', 'A2'], funktion: 'Asking for help',
          phrases: ['Können Sie mir helfen?', 'Ich brauche etwas gegen …', 'Haben Sie etwas gegen …?'] },
      ],
      writing: {
        kind: 'message-informal',
        level: 'A2',
        title: 'Nachricht · informell',
        parts: [
          { label: 'Nachricht',
            de: 'Hallo Lisa, ich kann heute leider nicht kommen, weil ich krank bin. Können wir auf morgen verschieben? LG, Anna',
            en: 'Hi Lisa, unfortunately I can’t come today because I’m sick. Can we move it to tomorrow? Take care, Anna' },
        ],
      },
      challenge:
        'Ask one prepared question in a real Apotheke — explain a symptom, say how ' +
        'long you’ve had it, and confirm the instructions without reading from a script.',
    },

    B1: {
      phrases: [
        { levels: ['B1'], funktion: 'Understanding advice',
          phrases: ['Wie oft soll ich das nehmen?', 'Muss ich das vor oder nach dem Essen nehmen?', 'Ist das auch für Kinder?'] },
      ],
      writing: {
        kind: 'email-formal',
        level: 'B1',
        title: 'E-Mail · formell',
        to: 'praxis@hausarzt-berlin.de',
        subject: 'Terminanfrage',
        parts: [
          { label: 'Anrede', de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
          { label: 'Anliegen',
            de: 'ich möchte gern einen Termin vereinbaren, weil ich seit einigen Tagen Halsschmerzen habe.',
            en: 'I would like to arrange an appointment, because I have had a sore throat for a few days.',
            highlight: 'weil ich seit einigen Tagen Halsschmerzen habe' },
          { label: 'Bitte',
            de: 'Könnten Sie mir bitte einen Termin in dieser Woche anbieten?',
            en: 'Could you please offer me an appointment this week?',
            highlight: 'Könnten Sie mir bitte' },
          { label: 'Gruß', de: 'Mit freundlichen Grüßen\nAnna Becker', en: 'Kind regards, Anna Becker' },
        ],
        checklist: [
          'Formal greeting & closing',
          'States a reason (weil…)',
          'Polite request (Könnten Sie…)',
          'One clear piece of key info',
        ],
      },
    },
  },

  foundationLinks: [
    { label: 'Verb bracket (Verbklammer)', foundationSlug: 'satzbau' },
    { label: 'Modal verbs', foundationSlug: 'modal-verbs' },
    { label: 'weil → verb to the end', foundationSlug: 'connectors' },
  ],

  hero: {
    caption: 'In der Apotheke — asking for help at the counter.',
    alt: 'A pharmacy counter, wide shot',
  },
};
