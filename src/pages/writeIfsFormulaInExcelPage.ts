/**
 * write-ifs-formula-in-excel tool page.
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
const PREFIX = 'tool_write_ifs_formula_in_excel';

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
 * Render the write-ifs-formula-in-excel page.
 * @param opts.lang Active language
 * @param opts.defaultLang Default language
 * @param opts.enabledLangs Enabled languages
 */
export const renderWriteIfsFormulaInExcelPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** Canonical tool path without language prefix. */
	const toolPath = '/tools/write-ifs-formula-in-excel';
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
			currentSlug: 'write-ifs-formula-in-excel',
			currentAnchor: '#write',
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
    <div id="write" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>
    <div class="tool-panel">
      
      <div class="row g-2 mb-2">
        <div class="col-6 col-md-3"><label class="form-label" for="exCell">${escapeHtml(tx(opts.lang, 'cell'))}</label><input id="exCell" class="form-control form-control-sm" value="A1"></div>
        <div class="col-6 col-md-3"><label class="form-label" for="exTrial">${escapeHtml(tx(opts.lang, 'trial'))}</label><input id="exTrial" class="form-control form-control-sm"></div>
        <div class="col-12 col-md-6"><label class="form-label" for="exElse">${escapeHtml(tx(opts.lang, 'else'))}</label><input id="exElse" class="form-control form-control-sm"></div>
      </div>
      <div class="table-responsive mb-2"><table class="table table-sm"><thead><tr><th></th><th></th><th></th></tr></thead><tbody id="exRows"></tbody></table></div>
      <div class="d-flex flex-wrap gap-2 mb-2">
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exAdd">${escapeHtml(tx(opts.lang, 'add'))}</button>
        <button type="button" class="btn btn-primary btn-sm" id="exWrite">${escapeHtml(tx(opts.lang, 'write'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exSample">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exClear">${escapeHtml(tx(opts.lang, 'clear'))}</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="exCopy">${escapeHtml(tx(opts.lang, 'copy'))}</button>
      </div>
      <p id="exNote" class="small text-muted"></p>
      <p id="exErr" class="alert alert-danger py-2 small" style="display:none"></p>
      <p class="small mb-1">${escapeHtml(tx(opts.lang, 'formula'))}</p>
      <pre id="exOut" class="small bg-light p-2"></pre>
      <p class="small mb-0">${escapeHtml(tx(opts.lang, 'trial'))}: <span id="exTrialOut"></span></p>

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
			{ label: "Microsoft IFS function", href: "https://support.microsoft.com/office/ifs-function-36329a26-37b2-467c-972b-4a39bd951d45" }
		],
	});
	/** Client script (loadSample required). */
	const extraBodyHtml = `
  <script>
    (function () {
      
      var cellEl = document.getElementById('exCell');
      var elseEl = document.getElementById('exElse');
      var trialEl = document.getElementById('exTrial');
      var body = document.getElementById('exRows');
      var out = document.getElementById('exOut');
      var trialOut = document.getElementById('exTrialOut');
      var errEl = document.getElementById('exErr');
      var noteEl = document.getElementById('exNote');
      var msgEmpty = ${JSON.stringify(tx(opts.lang, 'empty'))};
      function showErr(t) { errEl.style.display = t ? '' : 'none'; errEl.textContent = t || ''; }
      function xlQ(s) { return '"' + String(s).replace(/"/g, '""') + '"'; }
      function testExpr(cell, op, val) {
        if (op === 'blank') return cell + '=""';
        if (op === 'contains') return 'ISNUMBER(SEARCH(' + xlQ(val) + ',' + cell + '))';
        var n = String(val).trim();
        if (/^-?\d+(\.\d+)?$/.test(n)) return cell + '=' + n;
        return cell + '=' + xlQ(val);
      }
      function lit(val) {
        var n = String(val).trim();
        if (/^-?\d+(\.\d+)?$/.test(n)) return n;
        return xlQ(val);
      }
      function rows() {
        var list = [];
        body.querySelectorAll('tr').forEach(function (tr) {
          list.push({
            op: tr.querySelector('.exOp').value,
            val: tr.querySelector('.exVal').value,
            then: tr.querySelector('.exThen').value
          });
        });
        return list;
      }
      function emitNested(cell, list, els) {
        var acc = lit(els);
        for (var i = list.length - 1; i >= 0; i--) {
          acc = 'IF(' + testExpr(cell, list[i].op, list[i].val) + ',' + lit(list[i].then) + ',' + acc + ')';
        }
        return '=' + acc;
      }
      function emitIfs(cell, list, els) {
        var parts = [];
        list.forEach(function (r) { parts.push(testExpr(cell, r.op, r.val) + ',' + lit(r.then)); });
        parts.push('TRUE,' + lit(els));
        return '=IFS(' + parts.join(',') + ')';
      }
      function jsTest(cellVal, op, val) {
        var a = String(cellVal);
        if (op === 'blank') return a === '';
        if (op === 'contains') return a.toLowerCase().indexOf(String(val).toLowerCase()) >= 0;
        return a.trim().toLowerCase() === String(val).trim().toLowerCase();
      }
      function trial(list, cellVal, els) {
        for (var i = 0; i < list.length; i++) {
          if (jsTest(cellVal, list[i].op, list[i].val)) return list[i].then;
        }
        return els;
      }
      function addRow(op, val, thenv) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td><select class="form-select form-select-sm exOp"><option value="eq">' + ${JSON.stringify(tx(opts.lang, 'op_eq'))} + '</option><option value="contains">' + ${JSON.stringify(tx(opts.lang, 'op_contains'))} + '</option><option value="blank">' + ${JSON.stringify(tx(opts.lang, 'op_blank'))} + '</option></select></td>' +
          '<td><input class="form-control form-control-sm exVal"></td>' +
          '<td><input class="form-control form-control-sm exThen"></td>';
        body.appendChild(tr);
        tr.querySelector('.exOp').value = op || 'eq';
        tr.querySelector('.exVal').value = val || '';
        tr.querySelector('.exThen').value = thenv || '';
      }
      function run() {
        var cell = (cellEl.value || 'A1').trim();
        var list = rows();
        if (!list.length) { showErr(msgEmpty); return; }
        showErr('');
        var formula = emitIfs(cell, list, elseEl.value);
        out.textContent = formula;
        trialOut.textContent = String(trial(list, trialEl.value, elseEl.value));
        noteEl.textContent = ${JSON.stringify(tx(opts.lang, 'note_2016'))};
      }
      function loadSample() {
        body.innerHTML = '';
        cellEl.value = 'A1';
        trialEl.value = 'West';
        elseEl.value = 'Other';
        addRow('eq', 'West', 'A');
        addRow('eq', 'East', 'B');
        run();
      }
      document.getElementById('exAdd').addEventListener('click', function () { addRow('eq', '', ''); });
      document.getElementById('exWrite').addEventListener('click', run);
      document.getElementById('exSample').addEventListener('click', loadSample);
      document.getElementById('exClear').addEventListener('click', function () { body.innerHTML = ''; out.textContent = ''; trialOut.textContent = ''; showErr(msgEmpty); });
      document.getElementById('exCopy').addEventListener('click', function () {
        if (out.textContent && navigator.clipboard) navigator.clipboard.writeText(out.textContent);
      });

      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;
	const toolMeta = getToolBySlug('write-ifs-formula-in-excel');
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
