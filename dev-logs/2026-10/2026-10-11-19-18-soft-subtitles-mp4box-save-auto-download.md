Date: 2026-10-11 19:18
Summary: The soft-subtitles MP4 page downloaded a file on open because mp4box.js `save()` clicks a hidden download link; it now builds the Blob with `getBuffer()` and only downloads when the user clicks Download.
Visibility: people

[question]
https://onlinefreetools.org/tools/add-soft-subtitles-to-an-mp4 为什么会存在一打开就下载的功能

## Tool links (English)
- https://onlinefreetools.org/tools/add-soft-subtitles-to-an-mp4

[try to solve]
## Context

Opening the Add soft subtitles to an MP4 page immediately saved a file called `subtitled.mp4`, before the user had done anything. Like the other converter pages, this one runs the built-in sample automatically on load so the result area is populated. That sample run should only show a preview and enable the Download button.

## Process

1. Checked the page's own code (`public/js/soft-mp4-subtitles.js`). Its `download()` helper is called only from the Download MP4 and Download SRT button handlers, so the site code never downloads on its own.
2. Checked the production response headers for the HTML and the script. Both had the normal `Content-Type` and no `Content-Disposition`, which ruled out the browser treating a resource as a file.
3. Looked at the muxing step. It ended with `mp4.save('subtitled.mp4')`. In `public/vendor/extract-audio/mp4box.all.iife.js`, `ISOFile.save(name)` calls `DataStream.save(filename)`. That method creates an `<a download>` element, appends it to the page, calls `a.click()` and removes it.
4. Reproduced the bug on production with Playwright by listening for download events. Loading the page alone triggered one download, `subtitled.mp4`, and the name matched the argument passed to `save()`.
5. Scanned other tools for library calls that save files by themselves (`saveAs`, jsPDF/html2pdf `save`, `XLSX.writeFile`). The `doc.save()` calls belong to pdf-lib, which returns bytes and never downloads. The only `XLSX.writeFile` call sits behind a click handler. No other tool was affected.

## Root cause / analysis

mp4box.js's `save()` is a convenience method that serialises the file and triggers a browser download. It does not just return data. Because the automatic sample run goes through the same `run()` pipeline as a real conversion, every page load produced an unsolicited download. The tool's own Download button then offered the same file a second time under a better name.

## Solution

`public/js/soft-mp4-subtitles.js` now creates the output without triggering a download:

```js
const blob = new Blob([mp4.getBuffer().buffer], { type: 'video/mp4' });
```

`ISOFile.getBuffer()` writes the same boxes into a `DataStream` and returns it without clicking anything. The size check, preview, result text and Download button logic are unchanged. A short inline comment warns against going back to `save()`.

Verification:

| Check | Result |
| --- | --- |
| Before the fix, production | Opening the page caused one automatic download (`subtitled.mp4`) |
| After the fix, opening the page | Zero automatic downloads; the result reads "1 cues · 3 total tracks · 0.2 MiB MP4" and Download is enabled |
| Clicking Download | `soft-subtitle-example-soft-subtitles.mp4`, 246,799 bytes, same size as before, valid `ftyp`, contains a `tx3g` subtitle sample entry and the cue text |
| `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=add-soft-subtitles-to-an-mp4` | Passed |

The post-fix runs loaded the production page with the local script swapped in.

## Notes / boundaries

- Rule of thumb for this repo: never call a library's `save()`/`writeFile()` inside a pipeline that the automatic sample can reach unless you know it only returns bytes. pdf-lib's `PDFDocument.save()` is safe; mp4box.js `ISOFile.save()`, jsPDF `save()` and SheetJS `writeFile()` all download immediately.
- No copy or i18n changes were needed.

[actions]
- `public/js/soft-mp4-subtitles.js`: replaced `mp4.save('subtitled.mp4')` with a `getBuffer()`-based Blob.
- Ran `verify:tool` for the slug and a Playwright download-event check in `scripts/tmp/`.
