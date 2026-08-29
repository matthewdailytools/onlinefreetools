/**
 * 首页模型：顶栏导航与内容（无侧栏）。
 */
import { t } from '../i18n.mjs';
import { withLangPath } from '../config.mjs';
import { renderHomeContent } from '../components.mjs';
import { buildHomeNavItems } from '../nav.mjs';

/**
 * 生成指定语言的首页模型。
 * @param {string} lang
 */
export const getHomePageModel = (lang) => {
  /** 首页顶栏分类下拉 + 场景/类型 + 开发日志（保持原样，不用巨型「工具」菜单） */
  const navItems = buildHomeNavItems(lang);
  /** 首页 title（SEO） */
  const title = t(lang, 'home_title');
  /** 首页 description（SEO） */
  const description = t(lang, 'home_description');
  /** 首页主体 HTML（Hero / Why / 最新上线 / 分类目录） */
  const contentHtml = renderHomeContent({ lang });

  return {
    title,
    description,
    canonicalPath: withLangPath(lang, '/'),
    navItems,
    contentHtml,
  };
};
