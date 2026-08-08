/**
 * i18n tool shard (how-to-calculate-marginal-revenue / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_marginal_revenue_article:
    'Предельная выручка — изменение общей выручки при изменении количества. Калькулятор показывает дискретное выведение между двумя точками.',
  tool_marginal_revenue_calculate: 'Рассчитать MR',
  tool_marginal_revenue_description:
    'Рассчитайте предельную выручку по формуле MR = ΔTR / ΔQ. Процесс: введите количество и общую выручку в двух точках, получите ΔTR и ΔQ, затем разделите. Пример: Q 10→11, TR 1000→1080 → MR = 80. Только для обучения — не совет по ценообразованию.',
  tool_marginal_revenue_detail_tpl: 'ΔTR = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_disclaimer:
    'Калькулятор предназначен для изучения понятий микроэкономики. Это не бизнес-, ценовой или инвестиционный совет.',
  tool_marginal_revenue_example: 'Пример: Q₁ = 10, TR₁ = 1000; Q₂ = 11, TR₂ = 1080 → ΔTR = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_example_title: 'Пример',
  tool_marginal_revenue_faq_a1:
    'MR = ΔTR / ΔQ, где ΔTR = TR₂ − TR₁ и ΔQ = Q₂ − Q₁. Это дискретное выведение, не непрерывная производная.',
  tool_marginal_revenue_faq_a2: 'MR не определён, если количество не меняется. Выберите две разные точки.',
  tool_marginal_revenue_faq_a3:
    'Средняя выручка — TR / Q на уровне выпуска. Предельная — изменение TR при изменении Q; совпадают лишь в особых случаях.',
  tool_marginal_revenue_faq_a4:
    'Нет. Инструмент не даёт советов по цене или производству; нужны также предельные издержки и другие ограничения.',
  tool_marginal_revenue_faq_q1: 'Как здесь выводится предельная выручка?',
  tool_marginal_revenue_faq_q2: 'Что если ΔQ равна нулю?',
  tool_marginal_revenue_faq_q3: 'Чем отличается от средней выручки?',
  tool_marginal_revenue_faq_q4: 'Положительный MR значит увеличивать выпуск?',
  tool_marginal_revenue_formula_body:
    'По определению предельная выручка измеряет, как меняется общая выручка при изменении количества. Для двух точек:',
  tool_marginal_revenue_formula_item_1: 'ΔTR = TR₂ − TR₁ (изменение общей выручки)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (изменение количества)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔTR / ΔQ при ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Дискретный шаг приближает средний MR на интервале; непрерывные модели используют dTR/dQ. Отрицательный MR значит: выручка упала при росте количества.',
  tool_marginal_revenue_formula_title: 'Выведение формулы',
  tool_marginal_revenue_how_body:
    'Введите количество и общую выручку для уровня 1 и уровня 2. Считаем ΔTR = TR2 − TR1, ΔQ = Q2 − Q1 и MR = ΔTR / ΔQ в браузере.',
  tool_marginal_revenue_how_title: 'Как это работает',
  tool_marginal_revenue_q1_label: 'Количество (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'напр. 10',
  tool_marginal_revenue_q2_label: 'Количество (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'напр. 11',
  tool_marginal_revenue_quantity_label: 'Количество',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — предельная выручка (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principles of Microeconomics (конкуренция)',
  tool_marginal_revenue_references: 'Статья Investopedia о предельной выручке; вводное изложение MR = ΔTR/ΔQ (напр. OpenStax).',
  tool_marginal_revenue_result_label: 'Предельная выручка',
  tool_marginal_revenue_revenue_label: 'Общая выручка',
  tool_marginal_revenue_title: 'Калькулятор предельной выручки — Формула ΔTR / ΔQ',
  tool_marginal_revenue_tr1_label: 'Общая выручка (TR₁)',
  tool_marginal_revenue_tr1_placeholder: 'напр. 1000',
  tool_marginal_revenue_tr2_label: 'Общая выручка (TR₂)',
  tool_marginal_revenue_tr2_placeholder: 'напр. 1080',
  tool_marginal_revenue_usecase_1: 'Домашнее задание: проверить таблицу количество/выручка на двух уровнях.',
  tool_marginal_revenue_usecase_2: 'Грубая оценка: как меняется выручка при росте выпуска на единицу.',
  tool_marginal_revenue_usecase_3: 'Сравнить предельную и среднюю выручку во вводной микроэкономике.',
  tool_marginal_revenue_usecases_title: 'Когда пригодится',
  tool_marginal_revenue_zero_dq: 'ΔQ = 0 — количество должно отличаться между точками.',
};
export default ru;
