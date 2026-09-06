/**
 * i18n 工具分片（open-graph-preview / zh）。
 * 内容方向：粘贴 og:/twitter: 标签或抓取 URL，预览 Facebook / X / 微信等平台分享卡片，检查缺失字段与图片比例。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_og_home_title: 'Open Graph 预览',
	tool_og_home_desc:
		'让页面每次被分享都能带来点击——在浏览器里预览分享到 Facebook、X 与即时通讯应用时的社交卡片。',
	tool_og_title: 'Open Graph 预览 — 检查社交分享卡片',
	tool_og_description:
		'缺 OG 图或缺标题会损失社交分享点击。粘贴 og/twitter 标签或页面 URL，预览 Facebook、X 与即时通讯卡片并补缺。粘贴内容本地解析。示例：1200×630 大图卡片。步骤清晰，含示例说明。隐私友好，正文不上传。。。。',
	tool_og_tags_tab: '粘贴标签',
	tool_og_url_tab: '抓取 URL',
	tool_og_tags_ph: '在此粘贴你的 <meta property="og:*"> 与 <meta name="twitter:*"> 标签…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: '抓取 URL',
	tool_og_preview: '预览',
	tool_og_sample: '加载样例',
	tool_og_clear: '清空',
	tool_og_copy: '复制',
	tool_og_copied: '已复制',
	tool_og_running: '正在检查…',
	tool_og_error_prefix: '错误：',
	tool_og_url_error: '请输入有效的 http(s) URL。',
	tool_og_fetch_failed: '无法抓取该 URL。页面可能离线、屏蔽了爬虫，或未返回 HTML。',
	tool_og_no_tags: '未检测到 OG 标签',
	tool_og_no_tags_fallback:
		'没有 Open Graph 标签时，Facebook、X 与微信会改用页面标题、meta description 与第一张图片来拼卡片。',
	tool_og_required_label: '必备',
	tool_og_optional_label: '可选',
	tool_og_missing_label: '缺失',
	tool_og_ok_label: '已有',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: '标签状态',
	tool_og_ratio_warning: 'og:image 建议约 1200×630 像素（1.91:1）。',
	tool_og_ratio_ok: 'og:image 接近 1200×630 像素（1.91:1）。',
	tool_og_ratio_unknown: '无法从该 URL 读取图片尺寸。',
	tool_og_dimensions: '{w}×{h} 像素',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: '即时通讯应用（微信风格）',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: '未设置 twitter:card——平台会根据 og: 标签推断为 summary 卡片。',
	tool_og_how_title: '工作原理',
	tool_og_how_body:
		'预览会解析你粘贴的 og:/twitter: 标签（或从抓取的 HTML 中提取），渲染三张分享卡片。Facebook 左侧显示 1.91:1 图片，下方是标题、描述与域名。X 依 twitter:card 而定：summary_large_image 顶部显示大图，summary 在文字旁显示小图。微信等即时通讯应用显示一张大卡片。字段状态表会标出协议必填的四个字段，并列出可选字段。',
	tool_og_how_item_1: '在输入框填入页面 URL 并点击「抓取 URL」，或粘贴 og:/twitter: meta 标签。'
	tool_og_how_item_2: '点击「预览」（或「加载样例」）。',
	tool_og_how_item_3: '对比 Facebook、X 与消息应用卡片。',
	tool_og_how_item_4: '在表格中补齐缺失的协议必填字段。',
	tool_og_rules_title: '预览遵循的规则',
	tool_og_rules_body: '以下是各平台使用的图片尺寸与回退规则，依据 Open Graph 协议与 X Cards 文档。',
	tool_og_rules_item_1: 'Open Graph 协议必填的是 og:title、og:type、og:image 与 og:url。og:description 在协议里属于可选，但各大平台都会显示它——不写，平台就自己从正文里凑一段摘要。',
	tool_og_rules_item_2: 'og:image 用 1200×630 像素（1.91:1）在所有主流平台都能正常显示。Facebook 现也支持 2:1 与 1:1 裁剪；过小的图常被放大而发虚。',
	tool_og_rules_item_3: 'twitter:card 的 summary_large_image 配大图，summary 配小图。未设置 twitter:card 时，平台从 og: 标签推断为 summary 卡片。',
	tool_og_rules_item_4: 'og:title 或 og:image 缺失时，平台回退到页面 HTML 的 title、meta description 与第一张图片。',
	tool_og_rules_item_5: '图片尺寸用浏览器加载图片来测量；图片无法加载（被拦截、离线或 URL 有误）时，比例检查会报告未知。',
	tool_og_example_title: '示例',
	tool_og_example:
		'样例标签描述一篇带 1200×630 og:image 与 twitter:card summary_large_image 的博客文章。预览显示 Facebook 左侧图片卡片、X 大图卡片、微信风格卡片，以及全部必备字段都齐全的字段状态表。',
	tool_og_usecases_title: '适用场景',
	tool_og_usecase_1:
		'发布文章或落地页前，粘贴一次标签，确认在 Facebook、X 与即时通讯应用里分享卡片显示正常。',
	tool_og_usecase_2:
		'分享链接没图或被裁切时，粘贴 og: 标签检查是 og:image 缺失还是比例不对。',
	tool_og_usecase_3:
		'升级 CMS 或主题后，抓取线上 URL，确认 og: 标签仍与页面匹配。',
	tool_og_faq_q1: '页面没有 Open Graph 标签会怎样？',
	tool_og_faq_a1:
		'Facebook、X 与微信会退回去用 HTML 标题、meta description 和页面里找到的某张图片拼卡片。各平台的回退方式不一样，而且会变，卡片可能残缺或选错图——这正是要自己写 og: 字段的原因。',
	tool_og_faq_q2: 'og:image 应该多大？',
	tool_og_faq_a2:
		'最稳妥的是 1200×630 像素，即 1.91:1，所有主流平台都接受。Facebook 现在还支持 2:1 与 1:1 裁剪。很小的图片常被放大而模糊。',
	tool_og_faq_q3: 'twitter:card 与 og: 标签是什么关系？',
	tool_og_faq_a3:
		'twitter:card 决定布局：summary_large_image 显示宽图，summary 显示小图。twitter:title、twitter:description 或 twitter:image 缺失时，X 会回退到对应的 og: 标签。',
	tool_og_faq_q4: 'og:image 缺失时平台会怎么处理？',
	tool_og_faq_a4:
		'平台回退到页面 HTML 中的第一张图片，或显示无图卡片。og:image 缺失是分享链接没有预览图的最常见原因。',
	tool_og_faq_q5: '为什么比例检查报告“未知”？',
	tool_og_faq_a5:
		'预览会用浏览器图片加载读取 og:image 的真实尺寸。图片被拦截、离线、响应慢或服务器拒绝请求时，尺寸读不到，检查就报告未知。',
	tool_og_faq_q6: '我的标签会被上传到哪里吗？',
	tool_og_faq_a6:
		'不会。粘贴模式下解析与预览都在你的设备上进行。URL 模式通过我们的 worker 当次拉取页面，且不存储。',
	tool_og_references: 'ogp.me — Open Graph 协议；X — Cards 标记。',
	tool_og_ref_ogp_label: 'ogp.me — Open Graph 协议',
	tool_og_ref_x_label: 'X — Cards 标记',
};

export default zh;
