/**
 * i18n tool shard (add-www-to-dns / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_add_www_to_dns_apex_alias_note: 'Use provider ALIAS / CNAME flattening / A at the apex — do not put a bare CNAME on @.',
  tool_add_www_to_dns_article:
    'Generate A/AAAA/CNAME rows for www, explain apex CNAME rules and 301 vs DNS, with same-page provider tutorials.',
  tool_add_www_to_dns_cdn_label: 'CDN / target hostname',
  tool_add_www_to_dns_clear: 'Clear',
  tool_add_www_to_dns_col_name: 'Name / Host',
  tool_add_www_to_dns_col_notes: 'Notes',
  tool_add_www_to_dns_col_ttl: 'TTL',
  tool_add_www_to_dns_col_type: 'Type',
  tool_add_www_to_dns_col_value: 'Value / Target',
  tool_add_www_to_dns_copy: 'Copy records',
  tool_add_www_to_dns_copy_done: 'Copied',
  tool_add_www_to_dns_desc: 'Generate www DNS records (A/CNAME), check live DNS, and follow Cloudflare/Vercel/Route 53 guides.',
  tool_add_www_to_dns_description:
    'Add a www hostname to your DNS in the browser. Steps: enter your domain, pick a record scheme (Apex A + www CNAME, dual A, or CDN host), copy the rows, then follow a provider guide (Cloudflare, Route 53, Vercel, and more). Example: example.com + 203.0.113.10 → A @ and CNAME www. Apex cannot be a bare CNAME — paste stays local; optional live lookup uses DoH.',
  tool_add_www_to_dns_disclaimer:
    'This tool does not change your DNS zone. Panel menus change — when in doubt, follow the official link under each guide.',
  tool_add_www_to_dns_domain_label: 'Domain (apex)',
  tool_add_www_to_dns_domain_placeholder: 'example.com',
  tool_add_www_to_dns_empty: 'Enter a domain first.',
  tool_add_www_to_dns_example:
    'Domain example.com, IPv4 203.0.113.10, scheme Apex A + www CNAME → rows: A @ 203.0.113.10 and CNAME www example.com (TTL 3600). Then add them in your panel and optionally 301 apex→www (or the reverse).',
  tool_add_www_to_dns_example_title: 'Example',
  tool_add_www_to_dns_faq_a1:
    'Not as a bare CNAME in standard DNS — it conflicts with SOA/NS. Use A/AAAA, or your provider’s ALIAS / CNAME flattening.',
  tool_add_www_to_dns_faq_a2:
    'Prefer CNAME www → apex when both should follow the same IPs. Use dual A/AAAA if your panel cannot CNAME to the same zone. Use CDN hostname when the host gives you a target like cname.vercel-dns.com.',
  tool_add_www_to_dns_faq_a3:
    'Resolving both names is not the same as choosing a canonical URL. Search and cookies need one preferred host via HTTP redirect.',
  tool_add_www_to_dns_faq_a4:
    'Proxied hides origin IPs and terminates TLS at Cloudflare. Ensure the certificate covers www and apex, and that origin server names match what you expect.',
  tool_add_www_to_dns_faq_a5: 'No. Generation stays in the tab. Lookup only queries public DNS for the hostname you enter via DoH.',
  tool_add_www_to_dns_faq_q1: 'Can the apex (naked domain) be a CNAME?',
  tool_add_www_to_dns_faq_q2: 'Should I use CNAME or A for www?',
  tool_add_www_to_dns_faq_q3: 'DNS works — why do I still need a 301?',
  tool_add_www_to_dns_faq_q4: 'What should I watch on Cloudflare “Proxied” (orange cloud)?',
  tool_add_www_to_dns_faq_q5: 'Does checking DNS upload my zone?',
  tool_add_www_to_dns_generate: 'Generate',
  tool_add_www_to_dns_guide_g1_notes: 'Field names vary (Host vs Name). Do not put a CNAME on @.',
  tool_add_www_to_dns_guide_g1_scheme: '1 — Apex A + www CNAME (or 2 if CNAME to apex is blocked).',
  tool_add_www_to_dns_guide_g1_steps:
    'Open DNS Management / DNS Records for the domain.|Add Record: Type A, Host @ or blank, Value = server IPv4.|Add Record: Type CNAME, Host www, Value = yourapex.com (no http://).|Save; wait for TTL/propagation.|Optional: set HTTPS redirect www↔apex at the host.',
  tool_add_www_to_dns_guide_g1_title: 'Generic DNS panel (registrars)',
  tool_add_www_to_dns_guide_g1_when: 'GoDaddy, Namecheap, or any classic DNS Management UI.',
  tool_add_www_to_dns_guide_g2_notes: 'Cloudflare can flatten CNAMEs at the apex. Proxied changes how TLS and origin IPs work.',
  tool_add_www_to_dns_guide_g2_scheme: '1, or 3 if pointing at another CDN hostname.',
  tool_add_www_to_dns_guide_g2_steps:
    'Open the zone → DNS → Records.|Add A/AAAA for @ to your origin (or use flattening later).|Add CNAME for www targeting @ or the apex hostname.|Decide Proxied (orange) vs DNS only (grey) per your TLS plan.|Save and test both hostnames.',
  tool_add_www_to_dns_guide_g2_title: 'Cloudflare DNS',
  tool_add_www_to_dns_guide_g2_when: 'DNS is hosted on Cloudflare.',
  tool_add_www_to_dns_guide_g3_notes: 'Alias records are AWS-specific and solve the apex CNAME problem.',
  tool_add_www_to_dns_guide_g3_scheme: '1 for simple IPs; apex often needs Alias A → CloudFront/ELB.',
  tool_add_www_to_dns_guide_g3_steps:
    'Open Hosted zones → your domain → Create record.|For www: Record type CNAME, value = apex (or CloudFront DNS name).|For apex: prefer A–Alias to CloudFront/ELB — do not create a bare CNAME on the apex.|Set routing policy Simple unless you need failover.|Test with dig/nslookup after changes.',
  tool_add_www_to_dns_guide_g3_title: 'AWS Route 53',
  tool_add_www_to_dns_guide_g3_when: 'Hosted zone in Route 53, often with CloudFront/ELB.',
  tool_add_www_to_dns_guide_g4_notes: 'Exact apex values can change — trust the Domains UI over outdated blog posts.',
  tool_add_www_to_dns_guide_g4_scheme: '3 — www CNAME to the target Vercel shows; apex per Vercel’s A/ALIAS instructions.',
  tool_add_www_to_dns_guide_g4_steps:
    'Project → Settings → Domains → add example.com and www.example.com.|Copy the CNAME/A values Vercel displays.|In your DNS panel, create www CNAME to that target.|Configure apex as Vercel instructs (A or ALIAS).|Wait for Vercel to show Valid configuration.',
  tool_add_www_to_dns_guide_g4_title: 'Vercel',
  tool_add_www_to_dns_guide_g4_when: 'App hosted on Vercel; DNS may be external.',
  tool_add_www_to_dns_guide_g5_notes: 'Netlify DNS can manage apex more easily than external A-only panels.',
  tool_add_www_to_dns_guide_g5_scheme: '3 with Netlify’s load-balancer hostname, or Netlify DNS.',
  tool_add_www_to_dns_guide_g5_steps:
    'Site configuration → Domain management → Add custom domain.|Add www and apex as Netlify suggests.|If DNS is external: CNAME www to the Netlify hostname shown.|For apex use Netlify DNS, ALIAS, or A records from the docs.|Enable HTTPS once DNS validates.',
  tool_add_www_to_dns_guide_g5_title: 'Netlify',
  tool_add_www_to_dns_guide_g5_when: 'Site on Netlify with custom domain.',
  tool_add_www_to_dns_guide_g6_notes: '「主机记录」填 www 或 @，不要把完整 FQDN 填进主机记录（除非文档要求）。',
  tool_add_www_to_dns_guide_g6_scheme: '1 — 主机记录 www 的 CNAME；@ 的 A 记录。',
  tool_add_www_to_dns_guide_g6_steps:
    '打开云解析 DNS → 域名解析 → 解析设置。|添加记录：主机记录 @，类型 A，记录值 = 服务器 IP。|添加记录：主机记录 www，类型 CNAME，记录值 = 主域名或 CDN 目标。|TTL 可先用 10 分钟便于验证。|保存后用查询工具确认生效。',
  tool_add_www_to_dns_guide_g6_title: 'Alibaba Cloud DNS',
  tool_add_www_to_dns_guide_g6_when: '解析托管在阿里云「云解析 DNS」。',
  tool_add_www_to_dns_guide_g7_notes: 'DNS alone never redirects browsers; the 301 lives on the app or edge.',
  tool_add_www_to_dns_guide_g7_scheme: '1 first, then HTTP 301 on the server.',
  tool_add_www_to_dns_guide_g7_steps:
    'Publish scheme-1 DNS records and wait until both hostnames resolve.|In Nginx/Caddy, listen for both server names.|Add a 301 from the non-canonical host to the canonical one.|Issue/renew TLS with SANs for both names.|Verify with curl -I on http and https.',
  tool_add_www_to_dns_guide_g7_title: 'Self-hosted VPS (Nginx / Caddy)',
  tool_add_www_to_dns_guide_g7_when: 'You control the web server after DNS is set.',
  tool_add_www_to_dns_guide_notes_label: 'Notes:',
  tool_add_www_to_dns_guide_scheme_label: 'Suggested scheme:',
  tool_add_www_to_dns_guide_steps_label: 'Steps',
  tool_add_www_to_dns_guide_when_label: 'When:',
  tool_add_www_to_dns_guides_intro:
    'Same task, different panels. Open your provider, follow the steps, and prefer official docs if the UI moved.',
  tool_add_www_to_dns_guides_title: 'Provider & scenario guides',
  tool_add_www_to_dns_how_body:
    'Enter the apex domain and optional server IPs. Choose a scheme, generate the table, copy into your DNS panel, then open a provider guide below for click-path steps. Optionally check live A/AAAA/CNAME via DNS-over-HTTPS. This tool never logs into your registrar.',
  tool_add_www_to_dns_how_title: 'How it works',
  tool_add_www_to_dns_invalid_domain: 'That does not look like a valid domain name.',
  tool_add_www_to_dns_ipv4_label: 'Server IPv4 (optional)',
  tool_add_www_to_dns_ipv6_label: 'Server IPv6 (optional)',
  tool_add_www_to_dns_lookup: 'Check current DNS',
  tool_add_www_to_dns_lookup_cname_apex: 'Warning: apex already has a CNAME (only OK with provider flattening/ALIAS).',
  tool_add_www_to_dns_lookup_fail: 'DNS lookup failed. Try again in a moment.',
  tool_add_www_to_dns_lookup_label: 'Live DNS (DoH)',
  tool_add_www_to_dns_need_ip: 'Add an IPv4 or IPv6 for A/AAAA rows (or use CDN scheme).',
  tool_add_www_to_dns_note_apex_a: 'Apex address record',
  tool_add_www_to_dns_note_cdn_www: 'www points at CDN hostname',
  tool_add_www_to_dns_note_dual: 'Same IP on apex and www',
  tool_add_www_to_dns_note_www_cname: 'www aliases the apex',
  tool_add_www_to_dns_plain_label: 'Copy-paste text',
  tool_add_www_to_dns_rules_body:
    'What the records mean, why the apex cannot be a bare CNAME, and how that differs from an HTTP redirect.',
  tool_add_www_to_dns_rules_item_1:
    'Recommended default: A/AAAA on @ (apex) plus CNAME www → yourapex.com. Many panels use Host=www and Value=example.com without a trailing dot.',
  tool_add_www_to_dns_rules_item_2:
    'RFC 1034: a bare CNAME cannot sit on the zone apex because SOA/NS must live there. Use A/AAAA, or a provider ALIAS / CNAME flattening feature.',
  tool_add_www_to_dns_rules_item_3:
    'DNS makes names resolve; it does not pick a canonical host. After both resolve, set a 301 (www↔apex) on the server or CDN and align TLS SANs.',
  tool_add_www_to_dns_rules_item_4:
    'Privacy: record generation is local. “Check current DNS” asks this site’s Worker to query Cloudflare DoH for the hostname you typed — not an upload of your zone file.',
  tool_add_www_to_dns_rules_title: 'Rules you should expect',
  tool_add_www_to_dns_sample: 'Load sample',
  tool_add_www_to_dns_scheme_1: 'Apex A + www CNAME',
  tool_add_www_to_dns_scheme_2: 'Dual A/AAAA',
  tool_add_www_to_dns_scheme_3: 'CDN hostname',
  tool_add_www_to_dns_scheme_label: 'Record scheme',
  tool_add_www_to_dns_title: 'Add WWW to DNS — Point www at your apex domain',
  tool_add_www_to_dns_ttl_label: 'TTL (seconds)',
  tool_add_www_to_dns_usecase_1: 'Self-hosted site: apex already has an A record — add www as CNAME to the apex.',
  tool_add_www_to_dns_usecase_2:
    'CDN/PaaS (Vercel, Netlify, Cloudflare): www CNAME to the host they give you; apex via flattening/ALIAS or A.',
  tool_add_www_to_dns_usecase_3: 'SEO cleanup: make both hostnames resolve, then choose one canonical with a 301.',
  tool_add_www_to_dns_usecases_title: 'Good fits',
  tool_add_www_to_dns_warn_301: 'DNS only makes both names resolve. Pick www or apex as canonical with an HTTP 301 at your host/CDN.',
};
export default en;
