
import type { SiteLang as _SiteLang } from './i18n/types';

export type SiteLang = _SiteLang;
import en from './i18n/en';
import zh from './i18n/zh';
import es from './i18n/es';
import ar from './i18n/ar';
import pt from './i18n/pt';
import id from './i18n/id';
import fr from './i18n/fr';
import ja from './i18n/ja';
import ru from './i18n/ru';
import de from './i18n/de';

export const langLabels: Record<SiteLang, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  ar: 'العربية',
  pt: 'Português',
  id: 'Bahasa Indonesia',
  fr: 'Français',
  ja: '日本語',
  ru: 'Русский',
  de: 'Deutsch',
};

export const getLangLabel = (lang: SiteLang) => langLabels[lang] || String(lang);

export const supportedLangs: SiteLang[] = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

export const isSupportedLang = (lang: string): lang is SiteLang =>
  (supportedLangs as readonly string[]).includes(lang);

const dict: Record<SiteLang, typeof en> = {
  en,
  zh,
  es,
  ar,
  pt,
  id,
  fr,
  ja,
  ru,
  de,
};

export const t = (lang: SiteLang, key: keyof typeof en): string => {
  // 优先当前语言，其次英文，最后中文，找不到返回 key
  return (dict[lang] as any)[key] ?? (dict.en as any)[key] ?? (dict.zh as any)[key] ?? String(key);
};
