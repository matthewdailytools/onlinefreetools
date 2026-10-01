import type { SiteLangDict } from '../../../types';

/**
 * Français (D3 lot) : plusieurs MKV locaux → MP4 AAC stéréo, téléchargement ZIP.
 * Intention : convertir plusieurs mkv en mp4, lot mkv, sans envoi au serveur.
 */
const fr: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'Convertir des fichiers MKV en MP4 par lots',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'Convertissez plusieurs MKV locaux en MP4 AAC stéréo dans le navigateur, puis téléchargez un ZIP. ~20 fichiers, ~500 Mio chacun. Sans envoi au serveur.',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    'Convertissez par lots des MKV locaux en MP4 AAC stéréo sur votre appareil, puis un seul ZIP. Étapes : ajoutez des MKV → Tout convertir → Télécharger le ZIP. Exemple : Charger l’exemple met deux courts Matroska en file et emballe les deux MP4. ~500 Mio / 2 h par fichier, jusqu’à ~20 en file. Une ligne en échec est ignorée ; les réussites restent dans un ZIP partiel. Fichiers locaux uniquement, pas de liens YouTube ; ils restent sur l’appareil, sans envoi au serveur. Un seul fichier ? Convertir un fichier MKV en MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    'Les dossiers de captures Matroska demandent souvent du MP4 pour le montage. Cette page reprend la conversion AAC de l’outil mono-fichier, mais en file d’attente, statut par ligne et ZIP des MP4 réussis. Pas d’extraction audio seule en lot, pas de téléchargement d’URL — un seul clip → page mono-fichier.',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'Choisir des fichiers MKV',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'Déposez plusieurs .mkv locaux (~500 Mio / 2 h chacun, jusqu’à ~20). L’audio devient AAC stéréo. Pas YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'File',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '{n} fichier(s) en file',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'Tout convertir',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'Télécharger le ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'Charger l’exemple',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'Effacer',
  tool_batch_convert_mkv_files_to_mp4_files_stop: 'Arrêter',
  tool_batch_convert_mkv_files_to_mp4_files_remove: 'Retirer',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: 'Réglages audio (facultatif)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: 'Canaux audio',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'Stéréo (par défaut)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'Mono',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'Qualité AAC',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: 'Taille réduite',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'Équilibré',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: 'Meilleure qualité (défaut)',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    'Les valeurs par défaut s’appliquent à chaque fichier de la file. Changer les réglages efface un ZIP terminé.',
  tool_batch_convert_mkv_files_to_mp4_files_progress: 'Progression du lot',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'Charger le moteur',
  tool_batch_convert_mkv_files_to_mp4_files_read: 'Lire',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'Décoder',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'Encoder',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'Créer le ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_done:
    'Terminé. Téléchargez le ZIP — ou ouvrez la conversion MKV→MP4 mono-fichier pour un seul clip.',
  tool_batch_convert_mkv_files_to_mp4_files_failed:
    'Échec du lot. Vérifiez les erreurs par ligne ou essayez des MKV plus petits ou moins nombreux.',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: '{s} s écoulées',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'Résultat ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_result: '{n} MP4 emballé(s) · ZIP {output} Kio',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '{ok} réussis, {fail} échoués · ZIP {output} Kio (partiel). Le téléchargement garde les réussites.',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'Ajoutez des MKV ou chargez l’exemple d’abord.',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'Aucun fichier. Déposez des .mkv locaux (~500 Mio chacun) ou chargez l’exemple. Pas YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: 'En attente',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: 'Conversion…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 prêt',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: 'Échec',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: 'Arrêté',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'Déposez un ou plusieurs fichiers MKV.',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: 'Fichier non pris en charge. Cette page accepte uniquement .mkv.',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'Un fichier dépasse ~500 Mio / 2 h ou la file est trop grande pour ce navigateur.',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'Trop de fichiers. Gardez ~20 MKV ou moins par lot.',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'Impossible d’ouvrir un fichier en Matroska ou aucune piste vidéo/audio utilisable.',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'Un codec n’a pas pu être décodé/encodé ici. Cette ligne échoue ; les autres peuvent être emballées.',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: 'Impossible d’écrire un MP4 pour une ligne. Réessayez ou retirez-la.',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'Impossible de créer le ZIP. Relancez Tout convertir.',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'Exemple MKV introuvable. Utilisez vos propres fichiers.',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'Le moteur de conversion n’a pas pu se charger dans ce navigateur.',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: 'Conversion arrêtée.',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'Convertir plusieurs MKV en MP4',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'Mettez des MKV locaux en file, lancez Tout convertir, puis Télécharger le ZIP — chaque succès est un MP4 AAC stéréo.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    'Choisissez plusieurs .mkv locaux (~500 Mio chacun) ou chargez l’exemple.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    'Optionnel : ouvrez Réglages audio pour mono ou AAC plus léger (s’applique à tout le lot).',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    'Cliquez Tout convertir et suivez chaque ligne (ou Arrêter). Les échecs sont ignorés ; le reste continue.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    'Quand la progression finit, Télécharger le ZIP. Un seul clip ? Page mono-fichier MKV→MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'Pourquoi ce convertisseur MKV→MP4 par lots',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    'Un ZIP de MP4 AAC sans envoyer tout un dossier Matroska vers le cloud.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    'Statut par ligne et ignore en cas d’échec — une piste défectueuse n’arrête pas tout le lot.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    'Même moteur AAC que la page mono-fichier, limites annoncées — pas un remux silencieux.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    'Liens clairs vers la conversion mono et l’extraction audio une fois les MP4 prêts.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: 'Limites du lot MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    '.mkv locaux seulement. L’audio est ré-encodé en AAC. Limites et échecs par ligne sont dits d’emblée — gros rips plutôt ffmpeg bureau.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    '~500 Mio / 2 h par fichier, ~20 par lot. Au-delà, un message clair s’affiche.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'Pas de téléchargement par URL ni YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC stéréo (ou mono) volontairement. E-AC-3 peut passer par l’assistant partagé ; vidéo exotique peut faire échouer une ligne.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    'Les MKV d’origine ne sont pas écrasés. Ce n’est pas l’extraction audio seule en lot — voir les pages dédiées.',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: 'Essayer un vrai lot',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'Charger l’exemple met deux MKV courts du site ; Tout convertir les emballe. Pour un test réel, vos fichiers sous la limite.',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'Quand c’est utile',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    'Un dossier de captures MKV doit devenir MP4 parce que le montage refuse Matroska.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    'Plusieurs MKV DDP/Atmos ont besoin d’AAC avant d’extraire l’audio des MP4 obtenus.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    'Vous voulez un ZIP en une fois sans envoyer le lot à un convertisseur en ligne.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: 'Puis-je coller des URL YouTube ?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'Non. Fichiers .mkv locaux uniquement.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: 'Différence avec Convertir un MKV en MP4 (un fichier) ?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'L’autre page = un fichier et MP4 direct. Ici = file de plusieurs fichiers et ZIP. Même moteur AAC.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: 'Si un MKV échoue ?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'La ligne affiche Échec et est ignorée. Les MP4 réussis restent dans un ZIP partiel téléchargeable.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: 'Simple remux (même codec audio) ?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'Non. L’audio est toujours ré-encodé en AAC. La vidéo est copiée quand c’est possible.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: 'Je veux seulement WAV/MP3 de plein de MKV — mauvaise page ?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    'Pour la voix seule : outils d’extraction audio par lots depuis MKV. Ici = MP4 vidéo dans un ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: 'Mon dossier est-il envoyé au serveur ?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    'Non. La conversion se fait dans le navigateur ; les fichiers restent sur l’appareil sans envoi au serveur. Les scripts du moteur se chargent une fois depuis ce site.',
};

export default fr;
