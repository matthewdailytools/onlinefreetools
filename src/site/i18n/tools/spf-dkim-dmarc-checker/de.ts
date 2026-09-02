/**
 * i18n tool shard (spf-dkim-dmarc-checker / de).
 * Suche: spf dkim dmarc checker; dmarc record prüfen; spf lookup.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'SPF-DKIM-DMARC-Checker',
	tool_spf_dkim_dmarc_checker_desc:
		'Prüfen Sie SPF, DKIM und DMARC einer Domain und lesen Sie ~all/-all sowie die p=-Richtlinie verständlich.',
	tool_spf_dkim_dmarc_checker_description:
		'Geben Sie die Absenderdomain und optional einen DKIM-Selektor ein (Standard google). DoH fragt SPF, _dmarc und selector._domainkey ab und erklärt ~all/-all sowie p=. Beispiel: google.com.',
	tool_spf_dkim_dmarc_checker_domain_label: 'Domain',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'DKIM-Selektor',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: 'Prüfen',
	tool_spf_dkim_dmarc_checker_sample: 'Beispiel',
	tool_spf_dkim_dmarc_checker_clear: 'Leeren',
	tool_spf_dkim_dmarc_checker_running: 'SPF, DKIM und DMARC werden per DNS abgefragt…',
	tool_spf_dkim_dmarc_checker_domain_error: 'Geben Sie einen gültigen Domainnamen ein (nur Host oder vollständige URL).',
	tool_spf_dkim_dmarc_checker_error_prefix: 'Fehler: ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'DNS-Abfrage fehlgeschlagen. Resolver unerreichbar oder Name blockiert.',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'Domain und DKIM-Selektor werden für DNS-over-HTTPS an unseren Worker gesendet. Wir speichern sie nicht als Produktdatenbank.',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'Gefunden',
	tool_spf_dkim_dmarc_checker_result_found_no: 'Nicht gefunden',
	tool_spf_dkim_dmarc_checker_result_record: 'Eintrag',
	tool_spf_dkim_dmarc_checker_result_explain: 'Erklärung',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'all-Qualifizierer',
	tool_spf_dkim_dmarc_checker_result_policy: 'DMARC-Richtlinie (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'Selektor',
	tool_spf_dkim_dmarc_checker_result_pubkey: 'Öffentlicher Schlüssel (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'Vorhanden',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'Fehlt oder leer',
	tool_spf_dkim_dmarc_checker_how_title: 'So funktioniert es',
	tool_spf_dkim_dmarc_checker_how_body:
		'Zustellbarkeitschecks brauchen meist SPF, DKIM und DMARC zusammen. Domain eingeben, Selektor bei Bedarf ändern, dann jeden TXT plus kurze Richtlinien-Zusammenfassung lesen.',
	tool_spf_dkim_dmarc_checker_how_item_1:
		'Absenderdomain und optionalen DKIM-Selektor eingeben (Standard google).',
	tool_spf_dkim_dmarc_checker_how_item_2:
		'Auf Prüfen klicken; der Worker fragt TXT per DoH für SPF, _dmarc und selector._domainkey ab.',
	tool_spf_dkim_dmarc_checker_how_item_3:
		'Jeden Eintrag sowie die Erklärung zu ~all/-all und DMARC p= lesen.',
	tool_spf_dkim_dmarc_checker_how_item_4:
		'DNS beim Provider korrigieren und erneut prüfen — diese Seite schreibt die Zone nicht um.',
	tool_spf_dkim_dmarc_checker_formula_title: 'Was wir abfragen',
	tool_spf_dkim_dmarc_checker_formula_body:
		'Abfragen folgen den öffentlichen TXT-Formen aus RFC 7208, 6376 und 7489. Wir fassen Richtlinienfelder zusammen; wir senden keine Mails und prüfen keine Postfächer.',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF: TXT auf der Domain mit v=spf1; wir zeigen den abschließenden all-Qualifizierer (~all soft fail, -all hard fail).',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC: TXT auf _dmarc.Domain mit v=DMARC1; wir heben p= (none / quarantine / reject) und optionales pct hervor.',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM: TXT auf {selector}._domainkey.Domain; wir prüfen, ob ein nicht leerer öffentlicher Schlüssel p= vorhanden ist.',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'Fehlende Einträge werden klar gemeldet. DoH-Fehler erscheinen als Fehler — kein Live-Signaturtest Ihres ESP.',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'Kein SMTP-RCPT-Probing und keine Zonenedits. Ein „Existiert die E-Mail-Adresse?“-Checker liegt außerhalb.',
	tool_spf_dkim_dmarc_checker_example_title: 'Beispiel',
	tool_spf_dkim_dmarc_checker_example:
		'Beispielinput google.com mit DKIM-Selektor google. Der Worker fragt SPF, _dmarc.google.com und google._domainkey.google.com ab und zeigt gefunden/Eintrag/Erklärung.',
	tool_spf_dkim_dmarc_checker_usecases_title: 'Wann das hilft',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'Vor dem Go-live: Nach dem Veröffentlichen der ESP-DNS prüfen, ob SPF, DKIM und DMARC der Absenderdomain existieren.',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'DMARC-Record prüfen: p=none vs. quarantine/reject verständlich lesen, nicht nur Roh-TXT.',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'SPF-Lookup, wenn Mail im Spam landet: ~all oder -all sehen und den DKIM-Selektor zum ESP ausrichten.',
	tool_spf_dkim_dmarc_checker_faq_q1: 'Warum drei Einträge auf einer Seite?',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'Posteingänge bewerten meist alle drei. Ein reiner DMARC-Checker kann kaputtes SPF oder den falschen DKIM-Selektor übersehen.',
	tool_spf_dkim_dmarc_checker_faq_q2: 'Was ist der Standard-DKIM-Selektor?',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google — üblich bei Google Workspace. Ändern Sie ihn, wenn Ihr ESP einen anderen veröffentlicht (z. B. s1 oder k1).',
	tool_spf_dkim_dmarc_checker_faq_q3: 'Ist das ein E-Mail-Adress-Validator?',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'Nein. Nur Domain-Authentifizierungs-DNS (SPF-Lookup, DKIM-Schlüssel, DMARC-Richtlinie). Postfach-Existenz ist außerhalb.',
	tool_spf_dkim_dmarc_checker_faq_q4: 'Zeigen Sie nur Roh-TXT?',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'Nein. Ergebnisse enthalten den Eintrag plus eine Erklärzeile zu SPF-all-Mechanismen und DMARC p=.',
	tool_spf_dkim_dmarc_checker_faq_q5: 'Wird meine Domain gespeichert?',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'Domain und Selektor müssen den Worker für DNS-over-HTTPS erreichen. Wir speichern Checks nicht als dauerhafte Produktdatenbank. Das ist ein Edge-DNS-Tool, kein „ohne Upload“.',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF; RFC 6376 DKIM; RFC 7489 DMARC.',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default de;
