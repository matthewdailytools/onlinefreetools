/**
 * i18n tool shard (split-a-recording-on-silence / fr).
 * Job: split a recording on silence into a ZIP of clips (découper aux silences).
 */
import type { SiteLangDict } from '../../../types';

/** French copy: découpez un enregistrement aux silences et récupérez un ZIP d'extraits. */
const fr: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: 'Réglages avancés (facultatif)',
  tool_split_a_recording_on_silence_article:
    'Dans cet onglet, séparez l\'audio aux silences : ouvrez un fichier du disque, cliquez Découper aux silences, puis Télécharger le ZIP. Chaque pause assez longue est tranchée en son milieu ; les extraits restent des fichiers distincts. L\'enregistrement reste sur l\'appareil et n\'est pas envoyé à un serveur.',
  tool_split_a_recording_on_silence_bitrate: 'Débit MP3',
  tool_split_a_recording_on_silence_bitrate_hint: '128 kbps par défaut. Utile seulement si le ZIP est en MP3.',
  tool_split_a_recording_on_silence_choose_file: 'Choisir un fichier audio',
  tool_split_a_recording_on_silence_clear: 'Effacer',
  tool_split_a_recording_on_silence_clip_download: 'Enregistrer cet extrait',
  tool_split_a_recording_on_silence_clip_play: 'Écouter l\'extrait',
  tool_split_a_recording_on_silence_clip_row_tpl: 'Extrait {n} · {dur}s ({start}s–{end}s)',
  tool_split_a_recording_on_silence_clips_title: 'Extraits prêts pour le ZIP',
  tool_split_a_recording_on_silence_desc:
    'Coupez un enregistrement aux pauses et récupérez un ZIP d\'extraits — reste sur l\'appareil, sans envoi au serveur.',
  tool_split_a_recording_on_silence_description:
    'Découpez un enregistrement aux silences dans l\'onglet : les pauses longues deviennent des coupes, le ZIP rassemble les extraits ; le fichier n\'est pas envoyé au serveur. Séparer l\'audio aux silences, couper un enregistrement aux pauses, détecter les silences et découper, ou un ZIP de extraits, c\'est le même travail multi-fichiers. Étapes : ouvrez le son, cliquez Découper aux silences (défaut −40 dB / 1.0 s / 0.3 s d\'extrait mini), Télécharger le ZIP. Exemple : un exemple de 5.00 s avec deux blancs de 1.20 s donne trois extraits 1.40 / 2.00 / 1.60 s. Ce n\'est pas retirer le silence d\'un seul fichier, ni une découpe à durée égale, ni un mute vidéo.',
  tool_split_a_recording_on_silence_download_zip: 'Télécharger le ZIP',
  tool_split_a_recording_on_silence_drop_hint: 'Ou déposez un WAV, MP3, M4A ou OGG ici. Le traitement reste dans cet onglet.',
  tool_split_a_recording_on_silence_empty: 'Choisissez d\'abord un fichier audio.',
  tool_split_a_recording_on_silence_err_caps:
    'Ce fichier dépasse le plafond de taille ou de durée de cet appareil (environ 40 MB / 20 min sur ordinateur, 20 MB / 8 min sur écran étroit). Raccourcissez-le ailleurs ou prenez un fichier plus court.',
  tool_split_a_recording_on_silence_err_decode:
    'Ce navigateur n\'a pas pu décoder ce fichier. Essayez WAV ou MP3, ou un extrait sans DRM.',
  tool_split_a_recording_on_silence_err_empty: 'Rien à traiter. Chargez d\'abord un fichier ou l\'exemple.',
  tool_split_a_recording_on_silence_err_lame: 'L\'encodeur MP3 n\'a pas chargé. Restez dans l\'onglet et relancez Télécharger le ZIP.',
  tool_split_a_recording_on_silence_err_no_clips:
    'Aucun extrait assez long. Baissez la durée minimale d\'extrait, ou augmentez le silence minimal pour qu\'un souffle ne soit pas une coupe.',
  tool_split_a_recording_on_silence_err_too_many:
    'Plus de 50 extraits. Augmentez le silence minimal ou rendez le seuil plus négatif pour fusionner les pauses voisines, puis Découper aux silences à nouveau. La page refuse plutôt que de tronquer.',
  tool_split_a_recording_on_silence_err_video:
    'La vidéo n\'est pas l\'entrée principale. On découpe un fichier son aux pauses ; on ne mute pas une vidéo et on ne jump-cut pas le rush.',
  tool_split_a_recording_on_silence_err_zip: 'La bibliothèque ZIP n\'a pas chargé. Restez dans l\'onglet et relancez Télécharger le ZIP.',
  tool_split_a_recording_on_silence_example:
    'Charger un exemple fabrique un ton de 5.00 s avec deux blancs muets de 1.20 s (0.80 + 1.20 + 0.80 + 1.20 + 1.00). Découper aux silences à −40 dB / 1.0 s / 0.3 s d\'extrait mini coupe à 1.40 s et 3.40 s, d\'où trois extraits 1.40 / 2.00 / 1.60 s. Télécharger le ZIP écrit des WAV nommés sample-01.wav, sauf si vous choisissez MP3 dans Réglages avancés.',
  tool_split_a_recording_on_silence_example_title: 'Exemple chiffré',
  tool_split_a_recording_on_silence_faq_a1:
    'Non. Décodage, détection, découpe et ZIP se font dans cet onglet. Les scripts viennent de ce site. Le fichier n\'est pas posté sur nos serveurs.',
  tool_split_a_recording_on_silence_faq_a2:
    'C\'est bien ici. Séparer l\'audio aux silences, couper un enregistrement aux pauses, détecter les silences et découper, ou récupérer des segments en ZIP : coupes aux pauses longues et plusieurs fichiers dans un ZIP.',
  tool_split_a_recording_on_silence_faq_a3:
    'Autre tâche. Retirer le silence d\'un enregistrement enlève l\'air mort et recoud un seul fichier plus court. Ici les pauses sont des coupes et l\'export est multi-extraits. Sans ZIP, prenez l\'outil fichier unique.',
  tool_split_a_recording_on_silence_faq_a4:
    'Non. La découpe à durée égale (toutes les N secondes) est un autre chantier. L\'album via cue sheet non plus. On ne coupe que si le blanc dure assez longtemps.',
  tool_split_a_recording_on_silence_faq_a5:
    'Parole d\'abord (−40 dB / 1.0 s / 0.3 s d\'extrait mini). Cours : Cours (−40 dB / 2.0 s). Blancs d\'album : Album (−45 dB / 1.5 s / 1.0 s d\'extrait mini). Si les souffles deviennent des extraits, augmentez le silence minimal.',
  tool_split_a_recording_on_silence_faq_a6:
    'Dans le ZIP : {stem}-01.wav (ou .mp3). Vous pouvez aussi enregistrer un extrait depuis la liste. Plafond 50 extraits ; au-delà, la découpe est refusée.',
  tool_split_a_recording_on_silence_faq_a7:
    'Non. Ni débruitage, ni suppression des euh, ni mute vidéo, ni cue/APE, ni rip YouTube. Utilisez un fichier son dont vous avez les droits.',
  tool_split_a_recording_on_silence_faq_a8:
    'Ordinateur : environ 40 MB ou 20 minutes. Écran étroit : environ 20 MB ou 8 minutes. Au-delà, refus avant décodage. Une musique très dynamique peut ressembler à du silence — augmentez le blanc minimal ou passez votre chemin.',
  tool_split_a_recording_on_silence_faq_q1: 'Mon enregistrement part-il sur un serveur ?',
  tool_split_a_recording_on_silence_faq_q2: 'J\'ai cherché séparer l\'audio aux silences ou un ZIP de extraits. Est-ce un autre outil ?',
  tool_split_a_recording_on_silence_faq_q3: 'Je voulais un seul fichier plus court, sans air mort. Est-ce le retireur de silence ?',
  tool_split_a_recording_on_silence_faq_q4: 'Coupe-t-il en parts égales ou suit-il une cue sheet ?',
  tool_split_a_recording_on_silence_faq_q5: 'Quel seuil choisir ? Les souffles sont-ils coupés ?',
  tool_split_a_recording_on_silence_faq_q6: 'Comment s\'appellent les fichiers, et combien d\'extraits au maximum ?',
  tool_split_a_recording_on_silence_faq_q7: 'Peut-il débruiter, découper de la vidéo, suivre une cue ou ripper YouTube ?',
  tool_split_a_recording_on_silence_faq_q8: 'Jusqu\'à quelle taille ? Et pour de la musique très basse ?',
  tool_split_a_recording_on_silence_format: 'Format des fichiers du ZIP',
  tool_split_a_recording_on_silence_format_hint: 'WAV est du PCM sans perte. L\'encodeur MP3 ne se charge qu\'au clic sur Télécharger le ZIP.',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    'Repérez les blancs assez longs, tranchez au milieu de chacun, puis téléchargez un ZIP d\'extraits : tout reste sur l\'appareil, sans envoi au serveur.',
  tool_split_a_recording_on_silence_how_item_1: 'Ouvrez un enregistrement (ou cliquez Charger un exemple).',
  tool_split_a_recording_on_silence_how_item_2: 'Gardez les défauts, ou ouvrez Réglages avancés (facultatif) pour le seuil et le silence minimal.',
  tool_split_a_recording_on_silence_how_item_3: 'Cliquez Découper aux silences.',
  tool_split_a_recording_on_silence_how_item_4: 'Cliquez Télécharger le ZIP.',
  tool_split_a_recording_on_silence_how_title: 'Marche à suivre',
  tool_split_a_recording_on_silence_hud_decode: 'Décodage du fichier dans cet onglet…',
  tool_split_a_recording_on_silence_hud_decoded: 'Décodé. Les marques rouges sont des blancs. Cliquez Découper aux silences si les réglages conviennent.',
  tool_split_a_recording_on_silence_hud_detect: 'Mesure des fenêtres calmes…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}s écoulées',
  tool_split_a_recording_on_silence_hud_encode: 'Encodage des extraits MP3…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'Corrigez le fichier ou les réglages, puis Découper aux silences à nouveau.',
  tool_split_a_recording_on_silence_hud_fail_title: 'Découper aux silences s\'est arrêté',
  tool_split_a_recording_on_silence_hud_next: 'Terminé. Suite : Télécharger le ZIP.',
  tool_split_a_recording_on_silence_hud_next_zip: 'Terminé. Le téléchargement du ZIP devrait démarrer.',
  tool_split_a_recording_on_silence_hud_pack: 'Mise en ZIP des extraits…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: 'Coupe au milieu des silences…',
  tool_split_a_recording_on_silence_hud_step_decode: 'Décoder',
  tool_split_a_recording_on_silence_hud_step_detect: 'Détecter',
  tool_split_a_recording_on_silence_hud_step_pack: 'Empaqueter',
  tool_split_a_recording_on_silence_hud_step_split: 'Découper',
  tool_split_a_recording_on_silence_hud_title: 'Avancement de Découper aux silences',
  tool_split_a_recording_on_silence_hud_working: 'Démarrage…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: 'Extrait minimal (secondes)',
  tool_split_a_recording_on_silence_min_clip_hint: 'Défaut 0.3 s. Les tranches plus courtes après une coupe sont jetées.',
  tool_split_a_recording_on_silence_min_silence: 'Silence minimal (secondes)',
  tool_split_a_recording_on_silence_min_silence_hint: 'Défaut 1.0 s pour qu\'un souffle ne devienne pas une coupe.',
  tool_split_a_recording_on_silence_pause: 'Pause',
  tool_split_a_recording_on_silence_play: 'Lecture',
  tool_split_a_recording_on_silence_preset_album: 'Album',
  tool_split_a_recording_on_silence_preset_hint: 'Parole est le départ. Cours attend des pauses de chapitre plus longues. Album vise les blancs entre pistes.',
  tool_split_a_recording_on_silence_preset_lecture: 'Cours',
  tool_split_a_recording_on_silence_preset_speech: 'Parole',
  tool_split_a_recording_on_silence_preview_hint: 'Les bandes rouges sont des blancs assez longs pour découper. Lecture préécoute le fichier actuel.',
  tool_split_a_recording_on_silence_result_one:
    '{orig}s · aucune pause assez longue, le ZIP ne contiendrait que ce fichier. Baissez le silence minimal ou rapprochez le seuil de 0. Télécharger le ZIP est prêt.',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}s · {gaps} blanc(s) → {count} extrait(s) : {list}. Télécharger le ZIP est prêt.',
  tool_split_a_recording_on_silence_rules_body:
    'Toutes les ~50 ms, la page mesure le RMS et convertit en dB : levelDb = 20 × log10(rms). Un passage sous le seuil qui dure au moins le silence minimal est coupé en son milieu. Les extraits plus courts que le minimum sont jetés. WAV = PCM 16 bits. MP3 = CBR au débit choisi. Le ZIP se construit dans cet onglet.',
  tool_split_a_recording_on_silence_rules_item_1:
    'Parole : −40 dB, 1.0 s de silence minimal, 0.3 s d\'extrait mini. Cours : −40 dB / 2.0 s / 0.5 s. Blancs d\'album : −45 dB / 1.5 s / 1.0 s.',
  tool_split_a_recording_on_silence_rules_item_2:
    'Plafond ordinateur : environ 40 MB ou 20 minutes ; écran étroit : environ 20 MB ou 8 minutes. Au-delà : refus, pas de troncature. Plus de 50 extraits : refus.',
  tool_split_a_recording_on_silence_rules_item_3:
    'Les fichiers restent sur l\'appareil ; ils ne sont pas envoyés à un serveur. JSZip et l\'encodeur MP3 se chargent depuis ce site seulement après Télécharger le ZIP.',
  tool_split_a_recording_on_silence_rules_item_4:
    'Le décodage dépend du navigateur. DRM, certains codecs et conteneurs vidéo échouent avec une erreur explicite.',
  tool_split_a_recording_on_silence_rules_item_5:
    'Export de nombreux fichiers dans un ZIP. Pas de recoudage en un fichier plus court, pas de durée fixe, pas de cue, pas de débruitage, pas de mute vidéo, pas de YouTube.',
  tool_split_a_recording_on_silence_rules_title: 'Règles à avoir en tête',
  tool_split_a_recording_on_silence_sample: 'Charger un exemple',
  tool_split_a_recording_on_silence_split: 'Découper aux silences',
  tool_split_a_recording_on_silence_status_done: 'Terminé.',
  tool_split_a_recording_on_silence_threshold: 'Seuil de silence (dB)',
  tool_split_a_recording_on_silence_threshold_hint: 'Défaut −40 dB. Plus près de 0, plus le fichier est traité comme silence.',
  tool_split_a_recording_on_silence_title: 'Découpez un enregistrement aux silences',
  tool_split_a_recording_on_silence_usecase_1:
    'Un cours avec pauses de chapitre : chaque bloc devient un fichier dans le ZIP, sans hachage à durée fixe.',
  tool_split_a_recording_on_silence_usecase_2:
    'Une interview : les réponses sortent en extraits séparés, à étiqueter plus tard.',
  tool_split_a_recording_on_silence_usecase_3:
    'Un mixtape avec blancs entre pistes et sans cue sheet : couper un enregistrement aux pauses suffit.',
  tool_split_a_recording_on_silence_usecases_title: 'Ça sert surtout si',
  tool_split_a_recording_on_silence_why_choose_body:
    'Pensé pour un ZIP d\'extraits tranchés au milieu de la pause, avec des profils Parole / Cours / Album visibles sur la page.',
  tool_split_a_recording_on_silence_why_choose_item_1:
    'Coupe au milieu des blancs longs et met beaucoup de fichiers dans un ZIP ; ne recoud pas un seul fichier plus court.',
  tool_split_a_recording_on_silence_why_choose_item_2:
    'Parole (−40 dB / 1.0 s / 0.3 s d\'extrait mini) évite de hacher les souffles ; Cours et Album sont nommés sur la page.',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'Le fichier reste dans cet onglet du navigateur et n\'est pas envoyé au serveur ; JSZip et lamejs ne se chargent qu\'au clic sur Télécharger le ZIP.',
  tool_split_a_recording_on_silence_why_choose_item_4:
    'Fichiers trop gros et plus de 50 extraits sont refusés avant un ZIP tronqué, plutôt qu\'une promesse de 1 GB qui plante l\'onglet.',
  tool_split_a_recording_on_silence_why_choose_title: 'Pourquoi Découpez un enregistrement aux silences sur ce site',
};
export default fr;
