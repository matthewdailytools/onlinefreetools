/**
 * i18n tool shard (how-to-calculate-one-rep-max / ja).
 * Epley / Brzycki / Lombardi で 1RM を推定し、%1RM トレーニング重量表を表示。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語 UI 文案：1RM 推定は学習用。コーチングや医療助言ではない。 */
const ja: SiteLangDict = {
	tool_one_rep_max_title: "1RM計算 — 重量と回数から1回最大挙上重量を推定",
	tool_one_rep_max_description:
		"サブマキシマルセットから Epley 式で1回最大挙上重量（1RM）を推定：1RM ≈ 重量×(1+回数/30)。Brzycki・Lombardi も並べて比較。例：100 kg を5回 → 約116.7。%1RM のトレーニング重量表付き。学習用の目安であり、トレーニング指導や医療助言ではありません。",
	tool_one_rep_max_article:
		"重量と回数を入力すると Epley で 1RM を推定し、Brzycki・Lombardi と比較。Epley 1RM に対するトレーニング％の重量も確認できます。",
	tool_one_rep_max_desc: "Epley・Brzycki・Lombardi でサブマキシマルセットから 1RM を推定し、%1RM 重量表を表示。",

	tool_one_rep_max_safety_banner:
		"学習用の推定値です。この数字だけを根拠に真の1RMに挑まないでください。十分なウォームアップ、補助者、指導がある場合に限り検討を。医療・トレーニング助言ではありません。",
	tool_one_rep_max_weight_label: "挙上重量",
	tool_one_rep_max_weight_ph: "例 100",
	tool_one_rep_max_reps_label: "完了回数",
	tool_one_rep_max_reps_ph: "例 5",
	tool_one_rep_max_hint:
		"フォームを保って数回連続で挙げられた重量を入力してください。1〜12 の整数回が式に最適です。重量は小数点のカンマも可。",
	tool_one_rep_max_calculate: "計算する",
	tool_one_rep_max_sample: "サンプルを読み込む",
	tool_one_rep_max_clear: "クリア",
	tool_one_rep_max_ormOut_label: "推定 1RM（Epley）",
	tool_one_rep_max_pct_title: "Epley 1RM からのトレーニング重量",
	tool_one_rep_max_pct_col_pct: "1RM の%",
	tool_one_rep_max_pct_col_load: "重量",
	tool_one_rep_max_steps_title: "計算の流れ",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "式のばらつき：{lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley：1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}。",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki：1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}。",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi：1RM ≈ w × r^0.1 = {w} × {r}^0.1 = {orm}。",
	tool_one_rep_max_step_pct_tpl: "Epley 1RM（{orm}）の80%：重量 ≈ 0.8 × {orm} = {p80}。",
	tool_one_rep_max_result_note:
		"回数が増えるほど3式の差が広がります。学習用には10回以下のきれいなセットがおすすめ。ウォームアップを；計算結果だけで最大に挑まないでください。",
	tool_one_rep_max_err_generic: "正の重量と、1〜12 の整数回数を入力してください（例：100 と 5）。",
	tool_one_rep_max_err_high_reps:
		"おおよそ12回を超えると式は信頼できません。より重く、回数の少ないきれいなセットに替えてください。",

	tool_one_rep_max_how_title: "1RM を推定する手順",
	tool_one_rep_max_how_body:
		"挙げた重量ときれいに完了した回数を入力し「計算する」を押します。Epley 1RM と Brzycki・Lombardi の比較、一般的なトレーニング％表が表示されます。",
	tool_one_rep_max_how_item_1: "バーベルやダンベルで、フォーム良く終えたセットの重量を入力。",
	tool_one_rep_max_how_item_2: "成功した回数を入力（整数 1〜12 が最適）。",
	tool_one_rep_max_how_item_3: "「計算する」で Epley 1RM と Brzycki・Lombardi を横並び表示。",
	tool_one_rep_max_how_item_4:
		"50%〜95% の %1RM 表でおおよその作業重量を確認。「サンプルを読み込む」で 100×5、60×8、80×3、真の1回135×1 を切替。",

	tool_one_rep_max_why_choose_title: "この1RM推定ツールを使う理由",
	tool_one_rep_max_why_choose_item_1: "主推定は Epley 1RM。Brzycki・Lombardi を並べて比較できる。",
	tool_one_rep_max_why_choose_item_2: "3式の差の範囲を一行で表示し、推定のズレが分かる。",
	tool_one_rep_max_why_choose_item_3: "Epley 1RM の 50%〜95% のトレーニング重量表。",
	tool_one_rep_max_why_choose_item_4: "入力した重量・回数を各式に代入したステップが見える。",
	tool_one_rep_max_why_choose_item_5: "安全バナー：学習用であり、この数値で最大挑戦を勧めるものではない。",

	tool_one_rep_max_formula_title: "1回最大挙上重量の式",
	tool_one_rep_max_formula_body:
		"1RM（1回最大挙上重量）は、正しいフォームで1回だけ挙げられる最大負荷です。以下の式はサブマキシマルセットから 1RM を推定します。",
	tool_one_rep_max_formula_item_1: "Epley：1RM ≈ w × (1 + r/30)。例：w=100、r=5 → 100×(1+5/30)=116.67。",
	tool_one_rep_max_formula_item_2: "Brzycki：1RM ≈ w × 36 ÷ (37 − r)。同例 → 100×36÷32=112.5。r≥37 は未定義。",
	tool_one_rep_max_formula_item_3: "Lombardi：1RM ≈ w × r^0.1。同例 → 100×5^0.1≈117.46。",
	tool_one_rep_max_formula_item_4: "回数が増えるほど推定はばらける。学習用には回数を抑えたきれいなセットを。",
	tool_one_rep_max_formula_item_5: "トレーニング％（例：1RM の80%）は計画の目安。疲労・種目・経験で調整してください。",

	tool_one_rep_max_example_title: "計算例",
	tool_one_rep_max_example:
		"サンプルは 100 kg×5回から：Epley≈116.7、Brzycki 112.5、Lombardi≈117.5。次に 60×8、80×3、真の1回 135×1（3式とも135）。フォームを厳守；崩れたら早めに止める。",

	tool_one_rep_max_usecases_title: "1RM 計算ツールを使う場面",
	tool_one_rep_max_usecase_1: "宿題・授業：重量と回数を Epley に代入し手順を示す。",
	tool_one_rep_max_usecase_2: "ざっくりプログラム：推定 1RM から 70%〜85% の作業セット重量へ換算。",
	tool_one_rep_max_usecase_3: "式の比較：同じセットで Epley・Brzycki・Lombardi がどれだけズレるか見る。",
	tool_one_rep_max_usecase_4: "サブマキシマル記録しかなく、現場で真の1RMを避けたいときの参考値。",

	tool_one_rep_max_faq_q1: "Epley 式で 1RM はどう計算しますか？",
	tool_one_rep_max_faq_a1:
		"重量に (1+回数/30) を掛けます。100 kg を5回：100×(1+5/30)=116.67。本ページは Brzycki・Lombardi も表示します。",
	tool_one_rep_max_faq_q2: "Epley と Brzycki の違いは？",
	tool_one_rep_max_faq_a2:
		"Epley は回数/30 を線形に加算。Brzycki は 36/(37−回数)。100×5 なら Epley≈116.7、Brzycki 112.5。どちらも監督付き最大テストの代わりにはなりません。",
	tool_one_rep_max_faq_q3: "推定に適した回数は？",
	tool_one_rep_max_faq_a3:
		"通常 1〜10 回のきれいなレップ。おおよそ12回超では式が不安定になり、より重く回数の少ないセットを求めます。",
	tool_one_rep_max_faq_q4: "1RM の80% とは？",
	tool_one_rep_max_faq_a4:
		"一般的な作業強度：重量 ≈ 0.8 × 推定 1RM。Epley 1RM が 116.7 なら 80% は同じ単位で約 93.3。",
	tool_one_rep_max_faq_q5: "計算した 1RM を試すのは安全ですか？",
	tool_one_rep_max_faq_a5:
		"このページの数字だけでは安全とは言えません。学習用と考えてください。真の1RMにはウォームアップ、補助、技術、できればコーチが必要 — 最大挑戦を勧める助言ではありません。",
	tool_one_rep_max_faq_q6: "kg と lb はどうすればいい？",
	tool_one_rep_max_faq_a6: "単位は統一すればどれでも可。式は無次元比で、1RM は入力した重量と同じ単位になります。",
	tool_one_rep_max_faq_q7: "医療やコーチングの助言ですか？",
	tool_one_rep_max_faq_a7:
		"いいえ。一般的な 1RM 推定式を理解するための学習用計算機です。トレーニングや健康の判断は資格のあるコーチや医療者に相談してください。",

	tool_one_rep_max_disclaimer:
		"1RM 推定は学習目的のみ — トレーニング・医療・専門助言ではありません。この計算機だけを根拠に最大挙上に挑まないでください。",
	tool_one_rep_max_references: "教科書や Wikipedia にある 1RM 予測式の一般的な説明。",
	tool_one_rep_max_ref_a_label: "Wikipedia — 1回最大挙上重量",
	tool_one_rep_max_ref_b_label: "Wikipedia — 筋力トレーニング",
};

export default ja;
