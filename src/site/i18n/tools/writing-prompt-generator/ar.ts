/**
 * i18n tool shard (writing-prompt-generator / ar).
 * عنوان H1 بحثي: مولّد برومبتات الكتابة — حوار، شخصية، سيناريو، عشوائي.
 * التجميع يتم داخل المتصفح؛ التوسيع/التحسين خيار إضافي عبر Cloudflare Workers AI
 * (يتطلب Turnstile وله حصة)، ويحل ردّه محل صندوق النتيجة بالكامل.
 * ChatGPT / Gemini / Claude / DeepSeek تظهر في الوصف وفي الشاشة الأولى.
 */
import type { SiteLangDict } from '../../../types';

/** مولّد برومبتات الكتابة — شظية النص العربية */
const ar: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'جمّع prompts كتابة جاهزة للنسخ: مشاهد حوار، دراسات شخصية، مخططات سيناريو أو بدايات قصص عشوائية. اختر وضعًا، املأ الحقول أو اختر عشوائيًا، ثم انسخ Markdown أو JSON إلى ChatGPT أو Gemini أو Claude أو DeepSeek. افتراضيًا يُبنى البرومبت داخل متصفحك ولا نستدعي واجهة أي دردشة نيابة عنك؛ وعند الضغط على «توسيع» أو «تحسين» فقط تُرسَل المسودة الحالية إلى Cloudflare Workers AI (يلزم Turnstile، وهناك حدود للمعدّل والحصة).',
	tool_writing_prompt_generator_build: 'إنشاء prompt',
	tool_writing_prompt_generator_char_flaw_label: 'عيب / نقطة ضعف',
	tool_writing_prompt_generator_char_flaw_ph: 'ما الذي يعيقه…',
	tool_writing_prompt_generator_char_goal_label: 'الهدف',
	tool_writing_prompt_generator_char_goal_ph: 'ماذا يريد في هذه القصة…',
	tool_writing_prompt_generator_char_name_label: 'اسم الشخصية',
	tool_writing_prompt_generator_char_name_ph: 'الاسم أو تسمية الدور…',
	tool_writing_prompt_generator_char_traits_label: 'السمات',
	tool_writing_prompt_generator_char_traits_ph: 'الشخصية، العادات، التناقضات…',
	tool_writing_prompt_generator_char_voice_label: 'الصوت / الأسلوب',
	tool_writing_prompt_generator_char_voice_ph: 'إيقاع الجمل، المفردات…',
	tool_writing_prompt_generator_clear: 'مسح',
	tool_writing_prompt_generator_copy: 'نسخ',
	tool_writing_prompt_generator_desc:
		'مولّد برومبتات الكتابة — أوضاع الحوار والشخصية والسيناريو والعشوائي؛ التجميع داخل المتصفح وذكاء Cloudflare اختياري.',
	tool_writing_prompt_generator_description:
		'مولّد برومبتات الكتابة: اختر وضعًا — حوار أو شخصية أو سيناريو أو عشوائي — واملأ الحقول عبر خطوات قصيرة لتحصل على برومبت جاهز للصق في ChatGPT أو Gemini أو Claude أو DeepSeek. عند فتح الصفحة يعمل مثال حوار؛ وفي الوضع العشوائي تسحب بداية قصة ويعيد الـ seed السحبة نفسها. التصدير Markdown أو JSON، والتجميع داخل المتصفح مع ذكاء Cloudflare الاختياري.',
	tool_writing_prompt_generator_dlg_characters_label: 'الشخصيات',
	tool_writing_prompt_generator_dlg_characters_ph: 'الأسماء + دور في سطر…',
	tool_writing_prompt_generator_dlg_conflict_label: 'الصراع',
	tool_writing_prompt_generator_dlg_conflict_ph: 'ما التوتر الذي يحرّك المشهد…',
	tool_writing_prompt_generator_dlg_genre_label: 'النوع / النبرة',
	tool_writing_prompt_generator_dlg_genre_ph: 'دراما معاصرة، كوميديا رومانسية…',
	tool_writing_prompt_generator_dlg_setting_label: 'المكان',
	tool_writing_prompt_generator_dlg_setting_ph: 'المكان، الزمان، الجو…',
	tool_writing_prompt_generator_dlg_tone_label: 'أسلوب الحوار',
	tool_writing_prompt_generator_dlg_tone_ph: 'ما بين السطور، مزاح، مقتضب…',
	tool_writing_prompt_generator_download: 'تنزيل',
	tool_writing_prompt_generator_empty: 'املأ حقلًا واحدًا على الأقل في هذا الوضع قبل الإنشاء.',
	tool_writing_prompt_generator_example:
		'المدخلات (حوار): Genre = دراما معاصرة؛ Characters = Maya وJonah؛ Conflict = Maya تتعرف على أغنية عن حبيبها السابق. المخرجات (Markdown): ## الدور → مدرب كتابة؛ ## المهمة → genre/characters/setting/conflict/tone. وضع السيناريو يستخدم لغز فاكس المنارة — مختلف عن عينة السينما.',
	tool_writing_prompt_generator_example_title: 'مثال',
	tool_writing_prompt_generator_faq_a1:
		'افتراضيًا يُبنى البرومبت داخل هذه التبويبة ولا يغادرها شيء. «توسيع/تحسين» وحده يرسل نص تلك الضغطة إلى Cloudflare Workers AI؛ ولا يذهب من خوادمنا شيء إلى OpenAI أو Google أو Anthropic أو DeepSeek.',
	tool_writing_prompt_generator_faq_a2:
		'الوضع المحلي ينسّق حقول الكتابة داخل هذه التبويبة فقط. أما «توسيع/تحسين» فيستخدم Cloudflare Workers AI بعد اجتياز Turnstile — ولا نفتح ChatGPT أو Gemini أو Claude أو DeepSeek بالنيابة عنك.',
	tool_writing_prompt_generator_faq_a3:
		'منشئ قوالب Prompt ينظم قوالب Role/Task/Constraints/Output عامة. هذه الصفحة تركز على أوضاع الكتابة — حقول حوار، بطاقات شخصية، beats سيناريو، ومولّد prompts عشوائي على لوحة واحدة.',
	tool_writing_prompt_generator_faq_a4:
		'نعم. الوضع العشوائي يسحب النوع والمكان والشيء والعاطفة والصراع. وإدخال seed رقمي يعيد السحبة نفسها تمامًا. ما يخرج مادة للإلهام، وليس ضمانًا للجودة.',
	tool_writing_prompt_generator_faq_a5:
		'نعم. أكمل أداة Turnstile في لوحة الذكاء الاصطناعي قبل «توسيع» أو «تحسين»؛ فبدون رمز صالح يعطي الزر خطأً، ويبقى البناء المحلي شغّالًا.',
	tool_writing_prompt_generator_faq_a6:
		'نعم. شريحة JSON تُخرج {mode,fields,role,task,constraints,output} للاختبار أو الإعداد. Markdown يستخدم عناوين ## الدور / المهمة / القيود / تنسيق الإخراج.',
	tool_writing_prompt_generator_faq_q1: 'هل يُرفع prompt الكتابة؟',
	tool_writing_prompt_generator_faq_q2: 'هل يستدعي LLM؟',
	tool_writing_prompt_generator_faq_q3: 'ما الفرق عن منشئ قوالب Prompt؟',
	tool_writing_prompt_generator_faq_q4:
		'هل يعمل مولّد البرومبتات العشوائي هنا؟',
	tool_writing_prompt_generator_faq_q5: 'لماذا يطلب الذكاء الاختياري اجتياز Turnstile؟',
	tool_writing_prompt_generator_faq_q6: 'هل يمكن الحصول على JSON؟',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'تنسيق الإخراج',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'اختر وضع كتابة، املأ الحقول أو اسحب عشوائيًا، أنشئ كتلة prompt، ثم الصق في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'اختر حوار أو شخصية أو سيناريو أو عشوائي — تحميل المثال شغّل preset الحوار عند الفتح.',
	tool_writing_prompt_generator_how_item_2: 'املأ حقول الوضع (أو أدخل seed واضغط سحب عشوائي).',
	tool_writing_prompt_generator_how_item_3: 'اضغط إنشاء prompt (مخفي في العشوائي — استخدم سحب عشوائي).',
	tool_writing_prompt_generator_how_item_4: 'انسخ أو نزّل Markdown/JSON والصق في واجهة الدردشة.',
	tool_writing_prompt_generator_how_title: 'كيف يعمل',
	tool_writing_prompt_generator_load_sample: 'تحميل مثال',
	tool_writing_prompt_generator_mode_character: 'شخصية',
	tool_writing_prompt_generator_mode_dialogue: 'حوار',
	tool_writing_prompt_generator_mode_label: 'وضع الكتابة',
	tool_writing_prompt_generator_mode_random: 'عشوائي',
	tool_writing_prompt_generator_mode_script: 'سيناريو / مخطط',
	tool_writing_prompt_generator_platforms_lead:
		'مُصمّم لـ ChatGPT وGemini وClaude وDeepSeek — انسخ prompt الكتابة الجاهز إلى أي واجهة دردشة.',
	tool_writing_prompt_generator_random_lead:
		'اسحب بداية قصة من النوع والمكان والشيء والعاطفة والصراع. seed اختياري يكرّر نفس السحب.',
	tool_writing_prompt_generator_random_roll: 'سحب عشوائي',
	tool_writing_prompt_generator_random_seed_label: 'Seed (اختياري)',
	tool_writing_prompt_generator_random_seed_ph: 'مثل 42',
	tool_writing_prompt_generator_result_label: 'prompt الكتابة',
	tool_writing_prompt_generator_rules_body:
		'برومبتات الكتابة تحتاج حقولًا تختلف باختلاف الوضع، وكلامًا صريحًا عن حدود ما يخرجه السحب العشوائي، ونفس مبدأ التجميع داخل المتصفح المتبع في بقية أدوات البناء.',
	tool_writing_prompt_generator_rules_item_1:
		'أربع كتل في المخرجات: Role وTask وConstraints وOutput — متوافقة مع قوالب prompt منظمة.',
	tool_writing_prompt_generator_rules_item_2:
		'الوضع العشوائي موجود على اللوحة نفسها: يسحب النوع والمكان والشيء والعاطفة والصراع، ومع seed تعيد السحبة ذاتها.',
	tool_writing_prompt_generator_rules_item_3:
		'التصدير الافتراضي Markdown. JSON شريحة على اللوحة نفسها.',
	tool_writing_prompt_generator_rules_item_4:
		'ذكاء Cloudflare الاختياري لا يحل محل الوضع المحلي أبدًا — راجع نصه قبل النسخ. هذه الأداة تجمّع البرومبت فقط، ولا تكتب لك القصة كاملة.',
	tool_writing_prompt_generator_rules_title: 'ما يجب توقعه',
	tool_writing_prompt_generator_scr_notes_label: 'ملاحظات beats',
	tool_writing_prompt_generator_scr_notes_ph: 'عدد المشاهد، الإيقاع، POV…',
	tool_writing_prompt_generator_scr_premise_label: 'الفكرة / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'إعداد في فقرة…',
	tool_writing_prompt_generator_scr_structure_label: 'البنية',
	tool_writing_prompt_generator_scr_structure_ph: 'ثلاث فصول، save the cat، حلقات…',
	tool_writing_prompt_generator_sec_constraints: 'القيود',
	tool_writing_prompt_generator_sec_output: 'تنسيق الإخراج',
	tool_writing_prompt_generator_sec_role: 'الدور',
	tool_writing_prompt_generator_sec_task: 'المهمة',
	tool_writing_prompt_generator_status_copied: 'نُسخ إلى الحافظة.',
	tool_writing_prompt_generator_status_done: 'Prompt جاهز.',
	tool_writing_prompt_generator_status_working: 'جارٍ إنشاء prompt…',
	tool_writing_prompt_generator_title:
		'مولّد prompts للكتابة — محلي + ذكاء اصطناعي اختياري',
	tool_writing_prompt_generator_usecase_1:
		'صِغ prompt مشهد حوار لمجموعة كتاب — الصقه في ChatGPT أو Claude لاقتراحات beats، لا نثرًا كاملًا.',
	tool_writing_prompt_generator_usecase_2:
		'اسحب عشوائيًا عندما تحتاج بداية قصة جديدة دون فتح موقع prompts عشوائي منفصل.',
	tool_writing_prompt_generator_usecase_3:
		'صدّر JSON لـ prompt بطاقة شخصية لاختبار pipeline، ثم افتح منشئ قوالب Prompt لقوالب API بأربعة حقول.',
	tool_writing_prompt_generator_usecase_4:
		'ارسم مخطط beats سيناريو قصير محليًا قبل نقل prompt إلى Gemini لقراءات طاولة.',
	tool_writing_prompt_generator_usecases_title: 'حالات مناسبة',
	tool_writing_prompt_generator_ai_expand:
		'توسيع بالذكاء الاصطناعي',
	tool_writing_prompt_generator_ai_polish:
		'تحسين بالذكاء الاصطناعي',
	tool_writing_prompt_generator_ai_panel_label:
		'ذكاء Cloudflare اختياري (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'إرسال النص إلى Cloudflare Workers AI؟',
	tool_writing_prompt_generator_ai_consent_body:
		'هذه الخطوة الاختيارية ترسل مسودتك الحالية إلى Cloudflare Workers AI للاستدلال. ولا يذهب من خوادمنا شيء إلى OpenAI أو Google أو Anthropic أو DeepSeek. وبدون الذكاء الاصطناعي يبقى البناء المحلي كما هو.',
	tool_writing_prompt_generator_ai_consent_ok:
		'متابعة',
	tool_writing_prompt_generator_ai_consent_cancel:
		'إلغاء',
	tool_writing_prompt_generator_ai_working:
		'ذكاء Cloudflare قيد المعالجة…',
	tool_writing_prompt_generator_ai_done:
		'كُتب نص الذكاء الاصطناعي كاملًا في صندوق النتيجة. راجعه قبل النسخ.',
	tool_writing_prompt_generator_ai_err_generic:
		'تعذّر الذكاء الاصطناعي. برومبتك المحلي كما هو دون تغيير.',
	tool_writing_prompt_generator_ai_err_rate:
		'نفدت حصة الذكاء الاصطناعي. استخدم الوضع المحلي أو جرّب غدًا (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'أكمل Turnstile قبل استخدام الذكاء الاصطناعي.',
	tool_writing_prompt_generator_faq_q7:
		'هل يمكن استخدامه مع ChatGPT وGemini وClaude وDeepSeek؟',
	tool_writing_prompt_generator_faq_a7:
		'نعم. انسخ prompt الجاهز إلى ChatGPT أو Gemini أو Claude أو DeepSeek. هذه الصفحة تجهّز النص فقط، ولا تسجّل الدخول ولا تستدعي أي واجهة برمجية.',
	tool_writing_prompt_generator_faq_q8:
		'ما الفرق بين الوضع المحلي وذكاء Cloudflare الاختياري؟',
	tool_writing_prompt_generator_faq_a8:
		'محليًا: كل شيء يُبنى في هذه التبويبة دون إرسال. أما «توسيع/تحسين» فيرسل المسودة إلى Cloudflare Workers AI (مع Turnstile وحصة يومية)، ويحلّ الرد محل صندوق النتيجة بالكامل. وعند الفشل أو نفاد الحصة تابع بالوضع المحلي.',
};

export default ar;
