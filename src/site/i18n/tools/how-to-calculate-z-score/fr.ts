/**
 * i18n tool shard (how-to-calculate-z-score / fr).
 * Note brute ↔ score z avec z = (x − moyenne) / écart-type ; étapes et garde écart-type > 0.
 */
import type { SiteLangDict } from '../../../types';

/** Textes français du calculateur de score z (note brute ↔ score standard). */
const fr: SiteLangDict = {
	tool_z_score_title: "Calculateur de score z — Note brute ↔ score standard",
	tool_z_score_description: "Passez d’une note brute à un score z avec z = (x − moyenne) / écart-type, ou reconstituez la note à partir de z. Exemple : x = 85, moyenne = 70, écart-type = 10 → z = 1,5. L’écart-type doit être > 0. Mise à l’échelle linéaire pédagogique seulement — pas un test de normalité ni une p-valeur.",
	tool_z_score_article: "Obtenez un score standard à partir d’une note, d’une moyenne et d’un écart-type, ou retrouvez la note brute à partir de z, avec le détail des étapes.",
	tool_z_score_desc: "Note brute ↔ score z avec z = (x − moyenne) / écart-type. Affiche les étapes et |z|.",

	tool_z_score_mode_label: "Que voulez-vous trouver ?",
	tool_z_score_mode_z: "Score z à partir de la note brute",
	tool_z_score_mode_x: "Note brute à partir du score z",
	tool_z_score_hint: "Saisissez la moyenne et un écart-type positif. Choisissez si vous partez de la note ou de z.",
	tool_z_score_x_label: "Note brute (x)",
	tool_z_score_x_ph: "ex. 85",
	tool_z_score_z_label: "Score z (z)",
	tool_z_score_z_ph: "ex. 1,5",
	tool_z_score_mean_label: "Moyenne (μ)",
	tool_z_score_mean_ph: "ex. 70",
	tool_z_score_sd_label: "Écart-type (σ)",
	tool_z_score_sd_ph: "ex. 10",
	tool_z_score_calculate: "Calculer",
	tool_z_score_sample: "Charger l’exemple",
	tool_z_score_clear: "Effacer",
	tool_z_score_zOut_label: "Score z",
	tool_z_score_xOut_label: "Note brute",
	tool_z_score_diffOut_label: "x − moyenne",
	tool_z_score_absOut_label: "|z| (écarts-types par rapport à la moyenne)",
	tool_z_score_steps_title: "Étapes",
	tool_z_score_step_z_tpl: "z = (x − moyenne) / écart-type = ({x} − {mean}) / {sd} = {z}.",
	tool_z_score_step_x_tpl: "x = moyenne + z × écart-type = {mean} + {z} × {sd} = {x}.",
	tool_z_score_step_diff_tpl: "Écart à la moyenne : x − moyenne = {x} − {mean} = {diff}.",
	tool_z_score_step_abs_tpl: "Distance en écarts-types : |z| = |{z}| = {abs}.",
	tool_z_score_result_note: "L’algèbre de z n’exige pas la normalité ; beaucoup d’usages suivants (p-valeurs normales) si. À but pédagogique seulement — pas un logiciel statistique ni un plan d’étude.",
	tool_z_score_err_generic: "Saisissez des nombres finis dans les champs actifs, et un écart-type supérieur à 0 (par exemple x=85, moyenne=70, écart-type=10).",

	tool_z_score_how_title: "Comment utiliser le calculateur de score z",
	tool_z_score_how_body: "Choisissez note→z ou z→note, entrez moyenne et écart-type > 0, puis Calculer. Charger l’exemple enchaîne 85/70/10 → 1,5, l’inverse 1,5 → 85, x=moyenne → 0, puis une note sous la moyenne.",
	tool_z_score_how_item_1: "Choisissez Score z à partir de la note brute ou Note brute à partir du score z.",
	tool_z_score_how_item_2: "Entrez la moyenne et un écart-type positif.",
	tool_z_score_how_item_3: "Saisissez la note brute ou le score z selon le mode.",
	tool_z_score_how_item_4: "Cliquez Calculer pour voir la réponse, x−moyenne, |z| et les lignes d’étapes.",

	tool_z_score_why_choose_title: "Ce que ce calculateur de score z vous apporte",
	tool_z_score_why_choose_item_1: "Les deux sens : note brute → z, ou z → note brute.",
	tool_z_score_why_choose_item_2: "Des lignes d’étapes qui branchent vos chiffres dans z = (x − μ) / σ.",
	tool_z_score_why_choose_item_3: "Une garde écart-type > 0 : la division par zéro ne part jamais.",
	tool_z_score_why_choose_item_4: "|z| affiché comme nombre d’écarts-types par rapport à la moyenne.",
	tool_z_score_why_choose_item_5: "Limite claire : mise à l’échelle linéaire seulement — pas de test de normalité ni de p-valeur.",

	tool_z_score_formula_title: "Formules du score z",
	tool_z_score_formula_body: "Un score z (score standard) rescale une valeur par rapport à une moyenne et un écart-type donnés. Les unités s’annulent ; z est sans dimension.",
	tool_z_score_formula_item_1: "z = (x − μ) / σ. Exemple : (85 − 70) / 10 = 1,5.",
	tool_z_score_formula_item_2: "x = μ + z × σ. Exemple : 70 + 1,5 × 10 = 85.",
	tool_z_score_formula_item_3: "σ doit être positif ; un écart-type nul ou négatif est rejeté.",
	tool_z_score_formula_item_4: "z = 0 quand x égale la moyenne ; un z négatif signifie sous la moyenne.",
	tool_z_score_formula_item_5: "L’algèbre n’exige pas la normalité ; les p-valeurs de queue normale oui — utilisez la page p-valeur associée.",

	tool_z_score_example_title: "Exemples détaillés",
	tool_z_score_example: "Charger l’exemple commence par x=85, moyenne=70, écart-type=10 → z=1,5. Ensuite il inverse z=1,5 en x=85. Puis x=moyenne → z=0. Le dernier exemple prend x=55 → z=−1,5 (un écart-type et demi sous la moyenne).",

	tool_z_score_usecases_title: "Quand utiliser un calculateur de score z",
	tool_z_score_usecase_1: "Devoir : convertir une note d’examen en score standard avec les étapes visibles.",
	tool_z_score_usecase_2: "Comparer des notes issues de lois à moyennes ou dispersions différentes.",
	tool_z_score_usecase_3: "Retrouver la note brute quand vous connaissez déjà z, la moyenne et l’écart-type.",
	tool_z_score_usecase_4: "Préparer un z à brancher ensuite dans un contrôle de p-valeur de queue normale.",

	tool_z_score_faq_q1: "Que signifie z = 1,5 ?",
	tool_z_score_faq_a1: "La note brute est 1,5 écart-type au-dessus de la moyenne indiquée.",
	tool_z_score_faq_q2: "L’écart-type peut-il être nul ?",
	tool_z_score_faq_a2: "Non. La division par zéro est indéfinie ; saisissez un écart-type > 0.",
	tool_z_score_faq_q3: "Comment repasser d’un score z à une note brute ?",
	tool_z_score_faq_a3: "Utilisez x = moyenne + z × écart-type. Exemple : 70 + 1,5 × 10 = 85.",
	tool_z_score_faq_q4: "Faut-il supposer une distribution normale ?",
	tool_z_score_faq_a4: "L’algèbre de z non, mais beaucoup d’usages suivants (comme les p-valeurs normales) oui.",
	tool_z_score_faq_q5: "Un grand |z| est-il toujours statistiquement significatif ?",
	tool_z_score_faq_a5: "Pas à lui seul. La significativité demande un modèle et une p-valeur ou une valeur critique — pas seulement le nombre z.",
	tool_z_score_faq_q6: "Et si x égale la moyenne ?",
	tool_z_score_faq_a6: "Alors z = 0. La note est exactement au centre de la distribution indiquée.",
	tool_z_score_faq_q7: "Où obtenir une p-valeur à partir de z ?",
	tool_z_score_faq_a7: "Utilisez le calculateur de p-valeur associé une fois z connu. Cette page ne fait que la transformation linéaire en z.",

	tool_z_score_disclaimer: "Score z pédagogique seulement : z = (x − moyenne) / écart-type. Ne remplace pas un logiciel statistique, un test de normalité ni un plan d’étude.",
	tool_z_score_references: "Wikipedia score standard et écart-type pour le contexte pédagogique.",
	tool_z_score_ref_z_label: "Wikipedia — Score standard",
	tool_z_score_ref_sd_label: "Wikipedia — Écart-type",
};

export default fr;
