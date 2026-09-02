/**
 * Prompt 工具簇：进页 loadSample() 预设数据。
 * 与各工具 i18n `*_example` 可见 Input→Output 对照保持同步；修改时两处一起更新。
 */

/** Film prompt builder 默认样例（三幕 + scene list）。 */
export const FILM_PROMPT_PRESET = {
	logline:
		'Two rival food-truck owners must share one commercial kitchen for 30 days after a city permit clerical error.',
	act1:
		'Alley parking fight; dual health-code citations; clerk offers one permit if they split shifts and pass re-inspection.',
	act2:
		'Festival rush succeeds until a food blogger credits the wrong recipe; a family spice feud goes public on social.',
	act3:
		'Inspector-judged cook-off; fusion menu wins renewal; owners split the permit by daypart but still argue over chili heat.',
	scene_list:
		'1. Alley parking fight 2. Double health inspection 3. Clerk co-tenancy order 4. First joint dinner rush 5. Festival blogger fallout 6. Cook-off finale',
	character_arc: 'Pride → grudging teamwork → co-owners who negotiate, not surrender',
} as const;

/** Midjourney prompt builder 默认样例。 */
export const MIDJOURNEY_PROMPT_PRESET = {
	subject: 'A lone samurai mid-draw on a mossy bridge, rain mist, distant torii gate',
	style: 'Cinematic ink wash, muted teal and charcoal, fine grain',
	lighting: 'Soft rim light from sunrise, volumetric fog, wet stone reflections',
	aspect: '16:9',
	mj_flags: '--v 6.1 --style raw --stylize 120 --chaos 8',
} as const;

/**
 * Sketch.app prompt generator 默认样例。
 * 面向「让 AI 写出在 Sketch.app（Mac 设计软件）里可执行的建稿/导出步骤」，非铅笔线稿文生图。
 */
export const SKETCH_PROMPT_PRESET = {
	goal: 'Build a mobile login screen set in Sketch.app: email + password fields, primary CTA, and a forgot-password text link',
	artboard:
		'iPhone 14 artboard 390×844 pt; 8pt grid; safe area respected; one Page named Auth',
	symbols:
		'Create Symbols: Button/Primary, Input/TextField, Text/Link; Shared Styles for Title/Body; pull colors from a Document Library if present',
	export_ops:
		'Mark CTA + logo for 1x/2x/3x PNG export; Export Artboard to PDF for review; list layer rename checklist before handoff',
} as const;

/** Short drama prompt generator 默认样例。 */
export const SHORT_DRAMA_PROMPT_PRESET = {
	episodes: '12 × 75s',
	hook: 'Intern exposes a payroll leak — the CEO recognizes their voice from a decade-old custody voicemail',
	cliffhanger:
		'Ep 6 ends on the CEO deleting the voicemail mid-playback; Ep 7 opens in a silent elevator stare-down',
	vertical_format: '9:16 mobile, burnt-in captions, thumb-stop cold open in first 2 seconds',
	genre: 'Modern workplace melodrama with family secret',
} as const;

/** Product design prompt builder 默认样例。 */
export const PRODUCT_DESIGN_PROMPT_PRESET = {
	persona:
		'Co-parents juggling custody weeks; one schedules, the other covers pickups — both on Android and iPhone',
	problem:
		'Calendar apps feel noisy; they need one-tap week view, custody-color lanes, and handoff notes without forced account linking',
	wireframe_scope:
		'Home week strip + custody lane legend; event detail sheet with handoff checklist; invite co-parent via SMS deep link (3 screens max)',
	design_tokens:
		'8pt grid, primary #2563eb, success #059669 for confirmed handoffs, rounded-lg cards, WCAG AA contrast on captions',
} as const;

/** Android prompt builder 默认样例。 */
export const ANDROID_PROMPT_PRESET = {
	feature_spec:
		'Offline-first reading list: save articles from share sheet, full-text search, swipe-to-archive with undo snackbar',
	kotlin_stack: 'Kotlin 2.0, Jetpack Compose, Material 3, Room + FTS4, Hilt, WorkManager sync when online',
	compose_ui:
		'LazyColumn with sticky date headers; SwipeToDismissBox; ModalBottomSheet share targets; empty state illustration',
	gradle_constraints: 'minSdk 26, targetSdk 35, single :app module + :core:data; baseline profile for startup',
} as const;

/** iOS prompt builder 默认样例。 */
export const IOS_PROMPT_PRESET = {
	feature_spec:
		'Health dashboard: weekly step trends, resting heart rate band, HealthKit read permissions with plain-language rationale',
	swift_stack: 'Swift 5.10, SwiftUI, iOS 17+, async/await, SwiftData cache for offline summaries',
	swiftui_ui: 'NavigationStack, Charts framework, permission gate sheet before first HealthKit query',
	hig_constraints:
		'Dynamic Type through XXL, VoiceOver labels on chart points, no force-unwrap in sample code paths',
} as const;

/** Writing prompt generator 各模式预设（Script 与 film 页去重：灯塔传真谜题，非餐车）。 */
export const WRITING_PROMPT_PRESETS = {
	dialogue: {
		genre: 'Contemporary drama',
		characters: 'Maya (barista, guarded) and Jonah (musician, optimistic)',
		setting: 'Rainy late-night diner, neon sign flickering outside the window',
		conflict: "Maya recognizes Jonah's song about her ex; neither admits it over the last slice of pie",
		tone: 'Subtext-heavy, naturalistic dialogue; no exposition dumps; pauses carry meaning',
	},
	character: {
		name: 'Elena Voss',
		traits: 'Meticulous archivist, dry humor, afraid of irrelevance after digitization',
		goal: 'Prove a forged letter is real before the museum gala where her department is cut',
		flaw: 'Trusts documents over people; misses tone in live conversation',
		voice: 'Short sentences, precise vocabulary, occasional self-deprecation when cornered',
	},
	script: {
		premise:
			'A retired lighthouse keeper receives weather-fax messages that describe local accidents hours before they happen',
		structure:
			'Limited series (6 episodes): isolation setup, first correct prediction, town skepticism, moral choice, human sender reveal, cost of silence',
		notes:
			'Each episode ends on a binary choice the keeper cannot undo; strong sense of place; minimal exposition',
	},
} as const;

/** Writing prompt generator Random 模式词库。 */
export const WRITING_PROMPT_RANDOM = {
	genres: ['Literary fiction', 'Cozy mystery', 'Near-future sci-fi', 'Rom-com', 'Southern gothic', 'YA adventure'],
	settings: [
		'Abandoned subway platform after last train',
		'Community garden at dawn after frost',
		'Storm-lashed lighthouse radio room',
		'VR arcade after hours, one booth still lit',
		'Small-town library basement archive',
	],
	objects: [
		'A locked diary with half the pages torn out',
		'A wrong-number voicemail saved three years ago',
		'A half-finished map marked “do not fold”',
		'A borrowed wedding ring in an envelope',
		'A dog that refuses to leave the bus stop',
	],
	emotions: ['Bittersweet hope', 'Slow-burn dread', 'Giddy embarrassment', 'Quiet defiance', 'Nostalgic guilt'],
	conflicts: [
		'A secret debt comes due the night before the wedding',
		'Two truths cannot both be public without hurting a child',
		'A promise made to the wrong person on the record',
		'Success would betray the friend who covered for them',
	],
} as const;

/** Prompt template builder (S0) 场景芯片预设。 */
export const PROMPT_TEMPLATE_PRESETS = {
	code: {
		free: '',
		role: 'You are a senior code reviewer focused on security, correctness, and readability.',
		task: 'Review the pull request diff I paste next. List blocking issues first, then suggestions. Reference file and line when possible.',
		constraints:
			'Stay factual. Do not rewrite the whole patch. Max 12 bullet points. Flag secrets, injection, and missing tests.',
		output: 'Markdown with sections: Blocking, Suggestions, Questions.',
	},
	movie: {
		free: '',
		role: 'You are a feature-film screenwriting consultant for theatrical three-act structure.',
		task: 'From the logline in my next message, draft a beat sheet with scene headings, turning points, and protagonist want vs need.',
		constraints:
			'Show do not tell. One clear protagonist arc. Keep under 900 words unless I ask for more.',
		output: 'Markdown: Logline recap, Act I/II/III beats, optional dialogue seed for the midpoint.',
	},
	shortDrama: {
		free: '',
		role: 'You are a vertical short-drama (60–90s episodes) story editor for mobile binge viewing.',
		task: 'Turn my premise into a serial outline: episode hooks, cliffhangers, and payoffs for thumb-scroll audiences.',
		constraints:
			'Fast dialogue. 8–12 episodes by default. Each episode ends on a visual or emotional hook within 3 seconds of runtime end.',
		output: 'Markdown table: Episode #, Hook, Core conflict, Cliffhanger.',
	},
	android: {
		free: '',
		role: 'You are a senior Android engineer (Kotlin, Jetpack Compose, Material 3).',
		task: 'Implement the feature I describe in the next message with production-minded structure and testability.',
		constraints:
			'MVVM or MVI. No deprecated APIs. Call out Gradle/module boundaries, minSdk, and background work rules.',
		output: 'Kotlin snippets + brief package layout + one unit-test sketch.',
	},
	ios: {
		free: '',
		role: 'You are a senior iOS engineer (Swift, SwiftUI, iOS 17+).',
		task: 'Implement the feature I describe in the next message following Apple HIG and modern concurrency.',
		constraints:
			'Prefer async/await. Mention target + test targets. No force-unwrap in sample code; note accessibility labels.',
		output: 'Swift snippets + file layout + PreviewProvider or test stub.',
	},
} as const;
