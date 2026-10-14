/**
 * i18n tool shard (square-feet / es).
 * Español: pies cuadrados ↔ metros cuadrados; largo × ancho o área conocida;
 * proceso visible y factor NIST; ejemplos con coma decimal (78,97 / 11,15 / 92,90).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_squarefeet_title: "Pies cuadrados a metros cuadrados — convierte el área de una habitación",
	tool_squarefeet_description:
		"Calcula pies cuadrados a metros cuadrados, o el área de una habitación con largo × ancho. Factor exacto: 1 ft² = 0,09290304 m² (NIST). Ejemplo: 850 sq ft ≈ 78,97 m²; habitación 10×12 ft = 120 ft² ≈ 11,15 m². El proceso y los pasos se ven en el navegador; no se sube nada al servidor.",
	tool_squarefeet_calculate: "Calcular",
	tool_squarefeet_sample: "Cargar ejemplo",
	tool_squarefeet_clear: "Borrar",
	tool_squarefeet_mode_label: "¿Qué tienes?",
	tool_squarefeet_mode_dims: "Largo y ancho de la habitación",
	tool_squarefeet_mode_area: "Ya conozco el área",
	tool_squarefeet_dim_unit_label: "Unidad de longitud",
	tool_squarefeet_unit_ft: "Pies (ft)",
	tool_squarefeet_unit_m: "Metros (m)",
	tool_squarefeet_unit_in: "Pulgadas (in)",
	tool_squarefeet_length_label: "Largo",
	tool_squarefeet_length_placeholder: "p. ej. 10",
	tool_squarefeet_width_label: "Ancho",
	tool_squarefeet_width_placeholder: "p. ej. 12",
	tool_squarefeet_area_label: "Área",
	tool_squarefeet_area_placeholder: "p. ej. 850",
	tool_squarefeet_area_unit_label: "Unidad de área",
	tool_squarefeet_unit_sqft: "Pies cuadrados (ft²)",
	tool_squarefeet_unit_sqm: "Metros cuadrados (m²)",
	tool_squarefeet_sqft_label: "Pies cuadrados",
	tool_squarefeet_sqm_label: "Metros cuadrados",
	tool_squarefeet_work_label: "Proceso",
	tool_squarefeet_result_note:
		"Redondeo a 2 decimales en pantalla. Factor exacto: 1 ft² = 0,09290304 m² (NIST / SI). Solo área plana rectangular: no distingue útil/construida ni estima precios.",
	tool_squarefeet_invalid_input: "Introduce solo números positivos.",
	tool_squarefeet_how_title: "Cómo funciona",
	tool_squarefeet_how_body:
		"Multiplica largo × ancho tras pasar ambos lados a pies, o convierte un área conocida con el factor SI exacto. Siempre obtienes ft² y m², más la línea de proceso.",
	tool_squarefeet_how_item_1:
		"Elige Largo y ancho de la habitación si mides un espacio, o Ya conozco el área si el anuncio ya indica sq ft o m².",
	tool_squarefeet_how_item_2:
		"Con dimensiones, elige pies, metros o pulgadas e introduce ambos lados en la misma unidad. Con área conocida, escribe el número y si es ft² o m².",
	tool_squarefeet_how_item_3: "Pulsa Calcular.",
	tool_squarefeet_how_item_4:
		"Lee ambas unidades y el proceso, por ejemplo 10 × 12 = 120 ft², o 850 ft² × 0,09290304 = 78,97 m².",
	tool_squarefeet_why_choose_title: "Por qué usar Pies cuadrados a metros cuadrados — convierte el área de una habitación",
	tool_squarefeet_why_choose_item_1:
		"Factor SI exacto 1 ft² = 0,09290304 m² (no 0,09 ni 0,093), alineado con NIST SP 811.",
	tool_squarefeet_why_choose_item_2:
		"Dos modos cubren lo que la gente busca: medidas de habitación y área de anuncio (850 o 1000 sq ft).",
	tool_squarefeet_why_choose_item_3:
		"El proceso se muestra: ves si las pulgadas se dividieron entre 12 o si se aplicó el factor NIST.",
	tool_squarefeet_why_choose_item_4:
		"Límite claro: no define útil frente a construida y no es un modelo de precio de vivienda.",
	tool_squarefeet_why_choose_item_5: "Todo queda en el navegador; no se sube nada al servidor.",
	tool_squarefeet_formula_title: "Fórmulas y factor de conversión",
	tool_squarefeet_formula_body:
		"El área en pies cuadrados es largo × ancho cuando ambos lados están en pies. Los metros cuadrados salen del factor exacto de abajo.",
	tool_squarefeet_formula_item_1: "Pies: A_ft² = L × W. Ejemplo: 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_2: "Metros: A_ft² = (L × W) ÷ 0,09290304. Ejemplo: 3 m × 4 m = 12 m² ≈ 129,17 ft².",
	tool_squarefeet_formula_item_3: "Pulgadas: convierte cada lado ÷ 12 primero. Ejemplo: 120 in × 144 in → 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_4: "Exacto: 1 ft² = 0,09290304 m², así m² = ft² × 0,09290304 y ft² = m² ÷ 0,09290304.",
	tool_squarefeet_example_title: "Ejemplo",
	tool_squarefeet_example:
		"Habitación de muestra: 10 ft × 12 ft. Proceso: 10 × 12 = 120 ft² → 120 × 0,09290304 ≈ 11,15 m². Área conocida: 850 sq ft × 0,09290304 ≈ 78,97 m² — útil para comparar un listing en EE. UU. con anuncios locales en m².",
	tool_squarefeet_usecases_title: "Cuándo ayuda",
	tool_squarefeet_usecase_1: "Comparar un listing en sq ft con anuncios locales en m².",
	tool_squarefeet_usecase_2: "Estimar suelo o moqueta de una habitación rectangular antes de pedir material (el desperdicio se suma aparte).",
	tool_squarefeet_usecase_3: "Convertir una cifra como 1000 sq ft (≈ 92,90 m²) al comprar en el extranjero o leer un plano.",
	tool_squarefeet_usecase_4: "Comprobaciones rápidas de pintura o reforma cuando el plano mezcla pies y metros.",
	tool_squarefeet_faq_q1: "¿Cómo paso de pies cuadrados a metros cuadrados?",
	tool_squarefeet_faq_a1:
		"Multiplica por 0,09290304. Elige Ya conozco el área, introduce el valor en sq ft y el proceso muestra la multiplicación.",
	tool_squarefeet_faq_q2: "¿Cuántos metros cuadrados es 1 pie cuadrado?",
	tool_squarefeet_faq_a2:
		"Exactamente 0,09290304 m² (NIST / SI). Así 100 sq ft ≈ 9,29 m², 850 sq ft ≈ 78,97 m² y 1000 sq ft ≈ 92,90 m².",
	tool_squarefeet_faq_q3: "¿Cómo calculo los pies cuadrados de una habitación?",
	tool_squarefeet_faq_a3:
		"Mide largo y ancho en la misma unidad y multiplica. En pies: 10 × 12 = 120 sq ft. En pulgadas, divide cada lado entre 12 primero.",
	tool_squarefeet_faq_q4: "¿Y las habitaciones en L?",
	tool_squarefeet_faq_a4:
		"Divide la forma en rectángulos, convierte cada uno y suma. Aquí no se modelan polígonos irregulares.",
	tool_squarefeet_faq_q5: "¿Distingue superficie útil de superficie construida?",
	tool_squarefeet_faq_a5:
		"No. Solo convierte el área plana rectangular entre unidades. Las definiciones de anuncio (útil/construida) quedan fuera.",
	tool_squarefeet_faq_q6: "¿Puedo usarlo para estimar el precio de una vivienda?",
	tool_squarefeet_faq_a6:
		"No. La conversión de área no es valoración, tasación ni un modelo de precio por pie cuadrado.",
	tool_squarefeet_faq_q7: "¿Cuánto desperdicio de suelo debo añadir?",
	tool_squarefeet_faq_a7:
		"La calculadora da solo el área del suelo. Muchos instaladores añaden un 5–10 % por cortes y errores; consulta la guía del material.",
	tool_squarefeet_article: "Pies cuadrados",
	tool_squarefeet_disclaimer:
		"Para anuncios y planificación de reformas. No es una herramienta de valoración ni una definición de útil frente a construida.",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI); Wikipedia — Square foot.",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Guía para el uso del Sistema Internacional de Unidades (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default es;
