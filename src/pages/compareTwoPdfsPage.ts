/**
 * Compare two PDFs 工具页：提取两份 PDF 的文本并高亮差异（纯客户端）。
 * slug: compare-two-pdfs
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
	pdfWorkUiClientScript,
	pdfWorkUiCss,
	pdfWorkUiLabels,
	pdfWorkUiPreviewHtml,
	pdfWorkUiProgressHtml,
} from './site/pdfWorkUi';

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 compare-two-pdfs 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCompareTwoPdfsPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/compare-two-pdfs';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	const prefix = 'tool_compare_two_pdfs';
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
			currentSlug: 'compare-two-pdfs',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    .diff-added { background: #d4edda; color: #155724; border-radius: 3px; padding: 0 2px; }
    .diff-removed { background: #f8d7da; color: #721c24; border-radius: 3px; padding: 0 2px; text-decoration: line-through; }
    .diff-neutral { }
    .tools-bar { gap: .5rem; }
    #compareResult { border: 1px solid #dee2e6; border-radius: .25rem; padding: .75rem; background: #f8f9fa; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-6">
        <label class="tool-dropzone mb-2" for="comparePdfAFile">
          <input type="file" id="comparePdfAFile" accept="application/pdf,.pdf">
          <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_file_a'))}</span>
          <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
        </label>
      </div>
      <div class="col-12 col-md-6">
        <label class="tool-dropzone mb-2" for="comparePdfBFile">
          <input type="file" id="comparePdfBFile" accept="application/pdf,.pdf">
          <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_file_b'))}</span>
          <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
        </label>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="compareBtnCompare" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_compare'))}</button>
      <button type="button" id="compareBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="compareBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="compareBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="compareError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="compareStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiProgressHtml({ idPrefix: 'comparePdf', labels: pdfWorkLabels })}
    <div class="row g-2 mb-2">
      <div class="col-12 col-md-6">${pdfWorkUiPreviewHtml({ idPrefix: 'comparePdfA', labels: pdfWorkLabels, heading: t(opts.lang, prefix + '_file_a') })}</div>
      <div class="col-12 col-md-6">${pdfWorkUiPreviewHtml({ idPrefix: 'comparePdfB', labels: pdfWorkLabels, heading: t(opts.lang, prefix + '_file_b') })}</div>
    </div>

    <p id="compareSummary" class="small text-muted mb-2" style="display:none;"></p>
    <p class="small text-muted mb-1">${escapeHtml(t(opts.lang, prefix + '_result_label'))}</p>
    <div id="compareResult" class="mb-3" aria-live="polite"></div>

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
		links: [
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'diff', href: 'https://www.npmjs.com/package/diff' },
		],
	});

	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/diff@5.2.0/dist/diff.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var inputA = document.getElementById('comparePdfAFile');
      var inputB = document.getElementById('comparePdfBFile');
      var btnCompare = document.getElementById('compareBtnCompare');
      var btnDownload = document.getElementById('compareBtnDownload');
      var btnSample = document.getElementById('compareBtnSample');
      var btnClear = document.getElementById('compareBtnClear');
      var errEl = document.getElementById('compareError');
      var statusEl = document.getElementById('compareStatus');
      var summaryEl = document.getElementById('compareSummary');
      var resultEl = document.getElementById('compareResult');
      var work = window.OftPdfWork.bind('comparePdf');
      var previewA = window.OftPdfWork.bind('comparePdfA');
      var previewB = window.OftPdfWork.bind('comparePdfB');
      var busyBtns = [btnCompare, btnSample, btnClear, btnDownload];

      /** 两份 PDF 字节 */
      var bytesA = null;
      var bytesB = null;
      /** 下载用：对比结果 HTML */
      var resultHtml = null;

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        notext: ${JSON.stringify(t(opts.lang, prefix + '_err_notext'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        summaryTpl: ${JSON.stringify(t(opts.lang, prefix + '_summary_tpl'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_warn_pdflib'))},
      };

      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }
      function setStatus(text) { statusEl.textContent = text || ''; }

      function setResult(html, changeBlocksCount) {
        resultHtml = html;
        resultEl.innerHTML = html;
        if (typeof changeBlocksCount === 'number') {
          summaryEl.textContent = msg.summaryTpl.replace('{n}', String(changeBlocksCount));
          summaryEl.style.display = '';
        } else {
          summaryEl.style.display = 'none';
        }
      }

      function downloadResult() {
        if (!resultHtml) return;
        var blob = new Blob([resultHtml], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'pdf-diff.html';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /** 确保 pdfjsLib 已加载（按需动态导入） */
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () { throw new Error('pdfjs'); });
      }

      /**
       * 提取 PDF 文本（不做 OCR）：只读取 text layer。
       * @param {Uint8Array} bytes
       * @returns {Promise<string>}
       */
      function extractText(bytes) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (doc) {
          var parts = [];
          var p = Promise.resolve();
          for (var i = 1; i <= doc.numPages; i++) {
            (function (pageNum) {
              p = p.then(function () {
                return doc.getPage(pageNum).then(function (page) {
                  return page.getTextContent().then(function (tc) {
                    var items = tc && tc.items ? tc.items : [];
                    var line = items.map(function (it) { return it.str; }).join(' ');
                    parts.push(line);
                  });
                });
              });
            })(i);
          }
          return p.then(function () { return parts.join('\\n'); });
        });
      }

      /**
       * 执行文本差异对比并渲染高亮结果。
       * @returns {Promise<void>}
       */
      function runCompare() {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        summaryEl.style.display = 'none';
        resultEl.innerHTML = '';

        if (!bytesA || !bytesB) {
          setErr(msg.empty);
          return Promise.resolve();
        }

        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);

        return window.OftPdfWork.yieldUi()
          .then(function () {
            work.setProgress(15);
            return previewA.showPreview(bytesA);
          })
          .then(function () {
            work.setProgress(30);
            return extractText(bytesA);
          })
          .then(function (textA) {
            if (!textA || !textA.trim()) throw new Error('notext');
            work.setProgress(50);
            return previewB.showPreview(bytesB).then(function () { return textA; });
          })
          .then(function (textA) {
            work.setProgress(65);
            return extractText(bytesB).then(function (textB) { return { textA: textA, textB: textB }; });
          })
          .then(function (data) {
            var textA = data.textA;
            var textB = data.textB;
            work.setProgress(85);

            var changeBlocks = 0;
            var blocks = Diff.diffWordsWithSpace(textA, textB);
            var html = blocks.map(function (b) {
              if (b.added) { changeBlocks += 1; return '<span class=\"diff-added\">' + b.value.replace(/</g, '&lt;') + '</span>'; }
              if (b.removed) { changeBlocks += 1; return '<span class=\"diff-removed\">' + b.value.replace(/</g, '&lt;') + '</span>'; }
              return '<span class=\"diff-neutral\">' + b.value.replace(/</g, '&lt;') + '</span>';
            }).join('');

            setResult(html, changeBlocks);
            btnDownload.disabled = false;
            work.setProgress(100);
            setStatus(msg.done);
          })
          .catch(function (err) {
            var eStr = String(err && err.message ? err.message : err);
            if (/notext/i.test(eStr)) setErr(msg.notext);
            else if (/password/i.test(eStr)) setErr(msg.encrypted);
            else if (/pdfjs/i.test(eStr)) setErr(msg.convertFail);
            else setErr(msg.loadFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultHtml;
          });
      }

      /** 生成一个样例 PDF（仅用于演示差异对比） */
      function makeSamplePdf(label, fileName) {
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            page.drawText(label, { x: 48, y: 170, size: 22, font: font });
            page.drawText('Compare sample', { x: 48, y: 130, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], fileName, { type: 'application/pdf' });
        });
      }

      /** 加载样例：自动生成 A/B PDF 并执行对比 */
      function loadSample() {
        setErr('');
        setStatus(msg.working);
        btnDownload.disabled = true;
        summaryEl.style.display = 'none';
        resultEl.innerHTML = '';

        Promise.all([
          makeSamplePdf('Version A text.', 'a.pdf').then(function (f) { return f.arrayBuffer(); }),
          makeSamplePdf('Version B text.', 'b.pdf').then(function (f) { return f.arrayBuffer(); }),
        ]).then(function (arr) {
          bytesA = new Uint8Array(arr[0]);
          bytesB = new Uint8Array(arr[1]);
          return runCompare();
        }).catch(function () {
          setErr(msg.convertFail);
          setStatus('');
        });
      }

      /** 处理用户上传 */
      inputA.addEventListener('change', function () {
        if (!inputA.files || !inputA.files[0]) return;
        setErr('');
        bytesA = null;
        var f = inputA.files[0];
        f.arrayBuffer().then(function (ab) {
          bytesA = new Uint8Array(ab);
          return previewA.showPreview(bytesA);
        }).catch(function () { setErr(msg.loadFail); });
        inputA.value = '';
      });
      inputB.addEventListener('change', function () {
        if (!inputB.files || !inputB.files[0]) return;
        setErr('');
        bytesB = null;
        var f = inputB.files[0];
        f.arrayBuffer().then(function (ab) {
          bytesB = new Uint8Array(ab);
          return previewB.showPreview(bytesB);
        }).catch(function () { setErr(msg.loadFail); });
        inputB.value = '';
      });

      btnCompare.addEventListener('click', runCompare);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        bytesA = null;
        bytesB = null;
        resultHtml = null;
        resultEl.innerHTML = '';
        summaryEl.style.display = 'none';
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        inputA.value = '';
        inputB.value = '';
        previewA.clearPreview();
        previewB.clearPreview();
        work.hideProgress();
        loadSample();
      });

      // 初始化：自动加载样例并执行对比
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('compare-two-pdfs');
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

