/**
 * i18n tool shard (timezone-converter / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_timezone_converter_article:
    'Выберите момент в исходном поясе IANA и смотрите то же время в UTC, Нью‑Йорке, Лондоне, Токио и других отмеченных зонах. Для удалённых созвонов, логов и мировых часов — Intl в браузере, без отправки данных.',
  tool_timezone_converter_clear: 'Очистить',
  tool_timezone_converter_col_local: 'Локальные дата и время',
  tool_timezone_converter_col_offset: 'Смещение UTC',
  tool_timezone_converter_col_zone: 'Часовой пояс',
  tool_timezone_converter_compare_zones: 'Сравнить в этих поясах',
  tool_timezone_converter_convert: 'Конвертировать',
  tool_timezone_converter_desc:
    'Сравнение одного момента между поясами IANA с пояснениями DST — локально в браузере.',
  tool_timezone_converter_description:
    'Переведите дату и время из одного пояса IANA в несколько других в браузере. Процесс: введите локальное время, выберите исходный пояс, отметьте пояса сравнения, нажмите Конвертировать. Пример: 15.06.2026 14:30 Лос‑Анджелес → строки Нью‑Йорк, Лондон, Токио и UTC со смещением. Предупреждает о «дырах» DST; это не экспорт пакета встречи.',
  tool_timezone_converter_error_dst_gap:
    'Такого локального времени нет в исходном поясе (пропуск часа при переходе на летнее время). Выберите соседний час.',
  tool_timezone_converter_error_empty: 'Введите дату/время и отметьте хотя бы один пояс для сравнения.',
  tool_timezone_converter_error_invalid: 'Неверный формат. Используйте выбор даты или ГГГГ-ММ-ДДTЧЧ:ММ.',
  tool_timezone_converter_example:
    'Фиксированный пример при загрузке: 15.06.2026 14:30 America/Los_Angeles → UTC, Нью‑Йорк, Лондон, Токио с локальными часами и смещением UTC по правилам IANA на эту дату.',
  tool_timezone_converter_example_title: 'Пример',
  tool_timezone_converter_faq_a1:
    'Используются идентификаторы IANA вроде America/New_York и Asia/Tokyo — как в браузерах и на серверах. Аббревиатуры EST, JST двусмысленны; в календарях указывайте полное имя IANA.',
  tool_timezone_converter_faq_a2:
    'При начале летнего времени некоторые часы «пропадают» — показывается ошибка. При окончании одно локальное время может встретиться дважды; Intl выбирает одно смещение — проверяйте важные встречи вручную.',
  tool_timezone_converter_faq_a3:
    'Конвертеры Unix timestamp переводят epoch ↔ часы, часто в UTC. Здесь сохраняется именованный исходный пояс и несколько целей в таблице — для вопроса «сколько у них времени?».',
  tool_timezone_converter_faq_a4:
    'Нет. Это мгновенная таблица для личной справки. Не формирует общий пакет встречи, список участников или экспорт ICS.',
  tool_timezone_converter_faq_a5:
    'Да, всё локально: только встроенный Intl.DateTimeFormat; данные не отправляются.',
  tool_timezone_converter_faq_q1: 'Почему IANA, а не EST, PST или GMT?',
  tool_timezone_converter_faq_q2: 'Что происходит в дни смены летнего времени?',
  tool_timezone_converter_faq_q3: 'Чем отличается от конвертера Unix timestamp?',
  tool_timezone_converter_faq_q4: 'Можно ли здесь экспортировать пакет поясов для командной встречи?',
  tool_timezone_converter_faq_q5: 'Отправляются ли дата и время на сервер?',
  tool_timezone_converter_how_body:
    'Введите локальные дату и время и исходный пояс IANA. Отметьте пояса сравнения и нажмите Конвертировать. Таблица показывает локальные часы и смещение UTC одного и того же момента — расчёт Intl в браузере.',
  tool_timezone_converter_how_title: 'Как это работает',
  tool_timezone_converter_local_tz: 'ваш браузер',
  tool_timezone_converter_now: 'Сейчас',
  tool_timezone_converter_rules_body:
    'Правила IANA, поведение DST и границы по сравнению с epoch или экспортом встреч.',
  tool_timezone_converter_rules_item_1:
    'Пояса следуют базе IANA (tzdata). Смещения меняются с DST — таблица отражает введённую дату, а не фиксированную разницу с GMT.',
  tool_timezone_converter_rules_item_2:
    'Весенние «дыры»: несуществующий час → ошибка. Осенние перекрытия: дублирующееся время → Intl выбирает смещение; проверяйте пограничные случаи.',
  tool_timezone_converter_rules_item_3:
    'CST, IST и т.п. могут означать разные регионы. В API и cron используйте полное имя IANA.',
  tool_timezone_converter_rules_item_4:
    'Конфиденциальность: без отправки. Только сравнение — не планировщик встреч и не геолокация IP.',
  tool_timezone_converter_rules_title: 'Ожидаемые правила',
  tool_timezone_converter_sample: 'Загрузить пример',
  tool_timezone_converter_source_time: 'Исходные дата и время',
  tool_timezone_converter_source_tz: 'Исходный часовой пояс',
  tool_timezone_converter_title: 'Конвертер часовых поясов — сравнить один момент по миру',
  tool_timezone_converter_usecase_1:
    'Удалённая команда: «15:30 по Тихому» — сразу видите Нью‑Йорк, Лондон и Токио.',
  tool_timezone_converter_usecase_2:
    'Ops / логи: метка в часовом поясе Chicago — сравните с UTC и своим поясом без устного счёта.',
  tool_timezone_converter_usecase_3:
    'Поездка: прилёт в Дубай — параллельно смотрите Сидней и Лос‑Анджелес для звонков.',
  tool_timezone_converter_usecases_title: 'Когда уместно',
};
export default ru;
