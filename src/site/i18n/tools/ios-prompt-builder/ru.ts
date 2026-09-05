/**
 * i18n tool shard (ios-prompt-builder / ru).
 * Локальные запросы: «генератор промптов для iOS», «промпт для ChatGPT разработка iOS». Главный запрос — в H1; второстепенные (стек Swift, SwiftUI, HIG, VoiceOver, выгрузка JSON) — в description, FAQ и сценариях.
 * Фактические границы: сборка в браузере без запросов; необязательные «Расширить/Отшлифовать» отправляют черновик в Cloudflare Workers AI (Turnstile, лимит), ответ полностью заменяет область результата.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_ios_prompt_builder_article:
		'Здесь требование к iOS-приложению превращается в готовый к вставке промпт: опишите функцию, стек Swift, экран на SwiftUI и правила доступности из HIG — страница соберёт текст в Markdown или JSON прямо в браузере. По умолчанию никаких запросов не уходит; черновик отправляется в Cloudflare Workers AI только после нажатия «Расширить» или «Отшлифовать» (нужен Turnstile, число обращений ограничено).',
	tool_ios_prompt_builder_build:
		'Собрать промпт',
	tool_ios_prompt_builder_clear:
		'Очистить',
	tool_ios_prompt_builder_copy:
		'Копировать',
	tool_ios_prompt_builder_desc:
		'Генератор промптов для iOS: заполните функцию, стек Swift, экран на SwiftUI и правила HIG — текст собирается в браузере в Markdown или JSON, ИИ по желанию.',
	tool_ios_prompt_builder_description:
		'Генератор промптов для iOS: укажите функцию, стек (Swift 5.10, SwiftUI, iOS 17+, SwiftData), экран и правила доступности из HIG — страница разложит их по блокам Role / Task / Constraints / Output в Markdown или JSON, не выходя из браузера. Пример: «недельный тренд шагов из HealthKit и полоса пульса покоя» выходит с Dynamic Type до XXL и подписями VoiceOver на точках графика. Кнопка «Загрузить пример» заполняет поля и сразу собирает промпт; «Расширить» и «Отшлифовать» через Cloudflare Workers AI — по желанию (Turnstile, суточный лимит).',
	tool_ios_prompt_builder_download:
		'Скачать',
	tool_ios_prompt_builder_empty:
		'Заполните хотя бы одно поле перед сборкой.',
	tool_ios_prompt_builder_example:
		'Ввод: Функция = недельный тренд шагов из HealthKit и полоса пульса покоя, разрешения объясняются простыми словами; Стек = Swift 5.10, SwiftUI, iOS 17+, async/await, кеш на SwiftData; Экран = NavigationStack и Charts, лист разрешений до первого запроса; HIG = Dynamic Type до XXL, подписи VoiceOver на точках графика, без force-unwrap. Вывод (Markdown): в ## Role описана роль опытной iOS-разработчицы, в ## Task — по строке на каждое поле.',
	tool_ios_prompt_builder_example_title:
		'Пример',
	tool_ios_prompt_builder_faq_a1:
		'По умолчанию нет. Заполнение полей и кнопка «Собрать промпт» работают только в этой вкладке, без запросов. Черновик уходит лишь при нажатии «Расширить» или «Отшлифовать», и адресат — Cloudflare Workers AI; с наших серверов текст не пересылается в OpenAI, Google, Anthropic или DeepSeek.',
	tool_ios_prompt_builder_faq_a2:
		'Нет. Локальный режим просто раскладывает ваши поля по блокам Role / Task / Constraints / Output. Необязательный ИИ работает через Cloudflare Workers AI после Turnstile, а не через API ChatGPT, Gemini, Claude или DeepSeek.',
	tool_ios_prompt_builder_faq_a3:
		'Конструктор шаблонов промптов даёт четыре универсальных блока Role / Task / Constraints / Output для любой темы. Здесь поля уже под iOS-проект: функция, стек Swift, навигация и графики на SwiftUI, правила HIG про Dynamic Type и VoiceOver — со своим примером и своими ограничениями.',
	tool_ios_prompt_builder_faq_a4:
		'Да. Пройдите Turnstile в блоке ИИ прежде, чем нажать «Расширить» или «Отшлифовать». Без действительного токена кнопки ИИ вернут ошибку, а локальный режим продолжит работать.',
	tool_ios_prompt_builder_faq_a5:
		'Да. Переключите формат вывода на JSON: получите поля по отдельности плюс собранный текст промпта — удобно для сценариев XCTest или конфигурационного конвейера.',
	tool_ios_prompt_builder_faq_a6:
		'Да. Результат — обычный текст: скопируйте и вставьте в ChatGPT, Gemini, Claude или DeepSeek. Страница не вызывает эти API за вас.',
	tool_ios_prompt_builder_faq_q1:
		'Загружается ли куда-нибудь то, что я ввожу?',
	tool_ios_prompt_builder_faq_q2:
		'Обращается ли страница к API ChatGPT или других моделей?',
	tool_ios_prompt_builder_faq_q3:
		'Чем это отличается от конструктора шаблонов промптов?',
	tool_ios_prompt_builder_faq_q4:
		'Зачем необязательному ИИ нужен Turnstile?',
	tool_ios_prompt_builder_faq_q5:
		'Можно выгрузить в JSON?',
	tool_ios_prompt_builder_faq_q6:
		'Подходит для ChatGPT, Gemini, Claude и DeepSeek?',
	tool_ios_prompt_builder_faq_q7:
		'Чем локальная сборка отличается от Cloudflare AI?',
	tool_ios_prompt_builder_faq_a7:
		'Локальная сборка только раскладывает введённые поля: ни запросов, ни лимитов. «Расширить» и «Отшлифовать» отправляют черновик в Cloudflare Workers AI (нужен Turnstile, обращения ограничены), а полученный текст полностью заменяет область результата — прочитайте его перед копированием. При ошибке или исчерпанном лимите продолжайте локально.',
	tool_ios_prompt_builder_ai_expand:
		'Расширить с ИИ',
	tool_ios_prompt_builder_ai_polish:
		'Отшлифовать с ИИ',
	tool_ios_prompt_builder_ai_panel_label:
		'Необязательный Cloudflare AI (Turnstile)',
	tool_ios_prompt_builder_ai_consent_title:
		'Отправить черновик в Cloudflare Workers AI?',
	tool_ios_prompt_builder_ai_consent_body:
		'Необязательный шаг: текущий черновик уйдёт в Cloudflare Workers AI для генерации. С наших серверов он не передаётся в OpenAI, Google, Anthropic или DeepSeek. Без ИИ сборка в браузере работает как обычно.',
	tool_ios_prompt_builder_ai_consent_ok:
		'Продолжить',
	tool_ios_prompt_builder_ai_consent_cancel:
		'Отмена',
	tool_ios_prompt_builder_ai_working:
		'Cloudflare AI работает…',
	tool_ios_prompt_builder_ai_done:
		'Текст ИИ заменил результат. Проверьте перед копированием.',
	tool_ios_prompt_builder_ai_err_generic:
		'ИИ не сработал; результат остался прежним.',
	tool_ios_prompt_builder_ai_err_rate:
		'Лимит ИИ исчерпан. Работайте локально или вернитесь завтра (UTC).',
	tool_ios_prompt_builder_ai_err_turnstile:
		'Сначала пройдите Turnstile, затем используйте ИИ.',
	tool_ios_prompt_builder_fmt_json:
		'JSON',
	tool_ios_prompt_builder_fmt_label:
		'Формат вывода',
	tool_ios_prompt_builder_fmt_md:
		'Markdown',
	tool_ios_prompt_builder_feature_spec_label:
		'Функция / Требования',
	tool_ios_prompt_builder_feature_spec_ph:
		'Напр.: тренд шагов и полоса пульса покоя…',
	tool_ios_prompt_builder_swift_stack_label:
		'Swift / Стек',
	tool_ios_prompt_builder_swift_stack_ph:
		'Напр.: Swift 5.10, SwiftUI, iOS 17+, SwiftData…',
	tool_ios_prompt_builder_swiftui_ui_label:
		'SwiftUI / Экран',
	tool_ios_prompt_builder_swiftui_ui_ph:
		'Напр.: NavigationStack, Charts, лист разрешений…',
	tool_ios_prompt_builder_hig_constraints_label:
		'HIG / Доступность',
	tool_ios_prompt_builder_hig_constraints_ph:
		'Напр.: Dynamic Type XXL, VoiceOver, без force-unwrap…',
	tool_ios_prompt_builder_how_body:
		'Заполните четыре поля — страница соберёт из них Markdown (или JSON) в браузере; если нужно подробнее, попросите Cloudflare AI расширить текст и только потом вставляйте промпт в чат.',
	tool_ios_prompt_builder_how_item_1:
		'Нажмите «Загрузить пример»: поля заполнятся, промпт соберётся — правьте его под себя.',
	tool_ios_prompt_builder_how_item_2:
		'Измените функцию, стек, экран и правила HIG и нажмите «Собрать промпт»; для структурированного экспорта переключитесь на JSON.',
	tool_ios_prompt_builder_how_item_3:
		'По желанию: пройдите Turnstile и нажмите «Расширить» или «Отшлифовать» — текст ИИ займёт область результата.',
	tool_ios_prompt_builder_how_item_4:
		'Скопируйте или скачайте результат и вставьте его в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_ios_prompt_builder_how_title:
		'Как пользоваться',
	tool_ios_prompt_builder_load_sample:
		'Загрузить пример',
	tool_ios_prompt_builder_platforms_lead:
		'Готовый промпт — обычный текст: он одинаково вставляется в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_ios_prompt_builder_result_label:
		'Готовый промпт',
	tool_ios_prompt_builder_rules_body:
		'Страница только приводит требование в форму: она не компилирует код и не запускает Xcode. У необязательного ИИ есть лимит, и он требует Turnstile.',
	tool_ios_prompt_builder_rules_item_1:
		'Каждое поле попадает в свой блок Markdown: Role, Task, Constraints, Output.',
	tool_ios_prompt_builder_rules_item_2:
		'По умолчанию выводится Markdown; та же область по переключателю показывает JSON с полями и собранным промптом.',
	tool_ios_prompt_builder_rules_item_3:
		'Cloudflare AI не заменяет локальную сборку: его ответ занимает всю область результата, поэтому проверяйте текст перед копированием.',
	tool_ios_prompt_builder_rules_item_4:
		'Инструмент только собирает текст: он не компилирует Swift, не запускает Xcode и не вызывает чат-API от вашего имени.',
	tool_ios_prompt_builder_rules_title:
		'Границы, о которых стоит знать',
	tool_ios_prompt_builder_sec_constraints:
		'Constraints',
	tool_ios_prompt_builder_sec_output:
		'Output',
	tool_ios_prompt_builder_sec_role:
		'Role',
	tool_ios_prompt_builder_sec_task:
		'Task',
	tool_ios_prompt_builder_status_copied:
		'Скопировано в буфер обмена.',
	tool_ios_prompt_builder_status_done:
		'Промпт готов.',
	tool_ios_prompt_builder_status_working:
		'Собираем промпт…',
	tool_ios_prompt_builder_title:
		'Генератор промптов для iOS — локально, ИИ по желанию',
	tool_ios_prompt_builder_usecase_1:
		'Превратить требование, озвученное на дизайн-ревью, в промпт, который можно вставить в чат команды.',
	tool_ios_prompt_builder_usecase_2:
		'Выгрузить JSON, перенести правила HIG в чек-лист и при необходимости расширить текст через Cloudflare AI.',
	tool_ios_prompt_builder_usecase_3:
		'Если поля iOS не нужны и хватает универсального шаблона из четырёх блоков, переходите к конструктору шаблонов промптов.',
	tool_ios_prompt_builder_usecase_4:
		'Сформулировать описание ещё не анонсированной функции в браузере и лишь потом решить, отправлять ли его в необязательный ИИ.',
	tool_ios_prompt_builder_usecases_title:
		'Когда пригодится',
};

export default ru;
