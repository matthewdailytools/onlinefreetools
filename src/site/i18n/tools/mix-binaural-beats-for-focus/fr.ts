import type { SiteLangDict } from '../../../types';

/**
 * Français (fr) pour mix-binaural-beats-for-focus（F9 G7）。
 * Locale rewrite for local search habits—not a verbatim machine translation of en.
 * WAV stéréo L/R ; divertissement/ambiance uniquement ; aucune prétention médicale ou thérapeutique.
 */
const fr: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: 'Mixer des battements binauraux pour la concentration',
  tool_mix_binaural_beats_for_focus_desc:
    'Mixez des battements binauraux pour la concentration à partir d’une porteuse et d’un écart de rythme, puis téléchargez un WAV stéréo. Sur l’appareil uniquement—ambiance de divertissement, pas un traitement.',
  tool_mix_binaural_beats_for_focus_description:
    'Mixez des battements binauraux pour la concentration dans le navigateur à partir d’une porteuse et d’un écart de rythme, puis téléchargez un WAV stéréo 16 bits. Étapes : réglez Hz porteuse et rythme ou touchez un préréglage, choisissez la durée, Mixer, écoutez au casque, téléchargez. Exemple : porteuse 200 Hz avec 10 Hz d’écart pendant 10 secondes. Divertissement et son d’ambiance pour la concentration uniquement—pas un traitement médical. Jamais envoyé.',
  tool_mix_binaural_beats_for_focus_article:
    'Ceux qui cherchent des battements binauraux pour une session de concentration veulent souvent un fichier stéréo simple à conserver. Ici vous fixez une fréquence porteuse pour l’oreille gauche et une un peu plus haute à droite pour que l’écart soit le rythme, choisissez la durée, synthétisez du PCM stéréo à 44,1 kHz dans le navigateur, puis téléchargez un WAV 16 bits. Utilisez un casque—la différence gauche/droite est l’essentiel. Les préréglages ne changent que des hertz ; ce sont des raccourcis d’ambiance, pas des protocoles médicaux. Cette page ne prétend à aucune efficacité thérapeutique, ne diagnostique ni ne traite aucune affection, et sert uniquement au divertissement ou à l’écoute d’ambiance personnelle. Ce n’est pas un générateur de sinus mono ni un fabricant de bips d’interface. Tout s’exécute sur votre appareil.',
  tool_mix_binaural_beats_for_focus_carrier_label: 'Porteuse (oreille gauche, Hz)',
  tool_mix_binaural_beats_for_focus_carrier_hint: 'Fréquence du canal gauche, typiquement 80–500 Hz. Défaut 200 Hz.',
  tool_mix_binaural_beats_for_focus_beat_label: 'Écart de rythme (Hz)',
  tool_mix_binaural_beats_for_focus_beat_hint: 'L’oreille droite joue porteuse + cette valeur. Gardez l’écart entre 1 et 40 Hz.',
  tool_mix_binaural_beats_for_focus_preset_label: 'Préréglages de rythme d’ambiance',
  tool_mix_binaural_beats_for_focus_dur_label: 'Durée',
  tool_mix_binaural_beats_for_focus_convert: 'Mixer',
  tool_mix_binaural_beats_for_focus_download: 'Télécharger WAV',
  tool_mix_binaural_beats_for_focus_sample: 'Charger l’exemple',
  tool_mix_binaural_beats_for_focus_clear: 'Effacer',
  tool_mix_binaural_beats_for_focus_advanced: 'Notes binaurales',
  tool_mix_binaural_beats_for_focus_settings_hint:
    'La sortie est un WAV stéréo 16 bits à 44,1 kHz avec courts fondus. Casque requis pour la différence gauche/droite. Divertissement et ambiance de concentration uniquement—pas un traitement médical ni une thérapie.',
  tool_mix_binaural_beats_for_focus_progress: 'Progression du mixage',
  tool_mix_binaural_beats_for_focus_synth: 'Synthèse',
  tool_mix_binaural_beats_for_focus_write: 'Écriture',
  tool_mix_binaural_beats_for_focus_done: 'Prêt. Écoutez au casque, puis Télécharger WAV.',
  tool_mix_binaural_beats_for_focus_failed: 'Échec du mixage. Vérifiez porteuse, écart de rythme et durée.',
  tool_mix_binaural_beats_for_focus_elapsed: '{s}s écoulées',
  tool_mix_binaural_beats_for_focus_preview: 'Écouter le WAV binaural',
  tool_mix_binaural_beats_for_focus_result:
    'G {left} Hz · D {right} Hz · rythme {beat} Hz · {seconds}s · stéréo · {rate} Hz · WAV {output} KiB',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: 'Réglez d’abord porteuse et rythme en Hz, ou chargez l’exemple.',
  tool_mix_binaural_beats_for_focus_empty_state:
    'Réglez porteuse et écart de rythme (ou touchez un préréglage), choisissez la durée, puis Mixer—ou Charger l’exemple (200 Hz / 10 Hz / 10 s). Utilisez un casque. Ambiance de divertissement uniquement—pas un traitement médical.',
  tool_mix_binaural_beats_for_focus_err_carrier: 'Saisissez une porteuse entre 80 et 1000 Hz.',
  tool_mix_binaural_beats_for_focus_err_beat: 'Saisissez un écart de rythme entre 1 et 40 Hz (droite = porteuse + rythme).',
  tool_mix_binaural_beats_for_focus_err_limit: 'La durée doit être entre 0 et 120 secondes.',
  tool_mix_binaural_beats_for_focus_err_encoder: 'Impossible d’écrire le WAV stéréo. Réessayez Mixer.',
  tool_mix_binaural_beats_for_focus_how_title: 'Comment mixer des battements binauraux pour la concentration',
  tool_mix_binaural_beats_for_focus_how_body:
    'Réglez porteuse et rythme en Hz, choisissez la durée, Mixer, écoutez au casque, téléchargez un WAV stéréo—sans envoi de fichiers et sans prétention thérapeutique.',
  tool_mix_binaural_beats_for_focus_how_item_1:
    'Saisissez les Hz de porteuse pour l’oreille gauche (ou gardez 200 Hz) et l’écart de rythme pour la droite.',
  tool_mix_binaural_beats_for_focus_how_item_2:
    'Optionnel : touchez un préréglage d’ambiance (écart 4, 10 ou 16 Hz)—seuls les nombres changent, pas des protocoles médicaux.',
  tool_mix_binaural_beats_for_focus_how_item_3:
    'Choisissez une pastille de durée, cliquez Mixer et attendez Synthèse → Écriture.',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'Écoutez au casque, vérifiez la ligne de résultat, puis cliquez Télécharger WAV.',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'Pourquoi choisir nos outils Mixer des battements binauraux pour la concentration',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    'Vous voyez Hz gauche, droite, écart de rythme, durée et KiB de sortie avant d’enregistrer.',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'Un seul travail binaural stéréo avec des limites YMYL honnêtes—ambiance de divertissement, pas un traitement.',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    'La synthèse et l’écriture tournent sur votre appareil ; rien n’est envoyé pour traiter les tons.',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'Changer porteuse, rythme ou durée efface l’ancien téléchargement pour éviter un WAV périmé.',
  tool_mix_binaural_beats_for_focus_rules_title: 'Règles binaurales et limites honnêtes',
  tool_mix_binaural_beats_for_focus_rules_body:
    'Chaque passage synthétise gauche = porteuse et droite = porteuse + rythme à 44,1 kHz avec courts fondus. Export WAV stéréo 16 bits. Divertissement/ambiance uniquement—pas un traitement médical—ni générateur de sinus mono ni bip d’UI.',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'Porteuse entre 80 et 1000 Hz. Écart de rythme entre 1 et 40 Hz. Durée au plus 120 secondes. Sortie stéréo.',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    'Un casque est requis pour une vraie différence gauche/droite. Les enceintes mélangent les canaux et masquent l’effet de rythme.',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    'Cette page ne revendique aucune efficacité médicale, de sommeil ou thérapeutique. Les libellés sont des raccourcis d’ambiance—pas des protocoles de traitement.',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    'Les fondus courts réduisent les clics. Le téléchargement est un nouveau fichier ; rien n’est envoyé. Ce n’est pas un générateur de sinus mono ni un son de notification d’UI.',
  tool_mix_binaural_beats_for_focus_example_title: 'Essayez une porteuse 200 Hz avec un rythme de 10 Hz pendant 10 secondes',
  tool_mix_binaural_beats_for_focus_example:
    'Charger l’exemple fixe porteuse 200 Hz, écart 10 Hz et 10 secondes, puis Mixer se lance automatiquement. Au casque vous devriez entendre une paire stéréo stable. La lecture ne démarre pas seule—appuyez sur lecture si vous voulez écouter.',
  tool_mix_binaural_beats_for_focus_usecases_title: 'Quand c’est utile',
  tool_mix_binaural_beats_for_focus_usecase_1:
    'Vous voulez un WAV d’ambiance de concentration réutilisable : réglez porteuse et rythme, Mixer, téléchargez et gardez le fichier pour le casque.',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'Vous avez besoin d’une démo rapide de rythme stéréo sans installer une appli de tons ni croire des promesses thérapeutiques.',
  tool_mix_binaural_beats_for_focus_faq_q1: 'Est-ce un traitement médical ou une thérapie ?',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'Non. Cette page crée uniquement un son de divertissement et d’ambiance personnelle pour la concentration. Elle ne diagnostique, ne traite ni ne guérit aucune affection et ne revendique aucune efficacité thérapeutique.',
  tool_mix_binaural_beats_for_focus_faq_q2: 'Ai-je besoin d’un casque ?',
  tool_mix_binaural_beats_for_focus_faq_a2:
    'Oui pour la différence gauche/droite prévue. Sur enceintes les canaux se mélangent et l’effet de rythme s’atténue ou disparaît.',
  tool_mix_binaural_beats_for_focus_faq_q3: 'Est-ce la même chose qu’un générateur de ton sinus mono ?',
  tool_mix_binaural_beats_for_focus_faq_a3:
    'Non. Une page sinus produit une fréquence en mono. Cette page écrit toujours du stéréo avec deux fréquences légèrement différentes.',
  tool_mix_binaural_beats_for_focus_faq_q4: 'Que signifient les préréglages d’ambiance ?',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'Ils ne fixent que l’écart de rythme en hertz (par exemple 4, 10 ou 16 Hz). Ce ne sont pas des protocoles médicaux et ils ne promettent pas de résultats de sommeil ou de concentration.',
  tool_mix_binaural_beats_for_focus_faq_q5: 'Quelque chose est-il envoyé à un serveur ?',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'Non. Synthèse et écriture s’exécutent dans votre navigateur sur l’appareil. La page a besoin du réseau au premier chargement ; le hors-ligne n’est pas garanti.',
  tool_mix_binaural_beats_for_focus_faq_q6: 'Quel est le format du téléchargement ?',
  tool_mix_binaural_beats_for_focus_faq_a6:
    'Un WAV PCM stéréo 16 bits à 44,1 kHz. Un nouveau fichier que vous pouvez garder comme clip d’ambiance réutilisable.',
};
export default fr;
