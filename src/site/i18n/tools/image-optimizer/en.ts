/**
 * i18n tool shard (image-optimizer / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_image_optimizer_article:
    'Local WASM image optimizer with codec choice, quality/effort knobs, optional max-edge resize, before/after slider compare, and honest AVIF timing.',
  tool_image_optimizer_avif_slow: 'AVIF can take a while on large photos — you can cancel.',
  tool_image_optimizer_cancel: 'Cancel',
  tool_image_optimizer_cancelled: 'Cancelled.',
  tool_image_optimizer_choose_file: 'Choose an image',
  tool_image_optimizer_clear: 'Clear',
  tool_image_optimizer_codec_avif: 'AVIF',
  tool_image_optimizer_codec_label: 'Codec / output',
  tool_image_optimizer_codec_mozjpeg: 'MozJPEG (JPEG)',
  tool_image_optimizer_codec_oxipng: 'OxiPNG (PNG)',
  tool_image_optimizer_codec_webp: 'WebP',
  tool_image_optimizer_description:
    'Optimize images for the web in your browser with MozJPEG, WebP, AVIF, or OxiPNG. Steps: choose a photo, load the optimizer engine, pick a codec and settings, compare before/after with the slider, then download. Example: turn a large hero JPEG into a smaller WebP for faster pages — files stay on your device after you load the engine.',
  tool_image_optimizer_download: 'Download',
  tool_image_optimizer_drop_hint: 'Or drop a JPEG, PNG, or WebP here. Optimization stays in this tab after the engine loads.',
  tool_image_optimizer_effort_label: 'Effort / speed',
  tool_image_optimizer_empty: 'Choose an image first.',
  tool_image_optimizer_engine_failed: 'Engine failed to load. Check your connection and try again.',
  tool_image_optimizer_engine_loading: 'Loading optimizer engine…',
  tool_image_optimizer_engine_needed: 'Load the optimizer engine before encoding.',
  tool_image_optimizer_engine_ready: 'Engine ready — pick a codec and optimize.',
  tool_image_optimizer_err_decode: 'Could not decode that file. Try JPEG, PNG, or WebP.',
  tool_image_optimizer_err_encode: 'Encoding failed. Try another codec, lower effort, or a smaller image.',
  tool_image_optimizer_example:
    'Same ~3–4 MB phone JPEG: MozJPEG often lands smaller than a casual browser JPEG; WebP commonly trims further at a similar look; AVIF may shrink more again but can take seconds on a large frame. Numbers vary by content — treat them as order-of-magnitude, then trust the slider on your file.',
  tool_image_optimizer_example_title: 'Example',
  tool_image_optimizer_faq_a1:
    'The compressor is a fast canvas resize/quality pass (great for target KB). This page loads a dedicated engine so you can choose MozJPEG, WebP, AVIF, or OxiPNG and compare with a slider.',
  tool_image_optimizer_faq_a2:
    'No. After the engine loads, decode and encode stay in this tab. Confirm in DevTools Network that the image is not POSTed.',
  tool_image_optimizer_faq_a3:
    'The codecs are large. We wait for a click so the first paint stays light — you download them only when you need codec-level optimize.',
  tool_image_optimizer_faq_a4:
    'AVIF encoding is CPU-heavy, especially on big photos. We show progress and let you cancel instead of pretending it is instant.',
  tool_image_optimizer_faq_a5:
    'Animated inputs become a still of the first frame. Re-encoding usually strips EXIF — inspect tags with the EXIF tool first if you need them.',
  tool_image_optimizer_faq_a6:
    'Use the converter when you mainly need to change MIME (including JPEG matte for transparency). Use this optimizer when smaller files and codec control matter more than a quick format swap.',
  tool_image_optimizer_faq_q1: 'How is this different from the image compressor?',
  tool_image_optimizer_faq_q2: 'Do my files leave the browser?',
  tool_image_optimizer_faq_q3: 'Why do I have to load an engine first?',
  tool_image_optimizer_faq_q4: 'Why is AVIF so slow?',
  tool_image_optimizer_faq_q5: 'What about animation and EXIF?',
  tool_image_optimizer_faq_q6: 'When should I use the format converter instead?',
  tool_image_optimizer_how_body:
    'Choose a photo, load the optimizer engine once, pick MozJPEG, WebP, AVIF, or OxiPNG, tune quality or effort, optionally cap the longest side, then slide to compare before and after. Encoding runs in this tab; download when the size and look feel right. Prefer the quick compressor when you only need a fast size cut without codec controls.',
  tool_image_optimizer_how_title: 'How it works',
  tool_image_optimizer_load_engine: 'Load optimizer engine',
  tool_image_optimizer_max_edge_label: 'Max edge',
  tool_image_optimizer_optimize: 'Optimize',
  tool_image_optimizer_optimizing: 'Optimizing…',
  tool_image_optimizer_preview_after: 'After',
  tool_image_optimizer_preview_before: 'Before',
  tool_image_optimizer_quality_label: 'Quality',
  tool_image_optimizer_ratio_tpl: '{from} → {to} ({pct}% smaller)',
  tool_image_optimizer_resize_on: 'Limit longest side',
  tool_image_optimizer_rules_body:
    'Codecs trade size, quality, transparency, and time differently. Use this checklist before you chase the smallest file.',
  tool_image_optimizer_rules_item_1:
    'MozJPEG: lossy JPEG with stronger compression than a typical browser JPEG export — good when you still need .jpg compatibility.',
  tool_image_optimizer_rules_item_2:
    'WebP: usually smaller photos than JPEG at similar look; supports transparency. Solid default for many sites.',
  tool_image_optimizer_rules_item_3:
    'AVIF: often the smallest lossy files, but encoding is slower — progress and cancel are expected, not optional.',
  tool_image_optimizer_rules_item_4:
    'OxiPNG: lossless PNG shrink. Photos stay large; best for sharp UI with alpha. Re-encode usually drops EXIF; bytes never leave this tab.',
  tool_image_optimizer_rules_title: 'Rules you should expect',
  tool_image_optimizer_sample: 'Load sample',
  tool_image_optimizer_stats_tpl: '{codec} · {w}×{h} · {bytes} · {ms} ms',
  tool_image_optimizer_status_done: 'Done — check the slider and sizes, then download.',
  tool_image_optimizer_title: 'Image Optimizer — Smaller files with on-device encoders',
  tool_image_optimizer_usecase_1: 'Ship a hero or product shot as WebP/AVIF after checking look with the compare slider.',
  tool_image_optimizer_usecase_2: 'Keep JPEG delivery but use MozJPEG when browser-default JPEG still feels too heavy.',
  tool_image_optimizer_usecase_3: 'Shrink transparent UI PNGs with OxiPNG or near-lossless WebP before handing assets off.',
  tool_image_optimizer_usecases_title: 'Good fits',
  tool_image_optimizer_warn_animation: 'Animated files: only the first frame is optimized.',
  tool_image_optimizer_warn_edge: 'Very large dimensions (>8192 px) — expect slowdowns; consider limiting the longest side.',
  tool_image_optimizer_warn_large: 'Large file (>25 MB) — encoding may be slow or run out of memory.',
};
export default en;
