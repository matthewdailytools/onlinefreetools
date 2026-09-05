/**
 * i18n tool shard (magnet-link-decoder / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_magnet_link_decoder_article:
    'Inspect a magnet URI without opening a torrent client. This browser-only parser preserves repeated fields, identifies BitTorrent v1 and v2 exact topics, checks tracker and size shapes, and keeps malformed values visible with warnings.',
  tool_magnet_link_decoder_clear: 'Clear',
  tool_magnet_link_decoder_copy_done: 'Copied',
  tool_magnet_link_decoder_copy_hash: 'Copy info hash',
  tool_magnet_link_decoder_copy_json: 'Copy JSON',
  tool_magnet_link_decoder_copy_normalized: 'Copy normalized URI',
  tool_magnet_link_decoder_copy_trackers: 'Copy trackers',
  tool_magnet_link_decoder_decode: 'Decode',
  tool_magnet_link_decoder_desc:
    'Parse a magnet URI locally to inspect its info hash, display name, size, trackers, web seeds, peer hints, and format warnings without starting a download.',
  tool_magnet_link_decoder_description:
    'Paste a magnet link to decode percent-encoded fields, group repeated trackers, and check btih or btmh info hashes entirely in your browser. Example: the built-in URI reveals sample-linux.iso, a 1 MiB size, one info hash, and two trackers without uploading the link or contacting any peer.',
  tool_magnet_link_decoder_disclaimer:
    'Inspection only: this decoder does not download content, fetch torrent metadata, contact trackers, DHT, or peers, create a .torrent file, or determine whether linked content is safe or lawful.',
  tool_magnet_link_decoder_empty: 'Paste a magnet URI first.',
  tool_magnet_link_decoder_error_scheme: 'Input must start with magnet:?.',
  tool_magnet_link_decoder_example:
    'Input: magnet:?xt=urn:btih:0123456789abcdef0123456789abcdef01234567&dn=sample-linux.iso&xl=1048576 with two tr values. Output: valid btih info hash, display name sample-linux.iso, 1,048,576 bytes (1 MiB), two trackers, and no warnings.',
  tool_magnet_link_decoder_example_title: 'Example',
  tool_magnet_link_decoder_faq_a1:
    'No. Parsing is limited to the URI text already in your browser. The page never contacts a tracker, DHT node, peer, web seed, or metadata service and never starts a torrent client.',
  tool_magnet_link_decoder_faq_a2:
    'xt means exact topic. For BitTorrent, urn:btih normally carries a v1 info hash as 40 hexadecimal characters or 32 Base32 characters. A v2 magnet commonly uses urn:btmh with a hexadecimal multihash such as a 1220-prefixed SHA-256 value.',
  tool_magnet_link_decoder_faq_a3:
    'The tr parameter is repeatable because a magnet link can advertise fallback trackers. This parser keeps every value in source order, shows invalid URL-like values as warnings, and copies the tracker list one URL per line.',
  tool_magnet_link_decoder_faq_a4:
    'No. A magnet URI may identify content without containing the file metadata needed for a .torrent file. Conversion requires metadata retrieval from a peer network or another source, which this local decoder intentionally does not perform.',
  tool_magnet_link_decoder_faq_a5:
    'No. Decoding, grouping, validation, normalization, and JSON generation run in this browser tab. The magnet text is not uploaded to our server, although you should still avoid pasting private links on a shared device.',
  tool_magnet_link_decoder_faq_q1: 'Does decoding a magnet link download anything?',
  tool_magnet_link_decoder_faq_q2: 'What does xt=urn:btih or urn:btmh mean?',
  tool_magnet_link_decoder_faq_q3: 'Why can one magnet link contain several tr trackers?',
  tool_magnet_link_decoder_faq_q4: 'Can this convert a magnet link into a .torrent file?',
  tool_magnet_link_decoder_faq_q5: 'Is the magnet link uploaded?',
  tool_magnet_link_decoder_field_display_name: 'Display name (dn)',
  tool_magnet_link_decoder_field_exact_topics: 'Exact topics (xt)',
  tool_magnet_link_decoder_field_exact_sources: 'Exact sources (xs)',
  tool_magnet_link_decoder_field_other: 'Other parameters',
  tool_magnet_link_decoder_field_peer_hints: 'Peer hints (x.pe)',
  tool_magnet_link_decoder_field_size: 'Exact length (xl)',
  tool_magnet_link_decoder_field_trackers: 'Trackers (tr)',
  tool_magnet_link_decoder_field_web_seeds: 'Web seeds (ws)',
  tool_magnet_link_decoder_how_body:
    'Paste one complete magnet URI and choose Decode. The parser separates the query into ordered key-value pairs, decodes percent escapes and plus signs, groups repeated keys, classifies exact topics, validates common URL and size fields, then builds a normalized URI and a JSON view. Malformed encoded values stay visible so you can diagnose the source string.',
	tool_magnet_link_decoder_how_item_1: 'Paste one complete magnet URI.',
	tool_magnet_link_decoder_how_item_2: 'Click Decode (or Load sample).',
	tool_magnet_link_decoder_how_item_3: 'Review infohash, display name, size, and tracker list.',
	tool_magnet_link_decoder_how_item_4: 'Copy JSON or the normalized URI when you need them elsewhere.',
  tool_magnet_link_decoder_how_title: 'How it works',
  tool_magnet_link_decoder_input_label: 'Magnet URI',
  tool_magnet_link_decoder_input_placeholder: 'magnet:?xt=urn:btih:...&dn=...&tr=...',
  tool_magnet_link_decoder_json_label: 'Parsed JSON',
  tool_magnet_link_decoder_normalized_label: 'Normalized URI',
  tool_magnet_link_decoder_privacy: 'Runs locally: no upload and no tracker, DHT, peer, web-seed, or metadata request.',
  tool_magnet_link_decoder_result_empty: 'Decoded fields will appear here.',
  tool_magnet_link_decoder_results_title: 'Decoded fields',
  tool_magnet_link_decoder_rules_body:
    'Magnet parameters are a repeatable query map. The decoder preserves every occurrence and applies shape checks without claiming that the referenced content exists.',
  tool_magnet_link_decoder_rules_item_1:
    'Field map: xt identifies an exact topic; dn is a display name; tr is a tracker; xl is an exact byte length; ws is a web seed; xs is an exact source; x.pe is a peer hint. Unknown keys remain in the output.',
  tool_magnet_link_decoder_rules_item_2:
    'Hash shapes: btih accepts 40 hexadecimal or 32 Base32 characters. btmh accepts an even-length hexadecimal multihash; 1220 plus 64 hex characters is the common SHA-256 form used by BitTorrent v2.',
  tool_magnet_link_decoder_rules_item_3:
    'Decoding: query keys and values use percent decoding, while + represents a space. A malformed percent escape is retained as raw text and produces a warning instead of silently dropping the field.',
  tool_magnet_link_decoder_rules_item_4:
    'Validation boundary: URL and integer checks detect suspicious syntax only. They do not prove that trackers respond, metadata exists, files are safe, or sharing is permitted.',
  tool_magnet_link_decoder_rules_title: 'Magnet URI rules',
  tool_magnet_link_decoder_sample: 'Load sample',
  tool_magnet_link_decoder_size_bytes: '{bytes} bytes ({human})',
  tool_magnet_link_decoder_status_invalid: 'Invalid',
  tool_magnet_link_decoder_status_valid: 'Valid',
  tool_magnet_link_decoder_status_warning: 'Warning',
  tool_magnet_link_decoder_summary: '{fields} fields, {trackers} trackers, {warnings} warnings',
  tool_magnet_link_decoder_title: 'Magnet Link Decoder — Parse Info Hash and Trackers Locally',
  tool_magnet_link_decoder_unknown_value: '(empty value)',
  tool_magnet_link_decoder_usecase_1:
    'Developer debugging: inspect a generated magnet URI, its percent encoding, exact topic, and repeated tracker list before publishing it.',
  tool_magnet_link_decoder_usecase_2:
    'Support and moderation: check which trackers, web seeds, exact sources, or peer hints a submitted link exposes without opening a torrent client.',
  tool_magnet_link_decoder_usecase_3:
    'Documentation and teaching: use a harmless sample to explain how a magnet info hash extractor maps xt, dn, xl, and repeated tr values.',
  tool_magnet_link_decoder_usecases_title: 'Useful checks',
  tool_magnet_link_decoder_warn_bad_encoding: 'Malformed percent encoding in parameter {key}; raw text was kept.',
  tool_magnet_link_decoder_warn_bad_hash: 'Unsupported or malformed info hash: {value}',
  tool_magnet_link_decoder_warn_bad_peer: 'x.pe must use a host:port or [IPv6]:port value: {value}',
  tool_magnet_link_decoder_warn_bad_size: 'xl must be a non-negative integer byte length.',
  tool_magnet_link_decoder_warn_bad_url: '{key} is not a valid absolute URL: {value}',
  tool_magnet_link_decoder_warn_missing_xt: 'No xt exact-topic parameter was found.',
};
export default en;
