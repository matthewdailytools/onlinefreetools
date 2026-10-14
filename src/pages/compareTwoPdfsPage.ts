/**
 * 对比两份 PDF：提取可选中文本，用 jsdiff 高亮增删，本地预览并下载 HTML 差异。
 * slug: compare-two-pdfs（见 work-tasks/compare-two-pdfs/02-tool-info.md）。
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
	/** 取本工具文案。 */
	const tx = (key: string) => t(opts.lang, `${prefix}_${key}` as never);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

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
    .tools-bar { gap: .5rem; }
    #compareResult { border: 1px solid #dee2e6; border-radius: .25rem; padding: .75rem; background: #f8f9fa; max-height: 28rem; overflow: auto; white-space: pre-wrap; word-break: break-word; }
    .compare-legend { display:flex; flex-wrap:wrap; gap:.75rem; font-size:.85rem; margin:.35rem 0 .75rem; }
    .compare-legend span { display:inline-flex; align-items:center; gap:.35rem; }
    .compare-legend i { width:.85rem; height:.85rem; border-radius:2px; display:inline-block; }
    .compare-legend .lg-add { background:#d4edda; border:1px solid #155724; }
    .compare-legend .lg-del { background:#f8d7da; border:1px solid #721c24; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-6">
        <label class="tool-dropzone mb-2" for="comparePdfAFile">
          <input type="file" id="comparePdfAFile" accept="application/pdf,.pdf">
          <span class="tool-dropzone-title">${escapeHtml(tx('file_a'))}</span>
          <span class="tool-dropzone-hint">${escapeHtml(tx('choose_file'))}</span>
        </label>
      </div>
      <div class="col-12 col-md-6">
        <label class="tool-dropzone mb-2" for="comparePdfBFile">
          <input type="file" id="comparePdfBFile" accept="application/pdf,.pdf">
          <span class="tool-dropzone-title">${escapeHtml(tx('file_b'))}</span>
          <span class="tool-dropzone-hint">${escapeHtml(tx('choose_file'))}</span>
        </label>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="compareBtnCompare" class="btn btn-primary btn-sm">${escapeHtml(tx('compare'))}</button>
      <button type="button" id="compareBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="compareBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="compareBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="compareAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="mt-2">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="compareIgnoreCase">
          <label class="form-check-label" for="compareIgnoreCase">${escapeHtml(tx('ignore_case'))}</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="compareIgnoreSpace">
          <label class="form-check-label" for="compareIgnoreSpace">${escapeHtml(tx('ignore_space'))}</label>
        </div>
        <p class="form-text mb-0">${escapeHtml(tx('advanced_hint'))}</p>
      </div>
    </details>

    <p id="compareError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="compareStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiProgressHtml({ idPrefix: 'comparePdf', labels: pdfWorkLabels })}
    <div class="row g-2 mb-2">
      <div class="col-12 col-md-6">${pdfWorkUiPreviewHtml({ idPrefix: 'comparePdfA', labels: pdfWorkLabels, heading: tx('file_a') })}</div>
      <div class="col-12 col-md-6">${pdfWorkUiPreviewHtml({ idPrefix: 'comparePdfB', labels: pdfWorkLabels, heading: tx('file_b') })}</div>
    </div>

    <p id="compareSummary" class="small text-muted mb-2" style="display:none;"></p>
    <div class="compare-legend" aria-hidden="true">
      <span><i class="lg-add"></i>${escapeHtml(tx('legend_added'))}</span>
      <span><i class="lg-del"></i>${escapeHtml(tx('legend_removed'))}</span>
    </div>
    <p class="small text-muted mb-1">${escapeHtml(tx('result_label'))}</p>
    <div id="compareResult" class="mb-3" aria-live="polite"></div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://mozilla.github.io/pdf.js/' },
			{ label: tx('ref_b_label'), href: 'https://www.npmjs.com/package/diff' },
		],
	});

	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/diff/diff.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var inputA = document.getElementById('comparePdfAFile');
      var inputB = document.getElementById('comparePdfBFile');
      var btnCompare = document.getElementById('compareBtnCompare');
      var btnDownload = document.getElementById('compareBtnDownload');
      var btnSample = document.getElementById('compareBtnSample');
      var btnClear = document.getElementById('compareBtnClear');
      var ignoreCaseEl = document.getElementById('compareIgnoreCase');
      var ignoreSpaceEl = document.getElementById('compareIgnoreSpace');
      var errEl = document.getElementById('compareError');
      var statusEl = document.getElementById('compareStatus');
      var summaryEl = document.getElementById('compareSummary');
      var resultEl = document.getElementById('compareResult');
      var work = window.OftPdfWork.bind('comparePdf');
      var previewA = window.OftPdfWork.bind('comparePdfA');
      var previewB = window.OftPdfWork.bind('comparePdfB');
      var busyBtns = [btnCompare, btnSample, btnClear, btnDownload, ignoreCaseEl, ignoreSpaceEl];

      /** 两份 PDF 字节。 */
      var bytesA = null;
      var bytesB = null;
      /** 下载用：对比结果 HTML。 */
      var resultHtml = null;
      /** 提取缓存，避免仅改选项时重复解码。 */
      var textCacheA = null;
      var textCacheB = null;

      var msg = {
        empty: ${JSON.stringify(tx('empty'))},
        encrypted: ${JSON.stringify(tx('err_encrypted'))},
        loadFail: ${JSON.stringify(tx('err_load'))},
        convertFail: ${JSON.stringify(tx('err_convert'))},
        notext: ${JSON.stringify(tx('err_notext'))},
        working: ${JSON.stringify(tx('status_working'))},
        done: ${JSON.stringify(tx('status_done'))},
        identical: ${JSON.stringify(tx('status_identical'))},
        summaryTpl: ${JSON.stringify(tx('summary_tpl'))},
        pagesTpl: ${JSON.stringify(tx('pages_tpl'))}
      };

      /** 用 {key} 填充模板。 */
      function fill(tpl, map) {
        return tpl.replace(/\\{(\\w+)\\}/g, function (_, k) { return map[k] != null ? map[k] : ''; });
      }

      /** 显示或隐藏错误。 */
      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行。 */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /**
       * 将 PDF 提取文本转义为安全 HTML。
       * @param {unknown} value 文本片段
       * @returns {string}
       */
      function escapeDiffText(value) {
        return String(value == null ? '' : value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }

      /**
       * 按当前选项规范化文本后再 diff。
       * @param {string} s 原文
       * @returns {string}
       */
      function normalize(s) {
        var out = String(s || '');
        if (ignoreSpaceEl.checked) out = out.replace(/\\s+/g, ' ').trim();
        if (ignoreCaseEl.checked) out = out.toLowerCase();
        return out;
      }

      /**
       * 写入差异 HTML 与摘要。
       * @param {string} html 高亮 HTML
       * @param {{ added: number, removed: number, pagesA: number, pagesB: number }} stats 统计
       */
      function setResult(html, stats) {
        resultHtml = html;
        resultEl.innerHTML = html;
        summaryEl.textContent =
          fill(msg.summaryTpl, { added: String(stats.added), removed: String(stats.removed) }) +
          ' · ' +
          fill(msg.pagesTpl, { a: String(stats.pagesA), b: String(stats.pagesB) });
        summaryEl.style.display = '';
      }

      /** 下载 HTML 差异。 */
      function downloadResult() {
        if (!resultHtml) return;
        var blob = new Blob(
          ['<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>PDF text diff</title></head><body>', resultHtml, '</body></html>'],
          { type: 'text/html;charset=utf-8' }
        );
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'pdf-diff.html';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /** 确保 pdfjsLib 已加载。 */
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('/vendor/pdfjs/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () { throw new Error('pdfjs'); });
      }

      /**
       * 提取 PDF 文本层（不做 OCR）。
       * @param {Uint8Array} bytes PDF 字节
       * @returns {Promise<{ text: string, pages: number }>}
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
                    parts.push(items.map(function (it) { return it.str; }).join(' '));
                  });
                });
              });
            })(i);
          }
          return p.then(function () {
            return { text: parts.join('\\n'), pages: doc.numPages };
          });
        });
      }

      /** 执行文本差异对比。 */
      function runCompare() {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        summaryEl.style.display = 'none';
        resultEl.innerHTML = '';
        resultHtml = null;

        if (!bytesA || !bytesB) {
          setErr(msg.empty);
          return Promise.resolve();
        }

        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);

        var pagesA = 0;
        var pagesB = 0;

        return window.OftPdfWork.yieldUi()
          .then(function () {
            work.setProgress(10);
            return previewA.showPreview(bytesA);
          })
          .then(function () {
            work.setProgress(25);
            if (textCacheA) return textCacheA;
            return extractText(bytesA).then(function (out) {
              textCacheA = out;
              return out;
            });
          })
          .then(function (outA) {
            if (!outA.text || !outA.text.trim()) throw new Error('notext');
            pagesA = outA.pages;
            work.setProgress(45);
            return previewB.showPreview(bytesB).then(function () { return outA; });
          })
          .then(function (outA) {
            work.setProgress(60);
            if (textCacheB) return { outA: outA, outB: textCacheB };
            return extractText(bytesB).then(function (outB) {
              textCacheB = outB;
              return { outA: outA, outB: outB };
            });
          })
          .then(function (data) {
            if (!data.outB.text || !data.outB.text.trim()) throw new Error('notext');
            pagesB = data.outB.pages;
            work.setProgress(80);
            var left = normalize(data.outA.text);
            var right = normalize(data.outB.text);
            var added = 0;
            var removed = 0;
            var blocks = Diff.diffWordsWithSpace(left, right);
            var html = blocks.map(function (b) {
              var safeValue = escapeDiffText(b.value);
              if (b.added) {
                added += 1;
                return '<span class=\"diff-added\">' + safeValue + '</span>';
              }
              if (b.removed) {
                removed += 1;
                return '<span class=\"diff-removed\">' + safeValue + '</span>';
              }
              return '<span class=\"diff-neutral\">' + safeValue + '</span>';
            }).join('');
            setResult(html, { added: added, removed: removed, pagesA: pagesA, pagesB: pagesB });
            btnDownload.disabled = false;
            work.setProgress(100);
            setStatus(added === 0 && removed === 0 ? msg.identical : msg.done);
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

      /**
       * 生成样例 PDF。
       * @param {string} line1 第一行
       * @param {string} line2 第二行
       * @param {string} fileName 文件名
       */
      function makeSamplePdf(line1, line2, fileName) {
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText(line1, { x: 48, y: 180, size: 16, font: font });
            page.drawText(line2, { x: 48, y: 150, size: 14, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], fileName, { type: 'application/pdf' });
        });
      }

      /** 加载样例：A/B 各一页，故意改一词以便看到红绿高亮。 */
      function loadSample() {
        setErr('');
        setStatus(msg.working);
        btnDownload.disabled = true;
        summaryEl.style.display = 'none';
        resultEl.innerHTML = '';
        resultHtml = null;
        textCacheA = null;
        textCacheB = null;
        ignoreCaseEl.checked = false;
        ignoreSpaceEl.checked = false;

        Promise.all([
          makeSamplePdf('Contract draft v1', 'Payment due in thirty days.', 'a.pdf').then(function (f) { return f.arrayBuffer(); }),
          makeSamplePdf('Contract draft v2', 'Payment due in sixty days.', 'b.pdf').then(function (f) { return f.arrayBuffer(); }),
        ]).then(function (arr) {
          bytesA = new Uint8Array(arr[0]);
          bytesB = new Uint8Array(arr[1]);
          return runCompare();
        }).catch(function () {
          setErr(msg.convertFail);
          setStatus('');
        });
      }

      /** 真正清空，不重新加载样例。 */
      function clearAll() {
        bytesA = null;
        bytesB = null;
        textCacheA = null;
        textCacheB = null;
        resultHtml = null;
        resultEl.innerHTML = '';
        summaryEl.style.display = 'none';
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        inputA.value = '';
        inputB.value = '';
        ignoreCaseEl.checked = false;
        ignoreSpaceEl.checked = false;
        previewA.clearPreview();
        previewB.clearPreview();
        work.hideProgress();
      }

      inputA.addEventListener('change', function () {
        if (!inputA.files || !inputA.files[0]) return;
        setErr('');
        bytesA = null;
        textCacheA = null;
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
        textCacheB = null;
        var f = inputB.files[0];
        f.arrayBuffer().then(function (ab) {
          bytesB = new Uint8Array(ab);
          return previewB.showPreview(bytesB);
        }).catch(function () { setErr(msg.loadFail); });
        inputB.value = '';
      });

      ignoreCaseEl.addEventListener('change', function () { if (bytesA && bytesB) runCompare(); });
      ignoreSpaceEl.addEventListener('change', function () { if (bytesA && bytesB) runCompare(); });

      btnCompare.addEventListener('click', runCompare);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', clearAll);

      /** 进页自动跑样例。 */
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
