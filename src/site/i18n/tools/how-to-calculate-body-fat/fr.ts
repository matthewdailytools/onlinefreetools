/**
 * i18n tool shard (how-to-calculate-body-fat / fr).
 * Independent rewrite in French (not English skeleton); Navy/Army circumference, FAQ, YMYL.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_body_fat_title: 'Calculateur de masse grasse — Estimer le pourcentage avec les tours',
	tool_body_fat_description:
		'Estimez le pourcentage de masse grasse avec les formules de tours de la U.S. Navy (option Army sur la même page). Exemple : homme, 178 cm, cou 40 cm, taille 86 cm → ~15,3 %. Calcul dans le navigateur ; à titre éducatif — pas un avis médical ni un diagnostic.',
	tool_body_fat_article:
		'Les méthodes par tours estiment la masse grasse à partir de la taille et de mesures au mètre ruban. Navy et Army (famille DoD) partagent cette URL éducative ; les plis cutanés sont expliqués en FAQ comme méthode distincte, sans page séparée.',
	tool_body_fat_calculate: 'Calculer',
	tool_body_fat_sample: 'Charger un exemple',
	tool_body_fat_clear: 'Effacer',
	tool_body_fat_method_label: 'Méthode',
	tool_body_fat_method_navy: 'Tours de corps U.S. Navy',
	tool_body_fat_method_army: 'Tours U.S. Army / style DoD',
	tool_body_fat_sex_label: 'Sexe (tableaux de formules)',
	tool_body_fat_sex_male: 'Homme',
	tool_body_fat_sex_female: 'Femme',
	tool_body_fat_height_label: 'Taille (cm)',
	tool_body_fat_height_ph: 'p. ex. 178',
	tool_body_fat_neck_label: 'Tour de cou (cm)',
	tool_body_fat_neck_ph: 'p. ex. 40',
	tool_body_fat_waist_label: 'Tour de taille (cm)',
	tool_body_fat_waist_ph: 'p. ex. 86',
	tool_body_fat_hip_label: 'Tour de hanches (cm, femme)',
	tool_body_fat_hip_ph: 'p. ex. 96',
	tool_body_fat_result_label: 'Masse grasse estimée',
	tool_body_fat_result_note: 'Estimation éducative uniquement — pas un avis médical ni un diagnostic.',
	tool_body_fat_err_input: 'Taille, cou et taille doivent être des nombres positifs.',
	tool_body_fat_err_hip: 'Les formules femme exigent un tour de hanches positif.',
	tool_body_fat_err_geom: 'La taille doit dépasser le cou (et taille+hanches > cou pour les femmes).',
	tool_body_fat_how_title: 'Fonctionnement',
	tool_body_fat_how_body:
		'Saisissez sexe, taille et mesures en centimètres. L’outil convertit en pouces pour les formules log10 publiées, puis affiche le % estimé. Les plis cutanés restent en FAQ — même page.',
	tool_body_fat_formula_title: 'Formule et hypothèses de mesure',
	tool_body_fat_formula_body:
		'Homme : %MG ≈ 86,010×log10(taille−cou) − 70,041×log10(hauteur) + 36,387 (pouces). Femme : %MG ≈ 163,205×log10(taille+hanches−cou) − 97,684×log10(hauteur) + 78,387. Hypothèses :',
	tool_body_fat_formula_item_1: 'Mètre ruban aux points Navy/DoD standard ; posture et vêtements modifient le résultat.',
	tool_body_fat_formula_item_2: 'Entrée en cm, conversion 1 in = 2,54 cm avant les formules log10.',
	tool_body_fat_formula_item_3: 'Estimations éducatives, pas résultats cliniques DXA/Bod Pod ni avis médical.',
	tool_body_fat_example_title: 'Exemple',
	tool_body_fat_example:
		'Exemple : homme, méthode Navy, taille 178 cm, cou 40 cm, tour de taille 86 cm → ~15,3 % de masse grasse.',
	tool_body_fat_usecases_title: 'Quand l’utiliser',
	tool_body_fat_usecase_1: 'Cours : s’entraîner aux formules Navy avec des valeurs fixes.',
	tool_body_fat_usecase_2: 'Illustration grossière de suivi fitness avant un avis clinique (pas un diagnostic).',
	tool_body_fat_usecase_3: 'Comparer les libellés Navy et Army sur une seule page, sans seconde URL.',
	tool_body_fat_faq_q1: 'Quelle formule est utilisée ?',
	tool_body_fat_faq_a1:
		'Formules log10 de tours style U.S. Navy / DoD, en pouces après conversion des cm.',
	tool_body_fat_faq_q2: 'Navy vs Army sur cette page ?',
	tool_body_fat_faq_a2:
		'Deux estimateurs par tours de la même famille. Les libellés aident la recherche ; la rigueur de mesure compte plus que le nom.',
	tool_body_fat_faq_q3: 'Est-ce un avis médical ?',
	tool_body_fat_faq_a3:
		'Non. Les résultats sont des estimations éducatives, pas un diagnostic, un plan de traitement ni un test clinique de composition.',
	tool_body_fat_faq_q4: 'Et les plis cutanés ?',
	tool_body_fat_faq_a4:
		'Les équations de plis demandent plusieurs sites et une technique entraînée. Expliquées ici en FAQ, pas en URL séparée.',
	tool_body_fat_disclaimer:
		'Les estimations de masse grasse sont des illustrations éducatives et ne remplacent ni un avis médical, ni un diagnostic, ni un test clinique de composition. Consultez un professionnel qualifié pour vos décisions de santé.',
	tool_body_fat_references:
		'Équations de tours U.S. Navy / DoD ; notes éducatives ACE sur les calculateurs de masse grasse ; littérature revue par les pairs sur les méthodes par tours.',
	tool_body_fat_ref_ace_label: 'ACE — Calculateur de masse grasse (éducatif)',
	tool_body_fat_ref_pmc_label: 'PMC — Méthodes de masse grasse par tours de corps',
};

export default fr;
