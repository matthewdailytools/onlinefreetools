/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / fr).
 * H1 tâche ; découper flac cue / séparer les pistes cue dans desc et FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Textes français orientés recherche : découper une image disque avec une feuille cue. */
const fr: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: 'Réglages avancés (facultatif)',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'Dans cet onglet, découpez une image disque avec une feuille cue : ouvrez l’image et le .cue, cliquez Séparer les pistes puis Télécharger le ZIP. Les coupes suivent INDEX 01 (75 images par seconde). Les fichiers restent sur l’appareil et ne sont pas envoyés sur un serveur.',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'Débit MP3',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: '128 kbps par défaut. Uniquement si le ZIP est en MP3.',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'Choisir une image disque et un fichier .cue',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'Effacer',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'Télécharger la piste',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'Écouter la piste',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'Feuille cue',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    'Couper une image locale à INDEX 01 et récupérer des pistes nommées en ZIP — reste sur l’appareil, pas d’envoi serveur.',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'Découpez une image disque avec une feuille cue sur l’appareil : coupes INDEX 01, pistes nommées dans un ZIP, fichiers non envoyés. Étapes : ouvrez l’image et le .cue (ou collez la feuille), Séparer les pistes, Télécharger le ZIP. Exemple : échantillon de 6,00 s avec INDEX 01 à 0 / 2 / 4 s → Intro / Middle / Outro de 2,00 s. Chercher découper flac cue, séparer les pistes cue ou extraire les pistes d’un cue, c’est le même travail. Pas de coupe au silence, ni morceaux égaux, ni chapitres YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'Télécharger le ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'Déposez les deux fichiers : WAV, FLAC, MP3 ou BIN plus le .cue. Le traitement reste dans cet onglet.',
  tool_split_a_disc_image_with_a_cue_sheet_empty: 'Ajoutez d’abord l’image et la feuille cue.',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: 'Ajoutez l’image correspondante (WAV, FLAC, MP3 ou BIN).',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: 'Ajoutez un .cue ou collez la feuille cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'Ce navigateur ne décode pas l’APE. Convertissez l’image en WAV ou FLAC, gardez la même feuille cue, puis Séparer les pistes.',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'Image au-dessus du plafond (environ 80 Mo / 30 min sur bureau, 30 Mo / 10 min sur écran étroit). Un .bin CD de 700 Mo ne rentre pas dans cet onglet.',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'Ce texte n’est pas une feuille cue utilisable. Il faut des lignes TRACK et des INDEX 01 en MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'Cette feuille décrit un disque de données (pistes MODE), pas une image audio. Seules les pistes AUDIO sont coupées.',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'Ce navigateur n’a pas pu décoder l’image. Essayez WAV ou FLAC, ou un fichier sans DRM. L’APE n’est pas décodé ici.',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: 'Rien à traiter. Chargez des fichiers ou l’exemple.',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'L’encodeur MP3 n’a pas chargé. Restez dans l’onglet et réessayez Télécharger le ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'Cette feuille liste plus d’un FILE. C’est déjà un fichier par piste ; il n’y a rien à découper ici.',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'Aucun INDEX 01. Un séparateur cue a besoin de ces départs MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    'Plus de 50 pistes. La page refuse de tronquer. Feuille plus courte, ou shnsplit sur l’ordinateur.',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    'Pas de vidéo en entrée principale. Cette page découpe une image audio avec une feuille cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'La bibliothèque ZIP n’a pas chargé. Restez dans l’onglet et réessayez Télécharger le ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'Charger un exemple crée une image de 6,00 s (440 / 550 / 660 Hz, deux secondes chacune) et une feuille avec INDEX 01 à 00:00:00, 00:02:00 et 00:04:00 (Intro Tone, Middle Tone, Outro Tone). Séparer les pistes donne trois fichiers de 2,00 s. Télécharger le ZIP écrit 01 Intro Tone.wav sauf MP3 dans les réglages avancés.',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: 'Exemple',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'Non. Analyse, décodage, coupe et ZIP se font dans cet onglet. Les scripts viennent de ce site. Image et feuille ne partent pas vers nos serveurs.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    'Oui. Découper flac cue, séparer les pistes cue, split ape cue ou extraire les pistes d’un cue, c’est cet outil : suivre INDEX 01 et récupérer un ZIP nommé. APE comme requête vise le même travail, mais .ape ne se décode pas — passez en WAV/FLAC et gardez la feuille.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 est le début de piste (MM:SS:FF, 75 images/s). INDEX 00 marque un pregap ; affiché, la coupe par défaut reste 01. La dernière piste va jusqu’à la fin de l’image.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'Non. Couper aux silences ou à durée égale, ce sont d’autres pages. Ici, seulement la feuille cue. Les chapitres YouTube sans FILE/INDEX sont hors sujet.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    'Collez le texte sous la zone de dépôt s’il n’y a pas de .cue. Déposer un .cue fait la même analyse.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'Dans le ZIP : {nn} {title}.wav (ou .mp3). Une piste seule se télécharge aussi depuis la liste. Plafond 50 ; au-delà, refus.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'Non. Ni débruitage, ni muet vidéo, ni parts égales, ni trim à la main, ni rip YouTube, ni ISO de données. Utilisez une image audio dont vous avez les droits.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'Bureau : environ 80 Mo ou 30 minutes. Écran étroit : environ 30 Mo ou 10 minutes. Un .bin CD de 700 Mo est refusé. Le trop gros s’arrête avant le décodage.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: 'Mon image disque et ma feuille cue sont-elles envoyées ?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2:
    'J’ai cherché découper flac cue ou séparer les pistes cue. Est-ce un autre outil ?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'Quelle différence entre INDEX 01 et INDEX 00 ?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: 'Coupe-t-il au silence, à durée égale ou aux chapitres YouTube ?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: 'Puis-je coller la feuille cue au lieu d’un fichier .cue ?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: 'Comment s’appellent les fichiers, combien de pistes au plus ?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: 'Décoder l’APE, couper une vidéo, parts égales ou ripper YouTube ?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: 'Quelle taille d’image puis-je traiter ?',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'Format dans le ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV est du PCM sans perte. L’encodeur MP3 ne se charge qu’au clic Télécharger le ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'Lire les INDEX 01 de la feuille cue, couper l’image disque à ces instants, télécharger un ZIP de pistes nommées, sans envoi.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'Ouvrir une image disque et son .cue (ou Charger un exemple).',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'Ou coller la feuille cue s’il n’y a que le texte.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: 'Cliquer Séparer les pistes.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: 'Cliquer Télécharger le ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: 'Mode d’emploi',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'Décodage de l’image dans cet onglet…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'Feuille lue, image décodée. Les marques blanches sont les INDEX 01. Cliquez Séparer les pistes si la liste convient.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: '{s}s écoulées',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'Encodage des pistes MP3…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'Corrigez la feuille ou l’image, puis Séparer les pistes.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'Découpe cue arrêtée',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: 'Terminé. Étape suivante : Télécharger le ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: 'Terminé. Le téléchargement du ZIP devrait démarrer.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'Mise des pistes dans le ZIP…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'Lecture de la feuille cue…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'Coupe aux INDEX 01…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: 'Décoder',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: 'Empaqueter',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: 'Analyser',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: 'Séparer',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'Progression de la découpe cue',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: 'Démarrage…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'Image disque',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch · {tracks} INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'Collez une feuille cue complète (FILE, TRACK, INDEX 01). Pas une liste de chapitres YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'Ou coller la feuille cue',
  tool_split_a_disc_image_with_a_cue_sheet_pause: 'Pause',
  tool_split_a_disc_image_with_a_cue_sheet_play: 'Lecture',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: 'Les marques blanches sont les départs INDEX 01. Lecture écoute toute l’image.',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig}s · {count} piste(s) : {list}. Télécharger le ZIP est prêt.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'Chaque INDEX 01 est mm:ss:ff à 75 images/s : t = mm×60 + ss + ff/75. La piste n va jusqu’au INDEX 01 suivant, la dernière jusqu’à la fin. Le PCM 16 bits WAV/BIN se coupe par décalage d’octets. Les autres formats passent par le décodeur du navigateur. Le ZIP se construit ici.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    'La coupe est INDEX 01. INDEX 00 s’affiche comme pregap, ce n’est pas la coupe par défaut. Les temps sont des frames CD, pas des millisecondes.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'Plafond bureau : environ 80 Mo ou 30 minutes ; écran étroit : environ 30 Mo ou 10 minutes. Au-delà : refus, pas de troncature. Plus de 50 pistes : refus. Un .bin de 700 Mo ne rentre pas.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'Les fichiers restent sur l’appareil ; pas d’envoi serveur. JSZip et l’encodeur MP3 se chargent depuis ce site seulement après Télécharger le ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE et BINARY (.bin, secteurs CDDA de 2352 octets) se coupent sans codec complet. MP3/FLAC/M4A ont besoin du décodeur du navigateur. APE/TTA/WavPack échouent avec un message clair.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    'Un seul FILE plus INDEX 01. Pas de silence, durée égale, chapitres YouTube, taille, muet vidéo ni rip YouTube. Plusieurs FILE : déjà séparé.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: 'Règles à prévoir',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'Charger un exemple',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'Séparer les pistes',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: 'Terminé.',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'Découpez une image disque avec une feuille cue',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}s ({start}s–{end}s)',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'Pistes prêtes pour le ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'Séparer un rip FLAC+CUE d’Exact Audio Copy ou XLD en pistes nommées, sans installer shnsplit.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'Découper une image WAV ou BIN d’une face vinyle ou d’un CD avec sa feuille cue, puis emporter le ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'Extraire les pistes d’un set DJ livré avec une feuille cue, via INDEX 01 plutôt qu’en devinant les silences.',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: 'Bons cas d’usage',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'Conçu pour les coupes INDEX 01 et un ZIP nommé, franc sur l’APE et les .bin trop gros.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'Coupe à INDEX 01 (75 im/s) et nomme le ZIP d’après TITLE, pas en tranches de N secondes ni aux silences.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'Une zone pour l’image et le .cue, collage de la même feuille — pas un éditeur de chapitres YouTube déguisé.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'Les fichiers restent dans cet onglet, sans envoi ; JSZip et lamejs se chargent seulement au clic Télécharger le ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE, feuilles à plusieurs FILE et images trop lourdes sont refusés clairement, sans promesse de 700 Mo qui plante l’onglet.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title:
    'Pourquoi utiliser Découpez une image disque avec une feuille cue',
};
export default fr;
