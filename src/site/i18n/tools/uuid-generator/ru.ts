/**
 * i18n tool shard (uuid-generator / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_uuid_generator_article:
    'Генерируйте UUID v4 или ULID локально с криптостойкой случайностью. Пакетное копирование для тестовых данных, trace id или заглушек схемы — без загрузки.',
  tool_uuid_generator_clear: 'Очистить',
  tool_uuid_generator_copy_all: 'Копировать все',
  tool_uuid_generator_copy_done: 'Скопировано',
  tool_uuid_generator_count_label: 'Количество (1–100)',
  tool_uuid_generator_desc: 'UUID v4 и ULID локально — до 100 штук, копирование в один клик.',
  tool_uuid_generator_description:
    'Создайте строки UUID v4 или ULID в браузере. Шаги: выберите тип, задайте количество (1–100), нажмите Сгенерировать, скопируйте всё. Пример: три UUID v4 в стиле RFC, например `550e8400-e29b-41d4-a716-446655440000`. Используется crypto.getRandomValues — ID не покидают устройство.',
  tool_uuid_generator_example:
    'UUID v4 (строчные, с дефисами): `550e8400-e29b-41d4-a716-446655440000`. ULID (26 символов Crockford Base32, сортируемый префикс): `01ARZ3NDEKTSV4RRFFQ69G5FAV`. Загрузить пример заполняет три фиксированных v4 для проверки формата.',
  tool_uuid_generator_example_title: 'Пример',
  tool_uuid_generator_faq_a1:
    'UUID v4 — 128 случайных бит (фиксированный nibble версии), подходит для непрозрачных ID. ULID добавляет префикс timestamp в мс и сортируется лексикографически по времени создания — удобно для логов и БД с временными ключами без последовательного числа.',
  tool_uuid_generator_faq_a2:
    'Глобальную уникальность не гарантируем. ID используют crypto.getRandomValues (или randomUUID). Непредсказуемы на практике, но приложение должно обрабатывать коллизии при необходимости.',
  tool_uuid_generator_faq_a3:
    'Пакет ограничен 100 за клик для отзывчивости страницы. Нажмите Сгенерировать снова для следующей порции.',
  tool_uuid_generator_faq_a4:
    'Без загрузки и без серверной генерации. Всё в вкладке браузера.',
  tool_uuid_generator_faq_a5:
    'UUID v4: 36 символов с дефисами, hex в нижнем регистре. ULID: 26 символов Crockford Base32 в верхнем регистре, без дефисов.',
  tool_uuid_generator_faq_q1: 'UUID v4 или ULID — что выбрать?',
  tool_uuid_generator_faq_q2: 'Насколько ID криптостойки?',
  tool_uuid_generator_faq_q3: 'Почему пакет ограничен 100?',
  tool_uuid_generator_faq_q4: 'Покидают ли ID браузер?',
  tool_uuid_generator_faq_q5: 'Какой формат вывода?',
  tool_uuid_generator_generate: 'Сгенерировать',
  tool_uuid_generator_how_body:
    'Выберите UUID v4 для стандартных случайных UUID или ULID для 26-символьных ID с сортировкой по времени. Задайте количество (1–100) и Сгенерировать. Копировать все — по одному ID на строку. Случайные байты из CSPRNG браузера.',
  tool_uuid_generator_how_title: 'Как это работает',
  tool_uuid_generator_output_label: 'Сгенерированные ID',
  tool_uuid_generator_rules_body:
    'Различия форматов и практические ограничения при вставке ID в код или БД.',
  tool_uuid_generator_rules_item_1:
    'UUID v4 по RFC 4122: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` с variant bits; hex в нижнем регистре.',
  tool_uuid_generator_rules_item_2:
    'ULID упаковывает 48-битный Unix ms timestamp + 80 случайных бит в 26 символов Crockford Base32 (без I/L/O/U).',
  tool_uuid_generator_rules_item_3:
    'Инструмент не гарантирует уникальность между машинами и во времени — это сильные случайные образцы, а не распределённый ID-сервис.',
  tool_uuid_generator_rules_item_4:
    'Конфиденциальность: без сети для генерации; ID не покидают устройство, пока вы их не скопируете.',
  tool_uuid_generator_rules_title: 'Правила, которые стоит знать',
  tool_uuid_generator_sample: 'Загрузить пример',
  tool_uuid_generator_title: 'Генератор UUID и ULID — создавать ID в браузере',
  tool_uuid_generator_type_label: 'Тип ID',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: 'Заполнить dev-БД непрозрачными первичными ключами перед импортом fixtures.',
  tool_uuid_generator_usecase_2: 'Создать пакет trace или correlation id для интеграционных тестов.',
  tool_uuid_generator_usecase_3: 'Прототип API, принимающих сортируемые ULID-идентификаторы в теле запроса.',
  tool_uuid_generator_usecases_title: 'Подходящие сценарии',
};
export default ru;
