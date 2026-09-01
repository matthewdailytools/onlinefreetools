/**
 * i18n-фрагмент инструмента amazon-main-image-size (ru).
 * H1 следует поисковой формулировке; пиксели — в описании и FAQ, не в заголовке.
 */
import type { SiteLangDict } from '../../../types';

/** Русские тексты инструментального сайта, переписаны (не калька английской схемы). */
const ru: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'Положите фото товара на белый квадрат и скачайте JPEG главного изображения. Файлы остаются на устройстве и на сервер не отправляются.',
	tool_amazon_main_image_size_check_fill: 'Занять около 85% кадра',
	tool_amazon_main_image_size_choose_image: 'Выбрать изображение',
	tool_amazon_main_image_size_clear: 'Очистить',
	tool_amazon_main_image_size_desc:
		'Главное фото Amazon 2000×2000 на белом, проверка зума 1000 px — остаётся на устройстве.',
	tool_amazon_main_image_size_description:
		'Размер главного изображения Amazon: выберите фото товара, экспортируйте JPEG 2000×2000 на белом фоне RGB 255 и проверьте порог зума 1000 px. Есть пример: образец занимает около 85% квадрата. Файлы остаются на устройстве и не загружаются на сервер. Это не официальная проверка Seller Central.',
	tool_amazon_main_image_size_download: 'Скачать JPEG',
	tool_amazon_main_image_size_drop_hint: 'Перетащите одно фото товара. Обработка только в этой вкладке.',
	tool_amazon_main_image_size_empty: 'Сначала выберите фото товара.',
	tool_amazon_main_image_size_err_decode: 'Не удалось прочитать изображение. Попробуйте JPEG, PNG или WebP.',
	tool_amazon_main_image_size_example:
		'«Пример» рисует условное фото товара, кладёт его на белый квадрат 2000×2000 примерно на 85% и включает «Скачать JPEG». Индикатор зума показывает, что длинная сторона больше 1000 px.',
	tool_amazon_main_image_size_example_title: 'Пример',
	tool_amazon_main_image_size_faq_a1:
		'Экспорт по умолчанию — 2000×2000. 1600 — старый ходовой размер, он остаётся чипом. Цифры не попадают в H1.',
	tool_amazon_main_image_size_faq_a2:
		'Галерея и блоки A+ решают другие задачи. Здесь только главное изображение. Свободная обрезка — в связанном инструменте кадрирования.',
	tool_amazon_main_image_size_faq_a3:
		'Нет. Фото декодируется в этой вкладке браузера. На наши серверы ничего не уходит, и Amazon отсюда файл не получает.',
	tool_amazon_main_image_size_faq_a4:
		'Главное изображение ждут на чистом белом. Страница заливает RGB 255,255,255 и при желании держит товар примерно на 85% квадрата, чтобы он не прилипал к краям.',
	tool_amazon_main_image_size_faq_a5:
		'Зум Amazon обычно требует не меньше 1000 пикселей по длинной стороне. Чип сравнивает край экспорта с этим порогом. Растянуть крошечное фото можно до цифры, но картинка останется мягкой.',
	tool_amazon_main_image_size_faq_q1: 'Почему 2000×2000, а не 1600?',
	tool_amazon_main_image_size_faq_q2: 'Экспортируются ли дополнительные фото?',
	tool_amazon_main_image_size_faq_q3: 'Фото уходит на Amazon или на этот сайт?',
	tool_amazon_main_image_size_faq_q4: 'Белый фон и 85% кадра — зачем?',
	tool_amazon_main_image_size_faq_q5: 'Почему зум не работает ниже 1000 px?',
	tool_amazon_main_image_size_fill_label: 'Заполнение кадра',
	tool_amazon_main_image_size_how_body:
		'Возьмите фото, которое станет главным, оставьте белый фон, выгрузите квадрат и посмотрите чип зума. Остальные размеры — только чипы.',
	tool_amazon_main_image_size_how_item_1: 'Выберите фото, которое должно стать главным изображением Amazon.',
	tool_amazon_main_image_size_how_item_2: 'Оставьте 2000×2000, если вам ещё не нужен старый квадрат 1600.',
	tool_amazon_main_image_size_how_item_3: 'Держите посадку 85%, пока товар уже не заполняет кадр так, как нужно.',
	tool_amazon_main_image_size_how_item_4: 'Скачайте JPEG и прочитайте чип порога зума. Пример уже отработал при открытии.',
	tool_amazon_main_image_size_how_title: 'Как это работает',
	tool_amazon_main_image_size_load_sample: 'Пример',
	tool_amazon_main_image_size_out_size_label: 'Размер вывода',
	tool_amazon_main_image_size_quality_label: 'Качество JPEG',
	tool_amazon_main_image_size_rules_body:
		'Чтобы выгрузить главное изображение в браузере, нужны квадратный холст, белая заливка, порог зума и ясная граница: это не официальная проверка.',
	tool_amazon_main_image_size_rules_item_1:
		'Холст по умолчанию 2000×2000. 1600×1600 — по желанию. Фото вписывается без растяжения на белый RGB 255.',
	tool_amazon_main_image_size_rules_item_2:
		'Опция 85% уменьшает товар внутри квадрата, чтобы он не касался краёв.',
	tool_amazon_main_image_size_rules_item_3:
		'Чип зума: длинная сторона экспорта должна быть ≥1000 px. Страница не утверждает, что Amazon примет файл.',
	tool_amazon_main_image_size_rules_item_4:
		'Дополнительные фото, инфографика и A+ вне охвата. Это не Seller Central.',
	tool_amazon_main_image_size_rules_title: 'На что рассчитывать',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'Главное изображение готово — скачайте или замените фото.',
	tool_amazon_main_image_size_status_working: 'Собираем квадрат…',
	tool_amazon_main_image_size_title: 'Размер главного изображения Amazon',
	tool_amazon_main_image_size_usecase_1:
		'Новая карточка: сделайте белое главное фото со снимка телефона, прежде чем открывать Seller Central.',
	tool_amazon_main_image_size_usecase_2:
		'Зум не открывается: проверьте, не короче ли длинная сторона 1000 px, и выгрузите заново на 2000.',
	tool_amazon_main_image_size_usecase_3:
		'Замените унаследованное маленькое главное фото; если JPEG тяжёлый — дальше в связанный компрессор.',
	tool_amazon_main_image_size_usecases_title: 'Когда пригодится',
	tool_amazon_main_image_size_zoom_fail: 'Длинная сторона меньше 1000 px — зум может не сработать.',
	tool_amazon_main_image_size_zoom_ok: 'Длинная сторона достигает порога зума 1000 px.',
	tool_amazon_main_image_size_zoom_label: 'Порог зума',
};

export default ru;
