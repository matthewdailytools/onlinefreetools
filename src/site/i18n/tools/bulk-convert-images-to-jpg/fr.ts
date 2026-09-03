/**
 * Fragment i18n (bulk-convert-images-to-jpg / fr).
 * H1 suit la recherche « Convertir des images en JPG en lot ».
 */
import type { SiteLangDict } from '../../../types';

/** Français : formulaires qui n'acceptent que le JPG ; ton d'outil du quotidien. */
const fr: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'Quand la pièce jointe doit être un .jpg, passez un lot de photos, de logos PNG et de HEIC du téléphone dans cet onglet : un fond partagé sous la transparence, on saute les échecs, puis un ZIP. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: 'Fond blanc',
	tool_bulk_convert_images_to_jpg_choose_files: 'Choisir des images',
	tool_bulk_convert_images_to_jpg_clear: 'Effacer',
	tool_bulk_convert_images_to_jpg_col_after: 'Après',
	tool_bulk_convert_images_to_jpg_col_before: 'Avant',
	tool_bulk_convert_images_to_jpg_col_name: 'Fichier',
	tool_bulk_convert_images_to_jpg_col_status: 'État',
	tool_bulk_convert_images_to_jpg_convert: 'Tout convertir',
	tool_bulk_convert_images_to_jpg_desc:
		'Convertir des images en JPG en lot avec un fond partagé et télécharger un ZIP ; restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_jpg_description:
		'Convertir des images en JPG en lot : ajoutez photos, logos PNG ou clichés HEIC, peignez un fond sous la transparence, écrivez des .jpg ici, sautez les échecs, téléchargez un ZIP. Étapes : choisissez le lot, gardez le fond blanc sauf si on demande du noir, convertissez tout. Exemple : une photo et un logo troué sur blanc deviennent deux .jpg. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_jpg_download_zip: 'Télécharger le ZIP',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'Déposez PNG, JPEG, WebP, GIF ou HEIC (jusqu\'à 20). La conversion reste dans cet onglet.',
	tool_bulk_convert_images_to_jpg_empty: 'Ajoutez d\'abord des images.',
	tool_bulk_convert_images_to_jpg_err_decode: 'Ce fichier n\'a pas pu être lu (HEIC peut exiger un autre navigateur). Ignoré.',
	tool_bulk_convert_images_to_jpg_err_encode: 'Impossible d\'écrire un .jpg pour ce fichier. Ignoré.',
	tool_bulk_convert_images_to_jpg_err_fflate: 'Ce navigateur n\'a pas pu monter le ZIP. Essayez un navigateur récent.',
	tool_bulk_convert_images_to_jpg_err_too_many: '20 images au plus. Les fichiers en trop n\'ont pas été ajoutés.',
	tool_bulk_convert_images_to_jpg_example:
		'Charger un exemple pose un bloc opaque et un logo transparent, les peint sur blanc, affiche deux noms .jpg et active Télécharger le ZIP.',
	tool_bulk_convert_images_to_jpg_example_title: 'Exemple',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'Non. Lecture et écriture .jpg se font dans cet onglet. Les fichiers restent sur l\'appareil, sans envoi au serveur. L\'aide ZIP peut venir d\'un CDN ; vos images ne quittent pas l\'onglet.',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'Oui. PNG vers JPG se fait ici : choisissez les fichiers, gardez le fond blanc pour que les trous ne deviennent pas noirs, convertissez tout.',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'Si le navigateur ne lit pas le HEIC, cette ligne est sautée et le reste entre dans le ZIP. Essayez Safari ou convertissez d\'abord sur le téléphone.',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'Non. JPEG et JPG sont la même sortie. Les fichiers s\'appellent .jpg.',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'Ici on change seulement le suffixe en JPG. Réduire des photos d\'annonce vers 200 Ko, c\'est Compresser des photos produit en lot.',
	tool_bulk_convert_images_to_jpg_faq_q1: 'Est-ce que mes fichiers quittent l\'appareil ?',
	tool_bulk_convert_images_to_jpg_faq_q2: 'Comment passer du PNG vers JPG ici ?',
	tool_bulk_convert_images_to_jpg_faq_q3: 'Et si HEIC vers JPG échoue ?',
	tool_bulk_convert_images_to_jpg_faq_q4: 'Faut-il un autre outil JPEG en plus du JPG ?',
	tool_bulk_convert_images_to_jpg_faq_q5: 'Est-ce la même chose que compresser ?',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '{n} images dans la file',
	tool_bulk_convert_images_to_jpg_how_body:
		'Si le formulaire n\'accepte que le JPG, mettez les images en file, partagez un fond pour les pixels transparents, convertissez ici puis emportez le ZIP des fichiers réussis.',
	tool_bulk_convert_images_to_jpg_how_item_1: 'Choisissez les photos, PNG ou HEIC qu\'un formulaire n\'accepte qu\'en JPG.',
	tool_bulk_convert_images_to_jpg_how_item_2: 'Gardez Fond blanc sauf si on veut du noir. Le JPG ne conserve pas les trous.',
	tool_bulk_convert_images_to_jpg_how_item_3: 'Baissez un peu la qualité si la pièce jointe doit rester légère — le travail reste de produire du JPG, pas de viser 200 Ko.',
	tool_bulk_convert_images_to_jpg_how_item_4: 'Appuyez sur Tout convertir. Un HEIC illisible est sauté ; le reste devient .jpg.',
	tool_bulk_convert_images_to_jpg_how_item_5: 'Téléchargez le ZIP dès qu\'au moins un fichier a réussi. Charger un exemple a déjà tourné à l\'ouverture.',
	tool_bulk_convert_images_to_jpg_how_title: 'Comment obtenir des JPG',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: 'Noir',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: 'Personnalisé',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: 'Fond sous la transparence',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: 'Blanc',
	tool_bulk_convert_images_to_jpg_quality_label: 'Qualité JPG',
	tool_bulk_convert_images_to_jpg_rules_body:
		'Le JPG n\'a pas de canal alpha. Chaque fichier est peint sur le même fond puis enregistré en .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'Les noms de sortie se terminent toujours par .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'Les pixels transparents sont remplis avec le fond partagé avant l\'enregistrement. Il n\'existe pas de mode sans fond qui laisserait des plaques noires inexpliquées.',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'Un échec de lecture ou d\'écriture saute cette ligne. Les doublons dans le ZIP deviennent nom (2).jpg. Une animation n\'utilise que la première image.',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_jpg_rules_title: 'Ce qu\'il faut attendre',
	tool_bulk_convert_images_to_jpg_sample: 'Charger un exemple',
	tool_bulk_convert_images_to_jpg_status_compressing: 'Conversion du lot en JPG…',
	tool_bulk_convert_images_to_jpg_status_done: 'Lot terminé — vérifiez le tableau puis téléchargez le ZIP.',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG prêt',
	tool_bulk_convert_images_to_jpg_status_skip: 'Ignoré',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} prêts · {skip} ignorés',
	tool_bulk_convert_images_to_jpg_title: 'Convertir des images en JPG en lot',
	tool_bulk_convert_images_to_jpg_usecase_1: 'Une inscription qui refuse le PNG et n\'accepte que des pièces JPG.',
	tool_bulk_convert_images_to_jpg_usecase_2: 'Envoyer à l\'imprimeur un paquet de photos produit exigées en .jpg.',
	tool_bulk_convert_images_to_jpg_usecase_3: 'Des HEIC du téléphone que Windows n\'ouvre pas — convertissez ce que ce navigateur sait lire.',
	tool_bulk_convert_images_to_jpg_usecases_title: 'Ça sert quand',
	tool_bulk_convert_images_to_jpg_warn_anim: 'Fichiers animés : seule la première image est convertie.',
	tool_bulk_convert_images_to_jpg_warn_edge: 'Un fichier dépasse 8192 px en largeur ou en hauteur — ce sera lent.',
	tool_bulk_convert_images_to_jpg_warn_large: 'Un fichier dépasse 25 Mo — cet onglet peut manquer de mémoire.',
};

export default fr;
