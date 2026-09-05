/**
 * i18n tool shard (uuid-generator / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_uuid_generator_article:
    'Erzeuge UUID v4 oder ULID lokal mit kryptographisch starkem Zufall. Batch-Kopie für Testdaten, Trace-IDs oder Schema-Stubs — nichts wird hochgeladen.',
  tool_uuid_generator_clear: 'Leeren',
  tool_uuid_generator_copy_all: 'Alles kopieren',
  tool_uuid_generator_copy_done: 'Kopiert',
  tool_uuid_generator_count_label: 'Anzahl (1–100)',
  tool_uuid_generator_desc: 'UUID v4 und ULID lokal erzeugen — bis 100 Stück, Kopie mit einem Klick.',
  tool_uuid_generator_description:
    'Erzeuge UUID-v4- oder ULID-Strings im Browser. Schritte: Typ wählen, Anzahl (1–100) setzen, Generieren klicken, alles kopieren. Beispiel: drei RFC-UUID v4 wie `550e8400-e29b-41d4-a716-446655440000`. Nutzt crypto.getRandomValues — IDs bleiben auf dem Gerät.',
  tool_uuid_generator_example:
    'UUID v4 (Kleinbuchstaben, mit Bindestrichen): `550e8400-e29b-41d4-a716-446655440000`. ULID (26 Zeichen Crockford Base32, zeitsortierbares Präfix): `01ARZ3NDEKTSV4RRFFQ69G5FAV`. Beispiel laden füllt drei feste v4 zum Formatcheck.',
  tool_uuid_generator_example_title: 'Beispiel',
  tool_uuid_generator_faq_a1:
    'UUID v4 = 128 Zufallsbits (Versions-Nibble fix), gut für opaque IDs. ULID fügt ms-Timestamp-Präfix hinzu und sortiert lexikografisch nach Erstellung — praktisch für Logs und DBs mit zeitlichen Keys ohne sequenzielle Integer.',
  tool_uuid_generator_faq_a2:
    'Keine globale Eindeutigkeitsgarantie. IDs nutzen crypto.getRandomValues (oder randomUUID). Praktisch unvorhersehbar, aber Ihre App sollte Kollisionen behandeln, wenn nötig.',
  tool_uuid_generator_faq_a3:
    'Batch auf 100 pro Klick begrenzt für flüssige Seite. Erneut Generieren für weitere Batches.',
  tool_uuid_generator_faq_a4:
    'Kein Upload, keine serverseitige Erzeugung. Alles im Browser-Tab.',
  tool_uuid_generator_faq_a5:
    'UUID v4: 36 Zeichen mit Bindestrichen, Hex Kleinbuchstaben. ULID: 26 Zeichen Crockford Base32 groß, ohne Bindestriche.',
  tool_uuid_generator_faq_q1: 'UUID v4 vs ULID — wann welches?',
  tool_uuid_generator_faq_q2: 'Sind die IDs kryptographisch sicher?',
  tool_uuid_generator_faq_q3: 'Warum ist der Batch auf 100 begrenzt?',
  tool_uuid_generator_faq_q4: 'Verlassen IDs den Browser?',
  tool_uuid_generator_faq_q5: 'Welches Ausgabeformat?',
  tool_uuid_generator_generate: 'Generieren',
  tool_uuid_generator_how_body:
    'Wählen Sie UUID v4 für Standard-Zufalls-UUIDs oder ULID für 26-Zeichen-IDs mit Zeitsortierung. Anzahl (1–100) setzen und Generieren. Alles kopieren = eine ID pro Zeile. Zufallsbytes vom Browser-CSPRNG.',
  tool_uuid_generator_how_item_1: 'Wählen Sie UUID v4 oder ULID.',
  tool_uuid_generator_how_item_2: 'Legen Sie die Anzahl fest (1–100).',
  tool_uuid_generator_how_item_3: 'Klicken Sie auf Generieren (oder Beispiel laden für feste Demo-IDs).',
  tool_uuid_generator_how_item_4: 'Alles kopieren — ein ID pro Zeile in die Zwischenablage.',
  tool_uuid_generator_how_title: 'So funktioniert es',
  tool_uuid_generator_output_label: 'Erzeugte IDs',
  tool_uuid_generator_rules_body:
    'Formatunterschiede und praktische Grenzen beim Einfügen in Code oder Datenbank.',
  tool_uuid_generator_rules_item_1:
    'UUID v4 folgt RFC 4122: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` mit Variant-Bits; Hex Kleinbuchstaben.',
  tool_uuid_generator_rules_item_2:
    'ULID packt 48-Bit-Unix-ms-Timestamp + 80 Zufallsbits in 26 Crockford-Base32-Zeichen (ohne I/L/O/U).',
  tool_uuid_generator_rules_item_3:
    'Dieses Tool garantiert keine Eindeutigkeit über Maschinen/Zeit — behandeln Sie Output als starke Zufallsstichproben, nicht als verteilter ID-Dienst.',
  tool_uuid_generator_rules_item_4:
    'Datenschutz: kein Netzwerk für Erzeugung; IDs verlassen das Gerät nur, wenn Sie sie kopieren.',
  tool_uuid_generator_rules_title: 'Erwartete Regeln',
  tool_uuid_generator_sample: 'Beispiel laden',
  tool_uuid_generator_title: 'UUID- & ULID-Generator — IDs im Browser erstellen',
  tool_uuid_generator_type_label: 'ID-Typ',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'Dev-Datenbank mit opaque Primary Keys vor Fixture-Import befüllen.',
  tool_uuid_generator_usecase_2: 'Batch Trace- oder Correlation-IDs für Integrationstests erstellen.',
  tool_uuid_generator_usecase_3: 'APIs prototypen, die sortierbare ULID-Identifikatoren im Request-Body akzeptieren.',
  tool_uuid_generator_usecases_title: 'Gute Einsatzfälle',
};
export default de;
