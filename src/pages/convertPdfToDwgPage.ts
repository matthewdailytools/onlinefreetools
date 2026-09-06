/**
 * 将 PDF 转为 CAD 可开的 ASCII DXF：pdf.js 文本坐标写成 TEXT，页框写成 LINE（浏览器无法写专有 DWG 二进制）。
 * slug: convert-pdf-to-dwg
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
 * 渲染 convert-pdf-to-dwg 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertPdfToDwgPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/convert-pdf-to-dwg';
	/** 当前语规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** i18n 键前缀。 */
	const prefix = 'tool_convert_pdf_to_dwg';
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
			currentSlug: 'convert-pdf-to-dwg',
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
    #cpdDxf { min-height: 160px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .8rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, (prefix + '_title') as Parameters<typeof t>[1]))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="cpdDrop" for="cpdFile">
      <input type="file" id="cpdFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, (prefix + '_choose_file') as Parameters<typeof t>[1]))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, (prefix + '_drop_hint') as Parameters<typeof t>[1]))}</span>
    </label>

    <p id="cpdMeta" class="small text-muted mb-2" style="display:none;"></p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="cpdBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_convert') as Parameters<typeof t>[1]))}</button>
      <a id="cpdBtnDownload" class="btn btn-outline-primary btn-sm disabled" href="#" aria-disabled="true" role="button">${escapeHtml(t(opts.lang, (prefix + '_download') as Parameters<typeof t>[1]))} .dxf</a>
      <button type="button" id="cpdBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_sample') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="cpdBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_clear') as Parameters<typeof t>[1]))}</button>
    </div>

    <p id="cpdWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="cpdError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="cpdStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'cpdPdf', labels: pdfWorkLabels })}

    <label class="form-label small mb-1" for="cpdDxf">${escapeHtml(t(opts.lang, (prefix + '_dxf_label') as Parameters<typeof t>[1]))}</label>
    <textarea id="cpdDxf" class="form-control mb-3" readonly rows="8" aria-readonly="true"></textarea>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Use cases。 */
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
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'DXF', href: 'https://en.wikipedia.org/wiki/AutoCAD_DXF' },
		],
	});

	/**
	 * 客户端脚本：按页写出 ASCII DXF（页框 LINE + 文本 TEXT）。
	 * 产物是 .dxf，不是专有 DWG 二进制。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      /** 拖放区。 */
      var drop = document.getElementById('cpdDrop');
      /** 文件输入。 */
      var fileInput = document.getElementById('cpdFile');
      /** 元信息行。 */
      var metaEl = document.getElementById('cpdMeta');
      /** DXF 预览框。 */
      var dxfEl = document.getElementById('cpdDxf');
      /** 转换按钮。 */
      var btnConvert = document.getElementById('cpdBtnConvert');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('cpdBtnDownload');
      /** 样例按钮。 */
      var btnSample = document.getElementById('cpdBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('cpdBtnClear');
      /** 警告行。 */
      var warnEl = document.getElementById('cpdWarn');
      /** 错误行。 */
      var errEl = document.getElementById('cpdError');
      /** 状态行。 */
      var statusEl = document.getElementById('cpdStatus');
      /** PDF 工作台绑定。 */
      var work = window.OftPdfWork.bind('cpdPdf');
      /**
       * 忙碌时禁用的按钮组。
       * 不含下载：setBusy(false) 会把组内按钮全部解开，若此时还没有 DXF，
       * 「下载 .dxf」会看起来可点，实际 click 因 result 为空而静默无反应。
       */
      var busyBtns = [btnConvert, btnSample, btnClear];

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, (prefix + '_empty') as Parameters<typeof t>[1]))},
        encrypted: ${JSON.stringify(t(opts.lang, (prefix + '_err_encrypted') as Parameters<typeof t>[1]))},
        loadFail: ${JSON.stringify(t(opts.lang, (prefix + '_err_load') as Parameters<typeof t>[1]))},
        convertFail: ${JSON.stringify(t(opts.lang, (prefix + '_err_convert') as Parameters<typeof t>[1]))},
        noText: ${JSON.stringify(t(opts.lang, (prefix + '_err_notext') as Parameters<typeof t>[1]))},
        pdfjsMissing: ${JSON.stringify(t(opts.lang, (prefix + '_err_pdfjs') as Parameters<typeof t>[1]))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, (prefix + '_warn_pdflib') as Parameters<typeof t>[1]))},
        large: ${JSON.stringify(t(opts.lang, (prefix + '_warn_large') as Parameters<typeof t>[1]))},
        working: ${JSON.stringify(t(opts.lang, (prefix + '_status_working') as Parameters<typeof t>[1]))},
        done: ${JSON.stringify(t(opts.lang, (prefix + '_status_done') as Parameters<typeof t>[1]))},
        pagesLabel: ${JSON.stringify(t(opts.lang, (prefix + '_pages_label') as Parameters<typeof t>[1]))},
        sampleText: 'Hello PDF to DWG sample.'
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} 已加载源 PDF */
      var source = null;
      /** @type {{ dxf: string, filename: string }|null} DXF 结果 */
      var result = null;
      /** 当前下载用的 blob URL，换结果或清空时 revoke。 */
      var downloadUrl = '';

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

      /** pdf-lib 是否可用（仅样例生成）。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /**
       * 有结果时把 blob URL 挂到下载链接上，让用户点击走浏览器默认保存。
       * @param {boolean} on 是否可下载
       */
      function setDownloadReady(on) {
        if (downloadUrl) {
          URL.revokeObjectURL(downloadUrl);
          downloadUrl = '';
        }
        if (on && result && result.dxf) {
          downloadUrl = URL.createObjectURL(new Blob([result.dxf], { type: 'application/octet-stream' }));
          btnDownload.href = downloadUrl;
          btnDownload.setAttribute('download', result.filename || 'drawing.dxf');
          btnDownload.classList.remove('disabled');
          btnDownload.setAttribute('aria-disabled', 'false');
          return;
        }
        btnDownload.href = '#';
        btnDownload.removeAttribute('download');
        btnDownload.classList.add('disabled');
        btnDownload.setAttribute('aria-disabled', 'true');
      }

      /** 清空 DXF 结果。 */
      function clearResult() {
        result = null;
        setDownloadReady(false);
        dxfEl.value = '';
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
       * 懒加载 pdf.js。
       * @returns {Promise<object>}
       */
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('/vendor/pdfjs/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () {
          throw new Error('pdfjs');
        });
      }

      /**
       * 将错误映射为可读文案。
       * @param {unknown} err
       */
      function mapLoadError(err) {
        var s = String(err && (err.message || err) || '');
        if (s === 'pdfjs') return msg.pdfjsMissing;
        if (/password|encrypt|encrypted/i.test(s)) return msg.encrypted;
        return msg.loadFail;
      }

      /**
       * 写出一对 DXF 组码行。
       * @param {string[]} lines
       * @param {number|string} code
       * @param {string|number} value
       */
      function pushPair(lines, code, value) {
        lines.push(String(code));
        lines.push(String(value));
      }

      /**
       * 写出一条 LINE（页框边）。
       * @param {string[]} lines
       * @param {number} x1
       * @param {number} y1
       * @param {number} x2
       * @param {number} y2
       */
      function pushLine(lines, x1, y1, x2, y2) {
        pushPair(lines, 0, 'LINE');
        pushPair(lines, 8, '0');
        pushPair(lines, 10, x1.toFixed(3));
        pushPair(lines, 20, y1.toFixed(3));
        pushPair(lines, 30, '0.0');
        pushPair(lines, 11, x2.toFixed(3));
        pushPair(lines, 21, y2.toFixed(3));
        pushPair(lines, 31, '0.0');
      }

      /**
       * 写出一条 TEXT（pdf.js 文本坐标）。
       * @param {string[]} lines
       * @param {number} x
       * @param {number} y
       * @param {number} height
       * @param {string} text
       */
      function pushText(lines, x, y, height, text) {
        var safe = String(text || '').replace(/\\r?\\n/g, ' ');
        if (!safe) return;
        pushPair(lines, 0, 'TEXT');
        pushPair(lines, 8, '0');
        pushPair(lines, 10, x.toFixed(3));
        pushPair(lines, 20, y.toFixed(3));
        pushPair(lines, 30, '0.0');
        pushPair(lines, 40, Math.max(4, height).toFixed(3));
        pushPair(lines, 1, safe);
      }

      /**
       * 从 PDF 字节构建 ASCII DXF。
       * @param {Uint8Array} bytes
       * @param {(done: number, total: number) => void} [onProgress]
       * @returns {Promise<string>}
       */
      function buildDxf(bytes, onProgress) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (pdfDoc) {
          var numPages = pdfDoc.numPages;
          /** 多页沿 X 错开，避免叠在一起。 */
          var xOffset = 0;
          var textCount = 0;
          /** @type {string[]} */
          var lines = [];
          pushPair(lines, 0, 'SECTION');
          pushPair(lines, 2, 'HEADER');
          pushPair(lines, 9, '$ACADVER');
          pushPair(lines, 1, 'AC1009');
          pushPair(lines, 0, 'ENDSEC');
          pushPair(lines, 0, 'SECTION');
          pushPair(lines, 2, 'ENTITIES');

          var chain = Promise.resolve();
          for (var p = 1; p <= numPages; p++) {
            (function (pageNum) {
              chain = chain.then(function () {
                return pdfDoc.getPage(pageNum).then(function (page) {
                  var viewport = page.getViewport({ scale: 1 });
                  var w = viewport.width;
                  var h = viewport.height;
                  var ox = xOffset;
                  pushLine(lines, ox, 0, ox + w, 0);
                  pushLine(lines, ox + w, 0, ox + w, h);
                  pushLine(lines, ox + w, h, ox, h);
                  pushLine(lines, ox, h, ox, 0);
                  return page.getTextContent().then(function (tc) {
                    var items = (tc && tc.items) || [];
                    for (var i = 0; i < items.length; i++) {
                      var item = items[i];
                      if (!item || !item.str || !String(item.str).trim()) continue;
                      var tr = item.transform || [];
                      var x = typeof tr[4] === 'number' ? tr[4] : 0;
                      var y = typeof tr[5] === 'number' ? tr[5] : 0;
                      var th = typeof tr[0] === 'number' && tr[0] > 0 ? tr[0] : 12;
                      pushText(lines, ox + x, y, th, item.str);
                      textCount += 1;
                    }
                    xOffset += w + 36;
                    if (onProgress) onProgress(pageNum, numPages);
                  });
                });
              });
            })(p);
          }
          return chain.then(function () {
            if (!textCount) throw new Error('notext');
            pushPair(lines, 0, 'ENDSEC');
            pushPair(lines, 0, 'EOF');
            return lines.join('\\n');
          });
        });
      }

      /**
       * 加载用户 PDF 并预览源文件。
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
          return ensurePdfJs().then(function (pdfjsLib) {
            return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
          }).then(function (doc) {
            source = { name: file.name || 'document.pdf', bytes: bytes, pageCount: doc.numPages };
            refreshMeta();
            work.setProgress(70);
            return work.showPreview(bytes);
          });
        }).catch(function (err) {
          source = null;
          refreshMeta();
          setError(mapLoadError(err));
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
          /** 仅有预览、尚未转出 DXF 时保持下载不可点。 */
          setDownloadReady(!!result);
        });
      }

      /** 转 DXF 并填入预览框。 */
      function convert() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return;
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        window.OftPdfWork.yieldUi()
          .then(function () {
            return buildDxf(source.bytes, function (done, total) {
              work.setProgress((done / total) * 90);
            });
          })
          .then(function (dxf) {
            var base = (source.name || 'document.pdf').replace(/\\.pdf$/i, '') || 'document';
            result = { dxf: dxf, filename: base + '.dxf' };
            dxfEl.value = dxf;
            setDownloadReady(true);
            work.setProgress(100);
            setStatus(msg.done);
          })
          .catch(function (err) {
            var s = String(err && err.message || '');
            if (s === 'notext') setError(msg.noText);
            else if (s === 'pdfjs') setError(msg.pdfjsMissing);
            else setError(mapLoadError(err) === msg.loadFail ? msg.convertFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            setDownloadReady(!!result);
          });
      }

      /**
       * 无结果时拦住 # 导航并提示；有结果时不 preventDefault，让 a[download] 走浏览器保存。
       * @param {MouseEvent} e 点击事件
       */
      function onDownloadClick(e) {
        if (result && result.dxf && btnDownload.getAttribute('aria-disabled') !== 'true') return;
        e.preventDefault();
        setError(source ? msg.convertFail : msg.empty);
      }

      /**
       * 生成含文本的样例 PDF。
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
          return new File([bytes], 'sample-pdf-to-dwg.pdf', { type: 'application/pdf' });
        });
      }

      /**
       * 进页样例：样例 PDF → DXF 可下载。
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
      btnDownload.addEventListener('click', onDownloadClick);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动转出可下载 DXF。 */
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（merge 前可能为空）。 */
	const toolMeta = getToolBySlug('convert-pdf-to-dwg');
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
