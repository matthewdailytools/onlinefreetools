/**
 * i18n tool shard (validate-security-txt / de).
 * Szene: Domain eingeben → security.txt holen → RFC-9116-Felder prüfen.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_validate_security_txt_home_title: 'security.txt prüfen',
	tool_validate_security_txt_home_desc:
		'Prüfen Sie, ob eine Website eine gültige security.txt mit Contact und Expires veröffentlicht.',
	tool_validate_security_txt_desc:
		'Prüfen Sie, ob eine Website eine gültige security.txt mit Contact und Expires veröffentlicht.',
	tool_validate_security_txt_title: 'security.txt prüfen',
	tool_validate_security_txt_description:
		'Domain oder URL eingeben für diesen security.txt-Checker: holt /.well-known/security.txt (Fallback /security.txt), parst Contact und Expires und markiert fehlende Pflichtfelder. Beispiel: google.com.',
	tool_validate_security_txt_url_label: 'Domain oder URL',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ oder example.com',
	tool_validate_security_txt_check: 'Prüfen',
	tool_validate_security_txt_sample: 'Beispiel',
	tool_validate_security_txt_clear: 'Leeren',
	tool_validate_security_txt_running: 'security.txt wird geladen…',
	tool_validate_security_txt_url_error: 'Domain oder http(s)-URL eingeben.',
	tool_validate_security_txt_error_prefix: 'Fehler: ',
	tool_validate_security_txt_fetch_failed:
		'security.txt konnte nicht geladen werden. Host offline oder blockiert Bots.',
	tool_validate_security_txt_privacy_note:
		'URL und Hostname gehen an unseren Worker, damit security.txt geholt werden kann. Wir speichern sie nicht als Produktdatenbank.',
	tool_validate_security_txt_result_found_yes: 'security.txt gefunden',
	tool_validate_security_txt_result_found_no: 'security.txt nicht gefunden',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: 'Pflicht fehlt',
	tool_validate_security_txt_result_missing_none: 'Pflichtfelder vorhanden',
	tool_validate_security_txt_result_expired_yes: 'Expires abgelaufen',
	tool_validate_security_txt_result_expired_no: 'Expires noch gültig (oder nicht geparst)',
	tool_validate_security_txt_result_file_url: 'Abgerufene URL',
	tool_validate_security_txt_result_http_status: 'HTTP-Status',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'security.txt-Vorschau',
	tool_validate_security_txt_result_none: '(keine)',
	tool_validate_security_txt_how_title: 'So funktioniert’s',
	tool_validate_security_txt_how_body:
		'Dieser Validator beantwortet eine Frage: veröffentlicht die Site eine Discovery-Datei mit brauchbarem Contact und sinnvollem Expires?',
	tool_validate_security_txt_how_item_1: 'Domain oder HTTPS-URL eingeben.',
	tool_validate_security_txt_how_item_2:
		'Auf Prüfen klicken; der Worker versucht /.well-known/security.txt, dann /security.txt.',
	tool_validate_security_txt_how_item_3:
		'Contact, Expires, Preferred-Languages, Canonical und die Vorschau prüfen.',
	tool_validate_security_txt_how_item_4:
		'Markierte Lücken beheben, bevor Sie Ihre eigene security.txt veröffentlichen.',
	tool_validate_security_txt_formula_title: 'RFC-9116-Feldregeln',
	tool_validate_security_txt_formula_body:
		'Abgestimmt auf RFC 9116 und übliche Praxis von securitytxt.org.',
	tool_validate_security_txt_formula_item_1:
		'Reihenfolge: zuerst /.well-known/security.txt, dann /security.txt.',
	tool_validate_security_txt_formula_item_2:
		'Contact ist Pflicht; wir listen Werte und markieren Fehlen.',
	tool_validate_security_txt_formula_item_3:
		'Expires wird stark erwartet; Fehlen oder Datum in der Vergangenheit = Lücke.',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages und Canonical werden bei Vorhandensein gezeigt; für die Checklist nicht Pflicht.',
	tool_validate_security_txt_formula_item_5:
		'Nur Abruf und Parsing — kein Vulnerability-Postfach und kein Pentest.',
	tool_validate_security_txt_example_title: 'Beispiel',
	tool_validate_security_txt_example:
		'Beispiel-Eingabe https://www.google.com/. Der Worker testet well-known und Root und zeigt found, Contact, Expires, missingRequired, expired und die Vorschau.',
	tool_validate_security_txt_usecases_title: 'Wann hilfreich',
	tool_validate_security_txt_usecase_1:
		'security.txt-Checker vor dem Launch: antwortet well-known und gibt es Contact?',
	tool_validate_security_txt_usecase_2:
		'Nach Expires-Änderung: prüfen, ob das Datum lesbar und noch nicht abgelaufen ist.',
	tool_validate_security_txt_usecase_3:
		'Vor Kontakt zu einem Anbieter: prüfen, ob die Discovery-Datei veröffentlicht ist.',
	tool_validate_security_txt_faq_q1: 'Wo soll security.txt liegen?',
	tool_validate_security_txt_faq_a1:
		'Bevorzugt /.well-known/security.txt. /security.txt auf demselben Host ist der dokumentierte Fallback.',
	tool_validate_security_txt_faq_q2: 'Welche Felder sind Pflicht?',
	tool_validate_security_txt_faq_a2:
		'Mindestens Contact. Expires wird in der RFC-9116-Praxis stark erwartet; Lücken markieren wir.',
	tool_validate_security_txt_faq_q3: 'Ist der H1 „RFC 9116“?',
	tool_validate_security_txt_faq_a3:
		'Nein. Der H1 lautet security.txt prüfen. Die RFC steht in Regeln und Referenzen.',
	tool_validate_security_txt_faq_q4: 'Speichern Sie Vulnerability-Meldungen?',
	tool_validate_security_txt_faq_a4:
		'Nein. Wir holen und parsen nur die veröffentlichte Datei. Kein Disclosure-Postfach.',
	tool_validate_security_txt_faq_q5: 'Wird meine URL gespeichert?',
	tool_validate_security_txt_faq_a5:
		'URL/Host müssen den Worker für den Abruf erreichen. Checks speichern wir nicht als Produktdatenbank. Edge-Tool, kein „ohne Upload“.',
	tool_validate_security_txt_references: 'RFC 9116; securitytxt.org.',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default de;
