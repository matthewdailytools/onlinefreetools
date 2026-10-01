import type { SiteLangDict } from '../../../types';

/**
 * Español (D3 lote): varios MKV locales → MP4 AAC estéreo en ZIP.
 * Intención: convertir varios mkv a mp4, mkv a mp4 zip, sin subir al servidor.
 */
const es: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'Convertir archivos MKV a MP4 por lotes',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'Convierte varios MKV locales a MP4 con AAC estéreo en el navegador y descarga un ZIP. ~20 archivos, ~500 MiB cada uno. Sin subir al servidor.',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    'Convierte por lotes MKV locales a MP4 con AAC estéreo en tu dispositivo y baja un solo ZIP. Pasos: añade MKV → Convertir todo → Descargar ZIP. Ejemplo: Cargar ejemplo encola dos clips Matroska cortos y empaqueta ambos MP4. ~500 MiB / 2 h por archivo; hasta ~20 en cola. Si una fila falla, se omite; los aciertos siguen en un ZIP parcial. Solo archivos locales, no enlaces YouTube; no salen del dispositivo ni se suben al servidor. ¿Un solo archivo? Convertir un archivo MKV a MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    'Las carpetas de capturas suelen ser MKV y muchos editores piden MP4. Esta página usa la misma conversión AAC que la herramienta de un archivo, pero encola muchos MKV, muestra estado por fila y empaqueta los MP4 correctos en un ZIP. No extrae solo audio por lotes, no descarga URLs y no sustituye la página de un solo clip.',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'Elegir archivos MKV',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'Suelta varios .mkv locales (~500 MiB / 2 h cada uno, hasta ~20). El audio pasa a AAC estéreo. No es YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'Cola',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '{n} archivo(s) en cola',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'Convertir todo',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'Descargar ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'Cargar ejemplo',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'Borrar',
  tool_batch_convert_mkv_files_to_mp4_files_stop: 'Detener',
  tool_batch_convert_mkv_files_to_mp4_files_remove: 'Quitar',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: 'Ajustes de audio (opcional)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: 'Canales de audio',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'Estéreo (predeterminado)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'Mono',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'Calidad AAC',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: 'Menor tamaño',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'Equilibrado',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: 'Mayor calidad (predeterminado)',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    'Los valores predeterminados aplican a todos los archivos de la cola. Cambiar ajustes borra un ZIP ya terminado.',
  tool_batch_convert_mkv_files_to_mp4_files_progress: 'Progreso del lote',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'Cargar motor',
  tool_batch_convert_mkv_files_to_mp4_files_read: 'Leer',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'Decodificar',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'Codificar',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'Empaquetar ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_done:
    'Listo. Descarga el ZIP o abre la herramienta de un solo MKV si solo tienes un clip.',
  tool_batch_convert_mkv_files_to_mp4_files_failed:
    'Falló el lote. Revisa errores por fila o prueba con MKV más pequeños o menos archivos.',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: '{s} s transcurridos',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'Resultado ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_result: '{n} MP4 empaquetado(s) · ZIP {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '{ok} correctos, {fail} fallidos · ZIP {output} KiB (parcial). La descarga incluye los aciertos.',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'Añade MKV o carga el ejemplo primero.',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'Aún no hay archivos. Suelta .mkv locales (~500 MiB cada uno) o Cargar ejemplo. No es YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: 'En cola',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: 'Convirtiendo…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 listo',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: 'Fallido',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: 'Detenido',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'Suelta uno o más archivos MKV.',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: 'Archivo no admitido. En esta página solo .mkv.',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'Un archivo supera ~500 MiB / 2 h o la cola es demasiado grande para este navegador.',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'Demasiados archivos. Mantén ~20 MKV o menos por lote.',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'No se pudo abrir un archivo como Matroska o no quedó pista de vídeo/audio usable.',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'Un códec no se pudo decodificar o codificar aquí. Esa fila falla; otras pueden empaquetarse.',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: 'No se pudo escribir MP4 en una fila. Reintenta o quítala.',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'No se pudo crear el ZIP. Pulsa Convertir todo otra vez.',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'No se cargaron los MKV de ejemplo. Usa tus propios archivos.',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'No se pudo cargar el motor de conversión en este navegador.',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: 'Conversión detenida.',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'Cómo convertir varios MKV a MP4',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'Encola MKV locales, pulsa Convertir todo y luego Descargar ZIP: cada acierto es un MP4 AAC estéreo.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    'Elige varios .mkv locales (~500 MiB cada uno) o pulsa Cargar ejemplo.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    'Opcional: abre Ajustes de audio para mono o AAC más liviano (aplica a todo el lote).',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    'Pulsa Convertir todo y mira cada fila (o Detener). Las filas fallidas se omiten; el resto continúa.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    'Al terminar el progreso, Descargar ZIP. Para un solo clip, Convertir un archivo MKV a MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'Por qué usar este conversor por lotes MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    'Un ZIP de MP4 AAC sin subir una carpeta entera de Matroska a la nube.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    'Estado por fila y omisión al fallar: una pista mala no tumba todo el lote.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    'Mismo motor AAC que la página de un archivo, con límites claros — no un remux silencioso.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    'Enlace claro hacia conversión de un archivo y herramientas de extraer audio cuando ya tengas MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: 'Límites del lote MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    'Solo .mkv locales. El audio se recodifica a AAC. Límites y fallos por fila se dicen de entrada; rips enormes siguen en ffmpeg de escritorio.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    '~500 MiB / 2 h por archivo y ~20 por lote. Si te pasas, verás un mensaje claro en la página.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'Sin descarga por URL ni YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC estéreo (o mono) a propósito. E-AC-3 puede decodificarse con ayuda compartida; vídeo exótico puede fallar una fila.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    'Los MKV originales no se sobrescriben. No es extracción solo de audio por lotes — para voz, usa las páginas relacionadas.',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: 'Prueba un lote real',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'Cargar ejemplo encola dos MKV cortos del sitio; Convertir todo los empaqueta. Para pruebas serias, usa tus archivos bajo el límite.',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'Cuándo encaja',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    'Una carpeta de capturas MKV debe pasar a MP4 porque el editor rechaza Matroska.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    'Varios MKV con DDP/Atmos necesitan AAC antes de extraer audio de los MP4 resultantes.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    'Quieres un ZIP de una vez sin enviar el lote a un convertidor en la nube.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: '¿Puedo pegar URLs de YouTube?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'No. Solo archivos .mkv locales.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: '¿En qué se diferencia de Convertir un archivo MKV a MP4?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'Aquella página es un archivo y descarga MP4 directo. Esta encola muchos y baja un ZIP. Mismo motor AAC.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: '¿Y si falla un MKV?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'Esa fila muestra Fallido y se omite. Los MP4 correctos siguen en un ZIP parcial descargable.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: '¿Es solo remux (mismo códec de audio)?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'No. El audio siempre se recodifica a AAC. El vídeo se copia cuando el navegador lo permite.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: '¿Solo quiero WAV/MP3 de muchos MKV — página equivocada?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    'Para solo voz: usa extraer audio por lotes desde MKV. Aquí obtienes MP4 con vídeo en un ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: '¿Se sube mi carpeta?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    'No. La conversión ocurre en tu navegador; los archivos no salen del dispositivo ni se suben al servidor. Los scripts del motor se cargan una vez desde este sitio.',
};

export default es;
