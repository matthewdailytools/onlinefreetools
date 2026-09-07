/**
 * 批量把公开网页里的 HTML 表格抽成一本 .xlsx：URL 列表串行代抓 + 本标签页 SheetJS。
 * 默认首屏是 URL 列表（H1 作业）；Paste HTML Tab 吸收 html to excel / html table to excel。
 * 产物是单元格工作簿，不是截图 ZIP、不是 A4 PDF、不是 Word 段落。
 * slug: batch-convert-web-pages-to-excel
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

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_batch_convert_web_pages_to_excel';

/** 队列最多 URL 条数。 */
const MAX_URLS = 10;

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前 UI 语言
 * @param pathname 以 / 开头的路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具某一 i18n 后缀键。
 * @param lang 当前语言
 * @param suffix 如 title、description
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * 渲染「批量把网页转成 Excel」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertWebPagesToExcelPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/batch-convert-web-pages-to-excel';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	const description = tx(opts.lang, 'description');
	const lead = tx(opts.lang, 'desc');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);
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
			currentSlug: 'batch-convert-web-pages-to-excel',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});
	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    textarea#bceUrls, textarea#bceHtml { min-height: 140px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .bce-tab.is-on { font-weight: 600; }
    .bce-table { font-size: .875rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(lead)}</p>
    </div>

    <div class="tool-panel">
      <div class="btn-group mb-2" role="group" aria-label="${escapeHtml(tx(opts.lang, 'tab_urls'))}">
        <button type="button" id="bceTabUrls" class="btn btn-outline-primary btn-sm bce-tab is-on">${escapeHtml(tx(opts.lang, 'tab_urls'))}</button>
        <button type="button" id="bceTabHtml" class="btn btn-outline-primary btn-sm bce-tab">${escapeHtml(tx(opts.lang, 'tab_html'))}</button>
      </div>

      <div id="bceUrlsWrap">
        <label class="form-label" for="bceUrls">${escapeHtml(tx(opts.lang, 'url_label'))}</label>
        <textarea id="bceUrls" class="form-control form-control-sm mb-1" placeholder="${escapeHtml(tx(opts.lang, 'url_placeholder'))}"></textarea>
        <div class="form-text mb-2">${escapeHtml(tx(opts.lang, 'url_hint'))}</div>
      </div>
      <div id="bceHtmlWrap" hidden>
        <label class="form-label" for="bceHtml">${escapeHtml(tx(opts.lang, 'html_label'))}</label>
        <textarea id="bceHtml" class="form-control form-control-sm mb-1" placeholder="${escapeHtml(tx(opts.lang, 'html_placeholder'))}"></textarea>
        <div class="form-text mb-2">${escapeHtml(tx(opts.lang, 'html_hint'))}</div>
      </div>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="bceBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert'))}</button>
        <button type="button" id="bceBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="bceBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="bceBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <details class="mb-2">
        <summary>${escapeHtml(tx(opts.lang, 'advanced_label'))}</summary>
        <label class="form-label mt-2" for="bceLayout">${escapeHtml(tx(opts.lang, 'layout_label'))}</label>
        <select id="bceLayout" class="form-select form-select-sm mb-2">
          <option value="table" selected>${escapeHtml(tx(opts.lang, 'layout_table'))}</option>
          <option value="url">${escapeHtml(tx(opts.lang, 'layout_url'))}</option>
        </select>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="bceSkipTiny" checked>
          <label class="form-check-label" for="bceSkipTiny">${escapeHtml(tx(opts.lang, 'skip_tiny_label'))}</label>
        </div>
        <div class="form-text mb-0">${escapeHtml(tx(opts.lang, 'opts_hint'))}</div>
      </details>
      <p id="bceError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="bceStatus" class="small text-muted mb-2" role="status" aria-live="polite" aria-atomic="true"></p>
      <div class="progress mb-2" id="bceProgressWrap" hidden style="height: .65rem;">
        <div id="bceProgressBar" class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
      </div>
      <p id="bceSummary" class="small mb-2"></p>
      <p id="bceFileCount" class="small text-muted mb-2"></p>
      <div class="table-responsive mb-0">
        <table class="table table-sm table-striped bce-table mb-0">
          <thead>
            <tr>
              <th>${escapeHtml(tx(opts.lang, 'col_url'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_file'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            </tr>
          </thead>
          <tbody id="bceTbody"></tbody>
        </table>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 5,
		howItemCount: 6,
	});
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'SheetJS community docs', href: 'https://docs.sheetjs.com/' },
			{ label: 'HTML Living Standard — tabular data', href: 'https://html.spec.whatwg.org/multipage/tables.html' },
		],
	});

	const extraBodyHtml = `
  <script src="/vendor/dompurify/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/xlsx/xlsx.full.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 队列最多 URL 条数。 */
      var MAX_URLS = ${MAX_URLS};
      /** 样例价目表 URL（转换用本地 HTML，不打外网）。 */
      var SAMPLE_URL_1 = 'https://example.com/data/price-list';
      /** 样例库存表 URL。 */
      var SAMPLE_URL_2 = 'https://example.com/data/stock-grid';

      var urlsEl = document.getElementById('bceUrls');
      var htmlEl = document.getElementById('bceHtml');
      var urlsWrap = document.getElementById('bceUrlsWrap');
      var htmlWrap = document.getElementById('bceHtmlWrap');
      var tabUrls = document.getElementById('bceTabUrls');
      var tabHtml = document.getElementById('bceTabHtml');
      var btnConvert = document.getElementById('bceBtnConvert');
      var btnDownload = document.getElementById('bceBtnDownload');
      var btnSample = document.getElementById('bceBtnSample');
      var btnClear = document.getElementById('bceBtnClear');
      var layoutEl = document.getElementById('bceLayout');
      var skipTinyEl = document.getElementById('bceSkipTiny');
      var errEl = document.getElementById('bceError');
      var statusEl = document.getElementById('bceStatus');
      var summaryEl = document.getElementById('bceSummary');
      var fileCountEl = document.getElementById('bceFileCount');
      var tbody = document.getElementById('bceTbody');
      var progressWrap = document.getElementById('bceProgressWrap');
      var progressBar = document.getElementById('bceProgressBar');
      var busyBtns = [btnConvert, btnSample, btnClear];
      /** 当前输入面：urls | html。 */
      var mode = 'urls';
      /** @type {Blob|null} 最近一次成功的工作簿。 */
      var resultBlob = null;

      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        convert: ${JSON.stringify(tx(opts.lang, 'err_convert'))},
        htmlEmpty: ${JSON.stringify(tx(opts.lang, 'err_html_empty'))},
        load: ${JSON.stringify(tx(opts.lang, 'err_load'))},
        tooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        url: ${JSON.stringify(tx(opts.lang, 'err_url'))},
        urlEmpty: ${JSON.stringify(tx(opts.lang, 'err_url_empty'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        fetching: ${JSON.stringify(tx(opts.lang, 'status_fetching'))},
        converting: ${JSON.stringify(tx(opts.lang, 'status_converting'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        ok: ${JSON.stringify(tx(opts.lang, 'status_ok'))},
        queued: ${JSON.stringify(tx(opts.lang, 'status_queued'))},
        skip: ${JSON.stringify(tx(opts.lang, 'status_skip'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'file_count_tpl'))},
        summaryTpl: ${JSON.stringify(tx(opts.lang, 'summary_tpl'))},
        progressTpl: ${JSON.stringify(tx(opts.lang, 'progress_tpl'))},
        pasted: ${JSON.stringify(tx(opts.lang, 'tab_html'))},
      };

      /**
       * 用 {n} 一类占位符填模板。
       * @param {string} tpl 模板
       * @param {Record<string, string|number>} vars 变量
       * @returns {string}
       */
      function fillTpl(tpl, vars) {
        return String(tpl || '').replace(/\\{(\\w+)\\}/g, function (_, k) {
          return vars[k] == null ? '' : String(vars[k]);
        });
      }

      /**
       * 切到 URL 列表或粘贴 HTML。
       * @param {'urls'|'html'} next 目标面
       */
      function setTab(next) {
        mode = next;
        var onUrls = next === 'urls';
        if (urlsWrap) urlsWrap.hidden = !onUrls;
        if (htmlWrap) htmlWrap.hidden = onUrls;
        if (tabUrls) tabUrls.classList.toggle('is-on', onUrls);
        if (tabHtml) tabHtml.classList.toggle('is-on', !onUrls);
      }

      /**
       * 显示或隐藏错误行。
       * @param {string} text 人话错误；空则隐藏
       */
      function setErr(text) {
        if (!errEl) return;
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.style.display = '';
        errEl.textContent = text;
      }

      /**
       * 更新状态行。
       * @param {string} text 文案
       */
      function setStatus(text) {
        if (statusEl) statusEl.textContent = text || '';
      }

      /**
       * 忙碌态：禁用输入与次按钮。
       * @param {boolean} on 是否忙碌
       */
      function setBusy(on) {
        [urlsEl, htmlEl, layoutEl, skipTinyEl].forEach(function (el) { if (el) el.disabled = on; });
        busyBtns.forEach(function (b) { if (b) b.disabled = on; });
        if (tabUrls) tabUrls.disabled = on;
        if (tabHtml) tabHtml.disabled = on;
      }

      /**
       * 更新进度条百分比。
       * @param {number} pct 0–100
       */
      function setProgress(pct) {
        if (!progressWrap || !progressBar) return;
        var n = Math.max(0, Math.min(100, pct || 0));
        progressWrap.hidden = n <= 0 && !progressWrap.dataset.open;
        if (n > 0) progressWrap.hidden = false;
        progressBar.style.width = n + '%';
        progressBar.setAttribute('aria-valuenow', String(Math.round(n)));
      }

      /**
       * 让出一帧给 UI。
       * @returns {Promise<void>}
       */
      function yieldUi() {
        return new Promise(function (resolve) { setTimeout(resolve, 0); });
      }

      /**
       * 把一行补成绝对 http(s) URL；非法则返回空。
       * @param {string} raw 用户输入
       * @returns {string}
       */
      function normalizeHttpUrl(raw) {
        var s = String(raw || '').trim();
        if (!s) return '';
        if (!/^https?:\\/\\//i.test(s)) s = 'https://' + s;
        try {
          var u = new URL(s);
          if (u.protocol !== 'http:' && u.protocol !== 'https:') return '';
          return u.href;
        } catch (e) {
          return '';
        }
      }

      /**
       * 读取 URL 列表（去空行，截断上限）。
       * @returns {{raw:string[], overflow:boolean}}
       */
      function readUrlLines() {
        var lines = String(urlsEl && urlsEl.value || '').split(/\\r?\\n/);
        var raw = [];
        for (var i = 0; i < lines.length; i++) {
          var t = lines[i].trim();
          if (t) raw.push(t);
        }
        var overflow = raw.length > MAX_URLS;
        if (overflow) raw = raw.slice(0, MAX_URLS);
        return { raw: raw, overflow: overflow };
      }

      /**
       * 消毒 HTML，只保留表格相关标签。
       * @param {string} html 源 HTML
       * @returns {string}
       */
      function sanitizeHtml(html) {
        if (typeof DOMPurify === 'undefined') return String(html || '');
        return DOMPurify.sanitize(String(html || ''), {
          USE_PROFILES: { html: true },
          FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'frame', 'frameset', 'noscript'],
        });
      }

      /**
       * 把一个 <table> 转成二维文本数组。colspan 用空单元格占位；rowspan 摊平。
       * @param {HTMLTableElement} table 表
       * @returns {string[][]}
       */
      function tableToAoa(table) {
        var rows = [];
        var trs = table.querySelectorAll('tr');
        for (var r = 0; r < trs.length; r++) {
          var row = [];
          var cells = trs[r].querySelectorAll('th, td');
          for (var c = 0; c < cells.length; c++) {
            var text = String(cells[c].textContent || '').replace(/\\s+/g, ' ').trim();
            var span = parseInt(cells[c].getAttribute('colspan') || '1', 10);
            if (!span || span < 1) span = 1;
            row.push(text);
            for (var s = 1; s < span; s++) row.push('');
          }
          if (row.length) rows.push(row);
        }
        return rows;
      }

      /**
       * 是否视为过小导航表。
       * @param {string[][]} aoa 行
       * @returns {boolean}
       */
      function isTiny(aoa) {
        if (!aoa.length) return true;
        var maxCols = 0;
        for (var i = 0; i < aoa.length; i++) if (aoa[i].length > maxCols) maxCols = aoa[i].length;
        return aoa.length < 2 || maxCols < 2;
      }

      /**
       * 从消毒 HTML 抽出合格表。
       * @param {string} html HTML
       * @param {boolean} skipTiny 跳过过小表
       * @returns {string[][][]}
       */
      function extractTables(html, skipTiny) {
        var clean = sanitizeHtml(html);
        var doc = new DOMParser().parseFromString(clean, 'text/html');
        var tables = doc.querySelectorAll('table');
        var out = [];
        for (var i = 0; i < tables.length; i++) {
          var aoa = tableToAoa(tables[i]);
          if (skipTiny && isTiny(aoa)) continue;
          if (aoa.length) out.push(aoa);
        }
        return out;
      }

      /**
       * Excel 工作表名：去掉非法字符，最长 31，避免重名。
       * @param {string} raw 候选
       * @param {Record<string, number>} used 已用名
       * @returns {string}
       */
      function sanitizeSheetName(raw, used) {
        var n = String(raw || 'Sheet').replace(/[:\\\\/?*\\[\\]]/g, ' ').replace(/\\s+/g, ' ').trim().slice(0, 28);
        if (!n) n = 'Sheet';
        var base = n;
        var i = 1;
        while (used[n]) {
          n = (base.slice(0, 24) + '-' + i).slice(0, 31);
          i += 1;
        }
        used[n] = 1;
        return n;
      }

      /**
       * 从 URL 取短宿主名做表名种子。
       * @param {string} href 绝对 URL
       * @returns {string}
       */
      function hostSeed(href) {
        try {
          var u = new URL(href);
          var path = (u.pathname || '').replace(/\\/+$/,'').split('/').pop() || '';
          return (u.hostname.replace(/^www\\./, '') + (path ? '-' + path : '')).slice(0, 24);
        } catch (e) {
          return 'page';
        }
      }

      /**
       * 经边缘 API 拉取 URL 对应 HTML。
       * @param {string} href 绝对 URL
       * @returns {Promise<string>}
       */
      function fetchPageHtml(href) {
        var api = '/api/tools/convert-html-to-pdf?url=' + encodeURIComponent(href);
        return fetch(api).then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (data) {
            if (!res.ok || !data || !data.html) {
              throw new Error(data && data.error ? data.error : 'url');
            }
            return String(data.html);
          });
        });
      }

      /**
       * 样例价目表 HTML（本地，不请求 example.com）。
       * @returns {string}
       */
      function samplePriceHtml() {
        return '<!doctype html><html><body><h1>Price list</h1><p>Prose is ignored.</p><table><thead><tr><th>SKU</th><th>Item</th><th>Qty</th><th>USD</th></tr></thead><tbody><tr><td>A-100</td><td>Widget</td><td>12</td><td>4.50</td></tr><tr><td>A-200</td><td>Gasket</td><td>40</td><td>1.25</td></tr></tbody></table></body></html>';
      }

      /**
       * 样例库存表 HTML。
       * @returns {string}
       */
      function sampleStockHtml() {
        return '<!doctype html><html><body><h1>Stock grid</h1><table><tr><th>Bin</th><th>SKU</th><th>On hand</th></tr><tr><td>N1</td><td>A-100</td><td>80</td></tr><tr><td>N2</td><td>A-200</td><td>15</td></tr></table></body></html>';
      }

      /**
       * 清空结果表。
       */
      function clearTable() {
        if (tbody) tbody.innerHTML = '';
      }

      /**
       * 预填队列行。
       * @param {{href:string}[]} items 任务
       * @returns {HTMLTableRowElement[]}
       */
      function seedQueueRows(items) {
        clearTable();
        var rows = [];
        for (var i = 0; i < items.length; i++) {
          var tr = document.createElement('tr');
          tr.innerHTML = '<td></td><td></td><td></td>';
          tr.cells[0].textContent = items[i].href;
          tr.cells[2].textContent = msg.queued;
          tbody.appendChild(tr);
          rows.push(tr);
        }
        return rows;
      }

      /**
       * 刷新一行状态。
       * @param {HTMLTableRowElement} tr 行
       * @param {{file?:string, status:string}} data 展示
       */
      function paintRow(tr, data) {
        if (!tr) return;
        if (data.file != null) tr.cells[1].textContent = data.file;
        tr.cells[2].textContent = data.status;
      }

      /**
       * 把抽出的表追加进工作簿。
       * @param {object} wb SheetJS 工作簿
       * @param {string[][][]} tables AOA 列表
       * @param {string} seed 表名种子
       * @param {'table'|'url'} layout 布局
       * @param {Record<string, number>} used 已用表名
       * @returns {string[]} 写入的表名
       */
      function appendTables(wb, tables, seed, layout, used) {
        var names = [];
        if (!tables.length) return names;
        if (layout === 'url') {
          var stacked = [];
          for (var i = 0; i < tables.length; i++) {
            if (i) stacked.push(['']);
            stacked = stacked.concat(tables[i]);
          }
          var name = sanitizeSheetName(seed, used);
          XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(stacked), name);
          names.push(name);
          return names;
        }
        for (var t = 0; t < tables.length; t++) {
          var nm = sanitizeSheetName(seed + (tables.length > 1 ? '-' + (t + 1) : ''), used);
          XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(tables[t]), nm);
          names.push(nm);
        }
        return names;
      }

      /**
       * 跑完整批并生成一本工作簿。
       * @param {{href:string, html?:string, invalid?:boolean}[]} items 任务
       * @returns {Promise<void>}
       */
      function runBatch(items) {
        resultBlob = null;
        if (btnDownload) btnDownload.disabled = true;
        summaryEl.textContent = '';
        setErr('');
        if (!items.length) {
          clearTable();
          setErr(msg.empty);
          setStatus('');
          fileCountEl.textContent = '';
          setProgress(0);
          if (progressWrap) progressWrap.hidden = true;
          return Promise.resolve();
        }
        if (typeof XLSX === 'undefined' || !XLSX.utils) {
          setErr(msg.load);
          return Promise.resolve();
        }
        var skipTiny = !!(skipTinyEl && skipTinyEl.checked);
        var layout = layoutEl && layoutEl.value === 'url' ? 'url' : 'table';
        var rowEls = seedQueueRows(items);
        fileCountEl.textContent = fillTpl(msg.countTpl, { n: items.length });
        setBusy(true);
        setStatus(msg.working);
        setProgress(4);
        var wb = XLSX.utils.book_new();
        var used = Object.create(null);
        var ok = 0;
        var skip = 0;
        var i = 0;
        function next() {
          if (i >= items.length) return Promise.resolve();
          var idx = i;
          var item = items[i++];
          var n = items.length;
          setProgress((idx / n) * 90 + 5);
          setStatus(item.html ? msg.converting : msg.fetching);
          paintRow(rowEls[idx], { status: item.invalid ? msg.urlEmpty : (item.html ? msg.converting : msg.fetching) });
          if (item.invalid) {
            skip += 1;
            paintRow(rowEls[idx], { status: msg.urlEmpty });
            return yieldUi().then(next);
          }
          var job = item.html ? Promise.resolve(item.html) : fetchPageHtml(item.href);
          return yieldUi().then(function () { return job; }).then(function (html) {
            setStatus(msg.converting);
            paintRow(rowEls[idx], { status: msg.converting });
            var tables = extractTables(html, skipTiny);
            if (!tables.length) throw new Error('empty-table');
            var names = appendTables(wb, tables, hostSeed(item.href), layout, used);
            ok += 1;
            paintRow(rowEls[idx], { file: names.join(', '), status: msg.ok });
          }).catch(function (err) {
            skip += 1;
            var eStr = String(err && err.message ? err.message : err);
            var label = /empty-table/i.test(eStr) ? msg.convert
              : /url|blocked|timeout|reach|html/i.test(eStr) ? msg.url
              : msg.convert;
            paintRow(rowEls[idx], { status: label });
          }).then(function () { return yieldUi().then(next); });
        }
        return yieldUi().then(next).then(function () {
          summaryEl.textContent = fillTpl(msg.summaryTpl, { ok: ok, skip: skip });
          setStatus(msg.done);
          setProgress(100);
          if (ok && wb.SheetNames && wb.SheetNames.length) {
            var out = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            resultBlob = new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            if (btnDownload) btnDownload.disabled = false;
          }
        }).finally(function () {
          setBusy(false);
        });
      }

      /**
       * 按当前 Tab 转换。
       */
      function convertAll() {
        if (mode === 'html') {
          var html = String(htmlEl && htmlEl.value || '').trim();
          if (!html) { setErr(msg.htmlEmpty); return; }
          setErr('');
          runBatch([{ href: 'pasted.html', html: html }]);
          return;
        }
        var parsed = readUrlLines();
        if (parsed.overflow) setErr(msg.tooMany);
        else setErr('');
        var items = [];
        for (var i = 0; i < parsed.raw.length; i++) {
          var href = normalizeHttpUrl(parsed.raw[i]);
          if (!href) items.push({ href: parsed.raw[i], invalid: true });
          else items.push({ href: href });
        }
        runBatch(items);
      }

      /**
       * 下载最近一次成功的 .xlsx。
       */
      function download() {
        if (!resultBlob) return;
        var a = document.createElement('a');
        var url = URL.createObjectURL(resultBlob);
        a.href = url;
        a.download = 'web-pages.xlsx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }

      /**
       * 清空输入与结果。
       */
      function clearAll() {
        if (urlsEl) urlsEl.value = '';
        if (htmlEl) htmlEl.value = '';
        resultBlob = null;
        if (btnDownload) btnDownload.disabled = true;
        clearTable();
        summaryEl.textContent = '';
        fileCountEl.textContent = '';
        setErr('');
        setStatus('');
        setProgress(0);
        if (progressWrap) progressWrap.hidden = true;
        setTab('urls');
      }

      /**
       * 载入样例：两条本地 HTML 表，不打外网。进页自动跑。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setTab('urls');
        if (urlsEl) urlsEl.value = SAMPLE_URL_1 + '\\n' + SAMPLE_URL_2;
        return runBatch([
          { href: SAMPLE_URL_1, html: samplePriceHtml() },
          { href: SAMPLE_URL_2, html: sampleStockHtml() },
        ]);
      }

      if (tabUrls) tabUrls.addEventListener('click', function () { setTab('urls'); });
      if (tabHtml) tabHtml.addEventListener('click', function () { setTab('html'); });
      if (btnConvert) btnConvert.addEventListener('click', convertAll);
      if (btnDownload) btnDownload.addEventListener('click', download);
      if (btnSample) btnSample.addEventListener('click', loadSample);
      if (btnClear) btnClear.addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('batch-convert-web-pages-to-excel');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				enabledLangs: supportedLangs,
			})
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
		contentHtml: contentHtml + igHtml + (toolSeoHtml || '') + referencesHtml,
		footerHtml,
		extraHeadHtml: extraHeadHtml + toolJsonLd,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
