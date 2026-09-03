/**
 * 为 PDF 添加可见「数字标记」：计算 SHA-256，盖时间戳 + 哈希前缀框（非证书 PKI 签名）。
 * slug: add-digital-signature-to-pdf
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
 * 渲染 add-digital-signature-to-pdf 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderAddDigitalSignatureToPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径。 */
	const toolPath = '/tools/add-digital-signature-to-pdf';
	/** 当前语言规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	/** 文案 i18n 前缀。 */
	const prefix = 'tool_add_digital_signature_to_pdf';
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
			currentSlug: 'add-digital-signature-to-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** PDF 进度/预览共用文案。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #digiSigHash { word-break: break-all; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="digiSigDrop" for="digiSigFile">
      <input type="file" id="digiSigFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <p id="digiSigMeta" class="small text-muted mb-2" style="display:none;"></p>

    <div class="row g-2 mb-2">
      <div class="col-4">
        <label class="form-label" for="digiSigX">${escapeHtml(t(opts.lang, prefix + '_x_label'))}</label>
        <input id="digiSigX" class="form-control form-control-sm" type="number" value="48">
      </div>
      <div class="col-4">
        <label class="form-label" for="digiSigY">${escapeHtml(t(opts.lang, prefix + '_y_label'))}</label>
        <input id="digiSigY" class="form-control form-control-sm" type="number" value="48">
      </div>
      <div class="col-4">
        <label class="form-label" for="digiSigPage">${escapeHtml(t(opts.lang, prefix + '_page_label'))}</label>
        <input id="digiSigPage" class="form-control form-control-sm" type="number" value="1" min="1" step="1">
      </div>
    </div>

    <p class="small text-muted mb-1">${escapeHtml(t(opts.lang, prefix + '_hash_label'))}</p>
    <p id="digiSigHash" class="small mb-2" aria-live="polite"></p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="digiSigBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_apply'))}</button>
      <button type="button" id="digiSigBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="digiSigBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="digiSigBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="digiSigError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="digiSigStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'digiSig', labels: pdfWorkLabels })}

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
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
			{ label: 'SubtleCrypto digest', href: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
		],
	});

	/**
	 * 客户端脚本：SHA-256 + 可见 Digitally marked 框（诚实说明非 PKI）。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 文件输入。 */
      var fileInput = document.getElementById('digiSigFile');
      /** 拖放区。 */
      var dropEl = document.getElementById('digiSigDrop');
      /** 元信息。 */
      var metaEl = document.getElementById('digiSigMeta');
      /** 哈希展示。 */
      var hashEl = document.getElementById('digiSigHash');
      /** X 坐标。 */
      var xInput = document.getElementById('digiSigX');
      /** Y 坐标。 */
      var yInput = document.getElementById('digiSigY');
      /** 页码（从 1 起）。 */
      var pageInput = document.getElementById('digiSigPage');
      /** 盖章按钮。 */
      var btnApply = document.getElementById('digiSigBtnApply');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('digiSigBtnDownload');
      /** 样例按钮。 */
      var btnSample = document.getElementById('digiSigBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('digiSigBtnClear');
      /** 错误行。 */
      var errEl = document.getElementById('digiSigError');
      /** 状态行。 */
      var statusEl = document.getElementById('digiSigStatus');
      /** 进度 + 结果 PDF 预览。 */
      var work = window.OftPdfWork.bind('digiSig');
      /** 忙碌按钮组。 */
      var busyBtns = [btnApply, btnSample, btnClear, btnDownload];

      /** 源 PDF 字节。 */
      var sourceBytes = null;
      /** 源文件名。 */
      var sourceName = '';
      /** 盖章后 PDF。 */
      var resultBytes = null;
      /** 最近一次完整 SHA-256 十六进制。 */
      var lastHash = '';

      /** 页面可见文案。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        crypto: ${JSON.stringify(t(opts.lang, prefix + '_err_crypto'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
        marked: ${JSON.stringify(t(opts.lang, prefix + '_marked_text'))}
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
        metaEl.textContent = name + ' · ' + (bytesLen / 1024).toFixed(1) + ' KB';
        metaEl.style.display = '';
      }

      /** pdf-lib 是否可用。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /**
       * 把 ArrayBuffer 转十六进制。
       * @param {ArrayBuffer} buf
       * @returns {string}
       */
      function toHex(buf) {
        var arr = new Uint8Array(buf);
        var out = '';
        for (var i = 0; i < arr.length; i++) {
          var h = arr[i].toString(16);
          out += h.length === 1 ? '0' + h : h;
        }
        return out;
      }

      /**
       * 计算源 PDF 的 SHA-256。
       * @param {Uint8Array} bytes
       * @returns {Promise<string>}
       */
      function sha256Hex(bytes) {
        if (!window.crypto || !crypto.subtle || typeof crypto.subtle.digest !== 'function') {
          return Promise.reject(new Error('crypto'));
        }
        return crypto.subtle.digest('SHA-256', bytes.slice(0)).then(function (digest) {
          return toHex(digest);
        });
      }

      /**
       * 在指定页盖可见标记框（标题 + 时间戳 + 哈希前缀）。
       * @param {Uint8Array} pdfBytes
       * @param {string} hashHex
       * @returns {Promise<Uint8Array>}
       */
      function stampMark(pdfBytes, hashHex) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        var prefix16 = String(hashHex || '').slice(0, 16);
        var ts = new Date().toISOString();
        return PDFLib.PDFDocument.load(pdfBytes.slice(0)).then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var pages = doc.getPages();
            var idx = Math.max(0, Math.min(pages.length - 1, (Number(pageInput.value) || 1) - 1));
            var page = pages[idx];
            var x = Number(xInput.value);
            var y = Number(yInput.value);
            if (!isFinite(x)) x = 48;
            if (!isFinite(y)) y = 48;
            page.drawRectangle({
              x: x,
              y: y,
              width: 268,
              height: 58,
              borderColor: PDFLib.rgb(0.08, 0.22, 0.48),
              borderWidth: 1.2,
              color: PDFLib.rgb(0.93, 0.96, 1)
            });
            page.drawText(msg.marked, {
              x: x + 8,
              y: y + 38,
              size: 11,
              font: font,
              color: PDFLib.rgb(0.08, 0.22, 0.48)
            });
            page.drawText(ts, { x: x + 8, y: y + 22, size: 8, font: font, color: PDFLib.rgb(0.15, 0.15, 0.2) });
            page.drawText('SHA-256 ' + prefix16 + '...', {
              x: x + 8,
              y: y + 10,
              size: 8,
              font: font,
              color: PDFLib.rgb(0.15, 0.15, 0.2)
            });
            return doc.save();
          });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 把错误映射为可读文案。
       * @param {unknown} err
       * @returns {string}
       */
      function mapErr(err) {
        var s = String(err && (err.message || err) || '');
        if (s === 'crypto' || /crypto/i.test(s)) return msg.crypto;
        if (/empty/i.test(s)) return msg.empty;
        if (/password|encrypt/i.test(s)) return msg.encrypted;
        return msg.convertFail;
      }

      /** 下载盖章后的 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'digitally-marked.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 计算哈希并盖可见标记。
       * @returns {Promise<void>}
       */
      function runApply() {
        if (!sourceBytes) { setErr(msg.empty); return Promise.resolve(); }
        setErr('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () { return sha256Hex(sourceBytes); })
          .then(function (hex) {
            lastHash = hex;
            hashEl.textContent = hex;
            work.setProgress(40);
            return stampMark(sourceBytes, hex);
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
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /**
       * 接收用户 PDF。
       * @param {File} file
       */
      function acceptFile(file) {
        if (!file) return;
        if (!(file.type === 'application/pdf' || /\\.pdf$/i.test(file.name || ''))) {
          setErr(msg.loadFail);
          return;
        }
        setErr('');
        setStatus(file.size > SOFT_BYTES ? msg.large : '');
        resultBytes = null;
        lastHash = '';
        hashEl.textContent = '';
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        file.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          sourceName = file.name || 'document.pdf';
          setMeta(sourceName, sourceBytes.length);
          return work.showPreview(sourceBytes);
        }).catch(function () {
          sourceBytes = null;
          setErr(msg.loadFail);
        }).finally(function () {
          work.setBusy(busyBtns, false);
        });
      }

      /**
       * 样例：造一页 PDF 并盖数字标记框。
       * lint:tool-page 要求字面 loadSample。
       * @returns {Promise<void>}
       */
      function loadSample() {
        if (!hasPdfLib()) { setErr(msg.convertFail); return Promise.resolve(); }
        setErr('');
        setStatus('');
        work.setBusy(busyBtns, true);
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText('Sample record', { x: 48, y: 220, size: 16, font: font });
            page.drawText('Integrity appearance only.', { x: 48, y: 190, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          sourceBytes = new Uint8Array(bytes);
          sourceName = 'sample.pdf';
          setMeta(sourceName, sourceBytes.length);
          return runApply();
        }).catch(function (err) {
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
        dropEl.addEventListener(evName, function (ev) { ev.preventDefault(); });
      });
      dropEl.addEventListener('drop', function (ev) {
        ev.preventDefault();
        var f = ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0];
        if (f) acceptFile(f);
      });
      btnApply.addEventListener('click', function () { runApply(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () {
        sourceBytes = null;
        sourceName = '';
        resultBytes = null;
        lastHash = '';
        hashEl.textContent = '';
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

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('add-digital-signature-to-pdf');
	/** FAQ / related / 分享 / YMYL。 */
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
