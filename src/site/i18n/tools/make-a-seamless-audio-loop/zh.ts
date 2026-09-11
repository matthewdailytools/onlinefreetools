/**
 * i18n tool shard (make-a-seamless-audio-loop / zh).
 * H1：把音频做成无缝循环；音频循环器/交叉淡化收进 FAQ，不拆 URL。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：把一段本地音频做成接缝听不出的循环并导出。 */
const zh: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: '高级设置（可选）',
  tool_make_a_seamless_audio_loop_article:
    '在本标签页把音频做成无缝循环：打开本机文件，标起点和终点，设交叉淡化，点「做成循环」，再「导出 WAV」或「导出 MP3」。结尾会淡进开头，接缝不容易咔哒。文件不出本机，不上传服务器。要做音频循环或交叉淡化循环就是这一页，不是完整波形编辑器。',
  tool_make_a_seamless_audio_loop_bitrate: 'MP3 码率',
  tool_make_a_seamless_audio_loop_bitrate_hint: '默认 128 kbps。只有点「导出 MP3」时才会用到。',
  tool_make_a_seamless_audio_loop_choose_file: '选择音频文件',
  tool_make_a_seamless_audio_loop_clear: '清除',
  tool_make_a_seamless_audio_loop_crossfade: '交叉淡化（毫秒）',
  tool_make_a_seamless_audio_loop_crossfade_hint: '默认 50 毫秒。鼓点用 20 毫秒；垫乐、无人机、环境音用 200–500 毫秒。',
  tool_make_a_seamless_audio_loop_desc:
    '在本机把音频做成无缝循环：把结尾交叉淡化进开头，再导出 WAV 或 MP3。文件不出本机，不上传服务器。',
  tool_make_a_seamless_audio_loop_description:
    '在本机把音频做成无缝循环：给本地片段做首尾交叉淡化，再下载 WAV 或 MP3——文件留在设备，不上传服务器。步骤：打开文件，标起点和终点，设交叉淡化（默认 50 毫秒），点「做成循环」，用「播放」听接缝，再「导出 WAV」或「导出 MP3」。示例：5 秒样例音保留 1.00–3.00 秒、50 毫秒等功率环绕后约 1.95 秒。要音频循环、音频循环器、循环音频、在线音频循环、交叉淡化循环或游戏循环音效，都是这一套。不是完整波形编辑器；不做两首歌切歌、铃声 M4A、YouTube 扒带。',
  tool_make_a_seamless_audio_loop_disclaimer: '请确认你有权处理这份文件。本页不提供音乐授权，也不代抓在线流。',
  tool_make_a_seamless_audio_loop_drop_hint: '也可把 WAV、MP3、M4A 或 OGG 拖到这里。处理留在本标签页。',
  tool_make_a_seamless_audio_loop_empty: '请先选择音频文件。',
  tool_make_a_seamless_audio_loop_end: '终点（秒）',
  tool_make_a_seamless_audio_loop_equal_power: '等功率交叉淡化',
  tool_make_a_seamless_audio_loop_equal_power_hint: '默认开启，接缝处响度更稳。关掉则改用线性混合。',
  tool_make_a_seamless_audio_loop_err_bake: '烘焙后的文件会超过大约 3 分钟。请减少圈数或缩短选区。',
  tool_make_a_seamless_audio_loop_err_caps:
    '这个文件超过本设备上限（电脑大约 40 MB / 20 分钟，窄屏大约 20 MB / 8 分钟）。请先在别处裁短，或换更短的文件。',
  tool_make_a_seamless_audio_loop_err_decode: '当前浏览器解不了这个文件。可改试 WAV 或 MP3，或去掉 DRM 的片段。',
  tool_make_a_seamless_audio_loop_err_empty: '还没有可循环的内容。请先打开文件或载入样例。',
  tool_make_a_seamless_audio_loop_err_fade: '交叉淡化必须短于选区。请减小毫秒数，或拉长起点到终点。',
  tool_make_a_seamless_audio_loop_err_lame: 'MP3 编码器没加载成功。请留在本标签页再点一次「导出 MP3」。',
  tool_make_a_seamless_audio_loop_err_range: '终点必须晚于起点，且落在解码后的时长内。',
  tool_make_a_seamless_audio_loop_err_video: '本页不把视频当主输入。请先抽出音频，再做成循环。',
  tool_make_a_seamless_audio_loop_example:
    '「载入样例」会在内存生成 5.00 秒音调，把起点设为 1.00、终点设为 3.00，用 50 毫秒等功率环绕，再自动「做成循环」，一圈大约 1.95 秒。「导出 WAV」写 PCM；「导出 MP3」默认 128 kbps，可在高级设置改。',
  tool_make_a_seamless_audio_loop_example_title: '示例',
  tool_make_a_seamless_audio_loop_export_mp3: '导出 MP3',
  tool_make_a_seamless_audio_loop_export_wav: '导出 WAV',
  tool_make_a_seamless_audio_loop_faq_a1:
    '不会。解码和环绕交叉淡化都在本标签页完成。脚本从本站加载。文件不会 POST 到我们的服务器。',
  tool_make_a_seamless_audio_loop_faq_a2:
    '不是。音频循环、音频循环器、循环音频、在线音频循环、交叉淡化循环、游戏循环音效，都是打开文件、标一段、做交叉淡化，再导出 WAV 或 MP3。',
  tool_make_a_seamless_audio_loop_faq_a3:
    '交叉淡化把选区结尾叠进开头。默认 50 毫秒等功率。鼓点大约 20 毫秒；垫乐和环境音用 200–500 毫秒更顺。',
  tool_make_a_seamless_audio_loop_faq_a4:
    '导出的一圈会比起点到终点短一个交叉淡化长度，因为重叠只混一次。2.00 秒选区加 50 毫秒，大约剩 1.95 秒。',
  tool_make_a_seamless_audio_loop_faq_a5:
    '游戏引擎要自己 loop 文件时用 WAV。直播软件不会循环时，可在高级设置把圈数改成 4 或 8 再导出 MP3。点「导出 MP3」才加载编码器。',
  tool_make_a_seamless_audio_loop_faq_a6:
    '默认圈数是 1。直播垫乐可在「高级设置（可选）」烘焙 4 或 8 圈。输出超过大约 3 分钟会拒绝，不会做十小时版本。',
  tool_make_a_seamless_audio_loop_faq_a7:
    '不是。本页只把同一段的尾接到头。两首歌交叉淡化、完整音频编辑器、iPhone M4A 铃声、自动找循环点、测 BPM、YouTube 扒带都不做。',
  tool_make_a_seamless_audio_loop_faq_a8:
    '电脑大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限会拒绝，不会偷偷截断。',
  tool_make_a_seamless_audio_loop_faq_q1: '音频会上传吗？',
  tool_make_a_seamless_audio_loop_faq_q2: '我搜的是音频循环器、在线音频循环或交叉淡化循环，这是另一个工具吗？',
  tool_make_a_seamless_audio_loop_faq_q3: '交叉淡化怎么去掉接缝咔哒？',
  tool_make_a_seamless_audio_loop_faq_q4: '为什么导出来比我标的那段短？',
  tool_make_a_seamless_audio_loop_faq_q5: '游戏垫乐该导出 WAV，还是直播该导出 MP3？',
  tool_make_a_seamless_audio_loop_faq_q6: '直播软件不会循环文件，能不能连拷几圈？',
  tool_make_a_seamless_audio_loop_faq_q7: '这是两首歌切歌、铃声制作，还是自动寻环？',
  tool_make_a_seamless_audio_loop_faq_q8: '文件最大能处理多大？',
  tool_make_a_seamless_audio_loop_how_body:
    '标出要重复的一段，用交叉淡化把结尾接回开头，再下载 WAV 或 MP3，文件不出本机、不上传服务器。',
  tool_make_a_seamless_audio_loop_how_item_1: '打开音频文件（或点「载入样例」）。',
  tool_make_a_seamless_audio_loop_how_item_2:
    '在波形上点选或填写起点和终点。默认交叉淡化 50 毫秒不对就改（芯片：20 / 50 / 200 / 500 毫秒）。',
  tool_make_a_seamless_audio_loop_how_item_3: '点「做成循环」。',
  tool_make_a_seamless_audio_loop_how_item_4: '点「播放」听接缝，再「导出 WAV」或「导出 MP3」。',
  tool_make_a_seamless_audio_loop_how_title: '怎么用',
  tool_make_a_seamless_audio_loop_hud_decode: '正在本标签页解码文件…',
  tool_make_a_seamless_audio_loop_hud_decoded: '已解码。设好起点、终点和交叉淡化，再点「做成循环」。',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: '已用 {s} 秒',
  tool_make_a_seamless_audio_loop_hud_encode: '正在编码 MP3…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: '改文件、时间或交叉淡化后再点「做成循环」。',
  tool_make_a_seamless_audio_loop_hud_fail_title: '做成循环已停止',
  tool_make_a_seamless_audio_loop_hud_loop: '正在把结尾叠进开头…',
  tool_make_a_seamless_audio_loop_hud_next: '完成。下一步：播放听接缝，再导出 WAV 或导出 MP3。',
  tool_make_a_seamless_audio_loop_hud_next_mp3: '完成。MP3 下载应已开始。',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: '解码',
  tool_make_a_seamless_audio_loop_hud_step_encode: '编码',
  tool_make_a_seamless_audio_loop_hud_step_loop: '循环',
  tool_make_a_seamless_audio_loop_hud_title: '循环进度',
  tool_make_a_seamless_audio_loop_hud_working: '开始…',
  tool_make_a_seamless_audio_loop_make: '做成循环',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} 声道',
  tool_make_a_seamless_audio_loop_pause: '暂停',
  tool_make_a_seamless_audio_loop_play: '播放',
  tool_make_a_seamless_audio_loop_preview_hint: '在波形上点选起点和终点。做成循环后，「播放」会重复结果，方便听接缝。',
  tool_make_a_seamless_audio_loop_repeats: '圈数（烘焙拷贝）',
  tool_make_a_seamless_audio_loop_repeats_hint: '默认 1 圈，给会自己循环的播放器。不会循环就选 4 或 8。输出超过大约 3 分钟会拒绝。',
  tool_make_a_seamless_audio_loop_result_tpl: '循环 {dur} 秒（{start}–{end} 秒，交叉淡化 {fade} 毫秒，{n} 圈）。可以导出了。',
  tool_make_a_seamless_audio_loop_rules_body:
    '先拷贝选区，再用等功率（或线性）把最后一段淡化叠到开头。输出时长 = 选区减去交叉淡化。圈数大于 1 时把这一圈首尾相接连贴。WAV 写 16 位 PCM。MP3 按所选码率 CBR。',
  tool_make_a_seamless_audio_loop_rules_item_1:
    '电脑上限大约 40 MB 或 20 分钟；窄屏大约 20 MB 或 8 分钟。超限会拒绝，不会截断。',
  tool_make_a_seamless_audio_loop_rules_item_2:
    '文件留在设备，不上传服务器。只有点「导出 MP3」才从本站加载编码器。',
  tool_make_a_seamless_audio_loop_rules_item_3:
    '交叉淡化必须短于选区。导出的一圈会短掉这段重叠。默认曲线是等功率。',
  tool_make_a_seamless_audio_loop_rules_item_4:
    '解码取决于浏览器。带 DRM、部分编码和视频容器会明文失败。',
  tool_make_a_seamless_audio_loop_rules_item_5:
    '本页不混两首歌、不写 M4A、不测 BPM、不自动找循环点、不抓 YouTube。一个文件、一段选区、一个循环。',
  tool_make_a_seamless_audio_loop_rules_title: '规则和边界',
  tool_make_a_seamless_audio_loop_sample: '载入样例',
  tool_make_a_seamless_audio_loop_start: '起点（秒）',
  tool_make_a_seamless_audio_loop_status_done: '完成。',
  tool_make_a_seamless_audio_loop_title: '把音频做成无缝循环',
  tool_make_a_seamless_audio_loop_usecase_1: '把两秒游戏垫乐做成无缝循环，导出 WAV 给会重复播放该文件的引擎。',
  tool_make_a_seamless_audio_loop_usecase_2: '直播垫乐：标好乐句，保留 50 毫秒交叉淡化，在高级设置烘焙 8 圈，导出 MP3。',
  tool_make_a_seamless_audio_loop_usecase_3: '环境音或无人机垫用 200–500 毫秒交叉淡化，让接缝几乎听不见。',
  tool_make_a_seamless_audio_loop_usecases_title: '适合什么时候用',
  tool_make_a_seamless_audio_loop_why_choose_body: '就办「做成无缝循环再下载」这一件事，淡化能试听，上限写在页上。',
  tool_make_a_seamless_audio_loop_why_choose_item_1: '解码和环绕都在本标签页；点「导出 MP3」才加载编码器脚本。',
  tool_make_a_seamless_audio_loop_why_choose_item_2: '默认等功率交叉淡化；20 / 50 / 200 / 500 毫秒芯片对应鼓点和垫乐。',
  tool_make_a_seamless_audio_loop_why_choose_item_3: '做成循环后「播放」会重复结果，下载前就能听接缝。',
  tool_make_a_seamless_audio_loop_why_choose_item_4: '超体积文件和烘焙超过约 3 分钟会拒绝，不会偷偷截断。',
  tool_make_a_seamless_audio_loop_why_choose_title: '为什么用本站的把音频做成无缝循环',
  tool_make_a_seamless_audio_loop_zerocross: '把起点和终点吸到附近过零点',
  tool_make_a_seamless_audio_loop_zerocross_hint: '默认开启，交叉淡化前先稳住边缘。要精确到采样可关掉。',
};
export default zh;
