/**
 * i18n tool shard (compare-two-pdfs / fr).
 * Compare la couche texte de deux PDF : surligne ajouts et suppressions, affiche les pages ; sans OCR.
 */
import type { SiteLangDict } from '../../../types';

/** Dictionnaire des textes en français pour l’outil « Comparer deux PDF ». */
const fr: SiteLangDict = {
	tool_compare_two_pdfs_title: "Comparer deux PDF — surligner les différences de texte",
	tool_compare_two_pdfs_desc: "Repérez les différences de texte entre deux PDF, sans envoi au serveur, puis téléchargez le résultat en HTML.",
	tool_compare_two_pdfs_description:
		"Comparez deux PDF et surlignez mot à mot les ajouts et les suppressions dans le texte. Étapes : choisissez le PDF A et le PDF B, cliquez sur Comparer, puis Télécharger le diff HTML. Exemple : « trente jours » face à « soixante jours » est signalé. Couche texte uniquement : un PDF scanné doit d’abord passer par un OCR.",
	tool_compare_two_pdfs_file_a: "PDF A (ancienne version / original)",
	tool_compare_two_pdfs_file_b: "PDF B (nouvelle version / révisée)",
	tool_compare_two_pdfs_choose_file: "Choisissez un PDF ou déposez-le dans ce cadre",
	tool_compare_two_pdfs_choose_files: "Choisir des fichiers",
	tool_compare_two_pdfs_drop_hint: "Ou déposez un PDF ici. Le traitement reste dans cet onglet.",
	tool_compare_two_pdfs_compare: "Comparer",
	tool_compare_two_pdfs_download: "Télécharger le diff HTML",
	tool_compare_two_pdfs_sample: "Charger un exemple",
	tool_compare_two_pdfs_clear: "Effacer",
	tool_compare_two_pdfs_advanced: "Réglages avancés (facultatif)",
	tool_compare_two_pdfs_ignore_case: "Ignorer majuscules et minuscules",
	tool_compare_two_pdfs_ignore_space: "Fusionner les espaces répétés et les retours à la ligne",
	tool_compare_two_pdfs_advanced_hint: "Pratique quand un export coupe les lignes autrement alors que le texte est identique.",
	tool_compare_two_pdfs_result_label: "Différences de texte (A → B)",
	tool_compare_two_pdfs_legend_added: "Ajouté dans B",
	tool_compare_two_pdfs_legend_removed: "Supprimé de A",
	tool_compare_two_pdfs_empty: "Choisissez d’abord le PDF A et le PDF B.",
	tool_compare_two_pdfs_err_convert: "Impossible de produire la comparaison. Rechargez la page et réessayez.",
	tool_compare_two_pdfs_err_encrypted: "Ce PDF semble protégé par mot de passe. Déverrouillez-le, puis relancez la comparaison.",
	tool_compare_two_pdfs_err_load: "Impossible de lire l’un des deux PDF.",
	tool_compare_two_pdfs_err_notext: "Aucun texte sélectionnable trouvé. Un PDF scanné (image seule) doit passer par un OCR avant de pouvoir être comparé ici.",
	tool_compare_two_pdfs_err_pdfjs: "Le moteur d’affichage PDF n’a pas pu se charger.",
	tool_compare_two_pdfs_status_working: "Extraction du texte et comparaison en cours…",
	tool_compare_two_pdfs_status_done: "Terminé : en vert ce qui a été ajouté dans B, en rouge ce qui a été supprimé de A. Le téléchargement enregistre un fichier HTML.",
	tool_compare_two_pdfs_status_identical: "Aucune différence de texte avec les options actuelles.",
	tool_compare_two_pdfs_summary_tpl: "{added} ajouts · {removed} suppressions",
	tool_compare_two_pdfs_pages_tpl: "pages A={a}, B={b}",
	tool_compare_two_pdfs_warn_large: "Fichier volumineux : la comparaison peut être lente.",
	tool_compare_two_pdfs_how_title: "Comment comparer deux PDF",
	tool_compare_two_pdfs_how_body:
		"L’outil lit la couche texte de chaque PDF puis compare les mots un à un. La mise en page, les polices et les images sont ignorées : seul compte le texte que l’on peut sélectionner.",
	tool_compare_two_pdfs_how_item_1: "Choisissez le PDF A (original) et le PDF B (révisé), ou déposez chaque fichier dans son cadre.",
	tool_compare_two_pdfs_how_item_2: "Au besoin, ouvrez Réglages avancés pour ignorer la casse ou fusionner les espaces.",
	tool_compare_two_pdfs_how_item_3: "Cliquez sur Comparer et suivez la barre de progression pendant l’aperçu et l’extraction des deux fichiers.",
	tool_compare_two_pdfs_how_item_4: "Lisez le surlignage vert et rouge, vérifiez les compteurs, puis cliquez sur Télécharger le diff HTML si vous voulez un fichier.",
	tool_compare_two_pdfs_why_choose_title: "Pourquoi utiliser Comparer deux PDF",
	tool_compare_two_pdfs_why_choose_item_1: "Les deux aperçus côte à côte, avec en dessous un seul surlignage mot à mot des changements.",
	tool_compare_two_pdfs_why_choose_item_2: "Le nombre de passages ajoutés et supprimés est affiché, ainsi que le nombre de pages de chaque fichier.",
	tool_compare_two_pdfs_why_choose_item_3: "Option pour ignorer la casse et les espaces quand un nouvel export n’a fait que recouper les lignes.",
	tool_compare_two_pdfs_why_choose_item_4: "Messages clairs pour un PDF protégé par mot de passe ou un scan sans couche texte.",
	tool_compare_two_pdfs_why_choose_item_5: "Tout se passe dans le navigateur : les PDF restent sur l’appareil, sans envoi au serveur.",
	tool_compare_two_pdfs_rules_title: "Règles",
	tool_compare_two_pdfs_rules_body: "Seule la couche texte est comparée : ce n’est pas une comparaison visuelle au pixel près.",
	tool_compare_two_pdfs_rules_item_1: "Le texte sélectionnable de A et B est extrait avec PDF.js, puis les écarts sont surlignés avec jsdiff.",
	tool_compare_two_pdfs_rules_item_2: "Tout reste dans cet onglet ; choisir un fichier ne l’envoie à aucun serveur.",
	tool_compare_two_pdfs_rules_item_3: "Pas d’OCR. Un scan composé uniquement d’images doit être océrisé ailleurs au préalable.",
	tool_compare_two_pdfs_rules_item_4: "Un PDF protégé par mot de passe ou endommagé affiche un message d’erreur explicite.",
	tool_compare_two_pdfs_rules_item_5: "Le téléchargement exporte le texte surligné en HTML, pas un PDF annoté.",
	tool_compare_two_pdfs_example_title: "Exemple",
	tool_compare_two_pdfs_example:
		"Charger un exemple crée deux contrats d’une page. A indique « Paiement sous trente jours. » et B « Paiement sous soixante jours. ». Après Comparer, « trente » apparaît en rouge comme supprimé et « soixante » en vert comme ajouté. Avec « Ignorer majuscules et minuscules » activé, « Jours » et « jours » sont considérés comme identiques.",
	tool_compare_two_pdfs_usecases_title: "Dans quels cas l’utiliser",
	tool_compare_two_pdfs_usecase_1: "Vérifier le contrat PDF qu’on vous renvoie face à la version que vous aviez envoyée la semaine dernière.",
	tool_compare_two_pdfs_usecase_2: "Repérer les reformulations dans des CGU ou une politique au format PDF avant de signer.",
	tool_compare_two_pdfs_usecase_3: "Comparer deux exports quand seuls les mots comptent, pas les polices ni les marges.",
	tool_compare_two_pdfs_usecase_4: "Comparer des brouillons confidentiels sans qu’ils quittent l’appareil.",
	tool_compare_two_pdfs_faq_q1: "Mes PDF sont-ils envoyés sur un serveur ?",
	tool_compare_two_pdfs_faq_a1:
		"Non. L’aperçu et l’extraction du texte se font dans l’onglet du navigateur. Les scripts proviennent de ce site, mais le contenu de vos fichiers reste sur l’appareil.",
	tool_compare_two_pdfs_faq_q2: "Pourquoi un PDF scanné affiche-t-il « aucun texte sélectionnable » ?",
	tool_compare_two_pdfs_faq_a2:
		"Un scan est une image sans couche texte, et cette page ne fait pas d’OCR. Passez-le dans un outil d’OCR, exportez un PDF interrogeable, puis comparez-le ici.",
	tool_compare_two_pdfs_faq_q3: "Et si le PDF est protégé par mot de passe ?",
	tool_compare_two_pdfs_faq_a3:
		"Les fichiers chiffrés ne s’ouvrent pas ici. Déverrouillez-le dans votre lecteur PDF, enregistrez une copie non protégée et choisissez cette copie.",
	tool_compare_two_pdfs_faq_q4: "Quelle différence avec une comparaison de texte brut ?",
	tool_compare_two_pdfs_faq_a4:
		"Ici, vous déposez directement les PDF, vous voyez les aperçus et le nombre de pages. L’outil de comparaison de texte sert au texte collé ou aux fichiers .txt, sans lecture de PDF.",
	tool_compare_two_pdfs_faq_q5: "La mise en page, les images ou les signatures sont-elles comparées ?",
	tool_compare_two_pdfs_faq_a5:
		"Non. Seul le texte sélectionnable est comparé. Un logo déplacé ou une autre police avec les mêmes mots paraîtront identiques.",
	tool_compare_two_pdfs_faq_q6: "Que contient le fichier téléchargé ?",
	tool_compare_two_pdfs_faq_a6:
		"Un fichier HTML avec le même surlignage vert et rouge qu’à l’écran, pratique à envoyer par e-mail ou à archiver. Ce n’est pas un PDF annoté.",
	tool_compare_two_pdfs_faq_q7: "Quand faut-il ignorer la casse ou les espaces ?",
	tool_compare_two_pdfs_faq_a7:
		"Quand l’un des exports n’a modifié que les majuscules ou les retours à la ligne. Activez ces options si la formulation est la même mais que le texte extrait diffère.",
	tool_compare_two_pdfs_article: "Comparez le texte sélectionnable de deux PDF et téléchargez en HTML les différences mot à mot.",
	tool_compare_two_pdfs_references: "PDF.js pour l’extraction du texte ; jsdiff pour le surlignage mot à mot.",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — moteur PDF de Mozilla",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — bibliothèque de comparaison de texte",
};

export default fr;
