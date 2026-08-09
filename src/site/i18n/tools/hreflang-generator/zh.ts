/**
 * i18n tool shard (hreflang-generator / zh).
 * 简体中文 — 面向本地检索习惯的独立改写。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_hreflang_home_title: 'hreflang 标签生成器',
	tool_hreflang_home_desc:
		'告诉 Google 每个语言版本的页面该展示给谁——把各语言页面 URL 转成 hreflang 标签、HTTP Link 响应头与 sitemap 标记，全部在浏览器本地完成。',
	tool_hreflang_title: 'hreflang 标签生成器 — 为多语网站生成语言标注',
	tool_hreflang_description:
		'没有 hreflang，Google 可能把译文页面当成重复内容，并把错误语言的版本展示给用户。把一组语言版本 URL 转成三种形态的 hreflang 标注：<link> 标签、HTTP Link 响应头和 sitemap <xhtml:link>。用法：逐行粘贴语言码与 URL，选择输出形态，复制生成的代码。每个 URL 都会自动生成指向自身的自引用标注，还可以加上可选的 x-default 兜底页。全程在本地运行，不上传任何数据。示例：同一页面的 en、es、ja 三个语言版本。',
	tool_hreflang_input_label: '语言版本 URL 列表',
	tool_hreflang_input_ph:
		'每行一对：语言码 + URL。示例：\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'每行格式为「语言码 URL」或「URL 语言码」。语言码使用 BCP 47 形式，如 en、en-US 或 zh-Hans。',
	tool_hreflang_xdefault_label: 'x-default 兜底 URL',
	tool_hreflang_xdefault_none: '— 不添加 x-default —',
	tool_hreflang_xdefault_hint:
		'可选。x-default 告诉 Google 当访客语言无法匹配时展示哪个版本，适合英文首页或根页面。',
	tool_hreflang_generate: '生成',
	tool_hreflang_sample: '加载样例',
	tool_hreflang_clear: '清空',
	tool_hreflang_copy: '复制',
	tool_hreflang_copied: '已复制',
	tool_hreflang_error_prefix: '错误：',
	tool_hreflang_url_protocol: '有 URL 缺少协议，已自动补上 https://。',
	tool_hreflang_lang_invalid: '语言码无效：{lang}。请使用 BCP 47 形式，如 en、en-US 或 zh-Hans。',
	tool_hreflang_no_valid_rows: '没有有效行。请至少添加一组语言码和 URL。',
	tool_hreflang_output_label: '生成的标记',
	tool_hreflang_tab_link: '<link> 标签',
	tool_hreflang_tab_http: 'HTTP Link 响应头',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: '工作原理',
	tool_hreflang_how_body:
		'生成器逐行解析语言码与 URL，然后把同一组对应关系渲染成三种形态。<link> 形态放在每个页面的 <head> 中；HTTP Link 响应头形态由服务器在响应时返回；sitemap 形态在每个 <url> 块内嵌入 <xhtml:link>。每个 URL 都会生成指向自身的自引用标注，保证各语言版本互相指回，可选的 x-default 则覆盖未列出的语言访客。',
	tool_hreflang_rules_title: '生成器遵循的规则',
	tool_hreflang_rules_body: '以下规则来自 Google Search Central 与 BCP 47 语言标签标准。',
	tool_hreflang_rules_item_1:
		'每个语言版本都必须包含指向自身 URL 的自引用 hreflang。遗漏会削弱标注信号。',
	tool_hreflang_rules_item_2:
		'每个 URL 都要在任意一个语言版本中被完整列出：每个页面都应有完整的替代版本集合，而不是只标注单向关系。',
	tool_hreflang_rules_item_3:
		'语言码遵循 BCP 47：两位字母语言，可带地区（en-US）或文字（zh-Hans）。x-default 是特殊的兜底码。',
	tool_hreflang_rules_item_4:
		'x-default 指向没有列出的语言匹配时的展示页，通常是英文根页面。Google 会把它作为所有未识别语言的兜底。',
	tool_hreflang_rules_item_5:
		'同一组页面只选一种投放形态：HTML 中的 <link> 标签、HTTP Link 响应头或 sitemap 的 xhtml:link。混用可能让信号互相矛盾。',
	tool_hreflang_example_title: '示例',
	tool_hreflang_example:
		'样例列出了同一页面的三个版本：https://example.com/（en）、https://example.com/es/（es）和 https://example.com/ja/（ja）。生成的 <link> 标签为每种语言都带自引用，还可选 x-default 指向英文根页面。',
	tool_hreflang_usecases_title: '适用场景',
	tool_hreflang_usecase_1:
		'多语站点上线：为每个模板一次性生成 <link> 标签，并核对每个语言版本都列出完整集合。',
	tool_hreflang_usecase_2:
		'网站改版后重新生成标注，让 URL 对应关系在各语言间保持一致，而不是逐渐走样。',
	tool_hreflang_usecase_3:
		'搜索结果出现错误语言时，检查自引用与 x-default 是否存在，并确认 URL 指向规范化页面。',
	tool_hreflang_faq_q1: '三种形态该怎么选？',
	tool_hreflang_faq_a1:
		'能改页面 HTML 就用 <link> 标签。页面由自己控制的服务器返回、又难以改动 HTML 时用 HTTP Link 响应头。想统一放在 XML sitemap 里就用 sitemap 形态。',
	tool_hreflang_faq_q2: '什么时候该加 x-default？',
	tool_hreflang_faq_a2:
		'当访客语言与所有已列语言码都不匹配时，x-default 告诉 Google 展示哪个版本。有根页面或兜底页面（通常是英文）时就应加上。',
	tool_hreflang_faq_q3: '每个 URL 都需要自引用吗？',
	tool_hreflang_faq_a3:
		'需要。每个语言版本都必须把自身 URL 列入集合，并用自引用 hreflang 指回自己。Google 依据完整集合为每种语言挑选正确页面。',
	tool_hreflang_faq_q4: '什么语言码格式才是有效的？',
	tool_hreflang_faq_a4:
		'BCP 47 格式：两位或三位字母语言，可带地区（en-US）与文字（zh-Hans）。语言用小写，不要自造像 en-us-en 这样的编码。',
	tool_hreflang_faq_q5: 'hreflang 应放在 <head> 里还是 sitemap 里？',
	tool_hreflang_faq_a5:
		'两种都可以，但同一组页面要选择一致的一种。放在 <head> 用 <link> 标签，服务器返回用 HTTP Link 响应头，sitemap 则使用 xhtml:link 块。',
	tool_hreflang_faq_q6: '我的 URL 会被上传到别处吗？',
	tool_hreflang_faq_a6: '不会。生成器完全在浏览器本地运行，不上传任何数据。',
	tool_hreflang_references: 'Google Search Central — 本地化版本（hreflang）；BCP 47 语言标签。',
	tool_hreflang_ref_searchcentral_label: 'Search Central — 本地化版本（hreflang）',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — 语言标识标签',
};

export default zh;
