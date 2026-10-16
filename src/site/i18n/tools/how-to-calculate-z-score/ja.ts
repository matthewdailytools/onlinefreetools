/**
 * i18n ツール分片（how-to-calculate-z-score / ja）。
 * 素点 ↔ Zスコア（標準スコア）の相互変換：z = (x − 平均) / 標準偏差。
 * 手順表示と SD > 0 ガード付き。教育用の線形スケーリングのみ——正規性検定・p値・研究デザインではない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：Zスコア / 標準スコア変換ツール文案 */
const ja: SiteLangDict = {
	tool_z_score_title: "Zスコア計算ツール — 素点と標準スコアの変換",
	tool_z_score_description:
		"z = (x − 平均) / 標準偏差 で素点を Zスコア（標準スコア）に変換し、逆に z・平均・標準偏差から素点も求めます。例：x = 85、平均 = 70、標準偏差 = 10 → z = 1.5。標準偏差 > 0 が必要です。教育用の線形スケーリングのみ——正規性検定でも p値算出でもありません。",
	tool_z_score_article:
		"素点・平均・標準偏差から標準スコアを求め、または z から素点を復元し、代入の手順を表示します。",
	tool_z_score_desc: "素点 ↔ Zスコア：z = (x − 平均) / 標準偏差。手順と |z| を表示。",

	tool_z_score_mode_label: "何を求めますか？",
	tool_z_score_mode_z: "素点から Zスコア",
	tool_z_score_mode_x: "Zスコアから素点",
	tool_z_score_hint: "平均と正の標準偏差を入力し、素点から始めるか z から始めるかを選んでください。",
	tool_z_score_x_label: "素点（x）",
	tool_z_score_x_ph: "例：85",
	tool_z_score_z_label: "Zスコア（z）",
	tool_z_score_z_ph: "例：1.5",
	tool_z_score_mean_label: "平均（μ）",
	tool_z_score_mean_ph: "例：70",
	tool_z_score_sd_label: "標準偏差（σ）",
	tool_z_score_sd_ph: "例：10",
	tool_z_score_calculate: "計算する",
	tool_z_score_sample: "サンプルを読み込む",
	tool_z_score_clear: "クリア",
	tool_z_score_zOut_label: "Zスコア",
	tool_z_score_xOut_label: "素点",
	tool_z_score_diffOut_label: "x − 平均",
	tool_z_score_absOut_label: "|z|（平均から何 SD）",
	tool_z_score_steps_title: "計算手順",
	tool_z_score_step_z_tpl: "z = (x − 平均) / 標準偏差 = ({x} − {mean}) / {sd} = {z}。",
	tool_z_score_step_x_tpl: "x = 平均 + z × 標準偏差 = {mean} + {z} × {sd} = {x}。",
	tool_z_score_step_diff_tpl: "平均との差：x − 平均 = {x} − {mean} = {diff}。",
	tool_z_score_step_abs_tpl: "SD 単位の距離：|z| = |{z}| = {abs}。",
	tool_z_score_result_note:
		"z の代数そのものは正規分布を前提としません。その後の正規分布の p値などは正規性を要します。教育用のみ——統計ソフトや研究デザインの代替ではありません。",
	tool_z_score_err_generic:
		"有効な数値を入力し、標準偏差は 0 より大きくしてください（例：x=85、平均=70、標準偏差=10）。",

	tool_z_score_how_title: "Zスコア計算ツールの使い方",
	tool_z_score_how_body:
		"素点→z か z→素点を選び、平均と SD > 0 を入れて「計算する」を押します。サンプルは 85/70/10 → 1.5、逆変換 1.5 → 85、x=平均 → 0、平均より低い点の順に切り替わります。",
	tool_z_score_how_item_1: "「素点から Zスコア」または「Zスコアから素点」を選ぶ。",
	tool_z_score_how_item_2: "平均と正の標準偏差を入力する。",
	tool_z_score_how_item_3: "モードに合わせて素点または Zスコアを入れる。",
	tool_z_score_how_item_4: "「計算する」を押し、結果・x−平均・|z|・手順行を確認する。",

	tool_z_score_why_choose_title: "この Zスコア計算ツールを使う理由",
	tool_z_score_why_choose_item_1: "双方向：素点 → z、または z → 素点。",
	tool_z_score_why_choose_item_2: "自分の数値を z = (x − μ) / σ に当てはめた手順行を表示。",
	tool_z_score_why_choose_item_3: "SD ≤ 0 を明確に拒否し、ゼロ除算を起こさない。",
	tool_z_score_why_choose_item_4: "|z| で平均から何標準偏差離れているかを示す。",
	tool_z_score_why_choose_item_5: "境界を明示：線形スケーリングのみ——正規性検定でも p値でもない。",

	tool_z_score_formula_title: "Zスコアの公式",
	tool_z_score_formula_body:
		"Zスコア（標準スコア）は、与えられた平均と標準偏差に対する相対位置へ値を再スケールします。単位は打ち消し合い、z は無次元です。",
	tool_z_score_formula_item_1: "z = (x − μ) / σ。例：(85 − 70) / 10 = 1.5。",
	tool_z_score_formula_item_2: "x = μ + z × σ。例：70 + 1.5 × 10 = 85。",
	tool_z_score_formula_item_3: "σ は正でなければならない。ゼロまたは負の SD は拒否される。",
	tool_z_score_formula_item_4: "x が平均と等しいとき z = 0。負の z は平均より下を意味する。",
	tool_z_score_formula_item_5:
		"代数は正規性を要求しない。正規分布の裾の p値は要求する——関連の p値ページを使う。",

	tool_z_score_example_title: "計算例",
	tool_z_score_example:
		"サンプルはまず x=85、平均=70、標準偏差=10 → z=1.5。次に z=1.5 から x=85 へ戻す。続けて x=平均 → z=0。最後は x=55 → z=−1.5（平均より 1.5 SD 下）。",

	tool_z_score_usecases_title: "Zスコア計算ツールを使う場面",
	tool_z_score_usecase_1: "宿題：テストの素点を標準スコアに直し、代入手順を確認する。",
	tool_z_score_usecase_2: "平均やばらつきが異なる分布上の点数の位置を比べる。",
	tool_z_score_usecase_3: "すでに z・平均・標準偏差が分かっているとき、素点を復元する。",
	tool_z_score_usecase_4: "先に z を求め、別ページで正規分布の裾の p値を確認する準備をする。",

	tool_z_score_faq_q1: "z = 1.5 は何を意味しますか？",
	tool_z_score_faq_a1: "素点が、与えられた平均より 1.5 標準偏差だけ上にあることを意味します。",
	tool_z_score_faq_q2: "標準偏差は 0 でもよいですか？",
	tool_z_score_faq_a2: "いいえ。ゼロ除算は定義されないため、標準偏差 > 0 を入力してください。",
	tool_z_score_faq_q3: "Zスコアから素点へ戻すには？",
	tool_z_score_faq_a3: "x = 平均 + z × 標準偏差 を使います。例：70 + 1.5 × 10 = 85。",
	tool_z_score_faq_q4: "正規分布を仮定する必要がありますか？",
	tool_z_score_faq_a4:
		"z の代数自体は正規性を要求しませんが、その後の正規分布の p値など多くの用途では仮定が必要です。",
	tool_z_score_faq_q5: "|z| が大きければ必ず統計的に有意ですか？",
	tool_z_score_faq_a5:
		"それだけでは判断できません。有意性にはモデルと p値または臨界値が必要で、z の数値だけでは足りません。",
	tool_z_score_faq_q6: "x が平均と等しいときは？",
	tool_z_score_faq_a6: "そのとき z = 0 です。得点は与えられた分布のちょうど中心にあります。",
	tool_z_score_faq_q7: "z から p値を得るにはどこを使いますか？",
	tool_z_score_faq_a7:
		"z が求まったら関連の p値計算ツールを使ってください。このページは線形の z 変換のみです。",

	tool_z_score_disclaimer:
		"教育用のみ：z = (x − 平均) / 標準偏差。統計ソフト・正規性検定・研究デザインの代替ではありません。",
	tool_z_score_references: "Wikipedia の標準スコアおよび標準偏差（教育用コンテキスト）。",
	tool_z_score_ref_z_label: "Wikipedia — 標準スコア",
	tool_z_score_ref_sd_label: "Wikipedia — 標準偏差",
};

export default ja;
