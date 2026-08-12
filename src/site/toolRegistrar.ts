/**
 * 工具页路由：从 R2/Assets 预渲染 HTML 提供服务（不再在 Worker 内 SSR）。
 */
import type { Hono } from 'hono';
import { isSupportedLang } from './i18n';
import { getEnabledLangs, getDefaultLang, withLangPrefix } from './lang';
import { TOOL_SLUG_SET } from './toolSlugs.generated';
import { servePrerenderedHtml, type PagesBindings } from './r2Pages';

type App = InstanceType<typeof Hono<{ Bindings: PagesBindings & Record<string, unknown> }>>;

/**
 * 注册全部工具页的公开 URL（默认语无前缀 + 各语显式前缀）。
 * @param app Hono 应用
 */
export const registerToolPages = (app: App) => {
	app.get('/tools/:slug', async (c) => {
		const slug = c.req.param('slug');
		if (!TOOL_SLUG_SET.has(slug)) return c.notFound();
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const enabled = getEnabledLangs(c.env);
		const defaultLang = getDefaultLang(c.env, enabled);
		return servePrerenderedHtml({
			request: c.req.raw,
			env: c.env as PagesBindings,
			ctx: c.executionCtx,
			assetHtmlPath: `/_pages/${defaultLang}/tools/${slug}.html`,
		});
	});

	app.get('/:lang/tools/:slug', async (c) => {
		const langParam = c.req.param('lang');
		const slug = c.req.param('slug');
		if (!TOOL_SLUG_SET.has(slug)) return c.notFound();
		const enabled = getEnabledLangs(c.env);
		const defaultLang = getDefaultLang(c.env, enabled);
		if (!isSupportedLang(langParam)) {
			return c.redirect(withLangPrefix(defaultLang, `/tools/${slug}`, defaultLang), 302);
		}
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		return servePrerenderedHtml({
			request: c.req.raw,
			env: c.env as PagesBindings,
			ctx: c.executionCtx,
			assetHtmlPath: `/_pages/${langParam}/tools/${slug}.html`,
		});
	});
};

/**
 * @deprecated 保留旧签名兼容；请改用 registerToolPages。
 */
export const registerToolPage = (
	_app: App,
	_toolName: string,
	_renderFn?: (lang: unknown, defaultLang: unknown, enabledLangs: unknown) => string | void
) => {
	throw new Error('registerToolPage is removed — use registerToolPages() once after routes are set up');
};

export default registerToolPages;
