/**
 * i18n tool shard (trim-an-audio-clip-and-export / zh).
 * 检索向：裁剪一段音频并导出；mp3剪切/剪mp3 收进 FAQ，不拆 URL。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文文案：单文件起止裁剪并导出。 */
const zh: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: '高级设置（可选）',
  tool_trim_an_audio_clip_and_export_article:
    '在本机剪音频：打开文件，设起点和终点，点「裁剪」，再「导出 WAV」或「导出 MP3」。文件不出本机，不上传服务器。要做 mp3剪切或音频裁剪就是这一刀，不是完整波形编辑器。',
  tool_trim_an_audio_clip_and_export_bitrate: 'MP3 码率',
  tool_trim_an_audio_clip_and_export_bitrate_hint: '默认 128 kbps。只有点「导出 MP3」时才会用到。',
  tool_trim_an_audio_clip_and_export_choose_file: '选择音频文件',
  tool_trim_an_audio_clip_and_export_clear: '清除',
  tool_trim_an_audio_clip_and_export_desc:
    '在本机剪音频、裁剪一段，再导出 WAV 或 MP3。文件不出本机，不上传服务器。',
  tool_trim_an_audio_clip_and_export_description:
    '在本机剪音频：按起点、终点裁剪音频，再下载 WAV 或 MP3——文件留在设备，不上传服务器。步骤：打开文件，在波形上点选或填写起点终点，点「裁剪」，再「导出 WAV」或「导出 MP3」。示例：5 秒样例音保留 1.00–3.00 秒导出 WAV（也可 128 kbps MP3）。要 mp3剪切、剪mp3、剪切mp3、切割mp3、裁剪mp3、音频剪切、音频剪辑、mp3切割或在线剪音频，都是留下一段再导出。不是完整波形编辑器；不收视频当主输入。',
  tool_trim_an_audio_clip_and_export_drop_hint: '也可把 WAV、MP3、M4A 或 OGG 拖到这里。处理留在本标签页。',
  tool_trim_an_audio_clip_and_export_empty: '请先选择音频文件。',
  tool_trim_an_audio_clip_and_export_end: '终点（秒）',
  tool_trim_an_audio_clip_and_export_err_caps:
    '这个文件超过本设备上限（电脑大约 40 MB / 20 分钟，窄屏大约 20 MB / 8 分钟）。请先在别处裁短，或换更短的文件。',
  tool_trim_an_audio_clip_and_export_err_decode:
    '当前浏览器解不了这个文件。可改试 WAV 或 MP3，或去掉 DRM 的片段。',
  tool_trim_an_audio_clip_and_export_err_empty: '还没有可裁的内容。请先打开文件或载入样例。',
  tool_trim_an_audio_clip_and_export_err_lame: 'MP3 编码器没加载成功。请留在本标签页再点一次「导出 MP3」。',
  tool_trim_an_audio_clip_and_export_err_range: '终点必须晚于起点，且落在解码后的时长内。',
  tool_trim_an_audio_clip_and_export_err_video:
    '本页不把视频当主输入。请先抽出音频，再裁这段声音。',
  tool_trim_an_audio_clip_and_export_example:
    '「载入样例」会在内存生成 5.00 秒音调，把起点设为 1.00、终点设为 3.00，再自动「裁剪」留下大约 2.00 秒。「导出 WAV」写 PCM；「导出 MP3」默认 128 kbps，可在高级设置改。',
  tool_trim_an_audio_clip_and_export_example_title: '示例',
  tool_trim_an_audio_clip_and_export_export_mp3: '导出 MP3',
  tool_trim_an_audio_clip_and_export_export_wav: '导出 WAV',
  tool_trim_an_audio_clip_and_export_faq_a1:
    '不会。解码和切片都在本标签页完成。脚本从本站加载。文件不会 POST 到我们的服务器。',
  tool_trim_an_audio_clip_and_export_faq_a2:
    '不是。剪音频、音频裁剪、音频剪切、裁剪mp3、切割mp3、切歌、剪歌、wav剪切、去掉片头，都是打开文件、标起点和终点、点「裁剪」，再导出 WAV 或 MP3。',
  tool_trim_an_audio_clip_and_export_faq_a3:
    '默认会把切点吸到附近过零点，接缝不容易咔哒一声。不想吸附可在「高级设置（可选）」关掉。',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV 保留切下来的 PCM。MP3 更小（默认 128 kbps），只有点「导出 MP3」才加载编码器。',
  tool_trim_an_audio_clip_and_export_faq_a5:
    '不是。本页只裁起点和终点再导出。完整在线音频编辑 / 波形工作台是以后另一个工具。',
  tool_trim_an_audio_clip_and_export_faq_a6:
    '你可以裁到大约 30 秒，但本页不写 M4A，也不自动淡化。那套铃声规格是另一项作业。',
  tool_trim_an_audio_clip_and_export_faq_a7:
    '不能。视频拆音轨和 YouTube 扒带都不做。请用你已经有权处理的声音文件。',
  tool_trim_an_audio_clip_and_export_faq_a8:
    '电脑大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限会在解码前按体积拒绝，时长超限则解码后拒绝，不会偷偷截断。',
  tool_trim_an_audio_clip_and_export_faq_q1: '音频会上传吗？',
  tool_trim_an_audio_clip_and_export_faq_q2: '我搜的是 mp3剪切、剪mp3、切割mp3、切歌 或在线剪音频，这是另一个工具吗？',
  tool_trim_an_audio_clip_and_export_faq_q3: '为什么切点会跳一下？别的网站常有咔哒声。',
  tool_trim_an_audio_clip_and_export_faq_q4: '该导出 WAV 还是 MP3？',
  tool_trim_an_audio_clip_and_export_faq_q5: '这是在线音频编辑器吗？',
  tool_trim_an_audio_clip_and_export_faq_q6: '能做 iPhone 的 M4A 铃声吗？',
  tool_trim_an_audio_clip_and_export_faq_q7: '能从视频或 YouTube 抽声音吗？',
  tool_trim_an_audio_clip_and_export_faq_q8: '文件最大能裁多大？',
  tool_trim_an_audio_clip_and_export_how_body:
    '只留下起点到终点之间的那段，再下载 WAV 或 MP3，文件不出本机、不上传服务器。',
  tool_trim_an_audio_clip_and_export_how_item_1: '打开音频文件（或点「载入样例」）。',
  tool_trim_an_audio_clip_and_export_how_item_2: '在波形上点击或拖选要保留的一段，或填写起点和终点。',
  tool_trim_an_audio_clip_and_export_how_item_3: '点「裁剪」。',
  tool_trim_an_audio_clip_and_export_how_item_4: '点「导出 WAV」或「导出 MP3」。',
  tool_trim_an_audio_clip_and_export_how_title: '怎么用',
  tool_trim_an_audio_clip_and_export_hud_decode: '正在本标签页解码文件…',
  tool_trim_an_audio_clip_and_export_hud_decoded: '已解码。设好起点和终点，再点「裁剪」。',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: '已用 {s} 秒',
  tool_trim_an_audio_clip_and_export_hud_encode: '正在编码 MP3…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: '改文件或时间后再点「裁剪」。',
  tool_trim_an_audio_clip_and_export_hud_fail_title: '裁剪已停止',
  tool_trim_an_audio_clip_and_export_hud_next: '完成。下一步：导出 WAV 或导出 MP3。',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: '完成。MP3 下载应已开始。',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: '解码',
  tool_trim_an_audio_clip_and_export_hud_step_encode: '编码',
  tool_trim_an_audio_clip_and_export_hud_step_trim: '裁剪',
  tool_trim_an_audio_clip_and_export_hud_title: '裁剪进度',
  tool_trim_an_audio_clip_and_export_hud_trim: '正在按起止切开…',
  tool_trim_an_audio_clip_and_export_hud_working: '开始…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur} 秒 · {rate} Hz · {ch} 声道',
  tool_trim_an_audio_clip_and_export_pause: '暂停',
  tool_trim_an_audio_clip_and_export_play: '播放',
  tool_trim_an_audio_clip_and_export_preview_hint: '点击或拖选波形来设起点和终点。播放会试听这一段。',
  tool_trim_an_audio_clip_and_export_result_tpl: '留下 {dur} 秒（{start}–{end} 秒）。可以导出了。',
  tool_trim_an_audio_clip_and_export_rules_body:
    '起点到终点之间的采样会拷进新缓冲。默认把两端吸到附近过零点。WAV 写 16-bit PCM。MP3 按所选码率做 CBR。',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    '电脑上限大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限拒绝，不会偷偷截断。',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    '文件留在设备，不上传服务器。MP3 编码器只在点「导出 MP3」后从本站加载。',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    '解码取决于浏览器。带 DRM、部分编码和视频容器会给出明确错误。',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    '本页不混音、不加淡化、不写 M4A、不抓 YouTube。一个文件、一段范围、一次导出。',
  tool_trim_an_audio_clip_and_export_rules_title: '你会遇到的规则',
  tool_trim_an_audio_clip_and_export_sample: '载入样例',
  tool_trim_an_audio_clip_and_export_start: '起点（秒）',
  tool_trim_an_audio_clip_and_export_status_done: '完成。',
  tool_trim_an_audio_clip_and_export_title: '裁剪一段音频并导出',
  tool_trim_an_audio_clip_and_export_trim: '裁剪',
  tool_trim_an_audio_clip_and_export_usecase_1: '给播客剪音频：跳过 8 秒片头，导出 MP3 发聊天。',
  tool_trim_an_audio_clip_and_export_usecase_2: '从会议录音里留下 12 秒金句，下载 WAV 存档。',
  tool_trim_an_audio_clip_and_export_usecase_3: '把语音备忘录两端静音裁掉，和做 mp3剪切、音频裁剪是同一刀。',
  tool_trim_an_audio_clip_and_export_usecases_title: '适合这些事',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    '就做这一刀再下载，上限和过零点都能在本页核对。',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    '解码和切片留在本标签页；第一次加载编码器是点「导出 MP3」的时候。',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    '体积或时长超限会拒绝，而不是悄悄截断。',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    '默认过零点吸附，接缝不容易咔哒；可以关掉。',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV 和 MP3 分两个导出按钮，和步骤用词一致；码率只在高级设置里。',
  tool_trim_an_audio_clip_and_export_why_choose_title: '为什么选择我们的「裁剪一段音频并导出」工具',
  tool_trim_an_audio_clip_and_export_zerocross: '把起点和终点吸到附近过零点',
  tool_trim_an_audio_clip_and_export_zerocross_hint: '默认开启。减少接缝咔哒。要精确到采样点可关掉。',
};
export default zh;
