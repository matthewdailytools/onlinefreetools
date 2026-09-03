/**
 * Check PDF/A compliance 工具页：在浏览器端对 PDF/A 关键规则做“可解释的检查”（非严格 PDF/A 验证器）。
 * slug: check-pdf-a-compliance
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
 * 渲染 check-pdf-a-compliance 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCheckPdfACompliancePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/check-pdf-a-compliance';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	const prefix = 'tool_check_pdf_a_compliance';
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
			currentSlug: 'check-pdf-a-compliance',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    .check-results li { display:flex; justify-content:space-between; gap:1rem; }
    .check-pass { color: #198754; font-weight: 600; }
    .check-fail { color: #dc3545; font-weight: 600; }
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="checkPdfADrop" for="checkPdfAFile">
      <input type="file" id="checkPdfAFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="checkPdfABtnCheck" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_check'))}</button>
      <button type="button" id="checkPdfABtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(
				opts.lang,
				prefix + '_sample'
			)}</button>
      <button type="button" id="checkPdfABtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(
				opts.lang,
				prefix + '_clear'
			)}</button>
    </div>

    <p id="checkPdfAError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="checkPdfAStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'checkPdfA', labels: pdfWorkLabels })}

    <h2 class="h5 mt-3">${escapeHtml(t(opts.lang, prefix + '_results_label'))}</h2>
    <ul id="checkPdfAResults" class="check-results list-unstyled"></ul>

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
			{ label: 'PDF/A', href: 'https://en.wikipedia.org/wiki/PDF/A' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
		],
	});

	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var fileInput = document.getElementById('checkPdfAFile');
      var btnCheck = document.getElementById('checkPdfABtnCheck');
      var btnSample = document.getElementById('checkPdfABtnSample');
      var btnClear = document.getElementById('checkPdfABtnClear');
      var errEl = document.getElementById('checkPdfAError');
      var statusEl = document.getElementById('checkPdfAStatus');
      var resultsEl = document.getElementById('checkPdfAResults');
      var work = window.OftPdfWork.bind('checkPdfA');
      var busyBtns = [btnCheck, btnSample, btnClear];

      var sourceBytes = null;

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        notext: ${JSON.stringify(t(opts.lang, prefix + '_err_notext'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        pass: ${JSON.stringify(t(opts.lang, prefix + '_pass'))},
        fail: ${JSON.stringify(t(opts.lang, prefix + '_fail'))},
        warn: ${JSON.stringify(t(opts.lang, prefix + '_warn'))},
      };

      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      function setResults(results) {
        resultsEl.innerHTML = '';
        results.forEach(function (r) {
          var li = document.createElement('li');
          li.className = 'mb-1';
          var left = document.createElement('span');
          left.textContent = r.label;
          var right = document.createElement('span');
          right.textContent = r.ok ? msg.pass : msg.fail;
          right.className = r.ok ? 'check-pass' : 'check-fail';
          li.appendChild(left);
          li.appendChild(right);
          resultsEl.appendChild(li);
        });
      }

      /**
       * PDF/A 规则检查（轻量版）：不做完整 Verapdf 校验，只做可解释的“关键特征”检查。
       * @param {Uint8Array} bytes
       * @returns {Array<{label: string, ok: boolean}>}
       */
      function checkPdfA(bytes) {
        // 把 bytes 转成尽量可读的字符串用于关键词探测
        var text = '';
        try {
          // latin1 近似：尽量保留字节值到字符映射
          var decoder = new TextDecoder('latin1');
          text = decoder.decode(bytes);
        } catch (e) {
          // 兜底：部分浏览器不支持 TextDecoder
          var arr = [];
          for (var i = 0; i < Math.min(bytes.length, 200000); i++) arr.push(String.fromCharCode(bytes[i]));
          text = arr.join('');
        }

        var results = [];

        // 1) PDF 版本：%PDF-1.x
        var verMatch = text.match(/%PDF-(\\d+\\.\\d+)/i);
        var pdfVersion = verMatch ? verMatch[1] : '';
        results.push({ label: 'PDF version present (%PDF-...)', ok: Boolean(pdfVersion) });

        // 2) Linearized（快视图）特征
        // 注意：是否允许/要求不同 PDF/A profile，这里只做“发现与否”检查。
        var isLinearized = /Linearized/i.test(text);
        results.push({ label: 'Linearized hint detected', ok: isLinearized === false });

        // 3) 元数据：检查是否出现 /Type /Metadata 或 XMP
        var hasMetadataObj = /\\/Type\\s*\\/Metadata/i.test(text);
        var hasXmp = /XMP/i.test(text);
        results.push({ label: 'XMP / Metadata object markers', ok: Boolean(hasMetadataObj || hasXmp) });

        // 4) 字体引用：检查是否出现 /Font（粗粒度）
        var hasFontRefs = /\\/Font/i.test(text);
        results.push({ label: 'Font references (/Font)', ok: hasFontRefs });

        return results;
      }

      /** 执行检查并渲染结果 */
      function runCheck() {
        setErr('');
        setStatus('');
        resultsEl.innerHTML = '';
        if (!sourceBytes) {
          setErr(msg.empty);
          return Promise.resolve();
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () {
            work.setProgress(40);
            var results = checkPdfA(sourceBytes);
            setResults(results);
            work.setProgress(80);
            return work.showPreview(sourceBytes);
          })
          .then(function () {
            work.setProgress(100);
            setStatus(msg.done);
          })
          .catch(function () {
            setErr(msg.convertFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
          });
      }

      /** 生成样例 PDF 并自动检查 */
      function makeSamplePdf() {
        if (!window.PDFLib || !window.PDFLib.PDFDocument) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText('PDF/A check sample', { x: 48, y: 170, size: 18, font: font });
            page.drawText('This is a lightweight browser-side check.', { x: 48, y: 130, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 入口样例：生成样例 PDF 并立即执行检查。
       * 注：必须使用函数名 loadSample()，用于 prerender smoke 校验。
       */
      function loadSample() {
        return makeSamplePdf()
          .then(function (bytes) {
            sourceBytes = bytes;
            return runCheck();
          })
          .catch(function () {
            setErr(msg.convertFail);
            setStatus('');
          });
      }

      fileInput.addEventListener('change', function () {
        if (!fileInput.files || !fileInput.files[0]) return;
        setErr('');
        setStatus('');
        resultsEl.innerHTML = '';
        work.clearPreview();
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        var f = fileInput.files[0];
        f.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          return work.showPreview(sourceBytes);
        }).then(function () {
          setStatus('');
        }).catch(function () {
          setErr(msg.loadFail);
          sourceBytes = null;
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
        fileInput.value = '';
      });

      btnCheck.addEventListener('click', runCheck);
      btnClear.addEventListener('click', function () {
        sourceBytes = null;
        resultsEl.innerHTML = '';
        setErr('');
        setStatus('');
        fileInput.value = '';
        work.clearPreview();
        work.hideProgress();
        loadSample();
      });
      btnSample.addEventListener('click', function () {
        setErr('');
        setStatus('');
        loadSample().catch(function () {
          setErr(msg.loadFail);
          setStatus('');
        });
      });

      // 初始化：载入样例并自动检查
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('check-pdf-a-compliance');
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

