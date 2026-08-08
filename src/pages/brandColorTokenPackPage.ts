/**
 * 品牌色色阶生成工具页：1 主色 → HEX/RGB/HSL/OKLCH + 50–950 色阶 + 黑白文字对比建议。
 * slug: brand-color-token-pack
 * 见 work-tasks/brand-color-token-pack/02-tool-info.md。
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
 * 渲染品牌色色阶生成页面。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBrandColorTokenPackPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径。 */
	const toolPath = '/tools/brand-color-token-pack';
	/** 当前语言 canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title。 */
	const title = `${t(opts.lang, 'tool_brand_color_token_pack_title')} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
	const description = t(opts.lang, 'tool_brand_color_token_pack_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'brand-color-token-pack',
			currentAnchor: '#tokens',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：色阶卡片、空间输出、轻量 UI 预览。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .base-wrap { display: flex; gap: .5rem; align-items: center; max-width: 420px; }
    .base-wrap input[type="color"] { width: 48px; height: 38px; padding: 0; border: 1px solid #ced4da; border-radius: .375rem; cursor: pointer; }
    #spacesOut {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem;
      background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; white-space: pre-wrap;
      min-height: 96px;
    }
    .scale-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: .5rem; }
    .swatch {
      border: 1px solid #dee2e6; border-radius: .5rem; overflow: hidden; background: #fff;
      font-size: .75rem;
    }
    .swatch-top { height: 56px; }
    .swatch-body { padding: .4rem .5rem; line-height: 1.35; }
    .swatch-body code { font-size: .7rem; word-break: break-all; }
    #uiPreview {
      border-radius: .5rem; border: 1px solid #dee2e6; padding: 1rem 1.1rem; min-height: 88px;
    }
    #uiPreview .ui-btn {
      display: inline-block; margin-top: .5rem; padding: .35rem .75rem; border-radius: .35rem;
      border: none; font-size: .875rem; font-weight: 600;
    }
  </style>`;

	/** 首屏交互。 */
	const contentHtml = `
    <div id="tokens" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="btnGenerate" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_generate'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_sample'))}</button>
      <button type="button" id="btnCopyCss" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_copy_css'))}</button>
      <button type="button" id="btnCopyJson" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_copy_json'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_clear'))}</button>
    </div>

    <p id="tokenError" class="small text-danger mb-2" style="display:none;" role="alert"></p>

    <div class="mb-3">
      <label for="baseHex" class="form-label">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_base_label'))}</label>
      <div class="base-wrap">
        <input type="color" id="basePicker" value="#2563eb" aria-label="${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_base_label'))}" />
        <input type="text" id="baseHex" class="form-control" value="#2563eb" spellcheck="false" autocomplete="off" placeholder="#2563eb" />
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label" for="spacesOut">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_spaces_label'))}</label>
      <pre id="spacesOut" tabindex="0"></pre>
    </div>

    <div class="mb-3">
      <label class="form-label" for="uiPreview">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_preview_label'))}</label>
      <div id="uiPreview">
        <div id="uiPreviewTitle" style="font-weight:600;"></div>
        <div id="uiPreviewBody" class="small"></div>
        <button type="button" class="ui-btn" id="uiPreviewBtn" tabindex="-1"></button>
      </div>
    </div>

    <div class="mb-4">
      <label class="form-label">${escapeHtml(t(opts.lang, 'tool_brand_color_token_pack_scale_label'))}</label>
      <div id="scaleGrid" class="scale-grid" aria-live="polite"></div>
    </div>`;

	/** IG 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_brand_color_token_pack',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	/** 引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'CSS Color Module Level 4', href: 'https://www.w3.org/TR/css-color-4/' },
			{
				label: 'WCAG 2.2 Understanding — Contrast (Minimum)',
				href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum/',
			},
			{ label: 'WCAG 2.2 Recommendation', href: 'https://www.w3.org/TR/WCAG22/' },
		],
	});

	/** catalog。 */
	const tool = getToolBySlug('brand-color-token-pack');
	/** FAQ / Related。 */
	const extraHtml = tool
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool })
		: '';

	/** JSON-LD（注入 head）。 */
	const toolJsonLd = tool
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool,
				name: t(opts.lang, 'tool_brand_color_token_pack_title'),
				description,
				canonicalPath,
			})
		: '';

	/** 客户端文案。 */
	const ui = {
		badHex: t(opts.lang, 'tool_brand_color_token_pack_bad_hex'),
		empty: t(opts.lang, 'tool_brand_color_token_pack_empty'),
		copied: t(opts.lang, 'tool_brand_color_token_pack_copy_done'),
		textOn: t(opts.lang, 'tool_brand_color_token_pack_text_on'),
		previewTitle: t(opts.lang, 'tool_brand_color_token_pack_ui_title'),
		previewBody: t(opts.lang, 'tool_brand_color_token_pack_ui_body'),
		previewBtn: t(opts.lang, 'tool_brand_color_token_pack_ui_btn'),
		contrastCol: t(opts.lang, 'tool_brand_color_token_pack_contrast_col'),
	};

	/** 内联脚本：色彩空间、色阶、对比、导出（挂 body 末尾）。 */
	const extraBodyHtml = `
  <script>
(function () {
  /** UI 文案。 */
  var UI = ${JSON.stringify(ui)};
  /** 色阶档位（500 ≈ 主色）。 */
  var STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  /** 主色取色器。 */
  var basePicker = document.getElementById('basePicker');
  /** 主色 HEX。 */
  var baseHex = document.getElementById('baseHex');
  /** 色彩空间输出。 */
  var spacesOut = document.getElementById('spacesOut');
  /** 色阶网格。 */
  var scaleGrid = document.getElementById('scaleGrid');
  /** 错误。 */
  var tokenError = document.getElementById('tokenError');
  /** UI 预览块。 */
  var uiPreview = document.getElementById('uiPreview');
  /** 预览标题。 */
  var uiPreviewTitle = document.getElementById('uiPreviewTitle');
  /** 预览正文。 */
  var uiPreviewBody = document.getElementById('uiPreviewBody');
  /** 预览按钮。 */
  var uiPreviewBtn = document.getElementById('uiPreviewBtn');

  /** 最近一次 CSS 变量文本。 */
  var lastCss = '';
  /** 最近一次 JSON 文本。 */
  var lastJson = '';

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
   * RGB → HSL 字符串。
   * @param {number[]} rgb
   * @returns {string}
   */
  function rgbToHslString(rgb) {
    var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        default: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return 'hsl(' + Math.round(h * 360) + ' ' + Math.round(s * 100) + '% ' + Math.round(l * 100) + '%)';
  }

  /**
   * sRGB 通道 → 线性。
   * @param {number} c8
   * @returns {number}
   */
  function srgbToLinear(c8) {
    var c = c8 / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  /**
   * 线性 RGB → OKLab（Björn Ottosson）。
   * @param {number} lr
   * @param {number} lg
   * @param {number} lb
   * @returns {{L:number,a:number,b:number}}
   */
  function linearToOklab(lr, lg, lb) {
    var l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
    var m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
    var s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;
    var l_ = Math.cbrt(l);
    var m_ = Math.cbrt(m);
    var s_ = Math.cbrt(s);
    return {
      L: 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
      a: 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
      b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    };
  }

  /**
   * RGB → OKLCH 字符串。
   * @param {number[]} rgb
   * @returns {string}
   */
  function rgbToOklchString(rgb) {
    var lab = linearToOklab(srgbToLinear(rgb[0]), srgbToLinear(rgb[1]), srgbToLinear(rgb[2]));
    var C = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    var H = (Math.atan2(lab.b, lab.a) * 180) / Math.PI;
    if (H < 0) H += 360;
    return 'oklch(' + lab.L.toFixed(3) + ' ' + C.toFixed(3) + ' ' + H.toFixed(1) + ')';
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
   * 与白/黑混合生成色阶（500=基色；&lt;500 向白，&gt;500 向黑）。
   * @param {number[]} base
   * @param {number} step
   * @returns {number[]}
   */
  function scaleRgb(base, step) {
    if (step === 500) return base.slice();
    if (step < 500) {
      var tw = (500 - step) / 450;
      return [
        base[0] + (255 - base[0]) * tw,
        base[1] + (255 - base[1]) * tw,
        base[2] + (255 - base[2]) * tw,
      ];
    }
    var tb = (step - 500) / 450;
    return [base[0] * (1 - tb), base[1] * (1 - tb), base[2] * (1 - tb)];
  }

  /**
   * 推荐文字色：黑或白中对比更高者。
   * @param {number[]} bg
   * @returns {{hex:string,ratio:number}}
   */
  function bestTextOn(bg) {
    var black = [0, 0, 0];
    var white = [255, 255, 255];
    var rb = contrastRatio(black, bg);
    var rw = contrastRatio(white, bg);
    if (rw >= rb) return { hex: '#FFFFFF', ratio: rw };
    return { hex: '#000000', ratio: rb };
  }

  /**
   * 显示错误。
   * @param {string} msg
   */
  function setError(msg) {
    if (!msg) {
      tokenError.style.display = 'none';
      tokenError.textContent = '';
      return;
    }
    tokenError.style.display = 'block';
    tokenError.textContent = msg;
  }

  /**
   * 短暂按钮反馈。
   * @param {HTMLElement} btn
   */
  function flashCopied(btn) {
    var old = btn.textContent;
    btn.textContent = UI.copied;
    setTimeout(function () {
      btn.textContent = old;
    }, 1200);
  }

  /** 生成 token 包并刷新 UI。 */
  function generate() {
    var hex = normalizeHex(baseHex.value);
    if (!hex) {
      setError(UI.badHex);
      spacesOut.textContent = '';
      scaleGrid.innerHTML = '';
      lastCss = '';
      lastJson = '';
      return;
    }
    setError('');
    basePicker.value = hex.toLowerCase();
    baseHex.value = hex;

    var base = hexToRgb(hex);
    var rgbStr = 'rgb(' + base[0] + ', ' + base[1] + ', ' + base[2] + ')';
    var hslStr = rgbToHslString(base);
    var oklchStr = rgbToOklchString(base);
    spacesOut.textContent =
      'HEX   ' + hex + '\\n' +
      'RGB   ' + rgbStr + '\\n' +
      'HSL   ' + hslStr + '\\n' +
      'OKLCH ' + oklchStr;

    var text = bestTextOn(base);
    uiPreview.style.background = hex;
    uiPreview.style.color = text.hex;
    uiPreviewTitle.textContent = UI.previewTitle;
    uiPreviewBody.textContent = UI.previewBody;
    uiPreviewBtn.textContent = UI.previewBtn;
    uiPreviewBtn.style.background = text.hex;
    uiPreviewBtn.style.color = hex;

    var cssLines = [':root {'];
    var jsonObj = { base: hex, spaces: { hex: hex, rgb: rgbStr, hsl: hslStr, oklch: oklchStr }, scale: {} };
    var cards = [];

    for (var i = 0; i < STEPS.length; i++) {
      var step = STEPS[i];
      var rgb = scaleRgb(base, step);
      var stepHex = rgbToHex(rgb[0], rgb[1], rgb[2]);
      var pair = bestTextOn(rgb);
      var aa = pair.ratio >= 4.5 ? 'AA' : pair.ratio >= 3 ? 'AA-large' : 'fail';
      cssLines.push('  --color-' + step + ': ' + stepHex + ';');
      jsonObj.scale[step] = { hex: stepHex, text: pair.hex, contrast: Number(pair.ratio.toFixed(2)) };
      cards.push(
        '<div class="swatch">' +
          '<div class="swatch-top" style="background:' + stepHex + '"></div>' +
          '<div class="swatch-body">' +
          '<div><strong>' + step + '</strong></div>' +
          '<code>' + stepHex + '</code><br>' +
          UI.contrastCol + ': ' + pair.hex + ' (' + pair.ratio.toFixed(2) + ':1, ' + aa + ')' +
          '</div></div>'
      );
    }
    cssLines.push('}');
    lastCss = cssLines.join('\\n');
    lastJson = JSON.stringify(jsonObj, null, 2);
    scaleGrid.innerHTML = cards.join('');
  }

  /** 默认样例 #2563eb。 */
  function loadSample() {
    basePicker.value = '#2563eb';
    baseHex.value = '#2563EB';
    generate();
  }

  /** 清空为黑并生成。 */
  function clearAll() {
    basePicker.value = '#000000';
    baseHex.value = '#000000';
    generate();
  }

  /**
   * 复制文本。
   * @param {string} text
   * @param {HTMLElement} btn
   */
  function copyText(text, btn) {
    if (!text) {
      setError(UI.empty);
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        flashCopied(btn);
      });
    } else {
      setError(UI.empty);
    }
  }

  basePicker.addEventListener('input', function () {
    baseHex.value = basePicker.value.toUpperCase();
    generate();
  });
  baseHex.addEventListener('change', generate);
  baseHex.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') generate();
  });
  document.getElementById('btnGenerate').addEventListener('click', generate);
  document.getElementById('btnSample').addEventListener('click', loadSample);
  document.getElementById('btnCopyCss').addEventListener('click', function () {
    copyText(lastCss, this);
  });
  document.getElementById('btnCopyJson').addEventListener('click', function () {
    copyText(lastJson, this);
  });
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
