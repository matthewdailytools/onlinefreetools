# 01 — 方向讨论

**综合工具：** `/tools/convert-subtitle-files-between-srt-vtt-and-ass`。一个或多个本地字幕文件，识别 SRT/VTT/ASS/SSA/SBV/LRC；选择目标格式、源文字编码与 UTF-8 BOM。批量串行处理、逐项失败、单件下载及受预算约束的 ZIP。首屏默认 SRT→VTT，反向通过目标格式控件完成。

2026-09-30 字幕专项研究 `docs/seo/keywords/subtitles/2026-09-30-subtitle-tools-deep-scan.md` §5.2 已把格式互转、乱码修复和批量判为同一工作流。2026-10-01 能力图 §11.1 提醒 SRT↔VTT 应在同页双向模式。故保留一个综合 URL，原 `convert-an-srt-file-to-vtt` / `convert-a-vtt-file-to-srt` 是吸收词，不新增格式对 URL。

标准依据：[W3C WebVTT](https://www.w3.org/TR/webvtt1/)、[MDN WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format)、[Library of Congress SRT](https://www.loc.gov/preservation/digital/formats/fdd/fdd000569.shtml)。VTT 专属 NOTE/STYLE/REGION、定位、CSS/voice 等不能无损写入 SRT；ASS 样式、定位、绘图与逐字卡拉 OK、LRC 行内时间等也不能保证保留。页面和每项报告必须明说丢失。编码只做启发式候选选择，用户可覆盖；不宣称自动检测万无一失。

**可验证 IG：** 每文件输入/输出编码、cue 数、起止时间、格式专属特性丢失计数、转换前后预览和单件大小；批量逐行状态/错误，成功项不因坏文件丢失；显示 UTF-8 BOM 决策与平台用途。大文本分块读取/预算限制；ZIP 只对有上限的小批量创建，大输出逐项下载。
