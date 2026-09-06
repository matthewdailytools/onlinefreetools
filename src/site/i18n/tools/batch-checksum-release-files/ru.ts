/**
 * i18n-фрагмент (batch-checksum-release-files / ru).
 * H1 следует запросу «Контрольные суммы файлов релиза пакетом».
 */
import type { SiteLangDict } from '../../../types';

/** Русский: таблица SHA-256 релизных файлов и сверка SUMS. */
const ru: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'Посчитайте хеши папки релизных файлов на этой вкладке. На выходе таблица, CSV и SHA256SUMS — не ZIP бинарников. Вставьте официальный список, чтобы отметить совпадение или расхождение. Файлы остаются на устройстве и не загружаются на сервер.',
	tool_batch_checksum_release_files_choose_files: 'Выбрать файлы',
	tool_batch_checksum_release_files_clear: 'Очистить',
	tool_batch_checksum_release_files_col_compare: 'Сверка',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'Путь',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'Размер',
	tool_batch_checksum_release_files_desc:
		'Контрольные суммы файлов релиза пакетом: таблица SHA-256, опциональный MD5, вставка SHA256SUMS, экспорт CSV или SUMS; остаются на устройстве, на сервер не загружаются.',
	tool_batch_checksum_release_files_description:
		'Контрольные суммы файлов релиза пакетом: положите ассеты, посчитайте SHA-256 каждого на этой вкладке, при необходимости добавьте MD5, вставьте SHA256SUMS для сверки, экспортируйте CSV или текст SUMS — не ZIP бинарников. Шаг за шагом: выберите набор, хешируйте все, вставьте список если есть, экспортируйте. Пример: два коротких образца заполняют две строки SHA-256 и колонку совпадения. Файлы остаются на устройстве и не загружаются на сервер.',
	tool_batch_checksum_release_files_drop_hint: 'Перетащите файлы релиза (до 20). Хеш остаётся на вкладке. Эта страница не пакует оригиналы в ZIP.',
	tool_batch_checksum_release_files_empty: 'Сначала добавьте файлы.',
	tool_batch_checksum_release_files_err_md5: 'Библиотека MD5 не загрузилась. Попробуйте актуальный браузер или выключите MD5.',
	tool_batch_checksum_release_files_err_read: 'Не удалось прочитать этот файл. Пропущен.',
	tool_batch_checksum_release_files_err_too_many: 'Не больше 20 файлов. Лишние не добавлены.',
	tool_batch_checksum_release_files_example:
		'Загрузить пример хеширует два коротких бинарника, заполняет строки SHA-256, вставляет строку SUMS первого файла для совпадения и включает CSV и SUMS.',
	tool_batch_checksum_release_files_example_title: 'Пример',
	tool_batch_checksum_release_files_export_csv: 'Экспорт CSV',
	tool_batch_checksum_release_files_export_sums: 'Экспорт SUMS',
	tool_batch_checksum_release_files_faq_a1:
		'Нет. Хеш считается на этой вкладке. Файлы остаются на устройстве и не загружаются на сервер. SHA-256 — Web Crypto. MD5 может грузить crypto-js с этого сайта; ваши байты вкладку не покидают.',
	tool_batch_checksum_release_files_faq_a2:
		'Нет. Экспорт — таблица CSV и SHA256SUMS. Упаковать бинарники — это Создать ZIP, другая задача.',
	tool_batch_checksum_release_files_faq_a3:
		'Хеш файла — один файл или вставка. Эта страница хеширует набор релиза, сверяет вставленный SHA256SUMS и экспортирует CSV и SUMS.',
	tool_batch_checksum_release_files_faq_a4:
		'Включите Также MD5. SHA-256 всегда считается. MD5 — для старых списков, не второй URL.',
	tool_batch_checksum_release_files_faq_a5:
		'Колонка пути предпочитает webkitRelativePath. Повторы имён в очереди получают суффикс, чтобы строки SUMS не сталкивались.',
	tool_batch_checksum_release_files_faq_q1: 'Файлы уходят на сервер?',
	tool_batch_checksum_release_files_faq_q2: 'Бинарники релиза пакуются в ZIP?',
	tool_batch_checksum_release_files_faq_q3: 'Чем это отличается от Хеша файла?',
	tool_batch_checksum_release_files_faq_q4: 'Где MD5?',
	tool_batch_checksum_release_files_faq_q5: 'Что если два файла с одним именем?',
	tool_batch_checksum_release_files_file_count_tpl: '{n} файлов в очереди',
	tool_batch_checksum_release_files_hash_all: 'Хешировать все',
	tool_batch_checksum_release_files_how_body:
		'Положите ассеты, посчитайте SHA-256 каждого, вставьте SHA256SUMS если есть, экспортируйте CSV или SUMS — не ZIP файлов.',
	tool_batch_checksum_release_files_how_item_1: 'Выберите бинарники, установщики или checksums, которые собираетесь публиковать.',
	tool_batch_checksum_release_files_how_item_2: 'Оставьте SHA-256. Включайте Также MD5 только если старый список ещё его использует.',
	tool_batch_checksum_release_files_how_item_3: 'Нажмите Хешировать все. Прогресс по файлам. Ошибка чтения пропускает строку.',
	tool_batch_checksum_release_files_how_item_4: 'Вставьте официальный SHA256SUMS, чтобы отметить совпадение, расхождение или отсутствие.',
	tool_batch_checksum_release_files_how_item_5: 'Экспортируйте CSV или SUMS, когда удался хотя бы один хеш. Нужен один файл — используйте Хеш файла.',
	tool_batch_checksum_release_files_how_title: 'Как посчитать суммы пачки',
	tool_batch_checksum_release_files_md5_label: 'Считать также MD5',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 использует Web Crypto на байтах, прочитанных кусками по 4 МиБ и склеенных. На выходе таблица, CSV и SUMS, никогда ZIP оригиналов.',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 всегда идёт. MD5 по желанию и лениво грузит crypto-js с этого сайта; байты остаются на вкладке.',
	tool_batch_checksum_release_files_rules_item_2:
		'Строки SUMS как GNU sha256sum: hex, два пробела или пробел-звезда, затем имя. Лишние имена во вставке помечаются как отсутствующие.',
	tool_batch_checksum_release_files_rules_item_3:
		'Ошибки чтения пропускают строку. Дубли имён в очереди получают суффикс. Пустая очередь отключает экспорт.',
	tool_batch_checksum_release_files_rules_item_4:
		'Файлы остаются на устройстве и не загружаются на сервер.',
	tool_batch_checksum_release_files_rules_title: 'Чего ожидать',
	tool_batch_checksum_release_files_sample: 'Загрузить пример',
	tool_batch_checksum_release_files_status_done: 'Пакет готов — проверьте таблицу и экспортируйте CSV или SUMS.',
	tool_batch_checksum_release_files_status_hashing: 'Хешируем каждый файл релиза…',
	tool_batch_checksum_release_files_status_match: 'Совпадает',
	tool_batch_checksum_release_files_status_mismatch: 'Не совпадает',
	tool_batch_checksum_release_files_status_missing: 'Нет в очереди',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'Посчитан',
	tool_batch_checksum_release_files_status_skip: 'Пропущен',
	tool_batch_checksum_release_files_summary_tpl: '{ok} посчитаны · {skip} пропущены · {match} совпадают · {mismatch} не совпадают',
	tool_batch_checksum_release_files_sums_label: 'Вставьте SHA256SUMS для сверки',
	tool_batch_checksum_release_files_sums_placeholder: 'hex  имя',
	tool_batch_checksum_release_files_title: 'Контрольные суммы файлов релиза пакетом',
	tool_batch_checksum_release_files_usecase_1: 'Ассеты GitHub Release, рядом с которыми нужен SHA256SUMS.',
	tool_batch_checksum_release_files_usecase_2: 'Сверить файлы зеркала со списком checksums апстрима.',
	tool_batch_checksum_release_files_usecase_3: 'Посчитать хеши нескольких файлов, не пакуя бинарники в ZIP.',
	tool_batch_checksum_release_files_usecases_title: 'Когда это кстати',
	tool_batch_checksum_release_files_warn_large: 'Есть файл больше 64 МБ — на этой строке вкладке может не хватить памяти.',
};

export default ru;
