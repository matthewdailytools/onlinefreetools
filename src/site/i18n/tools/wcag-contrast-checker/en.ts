/**
 * i18n tool shard (wcag-contrast-checker / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA large text',
  tool_wcag_contrast_checker_aa_normal: 'AA normal text',
  tool_wcag_contrast_checker_aaa_large: 'AAA large text',
  tool_wcag_contrast_checker_aaa_normal: 'AAA normal text',
  tool_wcag_contrast_checker_article:
    'WCAG contrast ratio checker with relative luminance math, AA/AAA badges for normal and large text, live preview, and accessible color suggestions — all local.',
  tool_wcag_contrast_checker_bad_hex: 'Enter valid #RGB or #RRGGBB hex colors.',
  tool_wcag_contrast_checker_bg_label: 'Background',
  tool_wcag_contrast_checker_check: 'Check',
  tool_wcag_contrast_checker_clear: 'Clear',
  tool_wcag_contrast_checker_copy: 'Copy summary',
  tool_wcag_contrast_checker_copy_done: 'Copied',
  tool_wcag_contrast_checker_desc:
    'Check foreground/background contrast ratio and AA/AAA pass/fail — all in your browser.',
  tool_wcag_contrast_checker_description:
    'Pick foreground and background colors to see the WCAG contrast ratio and AA/AAA pass/fail for normal and large text. Steps: choose or type HEX, click Check, read the ratio and badges, swap or try suggestions. Example: #767676 on #ffffff ≈ 4.54:1 — passes AA for normal text, fails AAA for normal text. Colors stay in your browser.',
  tool_wcag_contrast_checker_empty: 'Run a check first, then copy.',
  tool_wcag_contrast_checker_example:
    'Load the sample: foreground #767676 on background #ffffff gives about 4.54:1. AA normal text passes (needs 4.5:1), AA large text passes (needs 3:1), AAA normal text fails (needs 7:1), AAA large text passes (needs 4.5:1). Swap colors to see how the ratio flips.',
  tool_wcag_contrast_checker_example_title: 'Example',
  tool_wcag_contrast_checker_fail: 'Fail',
  tool_wcag_contrast_checker_faq_a1:
    'AA normal text needs at least 4.5:1. AA large text (18 pt regular or 14 pt bold and up) needs 3:1. AAA normal text needs 7:1; AAA large text needs 4.5:1. This page shows all four badges from one ratio.',
  tool_wcag_contrast_checker_faq_a2:
    'Large text is easier to read at lower contrast. WCAG treats text as large when it is at least 18 pt (24 px) regular, or 14 pt (18.66 px) bold. The preview shows both a large and a normal line so you can judge both thresholds.',
  tool_wcag_contrast_checker_faq_a3:
    'No. Contrast math runs entirely in your browser. Check the Network panel — your color values are not uploaded.',
  tool_wcag_contrast_checker_faq_a4:
    'When the pair falls below 4.5:1, the tool may suggest a darker or lighter foreground or background that reaches AA for normal text. Suggestions mix toward black or white on the side that failed — starting points, not brand-perfect palettes.',
  tool_wcag_contrast_checker_faq_a5:
    'Use this page to validate any foreground/background pair. For a full brand palette with semantic tokens, open the brand color token pack tool; you can also sample colors from a photo with the color-from-image tool first.',
  tool_wcag_contrast_checker_faq_q1: 'What are the WCAG contrast thresholds?',
  tool_wcag_contrast_checker_faq_q2: 'What counts as large text?',
  tool_wcag_contrast_checker_faq_q3: 'Do my colors leave the browser?',
  tool_wcag_contrast_checker_faq_q4: 'How should I use the color suggestions?',
  tool_wcag_contrast_checker_faq_q5: 'How does this relate to brand color tokens?',
  tool_wcag_contrast_checker_fg_label: 'Foreground',
  tool_wcag_contrast_checker_how_body:
    'Pick a foreground and background with the color picker or type a HEX code. The page converts sRGB to relative luminance, computes the contrast ratio, and shows Pass/Fail badges for AA and AAA (normal and large text). Swap to reverse the pair, copy a text summary, or apply a suggested tweak when contrast is too low.',
  tool_wcag_contrast_checker_how_title: 'How it works',
  tool_wcag_contrast_checker_pass: 'Pass',
  tool_wcag_contrast_checker_preview_label: 'Live preview',
  tool_wcag_contrast_checker_preview_large: 'Large text sample',
  tool_wcag_contrast_checker_preview_normal: 'Normal text sample',
  tool_wcag_contrast_checker_ratio_label: 'Contrast ratio',
  tool_wcag_contrast_checker_rules_body:
    'WCAG contrast is based on relative luminance — not hue alone. Use this checklist when a ratio looks surprising.',
  tool_wcag_contrast_checker_rules_item_1:
    'Relative luminance L comes from sRGB channels after the WCAG linearization curve. Contrast ratio = (Llighter + 0.05) / (Ldarker + 0.05).',
  tool_wcag_contrast_checker_rules_item_2:
    'Thresholds: AA normal text 4.5:1, AA large text 3:1, AAA normal text 7:1, AAA large text 4.5:1. One ratio drives all four badges on this page.',
  tool_wcag_contrast_checker_rules_item_3:
    'Only opaque sRGB HEX (#RGB or #RRGGBB) is supported here. Invalid HEX shows an error; identical foreground and background give 1:1 and fail every level.',
  tool_wcag_contrast_checker_rules_item_4:
    'Privacy: color values are processed locally in this tab — nothing is sent to a server.',
  tool_wcag_contrast_checker_rules_title: 'Rules you should expect',
  tool_wcag_contrast_checker_sample: 'Sample',
  tool_wcag_contrast_checker_suggest_bg: 'Try background {hex} with this foreground for AA normal text.',
  tool_wcag_contrast_checker_suggest_fg: 'Try foreground {hex} on this background for AA normal text.',
  tool_wcag_contrast_checker_suggest_label: 'Suggestions',
  tool_wcag_contrast_checker_suggest_none: 'Already meets AA for normal text (4.5:1).',
  tool_wcag_contrast_checker_swap: 'Swap',
  tool_wcag_contrast_checker_title: 'WCAG Contrast Checker — AA/AAA Ratio Online',
  tool_wcag_contrast_checker_usecase_1:
    'UI design: verify body copy and labels against a brand background before handoff.',
  tool_wcag_contrast_checker_usecase_2:
    'Buttons and chips: check white-on-color or color-on-white pairs for AA normal or large text.',
  tool_wcag_contrast_checker_usecase_3:
    'Dark mode: swap light/dark surfaces and confirm secondary text still clears 4.5:1 or 3:1 for large type.',
  tool_wcag_contrast_checker_usecases_title: 'Good fits',
};
export default en;
