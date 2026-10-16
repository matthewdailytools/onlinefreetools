/**
 * i18n tool shard (how-to-calculate-p-value / fr).
 * p unilatérale ou bilatérale normale à partir de z via erfc ; puces z critiques.
 */
import type { SiteLangDict } from '../../../types';

/** Textes français du calculateur de valeur p (z → p de queue normale). */
const fr: SiteLangDict = {
	tool_p_value_title: "Calculateur de valeur p — À partir d’un score z",
	tool_p_value_description: "Obtenez une valeur p normale unilatérale ou bilatérale à partir d’un score z grâce à une approximation erfc. Exemple : z = 1,96 → p bilatérale ≈ 0,05. Hypothèse : loi normale centrée réduite continue — pas un test t, χ² ni exact. À but pédagogique seulement.",
	tool_p_value_article: "Estimez des p-valeurs normales unilatérales ou bilatérales à partir d’un score z, avec erfc, raccourcis z critiques et détail des étapes.",
	tool_p_value_desc: "p normale uni- ou bilatérale à partir de z. Affiche les deux côtés et |z|.",

	tool_p_value_mode_label: "Type de queue",
	tool_p_value_mode_two: "Bilatéral",
	tool_p_value_mode_one: "Unilatéral",
	tool_p_value_hint: "Modèle : normale centrée réduite. Pour une normale symétrique, la p unilatérale vaut la moitié de la p bilatérale (même |z|).",
	tool_p_value_z_label: "Score z",
	tool_p_value_z_ph: "ex. 1,96",
	tool_p_value_chips_label: "Raccourcis z critiques courants",
	tool_p_value_chip_1645: "z = 1,645",
	tool_p_value_chip_196: "z = 1,96",
	tool_p_value_chip_2576: "z = 2,576",
	tool_p_value_calculate: "Calculer",
	tool_p_value_sample: "Charger l’exemple",
	tool_p_value_clear: "Effacer",
	tool_p_value_pOut_label: "Valeur p bilatérale",
	tool_p_value_pOneOut_label: "Valeur p unilatérale",
	tool_p_value_altOut_label: "Autre type de queue",
	tool_p_value_absOut_label: "|z|",
	tool_p_value_steps_title: "Étapes",
	tool_p_value_step_abs_tpl: "Prendre la valeur absolue : |z| = |{z}| = {abs}.",
	tool_p_value_step_two_tpl: "p bilatérale ≈ erfc(|z| / √2) = erfc({abs} / √2) ≈ {p}.",
	tool_p_value_step_one_tpl: "p unilatérale ≈ bilatérale / 2 = {two} / 2 ≈ {one}.",
	tool_p_value_result_note: "Approximation normale centrée réduite pour l’apprentissage. Pas un test t, χ², binomial exact ni un service de plan d’étude. Une petite p ne prouve pas à elle seule une affirmation.",
	tool_p_value_err_generic: "Saisissez un score z fini (par exemple 1,96).",

	tool_p_value_how_title: "Comment utiliser le calculateur de valeur p",
	tool_p_value_how_body: "Choisissez bilatéral ou unilatéral, entrez z (ou touchez une puce z critique), puis Calculer. Charger l’exemple enchaîne 1,96 bilatéral, 1,96 unilatéral, z=0 et z=2,576.",
	tool_p_value_how_item_1: "Choisissez bilatéral ou unilatéral.",
	tool_p_value_how_item_2: "Entrez un score z fini, ou touchez 1,645 / 1,96 / 2,576.",
	tool_p_value_how_item_3: "Cliquez Calculer pour voir la p choisie, l’autre type de queue et les étapes.",
	tool_p_value_how_item_4: "Utilisez Charger l’exemple pour faire tourner des points de contrôle classiques.",

	tool_p_value_why_choose_title: "Ce que ce calculateur de valeur p vous apporte",
	tool_p_value_why_choose_item_1: "p normale unilatérale et bilatérale à partir du même z.",
	tool_p_value_why_choose_item_2: "Puces z critiques pour les seuils bilatéraux familiers 10 % / 5 % / 1 %.",
	tool_p_value_why_choose_item_3: "Lignes d’étapes montrant erfc(|z|/√2) et la moitié unilatérale.",
	tool_p_value_why_choose_item_4: "Hypothèse claire : normale centrée réduite continue uniquement.",
	tool_p_value_why_choose_item_5: "Limite honnête : pas une suite complète de tests d’hypothèses ni une preuve d’affirmation.",

	tool_p_value_formula_title: "Formules de la valeur p normale",
	tool_p_value_formula_body: "Sous une normale centrée réduite continue, p bilatérale ≈ erfc(|z| / √2). Pour une normale symétrique, la p unilatérale en est la moitié.",
	tool_p_value_formula_item_1: "p bilatérale ≈ erfc(|z| / √2). Exemple : |z|=1,96 → p ≈ 0,05.",
	tool_p_value_formula_item_2: "p unilatérale ≈ bilatérale / 2. Même |z|=1,96 → unilatérale ≈ 0,025.",
	tool_p_value_formula_item_3: "Approximation numérique d’erfc — précision d’apprentissage, pas un logiciel certifié.",
	tool_p_value_formula_item_4: "Suppose un z normal standard, pas t, χ² ni tests exacts discrets.",
	tool_p_value_formula_item_5: "z = 0 → p bilatérale = 1 ; plus |z| est grand, plus p est petit.",

	tool_p_value_example_title: "Exemples détaillés",
	tool_p_value_example: "Charger l’exemple commence par z=1,96 bilatéral → p≈0,05. Ensuite la moitié unilatérale ≈0,025. Puis z=0 → p=1. Le dernier exemple prend z=2,576 (environ la valeur critique bilatérale à 1 %).",

	tool_p_value_usecases_title: "Quand utiliser un calculateur de valeur p",
	tool_p_value_usecase_1: "Devoir : convertir un z connu en p approximative de queue normale.",
	tool_p_value_usecase_2: "Vérification rapide après avoir calculé z à partir d’une moyenne et d’un écart-type sur la page score z associée.",
	tool_p_value_usecase_3: "Comparer la règle empirique 1,96 ↔ 0,05 à une sortie numérique.",
	tool_p_value_usecase_4: "Voir unilatéral et bilatéral côte à côte pour le même |z|.",

	tool_p_value_faq_q1: "Est-ce unilatéral ou bilatéral ?",
	tool_p_value_faq_a1: "Les deux. Choisissez le mode. Le bilatéral couvre ±|z| ; l’unilatéral en est la moitié sous une normale symétrique.",
	tool_p_value_faq_q2: "Quelle distribution est supposée ?",
	tool_p_value_faq_a2: "Une normale centrée réduite continue pour z. Ce n’est pas un calculateur de test t, χ² ou binomial exact.",
	tool_p_value_faq_q3: "Pourquoi z = 1,96 est-il proche de 0,05 ?",
	tool_p_value_faq_a3: "Sous une normale centrée réduite, |z| ≈ 1,96 est la valeur critique familière d’un test bilatéral à 5 % ; l’approximation erfc renvoie environ 0,05.",
	tool_p_value_faq_q4: "Une petite p prouve-t-elle l’hypothèse alternative ?",
	tool_p_value_faq_a4: "Non. Une p-valeur est une probabilité de queue sous des hypothèses énoncées, pas une preuve automatique d’une affirmation.",
	tool_p_value_faq_q5: "Comment l’unilatéral se relie-t-il au bilatéral ici ?",
	tool_p_value_faq_a5: "Pour une normale symétrique, p unilatérale ≈ p bilatérale ÷ 2 pour le même |z|.",
	tool_p_value_faq_q6: "Puis-je saisir un z négatif ?",
	tool_p_value_faq_a6: "Oui. La page utilise |z|, donc −1,96 et 1,96 donnent la même p bilatérale.",
	tool_p_value_faq_q7: "Où obtenir d’abord le score z ?",
	tool_p_value_faq_a7: "Utilisez le calculateur de score z associé si vous partez d’une note brute, d’une moyenne et d’un écart-type.",

	tool_p_value_disclaimer: "Approximation pédagogique sous modèle normal centré réduit uniquement — ne remplace pas un logiciel statistique, un plan d’étude ni une analyse professionnelle.",
	tool_p_value_references: "Wikipedia valeur p et loi normale ; fonction d’erreur complémentaire pour les queues normales.",
	tool_p_value_ref_pvalue_label: "Wikipedia — Valeur p",
	tool_p_value_ref_normal_label: "Wikipedia — Loi normale",
};

export default fr;
