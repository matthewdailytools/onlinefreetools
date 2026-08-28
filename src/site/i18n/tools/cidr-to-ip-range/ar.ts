/**
 * i18n tool shard (cidr-to-ip-range / ar).
 * Locale: Arabic. H1 = من CIDR إلى نطاق IP — not sole حاسبة CIDR.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'من CIDR إلى نطاق IP — وسّع البادئة إلى عناوين قابلة للاستخدام',
	tool_cidr_to_ip_range_desc:
		'من CIDR إلى نطاق IP: الصق 192.168.1.0/24 لتحصل على عنوان الشبكة والبث والمضيفات المتاحة. يعمل على جهازك دون رفع إلى خادم.',
	tool_cidr_to_ip_range_description:
		'من CIDR إلى نطاق IP: الصق ترميز CIDR لـ IPv4 (مثال 192.168.1.0/24) لترى عنوان الشبكة والبث وأول/آخر مضيف قابل للاستخدام وعدد المضيفات وقناع الشبكة الفرعية. يمكنك أيضًا تحويل القناع ↔ طول البادئة، والتحقق إن كان عنوان داخل الكتلة، وتوسيع العناوين بحدّ صفوف آمن. نفس مهمة حاسبة ترميز CIDR الشائعة—تبقى البيانات على جهازك ولا تُرفع إلى خادم.',
	tool_cidr_to_ip_range_article:
		'الصق CIDR لـ IPv4 لعرض الشبكة والبث والمضيفات المتاحة والعدد والقناع والقناع البديل. أوضاع اختيارية: قناع ↔ بادئة، احتواء/تداخل، أو توسيع محدود.',
	tool_cidr_to_ip_range_calculate: 'احسب',
	tool_cidr_to_ip_range_sample: 'تحميل مثال',
	tool_cidr_to_ip_range_clear: 'مسح',
	tool_cidr_to_ip_range_copy: 'نسخ الحقول',
	tool_cidr_to_ip_range_copy_done: 'تم النسخ',
	tool_cidr_to_ip_range_mode_label: 'الوضع',
	tool_cidr_to_ip_range_mode_range: 'بادئة → نطاق',
	tool_cidr_to_ip_range_mode_mask: 'قناع ↔ بادئة',
	tool_cidr_to_ip_range_mode_check: 'احتواء / تداخل',
	tool_cidr_to_ip_range_mode_expand: 'توسيع (بحد أقصى)',
	tool_cidr_to_ip_range_input_label: 'CIDR لـ IPv4',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'قناع الشبكة (منقوط)',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'عنوان IP أو CIDR ثانٍ',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 أو 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: 'النتيجة',
	tool_cidr_to_ip_range_lbl_network: 'الشبكة',
	tool_cidr_to_ip_range_lbl_broadcast: 'البث',
	tool_cidr_to_ip_range_lbl_first: 'أول قابل للاستخدام',
	tool_cidr_to_ip_range_lbl_last: 'آخر قابل للاستخدام',
	tool_cidr_to_ip_range_lbl_hosts: 'عدد المضيفات',
	tool_cidr_to_ip_range_lbl_mask: 'قناع الشبكة الفرعية',
	tool_cidr_to_ip_range_lbl_wildcard: 'قناع البديل',
	tool_cidr_to_ip_range_lbl_prefix: 'طول البادئة',
	tool_cidr_to_ip_range_lbl_normalized: 'CIDR مُطبَّع',
	tool_cidr_to_ip_range_norm_hint:
		'كانت بتات المضيف غير صفرية؛ القيم المعروضة تستخدم عنوان الشبكة.',
	tool_cidr_to_ip_range_expand_limit:
		'توقف التوسيع عند حد الأمان ({limit} صفًا). استخدم بادئة أطول أو ارفع الحد لاحقًا.',
	tool_cidr_to_ip_range_check_in: 'العنوان داخل كتلة CIDR.',
	tool_cidr_to_ip_range_check_out: 'العنوان خارج كتلة CIDR.',
	tool_cidr_to_ip_range_overlap_equal: 'الكتلتان متطابقتان.',
	tool_cidr_to_ip_range_overlap_contain: 'الـ CIDR الأول يحتوي الثاني.',
	tool_cidr_to_ip_range_overlap_inside: 'الـ CIDR الأول داخل الثاني.',
	tool_cidr_to_ip_range_overlap_overlap: 'الكتلتان تتداخلان جزئيًا.',
	tool_cidr_to_ip_range_overlap_disjoint: 'الكتلتان منفصلتان دون تداخل.',
	tool_cidr_to_ip_range_mask_to_prefix: 'البادئة من القناع: /{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'القناع من البادئة: {mask}',
	tool_cidr_to_ip_range_err_empty: 'أدخل CIDR لـ IPv4 مثل 192.168.1.0/24.',
	tool_cidr_to_ip_range_err_parse: 'تعذّر تفسير ذلك كعنوان أو CIDR لـ IPv4.',
	tool_cidr_to_ip_range_err_prefix: 'يجب أن يكون طول البادئة عددًا صحيحًا من 0 إلى 32.',
	tool_cidr_to_ip_range_err_ipv6: 'هذه الصفحة لـ IPv4 فقط. استخدم أداة CIDR لـ IPv6 للبادئات IPv6.',
	tool_cidr_to_ip_range_err_mask: 'ذلك القناع المنقوط ليس قناع شبكة فرعية IPv4 متجاورًا.',
	tool_cidr_to_ip_range_err_second: 'أدخل عنوان IPv4 أو CIDR ثانيًا للاحتواء/التداخل.',
	tool_cidr_to_ip_range_how_title: 'كيف يعمل',
	tool_cidr_to_ip_range_how_body:
		'حوّل بادئة CIDR إلى نطاق IP: الشبكة والبث والمضيفات المتاحة والقناع. هذه مهمة حاسبة ترميز CIDR نفسها.',
	tool_cidr_to_ip_range_how_item_1:
		'اعرف أنك تحول بادئة CIDR إلى نطاق IP (شبكة، بث، مضيفات متاحة)—نفس عمل حاسبة ترميز CIDR.',
	tool_cidr_to_ip_range_how_item_2: 'الصق CIDR لـ IPv4 مثل 192.168.1.0/24 (أو استخدم تحميل مثال).',
	tool_cidr_to_ip_range_how_item_3:
		'اقرأ الشبكة والبث وأول/آخر مضيف متاح وعدد المضيفات والقناع؛ انسخ ما تحتاجه.',
	tool_cidr_to_ip_range_how_item_4: 'اختياريًا انتقل إلى تحويل القناع أو الاحتواء/التداخل أو التوسيع المحدود.',
	tool_cidr_to_ip_range_how_item_5:
		'لتحويل بداية–نهاية → CIDR استخدم الأداة ذات الصلة IP range to CIDR؛ ولـ IPv6 صفحة مخصصة عند توفرها.',
	tool_cidr_to_ip_range_formula_title: 'الصيغة',
	tool_cidr_to_ip_range_formula_body:
		'القناع = 2^32 − 2^(32−البادئة). الشبكة = العنوان AND القناع. البث = الشبكة OR NOT القناع. المضيفات المتاحة تتبع /31 (RFC 3021) وحالات /32 الخاصة.',
	tool_cidr_to_ip_range_formula_item_1: 'حلّل a.b.c.d/nn؛ ارفض IPv6 والبادئات خارج 0–32.',
	tool_cidr_to_ip_range_formula_item_2: 'احسب بتات القناع ثم الشبكة والبث بعمليات AND/OR البتية.',
	tool_cidr_to_ip_range_formula_item_3:
		'القابلة للاستخدام: /32 → مضيف واحد؛ /31 → كلا العنوانين (RFC 3021)؛ وإلا الأول=الشبكة+1 والأخير=البث−1.',
	tool_cidr_to_ip_range_formula_item_4:
		'إن كانت بتات المضيف مضبوطة في الإدخال، طبّع إلى عنوان الشبكة وأظهر تلميحًا.',
	tool_cidr_to_ip_range_example_title: 'مثال',
	tool_cidr_to_ip_range_example:
		'الإدخال: 192.168.1.0/24. الناتج: شبكة 192.168.1.0، بث 192.168.1.255، متاح 192.168.1.1–192.168.1.254، قناع 255.255.255.0، مضيفات 254. الإدخال 192.168.1.37/24 يُطبَّع إلى 192.168.1.0/24.',
	tool_cidr_to_ip_range_usecases_title: 'متى يفيد',
	tool_cidr_to_ip_range_usecase_1:
		'وسّع CIDR لمجموعة أمان إلى أول/آخر عنوان قبل كتابة ACL ما زالت تستخدم نطاقات.',
	tool_cidr_to_ip_range_usecase_2:
		'أعطِ زميلًا القناع المنقوط وعدد المضيفات المتاحة من /24 دون فتح جدول بيانات.',
	tool_cidr_to_ip_range_usecase_3:
		'راجع خطة Proxmox أو جسر شبكة: أكّد الشبكة والبث لـ CIDR الذي تنوي تعيينه.',
	tool_cidr_to_ip_range_faq_q1: 'أين أحول بداية–نهاية إلى CIDR؟',
	tool_cidr_to_ip_range_faq_a1:
		'تلك المهمة العكسية على أداة IP range to CIDR ذات الصلة. هذه الصفحة توسّع بادئة إلى حقول نطاق فقط (وقوائم اختيارية بحد أقصى).',
	tool_cidr_to_ip_range_faq_q2: 'كيف يُحسب المضيفون المتاحون في /31 و/32؟',
	tool_cidr_to_ip_range_faq_a2:
		'/32 مضيف واحد (الشبكة تساوي ذلك العنوان؛ بلا بث كلاسيكي). /31 يتبع RFC 3021: كلا العنوانين قابلان للاستخدام نقطة إلى نقطة؛ لا زوج شبكة/بث غير مستخدم.',
	tool_cidr_to_ip_range_faq_q3: 'ماذا لو لصقت 192.168.1.37/24؟',
	tool_cidr_to_ip_range_faq_a3:
		'تطبّع الأداة إلى 192.168.1.0/24، وتُظهر تلميحًا بأن بتات المضيف تجاهلت، وتطبع الشبكة والبث والنطاق المتاح لتلك الكتلة.',
	tool_cidr_to_ip_range_faq_q4: 'هل هذه نفس حاسبة ترميز CIDR؟',
	tool_cidr_to_ip_range_faq_a4:
		'نعم للمهمة الشائعة: تحويل ترميز CIDR إلى شبكة/بث/مضيفات متاحة وقناع. عنوان الصفحة «من CIDR إلى نطاق IP» يصف الناتج؛ بحث حاسبة CIDR يصل إلى الأداة نفسها.',
	tool_cidr_to_ip_range_faq_q5: 'هل يمكن توسيع كل عنوان في كتلة كبيرة؟',
	tool_cidr_to_ip_range_faq_a5:
		'استخدم وضع التوسيع. يتوقف السرد عند حد أمان (1024 صفًا) حتى لا يجمّد /8 علامة التبويب. ضيّق البادئة أو اعتمد حقول الملخص.',
	tool_cidr_to_ip_range_faq_q6: 'هل تُرفع عناويني؟',
	tool_cidr_to_ip_range_faq_a6:
		'لا. العناوين تبقى على جهازك في علامة التبويب هذه ولا تُرفع إلى خادم.',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'النتائج تتبع حساب CIDR لـ IPv4 الشائع (بما فيه RFC 3021 لـ /31). ليست مستشارًا لسياسات التوجيه أو الجدار الناري؛ تحقق من التغييرات الحرجة في مختبرك.',
};

export default ar;
