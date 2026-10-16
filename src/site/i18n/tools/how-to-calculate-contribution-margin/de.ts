/**
 * i18n 工具分片（how-to-calculate-contribution-margin / de）。
 * 检索向：Deckungsbeitrag / Stück-DB / DB-Quote / Break-even-Menge。
 * YMYL：仅教材算术，非经营或投资建议。占位符 {price}{vc}{cm}{ratio}{units}{total}{fixed}{be} 勿改。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_contribution_margin_title: "Deckungsbeitrag-Rechner — Stück-DB, Quote und Break-even-Menge",
	tool_contribution_margin_description: "Berechnen Sie Stückdeckungsbeitrag und Deckungsbeitragsquote aus Verkaufspreis und variablen Stückkosten. Beispiel: Preis 50, variable Kosten 30 → DB 20 (40 %). Optional Menge für Gesamt-DB; optional Fixkosten für Break-even-Menge. Nur zur Bildung — keine Geschäfts- oder Anlageberatung.",
	tool_contribution_margin_article: "Stückdeckungsbeitrag und Quote ermitteln, optional Gesamtdeckungsbeitrag aus der Menge und Break-even-Menge bei eingetragenen Fixkosten.",
	tool_contribution_margin_desc: "Stück-DB und Quote aus Preis und VK. Optional Gesamt-DB und Break-even-Menge.",

	tool_contribution_margin_safety_banner: "Nur Bildungszweck. Diese Seite rechnet den Deckungsbeitrag wie im Lehrbuch. Keine Geschäfts-, Steuer-, Buchhaltungs- oder Anlageberatung.",
	tool_contribution_margin_hint: "Der Preis muss größer als null sein. Variable Kosten ≥ 0 und nicht höher als der Preis. Menge und Fixkosten sind optional.",
	tool_contribution_margin_price_label: "Verkaufspreis je Stück",
	tool_contribution_margin_price_ph: "z. B. 50",
	tool_contribution_margin_vc_label: "Variable Kosten je Stück",
	tool_contribution_margin_vc_ph: "z. B. 30",
	tool_contribution_margin_units_label: "Menge (optional)",
	tool_contribution_margin_units_ph: "z. B. 100",
	tool_contribution_margin_fixed_label: "Fixkosten (optional)",
	tool_contribution_margin_fixed_ph: "z. B. 10000",
	tool_contribution_margin_calculate: "Berechnen",
	tool_contribution_margin_sample: "Beispiel laden",
	tool_contribution_margin_clear: "Leeren",
	tool_contribution_margin_cmOut_label: "Deckungsbeitrag (je Stück)",
	tool_contribution_margin_cmrOut_label: "DB-Quote",
	tool_contribution_margin_totalOut_label: "Gesamtdeckungsbeitrag",
	tool_contribution_margin_beOut_label: "Break-even-Menge",
	tool_contribution_margin_steps_title: "Rechenweg",
	tool_contribution_margin_step_cm_tpl: "DB = Preis − VK = {price} − {vc} = {cm}.",
	tool_contribution_margin_step_ratio_tpl: "DB-Quote = DB ÷ Preis × 100 = {cm} ÷ {price} × 100 = {ratio}%.",
	tool_contribution_margin_step_total_tpl: "Gesamt-DB = Stück-DB × Menge = {cm} × {units} = {total}.",
	tool_contribution_margin_step_be_tpl: "Break-even-Menge = Fixkosten ÷ DB = {fixed} ÷ {cm} = {be}.",
	tool_contribution_margin_result_note: "Der DB deckt nach den variablen Kosten zuerst die Fixkosten und danach den Gewinn. Mehrprodukt-Mix und Steuern sind nicht modelliert. Nur Bildung — keine Geschäftsberatung.",
	tool_contribution_margin_err_generic: "Preis > 0 und variable Kosten ≥ 0, nicht über dem Preis (z. B. 50 und 30). Optionale Menge muss > 0 sein; optionale Fixkosten ≥ 0.",

	tool_contribution_margin_how_title: "So nutzen Sie den Deckungsbeitrag-Rechner",
	tool_contribution_margin_how_body: "Verkaufspreis und variable Stückkosten eintragen. Optional Menge für den Gesamt-DB und Fixkosten für die Break-even-Menge. „Beispiel laden“ wechselt Stück-only, mit Menge, mit Fixkosten und den kombinierten Fall.",
	tool_contribution_margin_how_item_1: "Verkaufspreis je Stück und variable Kosten je Stück eingeben.",
	tool_contribution_margin_how_item_2: "Optional: Menge eintragen, um den Gesamtdeckungsbeitrag zu sehen.",
	tool_contribution_margin_how_item_3: "Optional: Fixkosten eintragen für die Break-even-Menge (braucht DB > 0).",
	tool_contribution_margin_how_item_4: "Auf Berechnen klicken — DB, Quote und Rechenweg erscheinen.",

	tool_contribution_margin_why_choose_title: "Was dieser Deckungsbeitrag-Rechner liefert",
	tool_contribution_margin_why_choose_item_1: "Stück-DB und DB-Quote direkt aus Preis und variablen Kosten.",
	tool_contribution_margin_why_choose_item_2: "Optionaler Gesamt-DB, sobald Sie eine Menge eintragen.",
	tool_contribution_margin_why_choose_item_3: "Optionale Break-even-Menge bei eingetragenen Fixkosten.",
	tool_contribution_margin_why_choose_item_4: "Rechenweg-Zeilen, die Ihre Zahlen in die Formeln einsetzen.",
	tool_contribution_margin_why_choose_item_5: "Klare YMYL-Grenze: nur Lehrbuch-Arithmetik — keine Geschäftsberatung.",

	tool_contribution_margin_formula_title: "Formeln zum Deckungsbeitrag",
	tool_contribution_margin_formula_body: "Der Deckungsbeitrag ist, was vom Preis nach den variablen Kosten übrig bleibt — der Betrag zur Deckung von Fixkosten und Gewinn.",
	tool_contribution_margin_formula_item_1: "DB = Preis − VK. Beispiel: 50 − 30 = 20.",
	tool_contribution_margin_formula_item_2: "DB-Quote = DB ÷ Preis. Beispiel: 20 ÷ 50 = 40%.",
	tool_contribution_margin_formula_item_3: "Gesamt-DB = Stück-DB × Menge.",
	tool_contribution_margin_formula_item_4: "Break-even-Menge = Fixkosten ÷ Stück-DB (wenn DB > 0).",
	tool_contribution_margin_formula_item_5: "Bruttomarge nutzt COGS; DB nur variable Kosten — die Werte können abweichen.",

	tool_contribution_margin_example_title: "Durchgerechnete Beispiele",
	tool_contribution_margin_example: "Beispiel laden startet mit Preis 50 und VK 30 → DB 20 (40%). Als Nächstes × 100 Stück → Gesamt-DB 2.000. Dann Fixkosten 10.000 → Break-even 500 Stück. Das letzte Beispiel kombiniert Menge und Fixkosten.",

	tool_contribution_margin_usecases_title: "Wann ein Deckungsbeitrag-Rechner hilft",
	tool_contribution_margin_usecase_1: "Hausaufgabe: Stückdeckungsbeitrag vor einer Break-even-Aufgabe.",
	tool_contribution_margin_usecase_2: "Sehen, wie eine Änderung der variablen Kosten die DB-Quote verschiebt.",
	tool_contribution_margin_usecase_3: "Abschätzen, wie viele Stück einen genannten Fixkostenblock decken (nur Illustration).",
	tool_contribution_margin_usecase_4: "Mit der Bruttomarge-Seite vergleichen, wenn COGS ≠ variable Kosten.",

	tool_contribution_margin_faq_q1: "Wie berechnet man den Deckungsbeitrag?",
	tool_contribution_margin_faq_a1: "DB = Preis − variable Kosten. Beispiel: 50 − 30 = 20; Quote = 20 ÷ 50 = 40%.",
	tool_contribution_margin_faq_q2: "Worin unterscheidet sich DB von der Bruttomarge?",
	tool_contribution_margin_faq_a2: "DB nutzt variable Kosten. Die Bruttomarge nutzt COGS, die auch nicht rein variable Posten enthalten können.",
	tool_contribution_margin_faq_q3: "Brauche ich eine Absatzmenge?",
	tool_contribution_margin_faq_a3: "Für den Stück-DB nicht. Menge nur eintragen, wenn Sie den Gesamt-DB wollen.",
	tool_contribution_margin_faq_q4: "Wie wird die Break-even-Menge hier ermittelt?",
	tool_contribution_margin_faq_a4: "Break-even-Menge = Fixkosten ÷ Stück-DB, wenn DB > 0. Für mehr Break-even-Optionen den verwandten Break-even-Rechner nutzen.",
	tool_contribution_margin_faq_q5: "Dürfen variable Kosten über dem Preis liegen?",
	tool_contribution_margin_faq_a5: "Diese Seite lehnt den Fall für den Stück-DB ab (negativer DB). Eingaben prüfen.",
	tool_contribution_margin_faq_q6: "Werden Mehrprodukt-Mixe modelliert?",
	tool_contribution_margin_faq_a6: "Nein. Jedes Produkt einzeln rechnen oder gewichteten DB in einer Tabelle führen.",
	tool_contribution_margin_faq_q7: "Ist das Geschäftsberatung?",
	tool_contribution_margin_faq_a7: "Nein. Nur Bildungsarithmetik — keine Finanz-, Steuer-, Buchhaltungs- oder Anlageberatung.",

	tool_contribution_margin_disclaimer: "Nur Bildungs-Deckungsbeitrag — keine Finanz-, Steuer-, Buchhaltungs-, Geschäfts- oder Anlageberatung.",
	tool_contribution_margin_references: "Investopedia-Artikel zu Contribution Margin und Break-even als Bildungshinweis.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default de;
