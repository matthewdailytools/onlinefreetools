/**
 * i18n tool shard (pdf-page-numbers / fr). Réécrit pour les recherches locales.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_pdf_page_numbers_add: 'Numéroter',
  tool_pdf_page_numbers_article:
    'Ajoutez des numéros de page à chaque feuille PDF dans le navigateur avec la bibliothèque PDF. Choisissez coin ou centre, numéro de départ et marge—le fichier reste sur l’appareil, sans envoi au serveur.',
  tool_pdf_page_numbers_choose_file: 'Choisir un PDF',
  tool_pdf_page_numbers_clear: 'Effacer',
  tool_pdf_page_numbers_desc:
    'Numéroter un PDF dans le navigateur—position et numéro de départ au choix ; sans envoi au serveur, reste sur l’appareil.',
  tool_pdf_page_numbers_description:
    'Ajoutez des numéros de page à un PDF dans le navigateur—sans envoi au serveur. Étapes : ouvrez un PDF, choisissez bas-centre ou un coin, définissez le premier numéro (1 par défaut), marge et taille, option « Page N », numérotez puis téléchargez. Exemple : échantillon trois pages, numéros bas-centre à partir de 1, téléchargement numbered.pdf. PDF chiffrés : erreur claire.',
  tool_pdf_page_numbers_download: 'Télécharger',
  tool_pdf_page_numbers_drop_hint: 'Ou déposez un PDF ici. Traitement dans cet onglet.',
  tool_pdf_page_numbers_empty: 'Choisissez d’abord un PDF.',
  tool_pdf_page_numbers_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le puis réessayez.',
  tool_pdf_page_numbers_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_pdf_page_numbers_err_number: 'Échec de la numérotation. Vérifiez fichier et réglages puis réessayez.',
  tool_pdf_page_numbers_example:
    'L’échantillon crée un PDF de trois pages, numérote bas-centre à partir de 1 et active Télécharger numbered.pdf.',
  tool_pdf_page_numbers_example_title: 'Exemple',
  tool_pdf_page_numbers_faq_a1:
    'Non. la bibliothèque PDF s’exécute dans votre onglet (scripts éventuellement depuis ce site). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_pdf_page_numbers_faq_a2:
    'Oui—« Commencer à » est le numéro sur la page 1 (ex. 0 pour couverture, ou 5 après suppression de pages). Chaque page suivante +1.',
  tool_pdf_page_numbers_faq_a3:
    'Chiffres simples (1, 2, 3…) ou libellés « Page N ». Position, marge (pt) et taille identiques sur toutes les pages.',
  tool_pdf_page_numbers_faq_a4:
    'Les PDF protégés par mot de passe ne s’ouvrent généralement pas ici. Retirez le mot de passe avec un outil de confiance.',
  tool_pdf_page_numbers_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_pdf_page_numbers_faq_q2: 'Puis-je commencer après une couverture ?',
  tool_pdf_page_numbers_faq_q3: 'Quels formats et positions ?',
  tool_pdf_page_numbers_faq_q4: 'Et les PDF chiffrés ?',
  tool_pdf_page_numbers_font_size_label: 'Taille (pt)',
  tool_pdf_page_numbers_format_label: 'Format',
  tool_pdf_page_numbers_format_number: 'Chiffre seul',
  tool_pdf_page_numbers_format_page_n: 'Page N',
  tool_pdf_page_numbers_format_page_n_tpl: 'Page {n}',
  tool_pdf_page_numbers_how_body:
    'Choisissez un PDF, position (bas-centre par défaut), premier numéro, marge et taille, cliquez Numéroter puis Télécharger. Numéros dessinés sur chaque page. Bibliothèque chargée au premier usage.',
  tool_pdf_page_numbers_how_item_1: "Sélectionnez l’entrée avec « Choisir un PDF »",
  tool_pdf_page_numbers_how_item_2: "Réglez les options puis cliquez sur « Numéroter »",
  tool_pdf_page_numbers_how_item_3: "Vérifiez l’aperçu, le nombre de pages ou le statut",
  tool_pdf_page_numbers_how_item_4: "Cliquez sur « Télécharger » pour enregistrer le résultat",
  tool_pdf_page_numbers_how_title: 'Fonctionnement',
  tool_pdf_page_numbers_margin_label: 'Marge (pt)',
  tool_pdf_page_numbers_pages_label: 'Pages',
  tool_pdf_page_numbers_position_bc: 'Bas centre',
  tool_pdf_page_numbers_position_bl: 'Bas gauche',
  tool_pdf_page_numbers_position_br: 'Bas droite',
  tool_pdf_page_numbers_position_label: 'Position',
  tool_pdf_page_numbers_position_tc: 'Haut centre',
  tool_pdf_page_numbers_position_tl: 'Haut gauche',
  tool_pdf_page_numbers_position_tr: 'Haut droite',
  tool_pdf_page_numbers_rules_body:
    'Positions, valeur de départ, format, confidentialité et limites de la numérotation locale.',
  tool_pdf_page_numbers_rules_item_1:
    'Position : bas-centre (défaut), centre haut/bas ou coins. Marge en points PDF (24 pt par défaut).',
  tool_pdf_page_numbers_rules_item_2:
    'Commencer à : numéro sur la page 1 (1 par défaut). Chaque page +1—utile après suppression dans Organize PDF.',
  tool_pdf_page_numbers_rules_item_3:
    'Format : chiffre ou « Page N ». Taille 12 pt par défaut. Nouveau PDF ; l’original n’est pas envoyé au serveur.',
  tool_pdf_page_numbers_rules_item_4:
    'Limites : PDF chiffré/corrompu échoue clairement ; >~25 MB peut être lent ; numéros gravés—original requis pour les retirer.',
  tool_pdf_page_numbers_rules_title: 'Règles attendues',
  tool_pdf_page_numbers_sample: 'Charger un exemple',
  tool_pdf_page_numbers_start_at_label: 'Commencer à',
  tool_pdf_page_numbers_stats_tpl: '{n} page(s) numérotée(s) · {bytes}',
  tool_pdf_page_numbers_status_done: 'Terminé — cliquez Télécharger pour enregistrer numbered.pdf.',
  tool_pdf_page_numbers_status_working: 'Ajout des numéros de page…',
  tool_pdf_page_numbers_title: 'Numéroter un PDF — ajoutez les numéros dans le navigateur',
  tool_pdf_page_numbers_usecase_1: 'Bureau : numéroter un rapport avant impression pour citer « page 12 ».',
  tool_pdf_page_numbers_usecase_2: 'Étudiants : pied de page 1–N sur mémoire après fusion des chapitres.',
  tool_pdf_page_numbers_usecase_3: 'Webmasters : numéroter supports déjà réorganisés ou filigranés.',
  tool_pdf_page_numbers_usecases_title: 'Bonnes situations',
  tool_pdf_page_numbers_warn_large: 'Fichier > ~25 MB — numérotation peut être lente ou échouer.',
  tool_pdf_page_numbers_warn_pdflib: 'Échec du chargement de la bibliothèque PDF. Vérifiez le réseau.',
};
export default fr;
