/**
 * i18n tool shard (file-hash / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_file_hash_algo_label: 'Алгоритмы',
  tool_file_hash_article:
    'Вычисляйте hex-дайджесты MD5 и SHA для вставленного текста или локального файла. Сравнивайте checksum релизов, отпечатки конфигов или проверяйте загрузки — хеширование в браузере, кроме разовой загрузки с этого сайта при выборе MD5.',
  tool_file_hash_clear: 'Очистить',
  tool_file_hash_copy: 'Копировать всё',
  tool_file_hash_copy_done: 'Скопировано',
  tool_file_hash_desc:
    'Хеш текста или файлов локально — hex-дайджесты MD5, SHA-1, SHA-256, SHA-384, SHA-512.',
  tool_file_hash_description:
    'Вычислите хеш вставленного текста или локального файла в браузере. Шаги: выберите Текст или Файл, отметьте MD5/SHA, нажмите Хеш, скопируйте hex в нижнем регистре. Пример: текст `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. Файлы читаются локально; MD5 загружает crypto-js с этого сайта только при выборе.',
  tool_file_hash_empty: 'Сначала вставьте текст или выберите файл.',
  tool_file_hash_example:
    'Текст `hello` с SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. MD5 той же строки → `5d41402abc4b2a76b9719d911017c592`. Текст — байты UTF-8; файлы — сырые байты.',
  tool_file_hash_example_title: 'Пример',
  tool_file_hash_faq_a1:
    'MD5 быстрый и ещё встречается в устаревших checksum (старые списки `md5sum`, некоторые ETag CDN). Для безопасности (подписи, пароли, защита от подмены) лучше SHA-256 или SHA-512. SHA-1 снят с сертификатов, но может быть в старых артефактах.',
  tool_file_hash_faq_a2:
    'Большие файлы читаются блоками с индикатором прогресса. Свыше ~100 МБ — предупреждение, но мы всё равно пробуем. Очень большие файлы могут тормозить или исчерпать память — для multi-GB архивов используйте desktop-утилиту.',
  tool_file_hash_faq_a3:
    'Текст хешируется как байты UTF-8. Файл — как сырой поток байтов. Те же буквы в `.txt` могут отличаться от вставки при другой кодировке или переводах строк.',
  tool_file_hash_faq_a4:
    'Без загрузки. Текст и файлы остаются на устройстве. SHA-* использует Web Crypto. Только MD5 подгружает crypto-js с этого сайта — содержимое третьим лицам не отправляется.',
  tool_file_hash_faq_a5:
    'Выводим hex в нижнем регистре без префикса `0x`, по строке на алгоритм. Как в типичных `md5sum` / `sha256sum` на Linux и macOS.',
  tool_file_hash_faq_q1: 'Когда MD5, а когда SHA-256?',
  tool_file_hash_faq_q2: 'Как обрабатываются большие файлы?',
  tool_file_hash_faq_q3: 'Вставленный текст хешируется как файл?',
  tool_file_hash_faq_q4: 'Загружается ли мой файл или текст?',
  tool_file_hash_faq_q5: 'Какой формат hex на выходе?',
  tool_file_hash_file_bytes: 'байт',
  tool_file_hash_file_label: 'Выбрать файл',
  tool_file_hash_hash: 'Хеш',
  tool_file_hash_how_body:
    'Выберите Текст для вставки (байты UTF-8) или Файл для локального файла (сырые байты). Отметьте один или несколько алгоритмов и нажмите Хеш. SHA через Web Crypto; MD5 при первом использовании загружает небольшую библиотеку. Результат — hex в нижнем регистре, строка на алгоритм.',
  tool_file_hash_how_title: 'Как это работает',
  tool_file_hash_input_mode_label: 'Режим ввода',
  tool_file_hash_large_warn:
    'Файл больше 100 МБ. Хеширование может быть медленным или потреблять много памяти — для очень больших архивов рассмотрите desktop-инструмент.',
  tool_file_hash_md5_fail: 'Не удалось загрузить библиотеку MD5 с этого сайта. Попробуйте SHA-256 или проверьте сеть.',
  tool_file_hash_no_algo: 'Выберите хотя бы один алгоритм.',
  tool_file_hash_output_label: 'Hex-дайджесты',
  tool_file_hash_progress_label: 'Чтение файла…',
  tool_file_hash_rules_body:
    'Выбор алгоритма, семантика байтов и формат вывода — что ожидать перед сравнением digest в другом месте.',
  tool_file_hash_rules_item_1:
    'MD5 → 32 hex (128 бит). SHA-1 → 40 hex. SHA-256 → 64 hex. SHA-384 → 96 hex. SHA-512 → 128 hex. Всё в нижнем регистре, без префикса.',
  tool_file_hash_rules_item_2:
    'Режим текста: UTF-8 через `TextEncoder`. Режим файла: весь поток байтов. UTF-8 BOM или CRLF в файле меняют digest относительно простой вставки.',
  tool_file_hash_rules_item_3:
    'Пустой текст или файл нулевого размера даёт стандартный digest пустого ввода для каждого алгоритма (валидный hex).',
  tool_file_hash_rules_item_4:
    'Конфиденциальность: без загрузки. MD5 — единственный путь с fetch crypto-js с этого сайта; SHA-* только встроенный Web Crypto.',
  tool_file_hash_rules_title: 'Правила, которые стоит знать',
  tool_file_hash_sample: 'Загрузить пример',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'Файл',
  tool_file_hash_tab_text: 'Текст',
  tool_file_hash_text_label: 'Ввод текста',
  tool_file_hash_text_placeholder: 'Вставьте текст для хеширования как UTF-8…',
  tool_file_hash_title: 'Проверка хеша файла — сверка дайджестов в браузере',
  tool_file_hash_usecase_1:
    'Релиз: сравните SHA-256 установщика со значением на странице загрузки.',
  tool_file_hash_usecase_2:
    'Конфиг: отпечаток JSON или фрагмента `.env` до и после деплоя.',
  tool_file_hash_usecase_3:
    'Legacy QA: проверьте, что старый MD5-манифест всё ещё совпадает с пересобранным артефактом.',
  tool_file_hash_usecases_title: 'Подходящие сценарии',
};
export default ru;
