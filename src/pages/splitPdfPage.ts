/**
 * 拆分 PDF 工具页：按每页或页码范围拆成多文件；多输出时用 fflate 打 ZIP（纯客户端）。
 * slug: split-pdf
 * 规格：work-tasks/split-pdf/02-tool-info.md
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
 * 渲染拆分 PDF 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSplitPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/split-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_split_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_split_pdf_description');

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
			currentSlug: 'split-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .split-pdf-meta { font-size: .85rem; color: #6c757d; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_split_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone split-pdf-drop mb-3" id="splitPdfDrop" for="splitPdfFile">
      <input type="file" id="splitPdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_split_pdf_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_split_pdf_drop_hint'))}</span>
    </label>

    <p id="splitPdfMeta" class="split-pdf-meta mb-2" style="display:none;"></p>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-6">
        <label class="form-label mb-0" for="splitPdfMode">${escapeHtml(t(opts.lang, 'tool_split_pdf_mode_label'))}</label>
        <select id="splitPdfMode" class="form-select form-select-sm">
          <option value="every">${escapeHtml(t(opts.lang, 'tool_split_pdf_mode_every'))}</option>
          <option value="ranges">${escapeHtml(t(opts.lang, 'tool_split_pdf_mode_ranges'))}</option>
        </select>
      </div>
      <div class="col-12 col-md-6" id="splitPdfRangesWrap" style="display:none;">
        <label class="form-label mb-0" for="splitPdfRanges">${escapeHtml(t(opts.lang, 'tool_split_pdf_ranges_label'))}</label>
        <input type="text" id="splitPdfRanges" class="form-control form-control-sm" placeholder="${escapeHtml(t(opts.lang, 'tool_split_pdf_ranges_hint'))}" autocomplete="off">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="splitPdfBtnSplit" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_split_pdf_split'))}</button>
      <button type="button" id="splitPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_split_pdf_download'))}</button>
      <button type="button" id="splitPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_split_pdf_sample'))}</button>
      <button type="button" id="splitPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_split_pdf_clear'))}</button>
    </div>

    <p id="splitPdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="splitPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="splitPdfStatus" class="small text-muted mb-2" role="status"></p>
    <p id="splitPdfStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_split_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
			{ label: 'fflate', href: 'https://github.com/101arrowz/fflate' },
		],
	});

	/**
	 * 客户端脚本：加载 PDF、解析范围、copyPages 拆分、多文件 ZIP。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      var drop = document.getElementById('splitPdfDrop');
      var fileInput = document.getElementById('splitPdfFile');
      var metaEl = document.getElementById('splitPdfMeta');
      var modeEl = document.getElementById('splitPdfMode');
      var rangesWrap = document.getElementById('splitPdfRangesWrap');
      var rangesEl = document.getElementById('splitPdfRanges');
      var btnSplit = document.getElementById('splitPdfBtnSplit');
      var btnDownload = document.getElementById('splitPdfBtnDownload');
      var btnSample = document.getElementById('splitPdfBtnSample');
      var btnClear = document.getElementById('splitPdfBtnClear');
      var warnEl = document.getElementById('splitPdfWarn');
      var errEl = document.getElementById('splitPdfError');
      var statusEl = document.getElementById('splitPdfStatus');
      var statsEl = document.getElementById('splitPdfStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_err_load'))},
        rangeFail: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_err_range'))},
        splitFail: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_err_split'))},
        fflateFail: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_err_fflate'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_warn_pdflib'))},
        splitting: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_status_splitting'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_split_pdf_stats_tpl'))}
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} */
      var source = null;
      /** @type {{ blob: Blob, filename: string }|null} */
      var result = null;

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

      /** fflate 是否可用。 */
      function hasFflate() {
        return typeof fflate !== 'undefined' && fflate && typeof fflate.zipSync === 'function';
      }

      /** 清空拆分结果。 */
      function clearResult() {
        result = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 切换范围输入可见性。 */
      function syncModeUi() {
        rangesWrap.style.display = modeEl.value === 'ranges' ? '' : 'none';
        clearResult();
      }

      /** 刷新元信息与大文件警告。 */
      function refreshMeta() {
        if (!source) {
          metaEl.style.display = 'none';
          metaEl.textContent = '';
          setWarn('');
          return;
        }
        metaEl.textContent = source.name + ' · ' + msg.pagesLabel + ': ' + source.pageCount + ' · ' + formatBytes(source.bytes.length);
        metaEl.style.display = '';
        setWarn(source.bytes.length > SOFT_BYTES ? msg.large : '');
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
       * 解析 1-based 范围字符串为页索引段（0-based 数组）。
       * @param {string} text
       * @param {number} pageCount
       * @returns {{ segments: number[][], names: string[] }|null}
       */
      function parseRanges(text, pageCount) {
        var raw = String(text || '').trim();
        if (!raw) return null;
        var parts = raw.split(',');
        var segments = [];
        var names = [];
        for (var i = 0; i < parts.length; i++) {
          var part = parts[i].trim();
          if (!part) continue;
          var m = part.match(/^(\\d+)(?:\\s*-\\s*(\\d+))?$/);
          if (!m) return null;
          var a = parseInt(m[1], 10);
          var b = m[2] ? parseInt(m[2], 10) : a;
          if (!(a >= 1 && b >= a && b <= pageCount)) return null;
          var idxs = [];
          for (var p = a; p <= b; p++) idxs.push(p - 1);
          segments.push(idxs);
          names.push(a === b ? ('page-' + a + '.pdf') : ('pages-' + a + '-' + b + '.pdf'));
        }
        if (!segments.length) return null;
        return { segments: segments, names: names };
      }

      /**
       * 按「每页一文件」生成段。
       * @param {number} pageCount
       */
      function everyPageSegments(pageCount) {
        var segments = [];
        var names = [];
        for (var i = 0; i < pageCount; i++) {
          segments.push([i]);
          names.push('page-' + (i + 1) + '.pdf');
        }
        return { segments: segments, names: names };
      }

      /**
       * 加载单个 PDF 文件。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        clearResult();
        if (!file) return Promise.resolve();
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function (doc) {
            source = { name: file.name || 'document.pdf', bytes: bytes, pageCount: doc.getPageCount() };
            refreshMeta();
          });
        }).catch(function (err) {
          source = null;
          refreshMeta();
          setError(mapLoadError(err));
        });
      }

      /**
       * 为每个段生成独立 PDF 字节。
       * @param {{ segments: number[][], names: string[] }} plan
       * @returns {Promise<{ name: string, bytes: Uint8Array }[]>}
       */
      function buildParts(plan) {
        return PDFLib.PDFDocument.load(source.bytes).then(function (srcDoc) {
          var chain = Promise.resolve([]);
          plan.segments.forEach(function (idxs, i) {
            chain = chain.then(function (acc) {
              return PDFLib.PDFDocument.create().then(function (outDoc) {
                return outDoc.copyPages(srcDoc, idxs).then(function (pages) {
                  pages.forEach(function (p) { outDoc.addPage(p); });
                  return outDoc.save().then(function (bytes) {
                    acc.push({ name: plan.names[i], bytes: bytes });
                    return acc;
                  });
                });
              });
            });
          });
          return chain;
        });
      }

      /** 执行拆分并启用下载。 */
      function split() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return;
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return;
        }
        var plan = modeEl.value === 'ranges'
          ? parseRanges(rangesEl.value, source.pageCount)
          : everyPageSegments(source.pageCount);
        if (!plan) {
          setError(msg.rangeFail);
          return;
        }
        setStatus(msg.splitting);
        btnSplit.disabled = true;
        buildParts(plan)
          .then(function (parts) {
            if (!parts.length) throw new Error('empty');
            if (parts.length === 1) {
              result = {
                blob: new Blob([parts[0].bytes], { type: 'application/pdf' }),
                filename: parts[0].name
              };
            } else {
              if (!hasFflate()) throw new Error('fflate');
              var files = {};
              parts.forEach(function (p) { files[p.name] = p.bytes; });
              var zipped = fflate.zipSync(files, { level: 1 });
              result = {
                blob: new Blob([zipped], { type: 'application/zip' }),
                filename: 'split-pages.zip'
              };
            }
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{n}', String(parts.length))
              .replace('{bytes}', formatBytes(result.blob.size));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            var s = String(err && err.message || '');
            if (s === 'fflate') setError(msg.fflateFail);
            else if (s === 'empty') setError(msg.rangeFail);
            else setError(msg.splitFail);
            setStatus('');
          })
          .finally(function () {
            btnSplit.disabled = false;
          });
      }

      /** 下载结果。 */
      function downloadResult() {
        if (!result) return;
        var url = URL.createObjectURL(result.blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = result.filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成带标签的多页迷你 PDF。
       * @param {string[]} labels
       * @returns {Promise<File>}
       */
      function makeSamplePdf(labels) {
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            labels.forEach(function (label) {
              var page = doc.addPage([420, 300]);
              page.drawText(label, { x: 48, y: 160, size: 28, font: font });
              page.drawText('Sample page for split-pdf', { x: 48, y: 120, size: 12, font: font });
            });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-split.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载三页样例并按每页拆分。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        modeEl.value = 'every';
        syncModeUi();
        return makeSamplePdf(['Page 1', 'Page 2', 'Page 3']).then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (source) split();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
        rangesEl.value = '';
        modeEl.value = 'every';
        syncModeUi();
        refreshMeta();
        clearResult();
        setError('');
        setStatus('');
      }

      modeEl.addEventListener('change', syncModeUi);
      rangesEl.addEventListener('input', clearResult);

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

      btnSplit.addEventListener('click', split);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncModeUi();
      /** 进页自动跑样例，保证 Download 有真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('split-pdf');
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
