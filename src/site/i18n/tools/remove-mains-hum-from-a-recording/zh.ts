import type { SiteLangDict } from '../../../types';

/**
 * 中文文案：从录音中去除市电嗡嗡（S26）。
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ 宽带降噪 / 去咔哒 / 闷声 EQ。
 */
const zh: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "从录音中去除市电嗡嗡",
  tool_remove_mains_hum_from_a_recording_desc:
    "用 50 或 60 Hz 陷波及可选谐波切掉市电嗡嗡，然后下载 16-bit WAV。仅本机处理。",
  tool_remove_mains_hum_from_a_recording_description:
    "从录音中去除市电嗡嗡：选择 50 或 60 Hz 陷波，并可叠加 2–5 次谐波。步骤：去嗡嗡、试听、下载 16 位 WAV。示例：加载带嗡嗡的样例即可体验。窄带陷波专治电流声——不是宽带降噪、不是去咔哒、不是闷声 EQ。音频始终留在本机，绝不会上传。",
  tool_remove_mains_hum_from_a_recording_article:
    "靠近电源、调光器或接地不良的设备录音时，常会叠上稳态 50 或 60 Hz 市电嗡嗡，有时还带谐波。本页在 OfflineAudioContext 中串联 Biquad 陷波，对准所选基波，并可在 Nyquist 以下叠加 2–5 次谐波。这针对窄带电流声——不是风扇嘶声宽带降噪、不是咔哒修复、也不是三频段闷声 EQ。靠近陷波的低音可能略薄。声道保持 1 或 2。保留原文件；下载是新的 16-bit WAV。处理在浏览器本机完成。",
  tool_remove_mains_hum_from_a_recording_choose: "选择音频文件",
  tool_remove_mains_hum_from_a_recording_hint: "拖入一个 WAV、MP3、M4A、AAC 或 OGG。最大 40 MiB、10 分钟；单声道或立体声。",
  tool_remove_mains_hum_from_a_recording_convert: "去嗡嗡",
  tool_remove_mains_hum_from_a_recording_download: "下载 WAV",
  tool_remove_mains_hum_from_a_recording_sample: "加载样例",
  tool_remove_mains_hum_from_a_recording_clear: "清除",
  tool_remove_mains_hum_from_a_recording_advanced: "市电频率与谐波",
  tool_remove_mains_hum_from_a_recording_hz_label: "市电频率",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Hz",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Hz",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "谐波",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "仅基波",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "含谐波",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "默认 50 Hz 并含谐波，会陷波基波及 Nyquist 以下的 2–5 次谐波。北美等电网选 60 Hz。仅基波对附近低音更温和。",
  tool_remove_mains_hum_from_a_recording_progress: "去嗡嗡进度",
  tool_remove_mains_hum_from_a_recording_read: "读取",
  tool_remove_mains_hum_from_a_recording_decode: "解码",
  tool_remove_mains_hum_from_a_recording_dehum: "去嗡嗡",
  tool_remove_mains_hum_from_a_recording_write: "写入",
  tool_remove_mains_hum_from_a_recording_done: "完成。试听去嗡嗡后的 WAV，然后下载 WAV。",
  tool_remove_mains_hum_from_a_recording_failed: "去嗡嗡失败。请换更小、有效的音频文件重试。",
  tool_remove_mains_hum_from_a_recording_elapsed: "已用时 {s} 秒",
  tool_remove_mains_hum_from_a_recording_preview: "试听去嗡嗡后的 WAV",
  tool_remove_mains_hum_from_a_recording_result: "{seconds} 秒 · {hz} Hz · {harmonics} · {notches} 节陷波 · WAV {output} KiB",
  tool_remove_mains_hum_from_a_recording_sample_name: "三秒市电嗡嗡演示",
  tool_remove_mains_hum_from_a_recording_empty: "请先选择音频文件或加载样例。",
  tool_remove_mains_hum_from_a_recording_err_file: "请只拖入一个音频文件。",
  tool_remove_mains_hum_from_a_recording_err_format: "不支持或损坏的音频。请使用浏览器可解码的文件（WAV、MP3、M4A、AAC 或 OGG）。",
  tool_remove_mains_hum_from_a_recording_err_limit: "请使用不超过 40 MiB 或 10 分钟、且为 1–2 声道的文件。",
  tool_remove_mains_hum_from_a_recording_err_decode: "浏览器无法解码此音频。请换有效录音。",
  tool_remove_mains_hum_from_a_recording_err_encoder: "无法写入去嗡嗡后的 WAV。请检查频率与谐波后重试。",
  tool_remove_mains_hum_from_a_recording_err_silence: "电平近乎静音——无需去嗡嗡。请换有可听电平的录音。",
  tool_remove_mains_hum_from_a_recording_how_title: "如何从录音中去除市电嗡嗡",
  tool_remove_mains_hum_from_a_recording_how_body: "选择 50 或 60 Hz、是否含谐波，运行陷波，试听后下载 16-bit WAV——文件不会上传。",
  tool_remove_mains_hum_from_a_recording_how_item_1: "选择音频文件，或点「加载样例」使用三秒嗡嗡演示。",
  tool_remove_mains_hum_from_a_recording_how_item_2: "打开市电频率与谐波：选 50 或 60 Hz，再选仅基波或含谐波。",
  tool_remove_mains_hum_from_a_recording_how_item_3: "点击「去嗡嗡」，等待读取 → 解码 → 去嗡嗡 → 写入完成。",
  tool_remove_mains_hum_from_a_recording_how_item_4: "试听更安静的电流底噪，查看结果行，然后点击「下载 WAV」。",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "为什么选择我们的从录音中去除市电嗡嗡工具",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "保存前可看到市电 Hz、谐波模式、陷波节数与输出 KiB。",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "只做去嗡嗡——50/60 Hz 陷波加可选谐波，不是埋在 DAW 机架里。",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "解码、陷波与 WAV 写入在本机完成；页面不会上传录音去处理。",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "改频率、谐波或换输入会清空旧下载，避免误存过期 WAV。",
  tool_remove_mains_hum_from_a_recording_rules_title: "陷波频率、谐波与诚实的浏览器上限",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "每次在所选基波串联窄带陷波；开启谐波时再加 Nyquist 以下的 2–5 次。真正市电音改善最多；宽带嘶声请用降噪。软峰值保护避免削波。",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 或 60 Hz 设定基波。含谐波会在 Nyquist 以下叠加 2×–5×。默认 50 Hz 并含谐波。",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "这是浏览器陷波链。不是宽带降噪，不是去咔哒，也不是闷声 EQ。",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "导出保持 1 或 2 声道。不复制标签。绝不覆盖原文件。",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "单文件最大 40 MiB、十分钟。靠近陷波的低音可能变薄；发空就改用仅基波。",
  tool_remove_mains_hum_from_a_recording_example_title: "试一段真实嗡嗡样例",
  tool_remove_mains_hum_from_a_recording_example:
    "「加载样例」生成三秒带 50 Hz 基波与谐波的类人声，并自动以 50 Hz + 谐波去嗡嗡。不会自动播放——若要听更安静的底噪，请自行点预览播放。",
  tool_remove_mains_hum_from_a_recording_usecases_title: "什么时候有用",
  tool_remove_mains_hum_from_a_recording_usecase_1: "备忘录叠着充电器或调光器的稳态电流嗡——选对电网 Hz，去嗡嗡，下载 WAV。",
  tool_remove_mains_hum_from_a_recording_usecase_2: "外录想先去掉市电音，再去做宽带降噪或闷声 EQ。",
  tool_remove_mains_hum_from_a_recording_faq_q1: "这和「给人声备忘录降低背景噪音」一样吗？",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "不一样。那一页用高通和噪声底门控压风扇/空调嘶声。本页陷波窄带 50/60 Hz 电流声。宽带嘶声请用给人声备忘录降低背景噪音。",
  tool_remove_mains_hum_from_a_recording_faq_q2: "能去掉咔哒和口喷吗？",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "不能。咔哒、口喷与唱片裂纹需要去咔哒作业。本页只陷波市电基波与可选谐波。",
  tool_remove_mains_hum_from_a_recording_faq_q3: "这和「给人声闷录音做均衡」一样吗？",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "不一样。那一页用清晰度/温暖感/在场感改音色。本页去除市电嗡嗡。去嗡嗡后再调闷声，请用给人声闷录音做均衡。",
  tool_remove_mains_hum_from_a_recording_faq_q4: "该选 50 Hz 还是 60 Hz？",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "对齐当地电网。欧洲、亚洲大部分、非洲与澳洲多为 50 Hz；北美及部分日本、南美为 60 Hz。选错几乎去不掉嗡嗡。",
  tool_remove_mains_hum_from_a_recording_faq_q5: "「含谐波」做什么？",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "在 Nyquist 以下为基波的 2–5 倍加陷波。嗡嗡常带谐波；仅基波对附近低音更温和。",
  tool_remove_mains_hum_from_a_recording_faq_q6: "音频会上传到服务器吗？",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "不会。解码、陷波与 WAV 写入在浏览器本机完成。首次打开页面需要网络；不保证离线可用。宽带嘶声请用给人声备忘录降低背景噪音；闷声音色请用给人声闷录音做均衡。",
};
export default zh;
