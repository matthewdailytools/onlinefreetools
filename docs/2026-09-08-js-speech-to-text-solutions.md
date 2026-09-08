# JS 语音转文字完整方案（含多语）

- date: **2026-09-08 08:50**
- 状态：技术权威（能力 + 架构）；**不是**立项夹，**不**自动建 `work-tasks/`
- 关联：
  - 方向 A.3：[2026-07-28-tool-direction.md](./2026-07-28-tool-direction.md)
  - 音视频可行性：[2026-06-23-10-15-js-media-conversion-feasibility.md](./2026-06-23-10-15-js-media-conversion-feasibility.md)（该文把 STT 写成 Web Speech，**未**拆清是否上传）
  - Workers AI 运维：[../ops/cloudflare-workers-ai-access.md](../ops/cloudflare-workers-ai-access.md)
  - 官方模型：[whisper](https://developers.cloudflare.com/workers-ai/models/whisper/) · [whisper-large-v3-turbo](https://developers.cloudflare.com/workers-ai/models/whisper-large-v3-turbo/) · [Pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)
  - 词表：[seo/keywords/ocr-scan/2026-09-08-text-converter-keyword-planner.md](./seo/keywords/ocr-scan/2026-09-08-text-converter-keyword-planner.md)（ASR 簇仍 drop 产品，直到用户点名立项）
- 本站 UI 十语：`en` `zh` `es` `ar` `pt` `id` `fr` `ja` `ru` `de`
- 快照：体积/报价会变；冲突以 Cloudflare / Hugging Face **现行**页面为准

> **结论先行**  
> JS **能**做语音→文字，但是 **三条互不等价的产品**：① Chrome 麦克风听写（Web Speech，多语靠 `lang`，音频常出设备）；② 标签页 Whisper ONNX/WASM（可转文件、可 99 语，体积大）；③ Workers AI Whisper（多语最好，音频上传 Cloudflare，走已有 AI binding + Turnstile）。  
> Planner 头词 `speech to text` / `mp3 to text` / `youtube to text` 要的是 **② 或 ③ 或 SaaS**，不是 ①。YouTube **禁止**代抓。  
> 若本站立项：**一页**，语种芯片（十语 + 自动检测），文件走 **C**，听写走 **A** 并诚实写联网；WASM Whisper 仅作可选「纯本地」折叠。H1 用场景句，禁光杆 `Speech to text`。

---

## 0. 三种用户作业（先定控件，再选引擎）

| ID | 用户带来什么 | 要什么结果 | 适合的引擎 | 本站隐私标签 |
| --- | --- | --- | --- | --- |
| **S1** | 对着麦克风说话 | 实时/准实时字幕 | **A** Web Speech | **不能**标 `localProcessing: true`（Chrome 通常把声音送到识别服务） |
| **S2** | 上传 WAV/MP3/M4A/OGG/WebM | 整段 TXT / VTT | **C** Workers AI 或 **B** 本地 Whisper | C = 上传 CF；B = 可 true |
| **S3** | YouTube / 网页视频 URL | 字幕 | **不做**（CORS + 平台 ToS；禁止 Worker 去扒流） | — |
| **S4** | 本地视频文件 | 抽音轨再转写 | FFmpeg.wasm 抽音 + S2 | 体积叠加 ~20–30 MB，后排 |

广告组 Free / Online / App **不是**拆页理由。语种只做芯片，禁止 `arabic-speech-to-text` 一类 doorway URL。

---

## 1. 方案 A — Web Speech API（听写）

### 1.1 能力

- API：`SpeechRecognition` / `webkitSpeechRecognition`
- 输入：麦克风 `MediaStream`（不是文件）
- 多语：设置 `recognition.lang` 为 **BCP-47**（见 §5）
- 中间结果：`interimResults = true` 可做打字机效果
- Chrome / Edge：识别后端多为 **Google 云端**（2026 仍如此）；Safari 部分版本可走设备端，**不能**用 Safari 的行为给 Chrome 用户写「文件留在本机」
- Firefox：支持长期不完整，须检测后禁用并说明

### 1.2 完整前端流程（注释齐全）

```javascript
/**
 * 启动浏览器听写。Chrome 会把麦克风音频送到其识别服务，不能当成本地 WASM。
 * @param {string} bcp47 BCP-47 语言标签，如 zh-CN、en-US
 * @param {(text: string, isFinal: boolean) => void} onText 中间稿与定稿回调
 * @returns {SpeechRecognition} 调用方负责 stop()
 */
function startDictation(bcp47, onText) {
  const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Ctor) {
    throw new Error('unsupported');
  }
  const rec = new Ctor();
  rec.lang = bcp47;
  rec.continuous = true;
  rec.interimResults = true;
  rec.maxAlternatives = 1;
  rec.onresult = (ev) => {
    let interim = '';
    let finalText = '';
    for (let i = ev.resultIndex; i < ev.results.length; i++) {
      const piece = ev.results[i][0].transcript;
      if (ev.results[i].isFinal) finalText += piece;
      else interim += piece;
    }
    if (finalText) onText(finalText, true);
    else onText(interim, false);
  };
  rec.start();
  return rec;
}
```

### 1.3 多语注意

- `zh-CN` ≠ `zh-TW`；阿语用 `ar-SA` 或 `ar`
- 不支持的 `lang` 会静默落到浏览器默认语
- **不能**把用户上传的 MP3 喂给该 API（没有标准文件接口）

### 1.4 本站文案红线

必须可见写清：识别可能离开设备。禁止套用 N1 OCR 的「不上服务器」句。

---

## 2. 方案 B — 浏览器内 Whisper（文件 + 多语，真本地）

### 2.1 栈

| 层 | 选择 | 说明 |
| --- | --- | --- |
| 运行时 | `@huggingface/transformers`（Transformers.js）+ ONNX Runtime Web | Worker 线程；可选 WebGPU |
| 权重 | `onnx-community/whisper-tiny`（多语）或 `onnx-community/whisper-tiny.en`（仅英） | tiny ≈ 39M 参数；量化后下载量级 **数十 MB**（随 dtype 变） |
| 更大 | `whisper-base` / `whisper-small` | 质量升、体积与手机内存陡增；默认不要 |
| 备选 | whisper.cpp WASM | 同样要入库 ggml；不要再走 CDN |

**禁止**页面 `from_pretrained` 默认拉 Hugging Face。本站规则：点后加载的脚本与权重进 `public/vendor/` 并 **git 跟踪**（同 Tesseract）。Whisper tiny 多语量化包往往 **大于** 当前 Tesseract LSTM+四语包，须 POC 再决定是否入库。

### 2.2 音频预处理（所有文件方案共用）

Whisper 要 **单声道 16 kHz Float32**。浏览器解码：

```javascript
/**
 * 把用户音频文件解码成 Whisper 用的 16 kHz 单声道 PCM。
 * @param {Blob} blob 用户选择的音频
 * @returns {Promise<Float32Array>} 16 kHz 采样
 */
async function decodeTo16kMono(blob) {
  const buf = await blob.arrayBuffer();
  const ctx = new AudioContext();
  const decoded = await ctx.decodeAudioData(buf.slice(0));
  const seconds = decoded.duration;
  const offline = new OfflineAudioContext(1, Math.ceil(seconds * 16000), 16000);
  const src = offline.createBufferSource();
  src.buffer = decoded;
  src.connect(offline.destination);
  src.start(0);
  const rendered = await offline.startRendering();
  await ctx.close();
  return rendered.getChannelData(0);
}
```

切片：长于 ~30 s 按 Whisper 窗口切（官方 30 s 块），Worker 里排队，避免一帧撑爆内存。手机建议硬顶 **5–10 分钟** 或 20 MB。

### 2.3 多语推理参数

```javascript
/**
 * 浏览器 Whisper 转写。language 用 ISO 639-1；省略则模型自动检测。
 * @param {Float32Array} pcm 16 kHz 单声道
 * @param {string | null} langIso 如 zh、ja；null 表示自动
 */
async function transcribeLocal(pcm, langIso) {
  const { pipeline } = await import('/vendor/transformers/transformers.min.js');
  const asr = await pipeline('automatic-speech-recognition', '/vendor/whisper/tiny', {
    dtype: 'q8',
  });
  const out = await asr(pcm, {
    language: langIso || null,
    task: 'transcribe',
    return_timestamps: true,
  });
  return out;
}
```

| 参数 | 作用 |
| --- | --- |
| `language: 'zh'` | 强制中文，减少串成英文 |
| `task: 'transcribe'` | 同语转写 |
| `task: 'translate'` | 译成英文（Whisper 多语训练任务）；**不要**当本站十语 UI 的默认，以免阿语用户得到英文稿 |

`.en` 权重 **不会**好好转中/日/阿。默认芯片若含中英，必须用 **multilingual tiny**，不要用 `tiny.en` 冒充多语。

### 2.4 体积与加载

对齐 OCR：进页 **零** Whisper 请求；点 Convert 再拉 vendor。COOP/COEP 仅当 SharedArrayBuffer/多线程 ORT 需要时再开，且勿污染全站无关页。

---

## 3. 方案 C — Workers AI Whisper（文件 + 多语，上传推理）

本仓库 **已有** `wrangler.jsonc` 的 `AI` binding（Prompt Expand/Polish）。STT 复用同一账户 Neurons，须 **另开** 限流 action，不要和 Prompt 抢 10k/日。

### 3.1 模型怎么选

| 模型 | 多语 | 适用 |
| --- | --- | --- |
| `@cf/openai/whisper-tiny-en` | **仅英语** | 只要英文件、省额度 |
| `@cf/openai/whisper` | 多语（通用 Whisper） | 旧接口；输出可含 `vtt` / `words`（以官方 schema 为准） |
| `@cf/openai/whisper-large-v3-turbo` | **推荐多语** | `language` 用 ISO 639-1；省略则自动检测。官方示例按音频分钟计费（约 $0.0005/分钟量级，以 [Pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/) 为准） |
| `@cf/deepgram/nova-3` | 自动语种 | 更快更贵；本站默认不必上 |

本地 `wrangler dev` 调 AI 必须 `--remote`（或 `start:dev --remote-bindings`），用量计入账户。

### 3.2 Worker 契约（建议）

```
POST /api/tools/transcribe-speech-to-text
Content-Type: multipart/form-data
- audio: 文件（上限建议 8–12 MB）
- language: en|zh|es|ar|pt|id|fr|ja|ru|de|auto
- cf-turnstile-response
```

```typescript
/**
 * 在 Worker 内调用多语 Whisper。audioB64 为原始字节的 Base64。
 * @param env.AI Workers AI binding
 * @param audioB64 原始音频 Base64（mp3/wav 等，模型侧解码）
 * @param langIso ISO 639-1；传 undefined 则自动检测
 */
async function runWhisper(env: { AI: Ai }, audioB64: string, langIso: string | undefined) {
  const input: Record<string, string> = { audio: audioB64 };
  if (langIso) input.language = langIso;
  return env.AI.run('@cf/openai/whisper-large-v3-turbo', input);
}
```

安全（抄 Prompt 簇，不得省略）：

- Origin 白名单、Turnstile、KV 频率/日配额
- 不把音频写入 R2 作默认留存
- 前端同意文案：发到 Cloudflare Workers AI，不经本站再转 OpenAI 公网 API
- catalog：`localProcessing: false`
- 失败：429 Neurons / 超时 → 人话错误，可提示改用听写（A）或缩短音频

### 3.3 为何文件默认选 C 而不是 B

- 多语质量：turbo/large ≫ tiny
- 无需把 80 MB 级 ONNX 推进 GitHub 部署
- 与现有 Prompt AI 运维同一套（配额、Turnstile、`--remote`）
- 代价：不能说「文件不上服务器」；搜索意图 `mp3 to text` 的竞品本来就是上传站，诚实即可

---

## 4. 本站十语对照（芯片唯一表）

禁止按语种拆 URL。一页上的芯片 = UI 语 + 识别语（可分开：界面中文、识别阿语）。

| 站点 `SiteLang` | UI 芯片文案方向 | Web Speech `lang` | Whisper / CF `language` |
| --- | --- | --- | --- |
| en | English | `en-US` | `en` |
| zh | 中文（普通话） | `zh-CN` | `zh` |
| es | Español | `es-ES` | `es` |
| ar | العربية | `ar-SA` | `ar` |
| pt | Português | `pt-BR` | `pt` |
| id | Indonesia | `id-ID` | `id` |
| fr | Français | `fr-FR` | `fr` |
| ja | 日本語 | `ja-JP` | `ja` |
| ru | Русский | `ru-RU` | `ru` |
| de | Deutsch | `de-DE` | `de` |
| auto（仅识别） | 自动检测 | 不设或浏览器默认（听写弱） | 省略 `language` |

Whisper 官方训练覆盖约 **99** 种语言（含以上十语）。粤语等可 FAQ「试自动检测」，**不**做 `cantonese-stt` URL。

听写（A）与文件（C）芯片共用同一组 ISO；A 路径再映射到 BCP-47。

---

## 5. 本站若立项：推荐一页架构

**须用户点名**后再开 `work-tasks/`。建议 slug 方向（场景句，待 SERP）：`transcribe-speech-to-text` 或 `convert-speech-to-text`；H1 例：Convert speech to text / 把语音转成文字。

```
[ 麦克风听写 | 上传音频 ]
[ 识别语言：自动 / 十语芯片 ]
[ 高级：仅本地 Whisper tiny（点后加载，质量低于云端） ]
Convert → 文本框 → Copy / Download TXT （可选 Download VTT）
```

| 路径 | 引擎 | 何时用 |
| --- | --- | --- |
| 默认文件 | **C** turbo + Turnstile | 覆盖 `mp3 to text` / `audio to text` |
| 默认听写 | **A** + 诚实联网 | 覆盖 `voice to text` / `dictate` |
| 可选本地 | **B** tiny 多语 | 隐私用户；FAQ 写清更慢、口音更差 |
| YouTube | 拒绝 | FAQ：请下载音频再上传 |
| 视频文件 | 后排 | 先 FFmpeg 抽轨，勿第一期 |

How 步骤必须等于按钮文案（Convert / Copy text / Download TXT）。

### 5.1 SEO / 产品红线

- 禁 H1：`Speech to text`、`Free speech to text`、`Online transcription`
- `google speech to text` / `notta` / `dragon`：品牌 drop，FAQ「不是他们的官网」
- 不要并进 N1 OCR；不要并进 HTML→Word
- `speech to text` 是 **head**：场景 H1 + IG（时长上限、语种芯片、听写 vs 文件、是否上传 CF）

---

## 6. 预处理与格式边界

| 输入 | 处理 |
| --- | --- |
| WAV / FLAC | `decodeAudioData` 或直接给 C |
| MP3 / M4A / AAC / OGG / WebM | 浏览器解码或交给 C 模型解码 |
| 视频容器 | 第一期拒收，或抽音（S4） |
| 立体声 | 下混单声道 |
| 采样率 | B 必须 16 kHz；C 可交原始字节 |
| 静音过长 | 可 VAD 跳过，非必须 |

---

## 7. POC 清单（写 Page 前）

1. Chrome 听写：`en-US` / `zh-CN` / `ar-SA` / `ja-JP` 各 30 秒；记是否出网（DevTools Network）
2. 同一段 1 分钟中英混合 MP3：C turbo `language=zh` vs `auto` vs B tiny
3. 日语、阿语印刷腔语音（播客清晰段）：tiny vs turbo 错字类型
4. 体积：tiny 多语量化包落盘 MB；手机峰值内存
5. Neurons：1 分钟 turbo 实际消耗 vs 日 10k 额度能撑多少次（对照 [Pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)）
6. 超时：Workers CPU/请求时限 vs 长音频

未过 POC 不得把「99 语产品级」写进 title。

---

## 8. 与现有文档的关系

| 旧句 | 本文校正 |
| --- | --- |
| 可行性文「客户端纯 JS、不上传」+ STT=Web Speech | 听写在 Chrome **会上传** |
| 方向 A.3「STT 可用」 | 听写可用；**文件多语**要用 C 或重 Whisper |
| 09-08 Planner ASR **drop** | 在点名立项 + POC 前仍成立；方案在本文，不是「JS 做不到」 |

---

## 9. 明确不做（即使立项）

- YouTube/播客 URL 代抓
- 实时电话/会议 SaaS、说话人分离当主卖点
- 无限时长、unlimited
- 用 N1 OCR 页冒充转写
- 十个语种十个 URL

---

## 10. 参考链接

- [MDN SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- [Transformers.js ASR](https://huggingface.co/docs/transformers.js)
- [onnx-community Whisper](https://huggingface.co/onnx-community)
- [OpenAI Whisper 语种](https://github.com/openai/whisper/blob/main/whisper/tokenizer.py)（99 语列表以仓库为准）
- [Workers AI models](https://developers.cloudflare.com/workers-ai/models/)
