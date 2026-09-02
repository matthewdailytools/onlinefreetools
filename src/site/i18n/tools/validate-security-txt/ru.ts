/**
 * i18n tool shard (validate-security-txt / ru).
 * Сценарий: домен → загрузка security.txt → проверка полей RFC 9116.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_validate_security_txt_home_title: 'Проверить security.txt',
	tool_validate_security_txt_home_desc:
		'Проверьте, публикует ли сайт корректный security.txt с Contact и Expires.',
	tool_validate_security_txt_desc:
		'Проверьте, публикует ли сайт корректный security.txt с Contact и Expires.',
	tool_validate_security_txt_title: 'Проверить security.txt',
	tool_validate_security_txt_description:
		'Введите домен или URL для проверки security.txt: загружаем /.well-known/security.txt (запасной /security.txt), разбираем Contact и Expires, отмечаем отсутствующие обязательные поля. Пример: google.com.',
	tool_validate_security_txt_url_label: 'Домен или URL',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ или example.com',
	tool_validate_security_txt_check: 'Проверить',
	tool_validate_security_txt_sample: 'Пример',
	tool_validate_security_txt_clear: 'Очистить',
	tool_validate_security_txt_running: 'Загрузка security.txt…',
	tool_validate_security_txt_url_error: 'Введите домен или http(s) URL.',
	tool_validate_security_txt_error_prefix: 'Ошибка: ',
	tool_validate_security_txt_fetch_failed:
		'Не удалось загрузить security.txt. Хост может быть недоступен или блокировать ботов.',
	tool_validate_security_txt_privacy_note:
		'URL и имя хоста отправляются в Worker для загрузки security.txt. Мы не храним их как продуктовую базу.',
	tool_validate_security_txt_result_found_yes: 'security.txt найден',
	tool_validate_security_txt_result_found_no: 'security.txt не найден',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: 'Нет обязательных',
	tool_validate_security_txt_result_missing_none: 'Обязательные поля есть',
	tool_validate_security_txt_result_expired_yes: 'Expires уже прошёл',
	tool_validate_security_txt_result_expired_no: 'Expires ещё действителен (или не разобран)',
	tool_validate_security_txt_result_file_url: 'Загруженный URL',
	tool_validate_security_txt_result_http_status: 'HTTP-статус',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'Превью security.txt',
	tool_validate_security_txt_result_none: '(нет)',
	tool_validate_security_txt_how_title: 'Как это работает',
	tool_validate_security_txt_how_body:
		'Валидатор отвечает на один вопрос: публикует ли сайт discovery-файл с полезным Contact и осмысленным Expires?',
	tool_validate_security_txt_how_item_1: 'Введите домен или HTTPS URL.',
	tool_validate_security_txt_how_item_2:
		'Нажмите «Проверить»; Worker сначала пробует /.well-known/security.txt, затем /security.txt.',
	tool_validate_security_txt_how_item_3:
		'Посмотрите Contact, Expires, Preferred-Languages, Canonical и превью.',
	tool_validate_security_txt_how_item_4:
		'Исправьте отмеченные поля перед публикацией своего security.txt.',
	tool_validate_security_txt_formula_title: 'Правила полей RFC 9116',
	tool_validate_security_txt_formula_body:
		'Согласовано с RFC 9116 и обычной практикой securitytxt.org.',
	tool_validate_security_txt_formula_item_1:
		'Порядок: сначала /.well-known/security.txt, затем /security.txt.',
	tool_validate_security_txt_formula_item_2:
		'Contact обязателен; перечисляем значения и отмечаем отсутствие.',
	tool_validate_security_txt_formula_item_3:
		'Expires сильно ожидается; отсутствие или прошедшая дата — пробел.',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages и Canonical показываются при наличии; для чеклиста не обязательны.',
	tool_validate_security_txt_formula_item_5:
		'Только загрузка и разбор — не почтовый ящик уязвимостей и не пентест.',
	tool_validate_security_txt_example_title: 'Пример',
	tool_validate_security_txt_example:
		'Пример ввода https://www.google.com/. Worker пробует well-known и корень, затем показывает found, Contact, Expires, missingRequired, expired и превью.',
	tool_validate_security_txt_usecases_title: 'Когда полезно',
	tool_validate_security_txt_usecase_1:
		'Проверка security.txt перед релизом: отвечает ли well-known и есть ли Contact?',
	tool_validate_security_txt_usecase_2:
		'После правки Expires: убедиться, что дата читается и ещё не истекла.',
	tool_validate_security_txt_usecase_3:
		'Перед обращением к вендору: проверить, публикует ли он discovery-файл.',
	tool_validate_security_txt_faq_q1: 'Где должен лежать security.txt?',
	tool_validate_security_txt_faq_a1:
		'Предпочтительно /.well-known/security.txt. /security.txt на том же хосте — документированный запасной путь.',
	tool_validate_security_txt_faq_q2: 'Какие поля обязательны?',
	tool_validate_security_txt_faq_a2:
		'Как минимум Contact. Expires сильно ожидается по практике RFC 9116; пробелы отмечаем.',
	tool_validate_security_txt_faq_q3: 'H1 — это «RFC 9116»?',
	tool_validate_security_txt_faq_a3:
		'Нет. H1 — «Проверить security.txt». RFC в Правилах и Ссылках.',
	tool_validate_security_txt_faq_q4: 'Вы храните отчёты об уязвимостях?',
	tool_validate_security_txt_faq_a4:
		'Нет. Только загружаем и разбираем опубликованный файл. Мы не mailbox раскрытия.',
	tool_validate_security_txt_faq_q5: 'Сохраняется ли URL?',
	tool_validate_security_txt_faq_a5:
		'URL/хост должны дойти до Worker для загрузки. Проверки не храним как продуктовую БД. Это edge-инструмент, не «без загрузки».',
	tool_validate_security_txt_references: 'RFC 9116; securitytxt.org.',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default ru;
