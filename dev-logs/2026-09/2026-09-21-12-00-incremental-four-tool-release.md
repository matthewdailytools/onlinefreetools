Date: 2026-09-21 12:00
Summary: Prepare the four-tool release with incremental R2 upload and pages cache version 4.77.
Visibility: project

[question]
增量 deploy and upload r2

## Tool links (English)

- https://onlinefreetools.org/tools/extract-text-from-a-scanned-pdf
- https://onlinefreetools.org/tools/bulk-strip-photo-exif
- https://onlinefreetools.org/tools/batch-watermark-pdf-drafts
- https://onlinefreetools.org/tools/bulk-optimize-svg-icon-set

[try to solve]

The release reuses the completed full build and its accepted browser outputs.
The previous run passed all 12 new-tool gates, 40 localized mobile pages, SEO and
vendor checks. The four existing invalid video taxonomy subjects remain a separate
baseline issue; they are not part of the deployment script's preflight checks.

The source release commit is c8f1fa4f. The production branch was synchronized with
origin/main before committing. PAGES_CACHE_VERSION moves from 4.76 to 4.77.
No new full build or forced full R2 upload is requested for this release.

The R2 manifest comparison selects 530 changed objects from 3260 local compressed
pages, reusing 2730 unchanged objects. The release sequence is changed HTML upload,
changed OG asset upload, R2 content-hash/version verification, then main-branch push
for Cloudflare Worker and Assets publication. The Worker must not be pushed before
R2 verification succeeds.

Live acceptance checks compare /api/ops/pages-build with version 4.77 and inspect
all 40 localized tool pages, the four new icons and homepage links. Local generated
pages, R2 upload, Git push and a live Worker response are separate milestones.
