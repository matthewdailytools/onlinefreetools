/**
 * i18n tool shard (square-feet / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_squarefeet_article:
    'Оцените прямоугольную площадь по длине и ширине и переведите между квадратными футами и метрами. Для объявлений, пола и покраски — не оценка стоимости и не разделение жилой/общей площади.',
  tool_squarefeet_calculate: 'Перевести площадь',
  tool_squarefeet_description:
    'Переведите площадь комнаты между квадратными футами и квадратными метрами для объявлений и ремонта. Шаги: выберите ft/m/in, введите длину × ширину, посчитайте площадь, покажите ft² и m² с фактором NIST 1 ft² = 0.09290304 m². Пример: квартира 850 sq ft ≈ 78,97 м².',
  tool_squarefeet_example:
    'Объявление: квартира 850 sq ft → 850 × 0.09290304 ≈ 78,97 м². Комната: 10 ft × 12 ft = 120 sq ft ≈ 11,15 м².',
  tool_squarefeet_example_title: 'Пример',
  tool_squarefeet_faq_a1: 'Ровно 1 ft² = 0.09290304 m² (SI / NIST). Два знака после запятой.',
  tool_squarefeet_faq_a2: 'Нет. Только перевод плоской площади прямоугольника.',
  tool_squarefeet_faq_a3: 'Нет. Перевод площади — не оценка и не ценовая модель.',
  tool_squarefeet_faq_a4: 'Разбейте на прямоугольники, переведите каждый и сложите.',
  tool_squarefeet_faq_q1: 'Какой коэффициент ft² ↔ м²?',
  tool_squarefeet_faq_q2: 'Отличаете жилую площадь от общей?',
  tool_squarefeet_faq_q3: 'Можно ли оценить цену жилья?',
  tool_squarefeet_faq_q4: 'А комнаты в форме L?',
  tool_squarefeet_formula_body:
    'Площадь (ft²) = длина (ft) × ширина (ft). В метрах: ft² = (L×W) ÷ 0.09290304. В дюймах: каждую сторону ÷ 12. Фактор: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Ввод в футах: площадь_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Ввод в метрах: площадь_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Ввод в дюймах: площадь_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'м² = площадь_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_formula_title: 'Формула площади и коэффициент',
  tool_squarefeet_how_body:
    'Выберите футы, метры или дюймы. Умножьте длину × ширину после перевода в футы, затем в м² точным SI-фактором. Пустые и отрицательные значения отклоняются.',
  tool_squarefeet_how_title: 'Как это работает',
  tool_squarefeet_invalid_input: 'Введите положительные длину и ширину.',
  tool_squarefeet_length_label: 'Длина',
  tool_squarefeet_length_placeholder: 'Введите длину',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Руководство по Международной системе единиц (SI)',
  tool_squarefeet_result_note: 'Округление до двух знаков. Фактор: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} м²',
  tool_squarefeet_title: 'Квадратные футы в м² — Для жилья и ремонта',
  tool_squarefeet_unit_group_label: 'Единицы ввода',
  tool_squarefeet_usage: 'Выберите единицу, введите длину и ширину — получите sq ft и эквивалент в м².',
  tool_squarefeet_usage_title: 'Как пользоваться',
  tool_squarefeet_usecase_1: 'Сравнить американское объявление в sq ft с местными в м².',
  tool_squarefeet_usecase_2: 'Оценить пол/ковёр прямоугольной комнаты до заказа материалов.',
  tool_squarefeet_usecase_3: 'Грубая оценка краски/ремонта при смешанных единицах на чертеже.',
  tool_squarefeet_usecases_title: 'Когда пригодится',
  tool_squarefeet_width_label: 'Ширина',
  tool_squarefeet_width_placeholder: 'Введите ширину',
};
export default ru;
