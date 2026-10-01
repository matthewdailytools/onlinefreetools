import type { SiteLangDict } from '../../../types';

/**
 * 中文：把 MKV 转成 MP4（AAC 立体声）。
 * D2：本机浏览器 Conversion；非纯 remux；非 YouTube；有 OPFS 时约 5 GiB（流式写出），无 OPFS 约 1 GiB。
 */
const zh: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: '把 MKV 文件转换成 MP4 文件',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    '在浏览器里把单个本地 MKV 转成 MP4，音轨为 AAC 立体声；视频可尽量 copy。有 OPFS 时约 5 GiB（流式写出），无 OPFS 约 1 GiB。不上传。',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    '在本机把单个本地 MKV 转成 MP4，音轨写成 AAC 立体声，方便播放器和后续抽音。步骤：选 MKV → 转换 → 下载。示例：「加载样例」会转换站内短 Matroska。视频在浏览器允许时尽量 copy；音轨始终重编码为 AAC（E-AC-3/DDP 可借助页内 WASM 解码）。首发上限有 OPFS 时约 5 GiB（流式写出），无 OPFS 约 1 GiB——更大片源仍建议本机 ffmpeg。仅本地，不是 YouTube 链接下载，不上传。转完只要声音？请用「从 MP4 文件提取音频」。',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    '剪辑软件和手机常要 MP4，而录屏常是 MKV。本页在能安全时保留视频编码，并始终写出 AAC 立体声，避免只 remux 留下浏览器难播的 E-AC-3。大文件走私有 OPFS 流式写出（约 5 GiB）。不代抓远程链接，也不替代抽音落地页——有了 AAC MP4 后可走相关抽音工具。多个文件请用批量页。',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: '选择 MKV 文件',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    '拖入本地 .mkv（有 OPFS 约 5 GiB 流式写出，无 OPFS 约 1 GiB）。音轨会变成 AAC 立体声。不是 YouTube。',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: '转换',
  tool_convert_an_mkv_file_to_an_mp4_file_download: '下载',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: '加载样例',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: '清除',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: '停止',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: '音频设置（可选）',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: '声道',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: '立体声（默认）',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: '单声道',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'AAC 质量',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: '更小体积',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: '均衡',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: '更高质量（默认）',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    '默认即可：立体声 AAC、较高质量。改设置会清空已完成的下载。',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: '转换进度',
  tool_convert_an_mkv_file_to_an_mp4_file_load: '加载引擎',
  tool_convert_an_mkv_file_to_an_mp4_file_read: '读取',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: '解码',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: '编码',
  tool_convert_an_mkv_file_to_an_mp4_file_write: '写入',
  tool_convert_an_mkv_file_to_an_mp4_file_done: '完成。请下载 MP4，或打开 MP4 抽音工具只要音轨。',
  tool_convert_an_mkv_file_to_an_mp4_file_failed: '转换失败。请换更小的 MKV 或其它音轨。',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: '已用时 {s} 秒',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: '转换后的 MP4 预览',
  tool_convert_an_mkv_file_to_an_mp4_file_result: '输入 {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: '短mkv转mp4演示',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: '请先选择 MKV 或加载样例。',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    '尚未加载文件。拖入约 5 GiB（OPFS）以内的本地 .mkv，或点「加载样例」。不是 YouTube。',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: '已停止。不保留半成品 MP4。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: '请恰好放入一个 MKV 文件。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: '不支持的文件。本页仅接受 .mkv。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    '该 MKV 超出浏览器转换上限（有 OPFS 约 5 GiB 流式写出，无 OPFS 约 1 GiB）。更大文件请用本机 ffmpeg。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    '无法按 Matroska 打开，或没有可用的视频/音频轨。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    '某处音视频编码无法在此解码或编码。请换音轨，或在电脑上用 ffmpeg 转换。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: '无法写出 MP4。请重试转换。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: '无法加载样例 MKV。请改用你自己的文件。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: '当前浏览器无法加载转换引擎。',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: '转换已停止。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: '如何把 MKV 文件转换成 MP4 文件',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    '拖入本地 MKV，点「转换」，再「下载」MP4——音轨会变成 AAC 立体声，方便后续抽音。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1: '选择约 5 GiB（OPFS）以内的本地 .mkv，或点「加载样例」。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2: '可选：打开「音频设置」改单声道或更小 AAC 质量。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3: '点击「转换」，等待 加载引擎 → 读取 → 解码 → 编码 → 写入（或点「停止」）。大文件会流式写入私有 OPFS。',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4: '可预览后点「下载」。只要声音请再用「从 MP4 文件提取音频」。',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title: '为什么用我们的「把 MKV 文件转换成 MP4 文件」',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1: '故意写出 AAC 立体声——不是保留 E-AC-3 的纯 remux。',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2: '数 GiB 的 MKV 走私有 OPFS 流式写出，不必把整段 MP4 留在内存。',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3: '全程在本机；引擎脚本只从本站加载一次。',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4: '下载后可直接去相关 MP4 抽音页只要音轨。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV 转 MP4 与 AAC 诚实边界',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    '每次一个本地 MKV。音轨重编码为 AAC。上限与编解码如实写——多 GiB 片源仍可能需本机 ffmpeg。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    '有 OPFS 时约 5 GiB 流式写出；无 OPFS 约 1 GiB。超限 → err_limit。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: '不支持 URL 或 YouTube 下载。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3/DDP 可经捆绑的 AC-3 助手解码，再编 AAC 立体声。冷门视频编码仍可能 err_codec。',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    '原 MKV 不会被覆盖。多个文件请用「批量把 MKV 文件转换成 MP4 文件」（ZIP）。',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: '试一次真实转换',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    '「加载样例」拉取站内短 MKV 并自动转换。正式验收请用你自己约上限内的 .mkv。',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: '适用场景',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1: '录屏得到的 MKV 要交给只认 MP4 的剪辑软件。',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2: '带 DDP/Atmos 的 MKV 要先转 AAC，再「从 MP4 文件提取音频」。',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3: '想分享 MP4，又不想把 Matroska 上传到云转换站。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: '能粘贴 YouTube 链接吗？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: '不能。仅本地 .mkv。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: '这是只 remux、不改音轨编码吗？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    '不是。音轨始终重编码为 AAC，方便浏览器 demux 与多数播放器。视频在可能时仍可 copy、不重编码。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'MKV 带杜比全景声 / DDP / E-AC-3，能转吗？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    '体积在上限内时多数可以：页面加载 AC-3/E-AC-3 解码，降混立体声 AAC，再写出 MP4。多 GiB 大片可能失败或极慢——那时请用本机 ffmpeg。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: '文件会上传吗？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4: '不会。转换在浏览器本机完成。引擎脚本只从本站加载一次。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: '我只要音轨，还用这一页吗？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    '若 MKV 已适合抽音回退且编码友好，请用「从 MKV 文件提取音频」。若是 DDP 或对抽音过大，先在本页转换，再用「从 MP4 文件提取音频」。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: '是 WebM 或 MOV 而不是 MKV？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6: '本页仅接受 .mkv。其它容器以后另有转换页。',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: '能一次转很多个 MKV 吗？',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7: '本页暂无 ZIP 批量。请先逐个转换。',
};
export default zh;
