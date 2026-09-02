/**
 * i18n tool shard (spf-dkim-dmarc-checker / ar).
 * بحث: فاحص SPF DKIM DMARC؛ فحص سجل DMARC؛ استعلام SPF.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'فاحص SPF DKIM DMARC',
	tool_spf_dkim_dmarc_checker_desc:
		'افحص سجلات SPF وDKIM وDMARC للنطاق واقرأ سياسة ~all/-all وp= بلغة واضحة.',
	tool_spf_dkim_dmarc_checker_description:
		'أدخل نطاق الإرسال ومحدّد DKIM اختياريًا (الافتراضي google). يستعلم DoH عن SPF و_dmarc وselector._domainkey ويشرح ~all/-all وp=. مثال: google.com.',
	tool_spf_dkim_dmarc_checker_domain_label: 'النطاق',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'محدد DKIM',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: 'فحص',
	tool_spf_dkim_dmarc_checker_sample: 'مثال',
	tool_spf_dkim_dmarc_checker_clear: 'مسح',
	tool_spf_dkim_dmarc_checker_running: 'جاري استعلام SPF وDKIM وDMARC عبر DNS…',
	tool_spf_dkim_dmarc_checker_domain_error: 'أدخل اسم نطاق صالحًا (المضيف فقط، أو الصق عنوان URL كاملًا).',
	tool_spf_dkim_dmarc_checker_error_prefix: 'خطأ: ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'فشل استعلام DNS. قد يكون المحلّل غير متاح أو الاسم محظورًا.',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'يُرسل النطاق ومحدّد DKIM إلى Worker لإجراء DNS-over-HTTPS. لا نخزّنهما كقاعدة بيانات منتج.',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'موجود',
	tool_spf_dkim_dmarc_checker_result_found_no: 'غير موجود',
	tool_spf_dkim_dmarc_checker_result_record: 'السجل',
	tool_spf_dkim_dmarc_checker_result_explain: 'التوضيح',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'مُؤهّل all',
	tool_spf_dkim_dmarc_checker_result_policy: 'سياسة DMARC (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'المحدد',
	tool_spf_dkim_dmarc_checker_result_pubkey: 'المفتاح العام (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'موجود',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'مفقود أو فارغ',
	tool_spf_dkim_dmarc_checker_how_title: 'طريقة العمل',
	tool_spf_dkim_dmarc_checker_how_body:
		'فحوصات التسليم تحتاج عادة SPF وDKIM وDMARC معًا. أدخل نطاق الإرسال، غيّر المحدد عند الحاجة، ثم اقرأ كل TXT مع ملخص السياسة.',
	tool_spf_dkim_dmarc_checker_how_item_1: 'أدخل نطاق الإرسال ومحدّد DKIM الاختياري (الافتراضي google).',
	tool_spf_dkim_dmarc_checker_how_item_2: 'انقر «فحص»؛ يستعلم Worker عبر DoH عن TXT لـ SPF و_dmarc وselector._domainkey.',
	tool_spf_dkim_dmarc_checker_how_item_3: 'اقرأ كل سجل مع شرح ~all/-all وسياسة DMARC p=.',
	tool_spf_dkim_dmarc_checker_how_item_4: 'أصلح DNS لدى مزوّدك ثم أعد الفحص — الصفحة لا تعيد كتابة منطقتك.',
	tool_spf_dkim_dmarc_checker_formula_title: 'ما الذي نستعلم عنه',
	tool_spf_dkim_dmarc_checker_formula_body:
		'تتبع الاستعلامات أشكال TXT العامة في RFC 7208 و6376 و7489. نلخّص حقول السياسة دون إرسال بريد أو فحص صناديق.',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF: TXT على النطاق يبدأ بـ v=spf1؛ نعرض مُؤهّل all النهائي (~all فشل مرن، -all صارم).',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC: TXT على _dmarc.النطاق يبدأ بـ v=DMARC1؛ نبرز p= (none / quarantine / reject) وpct اختياريًا.',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM: TXT على {selector}._domainkey.النطاق؛ نتحقق من وجود مفتاح عام p= غير فارغ.',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'السجلات المفقودة تُعلن بوضوح. فشل DoH يظهر كخطأ — وليس اختبار توقيع حي من مزوّد البريد.',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'لا فحص SMTP RCPT ولا تعديل للمنطقة. أداة «هل يوجد عنوان البريد؟» خارج النطاق.',
	tool_spf_dkim_dmarc_checker_example_title: 'مثال',
	tool_spf_dkim_dmarc_checker_example:
		'مدخل المثال google.com مع محدد DKIM google. يستعلم Worker عن SPF و_dmarc.google.com وgoogle._domainkey.google.com ويعرض موجود/سجل/توضيح.',
	tool_spf_dkim_dmarc_checker_usecases_title: 'متى يفيد',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'قبل الإطلاق: بعد نشر DNS لمزوّد البريد، تأكد من وجود SPF وDKIM وDMARC لنطاق الإرسال.',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'فحص سجل DMARC: اقرأ p=none مقابل quarantine/reject بلغة واضحة دون الاعتماد على النص الخام فقط.',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'استعلام SPF عند وصول الرسائل للمزعجات: انظر ~all أو -all ثم وافق محدد DKIM مع مزوّدك.',
	tool_spf_dkim_dmarc_checker_faq_q1: 'لماذا ثلاثة سجلات في صفحة واحدةحدة؟',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'مزوّدو البريد يقيّمون الثلاثة عادةً معًا. فحص DMARC وحده قد يغفل SPF معطّلًا أو محدد DKIM خاطئًا.',
	tool_spf_dkim_dmarc_checker_faq_q2: 'ما محدد DKIM الافتراضي؟',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google — شائع في Google Workspace. غيّره إن نشر مزوّدك محددًا آخر (مثل s1 أو k1).',
	tool_spf_dkim_dmarc_checker_faq_q3: 'هل هذا مدقق لوجود عنوان بريد؟',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'لا. مصادقة DNS للنطاق فقط (استعلام SPF ومفتاح DKIM وسياسة DMARC). وجود الصناديق خارج النطاق.',
	tool_spf_dkim_dmarc_checker_faq_q4: 'هل النتيجة نص TXT خام فقط؟',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'لا. تشمل السجل وسطر توضيح لآليات SPF all وسياسة DMARC p=.',
	tool_spf_dkim_dmarc_checker_faq_q5: 'هل يُحفظ نطاقي؟',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'يجب أن يصل النطاق والمحدد إلى Worker لـ DNS-over-HTTPS. لا نخزّن الفحوصات كقاعدة منتج دائمة. هذه أداة DNS طرفية وليست «بدون رفع».',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF؛ RFC 6376 DKIM؛ RFC 7489 DMARC.',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default ar;
