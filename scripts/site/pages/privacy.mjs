/**
 * Privacy Policy 页模型：本地处理、边缘请求、分析与联系方式。
 */
import { getInfoPageModel } from './info-page.mjs';

/**
 * 生成指定语言的 Privacy 页渲染模型。
 * @param {string} lang 语言代码
 */
export const getPrivacyPageModel = (lang) =>
  getInfoPageModel({
    lang,
    path: '/privacy',
    titleKey: 'privacy_title',
    descriptionKey: 'privacy_description',
    introKey: 'privacy_intro',
    schemaType: 'WebPage',
    sidebarId: 'privacyNav',
    sections: [
      { id: 'local', titleKey: 'privacy_local_title', bodyKey: 'privacy_local_body' },
      { id: 'edge', titleKey: 'privacy_edge_title', bodyKey: 'privacy_edge_body' },
      { id: 'workers_ai', titleKey: 'privacy_workers_ai_title', bodyKey: 'privacy_workers_ai_body' },
      { id: 'analytics', titleKey: 'privacy_analytics_title', bodyKey: 'privacy_analytics_body' },
      { id: 'retention', titleKey: 'privacy_retention_title', bodyKey: 'privacy_retention_body' },
      { id: 'contact', titleKey: 'privacy_contact_title', bodyKey: 'privacy_contact_body' },
    ],
  });
