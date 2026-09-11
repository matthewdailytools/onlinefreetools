/**
 * i18n tool shard (trim-an-audio-clip-and-export / fr).
 * H1 : Rognez un extrait audio et exportez-le. Coupeur MP3 absorbe en FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Textes français pour rogner un extrait et l'exporter. */
const fr: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: 'Réglages avancés (facultatif)',
  tool_trim_an_audio_clip_and_export_article:
    'Ouvrez un fichier audio sur l\'appareil, renseignez Début et Fin, cliquez Rogner puis Exporter WAV ou Exporter MP3. Le fichier reste sur l\'appareil, sans envoi au serveur. Un seul découpage, pas une station de forme d\'onde.',
  tool_trim_an_audio_clip_and_export_bitrate: 'Débit MP3',
  tool_trim_an_audio_clip_and_export_bitrate_hint: '128 kbps par défaut. Utilisé seulement au clic sur Exporter MP3.',
  tool_trim_an_audio_clip_and_export_choose_file: 'Choisir un fichier audio',
  tool_trim_an_audio_clip_and_export_clear: 'Effacer',
  tool_trim_an_audio_clip_and_export_desc:
    'Rognez un audio ou un extrait, fixez début et fin, exportez WAV ou MP3. Reste sur l\'appareil, sans envoi au serveur.',
  tool_trim_an_audio_clip_and_export_description:
    'Rognez un audio déjà sur l\'appareil : réglez Début et Fin, puis téléchargez WAV ou MP3, sans envoi au serveur. Étapes : ouvrez le fichier, cliquez ou glissez sur la forme d\'onde (ou saisissez Début et Fin), Rogner, Exporter WAV ou Exporter MP3. Exemple : d\'un ton de 5 s, gardez 1,00–3,00 s en WAV (ou MP3 à 128 kbps). Couper un mp3, découper un extrait, couper un morceau ou un trimmer audio est le même export début–fin. Ce n\'est pas un éditeur d\'onde complet ; la vidéo n\'est pas l\'entrée principale.',
  tool_trim_an_audio_clip_and_export_drop_hint: 'Ou déposez un WAV, MP3, M4A ou OGG ici. Le travail reste dans cet onglet.',
  tool_trim_an_audio_clip_and_export_empty: 'Choisissez d\'abord un fichier audio.',
  tool_trim_an_audio_clip_and_export_end: 'Fin (secondes)',
  tool_trim_an_audio_clip_and_export_err_caps:
    'Ce fichier dépasse le plafond de cet appareil (environ 40 Mo / 20 min sur ordinateur, 20 Mo / 8 min sur écran étroit). Rognez-le ailleurs ou prenez un fichier plus court.',
  tool_trim_an_audio_clip_and_export_err_decode:
    'Ce navigateur n\'a pas pu décoder le fichier. Essayez WAV ou MP3, ou un extrait sans DRM.',
  tool_trim_an_audio_clip_and_export_err_empty: 'Rien à rogner. Chargez un fichier ou l\'exemple d\'abord.',
  tool_trim_an_audio_clip_and_export_err_lame: 'L\'encodeur MP3 n\'a pas chargé. Restez dans cet onglet et recliquez Exporter MP3.',
  tool_trim_an_audio_clip_and_export_err_range: 'La Fin doit être après le Début, dans la durée décodée.',
  tool_trim_an_audio_clip_and_export_err_video:
    'Cette page n\'accepte pas la vidéo comme entrée principale. Extraire l\'audio d\'abord, puis rogner le son.',
  tool_trim_an_audio_clip_and_export_example:
    'Charger un exemple construit en mémoire un ton de 5,00 s, met Début 1,00 et Fin 3,00, puis Rogner laisse environ 2,00 s. Exporter WAV écrit du PCM ; Exporter MP3 utilise 128 kbps sauf changement dans les réglages avancés.',
  tool_trim_an_audio_clip_and_export_example_title: 'Exemple',
  tool_trim_an_audio_clip_and_export_export_mp3: 'Exporter MP3',
  tool_trim_an_audio_clip_and_export_export_wav: 'Exporter WAV',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'Non. Décodage et coupe se font dans cet onglet. Les scripts viennent de ce site. Le fichier n\'est pas envoyé à nos serveurs.',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'Non. Couper un mp3, rogner un audio, découper un extrait, couper un morceau ou un trimmer audio, c\'est cet outil : garder Début–Fin, puis Exporter WAV ou Exporter MP3.',
  tool_trim_an_audio_clip_and_export_faq_a3:
    'Par défaut la coupe se cale sur un passage par zéro proche pour moins claquer. Vous pouvez le couper dans Réglages avancés (facultatif).',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV conserve le PCM coupé. MP3 est plus léger (128 kbps par défaut) ; l\'encodeur ne charge qu\'au clic Exporter MP3.',
  tool_trim_an_audio_clip_and_export_faq_a5:
    'Non. Ici on rogne début et fin puis on exporte. Un éditeur audio / station d\'onde est un autre outil, plus tard.',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'Vous pouvez garder environ 30 s, mais pas d\'écriture M4A ni de fondu auto. La fiche sonnerie est un autre travail.',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'Non. Extraire l\'audio d\'une vidéo ou de YouTube est hors périmètre. Utilisez un fichier son que vous avez le droit de traiter.',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'Ordinateur : environ 40 Mo ou 20 minutes. Écran étroit : environ 20 Mo ou 8 minutes. Au-dessus du plafond, refus ; pas de coupe silencieuse.',
  tool_trim_an_audio_clip_and_export_faq_q1: 'Mon audio est-il envoyé ?',
  tool_trim_an_audio_clip_and_export_faq_q2: 'J\'ai cherché couper un mp3, rogner un audio ou découper un extrait. Est-ce un autre outil ?',
  tool_trim_an_audio_clip_and_export_faq_q3: 'Pourquoi la coupe bouge-t-elle un peu ? Ailleurs j\'entends un clic.',
  tool_trim_an_audio_clip_and_export_faq_q4: 'J\'exporte en WAV ou en MP3 ?',
  tool_trim_an_audio_clip_and_export_faq_q5: 'Est-ce un éditeur audio en ligne ?',
  tool_trim_an_audio_clip_and_export_faq_q6: 'Puis-je faire une sonnerie M4A iPhone ?',
  tool_trim_an_audio_clip_and_export_faq_q7: 'Puis-je extraire l\'audio d\'une vidéo ou de YouTube ?',
  tool_trim_an_audio_clip_and_export_faq_q8: 'Jusqu\'à quelle taille puis-je rogner ?',
  tool_trim_an_audio_clip_and_export_how_body:
    'Gardez seulement la partie entre Début et Fin, puis téléchargez WAV ou MP3 sans envoi au serveur.',
  tool_trim_an_audio_clip_and_export_how_item_1: 'Ouvrez un fichier audio (ou cliquez Charger un exemple).',
  tool_trim_an_audio_clip_and_export_how_item_2: 'Cliquez ou glissez sur la forme d\'onde (ou saisissez Début et Fin) pour la partie à garder.',
  tool_trim_an_audio_clip_and_export_how_item_3: 'Cliquez Rogner.',
  tool_trim_an_audio_clip_and_export_how_item_4: 'Cliquez Exporter WAV ou Exporter MP3.',
  tool_trim_an_audio_clip_and_export_how_title: 'Comment ça marche',
  tool_trim_an_audio_clip_and_export_hud_decode: 'Décodage du fichier dans cet onglet…',
  tool_trim_an_audio_clip_and_export_hud_decoded: 'Décodé. Réglez Début et Fin, puis cliquez Rogner.',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: '{s}s écoulées',
  tool_trim_an_audio_clip_and_export_hud_encode: 'Encodage MP3…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'Corrigez le fichier ou les temps, puis Rogner à nouveau.',
  tool_trim_an_audio_clip_and_export_hud_fail_title: 'Rognage arrêté',
  tool_trim_an_audio_clip_and_export_hud_next: 'Terminé. Suite : Exporter WAV ou Exporter MP3.',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: 'Terminé. Le téléchargement MP3 devrait démarrer.',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: 'Décoder',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'Encoder',
  tool_trim_an_audio_clip_and_export_hud_step_trim: 'Rogner',
  tool_trim_an_audio_clip_and_export_hud_title: 'Progression du rognage',
  tool_trim_an_audio_clip_and_export_hud_trim: 'Coupe de l\'intervalle début–fin…',
  tool_trim_an_audio_clip_and_export_hud_working: 'Démarrage…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_trim_an_audio_clip_and_export_pause: 'Pause',
  tool_trim_an_audio_clip_and_export_play: 'Lecture',
  tool_trim_an_audio_clip_and_export_preview_hint: 'Cliquez ou glissez sur la forme d\'onde pour fixer Début et Fin. Lecture écoute cet intervalle.',
  tool_trim_an_audio_clip_and_export_result_tpl: '{dur}s conservées ({start}–{end}s). Export prêt.',
  tool_trim_an_audio_clip_and_export_rules_body:
    'Les échantillons entre Début et Fin sont copiés dans un nouveau tampon. Par défaut chaque bord se cale sur un passage par zéro. WAV écrit du PCM 16 bits. MP3 est en CBR au débit choisi.',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'Sur ordinateur le plafond est d\'environ 40 Mo ou 20 minutes ; écran étroit, environ 20 Mo ou 8 minutes. Au-delà : refus, pas de coupe silencieuse.',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'Les fichiers restent sur l\'appareil, sans envoi au serveur. L\'encodeur MP3 se charge depuis ce site seulement après Exporter MP3.',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    'Le décodage dépend du navigateur. DRM, certains codecs et conteneurs vidéo échouent avec une erreur explicite.',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'Pas de mixage, pas de fondu, pas de M4A, pas de récupération YouTube. Un fichier, un intervalle, un export.',
  tool_trim_an_audio_clip_and_export_rules_title: 'Règles à prévoir',
  tool_trim_an_audio_clip_and_export_sample: 'Charger un exemple',
  tool_trim_an_audio_clip_and_export_start: 'Début (secondes)',
  tool_trim_an_audio_clip_and_export_status_done: 'Terminé.',
  tool_trim_an_audio_clip_and_export_title: 'Rognez un extrait audio et exportez-le',
  tool_trim_an_audio_clip_and_export_trim: 'Rogner',
  tool_trim_an_audio_clip_and_export_usecase_1: 'Rognez un podcast : sautez le jingle de 8 s, exportez un MP3 pour le chat.',
  tool_trim_an_audio_clip_and_export_usecase_2: 'Gardez 12 s d\'une réunion et téléchargez un WAV d\'archive.',
  tool_trim_an_audio_clip_and_export_usecase_3: 'Coupez le silence aux deux bouts d\'un mémo vocal — la même coupe que couper un mp3 ou découper un extrait.',
  tool_trim_an_audio_clip_and_export_usecases_title: 'Cas qui collent',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    'Conçu pour une coupe et un téléchargement, avec plafonds et anti-clic vérifiables sur la page.',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    'Décodage et coupe restent dans cet onglet ; le script d\'encodeur n\'apparaît qu\'au clic Exporter MP3.',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    'Fichier trop gros ou trop long : refus, pas de coupe silencieuse.',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'Le passage par zéro est actif par défaut pour moins claquer au raccord ; vous pouvez le désactiver.',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV et MP3 sont deux boutons d\'export, alignés sur les étapes ; le débit n\'est que dans les avancés.',
  tool_trim_an_audio_clip_and_export_why_choose_title: 'Pourquoi choisir nos outils Rognez un extrait audio et exportez-le',
  tool_trim_an_audio_clip_and_export_zerocross: 'Caler Début et Fin sur un passage par zéro proche',
  tool_trim_an_audio_clip_and_export_zerocross_hint: 'Activé par défaut. Réduit les clics au raccord. Désactivez pour un bord exact à l\'échantillon.',
};
export default fr;
