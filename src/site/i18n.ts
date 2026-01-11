export type SiteLang = 'zh' | 'en';

const dict = {
  zh: {
    brand: 'Online Free Tools',
    nav_home: '首页',
    nav_devlogs: '开发日志',
    nav_tools: '工具',
    footer_text: 'Online Free Tools · 学习项目 · 持续迭代',
    tool_headers_title: '获取网站响应 Header',
    tool_headers_description: '输入网址，查询该网站的 HTTP 响应 Header（由服务器侧请求获取）。',
    url_label: '网址',
    url_placeholder: '例如：https://example.com',
    fetch_button: '获取 Header',
    result_title: '结果',
    status_label: '状态码',
    final_url_label: '最终 URL',
    headers_label: 'Headers',
    error_prefix: '错误：',
    note_title: '说明',
    note_1: '部分站点不支持 HEAD 请求，会自动退回到 GET。',
    note_2: '出于安全考虑，禁止请求内网/本机地址。',

		tool_markdown_title: 'Markdown 转 HTML',
		tool_markdown_description: '将 Markdown 快速渲染为 HTML，支持预览、复制、下载完整文档。',
		tool_markdown_copy: '复制 HTML',
		tool_markdown_copy_done: '已复制',
		tool_markdown_download: '下载 HTML',
		tool_markdown_clear: '清空',
		tool_markdown_full_doc: '生成完整 HTML 文档',
		tool_markdown_input_label: 'Markdown 输入',
		tool_markdown_preview_label: 'HTML 预览',
		tool_markdown_placeholder:
			"# 标题\n\n支持基本 Markdown 语法，例如**加粗**、列表与代码块。\n\n- 列表项 1\n- 列表项 2\n\n```js\nconsole.log('Hello Markdown');\n```",
		tool_markdown_export_title: 'Markdown 转 HTML 导出',
		tool_markdown_export_description: '由 Markdown 转换的静态 HTML 导出文件',
  },
  en: {
    brand: 'Online Free Tools',
    nav_home: 'Home',
    nav_devlogs: 'Dev Logs',
    nav_tools: 'Tools',
    footer_text: 'Online Free Tools · Learning project · Iterating',
    tool_headers_title: 'Fetch Website Response Headers',
    tool_headers_description:
      'Enter a URL to fetch its HTTP response headers (server-side request).',
    url_label: 'URL',
    url_placeholder: 'e.g. https://example.com',
    fetch_button: 'Fetch Headers',
    result_title: 'Result',
    status_label: 'Status',
    final_url_label: 'Final URL',
    headers_label: 'Headers',
    error_prefix: 'Error: ',
    note_title: 'Notes',
    note_1: 'Some sites do not support HEAD; we will fall back to GET.',
    note_2: 'For safety, requests to localhost/private networks are blocked.',

    tool_markdown_title: 'Markdown → HTML',
    tool_markdown_description:
      'Render Markdown into HTML with preview, copy, and full-document download.',
    tool_markdown_copy: 'Copy HTML',
    tool_markdown_copy_done: 'Copied',
    tool_markdown_download: 'Download HTML',
    tool_markdown_clear: 'Clear',
    tool_markdown_full_doc: 'Generate full HTML document',
    tool_markdown_input_label: 'Markdown Input',
    tool_markdown_preview_label: 'HTML Preview',
    tool_markdown_placeholder:
      "# Title\n\nBasic Markdown supported: **bold**, lists, and code blocks.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('Hello Markdown');\n```",
    tool_markdown_export_title: 'Markdown to HTML Export',
    tool_markdown_export_description: 'Static HTML export generated from Markdown',
  },
} as const;

export const supportedLangs: SiteLang[] = ['zh', 'en'];

export const isSupportedLang = (lang: string): lang is SiteLang =>
  (supportedLangs as readonly string[]).includes(lang);

export const t = (lang: SiteLang, key: keyof (typeof dict)['zh']): string => {
  return (dict[lang] as any)[key] ?? (dict.zh as any)[key] ?? String(key);
};
