Date: 2026-08-07 13:21
Summary: Fix invalid control character in image-exif.svg XML comment

[question]
http://localhost:8787/icons/tools/image-exif.svgThis page contains the following errors:
error on line 6 at column 8: xmlParseComment: invalid xmlChar value 7
Below is a rendering of the page up to the first error

[try to solve]
根因是 `public/icons/tools/image-exif.svg` 第 6 行 XML 注释里混入了非法控制字符 `0x07`（BEL），XML 解析器无法处理。

已将损坏注释 `<!-- ~/Cpna -->` 替换为 `<!-- EXIF 元数据条 -->`（与同目录 `image-format-converter.svg` 的中文注释风格一致）。修复后 PowerShell XML 解析通过。

顺带修复了 `image-compress.svg` 中同样损坏的注释（含 `0x1A` 等非法字符），避免同类报错。

[actions]
- `public/icons/tools/image-exif.svg`：修正第 6 行注释
- `public/icons/tools/image-compress.svg`：修正第 3、7 行注释
