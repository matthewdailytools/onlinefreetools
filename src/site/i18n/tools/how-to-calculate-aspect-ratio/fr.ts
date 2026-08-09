/**
 * i18n tool shard (how-to-calculate-aspect-ratio / fr).
 * French rewrite for recherche «ratio d’aspect / format d’image».
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_aspect_ratio_title: 'Calculateur de ratio d’aspect — Calculer et mettre à l’échelle',
	tool_aspect_ratio_description:
		'Trouvez le ratio d’aspect simplifié à partir de la largeur × hauteur, puis mettez à l’échelle vers une largeur (ou hauteur) cible. Les préréglages 16:9, 4:3 et 1:1 restent sur la même page. Exemple : 1920×1080 → 16:9 ; largeur 1280 → hauteur 720. Calcul dans le navigateur ; les chiffres restent sur l’appareil et ne sont pas envoyés au serveur.',
	tool_aspect_ratio_article:
		'Réduit un couple de dimensions via le PGCD et conserve le ratio lorsque vous choisissez une nouvelle taille d’export.',
	tool_aspect_ratio_calculate: 'Calculer',
	tool_aspect_ratio_sample: 'Exemple',
	tool_aspect_ratio_clear: 'Effacer',
	tool_aspect_ratio_preset_label: 'Préréglage (optionnel)',
	tool_aspect_ratio_preset_custom: 'Personnalisé',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: 'Largeur',
	tool_aspect_ratio_h_label: 'Hauteur',
	tool_aspect_ratio_w_ph: 'ex. 1920',
	tool_aspect_ratio_h_ph: 'ex. 1080',
	tool_aspect_ratio_scale_mode_label: 'Mettre à l’échelle selon',
	tool_aspect_ratio_scale_by_w: 'Largeur cible',
	tool_aspect_ratio_scale_by_h: 'Hauteur cible',
	tool_aspect_ratio_target_w_label: 'Largeur cible',
	tool_aspect_ratio_target_h_label: 'Hauteur cible',
	tool_aspect_ratio_target_w_ph: 'ex. 1280',
	tool_aspect_ratio_target_h_ph: 'ex. 720',
	tool_aspect_ratio_result_ratio: 'Ratio d’aspect',
	tool_aspect_ratio_result_scaled: 'Taille mise à l’échelle',
	tool_aspect_ratio_err_input: 'Saisissez une largeur et une hauteur positives, et une taille cible positive pour le côté mis à l’échelle.',
	tool_aspect_ratio_how_title: 'Fonctionnement',
	tool_aspect_ratio_how_body:
		'Saisissez largeur et hauteur ou choisissez 16:9, 4:3 ou 1:1. L’outil simplifie avec le PGCD puis calcule l’autre côté. Tout se passe dans l’onglet du navigateur, sans envoi au serveur.',
	tool_aspect_ratio_formula_title: 'Formule et hypothèses',
	tool_aspect_ratio_formula_body: 'Simplification et mise à l’échelle reposent sur le PGCD du couple :',
	tool_aspect_ratio_formula_item_1: 'g = pgcd(arrondi(W), arrondi(H)). Ratio = (W÷g):(H÷g).',
	tool_aspect_ratio_formula_item_2: 'Selon la largeur : H′ = cibleW × H ÷ W. Selon la hauteur : W′ = cibleH × W ÷ H.',
	tool_aspect_ratio_formula_item_3: 'Les préréglages ne font que remplir des tailles d’exemple ; ce ne sont pas des pages séparées.',
	tool_aspect_ratio_example_title: 'Exemple',
	tool_aspect_ratio_example:
		'Exemple : 1920×1080. pgcd=120 → 16:9. Avec largeur 1280, hauteur = 1280 × 1080 ÷ 1920 = 720.',
	tool_aspect_ratio_usecases_title: 'Cas d’usage',
	tool_aspect_ratio_usecase_1: 'Choisir une taille d’export vidéo 16:9 sans déformer l’image.',
	tool_aspect_ratio_usecase_2: 'Aligner un canvas de design sur le ratio d’un téléphone ou d’un moniteur.',
	tool_aspect_ratio_usecase_3: 'Convertir une résolution connue en libellé de ratio court.',
	tool_aspect_ratio_faq_q1: 'Comment le ratio est-il simplifié ?',
	tool_aspect_ratio_faq_a1: 'En divisant largeur et hauteur par leur PGCD après arrondi ; 1920×1080 devient 16:9.',
	tool_aspect_ratio_faq_q2: 'Puis-je mettre à l’échelle par la hauteur ?',
	tool_aspect_ratio_faq_a2: 'Oui. Passez en hauteur cible ; la largeur correspondante est calculée.',
	tool_aspect_ratio_faq_q3: 'Pourquoi 16:9 n’a-t-il pas sa propre page ?',
	tool_aspect_ratio_faq_a3: 'C’est un point de départ courant ; le garder en option évite des calculateurs quasi doublons.',
	tool_aspect_ratio_faq_q4: 'Mes chiffres sont-ils envoyés ?',
	tool_aspect_ratio_faq_a4: 'Non. Le calcul se fait dans votre navigateur, sur l’appareil, sans envoi au serveur.',
	tool_aspect_ratio_references: 'NIST SP 811 pour les conversions de longueurs et d’unités.',
	tool_aspect_ratio_ref_nist_label: 'NIST — Publication spéciale 811 (conversions)',
};

export default fr;
