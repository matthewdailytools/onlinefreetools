/**
 * i18n tool shard (square-feet / en).
 * English master: room L×W to sq ft / m², or convert a known area, with working and NIST factor.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_squarefeet_title: "Square Feet to Square Meters — Convert Room Area for Listings & Renovation",
	tool_squarefeet_description:
		"Convert square feet to square meters, or calculate room area from length × width. Factor: 1 ft² = 0.09290304 m² (NIST). Example: 850 sq ft ≈ 78.97 m²; a 10×12 ft room = 120 sq ft ≈ 11.15 m².",
	tool_squarefeet_calculate: "Calculate",
	tool_squarefeet_sample: "Load sample",
	tool_squarefeet_clear: "Clear",
	tool_squarefeet_mode_label: "What do you have?",
	tool_squarefeet_mode_dims: "Room length and width",
	tool_squarefeet_mode_area: "I already know the area",
	tool_squarefeet_dim_unit_label: "Length unit",
	tool_squarefeet_unit_ft: "Feet (ft)",
	tool_squarefeet_unit_m: "Metres (m)",
	tool_squarefeet_unit_in: "Inches (in)",
	tool_squarefeet_length_label: "Length",
	tool_squarefeet_length_placeholder: "e.g. 10",
	tool_squarefeet_width_label: "Width",
	tool_squarefeet_width_placeholder: "e.g. 12",
	tool_squarefeet_area_label: "Area",
	tool_squarefeet_area_placeholder: "e.g. 850",
	tool_squarefeet_area_unit_label: "Area unit",
	tool_squarefeet_unit_sqft: "Square feet (ft²)",
	tool_squarefeet_unit_sqm: "Square metres (m²)",
	tool_squarefeet_sqft_label: "Square feet",
	tool_squarefeet_sqm_label: "Square metres",
	tool_squarefeet_work_label: "Working",
	tool_squarefeet_result_note:
		"Rounded to 2 decimal places for display. Exact factor: 1 ft² = 0.09290304 m² (NIST / SI). This is planar area only — not living vs gross floor area, and not a price estimate.",
	tool_squarefeet_invalid_input: "Enter positive numbers only.",
	tool_squarefeet_how_title: "How it works",
	tool_squarefeet_how_body:
		"Either multiply length × width after putting both sides in feet, or convert a known area with the exact SI factor. You always get both square feet and square metres, plus the working line.",
	tool_squarefeet_how_item_1:
		"Choose Room length and width if you are measuring a space, or I already know the area if a listing already quotes sq ft or m².",
	tool_squarefeet_how_item_2:
		"For dimensions, pick feet, metres or inches and enter both sides in the same unit. For a known area, enter the number and whether it is ft² or m².",
	tool_squarefeet_how_item_3: "Click Calculate.",
	tool_squarefeet_how_item_4:
		"Read both area units and the working, for example 10 × 12 = 120 ft², or 850 ft² × 0.09290304 = 78.97 m².",
	tool_squarefeet_why_choose_title: "Why choose our Square Feet Converter tools",
	tool_squarefeet_why_choose_item_1:
		"Two modes cover the searches people actually make: room dimensions and a known listing area such as 850 sq ft or 1000 sq ft.",
	tool_squarefeet_why_choose_item_2:
		"The working is shown, so you can see whether inches were divided by 12 or metres were converted with the NIST factor.",
	tool_squarefeet_why_choose_item_3:
		"Uses the exact SI factor 1 ft² = 0.09290304 m² (not a rounded 0.09 or 0.093), matching NIST SP 811.",
	tool_squarefeet_why_choose_item_4:
		"Clear about what it is not: it does not define living vs gross floor area, and it is not a home-price model.",
	tool_squarefeet_why_choose_item_5: "Everything stays in your browser; nothing is uploaded.",
	tool_squarefeet_formula_title: "Formulas and conversion factor",
	tool_squarefeet_formula_body:
		"Area in square feet is length × width after both sides are in feet. Square metres follow from the exact factor below.",
	tool_squarefeet_formula_item_1: "Feet: A_ft² = L × W. Example: 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_2: "Metres: A_ft² = (L × W) ÷ 0.09290304. Example: 3 m × 4 m = 12 m² ≈ 129.17 ft².",
	tool_squarefeet_formula_item_3: "Inches: convert each side ÷ 12 first. Example: 120 in × 144 in → 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_4: "Exact: 1 ft² = 0.09290304 m², so m² = ft² × 0.09290304 and ft² = m² ÷ 0.09290304.",
	tool_squarefeet_example_title: "Example",
	tool_squarefeet_example:
		"Sample room: 10 ft × 12 ft. Working: 10 × 12 = 120 ft² → 120 × 0.09290304 ≈ 11.15 m². Known-area example: 850 sq ft × 0.09290304 ≈ 78.97 m² — useful when a US listing must be compared with local m² ads.",
	tool_squarefeet_usecases_title: "When this helps",
	tool_squarefeet_usecase_1: "Compare a US listing quoted in sq ft with local ads that use m².",
	tool_squarefeet_usecase_2: "Estimate flooring or carpet for a rectangular room before ordering materials (add waste separately).",
	tool_squarefeet_usecase_3: "Convert a known figure such as 1000 sq ft when shopping abroad or reading a floor plan.",
	tool_squarefeet_usecase_4: "Rough paint or renovation checks when drawings mix feet and metres.",
	tool_squarefeet_faq_q1: "How many square metres is 1 square foot?",
	tool_squarefeet_faq_a1:
		"Exactly 0.09290304 m² (NIST / SI). So 100 sq ft ≈ 9.29 m², 850 sq ft ≈ 78.97 m², and 1000 sq ft ≈ 92.90 m².",
	tool_squarefeet_faq_q2: "How do I convert square feet to square metres?",
	tool_squarefeet_faq_a2:
		"Multiply by 0.09290304. Choose I already know the area, enter the sq ft value, and the working shows the multiplication.",
	tool_squarefeet_faq_q3: "How do I find the square footage of a room?",
	tool_squarefeet_faq_a3:
		"Measure length and width in the same unit, then multiply. In feet: 10 × 12 = 120 sq ft. In inches, divide each side by 12 first.",
	tool_squarefeet_faq_q4: "Does this distinguish living area from gross building area?",
	tool_squarefeet_faq_a4:
		"No. It only converts planar rectangle area between units. Listing definitions (net/gross, 套内/建筑) are outside this tool.",
	tool_squarefeet_faq_q5: "What about L-shaped rooms?",
	tool_squarefeet_faq_a5:
		"Split the shape into rectangles, convert each, then add. Irregular polygons are not modeled here.",
	tool_squarefeet_faq_q6: "Can I use it to estimate home prices?",
	tool_squarefeet_faq_a6:
		"No. Area conversion is not a valuation, appraisal, or price-per-square-foot market model.",
	tool_squarefeet_faq_q7: "How much flooring waste should I add?",
	tool_squarefeet_faq_a7:
		"The calculator gives the floor area only. Many installers add about 5–10% for cuts and mistakes; check the product guide for your material.",
	tool_squarefeet_article: "Square feet",
	tool_squarefeet_disclaimer:
		"For listings and renovation planning. Not a property valuation tool, and not a definition of living vs gross floor area.",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI); Wikipedia — Square foot.",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Guide for the Use of the International System of Units (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default en;
