/**
 * i18n tool shard (check-ssl-certificate-expiration / de).
 * Szene: Hostname → crt.sh CT → Ablauf des neuesten Zertifikats (kein Live-Handshake).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'SSL-Zertifikatsablauf prüfen',
	tool_check_ssl_certificate_expiration_home_desc:
		'Sehen Sie, wann das neueste CT-Zertifikat eines Hostnamens abläuft (crt.sh — kein Live-Handshake).',
	tool_check_ssl_certificate_expiration_desc:
		'Sehen Sie, wann das neueste CT-Zertifikat eines Hostnamens abläuft (crt.sh — kein Live-Handshake).',
	tool_check_ssl_certificate_expiration_title: 'SSL-Zertifikatsablauf prüfen',
	tool_check_ssl_certificate_expiration_description:
		'Hostname eingeben für diesen SSL-Gültigkeits-Checker: Certificate Transparency über crt.sh abfragen, dann notBefore, notAfter, Aussteller und Resttage des neuesten Treffers anzeigen. Kein Live-TLS-Handshake. Beispiel: example.com.',
	tool_check_ssl_certificate_expiration_host_label: 'Hostname',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: 'Prüfen',
	tool_check_ssl_certificate_expiration_sample: 'Beispiel',
	tool_check_ssl_certificate_expiration_clear: 'Leeren',
	tool_check_ssl_certificate_expiration_running: 'Certificate Transparency wird abgefragt…',
	tool_check_ssl_certificate_expiration_host_error: 'Hostname eingeben (oder https-URL einfügen).',
	tool_check_ssl_certificate_expiration_error_prefix: 'Fehler: ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'crt.sh konnte nicht abgefragt werden. Rate-Limits oder Ausfall möglich.',
	tool_check_ssl_certificate_expiration_privacy_note:
		'Der Hostname geht an unseren Worker, damit crt.sh abgefragt werden kann. Wir speichern ihn nicht als Produktdatenbank.',
	tool_check_ssl_certificate_expiration_result_found_yes: 'CT-Zertifikat gefunden',
	tool_check_ssl_certificate_expiration_result_found_no: 'Keine CT-Zeilen für diesen Host',
	tool_check_ssl_certificate_expiration_result_host: 'Hostname',
	tool_check_ssl_certificate_expiration_result_cn: 'Common Name',
	tool_check_ssl_certificate_expiration_result_issuer: 'Aussteller',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter (Ablauf)',
	tool_check_ssl_certificate_expiration_result_days_left: 'Tage übrig',
	tool_check_ssl_certificate_expiration_result_expired_yes: 'Abgelaufen (nach CT notAfter)',
	tool_check_ssl_certificate_expiration_result_expired_no: 'Nicht abgelaufen (nach CT notAfter)',
	tool_check_ssl_certificate_expiration_result_source: 'Quelle',
	tool_check_ssl_certificate_expiration_result_row_count: 'CT-Zeilen zurückgegeben',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'CT-Log-Verzögerung — kein Peer-Zertifikat eines Live-TLS-Handshakes. Daten können hinter Ausstellung oder Verlängerung zurückliegen.',
	tool_check_ssl_certificate_expiration_result_none: '(keine)',
	tool_check_ssl_certificate_expiration_how_title: 'So funktioniert’s',
	tool_check_ssl_certificate_expiration_how_body:
		'Diese Seite beantwortet eine Frage: wann läuft der neueste CT-Treffer für diesen Hostname ab? Kein Live-SSL-Handshake-Audit.',
	tool_check_ssl_certificate_expiration_how_item_1: 'Hostname eingeben (kein Pfad nötig).',
	tool_check_ssl_certificate_expiration_how_item_2: 'Auf Prüfen klicken; der Worker fragt crt.sh-JSON ab.',
	tool_check_ssl_certificate_expiration_how_item_3: 'notBefore, notAfter, Aussteller und Resttage des neuesten Treffers lesen.',
	tool_check_ssl_certificate_expiration_how_item_4: 'Daten als CT-veröffentlicht behandeln — bei kritischem Timing lokal per Handshake bestätigen.',
	tool_check_ssl_certificate_expiration_formula_title: 'CT-Abfrageregeln (kein Live-TLS)',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers können das Peer-Zertifikat aus fetch nicht lesen. Wir nutzen öffentliche Certificate-Transparency-Daten über crt.sh.',
	tool_check_ssl_certificate_expiration_formula_item_1: 'crt.sh mit Hostname abfragen und JSON-Liste parsen.',
	tool_check_ssl_certificate_expiration_formula_item_2: 'Nach notBefore absteigend sortieren und die neueste Zeile nehmen.',
	tool_check_ssl_certificate_expiration_formula_item_3: 'notBefore, notAfter, Aussteller, daysLeft und expired anzeigen.',
	tool_check_ssl_certificate_expiration_formula_item_4: 'CT-Logs können hinter Live-Ausstellung oder -Verlängerung zurückliegen.',
	tool_check_ssl_certificate_expiration_formula_item_5: 'Private oder blockierte Hosts werden abgelehnt. Kein voller Chain-Walker und kein CA-Bestelltool.',
	tool_check_ssl_certificate_expiration_example_title: 'Beispiel',
	tool_check_ssl_certificate_expiration_example:
		'Beispiel-Eingabe example.com. Der Worker fragt crt.sh ab, wählt das neueste Zertifikat und zeigt notBefore, notAfter, Aussteller, daysLeft sowie den CT-Lag-Hinweis.',
	tool_check_ssl_certificate_expiration_usecases_title: 'Wann hilfreich',
	tool_check_ssl_certificate_expiration_usecase_1: 'SSL-Ablauf-Checker vor der Verlängerung: Resttage des neuesten CT-Leafs.',
	tool_check_ssl_certificate_expiration_usecase_2: 'Nach CDN-Umstellung: prüfen, ob CT ein neues notAfter zeigt.',
	tool_check_ssl_certificate_expiration_usecase_3: 'Schnelle Inventur von Vendor-Domains, wenn nur Ablaufdaten nötig sind.',
	tool_check_ssl_certificate_expiration_faq_q1: 'Ist das ein Live-SSL-Handshake?',
	tool_check_ssl_certificate_expiration_faq_a1:
		'Nein. Workers lesen das Peer-Zertifikat nicht aus fetch; wir fragen Certificate Transparency (crt.sh) ab.',
	tool_check_ssl_certificate_expiration_faq_q2: 'Warum können Daten hinterherhinken?',
	tool_check_ssl_certificate_expiration_faq_a2:
		'CT-Logs können hinter Ausstellung oder Verlängerung zurückliegen. Bei kritischem Timing lokal per Handshake bestätigen.',
	tool_check_ssl_certificate_expiration_faq_q3: 'Prüfen Sie die volle Zertifikatskette?',
	tool_check_ssl_certificate_expiration_faq_a3:
		'Fokus ist der Ablauf des neuesten Treffers. Ein reiner Chain-Checker ist sekundär — nicht der H1.',
	tool_check_ssl_certificate_expiration_faq_q4: 'Ist der Titel „SSL certificate checker“?',
	tool_check_ssl_certificate_expiration_faq_a4:
		'Nein. Der H1 lautet SSL-Zertifikatsablauf prüfen. Der breitere Head ist nicht der alleinige Titel.',
	tool_check_ssl_certificate_expiration_faq_q5: 'Was ist mit privaten IP-Hosts?',
	tool_check_ssl_certificate_expiration_faq_a5:
		'Private oder blockierte Hosts werden abgelehnt. Für Kontext das Tool für private CIDR-Bereiche nutzen.',
	tool_check_ssl_certificate_expiration_references: 'crt.sh; Certificate Transparency.',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default de;
