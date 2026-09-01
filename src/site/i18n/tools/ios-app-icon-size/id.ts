/**
 * Pecahan i18n (ios-app-icon-size / id).
 * H1 lokal: «ukuran ikon aplikasi iOS»; tugas bawaan PNG 1024 buram untuk App Store.
 */
import type { SiteLangDict } from '../../../types';

/** Teks Indonesia: ekspor 1024, ZIP skala, tetap di perangkat. */
const id: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'Ubah logo menjadi PNG 1024×1024 buram yang diminta App Store. Jika perlu, ZIP memuat 180 iPhone, 167 iPad, dan 512 Play. Berkas tetap di perangkat dan tidak diunggah ke server.',
	tool_ios_app_icon_size_bg_label: 'Latar buram',
	tool_ios_app_icon_size_choose_image: 'Pilih logo',
	tool_ios_app_icon_size_clear: 'Hapus',
	tool_ios_app_icon_size_desc:
		'Ekspor ukuran ikon aplikasi iOS 1024×1024 buram; tetap di perangkat, tidak diunggah ke server.',
	tool_ios_app_icon_size_description:
		'Ukuran ikon aplikasi iOS: pilih logo, letakkan di kotak buram 1024×1024 untuk App Store Connect, lalu unduh PNG. Contoh: logo sampel sudah pas 1024×1024 saat halaman dibuka. Chip opsional mengekspor 180, 167, dan Play 512 dalam ZIP. Berkas tetap di perangkat dan tidak diunggah ke server.',
	tool_ios_app_icon_size_download: 'Unduh PNG',
	tool_ios_app_icon_size_download_zip: 'Unduh ZIP ukuran',
	tool_ios_app_icon_size_drop_hint: 'Jatuhkan satu logo persegi. Dipusatkan di latar buram tanpa mask sudut bulat.',
	tool_ios_app_icon_size_empty: 'Pilih logo dulu.',
	tool_ios_app_icon_size_err_decode: 'Gambar tidak terbaca. Coba PNG atau JPEG.',
	tool_ios_app_icon_size_err_fflate: 'Mesin ZIP gagal dimuat. Periksa jaringan lalu coba lagi.',
	tool_ios_app_icon_size_example:
		'Muat contoh menggambar tanda, memasukkannya ke kotak 1024×1024 buram, dan mengaktifkan Unduh PNG. ZIP menambah 180, 167, Play 512, dan slot lebih kecil.',
	tool_ios_app_icon_size_example_title: 'Contoh',
	tool_ios_app_icon_size_faq_a1:
		'Tidak. Logo didekode di tab ini. Tidak ada yang diunggah ke server kami.',
	tool_ios_app_icon_size_faq_a2:
		'App Store Connect masih meminta PNG 1024×1024 tanpa transparansi. Itulah ukuran ikon aplikasi iOS bawaan halaman ini.',
	tool_ios_app_icon_size_faq_a3:
		'Sistem yang memasang squircle. Ekspor persegi utuh; jangan membulatkan sudut sendiri.',
	tool_ios_app_icon_size_faq_a4:
		'180 adalah iPhone 60 pt @3x. 167 adalah iPad Pro 83,5 pt @2x. Chip, bukan H1 kedua.',
	tool_ios_app_icon_size_faq_a5:
		'Ikon resolusi tinggi Play 512 ada di ZIP. Tanpa XML Adaptive dan tanpa URL pack terpisah.',
	tool_ios_app_icon_size_faq_q1: 'Apakah logo saya diunggah?',
	tool_ios_app_icon_size_faq_q2: 'Mengapa 1024×1024?',
	tool_ios_app_icon_size_faq_q3: 'Haruskah saya membulatkan sudut?',
	tool_ios_app_icon_size_faq_q4: 'Untuk apa 180 dan 167?',
	tool_ios_app_icon_size_faq_q5: 'Di mana ikon Google Play?',
	tool_ios_app_icon_size_how_body:
		'Pilih logo listing, ekspor PNG 1024×1024 buram, lalu jika perlu zip skala iPhone, iPad, dan Play.',
	tool_ios_app_icon_size_how_item_1: 'Pilih logo untuk ukuran ikon aplikasi iOS — tugasnya PNG 1024 toko.',
	tool_ios_app_icon_size_how_item_2: 'Biarkan 1024 kecuali Anda butuh chip 180 / 167 / Play 512.',
	tool_ios_app_icon_size_how_item_3: 'Jaga latar buram agar Connect tidak menolak transparansi.',
	tool_ios_app_icon_size_how_item_4: 'Unduh PNG atau ZIP. Contoh sudah jalan saat halaman dibuka.',
	tool_ios_app_icon_size_how_title: 'Cara kerja',
	tool_ios_app_icon_size_load_sample: 'Muat contoh',
	tool_ios_app_icon_size_out_size_label: 'Ukuran keluaran',
	tool_ios_app_icon_size_rules_body:
		'Ikon toko butuh persegi, isian buram, dan terpisah dari halaman apple-touch-icon situs.',
	tool_ios_app_icon_size_rules_item_1:
		'Kanvas bawaan PNG 1024×1024. Logo di-contain dan dipusatkan, tidak diregang.',
	tool_ios_app_icon_size_rules_item_2:
		'Latar buram (putih bawaan). Saluran alfa diratakan sengaja.',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 masuk ZIP dan tidak mengubah H1.',
	tool_ios_app_icon_size_rules_item_4:
		'Ini bukan proyek Assets.xcassets dan bukan paket Adaptive Icon.',
	tool_ios_app_icon_size_rules_title: 'Aturan yang perlu diketahui',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'Ikon siap — unduh atau ganti logo.',
	tool_ios_app_icon_size_status_working: 'Menggambar kotak…',
	tool_ios_app_icon_size_title: 'ukuran ikon aplikasi iOS',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect: ekspor ikon 1024×1024 sebelum lampirkan tangkapan layar.',
	tool_ios_app_icon_size_usecase_2:
		'Layar beranda iPhone: ambil 180 dari ZIP untuk pratinjau 60 pt @3x.',
	tool_ios_app_icon_size_usecase_3:
		'Listing Play: pakai chip 512 tanpa membuka URL pack lain.',
	tool_ios_app_icon_size_usecases_title: 'Cocok untuk',
};

export default id;
