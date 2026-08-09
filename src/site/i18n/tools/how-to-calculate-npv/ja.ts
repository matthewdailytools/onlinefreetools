/**
 * i18n tool shard (how-to-calculate-npv / ja).
 * 日本語の独立リライト：検索向け title/desc、UI/How/Formula/FAQ、YMYL（投資助言ではない）を含む。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_npv_title: 'NPV（正味現在価値）の計算ツール — ネット現在価値を求める',
	tool_npv_description:
		'年間割引率・初期投資・年ごとのキャッシュフローから NPV（正味現在価値／ネット・プレゼント・バリュー）を計算します。例：投資 10000、割引率 10%、CF 3000 / 4200 / 6800 → NPV は約 1307.29。処理はブラウザ内で完結し、サーバーへは送りません。学習用の図解であり、投資・税務・資産運用の助言ではありません。',
	tool_npv_article:
		'NPV とは、将来のキャッシュフローを選んだ年率で今日に割り引き、初期投資を差し引いた金額です。プラスでも仮定のもとでの評価にすぎず、将来予測や買い推奨ではありません。',
	tool_npv_calculate: '計算する',
	tool_npv_sample: 'サンプルを読み込む',
	tool_npv_clear: 'クリア',
	tool_npv_rate_label: '割引率（年率 %）',
	tool_npv_rate_ph: '例: 10',
	tool_npv_invest_label: '初期投資（流出）',
	tool_npv_invest_ph: '例: 10000',
	tool_npv_cf_label: '年ごとのキャッシュフロー（カンマまたは改行）',
	tool_npv_cf_ph: '例: 3000, 4200, 6800',
	tool_npv_cf_hint: '1…n 年目の CF1…CFn を入力。正は流入、後年の流出は負でも可。',
	tool_npv_result_label: 'NPV',
	tool_npv_result_note: '学習用の図解であり、投資助言ではありません。',
	tool_npv_err_rate: '有効な年割引率（パーセント）を入力してください。−100% 以下は不可です。',
	tool_npv_err_invest: '初期投資は 0 より大きい必要があります。',
	tool_npv_err_cf: '有効なキャッシュフローを 1 つ以上、カンマまたは改行で入力してください。',
	tool_npv_how_title: '使い方',
	tool_npv_how_body:
		'年割引率、正の初期投資（時点 0 の流出）、および 1…n 年のキャッシュフロー一覧を入れると NPV が求まります。結果は端末のブラウザ内に留まり、教育目的のみです。',
	tool_npv_formula_title: '計算式と前提',
	tool_npv_formula_body:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ)（t = 1…n）。r は年割引率の小数。次の前提に注意してください。',
	tool_npv_formula_item_1: 'キャッシュフローは年末発生として扱い、年内のタイミングは無視します。',
	tool_npv_formula_item_2: '割引率は各年で一定；税・手数料・インフレは r や CF に織り込込まない限りモデル化しません。',
	tool_npv_formula_item_3: '結果は学習用の図解であり、予測や投資助言ではありません。',
	tool_npv_example_title: '計算例',
	tool_npv_example:
		'例：初期投資 10000、割引率 10%/年、CF 3000 / 4200 / 6800 → NPV = −10000 + 3000/1.1 + 4200/1.1² + 6800/1.1³ ≈ 1307.29。',
	tool_npv_usecases_title: 'こんなときに',
	tool_npv_usecase_1: 'プロジェクトのざっくり選別：割引後の流入と初期コストを比べる（図解のみ）。',
	tool_npv_usecase_2: '課題用：固定の割引率と短い CF リストで NPV の合計を練習する。',
	tool_npv_usecase_3: '相談前にハードルレートを超えそうかスケッチする — 詳細分析の代わりにはなりません。',
	tool_npv_faq_q1: 'このツールの NPV の式は？',
	tool_npv_faq_a1:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ)。I₀ は初期投資、r は年割引率の小数、CFₜ は 1…n 年のキャッシュフローです。',
	tool_npv_faq_q2: '単純 ROI や CAGR との違いは？',
	tool_npv_faq_a2:
		'単純 ROI は一期間の収益率、CAGR は両端金額の年率成長です。NPV は一連の CF を割り引き、成長率ではなく金額を出します。',
	tool_npv_faq_q3: 'キャッシュフローの入力方法は？',
	tool_npv_faq_a3:
		'1 年目から n 年目までをカンマまたは改行で並べます。正は流入、負は後年の流出。有効な数値が 1 つ以上必要です。',
	tool_npv_faq_q4: 'これは投資助言ですか？',
	tool_npv_faq_a4:
		'いいえ。数値は学習用の図解にすぎず、投資・税務・資産運用の助言ではありません。入力上 NPV が正でも実世界の利益を保証しません。',
	tool_npv_disclaimer:
		'NPV の結果は学習用の図解にすぎず、投資・税務・資産運用の助言ではありません。割引率・CF のタイミング・手数料・税金・リスクは簡略化しています。過去や仮定の数字は将来を保証しません。',
	tool_npv_references:
		'Investopedia の NPV 定義と、現在価値と正味現在価値の違い；標準の割引キャッシュフロー NPV 式。',
	tool_npv_ref_npv_label: 'Investopedia — Net Present Value (NPV)',
	tool_npv_ref_pv_label: 'Investopedia — 現在価値と正味現在価値',
};

export default ja;
