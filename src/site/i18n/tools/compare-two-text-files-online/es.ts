/**
 * i18n shard for compare-two-text-files-online (Spanish).
 * H1 is the search task “Comparar dos archivos de texto online”; copy is rewritten for ES searchers, not an English clone.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'En esta pestaña eliges dos archivos de texto y ves altas y bajas por línea. Los archivos se quedan en tu dispositivo y no se suben a ningún servidor. Aquí no hay cajas grandes para pegar: si solo quieres pegar texto, usa «Comprobar diferencias entre dos textos».',
	tool_compare_two_text_files_online_clear: 'Borrar',
	tool_compare_two_text_files_online_compare: 'Comparar',
	tool_compare_two_text_files_online_desc:
		'Comparar dos archivos de texto online: elige dos .txt y mira el diff de archivos en el navegador, sin subir nada.',
	tool_compare_two_text_files_online_description:
		'Comparar dos archivos de texto online desde el navegador. Proceso: elige el archivo original y el revisado, se decodifican como UTF-8 (se quita el BOM), se rechazan bytes binarios y se marcan altas y bajas por línea. Los archivos se quedan en tu dispositivo y no se suben. Ejemplo: notes-a.txt frente a notes-b.txt, con solo la línea del medio distinta. Word, Excel y JSON van en otras páginas; aquí solo hay archivos de texto. También cubre comparar txt y un diff de archivos sencillo.',
	tool_compare_two_text_files_online_empty: 'Elige primero dos archivos de texto, o carga el ejemplo.',
	tool_compare_two_text_files_online_err_binary:
		'Uno de los archivos parece binario (bytes nulos). Esta página solo compara texto plano, por ejemplo .txt.',
	tool_compare_two_text_files_online_err_too_large:
		'Un archivo supera unos 1 MB. Recorta un fragmento para que la pestaña no se cuelgue.',
	tool_compare_two_text_files_online_example:
		'Cargar ejemplo enfrenta notes-a.txt (alpha / segunda línea / tercera) con notes-b.txt, donde el medio dice «línea cambiada». El modo por líneas marca solo esa. Al abrir la página ya ves ese resultado.',
	tool_compare_two_text_files_online_example_title: 'Ejemplo',
	tool_compare_two_text_files_online_faq_a1:
		'No. FileReader lee los bytes en esta pestaña. Puede cargarse jsdiff desde un CDN como librería; tus archivos no se envían a nuestros servidores.',
	tool_compare_two_text_files_online_faq_a2:
		'Se decodifica como UTF-8. Un BOM al inicio se elimina para que la primera línea no salga como cambiada solo por esa marca. Otras codificaciones pueden verse rotas: guarda primero como UTF-8.',
	tool_compare_two_text_files_online_faq_a3:
		'Si hay un byte nulo se trata como binario y se rechaza. Para eso usa un visor hexadecimal o un extractor. Word y Excel tienen sus propias páginas de comparación.',
	tool_compare_two_text_files_online_faq_a4:
		'Esta página es para .txt / .text. Quien busca comparar txt o un diff de archivos online suele querer esto. Si «comparar dos archivos» era Word o una hoja de cálculo, ve a esas páginas. Pegar dos textos sin archivos está en «Comprobar diferencias entre dos textos».',
	tool_compare_two_text_files_online_faq_q1: '¿Se suben mis archivos?',
	tool_compare_two_text_files_online_faq_q2: '¿Qué pasa con la codificación y el BOM?',
	tool_compare_two_text_files_online_faq_q3: '¿Puedo comparar binarios, Word o Excel aquí?',
	tool_compare_two_text_files_online_faq_q4: '¿Es lo mismo que comparar txt o un diff de archivos?',
	tool_compare_two_text_files_online_how_body:
		'Toma dos archivos de texto que ya tienes en disco y lee las líneas resaltadas. En la primera pantalla no hay un recuadro grande para pegar.',
	tool_compare_two_text_files_online_how_item_1: 'Elige el primer archivo de texto (exportación o copia original).',
	tool_compare_two_text_files_online_how_item_2: 'Elige el segundo archivo de texto (versión revisada).',
	tool_compare_two_text_files_online_how_item_3:
		'La comparación arranca sola cuando ambos están elegidos; Cargar ejemplo ya lo hizo al pintar la página.',
	tool_compare_two_text_files_online_how_item_4: 'Verde son altas y rojo bajas. Borrar quita ambos archivos de esta pestaña.',
	tool_compare_two_text_files_online_how_title: 'Cómo usarlo',
	tool_compare_two_text_files_online_label_a: 'Primer archivo de texto',
	tool_compare_two_text_files_online_label_b: 'Segundo archivo de texto',
	tool_compare_two_text_files_online_legend: 'Verde = añadido · Rojo = eliminado',
	tool_compare_two_text_files_online_load_sample: 'Cargar ejemplo',
	tool_compare_two_text_files_online_need_lib: 'No se pudo cargar el comparador. Revisa la red y recarga.',
	tool_compare_two_text_files_online_no_diff: 'Sin diferencias: los dos archivos coinciden como texto.',
	tool_compare_two_text_files_online_result_label: 'Diferencias por línea',
	tool_compare_two_text_files_online_rules_body:
		'Tras decodificar UTF-8 se hace un diff por líneas. Codificación, BOM y binario se revisan antes de pintar.',
	tool_compare_two_text_files_online_rules_item_1:
		'Cada archivo se lee con FileReader / ArrayBuffer y se decodifica como UTF-8. Un BOM UTF-8 al inicio se recorta para no fingir un cambio en la primera línea.',
	tool_compare_two_text_files_online_rules_item_2:
		'Un byte nulo se toma como binario y se rechaza. Esto no es un volcado hexadecimal.',
	tool_compare_two_text_files_online_rules_item_3:
		'El diff es por líneas (jsdiff diffLines). Si cambia una sola palabra, suele marcarse la línea entera.',
	tool_compare_two_text_files_online_rules_item_4:
		'No hay recuadro de pegado en la primera pantalla. Para pegar dos textos sin archivos usa «Comprobar diferencias entre dos textos».',
	tool_compare_two_text_files_online_rules_title: 'Qué esperar del comparador',
	tool_compare_two_text_files_online_sample_a: 'alpha\nsegunda línea\ntercera',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\nlínea cambiada\ntercera',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '{added} añadidas, {removed} eliminadas',
	tool_compare_two_text_files_online_title: 'Comparar dos archivos de texto online',
	tool_compare_two_text_files_online_usecase_1:
		'Exportaciones: confrontar el log.txt de ayer con el de hoy sin pegar decenas de miles de líneas.',
	tool_compare_two_text_files_online_usecase_2:
		'Copias de configuración: dos instantáneas .env o .txt del disco, línea a línea.',
	tool_compare_two_text_files_online_usecase_3:
		'Tareas: dos .txt de un trabajo cuando necesitas ver qué líneas cambiaron.',
	tool_compare_two_text_files_online_usecases_title: 'Para qué sirve',
};

export default es;
