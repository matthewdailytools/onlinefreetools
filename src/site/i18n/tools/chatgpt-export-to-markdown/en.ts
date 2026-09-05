/**
 * i18n tool shard (chatgpt-export-to-markdown / en).
 * Master H1 is “ChatGPT export to Markdown”; Claude and JSON/CSV stay chips/FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'Turn a ChatGPT export into Markdown on this page. Paste or drop the JSON, get readable turns, and optionally switch to JSON or CSV. Claude exports work on the same canvas. Files stay on your device and are not uploaded to a server.',
	tool_chatgpt_export_to_markdown_choose_file: 'Choose file',
	tool_chatgpt_export_to_markdown_clear: 'Clear',
	tool_chatgpt_export_to_markdown_convert: 'Convert',
	tool_chatgpt_export_to_markdown_copy: 'Copy',
	tool_chatgpt_export_to_markdown_desc:
		'Convert a ChatGPT export to Markdown (JSON/CSV chips) — stays on your device, not uploaded.',
	tool_chatgpt_export_to_markdown_description:
		'ChatGPT export to Markdown: drop or paste an export JSON, map user/assistant turns, and download Markdown. Example: Load sample turns a short conversation into Markdown. JSON and CSV are output chips. Claude chat_messages exports are detected on the same page. Files stay on your device and are not uploaded to a server. This is not a token counter and not a cloud sync tool.',
	tool_chatgpt_export_to_markdown_download: 'Download',
	tool_chatgpt_export_to_markdown_drop_hint: 'Drop a conversations JSON or paste below. Parsing stays in this tab.',
	tool_chatgpt_export_to_markdown_empty: 'Paste or choose an export file first.',
	tool_chatgpt_export_to_markdown_err_none: 'No chat turns found. Check that the JSON has mapping, messages, or chat_messages.',
	tool_chatgpt_export_to_markdown_err_parse: 'Could not parse that JSON. Paste a valid ChatGPT or Claude export.',
	tool_chatgpt_export_to_markdown_example:
		'Load sample inserts a two-turn ChatGPT mapping JSON, converts it to Markdown with User and Assistant headings, and enables Copy and Download.',
	tool_chatgpt_export_to_markdown_example_title: 'Example',
	tool_chatgpt_export_to_markdown_faq_a1:
		'No. The export is read in this tab. Nothing is uploaded to OpenAI, Anthropic, or our servers.',
	tool_chatgpt_export_to_markdown_faq_a2:
		'ChatGPT data-export conversations with a mapping tree are the main path. Flat role/content arrays and Claude chat_messages are also accepted.',
	tool_chatgpt_export_to_markdown_faq_a3:
		'Yes. Claude-style chat_messages arrays (sender + text) are parsed by the same converter, so one paste handles both ChatGPT and Claude exports.',
	tool_chatgpt_export_to_markdown_faq_a4:
		'Empty system nodes and tool shells without text are skipped. Attachments and images are not reconstructed as files.',
	tool_chatgpt_export_to_markdown_faq_a5:
		'Token counting is a different job and is not built into this converter. Use a dedicated token counter when you need it.',
	tool_chatgpt_export_to_markdown_faq_q1: 'Is my chat uploaded?',
	tool_chatgpt_export_to_markdown_faq_q2: 'Which export shapes work?',
	tool_chatgpt_export_to_markdown_faq_q3: 'Does Claude export work here?',
	tool_chatgpt_export_to_markdown_faq_q4: 'What fields are dropped?',
	tool_chatgpt_export_to_markdown_faq_q5: 'Is this a token counter?',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: 'Output format',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body:
		'Export your chat, paste or drop the JSON, convert to Markdown, then copy or download. JSON and CSV are chips on the same job.',
	tool_chatgpt_export_to_markdown_how_item_1:
		'Get a ChatGPT data export (or Claude JSON) — the job is ChatGPT export to Markdown.',
	tool_chatgpt_export_to_markdown_how_item_2: 'Drop the file or paste the JSON into the box.',
	tool_chatgpt_export_to_markdown_how_item_3: 'Leave Markdown selected unless you need the JSON or CSV chip.',
	tool_chatgpt_export_to_markdown_how_item_4: 'Copy or download. Click Load sample to fill the demo.',
	tool_chatgpt_export_to_markdown_how_title: 'How it works',
	tool_chatgpt_export_to_markdown_input_label: 'Export JSON',
	tool_chatgpt_export_to_markdown_input_ph: 'Paste conversations JSON here…',
	tool_chatgpt_export_to_markdown_load_sample: 'Load sample',
	tool_chatgpt_export_to_markdown_output_label: 'Result',
	tool_chatgpt_export_to_markdown_role_assistant: 'Assistant',
	tool_chatgpt_export_to_markdown_role_system: 'System',
	tool_chatgpt_export_to_markdown_role_tool: 'Tool',
	tool_chatgpt_export_to_markdown_role_user: 'User',
	tool_chatgpt_export_to_markdown_rules_body:
		'Export conversion needs a field map, a Markdown default, and clear privacy about local processing.',
	tool_chatgpt_export_to_markdown_rules_item_1:
		'Default output is Markdown with ## User / ## Assistant sections and an optional # title.',
	tool_chatgpt_export_to_markdown_rules_item_2:
		'ChatGPT mapping trees, flat role/content arrays, and Claude chat_messages are parsed on one page.',
	tool_chatgpt_export_to_markdown_rules_item_3:
		'JSON and CSV chips re-emit the same turns for pipelines or spreadsheets.',
	tool_chatgpt_export_to_markdown_rules_item_4:
		'Vendor formats change. If parsing fails, paste the raw JSON and check the mapping FAQ.',
	tool_chatgpt_export_to_markdown_rules_title: 'Rules you should expect',
	tool_chatgpt_export_to_markdown_status_copied: 'Copied to clipboard.',
	tool_chatgpt_export_to_markdown_status_done: 'Ready — {n} turns ({source}).',
	tool_chatgpt_export_to_markdown_status_working: 'Parsing export…',
	tool_chatgpt_export_to_markdown_title: 'ChatGPT export to Markdown',
	tool_chatgpt_export_to_markdown_usecase_1:
		'Archive today’s ChatGPT export as Markdown before you delete the thread.',
	tool_chatgpt_export_to_markdown_usecase_2:
		'Switch to CSV when you need role/content columns for a spreadsheet.',
	tool_chatgpt_export_to_markdown_usecase_3:
		'Drop a Claude chat_messages JSON here; the same converter maps those turns to Markdown.',
	tool_chatgpt_export_to_markdown_usecases_title: 'Good fits',
};

export default en;
