/**
 * i18n tool shard (smart-website-color-scheme / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'Below AA',
  tool_smart_website_color_scheme_aa_pass: 'AA ok',
  tool_smart_website_color_scheme_add_theme: 'Add theme',
  tool_smart_website_color_scheme_article:
    'Build a smart website color scheme from one brand color: shared neutrals, semantic tokens where links stay neutral and status colors stay independent, a light UI chrome preview, contrast self-checks, and copyable :root CSS — all local in your browser.',
  tool_smart_website_color_scheme_bad_hex: 'Enter a valid 3- or 6-digit HEX color (e.g. #0F6E8C).',
  tool_smart_website_color_scheme_bad_id: 'Theme id must be unique, 1–32 chars: letters, numbers, - or _.',
  tool_smart_website_color_scheme_check_muted: 'Muted text on surface',
  tool_smart_website_color_scheme_check_on_action: 'Text on action (on-action)',
  tool_smart_website_color_scheme_check_text: 'Body text on surface',
  tool_smart_website_color_scheme_checks_label: 'Contrast self-check (active theme)',
  tool_smart_website_color_scheme_clear: 'Clear',
  tool_smart_website_color_scheme_col_role: 'Role',
  tool_smart_website_color_scheme_col_token: 'Token',
  tool_smart_website_color_scheme_col_value: 'Value',
  tool_smart_website_color_scheme_copy_css: 'Copy CSS',
  tool_smart_website_color_scheme_copy_done: 'Copied',
  tool_smart_website_color_scheme_copy_json: 'Copy JSON',
  tool_smart_website_color_scheme_cp_brand: 'Brand',
  tool_smart_website_color_scheme_cp_btn: 'Outline button',
  tool_smart_website_color_scheme_cp_card_body: 'Card body uses muted text. Links stay neutral — not the brand action color.',
  tool_smart_website_color_scheme_cp_card_title: 'Card title',
  tool_smart_website_color_scheme_cp_err: 'Error message uses danger, not brand.',
  tool_smart_website_color_scheme_cp_link: 'Related link',
  tool_smart_website_color_scheme_cp_nav: 'Nav item',
  tool_smart_website_color_scheme_cp_side1: 'Sidebar',
  tool_smart_website_color_scheme_cp_side2: 'Active',
  tool_smart_website_color_scheme_desc:
    'Smart website scheme: neutrals + semantic CSS tokens, neutral links, status colors — local.',
  tool_smart_website_color_scheme_description:
    'Generate a smart website color scheme in your browser. Steps: pick a brand HEX (sample teal #0F6E8C), get shared neutrals, action/hover/soft/focus, neutral links, fixed status colors, a chrome preview, AA self-checks, then copy :root CSS or JSON. Example loads on open. Rule-based — not cloud AI; nothing uploads.',
  tool_smart_website_color_scheme_empty: 'Generate a scheme first, then copy CSS or JSON.',
  tool_smart_website_color_scheme_example:
    'Load the sample (theme id teal, #0F6E8C). Preview shows a white surface, teal soft highlight on the active sidebar item (no left accent bar), neutral body links, and a red danger line. Semantics map --link to text color (not --action). Copy CSS yields :root neutrals plus html[data-theme="teal"] overrides.',
  tool_smart_website_color_scheme_example_title: 'Example',
  tool_smart_website_color_scheme_faq_a1:
    'Here “smart” means deterministic rules: neutrals stay fixed, brand derives action/hover/soft/focus, links stay neutral, and status colors never follow the brand. No model call and no upload — math runs in this tab.',
  tool_smart_website_color_scheme_faq_a2:
    'Default links use text colors so the page does not turn into a brand-colored hyperlink wall. Brand color is reserved for actions, selection, focus rings, and light soft fills.',
  tool_smart_website_color_scheme_faq_a3:
    'Danger, success, warning, and info stay fixed across themes. An amber brand must not become the error color, or the whole UI looks like an alert.',
  tool_smart_website_color_scheme_faq_a4:
    'Use Generate Brand Color Scale when you need a 50–950 ramp or HEX/HSL/OKLCH listings. Use this page for a full light-site semantic scheme (bg/surface/link/action/status) ready to paste.',
  tool_smart_website_color_scheme_faq_a5:
    'Self-checks cover a few key pairs on the active theme. For arbitrary foreground/background pairs or AAA, open the WCAG contrast checker and paste any token HEX.',
  tool_smart_website_color_scheme_faq_q1: 'Is “smart” the same as AI color generation?',
  tool_smart_website_color_scheme_faq_q2: 'Why are links not the brand color?',
  tool_smart_website_color_scheme_faq_q3: 'Why don’t status colors change with the theme?',
  tool_smart_website_color_scheme_faq_q4: 'When should I use Generate Brand Color Scale instead?',
  tool_smart_website_color_scheme_faq_q5: 'How complete is the contrast self-check?',
  tool_smart_website_color_scheme_generate: 'Generate',
  tool_smart_website_color_scheme_how_body:
    'Enter one or more brand themes (id + HEX, up to four). The tool keeps a shared neutral ladder, derives action tokens from each brand, maps semantic roles (including neutral links and fixed status colors), paints a light chrome preview, runs AA self-checks, and lets you copy CSS variables or JSON — all locally.',
  tool_smart_website_color_scheme_how_title: 'How it works',
  tool_smart_website_color_scheme_max_themes: 'You can add up to 4 themes that share the same neutrals.',
  tool_smart_website_color_scheme_preview_label: 'Light UI preview',
  tool_smart_website_color_scheme_primitives_label: 'Primitives (active theme + shared neutrals)',
  tool_smart_website_color_scheme_remove_theme: 'Remove',
  tool_smart_website_color_scheme_role_action: 'Action / brand emphasis',
  tool_smart_website_color_scheme_role_bg: 'Page / section background',
  tool_smart_website_color_scheme_role_border: 'Borders & dividers',
  tool_smart_website_color_scheme_role_focus: 'Focus ring',
  tool_smart_website_color_scheme_role_link: 'Default links (neutral)',
  tool_smart_website_color_scheme_role_muted: 'Secondary text',
  tool_smart_website_color_scheme_role_on_action: 'Text on solid action',
  tool_smart_website_color_scheme_role_status: 'Status (decoupled from brand)',
  tool_smart_website_color_scheme_role_surface: 'Raised surface / cards',
  tool_smart_website_color_scheme_role_text: 'Body / strong text',
  tool_smart_website_color_scheme_rules_body:
    'Layered tokens, link vs action, status independence, contrast hints, and privacy.',
  tool_smart_website_color_scheme_rules_item_1:
    'Primitives hold raw neutrals and brand derivatives. Semantics name purpose (bg, surface, link, action…). Components should only reference semantics.',
  tool_smart_website_color_scheme_rules_item_2:
    'Brand → --action; hover darkens about 22%; soft ≈ 10% alpha; focus-ring ≈ 40% alpha; --bg is a lightly tinted neutral.',
  tool_smart_website_color_scheme_rules_item_3:
    'Links map to text / text-strong (neutral). Do not bind default --link to --action.',
  tool_smart_website_color_scheme_rules_item_4:
    'Danger / success / warning / info stay fixed across themes so brand never replaces error semantics.',
  tool_smart_website_color_scheme_rules_item_5:
    'Privacy: generation, preview, and clipboard copy run in this tab. No upload of brand colors.',
  tool_smart_website_color_scheme_rules_title: 'Rules you should expect',
  tool_smart_website_color_scheme_sample: 'Sample',
  tool_smart_website_color_scheme_semantics_label: 'Semantics (active theme)',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'theme id',
  tool_smart_website_color_scheme_themes_hint:
    'Shared neutrals + status colors; each theme only overrides brand-derived tokens. Max 4 themes.',
  tool_smart_website_color_scheme_themes_label: 'Brand themes',
  tool_smart_website_color_scheme_title: 'Smart Website Color Scheme — Semantic CSS Tokens',
  tool_smart_website_color_scheme_usecase_1:
    'Tooling or SaaS chrome: ship a readable light shell with brand accents on selection and focus, not on every link.',
  tool_smart_website_color_scheme_usecase_2:
    'Landing rebrands: swap html[data-theme] brands while keeping the same neutral skeleton and status colors.',
  tool_smart_website_color_scheme_usecase_3:
    'Design-to-dev handoff: paste :root CSS variables instead of screenshot HEX lists.',
  tool_smart_website_color_scheme_usecases_title: 'Good fits',
  tool_smart_website_color_scheme_warn_contrast:
    'Warning: text on the action color is below 4.5:1 — deepen the brand or adjust --on-action before shipping solid buttons.',
};
export default en;
