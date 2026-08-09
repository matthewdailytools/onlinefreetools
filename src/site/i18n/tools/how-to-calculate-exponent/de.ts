/**
 * i18n tool shard (how-to-calculate-exponent / de).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_exponent_title: "Potenzrechner — Potenzen berechnen",
	tool_exponent_description: "Berechnen Sie Potenzen a^b mit dem Beispiel 2^10=1024. Weist auf Infinity bei großen Beträgen und NaN bei manchen negativen Basen mit nichtganzzahligem Exponenten hin. Im Browser mit Logs und wissenschaftlicher Notation.",
	tool_exponent_calculate: "Berechnen",
	tool_exponent_sample: "Beispiel laden",
	tool_exponent_clear: "Leeren",
	tool_exponent_base_label: "Basis a",
	tool_exponent_base_ph: "z. B. 2",
	tool_exponent_exp_label: "Exponent b",
	tool_exponent_exp_ph: "z. B. 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "Berechnet a^b mit Math.pow zum Lernen. Sehr großes |b| kann Infinity ergeben.",
	tool_exponent_err_generic: "Endliche Basis und Exponent eingeben.",
	tool_exponent_how_title: "So funktioniert’s",
	tool_exponent_how_body: "Geben Sie a und b ein. Liefert a^b. Negative Basen mit nichtganzzahligen Exponenten können NaN sein und gelten als Fehler.",
	tool_exponent_formula_title: "Formel",
	tool_exponent_formula_body: "Potenzierung a^b:",
	tool_exponent_formula_item_1: "Ist b eine nichtnegative ganze Zahl, bedeutet a^b a mal sich selbst b-mal.",
	tool_exponent_formula_item_2: "Gebrochene/negative Exponenten folgen Math.pow reell.",
	tool_exponent_formula_item_3: "0^0 wird hier als 1 behandelt (Programmierkonvention) — umstritten.",
	tool_exponent_formula_item_4: "Mit der Log-Seite log_a(a^b)=b prüfen, wenn definiert.",
	tool_exponent_example_title: "Beispiel",
	tool_exponent_example: "Beispiel: 2^10 = 1024.",
	tool_exponent_usecases_title: "Wann sinnvoll",
	tool_exponent_usecase_1: "Hausaufgabe: einfache Potenzen wie 2^10.",
	tool_exponent_usecase_2: "Faktoren wissenschaftlicher Notation prüfen.",
	tool_exponent_usecase_3: "Mit inversen Logarithmen abgleichen.",
	tool_exponent_disclaimer: "Nur reelle Lernpotenzen; kein CAS.",
	tool_exponent_references: "Wikipedia Potenzierung.",
	tool_exponent_ref_exp_label: "Wikipedia — Potenzierung",
	tool_exponent_ref_pow_label: "Wikipedia — Exponent",
	tool_exponent_article: "Berechnen Sie a^b im Browser mit klaren Definitionsbereichshinweisen.",
	tool_exponent_faq_q1: "Was ist 0^0 hier?",
	tool_exponent_faq_a1: "Als 1 behandelt (JS-Konvention); mathematisch umstritten.",
	tool_exponent_faq_q2: "Negative Basen?",
	tool_exponent_faq_a2: "Nichtganzzahlige reelle Potenzen sind in JS oft NaN.",
	tool_exponent_faq_q3: "Kann Infinity entstehen?",
	tool_exponent_faq_a3: "Ja bei sehr großen Beträgen.",
	tool_exponent_faq_q4: "Mit Logs prüfen?",
	tool_exponent_faq_a4: "Wenn definiert, ist log_a(a^b)≈b.",
};

export default de;
