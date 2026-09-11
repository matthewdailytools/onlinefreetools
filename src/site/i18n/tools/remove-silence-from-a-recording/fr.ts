/**
 * i18n tool shard (remove-silence-from-a-recording / fr).
 * H1: Supprimez les silences d’un enregistrement.
 */
import type { SiteLangDict } from '../../../types';

/** Français: enlever les silences / blancs, un seul fichier. */
const fr: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: 'Réglages avancés (facultatif)',
  tool_remove_silence_from_a_recording_article:
    'Supprimez les silences d’un enregistrement dans cet onglet: ouvrez un fichier local, cliquez sur Supprimer les silences, puis exportez WAV ou MP3. Les blancs longs partent; la voix reste un fichier plus court, sans envoi au serveur.',
  tool_remove_silence_from_a_recording_bitrate: 'Débit MP3',
  tool_remove_silence_from_a_recording_bitrate_hint: '128 kbps par défaut. Uniquement si vous cliquez sur Exporter MP3.',
  tool_remove_silence_from_a_recording_choose_file: 'Choisir un fichier audio',
  tool_remove_silence_from_a_recording_clear: 'Effacer',
  tool_remove_silence_from_a_recording_desc:
    'Enlevez les silences d’un enregistrement local et téléchargez un WAV ou MP3 plus court; les fichiers restent sur l’appareil, sans envoi au serveur.',
  tool_remove_silence_from_a_recording_description:
    'Supprimez les silences d’un enregistrement sur l’appareil: coupez les blancs et les longues pauses, gardez un fichier plus court, puis téléchargez WAV ou MP3 — sans envoi au serveur. Étapes: ouvrez l’enregistrement, cliquez sur Supprimer les silences (−40 dB / 0,5 s / 0,15 s conservés), Exporter WAV ou Exporter MP3. Exemple: 5,00 s avec deux blancs de 1,20 s deviennent environ 2,90 s. Enlever les silences, retirer les pauses ou couper les silences, c’est la même tâche. Pas de ZIP, pas de vidéo muette.',
  tool_remove_silence_from_a_recording_drop_hint: 'Ou déposez un WAV, MP3, M4A ou OGG ici. Le traitement reste dans cet onglet.',
  tool_remove_silence_from_a_recording_empty: 'Choisissez d’abord un fichier audio.',
  tool_remove_silence_from_a_recording_err_caps:
    'Le fichier dépasse la limite de cet appareil (environ 40 Mo / 20 min sur ordinateur, 20 Mo / 8 min sur écran étroit). Raccourcissez-le ailleurs ou prenez un fichier plus court.',
  tool_remove_silence_from_a_recording_err_decode:
    'Ce navigateur n’a pas pu décoder le fichier. Essayez WAV ou MP3, ou un extrait sans DRM.',
  tool_remove_silence_from_a_recording_err_empty: 'Rien à traiter. Chargez un fichier ou l’exemple.',
  tool_remove_silence_from_a_recording_err_empty_keep:
    'Il ne reste plus d’audio. Abaissez le seuil (plus négatif) ou augmentez le silence minimum pour ne pas traiter la voix comme un blanc.',
  tool_remove_silence_from_a_recording_err_lame: 'L’encodeur MP3 n’a pas chargé. Restez sur cet onglet et réessayez Exporter MP3.',
  tool_remove_silence_from_a_recording_err_video:
    'Cette page n’accepte pas la vidéo comme entrée principale. Elle raccourcit un fichier son; elle ne rend pas une vidéo muette.',
  tool_remove_silence_from_a_recording_example:
    'Charger un exemple crée 5,00 s de ton avec deux blancs de 1,20 s (0,80 + 1,20 + 0,80 + 1,20 + 1,00). Supprimer les silences à −40 dB / 0,5 s / 0,15 s donne environ 2,90 s. WAV écrit du PCM; MP3 utilise 128 kbps sauf changement dans les réglages avancés.',
  tool_remove_silence_from_a_recording_example_title: 'Exemple',
  tool_remove_silence_from_a_recording_export_mp3: 'Exporter MP3',
  tool_remove_silence_from_a_recording_export_wav: 'Exporter WAV',
  tool_remove_silence_from_a_recording_faq_a1:
    'Non. Décodage et coupe se font dans cet onglet. Les scripts viennent de ce site. Le fichier n’est pas envoyé à nos serveurs.',
  tool_remove_silence_from_a_recording_faq_a2:
    'Même travail. Enlever les silences, supprimer les blancs audio, retirer les pauses ou couper les silences, c’est raccourcir les trous calmes et exporter un seul WAV ou MP3.',
  tool_remove_silence_from_a_recording_faq_a3:
    'Parole d’abord (−40 dB / 0,5 s / 0,15 s). Pièce bruyante: seuil vers −30 dB, minimum vers 0,8 s. Studio: Doux (−50 dB). Si les fins de mots sautent, seuil plus négatif ou minimum plus long.',
  tool_remove_silence_from_a_recording_faq_a4:
    'Rogner un extrait, c’est poser début et fin à la main. Ici les blancs du milieu partent aussi, puis un fichier. Bords seuls à la main: l’outil de rognage.',
  tool_remove_silence_from_a_recording_faq_a5:
    'Non. Découper aux silences en plusieurs fichiers ou un ZIP est une autre tâche. Ici, toujours un fichier.',
  tool_remove_silence_from_a_recording_faq_a6:
    'Non. Le débruitage ne raccourcit pas. Enlever les « euh » demande une transcription. Vidéo muette ou YouTube hors sujet. Utilisez un son dont vous avez les droits.',
  tool_remove_silence_from_a_recording_faq_a7:
    'Même tâche, autre logiciel. Truncate Silence d’Audacity raccourcit les passages sous un seuil assez longtemps. Ici dans le navigateur; ce n’est pas un guide d’installation.',
  tool_remove_silence_from_a_recording_faq_a8:
    'Ordinateur: environ 40 Mo ou 20 minutes. Écran étroit: environ 20 Mo ou 8 minutes. Au-delà, refus avant décodage. La musique très douce peut être coupée par erreur: augmentez le minimum ou n’utilisez pas cette page.',
  tool_remove_silence_from_a_recording_faq_q1: 'Mon enregistrement est-il envoyé au serveur?',
  tool_remove_silence_from_a_recording_faq_q2: 'J’ai cherché enlever les silences ou supprimer les blancs. Est-ce un autre outil?',
  tool_remove_silence_from_a_recording_faq_q3: 'Quel seuil? Les respirations sont-elles coupées?',
  tool_remove_silence_from_a_recording_faq_q4: 'Je voulais seulement rogner le début et la fin. Est-ce le trimmer audio?',
  tool_remove_silence_from_a_recording_faq_q5: 'Est-ce que ça découpe en plusieurs fichiers?',
  tool_remove_silence_from_a_recording_faq_q6: 'Débruitage, tics de langage, vidéo muette ou YouTube?',
  tool_remove_silence_from_a_recording_faq_q7: 'Comme Truncate Silence d’Audacity?',
  tool_remove_silence_from_a_recording_faq_q8: 'Quelle taille maximale? Et la musique piano?',
  tool_remove_silence_from_a_recording_how_body:
    'Trouver les blancs assez longs, les raccourcir, recoudre la voix en un fichier, puis télécharger WAV ou MP3 sans envoi au serveur.',
  tool_remove_silence_from_a_recording_how_item_1: 'Ouvrez un enregistrement (ou cliquez sur Charger un exemple).',
  tool_remove_silence_from_a_recording_how_item_2: 'Gardez les valeurs par défaut, ou ouvrez Réglages avancés (facultatif) pour le seuil et le minimum.',
  tool_remove_silence_from_a_recording_how_item_3: 'Cliquez sur Supprimer les silences.',
  tool_remove_silence_from_a_recording_how_item_4: 'Cliquez sur Exporter WAV ou Exporter MP3.',
  tool_remove_silence_from_a_recording_how_title: 'Comment ça marche',
  tool_remove_silence_from_a_recording_hud_cut: 'Coupe des blancs et assemblage d’un fichier…',
  tool_remove_silence_from_a_recording_hud_decode: 'Décodage du fichier dans cet onglet…',
  tool_remove_silence_from_a_recording_hud_decoded: 'Décodé. Le rouge marque les blancs. Cliquez sur Supprimer les silences.',
  tool_remove_silence_from_a_recording_hud_detect: 'Mesure des fenêtres calmes…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: '{s}s écoulées',
  tool_remove_silence_from_a_recording_hud_encode: 'Encodage MP3…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'Corrigez le fichier ou les réglages, puis Supprimer les silences.',
  tool_remove_silence_from_a_recording_hud_fail_title: 'Supprimer les silences arrêté',
  tool_remove_silence_from_a_recording_hud_next: 'Terminé. Ensuite: Exporter WAV ou Exporter MP3.',
  tool_remove_silence_from_a_recording_hud_next_mp3: 'Terminé. Le téléchargement MP3 devrait commencer.',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'Coupe',
  tool_remove_silence_from_a_recording_hud_step_decode: 'Décoder',
  tool_remove_silence_from_a_recording_hud_step_detect: 'Détecter',
  tool_remove_silence_from_a_recording_hud_step_encode: 'Encoder',
  tool_remove_silence_from_a_recording_hud_title: 'Progression suppression des silences',
  tool_remove_silence_from_a_recording_hud_working: 'Démarrage…',
  tool_remove_silence_from_a_recording_keep: 'Garder à chaque blanc (secondes)',
  tool_remove_silence_from_a_recording_keep_hint: '0,15 s par défaut pour éviter un saut. 0 enlève tout le blanc.',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_remove_silence_from_a_recording_min_silence: 'Silence minimum (secondes)',
  tool_remove_silence_from_a_recording_min_silence_hint: '0,5 s par défaut. Les micro-pauses entre les mots restent.',
  tool_remove_silence_from_a_recording_pause: 'Pause',
  tool_remove_silence_from_a_recording_play: 'Lecture',
  tool_remove_silence_from_a_recording_preset_gentle: 'Doux',
  tool_remove_silence_from_a_recording_preset_hint: 'Parole est le départ. Doux garde plus de pauses. Serré coupe davantage.',
  tool_remove_silence_from_a_recording_preset_speech: 'Parole',
  tool_remove_silence_from_a_recording_preset_tight: 'Serré',
  tool_remove_silence_from_a_recording_preview_hint: 'Les bandes rouges sont des blancs assez longs pour couper. Lecture écoute le fichier actuel (ou le résultat).',
  tool_remove_silence_from_a_recording_remove: 'Supprimer les silences',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}s → {next}s. {removed}s enlevées ({pct}%) sur {gaps} blanc(s). Prêt à exporter.',
  tool_remove_silence_from_a_recording_rules_body:
    'Environ toutes les 50 ms, RMS puis levelDb = 20 × log10(rms). Un passage sous le seuil plus long que le minimum est ramené à la durée conservée, puis la voix est concaténée. WAV = PCM 16 bits. MP3 = CBR au débit choisi.',
  tool_remove_silence_from_a_recording_rules_item_1:
    'Parole: −40 dB, 0,5 s minimum, 0,15 s gardés. Pièce bruyante: −30 dB / 0,8 s / 0,20 s. Studio: −50 dB / 0,4 s / 0,15 s.',
  tool_remove_silence_from_a_recording_rules_item_2:
    'Limite ordinateur: environ 40 Mo ou 20 minutes; écran étroit: environ 20 Mo ou 8 minutes. Au-delà, refus, pas de coupe silencieuse.',
  tool_remove_silence_from_a_recording_rules_item_3:
    'Les fichiers restent sur l’appareil, sans envoi au serveur. L’encodeur MP3 se charge depuis ce site seulement après Exporter MP3.',
  tool_remove_silence_from_a_recording_rules_item_4:
    'Le décodage dépend du navigateur. DRM, certains codecs et conteneurs vidéo échouent avec un message clair.',
  tool_remove_silence_from_a_recording_rules_item_5:
    'Un fichier. Pas de ZIP, pas de débruitage, pas de tics, pas de vidéo muette, pas de YouTube.',
  tool_remove_silence_from_a_recording_rules_title: 'Règles à attendre',
  tool_remove_silence_from_a_recording_sample: 'Charger un exemple',
  tool_remove_silence_from_a_recording_status_done: 'Terminé.',
  tool_remove_silence_from_a_recording_threshold: 'Seuil de silence (dB)',
  tool_remove_silence_from_a_recording_threshold_hint: '−40 dB par défaut. Plus proche de 0, plus de passages comptent comme silence.',
  tool_remove_silence_from_a_recording_title: 'Supprimez les silences d’un enregistrement',
  tool_remove_silence_from_a_recording_usecase_1:
    'Couper les blancs d’un podcast à deux voix et garder un seul épisode plus court.',
  tool_remove_silence_from_a_recording_usecase_2:
    'Raccourcir l’audio d’une réunion sans parole et exporter un MP3.',
  tool_remove_silence_from_a_recording_usecase_3:
    'Enlever les pauses de réflexion d’un mémo vocal et envoyer un seul fichier.',
  tool_remove_silence_from_a_recording_usecases_title: 'Ça sert quand',
  tool_remove_silence_from_a_recording_why_choose_body:
    'Faite pour un fichier plus court, avec un tableau de seuils et les secondes enlevées visibles sur la page.',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    'Les blancs partent et la voix est recousue en un fichier; pas de ZIP de clips.',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    'Les valeurs parole (−40 dB / 0,5 s / 0,15 s) conviennent à la voix; la ligne de résultat montre les secondes enlevées.',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'Le fichier reste dans cet onglet, sans envoi au serveur; l’encodeur MP3 se charge seulement au clic.',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    'Fichiers trop lourds ou trop longs refusés avant décodage, sans promettre 1 Go qui plante l’onglet.',
  tool_remove_silence_from_a_recording_why_choose_title: 'Pourquoi utiliser Supprimez les silences d’un enregistrement',
};
export default fr;
