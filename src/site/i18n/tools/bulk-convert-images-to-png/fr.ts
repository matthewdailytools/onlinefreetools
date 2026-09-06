/**
 * Fragment i18n (bulk-convert-images-to-png / fr).
 * H1 suit la recherche « Convertir des images en PNG en lot ».
 */
import type { SiteLangDict } from '../../../types';

/** Français : captures et logos à passer en PNG en gardant la transparence ; ton d'outil du quotidien. */
const fr: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'Quand la livraison doit être du PNG, passez photos JPEG, captures et logos troués dans cet onglet : la transparence reste si la source en a, on saute les échecs, puis un ZIP. JPEG vers PNG grossit souvent ; le tableau le dit. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_png_choose_files: 'Choisir des images',
	tool_bulk_convert_images_to_png_clear: 'Effacer',
	tool_bulk_convert_images_to_png_col_after: 'Après',
	tool_bulk_convert_images_to_png_col_before: 'Avant',
	tool_bulk_convert_images_to_png_col_name: 'Fichier',
	tool_bulk_convert_images_to_png_col_status: 'État',
	tool_bulk_convert_images_to_png_convert: 'Tout convertir',
	tool_bulk_convert_images_to_png_desc:
		'Convertir des images en PNG en lot, garder la transparence si la source en a et télécharger un ZIP ; restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_png_description:
		'Convertir des images en PNG en lot : ajoutez des JPEG ou des captures, réencodez en PNG dans cet onglet sans fond JPEG, sautez les échecs, téléchargez un ZIP. Étapes : choisissez le lot, convertissez tout, lisez le tableau si un JPEG a grossi en PNG. Exemple : une photo opaque et un logo troué deviennent des .png. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_png_download_zip: 'Télécharger le ZIP',
	tool_bulk_convert_images_to_png_drop_hint: 'Déposez JPEG, PNG, WebP ou GIF (jusqu\'à 20). La conversion reste dans cet onglet.',
	tool_bulk_convert_images_to_png_empty: 'Ajoutez d\'abord des images.',
	tool_bulk_convert_images_to_png_err_decode: 'Ce fichier n\'a pas pu être lu. Ignoré.',
	tool_bulk_convert_images_to_png_err_encode: 'Impossible d\'écrire un PNG pour ce fichier. Ignoré.',
	tool_bulk_convert_images_to_png_err_fflate: 'Ce navigateur n\'a pas pu monter le ZIP. Essayez un navigateur récent.',
	tool_bulk_convert_images_to_png_err_too_many: '20 images au plus. Les fichiers en trop n\'ont pas été ajoutés.',
	tool_bulk_convert_images_to_png_example:
		'Charger un exemple pose un bloc JPEG et un logo transparent, écrit deux .png et active Télécharger le ZIP. La ligne JPEG montre souvent un PNG plus gros.',
	tool_bulk_convert_images_to_png_example_title: 'Exemple',
	tool_bulk_convert_images_to_png_faq_a1:
		'Non. Lecture et écriture PNG se font dans cet onglet. Les fichiers restent sur l\'appareil, sans envoi au serveur. L\'aide ZIP peut venir de ce site ; vos images ne quittent pas l\'onglet.',
	tool_bulk_convert_images_to_png_faq_a2:
		'Non. Le JPEG n\'a jamais stocké de trous. jpg vers png ne fait qu\'envelopper en PNG ; le fond reste opaque. Les vrais trous ne survivent que si la source avait déjà de l\'alpha.',
	tool_bulk_convert_images_to_png_faq_a3:
		'Le PNG est sans perte. Un JPEG photo grossit souvent. Le tableau marque « plus gros ». Réduisez les pixels dans Compresser des images PNG en lot, ou restez en JPEG si vous n\'avez pas besoin de PNG.',
	tool_bulk_convert_images_to_png_faq_a4:
		'Compresser du PNG vise des fichiers déjà PNG qui doivent rester PNG, mais plus petits. Cette page change le suffixe en PNG.',
	tool_bulk_convert_images_to_png_faq_a5:
		'Non. Seule la première image est enregistrée en PNG fixe, et cette ligne est notée.',
	tool_bulk_convert_images_to_png_faq_q1: 'Est-ce que mes fichiers quittent l\'appareil ?',
	tool_bulk_convert_images_to_png_faq_q2: 'JPG vers PNG ramène-t-il la transparence ?',
	tool_bulk_convert_images_to_png_faq_q3: 'Pourquoi le PNG est-il plus gros que le JPEG ?',
	tool_bulk_convert_images_to_png_faq_q4: 'Quelle différence avec compresser du PNG ?',
	tool_bulk_convert_images_to_png_faq_q5: 'Les GIF animés restent-ils animés ?',
	tool_bulk_convert_images_to_png_file_count_tpl: '{n} images dans la file',
	tool_bulk_convert_images_to_png_how_body:
		'Choisissez les images qui doivent devenir PNG, convertissez-les ici sans peindre un fond, puis emportez un ZIP des fichiers réussis.',
	tool_bulk_convert_images_to_png_how_item_1: 'Choisissez les captures ou logos qui doivent être du PNG.',
	tool_bulk_convert_images_to_png_how_item_2: 'Il n\'y a pas de commande de fond blanc : les trous restent si la source a de l\'alpha.',
	tool_bulk_convert_images_to_png_how_item_3: 'Appuyez sur Tout convertir. Une source JPEG devient un PNG opaque ; le tableau prévient si ça a grossi.',
	tool_bulk_convert_images_to_png_how_item_4: 'Besoin de JPG ? Utilisez Convertir des images en JPG en lot. PNG plus petit ? Compresser des images PNG en lot.',
	tool_bulk_convert_images_to_png_how_item_5: 'Téléchargez le ZIP dès qu\'au moins un fichier a réussi. Charger un exemple a déjà tourné à l\'ouverture.',
	tool_bulk_convert_images_to_png_how_title: 'Comment obtenir des PNG',
	tool_bulk_convert_images_to_png_max_edge_label: 'Côté max',
	tool_bulk_convert_images_to_png_resize_on: 'Limiter le plus long côté',
	tool_bulk_convert_images_to_png_rules_body:
		'La sortie est toujours du PNG. Cette page n\'aplatit pas la transparence sur un fond JPEG.',
	tool_bulk_convert_images_to_png_rules_item_1:
		'L\'alpha est conservé si la source en a. Une source JPEG n\'a pas d\'alpha à garder.',
	tool_bulk_convert_images_to_png_rules_item_2:
		'La réduction optionnelle du plus long côté est désactivée par défaut pour ne pas redimensionner en secret.',
	tool_bulk_convert_images_to_png_rules_item_3:
		'Si le PNG est plus gros que l\'original, la ligne le dit. Les échecs de lecture sont sautés. Les doublons dans le ZIP deviennent nom (2).png.',
	tool_bulk_convert_images_to_png_rules_item_4:
		'Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_png_rules_title: 'Ce qu\'il faut attendre',
	tool_bulk_convert_images_to_png_sample: 'Charger un exemple',
	tool_bulk_convert_images_to_png_status_compressing: 'Conversion du lot en PNG…',
	tool_bulk_convert_images_to_png_status_done: 'Lot terminé — vérifiez le tableau puis téléchargez le ZIP.',
	tool_bulk_convert_images_to_png_status_larger: 'Plus gros que la source',
	tool_bulk_convert_images_to_png_status_ok: 'PNG prêt',
	tool_bulk_convert_images_to_png_status_skip: 'Ignoré',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} prêts · {larger} plus gros · {skip} ignorés',
	tool_bulk_convert_images_to_png_title: 'Convertir des images en PNG en lot',
	tool_bulk_convert_images_to_png_usecase_1: 'Archiver des captures en PNG pour une passation design.',
	tool_bulk_convert_images_to_png_usecase_2: 'Unifier des stickers en PNG quand la source a déjà des trous.',
	tool_bulk_convert_images_to_png_usecase_3: 'jpg vers png quand le CMS n\'accepte que le PNG — attendez un fichier photo plus gros.',
	tool_bulk_convert_images_to_png_usecases_title: 'Ça sert quand',
	tool_bulk_convert_images_to_png_warn_anim: 'Fichiers animés : seule la première image est enregistrée en PNG fixe.',
	tool_bulk_convert_images_to_png_warn_edge: 'Un fichier dépasse 8192 px en largeur ou en hauteur — ce sera lent.',
	tool_bulk_convert_images_to_png_warn_large: 'Un fichier dépasse 25 Mo — cet onglet peut manquer de mémoire.',
	tool_bulk_convert_images_to_png_warn_larger: 'Certains PNG sont plus gros que l\'original. C\'est attendu pour des JPEG photo.',
};

export default fr;
