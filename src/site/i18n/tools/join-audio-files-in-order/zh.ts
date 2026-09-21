import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：按顺序拼接音频文件（F7 A2）。
 * 首尾相接成一条 WAV；≠ 叠加混音；≠ 交叉淡化；description ≥120。
 */
const zh: SiteLangDict = {
  tool_join_audio_files_in_order_title: '按顺序拼接音频文件',
  tool_join_audio_files_in_order_desc:
    '把多段本地音频按列表顺序首尾相接，导出一条 16-bit WAV。仅本机处理——不是把两轨叠在一起。',
  tool_join_audio_files_in_order_description:
    '在浏览器里把多个本地音频文件按列表顺序首尾相接，再下载一条 16-bit WAV。步骤：添加片段、按需调序、拼接、试听、下载。示例：加载两段短音样例。只做串接，不是叠加混音，也不是交叉淡化。文件不会上传。适合「合并音频」「拼接 mp3」这类按序串成一轨的需求。',
  tool_join_audio_files_in_order_article:
    '口播分条、语音备忘录和歌曲分段经常要合成一条连续音轨。本页可拖入多个本地文件、在列表里调整顺序，由浏览器逐段解码，对齐采样率与声道后按序拼接样本，写出一条 16-bit PCM WAV。它不会把人声和配乐叠在同一时间轴上，也不会做交叉淡化切歌，更不会从视频抽音——那些是别的作业。能否成功取决于浏览器能否解码每个容器。声道保持一或二。保留原文件；下载是新文件。全程在本机运行。',
  tool_join_audio_files_in_order_choose: '添加音频文件',
  tool_join_audio_files_in_order_hint:
    '拖入或选择多个 WAV、MP3、M4A、AAC 或 OGG。可继续追加。最多 20 段，每段 40 MiB，拼接后总时长不超过 20 分钟；单声道或立体声。',
  tool_join_audio_files_in_order_list_label: '拼接顺序',
  tool_join_audio_files_in_order_move_up: '上移',
  tool_join_audio_files_in_order_move_down: '下移',
  tool_join_audio_files_in_order_remove: '移除',
  tool_join_audio_files_in_order_convert: '拼接',
  tool_join_audio_files_in_order_download: '下载 WAV',
  tool_join_audio_files_in_order_sample: '加载样例',
  tool_join_audio_files_in_order_clear: '清空',
  tool_join_audio_files_in_order_advanced: '拼接说明',
  tool_join_audio_files_in_order_settings_hint:
    '片段按列表顺序首尾相接。不同采样率会对齐到第一段。只做串接——不是叠加混音，也不是交叉淡化。',
  tool_join_audio_files_in_order_progress: '拼接进度',
  tool_join_audio_files_in_order_read: '读取',
  tool_join_audio_files_in_order_decode: '解码',
  tool_join_audio_files_in_order_join: '拼接',
  tool_join_audio_files_in_order_write: '写出',
  tool_join_audio_files_in_order_done: '完成。试听拼接后的 WAV，然后下载。',
  tool_join_audio_files_in_order_failed: '拼接失败。请减少文件数量或换更短、可解码的音频。',
  tool_join_audio_files_in_order_elapsed: '已用时 {s} 秒',
  tool_join_audio_files_in_order_preview: '试听拼接后的 WAV',
  tool_join_audio_files_in_order_result:
    '{files} 个文件 · {seconds} 秒 · {channels} 声道 · {rate} Hz · WAV {output} KiB',
  tool_join_audio_files_in_order_sample_name: '拼接样例音',
  tool_join_audio_files_in_order_empty: '请先添加至少两个音频文件，或加载样例。',
  tool_join_audio_files_in_order_empty_state:
    '还没有片段。拖入多个本地音频，或点击「加载样例」放入两段短音。本工具按列表顺序串接——不会把音轨叠在一起。',
  tool_join_audio_files_in_order_queue_count: '队列中有 {n} 个文件',
  tool_join_audio_files_in_order_err_file: '请至少添加两个受支持的音频文件。',
  tool_join_audio_files_in_order_err_format:
    '不支持或已损坏的音频。请使用浏览器可解码的 WAV、MP3、M4A、AAC 或 OGG。',
  tool_join_audio_files_in_order_err_limit:
    '最多 20 个文件，每个不超过 40 MiB，单声道或立体声，拼接后总时长不超过 20 分钟。',
  tool_join_audio_files_in_order_err_decode: '浏览器无法解码其中某个文件。请移除或换另一种编码。',
  tool_join_audio_files_in_order_err_encoder: '无法写出拼接后的 WAV。请再点一次「拼接」。',
  tool_join_audio_files_in_order_how_title: '如何按顺序拼接音频文件',
  tool_join_audio_files_in_order_how_body:
    '添加多段本地音频、排好顺序、点击拼接、试听，再下载一条 16-bit WAV——文件不会上传。',
  tool_join_audio_files_in_order_how_item_1: '添加至少两个音频文件（或加载样例得到两段短音）。再次拖入可继续追加。',
  tool_join_audio_files_in_order_how_item_2: '用上移 / 下移 / 移除调整列表，使顺序与你想听到的一致。',
  tool_join_audio_files_in_order_how_item_3: '点击「拼接」，等待读取 → 解码 → 拼接 → 写出完成。',
  tool_join_audio_files_in_order_how_item_4: '试听连续音轨，核对结果行，再点击「下载 WAV」。',
  tool_join_audio_files_in_order_why_choose_title: '为什么选择我们的按顺序拼接音频工具',
  tool_join_audio_files_in_order_why_choose_item_1: '保存前可查看文件数、时长、声道、采样率与输出体积。',
  tool_join_audio_files_in_order_why_choose_item_2: '作业清晰：按列表顺序首尾相接；某段无法解码时会给出明确失败信息。',
  tool_join_audio_files_in_order_why_choose_item_3: '读取、解码与写出都在本机完成；页面不会上传你的片段去处理。',
  tool_join_audio_files_in_order_why_choose_item_4: '改动队列会清除旧下载，避免误存过期 WAV。',
  tool_join_audio_files_in_order_rules_title: '串接规则与诚实的浏览器上限',
  tool_join_audio_files_in_order_rules_body:
    '每次按列表顺序把片段首尾相接。采样率对齐到第一段。导出为 16-bit WAV。这不是叠加混音，不是交叉淡化，也不是从视频抽音。',
  tool_join_audio_files_in_order_rules_item_1:
    '2–20 个本地音频，每个最多 40 MiB。拼接后总时长不超过 20 分钟。声道保持一或二。',
  tool_join_audio_files_in_order_rules_item_2:
    '本页只做串接。不会把人声与配乐叠在同一时间，也不会做交叉淡化切歌。',
  tool_join_audio_files_in_order_rules_item_3:
    '不复制标签。不覆盖原文件。能否成功取决于浏览器对每个文件的解码支持。',
  tool_join_audio_files_in_order_rules_item_4:
    '拼接后若要裁剪起止，请用「裁剪音频片段并导出」。视频源请先抽音再来拼接。',
  tool_join_audio_files_in_order_example_title: '试用两段短音',
  tool_join_audio_files_in_order_example:
    '「加载样例」会把两段不同音高的短 WAV 放入队列并自动拼接。你应先听到音 A 再听到音 B，没有重叠。预览不会自动播放——需要时再按播放。',
  tool_join_audio_files_in_order_usecases_title: '适用场景',
  tool_join_audio_files_in_order_usecase_1: '多条语音备忘录要合成一条连续口播——按序添加、拼接、下载 WAV。',
  tool_join_audio_files_in_order_usecase_2: '歌曲分段或播客章节是多个文件，需要一次导出且不想上传到在线拼接站。',
  tool_join_audio_files_in_order_faq_q1: '这和把两轨叠在一起混音一样吗？',
  tool_join_audio_files_in_order_faq_a1:
    '不一样。叠加混音是同一时间同时出声（例如口播配乐）。本页只按列表顺序一段接一段。',
  tool_join_audio_files_in_order_faq_q2: '会做歌曲之间的交叉淡化吗？',
  tool_join_audio_files_in_order_faq_a2: '不会。没有交叉淡化或 DJ 过渡。片段是首尾相接。交叉淡化是另一项作业。',
  tool_join_audio_files_in_order_faq_q3: '可以改拼接顺序吗？',
  tool_join_audio_files_in_order_faq_a3: '可以。用每行的上移、下移，或移除后重新添加。拼接始终从上到下跟随列表。',
  tool_join_audio_files_in_order_faq_q4: '文件采样率不同怎么办？',
  tool_join_audio_files_in_order_faq_a4: '后续片段会先对齐到第一段的采样率再拼接。声道保持单声道或立体声。',
  tool_join_audio_files_in_order_faq_q5: '音频会上传到服务器吗？',
  tool_join_audio_files_in_order_faq_a5:
    '不会。读取、解码与写出都在你的浏览器本机完成。首次打开页面需要网络；不保证可离线使用。',
  tool_join_audio_files_in_order_faq_q6: '可以从视频里抽出来的音再拼接吗？',
  tool_join_audio_files_in_order_faq_a6:
    '请先用「从视频文件提取音频」得到音轨，再把导出的音频加到本页。本页不接受视频容器作为拼接输入。',
};
export default zh;
