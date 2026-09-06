/**
 * 文件与文本哈希工具页：MD5（lazy crypto-js）+ SHA 系列（Web Crypto）。
 * slug: file-hash；见 work-tasks/file-hash/02-tool-info.md。
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

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 目标路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染文件与文本哈希工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderFileHashPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/file-hash';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_file_hash_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_file_hash_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
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
			currentSlug: 'file-hash',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：算法勾选、进度条、等宽输出。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #textInput { min-height: 160px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem; }
    #hashOutput { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .85rem; white-space: pre-wrap; word-break: break-all; }
    .hash-row { border-bottom: 1px solid #eee; padding: .5rem 0; }
    .hash-row:last-child { border-bottom: none; }
    .hash-algo { font-weight: 600; min-width: 5.5rem; display: inline-block; }
    .inp-pane[hidden] { display: none !important; }
    .algo-group { gap: .75rem 1rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_file_hash_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_file_hash_input_mode_label'))}">
        <input type="radio" class="btn-check" name="fhMode" id="modeText" value="text" checked>
        <label class="btn btn-outline-primary btn-sm" for="modeText">${escapeHtml(t(opts.lang, 'tool_file_hash_tab_text'))}</label>
        <input type="radio" class="btn-check" name="fhMode" id="modeFile" value="file">
        <label class="btn btn-outline-primary btn-sm" for="modeFile">${escapeHtml(t(opts.lang, 'tool_file_hash_tab_file'))}</label>
      </div>
      <button type="button" id="btnHash" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_file_hash_hash'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary">${escapeHtml(t(opts.lang, 'tool_file_hash_copy'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_file_hash_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_file_hash_clear'))}</button>
    </div>

    <fieldset class="mb-3">
      <legend class="form-label small text-muted mb-1">${escapeHtml(t(opts.lang, 'tool_file_hash_algo_label'))}</legend>
      <div class="d-flex flex-wrap algo-group">
        <div class="form-check"><input class="form-check-input algo-cb" type="checkbox" id="algoMd5" value="MD5"><label class="form-check-label" for="algoMd5">MD5</label></div>
        <div class="form-check"><input class="form-check-input algo-cb" type="checkbox" id="algoSha1" value="SHA-1"><label class="form-check-label" for="algoSha1">SHA-1</label></div>
        <div class="form-check"><input class="form-check-input algo-cb" type="checkbox" id="algoSha256" value="SHA-256" checked><label class="form-check-label" for="algoSha256">SHA-256</label></div>
        <div class="form-check"><input class="form-check-input algo-cb" type="checkbox" id="algoSha384" value="SHA-384"><label class="form-check-label" for="algoSha384">SHA-384</label></div>
        <div class="form-check"><input class="form-check-input algo-cb" type="checkbox" id="algoSha512" value="SHA-512"><label class="form-check-label" for="algoSha512">SHA-512</label></div>
      </div>
    </fieldset>

    <div id="paneText" class="inp-pane mb-3">
      <label for="textInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_file_hash_text_label'))}</label>
      <textarea id="textInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_file_hash_text_placeholder'))}" spellcheck="false"></textarea>
    </div>

    <div id="paneFile" class="inp-pane mb-3" hidden>
      <label for="fileInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_file_hash_file_label'))}</label>
      <input type="file" id="fileInput" class="form-control">
      <p id="fileMeta" class="small text-muted mt-1 mb-0"></p>
    </div>

    <div id="progressWrap" class="mb-2" hidden>
      <label class="form-label small mb-1">${escapeHtml(t(opts.lang, 'tool_file_hash_progress_label'))}</label>
      <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated" style="width:0%"></div>
      </div>
    </div>

    <div id="hashWarn" class="alert alert-warning py-2 small mb-2" style="display:none" role="status"></div>
    <div id="hashError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>

    <label class="form-label" for="hashOutput">${escapeHtml(t(opts.lang, 'tool_file_hash_output_label'))}</label>
    <div id="hashOutput" class="border rounded p-3 bg-light mb-0" tabindex="0"></div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_file_hash',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — SubtleCrypto.digest',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest',
			},
			{
				label: 'NIST FIPS 180-4 (SHA)',
				href: 'https://csrc.nist.gov/publications/detail/fips/180/4/final',
			},
			{
				label: 'RFC 1321 — MD5',
				href: 'https://www.rfc-editor.org/rfc/rfc1321',
			},
		],
	});

	/** 客户端：Web Crypto SHA + lazy crypto-js MD5；文本 UTF-8 / 文件分块读。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 文件软上限（字节），超出仍尝试但提示 */
      var SOFT_FILE_LIMIT = 104857600;
      /** 分块读取大小（字节） */
      var CHUNK_SIZE = 4194304;

      var textInput = document.getElementById('textInput');
      var fileInput = document.getElementById('fileInput');
      var fileMeta = document.getElementById('fileMeta');
      var paneText = document.getElementById('paneText');
      var paneFile = document.getElementById('paneFile');
      var hashOutput = document.getElementById('hashOutput');
      var progressWrap = document.getElementById('progressWrap');
      var progressBar = document.getElementById('progressBar');
      var btnHash = document.getElementById('btnHash');
      var btnCopy = document.getElementById('btnCopy');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');
      var hashWarn = document.getElementById('hashWarn');
      var hashError = document.getElementById('hashError');

      var labelCopy = ${JSON.stringify(t(opts.lang, 'tool_file_hash_copy'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_file_hash_copy_done'))};
      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_file_hash_large_warn'))};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_file_hash_empty'))};
      var msgNoAlgo = ${JSON.stringify(t(opts.lang, 'tool_file_hash_no_algo'))};
      var msgMd5Fail = ${JSON.stringify(t(opts.lang, 'tool_file_hash_md5_fail'))};
      var sampleText = ${JSON.stringify(t(opts.lang, 'tool_file_hash_sample_text'))};
      var labelBytes = ${JSON.stringify(t(opts.lang, 'tool_file_hash_file_bytes'))};

      /** MD5 库 lazy-load Promise */
      var md5LibPromise = null;
      /** 上次成功输出文本（复制用） */
      var lastCopyText = '';

      /** 当前输入模式：text | file */
      function getMode() {
        var el = document.querySelector('input[name="fhMode"]:checked');
        return el ? el.value : 'text';
      }

      /** 是否为文本模式 */
      function isTextMode() {
        return getMode() === 'text';
      }

      /** 获取已勾选算法名列表 */
      function selectedAlgos() {
        var out = [];
        document.querySelectorAll('.algo-cb:checked').forEach(function (cb) {
          out.push(cb.value);
        });
        return out;
      }

      /**
       * Lazy 加载 crypto-js（仅 MD5 需要）。
       * @returns {Promise<object>}
       */
      function loadMd5Lib() {
        if (typeof CryptoJS !== 'undefined' && CryptoJS && CryptoJS.MD5) {
          return Promise.resolve(CryptoJS);
        }
        if (!md5LibPromise) {
          md5LibPromise = new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = '/vendor/crypto-js/crypto-js.min.js';
            script.crossOrigin = 'anonymous';
            script.referrerPolicy = 'no-referrer';
            script.onload = function () {
              if (typeof CryptoJS !== 'undefined') resolve(CryptoJS);
              else reject(new Error(msgMd5Fail));
            };
            script.onerror = function () { reject(new Error(msgMd5Fail)); };
            document.body.appendChild(script);
          });
        }
        return md5LibPromise;
      }

      /**
       * ArrayBuffer 转小写 hex 字符串。
       * @param {ArrayBuffer} buf
       */
      function bufferToHex(buf) {
        var bytes = new Uint8Array(buf);
        var hex = '';
        for (var i = 0; i < bytes.length; i++) {
          hex += bytes[i].toString(16).padStart(2, '0');
        }
        return hex;
      }

      /**
       * 用 Web Crypto 计算 SHA 摘要。
       * @param {string} algo SHA-1 | SHA-256 | SHA-384 | SHA-512
       * @param {ArrayBuffer} data
       */
      async function digestSha(algo, data) {
        return crypto.subtle.digest(algo, data);
      }

      /**
       * 用 crypto-js 计算 MD5。
       * @param {ArrayBuffer} data
       */
      async function digestMd5(data) {
        var lib = await loadMd5Lib();
        var words = lib.lib.WordArray.create(data);
        return lib.MD5(words).toString(lib.enc.Hex);
      }

      /**
       * 文本转 UTF-8 ArrayBuffer。
       * @param {string} text
       */
      function textToBuffer(text) {
        return new TextEncoder().encode(text).buffer;
      }

      /**
       * 更新进度条。
       * @param {number} pct 0–100
       */
      function setProgress(pct) {
        progressWrap.hidden = false;
        var p = Math.min(100, Math.max(0, pct));
        progressBar.style.width = p + '%';
        progressBar.setAttribute('aria-valuenow', String(Math.round(p)));
      }

      /** 隐藏进度条 */
      function hideProgress() {
        progressWrap.hidden = true;
        progressBar.style.width = '0%';
      }

      /**
       * 分块读取文件为 ArrayBuffer（带进度）。
       * @param {File} file
       */
      function readFileChunks(file) {
        return new Promise(function (resolve, reject) {
          var size = file.size;
          if (size === 0) {
            resolve(new ArrayBuffer(0));
            return;
          }
          var chunks = [];
          var offset = 0;
          var reader = new FileReader();

          /** 读取下一块文件切片 */
          function readNext() {
            var end = Math.min(offset + CHUNK_SIZE, size);
            var slice = file.slice(offset, end);
            reader.readAsArrayBuffer(slice);
          }

          reader.onload = function () {
            var chunk = new Uint8Array(reader.result);
            chunks.push(chunk);
            offset += chunk.length;
            setProgress((offset / size) * 100);
            if (offset < size) readNext();
            else {
              var total = new Uint8Array(size);
              var pos = 0;
              chunks.forEach(function (c) {
                total.set(c, pos);
                pos += c.length;
              });
              resolve(total.buffer);
            }
          };
          reader.onerror = function () { reject(reader.error || new Error('Read failed')); };

          readNext();
        });
      }

      /**
       * 渲染哈希结果行。
       * @param {{ algo: string, hex: string }[]} rows
       */
      function renderOutput(rows) {
        if (!rows.length) {
          hashOutput.innerHTML = '';
          lastCopyText = '';
          return;
        }
        var html = '';
        var lines = [];
        rows.forEach(function (r) {
          html += '<div class="hash-row"><span class="hash-algo">' + r.algo + '</span> <code>' + r.hex + '</code></div>';
          lines.push(r.algo + ': ' + r.hex);
        });
        hashOutput.innerHTML = html;
        lastCopyText = lines.join('\\n');
      }

      /** 清除错误 */
      function clearError() {
        hashError.style.display = 'none';
        hashError.textContent = '';
      }

      /**
       * 展示错误。
       * @param {unknown} err
       */
      function showError(err) {
        var msg = (err && err.message) ? String(err.message) : String(err || 'Error');
        hashError.textContent = msg;
        hashError.style.display = '';
      }

      /** 切换 Text/File 面板 */
      function applyModeUi() {
        var text = isTextMode();
        paneText.hidden = !text;
        paneFile.hidden = text;
        clearError();
        hashWarn.style.display = 'none';
        hideProgress();
      }

      /**
       * 对 ArrayBuffer 计算所选算法摘要。
       * @param {ArrayBuffer} buf
       * @param {string[]} algos
       */
      async function computeHashes(buf, algos) {
        var rows = [];
        for (var i = 0; i < algos.length; i++) {
          var algo = algos[i];
          if (algo === 'MD5') {
            var md5hex = await digestMd5(buf);
            rows.push({ algo: 'MD5', hex: md5hex });
          } else {
            var digest = await digestSha(algo, buf);
            rows.push({ algo: algo, hex: bufferToHex(digest) });
          }
        }
        return rows;
      }

      /** 执行哈希 */
      async function runHash() {
        clearError();
        hashWarn.style.display = 'none';
        var algos = selectedAlgos();
        if (!algos.length) {
          showError(new Error(msgNoAlgo));
          return;
        }
        try {
          var buf;
          if (isTextMode()) {
            hideProgress();
            var raw = textInput.value || '';
            if (!raw.length) {
              showError(new Error(msgEmpty));
              renderOutput([]);
              return;
            }
            buf = textToBuffer(raw);
          } else {
            var file = fileInput.files && fileInput.files[0];
            if (!file) {
              showError(new Error(msgEmpty));
              renderOutput([]);
              return;
            }
            if (file.size > SOFT_FILE_LIMIT) {
              hashWarn.textContent = msgLarge;
              hashWarn.style.display = '';
            }
            setProgress(0);
            buf = await readFileChunks(file);
            hideProgress();
          }
          var rows = await computeHashes(buf, algos);
          renderOutput(rows);
        } catch (e) {
          hideProgress();
          showError(e);
        }
      }

      /** 复制全部哈希行 */
      async function copyOut() {
        if (!lastCopyText) {
          await runHash();
        }
        if (hashError.style.display !== 'none' || !lastCopyText) return;
        await navigator.clipboard.writeText(lastCopyText);
        btnCopy.textContent = labelCopyDone;
        setTimeout(function () { btnCopy.textContent = labelCopy; }, 1200);
      }

      /** 载入样例文本并计算 SHA-256 */
      function loadSample() {
        document.querySelectorAll('.algo-cb').forEach(function (cb) {
          cb.checked = cb.value === 'SHA-256';
        });
        var textRadio = document.getElementById('modeText');
        if (textRadio) textRadio.checked = true;
        applyModeUi();
        textInput.value = sampleText;
        fileInput.value = '';
        runHash();
      }

      btnHash.addEventListener('click', runHash);
      btnCopy.addEventListener('click', copyOut);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        textInput.value = '';
        fileInput.value = '';
        fileMeta.textContent = '';
        renderOutput([]);
        clearError();
        hashWarn.style.display = 'none';
        hideProgress();
      });
      document.querySelectorAll('input[name="fhMode"]').forEach(function (el) {
        el.addEventListener('change', applyModeUi);
      });
      fileInput.addEventListener('change', function () {
        var file = fileInput.files && fileInput.files[0];
        fileMeta.textContent = file ? (file.name + ' — ' + file.size.toLocaleString() + ' ' + labelBytes) : '';
      });

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('file-hash');
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
