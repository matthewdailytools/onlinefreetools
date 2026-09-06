/**
 * 批量压缩 PNG 工具页：多张图输出始终 PNG 并保留 alpha，串行重编码后打 ZIP。
 * slug: bulk-compress-png-images；规格见 work-tasks/bulk-compress-png-images/02-tool-info.md。
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
const PREFIX = 'tool_bulk_compress_png_images';

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
 * 渲染「批量压缩 PNG」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBulkCompressPngImagesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/bulk-compress-png-images';
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
			currentSlug: 'bulk-compress-png-images',
			currentAnchor: '#compressor',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：结果表。 */
	const extraHeadHtml = `
  <style>
    .bpn-table { font-size: .875rem; }
    .bpn-table td, .bpn-table th { vertical-align: middle; }
  </style>`;

	/** 首屏：多选 PNG、最长边芯片、汇总表、ZIP。 */
	const contentHtml = `
    <div id="compressor" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="bpnDrop" for="bpnFile">
        <input type="file" id="bpnFile" accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,image/*" multiple>
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
        <span id="bpnFileCount" class="tool-dropzone-file"></span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="bpnChip1024" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'chip_1024'))}</button>
        <button type="button" id="bpnChipRe" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'chip_reencode'))}</button>
        <button type="button" id="bpnBtnCompress" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'compress'))}</button>
        <button type="button" id="bpnBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
        <button type="button" id="bpnBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="bpnBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <div class="d-flex align-items-center opt-group mb-3 flex-wrap gap-2">
        <div class="form-check mb-0">
          <input class="form-check-input" type="checkbox" id="bpnResizeOn" checked>
          <label class="form-check-label" for="bpnResizeOn">${escapeHtml(tx(opts.lang, 'resize_on'))}</label>
        </div>
        <label class="form-label mb-0" for="bpnMaxEdge">${escapeHtml(tx(opts.lang, 'max_edge_label'))}</label>
        <input type="number" id="bpnMaxEdge" class="form-control form-control-sm" style="width:5.5rem;" min="64" max="8192" value="2048">
      </div>

      <p id="bpnWarn" class="alert alert-warning py-2 small mb-2" style="display:none;" role="status"></p>
      <p id="bpnError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="bpnStatus" class="small text-muted mb-2" role="status"></p>
      <p id="bpnSummary" class="small mb-2"></p>

      <div class="table-responsive mb-0">
        <table class="table table-sm table-striped bpn-table mb-0">
          <thead>
            <tr>
              <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_before'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_after'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            </tr>
          </thead>
          <tbody id="bpnTbody"></tbody>
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

	/** 权威引用：PNG 与 Canvas toBlob。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'W3C — Portable Network Graphics (PNG)',
				href: 'https://www.w3.org/TR/png/',
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
	 * 客户端脚本：串行 PNG 重编码（不铺垫底）、失败跳过、ZIP。
	 * 进页自动 loadSample()。
	 */
	const extraBodyHtml = `
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软体积上限（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边软上限（像素）。 */
      var SOFT_EDGE = 8192;
      /** 队列最多张数。 */
      var MAX_FILES = 20;
      /** 输出始终 PNG。 */
      var OUT_MIME = 'image/png';

      /** 拖放区。 */
      var drop = document.getElementById('bpnDrop');
      /** 多文件选择。 */
      var fileInput = document.getElementById('bpnFile');
      /** 队列计数。 */
      var fileCountEl = document.getElementById('bpnFileCount');
      /** 是否限制最长边。 */
      var resizeOn = document.getElementById('bpnResizeOn');
      /** 最长边像素。 */
      var maxEdgeEl = document.getElementById('bpnMaxEdge');
      /** 压缩全部。 */
      var btnCompress = document.getElementById('bpnBtnCompress');
      /** 下载 ZIP。 */
      var btnZip = document.getElementById('bpnBtnZip');
      /** 样例。 */
      var btnSample = document.getElementById('bpnBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('bpnBtnClear');
      /** 1024 边芯片。 */
      var chip1024 = document.getElementById('bpnChip1024');
      /** 只重编码芯片。 */
      var chipRe = document.getElementById('bpnChipRe');
      /** 警告条。 */
      var warnEl = document.getElementById('bpnWarn');
      /** 错误条。 */
      var errEl = document.getElementById('bpnError');
      /** 状态条。 */
      var statusEl = document.getElementById('bpnStatus');
      /** 汇总。 */
      var summaryEl = document.getElementById('bpnSummary');
      /** 表体。 */
      var tbody = document.getElementById('bpnTbody');

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        decode: ${JSON.stringify(tx(opts.lang, 'err_decode'))},
        encode: ${JSON.stringify(tx(opts.lang, 'err_encode'))},
        fflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        tooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        large: ${JSON.stringify(tx(opts.lang, 'warn_large'))},
        edge: ${JSON.stringify(tx(opts.lang, 'warn_edge'))},
        anim: ${JSON.stringify(tx(opts.lang, 'warn_anim'))},
        same: ${JSON.stringify(tx(opts.lang, 'warn_same'))},
        compressing: ${JSON.stringify(tx(opts.lang, 'status_compressing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        ok: ${JSON.stringify(tx(opts.lang, 'status_ok'))},
        still: ${JSON.stringify(tx(opts.lang, 'status_same'))},
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
       * 同步最长边输入是否可改。
       */
      function syncOptionsUi() {
        maxEdgeEl.disabled = !resizeOn.checked;
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
       * 按最长边计算输出尺寸（不放大）。
       * @param {number} srcW 源宽
       * @param {number} srcH 源高
       * @returns {{w: number, h: number}}
       */
      function scaledSize(srcW, srcH) {
        if (!resizeOn.checked) return { w: srcW, h: srcH };
        var maxE = Math.max(64, Math.min(SOFT_EDGE, Number(maxEdgeEl.value) || 2048));
        var long = Math.max(srcW, srcH);
        if (long <= maxE) return { w: srcW, h: srcH };
        var scale = maxE / long;
        return { w: Math.max(1, Math.round(srcW * scale)), h: Math.max(1, Math.round(srcH * scale)) };
      }

      /**
       * 不铺垫底，直接画到透明画布并导出 PNG。
       * @param {ImageBitmap|HTMLImageElement} bitmap 源位图
       * @param {number} srcW 源宽
       * @param {number} srcH 源高
       * @returns {Promise<Blob>}
       */
      function encodePng(bitmap, srcW, srcH) {
        var size = scaledSize(srcW, srcH);
        var canvas = document.createElement('canvas');
        canvas.width = size.w;
        canvas.height = size.h;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('encode'));
        ctx.clearRect(0, 0, size.w, size.h);
        ctx.drawImage(bitmap, 0, 0, size.w, size.h);
        return new Promise(function (resolve, reject) {
          try {
            canvas.toBlob(function (blob) {
              if (!blob) { reject(new Error('encode')); return; }
              resolve(blob);
            }, OUT_MIME);
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
        var name = stem + '.png';
        var n = 2;
        while (used[name]) {
          name = stem + ' (' + n + ').png';
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
       * 压缩一张为 PNG。
       * @param {File} file 源文件
       * @param {Object<string, boolean>} usedNames ZIP 已用名
       * @returns {Promise<{kind: string, zipName?: string, bytes?: Uint8Array, before: number, after: number, name: string}>}
       */
      function compressOne(file, usedNames) {
        return decodeImage(file)
          .then(function (dec) {
            if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
              setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
            }
            var bmp = dec.bitmap;
            return encodePng(bmp, dec.w, dec.h).then(function (blob) {
              if (bmp && typeof bmp.close === 'function') bmp.close();
              return blob;
            });
          })
          .then(function (blob) {
            return blob.arrayBuffer().then(function (buf) {
              var zipName = uniqueZipName(usedNames, file.name);
              var barely = blob.size >= file.size * 0.95;
              return {
                kind: barely ? 'same' : 'ok',
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
       * 串行压缩整批。
       * @returns {Promise<void>}
       */
      function compressAll() {
        setError('');
        if (!queue.length) { setError(msg.empty); return Promise.resolve(); }
        setStatus(msg.compressing);
        btnCompress.disabled = true;
        btnZip.disabled = true;
        tbody.textContent = '';
        zipParts = [];
        var usedNames = {};
        var ok = 0;
        var same = 0;
        var skip = 0;
        var i = 0;
        function next() {
          if (i >= queue.length) {
            summaryEl.textContent = msg.summaryTpl
              .replace('{ok}', String(ok))
              .replace('{same}', String(same))
              .replace('{skip}', String(skip));
            setStatus(msg.done);
            if (same > 0) setWarn(msg.same);
            btnZip.disabled = zipParts.length === 0;
            btnCompress.disabled = false;
            return Promise.resolve();
          }
          var file = queue[i];
          i += 1;
          return compressOne(file, usedNames).then(function (row) {
            if (row.kind === 'ok') ok += 1;
            else if (row.kind === 'same') same += 1;
            else skip += 1;
            if (row.bytes && row.zipName) zipParts.push({ zipName: row.zipName, bytes: row.bytes });
            var statusLabel = row.kind === 'ok' ? msg.ok : row.kind === 'same' ? msg.still : msg.skip;
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
       * 打包成功 PNG 为 ZIP。
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
          a.download = 'png-images-compressed.zip';
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
       * 画一张带透明棋盘的 PNG 样例。
       * @param {string} label 画布文字
       * @param {string} color 色块颜色
       * @param {string} fileName 文件名
       * @returns {Promise<File>}
       */
      function makeSampleFile(label, color, fileName) {
        return new Promise(function (resolve, reject) {
          var c = document.createElement('canvas');
          c.width = 640;
          c.height = 400;
          var ctx = c.getContext('2d');
          if (!ctx) { reject(new Error('encode')); return; }
          ctx.clearRect(0, 0, c.width, c.height);
          var cell = 24;
          for (var y = 0; y < c.height; y += cell) {
            for (var x = 0; x < c.width; x += cell) {
              if (((x / cell) + (y / cell)) % 2 === 0) {
                ctx.fillStyle = 'rgba(0,0,0,0.08)';
                ctx.fillRect(x, y, cell, cell);
              }
            }
          }
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(c.width / 2, c.height / 2, 110, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#111';
          ctx.font = 'bold 28px sans-serif';
          ctx.fillText(label, 24, 40);
          c.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            resolve(new File([blob], fileName, { type: 'image/png' }));
          }, OUT_MIME);
        });
      }

      /**
       * 进页样例：两张透明 PNG 入队并压缩。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setError('');
        setWarn('');
        queue = [];
        zipParts = [];
        tbody.textContent = '';
        return makeSampleFile('Logo A', '#2563eb', 'logo-a.png')
          .then(function (a) {
            return makeSampleFile('Logo B', '#16a34a', 'logo-b.png').then(function (b) {
              queue.push(a, b);
              renderCount();
              return compressAll();
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
      resizeOn.addEventListener('change', syncOptionsUi);
      chip1024.addEventListener('click', function () {
        resizeOn.checked = true;
        maxEdgeEl.value = '1024';
        syncOptionsUi();
      });
      chipRe.addEventListener('click', function () {
        resizeOn.checked = false;
        syncOptionsUi();
      });
      btnCompress.addEventListener('click', function () { compressAll(); });
      btnZip.addEventListener('click', downloadZip);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      syncOptionsUi();
      loadSample();
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('bulk-compress-png-images');
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
