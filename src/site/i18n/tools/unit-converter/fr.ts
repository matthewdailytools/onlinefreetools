/**
 * i18n tool shard (unit-converter / fr).
 * Français : convertisseur d’unités — réécriture indépendante.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_unit_converter_title: 'Convertisseur d’unités — Longueur / Masse / Température / Aire / Volume / Vitesse',
	tool_unit_converter_description:
		'Convertissez longueur, masse, température, aire, volume et vitesse sur une seule page avec des facteurs explicites. Exemple : 1 mile → 1,60934 km. Dans le navigateur ; facteurs éducatifs — pas un instrument de topographie ni un dispositif médical.',
	tool_unit_converter_article:
		'Un hub de conversion regroupe les catégories courantes sur une URL pour éviter une page par paire (cm↔pouce). Les workflows aire = longueur×largeur restent sur l’outil square-feet.',
	tool_unit_converter_calculate: 'Convertir',
	tool_unit_converter_sample: 'Charger l’exemple',
	tool_unit_converter_clear: 'Effacer',
	tool_unit_converter_value_label: 'Valeur',
	tool_unit_converter_value_ph: 'ex. 1',
	tool_unit_converter_from_label: 'Unité source',
	tool_unit_converter_to_label: 'Unité cible',
	tool_unit_converter_category_label: 'Catégorie',
	tool_unit_converter_cat_length: 'Longueur',
	tool_unit_converter_cat_mass: 'Masse',
	tool_unit_converter_cat_temperature: 'Température',
	tool_unit_converter_cat_area: 'Aire',
	tool_unit_converter_cat_volume: 'Volume',
	tool_unit_converter_cat_speed: 'Vitesse',
	tool_unit_converter_result_label: 'Résultat',
	tool_unit_converter_result_note: 'Conversion éducative uniquement — pas une mesure certifiée.',
	tool_unit_converter_err_value: 'Saisissez un nombre fini.',
	tool_unit_converter_err_temp: 'Température sous le zéro absolu pour l’échelle choisie.',
	tool_unit_converter_how_title: 'Fonctionnement',
	tool_unit_converter_how_body:
		'Choisissez une catégorie, une valeur et les unités. Les catégories restent ici ; l’aire via L×l est sur square-feet.',
	tool_unit_converter_formula_title: 'Facteurs et formules de température',
	tool_unit_converter_formula_body:
		'Les catégories linéaires passent par une unité SI de base. La température utilise des formules d’échelle. Hypothèses :',
	tool_unit_converter_formula_item_1: 'Facteurs SI / usuels (ex. 1 mi = 1609,344 m ; gallon US en volume).',
	tool_unit_converter_formula_item_2: '°C ↔ °F ↔ K : F = C×9/5+32 ; K = C+273,15 ; inverses correspondantes.',
	tool_unit_converter_formula_item_3: 'Résultats éducatifs, pas des mesures de laboratoire certifiées.',
	tool_unit_converter_example_title: 'Exemple',
	tool_unit_converter_example: 'Exemple (longueur) : 1 mile → 1,60934 km. Température : 0 °C → 32 °F.',
	tool_unit_converter_usecases_title: 'Quand l’utiliser',
	tool_unit_converter_usecase_1: 'Devoirs : km et miles sans une page par paire.',
	tool_unit_converter_usecase_2: 'Contrôles rapides de masse ou volume en cuisine ou bagages.',
	tool_unit_converter_usecase_3: 'Changer d’échelle de température pour la météo — pas pour des doses médicales.',
	tool_unit_converter_faq_q1: 'Pourquoi pas une page par paire d’unités ?',
	tool_unit_converter_faq_a1:
		'Des centaines d’URL quasi-doublons ressemblent à des doorways. Ce hub couvre les paires courantes ; square-feet pour L×l.',
	tool_unit_converter_faq_q2: 'Quelles définitions de mile et gallon ?',
	tool_unit_converter_faq_a2: 'Mile international (1609,344 m) et gallon liquide US (3,785411784 L).',
	tool_unit_converter_faq_q3: 'Comment convertir la température ?',
	tool_unit_converter_faq_a3: 'Via °C : F = C×9/5+32 et K = C+273,15. Valeurs sous zéro absolu refusées.',
	tool_unit_converter_faq_q4: 'Est-ce le même outil que square-feet ?',
	tool_unit_converter_faq_a4: 'Non. Ici : conversion d’unités d’aire. Square-feet : aire depuis longueur×largeur.',
	tool_unit_converter_disclaimer:
		'Les résultats sont des illustrations éducatives avec des facteurs standard. Ce ne sont pas des mesures certifiées ni un avis topographique, d’ingénierie ou médical.',
	tool_unit_converter_references: 'Relations SI NIST ; facteurs usuels ; formules °C/°F/K.',
	tool_unit_converter_ref_nist_label: 'NIST — Unités SI',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default fr;
