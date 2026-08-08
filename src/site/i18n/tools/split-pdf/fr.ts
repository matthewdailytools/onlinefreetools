/**
 * i18n tool shard（split-pdf / fr）. Réécriture autonome.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_split_pdf_article:
    'Découpez un PDF en fichiers séparés par page ou plages avec pdf-lib côté client. Plusieurs sorties se téléchargent en ZIP via fflate — sans envoi au serveur; vos fichiers restent sur l’appareil.',
  tool_split_pdf_choose_file: 'Choisir un PDF',
  tool_split_pdf_clear: 'Effacer',
  tool_split_pdf_desc: 'Extrayez des pages d’un PDF sur votre appareil — chaque page ou plages ; ZIP si besoin; sans envoi au serveur.',
  tool_split_pdf_description:
    'Découpez un PDF dans le navigateur et téléchargez des pages ou plages séparées — sans envoi au serveur. Étapes : choisissez un PDF, sélectionnez chaque page ou saisissez des plages comme 1-3,5, découpez, puis téléchargez. Exemple : un échantillon de trois pages devient un ZIP avec page-1.pdf à page-3.pdf. Une seule sortie se télécharge en PDF. Les fichiers chiffrés échouent avec un message clair.',
  tool_split_pdf_download: 'Télécharger',
  tool_split_pdf_drop_hint: 'Ou déposez un PDF ici. Le traitement reste dans cet onglet.',
  tool_split_pdf_empty: 'Choisissez d’abord un fichier PDF.',
  tool_split_pdf_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le puis réessayez.',
  tool_split_pdf_err_fflate: 'Échec de chargement de la bibliothèque ZIP. Vérifiez le réseau et réessayez.',
  tool_split_pdf_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_split_pdf_err_range: 'Pages invalides ou hors plage. Utilisez des plages à partir de 1, ex. 1-3,5.',
  tool_split_pdf_err_split: 'Échec du découpage. Vérifiez le fichier et les plages, puis réessayez.',
  tool_split_pdf_example:
    'L’exemple crée un PDF de trois pages, le découpe page par page et active Télécharger pour un ZIP avec page-1.pdf, page-2.pdf et page-3.pdf.',
  tool_split_pdf_example_title: 'Exemple',
  tool_split_pdf_faq_a1:
    'Non. pdf-lib et fflate s’exécutent dans votre onglet (les scripts peuvent venir d’un CDN). Votre PDF n’est pas envoyé sur nos serveurs.',
  tool_split_pdf_faq_a2:
    'Pages à partir de 1 : 1-3,5 signifie les pages 1–3 et la 5. Les espaces sont optionnels. Valeurs vides ou hors plage échouent.',
  tool_split_pdf_faq_a3:
    'Plus d’un fichier → ZIP. Une seule sortie → téléchargement PDF.',
  tool_split_pdf_faq_a4:
    'Les PDF protégés échouent souvent ici. Retirez le mot de passe avec un outil de confiance, puis découpez.',
  tool_split_pdf_faq_a5:
    'Fusionner des PDF assemble plusieurs PDF. Cet outil extrait les pages d’un seul PDF vers des fichiers séparés.',
  tool_split_pdf_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_split_pdf_faq_q2: 'Comment écrire les plages ?',
  tool_split_pdf_faq_q3: 'Quand ZIP et quand PDF ?',
  tool_split_pdf_faq_q4: 'Et les PDF chiffrés ?',
  tool_split_pdf_faq_q5: 'Différence avec Fusionner des PDF ?',
  tool_split_pdf_how_body:
    'Choisissez un PDF, sélectionnez chaque page ou des plages, cliquez Découper puis Télécharger. Plusieurs sorties → ZIP ; une seule → PDF. Tout reste local après chargement des bibliothèques.',
  tool_split_pdf_how_title: 'Fonctionnement',
  tool_split_pdf_mode_every: 'Chaque page (un fichier par page)',
  tool_split_pdf_mode_label: 'Mode de découpe',
  tool_split_pdf_mode_ranges: 'Plages de pages personnalisées',
  tool_split_pdf_pages_label: 'Pages du fichier',
  tool_split_pdf_ranges_hint: 'Exemple : 1-3,5 (à partir de 1)',
  tool_split_pdf_ranges_label: 'Plages de pages',
  tool_split_pdf_rules_body:
    'Plages à partir de 1, noms, ZIP vs PDF, confidentialité et échecs en local.',
  tool_split_pdf_rules_item_1:
    'Modes : chaque page → un PDF par page ; plages → un PDF par segment séparé par des virgules (ex. 1-3 et 5).',
  tool_split_pdf_rules_item_2:
    'Noms : page-N.pdf pour une page ; pages-A-B.pdf pour un segment contigu.',
  tool_split_pdf_rules_item_3:
    'Sortie : plus d’un fichier → ZIP via fflate ; exactement un → télécharger ce PDF.',
  tool_split_pdf_rules_item_4:
    'Confidentialité et limites : octets dans l’onglet ; PDF chiffrés/corrompus échouent clairement ; très gros fichiers peuvent ralentir.',
  tool_split_pdf_rules_title: 'Règles à connaître',
  tool_split_pdf_sample: 'Charger l’exemple',
  tool_split_pdf_split: 'Découper',
  tool_split_pdf_stats_tpl: '{n} fichier(s) · {bytes}',
  tool_split_pdf_status_done: 'Terminé — cliquez Télécharger pour enregistrer.',
  tool_split_pdf_status_splitting: 'Découpage du PDF…',
  tool_split_pdf_title: 'Découper un PDF — extrayez les pages en local',
  tool_split_pdf_usecase_1: 'Bureau : extraire une page signée d’un long contrat.',
  tool_split_pdf_usecase_2: 'Enseignement : découper un PDF de diapositives en fiches par page.',
  tool_split_pdf_usecase_3: 'Ops : archiver chaque page scannée comme fichier distinct.',
  tool_split_pdf_usecases_title: 'Bons cas d’usage',
  tool_split_pdf_warn_large: 'Fichier de plus de ~25 Mo — le découpage peut être lent ou échouer sur certains navigateurs.',
  tool_split_pdf_warn_pdflib: 'Échec de chargement de la bibliothèque PDF. Vérifiez le réseau et réessayez.',
};
export default fr;
