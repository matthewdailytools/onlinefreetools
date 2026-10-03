# 02 — 工具信息与覆盖决策

| 字段 | 内容 |
|---|---|
| slug | `compress-a-video-file` |
| 优先级 | §11.1 视频裁剪后的单功能压缩 |
| Title/H1 (en) | Compress a video file and compare the size |
| Description 方向 | Compress one local MP4, MOV or WebM into an H.264/AAC MP4. Choose a target height and bitrate, preview the result, then compare actual pixels, codecs and bytes before downloading. |
| Catalog `page.style` | `opts` |
| 技术 | Mediabunny `Conversion.init` H.264/AAC 强制重编码 + 高度/码率控制 + OPFS 大结果；目标分辨率编码探测；输出二次验轨 |
| 验收 | coverage 0b→2→4→all、真实压缩比/像素/码率、已高度压缩源变大、无声/MOV/WebM/坏文件、>80 MiB 输入/OPFS、无 OPFS、停止重试、十语移动端真实 MP4 下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 `compress-a-video-file`；目标高度作为高级设置吸收 `resize-a-video-to-a-target-resolution`，在实际输出尺寸和 FAQ 给出能力；批量压缩另立 B 页 |
| 主检索词→title/H1 | `compress video` → Compress a video file and compare the size |
| 次词→desc/FAQ/Use cases | `reduce MP4 size`、`make video smaller` 进首段/How；`resize video to 720p` 进高级设置/FAQ；`target video size MB` 仅作近似估算不承诺命中 |
| 用户搜法判断 | 从一个本地视频获得体积更小、仍可播放的 MP4；或把分辨率降至指定高度 |
| 优化摘要 | 从泛称转码收紧为体积对比和可解释的像素/码率设置；结果同时报告估计/实际大小、尺寸/轨道、节省或增大比例和 OPFS 路径，避免无损/必中体积承诺 |
| [x] 已回写 Title / Description 与 slug | 已回写规格 |

## 同意图相关搜索词

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| compress video online | 主词 | H1、首段 | 本页 |
| reduce MP4 file size | 同任务格式实例 | 首段/FAQ | 本页 |
| make a video smaller | 同任务口语 | How/场景 | 本页 |
| compress MOV / WebM | 源格式实例 | 首段/FAQ | 本页；按浏览器解码能力 |
| resize video to 720p | 同编码路径但目标为像素 | 高级设置/结果尺寸/FAQ | 本页模式，不另起近义 URL |
| target video size in MB | 近似目标体积 | 设置与估算说明 | 本页；不承诺精确命中 |
| lossless video compressor | 不可满足 | FAQ 写明有损重编码 | 本页边界 |
| batch compress videos | 多独立输出 | §11.3 候选 | 后续 B 页 |

- [x] 同意图搜法已列全；目标高度模式吸收 resize，不铺同义 URL。
- [x] 生成页面 title/description/How/FAQ 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库未找到该意图的 Planner/Ads 长尾材料；不捏造搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：从本地视频生成可下载的较低码率 MP4，展示实际大小；目标高度满足 resize 意图 |
| 主词用户任务 | 选文件→用合理默认压缩→预览→看到确切节省/增大→下载；高级设置可缩放到指定高度 |
| 满足处 | 目标像素与码率、预计字节、实际尺寸/轨道/字节、前后节省率、无音轨和大输入处理报告 |
| 超出/边界 | 不承诺源已很小仍变小、无损、精确命中 MB、所有容器/编码、任意 5 GiB 文件都稳定；不把裁剪/旋转放首屏 |
| 缺口与回写 | 默认设置必须可生成产物且不放大分辨率；反向增大需如实显示；How/FAQ 写有码率与质量取舍及设备编码边界 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入规格 |

## 页面模块清单

- [x] 英语母版、真实压缩/放大边界及目标高度 POC 与输出下载完成：`node scripts/tool-modules/test-video-compress-browser.mjs`，2026-10-03，exit 0，见 `/tmp/compress-full-browser2.log`。
- [x] 十语文案、覆盖 0b/2/4/all、全站构建和真实浏览器验收完成：304 工具 × 10 语种整站构建 exit 0；MOV/WebM/MP4、>80 MiB OPFS、无 OPFS、停止重试、十语移动端实际 MP4 下载均通过。
