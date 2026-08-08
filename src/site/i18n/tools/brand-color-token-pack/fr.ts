/**
 * i18n tool shard (brand-color-token-pack / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'Une couleur de base de marque devient un pack complet : HEX, RGB, HSL, OKLCH, échelle 50–950, paires texte noir/blanc par palier et variables CSS ou JSON copiables — le tout dans le navigateur.',
  tool_brand_color_token_pack_bad_hex: 'Saisissez un HEX valide de 3 ou 6 chiffres (ex. #2563EB).',
  tool_brand_color_token_pack_base_label: 'Couleur de base',
  tool_brand_color_token_pack_clear: 'Effacer',
  tool_brand_color_token_pack_contrast_col: 'Texte',
  tool_brand_color_token_pack_copy_css: 'Copier CSS',
  tool_brand_color_token_pack_copy_done: 'Copié',
  tool_brand_color_token_pack_copy_json: 'Copier JSON',
  tool_brand_color_token_pack_desc:
    'Une base → HEX/RGB/HSL/OKLCH, échelle 50–950, paires de contraste, variables CSS — local.',
  tool_brand_color_token_pack_description:
    'Créez un pack de jetons couleur de marque à partir d\'une seule base dans le navigateur. Étapes : choisissez la base (HEX ou pipette), consultez HEX/RGB/HSL/OKLCH, générez l\'échelle 50–950 avec paires noir/blanc à chaque palier, puis copiez variables CSS ou JSON. L\'exemple bleu #2563eb se charge à l\'ouverture — aucun envoi.',
  tool_brand_color_token_pack_empty: 'Générez d\'abord les jetons, puis copiez CSS ou JSON.',
  tool_brand_color_token_pack_example:
    'Chargez l\'exemple (#2563EB). Le bloc espaces affiche HEX, RGB, HSL et OKLCH de la base ; la grille liste 50–950 avec texte noir ou blanc recommandé et ratio de contraste. Copier CSS produit :root { --color-50: …; … --color-950: …; } prêt pour votre feuille de style.',
  tool_brand_color_token_pack_example_title: 'Exemple',
  tool_brand_color_token_pack_faq_a1:
    'Non. Calcul et export s\'exécutent dans cet onglet — vos couleurs ne partent pas vers un serveur.',
  tool_brand_color_token_pack_faq_a2:
    'Le palier 500 correspond à votre couleur de base. Les paliers plus clairs (50–400) se mélangent vers le blanc ; les plus foncés (600–950) vers le noir. Mélange linéaire en sRGB pour garder la teinte stable.',
  tool_brand_color_token_pack_faq_a3:
    'Chaque nuancier compare texte noir et blanc sur ce fond et choisit le meilleur contraste WCAG. Les libellés indiquent le ratio et si le texte normal atteint probablement AA (4,5:1) ou AA grand texte (3:1).',
  tool_brand_color_token_pack_faq_a4:
    'Copier CSS sort des propriétés personnalisées :root (--color-50 à --color-950). Copier JSON fournit la même échelle plus les espaces de la base en données structurées pour vos design tokens.',
  tool_brand_color_token_pack_faq_a5:
    'Ce sont des suggestions rapides noir/blanc par palier. Pour des paires personnalisées ou des niveaux WCAG précis, ouvrez le vérificateur de contraste WCAG et collez le HEX d\'un nuancier.',
  tool_brand_color_token_pack_faq_q1: 'Ma couleur quitte-t-elle le navigateur ?',
  tool_brand_color_token_pack_faq_q2: 'Comment l\'échelle 50–950 est-elle construite ?',
  tool_brand_color_token_pack_faq_q3: 'Que signifient les colonnes de contraste ?',
  tool_brand_color_token_pack_faq_q4: 'Que contiennent Copier CSS et Copier JSON ?',
  tool_brand_color_token_pack_faq_q5: 'Quand utiliser le vérificateur de contraste ?',
  tool_brand_color_token_pack_generate: 'Générer',
  tool_brand_color_token_pack_how_body:
    'Saisissez ou choisissez une couleur de base de marque. La page affiche HEX, RGB, HSL et OKLCH, puis construit une échelle de 11 paliers (50–950) avec aperçu UI. Chaque nuancier recommande texte noir ou blanc et un ratio. Copiez variables CSS ou JSON quand la rampe convient — tout reste local.',
  tool_brand_color_token_pack_how_title: 'Fonctionnement',
  tool_brand_color_token_pack_preview_label: 'Aperçu UI',
  tool_brand_color_token_pack_rules_body:
    'Ce qu\'il faut attendre de l\'échelle, des espaces colorimétriques, des indices de contraste et de la confidentialité.',
  tool_brand_color_token_pack_rules_item_1:
    'Le palier 500 est votre base. En dessous, éclaircissement par mélange vers le blanc ; au-dessus, assombrissement vers le noir (mélange linéaire sRGB).',
  tool_brand_color_token_pack_rules_item_2:
    'Le bloc base liste HEX, RGB, HSL et OKLCH pour la même couleur. OKLCH passe par sRGB → linéaire → OKLab pour s\'aligner sur la syntaxe CSS moderne.',
  tool_brand_color_token_pack_rules_item_3:
    'Chaque nuancier recommande texte noir ou blanc — celui qui offre le plus de contraste sur ce fond. Les ratios suivent la luminance relative WCAG ; les libellés AA sont indicatifs.',
  tool_brand_color_token_pack_rules_item_4:
    'Confidentialité : génération, aperçu et copie se font localement dans cet onglet — pas d\'envoi de vos couleurs de marque.',
  tool_brand_color_token_pack_rules_title: 'Règles à connaître',
  tool_brand_color_token_pack_sample: 'Exemple',
  tool_brand_color_token_pack_scale_label: 'Échelle de couleur (50–950)',
  tool_brand_color_token_pack_spaces_label: 'Espaces colorimétriques (base)',
  tool_brand_color_token_pack_text_on: 'Texte sur base',
  tool_brand_color_token_pack_title: 'Générer l’échelle de couleur de marque — palette 50–950 et tokens CSS',
  tool_brand_color_token_pack_ui_body: 'Corps d\'aperçu sur votre couleur de base avec texte suggéré.',
  tool_brand_color_token_pack_ui_btn: 'Action principale',
  tool_brand_color_token_pack_ui_title: 'Titre d\'aperçu',
  tool_brand_color_token_pack_usecase_1:
    'Design systems : partez d\'un HEX de marque et livrez une rampe 50–950 cohérente plus variables CSS pour les composants.',
  tool_brand_color_token_pack_usecase_2:
    'Mode sombre : parcourez les teintes claires (50–300) pour les surfaces et les tons profonds (700–950) pour le texte sur la marque.',
  tool_brand_color_token_pack_usecase_3:
    'Passage aux devs : copiez des jetons JSON ou propriétés CSS au lieu de retaper des HEX depuis une capture.',
  tool_brand_color_token_pack_usecases_title: 'Bon usage',
};
export default fr;
