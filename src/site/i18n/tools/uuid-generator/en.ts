/**
 * i18n tool shard (uuid-generator / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_uuid_generator_article:
    'Generate UUID v4 or ULID identifiers locally with cryptographically strong randomness. Batch copy for test data, trace IDs, or schema stubs — nothing is uploaded.',
  tool_uuid_generator_clear: 'Clear',
  tool_uuid_generator_copy_all: 'Copy all',
  tool_uuid_generator_copy_done: 'Copied',
  tool_uuid_generator_count_label: 'Count (1–100)',
  tool_uuid_generator_desc: 'Generate UUID v4 and ULID IDs locally — batch up to 100, copy in one click.',
  tool_uuid_generator_description:
    'Generate UUID v4 or ULID strings in your browser. Steps: pick type, set count (1–100), click Generate, copy all. Example: three RFC-style UUID v4 lines like `550e8400-e29b-41d4-a716-446655440000`. Uses crypto.getRandomValues — paste and IDs stay local.',
  tool_uuid_generator_example:
    'UUID v4 (lowercase, hyphenated): `550e8400-e29b-41d4-a716-446655440000`. ULID (26 Crockford Base32 chars, time-sortable prefix): `01ARZ3NDEKTSV4RRFFQ69G5FAV`. Load sample fills three fixed v4 examples for format checks.',
  tool_uuid_generator_example_title: 'Example',
  tool_uuid_generator_faq_a1:
    'UUID v4 is 128 random bits (with version nibble fixed), good for opaque IDs. ULID adds a millisecond timestamp prefix and sorts lexicographically by creation time — handy for logs and databases that want time-ordered keys without exposing a sequential integer.',
  tool_uuid_generator_faq_a2:
    'No. IDs use crypto.getRandomValues (or randomUUID when available). They are unpredictable to practical attackers but not a guarantee of global uniqueness — your app should still handle collisions if the domain requires it.',
  tool_uuid_generator_faq_a3:
    'Count is capped at 100 per click to keep the page responsive. Run Generate again for more batches.',
  tool_uuid_generator_faq_a4:
    'No upload and no server-side generation. Everything runs in your browser tab.',
  tool_uuid_generator_faq_a5:
    'UUID v4: 36 chars with hyphens, lowercase hex. ULID: 26 uppercase Crockford Base32 characters, no hyphens.',
  tool_uuid_generator_faq_q1: 'UUID v4 vs ULID — when to pick which?',
  tool_uuid_generator_faq_q2: 'Are generated IDs cryptographically secure?',
  tool_uuid_generator_faq_q3: 'Why is batch limited to 100?',
  tool_uuid_generator_faq_q4: 'Do IDs leave my browser?',
  tool_uuid_generator_faq_q5: 'What format do you output?',
  tool_uuid_generator_generate: 'Generate',
  tool_uuid_generator_how_body:
    'Choose UUID v4 for standard random UUIDs, or ULID for time-sortable 26-character IDs. Set how many you need (1–100) and Generate. Copy all puts one ID per line on the clipboard. Random bytes come from the browser CSPRNG.',
  tool_uuid_generator_how_title: 'How it works',
  tool_uuid_generator_output_label: 'Generated IDs',
  tool_uuid_generator_rules_body:
    'Format differences and practical limits when you paste IDs into code or a database.',
  tool_uuid_generator_rules_item_1:
    'UUID v4 follows RFC 4122 layout: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` with variant bits set; we output lowercase hex.',
  tool_uuid_generator_rules_item_2:
    'ULID packs 48-bit Unix ms timestamp + 80 random bits into 26 Crockford Base32 chars (no I/L/O/U).',
  tool_uuid_generator_rules_item_3:
    'This tool does not guarantee uniqueness across machines or time — treat output as strong random samples, not a distributed ID service.',
  tool_uuid_generator_rules_item_4:
    'Privacy: no network call for generation; IDs never leave your device unless you copy them elsewhere.',
  tool_uuid_generator_rules_title: 'Rules you should expect',
  tool_uuid_generator_sample: 'Load sample',
  tool_uuid_generator_title: 'UUID & ULID Generator — Create IDs in Your Browser',
  tool_uuid_generator_type_label: 'ID type',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'Seed a dev database with opaque primary keys before importing fixtures.',
  tool_uuid_generator_usecase_2: 'Create a batch of trace or correlation IDs for integration tests.',
  tool_uuid_generator_usecase_3: 'Prototype APIs that accept ULID-style sortable identifiers in request bodies.',
  tool_uuid_generator_usecases_title: 'Good fits',
};
export default en;
