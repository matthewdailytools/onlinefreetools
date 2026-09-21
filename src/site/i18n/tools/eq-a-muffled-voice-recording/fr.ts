import type { SiteLangDict } from '../../../types';

/**
 * French copy for eq-a-muffled-voice-recording (S20).
 * ≠ basses seules (S21), ≠ débruitage (S24), ≠ de-esser (S31).
 */
const fr: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "Égaliser un enregistrement vocal étouffé",
  tool_eq_a_muffled_voice_recording_desc:
    "Ouvrez une voix étouffée avec Clarity, Warmth ou Presence (trois bandes), puis téléchargez un WAV 16 bits. Sur l’appareil uniquement.",
  tool_eq_a_muffled_voice_recording_description:
    "Égaliser un enregistrement vocal étouffé avec les presets trois bandes Clarity, Warmth ou Presence. Étapes : EQ, préécouter, télécharger le WAV. Exemple : chargez l’échantillon étouffé. Mise en forme tonale seulement—pas un boost de basses seul, pas de réduction de bruit, pas un de-esser. L’audio reste sur votre appareil ; jamais envoyé.",
  tool_eq_a_muffled_voice_recording_article:
    "Appels, masques et micros éloignés sonnent souvent étouffés : trop de boue sous quelques centaines de hertz et trop peu de clarté dans la bande vocale. Cette page enchaîne trois BiquadFilter dans OfflineAudioContext—lowshelf, peaking, highshelf—en presets nommés. Clarity coupe la boue et ouvre la voix ; Warmth ajoute du corps et adoucit les aigus durs ; Presence relève la présence médio-aiguë et l’air. C’est un EQ tonal pour voix étouffée, pas un booster de basses monobande, pas une réduction de bruit de fond, pas un de-esser de sibilance. Canaux 1 ou 2. Gardez le master ; le téléchargement est un nouveau WAV 16 bits. Traitement dans le navigateur.",
  tool_eq_a_muffled_voice_recording_choose: "Choisir un fichier audio",
  tool_eq_a_muffled_voice_recording_hint: "Déposez un WAV, MP3, M4A, AAC ou OGG. Maximum 40 MiB et 10 minutes ; mono ou stéréo.",
  tool_eq_a_muffled_voice_recording_convert: "EQ",
  tool_eq_a_muffled_voice_recording_download: "Télécharger le WAV",
  tool_eq_a_muffled_voice_recording_sample: "Charger l’échantillon",
  tool_eq_a_muffled_voice_recording_clear: "Effacer",
  tool_eq_a_muffled_voice_recording_advanced: "Presets EQ",
  tool_eq_a_muffled_voice_recording_preset_label: "Preset EQ voix",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "Clarity (défaut) coupe la boue et ouvre la voix. Warmth ajoute du corps avec des aigus plus doux. Presence relève la présence médio-aiguë et l’air. Une protection de pics douce évite l’écrêtage après les boosts.",
  tool_eq_a_muffled_voice_recording_progress: "Progression de l’EQ",
  tool_eq_a_muffled_voice_recording_read: "Lire",
  tool_eq_a_muffled_voice_recording_decode: "Décoder",
  tool_eq_a_muffled_voice_recording_eq: "EQ",
  tool_eq_a_muffled_voice_recording_write: "Écrire",
  tool_eq_a_muffled_voice_recording_done: "Prêt. Préécoutez le WAV égalisé, puis Télécharger le WAV.",
  tool_eq_a_muffled_voice_recording_failed: "Échec de l’EQ. Essayez un fichier audio valide plus petit.",
  tool_eq_a_muffled_voice_recording_elapsed: "{s}s écoulées",
  tool_eq_a_muffled_voice_recording_preview: "Écouter le WAV égalisé",
  tool_eq_a_muffled_voice_recording_result: "{seconds}s · {preset} · crête {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_eq_a_muffled_voice_recording_sample_name: "demo-voix-etouffee-deux-secondes",
  tool_eq_a_muffled_voice_recording_empty: "Choisissez d’abord un fichier audio ou chargez l’échantillon.",
  tool_eq_a_muffled_voice_recording_err_file: "Déposez exactement un fichier audio.",
  tool_eq_a_muffled_voice_recording_err_format: "Audio non pris en charge ou endommagé. Utilisez un fichier que le navigateur peut décoder (WAV, MP3, M4A, AAC ou OGG).",
  tool_eq_a_muffled_voice_recording_err_limit: "Fichier d’au plus 40 MiB ou 10 minutes, avec un ou deux canaux.",
  tool_eq_a_muffled_voice_recording_err_decode: "Le navigateur n’a pas pu décoder cet audio. Essayez un autre enregistrement valide.",
  tool_eq_a_muffled_voice_recording_err_encoder: "Impossible d’écrire le WAV égalisé. Vérifiez le preset puis réessayez EQ.",
  tool_eq_a_muffled_voice_recording_err_silence: "Niveau presque silencieux—rien à égaliser. Essayez un enregistrement audible.",
  tool_eq_a_muffled_voice_recording_how_title: "Comment égaliser un enregistrement vocal étouffé",
  tool_eq_a_muffled_voice_recording_how_body:
    "Choisissez un preset trois bandes, reshapez le timbre, écoutez, puis téléchargez un WAV 16 bits—sans envoyer le fichier.",
  tool_eq_a_muffled_voice_recording_how_item_1: "Choisissez un fichier audio, ou chargez l’échantillon pour une démo étouffée de deux secondes.",
  tool_eq_a_muffled_voice_recording_how_item_2: "Ouvrez Presets EQ et choisissez Clarity (défaut), Warmth ou Presence.",
  tool_eq_a_muffled_voice_recording_how_item_3: "Cliquez EQ et attendez Lire → Décoder → EQ → Écrire.",
  tool_eq_a_muffled_voice_recording_how_item_4: "Préécoutez, vérifiez le preset et les crêtes, puis Télécharger le WAV.",
  tool_eq_a_muffled_voice_recording_why_choose_title: "Pourquoi choisir nos outils pour égaliser un enregistrement vocal étouffé",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "Voyez le nom du preset, les crêtes avant/après et les KiB de sortie avant d’enregistrer.",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "Trois presets voix clairs—un job d’EQ étouffé, pas un jouet à dix bandes ni des basses seules.",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "Décodage, EQ Biquad et écriture WAV sur votre appareil ; la page n’envoie pas l’enregistrement.",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "Changer le preset ou l’entrée efface l’ancien téléchargement pour éviter un WAV périmé.",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity, Warmth, Presence et limites",
  tool_eq_a_muffled_voice_recording_rules_body:
    "Chaque preset = trois étages Biquad (lowshelf, peaking, highshelf). Clarity ouvre la voix étouffée ; Warmth ajoute du corps ; Presence relève présence et air. Protection de pics douce si les boosts écrêteraient.",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "Clarity par défaut coupe les graves boueux et ouvre la clarté vocale. Warmth relève le corps grave et adoucit les aigus durs. Presence cible la présence médio-aiguë.",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "EQ tonal seulement. Ne retire pas le bruit de ventilateur, n’est pas un boost de basses seul, ni un de-esser de sibilance.",
  tool_eq_a_muffled_voice_recording_rules_item_3: "L’export garde 1 ou 2 canaux. Les tags ne sont pas copiés. L’original n’est jamais écrasé.",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "Un fichier jusqu’à 40 MiB et dix minutes. La protection de pics peut baisser le niveau global après de forts boosts.",
  tool_eq_a_muffled_voice_recording_example_title: "Essayer un vrai EQ étouffé",
  tool_eq_a_muffled_voice_recording_example:
    "Charger l’échantillon crée un ton étouffé de deux secondes (graves forts, aigus faibles), puis EQ Clarity automatiquement. La lecture ne démarre pas seule—appuyez sur lecture dans l’aperçu pour entendre le résultat plus clair.",
  tool_eq_a_muffled_voice_recording_usecases_title: "Quand cela aide",
  tool_eq_a_muffled_voice_recording_usecase_1: "Prise téléphone ou masque étouffée—choisir Clarity, EQ, télécharger le WAV.",
  tool_eq_a_muffled_voice_recording_usecase_2: "Voix de podcast qui a besoin de plus de corps ou de présence sans EQ DAW complet.",
  tool_eq_a_muffled_voice_recording_faq_q1: "Est-ce la même chose qu’un boost de basses ?",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "Non. Un boost de basses élève surtout les basses fréquences. Cette page propose trois presets multibandes pour voix étouffée. Les basses seules sont un autre job (Boost bass on an MP3, quand disponible).",
  tool_eq_a_muffled_voice_recording_faq_q2: "Cela enlève-t-il le bruit de fond ?",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "Non. L’EQ reshape le timbre ; ventilateurs, souffle ou bruit de pièce ne sont pas réduits. Pour le débruitage, utilisez un outil dédié quand disponible.",
  tool_eq_a_muffled_voice_recording_faq_q3: "Est-ce un de-esser ?",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "Non. Un de-esser cible les sibilantes (S/Ch). Ces presets façonnent le ton étouffé global sur graves, médiums et aigus.",
  tool_eq_a_muffled_voice_recording_faq_q4: "Que font Clarity, Warmth et Presence ?",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity coupe la boue et ouvre la voix. Warmth ajoute du corps grave et adoucit les aigus durs. Presence relève présence médio-aiguë et air. La protection de pics évite l’écrêtage après les boosts.",
  tool_eq_a_muffled_voice_recording_faq_q5: "Et si l’EQ chauffe le fichier ?",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "Après la chaîne de filtres, la protection de pics scale le buffer si les crêtes dépasseraient environ −0,2 dBFS. Pour un limiteur dédié, utilisez Limiter les pics pour qu’un fichier n’écrête pas.",
  tool_eq_a_muffled_voice_recording_faq_q6: "Mon audio est-il envoyé à un serveur ?",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "Non. Décodage, EQ et écriture WAV dans le navigateur. Connexion nécessaire au premier chargement ; hors-ligne non garanti. Pour la dynamique après l’EQ, utilisez Compresser la plage dynamique d’un enregistrement vocal ou Limiter les pics.",
};
export default fr;
