#!/usr/bin/env node
/**
 * 一次性补丁：Prompt 工具簇九语 example 键（Input→Output 可见对照）。
 * 用法：node scripts/dev/patch-prompt-example-i18n.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const i18nRoot = path.join(root, 'src/site/i18n/tools');

/** slug → i18n 前缀（tool_{slug_with_underscore}） */
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

/** @param {string} slug */
const prefix = (slug) => `tool_${slug.replace(/-/g, '_')}`;

/** 各语 example 正文（与 en 样例预设同步） */
const EXAMPLES = {
	'prompt-template-builder': {
		zh: '输入（加载样例 · 代码芯片）：Role = 资深代码审查（安全与可读性）；Task = 审查我接下来粘贴的 PR diff；Constraints = 最多 12 条、标出密钥风险。输出（Markdown）：## Role / ## Task / ## Constraints / ## Output format 四段，可直接复制到 ChatGPT 或 Claude。与首屏画布一致。',
		es: 'Entrada (Cargar ejemplo, chip Código): Role = revisor senior (seguridad y legibilidad); Task = revisar el diff del PR que pegue; Constraints = máx. 12 viñetas. Salida (Markdown): ## Role / ## Task / ## Constraints / ## Output format — cuatro secciones listas para ChatGPT o Claude. Coincide con la primera carga.',
		ar: 'المدخلات (تحميل العينة، شريحة Code): Role = مراجع كود أول (أمان وقابلية قراءة)；Task = مراجعة diff الـ PR؛Constraints = 12 نقطة كحد أقصى. المخرجات (Markdown): أقسام ## Role و## Task و## Constraints و## Output format — جاهزة للنسخ إلى ChatGPT أو Claude.',
		pt: 'Entrada (Carregar exemplo, chip Código): Role = revisor sênior (segurança e legibilidade); Task = revisar o diff do PR colado; Constraints = máx. 12 tópicos. Saída (Markdown): ## Role / ## Task / ## Constraints / ## Output format — quatro seções prontas para ChatGPT ou Claude.',
		id: 'Input (Muat contoh, chip Code): Role = reviewer senior (keamanan & keterbacaan); Task = tinjau diff PR yang ditempel; Constraints = maks. 12 poin. Output (Markdown): ## Role / ## Task / ## Constraints / ## Output format — empat bagian siap salin ke ChatGPT atau Claude.',
		fr: 'Entrée (Charger l’exemple, puce Code) : Role = relecteur senior (sécurité et lisibilité) ; Task = relire le diff PR collé ; Constraints = 12 puces max. Sortie (Markdown) : ## Role / ## Task / ## Constraints / ## Output format — quatre sections prêtes pour ChatGPT ou Claude.',
		ja: '入力（サンプル読込・Codeチップ）：Role = シニアコードレビュアー（セキュリティと可読性）；Task = 貼り付けたPR diffをレビュー；Constraints = 最大12項目。出力（Markdown）：## Role / ## Task / ## Constraints / ## Output format の4セクション。ChatGPTやClaudeにそのままコピー可能。',
		ru: 'Ввод (Загрузить пример, чип Code): Role = senior code reviewer (безопасность и читаемость); Task = ревью diff PR; Constraints = до 12 пунктов. Вывод (Markdown): ## Role / ## Task / ## Constraints / ## Output format — четыре секции для ChatGPT или Claude.',
		de: 'Eingabe (Beispiel laden, Code-Chip): Role = Senior-Code-Reviewer (Sicherheit & Lesbarkeit); Task = PR-Diff prüfen; Constraints = max. 12 Punkte. Ausgabe (Markdown): ## Role / ## Task / ## Constraints / ## Output format — vier Abschnitte für ChatGPT oder Claude.',
	},
	'writing-prompt-generator': {
		zh: '输入（对白模式 · 加载样例）：Genre = 当代戏剧；Characters = Maya（咖啡师）与 Jonah（音乐人）；Conflict = Maya 听出 Jonah 歌里写的是前任，两人都不说破。输出（Markdown）：## Role → 写作教练；## Task → genre/characters/setting/conflict/tone 各行。剧本模式为灯塔传真预言谜题，与电影页的餐车样例不重复。',
		es: 'Entrada (Diálogo, Cargar ejemplo): Genre = drama contemporáneo; Characters = Maya (barista) y Jonah (músico); Conflict = Maya reconoce la canción sobre su ex. Salida (Markdown): ## Role → coach de escritura; ## Task → líneas genre/characters/setting/conflict/tone. El modo Guion usa un misterio del faro — no el food-truck del cine.',
		ar: 'المدخلات (حوار): Genre = دراما معاصرة؛ Characters = Maya وJonah؛ Conflict = Maya تتعرف على أغنية عن حبيبها السابق. المخرجات (Markdown): ## Role → مدرب كتابة؛ ## Task → genre/characters/setting/conflict/tone. وضع السيناريو يستخدم لغز فاكس المنارة — مختلف عن عينة السينما.',
		pt: 'Entrada (Diálogo, Carregar exemplo): Genre = drama contemporâneo; Characters = Maya (barista) e Jonah (músico); Conflict = Maya reconhece a música sobre o ex. Saída (Markdown): ## Role → coach de escrita; ## Task → linhas genre/characters/setting/conflict/tone. Roteiro usa mistério do farol — não o food-truck do filme.',
		id: 'Input (Dialog, Muat contoh): Genre = drama kontemporer; Characters = Maya (barista) & Jonah (musisi); Conflict = Maya mengenali lagu tentang mantan. Output (Markdown): ## Role → pelatih menulis; ## Task → baris genre/characters/setting/conflict/tone. Mode Skrip = misteri faks cuaca mercusuar — bukan food-truck film.',
		fr: 'Entrée (Dialogue, Charger l’exemple) : Genre = drame contemporain ; Characters = Maya (barista) et Jonah (musicien) ; Conflict = Maya reconnaît la chanson sur son ex. Sortie (Markdown) : ## Role → coach d’écriture ; ## Task → lignes genre/characters/setting/conflict/tone. Scénario = mystère du fax du phare — pas le food-truck du film.',
		ja: '入力（対話・サンプル）：Genre = 現代ドラマ；Characters = Maya（バリスタ）とJonah（音楽家）；Conflict = 元カレの歌だと気づく。出力（Markdown）：## Role → ライティングコーチ；## Task → genre/characters/setting/conflict/tone。脚本モードは灯台FAX謎 — 映画のフードトラック例とは別。',
		ru: 'Ввод (Диалог): Genre = современная дrama; Characters = Maya и Jonah; Conflict = Maya узнаёт песню об ex. Вывод (Markdown): ## Role → writing coach; ## Task → genre/characters/setting/conflict/tone. Режим сценария — загадка с факсом маяка, не food-truck из фильма.',
		de: 'Eingabe (Dialog, Beispiel): Genre = zeitgenössisches Drama; Characters = Maya (Barista) & Jonah (Musiker); Conflict = Maya erkennt das Lied über den Ex. Ausgabe (Markdown): ## Role → Schreibcoach; ## Task → genre/characters/setting/conflict/tone. Drehbuch = Leuchtturm-Fax-Rätsel — nicht der Food-Truck aus Film.',
	},
	'midjourney-prompt-builder': {
		zh: '输入：Subject = 苔桥拔刀武士；Style = 电影水墨、青灰调色；Lighting = 日出轮廓光与雾；Flags = --v 6.1 --style raw --stylize 120 --chaos 8。输出（Markdown）：## Task 含建议 MJ 一行与 --ar 16:9；JSON 芯片导出结构化字段。',
		es: 'Entrada: Subject = samurái en puente musgoso; Style = tinta cinematográfica; Lighting = luz de borde al amanecer; Flags = --v 6.1 --style raw --stylize 120 --chaos 8. Salida (Markdown): ## Task con línea MJ sugerida y --ar 16:9; JSON para pipelines.',
		ar: 'المدخلات: Subject = سامurai على جسر؛ Style = حبر سينمائي؛ Flags = --v 6.1 --style raw. المخرجات (Markdown): ## Task مع سطر MJ مقترح و --ar 16:9؛ JSON للحقول المنظمة.',
		pt: 'Entrada: Subject = samurai na ponte; Style = tinta cinematográfica; Flags = --v 6.1 --style raw --chaos 8. Saída (Markdown): ## Task com linha MJ sugerida e --ar 16:9; JSON estruturado.',
		id: 'Input: Subject = samurai di jembatan lumut; Style = tinta sinematik; Flags = --v 6.1 --style raw --chaos 8. Output (Markdown): ## Task + baris MJ dan --ar 16:9; chip JSON untuk pipeline.',
		fr: 'Entrée : Subject = samouraï sur pont mousseux ; Style = encre ciné ; Flags = --v 6.1 --style raw --chaos 8. Sortie (Markdown) : ## Task avec ligne MJ et --ar 16:9 ; JSON structuré.',
		ja: '入力：Subject = 苔むした橋の武士；Style = シネマティック水墨；Flags = --v 6.1 --style raw --chaos 8。出力（Markdown）：## Task にMJ行と --ar 16:9；JSONチップで構造化。',
		ru: 'Ввод: Subject = самурай на мосту; Style = cinematic ink wash; Flags = --v 6.1 --style raw --chaos 8. Вывод (Markdown): ## Task с MJ-строкой и --ar 16:9; JSON для pipeline.',
		de: 'Eingabe: Subject = Samurai auf Moosbrücke; Style = cinematic ink wash; Flags = --v 6.1 --style raw --chaos 8. Ausgabe (Markdown): ## Task mit MJ-Zeile und --ar 16:9; JSON-Chip.',
	},
	'sketch-prompt-generator': {
		zh: '输入：Medium = 暖灰色调纸石墨；Stroke = 交叉排线 + 清晰面部轮廓；Composition = 四分之三肖像、右侧留白；Ref = Kim Jung Gi 线稿节奏（非临摹）。输出（Markdown）：## Task 列出 Medium / Stroke / Composition / Artist 行。',
		es: 'Entrada: Medium = grafito en papel gris; Stroke = sombreado cruzado; Composition = retrato tres cuartos; Ref = economía de línea tipo Kim Jung Gi. Salida (Markdown): ## Task con líneas Medium / Stroke / Composition / Artist.',
		ar: 'المدخلات: Medium = graphite؛ Stroke = cross-hatching؛ Composition = بورتريه؛ Ref = Kim Jung Gi. المخرجات (Markdown): ## Task مع Medium / Stroke / Composition / Artist.',
		pt: 'Entrada: Medium = grafite em papel cinza; Stroke = hachura cruzada; Composition = retrato três quartos; Ref = Kim Jung Gi. Saída (Markdown): ## Task com Medium / Stroke / Composition / Artist.',
		id: 'Input: Medium = grafit di kertas abu; Stroke = cross-hatching; Composition = potret tiga perempat; Ref = Kim Jung Gi. Output (Markdown): ## Task → Medium / Stroke / Composition / Artist.',
		fr: 'Entrée : Medium = graphite sur papier gris ; Stroke = hachures croisées ; Composition = portrait trois quarts ; Ref = Kim Jung Gi. Sortie (Markdown) : ## Task → Medium / Stroke / Composition / Artist.',
		ja: '入力：Medium = 暖色グレー紙の石墨；Stroke = カケ打ち；Composition = 3/4ポートレート；Ref = Kim Jung Gi。出力（Markdown）：## Task → Medium / Stroke / Composition / Artist。',
		ru: 'Ввод: Medium = graphite on toned paper; Stroke = cross-hatching; Composition = три четверти; Ref = Kim Jung Gi. Вывод (Markdown): ## Task → Medium / Stroke / Composition / Artist.',
		de: 'Eingabe: Medium = Graphit auf grauem Papier; Stroke = Kreuzschraffur; Composition = Dreiviertelporträt; Ref = Kim Jung Gi. Ausgabe (Markdown): ## Task → Medium / Stroke / Composition / Artist.',
	},
	'film-prompt-builder': {
		zh: '输入：Logline = 餐车 rival 因许可错误共用厨房 30 天；Act II = 音乐节 rush + 博主配方乌龙；Scene list = 6 场；Arc = 骄傲 → 勉强合作 → 共同经营。输出（Markdown）：## Task 含 Logline、Act1–3、Scene / List、Character / Arc — 与加载样例首屏一致。',
		es: 'Entrada: Logline = food-trucks rivales comparten cocina 30 días; Act II = festival + conflicto de receta; 6 escenas; Arc = orgullo → teamwork → co-dueños. Salida (Markdown): ## Task con Logline, Act1–3, Scene / List, Character / Arc.',
		ar: 'المدخلات: Logline = شاحنتا طعام تتشاركان مطبخًا 30 يومًا؛ Act II = مهرجان + خلاف وصفة؛ 6 مشاهد. المخرجات (Markdown): ## Task مع Logline وAct1–3 وScene / List وCharacter / Arc.',
		pt: 'Entrada: Logline = food trucks rivais dividem cozinha 30 dias; Act II = festival + receita errada; 6 cenas; Arc = orgulho → parceria → co-donos. Saída (Markdown): ## Task com Logline, Act1–3, Scene / List, Character / Arc.',
		id: 'Input: Logline = rival food truck berbagi dapur 30 hari; Act II = festival + resep salah; 6 adegan; Arc = pride → teamwork → co-owner. Output (Markdown): ## Task → Logline, Act1–3, Scene / List, Character / Arc.',
		fr: 'Entrée : Logline = food trucks rivaux partagent une cuisine 30 jours ; Act II = festival + recette ; 6 scènes ; Arc = fierté → coopération → co-propriétaires. Sortie (Markdown) : ## Task → Logline, Act1–3, Scene / List, Character / Arc.',
		ja: '入力：Logline = ライバル餐車が30日キッチン共有；Act II = フェス + レシピ騒動；6シーン；Arc = プライド → 協力 → 共同経営。出力（Markdown）：## Task → Logline, Act1–3, Scene / List, Character / Arc。',
		ru: 'Ввод: Logline = соперничающие food trucks делят кухню 30 дней; Act II = фестиваль + рецепт; 6 сцен; Arc = гордость → teamwork → co-owners. Вывод (Markdown): ## Task → Logline, Act1–3, Scene / List, Character / Arc.',
		de: 'Eingabe: Logline = rivalisierende Food-Trucks teilen Küche 30 Tage; Act II = Festival + Rezept-Streit; 6 Szenen; Arc = Stolz → Teamwork → Co-Owner. Ausgabe (Markdown): ## Task → Logline, Act1–3, Scene / List, Character / Arc.',
	},
	'short-drama-prompt-generator': {
		zh: '输入：12 集 × 75s；Hook = 实习生曝光 payroll + CEO 听出 custody 语音；Cliffhanger = 第 6 集删语音 → 第 7 集电梯对峙；Format = 9:16 烧录字幕。输出（Markdown）：## Task 列出 Episodes / Hook / Cliffhanger / Vertical / Genre。',
		es: 'Entrada: 12 × 75s; Hook = filtración payroll + CEO reconoce voz; Cliffhanger = ep.6 borra audio → ep.7 ascensor; Format = 9:16. Salida (Markdown): ## Task con Episodes / Hook / Cliffhanger / Vertical / Genre.',
		ar: 'المدخلات: 12 × 75s؛ Hook = تسريب رواتب + CEO يتعرف على الصوت؛ Cliffhanger = حذف رسالة؛ Format = 9:16. المخرجات (Markdown): ## Task مع Episodes / Hook / Cliffhanger / Vertical / Genre.',
		pt: 'Entrada: 12 × 75s; Hook = vazamento payroll + CEO reconhece voz; Cliffhanger = ep.6 apaga áudio; Format = 9:16. Saída (Markdown): ## Task → Episodes / Hook / Cliffhanger / Vertical / Genre.',
		id: 'Input: 12 × 75s; Hook = bocor payroll + CEO kenali suara; Cliffhanger = ep.6 hapus voicemail; Format = 9:16. Output (Markdown): ## Task → Episodes / Hook / Cliffhanger / Vertical / Genre.',
		fr: 'Entrée : 12 × 75s ; Hook = fuite payroll + CEO reconnaît la voix ; Cliffhanger = ep.6 efface le message ; Format = 9:16. Sortie (Markdown) : ## Task → Episodes / Hook / Cliffhanger / Vertical / Genre.',
		ja: '入力：12 × 75s；Hook = 給与漏洩 + CEOが音声認識；Cliffhanger = 6話で削除 → 7話エレベーター；Format = 9:16。出力（Markdown）：## Task → Episodes / Hook / Cliffhanger / Vertical / Genre。',
		ru: 'Ввод: 12 × 75s; Hook = утечка payroll + CEO узнаёт голос; Cliffhanger = ep.6 удаляет voicemail; Format = 9:16. Вывод (Markdown): ## Task → Episodes / Hook / Cliffhanger / Vertical / Genre.',
		de: 'Eingabe: 12 × 75s; Hook = Payroll-Leak + CEO erkennt Stimme; Cliffhanger = Ep.6 löscht Voicemail; Format = 9:16. Ausgabe (Markdown): ## Task → Episodes / Hook / Cliffhanger / Vertical / Genre.',
	},
	'product-design-prompt-builder': {
		zh: '输入：Persona = 混合 Android/iPhone 的 co-parent；Problem = 日历太吵、要 custody 色 week view + handoff；Wireframe = 3 屏；Tokens = 8pt 网格、#2563eb、WCAG AA。输出（Markdown）：## Task → Persona / Problem / Wireframe / Design tokens。',
		es: 'Entrada: Persona = co-parents mixtos; Problem = calendario ruidoso + handoff; Wireframe = 3 pantallas; Tokens = 8pt, #2563eb, WCAG AA. Salida (Markdown): ## Task → Persona / Problem / Wireframe / Design tokens.',
		ar: 'المدخلات: Persona = co-parents؛ Problem = تقويم مزدحم؛ Wireframe = 3 شاشات؛ Tokens = 8pt و#2563eb. المخرجات (Markdown): ## Task → Persona / Problem / Wireframe / Design tokens.',
		pt: 'Entrada: Persona = co-parents; Problem = calendário ruidoso + handoff; Wireframe = 3 telas; Tokens = 8pt, #2563eb, WCAG AA. Saída (Markdown): ## Task → Persona / Problem / Wireframe / Design tokens.',
		id: 'Input: Persona = co-parent; Problem = kalender ramai + handoff; Wireframe = 3 layar; Tokens = 8pt, #2563eb, WCAG AA. Output (Markdown): ## Task → Persona / Problem / Wireframe / Design tokens.',
		fr: 'Entrée : Persona = co-parents ; Problem = calendrier bruyant + handoff ; Wireframe = 3 écrans ; Tokens = 8pt, #2563eb, WCAG AA. Sortie (Markdown) : ## Task → Persona / Problem / Wireframe / Design tokens.',
		ja: '入力：Persona = 共同親；Problem = カレンダーが煩雑 + handoff；Wireframe = 3画面；Tokens = 8pt, #2563eb, WCAG AA。出力（Markdown）：## Task → Persona / Problem / Wireframe / Design tokens。',
		ru: 'Ввод: Persona = co-parents; Problem = шумный календарь + handoff; Wireframe = 3 экрана; Tokens = 8pt, #2563eb, WCAG AA. Вывод (Markdown): ## Task → Persona / Problem / Wireframe / Design tokens.',
		de: 'Eingabe: Persona = Co-Parents; Problem = lauter Kalender + Handoff; Wireframe = 3 Screens; Tokens = 8pt, #2563eb, WCAG AA. Ausgabe (Markdown): ## Task → Persona / Problem / Wireframe / Design tokens.',
	},
	'android-prompt-builder': {
		zh: '输入：Feature = 离线阅读清单 + Share 保存 + FTS + 滑动归档可撤销；Stack = Kotlin 2.0、Compose、Room FTS4、Hilt；Gradle = minSdk 26。输出（Markdown）：## Task → Feature / Kotlin / Compose / Gradle 行。',
		es: 'Entrada: Feature = lista offline + share + FTS; Stack = Kotlin 2.0, Compose, Room FTS4, Hilt; Gradle = minSdk 26. Salida (Markdown): ## Task → Feature / Kotlin / Compose / Gradle.',
		ar: 'المدخلات: Feature = قائمة قراءة offline؛ Stack = Kotlin وCompose وRoom؛ Gradle = minSdk 26. المخرجات (Markdown): ## Task → Feature / Kotlin / Compose / Gradle.',
		pt: 'Entrada: Feature = lista offline + share + FTS; Stack = Kotlin 2.0, Compose, Room FTS4; Gradle = minSdk 26. Saída (Markdown): ## Task → Feature / Kotlin / Compose / Gradle.',
		id: 'Input: Feature = daftar baca offline + FTS; Stack = Kotlin 2.0, Compose, Room FTS4; Gradle = minSdk 26. Output (Markdown): ## Task → Feature / Kotlin / Compose / Gradle.',
		fr: 'Entrée : Feature = liste offline + FTS ; Stack = Kotlin 2.0, Compose, Room FTS4 ; Gradle = minSdk 26. Sortie (Markdown) : ## Task → Feature / Kotlin / Compose / Gradle.',
		ja: '入力：Feature = オフライン読書リスト + FTS；Stack = Kotlin 2.0, Compose, Room FTS4；Gradle = minSdk 26。出力（Markdown）：## Task → Feature / Kotlin / Compose / Gradle。',
		ru: 'Ввод: Feature = offline reading list + FTS; Stack = Kotlin 2.0, Compose, Room FTS4; Gradle = minSdk 26. Вывод (Markdown): ## Task → Feature / Kotlin / Compose / Gradle.',
		de: 'Eingabe: Feature = Offline-Leseliste + FTS; Stack = Kotlin 2.0, Compose, Room FTS4; Gradle = minSdk 26. Ausgabe (Markdown): ## Task → Feature / Kotlin / Compose / Gradle.',
	},
	'ios-prompt-builder': {
		zh: '输入：Feature = HealthKit 步数趋势 + 静息心率 + 权限说明；Stack = Swift 5.10、SwiftUI、SwiftData；UI = NavigationStack + Charts；HIG = Dynamic Type XXL、VoiceOver。输出（Markdown）：## Task → Feature / Swift / SwiftUI / HIG 行。',
		es: 'Entrada: Feature = HealthKit pasos + HR; Stack = Swift 5.10, SwiftUI, SwiftData; UI = NavigationStack + Charts; HIG = Dynamic Type, VoiceOver. Salida (Markdown): ## Task → Feature / Swift / SwiftUI / HIG.',
		ar: 'المدخلات: Feature = HealthKit للخطوات؛ Stack = Swift وSwiftUI؛ HIG = Dynamic Type وVoiceOver. المخرجات (Markdown): ## Task → Feature / Swift / SwiftUI / HIG.',
		pt: 'Entrada: Feature = HealthKit passos + HR; Stack = Swift 5.10, SwiftUI; UI = NavigationStack + Charts; HIG = Dynamic Type, VoiceOver. Saída (Markdown): ## Task → Feature / Swift / SwiftUI / HIG.',
		id: 'Input: Feature = HealthKit langkah + HR; Stack = Swift 5.10, SwiftUI; UI = NavigationStack + Charts; HIG = Dynamic Type, VoiceOver. Output (Markdown): ## Task → Feature / Swift / SwiftUI / HIG.',
		fr: 'Entrée : Feature = HealthKit pas + FC ; Stack = Swift 5.10, SwiftUI ; UI = NavigationStack + Charts ; HIG = Dynamic Type, VoiceOver. Sortie (Markdown) : ## Task → Feature / Swift / SwiftUI / HIG.',
		ja: '入力：Feature = HealthKit歩数 + 心拍；Stack = Swift 5.10, SwiftUI；UI = NavigationStack + Charts；HIG = Dynamic Type, VoiceOver。出力（Markdown）：## Task → Feature / Swift / SwiftUI / HIG。',
		ru: 'Ввод: Feature = HealthKit шаги + пульс; Stack = Swift 5.10, SwiftUI; UI = NavigationStack + Charts; HIG = Dynamic Type, VoiceOver. Вывод (Markdown): ## Task → Feature / Swift / SwiftUI / HIG.',
		de: 'Eingabe: Feature = HealthKit Schritte + HR; Stack = Swift 5.10, SwiftUI; UI = NavigationStack + Charts; HIG = Dynamic Type, VoiceOver. Ausgabe (Markdown): ## Task → Feature / Swift / SwiftUI / HIG.',
	},
};

const LANGS = ['zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

/**
 * 替换 shard 中 example 键值。
 * @param {string} filePath
 * @param {string} key
 * @param {string} value
 */
function patchExample(filePath, key, value) {
	if (!fs.existsSync(filePath)) {
		console.warn('skip missing', filePath);
		return;
	}
	let src = fs.readFileSync(filePath, 'utf8');
	const keyRe = new RegExp(`(${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*\\n\\s*)'(?:\\\\'|[^'])*'`, 's');
	if (!keyRe.test(src)) {
		console.warn('key not found', filePath, key);
		return;
	}
	const escaped = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
	src = src.replace(keyRe, `$1'${escaped}'`);
	fs.writeFileSync(filePath, src);
}

for (const slug of SLUGS) {
	const pfx = prefix(slug);
	const key = `${pfx}_example`;
	for (const lang of LANGS) {
		const text = EXAMPLES[slug]?.[lang];
		if (!text) continue;
		patchExample(path.join(i18nRoot, slug, `${lang}.ts`), key, text);
	}
}

console.log('[patch-prompt-example-i18n] done', SLUGS.length, 'slugs ×', LANGS.length, 'langs');
