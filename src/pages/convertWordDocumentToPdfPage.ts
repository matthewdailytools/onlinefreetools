/**
 * 将 Word 文档（.docx）转为 PDF：mammoth → HTML 预览 → html2pdf.js 导出（纯客户端）。
 * slug: convert-word-document-to-pdf
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
 * 渲染 convert-word-document-to-pdf 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertWordDocumentToPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/convert-word-document-to-pdf';
	/** 当前语言规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	/** 文案 i18n 前缀（必须与 i18n shard 一致）。 */
	const prefix = 'tool_convert_word_document_to_pdf';
	/** 页面 <title>。 */
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	/** meta / 页首摘要。 */
	const description = t(opts.lang, prefix + '_description');

	/** 顶部导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器备选 href。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** 绝对 hreflang 列表。 */
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
			currentSlug: 'convert-word-document-to-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** PDF 进度/预览共用文案。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	/** 页内样式：HTML 预览框 + 工具栏间距。 */
	const extraHeadHtml = `
  <style>
    #wordPdfHtmlPreview { border: 1px solid #dee2e6; border-radius: .25rem; padding: .75rem; background: #f8f9fa; min-height: 8rem; }
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区（上传 .docx、HTML 预览、导出 PDF）。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="wordPdfDrop" for="wordPdfFile">
      <input type="file" id="wordPdfFile" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <p id="wordPdfMeta" class="small text-muted mb-2" style="display:none;"></p>

    <p class="small text-muted mb-2">${escapeHtml(t(opts.lang, prefix + '_preview_label'))}</p>
    <div id="wordPdfHtmlPreview" aria-live="polite"></div>

    <div class="d-flex align-items-center tools-bar mb-2 mt-2 flex-wrap">
      <button type="button" id="wordPdfBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_convert'))}</button>
      <button type="button" id="wordPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="wordPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="wordPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="wordPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="wordPdfStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'wordPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'mammoth.js', href: 'https://github.com/mwilliamson/mammoth.js' },
			{ label: 'html2pdf.js', href: 'https://github.com/eKoopmans/html2pdf.js' },
		],
	});

	/**
	 * 客户端脚本：JSZip 造样例 .docx → mammoth 转 HTML → html2pdf 导出 PDF。
	 * 正则字类必须写成 \\w / \\d，避免模板字符串吃掉反斜杠。
	 * html2pdf 必须用 bundle：非 bundle 的 min.js 依赖全局 jspdf，初始化即抛 jsPDF undefined。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/jszip/jszip.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/mammoth/mammoth.browser.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/dompurify/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/html2pdf/html2pdf.bundle.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 文件输入。 */
      var fileInput = document.getElementById('wordPdfFile');
      /** 拖放区。 */
      var dropEl = document.getElementById('wordPdfDrop');
      /** 文件名/体积元信息。 */
      var metaEl = document.getElementById('wordPdfMeta');
      /** mammoth 产出的 HTML 预览。 */
      var previewEl = document.getElementById('wordPdfHtmlPreview');
      /** 转换按钮。 */
      var btnConvert = document.getElementById('wordPdfBtnConvert');
      /** 下载 PDF 按钮。 */
      var btnDownload = document.getElementById('wordPdfBtnDownload');
      /** 加载样例按钮。 */
      var btnSample = document.getElementById('wordPdfBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('wordPdfBtnClear');
      /** 错误行。 */
      var errEl = document.getElementById('wordPdfError');
      /** 状态行。 */
      var statusEl = document.getElementById('wordPdfStatus');
      /** 进度条 + PDF 画布预览。 */
      var work = window.OftPdfWork.bind('wordPdf');
      /** 忙碌时一起禁用的按钮。 */
      var busyBtns = [btnConvert, btnSample, btnClear, btnDownload];

      /** 已加载的 .docx 字节。 */
      var sourceBytes = null;
      /** 源文件名。 */
      var sourceName = '';
      /** 最近一次 HTML（供重复导出）。 */
      var lastHtml = '';
      /** 导出的 PDF 字节。 */
      var resultBytes = null;

      /** 页面可见文案（由服务端注入）。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
        samplePara: ${JSON.stringify(t(opts.lang, prefix + '_sample_paragraph'))}
      };

      /**
       * 显示或隐藏错误。
       * @param {string} text
       */
      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /**
       * 更新状态行。
       * @param {string} text
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 刷新文件元信息。
       * @param {string} name
       * @param {number} bytesLen
       */
      function setMeta(name, bytesLen) {
        if (!name) { metaEl.style.display = 'none'; metaEl.textContent = ''; return; }
        var kb = (bytesLen / 1024).toFixed(1);
        metaEl.textContent = name + ' · ' + kb + ' KB';
        metaEl.style.display = '';
      }

      /** 触发 PDF 下载。 */
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
       * 用 JSZip 组装最小合法 .docx（仅 word/document.xml 一段落）。
       * @param {string} paragraph
       * @returns {Promise<Uint8Array>}
       */
      function buildMinimalDocx(paragraph) {
        if (typeof JSZip === 'undefined') return Promise.reject(new Error('jszip'));
        var zip = new JSZip();
        var text = String(paragraph || 'Sample Word paragraph.').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        zip.file('[Content_Types].xml',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
          '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
          '<Default Extension="xml" ContentType="application/xml"/>' +
          '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
          '</Types>');
        zip.folder('_rels').file('.rels',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
          '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
          '</Relationships>');
        zip.folder('word').folder('_rels').file('document.xml.rels',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>');
        zip.folder('word').file('document.xml',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
          '<w:body><w:p><w:r><w:t xml:space="preserve">' + text + '</w:t></w:r></w:p>' +
          '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>' +
          '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr>' +
          '</w:body></w:document>');
        return zip.generateAsync({ type: 'uint8array' });
      }

      /**
       * mammoth 把 .docx 转为 HTML，并写入预览区。
       * @param {Uint8Array} bytes
       * @returns {Promise<string>}
       */
      function docxToHtml(bytes) {
        if (typeof mammoth === 'undefined' || !mammoth.convertToHtml) return Promise.reject(new Error('mammoth'));
        if (typeof DOMPurify === 'undefined') return Promise.reject(new Error('dompurify'));
        var copy = bytes.slice(0);
        return mammoth.convertToHtml({ arrayBuffer: copy.buffer }).then(function (result) {
          var html = (result && result.value) ? String(result.value) : '';
          if (!html.trim()) throw new Error('empty');
          // DOCX 可包含外链、事件属性或脚本式标记；进入预览与 PDF 渲染前先消毒。
          var safeHtml = DOMPurify.sanitize(html, {
            USE_PROFILES: { html: true },
          });
          lastHtml = safeHtml;
          previewEl.innerHTML = safeHtml;
          return safeHtml;
        });
      }

      /**
       * html2pdf.js 把预览 HTML 转成 PDF 字节。
       * @returns {Promise<Uint8Array>}
       */
      function htmlToPdfBytes() {
        return new Promise(function (resolve, reject) {
          try {
            if (typeof html2pdf === 'undefined') return reject(new Error('html2pdf'));
            if (!previewEl.innerHTML.trim()) return reject(new Error('empty'));
            var opt = {
              margin: 12,
              filename: 'converted.pdf',
              image: { type: 'jpeg', quality: 0.95 },
              html2canvas: { scale: 2, useCORS: true },
              jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(previewEl).set(opt).outputPdf('blob').then(function (blob) {
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
       * 把错误映射为可读文案。
       * @param {unknown} err
       * @returns {string}
       */
      function mapErr(err) {
        var s = String(err && (err.message || err) || '');
        if (/empty/i.test(s)) return msg.empty;
        if (/password|encrypt/i.test(s)) return msg.encrypted;
        if (/mammoth|jszip|html2pdf/i.test(s)) return msg.loadFail;
        return msg.convertFail;
      }

      /**
       * 主流程：docx → HTML → PDF → 预览。
       * @returns {Promise<void>}
       */
      function runConvert() {
        if (!sourceBytes) { setErr(msg.empty); return Promise.resolve(); }
        setErr('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () { return docxToHtml(sourceBytes); })
          .then(function () {
            work.setProgress(50);
            return htmlToPdfBytes();
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
            setErr(mapErr(err));
            setStatus('');
            work.clearPreview();
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /**
       * 接收用户选择的 .docx。
       * @param {File} file
       */
      function acceptFile(file) {
        if (!file) return;
        var name = file.name || '';
        if (!/\\.docx$/i.test(name) && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          setErr(msg.loadFail);
          return;
        }
        setErr('');
        setStatus('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        if (file.size > SOFT_BYTES) setStatus(msg.large);
        work.setBusy(busyBtns, true);
        file.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          sourceName = name || 'document.docx';
          setMeta(sourceName, sourceBytes.length);
          return docxToHtml(sourceBytes);
        }).then(function () {
          setStatus('');
        }).catch(function (err) {
          sourceBytes = null;
          setErr(mapErr(err));
        }).finally(function () {
          work.setBusy(busyBtns, false);
        });
      }

      /**
       * 进页/按钮样例：JSZip 造最小 .docx，再走同一转换流水线。
       * lint:tool-page 要求字面 loadSample。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        return buildMinimalDocx(msg.samplePara)
          .then(function (bytes) {
            sourceBytes = bytes;
            sourceName = 'sample.docx';
            setMeta(sourceName, bytes.length);
            return runConvert();
          })
          .catch(function (err) {
            setErr(mapErr(err));
            work.setBusy(busyBtns, false);
            work.hideProgress();
          });
      }

      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) acceptFile(fileInput.files[0]);
        fileInput.value = '';
      });

      ['dragover', 'dragenter'].forEach(function (evName) {
        dropEl.addEventListener(evName, function (ev) {
          ev.preventDefault();
        });
      });
      dropEl.addEventListener('drop', function (ev) {
        ev.preventDefault();
        var f = ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0];
        if (f) acceptFile(f);
      });

      btnConvert.addEventListener('click', function () { runConvert(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () {
        sourceBytes = null;
        sourceName = '';
        lastHtml = '';
        resultBytes = null;
        previewEl.innerHTML = '';
        setMeta('', 0);
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        work.clearPreview();
        work.hideProgress();
      });

      loadSample();
    })();
  </script>`;

	/** catalog 元数据（related / FAQ 用）。 */
	const toolMeta = getToolBySlug('convert-word-document-to-pdf');
	/** FAQ / related / 分享。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				enabledLangs: supportedLangs,
			})
		: '';

	/** JSON-LD。 */
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
