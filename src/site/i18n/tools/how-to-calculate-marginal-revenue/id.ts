/**
 * i18n tool shard (how-to-calculate-marginal-revenue / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_marginal_revenue_article:
    'Pendapatan marjinal adalah perubahan total pendapatan saat kuantitas berubah. Kalkulator ini menampilkan derivasi diskrit dua titik.',
  tool_marginal_revenue_calculate: 'Hitung MR',
  tool_marginal_revenue_description:
    'Hitung pendapatan marjinal dengan MR = ΔTR / ΔQ. Proses: masukkan kuantitas dan total pendapatan di dua titik, hitung ΔTR dan ΔQ, lalu bagi. Contoh: Q 10→11, TR 1000→1080 → MR = 80. Hanya edukasi — bukan saran harga.',
  tool_marginal_revenue_detail_tpl: 'ΔTR = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_disclaimer: 'Kalkulator ini untuk mempelajari konsep mikroekonomi. Bukan saran bisnis, harga, atau investasi.',
  tool_marginal_revenue_example: 'Contoh: Q₁ = 10, TR₁ = 1000; Q₂ = 11, TR₂ = 1080 → ΔTR = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_example_title: 'Contoh',
  tool_marginal_revenue_faq_a1:
    'Pendapatan rata-rata adalah TR / Q pada suatu tingkat. Marginal adalah perubahan TR saat Q berubah; hanya berimpit pada kasus khusus.',
  tool_marginal_revenue_faq_a2: 'MR = ΔTR / ΔQ dengan ΔTR = TR₂ − TR₁ dan ΔQ = Q₂ − Q₁. Ini derivasi diskrit, bukan turunan kontinu.',
  tool_marginal_revenue_faq_a3: 'MR tidak terdefinisi jika kuantitas tidak berubah. Pilih dua kuantitas berbeda.',
  tool_marginal_revenue_faq_a4: 'Tidak. Alat ini tidak memberi saran harga/produksi; keputusan laba juga butuh biaya marjinal.',
  tool_marginal_revenue_faq_q1: 'Apa bedanya dengan pendapatan rata-rata?',
  tool_marginal_revenue_faq_q2: 'Bagaimana MR diturunkan di sini?',
  tool_marginal_revenue_faq_q3: 'Bagaimana jika ΔQ nol?',
  tool_marginal_revenue_faq_q4: 'MR positif berarti harus menaikkan output?',
  tool_marginal_revenue_formula_body:
    'Menurut definisi, pendapatan marjinal mengukur perubahan total pendapatan saat kuantitas berubah. Untuk dua titik:',
  tool_marginal_revenue_formula_item_1: 'ΔTR = TR₂ − TR₁ (perubahan total pendapatan)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (perubahan kuantitas)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔTR / ΔQ jika ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Langkah diskrit mendekati MR rata-rata pada interval; model kontinu memakai dTR/dQ. MR negatif berarti pendapatan turun saat kuantitas naik.',
  tool_marginal_revenue_formula_title: 'Derivasi rumus',
  tool_marginal_revenue_how_body:
    'Masukkan kuantitas dan total pendapatan untuk tingkat 1 dan 2. Alat menghitung ΔTR = TR2 − TR1, ΔQ = Q2 − Q1, lalu MR = ΔTR / ΔQ di browser.',
  tool_marginal_revenue_how_title: 'Cara kerja',
  tool_marginal_revenue_q1_label: 'Kuantitas (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'mis. 10',
  tool_marginal_revenue_q2_label: 'Kuantitas (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'mis. 11',
  tool_marginal_revenue_quantity_label: 'Kuantitas',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Marginal Revenue (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principles of Microeconomics (kompetisi)',
  tool_marginal_revenue_references: 'Entri Investopedia tentang marginal revenue; perlakuan pengantar MR = ΔTR/ΔQ (mis. OpenStax).',
  tool_marginal_revenue_result_label: 'Pendapatan marjinal',
  tool_marginal_revenue_revenue_label: 'Total pendapatan',
  tool_marginal_revenue_title: 'Kalkulator pendapatan marjinal — Rumus ΔTR / ΔQ',
  tool_marginal_revenue_tr1_label: 'Total pendapatan (TR₁)',
  tool_marginal_revenue_tr1_placeholder: 'mis. 1000',
  tool_marginal_revenue_tr2_label: 'Total pendapatan (TR₂)',
  tool_marginal_revenue_tr2_placeholder: 'mis. 1080',
  tool_marginal_revenue_usecase_1: 'PR ekonomi: cek tabel kuantitas/pendapatan dua tingkat.',
  tool_marginal_revenue_usecase_2: 'Perkiraan kasar: perubahan pendapatan saat output naik satu unit.',
  tool_marginal_revenue_usecase_3: 'Bandingkan bahasa MR dengan pendapatan rata-rata di mikroekonomi pengantar.',
  tool_marginal_revenue_usecases_title: 'Kapan dipakai',
  tool_marginal_revenue_zero_dq: 'ΔQ = 0 — kuantitas harus berbeda antara dua titik.',
};
export default id;
