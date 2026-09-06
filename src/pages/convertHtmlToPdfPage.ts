/**
 * Convert HTML to PDF 工具页：粘贴 HTML 或由 Worker 代抓 URL 后，在浏览器里导出 PDF。
 * slug: convert-html-to-pdf
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

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 convert-html-to-pdf 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertHtmlToPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-html-to-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	const prefix = 'tool_convert_html_to_pdf';
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, prefix + '_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
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
			currentSlug: 'convert-html-to-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 网页地址输入框的默认值（打开页面、加载样例、清空后都回填此项）。 */
	const defaultPageUrl = 'https://example.com';
	/** 截图前额外等待远程/懒加载图片的默认秒数（进页输入框初始值）。 */
	const defaultLoadWaitSec = 1;
	/** 载入等待允许的上限（秒）。 */
	const maxLoadWaitSec = 30;
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    /* 预览用 iframe：srcdoc 是独立文档，<head> 里的 CSS 才能真正生效。 */
    #htmlConvertPreviewFrame {
      width: 100%;
      height: 28rem;
      border: 1px solid #dee2e6;
      border-radius: .25rem;
      background: #fff;
    }
    textarea#htmlConvertSource { min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .html-convert-url-row { gap: .5rem; }
    .tools-bar { gap: .5rem; }
    .html-convert-wait-field { min-width: 9rem; }
    #htmlConvertLoadWait { width: 4.75rem; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-12 col-lg-6">
        <label class="form-label" for="htmlConvertUrl">${escapeHtml(t(opts.lang, prefix + '_url_label'))}</label>
        <div class="d-flex align-items-center html-convert-url-row flex-wrap mb-1">
          <input type="url" id="htmlConvertUrl" class="form-control form-control-sm flex-grow-1" style="min-width:12rem;" inputmode="url" autocomplete="url" value="${escapeHtml(defaultPageUrl)}" placeholder="${escapeHtml(t(opts.lang, prefix + '_url_placeholder'))}">
          <button type="button" id="htmlConvertBtnLoadUrl" class="btn btn-outline-primary btn-sm text-nowrap">${escapeHtml(t(opts.lang, prefix + '_url_load'))}</button>
          <button type="button" id="htmlConvertBtnPasteHtml" class="btn btn-outline-secondary btn-sm text-nowrap">${escapeHtml(t(opts.lang, prefix + '_html_paste'))}</button>
        </div>
        <div class="form-text mb-2">${escapeHtml(t(opts.lang, prefix + '_url_hint'))}</div>
        <label class="form-label" for="htmlConvertSource">${escapeHtml(t(opts.lang, prefix + '_html_label'))}</label>
        <textarea id="htmlConvertSource" class="form-control form-control-sm" placeholder="<h1>Hello</h1><p>...</p>"></textarea>
        <div class="form-text">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</div>
      </div>
      <div class="col-12 col-lg-6">
        <p class="small text-muted mb-2">${escapeHtml(t(opts.lang, prefix + '_preview_label'))}</p>
        <iframe id="htmlConvertPreviewFrame" class="html-convert-preview-frame" sandbox="allow-same-origin" title="${escapeHtml(t(opts.lang, prefix + '_preview_label'))}" aria-live="polite"></iframe>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="htmlConvertBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_convert'))}</button>
      <button type="button" id="htmlConvertBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="htmlConvertBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="htmlConvertBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
      <label class="html-convert-wait-field d-flex align-items-center gap-1 mb-0 small text-nowrap" for="htmlConvertLoadWait">
        <span>${escapeHtml(t(opts.lang, prefix + '_wait_label'))}</span>
        <input type="number" id="htmlConvertLoadWait" class="form-control form-control-sm" min="0" max="${maxLoadWaitSec}" step="1" value="${defaultLoadWaitSec}" inputmode="numeric">
      </label>
    </div>
    <div class="form-text mb-2">${escapeHtml(t(opts.lang, prefix + '_wait_hint'))}</div>

    <p id="htmlConvertError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="htmlConvertStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'htmlPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'html2pdf.js', href: 'https://github.com/eKoopmans/html2pdf.js' }],
	});

	/**
	 * 客户端脚本：html2pdf.js 将 HTML 转成 PDF。载入网址与转换都只在用户点击后执行，进页不自动请求。
	 * 必须用 html2pdf.bundle.min.js：非 bundle 的 html2pdf.min.js 依赖全局 jspdf / html2canvas，
	 * 脚本 200 后仍会在初始化时抛 Cannot read properties of undefined (reading 'jsPDF')。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/dompurify/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/html2pdf/html2pdf.bundle.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var prefix = ${JSON.stringify(prefix)};
      /** 与服务端渲染的默认网页地址一致。 */
      var defaultPageUrl = ${JSON.stringify(defaultPageUrl)};

      /** HTML 源码输入框。 */
      var textarea = document.getElementById('htmlConvertSource');
      /** 页面 URL 输入框。 */
      var urlInput = document.getElementById('htmlConvertUrl');
      /**
       * 消毒后的 HTML 预览 iframe（独立文档，避免本页 CSS 干扰，并让目标页 head 样式生效）。
       * sandbox 仅 allow-same-origin：可读 DOM 做截图，但不执行脚本。
       */
      var previewFrame = document.getElementById('htmlConvertPreviewFrame');
      /** 转换按钮。 */
      var btnConvert = document.getElementById('htmlConvertBtnConvert');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('htmlConvertBtnDownload');
      /** 样例按钮。 */
      var btnSample = document.getElementById('htmlConvertBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('htmlConvertBtnClear');
      /** 从 URL 载入 HTML 的按钮。 */
      var btnLoadUrl = document.getElementById('htmlConvertBtnLoadUrl');
      /** 从系统剪贴板粘贴 HTML 的按钮。 */
      var btnPasteHtml = document.getElementById('htmlConvertBtnPasteHtml');
      /** 截图前额外等待秒数输入框。 */
      var waitInput = document.getElementById('htmlConvertLoadWait');
      /** 错误行。 */
      var errEl = document.getElementById('htmlConvertError');
      /** 状态行。 */
      var statusEl = document.getElementById('htmlConvertStatus');
      var work = window.OftPdfWork.bind('htmlPdf');
      var busyBtns = [btnConvert, btnSample, btnClear, btnDownload, btnLoadUrl, btnPasteHtml];

      var resultBytes = null;

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        sampleTitle: ${JSON.stringify(t(opts.lang, prefix + '_example'))},
        urlEmpty: ${JSON.stringify(t(opts.lang, prefix + '_err_url_empty'))},
        urlFail: ${JSON.stringify(t(opts.lang, prefix + '_err_url'))},
        fetching: ${JSON.stringify(t(opts.lang, prefix + '_status_fetching'))},
        waiting: ${JSON.stringify(t(opts.lang, prefix + '_status_waiting'))},
        pasteFail: ${JSON.stringify(t(opts.lang, prefix + '_err_paste'))},
      };

      /** 与页面输入框一致的默认等待秒数。 */
      var DEFAULT_LOAD_WAIT_SEC = ${defaultLoadWaitSec};
      /** 等待秒数上限，防止误填导致转换一直不开始。 */
      var MAX_LOAD_WAIT_SEC = ${maxLoadWaitSec};

      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 读取「载入等待」秒数并换成毫秒；非法值回退到默认。
       * @returns {number}
       */
      function readLoadWaitMs() {
        var raw = waitInput ? parseFloat(waitInput.value) : DEFAULT_LOAD_WAIT_SEC;
        if (!isFinite(raw)) raw = DEFAULT_LOAD_WAIT_SEC;
        var sec = Math.max(0, Math.min(MAX_LOAD_WAIT_SEC, raw));
        return Math.round(sec * 1000);
      }

      /**
       * 等待指定毫秒；0 则立刻继续。
       * @param {number} ms 毫秒
       * @returns {Promise<void>}
       */
      function sleep(ms) {
        if (!ms) return Promise.resolve();
        return new Promise(function (resolve) { setTimeout(resolve, ms); });
      }

      /**
       * 把懒加载图改成立即请求，否则预览 iframe 视口外的 img 会一直空白。
       * @param {Document} doc iframe 文档
       */
      function markImagesEager(doc) {
        var list = doc.images ? Array.prototype.slice.call(doc.images) : [];
        for (var i = 0; i < list.length; i++) {
          try {
            list[i].loading = 'eager';
            list[i].setAttribute('loading', 'eager');
          } catch (e) {}
        }
      }

      /** 触发下载（以 bytes 方式） */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'converted.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 清空预览 iframe，避免残留上一次页面的样式与节点。
       */
      function clearPreviewFrame() {
        if (previewFrame) previewFrame.srcdoc = '<!doctype html><html><head></head><body></body></html>';
      }

      /**
       * 消毒整份文档：保留 head 中的 stylesheet / style，去掉脚本与嵌套 iframe。
       * 必须 WHOLE_DOCUMENT，否则 link/style 只在 head 里，写入预览时会丢失。
       * @param {string} html 源 HTML
       * @returns {string} 可写入 iframe srcdoc 的 HTML
       */
      function sanitizeCapturedHtml(html) {
        return DOMPurify.sanitize(html, {
          USE_PROFILES: { html: true },
          WHOLE_DOCUMENT: true,
          ADD_TAGS: ['link', 'meta', 'base'],
          ADD_ATTR: ['href', 'rel', 'media', 'type', 'sizes', 'as', 'crossorigin', 'charset', 'content', 'name', 'property', 'http-equiv', 'phone'],
          FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'frame', 'frameset'],
        });
      }

      /**
       * 把消毒后的 HTML 写入预览 iframe，并等待外链 CSS 加载。
       * iframe 内的 base 标签只作用于 iframe 文档，不会改写工具页自身的相对路径。
       * @param {string} html 源 HTML
       * @returns {Promise<Document>} iframe 的 contentDocument
       */
      function writePreviewDocument(html) {
        return new Promise(function (resolve, reject) {
          if (!previewFrame) return reject(new Error('preview'));
          var clean = sanitizeCapturedHtml(html);
          var settled = false;
          /** iframe srcdoc 解析完成。 */
          function onLoad() {
            if (settled) return;
            previewFrame.removeEventListener('load', onLoad);
            var doc = previewFrame.contentDocument;
            if (!doc) {
              settled = true;
              return reject(new Error('preview'));
            }
            waitForStylesheets(doc).then(function () {
              if (settled) return;
              settled = true;
              resolve(doc);
            });
          }
          previewFrame.addEventListener('load', onLoad);
          previewFrame.srcdoc = clean;
          setTimeout(function () {
            if (settled) return;
            previewFrame.removeEventListener('load', onLoad);
            var doc = previewFrame.contentDocument;
            if (!doc) {
              settled = true;
              return reject(new Error('preview'));
            }
            settled = true;
            resolve(doc);
          }, 12000);
        });
      }

      /**
       * 等待文档中尚未就绪的 stylesheet（加载失败也继续，避免无限卡住）。
       * @param {Document} doc iframe 文档
       * @returns {Promise<void>}
       */
      function waitForStylesheets(doc) {
        var links = doc.querySelectorAll('link[rel="stylesheet"]');
        var waits = [];
        for (var i = 0; i < links.length; i++) {
          var el = links[i];
          try {
            if (el.sheet) continue;
          } catch (e) {
            /* 跨域 CSS 读 sheet 可能抛 SecurityError，仍等 load */
          }
          waits.push(new Promise(function (resolve) {
            var done = function () { resolve(); };
            el.addEventListener('load', done, { once: true });
            el.addEventListener('error', done, { once: true });
            setTimeout(done, 8000);
          }));
        }
        if (!waits.length) return Promise.resolve();
        return Promise.all(waits);
      }

      /**
       * 从 CSS background-image 里抽出 url(...) 地址。
       * @param {string} cssValue computed 或内联 background-image
       * @returns {string[]}
       */
      function parseCssUrls(cssValue) {
        var out = [];
        if (!cssValue || cssValue === 'none') return out;
        var re = /url\\(\\s*(['"]?)([^)'"]+)\\1\\s*\\)/gi;
        var m;
        while ((m = re.exec(cssValue))) out.push(String(m[2] || '').trim());
        return out;
      }

      /**
       * html2canvas 能否按 URL 识别为 png/jpeg/gif（含 data: / blob:）。
       * @param {string} url 图片地址
       */
      function isHtml2canvasSafeUrl(url) {
        if (!url) return false;
        if (/^data:image\\/(png|jpe?g|gif)/i.test(url)) return true;
        if (/^blob:/i.test(url)) return true;
        return /\\.(png|jpe?g|gif)(\\?|#|$)/i.test(url);
      }

      /**
       * 是否需要解码后再写成 PNG（webp/avif/svg/ico，或 data: 同类）。
       * @param {string} url 图片地址
       */
      function needsPngRaster(url) {
        if (!url || /^blob:/i.test(url)) return false;
        if (/^data:image\\/(webp|avif|svg\\+xml|x-icon|vnd\\.microsoft\\.icon)/i.test(url)) return true;
        if (/^data:image\\/(png|jpe?g|gif)/i.test(url)) return false;
        return /\\.(webp|avif|svg|ico)(\\?|#|$)/i.test(url);
      }

      /**
       * 把 blob 画成 PNG data URL（浏览器原生解码 webp/avif/svg）。
       * @param {Blob} blob 图片字节
       * @returns {Promise<string>}
       */
      function blobToPngDataUrl(blob) {
        var tryBitmap = (typeof createImageBitmap === 'function')
          ? createImageBitmap(blob).then(function (bmp) {
              var c = document.createElement('canvas');
              c.width = bmp.width;
              c.height = bmp.height;
              var ctx = c.getContext('2d');
              if (!ctx) throw new Error('canvas');
              ctx.drawImage(bmp, 0, 0);
              if (bmp.close) bmp.close();
              return c.toDataURL('image/png');
            })
          : Promise.reject(new Error('no bitmap'));
        return tryBitmap.catch(function () {
          return new Promise(function (resolve, reject) {
            var obj = URL.createObjectURL(blob);
            var img = new Image();
            img.onload = function () {
              try {
                var c = document.createElement('canvas');
                c.width = img.naturalWidth || img.width || 1;
                c.height = img.naturalHeight || img.height || 1;
                var ctx = c.getContext('2d');
                if (!ctx) throw new Error('canvas');
                ctx.drawImage(img, 0, 0);
                URL.revokeObjectURL(obj);
                resolve(c.toDataURL('image/png'));
              } catch (e) {
                URL.revokeObjectURL(obj);
                reject(e);
              }
            };
            img.onerror = function () {
              URL.revokeObjectURL(obj);
              reject(new Error('img'));
            };
            img.src = obj;
          });
        });
      }

      /**
       * 经同源代理拉取远程图；data: 则直接 fetch。
       * @param {string} src 绝对 URL 或 data URL
       * @returns {Promise<Blob>}
       */
      function fetchAssetBlob(src) {
        if (/^data:/i.test(src)) {
          return fetch(src).then(function (r) { return r.blob(); });
        }
        return fetch('/api/tools/convert-html-to-pdf/asset?url=' + encodeURIComponent(src)).then(function (r) {
          if (!r.ok) throw new Error('asset');
          return r.blob();
        });
      }

      /**
       * 有限并发执行。
       * @param {Array} items 任务列表
       * @param {number} limit 并发上限
       * @param {Function} fn 对单项返回 Promise
       */
      function mapPool(items, limit, fn) {
        var i = 0;
        var workers = [];
        function next() {
          if (i >= items.length) return Promise.resolve();
          var item = items[i++];
          return Promise.resolve(fn(item)).then(next, next);
        }
        var n = Math.min(limit || 1, items.length);
        for (var w = 0; w < n; w++) workers.push(next());
        return Promise.all(workers);
      }

      /**
       * 把 iframe 文档里的远程图改成 html2canvas 能画的 PNG data URL / blob URL。
       * 改的是预览 DOM 本身，所以预览和随后的 PDF 截图一致。
       * @param {Document} doc iframe 文档
       * @returns {Promise<void>}
       */
      function prepareDocumentImages(doc) {
        var view = doc.defaultView;
        var seen = Object.create(null);
        var urls = [];
        function addUrl(u) {
          if (!u || seen[u]) return;
          if (/^blob:/i.test(u)) return;
          if (isHtml2canvasSafeUrl(u) && /^data:/i.test(u)) return;
          seen[u] = true;
          urls.push(u);
        }
        var imgs = doc.querySelectorAll('img');
        for (var i = 0; i < imgs.length; i++) {
          addUrl(imgs[i].currentSrc || imgs[i].getAttribute('src') || '');
          var ss = imgs[i].getAttribute('srcset') || '';
          if (ss) {
            var first = ss.split(',')[0].trim().split(/\\s+/)[0];
            addUrl(first);
          }
        }
        var nodes = doc.querySelectorAll('*');
        for (var n = 0; n < nodes.length; n++) {
          var bi = '';
          try {
            bi = (view && view.getComputedStyle(nodes[n]).backgroundImage) || '';
          } catch (e) {}
          var cssUrls = parseCssUrls(bi);
          for (var c = 0; c < cssUrls.length; c++) addUrl(cssUrls[c]);
        }
        if (urls.length > 80) urls = urls.slice(0, 80);
        /** 原 URL → 可截图 URL（PNG data URL 或 blob URL）。 */
        var rewritten = Object.create(null);
        return mapPool(urls, 4, function (src) {
          return fetchAssetBlob(src).then(function (blob) {
            var type = (blob.type || '').toLowerCase();
            var raster = needsPngRaster(src) || /webp|avif|svg|icon/i.test(type);
            if (!raster && /image\\/(png|jpe?g|gif)/i.test(type)) {
              return new Promise(function (resolve, reject) {
                var fr = new FileReader();
                fr.onload = function () { resolve(String(fr.result || '')); };
                fr.onerror = function () { reject(new Error('read')); };
                fr.readAsDataURL(blob);
              });
            }
            return blobToPngDataUrl(blob);
          }).then(function (out) {
            rewritten[src] = out;
          }).catch(function () { /* 单张失败则留给 stripUnsupportedImages */ });
        }).then(function () {
          for (var j = 0; j < imgs.length; j++) {
            var img = imgs[j];
            var src = img.currentSrc || img.getAttribute('src') || '';
            var next = rewritten[src];
            if (!next) {
              var ss2 = img.getAttribute('srcset') || '';
              var first2 = ss2 ? ss2.split(',')[0].trim().split(/\\s+/)[0] : '';
              next = rewritten[first2];
            }
            if (next) {
              img.removeAttribute('srcset');
              img.setAttribute('src', next);
            }
          }
          for (var k = 0; k < nodes.length; k++) {
            var el = nodes[k];
            var bg = '';
            try {
              bg = (view && view.getComputedStyle(el).backgroundImage) || '';
            } catch (e2) {}
            var parts = parseCssUrls(bg);
            if (!parts.length) continue;
            var changed = false;
            var rebuilt = [];
            for (var p = 0; p < parts.length; p++) {
              if (rewritten[parts[p]]) {
                rebuilt.push('url("' + rewritten[parts[p]] + '")');
                changed = true;
              } else {
                rebuilt.push('url("' + parts[p] + '")');
              }
            }
            if (changed) el.style.backgroundImage = rebuilt.join(', ');
          }
        });
      }

      /**
       * 等待文档中 img 解码完成（data URL / blob URL 替换后）。
       * @param {Document} doc iframe 文档
       * @param {number} timeoutMs 单张图最多等多久；过短则慢图会在 PDF 里留白
       */
      function waitForImages(doc, timeoutMs) {
        var list = doc.images ? Array.prototype.slice.call(doc.images) : [];
        if (!list.length) return Promise.resolve();
        var limit = Math.max(5000, timeoutMs || 0);
        return Promise.all(list.map(function (img) {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise(function (resolve) {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
            setTimeout(resolve, limit);
          });
        }));
      }

      /**
       * html2canvas 仍不认的图（转换失败残留）在克隆文档里去掉，避免整页失败。
       * @param {Document} clonedDoc html2canvas 克隆出的文档
       */
      function stripUnsupportedImages(clonedDoc) {
        var view = clonedDoc.defaultView;
        var nodes = clonedDoc.querySelectorAll('*');
        for (var i = 0; i < nodes.length; i++) {
          var el = nodes[i];
          var bi = '';
          try {
            bi = (view && view.getComputedStyle(el).backgroundImage) || '';
          } catch (e) {}
          if (bi && bi !== 'none') {
            var cssUrls = parseCssUrls(bi);
            var unsafe = false;
            for (var u = 0; u < cssUrls.length; u++) {
              if (!isHtml2canvasSafeUrl(cssUrls[u])) { unsafe = true; break; }
            }
            if (unsafe) el.style.backgroundImage = 'none';
          }
        }
        var imgs = clonedDoc.querySelectorAll('img');
        for (var j = 0; j < imgs.length; j++) {
          var img = imgs[j];
          var src = img.currentSrc || img.getAttribute('src') || '';
          var srcset = img.getAttribute('srcset') || '';
          if (!isHtml2canvasSafeUrl(src) || (srcset && /\\.(webp|avif|svg|ico)/i.test(srcset))) {
            img.removeAttribute('src');
            img.removeAttribute('srcset');
          }
        }
      }

      /**
       * 去掉 html/body 以及撑满视口的 overflow 裁剪，让 scrollHeight 等于真实内容高度。
       * 新闻站常用 height:100% + overflow:hidden，否则截图只得到 iframe 一屏。
       * @param {Document} doc iframe 或 html2canvas 克隆文档
       * @returns {Array<{el: Element, height: string, maxHeight: string, overflow: string, overflowX: string, overflowY: string}>}
       */
      function unlockOverflowForCapture(doc) {
        var view = doc.defaultView;
        var unlocked = [];
        function unlock(el) {
          if (!el || !el.style) return;
          unlocked.push({
            el: el,
            height: el.style.height,
            maxHeight: el.style.maxHeight,
            overflow: el.style.overflow,
            overflowX: el.style.overflowX,
            overflowY: el.style.overflowY,
          });
          el.style.setProperty('height', 'auto', 'important');
          el.style.setProperty('max-height', 'none', 'important');
          el.style.setProperty('overflow', 'visible', 'important');
          el.style.setProperty('overflow-x', 'visible', 'important');
          el.style.setProperty('overflow-y', 'visible', 'important');
        }
        unlock(doc.documentElement);
        unlock(doc.body);
        var viewH = (view && view.innerHeight) || 600;
        var candidates = doc.querySelectorAll('body div, body main, body section, body article');
        var cap = Math.min(candidates.length, 48);
        for (var i = 0; i < cap; i++) {
          var el = candidates[i];
          var st = null;
          try { st = view && view.getComputedStyle(el); } catch (e) {}
          if (!st) continue;
          var oy = st.overflowY || st.overflow;
          var ox = st.overflowX || st.overflow;
          var rectH = 0;
          var rectW = 0;
          try {
            var rect = el.getBoundingClientRect();
            rectH = rect.height;
            rectW = rect.width;
          } catch (e2) {}
          var viewW = (view && view.innerWidth) || 800;
          var clipsY = (oy === 'hidden' || oy === 'clip' || oy === 'auto' || oy === 'scroll') && rectH >= viewH * 0.75 && el.scrollHeight > rectH + 24;
          var clipsX = (ox === 'hidden' || ox === 'clip' || ox === 'auto' || ox === 'scroll') && rectW >= viewW * 0.75 && el.scrollWidth > rectW + 24;
          if (clipsY || clipsX) {
            unlock(el);
          }
        }
        return unlocked;
      }

      /**
       * 恢复 unlockOverflowForCapture 改过的内联样式。
       * @param {Array} unlocked unlock 返回值
       */
      function restoreOverflowAfterCapture(unlocked) {
        if (!unlocked) return;
        for (var i = 0; i < unlocked.length; i++) {
          var p = unlocked[i];
          p.el.style.height = p.height;
          p.el.style.maxHeight = p.maxHeight;
          p.el.style.overflow = p.overflow;
          p.el.style.overflowX = p.overflowX;
          p.el.style.overflowY = p.overflowY;
        }
      }

      /**
       * 相对 html 原点的墨水盒（子元素 getBoundingClientRect），用于发现跑到视口左边的块。
       * @param {Document} doc iframe 文档
       */
      function measureInkBounds(doc) {
        var htmlEl = doc.documentElement;
        var body = doc.body;
        var origin = htmlEl.getBoundingClientRect();
        var minX = 0;
        var minY = 0;
        var maxX = Math.max(htmlEl.scrollWidth || 0, body ? body.scrollWidth : 0, htmlEl.clientWidth || 0);
        var maxY = Math.max(htmlEl.scrollHeight || 0, body ? body.scrollHeight : 0);
        var nodes = doc.querySelectorAll('body *');
        var cap = Math.min(nodes.length, 800);
        for (var i = 0; i < cap; i++) {
          var r;
          try { r = nodes[i].getBoundingClientRect(); } catch (e) { continue; }
          if (r.width < 1 && r.height < 1) continue;
          minX = Math.min(minX, r.left - origin.left);
          maxX = Math.max(maxX, r.right - origin.left);
          minY = Math.min(minY, r.top - origin.top);
          maxY = Math.max(maxY, r.bottom - origin.top);
        }
        return { minX: minX, minY: minY, maxX: maxX, maxY: maxY };
      }

      /**
       * 按当前布局算出要把溢出推进 html 盒所需的 padding（不改 DOM）。
       * @param {Document} doc iframe 文档
       * @returns {{ padL: number, padT: number, padR: number, minW: number }}
       */
      function computeOverflowPads(doc) {
        var htmlEl = doc.documentElement;
        var ink = measureInkBounds(doc);
        var clientW = Math.max(htmlEl.clientWidth || 0, 1);
        var padL = ink.minX < -1 ? Math.ceil(-ink.minX) + 8 : 0;
        var padT = ink.minY < -1 ? Math.ceil(-ink.minY) + 8 : 0;
        var padR = ink.maxX > clientW + 1 ? Math.ceil(ink.maxX - clientW) + 8 : 0;
        var minW = Math.max(
          htmlEl.scrollWidth || 0,
          Math.ceil(Math.max(ink.maxX, 0) + padL) + (padL || padR ? 8 : 0)
        );
        return { padL: padL, padT: padT, padR: padR, minW: minW };
      }

      /**
       * 把已算好的 padding 写到 html 上（克隆文档须用同一套数值，禁止按宽屏窗口重测）。
       * @param {Document} doc iframe 或 html2canvas 克隆文档
       * @param {{ padL: number, padT: number, padR: number, minW: number }} pads
       * @returns {{ el: Element, paddingLeft: string, paddingRight: string, paddingTop: string, boxSizing: string, minWidth: string, pads: object }}
       */
      function applyHtmlPadding(doc, pads) {
        var htmlEl = doc.documentElement;
        var prev = {
          el: htmlEl,
          paddingLeft: htmlEl.style.paddingLeft,
          paddingRight: htmlEl.style.paddingRight,
          paddingTop: htmlEl.style.paddingTop,
          boxSizing: htmlEl.style.boxSizing,
          minWidth: htmlEl.style.minWidth,
          pads: pads,
        };
        htmlEl.style.setProperty('box-sizing', 'content-box', 'important');
        if (pads.padL) htmlEl.style.setProperty('padding-left', pads.padL + 'px', 'important');
        if (pads.padT) htmlEl.style.setProperty('padding-top', pads.padT + 'px', 'important');
        if (pads.padR) htmlEl.style.setProperty('padding-right', pads.padR + 'px', 'important');
        if (pads.minW > (htmlEl.clientWidth || 0)) {
          htmlEl.style.setProperty('min-width', pads.minW + 'px', 'important');
        }
        void htmlEl.offsetWidth;
        return prev;
      }

      /**
       * 在真实 iframe 布局上测量并写入 padding，避免 html2canvas 负 x 裁切。
       * @param {Document} doc iframe 文档
       * @returns {{ el: Element, pads: object }}
       */
      function padHtmlToFitOverflow(doc) {
        return applyHtmlPadding(doc, computeOverflowPads(doc));
      }

      /**
       * 恢复 applyHtmlPadding 写过的 html padding。
       * @param {{ el: Element, paddingLeft: string, paddingRight: string, paddingTop: string, boxSizing: string, minWidth: string }} prev
       */
      function restoreHtmlPadding(prev) {
        if (!prev || !prev.el) return;
        prev.el.style.paddingLeft = prev.paddingLeft;
        prev.el.style.paddingRight = prev.paddingRight;
        prev.el.style.paddingTop = prev.paddingTop;
        prev.el.style.boxSizing = prev.boxSizing;
        prev.el.style.minWidth = prev.minWidth;
      }

      /**
       * 截图前把 iframe 文档和工具页滚回原点，避免 html2canvas 按当前 scroll 裁掉左边。
       * @param {Document} doc iframe 文档
       */
      function resetScrollForCapture(doc) {
        var win = doc.defaultView;
        if (win && win.scrollTo) win.scrollTo(0, 0);
        if (doc.documentElement) {
          doc.documentElement.scrollLeft = 0;
          doc.documentElement.scrollTop = 0;
        }
        if (doc.body) {
          doc.body.scrollLeft = 0;
          doc.body.scrollTop = 0;
        }
        if (window.scrollTo) window.scrollTo(0, 0);
      }

      /**
       * padding 之后的截图像素盒（从 html 左上角起）。
       * @param {Document} doc iframe 文档
       * @param {number} minW 下限宽度
       */
      function measureCaptureBox(doc, minW) {
        var htmlEl = doc.documentElement;
        var body = doc.body;
        var w = Math.max(
          minW || 0,
          htmlEl ? htmlEl.scrollWidth : 0,
          body ? body.scrollWidth : 0
        );
        var h = Math.max(
          htmlEl ? htmlEl.scrollHeight : 0,
          body ? body.scrollHeight : 0
        );
        return { width: Math.max(320, w), height: Math.max(200, h) + 32 };
      }

      /**
       * 使用 html2pdf.js 把 HTML 转成 PDF bytes。
       * 按文档 scrollHeight 截全页，避免只截到预览 iframe 的一屏高度。
       * @returns {Promise<Uint8Array>}
       */
      function convertHtmlToPdfBytes() {
        return new Promise(function (resolve, reject) {
          try {
            var html = textarea.value || '';
            if (!html.trim()) return reject(new Error('empty'));
            if (typeof DOMPurify === 'undefined') return reject(new Error('dompurify'));
            if (typeof html2pdf === 'undefined') return reject(new Error('html2pdf'));

            writePreviewDocument(html).then(function (doc) {
              markImagesEager(doc);
              var waitMs = readLoadWaitMs();
              return prepareDocumentImages(doc).then(function () {
                return waitForImages(doc, waitMs).then(function () {
                  if (waitMs) setStatus(msg.waiting);
                  return sleep(waitMs).then(function () {
                    return waitForImages(doc, waitMs).then(function () { return doc; });
                  });
                });
              });
            }).then(function (doc) {
              var unlocked = unlockOverflowForCapture(doc);
              resetScrollForCapture(doc);
              var padded = padHtmlToFitOverflow(doc);
              resetScrollForCapture(doc);
              /** 克隆窗口必须沿用 iframe 视口宽，否则 margin:auto 会在加宽窗口里重新居中，左边像被裁掉。 */
              var liveW = (doc.defaultView && doc.defaultView.innerWidth)
                || ((previewFrame && previewFrame.clientWidth) ? previewFrame.clientWidth : 800);
              var box = measureCaptureBox(doc, liveW);
              var target = doc.documentElement || doc.body;
              var opt = {
                margin: 0,
                filename: 'converted.pdf',
                image: { type: 'jpeg', quality: 0.95 },
                html2canvas: {
                  scale: 2,
                  useCORS: true,
                  allowTaint: true,
                  logging: false,
                  scrollX: 0,
                  scrollY: 0,
                  x: 0,
                  y: 0,
                  windowWidth: liveW,
                  windowHeight: box.height,
                  width: box.width,
                  height: box.height,
                  onclone: function (clonedDoc) {
                    unlockOverflowForCapture(clonedDoc);
                    applyHtmlPadding(clonedDoc, padded.pads);
                    resetScrollForCapture(clonedDoc);
                    stripUnsupportedImages(clonedDoc);
                  },
                },
                jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['css', 'legacy'] },
              };
              return html2pdf().from(target).set(opt).outputPdf('blob').then(function (blob) {
                restoreHtmlPadding(padded);
                restoreOverflowAfterCapture(unlocked);
                return blob;
              }, function (err) {
                restoreHtmlPadding(padded);
                restoreOverflowAfterCapture(unlocked);
                throw err;
              });
            }).then(function (blob) {
              return blob.arrayBuffer().then(function (ab) {
                resolve(new Uint8Array(ab));
              });
            }).catch(reject);
          } catch (e) {
            reject(e);
          }
        });
      }

      /**
       * 把当前文本框里的 HTML 转成 PDF。
       * 载入 URL 后按钮仍处于 disabled，不能依赖 btnConvert.click()（浏览器不会派发）。
       */
      function runConvert() {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        window.OftPdfWork.yieldUi()
          .then(function () { return convertHtmlToPdfBytes(); })
          .then(function (bytes) {
            resultBytes = bytes;
            work.setProgress(90);
            return work.showPreview(bytes);
          })
          .then(function () {
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(msg.done);
          })
          .catch(function (err) {
            var eStr = String(err && err.message ? err.message : err);
            if (/password/i.test(eStr)) setErr(msg.encrypted);
            else if (/empty/i.test(eStr)) setErr(msg.empty);
            else if (/html2pdf|dompurify/i.test(eStr)) setErr(msg.loadFail);
            else setErr(msg.convertFail);
            setStatus('');
            work.clearPreview();
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      btnConvert.addEventListener('click', runConvert);

      btnDownload.addEventListener('click', downloadResult);

      /**
       * 把 Worker 返回的抓取错误映射为可见文案。
       * @param {string} errText API error 字段
       * @returns {string}
       */
      function mapUrlErr(errText) {
        var s = String(errText || '');
        if (/Missing url/i.test(s)) return msg.urlEmpty;
        return msg.urlFail;
      }

      /**
       * 向边缘 API 拉取 URL 对应的 HTML，写入源码框并刷新预览；不自动转 PDF。
       * 浏览器无法直接读跨域页面，必须由 Worker 抓取一次。
       * @returns {Promise<void>}
       */
      function loadFromUrl() {
        var raw = (urlInput.value || '').trim();
        if (!raw) {
          setErr(msg.urlEmpty);
          return Promise.resolve();
        }
        setErr('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.fetching);
        var api = '/api/tools/convert-html-to-pdf?url=' + encodeURIComponent(raw);
        return fetch(api)
          .then(function (res) {
            return res.json().catch(function () { return {}; }).then(function (data) {
              return { ok: res.ok, data: data || {} };
            });
          })
          .then(function (pack) {
            if (!pack.ok || !pack.data.html) {
              throw new Error(pack.data.error || 'url');
            }
            textarea.value = pack.data.html;
            if (pack.data.finalUrl) urlInput.value = pack.data.finalUrl;
            return writePreviewDocument(pack.data.html);
          })
          .then(function () {
            setStatus('');
          })
          .catch(function (err) {
            var eStr = String(err && err.message ? err.message : err);
            setErr(/url|html|blocked|timeout|reach|Invalid|Missing/i.test(eStr) ? mapUrlErr(eStr) : msg.urlFail);
            setStatus('');
            work.clearPreview();
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /** 加载样例：写入示例 HTML。只在用户点击「加载样例」时转换，进页不自动跑。 */
      function loadSample() {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        urlInput.value = defaultPageUrl;
        var sampleHtml = '<h1 style=\"margin:0 0 12px 0;\">Hello HTML</h1><p style=\"margin:0;\">Sample paragraph from onlinefreetools.</p><hr/><p style=\"margin:0;\">This is a <strong>demo</strong> generated on page entry.</p>';
        textarea.value = sampleHtml;
        runConvert();
      }

      /**
       * 读取系统剪贴板：优先 text/html（从网页复制的源码），否则纯文本。
       * @returns {Promise<string>}
       */
      function readClipboardHtmlOrText() {
        var clip = navigator.clipboard;
        if (clip && typeof clip.read === 'function') {
          return clip.read().then(function (items) {
            var htmlJob = null;
            var textJob = null;
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              var types = item.types || [];
              if (!htmlJob && types.indexOf('text/html') !== -1) {
                htmlJob = item.getType('text/html').then(function (blob) { return blob.text(); });
              }
              if (!textJob && types.indexOf('text/plain') !== -1) {
                textJob = item.getType('text/plain').then(function (blob) { return blob.text(); });
              }
            }
            if (htmlJob) return htmlJob;
            if (textJob) return textJob;
            if (typeof clip.readText === 'function') return clip.readText();
            throw new Error('paste');
          });
        }
        if (clip && typeof clip.readText === 'function') return clip.readText();
        return Promise.reject(new Error('paste'));
      }

      /**
       * 把剪贴板内容写入 HTML 源码框并立即转换（与「载入网址」一致）。
       */
      function pasteHtmlFromClipboard() {
        setErr('');
        setStatus('');
        readClipboardHtmlOrText()
          .then(function (text) {
            var v = String(text || '').trim();
            if (!v) throw new Error('empty');
            textarea.value = v;
            runConvert();
          })
          .catch(function (err) {
            var eStr = String(err && err.message ? err.message : err);
            setErr(/empty/i.test(eStr) ? msg.empty : msg.pasteFail);
            if (textarea && textarea.focus) textarea.focus();
          });
      }

      btnLoadUrl.addEventListener('click', function () { loadFromUrl(); });
      btnPasteHtml.addEventListener('click', function () { pasteHtmlFromClipboard(); });
      urlInput.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter') {
          ev.preventDefault();
          loadFromUrl();
        }
      });
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        setErr('');
        setStatus('');
        urlInput.value = defaultPageUrl;
        textarea.value = '';
        clearPreviewFrame();
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        work.hideProgress();
      });

      /** 进页不自动抓 URL、不自动转换；避免 example.com 被拦时一打开就报 Could not load that URL。 */
    })();
  </script>`;

	const toolMeta = getToolBySlug('convert-html-to-pdf');
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
				name: t(opts.lang, toolMeta.i18nKey as any),
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

