/**
 * Meta SERP 预览工具页：输入 title / description / URL → 桌面与移动两套 Google 式摘要预览，
 * 字符数与估算像素宽双重提示，超宽截断标记；纯浏览器本地计算。
 * slug: meta-serp-preview（见 work-tasks/meta-serp-preview/02-tool-info.md）。
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
 * 渲染 Meta SERP 预览工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMetaSerpPreviewPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/meta-serp-preview';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_serp_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_serp_description');

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
			currentSlug: 'meta-serp-preview',
			currentAnchor: '#meta-serp-preview',
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
    .serp-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width: 768px) { .serp-grid { grid-template-columns:1fr; } }
    .serp-card { border:1px solid #dee2e6; border-radius:8px; padding:1rem; background:#fff }
    .serp-card h3 { font-size:.95rem; }
    .serp-meta { color:#6c757d; font-size:.8rem; margin-bottom:.35rem; display:flex; gap:.75rem; flex-wrap:wrap; }
    .serp-url { color:#202124; font-size:.9rem; margin-bottom:.25rem; }
    .serp-title { color:#1a0dab; font-size:1.05rem; line-height:1.3; margin-bottom:.25rem; }
    .serp-title.cut::after { content:"…"; }
    .serp-desc { color:#4d5156; font-size:.85rem; line-height:1.45; }
    .serp-desc.cut::after { content:"…"; }
    .serp-note { margin-top:.5rem; font-size:.8rem; }
    .serp-note.ok { color:#198754; }
    .serp-note.warn { color:#b45309; }
  </style>`;

	const contentHtml = `
    <div id="meta-serp-preview" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_serp_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="serpForm">
          <div class="form-group">
            <label class="form-label" for="serpTitle">${escapeHtml(t(opts.lang, 'tool_serp_title_label'))}</label>
            <input id="serpTitle" class="input-lg" type="text" maxlength="300"
              placeholder="${escapeHtml(t(opts.lang, 'tool_serp_title_ph'))}">
          </div>
          <div class="form-group">
            <label class="form-label" for="serpDesc">${escapeHtml(t(opts.lang, 'tool_serp_desc_label'))}</label>
            <textarea id="serpDesc" class="form-control" rows="3"
              placeholder="${escapeHtml(t(opts.lang, 'tool_serp_desc_ph'))}"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label" for="serpUrl">${escapeHtml(t(opts.lang, 'tool_serp_url_label'))}</label>
            <input id="serpUrl" class="input-lg" type="text" maxlength="200"
              placeholder="${escapeHtml(t(opts.lang, 'tool_serp_url_ph'))}">
          </div>
          <details class="mb-3">
            <summary class="text-muted small">${escapeHtml(t(opts.lang, 'tool_serp_compare_label'))}</summary>
            <div class="form-group mt-2 mb-0">
              <label class="form-label" for="serpTitleB">${escapeHtml(t(opts.lang, 'tool_serp_title_b_label'))}</label>
              <input id="serpTitleB" class="input-lg" type="text" maxlength="300"
                placeholder="${escapeHtml(t(opts.lang, 'tool_serp_title_b_ph'))}">
            </div>
          </details>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_serp_preview'))}</button>
            <button type="button" id="serpSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_serp_sample'))}</button>
            <button type="button" id="serpClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_serp_clear'))}</button>
          </div>
        </form>

        <div id="serpResult" class="mt-3" aria-live="polite">
          <div class="serp-grid" id="serpGrid"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_serp', mode: 'rules', ruleItemCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_serp_ref_title_label'),
				href: 'https://developers.google.com/search/docs/appearance/title-link',
			},
			{
				label: t(opts.lang, 'tool_serp_ref_snippet_label'),
				href: 'https://developers.google.com/search/docs/appearance/snippet',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('serpForm');
      var titleEl = document.getElementById('serpTitle');
      var descEl = document.getElementById('serpDesc');
      var urlEl = document.getElementById('serpUrl');
      var titleBEl = document.getElementById('serpTitleB');
      var gridEl = document.getElementById('serpGrid');

      var labelDesktop = ${JSON.stringify(t(opts.lang, 'tool_serp_desktop'))};
      var labelMobile = ${JSON.stringify(t(opts.lang, 'tool_serp_mobile'))};
      var charTpl = ${JSON.stringify(t(opts.lang, 'tool_serp_char_count'))};
      var pxTpl = ${JSON.stringify(t(opts.lang, 'tool_serp_px_width'))};
      var warnTpl = ${JSON.stringify(t(opts.lang, 'tool_serp_cut_warning'))};
      var fitMsg = ${JSON.stringify(t(opts.lang, 'tool_serp_fit'))};
      var errTitleEmpty = ${JSON.stringify(t(opts.lang, 'tool_serp_err_title_empty'))};
      var urlDisplay = ${JSON.stringify(t(opts.lang, 'tool_serp_serp_url_display'))};
      var copyLabel = ${JSON.stringify(t(opts.lang, 'tool_serp_copy'))};
      var copiedLabel = ${JSON.stringify(t(opts.lang, 'tool_serp_copied'))};

      /** 桌面/移动视口宽估算（px）。 */
      var VIEW = { desktop: 600, mobile: 460 };

      /** 每行描述行数（约）。 */
      var DESC_LINES = 2;

      /** 复制按钮 id 自增（单页两预览共享一枚复制按钮更简洁）。 */
      var copyBtn;

      /**
       * 估算字符串像素宽：CJK≈1em、ASCII≈0.55em、emoji≈1.4em、其余≈0.8em。
       * @param {string} s
       * @returns {number} 相对单位（em）
       */
      function estWidth(s) {
        var w = 0;
        for (var i = 0; i < s.length; i++) {
          var cp = s.codePointAt(i);
          if (cp > 0xffff) i++; /* surrogate pair 计一次 */
          var c = String.fromCodePoint(cp);
          if (/[\\u2E80-\\u9FFF\\uF900-\\uFAFF\\uFF00-\\uFF60\\u3040-\\u30FF]/.test(c)) w += 1; /* CJK / kana */
          else if (/\\p{Extended_Pictographic}/u.test(c)) w += 1.4; /* emoji */
          else if (/^[a-zA-Z0-9 .]$/.test(c)) w += 0.55;
          else if (/^[\\s]$/.test(c)) w += 0.3;
          else w += 0.8;
        }
        return w;
      }

      /**
       * 找到第一个超过 limit(em) 的字符下标；全放得下则返回 -1。
       * @param {string} s
       * @param {number} limit
       */
      function cutIndex(s, limit) {
        var w = 0;
        for (var i = 0; i < s.length; i++) {
          var cp = s.codePointAt(i);
          var c = String.fromCodePoint(cp);
          var inc = /[\\u2E80-\\u9FFF\\uF900-\\uFAFF\\uFF00-\\uFF60\\u3040-\\u30FF]/.test(c)
            ? 1
            : /\\p{Extended_Pictographic}/u.test(c)
              ? 1.4
              : /^[a-zA-Z0-9 .]$/.test(c)
                ? 0.55
                : /^[\\s]$/.test(c)
                  ? 0.3
                  : 0.8;
          if (w + inc > limit) return i;
          w += inc;
          if (cp > 0xffff) i++;
        }
        return -1;
      }

      /**
       * 渲染一行（标题或描述）并标注截断。
       * @param {string} text
       * @param {number} limitEm
       * @param {'title'|'desc'} kind
       * @param {number} viewPx
       * @returns {{html:string, cut:boolean, chars:number, em:number}}
       */
      function lineView(text, limitEm, kind, viewPx) {
        var chars = text.length;
        var em = estWidth(text);
        var cut = em > limitEm;
        var cls = kind === 'title' ? 'serp-title' : 'serp-desc';
        var html = '<div class="' + cls + (cut ? ' cut' : '') + '">' + esc(text) + '</div>';
        var note;
        if (cut) {
          note = '<div class="serp-note warn">' + esc(
            warnTpl.replace('{limit}', String(viewPx))
          ) + '</div>';
        } else {
          note = '<div class="serp-note ok">' + esc(fitMsg) + '</div>';
        }
        return { html: html + note, cut: cut, chars: chars, em: em };
      }

      /**
       * 渲染单张预览卡片（桌面或移动）。
       * @param {string} heading
       * @param {string} urlText
       * @param {string} titleText
       * @param {string} descText
       * @param {number} viewPx
       */
      function renderCard(heading, urlText, titleText, descText, viewPx) {
        var titleView = lineView(titleText, viewPx, 'title', viewPx);
        var descView = lineView(descText, viewPx * DESC_LINES, 'desc', viewPx);
        return (
          '<div class="serp-card">' +
          '<h3>' + esc(heading) + '</h3>' +
          '<div class="serp-meta">' +
          '<span>' + charTpl.replace('{n}', String(titleView.chars)) + '</span>' +
          '<span>' + pxTpl.replace('{n}', String(Math.round(titleView.em * 16))) + '</span>' +
          '</div>' +
          '<div class="serp-url">' + esc(urlText) + '</div>' +
          titleView.html +
          '<div class="serp-url"></div>' +
          descView.html +
          '</div>'
        );
      }

      /**
       * 执行预览渲染。
       * @returns {boolean}
       */
      function runPreview() {
        var title = titleEl.value.trim();
        if (!title) {
          gridEl.innerHTML = '<div class="text-muted">' + esc(errTitleEmpty) + '</div>';
          return false;
        }
        var desc = descEl.value.trim();
        var url = urlEl.value.trim() || 'example.com › page';
        var urlText = url.replace(/^https?:\\/\\//, '').replace(/\\/$/, '');
        var titleB = titleBEl && titleBEl.value.trim() ? titleBEl.value.trim() : title;

        var cards =
          renderCard(labelDesktop, urlText, title, desc, VIEW.desktop) +
          renderCard(labelMobile, urlText, titleB, desc, VIEW.mobile);
        gridEl.innerHTML = cards;
        return true;
      }

      /**
       * 转义文本插入 HTML。
       * @param {string} s
       */
      function esc(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 加载默认样例：长英文标题 + 两行描述 + URL；移动端更早截断。
       */
      function loadSample() {
        titleEl.value = 'Meta SERP Preview — How to Preview Google Title & Description Truncation Online';
        descEl.value = 'Paste your title and description to preview Google search result truncation on desktop and mobile with character counts, pixel estimates, and cut points.';
        urlEl.value = 'https://example.com/page';
        if (titleBEl) titleBEl.value = '';
        runPreview();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runPreview();
      });
      document.getElementById('serpSample').addEventListener('click', loadSample);
      document.getElementById('serpClear').addEventListener('click', function () {
        form.reset();
        if (titleBEl) titleBEl.value = '';
        gridEl.innerHTML = '';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('meta-serp-preview');
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
