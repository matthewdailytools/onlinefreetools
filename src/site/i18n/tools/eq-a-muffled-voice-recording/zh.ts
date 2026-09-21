import type { SiteLangDict } from '../../../types';

/**
 * Chinese copy for eq-a-muffled-voice-recording (S20).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ 仅低音 / 降噪 / 去齿音。
 */
const zh: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "给人声闷录音做均衡",
  tool_eq_a_muffled_voice_recording_desc:
    "用清晰度、温暖感或在场感三频段预设打开闷声人声，然后下载 16-bit WAV。仅在本机处理。",
  tool_eq_a_muffled_voice_recording_description:
    "用清晰度、温暖感或在场感三频段 Biquad 预设给人声闷录音做均衡，打开电话与口罩录音的闷声。步骤：均衡、试听、下载 16 位 WAV。示例：加载闷声样例即可体验。只做音色整形——不是仅低音增强、不是降噪、不是去齿音。音频始终留在本机，绝不会上传。",
  tool_eq_a_muffled_voice_recording_article:
    "电话、口罩与远距离麦克风常听起来闷：几百赫兹以下泥感过重，语音带清晰度不足。本页在 OfflineAudioContext 中串联三节 BiquadFilter——低频架、峰值、高频架——收成命名预设。清晰度削泥并抬升语音存在感；温暖感轻抬体感并柔化刺耳高频；在场感聚焦中高存在感与空气感。这是闷人声的音色 EQ，不是单频低音增强、不是背景降噪、不是只压齿音的去齿音。声道保持 1 或 2。保留原母带；下载是新的 16-bit WAV。处理在浏览器本机完成。",
  tool_eq_a_muffled_voice_recording_choose: "选择音频文件",
  tool_eq_a_muffled_voice_recording_hint: "拖入一个 WAV、MP3、M4A、AAC 或 OGG。最大 40 MiB、10 分钟；单声道或立体声。",
  tool_eq_a_muffled_voice_recording_convert: "均衡",
  tool_eq_a_muffled_voice_recording_download: "下载 WAV",
  tool_eq_a_muffled_voice_recording_sample: "加载样例",
  tool_eq_a_muffled_voice_recording_clear: "清除",
  tool_eq_a_muffled_voice_recording_advanced: "EQ 预设",
  tool_eq_a_muffled_voice_recording_preset_label: "人声 EQ 预设",
  tool_eq_a_muffled_voice_recording_preset_clarity: "清晰度",
  tool_eq_a_muffled_voice_recording_preset_warmth: "温暖感",
  tool_eq_a_muffled_voice_recording_preset_presence: "在场感",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "默认清晰度削泥并打开语音。温暖感加体感、柔化高频。在场感抬升中高存在感与空气感。软峰值保护避免提升后削波。",
  tool_eq_a_muffled_voice_recording_progress: "均衡进度",
  tool_eq_a_muffled_voice_recording_read: "读取",
  tool_eq_a_muffled_voice_recording_decode: "解码",
  tool_eq_a_muffled_voice_recording_eq: "均衡",
  tool_eq_a_muffled_voice_recording_write: "写入",
  tool_eq_a_muffled_voice_recording_done: "完成。试听均衡后的 WAV，然后下载 WAV。",
  tool_eq_a_muffled_voice_recording_failed: "均衡失败。请换更小、有效的音频文件重试。",
  tool_eq_a_muffled_voice_recording_elapsed: "已用时 {s} 秒",
  tool_eq_a_muffled_voice_recording_preview: "试听均衡后的 WAV",
  tool_eq_a_muffled_voice_recording_result: "{seconds} 秒 · {preset} · 峰值 {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_eq_a_muffled_voice_recording_sample_name: "两秒闷声人声演示",
  tool_eq_a_muffled_voice_recording_empty: "请先选择音频文件或加载样例。",
  tool_eq_a_muffled_voice_recording_err_file: "请只拖入一个音频文件。",
  tool_eq_a_muffled_voice_recording_err_format: "不支持或损坏的音频。请使用浏览器可解码的文件（WAV、MP3、M4A、AAC 或 OGG）。",
  tool_eq_a_muffled_voice_recording_err_limit: "请使用不超过 40 MiB 或 10 分钟、且为 1–2 声道的文件。",
  tool_eq_a_muffled_voice_recording_err_decode: "浏览器无法解码此音频。请换有效录音。",
  tool_eq_a_muffled_voice_recording_err_encoder: "无法写入均衡后的 WAV。请检查预设后重试均衡。",
  tool_eq_a_muffled_voice_recording_err_silence: "电平近乎静音——无需均衡。请换有可听电平的录音。",
  tool_eq_a_muffled_voice_recording_how_title: "如何给人声闷录音做均衡",
  tool_eq_a_muffled_voice_recording_how_body:
    "选择三频段预设，重塑音色，试听后下载 16-bit WAV——文件不会上传。",
  tool_eq_a_muffled_voice_recording_how_item_1: "选择音频文件，或点「加载样例」使用两秒闷声演示。",
  tool_eq_a_muffled_voice_recording_how_item_2: "打开 EQ 预设，选择清晰度（默认）、温暖感或在场感。",
  tool_eq_a_muffled_voice_recording_how_item_3: "点击均衡，等待读取 → 解码 → 均衡 → 写入完成。",
  tool_eq_a_muffled_voice_recording_how_item_4: "试听结果，确认预设与峰值，然后点击下载 WAV。",
  tool_eq_a_muffled_voice_recording_why_choose_title: "为什么选择我们的闷声人声均衡工具",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "保存前可看到预设名、峰值前后与输出 KiB。",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "三个人声预设——一个闷声 EQ 作业，不是埋藏的十段玩具或仅低音墙。",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "解码、Biquad EQ 与 WAV 写入在本机运行；页面不会上传录音来处理。",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "更改预设或输入会清除旧下载，避免误存过期 WAV。",
  tool_eq_a_muffled_voice_recording_rules_title: "清晰度、温暖感、在场感与限制",
  tool_eq_a_muffled_voice_recording_rules_body:
    "每个预设为三节 Biquad（低频架、峰值、高频架）。清晰度打开闷声；温暖感加体感；在场感抬存在感与空气感。软峰值保护在提升可能削波时缩放结果。",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "默认清晰度削减浑浊低频并抬升语音清晰度。温暖感抬低频体并柔化刺耳高频。在场感聚焦中高存在感。",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "仅音色 EQ。不去风扇噪声、不单抬低音、不按去齿音方式针对齿音。",
  tool_eq_a_muffled_voice_recording_rules_item_3: "导出保持 1 或 2 声道。不复制标签。永不覆盖原文件。",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "单文件最大 40 MiB、十分钟。强提升后软峰值保护可能降低整体电平，使 WAV 不超数字满幅。",
  tool_eq_a_muffled_voice_recording_example_title: "试一次真实闷声均衡",
  tool_eq_a_muffled_voice_recording_example:
    "「加载样例」生成两秒低频偏重、高频偏弱的闷声演示，并以清晰度自动均衡。不会自动播放——若要听更清晰结果，请自行按预览播放。",
  tool_eq_a_muffled_voice_recording_usecases_title: "适用场景",
  tool_eq_a_muffled_voice_recording_usecase_1: "电话或口罩录音发闷、像在盒子里——选清晰度，均衡，下载 WAV。",
  tool_eq_a_muffled_voice_recording_usecase_2: "播客人声需要更暖体感或更多在场感，又不想开完整 DAW EQ。",
  tool_eq_a_muffled_voice_recording_faq_q1: "这和低音增强一样吗？",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "不一样。低音增强主要抬低频。本页提供三个多频段人声预设处理闷声。仅低音增强是另一作业（上线后见「给 MP3 增强低音」）。",
  tool_eq_a_muffled_voice_recording_faq_q2: "这能去除背景噪音吗？",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "不能。EQ 重塑音色，不抑制风扇、嘶声或房间噪声。降噪请用专用降噪工具（上线后「给人声备忘录降背景噪声」）。",
  tool_eq_a_muffled_voice_recording_faq_q3: "这是去齿音吗？",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "不是。去齿音针对刺耳齿音（s/sh）。这些预设在低、中、高频塑造整体闷声音色。去齿音请用给人声配音去齿音。",
  tool_eq_a_muffled_voice_recording_faq_q4: "清晰度、温暖感与在场感分别做什么？",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "清晰度削泥并打开语音。温暖感加低频体并柔化刺耳高频。在场感抬升中高存在感与空气感。软峰值保护防止提升后削波。",
  tool_eq_a_muffled_voice_recording_faq_q5: "若均衡让文件更热怎么办？",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "滤波链之后，若峰值将超过约 −0.2 dBFS，软峰值保护会缩放缓冲，使 WAV 安全。专用峰值限制请用「限制峰值以免文件削波」。",
  tool_eq_a_muffled_voice_recording_faq_q6: "我的音频会上传到服务器吗？",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "不会。解码、均衡与 WAV 写入在浏览器本机完成。首次加载需要网络；不保证可离线使用。均衡后的动态请用「压缩人声录音的动态范围」或「限制峰值以免文件削波」。",
};
export default zh;
