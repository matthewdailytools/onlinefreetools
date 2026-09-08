/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / fr).
 * Mot local : Convertir plusieurs JPG en Word modifiable avec OCR.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: 'Réglages avancés (facultatif)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'Déposez plusieurs photos imprimées ou captures, cliquez sur Tout convertir puis Télécharger Word. Chaque photo devient une section : le titre est le nom du fichier, le corps est du texte modifiable ; la photo d’origine est au-dessus par défaut pour relire. Une vue floue est ignorée. Les fichiers restent sur votre appareil, ils ne sont pas envoyés à un serveur. Un ZIP de TXT ? Utilisez Convertir plusieurs JPG en texte avec OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'Choisir des JPG, PNG ou WebP',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'Effacer',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'Notes',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'Fichier',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'Pixels',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: 'État',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'Tout convertir',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} fichiers (max. 10)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'Convertir plusieurs JPG en Word modifiable avec OCR : file, Tout convertir, Télécharger Word — reste sur votre appareil, n’est pas envoyé à un serveur.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'Déposez plusieurs JPG et téléchargez un Word que vous pouvez modifier. La reconnaissance tourne dans cet onglet, photo après photo ; les fichiers restent sur votre appareil, ils ne sont pas envoyés à un serveur. Étapes : ajouter les images, Tout convertir, Télécharger Word. Exemple : deux échantillons imprimés deviennent deux sections titrées, photo facultative. On cherche aussi JPG vers Word avec OCR. Une photo ratée est ignorée. Le ZIP de texte est sur l’autre page lot.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'Télécharger Word',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: 'Déposez plusieurs photos ici (max. 10). Le traitement reste dans cet onglet.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: 'Ajoutez d’abord des photos.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'Ce navigateur n’a pas pu assembler le Word. Essayez un navigateur récent.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'Aucun texte imprimé. Ignorée. Essayez une page plus nette, pas un manuscrit.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'Le moteur OCR n’a pas chargé. Actualisez puis Tout convertir. Les sections déjà faites restent téléchargeables.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'Impossible de lire cette image. Utilisez JPEG, PNG ou WebP. Ignorée.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'Cette page lit des photos, pas de PDF. Ce fichier n’a pas été ajouté.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: 'Plus de 12 Mo. Compressez ou recadrez d’abord. Ignorée.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: 'Au plus 10 photos. Les autres n’ont pas été ajoutées.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'Charger un exemple ajoute sample-1.jpg (ONLINEFREETOOLS et The quick brown fox) et sample-2.jpg (SAMPLE TWO et 印刷体样例), lance Tout convertir et active Télécharger Word avec deux sections titrées.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: 'Exemple',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'Non. Les photos restent dans cet onglet. Le moteur et le script Word se chargent depuis ce site ; les fichiers ne partent pas vers nos serveurs.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'Convertir plusieurs JPG en texte avec OCR télécharge un ZIP de TXT. Ici on assemble un Word modifiable, une section par photo. Même moteur, autre tâche.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'Images vers Word colle les photos comme des dessins : on ne sélectionne pas les lettres. Ici l’OCR écrit des paragraphes éditables. La photo d’origine est facultative, pour relire.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'Non. Cette photo est ignorée ; le reste entre dans le même Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'Chaque photo réussie est une section : le titre est le nom du fichier, puis la photo facultative, les paragraphes OCR et un saut de page. Colonnes et tableaux ne recopient pas la mise en page d’origine.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'Non. Cette page n’accepte pas de PDF. Les PDF scannés vont dans Convertir des PDF scannés en Word avec OCR. Un PDF numérique avec calque texte va dans Transformer un PDF en document Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'L’imprimé marche le mieux. L’écriture cursive échoue souvent sur cette ligne. Ce n’est pas un produit manuscrit.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'Oui : JPEG, PNG et WebP partagent la file. Même une seule photo télécharge un Word, pas un TXT. Pour une image seule, utilisez Convertir un JPG en texte avec OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: 'Mes photos sont-elles envoyées ?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: 'Quelle différence avec convertir plusieurs JPG en texte avec OCR ?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: 'Quelle différence avec Images vers Word ?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: 'Si une photo échoue, le Word est-il vide ?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'À quoi ressemble chaque section dans Word ?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: 'Puis-je déposer un PDF scanné pour OCR vers Word ?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: 'L’écriture manuscrite marche-t-elle ?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: 'Puis-je utiliser un PNG, ou un seul JPG ?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'Passez une liasse de photos imprimées en un Word modifiable : ajoutez les images, cliquez sur Tout convertir (le moteur se charge au premier clic puis lit photo après photo), puis Télécharger Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'Déposez plusieurs JPG, PNG ou WebP (ou choisissez des fichiers).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'Facultatif : choisissez une pastille de langue pour tout le lot (chinois et anglais par défaut).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'Cliquez sur Tout convertir — le premier passage charge le moteur OCR dans cet onglet, puis lit photo après photo. Une photo ratée est ignorée.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'Cliquez sur Télécharger Word — un document avec une section par photo (titre, photo facultative, texte modifiable).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: 'Comment ça marche',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'Arabe',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: 'Anglais',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: 'Japonais',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'Langue de reconnaissance pour tout le lot',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: 'Chinois',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: 'Chinois + anglais',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: 'Plus long côté avant lecture (px)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: 'Défaut 2048. Plus petit soulage le téléphone.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'Activé par défaut. Chaque section montre la photo au-dessus des paragraphes OCR pour relire dans Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: 'Inclure la photo d’origine au-dessus du texte',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'Jusqu’à 10 photos en file. Si le plus long côté dépasse la limite, on réduit puis on lit dans l’ordre visuel. Un seul worker OCR en série. Une ligne ratée est ignorée ; les réussites deviennent des sections d’un seul Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'Chaque photo réussie est une section Word : Titre 1 est le nom du fichier, puis la photo facultative, les paragraphes OCR et un saut de page. C’est du JPG vers Word avec OCR pour une liasse, pas un ZIP de TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'Les fichiers restent sur votre appareil ; ils ne sont pas envoyés à un serveur. Les scripts se chargent depuis ce site.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'Manuscrit, flou fort et perspective marquée échouent souvent sur cette ligne. Les tableaux deviennent des lignes dans l’ordre de lecture. Les colonnes ne recopient pas la page d’origine.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'Pas de PDF. Le ZIP de TXT est dans Convertir plusieurs JPG en texte avec OCR. Photos sans OCR, dans Images vers Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'Ce qu’il faut attendre',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'Charger un exemple',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: 'Terminé',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: 'En file',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: 'Lecture',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'Ignorée',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: 'Terminé.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'Chargement du moteur OCR…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'Assemblage du Word…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: 'Convertir plusieurs JPG en Word modifiable avec OCR',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1:
		'Photographiez plusieurs pages d’un polycopié et téléchargez un Word pour retitrer.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2:
		'Passez des photos de menu dans un document avec l’image au-dessus de chaque section OCR pour relire.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3:
		'Regroupez des captures d’erreur dans un Word modifiable à envoyer à un collègue.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: 'À quoi ça sert',
};

export default fr;
