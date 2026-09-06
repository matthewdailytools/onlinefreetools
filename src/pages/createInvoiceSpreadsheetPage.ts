/**
 * create-invoice-spreadsheet tool page.
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
const PREFIX = 'tool_create_invoice_spreadsheet';

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
 * Render the create-invoice-spreadsheet page.
 * @param opts.lang Active language
 * @param opts.defaultLang Default language
 * @param opts.enabledLangs Enabled languages
 */
export const renderCreateInvoiceSpreadsheetPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** Canonical tool path without language prefix. */
	const toolPath = '/tools/create-invoice-spreadsheet';
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
			currentSlug: 'create-invoice-spreadsheet',
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
      
      <div class="row g-2 mb-2">
        <div class="col-md-6"><label class="form-label" for="invSeller">${escapeHtml(tx(opts.lang, 'seller'))}</label><input id="invSeller" class="form-control form-control-sm" placeholder="${escapeHtml(tx(opts.lang, 'seller'))}"></div>
        <div class="col-md-6"><label class="form-label" for="invBuyer">${escapeHtml(tx(opts.lang, 'buyer'))}</label><input id="invBuyer" class="form-control form-control-sm" placeholder="${escapeHtml(tx(opts.lang, 'buyer'))}"></div>
      </div>
      <label class="form-label" for="invLines">${escapeHtml(tx(opts.lang, 'lines'))}</label>
      <textarea id="invLines" class="form-control mb-2" rows="4" placeholder="${escapeHtml(tx(opts.lang, 'lines'))}"></textarea>
      <label class="form-label" for="invTax">${escapeHtml(tx(opts.lang, 'tax'))}</label>
      <input id="invTax" class="form-control form-control-sm mb-2" value="10">
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
			{ label: "ECMA-376 OOXML", href: "https://www.ecma-international.org/publications-and-standards/standards/ecma-376/" },
			{ label: "SheetJS docs", href: "https://docs.sheetjs.com/" }
		],
	});
	/** Client script (loadSample required). */
	const extraBodyHtml = `
  <script src="/vendor/xlsx/xlsx.full.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      
      var errEl = document.getElementById('exErr');
      var out = document.getElementById('exOut');
      var last = null;
      function showErr(t) { errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }
      function rows() {
        var lines = (document.getElementById('invLines').value || '').trim().split(String.fromCharCode(10));
        var items = [];
        lines.forEach(function (ln) {
          var p = ln.split(',');
          if (p.length < 3) return;
          var qty = Number(p[1]); var price = Number(p[2]);
          if (!isFinite(qty) || !isFinite(price)) return;
          items.push({ d: p[0].trim(), qty: qty, price: price, line: qty * price });
        });
        return items;
      }
      function aoa() {
        var items = rows();
        var sub = 0;
        items.forEach(function (it) { sub += it.line; });
        var taxp = Number(document.getElementById('invTax').value) || 0;
        var tax = sub * taxp / 100;
        var aoa = [['Seller', document.getElementById('invSeller').value], ['Buyer', document.getElementById('invBuyer').value], [], ['Item','Qty','Price','Line'],];
        items.forEach(function (it) { aoa.push([it.d, it.qty, it.price, it.line]); });
        aoa.push([]); aoa.push(['Subtotal', sub]); aoa.push(['Tax', tax]); aoa.push(['Total', sub + tax]);
        return { aoa: aoa, items: items, subtotal: sub, taxPercent: taxp, total: sub + tax };
      }
      function run() {
        var r = aoa();
        if (!r.items.length) { showErr(${JSON.stringify(tx(opts.lang, 'empty'))}); last = null; out.textContent = ''; return; }
        showErr('');
        last = r;
        out.textContent = r.aoa.map(function (row) { return row.join('\t'); }).join(String.fromCharCode(10));
      }
      function loadSample() {
        document.getElementById('invSeller').value = 'North Shop';
        document.getElementById('invBuyer').value = 'Ada';
        document.getElementById('invLines').value = 'Widget,2,10';
        document.getElementById('invTax').value = '10';
        run();
      }
      function dl() {
        if (typeof XLSX === 'undefined') { showErr(${JSON.stringify(tx(opts.lang, 'need_lib'))}); return; }
        if (!last) run();
        if (!last) return;
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.aoa_to_sheet(last.aoa);
        last.items.forEach(function (item, index) {
          var row = index + 5;
          ws['D' + row] = { t: 'n', f: 'B' + row + '*C' + row, v: item.line };
        });
        var subtotalRow = last.items.length + 6;
        var taxRow = subtotalRow + 1;
        var totalRow = subtotalRow + 2;
        ws['B' + subtotalRow] = { t: 'n', f: 'SUM(D5:D' + (last.items.length + 4) + ')', v: last.subtotal };
        ws['B' + taxRow] = { t: 'n', f: 'B' + subtotalRow + '*' + last.taxPercent + '%', v: last.subtotal * last.taxPercent / 100 };
        ws['B' + totalRow] = { t: 'n', f: 'B' + subtotalRow + '+B' + taxRow, v: last.total };
        XLSX.utils.book_append_sheet(wb, ws, 'Invoice');
        XLSX.writeFile(wb, 'invoice.xlsx');
      }
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exDl').addEventListener('click', dl);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () {
        document.getElementById('invSeller').value = '';
        document.getElementById('invBuyer').value = '';
        document.getElementById('invLines').value = '';
        document.getElementById('invTax').value = '';
        out.textContent = '';
        last = null;
        showErr('');
      });

      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;
	const toolMeta = getToolBySlug('create-invoice-spreadsheet');
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
