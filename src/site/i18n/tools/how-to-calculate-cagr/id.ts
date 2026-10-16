/**
 * Shard i18n alat (how-to-calculate-cagr / id).
 * Penulisan ulang mandiri bahasa Indonesia: tiga mode CAGR / nilai akhir / tahun,
 * langkah + cek balik, dan batas YMYL — bukan saran investasi.
 */
import type { SiteLangDict } from '../../../types';

/** Indonesia: kalkulator CAGR antara dua nilai */
const id: SiteLangDict = {
	tool_cagr_title: "Kalkulator CAGR — Pertumbuhan tahunan antara dua nilai",
	tool_cagr_description:
		"Hitung tingkat pertumbuhan tahunan majemuk (CAGR) dari nilai awal dan akhir, atau balik arah untuk mencari nilai akhir maupun jumlah tahun. Contoh: 10000 → 16105.10 dalam 5 tahun ≈ CAGR sekitar 10%. Ilustrasi edukatif saja — bukan saran investasi.",
	tool_cagr_article:
		"Hitung CAGR, nilai akhir, atau tahun dengan identitas standar ((EV/BV)^(1/n)−1), baris langkah, dan cek balik dari awal ke akhir.",
	tool_cagr_desc: "CAGR %, nilai akhir, atau tahun dari nilai awal. Hanya edukatif.",

	tool_cagr_safety_banner:
		"Hanya edukatif. Halaman ini menghitung aritmetika CAGR seperti di buku teks. Bukan saran investasi, pajak, atau keuangan, dan pertumbuhan masa lalu atau hipotetis tidak menjamin hasil di masa depan.",
	tool_cagr_mode_label: "Apa yang ingin Anda cari?",
	tool_cagr_mode_rate: "CAGR % dari awal / akhir / tahun",
	tool_cagr_mode_end: "Nilai akhir dari awal / CAGR / tahun",
	tool_cagr_mode_years: "Tahun dari awal / akhir / CAGR",
	tool_cagr_hint:
		"Semua input aktif harus lebih besar dari nol. CAGR mengabaikan arus kas di tengah periode dan menganggap compounding sekali per tahun.",
	tool_cagr_begin_label: "Nilai awal",
	tool_cagr_begin_ph: "mis. 10000",
	tool_cagr_end_label: "Nilai akhir",
	tool_cagr_end_ph: "mis. 16105.10",
	tool_cagr_rate_label: "CAGR %",
	tool_cagr_rate_ph: "mis. 10",
	tool_cagr_years_label: "Jumlah tahun",
	tool_cagr_years_ph: "mis. 5",
	tool_cagr_calculate: "Hitung",
	tool_cagr_sample: "Muat contoh",
	tool_cagr_clear: "Hapus",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "Nilai akhir",
	tool_cagr_yearsOut_label: "Tahun",
	tool_cagr_multOut_label: "Kelipatan pertumbuhan total",
	tool_cagr_steps_title: "Langkah",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%.",
	tool_cagr_step_end_tpl: "Akhir = {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_step_years_tpl: "Tahun = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}.",
	tool_cagr_step_check_tpl: "Cek: {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_result_note:
		"Mengasumsikan compounding tahunan tanpa arus kas di tengah periode. Ilustrasi edukatif saja — bukan saran investasi.",
	tool_cagr_err_generic:
		"Masukkan angka positif untuk kolom aktif (misalnya awal 10000, akhir 16105.1, tahun 5).",

	tool_cagr_how_title: "Cara memakai kalkulator CAGR",
	tool_cagr_how_body:
		"Pilih CAGR %, nilai akhir, atau tahun. Isi nilai yang diketahui, lalu Hitung. Muat contoh bergilir: 10000→16105.1 selama 5 tahun (10%), kasus nilai akhir kebalikan, tahun dari CAGR 10%, dan kasus lebih pendek 5000→8000 selama 3 tahun.",
	tool_cagr_how_item_1: "Pilih apa yang ingin dicari.",
	tool_cagr_how_item_2: "Masukkan nilai positif yang diketahui untuk mode itu.",
	tool_cagr_how_item_3: "Klik Hitung untuk melihat jawaban, kelipatan pertumbuhan, dan langkah.",
	tool_cagr_how_item_4: "Gunakan Muat contoh untuk memutar titik cek buku teks.",

	tool_cagr_why_choose_title: "Yang Anda dapat dari kalkulator CAGR ini",
	tool_cagr_why_choose_item_1: "Tiga arah: CAGR %, nilai akhir, atau tahun.",
	tool_cagr_why_choose_item_2: "Kelipatan pertumbuhan (akhir ÷ awal) di samping jawaban utama.",
	tool_cagr_why_choose_item_3: "Baris langkah yang memasukkan angka Anda ke identitas CAGR.",
	tool_cagr_why_choose_item_4: "Cek balik: awal × (1+r)^n kembali ke akhir.",
	tool_cagr_why_choose_item_5: "Batas YMYL jelas: hanya aritmetika edukatif — bukan saran investasi.",

	tool_cagr_formula_title: "Rumus CAGR",
	tool_cagr_formula_body:
		"CAGR adalah tingkat tahunan konstan yang menumbuhkan nilai awal menjadi nilai akhir selama n tahun dengan compounding sekali per tahun.",
	tool_cagr_formula_item_1:
		"CAGR = ((EV ÷ BV)^(1 ÷ n) − 1) × 100. Contoh: ((16105.1/10000)^(1/5)−1)×100 ≈ 10%.",
	tool_cagr_formula_item_2: "EV = BV × (1 + CAGR/100)^n.",
	tool_cagr_formula_item_3: "n = ln(EV ÷ BV) ÷ ln(1 + CAGR/100).",
	tool_cagr_formula_item_4:
		"Memerlukan BV > 0, EV > 0, n > 0 (dan CAGR ≠ −100% saat mencari tahun).",
	tool_cagr_formula_item_5: "Mengabaikan biaya, pajak, dan arus kas tengah periode — berbeda dari IRR penuh.",

	tool_cagr_example_title: "Contoh yang dikerjakan",
	tool_cagr_example:
		"Muat contoh dimulai dari 10.000 → 16.105,10 selama 5 tahun → CAGR ≈ 10%. Berikutnya menumbuhkan 10.000 pada 10% selama 5 tahun kembali ke ≈16.105. Lalu mencari tahun dari ujung yang sama pada 10%. Contoh terakhir: 5.000 → 8.000 selama 3 tahun.",

	tool_cagr_usecases_title: "Kapan memakai kalkulator CAGR",
	tool_cagr_usecase_1: "Tugas sekolah: menahunkan pertumbuhan multi-tahun dengan rumus CAGR standar.",
	tool_cagr_usecase_2: "Membandingkan ujung pendapatan atau portofolio secara tahunan (hanya ilustrasi).",
	tool_cagr_usecase_3: "Mencari mundur berapa tahun yang dibutuhkan CAGR tertentu untuk mencapai target.",
	tool_cagr_usecase_4: "Membedakan dari ROI sederhana di halaman ROI terkait bila tahun ikut berperan.",

	tool_cagr_faq_q1: "Apakah compounding diasumsikan tahunan?",
	tool_cagr_faq_a1: "Ya di halaman ini. Timing di dalam tahun diabaikan.",
	tool_cagr_faq_q2: "Rumus CAGR apa yang dipakai?",
	tool_cagr_faq_a2:
		"CAGR = ((Akhir ÷ Awal)^(1 ÷ Tahun) − 1) × 100. Ketiganya harus lebih besar dari nol.",
	tool_cagr_faq_q3: "Apa bedanya CAGR dengan ROI sederhana?",
	tool_cagr_faq_a3:
		"ROI sederhana mengabaikan berapa tahun perubahan terjadi. CAGR menahunkan pertumbuhan sesuai tahun yang Anda masukkan.",
	tool_cagr_faq_q4: "Bisakah saya mencari nilai akhir atau tahun?",
	tool_cagr_faq_a4:
		"Bisa. Ganti mode untuk menumbuhkan nilai awal ke depan, atau mencari tahun dari awal/akhir/CAGR.",
	tool_cagr_faq_q5: "Bagaimana jika nilai awal atau akhir nol atau negatif?",
	tool_cagr_faq_a5:
		"Keduanya harus lebih besar dari nol. Input nol atau negatif membuat rumus CAGR standar tidak terdefinisi di sini.",
	tool_cagr_faq_q6: "Apakah ini saran investasi?",
	tool_cagr_faq_a6:
		"Tidak. Angka hanya ilustrasi edukatif — bukan saran investasi, pajak, atau keuangan.",
	tool_cagr_faq_q7: "Apakah CAGR mencakup setoran atau penarikan?",
	tool_cagr_faq_a7:
		"Tidak. Hanya memakai awal, akhir, dan tahun. Untuk arus kas tidak teratur gunakan alat IRR.",

	tool_cagr_disclaimer:
		"Hasil CAGR hanya ilustrasi edukatif dan bukan saran investasi, pajak, atau keuangan. Pengembalian masa lalu atau hipotetis tidak menjamin hasil di masa depan. Portofolio nyata menghadapi biaya, pajak, arus kas, dan risiko yang tidak dimodelkan halaman ini.",
	tool_cagr_references:
		"Definisi dan panduan rumus CAGR Investopedia; tingkat pertumbuhan tahunan standar ((EV/BV)^(1/n) − 1).",
	tool_cagr_ref_cagr_label: "Investopedia — Compound Annual Growth Rate (CAGR)",
	tool_cagr_ref_formula_label: "Investopedia — Formula for calculating CAGR",
};

export default id;
