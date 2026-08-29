/**
 * 旋转 PDF 工具页：按全部页或页码范围旋转 90°/180°/270°（纯客户端 pdf-lib）。
 * slug: rotate-pdf
 * 规格：work-tasks/rotate-pdf/02-tool-info.md
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
 * 渲染旋转 PDF 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderRotatePdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/rotate-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_rotate_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_rotate_pdf_description');

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
			currentSlug: 'rotate-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .rotate-pdf-meta { font-size: .85rem; color: #6c757d; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone rotate-pdf-drop mb-3" id="rotatePdfDrop" for="rotatePdfFile">
      <input type="file" id="rotatePdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_drop_hint'))}</span>
    </label>

    <p id="rotatePdfMeta" class="rotate-pdf-meta mb-2" style="display:none;"></p>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-4">
        <label class="form-label mb-0" for="rotatePdfMode">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_mode_label'))}</label>
        <select id="rotatePdfMode" class="form-select form-select-sm">
          <option value="all">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_mode_all'))}</option>
          <option value="ranges">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_mode_ranges'))}</option>
        </select>
      </div>
      <div class="col-12 col-md-4" id="rotatePdfRangesWrap" style="display:none;">
        <label class="form-label mb-0" for="rotatePdfRanges">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_ranges_label'))}</label>
        <input type="text" id="rotatePdfRanges" class="form-control form-control-sm" placeholder="${escapeHtml(t(opts.lang, 'tool_rotate_pdf_ranges_hint'))}" autocomplete="off">
      </div>
      <div class="col-12 col-md-4">
        <label class="form-label mb-0" for="rotatePdfAngle">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_angle_label'))}</label>
        <select id="rotatePdfAngle" class="form-select form-select-sm">
          <option value="90">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_angle_90cw'))}</option>
          <option value="180">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_angle_180'))}</option>
          <option value="270">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_angle_90ccw'))}</option>
        </select>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="rotatePdfBtnRotate" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_rotate'))}</button>
      <button type="button" id="rotatePdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_rotate_pdf_download'))}</button>
      <button type="button" id="rotatePdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_sample'))}</button>
      <button type="button" id="rotatePdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_rotate_pdf_clear'))}</button>
    </div>

    <p id="rotatePdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="rotatePdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="rotatePdfStatus" class="small text-muted mb-2" role="status"></p>
    <p id="rotatePdfStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_rotate_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	/**
	 * 客户端脚本：加载 PDF、解析页范围、setRotation 累加角度、样例自动跑通。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      var drop = document.getElementById('rotatePdfDrop');
      var fileInput = document.getElementById('rotatePdfFile');
      var metaEl = document.getElementById('rotatePdfMeta');
      var modeEl = document.getElementById('rotatePdfMode');
      var rangesWrap = document.getElementById('rotatePdfRangesWrap');
      var rangesEl = document.getElementById('rotatePdfRanges');
      var angleEl = document.getElementById('rotatePdfAngle');
      var btnRotate = document.getElementById('rotatePdfBtnRotate');
      var btnDownload = document.getElementById('rotatePdfBtnDownload');
      var btnSample = document.getElementById('rotatePdfBtnSample');
      var btnClear = document.getElementById('rotatePdfBtnClear');
      var warnEl = document.getElementById('rotatePdfWarn');
      var errEl = document.getElementById('rotatePdfError');
      var statusEl = document.getElementById('rotatePdfStatus');
      var statsEl = document.getElementById('rotatePdfStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_err_load'))},
        rangeFail: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_err_range'))},
        rotateFail: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_err_rotate'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_warn_pdflib'))},
        rotating: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_status_rotating'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_rotate_pdf_stats_tpl'))}
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} */
      var source = null;
      /** @type {Uint8Array|null} */
      var resultBytes = null;

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

      /** 清空旋转结果。 */
      function clearResult() {
        resultBytes = null;
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
       * 解析 1-based 范围字符串为 0-based 页索引集合。
       * @param {string} text
       * @param {number} pageCount
       * @returns {Set<number>|null}
       */
      function parsePageSet(text, pageCount) {
        var raw = String(text || '').trim();
        if (!raw) return null;
        var parts = raw.split(',');
        /** @type {Set<number>} */
        var set = new Set();
        for (var i = 0; i < parts.length; i++) {
          var part = parts[i].trim();
          if (!part) continue;
          var m = part.match(/^(\\d+)(?:\\s*-\\s*(\\d+))?$/);
          if (!m) return null;
          var a = parseInt(m[1], 10);
          var b = m[2] ? parseInt(m[2], 10) : a;
          if (!(a >= 1 && b >= a && b <= pageCount)) return null;
          for (var p = a; p <= b; p++) set.add(p - 1);
        }
        if (!set.size) return null;
        return set;
      }

      /**
       * 根据模式与范围得到待旋转页索引集合。
       * @returns {Set<number>|null}
       */
      function resolveTargetPages() {
        if (!source) return null;
        if (modeEl.value === 'all') {
          var all = new Set();
          for (var i = 0; i < source.pageCount; i++) all.add(i);
          return all;
        }
        return parsePageSet(rangesEl.value, source.pageCount);
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
       * 对目标页累加旋转角度并保存。
       * @param {Set<number>} targetPages
       * @param {number} deltaDeg
       * @returns {Promise<Uint8Array>}
       */
      function buildRotated(targetPages, deltaDeg) {
        return PDFLib.PDFDocument.load(source.bytes).then(function (doc) {
          var pages = doc.getPages();
          pages.forEach(function (page, idx) {
            if (!targetPages.has(idx)) return;
            var current = page.getRotation().angle;
            page.setRotation(PDFLib.degrees(current + deltaDeg));
          });
          return doc.save();
        });
      }

      /** 执行旋转并启用下载。 */
      function rotate() {
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
        var targetPages = resolveTargetPages();
        if (!targetPages) {
          setError(msg.rangeFail);
          return;
        }
        var deltaDeg = parseInt(angleEl.value, 10) || 90;
        setStatus(msg.rotating);
        btnRotate.disabled = true;
        buildRotated(targetPages, deltaDeg)
          .then(function (bytes) {
            resultBytes = bytes;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{n}', String(targetPages.size))
              .replace('{bytes}', formatBytes(bytes.length));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            setError(mapLoadError(err) === msg.loadFail ? msg.rotateFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnRotate.disabled = false;
          });
      }

      /** 下载旋转结果。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'rotated.pdf';
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
              page.drawText('Sample page for rotate-pdf', { x: 48, y: 120, size: 12, font: font });
            });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-rotate.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载两页样例并全部顺时针 90° 旋转。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        modeEl.value = 'all';
        angleEl.value = '90';
        syncModeUi();
        return makeSamplePdf(['Page 1', 'Page 2']).then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (source) rotate();
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
        modeEl.value = 'all';
        angleEl.value = '90';
        syncModeUi();
        refreshMeta();
        clearResult();
        setError('');
        setStatus('');
      }

      modeEl.addEventListener('change', syncModeUi);
      rangesEl.addEventListener('input', clearResult);
      angleEl.addEventListener('change', clearResult);

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

      btnRotate.addEventListener('click', rotate);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncModeUi();
      /** 进页自动跑样例，保证 Download 有真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('rotate-pdf');
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
