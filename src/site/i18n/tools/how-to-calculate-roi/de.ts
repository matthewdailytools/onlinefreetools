/**
 * i18n tool shard (how-to-calculate-roi / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_roi_article:
    'Einfacher ROI stellt Nettogewinn zum Kostenbetrag in Prozent dar. Geeignet für grobe Kampagnen-/Projekt-Recaps; kein Mehrperioden-IRR/NPV.',
  tool_roi_calculate: 'Berechnen',
  tool_roi_description:
    'Berechnen Sie den einfachen ROI mit (Ertrag − Kosten) / Kosten × 100 % oder (Endwert − Anfang) / Anfang × 100 %. Prozess: Kosten und Endwert (oder Nettogewinn) eingeben und Annahmen zu Steuern, Gebühren und Zeit prüfen. Beispiel: Kosten 1000, Ende 1300 → ROI 30 %. Nur Bildungsillustration — keine Anlageberatung.',
  tool_roi_disclaimer:
    'ROI-Ergebnisse sind nur Bildungsillustrationen und keine Anlage-, Steuer- oder Finanzberatung. Vergangene oder hypothetische Renditen garantieren keine zukünftigen Ergebnisse.',
  tool_roi_example: 'Beispiel: Kosten 1000, Endwert 1300 → Gewinn 300 → ROI = 300 / 1000 × 100 % = 30 %.',
  tool_roi_example_title: 'Beispiel',
  tool_roi_faq_a1: 'Nein. Ergebnisse sind nur Bildungsillustrationen, keine Anlage-, Steuer- oder Finanzberatung.',
  tool_roi_faq_a2:
    'ROI = (Ende − Anfang) / Anfang × 100 %, oder Nettogewinn / Kosten × 100 %, wenn Sie den Gewinn eingeben.',
  tool_roi_faq_a3:
    'Steuern und Gebühren werden nicht geschätzt — rechnen Sie sie selbst ein. Einfacher ROI annualisiert auch nicht.',
  tool_roi_faq_a4: 'ROI ist undefiniert (Division durch null). Geben Sie positive Kosten ein.',
  tool_roi_faq_q1: 'Ist das Anlageberatung?',
  tool_roi_faq_q2: 'Welche Formel nutzt der Rechner?',
  tool_roi_faq_q3: 'Was ist mit Steuern, Gebühren und Zeit?',
  tool_roi_faq_q4: 'Was bei Kosten null?',
  tool_roi_final_label: 'Endwert',
  tool_roi_final_placeholder: 'z. B. 1300',
  tool_roi_formula_body:
    'ROI = (Endwert − Anfangsinvestition) / Anfangsinvestition × 100 %, oder Nettogewinn / Kosten × 100 %. Beachten Sie:',
  tool_roi_formula_item_1: 'Steuern: werden nicht geschätzt — ggf. Nachsteuerwerte selbst eintragen.',
  tool_roi_formula_item_2: 'Zeit: einfacher ROI ignoriert die Haltedauer; keine annualisierte Rendite.',
  tool_roi_formula_item_3: 'Gebühren: Provisionen und Plattformkosten selbst in Kosten oder Endwert einrechnen.',
  tool_roi_formula_item_4: 'Mehrperioden-Cashflows und IRR/NPV liegen außerhalb dieses Einperioden-Prozentsatzes.',
  tool_roi_formula_title: 'Formel und Annahmen',
  tool_roi_gain_label: 'Nettogewinn (optional)',
  tool_roi_gain_placeholder: 'Falls bekannt, ersetzt Ende − Anfang',
  tool_roi_how_body:
    'Geben Sie Kosten und Endwert oder einen bekannten Nettogewinn ein. ROI = Netto / Kosten × 100 %. Ohne Gewinn: Netto = Ende − Anfang. Kosten 0 werden abgelehnt.',
  tool_roi_how_title: 'So funktioniert es',
  tool_roi_initial_label: 'Anfangsinvestition (Kosten)',
  tool_roi_initial_placeholder: 'z. B. 1000',
  tool_roi_interpret_negative: 'Negativer ROI (Verlust relativ zu den Kosten) — nur Bildungsillustration.',
  tool_roi_interpret_positive: 'Positiver ROI (Gewinn relativ zu den Kosten) — nur Bildungsillustration.',
  tool_roi_interpret_zero: 'Null-ROI — weder Gewinn noch Verlust bei diesen Eingaben.',
  tool_roi_ref_guide_label: 'Investopedia — Leitfaden zur ROI-Berechnung',
  tool_roi_ref_investopedia_label: 'Investopedia — Return on Investment (ROI)',
  tool_roi_references: 'Investopedia-Definitionen und Leitfäden zu ROI; einfacher ROI = Nettogewinn / Kosten.',
  tool_roi_result_label: 'ROI',
  tool_roi_title: 'ROI-Rechner — Return on Investment berechnen',
  tool_roi_usecase_1: 'Marketing: grober Kampagnen-ROI bei bekannten Ausgaben und attribuierter Einnahme.',
  tool_roi_usecase_2: 'Unterricht: Basis-ROI-Prozentsatz mit festen Zahlen üben.',
  tool_roi_usecase_3: 'Projektabschluss: eine Initiative als Kosten/Gewinn-Paar zusammenfassen (nur Schätzung).',
  tool_roi_usecases_title: 'Wann sinnvoll',
  tool_roi_zero_cost: 'Die Anfangsinvestition muss größer als null sein.',
};
export default de;
