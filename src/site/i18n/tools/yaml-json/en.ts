/**
 * i18n tool shard (yaml-json / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_yaml_json_article:
    'Bidirectional YAML ↔ JSON with explicit typing rules, multi-document policy, and honest local-processing notes. Built for config interchange, not a second thin URL.',
  tool_yaml_json_clear: 'Clear',
  tool_yaml_json_convert: 'Convert',
  tool_yaml_json_copy_done: 'Copied',
  tool_yaml_json_copy_json: 'Copy JSON',
  tool_yaml_json_copy_yaml: 'Copy YAML',
  tool_yaml_json_description:
    'Convert YAML to JSON or JSON to YAML in your browser. Steps: pick a direction, paste config, optionally enable JSON-safe types, then copy or download. Multi-document YAML (`---`) becomes a JSON array. Example: turn a short service map into indented JSON for an API client — paste stays local.',
  tool_yaml_json_dir_label: 'Conversion direction',
  tool_yaml_json_download_json: 'Download JSON',
  tool_yaml_json_download_yaml: 'Download YAML',
  tool_yaml_json_empty: 'Paste some input first.',
  tool_yaml_json_example:
    'YAML `name: demo` + list `items: [a, b]` becomes JSON `{"name":"demo","items":["a","b"]}`. JSON `{"title":"Hello","count":2}` dumps to indented YAML. Boundary: bare `flag: yes` becomes boolean true under DEFAULT schema; enable JSON-safe types to keep the string "yes".',
  tool_yaml_json_example_title: 'Example',
  tool_yaml_json_faq_a1:
    'Under the default js-yaml schema, often yes — unquoted yes/no/on/off can become booleans. Tick “JSON-safe types” to keep those scalars as strings unless they are explicitly typed.',
  tool_yaml_json_faq_a2:
    'Documents separated by --- are parsed with loadAll. One document becomes one JSON value; two or more become a JSON array. We do not drop documents after the first.',
  tool_yaml_json_faq_a3:
    'Conversion stays in the tab. A CDN may serve js-yaml; that request downloads code only — it is not an upload of your YAML or JSON text.',
  tool_yaml_json_faq_a4:
    'No. Comments never survive JSON. Anchors expand into repeated values. Dumping JSON back to YAML will not restore original comments or anchor names.',
  tool_yaml_json_faq_a5:
    'Invalid YAML raises a parser mark with line and column when available. Invalid JSON is reported by JSON.parse without YAML-style marks.',
  tool_yaml_json_faq_q1: 'Will bare yes or no become a boolean?',
  tool_yaml_json_faq_q2: 'How do you handle multi-document YAML?',
  tool_yaml_json_faq_q3: 'Does my paste leave the browser?',
  tool_yaml_json_faq_q4: 'Can I round-trip without losing anything?',
  tool_yaml_json_faq_q5: 'Where do error line numbers come from?',
  tool_yaml_json_how_body:
    'Choose YAML → JSON or JSON → YAML. Conversion runs with js-yaml in this tab. Multi-document streams separated by --- become a JSON array; a single document stays a single JSON value. Errors from YAML include line and column when the parser provides a mark.',
  tool_yaml_json_how_title: 'How it works',
  tool_yaml_json_indent_2: '2 spaces',
  tool_yaml_json_indent_4: '4 spaces',
  tool_yaml_json_indent_label: 'Indent',
  tool_yaml_json_indent_minify: 'Minify JSON',
  tool_yaml_json_json_input_label: 'JSON input',
  tool_yaml_json_json_output_label: 'JSON output',
  tool_yaml_json_json_placeholder: '{\\n  "title": "Hello",\\n  "count": 2\\n}',
  tool_yaml_json_json_safe: 'JSON-safe types (keep bare yes/no as strings)',
  tool_yaml_json_large_warn: 'Very large paste (>200k characters). Conversion may feel slow — try a shorter excerpt.',
  tool_yaml_json_need_lib: 'Could not load js-yaml. Check your connection and refresh.',
  tool_yaml_json_rules_body:
    'What to expect when you convert: how unquoted values are typed, how multi-document YAML maps to JSON, and where a round-trip can lose comments or formatting.',
  tool_yaml_json_rules_item_1:
    'Typing: with DEFAULT schema, bare yes/no/on/off and some date-like scalars may become booleans or other types. JSON-safe schema keeps unquoted scalars as strings unless explicitly typed.',
  tool_yaml_json_rules_item_2:
    'Multi-doc: loadAll — one document → that JSON value; two or more → a JSON array. We do not silently keep only the first document.',
  tool_yaml_json_rules_item_3:
    'Loss on round-trip: comments disappear (JSON has none); anchors/aliases expand into duplicated values; key order and style may change after dump.',
  tool_yaml_json_rules_item_4:
    'Privacy: your paste is not uploaded. Fetching js-yaml from a CDN only downloads library code, not your config text.',
  tool_yaml_json_rules_title: 'Rules you should expect',
  tool_yaml_json_sample: 'Load sample',
  tool_yaml_json_sample_json: '{\\n  "title": "Hello",\\n  "count": 2\\n}',
  tool_yaml_json_sample_yaml: 'name: demo\\nenabled: true\\nitems:\\n  - a\\n  - b',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_title: 'YAML ↔ JSON Converter — Types, Multi-doc & Local',
  tool_yaml_json_usecase_1: 'DevOps: turn multi-resource Kubernetes YAML (--- separated) into a JSON array for scripts.',
  tool_yaml_json_usecase_2: 'Developers: reshape an API JSON payload into readable YAML before editing config by hand.',
  tool_yaml_json_usecase_3: 'Data / AI pipelines: bridge human-edited YAML parameters with JSON-only tooling.',
  tool_yaml_json_usecases_title: 'Good fits',
  tool_yaml_json_yaml_input_label: 'YAML input',
  tool_yaml_json_yaml_output_label: 'YAML output',
  tool_yaml_json_yaml_placeholder: 'name: demo\\nenabled: true\\nitems:\\n  - a\\n  - b',
};
export default en;
