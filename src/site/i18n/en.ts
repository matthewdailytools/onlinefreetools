import type { SiteLangDict } from './types';
const en: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Home',
  nav_devlogs: 'Dev Logs',
  nav_tools: 'Tools',
  footer_text: 'Online Free Tools · Learning project · Iterating',
  tool_headers_title: 'Fetch Website Response Headers',
  tool_headers_description:
    'Enter a URL to fetch its HTTP response headers (server-side request).',
  tool_headers_article:
    'What: Fetch and inspect a website\'s HTTP response headers. Useful for debugging CORS, caching, redirects and verifying security or CDN headers. Scenarios: developer debugging, SEO checks, and verifying server configuration.',
  url_label: 'URL',
  url_placeholder: 'e.g. https://example.com',
  fetch_button: 'Fetch Headers',
  result_title: 'Result',
  status_label: 'Status',
  final_url_label: 'Final URL',
  headers_label: 'Headers',
  error_prefix: 'Error: ',
  note_title: 'Notes',
  note_1: 'Some sites do not support HEAD; we will fall back to GET.',
  note_2: 'For safety, requests to localhost/private networks are blocked.',
  tool_markdown_title: 'Markdown → HTML',
  tool_markdown_description:
    'Render Markdown into HTML with preview, copy, and full-document download.',
  tool_markdown_article:
    'What: Convert Markdown into sanitized HTML with preview and export options. Useful for preparing blog posts, documentation, or sharing rendered content. Scenarios: authoring, quick previews, and generating static HTML exports.',
  tool_markdown_copy: 'Copy HTML',
  tool_markdown_copy_done: 'Copied',
  tool_markdown_download: 'Download HTML',
  tool_markdown_clear: 'Clear',
  tool_markdown_full_doc: 'Generate full HTML document',
  tool_markdown_input_label: 'Markdown Input',
  tool_markdown_preview_label: 'HTML Preview',
  tool_markdown_placeholder:
    "# Title\n\nBasic Markdown supported: **bold**, lists, and code blocks.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Hello Markdown');\n```",
  tool_markdown_export_title: 'Markdown to HTML Export',
  tool_markdown_export_description: 'Static HTML export generated from Markdown',
  tool_ip_address_title: 'What Is My IP Address?',
  tool_ip_address_description: 'Discover your public IP address with one click.',
  tool_ip_address_article: 'What: Find your public IP address as seen by the internet. Your IP address identifies your device on the network and is used by websites to deliver content. Scenarios: remote access, network troubleshooting, firewall configuration, and geolocation services.',
  ip_label: 'Your IP Address',
  fetch_ip_button: 'Refresh IP',
  fetching_message: 'Fetching your IP address...',
  what_is_ip_title: 'What is an IP Address?',
  what_is_ip_content: 'An Internet Protocol (IP) address is a numerical label assigned to each device connected to a computer network. It serves two primary functions: host or network interface identification and location addressing. There are two versions in use today: IPv4 and IPv6.',
};
export default en;