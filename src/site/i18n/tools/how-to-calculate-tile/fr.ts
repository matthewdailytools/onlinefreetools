/**
 * i18n tool shard (how-to-calculate-tile / fr).
 * Français indépendant : calculateur de carrelage / quantité de carreaux.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_tile_title: 'Calculateur de carrelage — Estimer la quantité de carreaux',
	tool_tile_description:
		'Estimez le nombre de carreaux à partir de la surface de la pièce en m² (ou longueur × largeur), de la taille du carreau en cm et du pourcentage de chute (10 % par défaut). Exemple : pièce de 12 m², carreaux 30×30 cm, 10 % de chute → 147 carreaux (arrondi au supérieur). Calcul dans le navigateur ; les chiffres restent sur l’appareil et ne sont pas envoyés au serveur.',
	tool_tile_article:
		'Convertit la surface et la taille d’un carreau en quantité d’achat. Indiquez la surface ou les dimensions en mètres, le carreau en centimètres et la marge de chute. Le résultat est arrondi au supérieur pour les découpes et casse.',
	tool_tile_calculate: 'Calculer',
	tool_tile_sample: 'Exemple',
	tool_tile_clear: 'Effacer',
	tool_tile_mode_label: 'Saisie de la pièce',
	tool_tile_mode_area: 'Surface (m²)',
	tool_tile_mode_lw: 'Longueur × largeur',
	tool_tile_area_label: 'Surface de la pièce (m²)',
	tool_tile_area_ph: 'ex. 12',
	tool_tile_room_l_label: 'Longueur de la pièce (m)',
	tool_tile_room_w_label: 'Largeur de la pièce (m)',
	tool_tile_room_l_ph: 'ex. 4',
	tool_tile_room_w_ph: 'ex. 3',
	tool_tile_tile_l_label: 'Longueur du carreau (cm)',
	tool_tile_tile_w_label: 'Largeur du carreau (cm)',
	tool_tile_tile_l_ph: 'ex. 30',
	tool_tile_tile_w_ph: 'ex. 30',
	tool_tile_waste_label: 'Chute (%)',
	tool_tile_waste_ph: 'ex. 10',
	tool_tile_waste_hint: '10 % par défaut pour découpes et quelques cassures ; augmentez pour pose en diagonale.',
	tool_tile_result_tiles: 'Carreaux nécessaires',
	tool_tile_result_area: 'Surface utilisée',
	tool_tile_result_tile_area: 'Surface par carreau',
	tool_tile_err_input: 'Saisissez une surface positive (ou longueur et largeur), des tailles positives et une chute ≥ 0.',
	tool_tile_how_title: 'Fonctionnement',
	tool_tile_how_body:
		'Choisissez surface ou longueur × largeur, puis la taille en cm et la chute. L’outil convertit le carreau en m², multiplie la surface par (1 + chute/100), divise et arrondit au supérieur. Tout reste dans l’onglet du navigateur, sans envoi au serveur.',
	tool_tile_formula_title: 'Formule et hypothèses',
	tool_tile_formula_body: 'La quantité repose sur la surface, celle d’un carreau et la chute :',
	tool_tile_formula_item_1: 'Surface A = m² directs, ou longueur × largeur en mètres.',
	tool_tile_formula_item_2: 'Surface d’un carreau a = (longueur_cm ÷ 100) × (largeur_cm ÷ 100) en m².',
	tool_tile_formula_item_3: 'Carreaux = ceil(A × (1 + chute% ÷ 100) ÷ a). Chute par défaut : 10 %.',
	tool_tile_example_title: 'Exemple',
	tool_tile_example:
		'Exemple : 12 m², carreaux 30×30 cm, chute 10 %. Un carreau fait 0,09 m². Surface avec chute = 12 × 1,10 = 13,2 m². Carreaux = ceil(13,2 ÷ 0,09) = 147.',
	tool_tile_usecases_title: 'Cas d’usage',
	tool_tile_usecase_1: 'Commander du sol pour salle de bain ou cuisine avant d’aller en magasin.',
	tool_tile_usecase_2: 'Vérifier un devis de faïence avec un calcul simple surface + chute.',
	tool_tile_usecase_3: 'Comparer le 30×30 cm à des formats plus grands en changeant la taille.',
	tool_tile_faq_q1: 'Pourquoi arrondir au supérieur ?',
	tool_tile_faq_a1: 'On n’achète pas de fraction de carreau. L’arrondi au supérieur reflète l’achat réel après découpes et casse.',
	tool_tile_faq_q2: 'Que signifie le pourcentage de chute ?',
	tool_tile_faq_a2: 'C’est la marge pour découpes, calepinage et casse. Par défaut 10 % ; la diagonale demande souvent plus.',
	tool_tile_faq_q3: 'Surface ou longueur × largeur ?',
	tool_tile_faq_a3: 'Les deux conviennent. Utilisez la surface si vous avez déjà les m² ; sinon les dimensions en mètres.',
	tool_tile_faq_q4: 'Mes chiffres sont-ils envoyés ?',
	tool_tile_faq_a4: 'Non. Le calcul se fait dans votre navigateur, sur l’appareil, sans envoi au serveur.',
	tool_tile_references:
		'Facteurs de conversion NIST SP 811 ; conseils d’installation TCNA sur chute et planification.',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811 (conversions)',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default fr;
