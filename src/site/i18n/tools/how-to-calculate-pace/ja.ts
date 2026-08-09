/**
 * i18n tool shard (how-to-calculate-pace / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_pace_title: "ペース計算ツール — 分/km と速度",
	tool_pace_description: "距離と時間からペース（分:秒/km）と速度（km/h）を出します。例：5km・25分 → 5:00/km、12km/h。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり公式の前提を確認してください。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり公式の前提を確認してください。",
	tool_pace_calculate: "計算する",
	tool_pace_sample: "サンプル",
	tool_pace_clear: "クリア",
	tool_pace_distKm_label: "距離 (km)",
	tool_pace_distKm_ph: "例 5",
	tool_pace_minutes_label: "時間（分）",
	tool_pace_minutes_ph: "例 25",
	tool_pace_paceOut_label: "ペース",
	tool_pace_speedOut_label: "速度 (km/h)",
	tool_pace_result_note: "ペースの公式でブラウザ内計算します。",
	tool_pace_err_generic: "入力を確認してください。",
	tool_pace_how_title: "使い方",
	tool_pace_how_body: "必要な項目を入れてペースを計算します。",
	tool_pace_formula_title: "計算式",
	tool_pace_formula_body: "ペースの式は Formula を参照。注意:",
	tool_pace_formula_item_1: "単位と符号を確認。",
	tool_pace_formula_item_2: "境界値は未定義の場合あり。",
	tool_pace_formula_item_3: "学習用です。",
	tool_pace_example_title: "例",
	tool_pace_example: "例：5km・25分 → 5:00/km、12km/h。",
	tool_pace_usecases_title: "こんなときに",
	tool_pace_usecase_1: "宿題。",
	tool_pace_usecase_2: "速算チェック。",
	tool_pace_usecase_3: "関連ツールと比較。",
	tool_pace_faq_q1: "例は？",
	tool_pace_faq_a1: "例：5km・25分 → 5:00/km、12km/h。",
	tool_pace_faq_q2: "式は？",
	tool_pace_faq_a2: "公式セクションへ。",
	tool_pace_faq_q3: "助言？",
	tool_pace_faq_a3: "学習用。",
	tool_pace_faq_q4: "関連？",
	tool_pace_faq_a4: "関連ツールへ。",
	tool_pace_article: "ペース",
	tool_pace_disclaimer: "ペースの学習用試算であり、専門的助言ではありません。",
	tool_pace_references: "標準的な教科書公式。",
	tool_pace_ref_a_label: "Wikipedia",
	tool_pace_ref_b_label: "Textbook formula",
};

export default ja;
