/**
 * 批量计算发版文件校验和：多文件 SHA-256 表，可选 MD5，粘贴 SHA256SUMS 对照，导出 CSV/SUMS，不打原文件 ZIP。
 * slug: batch-checksum-release-files；规格见 work-tasks/batch-checksum-release-files/02-tool-info.md。
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

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_batch_checksum_release_files';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前 UI 语言
 * @param pathname 以 / 开头的路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具某一 i18n 后缀键。
 * @param lang 当前语言
 * @param suffix 如 title、description
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * 渲染「批量计算发版文件校验和」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchChecksumReleaseFilesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径。 */
	const toolPath = '/tools/batch-checksum-release-files';
	/** 当前语言 canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
	const description = tx(opts.lang, 'description');
	/** 顶栏导航。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换用显式语言段。
	 * @param code 语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** header 语言菜单映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 顶栏 HTML。 */
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
			currentSlug: 'batch-checksum-release-files',
			currentAnchor: '#hasher',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页表样式。 */
	const extraHeadHtml = `
  <style>
    .bck-table { font-size: .8125rem; }
    .bck-table td, .bck-table th { vertical-align: middle; }
    .bck-table code { font-size: .75rem; word-break: break-all; }
  </style>`;

	const contentHtml = `
    <div id="hasher" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="bckDrop" for="bckFile">
        <input type="file" id="bckFile" multiple>
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
        <span id="bckFileCount" class="tool-dropzone-file"></span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="bckChipMd5" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'chip_md5'))}</button>
        <button type="button" id="bckBtnHash" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'hash_all'))}</button>
        <button type="button" id="bckBtnCsv" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'export_csv'))}</button>
        <button type="button" id="bckBtnSums" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'export_sums'))}</button>
        <button type="button" id="bckBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="bckBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="bckMd5">
        <label class="form-check-label" for="bckMd5">${escapeHtml(tx(opts.lang, 'md5_label'))}</label>
      </div>

      <label class="form-label small mb-1" for="bckSums">${escapeHtml(tx(opts.lang, 'sums_label'))}</label>
      <textarea id="bckSums" class="form-control font-monospace mb-3" rows="4" placeholder="${escapeHtml(tx(opts.lang, 'sums_placeholder'))}"></textarea>

      <p id="bckWarn" class="alert alert-warning py-2 small mb-2" style="display:none;" role="status"></p>
      <p id="bckError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="bckStatus" class="small text-muted mb-2" role="status"></p>
      <p id="bckSummary" class="small mb-2"></p>

      <div class="table-responsive mb-0">
        <table class="table table-sm table-striped bck-table mb-0">
          <thead>
            <tr>
              <th>${escapeHtml(tx(opts.lang, 'col_path'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_size'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_sha256'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_md5'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_compare'))}</th>
            </tr>
          </thead>
          <tbody id="bckTbody"></tbody>
        </table>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'SubtleCrypto.digest', href: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
			{ label: 'RFC 6234', href: 'https://www.rfc-editor.org/rfc/rfc6234' },
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var SOFT_BYTES = 64 * 1024 * 1024;
      var MAX_FILES = 20;
      var CHUNK_SIZE = 4194304;

      var drop = document.getElementById('bckDrop');
      var fileInput = document.getElementById('bckFile');
      var fileCountEl = document.getElementById('bckFileCount');
      var md5Check = document.getElementById('bckMd5');
      var sumsEl = document.getElementById('bckSums');
      var btnHash = document.getElementById('bckBtnHash');
      var btnCsv = document.getElementById('bckBtnCsv');
      var btnSums = document.getElementById('bckBtnSums');
      var btnSample = document.getElementById('bckBtnSample');
      var btnClear = document.getElementById('bckBtnClear');
      var warnEl = document.getElementById('bckWarn');
      var errEl = document.getElementById('bckError');
      var statusEl = document.getElementById('bckStatus');
      var summaryEl = document.getElementById('bckSummary');
      var tbody = document.getElementById('bckTbody');

      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        read: ${JSON.stringify(tx(opts.lang, 'err_read'))},
        md5: ${JSON.stringify(tx(opts.lang, 'err_md5'))},
        tooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        large: ${JSON.stringify(tx(opts.lang, 'warn_large'))},
        hashing: ${JSON.stringify(tx(opts.lang, 'status_hashing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        ok: ${JSON.stringify(tx(opts.lang, 'status_ok'))},
        skip: ${JSON.stringify(tx(opts.lang, 'status_skip'))},
        match: ${JSON.stringify(tx(opts.lang, 'status_match'))},
        mismatch: ${JSON.stringify(tx(opts.lang, 'status_mismatch'))},
        missing: ${JSON.stringify(tx(opts.lang, 'status_missing'))},
        none: ${JSON.stringify(tx(opts.lang, 'status_none'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'file_count_tpl'))},
        summaryTpl: ${JSON.stringify(tx(opts.lang, 'summary_tpl'))}
      };

      var queue = [];
      var rows = [];
      var md5LibPromise = null;

      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }
      function setStatus(text) { statusEl.textContent = text || ''; }
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }
      function bufferToHex(buf) {
        var bytes = new Uint8Array(buf);
        var hex = '';
        for (var i = 0; i < bytes.length; i++) hex += bytes[i].toString(16).padStart(2, '0');
        return hex;
      }
      function wantsMd5() { return !!(md5Check && md5Check.checked); }
      function loadMd5Lib() {
        if (typeof CryptoJS !== 'undefined' && CryptoJS && CryptoJS.MD5) return Promise.resolve(CryptoJS);
        if (!md5LibPromise) {
          md5LibPromise = new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/crypto-js@4.2.0/crypto-js.min.js';
            script.crossOrigin = 'anonymous';
            script.referrerPolicy = 'no-referrer';
            script.onload = function () {
              if (typeof CryptoJS !== 'undefined') resolve(CryptoJS);
              else reject(new Error('md5'));
            };
            script.onerror = function () { reject(new Error('md5')); };
            document.body.appendChild(script);
          });
        }
        return md5LibPromise;
      }
      function uniquePath(used, file, index) {
        var base = (file && (file.webkitRelativePath || file.name)) ? (file.webkitRelativePath || file.name) : ('file-' + (index + 1));
        var name = base;
        var n = 2;
        while (used[name]) { name = base + ' (' + n + ')'; n += 1; }
        used[name] = true;
        return name;
      }
      function parseSums(text) {
        var map = {};
        String(text || '').split(/\\r?\\n/).forEach(function (line) {
          var s = line.trim();
          if (!s || s.charAt(0) === '#') return;
          var m = s.match(/^([0-9a-fA-F]{32,128})\\s+\\*?(.+)$/);
          if (!m) return;
          var name = m[2].replace(/^\\.\\//, '').trim();
          map[name] = m[1].toLowerCase();
        });
        return map;
      }
      function basenameOf(path) {
        var parts = String(path || '').split(/[\\\\/]/);
        return parts[parts.length - 1] || path;
      }
      function lookupSum(map, path) {
        if (map[path]) return map[path];
        var base = basenameOf(path);
        if (map[base]) return map[base];
        return '';
      }
      function renderCount() {
        fileCountEl.textContent = msg.countTpl.replace('{n}', String(queue.length));
      }
      function csvCell(v) {
        var s = String(v == null ? '' : v);
        if (/[",\\n\\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
        return s;
      }
      function downloadText(filename, text, mime) {
        var blob = new Blob([text], { type: mime || 'text/plain;charset=utf-8' });
        var a = document.createElement('a');
        var url = URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }
      function renderTable() {
        tbody.textContent = '';
        var ok = 0, skip = 0, match = 0, mismatch = 0;
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          var tr = document.createElement('tr');
          var cells = [r.path, r.sizeLabel, r.sha256 || '—', r.md5 || '—', r.compareLabel];
          for (var c = 0; c < cells.length; c++) {
            var td = document.createElement('td');
            if (c === 2 || c === 3) {
              var code = document.createElement('code');
              code.textContent = cells[c];
              td.appendChild(code);
            } else {
              td.textContent = cells[c];
            }
            tr.appendChild(td);
          }
          tbody.appendChild(tr);
          if (r.kind === 'skip') skip += 1;
          else {
            ok += 1;
            if (r.compare === 'match') match += 1;
            if (r.compare === 'mismatch') mismatch += 1;
          }
        }
        summaryEl.textContent = msg.summaryTpl
          .replace('{ok}', String(ok))
          .replace('{skip}', String(skip))
          .replace('{match}', String(match))
          .replace('{mismatch}', String(mismatch));
        var canExport = rows.some(function (r) { return r.kind === 'ok' && r.sha256; });
        btnCsv.disabled = !canExport;
        btnSums.disabled = !canExport;
      }
      function applyCompare() {
        var map = parseSums(sumsEl.value);
        var seen = {};
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          if (r.kind !== 'ok' || !r.sha256) {
            r.compare = '';
            r.compareLabel = r.kind === 'skip' ? msg.skip : msg.none;
            continue;
          }
          var expected = lookupSum(map, r.path);
          if (!expected) {
            r.compare = Object.keys(map).length ? '' : '';
            r.compareLabel = Object.keys(map).length ? msg.none : msg.none;
          } else if (expected === r.sha256) {
            r.compare = 'match';
            r.compareLabel = msg.match;
            seen[r.path] = true;
            seen[basenameOf(r.path)] = true;
          } else {
            r.compare = 'mismatch';
            r.compareLabel = msg.mismatch;
            seen[r.path] = true;
            seen[basenameOf(r.path)] = true;
          }
        }
        var existingMissing = rows.filter(function (r) { return r.kind === 'missing'; });
        rows = rows.filter(function (r) { return r.kind !== 'missing'; });
        Object.keys(map).forEach(function (name) {
          if (seen[name]) return;
          var hit = rows.some(function (r) { return r.path === name || basenameOf(r.path) === name; });
          if (hit) return;
          rows.push({
            kind: 'missing',
            path: name,
            sizeLabel: '—',
            sha256: map[name],
            md5: '',
            compare: 'missing',
            compareLabel: msg.missing
          });
        });
        void existingMissing;
        renderTable();
      }
      function addFiles(files) {
        setError('');
        var list = Array.prototype.slice.call(files || []);
        var warns = [];
        for (var i = 0; i < list.length; i++) {
          if (queue.length >= MAX_FILES) { setError(msg.tooMany); break; }
          var f = list[i];
          queue.push(f);
          if (f.size > SOFT_BYTES) warns.push(msg.large);
        }
        if (warns.length) setWarn(warns[0]);
        renderCount();
        rows = [];
        btnCsv.disabled = true;
        btnSums.disabled = true;
      }
      function readFileChunks(file) {
        return new Promise(function (resolve, reject) {
          var size = file.size;
          if (size === 0) { resolve(new ArrayBuffer(0)); return; }
          var chunks = [];
          var offset = 0;
          var reader = new FileReader();
          function readNext() {
            var end = Math.min(offset + CHUNK_SIZE, size);
            reader.readAsArrayBuffer(file.slice(offset, end));
          }
          reader.onload = function () {
            var chunk = new Uint8Array(reader.result);
            chunks.push(chunk);
            offset += chunk.length;
            if (offset < size) readNext();
            else {
              var total = new Uint8Array(size);
              var pos = 0;
              chunks.forEach(function (c) { total.set(c, pos); pos += c.length; });
              resolve(total.buffer);
            }
          };
          reader.onerror = function () { reject(reader.error || new Error('read')); };
          readNext();
        });
      }
      function hashOne(file, index, usedNames) {
        var path = uniquePath(usedNames, file, index);
        return readFileChunks(file).then(function (buf) {
          return crypto.subtle.digest('SHA-256', buf).then(function (shaBuf) {
            var sha = bufferToHex(shaBuf);
            if (!wantsMd5()) {
              return { kind: 'ok', path: path, size: file.size, sizeLabel: formatBytes(file.size), sha256: sha, md5: '' };
            }
            return loadMd5Lib().then(function (lib) {
              var words = lib.lib.WordArray.create(buf);
              var md5 = lib.MD5(words).toString(lib.enc.Hex);
              return { kind: 'ok', path: path, size: file.size, sizeLabel: formatBytes(file.size), sha256: sha, md5: md5 };
            });
          });
        }).catch(function (err) {
          var s = String(err && (err.message || err) || '');
          if (s === 'md5') setError(msg.md5);
          return { kind: 'skip', path: path, size: file.size, sizeLabel: formatBytes(file.size), sha256: '', md5: '', compareLabel: msg.skip };
        });
      }
      function hashAll() {
        setError('');
        if (!queue.length) { setError(msg.empty); return Promise.resolve(); }
        setStatus(msg.hashing);
        btnHash.disabled = true;
        btnCsv.disabled = true;
        btnSums.disabled = true;
        rows = [];
        var usedNames = {};
        var i = 0;
        function next() {
          if (i >= queue.length) {
            applyCompare();
            setStatus(msg.done);
            btnHash.disabled = false;
            return Promise.resolve();
          }
          var file = queue[i];
          var idx = i;
          i += 1;
          return hashOne(file, idx, usedNames).then(function (row) {
            row.compare = '';
            row.compareLabel = row.kind === 'skip' ? msg.skip : msg.none;
            rows.push(row);
            return next();
          });
        }
        return next();
      }
      function exportCsv() {
        var lines = ['path,size,sha256,md5,compare'];
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          lines.push([csvCell(r.path), csvCell(r.sizeLabel), csvCell(r.sha256 || ''), csvCell(r.md5 || ''), csvCell(r.compareLabel || '')].join(','));
        }
        downloadText('release-checksums.csv', lines.join('\\r\\n'), 'text/csv;charset=utf-8');
      }
      function exportSums() {
        var lines = [];
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          if (r.kind === 'ok' && r.sha256) lines.push(r.sha256 + '  ' + r.path);
        }
        downloadText('SHA256SUMS', lines.join('\\n') + (lines.length ? '\\n' : ''), 'text/plain;charset=utf-8');
      }
      function clearAll() {
        queue = [];
        rows = [];
        fileInput.value = '';
        fileCountEl.textContent = '';
        tbody.textContent = '';
        summaryEl.textContent = '';
        sumsEl.value = '';
        setWarn(''); setError(''); setStatus('');
        btnCsv.disabled = true;
        btnSums.disabled = true;
      }
      function loadSample() {
        setError(''); setWarn('');
        queue = [];
        rows = [];
        tbody.textContent = '';
        md5Check.checked = false;
        var a = new File([new Uint8Array([1, 2, 3, 4])], 'release-a.bin', { type: 'application/octet-stream' });
        var b = new File([new Uint8Array([5, 6, 7, 8])], 'release-b.bin', { type: 'application/octet-stream' });
        queue.push(a, b);
        renderCount();
        return hashAll().then(function () {
          var first = rows.find(function (r) { return r.kind === 'ok' && r.sha256; });
          if (first) {
            sumsEl.value = first.sha256 + '  ' + first.path + '\\n';
            applyCompare();
          }
        });
      }

      drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('dragover'); });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault(); drop.classList.remove('dragover');
        var files = e.dataTransfer && e.dataTransfer.files;
        if (files && files.length) addFiles(files);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
      });
      document.getElementById('bckChipMd5').addEventListener('click', function () {
        md5Check.checked = true;
      });
      btnHash.addEventListener('click', function () { hashAll(); });
      btnCsv.addEventListener('click', exportCsv);
      btnSums.addEventListener('click', exportSums);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);
      sumsEl.addEventListener('change', function () { if (rows.length) applyCompare(); });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('batch-checksum-release-files');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
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
