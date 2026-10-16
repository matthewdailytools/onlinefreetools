/**
 * i18n 工具分片（how-to-calculate-body-fat / es）。
 * 用美国海军围度公式估算体脂率；陆军标签与海军共用同一套 log10 方程。
 * 输入为厘米，代入前按 2.54 换成英寸。
 * 男性：86.010×log10(cintura−cuello) − 70.041×log10(estatura) + 36.387。
 * 女性：163.205×log10(cintura+cadera−cuello) − 97.684×log10(estatura) − 78.387（减去 78.387，不是加上）。
 * 样例：男 178/40/86 cm 约 15.3%；女 165/34/74/96 cm 约 26.7%。仅供学习，不是诊断。
 */
import type { SiteLangDict } from '../../../types';

/** 体脂率计算器的西班牙语文案；键与英文母版一一对应。 */
const es: SiteLangDict = {
	tool_body_fat_title: "Calculadora de grasa corporal — Estimar el porcentaje con el método Navy",
	tool_body_fat_description: "Calcular el porcentaje de grasa con la fórmula de perímetros de la Marina de EE. UU. El proceso pasa los centímetros a pulgadas antes del log10. Ejemplo: hombre, estatura 178 cm, cuello 40 cm, cintura 86 cm → unos 15.3%. Mujer, estatura 165 cm, cuello 34 cm, cintura 74 cm, cadera 96 cm → unos 26.7%. La etiqueta del Ejército usa las mismas ecuaciones. Solo educativo: no es consejo médico ni un diagnóstico.",
	tool_body_fat_article: "Con el sexo y los perímetros en centímetros basta para una estimación. En mujeres entra la cadera. Los pasos muestran cómo se pasa a pulgadas.",
	tool_body_fat_desc: "Perímetros Navy para el porcentaje de grasa; etiqueta Ejército, mismas ecuaciones; cm a pulgadas; solo educativo.",

	tool_body_fat_safety_banner: "Solo una estimación educativa. Las fórmulas de perímetros no son DXA, Bod Pod ni un diagnóstico. No es consejo médico.",
	tool_body_fat_hint: "Usa centímetros. La fórmula de mujer necesita la cadera. La cintura debe ser mayor que el cuello; en mujeres, cintura más cadera también debe ser mayor que el cuello. La etiqueta del Ejército usa las mismas ecuaciones educativas de perímetros que la Navy.",
	tool_body_fat_method_label: "Etiqueta del método",
	tool_body_fat_method_navy: "Perímetros de la Marina de EE. UU.",
	tool_body_fat_method_army: "Perímetros al estilo Ejército de EE. UU. / DoD",
	tool_body_fat_sex_label: "Sexo (elige la fórmula)",
	tool_body_fat_sex_male: "Hombre",
	tool_body_fat_sex_female: "Mujer",
	tool_body_fat_height_label: "Estatura (cm)",
	tool_body_fat_height_ph: "p. ej. 178",
	tool_body_fat_neck_label: "Perímetro de cuello (cm)",
	tool_body_fat_neck_ph: "p. ej. 40",
	tool_body_fat_waist_label: "Perímetro de cintura (cm)",
	tool_body_fat_waist_ph: "p. ej. 86",
	tool_body_fat_hip_label: "Perímetro de cadera (cm, mujer)",
	tool_body_fat_hip_ph: "p. ej. 96",
	tool_body_fat_calculate: "Calcular",
	tool_body_fat_sample: "Cargar ejemplo",
	tool_body_fat_clear: "Borrar",
	tool_body_fat_result_label: "Grasa corporal estimada",
	tool_body_fat_steps_title: "Pasos del cálculo",
	tool_body_fat_step_convert_tpl: "Pasar cm a pulgadas (÷ 2.54): estatura {hIn} in, cuello {nIn} in, cintura {wIn} in{hipPart}.",
	tool_body_fat_step_hip_part_tpl: ", cadera {hipIn} in",
	tool_body_fat_step_male_tpl: "Hombres %GC ≈ 86.010×log10(cintura−cuello) − 70.041×log10(estatura) + 36.387 = {pct}%.",
	tool_body_fat_step_female_tpl: "Mujeres %GC ≈ 163.205×log10(cintura+cadera−cuello) − 97.684×log10(estatura) − 78.387 = {pct}%.",
	tool_body_fat_result_note: "Solo una estimación educativa, no un consejo médico ni un diagnóstico. La posición de la cinta y la postura cambian el resultado.",
	tool_body_fat_err_input: "Estatura, cuello y cintura deben ser números mayores que 0.",
	tool_body_fat_err_hip: "La fórmula de mujer necesita un perímetro de cadera mayor que 0.",
	tool_body_fat_err_geom: "La cintura debe ser mayor que el cuello; en mujeres, cintura más cadera también debe ser mayor que el cuello.",

	tool_body_fat_how_title: "Cómo calcular el porcentaje de grasa corporal",
	tool_body_fat_how_body: "Elige la etiqueta Navy o Ejército, indica el sexo y los centímetros, y pulsa Calcular. Las dos etiquetas comparten la ecuación. Cargar ejemplo alterna un hombre de unos 15.3% y una mujer de unos 26.7%.",
	tool_body_fat_how_item_1: "Elegir la etiqueta y el sexo. El Ejército usa aquí la misma ecuación de perímetros que la Navy.",
	tool_body_fat_how_item_2: "Escribir estatura, cuello y cintura en centímetros; en mujer, también la cadera.",
	tool_body_fat_how_item_3: "Pulsar Calcular y leer el porcentaje junto con los pasos.",
	tool_body_fat_how_item_4: "Pulsar Cargar ejemplo: hombre 178/40/86 cm unos 15.3%, luego mujer 165/34/74/96 cm unos 26.7%.",

	tool_body_fat_why_choose_title: "Por qué usar esta calculadora de grasa corporal",
	tool_body_fat_why_choose_item_1: "Acepta centímetros y los pasa a pulgadas antes del log10.",
	tool_body_fat_why_choose_item_2: "Navy y Ejército son dos etiquetas de la misma ecuación de perímetros.",
	tool_body_fat_why_choose_item_3: "Los pasos dejan escrita la conversión y la fórmula con tus cifras.",
	tool_body_fat_why_choose_item_4: "El ejemplo rota un caso de hombre y un caso de mujer.",
	tool_body_fat_why_choose_item_5: "Junto al resultado se lee que es educativo y no un diagnóstico.",

	tool_body_fat_formula_title: "Fórmula y supuestos de medición",
	tool_body_fat_formula_body: "Hombres: %GC ≈ 86.010×log10(cintura−cuello) − 70.041×log10(estatura) + 36.387 (pulgadas). Mujeres: %GC ≈ 163.205×log10(cintura+cadera−cuello) − 97.684×log10(estatura) − 78.387.",
	tool_body_fat_formula_item_1: "Coloca la cinta en los puntos habituales Navy/DoD; la postura y la ropa cambian la lectura.",
	tool_body_fat_formula_item_2: "Entras centímetros, convertidos con 1 in = 2.54 cm antes del log10.",
	tool_body_fat_formula_item_3: "La etiqueta del Ejército usa las mismas ecuaciones educativas de perímetros que la Navy.",
	tool_body_fat_formula_item_4: "No es un resultado clínico de DXA o Bod Pod, ni un consejo médico.",
	tool_body_fat_formula_item_5: "El plicómetro pide varios puntos y una técnica entrenada; no es la misma lectura que un perímetro.",

	tool_body_fat_example_title: "Ejemplos resueltos",
	tool_body_fat_example: "Cargar ejemplo empieza con hombre, Navy: estatura 178 cm, cuello 40 cm, cintura 86 cm → unos 15.3%. El siguiente es mujer con etiqueta del Ejército y la misma ecuación: estatura 165 cm, cuello 34 cm, cintura 74 cm, cadera 96 cm → unos 26.7%.",

	tool_body_fat_usecases_title: "Cuándo usar la calculadora de grasa corporal",
	tool_body_fat_usecase_1: "En clase, practicar la fórmula Navy con números fijos y ver el log10.",
	tool_body_fat_usecase_2: "Mirar un porcentaje aproximado en un registro de entreno antes de hablar con un clínico; no es un diagnóstico.",
	tool_body_fat_usecase_3: "Comprobar que las etiquetas Navy y Ejército no cambian la ecuación.",
	tool_body_fat_usecase_4: "Ver los centímetros convertidos a pulgadas al lado del porcentaje.",

	tool_body_fat_faq_q1: "¿Qué fórmula usa el método Navy?",
	tool_body_fat_faq_a1: "Las fórmulas log10 de perímetros al estilo Marina de EE. UU. / DoD, después de pasar centímetros a pulgadas con 2.54. Hombres: 86.010×log10(cintura−cuello) − 70.041×log10(estatura) + 36.387.",
	tool_body_fat_faq_q2: "¿Esto es consejo médico?",
	tool_body_fat_faq_a2: "No. Es una estimación educativa, no un diagnóstico, un plan de tratamiento ni una prueba clínica de composición corporal.",
	tool_body_fat_faq_q3: "¿Por qué convierte a pulgadas?",
	tool_body_fat_faq_a3: "Las ecuaciones log10 publicadas están en pulgadas. Puedes medir en centímetros; la conversión usa 2.54.",
	tool_body_fat_faq_q4: "¿Navy y Ejército cambian la ecuación?",
	tool_body_fat_faq_a4: "No en esta calculadora. Las dos etiquetas usan la misma ecuación de perímetros. Dónde pones la cinta pesa más que el nombre.",
	tool_body_fat_faq_q5: "¿La cintura puede ser igual al cuello?",
	tool_body_fat_faq_a5: "No. La cintura tiene que ser mayor que el cuello. En mujeres, cintura más cadera también tiene que ser mayor que el cuello.",
	tool_body_fat_faq_q6: "¿Y el plicómetro?",
	tool_body_fat_faq_a6: "Es otra medición, en varios puntos y con técnica entrenada. Aquí solo entran perímetros. La fórmula de mujer resta 78.387: 163.205×log10(cintura+cadera−cuello) − 97.684×log10(estatura) − 78.387.",

	tool_body_fat_disclaimer: "Las estimaciones de grasa corporal son ilustraciones educativas. No son consejo médico, diagnóstico ni sustituto de una prueba clínica de composición corporal. Para decisiones de salud, consulta a un clínico cualificado.",
	tool_body_fat_references: "Ecuaciones de perímetros de la Marina de EE. UU. / DoD; notas educativas de la calculadora ACE; literatura revisada sobre el método de perímetros.",
	tool_body_fat_ref_ace_label: "ACE — Calculadora de grasa corporal (educativa)",
	tool_body_fat_ref_pmc_label: "PMC — Métodos de grasa corporal por perímetros",
};

export default es;
