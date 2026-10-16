/**
 * i18n tool shard (how-to-calculate-age / ja).
 * 検索向け独立リライト：年齢計算 / 二つの日付から年・月・日 / UTC 暦の借り / 教育用・法定年齢ではない。
 */
import type { SiteLangDict } from '../../../types';

/** Japanese (ja) strings for the chronological age calculator. */
const ja: SiteLangDict = {
	tool_age_title: "年齢計算ツール — 二つの日付から年・月・日",
	tool_age_description: "生年月日と基準日（UTC の暦日）から経過年齢を年・月・残りの日数で求め、区間内の全日数も表示します。例：2000-01-01 生まれ、2026-08-09 時点 → 26 年 7 か月 8 日。借り計算の手順と「今日を使う」ショートカット付き。暦の算術の学習用であり、法定年齢や資格判定の助言ではありません。",
	tool_age_article: "二つの暦日のあいだの年・月・日の年齢差と全日数を、借り手順と「今日を使う」付きで求めます。",
	tool_age_desc: "生年月日から基準日までの年/月/日の年齢と総日数を表示します。",

	tool_age_hint: "YYYY-MM-DD の暦日（UTC の日境界）を使います。基準日は生年月日以降である必要があります。「今日を使う」は基準日に今日の UTC 日付を入れます。",
	tool_age_birth_label: "生年月日",
	tool_age_asof_label: "基準日",
	tool_age_calculate: "計算する",
	tool_age_today: "今日を使う",
	tool_age_sample: "サンプルを読み込む",
	tool_age_clear: "クリア",
	tool_age_ymdOut_label: "年齢",
	tool_age_yearsOut_label: "年",
	tool_age_monthsOut_label: "月",
	tool_age_daysOut_label: "日",
	tool_age_totalDaysOut_label: "全日数の合計",
	tool_age_steps_title: "計算手順",
	tool_age_step_ymd_tpl: "{birth} から {asof}：暦の借り後で {y} 年 {m} か月 {d} 日。",
	tool_age_step_borrow_tpl: "日の借り：基準日の「日」が生年月日の「日」より小さいとき、直前の暦月から日数を借ります。",
	tool_age_step_total_tpl: "全日数の合計 =（基準 − 生年）の UTC 深夜ミリ秒差 ÷ 86400000 = {total}。",
	tool_age_result_note: "UTC の暦日のみ — 現地時刻や法定カットオフの時区は扱いません。区間内のうるう日は総日数に含めます。教育用であり、法定年齢や資格の助言ではありません。",
	tool_age_err_generic: "有効な日付（YYYY-MM-DD）を入力してください。基準日は生年月日以降である必要があります。",

	tool_age_how_title: "年齢計算ツールの使い方",
	tool_age_how_body: "生年月日と基準日を入れるか、基準日に「今日を使う」を押してから「計算する」を押します。サンプルは 2000-01-01→2026-08-09、うるう日、同日で年齢 0、年またぎの借りを順に切り替えます。",
	tool_age_how_item_1: "生年月日を入力する。",
	tool_age_how_item_2: "基準日を入力するか、「今日を使う」をクリックする。",
	tool_age_how_item_3: "「計算する」をクリックし、年・月・日と全日数を確認する。",
	tool_age_how_item_4: "「サンプルを読み込む」で教科書的な暦の例を切り替える。",

	tool_age_why_choose_title: "年齢計算ツール — 二つの日付から年・月・日を使う理由",
	tool_age_why_choose_item_1: "経過年齢を年・月・残りの日までまとめて表示。",
	tool_age_why_choose_item_2: "二つの UTC 暦日のあいだの全日数。",
	tool_age_why_choose_item_3: "基準日フィールドの「今日を使う」ショートカット。",
	tool_age_why_choose_item_4: "日が足りないとき、前月からの借り手順を画面に明示。",
	tool_age_why_choose_item_5: "境界が明確：暦の計算のみ — 法定年齢や資格判定ではない。",

	tool_age_formula_title: "年齢の計算式",
	tool_age_formula_body: "両日付を UTC 深夜として解釈し、年→月→日の順に引き、暦の借りをします。総日数はミリ秒差を 86400000 で割ります。",
	tool_age_formula_item_1: "years = 基準年 − 生年（月日がまだ来ていなければ調整）。",
	tool_age_formula_item_2: "基準日の日 < 生年月日の日なら、直前の暦月の日数を借りる。",
	tool_age_formula_item_3: "月が負になったら、年から 12 か月を借りる。",
	tool_age_formula_item_4: "totalDays = round((基準 − 生年) / 86400000)（UTC）。",
	tool_age_formula_item_5: "区間内のうるう日は総日数と借り時の月長に影響する。",

	tool_age_example_title: "計算例",
	tool_age_example: "サンプルの先頭は生年 2000-01-01、基準 2026-08-09 → 26 年 7 か月 8 日。次に 2 月 29 日生まれと 2024-02-28 を照合。その次は同日で年齢 0。最後は 1985-12-31 から 2026-01-01 への年またぎです。",

	tool_age_usecases_title: "年齢計算を使う場面",
	tool_age_usecase_1: "年・月・日の形式で年齢を書く提出物やフォーム。",
	tool_age_usecase_2: "暦の差と「日が足りないときの借り」の宿題。",
	tool_age_usecase_3: "二つの暦日のあいだの全日数をすぐ確かめるとき。",
	tool_age_usecase_4: "年齢ではなく間隔として数えたいときは日付差ツールと併用。",

	tool_age_faq_q1: "経過年齢はどう計算しますか？",
	tool_age_faq_a1: "暦の年・月・日を借り付きで引きます。例：2000-01-01 から 2026-08-09 → 26 年 7 か月 8 日。",
	tool_age_faq_q2: "「今日を使う」は何をしますか？",
	tool_age_faq_a2: "基準日に今日の UTC 暦日を入れ、再計算します。",
	tool_age_faq_q3: "タイムゾーンは含まれますか？",
	tool_age_faq_a3: "いいえ。日付は UTC の暦日として扱い、現地の時刻は使いません。",
	tool_age_faq_q4: "生年月日が基準日より後だと？",
	tool_age_faq_a4: "その組み合わせは拒否されます。基準日は生年月日以降である必要があります。",
	tool_age_faq_q5: "うるう日は結果にどう影響しますか？",
	tool_age_faq_a5: "区間内にあれば総日数に入り、借り時の月長は実際の暦に従います。",
	tool_age_faq_q6: "法定年齢や資格の助言ですか？",
	tool_age_faq_a6: "いいえ。教育用の暦の算術のみで、法律・医療・資格の助言ではありません。",
	tool_age_faq_q7: "日付差ツールとの違いは？",
	tool_age_faq_a7: "本ページは間隔を経過年齢（年/月/日）として表します。ほかの言い方の間隔は関連の日付差ツールを使ってください。",

	tool_age_disclaimer: "教育用の暦年齢のみ — 法定年齢、資格、医療、公式の身元に関する助言ではありません。",
	tool_age_references: "教育用の背景として Wikipedia の Chronological age と Calendar date。",
	tool_age_ref_a_label: "Wikipedia — Chronological age",
	tool_age_ref_b_label: "Wikipedia — Calendar date",
};

export default ja;
