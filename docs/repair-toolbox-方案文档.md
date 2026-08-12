# Repair Toolbox 方案文档

> **修订说明（2026-08-12）**  
> 收口为：**按问题分模块的本地脚本 + 对应深度页**（`Fix X on {OS}`）。  
> 否定「一个 `repair-toolbox` 页塞所有系统问题」。Doorway 禁的是**无增量铺量**，不是禁「按问题分页」。  
> **同日**：删除原「轨 B / 浏览器 data-repair 工具簇」全部内容；本方案只覆盖系统/本机修复。

---

## 1. 定位与目标

### 1.1 一句话

```text
一问题一模块脚本 + 一问题一深页（按 OS 分轨，不通用）。
```

系统级修复须本机权限与系统 API，**不得**伪装成浏览器内「已经修好」。页面交付物是：诊断说明（Information Gain）+ **该问题**的可下载可审计脚本。

### 1.2 适用范围

| 问题类型 | 本期态度 |
|---|---|
| 触摸板 / Wi‑Fi / 蓝牙 / 打印机 / 音频 / Explorer 等 | **优先**（Windows MVP） |
| Node / Docker / 端口 / 本机诊断包 | 二期 |
| 企业远程下发 / 完整 Helpdesk SaaS | 远期或不做 |
| CSV/Excel、电商报表、UTM 等浏览器文件工具 | **不在本文范围** |

### 1.3 标准流程

```text
precheck -> detect -> repair -> verify -> report
预检        诊断      修复       验证      报告
```

- **一键**：用户打开对应问题页/模块，按流程跑完并给出成功 / 部分成功 / 失败 + 下一步。  
- **诊断优先**：禁止盲目执行破坏性动作。  
- **默认安全**：低风险默认可跑；高风险须确认或高级模式。

---

## 2. 架构总览

```text
              Repair Toolbox（品牌/概念）
                         |
        +----------------+----------------+
        |                                 |
  按问题深页（站内 SEO）              分模块脚本（本地）
  /tools/fix-wifi-windows            windows/modules/fix-wifi/
  /tools/fix-touchpad-windows        windows/modules/fix-touchpad/
  …                                   …
  每页：诊断树 + IG + 下载该模块
                         |
              可选目录页 repair-toolbox
              （仅导航，不扛全部意图）
```

本地可另有 `repair-toolbox.cmd` **菜单聚合**各模块（产品入口）；SEO 主入口仍是各问题深页。

### 2.1 产品形态是否合理（结论）

| 说法 | 判断 |
|---|---|
| 用户要修的是「某一个」系统问题，不是下载万能箱 | **对** → 应按问题建页与模块 |
| `Fix X on Windows` 匹配真实搜索意图 | **对** → slug/title 可以贴近该意图 |
| 不同 OS 不能通用 | **对** → Windows / macOS **分页或分脚本**；内容须实质不同，禁止仅换 OS 词 |
| 把所有问题塞进一个 `repair-toolbox` 脚本/页 | **不合理**（意图稀释、IG 难做深、体验差） |
| 按问题分页 = 必然 doorway | **错** → doorway = 近义薄页、主要为排名；有独立脚本 + 可验证 IG 的深页是 people-first |

### 2.2 主题（SEO / IA）

- 主题簇 = 各「Fix X on {OS}」深页互相 `related`（同 OS 优先：Wi‑Fi ↔ 网络 ↔ 蓝牙）。  
- 暂不追求全集 `/topics/*`；需要时最多 1 个目录型支柱页（`repair-toolbox`）。

### 2.3 合规红线（对齐 Google Search Central 镜像规则）

- People-first：每页须有**该问题**的可下载可审计脚本 + 页内可验证 IG，禁止主要为排名的模板堆页。  
- **允许**：`fix-wifi-windows` 与 `fix-touchpad-windows` 各一深页（问题不同、脚本不同、IG 不同）。  
- **禁止 doorway / scaled content**：  
  - 同问题近义拆页（如 `fix-wifi-windows` + `fix-wifi-windows-11` + `windows-11-wifi-repair`）  
  - 仅改 title/H1、正文同构的批量页  
  - Win/Mac 两页正文几乎相同、只替换系统名  
- **版本**：Win10/11 默认**一页内分支**；仅当流程与脚本真正分叉再拆 URL。  
- 不为 AI 摘要做操纵伎俩；FAQ 不以富结果为 KPI。

### 2.4 单页 Information Gain 门槛（上线前自检）

每页至少具备多数项，否则不开新 slug：

1. 适用症状与**不适用**边界（MDM/域控/硬件损坏）  
2. 诊断树或检测项（对应 `detect` 脚本输出）  
3. 风险分级（L0–L4）与默认是否执行  
4. OS/版本/驱动差异表（可验证，非空话）  
5. 一键脚本下载（**仅该模块**）+ 审计日志说明  
6. verify 如何判断成功/失败  
7. 权威 References（如 Microsoft 支持文档）≥ 1  
8. Related：同 OS 其他 repair 深页 ≥ 2（成熟后）

---

## 3. 本地脚本设计

### 3.1 产品边界

面向个人机与轻量 IT 自助：把重复、可脚本化的 Windows（后续 macOS）故障收成模块。

**首期不做**：企业远程下发、完整 Helpdesk SaaS、默认改注册表/卸驱动、安全「一键合规修复」。

### 3.2 平台原则

Windows 与 macOS **分轨实现**。通用入口只做识别与分发：

```text
通用入口 -> 识别 OS/版本/架构 -> 调用对应模块
```

推荐目录：

```text
repair-toolbox/                 # 独立仓库或本仓外目录；页面提供模块下载，勿伪装「浏览器已修复」
  windows/
    common/                     # 管理员检查、日志、系统信息、报告写出
    modules/
      fix-touchpad/
      fix-wifi/
      fix-audio/
      fix-bluetooth/
      fix-printer/
      fix-explorer/
  macos/                        # 二期
  docs/
  logs/
```

每个模块统一：

```text
module-name/
  README.md          # 适用症状、风险级别、限制（MDM/域控）
  detect.*           # 只读诊断
  repair.*           # 修复（分级）
  verify.*           # 验证
  report.*           # 人读 + JSON
  config.json        # 风险默认值、需管理员与否
```

### 3.3 权限分级

| 级别 | 动作示例 | 默认 |
|---|---|---|
| L0 | 只读检测 | 执行 |
| L1 | 重启用户态应用 / 部分服务 | 执行 |
| L2 | 启用/重启设备、刷新 DNS | 谨慎默认 |
| L3 | 清缓存、重置网络栈 | 需确认 |
| L4 | 注册表、卸驱动、删数据 | 仅高级模式 |

每次运行写审计日志：时间、用户、系统版本、模块、动作摘要、成功/失败。

### 3.4 Windows 环境识别（示例维度）

| 维度 | 为何重要 |
|---|---|
| Win10 / Win11 | 设置入口与部分服务行为不同 |
| 家庭版 / 专业版 / 企业版 | 组策略、域限制 |
| x64 / ARM64 | 驱动与工具差异 |
| OEM / 触控板驱动族 | HID 设备名不同 |
| 是否 MDM/域控 | 许多修复会被策略禁止 |

### 3.5 MVP（第一阶段，仅 Windows）

本地入口：`repair-toolbox.cmd` 菜单；自动检查管理员；每模块出日志与成功/失败。

优先 6 模块：

1. `fix-touchpad` → 站内深页建议 slug：`fix-touchpad-windows`  
2. `fix-wifi`（含「连上没网」页内分支，勿拆第二 URL）→ `fix-wifi-windows`  
3. `fix-audio` → `fix-audio-windows`  
4. `fix-bluetooth` → `fix-bluetooth-windows`  
5. `fix-printer` → `fix-printer-windows`  
6. `fix-explorer` → `fix-explorer-windows`  

后续候选：键盘/鼠标、摄像头、网络完整重置（L3）、Windows Update、会议外设、`collect-diagnostics`。

### 3.6 第二阶段

- 开发环境：Node 依赖、端口占用、Docker Desktop 常见卡住、Git 凭据提示、日志打包。  
- macOS 对等子集（网络 / 音频 / 蓝牙等可脚本部分；**文案与脚本须重写**）。  
- 可选轻量 GUI；企业 Helpdesk 集成放到更后期。

### 3.7 与站点的关系（按问题深页）

- 脚本按**模块**维护；菜单仅聚合。  
- **站内**：一问题一 slug/深页；页内提供该模块下载 + 完整 IG（见 §2.4）。  
- **slug 方向**（立项时再跑 coverage 0b）：  
  - 推荐：`fix-wifi-windows`、`fix-touchpad-windows`、`fix-printer-windows`  
  - macOS 内容真不同时：`fix-wifi-macos` 等  
  - 目录页（可选）：`repair-toolbox`  
  - 避免：同问题多近义 slug；避免无脚本的纯文章壳  
- 节奏：宁少做几个过 IG 门槛的深页，不一次铺几十个同构页。

---

## 4. 原愿景域归类（避免再膨胀）

| 原域 | 本期态度 |
|---|---|
| 个人电脑 / 网络 / 办公外设 | 按问题深页 + 模块；先 1–2 再扩到约 6 |
| 办公软件 / 会议 | 二期候选 |
| 开发者环境 | 二期；不做假「浏览器一键杀进程」 |
| 客服工单 / 电商报表 / 财务对账 / 营销校验等 | **不在本文范围** |
| 安全合规 | 若做：只检测报告，不默认破坏性修复 |
| 企业 IT 自助台 | 远期；MVP 验证后再谈 |

---

## 5. 路线图

### 5.1 阶段 0 — 文档与边界

- IG 门槛、按问题分页原则冻结。  
- 明确：禁薄页铺量，不禁有 IG 的 `Fix X on {OS}` 深页。

### 5.2 阶段 1 — 先做透 1–2 个问题

- 例如 `fix-wifi-windows`：独立模块 + 过 §2.4 的站内页。  
- 本地菜单可聚合已有模块；SEO 主入口是问题页。

### 5.3 阶段 2 — 扩到高频问题页互链

- 约 6 个 Windows 问题页 + `related`；可选目录页 `repair-toolbox`。

### 5.4 阶段 3 — 加固

- 开发环境模块、macOS 对等深页（须重写）、签名与可选 GUI。

### 5.5 明确不做（近期）

- 无独立脚本、未过 IG 门槛的「Fix X」薄页矩阵  
- 同问题 Win10/11/repair 近义多 URL  
- 浏览器声称已修复 HID/网卡/打印后台  
- 为进 AI 摘要做专用 schema / llms.txt / 刷提及  
- 未经验证的「修复成功率」营销数字  

---

## 6. 分发与成功指标

| 项 | 说明 |
|---|---|
| 分发 | 问题深页下载对应模块；`repair-toolbox.cmd` 仅本地聚合 |
| 成功指标 | 该问题脚本跑通 + verify、GSC 对症查询、误修率；**不以** FAQ 富结果为 KPI |

---

## 7. 结论

```text
一问题一脚本模块 + 一问题一深页（Fix X on {OS}，OS 不通用）
```

- 「一个万能 repair-toolbox 页/脚本扛所有意图」**不合理**；目录页只能做导航。  
- `Fix X on Windows` **合理**，须用详细 IG + 该模块脚本撑住。  
- 最小路径：先做透 1–2 个 Windows 问题 → 扩到高频问题互链 → 再 macOS / 开发环境。  
- 扩展时先问：同问题是否已有页？IG 门槛是否过线？Win/Mac 是否 substantive 分轨？

---

## 8. 全部 slug 主题枚举

> 命名约定：`fix-{problem}-{os}`；目录页除外。  
> 下列均为**候选主题**；立项前须过 §2.4 IG 门槛与 `coverage:gate` 0b，未过线不得开站。  
> **不单独成 slug**（留在对应页内分支）：`…-windows-10` / `…-windows-11`、仅「连上没网」、仅 OEM 品牌词近义页。

### 8.1 目录页

| slug | 主题 | 阶段 |
|---|---|---|
| `repair-toolbox` | Repair 目录 / 导航（链到各问题页；不扛单一修复意图） | 可选，阶段 2+ |

### 8.2 Windows — MVP（优先）

| slug | 主题 | 本地模块 |
|---|---|---|
| `fix-touchpad-windows` | Fix touchpad on Windows | `fix-touchpad` |
| `fix-wifi-windows` | Fix Wi‑Fi on Windows（含「连上没网」页内分支） | `fix-wifi` |
| `fix-audio-windows` | Fix audio / sound on Windows | `fix-audio` |
| `fix-bluetooth-windows` | Fix Bluetooth on Windows | `fix-bluetooth` |
| `fix-printer-windows` | Fix printer on Windows | `fix-printer` |
| `fix-explorer-windows` | Fix File Explorer on Windows | `fix-explorer` |

### 8.3 Windows — 个人设备与网络（后续候选）

| slug | 主题 | 备注 |
|---|---|---|
| `fix-keyboard-windows` | Fix keyboard on Windows | |
| `fix-mouse-windows` | Fix mouse on Windows | USB / 蓝牙鼠标可页内分支 |
| `fix-camera-windows` | Fix camera on Windows | |
| `fix-microphone-windows` | Fix microphone on Windows | 可与 audio 互链；若 IG 不足可并入 `fix-audio-windows` |
| `fix-touchscreen-windows` | Fix touchscreen on Windows | |
| `fix-usb-windows` | Fix USB devices on Windows | |
| `fix-display-windows` | Fix external display on Windows | |
| `fix-network-windows` | Fix network / no internet on Windows | 与 wifi 互链；完整重置属 L3 |
| `fix-dns-windows` | Fix DNS on Windows | 若与 network IG 重叠则并入 `fix-network-windows` |
| `fix-vpn-windows` | Fix VPN on Windows | |
| `fix-proxy-windows` | Fix proxy on Windows | |
| `fix-windows-update` | Fix Windows Update | OS 已在名中，不追加 `-windows` 后缀 |
| `fix-clipboard-windows` | Fix clipboard on Windows | |
| `fix-input-method-windows` | Fix input method / IME on Windows | |
| `fix-time-sync-windows` | Fix time sync on Windows | |
| `collect-diagnostics-windows` | Collect diagnostics pack on Windows | 辅助页，非「Fix X」 |

### 8.4 Windows — 办公与会议（二期候选）

| slug | 主题 | 备注 |
|---|---|---|
| `fix-office-windows` | Fix Microsoft Office on Windows | |
| `fix-outlook-windows` | Fix Outlook on Windows | |
| `fix-browser-windows` | Fix browser issues on Windows | 缓存/证书等；勿按 Chrome/Edge 各拆一薄页 |
| `fix-onedrive-windows` | Fix OneDrive sync on Windows | |
| `fix-meeting-audio-windows` | Fix meeting mic/speaker on Windows | Zoom/Teams/腾讯会议等页内场景 |
| `fix-meeting-camera-windows` | Fix meeting camera on Windows | 若与 camera IG 重叠可合并 |

### 8.5 Windows — 开发环境（二期候选）

| slug | 主题 | 备注 |
|---|---|---|
| `fix-node-windows` | Fix Node.js project env on Windows | |
| `fix-python-windows` | Fix Python venv / pip on Windows | |
| `fix-git-windows` | Fix Git credentials / remote on Windows | |
| `fix-docker-windows` | Fix Docker Desktop on Windows | |
| `fix-port-in-use-windows` | Fix port in use on Windows | |
| `fix-vscode-windows` | Fix VS Code on Windows | 缓存/语言服务等 |

### 8.6 macOS — 对等主题（内容与脚本须重写后才开）

| slug | 主题 | 对位 Windows |
|---|---|---|
| `fix-trackpad-macos` | Fix trackpad on macOS | `fix-touchpad-windows` |
| `fix-wifi-macos` | Fix Wi‑Fi on macOS | `fix-wifi-windows` |
| `fix-audio-macos` | Fix audio on macOS | `fix-audio-windows` |
| `fix-bluetooth-macos` | Fix Bluetooth on macOS | `fix-bluetooth-windows` |
| `fix-printer-macos` | Fix printer on macOS | `fix-printer-windows` |
| `fix-keyboard-macos` | Fix keyboard on macOS | `fix-keyboard-windows` |
| `fix-mouse-macos` | Fix mouse on macOS | `fix-mouse-windows` |
| `fix-camera-macos` | Fix camera on macOS | `fix-camera-windows` |
| `fix-network-macos` | Fix network on macOS | `fix-network-windows` |
| `fix-dns-macos` | Fix DNS on macOS | 可并入 network |
| `fix-vpn-macos` | Fix VPN on macOS | `fix-vpn-windows` |
| `collect-diagnostics-macos` | Collect diagnostics on macOS | `collect-diagnostics-windows` |
| `fix-node-macos` | Fix Node.js env on macOS | `fix-node-windows` |
| `fix-python-macos` | Fix Python env on macOS | `fix-python-windows` |
| `fix-git-macos` | Fix Git on macOS | `fix-git-windows` |
| `fix-docker-macos` | Fix Docker Desktop on macOS | `fix-docker-windows` |
| `fix-port-in-use-macos` | Fix port in use on macOS | `fix-port-in-use-windows` |
| `fix-vscode-macos` | Fix VS Code on macOS | `fix-vscode-windows` |

### 8.7 明确不做的 slug 形态（反例）

| 反例 | 原因 |
|---|---|
| `fix-wifi-windows-11`、`fix-wifi-windows-10` | 版本近义拆页；默认页内分支 |
| `windows-11-wifi-repair`、`repair-wifi-windows` | 与已有问题页近义 |
| `fix-wifi`（无 OS） | OS 不通用；脚本与文案必须绑 OS |
| `fix-chrome-windows`、`fix-edge-windows`… | 浏览器品牌 doorway；并入 `fix-browser-windows` |
| `fix-zoom-windows`、`fix-teams-windows`… | 会议产品 doorway；并入 meeting 场景页 |

### 8.8 清单汇总（便于检索）

**目录**：`repair-toolbox`

**Windows MVP**：`fix-touchpad-windows`, `fix-wifi-windows`, `fix-audio-windows`, `fix-bluetooth-windows`, `fix-printer-windows`, `fix-explorer-windows`

**Windows 扩展**：`fix-keyboard-windows`, `fix-mouse-windows`, `fix-camera-windows`, `fix-microphone-windows`, `fix-touchscreen-windows`, `fix-usb-windows`, `fix-display-windows`, `fix-network-windows`, `fix-dns-windows`, `fix-vpn-windows`, `fix-proxy-windows`, `fix-windows-update`, `fix-clipboard-windows`, `fix-input-method-windows`, `fix-time-sync-windows`, `collect-diagnostics-windows`, `fix-office-windows`, `fix-outlook-windows`, `fix-browser-windows`, `fix-onedrive-windows`, `fix-meeting-audio-windows`, `fix-meeting-camera-windows`, `fix-node-windows`, `fix-python-windows`, `fix-git-windows`, `fix-docker-windows`, `fix-port-in-use-windows`, `fix-vscode-windows`

**macOS**：`fix-trackpad-macos`, `fix-wifi-macos`, `fix-audio-macos`, `fix-bluetooth-macos`, `fix-printer-macos`, `fix-keyboard-macos`, `fix-mouse-macos`, `fix-camera-macos`, `fix-network-macos`, `fix-dns-macos`, `fix-vpn-macos`, `collect-diagnostics-macos`, `fix-node-macos`, `fix-python-macos`, `fix-git-macos`, `fix-docker-macos`, `fix-port-in-use-macos`, `fix-vscode-macos`
