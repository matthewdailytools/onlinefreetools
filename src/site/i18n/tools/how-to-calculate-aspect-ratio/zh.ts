/**
 * i18n tool shard (how-to-calculate-aspect-ratio / zh).
 * 中文独立重写：检索向「宽高比计算器 / 缩放比例」，非英模直译。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_aspect_ratio_title: '宽高比计算器 — 如何计算与缩放比例',
	tool_aspect_ratio_description:
		'输入宽和高，快速得到最简宽高比，并可按目标宽度或高度等比缩放另一边。16:9、4:3、1:1 作为页面内预设选项，不另开页面。示例：1920×1080 → 16:9；目标宽 1280 → 高 720。计算在浏览器内完成，数字留在本机、不上传服务器，适合视频导出、设计画布和页面视口定尺寸。',
	tool_aspect_ratio_article:
		'用最大公约数把像素或边长化简成宽:高，再在保持比例的前提下换目标宽或高。适合导出视频帧、做设计稿和写前端视口规格。',
	tool_aspect_ratio_calculate: '计算',
	tool_aspect_ratio_sample: '加载样例',
	tool_aspect_ratio_clear: '清空',
	tool_aspect_ratio_preset_label: '预设（可选）',
	tool_aspect_ratio_preset_custom: '自定义',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: '宽度',
	tool_aspect_ratio_h_label: '高度',
	tool_aspect_ratio_w_ph: '例如 1920',
	tool_aspect_ratio_h_ph: '例如 1080',
	tool_aspect_ratio_scale_mode_label: '缩放依据',
	tool_aspect_ratio_scale_by_w: '目标宽度',
	tool_aspect_ratio_scale_by_h: '目标高度',
	tool_aspect_ratio_target_w_label: '目标宽度',
	tool_aspect_ratio_target_h_label: '目标高度',
	tool_aspect_ratio_target_w_ph: '例如 1280',
	tool_aspect_ratio_target_h_ph: '例如 720',
	tool_aspect_ratio_result_ratio: '宽高比',
	tool_aspect_ratio_result_scaled: '缩放后尺寸',
	tool_aspect_ratio_err_input: '请填写大于 0 的宽和高，以及用于缩放的目标边长。',
	tool_aspect_ratio_how_title: '怎么用',
	tool_aspect_ratio_how_body:
		'填入宽和高，或选用 16:9 / 4:3 / 1:1 预设填入常见像素。工具用最大公约数化简比例，再按你设的目标宽或高求出另一边。全程在浏览器标签页内计算，数字不上传服务器。',
	tool_aspect_ratio_formula_title: '公式与假设',
	tool_aspect_ratio_formula_body: '化简比例与等比缩放基于输入对的最大公约数：',
	tool_aspect_ratio_formula_item_1: '令 g = gcd(round(W), round(H))，最简比 = (W÷g):(H÷g)。',
	tool_aspect_ratio_formula_item_2: '按宽缩放：H′ = 目标宽 × H ÷ W；按高缩放：W′ = 目标高 × W ÷ H。',
	tool_aspect_ratio_formula_item_3: '预设只填充样例尺寸（16:9→1920×1080，4:3→1600×1200，1:1→1080×1080），不是独立页面。',
	tool_aspect_ratio_example_title: '示例',
	tool_aspect_ratio_example:
		'示例：宽 1920、高 1080。gcd(1920,1080)=120，比例为 16:9。目标宽改为 1280 时，高 = 1280 × 1080 ÷ 1920 = 720。',
	tool_aspect_ratio_usecases_title: '适合什么场景',
	tool_aspect_ratio_usecase_1: '导出视频时保持 16:9，避免画面被拉扁。',
	tool_aspect_ratio_usecase_2: '设计稿对齐手机或显示器比例后再导出素材。',
	tool_aspect_ratio_usecase_3: '把已知分辨率写成短比例标签，方便写进规格或 CSS。',
	tool_aspect_ratio_faq_q1: '比例是怎么化简的？',
	tool_aspect_ratio_faq_a1: '先把宽高四舍五入成整数，再除以最大公约数；例如 1920×1080 会得到 16:9。',
	tool_aspect_ratio_faq_q2: '为什么 16:9、4:3、1:1 只做预设？',
	tool_aspect_ratio_faq_a2: '这些是常用起点。放在同一页选项里，就不必为每种比例再做几乎同一个计算器。',
	tool_aspect_ratio_faq_q3: '可以按高度反算宽度吗？',
	tool_aspect_ratio_faq_a3: '可以。把「缩放依据」切到目标高度，工具会在保持同一比例下求出宽度。',
	tool_aspect_ratio_faq_q4: '数字会上传吗？',
	tool_aspect_ratio_faq_a4: '不会。尺寸在你的浏览器本机计算，不上传到服务器。',
	tool_aspect_ratio_references: 'NIST SP 811 长度与单位换算说明，便于把像素尺寸与物理长度对照理解。',
	tool_aspect_ratio_ref_nist_label: 'NIST — 特别出版物 811（单位换算）',
};

export default zh;
