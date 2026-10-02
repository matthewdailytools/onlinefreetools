import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：批量从 MOV 文件提取音频。
 * 仅 .mov / video/quicktime；串行 demux + ZIP；邻页：单文件 MOV、混合格式批量。
 */
const zh: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: '批量从 MOV 文件提取音频',
	tool_batch_extract_audio_from_mov_files_desc:
		'仅本地 MOV：逐个抽音，失败跳过，打包 ZIP；不上传服务器。',
	tool_batch_extract_audio_from_mov_files_description:
		'在浏览器中批量从本地 MOV 提取音轨（一次处理一个），再下载 WAV 或 MP3 的 ZIP。步骤：添加 .mov → 提取 → 下载 ZIP。示例：「加载样例」会生成两段短合成 MOV 并打包音轨。每个文件遵循与单文件 MOV 工具相同的 demux+OPFS 上限（有 OPFS 约 5 GiB / 6 小时，否则约 1 GiB）。失败行跳过并提示；成功项仍打包。仅本地、不上传，不是 YouTube。单个 MOV？请用「从 MOV 文件提取音频」。混合 MP4/WebM/MKV？请用「批量从视频文件提取音频」。',
	tool_batch_extract_audio_from_mov_files_article:
		'手机导出的 MOV 文件夹往往只要 AAC 口播轨。本页只接受 .mov，排队后逐个抽音以稳住内存，失败跳过，成功项打进 ZIP。不做 YouTube 播放列表，也不是混合格式批量枢纽。',
	tool_batch_extract_audio_from_mov_files_choose: '选择 MOV 文件',
	tool_batch_extract_audio_from_mov_files_hint:
		'最多 30 个本地 .mov。非 MOV 会被拒绝——请用混合格式批量页。单文件上限与单文件 MOV 工具一致。',
	tool_batch_extract_audio_from_mov_files_list_label: 'MOV 队列',
	tool_batch_extract_audio_from_mov_files_convert: '提取',
	tool_batch_extract_audio_from_mov_files_stop: '停止',
	tool_batch_extract_audio_from_mov_files_download: '下载 ZIP',
	tool_batch_extract_audio_from_mov_files_sample: '加载样例',
	tool_batch_extract_audio_from_mov_files_clear: '清除',
	tool_batch_extract_audio_from_mov_files_advanced: '导出格式（可选）',
	tool_batch_extract_audio_from_mov_files_format_label: '输出格式',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV（16 位）',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'MP3 码率',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'短 MOV 默认 WAV。大文件可能按行流式写成 MP3。不支持 URL 或 YouTube。',
	tool_batch_extract_audio_from_mov_files_progress: '批量提取进度',
	tool_batch_extract_audio_from_mov_files_read: '读取',
	tool_batch_extract_audio_from_mov_files_decode: '解复用',
	tool_batch_extract_audio_from_mov_files_extract: '提取',
	tool_batch_extract_audio_from_mov_files_write: '写入',
	tool_batch_extract_audio_from_mov_files_pack: '打包 ZIP',
	tool_batch_extract_audio_from_mov_files_done: '完成。请下载提取音频的 ZIP。',
	tool_batch_extract_audio_from_mov_files_failed: '批量提取失败。请移除损坏的 MOV 或减少文件数。',
	tool_batch_extract_audio_from_mov_files_elapsed: '已用时 {s} 秒',
	tool_batch_extract_audio_from_mov_files_preview: '批量结果',
	tool_batch_extract_audio_from_mov_files_result: '已打包 {n} 个音频 · ZIP {output} KiB',
	tool_batch_extract_audio_from_mov_files_partial: '成功 {ok}，失败 {fail} · ZIP 仍含成功项（{output} KiB）',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: '请先添加至少一个 MOV，或加载样例。',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'还没有 MOV。请拖入本地 .mov，或加载样例。不接受 YouTube 链接与非 MOV 视频。',
	tool_batch_extract_audio_from_mov_files_remove: '移除',
	tool_batch_extract_audio_from_mov_files_queue_count: '队列中有 {n} 个 MOV',
	tool_batch_extract_audio_from_mov_files_status_pending: '等待中',
	tool_batch_extract_audio_from_mov_files_status_running: '提取中…',
	tool_batch_extract_audio_from_mov_files_status_ok: '完成',
	tool_batch_extract_audio_from_mov_files_status_fail: '失败',
	tool_batch_extract_audio_from_mov_files_status_stopped: '已停止',
	tool_batch_extract_audio_from_mov_files_err_file: '只能添加 .mov 文件。',
	tool_batch_extract_audio_from_mov_files_err_format:
		'只接受 .mov。MP4、WebM 或 MKV 请用「批量从视频文件提取音频」。',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'某个 MOV 超过 demux 上限（有 OPFS 约 5 GiB / 6 小时，否则约 1 GiB）。该行已跳过。',
	tool_batch_extract_audio_from_mov_files_err_container:
		'某个文件不是可用的 ISOBMFF MOV，无法 demux。该行已跳过。',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'某个 MOV 的音频编码无法走 demux 路径。该行已跳过。',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'某个 MOV 的声道布局无法处理。该行已跳过。',
	tool_batch_extract_audio_from_mov_files_err_decode: '浏览器无法从该 MOV 解码音频。该行已跳过。',
	tool_batch_extract_audio_from_mov_files_err_encoder: '无法写出音频。请检查格式后重试提取。',
	tool_batch_extract_audio_from_mov_files_err_zip: '无法生成 ZIP。请减少 MOV 数量后重试。',
	tool_batch_extract_audio_from_mov_files_err_too_many: '队列上限为 30 个 MOV。',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'当前浏览器无法生成样例 MOV。请改为拖入自己的本地 .mov。',
	tool_batch_extract_audio_from_mov_files_err_unsupported: '当前浏览器缺少提取所需的 Web Audio。',
	tool_batch_extract_audio_from_mov_files_err_empty: '队列中没有可用的音频采样。',
	tool_batch_extract_audio_from_mov_files_forced_mp3: '某个较长/较大的 MOV 该行改用流式 MP3。',
	tool_batch_extract_audio_from_mov_files_how_title: '如何批量从 MOV 提取音频',
	tool_batch_extract_audio_from_mov_files_how_body:
		'排队本地 MOV，逐个提取音轨，再下载 ZIP——不上传、不粘贴 URL。',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'选择多个本地 .mov，或点「加载样例」生成两段短合成 MOV。',
	tool_batch_extract_audio_from_mov_files_how_item_2: '需要 MP3 时打开「导出格式」，并按需设置码率。',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'点「提取」，按文件观察 读取 → 解复用 → 提取 → 写入；可用「停止」取消剩余任务。',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'HUD 完成后点「下载 ZIP」。失败行跳过；至少成功一个时仍会打包成功项。',
	tool_batch_extract_audio_from_mov_files_why_choose_title: '为什么用本站「批量从 MOV 提取音频」',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'只接受 MOV，避免把 MP4、WebM、MKV 混进「批量 mov 转 mp3」队列。',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'串行提取可在每个手机导出动辄数 GiB（ISOBMFF 内 AAC）时稳住内存。',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'每行状态显示等待、提取中、完成或失败——单个坏 MOV 不会毁掉整个 ZIP。',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'「停止」可中断批次；在真正生成归档前「下载 ZIP」保持禁用。',
	tool_batch_extract_audio_from_mov_files_rules_title: 'MOV 队列、串行提取与 ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'每个 MOV 先分类、单独提取，再写入 ZIP。部分成功仍保留成功项。不是 YouTube 转 MP3，也不是导出静音视频。',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'最多 30 个 .mov；每个遵循 demux 上限（有 OPFS 约 5 GiB / 6 小时）。',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'非 MOV 入队即报错——混合容器请用混合格式批量枢纽（MP4/WebM/MKV）。',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'一行失败只跳过该行；只要有成功项就会继续打包。',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'全程在本机浏览器完成，不上传服务器。',
	tool_batch_extract_audio_from_mov_files_example_title: '试一次真实 MOV 批量',
	tool_batch_extract_audio_from_mov_files_example:
		'「加载样例」会生成两段带纯音的短 MOV（需 MediaRecorder 支持 H.264+AAC），运行提取，并把两个音频打进 ZIP。',
	tool_batch_extract_audio_from_mov_files_usecases_title: '适用场景',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'拍了一文件夹手机 MOV，想在本地打成「类 mp4 转 mp3」音频 ZIP，不上云。',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'一周录屏 MOV 要变成可分享的音频文件——不是从 YouTube 下载。',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'批量抽出相机 MOV 里的 AAC 轨，同时保留原片不动。',
	tool_batch_extract_audio_from_mov_files_faq_q1: '可以粘贴 YouTube 链接或播放列表吗？',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'不可以。只能拖入或选择本地 .mov。请先把视频存到本机。',
	tool_batch_extract_audio_from_mov_files_faq_q2: '我只有一个 MOV——该用本页吗？',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'单个文件请用「从 MOV 文件提取音频」。本批量页用于多个 MOV 并下载 ZIP。',
	tool_batch_extract_audio_from_mov_files_faq_q3: '文件夹里既有 .mov 又有 .mp4 怎么办？',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'本页只接受 .mov。混合容器请打开「批量从视频文件提取音频」。',
	tool_batch_extract_audio_from_mov_files_faq_q4: '这算网上的「批量 mov 转 mp3」吗？',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'目标类似，但只处理本地 MOV：demux AAC，在本机打成 MP3 或 WAV 的 ZIP——不抓 URL。',
	tool_batch_extract_audio_from_mov_files_faq_q5: '为什么一次只处理一个 MOV？',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'同时解码所有 MOV 会冲高内存。串行提取时 ZIP 里只保留当前文件的音频数据。',
	tool_batch_extract_audio_from_mov_files_faq_q6: '视频会上传到服务器吗？',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'不会。读取、demux 与 ZIP 打包都在你设备上的浏览器里完成。',
};
export default zh;
