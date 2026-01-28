import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar } from './site/sidebar';
import { TOOL_PAGES } from '../site/tools';

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
  const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const renderHowToCalculateGradientPage = (opts: {
  lang: SiteLang;
  defaultLang: SiteLang;
  enabledLangs: SiteLang[];
}) => {
  const canonicalPath = withLangPrefix(opts.lang, '/tools/how-to-calculate-gradient', opts.defaultLang);
  const title = `${t(opts.lang, 'tool_gradient_title')} | ${t(opts.lang, 'brand')}`;
  const description = t(opts.lang, 'tool_gradient_description');
  const article = t(opts.lang, 'tool_gradient_article');

  const navItems = [
    { href: withLangPrefix(opts.lang, '/', opts.defaultLang), label: t(opts.lang, 'nav_home') },
    { href: withLangPrefix(opts.lang, '/#all-tools', opts.defaultLang), label: t(opts.lang, 'nav_tools') },
    { href: '/devlogs/', label: t(opts.lang, 'nav_devlogs') },
  ];

  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return `/${code}${safe}`.replace(/\/\/{2,}/g, '/');
  };

  const langAlternates: Record<string, string> = Object.fromEntries(
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/how-to-calculate-gradient')])
  );

  const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
    lang: code,
    href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/how-to-calculate-gradient', opts.defaultLang)}`,
  }));

  const headerHtml = renderHeader({
    lang: opts.lang,
    brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
    navItems,
    enabledLangs: supportedLangs,
    langAlternates,
  });

  const toolLinks = (TOOL_PAGES || []).map((p) => ({ href: withLangPrefix(opts.lang, p.path, opts.defaultLang), label: t(opts.lang, p.i18nKey) }));

  const sidebarHtml = renderSidebar({
    title: t(opts.lang, 'nav_tools'),
    items: [{ href: '#gradient', label: t(opts.lang, 'tool_gradient_title') }, ...toolLinks],
    id: 'toolNav',
  });

  const footerHtml = renderFooter({ lang: opts.lang });

  const extraHeadHtml = `
  <style>
    .tool-card { max-width: 720px; margin: 0 auto 2rem; }
    .tool-step { margin-bottom: .75rem }
    pre.math { background:#f8f9fa;padding:.75rem;border-radius:6px;overflow:auto }
  </style>`;

  const contentHtml = `
    <div class="tool-intro">
      <h1>${escapeHtml(t(opts.lang, 'tool_gradient_title'))}</h1>
      <p class="text-muted">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div style="padding:1.25rem">
        <h3 id="gradient">${escapeHtml(t(opts.lang, 'tool_gradient_title'))}</h3>
        <p>${escapeHtml(article)}</p>

        <h4>Steps</h4>
        <ol>
          <li class="tool-step">Take the partial derivative of the function with respect to each variable: $\partial f/\partial x_i$.</li>
          <li class="tool-step">Assemble these partial derivatives into the gradient vector: $\nabla f = (\partial f/\partial x_1, \partial f/\partial x_2, ...)$.</li>
          <li class="tool-step">Evaluate the gradient at the desired point by substituting coordinates.</li>
        </ol>

        <h4>Example</h4>
        <pre class="math">f(x,y) = x^2 y + 3y
∂f/∂x = 2xy
∂f/∂y = x^2 + 3
∇f = (2xy, x^2 + 3)
At (1,2): ∇f = (4,4)</pre>

        <p>Use this approach for scalar fields in physics, optimization, and directional derivative calculations.</p>
      </div>
    </div>`;

  const extraBodyHtml = `
  <script>
    // No interactive math parsing required here; static example provided.
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
    contentHtml,
    footerHtml,
    extraHeadHtml,
    extraBodyHtml,
    includeSidebarToggleScript: true,
    sidebarAutoCloseSelector: '#toolNav a',
  });
};

export default renderHowToCalculateGradientPage;
