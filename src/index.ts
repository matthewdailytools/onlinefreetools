import { fromHono } from "chanfana";
import { Hono } from "hono";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";
import {
	DEFAULT_LANGS,
	getEnabledLangs,
	getDefaultLang,
	getExplicitLangFromPath,
	withLangPrefix,
	stripLangPrefix,
	resolvePreferredLang,
	buildLangPrefSetCookie,
} from "./site/lang";
import { registerToolPages } from "./site/toolRegistrar";
import {
	deleteHtmlCacheForUrl,
	langHomeAssetPath,
	langHomeR2Path,
	serveHomeHtml,
	servePrerenderedHtml,
	type PagesBindings,
} from "./site/r2Pages";
import { handleWebsiteHeadersApi } from "./tools/websiteHeaders";
import { handleOnPageSeoApi } from "./tools/onPageSeo";
import { handleOpenGraphPreviewApi } from "./tools/openGraphPreview";
import { handleIpAddress } from "./endpoints/ipAddress";
import { handleDnsLookup } from "./endpoints/dnsLookup";
import { handleDomainLookup } from "./endpoints/domainLookup";
import {
	handleIndexnowCheckKey,
	handleIndexnowResolveUrls,
	handleIndexnowSubmit,
} from "./endpoints/indexnow";
import {
	handlePromptToolAi,
	handlePromptToolAiHealth,
} from "./endpoints/promptToolAi";
import { PROMPT_AI_SLUGS } from "./lib/promptAiSlugs";
import {
	handleCheckRobotsTxtUrlBlocked,
	handleCheckSslCertificateExpiration,
	handleFindAndValidateXmlSitemap,
	handleSpfDkimDmarcChecker,
	handleValidateSecurityTxt,
} from "./tools/webCheckApis";

type Env = PagesBindings & {
	SITE_DEFAULT_LANG?: string;
	SITE_LANGS?: string;
	/** HTML Cache / R2 对齐版本（须与 R2 `_meta/pages-build.json` 一致） */
	PAGES_CACHE_VERSION?: string;
	/** Turnstile siteverify 密钥（wrangler secret，勿入库） */
	TURNSTILE_SECRET_KEY?: string;
	/** 运维缓存清理接口 token（wrangler secret / .dev.vars，勿入库） */
	CACHE_ADMIN_TOKEN?: string;
	/** Cloudflare Workers AI binding（wrangler ai.binding） */
	AI?: Ai;
	/** 全站 API 日级限流 KV */
	RATE_LIMIT_KV?: KVNamespace;
	/** 逗号分隔额外允许的 Origin（staging 等） */
	SITE_ALLOWED_ORIGINS?: string;
	PROMPT_AI_ENABLED?: string;
	PROMPT_AI_MODEL?: string;
	PROMPT_AI_MAX_INPUT_CHARS?: string;
	PROMPT_AI_MAX_OUTPUT_TOKENS?: string;
	PROMPT_AI_DAILY_LIMIT_PER_IP?: string;
	PROMPT_AI_MINUTE_LIMIT_PER_IP?: string;
	PROMPT_AI_SITE_DAILY_LIMIT?: string;
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

/**
 * 语言偏好 Cookie 相关响应的 Vary（仅 Cookie，不再按 Accept-Language 跳转）。
 */
const LANG_NEGOTIATE_VARY = "Cookie";

/**
 * 将默认语显式前缀 URL（如 `/en/tools/x`）301 到无前缀规范 URL，并写入语言偏好 Cookie。
 * @param c Hono context
 * @param strippedPath 去掉默认语前缀后的路径
 * @param defaultLang 默认语言码（写入 Cookie）
 */
const redirectDefaultLangCanonical = (c: any, strippedPath: string, defaultLang: ReturnType<typeof getDefaultLang>) => {
	const url = new URL(c.req.url);
	url.pathname = strippedPath.startsWith("/") ? strippedPath : `/${strippedPath}`;
	const secure = url.protocol === "https:";
	c.header("Set-Cookie", buildLangPrefSetCookie(defaultLang, { secure }));
	c.header("Vary", LANG_NEGOTIATE_VARY);
	return c.redirect(url.toString(), 301);
};

type CachePurgePayload = {
	url?: unknown;
	urls?: unknown;
	all?: unknown;
	purgeEverything?: unknown;
};

/**
 * 从 Authorization Bearer 或 X-Cache-Admin-Token 读取运维 token。
 * @param request 入站请求
 */
const readCacheAdminToken = (request: Request): string => {
	const auth = request.headers.get("Authorization") || "";
	const bearer = auth.match(/^Bearer\s+(.+)$/i);
	if (bearer) return bearer[1].trim();
	return (request.headers.get("X-Cache-Admin-Token") || "").trim();
};

/**
 * 常量时间校验运维 token；未配置 secret 时一律拒绝。
 * @param request 入站请求
 * @param env Worker 绑定
 */
const verifyCacheAdminToken = (request: Request, env: Env): boolean => {
	const expected = String(env.CACHE_ADMIN_TOKEN || "").trim();
	const provided = readCacheAdminToken(request);
	if (!expected || !provided) return false;
	const enc = new TextEncoder();
	const a = enc.encode(provided);
	const b = enc.encode(expected);
	if (a.length !== b.length) return false;
	return crypto.subtle.timingSafeEqual(a, b);
};

/**
 * 解析缓存清理请求中的 URL 列表。
 * @param payload JSON body
 */
const parseCachePurgeUrls = (payload: CachePurgePayload): string[] => {
	const out: string[] = [];
	if (typeof payload.url === "string") out.push(payload.url);
	if (Array.isArray(payload.urls)) {
		for (const item of payload.urls) {
			if (typeof item === "string") out.push(item);
		}
	}
	return [...new Set(out.map((s) => s.trim()).filter(Boolean))];
};

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// language helper functions moved to `src/site/lang.ts` for reuse

/**
 * 从 ASSETS 取静态资源（devlogs 等非预渲染页）；跟随内部重定向。
 * @param c Hono context
 * @param assetPathname Assets 路径
 */
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
 * 服务 `_pages` 预渲染 HTML（Cache → R2 gzip；未命中 404）。
 * @param c Hono context
 * @param assetHtmlPath 内部路径，如 `/_pages/en/tools/text-diff.html`
 */
const servePagesHtml = (c: any, assetHtmlPath: string) =>
	servePrerenderedHtml({
		request: c.req.raw,
		env: c.env as PagesBindings,
		ctx: c.executionCtx,
		assetHtmlPath,
	});

/**
 * 服务各语言首页：Cache → Static Assets（常规 URL）→（miss）R2。
 * @param c Hono context
 * @param lang 语言码
 * @param opts.explicitPrefix 默认语是否用 /{lang}/index.html（如 /en/）
 */
const serveLangHomeHtml = (c: any, lang: string, opts?: { explicitPrefix?: boolean }) => {
	const enabled = getEnabledLangs(c.env);
	const defaultLang = getDefaultLang(c.env, enabled);
	return serveHomeHtml({
		request: c.req.raw,
		env: c.env as PagesBindings,
		ctx: c.executionCtx,
		assetHtmlPath: langHomeAssetPath(lang, defaultLang, opts),
		r2HtmlPath: langHomeR2Path(lang),
	});
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

/**
 * 默认语显式前缀（如 `/en/`、`/en/tools/...`）一律 301 到无前缀规范 URL，并 Set-Cookie 记住英语偏好。
 * 须注册在各 `/{lang}/...` 与工具路由之前，以便优先拦截。
 */
app.use("*", async (c, next) => {
	if (c.req.method !== "GET" && c.req.method !== "HEAD") return next();

	const url = new URL(c.req.url);
	const pathname = url.pathname;

	if (pathname === "/devlogs" || pathname.startsWith("/devlogs/")) return next();
	if (isGoogleSiteVerificationPath(pathname) || isIndexNowKeyPath(pathname)) return next();

	const isStaticAsset =
		/\.(css|js|png|jpg|jpeg|gif|webp|avif|svg|ico|map|woff2?|ttf|eot|xml|txt|webmanifest)$/i.test(pathname);
	if (pathname.startsWith("/api/") || pathname === "/api" || pathname.startsWith("/docs") || isStaticAsset) {
		return next();
	}

	const enabled = getEnabledLangs(c.env);
	const defaultLang = getDefaultLang(c.env, enabled);
	const explicit = getExplicitLangFromPath(pathname, enabled);
	if (explicit !== defaultLang) return next();

	return redirectDefaultLangCanonical(c, stripLangPrefix(pathname), defaultLang);
});

// 首页：Assets 常规路径 `public/index.html`；仅 Cookie 偏好可跳非默认语，不做 Accept-Language 自动跳转
app.get("/", async (c) => {
	const accept = c.req.header("accept") || "";
	if (!accept.includes("text/html")) return c.notFound();

	const enabled = getEnabledLangs(c.env);
	const defaultLang = getDefaultLang(c.env, enabled);
	const preferred = resolvePreferredLang({
		cookieHeader: c.req.header("cookie"),
		enabled,
		defaultLang,
	});

	if (preferred !== defaultLang) {
		const url = new URL(c.req.url);
		url.pathname = withLangPrefix(preferred, "/", defaultLang);
		c.header("Vary", LANG_NEGOTIATE_VARY);
		return c.redirect(url.toString(), 302);
	}

	c.header("Vary", LANG_NEGOTIATE_VARY);
	return serveLangHomeHtml(c, defaultLang);
});

// 各语首页与信息页。默认语显式前缀由上方中间件 301 剥离；此处保留路由作兜底。
for (const code of DEFAULT_LANGS) {
	app.get(`/${code}`, (c) => c.redirect(`/${code}/`, 308));
	app.get(`/${code}/`, async (c) => {
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const enabled = getEnabledLangs(c.env);
		const defaultLang = getDefaultLang(c.env, enabled);
		if (code === defaultLang) {
			return redirectDefaultLangCanonical(c, '/', defaultLang);
		}
		return serveLangHomeHtml(c, code);
	});
	// 静态信息页（含默认语显式前缀）：about / privacy / terms / contact
	for (const page of ['about', 'privacy', 'terms', 'contact'] as const) {
		app.get(`/${code}/${page}`, (c) => c.redirect(`/${code}/${page}/`, 308));
		app.get(`/${code}/${page}/`, async (c) => {
			const accept = c.req.header('accept') || '';
			if (!accept.includes('text/html')) return c.notFound();
			const enabled = getEnabledLangs(c.env);
			const defaultLang = getDefaultLang(c.env, enabled);
			if (code === defaultLang) {
				return redirectDefaultLangCanonical(c, `/${page}`, defaultLang);
			}
			return servePagesHtml(c, `/_pages/${code}/${page}.html`);
		});
	}

	// 应用场景 / 工具类型 / 主题 hub + leaf（静态 `_pages/{lang}/...`）
	for (const hub of ['where-to-use-tools', 'tool-type', 'topics'] as const) {
		app.get(`/${code}/${hub}`, (c) => c.redirect(`/${code}/${hub}/`, 308));
		app.get(`/${code}/${hub}/`, async (c) => {
			const accept = c.req.header('accept') || '';
			if (!accept.includes('text/html')) return c.notFound();
			const enabled = getEnabledLangs(c.env);
			const defaultLang = getDefaultLang(c.env, enabled);
			if (code === defaultLang) {
				return redirectDefaultLangCanonical(c, `/${hub}`, defaultLang);
			}
			return servePagesHtml(c, `/_pages/${code}/${hub}/index.html`);
		});
		app.get(`/${code}/${hub}/:id`, (c) => {
			const id = c.req.param('id');
			return c.redirect(`/${code}/${hub}/${id}/`, 308);
		});
		app.get(`/${code}/${hub}/:id/`, async (c) => {
			const accept = c.req.header('accept') || '';
			if (!accept.includes('text/html')) return c.notFound();
			const enabled = getEnabledLangs(c.env);
			const defaultLang = getDefaultLang(c.env, enabled);
			const id = c.req.param('id');
			if (code === defaultLang) {
				return redirectDefaultLangCanonical(c, `/${hub}/${id}`, defaultLang);
			}
			return servePagesHtml(c, `/_pages/${code}/${hub}/${id}.html`);
		});
	}

	// 旧路径 301 → 新路径（避免已收录 URL 失效）
	app.get(`/${code}/use-cases`, (c) => c.redirect(`/${code}/where-to-use-tools/`, 301));
	app.get(`/${code}/use-cases/`, (c) => c.redirect(`/${code}/where-to-use-tools/`, 301));
	app.get(`/${code}/use-cases/:id`, (c) =>
		c.redirect(`/${code}/where-to-use-tools/${c.req.param('id')}/`, 301)
	);
	app.get(`/${code}/use-cases/:id/`, (c) =>
		c.redirect(`/${code}/where-to-use-tools/${c.req.param('id')}/`, 301)
	);
	app.get(`/${code}/subjects`, (c) => c.redirect(`/${code}/tool-type/`, 301));
	app.get(`/${code}/subjects/`, (c) => c.redirect(`/${code}/tool-type/`, 301));
	app.get(`/${code}/subjects/:id`, (c) =>
		c.redirect(`/${code}/tool-type/${c.req.param('id')}/`, 301)
	);
	app.get(`/${code}/subjects/:id/`, (c) =>
		c.redirect(`/${code}/tool-type/${c.req.param('id')}/`, 301)
	);
}

// 默认语信息页（无前缀规范 URL）
for (const page of ['about', 'privacy', 'terms', 'contact'] as const) {
	app.get(`/${page}`, async (c) => {
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const enabled = getEnabledLangs(c.env);
		const defaultLang = getDefaultLang(c.env, enabled);
		return servePagesHtml(c, `/_pages/${defaultLang}/${page}.html`);
	});
	app.get(`/${page}/`, (c) => c.redirect(`/${page}`, 301));
}

// 默认语场景 / 工具类型 / 主题列表页（无前缀规范 URL）
for (const hub of ['where-to-use-tools', 'tool-type', 'topics'] as const) {
	app.get(`/${hub}`, async (c) => {
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const enabled = getEnabledLangs(c.env);
		const defaultLang = getDefaultLang(c.env, enabled);
		return servePagesHtml(c, `/_pages/${defaultLang}/${hub}/index.html`);
	});
	app.get(`/${hub}/`, (c) => c.redirect(`/${hub}`, 301));
	app.get(`/${hub}/:id`, async (c) => {
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const enabled = getEnabledLangs(c.env);
		const defaultLang = getDefaultLang(c.env, enabled);
		const id = c.req.param('id');
		return servePagesHtml(c, `/_pages/${defaultLang}/${hub}/${id}.html`);
	});
	app.get(`/${hub}/:id/`, (c) => {
		const id = c.req.param('id');
		return c.redirect(`/${hub}/${id}`, 301);
	});
}

// 默认语旧路径 301
app.get('/use-cases', (c) => c.redirect('/where-to-use-tools', 301));
app.get('/use-cases/', (c) => c.redirect('/where-to-use-tools', 301));
app.get('/use-cases/:id', (c) => c.redirect(`/where-to-use-tools/${c.req.param('id')}`, 301));
app.get('/use-cases/:id/', (c) => c.redirect(`/where-to-use-tools/${c.req.param('id')}`, 301));
app.get('/subjects', (c) => c.redirect('/tool-type', 301));
app.get('/subjects/', (c) => c.redirect('/tool-type', 301));
app.get('/subjects/:id', (c) => c.redirect(`/tool-type/${c.req.param('id')}`, 301));
app.get('/subjects/:id/', (c) => c.redirect(`/tool-type/${c.req.param('id')}`, 301));

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
	// 无语言前缀的静态信息页（默认语规范 URL）不做 Cookie 语言偏好跳转。
	if (
		pathname === '/about' ||
		pathname.startsWith('/about/') ||
		pathname === '/privacy' ||
		pathname.startsWith('/privacy/') ||
		pathname === '/terms' ||
		pathname.startsWith('/terms/') ||
		pathname === '/contact' ||
		pathname.startsWith('/contact/') ||
		pathname === '/where-to-use-tools' ||
		pathname.startsWith('/where-to-use-tools/') ||
		pathname === '/tool-type' ||
		pathname.startsWith('/tool-type/') ||
		pathname === '/topics' ||
		pathname.startsWith('/topics/') ||
		pathname === '/use-cases' ||
		pathname.startsWith('/use-cases/') ||
		pathname === '/subjects' ||
		pathname.startsWith('/subjects/')
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

	const defaultLang = getDefaultLang(c.env, enabled);
	/** 仅 Cookie 显式偏好可跳非默认语；Accept-Language 改由顶栏提示条处理。 */
	const preferred = resolvePreferredLang({
		cookieHeader: c.req.header("cookie"),
		enabled,
		defaultLang,
	});
	if (preferred === defaultLang) return next();

	url.pathname = withLangPrefix(preferred, pathname === "/" ? "/" : pathname, defaultLang);
	c.header("Vary", LANG_NEGOTIATE_VARY);
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
app.get("/api/tools/on-page-seo", handleOnPageSeoApi);
app.get("/api/tools/open-graph-preview", handleOpenGraphPreviewApi);
app.get("/api/tools/ip-address", handleIpAddress);
app.get("/api/tools/dns-lookup", handleDnsLookup);
app.get("/api/tools/domain-lookup", handleDomainLookup);
app.get("/api/tools/indexnow/check-key", handleIndexnowCheckKey);
app.post("/api/tools/indexnow/resolve-urls", handleIndexnowResolveUrls);
app.post("/api/tools/indexnow/submit", handleIndexnowSubmit);
app.get("/api/tools/check-robots-txt-url-blocked", handleCheckRobotsTxtUrlBlocked);
app.get("/api/tools/find-and-validate-xml-sitemap", handleFindAndValidateXmlSitemap);
app.get("/api/tools/validate-security-txt", handleValidateSecurityTxt);
app.get("/api/tools/check-ssl-certificate-expiration", handleCheckSslCertificateExpiration);
app.get("/api/tools/spf-dkim-dmarc-checker", handleSpfDkimDmarcChecker);

for (const slug of PROMPT_AI_SLUGS) {
	app.get(`/api/tools/${slug}/ai/health`, handlePromptToolAiHealth);
	app.post(`/api/tools/${slug}/ai`, handlePromptToolAi);
}

/**
 * 运维：返回 Worker 侧 PAGES_CACHE_VERSION，供 deploy 后与 R2 `_meta/pages-build.json` 对齐校验。
 * 不暴露密钥；仅版本与绑定存在性。
 */
app.get("/api/ops/pages-build", async (c) => {
	const pagesCacheVersion = String(c.env.PAGES_CACHE_VERSION || "").trim();
	let r2MetaVersion: string | null = null;
	let r2MetaHash: string | null = null;
	try {
		const obj = await c.env.PAGES_BUCKET.get("_meta/pages-build.json");
		if (obj) {
			const meta = (await obj.json()) as { pagesCacheVersion?: string; contentHash?: string };
			r2MetaVersion = meta.pagesCacheVersion != null ? String(meta.pagesCacheVersion) : null;
			r2MetaHash = meta.contentHash != null ? String(meta.contentHash) : null;
		}
	} catch {
		r2MetaVersion = null;
	}
	const aligned =
		!!pagesCacheVersion && r2MetaVersion !== null && pagesCacheVersion === r2MetaVersion;
	return c.json(
		{
			pagesCacheVersion,
			r2MetaVersion,
			r2MetaHash,
			aligned,
			hasPagesBucket: !!c.env.PAGES_BUCKET,
		},
		aligned ? 200 : 409
	);
});

/**
 * 运维：按公开 URL 删除 HTML Cache API exact key。
 *
 * Body:
 *   { "url": "/zh/" }
 *   { "urls": ["/zh/", "/zh/tools/archive-extractor?preview=1"] }
 *
 * Token:
 *   Authorization: Bearer <CACHE_ADMIN_TOKEN>
 *   或 X-Cache-Admin-Token: <CACHE_ADMIN_TOKEN>
 */
app.post("/api/admin/cache/purge", async (c) => {
	if (!verifyCacheAdminToken(c.req.raw, c.env)) {
		const configured = !!String(c.env.CACHE_ADMIN_TOKEN || "").trim();
		return c.json(
			{
				ok: false,
				error: configured ? "unauthorized" : "cache_admin_token_not_configured",
			},
			configured ? 401 : 503
		);
	}

	let payload: CachePurgePayload = {};
	try {
		payload = (await c.req.json()) as CachePurgePayload;
	} catch {
		payload = {};
	}

	if (payload.all === true || payload.purgeEverything === true) {
		return c.json(
			{
				ok: false,
				error: "cache_api_cannot_enumerate_entries",
				message:
					"Workers Cache API supports exact-key delete, but this runtime does not expose a way to list and clear every caches.default entry. Use PAGES_CACHE_VERSION for release-wide invalidation, or Cloudflare CDN purge outside the Worker for CDN cache.",
			},
			400
		);
	}

	const urls = parseCachePurgeUrls(payload);
	if (!urls.length) {
		return c.json(
			{
				ok: false,
				error: "missing_urls",
				message: "Send {\"url\":\"/zh/\"} or {\"urls\":[\"/zh/\",\"/tools/example?x=1\"]}.",
			},
			400
		);
	}
	if (urls.length > 50) {
		return c.json({ ok: false, error: "too_many_urls", limit: 50 }, 400);
	}

	const results = [];
	for (const rawUrl of urls) {
		try {
			results.push(await deleteHtmlCacheForUrl({ request: c.req.raw, env: c.env, rawUrl }));
		} catch (err) {
			results.push({
				url: rawUrl,
				deleted: false,
				error: err instanceof Error ? err.message : "delete failed",
			});
		}
	}

	return c.json({
		ok: true,
		pagesCacheVersion: String(c.env.PAGES_CACHE_VERSION || ""),
		results,
	});
});

// Legacy static tool page: redirect to dynamic route.
app.get("/tools/markdown-to-html.html", (c) => c.redirect("/tools/markdown-to-html", 301));

// 工具页：预渲染 HTML（R2 / Assets），不再在 Worker 内 SSR 全量 Page 模块
registerToolPages(app as any);

// Catch-all (GET): Cookie 语言偏好跳转后再回落 Assets；不做 Accept-Language 自动跳转。
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

	const defaultLang = getDefaultLang(c.env, enabled);
	const preferred = resolvePreferredLang({
		cookieHeader: c.req.header("cookie"),
		enabled,
		defaultLang,
	});
	if (preferred === defaultLang) return c.notFound();

	url.pathname = withLangPrefix(preferred, pathname === "/" ? "/" : pathname, defaultLang);
	c.header("Vary", LANG_NEGOTIATE_VARY);
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
