/**
 * i18n tool shard (how-to-calculate-marginal-revenue / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_marginal_revenue_article:
    'Grenzerlös ist die Änderung des Gesamterlöses bei Mengenänderung. Dieser Rechner zeigt die diskrete Ableitung zwischen zwei Punkten.',
  tool_marginal_revenue_calculate: 'MR berechnen',
  tool_marginal_revenue_description:
    'Berechnen Sie den Grenzerlös mit MR = ΔTR / ΔQ. Prozess: Menge und Gesamterlös an zwei Punkten eingeben, ΔTR und ΔQ bilden, dann teilen. Beispiel: Menge 10→11, Erlös 1000→1080 → MR = 80. Nur Bildungszweck — keine Preisberatung.',
  tool_marginal_revenue_detail_tpl: 'ΔTR = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_disclaimer:
    'Dieser Rechner dient dem Lernen mikroökonomischer Konzepte. Keine Geschäfts-, Preis- oder Anlageberatung.',
  tool_marginal_revenue_example: 'Beispiel: Q₁ = 10, TR₁ = 1000; Q₂ = 11, TR₂ = 1080 → ΔTR = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_example_title: 'Beispiel',
  tool_marginal_revenue_faq_a1: 'MR ist undefiniert, wenn sich die Menge nicht ändert. Wählen Sie zwei unterschiedliche Mengen.',
  tool_marginal_revenue_faq_a2:
    'MR = ΔTR / ΔQ mit ΔTR = TR₂ − TR₁ und ΔQ = Q₂ − Q₁. Diskrete Ableitung, keine kontinuierliche Ableitung.',
  tool_marginal_revenue_faq_a3:
    'Durchschnittserlös ist TR / Q auf einem Niveau. Grenzerlös ist die TR-Änderung bei Mengenänderung; sie fallen nur in Sonderfällen zusammen.',
  tool_marginal_revenue_faq_a4:
    'Nein. Dieses Tool gibt keine Preis- oder Produktionsberatung; Grenzkosten und andere Restriktionen zählen ebenso.',
  tool_marginal_revenue_faq_q1: 'Was, wenn ΔQ null ist?',
  tool_marginal_revenue_faq_q2: 'Wie wird der Grenzerlös hier abgeleitet?',
  tool_marginal_revenue_faq_q3: 'Unterschied zum Durchschnittserlös?',
  tool_marginal_revenue_faq_q4: 'Positiver MR heißt mehr produzieren?',
  tool_marginal_revenue_formula_body:
    'Per Definition misst der Grenzerlös, wie sich der Gesamterlös ändert, wenn sich die Menge ändert. Mit zwei Punkten:',
  tool_marginal_revenue_formula_item_1: 'ΔTR = TR₂ − TR₁ (Änderung des Gesamterlöses)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (Mengenänderung)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔTR / ΔQ wenn ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Ein diskreter Schritt approximiert den mittleren MR im Intervall; kontinuierliche Modelle nutzen dTR/dQ. Negativer MR heißt: Erlös sinkt bei steigender Menge.',
  tool_marginal_revenue_formula_title: 'Formelableitung',
  tool_marginal_revenue_how_body:
    'Geben Sie Menge und Gesamterlös für Stufe 1 und Stufe 2 ein. Es wird ΔTR = TR2 − TR1, ΔQ = Q2 − Q1 und MR = ΔTR / ΔQ im Browser berechnet.',
  tool_marginal_revenue_how_title: 'So funktioniert es',
  tool_marginal_revenue_q1_label: 'Menge (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'z. B. 10',
  tool_marginal_revenue_q2_label: 'Menge (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'z. B. 11',
  tool_marginal_revenue_quantity_label: 'Menge',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Marginal Revenue (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principles of Microeconomics (Wettbewerb)',
  tool_marginal_revenue_references: 'Investopedia-Eintrag zu Marginal Revenue; einführende Behandlung von MR = ΔTR/ΔQ (z. B. OpenStax).',
  tool_marginal_revenue_result_label: 'Grenzerlös',
  tool_marginal_revenue_revenue_label: 'Gesamterlös',
  tool_marginal_revenue_title: 'Grenzerlös-Rechner — Formel ΔTR / ΔQ',
  tool_marginal_revenue_tr1_label: 'Gesamterlös (TR₁)',
  tool_marginal_revenue_tr1_placeholder: 'z. B. 1000',
  tool_marginal_revenue_tr2_label: 'Gesamterlös (TR₂)',
  tool_marginal_revenue_tr2_placeholder: 'z. B. 1080',
  tool_marginal_revenue_usecase_1: 'Hausaufgabe: zweistufige Mengen-/Erlöstabelle prüfen.',
  tool_marginal_revenue_usecase_2: 'Grobe Schätzung: Erlöswirkung bei einer zusätzlichen Einheit.',
  tool_marginal_revenue_usecase_3: 'Grenzerlös und Durchschnittserlös in der Einführungsmikroökonomie vergleichen.',
  tool_marginal_revenue_usecases_title: 'Wann sinnvoll',
  tool_marginal_revenue_zero_dq: 'ΔQ ist 0 — die Menge muss sich zwischen den Punkten ändern.',
};
export default de;
