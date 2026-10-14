/**
 * i18n tool shard (how-to-calculate-acceleration / ja).
 * 日本語：等加速度直線運動の加速度計算。a・v・v0・t を解け、途中式を表示。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_acceleration_title: "加速度の計算 — 速度の変化と時間から求める（途中式つき）",
	tool_acceleration_description:
		"等加速度直線運動の公式 a = (v − v0) ÷ t で加速度を計算し、必要なら終速度・初速度・時間にも変形します。途中式つき。例：v0 = 0、v = 10、t = 2 → a = 5。速度と時間は同じ単位系でそろえてください（m/s と s なら m/s²）。",
	tool_acceleration_calculate: "計算する",
	tool_acceleration_sample: "サンプルを読み込む",
	tool_acceleration_clear: "クリア",
	tool_acceleration_solve_label: "求める量",
	tool_acceleration_solve_a: "加速度 a",
	tool_acceleration_solve_v: "終速度 v",
	tool_acceleration_solve_v0: "初速度 v0",
	tool_acceleration_solve_t: "時間 t",
	tool_acceleration_v0_label: "初速度 v0",
	tool_acceleration_v0_ph: "例：0",
	tool_acceleration_v_label: "終速度 v",
	tool_acceleration_v_ph: "例：10",
	tool_acceleration_t_label: "時間 t",
	tool_acceleration_t_ph: "例：2",
	tool_acceleration_a_label: "加速度 a",
	tool_acceleration_a_ph: "例：5",
	tool_acceleration_accOut_label: "加速度",
	tool_acceleration_vOut_label: "終速度",
	tool_acceleration_v0Out_label: "初速度",
	tool_acceleration_tOut_label: "時間",
	tool_acceleration_work_label: "途中式",
	tool_acceleration_result_note:
		"直線上の等加速度運動を仮定します。速度と時間は対応する単位で。正方向をそろえたとき、負の a は減速を意味します。",
	tool_acceleration_err_finite: "表示中の欄にはすべて有限の数値を入れてください。",
	tool_acceleration_err_time: "時間は 0 より大きくしてください。",
	tool_acceleration_err_zero_a: "時間を求めるとき、加速度を 0 にはできません（ゼロ除算）。",
	tool_acceleration_how_title: "使い方",
	tool_acceleration_how_body:
		"等加速度では a = (v − v0) ÷ t です。求めたい量を選び、残りの既知量を入れると同じ関係式を並べ替えます。",
	tool_acceleration_how_item_1: "「求める量」で加速度・終速度・初速度・時間のいずれかを選ぶ。",
	tool_acceleration_how_item_2: "表示されている欄をすべて埋める。単位は一本（SI が簡単）にそろえる。",
	tool_acceleration_how_item_3: "「計算する」をクリックする。",
	tool_acceleration_how_item_4: "答えと途中式を確認する。例：a = (10 − 0) ÷ 2 = 5。",
	tool_acceleration_why_choose_title: "この加速度の計算を使う理由",
	tool_acceleration_why_choose_item_1:
		"宿題で与えられた数字から始められる。a 専用ではなく、v・v0・t も同じ式で解ける。",
	tool_acceleration_why_choose_item_2:
		"途中式が出るので、(v − v0) ÷ t や v = v0 + a t をノートに写せる。",
	tool_acceleration_why_choose_item_3:
		"適用範囲が明確：直線の等加速度のみ。変加速度や円運動は対象外。",
	tool_acceleration_why_choose_item_4:
		"ありえない入力を具体的に示す：t ≤ 0、または時間を求めるのに a = 0。",
	tool_acceleration_why_choose_item_5: "ブラウザ内で計算し、サーバーにアップロードしない。",
	tool_acceleration_formula_title: "公式とその変形",
	tool_acceleration_formula_body:
		"等加速度の定義 a = (v − v0) ÷ t。物理は同じで、未知数だけを入れ替えた式です。",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t。例：(10 − 0) ÷ 2 = 5。",
	tool_acceleration_formula_item_2: "v = v0 + a t。例：0 + 5 × 2 = 10。",
	tool_acceleration_formula_item_3: "v0 = v − a t。例：10 − 5 × 2 = 0。",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a（a ≠ 0）。例：(10 − 0) ÷ 5 = 2。",
	tool_acceleration_example_title: "例",
	tool_acceleration_example:
		"サンプル：静止から 10 まで、時間 2。加速度を求めると a = (10 − 0) ÷ 2 = 5。終速度モードで v0 = 0、a = 5、t = 2 とすると v = 10——同じ運動を別の未知数で読んだ結果です。",
	tool_acceleration_usecases_title: "こんなときに",
	tool_acceleration_usecase_1: "等加速度直線運動の宿題で加速度や終速度を確かめるとき。",
	tool_acceleration_usecase_2: "自動車が 0 → 20 m/s を 4 s で達したとき、平均加速度が約 5 m/s² か確認する。",
	tool_acceleration_usecase_3: "一定の減速で停止するまでの時間を求める。",
	tool_acceleration_usecase_4: "教科書の答えと途中式を一行ずつ突き合わせる。",
	tool_acceleration_faq_q1: "単位はどうそろえればよいですか？",
	tool_acceleration_faq_a1:
		"一貫した組なら何でも構いません。メートルと秒なら m/s²。km/h と秒を換算なしで混ぜると誤りになります。",
	tool_acceleration_faq_q2: "加速度の求め方は？",
	tool_acceleration_faq_a2:
		"終速度から初速度を引き、時間で割ります：a = (v − v0) ÷ t。0 から 10 へ 2 秒なら a = 5 です。",
	tool_acceleration_faq_q3: "円運動にも使えますか？",
	tool_acceleration_faq_a3:
		"いいえ。このページは直線上の等加速度向けです。向心加速度は速さと半径が必要で、別の式になります。",
	tool_acceleration_faq_q4: "加速度が負のとき何を意味しますか？",
	tool_acceleration_faq_a4:
		"減速、または正方向と反対向きの加速度です。v0 = 20、v = 10、t = 2 なら a = (10 − 20) ÷ 2 = −5 です。",
	tool_acceleration_faq_q5: "自由落下の加速度は 9.8 m/s² ですか？",
	tool_acceleration_faq_a5:
		"地表付近では空気抵抗を無視したとき g ≈ 9.8 m/s² がよく使われます。上向きを正とするなら、速度や時間を求めるときに a = −9.8 を入れてください。",
	tool_acceleration_faq_q6: "平均の速さとの違いは？",
	tool_acceleration_faq_a6:
		"平均の速さは距離 ÷ 時間。加速度は速度そのものの変化の速さです。距離と時間だけから速さが欲しいときは速度のツールを使ってください。",
	tool_acceleration_faq_q7: "なぜ a が 0 だと時間を求められないのですか？",
	tool_acceleration_faq_a7:
		"a = 0 なら速度は変わらないため、t = (v − v0) ÷ a は定義できません。初速度と終速度が一致しているか、加速度が 0 でないかのどちらかです。",
	tool_acceleration_article: "加速度",
	tool_acceleration_disclaimer:
		"学習・宿題の確認用です。直線の等加速度を仮定しており、実際の運動では加速度が変わることがあります。",
	tool_acceleration_references: "Wikipedia — Acceleration；The Physics Hypertextbook — Equations of Motion。",
	tool_acceleration_ref_a_label: "Wikipedia — Acceleration（英語）",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion（英語）",
};

export default ja;
