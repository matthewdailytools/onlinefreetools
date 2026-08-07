const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'pt', label: 'Português' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'ru', label: 'Русский' },
  { code: 'de', label: 'Deutsch' },
];

export const siteConfig = {
  brand: 'OnlineFreeTools.org',
  baseUrl: process.env.SITE_BASE_URL || 'https://onlinefreetools.org',
  ogImage: process.env.SITE_OG_IMAGE || 'https://onlinefreetools.org/og-image.png',
  /**
   * 公开联系邮箱（Privacy / Contact / 工具页反馈共用）。
   * 可用环境变量 SITE_CONTACT_EMAIL 覆盖。
   */
  contactEmail:
    process.env.SITE_CONTACT_EMAIL || 'dailyonetools@outlook.com',
  /** Google Search Console 站点所有权验证码（meta 标签 content） */
  googleSiteVerification:
    process.env.SITE_GOOGLE_SITE_VERIFICATION ||
    'DRJRq9AI8KKITkdiZbdd7zu4LxrIc38CPOd9OeK15FM',
  /**
   * Bing IndexNow 所有权 key（须与 public/{key}.txt 正文一致，且可公开访问）。
   * IndexNow key 是协议要求的验证公钥，不是私密 API Token。
   * 可用环境变量 INDEXNOW_KEY 覆盖。
   */
  indexNowKey:
    process.env.INDEXNOW_KEY || '8212779ba7e9451aa4faed4cfd20ded4',
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
