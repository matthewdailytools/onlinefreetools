/**
 * Fragment i18n (batch-watermark-product-photos / fr).
 * H1 suit la recherche « Filigraner des photos produit en lot ».
 */
import type { SiteLangDict } from '../../../types';

/** Français : un même tampon de copyright sur un lot de photos de fiche. */
const fr: SiteLangDict = {
	tool_batch_watermark_product_photos_anchor_bc: 'Bas',
	tool_batch_watermark_product_photos_anchor_bl: 'Bas gauche',
	tool_batch_watermark_product_photos_anchor_br: 'Bas droit',
	tool_batch_watermark_product_photos_anchor_label: 'Ancre',
	tool_batch_watermark_product_photos_anchor_mc: 'Centre',
	tool_batch_watermark_product_photos_anchor_ml: 'Milieu g.',
	tool_batch_watermark_product_photos_anchor_mr: 'Milieu d.',
	tool_batch_watermark_product_photos_anchor_tc: 'Haut',
	tool_batch_watermark_product_photos_anchor_tl: 'Haut gauche',
	tool_batch_watermark_product_photos_anchor_tr: 'Haut droit',
	tool_batch_watermark_product_photos_apply: 'Appliquer à toutes',
	tool_batch_watermark_product_photos_article:
		'Tamponnez une ligne de copyright sur un lot de photos de fiche dans cet onglet. La taille suit le petit côté de chaque photo pour que paysage et portrait tombent dans le même coin relatif. Aperçu d\'une image, application à toutes, skip des toiles trop petites, ZIP. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_batch_watermark_product_photos_chip_draft: 'DRAFT en diagonale',
	tool_batch_watermark_product_photos_choose_files: 'Choisir des photos',
	tool_batch_watermark_product_photos_clear: 'Effacer',
	tool_batch_watermark_product_photos_col_after: 'Après',
	tool_batch_watermark_product_photos_col_before: 'Avant',
	tool_batch_watermark_product_photos_col_name: 'Fichier',
	tool_batch_watermark_product_photos_col_status: 'État',
	tool_batch_watermark_product_photos_color_label: 'Couleur',
	tool_batch_watermark_product_photos_desc:
		'Filigraner des photos produit en lot, taille selon le petit côté, aperçu, appliquer à toutes, ZIP ; restent sur l\'appareil, sans envoi au serveur.',
	tool_batch_watermark_product_photos_description:
		'Filigraner des photos produit en lot : ajoutez un lot de photos de fiche, un tampon dont la taille vient du petit côté, aperçu d\'une image, application à toutes, skip des toiles minuscules, ZIP. Étapes : choisissez le lot, gardez le coin, aperçu d\'une, appliquez à toutes. Exemple : un paysage et un portrait partagent le même SAMPLE relatif. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_batch_watermark_product_photos_download_zip: 'Télécharger le ZIP',
	tool_batch_watermark_product_photos_drop_hint: 'Déposez JPEG, PNG ou WebP de fiche (jusqu\'à 20). Le tampon reste dans cet onglet.',
	tool_batch_watermark_product_photos_empty: 'Ajoutez d\'abord des photos.',
	tool_batch_watermark_product_photos_empty_text: 'Saisissez le texte du tampon avant d\'appliquer.',
	tool_batch_watermark_product_photos_err_decode: 'Ce fichier n\'a pas pu être lu. Ignoré.',
	tool_batch_watermark_product_photos_err_encode: 'Impossible d\'écrire ce fichier. Ignoré.',
	tool_batch_watermark_product_photos_err_fflate: 'Ce navigateur n\'a pas pu monter le ZIP. Essayez un navigateur récent.',
	tool_batch_watermark_product_photos_err_tiny: 'Petit côté sous 64 px — cette ligne est sautée.',
	tool_batch_watermark_product_photos_err_too_many: '20 photos au plus. Les fichiers en trop n\'ont pas été ajoutés.',
	tool_batch_watermark_product_photos_example:
		'Charger un exemple pose un bloc paysage et un portrait, règle SAMPLE, aperçoit le premier, applique la même marque relative aux deux et active Télécharger le ZIP.',
	tool_batch_watermark_product_photos_example_title: 'Exemple',
	tool_batch_watermark_product_photos_faq_a1:
		'Non. Lecture et tampon Canvas se font dans cet onglet. Les fichiers restent sur l\'appareil, sans envoi au serveur. L\'aide ZIP peut venir de ce site ; vos photos ne quittent pas l\'onglet.',
	tool_batch_watermark_product_photos_faq_a2:
		'Non. La taille est un pourcentage du petit côté et les neuf ancres sont des fractions de cette toile. Portrait et paysage restent dans le même coin relatif.',
	tool_batch_watermark_product_photos_faq_a3:
		'Non. Cette page tamponne des photos. Le filigrane PDF est un autre travail — utilisez l\'outil PDF quand il faut des pages, pas des JPEG de fiche.',
	tool_batch_watermark_product_photos_faq_a4:
		'Ajouter un filigrane texte, c\'est une photo avec des réglages pixel. Cette page partage un tampon sur un lot, aperçoit une image puis applique tout dans un ZIP.',
	tool_batch_watermark_product_photos_faq_a5:
		'On cherche aussi « tamponner photos en lot ». Sur ce site ce travail vit ici ; pas de seconde URL bulk-watermark.',
	tool_batch_watermark_product_photos_faq_q1: 'Est-ce que mes fichiers quittent l\'appareil ?',
	tool_batch_watermark_product_photos_faq_q2: 'Paysage et portrait dérivent-ils ?',
	tool_batch_watermark_product_photos_faq_q3: 'Puis-je filigraner un PDF ici ?',
	tool_batch_watermark_product_photos_faq_q4: 'Quelle différence avec Ajouter un filigrane ?',
	tool_batch_watermark_product_photos_faq_q5: 'J\'ai cherché tamponner photos en lot — c\'est cette page ?',
	tool_batch_watermark_product_photos_file_count_tpl: '{n} photos dans la file',
	tool_batch_watermark_product_photos_format_jpeg: 'JPEG',
	tool_batch_watermark_product_photos_format_label: 'Sortie',
	tool_batch_watermark_product_photos_format_png: 'PNG',
	tool_batch_watermark_product_photos_how_body:
		'Mettez le lot en file, définissez un tampon, aperçu d\'une image, appliquez la même marque relative à toutes, emportez un ZIP.',
	tool_batch_watermark_product_photos_how_item_1: 'Choisissez les photos de fiche qui ont besoin de la même ligne de copyright.',
	tool_batch_watermark_product_photos_how_item_2: 'Réglez texte, coin et pourcentage du petit côté. Défaut SAMPLE en bas à droite, 8 %.',
	tool_batch_watermark_product_photos_how_item_3: 'Appuyez sur Aperçu. Vérifiez que paysage et portrait tombent dans le même coin relatif.',
	tool_batch_watermark_product_photos_how_item_4: 'Appuyez sur Appliquer à toutes. Toiles plus courtes que 64 px sautées. Le JPEG peint un fond blanc d\'abord.',
	tool_batch_watermark_product_photos_how_item_5: 'Téléchargez le ZIP dès qu\'au moins un fichier a réussi. Un réglage d\'une photo : Ajouter un filigrane.',
	tool_batch_watermark_product_photos_how_title: 'Comment tamponner le lot',
	tool_batch_watermark_product_photos_opacity_label: 'Opacité',
	tool_batch_watermark_product_photos_pct_label: 'Taille vs petit côté',
	tool_batch_watermark_product_photos_preview: 'Aperçu',
	tool_batch_watermark_product_photos_rotation_label: 'Angle',
	tool_batch_watermark_product_photos_rules_body:
		'La taille en pixels est le petit côté fois le pourcentage. Les ancres sont des fractions de cette toile, pas des pixels fixes.',
	tool_batch_watermark_product_photos_rules_item_1:
		'Tampon par défaut : SAMPLE, bas droit, 8 % de min(largeur, hauteur), opacité 45 %. JPEG avec fond blanc.',
	tool_batch_watermark_product_photos_rules_item_2:
		'Un petit côté sous 64 px fait échouer cette ligne. Texte vide désactive Appliquer à toutes. Les échecs de lecture sont sautés.',
	tool_batch_watermark_product_photos_rules_item_3:
		'DRAFT en diagonale pave le mot. Les doublons dans le ZIP deviennent nom (2).jpg ou .png.',
	tool_batch_watermark_product_photos_rules_item_4:
		'Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_batch_watermark_product_photos_rules_title: 'Ce qu\'il faut attendre',
	tool_batch_watermark_product_photos_sample: 'Charger un exemple',
	tool_batch_watermark_product_photos_status_applying: 'Tamponnage du lot…',
	tool_batch_watermark_product_photos_status_done: 'Lot terminé — vérifiez le tableau puis téléchargez le ZIP.',
	tool_batch_watermark_product_photos_status_ok: 'Tamponnée',
	tool_batch_watermark_product_photos_status_preview: 'L\'aperçu est la première photo de la file.',
	tool_batch_watermark_product_photos_status_skip: 'Ignoré',
	tool_batch_watermark_product_photos_status_tiny: 'Trop petite',
	tool_batch_watermark_product_photos_summary_tpl: '{ok} tamponnées · {skip} ignorées',
	tool_batch_watermark_product_photos_text_label: 'Texte du tampon',
	tool_batch_watermark_product_photos_title: 'Filigraner des photos produit en lot',
	tool_batch_watermark_product_photos_usecase_1: 'Tamponner le nom de la boutique sur un dossier de photos de fiche avant mise en ligne.',
	tool_batch_watermark_product_photos_usecase_2: 'Marquer des échantillons SAMPLE pour qu\'un acheteur ne réutilise pas l\'aperçu comme fiche.',
	tool_batch_watermark_product_photos_usecase_3: 'Ajouter une ligne de copyright à plusieurs images sans ouvrir chaque fichier.',
	tool_batch_watermark_product_photos_usecases_title: 'Ça sert quand',
	tool_batch_watermark_product_photos_warn_anim: 'Fichiers animés : seule la première image est tamponnée.',
	tool_batch_watermark_product_photos_warn_edge: 'Un fichier dépasse 8192 px en largeur ou en hauteur — ce sera lent.',
	tool_batch_watermark_product_photos_warn_large: 'Un fichier dépasse 25 Mo — cet onglet peut manquer de mémoire.',
};

export default fr;
