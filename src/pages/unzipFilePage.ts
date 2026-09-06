/**
 * ZIP 解压工具页：浏览器内读取 ZIP、清理路径、预览常见文件并导出。
 * slug: unzip-file；见 work-tasks/unzip-file/02-tool-info.md。
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
 * 渲染 ZIP 解压工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderUnzipFilePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/unzip-file';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_unzip_file_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_unzip_file_description');
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
			currentSlug: 'unzip-file',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .unzip-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
    @media (min-width: 900px) { .unzip-grid { grid-template-columns: minmax(260px, .9fr) minmax(0, 1.1fr); } }
    .unzip-list { max-height: 360px; overflow: auto; border: 1px solid #e9ecef; border-radius: .5rem; }
    .unzip-row { width: 100%; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: .5rem; align-items: center; padding: .55rem .7rem; border: 0; border-bottom: 1px solid #edf0f2; background: #fff; text-align: left; }
    .unzip-row:last-child { border-bottom: 0; }
    .unzip-row:hover, .unzip-row[aria-selected="true"] { background: #f2f7fb; }
    .unzip-name { min-width: 0; overflow-wrap: anywhere; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .84rem; }
    .unzip-meta { color: #6c757d; font-size: .78rem; white-space: nowrap; }
    .unzip-preview { min-height: 210px; max-height: 360px; overflow: auto; border: 1px solid #e9ecef; border-radius: .5rem; background: #f8f9fa; padding: .75rem; }
    .unzip-preview pre { white-space: pre-wrap; word-break: break-word; margin: 0; font-size: .86rem; }
    .unzip-preview img { max-width: 100%; height: auto; display: block; border-radius: .35rem; background: #fff; }
    .unzip-stats { display: flex; flex-wrap: wrap; gap: .5rem; }
    .unzip-stat { border: 1px solid #e9ecef; border-radius: .5rem; padding: .45rem .65rem; background: #fff; min-width: 7.5rem; }
    .unzip-stat strong { display: block; font-size: .92rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_unzip_file_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="unzipDrop" for="unzipFile">
        <input type="file" id="unzipFile" accept=".zip,application/zip,application/x-zip-compressed">
        <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_unzip_file_choose_file'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_unzip_file_drop_hint'))}</span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
        <button type="button" id="unzipBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_unzip_file_load_sample'))}</button>
        <button type="button" id="unzipBtnDownload" class="btn btn-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_unzip_file_download_file'))}</button>
        <button type="button" id="unzipBtnExport" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_unzip_file_download_all'))}</button>
        <button type="button" id="unzipBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_unzip_file_clear'))}</button>
      </div>

      <p id="unzipError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="unzipWarn" class="alert alert-warning py-2 small mb-2" style="display:none;" role="status"></p>
      <p id="unzipStatus" class="small text-muted mb-3" role="status"></p>

      <div class="unzip-stats mb-3" id="unzipStats" hidden>
        <div class="unzip-stat"><span class="small text-muted">${escapeHtml(t(opts.lang, 'tool_unzip_file_file_count_label'))}</span><strong id="unzipCount">0</strong></div>
        <div class="unzip-stat"><span class="small text-muted">${escapeHtml(t(opts.lang, 'tool_unzip_file_total_size_label'))}</span><strong id="unzipTotal">0 B</strong></div>
        <div class="unzip-stat"><span class="small text-muted">${escapeHtml(t(opts.lang, 'tool_unzip_file_selected_label'))}</span><strong id="unzipSelected">-</strong></div>
      </div>

      <div class="unzip-grid">
        <div>
          <div id="unzipList" class="unzip-list" aria-label="${escapeHtml(t(opts.lang, 'tool_unzip_file_file_count_label'))}"></div>
        </div>
        <div>
          <label class="form-label mb-1" for="unzipPreview">${escapeHtml(t(opts.lang, 'tool_unzip_file_preview_title'))}</label>
          <div id="unzipPreview" class="unzip-preview" tabindex="0"></div>
        </div>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_unzip_file',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'PKWARE ZIP APPNOTE',
				href: 'https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT',
			},
			{
				label: 'MDN — File API',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/File',
			},
			{
				label: 'MDN — File System API',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API',
			},
		],
	});

	const extraBodyHtml = `
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var SOFT_BYTES = 80 * 1024 * 1024;
      var SOFT_COUNT = 1000;
      var PREVIEW_BYTES = 64 * 1024;

      var drop = document.getElementById('unzipDrop');
      var fileInput = document.getElementById('unzipFile');
      var btnSample = document.getElementById('unzipBtnSample');
      var btnDownload = document.getElementById('unzipBtnDownload');
      var btnExport = document.getElementById('unzipBtnExport');
      var btnClear = document.getElementById('unzipBtnClear');
      var errEl = document.getElementById('unzipError');
      var warnEl = document.getElementById('unzipWarn');
      var statusEl = document.getElementById('unzipStatus');
      var statsEl = document.getElementById('unzipStats');
      var countEl = document.getElementById('unzipCount');
      var totalEl = document.getElementById('unzipTotal');
      var selectedEl = document.getElementById('unzipSelected');
      var listEl = document.getElementById('unzipList');
      var previewEl = document.getElementById('unzipPreview');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_empty'))},
        archive: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_err_archive'))},
        fflate: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_err_fflate'))},
        noFile: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_err_no_file'))},
        reading: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_status_reading'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_status_done'))},
        noPreview: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_no_preview'))},
        dangerous: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_warn_dangerous'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_warn_large'))},
        exported: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_exported_all'))},
        sizeLabel: ${JSON.stringify(t(opts.lang, 'tool_unzip_file_size_label'))}
      };

      var entries = [];
      var selectedIndex = -1;
      var objectUrls = [];

      function hasFflate() {
        return typeof fflate !== 'undefined' && fflate && typeof fflate.unzipSync === 'function' && typeof fflate.zipSync === 'function';
      }

      function setError(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? '' : 'none';
      }

      function setWarn(text) {
        warnEl.textContent = text || '';
        warnEl.style.display = text ? '' : 'none';
      }

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      function escapeText(s) {
        return String(s).replace(/[&<>"']/g, function (ch) {
          return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
        });
      }

      function clearObjectUrls() {
        objectUrls.forEach(function (url) { URL.revokeObjectURL(url); });
        objectUrls = [];
      }

      function uniqueName(base, used) {
        var name = base || 'file';
        if (!used[name]) {
          used[name] = 1;
          return name;
        }
        var dot = name.lastIndexOf('.');
        var stem = dot > 0 ? name.slice(0, dot) : name;
        var ext = dot > 0 ? name.slice(dot) : '';
        var i = used[name] + 1;
        var candidate = stem + '-' + i + ext;
        while (used[candidate]) {
          i += 1;
          candidate = stem + '-' + i + ext;
        }
        used[name] = i;
        used[candidate] = 1;
        return candidate;
      }

      function sanitizePath(raw, used) {
        var original = String(raw || '').replace(/\\\\/g, '/');
        var dangerous = /^\\//.test(original) || /^[A-Za-z]:\\//.test(original);
        var parts = original.split('/');
        var out = [];
        parts.forEach(function (part) {
          if (!part || part === '.') return;
          if (part === '..') {
            dangerous = true;
            out.push('__');
            return;
          }
          var cleaned = part.replace(/[<>:"|?*\\x00-\\x1f]/g, '_').trim();
          if (!cleaned) {
            dangerous = true;
            return;
          }
          if (cleaned !== part) dangerous = true;
          out.push(cleaned);
        });
        var safe = out.join('/') || 'file';
        var unique = uniqueName(safe, used);
        if (unique !== safe) dangerous = true;
        return { name: unique, dangerous: dangerous };
      }

      function guessMime(name) {
        var lower = name.toLowerCase();
        if (/\\.png$/.test(lower)) return 'image/png';
        if (/\\.(jpe?g)$/.test(lower)) return 'image/jpeg';
        if (/\\.gif$/.test(lower)) return 'image/gif';
        if (/\\.webp$/.test(lower)) return 'image/webp';
        if (/\\.svg$/.test(lower)) return 'image/svg+xml';
        if (/\\.json$/.test(lower)) return 'application/json';
        if (/\\.csv$/.test(lower)) return 'text/csv';
        if (/\\.(txt|md|log|xml|html|css|js|ts|tsx|jsx|yml|yaml|toml|ini|env)$/.test(lower)) return 'text/plain';
        return 'application/octet-stream';
      }

      function isTextPreview(name, mime) {
        return /^text\\//.test(mime) || /\\.(json|xml|html|css|js|ts|tsx|jsx|md|yml|yaml|toml|ini|env)$/i.test(name);
      }

      function isImagePreview(mime) {
        return /^image\\/(png|jpeg|gif|webp|svg\\+xml)$/.test(mime);
      }

      function reset() {
        entries = [];
        selectedIndex = -1;
        fileInput.value = '';
        clearObjectUrls();
        listEl.innerHTML = '';
        previewEl.textContent = '';
        statsEl.hidden = true;
        countEl.textContent = '0';
        totalEl.textContent = '0 B';
        selectedEl.textContent = '-';
        btnDownload.disabled = true;
        btnExport.disabled = true;
        setError('');
        setWarn('');
        setStatus('');
      }

      function renderList() {
        listEl.innerHTML = entries.map(function (entry, index) {
          return '<button type="button" class="unzip-row" data-index="' + index + '" aria-selected="' + (index === selectedIndex ? 'true' : 'false') + '">' +
            '<span class="unzip-name">' + escapeText(entry.safeName) + (entry.dangerous ? ' *' : '') + '</span>' +
            '<span class="unzip-meta">' + escapeText(formatBytes(entry.bytes.length)) + '</span>' +
            '</button>';
        }).join('');
      }

      function renderStats(total) {
        statsEl.hidden = false;
        countEl.textContent = String(entries.length);
        totalEl.textContent = formatBytes(total);
        selectedEl.textContent = selectedIndex >= 0 ? entries[selectedIndex].safeName : '-';
      }

      function selectEntry(index) {
        if (index < 0 || index >= entries.length) return;
        selectedIndex = index;
        var entry = entries[index];
        selectedEl.textContent = entry.safeName;
        btnDownload.disabled = false;
        renderList();
        clearObjectUrls();
        var mime = guessMime(entry.safeName);
        if (isTextPreview(entry.safeName, mime)) {
          var slice = entry.bytes.slice(0, PREVIEW_BYTES);
          var text = new TextDecoder('utf-8', { fatal: false }).decode(slice);
          var note = entry.bytes.length > PREVIEW_BYTES ? '\\n\\n... ' + formatBytes(entry.bytes.length - PREVIEW_BYTES) + ' not shown' : '';
          previewEl.innerHTML = '<pre>' + escapeText(text + note) + '</pre>';
          return;
        }
        if (isImagePreview(mime)) {
          var blob = new Blob([entry.bytes], { type: mime });
          var url = URL.createObjectURL(blob);
          objectUrls.push(url);
          previewEl.innerHTML = '<img src="' + url + '" alt="">';
          return;
        }
        previewEl.innerHTML = '<p class="mb-1">' + escapeText(msg.noPreview) + '</p><p class="small text-muted mb-0">' + escapeText(msg.sizeLabel) + ': ' + escapeText(formatBytes(entry.bytes.length)) + '</p>';
      }

      function parseZipBytes(bytes, compressedSize) {
        if (!hasFflate()) {
          setError(msg.fflate);
          return;
        }
        setStatus(msg.reading);
        setError('');
        setWarn('');
        clearObjectUrls();
        window.setTimeout(function () {
          try {
            var raw = fflate.unzipSync(bytes);
            var used = {};
            var list = [];
            var total = 0;
            var dangerous = false;
            Object.keys(raw).forEach(function (name) {
              if (/\\/$/.test(name)) return;
              var out = sanitizePath(name, used);
              var data = raw[name];
              total += data.length;
              dangerous = dangerous || out.dangerous;
              list.push({
                originalName: name,
                safeName: out.name,
                bytes: data,
                dangerous: out.dangerous
              });
            });
            entries = list.sort(function (a, b) { return a.safeName.localeCompare(b.safeName); });
            if (!entries.length) {
              reset();
              setError(msg.archive);
              return;
            }
            selectedIndex = 0;
            renderList();
            renderStats(total);
            btnExport.disabled = false;
            var warnings = [];
            if (dangerous) warnings.push(msg.dangerous);
            if (compressedSize > SOFT_BYTES || total > SOFT_BYTES || entries.length > SOFT_COUNT || total > compressedSize * 80) warnings.push(msg.large);
            setWarn(warnings.join(' '));
            setStatus(msg.done);
            selectEntry(0);
          } catch (err) {
            reset();
            setError(msg.archive);
          }
        }, 20);
      }

      function loadFile(file) {
        if (!file) {
          setError(msg.empty);
          return;
        }
        reset();
        file.arrayBuffer().then(function (buf) {
          parseZipBytes(new Uint8Array(buf), file.size || buf.byteLength);
        }).catch(function () {
          setError(msg.archive);
        });
      }

      function downloadBlob(blob, filename) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      function downloadSelected() {
        if (selectedIndex < 0 || !entries[selectedIndex]) {
          setError(msg.noFile);
          return;
        }
        var entry = entries[selectedIndex];
        downloadBlob(new Blob([entry.bytes], { type: guessMime(entry.safeName) }), entry.safeName.split('/').pop() || 'file');
      }

      function exportAll() {
        if (!entries.length) {
          setError(msg.empty);
          return;
        }
        if (!hasFflate()) {
          setError(msg.fflate);
          return;
        }
        var files = {};
        entries.forEach(function (entry) {
          files[entry.safeName] = entry.bytes;
        });
        var zipped = fflate.zipSync(files, { level: 1 });
        downloadBlob(new Blob([zipped], { type: 'application/zip' }), 'unzipped-files.zip');
        setStatus(msg.exported);
      }

      function makeSampleZip() {
        if (!hasFflate()) {
          setError(msg.fflate);
          return;
        }
        reset();
        var files = {
          'readme.txt': fflate.strToU8('Project files sample\\nThis text preview is generated from a real ZIP entry.\\n'),
          'assets/logo.svg': fflate.strToU8('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="80"><rect width="120" height="80" rx="12" fill="#2f6f8f"/><text x="60" y="48" text-anchor="middle" font-size="18" fill="white">ZIP</text></svg>'),
          'docs/notes.md': fflate.strToU8('# Notes\\n\\n- Safe paths are kept.\\n- Text entries can be previewed.\\n')
        };
        var zipped = fflate.zipSync(files, { level: 1 });
        parseZipBytes(zipped, zipped.length);
      }

      listEl.addEventListener('click', function (e) {
        var row = e.target && e.target.closest ? e.target.closest('.unzip-row') : null;
        if (!row) return;
        selectEntry(parseInt(row.getAttribute('data-index') || '-1', 10));
      });

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

      btnSample.addEventListener('click', makeSampleZip);
      btnDownload.addEventListener('click', downloadSelected);
      btnExport.addEventListener('click', exportAll);
      btnClear.addEventListener('click', reset);

      /** 进页自动跑 ZIP 样例，保证首屏出现真实文件树和预览。 */
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', makeSampleZip);
      } else {
        makeSampleZip();
      }
    })();
  </script>`;

	const toolMeta = getToolBySlug('unzip-file');
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
