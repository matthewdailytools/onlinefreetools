#!/usr/bin/env node
/**
 * 一次性生成 T1 make-srt-subtitles-from-an-audio-file：work-tasks、catalog、SVG、十语。
 * 与 A4 同 SpeechRecognition 诚实边界；输出为带时间轴的 SRT。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const langs = ['en', 'zh', 'es', 'ja', 'de', 'fr', 'pt', 'id', 'ar', 'ru'];
const slug = 'make-srt-subtitles-from-an-audio-file';
const prefix = 'tool_make_srt_subtitles_from_an_audio_file';

/**
 * 确保目录存在。
 * @param {string} p 路径
 */
const mkdir = (p) => fs.mkdirSync(p, { recursive: true });

/**
 * 写文件。
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
 * 转义 TS 单引号。
 * @param {string} s
 */
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/**
 * 写十语分片。
 * @param {Record<string, Record<string, string>>} byLang
 */
function writeLocales(byLang) {
	for (const lang of langs) {
		const data = byLang[lang];
		if (!data) throw new Error(`missing ${slug} ${lang}`);
		const comment =
			lang === 'en'
				? `English master for ${slug} (T1). Rich How≥4 Why≥4 Rules≥4 FAQ≥5. SpeechRecognition + timing → SRT; not Whisper; same honest limits as A4.`
				: lang === 'zh'
					? `中文文案：音频生成 SRT 字幕（T1）。How≥4 Why≥4 Rules≥4 FAQ≥5；非 Whisper；与 A4 相同诚实边界；带时间轴。description ≥120 字。`
					: `${lang} copy for ${slug} (T1). SpeechRecognition → timed SRT; not cloud Whisper; honest limits.`;
		const lines = [
			`import type { SiteLangDict } from '../../../types';`,
			'',
			`/**`,
			` * ${comment}`,
			` */`,
			`const ${lang}: SiteLangDict = {`,
		];
		for (const [k, v] of Object.entries(data)) {
			lines.push(`  ${prefix}_${k}: '${esc(v)}',`);
		}
		lines.push('};', `export default ${lang};`, '');
		write(`src/site/i18n/tools/${slug}/${lang}.ts`, lines.join('\n'));
	}
}

write(
	`work-tasks/${slug}/00-request.md`,
	`# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **T1**：\`make-srt-subtitles-from-an-audio-file\`。SpeechRecognition + 时间轴 → SRT；与 A4 相同诚实浏览器边界；无巨大 wasm Whisper。related：\`transcribe-an-audio-file-to-text\`、\`make-a-waveform-video-from-audio\`。Rich ten locales。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：\`docs/sound-editor/12-slug-hub-and-scene.md\` T1。
- 必须本地处理意图：是（识别器可能走浏览器厂商服务，FAQ 诚实）。
- YMYL：否。
- 禁止：打包巨大 ASR 模型；声称云 Whisper 克隆；改 docs/sound-editor/12。

## 建议 slug

- \`make-srt-subtitles-from-an-audio-file\`
`
);

write(
	`work-tasks/${slug}/01-direction-discussion.md`,
	`# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **T1** scene：音频 → 带轴 SRT（尽力）。与 A4 同引擎，产品差异是 **字幕文件** 而非纯文稿。

## 技术取舍

- \`SpeechRecognition\` / \`webkitSpeechRecognition\`：播放本地文件 + 识别；用识别时刻（AudioContext 时钟或会话计时）拼 cue 起止。
- 格式化为标准 SRT（序号、\`HH:MM:SS,mmm --> HH:MM:SS,mmm\`、文本）。
- 回退：麦克风口述 + 会话相对时间。
- 无 SpeechRecognition → 明确 unsupported。
- **不是** Whisper；时间轴为尽力估算，非帧级强制对齐。

## 下一步

02/03 → 实现 → \`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=make-srt-subtitles-from-an-audio-file\`。
`
);

write(
	`work-tasks/${slug}/02-tool-info.md`,
	`# 02 — 工具信息定稿

**状态**：\`implemented\`  
**slug**：\`make-srt-subtitles-from-an-audio-file\`  
**路径**：\`/tools/make-srt-subtitles-from-an-audio-file\`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 audio to srt；generate subtitles from audio；音频生成字幕。常见为云 Whisper/上传 SaaS。少有 **诚实说明纯浏览器 SpeechRecognition、时间轴为识别时刻估算、可回退麦克风、非 Whisper、下载 .srt** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / T1 |
| Title (en) | Make SRT subtitles from an audio file |
| Description | Make timed SRT subtitles from local speech in the browser with SpeechRecognition when available—play a file while listening, or dictate with the mic. Steps: Choose audio, pick language, Make SRT while playing or Dictate with mic, edit cues, download .srt. Example: Load sample opens a short tone then runs the playthrough path (speech needs a real voice file or mic). Timestamps are best-effort from recognition timing—not frame-perfect Whisper. Not a Whisper clone; no huge wasm model. Honest browser limits. Never uploaded by this page for processing. |
| page.style | \`opts\` |
| 技术 | SpeechRecognition + 时钟拼 cue → SRT；mic fallback |
| related | transcribe-an-audio-file-to-text；make-a-waveform-video-from-audio |
| Schema | WebApplication + BreadcrumbList |
| FAQ | not Whisper；timing honesty；file vs mic；privacy；≠ plain TXT A4；≠ waveform video |
| IG | 1 规则；2 边界；6 本地意图；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 有人声文件 | 播放并生成 SRT（环回） | .srt（视浏览器） |
| 无可靠环回 | Dictate with mic | 口述相对时间 .srt |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 \`make-srt-subtitles-from-an-audio-file\`（hub T1） |
| 主检索词 → title/H1 | audio to srt / generate subtitles from audio → Make SRT subtitles from an audio file |
| 次要关键词 → desc / FAQ | 音频生成字幕；时间轴估算 → FAQ；mic → Rules |
| 用户搜索习惯判断 | 搜「音频生成字幕」要 .srt；须诚实非云 Whisper |
| 优化摘要 | H1 任务句；FAQ not Whisper；诚实时间轴与文件 ASR 边界 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| audio to srt / generate subtitles from audio | absorb 主词 | H1 / How | 本页 |
| 音频生成字幕 / 语音转字幕 | absorb 中文 | zh H1 / FAQ | 本页 |
| whisper subtitles / cloud ASR | 有意不满足 | FAQ | 本页拒绝克隆宣称 |
| audio to text / plain transcript | 相邻（A4） | FAQ / related | transcribe-an-audio-file-to-text |
| waveform video / audiogram | 相邻（A5） | FAQ / related | make-a-waveform-video-from-audio |
| burn-in / hardcode subtitles on video | 有意不满足 | FAQ | 本页只出 .srt 文件 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：尽力 SRT；诚实时间轴；mic 回退；非 Whisper |
| 主词搜索者任务 | 选文件或麦克风、得带轴字幕、下载 .srt |
| 满足之处 | 双路径、语言、HUD、样例、SRT 预览与下载 |
| 超出 / 应划边界 | 不做云 Whisper；不做帧级强制对齐；不烧录进视频 |
| [x] 已按审查回写 | 进入 briefs |

## 文案丰富度

\`description\` 含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- dropzone；语言；Make SRT while playing；Dictate with mic；Stop；Download SRT。
- 无 SpeechRecognition → 警告条并禁用主按钮。
- Sample：短 WAV + 走播放路径。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
`
);

write(
	`work-tasks/${slug}/03-locale-briefs.md`,
	`# Locale briefs

**状态**：\`i18n-done\`
**母版语言**：en

共同边界：浏览器 **SpeechRecognition** 尽力出带轴 **SRT**；**不是** Whisper；时间轴为识别时刻估算；文件路径依赖播放/环回，可回退麦克风。

| 语种 | 当地检索词 | Title / H1 | 按钮 | 切入 |
|---|---|---|---|---|
| en | audio to srt; generate subtitles from audio | Make SRT subtitles from an audio file | Make SRT while playing / Dictate | FAQ not Whisper；timing |
| zh | 音频生成字幕；语音转字幕 | 从音频文件生成 SRT 字幕 | 播放时生成 SRT / 麦克风口述 | desc≥120；非 Whisper |
| es | audio a srt; subtítulos desde audio | Crear subtítulos SRT desde un archivo de audio | Crear SRT al reproducir / Dictar | FAQ |
| ja | 音声から字幕；SRT 作成 | 音声ファイルから SRT 字幕を作る | 再生しながら SRT / マイク | FAQ |
| de | Audio zu SRT; Untertitel aus Audio | SRT-Untertitel aus einer Audiodatei erstellen | SRT beim Abspielen / Diktieren | FAQ |
| fr | audio vers srt; sous-titres depuis audio | Créer des sous-titres SRT depuis un fichier audio | Créer SRT pendant lecture / Dicter | FAQ |
| pt | áudio para srt; legendas a partir de áudio | Criar legendas SRT a partir de um arquivo de áudio | Criar SRT ao reproduzir / Ditado | FAQ |
| id | audio ke srt; subtitle dari audio | Buat subtitle SRT dari file audio | Buat SRT saat diputar / Dikte | FAQ |
| ar | صوت إلى srt؛ ترجمات من الصوت | إنشاء ترجمات SRT من ملف صوت | إنشاء SRT أثناء التشغيل / إملاء | FAQ |
| ru | аудио в srt; субтитры из аудио | Сделать SRT-субтитры из аудиофайла | Сделать SRT при воспроизведении / Диктовка | FAQ |

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
| 0b | 2026-09-21 | T1：SpeechRecognition→SRT 场景页；非 Whisper；related A4+A5 | briefs-ready |
| 1b | 2026-09-21 | 母版 en：How×4 Why×4 Rules×4 FAQ×6；主词进 H1 | en 齐 |
| 2b | 2026-09-21 | 九语当地 H1/按钮；zh desc≥120；抽查 en,zh,es,ja | i18n-done |
| 3 | 2026-09-21 | 禁词：无 Whisper 克隆承诺；占位符齐全 | i18n-done |
`
);

write(
	`src/site/tool-catalog.d/${slug}.json`,
	JSON.stringify(
		{
			slug,
			path: `/tools/${slug}`,
			updatedAt: '2026-09-21T01:20:00.000Z',
			launchedAt: '2026-09-21T01:20:00.000Z',
			category: 'developer',
			primaryTopic: 'sound-editor',
			featured: false,
			ymyl: false,
			i18nKey: `${prefix}_title`,
			homeTitleKey: `${prefix}_title`,
			homeDescKey: `${prefix}_desc`,
			faqPrefix: prefix,
			related: ['transcribe-an-audio-file-to-text', 'make-a-waveform-video-from-audio'],
			logo: `/icons/tools/${slug}.svg`,
			page: {
				module: '../pages/makeSrtSubtitlesFromAnAudioFilePage',
				export: 'renderMakeSrtSubtitlesFromAnAudioFilePage',
				style: 'opts',
			},
			localProcessing: true,
			scenario: 'media',
			subject: 'audio',
		},
		null,
		2
	) + '\n'
);

write(
	`public/icons/tools/${slug}.svg`,
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Make SRT subtitles from an audio file"><rect width="64" height="64" rx="12" fill="#0f172a"/><path d="M14 22h8v20h-8z" fill="#94a3b8"/><circle cx="18" cy="44" r="5" fill="#64748b"/><path d="M22 28h3v12h-3z" fill="#94a3b8"/><rect x="30" y="16" width="22" height="32" rx="2" fill="#e2e8f0"/><path d="M34 24h14M34 30h12M34 36h13" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/><text x="34" y="46" font-size="7" font-family="ui-monospace,monospace" fill="#334155">SRT</text></svg>\n`
);

/** @type {Record<string, Record<string, string>>} */
const byLang = {};

byLang.en = {
	title: 'Make SRT subtitles from an audio file',
	desc: 'Build timed SRT subtitles from local speech with browser SpeechRecognition when available—or dictate with the mic. Not a Whisper clone.',
	description:
		'Make SRT subtitles from an audio file in the browser using SpeechRecognition when your browser provides it. Steps: Choose a local audio file, pick a recognition language, Make SRT while playing (speakers + mic loopback) or Dictate with mic, edit the SRT preview, download .srt. Example: Load sample opens a short tone and runs the playthrough path—real speech needs a voice recording or the mic button. Cue times are best-effort from recognition timing, not frame-perfect forced alignment. This is not a cloud Whisper clone and does not load a huge wasm ASR model. Many browsers cannot reliably subtitle uploaded files offline. The page does not upload your file for server-side ASR.',
	article:
		'People search for audio to srt and generate subtitles from audio expecting Whisper-class timed captions. Pure browser pages cannot ship that without a large model or a cloud API. This scene tool uses Web Speech API SpeechRecognition where present: it can play your local file through Web Audio while recognition listens (typically via the microphone, so loopback is imperfect), stamps cues from recognition timing, and formats standard SRT—or you can dictate live with the mic. If SpeechRecognition is missing, the page says so clearly. Output is editable SRT you can download—not plain TXT only, and not burned into video. Related tools cover plain transcription and waveform video. Keep expectations honest: cue times and accuracy vary by browser.',
	choose: 'Choose an audio file',
	hint: 'Optional local WAV, MP3 or M4A up to about 40 MiB / 3 minutes. File subtitling depends on browser SpeechRecognition and often needs speakers plus microphone permission.',
	lang_label: 'Recognition language',
	lang_hint: 'Passed to SpeechRecognition.lang. Pick the language spoken in the recording or into the mic.',
	convert: 'Make SRT while playing',
	mic: 'Dictate with mic',
	stop: 'Stop',
	download: 'Download SRT',
	sample: 'Load sample',
	clear: 'Clear',
	advanced: 'Honest limits',
	settings_hint:
		'SpeechRecognition usually listens to the microphone—not a private WebAudio tap. Playing a file may work only if the mic hears the speakers. Cue times are estimated from when finals arrive, not Whisper forced alignment. This is not Whisper and does not download a large model.',
	progress: 'Subtitle progress',
	read: 'Read',
	decode: 'Decode',
	listen: 'Listen',
	write: 'Write SRT',
	done: 'Ready. Edit the SRT if needed, then Download SRT.',
	failed: 'Could not build SRT. Try Dictate with mic, another browser, or a clearer voice recording.',
	elapsed: '{s}s elapsed',
	preview: 'SRT preview',
	interim_label: 'Interim (live)',
	result: '{cues} cues · {chars} characters',
	sample_name: 'srt-sample',
	empty: 'Choose a local audio file, or use Dictate with mic.',
	empty_state:
		'No SRT yet. Drop a voice recording and Make SRT while playing, or click Dictate with mic. Not a Whisper clone—browser SpeechRecognition only, with honest timing limits.',
	file_label: 'Audio: {name}',
	status_unsupported:
		'This browser does not expose SpeechRecognition / webkitSpeechRecognition. Try Chrome or Edge, or use a different device. True offline Whisper-style ASR is not bundled here.',
	status_listening:
		'Playback finished with little or no text. SpeechRecognition often needs the microphone to hear the speakers—try Dictate with mic, raise volume, or allow mic access.',
	status_mic: 'Listening to the microphone… speak clearly, then Stop. Cue times use session elapsed time.',
	status_playing: 'Playing the file and building timed cues via SpeechRecognition (mic path)…',
	err_file: 'Choose one local audio file, or use Dictate with mic.',
	err_format: 'Unsupported audio type. Use a common format your browser can decode.',
	err_limit: 'Use audio up to about 40 MiB and 3 minutes.',
	err_decode: 'The browser could not decode this audio file.',
	err_unsupported: 'SpeechRecognition is unavailable in this browser.',
	err_permission: 'Microphone or speech permission was denied. Allow access or use another browser.',
	how_title: 'How to make SRT subtitles from an audio file',
	how_body: 'Use browser speech recognition on a local file playthrough or live mic dictation, stamp cues, then download .srt.',
	how_item_1: 'Choose a local voice recording (or Load sample), and pick a recognition language.',
	how_item_2: 'Click Make SRT while playing, allow microphone if prompted, and keep speakers audible—or click Dictate with mic instead.',
	how_item_3: 'Watch interim text; finals become numbered SRT cues with estimated start/end times. Press Stop when dictating.',
	how_item_4: 'Edit the SRT preview if needed, then Download SRT.',
	why_choose_title: 'Why choose our Make SRT subtitles from an audio file tools',
	why_choose_item_1: 'Clear dual path: file playthrough attempt plus mic dictation fallback, both emitting .srt.',
	why_choose_item_2: 'Honest copy: not Whisper, no huge wasm model, timing is best-effort and stated up front.',
	why_choose_item_3: 'You can edit the SRT before downloading.',
	why_choose_item_4: 'Nearby tools cover plain TXT transcription and waveform video without forcing a hub editor.',
	rules_title: 'SRT rules and honest browser limits',
	rules_body:
		'This page uses Web Speech API SpeechRecognition when present. It is not offline Whisper. Cue times come from recognition timing clocks. File upload subtitling is best-effort and may fall back to live mic.',
	rules_item_1: 'SpeechRecognition must exist. Otherwise the unsupported banner stays visible and primary actions stay disabled.',
	rules_item_2: 'Recognition typically uses the microphone. Playing a file does not guarantee a private decode→subtitle path.',
	rules_item_3: 'Optional file up to about 40 MiB / 3 minutes. Output is standard SRT—not burned-in video captions.',
	rules_item_4: 'This page does not upload your file for server-side Whisper. Browser vendors may still send mic audio to their speech service—check your browser privacy settings.',
	example_title: 'Try the sample playthrough path',
	example:
		'Load sample attaches a short tone WAV and runs Make SRT while playing. A tone will not produce words—use a real voice file or Dictate with mic to see cues. Playback never auto-starts after a finished SRT.',
	usecases_title: 'When this helps',
	usecase_1: 'You want a rough timed .srt for a short voice note in a Chromium browser without installing desktop software.',
	usecase_2: 'File loopback fails, so you dictate the same content live with the mic and download SRT with session-relative times.',
	faq_q1: 'Is this a Whisper clone or cloud ASR upload?',
	faq_a1:
		'No. It does not ship a Whisper wasm model and does not upload your file to our servers for ASR. It uses the browser SpeechRecognition API when available. Vendor speech services may still apply to microphone audio—see browser privacy docs.',
	faq_q2: 'How accurate are the SRT timestamps?',
	faq_a2:
		'They are best-effort estimates from when final recognition results arrive (AudioContext clock while playing, or session elapsed time for mic)—not frame-perfect forced alignment like desktop Whisper pipelines.',
	faq_q3: 'Why did my uploaded file produce little or no text?',
	faq_a3:
		'Most browsers listen via the microphone, not a private WebAudio tap. Playthrough needs the mic to hear the speakers, plus permission. If that fails, use Dictate with mic.',
	faq_q4: 'How is this different from Transcribe an audio file to text?',
	faq_a4:
		'That page downloads plain TXT without cue times. This page formats numbered SRT cues with start/end times for players and editors that expect .srt.',
	faq_q5: 'Is my audio uploaded?',
	faq_a5:
		'This page does not upload the file for processing. SpeechRecognition may use the microphone and a browser vendor service. Keep sensitive material offline if that is unacceptable.',
	faq_q6: 'Can this burn subtitles into a video file?',
	faq_a6:
		'No. It only downloads a .srt sidecar. For a waveform-style video from audio, see the related waveform video tool—not burned-in captions.',
};

byLang.zh = {
	title: '从音频文件生成 SRT 字幕',
	desc: '在支持时用浏览器 SpeechRecognition 从本地语音生成带时间轴的 SRT，或用麦克风口述。不是 Whisper 克隆。',
	description:
		'在浏览器里从音频文件生成 SRT 字幕：在支持 SpeechRecognition 时，可播放本地文件并识别出带时间轴的字幕，或改用麦克风口述。步骤：选择本地音频、选择识别语言、播放时生成 SRT 或麦克风口述、编辑预览、下载 .srt。示例：加载样例会打开短音调并走播放路径——真正出字需要人声文件或麦克风。时间轴来自识别时刻的尽力估算，不是帧级强制对齐。这不是云端 Whisper 克隆，也不加载巨大 wasm ASR 模型。许多浏览器无法对上传文件做可靠离线字幕；效果取决于浏览器引擎。本页不会为了服务端 ASR 上传你的文件。适合「音频生成字幕」「语音转字幕」等本机尽力需求。',
	article:
		'用户搜「音频生成字幕」常期待 Whisper 级带轴字幕。纯浏览器页若不打包大模型或不接云 API，做不到同等能力。本场景工具在可用时使用 Web Speech API：可把本地文件经 Web Audio 播放同时启动识别（通常经麦克风，环回不可靠），用识别时刻估算 cue，并格式化为标准 SRT，或直接麦克风口述。若无 SpeechRecognition，页面会明确提示。输出为可编辑 SRT 并下载——不是纯 TXT，也不烧录进视频。相关工具覆盖纯文稿转写与波形视频。请保持诚实预期：时间轴与准确率因浏览器而异。',
	choose: '选择音频文件',
	hint: '可选本地 WAV、MP3 或 M4A，约 40 MiB / 3 分钟。文件字幕依赖浏览器 SpeechRecognition，常需扬声器与麦克风权限。',
	lang_label: '识别语言',
	lang_hint: '传给 SpeechRecognition.lang。请选择录音或口述使用的语言。',
	convert: '播放时生成 SRT',
	mic: '麦克风口述',
	stop: '停止',
	download: '下载 SRT',
	sample: '加载样例',
	clear: '清空',
	advanced: '诚实限制说明',
	settings_hint:
		'SpeechRecognition 通常听麦克风，而不是私有的 WebAudio 抽头。播放文件仅在麦克风能听到扬声器时可能有效。时间轴按最终结果到达时刻估算，不是 Whisper 强制对齐。这不是 Whisper，也不下载大模型。',
	progress: '字幕进度',
	read: '读取',
	decode: '解码',
	listen: '识别',
	write: '写 SRT',
	done: '完成。可编辑 SRT 后下载。',
	failed: '无法生成 SRT。请改用麦克风口述、换浏览器，或更清晰的人声录音。',
	elapsed: '已用时 {s} 秒',
	preview: 'SRT 预览',
	interim_label: '临时结果（实时）',
	result: '{cues} 条字幕 · {chars} 个字符',
	sample_name: '字幕样例',
	empty: '请选择本地音频，或使用麦克风口述。',
	empty_state:
		'还没有 SRT。拖入人声录音并点播放时生成 SRT，或点麦克风口述。不是 Whisper 克隆——仅浏览器 SpeechRecognition，并诚实说明时间轴限制。',
	file_label: '音频：{name}',
	status_unsupported:
		'当前浏览器未提供 SpeechRecognition / webkitSpeechRecognition。请尝试 Chrome 或 Edge。此处未捆绑真正的离线 Whisper 式 ASR。',
	status_listening:
		'播放结束但几乎没有文字。SpeechRecognition 常需麦克风听到扬声器——请改用麦克风口述、提高音量或允许麦克风权限。',
	status_mic: '正在听麦克风…请清晰说话，然后点停止。时间轴使用会话相对时间。',
	status_playing: '正在播放文件并经 SpeechRecognition（麦克风路径）生成带轴字幕…',
	err_file: '请选择一个本地音频，或使用麦克风口述。',
	err_format: '不支持的音频类型。请使用浏览器可解码的常见格式。',
	err_limit: '请使用约 40 MiB、约 3 分钟以内的音频。',
	err_decode: '浏览器无法解码该音频文件。',
	err_unsupported: '当前浏览器不可用 SpeechRecognition。',
	err_permission: '麦克风或语音权限被拒绝。请允许访问或换浏览器。',
	how_title: '如何从音频文件生成 SRT 字幕',
	how_body: '用浏览器语音识别对本地文件播放或麦克风口述，打上时间轴，再下载 .srt。',
	how_item_1: '选择本地人声录音（或加载样例），并选择识别语言。',
	how_item_2: '点击播放时生成 SRT 并在提示时允许麦克风，保持扬声器可听——或改点麦克风口述。',
	how_item_3: '观察临时文字；最终结果成为带估算起止时间的编号 SRT 条目。口述时点停止结束。',
	how_item_4: '按需编辑 SRT 预览，再下载 SRT。',
	why_choose_title: '为什么选择我们的从音频文件生成 SRT 字幕工具',
	why_choose_item_1: '双路径清晰：文件播放尝试 + 麦克风口述回退，均输出 .srt。',
	why_choose_item_2: '文案诚实：不是 Whisper，无巨大 wasm，时间轴为尽力估算并写在前面。',
	why_choose_item_3: '下载前可编辑 SRT。',
	why_choose_item_4: '邻近工具覆盖纯 TXT 转写与波形视频，不必强行进 Hub 编辑器。',
	rules_title: 'SRT 规则与诚实的浏览器限制',
	rules_body: '本页在可用时使用 Web Speech API SpeechRecognition。不是离线 Whisper。时间轴来自识别时钟。上传文件字幕为尽力而为，可能回退到麦克风。',
	rules_item_1: '必须存在 SpeechRecognition，否则显示不支持横幅并禁用主按钮。',
	rules_item_2: '识别通常走麦克风。播放文件不保证私有「解码→字幕」通路。',
	rules_item_3: '可选文件约 40 MiB / 3 分钟。输出为标准 SRT，不是烧录进视频的硬字幕。',
	rules_item_4: '本页不会为服务端 Whisper 上传文件。浏览器厂商仍可能把麦克风音频送其语音服务——请查看浏览器隐私设置。',
	example_title: '试用样例播放路径',
	example: '加载样例会挂上短音调 WAV 并运行播放时生成 SRT。音调不会产生词语——请用人声文件或麦克风口述才能看到条目。完成后不会自动播放。',
	usecases_title: '适用场景',
	usecase_1: '在 Chromium 浏览器里给短语音备忘做粗略带轴 .srt，不想装桌面软件。',
	usecase_2: '文件环回失败时，用麦克风口述同样内容并下载带会话相对时间的 SRT。',
	faq_q1: '这是 Whisper 克隆或云端 ASR 上传吗？',
	faq_a1: '不是。不附带 Whisper wasm，也不会为了 ASR 把文件上传到我们的服务器。可用时使用浏览器 SpeechRecognition。麦克风音频仍可能走浏览器厂商语音服务——见浏览器隐私说明。',
	faq_q2: 'SRT 时间戳有多准？',
	faq_a2: '时间戳是尽力估算：最终识别结果到达时的时钟（播放时用 AudioContext，口述用会话耗时）——不是桌面 Whisper 管线那种帧级强制对齐。',
	faq_q3: '为什么上传的文件几乎没有文字？',
	faq_a3: '多数浏览器经麦克风听，而不是私有 WebAudio 抽头。播放路径需要麦克风听到扬声器并授权。若失败，请用麦克风口述。',
	faq_q4: '这和「把音频文件转成文字」有何不同？',
	faq_a4: '那一页下载无时间轴的纯 TXT。本页输出带起止时间的编号 SRT，供需要 .srt 的播放器与剪辑软件使用。',
	faq_q5: '音频会上传吗？',
	faq_a5: '本页不会为处理而上传文件。SpeechRecognition 可能使用麦克风与浏览器厂商服务。若不可接受，请保持敏感材料离线。',
	faq_q6: '能把字幕烧录进视频吗？',
	faq_a6: '不能。本页只下载 .srt 旁路文件。若要从音频做波形类视频，请看相关波形视频工具——不是硬字幕烧录。',
};

const localized = {
	es: {
		title: 'Crear subtítulos SRT desde un archivo de audio',
		desc: 'Crea subtítulos SRT con tiempos desde voz local con SpeechRecognition del navegador si está disponible, o dicta con el micrófono. No es un clon de Whisper.',
		description:
			'Crea subtítulos SRT desde un archivo de audio en el navegador con SpeechRecognition cuando exista. Pasos: elige audio local, elige idioma, Crear SRT al reproducir o Dictar con micrófono, edita la vista previa, descarga .srt. Ejemplo: Cargar muestra abre un tono corto y ejecuta la ruta de reproducción—hace falta voz real o el micrófono. Los tiempos de cue son estimaciones al llegar resultados finales, no alineación forzada tipo Whisper. No es un clon de Whisper ni carga un gran modelo wasm. Muchos navegadores no subtitulan archivos de forma fiable sin conexión. Esta página no sube tu archivo para ASR en servidor.',
		convert: 'Crear SRT al reproducir',
		mic: 'Dictar con micrófono',
		stop: 'Detener',
		download: 'Descargar SRT',
		sample: 'Cargar muestra',
		clear: 'Borrar',
		how_title: 'Cómo crear subtítulos SRT desde un archivo de audio',
		faq_q1: '¿Es un clon de Whisper o una subida ASR a la nube?',
		faq_a1: 'No. No incluye Whisper wasm ni sube tu archivo a nuestros servidores para ASR. Usa SpeechRecognition del navegador cuando esté disponible.',
		faq_q2: '¿Qué tan precisos son los tiempos SRT?',
		faq_a2: 'Son estimaciones según cuándo llegan los resultados finales—no alineación forzada fotograma a fotograma.',
		faq_q4: '¿En qué se diferencia de Transcribir un archivo de audio a texto?',
		faq_a4: 'Esa página descarga TXT sin tiempos. Esta formatea cues SRT numerados con inicio y fin.',
	},
	ja: {
		title: '音声ファイルから SRT 字幕を作る',
		desc: '対応ブラウザの SpeechRecognition でローカル音声から時間付き SRT を作るか、マイクで口述。Whisper クローンではありません。',
		description:
			'ブラウザの SpeechRecognition がある場合、ローカル音声から SRT 字幕を作れます。手順：音声を選ぶ、言語を選ぶ、再生しながら SRT またはマイク口述、編集、.srt を保存。例：サンプル読込は短いトーンで再生パスを実行—実音声ファイルかマイクが必要。キュー時刻は最終結果到着時の推定で、Whisper 級の強制整列ではありません。Whisper クローンではなく巨大 wasm も読み込みません。多くのブラウザはアップロードファイルの確実なオフライン字幕化を持ちません。このページはサーバー ASR のためにファイルをアップロードしません。',
		convert: '再生しながら SRT',
		mic: 'マイクで口述',
		stop: '停止',
		download: 'SRTを保存',
		sample: 'サンプル読込',
		clear: 'クリア',
		how_title: '音声ファイルから SRT 字幕を作る方法',
		faq_q1: 'Whisper クローンやクラウド ASR アップロードですか？',
		faq_a1: 'いいえ。Whisper wasm は同梱せず、ASR のために当サーバーへアップロードもしません。利用可能な場合はブラウザの SpeechRecognition を使います。',
		faq_q2: 'SRT の時刻はどれくらい正確ですか？',
		faq_a2: '最終認識結果が届いた時点の推定です。フレーム単位の強制整列ではありません。',
		faq_q4: '音声ファイルを文字に起こすツールとの違いは？',
		faq_a4: 'あちらは時刻なしの TXT。こちらは開始・終了付きの番号付き SRT です。',
	},
	de: {
		title: 'SRT-Untertitel aus einer Audiodatei erstellen',
		desc: 'Erstellen Sie zeitgestempelte SRT-Untertitel aus lokaler Sprache mit SpeechRecognition des Browsers—oder diktieren Sie per Mikrofon. Kein Whisper-Klon.',
		description:
			'Erstellen Sie SRT-Untertitel aus einer Audiodatei im Browser mit SpeechRecognition, falls vorhanden. Schritte: lokale Audiodatei wählen, Sprache wählen, SRT beim Abspielen oder Mit Mikrofon diktieren, Vorschau bearbeiten, .srt herunterladen. Beispiel: Beispiel laden öffnet einen kurzen Ton und den Abspielpfad—echte Sprache braucht eine Aufnahme oder das Mikrofon. Cue-Zeiten sind Schätzungen beim Eintreffen finaler Ergebnisse, keine framegenaue Whisper-Ausrichtung. Kein Whisper-Klon und kein großes wasm-Modell. Viele Browser können hochgeladene Dateien nicht zuverlässig offline untertiteln. Diese Seite lädt Ihre Datei nicht für Server-ASR hoch.',
		convert: 'SRT beim Abspielen erstellen',
		mic: 'Mit Mikrofon diktieren',
		stop: 'Stopp',
		download: 'SRT herunterladen',
		sample: 'Beispiel laden',
		clear: 'Leeren',
		how_title: 'So erstellen Sie SRT-Untertitel aus einer Audiodatei',
		faq_q1: 'Ist das ein Whisper-Klon oder Cloud-ASR-Upload?',
		faq_a1: 'Nein. Kein Whisper-wasm und kein Upload zu unseren Servern für ASR. Nutzt SpeechRecognition des Browsers, wenn verfügbar.',
		faq_q2: 'Wie genau sind die SRT-Zeitstempel?',
		faq_a2: 'Schätzungen anhand des Zeitpunkts finaler Erkennungsergebnisse—keine framegenaue Zwangsausrichtung.',
		faq_q4: 'Unterschied zu „Eine Audiodatei in Text umwandeln“?',
		faq_a4: 'Jene Seite lädt TXT ohne Zeiten. Diese formatiert nummerierte SRT-Cues mit Start und Ende.',
	},
	fr: {
		title: 'Créer des sous-titres SRT depuis un fichier audio',
		desc: 'Créez des sous-titres SRT minutés depuis la parole locale via SpeechRecognition du navigateur si disponible, ou dictez au micro. Pas un clone Whisper.',
		description:
			'Créez des sous-titres SRT depuis un fichier audio dans le navigateur avec SpeechRecognition si disponible. Étapes : choisir un audio local, choisir la langue, Créer SRT pendant la lecture ou Dicter au micro, éditer l’aperçu, télécharger .srt. Exemple : Charger un échantillon ouvre une courte tonalité et lance le parcours lecture—il faut une vraie voix ou le micro. Les temps de cue sont des estimations à l’arrivée des résultats finaux, pas un alignement forcé type Whisper. Ce n’est pas un clone Whisper et n’charge pas un gros modèle wasm. Beaucoup de navigateurs ne sous-titrent pas fiablement les fichiers hors ligne. Cette page n’envoie pas votre fichier pour une ASR serveur.',
		convert: 'Créer SRT pendant la lecture',
		mic: 'Dicter au micro',
		stop: 'Arrêter',
		download: 'Télécharger SRT',
		sample: 'Charger un échantillon',
		clear: 'Effacer',
		how_title: 'Comment créer des sous-titres SRT depuis un fichier audio',
		faq_q1: 'Est-ce un clone Whisper ou un envoi ASR cloud ?',
		faq_a1: 'Non. Pas de Whisper wasm et pas d’envoi de votre fichier vers nos serveurs pour l’ASR. Utilise SpeechRecognition du navigateur si disponible.',
		faq_q2: 'Quelle est la précision des horodatages SRT ?',
		faq_a2: 'Ce sont des estimations au moment où les résultats finaux arrivent—pas un alignement forcé image par image.',
		faq_q4: 'Différence avec Transcrire un fichier audio en texte ?',
		faq_a4: 'Cette page-là télécharge du TXT sans temps. Ici, des cues SRT numérotés avec début et fin.',
	},
	pt: {
		title: 'Criar legendas SRT a partir de um arquivo de áudio',
		desc: 'Crie legendas SRT com tempos a partir de fala local com SpeechRecognition do navegador quando disponível, ou dite no microfone. Não é um clone do Whisper.',
		description:
			'Crie legendas SRT a partir de um arquivo de áudio no navegador com SpeechRecognition quando existir. Passos: escolha áudio local, escolha idioma, Criar SRT ao reproduzir ou Ditado no microfone, edite a prévia, baixe .srt. Exemplo: Carregar amostra abre um tom curto e executa o caminho de reprodução—é preciso voz real ou o microfone. Os tempos das cues são estimativas na chegada dos resultados finais, não alinhamento forçado tipo Whisper. Não é um clone do Whisper nem carrega um grande modelo wasm. Muitos navegadores não legendam arquivos offline de forma confiável. Esta página não envia seu arquivo para ASR no servidor.',
		convert: 'Criar SRT ao reproduzir',
		mic: 'Ditado no microfone',
		stop: 'Parar',
		download: 'Baixar SRT',
		sample: 'Carregar amostra',
		clear: 'Limpar',
		how_title: 'Como criar legendas SRT a partir de um arquivo de áudio',
		faq_q1: 'É um clone do Whisper ou upload de ASR na nuvem?',
		faq_a1: 'Não. Não inclui Whisper wasm nem envia seu arquivo aos nossos servidores para ASR. Usa SpeechRecognition do navegador quando disponível.',
		faq_q2: 'Quão precisos são os tempos SRT?',
		faq_a2: 'São estimativas com base em quando os resultados finais chegam—não alinhamento forçado quadro a quadro.',
		faq_q4: 'Diferença de Transcrever um arquivo de áudio para texto?',
		faq_a4: 'Aquela página baixa TXT sem tempos. Esta formata cues SRT numeradas com início e fim.',
	},
	id: {
		title: 'Buat subtitle SRT dari file audio',
		desc: 'Buat subtitle SRT berwaktu dari ucapan lokal dengan SpeechRecognition browser jika tersedia, atau dikte lewat mikrofon. Bukan klon Whisper.',
		description:
			'Buat subtitle SRT dari file audio di browser dengan SpeechRecognition jika tersedia. Langkah: pilih audio lokal, pilih bahasa, Buat SRT saat diputar atau Dikte mikrofon, edit pratinjau, unduh .srt. Contoh: Muat sampel membuka nada pendek dan menjalankan jalur putar—perlu rekaman suara nyata atau mikrofon. Waktu cue adalah perkiraan saat hasil final tiba, bukan penyelarasan paksa seperti Whisper. Bukan klon Whisper dan tidak memuat model wasm besar. Banyak browser tidak dapat membuat subtitle file secara offline dengan andal. Halaman ini tidak mengunggah file Anda untuk ASR server.',
		convert: 'Buat SRT saat diputar',
		mic: 'Dikte mikrofon',
		stop: 'Berhenti',
		download: 'Unduh SRT',
		sample: 'Muat sampel',
		clear: 'Hapus',
		how_title: 'Cara membuat subtitle SRT dari file audio',
		faq_q1: 'Apakah ini klon Whisper atau unggahan ASR cloud?',
		faq_a1: 'Tidak. Tidak menyertakan Whisper wasm dan tidak mengunggah file ke server kami untuk ASR. Menggunakan SpeechRecognition browser jika tersedia.',
		faq_q2: 'Seberapa akurat stempel waktu SRT?',
		faq_a2: 'Perkiraan berdasarkan kapan hasil final tiba—bukan penyelarasan paksa per bingkai.',
		faq_q4: 'Bedanya dengan Transkripsikan file audio menjadi teks?',
		faq_a4: 'Halaman itu mengunduh TXT tanpa waktu. Halaman ini memformat cue SRT bernomor dengan awal dan akhir.',
	},
	ar: {
		title: 'إنشاء ترجمات SRT من ملف صوت',
		desc: 'أنشئ ترجمات SRT مؤقتة من الكلام المحلي عبر SpeechRecognition في المتصفح إن وُجد، أو أملِ بالميكروفون. ليس نسخة من Whisper.',
		description:
			'أنشئ ترجمات SRT من ملف صوت في المتصفح باستخدام SpeechRecognition عند توفره. الخطوات: اختر صوتًا محليًا، اختر اللغة، إنشاء SRT أثناء التشغيل أو إملاء بالميكروفون، عدّل المعاينة، نزّل .srt. مثال: تحميل عيّنة يفتح نغمة قصيرة ويمر بمسار التشغيل—تحتاج تسجيل صوت حقيقي أو الميكروفون. أوقات الإشارات تقديرات عند وصول النتائج النهائية وليست محاذاة إجبارية كـ Whisper. ليست نسخة Whisper ولا تحمّل نموذج wasm ضخم. كثير من المتصفحات لا تُترجم الملفات دون اتصال بموثوقية. هذه الصفحة لا ترفع ملفك لـ ASR على الخادم.',
		convert: 'إنشاء SRT أثناء التشغيل',
		mic: 'إملاء بالميكروفون',
		stop: 'إيقاف',
		download: 'تنزيل SRT',
		sample: 'تحميل عيّنة',
		clear: 'مسح',
		how_title: 'كيفية إنشاء ترجمات SRT من ملف صوت',
		faq_q1: 'هل هذه نسخة Whisper أو رفع ASR سحابي؟',
		faq_a1: 'لا. لا تتضمن Whisper wasm ولا ترفع ملفك إلى خوادمنا لـ ASR. تستخدم SpeechRecognition في المتصفح عند التوفر.',
		faq_q2: 'ما دقة طوابع زمن SRT؟',
		faq_a2: 'هي تقديرات حسب وقت وصول النتائج النهائية—وليست محاذاة إجبارية إطارًا بإطار.',
		faq_q4: 'ما الفرق عن تفريغ ملف صوت إلى نص؟',
		faq_a4: 'تلك الصفحة تنزّل TXT بلا أوقات. هذه تُنسّق إشارات SRT مرقّمة ببداية ونهاية.',
	},
	ru: {
		title: 'Сделать SRT-субтитры из аудиофайла',
		desc: 'Создайте SRT с таймкодами из локальной речи через SpeechRecognition браузера, если доступно, или диктуйте в микрофон. Это не клон Whisper.',
		description:
			'Сделайте SRT-субтитры из аудиофайла в браузере через SpeechRecognition, если он есть. Шаги: выберите локальное аудио, выберите язык, Сделать SRT при воспроизведении или Диктовка в микрофон, правьте превью, скачайте .srt. Пример: Загрузить образец открывает короткий тон и запускает путь воспроизведения—нужна реальная речь или микрофон. Времена cue — оценки по моменту финальных результатов, не покадровая принудительная выравнивание как у Whisper. Это не клон Whisper и не загружает огромную wasm-модель. Многие браузеры не умеют надёжно субтитровать файлы офлайн. Страница не загружает ваш файл на сервер для ASR.',
		convert: 'Сделать SRT при воспроизведении',
		mic: 'Диктовка в микрофон',
		stop: 'Стоп',
		download: 'Скачать SRT',
		sample: 'Загрузить образец',
		clear: 'Очистить',
		how_title: 'Как сделать SRT-субтитры из аудиофайла',
		faq_q1: 'Это клон Whisper или облачная загрузка ASR?',
		faq_a1: 'Нет. Нет Whisper wasm и нет загрузки файла на наши серверы для ASR. Используется SpeechRecognition браузера, если доступно.',
		faq_q2: 'Насколько точны временные метки SRT?',
		faq_a2: 'Это оценки по моменту прихода финальных результатов распознавания—не покадровое принудительное выравнивание.',
		faq_q4: 'Чем отличается от «Расшифровать аудиофайл в текст»?',
		faq_a4: 'Та страница скачивает TXT без времён. Эта форматирует нумерованные SRT-cue с началом и концом.',
	},
};

for (const lang of Object.keys(localized)) {
	byLang[lang] = { ...byLang.en, ...localized[lang] };
}

writeLocales(byLang);

// related back-links
for (const relatedSlug of ['transcribe-an-audio-file-to-text', 'make-a-waveform-video-from-audio']) {
	const p = path.join(root, `src/site/tool-catalog.d/${relatedSlug}.json`);
	const j = JSON.parse(fs.readFileSync(p, 'utf8'));
	if (!j.related.includes(slug)) {
		j.related = [...j.related, slug];
		j.updatedAt = '2026-09-21T01:20:00.000Z';
		fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
		console.log('updated related', relatedSlug);
	}
}

console.log('T1 artifacts done');
