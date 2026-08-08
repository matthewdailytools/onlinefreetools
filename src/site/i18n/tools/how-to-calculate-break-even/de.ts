/**
 * i18n tool shard (how-to-calculate-break-even / de).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_break_even_title: "Break-even-Rechner — Absatzmenge zur Kostendeckung",
	tool_break_even_description: "Berechnen Sie die Gewinnschwelle in Mengen und Umsatz aus Fixkosten, Stückpreis und variablen Stückkosten. Der Deckungsbeitrag wird angezeigt. Beispiel: Fixkosten 10.000, Preis 50, variabel 30 → 500 Stück und Umsatz 25.000. Im Browser; nur zu Lernzwecken, keine Geschäfts- oder Anlageberatung.",
	tool_break_even_article: "Break-even ist erreicht, wenn der Deckungsbeitrag die Fixkosten deckt. Menge = FK / (P − V); Umsatz und DB auf derselben Lern-URL.",
	tool_break_even_calculate: "Berechnen",
	tool_break_even_sample: "Beispiel laden",
	tool_break_even_clear: "Löschen",
	tool_break_even_fixed_label: "Fixkosten",
	tool_break_even_fixed_ph: "z. B. 10000",
	tool_break_even_price_label: "Stückpreis",
	tool_break_even_price_ph: "z. B. 50",
	tool_break_even_var_label: "Variable Stückkosten",
	tool_break_even_var_ph: "z. B. 30",
	tool_break_even_result_units: "Break-even-Menge",
	tool_break_even_result_revenue: "Break-even-Umsatz",
	tool_break_even_result_cm: "Deckungsbeitrag je Stück",
	tool_break_even_result_note: "Nur Lernillustration — keine Geschäfts- oder Anlageberatung.",
	tool_break_even_err_fixed: "Fixkosten müssen > 0 sein.",
	tool_break_even_err_price: "Preis > 0 und variable Kosten ≥ 0.",
	tool_break_even_err_margin: "Preis muss über den variablen Kosten liegen.",
	tool_break_even_how_title: "So funktioniert es",
	tool_break_even_how_body: "Fixkosten, Preis und variable Stückkosten eingeben. Das Tool berechnet DB, Menge und Umsatz. Branchen nur in Anwendungsfällen, keine eigenen URLs.",
	tool_break_even_formula_title: "Formel und Annahmen",
	tool_break_even_formula_body: "Menge Q = FK / (P − V). Umsatz = Q × P. DB = P − V. Annahmen:",
	tool_break_even_formula_item_1: "Kosten und Preise konstant; Steuern/Rabatte nicht modelliert.",
	tool_break_even_formula_item_2: "Ein-Produkt-Sicht.",
	tool_break_even_formula_item_3: "Lernresultate, keine Prognosen.",
	tool_break_even_example_title: "Beispiel",
	tool_break_even_example: "Beispiel: FK 10.000, Preis 50, variabel 30 → DB 20 → 500 Stück, Umsatz 25.000.",
	tool_break_even_usecases_title: "Wann nutzen",
	tool_break_even_usecase_1: "Unterricht: Formel mit festen FK, P, V üben.",
	tool_break_even_usecase_2: "Grobe Stückzahl zur Fixkostendeckung (nur Illustration).",
	tool_break_even_usecase_3: "DB und Break-even-Umsatz auf einer Seite.",
	tool_break_even_faq_q1: "Welche Formel?",
	tool_break_even_faq_a1: "Q = FK / (P − V). Umsatz = Q × P. DB = P − V.",
	tool_break_even_faq_q2: "Preis = variable Kosten?",
	tool_break_even_faq_a2: "Keine endliche Menge. Preis erhöhen oder variable Kosten senken.",
	tool_break_even_faq_q3: "Geschäftsberatung?",
	tool_break_even_faq_a3: "Nein. Nur Lernillustrationen.",
	tool_break_even_faq_q4: "Menge oder Umsatz?",
	tool_break_even_faq_a4: "Beides in den Ergebnissen; Umsatz = Menge × Preis.",
	tool_break_even_disclaimer: "Ergebnisse nur zu Lernzwecken; keine Geschäfts-, Steuer- oder Anlageberatung.",
	tool_break_even_references: "Investopedia Break-even und Deckungsbeitrag; Formel FK/(P−V).",
	tool_break_even_ref_bep_label: "Investopedia — Break-even-Punkt",
	tool_break_even_ref_cm_label: "Investopedia — Deckungsbeitrag",
};

export default de;
