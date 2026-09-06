/**
 * 解锁 PDF 工具页：用已知密码去掉 PDF 打开保护（纯客户端，非破解）。
 * slug: unlock-pdf
 * 规格：work-tasks/unlock-pdf/02-tool-info.md
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
 * 渲染解锁 PDF 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderUnlockPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/unlock-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_unlock_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_unlock_pdf_description');

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
			currentSlug: 'unlock-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .unlock-pdf-meta { font-size: .85rem; color: #6c757d; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_unlock_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone unlock-pdf-drop mb-3" id="unlockPdfDrop" for="unlockPdfFile">
      <input type="file" id="unlockPdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_unlock_pdf_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_unlock_pdf_drop_hint'))}</span>
    </label>

    <p id="unlockPdfMeta" class="unlock-pdf-meta mb-2" style="display:none;"></p>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-6">
        <label class="form-label mb-0" for="unlockPdfPassword">${escapeHtml(t(opts.lang, 'tool_unlock_pdf_password_label'))}</label>
        <input type="password" id="unlockPdfPassword" class="form-control form-control-sm" autocomplete="current-password">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="unlockPdfBtnUnlock" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_unlock_pdf_unlock'))}</button>
      <button type="button" id="unlockPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_unlock_pdf_download'))}</button>
      <button type="button" id="unlockPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_unlock_pdf_sample'))}</button>
      <button type="button" id="unlockPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_unlock_pdf_clear'))}</button>
    </div>

    <p id="unlockPdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="unlockPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="unlockPdfStatus" class="small text-muted mb-2" role="status"></p>
    <p id="unlockPdfStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_unlock_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib (Cantoo fork)', href: 'https://github.com/cantoo-scribe/pdf-lib' }],
	});

	/**
	 * 客户端脚本：用已知打开密码解密后 save 成无加密 PDF。
	 * 官方 pdf-lib@1.17.1 与 pdf-lib-with-encrypt 都不能按密码解密（后者只在 save 时加密），
	 * 故用 Cantoo 分支 @cantoo/pdf-lib（UMD 全局仍是 PDFLib，支持 load({ password })）。
	 */
	const extraBodyHtml = `
  <script src="/vendor/cantoo-pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 样例密码（与 Example 文案一致）。 */
      var SAMPLE_PASSWORD = 'sample';

      var drop = document.getElementById('unlockPdfDrop');
      var fileInput = document.getElementById('unlockPdfFile');
      var metaEl = document.getElementById('unlockPdfMeta');
      var pwdEl = document.getElementById('unlockPdfPassword');
      var btnUnlock = document.getElementById('unlockPdfBtnUnlock');
      var btnDownload = document.getElementById('unlockPdfBtnDownload');
      var btnSample = document.getElementById('unlockPdfBtnSample');
      var btnClear = document.getElementById('unlockPdfBtnClear');
      var warnEl = document.getElementById('unlockPdfWarn');
      var errEl = document.getElementById('unlockPdfError');
      var statusEl = document.getElementById('unlockPdfStatus');
      var statsEl = document.getElementById('unlockPdfStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_empty'))},
        pwdEmpty: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_err_password_empty'))},
        pwdWrong: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_err_password_wrong'))},
        notEncrypted: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_err_not_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_err_load'))},
        unlockFail: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_err_unlock'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_warn_pdflib'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_status_done'))},
        samplePwd: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_status_sample_pwd'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_pages_label'))},
        encryptedLabel: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_encrypted_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_unlock_pdf_stats_tpl'))}
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number, needsPassword: boolean }|null} */
      var source = null;
      /** @type {Uint8Array|null} 解密结果字节 */
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

      /** 判断错误是否与密码相关。 */
      function isPasswordError(err) {
        var s = String(err && (err.message || err) || '');
        return /password|encrypt|encrypted|decrypt|Incorrect/i.test(s);
      }

      /** 清空解密结果。 */
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
        var encTag = source.needsPassword ? ' · ' + msg.encryptedLabel : '';
        metaEl.textContent = source.name + ' · ' + msg.pagesLabel + ': ' + source.pageCount + encTag + ' · ' + formatBytes(source.bytes.length);
        metaEl.style.display = '';
        setWarn(source.bytes.length > SOFT_BYTES ? msg.large : '');
      }

      /**
       * 探测 PDF 是否需要打开密码（先忽略加密读元数据，再看 isEncrypted）。
       * @param {Uint8Array} bytes
       * @returns {Promise<{ pageCount: number, needsPassword: boolean }>}
       */
      function probePdf(bytes) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true }).then(function (doc) {
          return {
            pageCount: doc.getPageCount(),
            needsPassword: !!doc.isEncrypted
          };
        });
      }

      /**
       * 用已知密码解密并返回无加密字节。
       * @param {Uint8Array} bytes
       * @param {string} password
       * @returns {Promise<Uint8Array>}
       */
      function buildUnlocked(bytes, password) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes, { password: password }).then(function (doc) {
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
        return probePdf(bytes).then(function (info) {
          if (!info.needsPassword) {
            source = null;
            setError(msg.notEncrypted);
            return;
          }
          source = {
            name: name || 'document.pdf',
            bytes: bytes,
            pageCount: info.pageCount,
            needsPassword: true
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
          if (isPasswordError(err)) setError(msg.pwdWrong);
          else setError(msg.loadFail);
        });
      }

      /** 执行解锁并启用下载。 */
      function unlock() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return;
        }
        var password = (pwdEl.value || '').trim();
        if (!password) {
          setError(msg.pwdEmpty);
          return;
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return;
        }
        setStatus(msg.working);
        btnUnlock.disabled = true;
        buildUnlocked(source.bytes, password)
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
            else if (isPasswordError(err)) setError(msg.pwdWrong);
            else setError(msg.unlockFail);
            setStatus('');
          })
          .finally(function () {
            btnUnlock.disabled = false;
          });
      }

      /** 下载解密结果 unlocked.pdf。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'unlocked.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成单页加密样例 PDF 字节（密码 sample）。
       * @returns {Promise<Uint8Array>}
       */
      function makeEncryptedSampleBytes() {
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([595, 420]);
          page.drawText('Sample page for unlock-pdf', {
            x: 48,
            y: 360,
            size: 18,
            color: PDFLib.rgb(0.11, 0.11, 0.11)
          });
          page.drawText('Enter password sample, then download unlocked.pdf.', {
            x: 48,
            y: 330,
            size: 12,
            color: PDFLib.rgb(0.35, 0.35, 0.35)
          });
          if (typeof doc.encrypt !== 'function') {
            return Promise.reject(new Error('noencrypt'));
          }
          doc.encrypt({
            userPassword: SAMPLE_PASSWORD,
            ownerPassword: SAMPLE_PASSWORD
          });
          return doc.save();
        });
      }

      /**
       * 进页样例：加密 1 页 PDF + 密码 sample → 自动解锁 → 可下载 unlocked.pdf。
       */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        pwdEl.value = SAMPLE_PASSWORD;
        return makeEncryptedSampleBytes().then(function (bytes) {
          return setSource(bytes, 'sample-unlock.pdf');
        }).then(function () {
          if (!source) return;
          setStatus(msg.working);
          return buildUnlocked(source.bytes, SAMPLE_PASSWORD).then(function (outBytes) {
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
          else if (String(err && err.message) === 'noencrypt') setError(msg.unlockFail);
          else if (isPasswordError(err)) setError(msg.pwdWrong);
          else setError(msg.unlockFail);
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

      btnUnlock.addEventListener('click', unlock);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实解密结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('unlock-pdf');
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
