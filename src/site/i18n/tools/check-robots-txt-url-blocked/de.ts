/**
 * i18n-Shard (check-robots-txt-url-blocked / de).
 * Aufgabe: URL einfügen → Worker holt /robots.txt → melden, ob der Pfad blockiert ist.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'URL in robots.txt prüfen',
	tool_check_robots_txt_url_blocked_home_desc:
		'Seiten-URL einfügen und prüfen, ob robots.txt den Pfad für Googlebot oder andere Bots sperrt.',
	tool_check_robots_txt_url_blocked_desc:
		'Seiten-URL einfügen und prüfen, ob robots.txt den Pfad für Googlebot oder andere Bots sperrt.',
	tool_check_robots_txt_url_blocked_title: 'Prüfen, ob eine URL von robots.txt blockiert wird',
	tool_check_robots_txt_url_blocked_description:
		'URL einfügen und online prüfen, ob robots.txt den Pfad für Googlebot, *, Bingbot oder GPTBot sperrt. Edge-Abruf inkl. Trefferregel. Beispiel: /admin.',
	tool_check_robots_txt_url_blocked_url_label: 'Seiten-URL',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'User-Agent',
	tool_check_robots_txt_url_blocked_check: 'Prüfen',
	tool_check_robots_txt_url_blocked_sample: 'Beispiel',
	tool_check_robots_txt_url_blocked_clear: 'Leeren',
	tool_check_robots_txt_url_blocked_running: 'robots.txt wird geladen…',
	tool_check_robots_txt_url_blocked_url_error: 'Geben Sie eine gültige http(s)-URL mit dem gewünschten Pfad ein.',
	tool_check_robots_txt_url_blocked_error_prefix: 'Fehler: ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'robots.txt konnte nicht geladen werden. Host offline oder Bot-Abweisung möglich.',
	tool_check_robots_txt_url_blocked_privacy_note:
		'URL und Hostname gehen an unseren Worker, damit /robots.txt abgerufen werden kann. Keine Speicherung als Produkt-Datenbank.',
	tool_check_robots_txt_url_blocked_result_allowed_yes: 'Erlaubt',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'Blockiert',
	tool_check_robots_txt_url_blocked_result_matched: 'Getroffene Regel',
	tool_check_robots_txt_url_blocked_result_matched_none: 'Kein Allow/Disallow (gilt als erlaubt)',
	tool_check_robots_txt_url_blocked_result_http_status: 'HTTP-Status von robots.txt',
	tool_check_robots_txt_url_blocked_result_path: 'Ausgewerteter Pfad',
	tool_check_robots_txt_url_blocked_result_ua: 'Verwendeter User-Agent',
	tool_check_robots_txt_url_blocked_result_robots_url: 'robots.txt-URL',
	tool_check_robots_txt_url_blocked_result_group: 'User-Agent-Gruppe',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'Kein robots.txt-Inhalt (fehlt oder HTML-Fehlerseite). Wird als alles erlauben behandelt.',
	tool_check_robots_txt_url_blocked_result_preview: 'robots.txt-Vorschau',
	tool_check_robots_txt_url_blocked_how_title: 'So funktioniert’s',
	tool_check_robots_txt_url_blocked_how_body:
		'Zeigt, ob robots.txt den Pfad für den gewählten Crawler erlaubt oder sperrt. Es wird nur /robots.txt geholt, nicht der Seiteninhalt.',
	tool_check_robots_txt_url_blocked_how_item_1: 'Vollständige Seiten-URL einfügen (Pfad zählt, nicht nur die Domain).',
	tool_check_robots_txt_url_blocked_how_item_2: 'User-Agent wählen (Standard Googlebot; auch *, Bingbot oder GPTBot).',
	tool_check_robots_txt_url_blocked_how_item_3: 'Auf Prüfen klicken und warten, bis der Worker /robots.txt holt.',
	tool_check_robots_txt_url_blocked_how_item_4: 'Erlaubt/Blockiert, Trefferzeile und HTTP-Status lesen.',
	tool_check_robots_txt_url_blocked_how_item_5: 'Bei Bedarf die Vorschau prüfen, welche Gruppe gilt.',
	tool_check_robots_txt_url_blocked_formula_title: 'Matching-Regeln',
	tool_check_robots_txt_url_blocked_formula_body:
		'Übliche Praxis gemäß Google-Doku und RFC 9309: längstes Präfix; bei gleicher Länge gewinnt Allow vor Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_1: 'Passende User-Agent-Gruppe wählen; sonst Fallback auf *.',
	tool_check_robots_txt_url_blocked_formula_item_2: 'Unter passenden Allow/Disallow siegt das längste Präfix.',
	tool_check_robots_txt_url_blocked_formula_item_3: 'Gleiche Länge: Allow hat Vorrang vor Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_4: 'Fehlendes robots.txt oder leere Gruppen = alles erlaubt; HTTP-Status wird trotzdem gezeigt.',
	tool_check_robots_txt_url_blocked_formula_item_5: 'Nur /robots.txt wird angefragt; private Hosts abgelehnt. Kein Ersatz für den offiziellen Search-Console-Tester.',
	tool_check_robots_txt_url_blocked_example_title: 'Beispiel',
	tool_check_robots_txt_url_blocked_example:
		'Beispiel https://www.bing.com/search mit Googlebot. Der Worker holt https://www.bing.com/robots.txt, wertet /search aus und meldet Erlaubt oder Blockiert inkl. Trefferzeile.',
	tool_check_robots_txt_url_blocked_usecases_title: 'Wann hilfreich',
	tool_check_robots_txt_url_blocked_usecase_1:
		'Vor dem Launch: prüfen, ob /admin oder /staging gesperrt ist und öffentliche Seiten crawlbar bleiben.',
	tool_check_robots_txt_url_blocked_usecase_2:
		'robots.txt-Tester/Validator: nach einem Disallow prüfen, ob die Ziel-URL wirklich trifft.',
	tool_check_robots_txt_url_blocked_usecase_3:
		'KI-Crawler-Regeln: UA auf GPTBot (oder *) stellen und sensible Pfade prüfen, ohne die Datei zu erzeugen.',
	tool_check_robots_txt_url_blocked_faq_q1: 'Erzeugt dieses Tool eine robots.txt?',
	tool_check_robots_txt_url_blocked_faq_a1:
		'Nein. Es prüft nur die Sperre. Zum Schreiben von Regeln den robots.txt-Generator nutzen.',
	tool_check_robots_txt_url_blocked_faq_q2: 'Warum Googlebot und * getrennt testen?',
	tool_check_robots_txt_url_blocked_faq_a2:
		'Googlebot nutzt bei Bedarf die eigene Gruppe; viele andere Bots fallen auf * zurück. Getrennt testen verhindert falsche Annahmen.',
	tool_check_robots_txt_url_blocked_faq_q3: 'Was, wenn robots.txt fehlt oder 404 liefert?',
	tool_check_robots_txt_url_blocked_faq_a3:
		'Übliche Crawler-Praxis behandelt das als alles erlaubt. Das Tool zeigt den HTTP-Status, damit 404/Redirect sichtbar bleibt.',
	tool_check_robots_txt_url_blocked_faq_q4: 'Kann ich KI-Crawler wie GPTBot testen?',
	tool_check_robots_txt_url_blocked_faq_a4:
		'Ja — GPTBot in der Liste wählen. Matching folgt RFC 9309 als Edge-Bewertung, kein offizielles Crawler-Urteil.',
	tool_check_robots_txt_url_blocked_faq_q5: 'Wird meine URL gespeichert?',
	tool_check_robots_txt_url_blocked_faq_a5:
		'URL/Hostname müssen den Worker erreichen, damit /robots.txt geholt wird. Keine Speicherung als Produkt-DB. Edge-Tool, nicht „ohne Upload“.',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt; RFC 9309 Robots Exclusion Protocol.',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default de;
