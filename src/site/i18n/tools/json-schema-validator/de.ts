/**
 * i18n tool shard (json-schema-validator / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_json_schema_validator_article:
    'Prüfen Sie JSON gegen ein draft-07-Schema im Browser. Fehler zeigen JSON-Pointer-Pfade — zum Korrigieren von Modellausgaben oder Feeds, ohne Daten hochzuladen.',
  tool_json_schema_validator_bad_instance: 'Die Instanz ist kein gültiges JSON.',
  tool_json_schema_validator_bad_schema: 'Das Schema ist kein gültiges JSON (oder die Kompilierung scheiterte).',
  tool_json_schema_validator_clear: 'Leeren',
  tool_json_schema_validator_copy_done: 'Kopiert',
  tool_json_schema_validator_copy_errors: 'Fehler kopieren',
  tool_json_schema_validator_desc:
    'JSON gegen Schema prüfen mit JSON-Pointer-Fehlern — lokal draft-07.',
  tool_json_schema_validator_description:
    'Prüfen Sie JSON gegen ein JSON Schema (draft-07) im Browser. Schritte: Schema und Instanz einfügen, prüfen, jeden Fehler per JSON Pointer lesen. Beispiel: ein Produkt ohne price scheitert mit missingProperty. Der Text bleibt im Tab; Ajv lädt nur Bibliothekscode vom CDN.',
  tool_json_schema_validator_draft_note: 'Engine: Ajv 8 · JSON Schema draft-07 (Standard).',
  tool_json_schema_validator_empty: 'Bitte zuerst Schema und Instanz-JSON einfügen.',
  tool_json_schema_validator_example:
    'Das Schema verlangt sku (Zeichenkette) und price (Zahl ≥ 0). Gültig: {"sku":"A-1","price":9.5}. Fehler: {"sku":"A-1"} — missingProperty für price an der Wurzel (/).',
  tool_json_schema_validator_example_title: 'Beispiel',
  tool_json_schema_validator_fail: 'Fehlgeschlagen — siehe Pfade unten',
  tool_json_schema_validator_faq_a1:
    'Häufig: fehlende required-Felder, falsche Typen oder additionalProperties:false. Pointer-Zeile und Keyword-Meldung lesen.',
  tool_json_schema_validator_faq_a2:
    'instancePath ist ein JSON Pointer in die Instanz (leer als /). Fehlt required, ergänzt Ajv missingProperty in params.',
  tool_json_schema_validator_faq_a3:
    'Diese Seite nutzt Ajvs draft-07-Dialekt. 2019-09 / 2020-12 brauchen andere Builds und sind hier nicht wählbar.',
  tool_json_schema_validator_faq_a4:
    'Schema und JSON werden nicht hochgeladen. Das CDN lädt nur Ajv-Code, nicht Ihren Paste.',
  tool_json_schema_validator_faq_a5:
    'Schema und Modell-JSON einfügen, prüfen, jeden Pointer korrigieren bis es passt — sinnvoll vor strukturierter Ausgabe weiter unten in der Pipeline.',
  tool_json_schema_validator_faq_q1: 'Warum ist die Prüfung fehlgeschlagen?',
  tool_json_schema_validator_faq_q2: 'Wie lese ich einen JSON-Pointer-Fehler?',
  tool_json_schema_validator_faq_q3: 'Welchen Draft nutzt diese Seite?',
  tool_json_schema_validator_faq_q4: 'Verlässt mein JSON den Browser?',
  tool_json_schema_validator_faq_q5: 'Wie prüfe ich strukturierte LLM-Ausgabe?',
  tool_json_schema_validator_how_body:
    'Links Schema, rechts Instanz einfügen. Ajv (draft-07) kompiliert, prüft und listet jeden Fehler mit JSON Pointer. Es gibt Fehler- und gültige Beispiele; beim Öffnen läuft das Fehlerbeispiel, damit echte Pfade sofort sichtbar sind.',
  tool_json_schema_validator_how_title: 'So funktioniert’s',
  tool_json_schema_validator_instance_label: 'Instanz-JSON',
  tool_json_schema_validator_instance_placeholder: '{ "sku": "A-1", "price": 9.5 }',
  tool_json_schema_validator_large_warn:
    'Sehr großer Paste (>200k Zeichen zusammen). Kann langsam sein — kürzeren Ausschnitt versuchen.',
  tool_json_schema_validator_need_lib: 'Ajv konnte nicht geladen werden. Verbindung prüfen und neu laden.',
  tool_json_schema_validator_pass: 'Gültig — Instanz entspricht dem Schema',
  tool_json_schema_validator_result_label: 'Ergebnis',
  tool_json_schema_validator_rules_body:
    'Auf dieser Seite: parsen → draft-07-Schema kompilieren → Instanz prüfen → Pointer pro Fehler ausgeben.',
  tool_json_schema_validator_rules_item_1:
    'Parse: beide Felder müssen JSON.parse bestehen. Syntax-/Compile-Fehler sind von Validierungsfehlern getrennt.',
  tool_json_schema_validator_rules_item_2:
    'Validierung: allErrors sammelt alle Fehler. Jede Zeile: instancePath + message (+ missingProperty falls nötig).',
  tool_json_schema_validator_rules_item_3:
    'Draft: Dialekt draft-07. 2020-12-Keywords hier nicht voraussetzen.',
  tool_json_schema_validator_rules_item_4:
    'Privatsphäre: Paste bleibt im Tab. CDN lädt nur Ajv-Code.',
  tool_json_schema_validator_rules_title: 'Erwartete Regeln',
  tool_json_schema_validator_sample_fail: 'Fehlerbeispiel',
  tool_json_schema_validator_sample_instance_fail: '{"sku":"A-1"}',
  tool_json_schema_validator_sample_instance_ok: '{"sku":"A-1","price":9.5}',
  tool_json_schema_validator_sample_ok: 'Gültiges Beispiel',
  tool_json_schema_validator_sample_schema:
    '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["sku","price"],"properties":{"sku":{"type":"string","minLength":1},"price":{"type":"number","minimum":0}},"additionalProperties":false}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'JSON-Schema-Validator — draft-07-Pfade, lokal',
  tool_json_schema_validator_usecase_1:
    'KI / Agenten: prüfen, ob strukturiertes Modell-JSON Felder auslässt, bevor man ihm vertraut.',
  tool_json_schema_validator_usecase_2:
    'Commerce-Feeds: Produkt-JSON gegen Schema prüfen vor dem Import.',
  tool_json_schema_validator_usecase_3:
    'API-Debug: Request-/Response-Body gegen ein Schema-Fragment aus dem Vertrag halten.',
  tool_json_schema_validator_usecases_title: 'Gute Einsatzfälle',
  tool_json_schema_validator_validate: 'Prüfen',
};
export default de;
