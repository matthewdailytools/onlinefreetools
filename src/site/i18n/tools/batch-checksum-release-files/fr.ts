/**
 * Fragment i18n (batch-checksum-release-files / fr).
 * H1 suit la recherche « Sommes de contrôle des fichiers de release en lot ».
 */
import type { SiteLangDict } from '../../../types';

/** Français : table SHA-256 des binaires de release et comparaison SUMS. */
const fr: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'Hachez un dossier d\'assets de release dans cet onglet. Vous obtenez un tableau, un CSV et un SHA256SUMS — pas un ZIP des binaires. Collez une liste officielle pour marquer correspondance ou écart. Les fichiers restent sur l\'appareil et ne sont pas envoyés vers un serveur.',
	tool_batch_checksum_release_files_choose_files: 'Choisir des fichiers',
	tool_batch_checksum_release_files_chip_md5: 'Aussi MD5',
	tool_batch_checksum_release_files_clear: 'Effacer',
	tool_batch_checksum_release_files_col_compare: 'Comparer',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'Chemin',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'Taille',
	tool_batch_checksum_release_files_desc:
		'Sommes de contrôle des fichiers de release en lot : table SHA-256, MD5 optionnel, collage SHA256SUMS, export CSV ou SUMS ; restent sur l\'appareil, pas envoyés vers un serveur.',
	tool_batch_checksum_release_files_description:
		'Sommes de contrôle des fichiers de release en lot : ajoutez les assets, hachez chacun en SHA-256 dans cet onglet, ajoutez MD5 si besoin, collez une liste SHA256SUMS pour comparer, exportez CSV ou texte SUMS — pas un ZIP des binaires. Étapes : choisissez l\'ensemble, tout hasher, collez la liste si vous l\'avez, exportez. Exemple : deux petits binaires d\'exemple remplissent deux lignes SHA-256 et une colonne de correspondance. Les fichiers restent sur l\'appareil et ne sont pas envoyés vers un serveur.',
	tool_batch_checksum_release_files_drop_hint: 'Déposez des fichiers de release (jusqu\'à 20). Le hash reste dans cet onglet. Cette page ne met pas les originaux en ZIP.',
	tool_batch_checksum_release_files_empty: 'Ajoutez d\'abord des fichiers.',
	tool_batch_checksum_release_files_err_md5: 'La bibliothèque MD5 n\'a pas chargé. Essayez un navigateur actuel ou laissez MD5 éteint.',
	tool_batch_checksum_release_files_err_read: 'Impossible de lire ce fichier. Ignoré.',
	tool_batch_checksum_release_files_err_too_many: '20 fichiers au plus. Les autres n\'ont pas été ajoutés.',
	tool_batch_checksum_release_files_example:
		'Charger un exemple hache deux petits binaires, remplit les lignes SHA-256, colle une ligne SUMS du premier pour que cette ligne corresponde, et active CSV et SUMS.',
	tool_batch_checksum_release_files_example_title: 'Exemple',
	tool_batch_checksum_release_files_export_csv: 'Exporter CSV',
	tool_batch_checksum_release_files_export_sums: 'Exporter SUMS',
	tool_batch_checksum_release_files_faq_a1:
		'Non. Le hash se fait dans cet onglet. Les fichiers restent sur l\'appareil et ne sont pas envoyés vers un serveur. SHA-256 utilise Web Crypto. MD5 peut charger crypto-js depuis un CDN ; vos octets ne quittent pas l\'onglet.',
	tool_batch_checksum_release_files_faq_a2:
		'Non. Les exports sont un tableau CSV et un SHA256SUMS. Empaqueter les binaires, c\'est Créer un ZIP — un autre travail.',
	tool_batch_checksum_release_files_faq_a3:
		'Hash de fichier traite un fichier ou un collage. Cette page hache un jeu de release, compare un SHA256SUMS collé et exporte CSV et SUMS.',
	tool_batch_checksum_release_files_faq_a4:
		'Activez Aussi MD5. SHA-256 tourne toujours. MD5 est extra pour les listes anciennes ; ce n\'est pas une seconde URL.',
	tool_batch_checksum_release_files_faq_a5:
		'La colonne chemin préfère webkitRelativePath. Les noms en double dans la file reçoivent un suffixe pour que les lignes SUMS ne se marchent pas dessus.',
	tool_batch_checksum_release_files_faq_q1: 'Mes fichiers partent-ils vers un serveur ?',
	tool_batch_checksum_release_files_faq_q2: 'Est-ce que les binaires de release vont dans un ZIP ?',
	tool_batch_checksum_release_files_faq_q3: 'Quelle différence avec Hash de fichier ?',
	tool_batch_checksum_release_files_faq_q4: 'Où est le MD5 ?',
	tool_batch_checksum_release_files_faq_q5: 'Et si deux fichiers partagent un nom ?',
	tool_batch_checksum_release_files_file_count_tpl: '{n} fichiers dans la file',
	tool_batch_checksum_release_files_hash_all: 'Tout hasher',
	tool_batch_checksum_release_files_how_body:
		'Mettez les assets, hachez chaque fichier en SHA-256, collez un SHA256SUMS si vous en avez un, exportez CSV ou SUMS — pas un ZIP des fichiers.',
	tool_batch_checksum_release_files_how_item_1: 'Choisissez les binaires, installeurs ou checksums que vous allez publier.',
	tool_batch_checksum_release_files_how_item_2: 'Gardez SHA-256. Activez Aussi MD5 seulement si une ancienne liste l\'utilise encore.',
	tool_batch_checksum_release_files_how_item_3: 'Appuyez sur Tout hasher. La progression est par fichier. Une erreur de lecture saute cette ligne.',
	tool_batch_checksum_release_files_how_item_4: 'Collez une liste SHA256SUMS officielle pour marquer correspondance, écart ou absence.',
	tool_batch_checksum_release_files_how_item_5: 'Exportez CSV ou SUMS dès qu\'au moins un hash a réussi. Un seul fichier ? Utilisez Hash de fichier.',
	tool_batch_checksum_release_files_how_title: 'Comment calculer les sommes du lot',
	tool_batch_checksum_release_files_md5_label: 'Calculer aussi MD5',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 utilise Web Crypto sur des octets lus par tranches de 4 Mio puis concaténés. La sortie est un tableau, un CSV et un SUMS, jamais un ZIP des originaux.',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 tourne toujours. MD5 est optionnel et charge crypto-js depuis un CDN ; les octets restent dans l\'onglet.',
	tool_batch_checksum_release_files_rules_item_2:
		'Les lignes SUMS suivent sha256sum GNU : hex, deux espaces ou espace-étoile, puis le nom. Les noms en trop dans le collage apparaissent manquants.',
	tool_batch_checksum_release_files_rules_item_3:
		'Les échecs de lecture sautent cette ligne. Les noms en double reçoivent un suffixe. File vide = pas d\'export.',
	tool_batch_checksum_release_files_rules_item_4:
		'Les fichiers restent sur l\'appareil et ne sont pas envoyés vers un serveur.',
	tool_batch_checksum_release_files_rules_title: 'Ce qu\'il faut attendre',
	tool_batch_checksum_release_files_sample: 'Charger un exemple',
	tool_batch_checksum_release_files_status_done: 'Lot terminé — vérifiez le tableau, puis exportez CSV ou SUMS.',
	tool_batch_checksum_release_files_status_hashing: 'Hachage de chaque fichier de release…',
	tool_batch_checksum_release_files_status_match: 'Correspond',
	tool_batch_checksum_release_files_status_mismatch: 'Ne correspond pas',
	tool_batch_checksum_release_files_status_missing: 'Manquant',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'Hashé',
	tool_batch_checksum_release_files_status_skip: 'Ignoré',
	tool_batch_checksum_release_files_summary_tpl: '{ok} hashés · {skip} ignorés · {match} correspondent · {mismatch} ne correspondent pas',
	tool_batch_checksum_release_files_sums_label: 'Collez SHA256SUMS pour comparer',
	tool_batch_checksum_release_files_sums_placeholder: 'hex  nom',
	tool_batch_checksum_release_files_title: 'Sommes de contrôle des fichiers de release en lot',
	tool_batch_checksum_release_files_usecase_1: 'Des assets GitHub Release qui ont besoin d\'un SHA256SUMS à côté des téléchargements.',
	tool_batch_checksum_release_files_usecase_2: 'Comparer les fichiers d\'un miroir à la liste de checksums amont.',
	tool_batch_checksum_release_files_usecase_3: 'Hasher plusieurs fichiers sans mettre les binaires dans un ZIP.',
	tool_batch_checksum_release_files_usecases_title: 'Quand ça aide',
	tool_batch_checksum_release_files_warn_large: 'Un fichier dépasse 64 Mo — cet onglet peut manquer de mémoire sur cette ligne.',
};

export default fr;
