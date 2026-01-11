import type { Hono } from 'hono';
import type { SiteLang } from './i18n';
import { isSupportedLang } from './i18n';
import { getEnabledLangs, getDefaultLang, withLangPrefix, getExplicitLangFromPath } from './lang';

type App = InstanceType<typeof Hono>;

// renderFn should return an HTML string (synchronously)
export const registerToolPage = (
  app: App,
  toolName: string,
  renderFn: (lang: SiteLang, defaultLang: SiteLang, enabledLangs: SiteLang[]) => string
) => {
  // canonical tool page (no lang prefix)
  app.get(`/tools/${toolName}`, (c: any) => {
    const enabled = getEnabledLangs(c.env);
    const defaultLang = getDefaultLang(c.env, enabled);
    const html = renderFn(defaultLang, defaultLang, enabled);
    return c.html(html);
  });

  // localized tool page
  app.get(`/:lang/tools/${toolName}`, (c: any) => {
    const langParam = c.req.param('lang');
    const enabled = getEnabledLangs(c.env);
    const defaultLang = getDefaultLang(c.env, enabled);
    if (!isSupportedLang(langParam)) {
      return c.redirect(withLangPrefix(defaultLang, `/tools/${toolName}`, defaultLang), 302);
    }
    // Use explicit supported language even if not in enabled list
    const lang = (isSupportedLang(langParam) ? (langParam as SiteLang) : defaultLang) as SiteLang;
    const html = renderFn(lang, defaultLang, enabled);
    return c.html(html);
  });
};

export default registerToolPage;
