/**
 * i18n tool shard (markdown-to-html / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_markdown_article:
    'Beide Richtungen auf einer URL, mit klaren Grenzen von Bereinigung und Verlust. Einfügen bleibt im Tab; CDN nur für Bibliotheken.',
  tool_markdown_clear: 'Leeren',
  tool_markdown_copy: 'HTML kopieren',
  tool_markdown_copy_done: 'Kopiert',
  tool_markdown_copy_md: 'Markdown kopieren',
  tool_markdown_description:
    'Aus Markdown sicheres HTML machen, oder aus CMS-/Mail-HTML wieder Markdown holen: Richtung wählen, lokal einfügen. marked/Turndown plus DOMPurify. Beispiel: README als .html, oder Admin-HTML als .md für Git.',
  tool_markdown_dir_label: 'Konvertierungsrichtung',
  tool_markdown_download: 'HTML herunterladen',
  tool_markdown_download_md: 'Markdown herunterladen',
  tool_markdown_example: '`# Titel` + `Hallo **Welt**` → bereinigtes HTML; `<strong>` wird wieder `**fett**`.',
  tool_markdown_example_title: 'Beispiel',
  tool_markdown_export_description:
    'Vollständiges HTML-Dokument aus Markdown mit Vorlage und Metadaten erzeugen. Schritte: rendern, in Vorlage einfügen, Meta hinzufügen, Download. Beispiel: Beitrag als eigenständige .html exportieren.',
  tool_markdown_export_title: 'Markdown-zu-HTML-Export',
  tool_markdown_faq_a1: 'Bei Markdown → HTML ja — DOMPurify vor Vorschau und Download.',
  tool_markdown_faq_a2: 'Meist nein. Ziel ist ein editierbarer Entwurf.',
  tool_markdown_faq_a3: 'Umwandlung lokal. CDN liefert nur Bibliotheksdateien.',
  tool_markdown_faq_a4: 'Nicht zugesichert — bei Bedarf extern diffen.',
  tool_markdown_faq_a5: 'CommonMark-Basis; optional vollständiges HTML zum Offline-Teilen.',
  tool_markdown_faq_q1: 'Wird HTML von Skripten befreit?',
  tool_markdown_faq_q2: 'Bleibt das Layout in Markdown erhalten?',
  tool_markdown_faq_q3: 'Geht der Text an einen Server?',
  tool_markdown_faq_q4: 'Verlustfreier Roundtrip?',
  tool_markdown_faq_q5: 'Welche Syntax und Exporte?',
  tool_markdown_full_doc: 'Vollständiges HTML-Dokument erzeugen',
  tool_markdown_how_body:
    'Tabs steuern die Richtung. Links Eingabe, rechts lokales Ergebnis. HTML: Fragment oder schlankes Gesamtdokument; Markdown: Klartext für Editor/LLM.',
  tool_markdown_how_title: 'Ablauf',
  tool_markdown_html_input_label: 'HTML-Eingabe',
  tool_markdown_html_placeholder: '<h1>Titel</h1>\n<p>Hallo <strong>Welt</strong></p>',
  tool_markdown_input_label: 'Markdown-Eingabe',
  tool_markdown_large_warn: 'Sehr großer Text (>200k Zeichen). Die Umwandlung kann langsam sein — kürzeren Ausschnitt versuchen.',
  tool_markdown_loss_hint:
    'Wenig oder kein Markdown — Skripte, leere Tags oder ununterstütztes Markup wurden ggf. entfernt. Siehe Regeln und FAQ.',
  tool_markdown_md_output_label: 'Markdown-Ausgabe',
  tool_markdown_need_lib: 'Konvertierungsbibliothek konnte nicht geladen werden. Verbindung prüfen und neu laden.',
  tool_markdown_placeholder:
    '# Titel\n\nBasis-Markdown: **fett**, Listen und Codeblöcke.\n\n- Punkt 1\n- Punkt 2\n\n```js\nconsole.log(\'Hallo Markdown\');\n```',
  tool_markdown_preview_label: 'HTML-Vorschau',
  tool_markdown_rules_intro:
    'Was die Umwandlung abdeckt: welche Markdown-Syntax unterstützt wird, wie HTML bereinigt wird und wie Ihr eingefügter Text lokal verarbeitet wird.',
  tool_markdown_rules_item_html_md: 'Nach Markdown: zuerst bereinigen, dann Turndown (ATX, fenced code).',
  tool_markdown_rules_item_loss: 'Styles, Skripte, knifflige Tabellen gehen oft verloren. Roundtrip ≠ Original.',
  tool_markdown_rules_item_md_html: 'Nach HTML: CommonMark parsen, danach DOMPurify vor Anzeige/Export.',
  tool_markdown_rules_privacy: 'Eingefügter Text bleibt clientseitig. CDN-Download ist kein Upload Ihres Dokuments.',
  tool_markdown_rules_title: 'Regeln je Richtung',
  tool_markdown_sample_html: '<h1>Titel</h1>\n<p>Hallo <strong>Welt</strong></p>',
  tool_markdown_sample_md:
    '# Titel\n\nBasis-Markdown: **fett**, Listen und Codeblöcke.\n\n- Punkt 1\n- Punkt 2\n\n```js\nconsole.log(\'Hallo Markdown\');\n```',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_title: 'Markdown zu HTML bereinigen — und zurück zu Markdown',
  tool_markdown_usecase_1: 'HTML fürs CMS erzeugen.',
  tool_markdown_usecase_2: 'Dokumentation aus HTML-Export retten.',
  tool_markdown_usecase_3: 'Rich-Text vor einem Prompt glätten.',
  tool_markdown_usecases_title: 'Typische Einsätze',
};
export default de;
