/**
 * i18n 工具分片（convert-word-document-to-pdf / ar）。
 * 阿拉伯语检索向重写：تحويل مستند وورد إلى PDF。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；仅在浏览器内处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 阿拉伯语文案表；键名与英文母版一一对应。 */
const ar: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: "يتحول ملف .docx إلى PDF في هذا التبويب. يبقى الملف على جهازك ولا يُرفع إلى خادم.",
  tool_convert_word_document_to_pdf_choose_file: "اختر ملف وورد (.docx)",
  tool_convert_word_document_to_pdf_choose_files: "اختر ملفات",
  tool_convert_word_document_to_pdf_clear: "مسح",
  tool_convert_word_document_to_pdf_convert: "تحويل",
  tool_convert_word_document_to_pdf_desc: "تحويل مستند وورد إلى PDF في المتصفح: اختر .docx، راجع معاينة HTML ثم صدّر. يبقى الملف على الجهاز ولا يُرفع إلى خادم.",
  tool_convert_word_document_to_pdf_description: "الترويسات والأشكال العائمة قد تتسطح لأن المسار من ملف docx إلى معاينة HTML ثم PDF. اختر الملف عبر «اختر ملف وورد (.docx)»، راجع المعاينة، ثم «تحويل» و«تنزيل PDF». يبقى الملف على هذا الجهاز ولا يُرفع إلى خادم. «تحميل العينة» مثال عملي: فقرة واحدة وملف PDF من صفحة واحدة.",
  tool_convert_word_document_to_pdf_download: "تنزيل PDF",
  tool_convert_word_document_to_pdf_drop_hint: "أو أفلت ملف .docx هنا. تبقى المعالجة داخل هذا التبويب.",
  tool_convert_word_document_to_pdf_empty: "اختر ملف .docx أولًا.",
  tool_convert_word_document_to_pdf_err_convert: "فشل التحويل. أعد المحاولة بمستند أبسط.",
  tool_convert_word_document_to_pdf_err_encrypted: "يبدو أن الملف محمي بكلمة مرور. فك الحماية أولًا.",
  tool_convert_word_document_to_pdf_err_load: "تعذر قراءة ملف .docx.",
  tool_convert_word_document_to_pdf_err_notext: "لا يوجد نص أساسي مقروء في هذا المستند.",
  tool_convert_word_document_to_pdf_err_pdfjs: "تعذر تحميل عارض PDF.",
  tool_convert_word_document_to_pdf_example: "«تحميل العينة» ينشئ ملف .docx فيه الجملة «فقرة وورد نموذجية للتحويل.» ثم يعرض معاينة HTML ويصدّر PDF من صفحة واحدة.",
  tool_convert_word_document_to_pdf_example_title: "مثال",
  tool_convert_word_document_to_pdf_faq_a1: "لا. القراءة وتصدير PDF يجريان في هذا التبويب، وتُحمَّل النصوص البرمجية من هذا الموقع. لا يُرفع المستند إلى خوادمنا.",
  tool_convert_word_document_to_pdf_faq_a2: "المسار من .docx إلى معاينة HTML ثم إلى PDF، لذلك تتسطح الترويسات والأشكال العائمة وبعض الخطوط. إذا كان الترميز جاهزًا لديك، استخدم «تحويل HTML إلى PDF».",
  tool_convert_word_document_to_pdf_faq_a3: "لا. احفظه أولًا بصيغة .docx. هذه الصفحة تقبل حزمة Office Open XML فقط، ولا تقرأ النص من صورة ممسوحة.",
  tool_convert_word_document_to_pdf_faq_a4: "هذه الصفحة تبدأ من ملف وورد موجود. «كتابة مستند PDF أونلاين» محرر فارغ تبدأ فيه من صفحة بيضاء.",
  tool_convert_word_document_to_pdf_faq_a5: "ملفات .docx الكبيرة قد تبطئ. جرّب أولًا متصفح سطح المكتب.",
  tool_convert_word_document_to_pdf_faq_q1: "هل يغادر ملف وورد هذا الجهاز؟",
  tool_convert_word_document_to_pdf_faq_q2: "لماذا يبدو PDF أبسط مما في وورد؟",
  tool_convert_word_document_to_pdf_faq_q3: "هل أستطيع تحويل ملف .doc القديم؟",
  tool_convert_word_document_to_pdf_faq_q4: "ما الفرق عن كتابة PDF في المتصفح؟",
  tool_convert_word_document_to_pdf_faq_q5: "هل الملفات الكبيرة مدعومة؟",
  tool_convert_word_document_to_pdf_how_body: "ابدأ بـ«اختر ملف وورد (.docx)» أو «تحميل العينة»، اقرأ معاينة HTML، ثم «تحويل» و«تنزيل PDF». لا يغادر الملف هذا التبويب.",
  tool_convert_word_document_to_pdf_how_item_1: "اضغط «اختر ملف وورد (.docx)» أو «تحميل العينة».",
  tool_convert_word_document_to_pdf_how_item_2: "اقرأ معاينة HTML لنص المتن.",
  tool_convert_word_document_to_pdf_how_item_3: "اضغط «تحويل» لبناء PDF من هذه المعاينة.",
  tool_convert_word_document_to_pdf_how_item_4: "اضغط «تنزيل PDF» عندما تظهر الحالة «تم.».",
  tool_convert_word_document_to_pdf_how_title: "كيف تحوّل مستند وورد إلى PDF",
  tool_convert_word_document_to_pdf_preview_label: "معاينة HTML",
  tool_convert_word_document_to_pdf_rules_body: "يُقبل .docx فقط. قد يتسطح التخطيط والترويسات والأنماط المعقدة في PDF.",
  tool_convert_word_document_to_pdf_rules_item_1: "المهمة: جعل مستند وورد ملف PDF قابلًا للطباعة داخل المتصفح.",
  tool_convert_word_document_to_pdf_rules_item_2: "على جهازك فقط؛ لا يُرفع الملف إلى خادم.",
  tool_convert_word_document_to_pdf_rules_item_3: "ملفات .doc القديمة والصور الممسوحة بلا نص لا تمر بتعرّف ضوئي على الحروف.",
  tool_convert_word_document_to_pdf_rules_item_4: "الحزمة المشفرة أو التالفة تتوقف مع رسالة يمكن قراءتها.",
  tool_convert_word_document_to_pdf_rules_item_5: "تتسطح الترويسات والأشكال العائمة وبعض الخطوط لأن المسار من .docx إلى HTML ثم إلى PDF.",
  tool_convert_word_document_to_pdf_rules_title: "ما الذي يبقى بعد التحويل",
  tool_convert_word_document_to_pdf_sample: "تحميل العينة",
  tool_convert_word_document_to_pdf_sample_paragraph: "فقرة وورد نموذجية للتحويل.",
  tool_convert_word_document_to_pdf_status_done: "تم.",
  tool_convert_word_document_to_pdf_status_working: "جارٍ التحويل…",
  tool_convert_word_document_to_pdf_title: "تحويل مستند وورد إلى PDF",
  tool_convert_word_document_to_pdf_usecase_1: "مكتب بلا وورد على سطح المكتب، لتسليم المسودة كملف PDF",
  tool_convert_word_document_to_pdf_usecase_2: "طالب يراجع مستندًا قصيرًا قبل الطباعة",
  tool_convert_word_document_to_pdf_usecase_3: "رسالة حساسة يجب أن تبقى على الجهاز",
  tool_convert_word_document_to_pdf_usecases_title: "متى يفيدك هذا",
  tool_convert_word_document_to_pdf_warn_large: "الملف كبير وقد يكون بطيئًا.",
};
export default ar;
