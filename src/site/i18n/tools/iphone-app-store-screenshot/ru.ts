/**
 * i18n tool shard (iphone-app-store-screenshot / ru).
 * H1 locked to «Размер скриншота iPhone 6.9»; 6.7 только в FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Самостоятельный текст для запросов «размер скриншота» / спецификации App Store. */
const ru: SiteLangDict = {
	/** Короткий абзац на странице: экспорт и приватность. */
	tool_iphone_app_store_screenshot_article:
		'Экспортируйте один скриншот в актуальные пиксели iPhone 6.9 для App Store и скачайте JPEG или ZIP из трёх размеров. Файлы остаются на устройстве и не загружаются на сервер.',
	/** Выбор файла. */
	tool_iphone_app_store_screenshot_choose_image: 'Выбрать скриншот',
	/** Очистить. */
	tool_iphone_app_store_screenshot_clear: 'Очистить',
	/** Короткая строка карточки на главной. */
	tool_iphone_app_store_screenshot_desc:
		'Экспорт скриншота App Store для iPhone 6.9 в 1320×2868 — остаётся на устройстве, без загрузки на сервер.',
	/** Мета: нужен пример и ≥120 символов. */
	tool_iphone_app_store_screenshot_description:
		'Размер скриншота iPhone 6.9: выберите снимок, заполните кадр до 1320×2868 (или 1290×2796 / 1260×2736) и скачайте JPEG. Пример: при открытии образец уже обрезан под обязательный размер 6.9 дюйма. Файлы остаются на устройстве и не загружаются на сервер. Старые размеры 6.7 дюйма сведены в 6.9. Это не App Review.',
	/** Скачать JPEG. */
	tool_iphone_app_store_screenshot_download: 'Скачать JPEG',
	/** ZIP всех трёх. */
	tool_iphone_app_store_screenshot_download_zip: 'Скачать ZIP всех размеров',
	/** Подсказка drop. */
	tool_iphone_app_store_screenshot_drop_hint: 'Перетащите один скриншот. Заполнение кадра может обрезать края.',
	/** Пустое состояние. */
	tool_iphone_app_store_screenshot_empty: 'Сначала выберите скриншот.',
	/** Ошибка декодирования. */
	tool_iphone_app_store_screenshot_err_decode: 'Не удалось прочитать изображение. Попробуйте PNG или JPEG скриншот.',
	/** Сбой ZIP. */
	tool_iphone_app_store_screenshot_err_fflate: 'Движок ZIP не загрузился. Проверьте сеть и повторите.',
	/** Текст Example. */
	tool_iphone_app_store_screenshot_example:
		'Пример рисует вертикальную заглушку, заполняет 1320×2868 и включает «Скачать JPEG». Остальные размеры 6.9 — чипы; ZIP собирает все три.',
	/** Заголовок Example. */
	tool_iphone_app_store_screenshot_example_title: 'Пример',
	tool_iphone_app_store_screenshot_faq_a1:
		'Нет. Байты остаются во вкладке. Ничего не уходит ни в Apple, ни на наши серверы.',
	tool_iphone_app_store_screenshot_faq_a2:
		'Сейчас обязательный класс iPhone — 6.9 дюйма. Старые таблицы 6.7 дюйма сведены в эти три размера.',
	tool_iphone_app_store_screenshot_faq_a3:
		'По умолчанию 1320×2868. 1290×2796 и 1260×2736 — другие принятые пары 6.9. Выберите одну или скачайте ZIP из трёх.',
	tool_iphone_app_store_screenshot_faq_a4:
		'Да. Заполнение масштабирует до полного кадра и обрезает лишнее. Другой кадр — в связанном инструменте обрезки.',
	tool_iphone_app_store_screenshot_faq_a5:
		'Размеры скриншотов iPad не на первом экране. Здесь только обязательный набор iPhone 6.9.',
	tool_iphone_app_store_screenshot_faq_q1: 'Скриншот загружается на сервер?',
	tool_iphone_app_store_screenshot_faq_q2: 'Почему не размер скриншота iPhone 6.7?',
	tool_iphone_app_store_screenshot_faq_q3: 'Что такое 1320×2868, 1290×2796 и 1260×2736?',
	tool_iphone_app_store_screenshot_faq_q4: 'Обрежут ли края?',
	tool_iphone_app_store_screenshot_faq_q5: 'Экспортируются ли скриншоты iPad?',
	tool_iphone_app_store_screenshot_how_body:
		'Перед Connect заполните кадр 6.9 дюйма и скачайте. Дополнительные размеры — чипы, не второй редактор.',
	tool_iphone_app_store_screenshot_how_item_1: 'Выберите скриншот для обязательного набора iPhone 6.9.',
	tool_iphone_app_store_screenshot_how_item_2: 'Оставьте 1320×2868, если Connect не просит другую пару 6.9.',
	tool_iphone_app_store_screenshot_how_item_3: 'Скачайте JPEG или упакуйте три размера в ZIP.',
	tool_iphone_app_store_screenshot_how_item_4: 'Пример уже отработал при открытии — заполнение видно сразу.',
	tool_iphone_app_store_screenshot_how_title: 'Как это работает',
	tool_iphone_app_store_screenshot_load_sample: 'Пример',
	tool_iphone_app_store_screenshot_out_size_label: 'Размер вывода',
	tool_iphone_app_store_screenshot_quality_label: 'Качество JPEG',
	tool_iphone_app_store_screenshot_rules_body:
		'Экспорт скриншота App Store требует точных пикселей, заполнения кадра и ясной пометки, что 6.7 сведён в 6.9.',
	tool_iphone_app_store_screenshot_rules_item_1:
		'Холст по умолчанию 1320×2868. Другие принятые пары 6.9 дюйма — 1290×2796 и 1260×2736.',
	tool_iphone_app_store_screenshot_rules_item_2: 'Заполнение (без пустых полос). Лишнее обрезается.',
	tool_iphone_app_store_screenshot_rules_item_3: 'Запросы про 6.7 дюйма закрываются в FAQ; отдельной спецификации нет.',
	tool_iphone_app_store_screenshot_rules_item_4: 'Это не App Review. Apple всё ещё может отклонить кадр, текст или рамку устройства.',
	tool_iphone_app_store_screenshot_rules_title: 'Каких правил ждать',
	tool_iphone_app_store_screenshot_size_2736: '1260×2736',
	tool_iphone_app_store_screenshot_size_2796: '1290×2796',
	tool_iphone_app_store_screenshot_size_2868: '1320×2868',
	tool_iphone_app_store_screenshot_status_done: 'Скриншот готов — скачайте или замените изображение.',
	tool_iphone_app_store_screenshot_status_working: 'Заполнение кадра…',
	/** H1 совпадает с 03-locale-briefs. */
	tool_iphone_app_store_screenshot_title: 'Размер скриншота iPhone 6.9',
	tool_iphone_app_store_screenshot_usecase_1: 'Перед Connect: экспортируйте обязательный скриншот 6.9 дюйма.',
	tool_iphone_app_store_screenshot_usecase_2: 'Ошибка размеров: выгрузите снова в 1320×2868, а не в старый 6.7.',
	tool_iphone_app_store_screenshot_usecase_3: 'Упакуйте три пары 6.9 в ZIP для коллеги, который загрузит позже.',
	tool_iphone_app_store_screenshot_usecases_title: 'Когда это кстати',
};

export default ru;
