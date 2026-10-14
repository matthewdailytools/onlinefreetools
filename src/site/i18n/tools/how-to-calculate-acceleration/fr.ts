/**
 * i18n tool shard (how-to-calculate-acceleration / fr).
 * Réécriture indépendante pour qui cherche « calcul accélération » / « calculer une accélération » :
 * accélération constante a = (v − v0) ÷ t ; isole a, v, v0 ou t avec le détail du calcul. Virgule décimale (9,8).
 */
import type { SiteLangDict } from '../../../types';

/** Dictionnaire français du calcul d’accélération ; mêmes clés que le maître en.ts. */
const fr: SiteLangDict = {
	tool_acceleration_title: "Calcul d’accélération — à partir de la variation de vitesse",
	tool_acceleration_description:
		"Calculer une accélération constante avec la formule a = (v − v0) ÷ t, ou retrouver la vitesse finale, la vitesse initiale ou la durée. Exemple : de 0 à 10 m/s en 2 s, a = 5 m/s². Chaque étape du processus est affichée.",
	tool_acceleration_calculate: "Calculer",
	tool_acceleration_sample: "Charger un exemple",
	tool_acceleration_clear: "Effacer",
	tool_acceleration_solve_label: "Inconnue à trouver",
	tool_acceleration_solve_a: "Accélération (a)",
	tool_acceleration_solve_v: "Vitesse finale (v)",
	tool_acceleration_solve_v0: "Vitesse initiale (v0)",
	tool_acceleration_solve_t: "Durée (t)",
	tool_acceleration_v0_label: "Vitesse initiale v0",
	tool_acceleration_v0_ph: "ex. 0",
	tool_acceleration_v_label: "Vitesse finale v",
	tool_acceleration_v_ph: "ex. 10",
	tool_acceleration_t_label: "Durée t",
	tool_acceleration_t_ph: "ex. 2",
	tool_acceleration_a_label: "Accélération a",
	tool_acceleration_a_ph: "ex. 5",
	tool_acceleration_accOut_label: "Accélération",
	tool_acceleration_vOut_label: "Vitesse finale",
	tool_acceleration_v0Out_label: "Vitesse initiale",
	tool_acceleration_tOut_label: "Durée",
	tool_acceleration_work_label: "Détail du calcul",
	tool_acceleration_result_note:
		"Hypothèse : accélération constante en ligne droite. Gardez des unités cohérentes pour la vitesse et le temps (m/s et s donnent des m/s²). Si les vitesses ont le même signe, une valeur de a négative signifie un freinage.",
	tool_acceleration_err_finite: "Saisissez un nombre valide dans chaque champ affiché.",
	tool_acceleration_err_time: "La durée doit être strictement positive.",
	tool_acceleration_err_zero_a: "Impossible de trouver la durée si l’accélération vaut 0 (division par zéro).",
	tool_acceleration_how_title: "Comment calculer l’accélération avec cet outil",
	tool_acceleration_how_body:
		"En mouvement rectiligne uniformément accéléré, l’accélération est la variation de vitesse divisée par la durée : a = (v − v0) ÷ t. Indiquez l’inconnue cherchée, remplissez le reste et l’outil réarrange la même formule.",
	tool_acceleration_how_item_1: "Dans Inconnue à trouver, choisissez accélération, vitesse finale, vitesse initiale ou durée.",
	tool_acceleration_how_item_2: "Remplissez les champs affichés avec un seul système d’unités (le SI reste le plus simple).",
	tool_acceleration_how_item_3: "Cliquez sur Calculer.",
	tool_acceleration_how_item_4: "Lisez le résultat et la ligne de calcul, par exemple a = (10 − 0) ÷ 2 = 5.",
	tool_acceleration_why_choose_title: "Pourquoi utiliser notre Calcul d’accélération",
	tool_acceleration_why_choose_item_1:
		"Le cadre est annoncé : mouvement rectiligne uniformément accéléré (MRUA), ni accélération variable ni mouvement circulaire.",
	tool_acceleration_why_choose_item_2:
		"Le détail s’affiche avec vos valeurs, de quoi recopier (v − v0) ÷ t ou v = v0 + a·t sur votre copie.",
	tool_acceleration_why_choose_item_3:
		"Quatre inconnues pour une seule formule : vous partez des données de l’énoncé, pas seulement d’une case a vide.",
	tool_acceleration_why_choose_item_4:
		"Les cas impossibles sont signalés : durée nulle ou négative, ou a = 0 quand on cherche la durée.",
	tool_acceleration_why_choose_item_5: "Le calcul se fait dans votre navigateur ; aucune donnée n’est envoyée au serveur.",
	tool_acceleration_formula_title: "Formule de l’accélération et ses variantes",
	tool_acceleration_formula_body:
		"Pour une accélération constante, a = (v − v0) ÷ t. En réarrangeant cette relation, on obtient les trois autres grandeurs sans changer la physique.",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t. Avec l’exemple : (10 − 0) ÷ 2 = 5.",
	tool_acceleration_formula_item_2: "v = v0 + a·t. Avec l’exemple : 0 + 5 × 2 = 10.",
	tool_acceleration_formula_item_3: "v0 = v − a·t. Avec l’exemple : 10 − 5 × 2 = 0.",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a, à condition que a ≠ 0. Avec l’exemple : (10 − 0) ÷ 5 = 2.",
	tool_acceleration_example_title: "Exemple détaillé",
	tool_acceleration_example:
		"Un mobile part de l’arrêt et atteint 10 m/s en 2 s. On cherche a : a = (10 − 0) ÷ 2 = 5 m/s². Passez ensuite sur Vitesse finale avec v0 = 0, a = 5 et t = 2 : on retrouve v = 10, le même mouvement lu dans l’autre sens.",
	tool_acceleration_usecases_title: "Dans quels cas l’utiliser",
	tool_acceleration_usecase_1: "Vérifier la correction d’un manuel en suivant le calcul étape par étape.",
	tool_acceleration_usecase_2: "Exercices de physique sur le MRUA, au lycée ou en première année.",
	tool_acceleration_usecase_3: "Trouver le temps nécessaire pour qu’un véhicule s’arrête avec une décélération constante.",
	tool_acceleration_usecase_4: "Contrôler qu’une voiture passant de 0 à 20 m/s en 4 s accélère bien de 5 m/s² en moyenne.",
	tool_acceleration_faq_q1: "Comment calculer une accélération ?",
	tool_acceleration_faq_a1:
		"On soustrait la vitesse initiale à la vitesse finale, puis on divise par la durée : a = (v − v0) ÷ t. De 0 à 10 m/s en 2 secondes, a = 5 m/s².",
	tool_acceleration_faq_q2: "Que signifie une accélération négative ?",
	tool_acceleration_faq_a2:
		"Le mobile ralentit (ou accélère dans le sens opposé à celui choisi comme positif). Si v0 = 20 et v = 10 en 2 s, a = (10 − 20) ÷ 2 = −5.",
	tool_acceleration_faq_q3: "Quelle différence avec la vitesse moyenne ?",
	tool_acceleration_faq_a3:
		"La vitesse moyenne, c’est distance ÷ temps. L’accélération mesure à quel rythme la vitesse elle-même change. Si vous cherchez seulement une vitesse à partir d’une distance et d’une durée, prenez le calculateur de vitesse.",
	tool_acceleration_faq_q4: "Quelles unités faut-il utiliser ?",
	tool_acceleration_faq_a4:
		"N’importe quel système cohérent. En mètres et secondes, le résultat est en m/s². Mélanger des km/h et des secondes sans conversion donne un résultat faux.",
	tool_acceleration_faq_q5: "L’accélération de la pesanteur vaut-elle 9,8 m/s² ?",
	tool_acceleration_faq_a5:
		"Près de la surface terrestre, on prend souvent g ≈ 9,8 m/s² comme accélération constante en négligeant les frottements de l’air. En chute libre, saisissez a = −9,8 (axe orienté vers le haut) pour trouver la vitesse ou la durée.",
	tool_acceleration_faq_q6: "Cet outil convient-il au mouvement circulaire ?",
	tool_acceleration_faq_a6:
		"Non. Il traite l’accélération constante en ligne droite. L’accélération centripète dépend de la vitesse et du rayon, avec une formule différente.",
	tool_acceleration_faq_q7: "Pourquoi la durée est-elle refusée quand a = 0 ?",
	tool_acceleration_faq_a7:
		"Avec a = 0, la vitesse ne change jamais : t = (v − v0) ÷ a n’est pas défini. Soit les deux vitesses sont déjà égales, soit l’accélération n’est pas nulle.",
	tool_acceleration_article: "Accélération",
	tool_acceleration_disclaimer:
		"Destiné à l’apprentissage et à la vérification d’exercices. Suppose une accélération constante en ligne droite ; un mouvement réel peut s’en écarter.",
	tool_acceleration_references: "Wikipédia — Accélération ; The Physics Hypertextbook — Equations of Motion.",
	tool_acceleration_ref_a_label: "Wikipédia — Accélération",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion (en anglais)",
};

export default fr;
