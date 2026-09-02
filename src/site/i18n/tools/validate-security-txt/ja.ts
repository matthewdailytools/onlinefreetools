/**
 * i18n tool shard (validate-security-txt / ja).
 * シーン: ドメイン入力 → security.txt 取得 → RFC 9116 フィールド確認。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_validate_security_txt_home_title: 'security.txtを検証',
	tool_validate_security_txt_home_desc:
		'サイトが Contact / Expires 付きの有効な security.txt を公開しているか確認します。',
	tool_validate_security_txt_desc:
		'サイトが Contact / Expires 付きの有効な security.txt を公開しているか確認します。',
	tool_validate_security_txt_title: 'security.txtを検証',
	tool_validate_security_txt_description:
		'ドメインや URL を入れて security.txt チェッカーを実行。/.well-known/security.txt（なければ /security.txt）を取得し、Contact と Expires を解析、必須項目の欠落を表示します。例: google.com。',
	tool_validate_security_txt_url_label: 'ドメインまたは URL',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ または example.com',
	tool_validate_security_txt_check: '検証',
	tool_validate_security_txt_sample: 'サンプル',
	tool_validate_security_txt_clear: 'クリア',
	tool_validate_security_txt_running: 'security.txt を取得中…',
	tool_validate_security_txt_url_error: 'ドメインまたは http(s) URL を入力してください。',
	tool_validate_security_txt_error_prefix: 'エラー: ',
	tool_validate_security_txt_fetch_failed:
		'security.txt を取得できませんでした。ホスト不通・ボット拒否の可能性があります。',
	tool_validate_security_txt_privacy_note:
		'URL とホスト名は Worker が security.txt を取得するために送信されます。製品データベースとしては保存しません。',
	tool_validate_security_txt_result_found_yes: 'security.txt あり',
	tool_validate_security_txt_result_found_no: 'security.txt なし',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: '必須欠落',
	tool_validate_security_txt_result_missing_none: '必須フィールドあり',
	tool_validate_security_txt_result_expired_yes: 'Expires 期限切れ',
	tool_validate_security_txt_result_expired_no: 'Expires 有効（または未解析）',
	tool_validate_security_txt_result_file_url: '取得した URL',
	tool_validate_security_txt_result_http_status: 'HTTP ステータス',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'security.txt プレビュー',
	tool_validate_security_txt_result_none: '（なし）',
	tool_validate_security_txt_how_title: '使い方',
	tool_validate_security_txt_how_body:
		'この検証ツールが答えるのは一点だけ: サイトは Contact 付きの discovery ファイルを公開し、Expires はまだ使えるか。',
	tool_validate_security_txt_how_item_1: 'ドメインまたは HTTPS URL を入力する。',
	tool_validate_security_txt_how_item_2:
		'「検証」を押す。Worker は /.well-known/security.txt を試し、次に /security.txt を試す。',
	tool_validate_security_txt_how_item_3:
		'Contact・Expires・Preferred-Languages・Canonical とプレビューを確認する。',
	tool_validate_security_txt_how_item_4: '自分の security.txt を公開する前に、欠落を直す。',
	tool_validate_security_txt_formula_title: 'RFC 9116 で見るルール',
	tool_validate_security_txt_formula_body:
		'RFC 9116 と securitytxt.org の一般的な運用に合わせています。',
	tool_validate_security_txt_formula_item_1:
		'取得順: まず /.well-known/security.txt、次に /security.txt。',
	tool_validate_security_txt_formula_item_2: 'Contact は必須。値を列挙し、無い場合は警告。',
	tool_validate_security_txt_formula_item_3: 'Expires は強く推奨。欠落や過去日はギャップとして表示。',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages / Canonical があれば表示（必須ではない）。',
	tool_validate_security_txt_formula_item_5:
		'取得と解析のみ。脆弱性受付窓口でもペネトレーションテストでもありません。',
	tool_validate_security_txt_example_title: '例',
	tool_validate_security_txt_example:
		'サンプル入力 https://www.google.com/。Worker が well-known とルートを試し、found・Contact・Expires・missingRequired・expired・プレビューを表示します。',
	tool_validate_security_txt_usecases_title: 'こんなときに',
	tool_validate_security_txt_usecase_1:
		'公開前の security.txt チェッカー: well-known が届き Contact があるか確認。',
	tool_validate_security_txt_usecase_2:
		'Expires 編集後のバリデータ確認: 日付が解釈でき、期限切れでないか。',
	tool_validate_security_txt_usecase_3:
		'ベンダーに連絡する前に、相手ドメインが discovery ファイルを出しているか確認。',
	tool_validate_security_txt_faq_q1: 'security.txt はどこに置く？',
	tool_validate_security_txt_faq_a1:
		'推奨は /.well-known/security.txt。同じホストの /security.txt はフォールバックです。',
	tool_validate_security_txt_faq_q2: '必須フィールドは？',
	tool_validate_security_txt_faq_a2:
		'最低でも Contact。RFC 9116 の実務では Expires も強く期待され、欠落や期限切れを指摘します。',
	tool_validate_security_txt_faq_q3: 'H1 は RFC 9116 ですか？',
	tool_validate_security_txt_faq_a3:
		'いいえ。H1 は「security.txtを検証」。RFC はルールと参考文献にあります。',
	tool_validate_security_txt_faq_q4: '脆弱性報告は保存しますか？',
	tool_validate_security_txt_faq_a4:
		'いいえ。公開ファイルの取得と解析のみで、開示メールボックスではありません。',
	tool_validate_security_txt_faq_q5: 'URL は保存されますか？',
	tool_validate_security_txt_faq_a5:
		'取得のため URL/ホストは Worker に届きますが、長期の製品 DB としては残しません。エッジツールであり「アップロードなし」ではありません。',
	tool_validate_security_txt_references: 'RFC 9116; securitytxt.org。',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default ja;
