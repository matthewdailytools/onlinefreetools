/**
 * i18n tool shard (how-to-calculate-concrete / fr).
 * Français : calculateur de béton / volume — réécriture autonome.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_concrete_title: 'Calculateur de béton — Estimer le volume de béton',
	tool_concrete_description:
		'Estimez le volume de béton pour une dalle, une colonne ou un cylindre à partir de la longueur, largeur et épaisseur (ou diamètre et hauteur). Exemple : dalle 5 m × 4 m × 0.1 m → 2.0 m³. Le nombre de sacs est optionnel avec 0.015 m³ (ou 0.45 ft³) par sac — hypothèse indiquée sur la page. Calcul dans le navigateur ; les chiffres restent sur l’appareil et ne sont pas envoyés à un serveur.',
	tool_concrete_article:
		'Cet outil estime le volume de coulage par géométrie simple. Choisissez dalle, colonne rectangulaire ou cylindre, saisissez des cotes positives en mètres ou pieds, et lisez m³ ou ft³. Les sacs sont optionnels et dépendent du volume de sac documenté sous le résultat.',
	tool_concrete_calculate: 'Calculer',
	tool_concrete_sample: 'Exemple',
	tool_concrete_clear: 'Effacer',
	tool_concrete_shape_label: 'Forme',
	tool_concrete_shape_slab: 'Dalle',
	tool_concrete_shape_column: 'Colonne',
	tool_concrete_shape_cylinder: 'Cylindre',
	tool_concrete_unit_label: 'Unités',
	tool_concrete_unit_m: 'Mètres (m)',
	tool_concrete_unit_ft: 'Pieds (ft)',
	tool_concrete_length_label: 'Longueur',
	tool_concrete_width_label: 'Largeur',
	tool_concrete_thickness_label: 'Épaisseur',
	tool_concrete_height_label: 'Hauteur',
	tool_concrete_diameter_label: 'Diamètre',
	tool_concrete_length_ph: 'ex. 5',
	tool_concrete_width_ph: 'ex. 4',
	tool_concrete_thickness_ph: 'ex. 0.1',
	tool_concrete_height_ph: 'ex. 2.4',
	tool_concrete_diameter_ph: 'ex. 0.3',
	tool_concrete_bags_check: 'Estimer les sacs (optionnel)',
	tool_concrete_result_volume: 'Volume',
	tool_concrete_result_bags: 'Sacs (approx.)',
	tool_concrete_bags_note:
		'Hypothèse de sac : 0.015 m³ par sac en mode métrique, ou 0.45 ft³ en pieds. Les formats réels varient selon la marque et le mélange — arrondissez à la hausse et confirmez auprès du fournisseur.',
	tool_concrete_err_dims: 'Saisissez des nombres positifs pour chaque dimension.',
	tool_concrete_how_title: 'Comment ça marche',
	tool_concrete_how_body:
		'Choisissez la forme et les unités, puis entrez les cotes. Dalle et colonne rectangulaire : longueur × largeur × épaisseur (ou hauteur) ; cylindre : π × (diamètre/2)² × hauteur. Avec les sacs, le volume est divisé par la taille documentée puis arrondi vers le haut. Tout se passe dans l’onglet du navigateur ; rien n’est envoyé à un serveur.',
	tool_concrete_formula_title: 'Formules et hypothèses',
	tool_concrete_formula_body: 'Les volumes utilisent des solides géométriques fermés :',
	tool_concrete_formula_item_1: 'Dalle : V = longueur × largeur × épaisseur.',
	tool_concrete_formula_item_2: 'Colonne rectangulaire : V = longueur × largeur × hauteur.',
	tool_concrete_formula_item_3:
		'Cylindre : V = π × (diamètre ÷ 2)² × hauteur. Sacs = ceil(V ÷ volume du sac) avec 0.015 m³ ou 0.45 ft³.',
	tool_concrete_example_title: 'Exemple',
	tool_concrete_example:
		'Exemple (dalle, mètres) : 5 m × 4 m × 0.1 m → V = 2.0 m³. Avec 0.015 m³/sac → ≈ 134 sacs.',
	tool_concrete_usecases_title: 'Quand l’utiliser',
	tool_concrete_usecase_1: 'Estimer une dalle de terrasse ou de garage avant d’appeler la centrale.',
	tool_concrete_usecase_2: 'Dimensionner le béton en sacs pour poteaux de clôture ou semelles cylindriques.',
	tool_concrete_usecase_3: 'Vérifier un devis avec une géométrie L×l×e simple.',
	tool_concrete_faq_q1: 'Quelle formule pour le mode dalle ?',
	tool_concrete_faq_a1: 'Volume dalle = longueur × largeur × épaisseur. L’exemple 5 × 4 × 0.1 m donne 2.0 m³.',
	tool_concrete_faq_q2: 'Comment calcule-t-on les sacs ?',
	tool_concrete_faq_a2:
		'Sacs = ceil(volume ÷ volume du sac). Métrique : 0.015 m³ ; pieds : 0.45 ft³. Hypothèse de planification, pas une étiquette de marque.',
	tool_concrete_faq_q3: 'Cylindre : rayon ou diamètre ?',
	tool_concrete_faq_a3: 'Saisissez le diamètre extérieur ; le rayon = diamètre ÷ 2 dans V = π r² h.',
	tool_concrete_faq_q4: 'Mes chiffres sont-ils envoyés ?',
	tool_concrete_faq_a4:
		'Non. Le calcul se fait dans le navigateur sur votre appareil et n’est pas envoyé à un serveur.',
	tool_concrete_references: 'Facteurs NIST SP 811 ; guide Portland Cement Association.',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811 (conversions)',
	tool_concrete_ref_pca_label: 'Portland Cement Association — En savoir plus sur le béton',
};

export default fr;
