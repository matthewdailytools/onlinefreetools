/**
 * i18n tool shard (private-cidr-ranges / ar).
 * Local search: nataqat CIDR al-khasa / private cidr ranges.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'نطاقات CIDR الخاصة — تحقق مما إذا كان العنوان أو البادئة خاصًا أو للاستخدام الخاص',
	tool_private_cidr_ranges_desc:
		'نطاقات CIDR الخاصة: RFC1918 وCGNAT وULA. مثال: 100.64.1.10 → مساحة CGNAT المشتركة.',
	tool_private_cidr_ranges_description:
		'نطاقات CIDR الخاصة: الصق IP أو CIDR لمعرفة نطاقات IP الخاصة RFC1918 وCGNAT (100.64/10) وULA IPv6 وبادئات التوثيق (مثال: 100.64.1.10 → مساحة مشتركة). جدول مرجعي قابل للنقر، مع إشارة إلى استخدام Tailscale لمساحة CGNAT. تبقى الفحوصات على جهازك دون رفع إلى خادم.',
	tool_private_cidr_ranges_article:
		'الصق عنوانًا أو CIDR لمطابقة بادئات خاصة أو للاستخدام الخاص (RFC1918 وCGNAT وlink-local وloopback وتوثيق وULA IPv6). انقر صفًا في الجدول لتحميل تلك البادئة. هذه الصفحة لا توسّع قوائم المضيفين.',
	tool_private_cidr_ranges_check: 'تحقق',
	tool_private_cidr_ranges_sample: 'تحميل مثال',
	tool_private_cidr_ranges_clear: 'مسح',
	tool_private_cidr_ranges_copy: 'نسخ الملخص',
	tool_private_cidr_ranges_copy_done: 'تم النسخ',
	tool_private_cidr_ranges_input_label: 'عنوان IP أو CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 أو 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'الكل',
	tool_private_cidr_ranges_filter_v4: 'جدول IPv4',
	tool_private_cidr_ranges_filter_v6: 'جدول IPv6',
	tool_private_cidr_ranges_result_label: 'التطابقات',
	tool_private_cidr_ranges_table_title: 'جدول مرجعي (انقر صفًا)',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: 'الاسم',
	tool_private_cidr_ranges_col_family: 'العائلة',
	tool_private_cidr_ranges_col_spec: 'المواصفة',
	tool_private_cidr_ranges_no_match:
		'غير موجود في قائمة الخاص/الاستخدام الخاص المدمجة (قد يكون unicast عالميًا أو مساحة أخرى).',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale ومنتجات أخرى تستخدم غالبًا مساحة CGNAT هذه (100.64.0.0/10).',
	tool_private_cidr_ranges_err_empty: 'أدخل عنوان IPv4/IPv6 أو CIDR.',
	tool_private_cidr_ranges_err_parse: 'تعذّر تحليل الإدخال كعنوان IP أو CIDR.',
	tool_private_cidr_ranges_name_rfc1918_10: 'خاص RFC1918',
	tool_private_cidr_ranges_name_rfc1918_172: 'خاص RFC1918',
	tool_private_cidr_ranges_name_rfc1918_192: 'خاص RFC1918',
	tool_private_cidr_ranges_name_cgnat: 'مساحة مشتركة CGNAT',
	tool_private_cidr_ranges_name_loopback: 'Loopback',
	tool_private_cidr_ranges_name_linklocal_v4: 'Link-local',
	tool_private_cidr_ranges_name_doc_testnet1: 'توثيق (TEST-NET-1)',
	tool_private_cidr_ranges_name_doc_testnet2: 'توثيق (TEST-NET-2)',
	tool_private_cidr_ranges_name_doc_testnet3: 'توثيق (TEST-NET-3)',
	tool_private_cidr_ranges_name_ula: 'ULA IPv6',
	tool_private_cidr_ranges_name_linklocal_v6: 'Link-local IPv6',
	tool_private_cidr_ranges_name_doc_v6: 'توثيق IPv6',
	tool_private_cidr_ranges_note_rfc1918_10: 'استخدام خاص — 10.0.0.0/8 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_172: 'استخدام خاص — 172.16.0.0/12 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_192: 'استخدام خاص — 192.168.0.0/16 (RFC 1918).',
	tool_private_cidr_ranges_note_cgnat: 'مساحة مشتركة لـ carrier-grade NAT (RFC 6598). ليست RFC1918.',
	tool_private_cidr_ranges_note_loopback: 'Loopback للمضيف — 127.0.0.0/8.',
	tool_private_cidr_ranges_note_linklocal_v4: 'Link-local APIPA — 169.254.0.0/16.',
	tool_private_cidr_ranges_note_doc_testnet1: 'للتوثيق فقط — لا تستخدم في الإنتاج (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet2: 'للتوثيق فقط — لا تستخدم في الإنتاج (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet3: 'للتوثيق فقط — لا تستخدم في الإنتاج (RFC 5737).',
	tool_private_cidr_ranges_note_ula: 'عناوين محلية فريدة — fc00::/7 (RFC 4193).',
	tool_private_cidr_ranges_note_linklocal_v6: 'Link-local IPv6 — fe80::/10.',
	tool_private_cidr_ranges_note_doc_v6: 'بادئة توثيق — 2001:db8::/32.',
	tool_private_cidr_ranges_how_title: 'كيف يعمل',
	tool_private_cidr_ranges_how_body:
		'تصنّف عنوانًا ضمن CIDR خاص أو للاستخدام الخاص (RFC1918 وCGNAT وULA وتوثيق…) دون عدّ المضيفين. الصق عنوانًا واقرأ التطابق، أو انقر الجدول المرجعي.',
	tool_private_cidr_ranges_how_item_1:
		'حدّد ما إذا كنت تريد تصنيف كتل خاصة/للاستخدام الخاص — وليس توسيع قائمة مضيفين.',
	tool_private_cidr_ranges_how_item_2: 'الصق عنوان IPv4/IPv6 أو CIDR (مثال 100.64.1.10).',
	tool_private_cidr_ranges_how_item_3:
		'اقرأ الفئة المتطابقة وCIDR وملاحظة RFC (وتلميح Tailscale عند تطابق CGNAT).',
	tool_private_cidr_ranges_how_item_4: 'اختياريًا: انقر صفًا في الجدول المرجعي للتحقق من تلك البادئة.',
	tool_private_cidr_ranges_how_item_5:
		'إن لم يظهر تطابق، اعتبر العنوان خارج هذه القائمة — تحقق قبل تسميته «خاصًا».',
	tool_private_cidr_ranges_formula_title: 'القواعد',
	tool_private_cidr_ranges_formula_body:
		'يُحلّل الإدخال كعنوان أو بادئة، ثم تُختبر العضوية في الجدول المدمج. تُرتَّب التطابقات الأطول (الأكثر تحديدًا) أولًا.',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 يستخدم أعدادًا 32 بتًا؛ IPv6 يستخدم 128 بتًا. لا يختلط العائلتان.',
	tool_private_cidr_ranges_formula_item_2: 'لعنوان بسيط: طابق كل CIDR في الجدول يحتويه.',
	tool_private_cidr_ranges_formula_item_3:
		'لإدخال CIDR: طابق مدخلات الجدول التي تحتوي تلك البادئة بالكامل (اختبار subset).',
	tool_private_cidr_ranges_formula_item_4:
		'رتّب النتائج تنازليًا حسب طول البادئة ليظهر الكتلة الأكثر تحديدًا أولًا.',
	tool_private_cidr_ranges_example_title: 'مثال',
	tool_private_cidr_ranges_example:
		'إدخال: 100.64.1.10. الناتج: مساحة CGNAT المشتركة 100.64.0.0/10 (RFC 6598)، مع ملاحظة أن Tailscale ومنتجات مشابهة تستخدم غالبًا هذه المساحة. الإدخال 10.0.0.5 يطابق RFC1918 10.0.0.0/8.',
	tool_private_cidr_ranges_usecases_title: 'متى يفيد',
	tool_private_cidr_ranges_usecase_1:
		'اختر كتلة VPC أو مختبر وتأكد أنها RFC1918 خاصة حقًا قبل فتح ثقوب جدار ناري.',
	tool_private_cidr_ranges_usecase_2:
		'عند رؤية عناوين 100.x، افصل مساحة CGNAT / Tailscale عن نطاقات IP الخاصة RFC1918.',
	tool_private_cidr_ranges_usecase_3:
		'تحقق من ULA IPv6 أو عنوان توثيق 2001:db8 قبل معاملته كتوجيه إنتاج.',
	tool_private_cidr_ranges_faq_q1: 'هل تُرفع عناويني أو تُوسَّع قوائم المضيفين؟',
	tool_private_cidr_ranges_faq_a1:
		'لا — لا توسّع هذه الصفحة قوائم مضيفين أو broadcast؛ ذلك لأداة CIDR-to-range. تبقى الفحوصات على جهازك دون رفع إلى خادم.',
	tool_private_cidr_ranges_faq_q2: 'ما هي كتل RFC1918 الخاصة الثلاث؟',
	tool_private_cidr_ranges_faq_a2:
		'10.0.0.0/8 و172.16.0.0/12 و192.168.0.0/16 — نطاقات IP الخاصة الكلاسيكية بصيغة CIDR.',
	tool_private_cidr_ranges_faq_q3: 'هل 100.64.0.0/10 «خاص»؟ وما علاقة Tailscale؟',
	tool_private_cidr_ranges_faq_a3:
		'هي مساحة مشتركة لـ carrier-grade NAT (RFC 6598)، وليست RFC1918. Tailscale وطبقات overlay أخرى تستخدم غالبًا CIDR CGNAT هذا؛ هذه الصفحة تُسمّي المساحة فقط — ليست لوحة Tailscale.',
	tool_private_cidr_ranges_faq_q4: 'ما هو ULA IPv6 (fc00::/7)؟',
	tool_private_cidr_ranges_faq_a4:
		'عناوين محلية فريدة للشبكات المحلية. ليست unicast عالمي على الإنترنت؛ لا تتوقع توجيهها على الشبكة العامة.',
	tool_private_cidr_ranges_faq_q5: 'لماذا نُبرز بادئات التوثيق؟',
	tool_private_cidr_ranges_faq_a5:
		'كتل مثل 192.0.2.0/24 و2001:db8::/32 محجوزة للأمثلة والوثائق. استخدامها في الإنتاج يكسر توقعات الاتصال.',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — Address Allocation for Private Internets',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — IANA-Reserved IPv4 Prefix for Shared Address Space',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — Unique Local IPv6 Unicast Addresses',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — IPv4 Address Blocks Reserved for Documentation',
	tool_private_cidr_ranges_disclaimer:
		'التطابقات تتبع RFCs المنشورة للمساحات الخاصة والخاصة بالاستخدام. هذا ليس نصيحة توجيه أو جدار ناري؛ تحقق من التغييرات الحرجة في مختبرك.',
};

export default ar;
