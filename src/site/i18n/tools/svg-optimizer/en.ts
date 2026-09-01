/**
 * i18n tool shard (svg-optimizer / en).
 * Master H1 is “SVG optimizer”; compress/minify absorbed in desc/FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** 英文母版文案键表。 */
const en: SiteLangDict = {
	tool_svg_optimizer_article:
		'Paste or drop SVG, toggle cleanup options, and see byte savings with a live preview. Inspired by SVGOMG but runs entirely in your browser — files stay on your device and are not uploaded to a server.',
	tool_svg_optimizer_choose_file: 'Choose SVG file',
	tool_svg_optimizer_clear: 'Clear',
	tool_svg_optimizer_copy: 'Copy',
	tool_svg_optimizer_desc:
		'Optimize SVG in the browser — see byte savings and preview. Stays on your device, not uploaded.',
	tool_svg_optimizer_description:
		'SVG optimizer: paste or drop SVG, pick cleanup options, and compare original vs optimized bytes with a preview. Example: the sample icon loads on first paint and shows savings from removing comments and editor metadata. Copy or download the result. Files stay on your device and are not uploaded to a server. This is a lightweight browser pass, not the full SVGO CLI.',
	tool_svg_optimizer_download: 'Download',
	tool_svg_optimizer_drop_hint: 'Or drop an .svg here. Optimization stays in this tab.',
	tool_svg_optimizer_empty: 'Paste SVG or choose a file first.',
	tool_svg_optimizer_err_not_svg: 'That does not look like SVG markup. Paste text that includes an <svg> root.',
	tool_svg_optimizer_example:
		'Load sample inserts a small icon with XML comments, Inkscape namespace noise, extra whitespace, and long decimals. With all options on, bytes drop while the preview still shows the same icon.',
	tool_svg_optimizer_example_title: 'Example',
	tool_svg_optimizer_faq_a1:
		'No. The SVG is read and optimized in this tab. Nothing is POSTed to our servers — confirm in DevTools Network if you like.',
	tool_svg_optimizer_faq_a2:
		'This page runs a lightweight text pipeline (comments, metadata, whitespace, rounding, empty groups). Full SVGO adds many plugins and CLI integration — use SVGO when you need that depth.',
	tool_svg_optimizer_faq_a3:
		'Strip comments removes <!-- … --> blocks. Strip editor metadata drops Inkscape/Sodipodi/Sketch-style xmlns and attributes plus <metadata> nodes. Collapse whitespace joins tags. Round numbers trims path decimals to two places. Strip empty removes bare <g></g> shells and extra spaces in attributes.',
	tool_svg_optimizer_faq_a4:
		'The preview renders your optimized SVG as an image in this tab only. It does not inject the markup into the page DOM as HTML.',
	tool_svg_optimizer_faq_q1: 'Is my SVG uploaded?',
	tool_svg_optimizer_faq_q2: 'How is this different from SVGO or SVGOMG?',
	tool_svg_optimizer_faq_q3: 'What do the option chips do?',
	tool_svg_optimizer_faq_q4: 'Is the preview safe?',
	tool_svg_optimizer_how_body:
		'Paste or drop SVG, leave the cleanup chips on (or turn some off), check original vs optimized bytes and the preview, then copy or download. Everything runs locally in your browser.',
	tool_svg_optimizer_how_item_1: 'Paste SVG markup or drop an .svg file into the box.',
	tool_svg_optimizer_how_item_2: 'Toggle options — comments, editor metadata, whitespace, decimal rounding, empty groups.',
	tool_svg_optimizer_how_item_3: 'Read original bytes, optimized bytes, and percent saved under the controls.',
	tool_svg_optimizer_how_item_4: 'Confirm the preview, then copy or download optimized.svg.',
	tool_svg_optimizer_how_title: 'How it works',
	tool_svg_optimizer_input_label: 'SVG input',
	tool_svg_optimizer_input_ph: 'Paste <svg>…</svg> here…',
	tool_svg_optimizer_load_sample: 'Load sample',
	tool_svg_optimizer_opt_collapse_whitespace: 'Collapse whitespace between tags',
	tool_svg_optimizer_opt_round_numbers: 'Round path numbers to 2 decimals',
	tool_svg_optimizer_opt_strip_comments: 'Remove XML/HTML comments',
	tool_svg_optimizer_opt_strip_empty: 'Remove empty <g> and trim attribute spaces',
	tool_svg_optimizer_opt_strip_metadata: 'Strip editor metadata (Inkscape, Sketch…)',
	tool_svg_optimizer_optimize: 'Optimize',
	tool_svg_optimizer_options_label: 'Options',
	tool_svg_optimizer_output_label: 'Optimized SVG',
	tool_svg_optimizer_preview_label: 'Preview',
	tool_svg_optimizer_rules_body:
		'Browser SVG cleanup trades completeness for instant feedback. Use this checklist before you ship assets.',
	tool_svg_optimizer_rules_item_1:
		'Comments and editor namespaces are safe to drop for production icons — they rarely affect rendering.',
	tool_svg_optimizer_rules_item_2:
		'Rounding coordinates can shrink paths but may shift sub-pixel strokes — preview before you commit.',
	tool_svg_optimizer_rules_item_3:
		'Empty group removal helps Sketch/Figma exports; keep groups that carry id/class/transform.',
	tool_svg_optimizer_rules_item_4:
		'Need raster savings too? Pair with the image optimizer for PNG/WebP — SVG stays vector here.',
	tool_svg_optimizer_rules_title: 'Rules you should expect',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: 'Optimized',
	tool_svg_optimizer_size_original: 'Original',
	tool_svg_optimizer_size_saved: 'Saved',
	tool_svg_optimizer_stats_tpl: 'Original {orig} B → Optimized {opt} B ({pct}% saved)',
	tool_svg_optimizer_status_copied: 'Copied to clipboard.',
	tool_svg_optimizer_status_done: 'Optimized — check bytes and preview.',
	tool_svg_optimizer_title: 'SVG optimizer',
	tool_svg_optimizer_usecase_1: 'Shrink an icon exported from Sketch or Inkscape before you commit it to the repo.',
	tool_svg_optimizer_usecase_2: 'Clean inline SVG for a landing page and see byte savings without installing SVGO.',
	tool_svg_optimizer_usecase_3: 'Strip comments and metadata from a design handoff while keeping the preview identical.',
	tool_svg_optimizer_usecases_title: 'Good fits',
};

export default en;
