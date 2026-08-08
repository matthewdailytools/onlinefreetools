/**
 * i18n tool shard (json-schema-validator / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_json_schema_validator_article:
    'تحقق من JSON وفق Schema من draft-07 داخل المتصفح. تُعرض الأخطاء بمسارات JSON Pointer لإصلاح مخرجات النماذج أو الـ feed دون رفع البيانات.',
  tool_json_schema_validator_bad_instance: 'المثيل ليس JSON صالحًا.',
  tool_json_schema_validator_bad_schema: 'الـ Schema ليس JSON صالحًا (أو فشل التجميع).',
  tool_json_schema_validator_clear: 'مسح',
  tool_json_schema_validator_copy_done: 'تم النسخ',
  tool_json_schema_validator_copy_errors: 'نسخ الأخطاء',
  tool_json_schema_validator_desc:
    'تحقق من JSON مقابل Schema مع أخطاء JSON Pointer — draft-07 محليًا.',
  tool_json_schema_validator_description:
    'تحقق من JSON مقابل JSON Schema (draft-07) في المتصفح. الخطوات: الصق Schema والمثيل، تحقق، ثم اقرأ كل فشل عبر JSON Pointer. مثال: كائن منتج بلا price يفشل بـ missingProperty. النص يبقى في التبويب؛ يُحمَّل Ajv من CDN كرمز مكتبة فقط.',
  tool_json_schema_validator_draft_note: 'المحرك: Ajv 8 · JSON Schema draft-07 (الافتراضي).',
  tool_json_schema_validator_empty: 'الصق Schema وJSON المثيل أولًا.',
  tool_json_schema_validator_example:
    'يتطلب الـ Schema الحقلين sku (نص) وprice (رقم ≥ 0). صالح: {"sku":"A-1","price":9.5}. فاشل: {"sku":"A-1"} — يُبلَّغ عن missingProperty لـ price عند الجذر (/).',
  tool_json_schema_validator_example_title: 'مثال',
  tool_json_schema_validator_fail: 'فشل — انظر المسارات أدناه',
  tool_json_schema_validator_faq_a1:
    'أسباب شائعة: مفاتيح required ناقصة، أنواع خاطئة، أو additionalProperties:false. اقرأ سطر Pointer ورسالة الكلمة المفتاحية.',
  tool_json_schema_validator_faq_a2:
    'instancePath هو JSON Pointer داخل المثيل (الفارغ يُعرض /). عند غياب required يضيف Ajv أيضًا missingProperty في params.',
  tool_json_schema_validator_faq_a3:
    'هذه الصفحة تستخدم لهجة draft-07 في Ajv. إصدارات 2019-09 / 2020-12 تحتاج بنى أخرى ولا تُختار هنا.',
  tool_json_schema_validator_faq_a4:
    'لا يُرفع Schema أو JSON الخاص بك. CDN يحمّل كود Ajv فقط وليس لصقك.',
  tool_json_schema_validator_faq_a5:
    'الصق Schema وJSON النموذج، تحقق، ثم أصلح كل Pointer حتى النجاح — مفيد قبل إرسال مخرجات منظمة إلى المراحل التالية.',
  tool_json_schema_validator_faq_q1: 'لماذا فشل التحقق؟',
  tool_json_schema_validator_faq_q2: 'كيف أقرأ خطأ JSON Pointer؟',
  tool_json_schema_validator_faq_q3: 'أي draft تستخدمه هذه الصفحة؟',
  tool_json_schema_validator_faq_q4: 'هل يغادر JSON متصفحي؟',
  tool_json_schema_validator_faq_q5: 'كيف أفحص مخرجات LLM المنظمة؟',
  tool_json_schema_validator_how_body:
    'الصق Schema يسارًا والمثيل يمينًا. يجمع Ajv (draft-07) الـ Schema ويتحقق ويعرض كل خطأ بـ JSON Pointer. تتوفر عينة فاشلة وصالحة؛ تُحمَّل العينة الفاشلة عند الدخول لترى مسارات حقيقية فورًا.',
  tool_json_schema_validator_how_title: 'كيف يعمل',
  tool_json_schema_validator_instance_label: 'JSON المثيل',
  tool_json_schema_validator_instance_placeholder: '{\\n  "sku": "A-1",\\n  "price": 9.5\\n}',
  tool_json_schema_validator_large_warn:
    'لصق كبير جدًا (>200 ألف حرف معًا). قد يبطئ — جرّب مقتطفًا أقصر.',
  tool_json_schema_validator_need_lib: 'تعذّر تحميل Ajv. تحقق من الاتصال ثم حدّث الصفحة.',
  tool_json_schema_validator_pass: 'صالح — المثيل يطابق الـ Schema',
  tool_json_schema_validator_result_label: 'النتيجة',
  tool_json_schema_validator_rules_body:
    'في هذه الصفحة: تحليل → تجميع Schema draft-07 → التحقق من المثيل → إخراج Pointer لكل خطأ.',
  tool_json_schema_validator_rules_item_1:
    'التحليل: يجب أن يقبل الجانبان JSON.parse. أخطاء التركيب/التجميع منفصلة عن فشل التحقق.',
  tool_json_schema_validator_rules_item_2:
    'التحقق: allErrors يجمع كل الإخفاقات. كل سطر: instancePath + message (+ missingProperty عند الحاجة).',
  tool_json_schema_validator_rules_item_3:
    'Draft: لهجة draft-07. لا تفترض كلمات 2020-12 هنا.',
  tool_json_schema_validator_rules_item_4:
    'الخصوصية: اللصق يبقى في التبويب. CDN يحمّل كود Ajv فقط.',
  tool_json_schema_validator_rules_title: 'قواعد متوقعة',
  tool_json_schema_validator_sample_fail: 'عينة فاشلة',
  tool_json_schema_validator_sample_instance_fail: '{\\n  "sku": "A-1"\\n}',
  tool_json_schema_validator_sample_instance_ok: '{\\n  "sku": "A-1",\\n  "price": 9.5\\n}',
  tool_json_schema_validator_sample_ok: 'عينة صحيحة',
  tool_json_schema_validator_sample_schema:
    '{\\n  "$schema": "http://json-schema.org/draft-07/schema#",\\n  "type": "object",\\n  "required": ["sku", "price"],\\n  "properties": {\\n    "sku": { "type": "string", "minLength": 1 },\\n    "price": { "type": "number", "minimum": 0 }\\n  },\\n  "additionalProperties": false\\n}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'مدقق JSON Schema — مسارات draft-07 ومحليًا',
  tool_json_schema_validator_usecase_1:
    'الذكاء الاصطناعي / الوكلاء: التحقق مما إذا كان JSON المنظم للنموذج يفتقد حقولًا قبل الوثوق به.',
  tool_json_schema_validator_usecase_2:
    'تغذية التجارة: التحقق من JSON المنتج مقابل Schema قبل الاستيراد.',
  tool_json_schema_validator_usecase_3:
    'تصحيح واجهات API: لصق جسم الطلب/الاستجابة على جزء Schema من العقد.',
  tool_json_schema_validator_usecases_title: 'حالات مناسبة',
  tool_json_schema_validator_validate: 'تحقق',
};
export default ar;
