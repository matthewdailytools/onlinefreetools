#!/usr/bin/env node
/**
 * 一次性生成 A5 `make-a-waveform-video-from-audio`：
 * work-tasks、catalog、SVG、十语 i18n。
 * Page.ts 由同批 Write 单独落盘。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const slug = 'make-a-waveform-video-from-audio';
const prefix = 'tool_make_a_waveform_video_from_audio';
const langs = ['en', 'zh', 'es', 'ja', 'de', 'fr', 'pt', 'id', 'ar', 'ru'];

/**
 * 确保目录存在。
 * @param {string} p 路径
 */
const mkdir = (p) => fs.mkdirSync(p, { recursive: true });

/**
 * 写文件（自动补换行）。
 * @param {string} rel 相对仓库根
 * @param {string} body 内容
 */
const write = (rel, body) => {
	const abs = path.join(root, rel);
	mkdir(path.dirname(abs));
	fs.writeFileSync(abs, body.endsWith('\n') ? body : body + '\n', 'utf8');
	console.log('wrote', rel);
};

/**
 * 转义 TS 单引号字符串。
 * @param {string} s 原文
 */
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/** @type {Record<string, Record<string, string>>} */
const byLang = {};

/** 英文母版：Rich How≥4 Why≥4 Rules≥4 FAQ≥5；诚实 WebM。 */
byLang.en = {
	title: 'Make a waveform video from audio',
	desc: 'Turn a local audio file into an audiogram-style waveform video in this tab, then download WebM. On-device only.',
	description:
		'Make a waveform video from audio in the browser: decode a local file, draw an audiogram-style waveform on canvas, record with MediaRecorder, then download. Steps: Choose audio, Make video, preview, download. Example: Load sample builds a short tone and records a moving waveform clip. Output is usually WebM—not MP4 remux, not a desktop NLE. Never uploaded.',
	article:
		'Podcast clips and voice notes often need a shareable video with a moving waveform. This page decodes local audio in AudioContext, draws peaks on a canvas, captures the canvas stream, mixes the soundtrack through a MediaStreamDestination, and records with MediaRecorder—usually WebM depending on the browser. It does not download YouTube, does not burn burned-in lyrics karaoke, and does not promise MP4 or ProRes. Success depends on decode plus MediaRecorder support. Keep the original audio; the download is a new re-encoded video. Work runs on your device.',
	choose: 'Choose an audio file',
	hint: 'Drop or choose a local WAV, MP3, M4A, OGG or similar your browser can decode. Up to 40 MiB and about 3 minutes.',
	convert: 'Make video',
	download: 'Download video',
	sample: 'Load sample',
	clear: 'Clear',
	advanced: 'Waveform video notes',
	settings_hint:
		'Browsers record canvas frames plus audio with MediaRecorder. Output is often WebM (VP8/VP9 + Opus). This is not a lossless remux and not an MP4 guarantee. No YouTube download. Colors and layout are fixed for a clear audiogram look.',
	progress: 'Waveform video progress',
	read: 'Read',
	decode: 'Decode',
	draw: 'Draw',
	write: 'Write',
	done: 'Ready. Preview the waveform video, then Download video.',
	failed: 'Could not build a waveform video. Try a shorter file your browser can decode, or Chrome/Edge.',
	elapsed: '{s}s elapsed',
	preview: 'Preview waveform video',
	result: '{seconds}s · waveform · {mime} · {output} KiB',
	sample_name: 'waveform-video-sample',
	empty: 'Choose a local audio file, or load the sample first.',
	empty_state:
		'No audio yet. Drop a local track or click Load sample. This tool draws a waveform video—it does not extract audio from video, does not trim clips alone, and does not download YouTube.',
	file_label: 'Audio: {name}',
	err_file: 'Choose one supported local audio file.',
	err_format:
		'Unsupported or undecodable audio. Use common types your browser can decode. No YouTube URLs.',
	err_limit: 'Use a local audio file up to 40 MiB and about 3 minutes.',
	err_decode: 'The browser could not decode this audio. Try another container or a shorter clip.',
	err_encoder:
		'MediaRecorder could not write a waveform video. Try Chrome/Edge or a shorter WAV/MP3.',
	how_title: 'How to make a waveform video from audio',
	how_body:
		'Choose a local audio file, run Make video, preview the audiogram-style clip, then download—without uploading.',
	how_item_1: 'Choose a local audio file (or Load sample). Do not paste YouTube links.',
	how_item_2: 'Click Make video and wait for Read → Decode → Draw → Write to finish.',
	how_item_3: 'Preview the result. You should see a moving waveform with the soundtrack.',
	how_item_4: 'Check the result line, then click Download video.',
	why_choose_title: 'Why choose our Make a waveform video from audio tools',
	why_choose_item_1: 'See duration, MIME type and output KiB before you save.',
	why_choose_item_2:
		'One clear audiogram job with honest MediaRecorder and WebM limits—not a fake MP4 remux promise.',
	why_choose_item_3:
		'Decode and recording run on your device; the page does not upload your files to process them.',
	why_choose_item_4:
		'Changing the file clears the old download so you never save a stale recording by mistake.',
	rules_title: 'Waveform video rules and honest browser limits',
	rules_body:
		'Each run decodes audio, animates a canvas waveform, and re-encodes with MediaRecorder. Output is often WebM. This is not YouTube download, not extract-audio, and not a trim-only export.',
	rules_item_1:
		'One local audio file up to 40 MiB and about three minutes. Decode must succeed first.',
	rules_item_2:
		'Output length follows the audio. Longer files may fail the limit; keep clips short for reliable recording.',
	rules_item_3: 'No YouTube, podcast URL, or remote download. Paste is not supported.',
	rules_item_4:
		'Containers and codecs are browser-chosen (often WebM). Keep originals; the download is a new re-encoded file.',
	example_title: 'Try a short tone as a waveform clip',
	example:
		'Load sample builds a short sine tone WAV, then Make video runs automatically. You should see bars move with the playhead. Playback never starts by itself—press play if you want to watch.',
	usecases_title: 'When this helps',
	usecase_1:
		'You have a podcast bite as MP3 and need a simple waveform video for social sharing.',
	usecase_2:
		'You want an audiogram-style preview from a voice memo without installing a desktop editor.',
	faq_q1: 'Can it download YouTube or paste a URL?',
	faq_a1:
		'No. Only local files you already have. There is no YouTube downloader and no remote fetch.',
	faq_q2: 'Will the output be MP4?',
	faq_a2:
		'Usually not. Most browsers record WebM via MediaRecorder. If MP4 is listed as supported, it may be used—but WebM is the common result. This is not a lossless remux.',
	faq_q3: 'Is this the same as extracting audio from a video?',
	faq_a3:
		'No. Extracting audio is a different tool. Here the input is audio and the output is a waveform video.',
	faq_q4: 'Can I trim the clip here?',
	faq_a4:
		'No dedicated trim UI. Use the related Trim an audio clip and export page first, then make a waveform video from the trimmed file.',
	faq_q5: 'Is anything uploaded to a server?',
	faq_a5:
		'No. Decode and recording run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed.',
	faq_q6: 'Why does recording fail on my browser?',
	faq_a6:
		'MediaRecorder and canvas.captureStream must be available, and the audio must decode. Try Chrome or Edge, or a shorter WAV/MP3.',
};

/** 中文：description ≥120。 */
byLang.zh = {
	...byLang.en,
	title: '从音频制作波形视频',
	desc: '在本标签页把本地音频画成唱片式波形视频并下载 WebM。处理留在设备上。',
	description:
		'在浏览器里从音频制作波形视频：解码本地文件，在画布上绘制唱片式波形，用 MediaRecorder 录制后下载。步骤：选择音频，制作视频，预览，下载。示例：加载样例会生成短音调并录成带移动波形的短片。输出多为 WebM——不是 MP4 无损封装，也不是桌面剪辑软件。文件绝不上传。',
	article:
		'播客片段和语音备忘常需要可分享的波形视频。本页用 AudioContext 解码本地音频，在画布上绘制峰值，捕获画布流，经 MediaStreamDestination 混入原声，再用 MediaRecorder 录制——按浏览器通常为 WebM。不做 YouTube 代抓，不烧录卡拉 OK 歌词，也不承诺 MP4 或 ProRes。成功取决于解码与 MediaRecorder 支持。请保留原音频；下载是新的重编码视频。全程本机处理。',
	choose: '选择音频文件',
	hint: '拖入或选择浏览器可解码的本地 WAV、MP3、M4A、OGG 等。最多约 40 MiB、约 3 分钟。',
	convert: '制作视频',
	download: '下载视频',
	sample: '加载示例',
	clear: '清空',
	advanced: '波形视频说明',
	settings_hint:
		'浏览器用 MediaRecorder 录制画布画面加音频。输出多为 WebM（VP8/VP9 + Opus）。这不是无损封装，也不保证 MP4。无 YouTube 下载。配色与版式固定为清晰的唱片式波形。',
	progress: '波形视频进度',
	read: '读取',
	decode: '解码',
	draw: '绘制',
	write: '写出',
	done: '完成。请预览波形视频后下载。',
	failed: '无法生成波形视频。请换更短、浏览器能解码的文件，或改用 Chrome/Edge。',
	elapsed: '已用时 {s} 秒',
	preview: '预览波形视频',
	result: '{seconds} 秒 · 波形 · {mime} · {output} KiB',
	sample_name: '波形视频样例',
	empty: '请先选择本地音频，或加载示例。',
	empty_state:
		'尚无音频。请拖入本地音轨或点击「加载示例」。本工具制作波形视频——不是从视频抽音、不是单独裁剪，也不下载 YouTube。',
	file_label: '音频：{name}',
	err_file: '请选择一个受支持的本地音频文件。',
	err_format: '音频不支持或无法解码。请使用浏览器可解码的常见格式。不要粘贴 YouTube 链接。',
	err_limit: '请使用不超过约 40 MiB、约 3 分钟的本地音频。',
	err_decode: '浏览器无法解码该音频。请换容器或更短的片段。',
	err_encoder: 'MediaRecorder 无法写出波形视频。请尝试 Chrome/Edge，或更短的 WAV/MP3。',
	how_title: '如何从音频制作波形视频',
	how_body: '选择本地音频，点击制作视频，预览唱片式短片后下载——无需上传。',
	how_item_1: '选择本地音频（或加载示例）。不要粘贴 YouTube 链接。',
	how_item_2: '点击「制作视频」，等待 读取 → 解码 → 绘制 → 写出。',
	how_item_3: '预览结果。应看到随播放头移动的波形并听到原声。',
	how_item_4: '核对结果行后点击「下载视频」。',
	why_choose_title: '为什么选择我们的从音频制作波形视频工具',
	why_choose_item_1: '保存前可看到时长、MIME 与输出体积。',
	why_choose_item_2: '单一清晰的唱片式波形任务，诚实说明 MediaRecorder 与 WebM 限制——不假装无损 MP4。',
	why_choose_item_3: '解码与录制在本机运行；页面不会上传你的文件去做处理。',
	why_choose_item_4: '更换文件会清除旧下载，避免误存过期成片。',
	rules_title: '波形视频规则与诚实的浏览器限制',
	rules_body:
		'每次运行会解码音频、在画布上动画波形，并用 MediaRecorder 重编码。输出多为 WebM。不是 YouTube 下载，不是抽音，也不是只做裁剪导出。',
	rules_item_1: '每次一个本地音频，最多约 40 MiB、约三分钟。须先成功解码。',
	rules_item_2: '输出时长跟随音频。过长可能触限；短片段录制更稳。',
	rules_item_3: '不支持 YouTube、播客 URL 或远程下载。不接受粘贴链接。',
	rules_item_4: '容器与编码由浏览器决定（常为 WebM）。请保留原件；下载是新的重编码文件。',
	example_title: '试用短音调波形短片',
	example:
		'「加载示例」会生成短正弦 WAV，并自动运行「制作视频」。应看到柱条随播放头移动。播放不会自动开始——若要观看请自行点播放。',
	usecases_title: '适用场景',
	usecase_1: '你有一段播客 MP3 切片，需要简单的波形视频发到社交平台。',
	usecase_2: '想用语音备忘做唱片式预览，又不想安装桌面剪辑软件。',
	faq_q1: '能下载 YouTube 或粘贴网址吗？',
	faq_a1: '不能。只能处理你已有的本地文件。没有 YouTube 下载器，也不会远程抓取。',
	faq_q2: '输出会是 MP4 吗？',
	faq_a2:
		'通常不是。多数浏览器经 MediaRecorder 录成 WebM。若浏览器声明支持 MP4 也可能选用——但 WebM 更常见。这不是无损封装。',
	faq_q3: '这和从视频提取音频一样吗？',
	faq_a3: '不一样。抽音是另一工具。这里输入是音频，输出是波形视频。',
	faq_q4: '能在这里裁剪吗？',
	faq_a4: '没有专用裁剪界面。请先用相关的「裁剪音频并导出」，再用裁好的文件做波形视频。',
	faq_q5: '会上传到服务器吗？',
	faq_a5:
		'不会。解码与录制在浏览器本机完成。首次打开页面需要网络；不保证可完全离线使用。',
	faq_q6: '为什么在我的浏览器里录制失败？',
	faq_a6:
		'需要支持 MediaRecorder 与 canvas.captureStream，且音频能解码。请试 Chrome/Edge，或更短的 WAV/MP3。',
};

/** 西班牙语。 */
byLang.es = {
	...byLang.en,
	title: 'Crear un vídeo de forma de onda desde audio',
	desc: 'Convierte un audio local en un vídeo tipo audiograma con forma de onda y descarga WebM. Solo en el dispositivo.',
	description:
		'Crea un vídeo de forma de onda desde audio en el navegador: decodifica un archivo local, dibuja una forma de onda tipo audiograma en canvas, graba con MediaRecorder y descarga. Pasos: Elige audio, Crear vídeo, vista previa, descargar. Ejemplo: Cargar muestra genera un tono corto y graba un clip con onda móvil. La salida suele ser WebM—no remux MP4 ni NLE de escritorio. Nunca se sube.',
	article:
		'Los cortes de podcast suelen necesitar un vídeo compartible con onda móvil. Esta página decodifica audio local, dibuja picos en canvas, captura el stream, mezcla el sonido y graba con MediaRecorder—suele ser WebM. No descarga YouTube ni promete MP4. Conserva el original. Todo en tu dispositivo.',
	choose: 'Elegir un archivo de audio',
	hint: 'Suelta WAV, MP3, M4A u OGG que el navegador pueda decodificar. Hasta 40 MiB y unos 3 minutos.',
	convert: 'Crear vídeo',
	download: 'Descargar vídeo',
	sample: 'Cargar muestra',
	clear: 'Borrar',
	advanced: 'Notas del vídeo de onda',
	settings_hint:
		'Los navegadores graban canvas más audio con MediaRecorder. Suele ser WebM. No es remux sin pérdida ni garantía MP4. Sin YouTube.',
	progress: 'Progreso del vídeo de onda',
	read: 'Leer',
	decode: 'Decodificar',
	draw: 'Dibujar',
	write: 'Escribir',
	done: 'Listo. Previsualiza el vídeo de onda y descarga.',
	failed: 'No se pudo crear el vídeo. Prueba un archivo más corto o Chrome/Edge.',
	elapsed: '{s}s transcurridos',
	preview: 'Vista previa del vídeo de onda',
	result: '{seconds}s · onda · {mime} · {output} KiB',
	sample_name: 'muestra-video-onda',
	empty: 'Elige un audio local o carga la muestra primero.',
	empty_state:
		'Sin audio aún. Suelta una pista local o carga la muestra. Esto dibuja un vídeo de onda—no extrae audio de vídeo ni recorta solo, ni descarga YouTube.',
	file_label: 'Audio: {name}',
	err_file: 'Elige un archivo de audio local compatible.',
	err_format: 'Audio no compatible. Usa tipos comunes. Sin URLs de YouTube.',
	err_limit: 'Usa audio local de hasta 40 MiB y unos 3 minutos.',
	err_decode: 'El navegador no pudo decodificar el audio. Prueba otro contenedor o un clip más corto.',
	err_encoder: 'MediaRecorder no pudo escribir el vídeo. Prueba Chrome/Edge o un WAV/MP3 más corto.',
	how_title: 'Cómo crear un vídeo de forma de onda desde audio',
	how_body: 'Elige audio local, crea el vídeo, previsualiza y descarga—sin subir archivos.',
	how_item_1: 'Elige un audio local (o Cargar muestra). No pegues enlaces de YouTube.',
	how_item_2: 'Pulsa Crear vídeo y espera Leer → Decodificar → Dibujar → Escribir.',
	how_item_3: 'Previsualiza. Debes ver la onda móvil con la banda sonora.',
	how_item_4: 'Revisa la línea de resultado y pulsa Descargar vídeo.',
	why_choose_title: 'Por qué elegir nuestras herramientas de vídeo de forma de onda',
	why_choose_item_1: 'Ves duración, MIME y KiB de salida antes de guardar.',
	why_choose_item_2: 'Un trabajo claro de audiograma con límites honestos de MediaRecorder/WebM.',
	why_choose_item_3: 'Decodificación y grabación en tu dispositivo; no se suben archivos.',
	why_choose_item_4: 'Cambiar el archivo borra la descarga anterior.',
	rules_title: 'Reglas del vídeo de onda y límites honestos',
	rules_body:
		'Cada ejecución decodifica, anima la onda en canvas y reencodea con MediaRecorder. Suele ser WebM. No es YouTube, ni extracción, ni solo recorte.',
	rules_item_1: 'Un audio local hasta 40 MiB y unos tres minutos. Primero debe decodificarse.',
	rules_item_2: 'La duración sigue al audio. Clips cortos graban mejor.',
	rules_item_3: 'Sin YouTube, URL de podcast ni descarga remota.',
	rules_item_4: 'Contenedor y códec los elige el navegador (a menudo WebM). Conserva originales.',
	example_title: 'Prueba un tono corto como clip de onda',
	example:
		'Cargar muestra crea un WAV de seno corto y ejecuta Crear vídeo. Verás barras con el cursor. La reproducción no arranca sola.',
	usecases_title: 'Cuándo ayuda',
	usecase_1: 'Tienes un corte de podcast en MP3 y quieres un vídeo de onda simple para redes.',
	usecase_2: 'Quieres un audiograma desde un memo de voz sin editor de escritorio.',
	faq_q1: '¿Puede descargar YouTube o pegar una URL?',
	faq_a1: 'No. Solo archivos locales. No hay descargador de YouTube.',
	faq_q2: '¿La salida será MP4?',
	faq_a2: 'Suele ser WebM vía MediaRecorder. No es remux sin pérdida.',
	faq_q3: '¿Es lo mismo que extraer audio de un vídeo?',
	faq_a3: 'No. Extraer es otra herramienta. Aquí la entrada es audio y la salida un vídeo de onda.',
	faq_q4: '¿Puedo recortar aquí?',
	faq_a4: 'No hay UI de recorte. Usa la página relacionada de recortar audio primero.',
	faq_q5: '¿Se sube algo a un servidor?',
	faq_a5: 'No. Todo corre en tu navegador. La primera carga necesita red.',
	faq_q6: '¿Por qué falla la grabación?',
	faq_a6: 'Hace falta MediaRecorder y canvas.captureStream, y que el audio se decodifique. Prueba Chrome/Edge.',
};

/** 日语。 */
byLang.ja = {
	...byLang.en,
	title: '音声から波形動画を作る',
	desc: 'ローカル音声をこのタブでオーディオグラム風の波形動画にして WebM をダウンロード。端末内のみ。',
	description:
		'ブラウザで音声から波形動画を作成：ローカルファイルをデコードし、キャンバスにオーディオグラム風波形を描き、MediaRecorder で録画してダウンロード。手順：音声を選ぶ、動画を作る、プレビュー、ダウンロード。例：サンプル読込で短いトーンを作り、動く波形クリップを録画。出力は多くが WebM—MP4 のロスレス remux でもデスクトップ NLE でもありません。アップロードしません。',
	article:
		'ポッドキャスト断片は共有用の波形動画が欲しいことがあります。本ページはローカル音声を AudioContext でデコードし、キャンバスにピークを描き、ストリームを取り込み、MediaStreamDestination で音を混ぜ、MediaRecorder で録画—多くは WebM。YouTube 取得や MP4 保証はありません。原本を保管。端末内で処理。',
	choose: '音声ファイルを選ぶ',
	hint: 'ブラウザがデコードできる WAV / MP3 / M4A / OGG など。最大約 40 MiB・約 3 分。',
	convert: '動画を作る',
	download: '動画を保存',
	sample: 'サンプルを読み込む',
	clear: 'クリア',
	advanced: '波形動画の注意',
	settings_hint:
		'ブラウザは MediaRecorder でキャンバス＋音声を録画します。多くは WebM。ロスレス remux や MP4 保証はありません。YouTube 不可。',
	progress: '波形動画の進捗',
	read: '読み取り',
	decode: 'デコード',
	draw: '描画',
	write: '書き出し',
	done: '完了。波形動画をプレビューしてから保存してください。',
	failed: '波形動画を作れませんでした。短いファイルか Chrome/Edge を試してください。',
	elapsed: '経過 {s}秒',
	preview: '波形動画のプレビュー',
	result: '{seconds}秒 · 波形 · {mime} · {output} KiB',
	sample_name: '波形動画サンプル',
	empty: '先にローカル音声を選ぶか、サンプルを読み込んでください。',
	empty_state:
		'まだ音声がありません。ローカル音源をドロップするかサンプルを読み込んでください。波形動画用—動画からの音声抽出や単体トリム、YouTube 取得ではありません。',
	file_label: '音声: {name}',
	err_file: '対応するローカル音声を 1 つ選んでください。',
	err_format: '非対応またはデコード不可。一般的な形式を。YouTube URL 不可。',
	err_limit: '約 40 MiB・約 3 分までのローカル音声にしてください。',
	err_decode: 'ブラウザがデコードできませんでした。別形式か短いクリップを。',
	err_encoder: 'MediaRecorder が波形動画を書けませんでした。Chrome/Edge か短い WAV/MP3 を。',
	how_title: '音声から波形動画を作る方法',
	how_body: 'ローカル音声を選び、動画を作り、プレビューしてダウンロード—アップロードなし。',
	how_item_1: 'ローカル音声を選ぶ（またはサンプル）。YouTube リンクは貼らない。',
	how_item_2: '「動画を作る」を押し、読み取り → デコード → 描画 → 書き出しを待つ。',
	how_item_3: 'プレビュー。再生ヘッド付きの動く波形と音が聞こえるはず。',
	how_item_4: '結果行を確認し「動画を保存」。',
	why_choose_title: 'この波形動画ツールを選ぶ理由',
	why_choose_item_1: '保存前に長さ・MIME・出力サイズを確認できます。',
	why_choose_item_2: 'MediaRecorder / WebM の限界を正直に示す単一目的のオーディオグラム。',
	why_choose_item_3: 'デコードと録画は端末内。処理のためにアップロードしません。',
	why_choose_item_4: 'ファイル変更で古いダウンロードを消し、誤保存を防ぎます。',
	rules_title: '波形動画のルールと正直なブラウザ制限',
	rules_body:
		'各実行でデコードし、キャンバス波形をアニメし、MediaRecorder で再エンコード。多くは WebM。YouTube 取得・抽出・トリム専用ではありません。',
	rules_item_1: 'ローカル音声 1 つ、最大約 40 MiB・約 3 分。先にデコード成功が必要。',
	rules_item_2: '長さは音声に従う。短いクリップの方が安定。',
	rules_item_3: 'YouTube・ポッドキャスト URL・遠隔取得は不可。',
	rules_item_4: 'コンテナとコーデックはブラウザ任せ（多く WebM）。原本を保管。',
	example_title: '短いトーンで波形クリップを試す',
	example:
		'サンプル読込で短い正弦 WAV を作り、「動画を作る」が自動実行。棒が再生ヘッドと動きます。再生は自動開始しません。',
	usecases_title: 'こんなときに',
	usecase_1: 'ポッドキャストの MP3 断片を SNS 用の簡単な波形動画にしたい。',
	usecase_2: '音声メモからオーディオグラム風プレビューをデスクトップ編集なしで作りたい。',
	faq_q1: 'YouTube をダウンロードしたり URL を貼れますか？',
	faq_a1: 'いいえ。手元のローカルファイルのみ。YouTube ダウンローダはありません。',
	faq_q2: '出力は MP4 になりますか？',
	faq_a2: '多くは MediaRecorder 経由の WebM です。ロスレス remux ではありません。',
	faq_q3: '動画から音声を抽出するのと同じですか？',
	faq_a3: '違います。抽出は別ツール。ここは入力が音声、出力が波形動画です。',
	faq_q4: 'ここでトリムできますか？',
	faq_a4: '専用トリム UI はありません。関連の「音声をトリムして書き出し」を先に使ってください。',
	faq_q5: 'サーバーにアップロードされますか？',
	faq_a5: 'いいえ。ブラウザ内で処理。初回読み込みにはネットワークが必要です。',
	faq_q6: '録画が失敗するのはなぜ？',
	faq_a6: 'MediaRecorder と canvas.captureStream、およびデコードが必要です。Chrome/Edge か短い WAV/MP3 を。',
};

/** 德语。 */
byLang.de = {
	...byLang.en,
	title: 'Ein Wellenform-Video aus Audio erstellen',
	desc: 'Lokales Audio in diesem Tab zu einem Audiogram-Wellenform-Video machen und WebM herunterladen. Nur auf dem Gerät.',
	description:
		'Erstellen Sie im Browser ein Wellenform-Video aus Audio: lokale Datei dekodieren, Audiogram-Wellenform auf Canvas zeichnen, mit MediaRecorder aufnehmen, dann herunterladen. Schritte: Audio wählen, Video erstellen, Vorschau, Download. Beispiel: Beispiel laden erzeugt einen kurzen Ton und nimmt einen Clip mit bewegter Welle auf. Ausgabe meist WebM—kein MP4-Remux, kein Desktop-NLE. Nie hochgeladen.',
	article:
		'Podcast-Ausschnitte brauchen oft ein teilbares Video mit bewegter Wellenform. Diese Seite dekodiert lokales Audio, zeichnet Peaks auf Canvas, erfasst den Stream, mischt den Soundtrack und nimmt mit MediaRecorder auf—meist WebM. Kein YouTube-Download, kein MP4-Versprechen. Original behalten. Arbeit auf dem Gerät.',
	choose: 'Audiodatei wählen',
	hint: 'WAV, MP3, M4A oder OGG, die der Browser dekodieren kann. Bis 40 MiB und etwa 3 Minuten.',
	convert: 'Video erstellen',
	download: 'Video herunterladen',
	sample: 'Beispiel laden',
	clear: 'Leeren',
	advanced: 'Hinweise zum Wellenform-Video',
	settings_hint:
		'Browser nehmen Canvas plus Audio mit MediaRecorder auf. Oft WebM. Kein verlustfreies Remux, keine MP4-Garantie. Kein YouTube.',
	progress: 'Fortschritt Wellenform-Video',
	read: 'Lesen',
	decode: 'Dekodieren',
	draw: 'Zeichnen',
	write: 'Schreiben',
	done: 'Fertig. Wellenform-Video prüfen, dann herunterladen.',
	failed: 'Wellenform-Video fehlgeschlagen. Kürzere Datei oder Chrome/Edge versuchen.',
	elapsed: '{s}s vergangen',
	preview: 'Vorschau Wellenform-Video',
	result: '{seconds}s · Welle · {mime} · {output} KiB',
	sample_name: 'wellenform-video-beispiel',
	empty: 'Zuerst lokales Audio wählen oder Beispiel laden.',
	empty_state:
		'Noch kein Audio. Lokale Spur ablegen oder Beispiel laden. Zeichnet ein Wellenform-Video—keine Audio-Extraktion, kein reines Trimmen, kein YouTube.',
	file_label: 'Audio: {name}',
	err_file: 'Eine unterstützte lokale Audiodatei wählen.',
	err_format: 'Nicht unterstützt oder nicht dekodierbar. Keine YouTube-URLs.',
	err_limit: 'Lokales Audio bis 40 MiB und etwa 3 Minuten.',
	err_decode: 'Browser konnte Audio nicht dekodieren. Anderen Container oder kürzeren Clip versuchen.',
	err_encoder: 'MediaRecorder konnte kein Video schreiben. Chrome/Edge oder kürzeres WAV/MP3.',
	how_title: 'So erstellen Sie ein Wellenform-Video aus Audio',
	how_body: 'Lokales Audio wählen, Video erstellen, Vorschau, Download—ohne Upload.',
	how_item_1: 'Lokales Audio wählen (oder Beispiel). Keine YouTube-Links einfügen.',
	how_item_2: '„Video erstellen“ und Lesen → Dekodieren → Zeichnen → Schreiben abwarten.',
	how_item_3: 'Vorschau: bewegte Wellenform mit Soundtrack.',
	how_item_4: 'Ergebniszeile prüfen, dann Video herunterladen.',
	why_choose_title: 'Warum unsere Wellenform-Video-Tools',
	why_choose_item_1: 'Dauer, MIME und KiB vor dem Speichern sichtbar.',
	why_choose_item_2: 'Klarer Audiogram-Job mit ehrlichen MediaRecorder-/WebM-Grenzen.',
	why_choose_item_3: 'Dekodieren und Aufnehmen auf dem Gerät; keine Upload-Verarbeitung.',
	why_choose_item_4: 'Dateiwechsel löscht den alten Download.',
	rules_title: 'Regeln und ehrliche Browser-Grenzen',
	rules_body:
		'Jeder Lauf dekodiert, animiert die Canvas-Welle und re-encodiert mit MediaRecorder. Oft WebM. Kein YouTube, keine Extraktion, kein reines Trim.',
	rules_item_1: 'Eine lokale Audiodatei bis 40 MiB und etwa drei Minuten. Dekodierung zuerst.',
	rules_item_2: 'Länge folgt dem Audio. Kurze Clips sind zuverlässiger.',
	rules_item_3: 'Kein YouTube, Podcast-URL oder Remote-Download.',
	rules_item_4: 'Container/Codec wählt der Browser (oft WebM). Originale behalten.',
	example_title: 'Kurzen Ton als Wellen-Clip testen',
	example:
		'Beispiel laden erzeugt kurzes Sinus-WAV und startet Video erstellen. Balken bewegen sich mit dem Playhead. Wiedergabe startet nicht von selbst.',
	usecases_title: 'Wann das hilft',
	usecase_1: 'Podcast-MP3-Schnipsel als einfaches Wellenform-Video für Social Media.',
	usecase_2: 'Audiogram-Vorschau aus Sprachnotiz ohne Desktop-Editor.',
	faq_q1: 'Kann es YouTube laden oder eine URL einfügen?',
	faq_a1: 'Nein. Nur lokale Dateien. Kein YouTube-Downloader.',
	faq_q2: 'Wird die Ausgabe MP4?',
	faq_a2: 'Meist WebM über MediaRecorder. Kein verlustfreies Remux.',
	faq_q3: 'Ist das Audio aus Video extrahieren?',
	faq_a3: 'Nein. Extraktion ist ein anderes Tool. Hier: Audio rein, Wellenform-Video raus.',
	faq_q4: 'Kann ich hier trimmen?',
	faq_a4: 'Keine Trim-UI. Zuerst die verwandte Trim-Seite nutzen.',
	faq_q5: 'Wird etwas hochgeladen?',
	faq_a5: 'Nein. Verarbeitung im Browser. Erster Seitenaufruf braucht Netz.',
	faq_q6: 'Warum schlägt die Aufnahme fehl?',
	faq_a6: 'MediaRecorder und canvas.captureStream nötig, plus Dekodierung. Chrome/Edge oder kürzeres WAV/MP3.',
};

/** 法语。 */
byLang.fr = {
	...byLang.en,
	title: 'Créer une vidéo de forme d’onde à partir d’un audio',
	desc: 'Transformez un audio local en vidéo type audiogramme avec forme d’onde, puis téléchargez du WebM. Sur l’appareil uniquement.',
	description:
		'Créez une vidéo de forme d’onde à partir d’un audio dans le navigateur : décodez un fichier local, dessinez une onde type audiogramme sur canvas, enregistrez avec MediaRecorder, puis téléchargez. Étapes : Choisir l’audio, Créer la vidéo, prévisualiser, télécharger. Exemple : Charger un échantillon crée un ton court et enregistre un clip à onde mobile. Sortie souvent WebM—pas un remux MP4 ni un NLE de bureau. Jamais téléversé.',
	article:
		'Les extraits de podcast ont souvent besoin d’une vidéo partageable avec onde mobile. Cette page décode l’audio local, dessine les pics sur canvas, capture le flux, mélange la bande son et enregistre via MediaRecorder—souvent WebM. Pas de YouTube ni de promesse MP4. Gardez l’original. Travail sur l’appareil.',
	choose: 'Choisir un fichier audio',
	hint: 'Déposez un WAV, MP3, M4A ou OGG décodable. Jusqu’à 40 MiB et environ 3 minutes.',
	convert: 'Créer la vidéo',
	download: 'Télécharger la vidéo',
	sample: 'Charger un échantillon',
	clear: 'Effacer',
	advanced: 'Notes sur la vidéo d’onde',
	settings_hint:
		'Les navigateurs enregistrent canvas + audio avec MediaRecorder. Souvent WebM. Pas de remux sans perte ni garantie MP4. Pas de YouTube.',
	progress: 'Progression de la vidéo d’onde',
	read: 'Lire',
	decode: 'Décoder',
	draw: 'Dessiner',
	write: 'Écrire',
	done: 'Prêt. Prévisualisez la vidéo d’onde, puis téléchargez.',
	failed: 'Impossible de créer la vidéo. Essayez un fichier plus court ou Chrome/Edge.',
	elapsed: '{s}s écoulées',
	preview: 'Aperçu de la vidéo d’onde',
	result: '{seconds}s · onde · {mime} · {output} KiB',
	sample_name: 'echantillon-video-onde',
	empty: 'Choisissez d’abord un audio local ou chargez l’échantillon.',
	empty_state:
		'Pas encore d’audio. Déposez une piste locale ou chargez l’échantillon. Dessine une vidéo d’onde—pas d’extraction, pas de simple découpe, pas de YouTube.',
	file_label: 'Audio : {name}',
	err_file: 'Choisissez un fichier audio local pris en charge.',
	err_format: 'Audio non pris en charge. Types courants uniquement. Pas d’URL YouTube.',
	err_limit: 'Audio local jusqu’à 40 MiB et environ 3 minutes.',
	err_decode: 'Le navigateur n’a pas pu décoder l’audio. Essayez un autre conteneur ou un clip plus court.',
	err_encoder: 'MediaRecorder n’a pas pu écrire la vidéo. Essayez Chrome/Edge ou un WAV/MP3 plus court.',
	how_title: 'Comment créer une vidéo de forme d’onde à partir d’un audio',
	how_body: 'Choisissez un audio local, créez la vidéo, prévisualisez, téléchargez—sans téléversement.',
	how_item_1: 'Choisissez un audio local (ou un échantillon). Ne collez pas de liens YouTube.',
	how_item_2: 'Cliquez sur Créer la vidéo et attendez Lire → Décoder → Dessiner → Écrire.',
	how_item_3: 'Prévisualisez. Vous devez voir l’onde mobile avec la bande son.',
	how_item_4: 'Vérifiez la ligne de résultat, puis téléchargez.',
	why_choose_title: 'Pourquoi choisir nos outils de vidéo de forme d’onde',
	why_choose_item_1: 'Durée, MIME et KiB visibles avant l’enregistrement.',
	why_choose_item_2: 'Un job audiogramme clair avec limites MediaRecorder/WebM honnêtes.',
	why_choose_item_3: 'Décodage et enregistrement sur l’appareil ; pas d’upload de traitement.',
	why_choose_item_4: 'Changer le fichier efface l’ancien téléchargement.',
	rules_title: 'Règles et limites honnêtes du navigateur',
	rules_body:
		'Chaque passage décode, anime l’onde sur canvas et ré-encode avec MediaRecorder. Souvent WebM. Pas YouTube, pas extraction, pas simple découpe.',
	rules_item_1: 'Un audio local jusqu’à 40 MiB et environ trois minutes. Décodage d’abord.',
	rules_item_2: 'La durée suit l’audio. Les clips courts sont plus fiables.',
	rules_item_3: 'Pas de YouTube, d’URL podcast ni de téléchargement distant.',
	rules_item_4: 'Conteneur/codec choisis par le navigateur (souvent WebM). Gardez les originaux.',
	example_title: 'Essayer un ton court en clip d’onde',
	example:
		'Charger un échantillon crée un WAV sinusoïdal court et lance Créer la vidéo. Les barres suivent la tête de lecture. La lecture ne démarre pas seule.',
	usecases_title: 'Quand cela aide',
	usecase_1: 'Un extrait podcast en MP3 à transformer en simple vidéo d’onde pour les réseaux.',
	usecase_2: 'Un aperçu type audiogramme depuis un mémo vocal sans éditeur bureau.',
	faq_q1: 'Peut-il télécharger YouTube ou coller une URL ?',
	faq_a1: 'Non. Fichiers locaux uniquement. Pas de téléchargeur YouTube.',
	faq_q2: 'La sortie sera-t-elle en MP4 ?',
	faq_a2: 'Souvent WebM via MediaRecorder. Pas un remux sans perte.',
	faq_q3: 'Est-ce extraire l’audio d’une vidéo ?',
	faq_a3: 'Non. L’extraction est un autre outil. Ici : audio en entrée, vidéo d’onde en sortie.',
	faq_q4: 'Puis-je découper ici ?',
	faq_a4: 'Pas d’UI de découpe. Utilisez d’abord la page liée de découpe audio.',
	faq_q5: 'Quelque chose est-il téléversé ?',
	faq_a5: 'Non. Traitement dans le navigateur. Le premier chargement nécessite le réseau.',
	faq_q6: 'Pourquoi l’enregistrement échoue-t-il ?',
	faq_a6: 'MediaRecorder et canvas.captureStream requis, plus décodage. Essayez Chrome/Edge.',
};

/** 葡萄牙语。 */
byLang.pt = {
	...byLang.en,
	title: 'Criar um vídeo de forma de onda a partir de áudio',
	desc: 'Transforme áudio local num vídeo estilo audiograma com forma de onda e descarregue WebM. Só no dispositivo.',
	description:
		'Crie um vídeo de forma de onda a partir de áudio no navegador: descodifique um ficheiro local, desenhe uma onda estilo audiograma no canvas, grave com MediaRecorder e descarregue. Passos: Escolher áudio, Criar vídeo, pré-visualizar, descarregar. Exemplo: Carregar amostra cria um tom curto e grava um clipe com onda móvel. Saída costuma ser WebM—não remux MP4 nem NLE de secretária. Nunca enviado.',
	article:
		'Recortes de podcast muitas vezes precisam de um vídeo partilhável com onda móvel. Esta página descodifica áudio local, desenha picos no canvas, captura o fluxo, mistura a banda sonora e grava com MediaRecorder—muitas vezes WebM. Sem YouTube nem promessa de MP4. Guarde o original. Trabalho no dispositivo.',
	choose: 'Escolher um ficheiro de áudio',
	hint: 'Largue WAV, MP3, M4A ou OGG que o navegador consiga descodificar. Até 40 MiB e cerca de 3 minutos.',
	convert: 'Criar vídeo',
	download: 'Descarregar vídeo',
	sample: 'Carregar amostra',
	clear: 'Limpar',
	advanced: 'Notas do vídeo de onda',
	settings_hint:
		'Os navegadores gravam canvas + áudio com MediaRecorder. Costuma ser WebM. Não é remux sem perdas nem garantia MP4. Sem YouTube.',
	progress: 'Progresso do vídeo de onda',
	read: 'Ler',
	decode: 'Descodificar',
	draw: 'Desenhar',
	write: 'Escrever',
	done: 'Pronto. Pré-visualize o vídeo de onda e descarregue.',
	failed: 'Não foi possível criar o vídeo. Tente um ficheiro mais curto ou Chrome/Edge.',
	elapsed: '{s}s decorridos',
	preview: 'Pré-visualização do vídeo de onda',
	result: '{seconds}s · onda · {mime} · {output} KiB',
	sample_name: 'amostra-video-onda',
	empty: 'Escolha primeiro um áudio local ou carregue a amostra.',
	empty_state:
		'Ainda sem áudio. Largue uma faixa local ou carregue a amostra. Desenha um vídeo de onda—não extrai áudio, não só corta, não descarrega YouTube.',
	file_label: 'Áudio: {name}',
	err_file: 'Escolha um ficheiro de áudio local suportado.',
	err_format: 'Áudio não suportado. Use tipos comuns. Sem URLs do YouTube.',
	err_limit: 'Áudio local até 40 MiB e cerca de 3 minutos.',
	err_decode: 'O navegador não conseguiu descodificar. Tente outro contentor ou um clipe mais curto.',
	err_encoder: 'MediaRecorder não conseguiu escrever o vídeo. Tente Chrome/Edge ou WAV/MP3 mais curto.',
	how_title: 'Como criar um vídeo de forma de onda a partir de áudio',
	how_body: 'Escolha áudio local, crie o vídeo, pré-visualize e descarregue—sem enviar.',
	how_item_1: 'Escolha um áudio local (ou amostra). Não cole links do YouTube.',
	how_item_2: 'Clique em Criar vídeo e aguarde Ler → Descodificar → Desenhar → Escrever.',
	how_item_3: 'Pré-visualize. Deve ver a onda móvel com a banda sonora.',
	how_item_4: 'Confira a linha de resultado e descarregue.',
	why_choose_title: 'Porquê escolher as nossas ferramentas de vídeo de onda',
	why_choose_item_1: 'Veja duração, MIME e KiB antes de guardar.',
	why_choose_item_2: 'Um trabalho claro de audiograma com limites honestos MediaRecorder/WebM.',
	why_choose_item_3: 'Descodificação e gravação no dispositivo; sem upload de processamento.',
	why_choose_item_4: 'Mudar o ficheiro limpa o download antigo.',
	rules_title: 'Regras e limites honestos do navegador',
	rules_body:
		'Cada execução descodifica, anima a onda no canvas e reencode com MediaRecorder. Costuma ser WebM. Não é YouTube, extração nem só corte.',
	rules_item_1: 'Um áudio local até 40 MiB e cerca de três minutos. Descodificação primeiro.',
	rules_item_2: 'A duração segue o áudio. Cliques curtos gravam melhor.',
	rules_item_3: 'Sem YouTube, URL de podcast ou descarga remota.',
	rules_item_4: 'Contentor/codec escolhidos pelo navegador (muitas vezes WebM). Guarde originais.',
	example_title: 'Experimente um tom curto como clipe de onda',
	example:
		'Carregar amostra cria um WAV seno curto e corre Criar vídeo. As barras seguem a cabeça de reprodução. A reprodução não começa sozinha.',
	usecases_title: 'Quando ajuda',
	usecase_1: 'Tem um pedaço de podcast em MP3 e quer um vídeo de onda simples para redes.',
	usecase_2: 'Quer um pré-visualização estilo audiograma a partir de um memo de voz sem editor de secretária.',
	faq_q1: 'Pode descarregar YouTube ou colar um URL?',
	faq_a1: 'Não. Só ficheiros locais. Sem descarregador YouTube.',
	faq_q2: 'A saída será MP4?',
	faq_a2: 'Costuma ser WebM via MediaRecorder. Não é remux sem perdas.',
	faq_q3: 'É o mesmo que extrair áudio de um vídeo?',
	faq_a3: 'Não. Extração é outra ferramenta. Aqui a entrada é áudio e a saída um vídeo de onda.',
	faq_q4: 'Posso cortar aqui?',
	faq_a4: 'Sem UI de corte. Use primeiro a página relacionada de cortar áudio.',
	faq_q5: 'Algo é enviado para um servidor?',
	faq_a5: 'Não. Processamento no navegador. A primeira carga precisa de rede.',
	faq_q6: 'Porque falha a gravação?',
	faq_a6: 'É preciso MediaRecorder e canvas.captureStream, mais descodificação. Tente Chrome/Edge.',
};

/** 印尼语。 */
byLang.id = {
	...byLang.en,
	title: 'Buat video gelombang dari audio',
	desc: 'Ubah audio lokal menjadi video gaya audiogram dengan gelombang, lalu unduh WebM. Hanya di perangkat.',
	description:
		'Buat video gelombang dari audio di browser: dekode berkas lokal, gambar gelombang gaya audiogram di canvas, rekam dengan MediaRecorder, lalu unduh. Langkah: Pilih audio, Buat video, pratayang, unduh. Contoh: Muat sampel membuat nada pendek dan merekam klip gelombang bergerak. Keluaran biasanya WebM—bukan remux MP4 atau NLE desktop. Tidak pernah diunggah.',
	article:
		'Cuplikan podcast sering butuh video yang bisa dibagikan dengan gelombang bergerak. Halaman ini mendekode audio lokal, menggambar puncak di canvas, menangkap aliran, mencampur soundtrack, dan merekam dengan MediaRecorder—sering WebM. Tanpa YouTube atau janji MP4. Simpan asli. Kerja di perangkat.',
	choose: 'Pilih berkas audio',
	hint: 'Jatuhkan WAV, MP3, M4A, atau OGG yang bisa didekode. Hingga 40 MiB dan sekitar 3 menit.',
	convert: 'Buat video',
	download: 'Unduh video',
	sample: 'Muat sampel',
	clear: 'Bersihkan',
	advanced: 'Catatan video gelombang',
	settings_hint:
		'Browser merekam canvas + audio dengan MediaRecorder. Sering WebM. Bukan remux lossless atau jaminan MP4. Tanpa YouTube.',
	progress: 'Kemajuan video gelombang',
	read: 'Baca',
	decode: 'Dekode',
	draw: 'Gambar',
	write: 'Tulis',
	done: 'Siap. Pratayang video gelombang, lalu unduh.',
	failed: 'Tidak bisa membuat video. Coba berkas lebih pendek atau Chrome/Edge.',
	elapsed: '{s}d berlalu',
	preview: 'Pratayang video gelombang',
	result: '{seconds}d · gelombang · {mime} · {output} KiB',
	sample_name: 'sampel-video-gelombang',
	empty: 'Pilih audio lokal dulu, atau muat sampel.',
	empty_state:
		'Belum ada audio. Jatuhkan trek lokal atau muat sampel. Ini menggambar video gelombang—bukan ekstrak audio, bukan hanya potong, bukan unduh YouTube.',
	file_label: 'Audio: {name}',
	err_file: 'Pilih satu berkas audio lokal yang didukung.',
	err_format: 'Audio tidak didukung. Gunakan tipe umum. Tanpa URL YouTube.',
	err_limit: 'Audio lokal hingga 40 MiB dan sekitar 3 menit.',
	err_decode: 'Browser tidak bisa mendekode audio. Coba kontainer lain atau klip lebih pendek.',
	err_encoder: 'MediaRecorder tidak bisa menulis video. Coba Chrome/Edge atau WAV/MP3 lebih pendek.',
	how_title: 'Cara membuat video gelombang dari audio',
	how_body: 'Pilih audio lokal, buat video, pratayang, unduh—tanpa mengunggah.',
	how_item_1: 'Pilih audio lokal (atau Muat sampel). Jangan tempel tautan YouTube.',
	how_item_2: 'Klik Buat video dan tunggu Baca → Dekode → Gambar → Tulis.',
	how_item_3: 'Pratayang. Anda harus melihat gelombang bergerak dengan soundtrack.',
	how_item_4: 'Periksa baris hasil, lalu Unduh video.',
	why_choose_title: 'Mengapa memilih alat video gelombang kami',
	why_choose_item_1: 'Lihat durasi, MIME, dan KiB sebelum menyimpan.',
	why_choose_item_2: 'Satu pekerjaan audiogram jelas dengan batas MediaRecorder/WebM yang jujur.',
	why_choose_item_3: 'Dekode dan rekaman di perangkat; tidak diunggah untuk diproses.',
	why_choose_item_4: 'Mengganti berkas membersihkan unduhan lama.',
	rules_title: 'Aturan dan batas browser yang jujur',
	rules_body:
		'Setiap proses mendekode, menganimasikan gelombang canvas, dan mengkode ulang dengan MediaRecorder. Sering WebM. Bukan YouTube, ekstrak, atau hanya potong.',
	rules_item_1: 'Satu audio lokal hingga 40 MiB dan sekitar tiga menit. Dekode dulu.',
	rules_item_2: 'Durasi mengikuti audio. Klip pendek lebih andal.',
	rules_item_3: 'Tanpa YouTube, URL podcast, atau unduhan jarak jauh.',
	rules_item_4: 'Kontainer/codec dipilih browser (sering WebM). Simpan asli.',
	example_title: 'Coba nada pendek sebagai klip gelombang',
	example:
		'Muat sampel membuat WAV sinus pendek lalu menjalankan Buat video. Batang bergerak dengan playhead. Pemutaran tidak mulai sendiri.',
	usecases_title: 'Kapan membantu',
	usecase_1: 'Anda punya potongan podcast MP3 dan butuh video gelombang sederhana untuk sosial.',
	usecase_2: 'Anda ingin pratayang gaya audiogram dari memo suara tanpa editor desktop.',
	faq_q1: 'Bisakah mengunduh YouTube atau menempel URL?',
	faq_a1: 'Tidak. Hanya berkas lokal. Tidak ada pengunduh YouTube.',
	faq_q2: 'Apakah keluaran akan MP4?',
	faq_a2: 'Biasanya WebM via MediaRecorder. Bukan remux lossless.',
	faq_q3: 'Apakah sama dengan mengekstrak audio dari video?',
	faq_a3: 'Tidak. Ekstraksi adalah alat lain. Di sini input audio, output video gelombang.',
	faq_q4: 'Bisakah memotong di sini?',
	faq_a4: 'Tidak ada UI potong. Gunakan dulu halaman terkait potong audio.',
	faq_q5: 'Apakah ada yang diunggah ke server?',
	faq_a5: 'Tidak. Pemrosesan di browser. Pemuatan pertama butuh jaringan.',
	faq_q6: 'Mengapa rekaman gagal?',
	faq_a6: 'Perlu MediaRecorder dan canvas.captureStream, plus dekode. Coba Chrome/Edge.',
};

/** 阿拉伯语。 */
byLang.ar = {
	...byLang.en,
	title: 'إنشاء فيديو شكل موجة من صوت',
	desc: 'حوّل ملفًا صوتيًا محليًا إلى فيديو بأسلوب مخطط سمعي مع شكل موجة ثم نزّل WebM. على الجهاز فقط.',
	description:
		'أنشئ فيديو شكل موجة من الصوت في المتصفح: فك تشفير ملف محلي، ارسم شكل موجة بأسلوب مخطط سمعي على لوحة الرسم، سجّل بـ MediaRecorder ثم نزّل. الخطوات: اختر الصوت، أنشئ الفيديو، معاينة، تنزيل. مثال: تحميل عيّنة يبني نغمة قصيرة ويسجّل مقطعًا بموجة متحركة. الناتج غالبًا WebM—ليس إعادة تغليف MP4 بلا خسارة ولا محرر سطح مكتب. لا يُرفع أبدًا.',
	article:
		'مقاطع البودكاست تحتاج غالبًا فيديو قابلًا للمشاركة بموجة متحركة. تفك هذه الصفحة تشفير الصوت المحلي، ترسم القمم، تلتقط التدفق، تمزج الصوت وتسجّل بـ MediaRecorder—غالبًا WebM. بلا يوتيوب أو وعد MP4. احتفظ بالأصل. العمل على جهازك.',
	choose: 'اختر ملفًا صوتيًا',
	hint: 'أسقط WAV أو MP3 أو M4A أو OGG يمكن للمتصفح فك تشفيره. حتى 40 ميبيبايت وحوالي 3 دقائق.',
	convert: 'إنشاء الفيديو',
	download: 'تنزيل الفيديو',
	sample: 'تحميل عيّنة',
	clear: 'مسح',
	advanced: 'ملاحظات فيديو الموجة',
	settings_hint:
		'تسجّل المتصفحات اللوحة + الصوت عبر MediaRecorder. غالبًا WebM. ليس إعادة تغليف بلا خسارة ولا ضمان MP4. بلا يوتيوب.',
	progress: 'تقدّم فيديو الموجة',
	read: 'قراءة',
	decode: 'فك التشفير',
	draw: 'رسم',
	write: 'كتابة',
	done: 'جاهز. عاين فيديو الموجة ثم نزّله.',
	failed: 'تعذّر إنشاء الفيديو. جرّب ملفًا أقصر أو Chrome/Edge.',
	elapsed: 'مرّ {s} ث',
	preview: 'معاينة فيديو الموجة',
	result: '{seconds} ث · موجة · {mime} · {output} كيبيبايت',
	sample_name: 'عيّنة-فيديو-موجة',
	empty: 'اختر صوتًا محليًا أولًا أو حمّل العيّنة.',
	empty_state:
		'لا صوت بعد. أسقط مسارًا محليًا أو حمّل العيّنة. يرسم فيديو موجة—ليس استخراج صوت ولا قصًا فقط ولا تنزيل يوتيوب.',
	file_label: 'الصوت: {name}',
	err_file: 'اختر ملفًا صوتيًا محليًا مدعومًا.',
	err_format: 'صوت غير مدعوم. أنواع شائعة فقط. بلا روابط يوتيوب.',
	err_limit: 'صوت محلي حتى 40 ميبيبايت وحوالي 3 دقائق.',
	err_decode: 'تعذّر فك التشفير. جرّب حاوية أخرى أو مقطعًا أقصر.',
	err_encoder: 'تعذّر على MediaRecorder كتابة الفيديو. جرّب Chrome/Edge أو WAV/MP3 أقصر.',
	how_title: 'كيف تنشئ فيديو شكل موجة من صوت',
	how_body: 'اختر صوتًا محليًا، أنشئ الفيديو، عاينه، نزّله—دون رفع.',
	how_item_1: 'اختر صوتًا محليًا (أو عيّنة). لا تلصق روابط يوتيوب.',
	how_item_2: 'انقر إنشاء الفيديو وانتظر قراءة ← فك تشفير ← رسم ← كتابة.',
	how_item_3: 'عاين. يجب أن ترى موجة متحركة مع المسار الصوتي.',
	how_item_4: 'راجع سطر النتيجة ثم نزّل الفيديو.',
	why_choose_title: 'لماذا تختار أدوات فيديو الموجة لدينا',
	why_choose_item_1: 'اطّلع على المدة وMIME والحجم قبل الحفظ.',
	why_choose_item_2: 'مهمة مخطط سمعي واضحة بحدود MediaRecorder/WebM صادقة.',
	why_choose_item_3: 'فك التشفير والتسجيل على جهازك؛ بلا رفع للمعالجة.',
	why_choose_item_4: 'تغيير الملف يمسح التنزيل القديم.',
	rules_title: 'قواعد وحدود المتصفح الصادقة',
	rules_body:
		'كل تشغيل يفك التشفير ويحرّك الموجة ويعيد الترميز بـ MediaRecorder. غالبًا WebM. ليس يوتيوب ولا استخراجًا ولا قصًا فقط.',
	rules_item_1: 'صوت محلي واحد حتى 40 ميبيبايت وحوالي ثلاث دقائق. فك التشفير أولًا.',
	rules_item_2: 'المدة تتبع الصوت. المقاطع القصيرة أوثق.',
	rules_item_3: 'بلا يوتيوب أو رابط بودكاست أو تنزيل عن بُعد.',
	rules_item_4: 'الحاوية والترميز باختيار المتصفح (غالبًا WebM). احتفظ بالأصول.',
	example_title: 'جرّب نغمة قصيرة كمقطع موجة',
	example:
		'تحميل عيّنة يبني WAV جيبيًا قصيرًا ثم يشغّل إنشاء الفيديو. تتحرك الأعمدة مع رأس التشغيل. التشغيل لا يبدأ وحده.',
	usecases_title: 'متى يساعد',
	usecase_1: 'لديك مقطع بودكاست MP3 وتحتاج فيديو موجة بسيطًا للشبكات.',
	usecase_2: 'تريد معاينة بأسلوب مخطط سمعي من مذكرة صوتية دون محرر سطح مكتب.',
	faq_q1: 'هل يمكن تنزيل يوتيوب أو لصق رابط؟',
	faq_a1: 'لا. ملفات محلية فقط. لا يوجد منزّل يوتيوب.',
	faq_q2: 'هل سيكون الناتج MP4؟',
	faq_a2: 'غالبًا WebM عبر MediaRecorder. ليس إعادة تغليف بلا خسارة.',
	faq_q3: 'هل هذا استخراج صوت من فيديو؟',
	faq_a3: 'لا. الاستخراج أداة أخرى. هنا الدخل صوت والخرج فيديو موجة.',
	faq_q4: 'هل يمكن القص هنا؟',
	faq_a4: 'لا واجهة قص. استخدم صفحة قص الصوت ذات الصلة أولًا.',
	faq_q5: 'هل يُرفع شيء إلى خادم؟',
	faq_a5: 'لا. المعالجة في المتصفح. التحميل الأول يحتاج شبكة.',
	faq_q6: 'لماذا يفشل التسجيل؟',
	faq_a6: 'يلزم MediaRecorder وcanvas.captureStream وفك التشفير. جرّب Chrome/Edge.',
};

/** 俄语。 */
byLang.ru = {
	...byLang.en,
	title: 'Сделать видео с формой волны из аудио',
	desc: 'Превратите локальный аудиофайл в видео в стиле аудиограммы с формой волны и скачайте WebM. Только на устройстве.',
	description:
		'Сделайте видео с формой волны из аудио в браузере: декодируйте локальный файл, нарисуйте волну в стиле аудиограммы на canvas, запишите через MediaRecorder и скачайте. Шаги: Выберите аудио, Создать видео, превью, скачать. Пример: Загрузить образец создаёт короткий тон и записывает клип с движущейся волной. Выход обычно WebM—не lossless remux MP4 и не настольный NLE. Никогда не загружается.',
	article:
		'Фрагментам подкаста часто нужно делимое видео с движущейся волной. Страница декодирует локальное аудио, рисует пики на canvas, захватывает поток, смешивает саундтрек и пишет через MediaRecorder—часто WebM. Без YouTube и без обещания MP4. Сохраните оригинал. Работа на устройстве.',
	choose: 'Выбрать аудиофайл',
	hint: 'Перетащите WAV, MP3, M4A или OGG, которые браузер может декодировать. До 40 МиБ и около 3 минут.',
	convert: 'Создать видео',
	download: 'Скачать видео',
	sample: 'Загрузить образец',
	clear: 'Очистить',
	advanced: 'Заметки о видео волны',
	settings_hint:
		'Браузеры пишут canvas + аудио через MediaRecorder. Часто WebM. Не lossless remux и не гарантия MP4. Без YouTube.',
	progress: 'Прогресс видео волны',
	read: 'Чтение',
	decode: 'Декодирование',
	draw: 'Рисование',
	write: 'Запись',
	done: 'Готово. Просмотрите видео волны, затем скачайте.',
	failed: 'Не удалось создать видео. Попробуйте более короткий файл или Chrome/Edge.',
	elapsed: 'Прошло {s} с',
	preview: 'Превью видео волны',
	result: '{seconds} с · волна · {mime} · {output} КиБ',
	sample_name: 'образец-видео-волны',
	empty: 'Сначала выберите локальное аудио или загрузите образец.',
	empty_state:
		'Пока нет аудио. Перетащите локальный трек или загрузите образец. Рисует видео волны—не извлечение, не только обрезка, не YouTube.',
	file_label: 'Аудио: {name}',
	err_file: 'Выберите один поддерживаемый локальный аудиофайл.',
	err_format: 'Неподдерживаемое аудио. Обычные типы. Без URL YouTube.',
	err_limit: 'Локальное аудио до 40 МиБ и около 3 минут.',
	err_decode: 'Браузер не смог декодировать. Попробуйте другой контейнер или более короткий клип.',
	err_encoder: 'MediaRecorder не смог записать видео. Попробуйте Chrome/Edge или более короткий WAV/MP3.',
	how_title: 'Как сделать видео с формой волны из аудио',
	how_body: 'Выберите локальное аудио, создайте видео, превью, скачайте—без загрузки на сервер.',
	how_item_1: 'Выберите локальное аудио (или образец). Не вставляйте ссылки YouTube.',
	how_item_2: 'Нажмите Создать видео и дождитесь Чтение → Декодирование → Рисование → Запись.',
	how_item_3: 'Превью. Должна быть движущаяся волна со звуком.',
	how_item_4: 'Проверьте строку результата и скачайте видео.',
	why_choose_title: 'Почему выбрать наши инструменты видео волны',
	why_choose_item_1: 'Длительность, MIME и КиБ видны до сохранения.',
	why_choose_item_2: 'Одна ясная задача аудиограммы с честными лимитами MediaRecorder/WebM.',
	why_choose_item_3: 'Декодирование и запись на устройстве; файлы не загружаются для обработки.',
	why_choose_item_4: 'Смена файла очищает старую загрузку.',
	rules_title: 'Правила и честные лимиты браузера',
	rules_body:
		'Каждый прогон декодирует, анимирует волну на canvas и перекодирует MediaRecorder. Часто WebM. Не YouTube, не извлечение, не только обрезка.',
	rules_item_1: 'Один локальный аудиофайл до 40 МиБ и около трёх минут. Сначала декодирование.',
	rules_item_2: 'Длительность следует за аудио. Короткие клипы надёжнее.',
	rules_item_3: 'Без YouTube, URL подкаста или удалённой загрузки.',
	rules_item_4: 'Контейнер/кодек выбирает браузер (часто WebM). Храните оригиналы.',
	example_title: 'Попробуйте короткий тон как клип волны',
	example:
		'Загрузить образец создаёт короткий синус WAV и запускает Создать видео. Столбики двигаются с playhead. Воспроизведение не стартует само.',
	usecases_title: 'Когда это помогает',
	usecase_1: 'Есть кусок подкаста в MP3 — нужно простое видео волны для соцсетей.',
	usecase_2: 'Нужен превью в стиле аудиограммы из голосовой заметки без десктопного редактора.',
	faq_q1: 'Можно скачать YouTube или вставить URL?',
	faq_a1: 'Нет. Только локальные файлы. Нет загрузчика YouTube.',
	faq_q2: 'Будет ли выход MP4?',
	faq_a2: 'Обычно WebM через MediaRecorder. Не lossless remux.',
	faq_q3: 'Это то же, что извлечь аудио из видео?',
	faq_a3: 'Нет. Извлечение — другой инструмент. Здесь вход аудио, выход видео волны.',
	faq_q4: 'Можно обрезать здесь?',
	faq_a4: 'Нет UI обрезки. Сначала используйте связанную страницу обрезки аудио.',
	faq_q5: 'Что-то загружается на сервер?',
	faq_a5: 'Нет. Обработка в браузере. Первая загрузка страницы нуждается в сети.',
	faq_q6: 'Почему запись не удаётся?',
	faq_a6: 'Нужны MediaRecorder и canvas.captureStream, плюс декодирование. Попробуйте Chrome/Edge.',
};

/* ---------- work-tasks ---------- */
write(
	`work-tasks/${slug}/00-request.md`,
	`# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **A5**：\`make-a-waveform-video-from-audio\`。Job: audio → waveform/audiogram-style video（canvas 画波形 + MediaRecorder webm）。related：\`extract-audio-from-a-video-file\`、\`trim-an-audio-clip-and-export\`。Local-only；Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；诚实浏览器 WebM 限制；Auto sample optional。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：\`docs/sound-editor/12-slug-hub-and-scene.md\` A5。
- 必须本地处理：是。
- YMYL：否。
- 禁止：改 docs/sound-editor/12；假装无损 MP4 remux；YouTube 代抓。

## 建议 slug

- \`make-a-waveform-video-from-audio\`
`
);

write(
	`work-tasks/${slug}/01-direction-discussion.md`,
	`# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **A5** scene：本地音频 → 画布波形动画 + MediaRecorder → 多为 WebM 下载。

## 队列位置

U2 / U3 / L2 之后；本批为 **A5**。A4 转写仅在 A5 OK 且可行时启动。

## 技术取舍

- \`decodeAudioData\` → 峰值下采样 → \`canvas.captureStream\` + \`MediaStreamDestination\` → \`MediaRecorder\`。
- 诚实 WebM / 重编码限制写入 FAQ / Rules。
- ≠ 抽音（A1）；≠ 单点裁剪（S1）；≠ YouTube。
- related：\`extract-audio-from-a-video-file\`、\`trim-an-audio-clip-and-export\`。

## 下一步

02/03 → 实现 → \`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=${slug}\`。
`
);

write(
	`work-tasks/${slug}/02-tool-info.md`,
	`# 02 — 工具信息定稿

**状态**：\`implemented\`  
**slug**：\`${slug}\`  
**路径**：\`/tools/${slug}\`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 audio to video；waveform video；audiogram；音频转视频；波形视频。常见结果为桌面剪辑、云上传或带歌词烧录的 SaaS。少有 **仅本机音频 → canvas 波形 + MediaRecorder、诚实 WebM、明确无 YouTube** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder 、https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream 、https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / A5 |
| Title (en) | Make a waveform video from audio |
| Description | Make a waveform video from audio in the browser: decode a local file, draw an audiogram-style waveform on canvas, record with MediaRecorder, then download. Steps: Choose audio, Make video, preview, download. Example: Load sample builds a short tone and records a moving waveform clip. Output is usually WebM—not MP4 remux, not a desktop NLE. Never uploaded. |
| page.style | \`opts\` |
| 技术 | decodeAudioData → canvas waveform + captureStream + MediaStreamDestination → MediaRecorder（多为 WebM） |
| related | extract-audio-from-a-video-file；trim-an-audio-clip-and-export |
| Schema | WebApplication + BreadcrumbList |
| FAQ | YouTube no；WebM honesty；≠ extract；≠ trim；privacy；encoder |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 播客切片发社交 | 选 MP3 → Make video → Download | WebM 波形成片 |
| 语音备忘预览 | 选 WAV → 录波形 | 短 audiogram |
| 样例验管线 | Load sample | 自动生成短片 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 \`${slug}\`（hub A5 草稿 slug） |
| 主检索词 → title/H1 | waveform video / audio to video / audiogram → Make a waveform video from audio |
| 次要关键词 → desc / FAQ | 音频转视频；波形视频 → desc；YouTube / extract / trim → FAQ 拒绝或划界 |
| 用户搜索习惯判断 | 搜「波形视频 / audiogram」者要本地音频变可分享成片，非代抓、非只抽音 |
| 优化摘要 | H1 任务句；FAQ anti-YouTube / ≠ A1 / ≠ S1；诚实 WebM |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| waveform video / audiogram / audio to video | absorb 主词 | H1 / How | 本页 |
| 音频转视频 / 波形视频 / 唱片可视化 | absorb 中文 | zh H1 / FAQ | 本页 |
| make audiogram from mp3 / waveform animation | absorb 次词 | desc / Use cases | 本页 |
| youtube download / youtube to mp4 | 有意不满足 | FAQ | 本页拒绝 |
| extract audio from video | 相邻（A1） | FAQ / related | extract-audio-from-a-video-file |
| trim audio clip | 相邻（S1） | FAQ / related | trim-an-audio-clip-and-export |
| burn lyrics karaoke video | 有意不满足 | FAQ / Rules | 本页不做烧词 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：本地音频 → 波形视频；诚实 MediaRecorder/WebM；拒 YouTube |
| 主词搜索者任务 | 选音频、录波形成片、预览、下载 |
| 满足之处 | dropzone、HUD、样例、十语 Rich |
| 超出 / 应划边界 | 不做 YouTube；不做抽音（A1）；不做专用裁剪（S1）；不承诺 MP4 remux / 烧词 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

\`description\` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 单 dropzone：音频；主按钮 Make video；Download 无产物禁用。
- HUD Read/Decode/Draw/Write；时长跟音频。
- 样例：短正弦 WAV，自动制作；不自动播放。
- \`opts\`；诚实 WebM/重编码限制。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
`
);

write(
	`work-tasks/${slug}/03-locale-briefs.md`,
	`# Locale briefs

**状态**：\`i18n-done\`
**母版语言**：en

共同边界：本机 **音频 → 画布波形 + MediaRecorder** → 下载成片（多为 WebM）。**拒绝** YouTube。≠ A1 抽音；≠ S1 裁剪。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | waveform video; audiogram; audio to video | Make a waveform video from audio | Make video / Download | FAQ WebM; ≠ extract/trim |
| zh | 波形视频；音频转视频；唱片可视化 | 从音频制作波形视频 | 制作视频 / 下载 | FAQ 无 YouTube；desc≥120 |
| es | vídeo forma de onda; audiograma | Crear un vídeo de forma de onda desde audio | Crear vídeo / Descargar | FAQ sin YouTube |
| ja | 波形動画；オーディオグラム | 音声から波形動画を作る | 動画を作る / 保存 | FAQ YouTube不可 |
| de | Wellenform-Video; Audiogramm | Ein Wellenform-Video aus Audio erstellen | Video erstellen / Herunterladen | FAQ kein YouTube |
| fr | vidéo forme d’onde; audiogramme | Créer une vidéo de forme d’onde à partir d’un audio | Créer la vidéo / Télécharger | FAQ pas YouTube |
| pt | vídeo forma de onda; audiograma | Criar um vídeo de forma de onda a partir de áudio | Criar vídeo / Baixar | FAQ sem YouTube |
| id | video gelombang; audiogram | Buat video gelombang dari audio | Buat video / Unduh | FAQ tanpa YouTube |
| ar | فيديو شكل موجة؛ مخطط سمعي | إنشاء فيديو شكل موجة من صوت | إنشاء الفيديو / تنزيل | FAQ بلا يوتيوب |
| ru | видео с формой волны; аудиограмма | Сделать видео с формой волны из аудио | Создать видео / Скачать | FAQ без YouTube |

- [x] 清单前检索覆盖已做
- [x] 同意图相关搜索词已写入 02
- [x] 用户意图审查已做
- [x] 检索覆盖已优化
- [x] 轮次 1 母版
- [x] 轮次 2 逐语重写
- [x] 轮次 3 抽查及禁词

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-09-21 | A5：本地音频→波形视频；十语 H1；anti-YouTube；related A1+S1；诚实 MediaRecorder/WebM | 02 回写；briefs-ready |
| 1b | 2026-09-21 | 母版 en：长 description、How×4 / Why×4 / Rules×4 / FAQ×6；主词 waveform video 进 H1 | en 键齐全 |
| 2b | 2026-09-21 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-21 | 抽查禁词：无 YouTube 下载承诺；占位符 {s}/{seconds}/{mime}/{output}/{name} 齐全 | i18n-done |
`
);

/* ---------- catalog ---------- */
write(
	`src/site/tool-catalog.d/${slug}.json`,
	JSON.stringify(
		{
			slug,
			path: `/tools/${slug}`,
			updatedAt: '2026-09-21T01:00:00.000Z',
			launchedAt: '2026-09-21T01:00:00.000Z',
			category: 'developer',
			primaryTopic: 'sound-editor',
			featured: false,
			ymyl: false,
			i18nKey: `${prefix}_title`,
			homeTitleKey: `${prefix}_title`,
			homeDescKey: `${prefix}_desc`,
			faqPrefix: prefix,
			related: ['extract-audio-from-a-video-file', 'trim-an-audio-clip-and-export'],
			logo: `/icons/tools/${slug}.svg`,
			page: {
				module: '../pages/makeAWaveformVideoFromAudioPage',
				export: 'renderMakeAWaveformVideoFromAudioPage',
				style: 'opts',
			},
			localProcessing: true,
			scenario: 'media',
			subject: 'video',
		},
		null,
		2
	) + '\n'
);

/* ---------- icon ---------- */
write(
	`public/icons/tools/${slug}.svg`,
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-hidden="true">
  <!-- Make waveform video from audio: film frame + waveform bars -->
  <rect width="32" height="32" rx="8" fill="#0f172a"/>
  <rect x="4" y="7" width="18" height="18" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
  <path fill="none" stroke="#7dd3fc" stroke-width="1.5" stroke-linecap="round" d="M8 16v0M10.5 12v8M13 14v4M15.5 10v12M18 13v6"/>
  <path fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-linecap="round" d="M24 11v10M27 13v6M29.5 14.5v3"/>
</svg>
`
);

/* ---------- i18n shards ---------- */
for (const lang of langs) {
	const data = byLang[lang];
	if (!data) throw new Error(`missing ${lang}`);
	const lines = [
		`import type { SiteLangDict } from '../../../types';`,
		'',
		`/**`,
		` * ${lang} copy for ${slug} (A5). Rich How≥4 Why≥4 Rules≥4 FAQ≥5; honest WebM; local-only.`,
		` */`,
		`const ${lang}: SiteLangDict = {`,
	];
	for (const [k, v] of Object.entries(data)) {
		lines.push(`  ${prefix}_${k}: '${esc(v)}',`);
	}
	lines.push('};', `export default ${lang};`, '');
	write(`src/site/i18n/tools/${slug}/${lang}.ts`, lines.join('\n'));
}

console.log('A5 artifacts (sans page) done');
