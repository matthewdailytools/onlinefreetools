/**
 * i18n tool shard (check-ssl-certificate-expiration / ar).
 * المشهد: اسم مضيف → crt.sh CT → انتهاء أحدث شهادة (ليس مصافحة مباشرة).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'فحص انتهاء صلاحية شهادة SSL',
	tool_check_ssl_certificate_expiration_home_desc:
		'اعرف متى تنتهي أحدث شهادة CT لاسم مضيف (crt.sh — ليست مصافحة مباشرة).',
	tool_check_ssl_certificate_expiration_desc:
		'اعرف متى تنتهي أحدث شهادة CT لاسم مضيف (crt.sh — ليست مصافحة مباشرة).',
	tool_check_ssl_certificate_expiration_title: 'فحص انتهاء صلاحية شهادة SSL',
	tool_check_ssl_certificate_expiration_description:
		'أدخل اسم مضيف لفاحص انتهاء شهادة SSL: استعلام Certificate Transparency عبر crt.sh، ثم عرض notBefore وnotAfter والمُصدر والأيام المتبقية لأحدث تطابق. ليست مصافحة TLS مباشرة. مثال: example.com.',
	tool_check_ssl_certificate_expiration_host_label: 'اسم المضيف',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: 'فحص',
	tool_check_ssl_certificate_expiration_sample: 'مثال',
	tool_check_ssl_certificate_expiration_clear: 'مسح',
	tool_check_ssl_certificate_expiration_running: 'جارٍ استعلام Certificate Transparency…',
	tool_check_ssl_certificate_expiration_host_error: 'أدخل اسم مضيف (أو الصق رابط https).',
	tool_check_ssl_certificate_expiration_error_prefix: 'خطأ: ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'تعذر استعلام crt.sh. قد يكون هناك حد معدل أو عدم توفر.',
	tool_check_ssl_certificate_expiration_privacy_note:
		'يُرسل اسم المضيف إلى Worker لاستعلام crt.sh. لا نخزنه كقاعدة بيانات منتج.',
	tool_check_ssl_certificate_expiration_result_found_yes: 'وُجدت شهادة CT',
	tool_check_ssl_certificate_expiration_result_found_no: 'لا صفوف CT لهذا المضيف',
	tool_check_ssl_certificate_expiration_result_host: 'اسم المضيف',
	tool_check_ssl_certificate_expiration_result_cn: 'الاسم الشائع',
	tool_check_ssl_certificate_expiration_result_issuer: 'المُصدر',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter (الانتهاء)',
	tool_check_ssl_certificate_expiration_result_days_left: 'الأيام المتبقية',
	tool_check_ssl_certificate_expiration_result_expired_yes: 'منتهية (حسب CT notAfter)',
	tool_check_ssl_certificate_expiration_result_expired_no: 'غير منتهية (حسب CT notAfter)',
	tool_check_ssl_certificate_expiration_result_source: 'المصدر',
	tool_check_ssl_certificate_expiration_result_row_count: 'صفوف CT المُرجَعة',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'تأخر سجلات CT — ليست شهادة نظير مصافحة TLS مباشرة. قد تتأخر التواريخ عن الإصدار أو التجديد.',
	tool_check_ssl_certificate_expiration_result_none: '(لا شيء)',
	tool_check_ssl_certificate_expiration_how_title: 'طريقة العمل',
	tool_check_ssl_certificate_expiration_how_body:
		'تجيب الصفحة عن سؤال واحد: متى تنتهي أحدث مطابقة CT لهذا المضيف؟ ليست مدقق مصافحة SSL مباشرة.',
	tool_check_ssl_certificate_expiration_how_item_1: 'أدخل اسم مضيف (لا يلزم مسار).',
	tool_check_ssl_certificate_expiration_how_item_2: 'انقر فحص؛ يستعلم Worker عن JSON في crt.sh.',
	tool_check_ssl_certificate_expiration_how_item_3: 'اقرأ notBefore وnotAfter والمُصدر والأيام المتبقية لأحدث تطابق.',
	tool_check_ssl_certificate_expiration_how_item_4: 'عامل التواريخ كمنشورة في CT — أكد بمصافحة محلية إن كان التوقيت حرجًا.',
	tool_check_ssl_certificate_expiration_formula_title: 'قواعد استعلام CT (ليست TLS مباشرة)',
	tool_check_ssl_certificate_expiration_formula_body:
		'لا تستطيع Cloudflare Workers قراءة شهادة النظير من fetch. نستخدم بيانات Certificate Transparency العامة عبر crt.sh.',
	tool_check_ssl_certificate_expiration_formula_item_1: 'استعلام crt.sh باسم المضيف وتحليل قائمة JSON.',
	tool_check_ssl_certificate_expiration_formula_item_2: 'ترتيب تنازلي حسب notBefore وأخذ أحدث صف.',
	tool_check_ssl_certificate_expiration_formula_item_3: 'عرض notBefore وnotAfter والمُصدر وdaysLeft وexpired.',
	tool_check_ssl_certificate_expiration_formula_item_4: 'قد تتأخر سجلات CT عن الإصدار أو التجديد المباشر.',
	tool_check_ssl_certificate_expiration_formula_item_5: 'تُرفض المضيفات الخاصة أو المحظورة. ليست أداة سلسلة كاملة أو طلب CA.',
	tool_check_ssl_certificate_expiration_example_title: 'مثال',
	tool_check_ssl_certificate_expiration_example:
		'مثال الإدخال example.com. يستعلم Worker عن crt.sh ويعرض أحدث تطابق مع notBefore وnotAfter والمُصدر وdaysLeft وتنويه تأخر CT.',
	tool_check_ssl_certificate_expiration_usecases_title: 'متى يفيد',
	tool_check_ssl_certificate_expiration_usecase_1: 'فاحص انتهاء SSL قبل التجديد: كم يومًا يتبقى على أحدث ورقة CT.',
	tool_check_ssl_certificate_expiration_usecase_2: 'بعد تبديل CDN: تأكيد ظهور notAfter جديد في CT.',
	tool_check_ssl_certificate_expiration_usecase_3: 'جرد سريع لنطاقات الموردين عندما تحتاج تواريخ الانتهاء فقط.',
	tool_check_ssl_certificate_expiration_faq_q1: 'هل هذه مصافحة SSL مباشرة؟',
	tool_check_ssl_certificate_expiration_faq_a1:
		'لا. لا تقرأ Workers شهادة النظير من fetch؛ نستعلم Certificate Transparency (crt.sh).',
	tool_check_ssl_certificate_expiration_faq_q2: 'لماذا قد تتأخر التواريخ؟',
	tool_check_ssl_certificate_expiration_faq_a2:
		'قد تتأخر سجلات CT عن الإصدار أو التجديد. إن كان التوقيت حرجًا فأكد بمصافحة محلية.',
	tool_check_ssl_certificate_expiration_faq_q3: 'هل تفحصون السلسلة كاملة؟',
	tool_check_ssl_certificate_expiration_faq_a3:
		'التركيز على انتهاء أحدث تطابق. فاحص السلسلة وحده حاجة ثانوية وليست عنوان هذه الصفحة.',
	tool_check_ssl_certificate_expiration_faq_q4: 'هل العنوان «SSL certificate checker»؟',
	tool_check_ssl_certificate_expiration_faq_a4:
		'لا. العنوان هو فحص انتهاء صلاحية شهادة SSL. النية الأوسع ليست العنوان الوحيد.',
	tool_check_ssl_certificate_expiration_faq_q5: 'ماذا عن مضيفات IP الخاصة؟',
	tool_check_ssl_certificate_expiration_faq_a5:
		'تُرفض المضيفات الخاصة أو المحظورة. راجع أداة نطاقات CIDR الخاصة للسياق.',
	tool_check_ssl_certificate_expiration_references: 'crt.sh؛ Certificate Transparency.',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default ar;
