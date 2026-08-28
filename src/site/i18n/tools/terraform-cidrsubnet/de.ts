/**
 * i18n tool shard (terraform-cidrsubnet / de).
 * Lokale Suche: terraform cidrsubnet, cidrsubnet berechnen, Terraform Subnetz.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — Kindes-CIDR wie von Terraform ermittelt',
	tool_terraform_cidrsubnet_desc:
		'Terraform cidrsubnet berechnen. Beispiel: 10.1.2.0/24, 4, 15 → 10.1.2.240/28. Bleibt auf dem Gerät, ohne Server-Upload.',
	tool_terraform_cidrsubnet_description:
		'Berechnen Sie terraform cidrsubnet: Elternpräfix, newbits und netnum ergeben das Kind-CIDR. Beispiel: cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28. cidrhost und cidrnetmask liegen auf derselben Seite. Die Werte bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet liefert ein Kind-Netzpräfix, keine Host-IP. newbits sind zusätzliche Präfixbits, nicht „vier Subnetze“. netnum beginnt bei 0. cidrhost liefert den Host; cidrnetmask gibt es nur für IPv4. Die Rechnung läuft im Browser nach HashiCorp-Regeln.',
	tool_terraform_cidrsubnet_evaluate: 'Berechnen',
	tool_terraform_cidrsubnet_sample: 'Beispiel laden',
	tool_terraform_cidrsubnet_clear: 'Leeren',
	tool_terraform_cidrsubnet_copy_cidr: 'CIDR kopieren',
	tool_terraform_cidrsubnet_copy_hcl: 'HCL kopieren',
	tool_terraform_cidrsubnet_copy_ip: 'Adresse kopieren',
	tool_terraform_cidrsubnet_copy_done: 'Kopiert',
	tool_terraform_cidrsubnet_prefix_label: 'Elternpräfix',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: 'Kind-CIDR',
	tool_terraform_cidrsubnet_result_hcl_label: 'HCL-Aufruf',
	tool_terraform_cidrsubnet_result_len_label: 'Neue Präfixlänge',
	tool_terraform_cidrsubnet_result_range_label: 'Erlaubtes netnum',
	tool_terraform_cidrsubnet_result_bits_label: 'Bitaufteilung',
	tool_terraform_cidrsubnet_table_title: 'Alle netnum für dieses newbits',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: 'Weitere Funktionen',
	tool_terraform_cidrsubnet_host_prefix_label: 'cidrhost-Präfix',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'cidrhost berechnen',
	tool_terraform_cidrsubnet_host_result_label: 'Hostadresse',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'cidrnetmask-Präfix (nur IPv4)',
	tool_terraform_cidrsubnet_netmask_evaluate: 'cidrnetmask berechnen',
	tool_terraform_cidrsubnet_netmask_result_label: 'Netzmaske',
	tool_terraform_cidrsubnet_err_empty: 'Bitte CIDR-Präfix sowie ganzzahlige newbits und netnum angeben.',
	tool_terraform_cidrsubnet_err_prefix: 'Das ist kein CIDR-Präfix (Adresse/Länge, IPv4 oder IPv6).',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits muss eine ganze Zahl ≥ 0 sein; die Gesamtlänge darf 32 (IPv4) bzw. 128 (IPv6) nicht überschreiten.',
	tool_terraform_cidrsubnet_err_netnum:
		'Bei newbits={nb} passen nur netnum 0–{max}; {nn} passt nicht — Terraform würde ebenfalls ablehnen.',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum passt nicht in die restlichen Hostbits.',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask ist nur IPv4. Für IPv6 cidrsubnet oder cidrhost nutzen.',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'Eltern /{old} plus {nb} Bits → /{neu}. netnum {nn} füllt die Extra-Bits; restliche Hostbits: {hb}.',
	tool_terraform_cidrsubnet_how_title: 'So funktioniert’s',
	tool_terraform_cidrsubnet_how_body:
		'Übernehmen Sie die drei HCL-Argumente und prüfen Sie das Kind-CIDR vor dem Apply.',
	tool_terraform_cidrsubnet_how_item_1: 'cidrsubnet liefert ein Subnetzpräfix. Die Host-IP kommt von cidrhost.',
	tool_terraform_cidrsubnet_how_item_2: 'Eltern-CIDR aus der Terraform-Variable einfügen (z. B. 10.1.2.0/24).',
	tool_terraform_cidrsubnet_how_item_3: 'newbits (zusätzliche Präfixbits) und netnum (Nummer ab 0) setzen.',
	tool_terraform_cidrsubnet_how_item_4: 'Kind-CIDR ablesen, HCL kopieren oder mit terraform console vergleichen.',
	tool_terraform_cidrsubnet_how_item_5: 'Passt netnum nicht in newbits, erscheint ein Fehler — Terraform lehnt dieselben Werte ab.',
	tool_terraform_cidrsubnet_formula_title: 'Berechnung',
	tool_terraform_cidrsubnet_formula_body:
		'Zuerst Hostbits des Elternpräfix auf null, dann netnum in die Extra-Präfixbits. Führende Nullen in IPv4-Oktetten gelten dezimal, wie HashiCorp beschreibt.',
	tool_terraform_cidrsubnet_formula_item_1: 'neue_Länge = Elternlänge + newbits (IPv4 ≤ 32, IPv6 ≤ 128).',
	tool_terraform_cidrsubnet_formula_item_2: '0 ≤ netnum < 2^newbits.',
	tool_terraform_cidrsubnet_formula_item_3: 'Netzadresse ODER (netnum um die restlichen Hostbits verschoben).',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost schreibt hostnum in die Hostbits (negativ vom Ende). cidrnetmask ist die gepunktete IPv4-Maske.',
	tool_terraform_cidrsubnet_example_title: 'Beispiel',
	tool_terraform_cidrsubnet_example:
		'Eingabe: 10.1.2.0/24, newbits 4, netnum 15. Ausgabe: 10.1.2.240/28. Vier Extra-Bits fassen 0–15; 15 füllt das hohe Nibble des letzten Oktetts (240).',
	tool_terraform_cidrsubnet_usecases_title: 'Wofür das hilft',
	tool_terraform_cidrsubnet_usecase_1:
		'VPC-Subnetze vor dem Apply prüfen: cidrsubnet(var.vpc_cidr, 8, count.index) — AZ0 ist netnum 0.',
	tool_terraform_cidrsubnet_usecase_2:
		'Das offizielle Beispiel 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28 nachrechnen, danach cidrhost auf diesem /28 (Hosts 1 und 14).',
	tool_terraform_cidrsubnet_usecase_3:
		'IPv6-ULA zerlegen: cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72.',
	tool_terraform_cidrsubnet_faq_q1: 'Werden Präfixe auf den Server geladen?',
	tool_terraform_cidrsubnet_faq_a1:
		'Nein. Sie bleiben auf Ihrem Gerät in diesem Tab und werden nicht auf einen Server hochgeladen. Für eine bestimmte CLI-Version terraform console nutzen.',
	tool_terraform_cidrsubnet_faq_q2: 'Heißt newbits=4 vier Subnetze?',
	tool_terraform_cidrsubnet_faq_a2:
		'Nein. Es sind vier zusätzliche Präfixbits: 16 netnum (0–15), das Kind ist vier Bits länger (/24 → /28).',
	tool_terraform_cidrsubnet_faq_q3: 'Warum scheitert netnum 16 bei newbits 4?',
	tool_terraform_cidrsubnet_faq_a3:
		'Vier Bits speichern nur 0–15. Terraform wrappt nicht, sondern bricht ab. Hier ebenso, damit kein CIDR ins HCL wandert, das nie applied.',
	tool_terraform_cidrsubnet_faq_q4: 'Worin unterscheiden sich cidrhost und cidrsubnet?',
	tool_terraform_cidrsubnet_faq_a4:
		'cidrsubnet liefert Präfix plus Länge. cidrhost eine Hostadresse. hostnum 0 ist die Netzadresse; negativ zählt vom Ende (cidrhost("10.0.0.0/8", -2) → 10.255.255.254).',
	tool_terraform_cidrsubnet_faq_q5: 'Warum lehnt cidrnetmask IPv6 ab?',
	tool_terraform_cidrsubnet_faq_a5:
		'Die HashiCorp-Funktion ist nur IPv4 und liefert gepunktete Masken wie 255.255.255.0. Bei IPv6 die Präfixlänge behalten und cidrsubnet oder cidrhost nutzen.',
	tool_terraform_cidrsubnet_faq_q6: 'Wertet ihr cidrsubnets oder das Modul hashicorp/subnets/cidr aus?',
	tool_terraform_cidrsubnet_faq_a6:
		'Nein. cidrsubnets (Plural) vergibt mehrere aufeinanderfolgende Präfixe ab null. Das Registry-Modul ist ein anderes Hilfsmittel. Hier jeweils ein Aufruf.',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — Funktion cidrsubnet',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — Funktion cidrhost',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — Funktion cidrnetmask',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — CIDR-Schreibweise',
	tool_terraform_cidrsubnet_disclaimer:
		'Ziel ist die HashiCorp-Semantik von cidrsubnet, cidrhost und cidrnetmask. Das ersetzt terraform console nicht; bei Versionsunterschieden gilt die offizielle Doku.',
};

export default de;
