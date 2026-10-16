/**
 * i18n tool shard (how-to-calculate-one-rep-max / ru).
 * 1RM 估算：Epley / Brzycki / Lombardi 公式对比与 %1RM 训练负荷表。
 */
import type { SiteLangDict } from '../../../types';

/** 俄语工具文案分片（一次最大重量 / 1RM）。 */
const ru: SiteLangDict = {
	tool_one_rep_max_title: "Калькулятор одного повторения — оценка 1ПМ по весу и числу повторений",
	tool_one_rep_max_description: "Оцените одноповторный максимум (1RM) по субмаксимальному подходу по формуле Epley: 1RM ≈ w×(1+повторы/30), сравните Brzycki и Lombardi. Пример: 100 на 5 повторений → около 116,7. Есть таблица нагрузок %1RM. Только учебная оценка — не тренировочный и не медицинский совет.",
	tool_one_rep_max_article: "Оцените 1RM по весу и повторениям по Epley, сравните Brzycki и Lombardi и прочитайте тренировочные проценты от 1RM по Epley.",
	tool_one_rep_max_desc: "Оценка 1RM по субмаксимальному подходу: Epley, Brzycki и Lombardi плюс таблица нагрузок %1RM.",

	tool_one_rep_max_safety_banner: "Только учебная оценка. Не пытайтесь выйти на истинный максимум по этому числу без разминки, страховки и тренера. Это не медицинский и не тренировочный совет.",
	tool_one_rep_max_weight_label: "Поднятый вес",
	tool_one_rep_max_weight_ph: "напр. 100",
	tool_one_rep_max_reps_label: "Выполнено повторений",
	tool_one_rep_max_reps_ph: "напр. 5",
	tool_one_rep_max_hint: "Укажите вес, с которым вы сделали несколько чистых повторений с хорошей техникой. Целые числа от 1 до 12 лучше всего подходят для этих формул. Для веса можно запятую как десятичный разделитель.",
	tool_one_rep_max_calculate: "Рассчитать",
	tool_one_rep_max_sample: "Загрузить пример",
	tool_one_rep_max_clear: "Очистить",
	tool_one_rep_max_ormOut_label: "Оценка 1RM (Epley)",
	tool_one_rep_max_pct_title: "Тренировочные нагрузки от 1RM по Epley",
	tool_one_rep_max_pct_col_pct: "% от 1RM",
	tool_one_rep_max_pct_col_load: "Нагрузка",
	tool_one_rep_max_steps_title: "Шаги",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "Разброс формул: {lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley: 1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}.",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}.",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi: 1RM ≈ w × r^0.1 = {w} × {r}^0.1 = {orm}.",
	tool_one_rep_max_step_pct_tpl: "При 80% от 1RM по Epley ({orm}): нагрузка ≈ 0,8 × {orm} = {p80}.",
	tool_one_rep_max_result_note: "Формулы сильнее расходятся при большем числе повторений. Для учебной оценки лучше подходы ≤10. Разминайтесь; не выходите на максимум только по цифре калькулятора.",
	tool_one_rep_max_err_generic: "Введите положительный вес и целое число повторений от 1 до 12 (например 100 и 5).",
	tool_one_rep_max_err_high_reps: "Выше примерно 12 повторений эти формулы ненадёжны. Возьмите более тяжёлый подход с меньшим числом чистых повторений.",

	tool_one_rep_max_how_title: "Как оценить одноповторный максимум",
	tool_one_rep_max_how_body: "Введите поднятый вес и число чистых повторений, затем Рассчитать. Вы получите 1RM по Epley, сравнение Brzycki и Lombardi и таблицу типичных тренировочных процентов.",
	tool_one_rep_max_how_item_1: "Введите вес штанги или гантелей для подхода, который вы завершили с хорошей техникой.",
	tool_one_rep_max_how_item_2: "Введите число успешных повторений (лучше целые 1–12).",
	tool_one_rep_max_how_item_3: "Нажмите Рассчитать, чтобы увидеть 1RM по Epley рядом с Brzycki и Lombardi.",
	tool_one_rep_max_how_item_4: "Смотрите таблицу %1RM (50%–95%) для грубых рабочих весов и Загрузить пример для 100×5, 60×8, 80×3 и одного реального повторения.",

	tool_one_rep_max_why_choose_title: "Зачем этот калькулятор 1RM",
	tool_one_rep_max_why_choose_item_1: "1RM по Epley как основная оценка, Brzycki и Lombardi — для сравнения.",
	tool_one_rep_max_why_choose_item_2: "Строка разброса формул, чтобы видеть, насколько расходятся три оценки.",
	tool_one_rep_max_why_choose_item_3: "Таблица нагрузок от 50% до 95% от 1RM по Epley.",
	tool_one_rep_max_why_choose_item_4: "Понятные шаги с подстановкой вашего веса и повторений в каждую формулу.",
	tool_one_rep_max_why_choose_item_5: "Предупреждение: только для обучения — не призыв пробовать максимум.",

	tool_one_rep_max_formula_title: "Формулы одноповторного максимума",
	tool_one_rep_max_formula_body: "One-rep max (1RM) — самый тяжёлый вес, который вы можете поднять один раз с хорошей техникой. Эти уравнения оценивают его по субмаксимальному подходу.",
	tool_one_rep_max_formula_item_1: "Epley: 1RM ≈ w × (1 + r/30). Пример: w = 100, r = 5 → 100 × (1 + 5/30) = 116,67.",
	tool_one_rep_max_formula_item_2: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r). Тот же пример → 100 × 36 ÷ 32 = 112,5. Не определено при r ≥ 37.",
	tool_one_rep_max_formula_item_3: "Lombardi: 1RM ≈ w × r^0.1. Тот же пример → 100 × 5^0.1 ≈ 117,46.",
	tool_one_rep_max_formula_item_4: "Оценки расходятся с ростом повторений; для более точной учебной оценки берите меньше чистых повторений.",
	tool_one_rep_max_formula_item_5: "Тренировочные проценты (например 80% 1RM) — только для планирования; учитывайте усталость, упражнение и опыт.",

	tool_one_rep_max_example_title: "Разобранные примеры",
	tool_one_rep_max_example: "Пример начинается с 100 на 5 повторений: Epley ≈ 116,7, Brzycki 112,5, Lombardi ≈ 117,5. Затем 60 × 8, 80 × 3, затем одно реальное повторение (135 × 1), где все формулы дают 135. Держите технику; прекращайте подход, если она ломается.",

	tool_one_rep_max_usecases_title: "Когда использовать калькулятор 1RM",
	tool_one_rep_max_usecase_1: "Домашка или урок: подставьте вес и повторения в Epley и покажите шаги.",
	tool_one_rep_max_usecase_2: "Черновик программы: переведите оценку 1RM в рабочие подходы 70%–85%.",
	tool_one_rep_max_usecase_3: "Сравнение формул: как Epley, Brzycki и Lombardi расходятся на одном подходе.",
	tool_one_rep_max_usecase_4: "Избежать реального максимума, когда есть только записанный субмаксимальный подход.",

	tool_one_rep_max_faq_q1: "Как посчитать 1RM по формуле Epley?",
	tool_one_rep_max_faq_a1: "Умножьте вес на (1 + повторы/30). При 100 на 5 повторений: 100 × (1 + 5/30) = 116,67. На странице также Brzycki и Lombardi для сравнения.",
	tool_one_rep_max_faq_q2: "Чем отличаются Epley и Brzycki?",
	tool_one_rep_max_faq_a2: "Epley линейно добавляет повторы/30. Brzycki использует 36/(37−повторы). Для 100×5 Epley ≈116,7, Brzycki 112,5. Ни одна не заменяет максимум под присмотром.",
	tool_one_rep_max_faq_q3: "Сколько повторений нужно для хорошей оценки?",
	tool_one_rep_max_faq_a3: "Обычно 1–10 чистых повторений. Выше ~12 формулы ненадёжны, страница просит более тяжёлый подход с меньшим числом повторений.",
	tool_one_rep_max_faq_q4: "Что значит 80% от 1RM?",
	tool_one_rep_max_faq_a4: "Частая рабочая интенсивность: нагрузка ≈ 0,8 × оценка 1RM. При 1RM по Epley 116,7 восьмидесять процентов — около 93,3 в тех же единицах.",
	tool_one_rep_max_faq_q5: "Безопасно ли пробовать рассчитанный 1RM?",
	tool_one_rep_max_faq_a5: "Не только по этой странице. Считайте число учебным. Истинный максимум требует разминки, страховки, техники и лучше тренера — это не совет выходить на максимум.",
	tool_one_rep_max_faq_q6: "Важны ли единицы (кг и lb)?",
	tool_one_rep_max_faq_a6: "Используйте любые согласованные единицы. Формулы безразмерны; 1RM выходит в той же единице, что и введённый вес.",
	tool_one_rep_max_faq_q7: "Это медицинский или тренировочный совет?",
	tool_one_rep_max_faq_a7: "Нет. Учебный калькулятор для понимания распространённых уравнений 1RM. Для решений о тренировках или здоровье обратитесь к квалифицированному тренеру или врачу.",

	tool_one_rep_max_disclaimer: "Только учебная оценка 1RM — не тренировка, не медицина и не профессиональный совет. Не пытайтесь выйти на максимум, опираясь лишь на этот калькулятор.",
	tool_one_rep_max_references: "Обычные учебниковые и википедийные описания уравнений прогноза 1RM.",
	tool_one_rep_max_ref_a_label: "Википедия — одноповторный максимум",
	tool_one_rep_max_ref_b_label: "Википедия — силовая тренировка",
};

export default ru;
