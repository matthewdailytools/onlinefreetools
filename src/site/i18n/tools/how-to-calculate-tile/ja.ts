/**
 * i18n tool shard (how-to-calculate-tile / ja).
 * 日本語独立重写：タイル枚数・必要量の見積もり向け。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_tile_title: 'タイル枚数の計算ツール — 必要量を見積もる',
	tool_tile_description:
		'部屋の面積（m²、または縦×横）とタイル寸法（cm）、ロス率（既定 10%）から必要な枚数を見積もります。例：部屋 12 m²、タイル 30×30 cm、ロス 10% → 147 枚（切り上げ）。斜め張りなどではロスを増やせます。計算はブラウザ内で行い、数値は端末に留まりサーバーへアップロードしません。床・壁のリフォーム前の粗い発注量に使えます。',
	tool_tile_article:
		'面積と1枚あたりのサイズから購入枚数を出します。面積を直接入れるか、メートルの縦横を入れ、センチのタイル寸法とロスを指定します。端数は切り上げます。',
	tool_tile_calculate: '計算する',
	tool_tile_sample: 'サンプル',
	tool_tile_clear: 'クリア',
	tool_tile_mode_label: '部屋サイズの入れ方',
	tool_tile_mode_area: '面積（m²）',
	tool_tile_mode_lw: '縦 × 横',
	tool_tile_area_label: '部屋の面積（m²）',
	tool_tile_area_ph: '例: 12',
	tool_tile_room_l_label: '部屋の縦（m）',
	tool_tile_room_w_label: '部屋の横（m）',
	tool_tile_room_l_ph: '例: 4',
	tool_tile_room_w_ph: '例: 3',
	tool_tile_tile_l_label: 'タイルの長さ（cm）',
	tool_tile_tile_w_label: 'タイルの幅（cm）',
	tool_tile_tile_l_ph: '例: 30',
	tool_tile_tile_w_ph: '例: 30',
	tool_tile_waste_label: 'ロス（%）',
	tool_tile_waste_ph: '例: 10',
	tool_tile_waste_hint: '既定の 10% は切断と少数の割れを想定。斜め張りは多めに。',
	tool_tile_result_tiles: '必要枚数',
	tool_tile_result_area: '使用した部屋面積',
	tool_tile_result_tile_area: '1枚あたりの面積',
	tool_tile_err_input: '正の面積（または縦横）、正のタイル寸法、0 以上のロス率を入力してください。',
	tool_tile_how_title: '使い方',
	tool_tile_how_body:
		'面積か縦×横を選び、タイルの cm 寸法とロスを入れます。1枚を m² に直し、面積に (1+ロス/100) を掛けて割ったあと切り上げます。計算はブラウザのタブ内で完結し、サーバーには送りません。',
	tool_tile_formula_title: '計算式と前提',
	tool_tile_formula_body: '枚数は部屋面積・1枚面積・ロスから求めます。',
	tool_tile_formula_item_1: '部屋面積 A：m² 直接、または縦×横（m）。',
	tool_tile_formula_item_2: '1枚面積 a =（長さ cm÷100）×（幅 cm÷100）[m²]。',
	tool_tile_formula_item_3: '枚数 = ceil(A × (1 + ロス%÷100) ÷ a)。ロス既定は 10%。',
	tool_tile_example_title: '計算例',
	tool_tile_example:
		'例：部屋 12 m²、タイル 30×30 cm、ロス 10%。1枚は 0.09 m²。ロス込み 12×1.10=13.2 m²。枚数 = ceil(13.2÷0.09)=147。',
	tool_tile_usecases_title: 'こんなときに',
	tool_tile_usecase_1: '店舗に行く前に、浴室やキッチンの床タイル枚数をざっくり把握する。',
	tool_tile_usecase_2: '見積書の壁タイル数量を、面積とロスでざっと検算する。',
	tool_tile_usecase_3: '30×30 と大判を入れ替えて、枚数の差を比較する。',
	tool_tile_faq_q1: 'なぜ切り上げるのですか？',
	tool_tile_faq_a1: 'タイルは端数枚では買えません。切断や割れを見込んで切り上げます。',
	tool_tile_faq_q2: 'ロス率とは何ですか？',
	tool_tile_faq_a2: '切断・柄合わせ・割れ用の余裕です。既定は 10%。斜め張りでは多めが一般的です。',
	tool_tile_faq_q3: '面積と縦×横のどちら？',
	tool_tile_faq_a3: 'どちらでも構いません。すでに m² が分かるなら面積、寸法だけなら縦×横を使います。',
	tool_tile_faq_q4: '数値はアップロードされますか？',
	tool_tile_faq_a4: 'いいえ。計算は端末のブラウザ内で行われ、サーバーへはアップロードしません。',
	tool_tile_references:
		'NIST SP 811 の単位換算、TCNA のタイル施工・ロス計画に関する案内。',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811（単位換算）',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default ja;
