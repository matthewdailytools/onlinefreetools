/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / ru).
 * Локальный H1: Пакетно преобразовать отсканированные PDF в Word с помощью OCR.
 * Имена ключей как в en.ts; формулировки самостоятельные, не калька с английского.
 */
import type { SiteLangDict } from '../../../types';

/** Русские строки интерфейса и справки: кнопки, FAQ, правила, карточка на главной. */
const ru: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: 'Дополнительные настройки (по желанию)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'Очередь бумажных сканов в Word: добавьте отсканированные PDF, Преобразовать всё, Скачать Word. По умолчанию один Word на всю пачку; можно переключить на отдельный Word для каждого PDF (несколько удач — Скачать ZIP). Имя файла — заголовок; удачная страница — абзацы, сверху картинка страницы для сверки. Размытая страница пропускается, остальное остаётся в том же документе. Файлы остаются на устройстве, без загрузки на сервер. Если слова уже выделяются — «Превратить PDF в документ Word». Стопка фото — «Пакетно преобразовать JPG в редактируемый Word с помощью OCR».',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'Выбрать PDF-файлы',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'Очистить',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'Файл',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'Заметки',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'Страницы',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: 'Статус',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'Преобразовать всё',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} файлов (макс. 5, 20 страниц)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'Пакетно преобразовать отсканированные PDF в Word с помощью OCR: очередь, Преобразовать всё, Скачать Word — остаются на устройстве, без загрузки на сервер.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'Отсканированный PDF в Word читается в этой вкладке: страница рисуется, распознаётся и собирается в один редактируемый DOCX. Шаги: добавить PDF, Преобразовать всё, Скачать Word. Пример: двухстраничный печатный скан становится Word с заголовком и необязательными картинками страниц. Ищут также OCR PDF в Word и несколько сканов в Word. Файлы остаются на устройстве, без загрузки на сервер. Готовый текстовый слой — «Превратить PDF в документ Word». Фото — «Пакетно преобразовать JPG в редактируемый Word с помощью OCR».',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'Скачать Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'Скачать ZIP',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'Перетащите сюда отсканированные PDF (макс. 5 файлов, 20 страниц). Обработка остаётся во вкладке.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: 'Сначала добавьте отсканированные PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'Этот браузер не собрал файл Word. Попробуйте более свежий.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более свежий.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty:
		'На этой странице не нашлось печатного текста. Пропущена. Возьмите более чёткий скан, не рукопись.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'У этого PDF пароль. В очередь не попал.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'Не загрузилась отрисовка PDF или движок OCR. Обновите страницу и нажмите Преобразовать всё. Уже прочитанные страницы всё ещё можно скачать.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'Сюда идут отсканированные PDF, не фото. JPG, PNG или WebP — на «Пакетно преобразовать JPG в редактируемый Word с помощью OCR». Этот файл не добавлен.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'Этот PDF не прочитался. Пропущен.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'Отрисовка PDF не загрузилась во вкладке. Обновите и повторите.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: 'Больше 12 МБ. Сначала сожмите. Файл не добавлен.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'Не больше пяти PDF. Лишние не добавлены.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: 'За один заход читается не больше 20 страниц. Лишние файлы не добавлены.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'«Загрузить пример» кладёт sample-scan.pdf (стр. 1: ONLINEFREETOOLS и The quick brown fox; стр. 2: SAMPLE TWO и Printed sample page), запускает Преобразовать всё и включает Скачать Word с одним заголовком и двумя страницами.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: 'Пример',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'Нет. PDF остаются в этой вкладке браузера. Скрипты отрисовки, OCR и сборки Word грузятся с этого сайта; файлы на наши серверы не уходят.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'«Превратить PDF в документ Word» копирует уже существующий текстовый слой и OCR не делает. Здесь каждая страница рисуется, затем читается картинка — скан без выделяемого текста всё равно становится абзацами. Если слова уже выделяются, идите туда.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'«Пакетно преобразовать JPG в редактируемый Word с помощью OCR» — очередь фото. Здесь только PDF. Брошенный JPG отклоняется нарочно.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'Нет. Сбойная страница пропускается; остальные страницы и остальные PDF попадают в тот же Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'В режиме по умолчанию «один Word на пачку» каждый удачный PDF — заголовок (имя файла). Каждая удачная страница: необязательная картинка, абзацы OCR, разрыв страницы. Отдельные документы — переключите на один Word на каждый PDF. Таблицы и колонки исходную вёрстку не повторяют.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'Нет. Фото — на «Пакетно преобразовать JPG в редактируемый Word с помощью OCR». Зона сброса здесь только для PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'Печатный шрифт надёжнее. Связная рукопись на этой странице часто срывается. Это не продукт для почерка.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'На выходе Word, не TXT и не PDF, в котором можно искать текст и который пишется обратно. Кто ищет отсканированный PDF в Word или OCR PDF в Word для бумажного скана — здесь. Слив текстового слоя — «Извлечь текст из PDF».',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'Не больше 5 PDF, по 12 МБ каждый, 20 страниц на всю пачку. Один PDF тоже идёт через Преобразовать всё и Скачать Word; отдельного адреса под одиночный файл нет.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'Да. Выберите один Word на каждый PDF, затем Преобразовать всё. Один удачный PDF по-прежнему даёт Скачать Word. Два и больше — Скачать ZIP, внутри по одному .docx на входной файл. Слияние в один Word остаётся режимом по умолчанию.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: 'Уходит ли PDF на сервер?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: 'В PDF уже можно выделять слова — это «Превратить PDF в документ Word»?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: 'У меня стопка JPG, не PDF. Куда?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: 'Одна страница сорвалась. Word целиком пустой?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'Что внутри получившегося Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: 'Можно ли бросить сюда JPG?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: 'Рукописный OCR здесь работает?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: 'Будет TXT или searchable PDF, или только Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: 'Какой потолок файлов и страниц?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: 'Можно ли выгрузить отдельный Word на каждый PDF, не сливая пачку?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'Бумажный скан становится редактируемым Word: добавьте PDF, нажмите Преобразовать всё (первый клик грузит отрисовку и OCR во вкладке, затем страница за страницей), потом Скачать Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'Перетащите один или несколько отсканированных PDF (или выберите файлы).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: 'По желанию: чип языка на всю пачку (по умолчанию китайский и английский).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'По желанию: оставить один Word на пачку или выбрать один Word на каждый PDF (несколько удачных файлов — Скачать ZIP).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'Нажмите Преобразовать всё — первый запуск грузит отрисовку PDF и OCR во вкладке, затем читает страницы по очереди. Сбойная страница пропускается.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'Нажмите Скачать Word — или Скачать ZIP, если выбран один Word на каждый PDF и удалось больше одного файла.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: 'Как пользоваться',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: 'прошло {s} с',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: 'Обновите и нажмите Преобразовать всё. Уже прочитанные страницы можно скачать.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: 'Преобразование остановилось',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: 'Готово. Дальше: Скачать Word, или Скачать ZIP, если выбран один Word на каждый PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: 'Загрузка',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: 'Сборка',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: 'Чтение',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: 'Отрисовка',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: 'Ход преобразования',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: 'Запуск…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'Арабский',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'Английский',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: 'Японский',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'Язык распознавания для всей пачки',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: 'Китайский',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: 'Китайский + английский',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: 'Самая длинная сторона перед чтением (px)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: 'По умолчанию 2048. Меньше — легче на телефоне.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'По умолчанию один Word. Один Word на каждый PDF: Скачать Word при одной удаче, Скачать ZIP при нескольких.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Выгрузка Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'Один Word на всю пачку',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'Отдельный Word на каждый PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint:
		'Включено по умолчанию. На каждой странице Word скан над абзацами OCR, чтобы свериться.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: 'Вставить картинку страницы над текстом',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · стр. {page}/{pages}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'Очередь до 5 файлов и 20 страниц. Каждая страница рисуется, уменьшается, если длинная сторона больше лимита, и читается в визуальном порядке. Один OCR-воркер идёт последовательно. Сбойная страница пропускается. Выгрузка — либо один слитый Word, либо отдельный Word на каждый PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'По умолчанию: один Word, заголовок на PDF, необязательная картинка и абзацы OCR на страницу, затем разрыв. Один Word на каждый PDF: каждый удачный вход — свой .docx; несколько файлов качаются ZIP. Это не ZIP из TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2:
		'Файлы остаются на устройстве и на сервер не уходят. Скрипты грузятся с этого сайта.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'Рукопись, сильное размытие и сильная перспектива часто срываются на этой странице. Таблицы становятся строками в порядке чтения. Колонки исходный скан не копируют. Цифровой PDF с текстовым слоем здесь тоже растеризуется; если нужен только слой — «Превратить PDF в документ Word».',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'Без фото. Стопки JPG — на «Пакетно преобразовать JPG в редактируемый Word с помощью OCR». PDF с поиском по тексту не пишется, TXT не скачивается.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: 'Чего ожидать',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'Загрузить пример',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: 'Готово',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: 'В очереди',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: 'Читает',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: 'Рисует',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'Пропущено',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: 'В работе',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: 'Готово.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: 'Загрузка отрисовки PDF и OCR…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'Сборка Word…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'Пакетно преобразовать отсканированные PDF в Word с помощью OCR',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1:
		'Бросьте отсканированный PDF лекции и скачайте один Word, чтобы поправить заголовки.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2:
		'Сложите два отсканированных договора в один документ сверки с картинкой страницы над каждым блоком OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3:
		'Превратите многостраничный скан счёта в Word для коллеги (поля счёта здесь не извлекаются).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'Когда это к месту',
};

export default ru;
