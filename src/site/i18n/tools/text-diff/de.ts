/**
 * i18n tool shard (text-diff / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_text_diff_article:
    'Kostenloser Textvergleich im Browser. Zeilenmodus für Configs und Code, Wortmodus für Texte und Prompts, Zeichenmodus für Tippfehler. Alles lokal — Ihr Text wird nicht hochgeladen.',
  tool_text_diff_clear: 'Leeren',
  tool_text_diff_compare: 'Vergleichen',
  tool_text_diff_description:
    'Zwei Texte online vergleichen und sehen, was sich geändert hat. Ablauf: Original und Überarbeitung einfügen, nach Zeile, Wort oder Zeichen vergleichen, optional Leerzeichen ignorieren oder Windows-Zeilenumbrüche (CRLF→LF) angleichen, dann Ergänzungen und Löschungen im Browser markieren. Beispiel: „Hallo Welt“ zu „Hallo Freund“ — im Wortmodus erscheint eine Ersetzung.',
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
  tool_text_diff_faq_a4: 'Nein. Nur Klartext.',
  tool_text_diff_faq_q1: 'Zeilen- oder Wortvergleich?',
  tool_text_diff_faq_q2: 'Wird mein Text auf einen Server geschickt?',
  tool_text_diff_faq_q3: 'Warum wird die ganze Zeile rot, obwohl nur der Umbruch anders ist?',
  tool_text_diff_faq_q4: 'Kann ich Bilder oder Binärdateien vergleichen?',
  tool_text_diff_how_body:
    'Zwei Versionen einfügen, Feinheit wählen (Zeile, Wort oder Zeichen), dann grüne Zusätze und rote Löschungen prüfen. Ihr eingefügter Text wird von uns nicht hochgeladen oder gespeichert. Die Seite kann die Open-Source-Bibliothek jsdiff per CDN laden, damit der Vergleich im Browser läuft.',
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
    'Das Tool sucht eine kurze Liste von Änderungen von Text A zu B (klassisches Diff / Myers-Ansatz mit jsdiff). Zeilenmodus: Configs und Code. Wortmodus: Sätze und Prompts. Zeichenmodus: kleine Tippfehler, aber unruhiger. Leerzeichen ignorieren blendet reine Einrückung aus. CRLF und LF gleich behandeln verhindert, dass ganze Zeilen rot werden, obwohl nur der Zeilenumbruch anders ist.',
  tool_text_diff_rules_intro:
    'Das Tool sucht eine kurze Liste von Änderungen von Text A zu B (klassisches Diff / Myers-Ansatz mit jsdiff). Wählen Sie den Modus passend zur Aufgabe:',
  tool_text_diff_rules_item_chars: 'Zeichen — ideal für kleine Tippfehler; am genauesten, aber bei längeren Edits unruhig.',
  tool_text_diff_rules_item_lines:
    'Zeile — ideal für .env, YAML und Code; eine geänderte Zeile wird ganz markiert. Schnell zu scannen, aber eine einzelne Wortänderung färbt trotzdem die ganze Zeile.',
  tool_text_diff_rules_item_words:
    'Wort — ideal für Sätze, Mails und Prompts; markiert einzelne Wörter. Klarer bei Fließtext; Satzzeichen können die Zerlegung beeinflussen.',
  tool_text_diff_rules_options:
    'Leerzeichen ignorieren blendet reine Einrückung aus. CRLF und LF gleich behandeln verhindert, dass ganze Zeilen rot werden, obwohl nur der Zeilenumbruch (Windows vs Unix) anders ist.',
  tool_text_diff_rules_title: 'Wie der Vergleich rechnet',
  tool_text_diff_sample_a: 'Hallo Welt\nZeile zwei\nZeile drei',
  tool_text_diff_sample_b: 'Hallo Freund\nZeile zwei\nZeile drei',
  tool_text_diff_summary: '{added} hinzugefügt, {removed} entfernt',
  tool_text_diff_swap: 'Seiten tauschen',
  tool_text_diff_usecase_1: 'Config prüfen: zwei .env- oder YAML-Ausschnitte zeilenweise vergleichen.',
  tool_text_diff_usecase_2: 'Prompt überarbeiten: im Wortmodus sehen, welche Formulierungen dazukamen oder weggefallen sind.',
  tool_text_diff_usecase_3: 'Texte oder Übersetzungen lektorieren: prüfen, ob nur die geplanten Sätze geändert wurden.',
  tool_text_diff_usecases_title: 'Typische Situationen',
};
export default de;
