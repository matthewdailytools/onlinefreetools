/**
 * i18n 工具分片（how-to-calculate-one-rep-max / fr）。
 * 1RM 估算：Epley / Brzycki / Lombardi 对比与 %1RM 训练负荷表；含安全免责。
 */
import type { SiteLangDict } from '../../../types';

/** 法语界面与 SEO 文案（SiteLangDict；占位符 {w}{r}{orm}{lo}{hi}{p80} 勿改）。 */
const fr: SiteLangDict = {
	tool_one_rep_max_title: "Calculateur de 1RM — estimer votre max à une répétition à partir de la charge et des reps",
	tool_one_rep_max_description: "Estimez votre maximum à une répétition (1RM) à partir d’une série submaximale avec Epley 1RM ≈ w×(1+reps/30), et comparez Brzycki et Lombardi. Exemple : 100 pour 5 reps → environ 116,7. Tableau de charges en %1RM. Estimation pédagogique uniquement — pas un conseil d’entraînement ni médical.",
	tool_one_rep_max_article: "Estimez le 1RM à partir du poids et des répétitions avec Epley, comparez Brzycki et Lombardi, et lisez les pourcentages d’entraînement du 1RM Epley.",
	tool_one_rep_max_desc: "Estimez le 1RM sur une série submaximale avec Epley, Brzycki et Lombardi, plus un tableau de charges en %1RM.",

	tool_one_rep_max_safety_banner: "Estimation pédagogique uniquement. N’essayez pas un vrai max à partir de ce chiffre sans échauffement, pareurs et encadrement. Pas un avis médical ni d’entraînement.",
	tool_one_rep_max_weight_label: "Charge soulevée",
	tool_one_rep_max_weight_ph: "ex. 100",
	tool_one_rep_max_reps_label: "Répétitions réalisées",
	tool_one_rep_max_reps_ph: "ex. 5",
	tool_one_rep_max_hint: "Indiquez une charge que vous avez levée pour plusieurs reps propres avec une bonne technique. Les reps entières de 1 à 12 conviennent le mieux. Une virgule décimale pour le poids est acceptée.",
	tool_one_rep_max_calculate: "Calculer",
	tool_one_rep_max_sample: "Charger l’exemple",
	tool_one_rep_max_clear: "Effacer",
	tool_one_rep_max_ormOut_label: "1RM estimé (Epley)",
	tool_one_rep_max_pct_title: "Charges d’entraînement à partir du 1RM Epley",
	tool_one_rep_max_pct_col_pct: "% du 1RM",
	tool_one_rep_max_pct_col_load: "Charge",
	tool_one_rep_max_steps_title: "Étapes",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "Écart entre formules : {lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley : 1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}.",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki : 1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}.",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi : 1RM ≈ w × r^0,1 = {w} × {r}^0,1 = {orm}.",
	tool_one_rep_max_step_pct_tpl: "À 80 % du 1RM Epley ({orm}) : charge ≈ 0,8 × {orm} = {p80}.",
	tool_one_rep_max_result_note: "Les formules divergent davantage quand les reps augmentent. Préférez des séries ≤10 reps pour une estimation pédagogique. Échauffez-vous ; ne maxez jamais sur un chiffre brut du calculateur seul.",
	tool_one_rep_max_err_generic: "Entrez une charge positive et un nombre entier de reps de 1 à 12 (par exemple 100 et 5).",
	tool_one_rep_max_err_high_reps: "Au-delà d’environ 12 reps, ces formules deviennent peu fiables. Utilisez une série plus lourde avec moins de reps propres.",

	tool_one_rep_max_how_title: "Comment estimer votre maximum à une répétition",
	tool_one_rep_max_how_body: "Saisissez la charge levée et le nombre de reps propres, puis Calculer. Vous obtenez le 1RM Epley, les comparaisons Brzycki et Lombardi, et un tableau de pourcentages d’entraînement courants.",
	tool_one_rep_max_how_item_1: "Indiquez le poids de barre ou d’haltères pour une série terminée avec une bonne technique.",
	tool_one_rep_max_how_item_2: "Entrez le nombre de reps réussies (nombres entiers 1–12 recommandés).",
	tool_one_rep_max_how_item_3: "Cliquez sur Calculer pour voir le 1RM Epley avec Brzycki et Lombardi côte à côte.",
	tool_one_rep_max_how_item_4: "Consultez le tableau %1RM (50 %–95 %) pour des charges de travail approximatives ; Charger l’exemple alterne 100×5, 60×8, 80×3 et une vraie single.",

	tool_one_rep_max_why_choose_title: "Ce que ce calculateur de 1RM vous apporte",
	tool_one_rep_max_why_choose_item_1: "1RM Epley comme estimation principale, avec Brzycki et Lombardi pour comparer.",
	tool_one_rep_max_why_choose_item_2: "Une ligne d’écart entre formules pour voir jusqu’où les trois estimations divergent.",
	tool_one_rep_max_why_choose_item_3: "Un tableau de charges de 50 % à 95 % du 1RM Epley.",
	tool_one_rep_max_why_choose_item_4: "Des étapes claires qui injectent votre poids et vos reps dans chaque formule.",
	tool_one_rep_max_why_choose_item_5: "Bandeau de sécurité : pédagogique seulement — pas une consigne d’essayer un max.",

	tool_one_rep_max_formula_title: "Formules du maximum à une répétition",
	tool_one_rep_max_formula_body: "Le maximum à une répétition (1RM) est la charge la plus lourde que vous pourriez soulever une fois avec une bonne technique. Ces équations l’estiment à partir d’une série submaximale.",
	tool_one_rep_max_formula_item_1: "Epley : 1RM ≈ w × (1 + r/30). Exemple : w = 100, r = 5 → 100 × (1 + 5/30) = 116,67.",
	tool_one_rep_max_formula_item_2: "Brzycki : 1RM ≈ w × 36 ÷ (37 − r). Même exemple → 100 × 36 ÷ 32 = 112,5. Non défini pour r ≥ 37.",
	tool_one_rep_max_formula_item_3: "Lombardi : 1RM ≈ w × r^0,1. Même exemple → 100 × 5^0,1 ≈ 117,46.",
	tool_one_rep_max_formula_item_4: "Les estimations s’écartent quand les reps montent ; moins de reps propres resserrent l’estimation pédagogique.",
	tool_one_rep_max_formula_item_5: "Les pourcentages d’entraînement (par ex. 80 % du 1RM) servent seulement à planifier — ajustez selon fatigue, exercice et expérience.",

	tool_one_rep_max_example_title: "Exemples détaillés",
	tool_one_rep_max_example: "Charger l’exemple commence à 100 pour 5 reps : Epley ≈ 116,7, Brzycki 112,5, Lombardi ≈ 117,5. Puis 60 × 8, puis 80 × 3, puis une vraie single (135 × 1) où toutes les formules renvoient 135. Gardez une technique stricte ; arrêtez tôt si la forme se dégrade.",

	tool_one_rep_max_usecases_title: "Quand utiliser un calculateur de 1RM",
	tool_one_rep_max_usecase_1: "Devoirs ou cours : insérer poids et reps dans Epley et montrer les étapes.",
	tool_one_rep_max_usecase_2: "Esquisse de programme : convertir un 1RM estimé en séries de travail à 70 %–85 %.",
	tool_one_rep_max_usecase_3: "Comparer les formules : voir comment Epley, Brzycki et Lombardi divergent sur la même série.",
	tool_one_rep_max_usecase_4: "Éviter un vrai test max quand vous n’avez qu’une série submaximale notée.",

	tool_one_rep_max_faq_q1: "Comment calculer le 1RM avec la formule d’Epley ?",
	tool_one_rep_max_faq_a1: "Multipliez la charge par (1 + reps/30). Avec 100 pour 5 reps : 100 × (1 + 5/30) = 116,67. Cette page montre aussi Brzycki et Lombardi pour comparer.",
	tool_one_rep_max_faq_q2: "Quelle différence entre Epley et Brzycki ?",
	tool_one_rep_max_faq_a2: "Epley ajoute linéairement reps/30. Brzycki utilise 36/(37−reps). Pour 100×5, Epley donne ≈116,7 et Brzycki 112,5. Aucun ne remplace un test max supervisé.",
	tool_one_rep_max_faq_q3: "Combien de reps pour une bonne estimation ?",
	tool_one_rep_max_faq_a3: "En général 1–10 reps propres. Au-delà d’environ 12, ces formules deviennent peu fiables ; cette page demande une série plus lourde avec moins de reps.",
	tool_one_rep_max_faq_q4: "Que signifie 80 % du 1RM ?",
	tool_one_rep_max_faq_a4: "Intensité de travail courante : charge ≈ 0,8 × 1RM estimé. Pour un 1RM Epley de 116,7, 80 % vaut environ 93,3 dans la même unité.",
	tool_one_rep_max_faq_q5: "Est-il sûr d’essayer mon 1RM calculé ?",
	tool_one_rep_max_faq_a5: "Pas à partir de cette page seule. Traitez le chiffre comme pédagogique. Un vrai max exige échauffement, spotting, technique et idéalement encadrement — ce n’est pas un conseil de maxer.",
	tool_one_rep_max_faq_q6: "Les unités comptent-elles (kg vs lb) ?",
	tool_one_rep_max_faq_a6: "Utilisez une unité cohérente. Les formules sont des ratios sans dimension ; le 1RM sort dans la même unité que le poids saisi.",
	tool_one_rep_max_faq_q7: "Est-ce un avis médical ou d’entraînement ?",
	tool_one_rep_max_faq_a7: "Non. Calculateur pédagogique pour comprendre les équations 1RM courantes. Pour l’entraînement ou la santé, consultez un coach ou un professionnel de santé qualifié.",

	tool_one_rep_max_disclaimer: "Estimation pédagogique du 1RM uniquement — pas de coaching, d’avis médical ou professionnel. N’essayez pas un lift maximal en vous basant seulement sur ce calculateur.",
	tool_one_rep_max_references: "Descriptions courantes des équations de prédiction du 1RM dans manuels et Wikipedia.",
	tool_one_rep_max_ref_a_label: "Wikipédia — One-repetition maximum",
	tool_one_rep_max_ref_b_label: "Wikipédia — Musculation",
};

export default fr;
