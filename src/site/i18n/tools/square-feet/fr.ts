/**
 * i18n tool shard (square-feet / fr).
 * Français : pieds carrés ↔ mètres carrés ; longueur × largeur ou surface connue ;
 * détail du calcul et facteur NIST ; exemples avec virgule décimale (78,97 / 11,15 / 92,90).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_squarefeet_title: "Pieds carrés en mètres carrés — convertir la surface d’une pièce",
	tool_squarefeet_description:
		"Convertissez pieds carrés et mètres carrés, ou calculez la surface d’une pièce à partir de la longueur × largeur. Facteur : 1 ft² = 0,09290304 m² (NIST). Exemple : 850 sq ft ≈ 78,97 m² ; pièce 10×12 ft = 120 ft² ≈ 11,15 m².",
	tool_squarefeet_calculate: "Calculer",
	tool_squarefeet_sample: "Charger un exemple",
	tool_squarefeet_clear: "Effacer",
	tool_squarefeet_mode_label: "Que connaissez-vous ?",
	tool_squarefeet_mode_dims: "Longueur et largeur de la pièce",
	tool_squarefeet_mode_area: "Je connais déjà la surface",
	tool_squarefeet_dim_unit_label: "Unité de longueur",
	tool_squarefeet_unit_ft: "Pieds (ft)",
	tool_squarefeet_unit_m: "Mètres (m)",
	tool_squarefeet_unit_in: "Pouces (in)",
	tool_squarefeet_length_label: "Longueur",
	tool_squarefeet_length_placeholder: "ex. 10",
	tool_squarefeet_width_label: "Largeur",
	tool_squarefeet_width_placeholder: "ex. 12",
	tool_squarefeet_area_label: "Surface",
	tool_squarefeet_area_placeholder: "ex. 850",
	tool_squarefeet_area_unit_label: "Unité de surface",
	tool_squarefeet_unit_sqft: "Pieds carrés (ft²)",
	tool_squarefeet_unit_sqm: "Mètres carrés (m²)",
	tool_squarefeet_sqft_label: "Pieds carrés",
	tool_squarefeet_sqm_label: "Mètres carrés",
	tool_squarefeet_work_label: "Détail du calcul",
	tool_squarefeet_result_note:
		"Arrondi à 2 décimales à l’affichage. Facteur exact : 1 ft² = 0,09290304 m² (NIST / SI). Surface plane uniquement — pas surface utile vs construite, ni estimation de prix.",
	tool_squarefeet_invalid_input: "Saisissez uniquement des nombres positifs.",
	tool_squarefeet_how_title: "Mode d’emploi",
	tool_squarefeet_how_body:
		"Soit vous multipliez longueur × largeur après avoir mis les deux côtés en pieds, soit vous convertissez une surface déjà connue avec le facteur SI exact. Vous obtenez toujours pieds carrés et mètres carrés, plus la ligne de calcul.",
	tool_squarefeet_how_item_1:
		"Choisissez Longueur et largeur si vous mesurez une pièce, ou Je connais déjà la surface si une annonce donne déjà des sq ft ou des m².",
	tool_squarefeet_how_item_2:
		"Pour les dimensions, choisissez pieds, mètres ou pouces et saisissez les deux côtés dans la même unité. Pour une surface connue, entrez le nombre et précisez ft² ou m².",
	tool_squarefeet_how_item_3: "Cliquez sur Calculer.",
	tool_squarefeet_how_item_4:
		"Lisez les deux unités et le détail, par exemple 10 × 12 = 120 ft², ou 850 ft² × 0,09290304 = 78,97 m².",
	tool_squarefeet_why_choose_title: "Pourquoi utiliser ce convertisseur pieds carrés / m²",
	tool_squarefeet_why_choose_item_1:
		"Le détail du calcul est affiché : vous voyez si les pouces ont été divisés par 12, ou si les mètres ont été convertis avec le facteur NIST.",
	tool_squarefeet_why_choose_item_2:
		"Deux modes couvrent les recherches réelles : dimensions d’une pièce, et surface déjà connue (850 sq ft, 1000 sq ft…).",
	tool_squarefeet_why_choose_item_3:
		"Facteur SI exact 1 ft² = 0,09290304 m² (pas 0,09 ni 0,093), aligné sur NIST SP 811.",
	tool_squarefeet_why_choose_item_4:
		"Limites claires : ne définit pas surface utile vs construite, et n’est pas un modèle de prix au m².",
	tool_squarefeet_why_choose_item_5: "Tout reste dans votre navigateur ; rien n’est envoyé.",
	tool_squarefeet_formula_title: "Formules et facteur de conversion",
	tool_squarefeet_formula_body:
		"La surface en pieds carrés est le produit longueur × largeur une fois les deux côtés en pieds. Les mètres carrés suivent le facteur exact ci-dessous.",
	tool_squarefeet_formula_item_1: "Pieds : A_ft² = L × W. Exemple : 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_2: "Mètres : A_ft² = (L × W) ÷ 0,09290304. Exemple : 3 m × 4 m = 12 m² ≈ 129,17 ft².",
	tool_squarefeet_formula_item_3: "Pouces : divisez chaque côté par 12 d’abord. Exemple : 120 in × 144 in → 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_4: "Exact : 1 ft² = 0,09290304 m², donc m² = ft² × 0,09290304 et ft² = m² ÷ 0,09290304.",
	tool_squarefeet_example_title: "Exemple",
	tool_squarefeet_example:
		"Exemple de pièce : 10 ft × 12 ft. Calcul : 10 × 12 = 120 ft² → 120 × 0,09290304 ≈ 11,15 m². Surface connue : 850 sq ft × 0,09290304 ≈ 78,97 m² — utile pour comparer une annonce US à des offres locales en m².",
	tool_squarefeet_usecases_title: "Cas d’usage",
	tool_squarefeet_usecase_1: "Comparer une annonce US en sq ft avec des annonces locales en m².",
	tool_squarefeet_usecase_2: "Estimer le sol ou la moquette d’une pièce rectangulaire avant commande (ajoutez les chutes à part).",
	tool_squarefeet_usecase_3: "Convertir un chiffre connu comme 1000 sq ft en voyage ou sur un plan.",
	tool_squarefeet_usecase_4: "Contrôles peinture ou rénovation quand les plans mélangent pieds et mètres.",
	tool_squarefeet_faq_q1: "Comment convertir des pieds carrés en mètres carrés ?",
	tool_squarefeet_faq_a1:
		"Multipliez par 0,09290304. Choisissez Je connais déjà la surface, entrez la valeur en sq ft : le détail montre la multiplication.",
	tool_squarefeet_faq_q2: "Combien de m² font 1 pied carré ?",
	tool_squarefeet_faq_a2:
		"Exactement 0,09290304 m² (NIST / SI). Donc 100 sq ft ≈ 9,29 m², 850 sq ft ≈ 78,97 m², et 1000 sq ft ≈ 92,90 m².",
	tool_squarefeet_faq_q3: "Comment calculer la surface d’une pièce en pieds carrés ?",
	tool_squarefeet_faq_a3:
		"Mesurez longueur et largeur dans la même unité, puis multipliez. En pieds : 10 × 12 = 120 sq ft. En pouces, divisez chaque côté par 12 d’abord.",
	tool_squarefeet_faq_q4: "Et les pièces en L ?",
	tool_squarefeet_faq_a4:
		"Découpez en rectangles, convertissez chacun, puis additionnez. Les polygones irréguliers ne sont pas modélisés ici.",
	tool_squarefeet_faq_q5: "Distinguez-vous surface utile et surface construite ?",
	tool_squarefeet_faq_a5:
		"Non. Seule la surface plane d’un rectangle est convertie. Les définitions d’annonce (utile/construite) sont hors périmètre.",
	tool_squarefeet_faq_q6: "Combien de chutes de sol prévoir ?",
	tool_squarefeet_faq_a6:
		"Le calculateur donne uniquement la surface au sol. Beaucoup de poseurs ajoutent environ 5–10 % pour les découpes ; vérifiez le guide du produit.",
	tool_squarefeet_faq_q7: "Puis-je estimer le prix d’un bien ?",
	tool_squarefeet_faq_a7:
		"Non. La conversion de surface n’est ni une estimation, ni une expertise, ni un modèle de prix au pied carré.",
	tool_squarefeet_article: "Pieds carrés",
	tool_squarefeet_disclaimer:
		"Pour annonces et planification de travaux. Pas un outil d’estimation immobilière, ni une définition surface utile vs construite.",
	tool_squarefeet_references:
		"NIST SP 811 — Guide for the Use of the International System of Units (SI) ; Wikipédia — Square foot.",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Guide for the Use of the International System of Units (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipédia — Square foot (en anglais)",
};

export default fr;
