import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { getToolBySlug } from '../../site/tools';
import { TOPIC_I18N_KEYS, topicLeafPath } from '../../site/topics';

const SITE_BASE_URL = 'https://onlinefreetools.org';
const DEFAULT_LANG: SiteLang = 'en';

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
 * 工具页可见面包屑：Home → primary topic → 工具名。
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
	return `
<nav class="mb-3 small tool-topic-breadcrumb" aria-label="breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="${escapeHtml(homeHref)}">${escapeHtml(t(lang, 'nav_home'))}</a></li>
    <li class="breadcrumb-item"><a href="${escapeHtml(topicHref)}">${escapeHtml(topicLabel)}</a></li>
    <li class="breadcrumb-item active" aria-current="page">${escapeHtml(toolName)}</li>
  </ol>
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
	const ogImageUrl = escapeHtml(opts.ogImageUrl);

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
	const toolSlugMatch = opts.canonicalPath.match(/\/tools\/([^/]+)\/?$/);
	if (toolSlugMatch && !opts.contentHtml.includes('tool-topic-breadcrumb')) {
		const slug = toolSlugMatch[1];
		const tool = getToolBySlug(slug);
		if (tool?.primaryTopic) {
			const toolName = t(opts.lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default);
			mainContentHtml =
				renderAutoToolBreadcrumb(opts.lang, DEFAULT_LANG, slug, toolName) + opts.contentHtml;
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
	/** 工具页「工具」菜单：两级主题面板 + 桌面延时关闭 + 窄屏点击。 */
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

      toggle.addEventListener('click', function (e) {
        if (mq.matches) return;
        e.preventDefault();
        setOpen(!item.classList.contains('is-open'));
      });
      document.addEventListener('click', function (e) {
        if (mq.matches) return;
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
