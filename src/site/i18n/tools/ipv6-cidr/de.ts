/**
 * i18n tool shard (ipv6-cidr / de).
 * Lokale Suchen: ipv6 cidr rechner / ipv6 präfix rechner.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_ipv6_cidr_title: 'IPv6-CIDR-Rechner — Präfix als Adressbereich darstellen',
	tool_ipv6_cidr_desc:
		'IPv6-CIDR-Rechner: 2001:db8:1::/64 einfügen für Netz, letzte Adresse und komprimierte Form. Auf Ihrem Gerät.',
	tool_ipv6_cidr_description:
		'IPv6-CIDR-Rechner: Fügen Sie ein Präfix ein (Beispiel 2001:db8:1::/64) und erhalten Netzadresse, letzte Adresse, Adressanzahl sowie komprimierte/expandierte Form nach RFC 5952. Warnt, wenn das Präfix nicht nibble-ausgerichtet ist. Deckt /64-LAN, /127 Punkt-zu-Punkt und /128-Host ab. Rechnung auf Ihrem Gerät, nichts wird auf einen Server hochgeladen.',
	tool_ipv6_cidr_article:
		'Macht aus einem IPv6-CIDR einen Netzbereich und kanonischen Kompakttext. Kein Nibble-Alignment ist nur ein Hinweis.',
	tool_ipv6_cidr_calculate: 'Berechnen',
	tool_ipv6_cidr_sample: 'Beispiel laden',
	tool_ipv6_cidr_clear: 'Leeren',
	tool_ipv6_cidr_copy: 'Felder kopieren',
	tool_ipv6_cidr_copy_done: 'Kopiert',
	tool_ipv6_cidr_input_label: 'IPv6-CIDR',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: 'Ergebnis',
	tool_ipv6_cidr_lbl_network: 'Netz (komprimiert)',
	tool_ipv6_cidr_lbl_network_exp: 'Netz (expandiert)',
	tool_ipv6_cidr_lbl_last: 'Letzte Adresse (komprimiert)',
	tool_ipv6_cidr_lbl_last_exp: 'Letzte Adresse (expandiert)',
	tool_ipv6_cidr_lbl_prefix: 'Präfixlänge',
	tool_ipv6_cidr_lbl_count: 'Adressanzahl',
	tool_ipv6_cidr_lbl_nibble: 'Nibble-ausgerichtet',
	tool_ipv6_cidr_nibble_yes: 'Ja — die Länge ist ein Vielfaches von 4.',
	tool_ipv6_cidr_nibble_no:
		'Nein — dieses Präfix liegt nicht auf einer 4-Bit-Grenze. Reverse-DNS (ip6.arpa) und viele ISPs erwarten Schritte /4, /8, … /64, /68.',
	tool_ipv6_cidr_note_64: '/64 ist das übliche LAN-Präfix.',
	tool_ipv6_cidr_note_127: '/127 ist Punkt-zu-Punkt (RFC 6164): zwei Adressen.',
	tool_ipv6_cidr_note_128: '/128 ist ein einzelner Host.',
	tool_ipv6_cidr_err_empty: 'Geben Sie ein IPv6-CIDR wie 2001:db8:1::/64 ein.',
	tool_ipv6_cidr_err_parse: 'Konnte das nicht als IPv6-Adresse oder CIDR lesen.',
	tool_ipv6_cidr_err_prefix: 'Die Präfixlänge muss eine ganze Zahl von 0 bis 128 sein.',
	tool_ipv6_cidr_err_ipv4: 'Diese Seite ist nur IPv6. Für IPv4 nutzen Sie CIDR zu IP-Bereich.',
	tool_ipv6_cidr_how_title: 'So funktioniert es',
	tool_ipv6_cidr_how_body:
		'Der IPv6-CIDR-Rechner macht aus einem Präfix Netzbereich und komprimierte Notation. Das ist kein IPv6-Erreichbarkeitstest.',
	tool_ipv6_cidr_how_item_1: 'Stellen Sie klar: Sie berechnen den Bereich eines IPv6-CIDR, Sie testen keine Verbindung.',
	tool_ipv6_cidr_how_item_2: 'Fügen Sie ein IPv6-CIDR wie 2001:db8:1::/64 ein (oder Beispiel laden).',
	tool_ipv6_cidr_how_item_3: 'Lesen Sie Netz und letzte Adresse (komprimiert und expandiert) und kopieren Sie das Nötige.',
	tool_ipv6_cidr_how_item_4: 'Ist die Länge kein Vielfaches von 4, lesen Sie den Nibble-Hinweis.',
	tool_ipv6_cidr_how_item_5: 'Für IPv4: CIDR zu IP-Bereich; zum Zusammenfassen von Start–Ende: IP range to CIDR.',
	tool_ipv6_cidr_formula_title: 'Formel',
	tool_ipv6_cidr_formula_body:
		'IPv6-Text parsen (einmal „::“). Maske = 2^128 − 2^(128−Präfix). Netz = Adresse AND Maske. Letzte = Netz OR NOT Maske. Kompression nach RFC 5952.',
	tool_ipv6_cidr_formula_item_1: 'IPv4-Literale und Präfixe außerhalb 0–128 ablehnen.',
	tool_ipv6_cidr_formula_item_2: 'AND/OR auf 128 Bit für Netz und letzte Adresse.',
	tool_ipv6_cidr_formula_item_3: 'Sondergrößen: /128 → 1; /127 → 2 (RFC 6164); /64 → 2^64.',
	tool_ipv6_cidr_formula_item_4: 'Nibble-Alignment: Präfix modulo 4 = 0. Andere Längen rechnen mit Hinweis.',
	tool_ipv6_cidr_example_title: 'Beispiel',
	tool_ipv6_cidr_example:
		'Eingabe: 2001:db8:1::/64. Ausgabe: Netz 2001:db8:1:: (expandiert 2001:0db8:0001:0000:0000:0000:0000:0000), letzte 2001:db8:1:0:ffff:ffff:ffff:ffff, Anzahl 2^64, nibble-ausgerichtet ja.',
	tool_ipv6_cidr_usecases_title: 'Wann das hilft',
	tool_ipv6_cidr_usecase_1: 'Ein Büro-LAN als /64 planen und das komprimierte Netz in die Router-Config kopieren.',
	tool_ipv6_cidr_usecase_2: 'Eine Punkt-zu-Punkt-Strecke prüfen, die /127 sein sollte (RFC 6164).',
	tool_ipv6_cidr_usecase_3: 'Dokumentationspräfixe wie 2001:db8::/32 vor einem Screenshot kanonisch komprimieren.',
	tool_ipv6_cidr_faq_q1: 'Was heißt „nicht nibble-ausgerichtet“?',
	tool_ipv6_cidr_faq_a1:
		'IPv6-Reverse-DNS und viele Zuteilungen laufen in 4-Bit-Schritten. Ein /67 ist trotzdem ein gültiger Bereich, aber ip6.arpa und manche ISP erwarten Nibble-Schritte. Hier sehen Sie den Bereich plus Hinweis.',
	tool_ipv6_cidr_faq_q2: 'Worin unterscheiden sich /64, /127 und /128?',
	tool_ipv6_cidr_faq_a2:
		'/64 ist das übliche LAN. /127 sind zwei Punkt-zu-Punkt-Adressen (RFC 6164). /128 ist ein Host. Das Panel vermerkt das beim Einfügen.',
	tool_ipv6_cidr_faq_q3: 'Ist das dasselbe wie IPv6-CIDR-Notation nachschlagen?',
	tool_ipv6_cidr_faq_a3:
		'Ja für die Aufgabe, Notation in Netz/letzte Adresse und kanonischen Text zu verwandeln. Eine Volltabelle aller IPv6-Präfixe gibt es hier nicht.',
	tool_ipv6_cidr_faq_q4: 'Wo expandiere ich ein IPv4-CIDR?',
	tool_ipv6_cidr_faq_a4: 'Werkzeug CIDR zu IP-Bereich. Diese Seite lehnt IPv4-Literale absichtlich ab.',
	tool_ipv6_cidr_faq_q5: 'Prüft das, ob IPv6 in meinem Netz funktioniert?',
	tool_ipv6_cidr_faq_a5: 'Nein. Erreichbarkeitstests sind eine andere Aufgabe. Hier nur Präfixarithmetik.',
	tool_ipv6_cidr_faq_q6: 'Werden Adressen hochgeladen?',
	tool_ipv6_cidr_faq_a6: 'Nein. Sie bleiben auf Ihrem Gerät, in diesem Tab, und werden nicht auf einen Server hochgeladen.',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — IPv6-Adressarchitektur',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — Empfohlene Textdarstellung von IPv6',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — 127-Bit-Präfixe auf Router-zu-Router-Strecken',
	tool_ipv6_cidr_disclaimer:
		'Ergebnisse folgen üblicher IPv6-CIDR-Arithmetik (RFC 4291, 5952, 6164). Das ist keine Routing-Beratung; prüfen Sie kritische Änderungen im eigenen Labor.',
};

export default de;
