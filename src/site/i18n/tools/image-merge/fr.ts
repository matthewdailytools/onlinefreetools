/**
 * i18n tool shard (image-merge / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_image_merge_article:
    'Collage local multi-images avec disposition, espacement, fond, ajustement grille, format et presets de taille.',
  tool_image_merge_bg_label: 'Fond',
  tool_image_merge_choose_files: 'Ajouter des images',
  tool_image_merge_clear: 'Effacer',
  tool_image_merge_cols_label: 'Colonnes',
  tool_image_merge_description:
    'Combinez des photos en un collage ou une image assemblée dans le navigateur. Étapes : ajoutez des images, choisissez horizontal/vertical/grille, réglez espacement et fond, fusionnez, téléchargez JPEG/WebP/PNG. Exemple : trois blocs en ligne, fond blanc, 8 px d’écart → un WebP — les fichiers restent sur l’appareil ; presets de taille optionnels pour publications courantes.',
  tool_image_merge_download: 'Télécharger',
  tool_image_merge_drop_hint: 'Ou déposez deux JPEG, PNG ou WebP ou plus ici. La fusion reste dans cet onglet.',
  tool_image_merge_empty: 'Ajoutez au moins une image d’abord.',
  tool_image_merge_err_decode: 'Le navigateur n’a pas pu décoder un fichier. Essayez JPEG, PNG ou WebP.',
  tool_image_merge_err_encode: 'Impossible d’exporter l’image fusionnée. Essayez une disposition plus petite ou un autre format.',
  tool_image_merge_example:
    'Chargez l’exemple trois couleurs, gardez Horizontal, espacement 8 px, fond blanc, WebP 0,90, preset Aucun, fusionnez. Vous devriez obtenir une bande ~728×180 px. Passez en Grille 3 colonnes pour une rangée de cellules égales.',
  tool_image_merge_example_title: 'Exemple',
  tool_image_merge_faq_a1:
    'Non. Décodage, mise en page et export restent dans le navigateur. Onglet Réseau — pas de POST d’images.',
  tool_image_merge_faq_a2:
    'Horizontal unifie la hauteur et grandit en largeur ; vertical unifie la largeur et grandit en hauteur. La grille utilise des cellules fixes avec contenir ou couvrir.',
  tool_image_merge_faq_a3: 'Non. Ce sont des tailles de sortie courantes. Les règles évoluent ; vérifiez l’app où vous publiez.',
  tool_image_merge_faq_a4: 'Seule la première image est décodée et dessinée. L’animation n’est pas conservée.',
  tool_image_merge_faq_a5:
    'Des bords au-delà de ~8192 px ou trop de mégapixels peuvent dépasser la mémoire du navigateur. Réduisez le nombre, les colonnes grille ou recadrez d’abord.',
  tool_image_merge_faq_q1: 'Mes photos sont-elles envoyées ?',
  tool_image_merge_faq_q2: 'Différence horizontal / vertical ?',
  tool_image_merge_faq_q3: 'Les presets 1080 ou 1200 garantissent-ils Instagram/Facebook ?',
  tool_image_merge_faq_q4: 'Et les GIF animés ?',
  tool_image_merge_faq_q5: 'Pourquoi un énorme collage échoue ?',
  tool_image_merge_fit_contain: 'Contenir',
  tool_image_merge_fit_cover: 'Couvrir',
  tool_image_merge_fit_label: 'Ajustement cellule',
  tool_image_merge_format_jpeg: 'JPEG',
  tool_image_merge_format_label: 'Format de sortie',
  tool_image_merge_format_png: 'PNG',
  tool_image_merge_format_webp: 'WebP',
  tool_image_merge_gap_label: 'Espacement (px)',
  tool_image_merge_how_body:
    'Ajoutez deux images ou plus, réordonnez si besoin, choisissez disposition, espacement et fond, puis fusionnez. La page crée un canevas local, dessine chaque photo dans l’ordre, peut redimensionner le résultat en tailles carrée ou d’aperçu lien courantes, puis télécharger — sans envoi.',
  tool_image_merge_how_title: 'Fonctionnement',
  tool_image_merge_layout_grid: 'Grille',
  tool_image_merge_layout_horizontal: 'Horizontal',
  tool_image_merge_layout_label: 'Disposition',
  tool_image_merge_layout_vertical: 'Vertical',
  tool_image_merge_merge: 'Fusionner',
  tool_image_merge_move_down: 'Descendre',
  tool_image_merge_move_up: 'Monter',
  tool_image_merge_need_two: 'Il faut au moins deux images pour fusionner.',
  tool_image_merge_preset_fb: '1200×630 (aperçu lien courant)',
  tool_image_merge_preset_ig: '1080×1080 (carré courant)',
  tool_image_merge_preset_label: 'Preset taille',
  tool_image_merge_preset_none: 'Aucun',
  tool_image_merge_preview_label: 'Aperçu fusionné',
  tool_image_merge_quality_label: 'Qualité',
  tool_image_merge_remove: 'Retirer',
  tool_image_merge_rules_body:
    'La taille du canevas suit les formules ci-dessous. En grille les cellules partagent largeur et hauteur ; contenir laisse des bandes, couvrir rogne.',
  tool_image_merge_rules_item_1:
    'Horizontal : hauteur = max des sources ; chaque image est mise à l’échelle sur cette hauteur ; largeur = somme des largeurs + (n−1)×espacement.',
  tool_image_merge_rules_item_2:
    'Vertical : largeur = max des sources ; chaque image est mise à l’échelle sur cette largeur ; hauteur = somme des hauteurs + (n−1)×espacement.',
  tool_image_merge_rules_item_3:
    'Grille : 2–4 colonnes ; lignes = ceil(n/cols) ; cellule = max largeur × max hauteur ; espacement entre cellules ; contenir ou couvrir dans chaque cellule.',
  tool_image_merge_rules_item_4:
    'Les presets redimensionnent le collage fini en 1080×1080 ou 1200×630 avec votre fond (tailles courantes, pas d’approbation plateforme). Le fond est rempli avant le dessin.',
  tool_image_merge_rules_title: 'Règles de disposition',
  tool_image_merge_sample: 'Charger un exemple',
  tool_image_merge_stats_tpl: '{w}×{h} · {mime} · {bytes}',
  tool_image_merge_status_done: 'Terminé — aperçu ci-dessous ; cliquez Télécharger pour enregistrer.',
  tool_image_merge_status_merging: 'Fusion des images…',
  tool_image_merge_title: 'Fusionner des images — créez un collage en une photo',
  tool_image_merge_usecase_1: 'Avant/après : deux photos côte à côte pour avis ou suivi fitness.',
  tool_image_merge_usecase_2: 'Étapes de tutoriel : empilez des captures en vertical en une longue image.',
  tool_image_merge_usecase_3: 'Angles produit ou storyboard : grille 3×3 puis compressez si le fichier est lourd.',
  tool_image_merge_usecases_title: 'Cas d’usage',
  tool_image_merge_warn_animation: 'GIF animés : seule la première image est fusionnée.',
  tool_image_merge_warn_edge: 'Le bord du canevas dépasse ~8192 px — certains navigateurs peuvent échouer ou manquer de mémoire.',
  tool_image_merge_warn_large: 'Fichier volumineux (>25 Mo) — le décodage peut être lent.',
};
export default fr;
