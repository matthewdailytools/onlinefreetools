/**
 * 文字水印工具页：在单张本地图片上绘制文字水印并导出。
 * slug: add-watermark（单页；批量水印见 batch-watermark-product-photos，Logo 图片叠加见 image-overlay）。
 * Spec: work-tasks/add-watermark/02-tool-info.md
 *
 * 交互要点（2026-10-14 改写）：
 * - 水印大小按「占图片宽度的百分比」计算，不同分辨率的照片上看起来一样大；
 * - 支持多行文字、一键插入「© 年份」；
 * - 版式：单个（九宫格位置 + 边距，或在预览上点击任意位置）/ 平铺（斜向重复铺满全图，防裁切）；
 * - 阴影 / 描边保证浅色、深色背景上都看得清；
 * - 主按钮 Add watermark → Download；字体、效果、边距、平铺间距、导出格式、缩小尺寸收进高级设置；
 * - 金标 .bcw-hud 进度；手机照片按 EXIF 方向摆正；Clear 不重载样例。
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
 * 渲染文字水印工具页。
 * @param opts.lang 当前界面语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 已启用语言列表
 * @returns 完整页面 HTML
 */
export const renderAddWatermarkPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/add-watermark';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_add_watermark_${key}` as never);
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
			currentSlug: 'add-watermark',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 九宫格位置按钮：[位置代码, 箭头字符]。 */
	const gridPositions: Array<[string, string]> = [
		['tl', '&#8598;'],
		['tc', '&#8593;'],
		['tr', '&#8599;'],
		['ml', '&#8592;'],
		['mc', '&#9679;'],
		['mr', '&#8594;'],
		['bl', '&#8601;'],
		['bc', '&#8595;'],
		['br', '&#8600;'],
	];

	/** 页内样式：棋盘格预览、九宫格、HUD。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'awmHud', convertBtnId: 'awmBtnApply' })}
    #awmHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #awmHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    #awmPreview {
      max-width: 100%; max-height: 460px; cursor: crosshair;
      border: 1px solid #dee2e6; border-radius: .5rem; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }
    .awm-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    .awm-pos-grid { display: grid; grid-template-columns: repeat(3, 2.1rem); gap: .25rem; }
    .awm-pos-grid .btn { padding: .15rem .35rem; line-height: 1.1; }
    .awm-pos-grid .btn.active { background: #0d6efd; color: #fff; border-color: #0d6efd; }
    #awmText { resize: vertical; }
    #awmQuality[disabled] { opacity: .5; }
    [data-awm-only][hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone awm-drop mb-3" id="awmDrop" for="awmFile">
      <input type="file" id="awmFile" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp,image/avif,image/*">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
      <span id="awmFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="row g-2 mb-2 align-items-start">
      <div class="col-12 col-md-6">
        <label class="form-label mb-0" for="awmText">${escapeHtml(tx('text_label'))}</label>
        <textarea id="awmText" class="form-control form-control-sm" rows="2" maxlength="200" placeholder="${escapeHtml(tx('text_ph'))}"></textarea>
        <div class="d-flex align-items-center gap-2 mt-1 flex-wrap">
          <button type="button" id="awmBtnCopyright" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('insert_copyright'))}</button>
          <span class="form-text m-0">${escapeHtml(tx('text_hint'))}</span>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="awmLayout">${escapeHtml(tx('layout_label'))}</label>
        <select id="awmLayout" class="form-select form-select-sm">
          <option value="single" selected>${escapeHtml(tx('layout_single'))}</option>
          <option value="tile">${escapeHtml(tx('layout_tile'))}</option>
        </select>
        <p class="form-text mb-0">${escapeHtml(tx('layout_hint'))}</p>
      </div>
      <div class="col-6 col-md-3" data-awm-only="single">
        <span class="form-label mb-0 d-block">${escapeHtml(tx('position_label'))}</span>
        <div class="awm-pos-grid" role="group" aria-label="${escapeHtml(tx('position_label'))}">
          ${gridPositions
						.map(
							([pos, arrow]) =>
								`<button type="button" class="btn btn-outline-secondary btn-sm awm-pos${pos === 'br' ? ' active' : ''}" data-pos="${pos}" title="${escapeHtml(tx(`pos_${pos}`))}" aria-label="${escapeHtml(tx(`pos_${pos}`))}" aria-pressed="${pos === 'br' ? 'true' : 'false'}">${arrow}</button>`
						)
						.join('')}
        </div>
        <p class="form-text mb-0">${escapeHtml(tx('position_hint'))}</p>
      </div>
    </div>

    <div class="row g-2 mb-2 align-items-end">
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="awmSize">${escapeHtml(tx('size_label'))} <span id="awmSizeVal" class="small">35%</span></label>
        <input type="range" id="awmSize" class="form-range" min="5" max="100" step="1" value="35">
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="awmOpacity">${escapeHtml(tx('opacity_label'))} <span id="awmOpacityVal" class="small">70%</span></label>
        <input type="range" id="awmOpacity" class="form-range" min="5" max="100" step="5" value="70">
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="awmRotation">${escapeHtml(tx('rotation_label'))} <span id="awmRotationVal" class="small">0&deg;</span></label>
        <input type="range" id="awmRotation" class="form-range" min="-90" max="90" step="5" value="0">
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="awmColor">${escapeHtml(tx('color_label'))}</label>
        <input type="color" id="awmColor" class="form-control form-control-color form-control-sm" value="#ffffff">
      </div>
    </div>
    <p class="form-text mt-0 mb-2">${escapeHtml(tx('size_hint'))}</p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="awmBtnApply" class="btn btn-primary btn-sm">${escapeHtml(tx('apply'))}</button>
      <button type="button" id="awmBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="awmBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="awmBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="awmAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="awmEffect">${escapeHtml(tx('effect_label'))}</label>
          <select id="awmEffect" class="form-select form-select-sm">
            <option value="shadow" selected>${escapeHtml(tx('effect_shadow'))}</option>
            <option value="outline">${escapeHtml(tx('effect_outline'))}</option>
            <option value="none">${escapeHtml(tx('effect_none'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('effect_hint'))}</p>
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="awmFont">${escapeHtml(tx('font_label'))}</label>
          <select id="awmFont" class="form-select form-select-sm">
            <option value="sans" selected>${escapeHtml(tx('font_sans'))}</option>
            <option value="serif">${escapeHtml(tx('font_serif'))}</option>
            <option value="mono">${escapeHtml(tx('font_mono'))}</option>
          </select>
          <div class="form-check mt-1">
            <input class="form-check-input" type="checkbox" id="awmBold" checked>
            <label class="form-check-label" for="awmBold">${escapeHtml(tx('bold'))}</label>
          </div>
        </div>
        <div class="col-6 col-md-3" data-awm-only="single">
          <label class="form-label mb-0" for="awmMargin">${escapeHtml(tx('margin_label'))} <span id="awmMarginVal" class="small">3%</span></label>
          <input type="range" id="awmMargin" class="form-range" min="0" max="15" step="1" value="3">
          <p class="form-text mb-0">${escapeHtml(tx('margin_hint'))}</p>
        </div>
        <div class="col-6 col-md-3" data-awm-only="tile" hidden>
          <label class="form-label mb-0" for="awmGap">${escapeHtml(tx('gap_label'))} <span id="awmGapVal" class="small">60%</span></label>
          <input type="range" id="awmGap" class="form-range" min="20" max="200" step="10" value="60">
          <p class="form-text mb-0">${escapeHtml(tx('gap_hint'))}</p>
        </div>
      </div>
      <div class="row g-2 mt-1">
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="awmFormat">${escapeHtml(tx('format_label'))}</label>
          <select id="awmFormat" class="form-select form-select-sm">
            <option value="same" selected>${escapeHtml(tx('format_same'))}</option>
            <option value="image/jpeg">${escapeHtml(tx('format_jpeg'))}</option>
            <option value="image/png">${escapeHtml(tx('format_png'))}</option>
            <option value="image/webp">${escapeHtml(tx('format_webp'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('format_hint'))}</p>
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="awmQuality">${escapeHtml(tx('quality_label'))}</label>
          <input type="range" id="awmQuality" class="form-range" min="50" max="100" value="92">
          <span id="awmQualityVal" class="small">0.92</span>
          <p class="form-text mb-0">${escapeHtml(tx('quality_hint'))}</p>
        </div>
        <div class="col-12 col-md-4">
          <label class="form-label mb-0" for="awmResize">${escapeHtml(tx('resize_label'))}</label>
          <select id="awmResize" class="form-select form-select-sm">
            <option value="0" selected>${escapeHtml(tx('resize_none'))}</option>
            <option value="2048">${escapeHtml(tx('resize_2048'))}</option>
            <option value="1600">${escapeHtml(tx('resize_1600'))}</option>
            <option value="1080">${escapeHtml(tx('resize_1080'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('resize_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="awmHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="awmPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="awmStep"></div>
          <div class="bcw-hud-time" id="awmTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="awmBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="decode">${escapeHtml(tx('step_decode'))}</li>
        <li data-step="draw">${escapeHtml(tx('step_draw'))}</li>
        <li data-step="encode">${escapeHtml(tx('step_encode'))}</li>
      </ol>
    </div>

    <p id="awmWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="awmError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="awmStatus" class="small text-muted mb-2" role="status"></p>
    <p id="awmStats" class="small text-muted mb-2" style="display:none;"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(tx('preview_label'))}</label>
      <div class="awm-preview-wrap">
        <canvas id="awmPreview" hidden></canvas>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_add_watermark',
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx('ref_a_label'),
				href: 'https://www.copyright.gov/circs/circ03.pdf',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		empty: tx('empty'),
		emptyText: tx('empty_text'),
		decodeFail: tx('err_decode'),
		encodeFail: tx('err_encode'),
		large: tx('warn_large'),
		edge: tx('warn_edge'),
		animation: tx('warn_animation'),
		working: tx('status_working'),
		done: tx('status_done'),
		statsTpl: tx('stats_tpl'),
		decodeStep: tx('decode_step'),
		drawStep: tx('draw_step'),
		encodeStep: tx('encode_step'),
		elapsed: tx('elapsed'),
		fmtJpeg: tx('format_jpeg'),
		fmtPng: tx('format_png'),
		fmtWebp: tx('format_webp'),
		sampleText: tx('sample_text'),
	};

	/**
	 * 客户端脚本：解码（EXIF 摆正）→ 绘制底图 + 文字水印 → 导出；实时预览；金标 HUD；Clear 不重载样例。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 边长超过此像素时软警告。 */
      var SOFT_EDGE = 8192;
      /** 预览最大显示边长。 */
      var PREVIEW_MAX_EDGE = 640;
      /** 行高 = 字号 × 此系数。 */
      var LINE_HEIGHT = 1.2;
      /** 字体族：代码 → CSS font-family。 */
      var FONT_FAMILIES = {
        sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "PingFang SC", "Microsoft YaHei", sans-serif',
        serif: 'Georgia, "Times New Roman", "Noto Serif", "Songti SC", SimSun, serif',
        mono: 'ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace'
      };
      /** 九宫格位置 → 水平 / 垂直对齐（0 = 左/上，0.5 = 中，1 = 右/下）。 */
      var GRID = {
        tl: [0, 0], tc: [0.5, 0], tr: [1, 0],
        ml: [0, 0.5], mc: [0.5, 0.5], mr: [1, 0.5],
        bl: [0, 1], bc: [0.5, 1], br: [1, 1]
      };

      /** 页面控件。 */
      var drop = document.getElementById('awmDrop');
      var fileInput = document.getElementById('awmFile');
      var fileNameEl = document.getElementById('awmFileName');
      var textEl = document.getElementById('awmText');
      var btnCopyright = document.getElementById('awmBtnCopyright');
      var layoutEl = document.getElementById('awmLayout');
      var sizeEl = document.getElementById('awmSize');
      var sizeVal = document.getElementById('awmSizeVal');
      var opacityEl = document.getElementById('awmOpacity');
      var opacityVal = document.getElementById('awmOpacityVal');
      var rotationEl = document.getElementById('awmRotation');
      var rotationVal = document.getElementById('awmRotationVal');
      var colorEl = document.getElementById('awmColor');
      var effectEl = document.getElementById('awmEffect');
      var fontEl = document.getElementById('awmFont');
      var boldEl = document.getElementById('awmBold');
      var marginEl = document.getElementById('awmMargin');
      var marginVal = document.getElementById('awmMarginVal');
      var gapEl = document.getElementById('awmGap');
      var gapVal = document.getElementById('awmGapVal');
      var formatEl = document.getElementById('awmFormat');
      var qualityEl = document.getElementById('awmQuality');
      var qualityVal = document.getElementById('awmQualityVal');
      var resizeEl = document.getElementById('awmResize');
      var btnApply = document.getElementById('awmBtnApply');
      var btnDownload = document.getElementById('awmBtnDownload');
      var btnSample = document.getElementById('awmBtnSample');
      var btnClear = document.getElementById('awmBtnClear');
      var warnEl = document.getElementById('awmWarn');
      var errEl = document.getElementById('awmError');
      var statusEl = document.getElementById('awmStatus');
      var statsEl = document.getElementById('awmStats');
      var preview = document.getElementById('awmPreview');
      var hud = document.getElementById('awmHud');
      var pctEl = document.getElementById('awmPct');
      var stepEl = document.getElementById('awmStep');
      var timeEl = document.getElementById('awmTime');
      var barEl = document.getElementById('awmBar');
      var posButtons = Array.prototype.slice.call(document.querySelectorAll('.awm-pos'));
      var layoutOnly = Array.prototype.slice.call(document.querySelectorAll('[data-awm-only]'));

      /** 本地化文案字典。 */
      var msg = ${JSON.stringify(clientText)};

      /** @type {{ file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }|null} 已加载的源图。 */
      var source = null;
      /** @type {Blob|null} 上次导出的 Blob。 */
      var resultBlob = null;
      /** 当前位置：九宫格代码或 'custom'（在预览上点击）。 */
      var position = 'br';
      /** 自定义位置（点击预览）：水印中心占宽 / 高的比例。 */
      var customPoint = { x: 0.5, y: 0.5 };
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
       * MIME → 显示名。
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
       * 导出期间禁用控件。
       * @param {boolean} on 是否锁定
       */
      function lock(on) {
        busy = on;
        [btnApply, btnSample, btnClear, btnCopyright, fileInput, textEl, layoutEl, sizeEl, opacityEl, rotationEl, colorEl,
          effectEl, fontEl, boldEl, marginEl, gapEl, formatEl, qualityEl, resizeEl].forEach(function (el) {
          el.disabled = on;
        });
        posButtons.forEach(function (b) { b.disabled = on; });
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
       * @param {string} stepKey decode|draw|encode
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
        var order = ['decode', 'draw', 'encode'];
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
       * 将 Blob 解码为位图；优先按 EXIF 方向摆正手机照片。
       * @param {Blob} blob 图片数据
       * @returns {Promise<{ bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }>}
       */
      function decodeImage(blob) {
        /** 回退：用 <img> 解码（现代浏览器默认按 EXIF 方向显示）。 */
        function viaImg() {
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
        if (typeof createImageBitmap !== 'function') return viaImg();
        return createImageBitmap(blob, { imageOrientation: 'from-image' })
          .catch(function () { return createImageBitmap(blob); })
          .then(function (bmp) { return { bitmap: bmp, w: bmp.width, h: bmp.height }; })
          .catch(viaImg);
      }

      /** 若适用则关闭 ImageBitmap。 */
      function disposeSource(layer) {
        if (!layer) return;
        if (layer.bitmap && typeof layer.bitmap.close === 'function') layer.bitmap.close();
      }

      /**
       * 读取当前水印设置。
       * @returns {{ lines: string[], layout: string, sizePct: number, opacity: number, rotation: number, color: string,
       *   effect: string, family: string, bold: boolean, marginPct: number, gapPct: number }}
       */
      function readOptions() {
        var raw = String(textEl.value || '').replace(/\\r/g, '');
        var lines = raw.split('\\n').map(function (l) { return l.replace(/\\s+$/, ''); });
        while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
        while (lines.length && !lines[0].trim()) lines.shift();
        return {
          lines: lines,
          layout: layoutEl.value === 'tile' ? 'tile' : 'single',
          sizePct: Math.max(5, Math.min(100, Number(sizeEl.value) || 35)),
          opacity: Math.max(0.05, Math.min(1, (Number(opacityEl.value) || 70) / 100)),
          rotation: Math.max(-90, Math.min(90, Number(rotationEl.value) || 0)),
          color: colorEl.value || '#ffffff',
          effect: effectEl.value,
          family: FONT_FAMILIES[fontEl.value] || FONT_FAMILIES.sans,
          bold: !!boldEl.checked,
          marginPct: Math.max(0, Math.min(15, Number(marginEl.value) || 0)),
          gapPct: Math.max(20, Math.min(200, Number(gapEl.value) || 60))
        };
      }

      /**
       * 根据文字颜色选对比色（浅色字配深色阴影 / 描边，深色字配浅色）。
       * @param {string} hex #rrggbb
       * @param {number} alpha 透明度
       * @returns {string} rgba() 颜色
       */
      function contrastColor(hex, alpha) {
        var m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex || '');
        var r = m ? parseInt(m[1], 16) : 255;
        var g = m ? parseInt(m[2], 16) : 255;
        var b = m ? parseInt(m[3], 16) : 255;
        var luma = 0.299 * r + 0.587 * g + 0.114 * b;
        return luma >= 140 ? 'rgba(0,0,0,' + alpha + ')' : 'rgba(255,255,255,' + alpha + ')';
      }

      /**
       * 在画布上绘制文字水印。大小、边距、间距都相对画布尺寸计算，所以预览与全尺寸导出看起来一致。
       * @param {CanvasRenderingContext2D} ctx 2D 上下文
       * @param {number} W 画布宽
       * @param {number} H 画布高
       * @param {ReturnType<typeof readOptions>} o 水印设置
       */
      function drawWatermark(ctx, W, H, o) {
        if (!o.lines.length) return;
        var weight = o.bold ? '700 ' : '400 ';
        ctx.save();
        ctx.font = weight + '100px ' + o.family;
        var maxW = 1;
        o.lines.forEach(function (l) { maxW = Math.max(maxW, ctx.measureText(l).width); });
        /** 字号：让最宽的一行 = 图片宽度 × 大小百分比；同时整块高度不超过图片高度的 90%。 */
        var fontPx = (o.sizePct / 100) * W / maxW * 100;
        var maxByHeight = (H * 0.9) / (o.lines.length * LINE_HEIGHT);
        fontPx = Math.max(4, Math.min(fontPx, maxByHeight));
        var lineH = fontPx * LINE_HEIGHT;
        var bw = maxW * fontPx / 100;
        var bh = o.lines.length * lineH;
        ctx.font = weight + Math.round(fontPx * 100) / 100 + 'px ' + o.family;
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = o.opacity;
        ctx.fillStyle = o.color;
        if (o.effect === 'shadow') {
          ctx.shadowColor = contrastColor(o.color, 0.6);
          ctx.shadowBlur = Math.max(1, fontPx * 0.12);
          ctx.shadowOffsetX = Math.max(1, fontPx * 0.04);
          ctx.shadowOffsetY = Math.max(1, fontPx * 0.04);
        }
        if (o.effect === 'outline') {
          ctx.strokeStyle = contrastColor(o.color, 0.85);
          ctx.lineWidth = Math.max(1, fontPx * 0.08);
          ctx.lineJoin = 'round';
        }
        var rad = (o.rotation * Math.PI) / 180;

        /**
         * 以 (0,0) 为文字块中心画所有行。
         * @param {number} alignX 0 左对齐，0.5 居中，1 右对齐
         */
        function paintBlock(alignX) {
          ctx.textAlign = alignX === 0 ? 'left' : alignX === 1 ? 'right' : 'center';
          var x = alignX === 0 ? -bw / 2 : alignX === 1 ? bw / 2 : 0;
          for (var i = 0; i < o.lines.length; i++) {
            var y = (i - (o.lines.length - 1) / 2) * lineH;
            if (o.effect === 'outline') ctx.strokeText(o.lines[i], x, y);
            ctx.fillText(o.lines[i], x, y);
          }
        }

        if (o.layout === 'tile') {
          /** 平铺：绕图片中心旋转，按交错网格铺满对角线范围。 */
          var gapX = bw * (o.gapPct / 100);
          var gapY = Math.max(bh, fontPx) * (o.gapPct / 100);
          var stepX = bw + gapX;
          var stepY = bh + gapY;
          var diag = Math.sqrt(W * W + H * H);
          ctx.translate(W / 2, H / 2);
          ctx.rotate(rad);
          var rows = Math.ceil(diag / stepY / 2) + 1;
          var cols = Math.ceil(diag / stepX / 2) + 1;
          for (var r = -rows; r <= rows; r++) {
            var shift = (r % 2 === 0) ? 0 : stepX / 2;
            for (var c = -cols; c <= cols; c++) {
              ctx.save();
              ctx.translate(c * stepX + shift, r * stepY);
              paintBlock(0.5);
              ctx.restore();
            }
          }
        } else {
          /** 单个：旋转后外接框贴边距放置；自定义位置则以点击点为中心并限制在图内。 */
          var rw = Math.abs(bw * Math.cos(rad)) + Math.abs(bh * Math.sin(rad));
          var rh = Math.abs(bw * Math.sin(rad)) + Math.abs(bh * Math.cos(rad));
          var margin = (o.marginPct / 100) * Math.min(W, H);
          var cx;
          var cy;
          var alignX = 0.5;
          if (position === 'custom') {
            cx = customPoint.x * W;
            cy = customPoint.y * H;
            cx = Math.max(Math.min(rw / 2, W / 2), Math.min(W - Math.min(rw / 2, W / 2), cx));
            cy = Math.max(Math.min(rh / 2, H / 2), Math.min(H - Math.min(rh / 2, H / 2), cy));
          } else {
            var g = GRID[position] || GRID.br;
            cx = g[0] === 0 ? margin + rw / 2 : g[0] === 1 ? W - margin - rw / 2 : W / 2;
            cy = g[1] === 0 ? margin + rh / 2 : g[1] === 1 ? H - margin - rh / 2 : H / 2;
            alignX = g[0];
          }
          ctx.translate(cx, cy);
          ctx.rotate(rad);
          paintBlock(alignX);
        }
        ctx.restore();
      }

      /**
       * 计算导出尺寸（按「缩小到长边」选项等比缩小，不放大）。
       * @returns {{ w: number, h: number }}
       */
      function outputSize() {
        var limit = Number(resizeEl.value) || 0;
        var longest = Math.max(source.w, source.h);
        if (!limit || longest <= limit) return { w: source.w, h: source.h };
        var k = limit / longest;
        return { w: Math.max(1, Math.round(source.w * k)), h: Math.max(1, Math.round(source.h * k)) };
      }

      /**
       * 决定导出 MIME：「与原图相同」时 JPEG / PNG / WebP 保持，其它格式存 PNG。
       * @returns {string} MIME
       */
      function outputMime() {
        if (formatEl.value !== 'same') return formatEl.value;
        var t = (source && source.file && source.file.type) || '';
        if (t === 'image/jpeg' || t === 'image/png' || t === 'image/webp') return t;
        if (source && /[.]jpe?g$/i.test(source.file.name || '')) return 'image/jpeg';
        return 'image/png';
      }

      /** 同步滑块数值、质量禁用态、按版式显示的控件。 */
      function syncUiLabels() {
        sizeVal.textContent = sizeEl.value + '%';
        opacityVal.textContent = opacityEl.value + '%';
        rotationVal.textContent = rotationEl.value + '\\u00b0';
        marginVal.textContent = marginEl.value + '%';
        gapVal.textContent = gapEl.value + '%';
        var mime = source ? outputMime() : formatEl.value;
        var isPng = mime === 'image/png';
        if (!busy) qualityEl.disabled = isPng;
        qualityVal.textContent = isPng ? '\\u2014' : (Number(qualityEl.value) / 100).toFixed(2);
        var layout = layoutEl.value === 'tile' ? 'tile' : 'single';
        layoutOnly.forEach(function (el) { el.hidden = el.getAttribute('data-awm-only') !== layout; });
        posButtons.forEach(function (b) {
          var on = b.getAttribute('data-pos') === position;
          b.classList.toggle('active', on);
          b.setAttribute('aria-pressed', String(on));
        });
      }

      /** 刷新文件大小、边长、动图警告。 */
      function refreshWarnings() {
        var warns = [];
        if (source && source.file.size > SOFT_BYTES) warns.push(msg.large);
        if (source && (source.w > SOFT_EDGE || source.h > SOFT_EDGE)) warns.push(msg.edge);
        if (source && ((source.file.type || '').indexOf('gif') >= 0 || /[.]gif$/i.test(source.file.name || ''))) warns.push(msg.animation);
        setWarn(warns.join(' '));
      }

      /** 设置改变后作废已导出的结果。 */
      function invalidate() {
        resultBlob = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        setStatus('');
      }

      /** 在预览画布上绘制缩小的底图 + 水印。 */
      function drawPreview() {
        if (!source) { preview.hidden = true; return; }
        var scale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(source.w, source.h, 1));
        var pw = Math.max(1, Math.round(source.w * scale));
        var ph = Math.max(1, Math.round(source.h * scale));
        preview.width = pw;
        preview.height = ph;
        preview.hidden = false;
        var ctx = preview.getContext('2d');
        if (!ctx) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, pw, ph);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(source.bitmap, 0, 0, pw, ph);
        drawWatermark(ctx, pw, ph, readOptions());
      }

      /** 设置变化：作废旧结果并重绘预览。 */
      function onSettingChange() {
        syncUiLabels();
        invalidate();
        drawPreview();
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
            disposeSource(source);
            source = { file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h };
            fileNameEl.textContent = file.name || '';
            refreshWarnings();
            invalidate();
            syncUiLabels();
            drawPreview();
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * 全尺寸绘制并导出，启用下载。
       * @returns {Promise<void>}
       */
      function applyWatermark() {
        setError('');
        invalidate();
        if (!source) { setError(msg.empty); return Promise.resolve(); }
        var o = readOptions();
        if (!o.lines.length) { setError(msg.emptyText); return Promise.resolve(); }
        setStatus(msg.working);
        lock(true);
        startedAt = Date.now();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 250);
        tickTime();
        progress(5, 'decode', msg.decodeStep);
        var mime = outputMime();
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        return new Promise(function (resolve) {
          setTimeout(function () {
            try {
              var size = outputSize();
              progress(35, 'draw', msg.drawStep);
              var canvas = document.createElement('canvas');
              canvas.width = size.w;
              canvas.height = size.h;
              var ctx = canvas.getContext('2d');
              if (!ctx) throw new Error('encode');
              if (mime === 'image/jpeg') {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, size.w, size.h);
              }
              ctx.imageSmoothingQuality = 'high';
              ctx.drawImage(source.bitmap, 0, 0, size.w, size.h);
              drawWatermark(ctx, size.w, size.h, o);
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
                  w: String(size.w),
                  h: String(size.h),
                  fmt: fmtLabel(blob.type || mime),
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
      }

      /** 触发下载上次导出的 Blob；文件名 = 原名 + -watermarked。 */
      function downloadResult() {
        if (!resultBlob) return;
        var mime = resultBlob.type || outputMime();
        var ext = mime === 'image/png' ? 'png' : mime === 'image/webp' ? 'webp' : 'jpg';
        var base = source && source.file && source.file.name ? source.file.name.replace(/[.][^.]+$/, '') : 'image';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = base + '-watermarked.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }

      /**
       * 选择九宫格位置。
       * @param {string} pos tl|tc|tr|ml|mc|mr|bl|bc|br
       */
      function setGridPosition(pos) {
        if (!GRID[pos]) return;
        position = pos;
        onSettingChange();
      }

      /** 在文字开头插入「© 当前年份 」（已有 © 时不重复）。 */
      function insertCopyright() {
        var year = String(new Date().getFullYear());
        var cur = String(textEl.value || '');
        if (cur.indexOf('\\u00a9') === 0) return;
        textEl.value = '\\u00a9 ' + year + (cur ? ' ' + cur : ' ');
        textEl.focus();
        onSettingChange();
      }

      /** 版式切换到平铺时，若仍是单个水印的默认值，则换成更适合平铺的斜角与大小。 */
      function onLayoutChange() {
        if (layoutEl.value === 'tile') {
          if (Number(rotationEl.value) === 0) rotationEl.value = '-30';
          if (Number(sizeEl.value) > 30) sizeEl.value = '25';
        }
        onSettingChange();
      }

      /**
       * 在预览上点击：单个版式下把水印中心移到点击处。
       * @param {MouseEvent} e 点击事件
       */
      function onPreviewClick(e) {
        if (!source || busy || layoutEl.value === 'tile') return;
        var rect = preview.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        customPoint = {
          x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
          y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
        };
        position = 'custom';
        onSettingChange();
      }

      /**
       * 生成 960 × 640 风景样例（JPEG），右下角加「© 2026 Alex Rivera」并导出。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var c = document.createElement('canvas');
        c.width = 960;
        c.height = 640;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        var sky = ctx.createLinearGradient(0, 0, 0, 420);
        sky.addColorStop(0, '#f6b26b');
        sky.addColorStop(0.55, '#f9d9a8');
        sky.addColorStop(1, '#cfe2f3');
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, 960, 420);
        ctx.fillStyle = '#fff4d6';
        ctx.beginPath();
        ctx.arc(690, 250, 58, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#6d7f95';
        ctx.beginPath();
        ctx.moveTo(0, 420); ctx.lineTo(170, 230); ctx.lineTo(330, 380); ctx.lineTo(500, 190); ctx.lineTo(720, 420);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#4b5d73';
        ctx.beginPath();
        ctx.moveTo(380, 420); ctx.lineTo(640, 260); ctx.lineTo(820, 360); ctx.lineTo(960, 280); ctx.lineTo(960, 420);
        ctx.closePath();
        ctx.fill();
        var lake = ctx.createLinearGradient(0, 420, 0, 640);
        lake.addColorStop(0, '#7fa7c9');
        lake.addColorStop(1, '#2f5d84');
        ctx.fillStyle = lake;
        ctx.fillRect(0, 420, 960, 220);
        ctx.fillStyle = 'rgba(255,244,214,0.55)';
        for (var i = 0; i < 6; i++) ctx.fillRect(650 - i * 6, 440 + i * 22, 80 + i * 12, 4);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            loadFile(new File([blob], 'lake-sunset.jpg', { type: 'image/jpeg' }))
              .then(function () {
                textEl.value = msg.sampleText;
                onSettingChange();
                return applyWatermark();
              })
              .then(resolve);
          }, 'image/jpeg', 0.9);
        });
      }

      /**
       * 真正清空，不重新加载样例；设置恢复默认。
       * @param {boolean} resetInputs 是否清空文件输入
       */
      function clearAll(resetInputs) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        disposeSource(source);
        source = null;
        if (resetInputs !== false) fileInput.value = '';
        fileNameEl.textContent = '';
        textEl.value = '';
        layoutEl.value = 'single';
        sizeEl.value = '35';
        opacityEl.value = '70';
        rotationEl.value = '0';
        colorEl.value = '#ffffff';
        effectEl.value = 'shadow';
        fontEl.value = 'sans';
        boldEl.checked = true;
        marginEl.value = '3';
        gapEl.value = '60';
        formatEl.value = 'same';
        qualityEl.value = '92';
        resizeEl.value = '0';
        position = 'br';
        customPoint = { x: 0.5, y: 0.5 };
        invalidate();
        preview.hidden = true;
        setError('');
        setWarn('');
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
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

      /** 所有影响画面的设置：实时重绘预览，需重新点主按钮才能下载新结果。 */
      [textEl, sizeEl, opacityEl, rotationEl, colorEl, marginEl, gapEl].forEach(function (el) {
        el.addEventListener('input', onSettingChange);
      });
      [effectEl, fontEl, boldEl, formatEl, resizeEl].forEach(function (el) {
        el.addEventListener('change', onSettingChange);
      });
      qualityEl.addEventListener('input', onSettingChange);
      layoutEl.addEventListener('change', onLayoutChange);
      posButtons.forEach(function (b) {
        b.addEventListener('click', function () { setGridPosition(b.getAttribute('data-pos') || 'br'); });
      });
      preview.addEventListener('click', onPreviewClick);
      btnCopyright.addEventListener('click', insertCopyright);

      btnApply.addEventListener('click', function () { applyWatermark(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUiLabels();
      /** 进页自动跑样例。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('add-watermark');
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
