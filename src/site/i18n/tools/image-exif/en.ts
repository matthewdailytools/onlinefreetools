/**
 * i18n tool shard (image-exif / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_image_exif_after_strip:
    'Stripped copy downloaded. Tags below reflect the cleaned file (empty if strip succeeded). JPEG strip re-encodes pixels — not bit-identical.',
  tool_image_exif_analyze: 'Analyze',
  tool_image_exif_article:
    'Local EXIF viewer and stripper with privacy-risk highlighting, honest re-encode notes, and post-strip verification.',
  tool_image_exif_choose_file: 'Choose an image',
  tool_image_exif_clear: 'Clear',
  tool_image_exif_col_tag: 'Tag',
  tool_image_exif_col_value: 'Value',
  tool_image_exif_description:
    'View and remove EXIF metadata from photos in your browser. Steps: choose an image, review GPS/camera/datetime tags, then strip and download a re-encoded copy. Example: clear location from a phone JPEG before posting — files stay on your device.',
  tool_image_exif_drop_hint: 'Or drop a JPEG, PNG, WebP, or other photo here. Reading and stripping stay in this tab.',
  tool_image_exif_empty: 'Choose an image first.',
  tool_image_exif_err_decode: 'This browser cannot decode the pixels, so stripping is unavailable. Try JPEG or PNG.',
  tool_image_exif_err_parse: 'Could not read metadata from this file.',
  tool_image_exif_err_strip: 'Stripping failed. Try another format or a smaller image.',
  tool_image_exif_err_verify: 'GPS still appeared after strip — download aborted. Try JPEG export or another browser.',
  tool_image_exif_example:
    'A phone JPEG with GPSLatitude/GPSLongitude and Make shows under GPS and Camera. After Strip & download, re-reading the cleaned file shows no GPS tags. The built-in sample has no EXIF on purpose — use your own photo to see real location fields.',
  tool_image_exif_example_title: 'Example',
  tool_image_exif_faq_a1:
    'No. Parsing and stripping run locally. You can confirm in DevTools Network that the image is not POSTed to a server.',
  tool_image_exif_faq_a2:
    'Not bit-perfect. We re-encode through a canvas. JPEG uses a high quality factor; pixels may change slightly. That trade-off is how browsers reliably drop EXIF.',
  tool_image_exif_faq_a3:
    'After strip we re-parse the output. If GPS remains, we show an error and do not treat it as success. You can also re-open the downloaded file here.',
  tool_image_exif_faq_a4:
    'JPEG is the common case for rich EXIF. Many PNG/WebP files have little or no EXIF. Some HEIC files can be read but not stripped if the browser cannot decode pixels.',
  tool_image_exif_faq_a5:
    'We highlight GPS-related fields and serial/owner-style tags. Always review the full table before sharing.',
  tool_image_exif_faq_a6:
    'The sample is a canvas-made JPEG without EXIF, so you can see the empty state. Use a real camera/phone photo to exercise GPS rows.',
  tool_image_exif_faq_q1: 'Does my photo leave the browser?',
  tool_image_exif_faq_q2: 'Is stripping lossless?',
  tool_image_exif_faq_q3: 'How do I know GPS is gone?',
  tool_image_exif_faq_q4: 'Which formats work?',
  tool_image_exif_faq_q5: 'What counts as a privacy risk tag?',
  tool_image_exif_faq_q6: 'Why is the sample empty?',
  tool_image_exif_group_camera: 'Camera',
  tool_image_exif_group_datetime: 'Date & time',
  tool_image_exif_group_gps: 'GPS / location',
  tool_image_exif_group_other: 'Other tags',
  tool_image_exif_how_body:
    'Pick a photo. The page reads EXIF/GPS and related tags in this tab, groups them, and highlights privacy-sensitive fields. Strip redraws pixels on a canvas (honoring orientation when available) and exports a new file without those tags, then checks that GPS is gone.',
  tool_image_exif_how_title: 'How it works',
  tool_image_exif_need_lib: 'Could not load the metadata library. Check your connection and refresh.',
  tool_image_exif_no_meta: 'No EXIF / GPS tags found in this file.',
  tool_image_exif_preview_label: 'Preview',
  tool_image_exif_risk_badge: 'Privacy',
  tool_image_exif_rules_body:
    'Reading and stripping are different pipelines. Reading inspects metadata; stripping re-encodes pixels so the container no longer carries EXIF.',
  tool_image_exif_rules_item_1:
    'Read: parse IFD0/EXIF/GPS (and related) tags; GPS is shown as decimal latitude/longitude when available.',
  tool_image_exif_rules_item_2:
    'Strip: decode → optional orientation fix → canvas toBlob. This removes EXIF by rewriting the image, not by editing bytes in place.',
  tool_image_exif_rules_item_3:
    'JPEG strip uses a high quality setting but is still a re-encode — not bit-perfect. Prefer strip when privacy matters more than byte identity.',
  tool_image_exif_rules_item_4:
    'Privacy: your file is not uploaded. A CDN may load the open-source parser; that request is library code only.',
  tool_image_exif_rules_title: 'Rules you should expect',
  tool_image_exif_sample: 'Load sample',
  tool_image_exif_status_analyzed: 'Metadata ready — review tags below.',
  tool_image_exif_status_analyzing: 'Reading metadata…',
  tool_image_exif_status_stripped: 'Done — cleaned file downloaded; re-check shows no GPS.',
  tool_image_exif_status_stripping: 'Stripping via re-encode…',
  tool_image_exif_strip: 'Strip & download',
  tool_image_exif_title: 'Photo EXIF Viewer & Remover — GPS, Camera & Local Strip',
  tool_image_exif_usecase_1: 'Social posts: remove GPS before sharing vacation or home photos.',
  tool_image_exif_usecase_2: 'Marketplaces: strip camera and location tags from listing images.',
  tool_image_exif_usecase_3: 'Troubleshooting: confirm whether Make, Model, and DateTimeOriginal were written.',
  tool_image_exif_usecases_title: 'Good fits',
  tool_image_exif_warn_edge: 'Very large dimensions (>8192 px) — expect slowdowns when stripping.',
  tool_image_exif_warn_large: 'Large file (>25 MB) — analysis or strip may be slow.',
};
export default en;
