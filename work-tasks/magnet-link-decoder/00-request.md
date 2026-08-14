# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

重新立项：magnet-link-decoder

## 已知约束

- 参考现有工具：`jwt-decoder`（结构化解码 + 明确 no-verify/no-download 边界）、`base64`（编码边界）、`file-hash`（hash/校验邻近 intent）。
- 必须本地处理：是。只在浏览器内解析粘贴的 magnet URI；不上传、不联网、不连 tracker/DHT/peer。
- YMYL：否。
- 优先语言：先 en 母版，随后按 10 语 brief 独立重写。
- 其他：
  - 工具定位为 **Magnet Link Decoder / Magnet URI Parser**，不是 torrent downloader、not a torrent-to-file converter。
  - 长尾 `magnet link parser`、`decode magnet uri`、`info hash extractor` 合并进同页 Use cases / FAQ，不拆近义 URL。

## 建议 slug

- `magnet-link-decoder`
