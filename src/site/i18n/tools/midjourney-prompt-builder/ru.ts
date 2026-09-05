/**
 * i18n tool shard (midjourney-prompt-builder / ru).
 * Переписано под русские запросы: «генератор промптов для Midjourney», «как написать промпт Midjourney»,
 * «параметр --ar», «выгрузить промпт в JSON». Главный запрос — в H1, остальные — в описании, вопросах и примерах применения.
 * Фактические границы: по умолчанию текст собирается в браузере; только «Расширить»/«Отшлифовать» отправляют
 * черновик в Cloudflare Workers AI (нужен Turnstile, есть лимиты). Картинки здесь не создаются, Midjourney не вызывается.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Соберите промпт для Midjourney до того, как отправите его в работу: заполните объект, стиль, свет, соотношение сторон и параметры — страница сложит их в Markdown или JSON прямо в браузере, чтобы вы вставили результат в ChatGPT, Gemini, Claude или DeepSeek. Здесь получается только текст: изображения не создаются и Midjourney не вызывается. По умолчанию ничего не отправляется; черновик уходит в Cloudflare Workers AI лишь после нажатия «Расширить» или «Отшлифовать» и проверки Turnstile.',
	tool_midjourney_prompt_builder_build:
		'Собрать промпт',
	tool_midjourney_prompt_builder_clear:
		'Очистить',
	tool_midjourney_prompt_builder_copy:
		'Копировать',
	tool_midjourney_prompt_builder_desc:
		'Генератор промптов для Midjourney: заполните объект, стиль, свет и соотношение сторон — страница соберёт Markdown или JSON; ИИ Cloudflare по желанию, с Turnstile.',
	tool_midjourney_prompt_builder_description:
		'Генератор промптов для Midjourney: вы пишете объект, стиль, свет, соотношение сторон и параметры, а страница собирает строку, готовую к вставке: соотношение превращается в --ar, а если версия не указана, добавляется --v 6.1. По умолчанию Markdown, для собственных скриптов есть JSON; пример с самураем на мосту уже отработал при открытии. Не хватает деталей — «Расширить» или «Отшлифовать» отправит черновик в Cloudflare Workers AI (Turnstile и лимиты). Только текст: изображения здесь не создаются.',
	tool_midjourney_prompt_builder_download:
		'Скачать',
	tool_midjourney_prompt_builder_empty:
		'Заполните хотя бы одно поле, прежде чем собирать промпт.',
	tool_midjourney_prompt_builder_example:
		'Ввод: объект = самурай выхватывает меч на мосту, поросшем мхом, дождевая дымка, тории вдали; стиль = кинематографическая тушь, бирюзово-графитовая гамма, мелкое зерно; свет = контровой свет рассвета, объёмный туман; соотношение = 16:9; параметры = --v 6.1 --style raw --stylize 120 --chaos 8. Вывод (Markdown): в блоке ## Task стоит строка Midjourney с объектом, стилем и светом, а в конце — --ar 16:9. При переключении на JSON те же данные приходят полями.',
	tool_midjourney_prompt_builder_example_title:
		'Пример',
	tool_midjourney_prompt_builder_faq_a1:
		'Сборка идёт в этой вкладке браузера, поэтому по умолчанию ничего не отправляется. Текст уходит только при нажатии «Расширить» или «Отшлифовать» — и только в Cloudflare Workers AI; мы не пересылаем его со своих серверов в OpenAI, Google, Anthropic или DeepSeek.',
	tool_midjourney_prompt_builder_faq_a2:
		'В локальном режиме модели не задействованы: страница лишь раскладывает ваши поля по блокам Role, Task, Constraints и Output. «Расширить» и «Отшлифовать» работают через Cloudflare Workers AI после проверки Turnstile и не обращаются к API ChatGPT, Gemini, Claude или DeepSeek с наших серверов.',
	tool_midjourney_prompt_builder_faq_a3:
		'Генератор шаблонов промптов даёт универсальный каркас из четырёх блоков для любой темы. Здесь поля сразу мидджорниевские — объект, стиль, свет, соотношение, параметры, — плюс пример при открытии и таблица соответствий, которая нужна только этому случаю.',
	tool_midjourney_prompt_builder_faq_a4:
		'Turnstile отсекает автоматические скрипты, чтобы бесплатный лимит доставался людям. Пройдите проверку в блоке ИИ, прежде чем нажимать «Расширить» или «Отшлифовать»: без действующего токена эти кнопки выдают ошибку, а сборка в браузере продолжает работать.',
	tool_midjourney_prompt_builder_faq_a5:
		'Да. После переключения на JSON в том же поле вывода появляются структурированные поля и уже собранный текст промпта — можно отдать в скрипт для серии картинок, в тест или в конфиг.',
	tool_midjourney_prompt_builder_faq_a6:
		'Да. Скопируйте результат и вставьте в любой чат или прямо в Midjourney. Страница только приводит текст в порядок и не вызывает API, поэтому отдельного адреса под каждую платформу нет.',
	tool_midjourney_prompt_builder_faq_q1:
		'Уходит ли куда-нибудь то, что я ввожу?',
	tool_midjourney_prompt_builder_faq_q2:
		'Обращается ли страница к API ChatGPT или других моделей?',
	tool_midjourney_prompt_builder_faq_q3:
		'Чем это отличается от генератора шаблонов промптов?',
	tool_midjourney_prompt_builder_faq_q4:
		'Зачем нужен Turnstile, чтобы воспользоваться ИИ?',
	tool_midjourney_prompt_builder_faq_q5:
		'Можно получить вывод в JSON?',
	tool_midjourney_prompt_builder_faq_q6:
		'Подойдёт ли для ChatGPT, Gemini, Claude или DeepSeek?',
	tool_midjourney_prompt_builder_faq_q7:
		'В чём разница между локальным режимом и необязательным ИИ Cloudflare?',
	tool_midjourney_prompt_builder_faq_a7:
		'Локально всё собирается в этой вкладке и не покидает браузер. «Расширить» или «Отшлифовать» отправляет черновик в Cloudflare Workers AI (нужен Turnstile, есть ограничения по частоте и суточный лимит), а пришедший текст целиком записывается в поле вывода поверх черновика, который вы видели, — перечитайте его перед копированием. При сбое или исчерпанном лимите продолжайте в локальном режиме.',
	tool_midjourney_prompt_builder_ai_expand:
		'Расширить через ИИ',
	tool_midjourney_prompt_builder_ai_polish:
		'Отшлифовать через ИИ',
	tool_midjourney_prompt_builder_ai_panel_label:
		'По желанию: Cloudflare AI (нужен Turnstile)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'Отправить черновик в Cloudflare Workers AI?',
	tool_midjourney_prompt_builder_ai_consent_body:
		'Шаг необязательный: он отправляет черновик, который сейчас в полях, в Cloudflare Workers AI для одного прогона. Мы не пересылаем его со своих серверов в OpenAI, Google, Anthropic или DeepSeek. Без ИИ промпт по-прежнему собирается в вашем браузере.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'Продолжить',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'Отмена',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI обрабатывает…',
	tool_midjourney_prompt_builder_ai_done:
		'Текст от ИИ записан в поле вывода целиком. Перечитайте перед копированием.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'На этот раз ИИ не ответил; вывод остался прежним.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'Лимит ИИ исчерпан. Продолжайте собирать промпт здесь или попробуйте завтра (UTC).',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'Пройдите проверку Turnstile, прежде чем обращаться к ИИ.',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'Формат вывода',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'Объект',
	tool_midjourney_prompt_builder_subject_ph:
		'Например: самурай выхватывает меч на мосту…',
	tool_midjourney_prompt_builder_style_label:
		'Стиль',
	tool_midjourney_prompt_builder_style_ph:
		'Например: кинематографическая тушь, графитовая гамма…',
	tool_midjourney_prompt_builder_lighting_label:
		'Свет',
	tool_midjourney_prompt_builder_lighting_ph:
		'Например: контровой свет рассвета, туман…',
	tool_midjourney_prompt_builder_aspect_label:
		'Соотношение сторон',
	tool_midjourney_prompt_builder_aspect_ph:
		'Например 16:9, 9:16 или 1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'Параметры MJ',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'Например --v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Таблица соответствий параметров Midjourney',
	tool_midjourney_prompt_builder_rules_table_ar:
		'Соотношение → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'Версия → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'Указанное соотношение превращается в --ar в конце строки; если в параметрах нет версии, добавляется --v 6.1.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1, квадрат',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9, горизонтальный кадр',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16, вертикальный кадр',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'Версия MJ v6 по умолчанию',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'Заполните поля, соберите промпт и вставьте его в ChatGPT, Gemini, Claude или DeepSeek; если описания мало, воспользуйтесь необязательным ИИ Cloudflare — «Расширить» или «Отшлифовать».',
	tool_midjourney_prompt_builder_how_item_1:
		'Нажмите «Загрузить пример» для пресета по умолчанию.',
	tool_midjourney_prompt_builder_how_item_2:
		'Поменяйте объект, стиль, свет, соотношение и параметры и нажмите «Собрать промпт»; для выгрузки полями переключитесь на JSON.',
	tool_midjourney_prompt_builder_how_item_3:
		'По желанию: пройдите Turnstile в блоке ИИ и нажмите «Расширить» или «Отшлифовать» — пришедший текст попадёт в поле вывода.',
	tool_midjourney_prompt_builder_how_item_4:
		'Скопируйте или скачайте и вставьте в ChatGPT, Gemini, Claude или DeepSeek для доводки либо прямо в Midjourney.',
	tool_midjourney_prompt_builder_how_title:
		'Как этим пользоваться',
	tool_midjourney_prompt_builder_load_sample:
		'Загрузить пример',
	tool_midjourney_prompt_builder_platforms_lead:
		'Вывод можно вставить без правок в чат ChatGPT, Gemini, Claude или DeepSeek.',
	tool_midjourney_prompt_builder_result_label:
		'Готовый промпт',
	tool_midjourney_prompt_builder_rules_body:
		'Как переводятся параметры: соотношение сторон становится --ar, а без указанной версии добавляется --v 6.1. Сборка в браузере — поведение по умолчанию; необязательный ИИ ограничен по числу обращений и требует Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'Каждое поле формы попадает в один из блоков Markdown: Role, Task, Constraints или Output.',
	tool_midjourney_prompt_builder_rules_item_2:
		'По умолчанию выгружается Markdown; JSON — кнопка над тем же полем вывода.',
	tool_midjourney_prompt_builder_rules_item_3:
		'Необязательный ИИ — дополнительный шаг, а не замена: локальный режим доступен всегда, а текст от ИИ полностью перезаписывает вывод, поэтому перечитайте его перед копированием.',
	tool_midjourney_prompt_builder_rules_item_4:
		'Страница собирает только текст: она не создаёт изображения и не обращается ни к Midjourney, ни к чат-API.',
	tool_midjourney_prompt_builder_rules_title:
		'Что она делает, а что нет',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'Скопировано в буфер обмена.',
	tool_midjourney_prompt_builder_status_done:
		'Промпт готов.',
	tool_midjourney_prompt_builder_status_working:
		'Собираем промпт…',
	tool_midjourney_prompt_builder_title:
		'Генератор промптов для Midjourney — сборка в браузере, ИИ по желанию',
	tool_midjourney_prompt_builder_usecase_1:
		'Передать команде готовый промпт для Midjourney, который вставляется в чат целиком, вместо диктовки параметров по сообщениям.',
	tool_midjourney_prompt_builder_usecase_2:
		'Перед серией генераций выгрузить JSON и сохранить объект, стиль и соотношение сторон как поля в своём скрипте или таблице.',
	tool_midjourney_prompt_builder_usecase_3:
		'Если нужен универсальный каркас из четырёх блоков, а не картинка, возьмите генератор шаблонов промптов.',
	tool_midjourney_prompt_builder_usecase_4:
		'С черновиками по ещё непубличному проекту оставайтесь в локальном режиме: текст покинет браузер только после вашего согласия в окне про ИИ.',
	tool_midjourney_prompt_builder_usecases_title:
		'Когда это пригодится',
};

export default ru;
