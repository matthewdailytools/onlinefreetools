Date: 2026-08-08 23:41
Summary: Removed the Dev Logs link from the site footer.

[question]
底部删除devlog入口

[try to solve]
Removed the Dev Logs footer entry (zh label was 开发日志). Updated `FOOTER_LINKS` in `src/pages/site/footer.ts` and `scripts/site/components/footer.mjs`, then ran `npm run build:site` to refresh static pages. Footer now keeps only About / Privacy / Terms / Contact; the `/devlogs/` route and pages themselves were not deleted.

[actions]
- Updated `src/pages/site/footer.ts`
- Updated `scripts/site/components/footer.mjs`
- Ran `npm run build:site`
