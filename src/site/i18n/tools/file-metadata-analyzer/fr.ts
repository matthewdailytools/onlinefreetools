/**
 * i18n tool shard (file-metadata-analyzer / fr).
 */
import type { SiteLangDict } from '../../../types';

/** 法语文案键表。 */
const fr: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: 'Analyse…',
	tool_file_metadata_analyzer_article:
		'Déposez ou choisissez un fichier local pour voir nom, taille, MIME et modification. Images : largeur×hauteur ; audio/vidéo : durée si décodable. Indices magic-byte. Sans envoi au serveur ; restent sur l’appareil.',
	tool_file_metadata_analyzer_choose_file: 'Choisir un fichier',
	tool_file_metadata_analyzer_clear: 'Effacer',
	tool_file_metadata_analyzer_decode_fail: 'Champs média supplémentaires impossibles — infos de base affichées.',
	tool_file_metadata_analyzer_desc:
		'Inspectez les métadonnées locales — taille, type, dimensions, durée. Sans envoi au serveur ; sur l’appareil.',
	tool_file_metadata_analyzer_description:
		'Analyseur de métadonnées : déposez un fichier pour lire nom, octets, MIME et modification. Images → dimensions ; audio/vidéo → durée. Magic-byte : PNG, JPEG, GIF, WebP, PDF, ZIP, MP4. Exemple : PNG 16×16 au chargement. EXIF profond → outil EXIF lié. Sans envoi au serveur.',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} px',
	tool_file_metadata_analyzer_drop_hint: 'Ou déposez un fichier ici. Analyse dans cet onglet.',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: 'Choisissez ou déposez un fichier d’abord.',
	tool_file_metadata_analyzer_example:
		'Charger l’exemple crée un PNG 16×16 sample-icon.png en mémoire. Table ~100+ octets, image/png, 16×16 px, indice PNG — sans envoi.',
	tool_file_metadata_analyzer_example_title: 'Exemple',
	tool_file_metadata_analyzer_faq_a1: 'Non. Le fichier est lu via File API dans cet onglet. Rien n’est envoyé à nos serveurs.',
	tool_file_metadata_analyzer_faq_a2:
		'Cette page montre les bases du conteneur + dimensions/durée si possible. L’outil EXIF lit/supprime les tags appareil.',
	tool_file_metadata_analyzer_faq_a3: 'file.type peut être vide. Taille et nom restent ; magic-byte peut suggérer le type.',
	tool_file_metadata_analyzer_faq_a4: 'Certains codecs échouent. Champs File API conservés ; ligne de note explique.',
	tool_file_metadata_analyzer_faq_a5: 'Nous lisons ~12 premiers octets (PNG, JPEG, GIF, WebP, PDF, ZIP, MP4). Indice, pas base complète.',
	tool_file_metadata_analyzer_faq_q1: 'Mon fichier est-il envoyé ?',
	tool_file_metadata_analyzer_faq_q2: 'Différence avec l’outil EXIF ?',
	tool_file_metadata_analyzer_faq_q3: 'Pourquoi MIME vide ?',
	tool_file_metadata_analyzer_faq_q4: 'Pourquoi pas de dimensions ou durée ?',
	tool_file_metadata_analyzer_faq_q5: 'Que sont les indices magic-byte ?',
	tool_file_metadata_analyzer_field_decode_note: 'Note de décodage',
	tool_file_metadata_analyzer_field_dimensions: 'Dimensions',
	tool_file_metadata_analyzer_field_duration: 'Durée',
	tool_file_metadata_analyzer_field_magic: 'Indice magic-byte',
	tool_file_metadata_analyzer_field_modified: 'Dernière modification',
	tool_file_metadata_analyzer_field_name: 'Nom du fichier',
	tool_file_metadata_analyzer_field_size: 'Taille (octets)',
	tool_file_metadata_analyzer_field_size_human: 'Taille (lisible)',
	tool_file_metadata_analyzer_field_type: 'MIME / type',
	tool_file_metadata_analyzer_how_body: 'Choisissez un fichier local. Champs File puis approfondissement images/média si décodable.',
	tool_file_metadata_analyzer_how_item_1: 'Déposez un fichier ou cliquez Choisir un fichier.',
	tool_file_metadata_analyzer_how_item_2: 'Lisez nom, octets, taille lisible, MIME, modification.',
	tool_file_metadata_analyzer_how_item_3: 'Images : largeur×hauteur ; audio/vidéo : durée.',
	tool_file_metadata_analyzer_how_item_4: 'Charger l’exemple ou Effacer pour réinitialiser.',
	tool_file_metadata_analyzer_how_title: 'Comment ça marche',
	tool_file_metadata_analyzer_load_sample: 'Charger l’exemple',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'Résultats métadonnées',
	tool_file_metadata_analyzer_rules_body: 'Origine des champs et limites de cet analyseur.',
	tool_file_metadata_analyzer_rules_item_1: 'Nom, taille, type, lastModified viennent de l’objet File.',
	tool_file_metadata_analyzer_rules_item_2: 'Dimensions image via createImageBitmap ou Image — même onglet.',
	tool_file_metadata_analyzer_rules_item_3: 'Durée via élément media ; codecs rares peuvent échouer.',
	tool_file_metadata_analyzer_rules_item_4: 'Magic-byte superficiel — pas de remplacement hash ou EXIF profond.',
	tool_file_metadata_analyzer_rules_title: 'Règles attendues',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: 'Analyse terminée.',
	tool_file_metadata_analyzer_title: 'analyseur de métadonnées de fichiers',
	tool_file_metadata_analyzer_usecase_1: 'Confirmez 1920×1080 avant upload CMS.',
	tool_file_metadata_analyzer_usecase_2: 'Vérifiez la durée d’un memo vocal sans inspecteur desktop.',
	tool_file_metadata_analyzer_usecase_3: 'Comparez MIME et magic-byte si l’extension semble suspecte.',
	tool_file_metadata_analyzer_usecases_title: 'Bonnes situations',
	tool_file_metadata_analyzer_waiting: 'Choisissez un fichier ou chargez l’exemple.',
};

export default fr;
