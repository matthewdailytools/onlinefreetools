/**
 * i18n tool shard (uuid-generator / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_uuid_generator_article:
    'ولّد معرّفات UUID v4 أو ULID محليًا بعشوائية cryptographically قوية. انسخ دفعات لبيانات اختبار أو trace id أو stubs — بلا رفع.',
  tool_uuid_generator_clear: 'مسح',
  tool_uuid_generator_copy_all: 'نسخ الكل',
  tool_uuid_generator_copy_done: 'تم النسخ',
  tool_uuid_generator_count_label: 'العدد (1–100)',
  tool_uuid_generator_desc: 'توليد UUID v4 و ULID محليًا — حتى 100، نسخ بنقرة.',
  tool_uuid_generator_description:
    'ولّد سلاسل UUID v4 أو ULID في متصفحك. خطوات: اختر النوع، حدّد العدد (1–100)، اضغط توليد، انسخ الكل. مثال: ثلاثة UUID v4 بأسلوب RFC مثل `550e8400-e29b-41d4-a716-446655440000`. يستخدم crypto.getRandomValues — المعرّفات لا تغادر جهازك.',
  tool_uuid_generator_example:
    'UUID v4 (صغيرة، بشرطات): `550e8400-e29b-41d4-a716-446655440000`. ULID (26 حرف Crockford Base32، بادئة زمنية): `01ARZ3NDEKTSV4RRFFQ69G5FAV`. تحميل مثال يملأ ثلاثة v4 ثابتة للتحقق من الشكل.',
  tool_uuid_generator_example_title: 'مثال',
  tool_uuid_generator_faq_a1:
    'UUID v4 = 128 بت عشوائية (nibble إصدار ثابت)، مناسبة لمعرّفات غير شفافة. ULID يضيف بادئة timestamp بالميلي ثانية ويرتب lexicographically حسب الإنشاء — مفيد للسجلات وقواعد تريد مفاتيح زمنية بلا عدّاد صريح.',
  tool_uuid_generator_faq_a2:
    'لا نضمن uniqueness عالميًا. المعرّفات تستخدم crypto.getRandomValues (أو randomUUID). غير قابلة للتخمين عمليًا، لكن تطبيقك يجب أن يتعامل مع التصادم إن لزم.',
  tool_uuid_generator_faq_a3:
    'الحد 100 لكل نقرة لسرعة الصفحة. اضغط توليد مرة أخرى للمزيد.',
  tool_uuid_generator_faq_a4:
    'لا رفع ولا توليد على الخادم. كل شيء داخل تبويب المتصفح.',
  tool_uuid_generator_faq_a5:
    'UUID v4: 36 حرفًا بشرطات، hex صغيرة. ULID: 26 حرف Crockford Base32 كبيرة، بلا شرطات.',
  tool_uuid_generator_faq_q1: 'UUID v4 مقابل ULID — متى أختار؟',
  tool_uuid_generator_faq_q2: 'هل المعرّفات آمنة cryptographically؟',
  tool_uuid_generator_faq_q3: 'لماذا حد الدفعة 100؟',
  tool_uuid_generator_faq_q4: 'هل تغادر المعرّفات المتصفح؟',
  tool_uuid_generator_faq_q5: 'ما تنسيق الإخراج؟',
  tool_uuid_generator_generate: 'توليد',
  tool_uuid_generator_how_body:
    'اختر UUID v4 للمعرّفات العشوائية القياسية أو ULID لـ 26 حرفًا قابلة للترتيب زمنيًا. حدّد العدد (1–100) ثم توليد. نسخ الكل يضع معرّفًا لكل سطر. البايتات العشوائية من CSPRNG المتصفح.',
  tool_uuid_generator_how_item_1: 'اختر UUID v4 أو ULID.',
  tool_uuid_generator_how_item_2: 'حدد عدد المعرّفات (1–100).',
  tool_uuid_generator_how_item_3: 'انقر «توليد» (أو «تحميل مثال» لمعرّفات تجريبية ثابتة).',
  tool_uuid_generator_how_item_4: 'انسخ الكل — معرّف واحد في كل سطر.',
  tool_uuid_generator_how_title: 'كيف يعمل',
  tool_uuid_generator_output_label: 'المعرّفات المُولَّدة',
  tool_uuid_generator_rules_body:
    'فروق التنسيق والحدود العملية عند لصق المعرّفات في كود أو قاعدة بيانات.',
  tool_uuid_generator_rules_item_1:
    'UUID v4 يتبع RFC 4122: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` مع variant bits؛ hex صغيرة.',
  tool_uuid_generator_rules_item_2:
    'ULID: timestamp Unix ms 48 بت + 80 بت عشوائية في 26 حرف Crockford Base32 (بلا I/L/O/U).',
  tool_uuid_generator_rules_item_3:
    'لا نضمن uniqueness عبر الأجهزة أو الزمن — عُد المخرجات عينات عشوائية قوية، لا خدمة ID موزّعة.',
  tool_uuid_generator_rules_item_4:
    'الخصوصية: لا شبكة للتوليد؛ المعرّفات لا تغادر الجهاز إلا إذا نسختها.',
  tool_uuid_generator_rules_title: 'قواعد يجب أن تتوقعها',
  tool_uuid_generator_sample: 'تحميل مثال',
  tool_uuid_generator_title: 'مولّد UUID و ULID — إنشاء معرّفات في المتصفح',
  tool_uuid_generator_type_label: 'نوع المعرّف',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'بذر قاعدة dev بمفاتيح primary غير شفافة قبل استيراد fixtures.',
  tool_uuid_generator_usecase_2: 'إنشاء دفعة trace أو correlation id لاختبارات تكامل.',
  tool_uuid_generator_usecase_3: 'نمذجة APIs تقبل معرّفات ULID قابلة للترتيب في جسم الطلب.',
  tool_uuid_generator_usecases_title: 'حالات مناسبة',
};
export default ar;
