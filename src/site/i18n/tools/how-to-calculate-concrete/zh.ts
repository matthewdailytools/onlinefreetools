/**
 * i18n tool shard (how-to-calculate-concrete / zh).
 * 中文独立重写：检索向「混凝土计算器 / 方量」，非英模直译。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_concrete_title: '混凝土计算器 — 如何估算混凝土方量',
	tool_concrete_description:
		'按板、柱或圆柱尺寸估算混凝土体积（立方米或立方英尺）。示例：长 5 m、宽 4 m、厚 0.1 m 的板 → 2.0 m³。可选袋数按每袋 0.015 m³（英制 0.45 ft³）估算，页面会写明该假设。计算在浏览器内完成，数据留在本机、不上传服务器，适合装修与小施工粗算方量。',
	tool_concrete_article:
		'用简单几何估算浇筑方量：选板、矩形柱或圆柱，输入正数尺寸（米或英尺），得到立方米或立方英尺。袋数可选，并依赖下方写明的袋容积假设，便于先粗算再找商混或袋装料。',
	tool_concrete_calculate: '计算',
	tool_concrete_sample: '加载样例',
	tool_concrete_clear: '清空',
	tool_concrete_shape_label: '形状',
	tool_concrete_shape_slab: '板',
	tool_concrete_shape_column: '柱',
	tool_concrete_shape_cylinder: '圆柱',
	tool_concrete_unit_label: '单位',
	tool_concrete_unit_m: '米 (m)',
	tool_concrete_unit_ft: '英尺 (ft)',
	tool_concrete_length_label: '长',
	tool_concrete_width_label: '宽',
	tool_concrete_thickness_label: '厚',
	tool_concrete_height_label: '高',
	tool_concrete_diameter_label: '直径',
	tool_concrete_length_ph: '例如 5',
	tool_concrete_width_ph: '例如 4',
	tool_concrete_thickness_ph: '例如 0.1',
	tool_concrete_height_ph: '例如 2.4',
	tool_concrete_diameter_ph: '例如 0.3',
	tool_concrete_bags_check: '估算袋数（可选）',
	tool_concrete_result_volume: '体积',
	tool_concrete_result_bags: '约需袋数',
	tool_concrete_bags_note:
		'袋容积假设：公制每袋 0.015 m³，英制每袋 0.45 ft³。实际袋装规格因品牌与配比而异，请向上取整并向供应商确认。',
	tool_concrete_err_dims: '请为每个尺寸填入大于 0 的数字。',
	tool_concrete_how_title: '怎么用',
	tool_concrete_how_body:
		'先选形状和单位，再填该形状对应的尺寸。板与矩形柱用长×宽×厚（柱为高），圆柱用直径与高按 πr²h 计算。需要时可按页面写明的袋容积做袋数估算。全程在浏览器标签页内运算，数字不出本机、不上传服务器。',
	tool_concrete_formula_title: '公式与假设',
	tool_concrete_formula_body: '体积按封闭几何体计算，请记住：',
	tool_concrete_formula_item_1: '板：V = 长 × 宽 × 厚。',
	tool_concrete_formula_item_2: '矩形柱：V = 长 × 宽 × 高。',
	tool_concrete_formula_item_3:
		'圆柱：V = π × (直径÷2)² × 高。袋数 ≈ ceil(V ÷ 袋容积)，袋容积取 0.015 m³ 或 0.45 ft³。',
	tool_concrete_example_title: '示例',
	tool_concrete_example:
		'示例（板、米制）：长 5 m、宽 4 m、厚 0.1 m → V = 5 × 4 × 0.1 = 2.0 m³。按每袋 0.015 m³ 估算，袋数 ≈ ceil(2.0 ÷ 0.015) = 134。',
	tool_concrete_usecases_title: '适合什么场景',
	tool_concrete_usecase_1: '院子或车库板浇筑前，先粗算方量再联系商混。',
	tool_concrete_usecase_2: '围栏柱脚、小圆柱基础用袋装混凝土时估算袋数。',
	tool_concrete_usecase_3: '用简单长宽厚核对施工报价是否合理。',
	tool_concrete_faq_q1: '板模式用什么公式？',
	tool_concrete_faq_a1: '板体积 = 长 × 宽 × 厚（所选单位）。默认样例 5 × 4 × 0.1 m 等于 2.0 m³。',
	tool_concrete_faq_q2: '袋数怎么算？',
	tool_concrete_faq_a2:
		'勾选袋数后，袋数 = ceil(体积 ÷ 袋容积)。公制按每袋 0.015 m³，英制按 0.45 ft³。这是规划假设，不是某品牌袋标。',
	tool_concrete_faq_q3: '圆柱要填半径还是直径？',
	tool_concrete_faq_a3: '填外径。工具内部用直径÷2 作为半径，再按 V = π r² h 计算。',
	tool_concrete_faq_q4: '数据会上传到服务器吗？',
	tool_concrete_faq_a4: '不会。尺寸在浏览器本机计算，不上传服务器。',
	tool_concrete_references: 'NIST SP 811 单位换算；波特兰水泥协会混凝土入门资料。',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811（单位换算）',
	tool_concrete_ref_pca_label: '波特兰水泥协会 — 了解混凝土',
};

export default zh;
