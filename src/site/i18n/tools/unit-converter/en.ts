/**
 * i18n tool shard (unit-converter / en).
 * English master — hub UI, category labels, Formula/FAQ; unit symbols stay international.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_unit_converter_title: 'Unit Converter — Length / Mass / Temperature / Area / Volume / Speed',
	tool_unit_converter_description:
		'Convert length, mass, temperature, area, volume, and speed on one page with clear factors. Example: 1 mile → 1.60934 km. Runs in your browser; educational conversion factors — not a surveying instrument or medical device.',
	tool_unit_converter_article:
		'A unit converter hub keeps common categories on one URL so you do not need a separate page for every pair like cm↔inch. Deep floor-area workflows still belong on the dedicated square-feet tool.',
	tool_unit_converter_calculate: 'Convert',
	tool_unit_converter_sample: 'Load sample',
	tool_unit_converter_clear: 'Clear',
	tool_unit_converter_value_label: 'Value',
	tool_unit_converter_value_ph: 'e.g. 1',
	tool_unit_converter_from_label: 'From unit',
	tool_unit_converter_to_label: 'To unit',
	tool_unit_converter_category_label: 'Category',
	tool_unit_converter_cat_length: 'Length',
	tool_unit_converter_cat_mass: 'Mass',
	tool_unit_converter_cat_temperature: 'Temperature',
	tool_unit_converter_cat_area: 'Area',
	tool_unit_converter_cat_volume: 'Volume',
	tool_unit_converter_cat_speed: 'Speed',
	tool_unit_converter_result_label: 'Result',
	tool_unit_converter_result_note: 'Educational conversion only — not a certified measurement device.',
	tool_unit_converter_err_value: 'Enter a finite number.',
	tool_unit_converter_err_temp: 'Temperature is below absolute zero for the selected scale.',
	tool_unit_converter_how_title: 'How it works',
	tool_unit_converter_how_body:
		'Pick a category, enter a value, choose from/to units, then convert. Categories stay on this hub; floor-plan area with length×width lives on the square-feet tool.',
	tool_unit_converter_formula_title: 'Factors and temperature formulas',
	tool_unit_converter_formula_body:
		'Linear categories convert via an SI base unit (for example metres, kilograms, square metres). Temperature uses scale formulas. Assumptions:',
	tool_unit_converter_formula_item_1: 'Factors follow common SI / customary definitions (e.g. 1 mi = 1609.344 m; US gallon for volume).',
	tool_unit_converter_formula_item_2: '°C ↔ °F ↔ K: F = C×9/5+32; K = C+273.15; reverse formulas accordingly.',
	tool_unit_converter_formula_item_3: 'Results are educational illustrations, not certified surveying or lab measurements.',
	tool_unit_converter_example_title: 'Example',
	tool_unit_converter_example:
		'Example (length): 1 mile → 1.60934 km. Temperature sample: 0 °C → 32 °F.',
	tool_unit_converter_usecases_title: 'When to use it',
	tool_unit_converter_usecase_1: 'Homework: convert kilometres and miles without opening a new page per pair.',
	tool_unit_converter_usecase_2: 'Quick mass or volume checks while cooking or packing (approximate).',
	tool_unit_converter_usecase_3: 'Switch temperature scales for weather notes — not for medical dosing.',
	tool_unit_converter_faq_q1: 'Why not a separate page for every unit pair?',
	tool_unit_converter_faq_a1:
		'Splitting hundreds of near-duplicate conversion URLs is doorway-like. This hub covers common pairs in one tool; use square-feet for area from length×width.',
	tool_unit_converter_faq_q2: 'Which mile and gallon definitions are used?',
	tool_unit_converter_faq_a2:
		'International mile (1609.344 m) and US liquid gallon (3.785411784 L). Other definitions are out of scope here.',
	tool_unit_converter_faq_q3: 'How is temperature converted?',
	tool_unit_converter_faq_a3:
		'Via °C as an intermediate: F = C×9/5+32 and K = C+273.15. Values below absolute zero are rejected.',
	tool_unit_converter_faq_q4: 'Is this the same as the square-feet tool?',
	tool_unit_converter_faq_a4:
		'No. This hub converts area units directly. Square-feet focuses on length×width area workflows and property/renovation scenarios.',
	tool_unit_converter_disclaimer:
		'Conversion results are educational illustrations using standard factors. They are not certified measurements and are not surveying, engineering sign-off, or medical advice.',
	tool_unit_converter_references:
		'NIST SI unit relationships; common customary factors (mile, US gallon); standard Celsius/Fahrenheit/Kelvin formulas.',
	tool_unit_converter_ref_nist_label: 'NIST — SI Units',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default en;
