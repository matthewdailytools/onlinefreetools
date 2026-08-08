/**
 * i18n tool shard (how-to-calculate-percentage-change / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_percentage_change_abs_note: 'Perubahan absolut: {delta}',
  tool_percentage_change_article:
    'Perubahan persentase relatif menjawab seberapa jauh metrik bergerak dibanding baseline. Masukkan nilai lama dan baru; rumus (baru − lama) / lama × 100. Untuk KPI, bukan pengganti ROI.',
  tool_percentage_change_calculate: 'Hitung',
  tool_percentage_change_decrease: 'penurunan',
  tool_percentage_change_description:
    'Hitung kenaikan atau penurunan persen dari nilai lama ke nilai baru. Alur: masukkan keduanya, hitung (baru − lama) / lama × 100, lalu baca tandanya. Contoh: 80 → 100 = +25%. Cocok untuk pendapatan MoM, DAU, dan harga — bukan poin persentase.',
  tool_percentage_change_example: 'Contoh lengkap: lama 80, baru 100 → Δ = 20 → (20 / 80) × 100 = kenaikan 25%. Turun: 100 → 80 = −20%.',
  tool_percentage_change_example_title: 'Contoh',
  tool_percentage_change_faq_a1: 'Perubahan % = (baru − lama) / lama × 100. Positif = naik; negatif = turun.',
  tool_percentage_change_faq_a2: 'Pembagian dengan nol tidak terdefinisi. Tanpa baseline tidak ada perubahan relatif.',
  tool_percentage_change_faq_a3: 'Tidak. Dari 10% ke 12% adalah +2 poin, tetapi kenaikan relatif 20%.',
  tool_percentage_change_faq_a4:
    'ROI membandingkan keuntungan dengan biaya investasi. Perubahan persen membandingkan nilai baru apa pun dengan baseline lama.',
  tool_percentage_change_faq_q1: 'Apa rumus perubahan persentase?',
  tool_percentage_change_faq_q2: 'Mengapa nilai lama tidak boleh nol?',
  tool_percentage_change_faq_q3: 'Sama dengan poin persentase?',
  tool_percentage_change_faq_q4: 'Bedanya dengan ROI?',
  tool_percentage_change_formula_body: 'Perubahan % = (baru − lama) / lama × 100. Penyebut memakai nilai lama bertanda (bukan |lama|).',
  tool_percentage_change_formula_item_1: 'Δ = baru − lama',
  tool_percentage_change_formula_item_2: 'persen = (Δ / lama) × 100',
  tool_percentage_change_formula_item_3: 'lama = 0 → tidak terdefinisi (error)',
  tool_percentage_change_formula_title: 'Rumus perubahan persentase',
  tool_percentage_change_how_body:
    'Masukkan baseline (lama) dan nilai berikutnya. Kami kurangi, bagi dengan lama, lalu kali 100. Positif naik; negatif turun. Jika lama = 0, perubahan relatif tidak terdefinisi.',
  tool_percentage_change_how_title: 'Cara kerja',
  tool_percentage_change_increase: 'kenaikan',
  tool_percentage_change_new_label: 'Nilai baru',
  tool_percentage_change_no_change: 'tidak berubah',
  tool_percentage_change_original_label: 'Nilai lama',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_result_invalid: 'Nilai lama harus angka bukan nol.',
  tool_percentage_change_result_label: 'Perubahan persentase',
  tool_percentage_change_title: 'Kalkulator perubahan persentase — Dari nilai lama ke baru',
  tool_percentage_change_usecase_1: 'Pendapatan bulanan: GMV 80 bulan lalu vs 100 bulan ini → +25%.',
  tool_percentage_change_usecase_2: 'Analitik produk: DAU 50k ke 55k → +10% relatif.',
  tool_percentage_change_usecase_3: 'Harga: dari 40 ke 34 → −15% (bukan “6 poin persentase”).',
  tool_percentage_change_usecases_title: 'Skenario bisnis & data',
};
export default id;
