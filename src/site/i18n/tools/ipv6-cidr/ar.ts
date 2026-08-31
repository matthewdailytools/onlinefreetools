/**
 * i18n tool shard (ipv6-cidr / ar).
 * استعلامات محلية: حاسبة cidr ipv6 / بادئة ipv6 — ليست نسخاً إنجليزياً للجمل.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_ipv6_cidr_title: 'حاسبة CIDR لـ IPv6 — حوّل البادئة إلى نطاق عناوين'
	tool_ipv6_cidr_desc:
		'حاسبة CIDR لـ IPv6: الصق 2001:db8:1::/64 لتحصل على الشبكة وآخر عنوان والصيغة المضغوطة. تبقى على جهازك.',
	tool_ipv6_cidr_description:
		'حاسبة CIDR لـ IPv6: الصق بادئة (مثال 2001:db8:1::/64) لمعرفة عنوان الشبكة وآخر عنوان وعدد العناوين والصيغتين المضغوطة والموسّعة وفق RFC 5952. تُنبّه إن لم تقع البادئة على حدود nibble. تشمل /64 للشبكات المحلية و/127 للنقطة-إلى-نقطة و/128 لمضيف واحد. الحساب على جهازك ولا يُرفع إلى خادم.',
	tool_ipv6_cidr_article:
		'حوّل CIDR IPv6 إلى نطاق شبكة ونص مضغوط قياسي. عدم محاذاة nibble تحذير وليس خطأ.',
	tool_ipv6_cidr_calculate: 'احسب',
	tool_ipv6_cidr_sample: 'تحميل مثال',
	tool_ipv6_cidr_clear: 'مسح',
	tool_ipv6_cidr_copy: 'نسخ الحقول',
	tool_ipv6_cidr_copy_done: 'تم النسخ',
	tool_ipv6_cidr_input_label: 'CIDR لـ IPv6',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: 'النتيجة',
	tool_ipv6_cidr_lbl_network: 'الشبكة (مضغوطة)',
	tool_ipv6_cidr_lbl_network_exp: 'الشبكة (موسّعة)',
	tool_ipv6_cidr_lbl_last: 'آخر عنوان (مضغوط)',
	tool_ipv6_cidr_lbl_last_exp: 'آخر عنوان (موسّع)',
	tool_ipv6_cidr_lbl_prefix: 'طول البادئة',
	tool_ipv6_cidr_lbl_count: 'عدد العناوين',
	tool_ipv6_cidr_lbl_nibble: 'محاذاة nibble',
	tool_ipv6_cidr_nibble_yes: 'نعم — طول البادئة مضاعف لـ 4.',
	tool_ipv6_cidr_nibble_no:
		'لا — البادئة ليست على حدود 4 بت. الـ DNS العكسي (ip6.arpa) وكثير من التخصيصات تتوقع /4 و/8 … /64 و/68.',
	tool_ipv6_cidr_note_64: '/64 هي بادئة الشبكة المحلية الشائعة.',
	tool_ipv6_cidr_note_127: '/127 للنقطة-إلى-نقطة (RFC 6164): عنوانان فقط.',
	tool_ipv6_cidr_note_128: '/128 مضيف واحد.',
	tool_ipv6_cidr_err_empty: 'أدخل CIDR IPv6 مثل 2001:db8:1::/64.',
	tool_ipv6_cidr_err_parse: 'تعذّر تفسير النص كعنوان أو CIDR لـ IPv6.',
	tool_ipv6_cidr_err_prefix: 'يجب أن يكون طول البادئة عدداً صحيحاً بين 0 و 128.',
	tool_ipv6_cidr_err_ipv4: 'هذه الصفحة لـ IPv6 فقط. لـ IPv4 استخدم أداة CIDR إلى نطاق IP.',
	tool_ipv6_cidr_how_title: 'كيف تعمل',
	tool_ipv6_cidr_how_body:
		'تحوّل حاسبة CIDR لـ IPv6 البادئة إلى نطاق شبكة وصيغة مضغوطة. ليست اختباراً لاتصال IPv6.',
	tool_ipv6_cidr_how_item_1: 'تأكد أن المهمة حساب نطاق CIDR لـ IPv6 وليست اختبار اتصال.',
	tool_ipv6_cidr_how_item_2: 'الصق CIDR مثل 2001:db8:1::/64 (أو حمّل المثال).',
	tool_ipv6_cidr_how_item_3: 'اقرأ الشبكة وآخر عنوان والعدد ثم انسخ ما تحتاج.',
	tool_ipv6_cidr_how_item_4: 'إن لم تكن البادئة مضاعف 4 فاقرأ تحذير nibble.',
	tool_ipv6_cidr_how_item_5: 'لـ IPv4 استخدم CIDR إلى نطاق IP؛ لتجميع البداية–النهاية استخدم IP range to CIDR.',
	tool_ipv6_cidr_formula_title: 'الصيغة',
	tool_ipv6_cidr_formula_body:
		'حلّل نص IPv6 (مرة واحدة لـ «::»). القناع = 2^128 − 2^(128−البادئة). الشبكة = العنوان AND القناع. الأخير = الشبكة OR NOT القناع. الضغط وفق RFC 5952.',
	tool_ipv6_cidr_formula_item_1: 'ارفض حرفيات IPv4 والبادئات خارج 0–128.',
	tool_ipv6_cidr_formula_item_2: 'AND/OR على 128 بت للحصول على الشبكة وآخر عنوان.',
	tool_ipv6_cidr_formula_item_3: 'أحجام خاصة: /128 → 1؛ /127 → 2 (RFC 6164)؛ /64 → 2^64.',
	tool_ipv6_cidr_formula_item_4: 'محاذاة nibble: البادئة مقياس 4. غير ذلك يُحسب مع تحذير.',
	tool_ipv6_cidr_example_title: 'مثال',
	tool_ipv6_cidr_example:
		'الإدخال: 2001:db8:1::/64. الناتج: الشبكة 2001:db8:1:: (موسّعة 2001:0db8:0001:0000:0000:0000:0000:0000)، الأخير 2001:db8:1:0:ffff:ffff:ffff:ffff، العدد 2^64، محاذاة nibble نعم.',
	tool_ipv6_cidr_usecases_title: 'متى يفيد',
	tool_ipv6_cidr_usecase_1: 'تخطيط شبكة مكتب /64 ونسخ عنوان الشبكة المضغوط لإعداد الموجّه.',
	tool_ipv6_cidr_usecase_2: 'التحقق من رابط نقطة-إلى-نقطة يجب أن يكون /127 (RFC 6164).',
	tool_ipv6_cidr_usecase_3: 'توحيد بادئات التوثيق مثل 2001:db8::/32 قبل لقطة الشاشة.',
	tool_ipv6_cidr_faq_q1: 'ماذا تعني «غير محاذية لـ nibble»؟',
	tool_ipv6_cidr_faq_a1:
		'الـ DNS العكسي وتخصيصات كثيرة تتقدم بـ 4 بت. /67 نطاق صالح لكن بعض الأدوات تتوقع خطوات nibble. هنا يظهر النطاق مع تحذير.',
	tool_ipv6_cidr_faq_q2: 'ما الفرق بين /64 و/127 و/128؟',
	tool_ipv6_cidr_faq_a2:
		'/64 للشبكة المحلية الشائعة. /127 عنوانان للنقطة-إلى-نقطة (RFC 6164). /128 مضيف واحد.',
	tool_ipv6_cidr_faq_q3: 'هل هذا نفس البحث عن ترميز CIDR لـ IPv6؟',
	tool_ipv6_cidr_faq_a3:
		'نعم لمهمة تحويل الترميز إلى شبكة وآخر عنوان ونص قياسي. لا توجد هنا جدول لكل بادئات IPv6.',
	tool_ipv6_cidr_faq_q4: 'أين أوسّع CIDR لـ IPv4؟',
	tool_ipv6_cidr_faq_a4: 'أداة CIDR إلى نطاق IP. هذه الصفحة ترفض حرفيات IPv4 عمداً.',
	tool_ipv6_cidr_faq_q5: 'هل يختبر عمل IPv6 على شبكتي؟',
	tool_ipv6_cidr_faq_a5: 'لا. اختبارات الاتصال مهمة أخرى. هنا حساب البادئة فقط.',
	tool_ipv6_cidr_faq_q6: 'هل تُرفع عناويني؟',
	tool_ipv6_cidr_faq_a6: 'لا. تبقى على جهازك في هذا التبويب ولا تُرفع إلى خادم.',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — معمارية عناوين IPv6',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — تمثيل نصي موصى به لـ IPv6',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — بادئات 127 بت على روابط بين الموجّهات',
	tool_ipv6_cidr_disclaimer:
		'تتبع النتائج حساب CIDR لـ IPv6 الشائع (RFC 4291 و5952 و6164). ليست استشارة توجيه؛ تحقق من التغييرات الحرجة في مختبرك.',
};

export default ar;
