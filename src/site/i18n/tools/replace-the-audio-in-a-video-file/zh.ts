import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：替换视频文件中的音轨（F7 V3）。
 * How≥4 Why≥4 Rules≥4 FAQ≥5；拒 YouTube；≠ 仅静音、≠ 仅加轨叙事；诚实说明 WebM/重编码限制。
 * description 不少于 120 个汉字。
 */
const zh: SiteLangDict = {
  tool_replace_the_audio_in_a_video_file_title: '替换视频文件中的音轨',
  tool_replace_the_audio_in_a_video_file_desc:
    '用另一条本地音频替换视频原声，再下载成片。仅本机处理——不做 YouTube 下载。',
  tool_replace_the_audio_in_a_video_file_description:
    '在浏览器里替换本地视频的音轨：丢掉原声、铺上新的配乐后下载。步骤：选择视频和新音频、替换音轨、预览、下载。示例：带旧音调的短片换成新的 WAV。使用 captureStream 与 MediaRecorder，输出多为 WebM，不是无损 remux。文件不会上传。不做 YouTube 下载。适合「替换视频音轨」「换 BGM」「改视频配乐」等本机换轨需求，也不是只静音或只给无声片加轨。',
  tool_replace_the_audio_in_a_video_file_article:
    '配乐选错或原声偏弱时，分享前往往需要整条换轨。本页可打开本地视频与本地新音频：丢弃原音轨后捕获画面，用 AudioContext 解码新配乐，再经 MediaRecorder 写出——视浏览器多为 WebM。成片时长跟视频走；音频更长会被截断，更短则画面后半段无声。不做 YouTube 或其他 URL 代抓，不是只静音不加新声，也不是单纯「给无声视频加轨」的叙事。成功取决于浏览器能否播放两份文件并支持带音频的 MediaRecorder。保留原文件；下载是新文件。全程在本机运行。',
  tool_replace_the_audio_in_a_video_file_choose_video: '选择视频文件',
  tool_replace_the_audio_in_a_video_file_hint_video:
    '拖入或选择浏览器可播放的本地 MP4、WebM、MOV 或 M4V。最多约 80 MiB、约 3 分钟。不要粘贴 YouTube 或 URL。',
  tool_replace_the_audio_in_a_video_file_choose_audio: '选择新的音频文件',
  tool_replace_the_audio_in_a_video_file_hint_audio:
    '拖入或选择浏览器可解码的本地 WAV、MP3、M4A 等。最多约 40 MiB。这将作为新音轨。',
  tool_replace_the_audio_in_a_video_file_convert: '替换音轨',
  tool_replace_the_audio_in_a_video_file_download: '下载',
  tool_replace_the_audio_in_a_video_file_sample: '加载样例',
  tool_replace_the_audio_in_a_video_file_clear: '清空',
  tool_replace_the_audio_in_a_video_file_advanced: '换轨说明',
  tool_replace_the_audio_in_a_video_file_settings_hint:
    '浏览器通常会丢弃原音轨、挂上你的新配乐，再经 MediaRecorder 重编码。输出多为 WebM，不是源 MP4 的无损 remux。本页从不下载 YouTube。',
  tool_replace_the_audio_in_a_video_file_progress: '替换音轨进度',
  tool_replace_the_audio_in_a_video_file_read: '读取',
  tool_replace_the_audio_in_a_video_file_decode: '解码',
  tool_replace_the_audio_in_a_video_file_merge: '替换',
  tool_replace_the_audio_in_a_video_file_write: '写出',
  tool_replace_the_audio_in_a_video_file_done: '完成。预览带新音轨的成片，再点击下载。',
  tool_replace_the_audio_in_a_video_file_failed: '无法替换该视频的音轨。请换更短、浏览器可播放的文件。',
  tool_replace_the_audio_in_a_video_file_elapsed: '已用时 {s} 秒',
  tool_replace_the_audio_in_a_video_file_preview: '预览已换轨视频',
  tool_replace_the_audio_in_a_video_file_result: '{seconds} 秒 · 已换音轨 · {mime} · {output} KiB',
  tool_replace_the_audio_in_a_video_file_sample_name: '换音轨样例',
  tool_replace_the_audio_in_a_video_file_empty: '请先选择本地视频和新音频，或加载样例。',
  tool_replace_the_audio_in_a_video_file_empty_state:
    '还没有文件。拖入本地视频与新配乐，或点击「加载样例」。本工具是替换音轨——不是只静音，也不下载 YouTube。',
  tool_replace_the_audio_in_a_video_file_video_label: '视频：{name}',
  tool_replace_the_audio_in_a_video_file_audio_label: '新音频：{name}',
  tool_replace_the_audio_in_a_video_file_err_file: '请各选一个受支持的本地视频和新音频文件。',
  tool_replace_the_audio_in_a_video_file_err_format:
    '不支持或无法播放的文件。请使用浏览器可解码的常见视频/音频格式。不要 YouTube URL。',
  tool_replace_the_audio_in_a_video_file_err_limit:
    '请使用不超过约 80 MiB、约 3 分钟的本地视频，以及不超过约 40 MiB 的音频。',
  tool_replace_the_audio_in_a_video_file_err_decode:
    '浏览器无法解码该视频或音频。请换容器或更短片段。',
  tool_replace_the_audio_in_a_video_file_err_encoder:
    'MediaRecorder 无法写出换轨视频。请尝试 Chrome/Edge，或更短的 WebM/MP4 加 WAV/MP3。',
  tool_replace_the_audio_in_a_video_file_how_title: '如何替换视频文件中的音轨',
  tool_replace_the_audio_in_a_video_file_how_body:
    '选择本地视频与新音频，点击替换音轨，预览结果，再下载——不上传，也不做 YouTube 下载。',
  tool_replace_the_audio_in_a_video_file_how_item_1:
    '选择本地视频和本地新音频（或加载样例）。不要粘贴 YouTube 链接。',
  tool_replace_the_audio_in_a_video_file_how_item_2:
    '点击「替换音轨」，等待读取 → 解码 → 替换 → 写出完成。',
  tool_replace_the_audio_in_a_video_file_how_item_3:
    '预览结果。应听到新配乐，而不是原来的音轨。',
  tool_replace_the_audio_in_a_video_file_how_item_4:
    '核对结果行，再点击「下载」。',
  tool_replace_the_audio_in_a_video_file_why_choose_title: '为什么选择我们的视频换音轨工具',
  tool_replace_the_audio_in_a_video_file_why_choose_item_1:
    '保存前可查看时长、MIME 类型与输出体积（KiB）。',
  tool_replace_the_audio_in_a_video_file_why_choose_item_2:
    '作业清晰：一次换轨；诚实写明 MediaRecorder 限制，不假装无损 remux。',
  tool_replace_the_audio_in_a_video_file_why_choose_item_3:
    '读取与录制都在本机完成；页面不会上传你的文件去处理。',
  tool_replace_the_audio_in_a_video_file_why_choose_item_4:
    '更换任一文件会清除旧下载，避免误存过期换轨成片。',
  tool_replace_the_audio_in_a_video_file_rules_title: '换轨规则与诚实的浏览器上限',
  tool_replace_the_audio_in_a_video_file_rules_body:
    '每次运行会丢弃原音轨、挂上你的新配乐，并用 MediaRecorder 重编码。输出多为 WebM。这不是 YouTube 下载，也不是只静音。',
  tool_replace_the_audio_in_a_video_file_rules_item_1:
    '一个本地视频最多约 80 MiB、约三分钟，外加一个本地音频最多约 40 MiB。须先能播放/解码。',
  tool_replace_the_audio_in_a_video_file_rules_item_2:
    '成片时长跟视频走。音频更长会被截断；更短则画面结束前配乐已停。',
  tool_replace_the_audio_in_a_video_file_rules_item_3:
    '不做 YouTube、播客 URL 或远程代抓。不支持粘贴链接。',
  tool_replace_the_audio_in_a_video_file_rules_item_4:
    '容器与编码可能与源文件不同。保留原件；下载是新的重编码文件。',
  tool_replace_the_audio_in_a_video_file_example_title: '试试把旧音调换成新音调',
  tool_replace_the_audio_in_a_video_file_example:
    '「加载样例」会生成一段已带旧音调的短视频与更高的新音调，并自动运行替换音轨。你应听到新配乐。不会自动播放——需要时请自行点播放。',
  tool_replace_the_audio_in_a_video_file_usecases_title: '适用场景',
  tool_replace_the_audio_in_a_video_file_usecase_1:
    '录屏时配错了 BGM，手头有更好的本地 WAV——在此换轨后下载分享。',
  tool_replace_the_audio_in_a_video_file_usecase_2:
    '想用更清晰的本地配乐替换薄弱原声，又不想安装桌面剪辑软件。',
  tool_replace_the_audio_in_a_video_file_faq_q1: '能下载 YouTube 或粘贴 URL 吗？',
  tool_replace_the_audio_in_a_video_file_faq_a1:
    '不能。只接受你本机已有的文件。没有 YouTube 下载器，也不做远程抓取。',
  tool_replace_the_audio_in_a_video_file_faq_q2: '这和从视频里去掉音轨是一回事吗？',
  tool_replace_the_audio_in_a_video_file_faq_a2:
    '不是。静音/去音轨会留下无声视频。本页是用新配乐替换原声。',
  tool_replace_the_audio_in_a_video_file_faq_q3: '和「给视频添加音轨」有何不同？',
  tool_replace_the_audio_in_a_video_file_faq_a3:
    '加轨常针对无声或弱声片段。本页的任务是明确用另一文件替换现有音轨。',
  tool_replace_the_audio_in_a_video_file_faq_q4: '输出会和源文件一样仍是 MP4 吗？',
  tool_replace_the_audio_in_a_video_file_faq_a4:
    '通常不会。浏览器一般经 MediaRecorder 重编码，多为 WebM。画质与容器都可能变化。',
  tool_replace_the_audio_in_a_video_file_faq_q5: '会把文件上传到服务器吗？',
  tool_replace_the_audio_in_a_video_file_faq_a5:
    '不会。解码与录制都在本机浏览器完成。首次打开页面需要网络；不保证可离线使用。',
  tool_replace_the_audio_in_a_video_file_faq_q6: '如果新音频比视频长怎么办？',
  tool_replace_the_audio_in_a_video_file_faq_a6:
    '换轨以视频时长为准。画面结束后多出的音频不会进入下载文件。',
};
export default zh;
