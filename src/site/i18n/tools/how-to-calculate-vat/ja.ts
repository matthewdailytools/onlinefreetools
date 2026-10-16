/**
 * i18n tool shard (how-to-calculate-vat / ja).
 * 税抜に VAT/GST を加算、または税込から税額を逆算。税率 chip・逆算チェック付き。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：VAT / GST 計算ツール文案 */
const ja: SiteLangDict = {
	tool_vat_title: "VAT / GST 計算 — 税抜への加算と税込からの逆算",
	tool_vat_description:
		"税抜金額に VAT または GST を加算するか、税込価格から税額を逆算します。例：税抜 100、税率 20% → 税込 120、税額 20。税率は自分で入力。国別表なし。教育用の計算のみで、申告・コンプライアンス・投資の助言ではありません。",
	tool_vat_article:
		"税抜に VAT/GST を加える、または税込を税抜と税額に分解し、途中式と逆算チェックを表示します。",
	tool_vat_desc:
		"任意の税率で VAT/GST を加算または逆算。税抜・税込・税額と逆算チェックを表示。",

	tool_vat_safety_banner:
		"学習用です。ご自身の状況に当てはまる税率を入力してください。本ページは国別法定税率を調べず、申告やコンプライアンスの助言ではありません。",
	tool_vat_mode_label: "モード",
	tool_vat_mode_add: "税抜に税を加算",
	tool_vat_mode_extract: "税込から税を抽出",
	tool_vat_amount_label: "金額",
	tool_vat_amount_ph: "例 100",
	tool_vat_rate_label: "VAT/GST %",
	tool_vat_rate_ph: "例 20",
	tool_vat_hint:
		"「加算」（税抜→税込）か「抽出」（税込→税抜）を選び、0 以上の任意の税率を入力。chip は入力のショートカットのみ。請求書の適用税率は法令で確認してください。",
	tool_vat_chips_label: "よく使う税率ショートカット",
	tool_vat_chip_5: "5%",
	tool_vat_chip_10: "10%",
	tool_vat_chip_20: "20%",
	tool_vat_chip_21: "21%",
	tool_vat_calculate: "計算する",
	tool_vat_sample: "サンプルを読み込む",
	tool_vat_clear: "クリア",
	tool_vat_grossOut_label: "税込",
	tool_vat_netOut_label: "税抜",
	tool_vat_taxOut_label: "税額",
	tool_vat_row_check: "逆算チェック",
	tool_vat_steps_title: "計算手順",
	tool_vat_step_add_tpl:
		"加算：税込 = 税抜 × (1 + 税率/100) = {net} × (1 + {pct}/100) = {gross}。",
	tool_vat_step_extract_tpl:
		"抽出：税抜 = 税込 ÷ (1 + 税率/100) = {gross} ÷ (1 + {pct}/100) = {net}。",
	tool_vat_step_tax_tpl: "税額 = 税込 − 税抜 = {gross} − {net} = {tax}。",
	tool_vat_step_check_tpl:
		"確認：税抜 × (1 + 税率/100) = {net} × (1 + {pct}/100) = {gross}。",
	tool_vat_result_note:
		"税率はユーザー入力。複数税率・免税・申告ルールは未対応。教育用の計算のみ。税務・会計・投資の助言ではありません。",
	tool_vat_err_generic:
		"正の金額と 0 以上の税率を入力してください（例：金額 100、税率 20）。",

	tool_vat_how_title: "VAT / GST 計算ツールの使い方",
	tool_vat_how_body:
		"加算か抽出を選び、金額と税率を入力して計算。サンプル読み込みは加算 100@20%、抽出 120@20%、加算 50@10%、抽出 107.1@7% を順に切り替えます。",
	tool_vat_how_item_1: "「税抜に税を加算」または「税込から税を抽出」を選ぶ。",
	tool_vat_how_item_2: "金額と VAT/GST の百分率を入力（または税率 chip をタップ）。",
	tool_vat_how_item_3: "「計算する」で税込・税抜・税額と逆算チェック行を表示。",
	tool_vat_how_item_4: "「サンプルを読み込む」で一般的な加算/抽出例を順送り。",

	tool_vat_why_choose_title: "この VAT / GST 計算を使う理由",
	tool_vat_why_choose_item_1: "双方向：税抜への加算、または税込から税抜と税額を取り出す。",
	tool_vat_why_choose_item_2: "税抜 × (1+r) で税込に戻す逆算チェック。",
	tool_vat_why_choose_item_3: "入力値を公式に代入したステップ表示。",
	tool_vat_why_choose_item_4: "税率 chip（5 / 10 / 20 / 21%）は入力補助のみ。法定税率の助言ではない。",
	tool_vat_why_choose_item_5: "境界が明確：税率は自分で入力。国別マトリクスや申告支援なし。",

	tool_vat_formula_title: "VAT / GST の公式",
	tool_vat_formula_body:
		"r を小数税率（百分率 ÷ 100）とする。税抜に対する単一百分率のとき、VAT・GST・売上税で同じ恒等式が使える。",
	tool_vat_formula_item_1: "加算：税込 = 税抜 × (1 + r)。例：100 × 1.20 = 120（20%）。",
	tool_vat_formula_item_2: "抽出：税抜 = 税込 ÷ (1 + r)。例：120 ÷ 1.20 = 100（20%）。",
	tool_vat_formula_item_3: "税額 = 税込 − 税抜。同例 → 税 20。",
	tool_vat_formula_item_4: "税込に占める税の割合 = r ÷ (1 + r)。20% では税込の 1/6 が税額。",
	tool_vat_formula_item_5: "GST と VAT：加算/抽出の計算は同じ。名称と申告ルールは国により異なる。",

	tool_vat_example_title: "計算例",
	tool_vat_example:
		"サンプルは加算から：税抜 100、20% → 税込 120、税 20。次に同じ 120 を税抜 100 に逆算。続けて税抜 50、10% → 55。最後は 107.1、7% で ≈ 税抜 100。請求書の適用税率は必ず確認。",

	tool_vat_usecases_title: "VAT / GST 計算を使う場面",
	tool_vat_usecase_1: "宿題：税抜に税を足し (1+r) の手順を示す。",
	tool_vat_usecase_2: "レシート確認：税込合計から税抜と税額を復元。",
	tool_vat_usecase_3: "見積の素早い試算：表計算を開かず既知の税率を適用。",
	tool_vat_usecase_4: "GST と VAT の用語差を整理しつけ、計算は同じであることを確認。",

	tool_vat_faq_q1: "税抜に VAT を足すには？",
	tool_vat_faq_a1: "(1 + 税率/100) を掛ける。税抜 100、20% → 100 × 1.20 = 120 税込、税 20。",
	tool_vat_faq_q2: "税込から VAT を抜くには？",
	tool_vat_faq_a2: "(1 + 税率/100) で割る。税込 120、20% → 120 ÷ 1.20 = 100 税抜、税 20。",
	tool_vat_faq_q3: "国別 VAT 税率は載せていますか？",
	tool_vat_faq_a3: "いいえ。百分率は自分で入力。chip は入力ショートカットのみで法定税率表ではない。",
	tool_vat_faq_q4: "GST は VAT と計算が違いますか？",
	tool_vat_faq_a4: "税抜に対する単一百分率なら加算/抽出の式は同じ。名称と申告は法域により異なる。",
	tool_vat_faq_q5: "税率 0% は可能？",
	tool_vat_faq_a5: "はい。0% なら税抜 = 税込、税 = 0。ゼロ税率の教材例に便利。",
	tool_vat_faq_q6: "1 枚の請求書に複数 VAT 税率は？",
	tool_vat_faq_a6: "非対応。行ごとに計算するか、混合税率・免税に対応する会計ソフトを使う。",
	tool_vat_faq_q7: "税務申告の助言ですか？",
	tool_vat_faq_a7: "いいえ。教育用の計算のみ。会計・申告・投資の助言ではありません。",

	tool_vat_disclaimer:
		"VAT/GST の教育用計算のみ。金融・税務申告・会計・投資の助言ではありません。",
	tool_vat_references: "Investopedia と標準的な教科書公式（学習参考）。",
	tool_vat_ref_a_label: "Investopedia — VAT",
	tool_vat_ref_b_label: "Investopedia — 売上税",
};

export default ja;
