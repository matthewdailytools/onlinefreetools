/**
 * 图片加边框工具页：扩画布 + 边框填充 + 居中绘制原图，本地处理不上传。
 * slug: image-border（单页；不拆 photo-frame / add-border / square-photo 等近义 URL）。
 * Spec: work-tasks/image-border/02-tool-info.md
 *
 * 交互要点（2026-10-14 改写）：
 * - 边框样式：四边等宽 / 补成正方形 1:1 / 补成竖版 4:5 / 补成 9:16 快拍 / 拍立得（底边约为四倍）；
 * - 宽度单位：像素或「照片短边的百分比」（不同分辨率的一组照片边框看起来一样宽）；
 * - 填充：白 / 黑 / 取照片边缘平均色 / 模糊照片铺底 / 自定义颜色；
 * - 高级设置收起：照片圆角、内衬线、投影、导出格式（默认与原图相同）与质量；
 * - 主按钮 Apply → Download；金标 .bcw-hud 进度；统计行给出前后尺寸与四边像素；Clear 不重载样例。
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
 * 渲染图片加边框工具页。
 * @param opts.lang 当前界面语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 已启用语言列表
 * @returns 完整页面 HTML
 */
export const renderImageBorderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-border';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_image_border_${key}` as never);
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
			currentSlug: 'image-border',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 边框样式下拉：[值, 文案键]。 */
	const shapeChoices: Array<[string, string]> = [
		['even', 'shape_even'],
		['square', 'shape_square'],
		['r45', 'shape_45'],
		['r916', 'shape_916'],
		['polaroid', 'shape_polaroid'],
	];

	/** 填充方式下拉：[值, 文案键]。 */
	const fillChoices: Array<[string, string]> = [
		['white', 'fill_white'],
		['black', 'fill_black'],
		['edge', 'fill_edge'],
		['blur', 'fill_blur'],
		['custom', 'fill_custom'],
	];

	/**
	 * 生成 <option> 列表。
	 * @param choices [值, 文案键] 数组
	 * @param selected 默认选中值
	 * @returns option HTML
	 */
	const optionsHtml = (choices: Array<[string, string]>, selected: string) =>
		choices
			.map(([value, key]) => `<option value="${value}"${value === selected ? ' selected' : ''}>${escapeHtml(tx(key))}</option>`)
			.join('');

	/** 页内样式：预览棋盘格（看出透明区）、隐藏态、HUD。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'ibdHud', convertBtnId: 'ibdBtnApply' })}
    #ibdHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #ibdHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    #ibdPreview {
      max-width: 100%; max-height: 460px;
      border: 1px solid #dee2e6; border-radius: .25rem; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }
    .ibd-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    .ibd-pair { display:flex; gap:.4rem; }
    .ibd-pair input { flex:1 1 auto; min-width:0; }
    .ibd-pair select { flex:0 0 auto; width:auto; }
    #ibdColorWrap[hidden] { display:none !important; }
    #ibdQuality[disabled] { opacity:.5; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone ibd-drop mb-3" id="ibdDrop" for="ibdFile">
      <input type="file" id="ibdFile" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
      <span id="ibdFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="row g-2 mb-2 align-items-start">
      <div class="col-12 col-md-4">
        <label class="form-label mb-0" for="ibdShape">${escapeHtml(tx('shape_label'))}</label>
        <select id="ibdShape" class="form-select form-select-sm">${optionsHtml(shapeChoices, 'even')}</select>
        <p class="form-text mb-0">${escapeHtml(tx('shape_hint'))}</p>
      </div>
      <div class="col-7 col-md-4">
        <label class="form-label mb-0" for="ibdWidth">${escapeHtml(tx('width_label'))}</label>
        <div class="ibd-pair">
          <input type="number" id="ibdWidth" class="form-control form-control-sm" min="0" step="any" value="5" inputmode="decimal">
          <select id="ibdUnit" class="form-select form-select-sm" aria-label="${escapeHtml(tx('width_label'))}">
            <option value="pct" selected>${escapeHtml(tx('unit_pct'))}</option>
            <option value="px">${escapeHtml(tx('unit_px'))}</option>
          </select>
        </div>
        <p class="form-text mb-0">${escapeHtml(tx('width_hint'))}</p>
      </div>
      <div class="col-5 col-md-4">
        <label class="form-label mb-0" for="ibdFill">${escapeHtml(tx('fill_label'))}</label>
        <select id="ibdFill" class="form-select form-select-sm">${optionsHtml(fillChoices, 'white')}</select>
        <div id="ibdColorWrap" class="mt-1" hidden>
          <label class="form-label mb-0 small" for="ibdColor">${escapeHtml(tx('color_label'))}</label>
          <input type="color" id="ibdColor" class="form-control form-control-color form-control-sm" value="#f4efe6">
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="ibdBtnApply" class="btn btn-primary btn-sm">${escapeHtml(tx('apply'))}</button>
      <button type="button" id="ibdBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="ibdBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="ibdBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="ibdAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="ibdRadius">${escapeHtml(tx('radius_label'))}</label>
          <input type="number" id="ibdRadius" class="form-control form-control-sm" min="0" max="50" step="any" value="0" inputmode="decimal">
          <p class="form-text mb-0">${escapeHtml(tx('radius_hint'))}</p>
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="ibdLine">${escapeHtml(tx('line_label'))}</label>
          <div class="ibd-pair">
            <input type="number" id="ibdLine" class="form-control form-control-sm" min="0" max="200" step="1" value="0" inputmode="numeric">
            <input type="color" id="ibdLineColor" class="form-control form-control-color form-control-sm" value="#333333" aria-label="${escapeHtml(tx('line_color_label'))}">
          </div>
          <p class="form-text mb-0">${escapeHtml(tx('line_hint'))}</p>
        </div>
        <div class="col-12 col-md-2">
          <div class="form-check mt-md-4">
            <input class="form-check-input" type="checkbox" id="ibdShadow">
            <label class="form-check-label" for="ibdShadow">${escapeHtml(tx('shadow_label'))}</label>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <label class="form-label mb-0" for="ibdFormat">${escapeHtml(tx('format_label'))}</label>
          <select id="ibdFormat" class="form-select form-select-sm">
            <option value="same" selected>${escapeHtml(tx('format_same'))}</option>
            <option value="image/jpeg">${escapeHtml(tx('format_jpeg'))}</option>
            <option value="image/png">${escapeHtml(tx('format_png'))}</option>
            <option value="image/webp">${escapeHtml(tx('format_webp'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('format_hint'))}</p>
        </div>
        <div class="col-6 col-md-2">
          <label class="form-label mb-0" for="ibdQuality">${escapeHtml(tx('quality_label'))}</label>
          <input type="range" id="ibdQuality" class="form-range" min="50" max="100" value="92">
          <span id="ibdQualityVal" class="small">0.92</span>
          <p class="form-text mb-0">${escapeHtml(tx('quality_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="ibdHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="ibdPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="ibdStep"></div>
          <div class="bcw-hud-time" id="ibdTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="ibdBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="decode">${escapeHtml(tx('step_decode'))}</li>
        <li data-step="frame">${escapeHtml(tx('step_frame'))}</li>
        <li data-step="encode">${escapeHtml(tx('step_encode'))}</li>
      </ol>
    </div>

    <p id="ibdWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="ibdError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="ibdStatus" class="small text-muted mb-2" role="status"></p>
    <p id="ibdStats" class="small text-muted mb-2" style="display:none;"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(tx('preview_label'))}</label>
      <div class="ibd-preview-wrap">
        <canvas id="ibdPreview" hidden></canvas>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_border',
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://en.wikipedia.org/wiki/Aspect_ratio_(image)' },
			{ label: tx('ref_b_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		empty: tx('empty'),
		decodeFail: tx('err_decode'),
		encodeFail: tx('err_encode'),
		widthFail: tx('err_width'),
		tooBig: tx('err_too_big'),
		large: tx('warn_large'),
		edge: tx('warn_edge'),
		animation: tx('warn_animation'),
		working: tx('status_working'),
		done: tx('status_done'),
		statsTpl: tx('stats_tpl'),
		decodeStep: tx('decode_step'),
		frameStep: tx('frame_step'),
		encodeStep: tx('encode_step'),
		elapsed: tx('elapsed'),
		fmtJpeg: tx('format_jpeg'),
		fmtPng: tx('format_png'),
		fmtWebp: tx('format_webp'),
	};

	/**
	 * 客户端脚本：解码 → 计算四边边框 → 绘制（填充 / 衬线 / 投影 / 圆角）→ 导出；金标 HUD；Clear 不重载样例。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 输出边长超过此像素时软警告（部分浏览器导出失败）。 */
      var SOFT_EDGE = 8192;
      /** 输出边长硬上限（浏览器画布上限）。 */
      var MAX_EDGE = 16384;
      /** 输出像素总数硬上限。 */
      var MAX_PIXELS = 268000000;
      /** 像素宽度上限。 */
      var MAX_PX = 5000;
      /** 百分比宽度上限。 */
      var MAX_PCT = 50;
      /** 预览最大显示边长。 */
      var PREVIEW_MAX_EDGE = 520;
      /** 拍立得底边相对侧边的倍数（实物约 4 倍）。 */
      var POLAROID_BOTTOM = 4;
      /** 各补边样式的目标宽高比（宽 ÷ 高）。 */
      var RATIOS = { square: 1, r45: 4 / 5, r916: 9 / 16 };

      /** 页面控件。 */
      var drop = document.getElementById('ibdDrop');
      var fileInput = document.getElementById('ibdFile');
      var fileNameEl = document.getElementById('ibdFileName');
      var shapeEl = document.getElementById('ibdShape');
      var widthEl = document.getElementById('ibdWidth');
      var unitEl = document.getElementById('ibdUnit');
      var fillEl = document.getElementById('ibdFill');
      var colorWrap = document.getElementById('ibdColorWrap');
      var colorEl = document.getElementById('ibdColor');
      var radiusEl = document.getElementById('ibdRadius');
      var lineEl = document.getElementById('ibdLine');
      var lineColorEl = document.getElementById('ibdLineColor');
      var shadowEl = document.getElementById('ibdShadow');
      var formatEl = document.getElementById('ibdFormat');
      var qualityEl = document.getElementById('ibdQuality');
      var qualityVal = document.getElementById('ibdQualityVal');
      var btnApply = document.getElementById('ibdBtnApply');
      var btnDownload = document.getElementById('ibdBtnDownload');
      var btnSample = document.getElementById('ibdBtnSample');
      var btnClear = document.getElementById('ibdBtnClear');
      var warnEl = document.getElementById('ibdWarn');
      var errEl = document.getElementById('ibdError');
      var statusEl = document.getElementById('ibdStatus');
      var statsEl = document.getElementById('ibdStats');
      var preview = document.getElementById('ibdPreview');
      var hud = document.getElementById('ibdHud');
      var pctEl = document.getElementById('ibdPct');
      var stepEl = document.getElementById('ibdStep');
      var timeEl = document.getElementById('ibdTime');
      var barEl = document.getElementById('ibdBar');

      /** 本地化文案字典。 */
      var msg = ${JSON.stringify(clientText)};

      /** @type {{ file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, edge: string }|null} 已加载的源图（edge = 边缘平均色）。 */
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

      /**
       * 解析实际导出 MIME：「与原图相同」时 JPEG / PNG / WebP 原样保留，其它（GIF、BMP 等）改 PNG。
       * @returns {string} MIME
       */
      function outputMime() {
        if (formatEl.value !== 'same') return formatEl.value;
        var type = sourceLayer && sourceLayer.file ? String(sourceLayer.file.type || '') : '';
        if (type === 'image/jpeg' || type === 'image/png' || type === 'image/webp') return type;
        return 'image/png';
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

      /** 全部设置控件（锁定时一并禁用）。 */
      var settingEls = [shapeEl, widthEl, unitEl, fillEl, colorEl, radiusEl, lineEl, lineColorEl, shadowEl, formatEl, qualityEl];

      /**
       * 导出期间禁用控件。
       * @param {boolean} on 是否锁定
       */
      function lock(on) {
        busy = on;
        [btnApply, btnSample, btnClear, fileInput].concat(settingEls).forEach(function (el) { el.disabled = on; });
        btnDownload.disabled = on || !resultBlob;
        btnApply.setAttribute('aria-busy', String(on));
        syncUi();
      }

      /** 刷新 HUD 已用时。 */
      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(msg.elapsed, { s: String(sec) });
      }

      /**
       * 更新进度 HUD。
       * @param {number} pct 0–100
       * @param {string} stepKey decode|frame|encode
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
        var order = ['decode', 'frame', 'encode'];
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
       * 两位十六进制。
       * @param {number} n 0–255
       * @returns {string} 如 0a
       */
      function hex2(n) {
        var s = Math.max(0, Math.min(255, Math.round(n))).toString(16);
        return s.length < 2 ? '0' + s : s;
      }

      /**
       * 计算照片最外一圈像素的平均色（按 alpha 加权），用作「取照片边缘色」填充。
       * @param {ImageBitmap|HTMLImageElement} bitmap 源图
       * @returns {string} #rrggbb；全透明时返回白色
       */
      function edgeColor(bitmap) {
        var n = 64;
        var c = document.createElement('canvas');
        c.width = n;
        c.height = n;
        var ctx = c.getContext('2d', { willReadFrequently: true });
        if (!ctx) return '#ffffff';
        ctx.drawImage(bitmap, 0, 0, n, n);
        var data = ctx.getImageData(0, 0, n, n).data;
        var r = 0, g = 0, b = 0, a = 0;
        for (var y = 0; y < n; y++) {
          for (var x = 0; x < n; x++) {
            if (x !== 0 && y !== 0 && x !== n - 1 && y !== n - 1) continue;
            var i = (y * n + x) * 4;
            var w = data[i + 3] / 255;
            r += data[i] * w; g += data[i + 1] * w; b += data[i + 2] * w; a += w;
          }
        }
        if (a <= 0) return '#ffffff';
        return '#' + hex2(r / a) + hex2(g / a) + hex2(b / a);
      }

      /**
       * 读取并校验设置。
       * @returns {{ error: string }|{ shape: string, width: number, unit: string, fill: string, color: string, radiusPct: number, line: number, lineColor: string, shadow: boolean }}
       */
      function readOptions() {
        var width = Number(widthEl.value);
        var unit = unitEl.value;
        if (String(widthEl.value).trim() === '' || !isFinite(width) || width < 0) return { error: msg.widthFail };
        if (unit === 'pct' && width > MAX_PCT) return { error: msg.widthFail };
        if (unit === 'px' && width > MAX_PX) return { error: msg.widthFail };
        var radiusPct = Number(radiusEl.value);
        if (!isFinite(radiusPct) || radiusPct < 0) radiusPct = 0;
        var line = Math.round(Number(lineEl.value));
        if (!isFinite(line) || line < 0) line = 0;
        return {
          shape: shapeEl.value,
          width: width,
          unit: unit,
          fill: fillEl.value,
          color: colorEl.value || '#ffffff',
          radiusPct: Math.min(50, radiusPct),
          line: Math.min(200, line),
          lineColor: lineColorEl.value || '#333333',
          shadow: !!shadowEl.checked
        };
      }

      /**
       * 计算输出尺寸与四边边框（源图像素）。
       * 等宽：四边 = b；拍立得：底边 = 4b；补比例：先加 b 的最小边，再把较短方向补齐到目标宽高比，照片居中。
       * @param {number} w 源宽
       * @param {number} h 源高
       * @param {Object} o readOptions() 结果
       * @returns {{ W: number, H: number, top: number, right: number, bottom: number, left: number, radius: number, line: number }}
       */
      function geometry(w, h, o) {
        var b = o.unit === 'pct' ? Math.round(o.width / 100 * Math.min(w, h)) : Math.round(o.width);
        var top = b, right = b, bottom = b, left = b;
        if (o.shape === 'polaroid') bottom = b * POLAROID_BOTTOM;
        var W = w + left + right;
        var H = h + top + bottom;
        var ratio = RATIOS[o.shape];
        if (ratio) {
          if (W / H > ratio) H = Math.round(W / ratio);
          else W = Math.round(H * ratio);
          left = Math.floor((W - w) / 2);
          right = W - w - left;
          top = Math.floor((H - h) / 2);
          bottom = H - h - top;
        }
        return {
          W: W, H: H, top: top, right: right, bottom: bottom, left: left,
          radius: Math.round(o.radiusPct / 100 * Math.min(w, h)),
          line: o.line
        };
      }

      /**
       * 构建（圆角）矩形路径。
       * @param {CanvasRenderingContext2D} ctx 上下文
       * @param {number} x 左
       * @param {number} y 上
       * @param {number} w 宽
       * @param {number} h 高
       * @param {number} r 圆角半径（0 = 直角）
       */
      function shapePath(ctx, x, y, w, h, r) {
        ctx.beginPath();
        if (r <= 0) { ctx.rect(x, y, w, h); return; }
        r = Math.min(r, w / 2, h / 2);
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
      }

      /**
       * 「模糊照片」铺底：照片按 cover 缩到极小再放大，得到柔和的同色系背景（所有浏览器可用，不依赖 ctx.filter）。
       * @param {CanvasRenderingContext2D} ctx 目标上下文
       * @param {ImageBitmap|HTMLImageElement} bitmap 源图
       * @param {number} sw 源宽
       * @param {number} sh 源高
       * @param {number} cw 画布宽
       * @param {number} ch 画布高
       */
      function drawBlurFill(ctx, bitmap, sw, sh, cw, ch) {
        var tw = Math.max(4, Math.round(cw / 40));
        var th = Math.max(4, Math.round(ch / 40));
        var tiny = document.createElement('canvas');
        tiny.width = tw;
        tiny.height = th;
        var tctx = tiny.getContext('2d');
        if (!tctx) return;
        var k = Math.max(tw / sw, th / sh);
        var srcW = tw / k;
        var srcH = th / k;
        tctx.imageSmoothingEnabled = true;
        tctx.drawImage(bitmap, (sw - srcW) / 2, (sh - srcH) / 2, srcW, srcH, 0, 0, tw, th);
        var mid = document.createElement('canvas');
        mid.width = tw * 4;
        mid.height = th * 4;
        var mctx = mid.getContext('2d');
        if (!mctx) return;
        mctx.imageSmoothingEnabled = true;
        mctx.drawImage(tiny, 0, 0, mid.width, mid.height);
        ctx.save();
        ctx.imageSmoothingEnabled = true;
        if ('imageSmoothingQuality' in ctx) ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(mid, 0, 0, cw, ch);
        ctx.fillStyle = 'rgba(0,0,0,0.12)';
        ctx.fillRect(0, 0, cw, ch);
        ctx.restore();
      }

      /**
       * 解析纯色填充值（模糊模式下照片下方用白色兜底）。
       * @param {Object} o 设置
       * @returns {string} #rrggbb
       */
      function solidColor(o) {
        if (o.fill === 'black') return '#000000';
        if (o.fill === 'edge') return sourceLayer ? sourceLayer.edge : '#ffffff';
        if (o.fill === 'custom') return o.color;
        return '#ffffff';
      }

      /**
       * 按比例 scale 把带边框的结果画到 canvas（预览用缩小比例，导出用 1）。
       * @param {HTMLCanvasElement} canvas 目标画布
       * @param {Object} o 设置
       * @param {Object} g geometry() 结果
       * @param {number} scale 缩放
       * @param {boolean} opaque 导出格式是否不支持透明（JPEG）
       */
      function render(canvas, o, g, scale, opaque) {
        var src = sourceLayer;
        var cw = Math.max(1, Math.round(g.W * scale));
        var ch = Math.max(1, Math.round(g.H * scale));
        canvas.width = cw;
        canvas.height = ch;
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('encode');
        var px = g.left * scale, py = g.top * scale, pw = src.w * scale, ph = src.h * scale;
        var rr = g.radius * scale, lw = g.line * scale;
        var solid = solidColor(o);
        if (o.fill === 'blur') drawBlurFill(ctx, src.bitmap, src.w, src.h, cw, ch);
        else { ctx.fillStyle = solid; ctx.fillRect(0, 0, cw, ch); }
        if (o.shadow) {
          var blur = Math.max(2, Math.min(pw, ph) * 0.04);
          ctx.save();
          ctx.shadowColor = 'rgba(0,0,0,0.38)';
          ctx.shadowBlur = blur;
          ctx.shadowOffsetY = blur * 0.35;
          ctx.fillStyle = lw > 0 ? o.lineColor : solid;
          shapePath(ctx, px - lw, py - lw, pw + lw * 2, ph + lw * 2, rr > 0 ? rr + lw : 0);
          ctx.fill();
          ctx.restore();
        }
        if (lw > 0) {
          ctx.fillStyle = o.lineColor;
          shapePath(ctx, px - lw, py - lw, pw + lw * 2, ph + lw * 2, rr > 0 ? rr + lw : 0);
          ctx.fill();
        }
        ctx.save();
        shapePath(ctx, px, py, pw, ph, rr);
        ctx.clip();
        if (opaque) { ctx.fillStyle = solid; ctx.fillRect(px, py, pw, ph); }
        else ctx.clearRect(px, py, pw, ph);
        ctx.drawImage(src.bitmap, px, py, pw, ph);
        ctx.restore();
      }

      /** 同步质量标签、自定义颜色可见性与格式相关 UI。 */
      function syncUi() {
        var mime = sourceLayer ? outputMime() : (formatEl.value === 'same' ? 'image/png' : formatEl.value);
        var isPng = mime === 'image/png';
        if (!busy) qualityEl.disabled = isPng;
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        qualityVal.textContent = isPng ? '\\u2014' : q.toFixed(2);
        colorWrap.hidden = fillEl.value !== 'custom';
      }

      /** 刷新文件大小、输出边长、动图警告。 */
      function refreshWarnings() {
        var warns = [];
        if (sourceLayer) {
          if (sourceLayer.file.size > SOFT_BYTES) warns.push(msg.large);
          var o = readOptions();
          if (!o.error) {
            var g = geometry(sourceLayer.w, sourceLayer.h, o);
            if (g.W > SOFT_EDGE || g.H > SOFT_EDGE) warns.push(msg.edge);
          }
          if ((sourceLayer.file.type || '').indexOf('gif') >= 0 || /[.]gif$/i.test(sourceLayer.file.name || '')) warns.push(msg.animation);
        }
        setWarn(warns.join(' '));
      }

      /**
       * 重绘缩小预览；设置非法时显示错误并隐藏预览。
       * @param {boolean} [keepResult] 是否保留已导出的 Blob
       */
      function drawPreview(keepResult) {
        if (!keepResult) {
          resultBlob = null;
          btnDownload.disabled = true;
          statsEl.style.display = 'none';
          setStatus('');
        }
        if (!sourceLayer) { preview.hidden = true; return; }
        var o = readOptions();
        if (o.error) { setError(o.error); preview.hidden = true; return; }
        setError('');
        refreshWarnings();
        var g = geometry(sourceLayer.w, sourceLayer.h, o);
        var scale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(g.W, g.H, 1));
        render(preview, o, g, scale, outputMime() === 'image/jpeg');
        preview.hidden = false;
      }

      /**
       * 从文件加载源图（同时算好边缘平均色）。
       * @param {File} file 图片文件
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        setError('');
        return decodeImage(file)
          .then(function (dec) {
            disposeSource(sourceLayer);
            sourceLayer = { file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h, edge: edgeColor(dec.bitmap) };
            fileNameEl.textContent = file.name || '';
            syncUi();
            drawPreview(false);
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * 导出带边框的全尺寸图片并启用下载。
       * @returns {Promise<void>}
       */
      function applyBorder() {
        setError('');
        resultBlob = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        if (!sourceLayer) { setError(msg.empty); return Promise.resolve(); }
        var o = readOptions();
        if (o.error) { setError(o.error); return Promise.resolve(); }
        var g = geometry(sourceLayer.w, sourceLayer.h, o);
        if (g.W > MAX_EDGE || g.H > MAX_EDGE || g.W * g.H > MAX_PIXELS) { setError(msg.tooBig); return Promise.resolve(); }
        var mime = outputMime();
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        setStatus(msg.working);
        lock(true);
        startedAt = Date.now();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 250);
        tickTime();
        progress(5, 'decode', msg.decodeStep);

        return new Promise(function (resolve) {
          requestAnimationFrame(function () {
            setTimeout(function () {
              try {
                progress(35, 'frame', msg.frameStep);
                var canvas = document.createElement('canvas');
                render(canvas, o, g, 1, mime === 'image/jpeg');
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
                    ow: String(g.W),
                    oh: String(g.H),
                    t: String(g.top),
                    r: String(g.right),
                    b: String(g.bottom),
                    l: String(g.left),
                    fmt: fmtLabel(mime),
                    bytes: formatBytes(blob.size)
                  });
                  statsEl.style.display = '';
                  progress(100, 'encode', fill(msg.encodeStep, { fmt: fmtLabel(mime) }));
                  endHud(true);
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

      /** 触发下载上次导出的 Blob（文件名：原名-border.扩展名）。 */
      function downloadResult() {
        if (!resultBlob) return;
        var mime = resultBlob.type || outputMime();
        var ext = mime === 'image/png' ? 'png' : mime === 'image/webp' ? 'webp' : 'jpg';
        var base = sourceLayer && sourceLayer.file && sourceLayer.file.name ? sourceLayer.file.name.replace(/[.][^.]+$/, '') : 'image';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = base + '-border.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }

      /**
       * 生成 600×400 横幅风景样例（天空渐变、太阳、山丘），用默认设置（四边 5%、白色）导出。
       * 横图便于切换「补成正方形 / 4:5」时直观看到上下补边。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var c = document.createElement('canvas');
        c.width = 600;
        c.height = 400;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        var sky = ctx.createLinearGradient(0, 0, 0, 400);
        sky.addColorStop(0, '#5aa9e6');
        sky.addColorStop(0.65, '#f9c784');
        sky.addColorStop(1, '#f4845f');
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, 600, 400);
        ctx.fillStyle = '#ffe66d';
        ctx.beginPath();
        ctx.arc(420, 230, 46, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#3d5a80';
        ctx.beginPath();
        ctx.moveTo(0, 300); ctx.lineTo(140, 210); ctx.lineTo(260, 290); ctx.lineTo(380, 200); ctx.lineTo(520, 280); ctx.lineTo(600, 240); ctx.lineTo(600, 400); ctx.lineTo(0, 400);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#293241';
        ctx.fillRect(0, 340, 600, 60);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            loadFile(new File([blob], 'sample-landscape.png', { type: 'image/png' }))
              .then(function () { return applyBorder(); })
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
        shapeEl.value = 'even';
        widthEl.value = '5';
        unitEl.value = 'pct';
        fillEl.value = 'white';
        colorEl.value = '#f4efe6';
        radiusEl.value = '0';
        lineEl.value = '0';
        lineColorEl.value = '#333333';
        shadowEl.checked = false;
        formatEl.value = 'same';
        qualityEl.value = '92';
        syncUi();
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

      /** 任一设置变化：实时重绘预览，需重新 Apply 才能下载新结果。 */
      settingEls.forEach(function (el) {
        var handler = function () { syncUi(); drawPreview(false); };
        el.addEventListener('input', handler);
        el.addEventListener('change', handler);
      });

      btnApply.addEventListener('click', function () { applyBorder(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUi();
      /** 进页自动跑样例。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-border');
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
