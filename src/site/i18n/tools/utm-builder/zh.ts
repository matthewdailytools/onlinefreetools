/**
 * i18n 工具分片（utm-builder / zh）。
 * 内容方向：输入落地页 URL 与五个 UTM 参数，生成带编码的活动追踪链接，保留已有参数并支持参数合并。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_utm_home_title: 'UTM 链接生成器',
	tool_utm_home_desc:
		'看清每个渠道的真实引流效果——在浏览器里用 utm_source、medium、campaign、term、content 生成规范的活动追踪链接。',
	tool_utm_title: 'UTM 链接生成器 — 创建活动追踪链接',
	tool_utm_description:
		'规范的 UTM 标记是看清每个活动、邮件或推文真实引流效果的唯一方式——标记不规范，你的 SEO 与营销投入在数据里就无从归因。用落地页 URL 与 utm_source、utm_medium、utm_campaign、utm_term、utm_content 生成活动追踪链接。步骤：粘贴基础 URL，填写五个参数，复制带正确 URL 编码的链接。已有查询参数会被保留并合并，不会被覆盖。完全在本地运行，不上传任何内容。示例：https://example.com/page 搭配 source=newsletter、medium=email、campaign=summer_sale。',
	tool_utm_url_label: '落地页 URL',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: '请输入落地页 URL。',
	tool_utm_url_invalid: 'URL 看起来无效，请检查后重试。',
	tool_utm_url_protocol: '未检测到协议——已自动补上 https://。',
	tool_utm_source_label: '活动来源（utm_source）',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: '链接在哪里被看到：newsletter、facebook、google。',
	tool_utm_medium_label: '活动媒介（utm_medium）',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: '链接如何送达：email、cpc、social、referral。',
	tool_utm_campaign_label: '活动名称（utm_campaign）',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: '链接所属的推广或产品。',
	tool_utm_campaign_required: '活动名称（utm_campaign）为必填。',
	tool_utm_term_label: '活动词（utm_term）',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: '选填。用于标识付费搜索关键词。',
	tool_utm_content_label: '活动内容（utm_content）',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: '选填。区分指向同一 URL 的广告或链接。',
	tool_utm_generate: '生成',
	tool_utm_sample: '加载样例',
	tool_utm_clear: '清空',
	tool_utm_copy: '复制',
	tool_utm_copied: '已复制',
	tool_utm_error_prefix: '错误：',
	tool_utm_output_label: '生成的链接',
	tool_utm_table_title: '参数拆解',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: '取值',
	tool_utm_param_status: '状态',
	tool_utm_param_required: '必填',
	tool_utm_param_optional: '选填',
	tool_utm_param_empty: '空',
	tool_utm_encoding_note:
		'参数值使用 encodeURIComponent 编码：空格变为 %20，非 ASCII 字符也会被百分号编码。',
	tool_utm_case_note:
		'Google Analytics 对参数值区分大小写。建议统一用小写，让同一渠道聚合到同一来源。',
	tool_utm_how_title: '工作原理',
	tool_utm_how_body:
		'生成器会解析基础 URL，保留其已有的查询参数，再用 & 拼接 UTM 参数。每个值都会被百分号编码，空格、中文与特殊符号都能安全存在于链接中。若 URL 带 hash，会把它挪到所有参数之后。这五个 UTM 参数就是 Google Analytics 用来把访问归因到来源、媒介与活动的依据。',
	tool_utm_rules_title: '生成器遵循的规则',
	tool_utm_rules_body: '以下是 Google Analytics 文档中的 UTM 参数定义与编码规则。',
	tool_utm_rules_item_1: 'utm_source 标识链接在哪里被看到，utm_medium 标识如何送达。两者对归因都是必填。',
	tool_utm_rules_item_2: 'utm_campaign 是活动名称，此处必填。utm_term 与 utm_content 选填：term 用于付费关键词，content 用于区分两条链接。',
	tool_utm_rules_item_3: '基础 URL 已有查询参数时会被保留，UTM 参数以 & 追加；同名参数会被新值替换。',
	tool_utm_rules_item_4: '参数值做百分号编码：空格变 %20，非 ASCII 字符同样编码。URL 锚点（#anchor）始终位于查询串之后。',
	tool_utm_rules_item_5: '参数值建议统一小写。Google Analytics 对 UTM 值区分大小写，facebook 与 Facebook 会被分成两个来源。',
	tool_utm_example_title: '示例',
	tool_utm_example:
		'样例输入是 https://example.com/page，utm_source=newsletter、utm_medium=email、utm_campaign=summer_sale。生成的链接为 https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale。',
	tool_utm_usecases_title: '适用场景',
	tool_utm_usecase_1:
		'社媒投放：每个平台生成一条链接但使用同一个 utm_campaign，GA4 就能在一行里报告整场推广。',
	tool_utm_usecase_2:
		'邮件发送：使用 utm_source=newsletter、utm_medium=email，并用不同的 content 值对比指向同一页面的两个横幅。',
	tool_utm_usecase_3:
		'二维码与纸质链接：完整 UTM URL 较长，生成后可以先缩短再使用，参数保持不变。',
	tool_utm_faq_q1: 'utm_source 与 utm_medium 有什么区别？',
	tool_utm_faq_a1:
		'utm_source 告诉你在哪里看到链接（newsletter、facebook、google），utm_medium 告诉你怎么送达（email、cpc、social、referral）。GA4 会把它们与 utm_campaign 一起命名为流量来源。',
	tool_utm_faq_q2: 'URL 已有查询参数，会被覆盖掉吗？',
	tool_utm_faq_a2:
		'不会。已有参数会被保留，UTM 参数以 & 追加。如果 URL 已含同名参数，新值会替换旧值。',
	tool_utm_faq_q3: '参数值里有空格、中文或特殊符号怎么办？',
	tool_utm_faq_a3:
		'每个值都会做百分号编码：空格变 %20，非 ASCII 字符同样编码。生成的链接在邮件客户端、聊天软件与浏览器中都有效。',
	tool_utm_faq_q4: 'UTM 参数值区分大小写吗？',
	tool_utm_faq_a4:
		'区分。Google Analytics 会把 utm_source=Facebook 与 utm_source=facebook 视为两个来源。建议统一小写，让同一渠道聚合。',
	tool_utm_faq_q5: '什么时候该用 utm_term 和 utm_content？',
	tool_utm_faq_a5:
		'utm_term 标识付费搜索关键词，对 Google Ads 有用。utm_content 区分指向同一 URL 的两条链接或广告，比如页头横幅与页脚链接。',
	tool_utm_faq_q6: '我的 URL 会被上传吗？',
	tool_utm_faq_a6: '不会。生成器完全在浏览器内运行，不上传任何内容。',
	tool_utm_references: 'Google Analytics — 自定义广告系列（UTM）；Google Search Central — URL 参数。',
	tool_utm_ref_ga_label: 'Google Analytics — 自定义广告系列（UTM）',
	tool_utm_ref_searchcentral_label: 'Google Search Central — URL 参数',
};

export default zh;
