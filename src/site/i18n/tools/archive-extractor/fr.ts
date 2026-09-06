/**
 * i18n tool shard (archive-extractor / fr).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
  tool_archive_extractor_article:
    'Ouvrez des archives ZIP, TAR et TAR.GZ dans le navigateur, parcourez l arbre de fichiers, prévisualisez les textes ou images courants et exportez le contenu compatible dans un ZIP propre. L archive reste sur votre appareil et n est pas envoyée au serveur.',
  tool_archive_extractor_choose_file: 'Choisir une archive',
  tool_archive_extractor_clear: 'Effacer',
  tool_archive_extractor_desc:
    'Extracteur d archive en ligne pour ouvrir ZIP, TAR et TAR.GZ dans le navigateur, prévisualiser les fichiers et exporter un ZIP sans envoi au serveur.',
  tool_archive_extractor_description:
    'Utilisez cet extracteur d archive en ligne pour ouvrir les fichiers compressés dans le navigateur : choisissez un ZIP, TAR ou TAR.GZ, parcourez l arbre, prévisualisez du texte ou des images, téléchargez un fichier ou exportez le contenu compatible dans un ZIP propre. Les fichiers restent sur l appareil et ne sont pas envoyés au serveur. L exemple sample-archive.tar.gz montre README.txt, src/index.js et assets/logo.png avec des chemins sûrs.',
  tool_archive_extractor_download_all: 'Exporter ZIP',
  tool_archive_extractor_download_file: 'Télécharger le fichier',
  tool_archive_extractor_drop_hint:
    'Déposez une archive. ZIP, TAR et TAR.GZ fonctionnent maintenant ; RAR, 7Z et ISO affichent des notes de prise en charge.',
  tool_archive_extractor_empty: 'Choisissez d abord une archive.',
  tool_archive_extractor_engine_badge: 'notes de support',
  tool_archive_extractor_err_archive:
    'Impossible de lire cette archive. Elle peut être endommagée, chiffrée, découpée en volumes ou utiliser une méthode de compression non prise en charge.',
  tool_archive_extractor_err_engine:
    'RAR, 7Z et ISO nécessitent un moteur multiformat plus lourd qui n est pas inclus dans cette version. ZIP, TAR et TAR.GZ fonctionnent toujours dans le navigateur.',
  tool_archive_extractor_err_fflate: 'Le moteur d archive n a pas pu se charger. Vérifiez la connexion et réessayez.',
  tool_archive_extractor_err_no_file: 'Aucun fichier extrait n est sélectionné.',
  tool_archive_extractor_err_unsupported:
    'Ce type de fichier n est pas encore pris en charge ici. Essayez ZIP, TAR ou TAR.GZ, ou utilisez un outil de bureau pour ce format.',
  tool_archive_extractor_example:
    'L exemple intégré sample-archive.tar.gz s ouvre comme une vraie archive avec trois entrées : README.txt, src/index.js et assets/logo.png. La page affiche l arbre, prévisualise README.txt et peut exporter le contenu compatible sous extracted-archive.zip.',
  tool_archive_extractor_example_title: 'Exemple',
  tool_archive_extractor_exported_all: 'Les fichiers ont été emballés dans un nouveau ZIP avec des chemins sûrs.',
  tool_archive_extractor_faq_a1:
    'Non. L archive est lue dans l onglet du navigateur et les octets extraits restent sur votre appareil. Le script auxiliaire peut se charger depuis ce site, mais vos fichiers ne sont pas envoyés à nos serveurs.',
  tool_archive_extractor_faq_a2:
    'Cette version traite ZIP, TAR, TAR.GZ et TGZ. RAR, 7Z et ISO apparaissent comme formats avec notes de prise en charge jusqu à l activation d un moteur multiformat plus lourd.',
  tool_archive_extractor_faq_a3:
    'Les archives protégées par mot de passe nécessitent votre mot de passe et peuvent encore échouer si le format ou le chiffrement n est pas pris en charge. Cet outil ne casse, ne récupère et ne devine pas les mots de passe.',
  tool_archive_extractor_faq_a4:
    'Les chemins absolus, segments ../, noms dupliqués ou caractères dangereux sont renommés ou bloqués avant export. Les cibles de liens symboliques ne sont pas écrites comme liens.',
  tool_archive_extractor_faq_a5:
    'Les grosses archives peuvent être lentes ou saturer la mémoire du navigateur, surtout sur téléphone. La page avertit si le nombre de fichiers, la taille développée ou le ratio d expansion semble risqué.',
  tool_archive_extractor_faq_a6:
    'Exporter ZIP signifie remballer les fichiers compatibles déjà extraits avec des chemins nettoyés. Cela ne promet pas de conserver toutes les fonctions de l archive d origine.',
  tool_archive_extractor_faq_q1: 'Mon archive est-elle envoyée ?',
  tool_archive_extractor_faq_q2: 'Quels formats d archive fonctionnent ?',
  tool_archive_extractor_faq_q3: 'Peut-il ouvrir un RAR ou 7Z avec mot de passe ?',
  tool_archive_extractor_faq_q4: 'Que deviennent les chemins dangereux ou liens symboliques ?',
  tool_archive_extractor_faq_q5: 'Comment gère-t-il les très grosses archives ?',
  tool_archive_extractor_faq_q6: 'RAR vers ZIP ou 7Z vers ZIP est-il une vraie conversion ?',
  tool_archive_extractor_file_count_label: 'Fichiers',
  tool_archive_extractor_format_label: 'Format',
  tool_archive_extractor_how_body:
    'Choisissez ou déposez une archive. La page détecte ZIP, TAR ou TAR.GZ, crée une liste sûre et prévisualise les petites entrées texte ou image. Sélectionnez une ligne pour télécharger un fichier ou exportez les fichiers compatibles dans un nouveau ZIP.',
  tool_archive_extractor_how_title: 'Fonctionnement',
  tool_archive_extractor_load_engine: 'Charger le moteur multiformat',
  tool_archive_extractor_load_sample: 'Charger l exemple',
  tool_archive_extractor_no_preview:
    'La prévisualisation n est pas disponible pour ce type de fichier. Vous pouvez quand même télécharger le fichier.',
  tool_archive_extractor_preview_title: 'Aperçu',
  tool_archive_extractor_rules_body:
    'L extraction d archive demande des règles claires pour les formats, les chemins, l aperçu et l export ZIP.',
  tool_archive_extractor_rules_item_1:
    'ZIP lit le répertoire central. TAR.GZ s ouvre en deux étapes : décompresser GZIP, puis lire les en-têtes TAR.',
  tool_archive_extractor_rules_item_2:
    'RAR, 7Z et ISO demandent un moteur multiformat plus lourd ; la page ne présente pas ces chemins comme actifs avant son chargement.',
  tool_archive_extractor_rules_item_3:
    'Sécurité des chemins : barres initiales, lettres de lecteur, ../, noms dupliqués et caractères dangereux sont nettoyés avant export.',
  tool_archive_extractor_rules_item_4:
    'Aperçu : petits textes, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP et SVG peuvent être prévisualisés ; les autres fichiers affichent seulement les métadonnées.',
  tool_archive_extractor_rules_item_5:
    'Limites : archives chiffrées, divisées, endommagées, solid ou à expansion anormale peuvent échouer ou exiger un outil de bureau.',
  tool_archive_extractor_rules_title: 'Règles à prévoir',
  tool_archive_extractor_selected_label: 'Sélection',
  tool_archive_extractor_size_label: 'Taille extraite',
  tool_archive_extractor_status_done: 'Archive ouverte — sélectionnez un fichier ou exportez ZIP.',
  tool_archive_extractor_status_reading: 'Lecture de l archive...',
  tool_archive_extractor_title:
    'Extracteur d archive en ligne — ouvrez les fichiers compressés dans le navigateur',
  tool_archive_extractor_total_size_label: 'Taille développée',
  tool_archive_extractor_usecase_1:
    'Développement : ouvrez une version .tar.gz de code, vérifiez README et src, puis téléchargez seulement le nécessaire.',
  tool_archive_extractor_usecase_2:
    'Opérations : examinez un paquet ZIP, RAR ou 7Z d un fournisseur et exportez les fichiers compatibles dans un ZIP propre pour l équipe.',
  tool_archive_extractor_usecase_3:
    'Appareils gérés : inspectez supports de cours ou pièces jointes sur Chromebook sans installer de logiciel de bureau.',
  tool_archive_extractor_usecases_title: 'Cas utiles',
  tool_archive_extractor_warn_dangerous:
    'Certains chemins ont été renommés ou ignorés pour la sécurité avant export.',
  tool_archive_extractor_warn_large:
    'Avertissement grosse archive : ce fichier peut être lent ou consommer beaucoup de mémoire dans le navigateur.',
};

export default fr;
