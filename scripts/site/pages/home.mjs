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
          { href: '#cat-image', label: 'Image' },
          { href: '#cat-dev', label: 'Developer' },
          { href: '#cat-convert', label: 'Convert' },
          { href: '#cat-misc', label: 'More' },
        ]
      : [
          { href: '#cat-text', label: '文本工具' },
          { href: '#cat-image', label: '图像工具' },
          { href: '#cat-dev', label: '开发者工具' },
          { href: '#cat-convert', label: '格式转换' },
          { href: '#cat-misc', label: '更多' },
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
              <h5 class="card-title">${lang === 'en' ? 'JSON Formatter' : 'JSON 格式化'}</h5>
              <p class="card-text text-muted">${lang === 'en' ? 'Pretty-print and validate JSON.' : '快速美化与校验 JSON。'}</p>
              <a href="#" class="btn btn-primary btn-sm">${lang === 'en' ? 'Open' : '开始使用'}</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${lang === 'en' ? 'Image Compress' : '图片压缩'}</h5>
              <p class="card-text text-muted">${lang === 'en' ? 'Compress images with good balance.' : '在线压缩，保持清晰度与体积平衡。'}</p>
              <a href="#" class="btn btn-primary btn-sm">${lang === 'en' ? 'Open' : '开始使用'}</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${lang === 'en' ? 'Regex Tester' : '正则测试'}</h5>
              <p class="card-text text-muted">${lang === 'en' ? 'Test and highlight matches in real time.' : '实时匹配与高亮，便于调试表达式。'}</p>
              <a href="#" class="btn btn-primary btn-sm">${lang === 'en' ? 'Open' : '开始使用'}</a>
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
                <h6 class="card-title">${lang === 'en' ? 'Markdown → HTML' : 'Markdown 转 HTML'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Render Markdown into HTML.' : '将 Markdown 快速渲染为 HTML。'}</p>
                <a href="/tools/markdown-to-html.html" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${lang === 'en' ? 'Remove Duplicate Lines' : '文本去重'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Deduplicate lines and keep uniques.' : '去除重复行，保持唯一列表。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4" id="cat-image">
        <div class="d-flex align-items-center mb-2">
          <span class="badge text-bg-secondary me-2">${lang === 'en' ? 'Image' : '图像工具'}</span>
          <span class="text-muted small">${lang === 'en' ? 'compress, crop, convert' : '压缩、裁剪、转换'}</span>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${lang === 'en' ? 'Image Crop' : '图片裁剪'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Crop by ratio or custom size.' : '按比例或自定义尺寸裁剪。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${lang === 'en' ? 'Format Convert' : '格式转换'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Convert between JPG/PNG/WebP.' : 'JPG/PNG/WebP 互转。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
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
                <h6 class="card-title">${lang === 'en' ? 'UUID Generator' : 'UUID 生成'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Generate multiple UUIDs.' : '一键生成多组 UUID。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${lang === 'en' ? 'Base64 Encode/Decode' : 'Base64 编解码'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Encode/decode text snippets quickly.' : '快速编解码文本或文件片段。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4" id="cat-convert">
        <div class="d-flex align-items-center mb-2">
          <span class="badge text-bg-secondary me-2">${lang === 'en' ? 'Convert' : '格式转换'}</span>
          <span class="text-muted small">${lang === 'en' ? 'docs, data, media' : '文档、数据与媒体'}</span>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${lang === 'en' ? 'CSV ↔ JSON' : 'CSV ↔ JSON'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Convert table data and JSON.' : '数据表与 JSON 快速互转。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${lang === 'en' ? 'Unit Converter' : '单位换算'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Length, weight, temperature, etc.' : '长度、重量、温度常用换算。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4" id="cat-misc">
        <div class="d-flex align-items-center mb-2">
          <span class="badge text-bg-secondary me-2">${lang === 'en' ? 'More' : '更多'}</span>
          <span class="text-muted small">${lang === 'en' ? 'misc utilities' : '杂项工具合集'}</span>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${lang === 'en' ? 'Timer' : '倒计时/计时器'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Lightweight timing helper.' : '轻量计时辅助。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">${lang === 'en' ? 'Random Generator' : '随机数生成'}</h6>
                <p class="card-text small text-muted">${lang === 'en' ? 'Configurable range and count.' : '可设置范围与数量。'}</p>
                <a href="#" class="btn btn-outline-primary btn-sm">${lang === 'en' ? 'Open' : '打开'}</a>
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
