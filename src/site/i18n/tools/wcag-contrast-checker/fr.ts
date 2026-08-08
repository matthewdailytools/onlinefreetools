/**
 * i18n tool shard (wcag-contrast-checker / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA texte grand',
  tool_wcag_contrast_checker_aa_normal: 'AA texte normal',
  tool_wcag_contrast_checker_aaa_large: 'AAA texte grand',
  tool_wcag_contrast_checker_aaa_normal: 'AAA texte normal',
  tool_wcag_contrast_checker_article:
    'Vérificateur de contraste WCAG avec luminance relative, badges AA/AAA, aperçu en direct et suggestions de couleurs accessibles — le tout en local.',
  tool_wcag_contrast_checker_bad_hex: 'Saisissez des couleurs HEX valides (#RGB ou #RRGGBB).',
  tool_wcag_contrast_checker_bg_label: 'Arrière-plan',
  tool_wcag_contrast_checker_check: 'Vérifier',
  tool_wcag_contrast_checker_clear: 'Effacer',
  tool_wcag_contrast_checker_copy: 'Copier le résumé',
  tool_wcag_contrast_checker_copy_done: 'Copié',
  tool_wcag_contrast_checker_desc:
    'Contrôlez le ratio de contraste et la conformité AA/AAA — sans envoyer vos couleurs.',
  tool_wcag_contrast_checker_description:
    'Choisissez une couleur de texte et un fond pour voir le ratio WCAG et le résultat AA/AAA en texte normal et grand. Étapes : sélectionnez ou saisissez un HEX, cliquez Vérifier, lisez le ratio et les badges, inversez ou testez les suggestions. Exemple : #767676 sur #ffffff ≈ 4,54:1 — réussit AA en texte normal, échoue AAA en texte normal. Les couleurs restent dans le navigateur.',
  tool_wcag_contrast_checker_empty: 'Effectuez d\'abord une vérification, puis copiez.',
  tool_wcag_contrast_checker_example:
    'Chargez l\'exemple : premier plan #767676 sur fond #ffffff donne environ 4,54:1. AA texte normal réussit (≥4,5:1), AA texte grand réussit (≥3:1), AAA texte normal échoue (≥7:1), AAA texte grand réussit (≥4,5:1). Inversez les couleurs pour voir le ratio changer.',
  tool_wcag_contrast_checker_example_title: 'Exemple',
  tool_wcag_contrast_checker_fail: 'Échec',
  tool_wcag_contrast_checker_faq_a1:
    'AA texte normal exige au moins 4,5:1 ; AA texte grand (18 pt regular ou 14 pt gras) 3:1 ; AAA texte normal 7:1 ; AAA texte grand 4,5:1. Cette page affiche les quatre badges d\'un coup.',
  tool_wcag_contrast_checker_faq_a2:
    'Le texte grand tolère moins de contraste car il est plus lisible. WCAG le définit à ≥18 pt regular ou ≥14 pt gras. L\'aperçu montre une ligne grande et une normale pour comparer.',
  tool_wcag_contrast_checker_faq_a3:
    'Non. Le calcul se fait entièrement dans le navigateur — vos valeurs de couleur ne sont pas envoyées.',
  tool_wcag_contrast_checker_faq_a4:
    'Sous 4,5:1, l\'outil peut proposer un premier plan ou un fond plus clair ou plus foncé pour atteindre AA en texte normal. Ce sont des points de départ en mélangeant vers le blanc ou le noir, pas des palettes de marque finales.',
  tool_wcag_contrast_checker_faq_a5:
    'Utilisez cette page pour valider toute paire texte/fond. Pour une palette de marque avec tokens sémantiques, ouvrez l\'outil de tokens couleur ; vous pouvez aussi prélever des couleurs sur une photo avec l\'extracteur.',
  tool_wcag_contrast_checker_faq_q1: 'Quels sont les seuils de contraste WCAG ?',
  tool_wcag_contrast_checker_faq_q2: 'Qu\'est-ce que le texte grand ?',
  tool_wcag_contrast_checker_faq_q3: 'Mes couleurs quittent-elles le navigateur ?',
  tool_wcag_contrast_checker_faq_q4: 'Comment utiliser les suggestions de couleur ?',
  tool_wcag_contrast_checker_faq_q5: 'Quel lien avec les tokens de marque ?',
  tool_wcag_contrast_checker_fg_label: 'Premier plan',
  tool_wcag_contrast_checker_how_body:
    'Définissez texte et fond avec le sélecteur ou en tapant un HEX. La page convertit le sRGB en luminance relative, calcule le ratio et affiche Réussi/Échec pour AA et AAA (texte normal et grand). Inversez la paire, copiez un résumé ou appliquez une suggestion si le contraste est trop faible.',
  tool_wcag_contrast_checker_how_title: 'Fonctionnement',
  tool_wcag_contrast_checker_pass: 'Réussi',
  tool_wcag_contrast_checker_preview_label: 'Aperçu en direct',
  tool_wcag_contrast_checker_preview_large: 'Exemple de texte grand',
  tool_wcag_contrast_checker_preview_normal: 'Exemple de texte normal',
  tool_wcag_contrast_checker_ratio_label: 'Ratio de contraste',
  tool_wcag_contrast_checker_rules_body:
    'Le contraste WCAG repose sur la luminance relative — pas seulement la teinte. Consultez ces règles si le ratio surprend.',
  tool_wcag_contrast_checker_rules_item_1:
    'La luminance relative L vient des canaux sRGB après la courbe de linéarisation WCAG. Ratio = (Lclair + 0,05) / (Lfoncé + 0,05).',
  tool_wcag_contrast_checker_rules_item_2:
    'Seuils : AA texte normal 4,5:1, AA texte grand 3:1, AAA texte normal 7:1, AAA texte grand 4,5:1. Un seul ratio alimente les quatre badges.',
  tool_wcag_contrast_checker_rules_item_3:
    'Seuls les HEX sRGB opaques (#RGB ou #RRGGBB) sont pris en charge. HEX invalide → erreur ; premier plan et fond identiques → 1:1 et échec à tous les niveaux.',
  tool_wcag_contrast_checker_rules_item_4:
    'Confidentialité : les couleurs sont traitées localement dans cet onglet — rien n\'est envoyé au serveur.',
  tool_wcag_contrast_checker_rules_title: 'Règles à connaître',
  tool_wcag_contrast_checker_sample: 'Exemple',
  tool_wcag_contrast_checker_suggest_bg: 'Essayez l\'arrière-plan {hex} avec ce premier plan pour AA texte normal.',
  tool_wcag_contrast_checker_suggest_fg: 'Essayez le premier plan {hex} sur ce fond pour AA texte normal.',
  tool_wcag_contrast_checker_suggest_label: 'Suggestions',
  tool_wcag_contrast_checker_suggest_none: 'Répond déjà à AA en texte normal (4,5:1).',
  tool_wcag_contrast_checker_swap: 'Inverser',
  tool_wcag_contrast_checker_title: 'Vérificateur de contraste WCAG — ratio AA/AAA',
  tool_wcag_contrast_checker_usecase_1:
    'UI : validez corps de texte et libellés sur le fond de marque avant livraison.',
  tool_wcag_contrast_checker_usecase_2:
    'Boutons et chips : vérifiez blanc sur couleur ou l\'inverse pour AA normal ou grand.',
  tool_wcag_contrast_checker_usecase_3:
    'Mode sombre : inversez surfaces claires/foncées et confirmez que le texte secondaire reste à 4,5:1 ou 3:1 en grand.',
  tool_wcag_contrast_checker_usecases_title: 'Bonnes occasions',
};
export default fr;
