/**
 * i18n tool shard (image-optimizer / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_image_optimizer_article:
    'Optimiseur local WASM : choix de codec, qualité/effort, limite optionnelle du côté max, comparaison glissante et messages honnêtes sur la lenteur AVIF.',
  tool_image_optimizer_avif_slow: 'AVIF peut être long sur de grandes photos — vous pouvez annuler.',
  tool_image_optimizer_cancel: 'Annuler',
  tool_image_optimizer_cancelled: 'Annulé.',
  tool_image_optimizer_choose_file: 'Choisir une image',
  tool_image_optimizer_clear: 'Effacer',
  tool_image_optimizer_codec_avif: 'AVIF',
  tool_image_optimizer_codec_label: 'Codec / sortie',
  tool_image_optimizer_codec_mozjpeg: 'MozJPEG (JPEG)',
  tool_image_optimizer_codec_oxipng: 'OxiPNG (PNG)',
  tool_image_optimizer_codec_webp: 'WebP',
  tool_image_optimizer_description:
    'Optimisez des images pour le web dans le navigateur avec MozJPEG, WebP, AVIF ou OxiPNG. Étapes : choisir une photo, charger le moteur, choisir le codec et les réglages, comparer avant/après avec le curseur, puis télécharger. Ex. : transformer un gros JPEG hero en WebP plus léger — fichiers locaux après chargement du moteur.',
  tool_image_optimizer_download: 'Télécharger',
  tool_image_optimizer_drop_hint:
    'Ou déposez un JPEG, PNG ou WebP ici. Après chargement du moteur, l’optimisation reste dans cet onglet.',
  tool_image_optimizer_effort_label: 'Effort / vitesse',
  tool_image_optimizer_empty: 'Choisissez d’abord une image.',
  tool_image_optimizer_engine_failed: 'Échec du chargement du moteur. Vérifiez la connexion et réessayez.',
  tool_image_optimizer_engine_loading: 'Chargement du moteur…',
  tool_image_optimizer_engine_needed: 'Chargez le moteur avant d’encoder.',
  tool_image_optimizer_engine_ready: 'Moteur prêt — choisissez un codec et optimisez.',
  tool_image_optimizer_err_decode: 'Décodage impossible. Essayez JPEG, PNG ou WebP.',
  tool_image_optimizer_err_encode: 'Échec de l’encodage. Essayez un autre codec, moins d’effort ou une image plus petite.',
  tool_image_optimizer_example:
    'Le même JPEG téléphone (~3–4 Mo) : MozJPEG est souvent plus léger qu’un JPEG navigateur banal ; WebP réduit encore avec un rendu proche ; AVIF peut descendre plus bas mais prend des secondes sur un grand cadre. Ordres de grandeur seulement — faites confiance au curseur sur votre fichier.',
  tool_image_optimizer_example_title: 'Exemple',
  tool_image_optimizer_faq_a1:
    'Les codecs sont volumineux. On attend un clic pour garder le premier affichage léger — vous ne les téléchargez que pour une optimisation au niveau codec.',
  tool_image_optimizer_faq_a2:
    'Non. Après chargement du moteur, décodage et encodage restent ici. Vérifiez dans Network que l’image n’est pas envoyée en POST.',
  tool_image_optimizer_faq_a3:
    'Le compresseur est un passage rapide taille/qualité (idéal pour viser des Ko). Ici vous chargez un moteur pour choisir MozJPEG, WebP, AVIF ou OxiPNG et comparer au curseur.',
  tool_image_optimizer_faq_a4:
    'L’encodage AVIF sollicite fortement le CPU, surtout sur de grandes photos. Nous affichons la progression et permettons d’annuler plutôt que de prétendre que c’est instantané.',
  tool_image_optimizer_faq_a5:
    'Les entrées animées deviennent une image fixe de la première frame. Le ré-encodage retire souvent l’EXIF — inspectez d’abord avec l’outil EXIF si besoin.',
  tool_image_optimizer_faq_a6:
    'Quand l’essentiel est de changer de type (y compris fond JPEG pour la transparence). Utilisez cet optimiseur quand le poids et le contrôle du codec priment sur un simple changement de format.',
  tool_image_optimizer_faq_q1: 'Pourquoi charger un moteur d’abord ?',
  tool_image_optimizer_faq_q2: 'Mes fichiers quittent-ils le navigateur ?',
  tool_image_optimizer_faq_q3: 'En quoi cela diffère-t-il du compresseur d’images ?',
  tool_image_optimizer_faq_q4: 'Pourquoi AVIF est-il si lent ?',
  tool_image_optimizer_faq_q5: 'Animation et EXIF ?',
  tool_image_optimizer_faq_q6: 'Quand utiliser le convertisseur de format ?',
  tool_image_optimizer_how_body:
    'Choisissez une photo, chargez le moteur une fois, sélectionnez MozJPEG, WebP, AVIF ou OxiPNG, réglez qualité ou effort, limitez éventuellement le côté le plus long, puis glissez pour comparer. Tout reste local. Pour une réduction rapide sans choisir de codec, préférez le compresseur léger.',
  tool_image_optimizer_how_title: 'Fonctionnement',
  tool_image_optimizer_load_engine: 'Charger le moteur',
  tool_image_optimizer_max_edge_label: 'Côté max',
  tool_image_optimizer_optimize: 'Optimiser',
  tool_image_optimizer_optimizing: 'Optimisation…',
  tool_image_optimizer_preview_after: 'Après',
  tool_image_optimizer_preview_before: 'Avant',
  tool_image_optimizer_quality_label: 'Qualité',
  tool_image_optimizer_ratio_tpl: '{from} → {to} ({pct}% plus petit)',
  tool_image_optimizer_resize_on: 'Limiter le côté le plus long',
  tool_image_optimizer_rules_body:
    'Chaque codec arbitre poids, rendu, transparence et temps. À lire avant de viser le plus petit fichier possible.',
  tool_image_optimizer_rules_item_1:
    'MozJPEG : JPEG avec pertes, souvent plus léger qu’un JPEG navigateur classique — utile si vous devez garder .jpg.',
  tool_image_optimizer_rules_item_2:
    'WebP : photos plus légères à rendu comparable ; gère la transparence. Bon défaut pour beaucoup de sites.',
  tool_image_optimizer_rules_item_3:
    'AVIF : souvent le plus petit en lossy, mais plus lent — progression et annulation font partie du parcours.',
  tool_image_optimizer_rules_item_4:
    'OxiPNG : réduit le PNG sans perte. Les photos restent lourdes ; idéal pour une UI nette avec alpha. Le ré-encodage retire souvent l’EXIF ; les octets ne quittent pas l’onglet.',
  tool_image_optimizer_rules_title: 'Ce qu’il faut anticiper',
  tool_image_optimizer_sample: 'Charger un exemple',
  tool_image_optimizer_stats_tpl: '{codec} · {w}×{h} · {bytes} · {ms} ms',
  tool_image_optimizer_status_done: 'Terminé — vérifiez le curseur et la taille, puis téléchargez.',
  tool_image_optimizer_title: 'Optimiser une image — fichiers plus légers sur l’appareil',
  tool_image_optimizer_usecase_1: 'Publier un hero ou une photo produit en WebP/AVIF après contrôle visuel au curseur.',
  tool_image_optimizer_usecase_2: 'Garder du JPEG, mais via MozJPEG quand le JPEG navigateur reste trop lourd.',
  tool_image_optimizer_usecase_3: 'Alléger des PNG d’UI transparents avec OxiPNG ou WebP quasi sans perte avant livraison.',
  tool_image_optimizer_usecases_title: 'Bons cas d’usage',
  tool_image_optimizer_warn_animation: 'Animations : seule la première image est optimisée.',
  tool_image_optimizer_warn_edge: 'Très grandes dimensions (>8192 px) — attendez-vous à de la lenteur ; limitez le côté max.',
  tool_image_optimizer_warn_large: 'Fichier volumineux (>25 Mo) — lent ou risque de manque de mémoire.',
};
export default fr;
