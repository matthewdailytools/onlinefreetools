/**
 * i18n tool shard (wcag-contrast-checker / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA 大号字',
  tool_wcag_contrast_checker_aa_normal: 'AA 普通字',
  tool_wcag_contrast_checker_aaa_large: 'AAA 大号字',
  tool_wcag_contrast_checker_aaa_normal: 'AAA 普通字',
  tool_wcag_contrast_checker_article:
    '基于相对亮度的 WCAG 对比度计算，普通/大号字 AA/AAA 判定、实时预览与配色建议，全在浏览器本地完成。',
  tool_wcag_contrast_checker_bad_hex: '请输入有效的 #RGB 或 #RRGGBB 十六进制色值。',
  tool_wcag_contrast_checker_bg_label: '背景色',
  tool_wcag_contrast_checker_check: '检测',
  tool_wcag_contrast_checker_clear: '清空',
  tool_wcag_contrast_checker_copy: '复制摘要',
  tool_wcag_contrast_checker_copy_done: '已复制',
  tool_wcag_contrast_checker_desc: '检测前景/背景对比度比率与 AA/AAA 是否达标，全程在浏览器本地完成。',
  tool_wcag_contrast_checker_description:
    '选择前景色与背景色，即时查看 WCAG 对比度比率及普通/大号字的 AA、AAA 通过情况。步骤：选色或输入 HEX → 点「检测」→ 查看比率与徽章 → 可交换颜色或采纳建议。示例：#767676 配 #ffffff 约 4.54:1，AA 普通字通过、AAA 普通字不通过。色值不上传。',
  tool_wcag_contrast_checker_empty: '请先完成一次检测，再复制。',
  tool_wcag_contrast_checker_example:
    '载入样例：前景 #767676、背景 #ffffff，比率约 4.54:1。AA 普通字通过（需 ≥4.5:1），AA 大号字通过（需 ≥3:1），AAA 普通字不通过（需 ≥7:1），AAA 大号字通过（需 ≥4.5:1）。交换前后景色可看到比率如何变化。',
  tool_wcag_contrast_checker_example_title: '示例',
  tool_wcag_contrast_checker_fail: '不通过',
  tool_wcag_contrast_checker_faq_a1:
    'AA 普通字至少 4.5:1；AA 大号字（18 pt 常规或 14 pt 粗体及以上）至少 3:1；AAA 普通字至少 7:1；AAA 大号字至少 4.5:1。本页一次显示四个徽章。',
  tool_wcag_contrast_checker_faq_a2:
    '大号字因字号更大，允许更低对比度。WCAG 规定：常规字 ≥18 pt（24 px），或粗体 ≥14 pt（约 18.66 px）即视为大号字。预览区同时展示大号与普通两行，便于对照。',
  tool_wcag_contrast_checker_faq_a3: '不会。对比度计算完全在浏览器本地进行，色值不会上传。',
  tool_wcag_contrast_checker_faq_a4:
    '当对比度低于 4.5:1 时，工具可能建议调深或调浅前景或背景，使 AA 普通字达标。建议色是向黑或白混合的近似值，供起步参考，未必符合品牌色规范。',
  tool_wcag_contrast_checker_faq_a5:
    '本页适合验证任意前景/背景配对。若需完整品牌色板与语义 token，可打开品牌色 token 工具；也可先用「从图片取色」采样再回来检测。',
  tool_wcag_contrast_checker_faq_q1: 'WCAG 对比度阈值是多少？',
  tool_wcag_contrast_checker_faq_q2: '什么算大号字？',
  tool_wcag_contrast_checker_faq_q3: '色值会上传吗？',
  tool_wcag_contrast_checker_faq_q4: '配色建议怎么用？',
  tool_wcag_contrast_checker_faq_q5: '和品牌色 token 工具有什么关系？',
  tool_wcag_contrast_checker_fg_label: '前景色',
  tool_wcag_contrast_checker_how_body:
    '用取色器或输入 HEX 设定前景与背景。页面将 sRGB 转为相对亮度，计算对比度比率，并显示 AA/AAA（普通/大号字）的通过/不通过。可交换前后景色、复制文字摘要，或在对比不足时查看建议色。',
  tool_wcag_contrast_checker_how_title: '怎么用',
  tool_wcag_contrast_checker_pass: '通过',
  tool_wcag_contrast_checker_preview_label: '实时预览',
  tool_wcag_contrast_checker_preview_large: '大号字样例',
  tool_wcag_contrast_checker_preview_normal: '普通字样例',
  tool_wcag_contrast_checker_ratio_label: '对比度比率',
  tool_wcag_contrast_checker_rules_body: 'WCAG 对比度基于相对亮度，而非色相本身。比率异常时可对照下列规则。',
  tool_wcag_contrast_checker_rules_item_1:
    '相对亮度 L 由 sRGB 通道经 WCAG 线性化公式得出。对比度 = (较亮 L + 0.05) / (较暗 L + 0.05)。',
  tool_wcag_contrast_checker_rules_item_2:
    '阈值：AA 普通字 4.5:1，AA 大号字 3:1，AAA 普通字 7:1，AAA 大号字 4.5:1。同一比率对应本页四个徽章。',
  tool_wcag_contrast_checker_rules_item_3:
    '本页仅支持不透明 sRGB HEX（#RGB 或 #RRGGBB）。非法 HEX 会提示错误；前景与背景相同时比率为 1:1，各级均不通过。',
  tool_wcag_contrast_checker_rules_item_4: '隐私：色值仅在当前标签页本地计算，不会发送到服务器。',
  tool_wcag_contrast_checker_rules_title: '规则说明',
  tool_wcag_contrast_checker_sample: '样例',
  tool_wcag_contrast_checker_suggest_bg: '可尝试背景 {hex} 配当前前景，使 AA 普通字达标。',
  tool_wcag_contrast_checker_suggest_fg: '可尝试前景 {hex} 配当前背景，使 AA 普通字达标。',
  tool_wcag_contrast_checker_suggest_label: '配色建议',
  tool_wcag_contrast_checker_suggest_none: '已满足 AA 普通字要求（4.5:1）。',
  tool_wcag_contrast_checker_swap: '交换',
  tool_wcag_contrast_checker_title: 'WCAG 对比度检测 — AA/AAA 比率在线算',
  tool_wcag_contrast_checker_usecase_1: '界面设计：交付前核对正文、标签与品牌背景色的对比是否达标。',
  tool_wcag_contrast_checker_usecase_2: '按钮与标签：检查白字配彩色底或彩色字配白底是否满足 AA 普通/大号字。',
  tool_wcag_contrast_checker_usecase_3: '暗色模式：交换浅/深背景，确认次要文字仍达 4.5:1 或大号字 3:1。',
  tool_wcag_contrast_checker_usecases_title: '适用场景',
};
export default zh;
