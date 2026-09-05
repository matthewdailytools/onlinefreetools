/**
 * i18n tool shard (film-prompt-builder / ru).
 * Переписано под русские запросы: «генератор промптов для киносценария», «трёхактная структура»,
 * «поэпизодник», «выгрузить промпт в JSON». Главный запрос — в H1, остальные — в описании, вопросах и примерах применения.
 * Фактические границы: по умолчанию текст раскладывается в браузере; только «Расширить»/«Отшлифовать» отправляют
 * черновик в Cloudflare Workers AI (нужен Turnstile, есть лимиты). Сценарий за вас страница не пишет.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_film_prompt_builder_article:
		'Впишите логлайн, три акта, поэпизодник и линию героя — страница разложит их в браузере и вернёт промпт с внятной структурой в Markdown или JSON, готовый к вставке в ChatGPT, Gemini, Claude или DeepSeek, чтобы продолжать сценарий уже там. По умолчанию ничего не отправляется; черновик уходит в Cloudflare Workers AI только после нажатия «Расширить» или «Отшлифовать» и проверки Turnstile.',
	tool_film_prompt_builder_build:
		'Собрать промпт',
	tool_film_prompt_builder_clear:
		'Очистить',
	tool_film_prompt_builder_copy:
		'Копировать',
	tool_film_prompt_builder_desc:
		'Генератор промптов для киносценария: логлайн, три акта и поэпизодник раскладываются в Markdown или JSON прямо в браузере; ИИ Cloudflare по желанию, с Turnstile.',
	tool_film_prompt_builder_description:
		'Генератор промптов для киносценария: вы заполняете логлайн, акты с первого по третий, поэпизодник и линию героя, а страница распределяет их по блокам Role, Task, Constraints и Output, чтобы ChatGPT, Gemini, Claude или DeepSeek понимали, откуда продолжать. По умолчанию Markdown, для учёта версий есть JSON; пример про два фудтрака, которые 30 дней делят одну кухню, уже отработал при открытии. Если акт вышел скупым, «Расширить» или «Отшлифовать» отправит черновик в Cloudflare Workers AI (Turnstile и лимиты).',
	tool_film_prompt_builder_download:
		'Скачать',
	tool_film_prompt_builder_empty:
		'Заполните хотя бы одно поле, прежде чем собирать промпт.',
	tool_film_prompt_builder_example:
		'Ввод: логлайн = из-за ошибки в разрешении двум враждующим владельцам фудтраков приходится 30 дней делить одну кухню; акт II = успех на фестивале рушится, когда блогер приписывает рецепт не тем, и старая семейная ссора из-за специй выходит в соцсети; поэпизодник = шесть пронумерованных сцен; линия героя = гордость → работа вместе через силу → совладельцы, которые договариваются. Вывод (Markdown): блок ## Task перечисляет Logline, Act1–3, Scene / List и Character / Arc — то же, что показывает пример при открытии.',
	tool_film_prompt_builder_example_title:
		'Пример',
	tool_film_prompt_builder_faq_a1:
		'Раскладка идёт в этой вкладке браузера, поэтому по умолчанию ничего не отправляется. Текст уходит только при нажатии «Расширить» или «Отшлифовать» — и только в Cloudflare Workers AI; мы не пересылаем его со своих серверов в OpenAI, Google, Anthropic или DeepSeek.',
	tool_film_prompt_builder_faq_a2:
		'В локальном режиме модели не задействованы: логлайн, акты, поэпизодник и линия героя просто раскладываются по блокам Role, Task, Constraints и Output. «Расширить» и «Отшлифовать» работают через Cloudflare Workers AI после проверки Turnstile и не обращаются к API ChatGPT, Gemini, Claude или DeepSeek с наших серверов.',
	tool_film_prompt_builder_faq_a3:
		'Генератор шаблонов промптов даёт универсальный каркас из четырёх блоков для любой темы. Здесь поля полнометражные — логлайн, три акта, поэпизодник, линия героя, — с полным примером при открытии и правилами про типичные промахи именно в таких документах.',
	tool_film_prompt_builder_faq_a4:
		'Turnstile отсекает автоматические скрипты, чтобы бесплатный лимит доставался людям. Пройдите проверку в блоке ИИ, прежде чем нажимать «Расширить» или «Отшлифовать»: без действующего токена эти кнопки выдают ошибку, а сборка в браузере продолжает работать.',
	tool_film_prompt_builder_faq_a5:
		'Да. После переключения на JSON в том же поле вывода появляются структурированные поля и уже собранный текст промпта — удобно хранить каждую версию актов и поэпизодника в таблице или репозитории и потом сравнивать.',
	tool_film_prompt_builder_faq_a6:
		'Да. Скопируйте результат и вставьте в любой чат. Страница только упорядочивает структуру и не вызывает API, поэтому отдельного адреса под каждую платформу нет.',
	tool_film_prompt_builder_faq_q1:
		'Уходит ли куда-нибудь сценарный материал, который я ввожу?',
	tool_film_prompt_builder_faq_q2:
		'Обращается ли страница к API ChatGPT или других моделей?',
	tool_film_prompt_builder_faq_q3:
		'Чем это отличается от генератора шаблонов промптов?',
	tool_film_prompt_builder_faq_q4:
		'Зачем нужен Turnstile, чтобы воспользоваться ИИ?',
	tool_film_prompt_builder_faq_q5:
		'Можно получить вывод в JSON?',
	tool_film_prompt_builder_faq_q6:
		'Подойдёт ли для ChatGPT, Gemini, Claude или DeepSeek?',
	tool_film_prompt_builder_faq_q7:
		'В чём разница между локальным режимом и необязательным ИИ Cloudflare?',
	tool_film_prompt_builder_faq_a7:
		'Локально всё раскладывается в этой вкладке и не покидает браузер. «Расширить» или «Отшлифовать» отправляет черновик в Cloudflare Workers AI (нужен Turnstile, есть ограничения по частоте и суточный лимит), а пришедший текст целиком записывается в поле вывода поверх черновика, который вы видели, — прочитайте его перед копированием, чтобы переписанные акты случайно не заменили вашу версию. При сбое или исчерпанном лимите продолжайте в локальном режиме.',
	tool_film_prompt_builder_ai_expand:
		'Расширить через ИИ',
	tool_film_prompt_builder_ai_polish:
		'Отшлифовать через ИИ',
	tool_film_prompt_builder_ai_panel_label:
		'По желанию: Cloudflare AI (нужен Turnstile)',
	tool_film_prompt_builder_ai_consent_title:
		'Отправить черновик в Cloudflare Workers AI?',
	tool_film_prompt_builder_ai_consent_body:
		'Шаг необязательный: он отправляет черновик, который сейчас в полях, в Cloudflare Workers AI для одного прогона. Мы не пересылаем его со своих серверов в OpenAI, Google, Anthropic или DeepSeek. Без ИИ промпт по-прежнему собирается в вашем браузере.',
	tool_film_prompt_builder_ai_consent_ok:
		'Продолжить',
	tool_film_prompt_builder_ai_consent_cancel:
		'Отмена',
	tool_film_prompt_builder_ai_working:
		'Cloudflare AI обрабатывает…',
	tool_film_prompt_builder_ai_done:
		'Текст от ИИ записан в поле вывода целиком. Перечитайте перед копированием.',
	tool_film_prompt_builder_ai_err_generic:
		'На этот раз ИИ не ответил; вывод остался прежним.',
	tool_film_prompt_builder_ai_err_rate:
		'Лимит ИИ исчерпан. Продолжайте собирать промпт здесь или попробуйте завтра (UTC).',
	tool_film_prompt_builder_ai_err_turnstile:
		'Пройдите проверку Turnstile, прежде чем обращаться к ИИ.',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'Формат вывода',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'Логлайн',
	tool_film_prompt_builder_logline_ph:
		'Например: два враждующих фудтрака делят одну кухню…',
	tool_film_prompt_builder_act1_label:
		'Акт I',
	tool_film_prompt_builder_act1_ph:
		'Например: откуда конфликт и что вынуждает согласиться…',
	tool_film_prompt_builder_act2_label:
		'Акт II',
	tool_film_prompt_builder_act2_ph:
		'Например: короткий успех, а потом всё идёт вразнос…',
	tool_film_prompt_builder_act3_label:
		'Акт III',
	tool_film_prompt_builder_act3_ph:
		'Например: открытое столкновение и договорённость не бесплатно…',
	tool_film_prompt_builder_scene_list_label:
		'Поэпизодник',
	tool_film_prompt_builder_scene_list_ph:
		'Например: 1. Драка за место 2. Двойная проверка…',
	tool_film_prompt_builder_character_arc_label:
		'Линия героя',
	tool_film_prompt_builder_character_arc_ph:
		'Например: гордость → работа через силу → совладельцы…',

	tool_film_prompt_builder_how_body:
		'Заполните логлайн, акты и поэпизодник, соберите промпт и вставьте его в ChatGPT, Gemini, Claude или DeepSeek, чтобы писать дальше; если акт вышел сухим, воспользуйтесь необязательным ИИ Cloudflare — «Расширить» или «Отшлифовать».',
	tool_film_prompt_builder_how_item_1:
		'Нажмите «Загрузить пример» для пресета по умолчанию.',
	tool_film_prompt_builder_how_item_2:
		'Поменяйте логлайн, акты, поэпизодник и линию героя и нажмите «Собрать промпт»; для выгрузки полями переключитесь на JSON.',
	tool_film_prompt_builder_how_item_3:
		'По желанию: пройдите Turnstile в блоке ИИ и нажмите «Расширить» или «Отшлифовать» — пришедший текст попадёт в поле вывода.',
	tool_film_prompt_builder_how_item_4:
		'Скопируйте или скачайте и вставьте в ChatGPT, Gemini, Claude или DeepSeek, чтобы модель продолжила по этой структуре.',
	tool_film_prompt_builder_how_title:
		'Как этим пользоваться',
	tool_film_prompt_builder_load_sample:
		'Загрузить пример',
	tool_film_prompt_builder_platforms_lead:
		'Вывод можно вставить без правок в чат ChatGPT, Gemini, Claude или DeepSeek.',
	tool_film_prompt_builder_result_label:
		'Готовый промпт',
	tool_film_prompt_builder_rules_body:
		'Порядок повторяет работу над полным метром: логлайн задаёт направление, три акта — путь, поэпизодник нумерует сцены, линия героя объясняет перемену. Сборка в браузере — поведение по умолчанию; необязательный ИИ ограничен по числу обращений и требует Turnstile.',
	tool_film_prompt_builder_rules_item_1:
		'Каждое поле формы попадает в один из блоков Markdown: Role, Task, Constraints или Output.',
	tool_film_prompt_builder_rules_item_2:
		'По умолчанию выгружается Markdown; JSON — кнопка над тем же полем вывода.',
	tool_film_prompt_builder_rules_item_3:
		'Необязательный ИИ — дополнительный шаг, а не замена: локальный режим доступен всегда, а текст от ИИ полностью перезаписывает вывод, поэтому перечитайте его перед копированием.',
	tool_film_prompt_builder_rules_item_4:
		'Страница собирает только текст: она не пишет сценарий за вас и не запускает в вашем браузере ни модель, ни чат-API.',
	tool_film_prompt_builder_rules_title:
		'Что она делает, а что нет',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'Скопировано в буфер обмена.',
	tool_film_prompt_builder_status_done:
		'Промпт готов.',
	tool_film_prompt_builder_status_working:
		'Собираем промпт…',
	tool_film_prompt_builder_title:
		'Генератор промптов для киносценария — три акта и поэпизодник в браузере',
	tool_film_prompt_builder_usecase_1:
		'Перед обсуждением собрать три акта и поэпизодник в один промпт, который вставляется прямо в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_film_prompt_builder_usecase_2:
		'Выгрузить JSON и сохранить логлайн, акты и линию героя каждой версии как поля в таблице или репозитории, чтобы потом сравнить.',
	tool_film_prompt_builder_usecase_3:
		'Если нужен универсальный каркас из четырёх блоков, а не структура полного метра, возьмите генератор шаблонов промптов.',
	tool_film_prompt_builder_usecase_4:
		'По проекту, где договор ещё не подписан, оставайтесь в локальном режиме: текст покинет браузер только после вашего согласия в окне про ИИ.',
	tool_film_prompt_builder_usecases_title:
		'Когда это пригодится',
};

export default ru;
