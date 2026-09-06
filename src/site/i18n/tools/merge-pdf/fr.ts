/**
 * i18n tool shard（merge-pdf / fr）. Réécriture autonome orientée recherche.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_merge_pdf_article:
    'Fusionnez plusieurs PDF dans l’ordre de la liste avec pdf-lib côté client, sans envoi au serveur. Réordonnez, gérez les échecs de chiffrement, téléchargez un seul document.',
  tool_merge_pdf_choose_files: 'Choisir des PDF',
  tool_merge_pdf_clear: 'Effacer',
  tool_merge_pdf_desc: 'Combinez plusieurs PDF en un seul fichier dans le navigateur — sans envoi au serveur; vos fichiers restent sur l’appareil.',
  tool_merge_pdf_description:
    'Fusionnez des PDF dans le navigateur et téléchargez un seul document — sans envoi au serveur. Étapes : ajoutez au moins deux PDF, réordonnez la liste, fusionnez, puis téléchargez. Exemple : deux échantillons d’une page deviennent un PDF de deux pages. Les PDF chiffrés ou endommagés échouent avec un message clair. Différent d’Images vers PDF, qui part de photos.',
  tool_merge_pdf_download: 'Télécharger',
  tool_merge_pdf_drop_hint: 'Ou déposez des PDF ici. Le traitement reste dans cet onglet.',
  tool_merge_pdf_empty: 'Ajoutez au moins deux PDF pour les fusionner.',
  tool_merge_pdf_err_encrypted: 'Un fichier semble protégé par mot de passe. Déverrouillez-le puis réessayez.',
  tool_merge_pdf_err_load: 'Impossible de lire un PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_merge_pdf_err_merge: 'Échec de la fusion. Vérifiez les fichiers et réessayez.',
  tool_merge_pdf_example:
    'L’exemple charge deux PDF d’une page (A et B), les fusionne dans l’ordre de la liste et active Télécharger pour un merged.pdf de deux pages.',
  tool_merge_pdf_example_title: 'Combiner des fichiers PDF en un seul',
  tool_merge_pdf_faq_a1:
    'Non. pdf-lib s’exécute dans votre onglet (la bibliothèque peut se charger depuis ce site). Vos PDF ne sont pas envoyés sur nos serveurs.',
  tool_merge_pdf_faq_a2:
    'Images vers PDF crée un PDF à partir de photos. Cet outil assemble des fichiers PDF existants en un seul document.',
  tool_merge_pdf_faq_a3:
    'Oui — utilisez Haut/Bas sur chaque ligne. L’ordre de la liste (du haut vers le bas) devient l’ordre des pages.',
  tool_merge_pdf_faq_a4:
    'Les PDF protégés échouent souvent ici. Retirez le mot de passe avec un outil de confiance, puis fusionnez.',
  tool_merge_pdf_faq_a5: 'La plupart des lecteurs PDF bureau et mobile ouvrent le résultat.',
  tool_merge_pdf_faq_q1: 'Mes PDF sont-ils envoyés ?',
  tool_merge_pdf_faq_q2: 'Différence avec Images vers PDF ?',
  tool_merge_pdf_faq_q3: 'Puis-je changer l’ordre ?',
  tool_merge_pdf_faq_q4: 'Et les PDF chiffrés ?',
  tool_merge_pdf_faq_q5: 'Le résultat s’ouvre-t-il dans Acrobat ou Aperçu ?',
  tool_merge_pdf_how_body:
    'Ajoutez au moins deux PDF, réordonnez si besoin, cliquez Fusionner puis Télécharger. L’ordre des pages suit la liste. Tout reste local après chargement de la bibliothèque.',
  tool_merge_pdf_how_item_1: "Sélectionnez l’entrée avec « Choisir des PDF »",
  tool_merge_pdf_how_item_2: "Réglez les options puis cliquez sur « Fusionner »",
  tool_merge_pdf_how_item_3: "Vérifiez l’aperçu, le nombre de pages ou le statut",
  tool_merge_pdf_how_item_4: "Cliquez sur « Télécharger » pour enregistrer le résultat",
  tool_merge_pdf_how_title: 'Fonctionnement',
  tool_merge_pdf_merge: 'Fusionner',
  tool_merge_pdf_move_down: 'Bas',
  tool_merge_pdf_move_up: 'Haut',
  tool_merge_pdf_remove: 'Retirer',
  tool_merge_pdf_rules_body:
    'Ordre de liste, copyPages, confidentialité et cas d’échec lors d’une fusion locale.',
  tool_merge_pdf_rules_item_1:
    'Ordre : les pages sont copiées selon la liste (fichier du haut d’abord). Réordonnez avant Fusionner.',
  tool_merge_pdf_rules_item_2:
    'Moteur : pdf-lib charge chaque PDF et utilise copyPages vers un nouveau document — sans envoi de vos fichiers.',
  tool_merge_pdf_rules_item_3:
    'Confidentialité : les octets restent dans l’onglet. Le script de la bibliothèque peut venir de ce site.',
  tool_merge_pdf_rules_item_4:
    'Limites : ≥2 fichiers ; PDF chiffrés ou corrompus échouent avec une erreur lisible ; très gros lots peuvent ralentir la mémoire.',
  tool_merge_pdf_rules_title: 'Règles à connaître',
  tool_merge_pdf_sample: 'Charger l’exemple',
  tool_merge_pdf_stats_tpl: '{n} fichiers → {pages} pages · {bytes}',
  tool_merge_pdf_status_done: 'Terminé — cliquez Télécharger pour enregistrer merged.pdf.',
  tool_merge_pdf_status_merging: 'Fusion des PDF…',
  tool_merge_pdf_title: 'Combiner des fichiers PDF en un',
  tool_merge_pdf_usecase_1: 'Bureau : regrouper signatures et pièces jointes en un seul dossier.',
  tool_merge_pdf_usecase_2: 'Études : assembler les chapitres d’un devoir avant rendu.',
  tool_merge_pdf_usecase_3: 'Ops : livrer briefs et specs dans un seul PDF.',
  tool_merge_pdf_usecases_title: 'Bons cas d’usage',
  tool_merge_pdf_warn_large: 'Un fichier dépasse ~25 Mo — la fusion peut être lente ou échouer sur certains navigateurs.',
  tool_merge_pdf_warn_pdflib: 'Échec de chargement de la bibliothèque PDF. Vérifiez le réseau et réessayez.',
};
export default fr;
