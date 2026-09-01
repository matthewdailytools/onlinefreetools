/**
 * i18n tool shard (curl-to-fetch / en).
 * Master locale: H1 "curl to fetch"; paste cURL → JavaScript fetch snippet.
 */
import type { SiteLangDict } from '../../../types';

/** English copy for curl-to-fetch tool page. */
const en: SiteLangDict = {
	tool_curl_to_fetch_article:
		'Paste a cURL command from API docs or your terminal history and get a JavaScript fetch snippet — method, headers, JSON body, Basic auth, and -G query strings. Parsing runs in your browser; nothing is uploaded.',
	tool_curl_to_fetch_clear: 'Clear',
	tool_curl_to_fetch_convert: 'Convert',
	tool_curl_to_fetch_copy: 'Copy',
	tool_curl_to_fetch_copy_done: 'Copied',
	tool_curl_to_fetch_copy_empty: 'Nothing to copy yet — convert a cURL command first.',
	tool_curl_to_fetch_desc:
		'Turn cURL into fetch code in the browser — stays on your device, not uploaded to a server.',
	tool_curl_to_fetch_description:
		'Paste a cURL command and get a JavaScript fetch snippet — supports method, headers, JSON body, Basic auth (-u), and -G query strings. Example: the sample POST JSON loads on first paint. Your command stays on your device and is not uploaded to a server.',
	tool_curl_to_fetch_error_empty: 'Paste a cURL command first.',
	tool_curl_to_fetch_error_no_url: 'Could not find a URL. Add https://… or use --url.',
	tool_curl_to_fetch_error_parse: 'Could not parse this cURL command. Check quotes and line continuations.',
	tool_curl_to_fetch_error_unclosed_quote: 'A quoted string is not closed — fix quotes and try again.',
	tool_curl_to_fetch_example:
		'Input: curl -X POST https://api.example.com/users -H "Content-Type: application/json" -d \'{"name":"Ada"}\' → Output: fetch("https://api.example.com/users", { method: "POST", headers: { … }, body: \'{"name":"Ada"}\' });',
	tool_curl_to_fetch_example_title: 'Example',
	tool_curl_to_fetch_faq_a1:
		'No. Splitting flags and building the fetch string happens entirely in this tab. We never POST your command to our servers.',
	tool_curl_to_fetch_faq_a2:
		'URL (positional or --url), -X/--request, -H/--header (repeatable), -d/--data/--data-raw/--data-binary, -u/--user for Basic Authorization, -G/--get to move --data into the query string, quoted strings, and line continuations with a trailing backslash. Exotic flags are skipped with a warning.',
	tool_curl_to_fetch_faq_a3:
		'-G tells curl to append --data fields to the URL query instead of a request body. This page mirrors that by merging the data string into the fetch URL and omitting body.',
	tool_curl_to_fetch_faq_a4:
		'-u user:pass becomes headers.Authorization = "Basic " + base64(user:pass), matching curl\'s Basic auth header.',
	tool_curl_to_fetch_faq_a5:
		'This page targets the browser fetch API. For axios or Python requests, adapt the URL/method/headers/body manually — we do not register separate converter URLs for those libraries.',
	tool_curl_to_fetch_faq_q1: 'Is my cURL command uploaded?',
	tool_curl_to_fetch_faq_q2: 'Which curl flags are supported?',
	tool_curl_to_fetch_faq_q3: 'What does -G / --get do here?',
	tool_curl_to_fetch_faq_q4: 'How is -u / --user handled?',
	tool_curl_to_fetch_faq_q5: 'Can I get axios or Python instead of fetch?',
	tool_curl_to_fetch_how_body:
		'Copy a cURL command from OpenAPI docs, Postman, or your shell history. We parse common flags locally and print a fetch call you can paste into frontend or Node code.',
	tool_curl_to_fetch_how_item_1: 'Paste the full cURL command (line breaks with \\ are fine).',
	tool_curl_to_fetch_how_item_2: 'Pick fetch or async/await output, then click Convert.',
	tool_curl_to_fetch_how_item_3: 'Review method, headers, and body in the generated snippet.',
	tool_curl_to_fetch_how_item_4: 'Copy the code into your project — run Convert again after edits.',
	tool_curl_to_fetch_how_title: 'How it works',
	tool_curl_to_fetch_input_label: 'cURL command',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.example.com/…',
	tool_curl_to_fetch_large_warn: 'Large command (>50 KB). Parsing may feel slow.',
	tool_curl_to_fetch_load_sample: 'Load sample',
	tool_curl_to_fetch_output_label: 'JavaScript fetch output',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: 'Output style',
	tool_curl_to_fetch_rules_body:
		'Mapping curl flags to fetch options — what we translate, what we warn on, and what still needs manual edits.',
	tool_curl_to_fetch_rules_item_1:
		'Method: -X POST becomes options.method = "POST". A lone -d without -X defaults to POST unless -G keeps GET.',
	tool_curl_to_fetch_rules_item_2:
		'Headers: each -H "Name: value" lands in options.headers. Content-Type from curl is preserved for JSON bodies.',
	tool_curl_to_fetch_rules_item_3:
		'Body vs query: -d payload becomes options.body unless -G moves it onto the URL search string.',
	tool_curl_to_fetch_rules_item_4:
		'Unsupported flags (cookies, certs, proxies) are ignored with a warning — fetch in the browser cannot mirror every curl feature.',
	tool_curl_to_fetch_rules_title: 'Rules you should expect',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: 'Converted — review the fetch snippet below.',
	tool_curl_to_fetch_title: 'curl to fetch',
	tool_curl_to_fetch_usecase_1:
		'OpenAPI or Swagger shows curl examples — paste one here to bootstrap a frontend fetch call.',
	tool_curl_to_fetch_usecase_2:
		'Debug a Bearer token request: keep Authorization header from curl while you move logic into JavaScript.',
	tool_curl_to_fetch_usecase_3:
		'Convert curl command to fetch when migrating shell scripts to browser or Node fetch code.',
	tool_curl_to_fetch_usecases_title: 'Good fits',
	tool_curl_to_fetch_warn_unknown_flags: 'Skipped unsupported flags: {flags}',
};

export default en;
