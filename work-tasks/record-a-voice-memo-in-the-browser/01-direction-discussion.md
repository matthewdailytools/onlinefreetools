# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：在浏览器授权麦克风，录一段语音备忘，暂停/继续、停止、试听并下载浏览器实际生成的音频文件。
- 谁在什么任务里用：要快速试麦、留口述备忘、录一句旁白或发语音草稿的人。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是** | `getUserMedia` + `MediaRecorder` 是成熟浏览器能力；无后端、无新增包，Tier 0–1。 |
| **B** 场景桥接 | 否 | 核心价值是浏览器录制能力，不是格式/渠道桥接。 |
| **C** 行业专属 | 否 | 备忘、试麦和口播草稿跨行业，不依赖行业标准。 |

**选定主方向**：A  
**次要互链参考**：`trim-an-audio-clip-and-export`、`make-a-30-second-mp3-ringtone`。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体：本页主输入是实时麦克风，已上线音频页均以本地文件为输入。
- [x] 不是无增量机翻铺量。
- [x] 不依赖偏离定位的重后端。
- [x] voice recorder / record audio online / online mic 同意图只做一个 URL。

## 方向专属检查

- 成熟度 / 推荐包：原生 MediaDevices、MediaRecorder、Audio；无第三方包。
- Tier：0–1。
- CWV：进页不请求权限、不创建麦克风流；只在点击 Start recording 后使用设备能力。

## 结论

- 继续立项：是。
- 建议 slug：`record-a-voice-memo-in-the-browser`。
- 与已上线工具关系：新建 S7 scene；录完后的裁剪/铃声交给 related 工具。
- 缺失信息：无本 slug Planner；实时 SERP 接口本轮无返回，0b 使用声音作业表与常见产品搜法，页面不声称统一 MP3 输出。
- 用户意图审查：见 `02-tool-info.md`。
