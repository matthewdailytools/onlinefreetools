/**
 * i18n tool shard (unit-converter / es).
 * Español: conversor de unidades — reescritura independiente.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_unit_converter_title: 'Conversor de unidades — Longitud / Masa / Temperatura / Área / Volumen / Velocidad',
	tool_unit_converter_description:
		'Convierte longitud, masa, temperatura, área, volumen y velocidad en una sola página con factores claros. Ejemplo: 1 milla → 1,60934 km. En el navegador; factores educativos — no es un instrumento de topografía ni un dispositivo médico.',
	tool_unit_converter_article:
		'Un hub de conversión mantiene categorías comunes en una URL para no crear una página por cada par (cm↔pulgada). Flujos de área por largo×ancho siguen en la herramienta square-feet.',
	tool_unit_converter_calculate: 'Convertir',
	tool_unit_converter_sample: 'Cargar ejemplo',
	tool_unit_converter_clear: 'Borrar',
	tool_unit_converter_value_label: 'Valor',
	tool_unit_converter_value_ph: 'p. ej. 1',
	tool_unit_converter_from_label: 'Unidad de origen',
	tool_unit_converter_to_label: 'Unidad de destino',
	tool_unit_converter_category_label: 'Categoría',
	tool_unit_converter_cat_length: 'Longitud',
	tool_unit_converter_cat_mass: 'Masa',
	tool_unit_converter_cat_temperature: 'Temperatura',
	tool_unit_converter_cat_area: 'Área',
	tool_unit_converter_cat_volume: 'Volumen',
	tool_unit_converter_cat_speed: 'Velocidad',
	tool_unit_converter_result_label: 'Resultado',
	tool_unit_converter_result_note: 'Solo conversión educativa — no es una medición certificada.',
	tool_unit_converter_err_value: 'Introduce un número finito.',
	tool_unit_converter_err_temp: 'La temperatura está por debajo del cero absoluto en la escala elegida.',
	tool_unit_converter_how_title: 'Cómo funciona',
	tool_unit_converter_how_body:
		'Elige categoría, valor y unidades de origen/destino. Las categorías viven en este hub; área por largo×ancho está en square-feet.',
	tool_unit_converter_formula_title: 'Factores y fórmulas de temperatura',
	tool_unit_converter_formula_body:
		'Las categorías lineales pasan por una unidad SI base. La temperatura usa fórmulas de escala. Supuestos:',
	tool_unit_converter_formula_item_1: 'Factores SI / usuales (p. ej. 1 mi = 1609,344 m; galón US en volumen).',
	tool_unit_converter_formula_item_2: '°C ↔ °F ↔ K: F = C×9/5+32; K = C+273,15; inversas correspondientes.',
	tool_unit_converter_formula_item_3: 'Resultados educativos, no mediciones certificadas de laboratorio.',
	tool_unit_converter_example_title: 'Ejemplo',
	tool_unit_converter_example: 'Ejemplo (longitud): 1 milla → 1,60934 km. Temperatura: 0 °C → 32 °F.',
	tool_unit_converter_usecases_title: 'Cuándo usarlo',
	tool_unit_converter_usecase_1: 'Deberes: km y millas sin una página nueva por cada par.',
	tool_unit_converter_usecase_2: 'Comprobaciones rápidas de masa o volumen al cocinar o empacar.',
	tool_unit_converter_usecase_3: 'Cambiar escalas de temperatura en notas del tiempo — no para dosis médicas.',
	tool_unit_converter_faq_q1: '¿Por qué no una página por cada par de unidades?',
	tool_unit_converter_faq_a1:
		'Cientos de URLs casi duplicadas parecen doorway. Este hub cubre pares comunes; usa square-feet para área por dimensiones.',
	tool_unit_converter_faq_q2: '¿Qué milla y galón se usan?',
	tool_unit_converter_faq_a2: 'Milla internacional (1609,344 m) y galón líquido US (3,785411784 L).',
	tool_unit_converter_faq_q3: '¿Cómo se convierte la temperatura?',
	tool_unit_converter_faq_a3: 'Vía °C: F = C×9/5+32 y K = C+273,15. Se rechazan valores bajo el cero absoluto.',
	tool_unit_converter_faq_q4: '¿Es lo mismo que square-feet?',
	tool_unit_converter_faq_a4: 'No. Aquí conviertes unidades de área; square-feet calcula área desde largo×ancho.',
	tool_unit_converter_disclaimer:
		'Los resultados son ilustraciones educativas con factores estándar. No son mediciones certificadas ni consejo de topografía, ingeniería o medicina.',
	tool_unit_converter_references: 'Relaciones SI de NIST; factores usuales; fórmulas °C/°F/K.',
	tool_unit_converter_ref_nist_label: 'NIST — Unidades SI',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default es;
