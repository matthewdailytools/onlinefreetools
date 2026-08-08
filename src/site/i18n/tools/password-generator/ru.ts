/**
 * i18n tool shard (password-generator / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_password_generator_article:
    'Создавайте случайные пароли из выбранных наборов символов через crypto.getRandomValues — для быстрых демо, временных аккаунтов или проверки правил длины/charset. Это не менеджер паролей и не гарантия стойкости.',
  tool_password_generator_charset_label: 'Наборы символов',
  tool_password_generator_clear: 'Очистить',
  tool_password_generator_copy: 'Копировать',
  tool_password_generator_copy_done: 'Скопировано',
  tool_password_generator_count_label: 'Количество (1–100)',
  tool_password_generator_desc:
    'Случайные пароли с настройкой длины и charset — локально через crypto.getRandomValues.',
  tool_password_generator_description:
    'Сгенерируйте случайные пароли в браузере. Шаги: задайте длину (8–128), отметьте заглавные/строчные/цифры/символы, при необходимости исключите неоднозначные, нажмите Сгенерировать, скопируйте. Пример: 16 символов с разным регистром, цифрами и символами. Только crypto.getRandomValues — не сохраняется и не загружается.',
  tool_password_generator_digits: 'Цифры',
  tool_password_generator_disclaimer:
    'Демо-генератор для удобства — не хранилище паролей. Для банка или основных аккаунтов используйте специализированный менеджер паролей. Пароли создаются локально и не сохраняются на наших серверах.',
  tool_password_generator_empty_charset: 'Включите хотя бы один набор символов (после исключений).',
  tool_password_generator_example:
    'Длина 16 со всеми наборами может выглядеть как `Xk9#mP2$vL4@nQ8!` — регистр, цифры и символы. Каждый клик — новая строка; Загрузить пример = длина 16 и всё включено.',
  tool_password_generator_example_title: 'Пример',
  tool_password_generator_exclude_ambiguous: 'Исключить неоднозначные (0 O I l 1)',
  tool_password_generator_faq_a1:
    'Нет. Генерация полностью в браузере. Мы не логируем, не храним и не передаём созданные здесь пароли.',
  tool_password_generator_faq_a2:
    'Случайность из crypto.getRandomValues (CSPRNG), не Math.random. Более длинные пароли с большим числом классов обычно устойчивее к угадыванию, но вкладка не обещает «невзламываемость» — следуйте политике организации и используйте менеджер для prod-секретов.',
  tool_password_generator_faq_a3:
    'Нет. Эта страница только создаёт новые случайные строки. Не может аудировать, взламывать или восстанавливать существующие пароли.',
  tool_password_generator_faq_a4:
    'Убирает визуально похожие символы (0/O, 1/l/I) для удобства чтения вслух или ввода — ценой чуть меньшего charset.',
  tool_password_generator_faq_a5:
    'До 100 паролей за клик, по одному на строку. Сгенерируйте снова для следующей партии.',
  tool_password_generator_faq_q1: 'Сохраняются или отправляются ли пароли на сервер?',
  tool_password_generator_faq_q2: 'Насколько сильны эти пароли?',
  tool_password_generator_faq_q3: 'Может ли инструмент взломать мой текущий пароль?',
  tool_password_generator_faq_q4: 'Что делает «исключить неоднозначные»?',
  tool_password_generator_faq_q5: 'Сколько паролей можно сгенерировать за раз?',
  tool_password_generator_generate: 'Сгенерировать',
  tool_password_generator_how_body:
    'Настройте длину, выберите классы символов, при необходимости исключите неоднозначные глифы, задайте количество и Сгенерировать. Каждый символ выбирается crypto.getRandomValues из объединённого пула. Скопируйте список — после ухода со страницы ничего не остаётся.',
  tool_password_generator_how_title: 'Как это работает',
  tool_password_generator_length_label: 'Длина',
  tool_password_generator_lower: 'Строчные',
  tool_password_generator_output_label: 'Пароли',
  tool_password_generator_rules_body:
    'Правила charset, источник случайности и честные ограничения — прочитайте перед использованием на реальном аккаунте.',
  tool_password_generator_rules_item_1:
    'Пулы: A–Z, a–z, 0–9 и набор символов по умолчанию. После переключений и исключения должен остаться хотя бы один пул.',
  tool_password_generator_rules_item_2:
    'Случайный индекс использует байты crypto.getRandomValues — никогда Math.random.',
  tool_password_generator_rules_item_3:
    'Не NIST-certified composition (без принудительного «по одному из каждого класса»). Включайте нужные наборы вручную.',
  tool_password_generator_rules_item_4:
    'Конфиденциальность: только локальная генерация; очищайте вывод на общих машинах.',
  tool_password_generator_rules_title: 'Правила, которые стоит знать',
  tool_password_generator_sample: 'Загрузить пример',
  tool_password_generator_symbols: 'Символы',
  tool_password_generator_title: 'Генератор случайных паролей — создавать пароли локально',
  tool_password_generator_upper: 'Заглавные',
  tool_password_generator_usecase_1: 'Разовый credential для staging-логина, который скоро смените.',
  tool_password_generator_usecase_2: 'Прототип форм регистрации с sample strong passwords для QA-скриптов.',
  tool_password_generator_usecase_3: 'Сравнить влияние длины и символов на читаемость перед обновлением политики команды.',
  tool_password_generator_usecases_title: 'Подходящие сценарии',
};
export default ru;
