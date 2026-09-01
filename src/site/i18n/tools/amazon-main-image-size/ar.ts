/**
 * شريحة i18n لأداة amazon-main-image-size (ar).
 * العنوان يتبع عبارة البحث؛ أبعاد البكسل في الوصف والأسئلة لا في H1.
 */
import type { SiteLangDict } from '../../../types';

/** صياغة عربية لموقع أدوات، مكتوبة لهذا الجمهور وليست ترجمة هيكل إنجليزي. */
const ar: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'حوّل صورة المنتج إلى مربع أبيض ثم نزّل JPEG صالحًا كصورة رئيسية. تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_amazon_main_image_size_check_fill: 'املأ نحو 85٪ من الإطار',
	tool_amazon_main_image_size_choose_image: 'اختر صورة',
	tool_amazon_main_image_size_clear: 'مسح',
	tool_amazon_main_image_size_desc:
		'صدّر صورة أمازون الرئيسية 2000×2000 على أبيض مع حد تكبير 1000 بكسل — تبقى على جهازك.',
	tool_amazon_main_image_size_description:
		'حجم الصورة الرئيسية في أمازون: اختر صورة منتج، صدّر JPEG بمقاس 2000×2000 على خلفية بيضاء RGB 255، وتحقق من حد التكبير 1000 بكسل. مثال: صورة العينة تُوضع في نحو 85٪ من المربع. تبقى الملفات على جهازك دون رفع إلى خادم. هذه الصفحة ليست مراجعة رسمية من Seller Central.',
	tool_amazon_main_image_size_download: 'نزّل JPEG',
	tool_amazon_main_image_size_drop_hint: 'أسقط صورة منتج واحدة. المعالجة داخل هذا التبويب فقط.',
	tool_amazon_main_image_size_empty: 'اختر صورة المنتج أولًا.',
	tool_amazon_main_image_size_err_decode: 'تعذّر قراءة الصورة. جرّب JPEG أو PNG أو WebP.',
	tool_amazon_main_image_size_example:
		'«حمّل مثالًا» يرسم صورة منتج وهمية، يضعها على مربع أبيض 2000×2000 بنحو 85٪، ثم يفعّل تنزيل JPEG. شريحة التكبير تبين أن أطول ضلع يتجاوز 1000 بكسل.',
	tool_amazon_main_image_size_example_title: 'مثال',
	tool_amazon_main_image_size_faq_a1:
		'التصدير الافتراضي 2000×2000. المقاس 1600 شائع قديمًا وما زال متاحًا كشريحة. الأرقام لا تُكتب في العنوان الرئيسي.',
	tool_amazon_main_image_size_faq_a2:
		'تكبير أمازون يطلب عادة 1000 بكسل على الأقل في أطول ضلع. الشريحة تقارن ضلع التصدير بهذا الحد. تكبير صورة صغيرة جدًا قد يمرّ الرقم ويبقى المشهد باهتًا.',
	tool_amazon_main_image_size_faq_a3:
		'لا. تُفك الصورة في تبويب المتصفح هذا. لا شيء يُرفع إلى خوادمنا ولا يُرسل إلى أمازون من هنا.',
	tool_amazon_main_image_size_faq_a4:
		'صور المعرض ووحدات A+ لها مهام أخرى. هذه الصفحة للصورة الرئيسية فقط. للقص الحر استخدم أداة القص المرتبطة.',
	tool_amazon_main_image_size_faq_a5:
		'الصورة الرئيسية تُتوقع على أبيض نقي. الصفحة تملأ RGB 255,255,255 ويمكن الإبقاء على المنتج في نحو 85٪ من المربع حتى لا يُقص عند الحواف.',
	tool_amazon_main_image_size_faq_q1: 'لماذا 2000×2000 وليس 1600؟',
	tool_amazon_main_image_size_faq_q2: 'لماذا يفشل التكبير تحت 1000 بكسل؟',
	tool_amazon_main_image_size_faq_q3: 'هل تُرفع صورتي إلى أمازون أو إلى هذا الموقع؟',
	tool_amazon_main_image_size_faq_q4: 'هل يصدّر صورًا ثانوية أيضًا؟',
	tool_amazon_main_image_size_faq_q5: 'ماذا عن الخلفية البيضاء و85٪ من الإطار؟',
	tool_amazon_main_image_size_fill_label: 'ملء الإطار',
	tool_amazon_main_image_size_how_body:
		'حدّد صورة المنتج التي ستكون الرئيسية، أبقها على أبيض، صدّر المربع، ثم اقرأ شريحة التكبير. المقاسات الأخرى شرائح فقط.',
	tool_amazon_main_image_size_how_item_1: 'اختر الصورة التي تريدها صورة أمازون الرئيسية — هذه هي المهمة.',
	tool_amazon_main_image_size_how_item_2: 'اترك 2000×2000 محددًا ما لم تحتج المربع القديم 1600.',
	tool_amazon_main_image_size_how_item_3: 'أبقِ ملاءمة 85٪ ما لم يكن المنتج يملأ الإطار كما تريد أصلًا.',
	tool_amazon_main_image_size_how_item_4: 'نزّل JPEG واقرأ شريحة حد التكبير. المثال يعمل عند فتح الصفحة.',
	tool_amazon_main_image_size_how_title: 'طريقة العمل',
	tool_amazon_main_image_size_load_sample: 'حمّل مثالًا',
	tool_amazon_main_image_size_out_size_label: 'مقاس الإخراج',
	tool_amazon_main_image_size_quality_label: 'جودة JPEG',
	tool_amazon_main_image_size_rules_body:
		'إخراج الصورة الرئيسية في المتصفح يحتاج لوحة مربعة وملء أبيض وحد تكبير وحدًا واضحًا: ليست مراجعة رسمية.',
	tool_amazon_main_image_size_rules_item_1:
		'اللوحة الافتراضية 2000×2000. 1600×1600 اختياري. تُحتوى الصورة دون تمديد على أبيض RGB 255.',
	tool_amazon_main_image_size_rules_item_2:
		'ملاءمة 85٪ الاختيارية تصغّر المنتج داخل المربع حتى لا يلمس الحواف.',
	tool_amazon_main_image_size_rules_item_3:
		'شريحة التكبير: أطول ضلع مُصدَّر ينبغي أن يكون ≥1000 بكسل. الصفحة لا تزعم أن أمازون ستقبل الملف.',
	tool_amazon_main_image_size_rules_item_4:
		'الصور الثانوية والإنفوجرافيك ووحدات A+ خارج النطاق. هذه ليست Seller Central.',
	tool_amazon_main_image_size_rules_title: 'ما الذي تتوقعه',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'الصورة الرئيسية جاهزة — نزّل أو استبدل الصورة.',
	tool_amazon_main_image_size_status_working: 'جارٍ بناء المربع…',
	tool_amazon_main_image_size_title: 'حجم الصورة الرئيسية في أمازون',
	tool_amazon_main_image_size_usecase_1:
		'إدراج جديد: حوّل صورة الجوال إلى صورة رئيسية بيضاء قبل فتح لوحة البائع.',
	tool_amazon_main_image_size_usecase_2:
		'التكبير لا يعمل: تحقق إن كان أطول ضلع ما زال تحت 1000 بكسل ثم أعد التصدير عند 2000.',
	tool_amazon_main_image_size_usecase_3:
		'استبدل صورة رئيسية صغيرة موروثة، وإن كان JPEG ثقيلًا أكمل الضغط في الأداة المرتبطة.',
	tool_amazon_main_image_size_usecases_title: 'متى تستخدمه',
	tool_amazon_main_image_size_zoom_fail: 'أطول ضلع أقل من 1000 بكسل — قد يفشل التكبير.',
	tool_amazon_main_image_size_zoom_ok: 'أطول ضلع يبلغ حد التكبير 1000 بكسل.',
	tool_amazon_main_image_size_zoom_label: 'حد التكبير',
};

export default ar;
