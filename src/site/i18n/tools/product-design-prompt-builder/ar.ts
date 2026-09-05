/**
 * i18n tool shard (product-design-prompt-builder / ar).
 * عبارات البحث العربية: «أداة إنشاء برومبت لتصميم المنتجات»، «برومبت لملخص UX». العبارة الرئيسية في H1، والعبارات الفرعية (الشخصية المستهدفة، نطاق الإطار السلكي، رموز التصميم، WCAG AA، إخراج JSON) في الوصف والأسئلة الشائعة وحالات الاستخدام.
 * الحدود الفعلية: التجميع داخل المتصفح بلا طلبات؛ «توسيع/تنقيح» الاختياري يرسل المسودة إلى Cloudflare Workers AI (يلزم Turnstile وهناك حد)، والجواب يستبدل منطقة النتيجة بالكامل.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'حوِّل مهمة تصميم منتج إلى برومبت جاهز للّصق: اكتب الشخصية المستهدفة، والمشكلة، ونطاق الإطار السلكي، ورموز التصميم، فتجمع الصفحة النص بصيغة Markdown أو JSON داخل المتصفح. لا يُرسل أي طلب افتراضياً؛ ولا تخرج المسودة إلا عند الضغط على «توسيع» أو «تنقيح»، وحينها تُرسل إلى Cloudflare Workers AI (يلزم Turnstile، وهناك حد للاستخدام).',
	tool_product_design_prompt_builder_build:
		'إنشاء البرومبت',
	tool_product_design_prompt_builder_clear:
		'تفريغ',
	tool_product_design_prompt_builder_copy:
		'نسخ',
	tool_product_design_prompt_builder_desc:
		'أداة إنشاء برومبت لتصميم المنتجات: املأ الشخصية المستهدفة والمشكلة ونطاق الإطار السلكي ورموز التصميم، فيُجمَّع النص في المتصفح بصيغة Markdown أو JSON، والذكاء الاصطناعي اختياري.',
	tool_product_design_prompt_builder_description:
		'أداة إنشاء برومبت لتصميم المنتجات: اكتب الشخصية المستهدفة، والمشكلة، ونطاق الإطار السلكي (كم شاشة وأيها)، ورموز التصميم (الشبكة واللون الأساسي وشرط التباين)، فترتّبها الصفحة في كتل Role / Task / Constraints / Output بصيغة Markdown أو JSON دون مغادرة المتصفح. مثال: «أبوان في حضانة مشتركة يريدان رؤية أسبوع التسليم في لمحة» يصبح نطاقاً من ثلاث شاشات بشبكة 8 نقاط وتباين WCAG AA. زر «تحميل المثال» يملأ الحقول ويجمع البرومبت، و«توسيع» أو «تنقيح» عبر Cloudflare Workers AI اختياري (Turnstile وحد يومي).',
	tool_product_design_prompt_builder_download:
		'تنزيل',
	tool_product_design_prompt_builder_empty:
		'املأ حقلاً واحداً على الأقل قبل الإنشاء.',
	tool_product_design_prompt_builder_example:
		'الإدخال: الشخصية = أبوان في حضانة مشتركة أسبوعية، أحدهما ينظّم والآخر يقلّ الأبناء، وأجهزتهما بين Android و iPhone؛ المشكلة = التقاويم مزدحمة، ويريدان رؤية أسبوع التسليم في لمحة مع ملاحظات ودون إلزام بربط الحسابات؛ الإطار السلكي = شريط أسبوعي مع مفتاح ألوان الحضانة، وورقة تفاصيل بقائمة تسليم، ودعوة عبر رابط SMS (ثلاث شاشات)؛ الرموز = شبكة 8 نقاط، اللون الأساسي #2563eb، و#059669 للتسليمات المؤكدة، وتباين WCAG AA في التسميات. الإخراج (Markdown): في ## Role مدرّب برومبت لتجربة المستخدم يخص ملخصات الإطار السلكي، وفي ## Task سطر لكل حقل.',
	tool_product_design_prompt_builder_example_title:
		'مثال',
	tool_product_design_prompt_builder_faq_a1:
		'ليس افتراضياً. تعبئة الحقول والضغط على «إنشاء البرومبت» يحدث داخل هذا التبويب فقط ودون أي طلب شبكي. ولا تخرج المسودة إلا عند الضغط على «توسيع» أو «تنقيح»، وتذهب حينها إلى Cloudflare Workers AI؛ ولا تُمرَّر من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek.',
	tool_product_design_prompt_builder_faq_a2:
		'لا. الوضع المحلي يرتّب ما كتبته في كتل Role / Task / Constraints / Output فقط. أما الذكاء الاصطناعي الاختياري فيعمل عبر Cloudflare Workers AI بعد Turnstile، وليس عبر واجهات ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_product_design_prompt_builder_faq_a3:
		'أداة قوالب البرومبت تمنحك الكتل الأربع العامة Role / Task / Constraints / Output وتصلح لأي موضوع. أما هنا فالحقول حقول ملخص UX: الشخصية المستهدفة، والمشكلة، وكم شاشة يغطي الإطار السلكي، وأي رموز تصميم وتباين يجب احترامها، مع مثال وقيود خاصة بهذه الحالة.',
	tool_product_design_prompt_builder_faq_a4:
		'نعم. أكمل عنصر Turnstile في لوحة الذكاء الاصطناعي قبل الضغط على «توسيع» أو «تنقيح». وبدون رمز صالح تُظهر الأزرار خطأ، ويبقى الوضع المحلي متاحاً.',
	tool_product_design_prompt_builder_faq_a5:
		'نعم. بدّل صيغة الإخراج إلى JSON فتحصل على الحقول منفصلة مع نص البرومبت المجمَّع، وهو مناسب للحفظ في مستودع المتطلبات أو في قالب مراجعة التصميم.',
	tool_product_design_prompt_builder_faq_a6:
		'نعم. الناتج نص عادي: انسخه والصقه في ChatGPT أو Gemini أو Claude أو DeepSeek. والصفحة لا تستدعي هذه الواجهات بالنيابة عنك.',
	tool_product_design_prompt_builder_faq_q1:
		'هل يُرفع ما أكتبه إلى خادم؟',
	tool_product_design_prompt_builder_faq_q2:
		'هل تستدعي الصفحة واجهة ChatGPT أو نماذج أخرى؟',
	tool_product_design_prompt_builder_faq_q3:
		'ما الفرق عن أداة قوالب البرومبت؟',
	tool_product_design_prompt_builder_faq_q4:
		'لماذا يطلب الذكاء الاصطناعي الاختياري Turnstile؟',
	tool_product_design_prompt_builder_faq_q5:
		'هل يمكن التصدير بصيغة JSON؟',
	tool_product_design_prompt_builder_faq_q6:
		'هل تعمل مع ChatGPT و Gemini و Claude و DeepSeek؟',
	tool_product_design_prompt_builder_faq_q7:
		'ما الفرق بين التجميع المحلي و Cloudflare AI الاختياري؟',
	tool_product_design_prompt_builder_faq_a7:
		'التجميع المحلي يرتّب حقولك فحسب: بلا طلبات وبلا حدود استخدام. أما «توسيع» و«تنقيح» فيرسلان المسودة إلى Cloudflare Workers AI (يلزم Turnstile وهناك حد للاستخدام)، والنص العائد يستبدل منطقة النتيجة بالكامل، فراجعه قبل النسخ. وعند الفشل أو نفاد الحد تابع بالوضع المحلي.',
	tool_product_design_prompt_builder_ai_expand:
		'توسيع بالذكاء الاصطناعي',
	tool_product_design_prompt_builder_ai_polish:
		'تنقيح بالذكاء الاصطناعي',
	tool_product_design_prompt_builder_ai_panel_label:
		'Cloudflare AI اختياري (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'إرسال المسودة إلى Cloudflare Workers AI؟',
	tool_product_design_prompt_builder_ai_consent_body:
		'خطوة اختيارية: تُرسل مسودتك الحالية إلى Cloudflare Workers AI للاستدلال. ولا تُمرَّر من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek. وبدون الذكاء الاصطناعي يظل التجميع داخل المتصفح متاحاً.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'متابعة',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'إلغاء',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI يعمل…',
	tool_product_design_prompt_builder_ai_done:
		'استبدل نص الذكاء الاصطناعي محتوى النتيجة. راجعه قبل النسخ.',
	tool_product_design_prompt_builder_ai_err_generic:
		'فشل الذكاء الاصطناعي، والنتيجة كما هي.',
	tool_product_design_prompt_builder_ai_err_rate:
		'نفد حد الذكاء الاصطناعي. استخدم الوضع المحلي أو عد غداً (UTC).',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'أكمل Turnstile قبل استخدام الذكاء الاصطناعي.',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'صيغة الإخراج',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'الشخصية المستهدفة',
	tool_product_design_prompt_builder_persona_ph:
		'مثال: أبوان في حضانة مشتركة أسبوعية…',
	tool_product_design_prompt_builder_problem_label:
		'المشكلة المطلوب حلّها',
	tool_product_design_prompt_builder_problem_ph:
		'مثال: التقويم مزدحم، ويريدان الأسبوع في لمحة…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'الإطار السلكي / النطاق',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'مثال: شريط أسبوعي، ورقة تفاصيل، دعوة SMS…',
	tool_product_design_prompt_builder_design_tokens_label:
		'التصميم / رموز التصميم',
	tool_product_design_prompt_builder_design_tokens_ph:
		'مثال: شبكة 8 نقاط، اللون الأساسي #2563eb، WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'املأ الحقول الأربعة فتجمع الصفحة منها Markdown (أو JSON) داخل المتصفح؛ وإن أردت تفصيلاً أكثر اطلب من Cloudflare AI توسيع النص، ثم الصق البرومبت في محادثتك.',
	tool_product_design_prompt_builder_how_item_1:
		'اضغط «تحميل المثال» فتُملأ الحقول ويُجمَّع برومبت جاهز، ثم ابدأ التعديل منه.',
	tool_product_design_prompt_builder_how_item_2:
		'عدّل الشخصية والمشكلة ونطاق الإطار السلكي ورموز التصميم ثم اضغط «إنشاء البرومبت»؛ وللتصدير المهيكل بدّل إلى JSON.',
	tool_product_design_prompt_builder_how_item_3:
		'اختياري: أكمل Turnstile ثم اضغط «توسيع» أو «تنقيح»، فيحتل نص الذكاء الاصطناعي منطقة النتيجة.',
	tool_product_design_prompt_builder_how_item_4:
		'انسخ النتيجة أو نزّلها، ثم الصقها في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_product_design_prompt_builder_how_title:
		'طريقة الاستخدام',
	tool_product_design_prompt_builder_load_sample:
		'تحميل المثال',
	tool_product_design_prompt_builder_platforms_lead:
		'البرومبت النهائي نص عادي، ويُلصق كما هو في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_product_design_prompt_builder_result_label:
		'ناتج البرومبت',
	tool_product_design_prompt_builder_rules_body:
		'الصفحة تصيغ المهمة فقط: لا ترسم إطاراً سلكياً ولا تصدّر ملفات Figma. والذكاء الاصطناعي الاختياري محدود الاستخدام ويشترط Turnstile.',
	tool_product_design_prompt_builder_rules_item_1:
		'كل حقل يذهب إلى كتلة خاصة في Markdown: Role و Task و Constraints و Output.',
	tool_product_design_prompt_builder_rules_item_2:
		'الإخراج الافتراضي Markdown، ويمكن للمنطقة نفسها إظهار JSON بالحقول والبرومبت المجمَّع.',
	tool_product_design_prompt_builder_rules_item_3:
		'لا يغني Cloudflare AI عن التجميع المحلي: جوابه يشغل منطقة النتيجة بالكامل، فراجعه قبل النسخ.',
	tool_product_design_prompt_builder_rules_item_4:
		'الأداة تجمع النص فقط: لا تولّد شاشات ولا تقرأ ملفات تصميمك ولا تستدعي واجهات المحادثة بالنيابة عنك.',
	tool_product_design_prompt_builder_rules_title:
		'حدود ينبغي توقعها',
	tool_product_design_prompt_builder_sec_constraints:
		'Constraints',
	tool_product_design_prompt_builder_sec_output:
		'Output',
	tool_product_design_prompt_builder_sec_role:
		'Role',
	tool_product_design_prompt_builder_sec_task:
		'Task',
	tool_product_design_prompt_builder_status_copied:
		'تم النسخ إلى الحافظة.',
	tool_product_design_prompt_builder_status_done:
		'البرومبت جاهز.',
	tool_product_design_prompt_builder_status_working:
		'يجري تجميع البرومبت…',
	tool_product_design_prompt_builder_title:
		'أداة إنشاء برومبت لتصميم المنتجات — تجميع محلي مع ذكاء اصطناعي اختياري',
	tool_product_design_prompt_builder_usecase_1:
		'تحويل هدف التصميم الذي ذُكر شفهياً في اجتماع المتطلبات إلى برومبت يمكن لصقه في محادثة الفريق.',
	tool_product_design_prompt_builder_usecase_2:
		'تصدير JSON لحفظ الشخصية والرموز في مستودع المتطلبات، ثم توسيع النص عبر Cloudflare AI عند الحاجة.',
	tool_product_design_prompt_builder_usecase_3:
		'إن لم تحتج حقول UX وكفاك قالب عام من أربع كتل، فانتقل إلى أداة قوالب البرومبت.',
	tool_product_design_prompt_builder_usecase_4:
		'صُغ فكرة منتج لم تُعلَن بعد داخل المتصفح، ثم قرر إن كان يصح إرسالها إلى الذكاء الاصطناعي الاختياري.',
	tool_product_design_prompt_builder_usecases_title:
		'متى تفيد',
};

export default ar;
