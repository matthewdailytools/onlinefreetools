/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / zh).
 * H1 用任务句；cue 分轨 / flac cue 切割写进 desc 与 FAQ。
 */
import type { SiteLangDict } from '../../../types';

/** 中文检索向文案：用 cue 表把整轨镜像按曲目切开并打包 ZIP。 */
const zh: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: '高级设置（可选）',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    '在本标签页用 cue 表把整轨镜像分轨：打开镜像和 .cue，点「按曲目切开」，再「下载 ZIP」。切点跟 INDEX 01（每秒 75 帧）。文件留在你的设备上，不会上传到服务器。',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'MP3 码率',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: '默认 128 kbps。只有 ZIP 格式选 MP3 时才会用到。',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: '选择整轨镜像和 .cue 文件',
  tool_split_a_disc_image_with_a_cue_sheet_clear: '清除',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: '下载这一轨',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: '播放这一轨',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'CUE 表',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    '在本机按 cue 的 INDEX 01 把整轨镜像切开，下载带曲名的 ZIP；文件留在设备，不上服务器。',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    '用 cue 表把整轨镜像分轨：在设备上按 INDEX 01 切开，打成带曲名的 ZIP，文件不会上传到服务器。步骤：打开镜像和 .cue（也可粘贴表），点「按曲目切开」，再「下载 ZIP」。示例：6.00 秒样例在 0 / 2 / 4 秒各有 INDEX 01，切成 Intro / Middle / Outro 三轨，各 2.00 秒。搜 cue 分轨、flac cue 切割、ape cue 分轨、bin cue 分轨，都是这一作业。不是按静音切开，不是按时长等分，也不是 YouTube 章节或手裁。',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: '下载 ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    '可把 WAV、FLAC、MP3 或 BIN 连同 .cue 一起拖进来。处理留在本标签页。',
  tool_split_a_disc_image_with_a_cue_sheet_empty: '请先加上整轨镜像和 cue 表。',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: '请加上配套的整轨镜像（WAV、FLAC、MP3 或 BIN）。',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: '请加上 .cue 文件，或把 cue 表粘贴进来。',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    '当前浏览器解不了 APE。请先把镜像转成 WAV 或 FLAC，保留同一份 cue，再点「按曲目切开」。',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    '镜像超过本设备上限（桌面大约 80 MB / 30 分钟，窄屏大约 30 MB / 10 分钟）。整张 700 MB 的 CD .bin 塞不进这个标签页。',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    '这段文本不是能用的 cue 表。需要 TRACK 行，以及 MM:SS:FF 格式的 INDEX 01。',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    '这张 cue 描述的是数据盘（MODE 轨），不是音频镜像。本页只切 AUDIO 轨。',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    '当前浏览器解不出这个镜像。请改试 WAV 或 FLAC，或没有 DRM 的文件。这里不解 APE。',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: '没有可处理的内容。请先载入文件或样例。',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'MP3 编码器没加载成功。请留在本标签页，再试一次「下载 ZIP」。',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    '这张 cue 写了不止一个 FILE。那种布局已经是一轨一个文件，这里没有可拆的整轨。',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    '没有找到 INDEX 01 时间。cue 分轨需要这些 MM:SS:FF 起点。',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    '超过 50 轨。本页会拒绝截断。请拆更短的表，或用电脑上的 shnsplit。',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    '本页不接收视频当主输入。它用 cue 表拆音频镜像，不会给视频消音。',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'ZIP 库没加载成功。请留在本标签页，再试一次「下载 ZIP」。',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    '载入样例会生成 6.00 秒镜像（440 / 550 / 660 Hz，各两秒）和一张 cue：INDEX 01 在 00:00:00、00:02:00、00:04:00，曲名 Intro Tone、Middle Tone、Outro Tone。按曲目切开得到三轨，各 2.00 秒。下载 ZIP 会写成「01 Intro Tone.wav」，除非你在高级设置里改选 MP3。',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: '示例',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    '不会。解析、解码、切开和打包都在本标签页完成。脚本从本站加载。镜像和 cue 表不会发到我们的服务器。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    '是同一件事。搜 cue 分轨、flac cue 切割、ape cue 分轨、bin cue 分轨，都是按 INDEX 01 切开、下载带曲名的 ZIP。APE 这个搜法也指向本作业，但浏览器解不了 .ape——请先转成 WAV 或 FLAC，cue 留着继续用。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 是曲目起点（MM:SS:FF，每秒 75 帧）。INDEX 00 标预隙或隐藏轨，本页会显示，但默认仍切在 01。最后一轨接到镜像结尾。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    '不是。按静音切开走另一页；按时长等分也是另一页。本页只跟 cue 表。没有 FILE/INDEX 的 YouTube 章节列表不在范围内。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    '没有单独的 .cue 文件时，可在投放区下面粘贴全文。丢入 .cue 文件走同一套解析。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'ZIP 里的文件名为「{nn} {title}.wav」（或 .mp3）。列表里也可以单轨下载。上限 50 轨，超出就拒绝。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    '不能。降噪、给视频消音、等时长切、手裁、扒 YouTube、ISO 数据盘都不做。请只用你有权处理的音频镜像。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    '桌面大约 80 MB 或 30 分钟；窄屏大约 30 MB 或 10 分钟。整张 700 MB 的 CD .bin 会被拒绝。超帽文件在解码前就会拦下。',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: '镜像和 cue 表会上传吗？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2: '我搜的是 cue 分轨、flac cue 切割或 ape cue 分轨，这是另一页吗？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'INDEX 01 和 INDEX 00 有什么差别？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: '会按静音、按时长，或按 YouTube 章节切吗？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: '没有 .cue 文件，只能粘贴文本吗？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: '文件怎么命名，最多能切几轨？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: '能解 APE、切视频、等分，或扒 YouTube 吗？',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: '镜像最大能处理到多大？',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'ZIP 内格式',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint: 'WAV 是无损 PCM。点「下载 ZIP」时才会加载 MP3 编码器。',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    '读 cue 表里的 INDEX 01，在配套整轨镜像上切开，再下载带曲名的 ZIP，文件不会上传。',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: '打开整轨镜像和它的 .cue 文件（或点「载入样例」）。',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: '如果只有文本，把 cue 表粘贴进去。',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: '点「按曲目切开」。',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: '点「下载 ZIP」。',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: '怎么用',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: '正在本标签页解码镜像…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'cue 已解析、镜像已解码。白线是 INDEX 01 起点。列表无误再点「按曲目切开」。',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: '已用 {s} 秒',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: '正在编码 MP3 曲目…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: '请改 cue 或镜像，再点「按曲目切开」。',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'cue 分轨已停止',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: '完成。下一步：下载 ZIP。',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: '完成。ZIP 下载应该已开始。',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: '正在把曲目打进 ZIP…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: '正在读 cue 表…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: '正在按 INDEX 01 切开…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: '解码',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: '打包',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: '解析',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: '切开',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'cue 分轨进度',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: '开始…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: '整轨镜像',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur} 秒 · {rate} Hz · {ch} 声道 · {tracks} 处 INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint: '粘贴完整 cue 表（FILE、TRACK、INDEX 01）。不是 YouTube 章节列表。',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: '或粘贴 cue 表',
  tool_split_a_disc_image_with_a_cue_sheet_pause: '暂停',
  tool_split_a_disc_image_with_a_cue_sheet_play: '播放',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: '白线是 INDEX 01 曲目起点。播放可听整轨镜像。',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig} 秒 · {count} 轨：{list}。可以下载 ZIP 了。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    '每条 INDEX 01 写成 mm:ss:ff，每秒 75 帧：t = mm×60 + ss + ff/75。第 n 轨从该时刻切到下一处 INDEX 01，最后一轨接到镜像结尾。WAV/BIN 的 16 位 PCM 按字节偏移切片；其它格式走浏览器解码。ZIP 在本标签页打好。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    '切在 INDEX 01。INDEX 00 只当作预隙标记显示，不是默认切点。时间用 CD 帧，不是毫秒。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    '桌面上限大约 80 MB 或 30 分钟；窄屏大约 30 MB 或 10 分钟。超帽拒绝，不截断。超过 50 轨也会拒绝。700 MB 的 CD .bin 塞不进来。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    '文件留在你的设备上，不会上传到服务器。只有点「下载 ZIP」之后，才会从本站加载 JSZip 和 MP3 编码器。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE 和 BINARY（.bin，每扇区 2352 字节的 CDDA）可以按字节切。MP3/FLAC/M4A 需要浏览器解码。APE/TTA/WavPack 会给出明确错误。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    '本页只处理一个 FILE 加 INDEX 01。不按静音、等时长、YouTube 章节、体积切，不给视频消音，也不扒 YouTube。多 FILE 的 cue 已经是分轨成品。',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: '规则与边界',
  tool_split_a_disc_image_with_a_cue_sheet_sample: '载入样例',
  tool_split_a_disc_image_with_a_cue_sheet_split: '按曲目切开',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: '完成。',
  tool_split_a_disc_image_with_a_cue_sheet_title: '用 cue 表把整轨镜像分轨',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur} 秒（{start}s–{end}s）',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: '已切好、可打进 ZIP 的曲目',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    '把 Exact Audio Copy 或 XLD 抓下来的 FLAC+CUE 整轨，拆成带曲名的多轨，不必装 shnsplit。',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    '把黑胶一面或 CD 的 WAV/BIN 镜像连同 cue 表切开，带走一包分轨 ZIP。',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'DJ 现场长轨如果带了 cue 表，按 INDEX 01 抽曲，而不是去猜静音空隙。',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: '适合这些情况',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    '专为 INDEX 01 分轨和带曲名的 ZIP 而做，并对 APE、过大的 .bin 说清楚做不到什么。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    '按 cue 的 INDEX 01（每秒 75 帧）切开，ZIP 文件名来自 TITLE，不是等秒切片，也不是按静音切。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    '镜像和 .cue 同一投放区，文本也可粘贴——不是把 YouTube 章节编辑器假装成 cue 分轨。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    '文件留在本浏览器标签页，不会上传；只有点「下载 ZIP」才加载 JSZip 和 lamejs。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE 解码、多 FILE 的 cue、超大镜像会用白话拒绝，而不是承诺处理 700 MB 再把标签页撑死。',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title: '为什么用本站的用 cue 表把整轨镜像分轨',
};
export default zh;
