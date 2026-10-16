/**
 * i18n 工具分片（how-to-calculate-ohms-law / de）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。按德语检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_ohms_law_title: 'Ohmsches Gesetz Rechner — Spannung Strom Widerstand und Leistung',
	tool_ohms_law_description:
		'Mit dem ohmschen Gesetz Spannung, Strom oder Widerstand berechnen und die Leistung P=VI sehen. Beispiel: V=12, I=2 → R=6 Ω und P=24 W. Nur ideale DC-Formeln — Lernrechnung im Browser, keine Verdrahtungs- oder Sicherheitshinweise.',
	tool_ohms_law_article:
		'Wählen Sie die gesuchte Größe, geben Sie die beiden bekannten Werte ein und erhalten Sie die Unbekannte plus Leistung mit Rechenschritten.',
	tool_ohms_law_desc:
		'Ohmsches Gesetz V=IR mit Modi für V, I oder R sowie Leistung. Nur ideale DC-Lernrechnung.',

	tool_ohms_law_safety_banner:
		'Nur zu Lernzwecken. Ideale DC-Arithmetik nach dem ohmschen Gesetz — keine Verdrahtungsanleitung, keine Produktnennwerte und keine elektrische Sicherheitsberatung.',
	tool_ohms_law_hint:
		'Lösungsmodus wählen, dann die beiden bekannten Werte eingeben. Strom darf beim Lösen nach R nicht null sein. Widerstand muss größer als null sein, wenn I oder V aus R berechnet wird.',
	tool_ohms_law_mode_label: 'Lösen nach',
	tool_ohms_law_mode_r: 'Widerstand R (aus V und I)',
	tool_ohms_law_mode_v: 'Spannung V (aus I und R)',
	tool_ohms_law_mode_i: 'Strom I (aus V und R)',
	tool_ohms_law_V_label: 'Spannung V (Volt)',
	tool_ohms_law_V_ph: 'z. B. 12',
	tool_ohms_law_I_label: 'Strom I (Ampere)',
	tool_ohms_law_I_ph: 'z. B. 2',
	tool_ohms_law_R_label: 'Widerstand R (Ohm)',
	tool_ohms_law_R_ph: 'z. B. 6',
	tool_ohms_law_calculate: 'Berechnen',
	tool_ohms_law_sample: 'Beispiel laden',
	tool_ohms_law_clear: 'Leeren',
	tool_ohms_law_primary_label: 'Ergebnis',
	tool_ohms_law_rOut_label: 'Widerstand R',
	tool_ohms_law_vOut_label: 'Spannung V',
	tool_ohms_law_iOut_label: 'Strom I',
	tool_ohms_law_pOut_label: 'Leistung P',
	tool_ohms_law_steps_title: 'Rechenschritte',
	tool_ohms_law_step_r_tpl: 'R = V ÷ I = {v} ÷ {i} = {r} Ω.',
	tool_ohms_law_step_v_tpl: 'V = I × R = {i} × {r} = {v} V.',
	tool_ohms_law_step_i_tpl: 'I = V ÷ R = {v} ÷ {r} = {i} A.',
	tool_ohms_law_step_p_tpl: 'P = V × I = {v} × {i} = {p} W.',
	tool_ohms_law_result_note:
		'Nur ideale DC-Form. Einheiten konsistent halten (V, A → Ω und W). Wechselstromimpedanz und nichtohmische Bauteile werden nicht modelliert.',
	tool_ohms_law_err_generic:
		'Endliche positive Werte für die bekannten Felder eingeben. Strom ≠ 0 beim Lösen nach R; Widerstand > 0 beim Lösen nach V oder I.',

	tool_ohms_law_how_title: 'So nutzen Sie den Rechner zum ohmschen Gesetz',
	tool_ohms_law_how_body:
		'Wählen Sie, ob R, V oder I gesucht wird. Die beiden anderen Größen eingeben und berechnen — Unbekannte und Leistung erscheinen mit Schritten. „Beispiel laden“ wechselt durch die Modi.',
	tool_ohms_law_how_item_1: 'Lösungsmodus wählen: R aus V&I, V aus I&R oder I aus V&R.',
	tool_ohms_law_how_item_2: 'Die beiden bekannten Werte mit einheitlichen Einheiten eintragen.',
	tool_ohms_law_how_item_3: 'Auf Berechnen klicken, um Unbekannte, Leistung und Schritte zu sehen.',
	tool_ohms_law_how_item_4: 'Mit Beispiel laden durch V=12/I=2, I=2/R=6 und V=12/R=6 wechseln.',

	tool_ohms_law_why_choose_title: 'Was dieser Rechner zum ohmschen Gesetz liefert',
	tool_ohms_law_why_choose_item_1: 'Drei Lösungsmodi für die Umstellungen von V = I·R.',
	tool_ohms_law_why_choose_item_2: 'Leistung P = V·I direkt neben der Unbekannten.',
	tool_ohms_law_why_choose_item_3: 'Schritte, die Ihre Zahlen in die Formeln einsetzen.',
	tool_ohms_law_why_choose_item_4: 'Beispielrotation für jeden Modus.',
	tool_ohms_law_why_choose_item_5: 'Klarer Lernrahmen: nur ideale DC — keine Verdrahtungstipps.',

	tool_ohms_law_formula_title: 'Formeln zum ohmschen Gesetz',
	tool_ohms_law_formula_body:
		'Bei einem idealen Widerstand unter Gleichstrom hängen Spannung, Strom und Widerstand über V = I·R zusammen. Die Leistung folgt aus P = V·I.',
	tool_ohms_law_formula_item_1: 'R = V ÷ I, wenn der Strom nicht null ist.',
	tool_ohms_law_formula_item_2: 'V = I × R.',
	tool_ohms_law_formula_item_3: 'I = V ÷ R, wenn der Widerstand größer als null ist.',
	tool_ohms_law_formula_item_4: 'P = V × I (ideal auch P = I²R oder P = V²/R).',
	tool_ohms_law_formula_item_5: 'Diese Seite nutzt nur ideale DC — keine AC-Impedanz und kein Sicherheitsdesign.',

	tool_ohms_law_example_title: 'Durchgerechnete Beispiele',
	tool_ohms_law_example:
		'Beispiel im R-Modus: V=12, I=2 → R=6 Ω, P=24 W. V-Modus mit I=2, R=6 → V=12. I-Modus mit V=12, R=6 → I=2.',

	tool_ohms_law_usecases_title: 'Wann ein Rechner zum ohmschen Gesetz hilft',
	tool_ohms_law_usecase_1: 'Elektronik-Hausaufgaben: V = I·R nach der fehlenden Größe umstellen.',
	tool_ohms_law_usecase_2: 'Schnelle ideale DC-Kontrolle von Widerstand oder Leistung aus Messwerten.',
	tool_ohms_law_usecase_3: 'Mit verwandten Physikseiten (Dichte, Geschwindigkeit) Einheiten disziplinieren.',
	tool_ohms_law_usecase_4: 'Leistung neben der gelösten Größe sehen, ohne extra Leistungsrechner.',

	tool_ohms_law_faq_q1: 'Was besagt das ohmsche Gesetz?',
	tool_ohms_law_faq_a1: 'Für einen idealen Widerstand unter DC gilt V = I·R. Diese Seite zeigt zusätzlich P = V·I.',
	tool_ohms_law_faq_q2: 'Kann ich nach Spannung oder Strom lösen?',
	tool_ohms_law_faq_a2: 'Ja. Über „Lösen nach“ V, I oder R wählen.',
	tool_ohms_law_faq_q3: 'Modelliert der Rechner Wechselstromkreise?',
	tool_ohms_law_faq_a3: 'Nein. Nur ideale DC-Formeln — Impedanz und Phase fehlen.',
	tool_ohms_law_faq_q4: 'Was passiert bei Strom null, wenn R gesucht wird?',
	tool_ohms_law_faq_a4: 'R = V/I ist bei I = 0 undefiniert. Die Seite lehnt diesen Fall ab.',
	tool_ohms_law_faq_q5: 'Ist das Verdrahtungs- oder Sicherheitsberatung?',
	tool_ohms_law_faq_a5: 'Nein. Nur Lernarithmetik — keine Produktnennwerte und keine elektrische Sicherheitsberatung.',

	tool_ohms_law_disclaimer:
		'Nur Lernrechnung zum ohmschen Gesetz — keine fachliche, Verdrahtungs- oder elektrische Sicherheitsberatung.',
	tool_ohms_law_references: 'Standard-Lehrbuchquellen zu ohmschem Gesetz und elektrischer Leistung.',
	tool_ohms_law_ref_a_label: 'Wikipedia — Ohmsches Gesetz',
	tool_ohms_law_ref_b_label: 'Wikipedia — Elektrische Leistung',
};

export default de;
