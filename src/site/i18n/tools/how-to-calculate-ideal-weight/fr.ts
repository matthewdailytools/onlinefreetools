/**
 * i18n tool shard (how-to-calculate-ideal-weight / fr).
 * Réécriture indépendante selon le brief 03 (poids idéal) ; pas de calque de l’anglais.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_ideal_weight_title: 'Calculateur de poids idéal — Estimer la fourchette de poids',
	tool_ideal_weight_description:
		'Estimez le poids idéal (IBW) avec Devine, Robinson, Miller et Hamwi sur une seule page. Exemple : homme 178 cm → Devine ≈ 73,2 kg (fourchette ≈ 70,4–75,2 kg). Calcul dans le navigateur ; à titre éducatif uniquement — pas un avis médical ni un diagnostic.',
	tool_ideal_weight_article:
		'Les formules de poids idéal estiment un poids de référence à partir de la taille et du sexe. Cette page regroupe Devine, Robinson, Miller et Hamwi pour comparer la fourchette, avec un avertissement non médical.',
	tool_ideal_weight_calculate: 'Calculer',
	tool_ideal_weight_sample: 'Charger l’exemple',
	tool_ideal_weight_clear: 'Effacer',
	tool_ideal_weight_sex_label: 'Sexe (tables de formule)',
	tool_ideal_weight_sex_male: 'Homme',
	tool_ideal_weight_sex_female: 'Femme',
	tool_ideal_weight_height_label: 'Taille (cm)',
	tool_ideal_weight_height_ph: 'ex. 178',
	tool_ideal_weight_formula_label: 'Affichage de formule',
	tool_ideal_weight_formula_all: 'Toutes les formules (fourchette)',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: 'Poids idéal estimé',
	tool_ideal_weight_result_range: 'Fourchette des formules',
	tool_ideal_weight_result_note: 'Estimation éducative uniquement — pas un avis médical ni un diagnostic.',
	tool_ideal_weight_err_height: 'La taille doit être supérieure à zéro.',
	tool_ideal_weight_err_short:
		'Ces formules IBW sont mal définies en dessous d’environ 152 cm (5 ft). Traitez le résultat comme une illustration seulement.',
	tool_ideal_weight_how_title: 'Fonctionnement',
	tool_ideal_weight_how_body:
		'Saisissez le sexe et la taille en centimètres. L’outil convertit en pouces pour les formules IBW classiques et affiche des kilogrammes. Comparez les formules ici ; IMC et masse grasse restent sur d’autres pages.',
	tool_ideal_weight_formula_title: 'Formules et hypothèses',
	tool_ideal_weight_formula_body:
		'Conversion : 1 in = 2,54 cm. Au-dessus de 60 in (5 ft), Devine homme = 50 + 2,3×(in−60) ; femme = 45,5 + 2,3×(in−60). Robinson, Miller et Hamwi utilisent la même forme linéaire avec d’autres coefficients. À retenir :',
	tool_ideal_weight_formula_item_1: 'Issues de contextes de dosage / référence chez l’adulte — pas d’objectifs personnels.',
	tool_ideal_weight_formula_item_2: 'Morphotype, masse musculaire et grossesse ne sont pas modélisés.',
	tool_ideal_weight_formula_item_3: 'Résultats éducatifs illustratifs, pas des cibles cliniques ni un avis médical.',
	tool_ideal_weight_example_title: 'Exemple',
	tool_ideal_weight_example:
		'Exemple : homme, 178 cm → Devine ≈ 73,2 kg ; Robinson ≈ 71,1, Miller ≈ 70,4, Hamwi ≈ 75,2 (≈ 70,4–75,2 kg).',
	tool_ideal_weight_usecases_title: 'Quand l’utiliser',
	tool_ideal_weight_usecase_1: 'Cours : comparer les formules IBW classiques avec une même taille.',
	tool_ideal_weight_usecase_2: 'Repère éducatif approximatif avant d’en parler à un clinicien (pas un plan d’objectif).',
	tool_ideal_weight_usecase_3: 'Voir Devine vs Robinson sur une page, sans URLs séparées.',
	tool_ideal_weight_faq_q1: 'Quelle formule de poids idéal est la « bonne » ?',
	tool_ideal_weight_faq_a1:
		'Aucune n’est universelle. Devine est courant en enseignement ; Robinson, Miller et Hamwi diffèrent par les coefficients. Comparez-les ici.',
	tool_ideal_weight_faq_q2: 'Est-ce la même chose que l’IMC ?',
	tool_ideal_weight_faq_a2:
		'Non. L’IMC relie poids et taille. L’IBW estime un poids de référence à partir de la taille et du sexe seulement.',
	tool_ideal_weight_faq_q3: 'Est-ce un avis médical ?',
	tool_ideal_weight_faq_a3:
		'Non. Les chiffres sont des estimations éducatives uniquement : ni diagnostic, ni plan de traitement, ni prescription nutritionnelle.',
	tool_ideal_weight_faq_q4: 'Pourquoi convertir en pouces ?',
	tool_ideal_weight_faq_a4:
		'Les équations de type Devine publiées sont définies en pouces au-dessus de 5 pieds. Les cm sont convertis avant application.',
	tool_ideal_weight_disclaimer:
		'Les résultats de poids idéal sont des illustrations éducatives uniquement et ne remplacent pas un avis médical, un diagnostic ou une évaluation clinique. Consultez un professionnel qualifié pour les décisions de santé.',
	tool_ideal_weight_references:
		'Équations IBW classiques Devine/Robinson/Miller/Hamwi ; contexte éducatif dosage/IBW NCBI Bookshelf.',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — contexte du poids corporel idéal',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default fr;
