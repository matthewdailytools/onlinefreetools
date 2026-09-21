import type { SiteLangDict } from '../../../types';

/**
 * French copy for remove-mains-hum-from-a-recording (S26).
 * How≥4, Why≥4, Rules≥4, FAQ≥6; ≠ denoise / declick / EQ.
 */
const fr: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "Retirer le ronflement secteur d’un enregistrement",
  tool_remove_mains_hum_from_a_recording_desc:
    "Coupez le ronflement électrique 50 ou 60 Hz avec des filtres notch et des harmoniques optionnelles, puis téléchargez un WAV 16 bits. Sur l’appareil uniquement.",
  tool_remove_mains_hum_from_a_recording_description:
    "Retirez le ronflement secteur d’un enregistrement avec des filtres notch 50 ou 60 Hz et des harmoniques 2e–5e optionnelles. Étapes : Déshummer, préécouter, télécharger le WAV. Exemple : chargez l’échantillon qui ronfle. Notches étroits pour le ronflement électrique—pas un débruitage large bande, pas un declick, pas un EQ de voix étouffée. L’audio reste sur votre appareil ; jamais téléversé.",
  tool_remove_mains_hum_from_a_recording_article: "Les enregistrements près d’alimentations, de variateurs ou d’équipements mal reliés à la terre captent souvent un ronflement secteur stable à 50 ou 60 Hz, parfois avec harmoniques. Cette page enchaîne des étages notch EQ filter dans on-device audio processing sur le fondamental choisi et, en option, les 2e à 5e harmoniques sous Nyquist. Elle vise des tons électriques étroits—pas le débruitage de souffle de ventilateur, pas la réparation de clics, et pas un EQ trois bandes pour voix étouffée. Les graves près du notch peuvent s’amincir un peu. Le nombre de canaux reste 1 ou 2. Gardez le fichier d’origine ; le téléchargement est un nouveau WAV 16 bits. Le travail s’exécute dans le navigateur sur votre appareil.",
  tool_remove_mains_hum_from_a_recording_choose: "Choisir un fichier audio",
  tool_remove_mains_hum_from_a_recording_hint: "Déposez un WAV, MP3, M4A, AAC ou OGG. Maximum 40 Mio et 10 minutes ; mono ou stéréo.",
  tool_remove_mains_hum_from_a_recording_convert: "Déshummer",
  tool_remove_mains_hum_from_a_recording_download: "Télécharger le WAV",
  tool_remove_mains_hum_from_a_recording_sample: "Charger l’échantillon",
  tool_remove_mains_hum_from_a_recording_clear: "Effacer",
  tool_remove_mains_hum_from_a_recording_advanced: "Fréquence secteur et harmoniques",
  tool_remove_mains_hum_from_a_recording_hz_label: "Fréquence secteur",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Hz",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Hz",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "Harmoniques",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "Fondamental seul",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "Inclure les harmoniques",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "Par défaut 50 Hz avec harmoniques notche le fondamental plus les 2e–5e sous Nyquist. Choisissez 60 Hz pour l’Amérique du Nord et grilles similaires. Fondamental seul est plus doux sur les graves proches.",
  tool_remove_mains_hum_from_a_recording_progress: "Progression du déshum",
  tool_remove_mains_hum_from_a_recording_read: "Lire",
  tool_remove_mains_hum_from_a_recording_decode: "Décoder",
  tool_remove_mains_hum_from_a_recording_dehum: "Déshummer",
  tool_remove_mains_hum_from_a_recording_write: "Écrire",
  tool_remove_mains_hum_from_a_recording_done: "Prêt. Préécoutez le WAV déshumé, puis téléchargez le WAV.",
  tool_remove_mains_hum_from_a_recording_failed: "Échec du déshum. Essayez un fichier audio valide plus petit.",
  tool_remove_mains_hum_from_a_recording_elapsed: "{s}s écoulées",
  tool_remove_mains_hum_from_a_recording_preview: "Écouter le WAV déshumé",
  tool_remove_mains_hum_from_a_recording_result: "{seconds}s · {hz} Hz · {harmonics} · {notches} notches · WAV {output} KiB",
  tool_remove_mains_hum_from_a_recording_sample_name: "demo-ronflement-secteur-trois-secondes",
  tool_remove_mains_hum_from_a_recording_empty: "Choisissez d’abord un fichier audio ou chargez l’échantillon.",
  tool_remove_mains_hum_from_a_recording_err_file: "Déposez exactement un fichier audio.",
  tool_remove_mains_hum_from_a_recording_err_format: "Audio non pris en charge ou endommagé. Utilisez un fichier que le navigateur peut décoder (WAV, MP3, M4A, AAC ou OGG).",
  tool_remove_mains_hum_from_a_recording_err_limit: "Utilisez un fichier d’au plus 40 Mio ou 10 minutes, avec un ou deux canaux.",
  tool_remove_mains_hum_from_a_recording_err_decode: "Le navigateur n’a pas pu décoder cet audio. Essayez un autre enregistrement valide.",
  tool_remove_mains_hum_from_a_recording_err_encoder: "Impossible d’écrire le WAV déshumé. Vérifiez la fréquence et les harmoniques, puis réessayez Déshummer.",
  tool_remove_mains_hum_from_a_recording_err_silence: "Le niveau est essentiellement du silence—rien à déshummer. Essayez un enregistrement avec un niveau audible.",
  tool_remove_mains_hum_from_a_recording_how_title: "Comment retirer le ronflement secteur d’un enregistrement",
  tool_remove_mains_hum_from_a_recording_how_body:
    "Choisissez 50 ou 60 Hz, décidez des harmoniques, lancez les notches, écoutez, puis téléchargez un WAV 16 bits—sans téléverser le fichier.",
  tool_remove_mains_hum_from_a_recording_how_item_1: "Choisissez un fichier audio, ou sélectionnez Charger l’échantillon pour une démonstration de trois secondes qui ronfle.",
  tool_remove_mains_hum_from_a_recording_how_item_2: "Ouvrez Fréquence secteur et harmoniques : choisissez 50 ou 60 Hz, puis Fondamental seul ou Inclure les harmoniques.",
  tool_remove_mains_hum_from_a_recording_how_item_3: "Cliquez Déshummer et attendez Lire → Décoder → Déshummer → Écrire.",
  tool_remove_mains_hum_from_a_recording_how_item_4: "Préécoutez le fond électrique plus calme, vérifiez la ligne de résultat, puis téléchargez le WAV.",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "Pourquoi choisir nos outils Retirer le ronflement secteur d’un enregistrement",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "Voyez les Hz secteur, le mode harmoniques, le nombre de notches et les Kio de sortie avant d’enregistrer.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "Un travail de déshum clair—notches 50/60 Hz avec harmoniques optionnelles, pas un rack DAW enfoui.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "Le décodage, le filtrage notch et l’écriture WAV s’exécutent sur votre appareil ; la page ne téléverse pas l’enregistrement pour le traiter.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "Changer la fréquence, les harmoniques ou l’entrée efface l’ancien téléchargement pour éviter un WAV obsolète.",
  tool_remove_mains_hum_from_a_recording_rules_title: "Fréquence notch, harmoniques et limites honnêtes du navigateur",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "Chaque passage enchaîne des filtres notch étroits sur le fondamental choisi et, si activé, les harmoniques 2–5 sous Nyquist. Les vrais tons secteur s’améliorent le plus ; le souffle large bande demande un débruitage ailleurs. La protection de crête douce garde le WAV sous pleine échelle.",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 Hz ou 60 Hz fixe le fondamental. Inclure les harmoniques ajoute des notches à 2×–5× sous Nyquist. Par défaut : 50 Hz avec harmoniques.",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "C’est une chaîne notch du navigateur. Ce n’est pas un débruitage large bande, ni une réparation de clics, ni un EQ de voix étouffée.",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "L’export conserve 1 ou 2 canaux. Les balises ne sont pas copiées. Le fichier d’origine n’est jamais écrasé.",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "Un fichier jusqu’à 40 Mio et dix minutes. Les graves près du notch peuvent s’amincir ; si ça sonne creux, essayez Fondamental seul.",
  tool_remove_mains_hum_from_a_recording_example_title: "Essayer un clip qui ronfle vraiment",
  tool_remove_mains_hum_from_a_recording_example:
    "Charger l’échantillon construit un ton de type parole de trois secondes sous ronflement 50 Hz plus harmoniques, puis Déshummer à 50 Hz avec harmoniques automatiquement. La lecture ne démarre jamais seule—appuyez sur lecture dans l’aperçu si vous voulez entendre le fond plus calme.",
  tool_remove_mains_hum_from_a_recording_usecases_title: "Quand cela aide",
  tool_remove_mains_hum_from_a_recording_usecase_1: "Une note vocale avec buzz électrique stable d’un chargeur ou variateur—choisissez les Hz de votre réseau, Déshummer, téléchargez le WAV.",
  tool_remove_mains_hum_from_a_recording_usecase_2: "Un enregistrement de terrain qui doit perdre le ton secteur avant de débruiter le souffle large bande ou d’EQ une voix étouffée ailleurs.",
  tool_remove_mains_hum_from_a_recording_usecase_3: "Un ronflement 50/60 Hz du secteur s’entend sous la prise.",
  tool_remove_mains_hum_from_a_recording_faq_q1: "Est-ce la même chose que réduire le bruit de fond d’un mémo vocal ?",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "Non. Cette page-là passe-haut et porte le souffle stable de ventilateur ou clim. Cette page notche des tons électriques étroits 50/60 Hz. Utilisez Réduire le bruit de fond d’un mémo vocal pour le souffle large bande.",
  tool_remove_mains_hum_from_a_recording_faq_q2: "Cela retire-t-il les clics et pops ?",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "Non. Clics, pops de bouche et crépitements vinyle demandent un travail de declick. Cette page notche seulement le fondamental secteur et les harmoniques optionnelles.",
  tool_remove_mains_hum_from_a_recording_faq_q3: "Est-ce la même chose qu’EQ a muffled voice recording ?",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "Non. Cette page-là remodelise le timbre avec Clarity, Warmth ou Presence. Cette page retire le ronflement électrique. Pour un ton étouffé après le déshum, utilisez EQ a muffled voice recording.",
  tool_remove_mains_hum_from_a_recording_faq_q4: "Dois-je choisir 50 Hz ou 60 Hz ?",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "Correspond à votre réseau électrique. Une grande partie de l’Europe, de l’Asie, de l’Afrique et de l’Australie utilise 50 Hz. L’Amérique du Nord et des parties du Japon et de l’Amérique du Sud utilisent 60 Hz. De mauvais Hz laissent le ronflement presque intact.",
  tool_remove_mains_hum_from_a_recording_faq_q5: "Que fait Inclure les harmoniques ?",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "Cela ajoute des notches à deux à cinq fois le fondamental lorsque ces fréquences sont sous Nyquist. Le buzz a souvent des harmoniques ; Fondamental seul est plus doux sur les graves proches.",
  tool_remove_mains_hum_from_a_recording_faq_q6: "Mon audio est-il téléversé vers un serveur ?",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "Non. Décodage, filtrage notch et écriture WAV s’exécutent dans votre navigateur sur l’appareil. La page a besoin d’un réseau au premier chargement ; la dispo hors ligne n’est pas garantie. Pour le souffle large bande utilisez Réduire le bruit de fond d’un mémo vocal ; pour un ton étouffé utilisez EQ a muffled voice recording.",
};
export default fr;
