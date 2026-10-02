import type { SiteLangDict } from '../../../types';

/**
 * Français: Extraire l’audio d’un fichier WebM.
 * Uniquement .webm ; chemin MediaElement de secours (~500 Mio / 4 h)—pas de démux 5 Gio.
 * Traitement local ; sortie WAV ou MP3 ; pas d’URL YouTube.
 */
const fr: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: 'Extraire l’audio d’un fichier WebM',
  tool_extract_audio_from_a_webm_file_desc:
    'Extraire l’audio Opus/Vorbis d’un WebM local en WAV ou MP3 sur l’appareil. Secours navigateur ~500 Mio / 4 h—aucun démux 5 Gio.',
  tool_extract_audio_from_a_webm_file_description:
    'Extraire la piste audio d’un WebM local dans le navigateur, puis télécharger WAV ou MP3. Étapes : choisir un WebM → Extraire → écouter → télécharger. Exemple : Charger un exemple crée un court WebM synthétique si MediaRecorder est disponible. Cette page WebM utilise le secours MediaElement partagé (~500 Mio / 4 h)—les fichiers trop gros échouent vite avec err_container. Le gros démux MP4/MOV est sur ces pages de format ou le hub vidéo. Local uniquement—pas de téléchargement YouTube ni d’URL. Jamais envoyé au serveur. Plusieurs WebM ? Utilisez Extraire l’audio de fichiers WebM par lots.',
  tool_extract_audio_from_a_webm_file_article:
    'Les captures d’écran et enregistrements navigateur partent souvent en WebM avec Opus. Cette page n’accepte que .webm, passe par le chemin de secours du tableau de capacités d’extraction, et écrit WAV ou MP3 sans upload. Elle ne prétend pas au démux ISOBMFF ni au streaming OPFS multi-gigaoctets—c’est pour MP4/MOV. Elle ne récupère pas d’URL YouTube. Les dossiers mixtes vont sur le hub ou le lot hub.',
  tool_extract_audio_from_a_webm_file_choose: 'Choisir un fichier WebM',
  tool_extract_audio_from_a_webm_file_hint:
    'Déposez un .webm local. Plafond de secours ~500 Mio / 4 h. Au-delà, message conteneur clair—remuxer en MP4 pour le gros démux, ou réduire le fichier.',
  tool_extract_audio_from_a_webm_file_convert: 'Extraire',
  tool_extract_audio_from_a_webm_file_download: 'Télécharger',
  tool_extract_audio_from_a_webm_file_download_wav: 'Télécharger WAV',
  tool_extract_audio_from_a_webm_file_download_mp3: 'Télécharger MP3',
  tool_extract_audio_from_a_webm_file_sample: 'Charger un exemple',
  tool_extract_audio_from_a_webm_file_clear: 'Effacer',
  tool_extract_audio_from_a_webm_file_advanced: 'Format d’export',
  tool_extract_audio_from_a_webm_file_format_label: 'Format de sortie',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV (16 bits)',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'Débit MP3',
  tool_extract_audio_from_a_webm_file_settings_hint:
    'WAV par défaut pour les courts WebM. Les clips plus longs peuvent streamer en MP3. Le plafond est le secours (~500 Mio), pas le démux MP4. Pas d’URL.',
  tool_extract_audio_from_a_webm_file_progress: 'Progression de l’extraction',
  tool_extract_audio_from_a_webm_file_read: 'Lecture',
  tool_extract_audio_from_a_webm_file_decode: 'Décodage',
  tool_extract_audio_from_a_webm_file_extract: 'Extraction',
  tool_extract_audio_from_a_webm_file_write: 'Écriture',
  tool_extract_audio_from_a_webm_file_done: 'Prêt. Écoutez l’audio, puis téléchargez WAV ou MP3.',
  tool_extract_audio_from_a_webm_file_failed:
    'Échec de l’extraction. Essayez un WebM plus petit que le navigateur peut décoder.',
  tool_extract_audio_from_a_webm_file_elapsed: '{s}s écoulées',
  tool_extract_audio_from_a_webm_file_preview: 'Écouter l’audio extrait',
  tool_extract_audio_from_a_webm_file_result: '{seconds}s · {channels} can. · {rate} Hz · {format} {output} Kio',
  tool_extract_audio_from_a_webm_file_sample_name: 'demo-webm-audio-court',
  tool_extract_audio_from_a_webm_file_empty: 'Choisissez d’abord un fichier WebM ou chargez l’exemple.',
  tool_extract_audio_from_a_webm_file_empty_state:
    'Aucun fichier. Déposez un .webm local (~500 Mio) ou Charger un exemple. Pas YouTube.',
  tool_extract_audio_from_a_webm_file_err_file: 'Déposez exactement un fichier WebM.',
  tool_extract_audio_from_a_webm_file_err_format:
    'Fichier non pris en charge. Utilisez uniquement un .webm (video/webm) sur cette page.',
  tool_extract_audio_from_a_webm_file_err_limit:
    'Ce WebM dépasse une limite de durée ou de taille du chemin de secours.',
  tool_extract_audio_from_a_webm_file_err_container:
    'Ce WebM dépasse le plafond de secours (~500 Mio / 4 h) ou n’est pas décodable ici. Remuxez en MP4 pour le gros démux, ou utilisez un WebM plus petit.',
  tool_extract_audio_from_a_webm_file_err_codec:
    'Le codec audio de ce WebM n’est pas pris en charge sur le chemin de secours navigateur.',
  tool_extract_audio_from_a_webm_file_err_channels:
    'Cette piste utilise une disposition de canaux que l’extracteur ne gère pas.',
  tool_extract_audio_from_a_webm_file_err_decode: 'Le navigateur n’a pas pu décoder l’audio de ce WebM.',
  tool_extract_audio_from_a_webm_file_err_encoder: 'Impossible d’écrire le fichier audio. Réessayez Extraire.',
  tool_extract_audio_from_a_webm_file_err_sample:
    'Impossible de créer un WebM d’exemple. Déposez votre propre .webm.',
  tool_extract_audio_from_a_webm_file_err_unsupported:
    'Ce navigateur n’a pas Web Audio nécessaire à l’extraction.',
  tool_extract_audio_from_a_webm_file_err_empty: 'Aucun échantillon audio utilisable n’a été capturé.',
  tool_extract_audio_from_a_webm_file_stop: 'Arrêter',
  tool_extract_audio_from_a_webm_file_status_stopped: 'Arrêté. Aucun fichier audio partiel n’est conservé.',
  tool_extract_audio_from_a_webm_file_forced_mp3:
    'Entrée longue/grande : MP3 en streaming sur le chemin de secours.',
  tool_extract_audio_from_a_webm_file_how_title: 'Comment extraire l’audio d’un fichier WebM',
  tool_extract_audio_from_a_webm_file_how_body:
    'Déposez un WebM local, choisissez WAV ou MP3, Extraire, écoutez, téléchargez—sans upload.',
  tool_extract_audio_from_a_webm_file_how_item_1:
    'Choisissez un .webm local (~500 Mio), ou Charger un exemple si MediaRecorder fonctionne.',
  tool_extract_audio_from_a_webm_file_how_item_2:
    'Ouvrez Format d’export et choisissez WAV ou MP3 ; réglez le débit si besoin.',
  tool_extract_audio_from_a_webm_file_how_item_3:
    'Cliquez Extraire et attendez Lecture → Décodage → Extraction → Écriture (ou Arrêter).',
  tool_extract_audio_from_a_webm_file_how_item_4: 'Écoutez, puis Télécharger WAV ou Télécharger MP3.',
  tool_extract_audio_from_a_webm_file_why_choose_title: 'Pourquoi utiliser Extraire l’audio d’un fichier WebM',
  tool_extract_audio_from_a_webm_file_why_choose_item_1:
    'Acceptation WebM seule : les captures écran ne se mêlent pas aux pages MP4.',
  tool_extract_audio_from_a_webm_file_why_choose_item_2:
    'Plafonds de secours honnêtes—pas de marketing faux démux 5 Gio pour WebM.',
  tool_extract_audio_from_a_webm_file_why_choose_item_3:
    'Traitement sur votre appareil ; Arrêter annule en cours de route.',
  tool_extract_audio_from_a_webm_file_why_choose_item_4:
    'Hub et pages gros fichiers MP4/MOV à proximité quand le démux est nécessaire.',
  tool_extract_audio_from_a_webm_file_rules_title: 'WebM uniquement et limites de secours',
  tool_extract_audio_from_a_webm_file_rules_body:
    'Un WebM local par passage sur le secours MediaElement. Pas YouTube vers MP3. Pas d’export vidéo muette.',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    '~500 Mio / 4 h en secours. Au-delà → err_container. Gros démux aujourd’hui : MP4/MOV seulement.',
  tool_extract_audio_from_a_webm_file_rules_item_2: 'Pas d’URL ni de téléchargement YouTube.',
  tool_extract_audio_from_a_webm_file_rules_item_3: 'Le succès dépend du support WebM/Opus du navigateur.',
  tool_extract_audio_from_a_webm_file_rules_item_4:
    'Le WebM d’origine n’est jamais écrasé. Plusieurs WebM : outil de lot WebM.',
  tool_extract_audio_from_a_webm_file_example_title: 'Essayer une vraie extraction WebM',
  tool_extract_audio_from_a_webm_file_example:
    'Charger un exemple crée un court WebM synthétique si MediaRecorder est dispo, puis Extraire s’exécute. Préférez votre .webm si l’exemple échoue.',
  tool_extract_audio_from_a_webm_file_usecases_title: 'Quand c’est utile',
  tool_extract_audio_from_a_webm_file_usecase_1:
    'Capture d’écran WebM du navigateur → MP3 partageable sans upload.',
  tool_extract_audio_from_a_webm_file_usecase_2:
    'Un clip d’interview WebM dont seule la piste Opus doit devenir WAV.',
  tool_extract_audio_from_a_webm_file_usecase_3:
    'Vous savez déjà que c’est du WebM et voulez une page format dédiée—pas le hub mixte.',
  tool_extract_audio_from_a_webm_file_faq_q1: 'Puis-je coller une URL YouTube ?',
  tool_extract_audio_from_a_webm_file_faq_a1: 'Non. Uniquement un .webm local.',
  tool_extract_audio_from_a_webm_file_faq_q2: 'Pourquoi pas 5 Gio comme la page MP4 ?',
  tool_extract_audio_from_a_webm_file_faq_a2:
    'Le gros démux aujourd’hui est ISOBMFF (MP4/MOV). WebM utilise le secours MediaElement ~500 Mio jusqu’à un démux WebM.',
  tool_extract_audio_from_a_webm_file_faq_q3: 'Est-ce que ça coupe le son d’un WebM (vidéo muette) ?',
  tool_extract_audio_from_a_webm_file_faq_a3: 'Non. Cela extrait seulement l’audio en WAV/MP3.',
  tool_extract_audio_from_a_webm_file_faq_q4: 'Mon fichier est-il envoyé au serveur ?',
  tool_extract_audio_from_a_webm_file_faq_a4: 'Non. Décodage et écriture dans votre navigateur.',
  tool_extract_audio_from_a_webm_file_faq_q5: 'J’ai beaucoup de WebM—quelle page ?',
  tool_extract_audio_from_a_webm_file_faq_a5:
    'Utilisez Extraire l’audio de fichiers WebM par lots pour un ZIP des réussites.',
  tool_extract_audio_from_a_webm_file_faq_q6: 'Puis-je découper après l’extraction ?',
  tool_extract_audio_from_a_webm_file_faq_a6:
    'Pas ici. Téléchargez, puis utilisez Couper un clip audio et exporter.',
};
export default fr;
