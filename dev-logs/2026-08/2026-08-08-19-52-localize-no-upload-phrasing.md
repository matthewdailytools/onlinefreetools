Date: 2026-08-08 19:52
Summary: Rewrote multi-locale “local / no upload” phrasing to device-vs-server privacy wording users actually understand.

[question]
考虑不同语言用户对于本地处理的理解和表述：中文是不上传服务器，考虑其他语言，并修正

[try to solve]
Replaced vague `local` / `lokal` / bare `no upload` / `sans envoi` / `sem upload` with locale-natural privacy phrasing:

- zh: 不上传服务器  
- en: files stay on your device / not uploaded to a server  
- es: sin subir al servidor / no salen del dispositivo  
- de: ohne Server-Upload / bleiben auf Ihrem Gerät  
- fr: sans envoi au serveur / ne quittent pas votre appareil  
- pt/id/ja/ru/ar: equivalent “device + not to server” forms  

Updated `home_cat_pdf_*` and aligned image/design category blurbs; tightened merge-pdf/split-pdf home `desc` and SEO description openers. Ran `merge:tools` + `build:site`.

[actions]
- scripts/site/i18n.mjs
- src/site/i18n/tools/merge-pdf/*.ts, split-pdf/*.ts
- npm run merge:tools / build:site
