/**
 * i18n tool shard (yaml-json / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_yaml_json_article:
    'Bidirektionale YAML ↔ JSON-Umwandlung mit klaren Typregeln, Multi-Doc-Politik und ehrlichen Hinweisen zur lokalen Verarbeitung. Für Config-Austausch gedacht — keine zweite dünne URL.',
  tool_yaml_json_clear: 'Leeren',
  tool_yaml_json_convert: 'Umwandeln',
  tool_yaml_json_copy_done: 'Kopiert',
  tool_yaml_json_copy_json: 'JSON kopieren',
  tool_yaml_json_copy_yaml: 'YAML kopieren',
  tool_yaml_json_description:
    'YAML zu JSON oder JSON zu YAML im Browser umwandeln. Schritte: Richtung wählen, Config einfügen, optional JSON-sichere Typen aktivieren, dann kopieren oder herunterladen. Mehrere mit --- getrennte Dokumente werden zum JSON-Array. Beispiel: eine kurze Service-Map als eingerücktes JSON für einen API-Client — der Paste bleibt lokal.',
  tool_yaml_json_dir_label: 'Umwandlungsrichtung',
  tool_yaml_json_download_json: 'JSON herunterladen',
  tool_yaml_json_download_yaml: 'YAML herunterladen',
  tool_yaml_json_empty: 'Bitte zuerst etwas einfügen.',
  tool_yaml_json_example:
    'YAML `Name: demo` plus Liste `Einträge: [a, b]` wird zu JSON `{"Name":"demo","Einträge":["a","b"]}`. JSON `{"titel":"Hallo","anzahl":2}` dump’t zu eingerücktem YAML. Grenze: nacktes `flag: yes` wird unter DEFAULT zum Boolean true; JSON-sichere Typen behalten den String "yes".',
  tool_yaml_json_example_title: 'Beispiel',
  tool_yaml_json_faq_a1:
    'Nein. Kommentare überleben JSON nicht. Anker expandieren zu wiederholten Werten. JSON zurück nach YAML stellt weder Kommentare noch Ankernamen wieder her.',
  tool_yaml_json_faq_a2:
    'Unter dem DEFAULT-Schema von js-yaml oft ja — nacktes yes/no/on/off kann Boolean werden. „JSON-sichere Typen“ behält diese Scalare als Strings, sofern sie nicht explizit typisiert sind.',
  tool_yaml_json_faq_a3:
    'Die Umwandlung bleibt im Tab. Diese Website kann js-yaml ausliefern; der Request lädt nur Code — kein Upload Ihres YAML- oder JSON-Texts.',
  tool_yaml_json_faq_a4:
    'Dokumente getrennt durch --- werden mit loadAll gelesen. Ein Dokument → ein JSON-Wert; zwei oder mehr → JSON-Array. Spätere Dokumente werden nicht verworfen.',
  tool_yaml_json_faq_a5:
    'Ungültiges YAML liefert bei verfügbarem Parser-Mark Zeile und Spalte. Ungültiges JSON meldet JSON.parse — ohne YAML-Mark-Stil.',
  tool_yaml_json_faq_q1: 'Bleibt der Roundtrip verlustfrei?',
  tool_yaml_json_faq_q2: 'Werden unquoted yes/no zu Boolean?',
  tool_yaml_json_faq_q3: 'Verlässt mein Paste den Browser?',
  tool_yaml_json_faq_q4: 'Wie behandelt ihr Multi-Doc-YAML mit ---?',
  tool_yaml_json_faq_q5: 'Woher kommen Zeilennummern in Fehlern?',
  tool_yaml_json_how_body:
    'Die Umwandlung läuft mit js-yaml lokal in diesem Tab. Richtung wählen, Text einfügen, Ergebnis kopieren oder herunterladen. Mehrere mit --- getrennte Dokumente landen als JSON-Array, sobald es zwei oder mehr sind; ein einzelnes Dokument bleibt ein einzelner JSON-Wert. YAML-Fehler nennen Zeile und Spalte, wenn der Parser ein Mark liefert.',
  tool_yaml_json_how_item_1: 'Wählen Sie YAML → JSON oder JSON → YAML.',
  tool_yaml_json_how_item_2: 'Eingabe links einfügen (mehrere YAML-Dokumente mit --- trennen).',
  tool_yaml_json_how_item_3: 'Optional sichere Typen aktivieren oder JSON-Einzug ändern.',
  tool_yaml_json_how_item_4: 'Auf Umwandeln klicken, dann Ausgabe kopieren oder herunterladen.',
  tool_yaml_json_how_title: 'Ablauf',
  tool_yaml_json_indent_2: '2 Leerzeichen',
  tool_yaml_json_indent_4: '4 Leerzeichen',
  tool_yaml_json_indent_label: 'Einrückung',
  tool_yaml_json_indent_minify: 'JSON minifizieren',
  tool_yaml_json_json_input_label: 'JSON-Eingabe',
  tool_yaml_json_json_output_label: 'JSON-Ausgabe',
  tool_yaml_json_json_placeholder: '{\n  "titel": "Hallo",\n  "anzahl": 2\n}',
  tool_yaml_json_json_safe: 'JSON-sichere Typen (nacktes yes/no als String behalten)',
  tool_yaml_json_large_warn:
    'Sehr großer Paste (>200k Zeichen). Die Umwandlung kann langsam wirken — kürzeren Ausschnitt versuchen.',
  tool_yaml_json_need_lib: 'js-yaml konnte nicht geladen werden. Verbindung prüfen und Seite neu laden.',
  tool_yaml_json_rules_body:
    'Was bei der Umwandlung zu erwarten ist: wie Werte ohne Anführungszeichen typisiert werden, wie Multi-Dokument-YAML auf JSON abgebildet wird und wo ein Hin-und-zurück Kommentare oder Formatierung verlieren kann.',
  tool_yaml_json_rules_item_1:
    'Typen: Mit DEFAULT können nacktes yes/no/on/off und manche datumsähnliche Scalare zu Boolean oder anderen Typen werden. JSON-sicheres Schema lässt unquoted Scalare als Strings, außer sie sind explizit typisiert.',
  tool_yaml_json_rules_item_2:
    'Multi-Doc: loadAll — ein Dokument → dieser JSON-Wert; zwei oder mehr → JSON-Array. Wir behalten nicht still nur das erste Dokument.',
  tool_yaml_json_rules_item_3:
    'Roundtrip-Verluste: Kommentare verschwinden (JSON hat keine); Anker/Aliase expandieren zu doppelten Werten; Schlüsselreihenfolge und Stil können nach dem Dump anders sein.',
  tool_yaml_json_rules_item_4:
    'Privatsphäre: Ihr Paste wird nicht hochgeladen. js-yaml von dieser Website lädt nur Bibliothekscode, nicht Ihren Config-Text.',
  tool_yaml_json_rules_title: 'Feste Verhaltensregeln',
  tool_yaml_json_sample: 'Beispiel laden',
  tool_yaml_json_sample_json: '{\n  "titel": "Hallo",\n  "anzahl": 2\n}',
  tool_yaml_json_sample_yaml: 'Name: demo\naktiv: true\nEinträge:\n  - a\n  - b',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_title: 'YAML zu JSON — Konfigs im Browser umwandeln',
  tool_yaml_json_usecase_1: 'DevOps: Kubernetes-YAML mit mehreren Ressourcen (---) als JSON-Array für Skripte.',
  tool_yaml_json_usecase_2: 'Entwicklung: API-JSON zuerst als lesbares YAML ablegen, dann Config von Hand anpassen.',
  tool_yaml_json_usecase_3: 'Data-/KI-Pipelines: von Hand editierte YAML-Parameter an JSON-only-Werkzeuge anbinden.',
  tool_yaml_json_usecases_title: 'Wofür geeignet',
  tool_yaml_json_yaml_input_label: 'YAML-Eingabe',
  tool_yaml_json_yaml_output_label: 'YAML-Ausgabe',
  tool_yaml_json_yaml_placeholder: 'Name: demo\naktiv: true\nEinträge:\n  - a\n  - b',
};
export default de;
