import type { SiteLangDict } from '../../../types';

/**
 * Chinese (zh) copy for make-srt-subtitles-from-an-audio-file.
 * Local search: 音频生成字幕 / 语音转字幕 / 浏览器本地 Whisper.
 * On-device Whisper tiny; first ~45 MB model download; editable SRT; optional mic.
 * Privacy: 不上传服务器; files stay on device. How labels match UI buttons.
 */
const zh: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: '从音频文件生成 SRT 字幕',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    '用浏览器内 Whisper 把本地人声录音转成带时间轴的 .srt——文件留在本机，不上传服务器。',
  tool_make_srt_subtitles_from_an_audio_file_description:
    '在浏览器里用本机 Whisper 模型，从本地音频或带音轨的视频生成带时间轴的 SRT 字幕；文件留在本机，不上传服务器。步骤：选择语音文件 → 选语言（或自动）→ 生成 SRT → 编辑字幕条 → 下载 .srt。示例：点「加载样例」会用短人声片段跑一遍 Whisper 并填入 SRT。首次运行约下载 45 MB 模型文件（之后走缓存）。不是云端 ASR；时间轴来自 Whisper 句段，不是帧级强制对齐。',
  tool_make_srt_subtitles_from_an_audio_file_article:
    '搜「音频生成字幕」「语音转字幕」的人，通常要一份可下载、带起止时间的字幕文件。本工具在同域 /vendor/whisper 上跑 Whisper tiny：标签页内解码文件、取句段时间戳、写成可编辑的标准 SRT 再下载。浏览器能解码的带音轨视频也可。麦克风口述走 Web Speech，仅作次路径——没有语音 API 也不妨碍「生成 SRT」。首次约下载 45 MB 模型并缓存。时间轴是 Whisper 句段边界，不是工作室级帧对齐；本工具不把字幕烧进视频。',
  tool_make_srt_subtitles_from_an_audio_file_choose: '选择语音文件',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    '本地 WAV、MP3、M4A，或浏览器能解码的其他音频——约 120 MiB、解码后约 2 小时以内。长文件按滑窗识别（进度显示第 n/N 窗；Stop 尽量保留已出 SRT）。带音轨的视频在能解码时可用；否则会给出明确解码错误。',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: '语音语言',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    '选「自动检测」时由 Whisper 判断语种；已知语种时手动指定更稳。麦克风口述在浏览器支持 Web Speech 时沿用同一选择。',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: '自动检测',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: '英语',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: '中文',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: '西班牙语',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: '日语',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: '德语',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: '法语',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: '葡萄牙语',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: '印尼语',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: '阿拉伯语',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: '俄语',
  tool_make_srt_subtitles_from_an_audio_file_convert: '生成 SRT',
  tool_make_srt_subtitles_from_an_audio_file_mic: '麦克风口述',
  tool_make_srt_subtitles_from_an_audio_file_stop: '停止',
  tool_make_srt_subtitles_from_an_audio_file_download: '下载 SRT',
  tool_make_srt_subtitles_from_an_audio_file_sample: '加载样例',
  tool_make_srt_subtitles_from_an_audio_file_clear: '清空',
  tool_make_srt_subtitles_from_an_audio_file_source_play: '播放原音频',
  tool_make_srt_subtitles_from_an_audio_file_advanced: '诚实限制说明',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny 在本标签页从同域 /vendor/whisper 运行。第一次点「生成 SRT」约下载 45 MB，之后复用缓存。长文件按约 2 分钟一窗滑窗识别，峰值内存更接近单窗而非整段 16 kHz PCM。时间轴跟 Whisper 句段走，不是帧级强制对齐。麦克风口述是可选的 Web Speech，可能走浏览器厂商语音服务。本工具不把字幕烧进视频。',
  tool_make_srt_subtitles_from_an_audio_file_progress: '字幕进度',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: '字幕进度',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next: '已完成。下一步：按需编辑字幕条，再点「下载 SRT」。',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: '未能生成 SRT',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint: '可换文件、缩短片段，或点「加载样例」。文件留在本机，不上传服务器。',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: '正在下载 {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: '开始中…',
  tool_make_srt_subtitles_from_an_audio_file_model: '模型',
  tool_make_srt_subtitles_from_an_audio_file_decode: '解码',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: '转写',
  tool_make_srt_subtitles_from_an_audio_file_write: '写 SRT',
  tool_make_srt_subtitles_from_an_audio_file_done: '已就绪。可编辑 SRT 后点「下载 SRT」。',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    '无法生成 SRT。请试「加载样例」、更清晰的人声，或缩短到约 2 小时以内。',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: '已用时 {s} 秒',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'SRT 预览',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: '临时结果（麦克风）',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} 条字幕 · {chars} 个字符',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty: '请选择本地语音文件；浏览器支持时也可用「麦克风口述」。',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    '还没有 SRT。拖入人声文件并点「生成 SRT」。「加载样例」会用本机 Whisper 跑一段短录音。文件留在本机，不上传服务器。',
  tool_make_srt_subtitles_from_an_audio_file_file_label: '媒体：{name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    '当前浏览器没有 Web Speech API，「麦克风口述」不可用。本地文件仍可用 Whisper「生成 SRT」。',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'Whisper 几乎没认出人声文字。请换更清晰的录音，或手动指定语音语言。',
  tool_make_srt_subtitles_from_an_audio_file_status_mic: '正在听麦克风…请清晰说话，然后点「停止」。时间轴用会话经过时间。',
  tool_make_srt_subtitles_from_an_audio_file_status_model: '正在加载本机 Whisper 模型（首次约下载 45 MB）…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: '正在本标签页解码音频…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: '正在用 Whisper 转写…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: '正在转写第 {n}/{total} 窗…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: '已停止。若已有句段，会保留部分 SRT。',
  tool_make_srt_subtitles_from_an_audio_file_status_write: '正在写入带时间轴的 SRT…',
  tool_make_srt_subtitles_from_an_audio_file_err_file: '请选择一个本地音频或视频文件，或点「加载样例」。',
  tool_make_srt_subtitles_from_an_audio_file_err_format: '不支持的媒体类型。请用常见音频，或浏览器能解码音轨的视频。',
  tool_make_srt_subtitles_from_an_audio_file_err_limit: '请使用约 120 MiB、解码后约 2 小时以内的媒体。低内存手机上很长的录音仍可能失败——请先裁短或压缩。',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    '浏览器无法把该文件解码为音频。无可用音轨的视频或不支持的编码会在此失败。',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported: '本路径需要的 Web Audio 或语音 API 在当前浏览器不可用。',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    '麦克风权限被拒绝。允许后可用「麦克风口述」，或改对文件点「生成 SRT」。',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt: 'Whisper 没有产出可用人声文字。请换片段或语言设置。',
  tool_make_srt_subtitles_from_an_audio_file_err_model: '无法从本站加载本机 Whisper 模型。首次下载请保持联网后重试。',
  tool_make_srt_subtitles_from_an_audio_file_how_title: '如何从音频文件生成 SRT 字幕',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    '选好本地语音文件，用本机 Whisper 打出带时间轴的字幕条，编辑预览后下载 .srt。',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1: '选择本地语音文件（或点「加载样例」），并选「自动检测」或指定语音语言。',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2: '点「生成 SRT」。进度卡会依次显示：模型 → 解码 → 转写（长文件为第 n/N 窗）→ 写 SRT。Stop 可中止并尽量保留已出 SRT。',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3: '可选：浏览器支持 Web Speech 时点「麦克风口述」，说完后点「停止」。',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4: '按需编辑 SRT 预览，再点「下载 SRT」。',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title: '为什么用本站的从音频文件生成 SRT 字幕',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    '同域 vendor 上的本机 Whisper tiny——录音不会为 ASR 上传到本站服务器。',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    '首次成本写清楚：约 45 MB 模型只下一次；进度卡分「模型 / 解码 / 转写 / 写 SRT」四步。',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3: '下载前可编辑标准 .srt 预览——不是只有纯 TXT，也不烧进视频。',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    '邻近工具可做纯文稿转写与波形视频，不必强行进统一剪辑台。',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'SRT 规则与本机 Whisper 限制',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    '本工具在浏览器内用同域资源跑 Whisper tiny。时间轴来自模型句段；体积与时长上限用来保持标签页可用。',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    '主路径需要 Web Audio 解码，以及 /vendor/whisper 下的本机 Whisper。麦克风口述需要 Web Speech，且为可选。',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    '约 120 MiB 文件体积、解码后约 2 小时，按滑窗转写。更长或更大时会给出明确上限错误；低内存手机可能需要更短的片段。',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    '时间戳是 Whisper 句段起止——够播放器使用，不是帧级强制对齐。',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'Whisper 文件路径下，文件留在本机、不上传服务器。可选麦克风口述仍可能走浏览器厂商语音服务——请查看浏览器隐私设置。',
  tool_make_srt_subtitles_from_an_audio_file_example_title: '试试样例人声片段',
  tool_make_srt_subtitles_from_an_audio_file_example:
    '点「加载样例」会拉取一段短人口述 WAV，经本机 Whisper「生成 SRT」并填入预览。进页不会自动跑样例，以免每位访客都触发约 45 MB 的首次模型下载。',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: '适合什么场景',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    '本地有语音备忘或采访的 WAV/MP3，需要可下载的 .srt 给播放器或剪辑软件。',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    '主要是音频，或以声音为主的短片，想要带时间轴字幕又不想上传云端 ASR。若是 MP4/WebM 且要对照画面，请优先用相关的视频 SRT 工具。',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    '先用本机 Whisper 出一版可改的 SRT 再发布；没有文件时也可退回「麦克风口述」。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: '是本机 Whisper，还是要上传到云端？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    '「生成 SRT」在同域 vendor 上跑本机 Whisper tiny。音视频文件留在本机，不会为识别上传到本站服务器。可选「麦克风口述」用浏览器 Web Speech，可能涉及厂商语音服务。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: '第一次点「生成 SRT」为什么又慢又大？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    '首次会从本站下载约 45 MB 的 Whisper tiny 模型与 WASM，写入浏览器缓存；之后复用。进度在「模型」步骤里显示。长文件转写会显示第 n/N 窗；Stop 可取消并尽量保留部分 SRT。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'SRT 时间轴有多准？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    '按 Whisper 句段起止时间——多数播放器与剪辑够用，不是桌面工作室流水线那种帧级强制对齐。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: '音频会上传到服务器吗？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'Whisper 文件路径不会：解码与转写在本标签页完成，文件留在本机、不上传服务器。只需在首次联网拉取同域模型脚本。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: '和「把音频文件转成文字」有什么不同？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    '那款相关工具侧重纯文稿转写。本工具输出带起止时间的编号 SRT，给需要 .srt 的播放器与剪辑软件。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: '能把字幕烧进视频文件吗？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    '不能。只下载 .srt 旁路文件。若要从音频做波形风格视频，请看相关波形视频工具——那也不是烧录字幕。',
  tool_make_srt_subtitles_from_an_audio_file_faq_q7: '我有 MP4 等视频，该用本页吗？',
  tool_make_srt_subtitles_from_an_audio_file_faq_a7:
    '本页偏音频（语音备忘、采访 WAV/MP3，以及可选麦克风）。带画面的视频文件请用「从视频文件生成 SRT 字幕」——同一套本机 Whisper，但是视频优先的界面与预览。',
};
export default zh;
