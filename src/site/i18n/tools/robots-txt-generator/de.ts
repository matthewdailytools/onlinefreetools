/**
 * i18n tool shard (robots-txt-generator / de).
 * German locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_robots_home_title: 'Robots.txt Generator',
	tool_robots_home_desc:
		'Erstelle ein korrekt formatiertes robots.txt mit Erlaubnissen, Sperren und KI-Crawlern im Browser.',
	tool_robots_title: 'Robots.txt Generator — verwalte Erlaubnisse und Sperren für KI-Crawler',
	tool_robots_description:
		'Erstelle eine robots.txt im Browser. Schritte: User-Agents auswählen, Allow-/Disallow-Pfade und eine Sitemap-Zeile hinzufügen, dann das Textresultat mit erklärten Syntaxregeln und aktuellen KI-Crawler-User-Agents kopieren. Läuft lokal – es wird nichts hochgeladen. Beispiel: GPTBot sperren, während Googlebot vollständig aktiv bleibt.',
	tool_robots_generate: 'Generieren',
	tool_robots_sample: 'Beispiel',
	tool_robots_clear: 'Leeren',
	tool_robots_copy: 'Kopieren',
	tool_robots_copied: 'Kopiert',
	tool_robots_agents_label: 'User-Agents',
	tool_robots_agents_hint: 'Hake die Crawler an, die du aufnehmen möchtest, und füge dann Pfade für jede Gruppe hinzu.',
	tool_robots_include: 'Diesen User-Agent aufnehmen',
	tool_robots_agent_add: 'Eigenen Agenten hinzufügen',
	tool_robots_agent_remove: 'Agenten entfernen',
	tool_robots_allow_label: 'Allow-Pfade (einer pro Zeile)',
	tool_robots_disallow_label: 'Disallow-Pfade (einer pro Zeile)',
	tool_robots_sitemap_label: 'Sitemap-URL (optional)',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'Herunterladen',
	tool_robots_empty_agent: 'Wähle zuerst einen User-Agent oder füge einen hinzu.',
	tool_robots_owner_of: 'Betreiber: {owner}',
	tool_robots_how_title: 'So funktioniert es',
	tool_robots_how_body:
		'Wähle die Ziel-Crawler aus, füge für jede Gruppe Allow- und Disallow-Pfade hinzu, optional eine Sitemap-Zeile, und drücke Generieren. Die Seite setzt die Textdatei nach dem RFC-9309-Layout zusammen: eine User-Agent-Zeile pro Gruppe, darunter ihre Allow-/Disallow-Zeilen, eine Leerzeile zwischen Gruppen und die Sitemap-Zeile am Ende. Kopiere das Ergebnis in das Stammverzeichnis deiner Seite unter /robots.txt.',
	tool_robots_rules_title: 'Wichtige Syntaxregeln',
	tool_robots_rules_body:
		'robots.txt-Regeln sind Pfad-Präfixe, keine Muster, und ein Crawler wendet die letzte passende Gruppe in der Datei an. Das sind die Regeln, denen dieser Generator folgt.',
	tool_robots_rules_item_1:
		'Gruppenreihenfolge: Eine User-Agent-Zeile beginnt eine Gruppe für diesen Crawler; eine Leerzeile beendet sie. Die letzte passende Gruppe gewinnt.',
	tool_robots_rules_item_2:
		'Präfix-Abgleich: Allow und Disallow matchen Pfad-Präfixe, keine Teilstrings oder Regex. Nur * und $ sind besonders (RFC 9309).',
	tool_robots_rules_item_3:
		'Disallow: / sperrt diesen Agenten auf der gesamten Seite. Disallow mit leerem Wert erlaubt diesem Agenten alles.',
	tool_robots_rules_item_4:
		'Sitemap ist eine Erweiterung, kein Teil von RFC 9309. Sie ist unabhängig von Groß-/Kleinschreibung und darf überall stehen, wird aber üblicherweise ans Ende gesetzt.',
	tool_robots_example_title: 'Beispiel',
	tool_robots_example:
		'Beispiel: Googlebot mit Allow: / (vollständig aktiv), GPTBot mit Disallow: / (gesperrt) und eine Sitemap-Zeile, die auf /sitemap.xml zeigt. Die Ausgabe folgt diesem Layout: eine Gruppe pro Crawler, Leerzeile zwischen Gruppen, Sitemap zuletzt.',
	tool_robots_usecases_title: 'Gut geeignet für',
	tool_robots_usecase_1:
		'Neue Seiten: ein Start-robots.txt, das Suchmaschinen aktiviert lässt und private Staging-Pfade versteckt.',
	tool_robots_usecase_2:
		'KI-Crawler-Kontrolle: GPTBot, ClaudeBot, Google-Extended, CCBot oder PerplexityBot von Training oder Zusammenfassung aussperren, ohne Googlebot zu beeinflussen.',
	tool_robots_usecase_3:
		'Auffindbarkeit: robots.txt mit einer Sitemap-Zeile kombinieren, damit Crawler die Sitemap finden.',
	tool_robots_faq_q1: 'Was passiert, wenn ich Disallow: / schreibe?',
	tool_robots_faq_a1:
		'Es sagt diesem Crawler, keine URL unter der Seitenwurzel abzurufen. Bekommt Googlebot Disallow: /, können deine Seiten aus der Google-Suche verschwinden. Für einen Staging-Pfad nimm stattdessen Disallow: /private/.',
	tool_robots_faq_q2: 'Wie sperre ich KI-Crawler wie GPTBot?',
	tool_robots_faq_a2:
		'Erstelle eine Gruppe mit dem User-Agent des Crawlers (z. B. GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot) und füge Disallow: / hinzu. Prüfe die offizielle Doku des Crawlers, da KI-Crawler ihre User-Agents und IP-Bereiche von Zeit zu Zeit aktualisieren.',
	tool_robots_faq_q3: 'Wo soll die Sitemap-Zeile stehen?',
	tool_robots_faq_a3:
		'Die Position hat keinen Einfluss darauf, wie Suchmaschinen sie lesen, aber üblich ist das Dateiende. Der Generator hängt sie zuletzt an, wenn du eine URL angibst.',
	tool_robots_faq_q4: 'Wird mein robots.txt irgendwohin hochgeladen?',
	tool_robots_faq_a4:
		'Nein. Die Datei wird in deinem Browser erzeugt und nie an einen Server gesendet. Schließe den Tab, und es wird nichts gespeichert.',
	tool_robots_references: 'RFC 9309 Robots Exclusion Protocol; Google Search Central – robots.txt; Google Search Central – KI-Crawler verwalten.',
	tool_robots_ref_rfc_label: 'RFC 9309 – Robots Exclusion Protocol',
	tool_robots_ref_google_label: 'Search Central – robots.txt',
	tool_robots_ref_ai_label: 'Search Central – KI-Crawler verwalten',
};

export default de;
