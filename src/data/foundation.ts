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
    intro: 'Placeholder — real content coming soon.',
    category: 'Structure',
    teaser: 'How German sentences are built: the verb-second rule, position 1, and the middle field.',
    relatedSituations: ['apotheke'],
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
    intro: 'Placeholder — real content coming soon.',
    category: 'Verbs',
    teaser: 'Present → Perfekt → Präteritum → Futur: when to use each and how they layer.',
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
