/**
 * i18n tool shard (file-metadata-analyzer / ru).
 */
import type { SiteLangDict } from '../../../types';

/** 俄语文案键表。 */
const ru: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: 'Анализ…',
	tool_file_metadata_analyzer_article:
		'Перетащите или выберите локальный файл: имя, размер, MIME и дата изменения. Для изображений — ширина×высота; для аудио/видео — длительность при успешном декодировании. Подсказки magic-byte. Без загрузки на сервер; остаётся на устройстве.',
	tool_file_metadata_analyzer_choose_file: 'Выбрать файл',
	tool_file_metadata_analyzer_clear: 'Очистить',
	tool_file_metadata_analyzer_decode_fail: 'Не удалось декодировать медиаполя — базовая информация показана.',
	tool_file_metadata_analyzer_desc:
		'Просмотр метаданных локального файла — размер, тип, размеры, длительность. Без загрузки на сервер; на устройстве.',
	tool_file_metadata_analyzer_description:
		'Анализатор метаданных: выберите файл для имени, байтов, MIME и изменения. Изображения → размеры; аудио/видео → длительность. Magic-byte: PNG, JPEG, GIF, WebP, PDF, ZIP, MP4. Пример: PNG 16×16 при загрузке. Глубокий EXIF → связанный инструмент EXIF. Без загрузки на сервер.',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} px',
	tool_file_metadata_analyzer_drop_hint: 'Или перетащите файл сюда. Анализ во вкладке.',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: 'Сначала выберите или перетащите файл.',
	tool_file_metadata_analyzer_example:
		'Загрузка примера создаёт PNG 16×16 sample-icon.png в памяти. Таблица ~100+ байт, image/png, 16×16 px, подсказка PNG — без upload.',
	tool_file_metadata_analyzer_example_title: 'Пример',
	tool_file_metadata_analyzer_faq_a1: 'Нет. Файл читается через File API во вкладке. На сервер не отправляется.',
	tool_file_metadata_analyzer_faq_a2:
		'Эта страница — база контейнера + размеры/длительность при возможности. EXIF — чтение/удаление тегов камеры.',
	tool_file_metadata_analyzer_faq_a3: 'file.type может быть пуст. Размер и имя остаются; magic-byte подскажет тип.',
	tool_file_metadata_analyzer_faq_a4: 'Некоторые кодеки не декодируются. Поля File API сохраняются; строка заметки поясняет.',
	tool_file_metadata_analyzer_faq_a5: 'Читаем ~12 первых байт (PNG, JPEG, GIF, WebP, PDF, ZIP, MP4). Подсказка, не полная база.',
	tool_file_metadata_analyzer_faq_q1: 'Загружается ли файл на сервер?',
	tool_file_metadata_analyzer_faq_q2: 'Чем отличается от EXIF-инструмента?',
	tool_file_metadata_analyzer_faq_q3: 'Почему MIME пуст?',
	tool_file_metadata_analyzer_faq_q4: 'Почему нет размеров или длительности?',
	tool_file_metadata_analyzer_faq_q5: 'Что такое подсказки magic-byte?',
	tool_file_metadata_analyzer_field_decode_note: 'Заметка декодирования',
	tool_file_metadata_analyzer_field_dimensions: 'Размеры',
	tool_file_metadata_analyzer_field_duration: 'Длительность',
	tool_file_metadata_analyzer_field_magic: 'Подсказка magic-byte',
	tool_file_metadata_analyzer_field_modified: 'Последнее изменение',
	tool_file_metadata_analyzer_field_name: 'Имя файла',
	tool_file_metadata_analyzer_field_size: 'Размер (байт)',
	tool_file_metadata_analyzer_field_size_human: 'Размер (читаемый)',
	tool_file_metadata_analyzer_field_type: 'MIME / тип',
	tool_file_metadata_analyzer_how_body: 'Выберите локальный файл. Поля File, затем углубление для изображений/медиа.',
	tool_file_metadata_analyzer_how_item_1: 'Перетащите файл или нажмите Выбрать файл.',
	tool_file_metadata_analyzer_how_item_2: 'Смотрите имя, байты, читаемый размер, MIME, изменение.',
	tool_file_metadata_analyzer_how_item_3: 'Изображения: ширина×высота; аудио/видео: длительность.',
	tool_file_metadata_analyzer_how_item_4: 'Загрузить пример или Очистить.',
	tool_file_metadata_analyzer_how_title: 'Как это работает',
	tool_file_metadata_analyzer_load_sample: 'Загрузить пример',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'Результаты метаданных',
	tool_file_metadata_analyzer_rules_body: 'Источники полей и ограничения анализатора.',
	tool_file_metadata_analyzer_rules_item_1: 'Имя, размер, type, lastModified — из объекта File.',
	tool_file_metadata_analyzer_rules_item_2: 'Размеры изображения через createImageBitmap или Image — та же вкладка.',
	tool_file_metadata_analyzer_rules_item_3: 'Длительность через media-элемент; редкие кодеки могут не сработать.',
	tool_file_metadata_analyzer_rules_item_4: 'Magic-byte поверхностен — не замена hash или глубокого EXIF.',
	tool_file_metadata_analyzer_rules_title: 'Ожидаемые правила',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: 'Анализ завершён.',
	tool_file_metadata_analyzer_title: 'анализатор метаданных файлов',
	tool_file_metadata_analyzer_usecase_1: 'Проверить 1920×1080 перед загрузкой в CMS.',
	tool_file_metadata_analyzer_usecase_2: 'Узнать длительность голосовой заметки без desktop-инспектора.',
	tool_file_metadata_analyzer_usecase_3: 'Сравнить MIME и magic-byte при подозрительном расширении.',
	tool_file_metadata_analyzer_usecases_title: 'Подходит для',
	tool_file_metadata_analyzer_waiting: 'Выберите файл или загрузите пример.',
};

export default ru;
