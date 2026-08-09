/**
 * Robots.txt 生成器工具页：勾选/新增 User-agent 分组，每组 Allow/Disallow 路径，末尾 Sitemap 行，
 * 输出 RFC 9309 布局的纯文本 robots.txt；预设 AI crawler 分组（含所属方）；纯浏览器本地计算。
 * slug: robots-txt-generator（见 work-tasks/robots-txt-generator/02-tool-info.md）。
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
 * 渲染 Robots.txt 生成器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderRobotsTxtGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/robots-txt-generator';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_robots_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_robots_description');

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
			currentSlug: 'robots-txt-generator',
			currentAnchor: '#robots-txt-generator',
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
      .agent-block { border:1px solid #dee2e6; border-radius:8px; padding:.75rem; margin-bottom:.75rem; background:#f8f9fa; }
      .agent-head { display:flex; gap:.5rem; align-items:center; margin-bottom:.5rem; }
      .agent-head .agent-ua { flex:1; }
      .agent-check { display:flex; align-items:center; gap:.4rem; font-size:.8rem; color:#495057; margin-bottom:.5rem; cursor:pointer; user-select:none; }
      .agent-check input { margin:0; }
      .agent-note { font-size:.8rem; color:#6c757d; margin-bottom:.6rem; }
      .agents-hint { font-size:.8rem; color:#6c757d; margin-bottom:.6rem; }
      .agent-block .form-label { font-size:.85rem; }
      pre.robots-out { background:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:.75rem; max-height:420px; overflow:auto; font-size:.8rem; white-space:pre; }
      .output-head { display:flex; flex-wrap:wrap; gap:.75rem; align-items:center; margin-bottom:.5rem; }
    </style>`;

	const contentHtml = `
      <div id="robots-txt-generator" class="mb-3">
        <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_robots_title'))}</h1>
        <p class="text-muted mb-0">${escapeHtml(description)}</p>
      </div>

      <div class="card tool-card">
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">${escapeHtml(t(opts.lang, 'tool_robots_agents_label'))}</label>
            <p class="agents-hint mb-1">${escapeHtml(t(opts.lang, 'tool_robots_agents_hint'))}</p>
            <div id="agentList"></div>
            <button type="button" id="agentAdd" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_robots_agent_add'))}</button>
          </div>

          <div class="form-group">
            <label class="form-label" for="sitemapUrl">${escapeHtml(t(opts.lang, 'tool_robots_sitemap_label'))}</label>
            <input id="sitemapUrl" class="input-lg" type="text" placeholder="${escapeHtml(t(opts.lang, 'tool_robots_sitemap_ph'))}">
          </div>

          <div class="btn-row">
            <button type="button" id="robotsGenerate" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_robots_generate'))}</button>
            <button type="button" id="robotsSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_robots_sample'))}</button>
            <button type="button" id="robotsClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_robots_clear'))}</button>
          </div>

          <div class="form-group mt-3 mb-0">
            <div class="output-head">
              <label class="form-label mb-0">${escapeHtml(t(opts.lang, 'tool_robots_output_label'))}</label>
              <button type="button" id="robotsDownload" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_robots_download'))}</button>
              <button type="button" id="robotsCopy" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_robots_copy'))}</button>
            </div>
            <pre class="robots-out" id="robotsOutput"></pre>
          </div>
        </div>
      </div>

      ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_robots', mode: 'rules', ruleItemCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_robots_ref_rfc_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc9309.html',
			},
			{
				label: t(opts.lang, 'tool_robots_ref_google_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro',
			},
			{
				label: t(opts.lang, 'tool_robots_ref_ai_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/ai-crawler',
			},
		],
	});

	const extraBodyHtml = `
    <script>
      (function () {
        var I = {
          allowLabel: ${JSON.stringify(t(opts.lang, 'tool_robots_allow_label'))},
          disallowLabel: ${JSON.stringify(t(opts.lang, 'tool_robots_disallow_label'))},
          removeLabel: ${JSON.stringify(t(opts.lang, 'tool_robots_agent_remove'))},
          includeLabel: ${JSON.stringify(t(opts.lang, 'tool_robots_include'))},
          ownerTpl: ${JSON.stringify(t(opts.lang, 'tool_robots_owner_of'))},
          emptyAgent: ${JSON.stringify(t(opts.lang, 'tool_robots_empty_agent'))},
          copyLabel: ${JSON.stringify(t(opts.lang, 'tool_robots_copy'))},
          copiedLabel: ${JSON.stringify(t(opts.lang, 'tool_robots_copied'))}
        };

        /** 预设 User-agent（含所属方；AI 爬虫写法以官方文档为准）。 */
        var PRESETS = [
          { ua: 'Googlebot', owner: 'Google' },
          { ua: 'Bingbot', owner: 'Microsoft' },
          { ua: 'GPTBot', owner: 'OpenAI' },
          { ua: 'ClaudeBot', owner: 'Anthropic' },
          { ua: 'Google-Extended', owner: 'Google' },
          { ua: 'CCBot', owner: 'Common Crawl' },
          { ua: 'PerplexityBot', owner: 'Perplexity' }
        ];

        var agentListEl = document.getElementById('agentList');
        var sitemapEl = document.getElementById('sitemapUrl');
        var outEl = document.getElementById('robotsOutput');
        var copyBtn = document.getElementById('robotsCopy');
        var downloadBtn = document.getElementById('robotsDownload');

        /** 转义 HTML。 @param {string} s */
        function esc(s) {
          return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        /**
         * 生成一个 User-agent 分组块。
         * @param {string} ua 初始 User-agent 值
         * @param {string} owner 所属方说明（可为空）
         * @param {string} allow 初始 Allow 文本
         * @param {string} disallow 初始 Disallow 文本
         * @param {boolean} checked 是否默认勾选包含
         */
        function agentBlock(ua, owner, allow, disallow, checked) {
          var note = owner ? '<div class="agent-note">' + esc(I.ownerTpl.replace('{owner}', owner)) + '</div>' : '';
          var chk = checked === false ? '' : ' checked';
          return '<div class="agent-block">' +
            '<div class="agent-head">' +
            '<input class="input-lg agent-ua" type="text" value="' + esc(ua || '') + '">' +
            '<button type="button" class="btn btn-sm btn-outline-secondary agent-remove">' + esc(I.removeLabel) + '</button>' +
            '</div>' +
            '<label class="agent-check"><input type="checkbox" class="agent-include"' + chk + '> ' + esc(I.includeLabel) + '</label>' +
            note +
            '<div class="form-group"><label class="form-label">' + esc(I.allowLabel) + '</label>' +
            '<textarea class="form-control" data-kind="allow" rows="2">' + esc(allow || '') + '</textarea></div>' +
            '<div class="form-group mb-0"><label class="form-label">' + esc(I.disallowLabel) + '</label>' +
            '<textarea class="form-control" data-kind="disallow" rows="2">' + esc(disallow || '') + '</textarea></div>' +
            '</div>';
        }

        /** 事件代理：删除分组 / 添加自定义分组。 */
        agentListEl.addEventListener('click', function (e) {
          var t = e.target;
          if (!(t && t.classList)) return;
          if (t.classList.contains('agent-remove')) {
            var block = t.closest('.agent-block');
            if (block && block.parentNode) block.parentNode.removeChild(block);
          }
        });
        document.getElementById('agentAdd').addEventListener('click', function () {
          agentListEl.insertAdjacentHTML('beforeend', agentBlock('', '', '', '', true));
        });

        /** 按行拆分文本，过滤空行。 @param {string} s @returns {string[]} */
        function lines(s) {
          return String(s).split(/\\r?\\n/).map(function (x) { return x.trim(); }).filter(function (x) { return x !== ''; });
        }

        /** 组装 robots.txt 文本。 */
        function buildRobots() {
          var blocks = Array.prototype.slice.call(document.querySelectorAll('#agentList .agent-block'));
          var parts = [];
          blocks.forEach(function (block) {
            var include = block.querySelector('.agent-include');
            if (include && !include.checked) return;
            var ua = block.querySelector('.agent-ua').value.trim();
            if (!ua) return;
            var group = ['User-agent: ' + ua];
            lines(block.querySelector('[data-kind=allow]').value).forEach(function (p) { group.push('Allow: ' + p); });
            lines(block.querySelector('[data-kind=disallow]').value).forEach(function (p) { group.push('Disallow: ' + p); });
            parts.push(group.join('\\n'));
          });
          if (parts.length === 0) {
            outEl.textContent = I.emptyAgent;
            return;
          }
          var sitemap = sitemapEl.value.trim();
          if (sitemap) parts.push('Sitemap: ' + sitemap);
          outEl.textContent = parts.join('\\n\\n');
        }

        /**
         * 加载默认样例：展示全部预设 agent，仅 Googlebot（Allow /）与 GPTBot（Disallow /）
         * 默认勾选，其余预设可自行勾选；Sitemap 指向样例。
         */
        function loadSample() {
          agentListEl.innerHTML = '';
          PRESETS.forEach(function (a) {
            var on = a.ua === 'Googlebot' || a.ua === 'GPTBot';
            var allow = a.ua === 'Googlebot' ? '/' : '';
            var disallow = a.ua === 'GPTBot' ? '/' : '';
            agentListEl.insertAdjacentHTML('beforeend', agentBlock(a.ua, a.owner, allow, disallow, on));
          });
          sitemapEl.value = 'https://example.com/sitemap.xml';
          buildRobots();
        }

        document.getElementById('robotsGenerate').addEventListener('click', buildRobots);
        document.getElementById('robotsSample').addEventListener('click', loadSample);
        document.getElementById('robotsClear').addEventListener('click', function () {
          agentListEl.innerHTML = '';
          sitemapEl.value = '';
          outEl.textContent = '';
        });
        copyBtn.addEventListener('click', function () {
          if (!outEl.textContent || outEl.textContent === I.emptyAgent) return;
          navigator.clipboard.writeText(outEl.textContent).then(function () {
            copyBtn.textContent = I.copiedLabel;
            setTimeout(function () { copyBtn.textContent = I.copyLabel; }, 1500);
          });
        });
        downloadBtn.addEventListener('click', function () {
          var text = outEl.textContent;
          if (!text || text === I.emptyAgent) return;
          var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'robots.txt';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });

        loadSample();
      })();
    </script>`;

	const toolMeta = getToolBySlug('robots-txt-generator');
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
