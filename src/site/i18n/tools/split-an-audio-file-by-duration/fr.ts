/**
 * i18n tool shard (split-an-audio-file-by-duration / fr).
 * H1 en phrase de tâche ; parties égales / toutes les 60 s dans desc et FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Copie française : découper un fichier audio par durée et récupérer un ZIP. */
const fr: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: 'Réglages avancés (facultatif)',
  tool_split_an_audio_file_by_duration_article:
    'Découpez un fichier audio par durée dans cet onglet : ouvrez le fichier, indiquez les secondes, cliquez sur Découper par durée puis Télécharger le ZIP. Chaque extrait dure N secondes, le dernier garde le reste. Le fichier reste sur l’appareil et n’est pas envoyé au serveur.',
  tool_split_an_audio_file_by_duration_bitrate: 'Débit MP3',
  tool_split_an_audio_file_by_duration_bitrate_hint: '128 kbps par défaut. Uniquement si le ZIP est en MP3.',
  tool_split_an_audio_file_by_duration_chip_180: '3 min',
  tool_split_an_audio_file_by_duration_chip_30: '30 s',
  tool_split_an_audio_file_by_duration_chip_300: '5 min',
  tool_split_an_audio_file_by_duration_chip_60: '60 s',
  tool_split_an_audio_file_by_duration_choose_file: 'Choisir un fichier audio',
  tool_split_an_audio_file_by_duration_chunk: 'Durée de chaque morceau (secondes)',
  tool_split_an_audio_file_by_duration_chunk_hint:
    '2 s correspond à l’exemple. Pour un cours, 60 s ou 3 min. Le dernier extrait conserve le temps restant.',
  tool_split_an_audio_file_by_duration_clear: 'Effacer',
  tool_split_an_audio_file_by_duration_clip_download: 'Télécharger cet extrait',
  tool_split_an_audio_file_by_duration_clip_play: 'Écouter cet extrait',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'Extrait {n} · {dur}s ({start}s–{end}s)',
  tool_split_an_audio_file_by_duration_clips_title: 'Extraits prêts pour le ZIP',
  tool_split_an_audio_file_by_duration_desc:
    'Coupez le fichier en extraits de même durée et téléchargez un ZIP ; reste sur l’appareil, sans envoi au serveur.',
  tool_split_an_audio_file_by_duration_description:
    'Découpez un fichier audio par durée sur votre appareil : morceaux égaux, le dernier garde le reste, ZIP à télécharger — sans envoi au serveur. Étapes : ouvrez le fichier, réglez les secondes (l’exemple utilise 2 s ; pastilles 30 / 60 / 180 / 300 s), Découper par durée, Télécharger le ZIP. Exemple : 5,00 s à 2 s donnent 2,00 / 2,00 / 1,00 s. Découper audio par durée, partager un mp3 en parties égales ou couper toutes les 60 secondes, c’est le même travail. Pas de coupe aux silences, pas de cue, pas de trim à la main, pas de muet vidéo.',
  tool_split_an_audio_file_by_duration_download_zip: 'Télécharger le ZIP',
  tool_split_an_audio_file_by_duration_drop_hint: 'Ou déposez un WAV, MP3, M4A ou OGG ici. Le traitement reste dans cet onglet.',
  tool_split_an_audio_file_by_duration_empty: 'Choisissez d’abord un fichier audio.',
  tool_split_an_audio_file_by_duration_equal_parts: 'Ou partager en N parties égales',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    'Vide = champ des secondes. 2–50 fixe la durée à total ÷ N pour cette coupe.',
  tool_split_an_audio_file_by_duration_err_caps:
    'Le fichier dépasse la limite de cet appareil (environ 40 Mo / 20 min sur bureau, 20 Mo / 8 min sur écran étroit). Raccourcissez-le ailleurs ou prenez un fichier plus court.',
  tool_split_an_audio_file_by_duration_err_chunk:
    'La durée doit être entre 0,5 et 1200 secondes. Augmentez-la si vous atteignez 50 extraits.',
  tool_split_an_audio_file_by_duration_err_decode:
    'Ce navigateur n’a pas pu décoder le fichier. Essayez WAV ou MP3, ou un extrait sans DRM.',
  tool_split_an_audio_file_by_duration_err_empty: 'Rien à traiter. Chargez un fichier ou l’exemple.',
  tool_split_an_audio_file_by_duration_err_lame: 'L’encodeur MP3 n’a pas chargé. Restez sur l’onglet et réessayez Télécharger le ZIP.',
  tool_split_an_audio_file_by_duration_err_too_many:
    'Plus de 50 extraits. Augmentez les secondes (60 s ou 3 min). La page refuse au lieu de tronquer.',
  tool_split_an_audio_file_by_duration_err_video:
    'Cette page n’accepte pas la vidéo en entrée principale. Elle découpe un fichier son par durée ; elle ne rend pas une vidéo muette.',
  tool_split_an_audio_file_by_duration_err_zip: 'La bibliothèque ZIP n’a pas chargé. Restez sur l’onglet et réessayez Télécharger le ZIP.',
  tool_split_an_audio_file_by_duration_example:
    'Charger un exemple crée un ton de 5,00 s à 440 Hz. Découper par durée à 2,00 s coupe à 2,00 s et 4,00 s : trois extraits 2,00 / 2,00 / 1,00 s (le dernier garde le reste). Télécharger le ZIP écrit sample-01.wav sauf si vous choisissez MP3 dans les réglages avancés.',
  tool_split_an_audio_file_by_duration_example_title: 'Exemple',
  tool_split_an_audio_file_by_duration_faq_a1:
    'Non. Décodage, coupe et ZIP se font dans cet onglet. Les scripts viennent de ce site. Le fichier n’est pas envoyé à nos serveurs.',
  tool_split_an_audio_file_by_duration_faq_a2:
    'Oui. Découper audio par durée, partager un mp3 en parties égales, couper toutes les 60 secondes ou ZIP d’extraits, c’est cet outil : couper le fichier local toutes les N secondes et emporter plusieurs fichiers dans un ZIP. Les N parties égales sont dans les réglages avancés.',
  tool_split_an_audio_file_by_duration_faq_a3:
    'Le dernier extrait garde le temps restant. Un fichier de 5,00 s à 2 s devient 2,00 / 2,00 / 1,00 s, sans silence ajouté.',
  tool_split_an_audio_file_by_duration_faq_a4:
    'Non. Découper un enregistrement aux silences coupe aux pauses. Ici, c’est l’horloge. Cue et coupe par taille de fichier sont hors périmètre.',
  tool_split_an_audio_file_by_duration_faq_a5:
    'Gardez 2 s sur l’exemple. Pour les réseaux, 30 s ou 60 s ; pour un cours, 3 min ou 5 min. Quatre fichiers égaux : tapez 4 en avancé.',
  tool_split_an_audio_file_by_duration_faq_a6:
    'Dans le ZIP : {stem}-01.wav (ou .mp3). Un extrait seul se télécharge aussi depuis la liste. Plafond 50 ; au-delà, refus.',
  tool_split_an_audio_file_by_duration_faq_a7:
    'Non. Ni débruitage, ni muet vidéo, ni cue/APE, ni trim à la main, ni rip YouTube. Utilisez un fichier dont vous avez les droits.',
  tool_split_an_audio_file_by_duration_faq_a8:
    'Bureau : environ 40 Mo ou 20 minutes. Écran étroit : environ 20 Mo ou 8 minutes. Au-delà, refus avant décodage.',
  tool_split_an_audio_file_by_duration_faq_q1: 'Mon fichier audio est-il envoyé au serveur ?',
  tool_split_an_audio_file_by_duration_faq_q2:
    'J’ai cherché partager un mp3 en parties égales ou découper audio par durée. Est-ce un autre outil ?',
  tool_split_an_audio_file_by_duration_faq_q3: 'S’il reste du temps, que devient le dernier extrait ?',
  tool_split_an_audio_file_by_duration_faq_q4: 'Coupe-t-il aux silences, suit-il un cue ou la taille du fichier ?',
  tool_split_an_audio_file_by_duration_faq_q5: 'Quelle durée mettre par morceau ?',
  tool_split_an_audio_file_by_duration_faq_q6: 'Comment s’appellent les fichiers, et combien d’extraits au plus ?',
  tool_split_an_audio_file_by_duration_faq_q7: 'Peut-il débruiter, couper une vidéo, lire un cue ou extraire YouTube ?',
  tool_split_an_audio_file_by_duration_faq_q8: 'Quelle taille de fichier est acceptable ?',
  tool_split_an_audio_file_by_duration_format: 'Format dans le ZIP',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV est du PCM sans perte. Le MP3 charge l’encodeur seulement au clic sur Télécharger le ZIP.',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    'Coupez toutes les N secondes selon l’horloge, laissez le reste sur le dernier extrait, puis téléchargez un ZIP sans envoyer le fichier au serveur.',
  tool_split_an_audio_file_by_duration_how_item_1: 'Ouvrez un fichier audio (ou cliquez sur Charger un exemple).',
  tool_split_an_audio_file_by_duration_how_item_2: 'Gardez 2 secondes, ou touchez une pastille / saisissez la durée.',
  tool_split_an_audio_file_by_duration_how_item_3: 'Cliquez sur Découper par durée.',
  tool_split_an_audio_file_by_duration_how_item_4: 'Cliquez sur Télécharger le ZIP.',
  tool_split_an_audio_file_by_duration_how_title: 'Mode d’emploi',
  tool_split_an_audio_file_by_duration_hud_decode: 'Décodage du fichier dans cet onglet…',
  tool_split_an_audio_file_by_duration_hud_decoded: 'Décodé. Les marques blanches sont les coupes prévues. Cliquez sur Découper par durée si la durée convient.',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: '{s}s écoulées',
  tool_split_an_audio_file_by_duration_hud_encode: 'Encodage des extraits MP3…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'Corrigez le fichier ou les secondes, puis Découper par durée à nouveau.',
  tool_split_an_audio_file_by_duration_hud_fail_title: 'Découper par durée interrompu',
  tool_split_an_audio_file_by_duration_hud_next: 'Terminé. Étape suivante : Télécharger le ZIP.',
  tool_split_an_audio_file_by_duration_hud_next_zip: 'Terminé. Le téléchargement du ZIP devrait démarrer.',
  tool_split_an_audio_file_by_duration_hud_pack: 'Mise des extraits dans un ZIP…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: 'Coupe des extraits de même durée…',
  tool_split_an_audio_file_by_duration_hud_step_decode: 'Décoder',
  tool_split_an_audio_file_by_duration_hud_step_pack: 'Empaqueter',
  tool_split_an_audio_file_by_duration_hud_step_split: 'Découper',
  tool_split_an_audio_file_by_duration_hud_title: 'Progression Découper par durée',
  tool_split_an_audio_file_by_duration_hud_working: 'Démarrage…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} canaux',
  tool_split_an_audio_file_by_duration_pause: 'Pause',
  tool_split_an_audio_file_by_duration_play: 'Lecture',
  tool_split_an_audio_file_by_duration_preview_hint: 'Les marques blanches sont les coupes toutes les N secondes. Lecture écoute le fichier actuel.',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}s · la durée du morceau couvre tout le fichier, le ZIP n’aurait que ce fichier. Raccourcissez les secondes puis Découper par durée. Télécharger le ZIP est prêt.',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}s · toutes les {chunk}s → {count} extrait(s) : {list}. Télécharger le ZIP est prêt.',
  tool_split_an_audio_file_by_duration_rules_body:
    'Les coupes tombent à k × D secondes, D est la durée du morceau. Le dernier extrait est [floor(T / D) × D, T] et peut être plus court. Si vous mettez N parties égales, D = T / N pour ce passage. WAV est du PCM 16 bits. MP3 est du CBR au débit choisi. Le ZIP se construit dans cet onglet.',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'L’exemple utilise 2 s. Les pastilles écrivent 30 s, 60 s, 180 s (3 min) ou 300 s (5 min) dans le même champ. N parties égales (2–50) est facultatif en avancé.',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'Plafond bureau : environ 40 Mo ou 20 minutes ; écran étroit : environ 20 Mo ou 8 minutes. Au-delà, refus, pas de troncature. Plus de 50 extraits aussi.',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'Les fichiers restent sur l’appareil ; ils ne sont pas envoyés au serveur. JSZip et l’encodeur MP3 se chargent depuis ce site seulement après Télécharger le ZIP.',
  tool_split_an_audio_file_by_duration_rules_item_4:
    'Le décodage dépend du navigateur. DRM, certains codecs et conteneurs vidéo échouent avec un message clair.',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'Cette page exporte plusieurs fichiers dans un ZIP selon l’horloge. Pas de coupe au silence, pas de cue, pas de coupe par mégaoctets, pas de débruitage, pas de muet vidéo, pas de YouTube.',
  tool_split_an_audio_file_by_duration_rules_title: 'Règles à anticiper',
  tool_split_an_audio_file_by_duration_sample: 'Charger un exemple',
  tool_split_an_audio_file_by_duration_split: 'Découper par durée',
  tool_split_an_audio_file_by_duration_status_done: 'Terminé.',
  tool_split_an_audio_file_by_duration_title: 'Découpez un fichier audio par durée',
  tool_split_an_audio_file_by_duration_usecase_1:
    'Découper un cours en tranches de 3 min pour le trajet et emporter un ZIP, sans attendre les silences.',
  tool_split_an_audio_file_by_duration_usecase_2:
    'Partager un mp3 en parties égales de 60 secondes pour les réseaux, à partir d’un épisode long.',
  tool_split_an_audio_file_by_duration_usecase_3:
    'Couper un mémo vocal trop long pour la limite d’une messagerie ; le dernier extrait garde le reste.',
  tool_split_an_audio_file_by_duration_usecases_title: 'Dans quels cas',
  tool_split_an_audio_file_by_duration_why_choose_body:
    'Conçu pour un ZIP coupé à l’horloge, avec pastilles 30 s / 60 s / 3 min / 5 min et un dernier extrait plus court, sans détour.',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'Coupe toutes les N secondes et met beaucoup de fichiers dans un ZIP ; le dernier extrait garde le reste au lieu d’ajouter du silence.',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    'Pastilles 30 s / 60 s / 3 min / 5 min et N parties égales en option ; ce n’est pas un détecteur de silences déguisé en coupes égales.',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'Le fichier reste dans cet onglet du navigateur et n’est pas envoyé au serveur ; JSZip et lamejs se chargent seulement au clic sur Télécharger le ZIP.',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    'Fichiers trop gros et plus de 50 extraits sont refusés avant un ZIP incomplet — pas de promesse 1 Go qui plante l’onglet.',
  tool_split_an_audio_file_by_duration_why_choose_title: 'Pourquoi utiliser Découpez un fichier audio par durée',
};
export default fr;
