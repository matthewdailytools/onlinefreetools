/**
 * i18n tool shard (create-zip-file / ru).
 * H1: Создать zip-файл.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_create_zip_file_article:
		'Выберите файлы на этой вкладке, соберите ZIP и скачайте. Файлы остаются на устройстве и не отправляются на сервер. Gzip — вторичный режим для одного файла.',
	tool_create_zip_file_choose_files: 'Выбрать файлы',
	tool_create_zip_file_clear: 'Очистить',
	tool_create_zip_file_desc:
		'Соберите zip в браузере из нескольких файлов или папки с путём и скачайте — без загрузки на сервер.',
	tool_create_zip_file_description:
		'Создать zip-файл: выберите файлы (имена папок сохраняются, если браузер даёт относительный путь), оставьте ZIP и скачайте. Файлы остаются на устройстве и не отправляются на сервер. Пример кладёт notes.txt, photo.png и docs/readme.md в sample.zip. Gzip — вторичный режим одного файла. ZIP с паролем — граница FAQ, не обещание первого экрана.',
	tool_create_zip_file_download: 'Скачать ZIP',
	tool_create_zip_file_drop_hint: 'Перетащите файлы сюда. При сбросе папки относительные пути сохраняются, если браузер их даёт.',
	tool_create_zip_file_empty: 'Сначала выберите хотя бы один файл.',
	tool_create_zip_file_err_fflate: 'Не удалось загрузить движок ZIP. Проверьте сеть и повторите.',
	tool_create_zip_file_err_gzip_many: 'Gzip сжимает один файл. Для нескольких вернитесь к ZIP или оставьте один.',
	tool_create_zip_file_err_too_large: 'Этот набор слишком велик для безопасной упаковки в браузере. Уберите файлы и повторите.',
	tool_create_zip_file_example:
		'Загрузка примера кладёт notes.txt, крошечный photo.png и docs/readme.md и собирает sample.zip. Скачать ZIP доступно с первого экрана.',
	tool_create_zip_file_example_title: 'Пример',
	tool_create_zip_file_faq_a1:
		'Нет. Байты читаются на этой вкладке. Скрипт движка ZIP может грузиться с этого сайта, но ваши файлы на наши серверы не уходят.',
	tool_create_zip_file_faq_a2:
		'Если браузер сообщает webkitRelativePath (сброс папки или выбор каталога), эти пути становятся записями ZIP после удаления ../. Это задача «zip папки» на этой странице.',
	tool_create_zip_file_faq_a3:
		'Страница не создаёт и не взламывает AES-ZIP на первом экране. ZIP с паролем — только граница FAQ.',
	tool_create_zip_file_faq_a4:
		'Gzip — только для одного файла, если нужен .gz. Несколько файлов — в ZIP. Gzip не сжимает PDF.',
	tool_create_zip_file_faq_a5:
		'Очень большие наборы могут исчерпать память вкладки. Страница предупредит и остановится. Распаковка — на связанной странице Unzip.',
	tool_create_zip_file_faq_q1: 'Файлы загружаются на сервер?',
	tool_create_zip_file_faq_q2: 'Можно ли заархивировать папку в zip?',
	tool_create_zip_file_faq_q3: 'Создаётся ли zip с паролем?',
	tool_create_zip_file_faq_q4: 'Когда использовать Gzip вместо ZIP?',
	tool_create_zip_file_faq_q5: 'Что с огромными файлами и где распаковать?',
	tool_create_zip_file_file_count_label: 'Файлы',
	tool_create_zip_file_how_body:
		'Выберите то, что нужно отправить одним архивом, сохраните папки, если браузер дал путь, и скачайте ZIP. Gzip — отдельный путь для одного файла.',
	tool_create_zip_file_how_item_1: 'Выберите файлы, которые нужно отправить одним zip — это задача страницы, не второй распаковщик.',
	tool_create_zip_file_how_item_2: 'Перетащите папку, если браузер хранит относительные пути; сегменты ../ удаляются.',
	tool_create_zip_file_how_item_3: 'Оставьте ZIP по умолчанию и скачайте. Пример уже упаковывает три файла при открытии.',
	tool_create_zip_file_how_item_4: 'Переключайтесь на Gzip только с одним файлом и если нужен .gz. Несколько файлов остаются в ZIP.',
	tool_create_zip_file_how_title: 'Как это работает',
	tool_create_zip_file_level_label: 'Уровень сжатия',
	tool_create_zip_file_load_sample: 'Пример',
	tool_create_zip_file_mode_gzip: 'Gzip (один файл)',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: 'Размер после упаковки',
	tool_create_zip_file_rules_body:
		'Упаковка в браузере требует очистки путей, разделения ZIP и Gzip, лимита размера и ясной границы пароля.',
	tool_create_zip_file_rules_item_1:
		'ZIP использует DEFLATE через zipSync fflate. Уровень 0–9 необязателен; пример берёт лёгкий уровень, чтобы первый кадр был быстрым.',
	tool_create_zip_file_rules_item_2:
		'Имена берутся из имени файла или webkitRelativePath. Начальные слэши и ../ удаляются.',
	tool_create_zip_file_rules_item_3:
		'Режим Gzip вызывает gzipSync ровно для одного файла. Больше одного — только ZIP.',
	tool_create_zip_file_rules_item_4:
		'ZIP с паролем — не вывод первого экрана. Страница не восстанавливает и не взламывает шифрованные архивы.',
	tool_create_zip_file_rules_title: 'Ожидаемые правила',
	tool_create_zip_file_status_done: 'Архив готов — скачайте или замените файлы.',
	tool_create_zip_file_status_packing: 'Упаковка…',
	tool_create_zip_file_title: 'Создать zip-файл',
	tool_create_zip_file_usecase_1:
		'Почта: собрать несколько вложений в один zip перед отправкой, не загружая их на сайт упаковки.',
	tool_create_zip_file_usecase_2:
		'Учёба: заархивировать папку конспектов и скриншот, когда просят один архив.',
	tool_create_zip_file_usecase_3:
		'Небольшой исходник: readme плюс пара файлов, затем проверить zip на связанной странице хеша.',
	tool_create_zip_file_usecases_title: 'Подходящие случаи',
};

export default ru;
