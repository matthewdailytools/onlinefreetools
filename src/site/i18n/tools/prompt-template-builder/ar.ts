/**
 * i18n tool shard (prompt-template-builder / ar).
 * H1 local: منشئ قوالب Prompt.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_prompt_template_builder_article:
		'حوّل مسودة prompt إلى قالب قابل لإعادة الاستخدام Role / Task / Constraints / Output في هذه الصفحة. الصق نصًا حرًا أو املأ الحقول ثم انسخ Markdown أو JSON. لا يتم استدعاء أي واجهة نموذج. يبقى النص على جهازك دون رفع إلى خادم.',
	tool_prompt_template_builder_build: 'إنشاء القالب',
	tool_prompt_template_builder_clear: 'مسح',
	tool_prompt_template_builder_constraints_label: 'القيود',
	tool_prompt_template_builder_constraints_ph: 'حدود النبرة، النطاق، ما يجب تجنبه…',
	tool_prompt_template_builder_copy: 'نسخ',
	tool_prompt_template_builder_desc:
		'قالب Prompt منظم (Markdown/JSON) — يبقى على جهازك دون رفع إلى خادم.',
	tool_prompt_template_builder_description:
		'منشئ قوالب Prompt: يدمج النص الحر مع Role وTask وConstraints وOutput في قالب قابل لإعادة الاستخدام. مثال: قالب مراجعة الكود يظهر عند فتح الصفحة. Markdown افتراضي؛ JSON يُخرج {role,task,constraints,output}. كل شيء في هذا التبويب — ليس LLM ولا مكتبة سحابية. يبقى النص على جهازك ولا يُرفع إلى خادم.',
	tool_prompt_template_builder_download: 'تنزيل',
	tool_prompt_template_builder_empty: 'أضف نصًا حرًا أو حقلًا واحدًا على الأقل قبل الإنشاء.',
	tool_prompt_template_builder_example:
		'تحميل المثال يملأ Role وTask وConstraints وOutput لوكيل مراجعة كود، وينشئ Markdown بأربعة أقسام ## ويفعّل النسخ والتنزيل.',
	tool_prompt_template_builder_example_title: 'مثال',
	tool_prompt_template_builder_faq_a1:
		'لا. يُبنى القالب في تبويب المتصفح هذا. لا يُرفع إلى OpenAI أو Anthropic أو خوادمنا.',
	tool_prompt_template_builder_faq_a2:
		'لا. هذه الصفحة تنسّق نصك فقط في كتل. لا تستدعي أي نموذج ولا ت invent نصًا جديدًا.',
	tool_prompt_template_builder_faq_a3:
		'تصدير ChatGPT إلى Markdown يحوّل ملفات المحادثة إلى ملفات مقروءة. هنا تنظم system prompt قابل لإعادة الاستخدام — استخدمهما معًا عند أرشفة المحادثات ثم refine القالب.',
	tool_prompt_template_builder_faq_a4:
		'نعم. شريحة JSON تُخرج {role,task,constraints,output}. ادمجها مع مدقق JSON Schema عند الحاجة.',
	tool_prompt_template_builder_faq_a5:
		'الأسطر التي تبدأ بـ Role: أو Task: أو Constraints: أو Output: في المربع الحر تُقسَّم إلى أقسام. الحقول الصريحة لها الأولوية.',
	tool_prompt_template_builder_faq_q1: 'هل يُرفع الـ prompt؟',
	tool_prompt_template_builder_faq_q2: 'هل يستدعي LLM؟',
	tool_prompt_template_builder_faq_q3: 'ما الفرق عن تصدير ChatGPT إلى Markdown؟',
	tool_prompt_template_builder_faq_q4: 'هل يمكن الحصول على JSON؟',
	tool_prompt_template_builder_faq_q5: 'كيف يعمل تحليل النص الحر؟',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'صيغة الإخراج',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt حر (اختياري)',
	tool_prompt_template_builder_free_ph: 'الصق مسودة أو أسطر Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'اكتب مسودة، قسّم Role / Task / Constraints / Output اختياريًا، أنشئ القالب، ثم انسخ أو نزّل. Markdown وJSON شريحتان لنفس المهمة.',
	tool_prompt_template_builder_how_item_1:
		'الصق مسودة أو املأ Role وTask وConstraints وOutput — المهمة قالب prompt منظم.',
	tool_prompt_template_builder_how_item_2: 'اضغط إنشاء القالب (المثال يعمل تلقائيًا عند فتح الصفحة).',
	tool_prompt_template_builder_how_item_3: 'انتقل إلى JSON إذا احتجت {role,task,constraints,output} للكود أو الإعداد.',
	tool_prompt_template_builder_how_item_4: 'انسخ أو نزّل. عدّل الحقول وأعد الإنشاء متى شئت.',
	tool_prompt_template_builder_how_title: 'كيف يعمل',
	tool_prompt_template_builder_load_sample: 'تحميل مثال',
	tool_prompt_template_builder_output_fmt_label: 'صيغة الإخراج',
	tool_prompt_template_builder_output_fmt_ph: 'أقسام Markdown، شكل JSON، قائمة…',
	tool_prompt_template_builder_result_label: 'القالب',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'من يجب أن يتصرف النموذج كـ…',
	tool_prompt_template_builder_rules_body:
		'القالب القابل لإعادة الاستخدام يحتاج كتلًا واضحة وحدودًا صادقة — وليس مولّدًا ثانيًا.',
	tool_prompt_template_builder_rules_item_1:
		'أربع كتل: Role وTask وConstraints وOutput. الفارغة لا تظهر في Markdown.',
	tool_prompt_template_builder_rules_item_2: 'الحقول الصريحة تتفوق على الأسطر الم parsed من النص الحر.',
	tool_prompt_template_builder_rules_item_3: 'الافتراضي Markdown بعناوين ##. JSON شريحة في نفس الصفحة.',
	tool_prompt_template_builder_rules_item_4: 'ينسّق النص فقط. لا يقدّر tokens ولا يتحقق من JSON مقابل schema.',
	tool_prompt_template_builder_rules_title: 'قواعد متوقعة',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'نُسخ إلى الحافظة.',
	tool_prompt_template_builder_status_done: 'القالب جاهز.',
	tool_prompt_template_builder_status_working: 'جاري إنشاء القالب…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'ماذا تفعل خطوة بخطوة…',
	tool_prompt_template_builder_title: 'منشئ قوالب Prompt',
	tool_prompt_template_builder_usecase_1:
		'انشر system prompt لمراجعة الكود يمكن للفريق لصقه في أي واجهة دردشة.',
	tool_prompt_template_builder_usecase_2:
		'حوّل ملاحظات الاجتماع إلى كتل Role/Task/Constraints قبل ربط API.',
	tool_prompt_template_builder_usecase_3:
		'صدّر JSON ثم افتح مدقق JSON Schema للتحقق من ملفات الإعداد.',
	tool_prompt_template_builder_usecases_title: 'حالات مناسبة',
};

export default ar;
