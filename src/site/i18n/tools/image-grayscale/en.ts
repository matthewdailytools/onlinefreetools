/**
 * i18n tool shard (image-grayscale / en).
 * English master (2026-10-14 rewrite): selectable grayscale method (Rec.601, Rec.709, average,
 * lightness, single channel), strength slider for partial desaturation, show-original toggle,
 * Convert → Download with the gold progress HUD and collapsed export settings.
 */
import type { SiteLangDict } from '../../../types';

/** English strings for the image grayscale converter. */
const en: SiteLangDict = {
	tool_image_grayscale_title: 'Convert Image to Grayscale — Make a Photo Black and White, with a Choice of Method',
	tool_image_grayscale_desc: 'Turn a colour photo black and white in your browser, pick the grayscale method, then download.',
	tool_image_grayscale_description:
		'Convert a colour photo to grayscale (black and white) in your browser. Steps: choose an image, pick a method — luminance, average, lightness or a single colour channel — set the strength, click Convert and download JPEG, WebP or PNG.',
	tool_image_grayscale_choose_file: 'Choose image',
	tool_image_grayscale_drop_hint: 'Or drop a JPEG, PNG, WebP or GIF here.',
	tool_image_grayscale_convert: 'Convert to grayscale',
	tool_image_grayscale_download: 'Download',
	tool_image_grayscale_sample: 'Load sample',
	tool_image_grayscale_clear: 'Clear',
	tool_image_grayscale_method_label: 'Grayscale method',
	tool_image_grayscale_method_luma601: 'Luminance — Rec.601 (recommended)',
	tool_image_grayscale_method_luma709: 'Luminance — Rec.709 / sRGB',
	tool_image_grayscale_method_average: 'Average of R, G, B',
	tool_image_grayscale_method_lightness: 'Lightness (max + min) ÷ 2',
	tool_image_grayscale_method_red: 'Red channel only (red-filter look)',
	tool_image_grayscale_method_green: 'Green channel only',
	tool_image_grayscale_method_blue: 'Blue channel only',
	tool_image_grayscale_method_hint: 'Luminance keeps the brightness your eye sees. The preview updates as you switch.',
	tool_image_grayscale_amount_label: 'Strength',
	tool_image_grayscale_amount_hint: '100% = fully black and white; lower values keep some colour.',
	tool_image_grayscale_show_original: 'Show original',
	tool_image_grayscale_advanced: 'Advanced settings (optional)',
	tool_image_grayscale_format_label: 'Output format',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP is small and keeps transparency. PNG is lossless. JPEG needs a background colour.',
	tool_image_grayscale_quality_label: 'Quality',
	tool_image_grayscale_quality_hint: 'JPEG and WebP only; PNG ignores it.',
	tool_image_grayscale_jpeg_bg_label: 'JPEG background',
	tool_image_grayscale_jpeg_bg_hint: 'Fills transparent areas before JPEG export. Default is white.',
	tool_image_grayscale_preview_label: 'Preview',
	tool_image_grayscale_progress: 'Converting to grayscale…',
	tool_image_grayscale_step_decode: 'Decode',
	tool_image_grayscale_step_gray: 'Convert pixels',
	tool_image_grayscale_step_encode: 'Encode',
	tool_image_grayscale_decode_step: 'Reading the image…',
	tool_image_grayscale_gray_step: 'Recalculating every pixel…',
	tool_image_grayscale_encode_step: 'Saving as {fmt}…',
	tool_image_grayscale_elapsed: 'Elapsed {s}s',
	tool_image_grayscale_empty: 'Choose an image first.',
	tool_image_grayscale_err_decode: 'This file could not be opened as an image. Try a JPEG, PNG or WebP.',
	tool_image_grayscale_err_encode: 'The image could not be saved. Try a smaller image or another format.',
	tool_image_grayscale_warn_large: 'Large file (over 25 MB) — conversion may be slow.',
	tool_image_grayscale_warn_edge: 'One side is longer than about 8,192 px — some browsers may fail to process it.',
	tool_image_grayscale_warn_animation: 'Animated GIF: only the first frame is converted.',
	tool_image_grayscale_status_working: 'Working…',
	tool_image_grayscale_status_done: 'Done — click Download to save.',
	tool_image_grayscale_stats_tpl: '{w}×{h} px · {method} → {fmt} ({bytes})',
	tool_image_grayscale_how_title: 'How to convert an image to grayscale',
	tool_image_grayscale_how_body:
		'Every pixel’s red, green and blue values are replaced by a single gray value, so R = G = B. The method decides how that gray value is calculated, which is why the same photo can come out lighter, darker or flatter.',
	tool_image_grayscale_how_item_1: 'Choose a photo or drop it onto the box.',
	tool_image_grayscale_how_item_2: 'Pick a grayscale method and a strength; tick Show original to compare.',
	tool_image_grayscale_how_item_3: 'Click Convert to grayscale and wait for the progress bar.',
	tool_image_grayscale_how_item_4: 'Click Download. Open Advanced settings first if you need PNG, JPEG or a different quality.',
	tool_image_grayscale_why_choose_title: 'Why use this grayscale converter',
	tool_image_grayscale_why_choose_item_1:
		'Seven conversion methods instead of one fixed filter. On the sample, pure red becomes 76 with Rec.601 luminance but 85 with a plain average — and the lightness method turns red, green, blue and yellow into the same 128 gray.',
	tool_image_grayscale_why_choose_item_2:
		'Single-channel modes recreate black-and-white filter effects: the red channel darkens blue skies and smooths skin, the blue channel makes skies pale and brings out freckles.',
	tool_image_grayscale_why_choose_item_3: 'The strength slider gives a muted, partly desaturated look as well as full black and white.',
	tool_image_grayscale_why_choose_item_4: 'The pixels themselves are rewritten, so the downloaded file stays black and white in any app — unlike a CSS filter or a display setting.',
	tool_image_grayscale_why_choose_item_5: 'Transparency is kept in PNG and WebP, and the photo is processed in this browser tab without being uploaded.',
	tool_image_grayscale_rules_title: 'Grayscale formulas used',
	tool_image_grayscale_rules_body: 'R, G and B are the pixel’s 0–255 values; the result Y is written to all three channels.',
	tool_image_grayscale_rules_item_1: 'Rec.601 luminance: Y = 0.299 R + 0.587 G + 0.114 B — the classic TV and JPEG weighting, closest to how bright each colour looks.',
	tool_image_grayscale_rules_item_2: 'Rec.709 luminance: Y = 0.2126 R + 0.7152 G + 0.0722 B — the HD-video weights, also used by the CSS grayscale() filter. Like most editors, it is applied to the stored sRGB values without gamma linearisation.',
	tool_image_grayscale_rules_item_3: 'Average: Y = (R + G + B) ÷ 3. Lightness: Y = (largest + smallest) ÷ 2. Channel modes copy R, G or B alone.',
	tool_image_grayscale_rules_item_4: 'Strength s: new value = original + (Y − original) × s. At 100% every pixel is gray; at 50% colours are halfway to gray.',
	tool_image_grayscale_rules_item_5: 'Alpha (transparency) is unchanged; JPEG fills it with the background colour. Animated GIFs use the first frame. Saving re-encodes the image.',
	tool_image_grayscale_example_title: 'Example',
	tool_image_grayscale_example:
		'The sample has pure red, green, blue and yellow bars above a rainbow strip. With Rec.601 they become 76, 150, 29 and 226 — four clearly different grays. Rec.709 gives 54, 182, 18 and 237; the average gives 85, 85, 85 and 170, so red, green and blue merge; lightness turns all four into 128. Switch methods to watch the preview change, then Convert and Download.',
	tool_image_grayscale_usecases_title: 'When to use it',
	tool_image_grayscale_usecase_1: 'Black-and-white photos for portraits, social posts or a vintage look — try the red channel for a classic film-filter feel.',
	tool_image_grayscale_usecase_2: 'Printing on a mono laser printer or for a newspaper: convert first to see how colours will separate in gray.',
	tool_image_grayscale_usecase_3: 'Checking a chart, logo or UI colour palette: if two colours turn into the same gray, people with colour-vision deficiency may struggle to tell them apart.',
	tool_image_grayscale_usecase_4: 'Preparing scans and documents: grayscale removes colour casts from paper and keeps the file simple.',
	tool_image_grayscale_faq_q1: 'Which grayscale method should I choose?',
	tool_image_grayscale_faq_a1:
		'For photos, start with Rec.601 luminance: it weights green most and blue least, matching how bright colours look. Rec.709 is slightly brighter in greens. Average and lightness are simpler but can flatten colourful images. Use a single channel when you want a deliberate filter effect.',
	tool_image_grayscale_faq_q2: 'Why does my black-and-white photo look flat?',
	tool_image_grayscale_faq_a2:
		'Colours that differ only in hue can end up as the same gray. A red flower on green leaves is the classic case: with the average method both are 85. Switch to luminance or try the red or green channel to separate them.',
	tool_image_grayscale_faq_q3: 'Is the downloaded file a real grayscale image, and is it smaller?',
	tool_image_grayscale_faq_a3:
		'Every pixel has equal R, G and B values, so it displays and prints as pure gray. Browsers save it as a normal RGB file rather than a single-channel one, so the size drop is modest — usually largest for PNG. Use an image editor if you need an 8-bit grayscale colour mode.',
	tool_image_grayscale_faq_q4: 'Can I keep a little colour?',
	tool_image_grayscale_faq_a4:
		'Yes. Lower the strength: 70–80% gives a faded, muted look, and 0% leaves the photo unchanged. Keeping just one colour (selective colour) needs masking, which this page does not do.',
	tool_image_grayscale_faq_q5: 'What happens to transparent PNG images?',
	tool_image_grayscale_faq_a5:
		'Transparency is preserved when you download PNG or WebP. JPEG cannot store transparency, so those areas are filled with the JPEG background colour from Advanced settings.',
	tool_image_grayscale_faq_q6: 'Is this the same as the CSS grayscale() filter or my phone’s mono filter?',
	tool_image_grayscale_faq_a6:
		'CSS grayscale(100%) uses the same weights as the Rec.709 option, but it only changes how a page displays the image; the file stays in colour. Phone filters often add contrast or tone. This tool writes plain gray pixels into a new file.',
	tool_image_grayscale_faq_q7: 'Is my photo uploaded?',
	tool_image_grayscale_faq_a7:
		'No. Decoding, conversion and saving run in this browser tab. Keep the original file if you may want the colour version back — the gray download cannot be turned back into colour.',
	tool_image_grayscale_article: 'Image to grayscale',
	tool_image_grayscale_ref_a_label: 'Wikipedia — Grayscale (colour-to-gray conversion)',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — grayscale() matrix',
};

export default en;
