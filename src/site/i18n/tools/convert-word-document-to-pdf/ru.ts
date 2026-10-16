/**
 * i18n 工具分片（convert-word-document-to-pdf / ru）。
 * 俄语检索向重写：Конвертировать документ Word в PDF。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；仅在浏览器内处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 俄语文案表；键名与英文母版一一对应。 */
const ru: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: ".docx становится PDF в этой вкладке. Файл остаётся на вашем устройстве и не загружается на сервер.",
  tool_convert_word_document_to_pdf_choose_file: "Выбрать файл Word (.docx)",
  tool_convert_word_document_to_pdf_choose_files: "Выбрать файлы",
  tool_convert_word_document_to_pdf_clear: "Очистить",
  tool_convert_word_document_to_pdf_convert: "Конвертировать",
  tool_convert_word_document_to_pdf_desc: "Конвертировать документ Word в PDF в браузере: выберите .docx, посмотрите предпросмотр HTML и экспортируйте. Файл остаётся на устройстве и не загружается на сервер.",
  tool_convert_word_document_to_pdf_description: "Старый .doc сюда не подойдёт, только .docx. Конвертация идёт в этой вкладке: «Выбрать файл Word (.docx)», предпросмотр HTML, «Конвертировать», затем «Скачать PDF». Файл остаётся на этом устройстве и не загружается на сервер. «Загрузить образец» — пример: один абзац и одностраничный PDF.",
  tool_convert_word_document_to_pdf_download: "Скачать PDF",
  tool_convert_word_document_to_pdf_drop_hint: "Или перетащите .docx сюда. Обработка остаётся в этой вкладке.",
  tool_convert_word_document_to_pdf_empty: "Сначала выберите файл .docx.",
  tool_convert_word_document_to_pdf_err_convert: "Конвертация не удалась. Попробуйте документ попроще.",
  tool_convert_word_document_to_pdf_err_encrypted: "Похоже, файл защищён паролем. Сначала снимите защиту.",
  tool_convert_word_document_to_pdf_err_load: "Не удалось прочитать файл .docx.",
  tool_convert_word_document_to_pdf_err_notext: "В документе нет читаемого основного текста.",
  tool_convert_word_document_to_pdf_err_pdfjs: "Не удалось загрузить средство отрисовки PDF.",
  tool_convert_word_document_to_pdf_example: "«Загрузить образец» создаёт .docx с фразой «Образец абзаца Word для конвертации.», показывает предпросмотр HTML и экспортирует PDF на одну страницу.",
  tool_convert_word_document_to_pdf_example_title: "Пример",
  tool_convert_word_document_to_pdf_faq_a1: "Нет. Чтение и экспорт PDF идут в этой вкладке, скрипты загружаются с этого сайта. Документ не попадает на наши серверы.",
  tool_convert_word_document_to_pdf_faq_a2: "Путь такой: .docx, затем предпросмотр HTML, затем PDF. Колонтитулы, плавающие фигуры и часть шрифтов сплющиваются. Если разметка уже есть, откройте «Конвертировать HTML в PDF».",
  tool_convert_word_document_to_pdf_faq_a3: "Нет. Сначала сохраните как .docx. Страница принимает только пакет Office Open XML и не распознаёт текст на скане.",
  tool_convert_word_document_to_pdf_faq_a4: "Здесь начинают с готового файла Word. «Написать PDF-документ онлайн» — пустой редактор.",
  tool_convert_word_document_to_pdf_faq_a5: "Большой .docx может обрабатываться медленно. Сначала попробуйте браузер на компьютере.",
  tool_convert_word_document_to_pdf_faq_q1: "Файл Word уходит с этого компьютера?",
  tool_convert_word_document_to_pdf_faq_q2: "Почему PDF выглядит проще, чем в Word?",
  tool_convert_word_document_to_pdf_faq_q3: "Можно конвертировать старый .doc?",
  tool_convert_word_document_to_pdf_faq_q4: "Чем это отличается от написания PDF в браузере?",
  tool_convert_word_document_to_pdf_faq_q5: "Большие файлы поддерживаются?",
  tool_convert_word_document_to_pdf_how_body: "Сначала «Выбрать файл Word (.docx)» или «Загрузить образец». Потом прочитайте блок «Предпросмотр HTML», нажмите «Конвертировать» и «Скачать PDF». Файл не покидает эту вкладку.",
  tool_convert_word_document_to_pdf_how_item_1: "Нажмите «Выбрать файл Word (.docx)» или «Загрузить образец».",
  tool_convert_word_document_to_pdf_how_item_2: "Прочитайте блок «Предпросмотр HTML» основного текста.",
  tool_convert_word_document_to_pdf_how_item_3: "Нажмите «Конвертировать», чтобы собрать PDF из этого предпросмотра.",
  tool_convert_word_document_to_pdf_how_item_4: "Нажмите «Скачать PDF», когда статус покажет «Готово.».",
  tool_convert_word_document_to_pdf_how_title: "Как конвертировать документ Word в PDF",
  tool_convert_word_document_to_pdf_preview_label: "Предпросмотр HTML",
  tool_convert_word_document_to_pdf_rules_body: "Принимается только .docx. Вёрстка, колонтитулы и сложные стили в PDF могут сплющиться.",
  tool_convert_word_document_to_pdf_rules_item_1: "Задача: сделать из документа Word печатный PDF в браузере.",
  tool_convert_word_document_to_pdf_rules_item_2: "Только на вашем устройстве; файл не загружается на сервер.",
  tool_convert_word_document_to_pdf_rules_item_3: "Старый .doc и сканы из одних картинок не проходят распознавание текста.",
  tool_convert_word_document_to_pdf_rules_item_4: "Зашифрованный или повреждённый пакет останавливается с понятным сообщением.",
  tool_convert_word_document_to_pdf_rules_item_5: "Колонтитулы, плавающие фигуры и часть шрифтов сплющиваются, потому что путь идёт от .docx к HTML и затем к PDF.",
  tool_convert_word_document_to_pdf_rules_title: "Что сохраняется при конвертации",
  tool_convert_word_document_to_pdf_sample: "Загрузить образец",
  tool_convert_word_document_to_pdf_sample_paragraph: "Образец абзаца Word для конвертации.",
  tool_convert_word_document_to_pdf_status_done: "Готово.",
  tool_convert_word_document_to_pdf_status_working: "Идёт конвертация…",
  tool_convert_word_document_to_pdf_title: "Конвертировать документ Word в PDF",
  tool_convert_word_document_to_pdf_usecase_1: "Студентам: короткий .docx посмотреть и отдать на печать",
  tool_convert_word_document_to_pdf_usecase_2: "В офисе без настольного Word отправить черновик как PDF",
  tool_convert_word_document_to_pdf_usecase_3: "Письмо, которое должно остаться на устройстве",
  tool_convert_word_document_to_pdf_usecases_title: "Кому это пригодится",
  tool_convert_word_document_to_pdf_warn_large: "Большой файл: может быть медленно.",
};
export default ru;
