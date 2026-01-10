const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
];

export const siteConfig = {
  brand: 'Online Free Tools',
  baseUrl: process.env.SITE_BASE_URL || 'https://www.onlinefreetools.org',
  ogImage: process.env.SITE_OG_IMAGE || 'https://www.onlinefreetools.org/og-image.png',
  defaultLang: (process.env.SITE_DEFAULT_LANG || 'en').trim(),
  languages,
  enabledLangs: (() => {
    const raw = (process.env.SITE_LANGS || '').trim();
    const list = raw
      ? raw
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : [
          ...new Set(
            [
              ...languages.map((l) => l.code),
              ((process.env.SITE_DEFAULT_LANG || 'en').trim() || 'en'),
            ].filter(Boolean)
          ),
        ];

    const set = new Set(list);
    set.add((process.env.SITE_DEFAULT_LANG || 'en').trim() || 'en');
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

// Explicit language URLs for user-selected language switching.
// Always includes `/<lang>` prefix, even for the default language.
export const withExplicitLangPath = (lang, pathname) => {
  const safeLang = String(lang || '').trim();
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `/${safeLang}${safePath}`.replace(/\/{2,}/g, '/');
};

export const absoluteUrl = (pathname) => {
  const base = siteConfig.baseUrl.replace(/\/$/, '');
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${safePath}`;
};
