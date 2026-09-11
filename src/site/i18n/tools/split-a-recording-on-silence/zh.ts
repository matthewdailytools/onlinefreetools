/**
 * i18n tool shard (split-a-recording-on-silence / zh).
 * H1 用任务句；按静音分割音频 / 按停顿切片写进 desc 与 FAQ。
 */
import type { SiteLangDict } from '../../../types';

/** 中文检索向文案：按静音把一段录音切成多段并打包 ZIP。 */
const zh: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: '高级设置（可选）',
  tool_split_a_recording_on_silence_article:
    '在本标签页按静音把一段录音切成多段：打开本地文件，点「按静音切开」，再「下载 ZIP」。够长的停顿以静音中点为切点，各段仍是独立文件。录音留在你的设备上，不会上传到服务器。',
  tool_split_a_recording_on_silence_bitrate: 'MP3 码率',
  tool_split_a_recording_on_silence_bitrate_hint: '默认 128 kbps。只有 ZIP 格式选 MP3 时才会用到。',
  tool_split_a_recording_on_silence_choose_file: '选择音频文件',
  tool_split_a_recording_on_silence_clear: '清除',
  tool_split_a_recording_on_silence_clip_download: '下载这一段',
  tool_split_a_recording_on_silence_clip_play: '播放这一段',
  tool_split_a_recording_on_silence_clip_row_tpl: '第 {n} 段 · {dur} 秒（{start}s–{end}s）',
  tool_split_a_recording_on_silence_clips_title: '已切好、可打进 ZIP 的片段',
  tool_split_a_recording_on_silence_desc:
    '在本机按停顿切开录音，下载多段 ZIP；文件留在设备，不上服务器。',
  tool_split_a_recording_on_silence_description:
    '按静音把一段录音切成多段：在设备上找出够长的停顿，切成多文件再下载 ZIP，文件不会上传到服务器。步骤：打开录音，点「按静音切开」（默认 −40 dB / 1.0 秒 / 最短片段 0.3 秒），再「下载 ZIP」。示例：5.00 秒样例夹两段 1.20 秒空白，切成 1.40 / 2.00 / 1.60 秒三段。搜按静音分割音频、按停顿切片、按静音切 ZIP、检测静音并分割，都是这一作业。不是挖静音拼回一个文件，不是按时长等分，也不是给视频消音。',
  tool_split_a_recording_on_silence_download_zip: '下载 ZIP',
  tool_split_a_recording_on_silence_drop_hint: '也可把 WAV、MP3、M4A 或 OGG 拖到这里。处理留在本标签页。',
  tool_split_a_recording_on_silence_empty: '请先选择音频文件。',
  tool_split_a_recording_on_silence_err_caps:
    '文件超过本设备上限（桌面大约 40 MB / 20 分钟，窄屏大约 20 MB / 8 分钟）。请先在别处缩短，或换更短的文件。',
  tool_split_a_recording_on_silence_err_decode:
    '当前浏览器解不出这个文件。请改试 WAV 或 MP3，或没有 DRM 的片段。',
  tool_split_a_recording_on_silence_err_empty: '没有可处理的内容。请先载入文件或样例。',
  tool_split_a_recording_on_silence_err_lame: 'MP3 编码器加载失败。请留在本标签页，再点一次「下载 ZIP」。',
  tool_split_a_recording_on_silence_err_no_clips:
    '没有够长的片段可保留。请把最短片段调短，或把最短静音调长，避免换气也被当成切点。',
  tool_split_a_recording_on_silence_err_too_many:
    '超过 50 段。请把最短静音调长，或把阈值调得更负，让邻近停顿并在一起，再点「按静音切开」。本页会拒绝，而不会悄悄截断。',
  tool_split_a_recording_on_silence_err_video:
    '本页不接受视频当主输入。它按停顿切声音文件，不会给视频消音，也不会做画面跳剪。',
  tool_split_a_recording_on_silence_err_zip: 'ZIP 库加载失败。请留在本标签页，再点一次「下载 ZIP」。',
  tool_split_a_recording_on_silence_example:
    '「载入样例」做出 5.00 秒音调，中间两段 1.20 秒静音（0.80 + 1.20 + 0.80 + 1.20 + 1.00）。按静音切开用 −40 dB / 1.0 秒 / 最短片段 0.3 秒，切点在 1.40 秒和 3.40 秒，三段分别 1.40 / 2.00 / 1.60 秒。下载 ZIP 默认写成 sample-01.wav；若在高级设置里选 MP3 则写 .mp3。',
  tool_split_a_recording_on_silence_example_title: '示例',
  tool_split_a_recording_on_silence_faq_a1:
    '不会。解码、检测、切开和打包 ZIP 都在本标签页完成。脚本从本站加载。文件不会发到我们的服务器。',
  tool_split_a_recording_on_silence_faq_a2:
    '不是另一个工具。搜按静音分割音频、按停顿切片、按静音切 ZIP、检测静音并分割，都是本页：在够长的安静处切开，一次下载多段 ZIP。',
  tool_split_a_recording_on_silence_faq_a3:
    '作业不同。「从一段录音里去掉静音」会挖掉死气并拼回一个更短文件。本页把停顿当切点，导出多段。若你只要一个文件，请用去掉静音那一页。',
  tool_split_a_recording_on_silence_faq_a4:
    '不会。按固定秒数等分是另一项作业。按 cue 表分轨也不在范围内。本页只在够长的安静处切开。',
  tool_split_a_recording_on_silence_faq_a5:
    '口语默认用 Speech（−40 dB / 1.0 秒 / 最短片段 0.3 秒）。讲座用 Lecture（−40 dB / 2.0 秒）。合集歌间空白用 Album（−45 dB / 1.5 秒 / 最短片段 1.0 秒）。若换气也被切开，把最短静音调长。',
  tool_split_a_recording_on_silence_faq_a6:
    'ZIP 里的文件名为 {stem}-01.wav（或 .mp3）。列表里也可以单段下载。上限 50 段，超过就拒绝切开。',
  tool_split_a_recording_on_silence_faq_a7:
    '不能。降噪、去掉 um/uh、视频消音、cue/APE 分轨、YouTube 扒流都不在范围内。请只用你有权处理的声音文件。',
  tool_split_a_recording_on_silence_faq_a8:
    '桌面大约 40 MB 或 20 分钟。窄屏大约 20 MB 或 8 分钟。超限会在解码前拒绝。动态很大的音乐可能被当成静音——把最短间隙调长，或不要用本页。',
  tool_split_a_recording_on_silence_faq_q1: '录音会上传吗？',
  tool_split_a_recording_on_silence_faq_q2: '我搜的是按静音分割音频、按停顿切片或 ZIP 多段，这是另一个工具吗？',
  tool_split_a_recording_on_silence_faq_q3: '我想要挖掉空白后仍是一个更短文件，这是去掉静音那一页吗？',
  tool_split_a_recording_on_silence_faq_q4: '会按固定时长等分，或按 cue 表分轨吗？',
  tool_split_a_recording_on_silence_faq_q5: '阈值该怎么选？换气会被切开吗？',
  tool_split_a_recording_on_silence_faq_q6: '文件怎么命名？最多能切多少段？',
  tool_split_a_recording_on_silence_faq_q7: '能降噪、切视频、跟 cue 文件，或扒 YouTube 吗？',
  tool_split_a_recording_on_silence_faq_q8: '能处理多大的文件？轻声音乐怎么办？',
  tool_split_a_recording_on_silence_format: 'ZIP 内文件格式',
  tool_split_a_recording_on_silence_format_hint: 'WAV 是无损 PCM。选 MP3 时，只有点「下载 ZIP」才加载编码器。',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    '找出够长的安静段，在每段静音的中点切开，再下载 ZIP；文件不上服务器。',
  tool_split_a_recording_on_silence_how_item_1: '打开一段录音（或点「载入样例」）。',
  tool_split_a_recording_on_silence_how_item_2: '可保持默认，或打开「高级设置（可选）」改阈值和最短静音。',
  tool_split_a_recording_on_silence_how_item_3: '点「按静音切开」。',
  tool_split_a_recording_on_silence_how_item_4: '点「下载 ZIP」。',
  tool_split_a_recording_on_silence_how_title: '怎么用',
  tool_split_a_recording_on_silence_hud_decode: '正在本标签页解码文件…',
  tool_split_a_recording_on_silence_hud_decoded: '已解码。红色是静音带。设置没问题就点「按静音切开」。',
  tool_split_a_recording_on_silence_hud_detect: '正在测量安静窗口…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '已用 {s} 秒',
  tool_split_a_recording_on_silence_hud_encode: '正在编码 MP3 片段…',
  tool_split_a_recording_on_silence_hud_fail_hint: '请改文件或设置，再点一次「按静音切开」。',
  tool_split_a_recording_on_silence_hud_fail_title: '按静音切开已停止',
  tool_split_a_recording_on_silence_hud_next: '完成。下一步：下载 ZIP。',
  tool_split_a_recording_on_silence_hud_next_zip: '完成。ZIP 下载应已开始。',
  tool_split_a_recording_on_silence_hud_pack: '正在把片段打进 ZIP…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: '正在按静音中点切开…',
  tool_split_a_recording_on_silence_hud_step_decode: '解码',
  tool_split_a_recording_on_silence_hud_step_detect: '检测',
  tool_split_a_recording_on_silence_hud_step_pack: '打包',
  tool_split_a_recording_on_silence_hud_step_split: '切开',
  tool_split_a_recording_on_silence_hud_title: '按静音切开进度',
  tool_split_a_recording_on_silence_hud_working: '开始…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} 声道',
  tool_split_a_recording_on_silence_min_clip: '最短片段（秒）',
  tool_split_a_recording_on_silence_min_clip_hint: '默认 0.3 秒。切开后更短的切片会丢掉。',
  tool_split_a_recording_on_silence_min_silence: '最短静音（秒）',
  tool_split_a_recording_on_silence_min_silence_hint: '默认 1.0 秒，避免短换气变成切点。',
  tool_split_a_recording_on_silence_pause: '暂停',
  tool_split_a_recording_on_silence_play: '播放',
  tool_split_a_recording_on_silence_preset_album: '合集',
  tool_split_a_recording_on_silence_preset_hint: '口语是默认。讲座等更长的章节停顿。合集按曲目之间的空白来切。',
  tool_split_a_recording_on_silence_preset_lecture: '讲座',
  tool_split_a_recording_on_silence_preset_speech: '口语',
  tool_split_a_recording_on_silence_preview_hint: '红色条带是够长、可作为切开依据的静音。播放预览当前整段。',
  tool_split_a_recording_on_silence_result_one:
    '{orig}s · 没有够长的停顿可切，ZIP 里会只有这一整段。可把最短静音调短，或把阈值调近 0。下载 ZIP 已可用。',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}s · {gaps} 段静音 → {count} 个片段：{list}。下载 ZIP 已可用。',
  tool_split_a_recording_on_silence_rules_body:
    '大约每 50 毫秒测一次 RMS，再换成分贝：levelDb = 20 × log10(rms)。低于阈值且达到最短静音的一段，会在其中点切开。短于最短片段的切片会丢掉。WAV 是 16 位 PCM。MP3 按所选码率 CBR。ZIP 在本标签页生成。',
  tool_split_a_recording_on_silence_rules_item_1:
    '口语默认：−40 dB、最短静音 1.0 秒、最短片段 0.3 秒。讲座：−40 dB / 2.0 秒 / 0.5 秒。合集空白：−45 dB / 1.5 秒 / 1.0 秒。',
  tool_split_a_recording_on_silence_rules_item_2:
    '桌面上限大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限会拒绝，不会截断。超过 50 段也会拒绝。',
  tool_split_a_recording_on_silence_rules_item_3:
    '文件留在你的设备上，不会上传到服务器。JSZip 和 MP3 编码器只在点「下载 ZIP」后才从本站加载。',
  tool_split_a_recording_on_silence_rules_item_4:
    '解码取决于浏览器。DRM、部分编码和视频容器会给出明确错误。',
  tool_split_a_recording_on_silence_rules_item_5:
    '本页导出 ZIP 多文件。不会拼回一个更短文件，不会按固定时长切，不会跟 cue 表，也不会降噪、给视频消音或去拉 YouTube。',
  tool_split_a_recording_on_silence_rules_title: '你该预期的规则',
  tool_split_a_recording_on_silence_sample: '载入样例',
  tool_split_a_recording_on_silence_split: '按静音切开',
  tool_split_a_recording_on_silence_status_done: '完成。',
  tool_split_a_recording_on_silence_threshold: '静音阈值（dB）',
  tool_split_a_recording_on_silence_threshold_hint: '默认 −40 dB。越接近 0，越多内容会被当成静音。',
  tool_split_a_recording_on_silence_title: '按静音把一段录音切成多段',
  tool_split_a_recording_on_silence_usecase_1:
    '按静音分割讲座录音，让章节停顿各自成为 ZIP 里的文件，而不是按固定时长硬切。',
  tool_split_a_recording_on_silence_usecase_2:
    '访谈按停顿切片，把回答拆成可稍后标注的独立片段。',
  tool_split_a_recording_on_silence_usecase_3:
    '合集歌与歌之间有空白、又没有 cue 表时，按静音切 ZIP。',
  tool_split_a_recording_on_silence_usecases_title: '适合这些场合',
  tool_split_a_recording_on_silence_why_choose_body:
    '专为按停顿中点切开并打成 ZIP 而做，口语 / 讲座 / 合集默认写在页面上，可以当场核对。',
  tool_split_a_recording_on_silence_why_choose_item_1:
    '在够长安静段的中点切开，打包多文件 ZIP；本页不会拼回一个更短文件。',
  tool_split_a_recording_on_silence_why_choose_item_2:
    '口语默认（−40 dB / 1.0 秒 / 最短片段 0.3 秒）减少把换气切开；讲座和合集预设写在页面上。',
  tool_split_a_recording_on_silence_why_choose_item_3:
    '文件留在本浏览器标签页，不上服务器；JSZip 和 lamejs 只在点「下载 ZIP」时加载。',
  tool_split_a_recording_on_silence_why_choose_item_4:
    '超体积或超过 50 段会拒绝，而不是给出会把标签页撑崩的 1 GB 承诺后再截断 ZIP。',
  tool_split_a_recording_on_silence_why_choose_title: '为什么选我们的「按静音把一段录音切成多段」工具',
};
export default zh;
