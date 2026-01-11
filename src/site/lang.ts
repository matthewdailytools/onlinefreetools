import { isSupportedLang, supportedLangs, type SiteLang } from './i18n';

export const DEFAULT_LANGS: SiteLang[] = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

const parseLangList = (raw: string | undefined) => {
  const items = String(raw || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  return Array.from(new Set(items));
};

export const getEnabledLangs = (env: any): SiteLang[] => {
  const list = parseLangList(env.SITE_LANGS);
  const enabled = list.filter((x) => isSupportedLang(x)) as SiteLang[];
  const fallback = getFallbackLang(env);
  const out = Array.from(new Set([...(enabled.length ? enabled : DEFAULT_LANGS), fallback]));
  return out as SiteLang[];
};

export const getFallbackLang = (env: any): SiteLang => {
  const raw = (env.SITE_DEFAULT_LANG || 'en').trim();
  return (isSupportedLang(raw) ? raw : 'en') as SiteLang;
};

export const getDefaultLang = (env: any, enabled: SiteLang[]): SiteLang => {
  const fallback = getFallbackLang(env);
  return enabled.includes(fallback) ? fallback : (enabled[0] || fallback);
};

export const parseAcceptLanguage = (value: string | null) => {
  if (!value) return [] as { tag: string; q: number }[];
  return value
    .split(',')
    .map((part) => {
      const [tagRaw, ...params] = part.trim().split(';');
      let q = 1;
      for (const p of params) {
        const m = p.trim().match(/^q=(0(\.\d+)?|1(\.0+)?)$/);
        if (m) q = Number(m[1]);
      }
      return { tag: tagRaw.trim().toLowerCase(), q };
    })
    .filter((x) => x.tag)
    .sort((a, b) => b.q - a.q);
};

export const pickLang = (acceptLanguage: string | null, enabled: SiteLang[], fallback: SiteLang): SiteLang => {
  const candidates = parseAcceptLanguage(acceptLanguage);
  for (const c of candidates) {
    const primary = c.tag.split('-')[0];
    if (isSupportedLang(primary) && enabled.includes(primary as SiteLang)) return primary as SiteLang;
  }
  if (enabled.includes(fallback)) return fallback;
  return enabled[0] || fallback;
};

export const getExplicitLangFromPath = (pathname: string, enabled: SiteLang[]) => {
  const seg = pathname.replace(/^\/+/, '').split('/')[0].toLowerCase();
  if (isSupportedLang(seg)) return seg as SiteLang;
  return null;
};

export const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
  const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const getLangFromPath = (pathname: string, defaultLang: SiteLang): SiteLang => {
  const seg = pathname.replace(/^\/+/, '').split('/')[0];
  if (isSupportedLang(seg)) return seg as SiteLang;
  return defaultLang;
};

export const stripLangPrefix = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isSupportedLang(parts[0])) {
    const rest = parts.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
};

export const langAlternatesForPath = (
  pathname: string,
  defaultLang: SiteLang
): Record<SiteLang, string> => {
  const base = stripLangPrefix(pathname);
  return Object.fromEntries(supportedLangs.map((l) => [l, withLangPrefix(l, base, defaultLang)])) as Record<SiteLang, string>;
};

export default {};
