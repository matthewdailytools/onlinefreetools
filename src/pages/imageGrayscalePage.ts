/**
 * 图片转灰度（黑白）工具页：本地 Canvas 逐像素换算灰度。
 * slug: image-grayscale（单页；不拆 black-white / desaturate 薄 URL）。
 * Spec: work-tasks/image-grayscale/02-tool-info.md
 *
 * 交互要点（2026-10-14 改写）：
 * - 灰度算法可选：Rec.601 亮度（默认）/ Rec.709 亮度 / 平均值 / 明度 (max+min)/2 / 单通道（红、绿、蓝）；
 * - 强度滑块：100% = 完全灰度，较低值 = 降低饱和度（保留部分颜色）；
 * - 「显示原图」对照；预览随设置实时更新；
 * - 主按钮 Convert → Download；导出格式等收进高级设置；金标 .bcw-hud 进度；Clear 不重载样例。
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
import { bcwHudCss } from './site/bcwHudCss';

/**
 * 非默认语言时在路径前加语言前缀。
 * @param lang 当前界面语言
 * @param pathname 站点路径
 * @param defaultLang 默认（无前缀）语言
 * @returns 带（或不带）语言前缀的路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染图片转灰度工具页。
 * @param opts.lang 当前界面语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 已启用语言列表
 * @returns 完整页面 HTML
 */
export const renderImageGrayscalePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-grayscale';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_image_grayscale_${key}` as never);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的各语言链接。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 备用链接。 */
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
			currentSlug: 'image-grayscale',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 灰度算法下拉：[值, 文案键]。 */
	const methodChoices: Array<[string, string]> = [
		['luma601', 'method_luma601'],
		['luma709', 'method_luma709'],
		['average', 'method_average'],
		['lightness', 'method_lightness'],
		['red', 'method_red'],
		['green', 'method_green'],
		['blue', 'method_blue'],
	];

	/** 页内样式：预览棋盘格、质量禁用态、HUD。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'igsHud', convertBtnId: 'igsBtnApply' })}
    #igsHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #igsHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    #igsPreview {
      max-width: 100%; max-height: 420px;
      border: 1px solid #dee2e6; border-radius: .5rem; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }
    .igs-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    #igsQuality[disabled] { opacity: .5; }
    #igsJpegBgWrap[hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone igs-drop mb-3" id="igsDrop" for="igsFile">
      <input type="file" id="igsFile" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
      <span id="igsFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="row g-2 mb-2 align-items-end">
      <div class="col-12 col-md-5">
        <label class="form-label mb-0" for="igsMethod">${escapeHtml(tx('method_label'))}</label>
        <select id="igsMethod" class="form-select form-select-sm">
          ${methodChoices
						.map(([value, key]) => `<option value="${value}"${value === 'luma601' ? ' selected' : ''}>${escapeHtml(tx(key))}</option>`)
						.join('')}
        </select>
        <p class="form-text mb-0">${escapeHtml(tx('method_hint'))}</p>
      </div>
      <div class="col-8 col-md-4">
        <label class="form-label mb-0" for="igsAmount">${escapeHtml(tx('amount_label'))} <span id="igsAmountVal" class="small">100%</span></label>
        <input type="range" id="igsAmount" class="form-range" min="0" max="100" step="5" value="100">
        <p class="form-text mb-0">${escapeHtml(tx('amount_hint'))}</p>
      </div>
      <div class="col-4 col-md-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="igsShowOriginal">
          <label class="form-check-label" for="igsShowOriginal">${escapeHtml(tx('show_original'))}</label>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="igsBtnApply" class="btn btn-primary btn-sm">${escapeHtml(tx('convert'))}</button>
      <button type="button" id="igsBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="igsBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="igsBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="igsAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="igsFormat">${escapeHtml(tx('format_label'))}</label>
          <select id="igsFormat" class="form-select form-select-sm">
            <option value="image/jpeg">${escapeHtml(tx('format_jpeg'))}</option>
            <option value="image/webp" selected>${escapeHtml(tx('format_webp'))}</option>
            <option value="image/png">${escapeHtml(tx('format_png'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('format_hint'))}</p>
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="igsQuality">${escapeHtml(tx('quality_label'))}</label>
          <input type="range" id="igsQuality" class="form-range" min="50" max="100" value="90">
          <span id="igsQualityVal" class="small">0.90</span>
          <p class="form-text mb-0">${escapeHtml(tx('quality_hint'))}</p>
        </div>
        <div class="col-6 col-md-3" id="igsJpegBgWrap">
          <label class="form-label mb-0" for="igsJpegBg">${escapeHtml(tx('jpeg_bg_label'))}</label>
          <input type="color" id="igsJpegBg" class="form-control form-control-color form-control-sm" value="#ffffff">
          <p class="form-text mb-0">${escapeHtml(tx('jpeg_bg_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="igsHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="igsPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="igsStep"></div>
          <div class="bcw-hud-time" id="igsTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="igsBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="decode">${escapeHtml(tx('step_decode'))}</li>
        <li data-step="gray">${escapeHtml(tx('step_gray'))}</li>
        <li data-step="encode">${escapeHtml(tx('step_encode'))}</li>
      </ol>
    </div>

    <p id="igsWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="igsError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="igsStatus" class="small text-muted mb-2" role="status"></p>
    <p id="igsStats" class="small text-muted mb-2" style="display:none;"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(tx('preview_label'))}</label>
      <div class="igs-preview-wrap">
        <canvas id="igsPreview" hidden></canvas>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_grayscale',
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://en.wikipedia.org/wiki/Grayscale' },
			{ label: tx('ref_b_label'), href: 'https://www.w3.org/TR/filter-effects-1/#grayscaleEquivalent' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		empty: tx('empty'),
		decodeFail: tx('err_decode'),
		encodeFail: tx('err_encode'),
		large: tx('warn_large'),
		edge: tx('warn_edge'),
		animation: tx('warn_animation'),
		working: tx('status_working'),
		done: tx('status_done'),
		statsTpl: tx('stats_tpl'),
		decodeStep: tx('decode_step'),
		grayStep: tx('gray_step'),
		encodeStep: tx('encode_step'),
		elapsed: tx('elapsed'),
		fmtJpeg: tx('format_jpeg'),
		fmtPng: tx('format_png'),
		fmtWebp: tx('format_webp'),
	};

	/**
	 * 客户端脚本：解码 → 逐像素灰度 → 导出；金标 HUD；Clear 不重载样例。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 边长超过此像素时软警告。 */
      var SOFT_EDGE = 8192;
      /** 预览最大显示边长。 */
      var PREVIEW_MAX_EDGE = 480;

      /** 页面控件。 */
      var drop = document.getElementById('igsDrop');
      var fileInput = document.getElementById('igsFile');
      var fileNameEl = document.getElementById('igsFileName');
      var methodEl = document.getElementById('igsMethod');
      var amountEl = document.getElementById('igsAmount');
      var amountVal = document.getElementById('igsAmountVal');
      var showOrigEl = document.getElementById('igsShowOriginal');
      var formatEl = document.getElementById('igsFormat');
      var qualityEl = document.getElementById('igsQuality');
      var qualityVal = document.getElementById('igsQualityVal');
      var jpegBgWrap = document.getElementById('igsJpegBgWrap');
      var jpegBgEl = document.getElementById('igsJpegBg');
      var btnApply = document.getElementById('igsBtnApply');
      var btnDownload = document.getElementById('igsBtnDownload');
      var btnSample = document.getElementById('igsBtnSample');
      var btnClear = document.getElementById('igsBtnClear');
      var warnEl = document.getElementById('igsWarn');
      var errEl = document.getElementById('igsError');
      var statusEl = document.getElementById('igsStatus');
      var statsEl = document.getElementById('igsStats');
      var preview = document.getElementById('igsPreview');
      var hud = document.getElementById('igsHud');
      var pctEl = document.getElementById('igsPct');
      var stepEl = document.getElementById('igsStep');
      var timeEl = document.getElementById('igsTime');
      var barEl = document.getElementById('igsBar');

      /** 本地化文案字典。 */
      var msg = ${JSON.stringify(clientText)};

      /** @type {{ file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }|null} 已加载的源图。 */
      var sourceLayer = null;
      /** @type {Blob|null} 上次导出的 Blob。 */
      var resultBlob = null;
      /** 忙碌锁。 */
      var busy = false;
      /** HUD 计时起点。 */
      var startedAt = 0;
      /** HUD 计时器句柄。 */
      var tickTimer = 0;

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} tpl 模板
       * @param {Object<string, string>} map 占位符 → 值
       * @returns {string} 替换结果
       */
      function fill(tpl, map) {
        var s = String(tpl);
        for (var k in map) {
          if (Object.prototype.hasOwnProperty.call(map, k)) s = s.split('{' + k + '}').join(String(map[k]));
        }
        return s;
      }

      /**
       * 格式化字节数。
       * @param {number} n 字节
       * @returns {string} 如 12.3 KB
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /**
       * MIME → 短格式名。
       * @param {string} mime MIME 类型
       * @returns {string} 显示名
       */
      function fmtLabel(mime) {
        if (mime === 'image/png') return msg.fmtPng;
        if (mime === 'image/webp') return msg.fmtWebp;
        return msg.fmtJpeg;
      }

      /** 显示或隐藏警告行。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示或隐藏错误行。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行。 */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /**
       * 转换期间禁用控件。
       * @param {boolean} on 是否锁定
       */
      function lock(on) {
        busy = on;
        [btnApply, btnSample, btnClear, fileInput, methodEl, amountEl, showOrigEl, formatEl, qualityEl, jpegBgEl].forEach(function (el) {
          el.disabled = on;
        });
        btnDownload.disabled = on || !resultBlob;
        btnApply.setAttribute('aria-busy', String(on));
        syncUiLabels();
      }

      /** 刷新 HUD 已用时。 */
      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(msg.elapsed, { s: String(sec) });
      }

      /**
       * 更新进度 HUD。
       * @param {number} pct 0–100
       * @param {string} stepKey decode|gray|encode
       * @param {string} stepText 步骤说明
       */
      function progress(pct, stepKey, stepText) {
        hud.hidden = false;
        hud.classList.add('is-on');
        hud.classList.remove('is-error', 'is-done');
        var p = Math.max(0, Math.min(100, Math.round(pct)));
        pctEl.textContent = p + '%';
        barEl.style.width = p + '%';
        barEl.setAttribute('aria-valuenow', String(p));
        stepEl.textContent = stepText || '';
        var order = ['decode', 'gray', 'encode'];
        hud.querySelectorAll('.bcw-hud-steps li').forEach(function (li) {
          var k = li.getAttribute('data-step');
          li.classList.toggle('is-done', k !== stepKey && order.indexOf(k) < order.indexOf(stepKey));
          li.classList.toggle('is-active', k === stepKey);
        });
      }

      /**
       * 结束 HUD。
       * @param {boolean} ok 是否成功
       */
      function endHud(ok) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        hud.classList.remove('is-on');
        if (ok) {
          hud.classList.add('is-done');
          pctEl.textContent = '100%';
          barEl.style.width = '100%';
        } else {
          hud.classList.add('is-error');
        }
      }

      /**
       * 将 Blob 解码为 ImageBitmap 或 HTMLImageElement。
       * @param {Blob} blob 图片数据
       * @returns {Promise<{ bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }>}
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

      /** 若适用则关闭 ImageBitmap。 */
      function disposeSource(layer) {
        if (!layer) return;
        if (layer.bitmap && typeof layer.bitmap.close === 'function') layer.bitmap.close();
      }

      /**
       * 按所选算法算出一个像素的灰度值（0–255 浮点）。
       * @param {string} method 算法
       * @param {number} r 红
       * @param {number} g 绿
       * @param {number} b 蓝
       * @returns {number} 灰度值
       */
      function grayValue(method, r, g, b) {
        if (method === 'luma709') return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (method === 'average') return (r + g + b) / 3;
        if (method === 'lightness') return (Math.max(r, g, b) + Math.min(r, g, b)) / 2;
        if (method === 'red') return r;
        if (method === 'green') return g;
        if (method === 'blue') return b;
        return 0.299 * r + 0.587 * g + 0.114 * b;
      }

      /**
       * 对 ImageData 应用灰度；amount < 1 时向灰度插值（降低饱和度）；保留 alpha。
       * @param {ImageData} imageData 像素数据
       * @param {string} method 算法
       * @param {number} amount 强度 0–1
       */
      function applyGray(imageData, method, amount) {
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
          var r = data[i];
          var g = data[i + 1];
          var b = data[i + 2];
          var y = grayValue(method, r, g, b);
          data[i] = Math.round(r + (y - r) * amount);
          data[i + 1] = Math.round(g + (y - g) * amount);
          data[i + 2] = Math.round(b + (y - b) * amount);
        }
      }

      /**
       * 读取当前算法与强度。
       * @returns {{ method: string, amount: number }}
       */
      function readOptions() {
        return { method: methodEl.value, amount: Math.max(0, Math.min(1, Number(amountEl.value) / 100)) };
      }

      /**
       * 构建全分辨率灰度画布。
       * @param {ImageBitmap|HTMLImageElement} bitmap 源图
       * @param {number} w 源宽
       * @param {number} h 源高
       * @param {boolean} forJpeg JPEG 是否需要底色
       * @returns {HTMLCanvasElement} 结果画布
       */
      function buildGrayCanvas(bitmap, w, h, forJpeg) {
        var o = readOptions();
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) throw new Error('encode');
        if (forJpeg) {
          ctx.fillStyle = jpegBgEl.value || '#ffffff';
          ctx.fillRect(0, 0, w, h);
        }
        ctx.drawImage(bitmap, 0, 0);
        var imageData = ctx.getImageData(0, 0, w, h);
        applyGray(imageData, o.method, o.amount);
        ctx.putImageData(imageData, 0, 0);
        return canvas;
      }

      /** 同步质量 / 强度标签与格式相关 UI。 */
      function syncUiLabels() {
        var isPng = formatEl.value === 'image/png';
        if (!busy) qualityEl.disabled = isPng;
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        qualityVal.textContent = isPng ? '\\u2014' : q.toFixed(2);
        amountVal.textContent = String(amountEl.value) + '%';
        jpegBgWrap.hidden = formatEl.value !== 'image/jpeg';
      }

      /** 刷新文件大小、边长、动图警告。 */
      function refreshWarnings() {
        var warns = [];
        if (sourceLayer && sourceLayer.file.size > SOFT_BYTES) warns.push(msg.large);
        if (sourceLayer && (sourceLayer.w > SOFT_EDGE || sourceLayer.h > SOFT_EDGE)) warns.push(msg.edge);
        if (sourceLayer && ((sourceLayer.file.type || '').indexOf('gif') >= 0 || /[.]gif$/i.test(sourceLayer.file.name || ''))) {
          warns.push(msg.animation);
        }
        setWarn(warns.join(' '));
      }

      /**
       * 在预览画布上绘制灰度结果（缩放显示；勾选「显示原图」时画原图）。
       * @param {boolean} [keepResult] 重绘预览时保留导出 Blob
       */
      function drawPreview(keepResult) {
        if (!keepResult) {
          resultBlob = null;
          btnDownload.disabled = true;
          statsEl.style.display = 'none';
        }
        if (!sourceLayer) {
          preview.hidden = true;
          return;
        }
        var scale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(sourceLayer.w, sourceLayer.h, 1));
        var pw = Math.max(1, Math.round(sourceLayer.w * scale));
        var ph = Math.max(1, Math.round(sourceLayer.h * scale));
        preview.width = pw;
        preview.height = ph;
        preview.hidden = false;
        var ctx = preview.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, pw, ph);
        ctx.drawImage(sourceLayer.bitmap, 0, 0, pw, ph);
        if (showOrigEl.checked) return;
        var o = readOptions();
        var imageData = ctx.getImageData(0, 0, pw, ph);
        applyGray(imageData, o.method, o.amount);
        ctx.putImageData(imageData, 0, 0);
      }

      /**
       * 从文件加载源图。
       * @param {File} file 图片文件
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        setError('');
        return decodeImage(file)
          .then(function (dec) {
            disposeSource(sourceLayer);
            sourceLayer = { file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h };
            fileNameEl.textContent = file.name || '';
            refreshWarnings();
            drawPreview(false);
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * 导出灰度图片并启用下载。
       * @returns {Promise<void>}
       */
      function applyGrayscale() {
        setError('');
        resultBlob = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        if (!sourceLayer) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setStatus(msg.working);
        lock(true);
        startedAt = Date.now();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 250);
        tickTime();
        progress(5, 'decode', msg.decodeStep);

        var mime = formatEl.value;
        var forJpeg = mime === 'image/jpeg';
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));

        return new Promise(function (resolve) {
          requestAnimationFrame(function () {
            setTimeout(function () {
              try {
                progress(35, 'gray', msg.grayStep);
                var canvas = buildGrayCanvas(sourceLayer.bitmap, sourceLayer.w, sourceLayer.h, forJpeg);
                progress(70, 'encode', fill(msg.encodeStep, { fmt: fmtLabel(mime) }));
                canvas.toBlob(function (blob) {
                  lock(false);
                  if (!blob) {
                    setError(msg.encodeFail);
                    setStatus('');
                    endHud(false);
                    resolve();
                    return;
                  }
                  resultBlob = blob;
                  btnDownload.disabled = false;
                  setStatus(msg.done);
                  statsEl.textContent = fill(msg.statsTpl, {
                    w: String(sourceLayer.w),
                    h: String(sourceLayer.h),
                    method: methodEl.options[methodEl.selectedIndex].text,
                    fmt: fmtLabel(mime),
                    bytes: formatBytes(blob.size)
                  });
                  statsEl.style.display = '';
                  progress(100, 'encode', fill(msg.encodeStep, { fmt: fmtLabel(mime) }));
                  endHud(true);
                  drawPreview(true);
                  resolve();
                }, mime, mime === 'image/png' ? undefined : q);
              } catch (e) {
                lock(false);
                setError(msg.encodeFail);
                setStatus('');
                endHud(false);
                resolve();
              }
            }, 40);
          });
        });
      }

      /** 触发下载上次导出的 Blob。 */
      function downloadResult() {
        if (!resultBlob) return;
        var mime = resultBlob.type || formatEl.value;
        var ext = mime === 'image/png' ? 'png' : mime === 'image/webp' ? 'webp' : 'jpg';
        var base = sourceLayer && sourceLayer.file && sourceLayer.file.name ? sourceLayer.file.name.replace(/[.][^.]+$/, '') : 'image';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = base + '-grayscale.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成纯红 / 绿 / 蓝 / 黄四色块 + 彩虹渐变样例，用默认 Rec.601 转换并导出。
       * 四色块能直接看出各算法差异（明度法四块都变成 128 的同一灰）。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var c = document.createElement('canvas');
        c.width = 480;
        c.height = 320;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
        for (var i = 0; i < 4; i++) {
          ctx.fillStyle = colors[i];
          ctx.fillRect(i * 120, 0, 120, 220);
        }
        var grad = ctx.createLinearGradient(0, 0, 480, 0);
        grad.addColorStop(0, '#ff0000');
        grad.addColorStop(0.17, '#ff8800');
        grad.addColorStop(0.33, '#ffff00');
        grad.addColorStop(0.5, '#00ff00');
        grad.addColorStop(0.67, '#00ffff');
        grad.addColorStop(0.83, '#0000ff');
        grad.addColorStop(1, '#ff00ff');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 220, 480, 100);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            loadFile(new File([blob], 'sample.png', { type: 'image/png' }))
              .then(function () { return applyGrayscale(); })
              .then(resolve);
          }, 'image/png');
        });
      }

      /**
       * 真正清空，不重新加载样例；设置恢复默认。
       * @param {boolean} resetInputs 是否清空文件输入
       */
      function clearAll(resetInputs) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        disposeSource(sourceLayer);
        sourceLayer = null;
        if (resetInputs !== false) fileInput.value = '';
        fileNameEl.textContent = '';
        resultBlob = null;
        btnDownload.disabled = true;
        preview.hidden = true;
        setError('');
        setWarn('');
        setStatus('');
        statsEl.style.display = 'none';
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
        methodEl.value = 'luma601';
        amountEl.value = '100';
        showOrigEl.checked = false;
        formatEl.value = 'image/webp';
        qualityEl.value = '90';
        jpegBgEl.value = '#ffffff';
        syncUiLabels();
      }

      /** 绑定拖放与文件选择。 */
      function wireDropzone() {
        drop.addEventListener('dragover', function (e) {
          e.preventDefault();
          drop.classList.add('dragover');
        });
        drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
        drop.addEventListener('drop', function (e) {
          e.preventDefault();
          drop.classList.remove('dragover');
          var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
          if (f) loadFile(f);
        });
        fileInput.addEventListener('change', function () {
          var f = fileInput.files && fileInput.files[0];
          if (f) loadFile(f);
        });
      }

      wireDropzone();

      /** 算法 / 强度变化：实时重绘预览，需重新 Convert 才能下载新结果。 */
      methodEl.addEventListener('change', function () { drawPreview(false); });
      amountEl.addEventListener('input', function () { syncUiLabels(); drawPreview(false); });
      /** 显示原图只影响预览，不作废已导出的结果。 */
      showOrigEl.addEventListener('change', function () { drawPreview(true); });
      formatEl.addEventListener('change', syncUiLabels);
      qualityEl.addEventListener('input', syncUiLabels);

      btnApply.addEventListener('click', function () { applyGrayscale(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUiLabels();
      /** 进页自动跑样例。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-grayscale');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as never),
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
