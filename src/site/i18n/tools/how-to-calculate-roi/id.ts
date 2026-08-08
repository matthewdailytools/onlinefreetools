/**
 * i18n tool shard (how-to-calculate-roi / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_roi_article:
    'ROI sederhana mengekspresikan keuntungan bersih terhadap biaya dalam persen. Cocok untuk rekap kasar kampanye/proyek; bukan IRR/NPV multiperiode.',
  tool_roi_calculate: 'Hitung',
  tool_roi_description:
    'Hitung ROI sederhana dengan (Keuntungan − Biaya) / Biaya × 100%, atau (Nilai akhir − Awal) / Awal × 100%. Proses: masukkan biaya dan nilai akhir (atau keuntungan bersih), lalu tinjau asumsi pajak, biaya, dan waktu. Contoh: biaya 1000, akhir 1300 → ROI 30%. Hanya ilustrasi edukasi — bukan saran investasi.',
  tool_roi_disclaimer:
    'Hasil ROI hanya ilustrasi edukasi dan bukan saran investasi, pajak, atau keuangan. Imbal hasil masa lalu atau hipotetis tidak menjamin hasil di masa depan.',
  tool_roi_example: 'Contoh: biaya 1000, nilai akhir 1300 → keuntungan 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_example_title: 'Contoh',
  tool_roi_faq_a1:
    'ROI = (Akhir − Awal) / Awal × 100%, atau Keuntungan bersih / Biaya × 100% jika Anda mengisi keuntungan.',
  tool_roi_faq_a2:
    'Kami tidak mengestimasi pajak/biaya — masukkan sendiri. ROI sederhana juga tidak menganualisasi periode.',
  tool_roi_faq_a3: 'Bukan. Hasil hanya ilustrasi edukasi, bukan saran investasi/pajak/keuangan.',
  tool_roi_faq_a4: 'ROI tidak terdefinisi (pembagian nol). Masukkan biaya positif.',
  tool_roi_faq_q1: 'Rumus ROI apa yang dipakai?',
  tool_roi_faq_q2: 'Bagaimana dengan pajak, biaya, dan waktu?',
  tool_roi_faq_q3: 'Apakah ini saran investasi?',
  tool_roi_faq_q4: 'Bagaimana jika biaya awal nol?',
  tool_roi_final_label: 'Nilai akhir',
  tool_roi_final_placeholder: 'mis. 1300',
  tool_roi_formula_body:
    'ROI = (Nilai akhir − Investasi awal) / Investasi awal × 100%, atau Keuntungan bersih / Biaya × 100%. Perhatikan:',
  tool_roi_formula_item_1: 'Pajak: tidak diestimasi — masukkan angka setelah pajak jika itu target Anda.',
  tool_roi_formula_item_2: 'Waktu: ROI sederhana mengabaikan periode holding; bukan return tahunan.',
  tool_roi_formula_item_3: 'Biaya: masukkan komisi/platform fee ke biaya atau nilai akhir sendiri.',
  tool_roi_formula_item_4: 'Arus kas multiperiode dan IRR/NPV di luar cakupan persentase satu periode ini.',
  tool_roi_formula_title: 'Rumus dan asumsi',
  tool_roi_gain_label: 'Keuntungan bersih (opsional)',
  tool_roi_gain_placeholder: 'Jika diketahui, mengganti akhir − awal',
  tool_roi_how_body:
    'Masukkan biaya dan nilai akhir atau keuntungan bersih yang diketahui. ROI = bersih / biaya × 100%. Jika kosong, bersih = akhir − awal. Biaya nol ditolak.',
  tool_roi_how_title: 'Cara kerja',
  tool_roi_initial_label: 'Investasi awal (biaya)',
  tool_roi_initial_placeholder: 'mis. 1000',
  tool_roi_interpret_negative: 'ROI negatif (rugi relatif terhadap biaya) — hanya ilustrasi edukasi.',
  tool_roi_interpret_positive: 'ROI positif (untung relatif terhadap biaya) — hanya ilustrasi edukasi.',
  tool_roi_interpret_zero: 'ROI nol — tidak ada untung/rugi pada input ini.',
  tool_roi_ref_guide_label: 'Investopedia — Panduan menghitung ROI',
  tool_roi_ref_investopedia_label: 'Investopedia — Return on Investment (ROI)',
  tool_roi_references: 'Definisi dan panduan Investopedia tentang ROI; ROI sederhana = keuntungan bersih / biaya.',
  tool_roi_result_label: 'ROI',
  tool_roi_title: 'Kalkulator ROI — Cara menghitung return on investment',
  tool_roi_usecase_1: 'Pemasaran: ROI kasar kampanye setelah tahu belanja dan pendapatan teratribusi.',
  tool_roi_usecase_2: 'Tugas kuliah: latihan persentase ROI dasar dengan angka tetap.',
  tool_roi_usecase_3: 'Rekap proyek: ringkas satu inisiatif sebagai pasangan biaya/keuntungan (perkiraan saja).',
  tool_roi_usecases_title: 'Kapan dipakai',
  tool_roi_zero_cost: 'Investasi awal harus lebih dari nol.',
};
export default id;
