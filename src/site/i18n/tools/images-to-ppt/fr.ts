/**
 * i18n tool shard (images-to-ppt / fr).
 * 多图转 PowerPoint 法语文案：一图一页 PPTX，可选 16:9/4:3、contain/cover、背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 法语文案字典。 */
const fr: SiteLangDict = {
	tool_images_to_ppt_title: 'Images vers PowerPoint — photos en diapositives PPTX',
	tool_images_to_ppt_desc: 'Transformez des photos locales en .pptx, une diapositive par image.',
	tool_images_to_ppt_description:
		'Convertissez plusieurs photos en PowerPoint (.pptx) dans le navigateur : une image par diapositive, 16:9 ou 4:3, contain ou cover. Étapes : Choisir des images, Convertir en PowerPoint, Télécharger. Exemple : trois photos → trois diapositives. Les fichiers restent dans cet onglet et ne sont pas envoyés au serveur.',
	tool_images_to_ppt_choose_files: 'Choisir des images',
	tool_images_to_ppt_drop_hint: 'Ou déposez ici plusieurs JPEG, PNG, WebP ou GIF. Le traitement reste dans cet onglet.',
	tool_images_to_ppt_convert: 'Convertir en PowerPoint',
	tool_images_to_ppt_download: 'Télécharger',
	tool_images_to_ppt_sample: 'Charger un exemple',
	tool_images_to_ppt_clear: 'Effacer',
	tool_images_to_ppt_advanced: 'Paramètres avancés (facultatif)',
	tool_images_to_ppt_layout_label: 'Taille de diapositive',
	tool_images_to_ppt_layout_16x9: 'Écran large 16:9',
	tool_images_to_ppt_layout_4x3: 'Standard 4:3',
	tool_images_to_ppt_layout_hint: 'La plupart des projecteurs modernes sont en 16:9. Choisissez 4:3 pour les salles de classe plus anciennes.',
	tool_images_to_ppt_fit_label: 'Comment l’image remplit la diapositive',
	tool_images_to_ppt_fit_contain: 'Image entière (bandes)',
	tool_images_to_ppt_fit_cover: 'Remplir la diapositive (peut rogner)',
	tool_images_to_ppt_fit_hint: 'Contain garde chaque pixel visible. Cover remplit la diapositive et peut rogner les photos hautes ou larges.',
	tool_images_to_ppt_bg_label: 'Arrière-plan de diapositive',
	tool_images_to_ppt_bg_hint: 'Visible dans les bandes lorsque l’ajustement est contain. Blanc par défaut.',
	tool_images_to_ppt_progress: 'Création du PowerPoint…',
	tool_images_to_ppt_step_encode: 'Encoder les images',
	tool_images_to_ppt_step_build: 'Assembler les diapositives',
	tool_images_to_ppt_step_pack: 'Empaqueter le PPTX',
	tool_images_to_ppt_encode_step: 'Encodage de l’image {i} sur {n}…',
	tool_images_to_ppt_build_step: 'Ajout des diapositives au diaporama…',
	tool_images_to_ppt_pack_step: 'Empaquetage du fichier .pptx…',
	tool_images_to_ppt_elapsed: 'Écoulé {s}s',
	tool_images_to_ppt_move_up: 'Monter',
	tool_images_to_ppt_move_down: 'Descendre',
	tool_images_to_ppt_remove: 'Retirer',
	tool_images_to_ppt_empty: 'Ajoutez d’abord au moins une image.',
	tool_images_to_ppt_err_decode: 'Impossible de décoder l’image. Essayez JPEG, PNG ou WebP.',
	tool_images_to_ppt_err_convert: 'Impossible de créer le PowerPoint. Essayez moins d’images ou des fichiers plus petits.',
	tool_images_to_ppt_err_lib: 'Échec du chargement de la bibliothèque PPTX. Actualisez la page et réessayez.',
	tool_images_to_ppt_warn_large: 'Fichier volumineux (>25 Mo) — la conversion peut être lente.',
	tool_images_to_ppt_warn_edge: 'Un côté dépasse ~8192 px — certains navigateurs peuvent échouer.',
	tool_images_to_ppt_warn_animation: 'GIF animé : seule la première image est utilisée sur la diapositive.',
	tool_images_to_ppt_status_converting: 'Conversion en PowerPoint…',
	tool_images_to_ppt_status_done: 'Terminé — cliquez sur Télécharger pour enregistrer le .pptx.',
	tool_images_to_ppt_stats_tpl: '{n} diapositives → PPTX prêt ({bytes})',
	tool_images_to_ppt_how_title: 'Comment convertir des images en PowerPoint',
	tool_images_to_ppt_how_body:
		'Chaque fichier de la liste devient une diapositive. Réordonnez avec les flèches, puis convertissez. Les paramètres facultatifs changent la taille, le remplissage et la couleur des bandes.',
	tool_images_to_ppt_how_item_1: 'Choisir des images ou déposer des JPEG, PNG, WebP ou GIF dans la zone de dépôt.',
	tool_images_to_ppt_how_item_2: 'Réordonnez avec Monter / Descendre si l’ordre des diapositives est incorrect. Retirez celles dont vous n’avez pas besoin.',
	tool_images_to_ppt_how_item_3: 'Au besoin, ouvrez Paramètres avancés pour choisir 16:9 ou 4:3, contain ou cover, et une couleur d’arrière-plan.',
	tool_images_to_ppt_how_item_4: 'Cliquez sur Convertir en PowerPoint, attendez la barre de progression, puis cliquez sur Télécharger.',
	tool_images_to_ppt_why_choose_title: 'Pourquoi utiliser Images vers PowerPoint — photos en diapositives PPTX',
	tool_images_to_ppt_why_choose_item_1: 'Une diapositive par photo, dans l’ordre que vous fixez — sans envoi au serveur et sans compte.',
	tool_images_to_ppt_why_choose_item_2: 'Écran large 16:9 ou classique 4:3, pour que le diaporama corresponde au projecteur de la salle.',
	tool_images_to_ppt_why_choose_item_3: 'Contain garde la photo entière ; cover remplit la diapositive pour un rendu plein cadre.',
	tool_images_to_ppt_why_choose_item_4: 'Avertissements discrets pour les fichiers énormes, les bords géants en pixels et les GIF animés (première image seule).',
	tool_images_to_ppt_why_choose_item_5: 'Un HUD de progression visible pendant l’encodage de chaque image et l’empaquetage du .pptx.',
	tool_images_to_ppt_rules_title: 'Règles',
	tool_images_to_ppt_rules_body: 'Le diaporama est construit avec PptxGenJS entièrement dans cet onglet du navigateur.',
	tool_images_to_ppt_rules_item_1: 'La mise en page par défaut est l’écran large 16:9 ; passez en 4:3 dans Paramètres avancés si besoin.',
	tool_images_to_ppt_rules_item_2: 'L’ordre des diapositives suit la liste. Utilisez Monter / Descendre avant de convertir.',
	tool_images_to_ppt_rules_item_3: 'Contain laisse des bandes de la couleur d’arrière-plan ; cover rogne pour remplir la zone de contenu.',
	tool_images_to_ppt_rules_item_4: 'Les GIF animés n’apportent que la première image. Titres et transitions ne sont pas ajoutés — éditez-les dans PowerPoint après Télécharger.',
	tool_images_to_ppt_rules_item_5: 'Charger la bibliothèque PPTX depuis ce site n’envoie pas vos photos sur nos serveurs.',
	tool_images_to_ppt_example_title: 'Exemple',
	tool_images_to_ppt_example:
		'Charger un exemple crée trois diapositives de blocs de couleur (sample-a, sample-b, sample-c) en 16:9 avec ajustement contain. Convertir en PowerPoint se termine dans le navigateur ; Télécharger enregistre images.pptx. Passez en 4:3 ou cover et convertissez à nouveau pour comparer le rognage.',
	tool_images_to_ppt_usecases_title: 'Quand l’utiliser',
	tool_images_to_ppt_usecase_1: 'Transformer un lot de photos de téléphone en présentation rapide sans ouvrir PowerPoint bureau d’abord.',
	tool_images_to_ppt_usecase_2: 'Parcours produit où chaque capture a besoin de sa propre diapositive plein cadre ou avec bandes.',
	tool_images_to_ppt_usecase_3: 'Photos de classe ou de terrain qui doivent correspondre à un projecteur 4:3 encore en service.',
	tool_images_to_ppt_usecase_4: 'Monter une ébauche à partir d’images avant d’ajouter titres, notes et animations dans PowerPoint ou LibreOffice Impress.',
	tool_images_to_ppt_faq_q1: 'Mes photos sont-elles envoyées ?',
	tool_images_to_ppt_faq_a1:
		'Non. Le décodage, la mise en page des diapositives et l’empaquetage PPTX s’exécutent dans votre onglet. La seule requête réseau charge le script PptxGenJS depuis le dossier vendor de ce site.',
	tool_images_to_ppt_faq_q2: 'Faut-il installer Microsoft PowerPoint ?',
	tool_images_to_ppt_faq_a2:
		'Non. Toute appli qui ouvre un .pptx convient — PowerPoint, Google Slides (Fichier → Importer), LibreOffice Impress, Keynote et d’autres.',
	tool_images_to_ppt_faq_q3: 'Puis-je ajouter titres ou animations ici ?',
	tool_images_to_ppt_faq_a3:
		'Pas sur cette page. Exportez d’abord les diapositives photo, puis ouvrez le fichier dans PowerPoint (ou Impress) pour le texte, les transitions et les notes du présentateur.',
	tool_images_to_ppt_faq_q4: 'Images vers PowerPoint ou images vers PDF ?',
	tool_images_to_ppt_faq_a4:
		'Le PPTX reste modifiable en diapositives. Le PDF est figé pour les documents et l’impression. Utilisez l’outil Images vers PDF quand vous avez besoin d’un document, pas d’un diaporama.',
	tool_images_to_ppt_faq_q5: 'Contain ou cover — lequel choisir ?',
	tool_images_to_ppt_faq_a5:
		'Contain (par défaut) montre toute la photo avec des bandes de la couleur d’arrière-plan. Cover remplit la diapositive et peut rogner les bords — utile pour des photos produit plein cadre.',
	tool_images_to_ppt_faq_q6: 'Que deviennent les GIF animés ?',
	tool_images_to_ppt_faq_a6:
		'Seule la première image est placée sur la diapositive. PowerPoint ne lit pas les GIF multi-images comme animations à partir de cet export.',
	tool_images_to_ppt_faq_q7: 'Pourquoi la conversion est-elle lente ou échoue-t-elle ?',
	tool_images_to_ppt_faq_a7:
		'Les très gros fichiers (>25 Mo) ou les bords au-delà de ~8192 px peuvent saturer le navigateur. Redimensionnez ou compressez les images, puis convertissez à nouveau avec moins de fichiers si besoin.',
	tool_images_to_ppt_article: 'Convertir des images en diaporama PowerPoint PPTX dans le navigateur',
	tool_images_to_ppt_references: 'Références PptxGenJS et MDN Blob pour le chemin d’export côté client.',
	tool_images_to_ppt_ref_a_label: 'PptxGenJS — bibliothèque JavaScript PowerPoint',
	tool_images_to_ppt_ref_b_label: 'MDN — Blob',
};

export default fr;
