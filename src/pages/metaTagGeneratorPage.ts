/**
 * meta 标签生成器工具页：填写 title、description、canonical、robots 与 OG 字段，生成可直接贴进 <head>
 * 的 HTML 片段；含长度提示、HTML 转义与 canonical 协议校验，纯本地处理。
 * slug: meta-tag-generator（见 work-tasks/meta-tag-generator/02-tool-info.md）。
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
 * 渲染 meta 标签生成器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMetaTagGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/meta-tag-generator';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_meta_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_meta_description');

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
			currentSlug: 'meta-tag-generator',
			currentAnchor: '#meta-tag-generator',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { font-size:.8rem; color:#6c757d; margin-top:.25rem; }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .mtg-length { font-size:.8rem; margin-top:.25rem; }
    .mtg-length.ok { color:#198754; }
    .mtg-length.warn { color:#b45309; }
    .mtg-output { background:#f8f9fa; border:1px solid #dee2e6; border-radius:6px; padding:.75rem; white-space:pre-wrap; word-break:break-all; max-height:320px; overflow:auto; font-size:.85rem; }
    .mtg-note { margin-top:.5rem; font-size:.8rem; }
    .mtg-note.warn { color:#b45309; }
    .row-2col { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width: 640px) { .row-2col { grid-template-columns:1fr; } }
  </style>`;

	const contentHtml = `
    <div id="meta-tag-generator" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_meta_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="metaForm">
          <div class="form-group">
            <label class="form-label" for="mtTitle">${escapeHtml(t(opts.lang, 'tool_meta_title_label'))}</label>
            <input type="text" id="mtTitle" class="form-control" maxlength="200"
              placeholder="${escapeHtml(t(opts.lang, 'tool_meta_title_ph'))}">
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_meta_title_hint'))}</div>
            <div class="mtg-length ok" id="mtTitleLen"></div>
          </div>
          <div class="form-group">
            <label class="form-label" for="mtDesc">${escapeHtml(t(opts.lang, 'tool_meta_desc_label'))}</label>
            <textarea id="mtDesc" class="form-control" rows="3" maxlength="500"
              placeholder="${escapeHtml(t(opts.lang, 'tool_meta_desc_ph'))}"></textarea>
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_meta_desc_hint'))}</div>
            <div class="mtg-length ok" id="mtDescLen"></div>
          </div>
          <div class="row-2col">
            <div class="form-group">
              <label class="form-label" for="mtCanonical">${escapeHtml(t(opts.lang, 'tool_meta_canonical_label'))}</label>
              <input type="text" id="mtCanonical" class="form-control"
                placeholder="${escapeHtml(t(opts.lang, 'tool_meta_canonical_ph'))}">
              <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_meta_canonical_hint'))}</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="mtRobots">${escapeHtml(t(opts.lang, 'tool_meta_robots_label'))}</label>
              <select id="mtRobots" class="form-control">
                <option value="">${escapeHtml(t(opts.lang, 'tool_meta_robots_none'))}</option>
                <option value="index, follow">${escapeHtml(t(opts.lang, 'tool_meta_robots_index_follow'))}</option>
                <option value="noindex, follow">${escapeHtml(t(opts.lang, 'tool_meta_robots_noindex_follow'))}</option>
                <option value="index, nofollow">${escapeHtml(t(opts.lang, 'tool_meta_robots_index_nofollow'))}</option>
                <option value="noindex, nofollow">${escapeHtml(t(opts.lang, 'tool_meta_robots_noindex_nofollow'))}</option>
              </select>
            </div>
          </div>
          <div class="row-2col">
            <div class="form-group">
              <label class="form-label" for="mtOgTitle">og:title</label>
              <input type="text" id="mtOgTitle" class="form-control" maxlength="200">
            </div>
            <div class="form-group">
              <label class="form-label" for="mtOgDesc">og:description</label>
              <input type="text" id="mtOgDesc" class="form-control" maxlength="300">
            </div>
            <div class="form-group">
              <label class="form-label" for="mtOgImage">${escapeHtml(t(opts.lang, 'tool_meta_og_image_label'))}</label>
              <input type="text" id="mtOgImage" class="form-control">
            </div>
            <div class="form-group">
              <label class="form-label" for="mtOgType">og:type</label>
              <input type="text" id="mtOgType" class="form-control" placeholder="website">
            </div>
            <div class="form-group">
              <label class="form-label" for="mtOgUrl">og:url</label>
              <input type="text" id="mtOgUrl" class="form-control">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_meta_generate'))}</button>
            <button type="button" id="mtSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_meta_sample'))}</button>
            <button type="button" id="mtClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_meta_clear'))}</button>
          </div>
        </form>

        <div id="mtResult" class="mt-3" aria-live="polite"></div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_meta', mode: 'rules', ruleItemCount: 5,
		howItemCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_meta_ref_searchcentral_tags_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/special-tags',
			},
			{
				label: t(opts.lang, 'tool_meta_ref_searchcentral_title_label'),
				href: 'https://developers.google.com/search/docs/appearance/title-link',
			},
			{
				label: t(opts.lang, 'tool_meta_ref_searchcentral_canonical_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/canonical',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('metaForm');
      var titleEl = document.getElementById('mtTitle');
      var descEl = document.getElementById('mtDesc');
      var canonicalEl = document.getElementById('mtCanonical');
      var robotsEl = document.getElementById('mtRobots');
      var ogTitleEl = document.getElementById('mtOgTitle');
      var ogDescEl = document.getElementById('mtOgDesc');
      var ogImageEl = document.getElementById('mtOgImage');
      var ogTypeEl = document.getElementById('mtOgType');
      var ogUrlEl = document.getElementById('mtOgUrl');
      var titleLenEl = document.getElementById('mtTitleLen');
      var descLenEl = document.getElementById('mtDescLen');
      var resultEl = document.getElementById('mtResult');

      var I = {
        canonicalProtocol: ${JSON.stringify(t(opts.lang, 'tool_meta_canonical_protocol'))},
        outputLabel: ${JSON.stringify(t(opts.lang, 'tool_meta_output_label'))},
        copyLabel: ${JSON.stringify(t(opts.lang, 'tool_meta_copy'))},
        copiedLabel: ${JSON.stringify(t(opts.lang, 'tool_meta_copied'))},
        errorPrefix: ${JSON.stringify(t(opts.lang, 'tool_meta_error_prefix'))},
        titleLen: ${JSON.stringify(t(opts.lang, 'tool_meta_title_len'))},
        titleLenWarn: ${JSON.stringify(t(opts.lang, 'tool_meta_title_len_warn'))},
        descLen: ${JSON.stringify(t(opts.lang, 'tool_meta_desc_len'))},
        descLenWarn: ${JSON.stringify(t(opts.lang, 'tool_meta_desc_len_warn'))}
      };

      /**
       * HTML 转义：& < > " ' 转成实体。
       * @param {string} s
       */
      function esc(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      /** 刷新 title/desc 长度提示。 */
      function updateLength() {
        var n = titleEl.value.length;
        if (n > 60) titleLenEl.className = 'mtg-length warn';
        else titleLenEl.className = 'mtg-length ok';
        titleLenEl.textContent = (n > 60 ? I.titleLenWarn : I.titleLen).replace('{n}', String(n));

        var m = descEl.value.length;
        if (m > 160) descLenEl.className = 'mtg-length warn';
        else descLenEl.className = 'mtg-length ok';
        descLenEl.textContent = (m > 160 ? I.descLenWarn : I.descLen).replace('{n}', String(m));
      }

      /**
       * 主生成入口：拼接 head 片段。
       */
      function generate() {
        resultEl.innerHTML = '';
        var lines = [];

        var t = titleEl.value.trim();
        if (t) lines.push('<title>' + esc(t) + '</title>');

        var d = descEl.value.trim();
        if (d) lines.push('<meta name="description" content="' + esc(d) + '">');

        var canon = canonicalEl.value.trim();
        var canonNote = '';
        if (canon) {
          if (!/^https?:\\/\\//i.test(canon)) {
            canonNote = '<div class="mtg-note warn">' + esc(I.canonicalProtocol) + '</div>';
          }
          lines.push('<link rel="canonical" href="' + esc(canon) + '">');
        }

        var robots = robotsEl.value.trim();
        if (robots) lines.push('<meta name="robots" content="' + esc(robots) + '">');

        var og = [
          ['og:title', ogTitleEl.value],
          ['og:description', ogDescEl.value],
          ['og:image', ogImageEl.value],
          ['og:type', ogTypeEl.value],
          ['og:url', ogUrlEl.value]
        ];
        og.forEach(function (pair) {
          var v = pair[1].trim();
          if (v) lines.push('<meta property="' + esc(pair[0]) + '" content="' + esc(v) + '">');
        });

        resultEl.innerHTML =
          '<div class="form-label mb-1">' + esc(I.outputLabel) + '</div>' +
          '<div class="mtg-output" id="mtOut">' + esc(lines.join('\\n')) + '</div>' +
          canonNote +
          '<div class="btn-row mt-2"><button type="button" id="mtCopyBtn" class="btn btn-sm btn-outline-secondary">' + esc(I.copyLabel) + '</button></div>';

        var copyBtn = document.getElementById('mtCopyBtn');
        copyBtn.addEventListener('click', function () {
          var text = lines.join('\\n');
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
              copyBtn.textContent = I.copiedLabel;
              setTimeout(function () { copyBtn.textContent = I.copyLabel; }, 1600);
            }, function () { fallbackCopy(text, copyBtn); });
          } else {
            fallbackCopy(text, copyBtn);
          }
        });
      }

      /** 剪贴板兜底：临时 textarea 复制。 */
      function fallbackCopy(text, btn) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          btn.textContent = I.copiedLabel;
          setTimeout(function () { btn.textContent = I.copyLabel; }, 1600);
        } catch (e) {
          btn.textContent = I.errorPrefix + e.message;
        }
        document.body.removeChild(ta);
      }

      /**
       * 加载默认样例：完整 head 字段。
       */
      function loadSample() {
        titleEl.value = 'Meta Tag Generator — Generate complete page head tags';
        descEl.value = 'Fill in the title, description, canonical, robots and Open Graph fields to generate ready-to-paste head meta tags with length hints and escaping.';
        canonicalEl.value = 'https://example.com/meta-tag-generator';
        robotsEl.value = 'index, follow';
        ogTitleEl.value = 'Meta Tag Generator — Generate complete page head tags';
        ogDescEl.value = 'Generate ready-to-paste head meta tags with length hints and escaping.';
        ogImageEl.value = 'https://example.com/og.png';
        ogTypeEl.value = 'website';
        ogUrlEl.value = 'https://example.com/meta-tag-generator';
        updateLength();
        generate();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        generate();
      });
      titleEl.addEventListener('input', updateLength);
      descEl.addEventListener('input', updateLength);
      document.getElementById('mtSample').addEventListener('click', loadSample);
      document.getElementById('mtClear').addEventListener('click', function () {
        form.reset();
        resultEl.innerHTML = '';
        titleLenEl.textContent = '';
        descLenEl.textContent = '';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('meta-tag-generator');
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
