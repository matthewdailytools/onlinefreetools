import { t } from '../i18n.mjs';
import { withLangPath } from '../config.mjs';

export const getHomePageModel = (lang) => {
  const navItems = [
    { href: '#featured', label: t(lang, 'nav_featured') },
    { href: '#all-tools', label: t(lang, 'nav_all_tools') },
    { href: withLangPath(lang, '/devlogs/'), label: t(lang, 'nav_devlogs') },
  ];

  const sidebarTitle = t(lang, 'sidebar_categories');
  const sidebarItems =
    lang === 'en'
      ? [
          { href: '#cat-text', label: 'Text' },
          { href: '#cat-dev', label: 'Developer' },
        ]
      : [
          { href: '#cat-text', label: '文本工具' },
          { href: '#cat-dev', label: '开发者工具' },
        ];

  const title =
    lang === 'en' ? 'Online Free Tools | Home' : 'Online Free Tools | 学习项目首页';
  const description =
    lang === 'en'
      ? 'Online Free Tools learning project: a collection of small online utilities for mobile and desktop.'
      : 'Online Free Tools 学习项目，聚合多类在线小工具，支持移动与桌面访问。';

  const featuredH2 = lang === 'en' ? 'Featured' : '推荐';
  const viewAll = lang === 'en' ? 'View all' : '查看全部';
  const allToolsH2 = lang === 'en' ? 'All Tools' : '全部工具';

  const toolHeadersHref = withLangPath(lang, '/tools/website-headers');
  const toolHeadersTitle = lang === 'en' ? 'Website Headers' : '获取网站响应 Header';
  const toolHeadersDesc =
    lang === 'en'
      ? 'Fetch and view HTTP response headers for a given URL.'
      : '输入网址，查询该网站的 HTTP 响应 Header。';

  const toolMdHref = withLangPath(lang, '/tools/markdown-to-html.html');
  const toolMdTitle = lang === 'en' ? 'Markdown → HTML' : 'Markdown 转 HTML';
  const toolMdDesc = lang === 'en' ? 'Render Markdown into HTML.' : '将 Markdown 快速渲染为 HTML。';

  const contentHtml = `
    <section id="featured" class="mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 mb-0">${featuredH2}</h2>
        <a class="btn btn-sm btn-outline-secondary" href="#all-tools">${viewAll}</a>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${toolHeadersTitle}</h5>
              <p class="card-text text-muted">${toolHeadersDesc}</p>
              <a href="${toolHeadersHref}" class="btn btn-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${toolMdTitle}</h5>
              <p class="card-text text-muted">${toolMdDesc}</p>
              <a href="${toolMdHref}" class="btn btn-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="all-tools">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 mb-0">${allToolsH2}</h2>
      </div>

      <div class="mb-4" id="cat-text">
        <div class="d-flex align-items-center mb-2">
          <span class="badge text-bg-secondary me-2">${lang === 'en' ? 'Text' : '文本工具'}</span>
          <span class="text-muted small">${lang === 'en' ? 'format, diff, generate' : '格式化、对比、生成'}</span>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${toolMdTitle}</h6>
                <p class="card-text small text-muted">${toolMdDesc}</p>
                <a href="${toolMdHref}" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4" id="cat-dev">
        <div class="d-flex align-items-center mb-2">
          <span class="badge text-bg-secondary me-2">${lang === 'en' ? 'Developer' : '开发者工具'}</span>
          <span class="text-muted small">${lang === 'en' ? 'debug, generate, validate' : '调试、生成、校验'}</span>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${toolHeadersTitle}</h6>
                <p class="card-text small text-muted">${toolHeadersDesc}</p>
                <a href="${toolHeadersHref}" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    title,
    description,
    canonicalPath: withLangPath(lang, '/'),
    navItems,
    sidebarTitle,
    sidebarItems,
    contentHtml,
  };
};
