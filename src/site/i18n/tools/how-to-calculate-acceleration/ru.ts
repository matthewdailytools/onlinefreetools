/**
 * i18n tool shard (how-to-calculate-acceleration / ru).
 * Русская версия (на «вы», десятичная запятая): как найти ускорение по формуле a=(v−v0)/t;
 * выражение a, v, v0 или t с ходом решения. Написано самостоятельно по 03-locale-briefs (ru).
 */
import type { SiteLangDict } from '../../../types';

/** Русский словарь калькулятора ускорения; набор ключей совпадает с en.ts. */
const ru: SiteLangDict = {
	tool_acceleration_title: "Калькулятор ускорения — по изменению скорости за время",
	tool_acceleration_description:
		"Расчёт ускорения при равноускоренном движении по формуле a = (v − v0) ÷ t; можно найти и конечную скорость, начальную скорость или время. Пример: от 0 до 10 за 2 с — a = 5. Каждый шаг решения выводится под ответом.",
	tool_acceleration_calculate: "Рассчитать",
	tool_acceleration_sample: "Загрузить пример",
	tool_acceleration_clear: "Очистить",
	tool_acceleration_solve_label: "Что найти",
	tool_acceleration_solve_a: "Ускорение (a)",
	tool_acceleration_solve_v: "Конечную скорость (v)",
	tool_acceleration_solve_v0: "Начальную скорость (v0)",
	tool_acceleration_solve_t: "Время (t)",
	tool_acceleration_v0_label: "Начальная скорость v0",
	tool_acceleration_v0_ph: "например, 0",
	tool_acceleration_v_label: "Конечная скорость v",
	tool_acceleration_v_ph: "например, 10",
	tool_acceleration_t_label: "Время t",
	tool_acceleration_t_ph: "например, 2",
	tool_acceleration_a_label: "Ускорение a",
	tool_acceleration_a_ph: "например, 5",
	tool_acceleration_accOut_label: "Ускорение",
	tool_acceleration_vOut_label: "Конечная скорость",
	tool_acceleration_v0Out_label: "Начальная скорость",
	tool_acceleration_tOut_label: "Время",
	tool_acceleration_work_label: "Ход решения",
	tool_acceleration_result_note:
		"Расчёт верен для равноускоренного прямолинейного движения. Скорость и время вводите в согласованных единицах (м/с и с дают м/с²). Отрицательное a означает торможение, если обе скорости отсчитываются в одном направлении.",
	tool_acceleration_err_finite: "Введите число в каждое видимое поле.",
	tool_acceleration_err_time: "Время должно быть больше 0.",
	tool_acceleration_err_zero_a: "При a = 0 время найти нельзя: получается деление на ноль.",
	tool_acceleration_how_title: "Как найти ускорение",
	tool_acceleration_how_body:
		"Ускорение показывает, на сколько меняется скорость за единицу времени: a = (v − v0) ÷ t. Выберите неизвестную величину, введите остальные три — калькулятор сам выразит её из той же формулы.",
	tool_acceleration_how_item_1:
		"В списке «Что найти» укажите искомое: ускорение, конечную скорость, начальную скорость или время.",
	tool_acceleration_how_item_2:
		"Заполните все видимые поля в одной системе единиц — проще всего в СИ (м/с, с).",
	tool_acceleration_how_item_3: "Нажмите «Рассчитать».",
	tool_acceleration_how_item_4:
		"Посмотрите ответ и строку хода решения, например a = (10 − 0) ÷ 2 = 5.",
	tool_acceleration_why_choose_title: "Чем удобен этот калькулятор ускорения",
	tool_acceleration_why_choose_item_1:
		"Названы недопустимые случаи: t ≤ 0 или a = 0, когда ищется время, — вместо странного числа вы увидите понятное сообщение.",
	tool_acceleration_why_choose_item_2:
		"Ход решения выводится целиком, так что запись (v − v0) ÷ t или v = v0 + a · t можно сразу перенести в тетрадь.",
	tool_acceleration_why_choose_item_3:
		"Одна формула — четыре неизвестных: начинайте с тех данных, что дают в задаче, а не только с ускорения.",
	tool_acceleration_why_choose_item_4:
		"Модель обозначена честно: равноускоренное движение по прямой, без переменного ускорения и без движения по окружности.",
	tool_acceleration_why_choose_item_5:
		"Вычисления идут в браузере; введённые числа не отправляются на сервер.",
	tool_acceleration_formula_title: "Формула ускорения и её преобразования",
	tool_acceleration_formula_body:
		"Для равноускоренного движения a = (v − v0) ÷ t. Из этого равенства выражается любая из четырёх величин — физика процесса при этом не меняется.",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t. Пример: (10 − 0) ÷ 2 = 5.",
	tool_acceleration_formula_item_2: "v = v0 + a · t. Пример: 0 + 5 · 2 = 10.",
	tool_acceleration_formula_item_3: "v0 = v − a · t. Пример: 10 − 5 · 2 = 0.",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a при a ≠ 0. Пример: (10 − 0) ÷ 5 = 2.",
	tool_acceleration_example_title: "Пример расчёта",
	tool_acceleration_example:
		"Тело трогается с места и за 2 единицы времени разгоняется до 10. Ищем a: a = (10 − 0) ÷ 2 = 5. Переключитесь на «Конечную скорость», введите v0 = 0, a = 5, t = 2 — и получите v = 10: то же движение, прочитанное в обратную сторону.",
	tool_acceleration_usecases_title: "Когда пригодится",
	tool_acceleration_usecase_1:
		"Домашние задания и контрольные по теме «Равноускоренное движение».",
	tool_acceleration_usecase_2:
		"Найти время торможения: сколько секунд нужно при постоянном замедлении до полной остановки.",
	tool_acceleration_usecase_3:
		"Проверить, правда ли автомобиль, разгоняющийся с 0 до 20 м/с за 4 с, имеет ускорение 5 м/с².",
	tool_acceleration_usecase_4:
		"Сверить ответ из задачника со своим решением шаг за шагом.",
	tool_acceleration_faq_q1: "Как найти ускорение, если известны скорости и время?",
	tool_acceleration_faq_a1:
		"Вычтите начальную скорость из конечной и разделите разность на время: a = (v − v0) ÷ t. Разгон с 0 до 10 м/с за 2 с даёт a = 5 м/с².",
	tool_acceleration_faq_q2: "Почему при нулевом ускорении нельзя найти время?",
	tool_acceleration_faq_a2:
		"Если a = 0, скорость не меняется, и выражение t = (v − v0) ÷ a не имеет смысла. Значит, либо скорости v0 и v уже равны, либо ускорение на самом деле не нулевое.",
	tool_acceleration_faq_q3: "Что значит отрицательное ускорение?",
	tool_acceleration_faq_a3:
		"Это торможение или разгон против выбранного положительного направления. Если скорость за 2 с упала с 20 до 10 м/с, то a = (10 − 20) ÷ 2 = −5 м/с².",
	tool_acceleration_faq_q4: "В каких единицах считать?",
	tool_acceleration_faq_a4:
		"В любых, но согласованных. Метры и секунды дают м/с². Если смешать км/ч и секунды без перевода (км/ч ÷ 3,6 = м/с), ответ будет неверным.",
	tool_acceleration_faq_q5: "Ускорение свободного падения — 9,8 м/с²?",
	tool_acceleration_faq_a5:
		"У поверхности Земли без учёта сопротивления воздуха обычно берут g ≈ 9,8 м/с². Если ось направлена вверх, введите a = −9,8, чтобы найти скорость или время при свободном падении.",
	tool_acceleration_faq_q6: "Чем ускорение отличается от средней скорости?",
	tool_acceleration_faq_a6:
		"Средняя скорость — это путь, делённый на время. Ускорение показывает, как быстро меняется сама скорость. Если нужна только скорость по пути и времени, воспользуйтесь калькулятором скорости.",
	tool_acceleration_faq_q7: "Подойдёт ли калькулятор для движения по окружности?",
	tool_acceleration_faq_a7:
		"Нет. Здесь рассматривается постоянное ускорение вдоль прямой. Центростремительное ускорение зависит от скорости и радиуса и считается по другой формуле.",
	tool_acceleration_article: "Ускорение",
	tool_acceleration_disclaimer:
		"Для учёбы и проверки домашних заданий. Предполагается постоянное ускорение при прямолинейном движении; реальное движение может отличаться.",
	tool_acceleration_references:
		"Wikipedia (на английском) — Acceleration; The Physics Hypertextbook — Equations of Motion (на английском).",
	tool_acceleration_ref_a_label: "Wikipedia (на английском) — Acceleration",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion (на английском)",
};

export default ru;
