/**
 * i18n tool shard (how-to-calculate-p-value / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_p_value_title: "p値計算ツール — p値の求め方",
	tool_p_value_description: "z スコアから erfc 近似で両側正規の p 値を求めます。例：z = 1.96 → 両側 p ≈ 0.05。標準正規と両側の前提を明示。ブラウザ内で、宿題やざっくり確認向けです。 Educational illustration of the two-tailed normal tail probability under stated assumptions.",
	tool_p_value_calculate: "計算する",
	tool_p_value_sample: "サンプル",
	tool_p_value_clear: "クリア",
	tool_p_value_z_label: "z スコア",
	tool_p_value_z_ph: "例: 1.96",
	tool_p_value_pOut_label: "両側 p 値",
	tool_p_value_result_note: "標準正規・両側の近似です。学習用であり、完全な仮説検定ソフトではありません。",
	tool_p_value_err_generic: "有限の z スコアを入力してください。",
	tool_p_value_how_title: "使い方",
	tool_p_value_how_body: "標準正規の検定で得た z を入れます。erfc 近似で両側 p 値を出し、前提（標準正規・両側）を明示します。ブラウザ内で、宿題やざっくり確認向けです。",
	tool_p_value_formula_title: "式と前提",
	tool_p_value_formula_body: "両側 p ≈ erfc(|z| / √2)（標準正規）。注意点：",
	tool_p_value_formula_item_1: "連続の標準正規 z を仮定。t・χ²・離散の正確検定ではありません。",
	tool_p_value_formula_item_2: "このページは両側のみ（±|z| の外側）。",
	tool_p_value_formula_item_3: "数値 erfc 近似で、学習用であり認定ソフトではありません。",
	tool_p_value_formula_item_4: "p が小さくても主張の自動証明にはなりません。",
	tool_p_value_example_title: "例",
	tool_p_value_example: "例：z = 1.96 → 両側 p ≈ 0.05（本近似では約 0.049996）。",
	tool_p_value_usecases_title: "こんなときに",
	tool_p_value_usecase_1: "既知の z から両側 p の近似を求める宿題。",
	tool_p_value_usecase_2: "平均と標準偏差から z を出したあとの素早い確認。",
	tool_p_value_usecase_3: "よく使う 1.96 ↔ 0.05 の目安を数値で確かめる。",
	tool_p_value_faq_q1: "片側ですか、両側ですか？",
	tool_p_value_faq_a1: "両側です。±|z| の外側両側を数えます。",
	tool_p_value_faq_q2: "どの分布を仮定していますか？",
	tool_p_value_faq_a2: "連続の標準正規です。t や χ² の計算機ではありません。",
	tool_p_value_faq_q3: "なぜ z=1.96 が約 0.05 ですか？",
	tool_p_value_faq_a3: "両側 5% 検定のよく使う臨界値で、erfc 近似も約 0.05 になります。",
	tool_p_value_faq_q4: "p が小さいと対立仮説が証明されますか？",
	tool_p_value_faq_a4: "いいえ。仮定の下での裾確率であり、自動証明ではありません。",
	tool_p_value_disclaimer: "結果は標準正規・両側モデルの学習用近似であり、統計ソフトや専門分析の代わりにはなりません。",
	tool_p_value_references: "Wikipedia の p値・正規分布；正規裾に対する相補誤差関数。",
	tool_p_value_ref_pvalue_label: "Wikipedia — p値",
	tool_p_value_ref_normal_label: "Wikipedia — 正規分布",
	tool_p_value_article: "z スコアから erfc 近似で両側正規 p 値を求め、標準正規と両側の前提を明示します。",
};

export default ja;
