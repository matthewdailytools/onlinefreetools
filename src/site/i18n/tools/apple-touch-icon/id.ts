/**
 * Pecahan i18n (apple-touch-icon / id).
 * Tulis ulang niat telusur: H1 apple-touch-icon 180×180; file tetap di perangkat, tanpa unggah ke server.
 */
import type { SiteLangDict } from '../../../types';

/** Teks tampilan Indonesia: ikon layar utama 180, ZIP opsional, latar buram. */
const id: SiteLangDict = {
	tool_apple_touch_icon_article:
		'Ubah logo jadi ikon apple-touch untuk layar Utama: PNG buram 180×180. Kalau manifest butuh lebih, ZIP bisa membawa favicon 32 serta PWA 192/512. File tetap di perangkat dan tidak diunggah ke server.',
	tool_apple_touch_icon_bg_label: 'Latar buram',
	tool_apple_touch_icon_choose_image: 'Pilih logo',
	tool_apple_touch_icon_clear: 'Hapus',
	tool_apple_touch_icon_desc:
		'Ekspor apple-touch-icon 180×180 PNG buram; tetap di perangkat, tanpa unggah ke server.',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180: pilih logo, letakkan di kotak buram, unduh PNG. Contoh: sampel saat buka sudah muat 180×180. Langkah: pilih → biarkan 180 → unduh. ZIP opsional berisi favicon 32 dan PWA 192 / 512. File tetap di perangkat dan tidak diunggah ke server.',
	tool_apple_touch_icon_download: 'Unduh PNG',
	tool_apple_touch_icon_download_zip: 'Unduh ZIP ukuran',
	tool_apple_touch_icon_drop_hint: 'Jatuhkan satu logo. Dipusatkan di kotak buram.',
	tool_apple_touch_icon_empty: 'Pilih logo dulu.',
	tool_apple_touch_icon_err_decode:
		'Gambar tidak terbaca. Coba PNG, JPEG, atau tangkapan bitmap dari SVG.',
	tool_apple_touch_icon_err_fflate: 'Mesin ZIP gagal dimuat. Cek jaringan lalu coba lagi.',
	tool_apple_touch_icon_example:
		'Muat contoh menggambar tanda uji, memuatnya ke kotak buram 180×180, dan mengaktifkan Unduh PNG. ZIP menambah 32, 192, dan 512.',
	tool_apple_touch_icon_example_title: 'Contoh',
	tool_apple_touch_icon_faq_a1:
		'Untuk layar utama iPhone modern, 180×180 adalah ukuran praktis apple-touch-icon.png sebelum tag link.',
	tool_apple_touch_icon_faq_a2:
		'Tidak. Logo diurai di tab ini. Tidak ada yang diunggah ke server kami.',
	tool_apple_touch_icon_faq_a3:
		'Latar buram (gaya precomposed) supaya iOS tidak menumpuk kilau di atas transparansi.',
	tool_apple_touch_icon_faq_a4:
		'32 favicon PNG kecil; 192 dan 512 umum untuk PWA. Ikut di ZIP; tugas default tetap 180×180.',
	tool_apple_touch_icon_faq_a5:
		'167 / 152 / 120 iPad lama boleh masuk set ZIP. Ekspor default tetap 180×180.',
	tool_apple_touch_icon_faq_q1: 'Apakah 180×180 cukup untuk ikon sentuh Apple?',
	tool_apple_touch_icon_faq_q2: 'Apakah logo saya diunggah?',
	tool_apple_touch_icon_faq_q3: 'Kenapa latar harus buram?',
	tool_apple_touch_icon_faq_q4: 'Untuk apa 32 dan PWA 192/512?',
	tool_apple_touch_icon_faq_q5: 'Masih mengekspor 167 atau 152?',
	tool_apple_touch_icon_how_body:
		'Siapkan logo yang tampil saat situs ditambah ke layar Utama, ekspor PNG buram 180×180, lalu ZIP ukuran ekstra bila perlu.',
	tool_apple_touch_icon_how_item_1: 'Pilih logo untuk apple-touch-icon 180×180.',
	tool_apple_touch_icon_how_item_2: 'Biarkan 180 tercentang kecuali butuh chip 32 / 192 / 512.',
	tool_apple_touch_icon_how_item_3: 'Pertahankan latar buram agar ikon tidak tembus di layar Utama.',
	tool_apple_touch_icon_how_item_4: 'Unduh PNG atau ZIP. Contoh sudah jalan saat halaman terbuka.',
	tool_apple_touch_icon_how_title: 'Cara memakai',
	tool_apple_touch_icon_load_sample: 'Muat contoh',
	tool_apple_touch_icon_out_size_label: 'Ukuran keluaran',
	tool_apple_touch_icon_rules_body:
		'Ikon layar Utama butuh kotak, isian buram, dan PNG 180 — bukan paket ICO lengkap.',
	tool_apple_touch_icon_rules_item_1:
		'Kanvas default PNG 180×180. Logo dimuat proporsional (tidak diregang) dan dipusatkan.',
	tool_apple_touch_icon_rules_item_2: 'Latar buram (putih default). Transparansi sengaja diratakan.',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 hanya entri ZIP tambahan, tidak mengubah default.',
	tool_apple_touch_icon_rules_item_4: 'Tidak ada paket ICO dan tidak ada browserconfig.xml.',
	tool_apple_touch_icon_rules_title: 'Aturan yang berlaku',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'Ikon siap — unduh atau ganti logo.',
	tool_apple_touch_icon_status_working: 'Menggambar kotak…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'Sebelum menulis tag link, ekspor apple-touch-icon.png 180×180 untuk Tambah ke Layar Utama.',
	tool_apple_touch_icon_usecase_2: 'Untuk PWA, ambil 192 dan 512 dari ZIP ke web app manifest.',
	tool_apple_touch_icon_usecase_3:
		'Kalau browser masih minta favicon PNG 32 persegi, pakai ZIP — tanpa merakit paket ICO.',
	tool_apple_touch_icon_usecases_title: 'Cocok untuk',
};

export default id;
