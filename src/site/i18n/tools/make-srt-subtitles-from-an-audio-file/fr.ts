import type { SiteLangDict } from '../../../types';

/**
 * Français : sous-titres SRT depuis un fichier audio — Whisper tiny sur l’appareil (q8),
 * mêmes clés que en.ts ; confidentialité : restent sur l’appareil / sans envoi au serveur.
 */
const fr: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: 'Créer des sous-titres SRT depuis un fichier audio',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    'Transformez un enregistrement de parole local en cues .srt minutées avec Whisper tiny dans l’onglet — les fichiers restent sur l’appareil, sans envoi au serveur.',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'Créez des sous-titres SRT minutés depuis un fichier audio ou une piste vidéo locale dans le navigateur, avec Whisper tiny sur l’appareil — fichiers sur l’appareil, sans envoi au serveur. Étapes : choisir un fichier de parole, langue (ou auto), Créer SRT, éditer les cues, télécharger .srt. Exemple : Exemple lance un court clip parlé dans Whisper et affiche le SRT. Premier passage : environ 45 Mo de modèle une fois (puis cache). Pas d’API cloud ; les temps viennent des segments Whisper.',
  tool_make_srt_subtitles_from_an_audio_file_article:
    'Qui cherche « audio vers srt » ou « sous-titres depuis audio » veut un fichier de sous-titres minutés téléchargeable à partir d’un enregistrement local. Cette page exécute Whisper tiny sur l’appareil via les scripts /vendor/whisper du même origine : décoder dans l’onglet, obtenir les horodatages de segments, formater un SRT standard éditable, puis télécharger. Une vidéo avec piste audio est acceptée si le navigateur la décode. Dicter au micro utilise Web Speech seulement s’il est exposé — l’absence d’API speech ne bloque pas Créer SRT. Le premier passage télécharge une fois environ 45 Mo de modèle et les met en cache. Les temps de cue sont les bornes de segments Whisper, pas un alignement forcé image par image ; la page n’incruste pas les sous-titres dans la vidéo.',
  tool_make_srt_subtitles_from_an_audio_file_choose: 'Choisir un fichier de parole',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'WAV, MP3, M4A local ou autre audio que le navigateur peut décoder — jusqu’à environ 120 Mio et environ 2 heures après décodage. Les longs fichiers passent par des fenêtres glissantes (fenêtre n sur N ; Arrêter garde un SRT partiel si possible). Vidéo avec piste audio OK si le décodage réussit ; sinon erreur claire.',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: 'Langue de la parole',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    'Auto laisse Whisper détecter la langue. Choisissez la langue quand vous la connaissez pour des cues plus stables. La dictée micro reprend le même choix si Web Speech est dispo.',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: 'Détection auto',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: 'Anglais',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: 'Chinois',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'Espagnol',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: 'Japonais',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'Allemand',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'Français',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'Portugais',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'Indonésien',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'Arabe',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'Russe',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'Créer SRT',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'Dicter au micro',
  tool_make_srt_subtitles_from_an_audio_file_stop: 'Arrêter',
  tool_make_srt_subtitles_from_an_audio_file_download: 'Télécharger SRT',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'Exemple',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'Effacer',
  tool_make_srt_subtitles_from_an_audio_file_source_play: 'Écouter l’audio d’origine',
  tool_make_srt_subtitles_from_an_audio_file_advanced: 'Limites honnêtes',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny tourne dans cet onglet à partir des fichiers /vendor/whisper du même origine. Le premier Créer SRT télécharge environ 45 Mo une fois, puis réutilise le cache. Les temps de cue suivent les segments Whisper — pas un alignement forcé au frame. Dicter au micro est Web Speech optionnel et peut passer par un service vocal du fabricant. Cette page n’incruste pas les sous-titres dans la vidéo.',
  tool_make_srt_subtitles_from_an_audio_file_progress: 'Progression des sous-titres',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: 'Progression des sous-titres',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next:
    'Terminé. Suite : éditer les cues si besoin, puis Télécharger SRT.',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'Impossible de terminer le SRT',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint:
    'Essayez un autre fichier, un clip plus court, ou Exemple. Les fichiers restent sur l’appareil.',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: 'Téléchargement de {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: 'Démarrage…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'Modèle',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'Décoder',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: 'Transcrire',
  tool_make_srt_subtitles_from_an_audio_file_write: 'Écrire SRT',
  tool_make_srt_subtitles_from_an_audio_file_done: 'Prêt. Éditez le SRT si besoin, puis Télécharger SRT.',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'Impossible de construire le SRT. Essayez Exemple, un enregistrement plus clair, ou un clip plus court sous environ 2 heures.',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: '{s}s écoulées',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'Aperçu SRT',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: 'Provisoire (micro)',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} cues · {chars} caractères',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty:
    'Choisissez un fichier de parole local, ou Dicter au micro quand c’est disponible.',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'Pas encore de SRT. Déposez un fichier de parole et cliquez Créer SRT. Exemple envoie un court clip parlé dans Whisper sur l’appareil. Les fichiers restent sur l’appareil.',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'Média : {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'Dicter au micro est indisponible dans ce navigateur (pas d’API Web Speech). Créer SRT avec Whisper fonctionne toujours pour les fichiers locaux.',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'Whisper a renvoyé peu ou pas de texte de parole. Essayez un enregistrement plus clair ou choisissez la langue parlée.',
  tool_make_srt_subtitles_from_an_audio_file_status_mic:
    'Écoute du micro… parlez clairement, puis Arrêter. Les temps de cue utilisent la durée de session.',
  tool_make_srt_subtitles_from_an_audio_file_status_model:
    'Chargement du modèle Whisper sur l’appareil (le premier passage peut télécharger ~45 Mo)…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'Décodage audio dans cet onglet…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'Transcription avec Whisper…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: 'Transcription de la fenêtre {n} sur {total}…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: 'Arrêté. SRT partiel conservé si des cues étaient déjà disponibles.',
  tool_make_srt_subtitles_from_an_audio_file_status_write: 'Écriture des cues SRT minutées…',
  tool_make_srt_subtitles_from_an_audio_file_err_file:
    'Choisissez un fichier audio ou vidéo local, ou utilisez Exemple.',
  tool_make_srt_subtitles_from_an_audio_file_err_format:
    'Type de média non pris en charge. Utilisez un audio courant, ou une vidéo avec piste audio que le navigateur peut décoder.',
  tool_make_srt_subtitles_from_an_audio_file_err_limit:
    'Utilisez un média jusqu’à environ 120 Mio et environ 2 heures après décodage. Sur téléphone à faible mémoire, un très long clip peut encore échouer—raccourcissez ou compressez d’abord.',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'Le navigateur n’a pas pu décoder ce fichier comme audio. Une vidéo sans piste audio utilisable, ou un codec non supporté, échoue ici.',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported:
    'Les API Web Audio ou speech nécessaires à ce chemin sont indisponibles dans ce navigateur.',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    'Permission micro refusée. Autorisez l’accès pour Dicter au micro, ou utilisez Créer SRT sur un fichier.',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt:
    'Whisper n’a produit aucun texte de parole utilisable. Essayez un autre clip ou un autre réglage de langue.',
  tool_make_srt_subtitles_from_an_audio_file_err_model:
    'Impossible de charger le modèle Whisper sur l’appareil depuis ce site. Restez en ligne pour le premier téléchargement, puis réessayez.',
  tool_make_srt_subtitles_from_an_audio_file_how_title: 'Comment créer des sous-titres SRT depuis un fichier audio',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'Choisissez un fichier de parole local, lancez Whisper sur l’appareil pour des cues minutées, éditez l’aperçu, puis téléchargez le .srt.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1:
    'Choisissez un fichier de parole local (ou Exemple), et sélectionnez Détection auto ou une langue de la parole.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2:
    'Cliquez Créer SRT. Suivez la carte de progression : Modèle, Décoder, Transcrire, puis Écrire SRT.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3:
    'Optionnel : cliquez Dicter au micro si le navigateur prend en charge Web Speech, parlez, puis Arrêter.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4:
    'Éditez l’aperçu SRT si besoin, puis Télécharger SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title:
    'Pourquoi utiliser Créer des sous-titres SRT depuis un fichier audio',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    'Whisper tiny sur l’appareil depuis les fichiers vendor du même origine — votre enregistrement n’est pas envoyé à nos serveurs pour l’ASR (sans envoi au serveur).',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    'Coût du premier passage annoncé : environ 45 Mo de modèle une fois, avec une carte de progression Modèle / Décoder / Transcrire / Écrire SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3:
    'Aperçu .srt standard éditable avant téléchargement — pas seulement du TXT brut, et pas incrusté dans la vidéo.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    'Des outils voisins couvrent la transcription plain text et la vidéo en forme d’onde, sans imposer un éditeur hub.',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'Règles SRT et limites de Whisper sur l’appareil',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    'Cette page exécute Whisper tiny dans le navigateur à partir d’assets du même origine. Les temps de cue viennent des segments du modèle. Les plafonds de taille et de durée gardent l’onglet réactif.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    'Le chemin principal exige le décodage Web Audio plus la pile Whisper sous /vendor/whisper. Dicter au micro exige Web Speech et reste optionnel.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'Environ 120 Mio de taille et environ 2 heures après décodage, en fenêtres glissantes. Un fichier plus long ou plus lourd affiche une erreur de limite claire ; un téléphone à faible mémoire peut nécessiter un clip plus court.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'Les horodatages sont les bornes de segments Whisper — utiles pour les lecteurs, pas un alignement forcé au frame.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'Votre fichier reste sur l’appareil pour Whisper. La dictée micro optionnelle peut encore utiliser un service vocal du fabricant — vérifiez les réglages de confidentialité du navigateur.',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'Essayer le clip de parole d’exemple',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'Exemple récupère un court WAV parlé, lance Créer SRT via Whisper sur l’appareil, et remplit l’aperçu SRT. La page ne lance pas l’exemple à l’ouverture, pour ne pas imposer le premier téléchargement ~45 Mo à chaque visiteur.',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'Quand c’est utile',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    'Vous avez une note vocale ou une interview locale en WAV/MP3 et besoin d’un .srt téléchargeable pour un lecteur ou un éditeur.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    'Vous avez une courte vidéo avec piste audio et voulez des sous-titres minutés sans envoyer le fichier à un site ASR cloud.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    'Vous voulez un premier SRT issu de Whisper sur l’appareil à retravailler avant publication, ou vous basculez sur Dicter au micro sans fichier.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: 'Whisper local ou envoi vers le cloud ?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'Créer SRT exécute Whisper tiny sur l’appareil depuis les fichiers vendor du même origine. Votre fichier audio ou vidéo reste sur l’appareil, sans envoi au serveur chez nous pour la reconnaissance. Dicter au micro (optionnel) utilise l’API Web Speech du navigateur, qui peut impliquer un service vocal du fabricant.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: 'Pourquoi le premier Créer SRT est-il lent ou volumineux ?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    'Le premier passage télécharge environ 45 Mo de modèle Whisper tiny et d’assets WASM depuis ce site dans le cache du navigateur. Les passages suivants réutilisent ce cache. La progression apparaît sous l’étape Modèle.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'Quelle précision pour les horodatages SRT ?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'Ils suivent le début et la fin des segments Whisper — suffisants pour la plupart des lecteurs et éditeurs, pas un alignement forcé image par image d’une chaîne studio bureau.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: 'Mon audio est-il envoyé à un serveur ?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'Non pour le chemin fichier Whisper : décodage et transcription dans l’onglet ; fichiers sur l’appareil, sans envoi au serveur chez nous. Restez en ligne seulement pour récupérer les scripts modèle du même origine au premier usage.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: 'Différence avec Transcrire un fichier audio en texte ?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    'Cet outil voisin se concentre sur le texte de transcription. Ici, on formate des cues SRT numérotées avec début et fin pour les lecteurs et éditeurs qui attendent du .srt.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: 'Peut-on incruster les sous-titres dans une vidéo ?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'Non. On ne télécharge qu’un fichier .srt à côté. Pour une vidéo en forme d’onde depuis l’audio, voir l’outil voisin dédié — pas de captions incrustées.',
};
export default fr;
