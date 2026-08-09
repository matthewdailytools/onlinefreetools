/**
 * i18n tool shard (how-to-calculate-age / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_age_title: "年齢計算ツール — 生年月日から満年齢",
	tool_age_description: "生年月日と基準日（UTC YYYY-MM-DD）から暦年齢を計算します。例：2000-01-01 生まれ、2026-08-09 時点 → 26歳7か月8日。ブラウザ内計算です。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり公式の前提を確認してください。",
	tool_age_calculate: "計算する",
	tool_age_sample: "サンプル",
	tool_age_clear: "クリア",
	tool_age_birth_label: "生年月日",
	tool_age_asof_label: "基準日",
	tool_age_yearsOut_label: "年",
	tool_age_monthsOut_label: "月",
	tool_age_daysOut_label: "日",
	tool_age_totalDaysOut_label: "総日数",
	tool_age_result_note: "UTC暦日で年/月/日。",
	tool_age_err_generic: "有効なYYYY-MM-DD。基準日≥生年月日。",
	tool_age_how_title: "使い方",
	tool_age_how_body: "生年月日と基準日を入力。",
	tool_age_formula_title: "計算式",
	tool_age_formula_body: "UTC解釈し借りて減算。注意:",
	tool_age_formula_item_1: "単位と符号を確認。",
	tool_age_formula_item_2: "境界値は未定義の場合あり。",
	tool_age_formula_item_3: "学習用です。",
	tool_age_example_title: "例",
	tool_age_example: "例：2000-01-01 → 2026-08-09 = 26歳7か月8日。",
	tool_age_usecases_title: "こんなときに",
	tool_age_usecase_1: "宿題。",
	tool_age_usecase_2: "速算チェック。",
	tool_age_usecase_3: "関連ツールと比較。",
	tool_age_faq_q1: "例は？",
	tool_age_faq_a1: "例：2000-01-01 → 2026-08-09 = 26歳7か月8日。",
	tool_age_faq_q2: "式は？",
	tool_age_faq_a2: "公式セクションへ。",
	tool_age_faq_q3: "助言？",
	tool_age_faq_a3: "学習用。",
	tool_age_faq_q4: "関連？",
	tool_age_faq_a4: "関連ツールへ。",
	tool_age_article: "暦年齢",
	tool_age_disclaimer: "年齢の学習用試算であり、専門的助言ではありません。",
	tool_age_references: "標準的な教科書公式。",
	tool_age_ref_a_label: "Wikipedia — Ageing",
	tool_age_ref_b_label: "Wikipedia — Calendar date",
};

export default ja;
