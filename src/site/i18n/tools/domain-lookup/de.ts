/**
 * i18n tool shard (domain-lookup / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
	tool_domain_lookup_article:
		'DNS-Einträge und Registrierungsdaten eines Domainnamens an einem Ort prüfen. Anfragen laufen über unser Edge zu DNS-over-HTTPS und RDAP; Kontaktdaten sind oft geschwärzt, Ergebnisse können vom lokalen Resolver abweichen.',
	tool_domain_lookup_clear: 'Leeren',
	tool_domain_lookup_col_data: 'Daten',
	tool_domain_lookup_col_name: 'Name',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'Typ',
	tool_domain_lookup_copied: 'Kopiert',
	tool_domain_lookup_copy: 'Zusammenfassung kopieren',
	tool_domain_lookup_desc:
		'Domain-Lookup: DNS und Registrierung (WHOIS/RDAP) — A/MX/NS, Registrar und Ablaufdatum in einer Ansicht.',
	tool_domain_lookup_description:
		'Domain-Lookup online: live DNS-Einträge und WHOIS-ähnliche Registrierungsdaten per RDAP prüfen. Schritte: Domain wie example.com eingeben, DNS-over-HTTPS und RDAP parallel abfragen, dann A/AAAA/MX/NS/TXT mit Registrar, Status und Ablaufereignissen vergleichen. Kontakte sind oft geschwärzt; Abfragen laufen über unser Edge ohne Verlaufsspeicherung.',
	tool_domain_lookup_domain_label: 'Domain',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: 'Keine DNS-Antworten für die abgefragten Typen.',
	tool_domain_lookup_dns_fail: 'DNS-Abfrage fehlgeschlagen.',
	tool_domain_lookup_dns_heading: 'DNS-Einträge',
	tool_domain_lookup_err_empty: 'Domainnamen eingeben.',
	tool_domain_lookup_err_need_one: 'DNS, Registrierung oder beides wählen.',
	tool_domain_lookup_events: 'Ereignisse',
	tool_domain_lookup_example:
		'Beispiel: example.com abfragen → DNS kann öffentliche A/AAAA/NS via DoH zeigen; Registrierung kann Registrar, Statuscodes und Ablauf-/Registrierungsereignisse aus RDAP listen (Felder können geschwärzt sein).',
	tool_domain_lookup_example_title: 'Beispiel',
	tool_domain_lookup_faq_a1:
		'DNS-Antworten stammen aus einer öffentlichen Resolver-Sicht (DoH). RDAP-NS sind die beim Registry hinterlegten. Propagation oder kürzliche Änderungen können abweichen.',
	tool_domain_lookup_faq_a2:
		'Der Browser ruft unsere Edge-API auf; der Worker fragt DoH und RDAP upstream ab. Kein Domain-Verlauf — Ergebnisse gelten als einmalig.',
	tool_domain_lookup_faq_a3:
		'Viele sagen weiterhin Whois. Für die meisten gTLD veröffentlicht die Registry dieselben Daten per RDAP (JSON über HTTPS). Dieses Tool nutzt RDAP; manche ccTLD haben kein RDAP.',
	tool_domain_lookup_faq_a4:
		'Nach Datenschutzregeln sind E-Mail und Telefon des Inhabers oft geschwärzt. Registrar, Status und Daten bleiben meist sichtbar. Wir zeigen, was der RDAP-Server liefert.',
	tool_domain_lookup_faq_a5:
		'Nicht unterstützte TLD, Timeout oder leeres DNS wie NXDOMAIN erscheinen pro Abschnitt, damit ein Fehler den anderen nicht verdeckt.',
	tool_domain_lookup_faq_q1: 'Warum können DNS-NS von Registrierungs-NS abweichen?',
	tool_domain_lookup_faq_q2: 'Speichern Sie die Domains, die ich abfrage?',
	tool_domain_lookup_faq_q3: 'Ist das eine Whois-Abfrage?',
	tool_domain_lookup_faq_q4: 'Warum ist der Inhaberkontakt leer?',
	tool_domain_lookup_faq_q5: 'Was, wenn DNS oder RDAP fehlschlägt?',
	tool_domain_lookup_how_body:
		'Domain eingeben und DNS, Registrierung oder beides wählen. Am Edge fragt der Worker Cloudflare DNS-over-HTTPS für gängige Typen und den RDAP-Server der TLD (via IANA-Bootstrap) für Registrar, Status, Ereignisse und Registry-NS ab. Jeder Block kann unabhängig gelingen oder scheitern.',
	tool_domain_lookup_how_title: 'So funktioniert es',
	tool_domain_lookup_loading: 'Abfrage läuft…',
	tool_domain_lookup_lookup: 'Abfragen',
	tool_domain_lookup_ns_mismatch:
		'Hinweis: DNS-NS weichen von RDAP-NS ab — oft wegen Propagation oder kürzlicher Änderung.',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: 'Registrierung',
	tool_domain_lookup_rdap_fail: 'Registrierungsabfrage (RDAP) fehlgeschlagen.',
	tool_domain_lookup_rdap_heading: 'Registrierung (RDAP)',
	tool_domain_lookup_rdap_link: 'RDAP-URL',
	tool_domain_lookup_rdap_ns: 'Registry-NS',
	tool_domain_lookup_rdap_ok: 'Registrierungsdaten aus RDAP.',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — DNS over HTTPS API',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup (RDAP)',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — Domainnamen',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'Registrar',
	tool_domain_lookup_rules_body:
		'Diese Seite zeigt Resolver-DNS und Registry-Registrierungsdaten. Grenzen und Bedeutung:',
	tool_domain_lookup_rules_item_1:
		'Abgefragte DNS-Typen: A, AAAA, CNAME, MX, NS, TXT, SOA (öffentliche DoH-Sicht).',
	tool_domain_lookup_rules_item_2:
		'Registrierungsdaten kommen aus RDAP, dem strukturierten Nachfolger klassischen WHOIS bei den meisten gTLD.',
	tool_domain_lookup_rules_item_3:
		'Kontaktfelder können geschwärzt sein; rechnen Sie nicht mit vollständigen Inhaberdaten.',
	tool_domain_lookup_rules_item_4:
		'Während der Propagation können DNS-Antworten und RDAP-NS abweichen.',
	tool_domain_lookup_rules_item_5:
		'Abfragen laufen über unser Edge zu Upstream-Servern; wir ändern weder DNS noch Registrierung.',
	tool_domain_lookup_rules_title: 'Was Sie erhalten',
	tool_domain_lookup_sample: 'Beispiel',
	tool_domain_lookup_status: 'Status',
	tool_domain_lookup_title: 'Domain-Lookup — DNS und Registrierungsdaten prüfen',
	tool_domain_lookup_usecase_1:
		'Vor Go-live: prüfen, ob A/AAAA/CNAME auf den erwarteten Host zeigen.',
	tool_domain_lookup_usecase_2:
		'Verlängerung oder Übergabe: Registrar, Status und Ablaufereignisse prüfen (Kontakte können geschwärzt sein).',
	tool_domain_lookup_usecase_3:
		'E-Mail-Setup: MX und zugehörige TXT-Snippets ansehen (kein vollständiges Zustellbarkeits-Audit).',
	tool_domain_lookup_usecases_title: 'Typische Einsätze',
};
export default de;
