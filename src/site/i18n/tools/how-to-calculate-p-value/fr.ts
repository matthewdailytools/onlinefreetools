/**
 * i18n tool shard (how-to-calculate-p-value / fr).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_p_value_title: "Calculateur de p-valeur — Comment calculer une p-value",
	tool_p_value_description: "p-valeur normale bilatérale à partir d’un z via approximation erfc. Exemple : z = 1,96 → p ≈ 0,05. Hypothèses normale standard et deux queues explicites. Dans le navigateur, pour cours et vérifications rapides.",
	tool_p_value_calculate: "Calculer",
	tool_p_value_sample: "Charger l’exemple",
	tool_p_value_clear: "Effacer",
	tool_p_value_z_label: "Score z",
	tool_p_value_z_ph: "ex. 1.96",
	tool_p_value_pOut_label: "p-valeur bilatérale",
	tool_p_value_result_note: "Approximation normale centrée bilatérale pour apprendre — pas une suite complète de tests.",
	tool_p_value_err_generic: "Saisissez un score z fini.",
	tool_p_value_how_title: "Fonctionnement",
	tool_p_value_how_body: "Entrez un z issu d’un test normal standard. L’outil estime la p-valeur bilatérale via une approximation erfc et rappelle les hypothèses : modèle normal standard et deux queues. Dans le navigateur, pour les cours et vérifications rapides.",
	tool_p_value_formula_title: "Formule et hypothèses",
	tool_p_value_formula_body: "p bilatérale ≈ erfc(|z| / √2) sous normale standard. Limites :",
	tool_p_value_formula_item_1: "Suppose un z normal standard continu, pas un t, χ² ou test exact discret.",
	tool_p_value_formula_item_2: "Bilatéral uniquement sur cette page.",
	tool_p_value_formula_item_3: "Utilise une approximation numérique erfc ; pour l’apprentissage, pas un logiciel certifié.",
	tool_p_value_formula_item_4: "Une petite p ne prouve pas à elle seule une affirmation scientifique.",
	tool_p_value_example_title: "Exemple",
	tool_p_value_example: "Exemple : z = 1,96 → p bilatérale ≈ 0,05 (environ 0,049996 avec cette approximation).",
	tool_p_value_usecases_title: "Quand l’utiliser",
	tool_p_value_usecase_1: "Devoir : convertir un z connu en p bilatérale approximative.",
	tool_p_value_usecase_2: "Vérifier après avoir calculé z à partir d’une moyenne et d’un écart-type.",
	tool_p_value_usecase_3: "Comparer la règle 1,96 ↔ 0,05 à un résultat numérique.",
	tool_p_value_faq_q1: "Quelle distribution est supposée ?",
	tool_p_value_faq_a1: "Normale standard continue. Ce n’est pas un calculateur t, χ² ou binomial exact.",
	tool_p_value_faq_q2: "Unilatéral ou bilatéral ?",
	tool_p_value_faq_a2: "Bilatéral : les deux côtés au-delà de ±|z|.",
	tool_p_value_faq_q3: "Pourquoi z=1,96 ≈ 0,05 ?",
	tool_p_value_faq_a3: "Valeur critique habituelle pour un test à 5 % bilatéral ; l’erfc donne près de 0,05.",
	tool_p_value_faq_q4: "Une petite p prouve-t-elle l’alternative ?",
	tool_p_value_faq_a4: "Non. C’est une probabilité de queue sous hypothèses, pas une preuve automatique.",
	tool_p_value_disclaimer: "Résultats pédagogiques sous un modèle normal standard bilatéral ; ne remplacent pas un logiciel statistique ni une analyse professionnelle.",
	tool_p_value_references: "Articles Wikipedia sur la p-valeur et la loi normale ; fonction d’erreur complémentaire.",
	tool_p_value_ref_pvalue_label: "Wikipedia — Valeur p",
	tool_p_value_ref_normal_label: "Wikipedia — Loi normale",
	tool_p_value_article: "Calculez une p-valeur normale bilatérale à partir d’un z avec approximation erfc et hypothèses explicites.",
};

export default fr;
