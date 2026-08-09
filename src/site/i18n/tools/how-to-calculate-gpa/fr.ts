/**
 * i18n tool shard (how-to-calculate-gpa / fr).
 * Français réécrit de façon indépendante.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_gpa_title: "Calculateur GPA — Moyenne pondérée",
	tool_gpa_description: "Calculez un GPA pondéré par crédits sur une échelle 4.0 à partir des points et crédits par cours. Exemple : A=4.0 (3 cr) et B=3.0 (3 cr) → GPA 3.5. Les échelles varient selon l’établissement ; usage éducatif dans le navigateur.",
	tool_gpa_article: "Le GPA pondéré multiplie les points de chaque cours par ses crédits puis divise par le total. Cette page utilise une échelle 4.0 simple ; votre école peut utiliser +/- ou un autre système.",
	tool_gpa_calculate: "Calculer",
	tool_gpa_sample: "Exemple",
	tool_gpa_clear: "Effacer",
	tool_gpa_courses_label: "Cours (points, crédits par ligne)",
	tool_gpa_courses_ph: "ex. 4.0, 3",
	tool_gpa_courses_hint: "Un cours par ligne : points puis crédits. Sur 4.0, A≈4.0, B≈3.0.",
	tool_gpa_result_label: "GPA pondéré",
	tool_gpa_result_note: "Échelle 4.0 assumée. Vérifiez les règles officielles de votre relevé.",
	tool_gpa_err_parse: "Saisissez au moins une ligne : points, crédits (ex. 4.0, 3).",
	tool_gpa_err_credits: "Chaque cours doit avoir des crédits > 0.",
	tool_gpa_how_title: "Fonctionnement",
	tool_gpa_how_body: "Listez points et crédits par cours. L’outil pondère et divise par les crédits totaux dans le navigateur. Confirmez l’échelle de votre établissement.",
	tool_gpa_formula_title: "Formule et notes d’échelle",
	tool_gpa_formula_body: "GPA = Σ (points × crédits) / Σ crédits. À retenir :",
	tool_gpa_formula_item_1: "Démo avec mapping 4.0 simple ; pas de +/- automatique.",
	tool_gpa_formula_item_2: "Crédits positifs ; points finis.",
	tool_gpa_formula_item_3: "Université / lycée / régions peuvent différer — usage éducatif.",
	tool_gpa_example_title: "Exemple",
	tool_gpa_example: "Exemple : cours A = 4.0 (3 crédits), cours B = 3.0 (3 crédits) → GPA = (12 + 9) / 6 = 3.50.",
	tool_gpa_usecases_title: "Cas d’usage",
	tool_gpa_usecase_1: "Estimer le GPA du semestre avant le portail officiel.",
	tool_gpa_usecase_2: "S’entraîner aux moyennes pondérées par crédits en 4.0.",
	tool_gpa_usecase_3: "Scénarios de notes — pas une décision d’admission.",
	tool_gpa_faq_q1: "Quelle formule ?",
	tool_gpa_faq_a1: "GPA pondéré = Σ (points × crédits) / Σ crédits.",
	tool_gpa_faq_q2: "Tout le monde utilise 4.0 ?",
	tool_gpa_faq_a2: "Non. Il existe +/- , 5.0 pondéré ou pourcentages.",
	tool_gpa_faq_q3: "Puis-je saisir des lettres ?",
	tool_gpa_faq_a3: "Convertissez d’abord (A→4.0, B→3.0) puis entrez points et crédits.",
	tool_gpa_faq_q4: "Cela garantit une admission ?",
	tool_gpa_faq_a4: "Non. Illustration éducative uniquement.",
	tool_gpa_references: "Ressources College Board ; aperçu des échelles aux États-Unis.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipédia — Notation académique aux États-Unis",
};

export default fr;
