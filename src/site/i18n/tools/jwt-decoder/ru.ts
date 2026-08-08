/**
 * i18n tool shard (jwt-decoder / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_jwt_decoder_article:
    'Декодируйте header и payload JWT локально в браузере: правила Base64url, время зарегистрированных claims и чёткая граница — без проверки подписи. Для отладки OAuth без отправки токена на сервер.',
  tool_jwt_decoder_claims_local: 'Локально',
  tool_jwt_decoder_claims_title: 'Время зарегистрированных claims',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'Очистить',
  tool_jwt_decoder_copy_done: 'Скопировано',
  tool_jwt_decoder_copy_header: 'Копировать header',
  tool_jwt_decoder_copy_payload: 'Копировать payload',
  tool_jwt_decoder_decode: 'Декодировать',
  tool_jwt_decoder_desc:
    'Декодирование header и payload JWT локально — без проверки подписи; вставка остаётся в браузере.',
  tool_jwt_decoder_description:
    'Вставьте JWT, чтобы прочитать header и payload в JSON в браузере — без проверки подписи. Шаги: вставить токен, декодировать, скопировать header или payload. Пример: образец показывает alg HS256 и iat 1516239022 в UTC и локальном времени. Токен не загружается.',
  tool_jwt_decoder_disclaimer:
    'Не проверено — инструмент только декодирует Base64url. Подпись не проверяется; не используйте для решений об авторизации.',
  tool_jwt_decoder_empty: 'Нечего копировать — сначала декодируйте JWT.',
  tool_jwt_decoder_error_base64_header: 'Header — недопустимый Base64url.',
  tool_jwt_decoder_error_base64_payload: 'Payload — недопустимый Base64url.',
  tool_jwt_decoder_error_json_header: 'После декодирования header не является допустимым JSON.',
  tool_jwt_decoder_error_json_payload: 'После декодирования payload не является допустимым JSON.',
  tool_jwt_decoder_error_segments:
    'JWT должен состоять ровно из трёх сегментов, разделённых точками (header.payload.signature).',
  tool_jwt_decoder_example:
    'Ввод: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header: {"alg":"HS256","typ":"JWT"}. Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022} с iat в UTC и локальном времени. Подпись показана как есть — не проверена.',
  tool_jwt_decoder_example_title: 'Пример',
  tool_jwt_decoder_faq_a1:
    'Нет. Декодирование лишь раскрывает Base64url в header и payload; проверка подписи требует ключ издателя — здесь намеренно не реализована.',
  tool_jwt_decoder_faq_a2:
    'Убедитесь, что вставлен полный токен с двумя точками и тремя сегментами. Лишние точки, обрезанная вставка или не-JWT строка дадут ошибку.',
  tool_jwt_decoder_faq_a3:
    'JWT использует Base64url: - вместо +, _ вместо /, часто без =. Обычный Base64 может ошибиться на URL-safe токенах.',
  tool_jwt_decoder_faq_a4:
    'exp, iat и nbf — секунды Unix UTC. Страница показывает UTC и ваше локальное время; сравните exp с текущим моментом для срока действия.',
  tool_jwt_decoder_faq_a5:
    'Нет. Разбиение, Base64url и JSON выполняются только во вкладке браузера.',
  tool_jwt_decoder_faq_q1: 'Проверяет ли страница подпись JWT?',
  tool_jwt_decoder_faq_q2: 'Почему ошибка числа сегментов?',
  tool_jwt_decoder_faq_q3: 'Чем Base64url отличается от обычного Base64?',
  tool_jwt_decoder_faq_q4: 'Как читать exp, iat или nbf?',
  tool_jwt_decoder_faq_q5: 'Загружается ли токен на сервер?',
  tool_jwt_decoder_header_label: 'Header (JSON)',
  tool_jwt_decoder_how_body:
    'Вставьте полный JWT (header.payload.signature). Страница делит по точкам, декодирует Base64url первых двух сегментов и форматирует JSON. Числовые exp, iat, nbf показывают UTC и локальное время. Сегмент подписи — только сырой текст, без проверки.',
  tool_jwt_decoder_how_title: 'Как это работает',
  tool_jwt_decoder_input_label: 'Ввод JWT',
  tool_jwt_decoder_input_placeholder: 'Вставьте access token или ID token…',
  tool_jwt_decoder_large_warn: 'Большой токен (>8 КБ). Декодирование может замедлиться — избегайте огромных JWE.',
  tool_jwt_decoder_payload_label: 'Payload (JSON)',
  tool_jwt_decoder_rules_body:
    'Что делает и не делает этот декодер: структура, Base64url, зарегистрированные claims и граница без проверки.',
  tool_jwt_decoder_rules_item_1:
    'Структура: подписанный JWT (компактный JWS) — три сегмента Base64url: header (alg, typ), payload (claims), signature (байты, не JSON).',
  tool_jwt_decoder_rules_item_2:
    'Base64url: -→+, _→/, дополнение padding до длины %4, затем atob и JSON.parse. Ошибки указывают header или payload.',
  tool_jwt_decoder_rules_item_3:
    'Зарегистрированные claims: exp, iat, nbf — секунды Unix UTC. Прочитать JSON ≠ доверять токену.',
  tool_jwt_decoder_rules_item_4:
    'Конфиденциальность: вставка локальна; без HMAC/RSA. Не авторизуйте в проде только по декодированному JSON.',
  tool_jwt_decoder_rules_title: 'Правила, которые стоит знать',
  tool_jwt_decoder_sample: 'Загрузить пример',
  tool_jwt_decoder_signature_label: 'Подпись (как есть, не проверена)',
  tool_jwt_decoder_title: 'JWT декодер — читать header и payload локально (без проверки подписи)',
  tool_jwt_decoder_usecase_1:
    'Отладка OAuth: проверьте sub, scope и exp access token перед настройкой API.',
  tool_jwt_decoder_usecase_2:
    'API-контракты: сверьте iss и aud ID token с документацией.',
  tool_jwt_decoder_usecase_3:
    'Обучение: как header, payload и signature составляют три сегмента JWS.',
  tool_jwt_decoder_usecases_title: 'Когда подходит',
};
export default ru;
