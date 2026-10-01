import type { SiteLangDict } from '../../../types';

/**
 * Français (France) : extraire l’audio d’un fichier MKV.
 * Honnêteté D1 : repli MediaElement ≈500 Mio / 4 h ; MKV multi‑Go ou DDP/Atmos → ffmpeg sur le poste → MP4 AAC stéréo → page MP4.
 * Clés alignées sur la master EN ; réécriture native, pas calque de l’anglais.
 */
const fr: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'Extraire l’audio d’un fichier MKV',
  tool_extract_audio_from_an_mkv_file_desc:
    'Extraire l’audio d’un MKV local en WAV ou MP3 dans le navigateur si le fichier tient dans le repli ≈500 Mio / 4 h. MKV multi‑giga ou DDP/Atmos : convertissez d’abord en MP4 AAC sur votre ordinateur, puis utilisez l’outil MP4.',
  tool_extract_audio_from_an_mkv_file_description:
    'Extraire la piste audio d’un MKV local dans le navigateur, puis télécharger WAV ou MP3. Étapes : choisir le MKV → Extraire → écouter → télécharger. Exemple : Charger l’échantillon crée un court substitut synthétique si MediaRecorder fonctionne—mieux vaut un vrai .mkv d’environ 500 Mio max. Cette page utilise le repli MediaElement (≈500 Mio / 4 h) ; au‑delà, échec immédiat avec err_container. MKV multi‑giga ou Dolby Digital Plus / Atmos (E-AC-3) : non pris en charge ici—sur votre PC, ffmpeg vers MP4 AAC stéréo (vidéo en copy), puis ouvrez Extraire l’audio d’un fichier MP4 pour le gros demux. Local uniquement—pas de lien YouTube. Jamais envoyé. Plusieurs MKV ? Utilisez Extraire l’audio de fichiers MKV en lot.',
  tool_extract_audio_from_an_mkv_file_article:
    'Captures d’écran et enregistrements arrivent souvent en MKV. Cette page n’accepte que .mkv, emprunte la voie d’extraction partagée en repli et écrit WAV ou MP3 sans envoi. Elle ne prétend pas au demux ISOBMFF ni au streaming OPFS multi‑giga—réservé au MP4/MOV avec AAC. Elle ne décode pas E-AC-3 / DTS dans le navigateur. Pour un rip multi‑Go ou une piste Atmos, convertissez sur l’appareil avec ffmpeg en MP4 AAC, puis la landing MP4. Dossiers mixtes : hub vidéo ou lot du hub.',
  tool_extract_audio_from_an_mkv_file_choose: 'Choisir un fichier MKV',
  tool_extract_audio_from_an_mkv_file_hint:
    'Déposez un .mkv local d’environ 500 Mio max / 4 h. MKV plus lourd ou DDP/Atmos : sur le PC, ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, puis Extraire l’audio d’un fichier MP4.',
  tool_extract_audio_from_an_mkv_file_convert: 'Extraire',
  tool_extract_audio_from_an_mkv_file_download: 'Télécharger',
  tool_extract_audio_from_an_mkv_file_download_wav: 'Télécharger WAV',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'Télécharger MP3',
  tool_extract_audio_from_an_mkv_file_sample: 'Charger l’échantillon',
  tool_extract_audio_from_an_mkv_file_clear: 'Effacer',
  tool_extract_audio_from_an_mkv_file_advanced: 'Format d’export',
  tool_extract_audio_from_an_mkv_file_format_label: 'Format de sortie',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV (16 bits)',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'Débit MP3',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    'WAV par défaut convient aux MKV courts. Les clips longs peuvent basculer en MP3 en flux. Le plafond est le repli (≈500 Mio), pas le demux MP4. Pas d’URL.',
  tool_extract_audio_from_an_mkv_file_progress: 'Progression de l’extraction',
  tool_extract_audio_from_an_mkv_file_read: 'Lire',
  tool_extract_audio_from_an_mkv_file_decode: 'Décoder',
  tool_extract_audio_from_an_mkv_file_extract: 'Extraire',
  tool_extract_audio_from_an_mkv_file_write: 'Écrire',
  tool_extract_audio_from_an_mkv_file_done: 'Prêt. Écoutez l’audio, puis téléchargez WAV ou MP3.',
  tool_extract_audio_from_an_mkv_file_failed:
    'Échec de l’extraction. Essayez un MKV plus petit, ou convertissez d’abord en MP4 AAC avec ffmpeg.',
  tool_extract_audio_from_an_mkv_file_elapsed: '{s} s écoulées',
  tool_extract_audio_from_an_mkv_file_preview: 'Écouter l’audio extrait',
  tool_extract_audio_from_an_mkv_file_result: '{seconds} s · {channels} can. · {rate} Hz · {format} {output} Kio',
  tool_extract_audio_from_an_mkv_file_sample_name: 'demo-mkv-court',
  tool_extract_audio_from_an_mkv_file_empty: 'Choisissez un MKV ou chargez l’échantillon d’abord.',
  tool_extract_audio_from_an_mkv_file_empty_state:
    'Aucun fichier. Déposez un .mkv local (≈500 Mio) ou chargez l’échantillon. Multi‑Go / DDP : convertissez d’abord en MP4 AAC avec ffmpeg. Pas YouTube.',
  tool_extract_audio_from_an_mkv_file_err_file: 'Déposez exactement un fichier MKV.',
  tool_extract_audio_from_an_mkv_file_err_format: 'Fichier non pris en charge. Cette page n’accepte que .mkv.',
  tool_extract_audio_from_an_mkv_file_err_limit: 'Ce MKV dépasse une limite de durée ou de taille sur la voie repli.',
  tool_extract_audio_from_an_mkv_file_err_container:
    'Ce MKV dépasse le plafond repli (≈500 Mio / 4 h) ou n’est pas décodable ici. Sur votre ordinateur : ffmpeg vers MP4 AAC stéréo (vidéo en copy), puis Extraire l’audio d’un fichier MP4—ou utilisez un MKV plus petit.',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'Le codec audio de ce MKV n’est pas pris en charge dans le navigateur (souvent E-AC-3 / DDP / Atmos). Convertissez en AAC dans un MP4 avec ffmpeg, puis la page d’extraction MP4.',
  tool_extract_audio_from_an_mkv_file_err_channels:
    'Cette piste utilise une disposition de canaux que l’extracteur ne gère pas. Downmixez d’abord en AAC stéréo dans un MP4.',
  tool_extract_audio_from_an_mkv_file_err_decode: 'Le navigateur n’a pas pu décoder l’audio de ce MKV.',
  tool_extract_audio_from_an_mkv_file_err_encoder: 'Impossible d’écrire le fichier audio. Relancez Extraire.',
  tool_extract_audio_from_an_mkv_file_err_sample: 'Impossible de générer un MKV d’exemple. Déposez votre propre .mkv.',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'Ce navigateur n’a pas Web Audio requis pour l’extraction.',
  tool_extract_audio_from_an_mkv_file_err_empty: 'Aucun échantillon audio utilisable n’a été capturé.',
  tool_extract_audio_from_an_mkv_file_stop: 'Arrêter',
  tool_extract_audio_from_an_mkv_file_status_stopped: 'Arrêté. Aucun fichier audio partiel n’est conservé.',
  tool_extract_audio_from_an_mkv_file_forced_mp3: 'Entrée longue/volumineuse : MP3 en flux sur la voie repli.',
  tool_extract_audio_from_an_mkv_file_how_title: 'Comment extraire l’audio d’un fichier MKV',
  tool_extract_audio_from_an_mkv_file_how_body:
    'Petit MKV local : déposer, Extraire, télécharger. Multi‑Go ou DDP/Atmos : convertissez d’abord en MP4 AAC avec ffmpeg sur l’appareil, puis l’outil MP4.',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    'Choisissez un .mkv local (≈500 Mio) ou chargez l’échantillon si MediaRecorder fonctionne. Fichier multi‑Go ou DDP/Atmos : arrêtez‑vous ici et convertissez avec ffmpeg.',
  tool_extract_audio_from_an_mkv_file_how_item_2: 'Ouvrez Format d’export et choisissez WAV ou MP3 ; réglez le débit si besoin.',
  tool_extract_audio_from_an_mkv_file_how_item_3: 'Cliquez Extraire et attendez Lire → Décoder → Extraire → Écrire (ou Arrêter).',
  tool_extract_audio_from_an_mkv_file_how_item_4: 'Écoutez, puis Télécharger WAV ou Télécharger MP3.',
  tool_extract_audio_from_an_mkv_file_why_choose_title: 'Pourquoi utiliser Extraire l’audio d’un fichier MKV',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1:
    'Acceptation MKV seulement pour ne pas mélanger Matroska et landings MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2:
    'Plafonds repli annoncés clairement—pas de faux marketing demux 5 Goi pour le MKV.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3:
    'Chemin clair pour fichiers trop gros ou DDP : ffmpeg sur le poste → MP4 AAC → page MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: 'Traitement sur l’appareil ; Arrêter annule en cours de route.',
  tool_extract_audio_from_an_mkv_file_rules_title: 'MKV seulement et limites du repli',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'Un MKV local par exécution sur la voie repli MediaElement. Pas YouTube‑vers‑MP3. Pas d’export vidéo muette. MKV volumineux ou codec exotique : MP4 AAC sur l’appareil d’abord.',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    'Repli ≈500 Mio / 4 h. Dépassement → err_container. Gros demux : MP4/MOV uniquement aujourd’hui.',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'Pas d’URL ni de téléchargement YouTube.',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS échouent souvent avec err_codec. Exemple sur le PC : ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4 puis Extraire l’audio d’un fichier MP4.',
  tool_extract_audio_from_an_mkv_file_rules_item_4:
    'Le MKV d’origine n’est jamais écrasé. Plusieurs MKV : outil batch MKV.',
  tool_extract_audio_from_an_mkv_file_example_title: 'Essayer une vraie extraction MKV',
  tool_extract_audio_from_an_mkv_file_example:
    'Charger l’échantillon crée un court substitut synthétique si MediaRecorder fonctionne, puis Extraire s’exécute. Préférez votre .mkv sous le plafond repli. Rips multi‑Go : convertissez en MP4 AAC avec ffmpeg, puis la page MP4.',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'Quand c’est utile',
  tool_extract_audio_from_an_mkv_file_usecase_1:
    'Capture d’écran MKV dans le navigateur (≈500 Mio) → MP3 partageable sans envoi.',
  tool_extract_audio_from_an_mkv_file_usecase_2: 'Un court clip MKV d’interview : seule la piste audio en WAV.',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    'Vous savez que le fichier est un énorme MKV ou en DDP—convertissez en MP4 AAC localement, puis l’outil MP4 plutôt que cette page.',
  tool_extract_audio_from_an_mkv_file_faq_q1: 'Puis‑je coller une URL YouTube ?',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'Non. .mkv local uniquement.',
  tool_extract_audio_from_an_mkv_file_faq_q2: 'Pourquoi pas 5 Goi comme la page MP4 ?',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    'Le gros demux vise ISOBMFF (MP4/MOV). Le MKV utilise le repli MediaElement ≈500 Mio tant qu’un demux Matroska n’est pas disponible.',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'Mon MKV fait plusieurs Go ou est en Dolby Atmos / DDP—que faire ?',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    'Cette page le refusera (err_container et/ou err_codec). Sur votre ordinateur, convertissez en MP4 AAC stéréo, par exemple : ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4. Puis ouvrez Extraire l’audio d’un fichier MP4 pour la voie gros demux. Un simple remux sans AAC échoue encore si la piste reste en E-AC-3.',
  tool_extract_audio_from_an_mkv_file_faq_q4: 'Est‑ce que ça coupe le son de la vidéo MKV (vidéo muette) ?',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'Non. Extraction vers WAV/MP3 seulement.',
  tool_extract_audio_from_an_mkv_file_faq_q5: 'Mon fichier est‑il envoyé ?',
  tool_extract_audio_from_an_mkv_file_faq_a5:
    'Non. Décodage et écriture dans le navigateur. L’étape ffmpeg (si besoin) reste aussi sur votre ordinateur.',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'J’ai beaucoup de MKV—quelle page ?',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    'Dossiers de petits MKV : Extraire l’audio de fichiers MKV en lot. Fichiers énormes ou DDP : convertissez chacun en MP4 AAC, puis Extraire l’audio de fichiers MP4 en lot ou la page MP4 unitaire.',
  tool_extract_audio_from_an_mkv_file_faq_q7: 'Puis‑je rogner après extraction ?',
  tool_extract_audio_from_an_mkv_file_faq_a7: 'Pas ici. Téléchargez, puis Rognez un extrait audio et exportez‑le.',
};
export default fr;
