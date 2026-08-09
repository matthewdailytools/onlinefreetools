/**
 * i18n tool shard (how-to-calculate-concrete / ja).
 * 日本語独立重写：コンクリート体積・必要量の見積もり向け。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_concrete_title: 'コンクリート体積の計算ツール — 必要量を見積もる',
	tool_concrete_description:
		'スラブ・柱・円柱の寸法からコンクリート体積（立方メートルまたは立方フィート）を見積もります。例：長さ 5 m × 幅 4 m × 厚さ 0.1 m のスラブ → 2.0 m³。袋数は任意で、1 袋あたり 0.015 m³（フィート時は 0.45 ft³）という仮定をページ上に明示します。計算はブラウザ内で行い、数値は端末に留まりサーバーへアップロードしません。リフォームや小規模工事の粗い積算に使えます。',
	tool_concrete_article:
		'単純な立体の体積から打設量を概算します。スラブ・矩形柱・円柱を選び、メートルまたはフィートで正の寸法を入れると m³ / ft³ が出ます。袋数は任意で、結果下に書いた袋容積仮定に依存します。',
	tool_concrete_calculate: '計算する',
	tool_concrete_sample: 'サンプル',
	tool_concrete_clear: 'クリア',
	tool_concrete_shape_label: '形状',
	tool_concrete_shape_slab: 'スラブ',
	tool_concrete_shape_column: '柱',
	tool_concrete_shape_cylinder: '円柱',
	tool_concrete_unit_label: '単位',
	tool_concrete_unit_m: 'メートル (m)',
	tool_concrete_unit_ft: 'フィート (ft)',
	tool_concrete_length_label: '長さ',
	tool_concrete_width_label: '幅',
	tool_concrete_thickness_label: '厚さ',
	tool_concrete_height_label: '高さ',
	tool_concrete_diameter_label: '直径',
	tool_concrete_length_ph: '例: 5',
	tool_concrete_width_ph: '例: 4',
	tool_concrete_thickness_ph: '例: 0.1',
	tool_concrete_height_ph: '例: 2.4',
	tool_concrete_diameter_ph: '例: 0.3',
	tool_concrete_bags_check: '袋数を見積もる（任意）',
	tool_concrete_result_volume: '体積',
	tool_concrete_result_bags: '袋数（概算）',
	tool_concrete_bags_note:
		'袋容積の仮定：メートル時は 1 袋 0.015 m³、フィート時は 0.45 ft³。実袋は銘柄・配合で異なるため、切り上げて納入元に確認してください。',
	tool_concrete_err_dims: 'すべての寸法に 0 より大きい数を入力してください。',
	tool_concrete_how_title: '使い方',
	tool_concrete_how_body:
		'形状と単位を選び、表示された寸法を入れます。スラブと矩形柱は長さ×幅×厚さ（柱は高さ）、円柱は直径と高さから πr²h で計算します。袋数をオンにすると、記載の袋容積で割り切り上げます。処理はブラウザのタブ内だけで、数値はサーバーに送りません。',
	tool_concrete_formula_title: '式と前提',
	tool_concrete_formula_body: '閉じた立体の体積を使います。',
	tool_concrete_formula_item_1: 'スラブ：V = 長さ × 幅 × 厚さ。',
	tool_concrete_formula_item_2: '矩形柱：V = 長さ × 幅 × 高さ。',
	tool_concrete_formula_item_3:
		'円柱：V = π × (直径÷2)² × 高さ。袋数 = ceil(V ÷ 袋容積)、袋容積は 0.015 m³ または 0.45 ft³。',
	tool_concrete_example_title: '例',
	tool_concrete_example:
		'例（スラブ・メートル）：5 m × 4 m × 0.1 m → V = 2.0 m³。0.015 m³/袋なら袋数 ≈ ceil(2.0 ÷ 0.015) = 134。',
	tool_concrete_usecases_title: 'こんなときに',
	tool_concrete_usecase_1: '庭やガレージのスラブ打設前に生コン量を概算する。',
	tool_concrete_usecase_2: 'フェンス柱や小さな円形基礎の袋詰めコンクリートを見積もる。',
	tool_concrete_usecase_3: '見積書を単純な L×W×T でざっと検算する。',
	tool_concrete_faq_q1: 'スラブモードの式は？',
	tool_concrete_faq_a1: '体積 = 長さ × 幅 × 厚さ。既定サンプル 5 × 4 × 0.1 m は 2.0 m³ です。',
	tool_concrete_faq_q2: '袋数はどう出す？',
	tool_concrete_faq_a2:
		'袋数 = ceil(体積 ÷ 袋容積)。メートルは 0.015 m³/袋、フィートは 0.45 ft³/袋。計画用の仮定であり銘柄ラベルではありません。',
	tool_concrete_faq_q3: '円柱は半径と直径のどちら？',
	tool_concrete_faq_a3: '外径を入力します。内部で直径÷2 を半径にして V = π r² h を計算します。',
	tool_concrete_faq_q4: '数値はアップロードされますか？',
	tool_concrete_faq_a4: 'いいえ。端末のブラウザ内だけで計算し、サーバーにはアップロードしません。',
	tool_concrete_references: 'NIST SP 811 の単位換算；Portland Cement Association のコンクリート入門。',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811（単位換算）',
	tool_concrete_ref_pca_label: 'Portland Cement Association — コンクリートを学ぶ',
};

export default ja;
