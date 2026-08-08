/**
 * i18n tool shard (how-to-calculate-percentage-change / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_percentage_change_abs_note: 'Абсолютное изменение: {delta}',
  tool_percentage_change_article:
    'Относительное процентное изменение отвечает, насколько метрика сдвинулась относительно базы. Введите старое и новое; формула (новое − старое) / старое × 100. Для KPI, не замена ROI.',
  tool_percentage_change_calculate: 'Рассчитать',
  tool_percentage_change_decrease: 'снижение',
  tool_percentage_change_description:
    'Посчитайте процентный рост или спад от старого значения к новому. Шаги: введите оба, примените (новое − старое) / старое × 100, смотрите знак. Пример: 80 → 100 = +25%. Для выручки MoM, DAU и цен — не процентные пункты.',
  tool_percentage_change_example: 'Полный пример: старое 80, новое 100 → Δ = 20 → (20 / 80) × 100 = +25%. Спад: 100 → 80 = −20%.',
  tool_percentage_change_example_title: 'Пример',
  tool_percentage_change_faq_a1: 'Изменение % = (новое − старое) / старое × 100. Плюс — рост, минус — спад.',
  tool_percentage_change_faq_a2: 'Деление на ноль не определено. Без базы нет относительного изменения.',
  tool_percentage_change_faq_a3: 'Нет. С 10% до 12% — +2 пункта, но относительный рост 20%.',
  tool_percentage_change_faq_a4:
    'ROI сравнивает прибыль с затратами инвестиций. Процентное изменение — любой новый показатель к старой базе.',
  tool_percentage_change_faq_q1: 'Какова формула процентного изменения?',
  tool_percentage_change_faq_q2: 'Почему старое значение не может быть нулём?',
  tool_percentage_change_faq_q3: 'Это то же, что процентные пункты?',
  tool_percentage_change_faq_q4: 'Чем отличается от ROI?',
  tool_percentage_change_formula_body: 'Изменение % = (новое − старое) / старое × 100. В знаменателе знаковое старое (не |старое|).',
  tool_percentage_change_formula_item_1: 'Δ = новое − старое',
  tool_percentage_change_formula_item_2: 'процент = (Δ / старое) × 100',
  tool_percentage_change_formula_item_3: 'старое = 0 → не определено (ошибка)',
  tool_percentage_change_formula_title: 'Формула процентного изменения',
  tool_percentage_change_how_body:
    'Введите базу (старое) и последующее значение. Вычитаем, делим на старое, ×100. Плюс — рост, минус — спад. При старом = 0 относительное изменение не определено.',
  tool_percentage_change_how_title: 'Как это работает',
  tool_percentage_change_increase: 'рост',
  tool_percentage_change_new_label: 'Новое значение',
  tool_percentage_change_no_change: 'без изменений',
  tool_percentage_change_original_label: 'Старое значение',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_result_invalid: 'Старое значение должно быть ненулевым числом.',
  tool_percentage_change_result_label: 'Процентное изменение',
  tool_percentage_change_title: 'Калькулятор процентного изменения — От старого значения к новому',
  tool_percentage_change_usecase_1: 'Выручка месяц к месяцу: GMV 80 прошлый месяц vs 100 этот → +25%.',
  tool_percentage_change_usecase_2: 'Продукт: DAU с 50k до 55k → +10% относительно.',
  tool_percentage_change_usecase_3: 'Цена: с 40 до 34 → −15% (не «6 процентных пунктов»).',
  tool_percentage_change_usecases_title: 'Бизнес и данные',
};
export default ru;
