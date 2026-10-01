import type { SiteLangDict } from '../../../types';

/**
 * 中文（D3 批量）：多个本地 MKV → MP4（AAC 立体声），打包 ZIP。
 * 检索向：批量 mkv 转 mp4、多个 mkv 转 mp4、不上传；行失败跳过、部分 ZIP。
 */
const zh: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: '批量把 MKV 文件转换成 MP4 文件',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    '在浏览器里一次处理多个本地 MKV，输出 AAC 立体声的 MP4，并打包成一个 ZIP 下载。约 20 个；单文件有 OPFS 约 5 GiB（无 OPFS 约 1 GiB）。不上传服务器。',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    '在本机浏览器批量把多个 MKV 转成带 AAC 立体声的 MP4，最后下载一个 ZIP。步骤：添加 MKV → 全部转换 → 下载 ZIP。示例：「加载样例」会排队两段短 Matroska 并打包成 ZIP。单文件有 OPFS 约 5 GiB（无 OPFS 约 1 GiB），队列约 20 个；某行失败会跳过，成功的仍会打进部分 ZIP。仅本地文件，不能粘贴 YouTube 链接，文件不出本机、不上传服务器。只转一个？请用「把 MKV 文件转换成 MP4 文件」。',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    '录屏、采集常是一文件夹 MKV，而剪辑软件更认 MP4。本页沿用单文件页的 AAC 优先策略，但支持多文件排队、逐行状态，并把成功的 MP4 打进 ZIP。不单独批量抽音轨，不代下链接，也不替代单文件页——只有一个片段时请走单文件转换。',
  tool_batch_convert_mkv_files_to_mp4_files_choose: '选择 MKV 文件',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    '拖入多个本地 .mkv（每个有 OPFS 约 5 GiB（无 OPFS 约 1 GiB），队列约 20 个）。音轨会写成 AAC 立体声。不是 YouTube。',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: '队列',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '队列中 {n} 个文件',
  tool_batch_convert_mkv_files_to_mp4_files_convert: '全部转换',
  tool_batch_convert_mkv_files_to_mp4_files_download: '下载 ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_sample: '加载样例',
  tool_batch_convert_mkv_files_to_mp4_files_clear: '清除',
  tool_batch_convert_mkv_files_to_mp4_files_stop: '停止',
  tool_batch_convert_mkv_files_to_mp4_files_remove: '移除',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: '音频设置（可选）',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: '声道',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: '立体声（默认）',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: '单声道',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'AAC 质量',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: '更小体积',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: '均衡',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: '更高质量（默认）',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    '默认会应用到队列里每一个文件。改设置会清空已生成的 ZIP。',
  tool_batch_convert_mkv_files_to_mp4_files_progress: '批量转换进度',
  tool_batch_convert_mkv_files_to_mp4_files_load: '加载引擎',
  tool_batch_convert_mkv_files_to_mp4_files_read: '读取',
  tool_batch_convert_mkv_files_to_mp4_files_decode: '解码',
  tool_batch_convert_mkv_files_to_mp4_files_encode: '编码',
  tool_batch_convert_mkv_files_to_mp4_files_pack: '打包 ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_done: '完成。请下载 ZIP；若只有一个文件，可改用单文件 MKV 转 MP4 页。',
  tool_batch_convert_mkv_files_to_mp4_files_failed: '批量转换失败。查看各行错误，或换更小/更少的 MKV 再试。',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: '已用 {s} 秒',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'ZIP 结果',
  tool_batch_convert_mkv_files_to_mp4_files_result: '已打包 {n} 个 MP4 · ZIP {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '成功 {ok} 个，失败 {fail} 个 · ZIP {output} KiB（部分结果）。仍可下载成功的 MP4。',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: '请先添加 MKV 或加载样例。',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    '还没有文件。拖入有 OPFS 约 5 GiB 以内的本地 .mkv，或点「加载样例」。不是 YouTube。',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: '排队中',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: '转换中…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 就绪',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: '失败',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: '已停止',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: '请拖入一个或多个 MKV 文件。',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: '不支持的文件。本页仅接受 .mkv。',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    '某文件超过约 5 GiB（OPFS；无 OPFS 约 1 GiB），或队列总量超出当前浏览器路径的上限。',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: '文件过多。每批请控制在约 20 个 MKV 以内。',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    '无法按 Matroska 打开某文件，或没有可用的视频/音频轨。',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    '某编解码器无法在本页解码或编码。该行失败，其它行仍可能打包。',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: '某行无法写出 MP4。请重试或移除该文件。',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: '无法生成 ZIP。请再点一次「全部转换」。',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: '无法加载样例 MKV。请改用你自己的文件。',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: '当前浏览器无法加载转换引擎。',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: '转换已停止。',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: '如何批量把 MKV 转成 MP4',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    '把本地 MKV 排进队列，点「全部转换」，再「下载 ZIP」——每个成功的文件都是 AAC 立体声 MP4。',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    '选择多个本地 .mkv（每个有 OPFS 约 5 GiB 以内），或点「加载样例」。',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    '需要时可展开「音频设置」，改单声道或更小的 AAC 质量（作用于整批）。',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    '点「全部转换」，看每行状态（可随时「停止」）。失败行会跳过，成功的继续。',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    '进度结束后点「下载 ZIP」。只有一个片段时请用「把 MKV 文件转换成 MP4 文件」。',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: '为什么用本站的批量 MKV 转 MP4',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    '整文件夹 Matroska 不用上传到云端，一次得到一个 AAC MP4 的 ZIP。',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    '逐行显示状态，坏轨跳过，不会拖死整批任务。',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    '与单文件页同一套 AAC 优先引擎，上限写清楚，不是悄悄 remux。',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    '和单文件转换、批量抽音相关页分工明确，转完 MP4 再抽音也有入口。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: '批量转换说明与边界',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    '仅本地 .mkv。音轨会重编码为 AAC。上限与行失败 upfront 说明——超大片源仍建议本机 ffmpeg。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    '单文件有 OPFS 约 5 GiB（无 OPFS 约 1 GiB），每批约 20 个。超限或队列过大时页面会给出明确提示。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: '不支持 URL 或 YouTube 下载。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    '刻意写出 AAC 立体声（或单声道）。E-AC-3 可借助页内解码；个别 exotic 视频仍可能整行失败。',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    '不会覆盖原 MKV。这不是批量只抽音轨——只要声音请用批量 MKV 抽音相关页。',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: '试一批真实文件',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    '「加载样例」会排队两段站内短 MKV，「全部转换」后打进 ZIP。自测请用上限内的自有文件。',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: '适合这些情况',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    '文件夹里一堆录屏 MKV，剪辑软件不认 Matroska，需要一批 MP4。',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    '多个带 DDP/Atmos 的 MKV 要先变成 AAC MP4，再从 MP4 里抽音。',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    '想一次下完 ZIP，又不想把整批文件上传到在线转换站。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: '能粘贴 YouTube 链接吗？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: '不能。只接受本地 .mkv 文件。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: '和「把 MKV 文件转换成 MP4 文件」有什么区别？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    '单文件页是一个 MKV、直接下 MP4。本页排队多个文件，最后下载 ZIP。转换引擎相同（AAC）。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: '某一个 MKV 失败了怎么办？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    '该行显示「失败」并跳过。成功的 MP4 仍会打进部分 ZIP，可以照常「下载 ZIP」。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: '只是 remux（音轨不变）吗？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    '不是。音轨始终重编码为 AAC；视频在浏览器允许时尽量 copy。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: '我只要很多 MKV 的 WAV/MP3，来错页了吗？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    '只要音轨：请用批量从 MKV 提取音频相关页。本页输出的是带画面的 MP4 ZIP。',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: '文件夹会上传到服务器吗？',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    '不会。转换在浏览器标签页完成，文件留在本机；引擎脚本从本站加载一次。',
};

export default zh;
