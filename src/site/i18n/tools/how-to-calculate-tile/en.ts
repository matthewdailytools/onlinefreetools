/**
 * i18n tool shard (how-to-calculate-tile / en).
 * English master locale — full UI, How/Formula/FAQ for tile quantity estimator.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_tile_title: 'Tile Calculator — How to Estimate Tile Quantity',
	tool_tile_description:
		'Estimate how many tiles you need from room area in m² (or length × width), tile size in cm, and waste percent (default 10%). Example: a 12 m² room with 30×30 cm tiles and 10% waste → 147 tiles (rounded up). Runs in your browser; numbers stay on your device and are not uploaded to a server.',
	tool_tile_article:
		'This calculator turns room area and single-tile size into a purchase count. Enter the floor or wall area directly, or length and width in metres, then the tile length and width in centimetres and a waste allowance. The result rounds up so you plan for cuts and breakage.',
	tool_tile_calculate: 'Calculate',
	tool_tile_sample: 'Load sample',
	tool_tile_clear: 'Clear',
	tool_tile_mode_label: 'Room size input',
	tool_tile_mode_area: 'Area (m²)',
	tool_tile_mode_lw: 'Length × width',
	tool_tile_area_label: 'Room area (m²)',
	tool_tile_area_ph: 'e.g. 12',
	tool_tile_room_l_label: 'Room length (m)',
	tool_tile_room_w_label: 'Room width (m)',
	tool_tile_room_l_ph: 'e.g. 4',
	tool_tile_room_w_ph: 'e.g. 3',
	tool_tile_tile_l_label: 'Tile length (cm)',
	tool_tile_tile_w_label: 'Tile width (cm)',
	tool_tile_tile_l_ph: 'e.g. 30',
	tool_tile_tile_w_ph: 'e.g. 30',
	tool_tile_waste_label: 'Waste (%)',
	tool_tile_waste_ph: 'e.g. 10',
	tool_tile_waste_hint: 'Default 10% covers cuts and a few broken pieces; raise it for diagonal layouts.',
	tool_tile_result_tiles: 'Tiles needed',
	tool_tile_result_area: 'Room area used',
	tool_tile_result_tile_area: 'Area per tile',
	tool_tile_err_input: 'Enter positive room area (or length and width), positive tile sizes, and a waste percent of 0 or more.',
	tool_tile_how_title: 'How it works',
	tool_tile_how_body:
		'Choose area or length × width for the room, enter tile size in centimetres, and set waste percent. The tool converts tile size to square metres, multiplies room area by (1 + waste/100), divides by one tile’s area, and rounds up. All math runs in your browser tab; your numbers are not uploaded to a server.',
	tool_tile_formula_title: 'Formula and assumptions',
	tool_tile_formula_body: 'Tile count uses room area, single-tile area, and a waste allowance:',
	tool_tile_formula_item_1: 'Room area A = direct m², or length × width in metres.',
	tool_tile_formula_item_2: 'Tile area a = (length_cm ÷ 100) × (width_cm ÷ 100) in m².',
	tool_tile_formula_item_3: 'Tiles = ceil(A × (1 + waste% ÷ 100) ÷ a). Waste default is 10%.',
	tool_tile_example_title: 'Example',
	tool_tile_example:
		'Example: room 12 m², tiles 30×30 cm, waste 10%. One tile is 0.09 m². Needed area with waste = 12 × 1.10 = 13.2 m². Tiles = ceil(13.2 ÷ 0.09) = ceil(146.666…) = 147.',
	tool_tile_usecases_title: 'When to use it',
	tool_tile_usecase_1: 'Order floor tiles for a bathroom or kitchen before visiting the store.',
	tool_tile_usecase_2: 'Rough-check a wall tiling quote against simple area and waste math.',
	tool_tile_usecase_3: 'Compare 30×30 cm vs larger formats by changing tile size and watching the count.',
	tool_tile_faq_q1: 'Why does the calculator round up?',
	tool_tile_faq_a1:
		'You cannot buy a fraction of a tile. Rounding up (ceil) matches how packs are purchased after cuts and breakage.',
	tool_tile_faq_q2: 'What does the waste percent mean?',
	tool_tile_faq_a2:
		'Waste adds spare area for cuts, pattern matching, and broken pieces. The default is 10%; complex or diagonal layouts often need more.',
	tool_tile_faq_q3: 'Should I enter area or length × width?',
	tool_tile_faq_a3:
		'Either works. Use area if you already know the m²; use length × width when you have room dimensions in metres.',
	tool_tile_faq_q4: 'Are my numbers uploaded?',
	tool_tile_faq_a4:
		'No. Dimensions are calculated in your browser on your device and are not uploaded to a server.',
	tool_tile_references:
		'NIST SP 811 unit conversion factors; Tile Council of North America installation guidance on waste and planning.',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811 (unit conversions)',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default en;
