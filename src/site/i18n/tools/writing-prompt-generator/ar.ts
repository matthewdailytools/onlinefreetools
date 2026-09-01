/**
 * i18n tool shard (writing-prompt-generator / ar).
 * Search H1: مولّد prompts الكتابة — حوار، شخصية، سيناريو، عشوائي؛ تجميع محلي.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** مولّد prompts الكتابة — شظية النص العربية */
const ar: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'جمّع prompts كتابة جاهزة للنسخ: مشاهد حوار، دراسات شخصية، مخططات سيناريو أو بدايات قصص عشوائية. اختر وضعًا، املأ الحقول أو اختر عشوائيًا، ثم انسخ Markdown أو JSON إلى ChatGPT أو Gemini أو Claude أو DeepSeek. لا يتم استدعاء أي واجهة نموذج. يبقى النص على جهازك ولا يُرفع إلى خادم.',
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
		'مولّد prompts الكتابة للحوار والشخصية والسيناريو والعشوائي — Markdown/JSON؛ يبقى على الجهاز.',
	tool_writing_prompt_generator_description:
		'مولّد prompts الكتابة لـ ChatGPT وGemini وClaude وDeepSeek: يجمّع محليًا prompts حوار أو شخصية أو سيناريو أو قصة عشوائية. الوضع العشوائي يسحب النوع والمكان والشيء والصراع في الصفحة نفسها — مولّد prompts عشوائي مدمج. مثال: مشهد حوار في مقهى ليلي يُعرض عند الفتح. Markdown افتراضي؛ JSON يُخرج {mode,fields,role,task,constraints,output}. ليس LLM — يبقى النص على جهازك ولا يُرفع إلى خادم.',
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
		'تحميل المثال يختار وضع الحوار، يملأ مشهد مقهى ليلي، ينشئ Markdown بأقسام Role/Task/Constraints/Output ويفعّل النسخ. جرّب شرائح الشخصية أو السيناريو أو العشوائي لقيم افتراضية أخرى.',
	tool_writing_prompt_generator_example_title: 'مثال',
	tool_writing_prompt_generator_faq_a1:
		'لا. تُجمّع prompts في تبويب المتصفح هذا. لا يُرفع شيء إلى OpenAI أو Google أو Anthropic أو DeepSeek أو خوادمنا.',
	tool_writing_prompt_generator_faq_a2:
		'لا. هذه الصفحة تنسّق brief الكتابة في كتل prompt فقط. لا تستدعي ChatGPT أو Gemini أو Claude أو DeepSeek ولا أي واجهة نموذج أخرى.',
	tool_writing_prompt_generator_faq_a3:
		'منشئ قوالب Prompt ينظم قوالب Role/Task/Constraints/Output عامة. هذه الصفحة تركز على أوضاع الكتابة — حقول حوار، بطاقات شخصية، beats سيناريو، ومولّد prompts عشوائي على لوحة واحدة.',
	tool_writing_prompt_generator_faq_a4:
		'نعم. الوضع العشوائي يسحب النوع والمكان والشيء والعاطفة والصراع. seed رقمي اختياري يكرّر نفس السحب. المخرجات العشوائية للإلهام فقط — دون ضمان جودة.',
	tool_writing_prompt_generator_faq_a5:
		'نعم. شريحة JSON تُخرج {mode,fields,role,task,constraints,output} للاختبار أو الإعداد. Markdown يستخدم عناوين ## Role / Task / Constraints / Output.',
	tool_writing_prompt_generator_faq_a6:
		'نعم. انسخ prompt الجاهز إلى ChatGPT أو Gemini أو Claude أو DeepSeek. لا نفصل URLs حسب المنصة لأن المهمة تنسيق نص، وليس استدعاء APIs.',
	tool_writing_prompt_generator_faq_q1: 'هل يُرفع prompt الكتابة؟',
	tool_writing_prompt_generator_faq_q2: 'هل يستدعي LLM؟',
	tool_writing_prompt_generator_faq_q3: 'ما الفرق عن منشئ قوالب Prompt؟',
	tool_writing_prompt_generator_faq_q4: 'هل يعمل هنا مولّد prompts عشوائي؟',
	tool_writing_prompt_generator_faq_q5: 'هل يمكن الحصول على JSON؟',
	tool_writing_prompt_generator_faq_q6: 'هل يمكن استخدامه مع ChatGPT وGemini وClaude وDeepSeek؟',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'صيغة الإخراج',
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
		'prompts الكتابة تحتاج حقولًا حسب الوضع، حدودًا صادقة للعشوائي، ونفس الخصوصية المحلية كأدوات البناء الأخرى.',
	tool_writing_prompt_generator_rules_item_1:
		'أربع كتل في المخرجات: Role وTask وConstraints وOutput — متوافقة مع قوالب prompt منظمة.',
	tool_writing_prompt_generator_rules_item_2:
		'الوضع العشوائي يدمج مولّد prompts عشوائي في هذا الرابط — دون صفحة منفصلة.',
	tool_writing_prompt_generator_rules_item_3:
		'التصدير الافتراضي Markdown. JSON شريحة على اللوحة نفسها.',
	tool_writing_prompt_generator_rules_item_4:
		'هذه الأداة تجمع نصًا فقط. لا تولّد قصصًا جاهزة ولا تستدعي نماذج سحابية.',
	tool_writing_prompt_generator_rules_title: 'ما يجب توقعه',
	tool_writing_prompt_generator_scr_notes_label: 'ملاحظات beats',
	tool_writing_prompt_generator_scr_notes_ph: 'عدد المشاهد، الإيقاع، POV…',
	tool_writing_prompt_generator_scr_premise_label: 'الفكرة / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'إعداد في فقرة…',
	tool_writing_prompt_generator_scr_structure_label: 'البنية',
	tool_writing_prompt_generator_scr_structure_ph: 'ثلاث فصول، save the cat، حلقات…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: 'نُسخ إلى الحافظة.',
	tool_writing_prompt_generator_status_done: 'Prompt جاهز.',
	tool_writing_prompt_generator_status_working: 'جارٍ إنشاء prompt…',
	tool_writing_prompt_generator_title: 'مولّد prompts الكتابة',
	tool_writing_prompt_generator_usecase_1:
		'صِغ prompt مشهد حوار لمجموعة كتاب — الصقه في ChatGPT أو Claude لاقتراحات beats، لا نثرًا كاملًا.',
	tool_writing_prompt_generator_usecase_2:
		'اسحب عشوائيًا عندما تحتاج بداية قصة جديدة دون فتح موقع prompts عشوائي منفصل.',
	tool_writing_prompt_generator_usecase_3:
		'صدّر JSON لـ prompt بطاقة شخصية لاختبار pipeline، ثم افتح منشئ قوالب Prompt لقوالب API بأربعة حقول.',
	tool_writing_prompt_generator_usecase_4:
		'ارسم مخطط beats سيناريو قصير محليًا قبل نقل prompt إلى Gemini لقراءات طاولة.',
	tool_writing_prompt_generator_usecases_title: 'حالات مناسبة',
};

export default ar;
