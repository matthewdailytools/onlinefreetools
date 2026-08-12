# Repair Toolbox 一键修复工具箱方案文档

## 1. 背景与目标

Repair Toolbox 的核心概念是：把常见的电脑、办公、开发、数据和业务系统问题，沉淀成可复用的一键诊断与修复流程。

它不是简单堆脚本，而是一套标准化自助修复体系：

```text
常见问题 -> 自动诊断 -> 低风险修复 -> 验证结果 -> 输出报告和下一步建议
```

目标用户可以包括：

- 个人电脑用户
- 公司 IT 支持人员
- 运营、数据、财务、客服团队
- 开发者和技术团队
- 电商、跨境、内容营销团队
- 中小企业内部自助服务台

最终形态可以是：

- 本地脚本工具箱
- Windows/macOS 桌面工具
- 企业内网自助修复平台
- 运营数据自动修复和校验系统
- IT Helpdesk 辅助诊断工具

## 2. 核心原则

### 2.1 一键完成

用户不需要理解复杂命令，只需要选择问题类型，工具自动执行：

1. 检测环境
2. 定位常见异常
3. 执行安全修复动作
4. 验证修复结果
5. 给出成功、失败或人工处理建议

### 2.2 默认安全

默认只执行低风险动作，例如：

- 重启相关服务
- 重新扫描硬件
- 启用被禁用的设备
- 刷新缓存
- 打开系统设置页
- 收集诊断信息

高风险动作必须进入高级模式，例如：

- 删除缓存目录
- 重置网络栈
- 禁用再启用硬件设备
- 清空打印队列
- 卸载或重装驱动
- 修改注册表
- 修改系统权限

### 2.3 诊断优先

每个修复模块都应该先诊断，再修复。避免盲目执行。

标准流程：

```text
detect  ->  repair  ->  verify  ->  report
诊断       修复        验证        报告
```

### 2.4 平台区分

Windows 和 macOS 必须分开处理。两者的设备模型、服务机制、权限系统、驱动体系完全不同。

同时也应区分系统版本、硬件架构和设备品牌。

## 3. 操作系统与版本区分

### 3.1 为什么要区分 Windows 和 macOS

Windows 的修复方式主要依赖：

- PowerShell
- PnP 设备管理
- Windows 服务
- 注册表
- 设备管理器
- netsh、ipconfig、pnputil 等系统命令

macOS 的修复方式主要依赖：

- Bash/Zsh
- launchctl
- system_profiler
- ioreg
- networksetup
- diskutil
- 隐私与安全权限
- 系统设置入口

因此同一个问题，例如“触摸板失效”，在 Windows 和 macOS 上需要完全不同的处理方案。

### 3.2 Windows 需要区分的维度

| 维度 | 说明 |
|---|---|
| Windows 10 / Windows 11 | 设置入口、部分服务行为、设备管理差异 |
| 家庭版 / 专业版 / 企业版 | 组策略、BitLocker、域控限制不同 |
| x64 / ARM64 | 驱动包和部分工具行为不同 |
| 品牌机型 | 联想、戴尔、惠普、华硕等热键和 OEM 服务不同 |
| Precision Touchpad / Synaptics / ELAN / I2C HID | 触摸板设备名称和驱动不同 |
| 是否公司管控设备 | MDM、域策略可能禁止修改网络、蓝牙、更新服务 |

Windows 环境识别示例：

```powershell
Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, OsBuildNumber, OsArchitecture
Get-PnpDevice
Get-Service
```

### 3.3 macOS 需要区分的维度

| 维度 | 说明 |
|---|---|
| Intel / Apple Silicon | NVRAM、SMC、恢复模式、启动安全策略不同 |
| macOS 大版本 | 系统设置路径、隐私权限、网络工具行为不同 |
| MacBook 内置触控板 / 外接 Magic Trackpad | 处理方式不同 |
| 蓝牙触控板 / USB 外设 | 涉及蓝牙服务、USB 枚举、电量检查 |
| 是否 MDM 管控 | 企业设备可能禁止修改网络、隐私和系统扩展 |
| SIP 状态 | 某些系统级操作无法脚本化 |

macOS 环境识别示例：

```bash
sw_vers
uname -m
system_profiler SPHardwareDataType
system_profiler SPBluetoothDataType
```

### 3.4 推荐架构

不要为每个系统版本复制一整套脚本，而是采用：

```text
通用入口 -> 识别系统 -> 识别版本 -> 识别硬件 -> 调用对应修复模块
```

推荐目录：

```text
repair-toolbox/
  windows/
    common/
    win10/
    win11/
  macos/
    common/
    intel/
    apple-silicon/
  common/
```

## 4. 个人电脑与办公设备修复

### 4.1 适用范围

这一类是 Repair Toolbox 的基础能力，解决个人电脑和办公外设的常见故障。

### 4.2 场景清单

| 场景 | 典型表现 | 一键处理思路 |
|---|---|---|
| 触摸板失效 | 触摸板没反应、设置中消失 | 启用/重启 HID、I2C、Touchpad 设备，重启 HID 服务，扫描硬件 |
| 外接鼠标失效 | USB/蓝牙鼠标无反应 | 重启 HID/USB 设备，重启蓝牙服务，重新枚举 USB |
| 键盘失效 | 按键无响应、Fn 异常 | 重启 Keyboard/HID 设备，检查筛选键，重启输入服务 |
| 蓝牙失效 | 蓝牙开关消失、耳机连不上 | 重启 Bluetooth Support Service，重启蓝牙适配器 |
| Wi-Fi 消失 | WLAN 开关消失、搜不到网络 | 重启 WLAN AutoConfig，启用无线网卡，重置网络配置 |
| 能连 Wi-Fi 但没网 | 有连接但无法访问网页 | 刷新 DHCP、DNS，重置 Winsock/IP，重启网卡 |
| 声音没了 | 无输出设备、扬声器无声 | 重启 Windows Audio，启用音频设备，重新扫描硬件 |
| 麦克风失效 | 会议软件无法收音 | 启用输入设备，检查隐私权限，重启音频服务 |
| 摄像头失效 | 相机黑屏、设备占用 | 启用 Camera 设备，重启 Frame Server，检查隐私权限 |
| 触摸屏失效 | 屏幕触控无反应 | 重启 HID-compliant touch screen，扫描硬件 |
| USB 设备不识别 | U 盘、扩展坞无反应 | 重启 USB Root Hub/控制器，扫描硬件 |
| 打印机离线 | 打印队列卡住 | 重启 Print Spooler，清理卡住任务 |
| 外接显示器异常 | 外接屏不亮、分辨率异常 | 重启显卡驱动，重新检测显示器 |
| Windows 更新卡住 | 下载或安装失败 | 重启更新服务，清理更新缓存 |
| 应用商店异常 | Store 打不开或下载失败 | 重置 Store 缓存，重启相关服务 |
| 电池/充电异常 | 不充电、电池图标异常 | 重启 ACPI 电池设备，重新扫描硬件 |
| 系统卡顿 | CPU 或内存异常占用 | 查找高占用进程，重启资源管理器 |
| 资源管理器卡死 | 桌面、任务栏无响应 | 重启 explorer.exe |
| 剪贴板失效 | 复制粘贴无反应 | 清空剪贴板，重启资源管理器 |
| 输入法异常 | 中文输入不出来 | 重启 ctfmon，重启 Text Input 服务 |
| 时间不同步 | 证书异常、网页打不开 | 重启时间服务并同步 NTP |
| VPN/代理异常 | 网页打不开但网络正常 | 关闭残留代理，刷新 DNS，检查路由 |

### 4.3 建议模块

```text
repair-toolbox/personal-device/
  fix-touchpad/
  fix-keyboard/
  fix-mouse-usb/
  fix-bluetooth/
  fix-wifi/
  fix-network/
  fix-audio/
  fix-camera/
  fix-printer/
  fix-display/
  fix-windows-update/
  fix-explorer/
  fix-input-method/
```

## 5. 网络与企业办公环境

### 5.1 场景清单

| 类别 | 一键解决场景 |
|---|---|
| 网络连接 | DNS 错误、无法访问内网、Wi-Fi 连上没网、IP 冲突 |
| VPN | VPN 连不上、路由异常、证书过期提示 |
| 代理 | 系统代理残留、浏览器代理异常、开发代理端口冲突 |
| 打印网络 | 打印机离线、共享打印机无法连接 |
| 域账号/权限 | 域登录异常、共享盘打不开、凭据缓存错误 |
| 邮箱 | Outlook 连接失败、邮箱配置异常、缓存损坏 |
| 共享盘 | SMB 连接失败、凭据错误、权限不足 |

### 5.2 建议模块

```text
repair-toolbox/network/
  fix-dns/
  fix-ip/
  fix-proxy/
  fix-vpn/
  fix-shared-drive/
  fix-office-network-printer/
```

### 5.3 网络修复标准流程

```text
detect:
  - 检查网卡状态
  - 检查 IP、网关、DNS
  - 检查代理和 VPN
  - 测试网关、DNS、外网、内网

repair:
  - 重启网卡
  - 刷新 DNS
  - 续租 DHCP
  - 清理残留代理
  - 可选重置 Winsock/IP

verify:
  - ping 网关
  - DNS 解析测试
  - 访问测试网址
  - 访问企业内网地址

report:
  - 输出网络状态
  - 输出失败节点
  - 给出下一步建议
```

## 6. 办公软件与会议工具

### 6.1 场景清单

| 类别 | 一键解决场景 |
|---|---|
| Office | Word/Excel/PPT 卡死、模板损坏、授权异常、字体缺失 |
| 浏览器 | 网页打不开、证书异常、缓存损坏、插件冲突 |
| 输入法 | 中文输入异常、候选框消失、快捷键冲突 |
| 文件同步 | OneDrive、iCloud、Google Drive、企业网盘同步卡住 |
| 会议软件 | Zoom、Teams、腾讯会议麦克风/摄像头/扬声器异常 |
| PDF 工具 | 打不开、打印失败、字体显示异常 |

### 6.2 建议模块

```text
repair-toolbox/office/
  fix-office/
  fix-outlook/
  fix-browser/
  fix-onedrive/
  fix-meeting/
  fix-pdf/
```

## 7. 开发者环境

### 7.1 适用范围

开发环境非常适合做一键修复，因为问题重复、流程明确、诊断信息可自动收集。

### 7.2 场景清单

| 类别 | 一键解决场景 |
|---|---|
| Node.js | node_modules 损坏、依赖冲突、端口占用、lockfile 异常 |
| Python | 虚拟环境损坏、pip 源异常、依赖缺失、编码问题 |
| Git | 分支状态检查、冲突提示、凭据失效、远程连接失败 |
| Docker | 容器起不来、端口冲突、镜像缓存异常、Docker Desktop 卡住 |
| 数据库 | MySQL/Postgres/Redis 服务未启动、端口占用、连接失败 |
| IDE | VS Code 插件异常、语言服务卡死、缓存损坏 |
| 本地服务 | 端口冲突、进程残留、健康检查失败 |

### 7.3 建议模块

```text
repair-toolbox/dev/
  node/
  python/
  git/
  docker/
  database/
  vscode/
  port-checker/
  log-collector/
```

### 7.4 Node 项目一键修复示例

```text
detect:
  - 检查 Node/npm/pnpm/yarn 版本
  - 检查 package.json
  - 检查 lockfile 类型
  - 检查 node_modules 状态
  - 检查端口占用

repair:
  - 可选清理 node_modules
  - 可选清理 package manager 缓存
  - 重新安装依赖
  - 释放或提示占用端口

verify:
  - 执行 lint/test/build
  - 启动 dev server
  - 请求健康检查接口

report:
  - 输出版本信息
  - 输出修复动作
  - 输出失败命令和建议
```

## 8. 电商与运营系统

### 8.1 适用范围

对于电商、跨境和数据运营团队，Repair Toolbox 可以从“电脑修复工具”延伸为“运营数据自检与修复工具”。

### 8.2 场景清单

| 类别 | 一键解决场景 |
|---|---|
| 店铺数据 | 订单文件格式错误、字段缺失、编码乱码、日期格式混乱 |
| 广告数据 | 报表无法合并、花费/转化字段异常、币种不一致 |
| 商品数据 | SKU 重复、标题超长、图片链接失效、类目缺失 |
| 库存数据 | 库存负数、仓库编码不一致、缺货预警 |
| 价格数据 | 毛利为负、汇率未更新、促销价高于原价 |
| 平台报表 | Amazon、Shopify、TikTok Shop、Temu、Shein 报表清洗 |
| 财务对账 | 订单金额、退款、手续费、广告费、物流费自动核对 |

### 8.3 建议模块

```text
repair-toolbox/ecommerce/
  sku-cleaner/
  order-checker/
  ads-report-fixer/
  inventory-checker/
  price-checker/
  platform-report-cleaner/
  reconciliation/
```

### 8.4 电商报表修复示例

```text
detect:
  - 自动识别平台来源
  - 检查编码、分隔符、表头
  - 检查必填字段
  - 检查日期、金额、币种格式

repair:
  - 统一字段名
  - 修复乱码
  - 标准化日期
  - 转换金额类型
  - 合并多平台字段映射

verify:
  - 校验行数
  - 校验订单金额合计
  - 校验重复订单或重复 SKU

report:
  - 输出清洗后的文件
  - 输出异常记录
  - 输出可疑数据清单
```

## 9. 数据分析与 BI

### 9.1 场景清单

| 类别 | 一键解决场景 |
|---|---|
| Excel/CSV | 乱码、分隔符错误、空列、重复行、日期识别错误 |
| 数据清洗 | 缺失值、异常值、字段标准化、单位换算 |
| 报表生成 | 日报、周报、月报、渠道分析自动生成 |
| 数据校验 | 总金额、行数、字段完整性、重复主键核对 |
| 可视化 | 自动生成图表、异常趋势提示 |
| 数据库导入 | CSV 导入失败、字段类型不匹配、编码错误 |

### 9.2 建议模块

```text
repair-toolbox/data/
  csv-fix/
  excel-fix/
  data-validator/
  report-generator/
  dashboard-checker/
  database-import-fix/
```

### 9.3 CSV/Excel 一键修复示例

```text
detect:
  - 自动识别编码
  - 自动识别分隔符
  - 检查空行、空列、重复表头
  - 检查日期和数字格式

repair:
  - 转换为 UTF-8
  - 标准化列名
  - 删除完全空行
  - 修复常见日期格式
  - 导出为干净版本

verify:
  - 比较原始行数和清洗后行数
  - 输出异常单元格
  - 输出字段类型摘要

report:
  - 生成清洗报告
  - 生成异常数据文件
```

## 10. 客服与工单

### 10.1 场景清单

| 类别 | 一键解决场景 |
|---|---|
| 工单分类 | 自动判断退款、物流、质量、账户、投诉类别 |
| 常见回复 | 根据问题生成标准回复 |
| 售后处理 | 自动检查订单状态、物流状态、退款状态 |
| 投诉升级 | 识别高风险投诉、差评、平台申诉 |
| 知识库 | 从历史工单提炼 FAQ |

### 10.2 建议模块

```text
repair-toolbox/customer-service/
  ticket-classifier/
  refund-helper/
  logistics-checker/
  reply-generator/
  complaint-risk-checker/
  faq-builder/
```

## 11. 财务与对账

### 11.1 场景清单

| 类别 | 一键解决场景 |
|---|---|
| 银行流水 | 自动分类收入/支出、识别异常交易 |
| 平台回款 | 回款金额与订单金额核对 |
| 发票 | 发票字段校验、重复发票检查 |
| 费用 | 广告费、物流费、手续费自动归类 |
| 汇率 | 多币种金额统一换算 |
| 利润 | SKU、店铺、渠道毛利自动计算 |

### 11.2 建议模块

```text
repair-toolbox/finance/
  reconciliation/
  invoice-checker/
  expense-classifier/
  exchange-rate-normalizer/
  profit-checker/
```

### 11.3 对账工具示例

```text
detect:
  - 读取订单、退款、回款、广告、物流文件
  - 识别订单号、金额、币种、日期字段
  - 检查重复交易和缺失记录

repair:
  - 标准化订单号
  - 统一币种
  - 合并同一订单多笔费用
  - 标记异常差异

verify:
  - 订单金额 vs 回款金额
  - 回款金额 vs 银行流水
  - 平台费用 vs 财务分类

report:
  - 输出对账差异表
  - 输出异常交易清单
  - 输出利润汇总表
```

## 12. 内容与营销

### 12.1 场景清单

| 类别 | 一键解决场景 |
|---|---|
| 商品文案 | 标题超长、敏感词、重复词、关键词缺失 |
| 图片素材 | 图片尺寸不合规、背景不合规、压缩、重命名 |
| SEO | 标题、描述、关键词检查 |
| 广告投放 | 素材命名混乱、UTM 缺失、预算异常 |
| 社媒内容 | 批量生成标题、标签、发布时间表 |

### 12.2 建议模块

```text
repair-toolbox/marketing/
  copy-checker/
  image-checker/
  seo-checker/
  campaign-checker/
  utm-checker/
  content-calendar/
```

## 13. 安全与合规

### 13.1 原则

安全与合规模块默认只做检测和报告，不自动执行破坏性修复。

原因：

- 容易误删重要数据
- 权限变更风险高
- 涉及隐私和合规责任
- 企业设备可能受 MDM 或域策略控制

### 13.2 场景清单

| 类别 | 一键解决场景 |
|---|---|
| 账号安全 | 弱密码提示、MFA 状态检查 |
| 文件安全 | 敏感信息扫描、身份证/手机号/邮箱泄露检测 |
| 权限 | 共享文件权限过宽检查 |
| 日志 | 异常登录、异常 IP、异常下载 |
| 合规 | GDPR、数据脱敏、隐私字段识别 |

### 13.3 建议模块

```text
repair-toolbox/security/
  sensitive-data-scan/
  permission-check/
  account-risk-check/
  log-risk-check/
  data-desensitizer/
```

## 14. 公司 IT 自助服务台

### 14.1 定位

公司内部可以把 Repair Toolbox 做成 IT Helpdesk 的前置自助工具。员工遇到常见问题时先运行工具，工具尝试修复；如果无法修复，则自动收集诊断包并生成工单材料。

### 14.2 建议模块

```text
repair-toolbox/it-helpdesk/
  fix-network/
  fix-printer/
  fix-vpn/
  fix-office/
  fix-email/
  fix-meeting/
  collect-diagnostics/
  submit-ticket/
```

### 14.3 一键收集诊断包

```text
collect-diagnostics:
  - 系统版本
  - 设备列表
  - 网络状态
  - 服务状态
  - 最近错误日志
  - 磁盘空间
  - 当前用户权限
  - 关键应用版本
  - 报错截图或日志文件
  - 打包成 zip
```

## 15. 总体目录设计

推荐一级目录：

```text
repair-toolbox/
  personal-device/
  network/
  office/
  dev/
  data/
  ecommerce/
  finance/
  marketing/
  customer-service/
  security/
  it-helpdesk/
  windows/
  macos/
  common/
  docs/
```

推荐每个模块统一结构：

```text
module-name/
  README.md
  detect.*
  repair.*
  verify.*
  report.*
  config.json
  logs/
```

Windows 模块示例：

```text
fix-touchpad/
  README.md
  detect.ps1
  repair.ps1
  verify.ps1
  report.ps1
  fix-touchpad.cmd
```

macOS 模块示例：

```text
fix-trackpad/
  README.md
  detect.sh
  repair.sh
  verify.sh
  report.sh
```

## 16. 通用执行流程

每个工具都应该遵循同一套生命周期：

```text
1. precheck
   - 检查系统
   - 检查权限
   - 检查是否公司管控设备
   - 检查是否需要管理员权限

2. detect
   - 收集当前状态
   - 判断是否命中常见问题
   - 生成诊断摘要

3. repair
   - 执行低风险修复
   - 高风险动作需要用户确认
   - 记录每一步结果

4. verify
   - 测试问题是否恢复
   - 对比修复前后状态
   - 判断成功、部分成功、失败

5. report
   - 输出人类可读报告
   - 输出机器可读 JSON
   - 给出下一步建议
```

## 17. 权限与安全设计

### 17.1 权限级别

| 级别 | 动作 | 是否默认执行 |
|---|---|---|
| Level 0 | 只读检测 | 是 |
| Level 1 | 重启用户态应用或服务 | 是 |
| Level 2 | 启用/重启设备、刷新网络 | 谨慎默认 |
| Level 3 | 清理缓存、重置网络栈 | 需要确认 |
| Level 4 | 修改注册表、卸载驱动、删除数据 | 高级模式 |

### 17.2 审计日志

每次修复应记录：

- 执行时间
- 当前用户
- 系统版本
- 模块名称
- 诊断结果
- 执行动作
- 命令输出摘要
- 成功或失败状态
- 错误信息

推荐日志格式：

```text
logs/
  2026-08-12_153000_fix-touchpad.log
  2026-08-12_153000_fix-touchpad.json
```

## 18. 用户体验设计

### 18.1 命令行形态

适合初期快速落地：

```text
repair-toolbox.cmd

1. 修复触摸板
2. 修复键盘/鼠标
3. 修复 Wi-Fi
4. 修复蓝牙
5. 修复声音
6. 修复摄像头
7. 修复打印机
8. 修复 Windows 更新
9. 重启资源管理器
10. 网络完整重置
```

### 18.2 桌面应用形态

适合普通用户：

- 左侧分类导航
- 中间问题卡片
- 右侧诊断结果
- 一键修复按钮
- 高级模式开关
- 日志和报告导出

### 18.3 企业平台形态

适合 IT Helpdesk：

- 员工自助修复
- 自动生成诊断包
- 工单系统集成
- 设备资产信息关联
- 管理员远程下发修复任务
- 修复成功率统计

## 19. 优先级路线图

### 19.1 第一阶段：个人电脑修复

优先做 10 个高频模块：

1. fix-touchpad
2. fix-keyboard
3. fix-mouse-usb
4. fix-wifi
5. fix-network
6. fix-bluetooth
7. fix-audio
8. fix-camera
9. fix-printer
10. fix-explorer

### 19.2 第二阶段：办公与开发环境

1. fix-office
2. fix-browser
3. fix-meeting
4. fix-node-project
5. fix-python-project
6. fix-git
7. fix-docker
8. port-checker
9. log-collector
10. collect-diagnostics

### 19.3 第三阶段：数据与运营

1. csv-fix
2. excel-fix
3. data-validator
4. ecommerce-report-cleaner
5. order-checker
6. sku-cleaner
7. ads-report-fixer
8. inventory-checker
9. reconciliation
10. profit-checker

### 19.4 第四阶段：企业化

1. 图形界面
2. 权限策略
3. 日志中心
4. 远程诊断
5. 工单系统集成
6. 企业设备策略适配
7. 修复成功率统计
8. 模块市场或插件机制

## 20. 首批 MVP 建议

如果从当前目录开始落地，建议先做一个 Windows 版 MVP：

```text
repair-toolbox/
  repair-toolbox.cmd
  modules/
    fix-touchpad/
    fix-wifi/
    fix-audio/
    fix-bluetooth/
    fix-printer/
    fix-explorer/
  common/
    admin-check.ps1
    logger.ps1
    system-info.ps1
    report-writer.ps1
  logs/
  docs/
```

首批功能：

- 自动识别 Windows 版本
- 自动检查管理员权限
- 菜单选择修复项
- 每个模块生成日志
- 每个模块输出成功/失败状态
- 高风险动作二次确认

## 21. 商业价值方向

### 21.1 个人工具

面向普通用户：

- 一键修电脑
- 一键修网络
- 一键修打印机
- 一键修会议设备

### 21.2 企业 IT 工具

面向公司：

- 降低 IT 工单量
- 标准化故障处理流程
- 自动收集诊断信息
- 提升远程办公支持效率

### 21.3 开发者工具

面向研发团队：

- 一键修开发环境
- 一键检查项目依赖
- 一键诊断端口和服务
- 一键生成环境报告

### 21.4 数据运营工具

面向运营和数据团队：

- 一键修 CSV/Excel
- 一键清洗平台报表
- 一键校验订单和 SKU
- 一键生成对账差异表

## 22. 结论

Repair Toolbox 的真正价值不在于某一个脚本，而在于形成可扩展、可审计、可复用的“一键修复标准流程”。

推荐最终定位：

```text
一键修复电脑、办公、开发、数据和运营问题的本地工具箱。
```

最小可行路线是：

```text
先做 Windows 高频故障修复
再做开发环境修复
再扩展到数据清洗和运营校验
最后产品化为企业自助服务台
```

