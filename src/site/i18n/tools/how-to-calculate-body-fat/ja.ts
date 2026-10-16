/**
 * i18n 工具分片（how-to-calculate-body-fat / ja）。
 * 米海軍の周囲径公式で体脂肪率を推定する。陸軍ラベルも同じ log10 方程式。
 * 入力はセンチ、代入前に 2.54 でインチへ換算する。
 * 男性：86.010×log10(腹囲−首囲) − 70.041×log10(身長) + 36.387。
 * 女性：163.205×log10(腹囲+ヒップ−首囲) − 97.684×log10(身長) − 78.387（足すのではなく引く）。
 * 例：男性 178/40/86 cm で約 15.3%、女性 165/34/74/96 cm で約 26.7%。教育用であり診断ではない。
 */
import type { SiteLangDict } from '../../../types';

/** 体脂肪率計算ツールの日本語文案。キーは英語母版と揃える。 */
const ja: SiteLangDict = {
	tool_body_fat_title: "体脂肪率計算 — ネイビーの周囲径から推定する",
	tool_body_fat_description: "米海軍の周囲径公式で体脂肪率を計算します。手順はセンチをインチにしてから log10 に入れることです。例：男性は身長 178 cm、首囲 40 cm、腹囲 86 cm で約 15.3%。女性は身長 165 cm、首囲 34 cm、腹囲 74 cm、ヒップ 96 cm で約 26.7%。陸軍ラベルも同じ公式です。教育用であり、医療アドバイスや診断ではありません。",
	tool_body_fat_article: "性別とメジャーの読みを入れると、推定の体脂肪率とインチ換算の手順が出ます。女性はヒップも使います。",
	tool_body_fat_desc: "ネイビーの周囲径で体脂肪率を推定。陸軍ラベルは同じ式。教育用。",

	tool_body_fat_safety_banner: "教育用の推定です。周囲径の式は DXA や Bod Pod ではなく、診断でもありません。医療アドバイスではありません。",
	tool_body_fat_hint: "単位はセンチです。女性はヒップが必要です。腹囲は首囲より大きく、女性は腹囲とヒップの和も首囲より大きくしてください。陸軍ラベルはネイビーと同じ教育用の周囲径の式です。",
	tool_body_fat_method_label: "方式のラベル",
	tool_body_fat_method_navy: "米海軍の周囲径",
	tool_body_fat_method_army: "米陸軍 / DoD 方式の周囲径",
	tool_body_fat_sex_label: "性別（式が変わります）",
	tool_body_fat_sex_male: "男性",
	tool_body_fat_sex_female: "女性",
	tool_body_fat_height_label: "身長（cm）",
	tool_body_fat_height_ph: "例 178",
	tool_body_fat_neck_label: "首囲（cm）",
	tool_body_fat_neck_ph: "例 40",
	tool_body_fat_waist_label: "腹囲（cm）",
	tool_body_fat_waist_ph: "例 86",
	tool_body_fat_hip_label: "ヒップ（cm、女性）",
	tool_body_fat_hip_ph: "例 96",
	tool_body_fat_calculate: "計算する",
	tool_body_fat_sample: "サンプルを読み込む",
	tool_body_fat_clear: "クリア",
	tool_body_fat_result_label: "推定体脂肪率",
	tool_body_fat_steps_title: "手順",
	tool_body_fat_step_convert_tpl: "センチをインチに換算（÷ 2.54）：身長 {hIn} in、首囲 {nIn} in、腹囲 {wIn} in{hipPart}。",
	tool_body_fat_step_hip_part_tpl: "、ヒップ {hipIn} in",
	tool_body_fat_step_male_tpl: "男性の体脂肪率 ≈ 86.010×log10(腹囲−首囲) − 70.041×log10(身長) + 36.387 = {pct}%。",
	tool_body_fat_step_female_tpl: "女性の体脂肪率 ≈ 163.205×log10(腹囲+ヒップ−首囲) − 97.684×log10(身長) − 78.387 = {pct}%。",
	tool_body_fat_result_note: "教育用の推定であり、医療アドバイスや診断ではありません。メジャーの位置と姿勢で結果は変わります。",
	tool_body_fat_err_input: "身長、首囲、腹囲は 0 より大きい数にしてください。",
	tool_body_fat_err_hip: "女性の式には 0 より大きいヒップが必要です。",
	tool_body_fat_err_geom: "腹囲は首囲より大きくしてください。女性は腹囲とヒップの和も首囲より大きくする必要があります。",

	tool_body_fat_how_title: "体脂肪率計算の使い方",
	tool_body_fat_how_body: "ネイビーか陸軍のラベルと性別を選び、センチを入れて「計算する」を押します。式はラベルが違っても同じです。「サンプルを読み込む」は男性約 15.3% と女性約 26.7% を交互に出します。",
	tool_body_fat_how_item_1: "方式のラベルと性別を選ぶ。陸軍もネイビーと同じ周囲径の式です。",
	tool_body_fat_how_item_2: "身長、首囲、腹囲をセンチで入れる。女性はヒップも入れる。",
	tool_body_fat_how_item_3: "「計算する」を押し、推定のパーセントと手順を見る。",
	tool_body_fat_how_item_4: "「サンプルを読み込む」で、男性 178/40/86 cm の約 15.3% と女性 165/34/74/96 cm の約 26.7% を切り替える。",

	tool_body_fat_why_choose_title: "この体脂肪率計算を使う理由",
	tool_body_fat_why_choose_item_1: "男性と女性の決まった数字を、サンプルで交互に試せる。",
	tool_body_fat_why_choose_item_2: "結果の横に、教育用であって診断ではないと書いてある。",
	tool_body_fat_why_choose_item_3: "センチのまま入れて、log10 の前にインチへ直してくれる。",
	tool_body_fat_why_choose_item_4: "換算と代入が手順として残るので、検算しやすい。",
	tool_body_fat_why_choose_item_5: "陸軍ラベルは別式ではなく、ネイビーと同じ方程式です。",

	tool_body_fat_formula_title: "公式と測り方の前提",
	tool_body_fat_formula_body: "男性：体脂肪率 ≈ 86.010×log10(腹囲−首囲) − 70.041×log10(身長) + 36.387（インチ）。女性：体脂肪率 ≈ 163.205×log10(腹囲+ヒップ−首囲) − 97.684×log10(身長) − 78.387。",
	tool_body_fat_formula_item_1: "メジャーは海軍/DoD でよく使う位置に当てる。姿勢と衣服で読みは変わる。",
	tool_body_fat_formula_item_2: "入力はセンチ。1 インチ = 2.54 cm で換算してから log10 に入れる。",
	tool_body_fat_formula_item_3: "陸軍ラベルはネイビーと同じ教育用の周囲径方程式です。",
	tool_body_fat_formula_item_4: "DXA や Bod Pod の臨床結果ではなく、医療アドバイスでもありません。",
	tool_body_fat_formula_item_5: "皮下脂肪厚は複数部位と手技が必要で、周囲径の読みとは別です。",

	tool_body_fat_example_title: "計算例",
	tool_body_fat_example: "最初の「サンプルを読み込む」は男性・ネイビー：身長 178 cm、首囲 40 cm、腹囲 86 cm で約 15.3%。次は女性でラベルは陸軍ですが式は同じです。身長 165 cm、首囲 34 cm、腹囲 74 cm、ヒップ 96 cm で約 26.7%。",

	tool_body_fat_usecases_title: "こんなときに体脂肪率を計算する",
	tool_body_fat_usecase_1: "センチの腹囲をインチに直してから式へ入れる流れを、その場で確認したいとき。",
	tool_body_fat_usecase_2: "授業でネイビーの周囲径公式に、決まった数字を代入してみるとき。",
	tool_body_fat_usecase_3: "トレーニング記録の目安として粗いパーセントを見るとき。診断の代わりにはなりません。",
	tool_body_fat_usecase_4: "ネイビーと陸軍の呼び方を並べても、方程式が変わらないことを確かめたいとき。",

	tool_body_fat_faq_q1: "体脂肪率はどう計算しますか？",
	tool_body_fat_faq_a1: "米海軍/DoD 方式の log10 周囲径公式です。センチは 2.54 でインチにしてから入れます。男性は 86.010×log10(腹囲−首囲) − 70.041×log10(身長) + 36.387 です。",
	tool_body_fat_faq_q2: "なぜインチに換算するのですか？",
	tool_body_fat_faq_a2: "公表されている log10 の式がインチだからです。入力はセンチのままで、2.54 で換算します。",
	tool_body_fat_faq_q3: "医療アドバイスですか？",
	tool_body_fat_faq_a3: "いいえ。教育用の推定であり、診断、治療方針、臨床の体組成検査ではありません。",
	tool_body_fat_faq_q4: "ネイビーと陸軍で式は違いますか？",
	tool_body_fat_faq_a4: "この計算では違いません。ラベルは呼び方の違いで、周囲径の方程式は同じです。結果を左右しやすいのはメジャーの当て方です。",
	tool_body_fat_faq_q5: "腹囲と首囲が同じでも計算できますか？",
	tool_body_fat_faq_a5: "できません。腹囲は首囲より大きい必要があります。女性は腹囲とヒップの和も首囲より大きくしてください。",
	tool_body_fat_faq_q6: "キャリパーの皮下脂肪厚は使えますか？",
	tool_body_fat_faq_a6: "この計算の入力にはしません。皮下脂肪厚は複数の部位と慣れた手技が必要で、周囲径とは別の測り方です。女性の式は 163.205×log10(腹囲+ヒップ−首囲) − 97.684×log10(身長) − 78.387 で、最後は引く 78.387 です。",

	tool_body_fat_disclaimer: "体脂肪率の推定は教育用の例示であり、医療アドバイス、診断、臨床の体組成検査の代わりにはなりません。健康上の判断は資格のある臨床医に相談してください。",
	tool_body_fat_references: "米海軍 / DoD の周囲径法の方程式。ACE の教育用体脂肪率計算の説明。査読された周囲径法の文献。",
	tool_body_fat_ref_ace_label: "ACE — 体脂肪率計算（教育用）",
	tool_body_fat_ref_pmc_label: "PMC — 周囲径に基づく体脂肪の方法",
};

export default ja;
