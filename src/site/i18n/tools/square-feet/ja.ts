/**
 * i18n tool shard (square-feet / ja).
 * 日本語リライト：平方フィート↔平米、部屋の縦×横から面積計算；手順表示と NIST 係数。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_squarefeet_title: "平方フィートを平米に換算 — 部屋の面積計算つき",
	tool_squarefeet_description:
		"平方フィートを平米に換算するか、部屋の縦×横から面積を計算します。係数は 1 ft² = 0.09290304 m²（NIST）です。例：850 sq ft ≈ 78.97 m²、10×12 ft の部屋は 120 ft² ≈ 11.15 m²。手順はブラウザ内で完結し、サーバーには送りません。",
	tool_squarefeet_calculate: "計算する",
	tool_squarefeet_sample: "サンプルを読み込む",
	tool_squarefeet_clear: "クリア",
	tool_squarefeet_mode_label: "手元にあるのは？",
	tool_squarefeet_mode_dims: "部屋の長さと幅",
	tool_squarefeet_mode_area: "すでに面積が分かっている",
	tool_squarefeet_dim_unit_label: "長さの単位",
	tool_squarefeet_unit_ft: "フィート (ft)",
	tool_squarefeet_unit_m: "メートル (m)",
	tool_squarefeet_unit_in: "インチ (in)",
	tool_squarefeet_length_label: "長さ",
	tool_squarefeet_length_placeholder: "例：10",
	tool_squarefeet_width_label: "幅",
	tool_squarefeet_width_placeholder: "例：12",
	tool_squarefeet_area_label: "面積",
	tool_squarefeet_area_placeholder: "例：850",
	tool_squarefeet_area_unit_label: "面積の単位",
	tool_squarefeet_unit_sqft: "平方フィート (ft²)",
	tool_squarefeet_unit_sqm: "平方メートル (m²)",
	tool_squarefeet_sqft_label: "平方フィート",
	tool_squarefeet_sqm_label: "平方メートル",
	tool_squarefeet_work_label: "計算の手順",
	tool_squarefeet_result_note:
		"表示は小数第2位までの丸めです。厳密な係数は 1 ft² = 0.09290304 m²（NIST / SI）です。平面の矩形面積のみで、専有／延床の定義や価格査定ではありません。",
	tool_squarefeet_invalid_input: "正の数だけを入力してください。",
	tool_squarefeet_how_title: "使い方",
	tool_squarefeet_how_body:
		"実測なら単位を揃えて縦×横、掲載面積なら NIST 係数で換算します。常に平方フィートと平米の両方と、手順の一行が表示されます。",
	tool_squarefeet_how_item_1:
		"測るときは「部屋の長さと幅」、物件に sq ft や m² が書いてあれば「すでに面積が分かっている」を選びます。",
	tool_squarefeet_how_item_2:
		"寸法モードでは ft / m / in を選び、両辺を同じ単位で入れます。面積モードでは数値と ft²／m² の区別を指定します。",
	tool_squarefeet_how_item_3: "「計算する」をクリックします。",
	tool_squarefeet_how_item_4:
		"両方の単位と手順を確認します。例：10 × 12 = 120 ft²、または 850 ft² × 0.09290304 = 78.97 m²。",
	tool_squarefeet_why_choose_title: "この平方フィートを平米に換算を使う理由",
	tool_squarefeet_why_choose_item_1:
		"手順行が見えるので、インチを ÷12 したか、メートルを NIST 係数で直したかをその場で確かめられます。",
	tool_squarefeet_why_choose_item_2:
		"厳密な SI 係数 1 ft² = 0.09290304 m² を使い、ざっくりの 0.09 や 0.093 にはしません（NIST SP 811）。",
	tool_squarefeet_why_choose_item_3:
		"実測モードと、850 sq ft・1000 sq ft のような掲載面積モードの両方に対応しています。",
	tool_squarefeet_why_choose_item_4:
		"専有／延床の定義は扱わず、住宅価格モデルでもありません。",
	tool_squarefeet_why_choose_item_5: "処理は端末のブラウザ内で完結し、サーバーにアップロードしません。",
	tool_squarefeet_formula_title: "計算式と換算係数",
	tool_squarefeet_formula_body:
		"両辺をフィートに揃えたあと、平方フィート面積は長さ×幅です。平米は次の厳密係数から求めます。",
	tool_squarefeet_formula_item_1: "フィート：A_ft² = L × W。例：10 ft × 12 ft = 120 ft²。",
	tool_squarefeet_formula_item_2: "メートル：A_ft² = (L × W) ÷ 0.09290304。例：3 m × 4 m = 12 m² ≈ 129.17 ft²。",
	tool_squarefeet_formula_item_3: "インチ：各辺を先に ÷12。例：120 in × 144 in → 10 ft × 12 ft = 120 ft²。",
	tool_squarefeet_formula_item_4: "厳密：1 ft² = 0.09290304 m²。よって m² = ft² × 0.09290304、ft² = m² ÷ 0.09290304。",
	tool_squarefeet_example_title: "例",
	tool_squarefeet_example:
		"サンプル部屋：10 ft × 12 ft。手順：10 × 12 = 120 ft² → 120 × 0.09290304 ≈ 11.15 m²。既知面積の例：850 sq ft × 0.09290304 ≈ 78.97 m²。米系の掲載を現地の m² 広告と比べるときに便利です。",
	tool_squarefeet_usecases_title: "こんなときに",
	tool_squarefeet_usecase_1: "米系物件の sq ft 表記を、地元の m² 広告と並べて比較したいとき。",
	tool_squarefeet_usecase_2: "長方形の部屋で床材やカーペットの目安を出すとき（ロスは別途）。",
	tool_squarefeet_usecase_3: "海外の間取りや買い物で 1000 sq ft のような数字を平米に直すとき。",
	tool_squarefeet_usecase_4: "図面がフィートとメートル混在で、塗装やリフォームのざっくり確認をするとき。",
	tool_squarefeet_faq_q1: "平方フィートを平米にするには？",
	tool_squarefeet_faq_a1:
		"0.09290304 を掛けます。「すでに面積が分かっている」を選び、sq ft を入れると手順に掛け算が出ます。",
	tool_squarefeet_faq_q2: "床材のロスは何％足せばよいですか？",
	tool_squarefeet_faq_a2:
		"この計算は床面積だけです。施工では切り口やミス用に約 5〜10% を足すことが多いですが、材料の案内に従ってください。",
	tool_squarefeet_faq_q3: "1 平方フィートは何平米ですか？",
	tool_squarefeet_faq_a3:
		"厳密には 0.09290304 m²（NIST / SI）です。100 sq ft ≈ 9.29 m²、850 ≈ 78.97 m²、1000 ≈ 92.90 m² です。",
	tool_squarefeet_faq_q4: "L 字の部屋はどうしますか？",
	tool_squarefeet_faq_a4:
		"矩形に分けてそれぞれ換算し、あとから足します。不規則な多角形はここでは扱いません。",
	tool_squarefeet_faq_q5: "部屋の平方フィートはどう測りますか？",
	tool_squarefeet_faq_a5:
		"同じ単位で縦と横を測って掛けます。フィートなら 10 × 12 = 120 sq ft。インチなら各辺を先に 12 で割ります。",
	tool_squarefeet_faq_q6: "専有面積と延床面積の違いも出ますか？",
	tool_squarefeet_faq_a6:
		"いいえ。単位間の平面矩形換算だけです。掲載の定義（ネット／グロス、専有／建築）は対象外です。",
	tool_squarefeet_faq_q7: "住宅価格の目安にも使えますか？",
	tool_squarefeet_faq_a7:
		"使えません。面積の換算であり、査定・鑑定・平方フィート単価の市場モデルではありません。",
	tool_squarefeet_article: "平方フィート",
	tool_squarefeet_disclaimer:
		"物件比較とリフォームの目安向けです。不動産の査定ツールではなく、専有／延床の定義でもありません。",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI)；Wikipedia — Square foot。",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Guide for the Use of the International System of Units (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default ja;
