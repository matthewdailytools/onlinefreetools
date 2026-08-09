/**
 * i18n tool shard (how-to-calculate-paint / fr).
 * French rewrite for recherche «calculateur peinture / quantité de peinture».
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_paint_title: 'Calculateur de peinture — Estimer la quantité nécessaire',
	tool_paint_description:
		'Estimez les litres de peinture à partir de la surface de mur en m² (ou longueur × hauteur × murs), du nombre de couches et du rendement en m²/L (défaut 10). Exemple : 40 m², 2 couches, 10 m²/L → 8 L. Le décompte optionnel de pots suppose 3,78 L par pot. Calcul dans le navigateur ; les chiffres restent sur l’appareil et ne sont pas envoyés au serveur.',
	tool_paint_article:
		'Transforme la surface et le rendement du produit en litres avant l’achat. Saisissez la surface ou construisez-la avec longueur, hauteur et nombre de murs.',
	tool_paint_calculate: 'Calculer',
	tool_paint_sample: 'Exemple',
	tool_paint_clear: 'Effacer',
	tool_paint_mode_label: 'Saisie du mur',
	tool_paint_mode_area: 'Surface (m²)',
	tool_paint_mode_lhw: 'Longueur × hauteur × murs',
	tool_paint_area_label: 'Surface de mur (m²)',
	tool_paint_area_ph: 'ex. 40',
	tool_paint_len_label: 'Longueur (m)',
	tool_paint_height_label: 'Hauteur (m)',
	tool_paint_walls_label: 'Nombre de murs',
	tool_paint_len_ph: 'ex. 5',
	tool_paint_height_ph: 'ex. 2.5',
	tool_paint_walls_ph: 'ex. 4',
	tool_paint_coats_label: 'Couches',
	tool_paint_coats_ph: 'ex. 2',
	tool_paint_coverage_label: 'Rendement (m²/L)',
	tool_paint_coverage_ph: 'ex. 10',
	tool_paint_coverage_hint: '10 m²/L est un point de départ ; vérifiez l’étiquette du pot.',
	tool_paint_cans_label: 'Afficher aussi les pots (3,78 L chacun)',
	tool_paint_result_liters: 'Peinture nécessaire',
	tool_paint_result_area: 'Surface utilisée',
	tool_paint_result_cans: 'Pots (3,78 L)',
	tool_paint_err_input: 'Saisissez une surface positive (ou longueur, hauteur et murs), des couches et un rendement positifs.',
	tool_paint_how_title: 'Fonctionnement',
	tool_paint_how_body:
		'Choisissez surface ou longueur × hauteur × murs, indiquez couches et rendement. Litres = surface × couches ÷ rendement. Avec les pots, division par 3,78 puis arrondi supérieur. Tout dans l’onglet du navigateur, sans envoi au serveur.',
	tool_paint_formula_title: 'Formule et hypothèses',
	tool_paint_formula_body: 'Le volume utilise surface, couches et rendement d’étiquette :',
	tool_paint_formula_item_1: 'Surface A = m² directs, ou longueur × hauteur × nombre de murs (mètres).',
	tool_paint_formula_item_2: 'Litres = A × couches ÷ rendement (m²/L). Défaut 10.',
	tool_paint_formula_item_3: 'Pots optionnels = ceil(litres ÷ 3,78). 3,78 L ≈ 1 gallon US, simple hypothèse.',
	tool_paint_example_title: 'Exemple',
	tool_paint_example:
		'Exemple : 40 m², 2 couches, 10 m²/L. Litres = 40 × 2 ÷ 10 = 8 L. Avec pots de 3,78 L → ceil(8 ÷ 3,78) = 3.',
	tool_paint_usecases_title: 'Cas d’usage',
	tool_paint_usecase_1: 'Acheter de la peinture intérieure sans manquer ni trop stocker.',
	tool_paint_usecase_2: 'Comparer une vs deux couches en changeant le champ couches.',
	tool_paint_usecase_3: 'Contrôler un devis avec un calcul simple de surface et rendement.',
	tool_paint_faq_q1: 'Que signifie le rendement m²/L ?',
	tool_paint_faq_a1: 'Combien de mètres carrés un litre couvre par couche. La valeur 10 est indicative ; privilégiez l’étiquette.',
	tool_paint_faq_q2: 'Puis-je saisir longueur × hauteur × murs ?',
	tool_paint_faq_a2: 'Oui. Si vous ne connaissez pas le m², composez la surface avec dimensions et nombre de murs.',
	tool_paint_faq_q3: 'Pourquoi 3,78 L par pot ?',
	tool_paint_faq_a3: 'C’est une approx. d’1 gallon US. Utile pour des pots entiers, sans garantir l’emballage de chaque marque.',
	tool_paint_faq_q4: 'Mes chiffres sont-ils envoyés ?',
	tool_paint_faq_a4: 'Non. Le calcul se fait dans votre navigateur, sur l’appareil, sans envoi au serveur.',
	tool_paint_references: 'NIST SP 811 pour les conversions de longueurs et d’aires.',
	tool_paint_ref_nist_label: 'NIST — Publication spéciale 811 (conversions)',
};

export default fr;
