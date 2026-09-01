/**
 * i18n tool shard (create-zip-file / fr).
 * H1 local : Créer un fichier zip.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_create_zip_file_article:
		'Choisissez des fichiers dans cet onglet, rassemblez-les dans un ZIP, puis téléchargez. Les fichiers restent sur l’appareil et ne sont pas envoyés à un serveur. Gzip est un mode secondaire pour un seul fichier.',
	tool_create_zip_file_choose_files: 'Choisir des fichiers',
	tool_create_zip_file_clear: 'Effacer',
	tool_create_zip_file_desc:
		'Créez un zip dans le navigateur à partir de plusieurs fichiers ou d’un dossier avec chemin, puis téléchargez — rien n’est envoyé.',
	tool_create_zip_file_description:
		'Créer un fichier zip : choisissez des fichiers (les noms de dossier sont gardés si le navigateur fournit un chemin relatif), laissez ZIP, puis téléchargez. Les fichiers restent sur l’appareil et ne sont pas envoyés à un serveur. L’exemple met notes.txt, photo.png et docs/readme.md dans sample.zip. Gzip est un mode secondaire pour un fichier. Le zip mot de passe est une limite FAQ, pas une promesse d’écran d’accueil.',
	tool_create_zip_file_download: 'Télécharger le ZIP',
	tool_create_zip_file_drop_hint: 'Déposez des fichiers ici. Un dossier déposé conserve les chemins relatifs si le navigateur les fournit.',
	tool_create_zip_file_empty: 'Choisissez d’abord au moins un fichier.',
	tool_create_zip_file_err_fflate: 'Le moteur ZIP n’a pas pu se charger. Vérifiez le réseau puis réessayez.',
	tool_create_zip_file_err_gzip_many: 'Gzip ne compacte qu’un fichier. Passez en ZIP pour plusieurs, ou n’en gardez qu’un.',
	tool_create_zip_file_err_too_large: 'Cet ensemble est trop lourd pour un empaquetage sûr dans le navigateur. Retirez des fichiers puis réessayez.',
	tool_create_zip_file_example:
		'Charger l’exemple place notes.txt, un petit photo.png et docs/readme.md, puis construit sample.zip. Télécharger le ZIP est prêt dès le premier écran.',
	tool_create_zip_file_example_title: 'Exemple',
	tool_create_zip_file_faq_a1:
		'Non. Les octets sont lus dans cet onglet. Le script du moteur ZIP peut venir d’un CDN, mais vos fichiers ne sont pas envoyés sur nos serveurs.',
	tool_create_zip_file_faq_a2:
		'Si le navigateur signale webkitRelativePath (dossier déposé ou sélecteur de répertoire), ces chemins deviennent des entrées ZIP après retrait des ../. C’est le travail « zipper un dossier » de cette page.',
	tool_create_zip_file_faq_a3:
		'Cette page ne crée ni ne casse de ZIP AES au premier écran. Le zip mot de passe reste une limite FAQ.',
	tool_create_zip_file_faq_a4:
		'Utilisez Gzip seulement pour un fichier si vous voulez un .gz. Plusieurs fichiers vont dans un ZIP. Gzip n’est pas un compresseur PDF.',
	tool_create_zip_file_faq_a5:
		'De très gros ensembles peuvent saturer la mémoire de l’onglet. La page avertit et s’arrête. Pour extraire, utilisez la page Unzip liée.',
	tool_create_zip_file_faq_q1: 'Mes fichiers sont-ils envoyés ?',
	tool_create_zip_file_faq_q2: 'Puis-je zipper un dossier ?',
	tool_create_zip_file_faq_q3: 'Cela crée-t-il un zip avec mot de passe ?',
	tool_create_zip_file_faq_q4: 'Quand utiliser Gzip plutôt que ZIP ?',
	tool_create_zip_file_faq_q5: 'Et les très gros fichiers ? Où extraire ?',
	tool_create_zip_file_file_count_label: 'Fichiers',
	tool_create_zip_file_how_body:
		'Choisissez ce que vous voulez envoyer en une archive, gardez les dossiers si le navigateur donne le chemin, puis téléchargez le ZIP. Gzip est une autre voie pour un fichier.',
	tool_create_zip_file_how_item_1: 'Choisissez les fichiers à envoyer en un zip — c’est la tâche, pas un second extracteur.',
	tool_create_zip_file_how_item_2: 'Déposez un dossier si le navigateur conserve les chemins relatifs ; les ../ sont retirés.',
	tool_create_zip_file_how_item_3: 'Laissez ZIP (par défaut) puis téléchargez. L’exemple a déjà empaqueté trois fichiers à l’ouverture.',
	tool_create_zip_file_how_item_4: 'Passez en Gzip seulement avec un fichier et si vous voulez un .gz. Plusieurs fichiers restent en ZIP.',
	tool_create_zip_file_how_title: 'Fonctionnement',
	tool_create_zip_file_level_label: 'Niveau de compression',
	tool_create_zip_file_load_sample: 'Charger l’exemple',
	tool_create_zip_file_mode_gzip: 'Gzip (un fichier)',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: 'Taille empaquetée',
	tool_create_zip_file_rules_body:
		'Empaqueter dans le navigateur demande un nettoyage des chemins, une séparation ZIP / Gzip, un plafond de taille et une limite mot de passe claire.',
	tool_create_zip_file_rules_item_1:
		'ZIP utilise DEFLATE via zipSync de fflate. Le niveau 0–9 est optionnel ; l’exemple utilise un niveau léger pour un premier affichage rapide.',
	tool_create_zip_file_rules_item_2:
		'Les noms viennent du nom de fichier ou de webkitRelativePath. Les barres initiales et ../ sont retirés.',
	tool_create_zip_file_rules_item_3:
		'Le mode Gzip appelle gzipSync sur exactement un fichier. Plus d’un fichier doit passer en ZIP.',
	tool_create_zip_file_rules_item_4:
		'Le ZIP mot de passe n’est pas la sortie du premier écran. Cette page ne récupère ni ne casse les archives chiffrées.',
	tool_create_zip_file_rules_title: 'Règles à attendre',
	tool_create_zip_file_status_done: 'Archive prête — téléchargez ou remplacez les fichiers.',
	tool_create_zip_file_status_packing: 'Empaquetage…',
	tool_create_zip_file_title: 'Créer un fichier zip',
	tool_create_zip_file_usecase_1:
		'E-mail : regrouper plusieurs pièces jointes en un zip avant l’envoi, sans les envoyer sur un site d’empaquetage.',
	tool_create_zip_file_usecase_2:
		'Devoir : zipper un dossier de notes et une capture quand on demande une seule archive.',
	tool_create_zip_file_usecase_3:
		'Petit dépôt source : readme plus quelques fichiers, puis vérifier le zip sur Hash de fichier.',
	tool_create_zip_file_usecases_title: 'Bons cas d’usage',
};

export default fr;
