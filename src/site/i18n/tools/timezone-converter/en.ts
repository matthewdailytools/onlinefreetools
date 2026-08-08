/**
 * i18n tool shard (timezone-converter / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_timezone_converter_article:
    'Pick a wall-clock moment and source IANA zone, then read the same instant across UTC, New York, London, Tokyo, and other curated zones. Built for remote standups, log correlation, and quick world-clock checks — all in-browser with Intl, no uploads.',
  tool_timezone_converter_clear: 'Clear',
  tool_timezone_converter_col_local: 'Local date & time',
  tool_timezone_converter_col_offset: 'UTC offset',
  tool_timezone_converter_col_zone: 'Time zone',
  tool_timezone_converter_compare_zones: 'Compare in these zones',
  tool_timezone_converter_convert: 'Convert',
  tool_timezone_converter_desc:
    'Compare one moment across IANA time zones with DST notes — runs locally in your browser.',
  tool_timezone_converter_description:
    'Convert a date and time from one IANA zone to many others in your browser. Process: enter a local datetime, choose the source zone, tick comparison zones, then Convert. Example: 2026-06-15 14:30 in Los Angeles → New York, London, Tokyo, and UTC rows with offsets. Explains DST gaps; not a meeting export pack.',
  tool_timezone_converter_error_dst_gap:
    'That local time does not exist in the source zone (DST spring-forward gap). Pick an adjacent hour.',
  tool_timezone_converter_error_empty: 'Enter a datetime and select at least one comparison zone.',
  tool_timezone_converter_error_invalid: 'Invalid datetime format. Use the picker or YYYY-MM-DDTHH:MM.',
  tool_timezone_converter_example:
    'Fixed sample on load: 2026-06-15 14:30 in America/Los_Angeles → UTC, America/New_York, Europe/London, Asia/Tokyo with local clocks and short UTC offsets. Offsets follow IANA rules for that calendar date.',
  tool_timezone_converter_example_title: 'Example',
  tool_timezone_converter_faq_a1:
    'We use IANA identifiers such as America/New_York or Asia/Tokyo — the same names browsers and servers use. Abbreviations like EST or JST are ambiguous (standard vs daylight); always prefer the full IANA zone when scheduling.',
  tool_timezone_converter_faq_a2:
    'On DST start days some local hours are skipped — the converter shows an error instead of guessing. On fall-back overlap nights the same local time can occur twice; Intl picks one offset — verify critical meetings manually on those dates.',
  tool_timezone_converter_faq_a3:
    'Unix timestamp tools turn epoch seconds ↔ calendar clocks, often in UTC. This page keeps a named source zone and shows several target zones side by side for the same instant — better for “what time is it for them?”',
  tool_timezone_converter_faq_a4:
    'No. This is an instant multi-zone table for your own reference. It does not build a shareable meeting pack, attendee list, or ICS export — those would be a separate workflow.',
  tool_timezone_converter_faq_a5:
    'Yes. Conversion uses built-in Intl.DateTimeFormat only — your datetime never leaves the browser and nothing is uploaded.',
  tool_timezone_converter_faq_q1: 'Why IANA names instead of EST, PST, or GMT?',
  tool_timezone_converter_faq_q2: 'What happens on daylight saving change days?',
  tool_timezone_converter_faq_q3: 'How is this different from a Unix timestamp converter?',
  tool_timezone_converter_faq_q4: 'Can I export a team meeting timezone pack here?',
  tool_timezone_converter_faq_q5: 'Does my datetime get sent to a server?',
  tool_timezone_converter_how_body:
    'Enter a local datetime and pick its IANA source zone. Tick one or more comparison zones, then Convert. The table shows each zone’s local clock and UTC offset for that same instant, computed with Intl in your browser.',
  tool_timezone_converter_how_title: 'How it works',
  tool_timezone_converter_local_tz: 'your browser',
  tool_timezone_converter_now: 'Now',
  tool_timezone_converter_rules_body:
    'Expect IANA zone rules, DST behavior, and how this differs from epoch or meeting-export tools.',
  tool_timezone_converter_rules_item_1:
    'Zones follow the IANA Time Zone Database (tzdata). Offsets change when regions change DST — the table reflects rules for the date you enter, not a fixed GMT offset.',
  tool_timezone_converter_rules_item_2:
    'Spring-forward gaps: if a wall-clock hour was skipped, conversion fails with a clear message. Fall-back overlaps: duplicate local times may map to one offset — double-check edge cases.',
  tool_timezone_converter_rules_item_3:
    'Abbreviations (CST, IST, etc.) can mean different zones. Use full IANA names in APIs, cron, and calendar invites.',
  tool_timezone_converter_rules_item_4:
    'Privacy: no upload. This page is read-only comparison — not a meeting scheduler, not an IP geolocation lookup.',
  tool_timezone_converter_rules_title: 'Rules you should expect',
  tool_timezone_converter_sample: 'Load sample',
  tool_timezone_converter_source_time: 'Source date & time',
  tool_timezone_converter_source_tz: 'Source time zone',
  tool_timezone_converter_title: 'Time Zone Converter — Compare One Moment Worldwide',
  tool_timezone_converter_usecase_1:
    'Remote teams: someone says “3:30 PM Pacific” — see New York, London, and Tokyo on one row set before you join.',
  tool_timezone_converter_usecase_2:
    'Ops / logs: a timestamp was logged in Chicago local time — compare UTC and your own zone without mental math.',
  tool_timezone_converter_usecase_3:
    'Travel planning: anchor a flight arrival in Dubai and read Sydney and Los Angeles side by side for handoff calls.',
  tool_timezone_converter_usecases_title: 'Good fits',
};
export default en;
