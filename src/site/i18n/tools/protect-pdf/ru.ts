/**
 * i18n tool shard (protect-pdf / ru). Независимый текст под русский поиск.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_protect_pdf_article:
    'Защитите PDF паролем в браузере перед отправкой конфиденциальных вложений. Файл остаётся на устройстве, без загрузки на сервер.',
  tool_protect_pdf_choose_file: 'Выбрать PDF',
  tool_protect_pdf_clear: 'Очистить',
  tool_protect_pdf_confirm_label: 'Подтвердите пароль',
  tool_protect_pdf_desc: 'Добавьте пароль открытия PDF на устройстве — без загрузки на сервер.',
  tool_protect_pdf_description:
    'Защитите PDF паролем в браузере перед отправкой — на сервер ничего не уходит. Шаги: выберите PDF, введите и подтвердите пароль (пустой отклоняется), нажмите Защитить и скачайте protected.pdf. Пример: одностраничный образец шифруется паролем sample и готов к скачиванию. Обычное пользовательское шифрование PDF, не военного уровня; для открытия нужен тот же пароль (позже — инструмент снятия пароля; мы не взламываем). Файлы ~25 МБ могут тормозить.',
  tool_protect_pdf_download: 'Скачать',
  tool_protect_pdf_drop_hint: 'Или перетащите PDF сюда. Обработка во вкладке.',
  tool_protect_pdf_empty: 'Сначала выберите PDF.',
  tool_protect_pdf_err_encrypted: 'PDF уже защищён. Снимите пароль известным способом и защитите снова.',
  tool_protect_pdf_err_load: 'Не удалось прочитать PDF (повреждён или не поддерживается). Попробуйте другой файл.',
  tool_protect_pdf_err_password_empty: 'Введите пароль — пустой не допускается.',
  tool_protect_pdf_err_password_mismatch: 'Пароли не совпадают. Введите заново.',
  tool_protect_pdf_err_protect: 'Шифрование не удалось. Проверьте файл и пароль.',
  tool_protect_pdf_example:
    'Образец создаёт одну страницу, шифрует паролем sample, включает скачивание protected.pdf и показывает пароль в статусе.',
  tool_protect_pdf_example_title: 'Защитить PDF паролем',
  tool_protect_pdf_faq_a1:
    'Нет. библиотека PDF работает во вкладке (скрипты могут грузиться с CDN). PDF не отправляется на наши серверы.',
  tool_protect_pdf_faq_a2:
    'Стандартное PDF-шифрование с паролем пользователя — для открытия нужен пароль. Не военный уровень; выберите надёжный запоминающийся пароль.',
  tool_protect_pdf_faq_a3:
    'Нужен тот же пароль, что задали здесь. Когда появится снятие пароля — используйте его; мы не взламываем пароли.',
  tool_protect_pdf_faq_a4: 'Уже зашифрованные PDF обычно не загружаются. Снимите старый пароль доверенным инструментом и защитите снова.',
  tool_protect_pdf_faq_q1: 'Загружается ли PDF на сервер?',
  tool_protect_pdf_faq_q2: 'Насколько сильно шифрование?',
  tool_protect_pdf_faq_q3: 'Как открыть файл позже?',
  tool_protect_pdf_faq_q4: 'А если PDF уже защищён?',
  tool_protect_pdf_how_body: 'Выберите PDF, дважды введите один пароль, Защитить и Скачать. Шифрование во вкладке после загрузки библиотеки PDF—без загрузки на сервер.',
  tool_protect_pdf_how_title: 'Как это работает',
  tool_protect_pdf_pages_label: 'Страниц',
  tool_protect_pdf_password_label: 'Пароль',
  tool_protect_pdf_protect: 'Защитить',
  tool_protect_pdf_rules_body: 'Правила пароля, объём шифрования, конфиденциальность и сбои.',
  tool_protect_pdf_rules_item_1: 'Пароль обязателен; подтверждение должно совпадать. Пустой отклоняется до шифрования.',
  tool_protect_pdf_rules_item_2: 'библиотека PDF ставит один пароль пользователя и владельца — нужен для открытия.',
  tool_protect_pdf_rules_item_3: 'Результат: зашифрованный PDF (protected.pdf). Уже защищённые входы — явная ошибка.',
  tool_protect_pdf_rules_item_4: 'Конфиденциальность: байты во вкладке; не военный уровень; предупреждение ~25 МБ; огромные файлы могут упасть.',
  tool_protect_pdf_rules_title: 'Ожидаемые правила',
  tool_protect_pdf_sample: 'Загрузить образец',
  tool_protect_pdf_stats_tpl: '{pages} стр. · зашифровано · {bytes}',
  tool_protect_pdf_status_done: 'Готово — нажмите Скачать для protected.pdf.',
  tool_protect_pdf_status_sample_pwd: 'Образец готов — пароль: «{pwd}». Скачайте protected.pdf для проверки.',
  tool_protect_pdf_status_working: 'Шифрование PDF…',
  tool_protect_pdf_title: 'Защитить PDF паролем',
  tool_protect_pdf_usecase_1: 'Офис: пароль открытия перед отправкой договора по почте.',
  tool_protect_pdf_usecase_2: 'Операции: заблокировать разовый отчёт перед порталом клиента.',
  tool_protect_pdf_usecase_3: 'Студенты: защитить скан работы паролем только для преподавателя.',
  tool_protect_pdf_usecases_title: 'Подходит для',
  tool_protect_pdf_warn_large: 'Файл больше ~25 МБ — шифрование может быть медленным или сорваться.',
  tool_protect_pdf_warn_pdflib: 'Не удалось загрузить библиотеку PDF. Проверьте сеть.',
};
export default ru;
