/**
 * i18n tool shard (how-to-calculate-density / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_density_title: "Density Calculator — Mass over Volume",
	tool_density_description: "Calculate density with the formula ρ = m / V from mass and volume. Example: mass 10, volume 2 → density 5 (same units). Browser-only; educational check of the process and units.",
	tool_density_calculate: "Calculate",
	tool_density_sample: "Load sample",
	tool_density_clear: "Clear",
	tool_density_mass_label: "Mass",
	tool_density_mass_ph: "e.g. 10",
	tool_density_volume_label: "Volume",
	tool_density_volume_ph: "e.g. 2",
	tool_density_densOut_label: "Density",
	tool_density_result_note: "ρ = mass / volume.",
	tool_density_err_generic: "Enter mass ≥ 0 and volume > 0.",
	tool_density_how_title: "How it works",
	tool_density_how_body: "Enter mass and volume in consistent units (e.g., kg and m³ → kg/m³).",
	tool_density_formula_title: "Formula",
	tool_density_formula_body: "ρ=m/V. Notes:",
	tool_density_formula_item_1: "Volume must be positive.",
	tool_density_formula_item_2: "Temperature/pressure effects not modeled.",
	tool_density_formula_item_3: "Pair with volume / Ohm tools.",
	tool_density_example_title: "Example",
	tool_density_example: "Example: m=10, V=2 → density 5.",
	tool_density_usecases_title: "When to use it",
	tool_density_usecase_1: "Science homework.",
	tool_density_usecase_2: "Quick ρ check.",
	tool_density_usecase_3: "Compare related physics tools.",
	tool_density_faq_q1: "Sample?",
	tool_density_faq_a1: "10/2=5.",
	tool_density_faq_q2: "Units?",
	tool_density_faq_a2: "Keep mass/volume consistent.",
	tool_density_faq_q3: "V=0?",
	tool_density_faq_a3: "Rejected.",
	tool_density_faq_q4: "Advice?",
	tool_density_faq_a4: "Educational only.",
	tool_density_article: "Density",
	tool_density_disclaimer: "Educational density only — not professional advice.",
	tool_density_references: "Standard textbook formulas.",
	tool_density_ref_a_label: "Wikipedia — Density",
	tool_density_ref_b_label: "Wikipedia — Mass",
};

export default en;
