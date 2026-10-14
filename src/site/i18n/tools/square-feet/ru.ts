/**
 * i18n tool shard (square-feet / ru).
 * Russian (neutral tone): квадратные футы ↔ м², длина×ширина комнаты или известная площадь,
 * ход расчёта и фактор NIST; десятичная запятая в примерах (78,97 / 11,15 / 92,90).
 * Keys must stay in exact parity with en.ts for this slug.
 */
import type { SiteLangDict } from '../../../types';

/** Русские тексты инструмента для slug square-feet (нейтральный тон). */
const ru: SiteLangDict = {
	tool_squarefeet_title: "Квадратные футы в квадратные метры — перевод площади комнаты",
	tool_squarefeet_description:
		"Перевод квадратных футов в м² или расчёт площади комнаты по длине × ширине. Процесс по шагам: введите размеры или известную площадь. Формула с фактором NIST: 1 ft² = 0.09290304 m². Пример: 850 sq ft ≈ 78,97 m²; комната 10×12 ft = 120 ft² ≈ 11,15 m². Расчёт с ходом вычислений.",
	tool_squarefeet_calculate: "Рассчитать",
	tool_squarefeet_sample: "Загрузить пример",
	tool_squarefeet_clear: "Очистить",
	tool_squarefeet_mode_label: "Что у вас есть?",
	tool_squarefeet_mode_dims: "Длина и ширина комнаты",
	tool_squarefeet_mode_area: "Площадь уже известна",
	tool_squarefeet_dim_unit_label: "Единица длины",
	tool_squarefeet_unit_ft: "Футы (ft)",
	tool_squarefeet_unit_m: "Метры (m)",
	tool_squarefeet_unit_in: "Дюймы (in)",
	tool_squarefeet_length_label: "Длина",
	tool_squarefeet_length_placeholder: "напр. 10",
	tool_squarefeet_width_label: "Ширина",
	tool_squarefeet_width_placeholder: "напр. 12",
	tool_squarefeet_area_label: "Площадь",
	tool_squarefeet_area_placeholder: "напр. 850",
	tool_squarefeet_area_unit_label: "Единица площади",
	tool_squarefeet_unit_sqft: "Квадратные футы (ft²)",
	tool_squarefeet_unit_sqm: "Квадратные метры (m²)",
	tool_squarefeet_sqft_label: "Квадратные футы",
	tool_squarefeet_sqm_label: "Квадратные метры",
	tool_squarefeet_work_label: "Ход расчёта",
	tool_squarefeet_result_note:
		"Округление до двух знаков для отображения. Точный фактор: 1 ft² = 0.09290304 m² (NIST / SI). Только плоская площадь — не жилая vs общая, и не оценка цены.",
	tool_squarefeet_invalid_input: "Вводите только положительные числа.",
	tool_squarefeet_how_title: "Как это работает",
	tool_squarefeet_how_body:
		"Либо умножьте длину × ширину после перевода обеих сторон в футы, либо переведите известную площадь точным SI-фактором. Всегда получаете ft² и m² плюс строку хода расчёта.",
	tool_squarefeet_how_item_1:
		"Выберите длину и ширину комнаты, если измеряете пространство, или площадь уже известна, если в объявлении уже указаны sq ft или m².",
	tool_squarefeet_how_item_2:
		"Для размеров выберите футы, метры или дюймы и введите обе стороны в одной единице. Для известной площади укажите число и ft² или m².",
	tool_squarefeet_how_item_3: "Нажмите Рассчитать.",
	tool_squarefeet_how_item_4:
		"Смотрите обе единицы площади и ход расчёта, например 10 × 12 = 120 ft² или 850 ft² × 0.09290304 = 78,97 m².",
	tool_squarefeet_why_choose_title: "Зачем пользоваться калькулятором Квадратные футы в квадратные метры — перевод площади комнаты",
	tool_squarefeet_why_choose_item_1:
		"Ход расчёта виден: понятно, делили ли дюймы на 12 или метры переводили фактором NIST.",
	tool_squarefeet_why_choose_item_2:
		"Всё остаётся в браузере; на сервер ничего не загружается.",
	tool_squarefeet_why_choose_item_3:
		"Два режима закрывают типичные запросы: размеры комнаты и известная площадь объявления вроде 850 или 1000 sq ft.",
	tool_squarefeet_why_choose_item_4:
		"Точный SI-фактор 1 ft² = 0.09290304 m² (не округлённые 0,09 или 0,093), как в NIST SP 811.",
	tool_squarefeet_why_choose_item_5:
		"Ясно, чем инструмент не является: не разделяет жилую и общую площадь и не оценивает стоимость жилья.",
	tool_squarefeet_formula_title: "Формулы и коэффициент перевода",
	tool_squarefeet_formula_body:
		"Площадь в квадратных футах — длина × ширина после перевода обеих сторон в футы. Квадратные метры — по точному фактору ниже.",
	tool_squarefeet_formula_item_1: "Футы: A_ft² = L × W. Пример: 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_2: "Метры: A_ft² = (L × W) ÷ 0.09290304. Пример: 3 m × 4 m = 12 m² ≈ 129,17 ft².",
	tool_squarefeet_formula_item_3: "Дюймы: сначала каждую сторону ÷ 12. Пример: 120 in × 144 in → 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_4: "Точно: 1 ft² = 0.09290304 m², значит m² = ft² × 0.09290304 и ft² = m² ÷ 0.09290304.",
	tool_squarefeet_example_title: "Пример",
	tool_squarefeet_example:
		"Пример комнаты: 10 ft × 12 ft. Ход: 10 × 12 = 120 ft² → 120 × 0.09290304 ≈ 11,15 m². Известная площадь: 850 sq ft × 0.09290304 ≈ 78,97 m² — удобно, когда американское объявление нужно сравнить с местными объявлениями в м².",
	tool_squarefeet_usecases_title: "Когда это полезно",
	tool_squarefeet_usecase_1: "Сравнить объявление США в sq ft с местными объявлениями в м².",
	tool_squarefeet_usecase_2: "Прикинуть пол или ковёр для прямоугольной комнаты до заказа материалов (запас отдельно).",
	tool_squarefeet_usecase_3: "Перевести известную величину вроде 1000 sq ft при покупке за рубежом или чтении плана.",
	tool_squarefeet_usecase_4: "Грубо оценить краску или ремонт, когда чертежи смешивают футы и метры.",
	tool_squarefeet_faq_q1: "Отличает ли это жилую площадь от общей площади здания?",
	tool_squarefeet_faq_a1:
		"Нет. Инструмент только переводит плоскую прямоугольную площадь между единицами. Определения в объявлениях (нетто/брутто) вне его задачи.",
	tool_squarefeet_faq_q2: "Сколько квадратных метров в 1 квадратном футе?",
	tool_squarefeet_faq_a2:
		"Ровно 0.09290304 m² (NIST / SI). Поэтому 100 sq ft ≈ 9,29 m², 850 sq ft ≈ 78,97 m² и 1000 sq ft ≈ 92,90 m².",
	tool_squarefeet_faq_q3: "Как перевести квадратные футы в квадратные метры?",
	tool_squarefeet_faq_a3:
		"Умножьте на 0.09290304. Выберите площадь уже известна, введите значение в sq ft — ход расчёта покажет умножение.",
	tool_squarefeet_faq_q4: "Как найти площадь комнаты в квадратных футах?",
	tool_squarefeet_faq_a4:
		"Измерьте длину и ширину в одной единице и перемножьте. В футах: 10 × 12 = 120 sq ft. В дюймах сначала разделите каждую сторону на 12.",
	tool_squarefeet_faq_q5: "Что насчёт комнат в форме L?",
	tool_squarefeet_faq_a5:
		"Разбейте фигуру на прямоугольники, переведите каждый и сложите. Неправильные многоугольники здесь не моделируются.",
	tool_squarefeet_faq_q6: "Сколько запаса на напольное покрытие добавлять?",
	tool_squarefeet_faq_a6:
		"Калькулятор даёт только площадь пола. Многие монтажники добавляют около 5–10 % на резку и ошибки; смотрите инструкцию к материалу.",
	tool_squarefeet_faq_q7: "Можно ли оценивать стоимость жилья?",
	tool_squarefeet_faq_a7:
		"Нет. Перевод площади — это не оценка, не экспертиза и не модель цены за квадратный фут.",
	tool_squarefeet_article: "Квадратные футы",
	tool_squarefeet_disclaimer:
		"Для объявлений и планирования ремонта. Не инструмент оценки недвижимости и не определение жилой vs общей площади.",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI); Wikipedia — Square foot.",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — руководство по Международной системе единиц (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default ru;
