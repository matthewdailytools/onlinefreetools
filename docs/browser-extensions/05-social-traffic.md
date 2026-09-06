# 05 — 社交流量（TikTok / YouTube / Reddit / X）

账号已注册：**TikTok、Reddit、X、YouTube**。  
社交的目标不是「涨粉」，而是给 E1–E3 提供 **可归因的安装**，并给 Google 提供 **可索引的演示**（尤其 YouTube）。

原则：先有 **可演示的增强功能**（见 `03`），再发内容。没有插件就发「即将推出」会浪费冷启动，也容易变成空壳宣传。

## 1. 定位与人设

| 项 | 建议 |
|---|---|
| 品牌名 | 与站点一致：Online Free Tools（用户能搜到域名） |
| 人设 | 「浏览器里本地处理文件的人」，不是资讯博主、不是 SEO 课程 |
| 语言 | 先 **en** 为主（CWS 全球安装）；TikTok/YouTube 可另发 **zh** 切片，不要机翻配音腔 |
| 披露 | Reddit / X 涉及自己产品时短句说明 affiliation；禁止暗广 |

统一短链或 UTM（站内已有 `utm-builder`，发布前用它生成）：

```
utm_source=tiktok|youtube|reddit|x
utm_medium=social
utm_campaign=e1_pdf   # 或 e2_image / e3_seo
utm_content=2026-q4-save-tab
```

落地优先顺序：有插件时 → CWS listing；无插件时 → 对应 **网站工具页**（不要空 `/extensions` 壳页）。

## 2. 只拍增强，不拍网站表单

每条内容必须让人在 3 秒内看到 **离开网站就难做到的一步**。

| 插件 | 推荐镜头（可重复拍不同站点） |
|---|---|
| E1 | 打开需登录的后台 / Notion / 网关文档 → 右键 Save as PDF → 打开 PDF 仍是登录后的内容 |
| E1 | 勾选 5 个已打开的帮助页标签 → ZIP 下载 |
| E2 | Instagram 上传页右键压图 / 去 GPS |
| E3 | 自己的预览环境点一下，OG 卡与真实 title 对得上 |

**不要发**：BMI 计算器屏幕录像、66 个公式、Prompt 生成器（和已定 listing 无关，稀释人设）。

## 3. 分平台玩法

### YouTube（搜索 + 长期资产，优先建）

YouTube 是四家里最像「搜索」的：用户会搜 *how to save a webpage as PDF in Chrome*。

| 内容类型 | 时长 | 标题方向 | 备注 |
|---|---|---|---|
| 任务教程 | 60–180s | Save a logged-in page as PDF (Chrome) | 口播步骤 = How；描述里放 CWS + 网站工具链接 |
| 对比 | 3–6min | Webpage to PDF: extension vs print vs website fetch | 诚实讲登录墙；链到 `batch-convert-web-pages-to-pdf` 说明网站上限 |
| 权限解释 | 2–4min | Why this PDF extension asks for the active tab | 降卸载、过审信任 |

优化：

- 标题主词前置；缩略图用站点已有 `youtube-thumbnail-size` 出 1280×720。
- 描述前两行重复意图 + 安装链接；时间戳。
- 字幕上传 en（可后补 zh）。
- 视频 **可以** 被 Google 视频结果引用；不要做假评论、买量。
- 发布节奏：E1 上架当周 1 条主教程 + 2 条 Shorts；之后每周 1 条真实任务，不要日更空壳。

Shorts / 剪同款给 TikTok，**同一素材改比例**，降低成本。

### TikTok

| 项 | 做法 |
|---|---|
| 形态 | 12–25s，开头就是结果（PDF 已经下好），再倒带一步 |
| 文案 | 屏幕字：Save this page as PDF · No upload |
| 评论 | 置顶 CWS 链接；回答「上不上服务器」 |
| 话题 | 用任务词，不堆 #fyp 空标签 |
| 不要 | 误导「破解 PDF 密码」、挑战赛刷量、搬运别人插件演示 |

中文 TikTok 可讲「已登录页面也能转 PDF」；避免夸大「完全离线」。

### Reddit

高风险渠道：广告感重会被删。策略是 **先帮人，再提产品**。

| 社区类型 | 例 | 做法 |
|---|---|---|
| 工具求解 | r/chrome、r/software、r/productivity | 只在有人问「login page to PDF / compress before upload」时回答；先给打印对话框等免费方法，再提本扩展 |
| 站长 | r/SEO、r/webdev | E3 演示「SPA 的 OG 和抓取不一致」；链检查器网站页也可以 |
| 本站相关 | 有人用本站工具时 | 可以提扩展增强，披露是作者 |

禁止：同一帖多 sub 复制；投票操纵；新号连续发推广。  
账号先 **积 30 天真实回复** 再发 Show 帖。Show 帖结构：问题（登录页存档）→ 做法 → 权限截图 → 开源/本地处理说明 → 链接。

### X (Twitter)

| 内容 | 频率 |
|---|---|
| 上架公告（截图 + 单用途句 + CWS） | 一次 |
| 一条增强 GIF（当前页→PDF） | 每周 1 |
| 回复别人问 PDF/压缩的推 | 有问才回，带链接 |
| 更新日志（修权限、修跨域图） | 有版本才发 |

不要自动刷回复、不要买粉。X 对安装转化通常弱于 YouTube/TikTok，当作 amplifer。

## 4. 内容日历（E1 上架前后）

| 周 | YouTube | TikTok | Reddit | X |
|---|---|---|---|---|
| T-2 | 用 **网站** 工具拍「URL 列表转 PDF」诚实边界（登录墙会失败） | 同素材 15s | 不推广，只潜水回帖 | 无 |
| 上架周 | 「登录页 Save as PDF」主教程 | 3 条切片 | 一个 Show 帖（英文） | 公告 |
| +1 | 权限 / 隐私 1 条 | 多标签 ZIP | 只回答问题 | GIF |
| +2 | 对比 Print to PDF | 换场景（GitHub README） | — | 更新 |

E2/E3 各重复这一轮，**不要四平台同一天为三个插件狂轰**（像 spam，也没有三个可演示产品）。

## 5. 合规红线（社交 + 商店 + Google）

- 不买安装、不买五星、不互刷评价。
- 不演示破解加密 PDF、不承诺「绕过版权 DRM」。
- 不把用户文档内容当素材（演示用自己的页或公开文档）。
- 不大规模发近义短视频堆频道（Google 对站内 scaled content 的精神同样适用于「无增量切片农场」——质量优先）。
- 隐私：评论区不收集邮箱；需要支持走站点反馈模块。

## 6. 成功看起来像什么（90 天）

不是粉丝数。建议看：

1. YouTube 搜索来源播放是否出现目标查询。
2. CWS 安装里 UTM/来源能否分出 youtube vs site badge。
3. Reddit 是否有 **别人** 转述「这个能存登录页」，而不是只有自己发帖。
4. 卸载率没有因标题党（夸大 offline / 破解）而升高。
