/**
 * i18n tool shard (images-to-ppt / en).
 * 多图转 PowerPoint 英文母版：一图一页 PPTX，可选 16:9/4:3、contain/cover、背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 英文文案字典。 */
const en: SiteLangDict = {
	tool_images_to_ppt_title: 'Images to PowerPoint — Photos to PPTX Slides',
	tool_images_to_ppt_desc: 'Turn local photos into a .pptx with one slide per image.',
	tool_images_to_ppt_description:
		'Convert multiple photos into a PowerPoint (.pptx) deck in your browser—one slide per image, 16:9 or 4:3, contain or cover. Steps: Choose images, Convert to PowerPoint, Download. Example: three photos → three slides. Files never leave this tab.',
	tool_images_to_ppt_choose_files: 'Choose images',
	tool_images_to_ppt_drop_hint: 'Or drop several JPEG, PNG, WebP or GIF files here. Processing stays in this tab.',
	tool_images_to_ppt_convert: 'Convert to PowerPoint',
	tool_images_to_ppt_download: 'Download',
	tool_images_to_ppt_sample: 'Load sample',
	tool_images_to_ppt_clear: 'Clear',
	tool_images_to_ppt_advanced: 'Advanced settings (optional)',
	tool_images_to_ppt_layout_label: 'Slide size',
	tool_images_to_ppt_layout_16x9: 'Widescreen 16:9',
	tool_images_to_ppt_layout_4x3: 'Standard 4:3',
	tool_images_to_ppt_layout_hint: 'Most modern projectors use 16:9. Pick 4:3 for older classroom decks.',
	tool_images_to_ppt_fit_label: 'How images fill the slide',
	tool_images_to_ppt_fit_contain: 'Fit entire image (letterbox)',
	tool_images_to_ppt_fit_cover: 'Fill slide (may crop edges)',
	tool_images_to_ppt_fit_hint: 'Contain keeps every pixel visible. Cover fills the slide and may crop tall or wide photos.',
	tool_images_to_ppt_bg_label: 'Slide background',
	tool_images_to_ppt_bg_hint: 'Shown in the letterbox bands when Fit is set to contain. Default is white.',
	tool_images_to_ppt_progress: 'Building PowerPoint…',
	tool_images_to_ppt_step_encode: 'Encode images',
	tool_images_to_ppt_step_build: 'Build slides',
	tool_images_to_ppt_step_pack: 'Pack PPTX',
	tool_images_to_ppt_encode_step: 'Encoding image {i} of {n}…',
	tool_images_to_ppt_build_step: 'Adding slides to the deck…',
	tool_images_to_ppt_pack_step: 'Packing the .pptx file…',
	tool_images_to_ppt_elapsed: 'Elapsed {s}s',
	tool_images_to_ppt_move_up: 'Move up',
	tool_images_to_ppt_move_down: 'Move down',
	tool_images_to_ppt_remove: 'Remove',
	tool_images_to_ppt_empty: 'Add at least one image first.',
	tool_images_to_ppt_err_decode: 'Could not decode the image. Try JPEG, PNG, or WebP.',
	tool_images_to_ppt_err_convert: 'Could not build the PowerPoint file. Try fewer or smaller images.',
	tool_images_to_ppt_err_lib: 'PPTX library failed to load. Refresh the page and retry.',
	tool_images_to_ppt_warn_large: 'Large file (>25 MB) — conversion may be slow.',
	tool_images_to_ppt_warn_edge: 'An edge exceeds ~8192 px — some browsers may fail.',
	tool_images_to_ppt_warn_animation: 'Animated GIF: only the first frame is used on the slide.',
	tool_images_to_ppt_status_converting: 'Converting to PowerPoint…',
	tool_images_to_ppt_status_done: 'Done — click Download to save the .pptx.',
	tool_images_to_ppt_stats_tpl: '{n} slides → PPTX ready ({bytes})',
	tool_images_to_ppt_how_title: 'How to convert images to PowerPoint',
	tool_images_to_ppt_how_body:
		'Each file in the list becomes one slide. Reorder with the arrows, then convert. Optional settings change slide size, how photos fill the slide, and the letterbox colour.',
	tool_images_to_ppt_how_item_1: 'Choose images or drop JPEG, PNG, WebP or GIF files into the drop zone.',
	tool_images_to_ppt_how_item_2: 'Reorder with Up / Down if the slide order is wrong. Remove any you do not need.',
	tool_images_to_ppt_how_item_3: 'Optionally open Advanced settings to pick 16:9 or 4:3, contain or cover, and a background colour.',
	tool_images_to_ppt_how_item_4: 'Click Convert to PowerPoint, wait for the progress bar, then click Download.',
	tool_images_to_ppt_why_choose_title: 'Why choose our Images to PowerPoint tools',
	tool_images_to_ppt_why_choose_item_1: 'One slide per photo, in the order you set — no cloud upload and no account.',
	tool_images_to_ppt_why_choose_item_2: 'Widescreen 16:9 or classic 4:3, so the deck matches the room projector.',
	tool_images_to_ppt_why_choose_item_3: 'Contain keeps the whole photo; cover fills the slide when you prefer a full-bleed look.',
	tool_images_to_ppt_why_choose_item_4: 'Soft warnings for huge files, giant pixel edges and animated GIFs (first frame only).',
	tool_images_to_ppt_why_choose_item_5: 'A visible progress HUD while each image is encoded and packed into the .pptx.',
	tool_images_to_ppt_rules_title: 'Rules',
	tool_images_to_ppt_rules_body: 'The deck is built with PptxGenJS entirely in this browser tab.',
	tool_images_to_ppt_rules_item_1: 'Default layout is widescreen 16:9; switch to 4:3 in Advanced settings when you need it.',
	tool_images_to_ppt_rules_item_2: 'Slide order follows the list. Use Up / Down before you convert.',
	tool_images_to_ppt_rules_item_3: 'Contain letterboxes with the background colour; cover crops to fill the content box.',
	tool_images_to_ppt_rules_item_4: 'Animated GIFs contribute only the first frame. Titles and transitions are not added — edit those in PowerPoint after download.',
	tool_images_to_ppt_rules_item_5: 'Loading the PPTX library from this site does not upload your photos to our servers.',
	tool_images_to_ppt_example_title: 'Example',
	tool_images_to_ppt_example:
		'Load sample builds three colour-block slides (sample-a, sample-b, sample-c) at 16:9 with contain fit. Convert to PowerPoint finishes in the browser; Download saves images.pptx. Switch to 4:3 or cover and convert again to compare the crop.',
	tool_images_to_ppt_usecases_title: 'When to use it',
	tool_images_to_ppt_usecase_1: 'Turning a phone photo set into a quick talk deck without opening desktop PowerPoint first.',
	tool_images_to_ppt_usecase_2: 'Product walkthroughs where each screenshot needs its own full-bleed or letterboxed slide.',
	tool_images_to_ppt_usecase_3: 'Classroom or field photos that must match a 4:3 projector still in use.',
	tool_images_to_ppt_usecase_4: 'Building a draft deck from images before you add titles, notes and animations in PowerPoint or LibreOffice Impress.',
	tool_images_to_ppt_faq_q1: 'Are my photos uploaded?',
	tool_images_to_ppt_faq_a1:
		'No. Decoding, slide layout and PPTX packing all run in your browser tab. The only network request is loading the PptxGenJS script from this site’s vendor folder.',
	tool_images_to_ppt_faq_q2: 'Do I need Microsoft PowerPoint installed?',
	tool_images_to_ppt_faq_a2:
		'No. Any app that opens .pptx works — PowerPoint, Google Slides (File → Import), LibreOffice Impress, Keynote and others.',
	tool_images_to_ppt_faq_q3: 'Can I add titles or animations here?',
	tool_images_to_ppt_faq_a3:
		'Not on this page. Export the photo slides first, then open the file in PowerPoint (or Impress) to add text, transitions and speaker notes.',
	tool_images_to_ppt_faq_q4: 'Images to PowerPoint vs images to PDF?',
	tool_images_to_ppt_faq_a4:
		'PPTX stays editable as slides. PDF is fixed for handouts and printing. Use the Images to PDF tool when you need a document, not a deck.',
	tool_images_to_ppt_faq_q5: 'Contain or cover — which should I pick?',
	tool_images_to_ppt_faq_a5:
		'Contain (default) shows the whole photo with letterbox bands in the background colour. Cover fills the slide and may crop edges — useful for full-bleed product shots.',
	tool_images_to_ppt_faq_q6: 'What happens to animated GIFs?',
	tool_images_to_ppt_faq_a6:
		'Only the first frame is placed on the slide. PowerPoint does not play multi-frame GIFs as animations from this export.',
	tool_images_to_ppt_faq_q7: 'Why is conversion slow or failing?',
	tool_images_to_ppt_faq_a7:
		'Very large files (>25 MB) or edges over ~8192 px can stress the browser. Resize or compress the images, then convert again with fewer files if needed.',
	tool_images_to_ppt_article: 'Convert images to a PowerPoint PPTX deck in the browser',
	tool_images_to_ppt_references: 'PptxGenJS and MDN Blob references for the client-side export path.',
	tool_images_to_ppt_ref_a_label: 'PptxGenJS — JavaScript PowerPoint library',
	tool_images_to_ppt_ref_b_label: 'MDN — Blob',
};

export default en;
