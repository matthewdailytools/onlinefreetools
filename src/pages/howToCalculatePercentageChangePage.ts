/**
 * 百分比变化计算器页：旧值→新值涨跌幅、商业/数据场景 IG、百分点对照 FAQ。
 * slug: how-to-calculate-percentage-change；主方向 A（见 work-tasks/how-to-calculate-percentage-change/02-tool-info.md）。
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
	buildToolJsonLd,
	renderToolIgSections,
	renderToolReferencesSection,
} from './site/toolContent';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染百分比变化计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculatePercentageChangePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-percentage-change';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_percentage_change_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_percentage_change_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'how-to-calculate-percentage-change',
			currentAnchor: '#percentage-change',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 计算器卡片宽度样式。 */
	const extraHeadHtml = `
  <style>
    .pct-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
  </style>`;

	const contentHtml = `
    <div id="percentage-change" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_percentage_change_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card pct-card">
      <div class="card-body">
        <form id="pctForm">
          <div class="mb-3">
            <label class="form-label" for="origVal">${escapeHtml(t(opts.lang, 'tool_percentage_change_original_label'))}</label>
            <input id="origVal" class="input-lg" type="number" step="any" required />
          </div>
          <div class="mb-3">
            <label class="form-label" for="newVal">${escapeHtml(t(opts.lang, 'tool_percentage_change_new_label'))}</label>
            <input id="newVal" class="input-lg" type="number" step="any" required />
          </div>
          <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_percentage_change_calculate'))}</button>
        </form>

        <div id="pctResult" class="result mt-3" style="display:none;">
          <div class="text-muted">${escapeHtml(t(opts.lang, 'tool_percentage_change_result_label'))}</div>
          <div id="pctValue" style="font-weight:700;font-size:1.4rem"></div>
          <div id="pctNote" class="text-muted small mt-1"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_percentage_change', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_percentage_change_ref_wiki_label'),
				href: 'https://en.wikipedia.org/wiki/Relative_change',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('pctForm');
      var orig = document.getElementById('origVal');
      var neu = document.getElementById('newVal');
      var res = document.getElementById('pctResult');
      var valEl = document.getElementById('pctValue');
      var noteEl = document.getElementById('pctNote');

      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_percentage_change_result_invalid'))};
      var labelInc = ${JSON.stringify(t(opts.lang, 'tool_percentage_change_increase'))};
      var labelDec = ${JSON.stringify(t(opts.lang, 'tool_percentage_change_decrease'))};
      var labelFlat = ${JSON.stringify(t(opts.lang, 'tool_percentage_change_no_change'))};
      var absNote = ${JSON.stringify(t(opts.lang, 'tool_percentage_change_abs_note'))};

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var a = parseFloat(orig.value);
        var b = parseFloat(neu.value);
        if (!isFinite(a) || !isFinite(b) || a === 0) {
          valEl.textContent = '—';
          noteEl.textContent = msgInvalid;
          res.style.display = 'block';
          return;
        }
        var delta = b - a;
        var pct = (delta / a) * 100;
        var rounded = Math.round(pct * 100) / 100;
        var sign = pct > 0 ? labelInc : (pct < 0 ? labelDec : labelFlat);
        var display = (rounded >= 0 ? rounded : Math.abs(rounded)) + '% (' + sign + ')';
        valEl.textContent = display;
        noteEl.textContent = absNote.replace('{delta}', String(Math.round(delta * 100) / 100));
        res.style.display = 'block';
      });
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-percentage-change');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as keyof typeof import('../site/i18n/en').default),
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
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
	});
};
