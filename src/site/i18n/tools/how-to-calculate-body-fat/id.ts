/**
 * i18n 工具分片（how-to-calculate-body-fat / id）。
 * 用美国海军围度公式估算体脂率；陆军标签与海军共用同一套 log10 方程。
 * 输入为厘米，代入前按 2.54 换成英寸。
 * 男性：86.010×log10(pinggang−leher) − 70.041×log10(tinggi) + 36.387。
 * 女性：163.205×log10(pinggang+pinggul−leher) − 97.684×log10(tinggi) − 78.387（减去 78.387，不是加上）。
 * 样例：男 178/40/86 cm 约 15.3%；女 165/34/74/96 cm 约 26.7%。仅供学习，不是诊断。
 */
import type { SiteLangDict } from '../../../types';

/** 体脂率计算器的印尼语文案；键与英文母版一一对应。 */
const id: SiteLangDict = {
	tool_body_fat_title: "Kalkulator lemak tubuh — Hitung persentase lemak dari lingkar tubuh",
	tool_body_fat_description: "Hitung persentase lemak tubuh dengan rumus lingkar tubuh Angkatan Laut AS. Langkahnya: ubah sentimeter ke inci, lalu masukkan ke log10. Contoh: pria tinggi 178 cm, leher 40 cm, pinggang 86 cm → sekitar 15.3%. Wanita tinggi 165 cm, leher 34 cm, pinggang 74 cm, pinggul 96 cm → sekitar 26.7%. Label Angkatan Darat memakai persamaan yang sama. Hanya untuk belajar, bukan saran medis atau diagnosis.",
	tool_body_fat_article: "Jenis kelamin dan ukuran pita dalam sentimeter cukup untuk perkiraan. Wanita perlu lingkar pinggul. Langkah di samping persen menunjukkan konversi ke inci.",
	tool_body_fat_desc: "Lingkar tubuh Angkatan Laut untuk persen lemak; label Angkatan Darat persamaan sama; cm ke inci; hanya belajar.",

	tool_body_fat_safety_banner: "Hanya perkiraan untuk belajar. Rumus lingkar tubuh bukan DXA, Bod Pod, atau diagnosis. Bukan saran medis.",
	tool_body_fat_hint: "Pakai sentimeter. Rumus wanita butuh pinggul. Pinggang harus lebih besar dari leher; untuk wanita, pinggang ditambah pinggul juga harus lebih besar dari leher. Label Angkatan Darat memakai persamaan lingkar tubuh yang sama dengan Angkatan Laut.",
	tool_body_fat_method_label: "Label metode",
	tool_body_fat_method_navy: "Lingkar tubuh Angkatan Laut AS",
	tool_body_fat_method_army: "Lingkar tubuh gaya Angkatan Darat AS / DoD",
	tool_body_fat_sex_label: "Jenis kelamin (memilih rumus)",
	tool_body_fat_sex_male: "Pria",
	tool_body_fat_sex_female: "Wanita",
	tool_body_fat_height_label: "Tinggi badan (cm)",
	tool_body_fat_height_ph: "mis. 178",
	tool_body_fat_neck_label: "Lingkar leher (cm)",
	tool_body_fat_neck_ph: "mis. 40",
	tool_body_fat_waist_label: "Lingkar pinggang (cm)",
	tool_body_fat_waist_ph: "mis. 86",
	tool_body_fat_hip_label: "Lingkar pinggul (cm, wanita)",
	tool_body_fat_hip_ph: "mis. 96",
	tool_body_fat_calculate: "Hitung",
	tool_body_fat_sample: "Muat contoh",
	tool_body_fat_clear: "Hapus",
	tool_body_fat_result_label: "Perkiraan lemak tubuh",
	tool_body_fat_steps_title: "Langkah hitung",
	tool_body_fat_step_convert_tpl: "Ubah cm ke inci (÷ 2.54): tinggi {hIn} in, leher {nIn} in, pinggang {wIn} in{hipPart}.",
	tool_body_fat_step_hip_part_tpl: ", pinggul {hipIn} in",
	tool_body_fat_step_male_tpl: "Pria %LT ≈ 86.010×log10(pinggang−leher) − 70.041×log10(tinggi) + 36.387 = {pct}%.",
	tool_body_fat_step_female_tpl: "Wanita %LT ≈ 163.205×log10(pinggang+pinggul−leher) − 97.684×log10(tinggi) − 78.387 = {pct}%.",
	tool_body_fat_result_note: "Hanya perkiraan untuk belajar, bukan saran medis atau diagnosis. Letak pita dan postur mengubah hasil.",
	tool_body_fat_err_input: "Tinggi, leher, dan pinggang harus angka lebih dari 0.",
	tool_body_fat_err_hip: "Rumus wanita membutuhkan lingkar pinggul lebih dari 0.",
	tool_body_fat_err_geom: "Pinggang harus lebih besar dari leher; untuk wanita, pinggang ditambah pinggul juga harus lebih besar dari leher.",

	tool_body_fat_how_title: "Cara menghitung persentase lemak tubuh",
	tool_body_fat_how_body: "Pilih label Angkatan Laut atau Angkatan Darat, isi jenis kelamin dan sentimeter, lalu tekan Hitung. Kedua label memakai persamaan yang sama. Muat contoh berganti pria sekitar 15.3% dan wanita sekitar 26.7%.",
	tool_body_fat_how_item_1: "Pilih label metode dan jenis kelamin. Angkatan Darat di sini memakai persamaan lingkar yang sama dengan Angkatan Laut.",
	tool_body_fat_how_item_2: "Isi tinggi, leher, dan pinggang dalam sentimeter; untuk wanita tambahkan pinggul.",
	tool_body_fat_how_item_3: "Tekan Hitung dan baca persen beserta langkahnya.",
	tool_body_fat_how_item_4: "Tekan Muat contoh: pria 178/40/86 cm sekitar 15.3%, lalu wanita 165/34/74/96 cm sekitar 26.7%.",

	tool_body_fat_why_choose_title: "Mengapa memakai kalkulator lemak tubuh ini",
	tool_body_fat_why_choose_item_1: "Sentimeter langsung diisi; inci baru muncul sebelum log10.",
	tool_body_fat_why_choose_item_2: "Label Angkatan Darat bukan rumus lain: persamaannya sama dengan Angkatan Laut.",
	tool_body_fat_why_choose_item_3: "Langkah menyimpan konversi dan angka yang sudah dimasukkan.",
	tool_body_fat_why_choose_item_4: "Contoh bergiliran antara angka pria dan wanita yang tetap.",
	tool_body_fat_why_choose_item_5: "Di samping hasil tertulis bahwa ini untuk belajar, bukan diagnosis.",

	tool_body_fat_formula_title: "Rumus dan asumsi pengukuran",
	tool_body_fat_formula_body: "Pria: %LT ≈ 86.010×log10(pinggang−leher) − 70.041×log10(tinggi) + 36.387 (inci). Wanita: %LT ≈ 163.205×log10(pinggang+pinggul−leher) − 97.684×log10(tinggi) − 78.387.",
	tool_body_fat_formula_item_1: "Pita diletakkan di titik yang biasa dipakai Angkatan Laut/DoD; postur dan pakaian mengubah bacaan.",
	tool_body_fat_formula_item_2: "Masukan berupa sentimeter, diubah dengan 1 in = 2.54 cm sebelum log10.",
	tool_body_fat_formula_item_3: "Label Angkatan Darat memakai persamaan lingkar tubuh edukatif yang sama dengan Angkatan Laut.",
	tool_body_fat_formula_item_4: "Bukan hasil klinis DXA atau Bod Pod, dan bukan saran medis.",
	tool_body_fat_formula_item_5: "Kaliper lipatan kulit butuh beberapa titik dan teknik yang terlatih; itu bukan bacaan lingkar.",

	tool_body_fat_example_title: "Contoh yang sudah dihitung",
	tool_body_fat_example: "Muat contoh mulai dari pria, Angkatan Laut: tinggi 178 cm, leher 40 cm, pinggang 86 cm → sekitar 15.3%. Berikutnya wanita dengan label Angkatan Darat, persamaan tetap: tinggi 165 cm, leher 34 cm, pinggang 74 cm, pinggul 96 cm → sekitar 26.7%.",

	tool_body_fat_usecases_title: "Kapan menghitung lemak tubuh",
	tool_body_fat_usecase_1: "Di kelas, memasukkan angka tetap ke rumus lingkar Angkatan Laut.",
	tool_body_fat_usecase_2: "Melihat persen kasar di catatan latihan sebelum bicara dengan klinisi; ini bukan diagnosis.",
	tool_body_fat_usecase_3: "Membandingkan nama Angkatan Laut dan Angkatan Darat tanpa mengganti persamaan.",
	tool_body_fat_usecase_4: "Melihat langkah sentimeter ke inci di samping persentase.",

	tool_body_fat_faq_q1: "Bagaimana cara menghitung persentase lemak tubuh?",
	tool_body_fat_faq_a1: "Dengan rumus log10 lingkar tubuh gaya Angkatan Laut AS / DoD, setelah sentimeter diubah ke inci dengan 2.54. Pria: 86.010×log10(pinggang−leher) − 70.041×log10(tinggi) + 36.387.",
	tool_body_fat_faq_q2: "Apakah ini saran medis?",
	tool_body_fat_faq_a2: "Bukan. Ini perkiraan untuk belajar, bukan diagnosis, rencana pengobatan, atau tes komposisi tubuh klinis.",
	tool_body_fat_faq_q3: "Apakah label Angkatan Laut dan Angkatan Darat beda rumus?",
	tool_body_fat_faq_a3: "Tidak. Keduanya memakai persamaan lingkar yang sama. Letak pita lebih berpengaruh daripada nama label.",
	tool_body_fat_faq_q4: "Mengapa harus ke inci?",
	tool_body_fat_faq_a4: "Persamaan log10 yang diterbitkan memakai inci. Masukan tetap sentimeter dan dikonversi dengan 2.54.",
	tool_body_fat_faq_q5: "Pinggang boleh sama dengan leher?",
	tool_body_fat_faq_a5: "Tidak. Pinggang harus lebih besar dari leher. Untuk wanita, pinggang ditambah pinggul juga harus lebih besar dari leher.",
	tool_body_fat_faq_q6: "Bagaimana dengan kaliper lipatan kulit?",
	tool_body_fat_faq_a6: "Itu pengukuran lain di beberapa titik dan butuh teknik. Kalkulator ini hanya menerima lingkar. Rumus wanita diakhiri minus 78.387: 163.205×log10(pinggang+pinggul−leher) − 97.684×log10(tinggi) − 78.387.",

	tool_body_fat_disclaimer: "Perkiraan lemak tubuh hanya ilustrasi untuk belajar. Ini bukan saran medis, diagnosis, atau pengganti tes komposisi tubuh klinis. Keputusan kesehatan sebaiknya dibicarakan dengan klinisi yang berkualifikasi.",
	tool_body_fat_references: "Persamaan metode lingkar Angkatan Laut AS / DoD; catatan edukatif kalkulator ACE; literatur metode lingkar yang sudah ditinjau sejawat.",
	tool_body_fat_ref_ace_label: "ACE — Kalkulator lemak tubuh (edukatif)",
	tool_body_fat_ref_pmc_label: "PMC — Metode lemak tubuh berdasarkan lingkar",
};

export default id;
