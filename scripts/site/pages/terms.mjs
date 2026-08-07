/**
 * Terms of Use 页模型：可接受使用、无担保、非专业建议与变更说明。
 */
import { getInfoPageModel } from './info-page.mjs';

/**
 * 生成指定语言的 Terms 页渲染模型。
 * @param {string} lang 语言代码
 */
export const getTermsPageModel = (lang) =>
  getInfoPageModel({
    lang,
    path: '/terms',
    titleKey: 'terms_title',
    descriptionKey: 'terms_description',
    introKey: 'terms_intro',
    schemaType: 'WebPage',
    sidebarId: 'termsNav',
    sections: [
      { id: 'use', titleKey: 'terms_use_title', bodyKey: 'terms_use_body' },
      { id: 'warranty', titleKey: 'terms_warranty_title', bodyKey: 'terms_warranty_body' },
      { id: 'advice', titleKey: 'terms_advice_title', bodyKey: 'terms_advice_body' },
      { id: 'changes', titleKey: 'terms_changes_title', bodyKey: 'terms_changes_body' },
    ],
  });
