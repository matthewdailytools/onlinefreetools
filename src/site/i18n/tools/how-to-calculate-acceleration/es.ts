/**
 * i18n tool shard (how-to-calculate-acceleration / es).
 * Reescritura independiente para quien busca «calculadora de aceleración» / «cómo calcular la aceleración»:
 * aceleración constante a = (v − v0) ÷ t; despeja a, v, v0 o t con el proceso visible. Coma decimal (9,8).
 */
import type { SiteLangDict } from '../../../types';

/** Diccionario en español del calculador de aceleración; mismas claves que el maestro en.ts. */
const es: SiteLangDict = {
	tool_acceleration_title: "Calculadora de aceleración — a partir del cambio de velocidad",
	tool_acceleration_description:
		"Calcula la aceleración constante con la fórmula a = (v − v0) ÷ t o despeja la velocidad final, la inicial o el tiempo. Ejemplo: de 0 a 10 m/s en 2 s, a = 5 m/s². Verás el proceso con todos los pasos.",
	tool_acceleration_calculate: "Calcular",
	tool_acceleration_sample: "Cargar ejemplo",
	tool_acceleration_clear: "Borrar",
	tool_acceleration_solve_label: "Despejar",
	tool_acceleration_solve_a: "Aceleración (a)",
	tool_acceleration_solve_v: "Velocidad final (v)",
	tool_acceleration_solve_v0: "Velocidad inicial (v0)",
	tool_acceleration_solve_t: "Tiempo (t)",
	tool_acceleration_v0_label: "Velocidad inicial v0",
	tool_acceleration_v0_ph: "p. ej. 0",
	tool_acceleration_v_label: "Velocidad final v",
	tool_acceleration_v_ph: "p. ej. 10",
	tool_acceleration_t_label: "Tiempo t",
	tool_acceleration_t_ph: "p. ej. 2",
	tool_acceleration_a_label: "Aceleración a",
	tool_acceleration_a_ph: "p. ej. 5",
	tool_acceleration_accOut_label: "Aceleración",
	tool_acceleration_vOut_label: "Velocidad final",
	tool_acceleration_v0Out_label: "Velocidad inicial",
	tool_acceleration_tOut_label: "Tiempo",
	tool_acceleration_work_label: "Desarrollo",
	tool_acceleration_result_note:
		"Supone aceleración constante en línea recta. Usa unidades coherentes para velocidad y tiempo (m/s y s dan m/s²). Si las velocidades llevan el mismo signo, una a negativa indica que el móvil frena.",
	tool_acceleration_err_finite: "Escribe un número válido en cada campo visible.",
	tool_acceleration_err_time: "El tiempo debe ser mayor que 0.",
	tool_acceleration_err_zero_a: "Para despejar el tiempo la aceleración no puede ser 0 (habría una división entre cero).",
	tool_acceleration_how_title: "Cómo se calcula la aceleración",
	tool_acceleration_how_body:
		"Con aceleración constante, a es el cambio de velocidad dividido entre el tiempo: a = (v − v0) ÷ t. Eliges la magnitud que te falta, rellenas las demás y la calculadora despeja la misma fórmula.",
	tool_acceleration_how_item_1: "En Despejar, elige aceleración, velocidad final, velocidad inicial o tiempo.",
	tool_acceleration_how_item_2: "Rellena los campos que quedan visibles con un mismo sistema de unidades (el SI es lo más cómodo).",
	tool_acceleration_how_item_3: "Pulsa Calcular.",
	tool_acceleration_how_item_4: "Lee el resultado y la línea de desarrollo, por ejemplo a = (10 − 0) ÷ 2 = 5.",
	tool_acceleration_why_choose_title: "Por qué usar la Calculadora de aceleración",
	tool_acceleration_why_choose_item_1:
		"Copias el desarrollo tal cual: (v − v0) ÷ t o v = v0 + a·t aparecen con tus números, listos para el cuaderno.",
	tool_acceleration_why_choose_item_2:
		"Una sola fórmula y cuatro incógnitas: partes de los datos que trae el enunciado, no solo de la casilla de a.",
	tool_acceleration_why_choose_item_3:
		"Avisa de los casos imposibles: tiempo cero o negativo, o a = 0 cuando lo que buscas es el tiempo.",
	tool_acceleration_why_choose_item_4:
		"El modelo queda claro: movimiento rectilíneo uniformemente acelerado (MRUA), sin aceleración variable ni movimiento circular.",
	tool_acceleration_why_choose_item_5: "Todo se calcula en tu navegador; ningún dato se envía al servidor.",
	tool_acceleration_formula_title: "Fórmula de la aceleración y sus despejes",
	tool_acceleration_formula_body:
		"La definición para aceleración constante es a = (v − v0) ÷ t. Si la reordenas obtienes las otras tres incógnitas sin cambiar la física.",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t. Con el ejemplo: (10 − 0) ÷ 2 = 5.",
	tool_acceleration_formula_item_2: "v = v0 + a·t. Con el ejemplo: 0 + 5 × 2 = 10.",
	tool_acceleration_formula_item_3: "v0 = v − a·t. Con el ejemplo: 10 − 5 × 2 = 0.",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a, siempre que a ≠ 0. Con el ejemplo: (10 − 0) ÷ 5 = 2.",
	tool_acceleration_example_title: "Ejemplo resuelto",
	tool_acceleration_example:
		"Un objeto parte del reposo y llega a 10 m/s en 2 s. Despejando a: a = (10 − 0) ÷ 2 = 5 m/s². Si cambias a Velocidad final con v0 = 0, a = 5 y t = 2, obtienes v = 10: es el mismo movimiento leído al revés.",
	tool_acceleration_usecases_title: "Cuándo te sirve",
	tool_acceleration_usecase_1: "Ejercicios de física de MRUA en secundaria o bachillerato.",
	tool_acceleration_usecase_2: "Comprobar si un coche que pasa de 0 a 20 m/s en 4 s tiene de verdad una aceleración media de 5 m/s².",
	tool_acceleration_usecase_3: "Saber cuánto tarda en detenerse un vehículo que frena con desaceleración constante.",
	tool_acceleration_usecase_4: "Contrastar la solución del libro con el desarrollo paso a paso.",
	tool_acceleration_faq_q1: "¿Cómo se calcula la aceleración?",
	tool_acceleration_faq_a1:
		"Resta la velocidad inicial a la final y divide entre el tiempo: a = (v − v0) ÷ t. Si pasas de 0 a 10 m/s en 2 segundos, a = 5 m/s².",
	tool_acceleration_faq_q2: "¿En qué unidades tengo que introducir los datos?",
	tool_acceleration_faq_a2:
		"En cualquier sistema coherente. Con metros y segundos el resultado sale en m/s². Si mezclas km/h con segundos sin convertir, la cifra será incorrecta.",
	tool_acceleration_faq_q3: "¿Qué significa una aceleración negativa?",
	tool_acceleration_faq_a3:
		"Que el móvil frena (o acelera en sentido contrario al que tomaste como positivo). Si v0 = 20 y v = 10 en 2 s, a = (10 − 20) ÷ 2 = −5.",
	tool_acceleration_faq_q4: "¿Es lo mismo que la aceleración media?",
	tool_acceleration_faq_a4:
		"Sí: (v − v0) ÷ t es la aceleración media en ese intervalo. Si la aceleración es constante, coincide con la instantánea; si varía, solo obtienes el promedio. No la confundas con la velocidad media, que es distancia ÷ tiempo.",
	tool_acceleration_faq_q5: "¿La gravedad es 9,8 m/s²?",
	tool_acceleration_faq_a5:
		"Cerca de la superficie terrestre se suele usar g ≈ 9,8 m/s² como aceleración constante si se desprecia el rozamiento con el aire. En caída libre escribe a = −9,8 (tomando hacia arriba como positivo) para despejar la velocidad o el tiempo.",
	tool_acceleration_faq_q6: "¿Por qué no deja despejar el tiempo si a vale 0?",
	tool_acceleration_faq_a6:
		"Con a = 0 la velocidad no cambia, así que t = (v − v0) ÷ a no está definido. O las dos velocidades ya son iguales, o la aceleración no es cero.",
	tool_acceleration_faq_q7: "¿Sirve para el movimiento circular?",
	tool_acceleration_faq_a7:
		"No. Esta calculadora es para aceleración constante en línea recta. La aceleración centrípeta depende de la rapidez y del radio, con otra fórmula distinta.",
	tool_acceleration_article: "Aceleración",
	tool_acceleration_disclaimer:
		"Pensada para aprender y comprobar ejercicios. Supone aceleración constante en línea recta; un movimiento real puede comportarse de otra forma.",
	tool_acceleration_references: "Wikipedia — Aceleración; The Physics Hypertextbook — Equations of Motion.",
	tool_acceleration_ref_a_label: "Wikipedia — Aceleración",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion (en inglés)",
};

export default es;
