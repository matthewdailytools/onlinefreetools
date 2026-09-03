/**
 * Convert HTML to PDF 工具页：把 HTML 源码转换成 PDF（纯客户端导出）。
 * slug: convert-html-to-pdf
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
 * 渲染 convert-html-to-pdf 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertHtmlToPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-html-to-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	const prefix = 'tool_convert_html_to_pdf';
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
			currentSlug: 'convert-html-to-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    #htmlConvertPreview { border: 1px solid #dee2e6; border-radius: .25rem; padding: .75rem; background: #f8f9fa; }
    textarea#htmlConvertSource { min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-12 col-lg-6">
        <label class="form-label" for="htmlConvertSource">${escapeHtml(t(opts.lang, prefix + '_html_label'))}</label>
        <textarea id="htmlConvertSource" class="form-control form-control-sm" placeholder="<h1>Hello</h1><p>...</p>"></textarea>
        <div class="form-text">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</div>
      </div>
      <div class="col-12 col-lg-6">
        <p class="small text-muted mb-2">${escapeHtml(t(opts.lang, prefix + '_preview_label'))}</p>
        <div id="htmlConvertPreview" aria-live="polite"></div>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="htmlConvertBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_convert'))}</button>
      <button type="button" id="htmlConvertBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="htmlConvertBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="htmlConvertBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="htmlConvertError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="htmlConvertStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'htmlPdf', labels: pdfWorkLabels })}

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
		links: [{ label: 'html2pdf.js', href: 'https://github.com/eKoopmans/html2pdf.js' }],
	});

	/**
	 * 客户端脚本：html2pdf.js 将 HTML 转成 PDF；loadSample 自动生成可预览的页面并导出结果。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.2/dist/html2pdf.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var prefix = ${JSON.stringify(prefix)};

      var textarea = document.getElementById('htmlConvertSource');
      var previewEl = document.getElementById('htmlConvertPreview');
      var btnConvert = document.getElementById('htmlConvertBtnConvert');
      var btnDownload = document.getElementById('htmlConvertBtnDownload');
      var btnSample = document.getElementById('htmlConvertBtnSample');
      var btnClear = document.getElementById('htmlConvertBtnClear');
      var errEl = document.getElementById('htmlConvertError');
      var statusEl = document.getElementById('htmlConvertStatus');
      var work = window.OftPdfWork.bind('htmlPdf');
      var busyBtns = [btnConvert, btnSample, btnClear, btnDownload];

      var resultBytes = null;

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        sampleTitle: ${JSON.stringify(t(opts.lang, prefix + '_example'))},
      };

      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** 触发下载（以 bytes 方式） */
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
       * 使用 html2pdf.js 把 HTML 转成 PDF bytes。
       * @returns {Promise<Uint8Array>}
       */
      function convertHtmlToPdfBytes() {
        return new Promise(function (resolve, reject) {
          try {
            var html = textarea.value || '';
            if (!html.trim()) return reject(new Error('empty'));
            previewEl.innerHTML = html;

            // html2pdf 的 options 以尽量稳定为目标
            var opt = {
              margin: 0,
              filename: 'converted.pdf',
              image: { type: 'jpeg', quality: 0.95 },
              html2canvas: { scale: 2, useCORS: true },
              jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
            };

            // 直接导出到 blob
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

      /** 点击“转换” */
      btnConvert.addEventListener('click', function () {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        window.OftPdfWork.yieldUi()
          .then(function () { return convertHtmlToPdfBytes(); })
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
            var eStr = String(err && err.message ? err.message : err);
            if (/password/i.test(eStr)) setErr(msg.encrypted);
            else if (/empty/i.test(eStr)) setErr(msg.empty);
            else setErr(msg.convertFail);
            setStatus('');
            work.clearPreview();
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      });

      btnDownload.addEventListener('click', downloadResult);

      /** 加载样例：写入示例 HTML，并立即转换生成 PDF */
      function loadSample() {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        var sampleHtml = '<h1 style=\"margin:0 0 12px 0;\">Hello HTML</h1><p style=\"margin:0;\">Sample paragraph from onlinefreetools.</p><hr/><p style=\"margin:0;\">This is a <strong>demo</strong> generated on page entry.</p>';
        textarea.value = sampleHtml;
        btnConvert.click();
      }

      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        setErr('');
        setStatus('');
        textarea.value = '';
        previewEl.innerHTML = '';
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        work.hideProgress();
      });

      // 初始化：自动展示样例并转换
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('convert-html-to-pdf');
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

