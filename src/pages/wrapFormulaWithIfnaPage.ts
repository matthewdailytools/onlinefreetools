/**
 * wrap-formula-with-ifna tool page.
 * Scene H1 from Excel Planner analysis; local processing only.
 */
import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import {
	renderToolExtraSections,
	renderToolIgSections,
	renderToolReferencesSection,
	buildToolJsonLd,
} from './site/toolContent';

/** i18n prefix (catalog faqPrefix). */
const PREFIX = 'tool_wrap_formula_with_ifna';

/**
 * Prefix a path with the language segment (default language has none).
 * @param lang Active language
 * @param pathname Absolute path
 * @param defaultLang Site default language
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * Read one i18n suffix for this tool.
 * @param lang Active language
 * @param suffix Key after PREFIX_
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * Render the wrap-formula-with-ifna page.
 * @param opts.lang Active language
 * @param opts.defaultLang Default language
 * @param opts.enabledLangs Enabled languages
 */
export const renderWrapFormulaWithIfnaPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** Canonical tool path without language prefix. */
	const toolPath = '/tools/wrap-formula-with-ifna';
	/** Language-aware canonical path. */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** Document title. */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** Meta description. */
	const description = tx(opts.lang, 'description');
	/** Header nav. */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * Language switcher URLs always include an explicit language prefix.
	 * @param code Target language
	 * @param pathname Tool path
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** Language menu map. */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);
	/** hreflang list. */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));
	/** Header HTML. */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});
	/** Sidebar HTML. */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'wrap-formula-with-ifna',
			currentAnchor: '#wrap',
		}),
		id: 'toolNav',
	});
	/** Footer HTML. */
	const footerHtml = renderFooter({ lang: opts.lang });
	/** Page-local CSS. */
	const extraHeadHtml = `
  <style>
    .tool-panel pre{white-space:pre-wrap;word-break:break-all} #exOut{min-height:3rem}
  </style>`;
	/** Interactive card. */
	const contentHtml = `
    <div id="wrap" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>
    <div class="tool-panel">
      
      <label class="form-label" for="exInner">${escapeHtml(tx(opts.lang, 'inner'))}</label>
      <input id="exInner" class="form-control mb-2">
      <label class="form-label" for="exAlt">${escapeHtml(tx(opts.lang, 'alt'))}</label>
      <input id="exAlt" class="form-control mb-2">
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exCopy">${escapeHtml(tx(opts.lang, 'copy'))}</button>
      </div>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <pre id="exOut" class="small bg-light p-2"></pre>

    </div>`;
	/** How / rules / example. */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});
	/** References. */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: "Microsoft IFNA function", href: "https://support.microsoft.com/office/ifna-function-6626c961-a569-4285-a007-fd63f707fe24" }
		],
	});
	/** Client script (loadSample required). */
	const extraBodyHtml = `
  <script>
    (function () {
      
      var inner = document.getElementById('exInner');
      var alt = document.getElementById('exAlt');
      var out = document.getElementById('exOut');
      var errEl = document.getElementById('exErr');
      function showErr(t) { errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }
      function lit(val) {
        var n = String(val).trim();
        if (/^-?\d+(\.\d+)?$/.test(n)) return n;
        return '"' + String(val).replace(/"/g, '""') + '"';
      }
      function run() {
        var raw = (inner.value || '').trim().replace(/^=/, '');
        if (!raw) { showErr(${JSON.stringify(tx(opts.lang, 'empty'))}); return; }
        showErr('');
        out.textContent = '=IFNA(' + raw + ',' + lit(alt.value) + ')';
      }
      function loadSample() { inner.value = 'NA()'; alt.value = '0'; run(); }
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () { inner.value = ''; alt.value = ''; out.textContent = ''; });
      document.getElementById('exCopy').addEventListener('click', function () { if (out.textContent && navigator.clipboard) navigator.clipboard.writeText(out.textContent); });

      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;
	const toolMeta = getToolBySlug('wrap-formula-with-ifna');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as Parameters<typeof t>[1]),
				description,
				canonicalPath,
			})
		: '';
	return renderLayout({
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		ogType: 'website',
		alternates,
		headerHtml,
		sidebarHtml,
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
