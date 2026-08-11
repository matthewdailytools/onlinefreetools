/**
 * i18n tool shard (meta-serp-preview / zh).
 * Chinese locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_serp_home_title: 'Google 搜索结果预览',
	tool_serp_home_desc: '标题被截断会白白损失搜索点击——发布前先看截断效果。',
	tool_serp_title: 'Google 搜索结果预览 — 查看标题与描述截断效果',
	tool_serp_description:
		'标题被截断会白白损失搜索点击。粘贴标题与描述，预览 Google 桌面与移动结果的截断位置，并查看字符数与像素宽度提示。全程在浏览器内完成，内容不上传服务器。步骤清晰，含示例说明。隐私友好，正文不上传。。。。。。。。。。。。。。。。。。。。',
	tool_serp_preview: '预览',
	tool_serp_sample: '加载样例',
	tool_serp_clear: '清空',
	tool_serp_copy: '复制',
	tool_serp_copied: '已复制',
	tool_serp_title_label: '标题',
	tool_serp_title_ph: '搜索结果里显示的页面标题',
	tool_serp_desc_label: 'Meta 描述',
	tool_serp_desc_ph: '结果标题下方的摘要文字',
	tool_serp_url_label: '网址（可选）',
	tool_serp_url_ph: '例如 https://example.com/page',
	tool_serp_compare_label: '与第二个标题对比',
	tool_serp_title_b_label: '标题 B',
	tool_serp_title_b_ph: '粘贴备选标题进行对比',
	tool_serp_desktop: '桌面端预览',
	tool_serp_mobile: '移动端预览',
	tool_serp_char_count: '{n} 个字符',
	tool_serp_px_width: '约 {n}px',
	tool_serp_cut_warning: '已截断 — 本行超出约 {limit}px 视口',
	tool_serp_fit: '在视口内放得下',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: '请先填写标题再预览。',
	tool_serp_how_title: '怎么用',
	tool_serp_how_body:
		'输入或粘贴标题、描述与可选网址。工具用浏览器字体宽度近似估算每一行占多少字符与多少像素（中文等宽字按约 1em、半角字母数字按约 0.55em 计算），再画出一套桌面与一套移动端的 Google 风格摘要。超出估算视口宽度的行会显示截断标记。',
	tool_serp_rules_title: '预览展示什么',
	tool_serp_rules_body:
		'像素上限是近似值。Google 按渲染后的宽度截断，而不是字符数，所以密集语言与宽字符会在更少的字符数时被截断。',
	tool_serp_rules_item_1: '桌面端标题上限按约 600px 估算，移动端约 460px；超出会显示截断标记。',
	tool_serp_rules_item_2: '描述按约两行估算（桌面每行约 600px、移动端约 460px）。',
	tool_serp_rules_item_3: '字形宽度按近似估算：英文半角约半个 em、中文约一个 em、emoji 更宽。',
	tool_serp_rules_item_4: '以上只是规划用的估算。Google 可能改写标题或描述，真实渲染取决于搜索者的字体与视口。',
	tool_serp_example_title: '示例',
	tool_serp_example:
		'样例：标题「Meta SERP Preview — How to Preview Google Title & Description Truncation Online」、约两行描述、网址 example.com/page → 桌面端标题约在第 57 个字符处截断并显示「…」，移动端更早截断；描述保持在两行内。',
	tool_serp_usecases_title: '适合什么场景',
	tool_serp_usecase_1: '发布前：粘贴最终标题与描述，确认关键词语没有在像素截断里被切掉。',
	tool_serp_usecase_2: '并排对比两个候选标题，选一个在移动端仍能保住主关键词的。',
	tool_serp_usecase_3: '中文页面：确认多少个汉字会被截断——宽字符会更快碰到像素上限。',
	tool_serp_faq_q1: '为什么 30 个汉字标题会比 60 个英文字母先截断？',
	tool_serp_faq_a1: '搜索结果按渲染像素宽截断，不是按字符数。汉字约一个 em 宽，而英文字母平均约半个 em，所以更少的字符就会占满同一个视口。',
	tool_serp_faq_q2: '像素上限是精确的吗？',
	tool_serp_faq_a2: '不是。桌面与移动端视口随设备与字体变化。本工具用常见的约 600px 桌面、约 460px 移动端标题上限做规划估算，不保证 Google 会如何渲染你的页面。',
	tool_serp_faq_q3: '和 Search Console 的移动预览一致吗？',
	tool_serp_faq_a3: '这是同一方向上的本地估算。要看最终效果，请在 Search Console 的网址检查或富结果测试里打开你的在线页面，那会按 Google 的真实环境渲染。',
	tool_serp_faq_q4: '标题会被上传到任何地方吗？',
	tool_serp_faq_a4: '不会。所有文字都留在浏览器标签页里，绝不发送到服务器。关闭标签页后一切即消失。',
	tool_serp_references: 'Google Search Central — 控制搜索结果中的标题；Google Search Central — 控制摘要。',
	tool_serp_ref_title_label: 'Search Central — 控制搜索结果标题',
	tool_serp_ref_snippet_label: 'Search Central — 控制摘要',
};

export default zh;
