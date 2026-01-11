import { fromHono } from "chanfana";
import { Hono } from "hono";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";
import { isSupportedLang, type SiteLang } from "./site/i18n";
import { renderWebsiteHeadersPage } from "./pages/websiteHeadersPage";
import { renderMarkdownToHtmlPage } from "./pages/markdownToHtmlPage";
import { handleWebsiteHeadersApi } from "./tools/websiteHeaders";

type Env = {
	ASSETS: Fetcher;
	SITE_DEFAULT_LANG?: string;
	SITE_LANGS?: string;
};

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

const DEFAULT_LANGS: SiteLang[] = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

const parseLangList = (raw: string | undefined) => {
	const items = String(raw || "")
		.split(",")
		.map((s) => s.trim())
		.filter(Boolean);
	return Array.from(new Set(items));
};

const getEnabledLangs = (env: Env): SiteLang[] => {
	const list = parseLangList(env.SITE_LANGS);
	const enabled = list.filter((x) => isSupportedLang(x)) as SiteLang[];
	const fallback = getFallbackLang(env);
	const out = Array.from(new Set([...(enabled.length ? enabled : DEFAULT_LANGS), fallback]));
	return out as SiteLang[];
};

const getFallbackLang = (env: Env): SiteLang => {
	const raw = (env.SITE_DEFAULT_LANG || "en").trim();
	return (isSupportedLang(raw) ? raw : "en") as SiteLang;
};

const getDefaultLang = (env: Env, enabled: SiteLang[]): SiteLang => {
	const fallback = getFallbackLang(env);
	return enabled.includes(fallback) ? fallback : (enabled[0] || fallback);
};

const parseAcceptLanguage = (value: string | null) => {
	if (!value) return [] as { tag: string; q: number }[];
	return value
		.split(",")
		.map((part) => {
			const [tagRaw, ...params] = part.trim().split(";");
			let q = 1;
			for (const p of params) {
				const m = p.trim().match(/^q=(0(\.\d+)?|1(\.0+)?)$/);
				if (m) q = Number(m[1]);
			}
			return { tag: tagRaw.trim().toLowerCase(), q };
		})
		.filter((x) => x.tag)
		.sort((a, b) => b.q - a.q);
};

const pickLang = (acceptLanguage: string | null, enabled: SiteLang[], fallback: SiteLang): SiteLang => {
	const candidates = parseAcceptLanguage(acceptLanguage);
	for (const c of candidates) {
		const primary = c.tag.split("-")[0];
		if (isSupportedLang(primary) && enabled.includes(primary as SiteLang)) return primary as SiteLang;
	}
	if (enabled.includes(fallback)) return fallback;
	return enabled[0] || fallback;
};

const getExplicitLangFromPath = (pathname: string, enabled: SiteLang[]) => {
	const seg = pathname.replace(/^\/+/, "").split("/")[0].toLowerCase();
	if (isSupportedLang(seg) && enabled.includes(seg as SiteLang)) return seg as SiteLang;
	return null;
};

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith("/") ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

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
for (const code of DEFAULT_LANGS) {
	app.get(`/${code}`, (c) => c.redirect(`/${code}/`, 308));
	app.get(`/${code}/`, async (c) => {
		const accept = c.req.header('accept') || '';
		if (!accept.includes('text/html')) return c.notFound();
		const res = await fetchAsset(c, `/_pages/${code}/index.html`);
		return res;
	});
}

app.use("/*", async (c, next) => {
	const url = new URL(c.req.url);
	const pathname = url.pathname;

	// Global (non-localized) pages.
	if (pathname === "/devlogs" || pathname.startsWith("/devlogs/")) return next();
	if (pathname === "/tools/markdown-to-html.html") return next();

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

app.get("/tools/website-headers", (c) => {
	const enabled = getEnabledLangs(c.env);
	const defaultLang = getDefaultLang(c.env, enabled);
	const html = renderWebsiteHeadersPage(defaultLang, defaultLang);
	return c.html(html);
});

app.get("/:lang/tools/website-headers", (c) => {
	const langParam = c.req.param("lang");
	const enabled = getEnabledLangs(c.env);
	const defaultLang = getDefaultLang(c.env, enabled);
	if (!isSupportedLang(langParam)) {
		return c.redirect(withLangPrefix(defaultLang, "/tools/website-headers", defaultLang), 302);
	}
	const lang = (enabled.includes(langParam as SiteLang) ? (langParam as SiteLang) : defaultLang) as SiteLang;
	const html = renderWebsiteHeadersPage(lang, defaultLang);
	return c.html(html);
});

// Legacy static tool page: redirect to dynamic route.
app.get("/tools/markdown-to-html.html", (c) => c.redirect("/tools/markdown-to-html", 301));

app.get("/tools/markdown-to-html", (c) => {
	const enabled = getEnabledLangs(c.env);
	const defaultLang = getDefaultLang(c.env, enabled);
	const html = renderMarkdownToHtmlPage({ lang: defaultLang, defaultLang, enabledLangs: enabled });
	return c.html(html);
});

app.get("/:lang/tools/markdown-to-html", (c) => {
	const langParam = c.req.param("lang");
	const enabled = getEnabledLangs(c.env);
	const defaultLang = getDefaultLang(c.env, enabled);
	if (!isSupportedLang(langParam)) {
		return c.redirect(withLangPrefix(defaultLang, "/tools/markdown-to-html", defaultLang), 302);
	}
	const lang = (enabled.includes(langParam as SiteLang) ? (langParam as SiteLang) : defaultLang) as SiteLang;
	const html = renderMarkdownToHtmlPage({ lang, defaultLang, enabledLangs: enabled });
	return c.html(html);
});

// Catch-all (GET): perform language negotiation before falling back to static assets.
app.get("/*", (c) => {
	const url = new URL(c.req.url);
	const pathname = url.pathname;

	// Global (non-localized) pages.
	if (pathname === "/devlogs" || pathname.startsWith("/devlogs/")) return c.notFound();
	if (pathname === "/tools/markdown-to-html.html") return c.notFound();
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
		const response = await app.fetch(request, env, ctx);
		if (response.status === 404) {
			return env.ASSETS.fetch(request);
		}
		return response;
	},
};
