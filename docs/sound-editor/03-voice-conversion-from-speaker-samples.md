# 03 — 根据「某人的一批录音」做变声（JS）

**日期**：2026-09-09  
**状态**：调研定稿；**不是**立项、未建 `work-tasks/`  
**作业**：用户带来 **目标说话人的多段声音**，要把 **另一段说话**（或麦克风）变成「像那个人」  
**不是**：只升调/降调的卡通变声（那不需要此人录音）

关联：[01 编辑器调研](./01-js-implementation-research.md) · [02 波形编辑器产品](./02-product-design.md)

---

## 1. 先分清三种「变声」

| 档 | 用户带来什么 | JS 结果像什么 | 要不要「一系列个人声音」 |
|---|---|---|---|
| **V0 DSP** | 只要源音频 | 松鼠/巨人/电话音；**仍是源说话人** | **不要**。用了也没用 |
| **V1 音色迁移** | 源语音 + **目标人若干参考段** | 内容仍是源说的话，音色往目标人靠 | **要。这才是本问** |
| **V2 训练式克隆（RVC）** | 目标人 **10–50 分钟**干净语音 + GPU 训练 | 专用 `.pth`/`.onnx`，像度通常更高 | 训练 **基本不能在工具页用 JS 完成**；浏览器最多 **跑已有模型** |

本问是 **V1**。把「一系列 sound」喂给 SoundTouch 升调，**实现不了「变成某个人」**。  
三种变声的分层、听感、输入输出与选档：[04-three-kinds-of-voice-change.md](./04-three-kinds-of-voice-change.md)。

---

## 2. 可行性结论

**可行，但是有条件的浏览器推理，不是一段 `playbackRate`。**

| 路径 | 浏览器 JS | 本站是否适合 |
|---|---|---|
| OpenVoice 类 **参考编码 + 音色转换**（ONNX ~66 MB） | ✅ 已有生产级实践（WebGPU + WASM 回退、Worker） | **主候选**：参考段 → 256 维 embedding → 转源音频 |
| 多段参考 **平均 embedding** | ✅ 标准做法 | **必须**：用户说的「一系列」就是这里 |
| RVC **推理**（已有该人模型） | ⚠️ 可行但重：HuBERT + RMVPE + 说话人模型，常 60–150 MB+，要 COOP/COEP 线程 | 仅当用户 **自己带来 .onnx**；本站不托管他人声纹模型 |
| RVC **训练**（从一批 wav 训出模型） | ❌ 工具页不现实（分钟级数据、CUDA、数十分钟 epoch） | 不做 |
| 把参考音频当「音色样本」做 DSP 卷积/声码器 | ❌ 得不到稳定的「像那个人」 | 不做 |
| 云端克隆 API | 音频上传 | 与本站默认「不上传」冲突；未点名不做 |

质量预期（对用户必须诚实写）：

- V1 是 **音色靠拢**，不是证件照级克隆；口音、情感、录音设备差会露馅。  
- 参考要 **干净人声、少音乐、少混响**；多段比一段稳，因为可平均。  
- Timeline Studio 公开记录：OpenVoice V2 浏览器包 **encoder ~1.6 MB + converter ~64 MB ≈ 66 MB**；中英验证过，**不是 TTS**（不会从文字长出语音，只转已有说话）。

---

## 3. 正确数据流（「一系列个人声音」放哪）

```
目标人参考：ref1.wav, ref2.wav, … refN.wav     ← 这一系列
源内容：    source.wav 或麦克风                 ← 要「说什么」
        ↓
每段 ref → 22050 Hz 单声道 → STFT
        ↓
Reference Encoder → embedding_i  (256,)
        ↓
targetEmb = 加权平均(embedding_1 … embedding_N)
        ↓
source 同样 STFT → sourceEmb
        ↓
Converter(sourceSpec, sourceEmb, targetEmb) → 变声 PCM
        ↓
去尾噪声、限幅、导出 WAV/MP3
```

没有 **源内容** 就变不了「话」：V1 不训练新声带，只把 **已有话语** 涂上目标音色。  
「只有一批某人的声音、没有要转换的句子」→ 只能先 TTS 出一句再迁移（TTS 是另一套模型，体积和许可另算），或让用户再录/再开一段源音频。

---

## 4. 多段参考怎么合成一个声纹

```javascript
/**
 * 把多段目标人录音合成一个音色向量（逐段编码后平均）。
 * @param {Float32Array[]} embeddings - 每段参考的 speaker embedding，长度均为 EMBED_SIZE
 * @param {number[]} weights - 可选权重（如按时长或 RMS）；缺省均等
 * @returns {Float32Array} 平均后的目标 embedding，长度 EMBED_SIZE
 */
function averageSpeakerEmbeddings(embeddings, weights) {
  const EMBED_SIZE = embeddings[0].length;
  const out = new Float32Array(EMBED_SIZE);
  let weightSum = 0;

  for (let i = 0; i < embeddings.length; i += 1) {
    const w = weights && weights[i] != null ? weights[i] : 1;
    weightSum += w;
    const emb = embeddings[i];
    for (let d = 0; d < EMBED_SIZE; d += 1) {
      out[d] += emb[d] * w;
    }
  }

  const inv = weightSum > 0 ? 1 / weightSum : 0;
  for (let d = 0; d < EMBED_SIZE; d += 1) {
    out[d] *= inv;
  }
  return out;
}
```

建议权重：`weight = 时长 × 有效人声 RMS`（丢掉全静音段）。  
段数：3–10 段、每段 3–15 秒通常够 V1；堆 1 小时噪声参考 **不会**变成 RVC 训练集。

---

## 5. 浏览器实现要点（OpenVoice V2 ONNX 路径）

公开图接口（Timeline Studio / HF `openvoice-v2-converter-fp16` 一类拆分）：

| 文件 | 约体积 | 作用 |
|---|---|---|
| `reference-encoder.onnx` | ~1.6 MB | `spectrogram_frames [1, T, 513]` → `speaker_embedding [1, 256, 1]` |
| `converter.onnx` | ~64 MB | 源谱 + 源/目标 embedding + noise → `audio` |

预处理（须与导出图一致，改一个就跑飞）：

- 采样率 **22050**，单声道  
- STFT：`n_fft=1024`，`hop=256`，513 bins  
- Encoder 输入布局 `[1, frames, 513]`；Converter 谱 `[1, 513, frames]`  

运行时：

1. 点击后再下载模型（Tier 2），Cache Storage；配额满则只留内存，不假装失败。  
2. Encoder → WASM；Converter → **WebGPU**，失败再 WASM。  
3. **Web Worker** 做 STFT + 推理；主线程金标 HUD。  
4. WASM 多线程要 **COOP/COEP**（`crossOriginIsolated`）；Pages 头须单独配，否则单线程仍可跑、更慢。  
5. 同一页 Worker 常驻，第二段源音频不要重新 init session。

伪代码（逻辑；真实要用 `onnxruntime-web` 的 tensor 名对齐导出图）：

```javascript
/**
 * 用已平均的目标声纹，把源 AudioBuffer 转成目标音色。
 * @param {Float32Array} sourcePcm22050 - 已重采样的源单声道 PCM
 * @param {Float32Array} targetEmb - 256 维目标 embedding
 * @param {object} sessions - { encoder, converter } ONNX InferenceSession
 * @returns {Promise<Float32Array>} 变声后 PCM（采样率仍 22050）
 */
async function convertWithTargetVoice(sourcePcm22050, targetEmb, sessions) {
  const sourceSpec = stft(sourcePcm22050, { fftSize: 1024, hop: 256 });
  const sourceEmb = await runEncoder(sessions.encoder, sourceSpec);
  const frames = sourceSpec.frameCount;
  const noise = makeSeededNoise(192, frames, /* seed */ 1);
  const out = await sessions.converter.run({
    spectrogram: sourceSpec.asCHW,
    frame_mask: ones([1, 1, frames]),
    source_embedding: reshape(sourceEmb, [1, 256, 1]),
    target_embedding: reshape(targetEmb, [1, 256, 1]),
    noise,
  });
  return out.audio;
}
```

后处理：按 RMS 从后往前裁掉虚尾巴（约留 160 ms + 40 ms fade），再 soft-limit。这是公开工程踩过的坑，不是可选抛光。

许可：OpenVoice 权重与 ONNX Runtime Web **各自协议**；上线前核对 MyShell OpenVoice 与 ORT，模型文件若进 `public/vendor/` 须可再分发。用户 **自带参考音频** 不进仓库。

---

## 6. RVC：和「一系列 wav」的关系

官方 FAQ：共享用的推理包约 **60+ MB**；**训练**建议约 **10–50 分钟**干净、音色一致的数据。

| 步骤 | 在哪做 |
|---|---|
| 从一批 wav **训练** | Python + GPU（WebUI）；**不是**本站 JS 页 |
| `.pth` → `.onnx` | 可在浏览器（`rvc-onnx-web`），仍要用户已有模型 |
| 推理 | `rvc-web-runtime`：还要 ContentVec/HuBERT + RMVPE，体积再叠一层 |

因此：用户只丢「一系列某人的 mp3」进来，**点一下就得到 RVC 模型** —— JS 工具页做不到。  
能做的是：V1 即时 embedding，或「用户已有该人 RVC 模型再转换」。

---

## 7. 和波形编辑器（02）的边界

- **02 页**：剪、淡化、LUFS、RNNoise、**DSP 变调**（不需要目标人）。  
- **本作业**：要参考声纹 + 大 ONNX，**不要塞进编辑器首屏**。若立项，应是 **另一 slug**（场景句如「用参考录音转换音色」），Related 互链。  
- 禁止拆成「男声变女声 / 明星音色」矩阵 URL。

隐私：V1 可 `localProcessing: true`（模型和音频都在标签页）。FAQ 写清：首次点击下载 ~66 MB 模型到本机缓存，**参考音频不上我们的服务器**。  
合规：只处理用户有权使用的声音；禁止把「克隆他人」当卖点；页上 disclaimer（未经同意的模仿、欺诈）。

---

## 8. 产品若做：最小控件

1. **目标声音**：多文件 dropzone（一系列参考）  
2. **要转换的内容**：另一个 dropzone 或录音（源）  
3. 按钮：提取声纹 → 转换 → Download  
4. HUD：Load model / Encode refs / Convert  
5. 失败：参考太短、几乎无语音、无 WebGPU 且 WASM 超时  

样例：合成或许可清晰的短句当源；参考用另一段（不要暗示「克隆名人」）。

---

## 9. 结论

| 问题 | 答案 |
|---|---|
| JS 能不能「根据一批某人的声音变声」？ | **能做音色迁移（V1）**；不能在页内从 wav **训练** RVC（V2）。 |
| 那一批声音干什么？ | 每段抽 embedding，**平均成目标声纹**，再转源语音。 |
| 推荐栈 | OpenVoice V2 拆分 ONNX + `onnxruntime-web` + Worker + WebGPU |
| 不要用 | 仅 SoundTouch、仅 `playbackRate`、浏览器内训 RVC、上传克隆 SaaS（默认） |
