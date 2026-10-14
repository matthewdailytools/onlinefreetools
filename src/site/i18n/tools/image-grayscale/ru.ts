/**
 * i18n tool shard (image-grayscale / ru).
 * Russian rewrite (2026-10-14): чёрно-белое / оттенки серого converter with selectable method,
 * strength slider, show-original toggle, Convert → Download, gold progress HUD, collapsed export.
 */
import type { SiteLangDict } from '../../../types';

/** Russian strings for the image grayscale converter (neutral tone). */
const ru: SiteLangDict = {
	tool_image_grayscale_title: 'Сделать фото чёрно-белым — перевод изображения в оттенки серого с выбором метода',
	tool_image_grayscale_desc: 'Обесцветить цветное фото в браузере, выбрать метод оттенков серого и скачать.',
	tool_image_grayscale_description:
		'Переведите цветное фото в оттенки серого (чёрно-белое) в браузере. Шаги: выберите снимок, метод — яркость, среднее, светлота или один канал — задайте силу, нажмите кнопку и скачайте JPEG, WebP или PNG.',
	tool_image_grayscale_choose_file: 'Выбрать изображение',
	tool_image_grayscale_drop_hint: 'Или перетащите сюда JPEG, PNG, WebP или GIF.',
	tool_image_grayscale_convert: 'Сделать чёрно-белым',
	tool_image_grayscale_download: 'Скачать',
	tool_image_grayscale_sample: 'Загрузить пример',
	tool_image_grayscale_clear: 'Очистить',
	tool_image_grayscale_method_label: 'Метод оттенков серого',
	tool_image_grayscale_method_luma601: 'Яркость — Rec.601 (рекомендуется)',
	tool_image_grayscale_method_luma709: 'Яркость — Rec.709 / sRGB',
	tool_image_grayscale_method_average: 'Среднее по R, G, B',
	tool_image_grayscale_method_lightness: 'Светлота (max + min) ÷ 2',
	tool_image_grayscale_method_red: 'Только красный канал (эффект красного фильтра)',
	tool_image_grayscale_method_green: 'Только зелёный канал',
	tool_image_grayscale_method_blue: 'Только синий канал',
	tool_image_grayscale_method_hint: 'Яркость сохраняет светлоту так, как её видит глаз. Превью обновляется при смене метода.',
	tool_image_grayscale_amount_label: 'Сила',
	tool_image_grayscale_amount_hint: '100% = полностью чёрно-белое; меньшие значения оставляют часть цвета.',
	tool_image_grayscale_show_original: 'Показать оригинал',
	tool_image_grayscale_advanced: 'Дополнительные настройки (по желанию)',
	tool_image_grayscale_format_label: 'Формат вывода',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP компактен и сохраняет прозрачность. PNG без потерь. JPEG нужен цвет фона.',
	tool_image_grayscale_quality_label: 'Качество',
	tool_image_grayscale_quality_hint: 'Только для JPEG и WebP; PNG значение игнорирует.',
	tool_image_grayscale_jpeg_bg_label: 'Фон для JPEG',
	tool_image_grayscale_jpeg_bg_hint: 'Заливает прозрачные области перед экспортом в JPEG. По умолчанию белый.',
	tool_image_grayscale_preview_label: 'Превью',
	tool_image_grayscale_progress: 'Перевод в оттенки серого…',
	tool_image_grayscale_step_decode: 'Декодирование',
	tool_image_grayscale_step_gray: 'Пересчёт пикселей',
	tool_image_grayscale_step_encode: 'Кодирование',
	tool_image_grayscale_decode_step: 'Чтение изображения…',
	tool_image_grayscale_gray_step: 'Пересчёт каждого пикселя…',
	tool_image_grayscale_encode_step: 'Сохранение как {fmt}…',
	tool_image_grayscale_elapsed: 'Прошло: {s} с',
	tool_image_grayscale_empty: 'Сначала выберите изображение.',
	tool_image_grayscale_err_decode: 'Файл не удалось открыть как изображение. Попробуйте JPEG, PNG или WebP.',
	tool_image_grayscale_err_encode: 'Изображение не удалось сохранить. Попробуйте меньший файл или другой формат.',
	tool_image_grayscale_warn_large: 'Крупный файл (больше 25 МБ) — преобразование может идти медленно.',
	tool_image_grayscale_warn_edge: 'Одна сторона длиннее примерно 8192 px — часть браузеров может не справиться.',
	tool_image_grayscale_warn_animation: 'Анимированный GIF: обрабатывается только первый кадр.',
	tool_image_grayscale_status_working: 'Обработка…',
	tool_image_grayscale_status_done: 'Готово — нажмите «Скачать», чтобы сохранить.',
	tool_image_grayscale_stats_tpl: '{w}×{h} пикс. · {method} → {fmt} ({bytes})',
	tool_image_grayscale_how_title: 'Как сделать изображение чёрно-белым',
	tool_image_grayscale_how_body:
		'У каждого пикселя значения красного, зелёного и синего заменяются одним серым, так что R = G = B. Метод задаёт, как считается этот серый — поэтому одно и то же фото может выйти светлее, темнее или площе.',
	tool_image_grayscale_how_item_1: 'Выберите фото или перетащите его в область.',
	tool_image_grayscale_how_item_2: 'Выберите метод оттенков серого и силу; отметьте «Показать оригинал» для сравнения.',
	tool_image_grayscale_how_item_3: 'Нажмите «Сделать чёрно-белым» и дождитесь полосы прогресса.',
	tool_image_grayscale_how_item_4: 'Нажмите «Скачать». Сначала откройте дополнительные настройки, если нужны PNG, JPEG или другое качество.',
	tool_image_grayscale_why_choose_title: 'Зачем пользоваться этим конвертером в оттенки серого',
	tool_image_grayscale_why_choose_item_1:
		'Режимы одного канала повторяют эффекты чёрно-белых светофильтров: красный канал затемняет голубое небо и смягчает кожу, синий осветляет небо и выявляет веснушки.',
	tool_image_grayscale_why_choose_item_2:
		'Прозрачность сохраняется в PNG и WebP; фото обрабатывается во вкладке браузера без загрузки на сервер.',
	tool_image_grayscale_why_choose_item_3:
		'Семь методов вместо одного фильтра. В примере чистый красный даёт 76 при яркости Rec.601 и 85 при простом среднем — а метод светлоты превращает красный, зелёный, синий и жёлтый в одно серое 128.',
	tool_image_grayscale_why_choose_item_4:
		'Ползунок силы даёт и полное чёрно-белое, и приглушённое частичное обесцвечивание.',
	tool_image_grayscale_why_choose_item_5:
		'Пиксели перезаписываются, поэтому скачанный файл остаётся чёрно-белым в любом приложении — в отличие от CSS-фильтра или настройки экрана.',
	tool_image_grayscale_rules_title: 'Формулы оттенков серого',
	tool_image_grayscale_rules_body: 'R, G и B — значения пикселя 0–255; результат Y записывается во все три канала.',
	tool_image_grayscale_rules_item_1: 'Яркость Rec.601: Y = 0,299 R + 0,587 G + 0,114 B — классические веса ТВ и JPEG, ближе всего к воспринимаемой яркости цвета.',
	tool_image_grayscale_rules_item_2: 'Яркость Rec.709: Y = 0,2126 R + 0,7152 G + 0,0722 B — веса HD-видео, их же использует фильтр CSS grayscale(). Как в большинстве редакторов, формула применяется к сохранённым значениям sRGB без гамма-линеаризации.',
	tool_image_grayscale_rules_item_3: 'Среднее: Y = (R + G + B) ÷ 3. Светлота: Y = (наибольшее + наименьшее) ÷ 2. Канальные режимы копируют только R, G или B.',
	tool_image_grayscale_rules_item_4: 'Сила s: новое значение = исходное + (Y − исходное) × s. При 100% каждый пиксель серый; при 50% цвета на полпути к серому.',
	tool_image_grayscale_rules_item_5: 'Альфа (прозрачность) не меняется; JPEG заливает её цветом фона. У анимированных GIF берётся первый кадр. Сохранение перекодирует изображение.',
	tool_image_grayscale_example_title: 'Пример',
	tool_image_grayscale_example:
		'В образце — чистые красная, зелёная, синяя и жёлтая полосы над радужной лентой. При Rec.601 они становятся 76, 150, 29 и 226 — четыре явно разных серых. Rec.709 даёт 54, 182, 18 и 237; среднее — 85, 85, 85 и 170, так что красный, зелёный и синий сливаются; светлота делает все четыре равными 128. Переключайте методы, смотрите превью, затем сделайте чёрно-белым и скачайте.',
	tool_image_grayscale_usecases_title: 'Когда это полезно',
	tool_image_grayscale_usecase_1: 'Чёрно-белые портреты, посты в соцсетях или винтажный вид — попробуйте красный канал для классического «пленочного» фильтра.',
	tool_image_grayscale_usecase_2: 'Печать на монохромном лазерном принтере или для газеты: сначала переведите, чтобы увидеть, как цвета разойдутся по серому.',
	tool_image_grayscale_usecase_3: 'Проверка диаграммы, логотипа или палитры интерфейса: если два цвета стали одним серым, людям с нарушением цветовосприятия их трудно различить.',
	tool_image_grayscale_usecase_4: 'Подготовка сканов и документов: оттенки серого убирают цветовой оттенок бумаги и упрощают файл.',
	tool_image_grayscale_faq_q1: 'Что будет с прозрачными PNG?',
	tool_image_grayscale_faq_a1:
		'Прозрачность сохраняется при скачивании PNG или WebP. JPEG прозрачность не хранит, поэтому такие области заливаются цветом фона JPEG из дополнительных настроек.',
	tool_image_grayscale_faq_q2: 'Какой метод оттенков серого выбрать?',
	tool_image_grayscale_faq_a2:
		'Для фото начните с яркости Rec.601: зелёный весит больше всего, синий — меньше всего, ближе к воспринимаемой яркости. Rec.709 чуть светлее в зелёных. Среднее и светлота проще, но могут «сплющить» цветные кадры. Один канал — когда нужен намеренный фильтр.',
	tool_image_grayscale_faq_q3: 'Это то же, что CSS grayscale() или моно-фильтр на телефоне?',
	tool_image_grayscale_faq_a3:
		'CSS grayscale(100%) использует те же веса, что и вариант Rec.709, но меняет только отображение на странице; файл остаётся цветным. Телефонные фильтры часто добавляют контраст или тон. Здесь в новый файл пишутся обычные серые пиксели.',
	tool_image_grayscale_faq_q4: 'Загружается ли фото на сервер?',
	tool_image_grayscale_faq_a4:
		'Нет. Декодирование, преобразование и сохранение идут во вкладке браузера. Оставьте исходный файл, если цветная версия ещё понадобится — серую загрузку нельзя вернуть в цвет.',
	tool_image_grayscale_faq_q5: 'Почему чёрно-белое фото выглядит плоским?',
	tool_image_grayscale_faq_a5:
		'Цвета, различающиеся только оттенком, могут стать одним серым. Классика — красный цветок на зелёных листьях: при среднем методе оба дают 85. Переключитесь на яркость или попробуйте красный либо зелёный канал, чтобы разделить их.',
	tool_image_grayscale_faq_q6: 'Скачанный файл — настоящие оттенки серого, и он меньше?',
	tool_image_grayscale_faq_a6:
		'У каждого пикселя равные R, G и B, поэтому он отображается и печатается как чистый серый. Браузеры сохраняют обычный RGB, а не одноканальный файл, поэтому выигрыш в размере скромный — обычно больше всего у PNG. Режим 8-битных оттенков серого нужен в графическом редакторе.',
	tool_image_grayscale_faq_q7: 'Можно ли оставить немного цвета?',
	tool_image_grayscale_faq_a7:
		'Да. Уменьшите силу: 70–80% дают блёклый, приглушённый вид, 0% оставляет фото без изменений. Оставить только один цвет (селективный цвет) требует масок — эта страница этого не делает.',
	tool_image_grayscale_article: 'Изображение в оттенки серого',
	tool_image_grayscale_ref_a_label: 'Wikipedia — оттенки серого (перевод цвета в серый)',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — матрица grayscale()',
};

export default ru;
