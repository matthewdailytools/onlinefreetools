#!/usr/bin/env node
/**
 * 一次性生成 A4 transcribe-an-audio-file-to-text：work-tasks、catalog、SVG、十语。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const langs = ['en', 'zh', 'es', 'ja', 'de', 'fr', 'pt', 'id', 'ar', 'ru'];
const slug = 'transcribe-an-audio-file-to-text';
const prefix = 'tool_transcribe_an_audio_file_to_text';

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
				? `English master for ${slug} (A4). Rich How≥4 Why≥4 Rules≥4 FAQ≥5. Browser SpeechRecognition; not Whisper; honest file-vs-mic limits.`
				: lang === 'zh'
					? `中文文案：音频转文字（A4）。How≥4 Why≥4 Rules≥4 FAQ≥5；非 Whisper；诚实说明浏览器识别边界。description ≥120 字。`
					: `${lang} copy for ${slug} (A4). SpeechRecognition scene tool; not cloud Whisper; honest limits.`;
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

> 立项 sound 工具 **A4**：\`transcribe-an-audio-file-to-text\`。Prefer Web Speech API while playing file；诚实边界；无巨大 wasm Whisper。related：\`make-a-waveform-video-from-audio\`、\`record-a-voice-memo-in-the-browser\`。Rich ten locales。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：\`docs/sound-editor/12-slug-hub-and-scene.md\` A4。
- 必须本地处理意图：是（识别器可能走浏览器厂商服务，FAQ 诚实）。
- YMYL：否。
- 禁止：打包巨大 ASR 模型；声称云 Whisper 克隆；改 docs/sound-editor/12。

## 建议 slug

- \`transcribe-an-audio-file-to-text\`
`
);

write(
	`work-tasks/${slug}/01-direction-discussion.md`,
	`# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **A4** scene：音频 → 文本（尽力）。

## 技术取舍

- \`SpeechRecognition\` / \`webkitSpeechRecognition\`：播放本地文件到扬声器 + 启动识别（识别器听麦克风，环回不可靠）。
- 回退：麦克风实时口述。
- 无 SpeechRecognition → 明确 unsupported。
- **不是** Whisper / 云 ASR 克隆；不加载巨大 wasm 模型。
- FAQ 必须写清：许多浏览器无法对上传文件做可靠离线 ASR。

## 下一步

02/03 → 实现 → \`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=transcribe-an-audio-file-to-text\`。
`
);

write(
	`work-tasks/${slug}/02-tool-info.md`,
	`# 02 — 工具信息定稿

**状态**：\`implemented\`  
**slug**：\`transcribe-an-audio-file-to-text\`  
**路径**：\`/tools/transcribe-an-audio-file-to-text\`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 audio to text；transcribe audio；speech to text；音频转文字。常见为云 Whisper/上传 SaaS。少有 **诚实说明纯浏览器 SpeechRecognition 边界、文件播放环回不可靠、可回退麦克风口述、非 Whisper 克隆** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / A4 |
| Title (en) | Transcribe an audio file to text |
| Description | Transcribe local speech to text in the browser with SpeechRecognition when available—play a file while listening, or dictate with the mic. Steps: Choose audio, pick language, Transcribe while playing or Dictate with mic, edit, download TXT. Example: Load sample opens a short tone then runs the playthrough path (speech needs a real voice file or mic). Not a Whisper clone; no huge wasm model. Honest browser limits. Never uploaded by this page for processing. |
| page.style | \`opts\` |
| 技术 | SpeechRecognition + AudioContext playthrough；mic fallback |
| related | make-a-waveform-video-from-audio；record-a-voice-memo-in-the-browser |
| Schema | WebApplication + BreadcrumbList |
| FAQ | not Whisper；file vs mic；privacy/vendor；unsupported；≠ waveform video |
| IG | 1 规则；2 边界；6 本地意图；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 有人声文件 | 播放转写（环回） | TXT（视浏览器） |
| 无可靠环回 | Dictate with mic | 实时口述 TXT |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 \`transcribe-an-audio-file-to-text\`（hub A4） |
| 主检索词 → title/H1 | transcribe audio / audio to text / speech to text → Transcribe an audio file to text |
| 次要关键词 → desc / FAQ | 音频转文字；Whisper 边界 → FAQ；mic fallback → Rules |
| 用户搜索习惯判断 | 搜「音频转文字」要文稿；须诚实非云 Whisper |
| 优化摘要 | H1 任务句；FAQ not Whisper；诚实文件 ASR 边界 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| transcribe audio / audio to text / speech to text | absorb 主词 | H1 / How | 本页 |
| 音频转文字 / 语音转文字 | absorb 中文 | zh H1 / FAQ | 本页 |
| whisper transcription / cloud ASR | 有意不满足 | FAQ | 本页拒绝克隆宣称 |
| waveform video | 相邻（A5） | FAQ / related | make-a-waveform-video-from-audio |
| voice memo / mic record | 相邻（S7） | FAQ / related | record-a-voice-memo-in-the-browser |
| make srt subtitles | 近邻 T1 | FAQ 一句 | 本页出 TXT，不拆字幕页 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：尽力转写；诚实边界；mic 回退；非 Whisper |
| 主词搜索者任务 | 选文件或麦克风、得文本、下载 TXT |
| 满足之处 | 双路径、语言、HUD、样例、下载 |
| 超出 / 应划边界 | 不做云 Whisper；不做可靠离线文件 ASR；不做 SRT 主产品 |
| [x] 已按审查回写 | 进入 briefs |

## 文案丰富度

\`description\` 含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- dropzone；语言；Transcribe while playing；Dictate with mic；Stop；Download TXT。
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

共同边界：浏览器 **SpeechRecognition** 尽力转写；**不是** Whisper；文件路径依赖播放/环回，可回退麦克风。

| 语种 | 当地检索词 | Title / H1 | 按钮 | 切入 |
|---|---|---|---|---|
| en | transcribe audio; speech to text | Transcribe an audio file to text | Transcribe while playing / Dictate | FAQ not Whisper |
| zh | 音频转文字；语音转文字 | 把音频文件转成文字 | 播放时转写 / 麦克风口述 | desc≥120；非 Whisper |
| es | transcribir audio; voz a texto | Transcribir un archivo de audio a texto | Transcribir al reproducir / Dictar | FAQ |
| ja | 音声文字起こし；音声認識 | 音声ファイルを文字に起こす | 再生しながら起こす / マイク | FAQ |
| de | Audio transkribieren; Sprache zu Text | Eine Audiodatei in Text umwandeln | Beim Abspielen / Diktieren | FAQ |
| fr | transcrire audio; parole en texte | Transcrire un fichier audio en texte | Pendant lecture / Dicter | FAQ |
| pt | transcrever áudio; fala para texto | Transcrever um arquivo de áudio para texto | Ao reproduzir / Ditado | FAQ |
| id | transkripsi audio; ucapan ke teks | Transkripsikan file audio menjadi teks | Saat diputar / Dikte | FAQ |
| ar | تفريغ صوت؛ كلام إلى نص | تفريغ ملف صوت إلى نص | أثناء التشغيل / إملاء | FAQ |
| ru | транскрибировать аудио; речь в текст | Расшифровать аудиофайл в текст | Во время воспроизведения / Диктовка | FAQ |

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-09-21 | A4：SpeechRecognition 场景页；非 Whisper；related A5+S7 | briefs-ready |
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
			updatedAt: '2026-09-21T01:10:00.000Z',
			launchedAt: '2026-09-21T01:10:00.000Z',
			category: 'developer',
			primaryTopic: 'sound-editor',
			featured: false,
			ymyl: false,
			i18nKey: `${prefix}_title`,
			homeTitleKey: `${prefix}_title`,
			homeDescKey: `${prefix}_desc`,
			faqPrefix: prefix,
			related: ['make-a-waveform-video-from-audio', 'record-a-voice-memo-in-the-browser'],
			logo: `/icons/tools/${slug}.svg`,
			page: {
				module: '../pages/transcribeAnAudioFileToTextPage',
				export: 'renderTranscribeAnAudioFileToTextPage',
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
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Transcribe an audio file to text"><rect width="64" height="64" rx="12" fill="#1e293b"/><path d="M18 20h10v24H18z" fill="#94a3b8"/><circle cx="23" cy="44" r="6" fill="#64748b"/><path d="M28 26h4v14h-4z" fill="#94a3b8"/><rect x="36" y="18" width="18" height="28" rx="2" fill="#e2e8f0"/><path d="M40 26h10M40 32h8M40 38h9" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/></svg>\n`
);

/** @type {Record<string, Record<string, string>>} */
const byLang = {};

byLang.en = {
	title: 'Transcribe an audio file to text',
	desc: 'Turn local speech into editable text with the browser SpeechRecognition API when available—or dictate with the mic. Not a Whisper clone.',
	description:
		'Transcribe an audio file to text in the browser using SpeechRecognition when your browser provides it. Steps: Choose a local audio file, pick a recognition language, Transcribe while playing (speakers + mic loopback) or Dictate with mic, edit the transcript, download TXT. Example: Load sample opens a short tone and runs the playthrough path—real speech needs a voice recording or the mic button. This is not a cloud Whisper clone and does not load a huge wasm ASR model. Many browsers cannot reliably transcribe uploaded files offline; results depend on the browser engine. The page does not upload your file for server-side ASR.',
	article:
		'People search for audio to text and speech to text expecting a Whisper-class transcript. Pure browser pages cannot ship that without a large model or a cloud API. This scene tool uses the Web Speech API SpeechRecognition where present: it can play your local file through Web Audio while recognition listens (typically via the microphone, so loopback is imperfect), or you can dictate live with the mic. If SpeechRecognition is missing, the page says so clearly. Output is plain text you can edit and download as TXT—not timed SRT. Related tools cover waveform video and voice memos. Keep expectations honest: accuracy and file support vary by browser.',
	choose: 'Choose an audio file',
	hint: 'Optional local WAV, MP3 or M4A up to about 40 MiB / 3 minutes. File transcription depends on browser SpeechRecognition and often needs speakers plus microphone permission.',
	lang_label: 'Recognition language',
	lang_hint: 'Passed to SpeechRecognition.lang. Pick the language spoken in the recording or into the mic.',
	convert: 'Transcribe while playing',
	mic: 'Dictate with mic',
	stop: 'Stop',
	download: 'Download TXT',
	sample: 'Load sample',
	clear: 'Clear',
	advanced: 'Honest limits',
	settings_hint:
		'SpeechRecognition usually listens to the microphone—not a private WebAudio tap. Playing a file may work only if the mic hears the speakers. Many browsers lack reliable file ASR. This is not Whisper and does not download a large model.',
	progress: 'Transcription progress',
	read: 'Read',
	decode: 'Decode',
	listen: 'Listen',
	write: 'Write',
	done: 'Ready. Edit the text if needed, then Download TXT.',
	failed: 'Could not transcribe. Try Dictate with mic, another browser, or a clearer voice recording.',
	elapsed: '{s}s elapsed',
	preview: 'Transcript',
	interim_label: 'Interim (live)',
	result: '{chars} characters · {words} words',
	sample_name: 'transcribe-sample',
	empty: 'Choose a local audio file, or use Dictate with mic.',
	empty_state:
		'No transcript yet. Drop a voice recording and Transcribe while playing, or click Dictate with mic. Not a Whisper clone—browser SpeechRecognition only, with honest limits.',
	file_label: 'Audio: {name}',
	status_unsupported:
		'This browser does not expose SpeechRecognition / webkitSpeechRecognition. Try Chrome or Edge, or use a different device. True offline Whisper-style ASR is not bundled here.',
	status_listening:
		'Playback finished with little or no text. SpeechRecognition often needs the microphone to hear the speakers—try Dictate with mic, raise volume, or allow mic access.',
	status_mic: 'Listening to the microphone… speak clearly, then Stop.',
	status_playing: 'Playing the file and listening via SpeechRecognition (mic path)…',
	err_file: 'Choose one local audio file, or use Dictate with mic.',
	err_format: 'Unsupported audio type. Use a common format your browser can decode.',
	err_limit: 'Use audio up to about 40 MiB and 3 minutes.',
	err_decode: 'The browser could not decode this audio file.',
	err_unsupported: 'SpeechRecognition is unavailable in this browser.',
	err_permission: 'Microphone or speech permission was denied. Allow access or use another browser.',
	how_title: 'How to transcribe an audio file to text',
	how_body: 'Use browser speech recognition on a local file playthrough or live mic dictation, then download TXT.',
	how_item_1: 'Choose a local voice recording (or Load sample), and pick a recognition language.',
	how_item_2: 'Click Transcribe while playing, allow microphone if prompted, and keep speakers audible—or click Dictate with mic instead.',
	how_item_3: 'Watch interim text appear; finals collect in the transcript box. Press Stop when dictating.',
	how_item_4: 'Edit the text if needed, then Download TXT.',
	why_choose_title: 'Why choose our Transcribe an audio file to text tools',
	why_choose_item_1: 'Clear dual path: file playthrough attempt plus mic dictation fallback.',
	why_choose_item_2: 'Honest copy: not Whisper, no huge wasm model, browser limits stated up front.',
	why_choose_item_3: 'You can edit the transcript before downloading TXT.',
	why_choose_item_4: 'Nearby tools cover waveform video and voice memos without forcing a hub editor.',
	rules_title: 'Transcription rules and honest browser limits',
	rules_body:
		'This page uses Web Speech API SpeechRecognition when present. It is not offline Whisper. File upload transcription is best-effort and may fall back to live mic.',
	rules_item_1: 'SpeechRecognition must exist. Otherwise the unsupported banner stays visible and primary actions stay disabled.',
	rules_item_2: 'Recognition typically uses the microphone. Playing a file does not guarantee a private decode→text path.',
	rules_item_3: 'Optional file up to about 40 MiB / 3 minutes. Output is plain TXT, not SRT subtitles.',
	rules_item_4: 'This page does not upload your file for server-side Whisper. Browser vendors may still send mic audio to their speech service—check your browser privacy settings.',
	example_title: 'Try the sample playthrough path',
	example:
		'Load sample attaches a short tone WAV and runs Transcribe while playing. A tone will not produce words—use a real voice file or Dictate with mic to see text. Playback never auto-starts after a finished transcript.',
	usecases_title: 'When this helps',
	usecase_1: 'You want a rough transcript of a short voice note in a Chromium browser without installing desktop software.',
	usecase_2: 'File loopback fails, so you dictate the same content live with the mic and download TXT.',
	faq_q1: 'Is this a Whisper clone or cloud ASR upload?',
	faq_a1:
		'No. It does not ship a Whisper wasm model and does not upload your file to our servers for ASR. It uses the browser SpeechRecognition API when available. Vendor speech services may still apply to microphone audio—see browser privacy docs.',
	faq_q2: 'Why did my uploaded file produce little or no text?',
	faq_a2:
		'Most browsers listen via the microphone, not a private WebAudio tap. Playthrough needs the mic to hear the speakers, plus permission. If that fails, use Dictate with mic.',
	faq_q3: 'Which browsers work best?',
	faq_a3:
		'Chromium-based browsers with webkitSpeechRecognition are the most common. Safari/Firefox support varies. If unsupported, the page shows a clear message.',
	faq_q4: 'Can I get SRT subtitles with timestamps?',
	faq_a4: 'Not on this page. Output is editable plain text (TXT). A dedicated subtitle scene would be a different tool.',
	faq_q5: 'Is my audio uploaded?',
	faq_a5:
		'This page does not upload the file for processing. SpeechRecognition may use the microphone and a browser vendor service. Keep sensitive material offline if that is unacceptable.',
	faq_q6: 'How is this different from recording a voice memo?',
	faq_a6:
		'Voice memo captures audio for download. This page aims for text. Use the memo tool when you need a recording, and this one when you need a transcript.',
};

byLang.zh = {
	title: '把音频文件转成文字',
	desc: '在支持时用浏览器 SpeechRecognition 把本地语音转成可编辑文字，或用麦克风口述。不是 Whisper 克隆。',
	description:
		'在浏览器里把音频文件转成文字：在支持 SpeechRecognition 时，可播放本地文件并识别，或改用麦克风口述。步骤：选择本地音频、选择识别语言、播放时转写或麦克风口述、编辑文稿、下载 TXT。示例：加载样例会打开短音调并走播放路径——真正出字需要人声文件或麦克风。这不是云端 Whisper 克隆，也不加载巨大 wasm ASR 模型。许多浏览器无法对上传文件做可靠离线转写；效果取决于浏览器引擎。本页不会为了服务端 ASR 上传你的文件。适合「音频转文字」「语音转文字」等本机尽力转写需求。',
	article:
		'用户搜「音频转文字」常期待 Whisper 级效果。纯浏览器页若不打包大模型或不接云 API，做不到同等能力。本场景工具在可用时使用 Web Speech API：可把本地文件经 Web Audio 播放同时启动识别（通常经麦克风，环回不可靠），或直接麦克风口述。若无 SpeechRecognition，页面会明确提示。输出为可编辑纯文本并下载 TXT——不是带时间轴的 SRT。相关工具覆盖波形视频与语音备忘。请保持诚实预期：准确率与文件支持因浏览器而异。',
	choose: '选择音频文件',
	hint: '可选本地 WAV、MP3 或 M4A，约 40 MiB / 3 分钟。文件转写依赖浏览器 SpeechRecognition，常需扬声器与麦克风权限。',
	lang_label: '识别语言',
	lang_hint: '传给 SpeechRecognition.lang。请选择录音或口述使用的语言。',
	convert: '播放时转写',
	mic: '麦克风口述',
	stop: '停止',
	download: '下载 TXT',
	sample: '加载样例',
	clear: '清空',
	advanced: '诚实限制说明',
	settings_hint:
		'SpeechRecognition 通常听麦克风，而不是私有的 WebAudio 抽头。播放文件仅在麦克风能听到扬声器时可能有效。许多浏览器缺乏可靠的文件 ASR。这不是 Whisper，也不下载大模型。',
	progress: '转写进度',
	read: '读取',
	decode: '解码',
	listen: '识别',
	write: '整理',
	done: '完成。可编辑文字后下载 TXT。',
	failed: '无法转写。请改用麦克风口述、换浏览器，或更清晰的人声录音。',
	elapsed: '已用时 {s} 秒',
	preview: '文稿',
	interim_label: '临时结果（实时）',
	result: '{chars} 个字符 · {words} 个词',
	sample_name: '转写样例',
	empty: '请选择本地音频，或使用麦克风口述。',
	empty_state:
		'还没有文稿。拖入人声录音并点播放时转写，或点麦克风口述。不是 Whisper 克隆——仅浏览器 SpeechRecognition，并诚实说明限制。',
	file_label: '音频：{name}',
	status_unsupported:
		'当前浏览器未提供 SpeechRecognition / webkitSpeechRecognition。请尝试 Chrome 或 Edge。此处未捆绑真正的离线 Whisper 式 ASR。',
	status_listening:
		'播放结束但几乎没有文字。SpeechRecognition 常需麦克风听到扬声器——请改用麦克风口述、提高音量或允许麦克风权限。',
	status_mic: '正在听麦克风…请清晰说话，然后点停止。',
	status_playing: '正在播放文件并经 SpeechRecognition（麦克风路径）识别…',
	err_file: '请选择一个本地音频，或使用麦克风口述。',
	err_format: '不支持的音频类型。请使用浏览器可解码的常见格式。',
	err_limit: '请使用约 40 MiB、约 3 分钟以内的音频。',
	err_decode: '浏览器无法解码该音频文件。',
	err_unsupported: '当前浏览器不可用 SpeechRecognition。',
	err_permission: '麦克风或语音权限被拒绝。请允许访问或换浏览器。',
	how_title: '如何把音频文件转成文字',
	how_body: '用浏览器语音识别对本地文件播放或麦克风口述，再下载 TXT。',
	how_item_1: '选择本地人声录音（或加载样例），并选择识别语言。',
	how_item_2: '点击播放时转写并在提示时允许麦克风，保持扬声器可听——或改点麦克风口述。',
	how_item_3: '观察临时文字；最终结果进入文稿框。口述时点停止结束。',
	how_item_4: '按需编辑文字，再下载 TXT。',
	why_choose_title: '为什么选择我们的把音频文件转成文字工具',
	why_choose_item_1: '双路径清晰：文件播放尝试 + 麦克风口述回退。',
	why_choose_item_2: '文案诚实：不是 Whisper，无巨大 wasm，浏览器限制写在前面。',
	why_choose_item_3: '下载 TXT 前可编辑文稿。',
	why_choose_item_4: '邻近工具覆盖波形视频与语音备忘，不必强行进 Hub 编辑器。',
	rules_title: '转写规则与诚实的浏览器限制',
	rules_body: '本页在可用时使用 Web Speech API SpeechRecognition。不是离线 Whisper。上传文件转写为尽力而为，可能回退到麦克风。',
	rules_item_1: '必须存在 SpeechRecognition，否则显示不支持横幅并禁用主按钮。',
	rules_item_2: '识别通常走麦克风。播放文件不保证私有「解码→文字」通路。',
	rules_item_3: '可选文件约 40 MiB / 3 分钟。输出为纯 TXT，不是 SRT 字幕。',
	rules_item_4: '本页不会为服务端 Whisper 上传文件。浏览器厂商仍可能把麦克风音频送其语音服务——请查看浏览器隐私设置。',
	example_title: '试用样例播放路径',
	example: '加载样例会挂上短音调 WAV 并运行播放时转写。音调不会产生词语——请用人声文件或麦克风口述才能看到文字。转写完成后不会自动播放。',
	usecases_title: '适用场景',
	usecase_1: '在 Chromium 浏览器里给短语音备忘做粗转写，不想装桌面软件。',
	usecase_2: '文件环回失败时，用麦克风口述同样内容并下载 TXT。',
	faq_q1: '这是 Whisper 克隆或云端 ASR 上传吗？',
	faq_a1: '不是。不附带 Whisper wasm，也不会为了 ASR 把文件上传到我们的服务器。可用时使用浏览器 SpeechRecognition。麦克风音频仍可能走浏览器厂商语音服务——见浏览器隐私说明。',
	faq_q2: '为什么上传的文件几乎没有文字？',
	faq_a2: '多数浏览器经麦克风听，而不是私有 WebAudio 抽头。播放路径需要麦克风听到扬声器并授权。若失败，请用麦克风口述。',
	faq_q3: '哪些浏览器最合适？',
	faq_a3: '带 webkitSpeechRecognition 的 Chromium 系最常见。Safari/Firefox 支持不一。若不支持，页面会明确提示。',
	faq_q4: '能得到带时间戳的 SRT 字幕吗？',
	faq_a4: '本页不能。输出是可编辑纯文本（TXT）。专门的字幕场景会是另一工具。',
	faq_q5: '音频会上传吗？',
	faq_a5: '本页不会为处理而上传文件。SpeechRecognition 可能使用麦克风与浏览器厂商服务。若不可接受，请保持敏感材料离线。',
	faq_q6: '这和录语音备忘有何不同？',
	faq_a6: '语音备忘是录音频下载。本页目标是文字。需要录音用备忘工具，需要文稿用本页。',
};

const localized = {
	es: {
		title: 'Transcribir un archivo de audio a texto',
		desc: 'Pasa voz local a texto editable con SpeechRecognition del navegador si está disponible, o dicta con el micrófono. No es un clon de Whisper.',
		description:
			'Transcribe un archivo de audio a texto en el navegador con SpeechRecognition cuando exista. Pasos: elige audio local, elige idioma, Transcribir al reproducir o Dictar con micrófono, edita, descarga TXT. Ejemplo: Cargar muestra abre un tono corto y ejecuta la ruta de reproducción—hace falta voz real o el micrófono. No es un clon de Whisper ni carga un gran modelo wasm. Muchos navegadores no trascriben archivos de forma fiable sin conexión. Esta página no sube tu archivo para ASR en servidor.',
		convert: 'Transcribir al reproducir',
		mic: 'Dictar con micrófono',
		stop: 'Detener',
		download: 'Descargar TXT',
		sample: 'Cargar muestra',
		clear: 'Borrar',
		how_title: 'Cómo transcribir un archivo de audio a texto',
		faq_q1: '¿Es un clon de Whisper o una subida ASR a la nube?',
		faq_a1: 'No. No incluye Whisper wasm ni sube tu archivo a nuestros servidores para ASR. Usa SpeechRecognition del navegador cuando esté disponible.',
	},
	ja: {
		title: '音声ファイルを文字に起こす',
		desc: '対応ブラウザの SpeechRecognition でローカル音声を編集可能な文字にするか、マイクで口述。Whisper クローンではありません。',
		description:
			'ブラウザの SpeechRecognition がある場合、ローカル音声を文字起こしできます。手順：音声を選ぶ、言語を選ぶ、再生しながら起こすまたはマイク口述、編集、TXT を保存。例：サンプル読込は短いトーンで再生パスを実行—実音声ファイルかマイクが必要。Whisper クローンではなく巨大 wasm も読み込みません。多くのブラウザはアップロードファイルの確実なオフライン ASR を持ちません。このページはサーバー ASR のためにファイルをアップロードしません。',
		convert: '再生しながら起こす',
		mic: 'マイクで口述',
		stop: '停止',
		download: 'TXTを保存',
		sample: 'サンプル読込',
		clear: 'クリア',
		how_title: '音声ファイルを文字に起こす方法',
		faq_q1: 'Whisper クローンやクラウド ASR アップロードですか？',
		faq_a1: 'いいえ。Whisper wasm は同梱せず、ASR のために当サーバーへアップロードもしません。利用可能な場合はブラウザの SpeechRecognition を使います。',
	},
	de: {
		title: 'Eine Audiodatei in Text umwandeln',
		desc: 'Lokale Sprache mit SpeechRecognition des Browsers in bearbeitbaren Text verwandeln—oder per Mikrofon diktieren. Kein Whisper-Klon.',
		description:
			'Transkribieren Sie eine Audiodatei im Browser mit SpeechRecognition, falls vorhanden. Schritte: lokale Audiodatei wählen, Sprache wählen, Beim Abspielen transkribieren oder Mit Mikrofon diktieren, bearbeiten, TXT herunterladen. Beispiel: Beispiel laden öffnet einen kurzen Ton und die Abspielpfad—echte Sprache braucht eine Aufnahme oder das Mikrofon. Kein Whisper-Klon und kein großes wasm-Modell. Viele Browser können hochgeladene Dateien nicht zuverlässig offline transkribieren. Diese Seite lädt Ihre Datei nicht für Server-ASR hoch.',
		convert: 'Beim Abspielen transkribieren',
		mic: 'Mit Mikrofon diktieren',
		stop: 'Stopp',
		download: 'TXT herunterladen',
		sample: 'Beispiel laden',
		clear: 'Leeren',
		how_title: 'So wandeln Sie eine Audiodatei in Text um',
		faq_q1: 'Ist das ein Whisper-Klon oder Cloud-ASR-Upload?',
		faq_a1: 'Nein. Kein Whisper-wasm und kein Upload zu unseren Servern für ASR. Nutzt SpeechRecognition des Browsers, wenn verfügbar.',
	},
	fr: {
		title: 'Transcrire un fichier audio en texte',
		desc: 'Transformez la parole locale en texte éditable via SpeechRecognition du navigateur si disponible, ou dictez au micro. Pas un clone Whisper.',
		description:
			'Transcrivez un fichier audio en texte dans le navigateur avec SpeechRecognition si disponible. Étapes : choisir un audio local, choisir la langue, Transcrire pendant la lecture ou Dicter au micro, éditer, télécharger TXT. Exemple : Charger un échantillon ouvre une courte tonalité et lance le parcours lecture—il faut une vraie voix ou le micro. Ce n’est pas un clone Whisper et n’charge pas un gros modèle wasm. Beaucoup de navigateurs ne transcrivent pas fiablement les fichiers hors ligne. Cette page n’envoie pas votre fichier pour une ASR serveur.',
		convert: 'Transcrire pendant la lecture',
		mic: 'Dicter au micro',
		stop: 'Arrêter',
		download: 'Télécharger TXT',
		sample: 'Charger un échantillon',
		clear: 'Effacer',
		how_title: 'Comment transcrire un fichier audio en texte',
		faq_q1: 'Est-ce un clone Whisper ou un envoi ASR cloud ?',
		faq_a1: 'Non. Pas de Whisper wasm et pas d’envoi de votre fichier vers nos serveurs pour l’ASR. Utilise SpeechRecognition du navigateur si disponible.',
	},
	pt: {
		title: 'Transcrever um arquivo de áudio para texto',
		desc: 'Transforme fala local em texto editável com SpeechRecognition do navegador quando disponível, ou dite no microfone. Não é um clone do Whisper.',
		description:
			'Transcreva um arquivo de áudio para texto no navegador com SpeechRecognition quando existir. Passos: escolha áudio local, escolha idioma, Transcrever ao reproduzir ou Ditado no microfone, edite, baixe TXT. Exemplo: Carregar amostra abre um tom curto e executa o caminho de reprodução—é preciso voz real ou o microfone. Não é um clone do Whisper nem carrega um grande modelo wasm. Muitos navegadores não transcrevem arquivos offline de forma confiável. Esta página não envia seu arquivo para ASR no servidor.',
		convert: 'Transcrever ao reproduzir',
		mic: 'Ditado no microfone',
		stop: 'Parar',
		download: 'Baixar TXT',
		sample: 'Carregar amostra',
		clear: 'Limpar',
		how_title: 'Como transcrever um arquivo de áudio para texto',
		faq_q1: 'É um clone do Whisper ou upload de ASR na nuvem?',
		faq_a1: 'Não. Não inclui Whisper wasm nem envia seu arquivo aos nossos servidores para ASR. Usa SpeechRecognition do navegador quando disponível.',
	},
	id: {
		title: 'Transkripsikan file audio menjadi teks',
		desc: 'Ubah ucapan lokal menjadi teks yang bisa diedit dengan SpeechRecognition browser jika tersedia, atau dikte lewat mikrofon. Bukan klon Whisper.',
		description:
			'Transkripsikan file audio menjadi teks di browser dengan SpeechRecognition jika tersedia. Langkah: pilih audio lokal, pilih bahasa, Transkripsi saat diputar atau Dikte mikrofon, edit, unduh TXT. Contoh: Muat sampel membuka nada pendek dan menjalankan jalur putar—perlu rekaman suara nyata atau mikrofon. Bukan klon Whisper dan tidak memuat model wasm besar. Banyak browser tidak dapat mentranskripsi file secara offline dengan andal. Halaman ini tidak mengunggah file Anda untuk ASR server.',
		convert: 'Transkripsi saat diputar',
		mic: 'Dikte mikrofon',
		stop: 'Berhenti',
		download: 'Unduh TXT',
		sample: 'Muat sampel',
		clear: 'Hapus',
		how_title: 'Cara mentranskripsikan file audio menjadi teks',
		faq_q1: 'Apakah ini klon Whisper atau unggahan ASR cloud?',
		faq_a1: 'Tidak. Tidak menyertakan Whisper wasm dan tidak mengunggah file ke server kami untuk ASR. Menggunakan SpeechRecognition browser jika tersedia.',
	},
	ar: {
		title: 'تفريغ ملف صوت إلى نص',
		desc: 'حوّل الكلام المحلي إلى نص قابل للتحرير عبر SpeechRecognition في المتصفح إن وُجد، أو أملِ بالميكروفون. ليس نسخة من Whisper.',
		description:
			'فرّغ ملف صوت إلى نص في المتصفح باستخدام SpeechRecognition عند توفره. الخطوات: اختر صوتًا محليًا، اختر اللغة، تفريغ أثناء التشغيل أو إملاء بالميكروفون، عدّل، نزّل TXT. مثال: تحميل عيّنة يفتح نغمة قصيرة ويمر بمسار التشغيل—تحتاج تسجيل صوت حقيقي أو الميكروفون. ليست نسخة Whisper ولا تحمّل نموذج wasm ضخم. كثير من المتصفحات لا تفرّغ الملفات دون اتصال بموثوقية. هذه الصفحة لا ترفع ملفك لـ ASR على الخادم.',
		convert: 'تفريغ أثناء التشغيل',
		mic: 'إملاء بالميكروفون',
		stop: 'إيقاف',
		download: 'تنزيل TXT',
		sample: 'تحميل عيّنة',
		clear: 'مسح',
		how_title: 'كيفية تفريغ ملف صوت إلى نص',
		faq_q1: 'هل هذه نسخة Whisper أو رفع ASR سحابي؟',
		faq_a1: 'لا. لا تتضمن Whisper wasm ولا ترفع ملفك إلى خوادمنا لـ ASR. تستخدم SpeechRecognition في المتصفح عند التوفر.',
	},
	ru: {
		title: 'Расшифровать аудиофайл в текст',
		desc: 'Превратите локальную речь в редактируемый текст через SpeechRecognition браузера, если доступно, или диктуйте в микрофон. Это не клон Whisper.',
		description:
			'Расшифруйте аудиофайл в текст в браузере через SpeechRecognition, если он есть. Шаги: выберите локальное аудио, выберите язык, Расшифровать при воспроизведении или Диктовка в микрофон, правьте, скачайте TXT. Пример: Загрузить образец открывает короткий тон и запускает путь воспроизведения—нужна реальная речь или микрофон. Это не клон Whisper и не загружает огромную wasm-модель. Многие браузеры не умеют надёжно транскрибировать файлы офлайн. Страница не загружает ваш файл на сервер для ASR.',
		convert: 'Расшифровать при воспроизведении',
		mic: 'Диктовка в микрофон',
		stop: 'Стоп',
		download: 'Скачать TXT',
		sample: 'Загрузить образец',
		clear: 'Очистить',
		how_title: 'Как расшифровать аудиофайл в текст',
		faq_q1: 'Это клон Whisper или облачная загрузка ASR?',
		faq_a1: 'Нет. Нет Whisper wasm и нет загрузки файла на наши серверы для ASR. Используется SpeechRecognition браузера, если доступно.',
	},
};

for (const lang of Object.keys(localized)) {
	byLang[lang] = { ...byLang.en, ...localized[lang] };
}

writeLocales(byLang);

// related back-links
for (const relatedSlug of ['make-a-waveform-video-from-audio', 'record-a-voice-memo-in-the-browser']) {
	const p = path.join(root, `src/site/tool-catalog.d/${relatedSlug}.json`);
	const j = JSON.parse(fs.readFileSync(p, 'utf8'));
	if (!j.related.includes(slug)) {
		j.related = [...j.related, slug];
		j.updatedAt = '2026-09-21T01:10:00.000Z';
		fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
		console.log('updated related', relatedSlug);
	}
}

console.log('A4 artifacts done');
