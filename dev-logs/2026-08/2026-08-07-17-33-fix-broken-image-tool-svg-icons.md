Date: 2026-08-07 17:33
Summary: Fixed broken image tool SVG icons caused by corrupted Chinese XML comments.

[question]
http://localhost:8787/icons/tools/image-format-converter.svg；http://localhost:8787/icons/tools/image-compress.svg；图片出错

[try to solve]
改色时 PowerShell 重写 SVG 损坏了中文注释字节，浏览器按 XML 解析失败。已将 image-compress / image-format-converter / image-exif 注释改为 ASCII，与 image-optimizer 一致。

[actions]
- 修复 public/icons/tools/image-compress.svg
- 修复 public/icons/tools/image-format-converter.svg
- 修复 public/icons/tools/image-exif.svg
