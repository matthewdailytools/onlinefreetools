/**
 * i18n 工具分片（how-to-calculate-gpa / ja）。
 * 学分加权 GPA（4.0 量表）；字母成绩芯片与步骤行；教育用途，非录取决定。
 * 按日语检索习惯独立重写：GPA 計算 / 加重平均 GPA / グレードポイント。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_gpa_title: "GPA計算ツール — 加重平均の出し方",
	tool_gpa_description: "各科目のグレードポイントと単位から、一般的な 4.0 スケールの加重平均 GPA を計算します。例：A=4.0（3 単位）と B=3.0（3 単位）→ GPA 3.50。文字チップでポイントを挿入し、手順行で quality points を確認。学習用の説明であり、入試・奨学金・正式な成績の判定ではありません。ブラウザ内で動作します。",
	tool_gpa_article: "科目ごとにグレードポイントと単位を入力するか、文字チップで基本 4.0 マップを挿入。加重 GPA、quality points、合計単位、手順行が表示されます。",
	tool_gpa_desc: "4.0 スケールの加重 GPA。文字チップと手順行付き。",

	tool_gpa_safety_banner: "教育用の説明です。学校・地域でスケールは異なります。入試・奨学金・正式な成績表の判定ではありません。",
	tool_gpa_hint: "1 行に 1 科目：グレードポイントのあと単位（カンマまたは空白）。単位は 0 より大きく。文字チップは一般的な 4.0 マップを挿入します（A=4.0、A−=3.7、B+=3.3 …）。",
	tool_gpa_courses_label: "科目（1 行：グレードポイント, 単位）",
	tool_gpa_courses_ph: "例 4.0, 3",
	tool_gpa_chips_label: "文字成績のポイントを挿入（4.0 マップ）",
	tool_gpa_calculate: "計算する",
	tool_gpa_sample: "サンプル",
	tool_gpa_clear: "クリア",
	tool_gpa_result_label: "加重 GPA",
	tool_gpa_qp_label: "Quality points（Σ 成績 × 単位）",
	tool_gpa_credits_label: "合計単位",
	tool_gpa_courses_count_label: "計上した科目数",
	tool_gpa_steps_title: "手順",
	tool_gpa_step_row_tpl: "科目 {n}：{g} × {c} = {qc}。",
	tool_gpa_step_sum_tpl: "Quality points = {qp}；合計単位 = {credits}。",
	tool_gpa_step_gpa_tpl: "GPA = {qp} ÷ {credits} = {gpa}。",
	tool_gpa_result_note: "単純な 4.0 スケールを想定。プラス／マイナスや加重（例：5.0）は自動適用しません。学校・国で違うので成績表のルールで確認してください。学習用のみ。",
	tool_gpa_err_parse: "少なくとも 1 行「グレードポイント, 単位」（例：4.0, 3）を入力してください。",
	tool_gpa_err_credits: "各科目の単位は 0 より大きくしてください。",

	tool_gpa_how_title: "GPA計算ツールの使い方",
	tool_gpa_how_body: "科目ごとにポイントと単位を並べるか、文字チップを押してから単位を足します。計算すると加重 GPA、quality points、手順行が出ます。サンプルは等単位・プラスマイナス・単位が不揃いの 3 パターンを順に切り替えます。",
	tool_gpa_how_item_1: "1 行に 1 科目：グレードポイント、続けて単位を入力。",
	tool_gpa_how_item_2: "任意：文字チップで一般的な 4.0 ポイントを入れ、単位を書く。",
	tool_gpa_how_item_3: "「計算する」で GPA、quality points、合計単位、手順を表示。",
	tool_gpa_how_item_4: "「サンプル」で等単位・プラスマイナス・単位不揃いを切り替え。",

	tool_gpa_why_choose_title: "このGPA計算ツールを使う理由",
	tool_gpa_why_choose_item_1: "加重 GPA = Σ(成績 × 単位) / Σ 単位。",
	tool_gpa_why_choose_item_2: "A〜F の基本 4.0 マップ用文字チップ。",
	tool_gpa_why_choose_item_3: "GPA の横に quality points と合計単位。",
	tool_gpa_why_choose_item_4: "手順行で自分の数字を式に当てはめられる。",
	tool_gpa_why_choose_item_5: "境界が明確：学習用のみ — 入試アドバイスではない。",

	tool_gpa_formula_title: "GPA の式と 4.0 スケールの注意",
	tool_gpa_formula_body: "加重 GPA は各科目のグレードポイントに単位を掛け、その積（quality points）を足し、合計単位で割ります。",
	tool_gpa_formula_item_1: "GPA = Σ (グレードポイント × 単位) / Σ 単位。",
	tool_gpa_formula_item_2: "チップの一般的な 4.0 マップ：A=4.0、A−=3.7、B+=3.3、B=3.0、B−=2.7、C+=2.3、C=2.0、C−=1.7、D+=1.3、D=1.0、F=0.0。",
	tool_gpa_formula_item_3: "チップ以外のプラス／マイナスや honors/AP 加重は自動では付けません。",
	tool_gpa_formula_item_4: "単位は正の数、グレードポイントは有限の数である必要があります。",
	tool_gpa_formula_item_5: "大学・高校・地域の制度は異なり得ます — 結果は学習用のみ。",

	tool_gpa_example_title: "計算例",
	tool_gpa_example: "サンプルはまず 4.0×3 と 3.0×3 → quality points 21、単位 6、GPA 3.50。次はプラスマイナス（3.7 と 3.3）。最後は単位が不揃い（4.0×4 と 2.0×2）→ GPA 3.33。",

	tool_gpa_usecases_title: "GPA計算を使う場面",
	tool_gpa_usecase_1: "公式ポータル更新前に、ポイントと単位で学期 GPA の目安を出す。",
	tool_gpa_usecase_2: "宿題：4.0 スケールで単位加重平均を練習する。",
	tool_gpa_usecase_3: "想定成績のシミュレーション — 入試や奨学金の判定ではない。",
	tool_gpa_usecase_4: "チップで文字をポイントに直し、学校のスケールが違えば手で調整。",

	tool_gpa_faq_q1: "このツールの GPA の式は？",
	tool_gpa_faq_a1: "加重 GPA = Σ (グレードポイント × 単位) / Σ 単位。自分のスケール上のポイントを入れるか、文字チップで基本 4.0 マップを使います。",
	tool_gpa_faq_q2: "どの学校も 4.0 スケールですか？",
	tool_gpa_faq_a2: "いいえ。多くの米国の学校はプラス／マイナス付き 4.0、他は 5.0 加重や百分制です。成績表のルールに従ってください。",
	tool_gpa_faq_q3: "文字成績をそのまま混ぜられますか？",
	tool_gpa_faq_a3: "文字チップでポイントを入れ、同じ行に単位を足してください。スケールが違う場合は自分で換算してから入力します。",
	tool_gpa_faq_q4: "Quality points とは？",
	tool_gpa_faq_a4: "Quality points は Σ (成績 × 単位) — 合計単位で割る前の分子です。",
	tool_gpa_faq_q5: "honors 科目の 5.0 加重は含まれますか？",
	tool_gpa_faq_a5: "自動加重はありません。学校が付与するポイント（例：5.0）をそのまま入力してください。",
	tool_gpa_faq_q6: "大学入試の合格を保証しますか？",
	tool_gpa_faq_a6: "しません。数値は教育用の説明であり、入試や奨学金の判定ではありません。",

	tool_gpa_disclaimer: "教育用の GPA 計算のみ — 入試・奨学金・正式な成績表の助言ではありません。スケールは学校・地域で異なります。",
	tool_gpa_references: "College Board の学生向け資料；米国の学業評価スケールの概要。",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Academic grading in the United States",
};

export default ja;
