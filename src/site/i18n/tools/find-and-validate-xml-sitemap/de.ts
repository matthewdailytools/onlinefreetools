/**
 * i18n-Shard (find-and-validate-xml-sitemap / de).
 * Szene: Site-URL → Sitemap finden → XML-Struktur und loc-Samples prüfen (kein Generator).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'XML-Sitemap finden & prüfen',
	tool_find_and_validate_xml_sitemap_home_desc:
		'Finden Sie die Sitemap über robots.txt oder /sitemap.xml und prüfen Sie Struktur, Typ und loc-Samples.',
	tool_find_and_validate_xml_sitemap_desc:
		'Finden Sie die Sitemap über robots.txt oder /sitemap.xml und prüfen Sie Struktur, Typ und loc-Samples.',
	tool_find_and_validate_xml_sitemap_title: 'XML-Sitemap finden und prüfen',
	tool_find_and_validate_xml_sitemap_description:
		'Geben Sie die Site-URL ein, um die XML-Sitemap über Sitemap:-Zeilen in robots.txt oder /sitemap.xml zu finden; Struktur prüfen, locs zählen und urlset vs. sitemapindex kennzeichnen. Kein Generator. Beispiel: sitemaps.org.',
	tool_find_and_validate_xml_sitemap_url_label: 'Site-URL',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: 'Finden & prüfen',
	tool_find_and_validate_xml_sitemap_sample: 'Beispiel',
	tool_find_and_validate_xml_sitemap_clear: 'Leeren',
	tool_find_and_validate_xml_sitemap_running: 'Sitemaps werden gesucht und geprüft…',
	tool_find_and_validate_xml_sitemap_url_error: 'Geben Sie eine gültige http(s)-Site-URL ein (Origin oder Startseite).',
	tool_find_and_validate_xml_sitemap_error_prefix: 'Fehler: ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'Sitemap-Kandidaten konnten nicht geladen werden. Host offline oder Bots blockiert.',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'URL und Hostname gehen an unseren Worker, um robots.txt und Sitemaps abzurufen. Keine Speicherung als Produktdatenbank.',
	tool_find_and_validate_xml_sitemap_result_site: 'Site-Origin',
	tool_find_and_validate_xml_sitemap_result_candidates: 'Getestete Kandidaten',
	tool_find_and_validate_xml_sitemap_result_primary: 'Hauptergebnis',
	tool_find_and_validate_xml_sitemap_result_none_primary: 'Keine gültige Sitemap-Struktur unter den Kandidaten',
	tool_find_and_validate_xml_sitemap_col_url: 'URL',
	tool_find_and_validate_xml_sitemap_col_status: 'HTTP-Status',
	tool_find_and_validate_xml_sitemap_col_kind: 'Art',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'loc-Anzahl',
	tool_find_and_validate_xml_sitemap_col_valid: 'Struktur gültig',
	tool_find_and_validate_xml_sitemap_col_samples: 'loc-Samples',
	tool_find_and_validate_xml_sitemap_valid_yes: 'Ja',
	tool_find_and_validate_xml_sitemap_valid_no: 'Nein',
	tool_find_and_validate_xml_sitemap_empty_findings: 'Keine Treffer für diese Site.',
	tool_find_and_validate_xml_sitemap_how_title: 'So funktioniert’s',
	tool_find_and_validate_xml_sitemap_how_body:
		'Eine Aufgabe: die XML-Sitemap der Site finden und prüfen, ob sie wie ein gültiges urlset oder sitemapindex aussieht — ohne neue Datei zu erzeugen.',
	tool_find_and_validate_xml_sitemap_how_item_1: 'Geben Sie Origin oder Startseiten-URL ein.',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'Klicken Sie auf Finden & prüfen; der Worker liest Sitemap: in robots.txt und testet /sitemap.xml sowie gängige Index-Pfade.',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'Prüfen Sie in der Tabelle Root-Typ, URL-Anzahl und <loc>-Samples.',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'Beheben Sie XML- oder Discovery-Probleme vor IndexNow oder Search Console.',
	tool_find_and_validate_xml_sitemap_formula_title: 'Discovery- und Prüfregeln',
	tool_find_and_validate_xml_sitemap_formula_body:
		'Nach dem sitemaps.org-Protokoll: wohlgeformtes XML mit Root urlset oder sitemapindex und zählbaren <loc>-Einträgen.',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'Reihenfolge: Sitemap:-Direktiven in robots.txt, dann /sitemap.xml, /sitemap_index.xml, /sitemap-index.xml.',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'Struktur gültig, wenn die Antwort nach Sitemap-XML aussieht und HTTP OK ist.',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'sitemapindex listet Kind-Sitemaps; urlset listet Seiten-locs — beides wird gemeldet.',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'Wir zählen <loc> und zeigen bis zu 10 Samples; wir crawlen nicht jede gelistete URL.',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'Gzip, riesige Bodies, Redirects und Nicht-XML können scheitern. Private Hosts werden abgelehnt.',
	tool_find_and_validate_xml_sitemap_example_title: 'Beispiel',
	tool_find_and_validate_xml_sitemap_example:
		'Beispieleingabe https://www.sitemaps.org/. Der Worker prüft Sitemap: und übliche Pfade und meldet HTTP-Status, Art, loc-Anzahl, Samples und validStructure.',
	tool_find_and_validate_xml_sitemap_usecases_title: 'Wann das hilft',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'Sitemap-Finder: nach CMS- oder CDN-Umzug prüfen, wo die Karte veröffentlicht ist.',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'XML-Sitemap-Checker / Validator: vor Search Console prüfen, ob die Datei wohlgeformt ist und Index oder urlset.',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'Schneller loc-Check: nach Neuaufbau einer großen Sitemap Samples ansehen, ohne die ganze Datei zu laden.',
	tool_find_and_validate_xml_sitemap_faq_q1: 'Ist das ein Sitemap-Generator?',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'Nein — nur Finden und Prüfen. Zum Erzeugen aus einer URL-Liste den XML-Sitemap-Generator nutzen.',
	tool_find_and_validate_xml_sitemap_faq_q2: 'Wo sucht ihr die Sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'Zuerst Sitemap:-Zeilen in robots.txt, dann /sitemap.xml und gängige Index-Pfade auf demselben Host.',
	tool_find_and_validate_xml_sitemap_faq_q3: 'Unterschied zwischen sitemapindex und urlset?',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex listet Kind-Sitemaps; urlset listet Seiten-locs. Beides sind gültige Protokoll-Roots; die Tabelle zeigt den Typ.',
	tool_find_and_validate_xml_sitemap_faq_q4: 'Crawlt ihr jede URL in der Sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'Nein. Wir zählen <loc>, zeigen ein Sample und prüfen die Struktur — nicht den Live-Status jeder Seite.',
	tool_find_and_validate_xml_sitemap_faq_q5: 'Wird meine URL hochgeladen oder gespeichert?',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'URL/Hostname müssen den Worker erreichen, damit die Dateien geholt werden. Checks werden nicht als Produktdatenbank gespeichert. Edge-Tool, kein „ohne Upload“.',
	tool_find_and_validate_xml_sitemap_references:
		'sitemaps.org-Protokoll; Google Search Central — Sitemaps-Übersicht.',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — Protokoll',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — Sitemaps-Übersicht',
};

export default de;
