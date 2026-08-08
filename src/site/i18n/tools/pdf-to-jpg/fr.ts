/**
 * i18n tool shard (pdf-to-jpg / fr). Réécriture indépendante pour la recherche francophone.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'Rend chaque page PDF en JPEG dans le navigateur avec le moteur de rendu. Plusieurs pages se téléchargent en ZIP via la bibliothèque ZIP—le fichier reste sur l’appareil.',
  tool_pdf_to_jpg_choose_file: 'Choisir un PDF',
  tool_pdf_to_jpg_clear: 'Effacer',
  tool_pdf_to_jpg_convert: 'Convertir',
  tool_pdf_to_jpg_desc: 'Transformez les pages PDF en JPG sur l’appareil—ZIP si plusieurs pages ; sans envoi au serveur.',
  tool_pdf_to_jpg_description:
    'Convertissez les pages PDF en images JPG dans le navigateur—les fichiers restent sur l’appareil et ne sont pas envoyés au serveur. Étapes : choisissez un PDF, cliquez Convertir puis Télécharger. Exemple : un échantillon de deux pages produit page-1.jpg et page-2.jpg dans un ZIP. Un PDF d’une page télécharge un JPG direct. Fichiers protégés ou endommagés : erreur explicite.',
  tool_pdf_to_jpg_download: 'Télécharger',
  tool_pdf_to_jpg_drop_hint: 'Ou déposez un PDF ici. Le traitement reste dans cet onglet.',
  tool_pdf_to_jpg_empty: 'Choisissez d’abord un PDF.',
  tool_pdf_to_jpg_err_convert: 'Échec de la conversion. Vérifiez le fichier et réessayez.',
  tool_pdf_to_jpg_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le avant de convertir.',
  tool_pdf_to_jpg_err_fflate: 'Échec du chargement de la bibliothèque ZIP. Vérifiez le réseau.',
  tool_pdf_to_jpg_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_pdf_to_jpg_err_pdfjs: 'Échec du chargement du moteur PDF. Vérifiez le réseau.',
  tool_pdf_to_jpg_example:
    'L’échantillon crée un PDF de deux pages, convertit chaque page et active Télécharger avec un ZIP contenant page-1.jpg et page-2.jpg.',
  tool_pdf_to_jpg_example_title: 'Exemple',
  tool_pdf_to_jpg_faq_a1:
    'Non. le moteur de rendu et la bibliothèque ZIP s’exécutent dans votre onglet (scripts éventuellement depuis un CDN). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_pdf_to_jpg_faq_a2:
    'Plus d’une page → ZIP pdf-pages.zip avec page-1.jpg, page-2.jpg, etc. Une seule page → un JPG direct.',
  tool_pdf_to_jpg_faq_a3:
    'Images vers PDF assemble des photos en un PDF multipage. Cet outil exporte chaque page PDF en image JPG séparée.',
  tool_pdf_to_jpg_faq_a4:
    'Les pages sont rendues à l’échelle 2× pour un texte plus net. Les gros PDF peuvent prendre plus de temps.',
  tool_pdf_to_jpg_faq_a5:
    'Cette page ne produit que du JPG. Utilisez le convertisseur de format d’image pour PNG ou WebP depuis une image existante.',
  tool_pdf_to_jpg_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_pdf_to_jpg_faq_q2: 'ZIP ou un seul JPG ?',
  tool_pdf_to_jpg_faq_q3: 'Différence avec Images vers PDF ?',
  tool_pdf_to_jpg_faq_q4: 'Pourquoi le JPG est net ou flou ?',
  tool_pdf_to_jpg_faq_q5: 'Obtenir du PNG ?',
  tool_pdf_to_jpg_how_body:
    'Choisissez un PDF, cliquez Convertir puis Télécharger. Chaque page devient JPG ; plusieurs pages en ZIP. Tout reste local après chargement des bibliothèques.',
  tool_pdf_to_jpg_how_title: 'Fonctionnement',
  tool_pdf_to_jpg_pages_label: 'Pages',
  tool_pdf_to_jpg_rules_body: 'Échelle de rendu, sortie JPG, ZIP vs fichier unique, confidentialité et échecs.',
  tool_pdf_to_jpg_rules_item_1:
    'Chaque page exportée en JPEG échelle 2× qualité 0.92—adapté aux diapos et scans.',
  tool_pdf_to_jpg_rules_item_2: 'Noms : page-N.jpg pour la page N. Plusieurs pages → pdf-pages.zip.',
  tool_pdf_to_jpg_rules_item_3: 'Sortie : 1 page → JPG ; 2+ → ZIP via la bibliothèque ZIP.',
  tool_pdf_to_jpg_rules_item_4:
    'Confidentialité et limites : octets dans l’onglet ; PDF chiffré/corrompu échoue clairement ; >25 Mo peut ralentir.',
  tool_pdf_to_jpg_rules_title: 'Règles attendues',
  tool_pdf_to_jpg_sample: 'Charger l’exemple',
  tool_pdf_to_jpg_stats_tpl: '{n} page(s) · {bytes}',
  tool_pdf_to_jpg_status_converting: 'Conversion des pages en JPG…',
  tool_pdf_to_jpg_status_done: 'Terminé — cliquez Télécharger pour enregistrer.',
  tool_pdf_to_jpg_title: 'PDF en JPG — convertissez les pages en images',
  tool_pdf_to_jpg_usecase_1: 'Bureau : exportez une diapo ou page signée pour le chat.',
  tool_pdf_to_jpg_usecase_2: 'Marketing : extrayez des vignettes JPG d’un catalogue PDF.',
  tool_pdf_to_jpg_usecase_3: 'Étudiants : enregistrez des pages PDF comme images de notes.',
  tool_pdf_to_jpg_usecases_title: 'Cas d’usage',
  tool_pdf_to_jpg_warn_large: 'Fichier > ~25 Mo — conversion lente ou échec possible selon le navigateur.',
  tool_pdf_to_jpg_warn_pdflib: 'Échec du chargement de la bibliothèque PDF. Vérifiez le réseau.',
};
export default fr;
