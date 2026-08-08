Date: 2026-08-08 20:51
Summary: Created work-tasks brief for domain-lookup (ready + 0b gate green); updated inventory row #9.

[question]
立项：domain-lookup

[try to solve]
已完成 `domain-lookup` 立项 brief，并通过 `coverage:gate --phase=0b`。

**产物**（`work-tasks/domain-lookup/`）

- `00-request.md`：用户原问（域名查询实现 + 立项）
- `01-direction-discussion.md`：主方向 A.10；不拆 whois/dns/rdap 薄页
- `02-tool-info.md`：状态 `ready`；MVP = DoH（扩 MX/NS/TXT/SOA）+ RDAP 分区；进页样例 `example.com`；related：`add-www-to-dns` / `website-headers` / `ip-address`
- `03-locale-briefs.md`：十语 brief + 行 `0b`；状态 `briefs-ready`

**SEO 0b**

- H1 方向：`Domain Lookup — Check DNS Records & Registration Online`
- 去掉参数枚举腔；whois/dns/expiry 落 desc/FAQ
- `npm run coverage:gate -- --slug=domain-lookup --phase=0b` → OK

**清单表**

- `docs/2026-08-08-tool-inventory-table.md` 序号 9：`domain-lookup`，进度「进行中」；全表 1–116

下一步：用户明确要求实现后再按 `tool-creation` + coverage 步 2/4 写页面与 i18n。

[actions]
- 新建 `work-tasks/domain-lookup/{00,01,02,03}.md`
- 更新 `docs/2026-08-08-tool-inventory-table.md`
- `npm run coverage:gate -- --slug=domain-lookup --phase=0b`
