/**
 * 合并 PDF 工具页：多份本地 PDF 按列表顺序合并为一个文件（纯客户端 pdf-lib）。
 * slug: merge-pdf
 * 规格：work-tasks/merge-pdf/02-tool-info.md
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

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染合并 PDF 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMergePdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/merge-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_merge_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_merge_pdf_description');

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
			currentSlug: 'merge-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .merge-pdf-list { list-style: none; padding: 0; margin: 0; }
    .merge-pdf-item {
      display: flex; align-items: center; gap: .5rem; padding: .35rem 0;
      border-bottom: 1px solid #eee;
    }
    .merge-pdf-name { flex: 1; font-size: .85rem; word-break: break-all; }
    .merge-pdf-meta { font-size: .75rem; color: #6c757d; white-space: nowrap; }
    .merge-pdf-actions { display: flex; gap: .25rem; flex-shrink: 0; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_merge_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone merge-pdf-drop mb-3" id="mergePdfDrop" for="mergePdfFiles">
      <input type="file" id="mergePdfFiles" accept="application/pdf,.pdf" multiple>
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_merge_pdf_choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_merge_pdf_drop_hint'))}</span>
    </label>

    <ul id="mergePdfList" class="merge-pdf-list mb-3" aria-live="polite"></ul>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="mergePdfBtnMerge" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_merge_pdf_merge'))}</button>
      <button type="button" id="mergePdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_merge_pdf_download'))}</button>
      <button type="button" id="mergePdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_merge_pdf_sample'))}</button>
      <button type="button" id="mergePdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_merge_pdf_clear'))}</button>
    </div>

    <p id="mergePdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="mergePdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="mergePdfStatus" class="small text-muted mb-2" role="status"></p>
    <p id="mergePdfStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_merge_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	/**
	 * 客户端脚本：加载 PDF、排序、copyPages 合并、样例自动跑通。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      var drop = document.getElementById('mergePdfDrop');
      var fileInput = document.getElementById('mergePdfFiles');
      var listEl = document.getElementById('mergePdfList');
      var btnMerge = document.getElementById('mergePdfBtnMerge');
      var btnDownload = document.getElementById('mergePdfBtnDownload');
      var btnSample = document.getElementById('mergePdfBtnSample');
      var btnClear = document.getElementById('mergePdfBtnClear');
      var warnEl = document.getElementById('mergePdfWarn');
      var errEl = document.getElementById('mergePdfError');
      var statusEl = document.getElementById('mergePdfStatus');
      var statsEl = document.getElementById('mergePdfStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_err_load'))},
        mergeFail: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_err_merge'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_warn_pdflib'))},
        merging: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_status_merging'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_status_done'))},
        moveUp: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_move_up'))},
        moveDown: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_move_down'))},
        remove: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_remove'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_stats_tpl'))}
      };

      /**
       * @typedef {{ id: string, file: File, bytes: Uint8Array, pageCount: number }} PdfItem
       */

      /** @type {PdfItem[]} 有序列表 */
      var items = [];
      /** @type {Uint8Array|null} 最近一次合并结果 */
      var resultBytes = null;
      var nextId = 1;

      /** 显示/隐藏警告。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示/隐藏错误。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行。 */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** HTML 转义。 */
      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /** 格式化字节数。 */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /** pdf-lib 是否可用。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /** 清空合并结果。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 根据大文件刷新警告。 */
      function refreshWarnings() {
        var large = items.some(function (it) { return it.file.size > SOFT_BYTES; });
        setWarn(large ? msg.large : '');
      }

      /** 渲染文件列表。 */
      function renderList() {
        listEl.innerHTML = items.map(function (it) {
          return '<li class="merge-pdf-item" data-id="' + escapeHtml(it.id) + '">' +
            '<span class="merge-pdf-name">' + escapeHtml(it.file.name) + '</span>' +
            '<span class="merge-pdf-meta">' + it.pageCount + 'p · ' + formatBytes(it.file.size) + '</span>' +
            '<span class="merge-pdf-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm merge-pdf-up" data-id="' + escapeHtml(it.id) + '">' + escapeHtml(msg.moveUp) + '</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm merge-pdf-down" data-id="' + escapeHtml(it.id) + '">' + escapeHtml(msg.moveDown) + '</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm merge-pdf-remove" data-id="' + escapeHtml(it.id) + '">' + escapeHtml(msg.remove) + '</button>' +
            '</span></li>';
        }).join('');
      }

      /**
       * 将错误映射为可读文案。
       * @param {unknown} err
       */
      function mapLoadError(err) {
        var s = String(err && (err.message || err) || '');
        if (/password|encrypt|encrypted/i.test(s)) return msg.encrypted;
        return msg.loadFail;
      }

      /**
       * 读取并解析单个 PDF 文件。
       * @param {File} file
       * @returns {Promise<PdfItem>}
       */
      function loadPdfFile(file) {
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
          return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function (doc) {
            return {
              id: String(nextId++),
              file: file,
              bytes: bytes,
              pageCount: doc.getPageCount()
            };
          });
        });
      }

      /**
       * 追加多个文件到列表。
       * @param {FileList|File[]} fileList
       */
      function addFiles(fileList) {
        setError('');
        var arr = Array.prototype.slice.call(fileList || []).filter(function (f) {
          return f && (f.type === 'application/pdf' || /\\.pdf$/i.test(f.name || ''));
        });
        if (!arr.length) return Promise.resolve();
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        var chain = Promise.resolve();
        arr.forEach(function (file) {
          chain = chain.then(function () {
            return loadPdfFile(file).then(function (item) {
              items.push(item);
            }).catch(function (err) {
              setError(mapLoadError(err));
            });
          });
        });
        return chain.then(function () {
          renderList();
          refreshWarnings();
          clearResult();
        });
      }

      /**
       * 按列表顺序合并 PDF。
       * @returns {Promise<Uint8Array>}
       */
      function buildMerged() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (items.length < 2) return Promise.reject(new Error('empty'));
        return PDFLib.PDFDocument.create().then(function (outDoc) {
          var chain = Promise.resolve();
          var totalPages = 0;
          items.forEach(function (item) {
            chain = chain.then(function () {
              return PDFLib.PDFDocument.load(item.bytes).then(function (src) {
                var idxs = src.getPageIndices();
                return outDoc.copyPages(src, idxs).then(function (pages) {
                  pages.forEach(function (p) { outDoc.addPage(p); });
                  totalPages += pages.length;
                });
              });
            });
          });
          return chain.then(function () {
            return outDoc.save().then(function (bytes) {
              return { bytes: bytes, pages: totalPages };
            });
          });
        });
      }

      /** 执行合并并启用下载。 */
      function merge() {
        setError('');
        clearResult();
        if (items.length < 2) {
          setError(msg.empty);
          return;
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return;
        }
        setStatus(msg.merging);
        btnMerge.disabled = true;
        buildMerged()
          .then(function (res) {
            resultBytes = res.bytes;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{n}', String(items.length))
              .replace('{pages}', String(res.pages))
              .replace('{bytes}', formatBytes(res.bytes.length));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            if (String(err && err.message) === 'empty') setError(msg.empty);
            else setError(mapLoadError(err) === msg.loadFail ? msg.mergeFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnMerge.disabled = false;
          });
      }

      /** 下载合并结果。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'merged.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成带标签文字的单页迷你 PDF。
       * @param {string} label
       * @param {string} fileName
       * @returns {Promise<File>}
       */
      function makeSamplePdf(label, fileName) {
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            page.drawText(label, { x: 48, y: 160, size: 28, font: font });
            page.drawText('Sample page for merge-pdf', { x: 48, y: 120, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], fileName, { type: 'application/pdf' });
        });
      }

      /** 加载两份样例并自动合并。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return Promise.all([
          makeSamplePdf('PDF A', 'sample-a.pdf'),
          makeSamplePdf('PDF B', 'sample-b.pdf')
        ]).then(function (files) {
          return addFiles(files);
        }).then(function () {
          if (items.length >= 2) merge();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        items = [];
        if (resetInput !== false) fileInput.value = '';
        listEl.innerHTML = '';
        clearResult();
        setError('');
        setWarn('');
        setStatus('');
      }

      listEl.addEventListener('click', function (e) {
        var tEl = e.target;
        if (!tEl || !tEl.closest) return;
        var up = tEl.closest('.merge-pdf-up');
        var down = tEl.closest('.merge-pdf-down');
        var rem = tEl.closest('.merge-pdf-remove');
        var id = (up || down || rem) && (up || down || rem).getAttribute('data-id');
        if (!id) return;
        var idx = items.findIndex(function (it) { return it.id === id; });
        if (idx < 0) return;
        if (up && idx > 0) {
          var tmp = items[idx - 1];
          items[idx - 1] = items[idx];
          items[idx] = tmp;
          renderList();
          clearResult();
        } else if (down && idx < items.length - 1) {
          var tmp2 = items[idx + 1];
          items[idx + 1] = items[idx];
          items[idx] = tmp2;
          renderList();
          clearResult();
        } else if (rem) {
          items.splice(idx, 1);
          renderList();
          refreshWarnings();
          clearResult();
        }
      });

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs.length) addFiles(fs);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
        fileInput.value = '';
      });

      btnMerge.addEventListener('click', merge);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('merge-pdf');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
