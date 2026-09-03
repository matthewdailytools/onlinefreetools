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

/**
 * 用户显式选择语言后写入的偏好 Cookie 名（与顶栏 `data-lang-pref` 脚本一致）。
 * 仅在用户点击语言菜单或确认语言提示条后写入；Accept-Language 检测不写此 Cookie。
 */
export const LANG_PREF_COOKIE = 'oft_lang';

/**
 * 语言提示条已展示次数 Cookie（与顶栏脚本一致）。
 * 达到 {@link LANG_HINT_MAX_SHOWS} 后不再展示。
 */
export const LANG_HINT_COUNT_COOKIE = 'oft_lang_hint_n';

/** 语言提示条每个访客最多展示次数。 */
export const LANG_HINT_MAX_SHOWS = 3;

/** 语言偏好 Cookie 有效期（秒）：一年。 */
export const LANG_PREF_MAX_AGE_SEC = 60 * 60 * 24 * 365;

/**
 * 解析 Cookie 请求头为名值表（仅拆第一层 `;` / `=`，不做完整 RFC 解析）。
 * @param cookieHeader `Cookie` 请求头，可为 null
 */
export const parseCookieHeader = (cookieHeader: string | null): Record<string, string> => {
  if (!cookieHeader) return {};
  const out: Record<string, string> = {};
  for (const part of cookieHeader.split(';')) {
    const idx = part.indexOf('=');
    if (idx <= 0) continue;
    const name = part.slice(0, idx).trim();
    const raw = part.slice(idx + 1).trim();
    if (!name) continue;
    try {
      out[name] = decodeURIComponent(raw);
    } catch {
      out[name] = raw;
    }
  }
  return out;
};

/**
 * 从 Cookie 读取已启用的语言偏好；无效或未设置时返回 null。
 * @param cookieHeader `Cookie` 请求头
 * @param enabled 站点启用语言列表
 */
export const getLangPrefFromCookie = (
  cookieHeader: string | null,
  enabled: SiteLang[]
): SiteLang | null => {
  const raw = parseCookieHeader(cookieHeader)[LANG_PREF_COOKIE];
  if (!raw) return null;
  const code = String(raw).trim().toLowerCase();
  if (isSupportedLang(code) && enabled.includes(code as SiteLang)) return code as SiteLang;
  return null;
};

/**
 * 生成 `Set-Cookie` 头值，持久化用户语言偏好。
 * @param lang 偏好语言码
 * @param opts.secure 是否附加 Secure（HTTPS 下为 true）
 */
export const buildLangPrefSetCookie = (
  lang: SiteLang,
  opts?: { secure?: boolean }
): string => {
  const parts = [
    `${LANG_PREF_COOKIE}=${encodeURIComponent(lang)}`,
    'Path=/',
    `Max-Age=${LANG_PREF_MAX_AGE_SEC}`,
    'SameSite=Lax',
  ];
  if (opts?.secure) parts.push('Secure');
  return parts.join('; ');
};

/**
 * 解析用户显式语言偏好：仅读 Cookie；无 Cookie 时返回默认语。
 * Accept-Language 不再触发服务端跳转（改由顶栏提示条客户端处理）。
 * @param opts.cookieHeader `Cookie` 请求头
 * @param opts.enabled 启用语言
 * @param opts.defaultLang 默认（无前缀）语言
 */
export const resolvePreferredLang = (opts: {
  cookieHeader: string | null;
  enabled: SiteLang[];
  defaultLang: SiteLang;
}): SiteLang => {
  const fromCookie = getLangPrefFromCookie(opts.cookieHeader, opts.enabled);
  if (fromCookie) return fromCookie;
  return opts.defaultLang;
};

export default {};
