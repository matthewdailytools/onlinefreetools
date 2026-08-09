/**
 * open-graph-preview 的 URL 拉取 API：给定 URL，抓取页面 HTML 供前端解析 og:/twitter: 标签。
 * 仅当次请求不存储；校验协议、拦截私网/localhost、限制内容类型与大小。
 * slug: open-graph-preview（见 work-tasks/open-graph-preview/02-tool-info.md）。
 */
import type { Context } from 'hono';
import { parseUrlOrThrow, isBlockedHostname } from './onPageSeo';

/**
 * 拉取 URL 并返回 HTML。
 * @param c Hono 上下文（query 参数 url）
 * @returns JSON：成功时含 html/finalUrl/status；失败时含 error 与对应 HTTP 状态码
 */
export const handleOpenGraphPreviewApi = async (c: Context) => {
  const raw = (c.req.query('url') || '').trim();
  if (!raw) return c.json({ error: 'Missing url' }, 400);

  let url: URL;
  try {
    url = parseUrlOrThrow(raw);
  } catch (e: any) {
    return c.json({ error: e?.message || 'Invalid URL' }, 400);
  }

  if (isBlockedHostname(url.hostname)) {
    return c.json({ error: 'Blocked hostname' }, 400);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort('timeout'), 10_000);
  try {
    const res = await fetch(url.toString(), {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'onlinefreetools/open-graph-preview',
        accept: 'text/html,application/xhtml+xml',
      },
    });

    const contentType = (res.headers.get('content-type') || '').toLowerCase();
    if (!contentType.includes('html') && !contentType.includes('xml')) {
      return c.json({ error: 'URL does not return HTML content' }, 400);
    }

    /** 限制正文大小，防止大页/流式滥用。 */
    const MAX_BYTES = 2_000_000;
    const buf = await res.arrayBuffer();
    if (buf.byteLength > MAX_BYTES) {
      return c.json({ error: 'Page is too large to check (limit 2 MB)' }, 413);
    }

    const html = new TextDecoder('utf-8', { fatal: false }).decode(buf);
    return c.json({
      inputUrl: raw,
      finalUrl: res.url,
      status: res.status,
      html,
    });
  } catch (e: any) {
    return c.json({ error: e?.message || 'Request failed' }, 502);
  } finally {
    clearTimeout(timeout);
  }
};
