/**
 * i18n (json-diff-checker-online / en).
 * H1: JSON diff checker online — not the short head term JSON Diff Checker.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'Paste two JSON values and list path-level adds, deletes, and changes. Key order is ignored by default. Paste stays on your device and is not uploaded. YAML and XML are not parsed here.',
	tool_json_diff_checker_online_array_as_set: 'Treat arrays as sets (order ignored)',
	tool_json_diff_checker_online_clear: 'Clear',
	tool_json_diff_checker_online_compare: 'Compare',
	tool_json_diff_checker_online_desc:
		'JSON diff checker online: compare two JSON values by path, ignore key order by default — paste stays on the device.',
	tool_json_diff_checker_online_description:
		'JSON diff checker online in your browser. Process: paste two JSON values, parse them, optionally ignore object key order (on by default), then list path-level adds, deletes, and changes. Paste stays on your device and is not uploaded. Example: {"b":1,"a":2} vs {"a":2,"b":1} matches; changing price reports /price. Not a YAML or XML checker.',
	tool_json_diff_checker_online_empty: 'Paste JSON on both sides, or load the sample.',
	tool_json_diff_checker_online_err_bad_a: 'Left side is not valid JSON.',
	tool_json_diff_checker_online_err_bad_b: 'Right side is not valid JSON.',
	tool_json_diff_checker_online_example:
		'The sample left object lists sku then price; the right object lists price first and changes 9.5 to 10. With ignore key order on, only /price is reported. First paint already shows that path.',
	tool_json_diff_checker_online_example_title: 'Example',
	tool_json_diff_checker_online_faq_a1:
		'No. Text is parsed in this tab with JSON.parse. Nothing is uploaded to our servers.',
	tool_json_diff_checker_online_faq_a2:
		'By default, {"a":1,"b":2} and {"b":2,"a":1} are treated as the same object. Turn off “Ignore key order” if you care about the written order of keys.',
	tool_json_diff_checker_online_faq_a3:
		'Arrays are lists by index. [1,2] vs [2,1] is a change. Enable “Treat arrays as sets” only when order should not matter.',
	tool_json_diff_checker_online_faq_a4:
		'People also search json diff checker without “online”. Same job. YAML or XML needs another page (convert YAML first if you must).',
	tool_json_diff_checker_online_faq_q1: 'Is my JSON uploaded?',
	tool_json_diff_checker_online_faq_q2: 'Does key order count as a difference?',
	tool_json_diff_checker_online_faq_q3: 'How are arrays compared?',
	tool_json_diff_checker_online_faq_q4: 'Is this the same as a JSON Diff Checker, YAML, or XML diff?',
	tool_json_diff_checker_online_how_body:
		'Paste two JSON documents and read path-level changes. Key order is ignored unless you turn that off.',
	tool_json_diff_checker_online_how_item_1: 'Paste the original JSON on the left.',
	tool_json_diff_checker_online_how_item_2: 'Paste the revised JSON on the right.',
	tool_json_diff_checker_online_how_item_3: 'Leave Ignore key order on unless you need written key order.',
	tool_json_diff_checker_online_how_item_4: 'Compare lists paths; Load sample already ran on first paint.',
	tool_json_diff_checker_online_how_title: 'How it works',
	tool_json_diff_checker_online_ignore_keys: 'Ignore object key order',
	tool_json_diff_checker_online_label_a: 'Original JSON',
	tool_json_diff_checker_online_label_b: 'Revised JSON',
	tool_json_diff_checker_online_load_sample: 'Load sample',
	tool_json_diff_checker_online_no_diff: 'No semantic differences under the current options.',
	tool_json_diff_checker_online_op_added: 'added',
	tool_json_diff_checker_online_op_changed: 'changed',
	tool_json_diff_checker_online_op_removed: 'removed',
	tool_json_diff_checker_online_result_label: 'Path differences',
	tool_json_diff_checker_online_rules_body:
		'After JSON.parse, objects can be compared with sorted keys so written key order does not fake a change.',
	tool_json_diff_checker_online_rules_item_1:
		'Invalid JSON is reported per side. Duplicate keys follow JSON.parse (last key wins in engines that allow it).',
	tool_json_diff_checker_online_rules_item_2:
		'Ignore key order (default on) sorts object keys before walking paths.',
	tool_json_diff_checker_online_rules_item_3:
		'Arrays are index lists unless you treat them as sets (then elements are sorted by JSON stringify).',
	tool_json_diff_checker_online_rules_item_4:
		'YAML and XML are not parsed. Convert YAML on the related YAML ↔ JSON page first if needed.',
	tool_json_diff_checker_online_rules_title: 'Rules you should expect',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '{added} added, {removed} removed, {changed} changed',
	tool_json_diff_checker_online_title: 'JSON diff checker online',
	tool_json_diff_checker_online_usecase_1: 'API samples: two response bodies where key order from pretty-print should not matter.',
	tool_json_diff_checker_online_usecase_2: 'Config snapshots: see which paths actually changed between deploys.',
	tool_json_diff_checker_online_usecase_3: 'Model JSON: compare structured output before sending it downstream.',
	tool_json_diff_checker_online_usecases_title: 'Good fits',
};

export default en;
