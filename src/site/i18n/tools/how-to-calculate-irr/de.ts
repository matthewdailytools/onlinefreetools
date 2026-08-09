/**
 * i18n tool shard (how-to-calculate-irr / de).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_irr_title: "IRR-Rechner (Interner Zinsfuß)",
	tool_irr_description: "Schätzen Sie den IRR einer einfachen Zahlungsreihe per Newton. Beispiel: −1000, 300, 420, 680 → näherungsweiser IRR%. Bildungszweck.",
	tool_irr_calculate: "Berechnen",
	tool_irr_sample: "Beispiel laden",
	tool_irr_clear: "Leeren",
	tool_irr_cf_label: "Cashflows (Komma/Zeile; CF0 zuerst)",
	tool_irr_cf_ph: "z. B. -1000, 300, 420, 680",
	tool_irr_irrOut_label: "Näherungs-IRR",
	tool_irr_result_note: "Bildungszweck.",
	tool_irr_err_generic: "Eingaben prüfen.",
	tool_irr_how_title: "So funktioniert’s",
	tool_irr_how_body: "CF0…CFn einfügen. Suche r mit NPV(r)=0 per Newton.",
	tool_irr_formula_title: "Formel",
	tool_irr_formula_body: "CF0…CFn einfügen. Suche r mit NPV(r)=0 per Newton.",
	tool_irr_formula_item_1: "See formula notes.",
	tool_irr_formula_item_2: "Check inputs.",
	tool_irr_formula_item_3: "Educational only.",
	tool_irr_example_title: "Beispiel",
	tool_irr_example: "Beispiel: −1000, 300, 420, 680 → IRR ≈ 18,9%.",
	tool_irr_usecases_title: "Wann sinnvoll",
	tool_irr_usecase_1: "Homework.",
	tool_irr_usecase_2: "Quick sketch.",
	tool_irr_usecase_3: "Compare related tools.",
	tool_irr_faq_q1: "Beispiel?",
	tool_irr_faq_a1: "Beispiel: −1000, 300, 420, 680 → IRR ≈ 18,9%.",
	tool_irr_faq_q2: "Formula?",
	tool_irr_faq_a2: "See Formula section.",
	tool_irr_faq_q3: "Advice?",
	tool_irr_faq_a3: "Educational only.",
	tool_irr_faq_q4: "Related?",
	tool_irr_faq_a4: "See related tools.",
	tool_irr_article: "IRR-Rechner (Interner Zinsfuß)",
	tool_irr_disclaimer: "Nur zur Veranschaulichung (IRR) — keine Finanzberatung.",
	tool_irr_references: "Investopedia und Lehrbuchformeln.",
	tool_irr_ref_a_label: "Investopedia",
	tool_irr_ref_b_label: "Wikipedia",
};

export default de;
