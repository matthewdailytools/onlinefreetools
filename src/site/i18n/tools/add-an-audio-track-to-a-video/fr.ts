import type { SiteLangDict } from '../../../types';

/**
 * fr copy for add-an-audio-track-to-a-video (F7 V2).
 * How≥4 Why≥4 Rules≥4 FAQ≥5. Fusionne audio local sur vidéo locale ; pas YouTube ; pas seulement muet ; pas seulement extraction.
 */
const fr: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: 'Ajouter une piste audio à une vidéo',
  tool_add_an_audio_track_to_a_video_desc:
    'Fusionnez une bande sonore locale avec une vidéo locale, puis téléchargez. Sur l’appareil uniquement—pas de téléchargement YouTube.',
  tool_add_an_audio_track_to_a_video_description: 'Ajoutez une piste audio à une vidéo locale dans le navigateur en fusionnant l’image avec la bande choisie, puis téléchargez. Étapes : choisissez une vidéo et un audio, Ajouter l’audio, prévisualisez, téléchargez. Exemple : clip muet plus un court WAV. Utilise captureStream et browser media recording—souvent WebM ; pas un remux sans perte. Jamais envoyé. Pas de téléchargement YouTube.',
  tool_add_an_audio_track_to_a_video_article: 'Les clips muets ou faiblement sonorisés ont souvent besoin d’une nouvelle bande avant le partage. Cette page ouvre une vidéo et un audio locaux, capture les images sans les pistes d’origine, décode la bande dans the browser audio engine, combine et réencode avec browser media recording—souvent WebM selon le navigateur. La durée suit la vidéo ; l’audio trop long est tronqué, le trop court s’arrête plus tôt. Elle ne télécharge pas YouTube ni d’autres URL, ne se contente pas de couper le son sans en ajouter, et n’extrait pas l’audio en fichier séparé. Le succès dépend de la lecture des deux fichiers et de browser media recording avec audio. Gardez les originaux. Tout tourne sur votre appareil.',
  tool_add_an_audio_track_to_a_video_choose_video: 'Choisir un fichier vidéo',
  tool_add_an_audio_track_to_a_video_hint_video:
    'Déposez ou choisissez un MP4, WebM, MOV ou M4V local que le navigateur peut lire. Jusqu’à 80 Mio et environ 3 minutes. Pas de YouTube ni collage d’URL.',
  tool_add_an_audio_track_to_a_video_choose_audio: 'Choisir un fichier audio',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'Déposez ou choisissez un WAV, MP3, M4A ou similaire local que le navigateur peut décoder. Jusqu’à 40 Mio.',
  tool_add_an_audio_track_to_a_video_convert: 'Ajouter l’audio',
  tool_add_an_audio_track_to_a_video_download: 'Télécharger',
  tool_add_an_audio_track_to_a_video_sample: 'Charger l’exemple',
  tool_add_an_audio_track_to_a_video_clear: 'Effacer',
  tool_add_an_audio_track_to_a_video_advanced: 'Notes de fusion',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'Les navigateurs réencodent souvent via browser media recording après suppression des pistes d’origine et ajout de votre bande. Sortie souvent WebM, pas un remux sans perte. Cette page ne télécharge jamais YouTube.',
  tool_add_an_audio_track_to_a_video_progress: 'Progression ajout audio',
  tool_add_an_audio_track_to_a_video_read: 'Lire',
  tool_add_an_audio_track_to_a_video_decode: 'Décoder',
  tool_add_an_audio_track_to_a_video_merge: 'Fusionner',
  tool_add_an_audio_track_to_a_video_write: 'Écrire',
  tool_add_an_audio_track_to_a_video_done: 'Prêt. Prévisualisez la vidéo fusionnée, puis téléchargez.',
  tool_add_an_audio_track_to_a_video_failed:
    'Impossible de fusionner l’audio sur cette vidéo. Essayez des fichiers plus courts lisibles.',
  tool_add_an_audio_track_to_a_video_elapsed: '{s}s écoulées',
  tool_add_an_audio_track_to_a_video_preview: 'Prévisualiser la vidéo fusionnée',
  tool_add_an_audio_track_to_a_video_result: '{seconds}s · avec audio · {mime} · {output} Kio',
  tool_add_an_audio_track_to_a_video_sample_name: 'exemple-ajout-audio',
  tool_add_an_audio_track_to_a_video_empty: 'Choisissez une vidéo et un audio locaux, ou chargez d’abord l’exemple.',
  tool_add_an_audio_track_to_a_video_empty_state:
    'Pas encore de fichiers. Déposez une vidéo et une bande locales, ou chargez l’exemple. Cet outil fusionne l’audio sur l’image—pas seulement muet, pas seulement extraction, pas de YouTube.',
  tool_add_an_audio_track_to_a_video_video_label: 'Vidéo : {name}',
  tool_add_an_audio_track_to_a_video_audio_label: 'Audio : {name}',
  tool_add_an_audio_track_to_a_video_err_file: 'Choisissez un fichier vidéo et un fichier audio locaux pris en charge.',
  tool_add_an_audio_track_to_a_video_err_format:
    'Fichiers non pris en charge ou illisibles. Utilisez des types vidéo/audio courants décodables. Pas d’URL YouTube.',
  tool_add_an_audio_track_to_a_video_err_limit:
    'Utilisez une vidéo locale jusqu’à 80 Mio / environ 3 minutes, et un audio jusqu’à 40 Mio.',
  tool_add_an_audio_track_to_a_video_err_decode:
    'Le navigateur n’a pas pu décoder la vidéo ou l’audio. Essayez un autre conteneur ou un clip plus court.',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'browser media recording n’a pas pu écrire la vidéo fusionnée. Essayez Chrome/Edge ou un WebM/MP4 plus court plus WAV/MP3.',
  tool_add_an_audio_track_to_a_video_how_title: 'Comment ajouter une piste audio à une vidéo',
  tool_add_an_audio_track_to_a_video_how_body:
    'Choisissez une vidéo et un audio locaux, lancez Ajouter l’audio, prévisualisez, puis téléchargez—sans envoi et sans YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'Choisissez une vidéo et un audio locaux (ou chargez l’exemple). Ne collez pas de liens YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_2:
    'Cliquez sur Ajouter l’audio et attendez Lire → Décoder → Fusionner → Écrire.',
  tool_add_an_audio_track_to_a_video_how_item_3:
    'Prévisualisez. Vous devez entendre la nouvelle bande avec l’image.',
  tool_add_an_audio_track_to_a_video_how_item_4:
    'Vérifiez la ligne de résultat, puis cliquez sur Télécharger.',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'Pourquoi choisir nos outils pour ajouter une piste audio',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    'Voyez durée, type MIME et taille de sortie (Kio) avant d’enregistrer.',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    'Une fusion claire avec des limites browser media recording honnêtes—pas de fausse promesse de remux sans perte.',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    'Lecture et enregistrement sur votre appareil ; la page n’envoie pas vos fichiers pour les traiter.',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'Changer l’un des fichiers efface l’ancien téléchargement pour éviter une fusion obsolète.',
  tool_add_an_audio_track_to_a_video_rules_title: 'Règles de fusion et limites honnêtes du navigateur',
  tool_add_an_audio_track_to_a_video_rules_body:
    'Chaque passage retire les pistes d’origine, ajoute votre bande et réencode avec browser media recording. Sortie souvent WebM. Pas YouTube, pas seulement muet, pas extraction audio.',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'Une vidéo locale jusqu’à 80 Mio et environ trois minutes, plus un audio local jusqu’à 40 Mio. Lecture/décodage d’abord.',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    'La durée suit la vidéo. Audio plus long tronqué ; plus court s’arrête avant la fin de l’image.',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'Pas de YouTube, d’URL podcast ou de téléchargement distant. Le collage n’est pas pris en charge.',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'Conteneurs et codecs peuvent changer. Gardez les originaux ; le téléchargement est un nouveau fichier réencodé.',
  tool_add_an_audio_track_to_a_video_example_title: 'Essayez un court clip muet plus un ton',
  tool_add_an_audio_track_to_a_video_example:
    'Charger l’exemple crée une courte vidéo canvas et un ton simple, puis Ajouter l’audio s’exécute. Vous voyez l’image avec la nouvelle bande. La lecture ne démarre pas seule—appuyez sur lecture si besoin.',
  tool_add_an_audio_track_to_a_video_usecases_title: 'Quand cela aide',
  tool_add_an_audio_track_to_a_video_usecase_1:
    'Enregistrement d’écran muet et lit WAV—fusionnez ici, puis téléchargez pour partager.',
  tool_add_an_audio_track_to_a_video_usecase_2:
    'Remplacer une piste intégrée faible par une bande locale plus claire sans installer d’éditeur bureau.',
  tool_add_an_audio_track_to_a_video_usecase_3: 'Vous avez une capture muette et une voix off séparée à assembler avant envoi.',
  tool_add_an_audio_track_to_a_video_faq_q1: 'Peut-il télécharger YouTube ou coller une URL ?',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'Non. Uniquement des fichiers locaux que vous avez déjà. Pas de téléchargeur YouTube ni de récupération distante.',
  tool_add_an_audio_track_to_a_video_faq_q2: 'Est-ce la même chose que retirer l’audio d’une vidéo ?',
  tool_add_an_audio_track_to_a_video_faq_a2:
    'Non. Couper/retirer le son est un autre travail. Cette page ajoute une nouvelle bande à l’image.',
  tool_add_an_audio_track_to_a_video_faq_q3: 'Extrait-il l’audio en téléchargement séparé ?',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'Non. Extraire l’audio d’une vidéo est un autre outil. Ici le résultat est une vidéo avec son fusionné.',
  tool_add_an_audio_track_to_a_video_faq_q4: 'La sortie sera-t-elle le même MP4 que la source ?',
  tool_add_an_audio_track_to_a_video_faq_a4:
    'En général non. Les navigateurs réencodent typiquement avec browser media recording, souvent en WebM. Qualité et conteneur peuvent changer.',
  tool_add_an_audio_track_to_a_video_faq_q5: 'Quelque chose est-il envoyé à un serveur ?',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'Non. Décodage et enregistrement tournent dans le navigateur sur votre appareil. Un réseau est besoin au premier chargement ; l’hors-ligne n’est pas garanti.',
  tool_add_an_audio_track_to_a_video_faq_q6: 'Et si l’audio est plus long que la vidéo ?',
  tool_add_an_audio_track_to_a_video_faq_a6:
    'La fusion suit la durée vidéo. L’audio au-delà de la fin de l’image n’est pas conservé dans le téléchargement.',
};
export default fr;
