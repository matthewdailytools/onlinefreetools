/**
 * i18n tool shard (check-ssl-certificate-expiration / ja).
 * シーン: ホスト名 → crt.sh CT → 最新証明書の有効期限（ライブ握手ではない）。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'SSL証明書の有効期限を確認',
	tool_check_ssl_certificate_expiration_home_desc:
		'ホスト名の最新 CT 証明書の有効期限を確認（crt.sh — ライブ握手ではありません）。',
	tool_check_ssl_certificate_expiration_desc:
		'ホスト名の最新 CT 証明書の有効期限を確認（crt.sh — ライブ握手ではありません）。',
	tool_check_ssl_certificate_expiration_title: 'SSL証明書の有効期限を確認',
	tool_check_ssl_certificate_expiration_description:
		'ホスト名を入れて SSL 期限切れチェッカーを実行。crt.sh 経由で Certificate Transparency を照会し、最新マッチの notBefore / notAfter / 発行者 / 残り日数を表示します。ライブ TLS 握手ではありません。例: example.com。',
	tool_check_ssl_certificate_expiration_host_label: 'ホスト名',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: '確認',
	tool_check_ssl_certificate_expiration_sample: 'サンプル',
	tool_check_ssl_certificate_expiration_clear: 'クリア',
	tool_check_ssl_certificate_expiration_running: 'Certificate Transparency を照会中…',
	tool_check_ssl_certificate_expiration_host_error: 'ホスト名を入力してください（https URL の貼り付け可）。',
	tool_check_ssl_certificate_expiration_error_prefix: 'エラー: ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'crt.sh を照会できませんでした。レート制限や一時不通の可能性があります。',
	tool_check_ssl_certificate_expiration_privacy_note:
		'ホスト名は Worker が crt.sh を照会するために送信されます。製品データベースとしては保存しません。',
	tool_check_ssl_certificate_expiration_result_found_yes: 'CT 証明書あり',
	tool_check_ssl_certificate_expiration_result_found_no: 'このホストの CT 行なし',
	tool_check_ssl_certificate_expiration_result_host: 'ホスト名',
	tool_check_ssl_certificate_expiration_result_cn: 'コモンネーム',
	tool_check_ssl_certificate_expiration_result_issuer: '発行者',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter（期限）',
	tool_check_ssl_certificate_expiration_result_days_left: '残り日数',
	tool_check_ssl_certificate_expiration_result_expired_yes: '期限切れ（CT notAfter 基準）',
	tool_check_ssl_certificate_expiration_result_expired_no: '未期限切れ（CT notAfter 基準）',
	tool_check_ssl_certificate_expiration_result_source: 'ソース',
	tool_check_ssl_certificate_expiration_result_row_count: '返却 CT 行数',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'CT ログの遅延あり — ライブ TLS 握手のピア証明書ではありません。発行・更新より日付が遅れることがあります。',
	tool_check_ssl_certificate_expiration_result_none: '（なし）',
	tool_check_ssl_certificate_expiration_how_title: '使い方',
	tool_check_ssl_certificate_expiration_how_body:
		'このページが答えるのは一点: このホスト名の最新 CT マッチはいつ切れるか。ライブ SSL 握手監査ではありません。',
	tool_check_ssl_certificate_expiration_how_item_1: 'ホスト名を入力する（パス不要）。',
	tool_check_ssl_certificate_expiration_how_item_2: '「確認」を押す。Worker が crt.sh の JSON を照会する。',
	tool_check_ssl_certificate_expiration_how_item_3: '最新マッチの notBefore・notAfter・発行者・残り日数を読む。',
	tool_check_ssl_certificate_expiration_how_item_4: '日付は CT 公開値として扱う。タイミングが重要なら手元で握手確認。',
	tool_check_ssl_certificate_expiration_formula_title: 'CT 照会ルール（ライブ TLS ではない）',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers は fetch からピア証明書を読めません。代わりに crt.sh の公開 CT データを使います。',
	tool_check_ssl_certificate_expiration_formula_item_1: 'ホスト名で crt.sh を照会し JSON 一覧を解析。',
	tool_check_ssl_certificate_expiration_formula_item_2: 'notBefore 降順で並べ、最新行を主結果にする。',
	tool_check_ssl_certificate_expiration_formula_item_3:
		'notBefore / notAfter / 発行者 / daysLeft / 期限切れフラグを表示。',
	tool_check_ssl_certificate_expiration_formula_item_4: 'CT はライブ発行・更新より遅れることがある。',
	tool_check_ssl_certificate_expiration_formula_item_5: '私有・遮断ホストは拒否。完全なチェーン歩行や CA 発注ツールではない。',
	tool_check_ssl_certificate_expiration_example_title: '例',
	tool_check_ssl_certificate_expiration_example:
		'サンプル入力 example.com。Worker が crt.sh を照会し、最新マッチの notBefore・notAfter・発行者・daysLeft と CT 遅延の注意を表示します。',
	tool_check_ssl_certificate_expiration_usecases_title: 'こんなときに',
	tool_check_ssl_certificate_expiration_usecase_1: '更新前の SSL 期限切れチェッカー: 最新 CT リーフの残り日数を確認。',
	tool_check_ssl_certificate_expiration_usecase_2: 'CDN 切り替え後: CT に新しい notAfter が出たか確認。',
	tool_check_ssl_certificate_expiration_usecase_3: 'チェーン監査までは不要で、期限だけ素早く棚卸ししたいとき。',
	tool_check_ssl_certificate_expiration_faq_q1: 'ライブ SSL 握手ですか？',
	tool_check_ssl_certificate_expiration_faq_a1:
		'いいえ。Workers は fetch からピア証明書を読めません。Certificate Transparency（crt.sh）を照会します。',
	tool_check_ssl_certificate_expiration_faq_q2: '日付が遅れる理由は？',
	tool_check_ssl_certificate_expiration_faq_a2:
		'CT ログは発行・更新より遅れることがあります。タイミングが重要なら手元の握手ツールで確認してください。',
	tool_check_ssl_certificate_expiration_faq_q3: '証明書チェーン全体を見ますか？',
	tool_check_ssl_certificate_expiration_faq_a3:
		'焦点は最新マッチの有効期限です。チェーン専用チェッカーは二次的なニーズで、本ページの H1 ではありません。',
	tool_check_ssl_certificate_expiration_faq_q4: 'タイトルは「SSL証明書チェッカー」ですか？',
	tool_check_ssl_certificate_expiration_faq_a4:
		'いいえ。H1 は「SSL証明書の有効期限を確認」。より広いヘッド語は唯一のタイトルにしません。',
	tool_check_ssl_certificate_expiration_faq_q5: 'プライベート IP ホストは？',
	tool_check_ssl_certificate_expiration_faq_a5:
		'私有・遮断ホストは拒否します。私有空間の文脈は private CIDR ツールを参照してください。',
	tool_check_ssl_certificate_expiration_references: 'crt.sh; Certificate Transparency。',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default ja;
