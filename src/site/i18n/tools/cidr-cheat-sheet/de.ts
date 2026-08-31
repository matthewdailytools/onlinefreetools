/**
 * i18n tool shard (cidr-cheat-sheet / de).
 * Suchen: cidr spickzettel / cidr tabelle / was ist cidr.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'CIDR-Spickzettel — Präfix anklicken für Maske und Hosts',
	tool_cidr_cheat_sheet_desc:
		'CIDR-Spickzettel: /8–/32 klicken für Maske, Wildcard und Hosts. Dieselbe Tabelle wie ein CIDR-Chart. Auf Ihrem Gerät.',
	tool_cidr_cheat_sheet_description:
		'CIDR-Spickzettel: Klicken Sie ein Präfix von /8 bis /32 für Subnetzmaske, Wildcard und nutzbare Hosts. Beispiel: /24 → 255.255.255.0 und 254 nutzbare Hosts. CompTIA-orientierte Spalte und Fußnoten /31 /32. Dieselbe Tabelle wie ein CIDR-Chart. Zum Expandieren eines konkreten Blocks: CIDR zu IP-Bereich. Klicks im Browser, nichts wird auf einen Server hochgeladen.',
	tool_cidr_cheat_sheet_article: 'Klickbare IPv4-Präfixtabelle. Kein Rechner für eine beliebige Hostadresse.',
	tool_cidr_cheat_sheet_sample: 'Beispiel laden',
	tool_cidr_cheat_sheet_clear: 'Markierung lösen',
	tool_cidr_cheat_sheet_jump: 'Anzeigen',
	tool_cidr_cheat_sheet_jump_label: 'Zum Präfix',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: 'Gewähltes Präfix',
	tool_cidr_cheat_sheet_col_prefix: 'Präfix',
	tool_cidr_cheat_sheet_col_mask: 'Maske',
	tool_cidr_cheat_sheet_col_wild: 'Wildcard',
	tool_cidr_cheat_sheet_col_hosts: 'Nutzbare Hosts',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Oft in Tabellen im Network+-Stil',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'Adressen gesamt',
	tool_cidr_cheat_sheet_note_31: '/31: beide Adressen nutzbar (RFC 3021).',
	tool_cidr_cheat_sheet_note_32: '/32: ein Host. Das Netz ist diese Adresse.',
	tool_cidr_cheat_sheet_err_jump: 'Geben Sie ein ganzzahliges Präfix von 8 bis 32 ein.',
	tool_cidr_cheat_sheet_how_title: 'So funktioniert es',
	tool_cidr_cheat_sheet_how_body:
		'Der CIDR-Spickzettel vergleicht Slash-Länge mit Maske und Hosts. Klicken Sie eine Zeile statt eines PDFs.',
	tool_cidr_cheat_sheet_how_item_1: 'Stellen Sie klar: Sie schlagen ein Präfix nach, Sie expandieren keine konkrete IP.',
	tool_cidr_cheat_sheet_how_item_2: 'Klicken Sie /8–/32 oder geben Sie das Präfix ein und Anzeigen (Beispiel wählt /24).',
	tool_cidr_cheat_sheet_how_item_3: 'Lesen Sie Maske, Wildcard, Hosts und die CompTIA-Spalte.',
	tool_cidr_cheat_sheet_how_item_4: 'Bei /31 und /32 die Fußnote lesen: nicht zwei abziehen.',
	tool_cidr_cheat_sheet_how_item_5: 'Um 192.168.1.0/24 zu expandieren, CIDR zu IP-Bereich nutzen.',
	tool_cidr_cheat_sheet_formula_title: 'Regeln',
	tool_cidr_cheat_sheet_formula_body:
		'Maske = 2^32 − 2^(32−n). Wildcard = NICHT der Maske. Hosts: /32 → 1; /31 → 2; sonst 2^(32−n) − 2.',
	tool_cidr_cheat_sheet_formula_item_1: 'Nur IPv4-Präfixe /8 bis /32.',
	tool_cidr_cheat_sheet_formula_item_2: 'Die CompTIA-Spalte ist ein Lerntipp, kein offizielles Curriculum.',
	tool_cidr_cheat_sheet_formula_item_3: 'Fußnoten /31 und /32 haben Vorrang vor „minus zwei“.',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR = Classless Inter-Domain Routing. Veterinär-CIDR ist ein anderes Wort.',
	tool_cidr_cheat_sheet_example_title: 'Beispiel',
	tool_cidr_cheat_sheet_example:
		'/24 wählen. Ausgabe: Maske 255.255.255.0, Wildcard 0.0.0.255, Hosts 254, gesamt 256. Wie das Startbeispiel.',
	tool_cidr_cheat_sheet_usecases_title: 'Wann das hilft',
	tool_cidr_cheat_sheet_usecase_1: '/24 /25 /26 vor einer Network+-Tabellenfrage prüfen.',
	tool_cidr_cheat_sheet_usecase_2: 'Hosts eines /28 prüfen, bevor die ACL geschrieben wird.',
	tool_cidr_cheat_sheet_usecase_3: 'Erklären, dass „Slash 24“ 256 Adressen und Maske 255.255.255.0 bedeutet.',
	tool_cidr_cheat_sheet_faq_q1: 'Was bedeutet CIDR?',
	tool_cidr_cheat_sheet_faq_a1: 'Classless Inter-Domain Routing. Der Slash ist die Länge. Das ist ein Spickzettel, kein Kurs.',
	tool_cidr_cheat_sheet_faq_q2: 'Welche Präfixe in CompTIA-Tabellen?',
	tool_cidr_cheat_sheet_faq_a2: 'Oft /8, /16, /24 und /25–/28, /30. Die Spalte markiert sie; kein offizielles Curriculum.',
	tool_cidr_cheat_sheet_faq_q3: 'Wie zählt man /31 und /32?',
	tool_cidr_cheat_sheet_faq_a3: '/32 ein Host. /31 nach RFC 3021. Andere ziehen zwei ab.',
	tool_cidr_cheat_sheet_faq_q4: 'Ist das das veterinäre CIDR-Implantat?',
	tool_cidr_cheat_sheet_faq_a4: 'Nein. In der Tierhaltung hat CIDR eine andere Bedeutung. Hier nur Netzpräfixe.',
	tool_cidr_cheat_sheet_faq_q5: 'Kann ich 192.168.1.37/24 hier expandieren?',
	tool_cidr_cheat_sheet_faq_a5: 'Nein. Nutzen Sie CIDR zu IP-Bereich.',
	tool_cidr_cheat_sheet_faq_q6: 'Werden Klicks hochgeladen?',
	tool_cidr_cheat_sheet_faq_a6: 'Nein. Sie bleiben auf Ihrem Gerät, in diesem Tab, und werden nicht auf einen Server hochgeladen.',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — klassenloses Inter-Domain-Routing',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — 31-Bit-Präfixe auf Punkt-zu-Punkt-Strecken',
	tool_cidr_cheat_sheet_disclaimer:
		'Zahlen folgen üblicher IPv4-CIDR-Arithmetik. Die CompTIA-Spalte ist ein Lerntipp, kein offizielles Curriculum.',
};

export default de;
