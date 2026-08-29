/**
 * 智能网站配色方案工具页：品牌主色 → 中性 + 语义 token（link≠action、状态色解耦）+ 轻量预览 + CSS/JSON 导出。
 * slug: smart-website-color-scheme
 * 见 work-tasks/smart-website-color-scheme/02-tool-info.md 与 docs/2026-08-08-site-color-system.md。
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

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染智能网站配色方案页面。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSmartWebsiteColorSchemePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径。 */
	const toolPath = '/tools/smart-website-color-scheme';
	/** 当前语言 canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title。 */
	const title = `${t(opts.lang, 'tool_smart_website_color_scheme_title')} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
	const description = t(opts.lang, 'tool_smart_website_color_scheme_description');
	/** i18n 键前缀。 */
	const P = 'tool_smart_website_color_scheme';

	/** 顶栏导航。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换显式前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 切换器用路径表。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 顶栏。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'smart-website-color-scheme',
			currentAnchor: '#scheme',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：token 表、自检、轻量 chrome 预览。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .base-wrap { display: flex; gap: .5rem; align-items: center; flex-wrap: wrap; }
    .base-wrap input[type="color"] { width: 48px; height: 38px; padding: 0; border: 1px solid #ced4da; border-radius: .375rem; cursor: pointer; }
    .theme-row { display: flex; gap: .5rem; align-items: center; flex-wrap: wrap; margin-bottom: .5rem; }
    .theme-row input[type="text"].theme-id { max-width: 140px; }
    .theme-row input[type="text"].theme-hex { max-width: 120px; }
    .token-table { width: 100%; border-collapse: collapse; font-size: .875rem; background: #fff; }
    .token-table th, .token-table td { border: 1px solid #dee2e6; padding: .4rem .55rem; text-align: left; vertical-align: middle; }
    .token-table th { background: #f8f9fa; font-weight: 600; }
    .swatch-cell { display: flex; align-items: center; gap: .5rem; }
    .swatch-dot { width: 1.1rem; height: 1.1rem; border-radius: .25rem; border: 1px solid rgba(0,0,0,.12); flex-shrink: 0; }
    .role-cell {
      font-size: .8125rem; font-weight: 500; border-radius: .25rem;
      padding: .35rem .5rem !important; vertical-align: middle;
    }
    .check-list { list-style: none; padding: 0; margin: 0; }
    .check-list li { display: flex; flex-wrap: wrap; gap: .35rem .75rem; align-items: center; padding: .35rem 0; border-bottom: 1px solid #ececf2; font-size: .875rem; }
    .badge-aa { display: inline-block; font-size: .7rem; font-weight: 700; padding: .15rem .4rem; border-radius: .25rem; }
    .badge-aa.pass { background: #e6f4ea; color: #137333; }
    .badge-aa.fail { background: #fce8e6; color: #c5221f; }
    .scheme-warn { font-size: .875rem; color: #9a4519; }
    #chromePreview {
      border: 1px solid #d6d6df; border-radius: .5rem; overflow: hidden; background: #fff; font-size: .8125rem;
    }
    #chromePreview .cp-nav {
      display: flex; align-items: center; gap: .75rem; padding: .55rem .85rem; border-bottom: 1px solid #d6d6df; background: #fff;
    }
    #chromePreview .cp-brand { font-weight: 700; }
    #chromePreview .cp-body { display: grid; grid-template-columns: 110px 1fr; min-height: 140px; }
    #chromePreview .cp-side { background: #fff; border-right: 1px solid #d6d6df; padding: .5rem 0; }
    #chromePreview .cp-side-item { padding: .35rem .65rem; margin: .15rem .35rem; border-radius: .25rem; }
    #chromePreview .cp-side-item.is-active { font-weight: 600; }
    #chromePreview .cp-main { padding: .75rem; }
    #chromePreview .cp-card {
      background: #fff; border: 1px solid #d6d6df; border-radius: .4rem; padding: .65rem .75rem; margin-bottom: .5rem;
    }
    #chromePreview .cp-btn {
      display: inline-block; padding: .3rem .7rem; border-radius: .3rem; border: 1px solid #c2c2cc;
      background: #fff; font-size: .8125rem; cursor: default;
    }
    #chromePreview .cp-link { text-decoration: underline; }
    #chromePreview .cp-err { margin-top: .35rem; font-size: .75rem; }
    .theme-tabs { display: flex; flex-wrap: wrap; gap: .35rem; margin-bottom: .5rem; }
    .theme-tabs button {
      border: 1px solid #ced4da; background: #fff; border-radius: .35rem; padding: .2rem .55rem; font-size: .8rem; cursor: pointer;
    }
    .theme-tabs button.is-on { border-color: #333; font-weight: 600; }
  </style>`;

	/** 首屏交互。 */
	const contentHtml = `
    <div id="scheme" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="btnGenerate" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_generate`))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_sample`))}</button>
      <button type="button" id="btnAddTheme" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_add_theme`))}</button>
      <button type="button" id="btnCopyCss" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_copy_css`))}</button>
      <button type="button" id="btnCopyJson" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_copy_json`))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_clear`))}</button>
    </div>

    <p id="schemeError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="schemeWarn" class="scheme-warn mb-2" style="display:none;" role="status"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, `${P}_themes_label`))}</label>
      <div id="themeList" aria-live="polite"></div>
      <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_themes_hint`))}</p>
    </div>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, `${P}_preview_label`))}</label>
      <div id="themeTabs" class="theme-tabs"></div>
      <div id="chromePreview">
        <div class="cp-nav">
          <span class="cp-brand" id="cpBrand"></span>
          <span id="cpNavMuted" style="opacity:.75;"></span>
        </div>
        <div class="cp-body">
          <div class="cp-side">
            <div class="cp-side-item" id="cpSide1"></div>
            <div class="cp-side-item is-active" id="cpSide2"></div>
          </div>
          <div class="cp-main">
            <div class="cp-card">
              <div id="cpCardTitle" style="font-weight:600;"></div>
              <div id="cpCardBody" class="small" style="margin:.35rem 0;"></div>
              <button type="button" class="cp-btn" id="cpBtn" tabindex="-1"></button>
              <a href="#scheme" class="cp-link ms-2" id="cpLink" onclick="return false;"></a>
              <div class="cp-err" id="cpErr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, `${P}_checks_label`))}</label>
      <ul id="checkList" class="check-list" aria-live="polite"></ul>
    </div>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, `${P}_primitives_label`))}</label>
      <div class="table-responsive">
        <table class="token-table" id="primTable">
          <thead><tr><th>${escapeHtml(t(opts.lang, `${P}_col_token`))}</th><th>${escapeHtml(t(opts.lang, `${P}_col_value`))}</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

    <div class="mb-4">
      <label class="form-label">${escapeHtml(t(opts.lang, `${P}_semantics_label`))}</label>
      <div class="table-responsive">
        <table class="token-table" id="semTable">
          <thead><tr><th>${escapeHtml(t(opts.lang, `${P}_col_token`))}</th><th>${escapeHtml(t(opts.lang, `${P}_col_value`))}</th><th>${escapeHtml(t(opts.lang, `${P}_col_role`))}</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>`;

	/** IG 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 5,
	});

	/** 引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'WCAG 2.2 Understanding — Contrast (Minimum)',
				href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum/',
			},
			{ label: 'Primer — Color overview', href: 'https://primer.style/foundations/color/overview' },
			{
				label: 'SGDS — Semantic colour',
				href: 'https://designsystem.tech.gov.sg/foundations/colour/semantic-colour',
			},
		],
	});

	/** catalog。 */
	const tool = getToolBySlug('smart-website-color-scheme');
	/** FAQ / Related。 */
	const extraHtml = tool
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool })
		: '';

	/** JSON-LD。 */
	const toolJsonLd = tool
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool,
				name: t(opts.lang, `${P}_title`),
				description,
				canonicalPath,
			})
		: '';

	/** 客户端文案。 */
	const ui = {
		badHex: t(opts.lang, `${P}_bad_hex`),
		badId: t(opts.lang, `${P}_bad_id`),
		empty: t(opts.lang, `${P}_empty`),
		copied: t(opts.lang, `${P}_copy_done`),
		warnContrast: t(opts.lang, `${P}_warn_contrast`),
		maxThemes: t(opts.lang, `${P}_max_themes`),
		aaPass: t(opts.lang, `${P}_aa_pass`),
		aaFail: t(opts.lang, `${P}_aa_fail`),
		checkText: t(opts.lang, `${P}_check_text`),
		checkMuted: t(opts.lang, `${P}_check_muted`),
		checkOnAction: t(opts.lang, `${P}_check_on_action`),
		remove: t(opts.lang, `${P}_remove_theme`),
		themeIdPh: t(opts.lang, `${P}_theme_id_ph`),
		themeHexPh: t(opts.lang, `${P}_theme_hex_ph`),
		cpBrand: t(opts.lang, `${P}_cp_brand`),
		cpNav: t(opts.lang, `${P}_cp_nav`),
		cpSide1: t(opts.lang, `${P}_cp_side1`),
		cpSide2: t(opts.lang, `${P}_cp_side2`),
		cpCardTitle: t(opts.lang, `${P}_cp_card_title`),
		cpCardBody: t(opts.lang, `${P}_cp_card_body`),
		cpBtn: t(opts.lang, `${P}_cp_btn`),
		cpLink: t(opts.lang, `${P}_cp_link`),
		cpErr: t(opts.lang, `${P}_cp_err`),
		roleBg: t(opts.lang, `${P}_role_bg`),
		roleSurface: t(opts.lang, `${P}_role_surface`),
		roleText: t(opts.lang, `${P}_role_text`),
		roleMuted: t(opts.lang, `${P}_role_muted`),
		roleBorder: t(opts.lang, `${P}_role_border`),
		roleLink: t(opts.lang, `${P}_role_link`),
		roleAction: t(opts.lang, `${P}_role_action`),
		roleFocus: t(opts.lang, `${P}_role_focus`),
		roleStatus: t(opts.lang, `${P}_role_status`),
		roleOnAction: t(opts.lang, `${P}_role_on_action`),
	};

	/** 内联脚本：中性固定阶、品牌衍生、语义映射、对比自检、多主题导出。 */
	const extraBodyHtml = `
  <script>
(function () {
  /** UI 文案包。 */
  var UI = ${JSON.stringify(ui)};
  /** 最多主题数。 */
  var MAX_THEMES = 4;
  /** 共享中性色阶（跨主题固定）。 */
  var NEUTRALS = {
    'neutral-0': '#FFFFFF',
    'neutral-50': '#F5F5FA',
    'neutral-200': '#D6D6DF',
    'neutral-300': '#C2C2CC',
    'neutral-600': '#47474F',
    'neutral-800': '#33333B',
    'neutral-950': '#161616'
  };
  /** 固定状态色（与品牌解耦）。 */
  var STATUS = {
    danger: '#B42318',
    success: '#0F7A5A',
    warning: '#C45C26',
    info: '#1F4E79'
  };

  /** 主题列表容器。 */
  var themeList = document.getElementById('themeList');
  /** 主题切换 tabs。 */
  var themeTabs = document.getElementById('themeTabs');
  /** 错误提示。 */
  var schemeError = document.getElementById('schemeError');
  /** 警告提示。 */
  var schemeWarn = document.getElementById('schemeWarn');
  /** 自检列表。 */
  var checkList = document.getElementById('checkList');
  /** primitives 表体。 */
  var primBody = document.querySelector('#primTable tbody');
  /** semantics 表体。 */
  var semBody = document.querySelector('#semTable tbody');
  /** 预览根。 */
  var chromePreview = document.getElementById('chromePreview');

  /** 内存主题：{ id, hex }。 */
  var themes = [];
  /** 当前预览主题下标。 */
  var activeIdx = 0;
  /** 最近 CSS。 */
  var lastCss = '';
  /** 最近 JSON。 */
  var lastJson = '';
  /** 最近各主题语义包。 */
  var lastPacks = [];

  /**
   * 规范化主题 id（css 安全）。
   * @param {string} raw
   * @returns {string|null}
   */
  function normalizeId(raw) {
    var s = String(raw || '').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
    if (!s || s.length > 32) return null;
    return s;
  }

  /**
   * 规范化 HEX。
   * @param {string} raw
   * @returns {string|null}
   */
  function normalizeHex(raw) {
    var s = String(raw || '').trim();
    if (!s) return null;
    if (s.charAt(0) !== '#') s = '#' + s;
    var m3 = /^#([0-9a-fA-F]{3})$/.exec(s);
    if (m3) {
      var t3 = m3[1];
      return ('#' + t3[0] + t3[0] + t3[1] + t3[1] + t3[2] + t3[2]).toUpperCase();
    }
    var m6 = /^#([0-9a-fA-F]{6})$/.exec(s);
    if (m6) return ('#' + m6[1]).toUpperCase();
    return null;
  }

  /**
   * HEX → RGB。
   * @param {string} hex
   * @returns {number[]}
   */
  function hexToRgb(hex) {
    var h = hex.slice(1);
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  /**
   * RGB → HEX。
   * @param {number} r
   * @param {number} g
   * @param {number} b
   * @returns {string}
   */
  function rgbToHex(r, g, b) {
    function ch(n) {
      var v = Math.max(0, Math.min(255, Math.round(n)));
      var s = v.toString(16).toUpperCase();
      return s.length === 1 ? '0' + s : s;
    }
    return '#' + ch(r) + ch(g) + ch(b);
  }

  /**
   * sRGB → 线性。
   * @param {number} c8
   * @returns {number}
   */
  function srgbToLinear(c8) {
    var c = c8 / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  /**
   * 相对亮度。
   * @param {number[]} rgb
   * @returns {number}
   */
  function relativeLuminance(rgb) {
    return 0.2126 * srgbToLinear(rgb[0]) + 0.7152 * srgbToLinear(rgb[1]) + 0.0722 * srgbToLinear(rgb[2]);
  }

  /**
   * 对比度比率。
   * @param {number[]} a
   * @param {number[]} b
   * @returns {number}
   */
  function contrastRatio(a, b) {
    var l1 = relativeLuminance(a);
    var l2 = relativeLuminance(b);
    var hi = Math.max(l1, l2);
    var lo = Math.min(l1, l2);
    return (hi + 0.05) / (lo + 0.05);
  }

  /**
   * 压暗品牌色作 hover（约 ×0.78 亮度）。
   * @param {number[]} rgb
   * @returns {string}
   */
  function darkenHover(rgb) {
    return rgbToHex(rgb[0] * 0.78, rgb[1] * 0.78, rgb[2] * 0.78);
  }

  /**
   * 极淡氛围底：中性 50 与品牌 92/8 混合。
   * @param {number[]} brand
   * @returns {string}
   */
  function tintBg(brand) {
    var n = hexToRgb(NEUTRALS['neutral-50']);
    return rgbToHex(
      n[0] * 0.92 + brand[0] * 0.08,
      n[1] * 0.92 + brand[1] * 0.08,
      n[2] * 0.92 + brand[2] * 0.08
    );
  }

  /**
   * soft / focus rgba 字符串。
   * @param {number[]} rgb
   * @param {number} a
   * @returns {string}
   */
  function rgbaOf(rgb, a) {
    return 'rgba(' + Math.round(rgb[0]) + ',' + Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ',' + a + ')';
  }

  /**
   * on-action：白或黑取对比更高者。
   * @param {number[]} bg
   * @returns {{hex:string,ratio:number}}
   */
  function bestOnAction(bg) {
    var black = [0, 0, 0];
    var white = [255, 255, 255];
    var rb = contrastRatio(black, bg);
    var rw = contrastRatio(white, bg);
    if (rw >= rb) return { hex: '#FFFFFF', ratio: rw };
    return { hex: '#000000', ratio: rb };
  }

  /**
   * 由品牌 HEX 构建一套语义 pack。
   * @param {string} brandHex
   * @param {string} id
   * @returns {object}
   */
  function buildPack(brandHex, id) {
    var brand = hexToRgb(brandHex);
    var action = brandHex;
    var actionHover = darkenHover(brand);
    var soft = rgbaOf(brand, 0.1);
    var focus = rgbaOf(brand, 0.4);
    var bg = tintBg(brand);
    var surface = NEUTRALS['neutral-0'];
    var text = NEUTRALS['neutral-800'];
    var textStrong = NEUTRALS['neutral-950'];
    var textMuted = NEUTRALS['neutral-600'];
    var border = NEUTRALS['neutral-200'];
    var borderStrong = NEUTRALS['neutral-300'];
    var link = text;
    var linkHover = textStrong;
    var on = bestOnAction(brand);
    return {
      id: id,
      brand: brandHex,
      primitives: {
        brand: brandHex,
        'brand-hover': actionHover,
        'brand-soft': soft,
        'brand-tint-bg': bg,
        neutrals: NEUTRALS
      },
      semantics: {
        '--bg': bg,
        '--surface': surface,
        '--text': text,
        '--text-strong': textStrong,
        '--text-muted': textMuted,
        '--border': border,
        '--border-strong': borderStrong,
        '--link': link,
        '--link-hover': linkHover,
        '--action': action,
        '--action-hover': actionHover,
        '--action-soft': soft,
        '--focus-ring': focus,
        '--on-action': on.hex,
        '--danger': STATUS.danger,
        '--success': STATUS.success,
        '--warning': STATUS.warning,
        '--info': STATUS.info
      },
      checks: {
        textOnSurface: contrastRatio(hexToRgb(text), hexToRgb(surface)),
        mutedOnSurface: contrastRatio(hexToRgb(textMuted), hexToRgb(surface)),
        onActionOnAction: on.ratio
      }
    };
  }

  /**
   * 显示错误。
   * @param {string} msg
   */
  function setError(msg) {
    if (!msg) {
      schemeError.style.display = 'none';
      schemeError.textContent = '';
      return;
    }
    schemeError.style.display = 'block';
    schemeError.textContent = msg;
  }

  /**
   * 显示警告。
   * @param {string} msg
   */
  function setWarn(msg) {
    if (!msg) {
      schemeWarn.style.display = 'none';
      schemeWarn.textContent = '';
      return;
    }
    schemeWarn.style.display = 'block';
    schemeWarn.textContent = msg;
  }

  /**
   * 复制反馈。
   * @param {HTMLElement} btn
   */
  function flashCopied(btn) {
    var old = btn.textContent;
    btn.textContent = UI.copied;
    setTimeout(function () { btn.textContent = old; }, 1200);
  }

  /**
   * 解析 CSS 色值为 RGB（rgba 按白底合成）。
   * @param {string} value
   * @returns {number[]|null}
   */
  function parseCssColor(value) {
    var hex = normalizeHex(value);
    if (hex) return hexToRgb(hex);
    var m = /^rgba?\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)(?:\\s*,\\s*([0-9.]+))?\\s*\\)$/i.exec(String(value || '').trim());
    if (!m) return null;
    var r = Number(m[1]), g = Number(m[2]), b = Number(m[3]);
    var a = m[4] !== undefined ? Number(m[4]) : 1;
    if (!(a >= 0 && a <= 1)) a = 1;
    /* 半透明叠白底，便于算对比与预览。 */
    return [
      Math.round(r * a + 255 * (1 - a)),
      Math.round(g * a + 255 * (1 - a)),
      Math.round(b * a + 255 * (1 - a))
    ];
  }

  /**
   * 角色格样式：按 token 值变色（字色类用前景色，其余用背景色）。
   * @param {string} name
   * @param {string} value
   * @returns {string} inline style
   */
  function roleCellStyle(name, value) {
    var rgb = parseCssColor(value);
    if (!rgb) return '';
    var textish = /(?:^|-)(text|link|on-action)(?:-|$)/.test(name);
    if (textish && value.charAt(0) === '#') {
      return 'color:' + value + ';background:#ffffff;';
    }
    var on = bestOnAction(rgb);
    return 'background:' + value + ';color:' + on.hex + ';';
  }

  /**
   * 表格行（带色点；有角色列时按值着色）。
   * @param {string} name
   * @param {string} value
   * @param {string} [role]
   * @returns {string}
   */
  function rowHtml(name, value, role) {
    var sw = value.indexOf('rgba') === 0 || value.charAt(0) === '#'
      ? '<span class="swatch-dot" style="background:' + value + '"></span>'
      : '';
    var roleTd = '';
    if (role !== undefined) {
      var st = roleCellStyle(name, value);
      roleTd = '<td class="role-cell"' + (st ? ' style="' + st + '"' : '') + '>' + role + '</td>';
    }
    return '<tr><td><code>' + name + '</code></td><td><span class="swatch-cell">' + sw + '<code>' + value + '</code></span></td>' + roleTd + '</tr>';
  }

  /**
   * AA 徽章 HTML。
   * @param {number} ratio
   * @returns {string}
   */
  function aaBadge(ratio) {
    var ok = ratio >= 4.5;
    return '<span class="badge-aa ' + (ok ? 'pass' : 'fail') + '">' +
      (ok ? UI.aaPass : UI.aaFail) + ' · ' + ratio.toFixed(2) + ':1</span>';
  }

  /** 从 DOM 读主题行。 */
  function readThemesFromDom() {
    var rows = themeList.querySelectorAll('.theme-row');
    var out = [];
    for (var i = 0; i < rows.length; i++) {
      var idEl = rows[i].querySelector('.theme-id');
      var hexEl = rows[i].querySelector('.theme-hex');
      var pickEl = rows[i].querySelector('.theme-pick');
      out.push({
        id: idEl ? idEl.value : '',
        hex: hexEl ? hexEl.value : (pickEl ? pickEl.value : '')
      });
    }
    return out;
  }

  /**
   * 渲染主题输入行。
   * @param {{id:string,hex:string}[]} list
   */
  function renderThemeInputs(list) {
    var html = [];
    for (var i = 0; i < list.length; i++) {
      var th = list[i];
      var hexVal = (th.hex || '#0F6E8C').toLowerCase();
      html.push(
        '<div class="theme-row" data-idx="' + i + '">' +
          '<input type="color" class="theme-pick" value="' + hexVal + '" aria-label="brand" />' +
          '<input type="text" class="form-control form-control-sm theme-id" value="' + String(th.id || '').replace(/"/g, '') + '" placeholder="' + UI.themeIdPh + '" spellcheck="false" />' +
          '<input type="text" class="form-control form-control-sm theme-hex" value="' + String(th.hex || '').toUpperCase() + '" placeholder="' + UI.themeHexPh + '" spellcheck="false" />' +
          (list.length > 1
            ? '<button type="button" class="btn btn-outline-secondary btn-sm btn-remove" data-idx="' + i + '">' + UI.remove + '</button>'
            : '') +
        '</div>'
      );
    }
    themeList.innerHTML = html.join('');
    themeList.querySelectorAll('.theme-pick').forEach(function (el) {
      el.addEventListener('input', function () {
        var row = el.closest('.theme-row');
        var hexInput = row.querySelector('.theme-hex');
        hexInput.value = el.value.toUpperCase();
        generate();
      });
    });
    themeList.querySelectorAll('.theme-hex').forEach(function (el) {
      el.addEventListener('change', generate);
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter') generate(); });
    });
    themeList.querySelectorAll('.theme-id').forEach(function (el) {
      el.addEventListener('change', generate);
    });
    themeList.querySelectorAll('.btn-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = Number(btn.getAttribute('data-idx'));
        var cur = readThemesFromDom();
        if (cur.length <= 1) return;
        cur.splice(idx, 1);
        renderThemeInputs(cur);
        if (activeIdx >= cur.length) activeIdx = 0;
        generate();
      });
    });
  }

  /**
   * 刷新 chrome 预览。
   * @param {object} pack
   */
  function paintPreview(pack) {
    var s = pack.semantics;
    chromePreview.style.background = s['--bg'];
    var nav = chromePreview.querySelector('.cp-nav');
    nav.style.background = s['--surface'];
    nav.style.borderBottomColor = s['--border'];
    document.getElementById('cpBrand').style.color = s['--text-strong'];
    document.getElementById('cpBrand').textContent = UI.cpBrand;
    document.getElementById('cpNavMuted').style.color = s['--text-muted'];
    document.getElementById('cpNavMuted').textContent = UI.cpNav;
    var side = chromePreview.querySelector('.cp-side');
    side.style.background = s['--surface'];
    side.style.borderRightColor = s['--border'];
    var s1 = document.getElementById('cpSide1');
    var s2 = document.getElementById('cpSide2');
    s1.style.color = s['--text'];
    s1.textContent = UI.cpSide1;
    s2.style.color = s['--text-strong'];
    s2.style.background = s['--action-soft'];
    s2.textContent = UI.cpSide2;
    chromePreview.querySelector('.cp-main').style.background = s['--bg'];
    var card = chromePreview.querySelector('.cp-card');
    card.style.background = s['--surface'];
    card.style.borderColor = s['--border'];
    document.getElementById('cpCardTitle').style.color = s['--text-strong'];
    document.getElementById('cpCardTitle').textContent = UI.cpCardTitle;
    document.getElementById('cpCardBody').style.color = s['--text-muted'];
    document.getElementById('cpCardBody').textContent = UI.cpCardBody;
    var btn = document.getElementById('cpBtn');
    btn.style.color = s['--text'];
    btn.style.borderColor = s['--border-strong'];
    btn.style.background = s['--surface'];
    btn.textContent = UI.cpBtn;
    var link = document.getElementById('cpLink');
    link.style.color = s['--link'];
    link.textContent = UI.cpLink;
    var err = document.getElementById('cpErr');
    err.style.color = s['--danger'];
    err.textContent = UI.cpErr;
  }

  /** 生成方案。 */
  function generate() {
    var raw = readThemesFromDom();
    if (!raw.length) {
      setError(UI.badHex);
      return;
    }
    var packs = [];
    var ids = {};
    for (var i = 0; i < raw.length; i++) {
      var id = normalizeId(raw[i].id);
      var hex = normalizeHex(raw[i].hex);
      if (!id) {
        setError(UI.badId);
        return;
      }
      if (ids[id]) {
        setError(UI.badId);
        return;
      }
      ids[id] = true;
      if (!hex) {
        setError(UI.badHex);
        return;
      }
      packs.push(buildPack(hex, id));
    }
    setError('');
    lastPacks = packs;
    if (activeIdx >= packs.length) activeIdx = 0;

    var warn = '';
    for (var w = 0; w < packs.length; w++) {
      if (packs[w].checks.onActionOnAction < 4.5) {
        warn = UI.warnContrast;
        break;
      }
    }
    setWarn(warn);

    var active = packs[activeIdx];
    paintPreview(active);

    /* tabs */
    themeTabs.innerHTML = packs.map(function (p, idx) {
      return '<button type="button" class="' + (idx === activeIdx ? 'is-on' : '') + '" data-idx="' + idx + '">' + p.id + '</button>';
    }).join('');
    themeTabs.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeIdx = Number(btn.getAttribute('data-idx'));
        generate();
      });
    });

    /* checks */
    checkList.innerHTML =
      '<li><span>' + UI.checkText + '</span>' + aaBadge(active.checks.textOnSurface) + '</li>' +
      '<li><span>' + UI.checkMuted + '</span>' + aaBadge(active.checks.mutedOnSurface) + '</li>' +
      '<li><span>' + UI.checkOnAction + '</span>' + aaBadge(active.checks.onActionOnAction) + '</li>';

    /* primitives (active + shared neutrals) */
    var primRows = [];
    primRows.push(rowHtml('--brand', active.primitives.brand));
    primRows.push(rowHtml('--brand-hover', active.primitives['brand-hover']));
    primRows.push(rowHtml('--brand-soft', active.primitives['brand-soft']));
    primRows.push(rowHtml('--brand-tint-bg', active.primitives['brand-tint-bg']));
    Object.keys(NEUTRALS).forEach(function (k) {
      primRows.push(rowHtml('--' + k, NEUTRALS[k]));
    });
    primBody.innerHTML = primRows.join('');

    /* semantics */
    var roles = {
      '--bg': UI.roleBg,
      '--surface': UI.roleSurface,
      '--text': UI.roleText,
      '--text-strong': UI.roleText,
      '--text-muted': UI.roleMuted,
      '--border': UI.roleBorder,
      '--border-strong': UI.roleBorder,
      '--link': UI.roleLink,
      '--link-hover': UI.roleLink,
      '--action': UI.roleAction,
      '--action-hover': UI.roleAction,
      '--action-soft': UI.roleAction,
      '--focus-ring': UI.roleFocus,
      '--on-action': UI.roleOnAction,
      '--danger': UI.roleStatus,
      '--success': UI.roleStatus,
      '--warning': UI.roleStatus,
      '--info': UI.roleStatus
    };
    var semRows = [];
    Object.keys(active.semantics).forEach(function (k) {
      semRows.push(rowHtml(k, active.semantics[k], roles[k] || ''));
    });
    semBody.innerHTML = semRows.join('');

    /* CSS export */
    var css = [];
    css.push(':root {');
    Object.keys(NEUTRALS).forEach(function (k) {
      css.push('  --' + k + ': ' + NEUTRALS[k] + ';');
    });
    css.push('  --danger: ' + STATUS.danger + ';');
    css.push('  --success: ' + STATUS.success + ';');
    css.push('  --warning: ' + STATUS.warning + ';');
    css.push('  --info: ' + STATUS.info + ';');
    /* default theme = first */
    var d0 = packs[0];
    Object.keys(d0.semantics).forEach(function (k) {
      if (k === '--danger' || k === '--success' || k === '--warning' || k === '--info') return;
      css.push('  ' + k + ': ' + d0.semantics[k] + ';');
    });
    css.push('}');
    for (var t = 0; t < packs.length; t++) {
      var pk = packs[t];
      css.push('');
      css.push('html[data-theme="' + pk.id + '"] {');
      Object.keys(pk.semantics).forEach(function (k) {
        if (k.indexOf('--danger') === 0 || k === '--success' || k === '--warning' || k === '--info') return;
        css.push('  ' + k + ': ' + pk.semantics[k] + ';');
      });
      css.push('}');
    }
    lastCss = css.join('\\n');
    lastJson = JSON.stringify({ neutrals: NEUTRALS, status: STATUS, themes: packs }, null, 2);
  }

  /** 样例：teal #0F6E8C。 */
  function loadSample() {
    activeIdx = 0;
    renderThemeInputs([{ id: 'teal', hex: '#0F6E8C' }]);
    generate();
  }

  /** 清空为单主题黑。 */
  function clearAll() {
    activeIdx = 0;
    renderThemeInputs([{ id: 'brand', hex: '#000000' }]);
    generate();
  }

  /** 追加主题。 */
  function addTheme() {
    var cur = readThemesFromDom();
    if (cur.length >= MAX_THEMES) {
      setError(UI.maxThemes);
      return;
    }
    setError('');
    cur.push({ id: 'theme' + (cur.length + 1), hex: '#0F7A5A' });
    renderThemeInputs(cur);
    generate();
  }

  /**
   * 复制。
   * @param {string} text
   * @param {HTMLElement} btn
   */
  function copyText(text, btn) {
    if (!text) {
      setError(UI.empty);
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { flashCopied(btn); });
    } else {
      setError(UI.empty);
    }
  }

  document.getElementById('btnGenerate').addEventListener('click', generate);
  document.getElementById('btnSample').addEventListener('click', loadSample);
  document.getElementById('btnAddTheme').addEventListener('click', addTheme);
  document.getElementById('btnCopyCss').addEventListener('click', function () { copyText(lastCss, this); });
  document.getElementById('btnCopyJson').addEventListener('click', function () { copyText(lastJson, this); });
  document.getElementById('btnClear').addEventListener('click', clearAll);

  loadSample();
})();
  </script>`;

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
		contentHtml: `${contentHtml}${igHtml}${extraHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
