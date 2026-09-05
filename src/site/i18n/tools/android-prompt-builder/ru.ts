/**
 * i18n tool shard (android-prompt-builder / ru).
 * Локальные запросы: «генератор промптов для Android», «промпт для ChatGPT разработка Android». Главный запрос — в H1; второстепенные (стек Kotlin, Compose, Gradle, minSdk, выгрузка JSON) — в description, FAQ и сценариях.
 * Фактические границы: сборка в браузере без запросов; необязательные «Расширить/Отшлифовать» отправляют черновик в Cloudflare Workers AI (Turnstile, лимит), ответ полностью заменяет область результата.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_android_prompt_builder_article:
		'Здесь требование к Android-приложению превращается в готовый к вставке промпт: опишите функцию, стек Kotlin, экран на Compose и ограничения Gradle — страница соберёт текст в Markdown или JSON прямо в браузере. По умолчанию никаких запросов не уходит; черновик отправляется в Cloudflare Workers AI только после нажатия «Расширить» или «Отшлифовать» (нужен Turnstile, число обращений ограничено).',
	tool_android_prompt_builder_build:
		'Собрать промпт',
	tool_android_prompt_builder_clear:
		'Очистить',
	tool_android_prompt_builder_copy:
		'Копировать',
	tool_android_prompt_builder_desc:
		'Генератор промптов для Android: заполните функцию, стек Kotlin, экран на Compose и ограничения Gradle — текст собирается в браузере в Markdown или JSON, ИИ по желанию.',
	tool_android_prompt_builder_description:
		'Генератор промптов для Android: укажите функцию, стек (Kotlin 2.0, Jetpack Compose, Room), экран и ограничения Gradle — страница разложит их по блокам Role / Task / Constraints / Output в Markdown или JSON, не выходя из браузера. Пример: «офлайн-список для чтения с полнотекстовым поиском и архивацией свайпом» превращается в задачу с minSdk 26. Кнопка «Загрузить пример» заполняет поля и сразу собирает промпт; «Расширить» и «Отшлифовать» через Cloudflare Workers AI — по желанию (Turnstile, суточный лимит).',
	tool_android_prompt_builder_download:
		'Скачать',
	tool_android_prompt_builder_empty:
		'Заполните хотя бы одно поле перед сборкой.',
	tool_android_prompt_builder_example:
		'Ввод: Функция = офлайн-список для чтения, сохранение через share sheet, полнотекстовый поиск, архивация свайпом с отменой; Стек = Kotlin 2.0, Jetpack Compose, Room FTS4, Hilt; Compose = LazyColumn с прилипающими заголовками дат и SwipeToDismissBox; Gradle = minSdk 26, targetSdk 35, модуль :core:data. Вывод (Markdown): в ## Role описана роль опытного Android-разработчика, в ## Task — по строке на каждое поле.',
	tool_android_prompt_builder_example_title:
		'Пример',
	tool_android_prompt_builder_faq_a1:
		'По умолчанию нет. Заполнение полей и кнопка «Собрать промпт» работают только в этой вкладке, без запросов. Черновик уходит лишь при нажатии «Расширить» или «Отшлифовать», и адресат — Cloudflare Workers AI; с наших серверов текст не пересылается в OpenAI, Google, Anthropic или DeepSeek.',
	tool_android_prompt_builder_faq_a2:
		'Нет. Локальный режим просто раскладывает ваши поля по блокам Role / Task / Constraints / Output. Необязательный ИИ работает через Cloudflare Workers AI после Turnstile, а не через API ChatGPT, Gemini, Claude или DeepSeek.',
	tool_android_prompt_builder_faq_a3:
		'Конструктор шаблонов промптов даёт четыре универсальных блока Role / Task / Constraints / Output для любой темы. Здесь поля уже под Android-проект: функция, стек Kotlin, экран на Compose, minSdk и деление на модули Gradle, со своим примером и своими ограничениями.',
	tool_android_prompt_builder_faq_a4:
		'Да. Пройдите Turnstile в блоке ИИ прежде, чем нажать «Расширить» или «Отшлифовать». Без действительного токена кнопки ИИ вернут ошибку, а локальный режим продолжит работать.',
	tool_android_prompt_builder_faq_a5:
		'Да. Переключите формат вывода на JSON: получите поля по отдельности плюс собранный текст промпта — удобно для тестов или конфигурационного конвейера.',
	tool_android_prompt_builder_faq_a6:
		'Да. Результат — обычный текст: скопируйте и вставьте в ChatGPT, Gemini, Claude или DeepSeek. Страница не вызывает эти API за вас.',
	tool_android_prompt_builder_faq_q1:
		'Загружается ли куда-нибудь то, что я ввожу?',
	tool_android_prompt_builder_faq_q2:
		'Обращается ли страница к API ChatGPT или других моделей?',
	tool_android_prompt_builder_faq_q3:
		'Чем это отличается от конструктора шаблонов промптов?',
	tool_android_prompt_builder_faq_q4:
		'Зачем необязательному ИИ нужен Turnstile?',
	tool_android_prompt_builder_faq_q5:
		'Можно выгрузить в JSON?',
	tool_android_prompt_builder_faq_q6:
		'Подходит для ChatGPT, Gemini, Claude и DeepSeek?',
	tool_android_prompt_builder_faq_q7:
		'Чем локальная сборка отличается от Cloudflare AI?',
	tool_android_prompt_builder_faq_a7:
		'Локальная сборка только раскладывает введённые поля: ни запросов, ни лимитов. «Расширить» и «Отшлифовать» отправляют черновик в Cloudflare Workers AI (нужен Turnstile, обращения ограничены), а полученный текст полностью заменяет область результата — прочитайте его перед копированием. При ошибке или исчерпанном лимите продолжайте локально.',
	tool_android_prompt_builder_ai_expand:
		'Расширить с ИИ',
	tool_android_prompt_builder_ai_polish:
		'Отшлифовать с ИИ',
	tool_android_prompt_builder_ai_panel_label:
		'Необязательный Cloudflare AI (Turnstile)',
	tool_android_prompt_builder_ai_consent_title:
		'Отправить черновик в Cloudflare Workers AI?',
	tool_android_prompt_builder_ai_consent_body:
		'Необязательный шаг: текущий черновик уйдёт в Cloudflare Workers AI для генерации. С наших серверов он не передаётся в OpenAI, Google, Anthropic или DeepSeek. Без ИИ сборка в браузере работает как обычно.',
	tool_android_prompt_builder_ai_consent_ok:
		'Продолжить',
	tool_android_prompt_builder_ai_consent_cancel:
		'Отмена',
	tool_android_prompt_builder_ai_working:
		'Cloudflare AI работает…',
	tool_android_prompt_builder_ai_done:
		'Текст ИИ заменил результат. Проверьте перед копированием.',
	tool_android_prompt_builder_ai_err_generic:
		'ИИ не сработал; результат остался прежним.',
	tool_android_prompt_builder_ai_err_rate:
		'Лимит ИИ исчерпан. Работайте локально или вернитесь завтра (UTC).',
	tool_android_prompt_builder_ai_err_turnstile:
		'Сначала пройдите Turnstile, затем используйте ИИ.',
	tool_android_prompt_builder_fmt_json:
		'JSON',
	tool_android_prompt_builder_fmt_label:
		'Формат вывода',
	tool_android_prompt_builder_fmt_md:
		'Markdown',
	tool_android_prompt_builder_feature_spec_label:
		'Функция / Требования',
	tool_android_prompt_builder_feature_spec_ph:
		'Напр.: офлайн-список для чтения с поиском…',
	tool_android_prompt_builder_kotlin_stack_label:
		'Kotlin / Стек',
	tool_android_prompt_builder_kotlin_stack_ph:
		'Напр.: Kotlin 2.0, Jetpack Compose, Room, Hilt…',
	tool_android_prompt_builder_compose_ui_label:
		'Compose / Экран',
	tool_android_prompt_builder_compose_ui_ph:
		'Напр.: LazyColumn с прилипающими заголовками…',
	tool_android_prompt_builder_gradle_constraints_label:
		'Gradle / Ограничения',
	tool_android_prompt_builder_gradle_constraints_ph:
		'Напр.: minSdk 26, targetSdk 35, модуль :core:data…',
	tool_android_prompt_builder_how_body:
		'Заполните четыре поля — страница соберёт из них Markdown (или JSON) в браузере; если нужно подробнее, попросите Cloudflare AI расширить текст и только потом вставляйте промпт в чат.',
	tool_android_prompt_builder_how_item_1:
		'Нажмите «Загрузить пример»: поля заполнятся, промпт соберётся — правьте его под себя.',
	tool_android_prompt_builder_how_item_2:
		'Измените функцию, стек, экран и ограничения и нажмите «Собрать промпт»; для структурированного экспорта переключитесь на JSON.',
	tool_android_prompt_builder_how_item_3:
		'По желанию: пройдите Turnstile и нажмите «Расширить» или «Отшлифовать» — текст ИИ займёт область результата.',
	tool_android_prompt_builder_how_item_4:
		'Скопируйте или скачайте результат и вставьте его в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_android_prompt_builder_how_title:
		'Как пользоваться',
	tool_android_prompt_builder_load_sample:
		'Загрузить пример',
	tool_android_prompt_builder_platforms_lead:
		'Готовый промпт — обычный текст: он одинаково вставляется в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_android_prompt_builder_result_label:
		'Готовый промпт',
	tool_android_prompt_builder_rules_body:
		'Страница только приводит требование в форму: она не компилирует код и не запускает Gradle. У необязательного ИИ есть лимит, и он требует Turnstile.',
	tool_android_prompt_builder_rules_item_1:
		'Каждое поле попадает в свой блок Markdown: Role, Task, Constraints, Output.',
	tool_android_prompt_builder_rules_item_2:
		'По умолчанию выводится Markdown; та же область по переключателю показывает JSON с полями и собранным промптом.',
	tool_android_prompt_builder_rules_item_3:
		'Cloudflare AI не заменяет локальную сборку: его ответ занимает всю область результата, поэтому проверяйте текст перед копированием.',
	tool_android_prompt_builder_rules_item_4:
		'Инструмент только собирает текст: он не компилирует Kotlin, не запускает Gradle и не вызывает чат-API от вашего имени.',
	tool_android_prompt_builder_rules_title:
		'Границы, о которых стоит знать',
	tool_android_prompt_builder_sec_constraints:
		'Constraints',
	tool_android_prompt_builder_sec_output:
		'Output',
	tool_android_prompt_builder_sec_role:
		'Role',
	tool_android_prompt_builder_sec_task:
		'Task',
	tool_android_prompt_builder_status_copied:
		'Скопировано в буфер обмена.',
	tool_android_prompt_builder_status_done:
		'Промпт готов.',
	tool_android_prompt_builder_status_working:
		'Собираем промпт…',
	tool_android_prompt_builder_title:
		'Генератор промптов для Android — локально, ИИ по желанию',
	tool_android_prompt_builder_usecase_1:
		'Превратить требование, озвученное на планировании спринта, в промпт, который можно вставить в чат команды.',
	tool_android_prompt_builder_usecase_2:
		'Выгрузить JSON, подключить поля к регрессионному тесту и при необходимости расширить текст через Cloudflare AI.',
	tool_android_prompt_builder_usecase_3:
		'Если поля Android не нужны и хватает универсального шаблона из четырёх блоков, переходите к конструктору шаблонов промптов.',
	tool_android_prompt_builder_usecase_4:
		'Сформулировать внутреннее описание в браузере и лишь потом решить, отправлять ли его в необязательный ИИ.',
	tool_android_prompt_builder_usecases_title:
		'Когда пригодится',
};

export default ru;
