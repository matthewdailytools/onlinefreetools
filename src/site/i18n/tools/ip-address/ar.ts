/**
 * i18n tool shard (ip-address / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_ip_address_article:
    'يعرض IP الخروج العام مع منطقة تقريبية واسم الشبكة من الطرف الطرفي (بلا geo خارجية). مفيد للVPN والدعم وقوائم السماح. ليس تحديد موقع دقيق ولا فوترة المشغّل ولا «البحث عن IP شخص آخر».',
  tool_ip_address_description:
    'اعرض IP العام والمنطقة التقريبية كما يراه الطرف الطرفي (بيانات Cloudflare request.cf فقط، بلا API خارجية). العملية: افتح أو حدّث؛ يقرأ العامل IP الموثوق والبيانات الجغرافية. مثال: 203.0.113.10 مع تلميحات الدولة/ISP. مع VPN/بروكسي يظهر الخروج لا 192.168 على الموجّه.',
  tool_ip_address_example:
    'مثال: يرى الطرف 203.0.113.10 (TEST-NET-3) مع تلميحات الدولة/ISP إن وُجدت البيانات. نتيجتك الحية هي IP خروجك العام الفعلي مع IPv4 أو IPv6.',
  tool_ip_address_example_title: 'مثال',
  tool_ip_address_faq_a1:
    'على الموجّه غالبًا 192.168.x.x — عنوان LAN خاص. هنا يظهر IP الخروج العام على الإنترنت الذي تراه معظم المواقع.',
  tool_ip_address_faq_a2: 'عادة ترى IP خروج VPN/البروكسي لا عنوان النطاق المنزلي. حدّث بعد التبديل للتأكد.',
  tool_ip_address_faq_a3:
    'لا. كل طلب يعيد عنوانًا واحدًا — IPv4 أو IPv6 حسب المسار. في الشبكة المزدوجة قد يتغير بعد إعادة الاتصال.',
  tool_ip_address_faq_a4: 'يطلب المتصفح واجهة الطرف الطرفي؛ يعيد العامل عنوان العميل الموثوق لهذا الاتصال.',
  tool_ip_address_faq_a5: 'الاستعلام طلب قصير على الطرف الطرفي. لا سجل عناوين؛ اعتبر النتيجة عرضًا مؤقتًا.',
  tool_ip_address_faq_a6:
    'من بيانات Cloudflare المرتبطة بهذا IP — غالبًا الدولة/المنطقة/المدينة ومالك ASN. VPN/بروكسي يظهر الخروج؛ الجوال أو CGNAT قد يخطئ. لا نستخدم قواعد geo خارجية.',
  tool_ip_address_faq_q1: 'لماذا يختلف عن IP الموجّه؟',
  tool_ip_address_faq_q2: 'ماذا لو استخدمت VPN أو بروكسي؟',
  tool_ip_address_faq_q3: 'هل أحصل على IPv4 و IPv6 معًا؟',
  tool_ip_address_faq_q4: 'كيف تحصل الصفحة على عنواني؟',
  tool_ip_address_faq_q5: 'هل تحفظون عنواني؟',
  tool_ip_address_faq_q6: 'ما دقة الموقع ومزود الخدمة؟',
  tool_ip_address_how_body:
    'يستدعي المتصفح API الطرف الطرفي. يعيد العامل IP الموثوق وإن وُجدت: الدولة/المنطقة/المدينة/المنطقة الزمنية ومنظمة ASN من request.cf. عنوان واحد لكل طلب — IPv4 أو IPv6.',
  tool_ip_address_how_title: 'كيف يعمل',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — ما هو عنوان IP؟',
  tool_ip_address_ref_mdn_label: 'MDN — ترويسة X-Forwarded-For (مخاطر التزوير)',
  tool_ip_address_rules_body:
    'القيمة هي العنوان العام المرتبط باتصال TCP/TLS لديك على الطرف الطرفي — هوية الخروج التي تراها المواقع عادة. حدود مهمة:',
  tool_ip_address_rules_item_1: 'مع VPN أو بروكسي HTTP ترى عنوان خروج المزود لا عنوان الشبكة المنزلية.',
  tool_ip_address_rules_item_2: 'خلف NAT تتشارك أجهزة متعددة عنوانًا عامًا واحدًا؛ 192.168.x.x لا يظهر هنا.',
  tool_ip_address_rules_item_3: 'نعتمد عنوان عميل الطرف الطرفي قبل الاعتماد على X-Forwarded-For وحده (قابل للتزوير).',
  tool_ip_address_rules_item_4: 'قد يظهر IPv4 أو IPv6 حسب المسار؛ في الشبكات المزدوجة قد يتبدل بعد إعادة الاتصال.',
  tool_ip_address_rules_item_5:
    'الموقع ومزود الخدمة من بيانات IP على الطرف — غالبًا مستوى المدينة؛ الجوال/CGNAT قد يخطئ؛ VPN يظهر عقدة الخروج.',
  tool_ip_address_rules_title: 'ماذا يعني هذا العنوان',
  tool_ip_address_title: 'ما هو عنوان IP الخاص بي — IP عام (IPv4/IPv6)',
  tool_ip_address_usecase_1: 'سطح مكتب بعيد أو NAS أو ألعاب: إبلاغ IP العام الحالي للجدار الناري أو المنافذ.',
  tool_ip_address_usecase_2: 'تشغيل/إيقاف VPN أو بروكسي ثم التحديث للتحقق من تغيّر IP الخروج.',
  tool_ip_address_usecase_3: 'قبل مجموعات أمان السحابة أو جدار الشركة أو allowlist لواجهة API.',
  tool_ip_address_usecases_title: 'متى تستخدمه',
};
export default ar;
