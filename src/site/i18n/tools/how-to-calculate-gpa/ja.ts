/**
 * i18n tool shard (how-to-calculate-gpa / ja).
 * 日本語として独立に書き直し（英模直訳ではない）。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_gpa_title: "GPA計算ツール — 加重平均の出し方",
	tool_gpa_description: "各科目のグレードポイントと単位数から、4.0スケールの加重平均GPAを計算します。例：A=4.0（3単位）とB=3.0（3単位）→ GPA 3.5。学校・国ごとにスケールは異なるため学習用の目安です。計算はブラウザ内で行い、サーバーにアップロードしません。",
	tool_gpa_article: "加重GPAは各科目のポイント×単位を合計し、総単位で割ります。本ページは一般的な4.0スケール（A=4.0、B=3.0）です。プラスマイナスや5.0加重など校則が異なる場合があります。",
	tool_gpa_calculate: "計算する",
	tool_gpa_sample: "サンプル",
	tool_gpa_clear: "クリア",
	tool_gpa_courses_label: "科目一覧（1行：ポイント, 単位）",
	tool_gpa_courses_ph: "例 4.0, 3",
	tool_gpa_courses_hint: "1行1科目。先にポイント、続けて単位。4.0スケールでは A≈4.0、B≈3.0。",
	tool_gpa_result_label: "加重GPA",
	tool_gpa_result_note: "4.0スケール想定。成績表の公式ルールで必ず確認してください。",
	tool_gpa_err_parse: "「ポイント, 単位」を1行以上入力してください（例：4.0, 3）。",
	tool_gpa_err_credits: "各科目の単位は0より大きい必要があります。",
	tool_gpa_how_title: "使い方",
	tool_gpa_how_body: "科目ごとにポイントと単位を入力し、計算するを押します。処理は端末内で完了します。学校公式の換算表を優先してください。",
	tool_gpa_formula_title: "計算式とスケール注意",
	tool_gpa_formula_body: "GPA = Σ (ポイント × 単位) / Σ 単位。注意点：",
	tool_gpa_formula_item_1: "単純な4.0対応のデモです。+/-や優等加重は自動適用しません。",
	tool_gpa_formula_item_2: "単位は正、ポイントは有限数である必要があります。",
	tool_gpa_formula_item_3: "大学・高校・地域で体系が異なる場合があります（学習用）。",
	tool_gpa_example_title: "例",
	tool_gpa_example: "例：科目A = 4.0・3単位、科目B = 3.0・3単位 → GPA = (12 + 9) / 6 = 3.50。",
	tool_gpa_usecases_title: "こんなときに",
	tool_gpa_usecase_1: "公式ポータル更新前の学期GPAのざっくり確認。",
	tool_gpa_usecase_2: "4.0スケールでの単位加重平均の練習。",
	tool_gpa_usecase_3: "成績シナリオの比較 — 合否判定ではありません。",
	tool_gpa_faq_q1: "どの式で計算しますか？",
	tool_gpa_faq_a1: "加重GPA = Σ (ポイント × 単位) / Σ 単位。レターは先にポイントへ換算してください。",
	tool_gpa_faq_q2: "すべて4.0ですか？",
	tool_gpa_faq_a2: "いいえ。+/-や5.0、百分率など学校ごとに異なります。",
	tool_gpa_faq_q3: "文字成績をそのまま入れられますか？",
	tool_gpa_faq_a3: "先に換算（A→4.0、B→3.0）してからポイントと単位を入力します。",
	tool_gpa_faq_q4: "合格を保証しますか？",
	tool_gpa_faq_a4: "いいえ。教育用の数値例です。",
	tool_gpa_references: "College Board の学生向け資料；米国の成績スケール概要。",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — 米国の成績評価",
};

export default ja;
