/**
 * i18n 工具分片（how-to-calculate-ohms-law / es）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_ohms_law_title: "Calculadora de la ley de Ohm — Resolver V, I o R y ver la potencia",
	tool_ohms_law_description: "Aplica la ley de Ohm para hallar tensión, corriente o resistencia y ver la potencia P=VI. Ejemplo: V=12, I=2 → R=6 Ω y P=24 W. Solo formas ideales de CC: matemática educativa en el navegador, no instrucciones de cableado ni consejos de seguridad eléctrica.",
	tool_ohms_law_article: "Elige qué resolver, introduce los otros dos valores y obtén la incógnita más la potencia con pasos.",
	tool_ohms_law_desc: "Ley de Ohm V=IR con modos para V, I o R, más potencia. Solo educativo en CC ideal.",

	tool_ohms_law_safety_banner: "Solo educativo. Aritmética ideal de la ley de Ohm en CC — no es cableado, valores nominales de productos ni consejo de seguridad eléctrica.",
	tool_ohms_law_hint: "Elige el modo y escribe los dos valores conocidos. La corriente no puede ser cero al resolver R. La resistencia debe ser mayor que cero al resolver I o V a partir de R.",
	tool_ohms_law_mode_label: "Resolver",
	tool_ohms_law_mode_r: "Resistencia R (desde V e I)",
	tool_ohms_law_mode_v: "Tensión V (desde I y R)",
	tool_ohms_law_mode_i: "Corriente I (desde V y R)",
	tool_ohms_law_V_label: "Tensión V (voltios)",
	tool_ohms_law_V_ph: "p. ej. 12",
	tool_ohms_law_I_label: "Corriente I (amperios)",
	tool_ohms_law_I_ph: "p. ej. 2",
	tool_ohms_law_R_label: "Resistencia R (ohmios)",
	tool_ohms_law_R_ph: "p. ej. 6",
	tool_ohms_law_calculate: "Calcular",
	tool_ohms_law_sample: "Cargar ejemplo",
	tool_ohms_law_clear: "Borrar",
	tool_ohms_law_primary_label: "Resultado",
	tool_ohms_law_rOut_label: "Resistencia R",
	tool_ohms_law_vOut_label: "Tensión V",
	tool_ohms_law_iOut_label: "Corriente I",
	tool_ohms_law_pOut_label: "Potencia P",
	tool_ohms_law_steps_title: "Pasos",
	tool_ohms_law_step_r_tpl: "R = V ÷ I = {v} ÷ {i} = {r} Ω.",
	tool_ohms_law_step_v_tpl: "V = I × R = {i} × {r} = {v} V.",
	tool_ohms_law_step_i_tpl: "I = V ÷ R = {v} ÷ {r} = {i} A.",
	tool_ohms_law_step_p_tpl: "P = V × I = {v} × {i} = {p} W.",
	tool_ohms_law_result_note: "Solo forma ideal de CC. Mantén unidades coherentes (V, A → Ω y W). No modela impedancia en CA ni dispositivos no óhmicos.",
	tool_ohms_law_err_generic: "Introduce valores positivos finitos en los campos conocidos. Corriente ≠ 0 al resolver R; resistencia > 0 al resolver V o I.",

	tool_ohms_law_how_title: "Cómo usar la calculadora de la ley de Ohm",
	tool_ohms_law_how_body: "Elige si quieres R, V o I. Escribe las otras dos magnitudes y calcula para ver la incógnita, la potencia y los pasos. «Cargar ejemplo» rota cada modo.",
	tool_ohms_law_how_item_1: "Selecciona el modo: R desde V e I, V desde I y R, o I desde V y R.",
	tool_ohms_law_how_item_2: "Introduce los dos valores conocidos con unidades coherentes.",
	tool_ohms_law_how_item_3: "Pulsa Calcular para ver la incógnita, la potencia y los pasos.",
	tool_ohms_law_how_item_4: "Usa Cargar ejemplo para rotar V=12/I=2, I=2/R=6 y V=12/R=6.",

	tool_ohms_law_why_choose_title: "Por qué usar la calculadora de la ley de Ohm de este sitio",
	tool_ohms_law_why_choose_item_1: "Tres modos que cubren todas las reordenaciones de V = I·R.",
	tool_ohms_law_why_choose_item_2: "La potencia P = V·I aparece junto a la incógnita.",
	tool_ohms_law_why_choose_item_3: "Líneas de pasos que sustituyen tus números en las fórmulas.",
	tool_ohms_law_why_choose_item_4: "Rotación de ejemplos para cada modo.",
	tool_ohms_law_why_choose_item_5: "Límite claro: solo CC ideal — no es consejo de cableado.",

	tool_ohms_law_formula_title: "Fórmulas de la ley de Ohm",
	tool_ohms_law_formula_body: "Para una resistencia ideal en CC, tensión, corriente y resistencia se relacionan por V = I·R. La potencia sigue de P = V·I.",
	tool_ohms_law_formula_item_1: "R = V ÷ I cuando la corriente no es cero.",
	tool_ohms_law_formula_item_2: "V = I × R.",
	tool_ohms_law_formula_item_3: "I = V ÷ R cuando la resistencia es mayor que cero.",
	tool_ohms_law_formula_item_4: "P = V × I (también P = I²R o P = V²/R en casos ideales).",
	tool_ohms_law_formula_item_5: "Esta página usa solo CC ideal — no impedancia en CA ni diseño de seguridad.",

	tool_ohms_law_example_title: "Ejemplos resueltos",
	tool_ohms_law_example: "Cargar ejemplo en modo R: V=12, I=2 → R=6 Ω, P=24 W. El modo V usa I=2, R=6 → V=12. El modo I usa V=12, R=6 → I=2.",

	tool_ohms_law_usecases_title: "Cuándo usar una calculadora de la ley de Ohm",
	tool_ohms_law_usecase_1: "Deberes de electrónica: reordenar V = I·R para la magnitud que falta.",
	tool_ohms_law_usecase_2: "Comprobación rápida en CC ideal de resistencia o potencia a partir de lecturas.",
	tool_ohms_law_usecase_3: "Comparar con páginas de densidad o velocidad para practicar unidades.",
	tool_ohms_law_usecase_4: "Ver la potencia junto a la variable resuelta sin otra herramienta.",

	tool_ohms_law_faq_q1: "¿Qué afirma la ley de Ohm?",
	tool_ohms_law_faq_a1: "Para una resistencia ideal en CC, V = I·R. Esta página también muestra P = V·I.",
	tool_ohms_law_faq_q2: "¿Puedo resolver tensión o corriente?",
	tool_ohms_law_faq_a2: "Sí. Usa el control Resolver para elegir V, I o R.",
	tool_ohms_law_faq_q3: "¿Modela circuitos de CA?",
	tool_ohms_law_faq_a3: "No. Solo formas ideales de CC — sin impedancia ni fase.",
	tool_ohms_law_faq_q4: "¿Y si la corriente es cero al resolver R?",
	tool_ohms_law_faq_a4: "R = V/I no está definida en I = 0. La página rechaza ese caso.",
	tool_ohms_law_faq_q5: "¿Es consejo de cableado o seguridad?",
	tool_ohms_law_faq_a5: "No. Solo aritmética educativa — no valores nominales ni guía de seguridad eléctrica.",

	tool_ohms_law_disclaimer: "Solo ley de Ohm educativa — no es consejo profesional, de cableado ni de seguridad eléctrica.",
	tool_ohms_law_references: "Referencias estándar de libro de texto sobre la ley de Ohm y la potencia eléctrica.",
	tool_ohms_law_ref_a_label: "Wikipedia — Ley de Ohm",
	tool_ohms_law_ref_b_label: "Wikipedia — Potencia eléctrica",
};

export default es;
