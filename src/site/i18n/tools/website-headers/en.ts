/**
 * i18n tool shard (website-headers / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_headers_article:
    'Use this checker to see the response headers our edge receives for a public URL — useful for caching, CORS, redirects, and security header spot-checks. The request is proxied; we do not store page bodies.',
  tool_headers_description:
    'Inspect a URL\'s HTTP response headers from the edge. Process: submit https URL, send HEAD (fall back to GET), follow redirects, show status and header map, block private hosts. Example: read Cache-Control, CORS, and Strict-Transport-Security while debugging CDN or redirects.',
  tool_headers_example:
    'Example: fetch https://example.com → status 200, final URL unchanged, headers include content-type: text/html and often cache-control or security headers depending on the origin.',
  tool_headers_example_title: 'Example',
  tool_headers_faq_a1:
    'Metadata from the server response such as content type, caching rules, redirects, and security policies like HSTS, CSP, or CORS.',
  tool_headers_faq_a2:
    'It prefers HEAD and falls back to GET when needed. The product goal is inspecting headers, not scraping or storing page content.',
  tool_headers_faq_a3: 'Requests to private networks are blocked so the worker cannot be used to probe internal hosts.',
  tool_headers_faq_a4:
    'Not always. You see headers from our edge location. CDN geo routing or bot filters can make results differ from your local browser.',
  tool_headers_faq_a5:
    'The fetch is a short-lived edge request for this tool. We do not offer a URL history product; avoid pasting secrets in query strings.',
  tool_headers_faq_q1: 'What do HTTP response headers show?',
  tool_headers_faq_q2: 'Does this tool download the full page body?',
  tool_headers_faq_q3: 'Why are localhost or private IPs blocked?',
  tool_headers_faq_q4: 'Is this the same as browser DevTools?',
  tool_headers_faq_q5: 'Do you keep logs of the URLs I check?',
  tool_headers_how_body:
    'Paste a public http(s) URL and fetch. Our edge worker sends HEAD (then GET if needed), follows redirects, and returns the status, final URL, and response header map it observed. Private hosts are rejected. This is an edge view — it may differ from your laptop\'s DevTools if CDN or geo routing differs.',
  tool_headers_how_title: 'How it works',
  tool_headers_ref_mdn_label: 'MDN — HTTP headers',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — HTTP Semantics',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP Caching',
  tool_headers_rules_body:
    'The worker is a short-lived proxy for header inspection. It does not keep page content as a product feature. Header names follow HTTP semantics (see References).',
  tool_headers_rules_item_1: 'Prefer HEAD; fall back to GET when HEAD is unsupported.',
  tool_headers_rules_item_2: 'Follow redirects and report the final URL.',
  tool_headers_rules_item_3: 'Block localhost / private IP targets.',
  tool_headers_rules_item_4: 'Surface common headers such as Cache-Control, CORS, and CSP when present.',
  tool_headers_rules_title: 'What the checker does',
  tool_headers_title: 'Check HTTP Response Headers Online',
  tool_headers_usecase_1: 'Confirm Cache-Control or CDN caching before a release.',
  tool_headers_usecase_2: 'Debug CORS preflight failures by reading Access-Control-* headers.',
  tool_headers_usecase_3: 'Spot-check whether CSP, HSTS, or other security headers are actually served.',
  tool_headers_usecases_title: 'When to use it',
};
export default en;
