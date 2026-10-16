/**
 * i18n 工具分片（how-to-calculate-markup / fr）。
 * 加价率：从成本/售价算百分比，或反推售价/成本；并排显示毛利率以便对照。
 */
import type { SiteLangDict } from '../../../types';

/** 法语 markup 计算器文案分片（与 en 键一致；占位符 {cost}{sell}{dollar}{pct}{margin} 勿改）。 */
const fr: SiteLangDict = {
	tool_markup_title: "Calculateur de markup — Taux, prix de vente ou coût",
	tool_markup_description: "Calculez le pourcentage de markup à partir du coût et du prix de vente, ou retrouvez le prix ou le coût pour un markup donné. Exemple : coût 50, vente 80 → markup 60 % (marge 37,5 %). Le markup divise par le coût ; la marge par les ventes. Calcul retail pédagogique — pas un conseil commercial.",
	tool_markup_article: "Obtenez le markup en %, le prix de vente ou le coût, avec la marge brute correspondante pour ne pas confondre markup et marge.",
	tool_markup_desc: "Calculez le markup % à partir du coût et du prix, ou résolvez vente ou coût. Affiche la marge pour comparer.",

	tool_markup_mode_label: "Que calculer ?",
	tool_markup_mode_pct: "Markup %",
	tool_markup_mode_sell: "Prix de vente",
	tool_markup_mode_cost: "Coût",
	tool_markup_hint: "Choisissez la valeur à trouver. Le markup utilise le coût au dénominateur ; la marge, le prix de vente. La virgule décimale est acceptée. Pédagogique uniquement — pas un conseil tarifaire.",
	tool_markup_cost_label: "Coût",
	tool_markup_cost_ph: "p. ex. 50",
	tool_markup_sell_label: "Prix de vente",
	tool_markup_sell_ph: "p. ex. 80",
	tool_markup_mk_label: "Markup %",
	tool_markup_mk_ph: "p. ex. 60",
	tool_markup_calculate: "Calculer",
	tool_markup_sample: "Charger un exemple",
	tool_markup_clear: "Effacer",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_sellOut_label: "Prix de vente",
	tool_markup_costOut_label: "Coût",
	tool_markup_profitOut_label: "Markup en euros",
	tool_markup_marginOut_label: "Marge brute %",
	tool_markup_steps_title: "Étapes",
	tool_markup_step_pct_tpl: "Markup % = (vente − coût) ÷ coût × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct} %.",
	tool_markup_step_sell_tpl: "Prix de vente = coût × (1 + markup %/100) = {cost} × (1 + {pct}/100) = {sell}.",
	tool_markup_step_cost_tpl: "Coût = vente ÷ (1 + markup %/100) = {sell} ÷ (1 + {pct}/100) = {cost}.",
	tool_markup_step_margin_tpl: "Marge brute % = (vente − coût) ÷ vente × 100 = {dollar} ÷ {sell} × 100 = {margin} %.",
	tool_markup_result_note: "Le markup divise par le coût ; la marge par le prix de vente. Même markup en euros, pourcentages différents. Pédagogique uniquement — pas un conseil fiscal, tarifaire ou d'investissement.",
	tool_markup_err_generic: "Saisissez un coût positif et un prix de vente ou un markup % valide pour le mode choisi (par ex. coût 50 et vente 80).",

	tool_markup_how_title: "Comment utiliser le calculateur de markup",
	tool_markup_how_body: "Indiquez si vous cherchez le markup %, le prix de vente ou le coût. Remplissez les champs affichés, puis Calculer. Charger un exemple enchaîne coût/vente → %, coût/% → vente et vente/% → coût.",
	tool_markup_how_item_1: "Sous « Que calculer ? », choisissez Markup %, Prix de vente ou Coût.",
	tool_markup_how_item_2: "Entrez les valeurs connues (coût et vente, ou coût et markup %, ou vente et markup %).",
	tool_markup_how_item_3: "Cliquez sur Calculer pour voir la valeur manquante, le markup en euros et la marge brute % correspondante.",
	tool_markup_how_item_4: "Exemple : 50/80 → 60 %, coût 40 à 25 % → vente 50, vente 120 à 50 % → coût 80.",

	tool_markup_why_choose_title: "Ce qu'offre ce calculateur de markup",
	tool_markup_why_choose_item_1: "Trois modes : markup % à partir du coût et du prix, prix à partir du coût et du %, ou coût à partir du prix et du %.",
	tool_markup_why_choose_item_2: "Markup en euros et marge brute % affichés à côté du markup pour distinguer les deux notions.",
	tool_markup_why_choose_item_3: "Lignes de calcul avec vos chiffres dans (P−C)/C et (P−C)/P.",
	tool_markup_why_choose_item_4: "Champs masqués lorsqu'ils ne servent pas au mode sélectionné.",
	tool_markup_why_choose_item_5: "Avertissement pédagogique clair — pas un conseil commercial, fiscal ou d'investissement.",

	tool_markup_formula_title: "Formules de markup",
	tool_markup_formula_body: "Le markup mesure la majoration par rapport au coût. La marge mesure le même profit en euros par rapport au prix de vente.",
	tool_markup_formula_item_1: "Markup % = (prix de vente − coût) ÷ coût × 100. Exemple : (80 − 50) ÷ 50 × 100 = 60 %.",
	tool_markup_formula_item_2: "Prix de vente = coût × (1 + markup %/100). Exemple : 40 × 1,25 = 50 à 25 % de markup.",
	tool_markup_formula_item_3: "Coût = prix de vente ÷ (1 + markup %/100). Exemple : 120 ÷ 1,5 = 80 à 50 % de markup.",
	tool_markup_formula_item_4: "Marge brute % = (prix de vente − coût) ÷ prix de vente × 100. Même exemple 50/80 → 37,5 %.",
	tool_markup_formula_item_5: "Un markup de 100 % signifie prix = 2 × coût (marge 50 %). Au-delà de 100 % si le prix > 2 × coût.",

	tool_markup_example_title: "Exemples détaillés",
	tool_markup_example: "L'exemple démarre avec coût 50 et vente 80 → markup 60 %, majoration 30 €, marge 37,5 %. Puis coût 40 à 25 % → vente 50. Puis vente 120 à 50 % → coût 80. Un cas à l'équilibre (100/100) affiche 0 % markup et 0 % marge.",

	tool_markup_usecases_title: "Quand utiliser un calculateur de markup",
	tool_markup_usecase_1: "Devoirs retail : convertir coût et prix catalogue en markup % avec étapes visibles.",
	tool_markup_usecase_2: "Grilles tarifaires : avec un markup cible, trouver le prix de vente à partir du coût.",
	tool_markup_usecase_3: "Coût inverse : à partir d'un prix connu et d'une politique de markup, retrouver le coût implicite.",
	tool_markup_usecase_4: "Clarifier le vocabulaire : montrer pourquoi 60 % de markup n'équivaut pas à 60 % de marge.",

	tool_markup_faq_q1: "Comment calculer le pourcentage de markup ?",
	tool_markup_faq_a1: "Soustrayez le coût du prix de vente, divisez par le coût, multipliez par 100. Exemple : coût 50, vente 80 → (80−50)/50 × 100 = 60 %.",
	tool_markup_faq_q2: "Quelle différence entre markup et marge ?",
	tool_markup_faq_a2: "Le markup divise le profit en euros par le coût ; la marge par le prix de vente. La même affaire 50/80 : 60 % markup et 37,5 % marge.",
	tool_markup_faq_q3: "Comment trouver le prix de vente à partir du coût et du markup % ?",
	tool_markup_faq_a3: "Vente = coût × (1 + markup %/100). À coût 40 et 25 % markup, vente = 40 × 1,25 = 50.",
	tool_markup_faq_q4: "Le markup peut-il dépasser 100 % ?",
	tool_markup_faq_a4: "Oui. Si le prix dépasse le double du coût, le markup dépasse 100 %. Exemple : coût 50, vente 150 → markup 200 %.",
	tool_markup_faq_q5: "Et si je vends sous le coût ?",
	tool_markup_faq_a5: "Markup et marge deviennent négatifs — perte unitaire avant autres charges.",
	tool_markup_faq_q6: "Taxes ou remises incluses ?",
	tool_markup_faq_a6: "Non. Saisissez les montants coût et prix que vous voulez comparer après avoir appliqué vous-même taxes ou remises.",
	tool_markup_faq_q7: "Est-ce un conseil financier ?",
	tool_markup_faq_a7: "Non. Arithmétique retail pédagogique uniquement — pas un conseil fiscal, tarifaire ou d'investissement.",

	tool_markup_disclaimer: "Illustration pédagogique de markup uniquement — pas un conseil financier, fiscal, tarifaire ou d'investissement.",
	tool_markup_references: "Investopedia et formules de manuel standard à titre pédagogique.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Marge bénéficiaire",
};

export default fr;
