/**
 * i18n tool shard (short-drama-prompt-generator / ru).
 * Переписано под русские запросы: «генератор промптов для короткой вертикальной драмы», «крючок»,
 * «клиффхэнгер», «формат 9:16», «выгрузить в JSON». Главный запрос — в H1; остальное — в описании, FAQ и сценариях.
 * Фактические границы: по умолчанию текст собирается в браузере; «Расширить»/«Отшлифовать» шлют черновик
 * в Cloudflare Workers AI (нужен Turnstile, есть лимиты). Видео страница не генерирует.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Укажите число и длину серий, крючок открытия, клиффхэнгер на конце каждой серии, вертикальный формат и жанр: страница разложит это в браузере и вернёт готовый промпт в Markdown или JSON — вставьте в ChatGPT, Gemini, Claude или DeepSeek и пишите серию за серией. По умолчанию ничего не отправляется; черновик уходит в Cloudflare Workers AI только после «Расширить» или «Отшлифовать» и проверки Turnstile. Здесь получается текст, не видео.',
	tool_short_drama_prompt_generator_build:
		'Собрать промпт',
	tool_short_drama_prompt_generator_clear:
		'Очистить',
	tool_short_drama_prompt_generator_copy:
		'Копировать',
	tool_short_drama_prompt_generator_desc:
		'Генератор промптов для короткой вертикальной драмы: серии, крючок, клиффхэнгер и формат 9:16 раскладываются в Markdown или JSON в браузере; ИИ Cloudflare по желанию, с Turnstile.',
	tool_short_drama_prompt_generator_description:
		'Генератор промптов для короткой вертикальной драмы: заполните число и длину серий, крючок первых двух секунд, клиффхэнгер каждого финала, вертикальный формат и жанр — страница разложит их по блокам «Роль / Задача / Ограничения / Формат вывода», чтобы ChatGPT, Gemini, Claude или DeepSeek писали в ритме глав. По умолчанию Markdown, JSON — для таблицы серий. Если крючок слабый, «Расширить» или «Отшлифовать» отправит черновик в Cloudflare Workers AI (Turnstile, лимиты). Пример: нажмите «Загрузить пример» для пресета, затем соберите или при желании Expand/Polish.',
	tool_short_drama_prompt_generator_download:
		'Скачать',
	tool_short_drama_prompt_generator_empty:
		'Заполните хотя бы одно поле, прежде чем собирать промпт.',
	tool_short_drama_prompt_generator_example:
		'Ввод: серии = 12 × 75 с; крючок = стажёрка раскрывает утечку зарплат, а директор узнаёт её голос в десятилетнем голосовом про опеку; клиффхэнгер = 6-я серия обрывается на том, что директор стирает сообщение на середине, 7-я начинается с молчаливого взгляда в лифте; формат = 9:16, вшитые субтитры, старт, который останавливает палец за две секунды. Вывод (Markdown): блок ## Задача перечисляет серии, крючок, клиффхэнгер, вертикальный формат и жанр.',
	tool_short_drama_prompt_generator_example_title:
		'Пример',
	tool_short_drama_prompt_generator_faq_a1:
		'Сборка идёт в этой вкладке, поэтому по умолчанию ничего не уходит. Текст отправляется только при «Расширить» или «Отшлифовать» — и только в Cloudflare Workers AI; мы не пересылаем его со своих серверов в OpenAI, Google, Anthropic или DeepSeek.',
	tool_short_drama_prompt_generator_faq_a2:
		'В локальном режиме модели не вызываются: серии, крючок, клиффхэнгер, формат и жанр просто раскладываются по блокам. «Расширить» и «Отшлифовать» работают через Cloudflare Workers AI после Turnstile и не обращаются к API ChatGPT, Gemini, Claude или DeepSeek с наших серверов.',
	tool_short_drama_prompt_generator_faq_a3:
		'Генератор шаблонов промптов даёт универсальные четыре блока на любую тему. Здесь поля заточены под короткую вертикальную драму — серии, крючок, клиффхэнгер, формат 9:16 — со своим примером и правилами ритма binge.',
	tool_short_drama_prompt_generator_faq_a4:
		'Да. Пройдите Turnstile в блоке ИИ, прежде чем нажимать «Расширить» или «Отшлифовать». Без токена эти кнопки покажут ошибку, а локальная сборка продолжит работать.',
	tool_short_drama_prompt_generator_faq_a5:
		'Да. Переключитесь на JSON — в том же поле появятся структурированные поля и уже собранный текст промпта: удобно вести таблицу серий и проверять, не повторяются ли крючки и клиффхэнгеры.',
	tool_short_drama_prompt_generator_faq_a6:
		'Да. Скопируйте готовый промпт и вставьте в ChatGPT, Gemini, Claude или DeepSeek. Отдельных URL под каждую платформу нет: задача — оформить текст, а не вызывать API.',
	tool_short_drama_prompt_generator_faq_q1:
		'Уходит ли мой промпт на сервер?',
	tool_short_drama_prompt_generator_faq_q2:
		'Вызывает ли страница API ChatGPT или других моделей?',
	tool_short_drama_prompt_generator_faq_q3:
		'Чем это отличается от генератора шаблонов промптов?',
	tool_short_drama_prompt_generator_faq_q4:
		'Зачем нужен Turnstile для необязательного ИИ?',
	tool_short_drama_prompt_generator_faq_q5:
		'Можно ли получить вывод в JSON?',
	tool_short_drama_prompt_generator_faq_q6:
		'Подойдёт ли для ChatGPT, Gemini, Claude или DeepSeek?',
	tool_short_drama_prompt_generator_faq_q7:
		'В чём разница между локальным режимом и необязательным ИИ Cloudflare?',
	tool_short_drama_prompt_generator_faq_a7:
		'Локально всё раскладывается в этой вкладке и никуда не уходит. «Расширить» или «Отшлифовать» шлёт черновик в Cloudflare Workers AI (Turnstile, лимиты); при сбое или исчерпанном лимите продолжайте локально.',
	tool_short_drama_prompt_generator_ai_expand:
		'Расширить через ИИ',
	tool_short_drama_prompt_generator_ai_polish:
		'Отшлифовать через ИИ',
	tool_short_drama_prompt_generator_ai_panel_label:
		'По желанию: Cloudflare AI (нужен Turnstile)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'Отправить черновик в Cloudflare Workers AI?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'Необязательный шаг: текущий черновик уходит в Cloudflare Workers AI. Мы не пересылаем его со своих серверов в OpenAI, Google, Anthropic или DeepSeek. Без ИИ промпт по-прежнему собирается в браузере.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Продолжить',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Отмена',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI обрабатывает…',
	tool_short_drama_prompt_generator_ai_done:
		'Текст от ИИ записан в вывод. Перечитайте перед копированием.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'ИИ не ответил; локальный промпт не изменился.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'Лимит ИИ исчерпан. Собирайте локально или попробуйте завтра (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Пройдите Turnstile, прежде чем обращаться к ИИ.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'Формат вывода',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Серии и длина',
	tool_short_drama_prompt_generator_episodes_ph:
		'Например: 12 серий × 75 с…',
	tool_short_drama_prompt_generator_hook_label:
		'Крючок открытия',
	tool_short_drama_prompt_generator_hook_ph:
		'Например: стажёрка раскрывает утечку зарплат…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Клиффхэнгер серии',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Например: 6-я серия обрывается на удалении сообщения…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Вертикальный формат',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Например: 9:16, вшитые субтитры, старт за 2 с…',
	tool_short_drama_prompt_generator_genre_label:
		'Жанр',
	tool_short_drama_prompt_generator_genre_ph:
		'Например: офисная драма с семейным секретом…',
	tool_short_drama_prompt_generator_how_body:
		'Заполните серии, крючок и клиффхэнгер, соберите промпт и вставьте в ChatGPT, Gemini, Claude или DeepSeek, чтобы писать главу за главой; слабый крючок можно доработать необязательным ИИ Cloudflare.',
	tool_short_drama_prompt_generator_how_item_1:
		'Нажмите «Загрузить пример» для пресета по умолчанию.',
	tool_short_drama_prompt_generator_how_item_2:
		'Измените серии и длину, крючок, клиффхэнгер, вертикальный формат и жанр и нажмите «Собрать промпт»; для структурированного экспорта переключитесь на JSON.',
	tool_short_drama_prompt_generator_how_item_3:
		'По желанию: пройдите Turnstile в блоке ИИ и нажмите «Расширить» или «Отшлифовать» — ответ попадёт в поле вывода.',
	tool_short_drama_prompt_generator_how_item_4:
		'Скопируйте или скачайте и вставьте в ChatGPT, Gemini, Claude или DeepSeek, чтобы модель продолжила в этом ритме серий.',
	tool_short_drama_prompt_generator_how_title:
		'Как этим пользоваться',
	tool_short_drama_prompt_generator_load_sample:
		'Загрузить пример',
	tool_short_drama_prompt_generator_platforms_lead:
		'Вывод можно вставить без правок в чат ChatGPT, Gemini, Claude или DeepSeek.',
	tool_short_drama_prompt_generator_result_label:
		'Готовый промпт',
	tool_short_drama_prompt_generator_rules_body:
		'Структура под вертикальный binge: число и длина серий задают ёмкость, крючок решает, остановится ли палец в первые две секунды, клиффхэнгер тянет к следующей серии, формат фиксирует кадр и субтитры. Сборка в браузере — по умолчанию; необязательный ИИ ограничен и требует Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'Каждое поле формы попадает в один из блоков Markdown: Роль, Задача, Ограничения или Формат вывода.',
	tool_short_drama_prompt_generator_rules_item_2:
		'По умолчанию выгружается Markdown; JSON — кнопка над тем же полем вывода.',
	tool_short_drama_prompt_generator_rules_item_3:
		'Необязательный ИИ — дополнительный шаг, а не замена: локальный режим всегда доступен, текст от ИИ полностью перезаписывает вывод — перечитайте перед копированием.',
	tool_short_drama_prompt_generator_rules_item_4:
		'Страница собирает только текст: не генерирует видео и не запускает в браузере модель или чат-API.',
	tool_short_drama_prompt_generator_rules_title:
		'Что она делает, а что нет',
	tool_short_drama_prompt_generator_sec_constraints:
		'Ограничения',
	tool_short_drama_prompt_generator_sec_output:
		'Формат вывода',
	tool_short_drama_prompt_generator_sec_role:
		'Роль',
	tool_short_drama_prompt_generator_sec_task:
		'Задача',
	tool_short_drama_prompt_generator_status_copied:
		'Скопировано в буфер обмена.',
	tool_short_drama_prompt_generator_status_done:
		'Промпт готов.',
	tool_short_drama_prompt_generator_status_working:
		'Собираем промпт…',
	tool_short_drama_prompt_generator_title:
		'Генератор промптов для короткой вертикальной драмы — крючки и клиффхэнгеры в браузере',
	tool_short_drama_prompt_generator_usecase_1:
		'Перед совещанием собрать серии, крючок и клиффхэнгеры в один промпт и вставить прямо в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'Выгрузить JSON и сохранить крючок и клиффхэнгер каждой серии полями в таблице, чтобы ловить повторяющиеся приёмы.',
	tool_short_drama_prompt_generator_usecase_3:
		'Если нужен универсальный каркас из четырёх блоков, а не поля вертикальной серии — возьмите генератор шаблонов промптов.',
	tool_short_drama_prompt_generator_usecase_4:
		'По ещё не вышедшему проекту оставайтесь в локальном режиме: текст покинет браузер только после согласия в окне про ИИ.',
	tool_short_drama_prompt_generator_usecases_title:
		'Когда это пригодится',
};

export default ru;
