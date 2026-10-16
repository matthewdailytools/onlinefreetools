/**
 * i18n ツール分片（how-to-calculate-macros / ja）。
 * 1日のカロリーとたんぱく質／炭水化物／脂質の割合から、Atwater 係数 4/4/9 でグラムを求める。
 * 教材向けのエネルギー算術のみ。医療・個別栄養指導ではない（YMYL）。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：マクロ（カロリー割合→グラム）計算ツールの全文コピー */
const ja: SiteLangDict = {
	tool_macros_title: "マクロ計算ツール — カロリー割合からグラムへ",
	tool_macros_description:
		"1日のカロリーとたんぱく質・炭水化物・脂質の割合を、1gあたり 4 / 4 / 9 kcal の教科書的な換算でグラムにします。例：2000 kcal・30/40/30% → たんぱく質 150 g、炭水化物 200 g、脂質 約 66.7 g。3つの割合は合計ちょうど 100 である必要があります。教育用のエネルギー計算であり、医療アドバイスや食事療法ではありません。",
	tool_macros_article:
		"Atwater のエネルギー密度と割合で、三大マクロをグラムに分解。よく使う割合のショートカットと途中式も表示します。",
	tool_macros_desc: "カロリー＋マクロ割合 → たんぱく質／炭水化物／脂質のグラム（4/4/9）。学習用のみ。",

	tool_macros_safety_banner:
		"教育目的のみです。このページは教科書どおりの「カロリー→グラム」の計算をします。医療アドバイス、献立、個別の栄養療法ではありません。",
	tool_macros_hint:
		"1日の kcal と、合計が 100 になる非負の3つの割合を入力してください。プリセットチップは入力の近道であり、推奨食ではありません。",
	tool_macros_cal_label: "カロリー（kcal）",
	tool_macros_cal_ph: "例：2000",
	tool_macros_pPct_label: "たんぱく質 %",
	tool_macros_pPct_ph: "例：30",
	tool_macros_cPct_label: "炭水化物 %",
	tool_macros_cPct_ph: "例：40",
	tool_macros_fPct_label: "脂質 %",
	tool_macros_fPct_ph: "例：30",
	tool_macros_chips_label: "よく使う割合のショートカット",
	tool_macros_chip_304030: "30 / 40 / 30",
	tool_macros_chip_404020: "40 / 40 / 20",
	tool_macros_chip_255025: "25 / 50 / 25",
	tool_macros_calculate: "計算する",
	tool_macros_sample: "サンプルを読み込む",
	tool_macros_clear: "クリア",
	tool_macros_pG_label: "たんぱく質",
	tool_macros_cG_label: "炭水化物",
	tool_macros_fG_label: "脂質",
	tool_macros_sumOut_label: "割合の合計",
	tool_macros_kcalP_label: "たんぱく質の kcal",
	tool_macros_kcalC_label: "炭水化物の kcal",
	tool_macros_kcalF_label: "脂質の kcal",
	tool_macros_steps_title: "計算手順",
	tool_macros_step_p_tpl: "たんぱく質：{cal} × {pct}% = {kcal} kcal → {kcal} ÷ 4 = {g} g。",
	tool_macros_step_c_tpl: "炭水化物：{cal} × {pct}% = {kcal} kcal → {kcal} ÷ 4 = {g} g。",
	tool_macros_step_f_tpl: "脂質：{cal} × {pct}% = {kcal} kcal → {kcal} ÷ 9 = {g} g。",
	tool_macros_step_sum_tpl: "割合の確認：{p}% + {c}% + {f}% = 100%。",
	tool_macros_result_note:
		"Atwater 近似を使用：たんぱく質／炭水化物は約 4 kcal/g、脂質は約 9 kcal/g。アルコール・食物繊維の補正や表示ラベルの丸めは扱いません。学習用であり医療アドバイスではありません。",
	tool_macros_err_generic:
		"0 より大きいカロリーと、合計がちょうど 100 の非負の3割合を入力してください（例：2000 kcal・30/40/30）。",

	tool_macros_how_title: "マクロ計算ツールの使い方",
	tool_macros_how_body:
		"1日のカロリーとたんぱく質／炭水化物／脂質の割合を入力（またはプリセットをタップ）し、「計算する」を押します。「サンプルを読み込む」は 2000@30/40/30、1800@40/40/20、2500@25/50/25、2200@30/35/35 を順に切り替えます。",
	tool_macros_how_item_1: "1日のカロリーを kcal で入力する。",
	tool_macros_how_item_2: "合計 100 になるたんぱく質・炭水化物・脂質の割合を入力する（またはチップを押す）。",
	tool_macros_how_item_3: "「計算する」でグラム、各マクロの kcal、手順を表示する。",
	tool_macros_how_item_4: "「サンプルを読み込む」で授業でよく使う割合を切り替える。",

	tool_macros_why_choose_title: "このマクロ計算ツールを使う理由",
	tool_macros_why_choose_item_1: "おなじみの 4 / 4 / 9 kcal/g で、カロリーからグラムを直接求めます。",
	tool_macros_why_choose_item_2: "割合の合計が 100 でないときは結果を出さず、重複や端数を防ぎます。",
	tool_macros_why_choose_item_3: "割合プリセットは入力ショートカットであり、食事の処方ではありません。",
	tool_macros_why_choose_item_4: "手順行で各マクロの kcal とグラムへの割り算を見せ、課題の検算に使えます。",
	tool_macros_why_choose_item_5: "YMYL の境界を明示：教育用の算術のみで、医療アドバイスではありません。",

	tool_macros_formula_title: "マクロの計算式",
	tool_macros_formula_body:
		"まず割合でカロリーを割り振り、Atwater のエネルギー密度で割ります。3つの割合は合計 100 である必要があります。",
	tool_macros_formula_item_1: "たんぱく質（g）=（kcal × たんぱく質%）÷ 4。例：2000 × 30% ÷ 4 = 150 g。",
	tool_macros_formula_item_2: "炭水化物（g）=（kcal × 炭水化物%）÷ 4。例：2000 × 40% ÷ 4 = 200 g。",
	tool_macros_formula_item_3: "脂質（g）=（kcal × 脂質%）÷ 9。例：2000 × 30% ÷ 9 ≈ 66.67 g。",
	tool_macros_formula_item_4: "割合の合計が 100 でない入力は拒否します。",
	tool_macros_formula_item_5: "係数は教科書の平均値です。表示ラベルや実測値とはわずかにずれることがあります。",

	tool_macros_example_title: "計算例",
	tool_macros_example:
		"サンプルの最初は 2000 kcal・30/40/30% → 150 g / 200 g / 約 66.7 g。次は 1800・40/40/20、その次は 2500・25/50/25、最後は 2200・30/35/35。プリセットは例示のみです。",

	tool_macros_usecases_title: "マクロ計算ツールを使う場面",
	tool_macros_usecase_1: "宿題：カロリー予算と割合を三大栄養素のグラムに直す。",
	tool_macros_usecase_2: "同じ総カロリーで、2つの割合案のグラム差を比べる。",
	tool_macros_usecase_3: "BMR／TDEE の見積もりと組み合わせて授業のエネルギー計算をする（医療アドバイスではない）。",
	tool_macros_usecase_4: "グラムに換算する前に、紙のプランの割合が本当に合計 100 か確認する。",

	tool_macros_faq_q1: "カロリーからマクロのグラムはどう出しますか？",
	tool_macros_faq_a1:
		"カロリーに各割合を掛け、たんぱく質／炭水化物の kcal は 4、脂質の kcal は 9 で割ります。例：2000・30/40/30 → 150 / 200 / 約 66.7 g。",
	tool_macros_faq_q2: "なぜ割合の合計が 100 でないといけませんか？",
	tool_macros_faq_a2: "そうでないとカロリー配分が重なったり隙間ができます。このページは合計が 100 以外の入力を受け付けません。",
	tool_macros_faq_q3: "脂質だけ 9 で割るのはなぜですか？",
	tool_macros_faq_a3: "Atwater 体系では脂質は約 9 kcal/g、たんぱく質と炭水化物は約 4 kcal/g だからです。",
	tool_macros_faq_q4: "プリセットの割合は推奨ダイエットですか？",
	tool_macros_faq_a4: "いいえ。チップは割合欄を埋めるだけです。医療やコーチングの推奨ではありません。",
	tool_macros_faq_q5: "これは医療アドバイスですか？",
	tool_macros_faq_a5: "いいえ。教育用のエネルギー計算のみで、診断・献立・栄養療法ではありません。",
	tool_macros_faq_q6: "アルコールや食物繊維の補正は入りますか？",
	tool_macros_faq_a6: "入りません。たんぱく質・炭水化物・脂質と 4/4/9 のみです。",
	tool_macros_faq_q7: "1日のカロリーはどこから来ますか？",
	tool_macros_faq_a7: "あなたが入力します。関連の BMR／TDEE ツールは学習用の見積もりに使えますが、やはり医療アドバイスではありません。",

	tool_macros_disclaimer:
		"カロリー→グラムの教育用算術のみです。医療・食事・栄養療法のアドバイスではありません。個別の指導は資格のある専門家に相談してください。",
	tool_macros_references: "Wikipedia の食品エネルギー（Atwater 係数）；CDC 栄養概要（教育コンテキスト）。",
	tool_macros_ref_a_label: "Wikipedia — 食品エネルギー",
	tool_macros_ref_b_label: "CDC — 栄養",
};

export default ja;
