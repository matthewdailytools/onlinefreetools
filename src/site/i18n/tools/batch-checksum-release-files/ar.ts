/**
 * i18n tool shard (batch-checksum-release-files / ar).
 * H1 يتبع بحث «حساب تحقق ملفات الإصدار دفعة واحدة».
 */
import type { SiteLangDict } from '../../../types';

/** العربية: جدول SHA-256 لملفات الإصدار ومقارنة SUMS. */
const ar: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'احسب هاش مجلد أصول الإصدار في هذا التبويب. تحصل على جدول وCSV وSHA256SUMS وليس ZIP للثنائيات. الصق قائمة رسمية لتعليم التطابق أو الاختلاف. الملفات تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_batch_checksum_release_files_choose_files: 'اختر الملفات',
	tool_batch_checksum_release_files_clear: 'مسح',
	tool_batch_checksum_release_files_col_compare: 'مقارنة',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'المسار',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'الحجم',
	tool_batch_checksum_release_files_desc:
		'حساب تحقق ملفات الإصدار دفعة واحدة: جدول SHA-256 وMD5 اختياري ولصق SHA256SUMS وتصدير CSV أو SUMS؛ تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_batch_checksum_release_files_description:
		'حساب تحقق ملفات الإصدار دفعة واحدة: أضف الأصول، احسب SHA-256 لكل ملف في هذا التبويب، أضف MD5 عند الحاجة، الصق قائمة SHA256SUMS للمقارنة، صدّر CSV أو نص SUMS — وليس ZIP للثنائيات. خطوات: اختر المجموعة، هاش الكل، الصق القائمة إن وُجدت، صدّر. مثال: ملفان تجريبيان صغيران يملآن صفين SHA-256 وعمود تطابق. الملفات تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_batch_checksum_release_files_drop_hint: 'أسقط ملفات الإصدار (حتى 20). الهاش يبقى في هذا التبويب. هذه الصفحة لا تضغط الأصول في ZIP.',
	tool_batch_checksum_release_files_empty: 'أضف ملفات أولاً.',
	tool_batch_checksum_release_files_err_md5: 'لم تُحمَّل مكتبة MD5. جرّب متصفحاً أحدث أو اترك MD5 مطفأ.',
	tool_batch_checksum_release_files_err_read: 'تعذّر قراءة هذا الملف. تم التخطي.',
	tool_batch_checksum_release_files_err_too_many: 'الحد 20 ملفاً. الزائد لم يُضَف.',
	tool_batch_checksum_release_files_example:
		'تحميل مثال يهشّ ملفين صغيرين، يملأ صفوف SHA-256، يلصق سطر SUMS للأول ليظهر تطابقاً، ويفعّل تصدير CSV وSUMS.',
	tool_batch_checksum_release_files_example_title: 'مثال',
	tool_batch_checksum_release_files_export_csv: 'تصدير CSV',
	tool_batch_checksum_release_files_export_sums: 'تصدير SUMS',
	tool_batch_checksum_release_files_faq_a1:
		'لا. الهاش يجري في هذا التبويب. الملفات تبقى على الجهاز ولا تُرفع إلى خادم. SHA-256 يستخدم Web Crypto. قد يُحمَّل crypto-js لـ MD5 من هذا الموقع؛ بايتاتك لا تغادر التبويب.',
	tool_batch_checksum_release_files_faq_a2:
		'لا. التصدير جدول CSV وملف SHA256SUMS. تعبئة الثنائيات هي إنشاء ZIP — مهمة أخرى.',
	tool_batch_checksum_release_files_faq_a3:
		'هاش الملف ملف واحد أو لصق. هذه الصفحة تهشّ مجموعة إصدار وتقارن SHA256SUMS الملصوق وتصدّر CSV وSUMS.',
	tool_batch_checksum_release_files_faq_a4:
		'شغّل «أيضاً MD5». SHA-256 يعمل دائماً. MD5 للقوائم القديمة وليس عنواناً ثانياً.',
	tool_batch_checksum_release_files_faq_a5:
		'عمود المسار يفضّل webkitRelativePath. الأسماء المكررة في الصف تأخذ لاحقة حتى لا تتصادم أسطر SUMS.',
	tool_batch_checksum_release_files_faq_q1: 'هل تُرفع الملفات إلى خادم؟',
	tool_batch_checksum_release_files_faq_q2: 'هل تُعبَّأ ثنائيات الإصدار في ZIP؟',
	tool_batch_checksum_release_files_faq_q3: 'ما الفرق عن هاش الملف؟',
	tool_batch_checksum_release_files_faq_q4: 'أين MD5؟',
	tool_batch_checksum_release_files_faq_q5: 'ماذا لو شارك ملفان الاسم؟',
	tool_batch_checksum_release_files_file_count_tpl: '{n} ملفات في الصف',
	tool_batch_checksum_release_files_hash_all: 'هاش الكل',
	tool_batch_checksum_release_files_how_body:
		'ضع أصول الإصدار، هاش كل ملف بـ SHA-256، الصق SHA256SUMS إن وُجد، ثم صدّر CSV أو SUMS — ليس ZIP للملفات.',
	tool_batch_checksum_release_files_how_item_1: 'اختر الثنائيات أو المثبّتات أو ملفات التحقق التي ستنشرها.',
	tool_batch_checksum_release_files_how_item_2: 'أبقِ SHA-256. شغّل أيضاً MD5 فقط إن كانت قائمة قديمة ما زالت تستخدمه.',
	tool_batch_checksum_release_files_how_item_3: 'اضغط هاش الكل. التقدّم لكل ملف. خطأ القراءة يتخطى ذلك الصف.',
	tool_batch_checksum_release_files_how_item_4: 'الصق قائمة SHA256SUMS رسمية لتعليم تطابق أو اختلاف أو نقص.',
	tool_batch_checksum_release_files_how_item_5: 'صدّر CSV أو SUMS عند نجاح هاش واحد على الأقل. لملف واحد استخدم هاش الملف.',
	tool_batch_checksum_release_files_how_title: 'كيف تحسب تحقق الرزمة',
	tool_batch_checksum_release_files_md5_label: 'احسب MD5 أيضاً',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 يستخدم Web Crypto على بايتات تُقرأ بشرائح 4 ميبيبايت ثم تُجمع. الخرج جدول وCSV وSUMS وليس ZIP للأصول.',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 يعمل دائماً. MD5 اختياري ويحمّل crypto-js من هذا الموقع؛ البايتات تبقى في التبويب.',
	tool_batch_checksum_release_files_rules_item_2:
		'أسطر SUMS تشبه sha256sum في GNU: ست عشري، مسافتان أو مسافة ونجمة، ثم الاسم. الأسماء الزائدة في اللصق تظهر ناقصة.',
	tool_batch_checksum_release_files_rules_item_3:
		'فشل القراءة يتخطى ذلك الصف. الأسماء المكررة تأخذ لاحقة. الصف الفارغ يعطّل التصدير.',
	tool_batch_checksum_release_files_rules_item_4:
		'الملفات تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_batch_checksum_release_files_rules_title: 'ما الذي تتوقعه',
	tool_batch_checksum_release_files_sample: 'تحميل مثال',
	tool_batch_checksum_release_files_status_done: 'انتهت الدفعة — راجع الجدول ثم صدّر CSV أو SUMS.',
	tool_batch_checksum_release_files_status_hashing: 'جارٍ هاش كل ملف إصدار…',
	tool_batch_checksum_release_files_status_match: 'مطابق',
	tool_batch_checksum_release_files_status_mismatch: 'غير مطابق',
	tool_batch_checksum_release_files_status_missing: 'مفقود',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'تم الهاش',
	tool_batch_checksum_release_files_status_skip: 'متخطى',
	tool_batch_checksum_release_files_summary_tpl: '{ok} هاش · {skip} متخطى · {match} مطابق · {mismatch} غير مطابق',
	tool_batch_checksum_release_files_sums_label: 'الصق SHA256SUMS للمقارنة',
	tool_batch_checksum_release_files_sums_placeholder: 'ست عشري  اسم الملف',
	tool_batch_checksum_release_files_title: 'حساب تحقق ملفات الإصدار دفعة واحدة',
	tool_batch_checksum_release_files_usecase_1: 'أصول GitHub Release تحتاج ملف SHA256SUMS بجانب التنزيلات.',
	tool_batch_checksum_release_files_usecase_2: 'مقارنة ملفات مرآة بقائمة تحقق المصدر.',
	tool_batch_checksum_release_files_usecase_3: 'هاش عدة ملفات دون تعبئة الثنائيات في ZIP.',
	tool_batch_checksum_release_files_usecases_title: 'متى يناسبك',
	tool_batch_checksum_release_files_warn_large: 'هناك ملف أكبر من 64 ميغابايت — قد تنفد ذاكرة هذا التبويب في ذلك الصف.',
};

export default ar;
