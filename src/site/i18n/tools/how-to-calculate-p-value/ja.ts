/**
 * i18n ツール分片（how-to-calculate-p-value / ja）。
 * zスコアから erfc 近似で標準正規の片側／両側尾確率を求める。臨界 z ショートカットと手順表示付き。
 * 学習用。t検定・χ²・正確検定や研究デザインの代用ではない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：zスコアから正規尾確率（p値）を求めるツール文案 */
const ja: SiteLangDict = {
	tool_p_value_title: "p値計算ツール — zスコアから正規分布の尾確率",
	tool_p_value_description:
		"zスコアを入力し、相補誤差関数（erfc）の近似で標準正規の片側または両側の p 値を求めます。例：z = 1.96 → 両側 p ≈ 0.05。もう一方の尾、|z|、代入手順も同時に表示します。連続な標準正規を仮定しており、t・χ²・正確な二項検定ではありません。宿題・自習用の教育近似であり、統計ソフトや専門的な解析の代わりにはなりません。",
	tool_p_value_article:
		"zスコアから標準正規の片側／両側 p 値を近似し、臨界 z のショートカットと手順付きの計算過程を示します。",
	tool_p_value_desc: "z から正規の片側・両側 p。両方の尾と |z| を表示。",

	tool_p_value_mode_label: "尾の種類",
	tool_p_value_mode_two: "両側",
	tool_p_value_mode_one: "片側",
	tool_p_value_hint:
		"標準正規モデルを使います。同じ |z| なら、対称な正規では片側 p は両側 p の約半分です。",
	tool_p_value_z_label: "zスコア",
	tool_p_value_z_ph: "例：1.96",
	tool_p_value_chips_label: "よく使う臨界 z ショートカット",
	tool_p_value_chip_1645: "z = 1.645",
	tool_p_value_chip_196: "z = 1.96",
	tool_p_value_chip_2576: "z = 2.576",
	tool_p_value_calculate: "計算",
	tool_p_value_sample: "サンプルを読み込む",
	tool_p_value_clear: "クリア",
	tool_p_value_pOut_label: "両側 p 値",
	tool_p_value_pOneOut_label: "片側 p 値",
	tool_p_value_altOut_label: "もう一方の尾",
	tool_p_value_absOut_label: "|z|",
	tool_p_value_steps_title: "計算手順",
	tool_p_value_step_abs_tpl: "絶対値を取る：|z| = |{z}| = {abs}。",
	tool_p_value_step_two_tpl: "両側 p ≈ erfc(|z| / √2) = erfc({abs} / √2) ≈ {p}。",
	tool_p_value_step_one_tpl: "片側 p ≈ 両側 / 2 = {two} / 2 ≈ {one}。",
	tool_p_value_result_note:
		"学習向けの標準正規近似です。t検定・χ²・正確な二項検定や研究デザインのサービスではありません。小さな p だけで主張が証明されるわけではありません。",
	tool_p_value_err_generic: "有限の zスコアを入力してください（例：1.96）。",

	tool_p_value_how_title: "この p値計算ツールの使い方",
	tool_p_value_how_body:
		"両側か片側を選び、z を入力（または臨界 z をタップ）してから「計算」を押します。サンプルは 1.96 両側 → 1.96 片側 → z=0 → z=2.576 の順で切り替わります。",
	tool_p_value_how_item_1: "両側または片側を選ぶ。",
	tool_p_value_how_item_2: "有限の zスコアを入れるか、1.645 / 1.96 / 2.576 をタップする。",
	tool_p_value_how_item_3: "「計算」で選んだ p、もう一方の尾、手順を確認する。",
	tool_p_value_how_item_4: "「サンプルを読み込む」で教科書によく出る点検値を順番に試す。",

	tool_p_value_why_choose_title:
		"p値計算ツール — zスコアから正規分布の尾確率を使う理由",
	tool_p_value_why_choose_item_1: "同じ z から片側と両側の正規 p を両方出せる。",
	tool_p_value_why_choose_item_2: "両側おおよそ 10% / 5% / 1% に対応する臨界 z ショートカット。",
	tool_p_value_why_choose_item_3: "手順行に erfc(|z|/√2) と片側の半分を明示する。",
	tool_p_value_why_choose_item_4: "前提をはっきり書く：連続な標準正規のみ。",
	tool_p_value_why_choose_item_5:
		"正直な境界：完全な仮説検定スイートではなく、主張の証明にもならない。",

	tool_p_value_formula_title: "正規 p 値の式",
	tool_p_value_formula_body:
		"連続な標準正規のもとで、両側 p ≈ erfc(|z| / √2)。対称な正規なら片側 p はその半分です。",
	tool_p_value_formula_item_1: "両側 p ≈ erfc(|z| / √2)。例：|z|=1.96 → p ≈ 0.05。",
	tool_p_value_formula_item_2: "片側 p ≈ 両側 / 2。同じ |z|=1.96 → 片側 ≈ 0.025。",
	tool_p_value_formula_item_3:
		"数値的な erfc 近似を使用 — 学習用の精度であり、認定ソフトではありません。",
	tool_p_value_formula_item_4: "標準正規の z を仮定。t・χ²・離散の正確検定ではない。",
	tool_p_value_formula_item_5: "z = 0 → 両側 p = 1；|z| が大きいほど p は小さくなる。",

	tool_p_value_example_title: "計算例",
	tool_p_value_example:
		"サンプルはまず z=1.96 両側 → p≈0.05。次に片側の半分 ≈0.025。続いて z=0 → p=1。最後は z=2.576（両側約 1% の臨界値付近）です。",

	tool_p_value_usecases_title: "こんなときに使う",
	tool_p_value_usecase_1: "宿題：既知の z を正規尾の近似 p に換算する。",
	tool_p_value_usecase_2:
		"関連の zスコアページで平均と標準偏差から z を出したあと、尾確率をすぐ確認する。",
	tool_p_value_usecase_3: "教科書の「1.96 ↔ 0.05」の目安を数値出力と突き合わせる。",
	tool_p_value_usecase_4: "同じ |z| で片側と両側を並べて見る。",

	tool_p_value_faq_q1: "片側ですか、両側ですか？",
	tool_p_value_faq_a1:
		"どちらも選べます。両側は ±|z| を覆い、対称な正規では片側はその約半分です。",
	tool_p_value_faq_q2: "どの分布を仮定していますか？",
	tool_p_value_faq_a2:
		"z に対する連続な標準正規です。t検定・χ²・正確な二項の計算機ではありません。",
	tool_p_value_faq_q3: "なぜ z = 1.96 が 0.05 に近いのですか？",
	tool_p_value_faq_a3:
		"標準正規では |z| ≈ 1.96 が両側 5% 検定のよく知られた臨界値で、erfc 近似はおよそ 0.05 を返します。",
	tool_p_value_faq_q4: "小さな p は対立仮説を証明しますか？",
	tool_p_value_faq_a4:
		"いいえ。p 値は述べられた仮定のもとでの尾確率であり、主張の自動証明ではありません。",
	tool_p_value_faq_q5: "ここでの片側と両側の関係は？",
	tool_p_value_faq_a5: "対称な正規では、同じ |z| について片側 p ≈ 両側 p ÷ 2 です。",
	tool_p_value_faq_q6: "負の z を入れてよいですか？",
	tool_p_value_faq_a6:
		"はい。ページは |z| を使うので、−1.96 と 1.96 は同じ両側 p になります。",
	tool_p_value_faq_q7: "先に zスコアはどう求めますか？",
	tool_p_value_faq_a7:
		"素点・平均・標準偏差から始める場合は、関連の zスコア計算ツールを使ってください。",

	tool_p_value_disclaimer:
		"標準正規モデルのみの教育用近似です。統計ソフト、研究デザイン、専門的な解析の代用にはなりません。",
	tool_p_value_references:
		"Wikipedia の p値・正規分布；正規の尾には相補誤差関数。",
	tool_p_value_ref_pvalue_label: "Wikipedia — P値",
	tool_p_value_ref_normal_label: "Wikipedia — 正規分布",
};

export default ja;
