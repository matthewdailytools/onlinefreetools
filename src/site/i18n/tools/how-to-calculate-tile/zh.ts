/**
 * i18n tool shard (how-to-calculate-tile / zh).
 * 中文独立重写：检索向「瓷砖计算器 / 用量」，非英模直译。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_tile_title: '瓷砖计算器 — 如何估算瓷砖用量',
	tool_tile_description:
		'按房间面积（平方米，或长×宽）和单片瓷砖尺寸（厘米）、损耗比例估算需要买多少片。示例：房间 12 m²、瓷砖 30×30 cm、损耗 10% → 147 片（向上取整）。默认损耗 10%，可按斜铺或复杂图案调高。计算在浏览器内完成，数据留在本机、不上传服务器，适合装修铺地铺墙前粗算采购量。',
	tool_tile_article:
		'把房间面积和单片规格换成采购片数：可直接填面积，也可填房间长宽（米），再填瓷砖长宽（厘米）和损耗。结果向上取整，方便预留切割与破损。',
	tool_tile_calculate: '计算',
	tool_tile_sample: '加载样例',
	tool_tile_clear: '清空',
	tool_tile_mode_label: '房间尺寸怎么填',
	tool_tile_mode_area: '面积（m²）',
	tool_tile_mode_lw: '长 × 宽',
	tool_tile_area_label: '房间面积（m²）',
	tool_tile_area_ph: '例如 12',
	tool_tile_room_l_label: '房间长（m）',
	tool_tile_room_w_label: '房间宽（m）',
	tool_tile_room_l_ph: '例如 4',
	tool_tile_room_w_ph: '例如 3',
	tool_tile_tile_l_label: '瓷砖长（cm）',
	tool_tile_tile_w_label: '瓷砖宽（cm）',
	tool_tile_tile_l_ph: '例如 30',
	tool_tile_tile_w_ph: '例如 30',
	tool_tile_waste_label: '损耗（%）',
	tool_tile_waste_ph: '例如 10',
	tool_tile_waste_hint: '默认 10% 覆盖切割和少量破损；斜铺或复杂拼花建议再留多一些。',
	tool_tile_result_tiles: '所需片数',
	tool_tile_result_area: '所用房间面积',
	tool_tile_result_tile_area: '单片面积',
	tool_tile_err_input: '请填写大于 0 的房间面积（或长宽）、大于 0 的瓷砖尺寸，以及 ≥0 的损耗比例。',
	tool_tile_how_title: '怎么用',
	tool_tile_how_body:
		'先选「面积」或「长×宽」填房间，再填瓷砖厘米尺寸和损耗。工具把单片换成平方米，用房间面积乘以（1+损耗/100），再除以单片面积并向上取整。全程在浏览器标签页计算，数字不上传服务器。',
	tool_tile_formula_title: '计算公式与假设',
	tool_tile_formula_body: '片数由房间面积、单片面积和损耗共同决定：',
	tool_tile_formula_item_1: '房间面积 A：直接填 m²，或 长×宽（米）。',
	tool_tile_formula_item_2: '单片面积 a =（长 cm÷100）×（宽 cm÷100），单位 m²。',
	tool_tile_formula_item_3: '片数 = ceil(A × (1 + 损耗%÷100) ÷ a)。损耗默认 10%。',
	tool_tile_example_title: '示例',
	tool_tile_example:
		'示例：房间 12 m²，瓷砖 30×30 cm，损耗 10%。单片 0.09 m²。含损耗需铺面积 = 12×1.10 = 13.2 m²。片数 = ceil(13.2÷0.09) = ceil(146.666…) = 147。',
	tool_tile_usecases_title: '适合什么场景',
	tool_tile_usecase_1: '去建材店前，先估算卫生间或厨房地砖要买多少片。',
	tool_tile_usecase_2: '对照施工报价时，用面积和损耗做一轮粗算核对。',
	tool_tile_usecase_3: '换不同规格（如 30×30 与更大砖）时，快速看片数变化。',
	tool_tile_faq_q1: '为什么要向上取整？',
	tool_tile_faq_a1: '瓷砖不能按小数片购买。向上取整后，才方便按整箱采购并覆盖切割损耗。',
	tool_tile_faq_q2: '损耗百分比是什么意思？',
	tool_tile_faq_a2: '损耗是为切割、对花和破损预留的额外面积。默认 10%；斜铺或复杂图案通常要留更多。',
	tool_tile_faq_q3: '该填面积还是长×宽？',
	tool_tile_faq_a3: '两种都可以。已经知道平方米就填面积；手里只有房间长宽（米）就用长×宽。',
	tool_tile_faq_q4: '我的数据会上传吗？',
	tool_tile_faq_a4: '不会。计算在你本机浏览器里完成，数字不上传服务器。',
	tool_tile_references: 'NIST SP 811 单位换算；北美瓷砖协会（TCNA）铺贴与损耗规划指引。',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811（单位换算）',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default zh;
