/**
 * i18n tool shard (how-to-calculate-percentage-change / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_percentage_change_abs_note: 'Variation absolue : {delta}',
  tool_percentage_change_article:
    'La variation relative répond « de combien la métrique a bougé vs sa base ? ». Saisissez l’ancienne et la nouvelle valeur ; formule (nouveau − ancien) / ancien × 100. Pour les KPI, pas un substitut au ROI.',
  tool_percentage_change_calculate: 'Calculer',
  tool_percentage_change_decrease: 'baisse',
  tool_percentage_change_description:
    'Calculez la hausse ou la baisse en pourcentage entre une ancienne et une nouvelle valeur. Processus : saisissez les deux, appliquez (nouveau − ancien) / ancien × 100, lisez le signe. Exemple : 80 → 100 = +25 %. Pensé pour CA MoM, DAU et prix — pas des points de pourcentage.',
  tool_percentage_change_example:
    'Exemple complet : ancien 80, nouveau 100 → Δ = 20 → (20 / 80) × 100 = +25 %. Baisse : 100 → 80 = −20 %.',
  tool_percentage_change_example_title: 'Exemple',
  tool_percentage_change_faq_a1: 'Variation % = (nouveau − ancien) / ancien × 100. Positif = hausse ; négatif = baisse.',
  tool_percentage_change_faq_a2: 'La division par zéro est indéfinie. Sans base, pas de variation relative.',
  tool_percentage_change_faq_a3: 'Non. De 10 % à 12 % = +2 points, mais +20 % en variation relative.',
  tool_percentage_change_faq_a4:
    'Le ROI compare le gain au coût d’investissement. La variation % compare toute nouvelle valeur à une base ancienne.',
  tool_percentage_change_faq_q1: 'Quelle est la formule de variation en % ?',
  tool_percentage_change_faq_q2: 'Pourquoi l’ancienne valeur ne peut-elle pas être zéro ?',
  tool_percentage_change_faq_q3: 'Est-ce la même chose que les points de pourcentage ?',
  tool_percentage_change_faq_q4: 'Différence avec le ROI ?',
  tool_percentage_change_formula_body:
    'Variation % = (nouveau − ancien) / ancien × 100. Le dénominateur utilise l’ancien signé (pas |ancien|).',
  tool_percentage_change_formula_item_1: 'Δ = nouveau − ancien',
  tool_percentage_change_formula_item_2: 'pourcentage = (Δ / ancien) × 100',
  tool_percentage_change_formula_item_3: 'ancien = 0 → indéfini (erreur)',
  tool_percentage_change_formula_title: 'Formule de variation en pourcentage',
  tool_percentage_change_how_body:
    'Saisissez la base (ancien) et la valeur suivante. On soustrait, on divise par l’ancien, on multiplie par 100. Positif = hausse ; négatif = baisse. Si ancien = 0, la variation relative est indéfinie.',
  tool_percentage_change_how_title: 'Comment ça marche',
  tool_percentage_change_increase: 'hausse',
  tool_percentage_change_new_label: 'Nouvelle valeur',
  tool_percentage_change_no_change: 'aucun changement',
  tool_percentage_change_original_label: 'Ancienne valeur',
  tool_percentage_change_ref_wiki_label: 'Wikipédia — Relative change and difference',
  tool_percentage_change_result_invalid: 'L’ancienne valeur doit être un nombre non nul.',
  tool_percentage_change_result_label: 'Variation en pourcentage',
  tool_percentage_change_title: 'Calculateur de variation en % — De l’ancienne à la nouvelle valeur',
  tool_percentage_change_usecase_1: 'CA mensuel : GMV 80 le mois dernier vs 100 ce mois → +25 %.',
  tool_percentage_change_usecase_2: 'Produit : DAU de 50k à 55k → +10 % relatif.',
  tool_percentage_change_usecase_3: 'Prix : de 40 à 34 → −15 % (pas « 6 points de pourcentage »).',
  tool_percentage_change_usecases_title: 'Usages business & data',
};
export default fr;
