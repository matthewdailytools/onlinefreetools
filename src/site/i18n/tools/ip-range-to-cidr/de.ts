/**
 * i18n tool shard (ip-range-to-cidr / de).
 * Lokaler Suchbegriff: IP-Bereich zu CIDR.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'IP-Bereich zu CIDR — Start–Ende in Präfixlisten umwandeln',
	tool_ip_range_to_cidr_desc:
		'IP-Bereich zu CIDR: Start–Ende wird zu Präfixen. Beispiel: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Auf dem Gerät, ohne Server-Upload.',
	tool_ip_range_to_cidr_description:
		'IP-Bereich in CIDR umwandeln: Start und Ende (oder mehrere Zeilen) einfügen und abdeckende Präfixe erhalten. Beispiel: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Ohne Ausrichtung entstehen mehrere Präfixe; mehrere Zeilen dienen der CIDR-Aggregation. Adressen bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_ip_range_to_cidr_article:
		'Wandelt ACL-Exporte im Format Start–Ende in CIDR-Listen für Firewall-Regeln um. IPv4 und IPv6 in getrennten Läufen.',
	tool_ip_range_to_cidr_convert: 'Umwandeln',
	tool_ip_range_to_cidr_sample: 'Beispiel laden',
	tool_ip_range_to_cidr_clear: 'Leeren',
	tool_ip_range_to_cidr_copy: 'CIDR kopieren',
	tool_ip_range_to_cidr_copy_done: 'Kopiert',
	tool_ip_range_to_cidr_input_label: 'IP-Bereiche (eine Zeile je Bereich)',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'CIDR-Präfixe',
	tool_ip_range_to_cidr_meta_label: 'Kurzinfo',
	tool_ip_range_to_cidr_meta_tpl: '{n} Präfix(e) · {family}',
	tool_ip_range_to_cidr_swap_hint: 'Start und Ende wurden getauscht, weil die erste Adresse größer war.',
	tool_ip_range_to_cidr_err_empty: 'Mindestens einen Bereich eingeben (Start - Ende), eine Zeile je Bereich.',
	tool_ip_range_to_cidr_err_parse: 'Diese Zeile ist keine IP und kein Start–Ende-Bereich.',
	tool_ip_range_to_cidr_err_mixed: 'IPv4 und IPv6 nicht in derselben Umwandlung mischen.',
	tool_ip_range_to_cidr_err_limit: 'Zu viele CIDR-Präfixe (Sicherheitslimit). Bereiche verkleinern.',
	tool_ip_range_to_cidr_how_title: 'So funktioniert es',
	tool_ip_range_to_cidr_how_body:
		'Das Ergebnis deckt das geschlossene Intervall mit einem oder mehreren Präfixen ab—wenn die Regel CIDR will und Sie nur Start–Ende haben.',
	tool_ip_range_to_cidr_how_item_1: 'Ohne Blockgrenze gibt es mehrere exakte Präfixe, keine „geschätzte“ Maske.',
	tool_ip_range_to_cidr_how_item_2: '„A - B“ einfügen oder je Zeile einen Bereich zur Aggregation.',
	tool_ip_range_to_cidr_how_item_3: 'Umwandeln, prüfen, kopieren.',
	tool_ip_range_to_cidr_how_item_4: 'Vertauschte Reihenfolge → Hinweis; gemischte Familien → korrigieren.',
	tool_ip_range_to_cidr_formula_title: 'Formel',
	tool_ip_range_to_cidr_formula_body:
		'Vom aktuellen Start bis zum Ende: jeweils den größten ausgerichteten Zweierpotenz-Block nehmen, der noch in den Rest passt.',
	tool_ip_range_to_cidr_formula_item_1: 'Endpunkte als Ganzzahl parsen; gleiche Familie.',
	tool_ip_range_to_cidr_formula_item_2: 'Wenn Start > Ende: tauschen und vermerken.',
	tool_ip_range_to_cidr_formula_item_3: 'Host-Bits = trailing zeros ∩ Zweierpotenz der Restlänge.',
	tool_ip_range_to_cidr_formula_item_4: 'Netz/Länge ausgeben, um 2^Bits vorrücken, wiederholen.',
	tool_ip_range_to_cidr_example_title: 'Beispiel',
	tool_ip_range_to_cidr_example:
		'Eingabe: 192.168.1.0 - 192.168.1.255. Ausgabe: 192.168.1.0/24. Nicht ausgerichtet: 10.0.0.10 - 10.0.0.20 → 10.0.0.10/31, 10.0.0.12/30, 10.0.0.16/30, 10.0.0.20/32.',
	tool_ip_range_to_cidr_usecases_title: 'Wann das hilft',
	tool_ip_range_to_cidr_usecase_1: 'ACL-Exporte Start–Ende in Firewall-CIDR-Regeln bringen.',
	tool_ip_range_to_cidr_usecase_2: 'Cloud-Security-Groups füllen, die nur CIDR akzeptieren.',
	tool_ip_range_to_cidr_usecase_3: 'Mehrere private Bereiche aus einem Ticket zeilenweise zu CIDR aggregieren.',
	tool_ip_range_to_cidr_faq_q1: 'Warum mehrere CIDR?',
	tool_ip_range_to_cidr_faq_a1: 'Ohne saubere Grenze deckt kein einzelnes Präfix exakt ab; es entstehen mehrere ausgerichtete.',
	tool_ip_range_to_cidr_faq_q2: 'Was, wenn die größere Adresse zuerst kommt?',
	tool_ip_range_to_cidr_faq_a2: 'Automatischer Tausch, kurzer Hinweis, dann Umwandlung.',
	tool_ip_range_to_cidr_faq_q3: 'Darf ich IPv4 und IPv6 mischen?',
	tool_ip_range_to_cidr_faq_a3: 'Nein. Ein Lauf = eine Familie; getrennt umwandeln.',
	tool_ip_range_to_cidr_faq_q4: 'Wie funktioniert mehrzeilige Aggregation?',
	tool_ip_range_to_cidr_faq_a4: 'Jede Zeile wird einzeln umgewandelt; Lücken zwischen Zeilen werden nicht zusammengezogen.',
	tool_ip_range_to_cidr_faq_q5: 'Werden Adressen hochgeladen?',
	tool_ip_range_to_cidr_faq_a5: 'Nein. Sie bleiben auf Ihrem Gerät in diesem Tab und werden nicht auf einen Server hochgeladen.',
	tool_ip_range_to_cidr_faq_q6: 'Wo ist „CIDR zu IP-Bereich“?',
	tool_ip_range_to_cidr_faq_a6: 'Diese Seite macht nur Bereich→Präfixe. CIDR aufklappen ist die Gegenrichtung in einem anderen Tool.',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — CIDR-Routing',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — IPv6-Adressierung',
	tool_ip_range_to_cidr_disclaimer:
		'Die Präfixe decken das eingegebene geschlossene Intervall ab. Kein Routingprotokoll-Simulator; kritische ACL-Änderungen im eigenen Labor prüfen.',
};

export default de;
