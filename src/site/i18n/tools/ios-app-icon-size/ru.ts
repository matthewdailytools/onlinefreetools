/**
 * Фрагмент i18n (ios-app-icon-size / ru).
 * Локальный H1: размер иконки iOS приложения; задача по умолчанию — непрозрачный PNG 1024 для App Store.
 */
import type { SiteLangDict } from '../../../types';

/** Русские тексты: сдача 1024, ZIP масштабов, файлы остаются на устройстве. */
const ru: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'Соберите логотип в непрозрачный PNG 1024×1024 для App Store. При необходимости ZIP добавит 180 для iPhone, 167 для iPad и 512 для Play. Файлы остаются на устройстве и на сервер не отправляются.',
	tool_ios_app_icon_size_bg_label: 'Непрозрачный фон',
	tool_ios_app_icon_size_choose_image: 'Выбрать логотип',
	tool_ios_app_icon_size_clear: 'Очистить',
	tool_ios_app_icon_size_desc:
		'Экспорт размера иконки iOS приложения 1024×1024 без прозрачности; остаётся на устройстве, на сервер не уходит.',
	tool_ios_app_icon_size_description:
		'Размер иконки iOS приложения: выберите логотип, положите его на непрозрачный квадрат 1024×1024 для App Store Connect и скачайте PNG. Пример: образец уже вписан в 1024×1024 при открытии. Дополнительные чипы дают 180, 167 и Play 512 в ZIP. Файлы остаются на устройстве и на сервер не отправляются.',
	tool_ios_app_icon_size_download: 'Скачать PNG',
	tool_ios_app_icon_size_download_zip: 'Скачать ZIP размеров',
	tool_ios_app_icon_size_drop_hint: 'Перетащите квадратный логотип. Он центрируется на непрозрачном фоне без скругления.',
	tool_ios_app_icon_size_empty: 'Сначала выберите логотип.',
	tool_ios_app_icon_size_err_decode: 'Не удалось прочитать изображение. Попробуйте PNG или JPEG.',
	tool_ios_app_icon_size_err_fflate: 'Движок ZIP не загрузился. Проверьте сеть и повторите.',
	tool_ios_app_icon_size_example:
		'«Загрузить пример» рисует метку, вписывает её в непрозрачный 1024×1024 и включает скачивание PNG. ZIP добавляет 180, 167, Play 512 и мелкие слоты.',
	tool_ios_app_icon_size_example_title: 'Пример',
	tool_ios_app_icon_size_faq_a1:
		'Нет. Логотип декодируется в этой вкладке. На наши серверы ничего не уходит.',
	tool_ios_app_icon_size_faq_a2:
		'App Store Connect по-прежнему просит PNG 1024×1024 без прозрачности. Это размер иконки iOS приложения по умолчанию на этой странице.',
	tool_ios_app_icon_size_faq_a3:
		'Скругление накладывает система. Экспортируйте полный квадрат, углы заранее не обрезайте.',
	tool_ios_app_icon_size_faq_a4:
		'180 — iPhone 60 pt @3x. 167 — iPad Pro 83,5 pt @2x. Это чипы, не второй H1.',
	tool_ios_app_icon_size_faq_a5:
		'Иконка Play 512 лежит в ZIP. Adaptive XML и отдельный URL пакета не делаем.',
	tool_ios_app_icon_size_faq_q1: 'Логотип загружается на сервер?',
	tool_ios_app_icon_size_faq_q2: 'Почему 1024×1024?',
	tool_ios_app_icon_size_faq_q3: 'Нужно ли скруглять углы?',
	tool_ios_app_icon_size_faq_q4: 'Зачем 180 и 167?',
	tool_ios_app_icon_size_faq_q5: 'Где иконка Google Play?',
	tool_ios_app_icon_size_how_body:
		'Выберите логотип витрины, экспортируйте непрозрачный PNG 1024×1024 и при необходимости упакуйте масштабы iPhone, iPad и Play.',
	tool_ios_app_icon_size_how_item_1: 'Выберите логотип для размера иконки iOS приложения — задача PNG 1024 магазина.',
	tool_ios_app_icon_size_how_item_2: 'Оставьте 1024, если не нужны чипы 180 / 167 / Play 512.',
	tool_ios_app_icon_size_how_item_3: 'Держите непрозрачный фон, чтобы Connect не отклонил прозрачность.',
	tool_ios_app_icon_size_how_item_4: 'Скачайте PNG или ZIP. Пример уже отработал при открытии.',
	tool_ios_app_icon_size_how_title: 'Как это работает',
	tool_ios_app_icon_size_load_sample: 'Загрузить пример',
	tool_ios_app_icon_size_out_size_label: 'Размер выхода',
	tool_ios_app_icon_size_rules_body:
		'Иконка магазина — квадрат с заливкой, отдельно от страниц apple-touch-icon сайта.',
	tool_ios_app_icon_size_rules_item_1:
		'Холст по умолчанию PNG 1024×1024. Логотип вписывается и центрируется, не растягивается.',
	tool_ios_app_icon_size_rules_item_2:
		'Фон непрозрачный (по умолчанию белый). Альфа специально сплющивается.',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 идут в ZIP и не меняют H1.',
	tool_ios_app_icon_size_rules_item_4:
		'Это не проект Assets.xcassets и не пакет Adaptive Icon.',
	tool_ios_app_icon_size_rules_title: 'Какие правила ждать',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'Иконка готова — скачайте или замените логотип.',
	tool_ios_app_icon_size_status_working: 'Рисуем квадрат…',
	tool_ios_app_icon_size_title: 'размер иконки iOS приложения',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect: экспортируйте иконку 1024×1024 до скриншотов.',
	tool_ios_app_icon_size_usecase_2:
		'Домой экран iPhone: возьмите 180 из ZIP, чтобы увидеть 60 pt @3x.',
	tool_ios_app_icon_size_usecase_3:
		'Карточка Play: чип 512 без отдельного URL пакета.',
	tool_ios_app_icon_size_usecases_title: 'Когда это к месту',
};

export default ru;
