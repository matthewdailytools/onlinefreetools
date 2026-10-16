/**
 * i18n 工具分片（how-to-calculate-ohms-law / ja）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_ohms_law_title: "オームの法則計算機 — V・I・Rを求め電力も表示",
	tool_ohms_law_description: "オームの法則で電圧・電流・抵抗のいずれかを求め、あわせて電力 P=VI を表示します。例：V=12、I=2 → R=6 Ω、P=24 W。R・V・I の3モードと手順行付き。理想直流の式のみで、ブラウザ内の学習用計算です。配線手順や製品定格、電気安全の助言ではありません。",
	tool_ohms_law_article: "求める量を選び、残りの2つを入力すると、未知数と電力が手順つきで得られます。",
	tool_ohms_law_desc: "オームの法則 V=IR。V・I・Rの各モードと電力。理想直流の学習用のみ。",

	tool_ohms_law_safety_banner: "学習用のみ。理想直流のオームの法則の計算であり、配線手順・製品定格・電気安全の助言ではありません。",
	tool_ohms_law_hint: "まず求解モードを選び、既知の2つを入力してください。Rを求めるとき電流は0にできません。RからIやVを求めるとき抵抗は0より大きくしてください。",
	tool_ohms_law_mode_label: "求める量",
	tool_ohms_law_mode_r: "抵抗 R（VとIから）",
	tool_ohms_law_mode_v: "電圧 V（IとRから）",
	tool_ohms_law_mode_i: "電流 I（VとRから）",
	tool_ohms_law_V_label: "電圧 V（ボルト）",
	tool_ohms_law_V_ph: "例：12",
	tool_ohms_law_I_label: "電流 I（アンペア）",
	tool_ohms_law_I_ph: "例：2",
	tool_ohms_law_R_label: "抵抗 R（オーム）",
	tool_ohms_law_R_ph: "例：6",
	tool_ohms_law_calculate: "計算",
	tool_ohms_law_sample: "サンプル読込",
	tool_ohms_law_clear: "クリア",
	tool_ohms_law_primary_label: "結果",
	tool_ohms_law_rOut_label: "抵抗 R",
	tool_ohms_law_vOut_label: "電圧 V",
	tool_ohms_law_iOut_label: "電流 I",
	tool_ohms_law_pOut_label: "電力 P",
	tool_ohms_law_steps_title: "計算手順",
	tool_ohms_law_step_r_tpl: "R = V ÷ I = {v} ÷ {i} = {r} Ω。",
	tool_ohms_law_step_v_tpl: "V = I × R = {i} × {r} = {v} V。",
	tool_ohms_law_step_i_tpl: "I = V ÷ R = {v} ÷ {r} = {i} A。",
	tool_ohms_law_step_p_tpl: "P = V × I = {v} × {i} = {p} W。",
	tool_ohms_law_result_note: "理想直流のみ。単位を揃えてください（V、A → Ω と W）。交流インピーダンスや非オーム素子は扱いません。",
	tool_ohms_law_err_generic: "既知欄には有限の正の値を入れてください。Rを求めるとき電流 ≠ 0、VやIを求めるとき抵抗 > 0。",

	tool_ohms_law_how_title: "オームの法則計算機の使い方",
	tool_ohms_law_how_body: "R・V・Iのどれを求めるかを選び、残りの2つを入力して計算すると、未知数・電力・手順が表示されます。「サンプル読込」で各モードを順に試せます。",
	tool_ohms_law_how_item_1: "求解モードを選ぶ：VとIからR、IとRからV、またはVとRからI。",
	tool_ohms_law_how_item_2: "単位をそろえて既知の2つを入力する。",
	tool_ohms_law_how_item_3: "「計算」を押して未知数・電力・手順を確認する。",
	tool_ohms_law_how_item_4: "「サンプル読込」で V=12/I=2、I=2/R=6、V=12/R=6 を順に切り替える。",

	tool_ohms_law_why_choose_title: "本サイトのオームの法則計算機を使う理由",
	tool_ohms_law_why_choose_item_1: "V = I·R の変形をカバーする3つの求解モード。",
	tool_ohms_law_why_choose_item_2: "電力 P = V·I を未知数と並べて表示。",
	tool_ohms_law_why_choose_item_3: "入力数値を式に当てはめた手順行。",
	tool_ohms_law_why_choose_item_4: "モードごとのサンプル切替。",
	tool_ohms_law_why_choose_item_5: "境界が明確：理想直流の学習用のみ — 配線助言ではない。",

	tool_ohms_law_formula_title: "オームの法則の式",
	tool_ohms_law_formula_body: "理想抵抗の直流では、電圧・電流・抵抗は V = I·R で結ばれます。電力は P = V·I です。",
	tool_ohms_law_formula_item_1: "電流がゼロでないとき R = V ÷ I。",
	tool_ohms_law_formula_item_2: "V = I × R。",
	tool_ohms_law_formula_item_3: "抵抗がゼロより大きいとき I = V ÷ R。",
	tool_ohms_law_formula_item_4: "P = V × I（理想では P = I²R や P = V²/R も可）。",
	tool_ohms_law_formula_item_5: "本ページは理想直流のみ — 交流インピーダンスや安全設計は対象外。",

	tool_ohms_law_example_title: "計算例",
	tool_ohms_law_example: "Rモードのサンプル：V=12、I=2 → R=6 Ω、P=24 W。Vモードは I=2、R=6 → V=12。Iモードは V=12、R=6 → I=2。",

	tool_ohms_law_usecases_title: "オームの法則計算機を使う場面",
	tool_ohms_law_usecase_1: "電子工学の宿題で V = I·R を変形して未知数を求める。",
	tool_ohms_law_usecase_2: "メーター値から理想直流の抵抗や電力を手早く確認する。",
	tool_ohms_law_usecase_3: "密度・速度などの物理ページと並べて単位の揃い方を練習する。",
	tool_ohms_law_usecase_4: "求めた量の横で電力も見られ、別の電力ツールが不要。",

	tool_ohms_law_faq_q1: "オームの法則とは何ですか？",
	tool_ohms_law_faq_a1: "理想抵抗の直流では V = I·R です。本ページは P = V·I も示します。",
	tool_ohms_law_faq_q2: "電圧や電流も求められますか？",
	tool_ohms_law_faq_a2: "はい。「求める量」で V・I・R を選べます。",
	tool_ohms_law_faq_q3: "交流回路も扱いますか？",
	tool_ohms_law_faq_a3: "いいえ。理想直流のみで、インピーダンスや位相は含みません。",
	tool_ohms_law_faq_q4: "Rを求めるとき電流が0だと？",
	tool_ohms_law_faq_a4: "I = 0 では R = V/I は定義できません。その入力は拒否されます。",
	tool_ohms_law_faq_q5: "配線や安全の助言ですか？",
	tool_ohms_law_faq_a5: "いいえ。学習用の計算のみで、製品定格や電気安全の案内ではありません。",

	tool_ohms_law_disclaimer: "オームの法則の学習用のみ — 専門・配線・電気安全の助言ではありません。",
	tool_ohms_law_references: "教科書で一般的なオームの法則と電力の参考資料。",
	tool_ohms_law_ref_a_label: "Wikipedia — オームの法則",
	tool_ohms_law_ref_b_label: "Wikipedia — 電力",
};

export default ja;
