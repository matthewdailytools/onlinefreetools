import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：从 WebM 文件提取音频（WebM 专页，MediaElement 回退约 500 MiB/4 小时）。
 */
const zh: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: '从 WebM 文件提取音频',
  tool_extract_audio_from_a_webm_file_desc:
    '仅本地 WebM：在本机通过浏览器播放抓取 Opus，导出 WAV 或 MP3；单文件约 500 MiB/4 小时上限；不上传服务器。',
  tool_extract_audio_from_a_webm_file_description:
    '在浏览器里从单个本地 WebM 提取音轨（常见为 VP8/VP9 视频 + Opus 音频），再下载 WAV 或 MP3。步骤：选 WebM → 提取 → 试听 → 下载。示例：「加载样例」在支持 VP8/VP9+Opus 时生成短 WebM。本页走 MediaElement 回退路径（约 500 MiB 或 4 小时），不是 MP4/MOV 的 ISOBMFF 解复用。文件留在本机，不上传服务器。不支持 YouTube/链接。MP4/MOV/MKV 请用对应专页或「从视频文件提取音频」；多个 WebM 请用「批量从 WebM 提取音频」。',
  tool_extract_audio_from_a_webm_file_article:
    '录屏、浏览器导出常是 WebM，音轨多为 Opus。本页只接受 .webm（或 video/webm），在隐藏媒体元素中播放并抓取音频，写出 16-bit WAV 或 MP3。不做 YouTube/URL 代抓，不承诺多 GiB 级 WebM 解复用（本页 MediaElement 回退约 500 MiB/4 小时）——大 MP4/MOV 请用专页 demux 能力。',
  tool_extract_audio_from_a_webm_file_choose: '选择 WebM 文件',
  tool_extract_audio_from_a_webm_file_hint:
    '仅 .webm。单文件约 500 MiB 或 4 小时（播放抓取路径）。MP4/MOV/MKV 在本页会被拒绝，请用混容器汇总页或 MP4/MOV 专页。',
  tool_extract_audio_from_a_webm_file_convert: '提取',
  tool_extract_audio_from_a_webm_file_download: '下载',
  tool_extract_audio_from_a_webm_file_download_wav: '下载 WAV',
  tool_extract_audio_from_a_webm_file_download_mp3: '下载 MP3',
  tool_extract_audio_from_a_webm_file_sample: '加载样例',
  tool_extract_audio_from_a_webm_file_clear: '清除',
  tool_extract_audio_from_a_webm_file_advanced: '导出格式',
  tool_extract_audio_from_a_webm_file_format_label: '输出格式',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV（16-bit）',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'MP3 码率',
  tool_extract_audio_from_a_webm_file_settings_hint:
    '短片默认 WAV。较长 WebM 可能自动流式写 MP3。码率仅作用于 MP3。不支持 URL/YouTube。',
  tool_extract_audio_from_a_webm_file_progress: '提取进度',
  tool_extract_audio_from_a_webm_file_read: '读取',
  tool_extract_audio_from_a_webm_file_decode: '播放',
  tool_extract_audio_from_a_webm_file_extract: '提取',
  tool_extract_audio_from_a_webm_file_write: '写入',
  tool_extract_audio_from_a_webm_file_done: '完成。试听音频后，再下载 WAV 或 MP3。',
  tool_extract_audio_from_a_webm_file_failed: '提取失败。请换更短或浏览器能解码的 WebM。',
  tool_extract_audio_from_a_webm_file_elapsed: '已用时 {s} 秒',
  tool_extract_audio_from_a_webm_file_preview: '试听提取出的音频',
  tool_extract_audio_from_a_webm_file_result: '{seconds}s · {channels} 声道 · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_a_webm_file_sample_name: 'webm-抽音演示',
  tool_extract_audio_from_a_webm_file_empty: '请先选择 WebM 或加载样例。',
  tool_extract_audio_from_a_webm_file_empty_state:
    '尚未加载 WebM。请拖入本地 .webm，或点「加载样例」。不接受 YouTube 或非 WebM 视频。',
  tool_extract_audio_from_a_webm_file_err_file: '请只拖入一个 WebM 文件。',
  tool_extract_audio_from_a_webm_file_err_format:
    '本页仅接受 .webm（video/webm）。MP4、MOV、MKV 请用其它工具或混容器页。',
  tool_extract_audio_from_a_webm_file_err_limit:
    '该 WebM 超出播放抓取上限（约 500 MiB 或 4 小时）。请缩短或改用 MP4/MOV 大文件专页。',
  tool_extract_audio_from_a_webm_file_err_container:
    '该 WebM 过大或过长，无法在本页播放抓取路径处理（约 500 MiB/4 小时）。请缩短片段，或对大 MP4 使用「从 MP4 文件提取音频」。',
  tool_extract_audio_from_a_webm_file_err_codec:
    '浏览器无法解码此 WebM 中的 Opus/音频轨。请重封装或换文件。',
  tool_extract_audio_from_a_webm_file_err_channels: '该音轨声道布局无法处理。请优先单声道或立体声 Opus。',
  tool_extract_audio_from_a_webm_file_err_decode: '浏览器无法从此 WebM 解码音频。请换导出或更短片段。',
  tool_extract_audio_from_a_webm_file_err_encoder: '无法写出音频文件。请检查格式后重试提取。',
  tool_extract_audio_from_a_webm_file_err_sample: '当前浏览器无法生成 WebM 样例。请拖入自己的 .webm。',
  tool_extract_audio_from_a_webm_file_how_title: '如何从 WebM 文件提取音频',
  tool_extract_audio_from_a_webm_file_how_body: '拖入本地 WebM，选择 WAV 或 MP3，点击提取，试听后下载——不上传，也不接受链接。',
  tool_extract_audio_from_a_webm_file_how_item_1: '选择本地 .webm，或在支持 VP8/VP9+Opus 时点「加载样例」。',
  tool_extract_audio_from_a_webm_file_how_item_2: '在「导出格式」中选 WAV（默认）或 MP3，并按需设置 MP3 码率。',
  tool_extract_audio_from_a_webm_file_how_item_3: '点击「提取」，等待 读取 → 播放 → 提取 → 写入；长任务可点「停止」。',
  tool_extract_audio_from_a_webm_file_how_item_4: '试听后查看结果行，再点「下载 WAV」或「下载 MP3」。',
  tool_extract_audio_from_a_webm_file_why_choose_title: '为什么用本站的从 WebM 文件提取音频',
  tool_extract_audio_from_a_webm_file_why_choose_item_1: '首屏只收 WebM，对齐「webm 转 mp3」搜索，不与混容器页抢首屏。',
  tool_extract_audio_from_a_webm_file_why_choose_item_2: '诚实写明约 500 MiB/4 小时上限，超大 WebM 用 err_container 并指向 MP4/MOV demux 专页。',
  tool_extract_audio_from_a_webm_file_why_choose_item_3: '处理在浏览器标签页完成，WebM 不上传我们的服务器。',
  tool_extract_audio_from_a_webm_file_why_choose_item_4: '相关链接指向 WebM 批量、混容器 hub 与 MP4/MOV  sibling，方便选对工具。',
  tool_extract_audio_from_a_webm_file_rules_title: '仅 WebM、播放抓取路径与上限',
  tool_extract_audio_from_a_webm_file_rules_body:
    '每次处理一个本地 WebM：浏览器播放 → 抓取 Opus → 写出 WAV/MP3。不是 YouTube 转 MP3，也不是导出静音 WebM。',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    '超过约 500 MiB 或 4 小时的 WebM 会触发 err_container。多 GiB 的 MP4/MOV 解复用请用 MP4/MOV 专页（OPFS demux）。',
  tool_extract_audio_from_a_webm_file_rules_item_2: '只接受 .webm 与 video/webm；MP4/MOV/MKV 即使改扩展名也会被拒。',
  tool_extract_audio_from_a_webm_file_rules_item_3: '不接受 URL/YouTube，请先把 WebM 存到本机。',
  tool_extract_audio_from_a_webm_file_rules_item_4: '多个 WebM 请用「批量从 WebM 提取音频」；混格式文件夹请用混容器页。',
  tool_extract_audio_from_a_webm_file_example_title: '试一次真实 WebM 提取',
  tool_extract_audio_from_a_webm_file_example:
    '「加载样例」在支持时录制短 WebM 并自动提取。更可靠的是拖入你自己的录屏 WebM。',
  tool_extract_audio_from_a_webm_file_usecases_title: '适用场景',
  tool_extract_audio_from_a_webm_file_usecase_1: '只有一个录屏 WebM，需要 webm 转 MP3/WAV 做播客片段。',
  tool_extract_audio_from_a_webm_file_usecase_2: '浏览器导出的 WebM 要变音频分享，不想上传云转换。',
  tool_extract_audio_from_a_webm_file_usecase_3: '从 VP9 WebM 取出 Opus 音轨，原视频文件仍保留在磁盘。',
  tool_extract_audio_from_a_webm_file_faq_q1: '能粘贴 YouTube 链接吗？',
  tool_extract_audio_from_a_webm_file_faq_a1: '不能。只接受本地 WebM。请先下载到本机。',
  tool_extract_audio_from_a_webm_file_faq_q2: '和「webm 转 mp3 在线」一样吗？',
  tool_extract_audio_from_a_webm_file_faq_a2: '对单个本地 WebM 任务相同：抓取 Opus 并下载 MP3/WAV；本站不代抓链接。',
  tool_extract_audio_from_a_webm_file_faq_q3: '我有 .mp4/.mov，为什么被拒绝？',
  tool_extract_audio_from_a_webm_file_faq_a3: '本页仅 WebM。请用 MP4/MOV 专页或混容器提取页。',
  tool_extract_audio_from_a_webm_file_faq_q4: '能像 MP4 页那样处理 2 GiB WebM 吗？',
  tool_extract_audio_from_a_webm_file_faq_a4: '不能。WebM 本页为播放抓取（约 500 MiB/4 小时）。多 GiB demux 仅 MP4/MOV ISOBMFF 专页。',
  tool_extract_audio_from_a_webm_file_faq_q5: 'WebM 会上传服务器吗？',
  tool_extract_audio_from_a_webm_file_faq_a5: '不会。读取、播放抓取与写入都在本机浏览器完成；首次打开页面需加载本站脚本。',
  tool_extract_audio_from_a_webm_file_faq_q6: '有很多 WebM 怎么办？',
  tool_extract_audio_from_a_webm_file_faq_a6: '单文件用本页；多个 .webm 请用「批量从 WebM 提取音频」打 ZIP。',
  tool_extract_audio_from_a_webm_file_faq_q7: '提取后能在这里裁剪吗？',
  tool_extract_audio_from_a_webm_file_faq_a7: '不能。请下载后使用「裁剪音频片段并导出」。',
  tool_extract_audio_from_a_webm_file_stop: '停止',
  tool_extract_audio_from_a_webm_file_status_stopped: '已停止。本次不会保留半成品音频文件。',
  tool_extract_audio_from_a_webm_file_forced_mp3: '较长 WebM 已用流式 MP3（全量 WAV PCM 内存过高）。',
  tool_extract_audio_from_a_webm_file_err_unsupported: '当前浏览器缺少提取所需的 Web Audio 能力。',
  tool_extract_audio_from_a_webm_file_err_empty: '未能从 WebM 捕获可用音频样本。',
};
export default zh;
