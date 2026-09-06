/**
 * create-excel-timesheet tool page.
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
const PREFIX = 'tool_create_excel_timesheet';

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
 * Render the create-excel-timesheet page.
 * @param opts.lang Active language
 * @param opts.defaultLang Default language
 * @param opts.enabledLangs Enabled languages
 */
export const renderCreateExcelTimesheetPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** Canonical tool path without language prefix. */
	const toolPath = '/tools/create-excel-timesheet';
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
			currentSlug: 'create-excel-timesheet',
			currentAnchor: '#create',
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
    <div id="create" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>
    <div class="tool-panel">
      
      <textarea id="ts" class="form-control mb-2" rows="5" placeholder="2026-09-01,Ops,8"></textarea>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exDl">${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
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
			{ label: "SheetJS docs", href: "https://docs.sheetjs.com/" },
			{ label: "ECMA-376 OOXML", href: "https://www.ecma-international.org/publications-and-standards/standards/ecma-376/" }
		],
	});
	/** Client script (loadSample required). */
	const extraBodyHtml = `
  <script src="/vendor/xlsx/xlsx.full.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      
      var errEl = document.getElementById('exErr'); var out = document.getElementById('exOut'); var last = null;
      function showErr(t) { errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }
      function build() {
        var aoa = [['Date','Project','Hours']]; var sum = 0;
        (document.getElementById('ts').value || '').split(String.fromCharCode(10)).forEach(function (ln) {
          var p = ln.split(','); if (p.length < 3) return;
          var n = Number(p[2]); if (!isFinite(n)) return;
          aoa.push([p[0].trim(), p[1].trim(), n]); sum += n;
        });
        aoa.push(['Total','', sum]);
        return { aoa: aoa, sum: sum };
      }
      function run() {
        var r = build();
        if (r.aoa.length < 3) { showErr(${JSON.stringify(tx(opts.lang, 'empty'))}); return; }
        showErr(''); last = r.aoa; out.textContent = 'hours ' + r.sum;
      }
      function loadSample() {
        document.getElementById('ts').value = ['2026-09-07,Ops,8','2026-09-08,Ops,8','2026-09-09,Ops,8','2026-09-10,Ops,8','2026-09-11,Ops,8'].join(String.fromCharCode(10));
        run();
      }
      function dl() {
        if (typeof XLSX === 'undefined') { showErr(${JSON.stringify(tx(opts.lang, 'need_lib'))}); return; }
        if (!last) run(); if (!last) return;
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.aoa_to_sheet(last);
        var totalRow = last.length;
        ws['C' + totalRow] = { t: 'n', f: 'SUM(C2:C' + (totalRow - 1) + ')', v: last[totalRow - 1][2] };
        XLSX.utils.book_append_sheet(wb, ws, 'Timesheet');
        XLSX.writeFile(wb, 'timesheet.xlsx');
      }
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exDl').addEventListener('click', dl);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () { document.getElementById('ts').value = ''; out.textContent = ''; last = null; });

      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;
	const toolMeta = getToolBySlug('create-excel-timesheet');
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
