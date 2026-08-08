/**
 * i18n tool shard (square-feet / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_squarefeet_article:
    'Perkirakan luas persegi panjang dari panjang dan lebar, lalu konversi antara square feet dan meter persegi. Untuk iklan properti, lantai, dan cat — bukan taksiran harga rumah dan tidak membedakan luas bersih vs kotor.',
  tool_squarefeet_calculate: 'Konversi luas',
  tool_squarefeet_description:
    'Ubah luas ruangan antara square feet dan meter persegi untuk listing dan renovasi. Alur: pilih ft/m/in, masukkan panjang × lebar, hitung luas, lalu tampilkan ft² dan m² dengan faktor NIST 1 ft² = 0.09290304 m². Contoh: apartemen 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_example:
    'Listing: apartemen 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Ruangan: 10 ft × 12 ft = 120 sq ft ≈ 11,15 m².',
  tool_squarefeet_example_title: 'Contoh',
  tool_squarefeet_faq_a1: 'Tepat 1 ft² = 0.09290304 m² (panduan SI / NIST). Hasil ditampilkan dua desimal.',
  tool_squarefeet_faq_a2: 'Tidak. Hanya mengonversi luas datar persegi panjang.',
  tool_squarefeet_faq_a3: 'Tidak. Konversi luas bukan valuasi atau model harga.',
  tool_squarefeet_faq_a4: 'Pecah jadi beberapa persegi panjang, konversi masing-masing, lalu jumlahkan.',
  tool_squarefeet_faq_q1: 'Faktor konversi ft² ↔ m² yang dipakai?',
  tool_squarefeet_faq_q2: 'Apakah membedakan luas bersih dan kotor?',
  tool_squarefeet_faq_q3: 'Bisa untuk menaksir harga rumah?',
  tool_squarefeet_faq_q4: 'Bagaimana ruang berbentuk L?',
  tool_squarefeet_formula_body:
    'Luas (ft²) = panjang (ft) × lebar (ft). Dalam meter: ft² = (L×W) ÷ 0.09290304. Dalam inci: bagi tiap sisi dengan 12. Faktor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Input kaki: luas_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Input meter: luas_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Input inci: luas_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = luas_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_formula_title: 'Rumus luas dan faktor konversi',
  tool_squarefeet_how_body:
    'Pilih apakah ukuran dalam kaki, meter, atau inci. Kalikan panjang × lebar setelah keduanya diubah ke kaki, lalu konversi ke m² dengan faktor SI. Input kosong atau negatif ditolak.',
  tool_squarefeet_how_title: 'Cara kerja',
  tool_squarefeet_invalid_input: 'Masukkan panjang dan lebar positif.',
  tool_squarefeet_length_label: 'Panjang',
  tool_squarefeet_length_placeholder: 'Masukkan panjang',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Panduan Sistem Satuan Internasional (SI)',
  tool_squarefeet_result_note: 'Dibulatkan dua desimal. Faktor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_title: 'Konversi square feet ke m² — Untuk rumah & renovasi',
  tool_squarefeet_unit_group_label: 'Satuan input',
  tool_squarefeet_usage: 'Pilih satuan, masukkan panjang dan lebar untuk mendapat sq ft plus setara m².',
  tool_squarefeet_usage_title: 'Cara pakai',
  tool_squarefeet_usecase_1: 'Membandingkan listing AS ber-satuan sq ft dengan iklan lokal ber-m².',
  tool_squarefeet_usecase_2: 'Memperkirakan lantai/karpet ruangan persegi panjang sebelum pesan material.',
  tool_squarefeet_usecase_3: 'Cek kasar cat atau renovasi saat gambar campur satuan.',
  tool_squarefeet_usecases_title: 'Kapan berguna',
  tool_squarefeet_width_label: 'Lebar',
  tool_squarefeet_width_placeholder: 'Masukkan lebar',
};
export default id;
