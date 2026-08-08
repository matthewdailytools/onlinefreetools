/**
 * i18n tool shard (domain-lookup / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
	tool_domain_lookup_article:
		'اعرض سجلات DNS الحية وبيانات تسجيل النطاق في مكان واحد. تمر الاستعلامات عبر حافة موقعنا إلى DNS-over-HTTPS وRDAP؛ جهات الاتصال غالباً مخفية وقد يختلف الناتج عن محلّل DNS المحلي.',
	tool_domain_lookup_clear: 'مسح',
	tool_domain_lookup_col_data: 'البيانات',
	tool_domain_lookup_col_name: 'الاسم',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'النوع',
	tool_domain_lookup_copied: 'تم النسخ',
	tool_domain_lookup_copy: 'نسخ الملخص',
	tool_domain_lookup_desc:
		'البحث عن النطاق: تحقق من DNS والتسجيل (WHOIS/RDAP) — A/MX/NS والمسجّل وتاريخ الانتهاء في عرض واحد.',
	tool_domain_lookup_description:
		'البحث عن النطاق: تحقق أونلاين من سجلات DNS الحية وبيانات التسجيل (WHOIS عبر RDAP). الخطوات: أدخل نطاقاً مثل example.com، نفّذ DNS-over-HTTPS وRDAP معاً، ثم راجع A/AAAA/MX/NS/TXT مع المسجّل والحالة وأحداث الانتهاء. جهات الاتصال غالباً مخفية؛ الاستعلام يمر عبر حافة الموقع ولا نحفظ سجلاً تاريخياً.',
	tool_domain_lookup_domain_label: 'النطاق',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: 'لا توجد إجابات DNS للأنواع المطلوبة.',
	tool_domain_lookup_dns_fail: 'فشل استعلام DNS.',
	tool_domain_lookup_dns_heading: 'سجلات DNS',
	tool_domain_lookup_err_empty: 'أدخل اسم نطاق.',
	tool_domain_lookup_err_need_one: 'اختر DNS أو التسجيل أو كليهما.',
	tool_domain_lookup_events: 'الأحداث',
	tool_domain_lookup_example:
		'مثال: ابحث عن example.com → قد يظهر DNS إجابات A/AAAA/NS العامة عبر DoH؛ قد يعرض التسجيل المسجّل ورموز الحالة وأحداث الانتهاء/التسجيل من RDAP (قد تُخفى حقول).',
	tool_domain_lookup_example_title: 'مثال',
	tool_domain_lookup_faq_a1:
		'بعد قواعد الخصوصية، غالباً تُخفى بريد وهاتف المالك. يبقى اسم المسجّل والحالة والتواريخ ظاهرة. نعرض ما يعيده خادم RDAP.',
	tool_domain_lookup_faq_a2:
		'المتصفح يطلب واجهة الحافة لدينا؛ يستعلم الـ Worker عن DoH وRDAP upstream. لا نقدّم منتج تاريخ نطاقات؛ اعتبر النتيجة مؤقتة.',
	tool_domain_lookup_faq_a3:
		'ما زال الناس يقولون WHOIS. في معظم gTLD، ينشر السجل نفس البيانات عبر RDAP (JSON على HTTPS). هذه الأداة تستخدم RDAP؛ بعض ccTLD قد لا تملك RDAP.',
	tool_domain_lookup_faq_a4:
		'TLD غير مدعوم، انتهاء مهلة، أو DNS فارغ يُعرض لكل قسم على حدة حتى لا يخفي فشل أحد الجانبين الآخر.',
	tool_domain_lookup_faq_a5:
		'إجابات DNS من منظور محلّل عام (DoH). خوادم NS في RDAP هي ما يسجّله السجل. تأخير الانتشار أو تغيير حديث قد يسبب اختلافاً.',
	tool_domain_lookup_faq_q1: 'لماذا جهة اتصال المالك فارغة؟',
	tool_domain_lookup_faq_q2: 'هل تحفظون النطاقات التي أبحث عنها؟',
	tool_domain_lookup_faq_q3: 'هل هذا استعلام WHOIS؟',
	tool_domain_lookup_faq_q4: 'ماذا لو فشل DNS أو RDAP؟',
	tool_domain_lookup_faq_q5: 'لماذا قد يختلف NS في DNS عن التسجيل؟',
	tool_domain_lookup_how_body:
		'أدخل النطاق واختر DNS أو التسجيل أو الاثنين. عبر حافة الموقع، يستعلم الـ Worker من Cloudflare DNS-over-HTTPS عن الأنواع الشائعة ومن خادم RDAP للـ TLD (عبر bootstrap IANA) عن المسجّل والحالة والأحداث وNS السجل. كل قسم ينجح أو يفشل بمفرده.',
	tool_domain_lookup_how_title: 'طريقة الاستخدام',
	tool_domain_lookup_loading: 'جارٍ البحث…',
	tool_domain_lookup_lookup: 'بحث',
	tool_domain_lookup_ns_mismatch:
		'ملاحظة: إجابات NS في DNS تختلف عن NS في RDAP — غالباً بسبب انتشار غير مكتمل أو تغيير حديث.',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: 'التسجيل',
	tool_domain_lookup_rdap_fail: 'فشل استعلام التسجيل (RDAP).',
	tool_domain_lookup_rdap_heading: 'التسجيل (RDAP)',
	tool_domain_lookup_rdap_link: 'رابط RDAP',
	tool_domain_lookup_rdap_ns: 'NS السجل',
	tool_domain_lookup_rdap_ok: 'بيانات التسجيل من RDAP.',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — DNS over HTTPS API',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup (RDAP)',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — أسماء النطاقات',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'المسجّل',
	tool_domain_lookup_rules_body:
		'استخدم هذه الصفحة لفحص DNS من المحلّل وبيانات السجل. الحدود والمعنى:',
	tool_domain_lookup_rules_item_1:
		'أنواع DNS المستعلَمة: A وAAAA وCNAME وMX وNS وTXT وSOA (منظور DoH عام).',
	tool_domain_lookup_rules_item_2:
		'بيانات التسجيل من RDAP، الخلف المنظّم للـ WHOIS الكلاسيكي في معظم gTLD.',
	tool_domain_lookup_rules_item_3:
		'حقول الاتصال قد تكون مخفية؛ لا تفترض تفاصيل المالك كاملة.',
	tool_domain_lookup_rules_item_4:
		'إجابات DNS وNS في RDAP قد لا تتطابق أثناء الانتشار.',
	tool_domain_lookup_rules_item_5:
		'الاستعلامات تمر عبر حافة الموقع إلى خوادم upstream؛ لا نغيّر DNS أو تسجيلك.',
	tool_domain_lookup_rules_title: 'ما الذي ستراه',
	tool_domain_lookup_sample: 'مثال',
	tool_domain_lookup_status: 'الحالة',
	tool_domain_lookup_title: 'البحث عن النطاق — تحقق من DNS وبيانات التسجيل',
	tool_domain_lookup_usecase_1:
		'قبل الإطلاق: تأكد أن A/AAAA/CNAME تشير إلى المضيف المتوقع.',
	tool_domain_lookup_usecase_2:
		'التجديد أو التسليم: راجع المسجّل والحالة وأحداث الانتهاء (جهات الاتصال قد تكون مخفية).',
	tool_domain_lookup_usecase_3:
		'إعداد البريد: افحص MX ومقتطفات TXT ذات الصلة (ليس تدقيق تسليم كامل).',
	tool_domain_lookup_usecases_title: 'متى يفيدك',
};
export default ar;
