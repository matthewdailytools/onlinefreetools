/**
 * i18n tool shard (json-schema-validator / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_json_schema_validator_article:
    'Validasi JSON dengan Schema draft-07 di peramban. Kegagalan menampilkan JSON Pointer agar Anda bisa memperbaiki keluaran model atau feed tanpa mengunggah data.',
  tool_json_schema_validator_bad_instance: 'Instance bukan JSON yang valid.',
  tool_json_schema_validator_bad_schema: 'Schema bukan JSON yang valid (atau gagal dikompilasi).',
  tool_json_schema_validator_clear: 'Hapus',
  tool_json_schema_validator_copy_done: 'Disalin',
  tool_json_schema_validator_copy_errors: 'Salin error',
  tool_json_schema_validator_desc:
    'Validasi JSON dengan Schema dan error JSON Pointer — draft-07 lokal.',
  tool_json_schema_validator_description:
    'Validasi JSON terhadap JSON Schema (draft-07) di peramban. Langkah: tempel Schema dan instance, validasi, lalu baca setiap kegagalan lewat JSON Pointer. Contoh: objek produk tanpa price gagal dengan missingProperty. Teks tetap di tab; Ajv hanya memuat kode dari CDN.',
  tool_json_schema_validator_draft_note: 'Mesin: Ajv 8 · JSON Schema draft-07 (default).',
  tool_json_schema_validator_empty: 'Tempel Schema dan JSON instance terlebih dahulu.',
  tool_json_schema_validator_example:
    'Schema mewajibkan sku (string) dan price (angka ≥ 0). Valid: {"sku":"A-1","price":9.5}. Gagal: {"sku":"A-1"} — missingProperty untuk price di akar (/).',
  tool_json_schema_validator_example_title: 'Contoh',
  tool_json_schema_validator_fail: 'Gagal — lihat path di bawah',
  tool_json_schema_validator_faq_a1:
    'Penyebab umum: kunci required hilang, tipe salah, atau additionalProperties:false. Baca baris Pointer dan pesan keyword.',
  tool_json_schema_validator_faq_a2:
    'instancePath adalah JSON Pointer ke instance (kosong ditampilkan sebagai /). Jika required hilang, Ajv juga menyertakan missingProperty di params.',
  tool_json_schema_validator_faq_a3:
    'Halaman ini memakai dialek draft-07 Ajv. Draft 2019-09 / 2020-12 butuh build lain dan tidak dipilih di sini.',
  tool_json_schema_validator_faq_a4:
    'Schema dan JSON Anda tidak diunggah. CDN hanya mengunduh kode Ajv.',
  tool_json_schema_validator_faq_a5:
    'Tempel Schema dan JSON model, validasi, lalu perbaiki tiap Pointer sampai lulus — berguna sebelum keluaran terstruktur diteruskan.',
  tool_json_schema_validator_faq_q1: 'Mengapa validasi gagal?',
  tool_json_schema_validator_faq_q2: 'Bagaimana membaca error JSON Pointer?',
  tool_json_schema_validator_faq_q3: 'Draft mana yang dipakai halaman ini?',
  tool_json_schema_validator_faq_q4: 'Apakah JSON saya meninggalkan peramban?',
  tool_json_schema_validator_faq_q5: 'Bagaimana memeriksa keluaran terstruktur LLM?',
  tool_json_schema_validator_how_body:
    'Tempel Schema di kiri dan instance di kanan. Ajv (draft-07) mengompilasi, memvalidasi, dan mencantumkan setiap error dengan JSON Pointer. Ada contoh gagal dan valid; halaman membuka contoh gagal agar path langsung terlihat.',
  tool_json_schema_validator_how_title: 'Cara kerja',
  tool_json_schema_validator_instance_label: 'JSON instance',
  tool_json_schema_validator_instance_placeholder: '{ "sku": "A-1", "price": 9.5 }',
  tool_json_schema_validator_large_warn:
    'Tempelan sangat besar (>200k karakter gabungan). Bisa lambat — coba cuplikan lebih pendek.',
  tool_json_schema_validator_need_lib: 'Gagal memuat Ajv. Periksa koneksi lalu muat ulang.',
  tool_json_schema_validator_pass: 'Valid — instance cocok dengan Schema',
  tool_json_schema_validator_result_label: 'Hasil',
  tool_json_schema_validator_rules_body:
    'Di halaman ini: parse → compile Schema draft-07 → validasi instance → keluarkan Pointer per error.',
  tool_json_schema_validator_rules_item_1:
    'Parse: kedua panel harus bisa JSON.parse. Error sintaks/kompilasi dipisah dari kegagalan validasi.',
  tool_json_schema_validator_rules_item_2:
    'Validasi: allErrors mengumpulkan semua kegagalan. Setiap baris: instancePath + message (+ missingProperty bila relevan).',
  tool_json_schema_validator_rules_item_3:
    'Draft: dialek draft-07. Jangan anggap keyword 2020-12 tersedia di sini.',
  tool_json_schema_validator_rules_item_4:
    'Privasi: tempelan tetap di tab. CDN hanya memuat kode Ajv.',
  tool_json_schema_validator_rules_title: 'Aturan yang perlu diingat',
  tool_json_schema_validator_sample_fail: 'Contoh gagal',
  tool_json_schema_validator_sample_instance_fail: '{"sku":"A-1"}',
  tool_json_schema_validator_sample_instance_ok: '{"sku":"A-1","price":9.5}',
  tool_json_schema_validator_sample_ok: 'Contoh valid',
  tool_json_schema_validator_sample_schema:
    '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["sku","price"],"properties":{"sku":{"type":"string","minLength":1},"price":{"type":"number","minimum":0}},"additionalProperties":false}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'Validator JSON Schema — Path draft-07 & lokal',
  tool_json_schema_validator_usecase_1:
    'AI / agen: cek apakah JSON terstruktur model kehilangan field sebelum dipercaya di pipeline.',
  tool_json_schema_validator_usecase_2:
    'Feed perdagangan: validasi JSON produk terhadap Schema sebelum impor.',
  tool_json_schema_validator_usecase_3:
    'Debug API: tempel body request/response ke fragmen Schema dari kontrak.',
  tool_json_schema_validator_usecases_title: 'Cocok untuk',
  tool_json_schema_validator_validate: 'Validasi',
};
export default id;
