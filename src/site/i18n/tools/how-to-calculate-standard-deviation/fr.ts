/**
 * i18n tool shard (how-to-calculate-standard-deviation / fr).
 * Réécriture indépendante en français.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_std_dev_title: 'Calculateur d’écart-type — Écart-type et variance',
	tool_std_dev_description:
		'Collez une liste de nombres pour obtenir l’écart-type et la variance en mode échantillon (n−1) ou population (n). Jeu classique 2, 4, 4, 4, 5, 5, 7, 9 → écart-type population = 2 (échantillon ≈ 2,14). Calcul dans le navigateur : les valeurs restent sur l’appareil, sans envoi au serveur.',
	tool_std_dev_article:
		'L’écart-type décrit l’étalement autour de la moyenne. Choisissez l’échantillon (correction de Bessel, division par n−1) si la liste est un tirage, ou la population (division par n) si la liste est l’ensemble complet. La variance est le carré de cet écart-type.',
	tool_std_dev_calculate: 'Calculer',
	tool_std_dev_sample: 'Charger l’exemple',
	tool_std_dev_clear: 'Effacer',
	tool_std_dev_numbers_label: 'Nombres',
	tool_std_dev_numbers_ph: 'ex. 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: 'Séparez par des virgules, espaces ou retours à la ligne.',
	tool_std_dev_mode_label: 'Mode',
	tool_std_dev_mode_sample: 'Échantillon (n−1)',
	tool_std_dev_mode_population: 'Population (n)',
	tool_std_dev_result_count: 'Effectif',
	tool_std_dev_result_mean: 'Moyenne',
	tool_std_dev_result_variance: 'Variance',
	tool_std_dev_result_sd: 'Écart-type',
	tool_std_dev_result_note_sample: 'Mode échantillon : correction de Bessel (division par n−1).',
	tool_std_dev_result_note_population: 'Mode population : division par n (ensemble complet).',
	tool_std_dev_err_empty: 'Saisissez au moins un nombre valide.',
	tool_std_dev_err_sample_n: 'L’écart-type d’échantillon exige au moins deux nombres.',
	tool_std_dev_how_title: 'Principe',
	tool_std_dev_how_body:
		'Collez les valeurs, choisissez le mode, puis calculez. On obtient la moyenne, la somme des carrés des écarts, la variance (÷ n−1 ou ÷ n), puis la racine pour l’écart-type. Rien n’est envoyé au serveur.',
	tool_std_dev_formula_title: 'Formules',
	tool_std_dev_formula_body:
		'Soit x̄ la moyenne. La variance moyenne les carrés des écarts ; l’écart-type en est la racine carrée :',
	tool_std_dev_formula_item_1: 'Moyenne : x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: 'Variance d’échantillon : s² = Σ(xᵢ − x̄)² / (n − 1) ; s = √s²',
	tool_std_dev_formula_item_3: 'Variance de population : σ² = Σ(xᵢ − x̄)² / n ; σ = √σ²',
	tool_std_dev_example_title: 'Exemple chiffré',
	tool_std_dev_example:
		'Pour 2, 4, 4, 4, 5, 5, 7, 9 : moyenne 5, somme des carrés 32. Population : σ² = 4 → σ = 2. Échantillon : s² ≈ 4,571 → s ≈ 2,138. Le célèbre « SD = 2 » est la valeur population.',
	tool_std_dev_usecases_title: 'Cas d’usage',
	tool_std_dev_usecase_1: 'Vérifier un devoir avec une courte série de notes.',
	tool_std_dev_usecase_2: 'Estimer vite la dispersion d’une petite colonne avant un graphique.',
	tool_std_dev_usecase_3: 'Comparer la volatilité de deux courtes séries dans le même mode.',
	tool_std_dev_faq_q1: 'Échantillon ou population : que choisir ?',
	tool_std_dev_faq_a1:
		'Divisez par n−1 pour estimer une population plus large à partir d’un échantillon. Divisez par n si votre liste est l’ensemble entier.',
	tool_std_dev_faq_q2: 'Lien entre variance et écart-type ?',
	tool_std_dev_faq_a2:
		'La variance moyenne les écarts au carré. L’écart-type est sa racine, dans les mêmes unités que les données.',
	tool_std_dev_faq_q3: 'Pourquoi l’exemple vaut-il 2 ?',
	tool_std_dev_faq_a3:
		'Sur ce jeu, l’écart-type population vaut exactement 2 ; l’échantillon donne ≈ 2,14. Les manuels montrent souvent la figure population.',
	tool_std_dev_faq_q4: 'Mes nombres quittent-ils mon appareil ?',
	tool_std_dev_faq_a4:
		'Non. Le calcul reste dans l’onglet du navigateur ; aucune valeur n’est envoyée au serveur.',
	tool_std_dev_references:
		'Pages Wikipedia Écart type et Variance ; formules introductives échantillon / population.',
	tool_std_dev_ref_sd_label: 'Wikipedia — Écart type',
	tool_std_dev_ref_var_label: 'Wikipedia — Variance',
};

export default fr;
