/**
 * i18n tool shard (private-cidr-ranges / de).
 * Local search: private cidr bereiche / private ip bereiche cidr.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'Private CIDR-Bereiche — Prüfen, ob IP oder Präfix privat oder special-use ist',
	tool_private_cidr_ranges_desc:
		'Private CIDR-Bereiche: RFC1918, CGNAT und ULA. Beispiel: 100.64.1.10 → gemeinsamer CGNAT-Raum.',
	tool_private_cidr_ranges_description:
		'Private CIDR-Bereiche: IP oder CIDR einfügen, um private IP-Bereiche RFC1918, CGNAT (100.64/10), ULA IPv6 und Dokumentationsblöcke zu sehen (Beispiel: 100.64.1.10 → gemeinsamer Raum). Klickbare Referenztabelle mit Hinweis zu Tailscale im CGNAT-Raum. Die Prüfung bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
	tool_private_cidr_ranges_article:
		'Adresse oder CIDR einfügen, um private oder special-use Präfixe abzugleichen (RFC1918, CGNAT, Link-local, Loopback, Dokumentation, ULA IPv6). Zeile in der Tabelle anklicken, um dieses Präfix zu laden. Diese Seite expandiert keine Host-Listen.',
	tool_private_cidr_ranges_check: 'Prüfen',
	tool_private_cidr_ranges_sample: 'Beispiel laden',
	tool_private_cidr_ranges_clear: 'Leeren',
	tool_private_cidr_ranges_copy: 'Zusammenfassung kopieren',
	tool_private_cidr_ranges_copy_done: 'Kopiert',
	tool_private_cidr_ranges_input_label: 'IP-Adresse oder CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 oder 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'Alle',
	tool_private_cidr_ranges_filter_v4: 'IPv4-Tabelle',
	tool_private_cidr_ranges_filter_v6: 'IPv6-Tabelle',
	tool_private_cidr_ranges_result_label: 'Treffer',
	tool_private_cidr_ranges_table_title: 'Referenztabelle (Zeile anklicken)',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: 'Name',
	tool_private_cidr_ranges_col_family: 'Familie',
	tool_private_cidr_ranges_col_spec: 'Spezifikation',
	tool_private_cidr_ranges_no_match:
		'Nicht in der eingebauten Privat-/Special-use-Liste (evtl. globaler Unicast oder anderer Raum).',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale und andere Produkte nutzen oft diesen CGNAT-Raum (100.64.0.0/10).',
	tool_private_cidr_ranges_err_empty: 'IPv4-/IPv6-Adresse oder CIDR eingeben.',
	tool_private_cidr_ranges_err_parse: 'Konnte nicht als IP-Adresse oder CIDR gelesen werden.',
	tool_private_cidr_ranges_name_rfc1918_10: 'RFC1918 privat',
	tool_private_cidr_ranges_name_rfc1918_172: 'RFC1918 privat',
	tool_private_cidr_ranges_name_rfc1918_192: 'RFC1918 privat',
	tool_private_cidr_ranges_name_cgnat: 'CGNAT gemeinsamer Adressraum',
	tool_private_cidr_ranges_name_loopback: 'Loopback',
	tool_private_cidr_ranges_name_linklocal_v4: 'Link-local',
	tool_private_cidr_ranges_name_doc_testnet1: 'Dokumentation (TEST-NET-1)',
	tool_private_cidr_ranges_name_doc_testnet2: 'Dokumentation (TEST-NET-2)',
	tool_private_cidr_ranges_name_doc_testnet3: 'Dokumentation (TEST-NET-3)',
	tool_private_cidr_ranges_name_ula: 'IPv6 ULA',
	tool_private_cidr_ranges_name_linklocal_v6: 'IPv6 Link-local',
	tool_private_cidr_ranges_name_doc_v6: 'IPv6 Dokumentation',
	tool_private_cidr_ranges_note_rfc1918_10: 'Private Nutzung — 10.0.0.0/8 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_172: 'Private Nutzung — 172.16.0.0/12 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_192: 'Private Nutzung — 192.168.0.0/16 (RFC 1918).',
	tool_private_cidr_ranges_note_cgnat: 'Gemeinsamer Raum für Carrier-grade NAT (RFC 6598). Nicht RFC1918.',
	tool_private_cidr_ranges_note_loopback: 'Host-Loopback — 127.0.0.0/8.',
	tool_private_cidr_ranges_note_linklocal_v4: 'Link-local APIPA — 169.254.0.0/16.',
	tool_private_cidr_ranges_note_doc_testnet1: 'Nur Dokumentation — nicht in Produktion (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet2: 'Nur Dokumentation — nicht in Produktion (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet3: 'Nur Dokumentation — nicht in Produktion (RFC 5737).',
	tool_private_cidr_ranges_note_ula: 'Unique local addresses — fc00::/7 (RFC 4193).',
	tool_private_cidr_ranges_note_linklocal_v6: 'IPv6 Link-local — fe80::/10.',
	tool_private_cidr_ranges_note_doc_v6: 'Dokumentationspräfix — 2001:db8::/32.',
	tool_private_cidr_ranges_how_title: 'So funktioniert es',
	tool_private_cidr_ranges_how_body:
		'Sie prüfen, ob eine Adresse in einem privaten oder special-use CIDR liegt (RFC1918, CGNAT, ULA, Dokumentation…), ohne Hosts zu zählen. Adresse einfügen, Treffer lesen oder Referenztabelle anklicken.',
	tool_private_cidr_ranges_how_item_1:
		'Klären Sie: Es geht um Klassifikation privater/special-use Blöcke — nicht um Host-Listen.',
	tool_private_cidr_ranges_how_item_2: 'IPv4-/IPv6-Adresse oder CIDR einfügen (Beispiel 100.64.1.10).',
	tool_private_cidr_ranges_how_item_3:
		'Kategorie, CIDR und RFC-Hinweis lesen (plus Tailscale-Tipp bei CGNAT-Treffer).',
	tool_private_cidr_ranges_how_item_4: 'Optional Zeile in der Referenztabelle anklicken, um dieses Präfix zu prüfen.',
	tool_private_cidr_ranges_how_item_5:
		'Ohne Treffer gilt die Adresse außerhalb dieser Liste — vor «privat» noch verifizieren.',
	tool_private_cidr_ranges_formula_title: 'Regeln',
	tool_private_cidr_ranges_formula_body:
		'Eingabe als Adresse oder Präfix parsen, dann Mitgliedschaft in der eingebauten Tabelle testen. Längere (spezifischere) Treffer stehen zuerst.',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 nutzt 32-Bit-Ganzzahlen; IPv6 128-Bit-Werte. Familien mischen sich nie.',
	tool_private_cidr_ranges_formula_item_2: 'Bei reiner Adresse: jedes Tabellen-CIDR treffen, das sie enthält.',
	tool_private_cidr_ranges_formula_item_3:
		'Bei CIDR-Eingabe: Tabelleneinträge treffen, die dieses Präfix vollständig enthalten (Teilmengentest).',
	tool_private_cidr_ranges_formula_item_4:
		'Treffer nach Präfixlänge absteigend sortieren — spezifischster Block zuerst.',
	tool_private_cidr_ranges_example_title: 'Beispiel',
	tool_private_cidr_ranges_example:
		'Eingabe: 100.64.1.10. Ausgabe: CGNAT gemeinsamer Adressraum 100.64.0.0/10 (RFC 6598), mit Hinweis, dass Tailscale und ähnliche Produkte diesen Raum oft nutzen. Eingabe 10.0.0.5 trifft RFC1918 10.0.0.0/8.',
	tool_private_cidr_ranges_usecases_title: 'Wann es hilft',
	tool_private_cidr_ranges_usecase_1:
		'VPC- oder Lab-Block wählen und bestätigen, dass es echtes RFC1918 ist, bevor Firewall-Regeln geöffnet werden.',
	tool_private_cidr_ranges_usecase_2:
		'100.x-Adressen sehen und CGNAT-/Tailscale-Raum von RFC1918 privaten Bereichen trennen.',
	tool_private_cidr_ranges_usecase_3:
		'IPv6 ULA oder 2001:db8-Dokumentationsadresse prüfen, bevor sie als Produktionsrouting gilt.',
	tool_private_cidr_ranges_faq_q1: 'Werden Adressen hochgeladen oder Hosts expandiert?',
	tool_private_cidr_ranges_faq_a1:
		'Nein — keine Host- oder Broadcast-Expansion hier; das gehört in ein CIDR-to-range-Tool. Die Prüfung bleibt auf dem Gerät und wird nicht auf einen Server hochgeladen.',
	tool_private_cidr_ranges_faq_q2: 'Was ist IPv6 ULA (fc00::/7)?',
	tool_private_cidr_ranges_faq_a2:
		'Unique local addresses für lokale Netze. Kein globales Internet-Unicast; erwarten Sie kein Routing im öffentlichen Internet.',
	tool_private_cidr_ranges_faq_q3: 'Welche drei RFC1918 privaten CIDR-Bereiche gibt es?',
	tool_private_cidr_ranges_faq_a3:
		'10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16 — die klassischen privaten IP-Bereiche in CIDR-Form.',
	tool_private_cidr_ranges_faq_q4: 'Ist 100.64.0.0/10 «privat»? Was ist mit Tailscale?',
	tool_private_cidr_ranges_faq_a4:
		'Es ist gemeinsamer Adressraum für Carrier-grade NAT (RFC 6598), nicht RFC1918. Tailscale und andere Overlays nutzen oft dieses CGNAT-CIDR; diese Seite labelt nur den Raum — keine Tailscale-Konsole.',
	tool_private_cidr_ranges_faq_q5: 'Warum Dokumentationspräfixe markieren?',
	tool_private_cidr_ranges_faq_a5:
		'Blöcke wie 192.0.2.0/24 und 2001:db8::/32 sind für Beispiele und Docs reserviert. Produktionsnutzung bricht Konnektivitätserwartungen.',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — Address Allocation for Private Internets',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — IANA-Reserved IPv4 Prefix for Shared Address Space',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — Unique Local IPv6 Unicast Addresses',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — IPv4 Address Blocks Reserved for Documentation',
	tool_private_cidr_ranges_disclaimer:
		'Treffer folgen veröffentlichten RFCs für private und special-use Räume. Kein Routing- oder Firewall-Rat; kritische Änderungen im eigenen Lab prüfen.',
};

export default de;
