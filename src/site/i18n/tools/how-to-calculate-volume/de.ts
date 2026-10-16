/**
 * i18n 工具分片（how-to-calculate-volume / de）。
 * 体积计算器：Quader、Würfel、Kugel、Zylinder、Kegel；含公式与分步展开。
 */
import type { SiteLangDict } from '../../../types';

/** 德语界面与 SEO 文案（SiteLangDict）。 */
const de: SiteLangDict = {
	tool_volume_title: "Volumenrechner — Rauminhalt mit Formel und Rechenweg",
	tool_volume_description:
		"Volumen berechnen für Quader (L×B×H), Würfel (a³), Kugel (4/3 πr³), Zylinder (πr²h) oder Kegel (⅓ πr²h). Beispiel: Quader 2×3×4 → Volumen 24. Formel und Schrittzeile im Browser — für Hausaufgaben und Verpackungskontrollen, ohne Server-Upload.",
	tool_volume_article:
		"Körper wählen, Maße eingeben und das Volumen mit passender Formel und einer Zeile Rechenweg erhalten — Quader, Würfel, Kugel, Zylinder oder Kegel.",
	tool_volume_desc: "Volumen gängiger Körper mit passender Formel und ausgerechneter Schrittzeile.",

	tool_volume_shape_label: "Körper",
	tool_volume_shape_box: "Quader (rechteckiges Prisma)",
	tool_volume_shape_cube: "Würfel",
	tool_volume_shape_sphere: "Kugel",
	tool_volume_shape_cylinder: "Zylinder",
	tool_volume_shape_cone: "Kegel",
	tool_volume_hint:
		"Positive Längen in derselben Einheit eingeben. Dezimalkomma ist möglich. Das Ergebnis steht in Kubikeinheiten Ihrer Eingabe (z. B. cm³ bei Zentimetern).",
	tool_volume_l_label: "Länge",
	tool_volume_l_ph: "z. B. 2",
	tool_volume_w_label: "Breite",
	tool_volume_w_ph: "z. B. 3",
	tool_volume_h_label: "Höhe",
	tool_volume_h_ph: "z. B. 4",
	tool_volume_radius_label: "Radius",
	tool_volume_radius_ph: "z. B. 3",
	tool_volume_cube_side: "Kantenlänge",
	tool_volume_calculate: "Berechnen",
	tool_volume_sample: "Beispiel laden",
	tool_volume_clear: "Leeren",
	tool_volume_volOut_label: "Volumen",
	tool_volume_steps_title: "Rechenweg",
	tool_volume_row_formula: "Verwendete Formel",
	tool_volume_row_unit: "Einheiten",
	tool_volume_result_note:
		"Alle Eingaben in einer Einheit — das Volumen ist diese Einheit hoch drei. Nur Lehrgeometrie, kein CAD- oder Tankauslegungswerkzeug.",
	tool_volume_err_generic:
		"Bitte positive Maße für den gewählten Körper eingeben (z. B. 2, 3 und 4 für einen Quader).",
	tool_volume_formula_box: "V = L × B × H",
	tool_volume_formula_cube: "V = a³",
	tool_volume_formula_sphere: "V = (4/3) π r³",
	tool_volume_formula_cylinder: "V = π r² h",
	tool_volume_formula_cone: "V = (1/3) π r² h",
	tool_volume_step_box_tpl: "Quader: V = L × B × H = {L} × {W} × {H} = {V}.",
	tool_volume_step_cube_tpl: "Würfel: V = a³ = {a} × {a} × {a} = {V}.",
	tool_volume_step_sphere_tpl: "Kugel: V = (4/3) π r³ = (4/3) × π × {r}³ = (4/3) × π × {r3} = {V}.",
	tool_volume_step_cyl_tpl: "Zylinder: V = π r² h = π × {r}² × {H} = π × {r2} × {H} = {V}.",
	tool_volume_step_cone_tpl: "Kegel: V = (1/3) π r² h = (1/3) × π × {r}² × {H} = (1/3) × π × {r2} × {H} = {V}.",

	tool_volume_how_title: "So nutzen Sie den Volumenrechner",
	tool_volume_how_body:
		"Körper wählen, nur die sichtbaren Felder ausfüllen und auf Berechnen klicken. Beispiel laden wechselt Quader, Würfel, Kugel, Zylinder und Kegel mit bekannten Ergebnissen.",
	tool_volume_how_item_1: "In der Liste Quader, Würfel, Kugel, Zylinder oder Kegel wählen.",
	tool_volume_how_item_2:
		"Die angezeigten positiven Maße eintragen (Länge/Breite/Höhe und/oder Radius).",
	tool_volume_how_item_3: "Auf Berechnen klicken — Volumen, Formel und eine Zeile Rechenweg erscheinen.",
	tool_volume_how_item_4:
		"Mit Beispiel laden durchlaufen: 2×3×4=24, Würfel a=5, Kugel r=3, Zylinder r=2 h=10, Kegel r=3 h=9.",

	tool_volume_why_choose_title: "Warum dieser Volumenrechner",
	tool_volume_why_choose_item_1:
		"Fünf Standardkörper auf einer Seite: Quader, Würfel, Kugel, Zylinder und Kegel.",
	tool_volume_why_choose_item_2:
		"Die exakte Formel steht neben dem Ergebnis — Rechenweg für die Hausaufgabe abschreibbar.",
	tool_volume_why_choose_item_3:
		"Eine Schrittzeile setzt Ihre Zahlen in L×B×H, a³, (4/3)πr³, πr²h oder (1/3)πr²h ein.",
	tool_volume_why_choose_item_4:
		"Felder blenden sich aus, wenn sie nicht passen — kein Radius beim Quader, keine Kantenlänge bei der Kugel.",
	tool_volume_why_choose_item_5:
		"Klare Einheitenhinweise: gleiche Eingabeeinheit → kubische Ausgabe (cm → cm³).",

	tool_volume_formula_title: "Volumenformeln",
	tool_volume_formula_body:
		"Volumen misst, wie viel Raum ein Körper einnimmt. Verwenden Sie die Formel, die zum gewählten Körper passt.",
	tool_volume_formula_item_1: "Quader (Prisma): V = L × B × H. Beispiel: 2 × 3 × 4 = 24.",
	tool_volume_formula_item_2: "Würfel: V = a³. Beispiel: Kante 5 → 125.",
	tool_volume_formula_item_3: "Kugel: V = (4/3) π r³. Beispiel: r = 3 → (4/3)π×27 ≈ 113,097.",
	tool_volume_formula_item_4: "Zylinder: V = π r² h. Beispiel: r = 2, h = 10 → π×4×10 ≈ 125,664.",
	tool_volume_formula_item_5:
		"Kegel: V = (1/3) π r² h. Beispiel: r = 3, h = 9 → (1/3)π×9×9 ≈ 84,823. Ein Kegel hat ein Drittel des Zylinders mit gleicher Grundfläche und Höhe.",

	tool_volume_example_title: "Ausgerechnete Beispiele",
	tool_volume_example:
		"Beispiel laden startet mit Quader 2×3×4 → V = 24. Danach Würfel Kante 5 → 125. Kugel r=3 → ca. 113,1. Zylinder r=2, h=10 → ca. 125,7. Kegel r=3, h=9 → ca. 84,8. Alle Maße in einer Einheit halten.",

	tool_volume_usecases_title: "Wann ein Volumenrechner hilft",
	tool_volume_usecase_1:
		"Hausaufgaben: Volumen von Quader, Kugel oder Zylinder finden und die Formelzeile übernehmen.",
	tool_volume_usecase_2:
		"Verpackungsskizzen: abschätzen, wie viel Raum Quader oder Zylinder einnehmen, bevor Material bestellt wird.",
	tool_volume_usecase_3:
		"Körper vergleichen: sehen, dass ein Kegel ein Drittel des Zylinders mit gleicher Grundfläche und Höhe fasst.",
	tool_volume_usecase_4:
		"Schnellcheck: Lehrbuchwert für a³ oder (4/3)πr³ prüfen, ohne Tabellenkalkulation.",

	tool_volume_faq_q1: "Wie berechnet man das Volumen eines Quaders?",
	tool_volume_faq_a1:
		"Länge × Breite × Höhe: V = L × B × H. Mit L = 2, B = 3 und H = 4 ist V = 24 in Kubikeinheiten Ihrer Eingabe.",
	tool_volume_faq_q2: "Wie lautet das Volumen einer Kugel?",
	tool_volume_faq_a2:
		"V = (4/3) π r³. Bei Radius 3 ist r³ = 27, also V = (4/3) × π × 27 ≈ 113,097. Die Seite nutzt Math.PI.",
	tool_volume_faq_q3: "Wie hängen Kegel und Zylinder zusammen?",
	tool_volume_faq_a3:
		"Ein Kegel mit gleichem Grundradius und gleicher Höhe wie ein Zylinder hat genau ein Drittel dessen Volumen: V_Kegel = (1/3) π r² h.",
	tool_volume_faq_q4: "Müssen die Einheiten zusammenpassen?",
	tool_volume_faq_a4:
		"Ja. Alle Maße in derselben Einheit (alle Zentimeter, alle Zoll usw.). Das Volumen steht in der passenden Kubikeinheit (cm³, in³, …).",
	tool_volume_faq_q5: "Unterscheidet sich der Würfel vom Quader?",
	tool_volume_faq_a5:
		"Der Würfel ist ein Quader mit drei gleichen Kanten, also V = a³. Beim Würfel gibt es ein Kantenfeld; beim Quader Länge, Breite und Höhe getrennt.",
	tool_volume_faq_q6: "Geht auch ein Dezimalkomma?",
	tool_volume_faq_a6: "Ja. Eingaben wie 2,5 werden als 2,5 gelesen. Null oder negative Längen werden abgelehnt.",
	tool_volume_faq_q7: "Ist das für Tankinhalt oder Konstruktion?",
	tool_volume_faq_a7:
		"Nein. Nur Lehrgeometrie. Echte Tanks, Füllstände und CAD-Modelle brauchen Fachsoftware.",

	tool_volume_disclaimer: "Nur Bildungs-Volumen — keine ingenieurtechnische, Tank- oder CAD-Beratung.",
	tool_volume_references: "Standard-Lehrbuchformeln der Stereometrie.",
	tool_volume_ref_a_label: "Wikipedia — Volumen",
	tool_volume_ref_b_label: "Wikipedia — Kugel",
	tool_volume_ref_c_label: "Wikipedia — Zylinder",
};

export default de;
