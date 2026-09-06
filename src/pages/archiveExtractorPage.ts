/**
 * Archive extractor tool page: local ZIP, TAR, and TAR.GZ listing/extraction.
 * slug: archive-extractor; see work-tasks/archive-extractor/02-tool-info.md.
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

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const renderArchiveExtractorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/archive-extractor';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_archive_extractor_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_archive_extractor_description');
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

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
			currentSlug: 'archive-extractor',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .archive-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
    @media (min-width: 900px) { .archive-grid { grid-template-columns: minmax(280px, .95fr) minmax(0, 1.05fr); } }
    .archive-list { max-height: 380px; overflow: auto; border: 1px solid #e9ecef; border-radius: .5rem; background: #fff; }
    .archive-row { width: 100%; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: .6rem; align-items: center; padding: .55rem .7rem; border: 0; border-bottom: 1px solid #edf0f2; background: #fff; text-align: left; }
    .archive-row:last-child { border-bottom: 0; }
    .archive-row:hover, .archive-row[aria-selected="true"] { background: #f2f7fb; }
    .archive-name { min-width: 0; overflow-wrap: anywhere; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .84rem; }
    .archive-meta { color: #6c757d; font-size: .78rem; white-space: nowrap; }
    .archive-preview { min-height: 220px; max-height: 380px; overflow: auto; border: 1px solid #e9ecef; border-radius: .5rem; background: #f8f9fa; padding: .75rem; }
    .archive-preview pre { white-space: pre-wrap; word-break: break-word; margin: 0; font-size: .86rem; }
    .archive-preview img { max-width: 100%; height: auto; display: block; border-radius: .35rem; background: #fff; }
    .archive-stats { display: flex; flex-wrap: wrap; gap: .5rem; }
    .archive-stat { border: 1px solid #e9ecef; border-radius: .5rem; padding: .45rem .65rem; background: #fff; min-width: 7.5rem; }
    .archive-stat strong { display: block; font-size: .92rem; }
    .archive-support { display: flex; flex-wrap: wrap; gap: .4rem; }
    .archive-support span { border: 1px solid #dee2e6; border-radius: 999px; padding: .18rem .5rem; font-size: .78rem; background: #fff; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_archive_extractor_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="archiveDrop" for="archiveFile">
        <input type="file" id="archiveFile" accept=".zip,.tar,.gz,.tgz,.rar,.7z,.iso,application/zip,application/gzip,application/x-tar">
        <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_archive_extractor_choose_file'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_archive_extractor_drop_hint'))}</span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
        <button type="button" id="archiveBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_archive_extractor_load_sample'))}</button>
        <button type="button" id="archiveBtnDownload" class="btn btn-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_archive_extractor_download_file'))}</button>
        <button type="button" id="archiveBtnExport" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_archive_extractor_download_all'))}</button>
        <button type="button" id="archiveBtnEngine" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_archive_extractor_load_engine'))}</button>
        <button type="button" id="archiveBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_archive_extractor_clear'))}</button>
      </div>

      <div class="archive-support small text-muted mb-3" aria-label="${escapeHtml(t(opts.lang, 'tool_archive_extractor_format_label'))}">
        <span>ZIP</span><span>TAR</span><span>TAR.GZ / TGZ</span><span>RAR / 7Z / ISO: ${escapeHtml(t(opts.lang, 'tool_archive_extractor_engine_badge'))}</span>
      </div>

      <p id="archiveError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="archiveWarn" class="alert alert-warning py-2 small mb-2" style="display:none;" role="status"></p>
      <p id="archiveStatus" class="small text-muted mb-3" role="status"></p>

      <div class="archive-stats mb-3" id="archiveStats" hidden>
        <div class="archive-stat"><span class="small text-muted">${escapeHtml(t(opts.lang, 'tool_archive_extractor_file_count_label'))}</span><strong id="archiveCount">0</strong></div>
        <div class="archive-stat"><span class="small text-muted">${escapeHtml(t(opts.lang, 'tool_archive_extractor_total_size_label'))}</span><strong id="archiveTotal">0 B</strong></div>
        <div class="archive-stat"><span class="small text-muted">${escapeHtml(t(opts.lang, 'tool_archive_extractor_format_label'))}</span><strong id="archiveFormat">-</strong></div>
        <div class="archive-stat"><span class="small text-muted">${escapeHtml(t(opts.lang, 'tool_archive_extractor_selected_label'))}</span><strong id="archiveSelected">-</strong></div>
      </div>

      <div class="archive-grid">
        <div>
          <div id="archiveList" class="archive-list" aria-label="${escapeHtml(t(opts.lang, 'tool_archive_extractor_file_count_label'))}"></div>
        </div>
        <div>
          <label class="form-label mb-1" for="archivePreview">${escapeHtml(t(opts.lang, 'tool_archive_extractor_preview_title'))}</label>
          <div id="archivePreview" class="archive-preview" tabindex="0"></div>
        </div>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_archive_extractor',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'PKWARE ZIP APPNOTE', href: 'https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT' },
			{ label: 'GNU tar manual', href: 'https://www.gnu.org/software/tar/manual/tar.html' },
			{ label: 'RFC 1952 — GZIP file format', href: 'https://www.rfc-editor.org/rfc/rfc1952' },
			{ label: 'MDN — File API', href: 'https://developer.mozilla.org/en-US/docs/Web/API/File' },
			{ label: 'MDN — Web Workers API', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API' },
		],
	});

	const extraBodyHtml = `
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var SOFT_BYTES = 80 * 1024 * 1024;
      var SOFT_COUNT = 1000;
      var PREVIEW_BYTES = 64 * 1024;
      var TAR_BLOCK = 512;

      var drop = document.getElementById('archiveDrop');
      var fileInput = document.getElementById('archiveFile');
      var btnSample = document.getElementById('archiveBtnSample');
      var btnDownload = document.getElementById('archiveBtnDownload');
      var btnExport = document.getElementById('archiveBtnExport');
      var btnEngine = document.getElementById('archiveBtnEngine');
      var btnClear = document.getElementById('archiveBtnClear');
      var errEl = document.getElementById('archiveError');
      var warnEl = document.getElementById('archiveWarn');
      var statusEl = document.getElementById('archiveStatus');
      var statsEl = document.getElementById('archiveStats');
      var countEl = document.getElementById('archiveCount');
      var totalEl = document.getElementById('archiveTotal');
      var formatEl = document.getElementById('archiveFormat');
      var selectedEl = document.getElementById('archiveSelected');
      var listEl = document.getElementById('archiveList');
      var previewEl = document.getElementById('archivePreview');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_empty'))},
        archive: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_err_archive'))},
        fflate: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_err_fflate'))},
        unsupported: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_err_unsupported'))},
        engine: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_err_engine'))},
        reading: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_status_reading'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_status_done'))},
        noPreview: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_no_preview'))},
        dangerous: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_warn_dangerous'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_warn_large'))},
        exported: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_exported_all'))},
        noFile: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_err_no_file'))},
        sizeLabel: ${JSON.stringify(t(opts.lang, 'tool_archive_extractor_size_label'))}
      };

      var entries = [];
      var selectedIndex = -1;
      var currentFormat = '-';
      var objectUrls = [];

      function hasFflate() {
        return typeof fflate !== 'undefined' && fflate && typeof fflate.zipSync === 'function';
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
        currentFormat = '-';
        fileInput.value = '';
        clearObjectUrls();
        listEl.innerHTML = '';
        previewEl.textContent = '';
        statsEl.hidden = true;
        countEl.textContent = '0';
        totalEl.textContent = '0 B';
        formatEl.textContent = '-';
        selectedEl.textContent = '-';
        btnDownload.disabled = true;
        btnExport.disabled = true;
        setError('');
        setWarn('');
        setStatus('');
      }

      function renderList() {
        listEl.innerHTML = entries.map(function (entry, index) {
          return '<button type="button" class="archive-row" data-index="' + index + '" aria-selected="' + (index === selectedIndex ? 'true' : 'false') + '">' +
            '<span class="archive-name">' + escapeText(entry.safeName) + (entry.dangerous ? ' *' : '') + '</span>' +
            '<span class="archive-meta">' + escapeText(formatBytes(entry.bytes.length)) + '</span>' +
            '</button>';
        }).join('');
      }

      function renderStats(total) {
        statsEl.hidden = false;
        countEl.textContent = String(entries.length);
        totalEl.textContent = formatBytes(total);
        formatEl.textContent = currentFormat;
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

      function isZeroBlock(bytes, offset) {
        for (var i = 0; i < TAR_BLOCK; i++) {
          if (bytes[offset + i] !== 0) return false;
        }
        return true;
      }

      function readString(bytes, start, length) {
        var end = start;
        var max = start + length;
        while (end < max && bytes[end] !== 0) end++;
        return new TextDecoder('utf-8', { fatal: false }).decode(bytes.slice(start, end)).trim();
      }

      function readOctal(bytes, start, length) {
        var raw = readString(bytes, start, length).replace(/\\0/g, '').trim();
        if (!raw) return 0;
        var value = parseInt(raw, 8);
        return Number.isFinite(value) ? value : 0;
      }

      function parseTarBytes(bytes) {
        var list = [];
        var offset = 0;
        var used = {};
        var dangerous = false;
        var total = 0;
        var longName = '';
        while (offset + TAR_BLOCK <= bytes.length) {
          if (isZeroBlock(bytes, offset)) break;
          var name = longName || readString(bytes, offset, 100);
          longName = '';
          var size = readOctal(bytes, offset + 124, 12);
          var type = String.fromCharCode(bytes[offset + 156] || 48);
          var prefix = readString(bytes, offset + 345, 155);
          if (prefix && name) name = prefix + '/' + name;
          var dataStart = offset + TAR_BLOCK;
          var dataEnd = dataStart + size;
          if (dataEnd > bytes.length) throw new Error('bad tar size');
          if (type === 'L') {
            longName = new TextDecoder('utf-8', { fatal: false }).decode(bytes.slice(dataStart, dataEnd)).replace(/\\0+$/, '');
          } else if (type === '0' || type === '\\0' || type === '') {
            var out = sanitizePath(name, used);
            var data = bytes.slice(dataStart, dataEnd);
            total += data.length;
            dangerous = dangerous || out.dangerous;
            list.push({ originalName: name, safeName: out.name, bytes: data, dangerous: out.dangerous });
          } else if (type === '2') {
            dangerous = true;
          }
          offset = dataStart + Math.ceil(size / TAR_BLOCK) * TAR_BLOCK;
        }
        return { list: list, total: total, dangerous: dangerous };
      }

      function detectFormat(bytes, name) {
        var lower = String(name || '').toLowerCase();
        if ((bytes[0] === 0x50 && bytes[1] === 0x4b) || /\\.zip$/.test(lower)) return 'ZIP';
        if ((bytes[0] === 0x1f && bytes[1] === 0x8b) || /\\.(tar\\.gz|tgz|gz)$/.test(lower)) return 'TAR.GZ';
        if (bytes.length > 262 && readString(bytes, 257, 5) === 'ustar') return 'TAR';
        if (/\\.tar$/.test(lower)) return 'TAR';
        if (/\\.(rar|7z|iso)$/.test(lower)) return 'ENGINE';
        return 'UNKNOWN';
      }

      function finishParse(parsed, format, compressedSize) {
        entries = parsed.list.sort(function (a, b) { return a.safeName.localeCompare(b.safeName); });
        if (!entries.length) {
          reset();
          setError(msg.archive);
          return;
        }
        selectedIndex = 0;
        currentFormat = format;
        renderList();
        renderStats(parsed.total);
        btnExport.disabled = false;
        var warnings = [];
        if (parsed.dangerous) warnings.push(msg.dangerous);
        if (compressedSize > SOFT_BYTES || parsed.total > SOFT_BYTES || entries.length > SOFT_COUNT || parsed.total > compressedSize * 80) warnings.push(msg.large);
        setWarn(warnings.join(' '));
        setStatus(msg.done);
        selectEntry(0);
      }

      function parseZip(bytes, compressedSize) {
        if (!hasFflate() || typeof fflate.unzipSync !== 'function') {
          setError(msg.fflate);
          return;
        }
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
          list.push({ originalName: name, safeName: out.name, bytes: data, dangerous: out.dangerous });
        });
        finishParse({ list: list, total: total, dangerous: dangerous }, 'ZIP', compressedSize);
      }

      function parseArchiveBytes(bytes, name, compressedSize) {
        setStatus(msg.reading);
        setError('');
        setWarn('');
        clearObjectUrls();
        window.setTimeout(function () {
          try {
            var format = detectFormat(bytes, name);
            if (format === 'ZIP') {
              parseZip(bytes, compressedSize);
              return;
            }
            if (format === 'TAR.GZ') {
              if (!hasFflate() || typeof fflate.gunzipSync !== 'function') {
                setError(msg.fflate);
                return;
              }
              var tarBytes = fflate.gunzipSync(bytes);
              finishParse(parseTarBytes(tarBytes), 'TAR.GZ', compressedSize);
              return;
            }
            if (format === 'TAR') {
              finishParse(parseTarBytes(bytes), 'TAR', compressedSize);
              return;
            }
            if (format === 'ENGINE') {
              setError(msg.engine);
              setStatus('');
              return;
            }
            setError(msg.unsupported);
            setStatus('');
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
          parseArchiveBytes(new Uint8Array(buf), file.name || '', file.size || buf.byteLength);
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
        downloadBlob(new Blob([zipped], { type: 'application/zip' }), 'extracted-archive.zip');
        setStatus(msg.exported);
      }

      function writeString(bytes, offset, text, length) {
        var encoded = new TextEncoder().encode(text);
        bytes.set(encoded.slice(0, length), offset);
      }

      function writeOctal(bytes, offset, length, value) {
        var text = value.toString(8).padStart(length - 1, '0') + '\\0';
        writeString(bytes, offset, text, length);
      }

      function tarEntry(name, data) {
        var size = data.length;
        var blocks = Math.ceil(size / TAR_BLOCK);
        var out = new Uint8Array(TAR_BLOCK + blocks * TAR_BLOCK);
        writeString(out, 0, name, 100);
        writeOctal(out, 100, 8, 0o644);
        writeOctal(out, 108, 8, 0);
        writeOctal(out, 116, 8, 0);
        writeOctal(out, 124, 12, size);
        writeOctal(out, 136, 12, Math.floor(Date.now() / 1000));
        for (var i = 148; i < 156; i++) out[i] = 32;
        out[156] = 48;
        writeString(out, 257, 'ustar', 6);
        writeString(out, 263, '00', 2);
        var sum = 0;
        for (var j = 0; j < TAR_BLOCK; j++) sum += out[j];
        var chk = sum.toString(8).padStart(6, '0') + '\\0 ';
        writeString(out, 148, chk, 8);
        out.set(data, TAR_BLOCK);
        return out;
      }

      function concatArrays(parts) {
        var total = parts.reduce(function (n, p) { return n + p.length; }, 0);
        var out = new Uint8Array(total);
        var offset = 0;
        parts.forEach(function (p) {
          out.set(p, offset);
          offset += p.length;
        });
        return out;
      }

      function b64ToU8(b64) {
        var bin = atob(b64);
        var out = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
        return out;
      }

      function makeSampleTarGz() {
        if (!hasFflate() || typeof fflate.gzipSync !== 'function') {
          setError(msg.fflate);
          return;
        }
        reset();
        var text = new TextEncoder();
        var files = [
          tarEntry('README.txt', text.encode('Sample archive\\nThis README comes from a real TAR.GZ entry.\\nFiles stay in this browser tab.\\n')),
          tarEntry('src/index.js', text.encode('export function hello() {\\n  return \"archive extractor sample\";\\n}\\n')),
          tarEntry('assets/logo.png', b64ToU8('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII='))
        ];
        files.push(new Uint8Array(TAR_BLOCK * 2));
        var tarBytes = concatArrays(files);
        var gz = fflate.gzipSync(tarBytes, { level: 1 });
        parseArchiveBytes(gz, 'sample-archive.tar.gz', gz.length);
      }

      listEl.addEventListener('click', function (e) {
        var row = e.target && e.target.closest ? e.target.closest('.archive-row') : null;
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

      btnSample.addEventListener('click', makeSampleTarGz);
      btnDownload.addEventListener('click', downloadSelected);
      btnExport.addEventListener('click', exportAll);
      btnEngine.addEventListener('click', function () {
        setError(msg.engine);
      });
      btnClear.addEventListener('click', reset);

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', makeSampleTarGz);
      } else {
        makeSampleTarGz();
      }
    })();
  </script>`;

	const toolMeta = getToolBySlug('archive-extractor');
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
