/**
 * i18n tool shard (how-to-calculate-break-even / fr).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_break_even_title: "Calculateur de seuil de rentabilité — Quantité pour couvrir les coûts",
	tool_break_even_description: "Calculez le seuil de rentabilité en unités et en chiffre d’affaires à partir des coûts fixes, du prix unitaire et du coût variable unitaire. La marge sur coûts variables est affichée. Exemple : coûts fixes 10 000, prix 50, variable 30 → 500 unités et CA 25 000. Dans le navigateur ; usage pédagogique, pas un conseil de gestion ni d’investissement.",
	tool_break_even_article: "Le seuil est atteint lorsque la marge couvre les coûts fixes. Formule unités = FC / (P − V), avec CA et marge sur la même page éducative.",
	tool_break_even_calculate: "Calculer",
	tool_break_even_sample: "Charger l’exemple",
	tool_break_even_clear: "Effacer",
	tool_break_even_fixed_label: "Coûts fixes",
	tool_break_even_fixed_ph: "ex. 10000",
	tool_break_even_price_label: "Prix unitaire",
	tool_break_even_price_ph: "ex. 50",
	tool_break_even_var_label: "Coût variable unitaire",
	tool_break_even_var_ph: "ex. 30",
	tool_break_even_result_units: "Unités de seuil",
	tool_break_even_result_revenue: "Chiffre d’affaires de seuil",
	tool_break_even_result_cm: "Marge unitaire sur coûts variables",
	tool_break_even_result_note: "Illustration pédagogique — pas un conseil de gestion ni d’investissement.",
	tool_break_even_err_fixed: "Les coûts fixes doivent être > 0.",
	tool_break_even_err_price: "Le prix doit être > 0 et le variable ≥ 0.",
	tool_break_even_err_margin: "Le prix doit être supérieur au coût variable.",
	tool_break_even_how_title: "Fonctionnement",
	tool_break_even_how_body: "Saisissez coûts fixes, prix et coût variable. L’outil calcule marge, unités et CA de seuil. Les secteurs restent dans les cas d’usage, sans URL séparée.",
	tool_break_even_formula_title: "Formule et hypothèses",
	tool_break_even_formula_body: "Unités Q = FC / (P − V). CA = Q × P. Marge = P − V. Hypothèses :",
	tool_break_even_formula_item_1: "Coûts et prix constants ; taxes et remises non modélisées.",
	tool_break_even_formula_item_2: "Vue mono-produit (ou unité moyenne).",
	tool_break_even_formula_item_3: "Résultats pédagogiques, pas des prévisions.",
	tool_break_even_example_title: "Exemple",
	tool_break_even_example: "Exemple : FC 10 000, prix 50, variable 30 → marge 20 → 500 unités et CA 25 000.",
	tool_break_even_usecases_title: "Cas d’usage",
	tool_break_even_usecase_1: "Cours : pratiquer la formule avec FC, P et V fixes.",
	tool_break_even_usecase_2: "Ordre de grandeur des unités pour couvrir les fixes (illustration).",
	tool_break_even_usecase_3: "Voir marge et CA de seuil sur une page.",
	tool_break_even_faq_q1: "Quelle formule ?",
	tool_break_even_faq_a1: "Q = FC / (P − V). CA = Q × P. Marge = P − V.",
	tool_break_even_faq_q2: "Si prix = variable ?",
	tool_break_even_faq_a2: "Pas de volume fini. Augmentez le prix ou baissez le variable.",
	tool_break_even_faq_q3: "Conseil de gestion ?",
	tool_break_even_faq_a3: "Non. Chiffres pédagogiques uniquement.",
	tool_break_even_faq_q4: "Unités ou CA ?",
	tool_break_even_faq_a4: "Les deux dans les résultats ; CA = unités × prix.",
	tool_break_even_disclaimer: "Résultats pédagogiques uniquement ; pas un conseil de gestion, fiscal ou d’investissement.",
	tool_break_even_references: "Définitions Investopedia du seuil de rentabilité et de la marge ; formule FC/(P−V).",
	tool_break_even_ref_bep_label: "Investopedia — Seuil de rentabilité",
	tool_break_even_ref_cm_label: "Investopedia — Marge sur coûts variables",
};

export default fr;
