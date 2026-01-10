export const siteConfig = {
  brand: 'Online Free Tools',
  baseUrl: process.env.SITE_BASE_URL || 'https://www.onlinefreetools.org',
  ogImage: process.env.SITE_OG_IMAGE || 'https://www.onlinefreetools.org/og-image.png',
  defaultLang: (process.env.SITE_DEFAULT_LANG || 'zh').trim(),
  languages: [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
  ],
  enabledLangs: (() => {
    const raw = (process.env.SITE_LANGS || '').trim();
    const list = raw
      ? raw
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : [((process.env.SITE_DEFAULT_LANG || 'zh').trim() || 'zh')];

    const set = new Set(list);
    set.add((process.env.SITE_DEFAULT_LANG || 'zh').trim() || 'zh');
    return Array.from(set);
  })(),
};

const getPathPrefix = (lang) => (lang === siteConfig.defaultLang ? '' : `/${lang}`);

export const getLangConfig = (lang) =>
  (() => {
    const picked =
      siteConfig.languages.find((l) => l.code === lang) ||
      siteConfig.languages.find((l) => l.code === siteConfig.defaultLang) ||
      siteConfig.languages[0];
    return {
      code: picked.code,
      label: picked.label,
      pathPrefix: getPathPrefix(picked.code),
    };
  })();

export const withLangPath = (lang, pathname) => {
  const { pathPrefix } = getLangConfig(lang);
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${pathPrefix}${safePath}`;
};

export const absoluteUrl = (pathname) => {
  const base = siteConfig.baseUrl.replace(/\/$/, '');
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${safePath}`;
};
