/**
 * i18n tool shard (robots-txt-generator / en).
 * English master locale — UI, Rules, Example, Use cases, FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_robots_home_title: 'Robots.txt Generator',
	tool_robots_home_desc:
		'Control how search engines crawl your site with a valid robots.txt — build Allow, Disallow and AI-crawler rules in your browser.',
	tool_robots_title: 'Robots.txt Generator — Manage Allow & Disallow Rules for AI Crawlers',
	tool_robots_description:
		'Your robots.txt tells Google which pages to crawl and index — a wrong rule can hide your whole site from search. Generate a robots.txt file in your browser. Steps: pick user-agents, add Allow / Disallow paths and a Sitemap line, then copy the plain-text result with syntax rules and updated AI-crawler user-agents explained. Runs locally—nothing is uploaded. Example: blocking GPTBot while keeping Googlebot fully enabled.',
	tool_robots_generate: 'Generate',
	tool_robots_sample: 'Load sample',
	tool_robots_clear: 'Clear',
	tool_robots_copy: 'Copy',
	tool_robots_copied: 'Copied',
	tool_robots_agents_label: 'User-agents',
	tool_robots_agents_hint: 'Tick the crawlers to include, then add paths for each group.',
	tool_robots_include: 'Include this user-agent',
	tool_robots_agent_add: 'Add custom agent',
	tool_robots_agent_remove: 'Remove agent',
	tool_robots_allow_label: 'Allow paths (one per line)',
	tool_robots_disallow_label: 'Disallow paths (one per line)',
	tool_robots_sitemap_label: 'Sitemap URL (optional)',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'Download',
	tool_robots_empty_agent: 'Tick or add a user-agent first.',
	tool_robots_owner_of: 'Owner: {owner}',
	tool_robots_how_title: 'How it works',
	tool_robots_how_body:
		'Select the crawlers you target, add Allow and Disallow paths for each group, optionally add a Sitemap line, then Generate. The page assembles the plain-text file following the RFC 9309 layout: one User-agent line per group, its Allow/Disallow lines underneath, a blank line between groups, and the Sitemap line at the end. Copy it to the root of your site at /robots.txt.',
	tool_robots_rules_title: 'Syntax rules that matter',
	tool_robots_rules_body:
		'robots.txt rules are path prefixes, not patterns, and a crawler applies the last matching group in the file. These are the rules this generator follows.',
	tool_robots_rules_item_1:
		'Group order: a User-agent line starts a group that applies to that crawler; a blank line ends it. The last group matching a crawler wins.',
	tool_robots_rules_item_2:
		'Prefix matching: Allow and Disallow match path prefixes, not substrings or regex. Only * and $ are special (RFC 9309).',
	tool_robots_rules_item_3:
		'Disallow: / blocks that agent from the whole site. Disallow with an empty value allows everything for that agent.',
	tool_robots_rules_item_4:
		'Sitemap: is an extension, not part of RFC 9309. It is case-insensitive and may appear anywhere, though it is usually placed at the end.',
	tool_robots_example_title: 'Example',
	tool_robots_example:
		'Sample: Googlebot has Allow: / (fully enabled), GPTBot has Disallow: / (blocked), and a Sitemap line points to /sitemap.xml. The output mirrors this layout: one group per crawler, blank line between groups, sitemap last.',
	tool_robots_usecases_title: 'Good fits',
	tool_robots_usecase_1:
		'New sites: generate a starting robots.txt that keeps search engines enabled and hides private staging paths.',
	tool_robots_usecase_2:
		'AI crawler control: block GPTBot, ClaudeBot, Google-Extended, CCBot or PerplexityBot from training or summary extraction without touching Googlebot.',
	tool_robots_usecase_3:
		'Discovery: pair robots.txt with a Sitemap line so crawlers can find your sitemap URL.',
	tool_robots_faq_q1: 'What happens if I write Disallow: / ?',
	tool_robots_faq_a1:
		'It tells that crawler not to fetch any URL under the site root. If Googlebot gets Disallow: /, your pages can disappear from Google Search. For a staging path use Disallow: /private/ instead.',
	tool_robots_faq_q2: 'How do I block AI crawlers like GPTBot?',
	tool_robots_faq_a2:
		'Create a group with the crawler’s User-agent (for example GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot) and add Disallow: /. Check the crawler’s official documentation, since AI crawlers update their user-agents and IP ranges from time to time.',
	tool_robots_faq_q3: 'Where should the Sitemap line go?',
	tool_robots_faq_a3:
		'Position does not affect how search engines read it, but convention places it at the end of the file. The generator appends it last when you provide a URL.',
	tool_robots_faq_q4: 'Is my robots.txt uploaded anywhere?',
	tool_robots_faq_a4:
		'No. The file is generated in your browser and never sent to a server. Close the tab and nothing is kept.',
	tool_robots_references: 'RFC 9309 Robots Exclusion Protocol; Google Search Central — robots.txt; Google Search Central — Manage AI crawlers.',
	tool_robots_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — Manage AI crawlers',
};

export default en;
