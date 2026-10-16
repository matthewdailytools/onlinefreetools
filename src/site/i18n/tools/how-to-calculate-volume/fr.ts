/**
 * i18n 工具分片（how-to-calculate-volume / fr）。
 * 体积计算器：pavé、cube、sphère、cylindre、cône；含公式与分步展开。
 */
import type { SiteLangDict } from '../../../types';

/** 法语界面与 SEO 文案（SiteLangDict）。 */
const fr: SiteLangDict = {
	tool_volume_title: "Calculateur de volume — Trouver le volume d’un solide",
	tool_volume_description:
		"Calculez le volume d’un pavé droit (L×l×H), d’un cube (a³), d’une sphère (4/3 πr³), d’un cylindre (πr²h) ou d’un cône (⅓ πr²h). Exemple : pavé 2×3×4 → volume 24. Formule et ligne de calcul dans le navigateur, pour les devoirs et les croquis d’emballage, sans envoi au serveur.",
	tool_volume_article:
		"Choisissez un solide, saisissez les dimensions et obtenez le volume avec la formule adaptée et une ligne de développement — pavé, cube, sphère, cylindre ou cône.",
	tool_volume_desc: "Volume des solides courants avec la formule correspondante et une étape chiffrée.",

	tool_volume_shape_label: "Solide",
	tool_volume_shape_box: "Pavé droit (parallélépipède)",
	tool_volume_shape_cube: "Cube",
	tool_volume_shape_sphere: "Sphère",
	tool_volume_shape_cylinder: "Cylindre",
	tool_volume_shape_cone: "Cône",
	tool_volume_hint:
		"Saisissez des longueurs positives dans la même unité. La virgule décimale est acceptée. Le résultat est en unités cubiques (par ex. cm³ si vous utilisez des centimètres).",
	tool_volume_l_label: "Longueur",
	tool_volume_l_ph: "p. ex. 2",
	tool_volume_w_label: "Largeur",
	tool_volume_w_ph: "p. ex. 3",
	tool_volume_h_label: "Hauteur",
	tool_volume_h_ph: "p. ex. 4",
	tool_volume_radius_label: "Rayon",
	tool_volume_radius_ph: "p. ex. 3",
	tool_volume_cube_side: "Arête",
	tool_volume_calculate: "Calculer",
	tool_volume_sample: "Charger un exemple",
	tool_volume_clear: "Effacer",
	tool_volume_volOut_label: "Volume",
	tool_volume_steps_title: "Étapes",
	tool_volume_row_formula: "Formule utilisée",
	tool_volume_row_unit: "Unités",
	tool_volume_result_note:
		"Gardez la même unité pour toutes les mesures ; le volume est cette unité au cube. Géométrie pédagogique uniquement — pas un outil CAO ni de dimensionnement de cuve.",
	tool_volume_err_generic:
		"Saisissez des dimensions positives pour le solide choisi (par ex. 2, 3 et 4 pour un pavé).",
	tool_volume_formula_box: "V = L × l × H",
	tool_volume_formula_cube: "V = a³",
	tool_volume_formula_sphere: "V = (4/3) π r³",
	tool_volume_formula_cylinder: "V = π r² h",
	tool_volume_formula_cone: "V = (1/3) π r² h",
	tool_volume_step_box_tpl: "Pavé : V = L × l × H = {L} × {W} × {H} = {V}.",
	tool_volume_step_cube_tpl: "Cube : V = a³ = {a} × {a} × {a} = {V}.",
	tool_volume_step_sphere_tpl: "Sphère : V = (4/3) π r³ = (4/3) × π × {r}³ = (4/3) × π × {r3} = {V}.",
	tool_volume_step_cyl_tpl: "Cylindre : V = π r² h = π × {r}² × {H} = π × {r2} × {H} = {V}.",
	tool_volume_step_cone_tpl: "Cône : V = (1/3) π r² h = (1/3) × π × {r}² × {H} = (1/3) × π × {r2} × {H} = {V}.",

	tool_volume_how_title: "Comment utiliser le calculateur de volume",
	tool_volume_how_body:
		"Choisissez un solide, remplissez uniquement les champs affichés, puis cliquez sur Calculer. Charger un exemple fait défiler pavé, cube, sphère, cylindre et cône avec des réponses connues.",
	tool_volume_how_item_1: "Sélectionnez Pavé, Cube, Sphère, Cylindre ou Cône dans la liste.",
	tool_volume_how_item_2:
		"Saisissez les dimensions positives affichées (longueur/largeur/hauteur et/ou rayon).",
	tool_volume_how_item_3: "Cliquez sur Calculer pour voir le volume, la formule et une ligne de développement.",
	tool_volume_how_item_4:
		"Utilisez Charger un exemple : 2×3×4=24, cube arête 5, sphère r=3, cylindre r=2 h=10, cône r=3 h=9.",

	tool_volume_why_choose_title: "Pourquoi ce calculateur de volume",
	tool_volume_why_choose_item_1:
		"Cinq solides courants sur une seule page : pavé droit, cube, sphère, cylindre et cône.",
	tool_volume_why_choose_item_2:
		"La formule exacte s’affiche à côté du résultat pour recopier le calcul dans un devoir.",
	tool_volume_why_choose_item_3:
		"Une ligne de calcul injecte vos nombres dans L×l×H, a³, (4/3)πr³, πr²h ou (1/3)πr²h.",
	tool_volume_why_choose_item_4:
		"Les champs inutiles disparaissent — pas de rayon sur un pavé, pas de longueur sur une sphère.",
	tool_volume_why_choose_item_5:
		"Rappel d’unités clair : même unité en entrée → sortie cubique (cm → cm³).",

	tool_volume_formula_title: "Formules de volume",
	tool_volume_formula_body:
		"Le volume mesure l’espace occupé par un solide. Utilisez la formule qui correspond à la forme choisie.",
	tool_volume_formula_item_1: "Pavé droit : V = L × l × H. Exemple : 2 × 3 × 4 = 24.",
	tool_volume_formula_item_2: "Cube : V = a³. Exemple : arête 5 → 125.",
	tool_volume_formula_item_3: "Sphère : V = (4/3) π r³. Exemple : r = 3 → (4/3)π×27 ≈ 113,097.",
	tool_volume_formula_item_4: "Cylindre : V = π r² h. Exemple : r = 2, h = 10 → π×4×10 ≈ 125,664.",
	tool_volume_formula_item_5:
		"Cône : V = (1/3) π r² h. Exemple : r = 3, h = 9 → (1/3)π×9×9 ≈ 84,823. Un cône vaut un tiers du cylindre de même base et hauteur.",

	tool_volume_example_title: "Exemples détaillés",
	tool_volume_example:
		"Charger un exemple commence par un pavé 2×3×4 → V = 24. Puis cube arête 5 → 125. Sphère r=3 → env. 113,1. Cylindre r=2, h=10 → env. 125,7. Cône r=3, h=9 → env. 84,8. Conservez une seule unité pour toutes les mesures.",

	tool_volume_usecases_title: "Quand utiliser un calculateur de volume",
	tool_volume_usecase_1:
		"Devoirs : trouver le volume d’un pavé, d’une sphère ou d’un cylindre et recopier la ligne de formule.",
	tool_volume_usecase_2:
		"Croquis d’emballage : estimer l’espace pris par un pavé ou un cylindre avant de commander le matériau.",
	tool_volume_usecase_3:
		"Comparer les solides : voir qu’un cône contient un tiers du volume d’un cylindre de même base et hauteur.",
	tool_volume_usecase_4:
		"Vérification rapide : contrôler une réponse de manuel pour a³ ou (4/3)πr³ sans tableur.",

	tool_volume_faq_q1: "Comment calculer le volume d’un pavé droit ?",
	tool_volume_faq_a1:
		"Multipliez longueur × largeur × hauteur : V = L × l × H. Avec L = 2, l = 3 et H = 4, V = 24 dans l’unité cubique de vos mesures.",
	tool_volume_faq_q2: "Quel est le volume d’une sphère ?",
	tool_volume_faq_a2:
		"Utilisez V = (4/3) π r³. Pour un rayon 3, r³ = 27 donc V = (4/3) × π × 27 ≈ 113,097. La page utilise Math.PI.",
	tool_volume_faq_q3: "Quel lien entre cône et cylindre ?",
	tool_volume_faq_a3:
		"Un cône de même rayon de base et même hauteur qu’un cylindre a exactement un tiers de son volume : V_cône = (1/3) π r² h.",
	tool_volume_faq_q4: "Faut-il des unités cohérentes ?",
	tool_volume_faq_a4:
		"Oui. Saisissez toutes les dimensions dans la même unité (tout en centimètres, tout en pouces, etc.). Le volume sort en unité cubique (cm³, in³, …).",
	tool_volume_faq_q5: "Le cube est-il différent du pavé ?",
	tool_volume_faq_a5:
		"Le cube est un pavé dont les trois arêtes sont égales, donc V = a³. L’option cube n’affiche qu’une arête ; le pavé demande longueur, largeur et hauteur séparément.",
	tool_volume_faq_q6: "Puis-je utiliser une virgule décimale ?",
	tool_volume_faq_a6: "Oui. Des valeurs comme 2,5 sont lues comme 2,5. Les longueurs nulles ou négatives sont refusées.",
	tool_volume_faq_q7: "Est-ce pour la capacité d’une cuve ou la conception ?",
	tool_volume_faq_a7:
		"Non. Géométrie pédagogique seulement. Cuves réelles, niveaux de remplissage et modèles CAO exigent des outils dédiés.",

	tool_volume_disclaimer: "Volume pédagogique uniquement — pas de conseil d’ingénierie, de cuve ou de CAO.",
	tool_volume_references: "Formules classiques de géométrie dans l’espace.",
	tool_volume_ref_a_label: "Wikipédia — Volume",
	tool_volume_ref_b_label: "Wikipédia — Sphère",
	tool_volume_ref_c_label: "Wikipédia — Cylindre",
};

export default fr;
