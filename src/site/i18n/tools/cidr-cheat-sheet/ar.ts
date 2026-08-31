/**
 * i18n tool shard (cidr-cheat-sheet / ar).
 * استعلامات: ورقة غش cidr / جدول cidr / ما هو cidr.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'ورقة مرجع CIDR — انقر بادئة لرؤية القناع والمضيفين',
	tool_cidr_cheat_sheet_desc:
		'ورقة مرجع CIDR: انقر /8–/32 للقناع والبدل وعدد المضيفين. نفس جدول مخطط CIDR. تبقى على جهازك.',
	tool_cidr_cheat_sheet_description:
		'ورقة مرجع CIDR: انقر أي بادئة من /8 إلى /32 لمعرفة قناع الشبكة والبدل وعدد المضيفين القابلين للاستخدام. مثال: /24 → 255.255.255.0 و254 مضيفاً. تتضمن عمود CompTIA وهوامش /31 و/32. نفس الجدول المقصود بـ CIDR chart. لتوسيع كتلة معيّنة استخدم CIDR إلى نطاق IP. النقر في المتصفح ولا يُرفع إلى خادم.',
	tool_cidr_cheat_sheet_article: 'جدول بادئات IPv4 قابل للنقر. ليست حاسبة لعنوان مضيف عشوائي.',
	tool_cidr_cheat_sheet_sample: 'تحميل مثال',
	tool_cidr_cheat_sheet_clear: 'إزالة التظليل',
	tool_cidr_cheat_sheet_jump: 'عرض',
	tool_cidr_cheat_sheet_jump_label: 'الانتقال إلى البادئة',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: 'البادئة المحددة',
	tool_cidr_cheat_sheet_col_prefix: 'البادئة',
	tool_cidr_cheat_sheet_col_mask: 'قناع الشبكة',
	tool_cidr_cheat_sheet_col_wild: 'البدل',
	tool_cidr_cheat_sheet_col_hosts: 'مضيفون قابلون للاستخدام',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'شائع في جداول Network+',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'إجمالي العناوين',
	tool_cidr_cheat_sheet_note_31: '/31: العنوانان قابلان للاستخدام (RFC 3021).',
	tool_cidr_cheat_sheet_note_32: '/32: مضيف واحد. الشبكة هي العنوان نفسه.',
	tool_cidr_cheat_sheet_err_jump: 'أدخل بادئة صحيحة من 8 إلى 32.',
	tool_cidr_cheat_sheet_how_title: 'كيف تعمل',
	tool_cidr_cheat_sheet_how_body:
		'ورقة مرجع CIDR تطابق طول الشرطة المائلة مع القناع وعدد المضيفين. انقر صفاً بدل فتح PDF.',
	tool_cidr_cheat_sheet_how_item_1: 'أكد أن المهمة بحث بادئة لا توسيع عنوان معيّن.',
	tool_cidr_cheat_sheet_how_item_2: 'انقر صفاً من /8 إلى /32 أو اكتب البادئة ثم عرض (المثال يختار /24).',
	tool_cidr_cheat_sheet_how_item_3: 'اقرأ القناع والبدل والمضيفين وعمود CompTIA.',
	tool_cidr_cheat_sheet_how_item_4: 'لـ /31 و/32 اقرأ الهامش ولا تطرح اثنين.',
	tool_cidr_cheat_sheet_how_item_5: 'لتوسيع 192.168.1.0/24 استخدم CIDR إلى نطاق IP.',
	tool_cidr_cheat_sheet_formula_title: 'القواعد',
	tool_cidr_cheat_sheet_formula_body:
		'القناع = 2^32 − 2^(32−n). البدل عكس القناع. المضيفون: /32 → 1؛ /31 → 2؛ وإلا 2^(32−n) − 2.',
	tool_cidr_cheat_sheet_formula_item_1: 'بادئات IPv4 من /8 إلى /32 فقط.',
	tool_cidr_cheat_sheet_formula_item_2: 'عمود CompTIA تلميح دراسي وليس المنهج الرسمي.',
	tool_cidr_cheat_sheet_formula_item_3: 'هوامش /31 و/32 تتجاوز قاعدة طرح اثنين.',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR = Classless Inter-Domain Routing. CIDR البيطري كلمة أخرى.',
	tool_cidr_cheat_sheet_example_title: 'مثال',
	tool_cidr_cheat_sheet_example:
		'اختر /24. الناتج: قناع 255.255.255.0، بدل 0.0.0.255، مضيفون 254، إجمالي 256. مطابق للمثال الافتراضي.',
	tool_cidr_cheat_sheet_usecases_title: 'متى يفيد',
	tool_cidr_cheat_sheet_usecase_1: 'مراجعة /24 /25 /26 قبل سؤال جداول Network+.',
	tool_cidr_cheat_sheet_usecase_2: 'معرفة مضيفين /28 قبل كتابة ACL.',
	tool_cidr_cheat_sheet_usecase_3: 'شرح أن slash 24 يعني 256 عنواناً وقناعاً 255.255.255.0.',
	tool_cidr_cheat_sheet_faq_q1: 'ماذا يعني CIDR؟',
	tool_cidr_cheat_sheet_faq_a1: 'Classless Inter-Domain Routing. الشرطة المائلة طول البادئة. هذه ورقة مرجع وليست دورة شبكات.',
	tool_cidr_cheat_sheet_faq_q2: 'أي بادئات تظهر في جداول CompTIA؟',
	tool_cidr_cheat_sheet_faq_a2: 'غالباً /8 و/16 و/24 والقريبة /25–/28 و/30. العمود يعلّمها وليس منهجاً رسمياً.',
	tool_cidr_cheat_sheet_faq_q3: 'كيف يُحسب /31 و/32؟',
	tool_cidr_cheat_sheet_faq_a3: '/32 مضيف واحد. /31 حسب RFC 3021 عنوانان. الباقي يطرح اثنين.',
	tool_cidr_cheat_sheet_faq_q4: 'هل هذا زرع CIDR البيطري؟',
	tool_cidr_cheat_sheet_faq_a4: 'لا. في الزراعة CIDR معنى آخر. هنا بادئات الشبكات فقط.',
	tool_cidr_cheat_sheet_faq_q5: 'هل أوسّع 192.168.1.37/24 هنا؟',
	tool_cidr_cheat_sheet_faq_a5: 'لا. استخدم CIDR إلى نطاق IP.',
	tool_cidr_cheat_sheet_faq_q6: 'هل تُرفع النقرات؟',
	tool_cidr_cheat_sheet_faq_a6: 'لا. تبقى على جهازك في هذا التبويب ولا تُرفع إلى خادم.',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — التوجيه بين النطاقات بلا فئات',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — بادئات 31 بت على روابط نقطة-إلى-نقطة',
	tool_cidr_cheat_sheet_disclaimer:
		'الأرقام تتبع حساب CIDR لـ IPv4 الشائع. عمود CompTIA تلميح دراسي وليس منهجاً رسمياً.',
};

export default ar;
