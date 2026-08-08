/**
 * i18n tool shard (square-feet / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_squarefeet_article:
    'Estimez une surface rectangulaire à partir de la longueur et de la largeur, puis convertissez entre pieds carrés et mètres carrés. Pensé pour les annonces, sols et peinture — pas une estimation de prix, ni une distinction surface utile / construite.',
  tool_squarefeet_calculate: 'Convertir la surface',
  tool_squarefeet_description:
    'Convertissez la surface d’une pièce entre pieds carrés et mètres carrés pour annonces et rénovation. Processus : choisissez ft/m/in, saisissez longueur × largeur, calculez l’aire, puis affichez ft² et m² avec le facteur NIST 1 ft² = 0.09290304 m². Exemple : appart. 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_example:
    'Annonce : appart. 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Pièce : 10 ft × 12 ft = 120 sq ft ≈ 11,15 m².',
  tool_squarefeet_example_title: 'Exemple',
  tool_squarefeet_faq_a1: 'Exactement 1 ft² = 0.09290304 m² (repère SI / NIST). Affichage à deux décimales.',
  tool_squarefeet_faq_a2: 'Non. Seule la surface plane d’un rectangle est convertie.',
  tool_squarefeet_faq_a3: 'Non. La conversion d’aire n’est pas une estimation ni un modèle de prix.',
  tool_squarefeet_faq_a4: 'Découpez en rectangles, convertissez chacun, puis additionnez.',
  tool_squarefeet_faq_q1: 'Quel facteur ft² ↔ m² utilisez-vous ?',
  tool_squarefeet_faq_q2: 'Distinguez-vous surface utile et construite ?',
  tool_squarefeet_faq_q3: 'Peut-on estimer le prix d’un bien ?',
  tool_squarefeet_faq_q4: 'Et les pièces en L ?',
  tool_squarefeet_formula_body:
    'Surface (ft²) = longueur (ft) × largeur (ft). En mètres : ft² = (L×W) ÷ 0.09290304. En pouces : divisez chaque côté par 12. Facteur : 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Entrée en pieds : surface_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Entrée en mètres : surface_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Entrée en pouces : surface_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = surface_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_formula_title: 'Formule de surface et facteur de conversion',
  tool_squarefeet_how_body:
    'Choisissez pieds, mètres ou pouces. Multipliez longueur × largeur après conversion en pieds, puis passez en m² avec le facteur SI. Les valeurs vides ou négatives sont refusées.',
  tool_squarefeet_how_title: 'Comment ça marche',
  tool_squarefeet_invalid_input: 'Saisissez une longueur et une largeur positives.',
  tool_squarefeet_length_label: 'Longueur',
  tool_squarefeet_length_placeholder: 'Saisissez la longueur',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Guide du Système international d’unités (SI)',
  tool_squarefeet_result_note: 'Arrondi à deux décimales. Facteur : 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_title: 'Pieds carrés en m² — Conversion pour logement et rénovation',
  tool_squarefeet_unit_group_label: 'Unités d’entrée',
  tool_squarefeet_usage:
    'Choisissez l’unité, saisissez longueur et largeur pour obtenir des pieds carrés et l’équivalent en m².',
  tool_squarefeet_usage_title: 'Utilisation',
  tool_squarefeet_usecase_1: 'Comparer une annonce US en sq ft avec des pubs locales en m².',
  tool_squarefeet_usecase_2: 'Estimer sol ou moquette d’une pièce rectangulaire avant commande.',
  tool_squarefeet_usecase_3: 'Contrôle rapide peinture/rénovation quand le plan mélange les unités.',
  tool_squarefeet_usecases_title: 'Cas concrets',
  tool_squarefeet_width_label: 'Largeur',
  tool_squarefeet_width_placeholder: 'Saisissez la largeur',
};
export default fr;
