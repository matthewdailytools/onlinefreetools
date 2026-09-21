import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：给视频添加一条音轨（F7 V2）。
 * How≥4 Why≥4 Rules≥4 FAQ≥5；拒 YouTube；≠ 仅静音、≠ 仅抽音；诚实说明 WebM/重编码限制。
 * description 不少于 120 个汉字。
 */
const zh: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: '给视频添加一条音轨',
  tool_add_an_audio_track_to_a_video_desc:
    '把本地配乐合并到本地视频画面上，再下载成片。仅本机处理——不做 YouTube 下载。',
  tool_add_an_audio_track_to_a_video_description:
    '在浏览器里给本地视频添加一条音轨：把画面与所选配乐合并后下载。步骤：选择视频和音频、添加音轨、预览、下载。示例：无声短片配一段 WAV 底乐。使用 captureStream 与 MediaRecorder，输出多为 WebM，不是无损 remux。文件不会上传。不做 YouTube 下载。适合「视频加背景音乐」「给视频配音轨」「无声视频加 BGM」等本机合并需求；也不是只静音成片，更不是单独抽音另存。',
  tool_add_an_audio_track_to_a_video_article:
    '无声或原声偏弱的短片，分享前往往需要另配一条音轨。本页可打开本地视频与本地音频：丢弃原音轨后捕获画面，用 AudioContext 解码配乐，再经 MediaRecorder 合并写出——视浏览器多为 WebM。成片时长跟视频走；音频更长会被截断，更短则画面后半段无声。不做 YouTube 或其他 URL 代抓，不是只静音不加新声，也不是把音轨抽成独立音频。成功取决于浏览器能否播放两份文件并支持带音频的 MediaRecorder。保留原文件；下载是新文件。全程在本机运行。',
  tool_add_an_audio_track_to_a_video_choose_video: '选择视频文件',
  tool_add_an_audio_track_to_a_video_hint_video:
    '拖入或选择浏览器可播放的本地 MP4、WebM、MOV 或 M4V。最多约 80 MiB、约 3 分钟。不要粘贴 YouTube 或 URL。',
  tool_add_an_audio_track_to_a_video_choose_audio: '选择音频文件',
  tool_add_an_audio_track_to_a_video_hint_audio:
    '拖入或选择浏览器可解码的本地 WAV、MP3、M4A 等。最多约 40 MiB。',
  tool_add_an_audio_track_to_a_video_convert: '添加音轨',
  tool_add_an_audio_track_to_a_video_download: '下载',
  tool_add_an_audio_track_to_a_video_sample: '加载样例',
  tool_add_an_audio_track_to_a_video_clear: '清空',
  tool_add_an_audio_track_to_a_video_advanced: '合并说明',
  tool_add_an_audio_track_to_a_video_settings_hint:
    '浏览器通常会丢弃原音轨、挂上你的配乐，再经 MediaRecorder 重编码。输出多为 WebM，不是源 MP4 的无损 remux。本页从不下载 YouTube。',
  tool_add_an_audio_track_to_a_video_progress: '添加音轨进度',
  tool_add_an_audio_track_to_a_video_read: '读取',
  tool_add_an_audio_track_to_a_video_decode: '解码',
  tool_add_an_audio_track_to_a_video_merge: '合并',
  tool_add_an_audio_track_to_a_video_write: '写出',
  tool_add_an_audio_track_to_a_video_done: '完成。预览合并成片，再点击下载。',
  tool_add_an_audio_track_to_a_video_failed: '无法把音频合并到该视频。请换更短、浏览器可播放的文件。',
  tool_add_an_audio_track_to_a_video_elapsed: '已用时 {s} 秒',
  tool_add_an_audio_track_to_a_video_preview: '预览合并视频',
  tool_add_an_audio_track_to_a_video_result: '{seconds} 秒 · 已加音轨 · {mime} · {output} KiB',
  tool_add_an_audio_track_to_a_video_sample_name: '加音轨样例',
  tool_add_an_audio_track_to_a_video_empty: '请先选择本地视频和音频，或加载样例。',
  tool_add_an_audio_track_to_a_video_empty_state:
    '还没有文件。拖入本地视频与配乐，或点击「加载样例」。本工具是把音轨合到画面上——不是只静音、不是只抽音，也不下载 YouTube。',
  tool_add_an_audio_track_to_a_video_video_label: '视频：{name}',
  tool_add_an_audio_track_to_a_video_audio_label: '音频：{name}',
  tool_add_an_audio_track_to_a_video_err_file: '请各选一个受支持的本地视频和音频文件。',
  tool_add_an_audio_track_to_a_video_err_format:
    '不支持或无法播放的文件。请使用浏览器可解码的常见视频/音频格式。不要 YouTube URL。',
  tool_add_an_audio_track_to_a_video_err_limit:
    '请使用不超过约 80 MiB、约 3 分钟的本地视频，以及不超过约 40 MiB 的音频。',
  tool_add_an_audio_track_to_a_video_err_decode:
    '浏览器无法解码该视频或音频。请换容器或更短片段。',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'MediaRecorder 无法写出合并视频。请尝试 Chrome/Edge，或更短的 WebM/MP4 加 WAV/MP3。',
  tool_add_an_audio_track_to_a_video_how_title: '如何给视频添加一条音轨',
  tool_add_an_audio_track_to_a_video_how_body:
    '选择本地视频与音频，点击添加音轨，预览合并结果，再下载——不上传，也不做 YouTube 下载。',
  tool_add_an_audio_track_to_a_video_how_item_1:
    '选择本地视频和本地音频（或加载样例）。不要粘贴 YouTube 链接。',
  tool_add_an_audio_track_to_a_video_how_item_2:
    '点击「添加音轨」，等待读取 → 解码 → 合并 → 写出完成。',
  tool_add_an_audio_track_to_a_video_how_item_3:
    '预览结果。画面应带上新的配乐。',
  tool_add_an_audio_track_to_a_video_how_item_4:
    '核对结果行，再点击「下载」。',
  tool_add_an_audio_track_to_a_video_why_choose_title: '为什么选择我们的视频加音轨工具',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    '保存前可查看时长、MIME 类型与输出体积（KiB）。',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    '作业清晰：一次合并；诚实写明 MediaRecorder 限制，不假装无损 remux。',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    '读取与录制都在本机完成；页面不会上传你的文件去处理。',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    '更换任一文件会清除旧下载，避免误存过期合并成片。',
  tool_add_an_audio_track_to_a_video_rules_title: '合并规则与诚实的浏览器上限',
  tool_add_an_audio_track_to_a_video_rules_body:
    '每次运行会丢弃原音轨、挂上你的配乐，并用 MediaRecorder 重编码。输出多为 WebM。这不是 YouTube 下载，不是只静音，也不是抽音。',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    '一个本地视频最多约 80 MiB、约三分钟，外加一个本地音频最多约 40 MiB。须先能播放/解码。',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    '成片时长跟视频走。音频更长会被截断；更短则画面结束前配乐已停。',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    '不做 YouTube、播客 URL 或远程代抓。不支持粘贴链接。',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    '容器与编码可能与源文件不同。保留原件；下载是新的重编码文件。',
  tool_add_an_audio_track_to_a_video_example_title: '试试无声短片加一段音调底乐',
  tool_add_an_audio_track_to_a_video_example:
    '「加载样例」会生成一段画布短视频与简单音调，并自动运行添加音轨。你应看到带新配乐的画面。不会自动播放——需要时请自行点播放。',
  tool_add_an_audio_track_to_a_video_usecases_title: '适用场景',
  tool_add_an_audio_track_to_a_video_usecase_1:
    '有一段无声录屏和一段 WAV 底乐——在此合并后下载分享。',
  tool_add_an_audio_track_to_a_video_usecase_2:
    '想用更清晰的本地配乐替换薄弱原声，又不想安装桌面剪辑软件。',
  tool_add_an_audio_track_to_a_video_faq_q1: '能下载 YouTube 或粘贴 URL 吗？',
  tool_add_an_audio_track_to_a_video_faq_a1:
    '不能。只接受你本机已有的文件。没有 YouTube 下载器，也不做远程抓取。',
  tool_add_an_audio_track_to_a_video_faq_q2: '这和从视频里去掉音轨是一回事吗？',
  tool_add_an_audio_track_to_a_video_faq_a2:
    '不是。静音/去音轨是另一项作业。本页是给画面挂上新的配乐。',
  tool_add_an_audio_track_to_a_video_faq_q3: '会把音频抽成单独文件下载吗？',
  tool_add_an_audio_track_to_a_video_faq_a3:
    '不会。从视频抽音是别的工具。这里的结果是带合并音轨的视频文件。',
  tool_add_an_audio_track_to_a_video_faq_q4: '输出会和源文件一样仍是 MP4 吗？',
  tool_add_an_audio_track_to_a_video_faq_a4:
    '通常不会。浏览器一般经 MediaRecorder 重编码，多为 WebM。画质与容器都可能变化。',
  tool_add_an_audio_track_to_a_video_faq_q5: '会把文件上传到服务器吗？',
  tool_add_an_audio_track_to_a_video_faq_a5:
    '不会。解码与录制都在本机浏览器完成。首次打开页面需要网络；不保证可离线使用。',
  tool_add_an_audio_track_to_a_video_faq_q6: '如果音频比视频长怎么办？',
  tool_add_an_audio_track_to_a_video_faq_a6:
    '合并以视频时长为准。画面结束后多出的音频不会进入下载文件。',
};
export default zh;
