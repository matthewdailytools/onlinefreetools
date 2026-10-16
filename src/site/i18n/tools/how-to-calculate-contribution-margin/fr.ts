/**
 * i18n 工具分片（how-to-calculate-contribution-margin / fr）。
 * 法语检索向重写：marge sur coût variable、taux、seuil de rentabilité。YMYL 仅教育用途。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_contribution_margin_title: "Calculateur de marge sur coût variable — Taux et seuil de rentabilité",
	tool_contribution_margin_description: "Calculez la marge sur coût variable (MCV) et son taux à partir du prix et du coût variable. Exemple : prix 50, CV 30 → MCV 20 (40 %). Quantité optionnelle pour la MCV totale ; charges fixes optionnelles pour le seuil en unités. À titre éducatif uniquement — pas un conseil commercial ni d’investissement.",
	tool_contribution_margin_article: "Obtenez la MCV unitaire et le taux, éventuellement la MCV totale selon les quantités, et le seuil de rentabilité en unités si vous saisissez les charges fixes.",
	tool_contribution_margin_desc: "MCV et taux depuis prix et CV. Totaux et seuil en unités en option.",

	tool_contribution_margin_safety_banner: "À titre éducatif uniquement. Cette page applique l’arithmétique scolaire de la marge sur coût variable. Ce n’est pas un conseil commercial, fiscal, comptable ou d’investissement.",
	tool_contribution_margin_hint: "Le prix doit être > 0. Le coût variable doit être ≥ 0 et ne pas dépasser le prix. Quantité et charges fixes sont facultatives.",
	tool_contribution_margin_price_label: "Prix unitaire",
	tool_contribution_margin_price_ph: "ex. 50",
	tool_contribution_margin_vc_label: "Coût variable unitaire",
	tool_contribution_margin_vc_ph: "ex. 30",
	tool_contribution_margin_units_label: "Quantité (optionnel)",
	tool_contribution_margin_units_ph: "ex. 100",
	tool_contribution_margin_fixed_label: "Charges fixes (optionnel)",
	tool_contribution_margin_fixed_ph: "ex. 10000",
	tool_contribution_margin_calculate: "Calculer",
	tool_contribution_margin_sample: "Charger l’exemple",
	tool_contribution_margin_clear: "Effacer",
	tool_contribution_margin_cmOut_label: "Marge sur coût variable (unitaire)",
	tool_contribution_margin_cmrOut_label: "Taux de MCV",
	tool_contribution_margin_totalOut_label: "Marge sur coût variable totale",
	tool_contribution_margin_beOut_label: "Seuil de rentabilité (unités)",
	tool_contribution_margin_steps_title: "Étapes de calcul",
	tool_contribution_margin_step_cm_tpl: "MCV = prix − CV = {price} − {vc} = {cm}.",
	tool_contribution_margin_step_ratio_tpl: "Taux de MCV = MCV ÷ prix × 100 = {cm} ÷ {price} × 100 = {ratio} %.",
	tool_contribution_margin_step_total_tpl: "MCV totale = MCV unitaire × quantité = {cm} × {units} = {total}.",
	tool_contribution_margin_step_be_tpl: "Seuil (unités) = charges fixes ÷ MCV = {fixed} ÷ {cm} = {be}.",
	tool_contribution_margin_result_note: "La MCV sert à couvrir les charges fixes puis le résultat, une fois les coûts variables payés. Mix multi-produits et impôts non modélisés. Éducatif uniquement — pas un conseil commercial.",
	tool_contribution_margin_err_generic: "Saisissez un prix > 0 et un coût variable ≥ 0 qui ne dépasse pas le prix (par ex. 50 et 30). Quantité optionnelle > 0 ; charges fixes optionnelles ≥ 0.",

	tool_contribution_margin_how_title: "Comment utiliser le calculateur de marge sur coût variable",
	tool_contribution_margin_how_body: "Indiquez prix et coût variable unitaires. Ajoutez au besoin une quantité pour la MCV totale et des charges fixes pour le seuil en unités. « Charger l’exemple » enchaîne unitaire seul, avec quantité, avec fixes, puis le cas combiné.",
	tool_contribution_margin_how_item_1: "Saisissez le prix unitaire et le coût variable unitaire.",
	tool_contribution_margin_how_item_2: "Optionnel : saisissez une quantité pour voir la MCV totale.",
	tool_contribution_margin_how_item_3: "Optionnel : saisissez les charges fixes pour le seuil en unités (nécessite MCV > 0).",
	tool_contribution_margin_how_item_4: "Cliquez sur Calculer pour afficher MCV, taux et lignes d’étapes.",

	tool_contribution_margin_why_choose_title: "Ce que ce calculateur de marge sur coût variable vous apporte",
	tool_contribution_margin_why_choose_item_1: "MCV unitaire et taux à partir du prix et du coût variable.",
	tool_contribution_margin_why_choose_item_2: "MCV totale si vous renseignez une quantité.",
	tool_contribution_margin_why_choose_item_3: "Seuil de rentabilité en unités si vous renseignez les charges fixes.",
	tool_contribution_margin_why_choose_item_4: "Lignes d’étapes qui branchent vos chiffres dans les formules.",
	tool_contribution_margin_why_choose_item_5: "Frontière YMYL claire : arithmétique éducative uniquement — pas un conseil commercial.",

	tool_contribution_margin_formula_title: "Formules de la marge sur coût variable",
	tool_contribution_margin_formula_body: "La marge sur coût variable est ce qui reste du prix après le coût variable — le montant disponible pour couvrir les charges fixes et le résultat.",
	tool_contribution_margin_formula_item_1: "MCV = prix − CV. Exemple : 50 − 30 = 20.",
	tool_contribution_margin_formula_item_2: "Taux de MCV = MCV ÷ prix. Exemple : 20 ÷ 50 = 40 %.",
	tool_contribution_margin_formula_item_3: "MCV totale = MCV unitaire × quantité.",
	tool_contribution_margin_formula_item_4: "Seuil (unités) = charges fixes ÷ MCV unitaire (si MCV > 0).",
	tool_contribution_margin_formula_item_5: "La marge brute utilise le COGS ; la MCV n’utilise que le coût variable — elles peuvent différer.",

	tool_contribution_margin_example_title: "Exemples chiffrés",
	tool_contribution_margin_example: "« Charger l’exemple » commence avec prix 50 et CV 30 → MCV 20 (40 %). Ensuite × 100 unités → MCV totale 2 000. Puis charges fixes 10 000 → seuil 500 unités. Le dernier exemple combine quantité et charges fixes.",

	tool_contribution_margin_usecases_title: "Quand utiliser un calculateur de marge sur coût variable",
	tool_contribution_margin_usecase_1: "Devoirs : MCV unitaire avant un exercice de seuil de rentabilité.",
	tool_contribution_margin_usecase_2: "Voir comment un changement de coût variable déplace le taux de MCV.",
	tool_contribution_margin_usecase_3: "Estimer combien d’unités couvrent un total de charges fixes donné (illustration seulement).",
	tool_contribution_margin_usecase_4: "Comparer avec la marge brute sur la page liée quand le COGS ≠ coût variable.",

	tool_contribution_margin_faq_q1: "Comment calcule-t-on la marge sur coût variable ?",
	tool_contribution_margin_faq_a1: "MCV = prix − coût variable. Exemple : 50 − 30 = 20 ; taux = 20 ÷ 50 = 40 %.",
	tool_contribution_margin_faq_q2: "En quoi la MCV diffère-t-elle de la marge brute ?",
	tool_contribution_margin_faq_a2: "La MCV part du coût variable. La marge brute part du COGS, qui peut inclure des postes non purement variables.",
	tool_contribution_margin_faq_q3: "Faut-il une quantité ?",
	tool_contribution_margin_faq_a3: "Non pour la MCV unitaire. Saisissez une quantité seulement si vous voulez la MCV totale.",
	tool_contribution_margin_faq_q4: "Comment le seuil en unités est-il calculé ici ?",
	tool_contribution_margin_faq_a4: "Seuil (unités) = charges fixes ÷ MCV unitaire lorsque MCV > 0. Pour une interface de seuil plus complète, utilisez le calculateur de seuil lié.",
	tool_contribution_margin_faq_q5: "Le coût variable peut-il dépasser le prix ?",
	tool_contribution_margin_faq_a5: "Cette page refuse ce cas pour la MCV unitaire (MCV négative). Vérifiez les saisies.",
	tool_contribution_margin_faq_q6: "Les mixes multi-produits sont-ils modélisés ?",
	tool_contribution_margin_faq_a6: "Non. Traitez chaque produit séparément ou utilisez un tableur pour une MCV pondérée.",
	tool_contribution_margin_faq_q7: "Est-ce un conseil commercial ?",
	tool_contribution_margin_faq_a7: "Non. Arithmétique éducative uniquement — pas un conseil financier, fiscal, comptable ou d’investissement.",

	tool_contribution_margin_disclaimer: "Marge sur coût variable à titre éducatif uniquement — pas un conseil financier, fiscal, comptable, commercial ou d’investissement.",
	tool_contribution_margin_references: "Articles Investopedia sur la contribution margin et le break-even, pour le contexte éducatif.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default fr;
