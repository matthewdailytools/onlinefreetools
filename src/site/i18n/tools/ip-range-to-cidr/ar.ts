/**
 * i18n tool shard (ip-range-to-cidr / ar).
 * رأس البحث: نطاق IP إلى CIDR.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'نطاق IP إلى CIDR — حوّل البداية–النهاية إلى قائمة بادئات',
	tool_ip_range_to_cidr_desc:
		'حوّل نطاق IP إلى CIDR. مثال: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. يبقى على جهازك دون رفع إلى خادم.',
	tool_ip_range_to_cidr_description:
		'تحويل نطاق IP إلى CIDR: الصق البداية والنهاية (أو عدة أسطر) لتحصل على بادئات تغطي الفترة. مثال: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. إن لم تتماشَ الحدود تظهر عدة بادئات. العناوين تبقى على جهازك ولا تُرفع إلى خادم.',
	tool_ip_range_to_cidr_article:
		'حوّل صيغة البداية–النهاية الشائعة في قوائم ACL إلى بادئات CIDR جاهزة للقواعد. IPv4 وIPv6 في دفعات منفصلة.',
	tool_ip_range_to_cidr_convert: 'تحويل',
	tool_ip_range_to_cidr_sample: 'تحميل مثال',
	tool_ip_range_to_cidr_clear: 'مسح',
	tool_ip_range_to_cidr_copy: 'نسخ CIDR',
	tool_ip_range_to_cidr_copy_done: 'تم النسخ',
	tool_ip_range_to_cidr_input_label: 'نطاقات IP (سطر لكل نطاق)',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'بادئات CIDR',
	tool_ip_range_to_cidr_meta_label: 'ملخص',
	tool_ip_range_to_cidr_meta_tpl: '{n} بادئة · {family}',
	tool_ip_range_to_cidr_swap_hint: 'تم تبديل البداية والنهاية لأن العنوان الأول كان أكبر.',
	tool_ip_range_to_cidr_err_empty: 'أدخل نطاقًا واحدًا على الأقل (بداية - نهاية)، سطر لكل نطاق.',
	tool_ip_range_to_cidr_err_parse: 'تعذّر فهم هذا السطر كعنوان أو نطاق.',
	tool_ip_range_to_cidr_err_mixed: 'لا تخلط IPv4 وIPv6 في التحويل نفسه.',
	tool_ip_range_to_cidr_err_limit: 'عدد بادئات CIDR تجاوز الحد الآمن. قلّص النطاقات.',
	tool_ip_range_to_cidr_how_title: 'طريقة العمل',
	tool_ip_range_to_cidr_how_body:
		'النتيجة تغطي كل عنوان في الفترة المغلقة ببادئة واحدة أو أكثر—مناسب عندما يطلب الجدار الناري CIDR فقط.',
	tool_ip_range_to_cidr_how_item_1: 'افهم أن الحدود غير المحاذاة تنتج عدة بادئات دقيقة.',
	tool_ip_range_to_cidr_how_item_2: 'الصق «A - B» أو سطرًا لكل نطاق للتجميع.',
	tool_ip_range_to_cidr_how_item_3: 'حوّل وانسخ القائمة.',
	tool_ip_range_to_cidr_how_item_4: 'عند العكس يظهر تنبيه التبديل؛ عند الخلط أصلح العائلة.',
	tool_ip_range_to_cidr_formula_title: 'القاعدة',
	tool_ip_range_to_cidr_formula_body:
		'من العنوان الحالي حتى النهاية: اختر أكبر كتلة قوة اثنين محاذاة وما زالت داخل المتبقي.',
	tool_ip_range_to_cidr_formula_item_1: 'حوّل الطرفين إلى عدد صحيح؛ عائلة واحدة.',
	tool_ip_range_to_cidr_formula_item_2: 'إن كانت البداية أكبر، بدّل مع تنبيه.',
	tool_ip_range_to_cidr_formula_item_3: 'بتات المضيف = الأصفار اللاحقة ∩ سقف القوة لاثنين للطول المتبقي.',
	tool_ip_range_to_cidr_formula_item_4: 'أصدر الشبكة/الطول وتقدّم بـ 2^بتات.',
	tool_ip_range_to_cidr_example_title: 'مثال',
	tool_ip_range_to_cidr_example:
		'المدخل: 192.168.1.0 - 192.168.1.255. الناتج: 192.168.1.0/24. غير المحاذاة 10.0.0.10 - 10.0.0.20 تعطي 10.0.0.10/31 و10.0.0.12/30 و10.0.0.16/30 و10.0.0.20/32.',
	tool_ip_range_to_cidr_usecases_title: 'حالات الاستخدام',
	tool_ip_range_to_cidr_usecase_1: 'تحويل تصدير ACL من بداية–نهاية إلى قواعد CIDR.',
	tool_ip_range_to_cidr_usecase_2: 'ملء مجموعات أمان السحابة التي تقبل CIDR فقط.',
	tool_ip_range_to_cidr_usecase_3: 'تجميع عدة نطاقات خاصة من تذكرة (سطر لكل منها).',
	tool_ip_range_to_cidr_faq_q1: 'هل تُرفع عناويني؟',
	tool_ip_range_to_cidr_faq_a1: 'لا. تبقى على جهازك في علامة التبويب هذه دون رفع إلى خادم.',
	tool_ip_range_to_cidr_faq_q2: 'لماذا تظهر عدة CIDR؟',
	tool_ip_range_to_cidr_faq_a2: 'بدون حدود نظيفة لا تغطي بادئة واحدة الفترة بدقة؛ تُصدر عدة بادئات محاذاة.',
	tool_ip_range_to_cidr_faq_q3: 'ماذا لو لصقت العنوان الأكبر أولًا؟',
	tool_ip_range_to_cidr_faq_a3: 'يُبدّل الطرفان مع تلميح قصير ثم يُكمَل التحويل.',
	tool_ip_range_to_cidr_faq_q4: 'هل يمكن خلط IPv4 وIPv6؟',
	tool_ip_range_to_cidr_faq_a4: 'لا. دفعة واحدة لعائلة واحدة؛ حوّل كل عائلة على حدة.',
	tool_ip_range_to_cidr_faq_q5: 'كيف يعمل التجميع متعدد الأسطر؟',
	tool_ip_range_to_cidr_faq_a5: 'كل سطر يُحوَّل وحده؛ لا تُدمَج الفجوات بين الأسطر.',
	tool_ip_range_to_cidr_faq_q6: 'أين «CIDR إلى نطاق IP»؟',
	tool_ip_range_to_cidr_faq_a6: 'هذه الصفحة من النطاق إلى البادئات فقط؛ التوسيع العكسي أداة أخرى.',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — توجيه CIDR',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — عنونة IPv6',
	tool_ip_range_to_cidr_disclaimer:
		'البادئات تغطي الفترة المغلقة التي أدخلتها. ليست محاكي بروتوكول توجيه؛ راجع تغييرات ACL الحرجة في مختبرك.',
};

export default ar;
