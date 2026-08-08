/**
 * i18n tool shard (csv-json / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_csv_json_article:
    'Bidirectional CSV ↔ JSON with explicit type-inference, delimiter and quoting rules, plus how nested JSON flattens to columns. Built for spreadsheet ↔ API interchange, not a second thin URL.',
  tool_csv_json_clear: 'Clear',
  tool_csv_json_convert: 'Convert',
  tool_csv_json_copy_csv: 'Copy CSV',
  tool_csv_json_copy_done: 'Copied',
  tool_csv_json_copy_json: 'Copy JSON',
  tool_csv_json_csv_input_label: 'CSV input',
  tool_csv_json_csv_output_label: 'CSV output',
  tool_csv_json_csv_placeholder: 'sku,title,price\\nA-001,"Chair, oak",129.9\\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: 'Auto-detect',
  tool_csv_json_delimiter_comma: 'Comma ,',
  tool_csv_json_delimiter_label: 'Delimiter',
  tool_csv_json_delimiter_semicolon: 'Semicolon ;',
  tool_csv_json_delimiter_tab: 'Tab',
  tool_csv_json_description:
    'Convert CSV to JSON or JSON to CSV in your browser. Steps: pick a direction, paste or upload, set the delimiter and header, then copy or download. Handles quoted fields with commas, semicolons and tabs, and flattens nested JSON to columns. Example: turn a product sheet (sku, title, price) into a JSON array — data stays local.',
  tool_csv_json_dir_label: 'Conversion direction',
  tool_csv_json_download_csv: 'Download CSV',
  tool_csv_json_download_json: 'Download JSON',
  tool_csv_json_empty: 'Paste some input first.',
  tool_csv_json_example:
    'CSV `sku,title,price` with row `A-001,"Chair, oak",129.9` becomes JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (types off keeps price as text; turn typing on to get the number 129.9). Reverse: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` becomes header `sku,dim.w,dim.h` with row `A-001,40,90`.',
  tool_csv_json_example_title: 'Example',
  tool_csv_json_faq_a1:
    'By default every CSV cell is kept as text, so 007 and long IDs are preserved. If you turn on “Infer types”, numeric-looking values become numbers — 007 becomes 7 and very long digit strings can lose precision. Keep typing off for SKUs, ZIP codes and phone numbers.',
  tool_csv_json_faq_a2:
    'Yes. Choose comma, semicolon or tab, or leave it on auto-detect and Papa Parse guesses from the text. Semicolons are common in European Excel exports; tabs mean TSV.',
  tool_csv_json_faq_a3:
    'They are wrapped in double quotes and inner quotes are doubled, following RFC 4180. So a title like Chair, oak stays in one field instead of splitting into two columns.',
  tool_csv_json_faq_a4:
    'Objects are flattened to dot-path columns (dim.w, dim.h). Arrays are written as a JSON string in a single cell. Columns are the union of every record’s keys, and records missing a key get a blank cell.',
  tool_csv_json_faq_a5:
    'No. Parsing stays in this tab, and files you pick are read locally. A CDN may serve Papa Parse; that request downloads code only — it is not an upload of your CSV or JSON.',
  tool_csv_json_faq_q1: 'Will my numbers, leading zeros and IDs stay intact?',
  tool_csv_json_faq_q2: 'Can it handle semicolons or tabs, not just commas?',
  tool_csv_json_faq_q3: 'How are fields with commas, quotes or line breaks handled?',
  tool_csv_json_faq_q4: 'How does nested JSON become CSV columns?',
  tool_csv_json_faq_q5: 'Does my data leave the browser?',
  tool_csv_json_header: 'First row is header',
  tool_csv_json_how_body:
    'Choose CSV → JSON or JSON → CSV. Parsing and serialization run with Papa Parse in this tab. For CSV, pick a delimiter (or auto-detect), say whether the first row is a header, and optionally infer numeric/boolean types. For JSON, nested objects flatten to dot-path columns and the column set is the union of all record keys.',
  tool_csv_json_how_title: 'How it works',
  tool_csv_json_indent_2: '2 spaces',
  tool_csv_json_indent_4: '4 spaces',
  tool_csv_json_indent_label: 'Indent',
  tool_csv_json_indent_minify: 'Minify JSON',
  tool_csv_json_json_input_label: 'JSON input',
  tool_csv_json_json_output_label: 'JSON output',
  tool_csv_json_json_placeholder: '[\\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\\n]',
  tool_csv_json_large_warn: 'Very large input (>2M characters). Conversion may feel slow — try a smaller file.',
  tool_csv_json_need_lib: 'Could not load Papa Parse. Check your connection and refresh.',
  tool_csv_json_rules_body:
    'What to expect when you convert: how cell types are handled, which delimiters and quoting apply, and how nested JSON maps to columns.',
  tool_csv_json_rules_item_1:
    'Types: CSV cells are strings by default. Turn on “Infer types” to get numbers/booleans — but note 007 becomes 7 and long digit strings may lose precision, so keep it off for SKUs, ZIPs and phone numbers.',
  tool_csv_json_rules_item_2:
    'Delimiters: comma, semicolon (common in EU Excel) and tab (TSV) are supported; auto-detect guesses from the text. Fields containing the delimiter, quotes or line breaks are wrapped in double quotes per RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: objects flatten with dot paths (dim.w, dim.h); arrays are written as a JSON string in one cell; columns are the union of all keys, with missing values left blank.',
  tool_csv_json_rules_item_4:
    'Privacy: your paste and files are not uploaded. Fetching Papa Parse from a CDN only downloads library code, not your data.',
  tool_csv_json_rules_title: 'Rules you should expect',
  tool_csv_json_sample: 'Load sample',
  tool_csv_json_sample_csv: 'sku,title,price\\nA-001,"Chair, oak",129.9\\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\\n  {"sku":"A-002","title":"Desk","price":89}\\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'CSV ↔ JSON Converter — Types, Delimiters & Local',
  tool_csv_json_typing: 'Infer types (numbers/booleans)',
  tool_csv_json_usecase_1:
    'E-commerce: turn an exported product sheet (sku, title, price) into a JSON array for a store or marketplace API.',
  tool_csv_json_usecase_2: 'Developers: reshape an API/JSON payload into CSV for spreadsheets, reconciliation or hand-off.',
  tool_csv_json_usecase_3:
    'Data / ops: bridge report or event CSV (comma, semicolon or TSV) into JSON for a pipeline, with commas and line breaks safely quoted.',
  tool_csv_json_usecases_title: 'Good fits',
};
export default en;
