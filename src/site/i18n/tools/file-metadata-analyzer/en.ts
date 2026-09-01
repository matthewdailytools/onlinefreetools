/**
 * i18n tool shard (file-metadata-analyzer / en).
 * Master H1: File metadata analyzer; deep EXIF editing points to related image-exif.
 */
import type { SiteLangDict } from '../../../types';

/** 英文母版文案键表。 */
const en: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: 'Analyzing…',
	tool_file_metadata_analyzer_article:
		'Drop or choose a local file to see name, size, MIME type, and last modified time. Images add width×height; audio and video add duration when the browser can decode them. Optional magic-byte hints flag common containers. Files stay on your device and are not uploaded to a server.',
	tool_file_metadata_analyzer_choose_file: 'Choose file',
	tool_file_metadata_analyzer_clear: 'Clear',
	tool_file_metadata_analyzer_decode_fail: 'Could not decode extra media fields — basic file info is still shown.',
	tool_file_metadata_analyzer_desc:
		'Inspect local file metadata — size, type, dimensions, duration. Stays on your device, not uploaded.',
	tool_file_metadata_analyzer_description:
		'File metadata analyzer: drop or pick a file to read name, byte size, MIME type, and last modified. Images show width×height; video/audio show duration when decodable. Magic-byte hints cover PNG, JPEG, GIF, WebP, PDF, ZIP, and MP4. Example: the sample 16×16 PNG loads on first paint. For deep EXIF editing, use the related EXIF tool. Files stay on your device and are not uploaded to a server.',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} px',
	tool_file_metadata_analyzer_drop_hint: 'Or drop a file here. Analysis stays in this tab.',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: 'Choose or drop a file first.',
	tool_file_metadata_analyzer_example:
		'Load sample builds a 16×16 PNG named sample-icon.png in memory. The table shows about 100+ bytes, image/png, today’s modified time, dimensions 16 × 16 px, and magic hint PNG — without you uploading anything.',
	tool_file_metadata_analyzer_example_title: 'Example',
	tool_file_metadata_analyzer_faq_a1:
		'No. The file is read with the File API in this tab. Nothing is POSTed to our servers — check DevTools Network if you like.',
	tool_file_metadata_analyzer_faq_a2:
		'This page shows container basics (name, size, MIME, modified) plus image dimensions or A/V duration when decodable. The EXIF tool reads or strips camera EXIF tags — use that when you need GPS, shutter, or removal workflows.',
	tool_file_metadata_analyzer_faq_a3:
		'Browsers often leave file.type empty for uncommon extensions. We still show size and name, and magic-byte hints may suggest PNG/JPEG/PDF/ZIP/MP4 from the first bytes.',
	tool_file_metadata_analyzer_faq_a4:
		'Some codecs or truncated files fail in <video>/<audio> or createImageBitmap. You still get File API fields; the decode note row explains the miss.',
	tool_file_metadata_analyzer_faq_a5:
		'We read the first ~12 bytes and match well-known signatures (PNG, JPEG, GIF, WebP, PDF, ZIP, MP4 ftyp). This is a hint, not a full file-type database.',
	tool_file_metadata_analyzer_faq_q1: 'Is my file uploaded?',
	tool_file_metadata_analyzer_faq_q2: 'How is this different from the EXIF tool?',
	tool_file_metadata_analyzer_faq_q3: 'Why is MIME type empty?',
	tool_file_metadata_analyzer_faq_q4: 'Why are dimensions or duration missing?',
	tool_file_metadata_analyzer_faq_q5: 'What are magic-byte hints?',
	tool_file_metadata_analyzer_field_decode_note: 'Decode note',
	tool_file_metadata_analyzer_field_dimensions: 'Dimensions',
	tool_file_metadata_analyzer_field_duration: 'Duration',
	tool_file_metadata_analyzer_field_magic: 'Magic-byte hint',
	tool_file_metadata_analyzer_field_modified: 'Last modified',
	tool_file_metadata_analyzer_field_name: 'File name',
	tool_file_metadata_analyzer_field_size: 'Size (bytes)',
	tool_file_metadata_analyzer_field_size_human: 'Size (human)',
	tool_file_metadata_analyzer_field_type: 'MIME / type',
	tool_file_metadata_analyzer_how_body:
		'Pick or drop one local file. We list core File fields, then deepen images with width×height and audio/video with duration when the browser can decode them.',
	tool_file_metadata_analyzer_how_item_1: 'Drop a file on the zone or click Choose file.',
	tool_file_metadata_analyzer_how_item_2: 'Read name, byte size, human size, MIME type, and last modified in the table.',
	tool_file_metadata_analyzer_how_item_3: 'For images, check width×height; for audio/video, check duration (and video frame size when available).',
	tool_file_metadata_analyzer_how_item_4: 'Use Load sample to replay the built-in PNG demo, or Clear to reset.',
	tool_file_metadata_analyzer_how_title: 'How it works',
	tool_file_metadata_analyzer_load_sample: 'Load sample',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'File metadata results',
	tool_file_metadata_analyzer_rules_body:
		'Field sources and limits — what this analyzer guarantees vs what needs a specialist tool.',
	tool_file_metadata_analyzer_rules_item_1:
		'Name, size, type, and lastModified come straight from the File object in your browser.',
	tool_file_metadata_analyzer_rules_item_2:
		'Image dimensions use createImageBitmap when available, otherwise an Image element — same tab, no upload.',
	tool_file_metadata_analyzer_rules_item_3:
		'Audio/video duration uses a muted media element with preload=metadata; exotic codecs may fail gracefully.',
	tool_file_metadata_analyzer_rules_item_4:
		'Magic-byte hints are shallow container checks — not a replacement for file-hash integrity or deep EXIF tables.',
	tool_file_metadata_analyzer_rules_title: 'Rules you should expect',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: 'Analysis complete.',
	tool_file_metadata_analyzer_title: 'File metadata analyzer',
	tool_file_metadata_analyzer_usecase_1:
		'Confirm an export is really 1920×1080 before you upload it to a CMS or ad platform.',
	tool_file_metadata_analyzer_usecase_2:
		'Check how long a voice memo or screen recording is without opening a desktop media inspector.',
	tool_file_metadata_analyzer_usecase_3:
		'Spot a suspicious extension — compare reported MIME with magic-byte hints before you trust a download.',
	tool_file_metadata_analyzer_usecases_title: 'Good fits',
	tool_file_metadata_analyzer_waiting: 'Choose a file or load the sample to see metadata.',
};

export default en;
