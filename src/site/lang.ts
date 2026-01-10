import { isSupportedLang, supportedLangs, type SiteLang } from './i18n';

export const getLangFromPath = (pathname: string, defaultLang: SiteLang): SiteLang => {
  const seg = pathname.replace(/^\/+/, '').split('/')[0];
  if (isSupportedLang(seg)) return seg;
  return defaultLang;
};

export const stripLangPrefix = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isSupportedLang(parts[0])) {
    return '/' + parts.slice(1).join('/');
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
};

export const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang): string => {
  const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (lang === defaultLang) return safe;
  return `/${lang}${safe}`;
};

export const langAlternatesForPath = (
  pathname: string,
  defaultLang: SiteLang
): Record<SiteLang, string> => {
  const base = stripLangPrefix(pathname);
  return Object.fromEntries(
    supportedLangs.map((l) => [l, withLangPrefix(l, base, defaultLang)])
  ) as Record<SiteLang, string>;
};
