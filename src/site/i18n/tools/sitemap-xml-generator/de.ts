/**
 * i18n tool shard (sitemap-xml-generator / de).
 * German independent rewrite — keeps sitemap.xml/lastmod/changefreq/priority as technical terms.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_sitemap_home_title: 'XML-Sitemap-Generator',
	tool_sitemap_home_desc:
		'Hilf Google, jede Seite, die du ranken willst, schneller zu entdecken und zu indexieren — erstelle aus einer URL-Liste eine gültige sitemap.xml mit lastmod, changefreq und priority, direkt im Browser.',
	tool_sitemap_title: 'XML-Sitemap-Generator — sitemap.xml aus URLs erstellen',
	tool_sitemap_description:
		'Eine Sitemap hilft Google, Seiten schneller zu finden und zu indexieren. https-URLs einfügen, gültiges sitemap.xml prüfen, Root kopieren. Beispiel: 3 URLs.',
	tool_sitemap_generate: 'Generieren',
	tool_sitemap_sample: 'Beispiel',
	tool_sitemap_clear: 'Leeren',
	tool_sitemap_copy: 'Kopieren',
	tool_sitemap_copied: 'Kopiert',
	tool_sitemap_download: 'Herunterladen',
	tool_sitemap_urls_label: 'URLs (eine pro Zeile)',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'Jede Zeile: URL, oder URL | lastmod (yyyy-MM-dd), oder URL | lastmod | changefreq | priority. Beispiel: https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'Nicht-http-URL übersprungen: {url}',
	tool_sitemap_warn_bad_lastmod: 'Ungültiges lastmod (yyyy-MM-dd oder W3C-Datum/Uhrzeit verwenden): {url}',
	tool_sitemap_warn_too_many: 'Mehr als 50.000 URLs – aufteilen und per Sitemap-Index verknüpfen.',
	tool_sitemap_how_title: 'So funktioniert es',
	tool_sitemap_how_body:
		'Fügen Sie Ihre URL-Liste ein, eine pro Zeile. Hinter einem senkrechten Strich lassen sich lastmod (yyyy-MM-dd), changefreq und priority ergänzen. Die Seite parst jede Zeile, maskiert reservierte Zeichen, prüft, dass die URL mit http(s) beginnt, und baut ein urlset nach Protokoll. Kopieren Sie das XML ins Site-Verzeichnis und referenzieren Sie es in robots.txt oder senden Sie es in der Search Console.',
	tool_sitemap_rules_title: 'Protokollregeln und Grenzen',
	tool_sitemap_rules_body: 'Diese Regeln des Sitemap-Protokolls und von Google befolgt der Generator.',
	tool_sitemap_rules_item_1: 'Pflicht: jedes <url> muss ein <loc> mit der vollständigen URL enthalten. lastmod, changefreq und priority sind optional.',
	tool_sitemap_rules_item_2: 'lastmod-Format: ein W3C-Datum (yyyy-MM-dd) oder ein Datum/Uhrzeit wie 2026-08-01T12:00:00+00:00. Andere Formate werden ignoriert oder abgelehnt.',
	tool_sitemap_rules_item_3: 'changefreq ist ein Hinweis, kein Signal. Google ignoriert es – das Ausfüllen ändert also nichts an der Crawl-Frequenz.',
	tool_sitemap_rules_item_4: 'Grenzen: eine Sitemap umfasst maximal 50.000 URLs und 50 MB nach Komprimierung. Darüber aufteilen und einen Sitemap-Index verwenden.',
	tool_sitemap_example_title: 'Beispiel',
	tool_sitemap_example:
		'Beispiel-Eingabe: https://example.com/ und https://example.com/products mit lastmod 2026-08-01 sowie https://example.com/about – die Ausgabe ist ein urlset mit drei url-Elementen, das mittlere trägt lastmod.',
	tool_sitemap_usecases_title: 'Gut geeignet für',
	tool_sitemap_usecase_1: 'Neue Websites: erste sitemap.xml aus der URL-Liste erzeugen und in der Search Console senden.',
	tool_sitemap_usecase_2: 'Aktualisierte Inhalte: lastmod für kürzlich geänderte Seiten ergänzen, damit Crawler das Aktualitätssignal aufnehmen.',
	tool_sitemap_usecase_3: 'Auffindbarkeit: robots.txt auf die Sitemap-URL zeigen lassen, damit Crawler sie ohne Sendung finden.',
	tool_sitemap_faq_q1: 'Wie viele URLs passen in eine Sitemap?',
	tool_sitemap_faq_a1: '50.000 URLs oder 50 MB (unkomprimiert). Der Generator warnt, wenn die Liste 50.000 übersteigt, damit Sie aufteilen und einen Sitemap-Index nutzen.',
	tool_sitemap_faq_q2: 'Welches lastmod-Format ist nötig?',
	tool_sitemap_faq_a2: 'Ein W3C-Datum (yyyy-MM-dd) oder ein vollständiges Datum/Uhrzeit wie 2026-08-01T12:00:00+00:00. Zeilen mit falschem lastmod werden markiert, damit Sie sie vor dem Speichern korrigieren.',
	tool_sitemap_faq_q3: 'Beeinflusst changefreq das Crawling?',
	tool_sitemap_faq_a3: 'Nein. Google ignoriert changefreq; es ist nur ein Hinweis für andere Konsumenten. priority wird ebenfalls ignoriert. Die Metadaten, die es wert sind, genau zu sein, sind lastmod.',
	tool_sitemap_faq_q4: 'Was ist der Unterschied zu IndexNow?',
	tool_sitemap_faq_a4: 'IndexNow meldet teilnehmenden Suchmaschinen eine URL-Änderung sofort; eine Sitemap ist eine dauerhafte Liste, die Crawler regelmäßig abrufen. Beides verwenden: IndexNow für die sofortige Benachrichtigung, Sitemap für die laufende Auffindbarkeit.',
	tool_sitemap_references: 'sitemaps.org – Sitemap-Protokoll; Google Search Central – Sitemap erstellen und senden.',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org – Protokoll',
	tool_sitemap_ref_google_label: 'Search Central – Sitemap erstellen und senden',
};

export default de;
