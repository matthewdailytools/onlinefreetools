import type { SiteLangDict } from '../../../types';

/**
 * Chinese (zh) copy for make-srt-subtitles-from-a-video-file.
 * Local search: 视频生成字幕 / 视频转 srt / 本地 whisper 字幕.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: 不上传服务器; files stay on device. How labels match UI buttons.
 */
const zh: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: '从视频文件生成 SRT 字幕',
  tool_make_srt_subtitles_from_a_video_file_desc:
    '用本机 Whisper 把带对白的本地视频转成带时间轴的 .srt——文件留在本机，不上传服务器。',
  tool_make_srt_subtitles_from_a_video_file_description:
    '在浏览器里用本机 Whisper，从本地视频文件生成带时间轴的 SRT 字幕；文件留在本机，不上传服务器。步骤：选择有对白的视频 → 播放预览核对画面 → 选语言（或自动）→ 生成 SRT → 编辑字幕条 → 下载 .srt。示例：点「加载样例」会用短人口述 MP4 跑一遍 Whisper。首次约下载 45 MB 模型（之后走缓存）。纯音频 WAV/MP3 请用「从音频文件生成 SRT 字幕」。不烧录字幕；时间轴来自 Whisper 句段。',
  tool_make_srt_subtitles_from_a_video_file_article:
    '搜「视频生成字幕」「视频转 srt」的人，要的是本地成片可下载的带时间轴字幕，而不是语音备忘页。本工具在同域 /vendor/whisper 上跑 Whisper tiny：标签页内解码视频音轨、提供画面预览方便对照对白、取句段时间戳、写成可编辑标准 SRT 再下载。纯音频会被拒绝，并明确指向「从音频文件生成 SRT 字幕」。本页没有麦克风路径。首次约下载 45 MB 模型并缓存。时间轴是 Whisper 句段边界，不是帧级强制对齐；也不会把字幕烧进视频。',
  tool_make_srt_subtitles_from_a_video_file_choose: '选择视频文件',
  tool_make_srt_subtitles_from_a_video_file_hint:
    '本地 MP4、WebM、MOV，或其他浏览器能解码的视频——约 120 MiB、解码后约 2 小时以内。文件须含可用音轨。长片按滑窗识别（第 n/N 窗；点「停止」尽量保留已出部分 SRT）。纯音频请用相关的音频 SRT 工具。',
  tool_make_srt_subtitles_from_a_video_file_lang_label: '语音语言',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    '选「自动检测」时由 Whisper 判断音轨语种；已知语种时手动指定更稳。',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: '自动检测',
  tool_make_srt_subtitles_from_a_video_file_lang_en: '英语',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: '中文',
  tool_make_srt_subtitles_from_a_video_file_lang_es: '西班牙语',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: '日语',
  tool_make_srt_subtitles_from_a_video_file_lang_de: '德语',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: '法语',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: '葡萄牙语',
  tool_make_srt_subtitles_from_a_video_file_lang_id: '印尼语',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: '阿拉伯语',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: '俄语',
  tool_make_srt_subtitles_from_a_video_file_convert: '生成 SRT',
  tool_make_srt_subtitles_from_a_video_file_stop: '停止',
  tool_make_srt_subtitles_from_a_video_file_download: '下载 SRT',
  tool_make_srt_subtitles_from_a_video_file_sample: '加载样例',
  tool_make_srt_subtitles_from_a_video_file_clear: '清空',
  tool_make_srt_subtitles_from_a_video_file_source_play: '播放原视频',
  tool_make_srt_subtitles_from_a_video_file_advanced: '诚实限制说明',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny 在本标签页从同域 /vendor/whisper 运行。第一次点「生成 SRT」约下载 45 MB，之后复用缓存。长片按约 2 分钟一窗滑窗识别。时间轴跟 Whisper 句段走，不是帧级强制对齐。本页只接受视频，不烧录字幕。只有人声没有画面时，请用相关的音频 SRT 工具。',
  tool_make_srt_subtitles_from_a_video_file_progress: '字幕进度',
  tool_make_srt_subtitles_from_a_video_file_hud_title: '字幕进度',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: '已完成。下一步：按需编辑字幕条，再点「下载 SRT」。',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: '未能生成 SRT',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint: '可换视频、缩短片段，或点「加载样例」。文件留在本机。',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: '正在下载 {file} — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: '开始中…',
  tool_make_srt_subtitles_from_a_video_file_model: '模型',
  tool_make_srt_subtitles_from_a_video_file_decode: '解码',
  tool_make_srt_subtitles_from_a_video_file_transcribe: '转写',
  tool_make_srt_subtitles_from_a_video_file_write: '写 SRT',
  tool_make_srt_subtitles_from_a_video_file_done: '已就绪。可编辑 SRT 后点「下载 SRT」。',
  tool_make_srt_subtitles_from_a_video_file_failed:
    '无法生成 SRT。请试「加载样例」、更清晰的人声视频，或缩短到约 2 小时以内。',
  tool_make_srt_subtitles_from_a_video_file_elapsed: '已用时 {s} 秒',
  tool_make_srt_subtitles_from_a_video_file_preview: 'SRT 预览',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} 条字幕 · {chars} 个字符',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: '请选择带对白音轨的本地视频文件。',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    '还没有 SRT。拖入有对白的视频并点「生成 SRT」。「加载样例」会用本机 Whisper 跑一段短 MP4。可播放预览对照画面与字幕。文件留在本机。',
  tool_make_srt_subtitles_from_a_video_file_file_label: '视频：{name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: '正在加载本机 Whisper 模型（首次约下载 45 MB）…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: '正在本标签页解码视频音轨…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: '正在用 Whisper 转写…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: '正在转写第 {n}/{total} 窗…',
  tool_make_srt_subtitles_from_a_video_file_status_write: '正在写入带时间轴的 SRT…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: '已停止。若已有句段，会保留部分 SRT。',
  tool_make_srt_subtitles_from_a_video_file_err_file: '请选择一个本地视频文件，或点「加载样例」。',
  tool_make_srt_subtitles_from_a_video_file_err_format: '不支持的类型。请用浏览器能解码的常见视频容器（如 MP4、WebM），且须带音轨。',
  tool_make_srt_subtitles_from_a_video_file_err_limit: '请使用约 120 MiB、解码后约 2 小时以内的视频。低内存手机上很长的成片仍可能失败——请先裁短或压缩。',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    '浏览器无法从该视频解码出可用音轨。静音片、缺音轨或不支持的编码会在此失败。',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: '本路径需要的 Web Audio 在当前浏览器不可用。',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper 没有产出可用人声文字。请换片段或语言设置。',
  tool_make_srt_subtitles_from_a_video_file_err_model: '无法从本站加载本机 Whisper 模型。首次下载请保持联网后重试。',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    '本页只接受视频文件。若是 WAV、MP3 或其他纯音频人声，请用「从音频文件生成 SRT 字幕」。',
  tool_make_srt_subtitles_from_a_video_file_how_title: '如何从视频文件生成 SRT 字幕',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    '选好带对白的本地视频，预览后用本机 Whisper 打出带时间轴的字幕条，编辑预览再下载 .srt。',
  tool_make_srt_subtitles_from_a_video_file_how_item_1: '选择本地视频文件（或点「加载样例」），并选「自动检测」或指定语音语言。',
  tool_make_srt_subtitles_from_a_video_file_how_item_2: '需要时点「播放原视频」对照画面与对白，再点「生成 SRT」。',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    '看进度卡：模型 → 解码 → 转写（长片为第 n/N 窗）→ 写 SRT。点「停止」可中止并尽量保留已出部分 SRT。',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: '按需编辑 SRT 预览，再点「下载 SRT」。',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: '为什么用本站的从视频文件生成 SRT 字幕',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    '视频优先落地：页内可预览画面，再从音轨用本机 Whisper 出 .srt——识别过程不把成片上传到本站服务器。',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    '与音频 SRT 页边界清楚：本页拒绝纯音频、没有麦克风入口，搜「视频转 srt」的人不会掉进语音备忘界面。',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    '首次成本写清楚（约 45 MB 只下一次），长片用滑窗进度卡（第 n/N 窗）。',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    '只给可编辑的 .srt 旁路文件——不烧进视频。相关工具另覆盖纯音频 SRT 与波形视频。',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'SRT 规则与视频 Whisper 限制',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    '本工具在浏览器内用同域资源跑 Whisper tiny。浏览器须能从视频解码出可用音轨。体积与时长上限用来保持标签页可用。',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    '仅视频容器（如 MP4、WebM、MOV）。纯音频须改用相关的音频 SRT 页。',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    '约 120 MiB、解码后约 2 小时，按滑窗转写。更长或更大时会给出明确上限错误。',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    '时间戳是 Whisper 句段起止——够播放器使用，不是与画面切点帧级强制对齐。',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Whisper 识别时视频留在本机。本页不烧录字幕，也不从视频平台抓取字幕。',
  tool_make_srt_subtitles_from_a_video_file_example_title: '试试样例视频片段',
  tool_make_srt_subtitles_from_a_video_file_example:
    '点「加载样例」会拉取一段短人口述 MP4，经本机 Whisper「生成 SRT」并填入预览。进页不会自动跑样例，以免每位访客都触发约 45 MB 的首次模型下载。',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: '适合什么场景',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    '本地有采访、口播或录屏 MP4，需要可下载的 .srt 给播放器或剪辑软件。',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    '想给视频文件加字幕，又不想把成片传到云端 ASR，还要边看画面边核字幕条。',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    '相机或剪辑软件已导出 MP4/WebM，需要一版可改的起步 SRT 再发布。',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: '是本机 Whisper，还是要上传到云端？',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    '「生成 SRT」在同域 vendor 上跑本机 Whisper tiny。视频留在本机，不会为识别上传到本站服务器。',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: '第一次点「生成 SRT」为什么又慢又大？',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    '首次会从本站下载约 45 MB 的 Whisper tiny 模型与 WASM，写入浏览器缓存；之后复用。长片转写会显示第 n/N 窗；点「停止」可取消并尽量保留部分 SRT。',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: '和「从音频文件生成 SRT 字幕」有什么不同？',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    '那款相关工具面向语音备忘等音频优先文件（可选麦克风）。本页面向视频：有画面预览、只收视频、文案按视频转 srt。底层同为本机 Whisper。',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: '这里能用 WAV 或 MP3 吗？',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    '不能。纯音频会被拒绝，避免搜「视频转 srt」的人混进音频界面。WAV/MP3/M4A 请打开「从音频文件生成 SRT 字幕」。',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'SRT 时间轴有多准？',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    '按音轨上 Whisper 句段起止——多数播放器够用，不是与每个画面切点帧级对齐。',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: '能把字幕烧进视频吗？能抓 YouTube 字幕吗？',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    '都不能。只下载 .srt 旁路文件；也不会从 YouTube 或其他平台抓取自动字幕。',
};
export default zh;
