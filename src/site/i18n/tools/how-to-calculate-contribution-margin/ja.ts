/**
 * i18n tool shard (how-to-calculate-contribution-margin / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_contribution_margin_title: "貢献利益の計算ツール — 単価と変動費",
	tool_contribution_margin_description: "単価と変動費から貢献利益と貢献利益率を計算します。例：単価 50、変動費 30 → 貢献利益 20（率 40%）。損益分岐の理解にも。学習用です。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり投資・税務・経営の助言ではありません。",
	tool_contribution_margin_calculate: "計算する",
	tool_contribution_margin_sample: "サンプル",
	tool_contribution_margin_clear: "クリア",
	tool_contribution_margin_price_label: "単価",
	tool_contribution_margin_price_ph: "例 50",
	tool_contribution_margin_vc_label: "単位変動費",
	tool_contribution_margin_vc_ph: "例 30",
	tool_contribution_margin_cmOut_label: "貢献利益",
	tool_contribution_margin_cmrOut_label: "貢献利益率",
	tool_contribution_margin_result_note: "貢献利益 = 単価 − 変動費。学習用です。",
	tool_contribution_margin_err_generic: "単価 > 0、変動費 ≥ 0。",
	tool_contribution_margin_how_title: "使い方",
	tool_contribution_margin_how_body: "単価と単位変動費を入力します。貢献利益は固定費と利益をまかなう残りです。",
	tool_contribution_margin_formula_title: "計算式",
	tool_contribution_margin_formula_body: "CM = P − VC；率 = CM / P。注意:",
	tool_contribution_margin_formula_item_1: "変動費は数量に連動。固定費は損益分岐へ。",
	tool_contribution_margin_formula_item_2: "単価 > 0。",
	tool_contribution_margin_formula_item_3: "多品種や税は扱いません。",
	tool_contribution_margin_example_title: "例",
	tool_contribution_margin_example: "例：単価50、変動費30 → CM=20、率40%。",
	tool_contribution_margin_usecases_title: "こんなときに",
	tool_contribution_margin_usecase_1: "宿題：単位貢献利益。",
	tool_contribution_margin_usecase_2: "変動費変化の影響確認。",
	tool_contribution_margin_usecase_3: "損益分岐ツールと併用。",
	tool_contribution_margin_faq_q1: "例の結果は？",
	tool_contribution_margin_faq_a1: "50と30 → 20（40%）。",
	tool_contribution_margin_faq_q2: "粗利との違いは？",
	tool_contribution_margin_faq_a2: "貢献利益は変動費ベース。",
	tool_contribution_margin_faq_q3: "数量は必要？",
	tool_contribution_margin_faq_a3: "単位CMには不要。",
	tool_contribution_margin_faq_q4: "助言ですか？",
	tool_contribution_margin_faq_a4: "学習用です。",
	tool_contribution_margin_article: "貢献利益の計算ツール — 単価と変動費",
	tool_contribution_margin_disclaimer: "貢献利益の学習用試算であり、投資・税務の助言ではありません。",
	tool_contribution_margin_references: "Investopedia と標準的な教科書公式。",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default ja;
