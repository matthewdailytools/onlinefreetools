/**
 * Shard i18n alat (how-to-calculate-age / id).
 * Usia kalender tahun/bulan/hari + total hari utuh
 * antara tanggal lahir dan tanggal acuan (kalender UTC).
 * Edukatif saja — bukan saran usia hukum atau kelayakan.
 */
import type { SiteLangDict } from '../../../types';

/** Indonesia: kalkulator usia / tahun bulan hari dari dua tanggal */
const id: SiteLangDict = {
	tool_age_title: "Kalkulator usia — Tahun bulan dan hari dari dua tanggal",
	tool_age_description:
		"Hitung usia kalender dalam tahun, bulan, dan hari dari tanggal lahir sampai tanggal acuan memakai hari kalender UTC. Contoh: lahir 2000-01-01 per 2026-08-09 → 26 tahun, 7 bulan, 8 hari. Juga menampilkan total hari utuh. Matematika kalender edukatif — bukan saran usia hukum.",
	tool_age_article:
		"Temukan usia kalender sebagai tahun, bulan, dan hari antara dua tanggal, plus total hari utuh, dengan langkah pinjaman dan pintasan Hari ini.",
	tool_age_desc:
		"Usia tahun/bulan/hari dari lahir ke tanggal acuan. Menampilkan total hari.",

	tool_age_hint:
		"Pakai tanggal kalender YYYY-MM-DD (batas hari UTC). Acuan harus pada atau setelah lahir. Hari ini mengisi acuan dengan tanggal UTC hari ini.",
	tool_age_birth_label: "Tanggal lahir",
	tool_age_asof_label: "Tanggal acuan",
	tool_age_calculate: "Hitung",
	tool_age_today: "Pakai hari ini",
	tool_age_sample: "Muat contoh",
	tool_age_clear: "Hapus",
	tool_age_ymdOut_label: "Usia",
	tool_age_yearsOut_label: "tahun",
	tool_age_monthsOut_label: "bulan",
	tool_age_daysOut_label: "hari",
	tool_age_totalDaysOut_label: "Total hari utuh",
	tool_age_steps_title: "Langkah",
	tool_age_step_ymd_tpl:
		"Dari {birth} ke {asof}: {y} tahun, {m} bulan, {d} hari setelah pinjaman kalender.",
	tool_age_step_borrow_tpl:
		"Pinjaman hari: bila hari acuan lebih awal dari hari lahir dalam bulan, pinjam hari dari bulan kalender sebelumnya.",
	tool_age_step_total_tpl:
		"Total hari utuh = (acuan − lahir) di tengah malam UTC ÷ 86400000 = {total}.",
	tool_age_result_note:
		"Hanya tanggal kalender UTC — bukan jam atau zona waktu untuk batas hukum. Hari kabisat dihitung bila jatuh dalam selang. Edukatif saja — bukan kelayakan atau saran usia hukum.",
	tool_age_err_generic:
		"Masukkan tanggal valid (YYYY-MM-DD). Acuan harus pada atau setelah tanggal lahir.",

	tool_age_how_title: "Cara memakai kalkulator usia",
	tool_age_how_body:
		"Isi tanggal lahir dan acuan, atau ketuk Pakai hari ini untuk acuan, lalu Hitung. Muat contoh memutar 2000-01-01→2026-08-09, kasus hari kabisat, usia 0 di hari yang sama, dan pinjaman lintas batas tahun.",
	tool_age_how_item_1: "Masukkan tanggal lahir.",
	tool_age_how_item_2: "Masukkan tanggal acuan, atau klik Pakai hari ini.",
	tool_age_how_item_3: "Klik Hitung untuk melihat tahun, bulan, hari, dan total hari utuh.",
	tool_age_how_item_4: "Gunakan Muat contoh untuk memutar kasus kalender buku teks.",

	tool_age_why_choose_title: "Apa yang diberikan kalkulator usia ini",
	tool_age_why_choose_item_1: "Usia kronologis penuh sebagai tahun, bulan, dan sisa hari.",
	tool_age_why_choose_item_2: "Total hari utuh antara dua tanggal kalender UTC.",
	tool_age_why_choose_item_3: "Pintasan Pakai hari ini untuk kolom acuan.",
	tool_age_why_choose_item_4:
		"Langkah pinjaman yang terlihat saat hari-dalam-bulan perlu pinjaman bulan sebelumnya.",
	tool_age_why_choose_item_5:
		"Batas jelas: hanya matematika kalender — bukan usia hukum atau saran kelayakan.",

	tool_age_formula_title: "Rumus usia",
	tool_age_formula_body:
		"Urai kedua tanggal sebagai tengah malam UTC. Kurangi tahun, lalu bulan, lalu hari dengan pinjaman kalender. Total hari memakai selisih milidetik dibagi 86400000.",
	tool_age_formula_item_1:
		"tahun = tahun acuan − tahun lahir (lalu sesuaikan jika bulan/hari belum tercapai).",
	tool_age_formula_item_2:
		"Jika hari acuan < hari lahir, pinjam panjang bulan kalender sebelumnya.",
	tool_age_formula_item_3: "Jika bulan menjadi negatif, pinjam 12 bulan dari tahun.",
	tool_age_formula_item_4: "totalHari = bulatkan((acuan − lahir) / 86400000) di UTC.",
	tool_age_formula_item_5: "Hari kabisat memengaruhi total bila jatuh di dalam selang.",

	tool_age_example_title: "Contoh terhitung",
	tool_age_example:
		"Muat contoh dimulai dengan lahir 2000-01-01 dan acuan 2026-08-09 → 26 tahun, 7 bulan, 8 hari. Berikutnya memeriksa lahir 29 Feb terhadap 28 Feb 2024. Lalu usia 0 di hari yang sama. Contoh terakhir melintasi batas tahun dari 1985-12-31 ke 2026-01-01.",

	tool_age_usecases_title: "Kapan memakai kalkulator usia",
	tool_age_usecase_1: "Formulir yang meminta usia dalam tahun, bulan, dan hari.",
	tool_age_usecase_2: "PR tentang selisih kalender dan pinjaman bulan.",
	tool_age_usecase_3: "Cek cepat total hari utuh antara dua tanggal kalender.",
	tool_age_usecase_4:
		"Pasangkan dengan alat selisih tanggal bila Anda butuh rentang yang tidak dibingkai sebagai usia.",

	tool_age_faq_q1: "Bagaimana usia kronologis dihitung?",
	tool_age_faq_a1:
		"Kurangi tahun, bulan, dan hari kalender dengan pinjaman. Contoh: 2000-01-01 ke 2026-08-09 → 26t 7b 8h.",
	tool_age_faq_q2: "Apa fungsi Pakai hari ini?",
	tool_age_faq_a2:
		"Mengisi kolom acuan dengan tanggal kalender UTC hari ini dan menghitung ulang.",
	tool_age_faq_q3: "Apakah zona waktu diikutsertakan?",
	tool_age_faq_a3:
		"Tidak. Tanggal diperlakukan sebagai hari kalender UTC, bukan waktu jam lokal.",
	tool_age_faq_q4: "Bagaimana jika lahir setelah acuan?",
	tool_age_faq_a4:
		"Halaman menolak kasus itu. Acuan harus pada atau setelah lahir.",
	tool_age_faq_q5: "Bagaimana hari kabisat memengaruhi hasil?",
	tool_age_faq_a5:
		"Mereka dihitung dalam total hari bila jatuh di selang, dan panjang bulan mengikuti kalender saat meminjam.",
	tool_age_faq_q6: "Apakah ini saran usia hukum atau kelayakan?",
	tool_age_faq_a6:
		"Tidak. Hanya matematika kalender edukatif — bukan saran hukum, medis, atau kelayakan.",
	tool_age_faq_q7: "Apa bedanya dengan selisih tanggal?",
	tool_age_faq_a7:
		"Halaman ini membingkai rentang sebagai usia kronologis (T/B/H). Gunakan alat selisih tanggal terkait untuk rumusan rentang lain.",

	tool_age_disclaimer:
		"Usia kalender edukatif saja — bukan usia hukum, kelayakan, saran medis, atau identitas resmi.",
	tool_age_references:
		"Wikipedia usia kronologis dan tanggal kalender untuk konteks edukatif.",
	tool_age_ref_a_label: "Wikipedia — Chronological age",
	tool_age_ref_b_label: "Wikipedia — Calendar date",
};

export default id;
