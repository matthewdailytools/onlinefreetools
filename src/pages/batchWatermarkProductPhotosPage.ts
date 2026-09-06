/**
 * 批量给商品图加水印：共享文字按短边百分比、九宫锚点，先预览再全部套用，成功打 ZIP。
 * slug: batch-watermark-product-photos；规格见 work-tasks/batch-watermark-product-photos/02-tool-info.md。
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
const PREFIX = 'tool_batch_watermark_product_photos';

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
 * 渲染「批量给商品图加水印」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchWatermarkProductPhotosPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径。 */
	const toolPath = '/tools/batch-watermark-product-photos';
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
			currentSlug: 'batch-watermark-product-photos',
			currentAnchor: '#stamper',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页表与预览样式。 */
	const extraHeadHtml = `
  <style>
    .bwm-table { font-size: .875rem; }
    .bwm-table td, .bwm-table th { vertical-align: middle; }
    .bwm-preview { max-width: 100%; height: auto; background: #111; border-radius: .5rem; }
    .bwm-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: .25rem; max-width: 12rem; }
  </style>`;

	/** 九宫锚点按钮。 */
	const gridBtn = (id: string, key: string) =>
		`<button type="button" class="btn btn-outline-secondary btn-sm" id="${id}" data-anchor="${id.replace('bwmA', '').toLowerCase()}">${escapeHtml(tx(opts.lang, key))}</button>`;

	/** 首屏：多选图、共享水印、预览、ZIP。 */
	const contentHtml = `
    <div id="stamper" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="bwmDrop" for="bwmFile">
        <input type="file" id="bwmFile" accept="image/png,image/jpeg,image/webp,image/gif,image/*" multiple>
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
        <span id="bwmFileCount" class="tool-dropzone-file"></span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="bwmChipDraft" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'chip_draft'))}</button>
        <button type="button" id="bwmBtnPreview" class="btn btn-outline-primary btn-sm">${escapeHtml(tx(opts.lang, 'preview'))}</button>
        <button type="button" id="bwmBtnApply" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'apply'))}</button>
        <button type="button" id="bwmBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
        <button type="button" id="bwmBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="bwmBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <div class="row g-2 mb-3">
        <div class="col-md-6">
          <label class="form-label" for="bwmText">${escapeHtml(tx(opts.lang, 'text_label'))}</label>
          <input type="text" id="bwmText" class="form-control form-control-sm" value="SAMPLE" maxlength="80">
        </div>
        <div class="col-md-3">
          <label class="form-label" for="bwmColor">${escapeHtml(tx(opts.lang, 'color_label'))}</label>
          <input type="color" id="bwmColor" class="form-control form-control-color" value="#ffffff">
        </div>
        <div class="col-md-3">
          <label class="form-label" for="bwmFormat">${escapeHtml(tx(opts.lang, 'format_label'))}</label>
          <select id="bwmFormat" class="form-select form-select-sm">
            <option value="image/jpeg" selected>${escapeHtml(tx(opts.lang, 'format_jpeg'))}</option>
            <option value="image/png">${escapeHtml(tx(opts.lang, 'format_png'))}</option>
          </select>
        </div>
      </div>

      <div class="d-flex align-items-center opt-group mb-2 flex-wrap gap-2">
        <label class="form-label mb-0" for="bwmOpacity">${escapeHtml(tx(opts.lang, 'opacity_label'))}</label>
        <input type="range" id="bwmOpacity" min="10" max="100" value="45">
        <span id="bwmOpacityVal" class="small text-muted">45%</span>
        <label class="form-label mb-0" for="bwmPct">${escapeHtml(tx(opts.lang, 'pct_label'))}</label>
        <input type="range" id="bwmPct" min="4" max="20" value="8">
        <span id="bwmPctVal" class="small text-muted">8%</span>
        <label class="form-label mb-0" for="bwmRot">${escapeHtml(tx(opts.lang, 'rotation_label'))}</label>
        <input type="number" id="bwmRot" class="form-control form-control-sm" style="width:4.5rem;" min="-180" max="180" value="0">
      </div>

      <p class="small mb-1">${escapeHtml(tx(opts.lang, 'anchor_label'))}</p>
      <div class="bwm-grid mb-3" id="bwmGrid">
        ${gridBtn('bwmAtl', 'anchor_tl')}
        ${gridBtn('bwmAtc', 'anchor_tc')}
        ${gridBtn('bwmAtr', 'anchor_tr')}
        ${gridBtn('bwmAml', 'anchor_ml')}
        ${gridBtn('bwmAmc', 'anchor_mc')}
        ${gridBtn('bwmAmr', 'anchor_mr')}
        ${gridBtn('bwmAbl', 'anchor_bl')}
        ${gridBtn('bwmAbc', 'anchor_bc')}
        ${gridBtn('bwmAbr', 'anchor_br')}
      </div>

      <canvas id="bwmPreview" class="bwm-preview mb-3" hidden></canvas>

      <p id="bwmWarn" class="alert alert-warning py-2 small mb-2" style="display:none;" role="status"></p>
      <p id="bwmError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="bwmStatus" class="small text-muted mb-2" role="status"></p>
      <p id="bwmSummary" class="small mb-2"></p>

      <div class="table-responsive mb-0">
        <table class="table table-sm table-striped bwm-table mb-0">
          <thead>
            <tr>
              <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_before'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_after'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            </tr>
          </thead>
          <tbody id="bwmTbody"></tbody>
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

	/** 权威引用：Canvas fillText。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — CanvasRenderingContext2D.fillText()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText',
			},
			{
				label: 'fflate',
				href: 'https://github.com/101arrowz/fflate',
			},
		],
	});

	/**
	 * 客户端脚本：短边百分比字号、九宫锚点、先预览再全部套用、ZIP。
	 * 进页 loadSample()：横图 + 竖图 + SAMPLE。
	 */
	const extraBodyHtml = `
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软体积上限。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边软上限。 */
      var SOFT_EDGE = 8192;
      /** 队列上限。 */
      var MAX_FILES = 20;
      /** 短边低于此像素则该行失败。 */
      var MIN_SHORT = 64;
      /** 预览最长边。 */
      var PREVIEW_MAX = 720;
      /** 九宫比例锚点。 */
      var GRID = {
        tl: { x: 0.12, y: 0.12 }, tc: { x: 0.5, y: 0.12 }, tr: { x: 0.88, y: 0.12 },
        ml: { x: 0.12, y: 0.5 }, mc: { x: 0.5, y: 0.5 }, mr: { x: 0.88, y: 0.5 },
        bl: { x: 0.12, y: 0.88 }, bc: { x: 0.5, y: 0.88 }, br: { x: 0.88, y: 0.88 }
      };

      var drop = document.getElementById('bwmDrop');
      var fileInput = document.getElementById('bwmFile');
      var fileCountEl = document.getElementById('bwmFileCount');
      var textEl = document.getElementById('bwmText');
      var colorEl = document.getElementById('bwmColor');
      var formatEl = document.getElementById('bwmFormat');
      var opacityEl = document.getElementById('bwmOpacity');
      var opacityVal = document.getElementById('bwmOpacityVal');
      var pctEl = document.getElementById('bwmPct');
      var pctVal = document.getElementById('bwmPctVal');
      var rotEl = document.getElementById('bwmRot');
      var preview = document.getElementById('bwmPreview');
      var btnPreview = document.getElementById('bwmBtnPreview');
      var btnApply = document.getElementById('bwmBtnApply');
      var btnZip = document.getElementById('bwmBtnZip');
      var btnSample = document.getElementById('bwmBtnSample');
      var btnClear = document.getElementById('bwmBtnClear');
      var chipDraft = document.getElementById('bwmChipDraft');
      var warnEl = document.getElementById('bwmWarn');
      var errEl = document.getElementById('bwmError');
      var statusEl = document.getElementById('bwmStatus');
      var summaryEl = document.getElementById('bwmSummary');
      var tbody = document.getElementById('bwmTbody');

      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        emptyText: ${JSON.stringify(tx(opts.lang, 'empty_text'))},
        decode: ${JSON.stringify(tx(opts.lang, 'err_decode'))},
        encode: ${JSON.stringify(tx(opts.lang, 'err_encode'))},
        fflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        tiny: ${JSON.stringify(tx(opts.lang, 'err_tiny'))},
        tooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        large: ${JSON.stringify(tx(opts.lang, 'warn_large'))},
        edge: ${JSON.stringify(tx(opts.lang, 'warn_edge'))},
        anim: ${JSON.stringify(tx(opts.lang, 'warn_anim'))},
        applying: ${JSON.stringify(tx(opts.lang, 'status_applying'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        ok: ${JSON.stringify(tx(opts.lang, 'status_ok'))},
        skip: ${JSON.stringify(tx(opts.lang, 'status_skip'))},
        tooSmall: ${JSON.stringify(tx(opts.lang, 'status_tiny'))},
        preview: ${JSON.stringify(tx(opts.lang, 'status_preview'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'file_count_tpl'))},
        summaryTpl: ${JSON.stringify(tx(opts.lang, 'summary_tpl'))}
      };

      /** @type {File[]} 源文件队列。 */
      var queue = [];
      /** @type {{ zipName: string, bytes: Uint8Array }[]} 成功项。 */
      var zipParts = [];
      /** 当前九宫键，默认右下。 */
      var anchorKey = 'br';
      /** 斜铺 DRAFT 模式。 */
      var tileMode = false;
      /** 预览位图，用完 close。 */
      var previewBmp = null;

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

      /** 同步滑杆数字，并按空文字禁用套用。 */
      function syncUi() {
        opacityVal.textContent = String(opacityEl.value) + '%';
        pctVal.textContent = String(pctEl.value) + '%';
        var empty = !(textEl.value || '').trim();
        btnApply.disabled = empty || queue.length === 0;
        btnPreview.disabled = queue.length === 0;
      }

      /**
       * 读取共享水印参数。
       * @returns {{text: string, color: string, opacity: number, pct: number, rot: number, mime: string, tile: boolean, ax: number, ay: number}}
       */
      function readControls() {
        var pt = GRID[anchorKey] || GRID.br;
        return {
          text: (textEl.value || '').trim(),
          color: colorEl.value || '#ffffff',
          opacity: Math.max(10, Math.min(100, Number(opacityEl.value) || 45)) / 100,
          pct: Math.max(4, Math.min(20, Number(pctEl.value) || 8)) / 100,
          rot: Math.max(-180, Math.min(180, Number(rotEl.value) || 0)),
          mime: formatEl.value === 'image/png' ? 'image/png' : 'image/jpeg',
          tile: tileMode,
          ax: pt.x,
          ay: pt.y
        };
      }

      /**
       * 在画布上画单点或斜铺文字。
       * @param {CanvasRenderingContext2D} ctx
       * @param {number} w
       * @param {number} h
       * @param {ReturnType<typeof readControls>} ctrl
       * @param {number} scale 预览缩放
       */
      function drawStamp(ctx, w, h, ctrl, scale) {
        if (!ctrl.text) return;
        var short = Math.min(w, h);
        var fontPx = Math.max(8, Math.round(short * ctrl.pct * (scale || 1)));
        ctx.save();
        ctx.globalAlpha = ctrl.opacity;
        ctx.fillStyle = ctrl.color;
        ctx.font = 'bold ' + fontPx + 'px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (ctrl.tile) {
          ctx.translate(w / 2, h / 2);
          ctx.rotate((ctrl.rot * Math.PI) / 180);
          var stepY = fontPx * 3.2;
          var stepX = fontPx * 6;
          var span = Math.max(w, h) * 1.6;
          for (var y = -span; y <= span; y += stepY) {
            for (var x = -span; x <= span; x += stepX) {
              ctx.fillText(ctrl.text, x, y);
            }
          }
        } else {
          ctx.translate(ctrl.ax * w, ctrl.ay * h);
          ctx.rotate((ctrl.rot * Math.PI) / 180);
          ctx.fillText(ctrl.text, 0, 0);
        }
        ctx.restore();
      }

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

      function uniqueZipName(used, original, ext) {
        var stem = String(original || 'image').replace(/\\.[^.]+$/, '') || 'image';
        var name = stem + ext;
        var n = 2;
        while (used[name]) {
          name = stem + ' (' + n + ')' + ext;
          n += 1;
        }
        used[name] = true;
        return name;
      }

      function renderCount() {
        fileCountEl.textContent = msg.countTpl.replace('{n}', String(queue.length));
      }

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

      function addFiles(files) {
        setError('');
        var list = Array.prototype.slice.call(files || []);
        var warns = [];
        for (var i = 0; i < list.length; i++) {
          if (queue.length >= MAX_FILES) { setError(msg.tooMany); break; }
          var f = list[i];
          queue.push(f);
          if (f.size > SOFT_BYTES) warns.push(msg.large);
          if (/gif/i.test(f.type) || /gif$/i.test(f.name || '')) warns.push(msg.anim);
        }
        if (warns.length) setWarn(warns[0]);
        renderCount();
        zipParts = [];
        btnZip.disabled = true;
        syncUi();
      }

      /**
       * 合成一张打水印后的 Blob。
       * @param {File} file
       * @returns {Promise<{kind: string, zipName?: string, bytes?: Uint8Array, before: number, after: number, name: string, ext?: string, blob?: Blob}>}
       */
      function stampOne(file) {
        var ctrl = readControls();
        if (!ctrl.text) return Promise.resolve({ kind: 'skip', before: file.size, after: 0, name: file.name });
        return decodeImage(file).then(function (dec) {
          if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
            setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
          }
          var short = Math.min(dec.w, dec.h);
          if (short < MIN_SHORT) {
            if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();
            return { kind: 'tiny', before: file.size, after: 0, name: file.name };
          }
          var canvas = document.createElement('canvas');
          canvas.width = dec.w;
          canvas.height = dec.h;
          var ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('encode');
          if (ctrl.mime === 'image/jpeg') {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, dec.w, dec.h);
          } else {
            ctx.clearRect(0, 0, dec.w, dec.h);
          }
          ctx.drawImage(dec.bitmap, 0, 0);
          drawStamp(ctx, dec.w, dec.h, ctrl, 1);
          if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();
          return new Promise(function (resolve, reject) {
            canvas.toBlob(function (blob) {
              if (!blob) { reject(new Error('encode')); return; }
              resolve({ kind: 'ok', blob: blob, before: file.size, after: blob.size, name: file.name });
            }, ctrl.mime, ctrl.mime === 'image/jpeg' ? 0.88 : undefined);
          });
        }).catch(function () {
          return { kind: 'skip', before: file.size, after: 0, name: file.name };
        });
      }

      /** 预览队列第一张。 */
      function previewOne() {
        setError('');
        if (!queue.length) { setError(msg.empty); return Promise.resolve(); }
        var ctrl = readControls();
        if (!ctrl.text) { setError(msg.emptyText); return Promise.resolve(); }
        if (previewBmp && typeof previewBmp.close === 'function') previewBmp.close();
        previewBmp = null;
        return decodeImage(queue[0]).then(function (dec) {
          previewBmp = dec.bitmap;
          var scale = Math.min(1, PREVIEW_MAX / Math.max(dec.w, dec.h, 1));
          preview.width = Math.max(1, Math.round(dec.w * scale));
          preview.height = Math.max(1, Math.round(dec.h * scale));
          preview.hidden = false;
          var ctx = preview.getContext('2d');
          if (!ctx) return;
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, preview.width, preview.height);
          ctx.drawImage(dec.bitmap, 0, 0, preview.width, preview.height);
          drawStamp(ctx, preview.width, preview.height, ctrl, 1);
          setStatus(msg.preview);
        }).catch(function () { setError(msg.decode); });
      }

      function applyAll() {
        setError('');
        var ctrl = readControls();
        if (!queue.length) { setError(msg.empty); return Promise.resolve(); }
        if (!ctrl.text) { setError(msg.emptyText); return Promise.resolve(); }
        setStatus(msg.applying);
        btnApply.disabled = true;
        btnZip.disabled = true;
        tbody.textContent = '';
        zipParts = [];
        var usedNames = {};
        var ok = 0;
        var skip = 0;
        var i = 0;
        var ext = ctrl.mime === 'image/png' ? '.png' : '.jpg';
        function next() {
          if (i >= queue.length) {
            summaryEl.textContent = msg.summaryTpl.replace('{ok}', String(ok)).replace('{skip}', String(skip));
            setStatus(msg.done);
            btnZip.disabled = zipParts.length === 0;
            syncUi();
            return Promise.resolve();
          }
          var file = queue[i];
          i += 1;
          return stampOne(file).then(function (row) {
            if (row.kind === 'ok' && row.blob) {
              ok += 1;
              return row.blob.arrayBuffer().then(function (buf) {
                var zipName = uniqueZipName(usedNames, file.name, ext);
                zipParts.push({ zipName: zipName, bytes: new Uint8Array(buf) });
                appendRow({
                  name: row.name,
                  before: formatBytes(row.before),
                  after: formatBytes(row.after),
                  status: msg.ok
                });
                return next();
              });
            }
            skip += 1;
            appendRow({
              name: row.name,
              before: formatBytes(row.before),
              after: '—',
              status: row.kind === 'tiny' ? msg.tooSmall : msg.skip
            });
            if (row.kind === 'tiny') setWarn(msg.tiny);
            return next();
          });
        }
        return next();
      }

      function downloadZip() {
        if (!zipParts.length) return;
        if (typeof fflate === 'undefined' || !fflate || typeof fflate.zipSync !== 'function') {
          setError(msg.fflate);
          return;
        }
        var files = {};
        for (var i = 0; i < zipParts.length; i++) files[zipParts[i].zipName] = zipParts[i].bytes;
        try {
          var zipped = fflate.zipSync(files, { level: 1 });
          var blob = new Blob([zipped], { type: 'application/zip' });
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'product-photos-watermarked.zip';
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
        } catch (e) {
          setError(msg.fflate);
        }
      }

      function clearAll() {
        queue = [];
        zipParts = [];
        fileInput.value = '';
        fileCountEl.textContent = '';
        tbody.textContent = '';
        summaryEl.textContent = '';
        preview.hidden = true;
        if (previewBmp && typeof previewBmp.close === 'function') previewBmp.close();
        previewBmp = null;
        setWarn(''); setError(''); setStatus('');
        btnZip.disabled = true;
        syncUi();
      }

      /**
       * 画横图或竖图色块样例。
       * @param {boolean} portrait
       * @param {string} fileName
       * @returns {Promise<File>}
       */
      function makeSampleFile(portrait, fileName) {
        return new Promise(function (resolve, reject) {
          var c = document.createElement('canvas');
          c.width = portrait ? 400 : 640;
          c.height = portrait ? 640 : 400;
          var ctx = c.getContext('2d');
          if (!ctx) { reject(new Error('encode')); return; }
          var g = ctx.createLinearGradient(0, 0, c.width, c.height);
          g.addColorStop(0, portrait ? '#0f766e' : '#1d4ed8');
          g.addColorStop(1, portrait ? '#f59e0b' : '#db2777');
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, c.width, c.height);
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 28px sans-serif';
          ctx.fillText(portrait ? 'Portrait' : 'Landscape', 24, 40);
          c.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            resolve(new File([blob], fileName, { type: 'image/jpeg' }));
          }, 'image/jpeg', 0.9);
        });
      }

      function loadSample() {
        setError('');
        setWarn('');
        queue = [];
        zipParts = [];
        tbody.textContent = '';
        tileMode = false;
        anchorKey = 'br';
        textEl.value = 'SAMPLE';
        opacityEl.value = '45';
        pctEl.value = '8';
        rotEl.value = '0';
        formatEl.value = 'image/jpeg';
        return makeSampleFile(false, 'listing-landscape.jpg')
          .then(function (a) {
            return makeSampleFile(true, 'listing-portrait.jpg').then(function (b) {
              queue.push(a, b);
              renderCount();
              syncUi();
              return previewOne().then(function () { return applyAll(); });
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
      ['input', 'change'].forEach(function (ev) {
        textEl.addEventListener(ev, syncUi);
        opacityEl.addEventListener(ev, syncUi);
        pctEl.addEventListener(ev, syncUi);
      });
      document.getElementById('bwmGrid').addEventListener('click', function (e) {
        var btn = e.target && e.target.closest ? e.target.closest('[data-anchor]') : null;
        if (!btn) return;
        var key = String(btn.getAttribute('data-anchor') || '').replace(/^a/, '');
        if (GRID[key]) {
          anchorKey = key;
          tileMode = false;
        }
      });
      chipDraft.addEventListener('click', function () {
        tileMode = true;
        textEl.value = 'DRAFT';
        rotEl.value = '-32';
        opacityEl.value = '35';
        pctEl.value = '7';
        syncUi();
      });
      btnPreview.addEventListener('click', function () { previewOne(); });
      btnApply.addEventListener('click', function () { applyAll(); });
      btnZip.addEventListener('click', downloadZip);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      syncUi();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('batch-watermark-product-photos');
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
