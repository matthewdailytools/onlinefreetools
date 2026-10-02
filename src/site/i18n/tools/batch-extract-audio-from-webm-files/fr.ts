import type { SiteLangDict } from '../../../types';

/**
 * Français: Extraire l’audio de fichiers WebM par lots.
 * File d’attente .webm uniquement ; extraction séquentielle ; ZIP partiel des réussites ;
 * plafond de secours ~500 Mio / 4 h par fichier ; max 30 fichiers ; pas YouTube.
 */
const fr: SiteLangDict = {
  tool_batch_extract_audio_from_webm_files_title: 'Extraire l’audio de fichiers WebM par lots',
  tool_batch_extract_audio_from_webm_files_desc:
    'Extraire l’audio de WebM locaux un par un vers un ZIP WAV/MP3. Secours ~500 Mio chacun—le ZIP partiel garde les réussites.',
  tool_batch_extract_audio_from_webm_files_description:
    'Mettez en file des WebM locaux, extrayez séquentiellement via le secours du moteur partagé (~500 Mio / 4 h chacun), ignorez les échecs avec des codes clairs, téléchargez un ZIP. Étapes : ajouter des WebM → Extraire → Télécharger ZIP. Exemple : Charger un exemple crée deux courts clips si MediaRecorder fonctionne. Pas YouTube. Pour un seul fichier, utilisez Extraire l’audio d’un fichier WebM.',
  tool_batch_extract_audio_from_webm_files_article:
    'Les dossiers de captures WebM ont souvent besoin d’un ZIP voix seule. Cette page met en file uniquement .webm, extrait un par un, ignore les trop gros avec err_container, emballe les réussites. Pas YouTube. Pas de démux 5 Gio.',
  tool_batch_extract_audio_from_webm_files_choose: 'Choisir des fichiers WebM',
  tool_batch_extract_audio_from_webm_files_hint:
    'Jusqu’à 30 fichiers .webm locaux. Secours par fichier ~500 Mio / 4 h. Les échecs sont ignorés ; le ZIP garde les réussites.',
  tool_batch_extract_audio_from_webm_files_list_label: 'File de fichiers',
  tool_batch_extract_audio_from_webm_files_convert: 'Extraire',
  tool_batch_extract_audio_from_webm_files_stop: 'Arrêter',
  tool_batch_extract_audio_from_webm_files_download: 'Télécharger ZIP',
  tool_batch_extract_audio_from_webm_files_sample: 'Charger un exemple',
  tool_batch_extract_audio_from_webm_files_clear: 'Effacer',
  tool_batch_extract_audio_from_webm_files_advanced: 'Format d’export (optionnel)',
  tool_batch_extract_audio_from_webm_files_format_label: 'Format de sortie',
  tool_batch_extract_audio_from_webm_files_format_wav: 'WAV (16 bits)',
  tool_batch_extract_audio_from_webm_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_webm_files_bitrate: 'Débit MP3',
  tool_batch_extract_audio_from_webm_files_settings_hint:
    'WAV par défaut pour les courts clips. Les plafonds suivent le chemin de secours. Pas d’URL.',
  tool_batch_extract_audio_from_webm_files_progress: 'Progression de l’extraction par lots',
  tool_batch_extract_audio_from_webm_files_read: 'Lecture',
  tool_batch_extract_audio_from_webm_files_decode: 'Décodage',
  tool_batch_extract_audio_from_webm_files_extract: 'Extraction',
  tool_batch_extract_audio_from_webm_files_write: 'Écriture',
  tool_batch_extract_audio_from_webm_files_pack: 'Emballer ZIP',
  tool_batch_extract_audio_from_webm_files_done: 'Prêt. Téléchargez le ZIP des fichiers audio extraits.',
  tool_batch_extract_audio_from_webm_files_failed:
    'Échec du lot. Retirez les fichiers endommagés ou essayez-en moins.',
  tool_batch_extract_audio_from_webm_files_elapsed: '{s}s écoulées',
  tool_batch_extract_audio_from_webm_files_preview: 'Résultat du lot',
  tool_batch_extract_audio_from_webm_files_result: '{n} fichiers audio emballés · ZIP {output} Kio',
  tool_batch_extract_audio_from_webm_files_partial:
    'OK {ok}, échec {fail} · le ZIP inclut toujours les réussites ({output} Kio)',
  tool_batch_extract_audio_from_webm_files_sample_name: 'batch-webm-audio-demo',
  tool_batch_extract_audio_from_webm_files_empty: 'Ajoutez au moins un fichier WebM ou chargez l’exemple.',
  tool_batch_extract_audio_from_webm_files_empty_state:
    'Aucun fichier. Déposez des .webm locaux. Pas YouTube.',
  tool_batch_extract_audio_from_webm_files_remove: 'Retirer',
  tool_batch_extract_audio_from_webm_files_queue_count: '{n} fichier(s) en file',
  tool_batch_extract_audio_from_webm_files_status_pending: 'En attente',
  tool_batch_extract_audio_from_webm_files_status_running: 'Extraction…',
  tool_batch_extract_audio_from_webm_files_status_ok: 'Terminé',
  tool_batch_extract_audio_from_webm_files_status_fail: 'Échec',
  tool_batch_extract_audio_from_webm_files_status_stopped: 'Arrêté',
  tool_batch_extract_audio_from_webm_files_err_file: 'Ajoutez des fichiers WebM que le navigateur peut décoder.',
  tool_batch_extract_audio_from_webm_files_err_format:
    'Fichier non pris en charge. Utilisez uniquement .webm sur cette page.',
  tool_batch_extract_audio_from_webm_files_err_limit:
    'Un fichier a dépassé une limite de taille/durée du chemin de secours.',
  tool_batch_extract_audio_from_webm_files_err_container:
    'Un fichier dépasse le plafond de secours ~500 Mio / 4 h—ou n’est pas un WebM valide. Ligne ignorée.',
  tool_batch_extract_audio_from_webm_files_err_codec:
    'Un fichier utilise un codec audio non pris en charge. Ligne ignorée.',
  tool_batch_extract_audio_from_webm_files_err_channels:
    'Un fichier utilise une disposition de canaux non prise en charge. Ligne ignorée.',
  tool_batch_extract_audio_from_webm_files_err_decode: 'Le navigateur n’a pas pu décoder l’audio d’un fichier.',
  tool_batch_extract_audio_from_webm_files_err_encoder: 'Impossible d’écrire un fichier audio.',
  tool_batch_extract_audio_from_webm_files_err_zip: 'Impossible de créer le ZIP.',
  tool_batch_extract_audio_from_webm_files_err_too_many: 'La file est limitée à 30 fichiers.',
  tool_batch_extract_audio_from_webm_files_err_sample: 'Impossible de créer les exemples. Déposez vos propres fichiers.',
  tool_batch_extract_audio_from_webm_files_err_unsupported: 'Ce navigateur n’a pas Web Audio.',
  tool_batch_extract_audio_from_webm_files_err_empty: 'Aucun échantillon audio utilisable.',
  tool_batch_extract_audio_from_webm_files_forced_mp3: 'Un fichier long/grand a utilisé le MP3 en streaming.',
  tool_batch_extract_audio_from_webm_files_how_title: 'Comment extraire l’audio de fichiers WebM par lots',
  tool_batch_extract_audio_from_webm_files_how_body:
    'Mettez en file des WebM locaux, extrayez un par un, téléchargez le ZIP.',
  tool_batch_extract_audio_from_webm_files_how_item_1: 'Choisissez plusieurs .webm ou Charger un exemple.',
  tool_batch_extract_audio_from_webm_files_how_item_2: 'Choisissez éventuellement MP3 au lieu de WAV.',
  tool_batch_extract_audio_from_webm_files_how_item_3:
    'Cliquez Extraire ; utilisez Arrêter pour annuler les lignes restantes.',
  tool_batch_extract_audio_from_webm_files_how_item_4: 'Téléchargez le ZIP. Les lignes en échec sont ignorées.',
  tool_batch_extract_audio_from_webm_files_why_choose_title:
    'Pourquoi utiliser Extraire l’audio de fichiers WebM par lots',
  tool_batch_extract_audio_from_webm_files_why_choose_item_1:
    'L’extraction séquentielle stabilise la mémoire.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_2:
    'Statut par ligne ; un échec n’efface pas le ZIP.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_3: 'Plafonds de secours honnêtes pour WebM.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_4:
    'Traitement sur l’appareil ; hub à proximité pour les formats mixtes.',
  tool_batch_extract_audio_from_webm_files_rules_title: 'Extraction WebM séquentielle et honnêteté du ZIP',
  tool_batch_extract_audio_from_webm_files_rules_body:
    'Chaque WebM est classé puis extrait seul. Les ZIP partiels gardent les réussites.',
  tool_batch_extract_audio_from_webm_files_rules_item_1:
    'Jusqu’à 30 fichiers ; chacun ~500 Mio / 4 h en secours.',
  tool_batch_extract_audio_from_webm_files_rules_item_2: 'Pas d’URL ni de téléchargement YouTube.',
  tool_batch_extract_audio_from_webm_files_rules_item_3:
    'Les échecs sont ignorés avec err_container / err_codec le cas échéant.',
  tool_batch_extract_audio_from_webm_files_rules_item_4: 'Les fichiers restent sur votre appareil.',
  tool_batch_extract_audio_from_webm_files_example_title: 'Essayer un vrai lot',
  tool_batch_extract_audio_from_webm_files_example:
    'Charger un exemple crée deux courts clips si possible, puis emballe un ZIP.',
  tool_batch_extract_audio_from_webm_files_usecases_title: 'Quand c’est utile',
  tool_batch_extract_audio_from_webm_files_usecase_1:
    'Un dossier de captures WebM a besoin des pistes voix dans un seul ZIP.',
  tool_batch_extract_audio_from_webm_files_usecase_2: 'Extraction en masse sans uploader chaque fichier.',
  tool_batch_extract_audio_from_webm_files_usecase_3:
    'Mélange avec des fichiers trop gros—le ZIP partiel reste utile.',
  tool_batch_extract_audio_from_webm_files_faq_q1: 'Playlist YouTube ?',
  tool_batch_extract_audio_from_webm_files_faq_a1: 'Non. Uniquement des .webm locaux.',
  tool_batch_extract_audio_from_webm_files_faq_q2: 'Un seul fichier ?',
  tool_batch_extract_audio_from_webm_files_faq_a2: 'Utilisez la page d’extraction WebM unitaire.',
  tool_batch_extract_audio_from_webm_files_faq_q3: 'Pourquoi 500 Mio et pas 5 Gio ?',
  tool_batch_extract_audio_from_webm_files_faq_a3:
    'Pas encore de démux WebM ; les plafonds de secours s’appliquent. MP4/MOV ont le gros démux.',
  tool_batch_extract_audio_from_webm_files_faq_q4: 'Uploadé ?',
  tool_batch_extract_audio_from_webm_files_faq_a4: 'Non. Navigateur uniquement.',
  tool_batch_extract_audio_from_webm_files_faq_q5: 'Un fichier énorme échoue ?',
  tool_batch_extract_audio_from_webm_files_faq_a5:
    'Cette ligne échoue avec err_container ; les autres s’emballent quand même.',
  tool_batch_extract_audio_from_webm_files_faq_q6: 'Découper après ?',
  tool_batch_extract_audio_from_webm_files_faq_a6:
    'Téléchargez le ZIP, puis utilisez l’outil de découpe par fichier.',
};
export default fr;
