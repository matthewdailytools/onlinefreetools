/**
 * On-Page SEO 检查器工具页：粘贴 HTML 或拉取 URL，对 title/H1/canonical/meta/OG/JSON-LD/
 * mixed content/render-blocking 做单项检查并给出修复建议；粘贴模式纯浏览器本地解析。
 * slug: on-page-seo-checker（见 work-tasks/on-page-seo-checker/02-tool-info.md）。
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
 * 渲染 On-Page SEO Checker 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderOnPageSeoCheckerPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/on-page-seo-checker';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_onpage_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_onpage_description');

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
			currentSlug: 'on-page-seo-checker',
			currentAnchor: '#on-page-seo-checker',
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
      .onpage-mode { display:flex; gap:.5rem; margin-bottom:1rem; }
      .onpage-mode .btn { border-radius:999px; }
      .onpage-result { border:1px solid #dee2e6; border-radius:8px; margin-bottom:.6rem; overflow:hidden; }
      .onpage-result-head { display:flex; gap:.6rem; align-items:center; padding:.55rem .75rem; background:#f8f9fa; border-bottom:1px solid #e9ecef; font-weight:600; font-size:.85rem; }
      .onpage-badge { font-size:.7rem; font-weight:700; padding:.15rem .45rem; border-radius:999px; white-space:nowrap; }
      .badge-ok { background:#d1fae5; color:#065f46; }
      .badge-warn { background:#fef3c7; color:#92400e; }
      .badge-err { background:#fee2e2; color:#991b1b; }
      .onpage-result-body { padding:.6rem .75rem; font-size:.85rem; color:#374151; }
      pre.onpage-out { background:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:.75rem; max-height:420px; overflow:auto; font-size:.8rem; white-space:pre; }
      .output-head { display:flex; flex-wrap:wrap; gap:.75rem; align-items:center; margin-bottom:.5rem; }
      .onpage-summary { display:flex; flex-wrap:wrap; gap:.6rem; align-items:center; font-size:.85rem; margin-bottom:1rem; }
      /* URL 输入框：放宽到接近卡片右缘，但保留右侧 margin */
      .onpage-url-input { display:block; width: calc(100% - 2rem); }
      @media (max-width: 640px) { .onpage-url-input { width: 100%; } }
    </style>`;

	const contentHtml = `
      <div id="on-page-seo-checker" class="mb-3">
        <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_onpage_title'))}</h1>
        <p class="text-muted mb-0">${escapeHtml(description)}</p>
      </div>

      <div class="card tool-card">
        <div class="card-body">
          <div class="onpage-mode" role="tablist">
            <button type="button" id="modeHtml" class="btn btn-sm btn-primary">${escapeHtml(t(opts.lang, 'tool_onpage_html_tab'))}</button>
            <button type="button" id="modeUrl" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_onpage_url_tab'))}</button>
          </div>

          <div id="htmlPane" class="form-group">
            <label class="form-label" for="htmlInput">${escapeHtml(t(opts.lang, 'tool_onpage_html_ph'))}</label>
            <textarea id="htmlInput" class="form-control" rows="10" placeholder="${escapeHtml(t(opts.lang, 'tool_onpage_html_ph'))}"></textarea>
          </div>

          <div id="urlPane" class="form-group" hidden>
            <label class="form-label" for="urlInput">${escapeHtml(t(opts.lang, 'tool_onpage_url_ph'))}</label>
            <input id="urlInput" class="input-lg onpage-url-input" type="text" placeholder="${escapeHtml(t(opts.lang, 'tool_onpage_url_ph'))}">
          </div>

          <div class="btn-row">
            <button type="button" id="onpageCheck" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_onpage_check'))}</button>
            <button type="button" id="onpageSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_onpage_sample'))}</button>
            <button type="button" id="onpageClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_onpage_clear'))}</button>
          </div>

          <div class="form-group mt-3 mb-0">
            <div class="output-head">
              <label class="form-label mb-0">${escapeHtml(t(opts.lang, 'tool_onpage_summary_title'))}</label>
            </div>
            <div class="onpage-summary" id="onpageSummary"></div>
            <div id="onpageResults"></div>
          </div>
        </div>
      </div>

      ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_onpage', mode: 'rules', ruleItemCount: 5 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_onpage_ref_tags_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/special-tags',
			},
			{
				label: t(opts.lang, 'tool_onpage_ref_canonical_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/canonical',
			},
			{
				label: t(opts.lang, 'tool_onpage_ref_mdn_label'),
				href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
			},
		],
	});

	const extraBodyHtml = `
    <script>
      (function () {
        var I = {
          okLabel: ${JSON.stringify(t(opts.lang, 'tool_onpage_status_ok'))},
          warnLabel: ${JSON.stringify(t(opts.lang, 'tool_onpage_status_warn'))},
          errLabel: ${JSON.stringify(t(opts.lang, 'tool_onpage_status_err'))},
          noHtml: ${JSON.stringify(t(opts.lang, 'tool_onpage_no_html'))},
          noResults: ${JSON.stringify(t(opts.lang, 'tool_onpage_no_results'))},
          urlError: ${JSON.stringify(t(opts.lang, 'tool_onpage_url_error'))},
          fetchFailed: ${JSON.stringify(t(opts.lang, 'tool_onpage_fetch_failed'))},
          running: ${JSON.stringify(t(opts.lang, 'tool_onpage_running'))},
          errorPrefix: ${JSON.stringify(t(opts.lang, 'tool_onpage_error_prefix'))},
          titleCheck: ${JSON.stringify(t(opts.lang, 'tool_onpage_title_check'))},
          titleMissing: ${JSON.stringify(t(opts.lang, 'tool_onpage_title_missing'))},
          titleOk: ${JSON.stringify(t(opts.lang, 'tool_onpage_title_ok'))},
          titleLong: ${JSON.stringify(t(opts.lang, 'tool_onpage_title_long'))},
          titleShort: ${JSON.stringify(t(opts.lang, 'tool_onpage_title_short'))},
          descCheck: ${JSON.stringify(t(opts.lang, 'tool_onpage_desc_check'))},
          descMissing: ${JSON.stringify(t(opts.lang, 'tool_onpage_desc_missing'))},
          descOk: ${JSON.stringify(t(opts.lang, 'tool_onpage_desc_ok'))},
          descLong: ${JSON.stringify(t(opts.lang, 'tool_onpage_desc_long'))},
          descShort: ${JSON.stringify(t(opts.lang, 'tool_onpage_desc_short'))},
          h1Check: ${JSON.stringify(t(opts.lang, 'tool_onpage_h1_check'))},
          h1Missing: ${JSON.stringify(t(opts.lang, 'tool_onpage_h1_missing'))},
          h1Multiple: ${JSON.stringify(t(opts.lang, 'tool_onpage_h1_multiple'))},
          h1Ok: ${JSON.stringify(t(opts.lang, 'tool_onpage_h1_ok'))},
          canonicalCheck: ${JSON.stringify(t(opts.lang, 'tool_onpage_canonical_check'))},
          canonicalMissing: ${JSON.stringify(t(opts.lang, 'tool_onpage_canonical_missing'))},
          canonicalOk: ${JSON.stringify(t(opts.lang, 'tool_onpage_canonical_ok'))},
          canonicalOther: ${JSON.stringify(t(opts.lang, 'tool_onpage_canonical_other'))},
          robotsCheck: ${JSON.stringify(t(opts.lang, 'tool_onpage_robots_check'))},
          robotsMissing: ${JSON.stringify(t(opts.lang, 'tool_onpage_robots_missing'))},
          robotsNoindex: ${JSON.stringify(t(opts.lang, 'tool_onpage_robots_noindex'))},
          robotsOk: ${JSON.stringify(t(opts.lang, 'tool_onpage_robots_ok'))},
          ogCheck: ${JSON.stringify(t(opts.lang, 'tool_onpage_og_check'))},
          ogMissing: ${JSON.stringify(t(opts.lang, 'tool_onpage_og_missing'))},
          ogPartial: ${JSON.stringify(t(opts.lang, 'tool_onpage_og_partial'))},
          ogOk: ${JSON.stringify(t(opts.lang, 'tool_onpage_og_ok'))},
          jsonldCheck: ${JSON.stringify(t(opts.lang, 'tool_onpage_jsonld_check'))},
          jsonldMissing: ${JSON.stringify(t(opts.lang, 'tool_onpage_jsonld_missing'))},
          jsonldInvalid: ${JSON.stringify(t(opts.lang, 'tool_onpage_jsonld_invalid'))},
          jsonldOk: ${JSON.stringify(t(opts.lang, 'tool_onpage_jsonld_ok'))},
          mixedCheck: ${JSON.stringify(t(opts.lang, 'tool_onpage_mixed_check'))},
          mixedNone: ${JSON.stringify(t(opts.lang, 'tool_onpage_mixed_none'))},
          mixedFound: ${JSON.stringify(t(opts.lang, 'tool_onpage_mixed_found'))},
          renderCheck: ${JSON.stringify(t(opts.lang, 'tool_onpage_render_check'))},
          renderNone: ${JSON.stringify(t(opts.lang, 'tool_onpage_render_none'))},
          renderFound: ${JSON.stringify(t(opts.lang, 'tool_onpage_render_found'))},
          unknown: ${JSON.stringify(t(opts.lang, 'tool_onpage_unknown'))},
          summaryOk: ${JSON.stringify(t(opts.lang, 'tool_onpage_summary_n_ok'))},
          summaryWarn: ${JSON.stringify(t(opts.lang, 'tool_onpage_summary_n_warn'))},
          summaryErr: ${JSON.stringify(t(opts.lang, 'tool_onpage_summary_n_err'))}
        };

        var mode = 'url';
        var htmlPane = document.getElementById('htmlPane');
        var urlPane = document.getElementById('urlPane');
        var htmlInput = document.getElementById('htmlInput');
        var urlInput = document.getElementById('urlInput');
        var resultsEl = document.getElementById('onpageResults');
        var summaryEl = document.getElementById('onpageSummary');
        var checkBtn = document.getElementById('onpageCheck');

        /** 样例 HTML：双 H1、长 title、指向他页的 canonical、一处 http 图片、一个 JSON-LD。 */
        function sampleHtml() {
          return '<!DOCTYPE html>\\n' +
            '<html lang="en">\\n' +
            '<head>\\n' +
            '  <title>On-Page SEO Checker — How to Audit Title, H1, Canonical and Meta Tags for Your Website</title>\\n' +
            '  <link rel="canonical" href="https://example.com/canonical-target">\\n' +
            '  <meta property="og:title" content="On-Page SEO Checker Example">\\n' +
            '  <meta property="og:image" content="https://example.com/og.png">\\n' +
            '  <link rel="stylesheet" href="/styles.css">\\n' +
            '</head>\\n' +
            '<body>\\n' +
            '  <h1>On-Page SEO Checker</h1>\\n' +
            '  <h1>How to use it</h1>\\n' +
            '  <img src="http://example.com/hero.jpg" alt="hero">\\n' +
            '  <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"Example"}<\\/script>\\n' +
            '</body>\\n' +
            '</html>';
        }

        /** 转义 HTML。 @param {string} s */
        function esc(s) {
          return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        /**
         * 新增一条检查结果。
         * @param {string} label 检查项名
         * @param {'ok'|'warn'|'err'} status 状态
         * @param {string} message 建议文案
         */
        function addResult(label, status, message) {
          var badgeClass = status === 'ok' ? 'badge-ok' : status === 'warn' ? 'badge-warn' : 'badge-err';
          var badgeLabel = status === 'ok' ? I.okLabel : status === 'warn' ? I.warnLabel : I.errLabel;
          resultsEl.insertAdjacentHTML('beforeend',
            '<div class="onpage-result">' +
            '<div class="onpage-result-head"><span class="onpage-badge ' + badgeClass + '">' + esc(badgeLabel) + '</span><span>' + esc(label) + '</span></div>' +
            '<div class="onpage-result-body">' + esc(message) + '</div>' +
            '</div>');
          return status === 'ok' ? 'ok' : status === 'warn' ? 'warn' : 'err';
        }

        /**
         * 用 DOMParser 解析 HTML，跑全部检查。
         * @param {string} raw 原始 HTML
         * @param {string} baseUrl 页面真实 URL（URL 模式传入；粘贴模式可空）
         */
        function runChecks(raw, baseUrl) {
          resultsEl.innerHTML = '';
          summaryEl.innerHTML = '';
          var counts = { ok: 0, warn: 0, err: 0 };
          var doc;
          try {
            doc = new DOMParser().parseFromString(raw, 'text/html');
          } catch (e) {
            addResult(I.titleCheck, 'err', I.noHtml);
            return;
          }
          var head = doc.head || doc;
          var body = doc.body || doc;

          /** title 检查 */
          var titleEl = head.querySelector('title');
          var titleText = titleEl ? (titleEl.textContent || '').trim() : '';
          if (!titleEl || !titleText) {
            counts[addResult(I.titleCheck, 'err', I.titleMissing)]++;
          } else if (titleText.length > 60) {
            counts[addResult(I.titleCheck, 'warn', I.titleLong.replace('{n}', String(titleText.length)))]++;
          } else if (titleText.length < 15) {
            counts[addResult(I.titleCheck, 'warn', I.titleShort.replace('{n}', String(titleText.length)))]++;
          } else {
            counts[addResult(I.titleCheck, 'ok', I.titleOk.replace('{n}', String(titleText.length)))]++;
          }

          /** meta description 检查 */
          var descEl = head.querySelector('meta[name="description" i]');
          var descText = descEl ? (descEl.getAttribute('content') || '').trim() : '';
          // 缺 meta description 不是排名问题（Google 用它生成摘要），故降为 warn 而非 Issue。
          if (!descText) {
            counts[addResult(I.descCheck, 'warn', I.descMissing)]++;
          } else if (descText.length > 160) {
            counts[addResult(I.descCheck, 'warn', I.descLong.replace('{n}', String(descText.length)))]++;
          } else if (descText.length < 70) {
            counts[addResult(I.descCheck, 'warn', I.descShort.replace('{n}', String(descText.length)))]++;
          } else {
            counts[addResult(I.descCheck, 'ok', I.descOk.replace('{n}', String(descText.length)))]++;
          }

          /**
         * H1 检查。
         * 多个 H1 不是 Google 排名问题（官方明确无理想标题数量），
         * 因此只按可访问性与大纲清晰度给 warn；缺 H1 才是实质缺口。
         */
          var h1s = body.querySelectorAll('h1');
          if (!h1s.length) {
            counts[addResult(I.h1Check, 'err', I.h1Missing)]++;
          } else if (h1s.length > 1) {
            counts[addResult(I.h1Check, 'warn', I.h1Multiple.replace('{n}', String(h1s.length)))]++;
          } else {
            counts[addResult(I.h1Check, 'ok', I.h1Ok)]++;
          }

          /** canonical 检查 */
          var canonEl = head.querySelector('link[rel="canonical" i]');
          if (!canonEl || !(canonEl.getAttribute('href') || '').trim()) {
            counts[addResult(I.canonicalCheck, 'warn', I.canonicalMissing)]++;
          } else {
            var canonHref = canonEl.getAttribute('href').trim();
            var selfRef = false;
            try {
              var pageUrl = baseUrl || 'https://example.com/';
              var canonAbs = new URL(canonHref, pageUrl).href;
              var pageAbs = new URL(pageUrl).href;
              selfRef = canonAbs.replace(/\\/$/, '') === pageAbs.replace(/\\/$/, '');
            } catch (e) { /* 默认非自引用 */ }
            if (selfRef) counts[addResult(I.canonicalCheck, 'ok', I.canonicalOk)]++;
            else counts[addResult(I.canonicalCheck, 'warn', I.canonicalOther)]++;
          }

          /** robots meta 检查 */
          var robotsEl = head.querySelector('meta[name="robots" i]');
          var robotsContent = robotsEl ? (robotsEl.getAttribute('content') || '').toLowerCase() : '';
          if (!robotsContent) {
            counts[addResult(I.robotsCheck, 'ok', I.robotsMissing)]++;
          } else if (/noindex/.test(robotsContent)) {
            counts[addResult(I.robotsCheck, 'warn', I.robotsNoindex)]++;
          } else {
            counts[addResult(I.robotsCheck, 'ok', I.robotsOk)]++;
          }

          /** Open Graph 检查 */
          var ogProps = ['og:title', 'og:description', 'og:image'];
          var ogFound = ogProps.filter(function (p) {
            return head.querySelector('meta[property="' + p + '" i], meta[name="' + p + '" i]');
          }).length;
          if (ogFound === 0) {
            counts[addResult(I.ogCheck, 'warn', I.ogMissing)]++;
          } else if (ogFound < ogProps.length) {
            counts[addResult(I.ogCheck, 'warn', I.ogPartial.replace('{n}', String(ogProps.length - ogFound)))]++;
          } else {
            counts[addResult(I.ogCheck, 'ok', I.ogOk)]++;
          }

          /** JSON-LD 检查 */
          var ldBlocks = head.querySelectorAll('script[type="application/ld+json" i]');
          if (!ldBlocks.length) {
            counts[addResult(I.jsonldCheck, 'ok', I.jsonldMissing)]++;
          } else {
            var valid = 0;
            var invalid = 0;
            ldBlocks.forEach(function (b) {
              try { JSON.parse((b.textContent || '').trim()); valid++; }
              catch (e) { invalid++; }
            });
            if (invalid > 0) counts[addResult(I.jsonldCheck, 'err', I.jsonldInvalid)]++;
            else counts[addResult(I.jsonldCheck, 'ok', I.jsonldOk.replace('{n}', String(valid)))]++;
          }

          /** mixed content 检查：https 页面引用 http:// 资源 */
          var refs = [];
          body.querySelectorAll('[src], [href]').forEach(function (el) {
            var v = el.getAttribute('src') || el.getAttribute('href') || '';
            if (/^http:\\/\\//i.test(v.trim())) refs.push(v.trim());
          });
          if (!refs.length) {
            counts[addResult(I.mixedCheck, 'ok', I.mixedNone)]++;
          } else {
            counts[addResult(I.mixedCheck, 'warn', I.mixedFound.replace('{n}', String(refs.length)))]++;
          }

          /** render-blocking 检查：head 中无 media 的样式表 */
          var rbs = head.querySelectorAll('link[rel="stylesheet" i]');
          var blocking = 0;
          rbs.forEach(function (l) {
            if (!(l.getAttribute('media') || '').trim()) blocking++;
          });
          if (!blocking) {
            counts[addResult(I.renderCheck, 'ok', I.renderNone)]++;
          } else {
            counts[addResult(I.renderCheck, 'warn', I.renderFound.replace('{n}', String(blocking)))]++;
          }

          renderSummary(counts);
        }

        /**
         * 渲染统计摘要。
         * @param {{ok:number, warn:number, err:number}} counts
         */
        function renderSummary(counts) {
          var chips = [];
          if (counts.err) chips.push('<span class="onpage-badge badge-err">' + esc(I.summaryErr.replace('{n}', String(counts.err))) + '</span>');
          if (counts.warn) chips.push('<span class="onpage-badge badge-warn">' + esc(I.summaryWarn.replace('{n}', String(counts.warn))) + '</span>');
          if (counts.ok) chips.push('<span class="onpage-badge badge-ok">' + esc(I.summaryOk.replace('{n}', String(counts.ok))) + '</span>');
          summaryEl.innerHTML = chips.join('') || esc(I.noResults);
        }

        /** 模式切换：html / url。 @param {string} m */
        function setMode(m) {
          mode = m;
          var isHtml = m === 'html';
          htmlPane.hidden = !isHtml;
          urlPane.hidden = isHtml;
          document.getElementById('modeHtml').className = isHtml ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-secondary';
          document.getElementById('modeUrl').className = isHtml ? 'btn btn-sm btn-outline-secondary' : 'btn btn-sm btn-primary';
        }

        document.getElementById('modeHtml').addEventListener('click', function () { setMode('html'); });
        document.getElementById('modeUrl').addEventListener('click', function () { setMode('url'); });

        checkBtn.addEventListener('click', async function () {
          if (mode === 'html') {
            var raw = htmlInput.value;
            if (!raw || !raw.trim()) {
              resultsEl.innerHTML = '';
              summaryEl.innerHTML = '';
              addResult(I.titleCheck, 'err', I.noHtml);
              return;
            }
            runChecks(raw);
          } else {
            var u = urlInput.value.trim();
            if (!/^https?:\\/\\//i.test(u)) {
              resultsEl.innerHTML = '';
              summaryEl.innerHTML = '';
              addResult(I.titleCheck, 'err', I.urlError);
              return;
            }
            resultsEl.innerHTML = '';
            summaryEl.innerHTML = '';
            summaryEl.textContent = I.running;
            try {
              var res = await fetch('/api/tools/on-page-seo?url=' + encodeURIComponent(u));
              var data = await res.json();
              if (!res.ok) throw new Error(data && data.error ? data.error : I.fetchFailed);
              htmlInput.value = data.html || '';
              runChecks(data.html || '', data.finalUrl || u);
            } catch (err) {
              resultsEl.innerHTML = '';
              summaryEl.innerHTML = '';
              addResult(I.titleCheck, 'err', I.errorPrefix + (err && err.message ? err.message : I.fetchFailed));
            }
          }
        });

        /**
         * 载入样例：切到 Paste HTML 模式、填入样例文档并立即跑检查。
         * 进页与「Load sample」按钮共用同一条路径，保证首屏所见即按钮所得。
         */
        function loadSample() {
          setMode('html');
          htmlInput.value = sampleHtml();
          runChecks(htmlInput.value);
        }

        document.getElementById('onpageSample').addEventListener('click', loadSample);

        document.getElementById('onpageClear').addEventListener('click', function () {
          htmlInput.value = '';
          urlInput.value = '';
          resultsEl.innerHTML = '';
          summaryEl.innerHTML = '';
        });

        /**
         * 进页即跑样例：停在 Paste HTML 模式，避免出现「URL 标签页 + 粘贴结果」的错位。
         * 需要抓取线上页面时点 Fetch URL 切换即可。
         */
        loadSample();
      })();
    </script>`;

	const toolMeta = getToolBySlug('on-page-seo-checker');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
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
