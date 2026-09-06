/**
 * i18n tool shard (rotate-pdf / fr). Réécrit pour les recherches locales.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '90° sens antihoraire',
  tool_rotate_pdf_angle_90cw: '90° sens horaire',
  tool_rotate_pdf_angle_label: 'Rotation',
  tool_rotate_pdf_article:
    'Redressez des pages PDF de travers ou à l’envers dans le navigateur avec la bibliothèque PDF. Tournez tout ou une plage—sans envoi au serveur.',
  tool_rotate_pdf_choose_file: 'Choisir un PDF',
  tool_rotate_pdf_clear: 'Effacer',
  tool_rotate_pdf_desc:
    'Corrigez l’orientation PDF sur l’appareil—toutes les pages ou une plage ; rien n’est envoyé au serveur.',
  tool_rotate_pdf_description:
    'Faites pivoter des pages PDF dans le navigateur pour corriger un mélange paysage/portrait—aucun envoi au serveur. Étapes : choisissez un PDF, toutes les pages ou des plages comme 1-3,5, choisissez 90° horaire, 180° ou 90° antihoraire, pivotez puis téléchargez. Exemple : un échantillon de deux pages tourne tout à 90° horaire et active Télécharger rotated.pdf. Les fichiers chiffrés échouent avec un message clair.',
  tool_rotate_pdf_download: 'Télécharger',
  tool_rotate_pdf_drop_hint: 'Ou déposez un PDF ici. Le traitement reste dans cet onglet.',
  tool_rotate_pdf_empty: 'Choisissez d’abord un PDF.',
  tool_rotate_pdf_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le puis réessayez.',
  tool_rotate_pdf_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_rotate_pdf_err_range: 'Pages invalides ou hors plage. Utilisez des plages à partir de 1, ex. 1-3,5.',
  tool_rotate_pdf_err_rotate: 'Échec de la rotation. Vérifiez le fichier et les plages, puis réessayez.',
  tool_rotate_pdf_example:
    'L’échantillon crée un PDF de deux pages, tourne tout à 90° horaire et active Télécharger rotated.pdf.',
  tool_rotate_pdf_example_title: 'Exemple',
  tool_rotate_pdf_faq_a1:
    'Non. la bibliothèque PDF s’exécute dans votre onglet (scripts éventuellement depuis ce site). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_rotate_pdf_faq_a2: 'Oui—le fichier téléchargé conserve la nouvelle orientation. Ouvrez-le dans un lecteur avant de partager.',
  tool_rotate_pdf_faq_a3: 'Pages à partir de 1 : 1-3,5 signifie les pages 1–3 et 5. Espaces optionnels. Vide ou hors plage = échec.',
  tool_rotate_pdf_faq_a4: 'Les PDF protégés par mot de passe ne s’ouvrent généralement pas ici. Retirez le mot de passe puis pivotez.',
  tool_rotate_pdf_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_rotate_pdf_faq_q2: 'La rotation change-t-elle le fichier définitivement ?',
  tool_rotate_pdf_faq_q3: 'Comment fonctionnent les plages ?',
  tool_rotate_pdf_faq_q4: 'Et les PDF chiffrés ?',
  tool_rotate_pdf_how_body:
    'Choisissez un PDF, toutes les pages ou des plages, choisissez l’angle, cliquez Pivoter puis Télécharger. La rotation s’ajoute à l’angle actuel. Tout est local après chargement de la bibliothèque.',
  tool_rotate_pdf_how_item_1: "Sélectionnez l’entrée avec « Choisir un PDF »",
  tool_rotate_pdf_how_item_2: "Réglez les options puis cliquez sur « Pivoter »",
  tool_rotate_pdf_how_item_3: "Vérifiez l’aperçu, le nombre de pages ou le statut",
  tool_rotate_pdf_how_item_4: "Cliquez sur « Télécharger » pour enregistrer le résultat",
  tool_rotate_pdf_how_title: 'Fonctionnement',
  tool_rotate_pdf_mode_all: 'Toutes les pages',
  tool_rotate_pdf_mode_label: 'Pages à pivoter',
  tool_rotate_pdf_mode_ranges: 'Plages personnalisées',
  tool_rotate_pdf_pages_label: 'Pages dans le fichier',
  tool_rotate_pdf_ranges_hint: 'Exemple : 1-3,5 (à partir de 1)',
  tool_rotate_pdf_ranges_label: 'Plages de pages',
  tool_rotate_pdf_rotate: 'Pivoter',
  tool_rotate_pdf_rules_body: 'Angles, rotation cumulative, plages, confidentialité et échecs.',
  tool_rotate_pdf_rules_item_1: 'Angles : 90° horaire, 180° ou 90° antihoraire (270°). S’ajoutent à la rotation actuelle.',
  tool_rotate_pdf_rules_item_2: 'Pages : toutes ou plages à partir de 1 comme 1-3,5 (même syntaxe que Diviser PDF).',
  tool_rotate_pdf_rules_item_3: 'Sortie : un PDF avec les pages choisies réorientées ; les autres inchangées.',
  tool_rotate_pdf_rules_item_4: 'Confidentialité et limites : octets dans l’onglet ; chiffré/corrompu échoue clairement ; gros fichiers peuvent ralentir.',
  tool_rotate_pdf_rules_title: 'Règles attendues',
  tool_rotate_pdf_sample: 'Charger un exemple',
  tool_rotate_pdf_stats_tpl: '{n} page(s) pivotée(s) · {bytes}',
  tool_rotate_pdf_status_done: 'Terminé — cliquez Télécharger pour enregistrer rotated.pdf.',
  tool_rotate_pdf_status_rotating: 'Rotation du PDF…',
  tool_rotate_pdf_title: 'Pivoter un PDF — corrigez l’orientation dans le navigateur',
  tool_rotate_pdf_usecase_1: 'Bureau : redresser une numérisation de côté avant impression ou envoi.',
  tool_rotate_pdf_usecase_2: 'Étudiants : corriger des photos de slides au téléphone en orientations mixtes.',
  tool_rotate_pdf_usecase_3: 'Webmasters : corriger une seule page fausse sans tout rescanner.',
  tool_rotate_pdf_usecases_title: 'Bonnes situations',
  tool_rotate_pdf_warn_large: 'Fichier > ~25 Mo — rotation lente ou échec possible selon le navigateur.',
  tool_rotate_pdf_warn_pdflib: 'Échec du chargement de la bibliothèque PDF. Vérifiez le réseau et réessayez.',
};
export default fr;
