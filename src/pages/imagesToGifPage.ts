/**
 * 多图合成动态 GIF 工具页。
 * slug: images-to-gif（见 work-tasks/images-to-gif/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 一个拖放区选多张图；帧列表可上下移动、删除、按文件名自然排序，每帧可单独设置停留时间；
 * - 主选项行：帧间隔（同时显示帧率）、播放次数（无限 / 一次 / 2× / 3× / 5×）、输出宽度；
 * - 高级设置折叠：适配方式（完整显示加底色 / 裁剪铺满）、底色、颜色数、调色板（每帧 / 共享）、来回播放、末帧停留；
 * - 先「生成 GIF」再「下载」；金标进度 HUD（读取 → 调色板 → 编码）；Clear 恢复默认、不重载样例。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_images_to_gif';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 站内路径
 * @param defaultLang 站点默认语言
 * @returns 带（或不带）语言前缀的路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 images-to-gif 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderImagesToGifPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/images-to-gif';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
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
			currentSlug: 'images-to-gif',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 播放次数选项：[gifenc repeat 值, 显示文字]；repeat −1 = 不写循环扩展（只播一次），N = 额外重复 N 次。 */
	const loopChoices: Array<[string, string]> = [
		['0', tx('loop_forever')],
		['-1', tx('loop_once')],
		['1', '2×'],
		['2', '3×'],
		['4', '5×'],
	];

	/** 页内样式：帧列表、预览、HUD。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'itgHud', convertBtnId: 'itgBtnBuild' })}
    #itgHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #itgHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    #itgPreview {
      max-width: 100%; max-height: 360px; object-fit: contain;
      border: 1px solid #dee2e6; border-radius: .5rem; background: #fff;
    }
    .itg-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    .itg-list-head { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; justify-content:space-between; margin-bottom:.25rem; }
    .itg-file-list { list-style: none; padding: 0; margin: 0; counter-reset: itg; }
    .itg-file-item { display: flex; align-items: center; gap: .5rem; padding: .35rem 0; border-bottom: 1px solid #eee; }
    .itg-file-item::before { counter-increment: itg; content: counter(itg); min-width: 1.5rem; text-align: end; color:#6c757d; font-size:.8rem; }
    .itg-thumb { width: 48px; height: 48px; object-fit: cover; border-radius: .25rem; border: 1px solid #dee2e6; background: #f8f9fa; }
    .itg-file-name { flex: 1; font-size: .85rem; word-break: break-all; }
    .itg-frame-delay { width: 6.5rem; }
    .itg-file-actions { display: flex; gap: .25rem; flex-shrink: 0; }
    #itgBgWrap[hidden] { display: none !important; }
  </style>
  <link rel="modulepreload" href="/vendor/gifenc/gifenc.esm.js" />`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone itg-drop mb-3" id="itgDrop" for="itgFiles">
      <input type="file" id="itgFiles" accept="image/jpeg,image/png,image/webp,image/gif,image/*" multiple>
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
    </label>

    <div id="itgListWrap" class="mb-3" hidden>
      <div class="itg-list-head">
        <span class="small text-muted">${escapeHtml(tx('list_hint'))}</span>
        <button type="button" id="itgBtnSort" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sort_name'))}</button>
      </div>
      <ul id="itgList" class="itg-file-list" aria-live="polite"></ul>
    </div>

    <div class="row g-2 mb-2 align-items-end">
      <div class="col-6 col-md-4">
        <label class="form-label mb-0" for="itgDelay">${escapeHtml(tx('delay_label'))} <span id="itgFps" class="small text-muted"></span></label>
        <input type="number" id="itgDelay" class="form-control form-control-sm" min="20" max="10000" step="10" value="500">
        <p class="form-text mb-0">${escapeHtml(tx('delay_hint'))}</p>
      </div>
      <div class="col-6 col-md-4">
        <label class="form-label mb-0" for="itgLoop">${escapeHtml(tx('loop_label'))}</label>
        <select id="itgLoop" class="form-select form-select-sm">
          ${loopChoices.map(([value, label]) => `<option value="${value}"${value === '0' ? ' selected' : ''}>${escapeHtml(label)}</option>`).join('')}
        </select>
        <p class="form-text mb-0">${escapeHtml(tx('loop_hint'))}</p>
      </div>
      <div class="col-12 col-md-4">
        <label class="form-label mb-0" for="itgWidth">${escapeHtml(tx('width_label'))}</label>
        <input type="number" id="itgWidth" class="form-control form-control-sm" min="64" max="2048" step="1" value="480">
        <p class="form-text mb-0">${escapeHtml(tx('width_hint'))}</p>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="itgBtnBuild" class="btn btn-primary btn-sm">${escapeHtml(tx('build'))}</button>
      <button type="button" id="itgBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="itgBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="itgBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="itgAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-6 col-md-4">
          <label class="form-label mb-0" for="itgFit">${escapeHtml(tx('fit_label'))}</label>
          <select id="itgFit" class="form-select form-select-sm">
            <option value="contain" selected>${escapeHtml(tx('fit_contain'))}</option>
            <option value="cover">${escapeHtml(tx('fit_cover'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('fit_hint'))}</p>
        </div>
        <div class="col-6 col-md-4" id="itgBgWrap">
          <label class="form-label mb-0" for="itgBg">${escapeHtml(tx('bg_label'))}</label>
          <input type="color" id="itgBg" class="form-control form-control-color form-control-sm" value="#ffffff">
          <p class="form-text mb-0">${escapeHtml(tx('bg_hint'))}</p>
        </div>
        <div class="col-6 col-md-4">
          <label class="form-label mb-0" for="itgColors">${escapeHtml(tx('colors_label'))}</label>
          <select id="itgColors" class="form-select form-select-sm">
            <option value="256" selected>256</option>
            <option value="128">128</option>
            <option value="64">64</option>
            <option value="32">32</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('colors_hint'))}</p>
        </div>
        <div class="col-6 col-md-4">
          <label class="form-label mb-0" for="itgPalette">${escapeHtml(tx('palette_label'))}</label>
          <select id="itgPalette" class="form-select form-select-sm">
            <option value="frame" selected>${escapeHtml(tx('palette_frame'))}</option>
            <option value="shared">${escapeHtml(tx('palette_shared'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('palette_hint'))}</p>
        </div>
        <div class="col-6 col-md-4">
          <label class="form-label mb-0" for="itgHold">${escapeHtml(tx('hold_label'))}</label>
          <input type="number" id="itgHold" class="form-control form-control-sm" min="0" max="10000" step="100" value="0">
          <p class="form-text mb-0">${escapeHtml(tx('hold_hint'))}</p>
        </div>
        <div class="col-12 col-md-4">
          <div class="form-check mt-md-4">
            <input class="form-check-input" type="checkbox" id="itgBoomerang">
            <label class="form-check-label" for="itgBoomerang">${escapeHtml(tx('boomerang_label'))}</label>
          </div>
          <p class="form-text mb-0">${escapeHtml(tx('boomerang_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="itgHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="itgPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="itgStep"></div>
          <div class="bcw-hud-time" id="itgTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="itgBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="decode">${escapeHtml(tx('step_decode'))}</li>
        <li data-step="palette">${escapeHtml(tx('step_palette'))}</li>
        <li data-step="encode">${escapeHtml(tx('step_encode'))}</li>
      </ol>
    </div>

    <p id="itgWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="itgError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="itgStatus" class="small text-muted mb-2" role="status"></p>
    <p id="itgStats" class="small text-muted mb-2" style="display:none;"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(tx('preview_label'))}</label>
      <div class="itg-preview-wrap"><img id="itgPreview" alt="${escapeHtml(tx('preview_alt'))}" hidden></div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt' },
			{ label: tx('ref_b_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		empty: tx('empty'),
		needTwo: tx('need_two'),
		decodeFail: tx('err_decode'),
		encodeFail: tx('err_encode'),
		large: tx('warn_large'),
		edge: tx('warn_edge'),
		animation: tx('warn_animation'),
		maxFrames: tx('warn_max_frames'),
		gifencMissing: tx('warn_gifenc'),
		building: tx('status_building'),
		done: tx('status_done'),
		statsTpl: tx('stats_tpl'),
		fps: tx('fps_tpl'),
		frameDelayTitle: tx('frame_delay_title'),
		moveUp: tx('move_up'),
		moveDown: tx('move_down'),
		remove: tx('remove'),
		decodeStep: tx('decode_step'),
		paletteStep: tx('palette_step'),
		encodeStep: tx('encode_step'),
		elapsed: tx('elapsed'),
	};

	/**
	 * 客户端脚本：解码 → 统一画布 → 调色板量化（gifenc）→ 逐帧编码；金标 HUD；Clear 不重载样例。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 边长超过此像素时软警告。 */
      var SOFT_EDGE = 8192;
      /** 帧数超过此值时软警告。 */
      var SOFT_MAX_FRAMES = 50;
      /** 共享调色板取样的最大像素数（控制量化耗时）。 */
      var SHARED_SAMPLE_PIXELS = 400000;
      /** 默认设置（Clear 恢复）。 */
      var DEFAULTS = { delay: '500', loop: '0', width: '480', fit: 'contain', bg: '#ffffff', colors: '256', palette: 'frame', hold: '0' };
      /** 同源 vendored gifenc（不走 CDN）。 */
      var GIFENC_URL = '/vendor/gifenc/gifenc.esm.js';
      /** 当前页面语言（帧率与时长的数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};

      /** 页面控件。 */
      var drop = document.getElementById('itgDrop');
      var fileInput = document.getElementById('itgFiles');
      var listWrap = document.getElementById('itgListWrap');
      var listEl = document.getElementById('itgList');
      var btnSort = document.getElementById('itgBtnSort');
      var delayEl = document.getElementById('itgDelay');
      var fpsEl = document.getElementById('itgFps');
      var loopEl = document.getElementById('itgLoop');
      var widthEl = document.getElementById('itgWidth');
      var fitEl = document.getElementById('itgFit');
      var bgWrap = document.getElementById('itgBgWrap');
      var bgEl = document.getElementById('itgBg');
      var colorsEl = document.getElementById('itgColors');
      var paletteEl = document.getElementById('itgPalette');
      var holdEl = document.getElementById('itgHold');
      var boomerangEl = document.getElementById('itgBoomerang');
      var btnBuild = document.getElementById('itgBtnBuild');
      var btnDownload = document.getElementById('itgBtnDownload');
      var btnSample = document.getElementById('itgBtnSample');
      var btnClear = document.getElementById('itgBtnClear');
      var warnEl = document.getElementById('itgWarn');
      var errEl = document.getElementById('itgError');
      var statusEl = document.getElementById('itgStatus');
      var statsEl = document.getElementById('itgStats');
      var preview = document.getElementById('itgPreview');
      var hud = document.getElementById('itgHud');
      var pctEl = document.getElementById('itgPct');
      var stepEl = document.getElementById('itgStep');
      var timeEl = document.getElementById('itgTime');
      var barEl = document.getElementById('itgBar');

      /** 本地化文案字典。 */
      var msg = ${JSON.stringify(clientText)};

      /** 数字格式器：最多 2 位小数（帧率、秒数）。 */
      var numFormat = null;
      try {
        numFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 2 });
      } catch (e) {
        numFormat = null;
      }

      /**
       * @typedef {{ id: string, file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, thumbUrl: string, delay: number }} GifItem
       */
      /** @type {GifItem[]} 按播放顺序排列的帧。 */
      var items = [];
      /** @type {Blob|null} 上次生成的 GIF。 */
      var resultBlob = null;
      /** @type {string|null} 预览用对象 URL。 */
      var previewUrl = null;
      /** 列表行自增 id。 */
      var nextId = 1;
      /** gifenc 模块加载 Promise（缓存）。 */
      var gifencPromise = null;
      /** 忙碌锁。 */
      var busy = false;
      /** HUD 计时起点。 */
      var startedAt = 0;
      /** HUD 计时器句柄。 */
      var tickTimer = 0;

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} tpl 模板
       * @param {Object<string, string|number>} map 占位符 → 值
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
       * 按页面语言格式化数字（最多 2 位小数）。
       * @param {number} n 数值
       * @returns {string} 本地写法
       */
      function fmtNum(n) {
        return numFormat ? numFormat.format(n) : String(Math.round(n * 100) / 100);
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
       * HTML 转义（帧列表用 innerHTML 渲染）。
       * @param {string} s 原文
       * @returns {string} 转义后文本
       */
      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /** 懒加载同源 gifenc；失败后允许重试。 */
      function loadGifenc() {
        if (!gifencPromise) {
          gifencPromise = import(GIFENC_URL).catch(function () {
            gifencPromise = null;
            throw new Error('gifenc');
          });
        }
        return gifencPromise;
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
       * 读取并夹紧整数输入。
       * @param {HTMLInputElement} el 输入框
       * @param {number} min 最小值
       * @param {number} max 最大值
       * @param {number} fallback 无效时的默认值
       * @returns {number} 夹紧后的整数
       */
      function readInt(el, min, max, fallback) {
        var v = parseInt(el.value, 10);
        if (!Number.isFinite(v)) v = fallback;
        return Math.max(min, Math.min(max, v));
      }

      /** 全局帧间隔（ms，20–10000）。 */
      function globalDelay() { return readInt(delayEl, 20, 10000, 500); }

      /** 刷新帧率提示、底色可见性。 */
      function syncUi() {
        fpsEl.textContent = fill(msg.fps, { fps: fmtNum(1000 / globalDelay()) });
        bgWrap.hidden = fitEl.value !== 'contain';
        var inputs = listEl.querySelectorAll('.itg-frame-delay');
        for (var i = 0; i < inputs.length; i++) inputs[i].placeholder = String(globalDelay());
      }

      /**
       * 生成期间禁用控件。
       * @param {boolean} on 是否锁定
       */
      function lock(on) {
        busy = on;
        [btnBuild, btnSample, btnClear, btnSort, fileInput, delayEl, loopEl, widthEl, fitEl, bgEl, colorsEl, paletteEl, holdEl, boomerangEl].forEach(function (el) {
          el.disabled = on;
        });
        btnDownload.disabled = on || !resultBlob;
        btnBuild.setAttribute('aria-busy', String(on));
      }

      /** 刷新 HUD 已用时。 */
      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(msg.elapsed, { s: String(sec) });
      }

      /**
       * 更新进度 HUD。
       * @param {number} pct 0–100
       * @param {string} stepKey decode|palette|encode
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
        var order = ['decode', 'palette', 'encode'];
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

      /** 释放一帧的对象 URL 与位图。 */
      function disposeItem(item) {
        if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
        if (item.bitmap && typeof item.bitmap.close === 'function') item.bitmap.close();
      }

      /** 作废上次生成结果（设置或帧变化后需重新生成）。 */
      function clearResult() {
        resultBlob = null;
        btnDownload.disabled = true;
        if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = null; }
        preview.hidden = true;
        preview.removeAttribute('src');
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 重新渲染帧列表（序号、缩略图、单帧停留、上移 / 下移 / 删除）。 */
      function renderList() {
        listEl.innerHTML = '';
        listWrap.hidden = items.length === 0;
        items.forEach(function (item, idx) {
          var li = document.createElement('li');
          li.className = 'itg-file-item';
          li.innerHTML =
            '<img class="itg-thumb" src="' + escapeHtml(item.thumbUrl) + '" alt="">' +
            '<span class="itg-file-name">' + escapeHtml(item.file.name || ('#' + (idx + 1))) + '</span>' +
            '<input type="number" class="form-control form-control-sm itg-frame-delay" min="20" max="10000" step="10"' +
            ' data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.frameDelayTitle) + '" aria-label="' + escapeHtml(msg.frameDelayTitle) + '"' +
            ' placeholder="' + globalDelay() + '" value="' + (item.delay ? item.delay : '') + '">' +
            '<span class="itg-file-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm itg-up" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveUp) + '" aria-label="' + escapeHtml(msg.moveUp) + '"' + (idx === 0 ? ' disabled' : '') + '>&#8593;</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm itg-down" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveDown) + '" aria-label="' + escapeHtml(msg.moveDown) + '"' + (idx === items.length - 1 ? ' disabled' : '') + '>&#8595;</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm itg-remove" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.remove) + '" aria-label="' + escapeHtml(msg.remove) + '">&times;</button>' +
            '</span>';
          listEl.appendChild(li);
        });
      }

      /** 汇总大小 / 边长 / 动图 / 帧数警告。 */
      function refreshWarnings() {
        var warns = [];
        var hasGif = false;
        var hasLarge = false;
        var hasEdge = false;
        items.forEach(function (it) {
          if (it.file.size > SOFT_BYTES) hasLarge = true;
          if (it.w > SOFT_EDGE || it.h > SOFT_EDGE) hasEdge = true;
          if ((it.file.type || '').indexOf('gif') >= 0 || /[.]gif$/i.test(it.file.name || '')) hasGif = true;
        });
        if (hasLarge) warns.push(msg.large);
        if (hasEdge) warns.push(msg.edge);
        if (hasGif) warns.push(msg.animation);
        if (items.length > SOFT_MAX_FRAMES) warns.push(msg.maxFrames);
        setWarn(warns.join(' '));
      }

      /**
       * 解码并追加文件到帧队列（保持选择顺序）。
       * @param {FileList|File[]} files 文件列表
       * @returns {Promise<void>}
       */
      function addFiles(files) {
        setError('');
        clearResult();
        var arr = Array.prototype.slice.call(files || []);
        if (!arr.length) return Promise.resolve();
        var failed = 0;
        return Promise.all(arr.map(function (file) {
          return decodeImage(file).then(function (dec) {
            return { id: String(nextId++), file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h, thumbUrl: URL.createObjectURL(file), delay: 0 };
          }).catch(function () {
            failed += 1;
            return null;
          });
        })).then(function (decoded) {
          decoded.forEach(function (it) { if (it) items.push(it); });
          renderList();
          refreshWarnings();
          if (failed) setError(msg.decodeFail);
        });
      }

      /**
       * 输出画布尺寸：宽度取设置值，高度按第一帧宽高比。
       * @returns {{ w: number, h: number }}
       */
      function outputSize() {
        var outW = readInt(widthEl, 64, 2048, 480);
        var first = items[0];
        var outH = Math.max(1, Math.round(outW * first.h / first.w));
        if (outH > 2048) outH = 2048;
        return { w: outW, h: outH };
      }

      /**
       * 把一帧画到统一画布：完整显示（留边填底色）或裁剪铺满。
       * @param {CanvasRenderingContext2D} ctx 目标上下文
       * @param {GifItem} item 帧
       * @param {number} cw 画布宽
       * @param {number} ch 画布高
       */
      function drawFrame(ctx, item, cw, ch) {
        var cover = fitEl.value === 'cover';
        ctx.fillStyle = cover ? '#ffffff' : (bgEl.value || '#ffffff');
        ctx.fillRect(0, 0, cw, ch);
        var scale = cover ? Math.max(cw / item.w, ch / item.h) : Math.min(cw / item.w, ch / item.h);
        var dw = item.w * scale;
        var dh = item.h * scale;
        ctx.drawImage(item.bitmap, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      }

      /**
       * 计算播放序列（来回播放时追加倒序，首尾不重复）与每帧停留时间。
       * @returns {{ seq: GifItem[], delays: number[] }}
       */
      function playSequence() {
        var seq = items.slice();
        if (boomerangEl.checked && items.length >= 3) seq = seq.concat(items.slice(1, -1).reverse());
        var base = globalDelay();
        var delays = seq.map(function (it) { return it.delay ? it.delay : base; });
        delays[delays.length - 1] += readInt(holdEl, 0, 10000, 0);
        return { seq: seq, delays: delays };
      }

      /**
       * 让出主线程一帧，使 HUD 有机会重绘。
       * @returns {Promise<void>}
       */
      function yieldFrame() {
        return new Promise(function (resolve) { setTimeout(resolve, 0); });
      }

      /**
       * 生成 GIF：渲染各帧像素 → （共享）调色板 → 逐帧编码。
       * @param {Object} mod gifenc 模块
       * @returns {Promise<{ bytes: Uint8Array, size: Object, frames: number, duration: number }>}
       */
      function encodeGif(mod) {
        var GIFEncoder = mod.GIFEncoder;
        var quantize = mod.quantize;
        var applyPalette = mod.applyPalette;
        if (!GIFEncoder || !quantize || !applyPalette) return Promise.reject(new Error('gifenc'));
        var size = outputSize();
        var plan = playSequence();
        var colors = readInt(colorsEl, 2, 256, 256);
        var shared = paletteEl.value === 'shared';
        var repeat = parseInt(loopEl.value, 10);
        if (!Number.isFinite(repeat)) repeat = 0;
        var canvas = document.createElement('canvas');
        canvas.width = size.w;
        canvas.height = size.h;
        var ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return Promise.reject(new Error('encode'));
        /** 每个源帧只渲染一次（来回播放复用像素）。 */
        var pixels = {};
        var i = 0;
        var n = items.length;

        /** 逐个渲染源帧像素。 */
        function renderNext() {
          if (i >= n) return Promise.resolve();
          progress(5 + (i / n) * 30, 'decode', fill(msg.decodeStep, { i: i + 1, n: n }));
          drawFrame(ctx, items[i], size.w, size.h);
          pixels[items[i].id] = ctx.getImageData(0, 0, size.w, size.h).data;
          i += 1;
          return yieldFrame().then(renderNext);
        }

        /**
         * 共享调色板：从各帧等距取样拼成一块，再量化一次。
         * @returns {Array|null} 调色板或 null（每帧独立）
         */
        function buildShared() {
          if (!shared) return null;
          var total = size.w * size.h * n;
          var stride = Math.max(1, Math.ceil(total / SHARED_SAMPLE_PIXELS));
          var count = 0;
          items.forEach(function () { count += Math.ceil((size.w * size.h) / stride); });
          var sample = new Uint8Array(count * 4);
          var o = 0;
          items.forEach(function (it) {
            var d = pixels[it.id];
            for (var p = 0; p < size.w * size.h && o < sample.length; p += stride) {
              sample[o] = d[p * 4];
              sample[o + 1] = d[p * 4 + 1];
              sample[o + 2] = d[p * 4 + 2];
              sample[o + 3] = 255;
              o += 4;
            }
          });
          return quantize(sample, colors);
        }

        var gif = GIFEncoder();
        var sharedPalette = null;
        var f = 0;

        /** 逐帧量化并写入。 */
        function encodeNext() {
          if (f >= plan.seq.length) return Promise.resolve();
          progress(45 + (f / plan.seq.length) * 53, 'encode', fill(msg.encodeStep, { i: f + 1, n: plan.seq.length }));
          var data = pixels[plan.seq[f].id];
          var palette = sharedPalette || quantize(data, colors);
          var index = applyPalette(data, palette);
          var frameOpts = { delay: plan.delays[f] };
          if (f === 0 || !sharedPalette) frameOpts.palette = palette;
          if (f === 0) frameOpts.repeat = repeat;
          gif.writeFrame(index, size.w, size.h, frameOpts);
          f += 1;
          return yieldFrame().then(encodeNext);
        }

        return renderNext()
          .then(function () {
            progress(38, 'palette', msg.paletteStep);
            return yieldFrame();
          })
          .then(function () {
            sharedPalette = buildShared();
            return encodeNext();
          })
          .then(function () {
            gif.finish();
            /** GIF 以 1/100 秒存储停留时间，按编码后的值累计一轮时长。 */
            var duration = plan.delays.reduce(function (sum, d) { return sum + Math.round(d / 10) * 10; }, 0) / 1000;
            return { bytes: gif.bytes(), size: size, frames: plan.seq.length, duration: duration };
          });
      }

      /**
       * 生成 GIF 并显示预览。
       * @returns {Promise<void>}
       */
      function build() {
        if (busy) return Promise.resolve();
        setError('');
        clearResult();
        if (!items.length) { setError(msg.empty); return Promise.resolve(); }
        if (items.length < 2) { setError(msg.needTwo); return Promise.resolve(); }
        setStatus(msg.building);
        lock(true);
        startedAt = Date.now();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 250);
        tickTime();
        progress(2, 'decode', fill(msg.decodeStep, { i: 1, n: items.length }));
        return loadGifenc()
          .then(encodeGif)
          .then(function (out) {
            resultBlob = new Blob([out.bytes], { type: 'image/gif' });
            previewUrl = URL.createObjectURL(resultBlob);
            preview.src = previewUrl;
            preview.hidden = false;
            lock(false);
            statsEl.textContent = fill(msg.statsTpl, {
              w: out.size.w,
              h: out.size.h,
              frames: out.frames,
              dur: fmtNum(out.duration),
              bytes: formatBytes(resultBlob.size)
            });
            statsEl.style.display = '';
            setStatus(msg.done);
            progress(100, 'encode', fill(msg.encodeStep, { i: out.frames, n: out.frames }));
            endHud(true);
          })
          .catch(function (err) {
            lock(false);
            setError(err && err.message === 'gifenc' ? msg.gifencMissing : msg.encodeFail);
            setStatus('');
            endHud(false);
          });
      }

      /** 下载上次生成的 GIF（文件名取第一帧文件名）。 */
      function downloadResult() {
        if (!resultBlob) return;
        var first = items[0] && items[0].file && items[0].file.name ? items[0].file.name.replace(/[.][^.]+$/, '') : 'animation';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = first + '-animated.gif';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 恢复默认设置（不动帧列表）。
       */
      function resetSettings() {
        delayEl.value = DEFAULTS.delay;
        loopEl.value = DEFAULTS.loop;
        widthEl.value = DEFAULTS.width;
        fitEl.value = DEFAULTS.fit;
        bgEl.value = DEFAULTS.bg;
        colorsEl.value = DEFAULTS.colors;
        paletteEl.value = DEFAULTS.palette;
        holdEl.value = DEFAULTS.hold;
        boomerangEl.checked = false;
        syncUi();
      }

      /**
       * 真正清空：移除全部帧、作废结果、恢复默认设置；不重新加载样例。
       * @param {boolean} resetInput 是否清空文件输入
       */
      function clearAll(resetInput) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        items.forEach(disposeItem);
        items = [];
        if (resetInput !== false) fileInput.value = '';
        renderList();
        clearResult();
        setError('');
        setWarn('');
        setStatus('');
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
        resetSettings();
      }

      /**
       * 样例：8 帧 240×180，小球从左移到右并变色（帧号 1/8…8/8），100 ms/帧 = 10 fps，无限循环；自动生成。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var total = 8;
        var jobs = [];
        for (var k = 0; k < total; k++) {
          jobs.push(new Promise(function (resolve) {
            var idx = k;
            var c = document.createElement('canvas');
            c.width = 240;
            c.height = 180;
            var ctx = c.getContext('2d');
            if (!ctx) { resolve(null); return; }
            var grad = ctx.createLinearGradient(0, 0, 0, 180);
            grad.addColorStop(0, '#e0f2fe');
            grad.addColorStop(1, '#f8fafc');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 240, 180);
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(0, 150, 240, 4);
            ctx.beginPath();
            ctx.arc(30 + idx * 25, 120 - Math.sin((idx / (total - 1)) * Math.PI) * 70, 18, 0, Math.PI * 2);
            ctx.fillStyle = 'hsl(' + Math.round(idx * 40) + ', 80%, 50%)';
            ctx.fill();
            ctx.fillStyle = '#0f172a';
            ctx.font = 'bold 16px sans-serif';
            ctx.fillText((idx + 1) + '/' + total, 12, 24);
            c.toBlob(function (blob) {
              resolve(blob ? new File([blob], 'frame-' + (idx + 1) + '.png', { type: 'image/png' }) : null);
            }, 'image/png');
          }));
        }
        return Promise.all(jobs)
          .then(function (files) { return addFiles(files.filter(Boolean)); })
          .then(function () {
            delayEl.value = '100';
            widthEl.value = '240';
            syncUi();
            if (items.length >= 2) return build();
          });
      }

      /** 帧列表：上移 / 下移 / 删除。 */
      listEl.addEventListener('click', function (e) {
        var tEl = e.target;
        if (!tEl || !tEl.closest || busy) return;
        var btn = tEl.closest('.itg-up, .itg-down, .itg-remove');
        if (!btn) return;
        var id = btn.getAttribute('data-id');
        var idx = items.findIndex(function (it) { return it.id === id; });
        if (idx < 0) return;
        if (btn.classList.contains('itg-up') && idx > 0) {
          var tmp = items[idx - 1];
          items[idx - 1] = items[idx];
          items[idx] = tmp;
        } else if (btn.classList.contains('itg-down') && idx < items.length - 1) {
          var tmp2 = items[idx + 1];
          items[idx + 1] = items[idx];
          items[idx] = tmp2;
        } else if (btn.classList.contains('itg-remove')) {
          disposeItem(items[idx]);
          items.splice(idx, 1);
          refreshWarnings();
        }
        renderList();
        clearResult();
      });

      /** 单帧停留时间：留空 = 用全局间隔。 */
      listEl.addEventListener('change', function (e) {
        var el = e.target;
        if (!el || !el.classList || !el.classList.contains('itg-frame-delay')) return;
        var it = items.find(function (x) { return x.id === el.getAttribute('data-id'); });
        if (!it) return;
        var v = parseInt(el.value, 10);
        it.delay = Number.isFinite(v) ? Math.max(20, Math.min(10000, v)) : 0;
        el.value = it.delay ? String(it.delay) : '';
        clearResult();
      });

      /** 按文件名自然排序（frame-2 排在 frame-10 前）。 */
      btnSort.addEventListener('click', function () {
        items.sort(function (a, b) {
          return String(a.file.name || '').localeCompare(String(b.file.name || ''), undefined, { numeric: true, sensitivity: 'base' });
        });
        renderList();
        clearResult();
      });

      /** 任一设置变化：作废结果，需重新生成。 */
      [delayEl, loopEl, widthEl, fitEl, bgEl, colorsEl, paletteEl, holdEl, boomerangEl].forEach(function (el) {
        el.addEventListener('change', function () { syncUi(); clearResult(); });
      });
      delayEl.addEventListener('input', syncUi);

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs.length && !busy) addFiles(fs);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
        fileInput.value = '';
      });

      btnBuild.addEventListener('click', function () { build(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUi();
      /** 进页：首帧绘制后自动跑样例（编码器从同源 /vendor 加载）。 */
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(function () { setTimeout(loadSample, 0); });
      } else {
        setTimeout(loadSample, 0);
      }
    })();
  </script>`;

	const toolMeta = getToolBySlug('images-to-gif');
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
