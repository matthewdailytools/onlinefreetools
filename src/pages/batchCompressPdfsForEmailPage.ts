/**
 * 批量压缩 PDF 以便发邮件：多份各自栅格重嵌，ZIP 内仍是分开的 PDF，不合并。
 * slug: batch-compress-pdfs-for-email；规格见 work-tasks/batch-compress-pdfs-for-email/02-tool-info.md。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_batch_compress_pdfs_for_email';

/**
 * 为路径加上语言前缀。
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
 * 渲染「批量压缩 PDF 以便发邮件」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchCompressPdfsForEmailPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/batch-compress-pdfs-for-email';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	const description = tx(opts.lang, 'description');
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
			currentSlug: 'batch-compress-pdfs-for-email',
			currentAnchor: '#compressor',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .bpe-table { font-size: .875rem; }
    .bpe-table td, .bpe-table th { vertical-align: middle; }
  </style>`;

	const contentHtml = `
    <div id="compressor" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="bpeDrop" for="bpeFile">
        <input type="file" id="bpeFile" accept="application/pdf,.pdf" multiple>
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
        <span id="bpeFileCount" class="tool-dropzone-file"></span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="bpeChipEmail" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'chip_email'))}</button>
        <button type="button" id="bpeChipPrint" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'chip_print'))}</button>
        <button type="button" id="bpeChipMax" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'chip_max'))}</button>
        <button type="button" id="bpeBtnCompress" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'compress'))}</button>
        <button type="button" id="bpeBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
        <button type="button" id="bpeBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="bpeBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <p class="small mb-1">${escapeHtml(tx(opts.lang, 'preset_label'))}</p>
      <div class="d-flex align-items-center opt-group mb-3 flex-wrap gap-3">
        <div class="form-check mb-0">
          <input class="form-check-input" type="radio" name="bpePreset" id="bpeEmail" value="email" checked>
          <label class="form-check-label" for="bpeEmail">${escapeHtml(tx(opts.lang, 'chip_email'))}</label>
        </div>
        <div class="form-check mb-0">
          <input class="form-check-input" type="radio" name="bpePreset" id="bpePrint" value="print">
          <label class="form-check-label" for="bpePrint">${escapeHtml(tx(opts.lang, 'chip_print'))}</label>
        </div>
        <div class="form-check mb-0">
          <input class="form-check-input" type="radio" name="bpePreset" id="bpeMax" value="max">
          <label class="form-check-label" for="bpeMax">${escapeHtml(tx(opts.lang, 'chip_max'))}</label>
        </div>
      </div>

      <p id="bpeWarn" class="alert alert-warning py-2 small mb-2" style="display:none;" role="status"></p>
      <p id="bpeError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="bpeStatus" class="small text-muted mb-2" role="status"></p>
      <p id="bpeSummary" class="small mb-2"></p>

      <div class="table-responsive mb-0">
        <table class="table table-sm table-striped bpe-table mb-0">
          <thead>
            <tr>
              <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_before'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_after'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            </tr>
          </thead>
          <tbody id="bpeTbody"></tbody>
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
			{ label: 'pdf.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
			{ label: 'fflate', href: 'https://github.com/101arrowz/fflate' },
		],
	});

	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var SOFT_BYTES = 40 * 1024 * 1024;
      var MAX_FILES = 20;
      var PRESETS = {
        email: { scale: 1.0, jpeg: 0.55 },
        print: { scale: 1.2, jpeg: 0.72 },
        max: { scale: 0.85, jpeg: 0.42 }
      };

      var drop = document.getElementById('bpeDrop');
      var fileInput = document.getElementById('bpeFile');
      var fileCountEl = document.getElementById('bpeFileCount');
      var btnCompress = document.getElementById('bpeBtnCompress');
      var btnZip = document.getElementById('bpeBtnZip');
      var btnSample = document.getElementById('bpeBtnSample');
      var btnClear = document.getElementById('bpeBtnClear');
      var warnEl = document.getElementById('bpeWarn');
      var errEl = document.getElementById('bpeError');
      var statusEl = document.getElementById('bpeStatus');
      var summaryEl = document.getElementById('bpeSummary');
      var tbody = document.getElementById('bpeTbody');

      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        encrypted: ${JSON.stringify(tx(opts.lang, 'err_encrypted'))},
        load: ${JSON.stringify(tx(opts.lang, 'err_load'))},
        fflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        pdflib: ${JSON.stringify(tx(opts.lang, 'err_pdflib'))},
        pdfjs: ${JSON.stringify(tx(opts.lang, 'err_pdfjs'))},
        tooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        large: ${JSON.stringify(tx(opts.lang, 'warn_large'))},
        compressing: ${JSON.stringify(tx(opts.lang, 'status_compressing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        ok: ${JSON.stringify(tx(opts.lang, 'status_ok'))},
        skip: ${JSON.stringify(tx(opts.lang, 'status_skip'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'file_count_tpl'))},
        summaryTpl: ${JSON.stringify(tx(opts.lang, 'summary_tpl'))}
      };

      var queue = [];
      var zipParts = [];

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
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }
      function getPreset() {
        var checked = document.querySelector('input[name="bpePreset"]:checked');
        var val = checked && checked.value;
        return PRESETS[val] ? val : 'email';
      }
      function setPreset(key) {
        var el = document.querySelector('input[name="bpePreset"][value="' + key + '"]');
        if (el) el.checked = true;
      }
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () { throw new Error('pdfjs'); });
      }
      function uniqueZipName(used, original) {
        var stem = String(original || 'document').replace(/\\.[^.]+$/, '') || 'document';
        var name = stem + '.pdf';
        var n = 2;
        while (used[name]) { name = stem + ' (' + n + ').pdf'; n += 1; }
        used[name] = true;
        return name;
      }
      function renderCount() {
        fileCountEl.textContent = msg.countTpl.replace('{n}', String(queue.length));
      }
      function appendRow(row) {
        var tr = document.createElement('tr');
        [row.name, row.before, row.after, row.status].forEach(function (c) {
          var td = document.createElement('td');
          td.textContent = c;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      }
      function addFiles(files) {
        setError('');
        var list = Array.prototype.slice.call(files || []);
        var warns = [];
        for (var i = 0; i < list.length; i++) {
          if (queue.length >= MAX_FILES) { setError(msg.tooMany); break; }
          var f = list[i];
          if (!(f.type === 'application/pdf' || /\\.pdf$/i.test(f.name || ''))) continue;
          queue.push(f);
          if (f.size > SOFT_BYTES) warns.push(msg.large);
        }
        if (warns.length) setWarn(warns[0]);
        renderCount();
        zipParts = [];
        btnZip.disabled = true;
      }

      function buildCompressed(bytes, presetKey) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        var cfg = PRESETS[presetKey] || PRESETS.email;
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (pdfDoc) {
          return PDFLib.PDFDocument.create().then(function (outDoc) {
            var chain = Promise.resolve();
            for (var p = 1; p <= pdfDoc.numPages; p++) {
              (function (pageNum) {
                chain = chain.then(function () {
                  return pdfDoc.getPage(pageNum).then(function (page) {
                    var viewport = page.getViewport({ scale: cfg.scale });
                    var canvas = document.createElement('canvas');
                    canvas.width = Math.floor(viewport.width);
                    canvas.height = Math.floor(viewport.height);
                    var ctx = canvas.getContext('2d');
                    if (!ctx) return Promise.reject(new Error('canvas'));
                    return page.render({ canvasContext: ctx, viewport: viewport }).promise.then(function () {
                      return new Promise(function (resolve, reject) {
                        canvas.toBlob(function (blob) {
                          if (!blob) { reject(new Error('jpeg')); return; }
                          resolve(blob);
                        }, 'image/jpeg', cfg.jpeg);
                      });
                    }).then(function (blob) {
                      return blob.arrayBuffer();
                    }).then(function (jpegBuf) {
                      return outDoc.embedJpg(new Uint8Array(jpegBuf)).then(function (jpegImage) {
                        var pg = outDoc.addPage([jpegImage.width, jpegImage.height]);
                        pg.drawImage(jpegImage, { x: 0, y: 0, width: jpegImage.width, height: jpegImage.height });
                      });
                    });
                  });
                });
              })(p);
            }
            return chain.then(function () { return outDoc.save(); });
          });
        });
      }

      function compressOne(file) {
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function () {
            return buildCompressed(bytes, getPreset());
          }).then(function (out) {
            return { kind: 'ok', before: file.size, after: out.length, bytes: out, name: file.name };
          });
        }).catch(function (err) {
          var s = String(err && (err.message || err) || '');
          if (s === 'pdfjs') return { kind: 'skip', reason: 'pdfjs', before: file.size, after: 0, name: file.name };
          if (s === 'pdflib') return { kind: 'skip', reason: 'pdflib', before: file.size, after: 0, name: file.name };
          if (/password|encrypt/i.test(s)) return { kind: 'skip', reason: 'enc', before: file.size, after: 0, name: file.name };
          return { kind: 'skip', reason: 'load', before: file.size, after: 0, name: file.name };
        });
      }

      function compressAll() {
        setError('');
        if (!queue.length) { setError(msg.empty); return Promise.resolve(); }
        if (!hasPdfLib()) { setError(msg.pdflib); return Promise.resolve(); }
        setStatus(msg.compressing);
        btnCompress.disabled = true;
        btnZip.disabled = true;
        tbody.textContent = '';
        zipParts = [];
        var usedNames = {};
        var ok = 0;
        var skip = 0;
        var saved = 0;
        var i = 0;
        function next() {
          if (i >= queue.length) {
            summaryEl.textContent = msg.summaryTpl
              .replace('{ok}', String(ok))
              .replace('{skip}', String(skip))
              .replace('{saved}', formatBytes(Math.max(0, saved)));
            setStatus(msg.done);
            btnZip.disabled = zipParts.length === 0;
            btnCompress.disabled = false;
            return Promise.resolve();
          }
          var file = queue[i];
          i += 1;
          return compressOne(file).then(function (row) {
            if (row.kind === 'ok' && row.bytes) {
              ok += 1;
              saved += Math.max(0, row.before - row.after);
              zipParts.push({ zipName: uniqueZipName(usedNames, file.name), bytes: row.bytes });
              appendRow({ name: row.name, before: formatBytes(row.before), after: formatBytes(row.after), status: msg.ok });
            } else {
              skip += 1;
              if (row.reason === 'pdfjs') setError(msg.pdfjs);
              if (row.reason === 'pdflib') setError(msg.pdflib);
              appendRow({
                name: row.name,
                before: formatBytes(row.before),
                after: '—',
                status: row.reason === 'enc' ? msg.encrypted : msg.skip
              });
            }
            return next();
          });
        }
        return next();
      }

      function downloadZip() {
        if (!zipParts.length) return;
        if (typeof fflate === 'undefined' || !fflate || typeof fflate.zipSync !== 'function') {
          setError(msg.fflate); return;
        }
        var files = {};
        for (var i = 0; i < zipParts.length; i++) files[zipParts[i].zipName] = zipParts[i].bytes;
        try {
          var zipped = fflate.zipSync(files, { level: 1 });
          var blob = new Blob([zipped], { type: 'application/zip' });
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'pdfs-compressed-for-email.zip';
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
        } catch (e) { setError(msg.fflate); }
      }

      function clearAll() {
        queue = []; zipParts = [];
        fileInput.value = '';
        fileCountEl.textContent = '';
        tbody.textContent = '';
        summaryEl.textContent = '';
        setWarn(''); setError(''); setStatus('');
        btnZip.disabled = true;
      }

      function canvasToJpegBlob(w, h, label) {
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('canvas'));
        var g = ctx.createLinearGradient(0, 0, w, h);
        g.addColorStop(0, '#1c83a8');
        g.addColorStop(1, '#e67e22');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 32px sans-serif';
        ctx.fillText(label, 32, 48);
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) { reject(new Error('jpeg')); return; }
            resolve(blob);
          }, 'image/jpeg', 0.92);
        });
      }

      function makeSamplePdf(label, fileName) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return canvasToJpegBlob(720, 520, label).then(function (blob) {
          return blob.arrayBuffer();
        }).then(function (jpegBuf) {
          return PDFLib.PDFDocument.create().then(function (doc) {
            return doc.embedJpg(new Uint8Array(jpegBuf)).then(function (img) {
              var page = doc.addPage([img.width, img.height]);
              page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
              return doc.save();
            });
          });
        }).then(function (bytes) {
          return new File([bytes], fileName, { type: 'application/pdf' });
        });
      }

      function loadSample() {
        setError(''); setWarn('');
        queue = []; zipParts = []; tbody.textContent = '';
        setPreset('email');
        if (!hasPdfLib()) { setError(msg.pdflib); return Promise.resolve(); }
        return makeSamplePdf('Quote A', 'quote-a.pdf').then(function (a) {
          return makeSamplePdf('Quote B', 'quote-b.pdf').then(function (b) {
            queue.push(a, b);
            renderCount();
            return compressAll();
          });
        }).catch(function (err) {
          var s = String(err && (err.message || err) || '');
          setError(s === 'pdfjs' ? msg.pdfjs : msg.pdflib);
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
      document.getElementById('bpeChipEmail').addEventListener('click', function () { setPreset('email'); });
      document.getElementById('bpeChipPrint').addEventListener('click', function () { setPreset('print'); });
      document.getElementById('bpeChipMax').addEventListener('click', function () { setPreset('max'); });
      btnCompress.addEventListener('click', function () { compressAll(); });
      btnZip.addEventListener('click', downloadZip);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('batch-compress-pdfs-for-email');
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
