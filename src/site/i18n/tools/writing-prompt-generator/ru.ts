/**
 * i18n tool shard (writing-prompt-generator / ru).
 * Search H1: генератор writing prompts — диалог, персонаж, сценарий, случайный; локальная сборка.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Генератор writing prompts — русскоязычный текстовый шард */
const ru: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Соберите готовые к вставке writing prompts: сцены диалога, карточки персонажей, наброски сценария или случайные зацепки для истории. Выберите режим, заполните поля или бросьте случайность, затем скопируйте Markdown или JSON в ChatGPT, Gemini, Claude или DeepSeek. API моделей не вызывается. Текст остаётся на устройстве и не загружается на сервер.',
	tool_writing_prompt_generator_build: 'Собрать prompt',
	tool_writing_prompt_generator_char_flaw_label: 'Изъян / слабость',
	tool_writing_prompt_generator_char_flaw_ph: 'Что его сдерживает…',
	tool_writing_prompt_generator_char_goal_label: 'Цель',
	tool_writing_prompt_generator_char_goal_ph: 'Чего он хочет в этой истории…',
	tool_writing_prompt_generator_char_name_label: 'Имя персонажа',
	tool_writing_prompt_generator_char_name_ph: 'Имя или роль…',
	tool_writing_prompt_generator_char_traits_label: 'Черты',
	tool_writing_prompt_generator_char_traits_ph: 'Характер, привычки, противоречия…',
	tool_writing_prompt_generator_char_voice_label: 'Голос / речь',
	tool_writing_prompt_generator_char_voice_ph: 'Ритм фраз, словарь…',
	tool_writing_prompt_generator_clear: 'Очистить',
	tool_writing_prompt_generator_copy: 'Копировать',
	tool_writing_prompt_generator_desc:
		'Генератор writing prompt — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_writing_prompt_generator_description:
		'Процесс и пример: Генератор writing prompt — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_writing_prompt_generator_dlg_characters_label: 'Персонажи',
	tool_writing_prompt_generator_dlg_characters_ph: 'Имена + роль в одной строке…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Конфликт',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Какое напряжение движет сценой…',
	tool_writing_prompt_generator_dlg_genre_label: 'Жанр / тон',
	tool_writing_prompt_generator_dlg_genre_ph: 'Современная драма, ромком…',
	tool_writing_prompt_generator_dlg_setting_label: 'Место действия',
	tool_writing_prompt_generator_dlg_setting_ph: 'Место, время, атмосфера…',
	tool_writing_prompt_generator_dlg_tone_label: 'Стиль диалога',
	tool_writing_prompt_generator_dlg_tone_ph: 'Подтекст, перепалка, лаконично…',
	tool_writing_prompt_generator_download: 'Скачать',
	tool_writing_prompt_generator_empty: 'Заполните хотя бы одно поле в этом режиме перед сборкой.',
	tool_writing_prompt_generator_example:
		'Ввод (Диалог): Genre = современная дrama; Characters = Maya и Jonah; Conflict = Maya узнаёт песню об ex. Вывод (Markdown): ## Role → writing coach; ## Task → genre/characters/setting/conflict/tone. Режим сценария — загадка с факсом маяка, не food-truck из фильма.',
	tool_writing_prompt_generator_example_title: 'Пример',
	tool_writing_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_writing_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_writing_prompt_generator_faq_a3:
		'Конструктор шаблонов Prompt структурирует общие шаблоны Role/Task/Constraints/Output. Эта страница ориентирована на письменные режимы — поля диалога, карточки персонажей, beats сценария и генератор случайных prompts на одном холсте.',
	tool_writing_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_writing_prompt_generator_faq_a5:
		'Да. Чип JSON выдаёт {mode,fields,role,task,constraints,output} для тестов или конфигов. Markdown использует заголовки ## Role / Task / Constraints / Output.',
	tool_writing_prompt_generator_faq_a6:
		'Да. Скопируйте готовый prompt в ChatGPT, Gemini, Claude или DeepSeek. Мы не делим URL по платформам, потому что задача — форматировать текст, а не вызывать API.',
	tool_writing_prompt_generator_faq_q1: 'Загружается ли мой writing prompt?',
	tool_writing_prompt_generator_faq_q2: 'Вызывает ли это LLM?',
	tool_writing_prompt_generator_faq_q3: 'Чем отличается от конструктора шаблонов Prompt?',
	tool_writing_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_writing_prompt_generator_faq_q5: 'Можно получить JSON?',
	tool_writing_prompt_generator_faq_q6: 'Можно использовать с ChatGPT, Gemini, Claude или DeepSeek?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Формат вывода',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Выберите режим письма, заполните поля или бросьте случайность, соберите блок prompt и вставьте в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'Выберите Диалог, Персонаж, Сценарий или Случайный — Загрузить пример уже запустил пресет диалога при открытии.',
	tool_writing_prompt_generator_how_item_2: 'Заполните поля режима (или введите seed и нажмите Случайный бросок).',
	tool_writing_prompt_generator_how_item_3: 'Нажмите Собрать prompt (скрыто в Случайном — используйте Случайный бросок).',
	tool_writing_prompt_generator_how_item_4: 'Скопируйте или скачайте Markdown/JSON и вставьте в чат.',
	tool_writing_prompt_generator_how_title: 'Как это работает',
	tool_writing_prompt_generator_load_sample: 'Загрузить пример',
	tool_writing_prompt_generator_mode_character: 'Персонаж',
	tool_writing_prompt_generator_mode_dialogue: 'Диалог',
	tool_writing_prompt_generator_mode_label: 'Режим письма',
	tool_writing_prompt_generator_mode_random: 'Случайный',
	tool_writing_prompt_generator_mode_script: 'Сценарий / план',
	tool_writing_prompt_generator_platforms_lead:
		'Для ChatGPT, Gemini, Claude и DeepSeek — скопируйте готовый writing prompt в любой из этих чатов.',
	tool_writing_prompt_generator_random_lead:
		'Бросьте зацепку истории из жанра, места, предмета, эмоции и конфликта. Необязательный seed повторяет тот же бросок.',
	tool_writing_prompt_generator_random_roll: 'Случайный бросок',
	tool_writing_prompt_generator_random_seed_label: 'Seed (необяз.)',
	tool_writing_prompt_generator_random_seed_ph: 'напр. 42',
	tool_writing_prompt_generator_result_label: 'Writing prompt',
	tool_writing_prompt_generator_rules_body:
		'Writing prompts требуют полей по режиму, честных границ случайности и той же локальной приватности, что у других конструкторов.',
	tool_writing_prompt_generator_rules_item_1:
		'Четыре блока в выводе: Role, Task, Constraints, Output — в духе структурированных шаблонов.',
	tool_writing_prompt_generator_rules_item_2:
		'Случайный режим включает генератор случайных prompts на этом URL — без отдельной страницы.',
	tool_writing_prompt_generator_rules_item_3:
		'Экспорт по умолчанию — Markdown. JSON — чип на том же холсте.',
	tool_writing_prompt_generator_rules_item_4:
		'Инструмент только собирает текст. Не генерирует готовые истории и не вызывает облачные модели.',
	tool_writing_prompt_generator_rules_title: 'Чего ожидать',
	tool_writing_prompt_generator_scr_notes_label: 'Заметки по beats',
	tool_writing_prompt_generator_scr_notes_ph: 'Число сцен, темп, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Завязка / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup в одном абзаце…',
	tool_writing_prompt_generator_scr_structure_label: 'Структура',
	tool_writing_prompt_generator_scr_structure_ph: 'Три акта, save the cat, эпизодический…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: 'Скопировано в буфер обмена.',
	tool_writing_prompt_generator_status_done: 'Prompt готов.',
	tool_writing_prompt_generator_status_working: 'Сборка prompt…',
	tool_writing_prompt_generator_title:
		'Генератор writing prompt — Локально + опциональный ИИ',
	tool_writing_prompt_generator_usecase_1:
		'Набросайте prompt сцены диалога для писательской группы — вставьте в ChatGPT или Claude за идеями beats, не за полным текстом.',
	tool_writing_prompt_generator_usecase_2:
		'Бросьте случайность, когда нужна свежая зацепка без отдельного сайта-рандомайзера.',
	tool_writing_prompt_generator_usecase_3:
		'Экспортируйте JSON prompt карточки персонажа для теста pipeline, затем откройте конструктор шаблонов Prompt для API-шаблонов из четырёх полей.',
	tool_writing_prompt_generator_usecase_4:
		'Локально набросайте beats короткого сценария, прежде чем перенести prompt в Gemini для table read.',
	tool_writing_prompt_generator_usecases_title: 'Хорошие сценарии',
	tool_writing_prompt_generator_ai_expand:
		'Expandir con IA',
	tool_writing_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_writing_prompt_generator_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_writing_prompt_generator_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_writing_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_writing_prompt_generator_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_writing_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_writing_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_writing_prompt_generator_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_writing_prompt_generator_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
};

export default ru;
