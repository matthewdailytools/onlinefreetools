/**
 * i18n tool shard (unix-timestamp / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_unix_timestamp_article:
    'Convert Unix epoch timestamps to human-readable UTC and local datetimes, or the reverse. Handles seconds vs milliseconds with auto-detection — built for logs, APIs, and JWT exp claims.',
  tool_unix_timestamp_clear: 'Clear',
  tool_unix_timestamp_convert: 'Convert',
  tool_unix_timestamp_copy: 'Copy output',
  tool_unix_timestamp_copy_done: 'Copied',
  tool_unix_timestamp_desc:
    'Convert Unix epoch timestamps to readable time — locally in your browser.',
  tool_unix_timestamp_description:
    'Convert Unix timestamps to UTC and local datetimes, or pick a local datetime to get epoch seconds or milliseconds. Steps: paste a timestamp or choose a date, pick seconds or milliseconds, then copy. Example: 1516239022 → 2018-01-18T01:30:22.000Z plus your local equivalent. Nothing is uploaded.',
  tool_unix_timestamp_dir_label: 'Mode',
  tool_unix_timestamp_dt_input_label: 'Local date & time',
  tool_unix_timestamp_error_invalid: 'Invalid timestamp or datetime.',
  tool_unix_timestamp_error_range: 'Timestamp is outside the range JavaScript Date can represent.',
  tool_unix_timestamp_example:
    'Timestamp → Date (seconds): 1516239022 → UTC 2018-01-18T01:30:22.000Z and your browser local time. Date → Timestamp: pick 2018-01-18 09:30 local → seconds or ms per unit toggle.',
  tool_unix_timestamp_example_title: 'Example',
  tool_unix_timestamp_faq_a1:
    'Unix time is usually seconds since 1970-01-01 UTC. JavaScript and many APIs use milliseconds (13 digits). Ten-digit values are treated as seconds; thirteen-digit (or >1e12) values auto-switch to milliseconds.',
  tool_unix_timestamp_faq_a2:
    'UTC is the same instant worldwide (ISO 8601 with Z). Local uses your browser timezone and locale formatting — handy when logs show UTC but you think in local time.',
  tool_unix_timestamp_faq_a3:
    'Now fills the current epoch value (seconds or ms per your unit toggle) or the current local datetime, then converts immediately.',
  tool_unix_timestamp_faq_a4:
    'JavaScript Date supports roughly ±100 million years in milliseconds. Values outside that range show an error instead of a wrong date.',
  tool_unix_timestamp_faq_q1: 'Seconds or milliseconds?',
  tool_unix_timestamp_faq_q2: 'What is the difference between UTC and local?',
  tool_unix_timestamp_faq_q3: 'What does the Now button do?',
  tool_unix_timestamp_faq_q4: 'Are there range limits?',
  tool_unix_timestamp_how_body:
    'Timestamp → Date: paste a numeric epoch; we detect seconds vs milliseconds when possible and show UTC ISO time plus a local formatted string. Date → Timestamp: pick a datetime-local value (interpreted in your browser timezone) and output seconds or milliseconds. All conversion stays local.',
  tool_unix_timestamp_how_title: 'How it works',
  tool_unix_timestamp_local_label: 'Local (your browser timezone)',
  tool_unix_timestamp_now: 'Now',
  tool_unix_timestamp_rules_body:
    'Rules for epoch values, unit detection, timezone interpretation, and safe numeric limits.',
  tool_unix_timestamp_rules_item_1:
    'Epoch zero is 1970-01-01T00:00:00.000Z. Negative timestamps are before 1970. Seconds fit in ~10 digits; milliseconds need ~13.',
  tool_unix_timestamp_rules_item_2:
    'Auto-detect: ≥13 digits or absolute value >1e12 → milliseconds; ≤10 digits → seconds. You can override with the unit toggle.',
  tool_unix_timestamp_rules_item_3:
    'datetime-local input has no timezone suffix — the browser treats it as local wall time. UTC output always uses ISO 8601 with Z.',
  tool_unix_timestamp_rules_item_4:
    'Privacy: no upload. Uses native Date and Intl only. For named time zones beyond local, see the timezone converter in Related tools when available.',
  tool_unix_timestamp_rules_title: 'Rules you should expect',
  tool_unix_timestamp_sample: 'Load sample',
  tool_unix_timestamp_sample_ts: '1516239022',
  tool_unix_timestamp_tab_date_to_ts: 'Date → Timestamp',
  tool_unix_timestamp_tab_ts_to_date: 'Timestamp → Date',
  tool_unix_timestamp_title: 'Unix Timestamp Converter — Epoch ↔ Readable Time',
  tool_unix_timestamp_ts_input_label: 'Unix timestamp',
  tool_unix_timestamp_ts_input_placeholder: 'e.g. 1516239022 or 1516239022000',
  tool_unix_timestamp_ts_output_label: 'Timestamp output',
  tool_unix_timestamp_unit_label: 'Unit',
  tool_unix_timestamp_unit_milliseconds: 'Milliseconds',
  tool_unix_timestamp_unit_seconds: 'Seconds',
  tool_unix_timestamp_utc_label: 'UTC (ISO 8601)',
  tool_unix_timestamp_usecase_1: 'Developers: decode epoch values from API responses, webhooks, or server logs.',
  tool_unix_timestamp_usecase_2: 'JWT debugging: convert exp / iat numeric claims to readable dates (pair with JWT decoder).',
  tool_unix_timestamp_usecase_3: 'Ops / analytics: quickly check whether a 10- or 13-digit field is seconds or milliseconds.',
  tool_unix_timestamp_usecases_title: 'Good fits',
};
export default en;
