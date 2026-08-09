/**
 * i18n tool shard (how-to-calculate-irr / fr).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_irr_title: "Calculateur TRI (IRR)",
	tool_irr_description: "Estimez le TRI d’une liste de flux par Newton. Exemple : −1000, 300, 420, 680 → TRI approximatif. Éducatif. Calcul éducatif dans le navigateur ; pas un conseil professionnel.",
	tool_irr_calculate: "Calculer",
	tool_irr_sample: "Charger l’exemple",
	tool_irr_clear: "Effacer",
	tool_irr_cf_label: "Flux (virgule/ligne ; CF0 d’abord)",
	tool_irr_cf_ph: "ex. -1000, 300, 420, 680",
	tool_irr_irrOut_label: "TRI approx.",
	tool_irr_result_note: "Éducatif.",
	tool_irr_err_generic: "Vérifiez les entrées.",
	tool_irr_how_title: "Fonctionnement",
	tool_irr_how_body: "Collez CF0…CFn. On cherche r tel que NPV(r)=0 par Newton.",
	tool_irr_formula_title: "Formule",
	tool_irr_formula_body: "Collez CF0…CFn. On cherche r tel que NPV(r)=0 par Newton.",
	tool_irr_formula_item_1: "See formula notes.",
	tool_irr_formula_item_2: "Check inputs.",
	tool_irr_formula_item_3: "Educational only.",
	tool_irr_example_title: "Exemple",
	tool_irr_example: "Exemple : −1000, 300, 420, 680 → TRI ≈ 18,9 %.",
	tool_irr_usecases_title: "Cas d’usage",
	tool_irr_usecase_1: "Homework.",
	tool_irr_usecase_2: "Quick sketch.",
	tool_irr_usecase_3: 'Sketch before talking to an advisor — not a substitute.',
	tool_irr_faq_q1: "Exemple ?",
	tool_irr_faq_a1: "Exemple : −1000, 300, 420, 680 → TRI ≈ 18,9 %.",
	tool_irr_faq_q2: "Formula?",
	tool_irr_faq_a2: "See Formula section.",
	tool_irr_faq_q3: "Advice?",
	tool_irr_faq_a3: "Educational only.",
	tool_irr_faq_q4: "Related?",
	tool_irr_faq_a4: 'Educational only.',
	tool_irr_article: "Calculateur TRI (IRR)",
	tool_irr_disclaimer: "Illustration éducative (IRR) uniquement — pas un conseil financier.",
	tool_irr_references: "Investopedia et formules de manuel.",
	tool_irr_ref_a_label: "Investopedia",
	tool_irr_ref_b_label: "Wikipedia",
};

export default fr;
