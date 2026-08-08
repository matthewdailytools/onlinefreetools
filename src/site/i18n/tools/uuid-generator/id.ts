/**
 * i18n tool shard (uuid-generator / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_uuid_generator_article:
    'Buat UUID v4 atau ULID secara lokal dengan random kriptografis. Salin batch untuk data uji, trace id, atau stub skema — tanpa upload.',
  tool_uuid_generator_clear: 'Hapus',
  tool_uuid_generator_copy_all: 'Salin semua',
  tool_uuid_generator_copy_done: 'Disalin',
  tool_uuid_generator_count_label: 'Jumlah (1–100)',
  tool_uuid_generator_desc: 'Generate UUID v4 dan ULID lokal — hingga 100, salin sekali klik.',
  tool_uuid_generator_description:
    'Generate string UUID v4 atau ULID di browser. Langkah: pilih tipe, atur jumlah (1–100), klik Generate, salin semua. Contoh: tiga UUID v4 gaya RFC seperti `550e8400-e29b-41d4-a716-446655440000`. Pakai crypto.getRandomValues — ID tidak keluar dari perangkat.',
  tool_uuid_generator_example:
    'UUID v4 (huruf kecil, dengan tanda hubung): `550e8400-e29b-41d4-a716-446655440000`. ULID (26 char Crockford Base32, prefiks sortable): `01ARZ3NDEKTSV4RRFFQ69G5FAV`. Muat contoh mengisi tiga v4 tetap untuk cek format.',
  tool_uuid_generator_example_title: 'Contoh',
  tool_uuid_generator_faq_a1:
    'UUID v4 = 128 bit acak (nibble versi tetap), cocok untuk ID opaque. ULID menambah prefiks timestamp ms dan sort lexicographic by waktu buat — berguna untuk log dan DB yang ingin kunci berurutan tanpa integer sequential.',
  tool_uuid_generator_faq_a2:
    'Tidak menjamin uniqueness global. ID memakai crypto.getRandomValues (atau randomUUID). Tidak bisa ditebak praktis, tapi app Anda tetap harus tangani collision jika domain mensyaratkan.',
  tool_uuid_generator_faq_a3:
    'Batch dibatasi 100 per klik agar halaman responsif. Generate lagi untuk batch berikutnya.',
  tool_uuid_generator_faq_a4:
    'Tanpa upload dan tanpa generate di server. Semua di tab browser.',
  tool_uuid_generator_faq_a5:
    'UUID v4: 36 karakter dengan hubung, hex kecil. ULID: 26 karakter Crockford Base32 besar, tanpa hubung.',
  tool_uuid_generator_faq_q1: 'UUID v4 vs ULID — kapan pilih yang mana?',
  tool_uuid_generator_faq_q2: 'Apakah ID aman secara kriptografis?',
  tool_uuid_generator_faq_q3: 'Mengapa batch maksimal 100?',
  tool_uuid_generator_faq_q4: 'Apakah ID keluar dari browser?',
  tool_uuid_generator_faq_q5: 'Format output apa?',
  tool_uuid_generator_generate: 'Generate',
  tool_uuid_generator_how_body:
    'Pilih UUID v4 untuk UUID acak standar atau ULID untuk ID 26 karakter sortable waktu. Atur jumlah (1–100) lalu Generate. Salin semua = satu ID per baris. Byte acak dari CSPRNG browser.',
  tool_uuid_generator_how_title: 'Cara kerja',
  tool_uuid_generator_output_label: 'ID yang dihasilkan',
  tool_uuid_generator_rules_body:
    'Perbedaan format dan batas praktis saat menempel ID ke kode atau database.',
  tool_uuid_generator_rules_item_1:
    'UUID v4 mengikuti RFC 4122: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` dengan variant bits; hex kecil.',
  tool_uuid_generator_rules_item_2:
    'ULID: timestamp Unix ms 48 bit + 80 bit acak jadi 26 char Crockford Base32 (tanpa I/L/O/U).',
  tool_uuid_generator_rules_item_3:
    'Alat ini tidak menjamin uniqueness antar mesin/waktu — anggap output sampel random kuat, bukan layanan ID terdistribusi.',
  tool_uuid_generator_rules_item_4:
    'Privasi: tanpa jaringan untuk generate; ID tidak keluar perangkat kecuali Anda salin.',
  tool_uuid_generator_rules_title: 'Aturan yang perlu diharapkan',
  tool_uuid_generator_sample: 'Muat contoh',
  tool_uuid_generator_title: 'Generator UUID & ULID — buat ID di browser',
  tool_uuid_generator_type_label: 'Tipe ID',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'Seed database dev dengan primary key opaque sebelum impor fixture.',
  tool_uuid_generator_usecase_2: 'Buat batch trace atau correlation id untuk integration test.',
  tool_uuid_generator_usecase_3: 'Prototipe API yang menerima identifier ULID sortable di body request.',
  tool_uuid_generator_usecases_title: 'Cocok untuk',
};
export default id;
