/**
 * Fragment i18n (bulk-compress-png-images / fr).
 * Le H1 suit la recherche « Compresser des images PNG en lot ».
 */
import type { SiteLangDict } from '../../../types';

/** Français : logos PNG transparents, sans envoi au serveur, restent sur l'appareil. */
const fr: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'Compressez dans cet onglet un dossier de logos ou de découpes PNG, gardez la transparence, ignorez les échecs et téléchargez un ZIP. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_compress_png_images_chip_1024: '1024 px',
	tool_bulk_compress_png_images_chip_reencode: 'Réencoder seulement',
	tool_bulk_compress_png_images_choose_files: 'Choisir des images PNG',
	tool_bulk_compress_png_images_clear: 'Effacer',
	tool_bulk_compress_png_images_col_after: 'Après',
	tool_bulk_compress_png_images_col_before: 'Avant',
	tool_bulk_compress_png_images_col_name: 'Fichier',
	tool_bulk_compress_png_images_col_status: 'État',
	tool_bulk_compress_png_images_compress: 'Tout compresser',
	tool_bulk_compress_png_images_desc:
		'Compresser des PNG en lot, garder la transparence, récupérer un ZIP — restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_compress_png_images_description:
		'Compresser des images PNG en lot : ajoutez logos ou découpes d\'interface, gardez la transparence, plafonnez au besoin le plus long côté, réenregistrez en PNG dans cet onglet, ignorez les échecs, téléchargez un ZIP. Étapes : choisissez le lot, laissez la puce 1024 px si les icônes doivent rétrécir, compressez tout, lisez le tableau. Exemple : deux damiers d\'échantillon restent des PNG troués. Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_compress_png_images_download_zip: 'Télécharger le ZIP',
	tool_bulk_compress_png_images_drop_hint: 'Déposez des PNG (jusqu\'à 20). Les autres images sortent aussi en PNG. Tout reste dans cet onglet.',
	tool_bulk_compress_png_images_empty: 'Ajoutez d\'abord des images PNG.',
	tool_bulk_compress_png_images_err_decode: 'Cette image n\'a pas pu être lue. Elle a été ignorée.',
	tool_bulk_compress_png_images_err_encode: 'Cette image n\'a pas pu être écrite en PNG. Elle a été ignorée.',
	tool_bulk_compress_png_images_err_fflate: 'Impossible de construire le ZIP dans ce navigateur. Essayez un navigateur récent.',
	tool_bulk_compress_png_images_err_too_many: 'Au plus 20 fichiers à la fois. Les extras n\'ont pas été ajoutés.',
	tool_bulk_compress_png_images_example:
		'Charger un exemple pose deux PNG en damier transparent, les réencode en PNG, remplit le tableau et active Télécharger le ZIP. Les doublons deviennent name (2).png.',
	tool_bulk_compress_png_images_example_title: 'Exemple',
	tool_bulk_compress_png_images_faq_a1:
		'Non. Décodage et écriture PNG se font dans cet onglet. Les fichiers restent sur l\'appareil, sans envoi au serveur. L\'aide ZIP peut venir de ce site ; vos images ne quittent pas l\'onglet.',
	tool_bulk_compress_png_images_faq_a2:
		'Non. La sortie est toujours du PNG. Pas de fond JPEG. Si un JPEG plus léger vous convient pour des photos produit, utilisez Compresser des photos produit en lot.',
	tool_bulk_compress_png_images_faq_a3:
		'Oui. Les pixels sont dessinés sans fond uni puis enregistrés en PNG, donc les trous restent des trous.',
	tool_bulk_compress_png_images_faq_a4:
		'Souvent, si vous ne réduisez pas le plus long côté. Ce PNG de canevas n\'optimise pas les palettes. Les couleurs indexées peuvent bander après réencodage.',
	tool_bulk_compress_png_images_faq_a5:
		'Non. Seule la première image est enregistrée en PNG fixe.',
	tool_bulk_compress_png_images_faq_q1: 'Réduire un PNG envoie-t-il mes fichiers au serveur ?',
	tool_bulk_compress_png_images_faq_q2: 'Compresser PNG en ligne le transforme-t-il en JPEG ?',
	tool_bulk_compress_png_images_faq_q3: 'Peut-on compresser un PNG sans perdre la transparence ?',
	tool_bulk_compress_png_images_faq_q4: 'Pourquoi le fichier reste-t-il lourd après compression ?',
	tool_bulk_compress_png_images_faq_q5: 'Un GIF animé reste-t-il animé ?',
	tool_bulk_compress_png_images_file_count_tpl: '{n} fichiers dans la file',
	tool_bulk_compress_png_images_how_body:
		'Pour un lot qui doit rester du PNG, partagez au besoin un plafond de plus long côté, compressez ici, puis emportez un ZIP de ce qui a réussi.',
	tool_bulk_compress_png_images_how_item_1: 'Choisissez les logos ou découpes PNG qui doivent garder la transparence.',
	tool_bulk_compress_png_images_how_item_2: 'Utilisez la puce 1024 px si les icônes doivent rétrécir ; Réencoder seulement si la taille en pixels ne doit pas bouger.',
	tool_bulk_compress_png_images_how_item_3: 'Appuyez sur Tout compresser. Chaque ligne reste du PNG. Les échecs sont ignorés, le reste est empaqueté.',
	tool_bulk_compress_png_images_how_item_4: 'Si un PNG type photo ne maigrit presque pas, le tableau prévient — le JPEG de la page photos produit est souvent plus léger.',
	tool_bulk_compress_png_images_how_item_5: 'Téléchargez le ZIP dès qu\'un fichier a réussi. Charger un exemple a déjà tourné à l\'ouverture.',
	tool_bulk_compress_png_images_how_title: 'Comment traiter le lot',
	tool_bulk_compress_png_images_max_edge_label: 'Plus long côté',
	tool_bulk_compress_png_images_resize_on: 'Limiter le plus long côté',
	tool_bulk_compress_png_images_rules_body:
		'Aucun fond JPEG n\'est peint. Le poids baisse surtout en réduisant le plus long côté, pas en réenregistrant tel quel.',
	tool_bulk_compress_png_images_rules_item_1:
		'Le MIME de sortie est PNG. L\'alpha n\'est pas aplati. Pas de curseur qualité : ce PNG est sans perte.',
	tool_bulk_compress_png_images_rules_item_2:
		'Le plus long côté se réduit en proportion et ne s\'agrandit jamais. Réencoder seulement garde les pixels et peut à peine changer les octets.',
	tool_bulk_compress_png_images_rules_item_3:
		'Un échec de lecture ou d\'écriture ignore cette ligne. Les doublons dans le ZIP deviennent name (2).png. Les palettes indexées peuvent bander.',
	tool_bulk_compress_png_images_rules_item_4:
		'Les fichiers restent sur l\'appareil, sans envoi au serveur.',
	tool_bulk_compress_png_images_rules_title: 'Ce qu\'il faut anticiper',
	tool_bulk_compress_png_images_sample: 'Charger un exemple',
	tool_bulk_compress_png_images_status_compressing: 'Compression du lot PNG…',
	tool_bulk_compress_png_images_status_done: 'Lot terminé — consultez le tableau puis téléchargez le ZIP.',
	tool_bulk_compress_png_images_status_ok: 'PNG prêt',
	tool_bulk_compress_png_images_status_same: 'Toujours lourd',
	tool_bulk_compress_png_images_status_skip: 'Ignoré',
	tool_bulk_compress_png_images_summary_tpl: '{ok} prêts · {same} presque identiques · {skip} ignorés',
	tool_bulk_compress_png_images_title: 'Compresser des images PNG en lot',
	tool_bulk_compress_png_images_usecase_1: 'Un dossier de logos transparents que la vitrine doit continuer à servir en PNG.',
	tool_bulk_compress_png_images_usecase_2: 'Découpes d\'interface qui doivent partager le même plus long côté avant la passation.',
	tool_bulk_compress_png_images_usecase_3: 'Autocollants promo troués ; un JPEG remplirait les trous d\'un fond.',
	tool_bulk_compress_png_images_usecases_title: 'Dans quels cas',
	tool_bulk_compress_png_images_warn_anim: 'Fichiers animés : seule la première image est enregistrée en PNG fixe.',
	tool_bulk_compress_png_images_warn_edge: 'Un fichier dépasse 8192 px en largeur ou hauteur — attendez-vous à de la lenteur.',
	tool_bulk_compress_png_images_warn_large: 'Un fichier dépasse 25 Mo — cet onglet peut manquer de mémoire.',
	tool_bulk_compress_png_images_warn_same: 'Certains PNG n\'ont presque pas maigri. Réduisez le plus long côté, ou utilisez la compression photos produit si le JPEG convient.',
};

export default fr;
