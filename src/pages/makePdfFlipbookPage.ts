/**
 * Make a PDF flipbook 工具页：把 PDF 渲染成可翻页的 HTML 翻页书（纯客户端）。
 * slug: make-pdf-flipbook（见 work-tasks/make-pdf-flipbook/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 选 PDF（点选或拖放）→ 显示文件名、页数、首页尺寸（mm）→「Create flipbook」→「Download HTML flipbook」；
 * - 设置默认折叠：版式（书本：封面单独、之后两页跨页 / 单页）、清晰度（72 / 108 / 144 dpi）、翻页书标题；
 * - 生成时用金标进度 HUD（读取 PDF → 渲染页面 → 打包 HTML），完成后 HUD 停在 100% 并提示下一步下载；
 * - 预览区直接嵌入将要下载的同一份 HTML（所见即所得）；改版式或标题即时重建，改清晰度需重新生成；
 * - 导出文件：单个 HTML，页面为内嵌 JPEG，离线可开；支持上一页 / 下一页按钮、方向键、点击左右半边、手机滑动、全屏；
 *   窄屏或竖屏时书本版式自动改为单页；
 * - 限制：最多 300 页，超过 80 页提示耗时与体积；加密 PDF、非 PDF、渲染失败各有错误卡片。
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
import { bcwHudCss } from './site/bcwHudCss';

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_make_pdf_flipbook';

/** 单个翻页书最多允许的页数（防止浏览器内存耗尽）。 */
const MAX_PAGES = 300;

/** 超过此页数时提示耗时与文件体积。 */
const WARN_PAGES = 80;

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
 * 渲染 make-pdf-flipbook 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderMakePdfFlipbookPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/make-pdf-flipbook';
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
			currentSlug: 'make-pdf-flipbook',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 客户端文案（JSON 注入页面脚本；模板里的 {name} 等占位符在客户端替换）。
	 */
	const clientText = {
		lang: opts.lang,
		maxPages: MAX_PAGES,
		warnPages: WARN_PAGES,
		fileInfo: tx('file_info_tpl'),
		progress: tx('progress'),
		doneTitle: tx('done_title'),
		failTitle: tx('fail_title'),
		statusRead: tx('status_read_tpl'),
		statusRender: tx('status_render_tpl'),
		statusBuild: tx('status_build'),
		doneTpl: tx('done_tpl'),
		elapsed: tx('elapsed_tpl'),
		needCreate: tx('need_create'),
		stale: tx('stale'),
		warnLarge: tx('warn_large_tpl'),
		errType: tx('err_type'),
		errLoad: tx('err_load'),
		errEncrypted: tx('err_encrypted'),
		errPdfjs: tx('err_pdfjs'),
		errRender: tx('err_render'),
		errTooMany: tx('err_too_many_tpl'),
		errEmpty: tx('err_empty'),
		sampleTitle: tx('sample_title'),
		vPrev: tx('viewer_prev'),
		vNext: tx('viewer_next'),
		vFull: tx('viewer_fullscreen'),
		vHint: tx('viewer_hint'),
		symKb: tx('sym_kb'),
		symMb: tx('sym_mb'),
	};

	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'fbHud', convertBtnId: 'fbBtnCreate' })}
    #fbHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .fb-file-info { font-size:.9rem; color:#495057; min-height:1.3em; }
    .fb-settings { border:1px solid #dee2e6; border-radius:.375rem; padding:.5rem .75rem; background:#fff; }
    .fb-settings summary { cursor:pointer; font-weight:600; }
    .fb-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(14rem, 1fr)); gap:.75rem; margin-top:.75rem; }
    .fb-grid .form-text { font-size:.8rem; }
    .fb-frame { display:block; width:100%; height:min(72vh, 560px); border:1px solid #dee2e6; border-radius:.375rem; background:#e9ecef; }
    .fb-preview-label { font-size:.85rem; color:#6c757d; margin-bottom:.35rem; }
    .fb-drop.is-over { border-color:#0d6efd; background:#e7f1ff; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone fb-drop mb-2" id="fbDrop" for="fbFile">
        <input type="file" id="fbFile" accept="application/pdf,.pdf">
        <span class="tool-dropzone-title">${escapeHtml(tx('choose'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
      </label>
      <p id="fbFileInfo" class="fb-file-info mb-2"></p>

      <details class="fb-settings mb-3" id="fbSettings">
        <summary>${escapeHtml(tx('settings_summary'))}</summary>
        <div class="fb-grid">
          <div>
            <label class="form-label" for="fbLayout">${escapeHtml(tx('layout_label'))}</label>
            <select id="fbLayout" class="form-select form-select-sm">
              <option value="book" selected>${escapeHtml(tx('layout_book'))}</option>
              <option value="single">${escapeHtml(tx('layout_single'))}</option>
            </select>
            <p class="form-text mb-0">${escapeHtml(tx('layout_hint'))}</p>
          </div>
          <div>
            <label class="form-label" for="fbQuality">${escapeHtml(tx('quality_label'))}</label>
            <select id="fbQuality" class="form-select form-select-sm">
              <option value="compact">${escapeHtml(tx('quality_compact'))}</option>
              <option value="standard" selected>${escapeHtml(tx('quality_standard'))}</option>
              <option value="high">${escapeHtml(tx('quality_high'))}</option>
            </select>
            <p class="form-text mb-0">${escapeHtml(tx('quality_hint'))}</p>
          </div>
          <div>
            <label class="form-label" for="fbTitle">${escapeHtml(tx('title_label'))}</label>
            <input id="fbTitle" class="form-control form-control-sm" type="text" maxlength="120" autocomplete="off" placeholder="${escapeHtml(tx('title_ph'))}">
            <p class="form-text mb-0">${escapeHtml(tx('title_hint'))}</p>
          </div>
        </div>
      </details>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
        <button type="button" id="fbBtnCreate" class="btn btn-primary">${escapeHtml(tx('create'))}</button>
        <button type="button" id="fbBtnDownload" class="btn btn-outline-primary" disabled>${escapeHtml(tx('download'))}</button>
        <button type="button" id="fbBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
        <button type="button" id="fbBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
      </div>

      <div id="fbHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top">
          <div class="bcw-hud-spin" aria-hidden="true"></div>
          <div class="bcw-hud-pct" id="fbPct">0%</div>
          <div class="bcw-hud-copy">
            <div class="bcw-hud-title" id="fbHudTitle">${escapeHtml(tx('progress'))}</div>
            <div class="bcw-hud-step" id="fbStep"></div>
            <div class="bcw-hud-time" id="fbTime"></div>
          </div>
        </div>
        <div class="progress">
          <div id="fbBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>
          <span class="bcw-hud-sheen" aria-hidden="true"></span>
        </div>
        <ol class="bcw-hud-steps">
          <li data-step="read">${escapeHtml(tx('step_read'))}</li>
          <li data-step="render">${escapeHtml(tx('step_render'))}</li>
          <li data-step="build">${escapeHtml(tx('step_build'))}</li>
        </ol>
      </div>

      <p id="fbWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
      <p id="fbStatus" class="small text-muted mb-2" role="status"></p>

      <div id="fbPreviewWrap" class="mb-3" hidden>
        <p class="fb-preview-label mb-1">${escapeHtml(tx('preview_label'))}</p>
        <iframe id="fbFrame" class="fb-frame" title="${escapeHtml(tx('preview_label'))}" sandbox="allow-scripts" allow="fullscreen" allowfullscreen></iframe>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(tx('article'))}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 6,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_pdfjs_label'), href: 'https://mozilla.github.io/pdf.js/' },
			{ label: tx('ref_iframe_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe' },
		],
	});

	const extraBodyHtml = `
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 服务端注入的本地化文案与常量。 */
      var T = ${JSON.stringify(clientText)};

      /**
       * 按 id 取元素。
       * @param {string} id 元素 id
       * @returns {HTMLElement} 元素
       */
      function $(id) { return document.getElementById(id); }

      var fileInput = $('fbFile');
      var drop = $('fbDrop');
      var fileInfo = $('fbFileInfo');
      var selLayout = $('fbLayout');
      var selQuality = $('fbQuality');
      var inTitle = $('fbTitle');
      var btnCreate = $('fbBtnCreate');
      var btnDownload = $('fbBtnDownload');
      var btnSample = $('fbBtnSample');
      var btnClear = $('fbBtnClear');
      var hud = $('fbHud');
      var pctEl = $('fbPct');
      var stepEl = $('fbStep');
      var timeEl = $('fbTime');
      var barEl = $('fbBar');
      var hudTitle = $('fbHudTitle');
      var warnEl = $('fbWarn');
      var statusEl = $('fbStatus');
      var frame = $('fbFrame');
      var previewWrap = $('fbPreviewWrap');

      /** 清晰度档位：scale 为相对 72 dpi 的渲染倍数，jpeg 为 JPEG 质量。 */
      var QUALITY = {
        compact: { scale: 1, jpeg: 0.72 },
        standard: { scale: 1.5, jpeg: 0.82 },
        high: { scale: 2, jpeg: 0.88 }
      };
      /** 单页位图最长边上限（像素），防止大幅面页面撑爆内存。 */
      var MAX_SIDE = 2600;
      /** 样例页尺寸：A5（点，1/72 英寸）。 */
      var SAMPLE_PAGE_PT = [420, 595];
      /** 文件名中不允许的字符（含反斜杠，用字符码拼出）。 */
      var BAD_NAME_CHARS = '<>:"/|?*' + String.fromCharCode(92);

      /** 当前 PDF：{ bytes: Uint8Array, name: string }。 */
      var source = null;
      /** pdf.js 文档对象。 */
      var pdfDoc = null;
      /** 已渲染页面缓存：{ quality: string, pages: Array<[dataUrl, w, h]> }。 */
      var rendered = null;
      /** 当前生成结果：{ html: string, file: string, size: number, url: string }。 */
      var result = null;
      /** 是否正在处理。 */
      var busy = false;
      /** HUD 开始时间（毫秒）。 */
      var startedAt = 0;
      /** HUD 计时器 id。 */
      var tickTimer = 0;
      /** 标题输入防抖计时器 id。 */
      var titleTimer = 0;

      /** 一位小数的数字格式（拉丁数字）。 */
      var nf1 = new Intl.NumberFormat(T.lang + '-u-nu-latn', { maximumFractionDigits: 1 });
      /** 整数格式（拉丁数字）。 */
      var nf0 = new Intl.NumberFormat(T.lang + '-u-nu-latn', { maximumFractionDigits: 0 });

      /**
       * 用对象替换模板中的 {key} 占位符。
       * @param {string} tpl 模板
       * @param {Object<string, string|number>} map 替换值
       * @returns {string} 替换后的文本
       */
      function fill(tpl, map) {
        return String(tpl).replace(/[{]([a-z]+)[}]/g, function (m, k) {
          return Object.prototype.hasOwnProperty.call(map, k) ? String(map[k]) : m;
        });
      }

      /**
       * 把字节数格式化为 KB / MB。
       * @param {number} bytes 字节数
       * @returns {string} 可读体积
       */
      function fmtSize(bytes) {
        if (bytes < 1024 * 1024) return nf0.format(Math.max(1, Math.round(bytes / 1024))) + ' ' + T.symKb;
        return nf1.format(bytes / (1024 * 1024)) + ' ' + T.symMb;
      }

      /**
       * 让出主线程一帧并短暂等待，保证 HUD 在重活前已画出。
       * @returns {Promise<void>}
       */
      function yieldUi() {
        return new Promise(function (resolve) {
          requestAnimationFrame(function () { setTimeout(resolve, 30); });
        });
      }

      /**
       * 转义 HTML 文本（用于导出文档中的标题与按钮文案）。
       * @param {string} value 原始文本
       * @returns {string} 转义后的文本
       */
      function escapeHtmlText(value) {
        return String(value == null ? '' : value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 去掉 .pdf 扩展名。
       * @param {string} name 文件名
       * @returns {string} 不含扩展名的名称
       */
      function baseName(name) {
        return String(name || '').replace(/[.]pdf$/i, '');
      }

      /**
       * 把标题变成安全的文件名主体（保留各国文字，只替换系统不允许的字符）。
       * @param {string} name 原始名称
       * @returns {string} 文件名主体
       */
      function safeFileBase(name) {
        var out = '';
        for (var i = 0; i < name.length; i++) {
          var c = name.charAt(i);
          out += (BAD_NAME_CHARS.indexOf(c) >= 0 || name.charCodeAt(i) < 32) ? '-' : c;
        }
        out = out.trim().replace(/[. ]+$/, '').slice(0, 80);
        return out || 'pdf';
      }

      /** 加载 pdf.js（同域 vendor）。 */
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('/vendor/pdfjs/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () { throw new Error('pdfjs'); });
      }

      /**
       * 构造带错误码的 Error。
       * @param {string} code pdfjs | encrypted | load | toomany | render | empty | type
       * @returns {Error} 错误对象
       */
      function codeError(code) {
        var e = new Error(code);
        e.code = code;
        return e;
      }

      /**
       * 错误码转本地化文案。
       * @param {Error} err 错误
       * @returns {string} 提示文案
       */
      function errText(err) {
        var code = (err && (err.code || err.message)) || '';
        if (code === 'pdfjs') return T.errPdfjs;
        if (code === 'encrypted') return T.errEncrypted;
        if (code === 'load') return T.errLoad;
        if (code === 'type') return T.errType;
        if (code === 'empty') return T.errEmpty;
        if (code === 'toomany') return fill(T.errTooMany, { pages: nf0.format(err.pages || 0), max: nf0.format(T.maxPages) });
        return T.errRender;
      }

      /** 刷新 HUD 已用时间。 */
      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(T.elapsed, { s: nf0.format(sec) });
      }

      /** 显示并重置 HUD，开始计时。 */
      function hudStart() {
        hud.hidden = false;
        hud.classList.remove('is-done', 'is-fail');
        hud.classList.add('is-on');
        hudTitle.textContent = T.progress;
        startedAt = Date.now();
        tickTime();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 500);
      }

      /**
       * 更新 HUD 百分比、步骤胶囊与当前说明。
       * @param {number} pct 0–100
       * @param {string} step read | render | build
       * @param {string} text 当前步骤说明
       */
      function hudProgress(pct, step, text) {
        var p = Math.max(0, Math.min(100, Math.round(pct)));
        pctEl.textContent = p + '%';
        barEl.style.width = p + '%';
        barEl.setAttribute('aria-valuenow', String(p));
        stepEl.textContent = text || '';
        var order = ['read', 'render', 'build'];
        hud.querySelectorAll('.bcw-hud-steps li').forEach(function (li) {
          var k = li.getAttribute('data-step');
          li.classList.toggle('is-on', k === step);
          li.classList.toggle('is-done', order.indexOf(k) < order.indexOf(step));
        });
      }

      /** 停止 HUD 计时。 */
      function stopTick() {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
      }

      /**
       * HUD 进入完成态（停在 100%，提示下一步下载）。
       * @param {string} text 完成说明
       */
      function hudDone(text) {
        stopTick();
        hud.hidden = false;
        hud.classList.remove('is-on', 'is-fail');
        hud.classList.add('is-done');
        hudTitle.textContent = T.doneTitle;
        pctEl.textContent = '100%';
        barEl.style.width = '100%';
        barEl.setAttribute('aria-valuenow', '100');
        stepEl.textContent = text;
        hud.querySelectorAll('.bcw-hud-steps li').forEach(function (li) {
          li.classList.remove('is-on');
          li.classList.add('is-done');
        });
      }

      /**
       * HUD 进入失败态（同尺寸红色卡片）。任务尚未开始就失败时（如文件类型不对），
       * 百分比归零并清空耗时与步骤，避免沿用上一次成功的 100%。
       * @param {string} text 错误说明
       */
      function hudFail(text) {
        stopTick();
        if (!hud.classList.contains('is-on')) {
          pctEl.textContent = '0%';
          barEl.style.width = '0%';
          barEl.setAttribute('aria-valuenow', '0');
          timeEl.textContent = '';
          hud.querySelectorAll('.bcw-hud-steps li').forEach(function (li) {
            li.classList.remove('is-on', 'is-done');
          });
        }
        hud.hidden = false;
        hud.classList.remove('is-on', 'is-done');
        hud.classList.add('is-fail');
        hudTitle.textContent = T.failTitle;
        stepEl.textContent = text;
        hud.setAttribute('role', 'alert');
      }

      /** 隐藏 HUD。 */
      function hudHide() {
        stopTick();
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-fail');
        hud.setAttribute('role', 'status');
      }

      /**
       * 切换忙碌态：禁用输入与按钮，主按钮显示转圈。
       * @param {boolean} on 是否忙碌
       */
      function setBusy(on) {
        busy = on;
        btnCreate.disabled = on;
        btnCreate.setAttribute('aria-busy', on ? 'true' : 'false');
        btnSample.disabled = on;
        btnClear.disabled = on;
        fileInput.disabled = on;
        selLayout.disabled = on;
        selQuality.disabled = on;
        inTitle.disabled = on;
        btnDownload.disabled = on || !result;
        if (on) hud.setAttribute('role', 'status');
      }

      /**
       * 显示或隐藏大文件提示。
       * @param {string} text 提示文案；空则隐藏
       */
      function setWarn(text) {
        warnEl.textContent = text || '';
        warnEl.style.display = text ? '' : 'none';
      }

      /** 作废当前结果（下载禁用、预览清空）。 */
      function clearResult() {
        if (result && result.url) URL.revokeObjectURL(result.url);
        result = null;
        frame.removeAttribute('src');
        previewWrap.hidden = true;
        btnDownload.disabled = true;
        statusEl.textContent = '';
      }

      /** 丢弃当前 PDF、渲染缓存与结果（保留设置）。 */
      function resetSource() {
        if (pdfDoc && pdfDoc.destroy) pdfDoc.destroy();
        source = null;
        pdfDoc = null;
        rendered = null;
        clearResult();
        setWarn('');
        fileInfo.textContent = '';
      }

      /**
       * 打开 PDF 字节，区分加密、损坏与渲染库加载失败。
       * @param {Uint8Array} bytes PDF 字节
       * @returns {Promise<any>} pdf.js 文档
       */
      function openPdf(bytes) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise.catch(function (err) {
            throw codeError(err && err.name === 'PasswordException' ? 'encrypted' : 'load');
          });
        });
      }

      /**
       * 读取首页尺寸并显示文件信息。
       * @param {string} name 文件名
       * @returns {Promise<void>}
       */
      function describe(name) {
        return pdfDoc.getPage(1).then(function (page) {
          var vp = page.getViewport({ scale: 1 });
          fileInfo.textContent = fill(T.fileInfo, {
            name: name,
            pages: nf0.format(pdfDoc.numPages),
            w: nf0.format(Math.round(vp.width * 25.4 / 72)),
            h: nf0.format(Math.round(vp.height * 25.4 / 72))
          });
        });
      }

      /**
       * 载入一份 PDF：重置结果、读取页数与尺寸；auto 为 true 时直接生成翻页书。
       * @param {Uint8Array} bytes PDF 字节
       * @param {string} name 文件名
       * @param {boolean} auto 是否自动生成
       * @returns {Promise<void>}
       */
      function loadSource(bytes, name, auto) {
        resetSource();
        hudHide();
        source = { bytes: bytes, name: name };
        setBusy(true);
        return openPdf(bytes).then(function (doc) {
          pdfDoc = doc;
          if (doc.numPages > T.maxPages) {
            var e = codeError('toomany');
            e.pages = doc.numPages;
            throw e;
          }
          if (doc.numPages > T.warnPages) setWarn(fill(T.warnLarge, { pages: nf0.format(doc.numPages) }));
          return describe(name);
        }).then(function () {
          setBusy(false);
          if (auto) return create();
          statusEl.textContent = T.needCreate;
        }).catch(function (err) {
          source = null;
          pdfDoc = null;
          fileInfo.textContent = '';
          setBusy(false);
          hudFail(errText(err));
        });
      }

      /**
       * 把一页渲染成 JPEG data URL。
       * @param {number} n 页码（1 起）
       * @param {{scale:number, jpeg:number}} q 清晰度档位
       * @returns {Promise<Array>} [dataUrl, 宽, 高]
       */
      function renderPage(n, q) {
        return pdfDoc.getPage(n).then(function (page) {
          var base = page.getViewport({ scale: 1 });
          var scale = Math.min(q.scale, MAX_SIDE / Math.max(base.width, base.height));
          var vp = page.getViewport({ scale: scale });
          var c = document.createElement('canvas');
          c.width = Math.max(1, Math.floor(vp.width));
          c.height = Math.max(1, Math.floor(vp.height));
          var ctx = c.getContext('2d');
          if (!ctx) throw codeError('render');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, c.width, c.height);
          return page.render({ canvasContext: ctx, viewport: vp }).promise.then(function () {
            var out = [c.toDataURL('image/jpeg', q.jpeg), c.width, c.height];
            c.width = 1;
            c.height = 1;
            if (page.cleanup) page.cleanup();
            return out;
          });
        });
      }

      /**
       * 导出 HTML 里的翻页逻辑（通过 toString 写进下载文件，只能使用自身参数与 DOM）。
       * @param {Array} P 页面数组：[dataUrl, 宽, 高]
       * @param {string} L 版式：book | single
       */
      function viewerMain(P, L) {
        var stage = document.getElementById('stage');
        var book = document.getElementById('book');
        var info = document.getElementById('info');
        var prev = document.getElementById('prev');
        var next = document.getElementById('next');
        var fs = document.getElementById('fs');
        var views = [];
        var vi = 0;
        var cur = 0;
        var touchX = null;
        function build() {
          var w = stage.clientWidth;
          var h = stage.clientHeight;
          var single = L !== 'book' || P.length < 2 || w < 560 || w < h;
          var k;
          views = [];
          if (single) {
            for (k = 0; k < P.length; k++) views.push([k]);
          } else {
            views.push([-1, 0]);
            for (k = 1; k < P.length; k += 2) views.push(k + 1 < P.length ? [k, k + 1] : [k, -1]);
          }
          vi = 0;
          for (k = 0; k < views.length; k++) {
            if (views[k].indexOf(cur) >= 0) { vi = k; break; }
          }
        }
        function show(dir) {
          var v = views[vi];
          var ref = P[v[0] >= 0 ? v[0] : v[1]];
          var w = Math.max(80, stage.clientWidth - 16);
          var h = Math.max(80, stage.clientHeight - 16);
          var tw = 0;
          var mh = 0;
          v.forEach(function (k) {
            var p = k >= 0 ? P[k] : ref;
            tw += p[1];
            mh = Math.max(mh, p[2]);
          });
          var s = Math.min(w / tw, h / mh, 1);
          book.innerHTML = '';
          v.forEach(function (k, j) {
            var p = k >= 0 ? P[k] : ref;
            var el = document.createElement(k >= 0 ? 'img' : 'div');
            el.className = 'pg' + (k < 0 ? ' blank' : '') + (v.length === 2 ? (j === 0 ? ' left' : ' right') : '');
            el.style.width = Math.floor(p[1] * s) + 'px';
            el.style.height = Math.floor(p[2] * s) + 'px';
            if (k >= 0) { el.src = p[0]; el.alt = String(k + 1); }
            book.appendChild(el);
          });
          var real = v.filter(function (k) { return k >= 0; });
          info.textContent = (real.length > 1 ? (real[0] + 1) + '–' + (real[1] + 1) : String(real[0] + 1)) + ' / ' + P.length;
          prev.disabled = vi === 0;
          next.disabled = vi === views.length - 1;
          if (dir) {
            book.classList.remove('turn-next', 'turn-prev');
            void book.offsetWidth;
            book.classList.add(dir > 0 ? 'turn-next' : 'turn-prev');
          }
        }
        function go(d) {
          var n = vi + d;
          if (n < 0 || n >= views.length || n === vi) return;
          vi = n;
          cur = views[vi][0] >= 0 ? views[vi][0] : views[vi][1];
          show(d);
        }
        prev.onclick = function () { go(-1); };
        next.onclick = function () { go(1); };
        stage.addEventListener('click', function (e) {
          var r = stage.getBoundingClientRect();
          go(e.clientX - r.left < r.width / 2 ? -1 : 1);
        });
        document.addEventListener('keydown', function (e) {
          var k = e.key;
          if (k === 'ArrowLeft' || k === 'PageUp') { go(-1); e.preventDefault(); }
          else if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { go(1); e.preventDefault(); }
          else if (k === 'Home') { go(-vi); e.preventDefault(); }
          else if (k === 'End') { go(views.length - 1 - vi); e.preventDefault(); }
        });
        stage.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
        stage.addEventListener('touchend', function (e) {
          if (touchX === null) return;
          var dx = e.changedTouches[0].clientX - touchX;
          touchX = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        });
        if (!document.fullscreenEnabled) fs.style.display = 'none';
        fs.onclick = function () {
          if (document.fullscreenElement) document.exitFullscreen();
          else document.documentElement.requestFullscreen();
        };
        window.addEventListener('resize', function () { build(); show(0); });
        build();
        show(0);
      }

      /** 导出 HTML 的样式。 */
      var VIEWER_CSS = [
        'html,body{height:100%;margin:0}',
        'body{display:flex;flex-direction:column;background:#e9ecef;color:#212529;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}',
        '.bar{display:flex;align-items:center;gap:12px;padding:8px 12px;background:#fff;border-bottom:1px solid #dee2e6}',
        '.bar h1{flex:1;margin:0;font-size:16px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
        '.info{font-size:14px;color:#495057;font-variant-numeric:tabular-nums;direction:ltr}',
        '.stage{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;overflow:hidden;cursor:pointer}',
        '.book{display:flex;align-items:center;justify-content:center;direction:ltr;perspective:1800px}',
        '.pg{display:block;background:#fff;box-shadow:0 6px 18px rgba(0,0,0,.18);user-select:none;-webkit-user-drag:none}',
        '.pg.left{border-right:1px solid #ced4da}',
        '.pg.blank{background:transparent;box-shadow:none;border:0}',
        '.turn-next .pg:last-child{animation:fbtn .38s ease-out;transform-origin:left center}',
        '.turn-prev .pg:first-child{animation:fbtp .38s ease-out;transform-origin:right center}',
        '@keyframes fbtn{from{transform:rotateY(-75deg);opacity:.35}to{transform:none;opacity:1}}',
        '@keyframes fbtp{from{transform:rotateY(75deg);opacity:.35}to{transform:none;opacity:1}}',
        '.nav{display:flex;justify-content:center;gap:10px;padding:8px}',
        'button{font:inherit;font-size:14px;padding:6px 14px;border:1px solid #adb5bd;border-radius:6px;background:#fff;color:#212529;cursor:pointer}',
        'button:disabled{opacity:.45;cursor:default}',
        '.hint{margin:0 0 8px;padding:0 12px;text-align:center;font-size:12px;color:#6c757d}'
      ].join('');

      /**
       * 生成可离线打开的 HTML 翻页书。
       * @param {Array} pages 页面数组：[dataUrl, 宽, 高]
       * @param {string} layout book | single
       * @param {string} title 翻页书标题
       * @returns {string} 完整 HTML 文档
       */
      function buildViewerHtml(pages, layout, title) {
        var esc = escapeHtmlText;
        var dir = T.lang === 'ar' ? ' dir="rtl"' : '';
        var script = '(' + viewerMain.toString() + ')(' + JSON.stringify(pages) + ',' + JSON.stringify(layout) + ');';
        return '<!doctype html><html lang="' + esc(T.lang) + '"' + dir + '><head><meta charset="utf-8">' +
          '<meta name="viewport" content="width=device-width,initial-scale=1">' +
          '<title>' + esc(title) + '</title><style>' + VIEWER_CSS + '</style></head><body>' +
          '<header class="bar"><h1>' + esc(title) + '</h1><span id="info" class="info"></span>' +
          '<button id="fs" type="button">' + esc(T.vFull) + '</button></header>' +
          '<main id="stage" class="stage"><div id="book" class="book"></div></main>' +
          '<nav class="nav"><button id="prev" type="button">' + esc(T.vPrev) + '</button>' +
          '<button id="next" type="button">' + esc(T.vNext) + '</button></nav>' +
          '<p class="hint">' + esc(T.vHint) + '</p>' +
          '<script>' + script + '</' + 'script></body></html>';
      }

      /** 当前生效的翻页书标题（空则用 PDF 文件名）。 */
      function currentTitle() {
        return inTitle.value.trim() || baseName(source ? source.name : '') || 'PDF';
      }

      /**
       * 用已渲染页面重建 HTML、预览与下载信息（不重新渲染）。
       * @returns {void}
       */
      function buildResult() {
        if (!rendered || !source) return;
        if (result && result.url) URL.revokeObjectURL(result.url);
        var title = currentTitle();
        var html = buildViewerHtml(rendered.pages, selLayout.value, title);
        var blob = new Blob([html], { type: 'text/html;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        result = { html: html, file: safeFileBase(title) + '-flipbook.html', size: blob.size, url: url };
        frame.src = url;
        previewWrap.hidden = false;
        btnDownload.disabled = busy;
        var text = fill(T.doneTpl, { pages: nf0.format(rendered.pages.length), size: fmtSize(blob.size), file: result.file });
        statusEl.textContent = '';
        hudDone(text);
      }

      /**
       * 生成翻页书：必要时渲染全部页面（带 HUD），然后打包 HTML。
       * @returns {Promise<void>}
       */
      function create() {
        if (busy) return Promise.resolve();
        if (!source || !pdfDoc) { hudFail(T.errEmpty); return Promise.resolve(); }
        var qKey = selQuality.value;
        var q = QUALITY[qKey] || QUALITY.standard;
        var total = pdfDoc.numPages;
        setBusy(true);
        setWarn(total > T.warnPages ? fill(T.warnLarge, { pages: nf0.format(total) }) : '');
        hudStart();
        hudProgress(2, 'read', fill(T.statusRead, { name: source.name }));
        var chain = yieldUi();
        if (!rendered || rendered.quality !== qKey) {
          var pages = [];
          for (var n = 1; n <= total; n++) {
            (function (pageNo) {
              chain = chain.then(function () {
                hudProgress(5 + ((pageNo - 1) / total) * 87, 'render', fill(T.statusRender, { n: nf0.format(pageNo), total: nf0.format(total) }));
                return yieldUi();
              }).then(function () {
                return renderPage(pageNo, q);
              }).then(function (p) { pages.push(p); });
            })(n);
          }
          chain = chain.then(function () { rendered = { quality: qKey, pages: pages }; });
        }
        return chain.then(function () {
          hudProgress(94, 'build', T.statusBuild);
          return yieldUi();
        }).then(function () {
          setBusy(false);
          buildResult();
        }).catch(function (err) {
          setBusy(false);
          clearResult();
          hudFail(errText(err && err.code ? err : codeError(err && err.message === 'pdfjs' ? 'pdfjs' : 'render')));
        });
      }

      /** 下载当前 HTML 翻页书。 */
      function download() {
        if (!result) return;
        var a = document.createElement('a');
        a.href = result.url;
        a.download = result.file;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }

      /**
       * 用 pdf-lib 生成 4 页 A5 样例目录（封面、目录、新品、封底），用于演示书本跨页。
       * @returns {Promise<Uint8Array>} PDF 字节
       */
      function makeSamplePdf() {
        if (!window.PDFLib || !PDFLib.PDFDocument) return Promise.reject(codeError('load'));
        var rgb = PDFLib.rgb;
        var green = rgb(0.16, 0.4, 0.29);
        var light = rgb(0.93, 0.96, 0.92);
        var dark = rgb(0.13, 0.15, 0.17);
        var grey = rgb(0.42, 0.46, 0.5);
        return PDFLib.PDFDocument.create().then(function (doc) {
          return Promise.all([
            doc.embedFont(PDFLib.StandardFonts.HelveticaBold),
            doc.embedFont(PDFLib.StandardFonts.Helvetica)
          ]).then(function (fonts) {
            var bold = fonts[0];
            var reg = fonts[1];
            var W = SAMPLE_PAGE_PT[0];
            var H = SAMPLE_PAGE_PT[1];
            var p1 = doc.addPage(SAMPLE_PAGE_PT.slice());
            p1.drawRectangle({ x: 0, y: 0, width: W, height: H, color: green });
            p1.drawText('GARDEN SHOP', { x: 40, y: H - 70, size: 14, font: bold, color: rgb(1, 1, 1) });
            p1.drawText('Spring', { x: 40, y: H - 250, size: 54, font: bold, color: rgb(1, 1, 1) });
            p1.drawText('Catalogue', { x: 40, y: H - 300, size: 38, font: reg, color: rgb(1, 1, 1) });
            p1.drawRectangle({ x: 40, y: 150, width: 120, height: 4, color: rgb(0.98, 0.8, 0.3) });
            p1.drawText('Sample PDF - 4 pages', { x: 40, y: 60, size: 11, font: reg, color: rgb(1, 1, 1) });

            var p2 = doc.addPage(SAMPLE_PAGE_PT.slice());
            p2.drawRectangle({ x: 0, y: H - 60, width: W, height: 60, color: light });
            p2.drawText('Inside this catalogue', { x: 40, y: H - 40, size: 18, font: bold, color: green });
            var toc = [['Seeds and bulbs', '3'], ['Hand tools', '3'], ['Watering', '3'], ['Opening hours', '4']];
            toc.forEach(function (row, i) {
              var y = H - 120 - i * 36;
              p2.drawText(row[0], { x: 40, y: y, size: 14, font: reg, color: dark });
              p2.drawText(row[1], { x: W - 60, y: y, size: 14, font: bold, color: dark });
              p2.drawLine({ start: { x: 40, y: y - 10 }, end: { x: W - 40, y: y - 10 }, thickness: 0.5, color: grey });
            });
            p2.drawText('Fresh stock arrives every Monday.', { x: 40, y: 140, size: 12, font: reg, color: grey });
            p2.drawText('2', { x: W / 2 - 3, y: 30, size: 10, font: reg, color: grey });

            var p3 = doc.addPage(SAMPLE_PAGE_PT.slice());
            p3.drawRectangle({ x: 0, y: H - 60, width: W, height: 60, color: light });
            p3.drawText('New arrivals', { x: 40, y: H - 40, size: 18, font: bold, color: green });
            var items = [
              ['Tomato seeds', '2.50', rgb(0.85, 0.3, 0.25)],
              ['Hand trowel', '9.90', rgb(0.55, 0.45, 0.35)],
              ['Watering can', '14.00', rgb(0.25, 0.5, 0.75)]
            ];
            items.forEach(function (it, i) {
              var y = H - 200 - i * 130;
              p3.drawRectangle({ x: 40, y: y, width: 100, height: 100, color: it[2] });
              p3.drawText(it[0], { x: 160, y: y + 64, size: 15, font: bold, color: dark });
              p3.drawText('EUR ' + it[1], { x: 160, y: y + 40, size: 13, font: reg, color: grey });
            });
            p3.drawText('3', { x: W / 2 - 3, y: 30, size: 10, font: reg, color: grey });

            var p4 = doc.addPage(SAMPLE_PAGE_PT.slice());
            p4.drawRectangle({ x: 0, y: 0, width: W, height: H, color: light });
            p4.drawText('Opening hours', { x: 40, y: H - 120, size: 20, font: bold, color: green });
            p4.drawText('Monday to Saturday  9:00 - 18:00', { x: 40, y: H - 160, size: 13, font: reg, color: dark });
            p4.drawText('Sunday  closed', { x: 40, y: H - 182, size: 13, font: reg, color: dark });
            p4.drawText('Thank you for reading.', { x: 40, y: 80, size: 14, font: bold, color: green });
            return doc.save();
          });
        }).then(function (bytes) { return new Uint8Array(bytes); });
      }

      /**
       * 加载样例：生成 4 页 A5 目录并自动生成翻页书（页面少，不会卡住标签页）。
       * @returns {Promise<void>}
       */
      function loadSample() {
        if (busy) return Promise.resolve();
        inTitle.value = T.sampleTitle;
        return makeSamplePdf().then(function (bytes) {
          return loadSource(bytes, 'sample-catalogue.pdf', true);
        }).catch(function (err) { hudFail(errText(err)); });
      }

      /**
       * 处理用户选择或拖入的文件。
       * @param {File} f 文件
       */
      function handleFile(f) {
        if (!f || busy) return;
        var isPdf = f.type === 'application/pdf' || /[.]pdf$/i.test(f.name || '');
        if (!isPdf) { resetSource(); hudFail(T.errType); return; }
        inTitle.value = '';
        f.arrayBuffer().then(function (ab) {
          return loadSource(new Uint8Array(ab), f.name || 'document.pdf', false);
        }).catch(function () { hudFail(T.errLoad); });
      }

      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) handleFile(fileInput.files[0]);
        fileInput.value = '';
      });
      drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('is-over'); });
      drop.addEventListener('dragleave', function () { drop.classList.remove('is-over'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('is-over');
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
      });

      selLayout.addEventListener('change', function () {
        if (rendered && source && !busy) buildResult();
      });
      inTitle.addEventListener('input', function () {
        if (titleTimer) clearTimeout(titleTimer);
        titleTimer = setTimeout(function () {
          if (rendered && source && !busy) buildResult();
        }, 400);
      });
      selQuality.addEventListener('change', function () {
        if (!source || busy) return;
        if (rendered && rendered.quality !== selQuality.value) {
          clearResult();
          hudHide();
          statusEl.textContent = T.stale;
        }
      });

      btnCreate.addEventListener('click', function () { create(); });
      btnDownload.addEventListener('click', download);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () {
        if (busy) return;
        resetSource();
        hudHide();
        inTitle.value = '';
        selLayout.value = 'book';
        selQuality.value = 'standard';
        fileInput.value = '';
      });

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('make-pdf-flipbook');
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
		contentHtml: contentHtml + igHtml + (toolSeoHtml || '') + referencesHtml,
		footerHtml,
		extraHeadHtml: extraHeadHtml + toolJsonLd,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
