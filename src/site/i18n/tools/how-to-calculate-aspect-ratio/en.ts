/**
 * i18n tool shard (how-to-calculate-aspect-ratio / en).
 * English master locale — full UI, How/Formula/FAQ for aspect ratio and scaling.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_aspect_ratio_title: 'Aspect Ratio Calculator — How to Calculate and Scale Ratios',
	tool_aspect_ratio_description:
		'Find the simplified aspect ratio from width × height, then scale to a target width (or height). Presets 16:9, 4:3, and 1:1 stay options on one page. Example: 1920×1080 → 16:9; scale width to 1280 → height 720. Runs in your browser; numbers stay on your device and are not uploaded to a server.',
	tool_aspect_ratio_article:
		'This calculator reduces a pixel or length pair to its simplest width:height ratio using a greatest common divisor, then keeps that ratio when you pick a new width or height. Use it for video frames, design canvases, and UI viewports without sending numbers off your device.',
	tool_aspect_ratio_calculate: 'Calculate',
	tool_aspect_ratio_sample: 'Load sample',
	tool_aspect_ratio_clear: 'Clear',
	tool_aspect_ratio_preset_label: 'Preset (optional)',
	tool_aspect_ratio_preset_custom: 'Custom',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: 'Width',
	tool_aspect_ratio_h_label: 'Height',
	tool_aspect_ratio_w_ph: 'e.g. 1920',
	tool_aspect_ratio_h_ph: 'e.g. 1080',
	tool_aspect_ratio_scale_mode_label: 'Scale by',
	tool_aspect_ratio_scale_by_w: 'Target width',
	tool_aspect_ratio_scale_by_h: 'Target height',
	tool_aspect_ratio_target_w_label: 'Target width',
	tool_aspect_ratio_target_h_label: 'Target height',
	tool_aspect_ratio_target_w_ph: 'e.g. 1280',
	tool_aspect_ratio_target_h_ph: 'e.g. 720',
	tool_aspect_ratio_result_ratio: 'Aspect ratio',
	tool_aspect_ratio_result_scaled: 'Scaled size',
	tool_aspect_ratio_err_input: 'Enter positive width and height, and a positive target size for the side you scale.',
	tool_aspect_ratio_how_title: 'How it works',
	tool_aspect_ratio_how_body:
		'Enter width and height (or pick a 16:9, 4:3, or 1:1 preset that fills common pixel sizes). The tool simplifies the pair with a greatest common divisor, then scales the other side when you set a target width or height. All math runs in your browser tab; your numbers are not uploaded to a server.',
	tool_aspect_ratio_formula_title: 'Formula and assumptions',
	tool_aspect_ratio_formula_body: 'Ratio simplification and proportional scaling use integer gcd on the input pair:',
	tool_aspect_ratio_formula_item_1: 'Let g = gcd(round(W), round(H)). Simplified ratio = (W÷g):(H÷g).',
	tool_aspect_ratio_formula_item_2: 'Scale by width: H′ = targetW × H ÷ W. Scale by height: W′ = targetH × W ÷ H.',
	tool_aspect_ratio_formula_item_3: 'Presets only fill sample sizes (16:9 → 1920×1080, 4:3 → 1600×1200, 1:1 → 1080×1080); they are not separate pages.',
	tool_aspect_ratio_example_title: 'Example',
	tool_aspect_ratio_example:
		'Example: width 1920 and height 1080. gcd(1920,1080)=120, so the ratio is 16:9. Scale width to 1280 → height = 1280 × 1080 ÷ 1920 = 720.',
	tool_aspect_ratio_usecases_title: 'When to use it',
	tool_aspect_ratio_usecase_1: 'Pick an export size that keeps a 16:9 video frame without stretching.',
	tool_aspect_ratio_usecase_2: 'Match a design canvas to a phone or monitor ratio before exporting assets.',
	tool_aspect_ratio_usecase_3: 'Convert a known resolution into a short ratio label for specs or CSS planning.',
	tool_aspect_ratio_faq_q1: 'How is the aspect ratio simplified?',
	tool_aspect_ratio_faq_a1:
		'The calculator divides width and height by their greatest common divisor after rounding to whole numbers, so 1920×1080 becomes 16:9.',
	tool_aspect_ratio_faq_q2: 'Why are 16:9, 4:3, and 1:1 only presets?',
	tool_aspect_ratio_faq_a2:
		'Those ratios are common starting points. Keeping them as options on one page avoids separate near-duplicate calculators for each preset.',
	tool_aspect_ratio_faq_q3: 'Can I scale by height instead of width?',
	tool_aspect_ratio_faq_a3:
		'Yes. Switch “Scale by” to target height; the tool solves for the matching width while keeping the same ratio.',
	tool_aspect_ratio_faq_q4: 'Are my numbers uploaded?',
	tool_aspect_ratio_faq_a4:
		'No. Dimensions are calculated in your browser on your device and are not uploaded to a server.',
	tool_aspect_ratio_references: 'NIST SP 811 guidance on length and unit conversions used when relating pixel sizes to physical units.',
	tool_aspect_ratio_ref_nist_label: 'NIST — Special Publication 811 (unit conversions)',
};

export default en;
