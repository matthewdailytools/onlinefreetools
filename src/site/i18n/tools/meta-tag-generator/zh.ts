/**
 * i18n tool shard (meta-tag-generator / zh).
 * 简体中文 — 面向本地检索习惯的独立改写。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_meta_home_title: 'Meta 标签生成器',
	tool_meta_home_desc:
		'写出能在搜索中带来点击的标题、描述、canonical 与 Open Graph 标签——在浏览器中一键生成完整的网页头部。',
	tool_meta_title: 'Meta 标签生成器 — 一键生成完整的网页头部标签',
	tool_meta_description:
		'标题与 meta 描述就是用户在 Google 里看到的名片，canonical 配错还会让排名分散到重复网址。填写标题、描述、canonical、robots 与 Open Graph 字段，一键生成可直接粘贴到 <head> 的 meta 标签。用法：填入字段，查看长度提示，复制生成好的 HTML，特殊字符（如 & 和 <）会自动转义，保证标签不会损坏。全程在本地运行，不上传任何数据。示例：canonical 与 og 标签同页并存。',
	tool_meta_title_label: 'Meta 标题',
	tool_meta_title_ph: 'Meta 标签生成器 — 一键生成完整的网页头部标签',
	tool_meta_title_hint: '建议控制在 60 字以内。超长的标题可能会被搜索引擎改写。',
	tool_meta_desc_label: 'Meta 描述',
	tool_meta_desc_ph: '填写标题、描述、canonical、robots 与 OG 字段，生成带长度提示与转义的头部标签。',
	tool_meta_desc_hint: '建议控制在 155–160 字以内。更长的内容可能在搜索结果中被截断。',
	tool_meta_canonical_label: 'Canonical URL',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: '本页的规范地址。请填写包含协议的完整 URL。',
	tool_meta_robots_label: 'Robots meta',
	tool_meta_robots_none: '— 不添加 robots meta —',
	tool_meta_robots_index_follow: 'index, follow（默认，允许搜索引擎收录）',
	tool_meta_robots_noindex_follow: 'noindex, follow（不进结果页，继续跟踪链接）',
	tool_meta_robots_index_nofollow: 'index, nofollow（允许收录，不跟踪链接）',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow（不收录也不跟踪链接）',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image（完整 URL）',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: '生成',
	tool_meta_sample: '加载样例',
	tool_meta_clear: '清空',
	tool_meta_copy: '复制',
	tool_meta_copied: '已复制',
	tool_meta_error_prefix: '错误：',
	tool_meta_canonical_protocol: 'canonical URL 缺少协议 — 请补上 https:// 或 http://，否则搜索引擎无法识别。',
	tool_meta_title_len: '标题：{n} 个字符',
	tool_meta_title_len_warn: '标题：{n} 个字符 — 超过 60，建议精简。',
	tool_meta_desc_len: '描述：{n} 个字符',
	tool_meta_desc_len_warn: '描述：{n} 个字符 — 超过 160，可能会被截断。',
	tool_meta_output_label: '生成的头部代码',
	tool_meta_how_title: '工作原理',
	tool_meta_how_body:
		'生成器把你填写的字段拼成对应的头部标签。空的选填字段会被跳过，所以输出里只有你填过的内容。每个值都会做 HTML 转义：& 变成 &amp;，< 变成 &lt;，保证标签在页面里始终合法。长度提示会在标题或描述超过常用上限时提醒你，但不会截断你的文字。',
	tool_meta_rules_title: '生成器遵循的规则',
	tool_meta_rules_body: '以下规则来自 Google Search Central 关于 meta 标签、标题链接与 canonical 的说明。',
	tool_meta_rules_item_1:
		'meta 标题与描述是建议而非指令：搜索引擎可能改写或截断它们，所以标题建议 60 字、描述建议 155–160 字。',
	tool_meta_rules_item_2:
		'所有值都会做 HTML 转义：& < > " 和 \' 转成实体，标题或描述里的特殊字符不会破坏标签结构。',
	tool_meta_rules_item_3:
		'canonical URL 应该是带协议的完整绝对地址。相对路径或缺协议的 URL 不能作为 canonical 目标。',
	tool_meta_rules_item_4:
		'robots meta 使用 index/noindex 与 follow/nofollow。缺省时搜索引擎采用自己的默认行为：收录并跟踪。',
	tool_meta_rules_item_5:
		'canonical 与 Open Graph 标签可以同页并存：og:url 应与 canonical URL 一致，让社交分享指向同一地址。',
	tool_meta_example_title: '示例',
	tool_meta_example:
		'样例填入了标题、描述、canonical、robots 和三个 Open Graph 字段。生成的代码输出 <title> 标签、meta description、canonical 链接、robots meta 以及已填写的 og: 标签。',
	tool_meta_usecases_title: '适用场景',
	tool_meta_usecase_1:
		'搭建新页面模板：一次性生成头部代码，核对长度提示后粘贴进模板再上线。',
	tool_meta_usecase_2:
		'给客户交付页面：生成带 canonical 与 OG 字段的完整头部代码，直接粘进 CMS。',
	tool_meta_usecase_3:
		'发布前生成标签，并与搜索结果预览比对，确保标题和描述与页面实际内容一致。',
	tool_meta_faq_q1: 'robots meta 各值是什么意思？',
	tool_meta_faq_a1:
		'index 让搜索引擎把页面收录进结果，noindex 则不收录。follow 允许抓取页面上的链接，nofollow 表示不要跟踪。不写该标签时默认是 index, follow。',
	tool_meta_faq_q2: '我填的特殊字符会被转义吗？',
	tool_meta_faq_a2:
		'会。生成器会把 & < > " 和 \' 转义成实体：& 变成 &amp;，< 变成 &lt;。即使值里含有类似标签的字符，输出也始终合法。',
	tool_meta_faq_q3: 'canonical 和 Open Graph 标签能并存吗？',
	tool_meta_faq_a3:
		'能，它们服务不同系统。canonical 链接告诉搜索引擎首选地址，og: 标签描述页面的社交分享信息。建议让 og:url 与 canonical URL 保持一致。',
	tool_meta_faq_q4: '标题和描述多长合适？',
	tool_meta_faq_a4:
		'常用经验值是标题约 60 字、描述 155–160 字。这些只是建议：搜索引擎可能改写或截断更长的内容。',
	tool_meta_faq_q5: '空字段会怎样？',
	tool_meta_faq_a5: '空的选填字段会被跳过，所以生成的代码里只包含你填过的字段对应的标签。',
	tool_meta_faq_q6: '我的数据会被上传到别处吗？',
	tool_meta_faq_a6: '不会。生成器完全在浏览器本地运行，不上传任何数据。',
	tool_meta_references: 'Google Search Central — Google 可识别的 meta 标签；控制标题链接；Canonical URL。',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — Google 可识别的 meta 标签',
	tool_meta_ref_searchcentral_title_label: 'Search Central — 控制标题链接',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — Canonical URL',
};

export default zh;
