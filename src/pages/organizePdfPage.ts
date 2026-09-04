/**
 * 整理 PDF 工具页：单份 PDF 内删页/重排/勾选导出（纯客户端 pdf-lib）。
 * slug: organize-pdf
 * 规格：work-tasks/organize-pdf/02-tool-info.md
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
import { hasToolOgImage, resolveToolOgImageUrl } from './site/ogImage';

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染整理 PDF 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderOrganizePdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/organize-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_organize_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_organize_pdf_description');
	/** per-slug OG 图（本地 public/og/tools/{slug}.*；公开 URL 走 assets 自定义域） */
	const ogImageUrl = resolveToolOgImageUrl('organize-pdf');

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
			currentSlug: 'organize-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .organize-pdf-list { list-style: none; padding: 0; margin: 0; }
    .organize-pdf-item {
      display: flex; align-items: center; gap: .5rem; padding: .35rem 0;
      border-bottom: 1px solid #eee;
    }
    .organize-pdf-name { flex: 1; font-size: .85rem; }
    .organize-pdf-actions { display: flex; gap: .25rem; flex-shrink: 0; flex-wrap: wrap; }
    .organize-pdf-include { display: flex; align-items: center; gap: .25rem; font-size: .8rem; white-space: nowrap; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_organize_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone organize-pdf-drop mb-3" id="organizePdfDrop" for="organizePdfFile">
      <input type="file" id="organizePdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_organize_pdf_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_organize_pdf_drop_hint'))}</span>
    </label>

    <p id="organizePdfMeta" class="small text-muted mb-2" style="display:none;"></p>
    <ul id="organizePdfList" class="organize-pdf-list mb-3" aria-live="polite"></ul>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="organizePdfBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_organize_pdf_apply'))}</button>
      <button type="button" id="organizePdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_organize_pdf_download'))}</button>
      <button type="button" id="organizePdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_organize_pdf_sample'))}</button>
      <button type="button" id="organizePdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_organize_pdf_clear'))}</button>
    </div>

    <p id="organizePdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="organizePdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="organizePdfStatus" class="small text-muted mb-2" role="status"></p>
    <p id="organizePdfStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>
    ${hasToolOgImage('organize-pdf')
			? `
    <figure class="tool-preview-figure mb-4">
      <img src="${escapeHtml(ogImageUrl)}" width="1280" height="720"
        alt="${escapeHtml(t(opts.lang, 'tool_organize_pdf_title'))}"
        class="img-fluid rounded border w-100" loading="lazy" decoding="async" />
    </figure>`
			: ''}`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_organize_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	/**
	 * 客户端脚本：加载 PDF、页列表重排/删选、copyPages 导出、样例自动跑通。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      var drop = document.getElementById('organizePdfDrop');
      var fileInput = document.getElementById('organizePdfFile');
      var listEl = document.getElementById('organizePdfList');
      var metaEl = document.getElementById('organizePdfMeta');
      var btnApply = document.getElementById('organizePdfBtnApply');
      var btnDownload = document.getElementById('organizePdfBtnDownload');
      var btnSample = document.getElementById('organizePdfBtnSample');
      var btnClear = document.getElementById('organizePdfBtnClear');
      var warnEl = document.getElementById('organizePdfWarn');
      var errEl = document.getElementById('organizePdfError');
      var statusEl = document.getElementById('organizePdfStatus');
      var statsEl = document.getElementById('organizePdfStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_err_load'))},
        organizeFail: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_err_organize'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_warn_pdflib'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_status_done'))},
        moveUp: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_move_up'))},
        moveDown: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_move_down'))},
        remove: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_remove'))},
        include: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_include'))},
        pageLabel: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_page_label'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_organize_pdf_stats_tpl'))}
      };

      /**
       * @typedef {{ id: string, srcIndex: number, include: boolean }} PageRow
       */

      /** @type {Uint8Array|null} 源 PDF 字节 */
      var sourceBytes = null;
      /** @type {string} 源文件名 */
      var sourceName = '';
      /** @type {number} 源页数 */
      var sourcePageCount = 0;
      /** @type {PageRow[]} 当前页序（含 include） */
      var rows = [];
      /** @type {Uint8Array|null} 最近一次整理结果 */
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

      /** 清空整理结果。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 刷新元信息与软警告。 */
      function refreshMeta() {
        if (!sourceBytes) {
          metaEl.style.display = 'none';
          metaEl.textContent = '';
          setWarn('');
          return;
        }
        metaEl.textContent = sourceName + ' · ' + msg.pagesLabel + ': ' + sourcePageCount + ' · ' + formatBytes(sourceBytes.length);
        metaEl.style.display = '';
        setWarn(sourceBytes.length > SOFT_BYTES ? msg.large : '');
      }

      /** 渲染页列表。 */
      function renderList() {
        listEl.innerHTML = rows.map(function (row) {
          var label = msg.pageLabel.replace('{n}', String(row.srcIndex + 1));
          return '<li class="organize-pdf-item" data-id="' + escapeHtml(row.id) + '">' +
            '<label class="organize-pdf-include"><input type="checkbox" class="organize-pdf-check" data-id="' + escapeHtml(row.id) + '"' + (row.include ? ' checked' : '') + '> ' + escapeHtml(msg.include) + '</label>' +
            '<span class="organize-pdf-name">' + escapeHtml(label) + '</span>' +
            '<span class="organize-pdf-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm organize-pdf-up" data-id="' + escapeHtml(row.id) + '">' + escapeHtml(msg.moveUp) + '</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm organize-pdf-down" data-id="' + escapeHtml(row.id) + '">' + escapeHtml(msg.moveDown) + '</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm organize-pdf-remove" data-id="' + escapeHtml(row.id) + '">' + escapeHtml(msg.remove) + '</button>' +
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
       * 用源字节重建页列表（默认全部 include）。
       * @param {Uint8Array} bytes
       * @param {string} name
       */
      function setSource(bytes, name) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function (doc) {
          sourceBytes = bytes;
          sourceName = name || 'document.pdf';
          sourcePageCount = doc.getPageCount();
          rows = [];
          for (var i = 0; i < sourcePageCount; i++) {
            rows.push({ id: String(nextId++), srcIndex: i, include: true });
          }
          renderList();
          refreshMeta();
          clearResult();
        });
      }

      /**
       * 加载用户选择的 PDF。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        if (!file) return Promise.resolve();
        if (!(file.type === 'application/pdf' || /\\.pdf$/i.test(file.name || ''))) {
          setError(msg.loadFail);
          return Promise.resolve();
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return file.arrayBuffer().then(function (buf) {
          return setSource(new Uint8Array(buf), file.name);
        }).catch(function (err) {
          setError(mapLoadError(err));
        });
      }

      /**
       * 按当前列表生成整理后的 PDF。
       * @returns {Promise<{ bytes: Uint8Array, to: number }>}
       */
      function buildOrganized() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (!sourceBytes) return Promise.reject(new Error('empty'));
        var included = rows.filter(function (r) { return r.include; });
        if (!included.length) return Promise.reject(new Error('empty'));
        return PDFLib.PDFDocument.load(sourceBytes).then(function (src) {
          return PDFLib.PDFDocument.create().then(function (outDoc) {
            var idxs = included.map(function (r) { return r.srcIndex; });
            return outDoc.copyPages(src, idxs).then(function (pages) {
              pages.forEach(function (p) { outDoc.addPage(p); });
              return outDoc.save().then(function (bytes) {
                return { bytes: bytes, to: pages.length };
              });
            });
          });
        });
      }

      /** 执行整理并启用下载。 */
      function apply() {
        setError('');
        clearResult();
        if (!sourceBytes || !rows.some(function (r) { return r.include; })) {
          setError(msg.empty);
          return;
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return;
        }
        setStatus(msg.working);
        btnApply.disabled = true;
        buildOrganized()
          .then(function (res) {
            resultBytes = res.bytes;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{from}', String(sourcePageCount))
              .replace('{to}', String(res.to))
              .replace('{bytes}', formatBytes(res.bytes.length));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            if (String(err && err.message) === 'empty') setError(msg.empty);
            else setError(mapLoadError(err) === msg.loadFail ? msg.organizeFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnApply.disabled = false;
          });
      }

      /** 下载整理结果。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'organized.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成多页迷你 PDF（页标 1..n）。
       * @param {number} n
       * @returns {Promise<File>}
       */
      function makeSamplePdf(n) {
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            var chain = Promise.resolve();
            for (var i = 1; i <= n; i++) {
              (function (label) {
                chain = chain.then(function () {
                  var page = doc.addPage([420, 300]);
                  page.drawText('Page ' + label, { x: 48, y: 160, size: 28, font: font });
                  page.drawText('Sample for organize-pdf', { x: 48, y: 120, size: 12, font: font });
                });
              })(i);
            }
            return chain.then(function () { return doc.save(); });
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-organize.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载三页样例，去掉第 2 页并自动 Apply。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return makeSamplePdf(3).then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (rows.length >= 3) {
            rows[1].include = false;
            renderList();
          }
          apply();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        sourceBytes = null;
        sourceName = '';
        sourcePageCount = 0;
        rows = [];
        if (resetInput !== false) fileInput.value = '';
        listEl.innerHTML = '';
        clearResult();
        refreshMeta();
        setError('');
        setStatus('');
      }

      listEl.addEventListener('click', function (e) {
        var tEl = e.target;
        if (!tEl || !tEl.closest) return;
        var up = tEl.closest('.organize-pdf-up');
        var down = tEl.closest('.organize-pdf-down');
        var rem = tEl.closest('.organize-pdf-remove');
        var id = (up || down || rem) && (up || down || rem).getAttribute('data-id');
        if (!id) return;
        var idx = rows.findIndex(function (it) { return it.id === id; });
        if (idx < 0) return;
        if (up && idx > 0) {
          var tmp = rows[idx - 1];
          rows[idx - 1] = rows[idx];
          rows[idx] = tmp;
          renderList();
          clearResult();
        } else if (down && idx < rows.length - 1) {
          var tmp2 = rows[idx + 1];
          rows[idx + 1] = rows[idx];
          rows[idx] = tmp2;
          renderList();
          clearResult();
        } else if (rem) {
          rows.splice(idx, 1);
          renderList();
          clearResult();
        }
      });

      listEl.addEventListener('change', function (e) {
        var tEl = e.target;
        if (!tEl || !tEl.classList || !tEl.classList.contains('organize-pdf-check')) return;
        var id = tEl.getAttribute('data-id');
        var row = rows.find(function (r) { return r.id === id; });
        if (!row) return;
        row.include = !!tEl.checked;
        clearResult();
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
        if (fs && fs[0]) loadFile(fs[0]);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) loadFile(fileInput.files[0]);
        fileInput.value = '';
      });

      btnApply.addEventListener('click', apply);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('organize-pdf');
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
				imageUrl: hasToolOgImage('organize-pdf') ? ogImageUrl : undefined,
			})
		: '';

	return renderLayout({
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		ogImageUrl,
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
