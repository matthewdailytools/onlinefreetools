import type { SiteLangDict } from '../../../types';

/**
 * French copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Edge fades; ≠ seamless loop wrap (S5), ≠ limiter/EQ.
 */
const fr: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "Appliquer un fondu d’entrée et de sortie à un clip",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "Adoucissez les démarrages et arrêts brusques avec des puces 0,5–3 s et des courbes linéaire ou equal-power, puis téléchargez un WAV 16 bits. Uniquement sur l’appareil.",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "Appliquer un fondu d’entrée et de sortie à un clip avec des puces de 0,5, 1, 2 ou 3 secondes à chaque extrémité et une courbe linéaire ou equal-power. Étapes : fondu, préécoute, télécharger le WAV. Exemple : charger l’échantillon abrupt. Fondus de bords seulement—pas un crossfade enveloppe pour boucle seamless, ni limiteur ni EQ. L’audio reste sur votre appareil ; jamais envoyé.",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "Des coupures dures au début ou à la fin cliquent sur les enceintes et sonnent brusques sur une timeline. Cette page applique une enveloppe d’entrée en tête et de sortie en queue. Choisissez 0,5, 1, 2 ou 3 s par extrémité, puis Linéaire ou Equal-power. Si la somme dépasse la durée, les deux côtés rétrécissent proportionnellement. C’est un fondu de bords sur un clip—pas envelopper la queue dans la tête pour une boucle seamless, ni limiter les pics ni égaliser. Les canaux restent 1 ou 2. Gardez l’original ; le téléchargement est un nouveau WAV 16 bits. Le travail s’exécute dans le navigateur.",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "Choisir un fichier audio",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "Déposez un WAV, MP3, M4A, AAC ou OGG. Maximum 40 MiB et 10 minutes ; mono ou stéréo.",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "Fondu",
  tool_fade_in_and_fade_out_an_audio_clip_download: "Télécharger le WAV",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "Charger l’échantillon",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "Effacer",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "Réglages de fondu",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "Fondu d’entrée",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "Fondu de sortie",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "Courbe",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "Linéaire",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "Equal-power",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "Par défaut 1 s en entrée, 1 s en sortie, Equal-power. Puces courtes pour la batterie ; longues pour pads et voix. Si elles dépassent la durée, elles rétrécissent ensemble.",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "Progression du fondu",
  tool_fade_in_and_fade_out_an_audio_clip_read: "Lire",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "Décoder",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "Fondu",
  tool_fade_in_and_fade_out_an_audio_clip_write: "Écrire",
  tool_fade_in_and_fade_out_an_audio_clip_done: "Prêt. Préécoutez le WAV fondu, puis Télécharger le WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "Le fondu a échoué. Essayez un fichier audio valide plus petit.",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "{s}s écoulées",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "Écouter le WAV fondu",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds}s · in {fadeIn}s · out {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "demo-abrupte-quatre-secondes",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "Choisissez d’abord un fichier audio ou chargez l’échantillon.",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "Déposez exactement un fichier audio.",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "Audio non pris en charge ou endommagé. Utilisez un fichier que le navigateur peut décoder (WAV, MP3, M4A, AAC ou OGG).",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "Utilisez un fichier d’au plus 40 MiB ou 10 minutes, avec un ou deux canaux.",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "Le navigateur n’a pas pu décoder cet audio. Essayez un autre enregistrement valide.",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "Impossible d’écrire le WAV fondu. Vérifiez les réglages puis réessayez Fondu.",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "Niveau presque silence—rien à fondre. Essayez un enregistrement audible.",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "Clip trop court pour un fondu utile. Utilisez un fichier de plus d’environ 50 ms.",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "Comment appliquer un fondu d’entrée et de sortie à un clip",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "Choisissez durées et courbe, appliquez, écoutez, téléchargez un WAV 16 bits—sans envoyer le fichier.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "Choisissez un fichier audio, ou Charger l’échantillon pour une démo abrupte de quatre secondes.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "Ouvrez Réglages de fondu et choisissez les puces d’entrée et de sortie (0,5 / 1 / 2 / 3 s). Par défaut 1 s chacune.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "Choisissez Linéaire ou Equal-power (défaut), cliquez Fondu et attendez Lire → Décoder → Fondu → Écrire.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "Préécoutez le début et la fin doux, vérifiez la ligne de résultat, puis Télécharger le WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title:
    "Pourquoi choisir nos outils Appliquer un fondu d’entrée et de sortie à un clip",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "Voir secondes d’entrée/sortie, nom de courbe et KiB de sortie avant d’enregistrer.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "Puces claires et deux courbes—un travail de bords, pas une boucle seamless ni une chaîne limiteur/EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "Décodage, enveloppes et écriture WAV s’exécutent sur votre appareil ; la page n’envoie pas votre enregistrement.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "Changer puces, courbe ou entrée invalide l’ancien téléchargement pour éviter un WAV périmé.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "Durées, courbes et limites",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "L’entrée monte depuis le silence ; la sortie tombe au silence. Linéaire est une rampe droite ; Equal-power utilise sinus/cosinus. Les demandes qui se chevauchent rétrécissent proportionnellement.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "Chaque extrémité propose 0,5, 1, 2 ou 3 secondes. Défaut : 1 s / 1 s et Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "Ne fond que les bords d’un clip. N’enveloppe pas la queue dans la tête pour une boucle seamless, ne limite pas les pics et ne refait pas l’EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "L’export conserve 1 ou 2 canaux. Les tags ne sont pas copiés. L’original n’est jamais écrasé.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "Un fichier jusqu’à 40 MiB et dix minutes. Si la somme dépasse la durée, les deux côtés diminuent ensemble.",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "Essayer un vrai fondu de bords",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "Charger l’échantillon crée un ton de quatre secondes qui démarre et s’arrête net, puis Fondu à 1 s / 1 s Equal-power automatiquement. La lecture ne démarre pas seule—appuyez sur lecture dans la prévisualisation pour entendre les bords doux.",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "Quand cela aide",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "Une voix off ou un lit musical qui clique aux coupes—choisissez 1 s / 1 s, Fondu, téléchargez le WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "Un clip qui a besoin de bords doux avant un découpage ailleurs ou une timeline—sans construire une boucle seamless.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_3: "Une sonnerie ou un jingle démarre et finit trop sec ; il faut des fondus.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "Est-ce la même chose que Faire une boucle audio seamless ?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "Non. Cet outil enveloppe la queue sélectionnée dans la tête avec un crossfade pour une jointure qui boucle proprement. Cette page adoucit seulement le début et la fin d’un clip. Pour les boucles seamless, utilisez Faire une boucle audio seamless.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "Cela limite-t-il les pics ou égalise-t-il le timbre ?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "Non. Cela multiplie seulement les échantillons par une enveloppe. Pour le limiting, le boost de basses ou l’EQ voix étouffée, utilisez les outils dédiés.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "Equal-power versus Linéaire ?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "Linéaire rampe le gain en ligne droite. Equal-power utilise un sinus en entrée et la forme cosinus correspondante en sortie pour une sonie plus douce. Par défaut : Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "Et si 3 s + 3 s dépasse mon clip ?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "Les deux extrémités rétrécissent en proportion pour que la somme ne dépasse pas la durée. La ligne de résultat montre les secondes réellement appliquées.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "Puis-je fondre une seule extrémité ?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "Les puces fixent les deux extrémités ; utilisez la plus courte (0,5 s) sur celle que vous touchez à peine, ou découpez d’abord avec Découper un clip audio et exporter.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "Mon audio est-il envoyé sur un serveur ?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "Non. Décodage, fondus et écriture WAV s’exécutent dans le navigateur. La page a besoin du réseau au premier chargement ; le hors-ligne n’est pas garanti. Pour les boucles seamless ou le découpage, utilisez les outils dédiés.",
};
export default fr;
