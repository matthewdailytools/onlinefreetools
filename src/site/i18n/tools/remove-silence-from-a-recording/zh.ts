/**
 * i18n tool shard (remove-silence-from-a-recording / zh).
 * 当地主检索句：从一段录音里去掉静音；次词写入 desc/FAQ。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：去静音仍一段，不是剪切器光杆名。 */
const zh: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: '高级设置（可选）',
  tool_remove_silence_from_a_recording_article:
    '在本标签页从一段录音里去掉静音：打开本地文件，点「去掉静音」，再导出 WAV 或 MP3。中间的空白和长停顿会被挖掉，人声拼回一个更短的文件，不上服务器。',
  tool_remove_silence_from_a_recording_bitrate: 'MP3 码率',
  tool_remove_silence_from_a_recording_bitrate_hint: '默认 128 kbps。只有点「导出 MP3」时才用到。',
  tool_remove_silence_from_a_recording_choose_file: '选择音频文件',
  tool_remove_silence_from_a_recording_clear: '清除',
  tool_remove_silence_from_a_recording_desc:
    '去掉本地录音里的空白，下载一个更短的 WAV 或 MP3；文件留在设备，不上传服务器。',
  tool_remove_silence_from_a_recording_description:
    '从一段录音里去掉静音：在本机切除空白和长停顿，仍得到一个更短文件，再下载 WAV 或 MP3——不上传服务器。步骤：打开录音，点去掉静音（默认 −40 dB / 0.5 秒 / 切口留 0.15 秒），再导出 WAV 或 MP3。示例：5.00 秒样例夹两段 1.20 秒空白，处理后约 2.90 秒。搜去除音频静音、去掉空白、删除静音段、自动剪静音、切除静音，都是这一页。不会按静音切成 ZIP，也不做视频消音或降噪。',
  tool_remove_silence_from_a_recording_drop_hint: '也可把 WAV、MP3、M4A 或 OGG 拖到这里。处理留在本标签页。',
  tool_remove_silence_from_a_recording_empty: '请先选择音频文件。',
  tool_remove_silence_from_a_recording_err_caps:
    '文件超出本设备上限（桌面约 40 MB / 20 分钟，窄屏约 20 MB / 8 分钟）。请先在别处缩短，或换更短的文件。',
  tool_remove_silence_from_a_recording_err_decode: '当前浏览器解不出这个文件。请改试 WAV、MP3，或去掉 DRM 的片段。',
  tool_remove_silence_from_a_recording_err_empty: '还没有可处理的内容。请先载入文件或样例。',
  tool_remove_silence_from_a_recording_err_empty_keep:
    '挖完之后没有可保留的声音。请把阈值调得更负，或加大最短静音，避免把人声当成空白。',
  tool_remove_silence_from_a_recording_err_lame: 'MP3 编码器没加载成功。请留在本页再点一次「导出 MP3」。',
  tool_remove_silence_from_a_recording_err_video:
    '本页不接收视频当主输入。它只缩短声音文件，不会把视频静音，也不会做画面跳剪。',
  tool_remove_silence_from_a_recording_example:
    '载入样例会生成 5.00 秒音，中间两段 1.20 秒静音（0.80 + 1.20 + 0.80 + 1.20 + 1.00）。用 −40 dB / 0.5 秒 / 留 0.15 秒去掉静音后约 2.90 秒。导出 WAV 写 PCM；导出 MP3 默认 128 kbps，可在高级设置改。',
  tool_remove_silence_from_a_recording_example_title: '示例',
  tool_remove_silence_from_a_recording_export_mp3: '导出 MP3',
  tool_remove_silence_from_a_recording_export_wav: '导出 WAV',
  tool_remove_silence_from_a_recording_faq_a1:
    '不会。解码、检测和拼接都在本标签页完成。脚本从本站加载。文件不会发到我们的服务器。',
  tool_remove_silence_from_a_recording_faq_a2:
    '就是这一页。去除音频静音、去掉空白、删除静音、自动剪静音、切除静音，都是把够长的安静段挖掉，再导出一个更短的 WAV 或 MP3。',
  tool_remove_silence_from_a_recording_faq_a3:
    '手裁「裁剪一段音频并导出」要你自己标起点和终点。本页还会挖掉中间的空白再拼回一段。若只想用手掐头尾，请用裁剪页。',
  tool_remove_silence_from_a_recording_faq_a4:
    '先用「口播」预设（−40 dB / 0.5 秒 / 留 0.15 秒）。环境吵：阈值往 −30 dB、最短静音往 0.8 秒。棚内人声可用「轻柔」（−50 dB）。若字尾被切掉，把阈值调更负，或加大最短静音，保住换气。',
  tool_remove_silence_from_a_recording_faq_a5:
    '不会。按静音切成许多文件或 ZIP 是另一件事。本页始终只导出一个文件。',
  tool_remove_silence_from_a_recording_faq_a6:
    '不会。降噪不缩短时长；去掉「嗯啊」要转写；视频消音和 YouTube 扒带都不做。请只处理你有权使用的声音文件。',
  tool_remove_silence_from_a_recording_faq_a7:
    '任务相同、软件不同。Audacity 的 Truncate Silence 也是把低于阈值且够长的空隙缩短。本页在浏览器里用 −40 dB / 0.5 秒 / 留 0.15 秒做这件事，不是 Audacity 安装教程。',
  tool_remove_silence_from_a_recording_faq_a8:
    '桌面约 40 MB 或 20 分钟；窄屏约 20 MB 或 8 分钟。超限会直接拒绝，不会偷偷截断。动态很大的音乐里，有意的弱奏可能被当成空白——请加大最短静音，或不要用本页。',
  tool_remove_silence_from_a_recording_faq_q1: '录音会上传吗？',
  tool_remove_silence_from_a_recording_faq_q2: '我搜的是去除音频静音、去掉空白或自动剪静音，这是另一套工具吗？',
  tool_remove_silence_from_a_recording_faq_q3: '我只想裁头尾，这和音频裁剪有何不同？',
  tool_remove_silence_from_a_recording_faq_q4: '阈值怎么选？会不会切掉换气？',
  tool_remove_silence_from_a_recording_faq_q5: '会不会按停顿切成很多段？',
  tool_remove_silence_from_a_recording_faq_q6: '能降噪、去口头禅、视频消音或扒 YouTube 吗？',
  tool_remove_silence_from_a_recording_faq_q7: '和 Audacity 缩短静音是一回事吗？',
  tool_remove_silence_from_a_recording_faq_q8: '文件可以多大？轻声演奏会被误切吗？',
  tool_remove_silence_from_a_recording_how_body:
    '找出够长的安静空隙并缩短，把人声拼回一个文件，再下载 WAV 或 MP3，文件不出本机。',
  tool_remove_silence_from_a_recording_how_item_1: '打开一段录音（或点「载入样例」）。',
  tool_remove_silence_from_a_recording_how_item_2: '用默认值即可，或打开「高级设置（可选）」改阈值和最短静音。',
  tool_remove_silence_from_a_recording_how_item_3: '点「去掉静音」。',
  tool_remove_silence_from_a_recording_how_item_4: '点「导出 WAV」或「导出 MP3」。',
  tool_remove_silence_from_a_recording_how_title: '怎么用',
  tool_remove_silence_from_a_recording_hud_cut: '正在挖掉空白并拼成一个文件…',
  tool_remove_silence_from_a_recording_hud_decode: '正在本标签页解码…',
  tool_remove_silence_from_a_recording_hud_decoded: '已解码。红色是将被挖掉的空白。设置无误后点「去掉静音」。',
  tool_remove_silence_from_a_recording_hud_detect: '正在测量安静窗…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: '已用 {s} 秒',
  tool_remove_silence_from_a_recording_hud_encode: '正在编码 MP3…',
  tool_remove_silence_from_a_recording_hud_fail_hint: '请改文件或设置后，再点「去掉静音」。',
  tool_remove_silence_from_a_recording_hud_fail_title: '去掉静音已停止',
  tool_remove_silence_from_a_recording_hud_next: '完成。下一步：导出 WAV 或导出 MP3。',
  tool_remove_silence_from_a_recording_hud_next_mp3: '完成。MP3 下载应已开始。',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: '拼接',
  tool_remove_silence_from_a_recording_hud_step_decode: '解码',
  tool_remove_silence_from_a_recording_hud_step_detect: '检测',
  tool_remove_silence_from_a_recording_hud_step_encode: '编码',
  tool_remove_silence_from_a_recording_hud_title: '去掉静音进度',
  tool_remove_silence_from_a_recording_hud_working: '开始…',
  tool_remove_silence_from_a_recording_keep: '每段空白保留（秒）',
  tool_remove_silence_from_a_recording_keep_hint: '默认 0.15 秒，避免听起来像硬跳。填 0 则整段空白都去掉。',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}秒 · {rate} Hz · {ch} 声道',
  tool_remove_silence_from_a_recording_min_silence: '最短静音（秒）',
  tool_remove_silence_from_a_recording_min_silence_hint: '默认 0.5 秒。更短的换气会留下。',
  tool_remove_silence_from_a_recording_pause: '暂停',
  tool_remove_silence_from_a_recording_play: '播放',
  tool_remove_silence_from_a_recording_preset_gentle: '轻柔',
  tool_remove_silence_from_a_recording_preset_hint: '「口播」是默认。轻柔多留停顿；紧凑切得更狠。',
  tool_remove_silence_from_a_recording_preset_speech: '口播',
  tool_remove_silence_from_a_recording_preset_tight: '紧凑',
  tool_remove_silence_from_a_recording_preview_hint: '红带是够长、将被挖掉的空白。播放试听当前文件（去掉静音后则试听结果）。',
  tool_remove_silence_from_a_recording_remove: '去掉静音',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}秒 → {next}秒。挖掉 {removed}秒（{pct}%），共 {gaps} 段空白。可以导出了。',
  tool_remove_silence_from_a_recording_rules_body:
    '大约每 50 毫秒测一次 RMS，再换成分贝：levelDb = 20 × log10(rms)。低于阈值且不短于「最短静音」的一段，会缩短到「保留」时长，再把人声接起来。WAV 为 16-bit PCM。MP3 为所选码率的 CBR。',
  tool_remove_silence_from_a_recording_rules_item_1:
    '口播默认：−40 dB、最短 0.5 秒、保留 0.15 秒。嘈杂房间可试 −30 dB / 0.8 秒 / 0.20 秒。安静棚内：−50 dB / 0.4 秒 / 0.15 秒。',
  tool_remove_silence_from_a_recording_rules_item_2:
    '桌面上限约 40 MB 或 20 分钟；窄屏约 20 MB 或 8 分钟。超限直接拒绝，不会截断后继续。',
  tool_remove_silence_from_a_recording_rules_item_3:
    '文件留在设备上，不上传服务器。MP3 编码器只在你点「导出 MP3」后才从本站加载。',
  tool_remove_silence_from_a_recording_rules_item_4:
    '能否解码取决于浏览器。DRM、部分编码和视频容器会给出明确错误。',
  tool_remove_silence_from_a_recording_rules_item_5:
    '本页只导出一个文件。不打包多段 ZIP、不降噪、不去口头禅、不给视频消音、不抓 YouTube。',
  tool_remove_silence_from_a_recording_rules_title: '规则与边界',
  tool_remove_silence_from_a_recording_sample: '载入样例',
  tool_remove_silence_from_a_recording_status_done: '完成。',
  tool_remove_silence_from_a_recording_threshold: '静音阈值（dB）',
  tool_remove_silence_from_a_recording_threshold_hint: '默认 −40 dB。越接近 0，越多片段会被当成静音。',
  tool_remove_silence_from_a_recording_title: '从一段录音里去掉静音',
  tool_remove_silence_from_a_recording_usecase_1:
    '播客两人对话中间停太久：去掉空白后仍是一集，不用切成许多小文件。',
  tool_remove_silence_from_a_recording_usecase_2:
    '会议录音里长时间没人说话，挖掉后再导出一个 MP3，回听更快。',
  tool_remove_silence_from_a_recording_usecase_3:
    '口播备忘录里思考停顿太多，一次去掉空白，发一个文件给同事。',
  tool_remove_silence_from_a_recording_usecases_title: '适合什么时候用',
  tool_remove_silence_from_a_recording_why_choose_body:
    '专为「挖空白、仍一个文件」：阈值对照表和挖掉秒数都写在页上，可以核对。',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    '空白挖掉后人声拼回一个文件；本页不会下载一包 ZIP 切片。',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    '口播默认 −40 dB / 0.5 秒 / 留 0.15 秒；结果行会写出挖掉了多少秒。',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    '文件留在这个浏览器标签页，不上传服务器；导出 MP3 时才加载编码器。',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    '超体积或超时长会在解码前拒绝，而不是吹 1 GB 却把标签页撑崩。',
  tool_remove_silence_from_a_recording_why_choose_title: '为什么用本站的从一段录音里去掉静音',
};
export default zh;
