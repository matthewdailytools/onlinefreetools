/**
 * i18n tool shard (how-to-calculate-break-even / id).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_break_even_title: "Kalkulator titik impas — Unit untuk menutup biaya",
	tool_break_even_description: "Hitung titik impas dalam unit dan pendapatan dari biaya tetap, harga per unit, dan biaya variabel per unit. Margin kontribusi ditampilkan. Contoh: biaya tetap 10.000, harga 50, variabel 30 → 500 unit dan pendapatan 25.000. Di browser; hanya edukasi, bukan saran bisnis atau investasi.",
	tool_break_even_article: "Titik impas tercapai saat margin menutup biaya tetap. Unit = FC / (P − V); pendapatan dan margin di URL edukasi yang sama.",
	tool_break_even_calculate: "Hitung",
	tool_break_even_sample: "Muat contoh",
	tool_break_even_clear: "Hapus",
	tool_break_even_fixed_label: "Biaya tetap",
	tool_break_even_fixed_ph: "mis. 10000",
	tool_break_even_price_label: "Harga per unit",
	tool_break_even_price_ph: "mis. 50",
	tool_break_even_var_label: "Biaya variabel per unit",
	tool_break_even_var_ph: "mis. 30",
	tool_break_even_result_units: "Unit impas",
	tool_break_even_result_revenue: "Pendapatan impas",
	tool_break_even_result_cm: "Margin kontribusi per unit",
	tool_break_even_result_note: "Hanya ilustrasi edukasi — bukan saran bisnis atau investasi.",
	tool_break_even_err_fixed: "Biaya tetap harus > 0.",
	tool_break_even_err_price: "Harga > 0 dan variabel ≥ 0.",
	tool_break_even_err_margin: "Harga harus lebih besar dari biaya variabel.",
	tool_break_even_how_title: "Cara kerja",
	tool_break_even_how_body: "Masukkan biaya tetap, harga, dan variabel. Alat menghitung margin, unit, dan pendapatan. Industri hanya di kasus penggunaan, tanpa URL terpisah.",
	tool_break_even_formula_title: "Rumus dan asumsi",
	tool_break_even_formula_body: "Unit Q = FC / (P − V). Pendapatan = Q × P. Margin = P − V. Asumsi:",
	tool_break_even_formula_item_1: "Biaya dan harga konstan; pajak/diskon tidak dimodelkan.",
	tool_break_even_formula_item_2: "Pandangan satu produk.",
	tool_break_even_formula_item_3: "Hasil edukasi, bukan prakiraan.",
	tool_break_even_example_title: "Contoh",
	tool_break_even_example: "Contoh: FC 10.000, harga 50, variabel 30 → margin 20 → 500 unit dan pendapatan 25.000.",
	tool_break_even_usecases_title: "Kapan dipakai",
	tool_break_even_usecase_1: "Kelas: latihan rumus dengan FC, P, V tetap.",
	tool_break_even_usecase_2: "Sketsa berapa unit menutup biaya tetap (hanya ilustrasi).",
	tool_break_even_usecase_3: "Lihat margin dan pendapatan impas di satu halaman.",
	tool_break_even_faq_q1: "Rumus apa?",
	tool_break_even_faq_a1: "Q = FC / (P − V). Pendapatan = Q × P. Margin = P − V.",
	tool_break_even_faq_q2: "Harga = variabel?",
	tool_break_even_faq_a2: "Tidak ada volume terbatas. Naikkan harga atau turunkan variabel.",
	tool_break_even_faq_q3: "Saran bisnis?",
	tool_break_even_faq_a3: "Tidak. Hanya ilustrasi edukasi.",
	tool_break_even_faq_q4: "Unit atau pendapatan?",
	tool_break_even_faq_a4: "Keduanya di hasil; pendapatan = unit × harga.",
	tool_break_even_disclaimer: "Hasil hanya edukasi; bukan saran bisnis, pajak, atau investasi.",
	tool_break_even_references: "Definisi Investopedia titik impas dan margin kontribusi; rumus FC/(P−V).",
	tool_break_even_ref_bep_label: "Investopedia — Titik impas",
	tool_break_even_ref_cm_label: "Investopedia — Margin kontribusi",
};

export default id;
