/**
 * i18n tool shard (how-to-calculate-markup / fr).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_markup_title: "Calculateur de markup — Pourcentage sur le coût",
	tool_markup_description: "Calculez le % de markup à partir du coût et du prix de vente. Exemple : coût 50, vente 80 → markup 60 %. Différent de la marge. Maths éducatives dans le navigateur.",
	tool_markup_calculate: "Calculer",
	tool_markup_sample: "Charger l’exemple",
	tool_markup_clear: "Effacer",
	tool_markup_cost_label: "Coût",
	tool_markup_cost_ph: "ex. 50",
	tool_markup_sell_label: "Prix de vente",
	tool_markup_sell_ph: "ex. 80",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_profitOut_label: "Markup en montant",
	tool_markup_result_note: "Markup = (prix − coût) / coût × 100. Pas la marge.",
	tool_markup_err_generic: "Coût > 0 et prix ≥ 0.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Marge",
	tool_markup_how_title: "Fonctionnement",
	tool_markup_how_body: "Saisissez coût et prix. Le markup divise par le coût, pas par les ventes.",
	tool_markup_formula_title: "Formule",
	tool_markup_formula_body: "Markup % = (prix − coût) / coût × 100. Notes :",
	tool_markup_formula_item_1: "Le dénominateur est le coût — différence avec la marge.",
	tool_markup_formula_item_2: "Markup négatif = vendre sous le coût.",
	tool_markup_formula_item_3: "Taxes et remises non modélisées seules.",
	tool_markup_usecases_title: "Cas d’usage",
	tool_markup_usecase_1: "Devoir retail : coût et prix → %.",
	tool_markup_usecase_2: "Vérifier une grille avant la finance.",
	tool_markup_usecase_3: "Contraster avec la marge brute.",
	tool_markup_example_title: "Exemple",
	tool_markup_example: "Example / Ejemplo: cost 50, sell 80 → 60% markup.",
	tool_markup_article: "Calculateur de markup — Pourcentage sur le coût",
	tool_markup_disclaimer: "Illustration éducative de markup uniquement — pas un conseil financier ou fiscal.",
	tool_markup_references: "Investopedia et formules de manuel à des fins éducatives.",
	tool_markup_faq_q1: "Markup vs marge ?",
	tool_markup_faq_a1: "Le markup divise par le coût ; la marge par le prix.",
	tool_markup_faq_q2: "Résultat de l’exemple ?",
	tool_markup_faq_a2: "50 et 80 → 60 %.",
	tool_markup_faq_q3: "Peut dépasser 100 % ?",
	tool_markup_faq_a3: "Oui si le prix > 2× le coût.",
	tool_markup_faq_q4: "Conseil de prix ?",
	tool_markup_faq_a4: "Non, arithmétique éducative.",
};

export default fr;
