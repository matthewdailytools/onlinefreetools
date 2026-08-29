/**
 * 保护 PDF 工具页：pdf-lib 用户密码加密（纯客户端）。
 * slug: protect-pdf
 * 规格：work-tasks/protect-pdf/02-tool-info.md
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
 * 渲染保护 PDF 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderProtectPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/protect-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_protect_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_protect_pdf_description');

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
			currentSlug: 'protect-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .protect-pdf-meta { font-size: .85rem; color: #6c757d; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_protect_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone protect-pdf-drop mb-3" id="protectPdfDrop" for="protectPdfFile">
      <input type="file" id="protectPdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_protect_pdf_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_protect_pdf_drop_hint'))}</span>
    </label>

    <p id="protectPdfMeta" class="protect-pdf-meta mb-2" style="display:none;"></p>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-6">
        <label class="form-label mb-0" for="protectPdfPassword">${escapeHtml(t(opts.lang, 'tool_protect_pdf_password_label'))}</label>
        <input type="password" id="protectPdfPassword" class="form-control form-control-sm" autocomplete="new-password">
      </div>
      <div class="col-12 col-md-6">
        <label class="form-label mb-0" for="protectPdfConfirm">${escapeHtml(t(opts.lang, 'tool_protect_pdf_confirm_label'))}</label>
        <input type="password" id="protectPdfConfirm" class="form-control form-control-sm" autocomplete="new-password">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="protectPdfBtnProtect" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_protect_pdf_protect'))}</button>
      <button type="button" id="protectPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_protect_pdf_download'))}</button>
      <button type="button" id="protectPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_protect_pdf_sample'))}</button>
      <button type="button" id="protectPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_protect_pdf_clear'))}</button>
    </div>

    <p id="protectPdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="protectPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="protectPdfStatus" class="small text-muted mb-2" role="status"></p>
    <p id="protectPdfStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_protect_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

  /**
   * 客户端脚本：加载 PDF → encrypt({ userPassword, ownerPassword }) → save。
   * 注：官方 pdf-lib@1.17.1 无 PDFDocument.encrypt，故用 pdf-lib-with-encrypt（API 兼容）。
   */
  const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib-with-encrypt@1.2.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 样例密码（与 Example 文案一致）。 */
      var SAMPLE_PASSWORD = 'sample';

      var drop = document.getElementById('protectPdfDrop');
      var fileInput = document.getElementById('protectPdfFile');
      var metaEl = document.getElementById('protectPdfMeta');
      var pwdEl = document.getElementById('protectPdfPassword');
      var confirmEl = document.getElementById('protectPdfConfirm');
      var btnProtect = document.getElementById('protectPdfBtnProtect');
      var btnDownload = document.getElementById('protectPdfBtnDownload');
      var btnSample = document.getElementById('protectPdfBtnSample');
      var btnClear = document.getElementById('protectPdfBtnClear');
      var warnEl = document.getElementById('protectPdfWarn');
      var errEl = document.getElementById('protectPdfError');
      var statusEl = document.getElementById('protectPdfStatus');
      var statsEl = document.getElementById('protectPdfStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_empty'))},
        pwdEmpty: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_err_password_empty'))},
        pwdMismatch: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_err_password_mismatch'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_err_load'))},
        protectFail: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_err_protect'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_warn_pdflib'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_status_done'))},
        samplePwd: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_status_sample_pwd'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_protect_pdf_stats_tpl'))}
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} */
      var source = null;
      /** @type {Uint8Array|null} 加密结果字节 */
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

      /** 校验密码字段：非空且一致。 */
      function validatePasswords() {
        var pwd = (pwdEl.value || '').trim();
        var confirm = (confirmEl.value || '').trim();
        if (!pwd) {
          setError(msg.pwdEmpty);
          return null;
        }
        if (pwd !== confirm) {
          setError(msg.pwdMismatch);
          return null;
        }
        return pwd;
      }

      /** 清空加密结果。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 刷新元信息与软警告。 */
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
       * 将加载错误映射为可读文案。
       * @param {unknown} err
       */
      function mapLoadError(err) {
        var s = String(err && (err.message || err) || '');
        if (/password|encrypt|encrypted/i.test(s)) return msg.encrypted;
        return msg.loadFail;
      }

      /**
       * 对 PDF 字节加密并返回新字节。
       * @param {Uint8Array} bytes
       * @param {string} password
       * @returns {Promise<Uint8Array>}
       */
      function buildProtected(bytes, password) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function (doc) {
          if (typeof doc.encrypt !== 'function') {
            return Promise.reject(new Error('noencrypt'));
          }
          doc.encrypt({
            userPassword: password,
            ownerPassword: password
          });
          return doc.save();
        });
      }

      /**
       * 设置源 PDF 并更新 UI。
       * @param {Uint8Array} bytes
       * @param {string} name
       */
      function setSource(bytes, name) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function (doc) {
          source = {
            name: name || 'document.pdf',
            bytes: bytes,
            pageCount: doc.getPageCount()
          };
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

      /** 执行加密并启用下载。 */
      function protect() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return;
        }
        var password = validatePasswords();
        if (!password) return;
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return;
        }
        setStatus(msg.working);
        btnProtect.disabled = true;
        buildProtected(source.bytes, password)
          .then(function (bytes) {
            resultBytes = bytes;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{bytes}', formatBytes(bytes.length))
              .replace('{pages}', String(source.pageCount));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            if (String(err && err.message) === 'pdflib') setError(msg.pdflibMissing);
            else if (String(err && err.message) === 'noencrypt') setError(msg.protectFail);
            else setError(mapLoadError(err) === msg.loadFail ? msg.protectFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnProtect.disabled = false;
          });
      }

      /** 下载加密结果 protected.pdf。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'protected.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成单页样例 PDF 字节（未加密）。
       * @returns {Promise<Uint8Array>}
       */
      function makeSamplePdfBytes() {
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([595, 420]);
          page.drawText('Sample page for protect-pdf', {
            x: 48,
            y: 360,
            size: 18,
            color: PDFLib.rgb(0.11, 0.11, 0.11)
          });
          page.drawText('Set a password, then download protected.pdf.', {
            x: 48,
            y: 330,
            size: 12,
            color: PDFLib.rgb(0.35, 0.35, 0.35)
          });
          return doc.save();
        });
      }

      /**
       * 进页样例：1 页 PDF + 密码 sample → 可下载 protected.pdf。
       */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        pwdEl.value = SAMPLE_PASSWORD;
        confirmEl.value = SAMPLE_PASSWORD;
        return makeSamplePdfBytes().then(function (bytes) {
          return setSource(bytes, 'sample-protect.pdf');
        }).then(function () {
          if (!source) return;
          setStatus(msg.working);
          return buildProtected(source.bytes, SAMPLE_PASSWORD).then(function (outBytes) {
            resultBytes = outBytes;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{bytes}', formatBytes(outBytes.length))
              .replace('{pages}', String(source.pageCount));
            statsEl.style.display = '';
            setStatus(msg.samplePwd.replace('{pwd}', SAMPLE_PASSWORD));
          });
        }).catch(function (err) {
          if (String(err && err.message) === 'pdflib') setError(msg.pdflibMissing);
          else if (String(err && err.message) === 'noencrypt') setError(msg.protectFail);
          else setError(msg.protectFail);
          setStatus('');
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
        pwdEl.value = '';
        confirmEl.value = '';
        clearResult();
        refreshMeta();
        setError('');
        setStatus('');
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

      btnProtect.addEventListener('click', protect);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实加密结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('protect-pdf');
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
