/**
 * i18n tool shard (csv-json / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_csv_json_article:
    'Bidirektionales CSV ↔ JSON mit klaren Regeln zu Typen, Trennzeichen und Anführungszeichen sowie dazu, wie verschachteltes JSON zu Spalten wird. Für den Austausch Tabelle ↔ API gedacht, nicht für eine weitere leere URL.',
  tool_csv_json_clear: 'Leeren',
  tool_csv_json_convert: 'Umwandeln',
  tool_csv_json_copy_csv: 'CSV kopieren',
  tool_csv_json_copy_done: 'Kopiert',
  tool_csv_json_copy_json: 'JSON kopieren',
  tool_csv_json_csv_input_label: 'CSV-Eingabe',
  tool_csv_json_csv_output_label: 'CSV-Ausgabe',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: 'Automatisch erkennen',
  tool_csv_json_delimiter_comma: 'Komma ,',
  tool_csv_json_delimiter_label: 'Trennzeichen',
  tool_csv_json_delimiter_semicolon: 'Semikolon ;',
  tool_csv_json_delimiter_tab: 'Tab',
  tool_csv_json_description:
    'Wandeln Sie CSV in JSON oder JSON in CSV im Browser um. Schritte: Richtung wählen, einfügen oder hochladen, Trennzeichen und Kopfzeile setzen, dann kopieren oder herunterladen. Behandelt Felder in Anführungszeichen mit Kommas, Semikolons und Tabs; von JSON zu CSV werden verschachtelte Objekte zu Spalten abgeflacht. Beispiel: eine Produkttabelle (sku, Titel, Preis) wird zu einem JSON-Array — die Daten bleiben lokal.',
  tool_csv_json_dir_label: 'Konvertierungsrichtung',
  tool_csv_json_download_csv: 'CSV herunterladen',
  tool_csv_json_download_json: 'JSON herunterladen',
  tool_csv_json_empty: 'Bitte zuerst Inhalt einfügen.',
  tool_csv_json_example:
    'Aus CSV `sku,title,price` mit Zeile `A-001,"Chair, oak",129.9` wird JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (ohne Typen bleibt price Text; aktiviert ergibt es die Zahl 129.9). Umgekehrt: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` erzeugt die Kopfzeile `sku,dim.w,dim.h` mit Zeile `A-001,40,90`.',
  tool_csv_json_example_title: 'Beispiel',
  tool_csv_json_faq_a1:
    'Ja. Wählen Sie Komma, Semikolon oder Tab, oder lassen Sie die automatische Erkennung — Papa Parse rät aus dem Text. Semikolons sind in europäischen Excel-Exporten üblich; Tab bedeutet TSV.',
  tool_csv_json_faq_a2:
    'Standardmäßig bleibt jede Zelle Text, daher bleiben 007 und lange IDs erhalten. Mit „Typen erkennen“ werden zahlenartige Werte zu Zahlen: 007 wird zu 7 und sehr lange Ziffernfolgen können an Genauigkeit verlieren. Für SKU, Postleitzahlen und Telefonnummern aus lassen.',
  tool_csv_json_faq_a3:
    'Sie werden in doppelte Anführungszeichen gesetzt und innere Anführungszeichen verdoppelt, gemäß RFC 4180. So bleibt ein Titel wie Chair, oak in einem Feld und wird nicht in zwei Spalten geteilt.',
  tool_csv_json_faq_a4:
    'Objekte werden zu Spalten mit Punktpfaden abgeflacht (dim.w, dim.h). Arrays werden als JSON-String in einer einzelnen Zelle geschrieben. Die Spalten sind die Vereinigung aller Schlüssel; fehlende Werte bleiben leer.',
  tool_csv_json_faq_a5:
    'Nein. Das Parsen bleibt in diesem Tab und gewählte Dateien werden lokal gelesen. Ein CDN kann Papa Parse ausliefern; diese Anfrage lädt nur Code, kein Upload Ihres CSV oder JSON.',
  tool_csv_json_faq_q1: 'Werden Semikolon oder Tab unterstützt, nicht nur Komma?',
  tool_csv_json_faq_q2: 'Bleiben Zahlen, führende Nullen und IDs erhalten?',
  tool_csv_json_faq_q3: 'Wie werden Felder mit Kommas, Anführungszeichen oder Zeilenumbrüchen behandelt?',
  tool_csv_json_faq_q4: 'Wie wird verschachteltes JSON zu CSV-Spalten?',
  tool_csv_json_faq_q5: 'Verlassen meine Daten den Browser?',
  tool_csv_json_header: 'Erste Zeile ist Kopfzeile',
  tool_csv_json_how_body:
    'Wählen Sie CSV → JSON oder JSON → CSV; Parsen und Erzeugen laufen hier mit Papa Parse. Bei CSV wählen Sie Trennzeichen (oder automatisch), ob die erste Zeile eine Kopfzeile ist und ob Zahlen/Booleans erkannt werden. Bei JSON werden verschachtelte Objekte über Punktpfade zu Spalten, und die Spalten sind die Vereinigung aller Schlüssel.',
  tool_csv_json_how_item_1: 'Wählen Sie CSV → JSON oder JSON → CSV.',
  tool_csv_json_how_item_2: 'Eingabe einfügen und Trennzeichen / Kopfzeile für CSV setzen.',
  tool_csv_json_how_item_3: 'Auf Umwandeln klicken (verschachteltes JSON wird beim CSV-Export in Spalten geflatet).',
  tool_csv_json_how_item_4: 'Ergebnis kopieren oder herunterladen.',
  tool_csv_json_how_title: 'So funktioniert es',
  tool_csv_json_indent_2: '2 Leerzeichen',
  tool_csv_json_indent_4: '4 Leerzeichen',
  tool_csv_json_indent_label: 'Einrückung',
  tool_csv_json_indent_minify: 'JSON minimieren',
  tool_csv_json_json_input_label: 'JSON-Eingabe',
  tool_csv_json_json_output_label: 'JSON-Ausgabe',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_large_warn:
    'Sehr große Eingabe (über 2 Mio. Zeichen). Die Umwandlung kann langsam sein; probieren Sie eine kleinere Datei.',
  tool_csv_json_need_lib: 'Papa Parse konnte nicht geladen werden. Verbindung prüfen und neu laden.',
  tool_csv_json_rules_body:
    'Was bei der Umwandlung zu erwarten ist: wie Zelltypen behandelt werden, welche Trennzeichen und Anführungsregeln gelten und wie verschachteltes JSON auf Spalten abgebildet wird.',
  tool_csv_json_rules_item_1:
    'Typen: CSV-Zellen sind standardmäßig Text. „Typen erkennen“ liefert Zahlen/Booleans, aber 007 wird zu 7 und lange Ziffernfolgen können an Genauigkeit verlieren; für SKU, Postleitzahlen und Telefonnummern besser aus lassen.',
  tool_csv_json_rules_item_2:
    'Trennzeichen: Komma, Semikolon (in europäischem Excel üblich) und Tab (TSV); die automatische Erkennung rät aus dem Text. Felder mit Trennzeichen, Anführungszeichen oder Zeilenumbrüchen werden gemäß RFC 4180 in doppelte Anführungszeichen gesetzt.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: Objekte werden über Punktpfade abgeflacht (dim.w, dim.h); Arrays werden als JSON-String in einer Zelle geschrieben; Spalten sind die Vereinigung aller Schlüssel, Fehlendes bleibt leer.',
  tool_csv_json_rules_item_4:
    'Datenschutz: Ihr Text und Ihre Dateien werden nicht hochgeladen. Das Laden von Papa Parse über ein CDN lädt nur Bibliothekscode, nicht Ihre Daten.',
  tool_csv_json_rules_title: 'Regeln, mit denen Sie rechnen sollten',
  tool_csv_json_sample: 'Beispiel laden',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'CSV ↔ JSON Konverter — Typen, Trennzeichen, lokal',
  tool_csv_json_typing: 'Typen erkennen (Zahlen/Booleans)',
  tool_csv_json_usecase_1:
    'E-Commerce: eine exportierte Produkttabelle (sku, Titel, Preis) in ein JSON-Array für die API eines Shops oder Marktplatzes umwandeln.',
  tool_csv_json_usecase_2: 'Entwickler: eine JSON-Antwort in CSV für Tabellen, Abgleich oder Übergabe umformen.',
  tool_csv_json_usecase_3:
    'Daten/Betrieb: ein Report- oder Event-CSV (Komma, Semikolon oder TSV) für eine Pipeline nach JSON bringen — Kommas und Zeilenumbrüche sicher maskiert.',
  tool_csv_json_usecases_title: 'Passt gut für',
};
export default de;
