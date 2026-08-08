/**
 * i18n tool shard (ip-address / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_ip_address_article:
    'Shows your public egress IP plus approximate region and network name from our edge (Cloudflare request metadata only—no external geo API). Use it to confirm VPN exit changes, report an IP to support, or debug allowlists. Not precision geolocation, carrier billing lookup, or “find someone else’s IP”.',
  tool_ip_address_description:
    'Look up your public IP and rough location as our edge sees them for this connection—IPv4 or IPv6 depending on your path. Process: open the page or tap Refresh; the worker reads the trusted client IP plus Cloudflare geo metadata (no third-party API). Example: may show 203.0.113.10 with country and ISP hints. With VPN/proxy you see the exit, not your router’s 192.168 address.',
  tool_ip_address_example:
    'Documentation example: edge sees 203.0.113.10 (TEST-NET-3) with country/ISP hints when metadata is available. Your live result is your real public egress IP, labeled IPv4 or IPv6 when detected.',
  tool_ip_address_example_title: 'Example',
  tool_ip_address_faq_a1:
    'Router admin pages often show 192.168.x.x—that is your private LAN address. This page shows the public egress IP on the internet side, which is what most websites and services see.',
  tool_ip_address_faq_a2:
    'You usually see the VPN/proxy exit IP, not your home broadband address. That is expected—use refresh after toggling VPN to confirm the exit changed.',
  tool_ip_address_faq_a3:
    'No. Each request returns one address—the version your connection used (IPv4 or IPv6). Dual-stack users may see a different version after reconnecting or switching networks.',
  tool_ip_address_faq_a4:
    'Your browser calls our edge API; the worker returns the trusted client IP bound to that connection—the public egress our infrastructure observes.',
  tool_ip_address_faq_a5:
    'The lookup is a short-lived edge request. We do not offer IP history; treat the result as ephemeral display, not a log archive.',
  tool_ip_address_faq_a6:
    'They come from Cloudflare edge metadata tied to this IP—often country/region/city and the ASN owner name. VPN/proxy shows the exit; mobile or CGNAT can be wrong. We do not use external geo databases.',
  tool_ip_address_faq_q1: 'Why is this different from my router’s IP?',
  tool_ip_address_faq_q2: 'What if I use a VPN or proxy?',
  tool_ip_address_faq_q3: 'Do I get IPv4 and IPv6 at the same time?',
  tool_ip_address_faq_q4: 'How does this page get my IP?',
  tool_ip_address_faq_q5: 'Do you store my IP?',
  tool_ip_address_faq_q6: 'How accurate are location and ISP?',
  tool_ip_address_how_body:
    'The page auto-calls our edge API on load; tap Refresh to fetch again. The worker returns the trusted client IP for this TCP/TLS connection and optional country/region/city/timezone plus ASN organization from request.cf. You see one address per request—IPv4 or IPv6, whichever path you used.',
  tool_ip_address_how_title: 'How it works',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — What is an IP address?',
  tool_ip_address_ref_mdn_label: 'MDN — X-Forwarded-For header (spoofing caveats)',
  tool_ip_address_rules_body:
    'This is the public address websites usually see on the internet side—not the 192.168 address on your router admin page. Limits:',
  tool_ip_address_rules_item_1: 'With VPN or HTTP proxy you see the provider’s exit IP, not your home LAN.',
  tool_ip_address_rules_item_2: 'Behind NAT many devices share one public IP; 192.168.x.x never appears here.',
  tool_ip_address_rules_item_3: 'We prefer the edge-trusted client address over client-supplied X-Forwarded-For alone (spoofable).',
  tool_ip_address_rules_item_4:
    'Dual-stack networks may show IPv4 or IPv6; reconnecting or switching Wi‑Fi/cellular can change the result.',
  tool_ip_address_rules_item_5:
    'Location and ISP come from edge IP metadata—often city-level, can be wrong on mobile/CGNAT; VPN shows the exit node.',
  tool_ip_address_rules_title: 'What this IP means',
  tool_ip_address_title: 'What Is My IP Address — See Your Public IP (IPv4 or IPv6)',
  tool_ip_address_usecase_1: 'Remote desktop, NAS, or gaming: report your current public IP for firewall or port allowlists.',
  tool_ip_address_usecase_2: 'Toggle VPN/proxy and refresh to confirm the exit IP actually changed.',
  tool_ip_address_usecase_3: 'Before cloud security groups, office firewalls, or API callback allowlists—quick source-IP check.',
  tool_ip_address_usecases_title: 'When to use it',
};
export default en;
