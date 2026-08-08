/**
 * i18n tool shard (brand-color-token-pack / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_brand_color_token_pack_article:
    '输入一个品牌主色，即可得到 HEX/RGB/HSL/OKLCH、50–950 色阶、每档黑白文字对比建议，以及可复制的 CSS 变量或 JSON，全部在浏览器本地完成。',
  tool_brand_color_token_pack_bad_hex: '请输入有效的 3 位或 6 位 HEX 色值（如 #2563EB）。',
  tool_brand_color_token_pack_base_label: '主色',
  tool_brand_color_token_pack_clear: '清空',
  tool_brand_color_token_pack_contrast_col: '文字',
  tool_brand_color_token_pack_copy_css: '复制 CSS',
  tool_brand_color_token_pack_copy_done: '已复制',
  tool_brand_color_token_pack_copy_json: '复制 JSON',
  tool_brand_color_token_pack_desc:
    '一个主色 → HEX/RGB/HSL/OKLCH、50–950 色阶、对比配对、CSS 变量，本地处理。',
  tool_brand_color_token_pack_description:
    '在浏览器里从一个品牌主色生成完整 Token 包。步骤：选择主色（HEX 或取色器）→ 查看 HEX/RGB/HSL/OKLCH → 生成 50–950 色阶并为每档给出黑白文字对比建议 → 复制 CSS 变量或 JSON。打开即加载样例蓝色 #2563eb，不上传任何数据。',
  tool_brand_color_token_pack_empty: '请先生成色阶，再复制 CSS 或 JSON。',
  tool_brand_color_token_pack_example:
    '点击「样例」加载 #2563EB。色彩空间区显示主色的 HEX、RGB、HSL、OKLCH；色阶网格列出 50–950 各色块及推荐的黑/白文字与对比度。复制 CSS 可得到 :root { --color-50: …; … --color-950: …; }，可直接写入样式表。',
  tool_brand_color_token_pack_example_title: '示例',
  tool_brand_color_token_pack_faq_a1: '不会。色阶计算与导出都在本标签页本地完成，主色不会上传到服务器。',
  tool_brand_color_token_pack_faq_a2:
    '500 档等于你输入的主色。50–400 向白色线性混合变浅，600–950 向黑色线性混合变深，在 sRGB 空间混合以保持色相稳定。',
  tool_brand_color_token_pack_faq_a3:
    '每个色块会比较黑字与白字在该背景上的 WCAG 对比度，取更高的一方作为建议文字色，并标注比率及是否可能满足 AA 正文（4.5:1）或大字号 AA（3:1）。',
  tool_brand_color_token_pack_faq_a4:
    '复制 CSS 输出 :root 自定义属性（--color-50 至 --color-950）。复制 JSON 则提供相同色阶及主色多色彩空间写法，便于设计令牌或构建脚本使用。',
  tool_brand_color_token_pack_faq_a5:
    '此处为每档黑/白文字的快速建议。若要检验自定义前景/背景组合或精确 WCAG 等级，请打开 WCAG 对比度检查器并粘贴任意色块 HEX。',
  tool_brand_color_token_pack_faq_q1: '我的颜色会离开浏览器吗？',
  tool_brand_color_token_pack_faq_q2: '50–950 色阶是怎么生成的？',
  tool_brand_color_token_pack_faq_q3: '对比度列表示什么？',
  tool_brand_color_token_pack_faq_q4: '复制 CSS 和 JSON 各包含什么？',
  tool_brand_color_token_pack_faq_q5: '什么时候该用对比度检查器？',
  tool_brand_color_token_pack_generate: '生成',
  tool_brand_color_token_pack_how_body:
    '输入或选取一个品牌主色。页面展示 HEX、RGB、HSL、OKLCH，并生成 50–950 共 11 档色阶与 UI 预览。每档标注建议黑/白文字及对比度。满意后复制 CSS 变量或 JSON — 全程本地处理。',
  tool_brand_color_token_pack_how_title: '工作原理',
  tool_brand_color_token_pack_preview_label: 'UI 预览',
  tool_brand_color_token_pack_rules_body: '色阶规则、色彩空间、对比提示与隐私说明。',
  tool_brand_color_token_pack_rules_item_1:
    '500 档即主色。低于 500 向白色线性混合变浅，高于 500 向黑色线性混合变深（sRGB 线性混合）。',
  tool_brand_color_token_pack_rules_item_2:
    '主色区块同时列出 HEX、RGB、HSL、OKLCH。OKLCH 经 sRGB → 线性 → OKLab 转换，便于与现代 CSS 色语法对照。',
  tool_brand_color_token_pack_rules_item_3:
    '每档色块推荐黑字或白字 — 取在该背景上对比度更高者。比率按 WCAG 相对亮度计算；AA 标注仅为提示，非完整无障碍审计。',
  tool_brand_color_token_pack_rules_item_4: '隐私：生成、预览与复制均在本地完成，品牌色不会上传。',
  tool_brand_color_token_pack_rules_title: '使用须知',
  tool_brand_color_token_pack_sample: '样例',
  tool_brand_color_token_pack_scale_label: '色阶（50–950）',
  tool_brand_color_token_pack_spaces_label: '色彩空间（主色）',
  tool_brand_color_token_pack_text_on: '主色上的文字',
  tool_brand_color_token_pack_title: '品牌色色阶生成 — 一主色出 50–950 色板与 CSS 变量',
  tool_brand_color_token_pack_ui_body: '在主色背景上预览正文与建议文字色。',
  tool_brand_color_token_pack_ui_btn: '主要按钮',
  tool_brand_color_token_pack_ui_title: '预览标题',
  tool_brand_color_token_pack_usecase_1: '设计系统：从一个品牌 HEX 出发，输出统一 50–950 色阶与 CSS 变量供组件使用。',
  tool_brand_color_token_pack_usecase_2: '暗色模式规划：用浅档（50–300）做表面色，深档（700–950）辅助文字与品牌色搭配决策。',
  tool_brand_color_token_pack_usecase_3: '交付开发：复制 JSON 令牌或 CSS 自定义属性，避免从截图手工抄写 HEX。',
  tool_brand_color_token_pack_usecases_title: '适用场景',
};
export default zh;
