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
import { renderWebsiteHeadersPage } from "./pages/websiteHeadersPage";
import { renderMarkdownToHtmlPage } from "./pages/markdownToHtmlPage";
import { renderIpAddressPage } from "./pages/ipAddressPage";
import { renderHowToCalculateBmiPage } from "./pages/howToCalculateBmiPage";
import { renderMarginalRevenuePage } from "./pages/marginalRevenuePage";
import { renderHowToCalculateRoiPage } from "./pages/howToCalculateRoiPage";
import { renderSquareFeetPage } from "./pages/squareFeetPage";
import { renderHowToCalculatePercentageChangePage } from "./pages/howToCalculatePercentageChangePage";
import { renderHowToCalculateGradientPage } from "./pages/howToCalculateGradientPage";
import { renderTextDiffPage } from "./pages/textDiffPage";
import { renderYamlJsonPage } from "./pages/yamlJsonPage";
import { renderCsvJsonPage } from "./pages/csvJsonPage";
import { renderHtmlEntityPage } from "./pages/htmlEntityPage";
import { renderAddWwwToDnsPage } from "./pages/addWwwToDnsPage";
import { renderIndexNowPage } from "./pages/indexNowPage";
import { registerToolPage } from "./site/toolRegistrar";
import { handleWebsiteHeadersApi } from "./tools/websiteHeaders";
import { handleIpAddress } from "./endpoints/ipAddress";
import { handleDnsLookup } from "./endpoints/dnsLookup";
import { handleIndexnowCheckKey, handleIndexnowSubmit } from "./endpoints/indexnow";

type Env = {
	ASSETS: Fetcher;
	SITE_DEFAULT_LANG?: string;
	SITE_LANGS?: string;
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
const INDEXNOW_KEY = "8212779ba7e9451aa4faed4cfd20ded4";

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
	// About 静态页（含默认语显式前缀）
	app.get(`/${code}/about`, (c) => c.redirect(`/${code}/about/`, 308));
	app.get(`/${code}/about/`, async (c) => {
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const res = await fetchAsset(c, `/_pages/${code}/about.html`);
		return res;
	});
}

// 默认语 About（无前缀规范 URL）
app.get('/about', async (c) => {
	const accept = c.req.header('accept') || '';
	if (!accept.includes('text/html')) return c.notFound();
	const enabled = getEnabledLangs(c.env);
	const defaultLang = getDefaultLang(c.env, enabled);
	const res = await fetchAsset(c, `/_pages/${defaultLang}/about.html`);
	return res;
});
app.get('/about/', (c) => c.redirect('/about', 301));

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
	if (pathname === "/about" || pathname.startsWith("/about/")) return next();
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
app.get("/api/tools/indexnow/check-key", handleIndexnowCheckKey);
app.post("/api/tools/indexnow/submit", handleIndexnowSubmit);

// Register website-headers page routes using centralized registrar
registerToolPage(app as any, 'website-headers', (lang, defaultLang, enabled) => renderWebsiteHeadersPage(lang, defaultLang));

// Register ip-address page routes using centralized registrar
registerToolPage(app as any, 'ip-address', (lang, defaultLang, enabled) => renderIpAddressPage(lang, defaultLang));

// Legacy static tool page: redirect to dynamic route.
app.get("/tools/markdown-to-html.html", (c) => c.redirect("/tools/markdown-to-html", 301));

// Legacy static tool page: redirect to dynamic route.
app.get("/tools/markdown-to-html.html", (c) => c.redirect("/tools/markdown-to-html", 301));

// Register markdown-to-html page via registrar
registerToolPage(app as any, 'markdown-to-html', (lang, defaultLang, enabled) =>
	renderMarkdownToHtmlPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register how-to-calculate-bmi page via registrar
registerToolPage(app as any, 'how-to-calculate-bmi', (lang, defaultLang, enabled) =>
	renderHowToCalculateBmiPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register how-to-calculate-marginal-revenue page via registrar
registerToolPage(app as any, 'how-to-calculate-marginal-revenue', (lang, defaultLang, enabled) =>
  renderMarginalRevenuePage({ lang, defaultLang, enabledLangs: enabled })
);

// Register square-feet page via registrar
registerToolPage(app as any, 'square-feet', (lang, defaultLang, enabled) =>
  renderSquareFeetPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register how-to-calculate-percentage-change page via registrar
registerToolPage(app as any, 'how-to-calculate-percentage-change', (lang, defaultLang, enabled) =>
	renderHowToCalculatePercentageChangePage({ lang, defaultLang, enabledLangs: enabled })
);

// Register how-to-calculate-roi page via registrar
registerToolPage(app as any, 'how-to-calculate-roi', (lang, defaultLang, enabled) =>
  renderHowToCalculateRoiPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register how-to-calculate-gradient page via registrar
registerToolPage(app as any, 'how-to-calculate-gradient', (lang, defaultLang, enabled) =>
	renderHowToCalculateGradientPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register text-diff page via registrar（文本 Diff 对比器）
registerToolPage(app as any, 'text-diff', (lang, defaultLang, enabled) =>
	renderTextDiffPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register yaml-json page via registrar（YAML ↔ JSON 双向转换）
registerToolPage(app as any, 'yaml-json', (lang, defaultLang, enabled) =>
	renderYamlJsonPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register csv-json page via registrar（CSV ↔ JSON 双向转换）
registerToolPage(app as any, 'csv-json', (lang, defaultLang, enabled) =>
	renderCsvJsonPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register html-entity page via registrar（HTML 实体编解码）
registerToolPage(app as any, 'html-entity', (lang, defaultLang, enabled) =>
	renderHtmlEntityPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register add-www-to-dns page via registrar（给域名加 www DNS）
registerToolPage(app as any, 'add-www-to-dns', (lang, defaultLang, enabled) =>
	renderAddWwwToDnsPage({ lang, defaultLang, enabledLangs: enabled })
);

// Register indexnow page via registrar（Bing IndexNow 提交与密钥检查）
registerToolPage(app as any, 'indexnow', (lang, defaultLang, enabled) =>
	renderIndexNowPage({ lang, defaultLang, enabledLangs: enabled })
);

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