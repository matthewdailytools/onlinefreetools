/**
 * i18n tool shard (brand-color-token-pack / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'One brand base color becomes a full token pack: HEX, RGB, HSL, OKLCH, a 50–950 scale, per-step black/white text pairs, and copyable CSS variables or JSON — all in your browser.',
  tool_brand_color_token_pack_bad_hex: 'Enter a valid 3- or 6-digit HEX color (e.g. #2563EB).',
  tool_brand_color_token_pack_base_label: 'Base color',
  tool_brand_color_token_pack_clear: 'Clear',
  tool_brand_color_token_pack_contrast_col: 'Text',
  tool_brand_color_token_pack_copy_css: 'Copy CSS',
  tool_brand_color_token_pack_copy_done: 'Copied',
  tool_brand_color_token_pack_copy_json: 'Copy JSON',
  tool_brand_color_token_pack_desc:
    'One base color → HEX/RGB/HSL/OKLCH, 50–950 scale, contrast pairs, CSS variables — local.',
  tool_brand_color_token_pack_description:
    'Build a brand color token pack from one base in your browser. Steps: pick a base (HEX or color picker), read HEX/RGB/HSL/OKLCH, generate a 50–950 scale with black/white text pairs on each step, then copy CSS variables or JSON. Sample blue #2563eb loads on open — nothing uploads.',
  tool_brand_color_token_pack_empty: 'Generate tokens first, then copy CSS or JSON.',
  tool_brand_color_token_pack_example:
    'Load the sample (#2563EB). The spaces block shows HEX, RGB, HSL, and OKLCH for the base; the scale grid lists 50–950 swatches with recommended black or white text and a contrast ratio. Copy CSS gives :root { --color-50: …; … --color-950: …; } ready for your stylesheet.',
  tool_brand_color_token_pack_example_title: 'Example',
  tool_brand_color_token_pack_faq_a1:
    'No. Color math and exports run entirely in this tab — your picks are not sent to a server.',
  tool_brand_color_token_pack_faq_a2:
    'Step 500 is your base color. Lighter steps (50–400) mix toward white; darker steps (600–950) mix toward black. The mix is linear in sRGB, which keeps hue stable for quick design-system ramps.',
  tool_brand_color_token_pack_faq_a3:
    'Each swatch compares black and white text on that background and picks whichever gives the higher WCAG contrast ratio. Labels show the ratio and whether normal text likely meets AA (4.5:1) or large text AA (3:1).',
  tool_brand_color_token_pack_faq_a4:
    'Copy CSS outputs :root custom properties (--color-50 through --color-950). Copy JSON gives the same scale plus base spaces as structured data for design tokens or build scripts.',
  tool_brand_color_token_pack_faq_a5:
    'These are quick black/white suggestions per step. For custom foreground/background pairs or exact WCAG levels, open the WCAG contrast checker and paste any swatch HEX.',
  tool_brand_color_token_pack_faq_q1: 'Does my color leave the browser?',
  tool_brand_color_token_pack_faq_q2: 'How is the 50–950 scale built?',
  tool_brand_color_token_pack_faq_q3: 'What do the contrast columns mean?',
  tool_brand_color_token_pack_faq_q4: 'What do Copy CSS and Copy JSON include?',
  tool_brand_color_token_pack_faq_q5: 'When should I use the contrast checker instead?',
  tool_brand_color_token_pack_generate: 'Generate',
  tool_brand_color_token_pack_how_body:
    'Enter or pick one brand base color. The page shows that color in HEX, RGB, HSL, and OKLCH, then builds an 11-step scale (50–950) with a live UI preview. Each swatch lists a recommended black or white text color and contrast ratio. Copy CSS variables or JSON when the ramp looks right — all processing stays local.',
  tool_brand_color_token_pack_how_title: 'How it works',
  tool_brand_color_token_pack_preview_label: 'UI preview',
  tool_brand_color_token_pack_rules_body:
    'What to expect from the scale, color spaces, contrast hints, and privacy.',
  tool_brand_color_token_pack_rules_item_1:
    'Scale step 500 matches your base. Steps below 500 lighten by mixing toward white; steps above 500 darken by mixing toward black (linear sRGB blend).',
  tool_brand_color_token_pack_rules_item_2:
    'The base block lists HEX, RGB, HSL, and OKLCH for the same color. OKLCH uses sRGB → linear → OKLab conversion so you can compare with modern CSS color syntax.',
  tool_brand_color_token_pack_rules_item_3:
    'Each scale swatch recommends black or white text — whichever yields the higher contrast ratio on that background. Ratios follow WCAG relative luminance; AA labels are hints, not a full audit.',
  tool_brand_color_token_pack_rules_item_4:
    'Privacy: generation, preview, and clipboard copy all run locally in this tab. No upload of your brand colors.',
  tool_brand_color_token_pack_rules_title: 'Rules you should expect',
  tool_brand_color_token_pack_sample: 'Sample',
  tool_brand_color_token_pack_scale_label: 'Color scale (50–950)',
  tool_brand_color_token_pack_spaces_label: 'Color spaces (base)',
  tool_brand_color_token_pack_text_on: 'Text on base',
  tool_brand_color_token_pack_title: 'Brand Color Token Pack — HEX HSL OKLCH Scale',
  tool_brand_color_token_pack_ui_body: 'Preview body on your brand base with suggested text color.',
  tool_brand_color_token_pack_ui_btn: 'Primary action',
  tool_brand_color_token_pack_ui_title: 'Preview heading',
  tool_brand_color_token_pack_usecase_1:
    'Design systems: start from one brand HEX and ship a consistent 50–950 ramp plus CSS variables for components.',
  tool_brand_color_token_pack_usecase_2:
    'Dark mode planning: scan lighter tints (50–300) for surfaces and deeper shades (700–950) for text-on-brand decisions.',
  tool_brand_color_token_pack_usecase_3:
    'Handoff to dev: copy JSON tokens or CSS custom properties instead of retyping HEX values from a screenshot.',
  tool_brand_color_token_pack_usecases_title: 'Good fits',
};
export default en;
