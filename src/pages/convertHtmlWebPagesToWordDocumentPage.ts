/**
 * 把粘贴的 HTML 或公开网页映射成可编辑 .docx（标题/列表/表格/链接），不是截图也不是 A4 PDF。
 * 默认 Tab 为粘贴 HTML；Page URL Tab 吸收 webpage to word。
 * slug: convert-html-web-pages-to-word-document
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
const PREFIX = 'tool_convert_html_web_pages_to_word_document';

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
 * 渲染「把 HTML 网页转成 Word 文档」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertHtmlWebPagesToWordDocumentPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-html-web-pages-to-word-document';
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
			currentSlug: 'convert-html-web-pages-to-word-document',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});
	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    textarea#chwHtml { min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .chw-tab.is-on { font-weight: 600; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(lead)}</p>
    </div>

    <div class="tool-panel">
      <div class="btn-group mb-2" role="group" aria-label="${escapeHtml(tx(opts.lang, 'tab_html'))}">
        <button type="button" id="chwTabHtml" class="btn btn-outline-primary btn-sm chw-tab is-on">${escapeHtml(tx(opts.lang, 'tab_html'))}</button>
        <button type="button" id="chwTabUrl" class="btn btn-outline-primary btn-sm chw-tab">${escapeHtml(tx(opts.lang, 'tab_url'))}</button>
      </div>

      <div id="chwHtmlWrap">
        <label class="form-label" for="chwHtml">${escapeHtml(tx(opts.lang, 'html_label'))}</label>
        <textarea id="chwHtml" class="form-control form-control-sm mb-1" placeholder="${escapeHtml(tx(opts.lang, 'html_placeholder'))}"></textarea>
        <div class="form-text mb-2">${escapeHtml(tx(opts.lang, 'html_hint'))}</div>
      </div>
      <div id="chwUrlWrap" hidden>
        <label class="form-label" for="chwUrl">${escapeHtml(tx(opts.lang, 'url_label'))}</label>
        <input type="url" id="chwUrl" class="form-control form-control-sm mb-1" placeholder="${escapeHtml(tx(opts.lang, 'url_placeholder'))}" inputmode="url">
        <div class="form-text mb-2">${escapeHtml(tx(opts.lang, 'url_hint'))}</div>
      </div>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="chwBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert'))}</button>
        <button type="button" id="chwBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="chwBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="chwBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <details class="mb-2">
        <summary>${escapeHtml(tx(opts.lang, 'advanced_label'))}</summary>
        <div class="form-check mt-2">
          <input class="form-check-input" type="checkbox" id="chwImgs" checked>
          <label class="form-check-label" for="chwImgs">${escapeHtml(tx(opts.lang, 'imgs_label'))}</label>
        </div>
        <div class="form-text">${escapeHtml(tx(opts.lang, 'imgs_hint'))}</div>
        <div class="form-text mb-0">${escapeHtml(tx(opts.lang, 'opts_hint'))}</div>
      </details>
      <p id="chwError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="chwStatus" class="small text-muted mb-0" role="status" aria-live="polite" aria-atomic="true"></p>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 5,
	});
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'docx — JavaScript/TypeScript library', href: 'https://docx.js.org/' },
			{ label: 'HTML Living Standard — DOM', href: 'https://html.spec.whatwg.org/multipage/dom.html' },
		],
	});

	const extraBodyHtml = `
  <script src="/vendor/dompurify/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        convert: ${JSON.stringify(tx(opts.lang, 'err_convert'))},
        load: ${JSON.stringify(tx(opts.lang, 'err_load'))},
        url: ${JSON.stringify(tx(opts.lang, 'err_url'))},
        urlEmpty: ${JSON.stringify(tx(opts.lang, 'err_url_empty'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        fetching: ${JSON.stringify(tx(opts.lang, 'status_fetching'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
      };
      var SAMPLE_HTML = '<h1>Release notes</h1><p>This HTML becomes an <strong>editable</strong> Word document, not a screenshot and not an A4 PDF.</p><ul><li>Headings map to Word styles</li><li>This list stays a list</li></ul><table><tr><th>Field</th><th>Value</th></tr><tr><td>Format</td><td>DOCX</td></tr></table><p>See <a href="https://example.com/help">the help article</a>.</p>';
      var tab = 'html';
      var resultBlob = null;
      var docxLibPromise = null;
      var htmlEl = document.getElementById('chwHtml');
      var urlEl = document.getElementById('chwUrl');
      var htmlWrap = document.getElementById('chwHtmlWrap');
      var urlWrap = document.getElementById('chwUrlWrap');
      var tabHtml = document.getElementById('chwTabHtml');
      var tabUrl = document.getElementById('chwTabUrl');
      var btnConvert = document.getElementById('chwBtnConvert');
      var btnDownload = document.getElementById('chwBtnDownload');
      var btnSample = document.getElementById('chwBtnSample');
      var btnClear = document.getElementById('chwBtnClear');
      var imgsEl = document.getElementById('chwImgs');
      var errEl = document.getElementById('chwError');
      var statusEl = document.getElementById('chwStatus');

      /**
       * 显示错误。
       * @param {string} text 人话错误
       */
      function setErr(text) {
        if (!errEl) return;
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.style.display = '';
        errEl.textContent = text;
      }

      /**
       * 更新状态行。
       * @param {string} text 状态
       */
      function setStatus(text) {
        if (statusEl) statusEl.textContent = text || '';
      }

      /**
       * 忙碌时禁用输入与动作（Download 仅在有产物时可用）。
       * @param {boolean} busy 是否转换中
       */
      function setBusy(busy) {
        [htmlEl, urlEl, btnConvert, btnSample, btnClear, imgsEl, tabHtml, tabUrl].forEach(function (el) {
          if (el) el.disabled = !!busy;
        });
        if (btnDownload) btnDownload.disabled = busy || !resultBlob;
      }

      /**
       * 切换 Paste HTML / Page URL 主输入面。
       * @param {'html'|'url'} next 目标 Tab
       */
      function setTab(next) {
        tab = next === 'url' ? 'url' : 'html';
        if (htmlWrap) htmlWrap.hidden = tab !== 'html';
        if (urlWrap) urlWrap.hidden = tab !== 'url';
        if (tabHtml) tabHtml.classList.toggle('is-on', tab === 'html');
        if (tabUrl) tabUrl.classList.toggle('is-on', tab === 'url');
      }

      /**
       * 懒加载同域 docx UMD。
       * @returns {Promise<object>}
       */
      function loadDocxLib() {
        if (docxLibPromise) return docxLibPromise;
        docxLibPromise = new Promise(function (resolve, reject) {
          if (window.docx && window.docx.Document) { resolve(window.docx); return; }
          var script = document.createElement('script');
          script.src = '/vendor/docx/index.umd.js';
          script.async = true;
          script.onload = function () {
            if (window.docx && window.docx.Document) resolve(window.docx);
            else import('/vendor/docx/index.umd.js').then(resolve).catch(function () { reject(new Error('lib')); });
          };
          script.onerror = function () {
            import('/vendor/docx/index.umd.js').then(resolve).catch(function () { reject(new Error('lib')); });
          };
          document.head.appendChild(script);
        });
        return docxLibPromise;
      }

      /**
       * 去掉脚本并保留可用 HTML。
       * @param {string} html 源 HTML
       * @returns {string}
       */
      function sanitizeHtml(html) {
        if (typeof DOMPurify === 'undefined') return String(html || '');
        return DOMPurify.sanitize(String(html || ''), {
          USE_PROFILES: { html: true },
          ADD_TAGS: ['table', 'thead', 'tbody', 'tr', 'td', 'th'],
          FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form'],
        });
      }

      /**
       * 把内联节点收集成 TextRun / Hyperlink。
       * @param {Node} node DOM 节点
       * @param {object} docx docx 命名空间
       * @param {{bold?:boolean,italics?:boolean}} marks 当前样式
       * @returns {Array}
       */
      function inlineRuns(node, docx, marks) {
        marks = marks || {};
        var TextRun = docx.TextRun;
        var ExternalHyperlink = docx.ExternalHyperlink;
        var out = [];
        if (!node) return out;
        if (node.nodeType === 3) {
          var t = String(node.textContent || '').replace(/\\s+/g, ' ');
          if (t) out.push(new TextRun({ text: t, bold: !!marks.bold, italics: !!marks.italics }));
          return out;
        }
        if (node.nodeType !== 1) return out;
        var tag = String(node.tagName || '').toLowerCase();
        if (tag === 'br') { out.push(new TextRun({ text: '', break: 1 })); return out; }
        if (tag === 'strong' || tag === 'b') {
          for (var i = 0; i < node.childNodes.length; i++) out = out.concat(inlineRuns(node.childNodes[i], docx, { bold: true, italics: marks.italics }));
          return out;
        }
        if (tag === 'em' || tag === 'i') {
          for (var j = 0; j < node.childNodes.length; j++) out = out.concat(inlineRuns(node.childNodes[j], docx, { bold: marks.bold, italics: true }));
          return out;
        }
        if (tag === 'a') {
          var href = node.getAttribute('href') || '';
          var kids = [];
          for (var k = 0; k < node.childNodes.length; k++) kids = kids.concat(inlineRuns(node.childNodes[k], docx, marks));
          if (!kids.length) kids = [new TextRun({ text: href || 'link' })];
          if (/^https?:\\/\\//i.test(href) && ExternalHyperlink) {
            out.push(new ExternalHyperlink({ children: kids, link: href }));
          } else out = out.concat(kids);
          return out;
        }
        for (var n = 0; n < node.childNodes.length; n++) out = out.concat(inlineRuns(node.childNodes[n], docx, marks));
        return out;
      }

      /**
       * 尝试把 img 嵌进 Word；失败则跳过。
       * @param {HTMLImageElement} img 图片节点
       * @param {object} docx docx 命名空间
       * @returns {Promise<object|null>}
       */
      function imageParagraph(img, docx) {
        var src = img && (img.getAttribute('src') || '');
        if (!src || !docx.ImageRun) return Promise.resolve(null);
        if (src.indexOf('data:') !== 0 && src.indexOf('http') !== 0) return Promise.resolve(null);
        return fetch(src, { mode: 'cors' }).then(function (res) {
          if (!res.ok) throw new Error('img');
          return res.arrayBuffer();
        }).then(function (ab) {
          var bytes = new Uint8Array(ab);
          if (!bytes.length) return null;
          return new docx.Paragraph({
            children: [new docx.ImageRun({ data: bytes, transformation: { width: 480, height: 240 } })],
          });
        }).catch(function () { return null; });
      }

      /**
       * 把表格节点映射为 Word Table。
       * @param {HTMLTableElement} tableEl 表格
       * @param {object} docx docx 命名空间
       * @returns {object|null}
       */
      function mapTable(tableEl, docx) {
        var rows = tableEl.querySelectorAll('tr');
        if (!rows.length || !docx.Table) return null;
        var tRows = [];
        for (var r = 0; r < rows.length; r++) {
          var cells = rows[r].querySelectorAll('th,td');
          var tCells = [];
          for (var c = 0; c < cells.length; c++) {
            var runs = inlineRuns(cells[c], docx, {});
            if (!runs.length) runs = [new docx.TextRun({ text: ' ' })];
            tCells.push(new docx.TableCell({ children: [new docx.Paragraph({ children: runs })] }));
          }
          if (tCells.length) tRows.push(new docx.TableRow({ children: tCells }));
        }
        if (!tRows.length) return null;
        return new docx.Table({ rows: tRows });
      }

      /**
       * 把消毒后的 HTML 映射成 docx 块（异步：可选嵌入图片）。
       * @param {string} html HTML
       * @param {object} docx docx 命名空间
       * @param {boolean} includeImgs 是否尝试嵌图
       * @returns {Promise<Array>}
       */
      function htmlToBlocks(html, docx, includeImgs) {
        var parser = new DOMParser();
        var doc = parser.parseFromString('<div id="chwRoot">' + html + '</div>', 'text/html');
        var root = doc.getElementById('chwRoot') || doc.body;
        var HeadingLevel = docx.HeadingLevel || {};
        var blocks = [];
        var chain = Promise.resolve();

        /**
         * 排队处理一个元素。
         * @param {Element} el 元素
         */
        function queueEl(el) {
          chain = chain.then(function () {
            var tag = String(el.tagName || '').toLowerCase();
            if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4' || tag === 'h5' || tag === 'h6') {
              var level = { h1: HeadingLevel.HEADING_1, h2: HeadingLevel.HEADING_2, h3: HeadingLevel.HEADING_3, h4: HeadingLevel.HEADING_4, h5: HeadingLevel.HEADING_5, h6: HeadingLevel.HEADING_6 }[tag];
              var runs = inlineRuns(el, docx, {});
              if (!runs.length) runs = [new docx.TextRun({ text: String(el.textContent || '').trim() || ' ' })];
              blocks.push(new docx.Paragraph({ heading: level, children: runs }));
              return;
            }
            if (tag === 'p') {
              var pRuns = inlineRuns(el, docx, {});
              if (!pRuns.length) pRuns = [new docx.TextRun({ text: ' ' })];
              blocks.push(new docx.Paragraph({ children: pRuns }));
              return;
            }
            if (tag === 'ul' || tag === 'ol') {
              var items = el.children;
              for (var i = 0; i < items.length; i++) {
                if (String(items[i].tagName || '').toLowerCase() !== 'li') continue;
                var prefix = tag === 'ol' ? String(i + 1) + '. ' : '• ';
                var liRuns = [new docx.TextRun({ text: prefix })].concat(inlineRuns(items[i], docx, {}));
                blocks.push(new docx.Paragraph({ children: liRuns }));
              }
              return;
            }
            if (tag === 'table') {
              var tbl = mapTable(el, docx);
              if (tbl) blocks.push(tbl);
              return;
            }
            if (tag === 'img' && includeImgs) {
              return imageParagraph(el, docx).then(function (p) { if (p) blocks.push(p); });
            }
            if (tag === 'div' || tag === 'section' || tag === 'article' || tag === 'main' || tag === 'blockquote') {
              var kids = Array.prototype.slice.call(el.children);
              var inner = Promise.resolve();
              kids.forEach(function (child) { inner = inner.then(function () { return queueEl(child); }); });
              if (!kids.length) {
                var dRuns = inlineRuns(el, docx, {});
                if (dRuns.length) blocks.push(new docx.Paragraph({ children: dRuns }));
              }
              return inner;
            }
          });
        }

        var top = Array.prototype.slice.call(root.children);
        if (!top.length) {
          var only = String(root.textContent || '').trim();
          if (only) blocks.push(new docx.Paragraph({ children: [new docx.TextRun({ text: only })] }));
          return Promise.resolve(blocks);
        }
        top.forEach(function (child) { queueEl(child); });
        return chain.then(function () { return blocks; });
      }

      /**
       * 代抓公开页 HTML。
       * @param {string} href 绝对 URL
       * @returns {Promise<string>}
       */
      function fetchPageHtml(href) {
        var api = '/api/tools/convert-html-to-pdf?url=' + encodeURIComponent(href);
        return fetch(api).then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (data) {
            if (!res.ok || !data || !data.html) throw new Error('url');
            return String(data.html);
          });
        });
      }

      /**
       * 规范化 http(s) URL。
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
        } catch (e) { return ''; }
      }

      /**
       * 把当前输入转成 .docx Blob。
       * @returns {Promise<void>}
       */
      function convert() {
        setErr('');
        var includeImgs = !!(imgsEl && imgsEl.checked);
        var htmlPromise;
        if (tab === 'url') {
          var href = normalizeHttpUrl(urlEl ? urlEl.value : '');
          if (!href) { setErr(msg.urlEmpty); return Promise.resolve(); }
          setStatus(msg.fetching);
          htmlPromise = fetchPageHtml(href).catch(function () { throw new Error('url'); });
        } else {
          var raw = htmlEl ? String(htmlEl.value || '').trim() : '';
          if (!raw) { setErr(msg.empty); return Promise.resolve(); }
          htmlPromise = Promise.resolve(raw);
        }
        setBusy(true);
        setStatus(msg.working);
        return htmlPromise
          .then(function (html) { return loadDocxLib().then(function (docx) { return { html: html, docx: docx }; }); })
          .then(function (pair) {
            var clean = sanitizeHtml(pair.html);
            return htmlToBlocks(clean, pair.docx, includeImgs).then(function (blocks) {
              if (!blocks.length) throw new Error('empty');
              var doc = new pair.docx.Document({
                sections: [{ children: blocks }],
              });
              return pair.docx.Packer.toBlob(doc);
            });
          })
          .then(function (blob) {
            resultBlob = blob;
            setStatus(msg.done);
            if (btnDownload) btnDownload.disabled = false;
          })
          .catch(function (err) {
            resultBlob = null;
            if (btnDownload) btnDownload.disabled = true;
            var code = err && err.message ? err.message : '';
            if (code === 'url') setErr(msg.url);
            else if (code === 'lib') setErr(msg.load);
            else setErr(msg.convert);
          })
          .finally(function () { setBusy(false); });
      }

      /**
       * 下载最近一次成功的 .docx。
       */
      function download() {
        if (!resultBlob) return;
        var a = document.createElement('a');
        var url = URL.createObjectURL(resultBlob);
        a.href = url;
        a.download = 'page.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }

      /**
       * 清空输入与产物。
       */
      function clearAll() {
        if (htmlEl) htmlEl.value = '';
        if (urlEl) urlEl.value = '';
        resultBlob = null;
        if (btnDownload) btnDownload.disabled = true;
        setErr('');
        setStatus('');
        setTab('html');
      }

      /**
       * 载入样例：填入带标题/列表/表格的 HTML 并转换。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setTab('html');
        if (htmlEl) htmlEl.value = SAMPLE_HTML;
        return convert();
      }

      if (tabHtml) tabHtml.addEventListener('click', function () { setTab('html'); });
      if (tabUrl) tabUrl.addEventListener('click', function () { setTab('url'); });
      if (btnConvert) btnConvert.addEventListener('click', convert);
      if (btnDownload) btnDownload.addEventListener('click', download);
      if (btnSample) btnSample.addEventListener('click', loadSample);
      if (btnClear) btnClear.addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('convert-html-web-pages-to-word-document');
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
