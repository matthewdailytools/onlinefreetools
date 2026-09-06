/**
 * i18n tool shard (batch-checksum-release-files / es).
 * H1 sigue la búsqueda «Checksum de archivos de publicación por lote».
 */
import type { SiteLangDict } from '../../../types';

/** Español: tabla SHA-256 de assets de release y comparación SUMS. */
const es: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'Hashea una carpeta de assets de publicación en esta pestaña. Obtienes una tabla, un CSV y un SHA256SUMS — no un ZIP de los binarios. Pega una lista oficial para marcar coincidencia o diferencia. No salen del dispositivo ni se suben al servidor.',
	tool_batch_checksum_release_files_choose_files: 'Elegir archivos',
	tool_batch_checksum_release_files_chip_md5: 'También MD5',
	tool_batch_checksum_release_files_clear: 'Borrar',
	tool_batch_checksum_release_files_col_compare: 'Comparar',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'Ruta',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'Tamaño',
	tool_batch_checksum_release_files_desc:
		'Checksum de archivos de publicación por lote: tabla SHA-256, MD5 opcional, pegar SHA256SUMS, exportar CSV o SUMS; no salen del dispositivo, sin subir al servidor.',
	tool_batch_checksum_release_files_description:
		'Checksum de archivos de publicación por lote: mete los assets, hashea cada uno con SHA-256 en esta pestaña, añade MD5 si hace falta, pega una lista SHA256SUMS para comparar, exporta CSV o texto SUMS — no un ZIP de los binarios. Pasos: elige el conjunto, hashea todo, pega la lista si la tienes, exporta. Ejemplo: dos binarios de muestra rellenan dos filas SHA-256 y una columna de coincidencia. No salen del dispositivo y no se suben al servidor.',
	tool_batch_checksum_release_files_drop_hint: 'Suelta archivos de release (hasta 20). El hash queda en esta pestaña. Esta página no empaqueta los originales en ZIP.',
	tool_batch_checksum_release_files_empty: 'Añade archivos primero.',
	tool_batch_checksum_release_files_err_md5: 'La biblioteca MD5 no cargó. Prueba un navegador actual o deja MD5 apagado.',
	tool_batch_checksum_release_files_err_read: 'No se pudo leer este archivo. Omitido.',
	tool_batch_checksum_release_files_err_too_many: 'Como máximo 20 archivos. Los de más no se añadieron.',
	tool_batch_checksum_release_files_example:
		'Cargar ejemplo hashea dos binarios pequeños, rellena filas SHA-256, pega una línea SUMS del primero para que esa fila coincida, y activa CSV y SUMS.',
	tool_batch_checksum_release_files_example_title: 'Ejemplo',
	tool_batch_checksum_release_files_export_csv: 'Exportar CSV',
	tool_batch_checksum_release_files_export_sums: 'Exportar SUMS',
	tool_batch_checksum_release_files_faq_a1:
		'No. El hash ocurre en esta pestaña. No salen del dispositivo ni se suben al servidor. SHA-256 usa Web Crypto. MD5 puede cargar crypto-js desde este sitio; tus bytes siguen en la pestaña.',
	tool_batch_checksum_release_files_faq_a2:
		'No. Las exportaciones son una tabla CSV y un SHA256SUMS. Empaquetar binarios es Crear ZIP, otro trabajo.',
	tool_batch_checksum_release_files_faq_a3:
		'Hash de archivo trata un archivo o un texto. Esta página hashea un conjunto de release, compara un SHA256SUMS pegado y exporta CSV y SUMS.',
	tool_batch_checksum_release_files_faq_a4:
		'Activa También MD5. SHA-256 siempre corre. MD5 es extra para listas viejas; no hay una segunda URL.',
	tool_batch_checksum_release_files_faq_a5:
		'La columna de ruta prefiere webkitRelativePath. Nombres repetidos en la cola reciben un sufijo para que las líneas SUMS no choquen.',
	tool_batch_checksum_release_files_faq_q1: '¿Los archivos salen de mi ordenador?',
	tool_batch_checksum_release_files_faq_q2: '¿Esto mete los binarios en un ZIP?',
	tool_batch_checksum_release_files_faq_q3: '¿En qué se diferencia del Hash de archivo?',
	tool_batch_checksum_release_files_faq_q4: '¿Dónde está el MD5?',
	tool_batch_checksum_release_files_faq_q5: '¿Y si dos archivos comparten nombre?',
	tool_batch_checksum_release_files_file_count_tpl: '{n} archivos en la cola',
	tool_batch_checksum_release_files_hash_all: 'Hashear todo',
	tool_batch_checksum_release_files_how_body:
		'Mete los assets, hashea cada archivo con SHA-256, pega un SHA256SUMS si lo tienes, exporta CSV o SUMS — no un ZIP de los archivos.',
	tool_batch_checksum_release_files_how_item_1: 'Elige los binarios, instaladores o checksums que vas a publicar.',
	tool_batch_checksum_release_files_how_item_2: 'Deja SHA-256. Activa También MD5 solo si una lista antigua aún lo usa.',
	tool_batch_checksum_release_files_how_item_3: 'Pulsa Hashear todo. El progreso es por archivo. Un error de lectura omite esa fila.',
	tool_batch_checksum_release_files_how_item_4: 'Pega una lista SHA256SUMS oficial para marcar coincidencia, diferencia o falta.',
	tool_batch_checksum_release_files_how_item_5: 'Exporta CSV o SUMS cuando haya al menos un hash. ¿Solo un archivo? Usa Hash de archivo.',
	tool_batch_checksum_release_files_how_title: 'Cómo sacar el checksum del lote',
	tool_batch_checksum_release_files_md5_label: 'Calcular también MD5',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 usa Web Crypto sobre bytes leídos en trozos de 4 MiB y concatenados. La salida es tabla, CSV y SUMS, nunca un ZIP de los originales.',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 siempre corre. MD5 es optativo y carga crypto-js desde este sitio; los bytes siguen en la pestaña.',
	tool_batch_checksum_release_files_rules_item_2:
		'Las líneas SUMS siguen sha256sum de GNU: hex, dos espacios o espacio-asterisco, luego el nombre. Nombres de más en el pegado salen como faltantes.',
	tool_batch_checksum_release_files_rules_item_3:
		'Fallos de lectura omiten esa fila. Nombres duplicados en la cola reciben sufijo. Cola vacía desactiva la exportación.',
	tool_batch_checksum_release_files_rules_item_4:
		'Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_batch_checksum_release_files_rules_title: 'Qué esperar',
	tool_batch_checksum_release_files_sample: 'Cargar ejemplo',
	tool_batch_checksum_release_files_status_done: 'Lote listo: revisa la tabla y exporta CSV o SUMS.',
	tool_batch_checksum_release_files_status_hashing: 'Hasheando cada archivo de release…',
	tool_batch_checksum_release_files_status_match: 'Coincide',
	tool_batch_checksum_release_files_status_mismatch: 'No coincide',
	tool_batch_checksum_release_files_status_missing: 'Falta',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'Hasheado',
	tool_batch_checksum_release_files_status_skip: 'Omitido',
	tool_batch_checksum_release_files_summary_tpl: '{ok} hasheados · {skip} omitidos · {match} coinciden · {mismatch} no coinciden',
	tool_batch_checksum_release_files_sums_label: 'Pega SHA256SUMS para comparar',
	tool_batch_checksum_release_files_sums_placeholder: 'hex  nombre',
	tool_batch_checksum_release_files_title: 'Checksum de archivos de publicación por lote',
	tool_batch_checksum_release_files_usecase_1: 'Assets de un GitHub Release que necesitan un SHA256SUMS junto a las descargas.',
	tool_batch_checksum_release_files_usecase_2: 'Comparar archivos de un espejo con la lista de checksums de origen.',
	tool_batch_checksum_release_files_usecase_3: 'Hashear varios archivos sin empaquetar los binarios en un ZIP.',
	tool_batch_checksum_release_files_usecases_title: 'Cuándo viene bien',
	tool_batch_checksum_release_files_warn_large: 'Hay un archivo de más de 64 MB; esta pestaña puede quedarse sin memoria en esa fila.',
};

export default es;
