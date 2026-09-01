/**
 * i18n tool shard (curl-to-fetch / de).
 * H1: curl zu fetch — cURL-Befehl lokal in JavaScript fetch umwandeln.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Texte. */
const de: SiteLangDict = {
	tool_curl_to_fetch_article:
		'cURL aus Doku oder Terminal einfügen und ein fetch-Snippet in JavaScript erhalten — Methode, Header, JSON-Body, Basic-Auth und -G. Parsing im Browser, ohne Server-Upload.',
	tool_curl_to_fetch_clear: 'Leeren',
	tool_curl_to_fetch_convert: 'Konvertieren',
	tool_curl_to_fetch_copy: 'Kopieren',
	tool_curl_to_fetch_copy_done: 'Kopiert',
	tool_curl_to_fetch_copy_empty: 'Nichts zu kopieren — zuerst cURL konvertieren.',
	tool_curl_to_fetch_desc:
		'cURL zu fetch im Browser — bleibt auf dem Gerät, ohne Server-Upload.',
	tool_curl_to_fetch_description:
		'cURL einfügen, fetch in JavaScript erhalten — Methode, Header, JSON, Basic auth (-u) und -G. POST-JSON-Beispiel lädt beim ersten Aufruf. Der Befehl bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
	tool_curl_to_fetch_error_empty: 'Bitte zuerst einen cURL-Befehl einfügen.',
	tool_curl_to_fetch_error_no_url: 'Keine URL gefunden. https://… oder --url hinzufügen.',
	tool_curl_to_fetch_error_parse: 'cURL konnte nicht geparst werden. Anführungszeichen und Zeilenfortsetzung prüfen.',
	tool_curl_to_fetch_error_unclosed_quote: 'Anführungszeichen nicht geschlossen — korrigieren und erneut versuchen.',
	tool_curl_to_fetch_example: 'Eingabe: curl -X POST … → Ausgabe: fetch mit method, headers, body.',
	tool_curl_to_fetch_example_title: 'Beispiel',
	tool_curl_to_fetch_faq_a1: 'Nein. Parsing nur in diesem Tab; wir senden cURL nicht an unsere Server.',
	tool_curl_to_fetch_faq_a2: 'URL, -X, -H, -d, -u, -G, quoted strings und \\ am Zeilenende. Exotische Flags werden mit Warnung übersprungen.',
	tool_curl_to_fetch_faq_a3: '-G verschiebt --data in die URL-Query statt in den Body.',
	tool_curl_to_fetch_faq_a4: '-u user:pass → Authorization Basic als Base64.',
	tool_curl_to_fetch_faq_a5: 'Diese Seite erzeugt Browser-fetch. axios oder Python — manuell anpassen.',
	tool_curl_to_fetch_faq_q1: 'Wird mein cURL hochgeladen?',
	tool_curl_to_fetch_faq_q2: 'Welche curl-Flags werden unterstützt?',
	tool_curl_to_fetch_faq_q3: 'Was macht -G hier?',
	tool_curl_to_fetch_faq_q4: 'Wie wird -u behandelt?',
	tool_curl_to_fetch_faq_q5: 'axios oder Python möglich?',
	tool_curl_to_fetch_how_body: 'cURL aus Docs kopieren — gängige Flags lokal parsen und fetch anzeigen.',
	tool_curl_to_fetch_how_item_1: 'Kompletten cURL einfügen (\\ für Zeilenumbruch ok).',
	tool_curl_to_fetch_how_item_2: 'fetch oder async/await wählen, dann Konvertieren.',
	tool_curl_to_fetch_how_item_3: 'Generierte method, headers, body prüfen.',
	tool_curl_to_fetch_how_item_4: 'Ins Projekt kopieren — nach Änderungen erneut konvertieren.',
	tool_curl_to_fetch_how_title: 'So funktioniert es',
	tool_curl_to_fetch_input_label: 'cURL-Befehl',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.beispiel.com/…',
	tool_curl_to_fetch_large_warn: 'Großer Befehl (>50 KB) — Parsing kann langsamer sein.',
	tool_curl_to_fetch_load_sample: 'Beispiel laden',
	tool_curl_to_fetch_output_label: 'JavaScript-fetch-Ausgabe',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: 'Ausgabeformat',
	tool_curl_to_fetch_rules_body: 'Zuordnung curl-Flags zu fetch-Optionen und Browser-Grenzen.',
	tool_curl_to_fetch_rules_item_1: '-X POST → method POST; nur -d → POST außer mit -G.',
	tool_curl_to_fetch_rules_item_2: 'Jedes -H in headers; Content-Type bleibt erhalten.',
	tool_curl_to_fetch_rules_item_3: '-d als body; -G an URL angehängt.',
	tool_curl_to_fetch_rules_item_4: 'Cookies, Zertifikate, Proxy: fetch im Browser kann das nicht abbilden.',
	tool_curl_to_fetch_rules_title: 'Erwartete Regeln',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: 'Konvertiert — fetch unten prüfen.',
	tool_curl_to_fetch_title: 'curl zu fetch',
	tool_curl_to_fetch_usecase_1: 'curl-Beispiele in OpenAPI — einfügen und Frontend-fetch starten.',
	tool_curl_to_fetch_usecase_2: 'Bearer debuggen — Authorization beim Wechsel zu JavaScript behalten.',
	tool_curl_to_fetch_usecase_3: 'curl-Befehl zu fetch beim Migrieren von Shell-Skripten.',
	tool_curl_to_fetch_usecases_title: 'Gute Einsätze',
	tool_curl_to_fetch_warn_unknown_flags: 'Nicht unterstützte Flags übersprungen: {flags}',
};

export default de;
