/**
 * i18n tool shard (android-prompt-builder / ar).
 * عبارات البحث العربية: «أداة إنشاء برومبت Android»، «برومبت ChatGPT لتطوير أندرويد». العبارة الرئيسية في H1، والعبارات الفرعية (حزمة Kotlin، Compose، Gradle، minSdk، إخراج JSON) في الوصف والأسئلة الشائعة وحالات الاستخدام.
 * الحدود الفعلية: التجميع داخل المتصفح بلا طلبات؛ «توسيع/تنقيح» الاختياري يرسل المسودة إلى Cloudflare Workers AI (يلزم Turnstile وهناك حد)، والجواب يستبدل منطقة النتيجة بالكامل.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_android_prompt_builder_article:
		'حوِّل متطلب تطبيق Android إلى برومبت جاهز للّصق: اكتب الميزة، وحزمة Kotlin التقنية، وشاشة Compose، وقيود Gradle، فتجمع الصفحة النص بصيغة Markdown أو JSON داخل المتصفح. لا يُرسل أي طلب افتراضياً؛ ولا تخرج المسودة إلا عند الضغط على «توسيع» أو «تنقيح»، وحينها تُرسل إلى Cloudflare Workers AI (يلزم Turnstile، وهناك حد للاستخدام).',
	tool_android_prompt_builder_build:
		'إنشاء البرومبت',
	tool_android_prompt_builder_clear:
		'تفريغ',
	tool_android_prompt_builder_copy:
		'نسخ',
	tool_android_prompt_builder_desc:
		'أداة إنشاء برومبت لتطوير Android: املأ الميزة وحزمة Kotlin وشاشة Compose وقيود Gradle، فيُجمَّع النص في المتصفح بصيغة Markdown أو JSON، والذكاء الاصطناعي اختياري.',
	tool_android_prompt_builder_description:
		'أداة إنشاء برومبت لتطوير Android: اكتب الميزة، والحزمة التقنية (Kotlin 2.0 و Jetpack Compose و Room)، والشاشة، وقيود Gradle، فترتّبها الصفحة في كتل Role / Task / Constraints / Output بصيغة Markdown أو JSON دون مغادرة المتصفح. مثال: «قائمة قراءة تعمل دون اتصال مع بحث نصي كامل وأرشفة بالسحب» تصبح مهمة مقيّدة بـ minSdk 26. زر «تحميل المثال» يملأ الحقول ويجمع البرومبت، و«توسيع» أو «تنقيح» عبر Cloudflare Workers AI اختياري (Turnstile وحد يومي).',
	tool_android_prompt_builder_download:
		'تنزيل',
	tool_android_prompt_builder_empty:
		'املأ حقلاً واحداً على الأقل قبل الإنشاء.',
	tool_android_prompt_builder_example:
		'الإدخال: الميزة = قائمة قراءة دون اتصال، حفظ من ورقة المشاركة، بحث نصي كامل، وأرشفة بالسحب مع تراجع؛ الحزمة = Kotlin 2.0 و Jetpack Compose و Room FTS4 و Hilt؛ Compose = LazyColumn برؤوس تاريخ ثابتة و SwipeToDismissBox؛ Gradle = minSdk 26 و targetSdk 35 ووحدة :core:data. الإخراج (Markdown): في ## Role دور مهندس Android خبير، وفي ## Task سطر لكل حقل.',
	tool_android_prompt_builder_example_title:
		'مثال',
	tool_android_prompt_builder_faq_a1:
		'ليس افتراضياً. تعبئة الحقول والضغط على «إنشاء البرومبت» يحدث داخل هذا التبويب فقط ودون أي طلب شبكي. ولا تخرج المسودة إلا عند الضغط على «توسيع» أو «تنقيح»، وتذهب حينها إلى Cloudflare Workers AI؛ ولا تُمرَّر من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek.',
	tool_android_prompt_builder_faq_a2:
		'لا. الوضع المحلي يرتّب ما كتبته في كتل Role / Task / Constraints / Output فقط. أما الذكاء الاصطناعي الاختياري فيعمل عبر Cloudflare Workers AI بعد Turnstile، وليس عبر واجهات ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_android_prompt_builder_faq_a3:
		'أداة قوالب البرومبت تمنحك الكتل الأربع العامة Role / Task / Constraints / Output وتصلح لأي موضوع. أما هنا فالحقول مخصّصة لمشروع Android: الميزة وحزمة Kotlin وشاشة Compose و minSdk وتقسيم وحدات Gradle، مع مثال وقيود خاصة بهذه الحالة.',
	tool_android_prompt_builder_faq_a4:
		'نعم. أكمل عنصر Turnstile في لوحة الذكاء الاصطناعي قبل الضغط على «توسيع» أو «تنقيح». وبدون رمز صالح تُظهر الأزرار خطأ، ويبقى الوضع المحلي متاحاً.',
	tool_android_prompt_builder_faq_a5:
		'نعم. بدّل صيغة الإخراج إلى JSON فتحصل على الحقول منفصلة مع نص البرومبت المجمَّع، وهو مناسب للاختبارات أو لخط إعداد آلي.',
	tool_android_prompt_builder_faq_a6:
		'نعم. الناتج نص عادي: انسخه والصقه في ChatGPT أو Gemini أو Claude أو DeepSeek. والصفحة لا تستدعي هذه الواجهات بالنيابة عنك.',
	tool_android_prompt_builder_faq_q1:
		'هل يُرفع ما أكتبه إلى خادم؟',
	tool_android_prompt_builder_faq_q2:
		'هل تستدعي الصفحة واجهة ChatGPT أو نماذج أخرى؟',
	tool_android_prompt_builder_faq_q3:
		'ما الفرق عن أداة قوالب البرومبت؟',
	tool_android_prompt_builder_faq_q4:
		'لماذا يطلب الذكاء الاصطناعي الاختياري Turnstile؟',
	tool_android_prompt_builder_faq_q5:
		'هل يمكن التصدير بصيغة JSON؟',
	tool_android_prompt_builder_faq_q6:
		'هل تعمل مع ChatGPT و Gemini و Claude و DeepSeek؟',
	tool_android_prompt_builder_faq_q7:
		'ما الفرق بين التجميع المحلي و Cloudflare AI الاختياري؟',
	tool_android_prompt_builder_faq_a7:
		'التجميع المحلي يرتّب حقولك فحسب: بلا طلبات وبلا حدود استخدام. أما «توسيع» و«تنقيح» فيرسلان المسودة إلى Cloudflare Workers AI (يلزم Turnstile وهناك حد للاستخدام)، والنص العائد يستبدل منطقة النتيجة بالكامل، فراجعه قبل النسخ. وعند الفشل أو نفاد الحد تابع بالوضع المحلي.',
	tool_android_prompt_builder_ai_expand:
		'توسيع بالذكاء الاصطناعي',
	tool_android_prompt_builder_ai_polish:
		'تنقيح بالذكاء الاصطناعي',
	tool_android_prompt_builder_ai_panel_label:
		'Cloudflare AI اختياري (Turnstile)',
	tool_android_prompt_builder_ai_consent_title:
		'إرسال المسودة إلى Cloudflare Workers AI؟',
	tool_android_prompt_builder_ai_consent_body:
		'خطوة اختيارية: تُرسل مسودتك الحالية إلى Cloudflare Workers AI للاستدلال. ولا تُمرَّر من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek. وبدون الذكاء الاصطناعي يظل التجميع داخل المتصفح متاحاً.',
	tool_android_prompt_builder_ai_consent_ok:
		'متابعة',
	tool_android_prompt_builder_ai_consent_cancel:
		'إلغاء',
	tool_android_prompt_builder_ai_working:
		'Cloudflare AI يعمل…',
	tool_android_prompt_builder_ai_done:
		'استبدل نص الذكاء الاصطناعي محتوى النتيجة. راجعه قبل النسخ.',
	tool_android_prompt_builder_ai_err_generic:
		'فشل الذكاء الاصطناعي، والنتيجة كما هي.',
	tool_android_prompt_builder_ai_err_rate:
		'نفد حد الذكاء الاصطناعي. استخدم الوضع المحلي أو عد غداً (UTC).',
	tool_android_prompt_builder_ai_err_turnstile:
		'أكمل Turnstile قبل استخدام الذكاء الاصطناعي.',
	tool_android_prompt_builder_fmt_json:
		'JSON',
	tool_android_prompt_builder_fmt_label:
		'صيغة الإخراج',
	tool_android_prompt_builder_fmt_md:
		'Markdown',
	tool_android_prompt_builder_feature_spec_label:
		'الميزة / المواصفات',
	tool_android_prompt_builder_feature_spec_ph:
		'مثال: قائمة قراءة دون اتصال مع بحث…',
	tool_android_prompt_builder_kotlin_stack_label:
		'Kotlin / الحزمة التقنية',
	tool_android_prompt_builder_kotlin_stack_ph:
		'مثال: Kotlin 2.0، Jetpack Compose، Room، Hilt…',
	tool_android_prompt_builder_compose_ui_label:
		'Compose / الشاشة',
	tool_android_prompt_builder_compose_ui_ph:
		'مثال: LazyColumn برؤوس ثابتة…',
	tool_android_prompt_builder_gradle_constraints_label:
		'Gradle / القيود',
	tool_android_prompt_builder_gradle_constraints_ph:
		'مثال: minSdk 26، targetSdk 35، وحدة :core:data…',
	tool_android_prompt_builder_how_body:
		'املأ الحقول الأربعة فتجمع الصفحة منها Markdown (أو JSON) داخل المتصفح؛ وإن أردت تفصيلاً أكثر اطلب من Cloudflare AI توسيع النص، ثم الصق البرومبت في محادثتك.',
	tool_android_prompt_builder_how_item_1:
		'اضغط «تحميل المثال» فتُملأ الحقول ويُجمَّع برومبت جاهز، ثم ابدأ التعديل منه.',
	tool_android_prompt_builder_how_item_2:
		'عدّل الميزة والحزمة والشاشة والقيود ثم اضغط «إنشاء البرومبت»؛ وللتصدير المهيكل بدّل إلى JSON.',
	tool_android_prompt_builder_how_item_3:
		'اختياري: أكمل Turnstile ثم اضغط «توسيع» أو «تنقيح»، فيحتل نص الذكاء الاصطناعي منطقة النتيجة.',
	tool_android_prompt_builder_how_item_4:
		'انسخ النتيجة أو نزّلها، ثم الصقها في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_android_prompt_builder_how_title:
		'طريقة الاستخدام',
	tool_android_prompt_builder_load_sample:
		'تحميل المثال',
	tool_android_prompt_builder_platforms_lead:
		'البرومبت النهائي نص عادي، ويُلصق كما هو في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_android_prompt_builder_result_label:
		'ناتج البرومبت',
	tool_android_prompt_builder_rules_body:
		'الصفحة تصيغ المتطلب فقط: لا تترجم الشيفرة ولا تشغّل Gradle. والذكاء الاصطناعي الاختياري محدود الاستخدام ويشترط Turnstile.',
	tool_android_prompt_builder_rules_item_1:
		'كل حقل يذهب إلى كتلة خاصة في Markdown: Role و Task و Constraints و Output.',
	tool_android_prompt_builder_rules_item_2:
		'الإخراج الافتراضي Markdown، ويمكن للمنطقة نفسها إظهار JSON بالحقول والبرومبت المجمَّع.',
	tool_android_prompt_builder_rules_item_3:
		'لا يغني Cloudflare AI عن التجميع المحلي: جوابه يشغل منطقة النتيجة بالكامل، فراجعه قبل النسخ.',
	tool_android_prompt_builder_rules_item_4:
		'الأداة تجمع النص فقط: لا تبني Kotlin ولا تشغّل Gradle ولا تستدعي واجهات المحادثة بالنيابة عنك.',
	tool_android_prompt_builder_rules_title:
		'حدود ينبغي توقعها',
	tool_android_prompt_builder_sec_constraints:
		'Constraints',
	tool_android_prompt_builder_sec_output:
		'Output',
	tool_android_prompt_builder_sec_role:
		'Role',
	tool_android_prompt_builder_sec_task:
		'Task',
	tool_android_prompt_builder_status_copied:
		'تم النسخ إلى الحافظة.',
	tool_android_prompt_builder_status_done:
		'البرومبت جاهز.',
	tool_android_prompt_builder_status_working:
		'يجري تجميع البرومبت…',
	tool_android_prompt_builder_title:
		'أداة إنشاء برومبت لتطوير Android — تجميع محلي مع ذكاء اصطناعي اختياري',
	tool_android_prompt_builder_usecase_1:
		'تحويل المتطلب الذي ذُكر شفهياً في اجتماع التخطيط إلى برومبت يمكن لصقه في محادثة الفريق.',
	tool_android_prompt_builder_usecase_2:
		'تصدير JSON لربط الحقول باختبار انحدار، ثم توسيع النص عبر Cloudflare AI عند الحاجة.',
	tool_android_prompt_builder_usecase_3:
		'إن لم تحتج حقول Android وكفاك قالب عام من أربع كتل، فانتقل إلى أداة قوالب البرومبت.',
	tool_android_prompt_builder_usecase_4:
		'صُغ الوصف الداخلي في المتصفح أولاً، ثم قرر بعدها إن كان يصح إرساله إلى الذكاء الاصطناعي الاختياري.',
	tool_android_prompt_builder_usecases_title:
		'متى تفيد',
};

export default ar;
