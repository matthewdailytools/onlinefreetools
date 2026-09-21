            # 02 — 工具信息定稿

            **状态**：`implemented`  
            **slug**：`extract-cover-art-from-an-mp3`  
            **路径**：`/tools/extract-cover-art-from-an-mp3`  
            **主方向**：A  
            **YMYL**：否

            ## IG 预审

            2026-09-21 搜索相关意图。常见桌面/云上传方案。少有 **仅本机、诚实边界、Rich 单点页**。权威见 References。

            ## 开发 / SEO 卡片

            | 字段 | 内容 |
            |---|---|
            | 集群 | sound-editor / U2 |
            | Title (en) | Extract cover art from an MP3 |
            | Description | 见 en `description`（含 Steps + Example） |
            | page.style | `opts` |
            | related | `edit-mp3-title-and-cover-art`、`file-metadata-analyzer` |
            | Schema | WebApplication + BreadcrumbList |
            | IG | 1 规则；2 边界；6 本地；8 样例；9 related |

            ## 使用场景

            | 情境 | 动作 | 结果 / 默认 |
            |---|---|---|
            | 主任务 | 按 How | 本地下载结果 |
            | 样例验管线 | Load sample | 演示同一路径 |

            ## 清单前检索覆盖优化

            | 项 | 结论 / 落点 |
            |---|---|
            | 日期 | 2026-09-21 |
            | slug 结论 | 保留 `extract-cover-art-from-an-mp3`（hub U2） |
            | 主检索词 → title/H1 | 见下表 → Extract cover art from an MP3 |
            | 次要关键词 → desc / FAQ | without upload；local → desc/FAQ |
            | 用户搜索习惯判断 | 要本机完成主任务，不要云盘上传 |
            | 优化摘要 | H1 任务句；FAQ 诚实边界；related 相邻工具 |
            | [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

            ## 同意图相关搜索词（页面生成必吸）

            | 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| extract cover art from mp3 / extract album art | absorb 主词 | H1 / How | 本页 |
| mp3 提取封面 / 抽出封面 | absorb 中文 | zh H1 / FAQ | 本页 |
| download embedded cover / APIC | absorb 次词 | desc / FAQ | 本页 |
| edit title tags / write cover | 相邻 | related → A6 | edit-mp3-title-and-cover-art |
| file metadata / id3 dump all fields | 相邻 | related | file-metadata-analyzer |
| reduce mp3 size | 有意不满足 | FAQ | reduce-an-mp3-file-size |

            - [x] 上表已列全本意图相关搜索
            - [x] 生成 title / description / FAQ / Use cases 时按上表写入

            ## Ads / Keyword Planner 长尾

            - [x] 不适用：仓库未发现本任务 Planner 归属分析。

            ## 用户意图审查

            | 项 | 结论 |
            |---|---|
            | 日期 | 2026-09-21 |
            | 总判 | 满足：本地主任务；诚实边界；related 正确 |
            | 主词搜索者任务 | 选文件、运行、下载 |
            | 满足之处 | dropzone、HUD、样例、本地处理 |
            | 超出 / 应划边界 | 见 FAQ 有意不满足行 |
            | [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

            ## 文案丰富度（本批 sound 强制）

            `description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

            ## 交互规格

            - 本地文件；HUD；Load sample；成功前禁用下载。
            - 详见页面实现注释。

            ## 页面模块清单

            - [x] H1 / 工具区 / HUD
            - [x] How / Why / Rules / Example / Use cases
            - [x] FAQ ≥5 / related ≥2 / References
            - [x] 十语 brief 方向
