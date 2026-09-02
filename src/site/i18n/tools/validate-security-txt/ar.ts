/**
 * i18n tool shard (validate-security-txt / ar).
 * المشهد: إدخال نطاق → جلب security.txt → فحص حقول RFC 9116.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_validate_security_txt_home_title: 'التحقق من security.txt',
	tool_validate_security_txt_home_desc:
		'تحقق مما إذا كان الموقع ينشر security.txt صالحًا يتضمن Contact وExpires.',
	tool_validate_security_txt_desc:
		'تحقق مما إذا كان الموقع ينشر security.txt صالحًا يتضمن Contact وExpires.',
	tool_validate_security_txt_title: 'التحقق من security.txt',
	tool_validate_security_txt_description:
		'أدخل نطاقًا أو رابطًا لتشغيل فاحص security.txt: جلب /.well-known/security.txt (ثم /security.txt)، وتحليل Contact وExpires، والإشارة إلى الحقول المطلوبة الناقصة. مثال: google.com.',
	tool_validate_security_txt_url_label: 'النطاق أو الرابط',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ أو example.com',
	tool_validate_security_txt_check: 'تحقق',
	tool_validate_security_txt_sample: 'مثال',
	tool_validate_security_txt_clear: 'مسح',
	tool_validate_security_txt_running: 'جارٍ جلب security.txt…',
	tool_validate_security_txt_url_error: 'أدخل نطاقًا أو رابط http(s).',
	tool_validate_security_txt_error_prefix: 'خطأ: ',
	tool_validate_security_txt_fetch_failed:
		'تعذر جلب security.txt. قد يكون المضيف غير متاح أو يحظر الروبوتات.',
	tool_validate_security_txt_privacy_note:
		'يُرسل الرابط واسم المضيف إلى Worker لجلب security.txt. لا نخزنها كقاعدة بيانات منتج.',
	tool_validate_security_txt_result_found_yes: 'تم العثور على security.txt',
	tool_validate_security_txt_result_found_no: 'لم يُعثر على security.txt',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: 'مطلوب ناقص',
	tool_validate_security_txt_result_missing_none: 'الحقول المطلوبة موجودة',
	tool_validate_security_txt_result_expired_yes: 'Expires منتهٍ',
	tool_validate_security_txt_result_expired_no: 'Expires ما زال صالحًا (أو لم يُحلل)',
	tool_validate_security_txt_result_file_url: 'الرابط المجلوب',
	tool_validate_security_txt_result_http_status: 'حالة HTTP',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'معاينة security.txt',
	tool_validate_security_txt_result_none: '(لا شيء)',
	tool_validate_security_txt_how_title: 'طريقة العمل',
	tool_validate_security_txt_how_body:
		'يجيب المدقق عن سؤال واحد: هل ينشر الموقع ملف اكتشاف مع Contact صالح وExpires قابل للاستخدام؟',
	tool_validate_security_txt_how_item_1: 'أدخل نطاقًا أو رابط HTTPS.',
	tool_validate_security_txt_how_item_2:
		'انقر تحقق؛ يجرّب Worker مسار /.well-known/security.txt ثم /security.txt.',
	tool_validate_security_txt_how_item_3:
		'راجع Contact وExpires وPreferred-Languages وCanonical والمعاينة.',
	tool_validate_security_txt_how_item_4: 'أصلح الحقول الناقصة قبل نشر security.txt الخاص بك.',
	tool_validate_security_txt_formula_title: 'قواعد حقول RFC 9116',
	tool_validate_security_txt_formula_body: 'متوافق مع RFC 9116 وممارسات securitytxt.org الشائعة.',
	tool_validate_security_txt_formula_item_1:
		'ترتيب الجلب: أولاً /.well-known/security.txt ثم /security.txt.',
	tool_validate_security_txt_formula_item_2: 'Contact مطلوب؛ نعرض كل القيم وننبّه عند الغياب.',
	tool_validate_security_txt_formula_item_3: 'Expires متوقع بقوة؛ الغياب أو التاريخ الماضي فجوة.',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages وCanonical يُعرضان إن وُجدا وليسا إلزاميين للقائمة.',
	tool_validate_security_txt_formula_item_5: 'جلب وتحليل فقط — ليس صندوق بلاغات ولا اختبار اختراق.',
	tool_validate_security_txt_example_title: 'مثال',
	tool_validate_security_txt_example:
		'مثال الإدخال https://www.google.com/. يجرّب Worker المسارين ثم يعرض found وContact وExpires وmissingRequired وexpired والمعاينة.',
	tool_validate_security_txt_usecases_title: 'متى يفيد',
	tool_validate_security_txt_usecase_1:
		'فاحص security.txt قبل الإطلاق: هل well-known يصل وفيه Contact؟',
	tool_validate_security_txt_usecase_2:
		'بعد تعديل Expires: تأكد أن التاريخ يُفهم ولم ينتهِ بعد.',
	tool_validate_security_txt_usecase_3:
		'قبل التواصل مع مورد: تحقق أنه ينشر ملف الاكتشاف.',
	tool_validate_security_txt_faq_q1: 'أين يجب أن يوجد security.txt؟',
	tool_validate_security_txt_faq_a1:
		'الأفضل /.well-known/security.txt. /security.txt على نفس المضيف هو الاحتياطي الموثّق.',
	tool_validate_security_txt_faq_q2: 'ما الحقول المطلوبة؟',
	tool_validate_security_txt_faq_a2:
		'Contact على الأقل. Expires متوقع في ممارسة RFC 9116؛ نعلّم الفجوات.',
	tool_validate_security_txt_faq_q3: 'هل العنوان هو RFC 9116؟',
	tool_validate_security_txt_faq_a3:
		'لا. العنوان هو التحقق من security.txt. الـ RFC في القواعد والمراجع.',
	tool_validate_security_txt_faq_q4: 'هل تخزّنون بلاغات الثغرات؟',
	tool_validate_security_txt_faq_a4: 'لا. نجلب الملف المنشور ونحلله فقط. لسنا صندوق إفصاح.',
	tool_validate_security_txt_faq_q5: 'هل يُحفظ الرابط؟',
	tool_validate_security_txt_faq_a5:
		'يجب أن يصل الرابط/المضيف إلى Worker للجلب. لا نخزن الفحوصات كقاعدة منتج دائمة. أداة طرفية وليست «بدون رفع».',
	tool_validate_security_txt_references: 'RFC 9116؛ securitytxt.org.',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default ar;
