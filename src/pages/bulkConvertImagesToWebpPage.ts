/**
 * 批量转换成 WebP 工具页：多图有损 WebP toBlob（不铺 JPEG 垫底），失败跳过，成功打 ZIP。
 * slug: bulk-convert-images-to-webp；规格见 work-tasks/bulk-convert-images-to-webp/02-tool-info.md。
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
const PREFIX = 'tool_bulk_convert_images_to_webp';

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
 * 渲染「批量转换成 WebP」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBulkConvertImagesToWebpPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/bulk-convert-images-to-webp';
	/** 当前语言下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：H1 原句 + 品牌。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description，与可见文案同源。 */
	const description = tx(opts.lang, 'description');
	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换链接始终带显式语言段。
	 * @param code 语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** header 语言菜单用的绝对路径映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 站点顶栏 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 工具侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'bulk-convert-images-to-webp',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：结果表。 */
	const extraHeadHtml = `
  <style>
    .bcw-table { font-size: .875rem; }
    .bcw-table td, .bcw-table th { vertical-align: middle; }
  </style>`;

	/** 首屏：多选图、有损质量（默认 0.8）、汇总表、ZIP。 */
	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="bcwDrop" for="bcwFile">
        <input type="file" id="bcwFile" accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,image/heic,image/heif,image/*" multiple>
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
        <span id="bcwFileCount" class="tool-dropzone-file"></span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="bcwChipQ80" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'chip_q80'))}</button>
        <button type="button" id="bcwBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert'))}</button>
        <button type="button" id="bcwBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
        <button type="button" id="bcwBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="bcwBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <div class="d-flex align-items-center opt-group mb-3 flex-wrap gap-2">
        <label class="form-label mb-0" for="bcwQuality">${escapeHtml(tx(opts.lang, 'quality_label'))}</label>
        <input type="range" id="bcwQuality" min="50" max="100" value="80">
        <span id="bcwQualityVal" class="small text-muted">0.80</span>
      </div>

      <p id="bcwWarn" class="alert alert-warning py-2 small mb-2" style="display:none;" role="status"></p>
      <p id="bcwError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="bcwStatus" class="small text-muted mb-2" role="status"></p>
      <p id="bcwSummary" class="small mb-2"></p>

      <div class="table-responsive mb-0">
        <table class="table table-sm table-striped bcw-table mb-0">
          <thead>
            <tr>
              <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_before'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_after'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            </tr>
          </thead>
          <tbody id="bcwTbody"></tbody>
        </table>
      </div>
    </div>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 5,
	});

	/** 权威引用：Google WebP 与 Canvas toBlob。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'Google — WebP',
				href: 'https://developers.google.com/speed/webp',
			},
			{
				label: 'MDN — HTMLCanvasElement.toBlob()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob',
			},
			{
				label: 'fflate',
				href: 'https://github.com/101arrowz/fflate',
			},
		],
	});

	/**
	 * 客户端脚本：串行有损 WebP 编码（不铺 JPEG 垫底）、不支持则跳过、ZIP。
	 * 进页自动 loadSample()：不透明色块 + 透明 logo。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软体积上限（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边软上限（像素）。 */
      var SOFT_EDGE = 8192;
      /** 队列最多张数。 */
      var MAX_FILES = 20;
      /** 输出始终 WebP。 */
      var OUT_MIME = 'image/webp';

      /** 拖放区。 */
      var drop = document.getElementById('bcwDrop');
      /** 多文件选择。 */
      var fileInput = document.getElementById('bcwFile');
      /** 队列计数。 */
      var fileCountEl = document.getElementById('bcwFileCount');
      /** 有损质量滑杆（默认 0.8）。 */
      var qualityEl = document.getElementById('bcwQuality');
      /** 质量数字。 */
      var qualityVal = document.getElementById('bcwQualityVal');
      /** 0.8 芯片。 */
      var chipQ80 = document.getElementById('bcwChipQ80');
      /** 转换全部。 */
      var btnConvert = document.getElementById('bcwBtnConvert');
      /** 下载 ZIP。 */
      var btnZip = document.getElementById('bcwBtnZip');
      /** 样例。 */
      var btnSample = document.getElementById('bcwBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('bcwBtnClear');
      /** 警告条。 */
      var warnEl = document.getElementById('bcwWarn');
      /** 错误条。 */
      var errEl = document.getElementById('bcwError');
      /** 状态条。 */
      var statusEl = document.getElementById('bcwStatus');
      /** 汇总。 */
      var summaryEl = document.getElementById('bcwSummary');
      /** 表体。 */
      var tbody = document.getElementById('bcwTbody');

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        decode: ${JSON.stringify(tx(opts.lang, 'err_decode'))},
        encode: ${JSON.stringify(tx(opts.lang, 'err_encode'))},
        unsupported: ${JSON.stringify(tx(opts.lang, 'err_unsupported'))},
        fflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        tooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        large: ${JSON.stringify(tx(opts.lang, 'warn_large'))},
        edge: ${JSON.stringify(tx(opts.lang, 'warn_edge'))},
        anim: ${JSON.stringify(tx(opts.lang, 'warn_anim'))},
        converting: ${JSON.stringify(tx(opts.lang, 'status_compressing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        ok: ${JSON.stringify(tx(opts.lang, 'status_ok'))},
        skip: ${JSON.stringify(tx(opts.lang, 'status_skip'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'file_count_tpl'))},
        summaryTpl: ${JSON.stringify(tx(opts.lang, 'summary_tpl'))}
      };

      /** @type {File[]} 源文件队列。 */
      var queue = [];
      /** @type {{ zipName: string, bytes: Uint8Array }[]} 成功项。 */
      var zipParts = [];

      /**
       * 显示或隐藏警告。
       * @param {string} text 警告文案
       */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /**
       * 显示或隐藏错误。
       * @param {string} text 错误文案
       */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /**
       * 写入状态行。
       * @param {string} text 状态
       */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /**
       * 格式化字节。
       * @param {number} n 字节
       * @returns {string}
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /**
       * 同步质量数字。
       */
      function syncQuality() {
        var q = Math.max(50, Math.min(100, Number(qualityEl.value) || 80)) / 100;
        qualityVal.textContent = q.toFixed(2);
      }

      /**
       * 当前有损质量（0–1）。
       * @returns {number}
       */
      function currentQuality() {
        return Math.max(0.5, Math.min(1, (Number(qualityEl.value) || 80) / 100));
      }

      /**
       * 解码为位图。
       * @param {Blob} blob 源文件
       * @returns {Promise<{bitmap: ImageBitmap|HTMLImageElement, w: number, h: number}>}
       */
      function decodeImage(blob) {
        if (typeof createImageBitmap === 'function') {
          return createImageBitmap(blob).then(function (bmp) {
            return { bitmap: bmp, w: bmp.width, h: bmp.height };
          });
        }
        return new Promise(function (resolve, reject) {
          var url = URL.createObjectURL(blob);
          var img = new Image();
          img.onload = function () {
            URL.revokeObjectURL(url);
            resolve({ bitmap: img, w: img.naturalWidth || img.width, h: img.naturalHeight || img.height });
          };
          img.onerror = function () {
            URL.revokeObjectURL(url);
            reject(new Error('decode'));
          };
          img.src = url;
        });
      }

      /**
       * 不铺 JPEG 垫底，画到透明画布并导出 WebP。toBlob 非 webp 则失败。
       * @param {ImageBitmap|HTMLImageElement} bitmap 源位图
       * @param {number} srcW 源宽
       * @param {number} srcH 源高
       * @returns {Promise<Blob>}
       */
      function encodeWebp(bitmap, srcW, srcH) {
        var canvas = document.createElement('canvas');
        canvas.width = srcW;
        canvas.height = srcH;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('encode'));
        ctx.clearRect(0, 0, srcW, srcH);
        ctx.drawImage(bitmap, 0, 0, srcW, srcH);
        var q = currentQuality();
        return new Promise(function (resolve, reject) {
          try {
            canvas.toBlob(function (blob) {
              if (!blob) { reject(new Error('encode')); return; }
              var mime = String(blob.type || '').toLowerCase();
              if (mime && mime !== OUT_MIME) { reject(new Error('unsupported')); return; }
              resolve(blob);
            }, OUT_MIME, q);
          } catch (e) { reject(e); }
        });
      }

      /**
       * ZIP 内重名追加 (2)。
       * @param {Object<string, boolean>} used 已占用名
       * @param {string} original 原文件名
       * @returns {string}
       */
      function uniqueZipName(used, original) {
        var stem = String(original || 'image').replace(/\\.[^.]+$/, '') || 'image';
        var name = stem + '.webp';
        var n = 2;
        while (used[name]) {
          name = stem + ' (' + n + ').webp';
          n += 1;
        }
        used[name] = true;
        return name;
      }

      /**
       * 刷新队列计数。
       */
      function renderCount() {
        fileCountEl.textContent = msg.countTpl.replace('{n}', String(queue.length));
      }

      /**
       * 追加结果行。
       * @param {{name: string, before: string, after: string, status: string}} row 展示行
       */
      function appendRow(row) {
        var tr = document.createElement('tr');
        var cells = [row.name, row.before, row.after, row.status];
        for (var i = 0; i < cells.length; i++) {
          var td = document.createElement('td');
          td.textContent = cells[i];
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }

      /**
       * 并入队列。
       * @param {FileList|File[]} files 新文件
       */
      function addFiles(files) {
        setError('');
        var list = Array.prototype.slice.call(files || []);
        var warns = [];
        for (var i = 0; i < list.length; i++) {
          if (queue.length >= MAX_FILES) {
            setError(msg.tooMany);
            break;
          }
          var f = list[i];
          queue.push(f);
          if (f.size > SOFT_BYTES) warns.push(msg.large);
          if (/gif/i.test(f.type) || /gif$/i.test(f.name || '')) warns.push(msg.anim);
        }
        if (warns.length) setWarn(warns[0]);
        renderCount();
        zipParts = [];
        btnZip.disabled = true;
      }

      /**
       * 转换一张为 WebP。
       * @param {File} file 源文件
       * @param {Object<string, boolean>} usedNames ZIP 已用名
       * @returns {Promise<{kind: string, zipName?: string, bytes?: Uint8Array, before: number, after: number, name: string}>}
       */
      function convertOne(file, usedNames) {
        return decodeImage(file)
          .then(function (dec) {
            if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
              setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
            }
            var bmp = dec.bitmap;
            return encodeWebp(bmp, dec.w, dec.h).then(function (blob) {
              if (bmp && typeof bmp.close === 'function') bmp.close();
              return blob;
            });
          })
          .then(function (blob) {
            return blob.arrayBuffer().then(function (buf) {
              var zipName = uniqueZipName(usedNames, file.name);
              return {
                kind: 'ok',
                zipName: zipName,
                bytes: new Uint8Array(buf),
                before: file.size,
                after: blob.size,
                name: file.name
              };
            });
          })
          .catch(function () {
            return { kind: 'skip', before: file.size, after: 0, name: file.name };
          });
      }

      /**
       * 串行转换整批。
       * @returns {Promise<void>}
       */
      function convertAll() {
        setError('');
        if (!queue.length) { setError(msg.empty); return Promise.resolve(); }
        setStatus(msg.converting);
        btnConvert.disabled = true;
        btnZip.disabled = true;
        tbody.textContent = '';
        zipParts = [];
        var usedNames = {};
        var ok = 0;
        var skip = 0;
        var i = 0;
        function next() {
          if (i >= queue.length) {
            summaryEl.textContent = msg.summaryTpl
              .replace('{ok}', String(ok))
              .replace('{skip}', String(skip));
            setStatus(msg.done);
            btnZip.disabled = zipParts.length === 0;
            btnConvert.disabled = false;
            return Promise.resolve();
          }
          var file = queue[i];
          i += 1;
          return convertOne(file, usedNames).then(function (row) {
            if (row.kind === 'ok') ok += 1;
            else skip += 1;
            if (row.bytes && row.zipName) zipParts.push({ zipName: row.zipName, bytes: row.bytes });
            var statusLabel = row.kind === 'ok' ? msg.ok : msg.skip;
            appendRow({
              name: row.name,
              before: formatBytes(row.before),
              after: row.kind === 'skip' ? '—' : formatBytes(row.after),
              status: statusLabel
            });
            return next();
          });
        }
        return next();
      }

      /**
       * 打包成功 WebP 为 ZIP。
       */
      function downloadZip() {
        if (!zipParts.length) return;
        if (typeof fflate === 'undefined' || !fflate || typeof fflate.zipSync !== 'function') {
          setError(msg.fflate);
          return;
        }
        var files = {};
        for (var i = 0; i < zipParts.length; i++) {
          files[zipParts[i].zipName] = zipParts[i].bytes;
        }
        try {
          var zipped = fflate.zipSync(files, { level: 1 });
          var blob = new Blob([zipped], { type: 'application/zip' });
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'images-converted-to-webp.zip';
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
        } catch (e) {
          setError(msg.fflate);
        }
      }

      /**
       * 清空队列。
       */
      function clearAll() {
        queue = [];
        zipParts = [];
        fileInput.value = '';
        fileCountEl.textContent = '';
        tbody.textContent = '';
        summaryEl.textContent = '';
        setWarn(''); setError(''); setStatus('');
        btnZip.disabled = true;
      }

      /**
       * 画样例：不透明 JPEG 色块，或带挖孔的透明 PNG。
       * @param {boolean} withHole true 则输出透明 PNG
       * @param {string} fileName 文件名
       * @returns {Promise<File>}
       */
      function makeSampleFile(withHole, fileName) {
        return new Promise(function (resolve, reject) {
          var c = document.createElement('canvas');
          c.width = 640;
          c.height = 400;
          var ctx = c.getContext('2d');
          if (!ctx) { reject(new Error('encode')); return; }
          if (withHole) {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.fillStyle = '#16a34a';
            ctx.fillRect(80, 60, 480, 280);
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(320, 200, 70, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = '#111';
            ctx.font = 'bold 28px sans-serif';
            ctx.fillText('Logo PNG', 24, 40);
          } else {
            var g = ctx.createLinearGradient(0, 0, c.width, c.height);
            g.addColorStop(0, '#1d4ed8');
            g.addColorStop(1, '#db2777');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 28px sans-serif';
            ctx.fillText('Photo JPEG', 24, 40);
          }
          c.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            resolve(new File([blob], fileName, { type: withHole ? 'image/png' : 'image/jpeg' }));
          }, withHole ? 'image/png' : 'image/jpeg', 0.92);
        });
      }

      /**
       * 进页样例：不透明色块 + 透明 logo，入队并转成 WebP。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setError('');
        setWarn('');
        queue = [];
        zipParts = [];
        tbody.textContent = '';
        return makeSampleFile(false, 'listing-photo.jpg')
          .then(function (a) {
            return makeSampleFile(true, 'logo-alpha.png').then(function (b) {
              queue.push(a, b);
              renderCount();
              return convertAll();
            });
          })
          .catch(function () { setError(msg.encode); });
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault(); drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault(); drop.classList.remove('dragover');
        var files = e.dataTransfer && e.dataTransfer.files;
        if (files && files.length) addFiles(files);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
      });
      qualityEl.addEventListener('input', syncQuality);
      chipQ80.addEventListener('click', function () {
        qualityEl.value = '80';
        syncQuality();
      });
      btnConvert.addEventListener('click', function () { convertAll(); });
      btnZip.addEventListener('click', downloadZip);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      syncQuality();
      loadSample();
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('bulk-convert-images-to-webp');
	/** FAQ / related 区块。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD。 */
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
