/**
 * i18n tool shard (create-zip-file / en).
 * Master H1 is the locked long-tail “Create zip file”; selling points stay in description.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_create_zip_file_article:
		'Choose files in this tab, pack them into a ZIP, and download the archive. Files stay on your device and are not uploaded to a server. Gzip is a secondary single-file mode.',
	tool_create_zip_file_choose_files: 'Choose files',
	tool_create_zip_file_clear: 'Clear',
	tool_create_zip_file_desc:
		'Create a zip file in your browser from several files or a folder path, then download it — nothing is uploaded.',
	tool_create_zip_file_description:
		'Create zip file: choose files (folder names are kept when the browser reports a relative path), pick ZIP, and download. Files stay on your device and are not uploaded to a server. Example: the sample packs notes.txt, photo.png, and docs/readme.md into sample.zip. Gzip is a secondary single-file mode. Password ZIP is a FAQ boundary, not a first-screen promise.',
	tool_create_zip_file_download: 'Download ZIP',
	tool_create_zip_file_drop_hint: 'Drop files here. Folder drops keep relative paths when the browser provides them.',
	tool_create_zip_file_empty: 'Choose at least one file first.',
	tool_create_zip_file_err_fflate: 'ZIP engine failed to load. Check your network and retry.',
	tool_create_zip_file_err_gzip_many: 'Gzip packs one file. Switch to ZIP for several files, or keep a single file.',
	tool_create_zip_file_err_too_large: 'This set is too large for a safe in-browser pack. Remove some files and retry.',
	tool_create_zip_file_example:
		'Load sample packs notes.txt, a tiny photo.png, and docs/readme.md, then builds sample.zip with those three paths. Download ZIP is enabled on the first screen.',
	tool_create_zip_file_example_title: 'Example',
	tool_create_zip_file_faq_a1:
		'No. Bytes are read in this browser tab. The ZIP engine script load from this site, but your files are not uploaded to our servers.',
	tool_create_zip_file_faq_a2:
		'If the browser reports webkitRelativePath (folder drop or directory picker), those paths are stored as ZIP entries after ../ is stripped. That is the zip-folder-online job on this page.',
	tool_create_zip_file_faq_a3:
		'This page does not crack or build AES-encrypted ZIP as a first-screen feature. Password ZIP tools exist elsewhere; here it is a FAQ boundary only.',
	tool_create_zip_file_faq_a4:
		'Use Gzip only for a single file when you need a .gz stream. Several files belong in ZIP. Gzip is not a PDF compressor.',
	tool_create_zip_file_faq_a5:
		'Very large sets can run out of memory in the tab. The page warns and stops rather than freezing the browser. Unzip lives on the related Unzip File page.',
	tool_create_zip_file_faq_q1: 'Are my files uploaded?',
	tool_create_zip_file_faq_q2: 'Can I zip a folder online?',
	tool_create_zip_file_faq_q3: 'Does this create a zip with a password?',
	tool_create_zip_file_faq_q4: 'When should I use Gzip instead of ZIP?',
	tool_create_zip_file_faq_q5: 'What about huge files, and where do I unzip?',
	tool_create_zip_file_file_count_label: 'Files',
	tool_create_zip_file_how_body:
		'Pick the files you want to send as one archive, keep folder names when the browser gives them, then download the ZIP. Gzip is a separate one-file mode.',
	tool_create_zip_file_how_item_1: 'Choose the files you need to send as one zip — that is the job, not a second unzipper.',
	tool_create_zip_file_how_item_2: 'Drop a folder if your browser keeps relative paths; ../ segments are stripped before packing.',
	tool_create_zip_file_how_item_3: 'Leave ZIP selected (the default), then download. Load sample already packs three files on first paint.',
	tool_create_zip_file_how_item_4: 'Switch to Gzip only when you have one file and want a .gz. Several files stay on ZIP.',
	tool_create_zip_file_how_title: 'How it works',
	tool_create_zip_file_level_label: 'Compression level',
	tool_create_zip_file_load_sample: 'Load sample',
	tool_create_zip_file_mode_gzip: 'Gzip (one file)',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: 'Packed size',
	tool_create_zip_file_rules_body:
		'Packing in the browser needs path cleanup, a ZIP vs Gzip split, a size cap, and a clear password boundary.',
	tool_create_zip_file_rules_item_1:
		'ZIP uses DEFLATE via fflate zipSync. Level 0–9 is optional; the sample uses a light level so first paint stays fast.',
	tool_create_zip_file_rules_item_2:
		'Entry names come from the file name or webkitRelativePath. Leading slashes and ../ segments are removed.',
	tool_create_zip_file_rules_item_3:
		'Gzip mode calls gzipSync on exactly one file. More than one file must use ZIP.',
	tool_create_zip_file_rules_item_4:
		'Password-protected ZIP is not a first-screen output. This page does not recover or crack encrypted archives.',
	tool_create_zip_file_rules_title: 'Rules you should expect',
	tool_create_zip_file_status_done: 'Archive ready — download or replace the files.',
	tool_create_zip_file_status_packing: 'Packing…',
	tool_create_zip_file_title: 'Create zip file',
	tool_create_zip_file_usecase_1:
		'Email: pack a few attachments into one zip before sending, without uploading the files to a packing site.',
	tool_create_zip_file_usecase_2:
		'Homework: zip a folder of notes and a screenshot when the teacher asked for one archive.',
	tool_create_zip_file_usecase_3:
		'Small source drop: pack readme plus a couple of files, then hash the zip on the related File Hash page.',
	tool_create_zip_file_usecases_title: 'Good fits',
};

export default en;
