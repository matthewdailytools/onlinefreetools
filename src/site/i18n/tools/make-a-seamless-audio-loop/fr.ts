/**
 * i18n tool shard (make-a-seamless-audio-loop / fr).
 * H1 : boucle audio sans couture ; looper / fondu enchaîné absorbés dans la FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Français : fabriquer une boucle audio sans couture puis exporter. */
const fr: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: 'Réglages avancés (facultatif)',
  tool_make_a_seamless_audio_loop_article:
    'Faire une boucle audio sans couture dans cet onglet : ouvrez un fichier local, marquez Début et Fin, réglez le fondu enchaîné, cliquez sur Créer la boucle puis Exporter WAV ou Exporter MP3. La fin se fond dans le début pour que le raccord ne claque pas. Le fichier reste sur l’appareil et n’est pas envoyé au serveur.',
  tool_make_a_seamless_audio_loop_bitrate: 'Débit MP3',
  tool_make_a_seamless_audio_loop_bitrate_hint: '128 kbit/s par défaut. Utilisé seulement quand vous cliquez sur Exporter MP3.',
  tool_make_a_seamless_audio_loop_choose_file: 'Choisir un fichier audio',
  tool_make_a_seamless_audio_loop_clear: 'Effacer',
  tool_make_a_seamless_audio_loop_crossfade: 'Fondu enchaîné (ms)',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    '50 ms par défaut. 20 ms pour la batterie ; 200–500 ms pour pads, drones et nappes d’ambiance.',
  tool_make_a_seamless_audio_loop_desc:
    'Faire une boucle audio sans couture sur l’appareil : enchaînez la fin d’un clip local sur son début, puis exportez WAV ou MP3, sans envoi au serveur.',
  tool_make_a_seamless_audio_loop_description:
    'Faire une boucle audio sans couture sur votre appareil : fondu enchaîné de la fin d’un clip local vers son début, puis téléchargement WAV ou MP3 — le fichier n’est pas envoyé au serveur. Étapes : ouvrir le fichier, marquer Début et Fin, régler le fondu (50 ms), Créer la boucle, Lecture pour entendre le raccord, Exporter WAV ou Exporter MP3. Exemple : 1,00–3,00 s d’un ton de 5 s avec 50 ms à puissance égale donne environ 1,95 s. Boucle audio, loop audio, boucle seamless ou fondu enchaîné, c’est le même travail. Pas un éditeur d’onde ; pas un mix de deux morceaux ni un rip YouTube.',
  tool_make_a_seamless_audio_loop_disclaimer:
    'Vous devez avoir le droit de traiter le fichier. Cette page n’accorde pas de licences musicales et ne récupère pas de flux.',
  tool_make_a_seamless_audio_loop_drop_hint: 'Ou déposez ici un WAV, MP3, M4A ou OGG. Le traitement reste dans cet onglet.',
  tool_make_a_seamless_audio_loop_empty: 'Choisissez d’abord un fichier audio.',
  tool_make_a_seamless_audio_loop_end: 'Fin (secondes)',
  tool_make_a_seamless_audio_loop_equal_power: 'Fondu à puissance égale',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    'Activé par défaut pour que le raccord ne baisse pas de volume. Désactivez pour un mélange linéaire.',
  tool_make_a_seamless_audio_loop_err_bake:
    'La sortie collée dépasserait environ 3 minutes. Baissez Répétitions ou raccourcissez la zone.',
  tool_make_a_seamless_audio_loop_err_caps:
    'Ce fichier dépasse le plafond de cet appareil (environ 40 Mo / 20 min sur ordinateur, 20 Mo / 8 min sur écran étroit). Raccourcissez-le ailleurs ou prenez un fichier plus court.',
  tool_make_a_seamless_audio_loop_err_decode:
    'Ce navigateur n’a pas pu décoder le fichier. Essayez WAV ou MP3, ou un clip sans DRM.',
  tool_make_a_seamless_audio_loop_err_empty: 'Rien à boucler. Chargez un fichier ou l’exemple.',
  tool_make_a_seamless_audio_loop_err_fade:
    'Le fondu enchaîné doit être plus court que la zone. Baissez les millisecondes ou allongez Début–Fin.',
  tool_make_a_seamless_audio_loop_err_lame:
    'L’encodeur MP3 n’a pas chargé. Restez dans cet onglet et cliquez encore sur Exporter MP3.',
  tool_make_a_seamless_audio_loop_err_range: 'Fin doit venir après Début, dans la durée décodée.',
  tool_make_a_seamless_audio_loop_err_video:
    'Cette page n’accepte pas la vidéo comme entrée principale. Extraire l’audio d’abord, puis faire la boucle.',
  tool_make_a_seamless_audio_loop_example:
    'Charger un exemple construit un ton de 5,00 s, place Début 1,00 et Fin 3,00, utilise 50 ms à puissance égale, puis Créer la boucle écrit environ 1,95 s (un cycle). Exporter WAV écrit du PCM ; Exporter MP3 utilise 128 kbit/s sauf changement dans les réglages avancés.',
  tool_make_a_seamless_audio_loop_example_title: 'Exemple',
  tool_make_a_seamless_audio_loop_export_mp3: 'Exporter MP3',
  tool_make_a_seamless_audio_loop_export_wav: 'Exporter WAV',
  tool_make_a_seamless_audio_loop_faq_a1:
    'Non. Le décodage et l’enroulement se font dans cet onglet. Les scripts viennent de ce site. Le fichier n’est pas envoyé à nos serveurs.',
  tool_make_a_seamless_audio_loop_faq_a2:
    'Non. Une recherche boucle audio, loop audio, boucle seamless, looper ou fondu enchaîné, c’est cet outil : marquer une zone, fondre le raccord, exporter.',
  tool_make_a_seamless_audio_loop_faq_a3:
    'Le fondu enchaîné mélange la queue de la zone dans sa tête. 50 ms à puissance égale par défaut. Environ 20 ms pour la batterie ; 200–500 ms pour les nappes.',
  tool_make_a_seamless_audio_loop_faq_a4:
    'Le cycle exporté est plus court que Début–Fin de la durée du fondu, car le recouvrement n’est mélangé qu’une fois.',
  tool_make_a_seamless_audio_loop_faq_a5:
    'WAV pour un moteur de jeu qui relance le fichier. MP3 plus léger (128 kbit/s) si l’appli de live ne boucle pas ; l’encodeur ne charge qu’au clic Exporter MP3.',
  tool_make_a_seamless_audio_loop_faq_a6:
    'Répétitions vaut 1 par défaut. Dans les réglages avancés, collez 4 ou 8 copies. Plus d’environ 3 minutes est refusé. Pas de version 10 heures.',
  tool_make_a_seamless_audio_loop_faq_a7:
    'Ne mélange pas deux morceaux, n’est pas un éditeur sonore en ligne, n’écrit pas de sonnerie M4A, ne cherche pas le point de boucle tout seul et ne rippe pas YouTube.',
  tool_make_a_seamless_audio_loop_faq_a8:
    'Ordinateur : environ 40 Mo ou 20 minutes. Écran étroit : environ 20 Mo ou 8 minutes. Au-delà, refus, pas de coupe silencieuse.',
  tool_make_a_seamless_audio_loop_faq_q1: 'Mon audio est-il envoyé au serveur ?',
  tool_make_a_seamless_audio_loop_faq_q2: 'J’ai cherché boucle audio, loop audio ou looper. Est-ce un autre outil ?',
  tool_make_a_seamless_audio_loop_faq_q3: 'Comment le fondu enchaîné enlève-t-il le claquement ?',
  tool_make_a_seamless_audio_loop_faq_q4: 'Pourquoi l’export est-il plus court que la zone ?',
  tool_make_a_seamless_audio_loop_faq_q5: 'J’exporte WAV pour le jeu ou MP3 pour le live ?',
  tool_make_a_seamless_audio_loop_faq_q6: 'Le logiciel de streaming ne boucle pas. Puis-je coller plusieurs tours ?',
  tool_make_a_seamless_audio_loop_faq_q7: 'Est-ce un mix DJ de deux titres, une sonnerie ou un chercheur de boucle IA ?',
  tool_make_a_seamless_audio_loop_faq_q8: 'Quelle taille de fichier puis-je traiter ?',
  tool_make_a_seamless_audio_loop_how_body:
    'Marquez la zone à répéter, fondez la fin dans le début, puis téléchargez WAV ou MP3 sans envoyer le fichier.',
  tool_make_a_seamless_audio_loop_how_item_1: 'Ouvrez un fichier audio (ou cliquez sur Charger un exemple).',
  tool_make_a_seamless_audio_loop_how_item_2:
    'Cliquez ou glissez sur la forme d’onde (ou saisissez Début et Fin). Changez le fondu enchaîné si 50 ms ne convient pas (20 / 50 / 200 / 500 ms).',
  tool_make_a_seamless_audio_loop_how_item_3: 'Cliquez sur Créer la boucle.',
  tool_make_a_seamless_audio_loop_how_item_4: 'Cliquez sur Lecture pour entendre le raccord, puis Exporter WAV ou Exporter MP3.',
  tool_make_a_seamless_audio_loop_how_title: 'Comment ça marche',
  tool_make_a_seamless_audio_loop_hud_decode: 'Décodage du fichier dans cet onglet…',
  tool_make_a_seamless_audio_loop_hud_decoded: 'Décodé. Réglez Début, Fin et le fondu, puis cliquez sur Créer la boucle.',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: '{s}s écoulées',
  tool_make_a_seamless_audio_loop_hud_encode: 'Encodage MP3…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'Corrigez le fichier, les temps ou le fondu, puis Créer la boucle à nouveau.',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'Créer la boucle s’est arrêté',
  tool_make_a_seamless_audio_loop_hud_loop: 'Enroulement de la queue dans la tête…',
  tool_make_a_seamless_audio_loop_hud_next: 'Terminé. Ensuite : Lecture du raccord, puis Exporter WAV ou Exporter MP3.',
  tool_make_a_seamless_audio_loop_hud_next_mp3: 'Terminé. Le téléchargement MP3 devrait démarrer.',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: 'Décoder',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'Encoder',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'Boucle',
  tool_make_a_seamless_audio_loop_hud_title: 'Progression de la boucle',
  tool_make_a_seamless_audio_loop_hud_working: 'Démarrage…',
  tool_make_a_seamless_audio_loop_make: 'Créer la boucle',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_make_a_seamless_audio_loop_pause: 'Pause',
  tool_make_a_seamless_audio_loop_play: 'Lecture',
  tool_make_a_seamless_audio_loop_preview_hint:
    'Cliquez ou glissez la forme d’onde pour Début et Fin. Après Créer la boucle, Lecture répète le résultat pour entendre le raccord.',
  tool_make_a_seamless_audio_loop_repeats: 'Répétitions (copies collées)',
  tool_make_a_seamless_audio_loop_repeats_hint:
    '1 cycle par défaut si le lecteur sait boucler. Utilisez 4 ou 8 sinon. Plus d’environ 3 minutes est refusé.',
  tool_make_a_seamless_audio_loop_result_tpl:
    'La boucle dure {dur}s ({start}–{end}s, fondu {fade} ms, {n} répétition(s)). L’export est prêt.',
  tool_make_a_seamless_audio_loop_rules_body:
    'La zone est copiée, puis un enveloppe à puissance égale (ou linéaire) mélange les derniers échantillons de fondu dans les premiers. La durée de sortie = zone moins fondu. Les répétitions collent ce cycle. WAV = PCM 16 bits. MP3 = CBR.',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'Plafond ordinateur : environ 40 Mo ou 20 minutes ; écran étroit : environ 20 Mo ou 8 minutes. Au-delà, refus, pas de coupe.',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'Le fichier reste sur l’appareil ; il n’est pas envoyé à un serveur. L’encodeur MP3 se charge depuis ce site seulement après Exporter MP3.',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'Le fondu doit être plus court que la zone. Le cycle exporté perd exactement ce recouvrement. Puissance égale est la courbe par défaut.',
  tool_make_a_seamless_audio_loop_rules_item_4:
    'Le décodage dépend du navigateur. DRM, certains codecs et conteneurs vidéo échouent avec une erreur explicite.',
  tool_make_a_seamless_audio_loop_rules_item_5:
    'Ne mélange pas deux morceaux, n’écrit pas de M4A, ne mesure pas le BPM, ne cherche pas le point de boucle, ne récupère pas YouTube. Un fichier, une zone, une boucle.',
  tool_make_a_seamless_audio_loop_rules_title: 'Règles à prévoir',
  tool_make_a_seamless_audio_loop_sample: 'Charger un exemple',
  tool_make_a_seamless_audio_loop_start: 'Début (secondes)',
  tool_make_a_seamless_audio_loop_status_done: 'Terminé.',
  tool_make_a_seamless_audio_loop_title: 'Faire une boucle audio sans couture',
  tool_make_a_seamless_audio_loop_usecase_1:
    'Transformer un lit de jeu de deux secondes en boucle audio sans couture et exporter un WAV pour le moteur.',
  tool_make_a_seamless_audio_loop_usecase_2:
    'Nappe de live : marquer le groove, garder 50 ms de fondu, coller 8 tours dans les réglages avancés, exporter MP3.',
  tool_make_a_seamless_audio_loop_usecase_3:
    'Adoucir une boucle d’ambiance ou de drone avec 200–500 ms de fondu enchaîné pour que le raccord disparaisse.',
  tool_make_a_seamless_audio_loop_usecases_title: 'Quand s’en servir',
  tool_make_a_seamless_audio_loop_why_choose_body:
    'Conçu pour un enroulement et un téléchargement, avec un fondu que l’on entend et des plafonds écrits sur la page.',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    'Décodage et enroulement restent dans cet onglet ; Exporter MP3 est le premier chargement de l’encodeur.',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    'Le fondu à puissance égale est activé ; les pastilles 20 / 50 / 200 / 500 ms couvrent batterie et nappes.',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'Après Créer la boucle, Lecture répète le résultat pour juger le raccord avant le téléchargement.',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    'Fichiers trop gros et sorties collées de plus d’environ 3 minutes sont refusés, pas coupés en silence.',
  tool_make_a_seamless_audio_loop_why_choose_title: 'Pourquoi utiliser Faire une boucle audio sans couture',
  tool_make_a_seamless_audio_loop_zerocross: 'Coller Début et Fin au passage par zéro le plus proche',
  tool_make_a_seamless_audio_loop_zerocross_hint:
    'Activé par défaut. Stabilise les bords avant le fondu. Désactivez pour des bords exacts à l’échantillon.',
};
export default fr;
