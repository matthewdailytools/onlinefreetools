/**
 * 尽力将 PDF 转为 PDF/A 取向文件：pdf-lib 加载、写 Title/Creator、嵌入 Helvetica 后保存（非 veraPDF 认证）。
 * slug: convert-pdf-to-pdf-a
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
 * 渲染 convert-pdf-to-pdf-a 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertPdfToPdfAPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/convert-pdf-to-pdf-a';
	/** 当前语规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** i18n 键前缀。 */
	const prefix = 'tool_convert_pdf_to_pdf_a';
	/** 页面 title（含品牌）。 */
	const title = `${t(opts.lang, (prefix + '_title') as Parameters<typeof t>[1])} | ${t(opts.lang, 'brand')}`;
	/** meta / 页内摘要。 */
	const description = t(opts.lang, (prefix + '_description') as Parameters<typeof t>[1]);

	/** 顶部导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器目标路径。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** 完整 hreflang 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 页头 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'convert-pdf-to-pdf-a',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });
	/** PDF 工作台文案。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, (prefix + '_title') as Parameters<typeof t>[1]))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="cpaDrop" for="cpaFile">
      <input type="file" id="cpaFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, (prefix + '_choose_file') as Parameters<typeof t>[1]))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, (prefix + '_drop_hint') as Parameters<typeof t>[1]))}</span>
    </label>

    <p id="cpaMeta" class="small text-muted mb-2" style="display:none;"></p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="cpaBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_convert') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="cpaBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, (prefix + '_download') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="cpaBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_sample') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="cpaBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_clear') as Parameters<typeof t>[1]))}</button>
    </div>

    <p id="cpaWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="cpaError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="cpaStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'cpaPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	/** 权威引用（含 PDF/A 说明与合规检查邻页）。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'PDF/A', href: 'https://en.wikipedia.org/wiki/PDF/A' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
		],
	});

	/**
	 * 客户端脚本：加载 PDF、写 Title/Creator、嵌入 Helvetica、保存。
	 * 诚实边界：不是 veraPDF 认证的 PDF/A。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      /** 拖放区。 */
      var drop = document.getElementById('cpaDrop');
      /** 文件输入。 */
      var fileInput = document.getElementById('cpaFile');
      /** 元信息行。 */
      var metaEl = document.getElementById('cpaMeta');
      /** 转换按钮。 */
      var btnConvert = document.getElementById('cpaBtnConvert');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('cpaBtnDownload');
      /** 样例按钮。 */
      var btnSample = document.getElementById('cpaBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('cpaBtnClear');
      /** 警告行。 */
      var warnEl = document.getElementById('cpaWarn');
      /** 错误行。 */
      var errEl = document.getElementById('cpaError');
      /** 状态行。 */
      var statusEl = document.getElementById('cpaStatus');
      /** PDF 工作台绑定。 */
      var work = window.OftPdfWork.bind('cpaPdf');
      /** 忙碌时禁用的按钮组。 */
      var busyBtns = [btnConvert, btnSample, btnClear, btnDownload];

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, (prefix + '_empty') as Parameters<typeof t>[1]))},
        encrypted: ${JSON.stringify(t(opts.lang, (prefix + '_err_encrypted') as Parameters<typeof t>[1]))},
        loadFail: ${JSON.stringify(t(opts.lang, (prefix + '_err_load') as Parameters<typeof t>[1]))},
        convertFail: ${JSON.stringify(t(opts.lang, (prefix + '_err_convert') as Parameters<typeof t>[1]))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, (prefix + '_warn_pdflib') as Parameters<typeof t>[1]))},
        large: ${JSON.stringify(t(opts.lang, (prefix + '_warn_large') as Parameters<typeof t>[1]))},
        working: ${JSON.stringify(t(opts.lang, (prefix + '_status_working') as Parameters<typeof t>[1]))},
        done: ${JSON.stringify(t(opts.lang, (prefix + '_status_done') as Parameters<typeof t>[1]))},
        pagesLabel: ${JSON.stringify(t(opts.lang, (prefix + '_pages_label') as Parameters<typeof t>[1]))},
        metaTitle: ${JSON.stringify(t(opts.lang, (prefix + '_meta_title') as Parameters<typeof t>[1]))},
        metaCreator: ${JSON.stringify(t(opts.lang, (prefix + '_meta_creator') as Parameters<typeof t>[1]))},
        sampleText: 'Hello PDF/A sample.'
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} 已加载源 PDF */
      var source = null;
      /** @type {Uint8Array|null} 转换结果 */
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

      /** 清空转换结果。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
      }

      /** 刷新元信息。 */
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
       * 尽力写归档元数据并嵌入 Helvetica。
       * @param {Uint8Array} bytes
       * @returns {Promise<Uint8Array>}
       */
      function convertBestEffortPdfA(bytes) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes).then(function (doc) {
          doc.setTitle(msg.metaTitle);
          doc.setCreator(msg.metaCreator);
          doc.setProducer(msg.metaCreator);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function () {
            return doc.save();
          });
        }).then(function (out) {
          return new Uint8Array(out);
        });
      }

      /**
       * 加载用户 PDF。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        clearResult();
        if (!file) return Promise.resolve();
        if (!(file.type === 'application/pdf' || /\\.pdf$/i.test(file.name || ''))) {
          setError(msg.loadFail);
          return Promise.resolve();
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          if (!hasPdfLib()) throw new Error('pdflib');
          return PDFLib.PDFDocument.load(bytes).then(function (doc) {
            source = { name: file.name || 'document.pdf', bytes: bytes, pageCount: doc.getPageCount() };
            refreshMeta();
            work.setProgress(70);
            return work.showPreview(bytes);
          });
        }).catch(function (err) {
          source = null;
          refreshMeta();
          var s = String(err && (err.message || err) || '');
          if (s === 'pdflib') setError(msg.pdflibMissing);
          else if (/password|encrypt/i.test(s)) setError(msg.encrypted);
          else setError(msg.loadFail);
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
      }

      /** 执行尽力转换并预览。 */
      function convert() {
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
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        window.OftPdfWork.yieldUi()
          .then(function () {
            work.setProgress(40);
            return convertBestEffortPdfA(source.bytes);
          })
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
            var s = String(err && err.message || '');
            if (/password|encrypt/i.test(s)) setError(msg.encrypted);
            else if (s === 'pdflib') setError(msg.pdflibMissing);
            else setError(msg.convertFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /** 下载转换结果。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = ((source && source.name) || 'document.pdf').replace(/\\.pdf$/i, '') + '-pdfa.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成样例 PDF。
       * @returns {Promise<File>}
       */
      function makeSamplePdf() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var page = doc.addPage([420, 300]);
            page.drawText(msg.sampleText, { x: 48, y: 160, size: 16, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-pdf-a.pdf', { type: 'application/pdf' });
        });
      }

      /**
       * 进页样例：生成 PDF 并立刻转换。
       * lint:tool-page 要求字面 loadSample。
       */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return makeSamplePdf().then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (source) convert();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
        refreshMeta();
        clearResult();
        setError('');
        setStatus('');
        work.clearPreview();
        work.hideProgress();
      }

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

      btnConvert.addEventListener('click', convert);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动转换样例，Download 可用。 */
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（merge 前可能为空）。 */
	const toolMeta = getToolBySlug('convert-pdf-to-pdf-a');
	/** Related / FAQ 区块。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD。 */
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
