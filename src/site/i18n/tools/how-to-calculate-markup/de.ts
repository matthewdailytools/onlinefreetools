/**
 * i18n tool shard (how-to-calculate-markup / de).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_markup_title: "Markup-Rechner — Aufschlag auf die Kosten",
	tool_markup_description: "Berechnen Sie den Markup-% aus Kosten und Verkaufspreis. Beispiel: Kosten 50, Verkauf 80 → Markup 60%. Anders als die Gewinnmarge. Bildungsmathematik im Browser.",
	tool_markup_calculate: "Berechnen",
	tool_markup_sample: "Beispiel laden",
	tool_markup_clear: "Leeren",
	tool_markup_cost_label: "Kosten",
	tool_markup_cost_ph: "z. B. 50",
	tool_markup_sell_label: "Verkaufspreis",
	tool_markup_sell_ph: "z. B. 80",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_profitOut_label: "Aufschlag Betrag",
	tool_markup_result_note: "Markup = (Preis − Kosten) / Kosten × 100. Nicht die Marge.",
	tool_markup_err_generic: "Kosten > 0 und Preis ≥ 0.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Marge",
	tool_markup_how_title: "So funktioniert’s",
	tool_markup_how_body: "Kosten und Verkaufspreis eingeben. Markup teilt durch Kosten, nicht durch Umsatz.",
	tool_markup_formula_title: "Formel",
	tool_markup_formula_body: "Markup % = (Preis − Kosten) / Kosten × 100. Hinweise:",
	tool_markup_formula_item_1: "Nenner sind die Kosten — Unterschied zur Marge.",
	tool_markup_formula_item_2: "Negativer Markup = Verkauf unter Kosten.",
	tool_markup_formula_item_3: "Steuern/Rabatte werden nicht automatisch modelliert.",
	tool_markup_usecases_title: "Wann sinnvoll",
	tool_markup_usecase_1: "Retail-Übung: Kosten und Preis → %.",
	tool_markup_usecase_2: "Preisliste vor Finance prüfen.",
	tool_markup_usecase_3: "Mit Bruttomarge kontrastieren.",
	tool_markup_example_title: "Beispiel",
	tool_markup_example: "Example / Ejemplo: cost 50, sell 80 → 60% markup.",
	tool_markup_article: "Markup-Rechner — Aufschlag auf die Kosten",
	tool_markup_disclaimer: "Nur zur Veranschaulichung von markup — keine Finanz- oder Steuerberatung.",
	tool_markup_references: "Investopedia und gängige Lehrbuchformeln zu Lernzwecken.",
	tool_markup_faq_q1: "Markup vs Marge?",
	tool_markup_faq_a1: "Markup teilt durch Kosten; Marge durch Preis.",
	tool_markup_faq_q2: "Beispielergebnis?",
	tool_markup_faq_a2: "50 und 80 → 60%.",
	tool_markup_faq_q3: "Über 100% möglich?",
	tool_markup_faq_a3: "Ja, wenn Preis > 2× Kosten.",
	tool_markup_faq_q4: "Preisberatung?",
	tool_markup_faq_a4: "Nein, nur Bildungsarithmetik.",
};

export default de;
