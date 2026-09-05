/**
 * i18n tool shard (hreflang-generator / de).
 * Deutsch — eigenständige, suchorientierte Neuformulierung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_hreflang_home_title: 'Hreflang-Generator',
	tool_hreflang_home_desc:
		'Sag Google, welche Sprachversion einer Seite wem angezeigt werden soll — verwandle Sprach-URLs in Hreflang-Tags, HTTP-Link-Header und Sitemap-Markup, direkt im Browser.',
	tool_hreflang_title: 'Hreflang-Generator — Sprach-Tags für mehrsprachige Websites erstellen',
	tool_hreflang_description:
		'Ohne hreflang kann Google Übersetzungen als Duplikate werten. Sprach-URLs in link-Tags, HTTP-Link oder Sitemap—lokal. Beispiel: en, es und ja.',
	tool_hreflang_input_label: 'Liste der Sprach-URLs',
	tool_hreflang_input_ph:
		'Ein Paar pro Zeile: Sprachcode + URL. Beispiel:\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'Jede Zeile ist „Sprachcode URL“ oder „URL Sprachcode“. Die Codes nutzen die BCP-47-Form wie en, en-US oder zh-Hans.',
	tool_hreflang_xdefault_label: 'x-default-Fallback-URL',
	tool_hreflang_xdefault_none: '— ohne x-default —',
	tool_hreflang_xdefault_hint:
		'Optional. x-default sagt Google, welche Version angezeigt wird, wenn keine Sprache passt – nützlich für eine Root- oder englische Startseite.',
	tool_hreflang_generate: 'Erstellen',
	tool_hreflang_sample: 'Beispiel laden',
	tool_hreflang_clear: 'Leeren',
	tool_hreflang_copy: 'Kopieren',
	tool_hreflang_copied: 'Kopiert',
	tool_hreflang_error_prefix: 'Fehler: ',
	tool_hreflang_url_protocol: 'Eine URL hatte kein Protokoll – https:// wurde automatisch ergänzt.',
	tool_hreflang_lang_invalid: 'Ungültiger Sprachcode: {lang}. Nutze die BCP-47-Form wie en, en-US oder zh-Hans.',
	tool_hreflang_no_valid_rows: 'Keine gültigen Zeilen. Füge mindestens einen Sprachcode und eine URL hinzu.',
	tool_hreflang_output_label: 'Erzeugtes Markup',
	tool_hreflang_tab_link: '<link>-Tags',
	tool_hreflang_tab_http: 'HTTP-Link-Header',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: 'So funktioniert es',
	tool_hreflang_how_body:
		'Der Generator zerlegt jede Zeile in einen Sprachcode und eine URL und gibt dieselbe Relationenmenge in drei Formen aus. Die <link>-Form kommt in den <head> jeder Seite. Die HTTP-Link-Header-Form wird in der Serverantwort gesendet. Die Sitemap-Form bettet <xhtml:link> in jeden <url>-Block ein. Jede URL erhält einen Self-Referencing-Hreflang, damit jede Sprachversion auf sich selbst zeigt; der optionale x-default-Eintrag deckt Besucher ab, deren Sprache nicht gelistet ist.',
	tool_hreflang_rules_title: 'Regeln des Generators',
	tool_hreflang_rules_body: 'Diese Regeln stammen aus Google Search Central und dem BCP-47-Standard für Sprach-Tags.',
	tool_hreflang_rules_item_1:
		'Jede Sprachversion muss einen Self-Referencing-Hreflang enthalten, der auf ihre eigene URL zeigt. Das Weglassen schwächt das Signal.',
	tool_hreflang_rules_item_2:
		'Jede URL muss aus allen Sprachversionen aufgelistet sein: Die vollständige Menge der Alternativen steht auf jeder Seite, nicht nur in eine Richtung.',
	tool_hreflang_rules_item_3:
		'Sprachcodes nutzen BCP 47: eine zweibuchstabige Sprache, optional eine Region (en-US) und optional eine Schrift (zh-Hans). x-default ist der spezielle Fallback-Code.',
	tool_hreflang_rules_item_4:
		'x-default zeigt auf die Seite, die erscheint, wenn keine gelistete Sprache passt, etwa eine englische Root-Seite. Google kann sie als Fallback für alle nicht erkannten Sprachen nutzen.',
	tool_hreflang_rules_item_5:
		'Google behandelt die drei Formen als gleichwertig und lässt auch alle drei gleichzeitig zu, sagt aber, dass das in der Suche nichts bringt. Wähle pro Seitenmenge eine: Drei Implementierungen laufen mit der Zeit auseinander, und widersprüchliche Annotationen werden ignoriert.',
	tool_hreflang_example_title: 'Beispiel',
	tool_hreflang_example:
		'Das Beispiel listet drei Versionen einer Seite: https://example.com/ (en), https://example.com/es/ (es) und https://example.com/ja/ (ja). Die erzeugten <link>-Tags enthalten Self-References für jede Sprache plus ein optionales x-default auf die englische Root-Seite.',
	tool_hreflang_usecases_title: 'Geeignete Einsätze',
	tool_hreflang_usecase_1:
		'Start einer mehrsprachigen Website: Erzeuge die <link>-Tags einmal pro Vorlage und prüfe, dass jede Sprachversion die volle Menge listet.',
	tool_hreflang_usecase_2:
		'Nach einer Website-Umstrukturierung Markup neu erzeugen, damit das URL-Mapping zwischen den Sprachen konsistent bleibt statt zu driften.',
	tool_hreflang_usecase_3:
		'Wenn Suchergebnisse die falsche Sprache zeigen, prüfe, ob Self-References und x-default existieren und ob die URLs auf kanonische Seiten zeigen.',
	tool_hreflang_faq_q1: 'Welche der drei Formen sollte ich nutzen?',
	tool_hreflang_faq_a1:
		'Nutze die <link>-Tags, wenn du das HTML bearbeiten kannst. Nutze den HTTP-Link-Header, wenn die Seiten von einem eigenen Server ausgeliefert werden und HTML schwer zu ändern ist. Nutze die Sitemap-Form, wenn du es lieber in der XML-Sitemap hältst.',
	tool_hreflang_faq_q2: 'Wann sollte ich x-default hinzufügen?',
	tool_hreflang_faq_a2:
		'x-default sagt Google, welche Version angezeigt wird, wenn die Besuchersprache keinem gelisteten Code entspricht. Ergänze es, wenn du eine Root- oder Fallback-Seite hast, meist englisch.',
	tool_hreflang_faq_q3: 'Braucht jede URL einen Self-Referencing-Hreflang?',
	tool_hreflang_faq_a3:
		'Ja. Jede Sprachversion muss ihre eigene URL in die Menge aufnehmen, mit einem Self-Referencing-Hreflang auf sich selbst. Google nutzt die vollständige Menge, um die richtige Seite pro Sprache zu wählen.',
	tool_hreflang_faq_q4: 'Welches Sprachcode-Format ist gültig?',
	tool_hreflang_faq_a4:
		'BCP-47-Codes: eine zwei- oder dreibuchstabige Sprache, optional eine Region (en-US) und optional eine Schrift (zh-Hans). Die Sprache in Kleinschreibung, und keine Codes wie „en-us-en“ erfinden.',
	tool_hreflang_faq_q5: 'Gehört Hreflang in <head> oder in die Sitemap?',
	tool_hreflang_faq_a5:
		'Beides funktioniert, aber nutze pro Seitenmenge eine konsistente Form. Die <link>-Tags stehen im <head>, der HTTP-Link-Header wird mit der Antwort gesendet und die Sitemap nutzt xhtml:link-Blöcke.',
	tool_hreflang_faq_q6: 'Werden meine URLs irgendwohin gesendet?',
	tool_hreflang_faq_a6: 'Nein. Der Generator läuft komplett in deinem Browser und nichts wird hochgeladen.',
	tool_hreflang_references: 'Google Search Central – Lokalisierte Versionen (hreflang); BCP-47-Sprach-Tags.',
	tool_hreflang_ref_searchcentral_label: 'Search Central – Lokalisierte Versionen (hreflang)',
	tool_hreflang_ref_bcp47_label: 'BCP 47 – Tags zur Identifizierung von Sprachen',
};

export default de;
