/**
 * i18n tool shard (svg-optimizer / zh).
 * H1 方向：SVG 优化器 / 压缩 SVG。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文文案键表。 */
const zh: SiteLangDict = {
	tool_svg_optimizer_article:
		'粘贴或拖入 SVG，用选项芯片清理文本，即时查看体积对比与预览。灵感来自 SVGOMG，全程在浏览器完成——文件留在本机，不上传服务器。',
	tool_svg_optimizer_choose_file: '选择 SVG 文件',
	tool_svg_optimizer_clear: '清空',
	tool_svg_optimizer_copy: '复制',
	tool_svg_optimizer_desc:
		'浏览器内压缩 SVG，看字节节省与预览；文件留在设备、不上传服务器。',
	tool_svg_optimizer_description:
		'SVG 优化器：粘贴或拖放 SVG，勾选清理选项，对比优化前后字节并预览。示例：进页自动加载带注释的样例图标，去掉注释与编辑器元数据后体积更小。可复制或下载结果。文件留在设备、不上传服务器。这是浏览器轻量清理，不是完整 SVGO 命令行工具。',
	tool_svg_optimizer_download: '下载',
	tool_svg_optimizer_drop_hint: '也可把 .svg 拖到这里。优化在本标签页完成。',
	tool_svg_optimizer_empty: '请先粘贴 SVG 或选择文件。',
	tool_svg_optimizer_err_not_svg: '看起来不像 SVG。请粘贴包含 <svg> 根元素的 markup。',
	tool_svg_optimizer_example:
		'加载示例会插入带 XML 注释、Inkscape 命名空间、多余空白和长小数的图标。选项全开时字节减少，预览图标不变。',
	tool_svg_optimizer_example_title: '示例',
	tool_svg_optimizer_faq_a1:
		'不会。SVG 在本标签页读取并优化，不会 POST 到我们的服务器。可在 DevTools 网络面板确认。',
	tool_svg_optimizer_faq_a2:
		'本页走轻量文本管线（注释、元数据、空白、小数、空组）。完整 SVGO 插件更多，需要 CLI 深度时用 SVGO。',
	tool_svg_optimizer_faq_a3:
		'去注释：删 <!-- … -->。去编辑器元数据：删 Inkscape/Sketch 等 xmlns 与属性及 <metadata>。折叠空白：合并标签间空格。小数取整：路径坐标保留两位。去空组：删 bare <g></g> 并整理属性空格。',
	tool_svg_optimizer_faq_a4:
		'预览仅把优化后的 SVG 作为图片显示，不会把 markup 注入页面 DOM。',
	tool_svg_optimizer_faq_q1: 'SVG 会上传吗？',
	tool_svg_optimizer_faq_q2: '和 SVGO / SVGOMG 有什么区别？',
	tool_svg_optimizer_faq_q3: '各选项芯片做什么？',
	tool_svg_optimizer_faq_q4: '预览安全吗？',
	tool_svg_optimizer_how_body:
		'粘贴或拖入 SVG，按需开关清理芯片，看原始/优化字节与预览，再复制或下载。全程在浏览器本地完成。',
	tool_svg_optimizer_how_item_1: '粘贴 SVG 或拖入 .svg 文件。',
	tool_svg_optimizer_how_item_2: '开关选项：注释、编辑器元数据、空白、小数、空组。',
	tool_svg_optimizer_how_item_3: '查看原始字节、优化后字节与节省百分比。',
	tool_svg_optimizer_how_item_4: '确认预览后复制或下载 optimized.svg。',
	tool_svg_optimizer_how_title: '怎么用',
	tool_svg_optimizer_input_label: 'SVG 输入',
	tool_svg_optimizer_input_ph: '在此粘贴 <svg>…</svg>…',
	tool_svg_optimizer_load_sample: '加载示例',
	tool_svg_optimizer_opt_collapse_whitespace: '折叠标签间空白',
	tool_svg_optimizer_opt_round_numbers: '路径数字保留 2 位小数',
	tool_svg_optimizer_opt_strip_comments: '移除 XML/HTML 注释',
	tool_svg_optimizer_opt_strip_empty: '移除空 <g> 并整理属性空格',
	tool_svg_optimizer_opt_strip_metadata: '去掉编辑器元数据（Inkscape、Sketch 等）',
	tool_svg_optimizer_optimize: '优化',
	tool_svg_optimizer_options_label: '选项',
	tool_svg_optimizer_output_label: '优化后的 SVG',
	tool_svg_optimizer_preview_label: '预览',
	tool_svg_optimizer_rules_body:
		'浏览器 SVG 清理用即时反馈换完整度。出库前可按此核对。',
	tool_svg_optimizer_rules_item_1:
		'生产图标可安全去掉注释与编辑器命名空间，通常不影响渲染。',
	tool_svg_optimizer_rules_item_2:
		'坐标取整能缩小路径，可能微移描边——提交前先看预览。',
	tool_svg_optimizer_rules_item_3:
		'空组清理适合 Sketch/Figma 导出；带 id/class/transform 的组会保留。',
	tool_svg_optimizer_rules_item_4:
		'还要压栅格图？可配合图片优化器处理 PNG/WebP——这里保持矢量。',
	tool_svg_optimizer_rules_title: '使用须知',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: '优化后',
	tool_svg_optimizer_size_original: '原始',
	tool_svg_optimizer_size_saved: '节省',
	tool_svg_optimizer_stats_tpl: '原始 {orig} B → 优化后 {opt} B（省 {pct}%）',
	tool_svg_optimizer_status_copied: '已复制到剪贴板。',
	tool_svg_optimizer_status_done: '已优化——请核对字节与预览。',
	tool_svg_optimizer_title: 'SVG 优化器',
	tool_svg_optimizer_usecase_1: 'Sketch 或 Inkscape 导出的图标入库前先压缩体积。',
	tool_svg_optimizer_usecase_2: '清理落地页内联 SVG，免装 SVGO 也能看字节对比。',
	tool_svg_optimizer_usecase_3: '设计稿交接时去掉注释与元数据，预览保持一致。',
	tool_svg_optimizer_usecases_title: '适用场景',
};

export default zh;
