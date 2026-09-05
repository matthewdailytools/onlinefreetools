/**
 * i18n tool shard (product-design-prompt-builder / ru).
 * Локальные запросы: «генератор промптов для продуктового дизайна», «промпт для UX-брифа». Главный запрос — в H1; второстепенные (персона, объём вайрфрейма, дизайн-токены, WCAG AA, выгрузка JSON) — в description, FAQ и сценариях.
 * Фактические границы: сборка в браузере без запросов; необязательные «Расширить/Отшлифовать» отправляют черновик в Cloudflare Workers AI (Turnstile, лимит), ответ полностью заменяет область результата.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'Здесь задача по продуктовому дизайну превращается в готовый к вставке промпт: опишите персону, проблему, объём вайрфрейма и дизайн-токены — страница соберёт текст в Markdown или JSON прямо в браузере. По умолчанию никаких запросов не уходит; черновик отправляется в Cloudflare Workers AI только после нажатия «Расширить» или «Отшлифовать» (нужен Turnstile, число обращений ограничено).',
	tool_product_design_prompt_builder_build:
		'Собрать промпт',
	tool_product_design_prompt_builder_clear:
		'Очистить',
	tool_product_design_prompt_builder_copy:
		'Копировать',
	tool_product_design_prompt_builder_desc:
		'Генератор промптов для продуктового дизайна: заполните персону, проблему, объём вайрфрейма и дизайн-токены — текст собирается в браузере в Markdown или JSON, ИИ по желанию.',
	tool_product_design_prompt_builder_description:
		'Генератор промптов для продуктового дизайна: опишите персону, проблему, объём вайрфрейма (сколько экранов и какие) и дизайн-токены (сетка, основной цвет, контраст) — страница разложит их по блокам Role / Task / Constraints / Output в Markdown или JSON, не выходя из браузера. Пример: «родители при совместной опеке, которым нужно видеть неделю передач» превращается в объём из трёх экранов с сеткой 8 pt и контрастом WCAG AA. Кнопка «Загрузить пример» заполняет поля и сразу собирает промпт; «Расширить» и «Отшлифовать» через Cloudflare Workers AI — по желанию (Turnstile, суточный лимит).',
	tool_product_design_prompt_builder_download:
		'Скачать',
	tool_product_design_prompt_builder_empty:
		'Заполните хотя бы одно поле перед сборкой.',
	tool_product_design_prompt_builder_example:
		'Ввод: Персона = родители при недельной совместной опеке, один планирует, другой забирает, устройства Android и iPhone вперемешку; Проблема = календари перегружены, нужно видеть неделю передач сразу и оставлять заметки, без обязательной привязки аккаунтов; Вайрфрейм = недельная полоса с легендой опеки, лист детали с чек-листом передачи, приглашение по SMS (3 экрана); Токены = сетка 8 pt, основной #2563eb, #059669 для подтверждённых передач, контраст WCAG AA в подписях. Вывод (Markdown): в ## Role описан UX-коуч по промптам для вайрфрейм-брифов, в ## Task — по строке на каждое поле.',
	tool_product_design_prompt_builder_example_title:
		'Пример',
	tool_product_design_prompt_builder_faq_a1:
		'По умолчанию нет. Заполнение полей и кнопка «Собрать промпт» работают только в этой вкладке, без запросов. Черновик уходит лишь при нажатии «Расширить» или «Отшлифовать», и адресат — Cloudflare Workers AI; с наших серверов текст не пересылается в OpenAI, Google, Anthropic или DeepSeek.',
	tool_product_design_prompt_builder_faq_a2:
		'Нет. Локальный режим просто раскладывает ваши поля по блокам Role / Task / Constraints / Output. Необязательный ИИ работает через Cloudflare Workers AI после Turnstile, а не через API ChatGPT, Gemini, Claude или DeepSeek.',
	tool_product_design_prompt_builder_faq_a3:
		'Конструктор шаблонов промптов даёт четыре универсальных блока Role / Task / Constraints / Output для любой темы. Здесь поля — как в UX-брифе: персона, проблема, сколько экранов охватывает вайрфрейм, какие дизайн-токены и контраст соблюдать, со своим примером и своими ограничениями.',
	tool_product_design_prompt_builder_faq_a4:
		'Да. Пройдите Turnstile в блоке ИИ прежде, чем нажать «Расширить» или «Отшлифовать». Без действительного токена кнопки ИИ вернут ошибку, а локальный режим продолжит работать.',
	tool_product_design_prompt_builder_faq_a5:
		'Да. Переключите формат вывода на JSON: получите поля по отдельности плюс собранный текст промпта — удобно сохранить в репозиторий требований или в шаблон дизайн-ревью.',
	tool_product_design_prompt_builder_faq_a6:
		'Да. Результат — обычный текст: скопируйте и вставьте в ChatGPT, Gemini, Claude или DeepSeek. Страница не вызывает эти API за вас.',
	tool_product_design_prompt_builder_faq_q1:
		'Загружается ли куда-нибудь то, что я ввожу?',
	tool_product_design_prompt_builder_faq_q2:
		'Обращается ли страница к API ChatGPT или других моделей?',
	tool_product_design_prompt_builder_faq_q3:
		'Чем это отличается от конструктора шаблонов промптов?',
	tool_product_design_prompt_builder_faq_q4:
		'Зачем необязательному ИИ нужен Turnstile?',
	tool_product_design_prompt_builder_faq_q5:
		'Можно выгрузить в JSON?',
	tool_product_design_prompt_builder_faq_q6:
		'Подходит для ChatGPT, Gemini, Claude и DeepSeek?',
	tool_product_design_prompt_builder_faq_q7:
		'Чем локальная сборка отличается от Cloudflare AI?',
	tool_product_design_prompt_builder_faq_a7:
		'Локальная сборка только раскладывает введённые поля: ни запросов, ни лимитов. «Расширить» и «Отшлифовать» отправляют черновик в Cloudflare Workers AI (нужен Turnstile, обращения ограничены), а полученный текст полностью заменяет область результата — прочитайте его перед копированием. При ошибке или исчерпанном лимите продолжайте локально.',
	tool_product_design_prompt_builder_ai_expand:
		'Расширить с ИИ',
	tool_product_design_prompt_builder_ai_polish:
		'Отшлифовать с ИИ',
	tool_product_design_prompt_builder_ai_panel_label:
		'Необязательный Cloudflare AI (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'Отправить черновик в Cloudflare Workers AI?',
	tool_product_design_prompt_builder_ai_consent_body:
		'Необязательный шаг: текущий черновик уйдёт в Cloudflare Workers AI для генерации. С наших серверов он не передаётся в OpenAI, Google, Anthropic или DeepSeek. Без ИИ сборка в браузере работает как обычно.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'Продолжить',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'Отмена',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI работает…',
	tool_product_design_prompt_builder_ai_done:
		'Текст ИИ заменил результат. Проверьте перед копированием.',
	tool_product_design_prompt_builder_ai_err_generic:
		'ИИ не сработал; результат остался прежним.',
	tool_product_design_prompt_builder_ai_err_rate:
		'Лимит ИИ исчерпан. Работайте локально или вернитесь завтра (UTC).',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'Сначала пройдите Turnstile, затем используйте ИИ.',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'Формат вывода',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'Персона / Профиль пользователя',
	tool_product_design_prompt_builder_persona_ph:
		'Напр.: родители при недельной совместной опеке…',
	tool_product_design_prompt_builder_problem_label:
		'Какую проблему решаем',
	tool_product_design_prompt_builder_problem_ph:
		'Напр.: календарь перегружен, нужна неделя одним взглядом…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'Вайрфрейм / Объём',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'Напр.: недельная полоса, лист детали, приглашение по SMS…',
	tool_product_design_prompt_builder_design_tokens_label:
		'Дизайн / Токены',
	tool_product_design_prompt_builder_design_tokens_ph:
		'Напр.: сетка 8 pt, основной #2563eb, WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'Заполните четыре поля — страница соберёт из них Markdown (или JSON) в браузере; если нужно подробнее, попросите Cloudflare AI расширить текст и только потом вставляйте промпт в чат.',
	tool_product_design_prompt_builder_how_item_1:
		'Нажмите «Загрузить пример»: поля заполнятся, промпт соберётся — правьте его под себя.',
	tool_product_design_prompt_builder_how_item_2:
		'Измените персону, проблему, объём вайрфрейма и дизайн-токены и нажмите «Собрать промпт»; для структурированного экспорта переключитесь на JSON.',
	tool_product_design_prompt_builder_how_item_3:
		'По желанию: пройдите Turnstile и нажмите «Расширить» или «Отшлифовать» — текст ИИ займёт область результата.',
	tool_product_design_prompt_builder_how_item_4:
		'Скопируйте или скачайте результат и вставьте его в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_product_design_prompt_builder_how_title:
		'Как пользоваться',
	tool_product_design_prompt_builder_load_sample:
		'Загрузить пример',
	tool_product_design_prompt_builder_platforms_lead:
		'Готовый промпт — обычный текст: он одинаково вставляется в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_product_design_prompt_builder_result_label:
		'Готовый промпт',
	tool_product_design_prompt_builder_rules_body:
		'Страница только приводит задачу в форму: она не рисует вайрфреймы и не выгружает файлы Figma. У необязательного ИИ есть лимит, и он требует Turnstile.',
	tool_product_design_prompt_builder_rules_item_1:
		'Каждое поле попадает в свой блок Markdown: Role, Task, Constraints, Output.',
	tool_product_design_prompt_builder_rules_item_2:
		'По умолчанию выводится Markdown; та же область по переключателю показывает JSON с полями и собранным промптом.',
	tool_product_design_prompt_builder_rules_item_3:
		'Cloudflare AI не заменяет локальную сборку: его ответ занимает всю область результата, поэтому проверяйте текст перед копированием.',
	tool_product_design_prompt_builder_rules_item_4:
		'Инструмент только собирает текст: он не рисует экраны, не читает ваши файлы макетов и не вызывает чат-API от вашего имени.',
	tool_product_design_prompt_builder_rules_title:
		'Границы, о которых стоит знать',
	tool_product_design_prompt_builder_sec_constraints:
		'Constraints',
	tool_product_design_prompt_builder_sec_output:
		'Output',
	tool_product_design_prompt_builder_sec_role:
		'Role',
	tool_product_design_prompt_builder_sec_task:
		'Task',
	tool_product_design_prompt_builder_status_copied:
		'Скопировано в буфер обмена.',
	tool_product_design_prompt_builder_status_done:
		'Промпт готов.',
	tool_product_design_prompt_builder_status_working:
		'Собираем промпт…',
	tool_product_design_prompt_builder_title:
		'Генератор промптов для продуктового дизайна — локально, ИИ по желанию',
	tool_product_design_prompt_builder_usecase_1:
		'Превратить цель дизайна, озвученную на встрече по требованиям, в промпт, который можно вставить в чат команды.',
	tool_product_design_prompt_builder_usecase_2:
		'Выгрузить JSON, сохранить персону и токены в репозиторий требований и при необходимости расширить текст через Cloudflare AI.',
	tool_product_design_prompt_builder_usecase_3:
		'Если поля UX не нужны и хватает универсального шаблона из четырёх блоков, переходите к конструктору шаблонов промптов.',
	tool_product_design_prompt_builder_usecase_4:
		'Сформулировать ещё не объявленную продуктовую идею в браузере и лишь потом решить, отправлять ли её в необязательный ИИ.',
	tool_product_design_prompt_builder_usecases_title:
		'Когда пригодится',
};

export default ru;
