// ============================================================
// Situation registry — add a new situation by:
//   1. Creating src/data/situations/<slug>.ts
//   2. Importing it here and adding to the array
// ============================================================

import type { Situation } from '../content/schema';
import apotheke from './situations/apotheke';
import { arzttermin } from './situations/arzttermin';
import { notfall } from './situations/notfall';

export const situations: Situation[] = [
  apotheke,
  arzttermin,
  notfall,
];

export function getSituation(slug: string): Situation | undefined {
  return situations.find((s) => s.slug === slug);
}

/** All unique themes, in insertion order. */
export function getThemes(): string[] {
  return [...new Set(situations.map((s) => s.theme))];
}

/** All situations belonging to a theme. */
export function getSituationsByTheme(theme: string): Situation[] {
  return situations.filter((s) => s.theme === theme);
}
