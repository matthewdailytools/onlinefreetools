/**
 * i18n tool shard (how-to-calculate-cagr / fr).
 * Taux CAGR %, valeur finale ou années ; YMYL pédagogique — pas un conseil d’investissement.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_cagr_title: "Calculateur de CAGR — Croissance annualisée entre deux valeurs",
	tool_cagr_description: "Calculez le taux de croissance annuel composé (CAGR) à partir des valeurs de début et de fin, ou résolvez à l’envers la valeur finale ou le nombre d’années. Exemple : 10 000 → 16 105,10 sur 5 ans → environ 10,00 % de CAGR. Illustration pédagogique uniquement — pas un conseil d’investissement.",
	tool_cagr_article: "Obtenez le CAGR, la valeur finale ou les années avec les identités ((VF/VD)^(1/n)−1), des lignes d’étapes et une vérification inverse.",
	tool_cagr_desc: "CAGR %, valeur finale ou années à partir de la valeur de début. À but pédagogique seulement.",

	tool_cagr_safety_banner: "À but pédagogique uniquement. Cette page fait de l’arithmétique CAGR de manuel. Ce n’est pas un conseil d’investissement, fiscal ou financier ; une croissance passée ou hypothétique ne garantit pas les résultats futurs.",
	tool_cagr_mode_label: "Que voulez-vous trouver ?",
	tool_cagr_mode_rate: "CAGR % à partir de début / fin / années",
	tool_cagr_mode_end: "Valeur finale à partir de début / CAGR / années",
	tool_cagr_mode_years: "Années à partir de début / fin / CAGR",
	tool_cagr_hint: "Toutes les entrées actives doivent être strictement positives. Le CAGR ignore les flux de trésorerie en cours de période et suppose une capitalisation une fois par an.",
	tool_cagr_begin_label: "Valeur de début",
	tool_cagr_begin_ph: "ex. 10000",
	tool_cagr_end_label: "Valeur finale",
	tool_cagr_end_ph: "ex. 16105.10",
	tool_cagr_rate_label: "CAGR %",
	tool_cagr_rate_ph: "ex. 10",
	tool_cagr_years_label: "Nombre d’années",
	tool_cagr_years_ph: "ex. 5",
	tool_cagr_calculate: "Calculer",
	tool_cagr_sample: "Charger un exemple",
	tool_cagr_clear: "Effacer",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "Valeur finale",
	tool_cagr_yearsOut_label: "Années",
	tool_cagr_multOut_label: "Multiple de croissance total",
	tool_cagr_steps_title: "Étapes",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%.",
	tool_cagr_step_end_tpl: "Finale = {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_step_years_tpl: "Années = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}.",
	tool_cagr_step_check_tpl: "Vérification : {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_result_note: "Suppose une capitalisation annuelle et aucun flux de trésorerie en cours de période. Illustration pédagogique uniquement — pas un conseil d’investissement.",
	tool_cagr_err_generic: "Saisissez des nombres positifs pour les champs actifs (par exemple début 10000, fin 16105.1, années 5).",

	tool_cagr_how_title: "Comment utiliser le calculateur de CAGR",
	tool_cagr_how_body: "Choisissez CAGR %, valeur finale ou années. Saisissez les valeurs connues, puis Calculer. Charger un exemple fait tourner 10000→16105.1 sur 5 ans (10 %), le cas inverse de valeur finale, les années à 10 % de CAGR, et le cas plus court 5000→8000 sur 3 ans.",
	tool_cagr_how_item_1: "Choisissez ce que vous voulez trouver.",
	tool_cagr_how_item_2: "Saisissez les valeurs positives connues pour ce mode.",
	tool_cagr_how_item_3: "Cliquez Calculer pour voir la réponse, le multiple et les étapes.",
	tool_cagr_how_item_4: "Utilisez Charger un exemple pour faire défiler les points de contrôle du manuel.",

	tool_cagr_why_choose_title: "Ce que ce calculateur de CAGR vous apporte",
	tool_cagr_why_choose_item_1: "Trois sens : CAGR %, valeur finale ou années.",
	tool_cagr_why_choose_item_2: "Un multiple de croissance (fin ÷ début) à côté de la réponse principale.",
	tool_cagr_why_choose_item_3: "Des étapes qui branchent vos chiffres dans les identités du CAGR.",
	tool_cagr_why_choose_item_4: "Une vérification inverse qui remultiplie début × (1+r)^n jusqu’à la fin.",
	tool_cagr_why_choose_item_5: "Frontière YMYL claire : arithmétique pédagogique seulement — pas un conseil d’investissement.",

	tool_cagr_formula_title: "Formules du CAGR",
	tool_cagr_formula_body: "Le CAGR est le taux annuel constant qui fait passer une valeur de début à une valeur finale en n années avec une capitalisation une fois par an.",
	tool_cagr_formula_item_1: "CAGR = ((VF ÷ VD)^(1 ÷ n) − 1) × 100. Exemple : ((16105.1/10000)^(1/5)−1)×100 ≈ 10%.",
	tool_cagr_formula_item_2: "VF = VD × (1 + CAGR/100)^n.",
	tool_cagr_formula_item_3: "n = ln(VF ÷ VD) ÷ ln(1 + CAGR/100).",
	tool_cagr_formula_item_4: "Exige VD > 0, VF > 0, n > 0 (et CAGR ≠ −100 % quand on résout les années).",
	tool_cagr_formula_item_5: "Ignore frais, impôts et flux en cours de période — contrairement à un TRI complet.",

	tool_cagr_example_title: "Exemples détaillés",
	tool_cagr_example: "Charger un exemple commence par 10 000 → 16 105,10 sur 5 ans → CAGR ≈ 10 %. Ensuite, 10 000 croît à 10 % pendant 5 ans pour revenir à ≈16 105. Puis les années à partir des mêmes bornes à 10 %. Le dernier exemple utilise 5 000 → 8 000 sur 3 ans.",

	tool_cagr_usecases_title: "Quand utiliser un calculateur de CAGR",
	tool_cagr_usecase_1: "Devoirs : annualiser une croissance multi-années avec la formule CAGR standard.",
	tool_cagr_usecase_2: "Comparer des bornes de chiffre d’affaires ou de portefeuille sur une base annualisée (illustration seulement).",
	tool_cagr_usecase_3: "Retrouver combien d’années un CAGR donné met à atteindre une cible.",
	tool_cagr_usecase_4: "Contraster avec le ROI simple sur la page ROI liée lorsque les années comptent.",

	tool_cagr_faq_q1: "Le CAGR inclut-il dépôts ou retraits ?",
	tool_cagr_faq_a1: "Non. Il n’utilise que début, fin et années. Pour des flux irréguliers, utilisez un outil de TRI.",
	tool_cagr_faq_q2: "Quelle formule de CAGR est utilisée ?",
	tool_cagr_faq_a2: "CAGR = ((Finale ÷ Début)^(1 ÷ Années) − 1) × 100. Les trois doivent être strictement positifs.",
	tool_cagr_faq_q3: "Est-ce un conseil d’investissement ?",
	tool_cagr_faq_a3: "Non. Les chiffres sont des illustrations pédagogiques uniquement — pas un conseil d’investissement, fiscal ou financier.",
	tool_cagr_faq_q4: "En quoi le CAGR diffère-t-il du ROI simple ?",
	tool_cagr_faq_a4: "Le ROI simple ignore le nombre d’années. Le CAGR annualise la croissance sur les années que vous saisissez.",
	tool_cagr_faq_q5: "Que se passe-t-il si début ou fin vaut zéro ou est négatif ?",
	tool_cagr_faq_a5: "Les deux doivent être > 0. Des entrées nulles ou négatives rendent la formule CAGR standard indéfinie ici.",
	tool_cagr_faq_q6: "Puis-je résoudre la valeur finale ou les années ?",
	tool_cagr_faq_a6: "Oui. Changez de mode pour projeter une valeur de début, ou résoudre les années à partir de début/fin/CAGR.",
	tool_cagr_faq_q7: "La capitalisation est-elle annuelle ?",
	tool_cagr_faq_a7: "Oui sur cette page. Le calendrier intra-annuel est ignoré.",

	tool_cagr_disclaimer: "Les résultats de CAGR sont des illustrations pédagogiques uniquement et ne constituent pas un conseil d’investissement, fiscal ou financier. Les rendements passés ou hypothétiques ne garantissent pas les résultats futurs. Les portefeuilles réels confrontent frais, impôts, flux de trésorerie et risques que cette page ne modélise pas.",
	tool_cagr_references: "Guides Investopedia sur la définition et la formule du CAGR ; taux annualisé standard ((VF/VD)^(1/n) − 1).",
	tool_cagr_ref_cagr_label: "Investopedia — Compound Annual Growth Rate (CAGR)",
	tool_cagr_ref_formula_label: "Investopedia — Formula for calculating CAGR",
};

export default fr;
