# 方向讨论

主方向 A：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` S10。

候选：把过大的 MP3 附件重新编码成更小的 MP3，保留全长，测量实际节省，试听后下载。
与 WAV→MP3 的格式桥接不同，本工具必须处理已经有损的 MP3，说明再次损失、无缩小的结果、总码率与单声道关系。动态压缩/响度调整不在范围。

- [x] 有独立输入、大小比较和失败边界，不是近义换皮。
- [x] 原生 Web Audio + 已有同源 lamejs；无后端、无新增依赖。
- [x] 不拆邮箱/聊天/码率近义页；十语逐批重写。
- Tier：编码器按需加载；自动样例为短 MP3，编码分块让出 UI。

继续立项 `reduce-an-mp3-file-size`。参考 SEO 卡片：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
