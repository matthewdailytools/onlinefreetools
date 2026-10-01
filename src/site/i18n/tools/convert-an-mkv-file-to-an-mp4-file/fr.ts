import type { SiteLangDict } from '../../../types';

/**
 * Français (France) : convertir un MKV en MP4 dans le navigateur (D2).
 * AAC stéréo ; pas de remux pur ; pas YouTube ; environ 5 Gio avec OPFS (environ 1 Gio sans) ; E-AC-3 via helper WASM.
 * Clés alignées sur la master EN ; réécriture native, pas calque de l’anglais.
 */
const fr: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'Convertir un fichier MKV en fichier MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'Convertissez un MKV local en MP4 dans le navigateur, avec audio AAC stéréo. Vidéo copiée si possible. Environ 5 Gio avec OPFS (environ 1 Gio sans). Rien n’est envoyé.',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    'Convertissez un MKV local en MP4 sur votre appareil, avec piste AAC stéréo pour les lecteurs et les outils d’extraction. Étapes : choisir le MKV → Convertir → Télécharger. Exemple : Charger l’exemple convertit un court clip Matroska synthétique. Les paquets vidéo sont copiés quand le navigateur peut garder le codec ; l’audio est toujours réencodé en AAC (E-AC-3 / DDP décodables via un helper WASM sur la page). Plafond d’environ 5 Gio avec OPFS (environ 1 Gio sans) pour cette première version — les gros rips restent sur ffmpeg bureau. Local uniquement, pas de téléchargement YouTube par URL. Jamais envoyé. Il ne vous faut que la voix ensuite ? Ouvrez Extraire l’audio d’un fichier MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    'Montage et téléphones demandent souvent du MP4, alors que les captures arrivent en MKV. Cette page remuxe quand c’est sûr et écrit toujours de l’AAC stéréo — pas un remux muet laissant de l’E-AC-3 illisible dans le navigateur. Pas de récupération d’URL distantes, pas de lot ZIP (pour l’instant), pas de remplacement des pages d’extraction audio — après un MP4 AAC, les outils liés restent la suite logique.',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'Choisir un fichier MKV',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'Déposez un .mkv local (environ 5 Gio avec OPFS (environ 1 Gio sans)). L’audio devient AAC stéréo. Pas YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: 'Convertir',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'Télécharger',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'Charger l’exemple',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'Effacer',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: 'Arrêter',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: 'Réglages audio (facultatif)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: 'Canaux audio',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'Stéréo (par défaut)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'Mono',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'Qualité AAC',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: 'Fichier plus léger',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'Équilibré',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: 'Meilleure qualité (par défaut)',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    'Les valeurs par défaut conviennent à la plupart des fichiers : AAC stéréo en qualité élevée. Changer les réglages efface un téléchargement déjà prêt.',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: 'Progression de la conversion',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'Charger le moteur',
  tool_convert_an_mkv_file_to_an_mp4_file_read: 'Lire',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'Décoder',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'Encoder',
  tool_convert_an_mkv_file_to_an_mp4_file_write: 'Écrire',
  tool_convert_an_mkv_file_to_an_mp4_file_done:
    'Prêt. Téléchargez le MP4, ou ouvrez l’outil d’extraction MP4 pour l’audio seul.',
  tool_convert_an_mkv_file_to_an_mp4_file_failed:
    'Échec de la conversion. Essayez un MKV plus petit ou une autre piste audio.',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: '{s} s écoulées',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: 'Aperçu du MP4 converti',
  tool_convert_an_mkv_file_to_an_mp4_file_result: 'Entrée {input} Kio → MP4 {output} Kio',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: 'demo-court-mkv-vers-mp4',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: 'Choisissez d’abord un MKV ou chargez l’exemple.',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'Aucun fichier. Déposez un .mkv local d’environ 5 Gio max avec OPFS, ou Charger l’exemple. Pas YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: 'Arrêté. Aucun MP4 partiel n’est conservé.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'Déposez exactement un fichier MKV.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: 'Fichier non pris en charge. Sur cette page, .mkv uniquement.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'Ce MKV dépasse le plafond d’environ 5 Gio avec OPFS (environ 1 Gio sans) pour la conversion navigateur. Utilisez ffmpeg sur votre ordinateur pour les fichiers plus gros.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'Impossible d’ouvrir en Matroska, ou plus aucune piste vidéo/audio utilisable.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'Un codec audio ou vidéo n’a pas pu être décodé ou encodé ici. Essayez une autre piste, ou convertissez sur votre ordinateur avec ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'Impossible d’écrire le MP4. Relancez Convertir.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'Impossible de charger l’exemple MKV. Déposez votre propre fichier.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'Impossible de charger le moteur de conversion dans ce navigateur.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: 'La conversion a été arrêtée.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'Comment convertir un fichier MKV en fichier MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'Déposez un MKV local, lancez Convertir, puis Téléchargez le MP4 — l’audio devient AAC stéréo pour les extractions suivantes.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1:
    'Choisissez un .mkv local d’environ 5 Gio max avec OPFS, ou cliquez sur Charger l’exemple.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2:
    'Facultatif : ouvrez Réglages audio pour du mono ou une qualité AAC plus légère.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3:
    'Cliquez sur Convertir et attendez Charger le moteur → Lire → Décoder → Encoder → Écrire (ou Arrêter).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4:
    'Prévisualisez si proposé, puis Télécharger. Pour la voix seule ensuite : Extraire l’audio d’un fichier MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title:
    'Pourquoi convertir un fichier MKV en MP4 avec cette page',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1:
    'AAC stéréo est écrit volontairement — pas un remux qui garde de l’E-AC-3 injouable dans beaucoup de navigateurs.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2:
    'La vidéo reste copiée quand c’est possible : les longs clips finissent plus vite qu’avec un réencodage complet.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3:
    'Le traitement reste sur l’appareil ; le premier chargement du moteur vient uniquement de ce site.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4:
    'Étape suivante claire pour extraire l’audio : page MP4 liée après le téléchargement.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV vers MP4 avec AAC : limites transparentes',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    'Un MKV local par exécution. L’audio est réencodé en AAC. Plafonds et codecs annoncés clairement — les rips multi‑Go peuvent encore exiger ffmpeg bureau.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    'Environ 5 Gio avec OPFS (environ 1 Gio sans) pour ce chemin navigateur. Au‑delà → err_limit.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'Pas de téléchargement par URL ni YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3 / DDP décodables via le helper AC-3 fourni, puis encodage AAC stéréo. Codecs vidéo exotiques : err_codec possible.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    'Le MKV d’origine n’est jamais écrasé. Pour plusieurs fichiers : Convertir des fichiers MKV en MP4 par lots (ZIP).',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: 'Essayer une vraie conversion',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    'Charger l’exemple récupère un court MKV sur le site, puis Convertir s’exécute. Pour un test réel, préférez votre .mkv sous le plafond.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'Quand c’est utile',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1:
    'Un MKV de capture d’écran doit s’ouvrir dans un logiciel de montage qui n’accepte que le MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2:
    'Un MKV DDP/Atmos a besoin d’AAC avant Extraire l’audio d’un fichier MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3:
    'Vous voulez un MP4 partageable sans envoyer le Matroska à un convertisseur cloud.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: 'Puis-je coller une URL YouTube ?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'Non. Fichiers .mkv locaux uniquement.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: 'Est-ce seulement un remux (même codec audio) ?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'Non. L’audio est toujours réencodé en AAC pour le demux navigateur et beaucoup de lecteurs. La vidéo peut encore être copiée sans réencodage.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'Mon MKV a Dolby Atmos / DDP / E-AC-3 — ça marchera ?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'Souvent oui sous le plafond de taille : la page charge un décodeur AC-3/E-AC-3, downmix en AAC stéréo, puis écrit le MP4. Les très gros rips peuvent échouer ou être trop lents — utilisez ffmpeg bureau.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: 'Mon fichier est-il envoyé ?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4:
    'Non. La conversion s’exécute dans votre navigateur. Les scripts du moteur se chargent une fois depuis ce site.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: 'Je n’ai besoin que de la piste audio — cette page ?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'Si le MKV convient déjà au repli d’extraction et a un codec compatible navigateur : Extraire l’audio d’un fichier MKV. En DDP ou trop gros pour l’extraction : convertissez ici, puis Extraire l’audio d’un fichier MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: 'WebM ou MOV plutôt que MKV ?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6:
    'Cette page n’accepte que .mkv. D’autres conteneurs auront leurs propres pages de conversion plus tard.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: 'Convertir plusieurs MKV d’un coup ?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7:
    'Pas de lot ZIP sur cette page pour l’instant. Convertissez un fichier à la fois.',
};
export default fr;
