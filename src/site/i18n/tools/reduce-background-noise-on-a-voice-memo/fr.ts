import type { SiteLangDict } from '../../../types';

/**
 * French copy for reduce-background-noise-on-a-voice-memo (S24).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / dehum / EQ.
 */
const fr: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "Réduire le bruit de fond d’un mémo vocal",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "Atténuez le sifflement stable de ventilateur ou clim dans un mémo avec Light, Medium ou Strong (passe-haut + porte de plancher de bruit), puis téléchargez un WAV 16 bits. Approximation sur l’appareil seulement.",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "Réduisez le bruit de fond d’un mémo vocal avec les presets Light, Medium ou Strong : passe-haut plus porte sur le plancher de bruit. Étapes : Débruiter, préécouter, télécharger le WAV. Exemple : chargez l’échantillon sifflant. Approx. navigateur—pas Adobe Enhance Speech, pas dehum 50/60 Hz, pas EQ de voix étouffée. L’audio reste sur votre appareil ; jamais envoyé.",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "Les mémos vocaux portent souvent un sifflement stable de ventilateur, clim ou pièce qui masque la parole. Cette page applique un passe-haut, estime le plancher de bruit sur les trames calmes, puis atténue doucement près de ce plancher. Light, Medium et Strong changent l’agressivité. Approximation honnête dans le navigateur—pas Enhance cloud, pas encoche de ronflement secteur, pas EQ trois bandes. La musique peut s’assombrir. Canaux 1 ou 2. Conservez l’original ; le téléchargement est un nouveau WAV 16 bits. Traitement sur l’appareil.",
  tool_reduce_background_noise_on_a_voice_memo_choose: "Choisir un fichier audio",
  tool_reduce_background_noise_on_a_voice_memo_hint: "Déposez un WAV, MP3, M4A, AAC ou OGG. Maximum 40 MiB et 10 minutes ; mono ou stéréo.",
  tool_reduce_background_noise_on_a_voice_memo_convert: "Débruiter",
  tool_reduce_background_noise_on_a_voice_memo_download: "Télécharger le WAV",
  tool_reduce_background_noise_on_a_voice_memo_sample: "Charger l’échantillon",
  tool_reduce_background_noise_on_a_voice_memo_clear: "Effacer",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "Force de débruitage",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "Intensité de réduction du bruit",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "Light",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "Medium",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "Strong",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "Medium équilibre parole et sifflement. Light est plus doux. Strong atténue davantage les trames calmes et peut amincir les consonnes. Passe-haut + porte—pas d’Enhance ML.",
  tool_reduce_background_noise_on_a_voice_memo_progress: "Progression du débruitage",
  tool_reduce_background_noise_on_a_voice_memo_read: "Lire",
  tool_reduce_background_noise_on_a_voice_memo_decode: "Décoder",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "Débruiter",
  tool_reduce_background_noise_on_a_voice_memo_write: "Écrire",
  tool_reduce_background_noise_on_a_voice_memo_done: "Prêt. Écoutez le WAV, puis téléchargez.",
  tool_reduce_background_noise_on_a_voice_memo_failed: "Échec du débruitage. Essayez un fichier valide plus petit.",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "{s}s écoulées",
  tool_reduce_background_noise_on_a_voice_memo_preview: "Écouter le WAV débruité",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds}s · {preset} · plancher {floor} · WAV {output} KiB",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "demo-memo-sifflant-trois-secondes",
  tool_reduce_background_noise_on_a_voice_memo_empty: "Choisissez un audio ou chargez l’échantillon d’abord.",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "Déposez exactement un fichier audio.",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "Audio non pris en charge ou endommagé. Utilisez WAV, MP3, M4A, AAC ou OGG.",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "Fichier ≤ 40 MiB ou 10 minutes, un ou deux canaux.",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "Le navigateur n’a pas pu décoder cet audio.",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "Impossible d’écrire le WAV. Vérifiez l’intensité, puis réessayez.",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "Niveau quasi silence—rien à débruiter. Utilisez un enregistrement audible.",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "Comment réduire le bruit de fond d’un mémo vocal",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "Choisissez l’intensité, lancez passe-haut et porte, écoutez, téléchargez un WAV 16 bits—sans envoi.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "Choisissez un fichier ou chargez l’échantillon (trois secondes sifflantes).",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "Ouvrez Force et choisissez Light, Medium (défaut) ou Strong.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "Cliquez Débruiter et attendez Lire → Décoder → Débruiter → Écrire.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "Préécoutez, vérifiez la ligne de résultat, puis Télécharger le WAV.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "Pourquoi choisir nos outils Réduire le bruit de fond d’un mémo vocal",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "Voyez l’intensité, le plancher estimé et les KiB avant d’enregistrer.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "Trois intensités claires—un seul job de débruitage, pas un DAW ni un Enhance cloud.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "Décodage, passe-haut, porte et WAV tournent sur l’appareil ; pas d’upload pour traiter.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "Changer l’intensité ou l’entrée efface l’ancien téléchargement.",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "Intensité, plancher de bruit et limites honnêtes du navigateur",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "Chaque intensité : passe-haut, estimation du plancher sur trames calmes, porte douce. Le sifflement stable s’améliore le plus ; consonnes et musique peuvent s’amincir.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "Light, Medium et Strong changent la coupure passe-haut et le gain résiduel. Défaut : Medium.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "Approximation navigateur. Pas Adobe Enhance Speech, pas dehum 50/60 Hz, pas EQ de voix étouffée.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "Canaux 1 ou 2. Balises non copiées. L’original n’est jamais écrasé.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "Un fichier jusqu’à 40 MiB et dix minutes. Strong peut laisser des artefacts ; si ça sonne creux, revenez à Light ou Medium.",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "Essayer un mémo sifflant",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "Charger l’échantillon crée trois secondes de ton type parole sous sifflement, puis Débruiter en Medium automatiquement. La lecture ne démarre pas seule—appuyez sur play dans l’aperçu.",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "Quand cela aide",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "Mémo téléphone avec ventilateur ou clim—Medium, Débruiter, télécharger le WAV.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "Note de terrain à alléger avant fondus ou EQ ailleurs.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "Est-ce Adobe Enhance Speech ?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "Non. Enhance cloud reconstruit la parole avec de grands modèles. Ici : passe-haut et porte de plancher dans le navigateur—résultat modeste et honnête.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "Ça enlève le ronflement 50/60 Hz ?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "Pas comme dehum dédié. Le sifflement large bande s’améliore surtout. Pour une encoche secteur 50/60 Hz, utilisez Retirer le ronflement secteur d’un enregistrement.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "Est-ce la même chose qu’EQ a muffled voice recording ?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "Non. Cette page sculpte le timbre. Ici on réduit le bruit de fond stable. Pour le timbre après, utilisez EQ a muffled voice recording.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "Strong peut-il abîmer parole ou musique ?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "Oui. Strong atténue plus les trames calmes et peut amincir les consonnes. Préférez Medium ; Light si la parole est déjà faible.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "Que changent Light, Medium et Strong ?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "Ils montent un peu la coupure passe-haut et baissent le gain résiduel près du plancher estimé. Défaut : Medium.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "Mon audio est-il envoyé sur un serveur ?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "Non. Décodage, débruitage et WAV tournent dans le navigateur. Réseau requis au premier chargement ; hors ligne non garanti. Pour des bords doux : Fade in and fade out an audio clip ; pour un timbre étouffé : EQ a muffled voice recording.",
};
export default fr;
