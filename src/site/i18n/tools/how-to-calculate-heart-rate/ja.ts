/**
 * i18n tool shard (how-to-calculate-heart-rate / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_heart_rate_title: "心拍ゾーン計算ツール",
	tool_heart_rate_description: "最大心拍（220−年齢）とゾーン（最大の%）を見積もります。例：30歳 → 最大190。学習用であり医療助言ではありません。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり公式の前提を確認してください。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり公式の前提を確認してください。",
	tool_heart_rate_calculate: "計算する",
	tool_heart_rate_sample: "サンプル",
	tool_heart_rate_clear: "クリア",
	tool_heart_rate_age_label: "年齢（歳）",
	tool_heart_rate_age_ph: "例 30",
	tool_heart_rate_maxOut_label: "推定最大心拍",
	tool_heart_rate_z1Out_label: "ゾーン1（50–60%）",
	tool_heart_rate_z2Out_label: "ゾーン2（60–70%）",
	tool_heart_rate_z3Out_label: "ゾーン3（70–85%）",
	tool_heart_rate_result_note: "心拍ゾーンの公式でブラウザ内計算します。",
	tool_heart_rate_err_generic: "入力を確認してください。",
	tool_heart_rate_how_title: "使い方",
	tool_heart_rate_how_body: "必要な項目を入れて心拍ゾーンを計算します。",
	tool_heart_rate_formula_title: "計算式",
	tool_heart_rate_formula_body: "心拍ゾーンの式は Formula を参照。注意:",
	tool_heart_rate_formula_item_1: "単位と符号を確認。",
	tool_heart_rate_formula_item_2: "境界値は未定義の場合あり。",
	tool_heart_rate_formula_item_3: "学習用です。",
	tool_heart_rate_example_title: "例",
	tool_heart_rate_example: "例：30歳 → 最大190。",
	tool_heart_rate_usecases_title: "こんなときに",
	tool_heart_rate_usecase_1: "宿題。",
	tool_heart_rate_usecase_2: "速算チェック。",
	tool_heart_rate_usecase_3: "関連ツールと比較。",
	tool_heart_rate_faq_q1: "例は？",
	tool_heart_rate_faq_a1: "例：30歳 → 最大190。",
	tool_heart_rate_faq_q2: "式は？",
	tool_heart_rate_faq_a2: "公式セクションへ。",
	tool_heart_rate_faq_q3: "助言？",
	tool_heart_rate_faq_a3: "学習用。",
	tool_heart_rate_faq_q4: "関連？",
	tool_heart_rate_faq_a4: "関連ツールへ。",
	tool_heart_rate_article: "心拍ゾーン",
	tool_heart_rate_disclaimer: "心拍ゾーンの学習用試算であり、医療診断・治療の助言ではありません。専門家にご相談ください。",
	tool_heart_rate_references: "CDC/ACSM などの公開資料。",
	tool_heart_rate_ref_a_label: "Wikipedia",
	tool_heart_rate_ref_b_label: "Textbook formula",
};

export default ja;
