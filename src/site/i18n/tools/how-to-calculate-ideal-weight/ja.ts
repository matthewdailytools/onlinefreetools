/**
 * i18n tool shard (how-to-calculate-ideal-weight / ja)。
 * 03 brief に沿い日本語で独立執筆。英模の同型直訳ではない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_ideal_weight_title: '理想体重の計算ツール — 理想体重の目安を推定する',
	tool_ideal_weight_description:
		'Devine・Robinson・Miller・Hamwi の理想体重（IBW）を同じページで比較できます。例：男性・身長 178 cm → Devine 約 73.2 kg（各式でおおよそ 70.4–75.2 kg）。ブラウザ内で計算し、アップロードしません。学習用の目安であり、医療アドバイスや診断ではありません。',
	tool_ideal_weight_article:
		'理想体重の式は身長と性別から参考体重を推定します。本ページでは Devine・Robinson・Miller・Hamwi を並べて区間を見られ、非医療の注意も明示しています。',
	tool_ideal_weight_calculate: '計算する',
	tool_ideal_weight_sample: 'サンプルを入れる',
	tool_ideal_weight_clear: 'クリア',
	tool_ideal_weight_sex_label: '性別（式の表）',
	tool_ideal_weight_sex_male: '男性',
	tool_ideal_weight_sex_female: '女性',
	tool_ideal_weight_height_label: '身長（cm）',
	tool_ideal_weight_height_ph: '例：178',
	tool_ideal_weight_formula_label: '式の表示',
	tool_ideal_weight_formula_all: 'すべての式（範囲）',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: '推定の理想体重',
	tool_ideal_weight_result_range: '式ごとの範囲',
	tool_ideal_weight_result_note: '学習用の推定です。医療アドバイスや診断ではありません。',
	tool_ideal_weight_err_height: '身長は 0 より大きい値にしてください。',
	tool_ideal_weight_err_short:
		'これらの IBW 式はおおよそ 152 cm（5 ft）未満では定義が弱いです。結果はあくまで図示として扱ってください。',
	tool_ideal_weight_how_title: '使い方',
	tool_ideal_weight_how_body:
		'性別とセンチメートルの身長を入力します。古典的 IBW 式のためにインチへ換算し、キログラムで表示します。BMI や体脂肪は別ツールを使ってください。',
	tool_ideal_weight_formula_title: '式と前提',
	tool_ideal_weight_formula_body:
		'換算は 1 in = 2.54 cm。60 in（5 ft）を超える分について、男性 Devine = 50 + 2.3×(in−60)、女性 Devine = 45.5 + 2.3×(in−60)。Robinson・Miller・Hamwi も同様の線形式で係数が異なります。注意点：',
	tool_ideal_weight_formula_item_1: '成人の投与量／参考文脈向けに導かれたもので、個人の目標体重ではありません。',
	tool_ideal_weight_formula_item_2: '体格・筋肉量・妊娠はモデル化していません。',
	tool_ideal_weight_formula_item_3: '結果は教育用の図示であり、臨床目標や医療アドバイスではありません。',
	tool_ideal_weight_example_title: '例',
	tool_ideal_weight_example:
		'例：男性・178 cm → Devine 約 73.2 kg；Robinson 約 71.1、Miller 約 70.4、Hamwi 約 75.2（おおよそ 70.4–75.2 kg）。',
	tool_ideal_weight_usecases_title: 'こんなときに',
	tool_ideal_weight_usecase_1: '授業：同じ身長で古典的 IBW 式を比べる。',
	tool_ideal_weight_usecase_2: '専門家に相談する前の粗い学習用目安（目標プランではない）。',
	tool_ideal_weight_usecase_3: 'Devine と Robinson の差を一ページで確認する。',
	tool_ideal_weight_faq_q1: 'どの理想体重の式が「正しい」ですか？',
	tool_ideal_weight_faq_a1:
		'万能の正解はありません。教材では Devine がよく出ます。Robinson・Miller・Hamwi は係数が違うので、ここで並べて比べてください。',
	tool_ideal_weight_faq_q2: 'BMI と同じですか？',
	tool_ideal_weight_faq_a2:
		'違います。BMI は体重と身長の比です。IBW は身長と性別だけから参考体重を推定します。',
	tool_ideal_weight_faq_q3: 'これは医療アドバイスですか？',
	tool_ideal_weight_faq_a3:
		'いいえ。数値は学習用の推定のみで、診断・治療計画・栄養処方ではありません。',
	tool_ideal_weight_faq_q4: 'なぜインチに換算するのですか？',
	tool_ideal_weight_faq_a4:
		'公表されている Devine 系の式は 5 フィートを超えるインチで定義されています。センチ入力は式適用前に換算します。',
	tool_ideal_weight_disclaimer:
		'理想体重の結果は教育用の図示にすぎず、医療アドバイス・診断・臨床評価の代替ではありません。健康に関する判断は資格のある専門家に相談してください。',
	tool_ideal_weight_references:
		'古典的 Devine/Robinson/Miller/Hamwi の IBW 式；NCBI Bookshelf の投与量／IBW 教育コンテキスト。',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — 理想体重の文脈',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default ja;
