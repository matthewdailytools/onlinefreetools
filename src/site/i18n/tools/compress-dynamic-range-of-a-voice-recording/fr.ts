import type { SiteLangDict } from '../../../types';

/**
 * French copy for compress-dynamic-range-of-a-voice-recording (S18).
 */
const fr: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "Compresser la plage dynamique d’un enregistrement vocal",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    
    "Aplanissez les pics vocaux avec les presets léger/moyen/fort et makeup optionnel, puis téléchargez un WAV 16 bits. Sur l’appareil uniquement.",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    
    "Compressez la plage dynamique d’un enregistrement vocal avec les presets léger, moyen ou fort et un makeup optionnel. Étapes : compresser, préécouter, télécharger le WAV. Exemple : chargez l’échantillon irrégulier. Remodelage de dynamique—pas une compression de taille MP3, pas un gain dB fixe, pas une normalisation pic ou LUFS. L’audio reste sur votre appareil ; jamais envoyé.",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    
    "Les prises de voix passent souvent du chuchotement aux pics. Cette page utilise un compresseur d’enveloppe de pic en JavaScript pur : léger/moyen en soft knee, fort en hard knee (léger ≈ −18 dB / 2:1, moyen ≈ −24 / 3:1 par défaut, fort ≈ −30 / 6:1). Le makeup optionnel restaure le niveau global après domestication des pics, avec protection douce avant le WAV 16 bits. C’est de la compression de plage dynamique, pas réduire un MP3 pour les octets, pas un gain fixe, pas une normalisation pic ni un alignement LUFS. 1 ou 2 canaux. Gardez le master ; le téléchargement est nouveau.",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "Choisir un fichier audio",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "Déposez un WAV, MP3, M4A, AAC ou OGG. Maximum 40 MiB et 10 minutes ; mono ou stéréo.",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "Compresser",
  tool_compress_dynamic_range_of_a_voice_recording_download: "Télécharger le WAV",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "Charger l’échantillon",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "Effacer",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "Réglages du compresseur",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "Preset d’intensité",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "Léger",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "Moyen",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "Fort",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "Gain makeup",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "Oui",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "Non",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    
    "Léger (−18 dB, 2:1, soft knee) est doux. Moyen (−24 dB, 3:1) convient à beaucoup de voix off. Fort (−30 dB, 6:1, hard knee) serre plus. Makeup (Oui par défaut) restaure le niveau après compression avec protection de pic.",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "Progression de la compression",
  tool_compress_dynamic_range_of_a_voice_recording_read: "Lire",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "Décoder",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "Compresser",
  tool_compress_dynamic_range_of_a_voice_recording_write: "Écrire",
  tool_compress_dynamic_range_of_a_voice_recording_done: "Prêt. Préécoutez le WAV compressé, puis téléchargez.",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "Échec de la compression. Essayez un fichier audio valide plus petit.",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "{s}s écoulées",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "Écouter le WAV compressé",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds}s · {preset} · makeup {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "demo-voix-dynamique-deux-secondes",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "Choisissez un audio ou chargez d’abord l’échantillon.",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "Déposez exactement un fichier audio.",
  tool_compress_dynamic_range_of_a_voice_recording_err_format:
    "Audio non pris en charge ou endommagé. Utilisez un fichier que le navigateur peut décoder (WAV, MP3, M4A, AAC ou OGG).",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "Fichier d’au plus 40 MiB ou 10 minutes, avec un ou deux canaux.",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "Le navigateur n’a pas pu décoder cet audio. Essayez un autre enregistrement valide.",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "Impossible d’écrire le WAV compressé. Vérifiez le preset et le makeup, puis réessayez Compresser.",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "Le niveau est presque du silence—rien à compresser.",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "Comment compresser la plage dynamique d’un enregistrement vocal",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    
    "Choisissez un preset d’intensité, activez le makeup si besoin, compressez, écoutez, téléchargez un WAV 16 bits—sans envoyer le fichier.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "Choisissez un enregistrement vocal, ou chargez l’échantillon (ton de deux secondes à forte dynamique).",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    
    "Ouvrez les réglages et choisissez Léger, Moyen (défaut) ou Fort ; laissez Makeup sur Oui sauf si vous ne voulez que contrôler les pics.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "Cliquez Compresser et attendez Lire → Décoder → Compresser → Écrire.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "Préécoutez, vérifiez preset/seuil/ratio/makeup et pics, puis téléchargez le WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "Pourquoi choisir nos outils de compression de plage dynamique",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "Voyez preset, seuil, ratio, makeup, pics et KiB de sortie avant d’enregistrer.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "Trois presets voix clairs—un travail de dynamique, pas un mur taille MP3/gain/normalisation.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3: "Décodage, compression et WAV tournent sur votre appareil ; la page n’envoie pas l’enregistrement.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "Changer preset, makeup ou entrée efface l’ancien téléchargement pour éviter un WAV périmé.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "Seuil, ratio, makeup et limites",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    
    "Un compresseur d’enveloppe réduit le gain au-dessus du seuil selon le ratio (soft knee en Léger/Moyen ; hard knee en Fort). Le makeup multiplie ensuite ; la protection douce garde les échantillons sous ~0,99. Remodele fort vs doux—contrairement au gain fixe, normalisation pic, LUFS ou réduction de débit MP3.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1:
    
    "Moyen (−24 dB, 3:1, soft knee) est le défaut. Léger est plus doux ; Fort utilise un seuil plus bas, un ratio plus élevé et hard knee.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2: 
    "Makeup par défaut Oui restaure le niveau après domestication des pics. Mettez Non si vous voulez seulement des pics plus calmes sans élévation.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "L’export conserve 1 ou 2 canaux. Les balises ne sont pas copiées. L’original n’est jamais écrasé.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4:
    "Un fichier jusqu’à 40 MiB et dix minutes. Ce n’est pas une compression de taille MP3, ni un gain fixe, ni une normalisation pic, ni un alignement LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "Essayer une vraie compression de plage dynamique",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    
    "Charger l’échantillon crée un ton 440 Hz de deux secondes avec rafales fortes et douces, puis Compresse automatiquement en Moyen avec Makeup Oui. La lecture ne démarre pas seule—appuyez sur lecture dans l’aperçu.",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "Quand cela aide",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "Une voix off qui saute de phrases calmes à des pics forts—choisissez Podcast, compressez, téléchargez le WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "Une interview à uniformiser avant l’alignement de loudness, sans réduire un MP3 pour la taille.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_3: "Chuchotements et pics s’opposent ; vous voulez un niveau d’écoute plus uniforme.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "Est-ce la même chose que compresser / réduire la taille d’un MP3 ?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "Non. Ici « compresser » signifie la plage dynamique (seuil/ratio), pas le débit ou les octets. Pour des MP3 plus petits, utilisez Reduce an MP3 file size. En chinois : 压缩人声动态 ≠ 压缩 MP3 体积.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "Est-ce la même chose qu’amplifier une prise faible avec un gain dB fixe ?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2:
    "Non. Le gain fixe multiplie tout le clip. Ici les parties fortes sont plus réduites. Pour un boost uniforme, utilisez Make a quiet recording louder.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "Est-ce une normalisation de pic ou un alignement LUFS podcast ?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "Non. Le pic vise un dBFS ; le LUFS vise la sonie intégrée. Cette page remodelage la dynamique avec un compresseur. Utilisez Normalize an audio file to peak ou Match podcast loudness to −16 LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "Que changent Léger, Moyen et Fort ?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4: 
    "Ils fixent seuil, ratio et knee. Léger ≈ −18 / 2:1 soft ; Moyen ≈ −24 / 3:1 soft ; Fort ≈ −30 / 6:1 hard. Makeup Oui/Non est séparé.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "Faut-il laisser Makeup sur Oui ?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    
    "En général oui—la compression peut baisser la moyenne ; le makeup la restaure avec protection de pic. Choisissez Non pour des pics plus calmes seulement.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "Mon audio est-il envoyé à un serveur ?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "Non. Décodage, compression et WAV tournent dans le navigateur sur votre appareil. Une connexion est nécessaire au premier chargement ; le hors-ligne n’est pas garanti. Pour loudness ou gain : Match podcast loudness to −16 LUFS ou Make a quiet recording louder.",
};
export default fr;
