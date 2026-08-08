/**
 * i18n tool shard (csv-json / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_csv_json_article:
    'Двунаправленное CSV ↔ JSON с понятными правилами типов, разделителя и кавычек, а также как вложенный JSON уплощается в столбцы. Для обмена таблица ↔ API, а не ещё одна пустая страница.',
  tool_csv_json_clear: 'Очистить',
  tool_csv_json_convert: 'Преобразовать',
  tool_csv_json_copy_csv: 'Копировать CSV',
  tool_csv_json_copy_done: 'Скопировано',
  tool_csv_json_copy_json: 'Копировать JSON',
  tool_csv_json_csv_input_label: 'Ввод CSV',
  tool_csv_json_csv_output_label: 'Вывод CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: 'Автоопределение',
  tool_csv_json_delimiter_comma: 'Запятая ,',
  tool_csv_json_delimiter_label: 'Разделитель',
  tool_csv_json_delimiter_semicolon: 'Точка с запятой ;',
  tool_csv_json_delimiter_tab: 'Табуляция',
  tool_csv_json_description:
    'Преобразуйте CSV в JSON или JSON в CSV в браузере. Шаги: выберите направление, вставьте или загрузите, задайте разделитель и заголовок, затем скопируйте или скачайте. Обрабатывает поля в кавычках с запятыми, точками с запятой и табуляцией; из JSON в CSV вложенные объекты уплощаются в столбцы. Пример: превратите таблицу товаров (sku, название, цена) в массив JSON — данные остаются локально.',
  tool_csv_json_dir_label: 'Направление преобразования',
  tool_csv_json_download_csv: 'Скачать CSV',
  tool_csv_json_download_json: 'Скачать JSON',
  tool_csv_json_empty: 'Сначала вставьте содержимое.',
  tool_csv_json_example:
    'CSV `sku,title,price` со строкой `A-001,"Chair, oak",129.9` даёт JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (без типов price остаётся текстом; включите их для числа 129.9). Обратно: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` даёт заголовок `sku,dim.w,dim.h` со строкой `A-001,40,90`.',
  tool_csv_json_example_title: 'Пример',
  tool_csv_json_faq_a1:
    'Да. Выберите запятую, точку с запятой или табуляцию либо оставьте автоопределение — Papa Parse угадает по тексту. Точка с запятой часто встречается в европейских выгрузках Excel; табуляция — это TSV.',
  tool_csv_json_faq_a2:
    'По умолчанию каждая ячейка остаётся текстом, поэтому 007 и длинные ID сохраняются. При включении «Определять типы» числоподобные значения становятся числами: 007 станет 7, а очень длинные цифры могут потерять точность. Оставьте выключенным для SKU, индексов и телефонов.',
  tool_csv_json_faq_a3:
    'Они заключаются в двойные кавычки, а внутренние кавычки удваиваются по RFC 4180. Так заголовок вроде Chair, oak остаётся в одном поле, а не разбивается на два столбца.',
  tool_csv_json_faq_a4:
    'Объекты уплощаются в столбцы по точечному пути (dim.w, dim.h). Массивы записываются как строка JSON в одной ячейке. Столбцы — объединение ключей всех записей, а запись без ключа получает пустую ячейку.',
  tool_csv_json_faq_a5:
    'Нет. Разбор остаётся в этой вкладке, а выбранные файлы читаются локально. CDN может отдавать Papa Parse, но этот запрос скачивает только код, а не загружает ваш CSV или JSON.',
  tool_csv_json_faq_q1: 'Поддерживаются ли точка с запятой или табуляция, а не только запятая?',
  tool_csv_json_faq_q2: 'Останутся ли мои числа, ведущие нули и идентификаторы неизменными?',
  tool_csv_json_faq_q3: 'Как обрабатываются поля с запятыми, кавычками или переносами строк?',
  tool_csv_json_faq_q4: 'Как вложенный JSON становится столбцами CSV?',
  tool_csv_json_faq_q5: 'Покидают ли мои данные браузер?',
  tool_csv_json_header: 'Первая строка — заголовки',
  tool_csv_json_how_body:
    'Выберите CSV → JSON или JSON → CSV; разбор и генерация выполняются в этой вкладке через Papa Parse. Для CSV выберите разделитель (или автоопределение), считать ли первую строку заголовком и определять ли числа/логические. Для JSON вложенные объекты становятся столбцами по точечному пути, а столбцы — это объединение всех ключей.',
  tool_csv_json_how_title: 'Как это работает',
  tool_csv_json_indent_2: '2 пробела',
  tool_csv_json_indent_4: '4 пробела',
  tool_csv_json_indent_label: 'Отступ',
  tool_csv_json_indent_minify: 'Сжать JSON',
  tool_csv_json_json_input_label: 'Ввод JSON',
  tool_csv_json_json_output_label: 'Вывод JSON',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_large_warn:
    'Очень большой ввод (более 2 млн символов). Преобразование может быть медленным; попробуйте файл поменьше.',
  tool_csv_json_need_lib: 'Не удалось загрузить Papa Parse. Проверьте соединение и обновите страницу.',
  tool_csv_json_rules_body:
    'Что ожидать при преобразовании: как обрабатываются типы ячеек, какие разделители и правила кавычек применяются и как вложенный JSON отображается в столбцы.',
  tool_csv_json_rules_item_1:
    'Типы: ячейки CSV по умолчанию текст. Включите «Определять типы» для чисел/логических, но 007 станет 7, а длинные последовательности цифр могут потерять точность; оставьте выключенным для SKU, индексов и телефонов.',
  tool_csv_json_rules_item_2:
    'Разделители: запятая, точка с запятой (часто в европейском Excel) и табуляция (TSV); автоопределение угадывает по тексту. Поля с разделителем, кавычками или переносами строк заключаются в двойные кавычки по RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: объекты уплощаются по точечным путям (dim.w, dim.h); массивы записываются как строка JSON в одной ячейке; столбцы — объединение всех ключей, отсутствующее остаётся пустым.',
  tool_csv_json_rules_item_4:
    'Конфиденциальность: ваш текст и файлы не загружаются. Загрузка Papa Parse с CDN скачивает только код библиотеки, а не ваши данные.',
  tool_csv_json_rules_title: 'Правила, которые стоит ожидать',
  tool_csv_json_sample: 'Загрузить пример',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'Конвертер CSV ↔ JSON — типы, разделитель, локально',
  tool_csv_json_typing: 'Определять типы (числа/логические)',
  tool_csv_json_usecase_1:
    'E-commerce: превратите выгруженную таблицу товаров (sku, название, цена) в массив JSON для API магазина или маркетплейса.',
  tool_csv_json_usecase_2: 'Разработчики: переформатируйте ответ JSON в CSV для таблиц, сверки или передачи.',
  tool_csv_json_usecase_3:
    'Данные/эксплуатация: перенесите CSV отчётов или событий (запятая, точка с запятой или TSV) в JSON для конвейера, безопасно экранируя запятые и переносы строк.',
  tool_csv_json_usecases_title: 'Подходит для',
};
export default ru;
