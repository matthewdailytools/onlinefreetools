/**
 * i18n 工具分片（how-to-calculate-gpa / de）。
 * 学分加权 GPA（4.0 量表）；字母成绩芯片与步骤行；教育用途，非录取决定。
 * 德语检索向独立重写：GPA-Rechner / gewichteter Notendurchschnitt。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_gpa_title: "GPA-Rechner — Gewichteten Durchschnitt berechnen",
	tool_gpa_description: "Berechnen Sie den kreditgewichteten GPA auf der gängigen 4.0-Skala aus Notenpunkten und Credits. Beispiel: A = 4.0 (3 Credits) und B = 3.0 (3 Credits) → GPA 3.50. Buchstaben-Chips setzen Punkte; Schritte zeigen Qualitätspunkte. Nur zu Bildungszwecken — keine Zulassungs-, Stipendien- oder Zeugnisentscheidung. Läuft im Browser.",
	tool_gpa_article: "Geben Sie Notenpunkte und Credits je Kurs ein oder tippen Sie Buchstaben-Chips für eine einfache 4.0-Zuordnung. Die Seite zeigt gewichteten GPA, Qualitätspunkte, Gesamt-Credits und Schrittzeilen.",
	tool_gpa_desc: "Kreditgewichteter GPA auf der 4.0-Skala mit Buchstaben-Chips und Schrittzeilen.",

	tool_gpa_safety_banner: "Nur Bildungsillustration. Skalen unterscheiden sich nach Schule und Region. Keine Zulassungs-, Stipendien- oder Zeugnisentscheidung.",
	tool_gpa_hint: "Ein Kurs pro Zeile: Notenpunkte, dann Credits (Komma oder Leerzeichen). Credits müssen größer als null sein. Buchstaben-Chips setzen eine gängige 4.0-Zuordnung (A=4.0, A−=3.7, B+=3.3, …).",
	tool_gpa_courses_label: "Kurse (Notenpunkte, Credits je Zeile)",
	tool_gpa_courses_ph: "z. B. 4.0, 3",
	tool_gpa_chips_label: "Buchstaben-Notenpunkte einfügen (4.0-Zuordnung)",
	tool_gpa_calculate: "Berechnen",
	tool_gpa_sample: "Beispiel",
	tool_gpa_clear: "Löschen",
	tool_gpa_result_label: "Gewichteter GPA",
	tool_gpa_qp_label: "Qualitätspunkte (Σ Note × Credits)",
	tool_gpa_credits_label: "Gesamt-Credits",
	tool_gpa_courses_count_label: "Gezählte Kurse",
	tool_gpa_steps_title: "Schritte",
	tool_gpa_step_row_tpl: "Kurs {n}: {g} × {c} = {qc}.",
	tool_gpa_step_sum_tpl: "Qualitätspunkte = {qp}; Gesamt-Credits = {credits}.",
	tool_gpa_step_gpa_tpl: "GPA = {qp} ÷ {credits} = {gpa}.",
	tool_gpa_result_note: "Annahme: einfache 4.0-Skala. Plus/Minus und gewichtete (z. B. 5.0) Skalen werden nicht automatisch angewendet. Schulen und Länder unterscheiden sich — prüfen Sie Ihre Transcript-Regeln. Nur zu Bildungszwecken.",
	tool_gpa_err_parse: "Mindestens eine Zeile als Notenpunkte, Credits eingeben (z. B. 4.0, 3).",
	tool_gpa_err_credits: "Jeder Kurs braucht Credits größer als null.",

	tool_gpa_how_title: "So nutzen Sie den GPA-Rechner",
	tool_gpa_how_body: "Listen Sie jeden Kurs als Notenpunkte und Credits auf oder tippen Sie einen Buchstaben-Chip und ergänzen Sie Credits. Berechnen zeigt gewichteten GPA, Qualitätspunkte und Schrittzeilen. Beispiel wechselt zwischen gleichen Credits, Plus/Minus und ungleichen Credits.",
	tool_gpa_how_item_1: "Einen Kurs pro Zeile eingeben: Notenpunkte, dann Credits.",
	tool_gpa_how_item_2: "Optional: Buchstaben-Chip tippen, um gängige 4.0-Punkte einzufügen, dann Credits tippen.",
	tool_gpa_how_item_3: "Auf Berechnen klicken für GPA, Qualitätspunkte, Gesamt-Credits und Schritte.",
	tool_gpa_how_item_4: "Beispiel nutzen, um gleiche Credits, Plus/Minus und ungleiche Credits durchzuwechseln.",

	tool_gpa_why_choose_title: "Was dieser GPA-Rechner liefert",
	tool_gpa_why_choose_item_1: "Kreditgewichteter GPA = Σ(Note × Credits) / Σ Credits.",
	tool_gpa_why_choose_item_2: "Buchstaben-Chips für eine einfache 4.0-Zuordnung (A bis F).",
	tool_gpa_why_choose_item_3: "Qualitätspunkte und Gesamt-Credits neben dem GPA.",
	tool_gpa_why_choose_item_4: "Schrittzeilen, die Ihre Zahlen in die Formel einsetzen.",
	tool_gpa_why_choose_item_5: "Klare Grenze: nur Bildung — keine Zulassungsberatung.",

	tool_gpa_formula_title: "GPA-Formel und Hinweise zur 4.0-Skala",
	tool_gpa_formula_body: "Ein gewichteter GPA multipliziert die Notenpunkte jedes Kurses mit seinen Credits, summiert diese Produkte (Qualitätspunkte) und teilt durch die Gesamt-Credits.",
	tool_gpa_formula_item_1: "GPA = Σ (Notenpunkte × Credits) / Σ Credits.",
	tool_gpa_formula_item_2: "Gängige 4.0-Zuordnung der Chips: A=4.0, A−=3.7, B+=3.3, B=3.0, B−=2.7, C+=2.3, C=2.0, C−=1.7, D+=1.3, D=1.0, F=0.0.",
	tool_gpa_formula_item_3: "Plus/Minus-Schritte und Honors/AP-Gewichte werden über die Chip-Zuordnung hinaus nicht automatisch angewendet.",
	tool_gpa_formula_item_4: "Credits müssen positiv sein; Notenpunkte müssen endliche Zahlen sein.",
	tool_gpa_formula_item_5: "Hochschule, Schule und Region können abweichen — Ergebnisse nur zu Bildungszwecken.",

	tool_gpa_example_title: "Durchgerechnete Beispiele",
	tool_gpa_example: "Beispiel startet mit 4.0×3 und 3.0×3 → Qualitätspunkte 21, Credits 6, GPA 3.50. Als Nächstes Plus/Minus-Punkte (3.7 und 3.3). Das letzte Beispiel nutzt ungleiche Credits (4.0×4 und 2.0×2) → GPA 3.33.",

	tool_gpa_usecases_title: "Wann ein GPA-Rechner hilft",
	tool_gpa_usecase_1: "Grober Semester-GPA aus Punkten und Credits, bevor das offizielle Portal aktualisiert.",
	tool_gpa_usecase_2: "Hausaufgabe: kreditgewichtete Mittelwerte auf der 4.0-Skala üben.",
	tool_gpa_usecase_3: "Was-wäre-wenn-Noten zur Planung — keine Zulassungs- oder Stipendienentscheidung.",
	tool_gpa_usecase_4: "Buchstabennoten mit der Chip-Zuordnung umrechnen, dann anpassen, wenn Ihre Schule anders skaliert.",

	tool_gpa_faq_q1: "Welche GPA-Formel nutzt dieses Tool?",
	tool_gpa_faq_a1: "Gewichteter GPA = Σ (Notenpunkte × Credits) / Σ Credits. Punkte bereits auf Ihrer Skala eingeben oder Buchstaben-Chips für eine einfache 4.0-Zuordnung nutzen.",
	tool_gpa_faq_q2: "Nutzt jede Schule die 4.0-Skala?",
	tool_gpa_faq_a2: "Nein. Viele US-Schulen nutzen 4.0 mit Plus/Minus; andere gewichtete 5.0- oder Prozentsysteme. Folgen Sie immer Ihren Transcript-Regeln.",
	tool_gpa_faq_q3: "Kann ich Buchstabennoten direkt mischen?",
	tool_gpa_faq_a3: "Tippen Sie einen Buchstaben-Chip, um Punkte einzufügen, und ergänzen Sie Credits in derselben Zeile. Oder wandeln Sie Buchstaben selbst um, wenn Ihre Skala abweicht.",
	tool_gpa_faq_q4: "Was sind Qualitätspunkte?",
	tool_gpa_faq_a4: "Qualitätspunkte sind Σ (Note × Credits) — der Zähler vor der Division durch Gesamt-Credits.",
	tool_gpa_faq_q5: "Sind gewichtete (5.0) Honors-Kurse enthalten?",
	tool_gpa_faq_a5: "Keine automatische Gewichtung. Geben Sie die Notenpunkte ein, die Ihre Schule vergibt (z. B. 5.0), wenn das Ihre Regel ist.",
	tool_gpa_faq_q6: "Garantiert das eine Hochschulzulassung?",
	tool_gpa_faq_a6: "Nein. Die Zahl ist nur eine Bildungsillustration und keine Zulassungs- oder Stipendienentscheidung.",

	tool_gpa_disclaimer: "Nur GPA-Arithmetik zu Bildungszwecken — keine Zulassungs-, Stipendien- oder offizielle Zeugnisberatung. Skalen variieren nach Schule und Region.",
	tool_gpa_references: "College-Board-Ressourcen für Studierende; Überblick über US-akademische Notenskalen.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Academic grading in the United States",
};

export default de;
