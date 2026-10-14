/**
 * 从 PDF 提取文字（纯客户端，pdf.js 文本层；不做 OCR）。
 * slug: extract-text-from-pdf（见 work-tasks/extract-text-from-pdf/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 选页：全部 / 自定义页码（1-3, 5, 8-；按输入顺序去重）；
 * - 版式：段落（把 PDF 里折行的句子接回一段，默认）/ 按 PDF 原行 / 保留列对齐（表格、等宽排版）；
 * - 段落模式：行尾连字符断词自动接回（harden- + ing → hardening）；大间距视为表格列，输出制表符（可直接粘进表格软件）；
 * - 双栏排版自动识别：先读左栏再读右栏，跨栏标题保持原位；
 * - 页眉页脚：同一行（数字视为相同）出现在 ≥ 3 页且 ≥ 60% 有字页的顶部 / 底部 2 行时删除；
 * - 页间分隔：空行 / 「--- Page N ---」/ 换页符（form feed，与 pdftotext 相同）；换行符可选 LF / CRLF；
 * - 没有任何文字的页（多为扫描图片）逐页列出，提示改用 OCR；全部无字时报错；
 * - 加密 PDF：出现密码框，密码只在本页用于 pdf.js 解密；
 * - 文本层读一次后缓存，改版式 / 分隔 / 页眉页脚 / 换行符等设置即时重排，不必重读。
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
import { pdfWorkUiBlockHtml, pdfWorkUiClientScript, pdfWorkUiCss, pdfWorkUiLabels } from './site/pdfWorkUi';

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_extract_text_from_pdf';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 站内路径
 * @param defaultLang 站点默认语言
 * @returns 带（或不带）语言前缀的路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 extract-text-from-pdf 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderExtractTextFromPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/extract-text-from-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的各语言链接。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 备用链接。 */
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
			currentSlug: 'extract-text-from-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);

	/**
	 * 生成 <option> 列表。
	 * @param items [值, 显示文字, 是否默认选中]
	 * @returns option HTML
	 */
	const optionsHtml = (items: Array<[string, string, boolean?]>) =>
		items
			.map(([v, label, sel]) => `<option value="${escapeHtml(v)}"${sel ? ' selected' : ''}>${escapeHtml(label)}</option>`)
			.join('');

	/** 页内样式：设置网格、结果框。 */
	const extraHeadHtml = `
  <style>
    ${pdfWorkUiCss()}
    .tools-bar { gap: .5rem; }
    .etfp-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap:.5rem .75rem; margin-bottom:.75rem; }
    .etfp-grid label { font-size:.875rem; margin-bottom:.15rem; display:block; }
    #etfpRangeWrap[hidden], #etfpPwWrap[hidden] { display:none !important; }
    #etfpOutput { min-height: 260px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .85rem; white-space: pre; tab-size: 12; }
    #etfpStats { font-size:.9rem; background:#f8f9fa; border:1px solid #e9ecef; border-radius:.25rem; padding:.4rem .75rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone mb-2" id="etfpDrop" for="etfpFile">
      <input type="file" id="etfpFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
    </label>
    <p id="etfpMeta" class="small text-muted mb-3"></p>

    <div id="etfpPwWrap" class="mb-3" hidden>
      <label class="form-label small mb-1" for="etfpPassword">${escapeHtml(tx('password_label'))}</label>
      <input type="password" id="etfpPassword" class="form-control form-control-sm" autocomplete="off" style="max-width:18rem;">
      <div class="form-text">${escapeHtml(tx('password_hint'))}</div>
    </div>

    <div class="etfp-grid">
      <div>
        <label for="etfpPages">${escapeHtml(tx('pages_label'))}</label>
        <select id="etfpPages" class="form-select form-select-sm">${optionsHtml([
					['all', tx('pages_all'), true],
					['custom', tx('pages_custom')],
				])}</select>
      </div>
      <div id="etfpRangeWrap" hidden>
        <label for="etfpRange">${escapeHtml(tx('range_label'))}</label>
        <input type="text" id="etfpRange" class="form-control form-control-sm" placeholder="${escapeHtml(tx('range_ph'))}" autocomplete="off" inputmode="numeric">
      </div>
      <div>
        <label for="etfpLayout">${escapeHtml(tx('layout_label'))}</label>
        <select id="etfpLayout" class="form-select form-select-sm">${optionsHtml([
					['para', tx('layout_para'), true],
					['lines', tx('layout_lines')],
					['table', tx('layout_table')],
				])}</select>
      </div>
      <div>
        <label for="etfpSep">${escapeHtml(tx('sep_label'))}</label>
        <select id="etfpSep" class="form-select form-select-sm">${optionsHtml([
					['blank', tx('sep_blank'), true],
					['marker', tx('sep_marker')],
					['ff', tx('sep_ff')],
				])}</select>
      </div>
    </div>
    <p class="small text-muted mb-2">${escapeHtml(tx('layout_hint'))}</p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="etfpBtnExtract" class="btn btn-primary btn-sm">${escapeHtml(tx('extract'))}</button>
      <button type="button" id="etfpBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="etfpBtnCopy" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx('copy'))}</button>
      <button type="button" id="etfpBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="etfpBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="etfpAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="mt-2">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="etfpHeaders" checked>
          <label class="form-check-label small" for="etfpHeaders">${escapeHtml(tx('headers_label'))}</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="etfpHyphen" checked>
          <label class="form-check-label small" for="etfpHyphen">${escapeHtml(tx('hyphen_label'))}</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="etfpColumns" checked>
          <label class="form-check-label small" for="etfpColumns">${escapeHtml(tx('columns_label'))}</label>
        </div>
        <div class="etfp-grid mt-2">
          <div>
            <label for="etfpEol">${escapeHtml(tx('eol_label'))}</label>
            <select id="etfpEol" class="form-select form-select-sm">${optionsHtml([
							['lf', tx('eol_lf'), true],
							['crlf', tx('eol_crlf')],
						])}</select>
          </div>
        </div>
      </div>
    </details>

    <p id="etfpError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="etfpWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="etfpStatus" class="small text-muted mb-2" role="status"></p>
    <div id="etfpStats" class="mb-2" style="display:none;" aria-live="polite"></div>

    <label class="form-label small mb-1" for="etfpOutput">${escapeHtml(tx('preview_label'))}</label>
    <textarea id="etfpOutput" class="form-control mb-3" readonly rows="14" aria-readonly="true" spellcheck="false"></textarea>

    ${pdfWorkUiBlockHtml({ idPrefix: 'etfpPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mt-3 mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://mozilla.github.io/pdf.js/api/draft/module-pdfjsLib-PDFPageProxy.html' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Newline' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		metaTpl: tx('meta_tpl'),
		markerTpl: tx('marker_tpl'),
		empty: tx('empty'),
		errType: tx('err_type'),
		errLoad: tx('err_load'),
		errPassword: tx('err_password'),
		errPasswordWrong: tx('err_password_wrong'),
		errRange: tx('err_range_tpl'),
		errNoText: tx('err_notext'),
		errPdfjs: tx('err_pdfjs'),
		errSample: tx('err_sample'),
		warnLarge: tx('warn_large'),
		warnScanned: tx('warn_scanned_tpl'),
		reading: tx('status_reading_tpl'),
		done: tx('status_done'),
		statsTpl: tx('stats_tpl'),
		removedTpl: tx('removed_tpl'),
		copy: tx('copy'),
		copied: tx('copied'),
	};

	/**
	 * 客户端脚本：pdf.js 读文本层 → 按坐标分行 / 分栏 / 分段 → 结果框、下载 .txt、复制。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 超过此字节数时软警告。 */
      var SOFT_BYTES = 50 * 1024 * 1024;
      /** 扫描页提示中最多列出的页码数。 */
      var LIST_MAX = 20;
      /** 当前页面语言（词数统计用）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 中日韩字符（相邻时接行不加空格）。 */
      var CJK = /[\\u3040-\\u30ff\\u3400-\\u9fff\\uf900-\\ufaff\\uff00-\\uffef]/;
      /** 段落开头的项目符号 / 编号。 */
      var BULLET = /^([\\u2022\\u25aa\\u25cf\\u00b7*\\u2013-]|[0-9]{1,3}[.)]|[a-zA-Z][.)])\\s/;
      /** 句末标点（可跟引号 / 括号）。 */
      var SENT_END = /[.!?:;\\u3002\\uff01\\uff1f\\uff1a\\u061f]["\\u201d\\u2019)\\]]*$/;

      /** 页面控件。 */
      var drop = document.getElementById('etfpDrop');
      var fileInput = document.getElementById('etfpFile');
      var metaEl = document.getElementById('etfpMeta');
      var pwWrap = document.getElementById('etfpPwWrap');
      var pwEl = document.getElementById('etfpPassword');
      var pagesEl = document.getElementById('etfpPages');
      var rangeWrap = document.getElementById('etfpRangeWrap');
      var rangeEl = document.getElementById('etfpRange');
      var layoutEl = document.getElementById('etfpLayout');
      var sepEl = document.getElementById('etfpSep');
      var headersEl = document.getElementById('etfpHeaders');
      var hyphenEl = document.getElementById('etfpHyphen');
      var columnsEl = document.getElementById('etfpColumns');
      var eolEl = document.getElementById('etfpEol');
      var btnExtract = document.getElementById('etfpBtnExtract');
      var btnDownload = document.getElementById('etfpBtnDownload');
      var btnCopy = document.getElementById('etfpBtnCopy');
      var btnSample = document.getElementById('etfpBtnSample');
      var btnClear = document.getElementById('etfpBtnClear');
      var errEl = document.getElementById('etfpError');
      var warnEl = document.getElementById('etfpWarn');
      var statusEl = document.getElementById('etfpStatus');
      var statsEl = document.getElementById('etfpStats');
      var outputEl = document.getElementById('etfpOutput');
      /** 共用进度条与 PDF 画布预览。 */
      var work = window.OftPdfWork.bind('etfpPdf');
      /** 处理中需禁用的按钮（第一个为主按钮，显示 spinner）。 */
      var busyBtns = [btnExtract, btnSample, btnClear, btnDownload, btnCopy];

      /**
       * 工具状态。
       * - bytes / name / size：源文件；doc：已打开的 pdf.js 文档；total：总页数；
       * - encrypted：是否需要密码；cache：页索引 → 已读出的文本项；
       * - pages：本次所选页索引；text：当前结果（\\n 换行）；fileLarge：大文件提示；token：作废旧任务。
       */
      var state = { bytes: null, name: '', size: 0, doc: null, total: 0, encrypted: false, cache: {}, pages: [], text: '', fileLarge: false, token: 0, timer: 0 };

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} tpl 模板
       * @param {Object<string, string|number>} map 占位符 → 值
       * @returns {string} 替换结果
       */
      function fill(tpl, map) {
        var s = String(tpl);
        for (var k in map) {
          if (Object.prototype.hasOwnProperty.call(map, k)) s = s.split('{' + k + '}').join(String(map[k]));
        }
        return s;
      }

      /** 显示或隐藏错误行。 */
      function setErr(text) { errEl.textContent = text || ''; errEl.style.display = text ? '' : 'none'; }

      /** 显示或隐藏警告行（可多句，用空格连接）。 */
      function setWarn(list) {
        var text = (list || []).filter(function (s) { return s; }).join(' ');
        warnEl.textContent = text;
        warnEl.style.display = text ? '' : 'none';
      }

      /** 设置状态行。 */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /**
       * 格式化字节数。
       * @param {number} n 字节
       * @returns {string} 如 1.2 MB
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /**
       * 中位数。
       * @param {number[]} arr 数组
       * @returns {number} 中位数；空数组返回 0
       */
      function median(arr) {
        if (!arr.length) return 0;
        var s = arr.slice().sort(function (a, b) { return a - b; });
        var m = Math.floor(s.length / 2);
        return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
      }

      /**
       * 解析页码（1-3, 5, 8-；-3 表示 1–3）；按输入顺序去重。
       * @param {string} text 用户输入
       * @param {number} total 总页数
       * @returns {number[]|null} 0 起页索引；无效返回 null
       */
      function parseRange(text, total) {
        var s = String(text || '').replace(/[\\u2013\\u2014~\\uff5e]/g, '-').replace(/ +/g, '');
        if (!s) return null;
        var parts = s.split(/[,\\uff0c\\u3001;\\uff1b]+/).filter(function (p) { return p; });
        var out = [];
        var seen = {};
        /** 加入一页（去重）。 */
        function add(i) { if (!seen[i]) { seen[i] = 1; out.push(i); } }
        for (var i = 0; i < parts.length; i++) {
          var single = parts[i].match(/^([0-9]+)$/);
          var span = parts[i].match(/^([0-9]*)-([0-9]*)$/);
          if (single) {
            var n = Number(single[1]);
            if (n < 1 || n > total) return null;
            add(n - 1);
          } else if (span && (span[1] || span[2])) {
            var a = span[1] ? Number(span[1]) : 1;
            var b = span[2] ? Number(span[2]) : total;
            if (a < 1 || b < 1 || a > total || b > total) return null;
            var step = a <= b ? 1 : -1;
            for (var k = a; step > 0 ? k <= b : k >= b; k += step) add(k - 1);
          } else {
            return null;
          }
        }
        return out.length ? out : null;
      }

      /**
       * 矩阵相乘（与 pdf.js Util.transform 相同）：把文本矩阵换到视口坐标（y 向下，已含页面旋转）。
       * @param {number[]} m 视口矩阵
       * @param {number[]} t 文本项矩阵
       * @returns {number[]} 6 元矩阵
       */
      function mul(m, t) {
        return [
          m[0] * t[0] + m[2] * t[1], m[1] * t[0] + m[3] * t[1],
          m[0] * t[2] + m[2] * t[3], m[1] * t[2] + m[3] * t[3],
          m[0] * t[4] + m[2] * t[5] + m[4], m[1] * t[4] + m[3] * t[5] + m[5]
        ];
      }

      /**
       * 读取一页的文本项并简化为 { s, x, y, w, size, rtl }（视口坐标，单位 pt）。
       * @param {any} page pdf.js 页对象
       * @returns {Promise<Array<{s:string,x:number,y:number,w:number,size:number,rtl:boolean}>>}
       */
      function readPage(page) {
        var vp = page.getViewport({ scale: 1 });
        return page.getTextContent().then(function (tc) {
          var out = [];
          (tc.items || []).forEach(function (it) {
            if (!it || typeof it.str !== 'string' || !it.str.length) return;
            var m = mul(vp.transform, it.transform || [1, 0, 0, 1, 0, 0]);
            var size = Math.hypot(m[2], m[3]) || it.height || 10;
            out.push({ s: it.str, x: m[4], y: m[5], w: Math.abs(it.width || 0), size: size, rtl: it.dir === 'rtl' });
          });
          return out;
        });
      }

      /**
       * 把文本项按基线分行（视口 y 向下）。
       * @param {Array<any>} items 文本项
       * @returns {Array<{y:number,size:number,parts:Array<any>,rtl:boolean}>} 自上而下的行
       */
      function groupLines(items) {
        var sorted = items.slice().sort(function (a, b) { return a.y - b.y || a.x - b.x; });
        var lines = [];
        sorted.forEach(function (it) {
          var hit = null;
          for (var i = lines.length - 1; i >= 0 && i >= lines.length - 3; i--) {
            var tol = Math.max(1, 0.5 * Math.min(it.size, lines[i].size));
            if (Math.abs(lines[i].y - it.y) <= tol) { hit = lines[i]; break; }
          }
          if (!hit) {
            hit = { y: it.y, size: it.size, parts: [] };
            lines.push(hit);
          }
          if (it.s.trim()) hit.size = Math.max(hit.size, it.size);
          hit.parts.push(it);
        });
        lines.forEach(function (ln) {
          var r = 0;
          ln.parts.forEach(function (p) { if (p.s.trim()) r += p.rtl ? 1 : -1; });
          ln.rtl = r > 0;
          ln.parts.sort(function (a, b) { return ln.rtl ? b.x - a.x : a.x - b.x; });
        });
        return lines.filter(function (ln) { return ln.parts.some(function (p) { return p.s.trim(); }); })
          .sort(function (a, b) { return a.y - b.y; });
      }

      /**
       * 把一组文本项拼成一行文字：小间距补空格，大间距（≥ 2 倍字号）可输出制表符。
       * pdf.js 会在词间插入宽度覆盖整段空隙的纯空格项，故间距只按相邻的非空白项计算。
       * @param {Array<any>} parts 已按阅读顺序排好的文本项
       * @param {boolean} rtl 是否从右往左
       * @param {boolean} useTab 大间距是否输出制表符
       * @returns {string} 行文字
       */
      function joinParts(parts, rtl, useTab) {
        var out = '';
        var prev = null;
        var pendingSpace = false;
        parts.forEach(function (p) {
          if (!p.s.trim()) { pendingSpace = true; return; }
          if (prev) {
            var gap = rtl ? prev.x - (p.x + p.w) : p.x - (prev.x + prev.w);
            var size = Math.max(p.size, prev.size);
            if (useTab && gap >= 2 * size) {
              out = out.replace(/[ ]+$/, '') + '\\t';
            } else if ((pendingSpace || gap > 0.18 * size) && !/\\s$/.test(out) && !/^\\s/.test(p.s)) {
              out += ' ';
            }
          }
          out += p.s;
          prev = p;
          pendingSpace = false;
        });
        return out.replace(/[ \\u00a0]+/g, ' ').replace(/ ?\\t ?/g, '\\t').trim();
      }

      /**
       * 行的归一化键（数字记作 #），用于识别各页重复的页眉页脚。
       * @param {any} ln 行
       * @returns {string} 键
       */
      function lineKey(ln) {
        return joinParts(ln.parts, ln.rtl, false).toLowerCase().replace(/[0-9]+/g, '#').replace(/\\s+/g, ' ').trim();
      }

      /**
       * 删除重复页眉页脚：每页顶部 / 底部 2 行中，同键出现在 ≥ 3 页且 ≥ 60% 有字页的行。
       * @param {Array<Array<any>>} pageLines 各页的行
       * @returns {number} 删除的行数
       */
      function stripHeaders(pageLines) {
        var withText = pageLines.filter(function (ls) { return ls.length; }).length;
        if (withText < 3) return 0;
        var need = Math.max(3, Math.ceil(withText * 0.6));
        var counts = {};
        pageLines.forEach(function (ls) {
          var seen = {};
          edgeIdx(ls).forEach(function (i) {
            var k = lineKey(ls[i]);
            if (k && !seen[k]) { seen[k] = 1; counts[k] = (counts[k] || 0) + 1; }
          });
        });
        var removed = 0;
        pageLines.forEach(function (ls, pi) {
          var drop = {};
          edgeIdx(ls).forEach(function (i) { if ((counts[lineKey(ls[i])] || 0) >= need) drop[i] = 1; });
          var kept = ls.filter(function (_, i) { return !drop[i]; });
          removed += ls.length - kept.length;
          pageLines[pi] = kept;
        });
        return removed;
      }

      /**
       * 一页顶部 2 行与底部 2 行的下标。
       * @param {Array<any>} ls 行
       * @returns {number[]} 下标（去重）
       */
      function edgeIdx(ls) {
        var idx = [];
        [0, 1, ls.length - 2, ls.length - 1].forEach(function (i) { if (i >= 0 && i < ls.length && idx.indexOf(i) < 0) idx.push(i); });
        return idx;
      }

      /**
       * 识别双栏：在文字宽度中间一半里找几乎没有行覆盖的竖向空白带。
       * @param {Array<any>} lines 一页的行
       * @returns {{ l: number, r: number }|null} 空白带左右边界；无双栏返回 null
       */
      function findGutter(lines) {
        if (lines.length < 6) return null;
        var minX = Infinity;
        var maxX = -Infinity;
        var sizes = [];
        lines.forEach(function (ln) {
          ln.parts.forEach(function (p) {
            if (!p.s.trim()) return;
            minX = Math.min(minX, p.x);
            maxX = Math.max(maxX, p.x + p.w);
          });
          sizes.push(ln.size);
        });
        var width = maxX - minX;
        if (!(width > 50)) return null;
        var BIN = 2;
        var nb = Math.ceil(width / BIN) + 1;
        var cover = new Array(nb).fill(0);
        lines.forEach(function (ln) {
          var hit = {};
          ln.parts.forEach(function (p) {
            if (!p.s.trim()) return;
            var a = Math.max(0, Math.floor((p.x - minX) / BIN));
            var b = Math.min(nb - 1, Math.floor((p.x + p.w - minX) / BIN));
            for (var i = a; i <= b; i++) hit[i] = 1;
          });
          Object.keys(hit).forEach(function (i) { cover[i] += 1; });
        });
        var allowed = Math.floor(lines.length * 0.15);
        var lo = Math.floor(nb * 0.25);
        var hi = Math.ceil(nb * 0.75);
        var best = null;
        var start = -1;
        for (var i = lo; i <= hi + 1; i++) {
          var free = i <= hi && cover[i] <= allowed;
          if (free && start < 0) start = i;
          if (!free && start >= 0) {
            if (!best || i - start > best.n) best = { a: start, n: i - start };
            start = -1;
          }
        }
        if (!best || best.n * BIN < Math.max(8, 1.2 * median(sizes))) return null;
        return { l: minX + best.a * BIN, r: minX + (best.a + best.n) * BIN };
      }

      /**
       * 把一页的行转成阅读顺序的「片段行」：双栏时先左栏后右栏（RTL 页先右栏），跨栏行原位输出。
       * @param {Array<any>} lines 一页的行
       * @param {boolean} detect 是否识别双栏
       * @param {boolean} useTab 大间距是否输出制表符
       * @returns {Array<{y:number,size:number,x0:number,x1:number,text:string,brk:boolean,group:number}>}
       */
      function toSegments(lines, detect, useTab) {
        /** 由一组文本项生成片段行。 */
        function seg(ln, parts, group, brk) {
          var x0 = Infinity;
          var x1 = -Infinity;
          parts.forEach(function (p) { if (p.s.trim()) { x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x + p.w); } });
          return { y: ln.y, size: ln.size, x0: x0, x1: x1, text: joinParts(parts, ln.rtl, useTab), brk: !!brk, group: group };
        }
        var gutter = detect ? findGutter(lines) : null;
        if (gutter) {
          var mid = (gutter.l + gutter.r) / 2;
          var left = [];
          var right = [];
          var leftLen = [];
          var rightLen = [];
          lines.forEach(function (ln) {
            var cross = ln.parts.some(function (p) { return p.s.trim() && p.x < gutter.l && p.x + p.w > gutter.r; });
            if (cross) return;
            var lp = ln.parts.filter(function (p) { return p.x + p.w / 2 < mid; });
            var rp = ln.parts.filter(function (p) { return p.x + p.w / 2 >= mid; });
            if (lp.some(function (p) { return p.s.trim(); })) { left.push(ln); leftLen.push(joinParts(lp, ln.rtl, false).length); }
            if (rp.some(function (p) { return p.s.trim(); })) { right.push(ln); rightLen.push(joinParts(rp, ln.rtl, false).length); }
          });
          if (left.length < 3 || right.length < 3 || median(leftLen) < 20 || median(rightLen) < 20) gutter = null;
        }
        if (!gutter) return lines.map(function (ln) { return seg(ln, ln.parts, 0, false); });
        var rtlPage = lines.filter(function (ln) { return ln.rtl; }).length > lines.length / 2;
        var out = [];
        var colA = [];
        var colB = [];
        var group = 0;
        /** 把当前双栏块按阅读顺序写出。 */
        function flush() {
          var first = rtlPage ? colB : colA;
          var second = rtlPage ? colA : colB;
          group += 1;
          first.forEach(function (s, i) { s.group = group; s.brk = i === 0; out.push(s); });
          group += 1;
          second.forEach(function (s, i) { s.group = group; s.brk = i === 0; out.push(s); });
          colA = [];
          colB = [];
        }
        lines.forEach(function (ln) {
          var cross = ln.parts.some(function (p) { return p.s.trim() && p.x < gutter.l && p.x + p.w > gutter.r; });
          if (cross) {
            if (colA.length || colB.length) flush();
            group += 1;
            out.push(seg(ln, ln.parts, group, true));
            return;
          }
          var lp = ln.parts.filter(function (p) { return p.x + p.w / 2 < mid; });
          var rp = ln.parts.filter(function (p) { return p.x + p.w / 2 >= mid; });
          if (lp.some(function (p) { return p.s.trim(); })) colA.push(seg(ln, lp, 0, false));
          if (rp.some(function (p) { return p.s.trim(); })) colB.push(seg(ln, rp, 0, false));
        });
        if (colA.length || colB.length) flush();
        return out;
      }

      /**
       * 判断两行之间是否应另起一段。
       * @param {any} prev 上一行片段
       * @param {any} cur 当前行片段
       * @param {number} spacing 本页典型行距
       * @param {number} right 当前组右边界
       * @returns {boolean} 是否分段
       */
      function isBreak(prev, cur, spacing, right) {
        if (cur.brk || cur.group !== prev.group) return true;
        var gap = cur.y - prev.y;
        if (spacing && gap > spacing * 1.45) return true;
        if (Math.abs(cur.size - prev.size) > Math.max(prev.size, cur.size) * 0.15) return true;
        if (BULLET.test(cur.text)) return true;
        if (SENT_END.test(prev.text) && prev.x1 < right - 2.5 * prev.size) return true;
        return false;
      }

      /**
       * 把上一行与当前行接成同一段：行尾连字符断词接回，中日韩之间不加空格。
       * @param {string} acc 已累积文字
       * @param {string} next 当前行
       * @param {boolean} dehyphen 是否接回连字符断词
       * @returns {string} 拼接结果
       */
      function joinLine(acc, next, dehyphen) {
        if (/\\u00ad$/.test(acc)) return acc.slice(0, -1) + next;
        if (dehyphen && /[A-Za-z\\u00c0-\\u024f\\u0400-\\u04ff]-$/.test(acc) && /^[a-z\\u00df-\\u00ff\\u0430-\\u044f]/.test(next)) return acc.slice(0, -1) + next;
        if (CJK.test(acc.slice(-1)) || CJK.test(next.charAt(0))) return acc + next;
        return acc + ' ' + next;
      }

      /**
       * 段落模式：折行接回成段，段间空一行；含制表符的表格行逐行保留。
       * @param {Array<any>} segs 片段行
       * @param {boolean} dehyphen 是否接回连字符断词
       * @returns {string} 本页文字
       */
      function formatParagraphs(segs, dehyphen) {
        if (!segs.length) return '';
        var spacing = median(segs.slice(1).map(function (s, i) { return s.group === segs[i].group ? s.y - segs[i].y : 0; }).filter(function (d) { return d > 0; }));
        var rights = {};
        segs.forEach(function (s) { rights[s.group] = Math.max(rights[s.group] || -Infinity, s.x1); });
        var paras = [];
        var cur = segs[0].text;
        for (var i = 1; i < segs.length; i++) {
          var p = segs[i - 1];
          var s = segs[i];
          if (isBreak(p, s, spacing, rights[p.group])) {
            paras.push(cur);
            cur = s.text;
          } else if (/\\t/.test(p.text) || /\\t/.test(s.text)) {
            cur += '\\n' + s.text;
          } else {
            cur = joinLine(cur, s.text, dehyphen);
          }
        }
        paras.push(cur);
        return paras.join('\\n\\n');
      }

      /**
       * 逐行模式：保留 PDF 原行；明显的大间距处补一个空行。
       * @param {Array<any>} segs 片段行
       * @returns {string} 本页文字
       */
      function formatLines(segs) {
        if (!segs.length) return '';
        var spacing = median(segs.slice(1).map(function (s, i) { return s.y - segs[i].y; }).filter(function (d) { return d > 0; }));
        var out = [segs[0].text];
        for (var i = 1; i < segs.length; i++) {
          var gap = segs[i].y - segs[i - 1].y;
          if (segs[i].group !== segs[i - 1].group || (spacing && gap > spacing * 1.8)) out.push('');
          out.push(segs[i].text);
        }
        return out.join('\\n');
      }

      /**
       * 保留列模式：按平均字宽把每段文字放到对应字符列（等宽字体下与原页对齐），不识别双栏。
       * @param {Array<any>} lines 一页的行
       * @returns {string} 本页文字
       */
      function formatTable(lines) {
        if (!lines.length) return '';
        var minX = Infinity;
        var widths = [];
        lines.forEach(function (ln) {
          ln.parts.forEach(function (p) {
            var len = Array.from(p.s).length;
            if (!p.s.trim()) return;
            minX = Math.min(minX, p.x);
            if (len && p.w > 0) widths.push(p.w / len);
          });
        });
        var cw = median(widths) || 5;
        var spacing = median(lines.slice(1).map(function (ln, i) { return ln.y - lines[i].y; }).filter(function (d) { return d > 0; }));
        var out = [];
        lines.forEach(function (ln, li) {
          if (li && spacing && ln.y - lines[li - 1].y > spacing * 1.8) out.push('');
          var s = '';
          var parts = ln.parts.slice().sort(function (a, b) { return a.x - b.x; });
          var prevEnd = null;
          parts.forEach(function (p) {
            if (!p.s.trim()) return;
            var col = Math.round((p.x - minX) / cw);
            var len = Array.from(s).length;
            if (col > len) s += new Array(col - len + 1).join(' ');
            else if (len && prevEnd !== null && p.x - prevEnd > 0.18 * p.size && !/ $/.test(s)) s += ' ';
            s += p.s;
            prevEnd = p.x + p.w;
          });
          out.push(s.replace(/\\s+$/, ''));
        });
        return out.join('\\n');
      }

      /**
       * 读取当前设置。
       * @returns {{ layout: string, sep: string, headers: boolean, hyphen: boolean, columns: boolean, eol: string }}
       */
      function readOptions() {
        return {
          layout: layoutEl.value,
          sep: sepEl.value,
          headers: headersEl.checked,
          hyphen: hyphenEl.checked,
          columns: columnsEl.checked,
          eol: eolEl.value
        };
      }

      /**
       * 统计词数：优先 Intl.Segmenter（中日文按词切分），否则按空白切分。
       * @param {string} text 文本
       * @returns {number} 词数
       */
      function countWords(text) {
        try {
          if (typeof Intl !== 'undefined' && Intl.Segmenter) {
            var segr = new Intl.Segmenter(LANG, { granularity: 'word' });
            var n = 0;
            var it = segr.segment(text)[Symbol.iterator]();
            for (var r = it.next(); !r.done; r = it.next()) if (r.value.isWordLike) n += 1;
            return n;
          }
        } catch (e) {}
        return (text.match(/\\S+/g) || []).length;
      }

      /**
       * 用缓存的文本项按当前设置重排结果（不重读 PDF）。
       */
      function format() {
        if (!state.pages.length) return;
        var o = readOptions();
        hyphenEl.disabled = o.layout !== 'para';
        columnsEl.disabled = o.layout === 'table';
        var pageLines = state.pages.map(function (i) { return groupLines(state.cache[i] || []); });
        var removed = o.headers ? stripHeaders(pageLines) : 0;
        var empty = [];
        var chunks = [];
        state.pages.forEach(function (pi, k) {
          var raw = state.cache[pi] || [];
          var hasText = raw.some(function (it) { return it.s.trim(); });
          if (!hasText) empty.push(pi + 1);
          var ls = pageLines[k];
          var body = '';
          if (o.layout === 'table') body = formatTable(ls);
          else if (o.layout === 'lines') body = formatLines(toSegments(ls, o.columns, true));
          else body = formatParagraphs(toSegments(ls, o.columns, true), o.hyphen);
          if (o.sep === 'marker') chunks.push(fill(T.markerTpl, { n: pi + 1 }) + (body ? '\\n' + body : ''));
          else if (body || o.sep === 'ff') chunks.push(body);
        });
        var text = chunks.join(o.sep === 'ff' ? '\\n\\f' : '\\n\\n');
        if (empty.length === state.pages.length) {
          clearResult();
          setErr(T.errNoText);
          setWarn([state.fileLarge ? T.warnLarge : '']);
          return;
        }
        setErr('');
        state.text = text;
        outputEl.value = text;
        btnDownload.disabled = false;
        btnCopy.disabled = false;
        var flat = text.replace(/[\\r\\n\\f]/g, '');
        var stats = fill(T.statsTpl, {
          pages: state.pages.length,
          words: countWords(text),
          chars: Array.from(flat).length,
          lines: text.split('\\n').filter(function (l) { return l.trim(); }).length
        });
        if (removed) stats += ' · ' + fill(T.removedTpl, { n: removed });
        statsEl.textContent = stats;
        statsEl.style.display = '';
        var list = empty.slice(0, LIST_MAX).join(', ') + (empty.length > LIST_MAX ? ', …' : '');
        setWarn([empty.length ? fill(T.warnScanned, { pages: list }) : '', state.fileLarge ? T.warnLarge : '']);
      }

      /** 清空结果框、统计与下载 / 复制。 */
      function clearResult() {
        state.text = '';
        outputEl.value = '';
        statsEl.textContent = '';
        statsEl.style.display = 'none';
        btnDownload.disabled = true;
        btnCopy.disabled = true;
      }

      /** 刷新文件信息行。 */
      function refreshMeta() {
        if (!state.bytes) { metaEl.textContent = ''; return; }
        metaEl.textContent = fill(T.metaTpl, { name: state.name, pages: state.total || '?', size: formatBytes(state.size) });
      }

      /** 根据设置显示 / 隐藏页码框。 */
      function syncControls() {
        rangeWrap.hidden = pagesEl.value !== 'custom';
        var layout = layoutEl.value;
        hyphenEl.disabled = layout !== 'para';
        columnsEl.disabled = layout === 'table';
      }

      /** 关闭已打开的 pdf.js 文档。 */
      function closeDoc() {
        if (state.doc) { try { state.doc.destroy(); } catch (e) {} }
        state.doc = null;
      }

      /**
       * 用 pdf.js 打开当前字节（需要时带密码）。
       * @returns {Promise<any>} pdf.js 文档
       */
      function openDoc() {
        if (state.doc) return Promise.resolve(state.doc);
        return window.OftPdfWork.ensurePdfJs().catch(function () { throw new Error('pdfjs'); }).then(function (pdfjsLib) {
          var args = { data: state.bytes.slice(0) };
          if (state.encrypted && pwEl.value) args.password = pwEl.value;
          return pdfjsLib.getDocument(args).promise;
        }).then(function (doc) {
          state.doc = doc;
          state.total = doc.numPages;
          refreshMeta();
          return doc;
        });
      }

      /**
       * 把 pdf.js 错误映射为提示；密码类错误会显示密码框。
       * @param {any} err 错误
       * @returns {string} 提示文字
       */
      function mapError(err) {
        var name = String((err && err.name) || '');
        var msg = String((err && err.message) || err || '');
        if (msg === 'pdfjs') return T.errPdfjs;
        if (name === 'PasswordException' || /password/i.test(msg)) {
          state.encrypted = true;
          pwWrap.hidden = false;
          return err && err.code === 2 ? T.errPasswordWrong : T.errPassword;
        }
        return T.errLoad;
      }

      /**
       * 读入用户选择的 PDF：打开文档、显示页数与第一页预览（不自动提取）。
       * @param {Uint8Array} bytes 文件字节
       * @param {string} name 文件名
       * @param {number} size 文件大小
       * @returns {Promise<boolean>} 是否成功打开
       */
      function loadBytes(bytes, name, size) {
        state.token += 1;
        closeDoc();
        clearResult();
        work.clearPreview();
        setErr('');
        setWarn([]);
        setStatus('');
        state.bytes = bytes;
        state.name = name;
        state.size = size;
        state.total = 0;
        state.cache = {};
        state.pages = [];
        state.encrypted = false;
        state.fileLarge = size > SOFT_BYTES;
        pwEl.value = '';
        pwWrap.hidden = true;
        refreshMeta();
        setWarn([state.fileLarge ? T.warnLarge : '']);
        return openDoc().then(function () {
          work.showPreview(bytes).catch(function () {});
          return true;
        }).catch(function (err) {
          setErr(mapError(err));
          return false;
        });
      }

      /**
       * 打开用户选择的文件。
       * @param {File} file PDF 文件
       * @returns {Promise<void>}
       */
      function openFile(file) {
        var isPdf = /pdf/i.test(file.type || '') || /[.]pdf$/i.test(file.name || '');
        if (!isPdf) { setErr(T.errType); return Promise.resolve(); }
        return file.arrayBuffer().then(function (buf) {
          return loadBytes(new Uint8Array(buf), file.name || 'document.pdf', file.size);
        }).then(function () {}).catch(function () { setErr(T.errLoad); });
      }

      /**
       * 提取：按所选页读取文本层（已读的页直接用缓存），然后按设置排版。
       * @returns {Promise<void>}
       */
      function extract() {
        setErr('');
        if (!state.bytes) { clearResult(); setErr(T.empty); return Promise.resolve(); }
        var token = ++state.token;
        work.setBusy(busyBtns, true);
        work.setProgress(0);
        return window.OftPdfWork.yieldUi().then(openDoc).then(function (doc) {
          pwWrap.hidden = !state.encrypted;
          var pages = [];
          if (pagesEl.value === 'custom') {
            pages = parseRange(rangeEl.value, doc.numPages);
            if (!pages) throw { range: true };
          } else {
            for (var i = 0; i < doc.numPages; i++) pages.push(i);
          }
          var k = 0;
          /** 逐页读取文本层（每页后让出主线程刷新进度）。 */
          function step() {
            if (token !== state.token) return Promise.resolve(false);
            if (k >= pages.length) return Promise.resolve(true);
            var pi = pages[k];
            setStatus(fill(T.reading, { i: k + 1, n: pages.length }));
            var job = state.cache[pi] ? Promise.resolve() : doc.getPage(pi + 1).then(readPage).then(function (items) { state.cache[pi] = items; });
            return job.then(function () {
              k += 1;
              work.setProgress((k / pages.length) * 95);
              return (k % 5 ? Promise.resolve() : new Promise(function (r) { setTimeout(r, 0); })).then(step);
            });
          }
          return step().then(function (ok) {
            if (!ok) return;
            state.pages = pages;
            format();
            work.setProgress(100);
            setStatus(state.text ? T.done : '');
          });
        }).catch(function (err) {
          if (token !== state.token) return;
          clearResult();
          setStatus('');
          if (err && err.range) setErr(fill(T.errRange, { v: rangeEl.value || '', total: state.total }));
          else { closeDoc(); setErr(mapError(err)); }
        }).finally(function () {
          if (token !== state.token) return;
          work.setBusy(busyBtns, false);
          btnDownload.disabled = !state.text;
          btnCopy.disabled = !state.text;
          work.hideProgress();
        });
      }

      /**
       * 按换行符设置输出最终文字。
       * @returns {string} 结果（LF 或 CRLF）
       */
      function finalText() {
        return eolEl.value === 'crlf' ? state.text.replace(/\\n/g, '\\r\\n') : state.text;
      }

      /** 下载 .txt：文件名 <原名>.txt（UTF-8）。 */
      function download() {
        if (!state.text) return;
        var base = (state.name || 'document.pdf').replace(/[.]pdf$/i, '') || 'document';
        var url = URL.createObjectURL(new Blob([finalText()], { type: 'text/plain;charset=utf-8' }));
        var a = document.createElement('a');
        a.href = url;
        a.download = base + '.txt';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      }

      /** 复制结果到剪贴板（失败时退回选中文本 + execCommand），按钮短暂显示「已复制」。 */
      function copyText() {
        if (!state.text) return;
        var text = finalText();
        /** 复制成功后的按钮反馈。 */
        function ok() {
          btnCopy.textContent = T.copied;
          setTimeout(function () { btnCopy.textContent = T.copy; }, 1500);
        }
        /** 旧浏览器退路。 */
        function legacy() {
          outputEl.focus();
          outputEl.select();
          try { if (document.execCommand('copy')) ok(); } catch (e) {}
        }
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, legacy);
        else legacy();
      }

      /**
       * 生成 4 页英文样例：重复页眉页脚、跨行连字符、表格、双栏、末页只有图形（模拟扫描页），并自动提取。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setErr('');
        if (typeof PDFLib === 'undefined' || !PDFLib.PDFDocument) { setErr(T.errSample); return Promise.resolve(); }
        var L = PDFLib;
        return L.PDFDocument.create().then(function (doc) {
          doc.setTitle('Garden club newsletter');
          return Promise.all([doc.embedFont(L.StandardFonts.Helvetica), doc.embedFont(L.StandardFonts.HelveticaBold)]).then(function (fonts) {
            var f = fonts[0];
            var b = fonts[1];
            var grey = L.rgb(0.4, 0.4, 0.4);
            /** 写一行字。 */
            function txt(page, s, x, y, size, font) { page.drawText(s, { x: x, y: y, size: size, font: font || f }); }
            /** 新建一页并写页眉页脚。 */
            function newPage(n) {
              var pg = doc.addPage([420, 595]);
              pg.drawText('Northwind Garden Club - Spring Newsletter', { x: 40, y: 560, size: 9, font: f, color: grey });
              pg.drawText('Page ' + n + ' of 4', { x: 180, y: 30, size: 9, font: f, color: grey });
              return pg;
            }
            var p1 = newPage(1);
            txt(p1, 'Planting calendar', 40, 510, 18, b);
            ['Tomatoes, peppers and basil go into the ground after the',
              'last frost, which is usually in mid-May here. Seedlings',
              'started indoors need about a week of harden-',
              'ing off on a sheltered porch before transplanting.'].forEach(function (s, i) { txt(p1, s, 40, 480 - i * 15, 11); });
            ['Sow lettuce and radishes every two weeks from April to',
              'keep a steady harvest.'].forEach(function (s, i) { txt(p1, s, 40, 405 - i * 15, 11); });
            var p2 = newPage(2);
            txt(p2, 'Sowing dates', 40, 510, 16, b);
            [['Crop', 'Sow indoors', 'Plant out'], ['Tomato', 'Mar 15', 'May 20'], ['Pepper', 'Mar 1', 'May 25'], ['Basil', 'Apr 10', 'May 30']].forEach(function (row, i) {
              row.forEach(function (cell, c) { txt(p2, cell, 40 + c * 110, 480 - i * 16, 10, i ? f : b); });
            });
            var p3 = newPage(3);
            txt(p3, 'Club news', 40, 510, 16, b);
            ['The seed swap moved to', 'the library hall this year', 'and drew more than sixty', 'members, twice as many', 'as last spring.'].forEach(function (s, i) { txt(p3, s, 40, 482 - i * 13, 10); });
            ['Volunteers are needed for', 'the community plot on', 'Saturday mornings. Bring', 'gloves; tools are provided', 'by the club.'].forEach(function (s, i) { txt(p3, s, 225, 482 - i * 13, 10); });
            var p4 = doc.addPage([420, 595]);
            p4.drawRectangle({ x: 40, y: 300, width: 340, height: 240, color: L.rgb(0.93, 0.92, 0.88) });
            for (var k = 0; k < 9; k++) p4.drawRectangle({ x: 60, y: 510 - k * 22, width: k % 3 === 2 ? 180 : 290, height: 6, color: L.rgb(0.6, 0.6, 0.6) });
            return doc.save();
          });
        }).then(function (bytes) {
          fileInput.value = '';
          return loadBytes(new Uint8Array(bytes), 'garden-newsletter.pdf', bytes.length);
        }).then(function (ok) {
          if (ok) return extract();
        }).catch(function () { setErr(T.errSample); });
      }

      /** 清空：移除文件、结果与预览，设置恢复默认；不重新加载样例。 */
      function clearAll() {
        state.token += 1;
        closeDoc();
        state.bytes = null;
        state.name = '';
        state.size = 0;
        state.total = 0;
        state.cache = {};
        state.pages = [];
        state.encrypted = false;
        state.fileLarge = false;
        fileInput.value = '';
        pwEl.value = '';
        pwWrap.hidden = true;
        pagesEl.value = 'all';
        rangeEl.value = '';
        layoutEl.value = 'para';
        sepEl.value = 'blank';
        headersEl.checked = true;
        hyphenEl.checked = true;
        columnsEl.checked = true;
        eolEl.value = 'lf';
        clearResult();
        refreshMeta();
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setWarn([]);
        setStatus('');
        syncControls();
      }

      /** 页码变化后稍等再重新提取（已提取过时）。 */
      function scheduleExtract() {
        clearTimeout(state.timer);
        if (!state.pages.length) return;
        state.timer = setTimeout(extract, 400);
      }

      drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('dragover'); });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) openFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) openFile(f);
      });
      pwEl.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); extract(); } });
      pagesEl.addEventListener('change', function () {
        syncControls();
        if (pagesEl.value === 'custom') { rangeEl.focus(); if (!rangeEl.value) return; }
        scheduleExtract();
      });
      rangeEl.addEventListener('input', scheduleExtract);
      [layoutEl, sepEl, headersEl, hyphenEl, columnsEl, eolEl].forEach(function (el) {
        el.addEventListener('change', function () { syncControls(); if (state.pages.length && state.text) format(); });
      });
      btnExtract.addEventListener('click', function () { extract(); });
      btnDownload.addEventListener('click', download);
      btnCopy.addEventListener('click', copyText);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      syncControls();
      /** 进页自动生成样例并提取。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('extract-text-from-pdf');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as never),
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
