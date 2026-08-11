/**
 * i18n tool shard (utm-builder / ja).
 * 日本語 — ローカル検索向けに独立した書き直し。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_utm_home_title: 'UTM ビルダー',
	tool_utm_home_desc:
		'どの施策が本当に流入を生んでいるか測る——utm_source・medium・campaign・term・content でクリーンな追跡リンクをブラウザで作成。',
	tool_utm_title: 'UTM ビルダー — キャンペーン追跡リンクを作成',
	tool_utm_description:
		'UTM が雑だと施策流入が解析で見えません。ブラウザで source・medium・campaign・term・content から追跡 URL を作成します。端末内で完結。例：newsletter + email + summer_sale。',
	tool_utm_url_label: 'ランディングページ URL',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'ランディングページ URL を入力してください。',
	tool_utm_url_invalid: 'URL が正しくありません。アドレスを確認してやり直してください。',
	tool_utm_url_protocol: 'プロトコルが見つからないため、https:// を自動追加しました。',
	tool_utm_source_label: 'キャンペーンソース（utm_source）',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'リンクが表示された場所：newsletter、facebook、google。',
	tool_utm_medium_label: 'キャンペーンメディア（utm_medium）',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'リンクの配信方法：email、cpc、social、referral。',
	tool_utm_campaign_label: 'キャンペーン名（utm_campaign）',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'リンクが属するプロモーションや商品。',
	tool_utm_campaign_required: 'キャンペーン名（utm_campaign）は必須です。',
	tool_utm_term_label: 'キャンペーン語句（utm_term）',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: '任意。検索広告のキーワードを識別します。',
	tool_utm_content_label: 'キャンペーンコンテンツ（utm_content）',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: '任意。同じ URL に向けた広告やリンクを区別します。',
	tool_utm_generate: '生成',
	tool_utm_sample: 'サンプル',
	tool_utm_clear: 'クリア',
	tool_utm_copy: 'コピー',
	tool_utm_copied: 'コピー済み',
	tool_utm_error_prefix: 'エラー：',
	tool_utm_output_label: '生成されたリンク',
	tool_utm_table_title: 'パラメータの内訳',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: '値',
	tool_utm_param_status: '状態',
	tool_utm_param_required: '必須',
	tool_utm_param_optional: '任意',
	tool_utm_param_empty: '空',
	tool_utm_encoding_note:
		'値は encodeURIComponent でエンコードされます。スペースは %20、非 ASCII 文字もパーセントエンコードされます。',
	tool_utm_case_note:
		'Google Analytics はパラメータ値を大文字小文字で区別します。同じチャネルがまとまるよう、一貫して小文字を使いましょう。',
	tool_utm_how_title: '仕組み',
	tool_utm_how_body:
		'ビルダーはベース URL を解析し、既存のクエリパラメータを保持してから & 区切りで UTM パラメータを追加します。各値はパーセントエンコードされ、スペース・日本語・特殊記号もリンク内で正しく残ります。URL にハッシュがある場合は、すべてのパラメータの後ろに移動します。5 つの UTM パラメータは、Google Analytics がアクセスをソース・メディア・キャンペーンに帰属させるための情報です。',
	tool_utm_rules_title: 'ビルダーが使うルール',
	tool_utm_rules_body: '以下は Google Analytics のドキュメントにある UTM パラメータの定義とエンコード規則です。',
	tool_utm_rules_item_1: 'utm_source はリンクが表示された場所、utm_medium は配信方法を示します。帰属にはどちらも必須です。',
	tool_utm_rules_item_2: 'utm_campaign はプロモーション名で、ここでは必須です。utm_term と utm_content は任意：term は検索広告のキーワード、content は 2 つのリンクを区別するために使います。',
	tool_utm_rules_item_3: 'ベース URL に既存のクエリパラメータがある場合は保持され、UTM は & で追加されます。同名の既存パラメータは新しい値で置き換わります。',
	tool_utm_rules_item_4: 'パラメータ値はパーセントエンコードされ、スペースは %20、非 ASCII 文字もエンコードされます。フラグメント（#アンカー）は常にクエリ文字列の後ろに置かれます。',
	tool_utm_rules_item_5: '値は一貫して小文字を使いましょう。Google Analytics では UTM 値の大文字小文字が区別されるため、facebook と Facebook は別のソースになります。',
	tool_utm_example_title: '例',
	tool_utm_example:
		'サンプル入力は https://example.com/page で、utm_source=newsletter・utm_medium=email・utm_campaign=summer_sale です。生成されるリンクは https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale です。',
	tool_utm_usecases_title: '使える場面',
	tool_utm_usecase_1:
		'SNS キャンペーン：同じ utm_campaign でプラットフォームごとにリンクを作れば、GA4 がプロモーション全体を 1 行で報告します。',
	tool_utm_usecase_2:
		'メール配信：utm_source=newsletter・utm_medium=email を使い、同じページに向けた 2 つのバナーを別の content 値で比較できます。',
	tool_utm_usecase_3:
		'QR コードや紙媒体のリンク：完全な UTM URL は長いですが、生成後に短縮してもパラメータは維持されます。',
	tool_utm_faq_q1: 'utm_source と utm_medium の違いは？',
	tool_utm_faq_a1:
		'utm_source はリンクが表示された場所（newsletter、facebook、google）、utm_medium は配信方法（email、cpc、social、referral）を示します。GA4 はこれらを utm_campaign と組み合わせてトラフィックソースを名付けます。',
	tool_utm_faq_q2: 'URL に既存のクエリパラメータがあります。消えますか？',
	tool_utm_faq_a2:
		'消えません。既存パラメータは保持され、UTM が & で追加されます。同名のパラメータが既にある場合は新しい値で置き換わります。',
	tool_utm_faq_q3: '値にスペースや日本語・特殊記号がある場合は？',
	tool_utm_faq_a3:
		'各値はパーセントエンコードされ、スペースは %20、非 ASCII 文字もエンコードされます。生成されたリンクはメールクライアントやメッセンジャー、ブラウザでそのまま使えます。',
	tool_utm_faq_q4: 'UTM パラメータ値は大文字小文字を区別しますか？',
	tool_utm_faq_a4:
		'はい。Google Analytics は utm_source=Facebook と utm_source=facebook を別々のソースとして扱います。同じチャネルがまとまるよう、一貫して小文字を使いましょう。',
	tool_utm_faq_q5: 'utm_term と utm_content はいつ使うべきですか？',
	tool_utm_faq_a5:
		'utm_term は検索広告のキーワードを識別し、Google Ads で役立ちます。utm_content は同じ URL に向けた 2 つのリンクや広告、たとえばヘッダーのバナーとフッターのリンクを区別します。',
	tool_utm_faq_q6: 'URL はどこかに送信されますか？',
	tool_utm_faq_a6: 'いいえ。ビルダーはブラウザ内で完結し、何もアップロードしません。',
	tool_utm_references: 'Google Analytics — カスタムキャンペーン（UTM）；Google Search Central — URL パラメータ。',
	tool_utm_ref_ga_label: 'Google Analytics — カスタムキャンペーン（UTM）',
	tool_utm_ref_searchcentral_label: 'Google Search Central — URL パラメータ',
};

export default ja;
