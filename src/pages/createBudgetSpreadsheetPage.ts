/**
 * 预算电子表格生成器：类别+金额行 → 预览合计 → 下载含 SUM 的 xlsx。
 * YMYL：规划数字，非理财/税务建议。本地 SheetJS，不上传。
 * slug: create-budget-spreadsheet。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_create_budget_spreadsheet';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 create-budget-spreadsheet 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderCreateBudgetSpreadsheetPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/create-budget-spreadsheet';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'create-budget-spreadsheet',
			currentAnchor: '#create-budget',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .bdg-warn { background:#fff3cd; border:1px solid #ffecb5; color:#664d03; padding:.75rem 1rem; border-radius:8px; margin-bottom:1rem; font-size:.92rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .bdg-h { font-size:1rem; font-weight:600; margin:0 0 .5rem; }
    .bdg-meta { color:#495057; font-size:.92rem; margin-top:.5rem; }
    .bdg-table { width:100%; border-collapse:collapse; font-size:.92rem; }
    .bdg-table th, .bdg-table td { border:1px solid #dee2e6; padding:.4rem .55rem; text-align:start; }
    .bdg-table th { background:#e9ecef; }
    .bdg-table td.num, .bdg-table th.num { text-align:end; font-variant-numeric:tabular-nums; }
    .bdg-table tr.total td { font-weight:600; background:#fff; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.bdg-err { color:#b02a37; font-weight:500; margin-top:0; }
    textarea.input-lg { min-height:7rem; resize:vertical; font-family:inherit }
  </style>`;

	const contentHtml = `
    <div id="create-budget" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="bdg-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="bdgForm" novalidate>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-group">
            <label class="form-label" for="bdgInput">${escapeHtml(tx('input_label'))}</label>
            <textarea id="bdgInput" class="input-lg" rows="6"
              placeholder="${escapeHtml(tx('input_ph'))}"></textarea>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('write'))}</button>
            <button type="button" id="bdgDl" class="btn btn-outline-secondary">${escapeHtml(tx('download'))}</button>
            <button type="button" id="bdgSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="bdgClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="bdgResult" class="result" style="display:none" aria-live="polite">
          <div class="bdg-h">${escapeHtml(tx('preview_title'))}</div>
          <div id="bdgTableWrap"></div>
          <div id="bdgMeta" class="bdg-meta"></div>
          <div id="bdgNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({
			lang: opts.lang,
			prefix: PREFIX,
			mode: 'rules',
			howItemCount: 4,
			whyChooseItemCount: 5,
			usecaseCount: 4,
			ruleItemCount: 5,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/' },
			{ label: tx('ref_b_label'), href: 'https://docs.sheetjs.com/' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		empty: tx('empty'),
		needLib: tx('need_lib'),
		colCat: tx('col_category'),
		colAmt: tx('col_amount'),
		totalLabel: tx('total_label'),
		rowsLabel: tx('rows_label'),
		ready: tx('ready_note'),
		sheetName: tx('sheet_name'),
	};

	const extraBodyHtml = `
  <script src="/vendor/xlsx/xlsx.full.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 控件与文案。 */
      var form = document.getElementById('bdgForm');
      var inputEl = document.getElementById('bdgInput');
      var result = document.getElementById('bdgResult');
      var tableWrap = document.getElementById('bdgTableWrap');
      var metaEl = document.getElementById('bdgMeta');
      var noteEl = document.getElementById('bdgNote');
      var T = ${JSON.stringify(clientText)};
      /** 最近一次成功解析的二维表（含表头与合计行）。 */
      var lastAoa = null;
      var sampleIndex = 0;
      var SAMPLES = [
        'Rent,1200\\nFood,400',
        'Rent,1200\\nFood,400\\nUtilities,150\\nTransport,200',
        'Hotel,320\\nFlights,480\\nFood,150'
      ];

      /**
       * 格式化金额（拉丁数字）。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmt(n) {
        if (!isFinite(n)) return '—';
        try {
          return new Intl.NumberFormat(T.lang + '-u-nu-latn', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 0
          }).format(n);
        } catch (e) {
          return String(n);
        }
      }

      /**
       * 拆分一行的类别与金额。
       * @param {string} line 一行
       * @returns {{cat:string, amt:number}|null}
       */
      function parseLine(line) {
        var s = String(line || '').trim();
        if (!s) return null;
        var comma = s.indexOf(',');
        var tab = s.indexOf('\\t');
        var idx = -1;
        if (comma >= 0 && tab >= 0) idx = Math.min(comma, tab);
        else if (comma >= 0) idx = comma;
        else if (tab >= 0) idx = tab;
        if (idx < 0) return null;
        var cat = s.slice(0, idx).trim();
        var amtRaw = s.slice(idx + 1).trim().replace(',', '.');
        var amt = Number(amtRaw);
        if (!cat || !isFinite(amt)) return null;
        return { cat: cat, amt: amt };
      }

      /**
       * 解析全部行，生成 aoa 与合计。
       * @returns {{ok:true, aoa:any[][], sum:number, count:number}|{ok:false}}
       */
      function build() {
        var lines = String(inputEl.value || '').split('\\n');
        var rows = [];
        for (var i = 0; i < lines.length; i++) {
          var parsed = parseLine(lines[i].replace(/\\r/g, ''));
          if (parsed) rows.push(parsed);
        }
        if (!rows.length) return { ok: false };
        var aoa = [[T.colCat, T.colAmt]];
        var sum = 0;
        for (var j = 0; j < rows.length; j++) {
          aoa.push([rows[j].cat, rows[j].amt]);
          sum += rows[j].amt;
        }
        aoa.push([T.totalLabel, sum]);
        return { ok: true, aoa: aoa, sum: sum, count: rows.length };
      }

      /**
       * 渲染预览表。
       * @param {any[][]} aoa 表数据
       * @param {number} sum 合计
       * @param {number} count 行数
       */
      function renderPreview(aoa, sum, count) {
        var html = '<table class="bdg-table"><thead><tr><th>' + T.colCat + '</th><th class="num">' + T.colAmt + '</th></tr></thead><tbody>';
        for (var i = 1; i < aoa.length - 1; i++) {
          html += '<tr><td>' + String(aoa[i][0]).replace(/</g, '&lt;') + '</td><td class="num">' + fmt(aoa[i][1]) + '</td></tr>';
        }
        html += '<tr class="total"><td>' + T.totalLabel + '</td><td class="num">' + fmt(sum) + '</td></tr>';
        html += '</tbody></table>';
        tableWrap.innerHTML = html;
        metaEl.textContent = T.rowsLabel + ': ' + String(count) + ' · ' + T.totalLabel + ': ' + fmt(sum);
      }

      /** 生成预览。 */
      function run() {
        var r = build();
        result.style.display = 'block';
        if (!r.ok) {
          lastAoa = null;
          tableWrap.innerHTML = '';
          metaEl.textContent = '';
          noteEl.className = 'muted bdg-err';
          noteEl.textContent = T.empty;
          return false;
        }
        lastAoa = r.aoa;
        renderPreview(r.aoa, r.sum, r.count);
        noteEl.className = 'muted';
        noteEl.textContent = T.ready;
        return true;
      }

      /** 下载 xlsx（Total 单元格写 SUM 公式）。 */
      function download() {
        if (typeof XLSX === 'undefined') {
          result.style.display = 'block';
          noteEl.className = 'muted bdg-err';
          noteEl.textContent = T.needLib;
          return;
        }
        if (!lastAoa) {
          if (!run()) return;
        }
        if (!lastAoa) return;
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.aoa_to_sheet(lastAoa);
        var totalRow = lastAoa.length;
        ws['B' + totalRow] = { t: 'n', f: 'SUM(B2:B' + (totalRow - 1) + ')', v: lastAoa[totalRow - 1][1] };
        XLSX.utils.book_append_sheet(wb, ws, T.sheetName || 'Budget');
        XLSX.writeFile(wb, 'budget.xlsx');
      }

      /** 轮换样例。 */
      function loadSample() {
        inputEl.value = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        run();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      document.getElementById('bdgDl').addEventListener('click', download);
      document.getElementById('bdgSample').addEventListener('click', loadSample);
      document.getElementById('bdgClear').addEventListener('click', function () {
        form.reset();
        inputEl.value = '';
        lastAoa = null;
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('create-budget-spreadsheet');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as keyof typeof import('../site/i18n/en').default),
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
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
