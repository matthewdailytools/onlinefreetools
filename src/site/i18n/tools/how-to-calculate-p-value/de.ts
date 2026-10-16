/**
 * i18n tool shard (how-to-calculate-p-value / de).
 * Ein- oder zweiseitiger normaler p-Wert aus z per erfc; kritische-z-Chips.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Werkzeugtexte für den p-Wert-Rechner (z → Normal-Schwanz-p). */
const de: SiteLangDict = {
	tool_p_value_title: "p-Wert-Rechner — Aus einem Z-Score (Normalverteilung)",
	tool_p_value_description: "Einseitigen oder zweiseitigen normalen p-Wert aus einem Z-Score mit erfc-Näherung berechnen. Beispiel: z = 1,96 → zweiseitiges p ≈ 0,05. Modell: stetige Standardnormalverteilung — kein t-, χ²- oder exakter Test. Nur zu Lernzwecken.",
	tool_p_value_article: "Ein- und zweiseitige Standardnormal-p-Werte aus einem Z-Score schätzen — mit erfc, kritischen z-Shortcuts und nachvollziehbaren Rechenschritten.",
	tool_p_value_desc: "Ein- oder zweiseitiges Normal-p aus z. Zeigt beide Seiten und |z|.",

	tool_p_value_mode_label: "Schwanztyp",
	tool_p_value_mode_two: "Zweiseitig",
	tool_p_value_mode_one: "Einseitig",
	tool_p_value_hint: "Modell ist die Standardnormalverteilung. Bei symmetrischer Normalverteilung ist das einseitige p die Hälfte des zweiseitigen p (gleiches |z|).",
	tool_p_value_z_label: "Z-Score",
	tool_p_value_z_ph: "z. B. 1,96",
	tool_p_value_chips_label: "Häufige kritische z-Shortcuts",
	tool_p_value_chip_1645: "z = 1,645",
	tool_p_value_chip_196: "z = 1,96",
	tool_p_value_chip_2576: "z = 2,576",
	tool_p_value_calculate: "Berechnen",
	tool_p_value_sample: "Beispiel laden",
	tool_p_value_clear: "Leeren",
	tool_p_value_pOut_label: "Zweiseitiger p-Wert",
	tool_p_value_pOneOut_label: "Einseitiger p-Wert",
	tool_p_value_altOut_label: "Andere Schwanzvariante",
	tool_p_value_absOut_label: "|z|",
	tool_p_value_steps_title: "Rechenschritte",
	tool_p_value_step_abs_tpl: "Betrag bilden: |z| = |{z}| = {abs}.",
	tool_p_value_step_two_tpl: "Zweiseitiges p ≈ erfc(|z| / √2) = erfc({abs} / √2) ≈ {p}.",
	tool_p_value_step_one_tpl: "Einseitiges p ≈ zweiseitig / 2 = {two} / 2 ≈ {one}.",
	tool_p_value_result_note: "Standardnormale Lernnäherung. Kein t-Test, kein χ², kein exakter Binomialtest und kein Studiendesign. Ein kleines p beweist für sich genommen keine Behauptung.",
	tool_p_value_err_generic: "Gib einen endlichen Z-Score ein (zum Beispiel 1,96).",

	tool_p_value_how_title: "So nutzt du den p-Wert-Rechner",
	tool_p_value_how_body: "Zweiseitig oder einseitig wählen, z eingeben (oder einen kritischen-z-Chip tippen), dann Berechnen. „Beispiel laden“ wechselt durch 1,96 zweiseitig, 1,96 einseitig, z=0 und z=2,576.",
	tool_p_value_how_item_1: "Wähle zweiseitig oder einseitig.",
	tool_p_value_how_item_2: "Trage einen endlichen Z-Score ein oder tippe 1,645 / 1,96 / 2,576.",
	tool_p_value_how_item_3: "Klicke Berechnen — gewähltes p, die andere Schwanzvariante und die Schritte erscheinen.",
	tool_p_value_how_item_4: "Mit „Beispiel laden“ rotierst du gängige Lehrbuch-Checkpoints.",

	tool_p_value_why_choose_title: "Was dieser p-Wert-Rechner liefert",
	tool_p_value_why_choose_item_1: "Ein- und zweiseitiges Normal-p aus demselben z.",
	tool_p_value_why_choose_item_2: "Kritische-z-Chips für die bekannten 10-%- / 5-%- / 1-%-zweiseitigen Checkpoints.",
	tool_p_value_why_choose_item_3: "Schrittzeilen mit erfc(|z|/√2) und der einseitigen Hälfte.",
	tool_p_value_why_choose_item_4: "Klare Annahme: nur stetige Standardnormalverteilung.",
	tool_p_value_why_choose_item_5: "Ehrliche Grenze: keine vollständige Hypothesentest-Suite und kein Beweis einer Behauptung.",

	tool_p_value_formula_title: "Formeln für den normalen p-Wert",
	tool_p_value_formula_body: "Unter stetiger Standardnormalverteilung gilt: zweiseitiges p ≈ erfc(|z| / √2). Bei symmetrischer Normalverteilung ist das einseitige p die Hälfte davon.",
	tool_p_value_formula_item_1: "Zweiseitiges p ≈ erfc(|z| / √2). Beispiel: |z|=1,96 → p ≈ 0,05.",
	tool_p_value_formula_item_2: "Einseitiges p ≈ zweiseitig / 2. Gleiches |z|=1,96 → einseitig ≈ 0,025.",
	tool_p_value_formula_item_3: "Numerische erfc-Näherung — Lerngenauigkeit, keine zertifizierte Statistiksoftware.",
	tool_p_value_formula_item_4: "Voraussetzung ist Standardnormal-z, nicht t, χ² oder diskrete Exact-Tests.",
	tool_p_value_formula_item_5: "z = 0 → zweiseitiges p = 1; größeres |z| → kleineres p.",

	tool_p_value_example_title: "Durchgerechnete Beispiele",
	tool_p_value_example: "„Beispiel laden“ startet mit z=1,96 zweiseitig → p≈0,05. Als Nächstes die einseitige Hälfte ≈0,025. Dann z=0 → p=1. Das letzte Beispiel nutzt z=2,576 (etwa der zweiseitige 1-%-kritische Wert).",

	tool_p_value_usecases_title: "Wann ein p-Wert-Rechner hilft",
	tool_p_value_usecase_1: "Hausaufgabe: bekannten z in ein ungefähres Normal-Schwanz-p umrechnen.",
	tool_p_value_usecase_2: "Schnellcheck, nachdem du z aus Mittelwert und SD auf der verwandten Z-Score-Seite berechnet hast.",
	tool_p_value_usecase_3: "Die Faustregel 1,96 ↔ 0,05 mit einer numerischen Ausgabe vergleichen.",
	tool_p_value_usecase_4: "Einseitig und zweiseitig für dasselbe |z| nebeneinander sehen.",

	tool_p_value_faq_q1: "Ist das einseitig oder zweiseitig?",
	tool_p_value_faq_a1: "Beides. Wähle den Modus. Zweiseitig deckt ±|z| ab; einseitig ist unter symmetrischer Normalverteilung die Hälfte davon.",
	tool_p_value_faq_q2: "Welche Verteilung wird angenommen?",
	tool_p_value_faq_a2: "Eine stetige Standardnormalverteilung für z. Das ist kein t-Test-, χ²- oder exakter Binomialrechner.",
	tool_p_value_faq_q3: "Warum liegt z = 1,96 nahe bei 0,05?",
	tool_p_value_faq_a3: "Unter Standardnormalverteilung ist |z| ≈ 1,96 der bekannte kritische Wert für einen zweiseitigen 5-%-Test; die erfc-Näherung liefert etwa 0,05.",
	tool_p_value_faq_q4: "Beweist ein kleines p die Alternativhypothese?",
	tool_p_value_faq_a4: "Nein. Ein p-Wert ist eine Schwanzwahrscheinlichkeit unter genannten Annahmen — kein automatischer Beweis einer Behauptung.",
	tool_p_value_faq_q5: "Wie hängen einseitig und zweiseitig hier zusammen?",
	tool_p_value_faq_a5: "Bei symmetrischer Normalverteilung: einseitiges p ≈ zweiseitiges p ÷ 2 für dasselbe |z|.",
	tool_p_value_faq_q6: "Darf ich einen negativen z eingeben?",
	tool_p_value_faq_a6: "Ja. Die Seite nutzt |z|, daher liefern −1,96 und 1,96 dasselbe zweiseitige p.",
	tool_p_value_faq_q7: "Woher bekomme ich zuerst den Z-Score?",
	tool_p_value_faq_a7: "Nutze den verwandten Z-Score-Rechner, wenn du von Rohwert, Mittelwert und SD startest.",

	tool_p_value_disclaimer: "Lernnäherung nur unter Standardnormalmodell — ersetzt keine Statistiksoftware, kein Studiendesign und keine professionelle Auswertung.",
	tool_p_value_references: "Wikipedia p-Wert und Normalverteilung; komplementäre Fehlerfunktion für Normal-Schwänze.",
	tool_p_value_ref_pvalue_label: "Wikipedia — p-Wert",
	tool_p_value_ref_normal_label: "Wikipedia — Normalverteilung",
};

export default de;
