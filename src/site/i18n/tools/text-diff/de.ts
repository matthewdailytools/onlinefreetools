/**
 * i18n tool shard (text-diff / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_text_diff_article:
    'Kostenloser Textvergleich im Browser. Zeilenmodus für Configs und Code, Wortmodus für Texte und Prompts, Zeichenmodus für Tippfehler. Alles lokal — Ihr Text wird nicht hochgeladen.',
  tool_text_diff_clear: 'Leeren',
  tool_text_diff_compare: 'Vergleichen',
  tool_text_diff_desc:
    'Unterschied zwischen zwei Texten prüfen: beide Seiten einfügen — Zeile, Wort oder Zeichen, im Browser.',
  tool_text_diff_description:
    'Unterschied zwischen zwei Texten im Browser prüfen. Ablauf: Original und Überarbeitung einfügen, nach Zeile, Wort oder Zeichen vergleichen, im Zeilen- oder Wortmodus optional Leerzeichen ignorieren oder CRLF und LF angleichen, dann Ergänzungen und Löschungen markieren. Dateien bleiben auf dem Gerät und werden nicht hochgeladen. Beispiel: „Hallo Welt“ zu „Hallo Freund“ — im Wortmodus eine Ersetzung. Eingabe ist eingefügter Klartext, nicht eine Word-, Excel- oder strukturierte JSON-Datei.',
  tool_text_diff_empty_hint: 'Text auf einer oder beiden Seiten einfügen und vergleichen.',
  tool_text_diff_example:
    'Beispiel (Wortmodus): A = "Hallo Welt", B = "Hallo Freund" → eine Änderung (Welt → Freund). Ändert sich nur die mittlere von drei Zeilen, markiert der Zeilenmodus genau diese Zeile.',
  tool_text_diff_example_title: 'Beispiel',
  tool_text_diff_faq_a1:
    'Zeilen für Code und Configs. Wörter für Sätze, Mails und Prompts — dann werden einzelne Wörter markiert, nicht ganze Zeilen.',
  tool_text_diff_faq_a2:
    'Ihr eingefügter Text wird von uns nicht hochgeladen oder gespeichert — der Vergleich läuft im Browser. Die Seite kann jsdiff (Open Source) per CDN laden; Ihr Text geht dabei nicht an unsere Server.',
  tool_text_diff_faq_a3:
    'Windows nutzt oft CRLF, macOS/Linux LF. „CRLF und LF gleich behandeln“ einschalten, dann erneut vergleichen.',
  tool_text_diff_faq_a4:
    'Nein. Nur eingefügter Klartext — keine Bilder, ZIP, Word, Excel oder strukturiertes JSON. Für .txt, .docx oder Tabellen die jeweilige Vergleichsseite nutzen.',
  tool_text_diff_faq_a5:
    "Nein. Der Zeichenmodus vergleicht jedes Zeichen und deaktiviert die Option. Verwenden Sie Zeilen oder Wörter, wenn reine Leerzeichenänderungen entfallen sollen.",
  tool_text_diff_faq_q1: 'Zeilen- oder Wortvergleich?',
  tool_text_diff_faq_q2: 'Wird mein Text auf einen Server geschickt?',
  tool_text_diff_faq_q3: 'Warum wird die ganze Zeile rot, obwohl nur der Umbruch anders ist?',
  tool_text_diff_faq_q4: 'Kann ich Bilder, Word oder Binärdateien vergleichen?',
  tool_text_diff_faq_q5: "Funktioniert Leerzeichen ignorieren im Zeichenmodus?",
  tool_text_diff_how_body:
    "Fügen Sie links den Ausgangstext und rechts die überarbeitete Fassung ein, wählen Sie Zeilen, Wörter oder Zeichen und prüfen Sie grüne Ergänzungen sowie rote Löschungen. Der Text bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.",
  tool_text_diff_load_sample: "Beispiel laden",
  tool_text_diff_how_item_1: "Fügen Sie den Ausgangstext links ein.",
  tool_text_diff_how_item_2: "Fügen Sie die überarbeitete Fassung rechts ein.",
  tool_text_diff_how_item_3: "Wählen Sie Zeilen, Wörter oder Zeichen und stellen Sie verfügbare Leerzeichen- und Zeilenumbruchoptionen ein.",
  tool_text_diff_how_item_4: "Klicken Sie auf Vergleichen und prüfen Sie die markierten Ergänzungen und Löschungen.",
  tool_text_diff_how_title: 'So funktioniert’s',
  tool_text_diff_ignore_ws: 'Leerzeichen ignorieren',
  tool_text_diff_label_a: 'Originaltext',
  tool_text_diff_label_b: 'Überarbeiteter Text',
  tool_text_diff_large_warn: 'Sehr großer Text (>100k Zeichen). Kann langsam werden — kürzeren Ausschnitt versuchen.',
  tool_text_diff_legend: 'Grün = hinzugefügt · Rot = entfernt',
  tool_text_diff_mode_chars: 'Zeichen',
  tool_text_diff_mode_label: 'Vergleichen nach',
  tool_text_diff_mode_lines: 'Zeile',
  tool_text_diff_mode_words: 'Wort',
  tool_text_diff_need_lib: 'Vergleich konnte nicht geladen werden. Verbindung prüfen und neu laden.',
  tool_text_diff_no_diff: 'Keine Unterschiede — beide Texte sind gleich.',
  tool_text_diff_normalize_eol: 'CRLF und LF gleich behandeln',
  tool_text_diff_placeholder_a: 'Originaltext einfügen…',
  tool_text_diff_placeholder_b: 'Überarbeiteten Text einfügen…',
  tool_text_diff_result_label: 'Unterschiede',
  tool_text_diff_rules_body:
    "Der gewählte Modus bestimmt die Änderungseinheit. Im Zeichenmodus ist Leerzeichen ignorieren deaktiviert, weil die Option nur für Zeilen und Wörter gilt.",
  tool_text_diff_rules_intro:
    'Das Tool sucht eine kurze Liste von Änderungen von Text A zu B (klassisches Diff / Myers-Ansatz mit jsdiff). Wählen Sie den Modus passend zur Aufgabe:',
  tool_text_diff_rules_item_3: 'Zeichen — ideal für kleine Tippfehler; am genauesten, aber bei längeren Edits unruhig.',
  tool_text_diff_rules_item_1:
    'Zeile — ideal für .env, YAML und Code; eine geänderte Zeile wird ganz markiert. Schnell zu scannen, aber eine einzelne Wortänderung färbt trotzdem die ganze Zeile.',
  tool_text_diff_rules_item_2:
    'Wort — ideal für Sätze, Mails und Prompts; markiert einzelne Wörter. Klarer bei Fließtext; Satzzeichen können die Zerlegung beeinflussen.',
  tool_text_diff_rules_item_4:
    "Leerzeichen ignorieren gilt nur für Zeilen und Wörter. CRLF und LF gleich behandeln vereinheitlicht Windows- und Unix-Zeilenumbrüche in allen Modi.",
  tool_text_diff_rules_title: 'Wie der Vergleich rechnet',
  tool_text_diff_sample_a: 'Hallo Welt\nZeile zwei\nZeile drei',
  tool_text_diff_sample_b: 'Hallo Freund\nZeile zwei\nZeile drei',
  tool_text_diff_summary: '{added} hinzugefügt, {removed} entfernt',
  tool_text_diff_swap: 'Seiten tauschen',
  tool_text_diff_usecase_1: 'Config prüfen: zwei .env- oder YAML-Ausschnitte zeilenweise vergleichen.',
  tool_text_diff_usecase_2: 'Prompt überarbeiten: im Wortmodus sehen, welche Formulierungen dazukamen oder weggefallen sind.',
  tool_text_diff_usecase_3: 'Texte oder Übersetzungen lektorieren: prüfen, ob nur die geplanten Sätze geändert wurden.',
  tool_text_diff_usecases_title: 'Typische Situationen',
  tool_text_diff_title: 'Unterschied zwischen zwei Texten prüfen',
};
export default de;
