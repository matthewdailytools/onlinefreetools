/**
 * i18n tool shard (json-schema-validator / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_json_schema_validator_article:
    'Validate JSON against a draft-07 Schema in the browser. Errors show JSON Pointer paths so you can fix model output or feed payloads without uploading data.',
  tool_json_schema_validator_bad_instance: 'Instance is not valid JSON.',
  tool_json_schema_validator_bad_schema: 'Schema is not valid JSON (or failed to compile).',
  tool_json_schema_validator_clear: 'Clear',
  tool_json_schema_validator_copy_done: 'Copied',
  tool_json_schema_validator_copy_errors: 'Copy errors',
  tool_json_schema_validator_desc:
    'Validate JSON against a Schema with JSON Pointer errors — local draft-07 checks.',
  tool_json_schema_validator_description:
    'Validate JSON against a JSON Schema (draft-07) in your browser. Steps: paste Schema and instance, validate, then read JSON Pointer paths for each failure. Example: a product object missing price fails with a missingProperty path. Paste stays in the tab — Ajv loads from this site as library code only.',
  tool_json_schema_validator_draft_note: 'Validator engine: Ajv 8 · JSON Schema draft-07 (default).',
  tool_json_schema_validator_empty: 'Paste both a Schema and an instance JSON first.',
  tool_json_schema_validator_example:
    'Schema requires sku (string) and price (number ≥ 0). Valid instance: {"sku":"A-1","price":9.5}. Failing instance: {"sku":"A-1"} — validation reports a missingProperty for price at the object root (shown as / with the missing key in params).',
  tool_json_schema_validator_example_title: 'Example',
  tool_json_schema_validator_fail: 'Failed — see paths below',
  tool_json_schema_validator_faq_a1:
    'Common causes: missing required keys, wrong types, or additionalProperties:false rejecting extras. Read the JSON Pointer line and the keyword message.',
  tool_json_schema_validator_faq_a2:
    'instancePath is a JSON Pointer into the instance (empty path shows as /). For missing required properties Ajv also lists missingProperty in params.',
  tool_json_schema_validator_faq_a3:
    'This page uses Ajv’s draft-07 dialect by default. Newer drafts (2019-09 / 2020-12) need different Ajv builds and are not selected here.',
  tool_json_schema_validator_faq_a4:
    'Your Schema and JSON text are not uploaded. Loading Ajv from this site only downloads library code, not your paste.',
  tool_json_schema_validator_faq_a5:
    'Paste the Schema and the model JSON, validate, then fix each Pointer path until the status shows pass — useful before sending structured output downstream.',
  tool_json_schema_validator_faq_q1: 'Why did validation fail?',
  tool_json_schema_validator_faq_q2: 'How do I read a JSON Pointer error?',
  tool_json_schema_validator_faq_q3: 'Which draft does this page use?',
  tool_json_schema_validator_faq_q4: 'Does my JSON leave the browser?',
  tool_json_schema_validator_faq_q5: 'How do I check LLM structured output?',
  tool_json_schema_validator_how_body:
    'Paste a JSON Schema on the left and an instance on the right. Validation compiles the Schema with Ajv (draft-07), runs the instance, and lists every error with a JSON Pointer into the instance. Failing and valid samples are one click away; the page loads a failing sample on entry so you see real paths immediately.',
	tool_json_schema_validator_how_item_1: 'Paste a JSON Schema (draft-07) on the left.',
	tool_json_schema_validator_how_item_2: 'Paste the JSON instance on the right.',
	tool_json_schema_validator_how_item_3: 'Click Validate.',
	tool_json_schema_validator_how_item_4: 'Fix each listed error using the JSON Pointer path.',
  tool_json_schema_validator_how_title: 'How it works',
  tool_json_schema_validator_instance_label: 'Instance JSON',
  tool_json_schema_validator_instance_placeholder: '{ "sku": "A-1", "price": 9.5 }',
  tool_json_schema_validator_large_warn:
    'Very large paste (>200k characters combined). Validation may feel slow — try a shorter excerpt.',
  tool_json_schema_validator_need_lib: 'Could not load Ajv. Check your connection and refresh.',
  tool_json_schema_validator_pass: 'Valid — instance matches the Schema',
  tool_json_schema_validator_result_label: 'Result',
  tool_json_schema_validator_rules_body:
    'What Ajv does on this page: parse → compile draft-07 Schema → validate instance → emit Pointer paths for each error.',
  tool_json_schema_validator_rules_item_1:
    'Parse: both panels must be JSON.parse-able. Schema compile errors and instance syntax errors are shown separately from validation failures.',
  tool_json_schema_validator_rules_item_2:
    'Validate: Ajv allErrors collects every failure (not only the first). Each line is instancePath + message (+ missingProperty when relevant).',
  tool_json_schema_validator_rules_item_3:
    'Draft: default dialect is draft-07. Do not assume 2020-12 vocabulary keywords work here.',
  tool_json_schema_validator_rules_item_4:
    'Privacy: paste stays in the tab. This site loads Ajv code only — it is not an upload of your Schema or instance.',
  tool_json_schema_validator_rules_title: 'Rules you should expect',
  tool_json_schema_validator_sample_fail: 'Failing sample',
  tool_json_schema_validator_sample_instance_fail: '{"sku":"A-1"}',
  tool_json_schema_validator_sample_instance_ok: '{"sku":"A-1","price":9.5}',
  tool_json_schema_validator_sample_ok: 'Valid sample',
  tool_json_schema_validator_sample_schema:
    '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["sku","price"],"properties":{"sku":{"type":"string","minLength":1},"price":{"type":"number","minimum":0}},"additionalProperties":false}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'JSON Schema Validator — See path errors on your device',
  tool_json_schema_validator_usecase_1:
    'AI / agents: check whether model structured JSON is missing fields before you trust it in a pipeline.',
  tool_json_schema_validator_usecase_2:
    'Commerce feeds: validate product JSON against a Schema before import or syndication.',
  tool_json_schema_validator_usecase_3:
    'API debugging: paste a request/response body against a Schema fragment extracted from your contract.',
  tool_json_schema_validator_usecases_title: 'Good fits',
  tool_json_schema_validator_validate: 'Validate',
};
export default en;
