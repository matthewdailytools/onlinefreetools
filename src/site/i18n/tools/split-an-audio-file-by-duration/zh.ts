/**
 * i18n tool shard (split-an-audio-file-by-duration / zh).
 * H1 用任务句；按时长切割 / 按秒分割 / 等分写进 desc 与 FAQ。
 */
import type { SiteLangDict } from '../../../types';

/** 中文检索向文案：按固定时长把音频切成多段并打包 ZIP。 */
const zh: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: '高级设置（可选）',
  tool_split_an_audio_file_by_duration_article:
    '在本标签页按固定时长把音频切成多段：打开本地文件，填每段秒数，点「按时长切开」，再「下载 ZIP」。除最后一段吃余数外，各段等长。文件留在你的设备上，不会上传到服务器。',
  tool_split_an_audio_file_by_duration_bitrate: 'MP3 码率',
  tool_split_an_audio_file_by_duration_bitrate_hint: '默认 128 kbps。只有 ZIP 格式选 MP3 时才会用到。',
  tool_split_an_audio_file_by_duration_chip_180: '3 分钟',
  tool_split_an_audio_file_by_duration_chip_30: '30 秒',
  tool_split_an_audio_file_by_duration_chip_300: '5 分钟',
  tool_split_an_audio_file_by_duration_chip_60: '60 秒',
  tool_split_an_audio_file_by_duration_choose_file: '选择音频文件',
  tool_split_an_audio_file_by_duration_chunk: '每段时长（秒）',
  tool_split_an_audio_file_by_duration_chunk_hint:
    '默认 2 秒对应样例。讲座可点 60 秒或 3 分钟。最后一段会留下剩余时间，不会补静音。',
  tool_split_an_audio_file_by_duration_clear: '清除',
  tool_split_an_audio_file_by_duration_clip_download: '下载这一段',
  tool_split_an_audio_file_by_duration_clip_play: '播放这一段',
  tool_split_an_audio_file_by_duration_clip_row_tpl: '第 {n} 段 · {dur} 秒（{start}s–{end}s）',
  tool_split_an_audio_file_by_duration_clips_title: '已切好、可打进 ZIP 的片段',
  tool_split_an_audio_file_by_duration_desc:
    '在本机按时长切割音频，下载等长多段 ZIP；文件留在设备，不上服务器。',
  tool_split_an_audio_file_by_duration_description:
    '按固定时长把音频切成多段：在设备上按秒切开，末段吃余数，再下载 ZIP，文件不会上传到服务器。步骤：打开文件，填每段秒数（样例用 2 秒；芯片有 30 / 60 / 180 / 300 秒），点「按时长切开」，再「下载 ZIP」。示例：5.00 秒样例按 2 秒切成 2.00 / 2.00 / 1.00 秒三段。搜音频按时长切割、按秒分割 mp3、把音频切成等长多段、mp3 等分，都是这一作业。不是按静音切开，不是 cue 分轨，也不是手裁或给视频消音。',
  tool_split_an_audio_file_by_duration_download_zip: '下载 ZIP',
  tool_split_an_audio_file_by_duration_drop_hint: '也可把 WAV、MP3、M4A 或 OGG 拖到这里。处理留在本标签页。',
  tool_split_an_audio_file_by_duration_empty: '请先选择音频文件。',
  tool_split_an_audio_file_by_duration_equal_parts: '或等分成 N 段',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    '留空则用上面的秒数。填 2–50 时，本次切开的每段时长 = 总时长 ÷ N。',
  tool_split_an_audio_file_by_duration_err_caps:
    '文件超过本设备上限（桌面大约 40 MB / 20 分钟，窄屏大约 20 MB / 8 分钟）。请先在别处缩短，或换更短的文件。',
  tool_split_an_audio_file_by_duration_err_chunk:
    '每段时长须在 0.5 到 1200 秒之间。若超过 50 段上限，请把秒数调大。',
  tool_split_an_audio_file_by_duration_err_decode:
    '当前浏览器解不出这个文件。请改试 WAV 或 MP3，或没有 DRM 的片段。',
  tool_split_an_audio_file_by_duration_err_empty: '没有可处理的内容。请先载入文件或样例。',
  tool_split_an_audio_file_by_duration_err_lame: 'MP3 编码器没加载成功。请留在本标签页，再试一次「下载 ZIP」。',
  tool_split_an_audio_file_by_duration_err_too_many:
    '超过 50 段。请把每段时长加大（试试 60 秒或 3 分钟），减少段数。本页会拒绝截断。',
  tool_split_an_audio_file_by_duration_err_video:
    '本页不接收视频当主输入。它按秒切声音文件，不会给视频消音。',
  tool_split_an_audio_file_by_duration_err_zip: 'ZIP 库没加载成功。请留在本标签页，再试一次「下载 ZIP」。',
  tool_split_an_audio_file_by_duration_example:
    '载入样例会生成 5.00 秒的 440 Hz 音调。按时长切开（每段 2.00 秒）会在 2.00 秒和 4.00 秒落刀，得到 2.00 / 2.00 / 1.00 秒三段（末段吃余数）。下载 ZIP 默认写出 sample-01.wav，除非你在高级设置里改成 MP3。',
  tool_split_an_audio_file_by_duration_example_title: '示例',
  tool_split_an_audio_file_by_duration_faq_a1:
    '不会。解码、切开和打包 ZIP 都在本标签页完成。脚本从本站加载。文件不会发到我们的服务器。',
  tool_split_an_audio_file_by_duration_faq_a2:
    '是同一作业。搜音频按时长切割、按秒分割 mp3、把音频切成等长多段、mp3 等分，都是：按每段 N 秒切开本地文件，再下一个 ZIP。等分成 N 段在「高级设置」。',
  tool_split_an_audio_file_by_duration_faq_a3:
    '最后一段留下剩余时间。5.00 秒按 2 秒切会变成 2.00 / 2.00 / 1.00 秒，不会在末尾垫静音。',
  tool_split_an_audio_file_by_duration_faq_a4:
    '不是。按静音把一段录音切成多段，切的是够长的停顿。本页只认时钟，不认安静。cue 分轨、按文件体积切也不在本页。',
  tool_split_an_audio_file_by_duration_faq_a5:
    '样例先用 2 秒。社媒短条点 30 秒或 60 秒；讲座通勤段用 3 分钟或 5 分钟。若只要四段一样长，到高级设置填 4。',
  tool_split_an_audio_file_by_duration_faq_a6:
    'ZIP 里按 {stem}-01.wav（或 .mp3）编号。列表里也能单段下载。最多 50 段，再多会拒绝而不是截断。',
  tool_split_an_audio_file_by_duration_faq_a7:
    '不能。降噪、视频消音、cue/APE 分轨、手标起止裁剪、从 YouTube 扒流都不在范围。请只用你有权处理的声音文件。',
  tool_split_an_audio_file_by_duration_faq_a8:
    '桌面大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限会在解码前拒绝。',
  tool_split_an_audio_file_by_duration_faq_q1: '音频会上传吗？',
  tool_split_an_audio_file_by_duration_faq_q2: '我搜的是按时长切割、按秒分割 mp3 或等分，这是另一页吗？',
  tool_split_an_audio_file_by_duration_faq_q3: '切不整时，最后一段怎么办？',
  tool_split_an_audio_file_by_duration_faq_q4: '会按静音切、跟 cue 表，或按体积切吗？',
  tool_split_an_audio_file_by_duration_faq_q5: '每段该填几秒？',
  tool_split_an_audio_file_by_duration_faq_q6: '文件怎么命名？最多能切几段？',
  tool_split_an_audio_file_by_duration_faq_q7: '能降噪、切视频、读 cue 或扒 YouTube 吗？',
  tool_split_an_audio_file_by_duration_faq_q8: '文件最大能处理到多少？',
  tool_split_an_audio_file_by_duration_format: 'ZIP 内格式',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV 是无损 PCM。选 MP3 时，编码器要等你点「下载 ZIP」才加载。',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    '按时钟每 N 秒落一刀，余数留给最后一段，再下载 ZIP；文件不出本机、不上服务器。',
  tool_split_an_audio_file_by_duration_how_item_1: '打开音频文件（或点「载入样例」）。',
  tool_split_an_audio_file_by_duration_how_item_2: '沿用 2 秒，或点芯片 / 自己填每段秒数。',
  tool_split_an_audio_file_by_duration_how_item_3: '点「按时长切开」。',
  tool_split_an_audio_file_by_duration_how_item_4: '点「下载 ZIP」。',
  tool_split_an_audio_file_by_duration_how_title: '怎么操作',
  tool_split_an_audio_file_by_duration_hud_decode: '正在本标签页解码…',
  tool_split_an_audio_file_by_duration_hud_decoded: '已解码。白线是计划切点。秒数合适后点「按时长切开」。',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: '已用 {s} 秒',
  tool_split_an_audio_file_by_duration_hud_encode: '正在编码 MP3 片段…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: '改文件或每段秒数后，再点「按时长切开」。',
  tool_split_an_audio_file_by_duration_hud_fail_title: '按时长切开已停止',
  tool_split_an_audio_file_by_duration_hud_next: '完成。下一步：下载 ZIP。',
  tool_split_an_audio_file_by_duration_hud_next_zip: '完成。ZIP 下载应当已经开始。',
  tool_split_an_audio_file_by_duration_hud_pack: '正在把片段打进 ZIP…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: '正在按等长切开…',
  tool_split_an_audio_file_by_duration_hud_step_decode: '解码',
  tool_split_an_audio_file_by_duration_hud_step_pack: '打包',
  tool_split_an_audio_file_by_duration_hud_step_split: '切开',
  tool_split_an_audio_file_by_duration_hud_title: '按时长切开进度',
  tool_split_an_audio_file_by_duration_hud_working: '开始…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur} 秒 · {rate} Hz · {ch} 声道',
  tool_split_an_audio_file_by_duration_pause: '暂停',
  tool_split_an_audio_file_by_duration_play: '播放',
  tool_split_an_audio_file_by_duration_preview_hint: '白线是每隔 N 秒的计划切点。播放可预听当前整段。',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig} 秒 · 每段时长不短于整段，ZIP 里只会有这一个文件。把秒数调短后再点「按时长切开」。下载 ZIP 已可用。',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig} 秒 · 每 {chunk} 秒 → {count} 段：{list}。下载 ZIP 已可用。',
  tool_split_an_audio_file_by_duration_rules_body:
    '切点落在 k × D 秒，D 是每段时长。最后一段是 [floor(T / D) × D, T]，可以更短。若填了等分 N，本次 D = T / N。WAV 为 16-bit PCM。MP3 为所选码率的 CBR。ZIP 在本标签页生成。',
  tool_split_an_audio_file_by_duration_rules_item_1:
    '样例默认每段 2 秒。芯片会把 30 秒、60 秒、180 秒（3 分钟）或 300 秒（5 分钟）写入同一框。等分 N（2–50）在高级设置，可留空。',
  tool_split_an_audio_file_by_duration_rules_item_2:
    '桌面上限大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限拒绝，不截断。超过 50 段也会拒绝。',
  tool_split_an_audio_file_by_duration_rules_item_3:
    '文件留在你的设备上，不会上传到服务器。JSZip 和 MP3 编码器要等你点「下载 ZIP」才从本站加载。',
  tool_split_an_audio_file_by_duration_rules_item_4:
    '解码取决于浏览器。DRM、部分编码和视频容器会给出明确错误。',
  tool_split_an_audio_file_by_duration_rules_item_5:
    '本页按时钟切出多文件 ZIP。不按静音切，不跟 cue 表，不按兆字节切，不降噪，不给视频消音，也不去拉 YouTube。',
  tool_split_an_audio_file_by_duration_rules_title: '你会碰到的规则',
  tool_split_an_audio_file_by_duration_sample: '载入样例',
  tool_split_an_audio_file_by_duration_split: '按时长切开',
  tool_split_an_audio_file_by_duration_status_done: '完成。',
  tool_split_an_audio_file_by_duration_title: '按固定时长把音频切成多段',
  tool_split_an_audio_file_by_duration_usecase_1:
    '把讲座按时长切割成 3 分钟通勤段，打成 ZIP 带走，不必等停顿。',
  tool_split_an_audio_file_by_duration_usecase_2:
    '按秒分割 mp3，从一集长内容切出 60 秒社媒条。',
  tool_split_an_audio_file_by_duration_usecase_3:
    '把超长语音等分成能塞进即时通讯时长帽的多段，末段留下余数。',
  tool_split_an_audio_file_by_duration_usecases_title: '适合什么时候用',
  tool_split_an_audio_file_by_duration_why_choose_body:
    '专为「按秒切、末段吃余数、一次拿走 ZIP」准备，芯片写明 30 秒 / 60 秒 / 3 分钟 / 5 分钟。',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    '按每 N 秒切开并打成多文件 ZIP；最后一段留下余数，不垫一段静音。',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    '有 30 秒 / 60 秒 / 3 分钟 / 5 分钟芯片，高级设置可等分 N；本页不是拿静音检测来冒充等分。',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    '文件留在本浏览器标签页，不会上传到服务器；JSZip 和 lamejs 只在你点「下载 ZIP」时加载。',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    '超体积和超过 50 段会拒绝，而不是先切一半再给你一个残缺 ZIP。',
  tool_split_an_audio_file_by_duration_why_choose_title: '为什么用本站的按固定时长把音频切成多段',
};
export default zh;
