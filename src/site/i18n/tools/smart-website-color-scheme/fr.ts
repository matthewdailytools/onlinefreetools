/**
 * i18n tool shard (smart-website-color-scheme / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'Sous AA',
  tool_smart_website_color_scheme_aa_pass: 'AA ok',
  tool_smart_website_color_scheme_add_theme: 'Ajouter un thème',
  tool_smart_website_color_scheme_article:
    'À partir d’une couleur de marque, composez un schéma web complet : neutres partagés, tokens sémantiques (liens neutres, statuts fixes), aperçu chrome clair, auto-contrôles de contraste et CSS :root à coller — tout dans le navigateur.',
  tool_smart_website_color_scheme_bad_hex: 'Saisissez un HEX valide à 3 ou 6 chiffres (ex. #0F6E8C).',
  tool_smart_website_color_scheme_bad_id:
    'L’id du thème doit être unique, 1–32 caractères : lettres, chiffres, - ou _.',
  tool_smart_website_color_scheme_check_muted: 'Texte secondaire sur surface',
  tool_smart_website_color_scheme_check_on_action: 'Texte sur action (on-action)',
  tool_smart_website_color_scheme_check_text: 'Corps sur surface',
  tool_smart_website_color_scheme_checks_label: 'Auto-contrôle de contraste (thème actif)',
  tool_smart_website_color_scheme_clear: 'Effacer',
  tool_smart_website_color_scheme_col_role: 'Rôle',
  tool_smart_website_color_scheme_col_token: 'Token',
  tool_smart_website_color_scheme_col_value: 'Valeur',
  tool_smart_website_color_scheme_copy_css: 'Copier CSS',
  tool_smart_website_color_scheme_copy_done: 'Copié',
  tool_smart_website_color_scheme_copy_json: 'Copier JSON',
  tool_smart_website_color_scheme_cp_brand: 'Marque',
  tool_smart_website_color_scheme_cp_btn: 'Bouton outline',
  tool_smart_website_color_scheme_cp_card_body:
    'Le corps de carte utilise un texte atténué. Les liens restent neutres — pas la couleur d’action de marque.',
  tool_smart_website_color_scheme_cp_card_title: 'Titre de carte',
  tool_smart_website_color_scheme_cp_err: 'Le message d’erreur utilise danger, pas la marque.',
  tool_smart_website_color_scheme_cp_link: 'Lien associé',
  tool_smart_website_color_scheme_cp_nav: 'Élément de nav',
  tool_smart_website_color_scheme_cp_side1: 'Barre latérale',
  tool_smart_website_color_scheme_cp_side2: 'Actif',
  tool_smart_website_color_scheme_desc:
    'Schéma web : neutres + tokens CSS sémantiques, liens neutres et statuts fixes — local.',
  tool_smart_website_color_scheme_description:
    'Générez un schéma de couleurs web dans le navigateur. Choisissez un HEX de marque (teal d’exemple #0F6E8C), obtenez des neutres partagés, action/hover/soft/focus, des liens neutres, des couleurs de statut fixes, un aperçu chrome et des auto-contrôles AA ; puis copiez le CSS :root ou le JSON. Basé sur des règles — pas d’IA cloud ; rien n’est envoyé.',
  tool_smart_website_color_scheme_empty: 'Générez d’abord un schéma, puis copiez CSS ou JSON.',
  tool_smart_website_color_scheme_example:
    'Chargez l’exemple (id teal, #0F6E8C). L’aperçu montre une surface blanche, un surlignage teal doux sur l’élément actif (sans barre gauche), des liens de corps neutres et une ligne danger rouge. La sémantique mappe --link sur la couleur de texte (pas --action). Copier CSS donne les neutres :root plus les overrides html[data-theme="teal"].',
  tool_smart_website_color_scheme_example_title: 'Exemple',
  tool_smart_website_color_scheme_faq_a1:
    'Ici, « intelligent » signifie des règles déterministes : neutres fixes, la marque dérive action/hover/soft/focus, les liens restent neutres et les statuts ne suivent jamais la marque. Aucun appel de modèle, aucun envoi — le calcul tourne dans cet onglet.',
  tool_smart_website_color_scheme_faq_a2:
    'Les liens par défaut utilisent les couleurs de texte pour éviter un mur d’hyperliens de marque. La couleur de marque sert aux actions, à la sélection, aux anneaux de focus et aux fills soft légers.',
  tool_smart_website_color_scheme_faq_a3:
    'Danger, success, warning et info restent fixes d’un thème à l’autre. Une marque ambre ne doit pas devenir la couleur d’erreur, sinon toute l’UI ressemble à une alerte.',
  tool_smart_website_color_scheme_faq_a4:
    'Utilisez Générer l’échelle de couleur de marque pour une rampe 50–950 ou des listes HEX/HSL/OKLCH. Cette page livre un schéma sémantique clair complet (bg/surface/link/action/status) prêt à coller.',
  tool_smart_website_color_scheme_faq_a5:
    'Les auto-contrôles couvrent quelques paires clés du thème actif. Pour des paires arbitraires ou AAA, ouvrez le vérificateur de contraste WCAG et collez le HEX d’un token.',
  tool_smart_website_color_scheme_faq_q1: '« Intelligent », est-ce de la génération IA ?',
  tool_smart_website_color_scheme_faq_q2: 'Pourquoi les liens n’utilisent-ils pas la marque ?',
  tool_smart_website_color_scheme_faq_q3: 'Pourquoi les couleurs de statut ne suivent-elles pas le thème ?',
  tool_smart_website_color_scheme_faq_q4: 'Quand préférer Générer l’échelle de couleur de marque ?',
  tool_smart_website_color_scheme_faq_q5: 'Jusqu’où va l’auto-contrôle de contraste ?',
  tool_smart_website_color_scheme_generate: 'Générer',
  tool_smart_website_color_scheme_how_body:
    'Saisissez jusqu’à quatre thèmes de marque (id + HEX). L’outil garde une échelle neutre partagée, dérive les tokens d’action par marque, mappe les rôles sémantiques (liens neutres et statuts fixes), peint un chrome clair, lance les auto-contrôles AA et permet de copier variables CSS ou JSON — le tout en local.',
  tool_smart_website_color_scheme_how_title: 'Comment ça marche',
  tool_smart_website_color_scheme_max_themes: 'Vous pouvez ajouter jusqu’à 4 thèmes qui partagent les mêmes neutres.',
  tool_smart_website_color_scheme_preview_label: 'Aperçu UI clair',
  tool_smart_website_color_scheme_primitives_label: 'Primitifs (thème actif + neutres partagés)',
  tool_smart_website_color_scheme_remove_theme: 'Retirer',
  tool_smart_website_color_scheme_role_action: 'Action / accent de marque',
  tool_smart_website_color_scheme_role_bg: 'Fond de page / section',
  tool_smart_website_color_scheme_role_border: 'Bordures et séparateurs',
  tool_smart_website_color_scheme_role_focus: 'Anneau de focus',
  tool_smart_website_color_scheme_role_link: 'Liens par défaut (neutres)',
  tool_smart_website_color_scheme_role_muted: 'Texte secondaire',
  tool_smart_website_color_scheme_role_on_action: 'Texte sur action pleine',
  tool_smart_website_color_scheme_role_status: 'Statut (découplé de la marque)',
  tool_smart_website_color_scheme_role_surface: 'Surface élevée / cartes',
  tool_smart_website_color_scheme_role_text: 'Corps / texte fort',
  tool_smart_website_color_scheme_rules_body:
    'Couches de tokens, lien ≠ action, statuts indépendants, indices de contraste et confidentialité.',
  tool_smart_website_color_scheme_rules_item_1:
    'Les primitifs portent les neutres bruts et dérivés de marque. La sémantique nomme le but (bg, surface, link, action…). Les composants ne devraient référencer que la sémantique.',
  tool_smart_website_color_scheme_rules_item_2:
    'Marque → --action ; hover assombrit ~22 % ; soft ≈ 10 % alpha ; focus-ring ≈ 40 % alpha ; --bg est un neutre légèrement teinté.',
  tool_smart_website_color_scheme_rules_item_3:
    'Les liens mappent vers text / text-strong (neutre). N’attachez pas le --link par défaut à --action.',
  tool_smart_website_color_scheme_rules_item_4:
    'Danger / success / warning / info restent fixes entre thèmes pour que la marque ne remplace jamais la sémantique d’erreur.',
  tool_smart_website_color_scheme_rules_item_5:
    'Confidentialité : génération, aperçu et copie presse-papiers se font dans cet onglet. Aucune couleur de marque n’est envoyée.',
  tool_smart_website_color_scheme_rules_title: 'Règles à attendre',
  tool_smart_website_color_scheme_sample: 'Charger l’exemple',
  tool_smart_website_color_scheme_semantics_label: 'Sémantique (thème actif)',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'id du thème',
  tool_smart_website_color_scheme_themes_hint:
    'Neutres et statuts partagés ; chaque thème n’écrase que les tokens dérivés de marque. Max. 4 thèmes.',
  tool_smart_website_color_scheme_themes_label: 'Thèmes de marque',
  tool_smart_website_color_scheme_title: 'Schéma de couleurs web — tokens CSS sémantiques',
  tool_smart_website_color_scheme_usecase_1:
    'Chrome d’outil ou SaaS : coque claire lisible avec accents de marque sur sélection et focus, pas sur chaque lien.',
  tool_smart_website_color_scheme_usecase_2:
    'Rebrand de landing : changez de marques via html[data-theme] en gardant le squelette neutre et les couleurs de statut.',
  tool_smart_website_color_scheme_usecase_3:
    'Passage design→dev : collez des variables CSS :root plutôt qu’une liste HEX de captures.',
  tool_smart_website_color_scheme_usecases_title: 'Bonnes situations',
  tool_smart_website_color_scheme_warn_contrast:
    'Attention : le texte sur la couleur d’action est sous 4,5:1 — assombrissez la marque ou ajustez --on-action avant de publier des boutons pleins.',
};
export default fr;
