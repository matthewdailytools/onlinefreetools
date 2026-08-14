# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：粘贴 `magnet:?` 链接后，在浏览器内解析 `xt`、`dn`、`tr`、`xl`、`ws`、`xs`、`x.pe` 等参数，解码百分号编码，校验 BitTorrent v1/v2 info hash 形态，并输出结构化表格和可复制字段。
- 谁在什么任务里用：开发者、站点管理员、内容审核人员或普通用户需要检查一个 magnet URI 指向的 hash、显示名、tracker 列表和格式边界，但不想打开 torrent 客户端或触发下载。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | URL / URI 解析、percent decode、重复参数聚合、hash 形态校验均可用原生 JS 完成；Tier 0，无需依赖。 |
| **B** 场景桥接 | 弱 | 有“粘贴链接 → 结构化字段”的调试场景，可与 `base64`、`file-hash`、`jwt-decoder` 互链，但不是上下游格式转换主线。 |
| **C** 行业专属 | 否 | BitTorrent/magnet 是协议场景，不需要行业岗位标准或垂直业务公式。 |

**选定主方向**：A（浏览器 JS 能力 · URI/parser · Tier 0）
**次要互链参考**：`base64`、`file-hash`、`jwt-decoder`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体：站内无 magnet/torrent 工具；本页提供字段解释、校验和边界。
- [x] 不是无增量机翻铺量：先立项和 0b 覆盖，后续 i18n 须按每语 brief 重写。
- [x] 不依赖偏离定位的重后端：不下载、不连 tracker/DHT、不抓元数据。
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL：`magnet parser`、`info hash extractor`、`tracker list viewer` 都进本页。

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：成熟；原生 `URL` / `URLSearchParams` + 安全的 decode fallback + regex 校验即可。无需 torrent 库。
- Tier（0 / 1 / 2）：Tier 0。
- CWV / 懒加载注意：首屏无 WASM、无网络请求；样例自动解析即可。大输入只限制长度和参数数量。

### 若选 B

- 场景链（从哪到哪）：magnet URI 文本 → 结构化字段 / info hash / tracker 列表 / warnings。
- 上游 / 下游工具：`base64`（编码概念）、`file-hash`（hash/校验概念）、`jwt-decoder`（结构化解码边界）。

### 若选 C

立项三问（任一「否」则暂缓）：

1. 能否一句话说清「哪个岗位在什么业务里用」？否 — 不是行业专属。
2. 能否写出该行业才有的对照表/边界/标准？否 — 是通用协议字段。
3. 实现是否落在可行浏览器技术且 CWV 可控？是 — 但仍归 A。

## 结论

- 继续立项：是。
- 建议 slug：`magnet-link-decoder`。
- 与已上线工具关系：新建工具；Related 建议 `base64`、`file-hash`、`jwt-decoder`。
- 进入 `02-tool-info.md` 前仍缺的信息：无；需要在 `02` 明确 no download / no metadata fetch / no copyright promise 边界，并写入 BEP 9、Magnet URI、URI decode references。
