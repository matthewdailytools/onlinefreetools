/**
 * i18n tool shard (how-to-calculate-irr / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_irr_title: "IRR（内部収益率）計算ツール",
	tool_irr_description: "単純なキャッシュフロー列の IRR をニュートン法で近似します。例：−1000, 300, 420, 680 → おおよその IRR%。学習用であり投資助言ではありません。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり投資・税務・経営の助言ではありません。",
	tool_irr_calculate: "計算する",
	tool_irr_sample: "サンプル",
	tool_irr_clear: "クリア",
	tool_irr_cf_label: "キャッシュフロー（カンマ/改行；CF0から）",
	tool_irr_cf_ph: "例 -1000, 300, 420, 680",
	tool_irr_irrOut_label: "近似 IRR",
	tool_irr_result_note: "年次ニュートン IRR。収束しない場合があります。学習用。",
	tool_irr_err_generic: "有限なキャッシュフローを2つ以上。",
	tool_irr_how_title: "使い方",
	tool_irr_how_body: "CF0…CFn を貼り付けます。NPV(r)=0 となる r をニュートン法で探します。",
	tool_irr_formula_title: "計算式",
	tool_irr_formula_body: "Σ CFt/(1+r)^t = 0 となる r。注意:",
	tool_irr_formula_item_1: "CF0 は通常マイナスの初期流出。",
	tool_irr_formula_item_2: "符号変化が多いと IRR が複数あり得ます。",
	tool_irr_formula_item_3: "MIRR は扱いません。",
	tool_irr_example_title: "例",
	tool_irr_example: "例：−1000, 300, 420, 680 → IRR ≈ 18.9%。",
	tool_irr_usecases_title: "こんなときに",
	tool_irr_usecase_1: "短いプロジェクトIRRの宿題。",
	tool_irr_usecase_2: "ハードルレートのNPVと比較。",
	tool_irr_usecase_3: "相談前のざっくり試算。",
	tool_irr_faq_q1: "例のIRRは？",
	tool_irr_faq_a1: "約18.9%。",
	tool_irr_faq_q2: "なぜニュートン？",
	tool_irr_faq_a2: "NPVの根を速く探すため。",
	tool_irr_faq_q3: "複数IRR？",
	tool_irr_faq_a3: "あり得ます。",
	tool_irr_faq_q4: "助言？",
	tool_irr_faq_a4: "学習用です。",
	tool_irr_article: "IRRニュートン",
	tool_irr_disclaimer: "IRRの学習用試算であり、投資・税務の助言ではありません。",
	tool_irr_references: "Investopedia と標準的な教科書公式。",
	tool_irr_ref_a_label: "Investopedia — IRR",
	tool_irr_ref_b_label: "Investopedia — NPV",
};

export default ja;
