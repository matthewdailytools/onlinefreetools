/**
 * One-shot generator for ten PDF scene tools (catalog shards, i18n, icons).
 * Run: node scripts/tmp/generate-pdf-scene-tools.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const launched = '2026-09-03T14:00:00.000Z';
const updated = '2026-09-03T14:00:00.000Z';
const langs = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];
const iconSrc = path.join(root, 'public/icons/tools/pdf-to-markdown.svg');

/** @typedef {{ slug: string, prefix: string, h1: string, task: string, related: string[], sampleText: string, extraUi?: Record<string,string> }} ToolDef */

/** @type {ToolDef[]} */
const TOOLS = [
	{
		slug: 'extract-text-from-pdf',
		prefix: 'extract_text_from_pdf',
		h1: 'Extract text from a PDF',
		task: 'pdf.js text extract; copy or download .txt',
		related: ['pdf-to-markdown', 'merge-pdf'],
		sampleText: 'Hello extract text sample.',
	},
	{
		slug: 'open-pdf-in-browser',
		prefix: 'open_pdf_in_browser',
		h1: 'Open a PDF in the browser',
		task: 'pdf.js canvas viewer with page navigation',
		related: ['print-pdf', 'pdf-to-jpg'],
		sampleText: 'Hello browser viewer sample.',
	},
	{
		slug: 'print-pdf',
		prefix: 'print_pdf',
		h1: 'Print a PDF',
		task: 'embed pdf.js viewer and open the browser print dialog',
		related: ['open-pdf-in-browser', 'compress-pdf'],
		sampleText: 'Hello print sample.',
	},
	{
		slug: 'write-pdf-document-online',
		prefix: 'write_pdf_document_online',
		h1: 'Write a PDF document online',
		task: 'type in a textarea and build a multi-page PDF with pdf-lib',
		related: ['add-text-to-pdf-file', 'convert-html-to-pdf'],
		sampleText: 'Hello write PDF sample.\n\nSecond paragraph on page one.',
	},
	{
		slug: 'compare-two-pdfs',
		prefix: 'compare_two_pdfs',
		h1: 'Compare two PDFs',
		task: 'extract text from both files and highlight differences with jsdiff',
		related: ['text-diff', 'extract-text-from-pdf'],
		sampleText: 'Version A text.',
		extraUi: { sampleTextB: 'Version B text.' },
	},
	{
		slug: 'check-pdf-a-compliance',
		prefix: 'check_pdf_a_compliance',
		h1: 'Check PDF/A compliance',
		task: 'client-side rule checks for version, linearization, metadata, and font refs',
		related: ['convert-pdf-to-pdf-a', 'compress-pdf'],
		sampleText: 'PDF/A check sample.',
	},
	{
		slug: 'combine-files-into-one-pdf',
		prefix: 'combine_files_into_one_pdf',
		h1: 'Combine files into one PDF',
		task: 'queue images and PDFs then merge into one download',
		related: ['merge-pdf', 'images-to-pdf'],
		sampleText: 'Combine sample.',
	},
	{
		slug: 'add-text-to-pdf-file',
		prefix: 'add_text_to_pdf_file',
		h1: 'Add text to a PDF file',
		task: 'pdf-lib drawText at X/Y on each page',
		related: ['pdf-watermark', 'write-pdf-document-online'],
		sampleText: 'CONFIDENTIAL',
	},
	{
		slug: 'convert-html-to-pdf',
		prefix: 'convert_html_to_pdf',
		h1: 'Convert HTML to PDF',
		task: 'paste HTML and export a PDF with html2pdf.js',
		related: ['markdown-to-html', 'write-pdf-document-online'],
		sampleText: '<h1>Hello HTML</h1><p>Sample paragraph for PDF export.</p>',
	},
	{
		slug: 'make-pdf-flipbook',
		prefix: 'make_pdf_flipbook',
		h1: 'Make a PDF flipbook',
		task: 'pdf.js renders pages into a CSS flipbook with prev/next',
		related: ['open-pdf-in-browser', 'pdf-to-jpg'],
		sampleText: 'Flipbook page one.',
	},
];

/** Common UI labels per language. */
const COMMON = {
	en: {
		choose: 'Choose a PDF',
		chooseMulti: 'Choose files',
		drop: 'Or drop here. Processing stays in this tab.',
		download: 'Download',
		sample: 'Load sample',
		clear: 'Clear',
		privacy: 'Files stay on your device; not uploaded to a server.',
		howTitle: 'How it works',
		rulesTitle: 'Rules you should expect',
		exampleTitle: 'Example',
		useTitle: 'Good fits',
		faqUpload: 'Is my file uploaded?',
		faqUploadA:
			'No. Rendering runs in your tab (libraries may load from a CDN). Your PDF is not uploaded to our servers.',
	},
	zh: {
		choose: '选择 PDF',
		chooseMulti: '选择文件',
		drop: '或拖放到此处。处理在本标签页完成。',
		download: '下载',
		sample: '加载样例',
		clear: '清空',
		privacy: '文件留在本机，不上传服务器。',
		howTitle: '使用方法',
		rulesTitle: '规则与边界',
		exampleTitle: '示例',
		useTitle: '适用场景',
		faqUpload: '会上传服务器吗？',
		faqUploadA: '不会。渲染在浏览器标签页完成（库可能从 CDN 加载），PDF 不会上传到我们的服务器。',
	},
	es: {
		choose: 'Elegir PDF',
		chooseMulti: 'Elegir archivos',
		drop: 'O suéltalo aquí. El procesamiento ocurre en esta pestaña.',
		download: 'Descargar',
		sample: 'Cargar ejemplo',
		clear: 'Borrar',
		privacy: 'Los archivos permanecen en tu dispositivo; no se suben al servidor.',
		howTitle: 'Cómo funciona',
		rulesTitle: 'Reglas y límites',
		exampleTitle: 'Ejemplo',
		useTitle: 'Casos de uso',
		faqUpload: '¿Se sube mi archivo?',
		faqUploadA:
			'No. El renderizado ocurre en tu pestaña (las bibliotecas pueden cargarse desde un CDN). Tu PDF no se sube a nuestros servidores.',
	},
	ar: {
		choose: 'اختر PDF',
		chooseMulti: 'اختر ملفات',
		drop: 'أو أسقط الملف هنا. المعالجة في هذا التبويب.',
		download: 'تنزيل',
		sample: 'تحميل مثال',
		clear: 'مسح',
		privacy: 'تبقى الملفات على جهازك دون رفع إلى خادم.',
		howTitle: 'كيف يعمل',
		rulesTitle: 'القواعد والحدود',
		exampleTitle: 'مثال',
		useTitle: 'حالات مناسبة',
		faqUpload: 'هل يُرفع ملفي؟',
		faqUploadA: 'لا. العرض يعمل في تبويبك (قد تُحمَّل المكتبات من CDN). ملفك لا يُرفع إلى خوادمنا.',
	},
	pt: {
		choose: 'Escolher PDF',
		chooseMulti: 'Escolher arquivos',
		drop: 'Ou solte aqui. O processamento fica nesta aba.',
		download: 'Baixar',
		sample: 'Carregar exemplo',
		clear: 'Limpar',
		privacy: 'Os arquivos ficam no dispositivo; sem envio ao servidor.',
		howTitle: 'Como funciona',
		rulesTitle: 'Regras e limites',
		exampleTitle: 'Exemplo',
		useTitle: 'Boas opções',
		faqUpload: 'Meu arquivo é enviado?',
		faqUploadA:
			'Não. A renderização ocorre na sua aba (bibliotecas podem vir de CDN). Seu PDF não é enviado aos nossos servidores.',
	},
	id: {
		choose: 'Pilih PDF',
		chooseMulti: 'Pilih berkas',
		drop: 'Atau jatuhkan di sini. Pemrosesan di tab ini.',
		download: 'Unduh',
		sample: 'Muat contoh',
		clear: 'Hapus',
		privacy: 'Berkas tetap di perangkat; tanpa unggah ke server.',
		howTitle: 'Cara kerja',
		rulesTitle: 'Aturan dan batas',
		exampleTitle: 'Contoh',
		useTitle: 'Cocok untuk',
		faqUpload: 'Apakah berkas saya diunggah?',
		faqUploadA:
			'Tidak. Render berjalan di tab Anda (pustaka mungkin dari CDN). PDF Anda tidak diunggah ke server kami.',
	},
	fr: {
		choose: 'Choisir un PDF',
		chooseMulti: 'Choisir des fichiers',
		drop: 'Ou déposez ici. Le traitement reste dans cet onglet.',
		download: 'Télécharger',
		sample: 'Charger un exemple',
		clear: 'Effacer',
		privacy: 'Les fichiers restent sur l’appareil ; sans envoi au serveur.',
		howTitle: 'Fonctionnement',
		rulesTitle: 'Règles et limites',
		exampleTitle: 'Exemple',
		useTitle: 'Bonnes utilisations',
		faqUpload: 'Mon fichier est-il envoyé ?',
		faqUploadA:
			'Non. Le rendu s’exécute dans votre onglet (bibliothèques éventuellement via CDN). Votre PDF n’est pas envoyé à nos serveurs.',
	},
	ja: {
		choose: 'PDF を選択',
		chooseMulti: 'ファイルを選択',
		drop: 'ここにドロップ。処理はこのタブ内で行われます。',
		download: 'ダウンロード',
		sample: 'サンプルを読み込む',
		clear: 'クリア',
		privacy: 'ファイルは端末内に留まり、サーバーにアップロードしません。',
		howTitle: '使い方',
		rulesTitle: 'ルールと制限',
		exampleTitle: '例',
		useTitle: '向いている用途',
		faqUpload: 'ファイルはアップロードされますか？',
		faqUploadA:
			'いいえ。レンダリングはタブ内で行われます（ライブラリは CDN から読み込まれる場合があります）。PDF は当社サーバーに送られません。',
	},
	ru: {
		choose: 'Выбрать PDF',
		chooseMulti: 'Выбрать файлы',
		drop: 'Или перетащите сюда. Обработка в этой вкладке.',
		download: 'Скачать',
		sample: 'Загрузить пример',
		clear: 'Очистить',
		privacy: 'Файлы остаются на устройстве; без загрузки на сервер.',
		howTitle: 'Как это работает',
		rulesTitle: 'Правила и ограничения',
		exampleTitle: 'Пример',
		useTitle: 'Подходит для',
		faqUpload: 'Загружается ли мой файл?',
		faqUploadA:
			'Нет. Рендеринг в вашей вкладке (библиотеки могут грузиться с CDN). PDF не отправляется на наши серверы.',
	},
	de: {
		choose: 'PDF wählen',
		chooseMulti: 'Dateien wählen',
		drop: 'Oder hier ablegen. Verarbeitung bleibt in diesem Tab.',
		download: 'Herunterladen',
		clear: 'Leeren',
		sample: 'Beispiel laden',
		privacy: 'Dateien bleiben auf Ihrem Gerät; ohne Server-Upload.',
		howTitle: 'So funktioniert es',
		rulesTitle: 'Regeln und Grenzen',
		exampleTitle: 'Beispiel',
		useTitle: 'Gute Einsätze',
		faqUpload: 'Wird meine Datei hochgeladen?',
		faqUploadA:
			'Nein. Das Rendering läuft in Ihrem Tab (Bibliotheken ggf. per CDN). Ihr PDF wird nicht auf unsere Server hochgeladen.',
	},
};

/**
 * Localized H1 per tool and language.
 * @param {ToolDef} tool
 * @param {string} lang
 */
function localizedTitle(tool, lang) {
	const map = {
		'extract-text-from-pdf': {
			zh: '从 PDF 提取文本',
			es: 'Extraer texto de un PDF',
			ar: 'استخراج نص من PDF',
			pt: 'Extrair texto de um PDF',
			id: 'Ekstrak teks dari PDF',
			fr: 'Extraire le texte d’un PDF',
			ja: 'PDF からテキストを抽出',
			ru: 'Извлечь текст из PDF',
			de: 'Text aus PDF extrahieren',
		},
		'open-pdf-in-browser': {
			zh: '在浏览器中打开 PDF',
			es: 'Abrir un PDF en el navegador',
			ar: 'فتح PDF في المتصفح',
			pt: 'Abrir PDF no navegador',
			id: 'Buka PDF di browser',
			fr: 'Ouvrir un PDF dans le navigateur',
			ja: 'ブラウザで PDF を開く',
			ru: 'Открыть PDF в браузере',
			de: 'PDF im Browser öffnen',
		},
		'print-pdf': {
			zh: '打印 PDF',
			es: 'Imprimir un PDF',
			ar: 'طباعة PDF',
			pt: 'Imprimir PDF',
			id: 'Cetak PDF',
			fr: 'Imprimer un PDF',
			ja: 'PDF を印刷',
			ru: 'Распечатать PDF',
			de: 'PDF drucken',
		},
		'write-pdf-document-online': {
			zh: '在线编写 PDF 文档',
			es: 'Escribir un documento PDF en línea',
			ar: 'كتابة مستند PDF عبر الإنترنت',
			pt: 'Escrever documento PDF online',
			id: 'Tulis dokumen PDF online',
			fr: 'Rédiger un document PDF en ligne',
			ja: 'オンラインで PDF 文書を作成',
			ru: 'Написать PDF-документ онлайн',
			de: 'PDF-Dokument online schreiben',
		},
		'compare-two-pdfs': {
			zh: '对比两个 PDF',
			es: 'Comparar dos PDF',
			ar: 'مقارنة ملفي PDF',
			pt: 'Comparar dois PDFs',
			id: 'Bandingkan dua PDF',
			fr: 'Comparer deux PDF',
			ja: '2 つの PDF を比較',
			ru: 'Сравнить два PDF',
			de: 'Zwei PDFs vergleichen',
		},
		'check-pdf-a-compliance': {
			zh: '检查 PDF/A 合规性',
			es: 'Comprobar cumplimiento PDF/A',
			ar: 'فحص توافق PDF/A',
			pt: 'Verificar conformidade PDF/A',
			id: 'Periksa kepatuhan PDF/A',
			fr: 'Vérifier la conformité PDF/A',
			ja: 'PDF/A 準拠を確認',
			ru: 'Проверить соответствие PDF/A',
			de: 'PDF/A-Konformität prüfen',
		},
		'combine-files-into-one-pdf': {
			zh: '将文件合并为一个 PDF',
			es: 'Combinar archivos en un PDF',
			ar: 'دمج ملفات في PDF واحد',
			pt: 'Combinar arquivos em um PDF',
			id: 'Gabungkan berkas jadi satu PDF',
			fr: 'Combiner des fichiers en un PDF',
			ja: 'ファイルを1つの PDF に結合',
			ru: 'Объединить файлы в один PDF',
			de: 'Dateien zu einem PDF kombinieren',
		},
		'add-text-to-pdf-file': {
			zh: '向 PDF 文件添加文字',
			es: 'Añadir texto a un PDF',
			ar: 'إضافة نص إلى ملف PDF',
			pt: 'Adicionar texto a um PDF',
			id: 'Tambahkan teks ke PDF',
			fr: 'Ajouter du texte à un PDF',
			ja: 'PDF にテキストを追加',
			ru: 'Добавить текст в PDF',
			de: 'Text zu PDF hinzufügen',
		},
		'convert-html-to-pdf': {
			zh: '将 HTML 转换为 PDF',
			es: 'Convertir HTML a PDF',
			ar: 'تحويل HTML إلى PDF',
			pt: 'Converter HTML para PDF',
			id: 'Konversi HTML ke PDF',
			fr: 'Convertir HTML en PDF',
			ja: 'HTML を PDF に変換',
			ru: 'Конвертировать HTML в PDF',
			de: 'HTML in PDF umwandeln',
		},
		'make-pdf-flipbook': {
			zh: '制作 PDF 翻页书',
			es: 'Crear flipbook de PDF',
			ar: 'إنشاء كتاب PDF تفاعلي',
			pt: 'Criar flipbook de PDF',
			id: 'Buat flipbook PDF',
			fr: 'Créer un flipbook PDF',
			ja: 'PDF フリップブックを作成',
			ru: 'Сделать PDF-флипбук',
			de: 'PDF-Flipbook erstellen',
		},
	};
	if (lang === 'en') return tool.h1;
	return map[tool.slug]?.[lang] || tool.h1;
}

/**
 * Build i18n key map for one tool and language.
 * @param {ToolDef} tool
 * @param {string} lang
 */
function buildKeys(tool, lang) {
	const p = `tool_${tool.prefix}`;
	const c = COMMON[lang];
	const title = localizedTitle(tool, lang);
	const descShort =
		lang === 'en'
			? `${tool.h1} in your browser — ${tool.task.split(';')[0]}. ${c.privacy}`
			: `${title} — ${c.privacy}`;
	const description =
		lang === 'en'
			? `${tool.h1} in your browser: ${tool.task}. ${c.privacy} Load sample on entry shows a real result. Encrypted or damaged files show a clear error.`
			: `${title}. ${c.privacy} El ejemplo al entrar muestra un resultado real.`.replace(
					'muestra',
					lang === 'zh'
						? '进页样例会显示真实结果。'
						: lang === 'es'
							? 'muestra'
							: lang === 'ja'
								? '入場時のサンプルで実結果を表示。'
								: lang === 'de'
									? 'Beim Laden wird ein echtes Ergebnis gezeigt.'
									: lang === 'fr'
										? 'affiche un résultat réel à l’ouverture.'
										: lang === 'ru'
											? 'показывает реальный результат при загрузке.'
											: lang === 'ar'
												? 'يعرض نتيجة حقيقية عند الدخول.'
												: lang === 'pt'
													? 'mostra resultado real ao abrir.'
													: lang === 'id'
														? 'menampilkan hasil nyata saat masuk.'
														: 'shows a real result on load.'
				);

	const keys = {
		[`${p}_article`]: `${title}. ${c.privacy}`,
		[`${p}_choose_file`]: c.choose,
		[`${p}_choose_files`]: c.chooseMulti,
		[`${p}_clear`]: c.clear,
		[`${p}_desc`]: descShort,
		[`${p}_description`]: description,
		[`${p}_download`]: c.download,
		[`${p}_drop_hint`]: c.drop,
		[`${p}_empty`]:
			lang === 'zh' ? '请先选择文件。' : lang === 'ja' ? '先にファイルを選択してください。' : 'Choose a file first.',
		[`${p}_err_convert`]:
			lang === 'zh' ? '处理失败，请重试。' : lang === 'ja' ? '処理に失敗しました。' : 'Processing failed. Retry.',
		[`${p}_err_encrypted`]:
			lang === 'zh'
				? 'PDF 似乎有密码，请先解锁。'
				: lang === 'ja'
					? 'PDF にパスワードがある可能性があります。'
					: 'This PDF looks password-protected. Unlock it first.',
		[`${p}_err_load`]:
			lang === 'zh' ? '无法读取文件。' : lang === 'ja' ? 'ファイルを読めません。' : 'Could not read the file.',
		[`${p}_err_notext`]:
			lang === 'zh'
				? '未找到可选中文本（无 OCR）。'
				: lang === 'ja'
					? '選択可能なテキストがありません（OCR なし）。'
					: 'No selectable text found (no OCR).',
		[`${p}_err_pdfjs`]:
			lang === 'zh'
				? 'PDF 渲染库加载失败。'
				: lang === 'ja'
					? 'PDF レンダラー読み込み失敗。'
					: 'PDF renderer failed to load.',
		[`${p}_example`]:
			lang === 'en'
				? `Load sample builds a one-page PDF, runs the main action, and shows the expected output for "${tool.sampleText.slice(0, 40)}".`
				: `${c.sample}: ${tool.sampleText.slice(0, 40)}`,
		[`${p}_example_title`]: c.exampleTitle,
		[`${p}_faq_a1`]: c.faqUploadA,
		[`${p}_faq_a2`]:
			lang === 'zh'
				? '扫描版 PDF 通常是图片，没有文本层，本工具不做 OCR。'
				: 'Scanned PDFs are images without a text layer; this tool does not OCR.',
		[`${p}_faq_a3`]:
			lang === 'zh'
				? '加密或损坏的文件会显示明确错误，不会静默失败。'
				: 'Encrypted or damaged files show a clear error instead of failing silently.',
		[`${p}_faq_a4`]:
			lang === 'zh'
				? '相关 PDF 工具在页面底部 Related 区列出，可跳转邻页。'
				: 'Related PDF tools are listed at the bottom of the page.',
		[`${p}_faq_a5`]:
			lang === 'zh'
				? '大文件可能较慢；建议先在桌面浏览器试用。'
				: 'Large files may be slow; try a desktop browser first.',
		[`${p}_faq_q1`]: c.faqUpload,
		[`${p}_faq_q2`]:
			lang === 'zh' ? '扫描版 PDF 为什么失败？' : 'Why do scanned PDFs fail?',
		[`${p}_faq_q3`]:
			lang === 'zh' ? '加密文件会怎样？' : 'What about encrypted files?',
		[`${p}_faq_q4`]:
			lang === 'zh' ? '和邻近工具有什么区别？' : 'How is this different from related tools?',
		[`${p}_faq_q5`]:
			lang === 'zh' ? '大文件有限制吗？' : 'Are large files supported?',
		[`${p}_how_body`]:
			lang === 'en'
				? `Choose input, click the main button, review the result, then download if needed. ${c.privacy}`
				: `${c.howTitle}: ${c.privacy}`,
		[`${p}_how_item_1`]:
			lang === 'zh' ? '选择 PDF 或粘贴内容' : lang === 'ja' ? 'PDF を選択または入力' : 'Choose a PDF or enter content',
		[`${p}_how_item_2`]:
			lang === 'zh' ? '点击主按钮运行处理' : lang === 'ja' ? 'メインボタンで実行' : 'Click the main action button',
		[`${p}_how_item_3`]:
			lang === 'zh' ? '在结果区查看输出' : lang === 'ja' ? '結果を確認' : 'Review the output area',
		[`${p}_how_item_4`]:
			lang === 'zh' ? '需要时下载或打印' : lang === 'ja' ? '必要ならダウンロード' : 'Download or print when needed',
		[`${p}_how_title`]: c.howTitle,
		[`${p}_rules_body`]: c.privacy,
		[`${p}_rules_item_1`]:
			lang === 'en' ? `Task: ${tool.task}.` : `${title}.`,
		[`${p}_rules_item_2`]:
			lang === 'zh' ? '纯客户端处理，文件不上传服务器。' : 'Client-side only; files are not uploaded.',
		[`${p}_rules_item_3`]:
			lang === 'zh' ? '无 OCR：扫描版需其他工作流。' : 'No OCR for scanned image-only PDFs.',
		[`${p}_rules_item_4`]:
			lang === 'zh' ? '加密/损坏文件显示可读错误。' : 'Encrypted or corrupt files fail with readable errors.',
		[`${p}_rules_title`]: c.rulesTitle,
		[`${p}_sample`]: c.sample,
		[`${p}_status_done`]:
			lang === 'zh' ? '完成' : lang === 'ja' ? '完了' : 'Done.',
		[`${p}_status_working`]:
			lang === 'zh' ? '处理中…' : lang === 'ja' ? '処理中…' : 'Working…',
		[`${p}_title`]: title,
		[`${p}_usecase_1`]:
			lang === 'zh' ? '办公：快速处理 PDF 日常任务' : 'Office: quick PDF tasks without desktop software',
		[`${p}_usecase_2`]:
			lang === 'zh' ? '学生：本地预览与导出' : 'Students: local preview and export',
		[`${p}_usecase_3`]:
			lang === 'zh' ? '隐私敏感：文件不出本机' : 'Privacy-sensitive files that must stay on device',
		[`${p}_usecases_title`]: c.useTitle,
		[`${p}_warn_large`]:
			lang === 'zh' ? '文件较大，可能较慢。' : 'Large file — may be slow.',
	};

	// Tool-specific UI keys
	if (tool.slug === 'extract-text-from-pdf') {
		Object.assign(keys, {
			[`${p}_extract`]: lang === 'zh' ? '提取' : lang === 'ja' ? '抽出' : 'Extract',
			[`${p}_copy`]: lang === 'zh' ? '复制' : lang === 'ja' ? 'コピー' : 'Copy',
			[`${p}_preview_label`]: lang === 'zh' ? '文本预览' : 'Text preview',
			[`${p}_pages_label`]: lang === 'zh' ? '页数' : 'Pages',
			[`${p}_stats_tpl`]: '{n} page(s) · {chars} characters',
		});
	}
	if (tool.slug === 'open-pdf-in-browser') {
		Object.assign(keys, {
			[`${p}_prev`]: lang === 'zh' ? '上一页' : 'Previous',
			[`${p}_next`]: lang === 'zh' ? '下一页' : 'Next',
			[`${p}_page_label`]: lang === 'zh' ? '页' : 'Page',
			[`${p}_viewer_label`]: lang === 'zh' ? '预览' : 'Preview',
		});
	}
	if (tool.slug === 'print-pdf') {
		Object.assign(keys, {
			[`${p}_print`]: lang === 'zh' ? '打印' : lang === 'ja' ? '印刷' : 'Print',
			[`${p}_viewer_label`]: lang === 'zh' ? '打印预览' : 'Print preview',
		});
	}
	if (tool.slug === 'write-pdf-document-online') {
		Object.assign(keys, {
			[`${p}_textarea_label`]: lang === 'zh' ? '文档内容' : 'Document text',
			[`${p}_create`]: lang === 'zh' ? '生成 PDF' : 'Create PDF',
			[`${p}_font_size`]: lang === 'zh' ? '字号' : 'Font size',
		});
	}
	if (tool.slug === 'compare-two-pdfs') {
		Object.assign(keys, {
			[`${p}_file_a`]: lang === 'zh' ? 'PDF A' : 'PDF A',
			[`${p}_file_b`]: lang === 'zh' ? 'PDF B' : 'PDF B',
			[`${p}_compare`]: lang === 'zh' ? '对比' : 'Compare',
			[`${p}_result_label`]: lang === 'zh' ? '差异高亮' : 'Diff highlight',
			[`${p}_summary_tpl`]: lang === 'zh' ? '变更块：{n}' : 'Change blocks: {n}',
		});
	}
	if (tool.slug === 'check-pdf-a-compliance') {
		Object.assign(keys, {
			[`${p}_check`]: lang === 'zh' ? '检查' : 'Check',
			[`${p}_results_label`]: lang === 'zh' ? '检查结果' : 'Check results',
			[`${p}_pass`]: lang === 'zh' ? '通过' : 'Pass',
			[`${p}_fail`]: lang === 'zh' ? '未通过' : 'Fail',
			[`${p}_warn`]: lang === 'zh' ? '警告' : 'Warning',
		});
	}
	if (tool.slug === 'combine-files-into-one-pdf') {
		Object.assign(keys, {
			[`${p}_combine`]: lang === 'zh' ? '合并' : 'Combine',
			[`${p}_remove`]: lang === 'zh' ? '移除' : 'Remove',
			[`${p}_move_up`]: lang === 'zh' ? '上移' : 'Up',
			[`${p}_move_down`]: lang === 'zh' ? '下移' : 'Down',
		});
	}
	if (tool.slug === 'add-text-to-pdf-file') {
		Object.assign(keys, {
			[`${p}_text_label`]: lang === 'zh' ? '要添加的文字' : 'Text to add',
			[`${p}_x_label`]: 'X',
			[`${p}_y_label`]: 'Y',
			[`${p}_font_size`]: lang === 'zh' ? '字号' : 'Font size',
			[`${p}_apply`]: lang === 'zh' ? '添加并下载' : 'Add & download',
		});
	}
	if (tool.slug === 'convert-html-to-pdf') {
		Object.assign(keys, {
			[`${p}_html_label`]: lang === 'zh' ? 'HTML 代码' : 'HTML source',
			[`${p}_convert`]: lang === 'zh' ? '转换' : 'Convert',
			[`${p}_preview_label`]: lang === 'zh' ? '预览' : 'Preview',
		});
	}
	if (tool.slug === 'make-pdf-flipbook') {
		Object.assign(keys, {
			[`${p}_prev`]: lang === 'zh' ? '上一页' : 'Previous',
			[`${p}_next`]: lang === 'zh' ? '下一页' : 'Next',
			[`${p}_flipbook_label`]: lang === 'zh' ? '翻页书' : 'Flipbook',
		});
	}

	return keys;
}

/**
 * Serialize i18n shard TypeScript file.
 * @param {string} slug
 * @param {string} lang
 * @param {Record<string,string>} keys
 */
function writeI18nShard(slug, lang, keys) {
	const dir = path.join(root, 'src/site/i18n/tools', slug);
	fs.mkdirSync(dir, { recursive: true });
	const lines = Object.entries(keys)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`);
	const body = `/**
 * i18n tool shard (${slug} / ${lang}).
 */
import type { SiteLangDict } from '../../../types';
const ${lang}: SiteLangDict = {
${lines.join('\n')}
};
export default ${lang};
`;
	fs.writeFileSync(path.join(dir, `${lang}.ts`), body);
}

/**
 * Write catalog shard JSON.
 * @param {ToolDef} tool
 */
function writeCatalog(tool) {
	const p = `tool_${tool.prefix}`;
	const camel = tool.slug
		.split('-')
		.map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1)))
		.join('')
		.replace(/Pdf/g, 'Pdf')
		.replace(/Html/g, 'Html');
	const exportName = `render${camel[0].toUpperCase()}${camel.slice(1)}Page`;
	const shard = {
		slug: tool.slug,
		path: `/tools/${tool.slug}`,
		updatedAt: updated,
		launchedAt: launched,
		category: 'pdf',
		primaryTopic: 'pdf-docs',
		secondaryTopics: ['dev-data'],
		featured: false,
		ymyl: false,
		i18nKey: `${p}_title`,
		homeTitleKey: `${p}_title`,
		homeDescKey: `${p}_desc`,
		faqPrefix: p,
		related: tool.related,
		logo: `/icons/tools/${tool.slug}.svg`,
		page: {
			module: `../pages/${camel}Page`,
			export: exportName,
			style: 'opts',
		},
		localProcessing: true,
		scenario: 'documents',
		subject: 'pdf',
	};
	fs.writeFileSync(
		path.join(root, 'src/site/tool-catalog.d', `${tool.slug}.json`),
		`${JSON.stringify(shard, null, 2)}\n`
	);
}

// Generate catalog, i18n, icons
for (const tool of TOOLS) {
	writeCatalog(tool);
	const iconDst = path.join(root, 'public/icons/tools', `${tool.slug}.svg`);
	fs.mkdirSync(path.dirname(iconDst), { recursive: true });
	fs.copyFileSync(iconSrc, iconDst);
	for (const lang of langs) {
		writeI18nShard(tool.slug, lang, buildKeys(tool, lang));
	}
	console.log('generated', tool.slug);
}

console.log('Done:', TOOLS.length, 'tools');
