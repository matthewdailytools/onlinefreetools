/**
 * i18n tool shard (short-drama-prompt-generator / ar).
 * إعادة كتابة وفق البحث العربي: «مولّد برومبت دراما قصيرة عمودية»، «خطّاف الافتتاح»،
 * «معلّق نهاية الحلقة»، «صيغة 9:16»، «تصدير JSON». المصطلح الرئيسي في H1؛ والباقي في الوصف والأسئلة والسيناريوهات.
 * الحدود الواقعية: التجميع داخل المتصفح افتراضياً؛ «توسيع»/«تنقيح» يرسلان المسوّدة إلى Cloudflare Workers AI
 * (يلزم Turnstile وبحدود استخدام). الصفحة لا تولّد فيديو.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'حدّد عدد الحلقات ومدّتها، وخطّاف الافتتاح، والمعلّق الذي يختم كل حلقة، والصيغة العمودية، والنوع: ترتّب الصفحة ذلك في المتصفح وتعيد برومبتاً جاهزاً بصيغة Markdown أو JSON للصقه في ChatGPT أو Gemini أو Claude أو DeepSeek والكتابة حلقةً بحلقة. افتراضياً لا يُرسل شيء؛ ولا تذهب المسوّدة إلى Cloudflare Workers AI إلا بعد «توسيع» أو «تنقيح» وفحص Turnstile. الناتج نصّ لا فيديو.',
	tool_short_drama_prompt_generator_build:
		'أنشئ البرومبت',
	tool_short_drama_prompt_generator_clear:
		'تفريغ',
	tool_short_drama_prompt_generator_copy:
		'نسخ',
	tool_short_drama_prompt_generator_desc:
		'مولّد برومبت دراما قصيرة عمودية: الحلقات والخطّاف والمعلّق وصيغة 9:16 مرتَّبة في Markdown أو JSON داخل المتصفح؛ ذكاء Cloudflare اختياري مع Turnstile.',
	tool_short_drama_prompt_generator_description:
		'مولّد برومبت دراما قصيرة عمودية: املأ عدد الحلقات ومدّتها، وخطّاف الثانيتين الأوليين، ومعلّق نهاية كل حلقة، والصيغة العمودية، والنوع — فتوزّعها الصفحة على أقسام الدور والمهمة والقيود وصيغة الإخراج حتى يكتب ChatGPT أو Gemini أو Claude أو DeepSeek بإيقاع الحلقات. الافتراضي Markdown، وJSON لجدول الحلقات. إن ضعف الخطّاف، يرسل «توسيع» أو «تنقيح» المسوّدة إلى Cloudflare Workers AI (Turnstile وحدود).',
	tool_short_drama_prompt_generator_download:
		'تنزيل',
	tool_short_drama_prompt_generator_empty:
		'املأ حقلاً واحداً على الأقل قبل إنشاء البرومبت.',
	tool_short_drama_prompt_generator_example:
		'المُدخل: الحلقات = 12 × 75 ث؛ الخطّاف = متدرّبة تكشف تسرّباً في الرواتب ويتعرّف المدير على صوتها في رسالة صوتية عمرها عشر سنوات عن حضانة؛ المعلّق = الحلقة 6 تنتهي والمدير يمسح الرسالة وسط الاستماع، والحلقة 7 تبدأ بنظرة صامتة في المصعد؛ الصيغة = 9:16، ترجمة محروقة، افتتاح يوقف الإصبع في ثانيتين. المُخرج (Markdown): قسم ## المهمة يسرد الحلقات والخطّاف والمعلّق والصيغة العمودية والنوع.',
	tool_short_drama_prompt_generator_example_title:
		'مثال',
	tool_short_drama_prompt_generator_faq_a1:
		'التجميع يجري في هذا التبويب، فلا يُرسل شيء افتراضياً. الإرسال يحدث فقط عند «توسيع» أو «تنقيح»، ووجهته Cloudflare Workers AI؛ ولا نمرّر النص من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek.',
	tool_short_drama_prompt_generator_faq_a2:
		'في الوضع المحلي لا يُستدعى أي نموذج: تُوزَّع الحلقات والخطّاف والمعلّق والصيغة والنوع على الأقسام فقط. أما «توسيع» و«تنقيح» فيعملان عبر Cloudflare Workers AI بعد Turnstile، ولا يستدعيان واجهات ChatGPT أو Gemini أو Claude أو DeepSeek من خوادمنا.',
	tool_short_drama_prompt_generator_faq_a3:
		'منشئ قوالب البرومبت يعطي أربعة أقسام عامة لأي موضوع. هنا الحقول مخصّصة للدراما القصيرة العمودية — الحلقات والخطّاف والمعلّق وصيغة 9:16 — مع مثالها وقواعد إيقاع المشاهدة المتتابعة.',
	tool_short_drama_prompt_generator_faq_a4:
		'نعم. أكمل Turnstile في لوحة الذكاء الاصطناعي قبل «توسيع» أو «تنقيح». بدون رمز صالح تُظهر الأزرار خطأً، ويبقى التجميع المحلي متاحاً.',
	tool_short_drama_prompt_generator_faq_a5:
		'نعم. بدّل إلى JSON ليظهر في حقل المُخرج نفسه الحقول المنظَّمة ونص البرومبت المجمَّع — مفيد لجدول الحلقات ومراجعة تكرار الخطّافات والمعلّقات.',
	tool_short_drama_prompt_generator_faq_a6:
		'نعم. انسخ البرومبت والصقه في ChatGPT أو Gemini أو Claude أو DeepSeek. لا عناوين منفصلة لكل منصة: المهمة تنسيق النص لا استدعاء واجهات.',
	tool_short_drama_prompt_generator_faq_q1:
		'هل يُرفع البرومبت الذي أكتبه؟',
	tool_short_drama_prompt_generator_faq_q2:
		'هل تستدعي الصفحة واجهة ChatGPT أو نماذج أخرى؟',
	tool_short_drama_prompt_generator_faq_q3:
		'ما الفرق بينها وبين منشئ قوالب البرومبت؟',
	tool_short_drama_prompt_generator_faq_q4:
		'لماذا يلزم Turnstile للذكاء الاصطناعي الاختياري؟',
	tool_short_drama_prompt_generator_faq_q5:
		'هل يمكن الحصول على المخرجات بصيغة JSON؟',
	tool_short_drama_prompt_generator_faq_q6:
		'هل تناسب ChatGPT وGemini وClaude وDeepSeek؟',
	tool_short_drama_prompt_generator_faq_q7:
		'ما الفرق بين الوضع المحلي وذكاء Cloudflare الاختياري؟',
	tool_short_drama_prompt_generator_faq_a7:
		'محلياً: هذا التبويب فقط بلا رفع. «توسيع» أو «تنقيح» يرسلان المسوّدة إلى Cloudflare Workers AI (Turnstile وحدود). عند الفشل أو نفاد الحصة تابع محلياً.',
	tool_short_drama_prompt_generator_ai_expand:
		'توسيع بالذكاء الاصطناعي',
	tool_short_drama_prompt_generator_ai_polish:
		'تنقيح بالذكاء الاصطناعي',
	tool_short_drama_prompt_generator_ai_panel_label:
		'اختياري: Cloudflare AI (يلزم Turnstile)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'إرسال المسوّدة إلى Cloudflare Workers AI؟',
	tool_short_drama_prompt_generator_ai_consent_body:
		'خطوة اختيارية: ترسل المسوّدة الحالية إلى Cloudflare Workers AI. لا نمرّرها من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek. بدون ذكاء اصطناعي يبقى التجميع في المتصفح.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'متابعة',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'إلغاء',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI يعمل…',
	tool_short_drama_prompt_generator_ai_done:
		'نُسخ نص الذكاء الاصطناعي إلى المخرج. راجع قبل النسخ.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'فشل الذكاء الاصطناعي؛ البرومبت المحلي لم يتغيّر.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'نفدت حصة الذكاء الاصطناعي. تابع محلياً أو جرّب غداً (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'أكمل فحص Turnstile قبل استخدام الذكاء الاصطناعي.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'تنسيق الإخراج',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'الحلقات والمدّة',
	tool_short_drama_prompt_generator_episodes_ph:
		'مثال: 12 حلقة × 75 ث…',
	tool_short_drama_prompt_generator_hook_label:
		'خطّاف الافتتاح',
	tool_short_drama_prompt_generator_hook_ph:
		'مثال: متدرّبة تكشف تسرّب رواتب…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'معلّق نهاية الحلقة',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'مثال: الحلقة 6 تنتهي بمسح الرسالة…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'الصيغة العمودية',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'مثال: 9:16، ترجمة محروقة، افتتاح في ثانيتين…',
	tool_short_drama_prompt_generator_genre_label:
		'النوع',
	tool_short_drama_prompt_generator_genre_ph:
		'مثال: دراما مكتبية بسرّ عائلي…',
	tool_short_drama_prompt_generator_how_body:
		'املأ الحلقات والخطّاف والمعلّق، أنشئ البرومبت والصقه في ChatGPT أو Gemini أو Claude أو DeepSeek لتكتب حلقة بحلقة؛ إن ضعف الخطّاف استخدم الذكاء الاصطناعي الاختياري لتوسيع أو تنقيح.',
	tool_short_drama_prompt_generator_how_item_1:
		'انقر «تحميل عيّنة» لإدخال الإعداد الافتراضي.',
	tool_short_drama_prompt_generator_how_item_2:
		'عدّل الحلقات والمدّة والخطّاف والمعلّق والصيغة العمودية والنوع ثم اضغط «أنشئ البرومبت»؛ بدّل إلى JSON إن احتجت تصديراً منظَّماً.',
	tool_short_drama_prompt_generator_how_item_3:
		'اختياري: أكمل Turnstile في لوحة الذكاء الاصطناعي ثم اضغط «توسيع» أو «تنقيح» — يظهر الرد في حقل المخرج.',
	tool_short_drama_prompt_generator_how_item_4:
		'انسخ أو نزّل ثم الصق في ChatGPT أو Gemini أو Claude أو DeepSeek ليكمل النموذج بهذا التقسيم الحلقي.',
	tool_short_drama_prompt_generator_how_title:
		'طريقة الاستخدام',
	tool_short_drama_prompt_generator_load_sample:
		'تحميل مثال',
	tool_short_drama_prompt_generator_platforms_lead:
		'المخرج يُلصق كما هو في محادثة ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_short_drama_prompt_generator_result_label:
		'البرومبت الناتج',
	tool_short_drama_prompt_generator_rules_body:
		'الترتيب يتبع إيقاع المشاهدة العمودية: عدد الحلقات ومدّتها يحدّدان السعة، والخطّاف يقرّر إن توقف الإصبع في الثانيتين الأوليين، والمعلّق يدفع للحلقة التالية، والصيغة توضّح الإطار والترجمة. التجميع في المتصفح هو الافتراضي؛ الذكاء الاصطناعي الاختياري محدود ويتطلّب Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'كل حقل في النموذج يقع في أحد أقسام Markdown: الدور أو المهمة أو القيود أو صيغة الإخراج.',
	tool_short_drama_prompt_generator_rules_item_2:
		'التصدير الافتراضي Markdown؛ JSON زر فوق حقل المخرج نفسه.',
	tool_short_drama_prompt_generator_rules_item_3:
		'الذكاء الاصطناعي الاختياري خطوة إضافية لا بديل: الوضع المحلي متاح دائماً، ونص الذكاء الاصطناعي يستبدل المخرج بالكامل — راجع قبل النسخ.',
	tool_short_drama_prompt_generator_rules_item_4:
		'الصفحة تجمع نصاً فقط: لا تولّد فيديو ولا تشغّل نموذجاً أو واجهة دردشة في متصفّحك.',
	tool_short_drama_prompt_generator_rules_title:
		'ما تفعله وما لا تفعله',
	tool_short_drama_prompt_generator_sec_constraints:
		'القيود',
	tool_short_drama_prompt_generator_sec_output:
		'تنسيق الإخراج',
	tool_short_drama_prompt_generator_sec_role:
		'الدور',
	tool_short_drama_prompt_generator_sec_task:
		'المهمة',
	tool_short_drama_prompt_generator_status_copied:
		'تم النسخ إلى الحافظة.',
	tool_short_drama_prompt_generator_status_done:
		'البرومبت جاهز.',
	tool_short_drama_prompt_generator_status_working:
		'جاري إنشاء البرومبت…',
	tool_short_drama_prompt_generator_title:
		'مولّد برومبت دراما قصيرة عمودية — خطّافات ومعلّقات داخل المتصفح',
	tool_short_drama_prompt_generator_usecase_1:
		'قبل اجتماع، اجمع الحلقات والخطّاف والمعلّقات في برومبت واحد يُلصق مباشرة في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'صدّر JSON واحفظ خطّاف ومعلّق كل حلقة كحقول في جدول لمراجعة تكرار الحيل.',
	tool_short_drama_prompt_generator_usecase_3:
		'إن احتجت الهيكل العام من أربعة أقسام لا حقول السلسلة العمودية، استخدم منشئ قوالب البرومبت.',
	tool_short_drama_prompt_generator_usecase_4:
		'لمشروع لم يُعرض بعد، ابقَ في الوضع المحلي: النص لا يغادر المتصفح إلا بعد موافقتك في نافذة الذكاء الاصطناعي.',
	tool_short_drama_prompt_generator_usecases_title:
		'متى يفيد',
};

export default ar;
