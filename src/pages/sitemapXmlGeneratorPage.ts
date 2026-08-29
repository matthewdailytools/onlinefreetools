/**
 * XML Sitemap 生成器工具页：每行一个 https URL，可选 lastmod / changefreq / priority（竖线分隔），
 * 输出符合 sitemap 协议的 urlset XML；URL 转义、lastmod 校验、>50k 提示拆分；纯浏览器本地计算。
 * slug: sitemap-xml-generator（见 work-tasks/sitemap-xml-generator/02-tool-info.md）。
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
 * 渲染 XML Sitemap 生成器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSitemapXmlGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/sitemap-xml-generator';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_sitemap_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_sitemap_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
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
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'sitemap-xml-generator',
			currentAnchor: '#sitemap-xml-generator',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
    <style>
      .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
      .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
      .form-group { margin-bottom:1rem; }
      .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
      .hint { font-size:.8rem; color:#6c757d; margin-top:.35rem; }
      .warn-list { list-style:none; padding:0; margin:.5rem 0 0; font-size:.85rem; color:#b45309; }
      pre.sitemap-out { background:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:.75rem; max-height:420px; overflow:auto; font-size:.8rem; white-space:pre; }
      .output-head { display:flex; flex-wrap:wrap; gap:.75rem; align-items:center; margin-bottom:.5rem; }
    </style>`;

	const contentHtml = `
      <div id="sitemap-xml-generator" class="mb-3">
        <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_sitemap_title'))}</h1>
        <p class="text-muted mb-0">${escapeHtml(description)}</p>
      </div>

      <div class="card tool-card">
        <div class="card-body">
          <div class="form-group">
            <label class="form-label" for="sitemapUrls">${escapeHtml(t(opts.lang, 'tool_sitemap_urls_label'))}</label>
            <textarea id="sitemapUrls" class="form-control" rows="8"
              placeholder="${escapeHtml(t(opts.lang, 'tool_sitemap_urls_ph'))}"></textarea>
            <p class="hint">${escapeHtml(t(opts.lang, 'tool_sitemap_format_hint'))}</p>
          </div>

          <div class="btn-row">
            <button type="button" id="sitemapGenerate" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_sitemap_generate'))}</button>
            <button type="button" id="sitemapSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_sitemap_sample'))}</button>
            <button type="button" id="sitemapClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_sitemap_clear'))}</button>
          </div>

          <ul id="sitemapWarn" class="warn-list" aria-live="polite"></ul>

          <div class="form-group mt-3 mb-0">
            <div class="output-head">
              <label class="form-label mb-0">${escapeHtml(t(opts.lang, 'tool_sitemap_output_label'))}</label>
              <button type="button" id="sitemapDownload" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_sitemap_download'))}</button>
              <button type="button" id="sitemapCopy" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_sitemap_copy'))}</button>
            </div>
            <pre class="sitemap-out" id="sitemapOutput"></pre>
          </div>
        </div>
      </div>

      ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_sitemap', mode: 'rules', ruleItemCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_sitemap_ref_sitemaps_label'),
				href: 'https://www.sitemaps.org/protocol.html',
			},
			{
				label: t(opts.lang, 'tool_sitemap_ref_google_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap',
			},
		],
	});

	const extraBodyHtml = `
    <script>
      (function () {
        var I = {
          warnInvalid: ${JSON.stringify(t(opts.lang, 'tool_sitemap_warn_invalid_url'))},
          warnBadLastmod: ${JSON.stringify(t(opts.lang, 'tool_sitemap_warn_bad_lastmod'))},
          warnTooMany: ${JSON.stringify(t(opts.lang, 'tool_sitemap_warn_too_many'))},
          copyLabel: ${JSON.stringify(t(opts.lang, 'tool_sitemap_copy'))},
          copiedLabel: ${JSON.stringify(t(opts.lang, 'tool_sitemap_copied'))}
        };

        var urlsEl = document.getElementById('sitemapUrls');
        var warnEl = document.getElementById('sitemapWarn');
        var outEl = document.getElementById('sitemapOutput');
        var copyBtn = document.getElementById('sitemapCopy');
        var downloadBtn = document.getElementById('sitemapDownload');

        /** 合法 changefreq 值（sitemap 协议枚举）。 */
        var CHANGEFREQ = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];

        /** 转义 HTML/XML 文本。 @param {string} s */
        function esc(s) {
          return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
        }

        /** 清理控制字符（保留可打印部分）。 @param {string} s */
        function cleanControl(s) {
          return String(s).replace(/[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F\\u007F]/g, '');
        }

        /** lastmod 是否合法（W3C 日期或 datetime）。 @param {string} v */
        function validLastmod(v) {
          return /^\\d{4}-\\d{2}-\\d{2}$/.test(v) || /^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}/.test(v);
        }

        /** 生成 sitemap.xml 文本。 */
        function buildSitemap() {
          var lines = urlsEl.value.split(/\\r?\\n/);
          var entries = [];
          var warns = [];
          lines.forEach(function (line) {
            var text = line.trim();
            if (!text) return;
            var parts = text.split('|').map(function (p) { return p.trim(); });
            var url = cleanControl(parts[0]);
            if (!/^https?:\\/\\//i.test(url)) {
              warns.push(I.warnInvalid.replace('{url}', url));
              return;
            }
            var entry = '<loc>' + esc(url) + '</loc>';
            var lastmod = parts[1] || '';
            if (lastmod) {
              if (validLastmod(lastmod)) entry += '<lastmod>' + esc(lastmod) + '</lastmod>';
              else warns.push(I.warnBadLastmod.replace('{url}', url));
            }
            var cf = parts[2] || '';
            if (cf && CHANGEFREQ.indexOf(cf) !== -1) entry += '<changefreq>' + esc(cf) + '</changefreq>';
            var pr = parts[3] || '';
            if (pr && !isNaN(parseFloat(pr)) && parseFloat(pr) >= 0 && parseFloat(pr) <= 1) {
              entry += '<priority>' + esc(pr) + '</priority>';
            }
            entries.push('<url>' + entry + '</url>');
          });

          if (entries.length > 50000) warns.push(I.warnTooMany);

          if (entries.length === 0) {
            outEl.textContent = '';
            warnEl.innerHTML = warns.length ? warns.map(function (w) { return '<li>' + esc(w) + '</li>'; }).join('') : '';
            return;
          }

          var xml = '<?xml version="1.0" encoding="UTF-8"?>\\n' +
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n' +
            entries.map(function (e) { return '  ' + e; }).join('\\n') +
            '\\n</urlset>';
          outEl.textContent = xml;
          warnEl.innerHTML = warns.length ? warns.map(function (w) { return '<li>' + esc(w) + '</li>'; }).join('') : '';
        }

        /** 加载默认样例：3 条 URL，1 条带 lastmod/changefreq/priority。 */
        function loadSample() {
          urlsEl.value = [
            'https://example.com/',
            'https://example.com/products | 2026-08-01 | weekly | 0.8',
            'https://example.com/about'
          ].join('\\n');
          buildSitemap();
        }

        document.getElementById('sitemapGenerate').addEventListener('click', buildSitemap);
        document.getElementById('sitemapSample').addEventListener('click', loadSample);
        document.getElementById('sitemapClear').addEventListener('click', function () {
          urlsEl.value = '';
          warnEl.innerHTML = '';
          outEl.textContent = '';
        });
        copyBtn.addEventListener('click', function () {
          if (!outEl.textContent) return;
          navigator.clipboard.writeText(outEl.textContent).then(function () {
            copyBtn.textContent = I.copiedLabel;
            setTimeout(function () { copyBtn.textContent = I.copyLabel; }, 1500);
          });
        });
        downloadBtn.addEventListener('click', function () {
          var xml = outEl.textContent;
          if (!xml) return;
          var blob = new Blob([xml], { type: 'application/xml' });
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'sitemap.xml';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });

        loadSample();
      })();
    </script>`;

	const toolMeta = getToolBySlug('sitemap-xml-generator');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				tool: toolMeta,
				canonicalPath,
				description,
			})
		: '';

	return renderLayout({
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		alternates,
		headerHtml,
		sidebarHtml,
		footerHtml,
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		extraHeadHtml,
		extraBodyHtml,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		jsonLd: toolJsonLd,
	});
};
