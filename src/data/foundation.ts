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
