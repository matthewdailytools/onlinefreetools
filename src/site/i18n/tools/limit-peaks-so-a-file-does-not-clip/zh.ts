import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：限制峰值以免文件削波（S19）。
 * ≠ 动态压缩（S18）、≠ 峰值归一化（S16）、≠ 固定增益（S15）、≠ LUFS（S17）。
 */
const zh: SiteLangDict = {
  tool_limit_peaks_so_a_file_does_not_clip_title: "限制峰值以免文件削波",
  tool_limit_peaks_so_a_file_does_not_clip_desc:
    "用 −0.1 / −1 dBFS 天花板与软膝或砖墙限制器压掉尖峰，再下载 16 位 WAV。全程本机处理。",
  tool_limit_peaks_so_a_file_does_not_clip_description:
    "限制峰值以免文件削波：提供 −0.1 或 −1 dBFS 天花板与软膝 / 砖墙模式。步骤：限制、试听、下载 WAV。示例：加载过热样例即可体验。只压超限尖峰——不是动态压缩器，不是峰值归一化，不是固定 dB 增益，也不是 LUFS。音频始终留在本机，绝不上传。",
  tool_limit_peaks_so_a_file_does_not_clip_article:
    "交稿与混音常禁止样本撞上数字满幅。本页用纯 JavaScript 天花板限制器：可选 −0.1 或 −1 dBFS（默认 −1），以及 Soft 软膝或 Brickwall 硬夹。膝下或天花板以下的样本原样通过——绝不抬升。这是防削波限幅，不是按阈值/比率贴面的动态压缩，不是把整段等比拉到目标峰值的归一化，不是整段固定 dB 增益，也不是播客 LUFS 对齐。声道数保持 1 或 2。请保留母带；下载是新的 16 位 WAV。处理在浏览器本机完成。",
  tool_limit_peaks_so_a_file_does_not_clip_choose: "选择音频文件",
  tool_limit_peaks_so_a_file_does_not_clip_hint: "拖入一个 WAV、MP3、M4A、AAC 或 OGG。最多 40 MiB、10 分钟；单声道或立体声均可。",
  tool_limit_peaks_so_a_file_does_not_clip_convert: "限制",
  tool_limit_peaks_so_a_file_does_not_clip_download: "下载 WAV",
  tool_limit_peaks_so_a_file_does_not_clip_sample: "加载样例",
  tool_limit_peaks_so_a_file_does_not_clip_clear: "清空",
  tool_limit_peaks_so_a_file_does_not_clip_advanced: "限制器设置",
  tool_limit_peaks_so_a_file_does_not_clip_ceiling_label: "天花板（dBFS）",
  tool_limit_peaks_so_a_file_does_not_clip_mode_label: "限制模式",
  tool_limit_peaks_so_a_file_does_not_clip_mode_soft: "软膝",
  tool_limit_peaks_so_a_file_does_not_clip_mode_brickwall: "砖墙",
  tool_limit_peaks_so_a_file_does_not_clip_settings_hint:
    "默认 −1 dBFS 软膝在天花板下温和起膝。−0.1 更热。砖墙把每个样本硬夹在天花板。未超限素材绝不抬升。",
  tool_limit_peaks_so_a_file_does_not_clip_progress: "限制进度",
  tool_limit_peaks_so_a_file_does_not_clip_read: "读取",
  tool_limit_peaks_so_a_file_does_not_clip_decode: "解码",
  tool_limit_peaks_so_a_file_does_not_clip_limit: "限制",
  tool_limit_peaks_so_a_file_does_not_clip_write: "写入",
  tool_limit_peaks_so_a_file_does_not_clip_done: "完成。请试听限幅后的 WAV，再点击「下载 WAV」。",
  tool_limit_peaks_so_a_file_does_not_clip_failed: "限制失败。请换较小且有效的音频文件重试。",
  tool_limit_peaks_so_a_file_does_not_clip_elapsed: "已用 {s} 秒",
  tool_limit_peaks_so_a_file_does_not_clip_preview: "试听限幅后的 WAV",
  tool_limit_peaks_so_a_file_does_not_clip_result: "{seconds}s · 天花板 {ceiling} dBFS · {mode} · 已限幅 · 峰值 {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_limit_peaks_so_a_file_does_not_clip_result_passthrough: "{seconds}s · 天花板 {ceiling} dBFS · {mode} · 无超限峰值 · 峰值 {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_limit_peaks_so_a_file_does_not_clip_limited_yes: "是",
  tool_limit_peaks_so_a_file_does_not_clip_limited_no: "否",
  tool_limit_peaks_so_a_file_does_not_clip_sample_name: "两秒过热峰值演示",
  tool_limit_peaks_so_a_file_does_not_clip_empty: "请先选择音频文件或加载样例。",
  tool_limit_peaks_so_a_file_does_not_clip_err_file: "请只拖入一个音频文件。",
  tool_limit_peaks_so_a_file_does_not_clip_err_format: "不支持或损坏的音频。请使用浏览器可解码的文件（WAV、MP3、M4A、AAC 或 OGG）。",
  tool_limit_peaks_so_a_file_does_not_clip_err_limit: "请使用不超过 40 MiB 或 10 分钟、且为 1 或 2 声道的文件。",
  tool_limit_peaks_so_a_file_does_not_clip_err_decode: "浏览器无法解码此音频。请换一份有效录音重试。",
  tool_limit_peaks_so_a_file_does_not_clip_err_encoder: "无法写入限幅 WAV。请检查天花板与模式后再次点击「限制」。",
  tool_limit_peaks_so_a_file_does_not_clip_err_silence: "电平几乎为静音，无法限制。请换有可听见电平的录音。",
  tool_limit_peaks_so_a_file_does_not_clip_how_title: "如何限制峰值以免文件削波",
  tool_limit_peaks_so_a_file_does_not_clip_how_body:
    "选定天花板与模式，只压超限峰值，试听后下载 16 位 WAV——文件不上传。",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_1: "选择音频文件，或点「加载样例」体验约两秒过热尖峰演示。",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_2: "打开「限制器设置」，选择 −0.1 或 −1 dBFS（默认 −1），以及软膝（默认）或砖墙。",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_3: "点击「限制」，等待读取 → 解码 → 限制 → 写入完成。",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_4: "试听结果，核对是否发生限幅，再点击「下载 WAV」。",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_title: "为什么选择我们的峰值限制工具",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_1: "保存前可看到天花板、模式、前后峰值与输出 KiB。",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_2: "两个清晰天花板与软膝/砖墙——单点限制器，不是归一化/压缩器/增益控件墙。",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_3: "解码、限幅与写 WAV 均在本机；页面不会上传你的录音来处理。",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_4: "更改天花板、模式或输入会清除旧下载，避免误存过期 WAV。",
  tool_limit_peaks_so_a_file_does_not_clip_rules_title: "天花板、软膝与砖墙及限制",
  tool_limit_peaks_so_a_file_does_not_clip_rules_body:
    "限制器衰减超过天花板（或软膝）的样本。软膝在天花板下温和起膝；砖墙硬夹。未超限样本绝不抬升——这与会把整段放大或缩小到目标峰值的峰值归一化不同。",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_1: "默认 −1 dBFS 软膝留一点余量。−0.1 更热。砖墙绝不让样本超过天花板。",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_2: "若无样本超限，峰值原样通过，结果行会说明。不施加 makeup 增益。",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_3: "导出声道数保持 1 或 2。不复制标签。绝不覆盖原文件。",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_4: "单文件最多 40 MiB、十分钟。这不是动态压缩器，不是峰值归一化，不是固定增益放大，也不是 LUFS 对齐。",
  tool_limit_peaks_so_a_file_does_not_clip_example_title: "试一次真实峰值限制",
  tool_limit_peaks_so_a_file_does_not_clip_example:
    "「加载样例」会生成约两秒、含超满幅尖峰的 440 Hz 音调，并自动以 −1 dBFS 软膝限制。不会自动播放——若要听效果请手动点预览播放。",
  tool_limit_peaks_so_a_file_does_not_clip_usecases_title: "适用场景",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_1: "混音偶发撞上削波——选软膝 −1，限制后下载 WAV。",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_2: "整体电平已定，交稿仍要求峰值不超过天花板，又不想跑整段动态压缩。",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q1: "这和峰值归一化是一回事吗？",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a1:
    "不是。峰值归一化会把整段缩放，使绝对峰值命中目标（可能抬升安静素材）。本限制器只衰减超过天花板的样本。峰值归一化请用「将音频文件峰值归一化」。",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q2: "这是动态压缩器吗？",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a2:
    "不是。压缩器用阈值/比率随时间重塑响与轻。这里只封顶超过天花板（或软膝）的峰值。人声动态请用「压缩人声录音的动态范围」。",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q3: "这是固定 dB 增益或 LUFS 对齐吗？",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a3:
    "不是。固定增益整段乘同一个倍数；LUFS 对齐综合响度。本页只在天花板防削波。请用「把安静的录音调大声」或「将播客响度对齐到 −16 LUFS」。",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q4: "软膝和砖墙有何区别？",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a4:
    "软膝在天花板下温和起膝，尖峰曲线压入。砖墙把每个样本硬夹在 ±天花板，无膝区。",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q5: "如果文件从未超过天花板呢？",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a5:
    "仍可点「限制」。峰值原样通过，结果行会报告没有超限。",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q6: "音频会上传到服务器吗？",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a6:
    "不会。解码、限幅与写 WAV 均在浏览器本机完成。首次打开页面需要网络；不保证离线可用。压缩器或峰值归一化请用对应工具。",
};
export default zh;
