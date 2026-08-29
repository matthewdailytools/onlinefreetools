/**
 * WCAG 对比度检测工具页：前景/背景 sRGB → 相对亮度与对比度比率，AA/AAA 判定。
 * slug: wcag-contrast-checker
 * 见 work-tasks/wcag-contrast-checker/02-tool-info.md。
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
 * 渲染 WCAG 对比度检测页面。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（切换器用全量 supportedLangs）
 */
export const renderWcagContrastCheckerPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/wcag-contrast-checker';
	/** 当前语言下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title（工具名 | 品牌）。 */
	const title = `${t(opts.lang, 'tool_wcag_contrast_checker_title')} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
	const description = t(opts.lang, 'tool_wcag_contrast_checker_description');

	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的各语路径表。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 交替链接。 */
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
			currentSlug: 'wcag-contrast-checker',
			currentAnchor: '#contrast',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：预览块、通过/失败徽章、建议区。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .color-row { display: flex; flex-wrap: wrap; gap: .75rem; align-items: end; }
    .color-field { flex: 1 1 220px; min-width: 200px; }
    .color-field .hex-wrap { display: flex; gap: .5rem; align-items: center; }
    .color-field input[type="color"] { width: 48px; height: 38px; padding: 0; border: 1px solid #ced4da; border-radius: .375rem; cursor: pointer; }
    #previewBox {
      min-height: 120px; border-radius: .5rem; border: 1px solid #dee2e6; padding: 1.25rem 1rem;
      display: flex; flex-direction: column; justify-content: center; gap: .35rem;
    }
    #previewBox .preview-lg { font-size: 1.5rem; font-weight: 600; line-height: 1.3; }
    #previewBox .preview-sm { font-size: 1rem; line-height: 1.45; }
    #ratioValue { font-size: 1.75rem; font-weight: 700; font-variant-numeric: tabular-nums; }
    .badge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: .5rem; }
    .pass-badge, .fail-badge {
      border-radius: .375rem; padding: .45rem .6rem; font-size: .875rem; border: 1px solid transparent;
    }
    .pass-badge { background: #d1e7dd; color: #0f5132; border-color: #a3cfbb; }
    .fail-badge { background: #f8d7da; color: #842029; border-color: #f1aeb5; }
    #suggestPanel {
      background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem;
      white-space: pre-wrap; word-break: break-word; min-height: 72px;
    }
  </style>`;

	/** 首屏交互区 HTML。 */
	const contentHtml = `
    <div id="contrast" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="btnCheck" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_check'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_sample'))}</button>
      <button type="button" id="btnSwap" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_swap'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_copy'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_clear'))}</button>
    </div>

    <p id="contrastError" class="small text-danger mb-2" style="display:none;" role="alert"></p>

    <div class="color-row mb-3">
      <div class="color-field">
        <label for="fgHex" class="form-label">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_fg_label'))}</label>
        <div class="hex-wrap">
          <input type="color" id="fgPicker" value="#767676" aria-label="${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_fg_label'))}" />
          <input type="text" id="fgHex" class="form-control" value="#767676" spellcheck="false" autocomplete="off" placeholder="#767676" />
        </div>
      </div>
      <div class="color-field">
        <label for="bgHex" class="form-label">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_bg_label'))}</label>
        <div class="hex-wrap">
          <input type="color" id="bgPicker" value="#ffffff" aria-label="${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_bg_label'))}" />
          <input type="text" id="bgHex" class="form-control" value="#ffffff" spellcheck="false" autocomplete="off" placeholder="#ffffff" />
        </div>
      </div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-12 col-lg-5">
        <label class="form-label" for="previewBox">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_preview_label'))}</label>
        <div id="previewBox" role="img" aria-label="${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_preview_label'))}">
          <div class="preview-lg">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_preview_large'))}</div>
          <div class="preview-sm">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_preview_normal'))}</div>
        </div>
      </div>
      <div class="col-12 col-lg-7">
        <div class="mb-2">
          <span class="text-muted small d-block">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_ratio_label'))}</span>
          <div id="ratioValue" aria-live="polite">—</div>
        </div>
        <div id="badgeGrid" class="badge-grid mb-3" aria-live="polite"></div>
        <label class="form-label" for="suggestPanel">${escapeHtml(t(opts.lang, 'tool_wcag_contrast_checker_suggest_label'))}</label>
        <pre id="suggestPanel" class="mb-0" tabindex="0"></pre>
      </div>
    </div>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_wcag_contrast_checker',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	/** 权威引用区。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'WCAG 2.2 Understanding — Contrast (Minimum)',
				href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum/',
			},
			{ label: 'WCAG 2.2 Recommendation', href: 'https://www.w3.org/TR/WCAG22/' },
			{
				label: 'WCAG 2.2 — relative luminance',
				href: 'https://www.w3.org/TR/WCAG22/#dfn-relative-luminance',
			},
		],
	});

	/** catalog 条目（Related / FAQ）。 */
	const tool = getToolBySlug('wcag-contrast-checker');
	/** FAQ / Related / Share。 */
	const extraHtml = tool
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool })
		: '';

	/** JSON-LD（注入 head）。 */
	const toolJsonLd = tool
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool,
				name: t(opts.lang, 'tool_wcag_contrast_checker_title'),
				description,
				canonicalPath,
			})
		: '';

	/**
	 * 客户端脚本：WCAG 相对亮度、对比度、AA/AAA、建议配对；进页自动 loadSample。
	 * 文案经 JSON 注入，避免 XSS。
	 */
	const ui = {
		pass: t(opts.lang, 'tool_wcag_contrast_checker_pass'),
		fail: t(opts.lang, 'tool_wcag_contrast_checker_fail'),
		aaNormal: t(opts.lang, 'tool_wcag_contrast_checker_aa_normal'),
		aaLarge: t(opts.lang, 'tool_wcag_contrast_checker_aa_large'),
		aaaNormal: t(opts.lang, 'tool_wcag_contrast_checker_aaa_normal'),
		aaaLarge: t(opts.lang, 'tool_wcag_contrast_checker_aaa_large'),
		empty: t(opts.lang, 'tool_wcag_contrast_checker_empty'),
		badHex: t(opts.lang, 'tool_wcag_contrast_checker_bad_hex'),
		copied: t(opts.lang, 'tool_wcag_contrast_checker_copy_done'),
		suggestNone: t(opts.lang, 'tool_wcag_contrast_checker_suggest_none'),
		suggestFg: t(opts.lang, 'tool_wcag_contrast_checker_suggest_fg'),
		suggestBg: t(opts.lang, 'tool_wcag_contrast_checker_suggest_bg'),
	};

	/** 内联交互脚本（IIFE），挂到 body 末尾。 */
	const extraBodyHtml = `
  <script>
(function () {
  /** 注入的 UI 文案。 */
  var UI = ${JSON.stringify(ui)};

  /** 前景色取色器。 */
  var fgPicker = document.getElementById('fgPicker');
  /** 背景色取色器。 */
  var bgPicker = document.getElementById('bgPicker');
  /** 前景 HEX 输入。 */
  var fgHex = document.getElementById('fgHex');
  /** 背景 HEX 输入。 */
  var bgHex = document.getElementById('bgHex');
  /** 预览容器。 */
  var previewBox = document.getElementById('previewBox');
  /** 比率显示。 */
  var ratioValue = document.getElementById('ratioValue');
  /** 徽章网格。 */
  var badgeGrid = document.getElementById('badgeGrid');
  /** 建议面板。 */
  var suggestPanel = document.getElementById('suggestPanel');
  /** 错误提示。 */
  var contrastError = document.getElementById('contrastError');
  /** 最近一次成功摘要（供复制）。 */
  var lastSummary = '';

  /**
   * 规范化 HEX（支持 #RGB / #RRGGBB）。
   * @param {string} raw 用户输入
   * @returns {string|null} 大写 #RRGGBB 或 null
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
   * HEX → [R,G,B] 0–255。
   * @param {string} hex 已规范化 HEX
   * @returns {number[]}
   */
  function hexToRgb(hex) {
    var h = hex.slice(1);
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  /**
   * RGB 通道 → #RRGGBB。
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
   * sRGB 8-bit 通道 → 线性光（WCAG）。
   * @param {number} c8 0–255
   * @returns {number}
   */
  function srgbChannelToLinear(c8) {
    var c = c8 / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  /**
   * 相对亮度 L（WCAG）。
   * @param {number[]} rgb [R,G,B]
   * @returns {number}
   */
  function relativeLuminance(rgb) {
    var R = srgbChannelToLinear(rgb[0]);
    var G = srgbChannelToLinear(rgb[1]);
    var B = srgbChannelToLinear(rgb[2]);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }

  /**
   * 对比度比率 (L1+0.05)/(L2+0.05)，L1≥L2。
   * @param {number} l1
   * @param {number} l2
   * @returns {number}
   */
  function contrastRatio(l1, l2) {
    var hi = Math.max(l1, l2);
    var lo = Math.min(l1, l2);
    return (hi + 0.05) / (lo + 0.05);
  }

  /**
   * 显示或隐藏错误。
   * @param {string} msg 空则隐藏
   */
  function setError(msg) {
    if (!contrastError) return;
    if (!msg) {
      contrastError.style.display = 'none';
      contrastError.textContent = '';
      return;
    }
    contrastError.style.display = 'block';
    contrastError.textContent = msg;
  }

  /**
   * 同步 picker ↔ hex 文本（单向由源写入目标）。
   * @param {HTMLInputElement} picker
   * @param {HTMLInputElement} hexInput
   * @param {string} hex
   */
  function applyColorPair(picker, hexInput, hex) {
    picker.value = hex.toLowerCase();
    hexInput.value = hex;
  }

  /**
   * 混合两色（线性 RGB 近似，用于建议微调）。
   * @param {number[]} a
   * @param {number[]} b
   * @param {number} t 0=a … 1=b
   * @returns {number[]}
   */
  function mixRgb(a, b, t) {
    return [
      a[0] + (b[0] - a[0]) * t,
      a[1] + (b[1] - a[1]) * t,
      a[2] + (b[2] - a[2]) * t,
    ];
  }

  /**
   * 在固定背景上寻找使对比度 ≥ target 的前景（向黑/白混合）。
   * @param {number[]} fgRgb
   * @param {number[]} bgRgb
   * @param {number} target
   * @returns {string|null} HEX 或 null
   */
  function suggestFgForBg(fgRgb, bgRgb, target) {
    var bgL = relativeLuminance(bgRgb);
    var toward = bgL > 0.5 ? [0, 0, 0] : [255, 255, 255];
    var best = null;
    var bestRatio = 0;
    for (var i = 0; i <= 40; i++) {
      var t = i / 40;
      var cand = mixRgb(fgRgb, toward, t);
      var ratio = contrastRatio(relativeLuminance(cand), bgL);
      if (ratio >= target && (best === null || ratio < bestRatio + 0.01)) {
        best = rgbToHex(cand[0], cand[1], cand[2]);
        bestRatio = ratio;
        break;
      }
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = rgbToHex(cand[0], cand[1], cand[2]);
      }
    }
    return bestRatio >= target ? best : null;
  }

  /**
   * 在固定前景上寻找使对比度 ≥ target 的背景。
   * @param {number[]} fgRgb
   * @param {number[]} bgRgb
   * @param {number} target
   * @returns {string|null}
   */
  function suggestBgForFg(fgRgb, bgRgb, target) {
    var fgL = relativeLuminance(fgRgb);
    var toward = fgL > 0.5 ? [0, 0, 0] : [255, 255, 255];
    for (var i = 0; i <= 40; i++) {
      var t = i / 40;
      var cand = mixRgb(bgRgb, toward, t);
      var ratio = contrastRatio(fgL, relativeLuminance(cand));
      if (ratio >= target) return rgbToHex(cand[0], cand[1], cand[2]);
    }
    return null;
  }

  /**
   * 渲染 Pass/Fail 徽章。
   * @param {number} ratio
   */
  function renderBadges(ratio) {
    var items = [
      { label: UI.aaNormal, ok: ratio >= 4.5 },
      { label: UI.aaLarge, ok: ratio >= 3 },
      { label: UI.aaaNormal, ok: ratio >= 7 },
      { label: UI.aaaLarge, ok: ratio >= 4.5 },
    ];
    badgeGrid.innerHTML = items
      .map(function (it) {
        var cls = it.ok ? 'pass-badge' : 'fail-badge';
        var mark = it.ok ? UI.pass : UI.fail;
        return '<div class="' + cls + '"><strong>' + it.label + '</strong><br>' + mark + '</div>';
      })
      .join('');
  }

  /** 执行对比度计算并更新 UI。 */
  function check() {
    var fg = normalizeHex(fgHex.value);
    var bg = normalizeHex(bgHex.value);
    if (!fg || !bg) {
      setError(UI.badHex);
      ratioValue.textContent = '—';
      badgeGrid.innerHTML = '';
      suggestPanel.textContent = '';
      lastSummary = '';
      return;
    }
    setError('');
    applyColorPair(fgPicker, fgHex, fg);
    applyColorPair(bgPicker, bgHex, bg);

    var fgRgb = hexToRgb(fg);
    var bgRgb = hexToRgb(bg);
    var ratio = contrastRatio(relativeLuminance(fgRgb), relativeLuminance(bgRgb));
    var ratioText = ratio.toFixed(2) + ':1';
    ratioValue.textContent = ratioText;

    previewBox.style.color = fg;
    previewBox.style.backgroundColor = bg;
    renderBadges(ratio);

    var lines = [];
    if (ratio >= 4.5) {
      lines.push(UI.suggestNone);
    } else {
      var sugFg = suggestFgForBg(fgRgb, bgRgb, 4.5);
      var sugBg = suggestBgForFg(fgRgb, bgRgb, 4.5);
      if (sugFg) lines.push(UI.suggestFg.replace('{hex}', sugFg));
      if (sugBg) lines.push(UI.suggestBg.replace('{hex}', sugBg));
      if (!lines.length) lines.push(UI.suggestNone);
    }
    suggestPanel.textContent = lines.join('\\n');

    lastSummary =
      'FG ' +
      fg +
      ' / BG ' +
      bg +
      ' → ' +
      ratioText +
      '\\nAA normal: ' +
      (ratio >= 4.5 ? 'pass' : 'fail') +
      '\\nAA large: ' +
      (ratio >= 3 ? 'pass' : 'fail') +
      '\\nAAA normal: ' +
      (ratio >= 7 ? 'pass' : 'fail') +
      '\\nAAA large: ' +
      (ratio >= 4.5 ? 'pass' : 'fail');
  }

  /** 加载默认教育样例（#767676 on #ffffff ≈ 4.54:1）。 */
  function loadSample() {
    applyColorPair(fgPicker, fgHex, '#767676');
    applyColorPair(bgPicker, bgHex, '#FFFFFF');
    check();
  }

  /** 交换前景/背景。 */
  function swap() {
    var a = fgHex.value;
    var b = bgHex.value;
    fgHex.value = b;
    bgHex.value = a;
    check();
  }

  /** 复制摘要。 */
  function copySummary() {
    if (!lastSummary) {
      setError(UI.empty);
      return;
    }
    var done = function () {
      var btn = document.getElementById('btnCopy');
      if (!btn) return;
      var old = btn.textContent;
      btn.textContent = UI.copied;
      setTimeout(function () {
        btn.textContent = old;
      }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lastSummary).then(done).catch(function () {
        setError(UI.empty);
      });
    } else {
      setError(UI.empty);
    }
  }

  /** 清空为中性灰/白并重算。 */
  function clearAll() {
    applyColorPair(fgPicker, fgHex, '#000000');
    applyColorPair(bgPicker, bgHex, '#FFFFFF');
    check();
  }

  /** picker 变更 → hex → 重算。 */
  fgPicker.addEventListener('input', function () {
    fgHex.value = fgPicker.value.toUpperCase();
    check();
  });
  bgPicker.addEventListener('input', function () {
    bgHex.value = bgPicker.value.toUpperCase();
    check();
  });
  fgHex.addEventListener('change', check);
  bgHex.addEventListener('change', check);
  fgHex.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') check();
  });
  bgHex.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') check();
  });

  document.getElementById('btnCheck').addEventListener('click', check);
  document.getElementById('btnSample').addEventListener('click', loadSample);
  document.getElementById('btnSwap').addEventListener('click', swap);
  document.getElementById('btnCopy').addEventListener('click', copySummary);
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
