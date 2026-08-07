/**
 * 多元函数梯度计算器页：偏导数向量 ∇f、优化/ML 场景 IG、数学教育引用。
 * slug: how-to-calculate-gradient；主方向 A（见 work-tasks/how-to-calculate-gradient/02-tool-info.md）。
 * 注：本页按存量实现保持「多元微积分梯度」，非两点斜率计算器；FAQ 区分 ML 语境。
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
 * 渲染多元函数梯度计算器工具页 HTML。
 * 交互：对示例函数 f(x,y)=x²y+3y 在用户输入点求 ∇f。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateGradientPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-gradient';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_gradient_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_gradient_description');

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
		items: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'how-to-calculate-gradient', currentAnchor: '#gradient' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 公式预格式与卡片样式。 */
	const extraHeadHtml = `
  <style>
    .grad-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .grad-fn { background:#f8f9fa;padding:.75rem;border-radius:6px;font-family:ui-monospace,monospace;overflow:auto }
  </style>`;

	const contentHtml = `
    <div id="gradient" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_gradient_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card grad-card">
      <div class="card-body">
        <p class="mb-2 small text-muted">${escapeHtml(t(opts.lang, 'tool_gradient_fn_hint'))}</p>
        <pre class="grad-fn mb-3">f(x, y) = x²y + 3y
∂f/∂x = 2xy
∂f/∂y = x² + 3
∇f = (2xy, x² + 3)</pre>

        <form id="gradForm">
          <div class="mb-3">
            <label class="form-label" for="gradX">${escapeHtml(t(opts.lang, 'tool_gradient_x_label'))}</label>
            <input id="gradX" class="input-lg" type="number" step="any" required
              placeholder="${escapeHtml(t(opts.lang, 'tool_gradient_x_placeholder'))}" />
          </div>
          <div class="mb-3">
            <label class="form-label" for="gradY">${escapeHtml(t(opts.lang, 'tool_gradient_y_label'))}</label>
            <input id="gradY" class="input-lg" type="number" step="any" required
              placeholder="${escapeHtml(t(opts.lang, 'tool_gradient_y_placeholder'))}" />
          </div>
          <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_gradient_calculate'))}</button>
        </form>

        <div id="gradResult" class="result mt-3" style="display:none;">
          <div class="text-muted">${escapeHtml(t(opts.lang, 'tool_gradient_result_label'))}</div>
          <div id="gradValue" style="font-weight:700;font-size:1.3rem;font-family:ui-monospace,monospace"></div>
          <div id="gradNote" class="text-muted small mt-1"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_gradient', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_gradient_ref_wiki_label'),
				href: 'https://en.wikipedia.org/wiki/Gradient',
			},
			{
				label: t(opts.lang, 'tool_gradient_ref_khan_label'),
				href: 'https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/the-gradient',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('gradForm');
      var xEl = document.getElementById('gradX');
      var yEl = document.getElementById('gradY');
      var res = document.getElementById('gradResult');
      var valEl = document.getElementById('gradValue');
      var noteEl = document.getElementById('gradNote');

      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_gradient_invalid_input'))};
      var noteTpl = ${JSON.stringify(t(opts.lang, 'tool_gradient_result_note'))};

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var x = parseFloat(xEl.value);
        var y = parseFloat(yEl.value);
        if (!isFinite(x) || !isFinite(y)) {
          valEl.textContent = '—';
          noteEl.textContent = msgInvalid;
          res.style.display = 'block';
          return;
        }
        /** 示例函数 f=x²y+3y 的偏导：∂f/∂x=2xy，∂f/∂y=x²+3。 */
        var dfdx = 2 * x * y;
        var dfdy = x * x + 3;
        var rx = Math.round((dfdx + Number.EPSILON) * 1000) / 1000;
        var ry = Math.round((dfdy + Number.EPSILON) * 1000) / 1000;
        valEl.textContent = '∇f = (' + rx + ', ' + ry + ')';
        noteEl.textContent = noteTpl.replace('{x}', String(x)).replace('{y}', String(y));
        res.style.display = 'block';
      });
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-gradient');
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

export default renderHowToCalculateGradientPage;
