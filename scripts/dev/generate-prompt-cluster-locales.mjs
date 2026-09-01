/**
 * 一次性生成 prompt 工具簇九语 locale 分片（独立检索向重写，非机翻 dump）。
 * 用法：node scripts/dev/generate-prompt-cluster-locales.mjs [--slug=...] [--lang=...]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const toolsDir = path.join(root, 'src/site/i18n/tools');

const SLUGS = [
	'prompt-template-builder',
	'writing-prompt-generator',
	'midjourney-prompt-builder',
	'sketch-prompt-generator',
	'film-prompt-builder',
	'short-drama-prompt-generator',
	'product-design-prompt-builder',
	'android-prompt-builder',
	'ios-prompt-builder',
];

const LANGS = ['zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

/** 各语「— 本地 + 可选 AI」后缀 */
const AI_SUFFIX = {
	zh: ' — 本地 + 可选 AI',
	es: ' — Local + IA opcional',
	ar: ' — محلي + ذكاء اصطناعي اختياري',
	pt: ' — Local + IA opcional',
	id: ' — Lokal + AI opsional',
	fr: ' — Local + IA optionnelle',
	ja: ' — ローカル + オプションAI',
	ru: ' — Локально + опциональный ИИ',
	de: ' — Lokal + optionale KI',
};

/** 各 slug 各语 H1 基名（不含 AI 后缀） */
const TITLE_BASE = {
	'prompt-template-builder': {
		zh: 'Prompt 模板构建器',
		es: 'Constructor de plantillas de Prompt',
		ar: 'منشئ قوالب Prompt',
		pt: 'Construtor de modelos de Prompt',
		id: 'Pembuat templat Prompt',
		fr: 'Générateur de modèles de Prompt',
		ja: 'Promptテンプレートビルダー',
		ru: 'Конструктор шаблонов Prompt',
		de: 'Prompt-Vorlagen-Builder',
	},
	'writing-prompt-generator': {
		zh: '写作 Prompt 生成器',
		es: 'Generador de prompts de escritura',
		ar: 'مولّد prompts للكتابة',
		pt: 'Gerador de prompts de escrita',
		id: 'Generator prompt menulis',
		fr: 'Générateur de prompts d\'écriture',
		ja: 'ライティングPromptジェネレーター',
		ru: 'Генератор writing prompt',
		de: 'Schreib-Prompt-Generator',
	},
	'midjourney-prompt-builder': {
		zh: 'Midjourney Prompt 构建器',
		es: 'Constructor de prompts Midjourney',
		ar: 'منشئ prompts Midjourney',
		pt: 'Construtor de prompts Midjourney',
		id: 'Pembuat prompt Midjourney',
		fr: 'Constructeur de prompts Midjourney',
		ja: 'Midjourney Promptビルダー',
		ru: 'Конструктор Midjourney prompt',
		de: 'Midjourney-Prompt-Builder',
	},
	'sketch-prompt-generator': {
		zh: '素描 Prompt 生成器',
		es: 'Generador de prompts de boceto',
		ar: 'مولّد prompts للرسم',
		pt: 'Gerador de prompts de esboço',
		id: 'Generator prompt sketsa',
		fr: 'Générateur de prompts de croquis',
		ja: 'スケッチPromptジェネレーター',
		ru: 'Генератор sketch prompt',
		de: 'Skizzen-Prompt-Generator',
	},
	'film-prompt-builder': {
		zh: '电影 Prompt 构建器',
		es: 'Constructor de prompts de cine',
		ar: 'منشئ prompts للأفلام',
		pt: 'Construtor de prompts de filme',
		id: 'Pembuat prompt film',
		fr: 'Constructeur de prompts cinéma',
		ja: '映画Promptビルダー',
		ru: 'Конструктор film prompt',
		de: 'Film-Prompt-Builder',
	},
	'short-drama-prompt-generator': {
		zh: '短剧 Prompt 生成器',
		es: 'Generador de prompts de drama corto',
		ar: 'مولّد prompts للدراما القصيرة',
		pt: 'Gerador de prompts de drama curto',
		id: 'Generator prompt drama pendek',
		fr: 'Générateur de prompts de mini-série',
		ja: 'ショートドラマPromptジェネレーター',
		ru: 'Генератор short drama prompt',
		de: 'Kurzdrama-Prompt-Generator',
	},
	'product-design-prompt-builder': {
		zh: '产品设计 Prompt 构建器',
		es: 'Constructor de prompts de diseño de producto',
		ar: 'منشئ prompts لتصميم المنتج',
		pt: 'Construtor de prompts de design de produto',
		id: 'Pembuat prompt desain produk',
		fr: 'Constructeur de prompts design produit',
		ja: 'プロダクトデザインPromptビルダー',
		ru: 'Конструктор product design prompt',
		de: 'Produktdesign-Prompt-Builder',
	},
	'android-prompt-builder': {
		zh: 'Android Prompt 构建器',
		es: 'Constructor de prompts Android',
		ar: 'منشئ prompts لـ Android',
		pt: 'Construtor de prompts Android',
		id: 'Pembuat prompt Android',
		fr: 'Constructeur de prompts Android',
		ja: 'Android Promptビルダー',
		ru: 'Конструктор Android prompt',
		de: 'Android-Prompt-Builder',
	},
	'ios-prompt-builder': {
		zh: 'iOS Prompt 构建器',
		es: 'Constructor de prompts iOS',
		ar: 'منشئ prompts لـ iOS',
		pt: 'Construtor de prompts iOS',
		id: 'Pembuat prompt iOS',
		fr: 'Constructeur de prompts iOS',
		ja: 'iOS Promptビルダー',
		ru: 'Конструктор iOS prompt',
		de: 'iOS-Prompt-Builder',
	},
};

/** 各语 desc / description 模板（{tool} 替换为 TITLE_BASE） */
const DESC_SHORT = {
	zh: '{tool} — 默认本地组装，可选 Cloudflare AI 扩写/润色（Turnstile）；Markdown/JSON 留在本机。',
	es: '{tool} — local por defecto + Expand/Polish opcional con Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	ar: '{tool} — محلي افتراضيًا + توسيع/صقل اختياري عبر Cloudflare AI (Turnstile)；Markdown/JSON على جهازك.',
	pt: '{tool} — local por padrão + Expand/Polish opcional via Cloudflare AI (Turnstile); Markdown/JSON no dispositivo.',
	id: '{tool} — default lokal + Expand/Polish opsional Cloudflare AI (Turnstile); Markdown/JSON di perangkat.',
	fr: '{tool} — local par défaut + Expand/Polish optionnel Cloudflare AI (Turnstile) ; Markdown/JSON sur l’appareil.',
	ja: '{tool} — ローカル既定、Cloudflare AI 拡張/推敲は任意（Turnstile）；Markdown/JSON は端末内。',
	ru: '{tool} — локально по умолчанию + опциональный Expand/Polish Cloudflare AI (Turnstile); Markdown/JSON на устройстве.',
	de: '{tool} — lokal standardmäßig + optional Cloudflare AI Expand/Polish (Turnstile); Markdown/JSON auf dem Gerät.',
};

const DESC_LONG = {
	zh: '{tool}{suffix}：面向 ChatGPT、Gemini、Claude、DeepSeek，默认在本浏览器本地组装 Prompt，可选 Cloudflare Workers AI 扩写/润色（须 Turnstile、有频率限制）。进页自动展示样例。默认 Markdown；JSON 便于流水线。不用 AI 时文本不出本机。',
	es: '{tool}{suffix} para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). El ejemplo se ejecuta al abrir. Markdown por defecto; JSON para pipelines. El texto permanece en tu dispositivo salvo que uses IA.',
	ar: '{tool}{suffix} لـ ChatGPT وGemini وClaude وDeepSeek: تجميع محلي افتراضيًا ثم توسيع/صقل اختياري عبر Cloudflare Workers AI (Turnstile مطلوب، محدود المعدل). يعمل المثال عند الفتح. Markdown افتراضي؛ JSON للمسارات. النص يبقى على جهازك ما لم تستخدم الذكاء الاصطناعي.',
	pt: '{tool}{suffix} para ChatGPT, Gemini, Claude e DeepSeek: monta prompts localmente por padrão e opcionalmente Expand/Polish via Cloudflare Workers AI (Turnstile obrigatório, com limite). O exemplo roda ao abrir. Markdown padrão; JSON para pipelines. Texto fica no dispositivo salvo se usar IA.',
	id: '{tool}{suffix} untuk ChatGPT, Gemini, Claude, DeepSeek: rakit prompt lokal secara default, lalu Expand/Polish opsional via Cloudflare Workers AI (Turnstile wajib, dibatasi). Contoh jalan saat halaman dibuka. Markdown default; JSON untuk pipeline. Teks tetap di perangkat kecuali pakai AI.',
	fr: '{tool}{suffix} pour ChatGPT, Gemini, Claude et DeepSeek : assemblage local par défaut, puis Expand/Polish optionnel via Cloudflare Workers AI (Turnstile requis, quota). L’exemple s’exécute à l’ouverture. Markdown par défaut ; JSON pour pipelines. Le texte reste sur l’appareil sauf IA.',
	ja: '{tool}{suffix}（ChatGPT/Gemini/Claude/DeepSeek向け）：既定はブラウザ内ローカル組み立て、任意で Cloudflare Workers AI の拡張/推敲（Turnstile 必須・レート制限）。初回表示でサンプル実行。Markdown 既定、JSON はパイプライン用。AI 未使用時は端末外に出ません。',
	ru: '{tool}{suffix} для ChatGPT, Gemini, Claude и DeepSeek: локальная сборка по умолчанию, опционально Expand/Polish через Cloudflare Workers AI (Turnstile, лимиты). Пример на первом экране. Markdown по умолчанию; JSON для пайплайнов. Текст на устройстве, пока не включите ИИ.',
	de: '{tool}{suffix} für ChatGPT, Gemini, Claude und DeepSeek: Prompts standardmäßig lokal, optional Expand/Polish via Cloudflare Workers AI (Turnstile, Rate-Limits). Beispiel beim ersten Laden. Markdown Standard; JSON für Pipelines. Text bleibt auf dem Gerät ohne KI.',
};

/** 共享 UI / AI 键（按后缀匹配 tool_*_{suffix}） */
const SHARED = {
	zh: {
		build: '构建 Prompt',
		build_template: '构建模板',
		clear: '清空',
		copy: '复制',
		download: '下载',
		load_sample: '加载示例',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: '输出格式',
		empty: '请至少填写一个字段后再构建。',
		empty_mode: '请在本模式下至少填写一个字段。',
		empty_template: '请先填写自由文本或至少一个字段。',
		result: 'Prompt 输出',
		result_writing: '写作 Prompt',
		result_template: '模板',
		status_working: '正在构建…',
		status_done: 'Prompt 已就绪。',
		status_done_template: '模板已就绪。',
		status_copied: '已复制到剪贴板。',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: '适用于 ChatGPT、Gemini、Claude、DeepSeek — 复制成品 Prompt 到任意聊天界面。',
		how_title: '使用方法',
		rules_title: '规则说明',
		example_title: '示例',
		usecases_title: '适用场景',
		ai_expand: 'AI 扩写',
		ai_polish: 'AI 润色',
		ai_panel: '可选 Cloudflare AI（Turnstile）',
		ai_consent_title: '发送到 Cloudflare Workers AI？',
		ai_consent_body: '此可选步骤会把当前草稿发往 Cloudflare Workers AI；不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能本地组装。',
		ai_consent_ok: '继续',
		ai_consent_cancel: '取消',
		ai_working: 'Cloudflare AI 处理中…',
		ai_done: '已应用 AI 建议，复制前请核对。',
		ai_err_generic: 'AI 失败，本地 Prompt 未改。',
		ai_err_rate: 'AI 配额已满，请用本地模式或明日（UTC）再试。',
		ai_err_turnstile: '使用 AI 前请完成 Turnstile 验证。',
	},
	es: {
		build: 'Crear prompt',
		build_template: 'Crear plantilla',
		clear: 'Limpiar',
		copy: 'Copiar',
		download: 'Descargar',
		load_sample: 'Cargar ejemplo',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: 'Formato de salida',
		empty: 'Rellena al menos un campo antes de crear.',
		empty_mode: 'Rellena al menos un campo en este modo.',
		empty_template: 'Añade texto libre o al menos un campo.',
		result: 'Salida del prompt',
		result_writing: 'Prompt de escritura',
		result_template: 'Plantilla',
		status_working: 'Creando prompt…',
		status_done: 'Prompt listo.',
		status_done_template: 'Plantilla lista.',
		status_copied: 'Copiado al portapapeles.',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: 'Para ChatGPT, Gemini, Claude y DeepSeek — copia el prompt terminado en cualquier chat.',
		how_title: 'Cómo funciona',
		rules_title: 'Reglas que debes conocer',
		example_title: 'Ejemplo',
		usecases_title: 'Buenos casos de uso',
		ai_expand: 'Expandir con IA',
		ai_polish: 'Pulir con IA',
		ai_panel: 'Cloudflare AI opcional (Turnstile)',
		ai_consent_title: '¿Enviar texto a Cloudflare Workers AI?',
		ai_consent_body: 'Este paso opcional envía tu borrador a Cloudflare Workers AI. No se envía a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores. El modo local sigue funcionando.',
		ai_consent_ok: 'Continuar',
		ai_consent_cancel: 'Cancelar',
		ai_working: 'Cloudflare AI trabajando…',
		ai_done: 'Sugerencia de IA aplicada. Revisa antes de copiar.',
		ai_err_generic: 'La IA falló. Tu prompt local no cambió.',
		ai_err_rate: 'Cuota de IA agotada. Usa modo local o prueba mañana (UTC).',
		ai_err_turnstile: 'Completa Turnstile antes de usar IA.',
	},
	ar: {
		build: 'إنشاء prompt',
		build_template: 'إنشاء قالب',
		clear: 'مسح',
		copy: 'نسخ',
		download: 'تنزيل',
		load_sample: 'تحميل مثال',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: 'صيغة الإخراج',
		empty: 'املأ حقلًا واحدًا على الأقل قبل الإنشاء.',
		empty_mode: 'املأ حقلًا واحدًا على الأقل في هذا الوضع.',
		empty_template: 'أضف نصًا حرًا أو حقلًا واحدًا على الأقل.',
		result: 'مخرجات Prompt',
		result_writing: 'Prompt كتابة',
		result_template: 'قالب',
		status_working: 'جاري الإنشاء…',
		status_done: 'Prompt جاهز.',
		status_done_template: 'القالب جاهز.',
		status_copied: 'تم النسخ.',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: 'لـ ChatGPT وGemini وClaude وDeepSeek — انسخ الـ prompt إلى أي واجهة دردشة.',
		how_title: 'كيف يعمل',
		rules_title: 'قواعد يجب أن تعرفها',
		example_title: 'مثال',
		usecases_title: 'حالات مناسبة',
		ai_expand: 'توسيع بالذكاء الاصطناعي',
		ai_polish: 'صقل بالذكاء الاصطناعي',
		ai_panel: 'Cloudflare AI اختياري (Turnstile)',
		ai_consent_title: 'إرسال النص إلى Cloudflare Workers AI؟',
		ai_consent_body: 'هذه الخطوة الاختيارية ترسل مسودتك إلى Cloudflare Workers AI. لا تُرسل إلى OpenAI أو Google أو Anthropic أو DeepSeek من خوادمنا. التجميع المحلي يعمل بدون AI.',
		ai_consent_ok: 'متابعة',
		ai_consent_cancel: 'إلغاء',
		ai_working: 'Cloudflare AI يعمل…',
		ai_done: 'تم تطبيق اقتراح AI. راجع قبل النسخ.',
		ai_err_generic: 'فشل AI. الـ prompt المحلي لم يتغير.',
		ai_err_rate: 'حصة AI مستنفدة. استخدم الوضع المحلي أو جرّب غدًا (UTC).',
		ai_err_turnstile: 'أكمل Turnstile قبل استخدام AI.',
	},
	pt: {
		build: 'Criar prompt',
		build_template: 'Criar modelo',
		clear: 'Limpar',
		copy: 'Copiar',
		download: 'Baixar',
		load_sample: 'Carregar exemplo',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: 'Formato de saída',
		empty: 'Preencha pelo menos um campo antes de criar.',
		empty_mode: 'Preencha pelo menos um campo neste modo.',
		empty_template: 'Adicione texto livre ou pelo menos um campo.',
		result: 'Saída do prompt',
		result_writing: 'Prompt de escrita',
		result_template: 'Modelo',
		status_working: 'Criando prompt…',
		status_done: 'Prompt pronto.',
		status_done_template: 'Modelo pronto.',
		status_copied: 'Copiado.',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: 'Para ChatGPT, Gemini, Claude e DeepSeek — copie o prompt pronto para qualquer chat.',
		how_title: 'Como funciona',
		rules_title: 'Regras esperadas',
		example_title: 'Exemplo',
		usecases_title: 'Bons casos de uso',
		ai_expand: 'Expandir com IA',
		ai_polish: 'Polir com IA',
		ai_panel: 'Cloudflare AI opcional (Turnstile)',
		ai_consent_title: 'Enviar texto para Cloudflare Workers AI?',
		ai_consent_body: 'Esta etapa opcional envia seu rascunho ao Cloudflare Workers AI. Não vai para OpenAI, Google, Anthropic ou DeepSeek pelos nossos servidores. Montagem local funciona sem IA.',
		ai_consent_ok: 'Continuar',
		ai_consent_cancel: 'Cancelar',
		ai_working: 'Cloudflare AI trabalhando…',
		ai_done: 'Sugestão de IA aplicada. Revise antes de copiar.',
		ai_err_generic: 'IA falhou. Seu prompt local não mudou.',
		ai_err_rate: 'Cota de IA esgotada. Use modo local ou tente amanhã (UTC).',
		ai_err_turnstile: 'Complete o Turnstile antes de usar IA.',
	},
	id: {
		build: 'Buat prompt',
		build_template: 'Buat templat',
		clear: 'Hapus',
		copy: 'Salin',
		download: 'Unduh',
		load_sample: 'Muat contoh',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: 'Format keluaran',
		empty: 'Isi minimal satu bidang sebelum membuat.',
		empty_mode: 'Isi minimal satu bidang dalam mode ini.',
		empty_template: 'Tambahkan teks bebas atau minimal satu bidang.',
		result: 'Keluaran prompt',
		result_writing: 'Prompt menulis',
		result_template: 'Templat',
		status_working: 'Membuat prompt…',
		status_done: 'Prompt siap.',
		status_done_template: 'Templat siap.',
		status_copied: 'Disalin.',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: 'Untuk ChatGPT, Gemini, Claude, DeepSeek — salin prompt jadi ke chat UI mana pun.',
		how_title: 'Cara kerja',
		rules_title: 'Aturan yang perlu diketahui',
		example_title: 'Contoh',
		usecases_title: 'Cocok untuk',
		ai_expand: 'Perluas dengan AI',
		ai_polish: 'Poles dengan AI',
		ai_panel: 'Cloudflare AI opsional (Turnstile)',
		ai_consent_title: 'Kirim teks ke Cloudflare Workers AI?',
		ai_consent_body: 'Langkah opsional ini mengirim draf Anda ke Cloudflare Workers AI. Tidak dikirim ke OpenAI, Google, Anthropic, atau DeepSeek dari server kami. Rakitan lokal tetap jalan tanpa AI.',
		ai_consent_ok: 'Lanjutkan',
		ai_consent_cancel: 'Batal',
		ai_working: 'Cloudflare AI bekerja…',
		ai_done: 'Saran AI diterapkan. Tinjau sebelum menyalin.',
		ai_err_generic: 'AI gagal. Prompt lokal tidak berubah.',
		ai_err_rate: 'Kuota AI habis. Pakai mode lokal atau coba besok (UTC).',
		ai_err_turnstile: 'Selesaikan Turnstile sebelum pakai AI.',
	},
	fr: {
		build: 'Créer le prompt',
		build_template: 'Créer le modèle',
		clear: 'Effacer',
		copy: 'Copier',
		download: 'Télécharger',
		load_sample: 'Charger un exemple',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: 'Format de sortie',
		empty: 'Remplissez au moins un champ avant de créer.',
		empty_mode: 'Remplissez au moins un champ dans ce mode.',
		empty_template: 'Ajoutez du texte libre ou au moins un champ.',
		result: 'Sortie du prompt',
		result_writing: 'Prompt d\'écriture',
		result_template: 'Modèle',
		status_working: 'Création du prompt…',
		status_done: 'Prompt prêt.',
		status_done_template: 'Modèle prêt.',
		status_copied: 'Copié.',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: 'Pour ChatGPT, Gemini, Claude et DeepSeek — copiez le prompt fini dans n’importe quel chat.',
		how_title: 'Comment ça marche',
		rules_title: 'Règles à connaître',
		example_title: 'Exemple',
		usecases_title: 'Bonnes utilisations',
		ai_expand: 'Développer avec l’IA',
		ai_polish: 'Peaufiner avec l’IA',
		ai_panel: 'Cloudflare AI optionnel (Turnstile)',
		ai_consent_title: 'Envoyer le texte à Cloudflare Workers AI ?',
		ai_consent_body: 'Cette étape optionnelle envoie votre brouillon à Cloudflare Workers AI. Pas vers OpenAI, Google, Anthropic ou DeepSeek depuis nos serveurs. L’assemblage local fonctionne sans IA.',
		ai_consent_ok: 'Continuer',
		ai_consent_cancel: 'Annuler',
		ai_working: 'Cloudflare AI en cours…',
		ai_done: 'Suggestion IA appliquée. Relisez avant de copier.',
		ai_err_generic: 'Échec IA. Votre prompt local est inchangé.',
		ai_err_rate: 'Quota IA atteint. Mode local ou réessayez demain (UTC).',
		ai_err_turnstile: 'Complétez Turnstile avant d’utiliser l’IA.',
	},
	ja: {
		build: 'Prompt を作成',
		build_template: 'テンプレートを作成',
		clear: 'クリア',
		copy: 'コピー',
		download: 'ダウンロード',
		load_sample: 'サンプルを読み込む',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: '出力形式',
		empty: '作成前に少なくとも1項目を入力してください。',
		empty_mode: 'このモードで少なくとも1項目を入力してください。',
		empty_template: '自由入力または1項目以上を追加してください。',
		result: 'Prompt 出力',
		result_writing: 'ライティング Prompt',
		result_template: 'テンプレート',
		status_working: 'Prompt を作成中…',
		status_done: 'Prompt 準備完了。',
		status_done_template: 'テンプレート準備完了。',
		status_copied: 'クリップボードにコピーしました。',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: 'ChatGPT、Gemini、Claude、DeepSeek 向け — 完成 Prompt を任意のチャット UI に貼り付け。',
		how_title: '使い方',
		rules_title: '知っておくルール',
		example_title: '例',
		usecases_title: '向いている用途',
		ai_expand: 'AI で拡張',
		ai_polish: 'AI で推敲',
		ai_panel: '任意 Cloudflare AI（Turnstile）',
		ai_consent_title: 'Cloudflare Workers AI に送信しますか？',
		ai_consent_body: '任意のステップで下書きを Cloudflare Workers AI に送ります。OpenAI/Google/Anthropic/DeepSeek には当サーバーから送りません。AI なしでもローカル組み立て可能。',
		ai_consent_ok: '続行',
		ai_consent_cancel: 'キャンセル',
		ai_working: 'Cloudflare AI 処理中…',
		ai_done: 'AI 提案を適用しました。コピー前に確認してください。',
		ai_err_generic: 'AI 失敗。ローカル Prompt は変更されていません。',
		ai_err_rate: 'AI クォータ到達。ローカルモードか明日（UTC）再試行。',
		ai_err_turnstile: 'AI 利用前に Turnstile を完了してください。',
	},
	ru: {
		build: 'Собрать prompt',
		build_template: 'Собрать шаблон',
		clear: 'Очистить',
		copy: 'Копировать',
		download: 'Скачать',
		load_sample: 'Загрузить пример',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: 'Формат вывода',
		empty: 'Заполните хотя бы одно поле перед сборкой.',
		empty_mode: 'Заполните хотя бы одно поле в этом режиме.',
		empty_template: 'Добавьте свободный текст или хотя бы одно поле.',
		result: 'Вывод prompt',
		result_writing: 'Writing prompt',
		result_template: 'Шаблон',
		status_working: 'Сборка prompt…',
		status_done: 'Prompt готов.',
		status_done_template: 'Шаблон готов.',
		status_copied: 'Скопировано.',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: 'Для ChatGPT, Gemini, Claude, DeepSeek — копируйте готовый prompt в любой чат.',
		how_title: 'Как это работает',
		rules_title: 'Ожидаемые правила',
		example_title: 'Пример',
		usecases_title: 'Хорошие сценарии',
		ai_expand: 'Расширить с ИИ',
		ai_polish: 'Отполировать с ИИ',
		ai_panel: 'Опциональный Cloudflare AI (Turnstile)',
		ai_consent_title: 'Отправить текст в Cloudflare Workers AI?',
		ai_consent_body: 'Этот опциональный шаг отправляет черновик в Cloudflare Workers AI. Не в OpenAI, Google, Anthropic или DeepSeek с наших серверов. Локальная сборка работает без ИИ.',
		ai_consent_ok: 'Продолжить',
		ai_consent_cancel: 'Отмена',
		ai_working: 'Cloudflare AI работает…',
		ai_done: 'Подсказка ИИ применена. Проверьте перед копированием.',
		ai_err_generic: 'ИИ не сработал. Локальный prompt не изменён.',
		ai_err_rate: 'Квота ИИ исчерпана. Локальный режим или завтра (UTC).',
		ai_err_turnstile: 'Пройдите Turnstile перед использованием ИИ.',
	},
	de: {
		build: 'Prompt erstellen',
		build_template: 'Vorlage erstellen',
		clear: 'Leeren',
		copy: 'Kopieren',
		download: 'Herunterladen',
		load_sample: 'Beispiel laden',
		fmt_json: 'JSON',
		fmt_md: 'Markdown',
		fmt_label: 'Ausgabeformat',
		empty: 'Mindestens ein Feld ausfüllen, bevor Sie erstellen.',
		empty_mode: 'In diesem Modus mindestens ein Feld ausfüllen.',
		empty_template: 'Freitext oder mindestens ein Feld hinzufügen.',
		result: 'Prompt-Ausgabe',
		result_writing: 'Schreib-Prompt',
		result_template: 'Vorlage',
		status_working: 'Prompt wird erstellt…',
		status_done: 'Prompt bereit.',
		status_done_template: 'Vorlage bereit.',
		status_copied: 'In Zwischenablage kopiert.',
		sec_role: 'Role',
		sec_task: 'Task',
		sec_constraints: 'Constraints',
		sec_output: 'Output format',
		platforms: 'Für ChatGPT, Gemini, Claude, DeepSeek — fertigen Prompt in jeden Chat kopieren.',
		how_title: 'So funktioniert es',
		rules_title: 'Erwartete Regeln',
		example_title: 'Beispiel',
		usecases_title: 'Gute Einsätze',
		ai_expand: 'Mit KI erweitern',
		ai_polish: 'Mit KI polieren',
		ai_panel: 'Optionale Cloudflare AI (Turnstile)',
		ai_consent_title: 'Text an Cloudflare Workers AI senden?',
		ai_consent_body: 'Dieser optionale Schritt sendet Ihren Entwurf an Cloudflare Workers AI. Nicht an OpenAI, Google, Anthropic oder DeepSeek von unseren Servern. Lokale Montage funktioniert ohne KI.',
		ai_consent_ok: 'Weiter',
		ai_consent_cancel: 'Abbrechen',
		ai_working: 'Cloudflare AI arbeitet…',
		ai_done: 'KI-Vorschlag angewendet. Vor dem Kopieren prüfen.',
		ai_err_generic: 'KI fehlgeschlagen. Lokaler Prompt unverändert.',
		ai_err_rate: 'KI-Kontingent erreicht. Lokaler Modus oder morgen (UTC).',
		ai_err_turnstile: 'Turnstile vor KI-Nutzung abschließen.',
	},
};

/**
 * 从 en.ts 解析键值对。
 * @param {string} filePath
 */
function parseEnShard(filePath) {
	const code = fs.readFileSync(filePath, 'utf8');
	/** @type {Record<string, string>} */
	const out = {};
	const re = /^\t(tool_[\w]+):\s*\n?\s*'((?:\\'|[^'])*)'/gm;
	let m;
	while ((m = re.exec(code))) {
		out[m[1]] = m[2].replace(/\\'/g, "'");
	}
	// 也匹配单行
	const re2 = /^\t(tool_[\w]+):\s*'((?:\\'|[^'])*)'/gm;
	while ((m = re2.exec(code))) {
		if (!out[m[1]]) out[m[1]] = m[2].replace(/\\'/g, "'");
	}
	return out;
}

/**
 * slug 转 camel 前缀 tool_foo_bar
 * @param {string} slug
 */
function faqPrefix(slug) {
	return `tool_${slug.replace(/-/g, '_')}`;
}

/**
 * 翻译单个键值。
 * @param {string} slug
 * @param {string} lang
 * @param {string} key
 * @param {string} enVal
 */
function translateKey(slug, lang, key, enVal) {
	const p = faqPrefix(slug);
	const s = SHARED[lang];
	const base = TITLE_BASE[slug][lang];
	const suffix = AI_SUFFIX[lang];

	if (key === `${p}_title`) return base + suffix;
	if (key === `${p}_desc`) return DESC_SHORT[lang].replace('{tool}', base);
	if (key === `${p}_description`) {
		return DESC_LONG[lang].replace('{tool}', base).replace('{suffix}', suffix);
	}

	const tail = key.slice(p.length + 1);

	if (tail === 'build') return slug === 'prompt-template-builder' ? s.build_template : s.build;
	if (tail === 'clear') return s.clear;
	if (tail === 'copy') return s.copy;
	if (tail === 'download') return s.download;
	if (tail === 'load_sample') return s.load_sample;
	if (tail === 'fmt_json') return s.fmt_json;
	if (tail === 'fmt_md') return s.fmt_md;
	if (tail === 'fmt_label' || tail === 'output_fmt_label') return s.fmt_label;
	if (tail === 'empty') {
		if (slug === 'prompt-template-builder') return s.empty_template;
		if (slug === 'writing-prompt-generator') return s.empty_mode;
		return s.empty;
	}
	if (tail === 'result_label') {
		if (slug === 'prompt-template-builder') return s.result_template;
		if (slug === 'writing-prompt-generator') return s.result_writing;
		return s.result;
	}
	if (tail === 'status_working') return s.status_working;
	if (tail === 'status_done') {
		return slug === 'prompt-template-builder' ? s.status_done_template : s.status_done;
	}
	if (tail === 'status_copied') return s.status_copied;
	if (tail === 'sec_role') return s.sec_role;
	if (tail === 'sec_task') return s.sec_task;
	if (tail === 'sec_constraints') return s.sec_constraints;
	if (tail === 'sec_output') return s.sec_output;
	if (tail === 'platforms_lead') return s.platforms;
	if (tail === 'how_title') return s.how_title;
	if (tail === 'rules_title') return s.rules_title;
	if (tail === 'example_title') return s.example_title;
	if (tail === 'usecases_title') return s.usecases_title;
	if (tail === 'ai_expand') return s.ai_expand;
	if (tail === 'ai_polish') return s.ai_polish;
	if (tail === 'ai_panel_label') return s.ai_panel;
	if (tail === 'ai_consent_title') return s.ai_consent_title;
	if (tail === 'ai_consent_body') return s.ai_consent_body;
	if (tail === 'ai_consent_ok') return s.ai_consent_ok;
	if (tail === 'ai_consent_cancel') return s.ai_consent_cancel;
	if (tail === 'ai_working') return s.ai_working;
	if (tail === 'ai_done') return s.ai_done;
	if (tail === 'ai_err_generic') return s.ai_err_generic;
	if (tail === 'ai_err_rate') return s.ai_err_rate;
	if (tail === 'ai_err_turnstile') return s.ai_err_turnstile;

	// FAQ 通用模式
	if (tail.startsWith('faq_q') || tail.startsWith('faq_a')) {
		return translateFaq(slug, lang, tail, enVal, base);
	}

	if (tail.startsWith('how_')) return translateHow(slug, lang, tail, enVal, base, s);
	if (tail.startsWith('rules_')) return translateRules(slug, lang, tail, enVal, base);
	if (tail.startsWith('usecase_')) return translateUsecase(slug, lang, tail, enVal, base);
	if (tail === 'article') return translateArticle(slug, lang, base, s);
	if (tail === 'example') return translateExample(slug, lang, enVal, base);

	// 字段 label/ph：保留英文技术词，翻译描述性部分
	if (tail.endsWith('_label') || tail.endsWith('_ph')) {
		return translateField(slug, lang, tail, enVal);
	}

	// writing 模式键
	if (slug === 'writing-prompt-generator') {
		const w = WRITING[lang]?.[tail];
		if (w) return w;
	}

	// prompt-template-builder 场景键
	if (slug === 'prompt-template-builder') {
		const pt = PTB[lang]?.[tail];
		if (pt) return pt;
	}

	return enVal;
}

/** @type {Record<string, Record<string, string>>} */
const WRITING = {
	zh: {
		mode_label: '写作模式',
		mode_dialogue: '对白',
		mode_character: '角色',
		mode_script: '剧本/大纲',
		mode_random: '随机',
		random_lead: '从类型、场景、物品、情绪、冲突掷出故事起点；可选种子重复同一掷点。',
		random_roll: '随机掷点',
		random_seed_label: '种子（可选）',
		random_seed_ph: '如 42',
		dlg_genre_label: '类型 / 基调',
		dlg_genre_ph: '当代剧情、浪漫喜剧…',
		dlg_characters_label: '角色',
		dlg_characters_ph: '姓名 + 一行角色说明…',
		dlg_setting_label: '场景',
		dlg_setting_ph: '地点、时间、氛围…',
		dlg_conflict_label: '冲突',
		dlg_conflict_ph: '推动场景的张力…',
		dlg_tone_label: '对白风格',
		dlg_tone_ph: '潜台词、打趣、简洁…',
		char_name_label: '角色名',
		char_name_ph: '名字或角色标签…',
		char_traits_label: '特质',
		char_traits_ph: '性格、习惯、矛盾…',
		char_goal_label: '目标',
		char_goal_ph: '故事中想要什么…',
		char_flaw_label: '缺陷 / 弱点',
		char_flaw_ph: '阻碍他们的…',
		char_voice_label: '口吻 / 用词',
		char_voice_ph: '句长节奏、词汇…',
		scr_premise_label: '前提 / logline',
		scr_premise_ph: '一段式设定…',
		scr_structure_label: '结构',
		scr_structure_ph: '三幕、Save the Cat、 episodic…',
		scr_notes_label: '节拍备注',
		scr_notes_ph: '场次数、节奏、POV…',
	},
};

/** prompt-template-builder 专用键（zh 示例；其他语 fallback en 或简译） */
const PTB = {
	zh: {
		free_label: '自由 Prompt（可选）',
		free_ph: '粘贴草稿，或 Role: … Task: … 行',
		role_label: 'Role',
		role_ph: '模型应扮演谁…',
		task_label: 'Task',
		task_ph: '分步要做什么…',
		constraints_label: 'Constraints',
		constraints_ph: '语气限制、范围、避免事项…',
		output_fmt_label: 'Output format',
		output_fmt_ph: 'Markdown 段落、JSON 形状、列表…',
		scene_label: '场景预设',
		scene_code: '代码审查',
		scene_movie: '电影长片',
		scene_short_drama: '短剧',
		scene_android: 'Android 代码',
		scene_ios: 'iOS 代码',
	},
};

function translateFaq(slug, lang, tail, enVal, base) {
	const faq = FAQ[lang];
	if (!faq) return enVal.replace(/Prompt template builder|Writing prompt generator|Midjourney prompt builder/gi, base);
	const mapKey = `${slug}:${tail}`;
	if (faq[mapKey]) return faq[mapKey];
	if (faq[tail]) return faq[tail].replace(/\{tool\}/g, base);
	return enVal
		.replace(/Local assembly runs in this browser tab — nothing is uploaded by default\. Optional Expand\/Polish sends only the text you submit for that click to Cloudflare Workers AI, not to OpenAI, Google, Anthropic, or DeepSeek from our servers\./g, faq.a1 || enVal)
		.replace(/Prompt template builder/g, TITLE_BASE['prompt-template-builder'][lang] || 'Prompt template builder');
}

/** 各语 FAQ 片段 */
const FAQ = {
	zh: {
		a1: '默认只在本浏览器标签页本地组装。可选「AI 扩写/润色」仅把该次点击提交的文字发往 Cloudflare Workers AI，不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。',
		a2: '本地模式只在本标签页整理字段，不调用 ChatGPT、Gemini、Claude、DeepSeek API。可选 AI 使用 Cloudflare Workers AI（须 Turnstile）。',
		a7: '本地模式只在本标签页整理文字，不上传。可选 Expand/Polish 发往 Cloudflare Workers AI（须 Turnstile、有频率限制）。失败或超额时继续用本地模式。',
		a8: '本地模式只在本标签页整理写作字段，不上传。可选 Expand/Polish 发往 Cloudflare Workers AI（须 Turnstile、有频率限制）。失败或超额时继续用本地模式。',
		q1: 'Prompt 会上传吗？',
		q2: '会调用大模型 API 吗？',
		q4: '为什么可选 AI 需要 Turnstile？',
		q7: '本地模式与可选 Cloudflare AI 有何区别？',
		q8: '本地模式与可选 Cloudflare AI 有何区别？',
	},
	es: {
		a1: 'Por defecto, el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI, no a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
		a7: 'Modo local: solo formatea en esta pestaña, sin subida. Expand/Polish opcional va a Cloudflare Workers AI (Turnstile, límite). Si falla, sigue el modo local.',
		a8: 'Modo local: solo formatea campos de escritura aquí. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
		q1: '¿Se sube mi prompt?',
		q2: '¿Llama a APIs de LLM?',
		q4: '¿Por qué Turnstile para IA opcional?',
		q7: '¿Diferencia entre local y Cloudflare AI opcional?',
		q8: '¿Diferencia entre local y Cloudflare AI opcional?',
	},
	ja: {
		a1: '既定はこのタブ内ローカル組み立て。任意の Expand/Polish はそのクリック分のみ Cloudflare Workers AI へ。OpenAI/Google/Anthropic/DeepSeek には当サーバーから送りません。',
		a7: 'ローカルはこのタブのみ、非アップロード。任意 Expand/Polish は Cloudflare Workers AI（Turnstile・レート制限）。',
		q1: 'Prompt はアップロードされますか？',
		q2: 'LLM API を呼びますか？',
		q4: '任意 AI に Turnstile が必要な理由は？',
		q7: 'ローカルと任意 Cloudflare AI の違いは？',
	},
};

function translateHow(slug, lang, tail, enVal, base, s) {
	if (tail === 'how_body') {
		const bodies = {
			zh: `填写 ${base} 字段，本地构建 Prompt，可选 Turnstile 后 Expand/Polish，再粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek。`,
			es: `Rellena campos de ${base}, crea el prompt localmente, opcionalmente Expand/Polish con Turnstile, y pégalo en ChatGPT, Gemini, Claude o DeepSeek.`,
			ja: `${base} の項目を入力し、ローカルで Prompt を組み立て、任意で Turnstile 後に Expand/Polish、ChatGPT/Gemini/Claude/DeepSeek へ貼り付け。`,
		};
		return bodies[lang] || enVal.replace(/midjourney prompt builder|sketch prompt generator|film prompt builder|short drama prompt generator|product design prompt builder|android prompt builder|ios prompt builder|writing prompt generator|Prompt template builder/gi, base);
	}
	if (tail === 'how_item_1') {
		const i1 = {
			zh: '进页已自动运行默认样例（Load sample）。',
			es: 'Al abrir, el ejemplo predeterminado ya se ejecutó (Cargar ejemplo).',
			ja: 'ページ表示時にサンプルが自動実行済み（サンプルを読み込む）。',
		};
		return i1[lang] || enVal;
	}
	if (tail === 'how_item_3') {
		const i3 = {
			zh: '可选：完成 Turnstile，再通过 Cloudflare Workers AI 扩写或润色。',
			es: 'Opcional: completa Turnstile y Expand/Polish con Cloudflare Workers AI.',
			ja: '任意：Turnstile 完了後、Cloudflare Workers AI で拡張/推敲。',
		};
		return i3[lang] || enVal;
	}
	if (tail === 'how_item_4') {
		const i4 = {
			zh: '复制或下载，粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek。',
			es: 'Copia o descarga y pega en ChatGPT, Gemini, Claude o DeepSeek.',
			ja: 'コピー/ダウンロードし、ChatGPT/Gemini/Claude/DeepSeek に貼り付け。',
		};
		return i4[lang] || enVal;
	}
	return enVal;
}

function translateRules(slug, lang, tail, enVal, base) {
	if (tail === 'rules_body') {
		const rb = {
			zh: `${base}：默认本地组装；可选 Cloudflare AI 有频率限制且须 Turnstile。`,
			es: `${base}: ensamblaje local por defecto; IA opcional con límites y Turnstile.`,
			ja: `${base}：既定ローカル；任意 Cloudflare AI はレート制限＋Turnstile。`,
		};
		return rb[lang] || enVal;
	}
	if (tail === 'rules_item_3') {
		const r3 = {
			zh: '可选 Cloudflare AI 不取代本地模式 — 复制前请核对 AI 输出。',
			es: 'La IA opcional no reemplaza el modo local — revisa antes de copiar.',
			ja: '任意 Cloudflare AI はローカルを置き換えない — コピー前に確認。',
		};
		return r3[lang] || enVal;
	}
	return enVal;
}

function translateUsecase(slug, lang, tail, enVal, base) {
	const uc1 = {
		zh: `为团队在 ChatGPT、Gemini、Claude 或 DeepSeek 准备可粘贴的 ${base} 简报。`,
		es: `Brief listo para pegar de ${base} en ChatGPT, Gemini, Claude o DeepSeek.`,
		ja: `ChatGPT/Gemini/Claude/DeepSeek 用に ${base} ブリーフをチーム共有。`,
	};
	if (tail === 'usecase_1' && uc1[lang]) return uc1[lang];
	if (tail === 'usecase_4') {
		const u4 = {
			zh: '敏感草稿保持本地 — 仅在同意弹窗后启用 AI。',
			es: 'Borradores sensibles en local — IA solo tras aceptar el modal.',
			ja: '機密下書きはローカル — 同意後のみ AI。',
		};
		return u4[lang] || enVal;
	}
	return enVal;
}

function translateArticle(slug, lang, base, s) {
	const articles = {
		zh: `在本页构建可粘贴的 ${base} Prompt。填写字段，复制 Markdown 或 JSON 到 ChatGPT、Gemini、Claude 或 DeepSeek。默认本地组装；可选 Expand/Polish 使用 Cloudflare Workers AI（Turnstile）。不用 AI 时文本留在本机。`,
		es: `Crea prompts listos de ${base} aquí. Rellena campos y copia Markdown o JSON a ChatGPT, Gemini, Claude o DeepSeek. Local por defecto; Expand/Polish opcional con Cloudflare Workers AI (Turnstile).`,
		ja: `このページで ${base} 用 Prompt を作成。項目入力後 Markdown/JSON を ChatGPT/Gemini/Claude/DeepSeek へ。既定ローカル；任意 Expand/Polish は Cloudflare Workers AI（Turnstile）。`,
	};
	return articles[lang] || translateKey(slug, lang, `${faqPrefix(slug)}_description`, '');
}

function translateExample(slug, lang, enVal, base) {
	const ex = {
		zh: '加载示例填入默认预设、生成 Markdown 并启用复制。可选 AI 在 Turnstile 后仅发送该次点击的文本。',
		es: 'Cargar ejemplo rellena el preset, crea Markdown y habilita Copiar. IA opcional envía solo ese clic tras Turnstile.',
		ja: 'サンプル読込でプリセット投入・Markdown 生成・コピー有効。任意 AI は Turnstile 後そのクリック分のみ送信。',
	};
	return ex[lang] || enVal;
}

function translateField(slug, lang, tail, enVal) {
	/** 常见字段各语 */
	const fields = {
		zh: {
			subject_label: '主体',
			subject_ph: '主体描述…',
			style_label: '风格',
			style_ph: '风格描述…',
			lighting_label: '光线',
			lighting_ph: '光线描述…',
			aspect_label: '画幅',
			aspect_ph: '如 16:9…',
			mj_flags_label: 'MJ 参数',
			mj_flags_ph: '如 --v 6.1 --ar 16:9…',
			medium_label: '媒介',
			medium_ph: '铅笔、炭笔…',
			stroke_label: '笔触',
			stroke_ph: '线条粗细…',
			composition_label: '构图',
			composition_ph: '构图说明…',
			artist_ref_label: '艺术家 / 参考',
			artist_ref_ph: '参考风格…',
			logline_label: 'Logline',
			logline_ph: '一句话梗概…',
			act1_label: '第一幕',
			act1_ph: '第一幕要点…',
			act2_label: '第二幕',
			act2_ph: '第二幕要点…',
			act3_label: '第三幕',
			act3_ph: '第三幕要点…',
			scene_list_label: '场景列表',
			scene_list_ph: '场景节拍…',
			character_arc_label: '人物弧光',
			character_arc_ph: '角色变化…',
			episodes_label: '集数',
			episodes_ph: '集数/时长…',
			hook_label: '钩子',
			hook_ph: '开场钩子…',
			cliffhanger_label: '悬念',
			cliffhanger_ph: '结尾 cliffhanger…',
			vertical_format_label: '竖屏 / 格式',
			vertical_format_ph: '竖屏短剧格式…',
			genre_label: '类型',
			genre_ph: '类型说明…',
			persona_label: '用户画像',
			persona_ph: '目标用户…',
			problem_label: '问题',
			problem_ph: '要解决的问题…',
			wireframe_scope_label: '线框 / 范围',
			wireframe_scope_ph: '线框范围…',
			design_tokens_label: '设计 / Tokens',
			design_tokens_ph: '设计 token…',
			feature_spec_label: '功能 / 规格',
			feature_spec_ph: '功能说明…',
			kotlin_stack_label: 'Kotlin / 技术栈',
			kotlin_stack_ph: 'Kotlin 栈…',
			compose_ui_label: 'Compose / UI',
			compose_ui_ph: 'Compose UI…',
			gradle_constraints_label: 'Gradle / 约束',
			gradle_constraints_ph: 'Gradle 约束…',
			swift_stack_label: 'Swift / 技术栈',
			swift_stack_ph: 'Swift 栈…',
			swiftui_ui_label: 'SwiftUI / UI',
			swiftui_ui_ph: 'SwiftUI 界面…',
			hig_constraints_label: 'HIG / 约束',
			hig_constraints_ph: 'HIG 约束…',
		},
		es: {
			subject_label: 'Sujeto',
			style_label: 'Estilo',
			lighting_label: 'Iluminación',
			aspect_label: 'Relación de aspecto',
			logline_label: 'Logline',
			hook_label: 'Gancho',
			genre_label: 'Género',
			persona_label: 'Persona',
			problem_label: 'Problema',
			feature_spec_label: 'Función / spec',
		},
		ja: {
			subject_label: '被写体',
			style_label: 'スタイル',
			lighting_label: '照明',
			aspect_label: 'アスペクト比',
			logline_label: 'ログライン',
			hook_label: 'フック',
			genre_label: 'ジャンル',
			persona_label: 'ペルソナ',
			problem_label: '課題',
			feature_spec_label: '機能 / 仕様',
		},
	};
	return fields[lang]?.[tail] || enVal;
}

/**
 * 生成 locale 文件内容。
 * @param {string} slug
 * @param {string} lang
 * @param {Record<string, string>} enMap
 */
function renderLocaleFile(slug, lang, enMap) {
	const lines = [
		`/**`,
		` * i18n tool shard (${slug} / ${lang}).`,
		` * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。`,
		` */`,
		`import type { SiteLangDict } from '../../../types';`,
		``,
		`const ${lang}: SiteLangDict = {`,
	];
	for (const [key, enVal] of Object.entries(enMap)) {
		const val = translateKey(slug, lang, key, enVal);
		const escaped = val.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
		lines.push(`\t${key}:`);
		lines.push(`\t\t'${escaped}',`);
	}
	lines.push(`};`, ``, `export default ${lang};`, ``);
	return lines.join('\n');
}

/** CLI */
const args = process.argv.slice(2);
const slugArg = args.find((a) => a.startsWith('--slug='))?.slice('--slug='.length);
const langArg = args.find((a) => a.startsWith('--lang='))?.slice('--lang='.length);

const targetSlugs = slugArg ? [slugArg] : SLUGS;
const targetLangs = langArg ? [langArg] : LANGS;

let written = 0;
for (const slug of targetSlugs) {
	const enPath = path.join(toolsDir, slug, 'en.ts');
	if (!fs.existsSync(enPath)) {
		console.warn(`skip ${slug}: no en.ts`);
		continue;
	}
	const enMap = parseEnShard(enPath);
	for (const lang of targetLangs) {
		const outPath = path.join(toolsDir, slug, `${lang}.ts`);
		const content = renderLocaleFile(slug, lang, enMap);
		fs.writeFileSync(outPath, content, 'utf8');
		written++;
		console.log(`wrote ${slug}/${lang}.ts`);
	}
}
console.log(`done: ${written} files`);
