import type { SiteLangDict } from './types';
const de: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Startseite',
  nav_devlogs: 'Entwicklungsprotokolle',
  nav_tools: 'Werkzeuge',
  footer_text: 'Online Free Tools · Lernprojekt · Iteriert fortlaufend',
  tool_headers_title: 'Website-Antwort-Header abrufen',
  tool_headers_description:
    "HTTP-Response-Header einer URL serverseitig abrufen (HEAD, Fallback GET). Ablauf: HEAD senden, Redirects folgen, Header sammeln, private Hosts blockieren. Beispiel: CORS, Cache-Control, HSTS prüfen, um Redirects und CDN-Einstellungen zu debuggen.",
  tool_headers_article:
    'Was: Rufen Sie die HTTP-Antworthandler einer Website ab und untersuchen Sie sie. Nützlich zum Debuggen von CORS, Caching, Umleitungen und Überprüfen von Sicherheits- oder CDN-Headern. Szenarien: Entwickler-Debugging, SEO-Prüfungen und Überprüfung der Serverkonfiguration.',
  url_label: 'URL',
  url_placeholder: 'z.B. https://beispiel.de',
  fetch_button: 'Header abrufen',
  result_title: 'Ergebnis',
  status_label: 'Status',
  final_url_label: 'Endgültige URL',
  headers_label: 'Header',
  error_prefix: 'Fehler: ',
  note_title: 'Hinweise',
  note_1: 'Einige Websites unterstützen kein HEAD; wir greifen auf GET zurück.',
  note_2: 'Aus Sicherheitsgründen werden Anfragen an localhost/private Netzwerke blockiert.',
  tool_markdown_title: 'Markdown zu HTML bereinigen — und zurück zu Markdown',
  tool_markdown_description:
    'Aus Markdown sicheres HTML machen, oder aus CMS-/Mail-HTML wieder Markdown holen: Richtung wählen, lokal einfügen. marked/Turndown plus DOMPurify. Beispiel: README als .html, oder Admin-HTML als .md für Git.',
  tool_markdown_article:
    'Beide Richtungen auf einer URL, mit klaren Grenzen von Bereinigung und Verlust. Einfügen bleibt im Tab; CDN nur für Bibliotheken.',
  tool_markdown_dir_label: 'Konvertierungsrichtung',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'HTML kopieren',
  tool_markdown_copy_md: 'Markdown kopieren',
  tool_markdown_copy_done: 'Kopiert',
  tool_markdown_download: 'HTML herunterladen',
  tool_markdown_download_md: 'Markdown herunterladen',
  tool_markdown_clear: 'Leeren',
  tool_markdown_full_doc: 'Vollständiges HTML-Dokument erzeugen',
  tool_markdown_input_label: 'Markdown-Eingabe',
  tool_markdown_preview_label: 'HTML-Vorschau',
  tool_markdown_html_input_label: 'HTML-Eingabe',
  tool_markdown_md_output_label: 'Markdown-Ausgabe',
  tool_markdown_placeholder:
    "# Titel\n\nBasis-Markdown: **fett**, Listen und Codeblöcke.\n\n- Punkt 1\n- Punkt 2\n\n```js\nconsole.log('Hallo Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>Titel</h1>\n<p>Hallo <strong>Welt</strong></p>',
  tool_markdown_sample_md:
    "# Titel\n\nBasis-Markdown: **fett**, Listen und Codeblöcke.\n\n- Punkt 1\n- Punkt 2\n\n```js\nconsole.log('Hallo Markdown');\n```",
  tool_markdown_sample_html: '<h1>Titel</h1>\n<p>Hallo <strong>Welt</strong></p>',
  tool_markdown_export_title: 'Markdown-zu-HTML-Export',
  tool_markdown_export_description:
    'Vollständiges HTML-Dokument aus Markdown mit Vorlage und Metadaten erzeugen. Schritte: rendern, in Vorlage einfügen, Meta hinzufügen, Download. Beispiel: Beitrag als eigenständige .html exportieren.',
  tool_markdown_large_warn:
    'Sehr großer Text (>200k Zeichen). Die Umwandlung kann langsam sein — kürzeren Ausschnitt versuchen.',
  tool_markdown_need_lib: 'Konvertierungsbibliothek konnte nicht geladen werden. Verbindung prüfen und neu laden.',
  tool_markdown_loss_hint:
    'Wenig oder kein Markdown — Skripte, leere Tags oder ununterstütztes Markup wurden ggf. entfernt. Siehe Regeln und FAQ.',
  tool_markdown_how_title: 'Ablauf',
  tool_markdown_how_body:
    'Tabs steuern die Richtung. Links Eingabe, rechts lokales Ergebnis. HTML: Fragment oder schlankes Gesamtdokument; Markdown: Klartext für Editor/LLM.',
  tool_markdown_rules_title: 'Regeln je Richtung',
  tool_markdown_rules_intro:
    'Keine zweite dünne Seite nur für den Suchbegriff „html zu markdown“.',
  tool_markdown_rules_item_md_html:
    'Nach HTML: CommonMark parsen, danach DOMPurify vor Anzeige/Export.',
  tool_markdown_rules_item_html_md:
    'Nach Markdown: zuerst bereinigen, dann Turndown (ATX, fenced code).',
  tool_markdown_rules_item_loss:
    'Styles, Skripte, knifflige Tabellen gehen oft verloren. Roundtrip ≠ Original.',
  tool_markdown_rules_privacy:
    'Eingefügter Text bleibt clientseitig. CDN-Download ist kein Upload Ihres Dokuments.',
  tool_markdown_example_title: 'Beispiel',
  tool_markdown_example:
    '`# Titel` + `Hallo **Welt**` → bereinigtes HTML; `<strong>` wird wieder `**fett**`.',
  tool_markdown_usecases_title: 'Typische Einsätze',
  tool_markdown_usecase_1:
    'HTML fürs CMS erzeugen.',
  tool_markdown_usecase_2:
    'Dokumentation aus HTML-Export retten.',
  tool_markdown_usecase_3:
    'Rich-Text vor einem Prompt glätten.',
  tool_markdown_faq_q1: 'Wird HTML von Skripten befreit?',
  tool_markdown_faq_a1:
    'Bei Markdown → HTML ja — DOMPurify vor Vorschau und Download.',
  tool_markdown_faq_q2: 'Bleibt das Layout in Markdown erhalten?',
  tool_markdown_faq_a2:
    'Meist nein. Ziel ist ein editierbarer Entwurf.',
  tool_markdown_faq_q3: 'Geht der Text an einen Server?',
  tool_markdown_faq_a3:
    'Umwandlung lokal. CDN liefert nur Bibliotheksdateien.',
  tool_markdown_faq_q4: 'Verlustfreier Roundtrip?',
  tool_markdown_faq_a4:
    'Nicht zugesichert — bei Bedarf extern diffen.',
  tool_markdown_faq_q5: 'Welche Syntax und Exporte?',
  tool_markdown_faq_a5:
    'CommonMark-Basis; optional vollständiges HTML zum Offline-Teilen.',
  tool_text_diff_description:
    'Zwei Texte online vergleichen und sehen, was sich geändert hat. Ablauf: Original und Überarbeitung einfügen, nach Zeile, Wort oder Zeichen vergleichen, optional Leerzeichen ignorieren oder Windows-Zeilenumbrüche (CRLF→LF) angleichen, dann Ergänzungen und Löschungen im Browser markieren. Beispiel: „Hallo Welt“ zu „Hallo Freund“ — im Wortmodus erscheint eine Ersetzung.',
  tool_text_diff_article:
    'Kostenloser Textvergleich im Browser. Zeilenmodus für Configs und Code, Wortmodus für Texte und Prompts, Zeichenmodus für Tippfehler. Alles lokal — Ihr Text wird nicht hochgeladen.',
  tool_text_diff_example:
    'Beispiel (Wortmodus): A = "Hallo Welt", B = "Hallo Freund" → eine Änderung (Welt → Freund). Ändert sich nur die mittlere von drei Zeilen, markiert der Zeilenmodus genau diese Zeile.',
  tool_text_diff_sample_a: 'Hallo Welt\nZeile zwei\nZeile drei',
  tool_text_diff_sample_b: 'Hallo Freund\nZeile zwei\nZeile drei',
  tool_text_diff_label_a: 'Originaltext',
  tool_text_diff_label_b: 'Überarbeiteter Text',
  tool_text_diff_placeholder_a: 'Originaltext einfügen…',
  tool_text_diff_placeholder_b: 'Überarbeiteten Text einfügen…',
  tool_text_diff_mode_label: 'Vergleichen nach',
  tool_text_diff_mode_lines: 'Zeile',
  tool_text_diff_mode_words: 'Wort',
  tool_text_diff_mode_chars: 'Zeichen',
  tool_text_diff_ignore_ws: 'Leerzeichen ignorieren',
  tool_text_diff_normalize_eol: 'CRLF und LF gleich behandeln',
  tool_text_diff_compare: 'Vergleichen',
  tool_text_diff_swap: 'Seiten tauschen',
  tool_text_diff_clear: 'Leeren',
  tool_text_diff_result_label: 'Unterschiede',
  tool_text_diff_legend: 'Grün = hinzugefügt · Rot = entfernt',
  tool_text_diff_summary: '{added} hinzugefügt, {removed} entfernt',
  tool_text_diff_no_diff: 'Keine Unterschiede — beide Texte sind gleich.',
  tool_text_diff_empty_hint: 'Text auf einer oder beiden Seiten einfügen und vergleichen.',
  tool_text_diff_large_warn: 'Sehr großer Text (>100k Zeichen). Kann langsam werden — kürzeren Ausschnitt versuchen.',
  tool_text_diff_need_lib: 'Vergleich konnte nicht geladen werden. Verbindung prüfen und neu laden.',
  tool_text_diff_how_title: 'So funktioniert’s',
  tool_text_diff_how_body:
    'Zwei Versionen einfügen, Feinheit wählen (Zeile, Wort oder Zeichen), dann grüne Zusätze und rote Löschungen prüfen. Ihr eingefügter Text wird von uns nicht hochgeladen oder gespeichert. Die Seite kann die Open-Source-Bibliothek jsdiff per CDN laden, damit der Vergleich im Browser läuft.',
  tool_text_diff_rules_title: 'Wie der Vergleich rechnet',
  tool_text_diff_rules_body:
    'Das Tool sucht eine kurze Liste von Änderungen von Text A zu B (klassisches Diff / Myers-Ansatz mit jsdiff). Zeilenmodus: Configs und Code. Wortmodus: Sätze und Prompts. Zeichenmodus: kleine Tippfehler, aber unruhiger. Leerzeichen ignorieren blendet reine Einrückung aus. CRLF und LF gleich behandeln verhindert, dass ganze Zeilen rot werden, obwohl nur der Zeilenumbruch anders ist.',
  tool_text_diff_rules_intro:
    'Das Tool sucht eine kurze Liste von Änderungen von Text A zu B (klassisches Diff / Myers-Ansatz mit jsdiff). Wählen Sie den Modus passend zur Aufgabe:',
  tool_text_diff_rules_item_lines:
    'Zeile — ideal für .env, YAML und Code; eine geänderte Zeile wird ganz markiert. Schnell zu scannen, aber eine einzelne Wortänderung färbt trotzdem die ganze Zeile.',
  tool_text_diff_rules_item_words:
    'Wort — ideal für Sätze, Mails und Prompts; markiert einzelne Wörter. Klarer bei Fließtext; Satzzeichen können die Zerlegung beeinflussen.',
  tool_text_diff_rules_item_chars:
    'Zeichen — ideal für kleine Tippfehler; am genauesten, aber bei längeren Edits unruhig.',
  tool_text_diff_rules_options:
    'Leerzeichen ignorieren blendet reine Einrückung aus. CRLF und LF gleich behandeln verhindert, dass ganze Zeilen rot werden, obwohl nur der Zeilenumbruch (Windows vs Unix) anders ist.',
  tool_text_diff_example_title: 'Beispiel',
  tool_text_diff_usecases_title: 'Typische Situationen',
  tool_text_diff_usecase_1: 'Config prüfen: zwei .env- oder YAML-Ausschnitte zeilenweise vergleichen.',
  tool_text_diff_usecase_2: 'Prompt überarbeiten: im Wortmodus sehen, welche Formulierungen dazukamen oder weggefallen sind.',
  tool_text_diff_usecase_3: 'Texte oder Übersetzungen lektorieren: prüfen, ob nur die geplanten Sätze geändert wurden.',
  tool_text_diff_faq_q1: 'Zeilen- oder Wortvergleich?',
  tool_text_diff_faq_a1: 'Zeilen für Code und Configs. Wörter für Sätze, Mails und Prompts — dann werden einzelne Wörter markiert, nicht ganze Zeilen.',
  tool_text_diff_faq_q2: 'Wird mein Text auf einen Server geschickt?',
  tool_text_diff_faq_a2:
    'Ihr eingefügter Text wird von uns nicht hochgeladen oder gespeichert — der Vergleich läuft im Browser. Die Seite kann jsdiff (Open Source) per CDN laden; Ihr Text geht dabei nicht an unsere Server.',
  tool_text_diff_faq_q3: 'Warum wird die ganze Zeile rot, obwohl nur der Umbruch anders ist?',
  tool_text_diff_faq_a3: 'Windows nutzt oft CRLF, macOS/Linux LF. „CRLF und LF gleich behandeln“ einschalten, dann erneut vergleichen.',
  tool_text_diff_faq_q4: 'Kann ich Bilder oder Binärdateien vergleichen?',
  tool_text_diff_faq_a4: 'Nein. Nur Klartext.',

};
export default de;