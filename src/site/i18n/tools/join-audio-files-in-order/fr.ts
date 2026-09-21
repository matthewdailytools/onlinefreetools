import type { SiteLangDict } from '../../../types';

/**
 * French copy for join-audio-files-in-order (F7 A2).
 * Joindre des fichiers audio dans l’ordre ; ≠ mix superposé ; ≠ fondu enchaîné.
 */
const fr: SiteLangDict = {
  tool_join_audio_files_in_order_title: 'Joindre des fichiers audio dans l’ordre',
  tool_join_audio_files_in_order_desc:
    'Joignez plusieurs clips locaux bout à bout selon la liste, puis téléchargez un WAV 16 bits. Sur l’appareil seulement—pas un mix superposé.',
  tool_join_audio_files_in_order_description:
    'Joignez plusieurs fichiers audio locaux bout à bout dans l’ordre de la liste dans le navigateur, puis téléchargez un WAV 16 bits. Étapes : Ajouter des clips, réordonner si besoin, Joindre, préécouter, télécharger. Exemple : charger deux tons d’échantillon. Concaténation seulement—pas de mix superposé ni de fondu enchaîné. Jamais téléversé.',
  tool_join_audio_files_in_order_article:
    'Prises de podcast, mémos vocaux et sections de chanson doivent souvent devenir un seul fichier continu. Cette page permet de déposer plusieurs fichiers locaux, de les réordonner dans une liste, de décoder chaque clip dans le navigateur, d’aligner la fréquence d’échantillonnage et les canaux, puis de concaténer les échantillons dans cet ordre en un WAV PCM 16 bits. Elle n’empile pas les pistes en même temps (mix), ne fait pas de fondu enchaîné entre chansons et n’extrait pas l’audio d’une vidéo. Le succès dépend du décodage navigateur de chaque conteneur. Canaux : un ou deux. Gardez les originaux ; le téléchargement est un nouveau fichier. Le travail tourne sur votre appareil.',
  tool_join_audio_files_in_order_choose: 'Ajouter des fichiers audio',
  tool_join_audio_files_in_order_hint:
    'Déposez ou choisissez plusieurs WAV, MP3, M4A, AAC ou OGG. Ajoutez-en d’autres à tout moment. Jusqu’à 20 clips, 40 MiB chacun, 20 minutes au total après jointure ; mono ou stéréo.',
  tool_join_audio_files_in_order_list_label: 'Ordre de jointure',
  tool_join_audio_files_in_order_move_up: 'Monter',
  tool_join_audio_files_in_order_move_down: 'Descendre',
  tool_join_audio_files_in_order_remove: 'Retirer',
  tool_join_audio_files_in_order_convert: 'Joindre',
  tool_join_audio_files_in_order_download: 'Télécharger WAV',
  tool_join_audio_files_in_order_sample: 'Charger l’échantillon',
  tool_join_audio_files_in_order_clear: 'Effacer',
  tool_join_audio_files_in_order_advanced: 'Notes de jointure',
  tool_join_audio_files_in_order_settings_hint:
    'Les clips sont joints bout à bout dans l’ordre de la liste. Les fréquences différentes s’alignent sur le premier clip. Concaténation seulement—pas de mix ni de fondu enchaîné.',
  tool_join_audio_files_in_order_progress: 'Progression de la jointure',
  tool_join_audio_files_in_order_read: 'Lire',
  tool_join_audio_files_in_order_decode: 'Décoder',
  tool_join_audio_files_in_order_join: 'Joindre',
  tool_join_audio_files_in_order_write: 'Écrire',
  tool_join_audio_files_in_order_done: 'Prêt. Préécoutez le WAV joint, puis téléchargez.',
  tool_join_audio_files_in_order_failed: 'Échec de la jointure. Essayez moins de fichiers, plus courts et valides.',
  tool_join_audio_files_in_order_elapsed: '{s}s écoulées',
  tool_join_audio_files_in_order_preview: 'Écouter le WAV joint',
  tool_join_audio_files_in_order_result:
    '{files} fichiers · {seconds}s · {channels} ch · {rate} Hz · WAV {output} KiB',
  tool_join_audio_files_in_order_sample_name: 'ton-jointure',
  tool_join_audio_files_in_order_empty: 'Ajoutez au moins deux fichiers audio ou chargez d’abord l’échantillon.',
  tool_join_audio_files_in_order_empty_state:
    'Aucun clip pour l’instant. Déposez plusieurs fichiers locaux, ou chargez l’échantillon pour deux tons courts. Cet outil concatène dans l’ordre de la liste—il ne superpose pas les pistes.',
  tool_join_audio_files_in_order_queue_count: '{n} fichier(s) en file',
  tool_join_audio_files_in_order_err_file: 'Ajoutez au moins deux fichiers audio pris en charge.',
  tool_join_audio_files_in_order_err_format:
    'Audio non pris en charge ou endommagé. Utilisez WAV, MP3, M4A, AAC ou OGG que le navigateur peut décoder.',
  tool_join_audio_files_in_order_err_limit:
    'Jusqu’à 20 fichiers, 40 MiB chacun, mono ou stéréo, durée totale jointe sous 20 minutes.',
  tool_join_audio_files_in_order_err_decode:
    'Le navigateur n’a pas pu décoder l’un des fichiers. Retirez-le ou essayez un autre encodage.',
  tool_join_audio_files_in_order_err_encoder: 'Impossible d’écrire le WAV joint. Réessayez Joindre.',
  tool_join_audio_files_in_order_how_title: 'Comment joindre des fichiers audio dans l’ordre',
  tool_join_audio_files_in_order_how_body:
    'Ajoutez plusieurs clips locaux, fixez l’ordre, lancez Joindre, écoutez, puis téléchargez un WAV 16 bits—sans téléversement.',
  tool_join_audio_files_in_order_how_item_1:
    'Ajoutez au moins deux fichiers audio (ou chargez l’échantillon pour deux tons courts). Déposez à nouveau pour en ajouter.',
  tool_join_audio_files_in_order_how_item_2:
    'Utilisez Monter / Descendre / Retirer dans la liste pour coller à l’ordre voulu.',
  tool_join_audio_files_in_order_how_item_3:
    'Cliquez Joindre et attendez Lire → Décoder → Joindre → Écrire.',
  tool_join_audio_files_in_order_how_item_4:
    'Préécoutez la piste continue, vérifiez la ligne de résultat, puis téléchargez le WAV.',
  tool_join_audio_files_in_order_why_choose_title: 'Pourquoi choisir nos outils Joindre des fichiers audio dans l’ordre',
  tool_join_audio_files_in_order_why_choose_item_1:
    'Voyez le nombre de fichiers, la durée, les canaux, la fréquence et les KiB de sortie avant d’enregistrer.',
  tool_join_audio_files_in_order_why_choose_item_2:
    'Un seul travail de concaténation—ordre de liste bout à bout—avec des limites honnêtes si un clip ne décode pas.',
  tool_join_audio_files_in_order_why_choose_item_3:
    'Lecture, décodage et écriture tournent sur votre appareil ; la page ne téléverse pas vos clips pour les traiter.',
  tool_join_audio_files_in_order_why_choose_item_4:
    'Modifier la file efface l’ancien téléchargement pour ne pas enregistrer un WAV obsolète.',
  tool_join_audio_files_in_order_rules_title: 'Règles de concaténation et limites honnêtes du navigateur',
  tool_join_audio_files_in_order_rules_body:
    'Chaque exécution joint les clips bout à bout dans l’ordre de la liste. Les fréquences s’alignent sur le premier clip. L’export est un WAV 16 bits. Ce n’est pas un mix superposé, ni un fondu enchaîné, ni une extraction vidéo.',
  tool_join_audio_files_in_order_rules_item_1:
    'Deux à vingt fichiers audio locaux, chacun jusqu’à 40 MiB. Durée jointe sous vingt minutes. Canaux un ou deux.',
  tool_join_audio_files_in_order_rules_item_2:
    'Cette page concatène. Elle n’empile pas voix et musique en même temps et ne fait pas de fondu enchaîné.',
  tool_join_audio_files_in_order_rules_item_3:
    'Les balises ne sont pas copiées. Les originaux ne sont jamais écrasés. Le succès dépend du décodage navigateur par fichier.',
  tool_join_audio_files_in_order_rules_item_4:
    'Après jointure, utilisez Rogner un clip audio et exporter pour les coupes. Pour une vidéo, extrayez d’abord l’audio.',
  tool_join_audio_files_in_order_example_title: 'Essayer deux tons courts',
  tool_join_audio_files_in_order_example:
    'Charger l’échantillon ajoute deux tons WAV courts (hauteurs différentes) puis lance Joindre. Vous devez entendre le ton A puis le B sans chevauchement. La lecture ne démarre pas toute seule—appuyez sur lecture dans l’aperçu.',
  tool_join_audio_files_in_order_usecases_title: 'Quand cela aide',
  tool_join_audio_files_in_order_usecase_1:
    'Plusieurs mémos vocaux doivent devenir une piste continue—ajoutez dans l’ordre, Joindre, téléchargez le WAV.',
  tool_join_audio_files_in_order_usecase_2:
    'Sections de chanson ou chapitres de podcast en fichiers séparés nécessitent un export sans les envoyer vers un site de jointure.',
  tool_join_audio_files_in_order_usecase_3: 'Plusieurs WAV par chapitres doivent devenir un fichier continu.',
  tool_join_audio_files_in_order_faq_q1: 'Est-ce la même chose que mixer ou superposer deux pistes ?',
  tool_join_audio_files_in_order_faq_a1:
    'Non. Le mix superposé joue les clips en même temps (par ex. voix sur musique). Cette page les place seulement l’un après l’autre selon la liste.',
  tool_join_audio_files_in_order_faq_q2: 'Y a-t-il un fondu enchaîné entre chansons ?',
  tool_join_audio_files_in_order_faq_a2:
    'Non. Pas de fondu enchaîné ni de transition DJ. Les clips se rejoignent bout à bout. Le fondu enchaîné est un autre travail.',
  tool_join_audio_files_in_order_faq_q3: 'Puis-je changer l’ordre de jointure ?',
  tool_join_audio_files_in_order_faq_a3:
    'Oui. Utilisez Monter et Descendre sur chaque ligne, ou Retirer puis rajouter. Joindre suit toujours la liste de haut en bas.',
  tool_join_audio_files_in_order_faq_q4: 'Et si les fichiers ont des fréquences d’échantillonnage différentes ?',
  tool_join_audio_files_in_order_faq_a4:
    'Les clips suivants sont alignés sur la fréquence du premier avant concaténation. Les canaux restent mono ou stéréo.',
  tool_join_audio_files_in_order_faq_q5: 'Mon audio est-il téléversé vers un serveur ?',
  tool_join_audio_files_in_order_faq_a5:
    'Non. Lecture, décodage et écriture tournent dans votre navigateur sur l’appareil. La page a besoin du réseau au premier chargement ; l’usage hors ligne n’est pas garanti.',
  tool_join_audio_files_in_order_faq_q6: 'Puis-je joindre de l’audio extrait d’une vidéo ?',
  tool_join_audio_files_in_order_faq_a6:
    'Extrayez d’abord la piste avec Extraire l’audio d’un fichier vidéo, puis ajoutez l’audio exporté ici. Cette page n’accepte pas les conteneurs vidéo comme entrées de jointure.',
};
export default fr;
