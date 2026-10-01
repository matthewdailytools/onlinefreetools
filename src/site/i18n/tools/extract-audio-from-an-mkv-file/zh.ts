import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：从 MKV 文件提取音频。
 * D1 诚实边界：约 500 MiB/4 小时回退；超大或 DDP/Atmos 须本机 ffmpeg 转 AAC 立体声 MP4，再走 MP4 抽音页。
 * 键名与英文母版一一对应；禁止直搬英文句式。
 */
const zh: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: '从 MKV 文件提取音频',
  tool_extract_audio_from_an_mkv_file_desc:
    '在浏览器里从单个本地 MKV 提取音轨并下载 WAV/MP3（约 500 MiB/4 小时回退路径）。多 GiB 或 DDP/Atmos：先在本机用 ffmpeg 转成 AAC MP4，再用「从 MP4 文件提取音频」。',
  tool_extract_audio_from_an_mkv_file_description:
    '在浏览器中从单个本地 MKV 提取音轨，再下载 WAV 或 MP3。步骤：选 MKV → 提取 → 试听 → 下载。示例：「加载样例」在 MediaRecorder 可用时生成短片段——更推荐真实 .mkv 且约 500 MiB 以内。本页走 MediaElement 回退（约 500 MiB/4 小时）；超大文件会立刻报 err_container。多 GiB 或杜比全景声 / DDP（E-AC-3）音轨此处不支持——请在电脑上用 ffmpeg 做成 AAC 立体声 MP4（视频可 copy），再打开「从 MP4 文件提取音频」走大文件 demux。仅本地文件，不是 YouTube 链接下载，不上传。多个 MKV 请用「批量从 MKV 文件提取音频」。',
  tool_extract_audio_from_an_mkv_file_article:
    '录屏和采集常以 MKV 交付。本页只接受 .mkv，走共享回退抽音路径，写出 WAV/MP3 且不上传。不宣称 ISOBMFF demux 或多 GiB OPFS 流式——那是带 AAC 的 MP4/MOV 路径。浏览器里也不解码 E-AC-3 / DTS。遇到多 GiB 或 Atmos 轨，先在本机 ffmpeg 转 AAC MP4，再去 MP4 抽音页。混合格式文件夹请用视频枢纽或枢纽批量页。',
  tool_extract_audio_from_an_mkv_file_choose: '选择 MKV 文件',
  tool_extract_audio_from_an_mkv_file_hint:
    '拖入约 500 MiB/4 小时以内的本地 .mkv。更大或 DDP/Atmos：在电脑执行 ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4，再使用「从 MP4 文件提取音频」。',
  tool_extract_audio_from_an_mkv_file_convert: '提取',
  tool_extract_audio_from_an_mkv_file_download: '下载',
  tool_extract_audio_from_an_mkv_file_download_wav: '下载 WAV',
  tool_extract_audio_from_an_mkv_file_download_mp3: '下载 MP3',
  tool_extract_audio_from_an_mkv_file_sample: '加载样例',
  tool_extract_audio_from_an_mkv_file_clear: '清除',
  tool_extract_audio_from_an_mkv_file_advanced: '导出格式',
  tool_extract_audio_from_an_mkv_file_format_label: '输出格式',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV（16 位）',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'MP3 码率',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    '短 MKV 默认 WAV 即可。较长片段可能流式写 MP3。上限是回退路径（约 500 MiB），不是 MP4 demux。不支持 URL。',
  tool_extract_audio_from_an_mkv_file_progress: '提取进度',
  tool_extract_audio_from_an_mkv_file_read: '读取',
  tool_extract_audio_from_an_mkv_file_decode: '解码',
  tool_extract_audio_from_an_mkv_file_extract: '提取',
  tool_extract_audio_from_an_mkv_file_write: '写入',
  tool_extract_audio_from_an_mkv_file_done: '完成。先试听，再下载 WAV 或 MP3。',
  tool_extract_audio_from_an_mkv_file_failed: '提取失败。请换更小的 MKV，或先用 ffmpeg 转成 AAC MP4。',
  tool_extract_audio_from_an_mkv_file_elapsed: '已用时 {s} 秒',
  tool_extract_audio_from_an_mkv_file_preview: '试听提取出的音频',
  tool_extract_audio_from_an_mkv_file_result: '{seconds} 秒 · {channels} 声道 · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: '短mkv音频演示',
  tool_extract_audio_from_an_mkv_file_empty: '请先选择 MKV 或加载样例。',
  tool_extract_audio_from_an_mkv_file_empty_state:
    '尚未加载文件。拖入约 500 MiB 以内的本地 .mkv，或点「加载样例」。多 GiB / DDP：先用 ffmpeg 转 AAC MP4。不是 YouTube。',
  tool_extract_audio_from_an_mkv_file_err_file: '请恰好放入一个 MKV 文件。',
  tool_extract_audio_from_an_mkv_file_err_format: '不支持的文件。本页仅接受 .mkv。',
  tool_extract_audio_from_an_mkv_file_err_limit: '该 MKV 超出回退路径的时长或体积限制。',
  tool_extract_audio_from_an_mkv_file_err_container:
    '该 MKV 超过回退上限（约 500 MiB/4 小时）或此处无法解码。请在电脑上用 ffmpeg 转成 AAC 立体声 MP4（视频可 copy），再打开「从 MP4 文件提取音频」——或换更小的 MKV。',
  tool_extract_audio_from_an_mkv_file_err_codec:
    '浏览器不支持该 MKV 音轨编码（常见为 E-AC-3 / DDP / Atmos）。请用 ffmpeg 转成 MP4 内的 AAC，再使用 MP4 抽音页。',
  tool_extract_audio_from_an_mkv_file_err_channels: '声道布局本工具无法处理。请先在 MP4 中降混为立体声 AAC。',
  tool_extract_audio_from_an_mkv_file_err_decode: '浏览器无法从该 MKV 解码音频。',
  tool_extract_audio_from_an_mkv_file_err_encoder: '无法写出音频文件。请重试提取。',
  tool_extract_audio_from_an_mkv_file_err_sample: '无法生成样例 MKV。请改用你自己的 .mkv。',
  tool_extract_audio_from_an_mkv_file_err_unsupported: '当前浏览器缺少提取所需的 Web Audio。',
  tool_extract_audio_from_an_mkv_file_err_empty: '未捕获到可用音频采样。',
  tool_extract_audio_from_an_mkv_file_stop: '停止',
  tool_extract_audio_from_an_mkv_file_status_stopped: '已停止。本次不保留半成品音频。',
  tool_extract_audio_from_an_mkv_file_forced_mp3: '较长/较大输入在回退路径上使用了流式 MP3。',
  tool_extract_audio_from_an_mkv_file_how_title: '如何从 MKV 文件提取音频',
  tool_extract_audio_from_an_mkv_file_how_body:
    '小体积本地 MKV：拖入 → 提取 → 下载。多 GiB 或 DDP/Atmos：先在本机用 ffmpeg 转成 AAC MP4，再使用 MP4 抽音工具。',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    '选择约 500 MiB 以内的本地 .mkv，或在 MediaRecorder 可用时加载样例。若文件是多 GiB 或 DDP/Atmos，请先停在本页之外用 ffmpeg 转换。',
  tool_extract_audio_from_an_mkv_file_how_item_2: '打开「导出格式」，选 WAV 或 MP3，必要时设码率。',
  tool_extract_audio_from_an_mkv_file_how_item_3: '点击「提取」，等待 读取 → 解码 → 提取 → 写入（或点「停止」）。',
  tool_extract_audio_from_an_mkv_file_how_item_4: '试听后，点击「下载 WAV」或「下载 MP3」。',
  tool_extract_audio_from_an_mkv_file_why_choose_title: '为什么用我们的「从 MKV 文件提取音频」',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1: '仅接受 MKV，避免与 MP4 落地页混在一起。',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2: '诚实写明回退上限——不为 MKV 虚报 5 GiB demux。',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3: '超大/DDP 文件有清晰下一步：本机 ffmpeg → AAC MP4 → MP4 抽音页。',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: '全程在本机处理；「停止」可中途取消。',
  tool_extract_audio_from_an_mkv_file_rules_title: '仅 MKV 与回退上限',
  tool_extract_audio_from_an_mkv_file_rules_body:
    '每次处理一个本地 MKV，走 MediaElement 回退。不是 YouTube 转 MP3，也不是导出静音视频。超大或冷门编码的 MKV 须先得到本机 AAC MP4。',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    '约 500 MiB/4 小时回退。超限 → err_container。大文件 demux 目前仅 MP4/MOV。',
  tool_extract_audio_from_an_mkv_file_rules_item_2: '不支持 URL 或 YouTube 下载。',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS 通常报 err_codec。本机示例：ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4，然后打开「从 MP4 文件提取音频」。',
  tool_extract_audio_from_an_mkv_file_rules_item_4: '从不覆盖原始 MKV。批量请用 MKV 批量抽音页。',
  tool_extract_audio_from_an_mkv_file_example_title: '试一次真实提取',
  tool_extract_audio_from_an_mkv_file_example:
    '「加载样例」在 MediaRecorder 可用时生成短合成片段并自动提取。更推荐你自己约回退上限内的 .mkv。多 GiB 片源：先 ffmpeg 转 AAC MP4，再去 MP4 页。',
  tool_extract_audio_from_an_mkv_file_usecases_title: '适用场景',
  tool_extract_audio_from_an_mkv_file_usecase_1: '浏览器录屏得到约 500 MiB 内的 MKV，只想分享 MP3 且不上传。',
  tool_extract_audio_from_an_mkv_file_usecase_2: '短时 MKV 访谈只要音轨成 WAV。',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    '明知是超大 MKV 或 DDP——本机先转 AAC MP4，再用 MP4 抽音工具，而不是本页硬扛。',
  tool_extract_audio_from_an_mkv_file_faq_q1: '能粘贴 YouTube 链接吗？',
  tool_extract_audio_from_an_mkv_file_faq_a1: '不能。仅本地 .mkv。',
  tool_extract_audio_from_an_mkv_file_faq_q2: '为什么不能像 MP4 页那样做到 5 GiB？',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    '大文件 demux 目前只针对 ISOBMFF（MP4/MOV）。MKV 走 MediaElement 回退约 500 MiB，直到上线 Matroska demux。',
  tool_extract_audio_from_an_mkv_file_faq_q3: '我的 MKV 是多 GiB 或杜比全景声 / DDP，该怎么办？',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    '本页会拒绝（err_container 和/或 err_codec）。请在电脑上转成 AAC 立体声 MP4，例如：ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4。然后打开「从 MP4 文件提取音频」走大文件 demux。仅 remux 不改音频编码、轨仍是 E-AC-3 时依旧会失败。',
  tool_extract_audio_from_an_mkv_file_faq_q4: '会把 MKV 静音成无声视频吗？',
  tool_extract_audio_from_an_mkv_file_faq_a4: '不会。只提取音轨为 WAV/MP3。',
  tool_extract_audio_from_an_mkv_file_faq_q5: '文件会上传到服务器吗？',
  tool_extract_audio_from_an_mkv_file_faq_a5: '不会。解码与写出在浏览器本机完成。需要时的 ffmpeg 步骤也在你自己的电脑上。',
  tool_extract_audio_from_an_mkv_file_faq_q6: '我有很多个 MKV，该用哪一页？',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    '小体积 MKV 文件夹：用「批量从 MKV 文件提取音频」。超大或 DDP：先各自转 AAC MP4，再使用「批量从 MP4 文件提取音频」或单个 MP4 页。',
  tool_extract_audio_from_an_mkv_file_faq_q7: '提取后能裁剪吗？',
  tool_extract_audio_from_an_mkv_file_faq_a7: '本页不能。下载后请用「裁剪音频片段并导出」。',
};
export default zh;
