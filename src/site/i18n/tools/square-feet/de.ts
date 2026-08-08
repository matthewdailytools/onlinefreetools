/**
 * i18n tool shard (square-feet / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_squarefeet_article:
    'Rechteckfläche aus Länge und Breite schätzen und zwischen Quadratfuß und Quadratmetern umrechnen. Für Inserate, Boden und Farbe — keine Immobilienbewertung und keine Trennung von Wohn-/Bruttofläche.',
  tool_squarefeet_calculate: 'Fläche umrechnen',
  tool_squarefeet_description:
    'Fläche zwischen Quadratfuß und Quadratmetern für Inserate und Renovierung umrechnen. Ablauf: ft/m/in wählen, Länge × Breite eingeben, Fläche berechnen, dann ft² und m² mit NIST-Faktor 1 ft² = 0.09290304 m² anzeigen. Beispiel: Wohnung 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_example:
    'Inserat: Wohnung 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Raum: 10 ft × 12 ft = 120 sq ft ≈ 11,15 m².',
  tool_squarefeet_example_title: 'Beispiel',
  tool_squarefeet_faq_a1: 'Genau 1 ft² = 0.09290304 m² (SI / NIST). Anzeige mit zwei Dezimalstellen.',
  tool_squarefeet_faq_a2: 'Nein. Nur die ebene Rechteckfläche wird umgerechnet.',
  tool_squarefeet_faq_a3: 'Nein. Flächenumrechnung ist keine Bewertung und kein Preismodell.',
  tool_squarefeet_faq_a4: 'In Rechtecke teilen, je umrechnen und addieren.',
  tool_squarefeet_faq_q1: 'Welchen Faktor ft² ↔ m² nutzt ihr?',
  tool_squarefeet_faq_q2: 'Unterscheidet ihr Wohn- und Bruttofläche?',
  tool_squarefeet_faq_q3: 'Kann man damit Immobilienpreise schätzen?',
  tool_squarefeet_faq_q4: 'Und L-förmige Räume?',
  tool_squarefeet_formula_body:
    'Fläche (ft²) = Länge (ft) × Breite (ft). In Metern: ft² = (L×W) ÷ 0.09290304. In Zoll: jede Seite ÷ 12. Faktor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Eingabe Fuß: Fläche_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Eingabe Meter: Fläche_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Eingabe Zoll: Fläche_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = Fläche_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_formula_title: 'Flächenformel und Umrechnungsfaktor',
  tool_squarefeet_how_body:
    'Wählen Sie Fuß, Meter oder Zoll. Multiplizieren Sie Länge × Breite nach Umrechnung in Fuß und wandeln Sie mit dem SI-Faktor in m² um. Leere oder negative Werte werden abgelehnt.',
  tool_squarefeet_how_title: 'So funktioniert’s',
  tool_squarefeet_invalid_input: 'Positive Länge und Breite eingeben.',
  tool_squarefeet_length_label: 'Länge',
  tool_squarefeet_length_placeholder: 'Länge eingeben',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Leitfaden zum Internationalen Einheitensystem (SI)',
  tool_squarefeet_result_note: 'Auf zwei Dezimalstellen gerundet. Faktor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_title: 'Quadratfuß in m² umrechnen — Für Wohnung & Renovierung',
  tool_squarefeet_unit_group_label: 'Eingabeeinheiten',
  tool_squarefeet_usage: 'Einheit wählen, Länge und Breite eingeben — Ergebnis in sq ft plus m²-Äquivalent.',
  tool_squarefeet_usage_title: 'Nutzung',
  tool_squarefeet_usecase_1: 'US-Inserat in sq ft mit lokalen m²-Anzeigen vergleichen.',
  tool_squarefeet_usecase_2: 'Boden/Teppich für einen Rechteckraum vor der Bestellung schätzen.',
  tool_squarefeet_usecase_3: 'Grobe Farb-/Renovierungsmenge bei gemischten Einheiten im Plan.',
  tool_squarefeet_usecases_title: 'Wann es hilft',
  tool_squarefeet_width_label: 'Breite',
  tool_squarefeet_width_placeholder: 'Breite eingeben',
};
export default de;
