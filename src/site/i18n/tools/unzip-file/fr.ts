import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
  tool_unzip_file_article:
    "Ouvrez un ZIP dans le navigateur, consultez l'arborescence, prévisualisez texte ou images et téléchargez les fichiers utiles. L'archive reste sur l'appareil et n'est pas envoyée au serveur.",
  tool_unzip_file_choose_file: 'Choisir un ZIP',
  tool_unzip_file_clear: 'Effacer',
  tool_unzip_file_desc:
    'Décompressez un ZIP en ligne, prévisualisez son contenu et téléchargez les fichiers dans le navigateur, sans envoi au serveur.',
  tool_unzip_file_description:
    "Décompressez un ZIP en ligne dans le navigateur : choisissez ou déposez l'archive, consultez l'arborescence, prévisualisez texte ou images, puis téléchargez un fichier ou exportez tout. Les fichiers restent sur votre appareil et ne sont pas envoyés au serveur. L'exemple project-files.zip montre readme.txt, assets/logo.png et docs/notes.md avec des chemins sûrs.",
  tool_unzip_file_download_all: 'Exporter tout',
  tool_unzip_file_download_file: 'Télécharger le fichier',
  tool_unzip_file_drop_hint: 'Déposez un fichier .zip ici. Le traitement reste dans cet onglet.',
  tool_unzip_file_empty: "Choisissez d'abord un fichier ZIP.",
  tool_unzip_file_err_archive: "Impossible de lire le ZIP. Il peut être endommagé, chiffré ou ne pas être une archive ZIP.",
  tool_unzip_file_err_fflate: 'Le moteur ZIP n’a pas pu se charger. Vérifiez le réseau et réessayez.',
  tool_unzip_file_err_no_file: 'Aucun fichier extrait n’est sélectionné.',
  tool_unzip_file_example:
    "L'exemple project-files.zip extrait trois entrées sûres : readme.txt, assets/logo.png et docs/notes.md. La page affiche l'arborescence, prévisualise readme.txt et active Télécharger le fichier et Exporter tout.",
  tool_unzip_file_example_title: 'Exemple',
  tool_unzip_file_exported_all: 'Les fichiers ont été regroupés dans un nouveau ZIP avec des chemins sûrs.',
  tool_unzip_file_faq_a1:
    "Non. Le ZIP est lu dans l'onglet du navigateur et les données extraites restent sur votre appareil. Le moteur ZIP peut se charger depuis un CDN, mais votre archive n'est pas envoyée à nos serveurs.",
  tool_unzip_file_faq_a2:
    'Cette page vise d’abord ZIP. RAR, 7Z, ISO et TAR.GZ demandent un moteur multi-format plus lourd et devraient être traités par un extracteur d’archives séparé lorsque ce support existe.',
  tool_unzip_file_faq_a3:
    'Les ZIP protégés par mot de passe peuvent échouer sans support compatible. Cet outil ne casse pas et ne récupère pas les mots de passe.',
  tool_unzip_file_faq_a4:
    'Les chemins absolus, segments ../, noms vides ou doublons sont renommés ou bloqués avant export. La liste indique quand un chemin a été modifié.',
  tool_unzip_file_faq_a5:
    'Les gros ZIP peuvent être lents ou manquer de mémoire dans le navigateur, surtout sur mobile. La page prévient si le nombre de fichiers, la taille extraite ou le ratio d’expansion semble risqué.',
  tool_unzip_file_faq_q1: 'Mon fichier ZIP est-il envoyé ?',
  tool_unzip_file_faq_q2: 'Peut-il extraire RAR, 7Z ou TAR.GZ ?',
  tool_unzip_file_faq_q3: 'Ouvre-t-il les ZIP avec mot de passe ?',
  tool_unzip_file_faq_q4: 'Que deviennent les chemins dangereux ?',
  tool_unzip_file_faq_q5: 'Comment gère-t-il les très gros ZIP ?',
  tool_unzip_file_file_count_label: 'Fichiers',
  tool_unzip_file_how_body:
    "Choisissez ou déposez un ZIP. La page lit l'archive, normalise les chemins, construit la liste et affiche des prévisualisations sûres pour texte et images. Sélectionnez une ligne pour prévisualiser et télécharger, ou exportez tout en ZIP neuf avec chemins nettoyés.",
  tool_unzip_file_how_title: 'Fonctionnement',
  tool_unzip_file_load_sample: 'Charger l’exemple',
  tool_unzip_file_no_preview:
    'La prévisualisation n’est pas disponible pour ce type de fichier. Vous pouvez quand même le télécharger.',
  tool_unzip_file_preview_title: 'Aperçu',
  tool_unzip_file_rules_body:
    'Décompresser un ZIP dans le navigateur demande des règles claires pour les chemins, aperçus, téléchargements et échecs.',
  tool_unzip_file_rules_item_1:
    'Sécurité des chemins : barres initiales, lettres de disque, segments ../ et noms en double sont nettoyés avant export.',
  tool_unzip_file_rules_item_2:
    'Aperçu : petits textes, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP et SVG peuvent être prévisualisés ; les autres fichiers affichent seulement leurs métadonnées.',
  tool_unzip_file_rules_item_3:
    'Téléchargement : le fichier sélectionné se télécharge directement ; Exporter tout crée un nouveau ZIP à partir des fichiers nettoyés.',
  tool_unzip_file_rules_item_4:
    'Limites : archives chiffrées, divisées, endommagées ou à expansion inhabituelle peuvent échouer ou demander confirmation dans de futures versions.',
  tool_unzip_file_rules_title: 'Règles à connaître',
  tool_unzip_file_selected_label: 'Sélection',
  tool_unzip_file_size_label: 'Taille extraite',
  tool_unzip_file_status_done: 'ZIP extrait — sélectionnez un fichier ou exportez tout.',
  tool_unzip_file_status_reading: 'Lecture du ZIP...',
  tool_unzip_file_title: 'Décompresser un ZIP en ligne — voir et extraire les fichiers dans le navigateur',
  tool_unzip_file_total_size_label: 'Taille extraite',
  tool_unzip_file_usecase_1:
    'Bureau : ouvrez un ZIP fournisseur et téléchargez seulement la facture ou l’image utile.',
  tool_unzip_file_usecase_2:
    'Études : consultez un dossier de cours sur ordinateur administré ou tablette sans installer de logiciel.',
  tool_unzip_file_usecase_3:
    'Développement : vérifiez l’arborescence d’une release source, puis gardez le checksum du ZIP original.',
  tool_unzip_file_usecases_title: 'Cas utiles',
  tool_unzip_file_warn_dangerous:
    'Certains chemins ont été renommés pour la sécurité avant export.',
  tool_unzip_file_warn_large:
    'Avertissement gros fichier : ce ZIP peut être lent ou gourmand en mémoire dans le navigateur.',
};

export default fr;
