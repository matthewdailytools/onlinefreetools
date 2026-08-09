/**
 * Open Graph 预览工具页：粘贴 og:/twitter: 标签或抓取 URL → 渲染 Facebook / X / 通用（WhatsApp 风格）
 * 三张分享卡片 + 字段状态表 + og:image 比例检查。
 * slug: open-graph-preview（见 work-tasks/open-graph-preview/02-tool-info.md）。
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
 * 渲染 Open Graph 预览工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderOpenGraphPreviewPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/open-graph-preview';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_og_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_og_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'open-graph-preview',
			currentAnchor: '#open-graph-preview',
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
    .mode-tabs { display:flex; gap:.25rem; margin-bottom:.75rem; }
    .mode-tabs .btn { border-radius: .25rem; }
    .og-grid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
    @media (max-width: 992px) { .og-grid { grid-template-columns:1fr 1fr; } }
    @media (max-width: 576px) { .og-grid { grid-template-columns:1fr; } }
    .og-card { border:1px solid #dee2e6; border-radius:8px; overflow:hidden; background:#fff }
    .og-card h3 { font-size:.9rem; padding:.6rem .75rem; margin:0; background:#f8f9fa; border-bottom:1px solid #dee2e6; }
    .og-card .og-body { padding:0; }
    .og-media { width:100%; background:#e9ecef; display:block; }
    .og-media img { width:100%; display:block; object-fit:cover; }
    .og-media.large { aspect-ratio: 2 / 1; }
    .og-media.square { aspect-ratio: 1 / 1; max-width: 140px; }
    .og-media.square img { height:100%; }
    .og-card-body { padding:.6rem .75rem; }
    .og-domain { color:#536471; font-size:.75rem; margin-bottom:.2rem; text-transform:lowercase; }
    .og-title { font-size:.9rem; font-weight:600; line-height:1.3; color:#0f1419; margin-bottom:.2rem; }
    .og-desc { font-size:.8rem; color:#536471; line-height:1.4; }
    .og-note { margin-top:.5rem; font-size:.8rem; }
    .og-note.ok { color:#198754; }
    .og-note.warn { color:#b45309; }
    .og-field-table { width:100%; border-collapse:collapse; font-size:.9rem; }
    .og-field-table th, .og-field-table td { border:1px solid #dee2e6; padding:.45rem .6rem; text-align:left; }
    .og-field-table th { background:#f8f9fa; }
    .og-badge { display:inline-block; padding:.1rem .45rem; border-radius:999px; font-size:.75rem; font-weight:600; }
    .og-badge.ok { background:#d1e7dd; color:#0f5132; }
    .og-badge.missing { background:#f8d7da; color:#842029; }
    .og-badge.optional { background:#e2e3e5; color:#41464b; }
    .og-ratio { font-size:.8rem; }
  </style>`;

	const contentHtml = `
    <div id="open-graph-preview" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_og_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="mode-tabs">
          <button type="button" id="ogModeTags" class="btn btn-sm btn-primary">${escapeHtml(t(opts.lang, 'tool_og_tags_tab'))}</button>
          <button type="button" id="ogModeUrl" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_og_url_tab'))}</button>
        </div>

        <div class="form-group" id="ogTagsPane">
          <label class="form-label" for="ogTags">${escapeHtml(t(opts.lang, 'tool_og_tags_tab'))}</label>
          <textarea id="ogTags" class="form-control" rows="8"
            placeholder="${escapeHtml(t(opts.lang, 'tool_og_tags_ph'))}"></textarea>
        </div>

        <div class="form-group" id="ogUrlPane" style="display:none">
          <label class="form-label" for="ogUrl">${escapeHtml(t(opts.lang, 'tool_og_url_tab'))}</label>
          <input id="ogUrl" class="input-lg" type="text" maxlength="500"
            placeholder="${escapeHtml(t(opts.lang, 'tool_og_url_ph'))}">
        </div>

        <div class="btn-row">
          <button type="button" id="ogPreview" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_og_preview'))}</button>
          <button type="button" id="ogSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_og_sample'))}</button>
          <button type="button" id="ogClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_og_clear'))}</button>
        </div>

        <div id="ogResult" class="mt-3" aria-live="polite"></div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_og', mode: 'rules', ruleItemCount: 5 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_og_ref_ogp_label'),
				href: 'https://ogp.me/',
			},
			{
				label: t(opts.lang, 'tool_og_ref_x_label'),
				href: 'https://developer.x.com/en/docs/twitter-for-websites/cards/overview/markup',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var mode = 'tags';
      var tagsPane = document.getElementById('ogTagsPane');
      var urlPane = document.getElementById('ogUrlPane');
      var tagsEl = document.getElementById('ogTags');
      var urlEl = document.getElementById('ogUrl');
      var resultEl = document.getElementById('ogResult');
      var modeTagsBtn = document.getElementById('ogModeTags');
      var modeUrlBtn = document.getElementById('ogModeUrl');

      var I = {
        requiredLabel: ${JSON.stringify(t(opts.lang, 'tool_og_required_label'))},
        optionalLabel: ${JSON.stringify(t(opts.lang, 'tool_og_optional_label'))},
        missingLabel: ${JSON.stringify(t(opts.lang, 'tool_og_missing_label'))},
        okLabel: ${JSON.stringify(t(opts.lang, 'tool_og_ok_label'))},
        tableTitle: ${JSON.stringify(t(opts.lang, 'tool_og_table_title'))},
        ratioWarning: ${JSON.stringify(t(opts.lang, 'tool_og_ratio_warning'))},
        ratioOk: ${JSON.stringify(t(opts.lang, 'tool_og_ratio_ok'))},
        ratioUnknown: ${JSON.stringify(t(opts.lang, 'tool_og_ratio_unknown'))},
        dimsTpl: ${JSON.stringify(t(opts.lang, 'tool_og_dimensions'))},
        noTags: ${JSON.stringify(t(opts.lang, 'tool_og_no_tags'))},
        noTagsFallback: ${JSON.stringify(t(opts.lang, 'tool_og_no_tags_fallback'))},
        twitterInferred: ${JSON.stringify(t(opts.lang, 'tool_og_twitter_inferred'))},
        running: ${JSON.stringify(t(opts.lang, 'tool_og_running'))},
        urlError: ${JSON.stringify(t(opts.lang, 'tool_og_url_error'))},
        errorPrefix: ${JSON.stringify(t(opts.lang, 'tool_og_error_prefix'))},
        fetchFailed: ${JSON.stringify(t(opts.lang, 'tool_og_fetch_failed'))},
        platformFacebook: ${JSON.stringify(t(opts.lang, 'tool_og_platform_facebook'))},
        platformX: ${JSON.stringify(t(opts.lang, 'tool_og_platform_x'))},
        platformGeneric: ${JSON.stringify(t(opts.lang, 'tool_og_platform_generic'))},
        summaryLabel: ${JSON.stringify(t(opts.lang, 'tool_og_card_summary'))},
        largeLabel: ${JSON.stringify(t(opts.lang, 'tool_og_card_large'))}
      };

      /** 字段表定义：必填/可选 + 各字段展示名。 */
      var FIELD_DEFS = [
        { key: 'og:title', required: true, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_og_title'))} },
        { key: 'og:description', required: true, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_og_description'))} },
        { key: 'og:image', required: true, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_og_image'))} },
        { key: 'og:url', required: false, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_og_url'))} },
        { key: 'og:site_name', required: false, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_og_site_name'))} },
        { key: 'og:type', required: false, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_og_type'))} },
        { key: 'twitter:card', required: false, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_twitter_card'))} },
        { key: 'twitter:title', required: false, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_twitter_title'))} },
        { key: 'twitter:description', required: false, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_twitter_description'))} },
        { key: 'twitter:image', required: false, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_twitter_image'))} },
        { key: 'twitter:site', required: false, label: ${JSON.stringify(t(opts.lang, 'tool_og_field_twitter_site'))} }
      ];

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
       * 从 meta 标签文本中解析 og:/twitter: 键值。
       * 支持 <meta property="og:*" content="..."> 与 <meta name="twitter:*" content="..."> 两种写法。
       * @param {string} text 用户粘贴的标签文本
       * @returns {Object} { 'og:title': '...', ... }
       */
      function parseTags(text) {
        var tags = {};
        var metaRe = /<meta\\b[^>]*>/gi;
        var attrRe = /([a-z:_-]+)\\s*=\\s*["']([^"']*)["']/gi;
        var m;
        while ((m = metaRe.exec(text)) !== null) {
          var node = m[0];
          var attrs = {};
          var a;
          attrRe.lastIndex = 0;
          while ((a = attrRe.exec(node)) !== null) {
            attrs[a[1].toLowerCase()] = a[2];
          }
          var key = attrs.property || attrs.name || '';
          if (key && /^(og|twitter):/.test(key) && attrs.content) {
            tags[key] = attrs.content;
          }
        }
        return tags;
      }

      /**
       * 从 HTML 中提取 og:/twitter: 键值（URL 模式用 DOMParser）。
       * @param {string} html 抓取的页面 HTML
       * @returns {Object}
       */
      function extractTagsFromHtml(html) {
        var tags = {};
        try {
          var doc = new DOMParser().parseFromString(html, 'text/html');
          var metas = doc.head ? doc.head.querySelectorAll('meta[property^="og:" i], meta[name^="twitter:" i]') : [];
          metas.forEach(function (el) {
            var key = el.getAttribute('property') || el.getAttribute('name') || '';
            var val = el.getAttribute('content') || '';
            if (key && val) tags[key] = val;
          });
        } catch (e) {
          /* 解析失败时返回空对象 */
        }
        return tags;
      }

      /**
       * 从 og:image URL 读取真实尺寸（跨域图片也可读 naturalWidth）。
       * @param {string} src 图片 URL
       * @param {function} cb 回调 (w, h) 或 null
       */
      function readImageSize(src, cb) {
        var img = new Image();
        var done = false;
        var timer = setTimeout(function () {
          if (!done) { done = true; cb(null); }
        }, 6000);
        img.onload = function () {
          if (!done) {
            done = true;
            clearTimeout(timer);
            cb(img.naturalWidth || 0, img.naturalHeight || 0);
          }
        };
        img.onerror = function () {
          if (!done) {
            done = true;
            clearTimeout(timer);
            cb(null);
          }
        };
        img.src = src;
      }

      /**
       * 渲染单张分享卡片。
       * @param {string} heading 平台名
       * @param {Object} t tags 键值对象
       * @param {string} cardType twitter:card 值（决定 X 布局）
       * @param {string} imageStyle 'large' | 'square' | 'none'
       * @param {string} titleText
       * @param {string} descText
       * @param {string} domain
       * @param {string} imgSrc
       */
      function renderCard(heading, t, cardType, imageStyle, titleText, descText, domain, imgSrc) {
        var media = '';
        if (imgSrc && imageStyle !== 'none') {
          media = '<div class="og-media ' + imageStyle + '"><img src="' + esc(imgSrc) + '" alt="" loading="lazy"></div>';
        }
        return (
          '<div class="og-card">' +
          '<h3>' + esc(heading) + '</h3>' +
          '<div class="og-body">' + media +
          '<div class="og-card-body">' +
          '<div class="og-domain">' + esc(domain) + '</div>' +
          '<div class="og-title">' + esc(titleText) + '</div>' +
          '<div class="og-desc">' + esc(descText) + '</div>' +
          '</div></div></div>'
        );
      }

      /**
       * 渲染字段状态表。
       * @param {Object} t tags 键值对象
       * @returns {string}
       */
      function renderFieldTable(t) {
        var rows = FIELD_DEFS.map(function (def) {
          var present = !!t[def.key];
          var badge = present
            ? '<span class="og-badge ok">' + esc(I.okLabel) + '</span>'
            : def.required
              ? '<span class="og-badge missing">' + esc(I.missingLabel) + '</span>'
              : '<span class="og-badge optional">' + esc(I.optionalLabel) + '</span>';
          var value = present ? t[def.key] : '';
          return '<tr><td>' + esc(def.label) + '</td><td>' + badge + '</td><td class="text-muted small">' + esc(value) + '</td></tr>';
        }).join('');
        return (
          '<div class="mt-3"><h3 class="h6 mb-2">' + esc(I.tableTitle) + '</h3>' +
          '<table class="og-field-table"><thead><tr><th></th><th></th><th></th></tr></thead><tbody>' +
          rows + '</tbody></table></div>'
        );
      }

      /**
       * 渲染比例提示。
       * @param {number|null} w 图片宽
       * @param {number|null} h 图片高
       * @returns {string}
       */
      function ratioNote(w, h) {
        if (!w || !h) {
          return '<div class="og-note warn">' + esc(I.ratioUnknown) + '</div>';
        }
        var ratio = w / h;
        var ok = ratio >= 1.5 && ratio <= 2.1;
        var text = I.dimsTpl.replace('{w}', String(w)).replace('{h}', String(h)) + ' · ' +
          (ok ? I.ratioOk : I.ratioWarning);
        return '<div class="og-note ' + (ok ? 'ok' : 'warn') + '">' + esc(text) + '</div>';
      }

      /**
       * 主渲染入口：根据标签对象渲染三平台卡片 + 字段表。
       * @param {Object} tags og:/twitter: 键值对象
       */
      function renderPreview(tags) {
        var hasOg = tags['og:title'] || tags['og:description'] || tags['og:image'];
        if (!hasOg) {
          resultEl.innerHTML =
            '<div class="text-muted">' + esc(I.noTags) + '</div>' +
            '<div class="text-muted small mt-1">' + esc(I.noTagsFallback) + '</div>';
          return;
        }

        var title = tags['og:title'] || '';
        var desc = tags['og:description'] || '';
        var domain = '';
        var imgSrc = tags['og:image'] || '';
        try {
          var u = new URL(tags['og:url'] || 'https://example.com/');
          domain = u.hostname.replace(/^www\\./, '');
        } catch (e) {
          domain = 'example.com';
        }

        var cardType = tags['twitter:card'] || '';
        var xTitle = tags['twitter:title'] || title;
        var xDesc = tags['twitter:description'] || desc;
        var xImg = tags['twitter:image'] || imgSrc;

        var cards =
          renderCard(I.platformFacebook, tags, cardType, imgSrc ? 'large' : 'none', title, desc, domain, imgSrc) +
          renderCard(I.platformX, tags, cardType, xImg ? (cardType === 'summary' ? 'square' : 'large') : 'none', xTitle, xDesc, domain, xImg) +
          renderCard(I.platformGeneric, tags, cardType, imgSrc ? 'large' : 'none', title, desc, domain, imgSrc);

        var inferred = !cardType
          ? '<div class="og-note warn mt-3">' + esc(I.twitterInferred) + '</div>'
          : '';
        var ratio = imgSrc
          ? '<div class="og-ratio" id="ogRatio">' + esc(I.ratioUnknown) + '</div>'
          : '';
        var ratioId = 'ogRatio';

        resultEl.innerHTML =
          '<div class="og-grid">' + cards + '</div>' +
          (ratio ? ratio : '') + inferred +
          renderFieldTable(tags);

        // 异步读 og:image 尺寸，更新比例提示
        if (imgSrc) {
          var ratioEl = document.getElementById('ogRatio');
          readImageSize(imgSrc, function (w, h) {
            if (ratioEl && ratioEl.parentNode) {
              ratioEl.outerHTML = ratioNote(w, h);
            }
          });
        }
      }

      /** 模式切换：tags / url。 @param {string} m */
      function setMode(m) {
        mode = m;
        var isTags = m === 'tags';
        tagsPane.style.display = isTags ? '' : 'none';
        urlPane.style.display = isTags ? 'none' : '';
        modeTagsBtn.className = isTags ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-secondary';
        modeUrlBtn.className = isTags ? 'btn btn-sm btn-outline-secondary' : 'btn btn-sm btn-primary';
      }

      /**
       * 加载默认样例：完整 og + twitter:card 标签，1200×630 图片。
       */
      function loadSample() {
        setMode('tags');
        tagsEl.value =
          '<meta property="og:title" content="Open Graph Preview — Check Social Share Cards Before You Publish">\\n' +
          '<meta property="og:description" content="Paste your og: and twitter:card tags to preview the Facebook, X and WhatsApp share card, spot missing fields and fix image ratios.">\\n' +
          '<meta property="og:image" content="https://example.com/og-1200x630.png">\\n' +
          '<meta property="og:url" content="https://example.com/blog/post">\\n' +
          '<meta property="og:site_name" content="Example Blog">\\n' +
          '<meta property="og:type" content="article">\\n' +
          '<meta name="twitter:card" content="summary_large_image">\\n' +
          '<meta name="twitter:title" content="Open Graph Preview — Check Social Share Cards">\\n' +
          '<meta name="twitter:description" content="Paste your og tags to preview Facebook, X and WhatsApp cards.">\\n' +
          '<meta name="twitter:image" content="https://example.com/og-1200x630.png">';
        renderPreview(parseTags(tagsEl.value));
      }

      document.getElementById('ogPreview').addEventListener('click', function () {
        if (mode === 'tags') {
          renderPreview(parseTags(tagsEl.value));
        } else {
          var u = urlEl.value.trim();
          if (!/^https?:\\/\\//i.test(u)) {
            resultEl.innerHTML = '<div class="text-muted">' + esc(I.urlError) + '</div>';
            return;
          }
          resultEl.innerHTML = '<div class="text-muted">' + esc(I.running) + '</div>';
          fetch('/api/tools/open-graph-preview?url=' + encodeURIComponent(u))
            .then(function (res) { return res.json(); })
            .then(function (data) {
              if (data && data.error) throw new Error(data.error);
              renderPreview(extractTagsFromHtml(data.html || ''));
            })
            .catch(function (err) {
              resultEl.innerHTML = '<div class="text-muted">' + esc(I.errorPrefix + (err && err.message ? err.message : I.fetchFailed)) + '</div>';
            });
        }
      });

      document.getElementById('ogSample').addEventListener('click', loadSample);

      document.getElementById('ogClear').addEventListener('click', function () {
        tagsEl.value = '';
        urlEl.value = '';
        resultEl.innerHTML = '';
      });

      modeTagsBtn.addEventListener('click', function () { setMode('tags'); });
      modeUrlBtn.addEventListener('click', function () { setMode('url'); });

      /** 进页自动跑样例。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('open-graph-preview');
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
