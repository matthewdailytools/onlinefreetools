/**
 * i18n tool shard (how-to-calculate-contribution-margin / de).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_contribution_margin_title: "Deckungsbeitrag-Rechner",
	tool_contribution_margin_description: "Berechnen Sie Deckungsbeitrag und Quote aus Preis und variablen Kosten. Beispiel: Preis 50, VK 30 → 20 (40%). Bildungszweck.",
	tool_contribution_margin_calculate: "Berechnen",
	tool_contribution_margin_sample: "Beispiel laden",
	tool_contribution_margin_clear: "Leeren",
	tool_contribution_margin_price_label: "Stückpreis",
	tool_contribution_margin_price_ph: "z. B. 50",
	tool_contribution_margin_vc_label: "Variable Kosten je Stück",
	tool_contribution_margin_vc_ph: "z. B. 30",
	tool_contribution_margin_cmOut_label: "Deckungsbeitrag",
	tool_contribution_margin_cmrOut_label: "DB-Quote",
	tool_contribution_margin_result_note: "Bildungszweck.",
	tool_contribution_margin_err_generic: "Preis > 0 und VK ≥ 0.",
	tool_contribution_margin_how_title: "So funktioniert’s",
	tool_contribution_margin_how_body: "Stückpreis und variable Stückkosten eingeben.",
	tool_contribution_margin_formula_title: "Formel",
	tool_contribution_margin_formula_body: "DB = P − VK; Quote = DB / P.",
	tool_contribution_margin_formula_item_1: "VC with units; fixed costs → break-even.",
	tool_contribution_margin_formula_item_2: "Price > 0.",
	tool_contribution_margin_formula_item_3: "Simplified.",
	tool_contribution_margin_example_title: "Beispiel",
	tool_contribution_margin_example: "Beispiel: 50 und 30 → 20 (40%).",
	tool_contribution_margin_usecases_title: "Wann sinnvoll",
	tool_contribution_margin_usecase_1: "Unit CM homework.",
	tool_contribution_margin_usecase_2: "VC sensitivity.",
	tool_contribution_margin_usecase_3: "With break-even tool.",
	tool_contribution_margin_faq_q1: "Beispiel?",
	tool_contribution_margin_faq_a1: "20 / 40%",
	tool_contribution_margin_faq_q2: "CM vs gross?",
	tool_contribution_margin_faq_a2: "VC vs COGS.",
	tool_contribution_margin_faq_q3: "Qty needed?",
	tool_contribution_margin_faq_a3: "Not for unit CM.",
	tool_contribution_margin_faq_q4: "Advice?",
	tool_contribution_margin_faq_a4: "No.",
	tool_contribution_margin_article: "Deckungsbeitrag-Rechner",
	tool_contribution_margin_disclaimer: "Nur zur Veranschaulichung (contribution margin) — keine Finanzberatung.",
	tool_contribution_margin_references: "Investopedia und Lehrbuchformeln.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default de;
