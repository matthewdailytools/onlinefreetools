Date: 2026-08-13 00:34
Summary: Report current _pages gzip ratio (~82.5% saved) and that level is already max.

[question]
gzip 目前的压缩率是多少，能增加么？

[try to solve]
1510 对文件：总体 HTML 138.45MB → gzip 24.19MB，体积约保留 17.5%（节省 ~82.5%）；中位 gz/html≈0.175。脚本已用 `createGzip({ level: 9 })`（zlib 最高）。相对 level 6 几乎无增益；Brotli q11 可再小约 20–30% 相对 gzip，但 Worker 现只 gunzip，换格式要改存储与解压。结论：gzip 侧已顶满，再压需换算法或减 HTML 源体积。

[actions]
- （只读测量，无代码改动）
