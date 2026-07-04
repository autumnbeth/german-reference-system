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
    category: 'Sentence Structure',
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
    category: 'Sentence Structure',
    teaser: 'The bracket that opens at verb position 2 and closes at the end of the clause.',
    relatedSituations: ['apotheke'],
    intro:
      'The Verbklammer (verb bracket) is the defining structure of German sentences. ' +
      'The conjugated verb always occupies position 2. Any additional verb parts — ' +
      'a separable prefix, an infinitive, or a Partizip II — lock to the very end of the clause. ' +
      'Everything else fills the space in between. One rule, five different bracket types.',

    sections: [
      {
        title: 'The Five Bracket Types',
        body:
          'Every multi-verb construction creates a bracket. ' +
          'The conjugated part sits in position 2; the second part anchors the end of the clause.',
        exampleTable: [
          { label: 'Modal verb',     de: 'Ich kann heute kommen.',          en: 'I can come today.' },
          { label: 'Separable verb', de: 'Ich rufe morgen an.',             en: 'I\'ll call tomorrow.' },
          { label: 'Perfekt',        de: 'Ich habe das Buch gelesen.',      en: 'I have read the book.' },
          { label: 'Futur I',        de: 'Ich werde das morgen machen.',    en: 'I will do that tomorrow.' },
          { label: 'Passive',        de: 'Das Haus wird gerade gebaut.',    en: 'The house is being built.' },
        ],
        callout: {
          kind: 'tip',
          label: 'The rule in one sentence',
          text: 'Conjugated verb → Position 2. Second verb part → END. Everything else → middle.',
        },
      },
      {
        title: 'Separable Verbs · The Prefix Detaches',
        body:
          'Separable verbs split when conjugated in a main clause: the verb stem goes to position 2 ' +
          'and the prefix travels to the very end of the sentence. ' +
          'In the infinitive or Partizip II form they stay together.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich',       role: 'pos1' },
              { text: 'rufe',      role: 'verb', highlight: true },
              { text: 'dich morgen', role: 'mittelfeld' },
              { text: 'an.',       role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'anrufen splits: rufe (P2) · an (END). The prefix an anchors the end.',
          },
          {
            slots: [
              { text: 'Er',        role: 'pos1' },
              { text: 'macht',     role: 'verb', highlight: true },
              { text: 'die Tür',   role: 'mittelfeld' },
              { text: 'auf.',      role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'aufmachen: macht (P2) · auf (END).',
          },
          {
            slots: [
              { text: 'Sie',       role: 'pos1' },
              { text: 'fängt',     role: 'verb', highlight: true },
              { text: 'um acht Uhr', role: 'mittelfeld' },
              { text: 'an.',       role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'anfangen: fängt (P2) · an (END).',
          },
        ],
      },
      {
        title: 'In the Nebensatz · The Bracket Collapses',
        body:
          'In a subordinate clause the whole verb cluster — all parts — moves to the end of the clause. ' +
          'The conjugated verb comes last, after any infinitives or participles. ' +
          'This is the mirror image of the main clause bracket.',
        sentenceFrames: [
          {
            slots: [
              { text: '… weil',    role: 'pos1' },
              { text: 'ich',       role: 'mittelfeld' },
              { text: 'das Buch',  role: 'mittelfeld' },
              { text: 'gelesen habe.', role: 'verb-end', highlight: true },
            ],
            caption: 'Perfekt in Nebensatz: Partizip II first, conjugated haben last.',
          },
          {
            slots: [
              { text: '… dass',    role: 'pos1' },
              { text: 'er',        role: 'mittelfeld' },
              { text: 'morgen',    role: 'mittelfeld' },
              { text: 'kommen kann.', role: 'verb-end', highlight: true },
            ],
            caption: 'Modal in Nebensatz: infinitive kommen before conjugated kann.',
          },
          {
            slots: [
              { text: '… obwohl',  role: 'pos1' },
              { text: 'sie',       role: 'mittelfeld' },
              { text: 'schon',     role: 'mittelfeld' },
              { text: 'angerufen hat.', role: 'verb-end', highlight: true },
            ],
            caption: 'Separable verb in Nebensatz: prefix re-attaches — angerufen — then hat.',
          },
        ],
      },
      {
        title: 'TeKaMoLo · What Goes in the Middle Field',
        body:
          'The middle field — the space between P2 and END — follows a default order: ' +
          'Time before Manner before Local (place). ' +
          'You can move elements to position 1 for emphasis, but the middle field default rarely changes.',
        exampleTable: [
          { label: 'Zeit (Time)',    de: 'Ich fahre morgen mit dem Zug nach Berlin.',    en: 'I\'m travelling to Berlin by train tomorrow.' },
          { label: 'Art (Manner)',   de: 'Ich fahre gern mit dem Zug.',                  en: 'I like travelling by train.' },
          { label: 'Ort (Local)',    de: 'Ich warte hier.',                              en: 'I\'m waiting here.' },
          { label: 'Full order',     de: 'Ich fahre morgen gern mit dem Zug nach Berlin.', en: 'Time → Manner → Place.' },
        ],
      },
    ],
  },

  {
    slug: 'cases',
    title: 'The Case System',
    category: 'Building Blocks',
    teaser: 'Nominative, accusative, dative, genitive — what changes and why it matters.',
    intro:
      'German uses four cases to show what role a noun plays in a sentence. ' +
      'The case changes the article and adjective ending — the noun itself usually stays the same. ' +
      'Nominativ is the subject (who acts). Akkusativ is the direct object (what is affected). ' +
      'Dativ is the indirect object or the object of certain prepositions. ' +
      'Genitiv shows possession.',

    sections: [
      {
        title: 'The Four Cases · What They Signal',
        exampleTable: [
          { label: 'Nominativ · Subject',          de: 'Der Mann schläft.',               en: 'The man is sleeping.' },
          { label: 'Akkusativ · Direct object',    de: 'Ich sehe den Mann.',              en: 'I see the man.' },
          { label: 'Dativ · Indirect object',      de: 'Ich gebe dem Mann ein Buch.',     en: 'I give the man a book.' },
          { label: 'Genitiv · Possession',         de: 'Das ist das Buch des Mannes.',    en: 'That is the man\'s book.' },
        ],
        callout: {
          kind: 'tip',
          label: 'What actually changes',
          text: 'The noun itself rarely changes (except Genitiv -s on maskulin/neutrum). It\'s the article and adjective endings that carry the case signal.',
        },
      },
      {
        title: 'Definite Articles · der, die, das',
        body: 'The definite article changes in four of the sixteen slots. Learn the patterns, not each cell individually.',
        declensionTables: [
          {
            title: 'Bestimmter Artikel',
            note: 'Changed forms highlighted. Nominativ is the dictionary form.',
            headers: ['', 'maskulin (der)', 'feminin (die)', 'neutrum (das)', 'Plural (die)'],
            rows: [
              { label: 'Nominativ',  cells: ['der',  'die',  'das',  'die'] },
              { label: 'Akkusativ',  cells: ['den ←', 'die',  'das',  'die'] },
              { label: 'Dativ',      cells: ['dem ←', 'der ←', 'dem ←', 'den ←'] },
              { label: 'Genitiv',    cells: ['des ←', 'der ←', 'des ←', 'der ←'] },
            ],
          },
        ],
        callout: {
          kind: 'tip',
          label: 'Pattern shortcut',
          text: 'Only maskulin Akkusativ changes (der → den). Feminin and neutrum Nominativ = Akkusativ. Dativ plural always adds -n to the noun (den Männern, den Frauen).',
        },
      },
      {
        title: 'Indefinite Articles · ein, eine, ein',
        body: 'The indefinite article follows the same pattern as the definite article, but some endings are zero in the nominativ.',
        declensionTables: [
          {
            title: 'Unbestimmter Artikel',
            headers: ['', 'maskulin (ein)', 'feminin (eine)', 'neutrum (ein)', 'Plural (—)'],
            rows: [
              { label: 'Nominativ', cells: ['ein',    'eine',   'ein',    '—'] },
              { label: 'Akkusativ', cells: ['einen ←','eine',   'ein',    '—'] },
              { label: 'Dativ',     cells: ['einem ←','einer ←','einem ←','—'] },
              { label: 'Genitiv',   cells: ['eines ←','einer ←','eines ←','—'] },
            ],
          },
        ],
      },
      {
        title: 'Akkusativ Prepositions · always Akkusativ',
        body: 'These prepositions always require the Akkusativ. No exceptions.',
        exampleTable: [
          { label: 'durch',  de: 'Wir fahren durch den Tunnel.',     en: 'through the tunnel' },
          { label: 'für',    de: 'Das ist für meinen Vater.',        en: 'for my father' },
          { label: 'gegen',  de: 'Sie ist gegen den Plan.',          en: 'against the plan' },
          { label: 'ohne',   de: 'Ohne einen Ausweis geht es nicht.',en: 'without an ID card' },
          { label: 'um',     de: 'Wir sitzen um den Tisch.',        en: 'around the table' },
        ],
      },
      {
        title: 'Dativ Prepositions · always Dativ',
        body: 'These prepositions always require the Dativ.',
        exampleTable: [
          { label: 'aus',        de: 'Er kommt aus der Türkei.',         en: 'from Turkey' },
          { label: 'bei',        de: 'Ich wohne bei meiner Tante.',      en: 'at my aunt\'s' },
          { label: 'mit',        de: 'Ich fahre mit dem Bus.',           en: 'by bus' },
          { label: 'nach',       de: 'Nach dem Essen gehe ich spazieren.',en: 'after dinner' },
          { label: 'seit',       de: 'Ich lerne seit einem Jahr Deutsch.',en: 'for a year (ongoing)' },
          { label: 'von',        de: 'Das ist ein Geschenk von meiner Freundin.', en: 'from my friend' },
          { label: 'zu',         de: 'Ich gehe zum Arzt.',               en: 'to the doctor' },
          { label: 'gegenüber',  de: 'Die Post ist gegenüber dem Bahnhof.', en: 'opposite the station' },
        ],
      },
      {
        title: 'Two-Way Prepositions · Akkusativ or Dativ',
        body:
          'These nine prepositions take Akkusativ when showing movement toward a destination ' +
          '(wohin?) and Dativ when showing a static location (wo?). ' +
          'The question test: Wohin? → Akkusativ. Wo? → Dativ.',
        exampleTable: [
          { label: 'in (Akk)',  de: 'Ich gehe in den Supermarkt.',   en: 'I\'m going into the supermarket. (wohin?)' },
          { label: 'in (Dat)',  de: 'Ich bin im Supermarkt.',         en: 'I\'m in the supermarket. (wo?)' },
          { label: 'an (Akk)',  de: 'Ich hänge das Bild an die Wand.',en: 'I\'m hanging the picture on the wall.' },
          { label: 'an (Dat)',  de: 'Das Bild hängt an der Wand.',    en: 'The picture is hanging on the wall.' },
          { label: 'auf (Akk)', de: 'Ich lege das Buch auf den Tisch.',en: 'I\'m putting the book on the table.' },
          { label: 'auf (Dat)', de: 'Das Buch liegt auf dem Tisch.',  en: 'The book is lying on the table.' },
        ],
        callout: {
          kind: 'tip',
          label: 'Two-way prepositions',
          text: 'an · auf · hinter · in · neben · über · unter · vor · zwischen. Motion (wohin?) = Akkusativ. Location (wo?) = Dativ.',
        },
      },
      {
        title: 'Genitiv · Possession and Formal Prepositions',
        body:
          'Genitiv marks possession and follows a small group of formal prepositions. ' +
          'In spoken German, von + Dativ is increasingly used instead of Genitiv. ' +
          'Maskulin and neutrum nouns add -(e)s in the Genitiv.',
        exampleTable: [
          { label: 'Maskulin -s',   de: 'Das Auto des Mannes.',         en: 'the man\'s car' },
          { label: 'Neutrum -s',    de: 'Der Name des Kindes.',          en: 'the child\'s name' },
          { label: 'Feminin (no s)', de: 'Die Tasche der Frau.',         en: 'the woman\'s bag' },
          { label: 'Spoken alt.',   de: 'Das Auto von dem Mann.',        en: 'von + Dativ instead of Genitiv' },
          { label: 'wegen',         de: 'Wegen des Wetters blieb er zu Hause.', en: 'because of the weather' },
          { label: 'trotz',         de: 'Trotz des Regens gingen wir spazieren.', en: 'despite the rain' },
        ],
      },
    ],
  },
  // ── Passive ──────────────────────────────────────────────────
  {
    slug: 'passive',
    title: 'Passive Voice',
    category: 'Verbs',
    teaser: 'Vorgangspassiv and Zustandspassiv — how German shifts the focus from actor to action.',
    relatedSituations: ['apotheke'],
    intro:
      'The passive voice in German is not a new tense — it slots into the tense ladder you already know. ' +
      'Vorgangspassiv uses werden + Partizip II to describe an action in progress. ' +
      'Zustandspassiv uses sein + Partizip II to describe the resulting state. ' +
      'The object of the active sentence becomes the grammatical subject of the passive.',

    sections: [
      {
        title: 'Vorgangspassiv · Action Passive',
        body:
          'The Vorgangspassiv describes something being done. ' +
          'It uses werden as the frame verb (position 2 or end) plus the Partizip II of the main verb at the end. ' +
          'werden is conjugated for each tense — the main verb stays as a fixed Partizip II.',
        exampleTable: [
          { label: 'Präsens',        de: 'Das Haus wird gebaut.',             en: 'The house is being built.' },
          { label: 'Präteritum',     de: 'Das Haus wurde gebaut.',            en: 'The house was being built.' },
          { label: 'Perfekt',        de: 'Das Haus ist gebaut worden.',       en: 'The house has been built.' },
          { label: 'Plusquamperfekt',de: 'Das Haus war gebaut worden.',       en: 'The house had been built.' },
          { label: 'Futur I',        de: 'Das Haus wird gebaut werden.',      en: 'The house will be built.' },
          { label: 'Konjunktiv II',  de: 'Das Haus würde gebaut werden.',     en: 'The house would be built.' },
        ],
        sentenceFrames: [
          {
            slots: [
              { text: 'Das Haus', role: 'pos1' },
              { text: 'wird',     role: 'verb', highlight: true },
              { text: 'vom Bauarbeiter', role: 'mittelfeld' },
              { text: 'gebaut.',  role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'The object (das Haus) becomes the subject. The agent appears with von + dative.',
          },
        ],
        callout: {
          kind: 'tip',
          label: 'Perfekt note',
          text: 'In the Perfekt passive, werden loses its ge- prefix: gebaut worden (not geworden). This worden signals passive — geworden means "became".',
        },
      },
      {
        title: 'Passiv mit Modalverb · Passive + Modal',
        body:
          'Modal verbs combine with the passive the same way they combine with active infinitives. ' +
          'The modal sits in position 2, the Partizip II + werden cluster stacks at the end. ' +
          'In a Nebensatz the modal moves to the very end, after the passive cluster.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Das Haus', role: 'pos1' },
              { text: 'muss',     role: 'verb', highlight: true },
              { text: 'schnell',  role: 'mittelfeld' },
              { text: 'gebaut werden.', role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'Modal + passive: muss (P2) · gebaut werden (END).',
          },
          {
            slots: [
              { text: '… weil', role: 'pos1' },
              { text: 'das Haus', role: 'mittelfeld' },
              { text: 'schnell', role: 'mittelfeld' },
              { text: 'gebaut werden muss.', role: 'verb-end', highlight: true },
            ],
            caption: 'Nebensatz: the entire verb cluster — gebaut werden muss — stacks at the end.',
          },
        ],
      },
      {
        title: 'Zustandspassiv · State Passive',
        body:
          'The Zustandspassiv describes the condition that results from a completed action. ' +
          'It uses sein (not werden) + Partizip II. ' +
          'The key distinction: werden = action happening now · sein = state that exists now.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Das Haus', role: 'pos1' },
              { text: 'wird',     role: 'verb', highlight: true },
              { text: 'gebaut.',  role: 'verb-end', highlight: true },
            ],
            caption: 'Vorgangspassiv — the action is in progress right now.',
          },
          {
            slots: [
              { text: 'Das Haus', role: 'pos1' },
              { text: 'ist',      role: 'verb', highlight: true },
              { text: 'gebaut.',  role: 'verb-end', highlight: true },
            ],
            caption: 'Zustandspassiv — the house exists in a completed/built state.',
          },
        ],
      },
      {
        title: 'lassen + Infinitiv · Having Something Done',
        body:
          'lassen is not true passive, but it fills a similar role — expressing that the subject causes ' +
          'something to be done (by someone else). It follows the same Verbklammer pattern as modal verbs.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich',     role: 'pos1' },
              { text: 'lasse',   role: 'verb', highlight: true },
              { text: 'mein Auto', role: 'mittelfeld' },
              { text: 'reparieren.', role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'I am having my car repaired. (someone else does the repair)',
          },
          {
            slots: [
              { text: 'Er',      role: 'pos1' },
              { text: 'lässt',   role: 'verb', highlight: true },
              { text: 'sich das', role: 'mittelfeld' },
              { text: 'erklären.', role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'He has it explained to himself. (reflexive lassen)',
          },
        ],
      },
    ],
  },

  // ── Konjunktiv ───────────────────────────────────────────────
  {
    slug: 'konjunktiv',
    title: 'Konjunktiv I & II',
    category: 'Verbs',
    parent: 'tense-stack',
    summary: 'Hypotheticals, wishes, and polite requests (II) · reported speech in journalism and writing (I).',
    teaser: 'Konjunktiv II for hypotheticals · Konjunktiv I for reported speech.',
    intro:
      'Konjunktiv is a mood, not a tense — it does not change when something happens, ' +
      'it changes the speaker\'s stance toward what they are saying. ' +
      'Konjunktiv II signals that something is hypothetical, unreal, or wished-for. ' +
      'Konjunktiv I signals that you are reporting what someone else said, not your own view.',

    sections: [
      {
        title: 'Werden — the verb behind three patterns',
        body:
          'Werden is the single most important verb to recognise across German grammar because it plays ' +
          'three completely different roles depending on the construction. ' +
          'In Futur I it is the future auxiliary. In Passive it builds the action. ' +
          'In Konjunktiv II it becomes würde — the backbone of the hypothetical. ' +
          'The same verb, three jobs. Recognising it in each role unlocks the whole system at a glance.',
        exampleTable: [
          { label: 'Futur I · wird + Infinitiv',          de: 'Ich werde das lernen.',       en: 'I will learn that.' },
          { label: 'Passive · wird + Partizip II',         de: 'Das wird gemacht.',            en: 'That is being done.' },
          { label: 'Konjunktiv II · würde + Infinitiv',   de: 'Ich würde das lernen.',       en: 'I would learn that.' },
          { label: 'Konj. II Perfekt · hätte + Part. II', de: 'Ich hätte das gelernt.',      en: 'I would have learned that.' },
          { label: 'Konj. II Perfekt · wäre + Part. II',  de: 'Ich wäre gegangen.',          en: 'I would have gone.' },
        ],
      },
      {
        title: 'The three auxiliaries — würde · hätte · wäre',
        body:
          'Every Konjunktiv II construction uses one of three auxiliaries. ' +
          'They all come from verbs you already know: werden, haben, sein. ' +
          'Learning which verb class takes which auxiliary is the key to building any hypothetical sentence.',
        exampleTable: [
          { label: 'werden → würde  (unreal present, all verbs)', de: 'Ich würde gern kommen.',       en: 'I would like to come.' },
          { label: 'haben  → hätte  (unreal past, haben-verbs)',  de: 'Ich hätte das gewusst.',       en: 'I would have known that.' },
          { label: 'sein   → wäre   (unreal past, sein-verbs)',   de: 'Ich wäre früher gegangen.',    en: 'I would have left earlier.' },
        ],
        callout: {
          kind: 'tip',
          label: 'Quick rule',
          text: 'würde = unreal present. hätte / wäre = unreal past. The choice between hätte and wäre follows the same haben/sein rule as the Perfekt.',
        },
      },
      {
        title: 'Konjunktiv II · Hypothetical & Conditional',
        body:
          'Konjunktiv II has two forms. The würde-form (würde + Infinitiv) is preferred in spoken German ' +
          'and works for all regular verbs. ' +
          'A small set of high-frequency verbs have their own strong stem forms that are always preferred ' +
          'over würde + their infinitive — because the würde-forms would sound awkward or ambiguous.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Wenn ich Zeit', role: 'pos1' },
              { text: 'hätte,',        role: 'verb', highlight: true },
              { text: '',              role: 'mittelfeld' },
              { text: '',              role: 'satzende' },
            ],
            caption: 'Condition clause: Konjunktiv II strong form — hätte (not würde haben).',
          },
          {
            slots: [
              { text: 'würde',  role: 'verb', highlight: true },
              { text: 'ich mehr', role: 'mittelfeld' },
              { text: 'lernen.', role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'Result clause: würde + Infinitiv.',
          },
        ],
        exampleTable: [
          { label: 'sein → wäre',    de: 'Das wäre schön.',               en: 'That would be nice.' },
          { label: 'haben → hätte',  de: 'Ich hätte gern mehr Zeit.',      en: 'I would like more time.' },
          { label: 'werden → würde', de: 'Ich würde gern kommen.',         en: 'I would like to come.' },
          { label: 'können → könnte',de: 'Könntest du mir helfen?',        en: 'Could you help me?' },
          { label: 'müssen → müsste',de: 'Du müsstest das wissen.',        en: 'You should know that.' },
          { label: 'dürfen → dürfte',de: 'Das dürfte schwierig sein.',     en: 'That is likely to be difficult.' },
          { label: 'wollen → wollte',de: 'Ich wollte das nicht sagen.',    en: 'I didn\'t mean to say that.' },
        ],
        callout: {
          kind: 'tip',
          label: 'When to use the stem form vs. würde',
          text: 'Always use stem forms for sein (wäre), haben (hätte), and all six modal verbs. Use würde + Infinitiv for everything else.',
        },
      },
      {
        title: 'Konjunktiv II Perfekt · Past Hypothetical',
        body:
          'To talk about something hypothetical in the past — what would have happened if things had been different — ' +
          'combine hätte or wäre (Konjunktiv II) with the Partizip II of the main verb. ' +
          'This is the "third conditional" of German.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Wenn ich das gewusst', role: 'pos1' },
              { text: 'hätte,',               role: 'verb', highlight: true },
              { text: '',                      role: 'satzende' },
            ],
            caption: 'Past condition: hätte/wäre + Partizip II.',
          },
          {
            slots: [
              { text: 'wäre',           role: 'verb', highlight: true },
              { text: 'ich früher',      role: 'mittelfeld' },
              { text: 'gekommen.',       role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'Past result: wäre/hätte + Partizip II at the end.',
          },
        ],
        exampleTable: [
          { label: 'haben verbs', de: 'Ich hätte mehr gelernt.',          en: 'I would have studied more.' },
          { label: 'sein verbs',  de: 'Er wäre früher gekommen.',         en: 'He would have come earlier.' },
          { label: 'modal',       de: 'Du hättest fragen können.',         en: 'You could have asked.' },
        ],
      },
      {
        title: 'Konjunktiv I · Reported Speech',
        body:
          'Konjunktiv I is built from the infinitive stem + a set of endings. ' +
          'It is the mood of journalism, official reporting, and formal indirect speech. ' +
          'Using it signals that the speaker is transmitting someone else\'s words — not personally endorsing them. ' +
          'Where Konjunktiv I forms overlap with Präsens (especially wir, sie/Sie), ' +
          'Konjunktiv II or the würde-form is used instead to keep the indirect-speech signal clear.',
        exampleTable: [
          { label: 'sein (most common)', de: 'Er sagte, er sei krank.',          en: 'He said he was sick.' },
          { label: 'haben',              de: 'Sie sagte, sie habe keine Zeit.',   en: 'She said she had no time.' },
          { label: 'regular verb',       de: 'Er erklärte, er lerne täglich.',    en: 'He explained he studies daily.' },
          { label: 'modal verb',         de: 'Sie berichtete, er müsse warten.',  en: 'She reported he had to wait.' },
        ],
        sentenceFrames: [
          {
            slots: [
              { text: 'Er sagte,',  role: 'pos1' },
              { text: 'er',         role: 'mittelfeld' },
              { text: 'sei',        role: 'verb-end', highlight: true },
              { text: 'müde.',      role: 'satzende' },
            ],
            caption: 'Konjunktiv I sei — distinct from Präsens ist, so clearly marked as indirect.',
          },
        ],
        callout: {
          kind: 'tip',
          label: 'Key Konjunktiv I forms',
          text: 'sein → ich sei, du seiest, er/sie/es sei, wir seien, ihr seiet, sie seien. For regular verbs: ich lerne, du lernest, er lerne (note: er lerne ≠ er lernt).',
        },
      },
    ],
  },

  // ── Modal Verbs ──────────────────────────────────────────────
  {
    slug: 'modal-verbs',
    title: 'Modal Verbs & Stacking',
    category: 'Verbs',
    teaser: 'The six modals + how they combine with every tense and passive construction.',
    relatedSituations: ['apotheke'],
    intro:
      'Modal verbs do not need their own framework — they plug into the sentence structure you already know. ' +
      'The modal always sits in position 2. The main verb goes to the end as an Infinitiv. ' +
      'That same pattern holds whether you are in Präsens, Perfekt, passive, or Konjunktiv II. ' +
      'Modal stacking is the same frame with more verbs at the end.',

    sections: [
      {
        title: 'The Six Modal Verbs',
        body: 'Each modal expresses a different kind of relationship between the subject and the main action.',
        exampleTable: [
          { label: 'müssen',  de: 'Ich muss gehen.',          en: 'I must / have to go.' },
          { label: 'können',  de: 'Ich kann schwimmen.',       en: 'I can / am able to swim.' },
          { label: 'dürfen',  de: 'Du darfst hier parken.',    en: 'You may / are allowed to park here.' },
          { label: 'wollen',  de: 'Er will schlafen.',         en: 'He wants to sleep.' },
          { label: 'sollen',  de: 'Du sollst warten.',         en: 'You are supposed to wait.' },
          { label: 'mögen / möchten', de: 'Ich möchte einen Kaffee.', en: 'I would like a coffee.' },
        ],
        callout: {
          kind: 'tip',
          label: 'Irregular Präsens',
          text: 'All six modals have irregular first and third person singular forms in Präsens: ich kann, er kann (not *kannt). ich muss, er muss. ich will, er will. ich soll, er soll. ich darf, er darf. ich mag, er mag.',
        },
      },
      {
        title: 'Position Rule',
        body: 'The structure never changes regardless of which tense or construction you are using.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich',    role: 'pos1' },
              { text: 'kann',   role: 'verb', highlight: true },
              { text: 'heute',  role: 'mittelfeld' },
              { text: 'kommen.', role: 'verb-end', highlight: true },
            ],
            showBracket: true,
            caption: 'Modal in position 2. Main verb infinitiv at the end.',
          },
          {
            slots: [
              { text: '… weil', role: 'pos1' },
              { text: 'ich',    role: 'mittelfeld' },
              { text: 'heute',  role: 'mittelfeld' },
              { text: 'kommen kann.', role: 'verb-end', highlight: true },
            ],
            caption: 'Nebensatz: the entire verb cluster moves to the end.',
          },
        ],
      },
    ],

    modalStack: [
      {
        construction: 'Präsens + Modal',
        formula: 'Modal (P2) · INF (END)',
        example: 'Er kann kommen.',
        exampleEn: 'He can come.',
      },
      {
        construction: 'Präteritum + Modal',
        formula: 'Modal-Prät. (P2) · INF (END)',
        example: 'Er konnte kommen.',
        exampleEn: 'He was able to come.',
      },
      {
        construction: 'Perfekt + Modal',
        formula: 'haben (P2) · INF · Modal-INF (END)',
        example: 'Er hat kommen können.',
        exampleEn: 'He has been able to come.',
      },
      {
        construction: 'Futur I + Modal',
        formula: 'werden (P2) · INF · Modal-INF (END)',
        example: 'Er wird kommen können.',
        exampleEn: 'He will be able to come.',
      },
      {
        construction: 'Passive + Modal',
        formula: 'Modal (P2) · PII · werden (END)',
        example: 'Das muss gebaut werden.',
        exampleEn: 'That must be built.',
      },
      {
        construction: 'Konjunktiv II + Modal',
        formula: 'Modal-Konj.II (P2) · INF (END)',
        example: 'Er könnte kommen.',
        exampleEn: 'He could come. / He might come.',
      },
      {
        construction: 'Passive Perfekt + Modal',
        formula: 'Modal (P2) · PII · worden · sein (END)',
        example: 'Es hätte gemacht werden müssen.',
        exampleEn: 'It would have had to have been done.',
      },
    ],
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
        tense: 'Konjunktiv II Perfekt',
        verbCount: 2,
        structure: 'hätte/wäre (P2) + Partizip II (END)',
        example: 'Ich hätte gelernt.',
        note: 'past hypothetical',
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
    title: 'Verb Conjugation',
    intro:
      'German verb conjugation follows predictable patterns. ' +
      'Regular verbs share the same set of endings. ' +
      'Separable verbs split their prefix to the end of the clause. ' +
      'Three auxiliary verbs — haben, sein, and werden — build every compound tense. ' +
      'Master these building blocks and the whole conjugation system falls into place.',
    category: 'Verbs',
    teaser: 'Regular patterns, separable verbs, and the three auxiliaries that build every tense.',

    sections: [
      {
        title: 'Regular Verbs — the standard endings',
        body:
          'Most German verbs follow the same ending pattern in Präsens. ' +
          'Remove the -en infinitive ending to find the stem, then add: ' +
          '-e (ich), -st (du), -t (er/sie/es), -en (wir), -t (ihr), -en (sie/Sie). ' +
          'This pattern applies to thousands of verbs. Learn it once.',
        exampleTable: [
          { label: 'lernen → lern-',   de: 'ich lerne · du lernst · er lernt · wir lernen · ihr lernt · sie lernen',  en: 'to learn' },
          { label: 'machen → mach-',   de: 'ich mache · du machst · er macht · wir machen · ihr macht · sie machen',  en: 'to make / do' },
          { label: 'wohnen → wohn-',   de: 'ich wohne · du wohnst · er wohnt · wir wohnen · ihr wohnt · sie wohnen',  en: 'to live / reside' },
          { label: 'spielen → spiel-', de: 'ich spiele · du spielst · er spielt · wir spielen · ihr spielt · sie spielen', en: 'to play' },
        ],
        callout: {
          kind: 'tip',
          label: 'Stem-change verbs (A2)',
          text: 'Some verbs change their stem vowel in the du and er/sie/es forms only — e→ie (sehen: du siehst), e→i (sprechen: du sprichst), a→ä (fahren: du fährst). The wir and sie/Sie forms always stay at the infinitive stem.',
        },
      },
      {
        title: 'Trennbare Verben — Separable Verbs',
        body:
          'Separable verbs have a prefix that detaches in the main clause and moves to the end. ' +
          'The conjugated verb stays in position 2; the prefix waits at the end of the clause. ' +
          'In the infinitive, dictionary, and subordinate-clause forms the prefix reattaches.',
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich',       role: 'pos1' },
              { text: 'mache',     role: 'verb', highlight: true },
              { text: 'das Fenster', role: 'mittelfeld' },
              { text: 'auf.',      role: 'verb-end', highlight: true },
            ],
            caption: 'aufmachen → mache … auf. Prefix detaches to end-position.',
          },
          {
            slots: [
              { text: 'Er',       role: 'pos1' },
              { text: 'ruft',     role: 'verb', highlight: true },
              { text: 'seine Mutter', role: 'mittelfeld' },
              { text: 'an.',      role: 'verb-end', highlight: true },
            ],
            caption: 'anrufen → ruft … an.',
          },
        ],
        exampleTable: [
          { label: 'aufmachen',   de: 'Ich mache die Tür auf.',      en: 'I open the door.' },
          { label: 'anrufen',     de: 'Sie ruft ihren Vater an.',    en: 'She calls her father.' },
          { label: 'einladen',    de: 'Wir laden euch ein.',         en: 'We invite you.' },
          { label: 'abfahren',    de: 'Der Zug fährt um 9 Uhr ab.', en: 'The train departs at 9.' },
          { label: 'zurückkommen',de: 'Er kommt morgen zurück.',     en: 'He comes back tomorrow.' },
          { label: 'mitnehmen',   de: 'Nimmst du mich mit?',        en: 'Will you take me along?' },
        ],
        callout: {
          kind: 'tip',
          label: 'Infinitive & subordinate clauses — prefix stays on',
          text: 'Ich möchte die Tür aufmachen. · Ich weiß, dass er die Tür aufmacht. The prefix only detaches in a main clause with a simple conjugated verb.',
        },
      },
    ],

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
          {
            tense: 'Plusquamperfekt',
            note: 'hatte + gehabt',
            rows: [
              { pronoun: 'ich',        form: 'hatte gehabt' },
              { pronoun: 'du',         form: 'hattest gehabt' },
              { pronoun: 'er/sie/es',  form: 'hatte gehabt' },
              { pronoun: 'wir',        form: 'hatten gehabt' },
              { pronoun: 'ihr',        form: 'hattet gehabt' },
              { pronoun: 'sie/Sie',    form: 'hatten gehabt' },
            ],
          },
          {
            tense: 'Futur II',
            note: 'werden + gehabt haben',
            rows: [
              { pronoun: 'ich',        form: 'werde gehabt haben' },
              { pronoun: 'du',         form: 'wirst gehabt haben' },
              { pronoun: 'er/sie/es',  form: 'wird gehabt haben' },
              { pronoun: 'wir',        form: 'werden gehabt haben' },
              { pronoun: 'ihr',        form: 'werdet gehabt haben' },
              { pronoun: 'sie/Sie',    form: 'werden gehabt haben' },
            ],
          },
          {
            tense: 'Konjunktiv II',
            note: 'hätte … — present hypothetical',
            rows: [
              { pronoun: 'ich',        form: 'hätte' },
              { pronoun: 'du',         form: 'hättest' },
              { pronoun: 'er/sie/es',  form: 'hätte' },
              { pronoun: 'wir',        form: 'hätten' },
              { pronoun: 'ihr',        form: 'hättet' },
              { pronoun: 'sie/Sie',    form: 'hätten' },
            ],
          },
          {
            tense: 'Konjunktiv II Perfekt',
            note: 'hätte + gehabt — past hypothetical',
            rows: [
              { pronoun: 'ich',        form: 'hätte gehabt' },
              { pronoun: 'du',         form: 'hättest gehabt' },
              { pronoun: 'er/sie/es',  form: 'hätte gehabt' },
              { pronoun: 'wir',        form: 'hätten gehabt' },
              { pronoun: 'ihr',        form: 'hättet gehabt' },
              { pronoun: 'sie/Sie',    form: 'hätten gehabt' },
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
          {
            tense: 'Plusquamperfekt',
            note: 'war + gewesen',
            rows: [
              { pronoun: 'ich',        form: 'war gewesen' },
              { pronoun: 'du',         form: 'warst gewesen' },
              { pronoun: 'er/sie/es',  form: 'war gewesen' },
              { pronoun: 'wir',        form: 'waren gewesen' },
              { pronoun: 'ihr',        form: 'wart gewesen' },
              { pronoun: 'sie/Sie',    form: 'waren gewesen' },
            ],
          },
          {
            tense: 'Futur II',
            note: 'werden + gewesen sein',
            rows: [
              { pronoun: 'ich',        form: 'werde gewesen sein' },
              { pronoun: 'du',         form: 'wirst gewesen sein' },
              { pronoun: 'er/sie/es',  form: 'wird gewesen sein' },
              { pronoun: 'wir',        form: 'werden gewesen sein' },
              { pronoun: 'ihr',        form: 'werdet gewesen sein' },
              { pronoun: 'sie/Sie',    form: 'werden gewesen sein' },
            ],
          },
          {
            tense: 'Konjunktiv II',
            note: 'wäre … — present hypothetical',
            rows: [
              { pronoun: 'ich',        form: 'wäre' },
              { pronoun: 'du',         form: 'wärst' },
              { pronoun: 'er/sie/es',  form: 'wäre' },
              { pronoun: 'wir',        form: 'wären' },
              { pronoun: 'ihr',        form: 'wärt' },
              { pronoun: 'sie/Sie',    form: 'wären' },
            ],
          },
          {
            tense: 'Konjunktiv II Perfekt',
            note: 'wäre + gewesen — past hypothetical',
            rows: [
              { pronoun: 'ich',        form: 'wäre gewesen' },
              { pronoun: 'du',         form: 'wärst gewesen' },
              { pronoun: 'er/sie/es',  form: 'wäre gewesen' },
              { pronoun: 'wir',        form: 'wären gewesen' },
              { pronoun: 'ihr',        form: 'wärt gewesen' },
              { pronoun: 'sie/Sie',    form: 'wären gewesen' },
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
          {
            tense: 'Plusquamperfekt',
            note: 'war + geworden',
            rows: [
              { pronoun: 'ich',        form: 'war geworden' },
              { pronoun: 'du',         form: 'warst geworden' },
              { pronoun: 'er/sie/es',  form: 'war geworden' },
              { pronoun: 'wir',        form: 'waren geworden' },
              { pronoun: 'ihr',        form: 'wart geworden' },
              { pronoun: 'sie/Sie',    form: 'waren geworden' },
            ],
          },
          {
            tense: 'Futur II',
            note: 'werden + geworden sein',
            rows: [
              { pronoun: 'ich',        form: 'werde geworden sein' },
              { pronoun: 'du',         form: 'wirst geworden sein' },
              { pronoun: 'er/sie/es',  form: 'wird geworden sein' },
              { pronoun: 'wir',        form: 'werden geworden sein' },
              { pronoun: 'ihr',        form: 'werdet geworden sein' },
              { pronoun: 'sie/Sie',    form: 'werden geworden sein' },
            ],
          },
          {
            tense: 'Konjunktiv II',
            note: 'würde … — present hypothetical',
            rows: [
              { pronoun: 'ich',        form: 'würde' },
              { pronoun: 'du',         form: 'würdest' },
              { pronoun: 'er/sie/es',  form: 'würde' },
              { pronoun: 'wir',        form: 'würden' },
              { pronoun: 'ihr',        form: 'würdet' },
              { pronoun: 'sie/Sie',    form: 'würden' },
            ],
          },
          {
            tense: 'Konjunktiv II Perfekt',
            note: 'wäre + geworden — past hypothetical',
            rows: [
              { pronoun: 'ich',        form: 'wäre geworden' },
              { pronoun: 'du',         form: 'wärst geworden' },
              { pronoun: 'er/sie/es',  form: 'wäre geworden' },
              { pronoun: 'wir',        form: 'wären geworden' },
              { pronoun: 'ihr',        form: 'wärt geworden' },
              { pronoun: 'sie/Sie',    form: 'wären geworden' },
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
    slug: 'praesens',
    title: 'Präsens',
    category: 'Verbs',
    parent: 'tense-stack',
    summary: 'Current actions, habits, general truths, and near-future plans. The most used tense in German.',
    teaser: 'Present tense endings, stem-change verbs, and the three core auxiliaries.',
    intro:
      'The present tense is the engine of everyday German — it covers what is happening now, ' +
      'regular habits, and even near-future plans with a time word. Master the endings once ' +
      'and you have a template every other tense builds on.',
    sections: [
      {
        title: 'The endings — stem + ending = form',
        body: 'Remove -en from the infinitive to get the stem, then add the ending. ' +
              'The wir and sie/Sie forms always match the infinitive — a useful shortcut.',
        exampleTable: [
          { label: 'ich',       de: 'lern-e',   en: 'I learn' },
          { label: 'du',        de: 'lern-st',  en: 'you learn' },
          { label: 'er/sie/es', de: 'lern-t',   en: 'he/she/it learns' },
          { label: 'wir',       de: 'lern-en',  en: 'we learn' },
          { label: 'ihr',       de: 'lern-t',   en: 'you (pl.) learn' },
          { label: 'sie/Sie',   de: 'lern-en',  en: 'they / you (formal) learn' },
        ],
      },
      {
        title: 'Stem-change verbs — e→i, e→ie, a→ä',
        body: 'Some verbs change their stem vowel in the du and er/sie/es forms only. ' +
              'The other four forms keep the original vowel.',
        exampleTable: [
          { label: 'sprechen (e→i)',  de: 'ich spreche · du sprichst · er spricht',  en: 'to speak' },
          { label: 'sehen (e→ie)',    de: 'ich sehe · du siehst · er sieht',          en: 'to see' },
          { label: 'fahren (a→ä)',    de: 'ich fahre · du fährst · er fährt',         en: 'to drive' },
          { label: 'schlafen (a→ä)', de: 'ich schlafe · du schläfst · er schläft',   en: 'to sleep' },
        ],
        callout: {
          kind: 'tip',
          text: 'Only du and er/sie/es change. The ich, wir, ihr, and sie/Sie forms always follow the regular pattern.',
        },
      },
      {
        title: 'The three auxiliaries — haben · sein · werden',
        body: 'These three verbs are irregular in Präsens and appear inside every compound tense. ' +
              'Memorise their six forms — you will use them constantly.',
        exampleTable: [
          { label: 'haben (ich/du/er)',    de: 'habe · hast · hat',       en: 'to have' },
          { label: 'haben (wir/ihr/sie)',  de: 'haben · habt · haben',    en: '' },
          { label: 'sein (ich/du/er)',     de: 'bin · bist · ist',        en: 'to be' },
          { label: 'sein (wir/ihr/sie)',   de: 'sind · seid · sind',      en: '' },
          { label: 'werden (ich/du/er)',   de: 'werde · wirst · wird',    en: 'to become' },
          { label: 'werden (wir/ihr/sie)', de: 'werden · werdet · werden', en: '' },
        ],
        callout: {
          kind: 'confidence',
          text: 'Full conjugation tables for haben, sein, and werden — including all tenses — are on the Verb Conjugation page.',
        },
      },
    ],
  },
  {
    slug: 'past-tenses',
    title: 'Past Tenses',
    category: 'Verbs',
    parent: 'tense-stack',
    summary: 'Perfekt for spoken past · Präteritum for writing · Plusquamperfekt for the earlier past.',
    teaser: 'Perfekt · Präteritum · Plusquamperfekt — the complete past.',
    intro:
      'German has three past tenses, each with its own role. ' +
      'Perfekt is the spoken past you use in conversation. ' +
      'Präteritum is the written past of narrative and literature. ' +
      'Plusquamperfekt places one past event before another.',
    sections: [
      {
        title: 'Perfekt — the spoken past',
        body: 'Formed with haben or sein (Präsens) in position 2, plus Partizip II at the end. ' +
              'This is the go-to past tense in conversation.',
        exampleTable: [
          { label: 'haben + Partizip II',     de: 'Ich habe gelernt.',            en: 'I learned / have learned' },
          { label: 'sein + Partizip II',      de: 'Er ist gefahren.',             en: 'He drove / has driven' },
          { label: 'Partizip II — weak',      de: 'ge- + stem + -(e)t → gelernt, gemacht', en: 'regular verbs' },
          { label: 'Partizip II — strong',    de: 'ge- + (new stem) + -en → gefahren, geschrieben', en: 'irregular verbs' },
          { label: 'Partizip II — trennbar',  de: 'stem + ge + prefix + -(e)t/-en → aufgemacht', en: 'separable verbs' },
          { label: 'lernen (ich/du/er)',   de: 'habe · hast · hat gelernt',    en: 'Perfekt of a haben-verb' },
          { label: 'lernen (wir/ihr/sie)', de: 'haben · habt · haben gelernt', en: '' },
          { label: 'fahren (ich/du/er)',   de: 'bin · bist · ist gefahren',  en: 'Perfekt of a sein-verb' },
          { label: 'fahren (wir/ihr/sie)', de: 'sind · seid · sind gefahren', en: '' },
        ],
        callout: {
          kind: 'tip',
          text: 'Use sein with verbs of motion or change of state: fahren, gehen, kommen, werden, bleiben, sein itself.',
        },
      },
      {
        title: 'Präteritum — the written past',
        body: 'The past tense of novels, news reports, and formal writing. ' +
              'Exception: haben and sein, plus modal verbs, use Präteritum even in speech — ' +
              'say "er war" and "ich hatte", not "er ist gewesen".',
        exampleTable: [
          { label: 'Weak verbs: stem + -te', de: 'lernen → lernte · machen → machte',  en: 'regular pattern' },
          { label: 'Strong verbs: vowel change', de: 'fahren → fuhr · schreiben → schrieb', en: 'irregular — must memorise' },
          { label: 'haben',   de: 'ich hatte · du hattest · er hatte',   en: 'had' },
          { label: 'sein',    de: 'ich war · du warst · er war',         en: 'was / were' },
          { label: 'werden',  de: 'ich wurde · du wurdest · er wurde',   en: 'became' },
          { label: 'lernen (ich/du/er)',   de: 'lernte · lerntest · lernte',     en: 'weak verb — Präteritum' },
          { label: 'lernen (wir/ihr/sie)', de: 'lernten · lerntet · lernten',    en: '' },
        ],
        callout: {
          kind: 'tip',
          text: 'In everyday speech, always prefer Perfekt. Use Präteritum for war, hatte, wurde, and modal verbs at all levels — these sound natural even in conversation.',
        },
      },
      {
        title: 'Plusquamperfekt — the earlier past',
        body: 'The past-before-the-past. Shows that one event happened before another past event. ' +
              'Formed exactly like Perfekt, but swap the Präsens auxiliary for its Präteritum form.',
        exampleTable: [
          { label: 'hatte + Partizip II', de: 'Ich hatte schon gegessen.',    en: 'I had already eaten.' },
          { label: 'war + Partizip II',   de: 'Sie war noch nie geflogen.',   en: 'She had never flown.' },
          { label: 'In context',          de: 'Als er ankam, hatte sie schon gegessen.', en: 'When he arrived, she had already eaten.' },
          { label: 'lernen (ich/du/er)',   de: 'hatte · hattest · hatte gelernt',  en: 'Plusquamperfekt of a haben-verb' },
          { label: 'lernen (wir/ihr/sie)', de: 'hatten · hattet · hatten gelernt', en: '' },
        ],
        callout: {
          kind: 'tip',
          text: 'Same haben/sein rule as Perfekt — just replace habe→hatte and bin→war. The Partizip II stays identical.',
        },
      },
      {
        title: 'Perfekt vs Präteritum — when to use which',
        exampleTable: [
          { label: 'Spoken German',                    de: 'Ich habe gestern gearbeitet.',        en: '→ use Perfekt' },
          { label: 'Written / narrative',              de: 'Er arbeitete den ganzen Tag.',         en: '→ use Präteritum' },
          { label: 'haben & sein — always Präteritum', de: 'Er war müde. Sie hatte keine Zeit.',  en: 'even in speech' },
          { label: 'Modals — always Präteritum',       de: 'Ich musste früh aufstehen.',          en: 'even in speech' },
        ],
      },
    ],
  },
  {
    slug: 'future-tenses',
    title: 'Future Tenses',
    category: 'Verbs',
    parent: 'tense-stack',
    summary: 'Future plans, intentions, and predictions — and actions that will have been completed.',
    teaser: 'Futur I · Futur II — intention, prediction, and completed futures.',
    intro:
      'German often uses the Präsens with a time word to talk about the future. ' +
      'The two Futur tenses add a layer of emphasis, strong intention, or — in Futur II — ' +
      'the idea that something will have been completed by a future point.',
    sections: [
      {
        title: 'Futur I — intention and prediction',
        body: 'Formed with werden (Präsens) in position 2, plus the Infinitiv at the end. ' +
              'Use it to emphasise a firm intention or to make a prediction.',
        exampleTable: [
          { label: 'Structure',              de: 'werden (P2) + Infinitiv (END)',    en: '' },
          { label: 'lernen (ich/du/er)',   de: 'werde · wirst · wird lernen',     en: 'will learn' },
          { label: 'lernen (wir/ihr/sie)', de: 'werden · werdet · werden lernen', en: '' },
          { label: 'Intention',            de: 'Ich werde morgen kommen.',        en: 'I will come tomorrow.' },
          { label: 'Prediction',           de: 'Das wird nicht einfach sein.',    en: 'That won\'t be easy.' },
        ],
        callout: {
          kind: 'tip',
          text: 'Germans mostly use Präsens + time word for future events. "Ich komme morgen." is more natural than "Ich werde morgen kommen."',
        },
      },
      {
        title: 'Futur II — completed future action',
        body: 'A prediction or assumption that something will have been completed by a future point. ' +
              'Formed with werden + Partizip II + haben/sein at the very end.',
        exampleTable: [
          { label: 'Structure',              de: 'werden (P2) + Partizip II + haben/sein (END)', en: '' },
          { label: 'lernen (ich/du/er)',   de: 'werde · wirst · wird gelernt haben',         en: 'will have learned' },
          { label: 'lernen (wir/ihr/sie)', de: 'werden · werdet · werden gelernt haben',     en: '' },
          { label: 'with sein',            de: 'Er wird angekommen sein.',                   en: 'He will have arrived.' },
          { label: 'Assumption',           de: 'Er wird das vergessen haben.',               en: 'He will have forgotten that.' },
        ],
        callout: {
          kind: 'tip',
          text: 'Same haben/sein rule as Perfekt — verbs of motion and change take sein; everything else takes haben.',
        },
      },
      {
        title: 'Präsens as future — the natural choice',
        body: 'When a time marker makes the future clear, Präsens is almost always preferred over Futur I.',
        exampleTable: [
          { label: 'With time word',        de: 'Ich komme morgen.',               en: 'I\'m coming tomorrow.' },
          { label: 'Confirmed plan',        de: 'Wir fahren nächste Woche.',       en: 'We\'re going next week.' },
          { label: 'Question about plans',  de: 'Was machst du am Wochenende?',   en: 'What are you doing this weekend?' },
        ],
      },
    ],
  },
  {
    slug: 'connectors',
    title: 'Connectors & Conjunctions',
    category: 'Sentence Structure',
    teaser: 'und, aber, weil, dass, obwohl — coordinating vs. subordinating, and the verb-to-end rule.',
    relatedSituations: ['apotheke'],
    intro:
      'German connectors fall into four groups, each with a different effect on word order. ' +
      'Coordinating conjunctions change nothing. ' +
      'Subordinating conjunctions push the verb to the very end of the clause. ' +
      'Adverbial connectors go to position 1 and invert the subject and verb. ' +
      'Two-part correlatives frame both sides of a contrast or addition.',

    sections: [
      {
        title: 'Coordinating · Verb Stays in Position 2',
        body:
          'Coordinating conjunctions join two main clauses. ' +
          'They sit between the clauses and have no effect on word order — ' +
          'the verb stays in position 2 in both halves.',
        connectors: [
          {
            kind: 'coordinating',
            label: 'Coordinating conjunctions — verb stays in P2',
            note: 'These sit between two main clauses (Pos. 0). Word order after them is unchanged.',
            items: [
              { word: 'und',      meaning: 'and' },
              { word: 'aber',     meaning: 'but' },
              { word: 'oder',     meaning: 'or' },
              { word: 'denn',     meaning: 'because / for (always P2 after — never P1)' },
              { word: 'sondern',  meaning: 'but rather (corrects a negative)' },
            ],
          },
        ],
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich lerne Deutsch', role: 'pos1' },
              { text: 'und',               role: 'mittelfeld' },
              { text: 'er',                role: 'mittelfeld' },
              { text: 'lernt',             role: 'verb', highlight: true },
              { text: 'Spanisch.',         role: 'satzende' },
            ],
            caption: 'und — verb stays in P2 in both clauses.',
          },
          {
            slots: [
              { text: 'Ich komme nicht,', role: 'pos1' },
              { text: 'sondern',          role: 'mittelfeld' },
              { text: 'ich',              role: 'mittelfeld' },
              { text: 'bleibe',           role: 'verb', highlight: true },
              { text: 'zu Hause.',        role: 'satzende' },
            ],
            caption: 'sondern — corrects a negative: not X, but rather Y.',
          },
        ],
      },
      {
        title: 'Subordinating · Verb to the End',
        body:
          'Subordinating conjunctions introduce a Nebensatz (subordinate clause). ' +
          'The conjugated verb moves to the very end of that clause. ' +
          'A comma always separates the Hauptsatz from the Nebensatz.',
        connectors: [
          {
            kind: 'subordinating',
            label: 'Subordinating conjunctions — verb goes to END',
            note: 'Comma before the Nebensatz. If the Nebensatz comes first, the main clause inverts (verb in P2).',
            items: [
              { word: 'weil',     meaning: 'because (reason)' },
              { word: 'dass',     meaning: 'that (reported speech, expectations)' },
              { word: 'obwohl',   meaning: 'although (concession)' },
              { word: 'wenn',     meaning: 'if / whenever (condition or repetition)' },
              { word: 'als',      meaning: 'when (single past event)' },
              { word: 'ob',       meaning: 'whether' },
              { word: 'damit',    meaning: 'so that (purpose)' },
              { word: 'bevor',    meaning: 'before' },
              { word: 'nachdem',  meaning: 'after' },
              { word: 'während',  meaning: 'while' },
              { word: 'seit(dem)',meaning: 'since (time)' },
              { word: 'bis',      meaning: 'until' },
              { word: 'falls',    meaning: 'in case / if (possibility)' },
              { word: 'sodass',   meaning: 'so that (result)' },
            ],
          },
        ],
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich bleibe zu Hause,', role: 'pos1' },
              { text: 'weil',                 role: 'mittelfeld' },
              { text: 'ich',                  role: 'mittelfeld' },
              { text: 'krank',                role: 'mittelfeld' },
              { text: 'bin.',                 role: 'verb-end', highlight: true },
            ],
            caption: 'weil pushes the verb to the very end.',
          },
          {
            slots: [
              { text: 'Weil ich krank', role: 'pos1' },
              { text: 'bin,',           role: 'verb', highlight: true },
              { text: 'bleibe',         role: 'verb', highlight: true },
              { text: 'ich',            role: 'mittelfeld' },
              { text: 'zu Hause.',      role: 'satzende' },
            ],
            caption: 'Nebensatz first → main clause inverts: verb comes before subject.',
          },
        ],
      },
      {
        title: 'Adverbial Connectors · Position 1, Verb Inverts',
        body:
          'Adverbial connectors are not conjunctions — they are adverbs that sit in position 1 of the main clause. ' +
          'Because position 1 is taken, the verb stays in position 2 and the subject shifts to position 3. ' +
          'This inversion is the same rule as time-expression fronting in any Hauptsatz.',
        connectors: [
          {
            kind: 'adverbial',
            label: 'Adverbial connectors — occupy P1, verb stays P2, subject moves to P3',
            note: 'These cause inversion because they fill position 1. They are NOT conjunctions — they do not start a Nebensatz.',
            items: [
              { word: 'deshalb',    meaning: 'therefore / that\'s why' },
              { word: 'deswegen',   meaning: 'because of that / therefore' },
              { word: 'daher',      meaning: 'hence / therefore' },
              { word: 'trotzdem',   meaning: 'nevertheless / despite that' },
              { word: 'dennoch',    meaning: 'yet / still / nonetheless' },
              { word: 'außerdem',   meaning: 'moreover / besides' },
              { word: 'dann',       meaning: 'then (sequence)' },
              { word: 'danach',     meaning: 'after that' },
              { word: 'zuerst',     meaning: 'first' },
              { word: 'schließlich',meaning: 'finally / after all' },
              { word: 'allerdings', meaning: 'however / admittedly' },
              { word: 'nämlich',    meaning: 'namely / you see (goes after the verb)' },
            ],
          },
        ],
        sentenceFrames: [
          {
            slots: [
              { text: 'Ich bin krank.', role: 'pos1' },
              { text: 'Deshalb',        role: 'pos1' },
              { text: 'bleibe',         role: 'verb', highlight: true },
              { text: 'ich zu Hause.',  role: 'satzende' },
            ],
            caption: 'deshalb fills P1 → verb stays P2 → subject ich shifts to P3.',
          },
          {
            slots: [
              { text: 'Es regnet.',   role: 'pos1' },
              { text: 'Trotzdem',     role: 'pos1' },
              { text: 'gehen',        role: 'verb', highlight: true },
              { text: 'wir spazieren.', role: 'satzende' },
            ],
            caption: 'trotzdem — nevertheless, we go for a walk (inversion after trotzdem).',
          },
        ],
      },
      {
        title: 'Two-Part Correlatives',
        body:
          'Correlative conjunctions work in pairs — one in each clause, framing the relationship between them. ' +
          'Word order after each part follows normal main clause rules.',
        connectors: [
          {
            kind: 'correlative',
            label: 'Two-part connectors — one in each clause',
            note: 'Each part sits in its own clause. The verb follows normal P2 rules after each connector.',
            items: [
              { word: 'entweder … oder',          meaning: 'either … or' },
              { word: 'weder … noch',              meaning: 'neither … nor' },
              { word: 'sowohl … als auch',         meaning: 'both … and' },
              { word: 'nicht nur … sondern auch',  meaning: 'not only … but also' },
              { word: 'zwar … aber',               meaning: 'it\'s true … but' },
            ],
          },
        ],
        sentenceFrames: [
          {
            slots: [
              { text: 'Entweder',     role: 'pos1' },
              { text: 'kommst',       role: 'verb', highlight: true },
              { text: 'du jetzt,',    role: 'mittelfeld' },
              { text: 'oder',         role: 'mittelfeld' },
              { text: 'ich',          role: 'mittelfeld' },
              { text: 'gehe',         role: 'verb', highlight: true },
              { text: 'allein.',      role: 'satzende' },
            ],
            caption: 'entweder … oder: either you come now, or I go alone.',
          },
          {
            slots: [
              { text: 'Er',           role: 'pos1' },
              { text: 'spricht',      role: 'verb', highlight: true },
              { text: 'sowohl Deutsch', role: 'mittelfeld' },
              { text: 'als auch',     role: 'mittelfeld' },
              { text: 'Englisch.',    role: 'satzende' },
            ],
            caption: 'sowohl … als auch: both German and English.',
          },
        ],
      },
    ],
  },
];

export function getFoundationTopic(slug: string): FoundationTopic | undefined {
  return foundationTopics.find((t) => t.slug === slug);
}

const CATEGORY_ORDER = ['Verbs', 'Sentence Structure', 'Building Blocks'];

const TOPIC_ORDER: Record<string, number> = {
  // Verbs
  'tense-stack':    1,
  'verb-tenses':    2,
  'modal-verbs':    3,
  'praesens':       4,
  'past-tenses':    5,
  'future-tenses':  6,
  'konjunktiv':     7,
  'passive':        8,
  // Sentence Structure
  'satzbau':        1,
  'verbklammer':    2,
  'connectors':     3,
  // Building Blocks
  'cases':          1,
};

export function getTopicChildren(parentSlug: string): FoundationTopic[] {
  return foundationTopics
    .filter((t) => t.parent === parentSlug)
    .sort((a, b) => (TOPIC_ORDER[a.slug] ?? 99) - (TOPIC_ORDER[b.slug] ?? 99));
}

export function getFoundationByCategory(): Record<string, FoundationTopic[]> {
  const raw: Record<string, FoundationTopic[]> = {};
  for (const t of foundationTopics) {
    if (t.parent) continue; // children are shown nested under their parent, not as hub cards
    const cat = t.category ?? 'General';
    if (!raw[cat]) raw[cat] = [];
    raw[cat].push(t);
  }
  const out: Record<string, FoundationTopic[]> = {};
  for (const cat of CATEGORY_ORDER) {
    if (raw[cat]) {
      out[cat] = [...raw[cat]].sort(
        (a, b) => (TOPIC_ORDER[a.slug] ?? 99) - (TOPIC_ORDER[b.slug] ?? 99)
      );
    }
  }
  for (const cat of Object.keys(raw)) {
    if (!out[cat]) out[cat] = raw[cat];
  }
  return out;
}
