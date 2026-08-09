/**
 * i18n tool shard (how-to-calculate-p-value / de).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_p_value_title: "p-Wert-Rechner — p-Wert berechnen",
	tool_p_value_description: "Zweiseitiger normaler p-Wert aus einem z-Wert per erfc-Näherung. Beispiel: z = 1,96 → p ≈ 0,05. Macht Standardnormal- und zweiseitige Annahmen klar. Im Browser für Übungen und schnelle Lernchecks.",
	tool_p_value_calculate: "Berechnen",
	tool_p_value_sample: "Beispiel laden",
	tool_p_value_clear: "Leeren",
	tool_p_value_z_label: "Z-Wert",
	tool_p_value_z_ph: "z. B. 1.96",
	tool_p_value_pOut_label: "Zweiseitiger p-Wert",
	tool_p_value_result_note: "Standardnormale zweiseitige Näherung zum Lernen — keine vollständige Test-Suite.",
	tool_p_value_err_generic: "Bitte einen endlichen z-Wert eingeben.",
	tool_p_value_how_title: "So funktioniert’s",
	tool_p_value_how_body: "Geben Sie einen z-Wert aus einem standardnormalen Test ein. Das Tool schätzt den zweiseitigen p-Wert per erfc-Näherung und macht Annahmen sichtbar: Standardnormal und beide Seiten. Im Browser für Übungen und schnelle Checks.",
	tool_p_value_formula_title: "Formel und Annahmen",
	tool_p_value_formula_body: "Zweiseitiges p ≈ erfc(|z| / √2) unter Standardnormal. Grenzen:",
	tool_p_value_formula_item_1: "Nimmt kontinuierliches standardnormales z an, kein t, χ² oder exakter diskreter Test.",
	tool_p_value_formula_item_2: "Nur zweiseitig auf dieser Seite.",
	tool_p_value_formula_item_3: "Nutzt eine numerische erfc-Näherung; zum Lernen, nicht zertifizierte Software.",
	tool_p_value_formula_item_4: "Ein kleines p beweist allein keine wissenschaftliche Behauptung.",
	tool_p_value_example_title: "Beispiel",
	tool_p_value_example: "Beispiel: z = 1,96 → zweiseitiges p ≈ 0,05 (etwa 0,049996 mit dieser Näherung).",
	tool_p_value_usecases_title: "Wann sinnvoll",
	tool_p_value_usecase_1: "Hausaufgabe: bekannten z in ungefähres zweiseitiges p umrechnen.",
	tool_p_value_usecase_2: "Schnellcheck nach Berechnung von z aus Mittelwert und SD.",
	tool_p_value_usecase_3: "Die Faustregel 1,96 ↔ 0,05 mit einer Zahl vergleichen.",
	tool_p_value_faq_q1: "Einseitig oder zweiseitig?",
	tool_p_value_faq_a1: "Zweiseitig; beide Seiten jenseits von ±|z|.",
	tool_p_value_faq_q2: "Welche Verteilung wird angenommen?",
	tool_p_value_faq_a2: "Kontinuierliche Standardnormalverteilung. Kein t-/χ²-Rechner.",
	tool_p_value_faq_q3: "Warum z=1,96 ≈ 0,05?",
	tool_p_value_faq_a3: "Üblicher kritischer Wert für 5% zweiseitig; die erfc-Näherung liefert etwa 0,05.",
	tool_p_value_faq_q4: "Beweist kleines p die Alternative?",
	tool_p_value_faq_a4: "Nein. Es ist eine Schwanzwahrscheinlichkeit unter Annahmen, kein automatischer Beweis.",
	tool_p_value_disclaimer: "Ergebnisse sind Lernnäherungen unter einem standardnormalen zweiseitigen Modell und ersetzen keine Statistiksoftware oder professionelle Analyse.",
	tool_p_value_references: "Wikipedia-Artikel zu p-Wert und Normalverteilung; komplementäre Fehlerfunktion.",
	tool_p_value_ref_pvalue_label: "Wikipedia — p-Wert",
	tool_p_value_ref_normal_label: "Wikipedia — Normalverteilung",
	tool_p_value_article: "Berechnen Sie einen zweiseitigen normalen p-Wert aus z mit erfc-Näherung und klaren Annahmen.",
};

export default de;
