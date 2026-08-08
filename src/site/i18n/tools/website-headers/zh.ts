/**
 * i18n tool shard (website-headers / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_headers_article: '用本工具查看边缘节点收到的公开网址响应头，便于核对缓存、CORS、重定向与安全头。请求经代理发出；我们不以产品形式保存页面正文。',
  tool_headers_description:
    '从边缘节点检查网址的 HTTP 响应头。流程：提交 https 网址，优先发 HEAD（必要时改 GET），跟随重定向，展示状态码与头部映射，并拦截内网主机。示例：排查 CDN/重定向时查看 Cache-Control、CORS、Strict-Transport-Security。',
  tool_headers_example:
    '示例：查询 https://example.com → 状态 200，最终 URL 不变，headers 含 content-type: text/html，并可能含 cache-control 或安全相关头。',
  tool_headers_example_title: '示例',
  tool_headers_faq_a1: '可以看到内容类型、缓存策略、重定向以及 HSTS、CSP、CORS 等安全相关头信息。',
  tool_headers_faq_a2: '优先使用 HEAD，必要时回退到 GET。产品目标是检查头信息，而不是抓取或保存正文。',
  tool_headers_faq_a3: '为安全起见会拦截 localhost/私网，避免被用来探测内网主机。',
  tool_headers_faq_a4: '不一定。你看到的是边缘节点视角；CDN 按地区分流或机器人策略可能导致与本机结果不同。',
  tool_headers_faq_a5: '查询是短生命周期的边缘请求。我们不提供网址历史产品；请勿在查询串里粘贴密钥。',
  tool_headers_faq_q1: 'HTTP 响应头能看出什么？',
  tool_headers_faq_q2: '会下载完整网页正文吗？',
  tool_headers_faq_q3: '为什么禁止访问内网地址？',
  tool_headers_faq_q4: '这和浏览器 DevTools 一样吗？',
  tool_headers_faq_q5: '会保存我查询过的网址吗？',
  tool_headers_how_body:
    '粘贴公开的 http(s) 网址并查询。边缘 Worker 先发 HEAD（必要时 GET），跟随重定向，返回它看到的状态码、最终 URL 与响应头。内网地址会被拒绝。这是边缘视角，若 CDN 按地区分流，可能与本机 DevTools 不完全一致。',
  tool_headers_how_title: '怎么用',
  tool_headers_ref_mdn_label: 'MDN — HTTP 响应头',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — HTTP 语义',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP 缓存',
  tool_headers_rules_body: 'Worker 是短生命周期的代理，用于查看响应头，不会把页面正文当产品功能保存。头字段语义见下方参考链接。',
  tool_headers_rules_item_1: '优先 HEAD；不支持时回退 GET。',
  tool_headers_rules_item_2: '跟随重定向并报告最终 URL。',
  tool_headers_rules_item_3: '拦截 localhost / 私网目标。',
  tool_headers_rules_item_4: '常见关注：Cache-Control、CORS、CSP 等（若目标站返回）。',
  tool_headers_rules_title: '检查器如何工作',
  tool_headers_title: '在线查看 HTTP 响应头',
  tool_headers_usecase_1: '上线前核对 Cache-Control 或 CDN 缓存策略。',
  tool_headers_usecase_2: '通过 Access-Control-* 排查 CORS 预检失败。',
  tool_headers_usecase_3: '抽查 CSP、HSTS 等安全头是否真的下发。',
  tool_headers_usecases_title: '适合什么场景',
};
export default zh;
