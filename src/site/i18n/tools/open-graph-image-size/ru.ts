/**
 * Фрагмент i18n (open-graph-image-size / ru).
 * H1: «Размер изображения Open Graph». Короткое «og image» не в заголовке.
 * Вторичные: 1200×630 и og:image — в описании / FAQ / сценариях.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_open_graph_image_size_article:
		'Обрежьте одно фото под карточку Open Graph 1200×630 (около 1,91:1) и скачайте JPEG. Файлы остаются на устройстве и не загружаются на сервер.',
	tool_open_graph_image_size_choose_image: 'Выбрать изображение',
	tool_open_graph_image_size_clear: 'Очистить',
	tool_open_graph_image_size_desc:
		'Экспорт изображения Open Graph 1200×630: остаётся на устройстве, без загрузки на сервер.',
	tool_open_graph_image_size_description:
		'Размер изображения Open Graph: выберите фото, заполните кадр 1200×630 (около 1,91:1) и скачайте JPEG. Пример: образец при открытии уже обрезан под карточку. Пара LinkedIn 1200×627 — отдельный близкий размер. Файлы остаются на устройстве и на сервер не отправляются. Проверять тег og:image у URL нужно на связанной странице предпросмотра, не в этом H1. Короткое «og image» — не заголовок.',
	tool_open_graph_image_size_download: 'Скачать JPEG',
	tool_open_graph_image_size_drop_hint: 'Перетащите одно фото. Заполнение может обрезать края.',
	tool_open_graph_image_size_empty: 'Сначала выберите изображение.',
	tool_open_graph_image_size_err_decode: 'Не удалось прочитать изображение. Попробуйте JPEG, PNG или WebP.',
	tool_open_graph_image_size_example:
		'Пример рисует пейзаж-заглушку, заполняет 1200×630 и включает «Скачать JPEG». 1200×627 — близкий размер для LinkedIn.',
	tool_open_graph_image_size_example_title: 'Пример',
	tool_open_graph_image_size_faq_a1:
		'Нет. Фото остаётся во вкладке. Ничего не уходит в Facebook, LinkedIn или на наши серверы.',
	tool_open_graph_image_size_faq_a2:
		'Короткие запросы «og image» легко уводят в сленг. H1 этой страницы — полная фраза: Размер изображения Open Graph.',
	tool_open_graph_image_size_faq_a3:
		'1200×630 — обычная карточка 1,91:1. 1200×627 почти то же и часто просят в LinkedIn. Stories и обложки каналов вне темы.',
	tool_open_graph_image_size_faq_a4:
		'Здесь только пиксели. Проверить, показывается ли og:image по ссылке, можно в связанном предпросмотре Open Graph.',
	tool_open_graph_image_size_faq_a5:
		'Да. Заполнение увеличивает кадр, пока не закроет 1200×630, лишнее обрезается.',
	tool_open_graph_image_size_faq_q1: 'Фото загружается на сервер?',
	tool_open_graph_image_size_faq_q2: 'Почему заголовок не «og image»?',
	tool_open_graph_image_size_faq_q3: 'Чем 1200×630 отличается от 1200×627?',
	tool_open_graph_image_size_faq_q4: 'Где проверить, что og:image виден?',
	tool_open_graph_image_size_faq_q5: 'Края обрежутся?',
	tool_open_graph_image_size_how_body:
		'Выберите фото, которое должно появиться при шаринге ссылки, заполните 1200×630 и скачайте. Теги смотрят на странице предпросмотра.',
	tool_open_graph_image_size_how_item_1: 'Выберите фото для карточки Open Graph — в этом и задача.',
	tool_open_graph_image_size_how_item_2: 'Оставьте 1200×630, если вам явно не нужен размер 1200×627.',
	tool_open_graph_image_size_how_item_3: 'Скачайте JPEG. Обрезка краёв убирает полосы на карточке.',
	tool_open_graph_image_size_how_item_4: 'Пример уже отработал при открытии. Теги — в связанном предпросмотре.',
	tool_open_graph_image_size_how_title: 'Как это работает',
	tool_open_graph_image_size_load_sample: 'Пример',
	tool_open_graph_image_size_out_size_label: 'Размер вывода',
	tool_open_graph_image_size_quality_label: 'Качество JPEG',
	tool_open_graph_image_size_rules_body:
		'Экспорт карточки требует кадра ~1,91:1, заполнения с обрезкой и отдельного предпросмотра тегов.',
	tool_open_graph_image_size_rules_item_1:
		'Холст по умолчанию 1200×630. Опционально 1200×627. Соотношение около 1,91:1.',
	tool_open_graph_image_size_rules_item_2:
		'Заполнение (не letterbox). Лишнее обрезается.',
	tool_open_graph_image_size_rules_item_3:
		'Отладка тега og:image — на странице предпросмотра, не в этом H1.',
	tool_open_graph_image_size_rules_item_4:
		'Stories, превью YouTube и оформление канала вне охвата.',
	tool_open_graph_image_size_rules_title: 'Какие правила ждать',
	tool_open_graph_image_size_size_627: '1200×627',
	tool_open_graph_image_size_size_630: '1200×630',
	tool_open_graph_image_size_status_done: 'Карточка готова — скачайте или замените фото.',
	tool_open_graph_image_size_status_working: 'Заполняем кадр…',
	tool_open_graph_image_size_title: 'Размер изображения Open Graph',
	tool_open_graph_image_size_usecase_1:
		'Пост в блоге: сначала JPEG 1200×630, потом поле og:image.',
	tool_open_graph_image_size_usecase_2:
		'Ссылка на товар: обрежьте упаковку под карточку без графического редактора.',
	tool_open_graph_image_size_usecase_3:
		'LinkedIn: включите 1200×627, если партнёр назвал именно эту пару.',
	tool_open_graph_image_size_usecases_title: 'Когда подходит',
};

export default ru;
