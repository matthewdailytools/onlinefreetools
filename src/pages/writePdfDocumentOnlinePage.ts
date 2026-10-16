/**
 * Write a PDF document online 工具页：在浏览器里写文字并导出多页 PDF（纯客户端）。
 * slug: write-pdf-document-online（见 work-tasks/write-pdf-document-online/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 可选文档标题（印在第 1 页顶部，同时写入 PDF 元数据 Title 与下载文件名）；
 * - 轻量排版标记：`#` 标题、`##` 小标题、`-` / `*` 项目符号（行首空格缩进可嵌套）、`1.` 编号、单独一行 `---` 分页；
 * - 页面设置（默认折叠）：A4 / US Letter / US Legal / A5、纵向 / 横向、窄 / 常规 / 宽页边距、
 *   无衬线 / 衬线 / 等宽三种 PDF 标准字体、字号 8–24 pt、行距 1.0 / 1.15 / 1.5 / 2.0、底部页码「1 / 3」；
 * - 按词折行（拉丁文不在词中断开），中日韩文按字折行且句末标点不放到行首；超长单词才硬断；
 * - 标准字体字符集（WinAnsi）能编码的行写成真实可选文本（含弯引号、破折号、€）；
 *   其余行（中文、日文、韩文、阿拉伯文等）用系统字体栅格成图片写入，阿拉伯文 / 希伯来文行靠右对齐；
 * - 结果区：页数、版式、每页可容纳的行数与每行字数、栅格行数说明、文件名；
 * - 可选「在本浏览器保留草稿」（localStorage），清空会一并删除草稿；改页面设置后自动重新生成。
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
import {
	pdfWorkUiBlockHtml,
	pdfWorkUiClientScript,
	pdfWorkUiCss,
	pdfWorkUiLabels,
} from './site/pdfWorkUi';

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_write_pdf_document_online';

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
 * 渲染 write-pdf-document-online 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderWritePdfDocumentOnlinePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/write-pdf-document-online';
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
			currentSlug: 'write-pdf-document-online',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);

	/**
	 * 下拉框 HTML。
	 * @param id 元素 id
	 * @param labelKey 标签键
	 * @param options [值, 文案键] 列表
	 * @param selected 默认选中值
	 * @returns 表单组 HTML
	 */
	const select = (id: string, labelKey: string, options: Array<[string, string]>, selected: string) => `
          <div class="wp-field">
            <label class="form-label" for="${id}">${escapeHtml(tx(labelKey))}</label>
            <select id="${id}" class="form-select form-select-sm">
              ${options
								.map(
									([value, key]) =>
										`<option value="${value}"${value === selected ? ' selected' : ''}>${escapeHtml(tx(key))}</option>`
								)
								.join('')}
            </select>
          </div>`;

	/** 结果区一行：标签 + 输出位。 */
	const row = (id: string, labelKey: string) =>
		`<div id="${id}Row" class="wp-line"><strong>${escapeHtml(tx(labelKey))}:</strong> <span id="${id}"></span></div>`;

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    #wpText { min-height: 260px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; font-size: .92rem; }
    .wp-hint { color:#6c757d; font-size:.85rem; margin-top:.35rem; }
    .wp-counts { color:#495057; font-size:.85rem; margin-top:.25rem; font-variant-numeric: tabular-nums; }
    .wp-setup { margin: 1rem 0; border:1px solid #dee2e6; border-radius:.375rem; padding:.5rem .75rem; }
    .wp-setup summary { cursor:pointer; font-weight:500; }
    .wp-setup-summary { color:#6c757d; font-weight:400; font-size:.85rem; margin-inline-start:.35rem; }
    .wp-grid { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:.75rem 1rem; margin-top:.75rem; }
    @media (max-width: 768px) { .wp-grid { grid-template-columns:repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 480px) { .wp-grid { grid-template-columns:1fr; } }
    .wp-checks { margin-top:.75rem; display:flex; flex-direction:column; gap:.35rem; }
    .wp-btns { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; margin-top:1rem; }
    .wp-result { background:#f8f9fa; padding:.75rem 1rem; border-radius:8px; margin-top:1rem; }
    .wp-line { color:#495057; font-size:.92rem; margin-top:.35rem; }
    .wp-line:first-child { margin-top:0; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="mb-2">
          <label class="form-label" for="wpTitle">${escapeHtml(tx('doc_title_label'))}</label>
          <input id="wpTitle" class="form-control" type="text" maxlength="200" autocomplete="off" placeholder="${escapeHtml(tx('doc_title_ph'))}">
        </div>
        <div>
          <label class="form-label" for="wpText">${escapeHtml(tx('text_label'))}</label>
          <textarea id="wpText" class="form-control" rows="12" spellcheck="true" placeholder="${escapeHtml(tx('text_ph'))}"></textarea>
          <div class="wp-hint" id="wpFormatHint">${escapeHtml(tx('format_hint'))}</div>
          <div class="wp-counts" id="wpCounts" aria-live="polite"></div>
        </div>

        <details class="wp-setup" id="wpSetup">
          <summary>${escapeHtml(tx('setup_label'))}<span class="wp-setup-summary" id="wpSetupSummary"></span></summary>
          <div class="wp-grid">
            ${select('wpSize', 'size_label', [['a4', 'size_a4'], ['letter', 'size_letter'], ['legal', 'size_legal'], ['a5', 'size_a5']], 'a4')}
            ${select('wpOrient', 'orient_label', [['portrait', 'orient_portrait'], ['landscape', 'orient_landscape']], 'portrait')}
            ${select('wpMargin', 'margin_label', [['narrow', 'margin_narrow'], ['normal', 'margin_normal'], ['wide', 'margin_wide']], 'normal')}
            ${select('wpFont', 'font_label', [['sans', 'font_sans'], ['serif', 'font_serif'], ['mono', 'font_mono']], 'sans')}
            <div class="wp-field">
              <label class="form-label" for="wpPt">${escapeHtml(tx('font_size'))}</label>
              <input id="wpPt" class="form-control form-control-sm" type="text" inputmode="decimal" value="12" autocomplete="off">
            </div>
            ${select('wpSpacing', 'spacing_label', [['1', 'spacing_1'], ['1.15', 'spacing_115'], ['1.5', 'spacing_15'], ['2', 'spacing_2']], '1.15')}
          </div>
          <div class="wp-checks">
            <label class="form-check-label"><input id="wpPageNum" class="form-check-input me-1" type="checkbox" checked> ${escapeHtml(tx('pagenum_label'))}</label>
            <label class="form-check-label"><input id="wpDraft" class="form-check-input me-1" type="checkbox"> ${escapeHtml(tx('draft_label'))}</label>
          </div>
        </details>

        <div class="wp-btns">
          <button type="button" id="wpBtnCreate" class="btn btn-primary">${escapeHtml(tx('create'))}</button>
          <button type="button" id="wpBtnDownload" class="btn btn-outline-primary" disabled>${escapeHtml(tx('download'))}</button>
          <button type="button" id="wpBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
          <button type="button" id="wpBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
        </div>

        <p id="wpError" class="small text-danger mt-2 mb-0" style="display:none;" role="alert"></p>
        <p id="wpStatus" class="small text-muted mt-2 mb-0" role="status"></p>

        <div id="wpResult" class="wp-result" style="display:none" aria-live="polite">
          ${row('wpResPages', 'res_pages')}
          ${row('wpResLayout', 'res_layout')}
          ${row('wpResFit', 'res_fit')}
          ${row('wpResText', 'res_text')}
          ${row('wpResFile', 'res_file')}
        </div>

        ${pdfWorkUiBlockHtml({ idPrefix: 'wpPdf', labels: pdfWorkLabels })}
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
			{ label: tx('ref_a_label'), href: 'https://pdf-lib.js.org/' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Paper_size' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		locale: opts.lang,
		countsTpl: tx('counts_tpl'),
		layoutTpl: tx('layout_tpl'),
		fitTpl: tx('fit_tpl'),
		fitMonoTpl: tx('fit_mono_tpl'),
		textAll: tx('text_all'),
		textSomeTpl: tx('text_some_tpl'),
		errEmpty: tx('err_empty'),
		errSize: tx('err_size'),
		errPdflib: tx('err_pdflib'),
		errConvert: tx('err_convert'),
		working: tx('status_working'),
		done: tx('status_done'),
		stale: tx('status_stale'),
		draftRestored: tx('draft_restored'),
		fileDefault: tx('file_default'),
		sample1Title: tx('sample1_title'),
		sample1Body: tx('sample1_body'),
		sample2Title: tx('sample2_title'),
		sample2Body: tx('sample2_body'),
	};

	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 本地化文案。 */
      var T = ${JSON.stringify(clientText)};
      /** 按 id 取元素。 */
      var $ = function (id) { return document.getElementById(id); };

      var titleEl = $('wpTitle');
      var textEl = $('wpText');
      var countsEl = $('wpCounts');
      var sizeEl = $('wpSize');
      var orientEl = $('wpOrient');
      var marginEl = $('wpMargin');
      var fontEl = $('wpFont');
      var ptEl = $('wpPt');
      var spacingEl = $('wpSpacing');
      var pageNumEl = $('wpPageNum');
      var draftEl = $('wpDraft');
      var summaryEl = $('wpSetupSummary');
      var btnCreate = $('wpBtnCreate');
      var btnDownload = $('wpBtnDownload');
      var btnSample = $('wpBtnSample');
      var btnClear = $('wpBtnClear');
      var errEl = $('wpError');
      var statusEl = $('wpStatus');
      var resultEl = $('wpResult');
      /** pdfWorkUi 进度条与预览绑定。 */
      var work = window.OftPdfWork.bind('wpPdf');
      /** 生成期间禁用的按钮。 */
      var busyBtns = [btnCreate, btnSample, btnClear, btnDownload];

      /** 换行、回车、制表符、不换行空格。 */
      var NL = String.fromCharCode(10);
      var CR = String.fromCharCode(13);
      var TAB = String.fromCharCode(9);
      /** 文案里用 ¶ 代表样例换行。 */
      var SEP = '¶';
      /** localStorage 草稿键。 */
      var DRAFT_KEY = 'oft-write-pdf-draft';
      /** 纸张尺寸（pt，纵向宽 × 高）。 */
      var PAGE_SIZES = { a4: [595.28, 841.89], letter: [612, 792], legal: [612, 1008], a5: [419.53, 595.28] };
      /** 页边距（pt）：窄 0.5 in、常规 1 in、宽 1.5 in。 */
      var MARGINS = { narrow: 36, normal: 72, wide: 108 };
      /** 字体族 → pdf-lib 标准字体名 [常规, 粗体]。 */
      var FONTS = { sans: ['Helvetica', 'HelveticaBold'], serif: ['TimesRoman', 'TimesRomanBold'], mono: ['Courier', 'CourierBold'] };
      /** 页面设置默认值（样例 1 与首访一致）。 */
      var DEFAULTS = { size: 'a4', orient: 'portrait', margin: 'normal', font: 'sans', pt: '12', spacing: '1.15', pageNum: true };
      /** 估算每行字数用的英文样句。 */
      var PANGRAM = 'The quick brown fox jumps over the lazy dog';

      /**
       * 由两个码位生成正则字符区间片段。
       * @param {number} a 起始码位
       * @param {number} b 结束码位
       * @returns {string}
       */
      function range(a, b) {
        return String.fromCharCode(a) + '-' + String.fromCharCode(b);
      }
      /** 从右往左书写的字符（希伯来文、阿拉伯文等）。 */
      var RTL_RE = new RegExp('[' + range(0x0590, 0x08FF) + ']');
      /** 计词时按「一字一词」统计的中日韩字符（不含标点）。 */
      var WORD_CJK_RE = new RegExp('[' + range(0x2E80, 0x2FFF) + range(0x3040, 0x9FFF) + range(0xAC00, 0xD7AF) + range(0xF900, 0xFAFF) + ']');
      /** 折行时可在其前后断开的字符（中日韩字符与全角标点）。 */
      var BREAK_RE = new RegExp('[' + range(0x2E80, 0x9FFF) + range(0xAC00, 0xD7AF) + range(0xF900, 0xFAFF) + range(0xFF00, 0xFFEF) + ']');
      /** 不能放在行首的标点（简易禁则）。 */
      var NO_START = '、。，．,.!?！？：；)）」』】》〉…ー々';
      /** 文件名里不允许的字符。 */
      var BAD_FILE_RE = new RegExp('[' + String.fromCharCode(92, 92) + '/:*?"<>|' + range(0, 31) + ']', 'g');
      /** 本地数字格式（拉丁数字）。 */
      var NF = new Intl.NumberFormat(T.locale + '-u-nu-latn', { maximumFractionDigits: 2 });

      /** 当前 PDF 字节与文件名。 */
      var resultBytes = null;
      var resultName = '';
      /** 是否正在生成、是否有排队的生成请求。 */
      var busy = false;
      var pending = false;
      /** 生成期间标题或正文是否被改过（完成后的 PDF 已过期，不允许下载）。 */
      var editedWhileBusy = false;
      /** 下一次「加载样例」使用的样例下标。 */
      var sampleIndex = 0;
      /** 本次生成是否由恢复草稿触发（完成时提示）。 */
      var restoredNote = false;
      /** 设置变更、输入的防抖计时器。 */
      var setupTimer = 0;
      var draftTimer = 0;

      /**
       * 用 {key} 占位填充模板。
       * @param {string} tpl 模板
       * @param {Object} map 键值
       * @returns {string}
       */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) { s = s.split('{' + k + '}').join(String(map[k])); });
        return s;
      }

      /**
       * 本地格式数字。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmt(n) {
        return NF.format(n);
      }

      /**
       * 显示 / 隐藏错误。
       * @param {string} text 错误文案；空则隐藏
       */
      function setErr(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? '' : 'none';
      }

      /**
       * 设置状态行。
       * @param {string} text 文案
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 设置结果行文本。
       * @param {string} id 输出位 id
       * @param {string} text 文本
       */
      function setRow(id, text) {
        $(id).textContent = text;
      }

      /**
       * 去掉行尾空格。
       * @param {string} s 文本
       * @returns {string}
       */
      function rtrim(s) {
        return String(s).replace(/[ ]+$/, '');
      }

      /**
       * 下拉框当前选项文案（去掉括号里的补充说明）。
       * @param {HTMLSelectElement} el 下拉框
       * @returns {string}
       */
      function shortOpt(el) {
        var opt = el.options[el.selectedIndex];
        return opt ? opt.text.replace(/[ ]?[(（].*$/, '') : '';
      }

      /**
       * 统计词数与字符数：中日韩字符一字一词，其余按空格分词；字符数不含换行。
       * @param {string} s 文本
       * @returns {{ words: number, chars: number }}
       */
      function countText(s) {
        var words = 0;
        var chars = 0;
        String(s || '').split(CR).join('').split(NL).forEach(function (line) {
          chars += Array.from(line).length;
          line.split(TAB).join(' ').split(String.fromCharCode(160)).join(' ').split(' ').forEach(function (tok) {
            if (!tok) return;
            var rest = '';
            Array.from(tok).forEach(function (ch) {
              if (WORD_CJK_RE.test(ch)) { words += 1; rest += ' '; } else { rest += ch; }
            });
            rest.split(' ').forEach(function (p) { if (p && /[0-9A-Za-zÀ-ɏͰ-ӿ؀-ۿ]/.test(p)) words += 1; });
          });
        });
        return { words: words, chars: chars };
      }

      /** 刷新输入框下方的词数 / 字符数。 */
      function updateCounts() {
        var c = countText((titleEl.value ? titleEl.value + NL : '') + textEl.value);
        countsEl.textContent = fill(T.countsTpl, { w: fmt(c.words), c: fmt(c.chars) });
      }

      /** 刷新折叠区标题后的设置摘要。 */
      function updateSummary() {
        summaryEl.textContent = '— ' + [shortOpt(sizeEl), shortOpt(orientEl), shortOpt(marginEl), shortOpt(fontEl)].join(' · ') + ' · ' + (ptEl.value || '') + ' pt';
      }

      /**
       * 读取并校验页面设置。
       * @returns {{ pageW: number, pageH: number, margin: number, font: string, pt: number, spacing: number, pageNum: boolean }}
       */
      function readCfg() {
        var pt = Number(String(ptEl.value || '').trim().split(',').join('.'));
        if (!(pt >= 8 && pt <= 24)) throw new Error('size');
        var dims = PAGE_SIZES[sizeEl.value] || PAGE_SIZES.a4;
        var landscape = orientEl.value === 'landscape';
        return {
          pageW: landscape ? dims[1] : dims[0],
          pageH: landscape ? dims[0] : dims[1],
          margin: MARGINS[marginEl.value] || 72,
          font: FONTS[fontEl.value] ? fontEl.value : 'sans',
          pt: pt,
          spacing: Number(spacingEl.value) || 1.15,
          pageNum: !!pageNumEl.checked,
        };
      }

      /**
       * 当前设置的原始值（存草稿用）。
       * @returns {Object}
       */
      function rawCfg() {
        return { size: sizeEl.value, orient: orientEl.value, margin: marginEl.value, font: fontEl.value, pt: ptEl.value, spacing: spacingEl.value, pageNum: pageNumEl.checked };
      }

      /**
       * 写回页面设置。
       * @param {Object} c rawCfg() 形状的设置
       */
      function applyCfg(c) {
        c = c || DEFAULTS;
        sizeEl.value = c.size || DEFAULTS.size;
        orientEl.value = c.orient || DEFAULTS.orient;
        marginEl.value = c.margin || DEFAULTS.margin;
        fontEl.value = c.font || DEFAULTS.font;
        ptEl.value = c.pt || DEFAULTS.pt;
        spacingEl.value = c.spacing || DEFAULTS.spacing;
        pageNumEl.checked = c.pageNum !== false;
        updateSummary();
      }

      /**
       * 包装已嵌入的常规 / 粗体字体，并给出字符集判断。
       * @param {any} reg 常规字体
       * @param {any} bold 粗体字体
       * @returns {{ reg: any, bold: any, encodable: function(string): boolean }}
       */
      function makeFonts(reg, bold) {
        var set = null;
        if (reg && typeof reg.getCharacterSet === 'function') {
          set = {};
          reg.getCharacterSet().forEach(function (cp) { set[cp] = 1; });
        }
        return {
          reg: reg,
          bold: bold,
          encodable: function (s) {
            var arr = Array.from(String(s || ''));
            for (var i = 0; i < arr.length; i++) {
              var cp = arr[i].codePointAt(0);
              if (set ? !set[cp] : (cp > 255 || cp < 32)) return false;
            }
            return true;
          },
        };
      }

      /**
       * 把一行文字切成可折行的片段：词（带尾随空格）、单个中日韩字符；禁则标点粘在前一片段。
       * @param {string} s 文本
       * @returns {string[]}
       */
      function tokenize(s) {
        var toks = [];
        var cur = '';
        var fresh = true;
        var lastSpace = false;
        var lastBreak = false;
        Array.from(String(s || '')).forEach(function (ch) {
          if (ch === ' ') {
            cur += ch;
            if (!fresh) lastSpace = true;
            return;
          }
          var isBreak = BREAK_RE.test(ch);
          var noStart = NO_START.indexOf(ch) >= 0;
          if (!fresh && (lastSpace || ((isBreak || lastBreak) && !noStart))) {
            toks.push(cur);
            cur = '';
          }
          cur += ch;
          fresh = false;
          lastSpace = false;
          lastBreak = isBreak;
        });
        if (cur) toks.push(cur);
        return toks;
      }

      /**
       * 把超宽片段按字符硬断。
       * @param {string} tok 片段
       * @param {number} maxW 最大宽度（pt）
       * @param {function(string): number} measure 测宽函数
       * @returns {string[]}
       */
      function hardBreak(tok, maxW, measure) {
        var out = [];
        var line = '';
        Array.from(tok).forEach(function (ch) {
          if (line && measure(rtrim(line + ch)) > maxW) {
            out.push(line);
            line = '';
          }
          line += ch;
        });
        out.push(line);
        return out;
      }

      /**
       * 按宽度折行：优先在空格与中日韩字符处断开，超长单词才硬断。
       * @param {string} text 一段文字
       * @param {number} maxW 最大宽度（pt）
       * @param {function(string): number} measure 测宽函数
       * @returns {string[]}
       */
      function wrapLine(text, maxW, measure) {
        var out = [];
        var line = '';
        tokenize(text).forEach(function (tok) {
          if (line && measure(rtrim(line + tok)) > maxW) {
            out.push(rtrim(line));
            line = '';
          }
          if (!line && measure(rtrim(tok)) > maxW) {
            var pieces = hardBreak(tok, maxW, measure);
            for (var k = 0; k < pieces.length - 1; k++) out.push(rtrim(pieces[k]));
            line = pieces[pieces.length - 1];
          } else {
            line += tok;
          }
        });
        if (line || !out.length) out.push(rtrim(line));
        return out;
      }

      /**
       * 解析排版标记为块列表。
       * @param {string} text 正文
       * @returns {Array<{ type: string, text?: string, marker?: string, level?: number }>}
       */
      function parseDoc(text) {
        var blocks = [];
        String(text || '').split(CR).join('').split(TAB).join('    ').split(NL).forEach(function (raw) {
          var line = rtrim(raw);
          var trimmed = line.trim();
          var lead = line.length - line.replace(/^[ ]+/, '').length;
          var level = Math.min(3, Math.floor(lead / 2));
          var m;
          if (trimmed === '---') blocks.push({ type: 'break' });
          else if (!trimmed) blocks.push({ type: 'blank' });
          else if ((m = /^(#{1,2})[ ]+(.+)$/.exec(trimmed))) blocks.push({ type: m[1].length === 1 ? 'h1' : 'h2', text: m[2] });
          else if ((m = /^[-*•][ ]+(.+)$/.exec(trimmed))) blocks.push({ type: 'list', marker: '•', text: m[1], level: level });
          else if ((m = /^([0-9]{1,3}[.)])[ ]+(.+)$/.exec(trimmed))) blocks.push({ type: 'list', marker: m[1], text: m[2], level: level });
          else blocks.push({ type: 'p', text: line });
        });
        return blocks;
      }

      /**
       * 排版：把块排到页面上，得到每页的绘制指令与统计。
       * @param {Object} cfg readCfg() 结果
       * @param {Object} fonts makeFonts() 结果
       * @param {Array} blocks parseDoc() 结果
       * @param {string} title 文档标题
       * @returns {{ pages: Array<Array<Object>>, lines: number, rasterLines: number, linesPerPage: number, charsPerLine: number }}
       */
      function layout(cfg, fonts, blocks, title) {
        var left = cfg.margin;
        var right = cfg.pageW - cfg.margin;
        var top = cfg.pageH - cfg.margin;
        var bottom = cfg.margin;
        var size = cfg.pt;
        var lh = size * cfg.spacing * 1.2;
        var pages = [[]];
        var y = top;
        var atTop = true;
        var lines = 0;
        var rasterLines = 0;

        /** 新起一页。 */
        function newPage() {
          pages.push([]);
          y = top;
          atTop = true;
        }

        /**
         * 测宽函数：栅格行用系统字体，其余用 PDF 标准字体。
         * @param {boolean} raster 是否栅格
         * @param {number} sz 字号
         * @param {boolean} bold 是否粗体
         * @returns {function(string): number}
         */
        function measureFn(raster, sz, bold) {
          if (raster) return function (s) { return window.OftPdfWork.measureTextWidth(s, sz); };
          var f = bold ? fonts.bold : fonts.reg;
          return function (s) { return f.widthOfTextAtSize(s, sz); };
        }

        /**
         * 折行并排一段文字（可带列表符号）。
         * @param {string} text 文字
         * @param {{ sz: number, lineH: number, bold?: boolean, marker?: string, level?: number }} o 排版参数
         */
        function flow(text, o) {
          var raster = !fonts.encodable(text);
          var rtl = raster && RTL_RE.test(text);
          var meas = measureFn(raster, o.sz, o.bold);
          var indent = (o.level || 0) * o.sz * 1.5;
          var hang = 0;
          var markerW = 0;
          if (o.marker) {
            markerW = fonts.reg.widthOfTextAtSize(o.marker, o.sz);
            hang = Math.max(markerW + fonts.reg.widthOfTextAtSize(' ', o.sz) * 2, o.sz * (o.marker === '•' ? 1.2 : 1.8));
          }
          var avail = Math.max(o.sz * 4, right - left - indent - hang);
          wrapLine(text, avail, meas).forEach(function (ln, i) {
            if (!atTop && y - o.lineH < bottom - 0.01) newPage();
            var base = y - o.sz;
            var page = pages[pages.length - 1];
            var x = rtl ? right - indent - hang - meas(ln) : left + indent + hang;
            if (i === 0 && o.marker) {
              page.push({ text: o.marker, x: rtl ? right - indent - markerW : left + indent, y: base, sz: o.sz, bold: false, raster: false });
            }
            if (ln) page.push({ text: ln, x: x, y: base, sz: o.sz, bold: !!o.bold, raster: raster });
            y -= o.lineH;
            atTop = false;
            lines += 1;
            if (raster) rasterLines += 1;
          });
        }

        if (title) {
          flow(title, { sz: size * 1.8, lineH: size * 1.8 * 1.25, bold: true });
          y -= lh * 0.6;
        }
        blocks.forEach(function (b) {
          if (b.type === 'break') {
            if (!atTop) newPage();
          } else if (b.type === 'blank') {
            if (!atTop) y -= lh;
          } else if (b.type === 'h1' || b.type === 'h2') {
            var hs = size * (b.type === 'h1' ? 1.5 : 1.2);
            if (!atTop) y -= lh * 0.5;
            flow(b.text, { sz: hs, lineH: Math.max(lh, hs * 1.3), bold: true });
          } else if (b.type === 'list') {
            flow(b.text, { sz: size, lineH: lh, marker: b.marker, level: b.level });
          } else {
            flow(b.text, { sz: size, lineH: lh });
          }
        });
        while (pages.length > 1 && !pages[pages.length - 1].length) pages.pop();

        var usableW = right - left;
        var charW = cfg.font === 'mono'
          ? fonts.reg.widthOfTextAtSize('0', size)
          : fonts.reg.widthOfTextAtSize(PANGRAM, size) / PANGRAM.length;
        return {
          pages: pages,
          lines: lines,
          rasterLines: rasterLines,
          linesPerPage: Math.floor((top - bottom) / lh + 0.0001),
          charsPerLine: Math.floor(usableW / charW),
        };
      }

      /**
       * 按排版结果逐页绘制，并加页码。
       * @param {any} doc pdf-lib 文档
       * @param {Object} cfg 设置
       * @param {Object} res layout() 结果
       * @param {Object} fonts 字体
       * @returns {Promise<void>}
       */
      function renderDoc(doc, cfg, res, fonts) {
        var total = res.pages.length;
        var ink = PDFLib.rgb(0.1, 0.1, 0.1);
        var chain = Promise.resolve();
        res.pages.forEach(function (ops, idx) {
          chain = chain.then(function () {
            var page = doc.addPage([cfg.pageW, cfg.pageH]);
            var inner = Promise.resolve();
            ops.forEach(function (op) {
              inner = inner.then(function () {
                if (!op.raster) {
                  page.drawText(op.text, { x: op.x, y: op.y, size: op.sz, font: op.bold ? fonts.bold : fonts.reg, color: ink });
                  return null;
                }
                return window.OftPdfWork.drawPageText(doc, page, op.text, { x: op.x, y: op.y, size: op.sz });
              });
            });
            return inner.then(function () {
              if (cfg.pageNum) {
                var label = (idx + 1) + ' / ' + total;
                var fs = 9;
                var w = fonts.reg.widthOfTextAtSize(label, fs);
                page.drawText(label, { x: (cfg.pageW - w) / 2, y: Math.max(12, cfg.margin / 2 - fs / 2), size: fs, font: fonts.reg, color: PDFLib.rgb(0.4, 0.4, 0.4) });
              }
              work.setProgress(10 + Math.round((85 * (idx + 1)) / total));
              return window.OftPdfWork.yieldUi();
            });
          });
        });
        return chain;
      }

      /**
       * 生成 PDF。
       * @returns {Promise<{ bytes: Uint8Array, res: Object, cfg: Object, title: string }>}
       */
      function build() {
        if (typeof PDFLib === 'undefined' || !PDFLib || typeof PDFLib.PDFDocument !== 'function') return Promise.reject(new Error('pdflib'));
        var cfg = readCfg();
        var docTitle = titleEl.value.trim();
        var text = textEl.value;
        if (!docTitle && !text.trim()) return Promise.reject(new Error('empty'));
        var names = FONTS[cfg.font];
        var doc = null;
        var fonts = null;
        var res = null;
        return PDFLib.PDFDocument.create()
          .then(function (d) {
            doc = d;
            return Promise.all([doc.embedFont(PDFLib.StandardFonts[names[0]]), doc.embedFont(PDFLib.StandardFonts[names[1]])]);
          })
          .then(function (f) {
            fonts = makeFonts(f[0], f[1]);
            res = layout(cfg, fonts, parseDoc(text), docTitle);
            work.setProgress(10);
            return renderDoc(doc, cfg, res, fonts);
          })
          .then(function () {
            if (docTitle) doc.setTitle(docTitle, { showInWindowTitleBar: true });
            doc.setCreator('OnlineFreeTools.org — write-pdf-document-online');
            doc.setProducer('pdf-lib');
            if (typeof doc.setLanguage === 'function') doc.setLanguage(T.locale);
            return doc.save();
          })
          .then(function (bytes) {
            return { bytes: new Uint8Array(bytes), res: res, cfg: cfg, title: docTitle };
          });
      }

      /**
       * 由标题生成下载文件名。
       * @param {string} docTitle 标题
       * @returns {string}
       */
      function fileNameFor(docTitle) {
        var base = String(docTitle || '').replace(BAD_FILE_RE, '').replace(/[ ]+/g, ' ').trim().slice(0, 80);
        return (base || T.fileDefault) + '.pdf';
      }

      /**
       * 显示结果区。
       * @param {Object} out build() 结果
       */
      function showResult(out) {
        var cfg = out.cfg;
        var res = out.res;
        setRow('wpResPages', fmt(res.pages.length));
        setRow('wpResLayout', fill(T.layoutTpl, {
          size: shortOpt(sizeEl),
          orient: shortOpt(orientEl),
          margin: shortOpt(marginEl),
          font: shortOpt(fontEl),
          pt: fmt(cfg.pt),
          sp: fmt(cfg.spacing),
        }));
        setRow('wpResFit', fill(cfg.font === 'mono' ? T.fitMonoTpl : T.fitTpl, { l: fmt(res.linesPerPage), c: fmt(res.charsPerLine) }));
        setRow('wpResText', res.rasterLines ? fill(T.textSomeTpl, { r: fmt(res.rasterLines), n: fmt(res.lines) }) : T.textAll);
        setRow('wpResFile', resultName);
        resultEl.style.display = '';
      }

      /** 生成并预览；生成中再次请求则排队一次。 */
      function createPdf() {
        if (busy) {
          pending = true;
          return Promise.resolve();
        }
        busy = true;
        editedWhileBusy = false;
        setErr('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(T.working);
        return window.OftPdfWork.yieldUi()
          .then(build)
          .then(function (out) {
            resultBytes = out.bytes;
            resultName = fileNameFor(out.title);
            showResult(out);
            work.setProgress(96);
            return work.showPreview(out.bytes);
          })
          .then(function () {
            work.setProgress(100);
            if (editedWhileBusy && !pending) {
              resultBytes = null;
              setStatus(T.stale);
              return;
            }
            setStatus(restoredNote ? T.draftRestored + ' ' + T.done : T.done);
          })
          .catch(function (err) {
            var e = String(err && err.message ? err.message : err);
            setErr(e === 'empty' ? T.errEmpty : e === 'size' ? T.errSize : e === 'pdflib' ? T.errPdflib : T.errConvert);
            setStatus('');
            resultBytes = null;
            resultEl.style.display = 'none';
            work.clearPreview();
          })
          .finally(function () {
            busy = false;
            restoredNote = false;
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
            if (pending) {
              pending = false;
              createPdf();
            }
          });
      }

      /** 下载当前 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var url = URL.createObjectURL(new Blob([resultBytes], { type: 'application/pdf' }));
        var a = document.createElement('a');
        a.href = url;
        a.download = resultName || fileNameFor('');
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }

      /** 保存草稿（仅勾选时）。 */
      function saveDraft() {
        if (!draftEl.checked) return;
        try {
          if (!titleEl.value && !textEl.value) localStorage.removeItem(DRAFT_KEY);
          else localStorage.setItem(DRAFT_KEY, JSON.stringify({ title: titleEl.value, text: textEl.value, cfg: rawCfg() }));
        } catch (ignore) {
          /* 隐私模式等不可写时忽略 */
        }
      }

      /**
       * 读取草稿。
       * @returns {{ title: string, text: string, cfg: Object }|null}
       */
      function loadDraft() {
        try {
          var raw = localStorage.getItem(DRAFT_KEY);
          return raw ? JSON.parse(raw) : null;
        } catch (ignore) {
          return null;
        }
      }

      /** 删除草稿。 */
      function removeDraft() {
        try { localStorage.removeItem(DRAFT_KEY); } catch (ignore) { /* 忽略 */ }
      }

      /** 文字改动：刷新计数、标记旧 PDF 过期、防抖保存草稿。 */
      function onTextInput() {
        updateCounts();
        if (busy) editedWhileBusy = true;
        if (resultBytes) {
          resultBytes = null;
          btnDownload.disabled = true;
          setStatus(T.stale);
        }
        clearTimeout(draftTimer);
        draftTimer = setTimeout(saveDraft, 500);
      }

      /** 设置改动：刷新摘要、保存草稿，已有内容时自动重新生成。 */
      function onSetupChange() {
        updateSummary();
        saveDraft();
        clearTimeout(setupTimer);
        setupTimer = setTimeout(function () {
          if (titleEl.value.trim() || textEl.value.trim()) createPdf();
        }, 250);
      }

      /**
       * 样例文案中的 ¶ 换成换行。
       * @param {string} s 文案
       * @returns {string}
       */
      function unSep(s) {
        return String(s || '').split(SEP).join(NL);
      }

      /** 加载样例：轮换两篇（会议记录 A4 无衬线；推荐信 Letter 衬线 1.5 倍行距并分页）。 */
      function loadSample() {
        var i = sampleIndex;
        sampleIndex = (sampleIndex + 1) % 2;
        if (i === 0) {
          applyCfg(DEFAULTS);
          titleEl.value = T.sample1Title;
          textEl.value = unSep(T.sample1Body);
        } else {
          applyCfg({ size: 'letter', orient: 'portrait', margin: 'normal', font: 'serif', pt: '12', spacing: '1.5', pageNum: true });
          titleEl.value = T.sample2Title;
          textEl.value = unSep(T.sample2Body);
        }
        updateCounts();
        saveDraft();
        return createPdf();
      }

      /** 清空：清标题与正文、删除草稿、隐藏结果；保留页面设置，不重新加载样例。 */
      function clearAll() {
        titleEl.value = '';
        textEl.value = '';
        resultBytes = null;
        resultName = '';
        btnDownload.disabled = true;
        resultEl.style.display = 'none';
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setStatus('');
        removeDraft();
        updateCounts();
        textEl.focus();
      }

      btnCreate.addEventListener('click', createPdf);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', clearAll);
      titleEl.addEventListener('input', onTextInput);
      textEl.addEventListener('input', onTextInput);
      [sizeEl, orientEl, marginEl, fontEl, spacingEl, pageNumEl].forEach(function (el) { el.addEventListener('change', onSetupChange); });
      ptEl.addEventListener('change', onSetupChange);
      draftEl.addEventListener('change', function () {
        if (draftEl.checked) saveDraft();
        else removeDraft();
      });

      /** 初始化：有草稿则恢复并生成，否则自动跑样例 1。 */
      var draft = loadDraft();
      if (draft && (draft.title || draft.text)) {
        draftEl.checked = true;
        applyCfg(draft.cfg);
        titleEl.value = draft.title || '';
        textEl.value = draft.text || '';
        updateCounts();
        restoredNote = true;
        createPdf();
      } else {
        updateSummary();
        loadSample();
      }
    })();
  </script>`;

	const toolMeta = getToolBySlug('write-pdf-document-online');
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
				name: tx('title'),
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
		contentHtml: contentHtml + (toolSeoHtml || '') + referencesHtml,
		footerHtml,
		extraHeadHtml: extraHeadHtml + toolJsonLd,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
