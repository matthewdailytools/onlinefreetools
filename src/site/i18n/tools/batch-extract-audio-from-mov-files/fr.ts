import type { SiteLangDict } from '../../../types';

/**
 * Français : plusieurs MOV locaux → ZIP audio (uniquement .mov, séquentiel, pas YouTube).
 * Direction recherche : « extraire audio mov lot », « plusieurs mov en mp3 ».
 */
const fr: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: 'Extraire l’audio de plusieurs fichiers MOV',
	tool_batch_extract_audio_from_mov_files_desc:
		'File MOV locale uniquement : un par un, échecs ignorés, ZIP WAV/MP3. Aucun envoi serveur.',
	tool_batch_extract_audio_from_mov_files_description:
		'Extrait l’audio de plusieurs MOV locaux un par un dans le navigateur et enregistre un ZIP WAV ou MP3. Étapes : ajouter des .mov → Extraire → télécharger le ZIP. Exemple : « Charger un exemple » crée deux courts MOV synthétiques et emballe les audios. Par fichier, mêmes plafonds demux+OPFS que l’outil MOV unique (avec OPFS ~5 GiB / 6 h, sinon ~1 GiB). Lignes en échec ignorées, succès emballés. Sur l’appareil — pas d’upload. Pas YouTube. Un seul fichier → « Extraire l’audio d’un fichier MOV ». MP4/WebM/MKV mélangés → « Extraire l’audio de fichiers vidéo (lot) ».',
	tool_batch_extract_audio_from_mov_files_article:
		'Un dossier de MOV téléphone veut souvent seulement la piste AAC. Cette page n’accepte que .mov, refuse les autres extensions, extrait en série pour la RAM et met les succès dans un ZIP. Ce n’est ni un extracteur YouTube ni un hub multi-conteneurs.',
	tool_batch_extract_audio_from_mov_files_choose: 'Choisir des fichiers MOV',
	tool_batch_extract_audio_from_mov_files_hint:
		'Jusqu’à 30 .mov locaux. Autres formats refusés — voir lot mixte. Limite par fichier = outil MOV unique.',
	tool_batch_extract_audio_from_mov_files_list_label: 'File MOV',
	tool_batch_extract_audio_from_mov_files_convert: 'Extraire',
	tool_batch_extract_audio_from_mov_files_stop: 'Arrêter',
	tool_batch_extract_audio_from_mov_files_download: 'Télécharger le ZIP',
	tool_batch_extract_audio_from_mov_files_sample: 'Charger un exemple',
	tool_batch_extract_audio_from_mov_files_clear: 'Effacer',
	tool_batch_extract_audio_from_mov_files_advanced: 'Format d’export (optionnel)',
	tool_batch_extract_audio_from_mov_files_format_label: 'Format de sortie',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV (16 bits)',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'Débit MP3',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'Courts MOV : WAV par défaut. Gros fichiers peuvent forcer MP3 en flux par ligne. Pas d’URL/YouTube.',
	tool_batch_extract_audio_from_mov_files_progress: 'Progression extraction MOV en lot',
	tool_batch_extract_audio_from_mov_files_read: 'Lecture',
	tool_batch_extract_audio_from_mov_files_decode: 'Demux',
	tool_batch_extract_audio_from_mov_files_extract: 'Extraction',
	tool_batch_extract_audio_from_mov_files_write: 'Écriture',
	tool_batch_extract_audio_from_mov_files_pack: 'Emballage ZIP',
	tool_batch_extract_audio_from_mov_files_done: 'Terminé. Téléchargez le ZIP des audios extraits.',
	tool_batch_extract_audio_from_mov_files_failed: 'Échec du lot. Retirez les MOV corrompus ou réduisez le nombre.',
	tool_batch_extract_audio_from_mov_files_elapsed: 'Écoulé {s} s',
	tool_batch_extract_audio_from_mov_files_preview: 'Résultat du lot',
	tool_batch_extract_audio_from_mov_files_result: '{n} audios emballés · ZIP {output} KiB',
	tool_batch_extract_audio_from_mov_files_partial: '{ok} ok, {fail} échec · ZIP succès seulement ({output} KiB)',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: 'Ajoutez au moins un MOV ou chargez un exemple.',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'Aucun MOV. Déposez des .mov locaux ou chargez un exemple. Pas YouTube, pas de non-MOV.',
	tool_batch_extract_audio_from_mov_files_remove: 'Retirer',
	tool_batch_extract_audio_from_mov_files_queue_count: '{n} MOV dans la file',
	tool_batch_extract_audio_from_mov_files_status_pending: 'En attente',
	tool_batch_extract_audio_from_mov_files_status_running: 'Extraction…',
	tool_batch_extract_audio_from_mov_files_status_ok: 'Terminé',
	tool_batch_extract_audio_from_mov_files_status_fail: 'Échec',
	tool_batch_extract_audio_from_mov_files_status_stopped: 'Arrêté',
	tool_batch_extract_audio_from_mov_files_err_file: 'Ajoutez uniquement des .mov.',
	tool_batch_extract_audio_from_mov_files_err_format:
		'Uniquement .mov. Pour MP4, WebM ou MKV : lot vidéo mixte.',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'MOV au-delà du plafond demux (OPFS ~5 GiB / 6 h, sinon ~1 GiB). Ligne ignorée.',
	tool_batch_extract_audio_from_mov_files_err_container:
		'MOV ISOBMFF non demuxable. Ligne ignorée.',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'MOV avec codec audio non décodé ici. Ligne ignorée.',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'MOV avec disposition de canaux non prise en charge. Ligne ignorée.',
	tool_batch_extract_audio_from_mov_files_err_decode: 'Le navigateur n’a pas pu décoder l’audio du MOV. Ligne ignorée.',
	tool_batch_extract_audio_from_mov_files_err_encoder: 'Échec d’export audio. Vérifiez le format et réessayez.',
	tool_batch_extract_audio_from_mov_files_err_zip: 'Impossible de créer le ZIP. Réduisez le nombre de MOV.',
	tool_batch_extract_audio_from_mov_files_err_too_many: 'Maximum 30 MOV dans la file.',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'Impossible de créer des MOV d’exemple ici. Déposez vos .mov.',
	tool_batch_extract_audio_from_mov_files_err_unsupported: 'Web Audio requis pour l’extraction est absent.',
	tool_batch_extract_audio_from_mov_files_err_empty: 'Aucun audio utilisable dans la file MOV.',
	tool_batch_extract_audio_from_mov_files_forced_mp3: 'Ce long/gros MOV a forcé le MP3 en flux sur cette ligne.',
	tool_batch_extract_audio_from_mov_files_how_title: 'Comment extraire l’audio de plusieurs MOV',
	tool_batch_extract_audio_from_mov_files_how_body:
		'Mettre en file des MOV locaux, extraire un par un, télécharger le ZIP — sans upload ni collage d’URL.',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'Choisir plusieurs .mov locaux ou « Charger un exemple » pour deux courts MOV synthétiques.',
	tool_batch_extract_audio_from_mov_files_how_item_2: 'Si besoin, ouvrir « Format d’export » pour MP3 et le débit.',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'Cliquer « Extraire » : Lecture → Demux → Extraction → Écriture par fichier. « Arrêter » annule le reste.',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'Après le HUD : « Télécharger le ZIP ». Échecs ignorés ; ≥1 succès → emballage.',
	tool_batch_extract_audio_from_mov_files_why_choose_title: 'Pourquoi ce lot MOV ?',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'MOV seul — pas de mélange silencieux MP4/WebM/MKV dans un dossier « plusieurs mov en mp3 ».',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'Extraction séquentielle pour garder la RAM stable sur des MOV téléphone de plusieurs GiB (AAC ISOBMFF).',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'Statut par ligne En attente/Extraction/Terminé/Échec — un mauvais MOV ne casse pas tout le ZIP.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'« Arrêter » coupe le reste. Le téléchargement ZIP reste désactivé tant qu’il n’y a pas d’archive réelle.',
	tool_batch_extract_audio_from_mov_files_rules_title: 'File MOV, séquentiel, ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'Classer chaque MOV, extraire seul, mettre dans le ZIP. Succès partiels conservés. Pas YouTube→MP3, pas de réencodage vidéo muet.',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'Jusqu’à 30 .mov ; plafond demux par fichier (OPFS ~5 GiB / 6 h).',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'Non-MOV refusés à l’ajout — MP4/WebM/MKV → hub mixte.',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'Échec de ligne = cette ligne seulement ; ≥1 succès → emballage.',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'Tout dans le navigateur sur l’appareil — pas d’envoi serveur.',
	tool_batch_extract_audio_from_mov_files_example_title: 'Tester un vrai lot MOV',
	tool_batch_extract_audio_from_mov_files_example:
		'Charger un exemple crée deux courts MOV avec son (si MediaRecorder gère H.264+AAC), extrait et met deux audios dans le ZIP.',
	tool_batch_extract_audio_from_mov_files_usecases_title: 'Cas d’usage',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'Dossier de MOV téléphone vers ZIP audio façon « mov en mp3 lot », sans cloud.',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'Captures d’écran MOV d’une semaine en audios partageables — local, pas YouTube.',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'Collecter l’AAC des rushes caméra et garder les MOV originaux intacts.',
	tool_batch_extract_audio_from_mov_files_faq_q1: 'Puis-je coller des URL ou playlists YouTube ?',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'Non. Uniquement des .mov locaux via dépôt ou sélection. Enregistrez d’abord sur l’appareil.',
	tool_batch_extract_audio_from_mov_files_faq_q2: 'J’ai un seul MOV — cette page ?',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'Un fichier → outil MOV unique. Cette page est pour plusieurs MOV et un ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q3: 'Dossier avec .mov et .mp4 mélangés ?',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'Ici seulement .mov. Conteneurs mixtes : « Extraire l’audio de fichiers vidéo (lot) ».',
	tool_batch_extract_audio_from_mov_files_faq_q4: 'Est-ce un « mov en mp3 lot » en ligne ?',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'Même intention pour MOV locaux : demux AAC, ZIP MP3/WAV sur l’appareil — sans récupération d’URL.',
	tool_batch_extract_audio_from_mov_files_faq_q5: 'Pourquoi séquentiel plutôt que parallèle ?',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'Le décodage parallèle fait exploser la RAM. En série, seul l’audio courant reste pour le ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q6: 'Les vidéos sont-elles envoyées sur un serveur ?',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'Non. Lecture, demux et ZIP restent dans le navigateur sur votre appareil.',
};
export default fr;
