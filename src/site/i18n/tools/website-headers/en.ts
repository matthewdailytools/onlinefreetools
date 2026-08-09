/**
 * i18n tool shard (website-headers / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_headers_article:
    'Use this checker to see the response headers our edge receives for a public URL — useful for caching, CORS, redirects, and security header spot-checks. The request is proxied; we do not store page bodies.',
  tool_headers_description:
    'HTTP headers decide how Google crawls, caches and indexes your pages — a wrong X-Robots-Tag can block indexing entirely. Inspect a URL\'s HTTP response headers from the edge. Process: submit https URL, send HEAD (fall back to GET), follow redirects, show status and header map, block private hosts. Extra: plain-language checks of Cache-Control, X-Robots-Tag and redirect chains. Example: read Cache-Control, CORS, and Strict-Transport-Security while debugging CDN or redirects.',
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
  tool_headers_faq_a6:
    'For SEO the useful facts are whether the response is cached at all (no-store vs max-age), how long shared caches keep it (s-maxage), and whether it must revalidate (no-cache). Slow-changing pages benefit from a longer max-age so CDNs can serve them without hitting the origin.',
  tool_headers_faq_a7:
    'x-robots-tag applies to any response type — HTML, PDF, images — while robots meta only works inside HTML. Use it to prevent indexing of non-HTML assets or to apply rules that are hard to put in the page itself. It overrides the meta robots when the two conflict.',
  tool_headers_faq_q1: 'What do HTTP response headers show?',
  tool_headers_faq_q2: 'Does this tool download the full page body?',
  tool_headers_faq_q3: 'Why are localhost or private IPs blocked?',
  tool_headers_faq_q4: 'Is this the same as browser DevTools?',
  tool_headers_faq_q5: 'Do you keep logs of the URLs I check?',
  tool_headers_faq_q6: 'What should I look for in cache-control?',
  tool_headers_faq_q7: 'Why does x-robots-tag matter if robots meta exists?',
  tool_headers_how_body:
    'Paste a public http(s) URL and fetch. Our edge worker sends HEAD (then GET if needed), follows redirects one by one (up to 5 hops), and returns the status, final URL, response header map, and the redirect chain it observed. Private hosts are rejected. This is an edge view — it may differ from your laptop\'s DevTools if CDN or geo routing differs.',
  tool_headers_how_title: 'How it works',
  tool_headers_ref_mdn_label: 'MDN — HTTP headers',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — HTTP Semantics',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP Caching',
  tool_headers_robots_absent: 'No X-Robots-Tag header. Indexing rules come from robots.txt and the page\'s meta robots.',
  tool_headers_robots_blocked: 'This page is excluded from indexing by this header.',
  tool_headers_robots_maxsnippet: 'max-snippet={n}: limits the snippet length to {n} characters.',
  tool_headers_robots_noarchive: 'noarchive: search engines will not show a cached copy of this URL.',
  tool_headers_robots_nofollow: 'nofollow: crawlers will not follow links on this response.',
  tool_headers_robots_noindex: 'noindex: this URL is excluded from search results.',
  tool_headers_robots_none: 'none: equivalent to noindex + nofollow.',
  tool_headers_rules_body:
    'The worker is a short-lived proxy for header inspection. It does not keep page content as a product feature. Header names follow HTTP semantics (see References).',
  tool_headers_rules_item_1: 'Prefer HEAD; fall back to GET when HEAD is unsupported.',
  tool_headers_rules_item_2: 'Follow redirects and report the final URL.',
  tool_headers_rules_item_3: 'Block localhost / private IP targets.',
  tool_headers_rules_item_4: 'Surface common headers such as Cache-Control, CORS, and CSP when present.',
  tool_headers_rules_item_5: 'Collect the redirect chain (up to 5 hops) with status and location for each step.',
  tool_headers_rules_title: 'What the checker does',
  tool_headers_seo_cache_absent: 'No Cache-Control header. Browsers and CDNs fall back to heuristic caching, so recently changed content may be served stale.',
  tool_headers_seo_cache_heading: 'Cache-Control',
  tool_headers_seo_cache_immutable: 'immutable: caches must not revalidate during the freshness lifetime — typical for fingerprinted assets.',
  tool_headers_seo_cache_maxage: 'max-age={n}: browsers and shared caches may reuse this response for {n} seconds without asking the origin.',
  tool_headers_seo_cache_mustrevalidate: 'must-revalidate: stale responses must be revalidated before reuse.',
  tool_headers_seo_cache_nocache: 'no-cache: the response may be stored but must be revalidated before reuse.',
  tool_headers_seo_cache_nostore: 'no-store: nothing is cached; every request reaches the origin. Good for private or volatile pages.',
  tool_headers_seo_cache_other: 'Directive not explained here: {d}',
  tool_headers_seo_cache_private: 'private: only the browser cache may store the response; shared caches must not.',
  tool_headers_seo_cache_public: 'public: any cache may store the response.',
  tool_headers_seo_cache_smaxage: 's-maxage={n}: shared (CDN/proxy) caches may serve for {n} seconds; this overrides max-age for them.',
  tool_headers_seo_redirect_301: '301 Permanent: search engines transfer ranking signals to the destination — right for moved pages and www changes.',
  tool_headers_seo_redirect_302: '302/307 Temporary: keep for short-term moves — ranking signals stay on the original URL.',
  tool_headers_seo_redirect_chain: 'The request followed {n} redirect(s) before the final response:',
  tool_headers_seo_redirect_cross_host: 'This hop leaves the original host: {from} → {to}.',
  tool_headers_seo_redirect_heading: 'Redirect',
  tool_headers_seo_redirect_ok: 'No redirect: the final URL is the one you checked.',
  tool_headers_seo_robots_heading: 'X-Robots-Tag',
  tool_headers_seo_title: 'SEO header checks',
  tool_headers_seo_intro: 'Plain-language reading of the headers that matter most for search and crawling.',
  tool_headers_title: 'Check HTTP Response Headers Online',
  tool_headers_usecase_1: 'Confirm Cache-Control or CDN caching before a release.',
  tool_headers_usecase_2: 'Debug CORS preflight failures by reading Access-Control-* headers.',
  tool_headers_usecase_3: 'Spot-check whether CSP, HSTS, or other security headers are actually served.',
  tool_headers_usecases_title: 'When to use it',
};
export default en;
