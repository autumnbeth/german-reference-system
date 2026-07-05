// ============================================================
// Situation registry — add a new situation by:
//   1. Creating src/data/situations/<slug>.ts
//   2. Importing it here and adding to the array
// ============================================================

import type { Situation } from '../content/schema';
import apotheke from './situations/apotheke';
import { arzttermin } from './situations/arzttermin';
import { notfall } from './situations/notfall';
import { restaurant } from './situations/restaurant';
import { supermarkt } from './situations/supermarkt';
import { oeffentlicheVerkehrsmittel } from './situations/oeffentliche_verkehrsmittel';
import { wohnungssuche } from './situations/wohnungssuche';
import { vermieterKontaktieren } from './situations/vermieter_kontaktieren';
import { vorstellungsgespraech } from './situations/vorstellungsgespraech';
import { ersterArbeitstag } from './situations/erster_arbeitstag';
import { freundeTreffen } from './situations/freunde_treffen';
import { terminVereinbaren } from './situations/termin_vereinbaren';
import { gespraechMitLehrkraft } from './situations/gespraech_mit_lehrkraft';
import { elternabend } from './situations/elternabend';
import { anmeldung } from './situations/anmeldung';
import { buergeramt } from './situations/buergeramt';
import { jobcenter } from './situations/jobcenter';
import { bankUndGeld } from './situations/bank_und_geld';
import { vertragKuendigen } from './situations/vertrag_kuendigen';
import { steuernUndVersicherungen } from './situations/steuern_und_versicherungen';
import { facharztUeberweisung } from './situations/facharzt_ueberweisung';
import { autoUndWerkstatt } from './situations/auto_und_werkstatt';
import { kindKrankmelden } from './situations/kind_krankmelden';
import { smalltalk } from './situations/smalltalk';

export const situations: Situation[] = [
  apotheke,
  arzttermin,
  notfall,
  restaurant,
  supermarkt,
  oeffentlicheVerkehrsmittel,
  wohnungssuche,
  vermieterKontaktieren,
  vorstellungsgespraech,
  ersterArbeitstag,
  freundeTreffen,
  terminVereinbaren,
  gespraechMitLehrkraft,
  elternabend,
  anmeldung,
  buergeramt,
  facharztUeberweisung,
  kindKrankmelden,
  smalltalk,
  jobcenter,
  bankUndGeld,
  vertragKuendigen,
  steuernUndVersicherungen,
  autoUndWerkstatt,
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
