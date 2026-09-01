/**
 * i18n（compare-two-word-documents-for-differences / ru）。
 * H1: Сравнить два документа Word и найти различия.
 * Это не «Рецензирование → Сравнить» Microsoft.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'Выберите два .docx и сравните видимый текст. Стили, колонтитулы и область рецензирования Word не воспроизводятся. Файлы остаются на устройстве и не загружаются на сервер.',
	tool_compare_two_word_documents_for_differences_clear: 'Очистить',
	tool_compare_two_word_documents_for_differences_compare: 'Сравнить',
	tool_compare_two_word_documents_for_differences_desc:
		'Сравнить два документа Word и найти различия: извлечь видимый текст из двух .docx в браузере, без загрузки на сервер.',
	tool_compare_two_word_documents_for_differences_description:
		'Сравнить два документа Word и найти различия в браузере. Процесс: выберите два .docx, извлеките видимый текст абзацев, отметьте добавления и удаления. Файлы остаются на устройстве и не загружаются на сервер. Пример: две короткие служебные записки, где меняется одно предложение. Это не «Рецензирование → Сравнить» Microsoft; колонтитулы и стили отбрасываются. PDF вне охвата.',
	tool_compare_two_word_documents_for_differences_empty: 'Сначала выберите два файла Word или загрузите пример.',
	tool_compare_two_word_documents_for_differences_err_extract:
		'Не удалось прочитать текст. Файл повреждён, зашифрован или это не .docx.',
	tool_compare_two_word_documents_for_differences_err_no_text: 'Ни в одном файле нет извлекаемого текста (пусто или только картинки).',
	tool_compare_two_word_documents_for_differences_err_not_docx: 'Используйте .docx (Office Open XML). Старый .doc здесь не поддерживается.',
	tool_compare_two_word_documents_for_differences_example:
		'Загрузка примера создаёт два крошечных .docx. Во второй записке «meet at noon» меняется на «meet at 3pm». Уже при первом показе видна эта разница формулировок.',
	tool_compare_two_word_documents_for_differences_example_title: 'Пример',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'Нет. Файлы читаются в этой вкладке. mammoth и jsdiff могут подгружаться как библиотеки с CDN; ваши документы не загружаются на наши серверы.',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'Нет. Word умеет сравнивать оформление и исправления. Здесь извлекается только видимый текст, затем строится diff этой формулировки. Колонтитулы и стили отбрасываются.',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'Если извлечение не удалось — часто пароль, порча или не OOXML. Страницы только с картинками дают пустой текст.',
	tool_compare_two_word_documents_for_differences_faq_a4:
		'Ищут и «сравнить Word онлайн» — та же задача для двух .docx. Если «сравнить два документа» имело в виду PDF, это не эта страница.',
	tool_compare_two_word_documents_for_differences_faq_q1: 'Загружаются ли мои файлы Word?',
	tool_compare_two_word_documents_for_differences_faq_q2: 'Это то же самое, что «Рецензирование → Сравнить» в Word?',
	tool_compare_two_word_documents_for_differences_faq_q3: 'Почему извлечение не удалось или нет колонтитулов?',
	tool_compare_two_word_documents_for_differences_faq_q4: 'Можно ли сравнить PDF или любые два документа?',
	tool_compare_two_word_documents_for_differences_how_body:
		'Выберите два Word и прочитайте diff формулировок. Область рецензирования не открывается.',
	tool_compare_two_word_documents_for_differences_how_item_1: 'Выберите первый .docx (исходник).',
	tool_compare_two_word_documents_for_differences_how_item_2: 'Выберите второй .docx (правка).',
	tool_compare_two_word_documents_for_differences_how_item_3:
		'Сравнение само извлекает видимый текст; загрузка примера уже выполнена при первом показе.',
	tool_compare_two_word_documents_for_differences_how_item_4: 'Зелёным — добавления, красным — удаления.',
	tool_compare_two_word_documents_for_differences_how_title: 'Как пользоваться',
	tool_compare_two_word_documents_for_differences_label_a: 'Первый документ Word',
	tool_compare_two_word_documents_for_differences_label_b: 'Второй документ Word',
	tool_compare_two_word_documents_for_differences_legend: 'Зелёный = добавлено · Красный = удалено',
	tool_compare_two_word_documents_for_differences_load_sample: 'Загрузить пример',
	tool_compare_two_word_documents_for_differences_need_lib: 'Библиотека не загрузилась. Проверьте сеть и обновите страницу.',
	tool_compare_two_word_documents_for_differences_no_diff: 'В извлечённом тексте нет различий формулировок.',
	tool_compare_two_word_documents_for_differences_result_label: 'Различия формулировок',
	tool_compare_two_word_documents_for_differences_rules_body:
		'Сравнение — это текстовый diff после извлечения. Оформление не является журналом исправлений.',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'mammoth читает видимые абзацы из OOXML. Этот текст затем сравнивается построчно через jsdiff.',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'Колонтитулы, комментарии и большинство стилей отбрасываются. Два файла, где менялся только вид, могут выглядеть одинаково.',
	tool_compare_two_word_documents_for_differences_rules_item_3: 'Зашифрованный или повреждённый .docx не открывается. Старый .doc не разбирается.',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'Это не «Сравнение документов» Microsoft. Для отслеживаемого оформления используйте сам Word.',
	tool_compare_two_word_documents_for_differences_rules_title: 'Какие правила ждать',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: 'добавлено {added}, удалено {removed}',
	tool_compare_two_word_documents_for_differences_title: 'Сравнить два документа Word и найти различия',
	tool_compare_two_word_documents_for_differences_usecase_1:
		'Черновики договора: какие предложения изменились между двумя выгрузками .docx.',
	tool_compare_two_word_documents_for_differences_usecase_2: 'Протоколы: файл прошлой встречи против файла этой недели.',
	tool_compare_two_word_documents_for_differences_usecase_3: 'Домашние работы: два Word, когда важна формулировка, а не вёрстка.',
	tool_compare_two_word_documents_for_differences_usecases_title: 'Когда это уместно',
};

export default ru;
