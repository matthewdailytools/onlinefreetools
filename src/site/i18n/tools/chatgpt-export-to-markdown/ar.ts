/**
 * شريحة i18n (chatgpt-export-to-markdown / ar).
 * العنوان المحلي: تصدير ChatGPT إلى Markdown.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'حوّل تصدير ChatGPT إلى Markdown في هذه الصفحة. الصق JSON أو أسقطه، واحصل على أدوار مقروءة، ويمكنك التبديل إلى JSON أو CSV. صادرات Claude على اللوحة نفسها. تبقى الملفات على الجهاز ولا تُرفع إلى خادم.',
	tool_chatgpt_export_to_markdown_choose_file: 'اختر ملفًا',
	tool_chatgpt_export_to_markdown_clear: 'مسح',
	tool_chatgpt_export_to_markdown_convert: 'حوّل',
	tool_chatgpt_export_to_markdown_copy: 'انسخ',
	tool_chatgpt_export_to_markdown_desc: 'صدّر ChatGPT إلى Markdown (شرائح JSON/CSV)؛ تبقى على الجهاز دون رفع.',
	tool_chatgpt_export_to_markdown_description:
		'تصدير ChatGPT إلى Markdown: أسقط أو الصق JSON التصدير، عيّن أدوار المستخدم/المساعد، نزّل Markdown. مثال: محادثة العينة تصبح Markdown عند الفتح. JSON وCSV شرائح إخراج. تُكتشف chat_messages من Claude في الصفحة نفسها. تبقى الملفات على الجهاز ولا تُرفع إلى خادم. ليست عدّاد رموز ولا مزامنة سحابية.',
	tool_chatgpt_export_to_markdown_download: 'نزّل',
	tool_chatgpt_export_to_markdown_drop_hint: 'أسقط JSON للمحادثات أو الصقه أدناه. التحليل في هذا التبويب فقط.',
	tool_chatgpt_export_to_markdown_empty: 'الصق التصدير أو اختر ملفًا أولًا.',
	tool_chatgpt_export_to_markdown_err_none: 'لا أدوار. تأكد أن JSON يحوي mapping أو messages أو chat_messages.',
	tool_chatgpt_export_to_markdown_err_parse: 'تعذّر قراءة JSON. الصق تصدير ChatGPT أو Claude صالحًا.',
	tool_chatgpt_export_to_markdown_example:
		'تحميل المثال يدرج JSON mapping لجولتين، يحوّله إلى Markdown بعناوين User وAssistant، ويفعّل النسخ والتنزيل.',
	tool_chatgpt_export_to_markdown_example_title: 'مثال',
	tool_chatgpt_export_to_markdown_faq_a1: 'لا. يُقرأ التصدير في هذا التبويب. لا شيء يذهب إلى OpenAI أو Anthropic أو خوادمنا.',
	tool_chatgpt_export_to_markdown_faq_a2: 'المسار الرئيسي تصدير بيانات ChatGPT بشجرة mapping. تُقبل أيضًا مصفوفات role/content وchat_messages من Claude.',
	tool_chatgpt_export_to_markdown_faq_a3: 'نعم. مصفوفات chat_messages الخاصة بـ Claude (sender + text) يحللها المحوّل نفسه، فلصقة واحدة تكفي لملفات تصدير ChatGPT وClaude معًا.',
	tool_chatgpt_export_to_markdown_faq_a4: 'تُتخطى عقد system الفارغة وأصداف tool بلا نص. لا تُعاد المرفقات كملفات.',
	tool_chatgpt_export_to_markdown_faq_a5: 'عدّ الرموز مهمة أخرى وليست جزءًا من هذا المحوّل. استخدم عدّاد رموز مخصصًا عند الحاجة.',
	tool_chatgpt_export_to_markdown_faq_q1: 'هل يُرفع محادثتي؟',
	tool_chatgpt_export_to_markdown_faq_q2: 'أي أشكال تصدير تعمل؟',
	tool_chatgpt_export_to_markdown_faq_q3: 'هل يعمل تصدير Claude؟',
	tool_chatgpt_export_to_markdown_faq_q4: 'ما الحقول التي تُسقط؟',
	tool_chatgpt_export_to_markdown_faq_q5: 'هل هذا عدّاد رموز؟',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: 'صيغة الإخراج',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body: 'صدّر المحادثة، الصق JSON أو أسقطه، حوّل إلى Markdown ثم انسخ أو نزّل. JSON وCSV شرائح لنفس المهمة.',
	tool_chatgpt_export_to_markdown_how_item_1: 'احصل على تصدير بيانات ChatGPT (أو JSON لـ Claude) — المهمة تصدير ChatGPT إلى Markdown.',
	tool_chatgpt_export_to_markdown_how_item_2: 'أسقط الملف أو الصق JSON في المربع.',
	tool_chatgpt_export_to_markdown_how_item_3: 'أبقِ Markdown إلا إذا احتجت شريحة JSON أو CSV.',
	tool_chatgpt_export_to_markdown_how_item_4: 'انسخ أو نزّل. انقر «حمّل مثالًا» لملء العرض التوضيحي.',
	tool_chatgpt_export_to_markdown_how_title: 'كيف يعمل',
	tool_chatgpt_export_to_markdown_input_label: 'JSON التصدير',
	tool_chatgpt_export_to_markdown_input_ph: 'الصق JSON للمحادثات هنا…',
	tool_chatgpt_export_to_markdown_load_sample: 'حمّل مثالًا',
	tool_chatgpt_export_to_markdown_output_label: 'النتيجة',
	tool_chatgpt_export_to_markdown_role_assistant: 'المساعد',
	tool_chatgpt_export_to_markdown_role_system: 'النظام',
	tool_chatgpt_export_to_markdown_role_tool: 'الأداة',
	tool_chatgpt_export_to_markdown_role_user: 'المستخدم',
	tool_chatgpt_export_to_markdown_rules_body: 'تحويل التصدير يحتاج خريطة حقول وMarkdown افتراضيًا وخصوصية واضحة عن المعالجة المحلية.',
	tool_chatgpt_export_to_markdown_rules_item_1: 'الإخراج الافتراضي Markdown بأقسام ## المستخدم / ## المساعد وعنوان # اختياري.',
	tool_chatgpt_export_to_markdown_rules_item_2: 'أشجار mapping لـ ChatGPT والمصفوفات المسطحة وchat_messages لـ Claude تُحلل في صفحة واحدةحدة.',
	tool_chatgpt_export_to_markdown_rules_item_3: 'رقائق JSON وCSV تعيد إخراج الأدوار نفسها للأنابيب أو الجداول.',
	tool_chatgpt_export_to_markdown_rules_item_4: 'صيغ المزودين تتغير. إن فشل التحليل الصق JSON الخام وراجع الأسئلة.',
	tool_chatgpt_export_to_markdown_rules_title: 'قواعد تتوقعها',
	tool_chatgpt_export_to_markdown_status_copied: 'نُسخ إلى الحافظة.',
	tool_chatgpt_export_to_markdown_status_done: 'جاهز — {n} أدوار ({source}).',
	tool_chatgpt_export_to_markdown_status_working: 'جارٍ تحليل التصدير…',
	tool_chatgpt_export_to_markdown_title: 'تصدير ChatGPT إلى Markdown',
	tool_chatgpt_export_to_markdown_usecase_1: 'أرشف تصدير ChatGPT لليوم كـ Markdown قبل حذف الخيط.',
	tool_chatgpt_export_to_markdown_usecase_2: 'انتقل إلى CSV عندما تحتاج أعمدة role/content لجدول.',
	tool_chatgpt_export_to_markdown_usecase_3: 'أسقط JSON chat_messages من Claude هنا؛ يحوّل المحوّل نفسه تلك الأدوار إلى Markdown.',
	tool_chatgpt_export_to_markdown_usecases_title: 'حالات مناسبة',
};

export default ar;
