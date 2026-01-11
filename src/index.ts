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
import { registerToolPage } from "./site/toolRegistrar";
import { handleWebsiteHeadersApi } from "./tools/websiteHeaders";
import { handleIpAddress } from "./endpoints/ipAddress";

type Env = {
	ASSETS: Fetcher;
	SITE_DEFAULT_LANG?: string;
	SITE_LANGS?: string;
};

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
app.get("/api/tools/ip-address", handleIpAddress);

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