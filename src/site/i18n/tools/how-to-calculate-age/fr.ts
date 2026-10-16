/**
 * Fragment i18n d’outil (how-to-calculate-age / fr).
 * Âge chronologique A/M/J + jours totaux entre naissance et date de référence (calendrier UTC).
 * Réécriture FR autonome — pas de calque de la structure anglaise.
 */
import type { SiteLangDict } from '../../../types';

/** Textes FR (UI + SEO) du calculateur d’âge. */
const fr: SiteLangDict = {
	tool_age_title: "Calculateur d’âge — Années mois et jours entre deux dates",
	tool_age_description: "Calculez l’âge chronologique en années, mois et jours entre une date de naissance et une date de référence (jours calendaires UTC). Exemple : né le 2000-01-01, au 2026-08-09 → 26 ans, 7 mois, 8 jours. Affiche aussi le total de jours entiers. Mathématiques calendaires éducatives — pas un conseil juridique sur l’âge.",
	tool_age_article: "Âge calendaire en années, mois et jours restants entre deux dates, plus le total de jours, avec emprunts visibles et un raccourci Aujourd’hui.",
	tool_age_desc: "Âge en ans/mois/jours de la naissance à la date de référence. Total de jours inclus.",

	tool_age_hint: "Dates calendaires au format AAAA-MM-JJ (limites de jour UTC). La date de référence doit être le jour de naissance ou après. Aujourd’hui remplit la référence avec la date UTC du jour.",
	tool_age_birth_label: "Date de naissance",
	tool_age_asof_label: "Date de référence",
	tool_age_calculate: "Calculer",
	tool_age_today: "Utiliser aujourd’hui",
	tool_age_sample: "Charger un exemple",
	tool_age_clear: "Effacer",
	tool_age_ymdOut_label: "Âge",
	tool_age_yearsOut_label: "ans",
	tool_age_monthsOut_label: "mois",
	tool_age_daysOut_label: "jours",
	tool_age_totalDaysOut_label: "Jours entiers au total",
	tool_age_steps_title: "Étapes",
	tool_age_step_ymd_tpl: "De {birth} à {asof} : {y} ans, {m} mois, {d} jours après emprunt calendaire.",
	tool_age_step_borrow_tpl: "Emprunt de jours : si le jour de référence précède le jour de naissance dans le mois, on emprunte des jours au mois calendaire précédent.",
	tool_age_step_total_tpl: "Jours entiers = (référence − naissance) en midnights UTC ÷ 86400000 = {total}.",
	tool_age_result_note: "Dates calendaires UTC uniquement — pas d’heure ni de fuseau pour un seuil légal. Les jours bissextiles comptent s’ils tombent dans l’intervalle. Usage éducatif seulement — pas de conseil d’éligibilité ni d’âge légal.",
	tool_age_err_generic: "Saisissez des dates valides (AAAA-MM-JJ). La date de référence doit être au plus tôt celle de naissance.",

	tool_age_how_title: "Comment utiliser le calculateur d’âge",
	tool_age_how_body: "Indiquez naissance et date de référence, ou Utiliser aujourd’hui pour la référence, puis Calculer. Charger un exemple enchaîne 2000-01-01→2026-08-09, un cas de 29 février, l’âge 0 le même jour, et un emprunt à cheval sur une année.",
	tool_age_how_item_1: "Saisir la date de naissance.",
	tool_age_how_item_2: "Saisir la date de référence, ou cliquer Utiliser aujourd’hui.",
	tool_age_how_item_3: "Cliquer Calculer pour afficher ans, mois, jours et total de jours entiers.",
	tool_age_how_item_4: "Charger un exemple fait tourner des cas calendaires types.",

	tool_age_why_choose_title: "Ce que ce calculateur d’âge apporte",
	tool_age_why_choose_item_1: "Âge chronologique complet : années, mois et jours restants.",
	tool_age_why_choose_item_2: "Raccourci Utiliser aujourd’hui pour la date de référence.",
	tool_age_why_choose_item_3: "Total de jours entiers entre les deux dates calendaires UTC.",
	tool_age_why_choose_item_4: "Étapes d’emprunt visibles quand le jour du mois exige un prêt du mois précédent.",
	tool_age_why_choose_item_5: "Frontière claire : calcul calendaire seul — pas de conseil juridique ni d’éligibilité.",

	tool_age_formula_title: "Formules d’âge",
	tool_age_formula_body: "Lire les deux dates à minuit UTC. Soustraire années, puis mois, puis jours avec emprunt calendaire. Les jours totaux utilisent la différence en millisecondes divisée par 86400000.",
	tool_age_formula_item_1: "ans = année de référence − année de naissance (ajuster si mois/jour pas encore atteints).",
	tool_age_formula_item_2: "Si jour de référence < jour de naissance, emprunter la longueur du mois calendaire précédent.",
	tool_age_formula_item_3: "Si les mois deviennent négatifs, emprunter 12 mois aux années.",
	tool_age_formula_item_4: "joursTotaux = arrondi((référence − naissance) / 86400000) en UTC.",
	tool_age_formula_item_5: "Les jours bissextiles modifient le total quand ils tombent dans l’intervalle.",

	tool_age_example_title: "Exemples détaillés",
	tool_age_example: "Charger un exemple commence par naissance 2000-01-01 et référence 2026-08-09 → 26 ans, 7 mois, 8 jours. Ensuite un 29 février face au 28 février 2024. Puis âge 0 le même jour. Enfin le passage d’année 1985-12-31 → 2026-01-01.",

	tool_age_usecases_title: "Quand utiliser un calculateur d’âge",
	tool_age_usecase_1: "Formulaires qui demandent l’âge en années, mois et jours.",
	tool_age_usecase_2: "Devoirs sur les écarts calendaires et l’emprunt de mois.",
	tool_age_usecase_3: "Vérification rapide du total de jours entiers entre deux dates.",
	tool_age_usecase_4: "À combiner avec l’outil d’écart de dates quand la durée n’est pas présentée comme un âge.",

	tool_age_faq_q1: "Les fuseaux horaires sont-ils pris en compte ?",
	tool_age_faq_a1: "Non. Les dates sont des jours calendaires UTC, pas des heures locales.",
	tool_age_faq_q2: "Comment calcule-t-on l’âge chronologique ?",
	tool_age_faq_a2: "On soustrait années, mois et jours avec emprunt. Exemple : 2000-01-01 → 2026-08-09 = 26 a 7 m 8 j.",
	tool_age_faq_q3: "Que fait Utiliser aujourd’hui ?",
	tool_age_faq_a3: "Remplit la date de référence avec le jour calendaire UTC d’aujourd’hui et recalcule.",
	tool_age_faq_q4: "Comment les jours bissextiles influencent-ils le résultat ?",
	tool_age_faq_a4: "Ils comptent dans le total s’ils sont dans l’intervalle ; les longueurs de mois suivent le calendrier lors de l’emprunt.",
	tool_age_faq_q5: "Et si la naissance est après la date de référence ?",
	tool_age_faq_a5: "La page refuse ce cas. La référence doit être le jour de naissance ou après.",
	tool_age_faq_q6: "Est-ce un conseil d’âge légal ou d’éligibilité ?",
	tool_age_faq_a6: "Non. Uniquement des maths calendaires éducatives — pas de conseil juridique, médical ou d’éligibilité.",
	tool_age_faq_q7: "Différence avec l’écart entre deux dates ?",
	tool_age_faq_a7: "Ici la durée est présentée comme âge chronologique (A/M/J). Pour d’autres formulations, utiliser l’outil d’écart de dates associé.",

	tool_age_disclaimer: "Âge calendaire éducatif uniquement — pas de conseil juridique, d’éligibilité, médical ou d’identité officielle.",
	tool_age_references: "Wikipédia sur l’âge chronologique et la date calendaire, pour le contexte pédagogique.",
	tool_age_ref_a_label: "Wikipédia — Âge chronologique",
	tool_age_ref_b_label: "Wikipédia — Date calendaire",
};

export default fr;
