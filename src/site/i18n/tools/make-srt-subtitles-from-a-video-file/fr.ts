import type { SiteLangDict } from '../../../types';

/**
 * French (fr) copy for make-srt-subtitles-from-a-video-file.
 * Local search: vidéo vers srt / sous-titres depuis une vidéo / générer srt vidéo.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: sans envoi au serveur; fichiers restent sur l’appareil.
 */
const fr: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: 'Créer des sous-titres SRT depuis un fichier vidéo',
  tool_make_srt_subtitles_from_a_video_file_desc:
    'Transforme une vidéo locale avec parole en pistes .srt temporisées avec Whisper sur l’appareil—les fichiers restent sur l’appareil et ne sont pas envoyés à un serveur.',
  tool_make_srt_subtitles_from_a_video_file_description:
    'Créez des sous-titres SRT temporisés à partir d’un fichier vidéo local dans le navigateur avec Whisper sur l’appareil : les fichiers restent sur votre appareil et ne sont pas envoyés à un serveur. Étapes : choisir une vidéo avec dialogue, la lire pour vérifier le clip, langue (ou auto), Créer SRT, éditer les pistes, télécharger le .srt. Exemple : Exemple lance un MP4 parlé court dans Whisper. Le premier passage télécharge environ 45 Mo une fois (puis cache). WAV/MP3 audio seul vont sur Créer des sous-titres SRT depuis un fichier audio. Pas d’incrustation ; horodatages issus des segments Whisper.',
  tool_make_srt_subtitles_from_a_video_file_article:
    'Qui cherche « vidéo vers srt » ou « générer srt vidéo » veut un fichier de sous-titres temporisés téléchargeable depuis un rush local—pas une page de mémo vocal. Cet outil exécute Whisper tiny sur l’appareil via des scripts same-origin /vendor/whisper : décode la piste audio de la vidéo dans l’onglet, affiche un aperçu vidéo pour croiser dialogue et image, obtient les horodatages de segments, formate un SRT standard éditable, puis télécharge. Les fichiers audio purs sont refusés avec un lien clair vers Créer des sous-titres SRT depuis un fichier audio. Pas de chemin micro ici. Le premier passage télécharge environ 45 Mo une fois et les met en cache. Les temps de cue sont des bornes de segments Whisper, pas un alignement forcé image par image, et la page n’incruste pas les sous-titres dans la vidéo.',
  tool_make_srt_subtitles_from_a_video_file_choose: 'Choisir un fichier vidéo',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'MP4, WebM, MOV local ou autre vidéo que le navigateur peut décoder—jusqu’à environ 120 Mio et environ 2 heures après décodage. Le fichier doit inclure une piste audio utilisable. Les longs clips utilisent des fenêtres glissantes (fenêtre n sur N ; Arrêter conserve un SRT partiel si possible). L’audio pur appartient à l’outil SRT audio lié.',
  tool_make_srt_subtitles_from_a_video_file_lang_label: 'Langue de la parole',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    'Auto laisse Whisper détecter la langue parlée sur la piste. Choisissez une langue si vous la connaissez pour des pistes plus stables.',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: 'Détection automatique',
  tool_make_srt_subtitles_from_a_video_file_lang_en: 'Anglais',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: 'Chinois',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'Espagnol',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: 'Japonais',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'Allemand',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'Français',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'Portugais',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'Indonésien',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'Arabe',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'Russe',
  tool_make_srt_subtitles_from_a_video_file_convert: 'Créer SRT',
  tool_make_srt_subtitles_from_a_video_file_stop: 'Arrêter',
  tool_make_srt_subtitles_from_a_video_file_download: 'Télécharger SRT',
  tool_make_srt_subtitles_from_a_video_file_sample: 'Exemple',
  tool_make_srt_subtitles_from_a_video_file_clear: 'Effacer',
  tool_make_srt_subtitles_from_a_video_file_source_play: 'Lire la vidéo originale',
  tool_make_srt_subtitles_from_a_video_file_advanced: 'Limites honnêtes',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny tourne dans cet onglet depuis /vendor/whisper same-origin. Le premier Créer SRT télécharge environ 45 Mo une fois, puis réutilise le cache. Les longs clips utilisent des fenêtres (~2 minutes). Les temps suivent les segments Whisper—pas d’alignement forcé image par image. Cette page n’accepte que la vidéo et n’incruste pas les sous-titres. Pour des mémos vocaux sans image, utilisez l’outil SRT audio lié.',
  tool_make_srt_subtitles_from_a_video_file_progress: 'Progression des sous-titres',
  tool_make_srt_subtitles_from_a_video_file_hud_title: 'Progression des sous-titres',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: 'Terminé. Étape suivante : éditez les pistes si besoin, puis Télécharger SRT.',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'Impossible de terminer le SRT',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint:
    'Essayez une autre vidéo, un clip plus court ou Exemple. Les fichiers restent sur votre appareil.',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: 'Téléchargement de {file} — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: 'Démarrage…',
  tool_make_srt_subtitles_from_a_video_file_model: 'Modèle',
  tool_make_srt_subtitles_from_a_video_file_decode: 'Décoder',
  tool_make_srt_subtitles_from_a_video_file_transcribe: 'Transcrire',
  tool_make_srt_subtitles_from_a_video_file_write: 'Écrire SRT',
  tool_make_srt_subtitles_from_a_video_file_done: 'Prêt. Éditez le SRT si besoin, puis Télécharger SRT.',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'Impossible de créer le SRT. Essayez Exemple, une vidéo parlée plus claire, ou un clip plus court d’environ 2 heures max.',
  tool_make_srt_subtitles_from_a_video_file_elapsed: '{s}s écoulées',
  tool_make_srt_subtitles_from_a_video_file_preview: 'Aperçu SRT',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} pistes · {chars} caractères',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'Choisissez un fichier vidéo local avec de la parole sur la piste.',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'Pas encore de SRT. Déposez une vidéo avec dialogue et cliquez Créer SRT. Exemple passe un MP4 parlé court dans Whisper sur l’appareil. Lisez l’aperçu pour croiser image et pistes. Les fichiers restent sur votre appareil.',
  tool_make_srt_subtitles_from_a_video_file_file_label: 'Vidéo : {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: 'Chargement du modèle Whisper sur l’appareil (le premier passage peut télécharger ~45 Mo)…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'Décodage de la piste audio de la vidéo dans cet onglet…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'Transcription avec Whisper…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: 'Transcription de la fenêtre {n} sur {total}…',
  tool_make_srt_subtitles_from_a_video_file_status_write: 'Écriture des pistes SRT temporisées…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: 'Arrêté. SRT partiel conservé si des pistes étaient déjà disponibles.',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'Choisissez un fichier vidéo local, ou utilisez Exemple.',
  tool_make_srt_subtitles_from_a_video_file_err_format:
    'Type non pris en charge. Utilisez un conteneur vidéo courant que le navigateur peut décoder (par ex. MP4 ou WebM) avec une piste audio.',
  tool_make_srt_subtitles_from_a_video_file_err_limit:
    'Utilisez une vidéo jusqu’à environ 120 Mio et environ 2 heures après décodage. Les très longs clips sur téléphones à faible mémoire peuvent encore échouer—coupez ou compressez d’abord.',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'Le navigateur n’a pas pu décoder une piste audio utilisable depuis cette vidéo. Vidéo muette, audio manquant ou codec non pris en charge échouent ici.',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'Web Audio nécessaire pour ce chemin est indisponible dans ce navigateur.',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper n’a produit aucun texte de parole utilisable. Essayez un autre clip ou réglage de langue.',
  tool_make_srt_subtitles_from_a_video_file_err_model:
    'Impossible de charger le modèle Whisper sur l’appareil depuis ce site. Restez en ligne pour le premier téléchargement, puis réessayez.',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'Cette page n’accepte que des fichiers vidéo. Pour WAV, MP3 ou autre parole audio seule, utilisez Créer des sous-titres SRT depuis un fichier audio.',
  tool_make_srt_subtitles_from_a_video_file_how_title: 'Comment créer des sous-titres SRT depuis un fichier vidéo',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    'Choisissez une vidéo locale avec parole, prévisualisez le clip, lancez Whisper sur l’appareil pour des pistes temporisées, éditez le SRT, puis téléchargez.',
  tool_make_srt_subtitles_from_a_video_file_how_item_1:
    'Choisissez un fichier vidéo local (ou Exemple) et Détection automatique ou une langue de la parole.',
  tool_make_srt_subtitles_from_a_video_file_how_item_2:
    'Lisez la vidéo originale si vous voulez croiser dialogue et image, puis cliquez Créer SRT.',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    'Suivez la carte de progression : Modèle, Décoder, Transcrire (fenêtre n sur N pour les longs fichiers), puis Écrire SRT. Arrêter annule et conserve un SRT partiel si possible.',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: 'Éditez l’aperçu SRT si besoin, puis Télécharger SRT.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: 'Pourquoi utiliser Créer des sous-titres SRT depuis un fichier vidéo',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    'Priorité vidéo : aperçu du clip dans la page, puis .srt depuis la piste avec Whisper sur l’appareil—le rush n’est pas envoyé à nos serveurs pour l’ASR.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    'Séparation nette de l’outil SRT audio : cette page refuse l’audio pur et n’a pas de micro, pour que les recherches « vidéo vers srt » ne tombent pas dans une UI de mémo vocal.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    'Coût du premier passage affiché clairement (~45 Mo une fois) et HUD avec progression par fenêtres glissantes sur les longs rushs.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    'Seulement un .srt éditable à côté—pas incrusté dans la vidéo. Les outils liés couvrent le SRT audio seul et la vidéo de forme d’onde.',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'Règles SRT et limites de Whisper sur vidéo',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'Whisper tiny tourne dans le navigateur depuis des assets same-origin. Le navigateur doit décoder une piste audio utilisable depuis votre vidéo. Les plafonds de taille et de durée gardent l’onglet utilisable.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    'Conteneurs vidéo uniquement (par ex. MP4, WebM, MOV). Les fichiers audio seuls doivent utiliser la page SRT audio liée.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'Environ 120 Mio et environ 2 heures après décodage, transcrits en fenêtres glissantes. Les fichiers plus longs ou plus lourds affichent une erreur de limite claire.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'Les horodatages sont des bornes de segments Whisper—utiles pour les lecteurs, pas un alignement forcé image par image sur les coupes.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Votre vidéo reste sur l’appareil pour Whisper. Cette page n’incruste pas les sous-titres dans le fichier et ne télécharge pas de sous-titres depuis des plateformes vidéo.',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'Essayer le clip vidéo d’exemple',
  tool_make_srt_subtitles_from_a_video_file_example:
    'Exemple récupère un MP4 parlé court, lance Créer SRT via Whisper sur l’appareil et remplit l’aperçu SRT. La page ne lance pas l’exemple à l’ouverture pour que le premier téléchargement de modèle ~45 Mo ne touche pas chaque visiteur.',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'Quand c’est utile',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    'Vous avez un entretien, talking-head ou enregistrement d’écran MP4 local et besoin d’un .srt téléchargeable pour un lecteur ou un éditeur.',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    'Vous voulez sous-titrer une vidéo sans envoyer le rush sur un site ASR cloud, et devez prévisualiser l’image en vérifiant les pistes.',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'Vous avez déjà exporté un MP4/WebM depuis un appareil ou un éditeur et besoin d’un SRT de départ à réviser avant publication.',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: 'Pourquoi le premier Créer SRT est-il lent ou volumineux ?',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'Le premier passage télécharge environ 45 Mo de modèle Whisper tiny et WASM depuis ce site dans le cache du navigateur. Les passages suivants réutilisent le cache. Les longues vidéos affichent Transcrire comme fenêtre n sur N ; Arrêter peut annuler et conserver un SRT partiel.',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: 'Whisper sur l’appareil ou envoi vers le cloud ?',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'Créer SRT exécute Whisper tiny sur l’appareil depuis des fichiers vendor same-origin. Votre vidéo reste sur l’appareil et n’est pas envoyée à nos serveurs pour la reconnaissance.',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: 'En quoi cela diffère-t-il de Créer des sous-titres SRT depuis un fichier audio ?',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    'Cet outil lié est pour les mémos vocaux et autres fichiers audio d’abord (et dictée micro optionnelle). Cette page est pour les fichiers vidéo : aperçu vidéo, liste d’acceptation vidéo seule, et formulation vidéo vers srt. Même moteur Whisper sur l’appareil en dessous.',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: 'Puis-je utiliser un WAV ou MP3 ici ?',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    'Non. L’audio pur est refusé pour ne pas mélanger les recherches « vidéo vers srt » dans une UI audio. Ouvrez Créer des sous-titres SRT depuis un fichier audio pour WAV/MP3/M4A.',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'Quelle est la précision des horodatages SRT ?',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'Ils suivent le début et la fin des segments Whisper sur la piste—assez pour la plupart des lecteurs, pas une sync image par image à chaque coupe.',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: 'Peut-on incruster les sous-titres ou les prendre sur YouTube ?',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'Non. Seul un .srt sidecar est téléchargé. La page ne récupère pas non plus les sous-titres auto de YouTube ou d’autres plateformes.',
};
export default fr;
