Date: 2026-01-10 22:52
Summary: Documented ways to change Accept-Language in Chrome (settings, DevTools, flags, extensions).

[question]
chrome 修改 accept-language

[try to solve]
1) Affect the real request header (recommended)
- Open `chrome://settings/languages`
- Add preferred languages and drag the target language to the top
- Restart Chrome and verify (Accept-Language usually follows that order)

2) Debug / one-off override
- DevTools → Network → More tools → Network conditions
  - If Accept-Language is available: uncheck “Use browser default” and set e.g. `en-US,en;q=0.9`
  - Usually session-only; UI varies by Chrome version

3) Forced override (more control)
- Header rewrite extensions (e.g. ModHeader) or a proxy (Charles / Proxyman)
- Launch flag (macOS example): quit Chrome, then
  `open -a "Google Chrome" --args --lang=en-US`
  (affects browser language-related behavior; good for temporary tests)

Verify with https://httpbin.org/headers or your own echo endpoint and confirm Accept-Language.
