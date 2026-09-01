/**
 * i18n tool shard (file-metadata-analyzer / ja).
 */
import type { SiteLangDict } from '../../../types';

/** 日语文案键表。 */
const ja: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: '分析中…',
	tool_file_metadata_analyzer_article:
		'ローカルファイルをドロップまたは選択し、名前・サイズ・MIME・更新日時を表示。画像は幅×高さ、音声/動画はデコード可能なら長さ。magic-byte ヒント付き。サーバーにアップロードしない；端末内で処理。',
	tool_file_metadata_analyzer_choose_file: 'ファイルを選ぶ',
	tool_file_metadata_analyzer_clear: 'クリア',
	tool_file_metadata_analyzer_decode_fail: '追加メディア項目をデコードできませんでした — 基本情報は表示されます。',
	tool_file_metadata_analyzer_desc:
		'ローカルファイルのメタデータを確認 — サイズ・種類・解像度・長さ。端末内、サーバーにアップロードしない。',
	tool_file_metadata_analyzer_description:
		'ファイルメタデータ分析：ファイルを選ぶと名前・バイトサイズ・MIME・更新日時を表示。画像→解像度、音声/動画→長さ。magic-byte：PNG/JPEG/GIF/WebP/PDF/ZIP/MP4。例：16×16 PNG を初回表示。詳細 EXIF は関連 EXIF ツールへ。端末内、サーバーにアップロードしない。',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} px',
	tool_file_metadata_analyzer_drop_hint: 'ここにドロップも可。このタブ内で分析。',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: '先にファイルを選ぶかドロップしてください。',
	tool_file_metadata_analyzer_example:
		'サンプル読込で 16×16 PNG sample-icon.png をメモリ生成。表に ~100+ B、image/png、16×16 px、PNG ヒント — アップロードなし。',
	tool_file_metadata_analyzer_example_title: '例',
	tool_file_metadata_analyzer_faq_a1: 'いいえ。File API でこのタブ内読み取り。サーバーへ送信しません。',
	tool_file_metadata_analyzer_faq_a2:
		'本ページはコンテナ基本＋解像度/長さ（可能時）。EXIF ツールはカメラ EXIF の閲覧/削除用。',
	tool_file_metadata_analyzer_faq_a3: 'file.type が空のことがあります。サイズと名前は表示；magic-byte が型を示唆。',
	tool_file_metadata_analyzer_faq_a4: 'コーデックにより失敗。File API 項目は残り、注記行で説明。',
	tool_file_metadata_analyzer_faq_a5: '先頭 ~12 バイトを照合（PNG 等）。ヒントであり完全 DB ではありません。',
	tool_file_metadata_analyzer_faq_q1: 'ファイルはアップロードされますか？',
	tool_file_metadata_analyzer_faq_q2: 'EXIF ツールとの違いは？',
	tool_file_metadata_analyzer_faq_q3: 'MIME が空なのはなぜ？',
	tool_file_metadata_analyzer_faq_q4: '解像度や長さがない理由は？',
	tool_file_metadata_analyzer_faq_q5: 'magic-byte ヒントとは？',
	tool_file_metadata_analyzer_field_decode_note: 'デコード注記',
	tool_file_metadata_analyzer_field_dimensions: '解像度',
	tool_file_metadata_analyzer_field_duration: '長さ',
	tool_file_metadata_analyzer_field_magic: 'magic-byte ヒント',
	tool_file_metadata_analyzer_field_modified: '最終更新',
	tool_file_metadata_analyzer_field_name: 'ファイル名',
	tool_file_metadata_analyzer_field_size: 'サイズ（バイト）',
	tool_file_metadata_analyzer_field_size_human: 'サイズ（読みやすい）',
	tool_file_metadata_analyzer_field_type: 'MIME / 種類',
	tool_file_metadata_analyzer_how_body: 'ローカルファイルを1つ選ぶ。File 基本項目の後、画像/メディアを深掘り（可能時）。',
	tool_file_metadata_analyzer_how_item_1: 'ドロップまたはファイルを選ぶ。',
	tool_file_metadata_analyzer_how_item_2: '表で名前・バイト・読みやすいサイズ・MIME・更新を確認。',
	tool_file_metadata_analyzer_how_item_3: '画像：幅×高さ；音声/動画：長さ。',
	tool_file_metadata_analyzer_how_item_4: 'サンプル読込またはクリアでリセット。',
	tool_file_metadata_analyzer_how_title: '使い方',
	tool_file_metadata_analyzer_load_sample: 'サンプル読込',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'メタデータ結果',
	tool_file_metadata_analyzer_rules_body: '項目の出所と限界。',
	tool_file_metadata_analyzer_rules_item_1: '名前・サイズ・type・lastModified は File オブジェクト由来。',
	tool_file_metadata_analyzer_rules_item_2: '画像解像度は createImageBitmap または Image — 同一タブ。',
	tool_file_metadata_analyzer_rules_item_3: 'メディア長さは preload=metadata；希少コーデックは失敗可。',
	tool_file_metadata_analyzer_rules_item_4: 'magic-byte は浅いヒント — hash や詳細 EXIF の代替ではない。',
	tool_file_metadata_analyzer_rules_title: '期待できるルール',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: '分析完了。',
	tool_file_metadata_analyzer_title: 'ファイルメタデータ分析',
	tool_file_metadata_analyzer_usecase_1: 'CMS 投稿前に 1920×1080 か確認。',
	tool_file_metadata_analyzer_usecase_2: 'デスクトップ不要でボイスメモの長さを確認。',
	tool_file_metadata_analyzer_usecase_3: '拡張子が怪しいとき MIME と magic-byte を照合。',
	tool_file_metadata_analyzer_usecases_title: '向いている用途',
	tool_file_metadata_analyzer_waiting: 'ファイルを選ぶかサンプルを読み込んでください。',
};

export default ja;
