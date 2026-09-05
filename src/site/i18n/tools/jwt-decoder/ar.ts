/**
 * i18n tool shard (jwt-decoder / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_jwt_decoder_article:
    'فك ترميز Header و Payload لـ JWT محليًا مع قواعد Base64url وأوقات claims المسجّلة وحدّ واضح: بدون التحقق من التوقيع. مناسب لتصحيح OAuth دون رفع الرمز.',
  tool_jwt_decoder_claims_local: 'محلي',
  tool_jwt_decoder_claims_title: 'أوقات claims المسجّلة',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'مسح',
  tool_jwt_decoder_copy_done: 'تم النسخ',
  tool_jwt_decoder_copy_header: 'نسخ header',
  tool_jwt_decoder_copy_payload: 'نسخ payload',
  tool_jwt_decoder_decode: 'فك',
  tool_jwt_decoder_desc:
    'فك JWT محليًا — قراءة Header و Payload دون التحقق من التوقيع؛ اللصق يبقى في المتصفح.',
  tool_jwt_decoder_description:
    'الصق JWT لقراءة Header و Payload بصيغة JSON في متصفحك — دون التحقق من التوقيع. الخطوات: الصق الرمز، فك الترميز، انسخ Header أو Payload. مثال: الرمز النموذجي يظهر alg HS256 و iat 1516239022 مع UTC والوقت المحلي. الرمز لا يُرفع.',
  tool_jwt_decoder_disclaimer:
    'غير مُحقَّق — هذه الأداة تفك Base64url فقط. لا تتحقق من التوقيع ولا تُستخدم لقرارات التفويض.',
  tool_jwt_decoder_empty: 'لا يوجد ما ينسخ — فك JWT أولًا.',
  tool_jwt_decoder_error_base64_header: 'Header ليس Base64url صالحًا.',
  tool_jwt_decoder_error_base64_payload: 'Payload ليس Base64url صالحًا.',
  tool_jwt_decoder_error_json_header: 'Header بعد الفك ليس JSON صالحًا.',
  tool_jwt_decoder_error_json_payload: 'Payload بعد الفك ليس JSON صالحًا.',
  tool_jwt_decoder_error_segments:
    'يجب أن يحتوي JWT على ثلاثة مقاطع مفصولة بنقطتين (header.payload.signature).',
  tool_jwt_decoder_example:
    'إدخال: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header: {"alg":"HS256","typ":"JWT"}. Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022} مع iat بـ UTC والوقت المحلي. التوقيع يُعرض خامًا دون تحقق.',
  tool_jwt_decoder_example_title: 'مثال',
  tool_jwt_decoder_faq_a1:
    'لا. الفك يعكس Base64url في Header و Payload فقط؛ التحقق من التوقيع يحتاج مفتاح المُصدر ولا ننفّذه هنا.',
  tool_jwt_decoder_faq_a2:
    'تأكد من لصق الرمز كاملًا بنقطتين وثلاثة مقاطع. نقاط زائدة أو لصق مقطوع أو نص ليس JWT سيفشل.',
  tool_jwt_decoder_faq_a3:
    'JWT يستخدم Base64url: - بدل + و _ بدل /، وغالبًا بدون =. أدوات Base64 العادية قد تفشل مع رموز URL-safe.',
  tool_jwt_decoder_faq_a4:
    'exp و iat و nbf هي ثوانٍ Unix UTC. هذه الصفحة تعرض UTC ووقتك المحلي؛ قارن exp بالوقت الحالي للانتهاء.',
  tool_jwt_decoder_faq_a5:
    'لا. التقسيم وفك Base64url و JSON يتم بالكامل في تبويب المتصفح.',
  tool_jwt_decoder_faq_q1: 'هل تتحقق الصفحة من توقيع JWT؟',
  tool_jwt_decoder_faq_q2: 'لماذا يفشل الرمز بخطأ المقاطع؟',
  tool_jwt_decoder_faq_q3: 'ما الفرق بين Base64url و Base64 العادي؟',
  tool_jwt_decoder_faq_q4: 'كيف أقرأ exp أو iat أو nbf؟',
  tool_jwt_decoder_faq_q5: 'هل يُرفع الرمز إلى خادم؟',
  tool_jwt_decoder_header_label: 'Header (JSON)',
  tool_jwt_decoder_how_body:
    'الصق JWT كاملًا (header.payload.signature). الصفحة تقسم بالنقاط، تفك Base64url للمقطعين الأولين وتنسّق JSON. exp و iat و nbf الرقمية تعرض UTC والوقت المحلي. التوقيع يُعرض كنص خام فقط — بلا تحقق.',
  tool_jwt_decoder_how_title: 'كيف يعمل',
  tool_jwt_decoder_input_label: 'إدخال JWT',
  tool_jwt_decoder_input_placeholder: 'الصق access token أو ID token…',
  tool_jwt_decoder_large_warn: 'رمز كبير (>8 KB). قد يكون الفك بطيئًا — تجنّب JWE ضخمة.',
  tool_jwt_decoder_payload_label: 'Payload (JSON)',
  tool_jwt_decoder_rules_body:
    'ما يفعله هذا المفكك وما لا يفعله: البنية، Base64url، claims المسجّلة، وحد عدم التحقق.',
  tool_jwt_decoder_rules_item_1:
    'البنية: JWT موقّع (JWS مضغوط) له ثلاثة مقاطع Base64url — header (alg, typ)، payload (claims)، signature (بايتات، ليس JSON).',
  tool_jwt_decoder_rules_item_2:
    'Base64url: -→+، _→/، إكمال padding حتى الطول %4، ثم atob وقراءة البايتات على أنها UTF-8 قبل JSON.parse، فتظهر قيم claims العربية أو الآسيوية بشكل صحيح. الأخطاء تحدّد header أو payload.',
  tool_jwt_decoder_rules_item_3:
    'Claims مسجّلة: exp و iat و nbf ثوانٍ Unix UTC. قراءة JSON لا تعني أن الرمز موثوق.',
  tool_jwt_decoder_rules_item_4:
    'الخصوصية: اللصق محلي؛ بلا HMAC/RSA. لا تفوّض في الإنتاج بالاعتماد على JSON المفكوك فقط.',
  tool_jwt_decoder_rules_title: 'قواعد يجب أن تعرفها',
  tool_jwt_decoder_sample: 'تحميل مثال',
  tool_jwt_decoder_signature_label: 'التوقيع (خام، غير مُحقَّق)',
  tool_jwt_decoder_title: 'فك ترميز JWT — قراءة Header و Payload محليًا (بدون تحقق)',
  tool_jwt_decoder_usecase_1:
    'تصحيح OAuth: راجع sub و scope و exp في access token قبل ضبط البوابة.',
  tool_jwt_decoder_usecase_2:
    'عقود API: تحقق من iss و aud في ID token مقابل الوثائق.',
  tool_jwt_decoder_usecase_3:
    'تعلّم: شاهد كيف يرتبط header و payload و signature في ثلاثة مقاطع JWS.',
  tool_jwt_decoder_usecases_title: 'متى يناسب',
};
export default ar;
