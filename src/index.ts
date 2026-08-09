import { fromHono } from "chanfana";
import { Hono } from "hono";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";
import { isSupportedLang, type SiteLang } from "./site/i18n";
import {
	DEFAULT_LANGS,
	getEnabledLangs,
	getFallbackLang,
	getDefaultLang,
	parseAcceptLanguage,
	pickLang,
	getExplicitLangFromPath,
	withLangPrefix,
} from "./site/lang";
import { registerToolPage } from "./site/toolRegistrar";
import { TOOL_PAGE_RENDERERS } from "./site/toolPageRegistry.generated";
import { handleWebsiteHeadersApi } from "./tools/websiteHeaders";
import { handleIpAddress } from "./endpoints/ipAddress";
import { handleDnsLookup } from "./endpoints/dnsLookup";
import { handleDomainLookup } from "./endpoints/domainLookup";
import {
	handleIndexnowCheckKey,
	handleIndexnowResolveUrls,
	handleIndexnowSubmit,
} from "./endpoints/indexnow";

type Env = {
	ASSETS: Fetcher;
	SITE_DEFAULT_LANG?: string;
	SITE_LANGS?: string;
	/** Turnstile siteverify 密钥（wrangler secret，勿入库） */
	TURNSTILE_SECRET_KEY?: string;
};

/**
 * Google Search Console HTML 文件验证路径（必须与 public/ 下文件名一致）。
 * 谷歌会请求该精确 URL，要求 200 且正文含验证串，不能发生路径重定向。
 */
const GOOGLE_SITE_VERIFICATION_PATH = "/google2cb457f0956f79d9.html";

/**
 * 验证文件正文（与 public/google2cb457f0956f79d9.html / verification/ 备份一致）。
 * Worker 直出该正文，避免 Assets 默认把 `*.html` 307 到无扩展名路径。
 */
const GOOGLE_SITE_VERIFICATION_BODY = "google-site-verification: google2cb457f0956f79d9.html";

/**
 * Bing IndexNow 所有权 key（须与 public/{key}.txt 及 scripts/site/config.mjs 一致）。
 * IndexNow 协议要求根路径托管 UTF-8 文本文件，正文仅为 key 本身。
 */
const INDEXNOW_KEY = "2f01147b65c24c4194c4f785eacafef9";

/**
 * IndexNow 验证文件路径：`/{key}.txt`（Option 1：站点根目录托管）。
 */
const INDEXNOW_KEY_PATH = `/${INDEXNOW_KEY}.txt`;

/**
 * 判断路径是否为谷歌站点验证 HTML（需跳过语言协商与 Assets .html 规范化）。
 * @param pathname 请求路径
 */
const isGoogleSiteVerificationPath = (pathname: string) => pathname === GOOGLE_SITE_VERIFICATION_PATH;

/**
 * 判断路径是否为 IndexNow 验证文件（需跳过语言协商，保证精确 200）。
 * @param pathname 请求路径
 */
const isIndexNowKeyPath = (pathname: string) => pathname === INDEXNOW_KEY_PATH;

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// language helper functions moved to `src/site/lang.ts` for reuse

const fetchAsset = async (c: any, assetPathname: string) => {
	let assetUrl = new URL(c.req.url);
	assetUrl.pathname = assetPathname;

	let req = new Request(assetUrl.toString(), c.req.raw);
	let res = await c.env.ASSETS.fetch(req);

	// Some asset handlers canonicalize `index.html` → `/` with a redirect.
	// Follow internally so users/bots stay on stable SEO URLs like `/` and `/en/`.
	for (let i = 0; i < 3 && res.status >= 300 && res.status < 400; i++) {
		const loc = res.headers.get("Location");
		if (!loc) break;
		assetUrl = new URL(loc, assetUrl);
		req = new Request(assetUrl.toString(), c.req.raw);
		res = await c.env.ASSETS.fetch(req);
	}

	return res;
};

/**
 * 直出谷歌验证文件：绕过 Assets 默认把 `*.html` 307 到无扩展名的行为，保证验证 URL 本身返回 200。
 */
app.get(GOOGLE_SITE_VERIFICATION_PATH, () => {
	return new Response(GOOGLE_SITE_VERIFICATION_BODY, {
		status: 200,
		headers: {
			"Content-Type": "text/html; charset=utf-8",
			"Cache-Control": "public, max-age=0, must-revalidate",
		},
	});
});

/**
 * 直出 IndexNow 验证 key 文件：保证 `/{key}.txt` 精确 200，供 Bing 等引擎校验所有权。
 */
app.get(INDEXNOW_KEY_PATH, () => {
	return new Response(`${INDEXNOW_KEY}\n`, {
		status: 200,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=0, must-revalidate",
		},
	});
});

// Home pages are served from assets at `/_pages/{lang}/index.html`.
app.get("/", async (c) => {
	const accept = c.req.header("accept") || "";
	if (!accept.includes("text/html")) return c.notFound();

	const enabled = getEnabledLangs(c.env);
	const acceptLanguage = c.req.header("accept-language");
	const defaultLang = getDefaultLang(c.env, enabled);

	if (acceptLanguage) {
		const picked = pickLang(acceptLanguage, enabled, defaultLang);
		if (picked !== defaultLang) {
			const url = new URL(c.req.url);
			url.pathname = withLangPrefix(picked, "/", defaultLang);
			c.header("Vary", "Accept-Language, Accept");
			return c.redirect(url.toString(), 302);
		}
	}

	c.header("Vary", "Accept-Language, Accept");
	const res = await fetchAsset(c, `/_pages/${defaultLang}/index.html`);
	return res;
});

// Localized home pages are served from assets at `/_pages/{lang}/index.html`.
// 注意：默认语也提供显式前缀 `/en/`（200），供语言切换器使用；
// Accept-Language 协商只作用于无前缀 `/`，避免「点了 English 又被弹回中文」。
// SEO canonical / sitemap 仍使用无前缀规范 URL。
for (const code of DEFAULT_LANGS) {
	app.get(`/${code}`, (c) => c.redirect(`/${code}/`, 308));
	app.get(`/${code}/`, async (c) => {
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const res = await fetchAsset(c, `/_pages/${code}/index.html`);
		return res;
	});
	// 静态信息页（含默认语显式前缀）：about / privacy / terms / contact
	for (const page of ['about', 'privacy', 'terms', 'contact'] as const) {
		app.get(`/${code}/${page}`, (c) => c.redirect(`/${code}/${page}/`, 308));
		app.get(`/${code}/${page}/`, async (c) => {
			const accept = c.req.header('accept') || '';
			if (!accept.includes('text/html')) return c.notFound();
			const res = await fetchAsset(c, `/_pages/${code}/${page}.html`);
			return res;
		});
	}
}

// 默认语信息页（无前缀规范 URL）
for (const page of ['about', 'privacy', 'terms', 'contact'] as const) {
	app.get(`/${page}`, async (c) => {
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const enabled = getEnabledLangs(c.env);
		const defaultLang = getDefaultLang(c.env, enabled);
		const res = await fetchAsset(c, `/_pages/${defaultLang}/${page}.html`);
		return res;
	});
	app.get(`/${page}/`, (c) => c.redirect(`/${page}`, 301));
}

/**
 * Devlogs 目录索引（Assets 默认也会映射；显式路由保证稳定性）。
 */
app.get("/devlogs", (c) => c.redirect("/devlogs/", 301));
app.get("/devlogs/", async (c) => {
	const res = await fetchAsset(c, "/devlogs/index.html");
	return res;
});

app.use("/*", async (c, next) => {
	const url = new URL(c.req.url);
	const pathname = url.pathname;

	// Global (non-localized) pages.
	if (pathname === "/devlogs" || pathname.startsWith("/devlogs/")) return next();
	// 无语言前缀的静态信息页（默认语规范 URL）不做 Accept-Language 跳转。
	if (
		pathname === '/about' ||
		pathname.startsWith('/about/') ||
		pathname === '/privacy' ||
		pathname.startsWith('/privacy/') ||
		pathname === '/terms' ||
		pathname.startsWith('/terms/') ||
		pathname === '/contact' ||
		pathname.startsWith('/contact/')
	) {
		return next();
	}
	if (pathname === "/tools/markdown-to-html.html") return next();
	// 谷歌验证文件不得做语言前缀跳转。
	if (isGoogleSiteVerificationPath(pathname)) return next();
	// IndexNow 验证文件不得做语言前缀跳转。
	if (isIndexNowKeyPath(pathname)) return next();

	// Do not interfere with APIs, docs, or obvious static assets.
	const isStaticAsset = /\.(css|js|png|jpg|jpeg|gif|webp|avif|svg|ico|map|woff2?|ttf|eot|xml|txt|webmanifest)$/i.test(
		pathname
	);
	if (pathname.startsWith("/api/") || pathname === "/api" || pathname.startsWith("/docs") || isStaticAsset) {
		return next();
	}
	if (c.req.method !== "GET") return next();

	const accept = c.req.header("accept") || "";
	if (!accept.includes("text/html")) return next();

	const enabled = getEnabledLangs(c.env);
	const explicit = getExplicitLangFromPath(pathname, enabled);
	if (explicit) return next();

	const acceptLanguage = c.req.header("accept-language");
	if (!acceptLanguage) return next();

	const defaultLang = getDefaultLang(c.env, enabled);
	const picked = pickLang(acceptLanguage, enabled, defaultLang);
	if (picked === defaultLang) return next();

	url.pathname = withLangPrefix(picked, pathname === "/" ? "/" : pathname, defaultLang);
	c.header("Vary", "Accept-Language, Accept");
	return c.redirect(url.toString(), 302);
});

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/docs",
});

// Register OpenAPI endpoints
openapi.get("/api/tasks", TaskList);
openapi.post("/api/tasks", TaskCreate);
openapi.get("/api/tasks/:taskSlug", TaskFetch);
openapi.delete("/api/tasks/:taskSlug", TaskDelete);

app.get("/api/tools/website-headers", handleWebsiteHeadersApi);
app.get("/api/tools/ip-address", handleIpAddress);
app.get("/api/tools/dns-lookup", handleDnsLookup);
app.get("/api/tools/domain-lookup", handleDomainLookup);
app.get("/api/tools/indexnow/check-key", handleIndexnowCheckKey);
app.post("/api/tools/indexnow/resolve-urls", handleIndexnowResolveUrls);
app.post("/api/tools/indexnow/submit", handleIndexnowSubmit);

// Legacy static tool page: redirect to dynamic route.
app.get("/tools/markdown-to-html.html", (c) => c.redirect("/tools/markdown-to-html", 301));

// Register all tool pages from generated registry (src/site/tool-catalog.d + merge:tools)
for (const [slug, render] of Object.entries(TOOL_PAGE_RENDERERS)) {
	registerToolPage(app as any, slug, render);
}

// Catch-all (GET): perform language negotiation before falling back to static assets.
app.get("/*", (c) => {
	const url = new URL(c.req.url);
	const pathname = url.pathname;

	// Global (non-localized) pages.
	if (pathname === "/devlogs" || pathname.startsWith("/devlogs/")) return c.notFound();
	if (pathname === "/tools/markdown-to-html.html") return c.notFound();
	// 回退到 Assets 前放行验证文件（正常应由上方显式路由处理）。
	if (isGoogleSiteVerificationPath(pathname)) return c.notFound();
	if (isIndexNowKeyPath(pathname)) return c.notFound();
	const isStaticAsset = /\.(css|js|png|jpg|jpeg|gif|webp|avif|svg|ico|map|woff2?|ttf|eot|xml|txt|webmanifest)$/i.test(
		pathname
	);
	if (pathname.startsWith("/api/") || pathname === "/api" || pathname.startsWith("/docs") || isStaticAsset) {
		return c.notFound();
	}

	const accept = c.req.header("accept") || "";
	if (!accept.includes("text/html")) return c.notFound();

	const enabled = getEnabledLangs(c.env);
	const explicit = getExplicitLangFromPath(pathname, enabled);
	if (explicit) return c.notFound();

	const acceptLanguage = c.req.header("accept-language");
	if (!acceptLanguage) return c.notFound();

	const defaultLang = getDefaultLang(c.env, enabled);
	const picked = pickLang(acceptLanguage, enabled, defaultLang);
	if (picked === defaultLang) return c.notFound();

	url.pathname = withLangPrefix(picked, pathname === "/" ? "/" : pathname, defaultLang);
	c.header("Vary", "Accept-Language, Accept");
	return c.redirect(url.toString(), 302);
});

// You may also register routes for non OpenAPI directly on Hono
// app.get('/test', (c) => c.text('Hono!'))

// Export the Hono app
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const url = new URL(request.url);

		// IndexNow / 谷歌验证：在进入 Hono 前直出，避免路由匹配或 Assets 404 影响所有权校验。
		if (request.method === "GET" && isIndexNowKeyPath(url.pathname)) {
			return new Response(`${INDEXNOW_KEY}\n`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain; charset=utf-8",
					"Cache-Control": "public, max-age=0, must-revalidate",
				},
			});
		}
		if (request.method === "GET" && isGoogleSiteVerificationPath(url.pathname)) {
			return new Response(GOOGLE_SITE_VERIFICATION_BODY, {
				status: 200,
				headers: {
					"Content-Type": "text/html; charset=utf-8",
					"Cache-Control": "public, max-age=0, must-revalidate",
				},
			});
		}

		const response = await app.fetch(request, env, ctx);
		if (response.status === 404) {
			return env.ASSETS.fetch(request);
		}
		return response;
	},
};