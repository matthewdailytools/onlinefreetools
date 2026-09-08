/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / fr).
 * 当地主词：Convertir plusieurs JPG en texte avec OCR.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: 'Réglages avancés (facultatif)',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'Déposez plusieurs photos imprimées ou captures, cliquez sur Tout convertir, puis téléchargez un ZIP. Chaque image donne un .txt ; le fichier combiné les sépare par nom. Une photo floue est ignorée. Les fichiers restent sur l’appareil, sans envoi au serveur. Une seule photo ? Utilisez Convertir un JPG en texte avec OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'Choisir des JPG, PNG ou WebP',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'Effacer',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'Notes',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'Fichier',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'Pixels',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: 'État',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'Activé par défaut. Le ZIP contient combined.txt avec --- nom --- entre les photos.',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'Inclure combined.txt dans le ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'Tout convertir',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'Copié.',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: 'Copier le texte combiné',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} fichiers (max. 10)',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'Convertissez plusieurs JPG en texte avec OCR : file, Tout convertir, ZIP — sur l’appareil, sans envoi au serveur.',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'Déposez plusieurs JPG ou captures et téléchargez un ZIP de textes. La reconnaissance tourne dans cet onglet, photo après photo, sans envoi au serveur. Étapes : ajouter les images, Tout convertir, Télécharger le ZIP. Exemple : deux photos imprimées deviennent deux TXT plus un combiné. On cherche aussi OCR par lot. Une seule photo ? La page d’un JPG.',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'Télécharger le ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint:
		'Déposez plusieurs photos ici (max. 10). Le traitement reste dans cet onglet.',
	tool_batch_convert_jpg_to_text_with_ocr_empty: 'Ajoutez d’abord des photos.',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'Pas de texte imprimé. Ignorée. Essayez une page nette, pas un manuscrit.',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'Le moteur OCR n’a pas chargé. Actualisez puis Tout convertir. Les lignes finies restent téléchargeables.',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'Impossible de créer le ZIP dans ce navigateur. Essayez-en un récent.',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: 'Image illisible. Utilisez JPEG, PNG ou WebP. Ignorée.',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: 'Cette page lit des photos, pas des PDF. Ce fichier n’entre pas dans la file.',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: 'Plus de 12 Mo. Compressez ou recadrez. Ignorée.',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: '10 photos au plus. Les autres n’ont pas été ajoutées.',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'Charger un exemple ajoute sample-1.jpg et sample-2.jpg, lance Tout convertir et active Télécharger le ZIP avec deux TXT et combined.txt.',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: 'Exemple',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'Non. Les photos restent dans cet onglet. Les scripts du moteur et du ZIP viennent de ce site ; rien n’est envoyé à nos serveurs.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'La page d’un JPG copie un seul texte. Ici : file, Tout convertir, ignorer la ligne en échec, Télécharger le ZIP. Même moteur, autre tâche.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3:
		'Non. Cette photo est ignorée, le reste continue. Le succès entre dans le ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'Un .txt par photo, nommé comme l’original. Combined.txt est inclus, avec --- fichier --- entre les pages, pour passer plusieurs JPG en texte d’un coup.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'Pour une photo, utilisez Convertir un JPG en texte avec OCR. Ici les boutons sont Tout convertir et Télécharger le ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6: 'Oui. JPEG, PNG et WebP partagent la file, sans autre URL.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'L’imprimé marche mieux. Le manuscrit échoue souvent sur cette ligne. Ce n’est pas un service de numérisation.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'Pas de PDF ni tableur. Le Word modifiable avec OCR est sur Convertir plusieurs JPG en Word modifiable avec OCR. Un PDF numérique avec calque texte va vers Extraire le texte d’un PDF.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: 'Mes photos sont-elles envoyées au serveur ?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: 'Quelle différence avec convertir un seul JPG avec OCR ?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: 'Si une photo échoue, tout le lot s’arrête-t-il ?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'Que contient le ZIP ?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: 'Je n’ai qu’une photo. Puis-je quand même m’en servir ?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'Puis-je traiter des PNG ou captures WebP ?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: 'Le manuscrit ou un service de scan marchent-ils ici ?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: 'Puis-je déposer un PDF scanné ?',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'Transformez une pile de photos imprimées en ZIP de textes : ajoutez les images, cliquez sur Tout convertir (le moteur se charge au premier clic, puis lit une photo après l’autre), puis Télécharger le ZIP ou Copier le texte combiné.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'Déposez plusieurs JPG, PNG ou WebP (ou choisissez des fichiers).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2:
		'Facultatif : langue pour tout le lot (chinois et anglais par défaut).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'Cliquez sur Tout convertir — le premier lancement charge le moteur dans cet onglet, puis lit photo après photo. Une photo en échec est ignorée.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4:
		'Cliquez sur Télécharger le ZIP (un TXT par photo, plus le combiné) ou Copier le texte combiné.',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: 'Comment ça marche',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'Arabe',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: 'Anglais',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: 'Japonais',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: 'Langue de reconnaissance pour tout le lot',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: 'Chinois',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: 'Chinois + anglais',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: 'Plus long côté avant lecture (px)',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: 'Défaut 2048. Plus petit, plus léger sur téléphone.',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: 'Aperçu du texte combiné',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'Jusqu’à 10 photos. Si le grand côté dépasse la limite, on réduit. Un worker OCR lit en série. La ligne en échec est ignorée ; le texte réussi va dans le ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'Les noms du ZIP suivent l’original. Combined.txt (activé) insère --- fichier --- entre les photos, comme un cahier photographié.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'Les fichiers restent sur l’appareil ; ils ne sont pas envoyés au serveur. Les scripts viennent de ce site.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'Manuscrit, flou fort et perspective extrême échouent souvent sur cette ligne. Les tableaux deviennent des lignes de lecture, pas du CSV.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'Pas de PDF, Word ni PDF interrogeable. Une photo à copier va vers Convertir un JPG en texte avec OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: 'À prévoir',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'Charger un exemple',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: 'Terminé',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: 'En file',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: 'Lecture',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'Ignorée',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: 'Terminé.',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: 'Chargement du moteur OCR…',
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: 'Convertir plusieurs JPG en texte avec OCR',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1:
		'Photographiez plusieurs feuilles de cours et téléchargez un ZIP de TXT pour vos notes.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2:
		'Passez en texte une pile de captures de chat ou d’erreur quand on ne peut pas sélectionner les pixels.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3:
		'Réunissez des photos de menu dans un combined.txt avec séparateurs, puis copiez pour relire.',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'Dans quels cas',
};

export default fr;
