/**
 * i18n 工具分片（how-to-calculate-body-fat / de）。
 * 用美国海军围度公式估算体脂率；陆军标签与海军共用同一套 log10 方程。
 * 输入为厘米，代入前按 2.54 换成英寸。
 * 男性：86.010×log10(Taille−Hals) − 70.041×log10(Größe) + 36.387。
 * 女性：163.205×log10(Taille+Hüfte−Hals) − 97.684×log10(Größe) − 78.387（减去 78.387，不是加上）。
 * 样例：男 178/40/86 cm 约 15.3%；女 165/34/74/96 cm 约 26.7%。仅供学习，不是诊断。
 */
import type { SiteLangDict } from '../../../types';

/** 体脂率计算器的德语文案；键与英文母版一一对应。 */
const de: SiteLangDict = {
	tool_body_fat_title: "Körperfett-Rechner — Anteil mit der Navy-Methode schätzen",
	tool_body_fat_description: "Körperfettanteil mit der Umfangsformel der U.S. Navy berechnen. Der Prozess rechnet Zentimeter vor der log10-Formel in Zoll um. Beispiel: Mann, Größe 178 cm, Hals 40 cm, Taille 86 cm → etwa 15.3%. Frau, Größe 165 cm, Hals 34 cm, Taille 74 cm, Hüfte 96 cm → etwa 26.7%. Das Army-Label nutzt dieselbe Formel. Nur zur Bildung, keine medizinische Beratung und keine Diagnose.",
	tool_body_fat_article: "Geschlecht und Maßbandwerte in Zentimetern genügen für eine Schätzung. Bei Frauen kommt der Hüftumfang dazu. Neben dem Prozentwert stehen die Umrechnungsschritte.",
	tool_body_fat_desc: "Navy-Umfang für den Körperfettanteil; Army-Label gleiche Formel; cm in Zoll; nur Bildung.",

	tool_body_fat_safety_banner: "Nur eine Bildungsschätzung. Umfangsformeln sind kein DXA, kein Bod Pod und keine Diagnose. Keine medizinische Beratung.",
	tool_body_fat_hint: "Bitte Zentimeter verwenden. Frauen brauchen die Hüfte. Die Taille muss größer als der Hals sein; bei Frauen zusätzlich Taille plus Hüfte größer als der Hals. Das Army-Label nutzt dieselben Bildungs-Umfangsgleichungen wie die Navy.",
	tool_body_fat_method_label: "Methodenlabel",
	tool_body_fat_method_navy: "Umfang nach U.S. Navy",
	tool_body_fat_method_army: "Umfang im Stil U.S. Army / DoD",
	tool_body_fat_sex_label: "Geschlecht (wählt die Formel)",
	tool_body_fat_sex_male: "Männlich",
	tool_body_fat_sex_female: "Weiblich",
	tool_body_fat_height_label: "Körpergröße (cm)",
	tool_body_fat_height_ph: "z. B. 178",
	tool_body_fat_neck_label: "Halsumfang (cm)",
	tool_body_fat_neck_ph: "z. B. 40",
	tool_body_fat_waist_label: "Taillenumfang (cm)",
	tool_body_fat_waist_ph: "z. B. 86",
	tool_body_fat_hip_label: "Hüftumfang (cm, weiblich)",
	tool_body_fat_hip_ph: "z. B. 96",
	tool_body_fat_calculate: "Berechnen",
	tool_body_fat_sample: "Beispiel laden",
	tool_body_fat_clear: "Leeren",
	tool_body_fat_result_label: "Geschätzter Körperfettanteil",
	tool_body_fat_steps_title: "Rechenschritte",
	tool_body_fat_step_convert_tpl: "Zentimeter in Zoll (÷ 2.54): Größe {hIn} in, Hals {nIn} in, Taille {wIn} in{hipPart}.",
	tool_body_fat_step_hip_part_tpl: ", Hüfte {hipIn} in",
	tool_body_fat_step_male_tpl: "Männer %KF ≈ 86.010×log10(Taille−Hals) − 70.041×log10(Größe) + 36.387 = {pct}%.",
	tool_body_fat_step_female_tpl: "Frauen %KF ≈ 163.205×log10(Taille+Hüfte−Hals) − 97.684×log10(Größe) − 78.387 = {pct}%.",
	tool_body_fat_result_note: "Nur eine Bildungsschätzung, keine medizinische Beratung und keine Diagnose. Lage des Maßbands und Haltung ändern das Ergebnis.",
	tool_body_fat_err_input: "Größe, Hals und Taille müssen Zahlen größer als 0 sein.",
	tool_body_fat_err_hip: "Die Frauenformel braucht einen Hüftumfang größer als 0.",
	tool_body_fat_err_geom: "Die Taille muss größer als der Hals sein; bei Frauen muss Taille plus Hüfte größer als der Hals sein.",

	tool_body_fat_how_title: "Körperfettanteil mit der Navy-Methode berechnen",
	tool_body_fat_how_body: "Navy- oder Army-Label wählen, Geschlecht und Zentimeter eintragen, dann Berechnen. Beide Labels teilen sich die Gleichung. Beispiel laden wechselt zwischen Mann etwa 15.3% und Frau etwa 26.7%.",
	tool_body_fat_how_item_1: "Methodenlabel und Geschlecht wählen. Army verwendet hier dieselbe Umfangsgleichung wie die Navy.",
	tool_body_fat_how_item_2: "Größe, Hals und Taille in Zentimetern eintragen; bei Frauen zusätzlich die Hüfte.",
	tool_body_fat_how_item_3: "Auf Berechnen tippen und Prozentwert plus Schritte lesen.",
	tool_body_fat_how_item_4: "Beispiel laden: zuerst Mann 178/40/86 cm etwa 15.3%, danach Frau 165/34/74/96 cm etwa 26.7%.",

	tool_body_fat_why_choose_title: "Warum dieser Körperfett-Rechner",
	tool_body_fat_why_choose_item_1: "Army-Label und Navy-Label rechnen mit derselben Umfangsgleichung.",
	tool_body_fat_why_choose_item_2: "Die Schritte zeigen Zollumrechnung und eingesetzte Formel nebeneinander.",
	tool_body_fat_why_choose_item_3: "Am Ergebnis steht, dass es eine Bildungsschätzung und keine Diagnose ist.",
	tool_body_fat_why_choose_item_4: "Zentimeter bleiben die Eingabe; Zoll entsteht erst vor dem log10.",
	tool_body_fat_why_choose_item_5: "Ein Beispiel wechselt zwischen dem Männer- und dem Frauenfall.",

	tool_body_fat_formula_title: "Formel und Messannahmen",
	tool_body_fat_formula_body: "Männer: %KF ≈ 86.010×log10(Taille−Hals) − 70.041×log10(Größe) + 36.387 (Zoll). Frauen: %KF ≈ 163.205×log10(Taille+Hüfte−Hals) − 97.684×log10(Größe) − 78.387.",
	tool_body_fat_formula_item_1: "Maßband an den üblichen Navy/DoD-Stellen anlegen; Haltung und Kleidung ändern die Werte.",
	tool_body_fat_formula_item_2: "Eingegeben werden Zentimeter, umgerechnet mit 1 in = 2.54 cm, danach kommt log10.",
	tool_body_fat_formula_item_3: "Das Army-Label verwendet dieselben Bildungs-Umfangsgleichungen wie die Navy.",
	tool_body_fat_formula_item_4: "Keine klinischen DXA- oder Bod-Pod-Werte und keine medizinische Beratung.",
	tool_body_fat_formula_item_5: "Hautfalten brauchen mehrere Messstellen und Übung; das ist eine andere Ablesung als der Umfang.",

	tool_body_fat_example_title: "Durchgerechnete Beispiele",
	tool_body_fat_example: "Beispiel laden startet mit Mann, Navy: Größe 178 cm, Hals 40 cm, Taille 86 cm → etwa 15.3%. Der nächste Lauf ist Frau mit Army-Label, dieselbe Gleichung: Größe 165 cm, Hals 34 cm, Taille 74 cm, Hüfte 96 cm → etwa 26.7%.",

	tool_body_fat_usecases_title: "Wann der Körperfett-Rechner hilft",
	tool_body_fat_usecase_1: "Navy- und Army-Bezeichnung vergleichen und sehen, dass die Gleichung gleich bleibt.",
	tool_body_fat_usecase_2: "Im Unterricht die Navy-Formel mit festen Zahlen durchrechnen.",
	tool_body_fat_usecase_3: "Vor einem Gespräch mit einer Ärztin oder einem Arzt eine grobe Illustration ansehen — keine Diagnose.",
	tool_body_fat_usecase_4: "Die Umrechnung von Zentimeter nach Zoll direkt neben dem Prozentwert prüfen.",

	tool_body_fat_faq_q1: "Welche Formel steckt in der Navy-Methode?",
	tool_body_fat_faq_a1: "Die log10-Umfangsformeln im Stil U.S. Navy/DoD, nachdem Zentimeter mit 2.54 in Zoll umgerechnet wurden. Männer: 86.010×log10(Taille−Hals) − 70.041×log10(Größe) + 36.387.",
	tool_body_fat_faq_q2: "Ist das eine medizinische Beratung?",
	tool_body_fat_faq_a2: "Nein. Es ist eine Bildungsschätzung, keine Diagnose, kein Behandlungsplan und kein klinischer Körperzusammensetzungstest.",
	tool_body_fat_faq_q3: "Warum Zoll, wenn ich Zentimeter messe?",
	tool_body_fat_faq_a3: "Die veröffentlichten log10-Gleichungen stehen in Zoll. Die Eingabe bleibt in Zentimetern und wird mit 2.54 umgerechnet.",
	tool_body_fat_faq_q4: "Ändert das Army-Label die Gleichung?",
	tool_body_fat_faq_a4: "Nein. Beide Labels nutzen dieselbe Umfangsgleichung. Wo das Maßband liegt, wirkt stärker als der Name des Labels.",
	tool_body_fat_faq_q5: "Darf die Taille gleich dem Hals sein?",
	tool_body_fat_faq_a5: "Nein. Die Taille muss größer als der Hals sein. Bei Frauen muss Taille plus Hüfte größer als der Hals sein.",
	tool_body_fat_faq_q6: "Was ist mit Hautfalten und Caliper?",
	tool_body_fat_faq_a6: "Das ist eine andere Messung an mehreren Stellen und mit geübter Technik. Dieser Rechner nimmt nur Umfänge. Die Frauenformel endet mit minus 78.387: 163.205×log10(Taille+Hüfte−Hals) − 97.684×log10(Größe) − 78.387.",

	tool_body_fat_disclaimer: "Körperfettschätzungen sind nur Bildungsbeispiele. Sie sind keine medizinische Beratung, keine Diagnose und ersetzen keinen klinischen Körperzusammensetzungstest. Gesundheitsentscheidungen gehören in ein Gespräch mit qualifiziertem klinischem Personal.",
	tool_body_fat_references: "Umfangsgleichungen der U.S. Navy / des DoD; Bildungshinweise des ACE-Körperfettrechners; begutachtete Literatur zur Umfangsmethode.",
	tool_body_fat_ref_ace_label: "ACE — Körperfett-Rechner (Bildung)",
	tool_body_fat_ref_pmc_label: "PMC — Umfangsbasierte Körperfettmethoden",
};

export default de;
