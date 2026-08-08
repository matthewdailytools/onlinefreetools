/**
 * i18n tool shard (how-to-calculate-percentage-change / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_percentage_change_abs_note: 'Absolute Änderung: {delta}',
  tool_percentage_change_article:
    'Relative prozentuale Änderung beantwortet, wie stark eine Kennzahl zur Basis bewegt. Alt- und Neuwert eingeben; Formel (neu − alt) / alt × 100. Für KPIs, kein ROI-Ersatz.',
  tool_percentage_change_calculate: 'Berechnen',
  tool_percentage_change_decrease: 'Abnahme',
  tool_percentage_change_description:
    'Berechnen Sie prozentuale Zu- oder Abnahme vom alten zum neuen Wert. Ablauf: beide Werte eingeben, (neu − alt) / alt × 100 anwenden, Vorzeichen lesen. Beispiel: 80 → 100 = +25 %. Für Umsatz MoM, DAU und Preise — nicht Prozentpunkte.',
  tool_percentage_change_example: 'Vollbeispiel: alt 80, neu 100 → Δ = 20 → (20 / 80) × 100 = +25 %. Rückgang: 100 → 80 = −20 %.',
  tool_percentage_change_example_title: 'Beispiel',
  tool_percentage_change_faq_a1: 'Änderung % = (neu − alt) / alt × 100. Positiv = Zunahme; negativ = Abnahme.',
  tool_percentage_change_faq_a2: 'Division durch null ist undefiniert. Ohne Basis keine relative Änderung.',
  tool_percentage_change_faq_a3: 'Nein. Von 10 % auf 12 % sind +2 Punkte, aber +20 % relativ.',
  tool_percentage_change_faq_a4:
    'ROI vergleicht Gewinn mit Investitionskosten. Prozentuale Änderung vergleicht jeden Neuwert mit einer alten Basis.',
  tool_percentage_change_faq_q1: 'Wie lautet die Formel?',
  tool_percentage_change_faq_q2: 'Warum darf der alte Wert nicht null sein?',
  tool_percentage_change_faq_q3: 'Dasselbe wie Prozentpunkte?',
  tool_percentage_change_faq_q4: 'Unterschied zu ROI?',
  tool_percentage_change_formula_body: 'Änderung % = (neu − alt) / alt × 100. Nenner mit vorzeichenbehaftetem Alt-Wert (nicht |alt|).',
  tool_percentage_change_formula_item_1: 'Δ = neu − alt',
  tool_percentage_change_formula_item_2: 'Prozent = (Δ / alt) × 100',
  tool_percentage_change_formula_item_3: 'alt = 0 → undefiniert (Fehler)',
  tool_percentage_change_formula_title: 'Formel der prozentualen Änderung',
  tool_percentage_change_how_body:
    'Basis (alt) und späteren Wert eingeben. Subtrahieren, durch alt teilen, ×100. Positiv = Plus; negativ = Minus. Bei alt = 0 ist relative Änderung undefiniert.',
  tool_percentage_change_how_title: 'So funktioniert’s',
  tool_percentage_change_increase: 'Zunahme',
  tool_percentage_change_new_label: 'Neuer Wert',
  tool_percentage_change_no_change: 'keine Änderung',
  tool_percentage_change_original_label: 'Alter Wert',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_result_invalid: 'Alter Wert muss eine Zahl ungleich null sein.',
  tool_percentage_change_result_label: 'Prozentuale Änderung',
  tool_percentage_change_title: 'Prozentuale Änderung berechnen — Von Alt- zu Neuwert',
  tool_percentage_change_usecase_1: 'Monatsumsatz: GMV 80 letzter Monat vs. 100 dieser → +25 %.',
  tool_percentage_change_usecase_2: 'Produkt: DAU von 50k auf 55k → +10 % relativ.',
  tool_percentage_change_usecase_3: 'Preis: von 40 auf 34 → −15 % (nicht „6 Prozentpunkte“).',
  tool_percentage_change_usecases_title: 'Business- & Datenfälle',
};
export default de;
