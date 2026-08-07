/**
 * Contact 页模型：公开邮箱、工具页反馈入口与回复预期。
 */
import { getInfoPageModel } from './info-page.mjs';

/**
 * 生成指定语言的 Contact 页渲染模型。
 * @param {string} lang 语言代码
 */
export const getContactPageModel = (lang) =>
  getInfoPageModel({
    lang,
    path: '/contact',
    titleKey: 'contact_title',
    descriptionKey: 'contact_description',
    introKey: 'contact_intro',
    schemaType: 'ContactPage',
    sidebarId: 'contactNav',
    sections: [
      { id: 'email', titleKey: 'contact_email_title', bodyKey: 'contact_email_body' },
      { id: 'feedback', titleKey: 'contact_feedback_title', bodyKey: 'contact_feedback_body' },
      { id: 'response', titleKey: 'contact_response_title', bodyKey: 'contact_response_body' },
    ],
  });
