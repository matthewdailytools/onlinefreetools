/**
 * i18n tool shard (how-to-calculate-gross-margin / fr).
 * Français : marge brute / bénéfice brut — réécriture indépendante.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_gross_margin_title: 'Calculateur de marge brute — Bénéfice brut et pourcentage',
	tool_gross_margin_description:
		'Calculez le bénéfice brut et la marge brute (%) à partir du chiffre d’affaires et du coût des ventes (COGS). Exemple : CA 10 000, COGS 6 000 → bénéfice 4 000 et marge 40 %. Dans le navigateur ; à titre éducatif uniquement — pas un conseil commercial ni d’investissement.',
	tool_gross_margin_article:
		'La marge brute indique la part du chiffre d’affaires qui reste après le coût des ventes. Cette page regroupe bénéfice brut et marge % sur une même URL éducative ; les marges nette ou d’exploitation restent ailleurs.',
	tool_gross_margin_calculate: 'Calculer',
	tool_gross_margin_sample: 'Charger l’exemple',
	tool_gross_margin_clear: 'Effacer',
	tool_gross_margin_revenue_label: 'Chiffre d’affaires',
	tool_gross_margin_revenue_ph: 'ex. 10000',
	tool_gross_margin_cogs_label: 'Coût des ventes (COGS)',
	tool_gross_margin_cogs_ph: 'ex. 6000',
	tool_gross_margin_result_profit: 'Bénéfice brut',
	tool_gross_margin_result_margin: 'Marge brute',
	tool_gross_margin_result_note: 'Illustration éducative uniquement — pas un conseil commercial ni d’investissement.',
	tool_gross_margin_err_revenue: 'Le chiffre d’affaires doit être supérieur à zéro.',
	tool_gross_margin_err_cogs: 'Le COGS doit être zéro ou un nombre positif.',
	tool_gross_margin_how_title: 'Fonctionnement',
	tool_gross_margin_how_body:
		'Saisissez le CA et le COGS. L’outil calcule le bénéfice brut et la marge %. Markup vs marge et bénéfice net restent en FAQ ou outils liés — sans URL porte.',
	tool_gross_margin_formula_title: 'Formule et hypothèses',
	tool_gross_margin_formula_body:
		'Bénéfice brut = CA − COGS. Marge brute % = (Bénéfice brut ÷ CA) × 100. Hypothèses :',
	tool_gross_margin_formula_item_1: 'CA et COGS portent sur la même période et devise ; impôts et charges d’exploitation non modélisés.',
	tool_gross_margin_formula_item_2: 'Le COGS est le coût produit uniquement — SG&A et intérêts exclus.',
	tool_gross_margin_formula_item_3: 'Les résultats sont des illustrations éducatives, pas des prévisions ni des conseils.',
	tool_gross_margin_example_title: 'Exemple',
	tool_gross_margin_example:
		'Exemple : CA 10 000, COGS 6 000 → bénéfice brut 4 000 → marge brute 40 %.',
	tool_gross_margin_usecases_title: 'Quand l’utiliser',
	tool_gross_margin_usecase_1: 'Cours : pratiquer la formule de marge brute avec CA et COGS fixes.',
	tool_gross_margin_usecase_2: 'Esquisse de marge produit avant un conseil (illustration seulement).',
	tool_gross_margin_usecase_3: 'Voir bénéfice et marge % ensemble sans URL markup séparée.',
	tool_gross_margin_faq_q1: 'Quelle formule de marge brute est utilisée ?',
	tool_gross_margin_faq_a1:
		'Bénéfice brut = CA − COGS. Marge brute % = Bénéfice brut ÷ CA × 100.',
	tool_gross_margin_faq_q2: 'Et si le COGS dépasse le CA ?',
	tool_gross_margin_faq_a2:
		'Bénéfice et marge deviennent négatifs. Le modèle l’autorise pour voir les pertes — ce n’est toujours pas un conseil.',
	tool_gross_margin_faq_q3: 'Est-ce un conseil commercial ?',
	tool_gross_margin_faq_a3:
		'Non. Les chiffres sont uniquement des illustrations éducatives, pas un conseil fiscal, commercial ou d’investissement.',
	tool_gross_margin_faq_q4: 'Marge brute vs markup ?',
	tool_gross_margin_faq_a4:
		'La marge divise le bénéfice par le CA ; le markup le divise par le coût. Cette page vise la marge ; le markup est seulement en FAQ.',
	tool_gross_margin_disclaimer:
		'Les résultats de marge brute sont des illustrations éducatives uniquement et ne constituent pas un conseil commercial, financier, fiscal ou d’investissement. Les entreprises réelles font face à des frais, impôts et classifications de coûts non modélisés ici.',
	tool_gross_margin_references:
		'Définitions Investopedia de gross margin et gross profit ; formule standard (CA − COGS) / CA.',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default fr;
