/**
 * Excel/CSV 按单元格坐标对比，默认第一张工作表。
 * slug: excel-compare-files。
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
const PREFIX = 'tool_excel_compare_files';

/**
 * 语言前缀路径。
 * @param lang 语言
 * @param pathname 路径
 * @param defaultLang 默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读 i18n 后缀。
 * @param lang 语言
 * @param suffix 后缀
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * 渲染 Excel 文件对比页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 启用语言
 */
export const renderExcelCompareFilesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径。 */
	const toolPath = '/tools/excel-compare-files';
	/** canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** title。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** description。 */
	const description = tx(opts.lang, 'description');
	/** 导航。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换。
	 * @param code 语言码
	 * @param pathname 路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言菜单。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);
	/** hreflang。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));
	/** 顶栏。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});
	/** 侧栏。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'excel-compare-files',
			currentAnchor: '#excel-compare',
		}),
		id: 'toolNav',
	});
	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });
	/** 表格结果样式。 */
	const extraHeadHtml = `
  <style>
    #xlOut { min-height: 120px; max-height: 420px; overflow: auto; font-size: .85rem; }
    #xlOut table { width: 100%; }
  </style>`;

	/** 首屏两个表格文件。 */
	const contentHtml = `
    <div id="excel-compare" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>
    <div class="tool-panel">
      <div class="row g-3 mb-3">
        <div class="col-12 col-md-6">
          <label class="form-label" for="xlFileA">${escapeHtml(tx(opts.lang, 'label_a'))}</label>
          <input type="file" class="form-control" id="xlFileA" accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv">
          <p class="small text-muted mb-0 mt-1" id="xlNameA"></p>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label" for="xlFileB">${escapeHtml(tx(opts.lang, 'label_b'))}</label>
          <input type="file" class="form-control" id="xlFileB" accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv">
          <p class="small text-muted mb-0 mt-1" id="xlNameB"></p>
        </div>
      </div>
      <div class="row g-3 mb-3">
        <div class="col-12 col-md-6">
          <label class="form-label" for="xlSheetA">${escapeHtml(tx(opts.lang, 'sheet_a'))}</label>
          <select id="xlSheetA" class="form-select form-select-sm"></select>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label" for="xlSheetB">${escapeHtml(tx(opts.lang, 'sheet_b'))}</label>
          <select id="xlSheetB" class="form-select form-select-sm"></select>
        </div>
      </div>
      <div class="d-flex flex-wrap gap-2 mb-3">
        <button type="button" id="xlBtnCompare" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'compare'))}</button>
        <button type="button" id="xlBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="xlBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="xlError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="xlSummary" class="small text-muted mb-2" aria-live="polite"></p>
      <div id="xlOut" class="table-responsive" aria-label="${escapeHtml(tx(opts.lang, 'result_label'))}"></div>
    </div>`;

	/** IG。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});
	/** 引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'SheetJS docs', href: 'https://docs.sheetjs.com/' },
			{ label: 'ECMA-376 (Office Open XML)', href: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/' },
		],
	});

	/**
	 * SheetJS 读表、按 A1 坐标对比；loadSample 用两份 CSV。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 文件 A。 */
      var inputA = document.getElementById('xlFileA');
      /** 文件 B。 */
      var inputB = document.getElementById('xlFileB');
      /** 工作表 A。 */
      var selA = document.getElementById('xlSheetA');
      /** 工作表 B。 */
      var selB = document.getElementById('xlSheetB');
      /** 对比。 */
      var btnCompare = document.getElementById('xlBtnCompare');
      /** 样例。 */
      var btnSample = document.getElementById('xlBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('xlBtnClear');
      /** 文件名。 */
      var nameA = document.getElementById('xlNameA');
      /** 文件名 B。 */
      var nameB = document.getElementById('xlNameB');
      /** 错误。 */
      var errEl = document.getElementById('xlError');
      /** 摘要。 */
      var summaryEl = document.getElementById('xlSummary');
      /** 表格输出。 */
      var outEl = document.getElementById('xlOut');
      /** 工作簿缓存 A。 */
      var wbA = null;
      /** 工作簿缓存 B。 */
      var wbB = null;
      /** File A。 */
      var heldA = null;
      /** File B。 */
      var heldB = null;
      /** 文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        needLib: ${JSON.stringify(tx(opts.lang, 'need_lib'))},
        readFail: ${JSON.stringify(tx(opts.lang, 'err_read'))},
        noDiff: ${JSON.stringify(tx(opts.lang, 'no_diff'))},
        summary: ${JSON.stringify(tx(opts.lang, 'summary'))},
        colAddr: ${JSON.stringify(tx(opts.lang, 'col_addr'))},
        colA: ${JSON.stringify(tx(opts.lang, 'col_left'))},
        colB: ${JSON.stringify(tx(opts.lang, 'col_right'))},
        sampleA: ${JSON.stringify(tx(opts.lang, 'sample_a'))},
        sampleB: ${JSON.stringify(tx(opts.lang, 'sample_b'))},
        sampleAName: ${JSON.stringify(tx(opts.lang, 'sample_a_name'))},
        sampleBName: ${JSON.stringify(tx(opts.lang, 'sample_b_name'))}
      };

      /**
       * 显示错误。
       * @param {string} text 文案
       */
      function showErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text; errEl.style.display = '';
      }

      /**
       * 列号转 A1 列名（0=A）。
       * @param {number} n 0 起
       */
      function colName(n) {
        var s = '';
        var x = n + 1;
        while (x > 0) { var m = (x - 1) % 26; s = String.fromCharCode(65 + m) + s; x = Math.floor((x - 1) / 26); }
        return s;
      }

      /**
       * 单元格显示值：缺格当空串。
       * @param {*} v SheetJS 单元格
       */
      function cellStr(v) {
        if (v === undefined || v === null) return '';
        return String(v);
      }

      /**
       * 填充工作表下拉。
       * @param {HTMLSelectElement} sel 下拉
       * @param {string[]} names 表名
       */
      function fillSheets(sel, names) {
        sel.innerHTML = '';
        (names || []).forEach(function (n, i) {
          var opt = document.createElement('option');
          opt.value = n; opt.textContent = n;
          if (i === 0) opt.selected = true;
          sel.appendChild(opt);
        });
      }

      /**
       * 读工作簿。
       * @param {File} file 表格文件
       */
      function readWb(file) {
        return file.arrayBuffer().then(function (buf) {
          if (typeof XLSX === 'undefined') throw new Error('need-lib');
          return XLSX.read(buf, { type: 'array', raw: false });
        });
      }

      /**
       * 对比当前选中的两张表。
       */
      function runCompare() {
        showErr('');
        if (typeof XLSX === 'undefined') { outEl.textContent = msg.needLib; summaryEl.textContent = ''; return; }
        if (!wbA || !wbB) { outEl.innerHTML = ''; summaryEl.textContent = msg.empty; return; }
        var snA = selA.value || (wbA.SheetNames && wbA.SheetNames[0]);
        var snB = selB.value || (wbB.SheetNames && wbB.SheetNames[0]);
        var rowsA = XLSX.utils.sheet_to_json(wbA.Sheets[snA], { header: 1, defval: '', raw: false });
        var rowsB = XLSX.utils.sheet_to_json(wbB.Sheets[snB], { header: 1, defval: '', raw: false });
        var maxR = Math.max(rowsA.length, rowsB.length);
        var diffs = [];
        for (var r = 0; r < maxR; r++) {
          var ra = rowsA[r] || [];
          var rb = rowsB[r] || [];
          var maxC = Math.max(ra.length, rb.length);
          for (var c = 0; c < maxC; c++) {
            var va = cellStr(ra[c]);
            var vb = cellStr(rb[c]);
            if (va !== vb) diffs.push({ addr: colName(c) + String(r + 1), a: va, b: vb });
          }
        }
        if (!diffs.length) { outEl.innerHTML = ''; summaryEl.textContent = msg.noDiff; return; }
        var html = '<table class="table table-sm table-bordered mb-0"><thead><tr><th>' + msg.colAddr + '</th><th>' + msg.colA + '</th><th>' + msg.colB + '</th></tr></thead><tbody>';
        for (var i = 0; i < diffs.length; i++) {
          var d = diffs[i];
          html += '<tr><td>' + d.addr + '</td><td>' + String(d.a).replace(/</g,'&lt;') + '</td><td>' + String(d.b).replace(/</g,'&lt;') + '</td></tr>';
        }
        html += '</tbody></table>';
        outEl.innerHTML = html;
        summaryEl.textContent = msg.summary.replace('{n}', String(diffs.length));
      }

      /**
       * 读入文件并刷新 sheet 列表。
       */
      function loadBoth() {
        var fa = heldA || (inputA.files && inputA.files[0]);
        var fb = heldB || (inputB.files && inputB.files[0]);
        if (!fa || !fb) { wbA = wbB = null; summaryEl.textContent = msg.empty; outEl.innerHTML = ''; return Promise.resolve(); }
        nameA.textContent = fa.name || '';
        nameB.textContent = fb.name || '';
        return Promise.all([readWb(fa), readWb(fb)]).then(function (pair) {
          wbA = pair[0]; wbB = pair[1];
          fillSheets(selA, wbA.SheetNames);
          fillSheets(selB, wbB.SheetNames);
          runCompare();
        }).catch(function (e) {
          showErr(e && e.message === 'need-lib' ? msg.needLib : msg.readFail);
          wbA = wbB = null; outEl.innerHTML = ''; summaryEl.textContent = '';
        });
      }

      /**
       * 进页两份 CSV 样例（B2 不同）。
       */
      function loadSample() {
        heldA = new File([msg.sampleA], msg.sampleAName, { type: 'text/csv' });
        heldB = new File([msg.sampleB], msg.sampleBName, { type: 'text/csv' });
        try {
          var dta = new DataTransfer(); dta.items.add(heldA); inputA.files = dta.files;
          var dtb = new DataTransfer(); dtb.items.add(heldB); inputB.files = dtb.files;
        } catch (e) {}
        loadBoth();
      }

      btnCompare.addEventListener('click', function () {
        heldA = (inputA.files && inputA.files[0]) || heldA;
        heldB = (inputB.files && inputB.files[0]) || heldB;
        loadBoth();
      });
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        heldA = heldB = wbA = wbB = null;
        inputA.value = ''; inputB.value = '';
        selA.innerHTML = ''; selB.innerHTML = '';
        nameA.textContent = ''; nameB.textContent = '';
        outEl.innerHTML = ''; summaryEl.textContent = msg.empty; showErr('');
      });
      inputA.addEventListener('change', function () { heldA = inputA.files && inputA.files[0]; loadBoth(); });
      inputB.addEventListener('change', function () { heldB = inputB.files && inputB.files[0]; loadBoth(); });
      selA.addEventListener('change', runCompare);
      selB.addEventListener('change', runCompare);
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('excel-compare-files');
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
