/**
 * i18n tool shard (terraform-cidrsubnet / ar).
 * بحث محلي: terraform cidrsubnet، حساب cidrsubnet، الشبكة الفرعية.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — احسب بادئة الشبكة الفرعية كما يعيدها Terraform',
	tool_terraform_cidrsubnet_desc:
		'حساب terraform cidrsubnet. مثال: 10.1.2.0/24، 4، 15 → 10.1.2.240/28. يبقى على جهازك دون رفع إلى خادم.',
	tool_terraform_cidrsubnet_description:
		'حساب terraform cidrsubnet: أدخل البادئة الأم وnewbits وnetnum لتحصل على CIDR الابن. مثال: cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28. يمكن أيضاً تقييم cidrhost وcidrnetmask. الأرقام تبقى على جهازك ولا تُرفع إلى خادم.',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet يعيد بادئة شبكة ابنة لا عنوان مضيف. newbits عدد البتات الإضافية لا «أربع شبكات». netnum يبدأ من صفر. cidrhost للمضيف وcidrnetmask لقناع IPv4 فقط. الحساب في المتصفح وفق قواعد HashiCorp.',
	tool_terraform_cidrsubnet_evaluate: 'احسب',
	tool_terraform_cidrsubnet_sample: 'تحميل مثال',
	tool_terraform_cidrsubnet_clear: 'مسح',
	tool_terraform_cidrsubnet_copy_cidr: 'نسخ CIDR',
	tool_terraform_cidrsubnet_copy_hcl: 'نسخ HCL',
	tool_terraform_cidrsubnet_copy_ip: 'نسخ العنوان',
	tool_terraform_cidrsubnet_copy_done: 'تم النسخ',
	tool_terraform_cidrsubnet_prefix_label: 'البادئة الأم',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: 'CIDR الابن',
	tool_terraform_cidrsubnet_result_hcl_label: 'استدعاء HCL',
	tool_terraform_cidrsubnet_result_len_label: 'طول البادئة الجديد',
	tool_terraform_cidrsubnet_result_range_label: 'netnum المسموح',
	tool_terraform_cidrsubnet_result_bits_label: 'تقسيم البتات',
	tool_terraform_cidrsubnet_table_title: 'كل قيم netnum لهذا newbits',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: 'دوال ذات صلة',
	tool_terraform_cidrsubnet_host_prefix_label: 'بادئة cidrhost',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'احسب cidrhost',
	tool_terraform_cidrsubnet_host_result_label: 'عنوان المضيف',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'بادئة cidrnetmask (IPv4 فقط)',
	tool_terraform_cidrsubnet_netmask_evaluate: 'احسب cidrnetmask',
	tool_terraform_cidrsubnet_netmask_result_label: 'قناع الشبكة',
	tool_terraform_cidrsubnet_err_empty: 'أدخل بادئة CIDR وقيمتين صحيحتين لـ newbits وnetnum.',
	tool_terraform_cidrsubnet_err_prefix: 'هذه ليست بادئة CIDR (يلزم عنوان/طول، IPv4 أو IPv6).',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits عدد صحيح ≥ 0، ومجموع الطول لا يتجاوز 32 (IPv4) أو 128 (IPv6).',
	tool_terraform_cidrsubnet_err_netnum:
		'newbits={nb} يتسع فقط لـ netnum 0–{max}؛ {nn} لا تتسع — Terraform يرفضها أيضاً.',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum لا يتسع في بتات المضيف المتبقية.',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask لـ IPv4 فقط. استخدم cidrsubnet أو cidrhost مع IPv6.',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'الأم /{old} زائد {nb} بت → /{neu}. netnum {nn} يملأ البتات الإضافية؛ بتات المضيف المتبقية: {hb}.',
	tool_terraform_cidrsubnet_how_title: 'طريقة العمل',
	tool_terraform_cidrsubnet_how_body:
		'انسخ وسيطات cidrsubnet من ملف HCL إلى هذه الحقول لترى CIDR قبل التطبيق.',
	tool_terraform_cidrsubnet_how_item_1: 'cidrsubnet يعيد بادئة شبكة ابنة. عنوان المضيف يأتي من cidrhost.',
	tool_terraform_cidrsubnet_how_item_2: 'الصق CIDR الأب من متغير Terraform (مثال 10.1.2.0/24).',
	tool_terraform_cidrsubnet_how_item_3: 'عيّن newbits (بتات إضافية) وnetnum (رقم الشبكة من صفر).',
	tool_terraform_cidrsubnet_how_item_4: 'اقرأ CIDR الابن وانسخ استدعاء HCL أو قارنه مع terraform console.',
	tool_terraform_cidrsubnet_how_item_5: 'إن لم يتسع newbits لـ netnum تظهر رسالة خطأ — Terraform يرفض القيم نفسها.',
	tool_terraform_cidrsubnet_formula_title: 'قواعد الحساب',
	tool_terraform_cidrsubnet_formula_body:
		'تُصفَّر بتات المضيف في العنوان الأب ثم يُكتب netnum في البتات الإضافية. الأصفار البادئة في ثمانيات IPv4 تُقرأ عشرياً كما وثّقت HashiCorp.',
	tool_terraform_cidrsubnet_formula_item_1: 'الطول الجديد = طول الأب + newbits (IPv4 ≤32، IPv6 ≤128).',
	tool_terraform_cidrsubnet_formula_item_2: '0 ≤ netnum < 2^newbits.',
	tool_terraform_cidrsubnet_formula_item_3: 'عنوان الشبكة OR (netnum مزاحاً بعدد بتات المضيف المتبقية).',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost يضع hostnum في بتات المضيف (السالب من النهاية). cidrnetmask قناع IPv4 بالنقاط.',
	tool_terraform_cidrsubnet_example_title: 'مثال',
	tool_terraform_cidrsubnet_example:
		'المدخل: 10.1.2.0/24 وnewbits 4 وnetnum 15. الناتج: 10.1.2.240/28. أربع بتات تتسع لـ 0–15، والعدد 15 يملأ نصف الثمانية الأخيرة فيصبح 240.',
	tool_terraform_cidrsubnet_usecases_title: 'متى يفيد',
	tool_terraform_cidrsubnet_usecase_1:
		'معاينة شبكات VPC: cidrsubnet(var.vpc_cidr, 8, count.index) — المنطقة 0 هي netnum 0.',
	tool_terraform_cidrsubnet_usecase_2:
		'مطابقة المثال الرسمي 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28 ثم cidrhost على /28 للمضيفين 1 و14.',
	tool_terraform_cidrsubnet_usecase_3:
		'تقسيم ULA لـ IPv6: cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72.',
	tool_terraform_cidrsubnet_faq_q1: 'هل newbits=4 يعني أربع شبكات؟',
	tool_terraform_cidrsubnet_faq_a1:
		'لا. هي أربع بتات إضافية للبادئة: 16 قيمة netnum (0–15) والابن أطول بأربع بتات (/24 تصبح /28).',
	tool_terraform_cidrsubnet_faq_q2: 'لماذا يفشل netnum 16 عندما newbits=4؟',
	tool_terraform_cidrsubnet_faq_a2:
		'أربع بتات تخزّن 0–15 فقط. Terraform لا يلفّ الرقم بل يرفضه. الصفحة تفعل المثل حتى لا تُنسخ بادئة لن تُطبَّق.',
	tool_terraform_cidrsubnet_faq_q3: 'ما الفرق بين cidrhost وcidrsubnet؟',
	tool_terraform_cidrsubnet_faq_a3:
		'cidrsubnet يعيد بادئة بطول. cidrhost يعيد عنوان مضيف واحد. hostnum 0 عنوان الشبكة؛ السالب يُعدّ من النهاية (cidrhost("10.0.0.0/8", -2) → 10.255.255.254).',
	tool_terraform_cidrsubnet_faq_q4: 'لماذا يرفض cidrnetmask عنوان IPv6؟',
	tool_terraform_cidrsubnet_faq_a4:
		'دالة HashiCorp لـ IPv4 فقط وتعيد قناعاً بالنقاط مثل 255.255.255.0. مع IPv6 أبقِ طول البادئة واستخدم cidrsubnet أو cidrhost.',
	tool_terraform_cidrsubnet_faq_q5: 'هل تُقيَّم cidrsubnets أو وحدة hashicorp/subnets/cidr؟',
	tool_terraform_cidrsubnet_faq_a5:
		'لا. الصيغة الجمع cidrsubnets تخصّص بادئات متتالية من الصفر. وحدة Registry أداة أخرى. هنا استدعاء واحد في كل مرة.',
	tool_terraform_cidrsubnet_faq_q6: 'هل تُرفع البادئات إلى الخادم؟',
	tool_terraform_cidrsubnet_faq_a6:
		'لا. تبقى على جهازك في علامة التبويب هذه ولا تُرفع إلى خادم. إن احتجت إصداراً معيّناً من CLI فاستخدم terraform console.',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — دالة cidrsubnet',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — دالة cidrhost',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — دالة cidrnetmask',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — ترميز CIDR',
	tool_terraform_cidrsubnet_disclaimer:
		'الهدف محاذاة دوال HashiCorp. هذه الصفحة ليست terraform console؛ عند اختلاف الإصدارات راجع الوثائق الرسمية.',
};

export default ar;
