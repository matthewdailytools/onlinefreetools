import type { SiteLangDict } from '../../../types';

/**
 * French copy for boost-bass-on-an-mp3 (S21).
 * Low-shelf only; ≠ muffled EQ (S20), ≠ whole-file louder (S15).
 */
const fr: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "Renforcer les basses d’un MP3",
  tool_boost_bass_on_an_mp3_desc:
    "Épaississez des basses fines avec Mild, Medium ou Strong (low-shelf), puis téléchargez un WAV 16 bits. Sur l’appareil uniquement.",
  tool_boost_bass_on_an_mp3_description:
    "Renforcer les basses d’un MP3 avec les presets low-shelf Mild, Medium ou Strong. Étapes : renforcer, préécouter, télécharger le WAV. Exemple : charger l’échantillon de basses fines. Basses low-shelf seulement—pas un égaliseur multibande complet, pas un amplificateur de volume sur tout le fichier. L’audio reste sur votre appareil ; jamais téléversé.",
  tool_boost_bass_on_an_mp3_article: "Les exports téléphone et les enceintes d’ordinateur laissent souvent kick et basse minces : assez de médiums, trop peu de poids sous ~100 Hz. Cette page exécute une étape lowshelf EQ dans on-device audio processing. Mild est doux ; Medium (défaut) le relèvement quotidien ; Strong pousse plus fort. La protection de crête douce met à l’échelle si le boost clipperait. C’est un boost de basses—pas l’EQ trois bandes Clarity/Warmth/Presence pour voix étouffée, ni un gain dB plat sur tout. Canaux 1 ou 2. Gardez le master ; le téléchargement est un nouveau WAV 16 bits. Traitement dans le navigateur.",
  tool_boost_bass_on_an_mp3_choose: "Choisir un fichier audio",
  tool_boost_bass_on_an_mp3_hint: "Déposez un WAV, MP3, M4A, AAC ou OGG. Maximum 40 MiB et 10 minutes ; mono ou stéréo.",
  tool_boost_bass_on_an_mp3_convert: "Renforcer",
  tool_boost_bass_on_an_mp3_download: "Télécharger le WAV",
  tool_boost_bass_on_an_mp3_sample: "Charger l’échantillon",
  tool_boost_bass_on_an_mp3_clear: "Effacer",
  tool_boost_bass_on_an_mp3_advanced: "Presets de basses",
  tool_boost_bass_on_an_mp3_preset_label: "Preset basses low-shelf",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "Medium (défaut) relève les graves vers 90 Hz. Mild est plus doux ; Strong plus lourd. La protection de crête évite le clipping après le boost.",
  tool_boost_bass_on_an_mp3_progress: "Progression du boost de basses",
  tool_boost_bass_on_an_mp3_read: "Lire",
  tool_boost_bass_on_an_mp3_decode: "Décoder",
  tool_boost_bass_on_an_mp3_boost: "Renforcer",
  tool_boost_bass_on_an_mp3_write: "Écrire",
  tool_boost_bass_on_an_mp3_done: "Prêt. Préécoutez le WAV renforcé, puis téléchargez le WAV.",
  tool_boost_bass_on_an_mp3_failed: "Échec du boost de basses. Essayez un fichier audio valide plus petit.",
  tool_boost_bass_on_an_mp3_elapsed: "{s}s écoulées",
  tool_boost_bass_on_an_mp3_preview: "Écouter le WAV aux basses renforcées",
  tool_boost_bass_on_an_mp3_result: "{seconds}s · {preset} · crête {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "demo-basses-fines-deux-secondes",
  tool_boost_bass_on_an_mp3_empty: "Choisissez d’abord un fichier audio ou chargez l’échantillon.",
  tool_boost_bass_on_an_mp3_err_file: "Déposez exactement un fichier audio.",
  tool_boost_bass_on_an_mp3_err_format: "Audio non pris en charge ou endommagé. Utilisez un fichier décodable (WAV, MP3, M4A, AAC ou OGG).",
  tool_boost_bass_on_an_mp3_err_limit: "Fichier d’au plus 40 MiB ou 10 minutes, à un ou deux canaux.",
  tool_boost_bass_on_an_mp3_err_decode: "Le navigateur n’a pas pu décoder cet audio. Essayez un autre enregistrement valide.",
  tool_boost_bass_on_an_mp3_err_encoder: "Impossible d’écrire le WAV renforcé. Vérifiez le preset, puis renforcez à nouveau.",
  tool_boost_bass_on_an_mp3_err_silence: "Niveau quasi silencieux—rien à renforcer. Utilisez un enregistrement audible.",
  tool_boost_bass_on_an_mp3_how_title: "Comment renforcer les basses d’un MP3",
  tool_boost_bass_on_an_mp3_how_body:
    "Choisissez un preset low-shelf, relevez les basses, écoutez, puis téléchargez un WAV 16 bits—sans téléverser le fichier.",
  tool_boost_bass_on_an_mp3_how_item_1: "Choisissez un fichier audio, ou chargez l’échantillon pour une démo de basses fines de deux secondes.",
  tool_boost_bass_on_an_mp3_how_item_2: "Ouvrez Presets de basses et choisissez Mild, Medium (défaut) ou Strong.",
  tool_boost_bass_on_an_mp3_how_item_3: "Cliquez Renforcer et attendez Lire → Décoder → Renforcer → Écrire.",
  tool_boost_bass_on_an_mp3_how_item_4: "Préécoutez le résultat, vérifiez preset et crêtes, puis Télécharger le WAV.",
  tool_boost_bass_on_an_mp3_why_choose_title: "Pourquoi choisir nos outils pour renforcer les basses d’un MP3",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "Voyez le nom du preset, les crêtes avant/après et les KiB de sortie avant d’enregistrer.",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "Trois presets low-shelf clairs—un seul travail de basses, pas un EQ à dix bandes ni un mur de volume.",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "Décodage, boost lowshelf et écriture WAV tournent sur votre appareil ; la page ne téléverse pas l’audio.",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "Changer le preset ou l’entrée efface l’ancien téléchargement pour éviter un WAV obsolète.",
  tool_boost_bass_on_an_mp3_rules_title: "Mild, Medium, Strong et limites",
  tool_boost_bass_on_an_mp3_rules_body:
    "Chaque preset est une étape lowshelf EQ. Mild est doux ; Medium le relèvement quotidien ; Strong plus lourd. Protection de crête si le boost clipperait.",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "Medium (défaut) : lowshelf vers 90 Hz à environ +8 dB. Mild ~+4 dB ; Strong ~+12 dB avec shelf un peu plus bas.",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "Basses low-shelf seulement. Ne remodel pas médiums/aigus comme un EQ de voix étouffée, ni n’amplifie toutes les fréquences comme un volume booster.",
  tool_boost_bass_on_an_mp3_rules_item_3: "L’export garde 1 ou 2 canaux. Les tags ne sont pas copiés. L’original n’est pas écrasé.",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "Un fichier jusqu’à 40 MiB et dix minutes. Après Strong, la protection peut baisser le niveau global pour rester sous pleine échelle.",
  tool_boost_bass_on_an_mp3_example_title: "Essayer un vrai boost de basses",
  tool_boost_bass_on_an_mp3_example:
    "Charger l’échantillon crée un ton de deux secondes riche en médiums et pauvre en graves, puis renforce automatiquement en Medium. La lecture ne démarre pas seule—appuyez sur lecture dans l’aperçu pour entendre le résultat plus lourd.",
  tool_boost_bass_on_an_mp3_usecases_title: "Quand cela aide",
  tool_boost_bass_on_an_mp3_usecase_1: "Un export MP3 mince sur enceintes—choisissez Medium, Renforcer, téléchargez le WAV.",
  tool_boost_bass_on_an_mp3_usecase_2: "Une piste qui a besoin de plus de poids de kick sans EQ graphique complet ni mix plus fort.",
  tool_boost_bass_on_an_mp3_usecase_3: "Un MP3 du téléphone sonne mince sur l’ordinateur et vous voulez surtout plus de kick.",
  tool_boost_bass_on_an_mp3_faq_q1: "Est-ce la même chose qu’égaliser un enregistrement vocal étouffé ?",
  tool_boost_bass_on_an_mp3_faq_a1:
    "Non. Cette page-là utilise Clarity/Warmth/Presence à trois bandes pour la parole étouffée. Ici, seul un lowshelf relève les graves. Pour l’EQ voix étouffée : Égaliser un enregistrement vocal étouffé.",
  tool_boost_bass_on_an_mp3_faq_q2: "Est-ce la même chose que rendre un enregistrement silencieux plus fort ?",
  tool_boost_bass_on_an_mp3_faq_a2:
    "Non. Un amplificateur de volume applique le même gain dB à chaque échantillon. Ici, seule l’étagère de basses. Pour le gain fichier entier : Rendre un enregistrement silencieux plus fort.",
  tool_boost_bass_on_an_mp3_faq_q3: "Que font Mild, Medium et Strong ?",
  tool_boost_bass_on_an_mp3_faq_a3:
    "Mild est un lowshelf doux. Medium (défaut) le relèvement quotidien. Strong une étagère plus lourde. La protection de crête évite le clipping après le boost.",
  tool_boost_bass_on_an_mp3_faq_q4: "Et si Renforcer chauffe le fichier ?",
  tool_boost_bass_on_an_mp3_faq_a4:
    "Après le lowshelf, si les crêtes dépasseraient ~−0,2 dBFS, la protection met à l’échelle. Pour un limiteur dédié : Limiter les crêtes pour qu’un fichier ne clippe pas.",
  tool_boost_bass_on_an_mp3_faq_q5: "Mon audio est-il téléversé vers un serveur ?",
  tool_boost_bass_on_an_mp3_faq_a5:
    "Non. Décodage, boost de basses et écriture WAV tournent dans votre navigateur. Une connexion est nécessaire au premier chargement ; le hors ligne n’est pas garanti.",
  tool_boost_bass_on_an_mp3_faq_q6: "Uniquement MP3, ou aussi WAV et M4A ?",
  tool_boost_bass_on_an_mp3_faq_a6:
    "Tout format que le navigateur peut décoder—WAV, MP3, M4A, AAC ou OGG. Le titre reprend la recherche MP3 courante ; l’export est toujours un nouveau WAV 16 bits.",
};
export default fr;
