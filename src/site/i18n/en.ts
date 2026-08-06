import type { SiteLangDict } from './types';
const en: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Home',
  nav_devlogs: 'Dev Logs',
  nav_tools: 'Tools',
  footer_text: 'Online Free Tools · Learning project · Iterating',
  tool_headers_title: 'Check HTTP Response Headers Online',
  tool_headers_description:
    'Inspect a URL\'s HTTP response headers from the edge. Process: submit https URL, send HEAD (fall back to GET), follow redirects, show status and header map, block private hosts. Example: read Cache-Control, CORS, and Strict-Transport-Security while debugging CDN or redirects.',
  tool_headers_article:
    'Use this checker to see the response headers our edge receives for a public URL — useful for caching, CORS, redirects, and security header spot-checks. The request is proxied; we do not store page bodies.',
  url_label: 'URL',
  url_placeholder: 'e.g. https://example.com',
  fetch_button: 'Fetch headers',
  result_title: 'Result',
  status_label: 'Status',
  final_url_label: 'Final URL',
  headers_label: 'Headers',
  error_prefix: 'Error: ',
  note_title: 'Notes',
  note_1: 'Some sites reject HEAD; we fall back to GET. The goal is headers, not scraping the body.',
  note_2: 'Localhost and private network targets are blocked so the worker cannot probe internal hosts.',
  tool_headers_how_title: 'How it works',
  tool_headers_how_body:
    'Paste a public http(s) URL and fetch. Our edge worker sends HEAD (then GET if needed), follows redirects, and returns the status, final URL, and response header map it observed. Private hosts are rejected. This is an edge view — it may differ from your laptop\'s DevTools if CDN or geo routing differs.',
  tool_headers_rules_title: 'What the checker does',
  tool_headers_rules_body:
    'The worker is a short-lived proxy for header inspection. It does not keep page content as a product feature. Header names follow HTTP semantics (see References).',
  tool_headers_rules_item_1: 'Prefer HEAD; fall back to GET when HEAD is unsupported.',
  tool_headers_rules_item_2: 'Follow redirects and report the final URL.',
  tool_headers_rules_item_3: 'Block localhost / private IP targets.',
  tool_headers_rules_item_4: 'Surface common headers such as Cache-Control, CORS, and CSP when present.',
  tool_headers_example_title: 'Example',
  tool_headers_example:
    'Example: fetch https://example.com → status 200, final URL unchanged, headers include content-type: text/html and often cache-control or security headers depending on the origin.',
  tool_headers_usecases_title: 'When to use it',
  tool_headers_usecase_1: 'Confirm Cache-Control or CDN caching before a release.',
  tool_headers_usecase_2: 'Debug CORS preflight failures by reading Access-Control-* headers.',
  tool_headers_usecase_3: 'Spot-check whether CSP, HSTS, or other security headers are actually served.',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — HTTP Semantics',
  tool_headers_ref_mdn_label: 'MDN — HTTP headers',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP Caching',
  tool_markdown_title: 'Markdown ↔ HTML Converter — Sanitize & Preview',
  tool_markdown_description:
    'Need safe HTML from Markdown, or Markdown back from messy HTML? Switch direction, paste locally, then preview or download. We parse with marked or Turndown and clean with DOMPurify. Example: ship a README as HTML, or pull CMS markup into Git-friendly Markdown.',
  tool_markdown_article:
    'One page for both directions: live preview, export, and plain talk about what sanitization removes and what Turndown cannot keep. Paste never leaves the tab; libraries may still load from a CDN.',
  tool_markdown_dir_label: 'Conversion direction',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'Copy HTML',
  tool_markdown_copy_md: 'Copy Markdown',
  tool_markdown_copy_done: 'Copied',
  tool_markdown_download: 'Download HTML',
  tool_markdown_download_md: 'Download Markdown',
  tool_markdown_clear: 'Clear',
  tool_markdown_full_doc: 'Generate full HTML document',
  tool_markdown_input_label: 'Markdown input',
  tool_markdown_preview_label: 'HTML preview',
  tool_markdown_html_input_label: 'HTML input',
  tool_markdown_md_output_label: 'Markdown output',
  tool_markdown_placeholder:
    "# Title\n\nBasic Markdown supported: **bold**, lists, and code blocks.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Hello Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>Title</h1>\n<p>Hello <strong>world</strong></p>',
  tool_markdown_sample_md:
    "# Title\n\nBasic Markdown supported: **bold**, lists, and code blocks.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Hello Markdown');\n```",
  tool_markdown_sample_html: '<h1>Title</h1>\n<p>Hello <strong>world</strong></p>',
  tool_markdown_export_title: 'Markdown to HTML Export',
  tool_markdown_export_description:
    'Generate a full HTML document from Markdown including sanitization and template wrapping. Steps: render Markdown, inject into HTML template, add meta and assets, provide download. Example: export a post as a standalone .html file.',
  tool_markdown_large_warn:
    'Very large paste (>200k characters). Conversion may feel slow — try a shorter excerpt.',
  tool_markdown_need_lib: 'Could not load a conversion library. Check your connection and refresh.',
  tool_markdown_loss_hint:
    'Little or no Markdown was produced — scripts, empty tags, or unsupported markup may have been removed. See Rules and FAQ.',
  tool_markdown_how_title: 'How it works',
  tool_markdown_how_body:
    'Pick a tab. Left side is input; right side updates in the browser. Markdown → HTML can copy a fragment or wrap a minimal full document. HTML → Markdown yields plain text for editors and LLMs. CDN loads ≠ uploading your paste.',
  tool_markdown_rules_title: 'What each direction does',
  tool_markdown_rules_intro:
    'What the conversion covers: which Markdown syntax is supported, how HTML is sanitized, and how your pasted text is handled locally.',
  tool_markdown_rules_item_md_html:
    'Outbound: marked reads CommonMark-style Markdown; DOMPurify strips risky scripts/attributes before you see or save HTML.',
  tool_markdown_rules_item_html_md:
    'Inbound: sanitize first, then Turndown with ATX headings and fenced code — tuned for readable drafts, not pixel-perfect clones.',
  tool_markdown_rules_item_loss:
    'Expect loss: style blocks, scripts, comments, and fiddly tables often flatten. Do not assume MD→HTML→MD equals the original.',
  tool_markdown_rules_privacy:
    'Your paste stays client-side. Fetching marked / DOMPurify / Turndown from a CDN only delivers code, not your document.',
  tool_markdown_example_title: 'Example',
  tool_markdown_example:
    'From Markdown `# Title` + `Hello **world**` you get a safe heading and bold paragraph. From `<h1>Title</h1><p>Hello <strong>world</strong></p>` you get `# Title` and `Hello **world**`.',
  tool_markdown_usecases_title: 'Good fits',
  tool_markdown_usecase_1:
    'Hand a sanitized HTML export to a CMS or save a standalone .html from a Markdown draft.',
  tool_markdown_usecase_2:
    'Strip email/CMS HTML down to Markdown before committing to a docs repo.',
  tool_markdown_usecase_3:
    'Normalize rich-text clipboard junk before an LLM prompt.',
  tool_yaml_json_title: 'YAML ↔ JSON Converter — Types, Multi-doc & Local',
  tool_yaml_json_description:
    'Convert YAML to JSON or JSON to YAML in your browser. Steps: pick a direction, paste config, optionally enable JSON-safe types, then copy or download. Multi-document YAML (`---`) becomes a JSON array. Example: turn a short service map into indented JSON for an API client — paste stays local.',
  tool_yaml_json_article:
    'Bidirectional YAML ↔ JSON with explicit typing rules, multi-document policy, and honest local-processing notes. Built for config interchange, not a second thin URL.',
  tool_yaml_json_dir_label: 'Conversion direction',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_convert: 'Convert',
  tool_yaml_json_copy_json: 'Copy JSON',
  tool_yaml_json_copy_yaml: 'Copy YAML',
  tool_yaml_json_copy_done: 'Copied',
  tool_yaml_json_download_json: 'Download JSON',
  tool_yaml_json_download_yaml: 'Download YAML',
  tool_yaml_json_sample: 'Load sample',
  tool_yaml_json_clear: 'Clear',
  tool_yaml_json_json_safe: 'JSON-safe types (keep bare yes/no as strings)',
  tool_yaml_json_indent_label: 'Indent',
  tool_yaml_json_indent_2: '2 spaces',
  tool_yaml_json_indent_4: '4 spaces',
  tool_yaml_json_indent_minify: 'Minify JSON',
  tool_yaml_json_yaml_input_label: 'YAML input',
  tool_yaml_json_json_output_label: 'JSON output',
  tool_yaml_json_json_input_label: 'JSON input',
  tool_yaml_json_yaml_output_label: 'YAML output',
  tool_yaml_json_yaml_placeholder: 'name: demo\nenabled: true\nitems:\n  - a\n  - b',
  tool_yaml_json_json_placeholder: '{\n  "title": "Hello",\n  "count": 2\n}',
  tool_yaml_json_sample_yaml: 'name: demo\nenabled: true\nitems:\n  - a\n  - b',
  tool_yaml_json_sample_json: '{\n  "title": "Hello",\n  "count": 2\n}',
  tool_yaml_json_large_warn:
    'Very large paste (>200k characters). Conversion may feel slow — try a shorter excerpt.',
  tool_yaml_json_need_lib: 'Could not load js-yaml. Check your connection and refresh.',
  tool_yaml_json_empty: 'Paste some input first.',
  tool_yaml_json_how_title: 'How it works',
  tool_yaml_json_how_body:
    'Choose YAML → JSON or JSON → YAML. Conversion runs with js-yaml in this tab. Multi-document streams separated by --- become a JSON array; a single document stays a single JSON value. Errors from YAML include line and column when the parser provides a mark.',
  tool_yaml_json_rules_title: 'Rules you should expect',
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
  tool_yaml_json_example_title: 'Example',
  tool_yaml_json_example:
    'YAML `name: demo` + list `items: [a, b]` becomes JSON `{"name":"demo","items":["a","b"]}`. JSON `{"title":"Hello","count":2}` dumps to indented YAML. Boundary: bare `flag: yes` becomes boolean true under DEFAULT schema; enable JSON-safe types to keep the string "yes".',
  tool_yaml_json_usecases_title: 'Good fits',
  tool_yaml_json_usecase_1:
    'DevOps: turn multi-resource Kubernetes YAML (--- separated) into a JSON array for scripts.',
  tool_yaml_json_usecase_2:
    'Developers: reshape an API JSON payload into readable YAML before editing config by hand.',
  tool_yaml_json_usecase_3:
    'Data / AI pipelines: bridge human-edited YAML parameters with JSON-only tooling.',
  tool_bmi_title: 'BMI Calculator — How to Calculate Body Mass Index',
  tool_bmi_description:
    'Calculate Body Mass Index (BMI) with the adult screening formula. Process: pick metric or imperial units, enter weight and height, compute BMI, then map to common adult categories. Example: 70 kg and 175 cm → BMI 22.9 (Normal). Educational screening only — not a diagnosis.',
  tool_bmi_article:
    'This free BMI calculator shows how adult Body Mass Index is computed from weight and height, including metric and imperial formulas, category cutoffs, and clear limits (athletes, children). Results stay in your browser.',
  tool_bmi_weight_label: 'Weight (kg)',
  tool_bmi_weight_placeholder: 'Enter weight in kilograms',
  tool_bmi_height_label: 'Height (cm)',
  tool_bmi_height_placeholder: 'Enter height in centimeters',
  tool_bmi_calculate: 'Calculate BMI',
  tool_bmi_how_title: 'How it works',
  tool_bmi_how_body:
    'Choose metric or imperial units, enter weight and height, then calculate. The tool applies the standard adult BMI formula, shows one decimal place, and maps the value to common adult screening categories. Numbers are computed in your browser and are not uploaded.',
  tool_bmi_formula_title: 'BMI formula and adult categories',
  tool_bmi_formula_body:
    'Metric: BMI = weight (kg) ÷ height (m)². Imperial: BMI = 703 × weight (lb) ÷ height (in)². Adult cutoffs used here follow widely published screening bands.',
  tool_bmi_formula_item_1: 'Underweight: BMI < 18.5',
  tool_bmi_formula_item_2: 'Normal: BMI 18.5–24.9',
  tool_bmi_formula_item_3: 'Overweight: BMI 25–29.9',
  tool_bmi_formula_item_4: 'Obesity: BMI ≥ 30',
  tool_bmi_example_title: 'Example',
  tool_bmi_example:
    'Example (metric): weight 70 kg, height 175 cm → height = 1.75 m → BMI = 70 / (1.75²) ≈ 22.9 → Normal screening band.',
  tool_bmi_usecases_title: 'When to use it',
  tool_bmi_usecase_1: 'Quick adult self-check before a routine health visit (screening only).',
  tool_bmi_usecase_2: 'Fitness onboarding to record a baseline BMI alongside other metrics.',
  tool_bmi_usecase_3: 'Convert and verify the same measurement in metric vs imperial units.',
  tool_bmi_ref_who_label: 'WHO — Obesity and overweight fact sheet',
  tool_bmi_ref_cdc_label: 'CDC — Adult BMI categories',
  bmi_chart_title: 'Adult BMI categories (screening)',
  bmi_underweight: 'Underweight',
  bmi_normal: 'Normal',
  bmi_overweight: 'Overweight',
  bmi_obese: 'Obesity',
  bmi_metric_units: 'Metric',
  bmi_imperial_units: 'Imperial',
  bmi_unit_group_label: 'Unit system',
  bmi_result_label: 'Your BMI',
  bmi_invalid_input: 'Enter positive weight and height values to calculate.',
  bmi_weight_lbs: 'Weight (lbs)',
  bmi_weight_lbs_placeholder: 'Weight in lbs',
  bmi_height_ft: 'Height (ft)',
  bmi_height_ft_placeholder: 'Feet',
  bmi_height_in: 'Height (in)',
  bmi_height_in_placeholder: 'Inches',
  bmi_interpretation_underweight:
    'Screening result: underweight band. BMI is not a diagnosis — discuss results with a qualified clinician if needed.',
  bmi_interpretation_normal:
    'Screening result: normal band for adults. BMI does not measure body fat or fitness by itself.',
  bmi_interpretation_overweight:
    'Screening result: overweight band. BMI is not a diagnosis — discuss results with a qualified clinician if needed.',
  bmi_interpretation_obese:
    'Screening result: obesity band. BMI is not a diagnosis — discuss results with a qualified clinician if needed.',
  tool_squarefeet_title: 'Square Feet to Square Meters — Area Converter for Homes & Renovation',
  tool_squarefeet_description:
    'Convert room area between square feet and square meters for listings and renovation. Process: pick ft/m/in, enter length × width, compute area, then show sq ft and m² with the NIST factor 1 ft² = 0.09290304 m². Example: 850 sq ft apartment ≈ 78.97 m².',
  tool_squarefeet_article:
    'Estimate rectangular floor area from length and width, then convert between square feet and square meters. Built for apartment listings, flooring take-offs, and paint estimates — not a property valuation tool. This page only converts planar area; it does not define living vs gross floor area.',
  tool_squarefeet_length_label: 'Length',
  tool_squarefeet_length_placeholder: 'Enter length',
  tool_squarefeet_width_label: 'Width',
  tool_squarefeet_width_placeholder: 'Enter width',
  tool_squarefeet_calculate: 'Convert area',
  tool_squarefeet_unit_group_label: 'Input units',
  unit_feet: 'Feet',
  unit_meters: 'Meters',
  unit_inches: 'Inches',
  sqft_unit: 'sq ft',
  tool_squarefeet_result_note: 'Rounded to two decimal places. Factor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_invalid_input: 'Enter positive length and width values.',
  tool_squarefeet_usage_title: 'Usage',
  tool_squarefeet_usage:
    'Enter length and width in the selected unit to get square feet plus the square-meter equivalent for flooring or listing checks.',
  tool_squarefeet_how_title: 'How it works',
  tool_squarefeet_how_body:
    'Choose whether your dimensions are in feet, meters, or inches. Multiply length × width after converting both sides to feet, then convert the area to square meters with the exact SI factor. Negative or empty inputs are rejected.',
  tool_squarefeet_formula_title: 'Area formula and conversion factor',
  tool_squarefeet_formula_body:
    'Area (ft²) = length (ft) × width (ft). When sides are in meters: ft² = (L×W) ÷ 0.09290304. When sides are in inches: convert each side ÷ 12 first. Exact factor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Feet input: area_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Meters input: area_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Inches input: area_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = area_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_example_title: 'Example',
  tool_squarefeet_example:
    'Listing example: an 850 sq ft apartment → 850 × 0.09290304 ≈ 78.97 m². Room example: 10 ft × 12 ft = 120 sq ft ≈ 11.15 m² — useful when comparing a US listing to local m² ads.',
  tool_squarefeet_usecases_title: 'When this helps',
  tool_squarefeet_usecase_1: 'Compare a US listing in sq ft with local ads that quote living area in m².',
  tool_squarefeet_usecase_2: 'Estimate flooring or carpet area for a rectangular room before ordering materials.',
  tool_squarefeet_usecase_3: 'Rough paint or renovation quantity checks when drawings use mixed units.',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Guide for the Use of the International System of Units (SI)',
  tool_ip_address_title: 'What Is My IP Address — See Your Public IP',
  tool_ip_address_description:
    'See the public IP address our edge observes for your connection. Process: open the page or tap Refresh; the worker reads the trusted client address from the request. Example: edge may show 203.0.113.10. VPN or proxy shows the exit IP, not your LAN address.',
  tool_ip_address_article:
    'This page shows your public egress IP as seen by our edge — useful for VPN checks, support tickets, and light network debugging. It is not a geolocation or ISP lookup product.',
  tool_ip_address_how_title: 'How it works',
  tool_ip_address_how_body:
    'Your browser calls our edge API. The worker reads the connection\'s trusted client IP (not a forgeable browser header alone) and returns that string. Refresh to fetch again; no account or install is required.',
  tool_ip_address_rules_title: 'What this IP means',
  tool_ip_address_rules_body:
    'The value is the public address our edge associates with your TCP/TLS connection. Treat it as the egress identity websites usually see — with these limits:',
  tool_ip_address_rules_item_1: 'With a VPN or HTTP proxy, you see the provider\'s exit IP, not your home LAN address.',
  tool_ip_address_rules_item_2: 'Behind NAT, many devices share one public IP; 192.168.x.x-style LAN IPs never appear here.',
  tool_ip_address_rules_item_3: 'We prefer the edge-trusted client address over client-supplied X-Forwarded-For alone (that header can be spoofed).',
  tool_ip_address_rules_item_4: 'IPv4 or IPv6 may appear depending on your path; dual-stack clients can flip after reconnect.',
  tool_ip_address_example_title: 'Example',
  tool_ip_address_example:
    'Documentation-style example: edge sees 203.0.113.10 (TEST-NET-3 reserved address). Your live result will be your real public egress IP.',
  tool_ip_address_usecases_title: 'When to use it',
  tool_ip_address_usecase_1: 'Confirm whether a VPN or proxy is actually changing your public egress IP.',
  tool_ip_address_usecase_2: 'Tell support or a firewall admin the public IP they should allowlist.',
  tool_ip_address_usecase_3: 'Quick check during remote-access or API allowlist debugging.',
  tool_ip_address_ref_mdn_label: 'MDN — X-Forwarded-For header (spoofing caveats)',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — What is an IP address?',
  tool_marginal_revenue_title: 'Marginal Revenue Calculator — Formula MR = ΔTR / ΔQ',
  tool_marginal_revenue_description:
    'Calculate marginal revenue with the discrete formula MR = ΔTR / ΔQ. Process: enter quantity and total revenue at two points, subtract to get ΔTR and ΔQ, then divide. Example: Q 10→11, TR 1000→1080 → MR = 80. Educational only — not pricing advice.',
  tool_marginal_revenue_article:
    'Marginal revenue is the change in total revenue from a change in quantity sold. This calculator shows the discrete two-point derivation step by step for coursework and rough product checks.',
  tool_marginal_revenue_how_title: 'How it works',
  tool_marginal_revenue_how_body:
    'Enter quantity and total revenue for period (or tier) 1, then the same for tier 2. The tool computes ΔTR = TR2 − TR1 and ΔQ = Q2 − Q1, then MR = ΔTR / ΔQ. All math runs in your browser.',
  tool_marginal_revenue_formula_title: 'Formula derivation',
  tool_marginal_revenue_formula_body:
    'Start from the definition: marginal revenue is how total revenue changes when quantity changes. For two observed points:',
  tool_marginal_revenue_formula_item_1: 'ΔTR = TR₂ − TR₁ (change in total revenue)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (change in quantity)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔTR / ΔQ when ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'A discrete step approximates average MR over the interval; continuous models use dTR/dQ. Negative MR means revenue fell as quantity rose.',
  tool_marginal_revenue_example_title: 'Example',
  tool_marginal_revenue_example:
    'Example: Q₁ = 10, TR₁ = 1000; Q₂ = 11, TR₂ = 1080 → ΔTR = 80, ΔQ = 1 → MR = 80 / 1 = 80.',
  tool_marginal_revenue_usecases_title: 'When to use it',
  tool_marginal_revenue_usecase_1: 'Homework: check a two-tier quantity/revenue table from a textbook problem.',
  tool_marginal_revenue_usecase_2: 'Rough product check: estimate revenue change when output steps up one unit.',
  tool_marginal_revenue_usecase_3: 'Compare MR language with average revenue in introductory microeconomics.',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Marginal Revenue (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principles of Microeconomics (competition chapter)',
  tool_marginal_revenue_q1_label: 'Quantity (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'e.g. 10',
  tool_marginal_revenue_tr1_label: 'Total revenue (TR₁)',
  tool_marginal_revenue_tr1_placeholder: 'e.g. 1000',
  tool_marginal_revenue_q2_label: 'Quantity (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'e.g. 11',
  tool_marginal_revenue_tr2_label: 'Total revenue (TR₂)',
  tool_marginal_revenue_tr2_placeholder: 'e.g. 1080',
  tool_marginal_revenue_quantity_label: 'Quantity',
  tool_marginal_revenue_revenue_label: 'Total Revenue',
  tool_marginal_revenue_calculate: 'Calculate MR',
  tool_marginal_revenue_result_label: 'Marginal Revenue',
  tool_marginal_revenue_zero_dq: 'ΔQ is 0 — quantity must change between the two points.',
  tool_marginal_revenue_detail_tpl: 'ΔTR = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_percentage_change_title: 'Percentage Change Calculator — From Old Value to New',
  tool_percentage_change_description:
    'Calculate percent increase or decrease from an old value to a new value. Process: enter old and new, apply (new − old) / old × 100, then read the signed result. Example: 80 → 100 = +25%. Built for revenue MoM, DAU, and price moves — not the same as percentage points.',
  tool_percentage_change_article:
    'Relative percentage change answers “how much did this metric move versus its baseline?” Enter the old value and the new value; the tool uses (new − old) / old × 100 and labels increase vs decrease. Use it for KPI reporting, not as a substitute for ROI.',
  tool_percentage_change_original_label: 'Old value',
  tool_percentage_change_new_label: 'New value',
  tool_percentage_change_calculate: 'Calculate',
  tool_percentage_change_result_label: 'Percentage change',
  tool_percentage_change_example:
    'Worked example: old = 80, new = 100 → Δ = 20 → (20 / 80) × 100 = 25% increase. Same steps for a drop: 100 → 80 = −20% decrease.',
  tool_percentage_change_result_invalid: 'Old value must be a non-zero number.',
  tool_percentage_change_increase: 'increase',
  tool_percentage_change_decrease: 'decrease',
  tool_percentage_change_no_change: 'no change',
  tool_percentage_change_abs_note: 'Absolute change: {delta}',
  tool_percentage_change_how_title: 'How it works',
  tool_percentage_change_how_body:
    'Enter the baseline (old) value and the later (new) value. The calculator subtracts, divides by the old value, and multiplies by 100. Positive means increase; negative means decrease. If old = 0, relative change is undefined.',
  tool_percentage_change_formula_title: 'Percentage change formula',
  tool_percentage_change_formula_body:
    'Percent change = (new − old) / old × 100. This page uses the signed old value in the denominator (not |old|), so the sign of the result follows the direction of the move when old is positive.',
  tool_percentage_change_formula_item_1: 'Δ = new − old',
  tool_percentage_change_formula_item_2: 'percent = (Δ / old) × 100',
  tool_percentage_change_formula_item_3: 'old = 0 → undefined (tool shows an error)',
  tool_percentage_change_example_title: 'Example',
  tool_percentage_change_usecases_title: 'Business & data uses',
  tool_percentage_change_usecase_1: 'Month-over-month revenue: last month GMV 80 vs this month 100 → +25%.',
  tool_percentage_change_usecase_2: 'Product analytics: DAU rose from 50k to 55k → +10% relative change.',
  tool_percentage_change_usecase_3: 'Pricing: list price cut from 40 to 34 → −15% change (not “6 percentage points”).',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_roi_title: 'ROI Calculator — How to Calculate Return on Investment',
  tool_roi_description:
    'Calculate simple ROI with the formula (Gain − Cost) / Cost × 100%, or (Final − Initial) / Initial × 100%. Process: enter cost and final value (or net gain), then review assumptions about tax, fees, and time. Example: cost 1000, final 1300 → ROI 30%. Educational illustration only — not investment advice.',
  tool_roi_article:
    'Simple return on investment compares net gain to cost as a percentage. Use it for rough campaign or project recaps; it ignores multi-period cash flows unless you encode them yourself in the inputs.',
  tool_roi_initial_label: 'Initial investment (cost)',
  tool_roi_initial_placeholder: 'e.g. 1000',
  tool_roi_final_label: 'Final value',
  tool_roi_final_placeholder: 'e.g. 1300',
  tool_roi_gain_label: 'Net gain (optional)',
  tool_roi_gain_placeholder: 'If known, overrides final − initial',
  tool_roi_calculate: 'Calculate ROI',
  tool_roi_result_label: 'ROI',
  tool_roi_how_title: 'How it works',
  tool_roi_how_body:
    'Enter the amount you put in (cost) and either the ending value or a known net gain. The calculator uses ROI = net / cost × 100%. If net gain is blank, net = final − initial. Division by zero cost is rejected.',
  tool_roi_formula_title: 'Formula and assumptions',
  tool_roi_formula_body:
    'ROI = (Final value − Initial investment) / Initial investment × 100%, or ROI = Net gain / Cost × 100% when you supply net gain directly. Keep these assumptions in mind:',
  tool_roi_formula_item_1: 'Taxes: not estimated here — include after-tax amounts in your inputs if that is your target view.',
  tool_roi_formula_item_2: 'Time: simple ROI ignores holding period; it is not an annualized return.',
  tool_roi_formula_item_3: 'Fees: fold commissions, platform fees, and similar costs into cost or final value yourself.',
  tool_roi_formula_item_4: 'Multi-period cash flows and IRR/NPV are out of scope for this single-period percentage.',
  tool_roi_example_title: 'Example',
  tool_roi_example:
    'Example: cost 1000, final value 1300 → net gain 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_usecases_title: 'When to use it',
  tool_roi_usecase_1: 'Marketing: rough campaign ROI after you already know spend and attributed revenue.',
  tool_roi_usecase_2: 'Coursework: practice the basic ROI percentage with fixed numbers.',
  tool_roi_usecase_3: 'Project recap: summarize one completed initiative as a single cost/gain pair (estimate only).',
  tool_roi_ref_investopedia_label: 'Investopedia — Return on Investment (ROI)',
  tool_roi_ref_guide_label: 'Investopedia — Guide to calculating ROI',
  tool_roi_interpret_positive: 'Positive ROI (gain relative to cost) — educational illustration only.',
  tool_roi_interpret_zero: 'Zero ROI — no net gain or loss on these inputs.',
  tool_roi_interpret_negative: 'Negative ROI (loss relative to cost) — educational illustration only.',
  tool_roi_zero_cost: 'Initial investment must be greater than zero.',
  tool_gradient_title: 'Gradient Calculator — Multivariable ∇f (Partial Derivatives)',
  tool_gradient_description:
    'Compute the gradient ∇f of a scalar field as the vector of partial derivatives. Process: differentiate for each variable, assemble ∇f, evaluate at a point. Demo function f(x,y)=x²y+3y → ∇f=(2xy, x²+3); at (1,2) → (4,4). Used in optimization and ML gradient descent explanations.',
  tool_gradient_desc:
    'Compute the gradient ∇f of a scalar field as the vector of partial derivatives. Process: differentiate for each variable, assemble ∇f, evaluate at a point. Demo function f(x,y)=x²y+3y → ∇f=(2xy, x²+3); at (1,2) → (4,4). Used in optimization and ML gradient descent explanations.',
  tool_gradient_article:
    'The gradient of a multivariable scalar function is the vector of its first partial derivatives. It points toward the steepest local increase and is the building block of gradient-based optimization. This page walks the formula, evaluates a fixed demo function at your (x,y), and links related percentage and ROI tools — it is not a two-point slope (rise/run) calculator.',
  tool_gradient_fn_hint: 'Demo function (fixed for the interactive box):',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'e.g. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'e.g. 2',
  tool_gradient_calculate: 'Evaluate ∇f',
  tool_gradient_result_label: 'Gradient at your point',
  tool_gradient_result_note: 'Evaluated f(x,y)=x²y+3y at ({x}, {y}).',
  tool_gradient_invalid_input: 'Enter finite numeric x and y values.',
  tool_gradient_how_title: 'How it works',
  tool_gradient_how_body:
    'For a scalar f(x₁,…,xₙ), compute each partial ∂f/∂xᵢ holding other variables fixed, stack them into ∇f, then substitute the coordinates of your point. The interactive box uses f(x,y)=x²y+3y so you can check the arithmetic quickly.',
  tool_gradient_formula_title: 'Multivariable gradient formula',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). For two variables: ∇f(x,y) = (∂f/∂x, ∂f/∂y). Direction of ∇f is steepest ascent; −∇f is used in gradient descent.',
  tool_gradient_formula_item_1: 'Take ∂f/∂xᵢ for every variable',
  tool_gradient_formula_item_2: 'Assemble the vector ∇f',
  tool_gradient_formula_item_3: 'Evaluate components at the chosen point',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_example_title: 'Example',
  tool_gradient_example:
    'f(x,y)=x²y+3y. Partials: ∂f/∂x=2xy, ∂f/∂y=x²+3. At (1,2): ∂f/∂x=2·1·2=4, ∂f/∂y=1²+3=4 → ∇f=(4,4).',
  tool_gradient_usecases_title: 'Optimization & ML contexts',
  tool_gradient_usecase_1: 'Check homework partials before plugging into an optimization step.',
  tool_gradient_usecase_2: 'Explain gradient descent: each step moves opposite ∇loss at the current parameters.',
  tool_gradient_usecase_3: 'Physics / field intuition: ∇f points where the scalar field increases fastest.',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradient',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_ip_address_description: "See the public IP address our edge observes for your connection. Process: open the page or tap Refresh; the worker reads the trusted client address from the request. Example: edge may show 203.0.113.10. VPN or proxy shows the exit IP, not your LAN address.",
  tool_ip_address_article: 'This page shows your public egress IP as seen by our edge — useful for VPN checks, support tickets, and light network debugging. It is not a geolocation or ISP lookup product.',
  ip_label: 'Your public IP',
  fetch_ip_button: 'Refresh',
  fetching_message: 'Fetching…',
  what_is_ip_title: 'What is an IP Address?',
  what_is_ip_content: 'An Internet Protocol (IP) address is a numerical label assigned to each device connected to a computer network. It serves two primary functions: host or network interface identification and location addressing. There are two versions in use today: IPv4 and IPv6.',

  nav_about: 'About',
  tool_faq_title: 'Frequently asked questions',
  tool_disclaimer_title: 'Important notice',
  tool_references_title: 'References',
  tool_related_title: 'Related tools',
  tool_category_calculator: 'Calculators',
  tool_category_developer: 'Developer tools',

  tool_headers_faq_q1: 'What do HTTP response headers show?',
  tool_headers_faq_a1:
    'Metadata from the server response such as content type, caching rules, redirects, and security policies like HSTS, CSP, or CORS.',
  tool_headers_faq_q2: 'Does this tool download the full page body?',
  tool_headers_faq_a2:
    'It prefers HEAD and falls back to GET when needed. The product goal is inspecting headers, not scraping or storing page content.',
  tool_headers_faq_q3: 'Why are localhost or private IPs blocked?',
  tool_headers_faq_a3:
    'Requests to private networks are blocked so the worker cannot be used to probe internal hosts.',
  tool_headers_faq_q4: 'Is this the same as browser DevTools?',
  tool_headers_faq_a4:
    'Not always. You see headers from our edge location. CDN geo routing or bot filters can make results differ from your local browser.',
  tool_headers_faq_q5: 'Do you keep logs of the URLs I check?',
  tool_headers_faq_a5:
    'The fetch is a short-lived edge request for this tool. We do not offer a URL history product; avoid pasting secrets in query strings.',

  tool_ip_address_faq_q1: 'How does this page get my IP?',
  tool_ip_address_faq_a1:
    'Your browser requests our edge API. The worker returns the trusted client IP bound to that connection — the public egress address our infrastructure observes.',
  tool_ip_address_faq_q2: 'What if I use a VPN or proxy?',
  tool_ip_address_faq_a2:
    'You usually see the VPN/proxy exit IP, not your home router LAN address. That is expected: sites see the same egress identity.',
  tool_ip_address_faq_q3: 'Why is this different from my LAN IP?',
  tool_ip_address_faq_a3:
    'Private LAN addresses (for example 192.168.x.x) stay inside your network via NAT. This tool only shows the public address on the internet side.',
  tool_ip_address_faq_q4: 'Do you store my IP?',
  tool_ip_address_faq_a4:
    'The lookup is a short-lived edge request for this tool. We do not offer an IP history product; treat the result as ephemeral display, not a log archive.',

  tool_markdown_faq_q1: 'Do you sanitize the HTML output?',
  tool_markdown_faq_a1:
    'On Markdown → HTML, yes — DOMPurify runs before preview and before copy/download so common script payloads do not survive.',
  tool_markdown_faq_q2: 'Will HTML → Markdown keep my layout?',
  tool_markdown_faq_a2:
    'Usually not. Think “readable Markdown draft”: scripts and heavy styling go away; nested tables may collapse.',
  tool_markdown_faq_q3: 'Does paste leave my machine?',
  tool_markdown_faq_a3:
    'Conversion is local. A CDN may serve the open-source libraries; that network request is not an upload of your text.',
  tool_markdown_faq_q4: 'Can I round-trip without changes?',
  tool_markdown_faq_a4:
    'No guarantee. Whitespace and unsupported tags drift. If you need byte equality, diff outside this tool.',
  tool_markdown_faq_q5: 'What syntax and export options exist?',
  tool_markdown_faq_a5:
    'Headings, lists, links, emphasis, fenced code (CommonMark basics). Toggle full-document wrap when you need a shareable .html shell.',

  tool_yaml_json_faq_q1: 'Will bare yes or no become a boolean?',
  tool_yaml_json_faq_a1:
    'Under the default js-yaml schema, often yes — unquoted yes/no/on/off can become booleans. Tick “JSON-safe types” to keep those scalars as strings unless they are explicitly typed.',
  tool_yaml_json_faq_q2: 'How do you handle multi-document YAML?',
  tool_yaml_json_faq_a2:
    'Documents separated by --- are parsed with loadAll. One document becomes one JSON value; two or more become a JSON array. We do not drop documents after the first.',
  tool_yaml_json_faq_q3: 'Does my paste leave the browser?',
  tool_yaml_json_faq_a3:
    'Conversion stays in the tab. A CDN may serve js-yaml; that request downloads code only — it is not an upload of your YAML or JSON text.',
  tool_yaml_json_faq_q4: 'Can I round-trip without losing anything?',
  tool_yaml_json_faq_a4:
    'No. Comments never survive JSON. Anchors expand into repeated values. Dumping JSON back to YAML will not restore original comments or anchor names.',
  tool_yaml_json_faq_q5: 'Where do error line numbers come from?',
  tool_yaml_json_faq_a5:
    'Invalid YAML raises a parser mark with line and column when available. Invalid JSON is reported by JSON.parse without YAML-style marks.',

  tool_bmi_faq_q1: 'What is the BMI formula?',
  tool_bmi_faq_a1: 'Metric: BMI = weight(kg) / height(m)². Imperial: BMI = 703 × weight(lb) / height(in)².',
  tool_bmi_faq_q2: 'What do the BMI categories mean?',
  tool_bmi_faq_a2:
    'Common adult screening cutoffs: underweight <18.5, normal 18.5–24.9, overweight 25–29.9, obesity ≥30. Bands are aids, not diagnoses.',
  tool_bmi_faq_q3: 'Is BMI accurate for athletes?',
  tool_bmi_faq_a3:
    'No guarantee. BMI ignores muscle vs fat. Athletes can land in a high band with low body fat — ask a clinician for personal assessment.',
  tool_bmi_faq_q4: 'Can I use this for children or during pregnancy?',
  tool_bmi_faq_a4:
    'These adult cutoffs are not designed for children, teens, or pregnancy. Use age-specific charts and clinical guidance instead.',
  tool_bmi_disclaimer:
    'This BMI calculator is for educational adult screening only. It is not medical advice, does not diagnose disease, and does not replace care from a qualified health professional.',
  tool_bmi_references:
    'WHO obesity and overweight fact sheet; CDC adult BMI category guidance; standard metric and imperial BMI formulas.',

  tool_roi_faq_q1: 'Which ROI formula does this use?',
  tool_roi_faq_a1:
    'ROI = (Final − Initial) / Initial × 100%, or Net gain / Cost × 100% when you enter net gain. Positive means a gain on these inputs; negative means a loss.',
  tool_roi_faq_q2: 'What about taxes, fees, and time?',
  tool_roi_faq_a2:
    'We do not estimate taxes or fees. Fold them into cost or final value yourself. Simple ROI also ignores holding period — it is not annualized.',
  tool_roi_faq_q3: 'What if initial investment is zero?',
  tool_roi_faq_a3:
    'ROI is undefined when cost is zero (division by zero). Enter a positive cost amount.',
  tool_roi_faq_q4: 'Is this investment advice?',
  tool_roi_faq_a4:
    'No. Results are educational illustrations only and are not investment, tax, or financial advice.',
  tool_roi_disclaimer:
    'ROI results are educational illustrations only and are not investment, tax, or financial advice. Past or hypothetical returns do not guarantee future results.',
  tool_roi_references:
    'Investopedia definitions and guides on return on investment; standard simple ROI as net gain divided by cost.',

  tool_marginal_revenue_faq_q1: 'How is marginal revenue derived here?',
  tool_marginal_revenue_faq_a1:
    'MR = ΔTR / ΔQ with ΔTR = TR₂ − TR₁ and ΔQ = Q₂ − Q₁. The page shows that discrete derivation, not a continuous derivative.',
  tool_marginal_revenue_faq_q2: 'What if ΔQ is zero?',
  tool_marginal_revenue_faq_a2:
    'MR is undefined when quantity does not change. Pick two different quantity points.',
  tool_marginal_revenue_faq_q3: 'How is MR different from average revenue?',
  tool_marginal_revenue_faq_a3:
    'Average revenue is TR / Q for a level of output. Marginal revenue is the change in TR when Q changes — they coincide only in special cases such as perfect competition with constant price.',
  tool_marginal_revenue_faq_q4: 'Does a positive MR mean I should raise output?',
  tool_marginal_revenue_faq_a4:
    'No. This tool does not give pricing or production advice. Profit decisions also need marginal cost and other constraints.',
  tool_marginal_revenue_disclaimer:
    'This calculator is for learning microeconomics concepts. It is not business, pricing, or investment advice.',
  tool_marginal_revenue_references:
    'Investopedia marginal revenue entry; introductory microeconomics treatment of MR as ΔTR/ΔQ (e.g. OpenStax Principles of Microeconomics).',

  tool_squarefeet_faq_q1: 'What conversion factor do you use for ft² ↔ m²?',
  tool_squarefeet_faq_a1: 'Exactly 1 ft² = 0.09290304 m² (SI / NIST guidance). Results are rounded to two decimals for display.',
  tool_squarefeet_faq_q2: 'Does this distinguish living area vs gross building area?',
  tool_squarefeet_faq_a2: 'No. It only converts planar rectangle area between units. Listing definitions (套内/建筑, net/gross) are outside this tool.',
  tool_squarefeet_faq_q3: 'Can I use it to estimate home prices?',
  tool_squarefeet_faq_a3: 'No. Area conversion is not a valuation, appraisal, or price-per-square-foot market model.',
  tool_squarefeet_faq_q4: 'What about L-shaped rooms?',
  tool_squarefeet_faq_a4: 'Split into rectangles, convert each, then add. Irregular polygons are not modeled here.',

  tool_percentage_change_faq_q1: 'What is the percentage change formula?',
  tool_percentage_change_faq_a1: 'Percent change = (new − old) / old × 100. Positive means increase; negative means decrease.',
  tool_percentage_change_faq_q2: 'Why must the old value be non-zero?',
  tool_percentage_change_faq_a2: 'Division by zero is undefined. If the baseline is 0, relative percentage change from that base cannot be computed.',
  tool_percentage_change_faq_q3: 'Is percentage change the same as percentage points?',
  tool_percentage_change_faq_a3: 'No. Moving from 10% to 12% is a 2 percentage-point rise, but a 20% relative increase ((12−10)/10×100).',
  tool_percentage_change_faq_q4: 'How is this different from ROI?',
  tool_percentage_change_faq_a4: 'ROI compares gain to investment cost. Percentage change compares any new value to an old baseline and is not investment-specific.',

  tool_gradient_faq_q1: 'What is a gradient in multivariable calculus?',
  tool_gradient_faq_a1: 'The gradient ∇f is the vector of partial derivatives and points toward the steepest local increase of f.',
  tool_gradient_faq_q2: 'How do I compute it by hand?',
  tool_gradient_faq_a2: 'Differentiate with respect to each variable while holding others constant, assemble the components into a vector, then evaluate at a point.',
  tool_gradient_faq_q3: 'Is this the same as ML “gradient” in gradient descent?',
  tool_gradient_faq_a3: 'Same mathematical object: ∇ of a scalar loss. Descent steps move opposite ∇loss. This page teaches the calculus definition on a demo function — it does not train a model.',
  tool_gradient_faq_q4: 'Is this a two-point slope (rise/run) calculator?',
  tool_gradient_faq_a4: 'No. For line slope between two points use a slope tool; here ∇f is the multivariable partial-derivative vector.',

  tool_text_diff_title: 'Compare Two Texts Online — Text Diff Checker',
  tool_text_diff_description:
    'Compare two texts online and see what changed. Process: paste original and revised text, pick line, word, or character mode, optionally ignore spaces or fix Windows newlines (CRLF→LF), then highlight adds and deletes in your browser. Example: change "hello world" to "hello there" — word mode shows one replacement.',
  tool_text_diff_article:
    'Use this free text diff checker to compare two strings or documents side by side. Choose line mode for configs and code, word mode for writing and prompts, and character mode for tiny edits. Everything runs locally — your paste is not uploaded.',
  tool_text_diff_example:
    'Example (word mode): A = "Hello world", B = "Hello there" → one change (world → there). Line mode on three lines where only the middle line differs marks that line as changed.',
  tool_text_diff_sample_a: 'Hello world\nline two\nline three',
  tool_text_diff_sample_b: 'Hello there\nline two\nline three',
  tool_text_diff_label_a: 'Original text',
  tool_text_diff_label_b: 'Revised text',
  tool_text_diff_placeholder_a: 'Paste the original text…',
  tool_text_diff_placeholder_b: 'Paste the revised text…',
  tool_text_diff_mode_label: 'Compare by',
  tool_text_diff_mode_lines: 'Line',
  tool_text_diff_mode_words: 'Word',
  tool_text_diff_mode_chars: 'Character',
  tool_text_diff_ignore_ws: 'Ignore spaces',
  tool_text_diff_normalize_eol: 'Treat CRLF and LF the same',
  tool_text_diff_compare: 'Compare',
  tool_text_diff_swap: 'Swap sides',
  tool_text_diff_clear: 'Clear',
  tool_text_diff_result_label: 'Differences',
  tool_text_diff_legend: 'Green = added · Red = removed',
  tool_text_diff_summary: '{added} added, {removed} removed',
  tool_text_diff_no_diff: 'No differences — the two texts match.',
  tool_text_diff_empty_hint: 'Paste text on one or both sides, then compare.',
  tool_text_diff_large_warn: 'Very large paste (>100k characters). Comparison may feel slow — try a shorter excerpt.',
  tool_text_diff_need_lib: 'Could not load the diff library. Check your connection and refresh.',
  tool_text_diff_how_title: 'How it works',
  tool_text_diff_how_body:
    'Paste two versions of a text, pick how fine the comparison should be (line, word, or character), then review green additions and red deletions. Your pasted text stays in the browser and is not uploaded or stored by us. The page may load the open-source jsdiff library from a CDN so the checker can run.',
  tool_text_diff_rules_title: 'How the comparison works',
  tool_text_diff_rules_body:
    'The checker finds a short list of edits that turn text A into text B (classic diff / Myers-style matching via jsdiff). Line mode is best for .env files and code. Word mode is best for sentences and prompts. Character mode catches tiny typos but can look noisy. Ignoring spaces hides indent-only edits. Treating CRLF and LF the same stops whole lines lighting up when only the newline style changed.',
  tool_text_diff_rules_intro:
    'The checker finds a short list of edits that turn text A into text B (classic diff / Myers-style matching via jsdiff). Pick a mode that matches your task:',
  tool_text_diff_rules_item_lines:
    'Line — best for .env, YAML, and code; one changed line lights up as a whole. Fast and easy to scan, but a single-word edit still marks the entire line.',
  tool_text_diff_rules_item_words:
    'Word — best for sentences, emails, and AI prompts; highlights individual words. Clearer for prose, but can split awkwardly on punctuation.',
  tool_text_diff_rules_item_chars:
    'Character — best for tiny typos; most precise, but noisy on longer edits.',
  tool_text_diff_rules_options:
    'Ignore spaces hides indent-only edits. Treat CRLF and LF the same stops whole lines lighting up when only the newline style (Windows vs Unix) changed.',
  tool_text_diff_example_title: 'Example',
  tool_text_diff_usecases_title: 'When to use it',
  tool_text_diff_usecase_1: 'Check config changes: compare two .env or YAML snippets line by line.',
  tool_text_diff_usecase_2: 'Review prompt edits: use word mode to see which wording was added or removed.',
  tool_text_diff_usecase_3: 'Proofread copy or translations: confirm only the intended sentences changed.',
  tool_text_diff_faq_q1: 'Should I compare by line or by word?',
  tool_text_diff_faq_a1: 'Use line mode for code and config files. Use word mode for sentences, emails, and AI prompts — it highlights individual words instead of whole lines.',
  tool_text_diff_faq_q2: 'Is my text uploaded to a server?',
  tool_text_diff_faq_a2:
    'Your pasted text is not uploaded or stored by us — comparison runs in your browser. The page may load the open-source jsdiff library from a CDN; that does not send your text to our servers.',
  tool_text_diff_faq_q3: 'Why does a newline-only change mark a whole line red?',
  tool_text_diff_faq_a3: 'Windows uses CRLF and Unix uses LF, so the same line can look different. Turn on “Treat CRLF and LF the same” before comparing.',
  tool_text_diff_faq_q4: 'Can I compare images or binary files?',
  tool_text_diff_faq_a4: 'No. This tool is for plain text only.',


};
export default en;