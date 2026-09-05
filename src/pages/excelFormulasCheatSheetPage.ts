/**
 * excel-formulas-cheat-sheet tool page.
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
const PREFIX = 'tool_excel_formulas_cheat_sheet';

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
 * Render the excel-formulas-cheat-sheet page.
 * @param opts.lang Active language
 * @param opts.defaultLang Default language
 * @param opts.enabledLangs Enabled languages
 */
export const renderExcelFormulasCheatSheetPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** Canonical tool path without language prefix. */
	const toolPath = '/tools/excel-formulas-cheat-sheet';
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
			currentSlug: 'excel-formulas-cheat-sheet',
			currentAnchor: '#excel',
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
    <div id="excel" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>
    <div class="tool-panel">
      
      <label class="form-label" for="exFilter">${escapeHtml(tx(opts.lang, 'filter'))}</label>
      <input id="exFilter" class="form-control mb-2">
      <div id="exCards" class="small"></div>
      <button type="button" class="btn btn-outline-secondary btn-sm mt-2" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
      <pre id="exOut" class="small bg-light p-2 mt-2"></pre>
      <div class="small mt-3 d-flex flex-wrap gap-3">
        <a href="${withLangPrefix(opts.lang, '/tools/write-nested-if-formula-for-excel', opts.defaultLang)}">${escapeHtml(t(opts.lang, 'tool_write_nested_if_formula_for_excel_title' as Parameters<typeof t>[1]))}</a>
        <a href="${withLangPrefix(opts.lang, '/tools/write-ifs-formula-in-excel', opts.defaultLang)}">${escapeHtml(t(opts.lang, 'tool_write_ifs_formula_in_excel_title' as Parameters<typeof t>[1]))}</a>
        <a href="${withLangPrefix(opts.lang, '/tools/wrap-formula-with-ifna', opts.defaultLang)}">${escapeHtml(t(opts.lang, 'tool_wrap_formula_with_ifna_title' as Parameters<typeof t>[1]))}</a>
        <a href="${withLangPrefix(opts.lang, '/tools/write-countif-formula-in-excel', opts.defaultLang)}">${escapeHtml(t(opts.lang, 'tool_write_countif_formula_in_excel_title' as Parameters<typeof t>[1]))}</a>
      </div>

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
			{ label: "Excel functions (Microsoft)", href: "https://support.microsoft.com/office/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb" }
		],
	});
	/** Client script (loadSample required). */
	const extraBodyHtml = `
  <script>
    (function () {
      
      var cards = [
        { k: 'IF', f: '=IF(A1>0,"yes","no")' },
        { k: 'IFS', f: '=IFS(A1="West","A",TRUE,"Other")' },
        { k: 'IFNA', f: '=IFNA(VLOOKUP(A1,B:C,2,FALSE),0)' },
        { k: 'COUNTIF', f: '=COUNTIF(A:A,"West")' },
        { k: 'SUMIF', f: '=SUMIF(A:A,"West",B:B)' },
        { k: 'VLOOKUP', f: '=VLOOKUP(A1,B:C,2,FALSE)' },
        { k: 'XLOOKUP', f: '=XLOOKUP(A1,B:B,C:C,"")' },
        { k: 'TEXT', f: '=TEXT(A1,"yyyy-mm-dd")' }
      ];
      var box = document.getElementById('exCards');
      var filter = document.getElementById('exFilter');
      var out = document.getElementById('exOut');
      function render() {
        var q = (filter.value || '').toLowerCase();
        box.innerHTML = '';
        cards.forEach(function (c) {
          if (q && c.k.toLowerCase().indexOf(q) < 0 && c.f.toLowerCase().indexOf(q) < 0) return;
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'btn btn-outline-success btn-sm me-1 mb-1';
          b.textContent = c.k;
          b.addEventListener('click', function () {
            out.textContent = c.f;
            if (navigator.clipboard) navigator.clipboard.writeText(c.f);
          });
          box.appendChild(b);
        });
      }
      function loadSample() { filter.value = 'IF'; render(); out.textContent = '=IF(A1>0,"yes","no")'; }
      filter.addEventListener('input', render);
      document.getElementById('exSample').addEventListener('click', loadSample);

      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;
	const toolMeta = getToolBySlug('excel-formulas-cheat-sheet');
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
