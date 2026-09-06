/**
 * i18n tool shard (archive-extractor / ru).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
  tool_archive_extractor_article:
    'Откройте архивы ZIP, TAR и TAR.GZ в браузере, посмотрите дерево файлов, предварительно просмотрите обычные текстовые или графические элементы и экспортируйте поддерживаемое содержимое в чистый ZIP. Архив остаётся на вашем устройстве и не загружается на сервер.',
  tool_archive_extractor_choose_file: 'Выбрать архив',
  tool_archive_extractor_clear: 'Очистить',
  tool_archive_extractor_desc:
    'Распаковать архив онлайн: открыть ZIP, TAR и TAR.GZ в браузере, посмотреть файлы и экспортировать ZIP без загрузки на сервер.',
  tool_archive_extractor_description:
    'Используйте этот онлайн-распаковщик архива, чтобы открыть сжатые файлы в браузере: выберите ZIP, TAR или TAR.GZ, посмотрите дерево файлов, откройте предпросмотр текста или изображений, скачайте один файл или экспортируйте поддерживаемое содержимое в чистый ZIP. Файлы остаются на устройстве и не загружаются на сервер. Пример sample-archive.tar.gz показывает README.txt, src/index.js и assets/logo.png с безопасными путями.',
  tool_archive_extractor_download_all: 'Экспорт ZIP',
  tool_archive_extractor_download_file: 'Скачать файл',
  tool_archive_extractor_drop_hint:
    'Перетащите один архив. ZIP, TAR и TAR.GZ работают сейчас; для RAR, 7Z и ISO показаны примечания поддержки.',
  tool_archive_extractor_empty: 'Сначала выберите архив.',
  tool_archive_extractor_engine_badge: 'примечания',
  tool_archive_extractor_err_archive:
    'Не удалось прочитать этот архив. Он может быть повреждён, зашифрован, разбит на тома или использовать неподдерживаемый метод сжатия.',
  tool_archive_extractor_err_engine:
    'Для RAR, 7Z и ISO нужен более тяжёлый многоформатный движок, который не включён в эту версию. ZIP, TAR и TAR.GZ продолжают работать в браузере.',
  tool_archive_extractor_err_fflate: 'Не удалось загрузить архивный движок. Проверьте сеть и попробуйте снова.',
  tool_archive_extractor_err_no_file: 'Извлечённый файл не выбран.',
  tool_archive_extractor_err_unsupported:
    'Этот тип файла пока не поддерживается здесь. Попробуйте ZIP, TAR или TAR.GZ либо используйте настольную программу для этого формата.',
  tool_archive_extractor_example:
    'Встроенный пример sample-archive.tar.gz открывается как настоящий архив с тремя записями: README.txt, src/index.js и assets/logo.png. Страница показывает дерево, предпросмотр README.txt и может экспортировать поддерживаемое содержимое как extracted-archive.zip.',
  tool_archive_extractor_example_title: 'Пример',
  tool_archive_extractor_exported_all: 'Файлы упакованы в новый ZIP с безопасными путями.',
  tool_archive_extractor_faq_a1:
    'Нет. Архив читается во вкладке браузера, а извлечённые байты остаются на вашем устройстве. Вспомогательный скрипт может загрузиться с этого сайта, но ваши файлы не отправляются на наши серверы.',
  tool_archive_extractor_faq_a2:
    'В этой версии работают ZIP, TAR, TAR.GZ и TGZ. RAR, 7Z и ISO отображаются как форматы с примечаниями поддержки, пока не подключён более тяжёлый многоформатный движок.',
  tool_archive_extractor_faq_a3:
    'Архивы с паролем требуют ввода пароля и всё равно могут не открыться, если формат или шифрование не поддерживается. Инструмент не взламывает, не восстанавливает и не угадывает пароли.',
  tool_archive_extractor_faq_a4:
    'Абсолютные пути, сегменты ../, повторяющиеся имена и небезопасные символы переименовываются или блокируются перед экспортом. Цели символических ссылок не записываются как ссылки.',
  tool_archive_extractor_faq_a5:
    'Большие архивы могут быть медленными или исчерпать память браузера, особенно на телефонах. Страница предупреждает, если число файлов, распакованный размер или коэффициент расширения выглядят рискованно.',
  tool_archive_extractor_faq_a6:
    'Экспорт ZIP означает повторную упаковку уже извлечённых поддерживаемых файлов с очищенными путями. Это не обещает сохранить все особенности исходного формата.',
  tool_archive_extractor_faq_q1: 'Мой архив загружается на сервер?',
  tool_archive_extractor_faq_q2: 'Какие форматы архивов работают?',
  tool_archive_extractor_faq_q3: 'Можно открыть RAR или 7Z с паролем?',
  tool_archive_extractor_faq_q4: 'Что происходит с небезопасными путями и символическими ссылками?',
  tool_archive_extractor_faq_q5: 'Как обрабатываются очень большие архивы?',
  tool_archive_extractor_faq_q6: 'RAR в ZIP или 7Z в ZIP — это настоящее преобразование?',
  tool_archive_extractor_file_count_label: 'Файлы',
  tool_archive_extractor_format_label: 'Формат',
  tool_archive_extractor_how_body:
    'Выберите или перетащите один архив. Страница определяет ZIP, TAR или TAR.GZ, строит безопасный список файлов и показывает предпросмотр небольших текстов или изображений. Выберите строку, чтобы скачать один файл, или экспортируйте поддерживаемые файлы в новый ZIP.',
  tool_archive_extractor_how_title: 'Как это работает',
  tool_archive_extractor_load_engine: 'Загрузить движок форматов',
  tool_archive_extractor_load_sample: 'Загрузить пример',
  tool_archive_extractor_no_preview:
    'Предпросмотр недоступен для этого типа файла. Файл всё равно можно скачать.',
  tool_archive_extractor_preview_title: 'Предпросмотр',
  tool_archive_extractor_rules_body:
    'Для распаковки архива нужны ясные правила поддержки форматов, безопасности путей, предпросмотра и экспорта ZIP.',
  tool_archive_extractor_rules_item_1:
    'ZIP читает центральный каталог. TAR.GZ открывается в два шага: распаковать GZIP, затем прочитать заголовки TAR.',
  tool_archive_extractor_rules_item_2:
    'RAR, 7Z и ISO требуют более тяжёлого многоформатного движка; страница не показывает эти пути как активные до загрузки движка.',
  tool_archive_extractor_rules_item_3:
    'Безопасность путей: начальные слэши, буквы дисков, ../, дубликаты имён и небезопасные символы очищаются перед экспортом.',
  tool_archive_extractor_rules_item_4:
    'Предпросмотр: небольшие текстовые файлы, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP и SVG можно посмотреть; остальные показывают только метаданные.',
  tool_archive_extractor_rules_item_5:
    'Ограничения: зашифрованные, разделённые, повреждённые, solid или необычно расширяющиеся архивы могут не открыться или потребовать настольный инструмент.',
  tool_archive_extractor_rules_title: 'Ожидаемые правила',
  tool_archive_extractor_selected_label: 'Выбрано',
  tool_archive_extractor_size_label: 'Размер после извлечения',
  tool_archive_extractor_status_done: 'Архив открыт — выберите файл или экспортируйте ZIP.',
  tool_archive_extractor_status_reading: 'Чтение архива...',
  tool_archive_extractor_title:
    'Распаковать архив онлайн — открыть сжатые файлы в браузере',
  tool_archive_extractor_total_size_label: 'Распакованный размер',
  tool_archive_extractor_usecase_1:
    'Разработка: откройте релиз исходного кода .tar.gz, проверьте README и src, затем скачайте только нужное.',
  tool_archive_extractor_usecase_2:
    'Операции: проверьте ZIP, RAR или 7Z пакет материалов от поставщика и экспортируйте поддерживаемые файлы в чистый ZIP для команды.',
  tool_archive_extractor_usecase_3:
    'Управляемые устройства: просмотрите учебные материалы или вложения на Chromebook без установки настольной программы.',
  tool_archive_extractor_usecases_title: 'Подходящие случаи',
  tool_archive_extractor_warn_dangerous:
    'Некоторые пути были переименованы или пропущены ради безопасности перед экспортом.',
  tool_archive_extractor_warn_large:
    'Предупреждение о большом архиве: этот файл может быть медленным или требовательным к памяти в браузере.',
};

export default ru;
