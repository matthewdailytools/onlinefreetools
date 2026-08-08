/**
 * i18n tool shard (color-from-image / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_color_from_image_article: 'Palette de couleurs dominantes en local plus moyenne régionale au clic, HEX/RGB/HSL copiables.',
  tool_color_from_image_choose_file: 'Choisir une image',
  tool_color_from_image_clear: 'Effacer',
  tool_color_from_image_copied: 'Copié',
  tool_color_from_image_copy: 'Copier HEX',
  tool_color_from_image_count_label: 'Couleurs',
  tool_color_from_image_description:
    'Obtenez les couleurs dominantes et une palette complète depuis n’importe quelle photo — ou utilisez la pipette au clic sur une région. Étapes : choisir l’image, régler le nombre de couleurs (2–12), extraire, copier HEX/RGB/HSL, ou cliquer l’aperçu pour une moyenne locale. Exemple : six teintes d’une photo de marque puis un clic sur le logo pour un accent — le fichier reste sur l’appareil.',
  tool_color_from_image_drop_hint: 'Ou déposez un JPEG, PNG ou WebP ici. L’extraction reste dans cet onglet.',
  tool_color_from_image_empty: 'Choisissez d’abord une image.',
  tool_color_from_image_err_decode: 'Ce navigateur n’a pas pu décoder le fichier. Essayez JPEG, PNG ou WebP.',
  tool_color_from_image_err_no_pixels: 'Aucun pixel opaque à échantillonner — l’image est peut-être entièrement transparente.',
  tool_color_from_image_example:
    'Chargez l’exemple à quatre blocs, laissez Couleurs à 6 et extrayez — vous devriez voir teal, ambre, vert, crème et rouge. Puis cliquez le cercle rouge : la carte de couleur prélevée affiche un HEX rouge de la moyenne ~7×7 autour de ce point, prêt à copier.',
  tool_color_from_image_example_title: 'Exemple',
  tool_color_from_image_extract: 'Extraire',
  tool_color_from_image_faq_a1:
    'Non. Calcul de palette et prélèvement au clic tournent en local. Vérifiez l’onglet Réseau — l’image n’est pas POSTée.',
  tool_color_from_image_faq_a2:
    'La page réduit l’image, écarte les pixels peu opaques, partage l’espace couleur avec median-cut, moyenne chaque groupe et trie par nombre d’échantillons.',
  tool_color_from_image_faq_a3:
    'L’outil remappe le clic vers les pixels source et moyenne les couleurs opaques dans un petit carré (~7×7). Vous obtenez HEX/RGB/HSL pour cette région, séparé de la liste palette.',
  tool_color_from_image_faq_a4:
    'Photos et captures UI sont bruitées en 1×1. Une moyenne de petite région est plus stable pour les accents CSS tout en suivant où vous avez cliqué.',
  tool_color_from_image_faq_a5:
    'Seule la première image est dessinée, utilisée pour la palette et disponible pour le prélèvement au clic.',
  tool_color_from_image_faq_q1: 'Mon image quitte-t-elle le navigateur ?',
  tool_color_from_image_faq_q2: 'Comment sont choisies les couleurs principales ?',
  tool_color_from_image_faq_q3: 'Que se passe-t-il quand je clique l’image ?',
  tool_color_from_image_faq_q4: 'Pourquoi un clic n’est-il pas un seul pixel ?',
  tool_color_from_image_faq_q5: 'Les GIF animés sont-ils entièrement analysés ?',
  tool_color_from_image_how_body:
    'Choisissez une photo et extrayez une palette : la page réduit une copie de travail (bord long ~256 px), ignore les pixels quasi transparents, regroupe les couleurs et trie par fréquence. Séparément, cliquez l’aperçu pour moyenner un petit carré autour de ce point en pleine résolution et copier HEX, RGB ou HSL — rien n’est envoyé.',
  tool_color_from_image_how_title: 'Fonctionnement',
  tool_color_from_image_palette_label: 'Palette',
  tool_color_from_image_pct_tpl: '{pct} % des échantillons',
  tool_color_from_image_pick_hint: 'Cliquez l’image pour moyenner une petite région autour du point (environ 7×7 pixels source).',
  tool_color_from_image_pick_label: 'Couleur prélevée',
  tool_color_from_image_pick_transparent: 'Ce point n’a pas de pixels opaques — cliquez ailleurs.',
  tool_color_from_image_pick_xy_tpl: 'Autour de ({x}, {y}) · moyenne {size}×{size}',
  tool_color_from_image_preview_label: 'Source — clic pour prélever',
  tool_color_from_image_rules_body:
    'Extraction de palette et prélèvement au clic partagent une image mais répondent à des questions différentes. Consultez la liste si une couleur semble inattendue.',
  tool_color_from_image_rules_item_1:
    'L’échantillonnage palette utilise un bitmap réduit (bord max ~256 px) pour garder les grandes photos fluides. Le détail fin peut fusionner dans des teintes proches.',
  tool_color_from_image_rules_item_2:
    'Les pixels avec alpha sous 128 sont ignorés pour la palette et les moyennes au clic. Les points entièrement transparents affichent un message clair.',
  tool_color_from_image_rules_item_3:
    'Vous demandez 2–12 couleurs de palette ; sur image plate, il peut y en avoir moins. Tri par part d’échantillons.',
  tool_color_from_image_rules_item_4:
    'Le clic moyenne les pixels opaques dans une fenêtre ~7×7 autour du clic en coordonnées source (pas seule la miniature). C’est un échantillon de région, pas une pipette pixel labo.',
  tool_color_from_image_rules_item_5:
    'Confidentialité : décodage, calcul de palette et prélèvement au clic tournent en local dans cet onglet.',
  tool_color_from_image_rules_title: 'À quoi s’attendre',
  tool_color_from_image_sample: 'Charger un exemple',
  tool_color_from_image_status_done: 'Terminé — copiez un échantillon ou cliquez l’image pour prélever une région.',
  tool_color_from_image_status_extracting: 'Extraction de la palette…',
  tool_color_from_image_status_picked: 'Prélevé — cliquez HEX/RGB/HSL pour copier.',
  tool_color_from_image_title: 'Extraire les couleurs — palette et pipette au clic',
  tool_color_from_image_usecase_1: 'Photos de marque : tirez une palette puis cliquez un logo ou bouton pour un accent précis.',
  tool_color_from_image_usecase_2:
    'Captures d’UI : parcourez la palette d’interface puis cliquez une puce ou icône pour la couleur exacte de la région.',
  tool_color_from_image_usecase_3:
    'Idées de dégradé : prenez deux accents depuis la palette ou au clic, puis ouvrez le calculateur de dégradés.',
  tool_color_from_image_usecases_title: 'Bon usage',
  tool_color_from_image_warn_animation: 'Fichiers animés : seule la première image est échantillonnée.',
  tool_color_from_image_warn_large: 'Fichier volumineux (>25 Mo) — l’échantillonnage peut être lent.',
};
export default fr;
