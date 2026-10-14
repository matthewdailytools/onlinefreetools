/**
 * i18n tool shard (image-to-base64 / fr).
 * Image en Base64 / Base64 vers image ; onglets Encoder et Décoder ; HUD de progression.
 * Ne modifier que les clés de cet outil ; le jeu de clés suit en.ts.
 */
import type { SiteLangDict } from '../../../types';

/** Dictionnaire des textes en français (vouvoiement) pour image-to-base64. */
const fr: SiteLangDict = {
	tool_image_to_base64_title: 'Image en Base64 — encoder et décoder en local',
	tool_image_to_base64_desc:
		'Convertissez une image en Base64 ou en data URL, et un Base64 en image ; les fichiers restent sur l’appareil, sans envoi au serveur.',
	tool_image_to_base64_description:
		'Convertissez une image en Base64 (data URL) ou un Base64 vers une image dans le navigateur, sans envoi au serveur. Étapes : choisissez l’image, cliquez sur Encoder puis Copier ou Télécharger ; ou collez le Base64 et cliquez sur Décoder. Exemple : PNG → data:image/png;base64,…',
	tool_image_to_base64_mode_label: 'Mode',
	tool_image_to_base64_tab_encode: 'Encoder',
	tool_image_to_base64_tab_decode: 'Décoder',
	tool_image_to_base64_choose_file: 'Choisir une image',
	tool_image_to_base64_drop_hint: 'Ou déposez ici un JPEG, PNG, WebP ou GIF. Le traitement reste dans cet onglet.',
	tool_image_to_base64_encode: 'Encoder',
	tool_image_to_base64_decode_btn: 'Décoder',
	tool_image_to_base64_copy: 'Copier',
	tool_image_to_base64_copy_done: 'Copié',
	tool_image_to_base64_download: 'Télécharger',
	tool_image_to_base64_sample: 'Charger un exemple',
	tool_image_to_base64_clear: 'Effacer',
	tool_image_to_base64_advanced: 'Paramètres avancés (facultatif)',
	tool_image_to_base64_strip_prefix: 'Retirer le préfixe data: (Base64 brut uniquement)',
	tool_image_to_base64_strip_hint:
		'Désactivé (par défaut) : data:image/…;base64, est conservé pour coller directement dans le HTML. Activé : seul le corps Base64 est copié.',
	tool_image_to_base64_decode_mime_label: 'MIME par défaut pour le Base64 brut',
	tool_image_to_base64_decode_mime_hint:
		'Utilisé seulement si le texte collé ne commence pas par data:. Une data URL garde son propre MIME.',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'Collez data:image/…;base64,… ou du Base64 brut',
	tool_image_to_base64_output_label: 'Résultat',
	tool_image_to_base64_preview_label: 'Aperçu',
	tool_image_to_base64_progress: 'Traitement…',
	tool_image_to_base64_step_read: 'Lecture',
	tool_image_to_base64_step_encode: 'Encodage',
	tool_image_to_base64_step_ready: 'Prêt',
	tool_image_to_base64_read_step: 'Lecture du fichier…',
	tool_image_to_base64_encode_step: 'Création de la data URL…',
	tool_image_to_base64_ready_step: 'Résultat prêt',
	tool_image_to_base64_decode_step_parse: 'Analyse',
	tool_image_to_base64_decode_step_blob: 'Reconstruction',
	tool_image_to_base64_decode_step_ready: 'Prêt',
	tool_image_to_base64_parse_step: 'Analyse du Base64…',
	tool_image_to_base64_blob_step: 'Reconstruction de l’image…',
	tool_image_to_base64_elapsed: '{s} s écoulées',
	tool_image_to_base64_empty: 'Choisissez d’abord une image.',
	tool_image_to_base64_empty_decode: 'Collez d’abord une data URL ou une chaîne Base64.',
	tool_image_to_base64_err_decode:
		'Décodage impossible. Vérifiez qu’il s’agit bien d’une data URL d’image ou d’un Base64 valide.',
	tool_image_to_base64_err_encode: 'Impossible d’encoder ce fichier. Essayez un JPEG, PNG ou WebP.',
	tool_image_to_base64_err_invalid: 'Base64 ou data URL non valide.',
	tool_image_to_base64_warn_large: 'Entrée volumineuse (plus de 25 Mo) : le traitement peut être lent et gourmand en mémoire.',
	tool_image_to_base64_status_working: 'Traitement…',
	tool_image_to_base64_status_done: 'Terminé : copiez la chaîne ou cliquez sur Télécharger.',
	tool_image_to_base64_status_decoded: 'Terminé : l’aperçu est prêt ; cliquez sur Télécharger pour enregistrer l’image.',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} caractères · {bytes}',
	tool_image_to_base64_how_title: 'Comment convertir une image en Base64',
	tool_image_to_base64_how_body:
		'Encoder lit l’image dans le navigateur et la transforme en data URL. Décoder fait l’inverse à partir d’une data URL complète ou d’un Base64 brut (le MIME par défaut se règle dans les paramètres avancés). Les fichiers restent sur l’appareil, sans envoi au serveur.',
	tool_image_to_base64_how_item_1: 'Dans l’onglet Encoder, choisissez une image (ou déposez-la), puis cliquez sur Encoder.',
	tool_image_to_base64_how_item_2:
		'Besoin du Base64 brut ? Ouvrez les paramètres avancés et cochez « Retirer le préfixe data: ».',
	tool_image_to_base64_how_item_3:
		'Cliquez sur Copier pour placer la chaîne dans le presse-papiers, ou sur Télécharger pour récupérer l’image d’origine.',
	tool_image_to_base64_how_item_4:
		'Pour passer du Base64 vers une image, ouvrez Décoder, collez la data URL ou le Base64, cliquez sur Décoder et téléchargez l’image obtenue.',
	tool_image_to_base64_why_choose_title: 'Pourquoi utiliser ce convertisseur image en Base64',
	tool_image_to_base64_why_choose_item_1:
		'Un seul outil pour les deux sens : image en Base64 avec Encoder, Base64 vers image avec Décoder.',
	tool_image_to_base64_why_choose_item_2:
		'Une option retire le préfixe data: quand le champ d’une API n’accepte que du Base64 brut.',
	tool_image_to_base64_why_choose_item_3:
		'L’aperçu affiche l’image après chaque opération : vous vérifiez les pixels, pas seulement une longue chaîne.',
	tool_image_to_base64_why_choose_item_4:
		'Un avertissement s’affiche au-delà d’environ 25 Mo, quand la mémoire du navigateur risque de saturer.',
	tool_image_to_base64_why_choose_item_5:
		'Le traitement se fait dans cet onglet : le fichier reste sur l’appareil, sans envoi au serveur.',
	tool_image_to_base64_rules_title: 'Règles à connaître',
	tool_image_to_base64_rules_body:
		'Encoder convertit le fichier tel quel en data URL. Décoder reconstruit les octets de l’image à partir du texte pour que vous puissiez la télécharger.',
	tool_image_to_base64_rules_item_1:
		'Par défaut, le résultat est une chaîne data:image/…;base64,… complète, utilisable telle quelle dans l’attribut src d’un <img>.',
	tool_image_to_base64_rules_item_2:
		'Retirer le préfixe supprime tout ce qui précède la première virgule, pratique pour les API qui n’attendent que du Base64 brut.',
	tool_image_to_base64_rules_item_3:
		'Un Base64 sans préfixe est interprété avec le MIME par défaut des paramètres avancés (image/png si vous n’y touchez pas).',
	tool_image_to_base64_rules_item_4:
		'Des caractères hors de l’alphabet Base64 ou une chaîne tronquée déclenchent une erreur ; rien n’est envoyé au serveur.',
	tool_image_to_base64_rules_item_5:
		'Un GIF animé est encodé comme fichier entier ; cette page ne modifie pas les images de l’animation.',
	tool_image_to_base64_example_title: 'Exemple',
	tool_image_to_base64_example:
		'Charger un exemple génère un PNG de 320×200 portant le mot « Base64 », lance l’encodage et remplit le résultat avec data:image/png;base64,…. Collez cette chaîne dans un <img src="…"> de votre HTML. Passez ensuite sur Décoder, collez la même chaîne, cliquez sur Décoder puis téléchargez decoded.png.',
	tool_image_to_base64_usecases_title: 'Cas d’usage',
	tool_image_to_base64_usecase_1:
		'Intégrer une petite icône ou un logo dans du HTML ou du CSS, sans requête d’image séparée.',
	tool_image_to_base64_usecase_2:
		'Déboguer un e-mail ou un fichier Markdown qui contient déjà une image en data URL.',
	tool_image_to_base64_usecase_3:
		'Récupérer l’image d’aperçu renvoyée en Base64 dans la réponse d’une API.',
	tool_image_to_base64_usecase_4:
		'Fournir uniquement le corps Base64 à un champ de formulaire qui refuse le préfixe data:.',
	tool_image_to_base64_faq_q1: 'Mes images sont-elles envoyées sur un serveur ?',
	tool_image_to_base64_faq_a1:
		'Non. L’encodage et le décodage se font dans l’onglet du navigateur : vos fichiers restent sur l’appareil, sans envoi au serveur.',
	tool_image_to_base64_faq_q2: 'Data URL ou Base64 brut : quelle différence ?',
	tool_image_to_base64_faq_a2:
		'Une data URL commence par data:image/png;base64, suivi du contenu : elle se colle directement dans le HTML. Le Base64 brut n’est que le contenu ; pour le copier sous cette forme, cochez « Retirer le préfixe data: » dans les paramètres avancés.',
	tool_image_to_base64_faq_q3: 'Et pour les fichiers très lourds ?',
	tool_image_to_base64_faq_a3:
		'C’est possible, mais gourmand en mémoire : le Base64 pèse environ 33 % de plus que le fichier. Au-delà de 25 Mo environ, compressez ou redimensionnez l’image d’abord.',
	tool_image_to_base64_faq_q4: 'Quel type MIME est utilisé au décodage ?',
	tool_image_to_base64_faq_a4:
		'Celui de la data URL lorsqu’il est présent. Pour un Base64 brut, c’est le « MIME par défaut » des paramètres avancés qui s’applique (image/png d’origine).',
	tool_image_to_base64_faq_q5: 'Les GIF animés sont-ils pris en charge ?',
	tool_image_to_base64_faq_a5:
		'Oui : Encoder place le fichier entier dans la data URL, animation comprise. Cette page ne découpe ni ne modifie les images de l’animation.',
	tool_image_to_base64_faq_q6: 'Quelle différence avec un convertisseur de formats d’image ?',
	tool_image_to_base64_faq_a6:
		'Ici, vous obtenez du texte (ou vous retrouvez une image à partir de texte). Pour passer de PNG à JPEG ou WebP sans Base64, utilisez plutôt le Convertisseur de formats d’image.',
	tool_image_to_base64_faq_q7: 'Pourquoi le bouton Copier est-il grisé ou vide ?',
	tool_image_to_base64_faq_a7:
		'Copier nécessite un résultat d’Encoder : choisissez une image, cliquez sur Encoder, puis sur Copier. Dans l’onglet Décoder, utilisez Télécharger pour enregistrer le fichier image.',
	tool_image_to_base64_article:
		'Image en Base64 dans le navigateur : Encoder produit une data URL ; Décoder accepte une data URL ou du Base64 brut avec un MIME par défaut réglable.',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — URL de données',
};

export default fr;
