/**
 * i18n tool shard (how-to-calculate-contribution-margin / fr).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_contribution_margin_title: "Calculateur de marge sur coût variable",
	tool_contribution_margin_description: "Calculez la marge sur coût variable et son ratio. Exemple : prix 50, CV 30 → 20 (40 %). Éducatif. Calcul éducatif dans le navigateur ; pas un conseil professionnel.",
	tool_contribution_margin_calculate: "Calculer",
	tool_contribution_margin_sample: "Charger l’exemple",
	tool_contribution_margin_clear: "Effacer",
	tool_contribution_margin_price_label: "Prix unitaire",
	tool_contribution_margin_price_ph: "ex. 50",
	tool_contribution_margin_vc_label: "Coût variable unitaire",
	tool_contribution_margin_vc_ph: "ex. 30",
	tool_contribution_margin_cmOut_label: "Marge sur coût variable",
	tool_contribution_margin_cmrOut_label: "Taux de MCV",
	tool_contribution_margin_result_note: "Éducatif.",
	tool_contribution_margin_err_generic: "Prix > 0 et CV ≥ 0.",
	tool_contribution_margin_how_title: "Fonctionnement",
	tool_contribution_margin_how_body: "Saisissez prix et coût variable unitaire.",
	tool_contribution_margin_formula_title: "Formule",
	tool_contribution_margin_formula_body: "MCV = P − CV ; taux = MCV / P.",
	tool_contribution_margin_formula_item_1: "VC with units; fixed costs → break-even.",
	tool_contribution_margin_formula_item_2: "Price > 0.",
	tool_contribution_margin_formula_item_3: "Simplified.",
	tool_contribution_margin_example_title: "Exemple",
	tool_contribution_margin_example: "Exemple : 50 et 30 → 20 (40 %).",
	tool_contribution_margin_usecases_title: "Cas d’usage",
	tool_contribution_margin_usecase_1: "Unit CM homework.",
	tool_contribution_margin_usecase_2: "VC sensitivity.",
	tool_contribution_margin_usecase_3: "With break-even tool.",
	tool_contribution_margin_faq_q1: "Exemple ?",
	tool_contribution_margin_faq_a1: "20 / 40%",
	tool_contribution_margin_faq_q2: "CM vs gross?",
	tool_contribution_margin_faq_a2: "VC vs COGS.",
	tool_contribution_margin_faq_q3: "Qty needed?",
	tool_contribution_margin_faq_a3: "Not for unit CM.",
	tool_contribution_margin_faq_q4: "Advice?",
	tool_contribution_margin_faq_a4: "No.",
	tool_contribution_margin_article: "Calculateur de marge sur coût variable",
	tool_contribution_margin_disclaimer: "Illustration éducative (contribution margin) uniquement — pas un conseil financier.",
	tool_contribution_margin_references: "Investopedia et formules de manuel.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default fr;
