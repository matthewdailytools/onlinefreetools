/**
 * i18n tool shard (how-to-calculate-z-score / de).
 * Rohwert ↔ Z-Score mit z = (x − Mittelwert) / SD; Schritte und SD > 0-Schutz.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Werkzeugtexte für den Z-Score-Rechner (Rohwert ↔ Standardwert). */
const de: SiteLangDict = {
	tool_z_score_title: "Z-Score-Rechner — Rohwert ↔ Standardwert",
	tool_z_score_description: "Rohwert in einen Z-Score umrechnen mit z = (x − Mittelwert) / SD — oder aus z den Rohwert zurückholen. Beispiel: x = 85, Mittelwert = 70, SD = 10 → z = 1,5. SD muss > 0 sein. Nur lineare Lernskalierung — kein Normalitätstest und kein p-Wert.",
	tool_z_score_article: "Standardwert aus Rohwert, Mittelwert und SD berechnen oder den Rohwert aus z zurückgewinnen — mit nachvollziehbaren Rechenschritten.",
	tool_z_score_desc: "Rohwert ↔ Z-Score mit z = (x − Mittelwert) / SD. Zeigt Schritte und |z|.",

	tool_z_score_mode_label: "Was möchtest du berechnen?",
	tool_z_score_mode_z: "Z-Score aus Rohwert",
	tool_z_score_mode_x: "Rohwert aus Z-Score",
	tool_z_score_hint: "Mittelwert und eine positive Standardabweichung eingeben. Wähle, ob du vom Rohwert oder von z startest.",
	tool_z_score_x_label: "Rohwert (x)",
	tool_z_score_x_ph: "z. B. 85",
	tool_z_score_z_label: "Z-Score (z)",
	tool_z_score_z_ph: "z. B. 1,5",
	tool_z_score_mean_label: "Mittelwert (μ)",
	tool_z_score_mean_ph: "z. B. 70",
	tool_z_score_sd_label: "Standardabweichung (σ)",
	tool_z_score_sd_ph: "z. B. 10",
	tool_z_score_calculate: "Berechnen",
	tool_z_score_sample: "Beispiel laden",
	tool_z_score_clear: "Leeren",
	tool_z_score_zOut_label: "Z-Score",
	tool_z_score_xOut_label: "Rohwert",
	tool_z_score_diffOut_label: "x − Mittelwert",
	tool_z_score_absOut_label: "|z| (SD vom Mittelwert)",
	tool_z_score_steps_title: "Rechenschritte",
	tool_z_score_step_z_tpl: "z = (x − Mittelwert) / SD = ({x} − {mean}) / {sd} = {z}.",
	tool_z_score_step_x_tpl: "x = Mittelwert + z × SD = {mean} + {z} × {sd} = {x}.",
	tool_z_score_step_diff_tpl: "Abstand zum Mittelwert: x − Mittelwert = {x} − {mean} = {diff}.",
	tool_z_score_step_abs_tpl: "Abstand in SD: |z| = |{z}| = {abs}.",
	tool_z_score_result_note: "Die z-Algebra braucht keine Normalverteilung; viele Folgeanwendungen (normale p-Werte) schon. Nur zu Lernzwecken — keine Statistiksoftware und kein Studiendesign.",
	tool_z_score_err_generic: "Gib endliche Zahlen in die aktiven Felder ein und eine Standardabweichung größer als 0 (z. B. x=85, Mittelwert=70, SD=10).",

	tool_z_score_how_title: "So nutzt du den Z-Score-Rechner",
	tool_z_score_how_body: "Richtung Rohwert→z oder z→Rohwert wählen, Mittelwert und SD > 0 eintragen, dann Berechnen. „Beispiel laden“ wechselt durch 85/70/10 → 1,5, Rückrechnung 1,5 → 85, x=Mittelwert → 0 und einen Wert unter dem Mittel.",
	tool_z_score_how_item_1: "Wähle Z-Score aus Rohwert oder Rohwert aus Z-Score.",
	tool_z_score_how_item_2: "Trage Mittelwert und eine positive Standardabweichung ein.",
	tool_z_score_how_item_3: "Gib je nach Modus den Rohwert oder den Z-Score ein.",
	tool_z_score_how_item_4: "Klicke Berechnen — Ergebnis, x−Mittelwert, |z| und die Schrittzeilen erscheinen.",

	tool_z_score_why_choose_title: "Was dieser Z-Score-Rechner liefert",
	tool_z_score_why_choose_item_1: "Beide Richtungen: Rohwert → z oder z → Rohwert.",
	tool_z_score_why_choose_item_2: "Schrittzeilen, die deine Zahlen in z = (x − μ) / σ einsetzen.",
	tool_z_score_why_choose_item_3: "Klarer Schutz SD > 0 — Division durch null läuft nicht.",
	tool_z_score_why_choose_item_4: "|z| als Abstand in Standardabweichungen vom Mittelwert.",
	tool_z_score_why_choose_item_5: "Ehrliche Grenze: nur lineare Skalierung — kein Normalitätstest, kein p-Wert.",

	tool_z_score_formula_title: "Formeln für den Z-Score",
	tool_z_score_formula_body: "Ein Z-Score (Standardwert) skaliert einen Wert relativ zu einem angegebenen Mittelwert und einer Standardabweichung. Einheiten kürzen sich weg; z ist dimensionslos.",
	tool_z_score_formula_item_1: "z = (x − μ) / σ. Beispiel: (85 − 70) / 10 = 1,5.",
	tool_z_score_formula_item_2: "x = μ + z × σ. Beispiel: 70 + 1,5 × 10 = 85.",
	tool_z_score_formula_item_3: "σ muss positiv sein; null oder negativ wird abgelehnt.",
	tool_z_score_formula_item_4: "z = 0, wenn x dem Mittelwert entspricht; negatives z heißt unter dem Mittel.",
	tool_z_score_formula_item_5: "Die Algebra verlangt keine Normalverteilung; Normal-Schwanz-p-Werte schon — nutze die verwandte p-Wert-Seite.",

	tool_z_score_example_title: "Durchgerechnete Beispiele",
	tool_z_score_example: "„Beispiel laden“ startet mit x=85, Mittelwert=70, SD=10 → z=1,5. Als Nächstes kehrt es z=1,5 zu x=85 um. Dann x=Mittelwert → z=0. Das letzte Beispiel nutzt x=55 → z=−1,5 (eineinhalb SD unter dem Mittelwert).",

	tool_z_score_usecases_title: "Wann ein Z-Score-Rechner hilft",
	tool_z_score_usecase_1: "Hausaufgabe: Klausurnote in einen Standardwert mit sichtbaren Schritten umrechnen.",
	tool_z_score_usecase_2: "Punkte aus Verteilungen mit unterschiedlichem Mittel oder Streuung vergleichen.",
	tool_z_score_usecase_3: "Rohwert zurückholen, wenn z, Mittelwert und SD schon bekannt sind.",
	tool_z_score_usecase_4: "Einen z vorbereiten, den du später in einen normalen Schwanz-p-Check steckst.",

	tool_z_score_faq_q1: "Was bedeutet z = 1,5?",
	tool_z_score_faq_a1: "Der Rohwert liegt 1,5 Standardabweichungen über dem angegebenen Mittelwert.",
	tool_z_score_faq_q2: "Darf die Standardabweichung null sein?",
	tool_z_score_faq_a2: "Nein. Division durch null ist undefiniert; gib SD > 0 ein.",
	tool_z_score_faq_q3: "Wie rechne ich einen Z-Score wieder in einen Rohwert um?",
	tool_z_score_faq_a3: "Mit x = Mittelwert + z × SD. Beispiel: 70 + 1,5 × 10 = 85.",
	tool_z_score_faq_q4: "Setzt das eine Normalverteilung voraus?",
	tool_z_score_faq_a4: "Die z-Algebra nicht — viele Folgeanwendungen (z. B. normale p-Werte) schon.",
	tool_z_score_faq_q5: "Ist ein großes |z| automatisch statistisch signifikant?",
	tool_z_score_faq_a5: "Nicht allein. Signifikanz braucht ein Modell und einen p-Wert oder kritischen Wert — nicht nur die z-Zahl.",
	tool_z_score_faq_q6: "Was, wenn x dem Mittelwert entspricht?",
	tool_z_score_faq_a6: "Dann ist z = 0. Der Wert sitzt genau in der Mitte der angegebenen Verteilung.",
	tool_z_score_faq_q7: "Wo bekomme ich aus z einen p-Wert?",
	tool_z_score_faq_a7: "Nutze den verwandten p-Wert-Rechner, sobald du z hast. Diese Seite macht nur die lineare z-Transformation.",

	tool_z_score_disclaimer: "Nur Lern-z = (x − Mittelwert) / SD. Ersetzt keine Statistiksoftware, keinen Normalitätstest und kein Studiendesign.",
	tool_z_score_references: "Wikipedia Standardwert und Standardabweichung als Lernkontext.",
	tool_z_score_ref_z_label: "Wikipedia — Standardwert",
	tool_z_score_ref_sd_label: "Wikipedia — Standardabweichung",
};

export default de;
