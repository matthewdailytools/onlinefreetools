const translations = {
  zh: {
    brand: 'Online Free Tools',
    nav_home: '首页',
    nav_devlogs: '开发日志',
    nav_featured: '推荐',
    nav_all_tools: '全部工具',
    search_placeholder: '搜索工具',
    search_button: '搜索',
    sidebar_categories: '分类',
    back_home: '返回首页',
    back_devlogs: '返回日志清单',
    devlogs_title: '开发日志清单',
    devlogs_subtitle: '按日期列出所有问答记录，点击打开查看详情。',
    footer_text: 'Online Free Tools · 学习项目 · 持续迭代',
  },
  en: {
    brand: 'Online Free Tools',
    nav_home: 'Home',
    nav_devlogs: 'Dev Logs',
    nav_featured: 'Featured',
    nav_all_tools: 'All Tools',
    search_placeholder: 'Search tools',
    search_button: 'Search',
    sidebar_categories: 'Categories',
    back_home: 'Back to Home',
    back_devlogs: 'Back to Logs',
    devlogs_title: 'Dev Logs',
    devlogs_subtitle: 'Browse Q&A and implementation notes by date.',
    footer_text: 'Online Free Tools · Learning project · Iterating',
  },
};

export const t = (lang, key) => {
  const table = translations[lang] || translations.zh;
  return table[key] || translations.zh[key] || key;
};

export const hasLang = (lang) => Boolean(translations[lang]);
