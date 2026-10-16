/**
 * i18n 工具分片（how-to-calculate-gpa / fr）。
 * 法语检索向独立重写：calculateur GPA / moyenne pondérée / crédits / points de qualité；
 * 含字母芯片、步骤行、why_choose、faq_q5–q6；教育用途，非录取决定。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_gpa_title: "Calculateur GPA — Moyenne pondérée sur échelle 4.0",
	tool_gpa_description: "Calculez un GPA pondéré par crédits sur une échelle 4.0 courante à partir des points de note et des crédits par cours. Exemple : A = 4.0 (3 crédits) et B = 3.0 (3 crédits) → GPA 3.50. Les pastilles lettres insèrent les points ; les étapes affichent les points de qualité. Usage éducatif uniquement — pas une décision d’admission. Calcul dans le navigateur.",
	tool_gpa_article: "Saisissez points et crédits par cours, ou touchez une pastille lettre pour une grille 4.0 de base. La page affiche le GPA pondéré, les points de qualité, le total de crédits et les lignes d’étapes.",
	tool_gpa_desc: "GPA pondéré par crédits sur échelle 4.0, avec pastilles lettres et lignes d’étapes.",

	tool_gpa_safety_banner: "Illustration éducative uniquement. Les échelles varient selon l’établissement et le pays. Ce n’est pas une décision d’admission, de bourse ou de relevé officiel.",
	tool_gpa_hint: "Un cours par ligne : points de note puis crédits (virgule ou espace). Les crédits doivent être > 0. Les pastilles insèrent une grille 4.0 courante (A=4.0, A−=3.7, B+=3.3, …).",
	tool_gpa_courses_label: "Cours (points de note, crédits par ligne)",
	tool_gpa_courses_ph: "ex. 4.0, 3",
	tool_gpa_chips_label: "Insérer des points lettre (grille 4.0)",
	tool_gpa_calculate: "Calculer",
	tool_gpa_sample: "Exemple",
	tool_gpa_clear: "Effacer",
	tool_gpa_result_label: "GPA pondéré",
	tool_gpa_qp_label: "Points de qualité (Σ note × crédits)",
	tool_gpa_credits_label: "Crédits totaux",
	tool_gpa_courses_count_label: "Cours comptés",
	tool_gpa_steps_title: "Étapes",
	tool_gpa_step_row_tpl: "Cours {n} : {g} × {c} = {qc}.",
	tool_gpa_step_sum_tpl: "Points de qualité = {qp} ; crédits totaux = {credits}.",
	tool_gpa_step_gpa_tpl: "GPA = {qp} ÷ {credits} = {gpa}.",
	tool_gpa_result_note: "Suppose une échelle 4.0 simple. Les +/- et les pondérations (ex. 5.0) ne sont pas appliqués automatiquement. Établissements et pays diffèrent — vérifiez les règles de votre relevé. Usage éducatif uniquement.",
	tool_gpa_err_parse: "Saisissez au moins une ligne : points de note, crédits (par exemple 4.0, 3).",
	tool_gpa_err_credits: "Chaque cours doit avoir des crédits strictement positifs.",

	tool_gpa_how_title: "Comment utiliser le calculateur GPA",
	tool_gpa_how_body: "Listez chaque cours en points de note et crédits, ou touchez une pastille lettre puis ajoutez les crédits. Calculer affiche le GPA pondéré, les points de qualité et les étapes. Exemple enchaîne deux cours égaux, des points +/- et des crédits inégaux.",
	tool_gpa_how_item_1: "Saisissez un cours par ligne : points de note, puis crédits.",
	tool_gpa_how_item_2: "Optionnel : touchez une pastille lettre pour insérer des points 4.0 courants, puis tapez les crédits.",
	tool_gpa_how_item_3: "Cliquez Calculer pour voir le GPA, les points de qualité, les crédits totaux et les étapes.",
	tool_gpa_how_item_4: "Utilisez Exemple pour enchaîner crédits égaux, +/- et crédits inégaux.",

	tool_gpa_why_choose_title: "Ce que vous donne ce calculateur GPA",
	tool_gpa_why_choose_item_1: "GPA pondéré par crédits = Σ(note × crédits) / Σ crédits.",
	tool_gpa_why_choose_item_2: "Pastilles lettres pour une grille 4.0 de base (A à F).",
	tool_gpa_why_choose_item_3: "Points de qualité et crédits totaux à côté du GPA.",
	tool_gpa_why_choose_item_4: "Lignes d’étapes qui branchent vos chiffres dans la formule.",
	tool_gpa_why_choose_item_5: "Limite claire : usage éducatif uniquement — pas un conseil d’admission.",

	tool_gpa_formula_title: "Formule GPA et notes sur l’échelle 4.0",
	tool_gpa_formula_body: "Un GPA pondéré multiplie le point de chaque cours par ses crédits, somme ces produits (points de qualité), puis divise par le total de crédits.",
	tool_gpa_formula_item_1: "GPA = Σ (points de note × crédits) / Σ crédits.",
	tool_gpa_formula_item_2: "Grille 4.0 courante des pastilles : A=4.0, A−=3.7, B+=3.3, B=3.0, B−=2.7, C+=2.3, C=2.0, C−=1.7, D+=1.3, D=1.0, F=0.0.",
	tool_gpa_formula_item_3: "Les +/- et les pondérations honors/AP ne sont pas auto-appliqués au-delà de la grille des pastilles.",
	tool_gpa_formula_item_4: "Les crédits doivent être positifs ; les points de note doivent être des nombres finis.",
	tool_gpa_formula_item_5: "Université, lycée et systèmes régionaux peuvent différer — résultats éducatifs uniquement.",

	tool_gpa_example_title: "Exemples détaillés",
	tool_gpa_example: "Exemple commence par 4.0×3 et 3.0×3 → points de qualité 21, crédits 6, GPA 3.50. Ensuite des points +/- (3.7 et 3.3). Le dernier cas utilise des crédits inégaux (4.0×4 et 2.0×2) → GPA 3.33.",

	tool_gpa_usecases_title: "Quand utiliser un calculateur GPA",
	tool_gpa_usecase_1: "GPA de semestre approximatif à partir des points et crédits avant la mise à jour du portail officiel.",
	tool_gpa_usecase_2: "Devoirs : s’entraîner aux moyennes pondérées par crédits sur une échelle 4.0.",
	tool_gpa_usecase_3: "Scénarios what-if pour planifier — pas une décision d’admission ou de bourse.",
	tool_gpa_usecase_4: "Convertir des lettres avec la grille des pastilles, puis ajuster si votre établissement utilise une autre échelle.",

	tool_gpa_faq_q1: "Quelle formule de GPA est utilisée ?",
	tool_gpa_faq_a1: "GPA pondéré = Σ (points de note × crédits) / Σ crédits. Entrez des points déjà sur votre échelle, ou utilisez les pastilles lettres pour une grille 4.0 de base.",
	tool_gpa_faq_q2: "Toutes les écoles sont-elles sur 4.0 ?",
	tool_gpa_faq_a2: "Non. Beaucoup d’établissements américains utilisent le 4.0 avec +/- ; d’autres un 5.0 pondéré ou un système en pourcentage. Suivez toujours les règles de votre relevé.",
	tool_gpa_faq_q3: "Puis-je mélanger directement des notes lettres ?",
	tool_gpa_faq_a3: "Touchez une pastille lettre pour insérer les points, puis ajoutez les crédits sur la même ligne. Ou convertissez vous-même si votre échelle diffère.",
	tool_gpa_faq_q4: "Que sont les points de qualité ?",
	tool_gpa_faq_a4: "Les points de qualité sont Σ (note × crédits) — le numérateur avant la division par le total de crédits.",
	tool_gpa_faq_q5: "Inclut-il les cours honors pondérés (5.0) ?",
	tool_gpa_faq_a5: "Pas de pondération automatique. Entrez les points que votre établissement attribue (par exemple 5.0) si c’est votre règle.",
	tool_gpa_faq_q6: "Cela garantit-il une admission universitaire ?",
	tool_gpa_faq_a6: "Non. Le chiffre est une illustration éducative uniquement et n’est pas une décision d’admission ou de bourse.",

	tool_gpa_disclaimer: "Arithmétique GPA éducative uniquement — pas un conseil d’admission, de bourse ou de relevé officiel. Les échelles varient selon l’établissement et la région.",
	tool_gpa_references: "Ressources étudiants College Board ; aperçu des échelles de notation académiques aux États-Unis.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipédia — Notation académique aux États-Unis",
};

export default fr;
