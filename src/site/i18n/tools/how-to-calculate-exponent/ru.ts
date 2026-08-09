/**
 * i18n tool shard (how-to-calculate-exponent / ru).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_exponent_title: "Калькулятор степеней — Как вычислить a^b",
	tool_exponent_description: "Считайте степени a^b с примером 2^10=1024. Указывает Infinity при огромных величинах и NaN для некоторых отрицательных оснований с нецелым показателем. В браузере вместе с логарифмами и научной записью.",
	tool_exponent_calculate: "Рассчитать",
	tool_exponent_sample: "Загрузить пример",
	tool_exponent_clear: "Очистить",
	tool_exponent_base_label: "Основание a",
	tool_exponent_base_ph: "напр. 2",
	tool_exponent_exp_label: "Показатель b",
	tool_exponent_exp_ph: "напр. 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "Считает a^b через Math.pow для обучения. Очень большой |b| может дать Infinity.",
	tool_exponent_err_generic: "Введите конечные основание и показатель.",
	tool_exponent_how_title: "Как пользоваться",
	tool_exponent_how_body: "Введите a и b. Возвращает a^b. Отрицательное основание с нецелым показателем может дать NaN и считается ошибкой.",
	tool_exponent_formula_title: "Формула",
	tool_exponent_formula_body: "Возведение в степень a^b:",
	tool_exponent_formula_item_1: "Если b — неотрицательное целое, a^b — умножение a на себя b раз.",
	tool_exponent_formula_item_2: "Дробные/отрицательные показатели по правилам Math.pow.",
	tool_exponent_formula_item_3: "0^0 здесь равно 1 (программистская условность) — есть споры.",
	tool_exponent_formula_item_4: "Сверьте со страницей логов: log_a(a^b)=b, когда определено.",
	tool_exponent_example_title: "Пример",
	tool_exponent_example: "Пример: 2^10 = 1024.",
	tool_exponent_usecases_title: "Когда применять",
	tool_exponent_usecase_1: "Домашнее задание: простые степени вроде 2^10.",
	tool_exponent_usecase_2: "Проверить масштаб научной записи.",
	tool_exponent_usecase_3: "Сверить с обратными логарифмами.",
	tool_exponent_disclaimer: "Только учебные вещественные степени; не CAS.",
	tool_exponent_references: "Wikipedia о возведении в степень.",
	tool_exponent_ref_exp_label: "Wikipedia — Возведение в степень",
	tool_exponent_ref_pow_label: "Wikipedia — Показатель степени",
	tool_exponent_article: "Считайте степени a^b в браузере с заметками об области.",
	tool_exponent_faq_q1: "Что с 0^0?",
	tool_exponent_faq_a1: "Здесь 1 (привычка JS); в математике спорно.",
	tool_exponent_faq_q2: "Отрицательное основание?",
	tool_exponent_faq_a2: "Нецелые вещественные степени часто дают NaN в JS.",
	tool_exponent_faq_q3: "Возможен Infinity?",
	tool_exponent_faq_a3: "Да при огромных величинах.",
	tool_exponent_faq_q4: "Проверка логарифмом?",
	tool_exponent_faq_a4: "Если определено, log_a(a^b)≈b.",
};

export default ru;
