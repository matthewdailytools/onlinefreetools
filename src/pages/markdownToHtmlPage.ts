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

export const renderMarkdownToHtmlPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const canonicalPath = withLangPrefix(opts.lang, '/tools/markdown-to-html', opts.defaultLang);
	const title = `${t(opts.lang, 'tool_markdown_title')} | ${t(opts.lang, 'brand')}`;
  const description = t(opts.lang, 'tool_markdown_description');
  const article = t(opts.lang, 'tool_markdown_article');

	const navItems = [
		{ href: withLangPrefix(opts.lang, '/', opts.defaultLang), label: t(opts.lang, 'nav_home') },
		{ href: withLangPrefix(opts.lang, '/#all-tools', opts.defaultLang), label: t(opts.lang, 'nav_tools') },
		{ href: '/devlogs/', label: t(opts.lang, 'nav_devlogs') },
	];

  // Build language switcher links for all supported languages so users can
  // switch between the full set (10 languages) regardless of `SITE_LANGS`.
  // Use explicit lang prefix for language-switch links so each language
  // points to an explicit localized route (including the default language).
  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return `/${code}${safe}`.replace(/\/{2,}/g, '/');
  };

  const langAlternates: Record<string, string> = Object.fromEntries(
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/markdown-to-html')])
  );

	const alternates: HreflangAlternate[] = (opts.enabledLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/markdown-to-html', opts.defaultLang)}`,
	}));

  // Pass the full supportedLangs to the header so the language switcher
  // presents all available translations (10 langs).
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
      items: [{ href: '#converter', label: t(opts.lang, 'tool_markdown_title') }, ...toolLinks],
      id: 'toolNav',
    });

	const footerHtml = renderFooter({ lang: opts.lang });

  const extraHeadHtml = `
  <style>
    textarea { min-height: 320px; box-sizing: border-box; }
    #preview { min-height: 320px; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; box-sizing: border-box; overflow: auto; }
    .tools-bar { gap: .5rem; }
    /* Make input and preview match heights using flex so they don't overlap the following article */
    .row.g-3 { align-items: stretch; }
    .row.g-3 > .col-12 { display: flex; flex-direction: column; }
    .row.g-3 > .col-12 > label { margin-bottom: .5rem; }
    #mdInput { min-height: 320px; height: auto; resize: vertical; flex: 1 1 auto; box-sizing: border-box; }
    #preview { min-height: 320px; height: auto; flex: 1 1 auto; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_markdown_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button id="btnCopy" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_markdown_copy'))}</button>
      <button id="btnDownload" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_markdown_download'))}</button>
      <button id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_markdown_clear'))}</button>
      <div class="form-check ms-2">
        <input class="form-check-input" type="checkbox" id="fullDoc" checked>
        <label class="form-check-label" for="fullDoc">${escapeHtml(t(opts.lang, 'tool_markdown_full_doc'))}</label>
      </div>
    </div>

    <div class="row g-3">
      <div class="col-12 col-lg-6">
        <label for="mdInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_markdown_input_label'))}</label>
        <textarea id="mdInput" class="input-lg" placeholder="${escapeHtml(t(opts.lang, 'tool_markdown_placeholder'))}"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_markdown_preview_label'))}</label>
        <div id="preview" class="result"></div>
      </div>
    </div>

    <div class="mt-4">
      <p class="small text-muted mb-0">${escapeHtml(article)}</p>
    </div>`;

	const extraBodyHtml = `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/11.1.1/marked.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.5/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    const lang = ${JSON.stringify(opts.lang)};
    const exportTitleZh = ${JSON.stringify(t('zh', 'tool_markdown_export_title'))};
    const exportTitleEn = ${JSON.stringify(t('en', 'tool_markdown_export_title'))};
    const exportDescZh = ${JSON.stringify(t('zh', 'tool_markdown_export_description'))};
    const exportDescEn = ${JSON.stringify(t('en', 'tool_markdown_export_description'))};
    const mdInput = document.getElementById('mdInput');
    const preview = document.getElementById('preview');
    const btnCopy = document.getElementById('btnCopy');
    const btnDownload = document.getElementById('btnDownload');
    const btnClear = document.getElementById('btnClear');
    const fullDoc = document.getElementById('fullDoc');

    const toHTML = (md) => {
      const raw = marked.parse(md || '');
      return DOMPurify.sanitize(raw);
    };

    const wrapHTML = (bodyHTML) => {
      const title = lang === 'zh' ? exportTitleZh : exportTitleEn;
      const desc = lang === 'zh' ? exportDescZh : exportDescEn;
      return (
        '<!doctype html>\n' +
        '<html lang="' + lang + '">\n' +
        '<head>\n' +
        '  <meta charset="utf-8" />\n' +
        '  <meta name="viewport" content="width=device-width,initial-scale=1" />\n' +
        '  <title>' + title + '</title>\n' +
        '  <meta name="description" content="' + desc + '" />\n' +
        '</head>\n' +
        '<body>\n' +
        bodyHTML +
        '\n</body>\n' +
        '</html>'
      );
    };

    const render = () => {
      const html = toHTML(mdInput.value);
      preview.innerHTML = html;
    };

    const copyHTML = async () => {
      const html = toHTML(mdInput.value);
      const value = fullDoc.checked ? wrapHTML(html) : html;
      await navigator.clipboard.writeText(value);
      btnCopy.textContent = ${JSON.stringify(t(opts.lang, 'tool_markdown_copy_done'))};
      setTimeout(() => btnCopy.textContent = ${JSON.stringify(t(opts.lang, 'tool_markdown_copy'))}, 1200);
    };

    const downloadHTML = () => {
      const html = toHTML(mdInput.value);
      const value = fullDoc.checked ? wrapHTML(html) : html;
      const blob = new Blob([value], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'markdown.html';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    };

    mdInput.addEventListener('input', render);
    btnCopy.addEventListener('click', copyHTML);
    btnDownload.addEventListener('click', downloadHTML);
    btnClear.addEventListener('click', () => { mdInput.value = ''; render(); });
    render();
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
