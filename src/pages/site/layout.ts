import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { getToolBySlug } from '../../site/tools';
import { TOPIC_I18N_KEYS, topicLeafPath } from '../../site/topics';
import {
	hasToolOgImage,
	renderToolPreferredImageHtml,
	resolveToolOgImageUrl,
} from './ogImage';

const SITE_BASE_URL = 'https://onlinefreetools.org';
const DEFAULT_LANG: SiteLang = 'en';

/** 本站开源仓库 URL（与页脚 `footer.ts`、`scripts/site/config.mjs` 同源）。 */
const GITHUB_REPO_URL = 'https://github.com/matthewdailytools/onlinefreetools';

/** GitHub 新建 Issue 页；title/body 由 `buildGithubIssueHref` 预填。 */
const GITHUB_ISSUES_NEW_URL = `${GITHUB_REPO_URL}/issues/new`;

export const escapeHtml = (s: string) =>
	s
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');

/**
 * 为工具路径加语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 路径
 * @param defaultLang 默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 组装 GitHub 新建 Issue 链接，预填 `[bug] {工具名}` 与页面 URL。
 * @param toolName 当前工具显示名
 * @param pageUrl 当前工具页绝对 URL
 */
export const buildGithubIssueHref = (toolName: string, pageUrl: string): string => {
	const title = `[bug] ${toolName}`;
	const body = `${toolName}\n${pageUrl}\n\n`;
	return `${GITHUB_ISSUES_NEW_URL}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
};

/**
 * 面包屑行尾的「报告缺陷」外链（新窗口打开 GitHub Issue）。
 * 不放入 `<ol class="breadcrumb">`，以免污染可见面包屑与 BreadcrumbList JSON-LD。
 * @param lang 当前语言
 * @param toolName 工具显示名
 * @param pageUrl 当前工具页绝对 URL
 */
export const renderReportBugLink = (lang: SiteLang, toolName: string, pageUrl: string): string => {
	const href = buildGithubIssueHref(toolName, pageUrl);
	return `<a class="tool-report-bug" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t(lang, 'tool_feedback_report_bug'))}</a>`;
};

/**
 * 工具页可见面包屑：Home → primary topic → 工具名；行尾附 GitHub 报缺陷链接。
 * @param lang 当前语言
 * @param defaultLang 默认语言
 * @param toolSlug 工具 slug
 * @param toolName 工具显示名
 */
const renderAutoToolBreadcrumb = (
	lang: SiteLang,
	defaultLang: SiteLang,
	toolSlug: string,
	toolName: string
) => {
	const tool = getToolBySlug(toolSlug);
	const topic = tool?.primaryTopic;
	if (!topic || !TOPIC_I18N_KEYS[topic]) return '';
	const topicLabel = t(lang, TOPIC_I18N_KEYS[topic].labelKey as keyof typeof import('../../site/i18n/en').default);
	const homeHref = withLangPrefix(lang, '/', defaultLang);
	const topicHref = withLangPrefix(lang, topicLeafPath(topic), defaultLang);
	/** 预填 Issue 正文用的本页绝对 URL（默认语无语言前缀）。 */
	const pageUrl = `${SITE_BASE_URL}${withLangPrefix(lang, `/tools/${toolSlug}`, defaultLang)}`;
	return `
<nav class="mb-3 small tool-topic-breadcrumb" aria-label="breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="${escapeHtml(homeHref)}">${escapeHtml(t(lang, 'nav_home'))}</a></li>
    <li class="breadcrumb-item"><a href="${escapeHtml(topicHref)}">${escapeHtml(topicLabel)}</a></li>
    <li class="breadcrumb-item active" aria-current="page">${escapeHtml(toolName)}</li>
  </ol>
  ${renderReportBugLink(lang, toolName, pageUrl)}
</nav>`;
};

/**
 * Clarity：load 后再空闲注入，避免与首屏同域资源抢连接（外网不可达时也不拖慢页面）。
 */
const CLARITY_SCRIPT = `
<script>
(function () {
  function injectClarity() {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xbc0iytpn7");
  }
  function schedule() {
    if (typeof requestIdleCallback === 'function') requestIdleCallback(injectClarity, { timeout: 4000 });
    else setTimeout(injectClarity, 2000);
  }
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
})();
</script>`;

/** 同域 Bootstrap（由 scripts/copy-site-chrome-vendor.mjs 复制）。 */
const BOOTSTRAP_CSS = '/vendor/bootstrap/bootstrap.min.css';
const BOOTSTRAP_JS = '/vendor/bootstrap/bootstrap.bundle.min.js';
/** 同域 Plus Jakarta Sans @font-face。 */
const FONT_CSS = '/vendor/fonts/plus-jakarta-sans.css';

/**
 * 首屏前读取 localStorage 主题，避免 FOUC。
 * 合法值：teal | green | amber | navy；默认 teal。
 */
const THEME_BOOT_SCRIPT = `<script>(function(){try{var k='oft-theme',v=localStorage.getItem(k),ok={teal:1,green:1,amber:1,navy:1};document.documentElement.setAttribute('data-theme',(v&&ok[v])?v:'teal');}catch(e){document.documentElement.setAttribute('data-theme','teal');}})();</script>`;

export const absoluteUrl = (pathnameOrUrl: string) => {
	try {
		return new URL(pathnameOrUrl, SITE_BASE_URL).toString();
	} catch {
		return SITE_BASE_URL;
	}
};

/** 布局行为已迁入 /styles/site.css；此处仅保留极薄兜底 */
const sidebarCss = `
  body { min-height: 100vh; padding-top: calc(var(--header-h, 56px) + var(--lang-hint-h, 0px)); box-sizing: border-box; }
  .layout { display: flex; min-height: calc(100vh - var(--header-h, 56px) - var(--lang-hint-h, 0px)); }
`;

export type HreflangAlternate = { lang: SiteLang; href: string };

export const renderLayout = (opts: {
	lang: SiteLang;
	title: string;
	description: string;
	canonicalPath: string;
	ogImageUrl: string;
	ogType?: string;
	alternates?: HreflangAlternate[];
	headerHtml: string;
	sidebarHtml: string;
	contentHtml: string;
	footerHtml: string;
	extraHeadHtml?: string;
	extraBodyHtml?: string;
	includeSidebarToggleScript?: boolean;
	sidebarAutoCloseSelector?: string;
}) => {
	const canonical = absoluteUrl(opts.canonicalPath);
	const title = escapeHtml(opts.title);
	const description = escapeHtml(opts.description);
	const ogType = escapeHtml(opts.ogType || 'website');
	/** 工具页优先 per-slug OG；无资产时回退调用方传入的默认站图。 */
	const toolSlugMatch = opts.canonicalPath.match(/\/tools\/([^/]+)\/?$/);
	const toolSlug = toolSlugMatch?.[1] || '';
	const resolvedOgImageUrl = toolSlug ? resolveToolOgImageUrl(toolSlug) : opts.ogImageUrl;
	const ogImageUrl = escapeHtml(resolvedOgImageUrl);
	/** 可索引工具页允许大图预览（SERP 缩略图资格）。 */
	const robotsMaxImagePreview =
		toolSlug && !String(opts.extraHeadHtml || '').includes('noindex')
			? `<meta name="robots" content="max-image-preview:large" />`
			: '';

	const alternateItems = (opts.alternates || []).filter((a) => a && a.lang && a.href);
	const xDefaultHref =
		alternateItems.find((a) => a.lang === 'en')?.href ||
		absoluteUrl(opts.canonicalPath);
	const alternateLinks = [
		...alternateItems.map(
			(a) => `<link rel="alternate" hreflang="${escapeHtml(a.lang)}" href="${escapeHtml(a.href)}" />`
		),
		`<link rel="alternate" hreflang="x-default" href="${escapeHtml(xDefaultHref)}" />`,
	].join('\n  ');

	/**
	 * 工具页自动注入 primary topic 可见面包屑（避免改遍 132 个 Page 文件）。
	 * 若内容已含 tool-topic-breadcrumb 则跳过，防止重复。
	 */
	let mainContentHtml = opts.contentHtml;
	if (toolSlug && !opts.contentHtml.includes('tool-topic-breadcrumb')) {
		const tool = getToolBySlug(toolSlug);
		if (tool?.primaryTopic) {
			const toolName = t(opts.lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default);
			mainContentHtml =
				renderAutoToolBreadcrumb(opts.lang, DEFAULT_LANG, toolSlug, toolName) + opts.contentHtml;
		}
	}

	/**
	 * 有 per-slug OG 资产时注入可见偏好图（与 og:image / JSON-LD 同 URL）。
	 * 插在首个 H1 前并与标题同一行，避免大图占满正文、看起来像当前页截图。
	 * 若页面已含 tool-preview-figure 则跳过，防止重复。
	 */
	if (toolSlug && hasToolOgImage(toolSlug) && !mainContentHtml.includes('tool-preview-figure')) {
		const tool = getToolBySlug(toolSlug);
		const alt = tool
			? t(opts.lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default)
			: toolSlug;
		const figureHtml = renderToolPreferredImageHtml(toolSlug, alt);
		if (/<h1\b/i.test(mainContentHtml)) {
			mainContentHtml = mainContentHtml.replace(
				/(<h1\b[^>]*>[\s\S]*?<\/h1>)/i,
				`<div class="tool-h1-with-logo">${figureHtml}$1</div>`
			);
		} else {
			mainContentHtml = `${figureHtml}\n${mainContentHtml}`;
		}
	}

	/** 侧栏内任意链接点击后收起移动端抽屉（兼容旧 `#toolNav a` 传参）。 */
	const sidebarAutoClose = opts.sidebarAutoCloseSelector
		? `
    document.querySelectorAll('#sidebar a').forEach((link) => {
      link.addEventListener('click', (e) => {
        try {
          const sidebar = document.getElementById('sidebar');
          const prevScroll = sidebar ? sidebar.scrollTop : 0;
          const href = link.getAttribute('href') || '';
          if (href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              const headerOffset = 56;
              const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
              window.scrollTo({ top: targetY, behavior: 'smooth' });
            }
          }
          link.blur();
          if (window.innerWidth < 768) {
            // Close the mobile drawer after navigating to a section.
            layout.classList.remove('sidebar-collapsed');
            layout.classList.add('sidebar-mobile-collapsed');
          }
          setTimeout(() => { if (sidebar) sidebar.scrollTop = prevScroll; }, 300);
        } catch (err) {}
      });
    });`
		: '';

	const includeToggle = opts.includeSidebarToggleScript !== false;
	/** 工具页「工具」菜单：点击展开/收起；桌面亦可悬停。 */
	const toolsMegaScript = `
  <script>
    (function () {
      var item = document.querySelector('.nav-item--tools-mega');
      if (!item) return;
      var toggle = item.querySelector('.nav-link--tools-mega');
      var panel = item.querySelector('.tools-mega-panel');
      if (!toggle || !panel) return;
      var mq = window.matchMedia('(min-width: 992px)');
      var closeTimer = null;
      var CLOSE_DELAY_MS = 220;

      function setOpen(open) {
        item.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      function clearCloseTimer() {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
      }

      function scheduleClose() {
        clearCloseTimer();
        closeTimer = setTimeout(function () {
          setOpen(false);
          closeTimer = null;
        }, CLOSE_DELAY_MS);
      }

      /** 切换右侧工具列表到指定主题 */
      function activateTopic(topicId) {
        if (!topicId) return;
        panel.querySelectorAll('.tools-mega-topic').forEach(function (btn) {
          var on = btn.getAttribute('data-topic-id') === topicId;
          btn.classList.toggle('is-active', on);
          btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        panel.querySelectorAll('.tools-mega-pane').forEach(function (pane) {
          var on = pane.getAttribute('data-topic-id') === topicId;
          pane.classList.toggle('is-active', on);
          if (on) pane.removeAttribute('hidden');
          else pane.setAttribute('hidden', '');
        });
      }

      panel.querySelectorAll('.tools-mega-topic').forEach(function (btn) {
        btn.addEventListener('mouseenter', function () {
          activateTopic(btn.getAttribute('data-topic-id'));
        });
        btn.addEventListener('focus', function () {
          activateTopic(btn.getAttribute('data-topic-id'));
        });
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          activateTopic(btn.getAttribute('data-topic-id'));
        });
      });

      item.addEventListener('mouseenter', function () {
        if (!mq.matches) return;
        clearCloseTimer();
        setOpen(true);
      });
      item.addEventListener('mouseleave', function () {
        if (!mq.matches) return;
        scheduleClose();
      });
      panel.addEventListener('mouseenter', function () {
        if (!mq.matches) return;
        clearCloseTimer();
        setOpen(true);
      });
      panel.addEventListener('mouseleave', function () {
        if (!mq.matches) return;
        scheduleClose();
      });

      /** 点击「工具」展开/收起（桌面与窄屏相同）；桌面仍可悬停打开。 */
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        clearCloseTimer();
        setOpen(!item.classList.contains('is-open'));
      });
      document.addEventListener('click', function (e) {
        if (!item.contains(e.target)) setOpen(false);
      });
    })();
  </script>`;
	const sidebarScript = includeToggle
		? `
  <script>
    const layout = document.getElementById('layoutRoot');
    const toggle = document.getElementById('sidebarToggle');
    if (layout && toggle) {
      toggle.addEventListener('click', () => {
        // Keep independent desktop and mobile states so the drawer opens correctly after resizing.
        if (window.innerWidth < 768) {
          layout.classList.remove('sidebar-collapsed');
          layout.classList.toggle('sidebar-mobile-collapsed');
        } else {
          layout.classList.remove('sidebar-mobile-collapsed');
          layout.classList.toggle('sidebar-collapsed');
        }
      });
      ${sidebarAutoClose}
    }
  </script>`
		: '';

	return `<!doctype html>
<html lang="${escapeHtml(opts.lang)}">
<head>
  <meta charset="utf-8" />
  ${THEME_BOOT_SCRIPT}
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${escapeHtml(canonical)}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${escapeHtml(canonical)}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${ogImageUrl}" />
  ${robotsMaxImagePreview}
  ${alternateLinks}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link href="${BOOTSTRAP_CSS}" rel="stylesheet" />
  <link href="${FONT_CSS}" rel="stylesheet" />
  <link href="/styles/site.css" rel="stylesheet" />
  <style>${sidebarCss}</style>
  ${CLARITY_SCRIPT}
  ${opts.extraHeadHtml || ''}
</head>
<body class="is-tool-page">
  ${opts.headerHtml}
  <div class="layout sidebar-mobile-collapsed" id="layoutRoot">
    ${opts.sidebarHtml}
    <main id="content" class="p-4">${mainContentHtml}</main>
  </div>
  ${opts.footerHtml}
  ${opts.extraBodyHtml || ''}
  <script src="${BOOTSTRAP_JS}" defer></script>
  <script src="/js/theme.js" defer></script>
  ${sidebarScript}
  ${toolsMegaScript}
</body>
</html>`;
};
