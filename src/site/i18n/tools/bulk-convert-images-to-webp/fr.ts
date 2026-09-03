/**
 * Fragment i18n (bulk-convert-images-to-webp / fr).
 * H1 suit la recherche « Convertir des images en WebP en lot ».
 */
import type { SiteLangDict } from '../../../types';

/** Français : ressources du site en WebP avec perte et alpha. */
const fr: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'Quand le site demande du WebP, passez logos PNG et photos dans cet onglet en .webp avec perte : la transparence reste si la source en a, on saute ce que ce navigateur ne sait pas écrire, puis un ZIP. Certains mails refusent encore le WebP ; utilisez alors le JPG. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_webp_chip_q80: 'Qualité 0.8',
	tool_bulk_convert_images_to_webp_choose_files: 'Choisir des images',
	tool_bulk_convert_images_to_webp_clear: 'Effacer',
	tool_bulk_convert_images_to_webp_col_after: 'Après',
	tool_bulk_convert_images_to_webp_col_before: 'Avant',
	tool_bulk_convert_images_to_webp_col_name: 'Fichier',
	tool_bulk_convert_images_to_webp_col_status: 'État',
	tool_bulk_convert_images_to_webp_convert: 'Tout convertir',
	tool_bulk_convert_images_to_webp_desc:
		'Convertir des images en WebP en lot avec une qualité avec perte et de l\'alpha si la source en a ; ZIP ; restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_webp_description:
		'Convertir des images en WebP en lot : ajoutez logos PNG ou photos, encodez du WebP avec perte dans cet onglet sans fond JPEG, sautez ce que ce navigateur n\'écrit pas, téléchargez un ZIP. Étapes : choisissez le lot, gardez la qualité près de 0.8, convertissez tout. Exemple : une photo et un logo troué deviennent des .webp. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_webp_download_zip: 'Télécharger le ZIP',
	tool_bulk_convert_images_to_webp_drop_hint: 'Déposez JPEG, PNG, WebP ou GIF (jusqu\'à 20). La conversion reste dans cet onglet.',
	tool_bulk_convert_images_to_webp_empty: 'Ajoutez d\'abord des images.',
	tool_bulk_convert_images_to_webp_err_decode: 'Ce fichier n\'a pas pu être lu. Ignoré.',
	tool_bulk_convert_images_to_webp_err_encode: 'Impossible d\'écrire un WebP pour ce fichier. Ignoré.',
	tool_bulk_convert_images_to_webp_err_fflate: 'Ce navigateur n\'a pas pu monter le ZIP. Essayez un navigateur récent.',
	tool_bulk_convert_images_to_webp_err_too_many: '20 images au plus. Les fichiers en trop n\'ont pas été ajoutés.',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'Ce navigateur n\'a pas renvoyé un blob WebP. Cette ligne est sautée ; on n\'écrit pas de JPEG.',
	tool_bulk_convert_images_to_webp_example:
		'Charger un exemple pose un bloc opaque et un logo transparent, écrit deux .webp et active Télécharger le ZIP. Le trou du logo reste.',
	tool_bulk_convert_images_to_webp_example_title: 'Exemple',
	tool_bulk_convert_images_to_webp_faq_a1:
		'Non. Lecture et écriture WebP se font dans cet onglet. Les fichiers restent sur l\'appareil, sans envoi au serveur. L\'aide ZIP peut venir d\'un CDN ; vos images ne quittent pas l\'onglet.',
	tool_bulk_convert_images_to_webp_faq_a2:
		'Oui. png vers webp se fait ici : choisissez les fichiers, gardez la qualité près de 0.8, convertissez tout. Les trous restent si le PNG avait de l\'alpha.',
	tool_bulk_convert_images_to_webp_faq_a3:
		'Certains clients mail et CMS refusent encore le WebP. Pour ces pièces jointes, utilisez Convertir des images en JPG en lot.',
	tool_bulk_convert_images_to_webp_faq_a4:
		'Cette ligne est sautée. Cette page n\'écrit pas de JPEG en secret. Essayez Chrome, Edge ou Firefox récents.',
	tool_bulk_convert_images_to_webp_faq_a5:
		'Non. Seule la première image est enregistrée en WebP fixe, et cette ligne est notée.',
	tool_bulk_convert_images_to_webp_faq_q1: 'Est-ce que mes fichiers quittent l\'appareil ?',
	tool_bulk_convert_images_to_webp_faq_q2: 'Comment passer du PNG vers WebP ici ?',
	tool_bulk_convert_images_to_webp_faq_q3: 'Les mails accepteront-ils ces WebP ?',
	tool_bulk_convert_images_to_webp_faq_q4: 'Et si ce navigateur ne sait pas écrire du WebP ?',
	tool_bulk_convert_images_to_webp_faq_q5: 'Les GIF animés restent-ils animés ?',
	tool_bulk_convert_images_to_webp_file_count_tpl: '{n} images dans la file',
	tool_bulk_convert_images_to_webp_how_body:
		'Choisissez les images qui doivent devenir du WebP pour le site, convertissez-les ici sans fond JPEG, puis emportez un ZIP des fichiers réussis.',
	tool_bulk_convert_images_to_webp_how_item_1: 'Choisissez les photos ou stickers PNG qui doivent être du WebP sur le site.',
	tool_bulk_convert_images_to_webp_how_item_2: 'Gardez la qualité près de 0.8 sauf si vous avez besoin d\'un fichier plus léger. Pas de fond JPEG.',
	tool_bulk_convert_images_to_webp_how_item_3: 'Appuyez sur Tout convertir. Si toBlob n\'est pas du WebP, cette ligne échoue au lieu d\'écrire du JPEG.',
	tool_bulk_convert_images_to_webp_how_item_4: 'JPG pour le mail ? Convertir des images en JPG en lot. PNG sans perte ? Convertir des images en PNG en lot.',
	tool_bulk_convert_images_to_webp_how_item_5: 'Téléchargez le ZIP dès qu\'au moins un fichier a réussi. Charger un exemple a déjà tourné à l\'ouverture.',
	tool_bulk_convert_images_to_webp_how_title: 'Comment obtenir des WebP',
	tool_bulk_convert_images_to_webp_quality_label: 'Qualité WebP',
	tool_bulk_convert_images_to_webp_rules_body:
		'La sortie est toujours du WebP. Cette page n\'aplatit pas la transparence sur un fond JPEG et ne retombe pas sur du JPEG.',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'L\'alpha est conservé si la source en a. Une source JPEG n\'a pas d\'alpha à garder.',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'La qualité par défaut est 0.8. Baissez-la seulement si le budget du site demande un fichier plus petit.',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'Si ce navigateur n\'écrit pas de WebP, cette ligne est sautée. Les échecs de lecture sont sautés. Les doublons dans le ZIP deviennent nom (2).webp.',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_convert_images_to_webp_rules_title: 'Ce qu\'il faut attendre',
	tool_bulk_convert_images_to_webp_sample: 'Charger un exemple',
	tool_bulk_convert_images_to_webp_status_compressing: 'Conversion du lot en WebP…',
	tool_bulk_convert_images_to_webp_status_done: 'Lot terminé — vérifiez le tableau puis téléchargez le ZIP.',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP prêt',
	tool_bulk_convert_images_to_webp_status_skip: 'Ignoré',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} prêts · {skip} ignorés',
	tool_bulk_convert_images_to_webp_title: 'Convertir des images en WebP en lot',
	tool_bulk_convert_images_to_webp_usecase_1: 'Alléger héros et miniatures du site en WebP sans menu de format.',
	tool_bulk_convert_images_to_webp_usecase_2: 'png vers webp pour des stickers qui ont déjà des trous.',
	tool_bulk_convert_images_to_webp_usecase_3: 'Restez en JPEG pour le mail si le client refuse encore le WebP.',
	tool_bulk_convert_images_to_webp_usecases_title: 'Ça sert quand',
	tool_bulk_convert_images_to_webp_warn_anim: 'Fichiers animés : seule la première image est enregistrée en WebP fixe.',
	tool_bulk_convert_images_to_webp_warn_edge: 'Un fichier dépasse 8192 px en largeur ou en hauteur — ce sera lent.',
	tool_bulk_convert_images_to_webp_warn_large: 'Un fichier dépasse 25 Mo — cet onglet peut manquer de mémoire.',
};

export default fr;
