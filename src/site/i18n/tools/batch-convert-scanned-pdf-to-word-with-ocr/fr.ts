/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / fr).
 * H1 local : Convertir des PDF scannés en Word avec OCR.
 * Clés identiques à en.ts ; phrases réécrites, pas un calque anglais.
 */
import type { SiteLangDict } from '../../../types';

/** Textes de l’outil en français : boutons, FAQ, règles et carte d’accueil. */
const fr: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: 'Réglages avancés (facultatif)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'Pour relire un scan papier dans Word : déposez les PDF scannés, Tout convertir, Télécharger Word. Par défaut, un seul Word pour tout le lot ; vous pouvez passer à un Word par PDF (plusieurs réussites → Télécharger ZIP). Un titre par fichier, des paragraphes par page réussie, l’image de page au-dessus par défaut. Une page floue est ignorée, le reste reste dans le même document. Les fichiers restent sur l’appareil, sans envoi au serveur. Couche texte déjà là → Transformer un PDF en document Word. Photos → Convertir plusieurs JPG en Word modifiable avec OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'Choisir des fichiers PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'Effacer',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'Fichier',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'Notes',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'Pages',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: 'État',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'Tout convertir',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} fichiers (max. 5, 20 pages)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'Convertir des PDF scannés en Word avec OCR : file d’attente, Tout convertir, Télécharger Word — restent sur l’appareil, sans envoi au serveur.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'Un PDF scanné vers Word se lit dans cet onglet : chaque page est dessinée, reconnue, puis réunie dans un DOCX modifiable. Enchaînement : ajouter les PDF, Tout convertir, Télécharger Word. Exemple : un scan imprimé de deux pages devient un Word avec titre et images facultatives. On cherche aussi OCR PDF vers Word, plusieurs PDF en Word ou scan vers Word. Les fichiers restent sur l’appareil, sans envoi au serveur. Couche texte déjà sélectionnable : Transformer un PDF en document Word. Photos : Convertir plusieurs JPG en Word modifiable avec OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'Télécharger Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'Télécharger ZIP',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'Déposez des PDF scannés ici (max. 5 fichiers, 20 pages). Le traitement reste dans cet onglet.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: 'Ajoutez d’abord des PDF scannés.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'Ce navigateur n’a pas pu assembler le Word. Essayez une version récente.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'Ce navigateur n’a pas pu assembler le ZIP. Essayez une version récente.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty:
		'Aucun texte imprimé sur cette page. Ignorée. Prenez un scan plus net, pas un brouillon manuscrit.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'Ce PDF est protégé par mot de passe. Il n’a pas été ajouté.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'Le dessin du PDF ou le moteur OCR n’a pas chargé. Rechargez puis Tout convertir. Les pages déjà lues restent téléchargeables.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'Ici, des PDF scannés, pas des photos. Pour JPG, PNG ou WebP, utilisez Convertir plusieurs JPG en Word modifiable avec OCR. Ce fichier n’a pas été ajouté.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'Impossible de lire ce PDF. Ignoré.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'Le moteur PDF n’a pas chargé dans cet onglet. Rechargez puis réessayez.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: 'Plus de 12 Mo. Compressez d’abord. Ce fichier n’a pas été ajouté.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'Cinq PDF au plus. Les autres n’ont pas été ajoutés.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: 'Le lot lit 20 pages au plus. Les fichiers en trop n’ont pas été ajoutés.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'Charger un exemple dépose sample-scan.pdf (page 1 : ONLINEFREETOOLS et The quick brown fox ; page 2 : SAMPLE TWO et Printed sample page), lance Tout convertir et active Télécharger Word avec un titre et deux pages.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: 'Exemple',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'Non. Les PDF restent dans cet onglet. Les scripts de dessin, d’OCR et d’assemblage Word viennent de ce site ; les fichiers ne partent pas vers nos serveurs.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'Transformer un PDF en document Word recopie une couche texte déjà là et ne fait pas d’OCR. Ici chaque page est dessinée puis l’image est lue, donc un scan sans texte sélectionnable peut quand même devenir des paragraphes. Si vous survolez déjà les mots, allez sur cet autre outil.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'Convertir plusieurs JPG en Word modifiable avec OCR est une file de photos. Ici, PDF seulement. Un JPG déposé est refusé exprès.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'Non. La page ratée est ignorée ; les autres pages et les autres PDF entrent dans le même Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'En mode par défaut « un Word pour le lot », chaque PDF réussi est un titre (nom du fichier). Chaque page réussie : image facultative, paragraphes OCR, saut de page. Pour des documents séparés, choisissez un Word par PDF. Tableaux et colonnes ne recopient pas la mise en page d’origine.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'Non. Les photos vont dans Convertir plusieurs JPG en Word modifiable avec OCR. Cette zone n’accepte que le PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'Le caractère imprimé passe mieux. L’écriture cursive échoue souvent sur cette page. Ce n’est pas un produit manuscrit.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'La sortie est un Word, pas un TXT ni un PDF interrogeable réécrit. Qui cherche PDF scanné vers Word, scan vers Word ou OCR PDF vers Word pour un scan papier est au bon endroit. Un dump de couche texte : Extraire le texte d’un PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'Cinq PDF au plus, 12 Mo chacun, 20 pages pour tout le lot. Un seul PDF passe aussi par Tout convertir puis Télécharger Word ; pas d’autre adresse pour un fichier isolé.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'Oui. Choisissez un Word par PDF, puis Tout convertir. Un seul PDF réussi garde Télécharger Word. Deux réussites ou plus utilisent Télécharger ZIP, avec un .docx par fichier d’entrée. Fusionner en un seul Word reste le défaut.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: 'Est-ce que vos serveurs voient mes PDF ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: 'Mon PDF a déjà une couche texte — je dois aller sur Transformer un PDF en document Word ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: 'J’ai des photos JPG, pas un PDF. Où aller ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: 'Une page a échoué. Le Word entier est-il vide ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'À quoi ressemble le fichier Word ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: 'Puis-je déposer des JPG ici ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: 'L’OCR manuscrit fonctionne-t-il ici ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: 'Est-ce que je reçois un TXT / un PDF interrogeable, ou seulement du Word ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: 'Quels plafonds de fichiers et de pages ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: 'Puis-je obtenir un Word par PDF plutôt qu’un seul fichier fusionné ?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'D’un scan papier à un Word modifiable : ajoutez les PDF, cliquez Tout convertir (premier clic : chargement du dessin et de l’OCR dans cet onglet, puis page après page), puis Télécharger Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'Déposez un ou plusieurs PDF scannés (ou choisissez les fichiers).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: 'Facultatif : choisissez une pastille de langue pour tout le lot (chinois et anglais par défaut).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'Facultatif : garder un Word pour le lot, ou un Word par PDF (plusieurs PDF réussis → Télécharger ZIP).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'Cliquez Tout convertir — le premier lancement charge le dessin PDF et l’OCR dans cet onglet, puis lit une page après l’autre. Une page ratée est ignorée.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'Cliquez Télécharger Word — ou Télécharger ZIP si vous avez choisi un Word par PDF et que plus d’un fichier a réussi.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: 'Mode d’emploi',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: '{s}s écoulées',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: 'Rechargez puis Tout convertir. Les pages déjà lues restent téléchargeables.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: 'Conversion interrompue',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_api: "Démarrage du reconnaisseur…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_core: "Premier lancement : chargement du moteur OCR (~4 Mo). Restez sur cet onglet — ça peut prendre une minute.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_docx: "Chargement de l’assembleur Word (~0,7 Mo)…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_lang: "Premier lancement : chargement des données de langue (quelques Mo). Ensuite c’est réutilisé.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_pdf: "Premier lancement : chargement du moteur PDF. Restez sur cet onglet.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_script: "Chargement des scripts OCR…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: 'Terminé. Suite : Télécharger Word, ou Télécharger ZIP si vous avez choisi un Word par PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: 'Charger',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: 'Assembler',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: 'Lire',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: 'Dessiner',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: 'Avancement de la conversion',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: 'Démarrage…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'Arabe',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'Anglais',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: 'Japonais',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'Langue de reconnaissance pour tout le lot',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: 'Chinois',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: 'Chinois + anglais',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: 'Plus long côté avant lecture (px)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: 'Défaut 2048. Plus petit soulage le téléphone.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'Par défaut, un seul Word. Un Word par PDF : Télécharger Word pour un fichier réussi, Télécharger ZIP quand plusieurs réussissent.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Export Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'Un Word pour tout le lot',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'Un Word par PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint:
		'Activé par défaut. Chaque page Word montre le scan au-dessus des paragraphes OCR pour relire.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: 'Inclure l’image de la page au-dessus du texte',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · page {page}/{pages}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'Jusqu’à 5 PDF et 20 pages. Chaque page est dessinée, réduite si le plus long côté dépasse la limite, puis lue dans l’ordre visuel. Un seul moteur OCR en série. Page ratée ignorée. L’export est soit un Word fusionné, soit un Word par PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'Par défaut : un Word, titre par PDF, image facultative et paragraphes OCR par page, puis saut. Un Word par PDF : chaque entrée réussie devient son propre .docx ; plusieurs fichiers se téléchargent en ZIP. Pas un ZIP de TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2:
		'Les fichiers restent sur l’appareil ; ils ne sont pas envoyés à un serveur. Les scripts se chargent depuis ce site.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'Manuscrit, flou fort et perspective marquée échouent souvent sur cette page. Les tableaux deviennent des lignes dans l’ordre de lecture. Les colonnes ne recopient pas le scan. Un PDF numérique à couche texte est quand même rasterisé ici ; utilisez Transformer un PDF en document Word si vous ne voulez que cette couche.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'Pas de photo. Les liasses JPG vont dans Convertir plusieurs JPG en Word modifiable avec OCR. Pas de PDF interrogeable écrit, pas de TXT téléchargé.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: 'Ce qu’il faut attendre',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'Charger un exemple',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: 'Terminé',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: 'En file',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: 'Lecture',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: 'Dessin',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'Ignorée',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: 'En cours',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: 'Terminé.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: "Le premier lancement charge le dessin PDF et le moteur OCR (~4 Mo). Restez sur cet onglet…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'Assemblage du Word…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'Convertir des PDF scannés en Word avec OCR',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1:
		'Déposez le PDF scanné d’un cours et téléchargez un Word pour retitrer les parties.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2:
		'Réunissez deux contrats scannés dans un document de relecture, image de page au-dessus de chaque bloc OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3:
		'Passez un scan de facture multi-pages en Word pour qu’un collègue le corrige (les champs de facture ne sont pas extraits).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'Ça sert surtout à',
};

export default fr;
