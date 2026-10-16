/**
 * i18n 工具分片（how-to-calculate-markup / de）。
 * 加价率：从成本/售价算百分比，或反推售价/成本；并排显示毛利率以便对照。
 */
import type { SiteLangDict } from '../../../types';

/** 德语 markup 计算器文案分片（与 en 键一致；占位符 {cost}{sell}{dollar}{pct}{margin} 勿改）。 */
const de: SiteLangDict = {
	tool_markup_title: "Markup-Rechner — Aufschlag in %, Verkaufspreis oder Kosten",
	tool_markup_description: "Berechnen Sie den Aufschlag in Prozent aus Kosten und Verkaufspreis, oder ermitteln Sie Preis oder Kosten bei gegebenem Aufschlag. Beispiel: Kosten 50, Verkauf 80 → Aufschlag 60 % (Marge 37,5 %). Aufschlag teilt durch Kosten; Marge durch Umsatz. Bildungsrechnung für Handel — keine Geschäftsberatung.",
	tool_markup_article: "Aufschlag in %, Verkaufspreis oder Kosten ermitteln und die passende Bruttomarge anzeigen, damit Aufschlag und Marge nicht verwechselt werden.",
	tool_markup_desc: "Aufschlag in % aus Kosten und Preis berechnen oder Verkauf/Kosten rückwärts lösen. Zeigt die Marge zum Vergleich.",

	tool_markup_mode_label: "Was soll berechnet werden?",
	tool_markup_mode_pct: "Aufschlag in %",
	tool_markup_mode_sell: "Verkaufspreis",
	tool_markup_mode_cost: "Kosten",
	tool_markup_hint: "Wählen Sie die gesuchte Größe. Aufschlag nutzt Kosten im Nenner; Marge den Verkaufspreis. Dezimalkomma ist möglich. Nur zu Lernzwecken — kein Preisrat.",
	tool_markup_cost_label: "Kosten",
	tool_markup_cost_ph: "z. B. 50",
	tool_markup_sell_label: "Verkaufspreis",
	tool_markup_sell_ph: "z. B. 80",
	tool_markup_mk_label: "Aufschlag in %",
	tool_markup_mk_ph: "z. B. 60",
	tool_markup_calculate: "Berechnen",
	tool_markup_sample: "Beispiel laden",
	tool_markup_clear: "Leeren",
	tool_markup_markupOut_label: "Aufschlag in %",
	tool_markup_sellOut_label: "Verkaufspreis",
	tool_markup_costOut_label: "Kosten",
	tool_markup_profitOut_label: "Aufschlag in Euro",
	tool_markup_marginOut_label: "Bruttomarge in %",
	tool_markup_steps_title: "Rechenschritte",
	tool_markup_step_pct_tpl: "Aufschlag in % = (Verkauf − Kosten) ÷ Kosten × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct} %.",
	tool_markup_step_sell_tpl: "Verkaufspreis = Kosten × (1 + Aufschlag %/100) = {cost} × (1 + {pct}/100) = {sell}.",
	tool_markup_step_cost_tpl: "Kosten = Verkauf ÷ (1 + Aufschlag %/100) = {sell} ÷ (1 + {pct}/100) = {cost}.",
	tool_markup_step_margin_tpl: "Bruttomarge in % = (Verkauf − Kosten) ÷ Verkauf × 100 = {dollar} ÷ {sell} × 100 = {margin} %.",
	tool_markup_result_note: "Aufschlag teilt durch Kosten; Marge durch Verkaufspreis. Gleicher Euro-Aufschlag, andere Prozentsätze. Nur Bildungszweck — kein Steuer-, Preis- oder Anlagerat.",
	tool_markup_err_generic: "Geben Sie positive Kosten und einen gültigen Verkaufspreis oder Aufschlag in % für den gewählten Modus ein (z. B. Kosten 50 und Verkauf 80).",

	tool_markup_how_title: "So nutzen Sie den Markup-Rechner",
	tool_markup_how_body: "Wählen Sie, ob Sie Aufschlag in %, Verkaufspreis oder Kosten brauchen. Füllen Sie die sichtbaren Felder aus und klicken Sie auf Berechnen. Beispiel laden wechselt Kosten/Verkauf → %, Kosten/% → Verkauf und Verkauf/% → Kosten.",
	tool_markup_how_item_1: "Unter „Was soll berechnet werden?“ Aufschlag in %, Verkaufspreis oder Kosten wählen.",
	tool_markup_how_item_2: "Bekannte Werte eintragen (Kosten und Verkauf, oder Kosten und Aufschlag %, oder Verkauf und Aufschlag %).",
	tool_markup_how_item_3: "Auf Berechnen klicken — fehlender Wert, Euro-Aufschlag und passende Bruttomarge in % erscheinen.",
	tool_markup_how_item_4: "Beispiel laden: 50/80 → 60 %, Kosten 40 bei 25 % → Verkauf 50, Verkauf 120 bei 50 % → Kosten 80.",

	tool_markup_why_choose_title: "Was dieser Markup-Rechner bietet",
	tool_markup_why_choose_item_1: "Drei Lösungsmodi: Aufschlag % aus Kosten und Preis, Preis aus Kosten und %, oder Kosten aus Preis und %.",
	tool_markup_why_choose_item_2: "Euro-Aufschlag und Bruttomarge % neben dem Aufschlag, damit die Begriffe getrennt bleiben.",
	tool_markup_why_choose_item_3: "Rechenschritte mit Ihren Zahlen in (P−C)/C und (P−C)/P.",
	tool_markup_why_choose_item_4: "Felder blenden sich je nach Modus aus, wenn sie nicht gebraucht werden.",
	tool_markup_why_choose_item_5: "Klare Bildungs-Hinweise — kein Geschäfts-, Steuer- oder Anlagerat.",

	tool_markup_formula_title: "Formeln für Aufschlag",
	tool_markup_formula_body: "Aufschlag misst den Zuschlag bezogen auf die Kosten. Marge misst denselben Euro-Gewinn bezogen auf den Verkaufspreis.",
	tool_markup_formula_item_1: "Aufschlag in % = (Verkaufspreis − Kosten) ÷ Kosten × 100. Beispiel: (80 − 50) ÷ 50 × 100 = 60 %.",
	tool_markup_formula_item_2: "Verkaufspreis = Kosten × (1 + Aufschlag %/100). Beispiel: 40 × 1,25 = 50 bei 25 % Aufschlag.",
	tool_markup_formula_item_3: "Kosten = Verkaufspreis ÷ (1 + Aufschlag %/100). Beispiel: 120 ÷ 1,5 = 80 bei 50 % Aufschlag.",
	tool_markup_formula_item_4: "Bruttomarge in % = (Verkaufspreis − Kosten) ÷ Verkaufspreis × 100. Gleiches 50/80-Beispiel → 37,5 %.",
	tool_markup_formula_item_5: "100 % Aufschlag bedeutet Preis = 2 × Kosten (Marge 50 %). Über 100 % ist möglich, wenn der Preis > 2 × Kosten ist.",

	tool_markup_example_title: "Durchgerechnete Beispiele",
	tool_markup_example: "Beispiel laden startet mit Kosten 50 und Verkauf 80 → Aufschlag 60 %, Euro-Aufschlag 30, Marge 37,5 %. Danach: Kosten 40 bei 25 % → Verkauf 50. Dann Verkauf 120 bei 50 % → Kosten 80. Break-even (100/100) zeigt 0 % Aufschlag und 0 % Marge.",

	tool_markup_usecases_title: "Wann ein Markup-Rechner hilft",
	tool_markup_usecase_1: "Retail-Übungen: Kosten und Listenpreis in Aufschlag % mit sichtbaren Schritten umrechnen.",
	tool_markup_usecase_2: "Preislisten prüfen: bei Ziel-Aufschlag % den Verkaufspreis aus den Kosten finden.",
	tool_markup_usecase_3: "Kosten rückwärts: aus bekanntem Preis und Aufschlagspolitik die impliziten Kosten ableiten.",
	tool_markup_usecase_4: "Begriffe klären: zeigen, warum 60 % Aufschlag nicht 60 % Marge bedeutet.",

	tool_markup_faq_q1: "Wie berechnet man den Aufschlag in Prozent?",
	tool_markup_faq_a1: "Verkaufspreis minus Kosten, durch Kosten teilen, mit 100 multiplizieren. Beispiel: Kosten 50, Verkauf 80 → (80−50)/50 × 100 = 60 %.",
	tool_markup_faq_q2: "Was ist der Unterschied zwischen Aufschlag und Marge?",
	tool_markup_faq_a2: "Aufschlag teilt den Euro-Gewinn durch Kosten; Marge durch Verkaufspreis. Dasselbe 50/80-Geschäft: 60 % Aufschlag und 37,5 % Marge.",
	tool_markup_faq_q3: "Wie finde ich den Verkaufspreis aus Kosten und Aufschlag %?",
	tool_markup_faq_a3: "Verkauf = Kosten × (1 + Aufschlag %/100). Bei Kosten 40 und 25 % Aufschlag: Verkauf = 40 × 1,25 = 50.",
	tool_markup_faq_q4: "Kann der Aufschlag über 100 % liegen?",
	tool_markup_faq_a4: "Ja. Liegt der Preis über dem Doppelten der Kosten, übersteigt der Aufschlag 100 %. Beispiel: Kosten 50, Verkauf 150 → Aufschlag 200 %.",
	tool_markup_faq_q5: "Was, wenn ich unter Kosten verkaufe?",
	tool_markup_faq_a5: "Aufschlag und Marge werden negativ — Verlust pro Stück vor weiteren Kosten.",
	tool_markup_faq_q6: "Sind Steuern oder Rabatte enthalten?",
	tool_markup_faq_a6: "Nein. Tragen Sie die Kosten- und Preiswerte ein, die Sie nach eigenen Steuer- oder Rabattannahmen vergleichen möchten.",
	tool_markup_faq_q7: "Ist das Finanzberatung?",
	tool_markup_faq_a7: "Nein. Nur bildungsorientierte Handelsarithmetik — kein Steuer-, Preisstrategie- oder Anlagerat.",

	tool_markup_disclaimer: "Nur bildungsorientierte Markup-Darstellung — kein Finanz-, Steuer-, Preis- oder Anlagerat.",
	tool_markup_references: "Investopedia und Standard-Lehrbuchformeln zu Bildungszwecken.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Gewinnmarge",
};

export default de;
