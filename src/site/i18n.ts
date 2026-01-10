export type SiteLang = 'zh' | 'en';

const dict = {
  zh: {
    brand: 'Online Free Tools',
    nav_home: '首页',
    nav_devlogs: '开发日志',
    nav_tools: '工具',
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
  },
  en: {
    brand: 'Online Free Tools',
    nav_home: 'Home',
    nav_devlogs: 'Dev Logs',
    nav_tools: 'Tools',
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
  },
} as const;

export const supportedLangs: SiteLang[] = ['zh', 'en'];

export const isSupportedLang = (lang: string): lang is SiteLang =>
  (supportedLangs as readonly string[]).includes(lang);

export const t = (lang: SiteLang, key: keyof (typeof dict)['zh']): string => {
  return (dict[lang] as any)[key] ?? (dict.zh as any)[key] ?? String(key);
};
