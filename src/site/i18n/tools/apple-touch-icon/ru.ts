/**
 * Фрагмент i18n (apple-touch-icon / ru).
 * Поисковая перепись: H1 apple-touch-icon 180×180; файлы на устройстве, без загрузки на сервер.
 */
import type { SiteLangDict } from '../../../types';

/** Русские строки: иконка домашнего экрана 180, опциональный ZIP, непрозрачный фон. */
const ru: SiteLangDict = {
	tool_apple_touch_icon_article:
		'Сделайте из логотипа иконку apple-touch для домашнего экрана: непрозрачный PNG 180×180. Если манифесту нужны ещё размеры, ZIP может взять favicon 32 и PWA 192/512. Файлы остаются на устройстве и на сервер не отправляются.',
	tool_apple_touch_icon_bg_label: 'Непрозрачный фон',
	tool_apple_touch_icon_choose_image: 'Выбрать логотип',
	tool_apple_touch_icon_clear: 'Очистить',
	tool_apple_touch_icon_desc:
		'Экспорт apple-touch-icon 180×180 в непрозрачный PNG; остаётся на устройстве, без загрузки на сервер.',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180: выберите логотип, положите на непрозрачный квадрат, скачайте PNG. Пример: при открытии образец уже вписан в 180×180. Шаги: выбрать → оставить 180 → скачать. В ZIP по желанию favicon 32 и PWA 192 / 512. Файлы остаются на устройстве и не загружаются на сервер.',
	tool_apple_touch_icon_download: 'Скачать PNG',
	tool_apple_touch_icon_download_zip: 'Скачать ZIP размеров',
	tool_apple_touch_icon_drop_hint: 'Перетащите один логотип. Он центрируется на непрозрачном квадрате.',
	tool_apple_touch_icon_empty: 'Сначала выберите логотип.',
	tool_apple_touch_icon_err_decode:
		'Не удалось прочитать изображение. Попробуйте PNG, JPEG или растровый снимок SVG.',
	tool_apple_touch_icon_err_fflate: 'Движок ZIP не загрузился. Проверьте сеть и повторите.',
	tool_apple_touch_icon_example:
		'«Пример» рисует заглушку, вписывает её в непрозрачный квадрат 180×180 и включает «Скачать PNG». ZIP добавляет 32, 192 и 512.',
	tool_apple_touch_icon_example_title: 'Пример',
	tool_apple_touch_icon_faq_a1:
		'167 / 152 / 120 для старых iPad можно положить в ZIP. По умолчанию всё равно 180×180.',
	tool_apple_touch_icon_faq_a2:
		'Непрозрачный фон (в духе precomposed) мешает iOS наложить блик на прозрачность на домашнем экране.',
	tool_apple_touch_icon_faq_a3:
		'Нет. Декодирование идёт в этой вкладке. На наши серверы ничего не уходит.',
	tool_apple_touch_icon_faq_a4:
		'32 — маленький favicon PNG. 192 и 512 — типичные иконки PWA. Они в ZIP; основная задача — 180×180.',
	tool_apple_touch_icon_faq_a5:
		'Для современного домашнего экрана iPhone практичный размер apple-touch-icon.png — 180×180 до тега link.',
	tool_apple_touch_icon_faq_q1: 'Есть ли ещё 167 или 152?',
	tool_apple_touch_icon_faq_q2: 'Зачем непрозрачный фон?',
	tool_apple_touch_icon_faq_q3: 'Логотип уходит на сервер?',
	tool_apple_touch_icon_faq_q4: 'Зачем 32 и PWA 192/512?',
	tool_apple_touch_icon_faq_q5: 'Хватит ли 180×180 для иконки apple-touch?',
	tool_apple_touch_icon_how_body:
		'Возьмите логотип, который должен быть на домашнем экране, экспортируйте непрозрачный PNG 180×180 и при необходимости соберите ZIP с доп. размерами.',
	tool_apple_touch_icon_how_item_1: 'Выберите логотип для apple-touch-icon 180×180.',
	tool_apple_touch_icon_how_item_2: 'Оставьте 180, если не нужны чипы 32 / 192 / 512.',
	tool_apple_touch_icon_how_item_3: 'Держите непрозрачный фон, чтобы иконка не просвечивала.',
	tool_apple_touch_icon_how_item_4: 'Скачайте PNG или ZIP. Пример уже отработал при открытии.',
	tool_apple_touch_icon_how_title: 'Как пользоваться',
	tool_apple_touch_icon_load_sample: 'Пример',
	tool_apple_touch_icon_out_size_label: 'Размер вывода',
	tool_apple_touch_icon_rules_body:
		'Иконка домашнего экрана — квадрат, сплошная заливка и PNG 180, не полный пакет ICO.',
	tool_apple_touch_icon_rules_item_1:
		'Холст по умолчанию — PNG 180×180. Логотип вписывается (без растяжения) и центрируется.',
	tool_apple_touch_icon_rules_item_2: 'Фон непрозрачный (по умолчанию белый). Прозрачность специально сглаживается.',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 — дополнительные файлы ZIP, экспорт по умолчанию тот же.',
	tool_apple_touch_icon_rules_item_4: 'Нет пакета ICO и нет browserconfig.xml.',
	tool_apple_touch_icon_rules_title: 'Какие правила ждать',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'Иконка готова — скачайте или замените логотип.',
	tool_apple_touch_icon_status_working: 'Рисуем квадрат…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'До тега link экспортируйте apple-touch-icon.png 180×180 для «На экран Домой».',
	tool_apple_touch_icon_usecase_2: 'Для PWA возьмите 192 и 512 из ZIP в манифест.',
	tool_apple_touch_icon_usecase_3:
		'Если браузеру всё ещё нужен квадратный favicon PNG 32, возьмите его из ZIP, без сборки ICO.',
	tool_apple_touch_icon_usecases_title: 'Когда подходит',
};

export default ru;
