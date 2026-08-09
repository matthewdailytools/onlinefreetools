/**
 * i18n tool shard (how-to-calculate-cagr / fr).
 * Réécriture indépendante en français : UI complète, How/Formule/FAQ et avertissement YMYL.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_cagr_title: 'Calculateur CAGR — Taux de croissance annuel composé',
	tool_cagr_description:
		'Calculez le CAGR à partir de la valeur de départ, de la valeur d’arrivée et du nombre d’années. Exemple : 10 000 → 16 105,10 sur 5 ans → environ 10,00 %. Calcul dans le navigateur ; illustration pédagogique uniquement — pas un conseil en investissement.',
	tool_cagr_article:
		'Le CAGR est le taux annuel constant qui fait passer une valeur initiale à une valeur finale sur plusieurs années, en supposant une capitalisation une fois par an. Utile pour comparer grossièrement des croissances pluriannuelles ; ce n’est pas une prévision et les flux en milieu de période sont ignorés.',
	tool_cagr_calculate: 'Calculer',
	tool_cagr_sample: 'Charger l’exemple',
	tool_cagr_clear: 'Effacer',
	tool_cagr_begin_label: 'Valeur de départ',
	tool_cagr_begin_ph: 'ex. 10000',
	tool_cagr_end_label: 'Valeur d’arrivée',
	tool_cagr_end_ph: 'ex. 16105.10',
	tool_cagr_years_label: 'Nombre d’années',
	tool_cagr_years_ph: 'ex. 5',
	tool_cagr_result_label: 'CAGR',
	tool_cagr_result_note: 'Illustration pédagogique uniquement — pas un conseil en investissement.',
	tool_cagr_err_begin: 'La valeur de départ doit être supérieure à zéro.',
	tool_cagr_err_end: 'La valeur d’arrivée doit être supérieure à zéro.',
	tool_cagr_err_years: 'Le nombre d’années doit être supérieur à zéro.',
	tool_cagr_how_title: 'Mode d’emploi',
	tool_cagr_how_body:
		'Saisissez une valeur de départ, une valeur d’arrivée et un nombre d’années, tous positifs. L’outil applique la formule classique du CAGR en %. Les entrées nulles ou négatives sont refusées. Le calcul reste dans votre navigateur et sert uniquement à l’apprentissage.',
	tool_cagr_formula_title: 'Formule et hypothèses',
	tool_cagr_formula_body:
		'CAGR = ((Valeur d’arrivée ÷ Valeur de départ)^(1 ÷ Années) − 1) × 100. Gardez en tête :',
	tool_cagr_formula_item_1: 'La capitalisation est traitée comme une fois par an ; le calendrier intra-annuel est ignoré.',
	tool_cagr_formula_item_2: 'Pas de versements ni de retraits intermédiaires — seulement départ, arrivée et années.',
	tool_cagr_formula_item_3: 'Les résultats sont des illustrations pédagogiques, pas des prévisions ni des conseils d’investissement.',
	tool_cagr_example_title: 'Exemple',
	tool_cagr_example:
		'Exemple : départ 10 000, arrivée 16 105,10, années 5 → CAGR = ((16105.10 / 10000)^(1/5) − 1) × 100 ≈ 10,00 %.',
	tool_cagr_usecases_title: 'Dans quels cas l’utiliser',
	tool_cagr_usecase_1: 'Comparer sur une base annualisée la croissance pluriannuelle d’un placement ou d’un chiffre d’affaires (illustration seule).',
	tool_cagr_usecase_2: 'Travaux scolaires : s’entraîner au pourcentage CAGR avec des chiffres fixes.',
	tool_cagr_usecase_3: 'Esquisse rapide de rendement annualisé avant un entretien — ne remplace pas une analyse complète.',
	tool_cagr_faq_q1: 'Quelle formule de CAGR utilise cet outil ?',
	tool_cagr_faq_a1:
		'CAGR = ((Valeur d’arrivée ÷ Valeur de départ)^(1 ÷ Années) − 1) × 100. Départ, arrivée et années doivent tous être > 0.',
	tool_cagr_faq_q2: 'En quoi le CAGR diffère-t-il du ROI simple ?',
	tool_cagr_faq_a2:
		'Le ROI simple est un pourcentage sur une seule période et ignore le nombre d’années. Le CAGR annualise la croissance sur les années que vous saisissez.',
	tool_cagr_faq_q3: 'Que se passe-t-il si le départ ou l’arrivée est nul ou négatif ?',
	tool_cagr_faq_a3:
		'Les deux valeurs doivent être strictement positives. Zéro ou négatif rend la formule standard indéfinie ou trompeuse ici.',
	tool_cagr_faq_q4: 'S’agit-il d’un conseil en investissement ?',
	tool_cagr_faq_a4:
		'Non. Les chiffres sont uniquement pédagogiques et ne constituent pas un conseil en investissement, fiscal ou financier. Une croissance passée ou hypothétique ne garantit pas les résultats futurs.',
	tool_cagr_disclaimer:
		'Les résultats CAGR sont des illustrations pédagogiques uniquement et ne constituent pas un conseil en investissement, fiscal ou financier. Les rendements passés ou hypothétiques ne garantissent pas les résultats futurs. Les portefeuilles réels subissent frais, impôts, flux de trésorerie et risques non modélisés ici.',
	tool_cagr_references:
		'Définition et formules CAGR sur Investopedia ; taux annualisé standard ((EV/BV)^(1/n) − 1).',
	tool_cagr_ref_cagr_label: 'Investopedia — Compound Annual Growth Rate (CAGR)',
	tool_cagr_ref_formula_label: 'Investopedia — Formule de calcul du CAGR',
};

export default fr;
