/**
 * i18n tool shard (cidr-to-ip-range / de).
 * Local search: cidr zu ip-bereich; cidr rechner / notation landen in desc+FAQ.
 * H1 = CIDR→IP-Bereich (nicht allein „CIDR-Rechner“); Untertitel ergebnis-/szenarioorientiert.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'CIDR zu IP-Bereich — Präfix in nutzbare Adressen erweitern',
	tool_cidr_to_ip_range_desc:
		'CIDR zu IP-Bereich: 192.168.1.0/24 einfügen für Netzwerk, Broadcast, nutzbare Hosts und Maske. Rechnung auf Ihrem Gerät.',
	tool_cidr_to_ip_range_description:
		'CIDR zu IP-Bereich: IPv4-CIDR einfügen (Beispiel 192.168.1.0/24) und Netzwerkadresse, Broadcast, ersten/letzten nutzbaren Host, Hostanzahl sowie Subnetzmaske erhalten. Zusätzlich Maske ↔ Präfix wandeln, prüfen ob eine IP im Block liegt, oder Adressen mit sicherem Zeilenlimit auflisten. Dieselbe Aufgabe wie ein CIDR-Notationsrechner—bleibt auf Ihrem Gerät, ohne Upload auf einen Server.',
	tool_cidr_to_ip_range_article:
		'IPv4-CIDR einfügen und Netzwerk, Broadcast, ersten/letzten nutzbaren Host, Hostanzahl, Subnetzmaske und Wildcard sehen. Optionale Modi: Maske ↔ Präfix, Contains/Overlap oder begrenzte Erweiterung.',
	tool_cidr_to_ip_range_calculate: 'Berechnen',
	tool_cidr_to_ip_range_sample: 'Beispiel laden',
	tool_cidr_to_ip_range_clear: 'Leeren',
	tool_cidr_to_ip_range_copy: 'Felder kopieren',
	tool_cidr_to_ip_range_copy_done: 'Kopiert',
	tool_cidr_to_ip_range_mode_label: 'Modus',
	tool_cidr_to_ip_range_mode_range: 'Präfix → Bereich',
	tool_cidr_to_ip_range_mode_mask: 'Maske ↔ Präfix',
	tool_cidr_to_ip_range_mode_check: 'Contains / Overlap',
	tool_cidr_to_ip_range_mode_expand: 'Erweitern (begrenzt)',
	tool_cidr_to_ip_range_input_label: 'IPv4-CIDR',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'Subnetzmaske (punktiert)',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'IP oder zweites CIDR',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 oder 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: 'Ergebnis',
	tool_cidr_to_ip_range_lbl_network: 'Netzwerk',
	tool_cidr_to_ip_range_lbl_broadcast: 'Broadcast',
	tool_cidr_to_ip_range_lbl_first: 'Erster nutzbarer',
	tool_cidr_to_ip_range_lbl_last: 'Letzter nutzbarer',
	tool_cidr_to_ip_range_lbl_hosts: 'Hostanzahl',
	tool_cidr_to_ip_range_lbl_mask: 'Subnetzmaske',
	tool_cidr_to_ip_range_lbl_wildcard: 'Wildcard-Maske',
	tool_cidr_to_ip_range_lbl_prefix: 'Präfixlänge',
	tool_cidr_to_ip_range_lbl_normalized: 'Normalisiertes CIDR',
	tool_cidr_to_ip_range_norm_hint: 'Host-Bits waren nicht null; angezeigte Werte nutzen die Netzwerkadresse.',
	tool_cidr_to_ip_range_expand_limit:
		'Erweiterung am Sicherheitslimit gestoppt ({limit} Zeilen). Längeres Präfix nutzen oder Limit später erhöhen.',
	tool_cidr_to_ip_range_check_in: 'Adresse liegt im CIDR.',
	tool_cidr_to_ip_range_check_out: 'Adresse liegt außerhalb des CIDR.',
	tool_cidr_to_ip_range_overlap_equal: 'Blöcke sind identisch.',
	tool_cidr_to_ip_range_overlap_contain: 'Erstes CIDR enthält das zweite.',
	tool_cidr_to_ip_range_overlap_inside: 'Erstes CIDR liegt im zweiten.',
	tool_cidr_to_ip_range_overlap_overlap: 'Blöcke überlappen teilweise.',
	tool_cidr_to_ip_range_overlap_disjoint: 'Blöcke sind disjunkt.',
	tool_cidr_to_ip_range_mask_to_prefix: 'Präfix aus Maske: /{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'Maske aus Präfix: {mask}',
	tool_cidr_to_ip_range_err_empty: 'Geben Sie ein IPv4-CIDR wie 192.168.1.0/24 ein.',
	tool_cidr_to_ip_range_err_parse: 'Konnte das nicht als IPv4-Adresse oder CIDR parsen.',
	tool_cidr_to_ip_range_err_prefix: 'Präfixlänge muss eine Ganzzahl von 0 bis 32 sein.',
	tool_cidr_to_ip_range_err_ipv6: 'Diese Seite ist nur IPv4. Für IPv6-Präfixe ein IPv6-CIDR-Tool nutzen.',
	tool_cidr_to_ip_range_err_mask: 'Diese punktierte Maske ist keine zusammenhängende IPv4-Subnetzmaske.',
	tool_cidr_to_ip_range_err_second: 'Zweite IPv4-Adresse oder CIDR für Contains/Overlap eingeben.',
	tool_cidr_to_ip_range_how_title: 'So funktioniert es',
	tool_cidr_to_ip_range_how_body:
		'Wandeln Sie ein CIDR-Präfix in einen IP-Bereich um: Netzwerk, Broadcast, nutzbare Hosts und Maske. Das ist dieselbe Aufgabe, die viele mit einem CIDR-Notationsrechner meinen.',
	tool_cidr_to_ip_range_how_item_1:
		'Aufgabe klarhalten: CIDR-Präfix → Bereich (nicht Start–Ende → CIDR).',
	tool_cidr_to_ip_range_how_item_2: 'IPv4-CIDR wie 192.168.1.0/24 einfügen (oder Beispiel laden).',
	tool_cidr_to_ip_range_how_item_3:
		'Netzwerk, Broadcast, ersten/letzten nutzbaren Host, Hostanzahl und Maske lesen; bei Bedarf kopieren.',
	tool_cidr_to_ip_range_how_item_4:
		'Optional zu Maskenwandlung, Contains/Overlap oder begrenzter Erweiterung wechseln.',
	tool_cidr_to_ip_range_how_item_5:
		'Für Start–Ende → CIDR das verwandte Tool IP-Bereich zu CIDR nutzen; für IPv6 eine eigene IPv6-CIDR-Seite.',
	tool_cidr_to_ip_range_formula_title: 'Formel',
	tool_cidr_to_ip_range_formula_body:
		'Maske = 2^32 − 2^(32−Präfix). Netzwerk = Adresse AND Maske. Broadcast = Netzwerk OR NOT Maske. Nutzbare Hosts: Sonderfälle /31 (RFC 3021) und /32.',
	tool_cidr_to_ip_range_formula_item_1: 'a.b.c.d/nn parsen; IPv6 und Präfixe außerhalb 0–32 ablehnen.',
	tool_cidr_to_ip_range_formula_item_2: 'Maskenbits berechnen, dann Netzwerk und Broadcast per bitweisem AND/OR.',
	tool_cidr_to_ip_range_formula_item_3:
		'Nutzbar: /32 → einzelner Host; /31 → beide Adressen (RFC 3021); sonst first=Netzwerk+1, last=Broadcast−1.',
	tool_cidr_to_ip_range_formula_item_4:
		'Waren Host-Bits gesetzt, auf Netzwerkadresse normalisieren und Hinweis zeigen.',
	tool_cidr_to_ip_range_example_title: 'Beispiel',
	tool_cidr_to_ip_range_example:
		'Eingabe: 192.168.1.0/24. Ausgabe: Netzwerk 192.168.1.0, Broadcast 192.168.1.255, nutzbar 192.168.1.1–192.168.1.254, Maske 255.255.255.0, Hosts 254. Eingabe 192.168.1.37/24 normalisiert zu 192.168.1.0/24.',
	tool_cidr_to_ip_range_usecases_title: 'Wann das hilft',
	tool_cidr_to_ip_range_usecase_1:
		'Security-Group-CIDR in erste/letzte Adresse erweitern, bevor eine ACL noch mit Bereichen geschrieben wird.',
	tool_cidr_to_ip_range_usecase_2:
		'Kollegen punktierte Maske und nutzbare Hostanzahl eines /24 geben, ohne eine Tabelle zu öffnen.',
	tool_cidr_to_ip_range_usecase_3:
		'Proxmox- oder Bridge-Plan prüfen: Netzwerk und Broadcast für das vorgesehene CIDR bestätigen.',
	tool_cidr_to_ip_range_faq_q1: 'Wie werden nutzbare Hosts bei /31 und /32 gezählt?',
	tool_cidr_to_ip_range_faq_a1:
		'/32 ist ein einzelner Host (Netzwerk = diese Adresse; kein klassischer Broadcast). /31 folgt RFC 3021: beide Adressen sind für Point-to-Point nutzbar; kein ungenutztes Netzwerk/Broadcast-Paar.',
	tool_cidr_to_ip_range_faq_q2: 'Was passiert bei 192.168.1.37/24?',
	tool_cidr_to_ip_range_faq_a2:
		'Das Tool normalisiert auf 192.168.1.0/24, zeigt kurz an, dass Host-Bits ignoriert wurden, und gibt weiterhin Netzwerk, Broadcast und nutzbaren Bereich für diesen Block aus.',
	tool_cidr_to_ip_range_faq_q3: 'Ist das dasselbe wie ein CIDR-Notationsrechner?',
	tool_cidr_to_ip_range_faq_a3:
		'Ja für die übliche Aufgabe: CIDR-Notation in Netzwerk-/Broadcast-/Host-Felder und Maske verwandeln. Der Titel sagt „CIDR zu IP-Bereich“, weil das das Ergebnis beschreibt; Rechner-Suchen landen auf demselben Tool.',
	tool_cidr_to_ip_range_faq_q4: 'Kann ich jede IP eines großen Blocks auflisten?',
	tool_cidr_to_ip_range_faq_a4:
		'Nutzen Sie den Modus Erweitern. Die Liste stoppt bei einem Sicherheitslimit (1024 Zeilen), damit ein /8 den Tab nicht einfriert. Präfix verengen oder nur die Zusammenfassungsfelder nutzen.',
	tool_cidr_to_ip_range_faq_q5: 'Wo wandle ich Start–Ende in CIDR um?',
	tool_cidr_to_ip_range_faq_a5:
		'Die umgekehrte Aufgabe liegt im verwandten Tool IP-Bereich zu CIDR. Diese Seite erweitert nur ein Präfix in Bereichsfelder (und optionale begrenzte Listen).',
	tool_cidr_to_ip_range_faq_q6: 'Werden meine Adressen hochgeladen?',
	tool_cidr_to_ip_range_faq_a6:
		'Nein. Adressen bleiben auf Ihrem Gerät in diesem Browser-Tab und werden nicht auf einen Server hochgeladen.',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'Ergebnisse folgen üblicher IPv4-CIDR-Arithmetik (inkl. RFC 3021 für /31). Keine Routing- oder Firewall-Politikberatung; kritische Änderungen im eigenen Lab prüfen.',
};

export default de;
