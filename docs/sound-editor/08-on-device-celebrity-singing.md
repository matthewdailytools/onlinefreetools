# 08 — 手机端离线「仿照明星声音唱歌」

**日期**：2026-09-09  
**状态**：实现路径调研；**不是**立项、未改 `src/`  
**作业**：在手机上把一段唱歌变成「像某明星在唱」，**运行时不依赖云端推理**  
**关联**：[03 音色迁移](./03-voice-conversion-from-speaker-samples.md) · [04 三档变声](./04-three-kinds-of-voice-change.md) · [06 分层](./06-demand-difficulty-cost-roadmap.md) · [07 训练成本](./07-voice-clone-training-cost.md)

本篇只回答 **端侧怎么跑**。训练一颗歌手模型要多少钱见 07；产品排期见 06（授权 Cover 在 W5，未授权锁 L4）。

---

## 1. 一句话结论

**可行，但是原生 App 上的离线歌声转换（SVC），不是网页升调，也不是云端 TTS。**

| 用户以为在做的事 | 实际算法 |
|---|---|
| 「让手机用周杰伦的声音唱这首歌」 | **歌声转换**：保住歌词、旋律、气口，只换声道/音色 |
| 「给明星一段文字让他唱出来」 | **歌声合成（SVS）**，端侧 2026 年仍重，本篇不当主路径 |

「不依赖云端」= **音频和推理都在设备上**。模型可以首次下载到本机（这不是云端推理）。**训练明星模型仍然要在有 GPU 的电脑上事先完成**，手机只跑已经训好的图。

诚实边界：

- OpenVoice 一类 **说话 V1**（见 03）**不够唱**：不保 F0/颤音，一唱就跑调。  
- 手机 **训不出** 明星 RVC（见 04/07）。  
- 未授权的名人音色包 **不该做产品**（06 标 L4）。技术上能跑，不等于可以上架。

---

## 2. 产品要先选哪一种「仿唱」

三种输入，流水线差一截。混在一个按钮里会做错模型。

| 模式 | 用户带来什么 | 手机在干什么 | 难度 |
|---|---|---|---|
| **A. 卡拉 OK 干声** | 用户自己对着伴奏唱（或已有干声）+ 伴奏 | 只转人声，再和伴奏对齐混 | **端侧主路径** |
| **B. AI Cover** | 一首成片（原唱+伴奏叠在一起） | 先分轨 → 转原唱人声 → 再叠回伴奏 | 多一个分离模型，体积和失败点都多 |
| **C. 从歌词唱出来** | 歌词 + 音高/MIDI | SVS，不是 SVC | 端侧暂缓 |

推荐产品：**先做 A**。用户唱、模型换音色、本地导出。B 是 A 前面加分轨；C 另开作业。

---

## 3. 端侧流水线（A / B）

```
[可选 B] 成片 ──► 人声/伴奏分离（MDX-Net 等）
                      │
用户干声或分离出的人声 ──► 重采样
                      │
              ┌───────┴────────┐
              ▼                ▼
     内容编码器              F0 / 音高
     ContentVec/HuBERT       RMVPE 或 DIO
     「唱了哪些音素」         「旋律怎么走」
              │                │
              └───────┬────────┘
                      ▼
            SVC 生成器（已训好的目标音色）
            RVC / So-VITS-SVC / 量化后的 Seed-VC 唱模
                      ▼
            变声后的干声 ──► 与伴奏对齐、响度、导出
```

四件事缺一不可：

1. **内容特征**：这一帧在唱哪个音素（说话人尽量无关）。  
2. **F0**：音高曲线。唱歌必须显式喂给生成器，否则旋律塌。  
3. **目标音色**：要么是 **该歌手的专用权重**（RVC `.onnx`），要么是 **零样本参考 embedding**（Seed-VC 唱模，更重）。  
4. **混音**：变声后人声和伴奏的延迟、响度、EQ 要对上。

说话用的 V1（源谱 + 256 维 embedding、无 F0 条件）到这里会失败：像换了嗓，但音不准、气口怪、假声裂。

---

## 4. 「不依赖云端」实际约束

| 允许 | 不允许（若你要真正离线） |
|---|---|
| 首次把模型文件下载到沙盒 / 用户自选导入 `.onnx` | 把用户唱歌上传到服务器再返回 |
| 本地 NPU / GPU / CPU 推理 | 运行时调克隆 API |
| 事先在工作室 GPU 上训好模型，再打进 App 或按需下发 | 在手机上从 wav **训练** RVC |

首次下载 ≠ 云端推理。产品文案应写成：「首次使用下载约 X MB 模型到本机，之后可飞行模式使用。」

---

## 5. 两套音色策略（端侧必须二选一当主路径）

### 5.1 专用歌手模型（RVC / So-VITS-SVC）——手机主推荐

事先用该人 **唱歌干声** fine-tune（数据量与 GPU 见 07 §3）。导出 ONNX / Core ML。手机只做推理。

| 优点 | 缺点 |
|---|---|
| 单人生成器常见 **50–90 MB**（INT8 后更小） | 每个明星一份权重；不能「任意丢 10 秒参考就变成他」 |
| 唱歌像度通常高于当场 V1 | 训练要在电脑完成；要授权才能商用下发 |
| 已有端侧实证（iOS Core ML INT8 全链路，2025-10） | App 不能内置未授权名人包 |

内容编码器（ContentVec 768）和 F0 模型是 **所有歌手共用** 的；只有 generator 按人换。

### 5.2 零样本唱模（Seed-VC SVC 一类）——端侧偏重

参考 1–30 秒目标声音，不 fine-tune。Seed-VC 公开唱模约 **200M 参数、44.1 kHz、Whisper-small + BigVGAN**，桌面 GPU 才舒服。塞进手机要 INT8/INT4 + 分块，旗舰能离线出一首，中端会烫、会慢、会 OOM。

适合：用户克隆 **自己** 的唱腔（参考自己的几句）。不适合作为「内置周杰伦」的体积策略。

---

## 6. 模型清单与体积（数量级）

数字随导出图和量化变；上架前用真机测峰值内存，不要只看磁盘。

| 模块 | 典型体积 | 作用 | 何时加载 |
|---|---|---|---|
| **MDX-Net / MDX23C** 人声分离 | FP16 ~200 MB；INT8 Core ML 包常见 **~40–110 MB** | 模式 B：成片拆人声/伴奏 | 仅 Cover |
| **ContentVec / HuBERT** | ONNX 常见 **~90–120 MB**（768 维） | 内容特征 | A 和 B 都要 |
| **F0：RMVPE** | ~15M 参数；量化后常 **10–30 MB** | 唱歌音高 | 质量档 |
| **F0：DIO / Harvest** | **0**（DSP） | 省模型；脏人声不如 RMVPE | 轻量档 / 已是干声 |
| **RVC 生成器（单歌手）** | FP32 ~60–80 MB；INT8 可再腰斩 | 目标音色 | 当前选中的人 |
| **Seed-VC 唱模** | ~200M 参数 + vocoder | 零样本唱 | 仅零样本产品 |

模式 A 常驻（ContentVec + 一个 RVC + DIO）：大约 **150–250 MB** 磁盘，峰值内存要按 **2–4× 权重** 估（激活、分块缓冲）。  
模式 B 再加分离模型。

**不要打进 IPA/APK 首包。** 首次进入功能再下载；一次只常驻一个歌手生成器。

公开端侧实证（2025-10，Swift / Core ML，三模型皆 INT8）：人声分离 + ContentVec + RVC，STFT/iSTFT 用 Accelerate，不依赖 librosa / WORLD。同一思路可迁 Android（换运行时）。

---

## 7. 运行时：iOS 与 Android

跨端模型源用 **ONNX** 做交换格式；各端再决定是否转 Core ML / QNN。

### 7.1 iOS / iPad

| 层 | 选择 |
|---|---|
| 音频 I/O | AVFoundation；录音用语音档或 44.1/48 kHz PCM |
| 推理 | **Core ML**（Neural Engine）优先；调试可用 `onnxruntime-c` + CoreML EP |
| DSP | Accelerate / vDSP 做 STFT、iSTFT、重采样、overlap-add |
| 并发 | 分块推理进后台队列；主线程只画进度 |

注意：把 ONNX 的 CoreML Execution Provider 打开，**不一定**比原生 `.mlpackage` 快；正式包建议 `coremltools` 转 mlprogram + INT8。

最低体验机：A17 Pro / A18 一类能把 3 分钟干声压到「明显快于实时」。更老的 A14 建议只开放短片段、强制分块、关掉分离。

### 7.2 Android

| 层 | 选择 |
|---|---|
| 音频 I/O | AudioRecord / Oboe；导出 MediaCodec 或自写 WAV |
| 推理 | **ONNX Runtime Mobile**；骁龙用 **QNN EP**， Mali/Adreno 用 GPU EP |
| 不要新建 | **NNAPI**：Android 15 已弃用；遗留代码可暂留 |
| 备选 | LiteRT（原 TFLite）只在你愿意重导一份图时用 |

社区已有「纯 ONNX 的 RVC 推理 + RMVPE」往 Java/Android 迁的记录：长音频要 **切段**，否则 Runtime 在几十秒处报错；index/Faiss 在端上可先不做（像度略降，工程简单）。

峰值内存走 **直接 ByteBuffer / 原生缓冲**，不要让 JVM 堆扛几百万 float。

### 7.3 不要用网页当这台产品的壳

03 的 OpenVoice ~66 MB 是 **说话 V1**。唱还要 F0 + 更重的生成器 + 最好还有分轨。手机 Safari 的 WebGPU/WASM 内存墙、后台杀进程、没有 Neural Engine 直通，会把「离线仿唱」做成演示而不是产品。这题的交付面是 **原生 App**（或 Flutter/RN 里嵌原生推理模块）。

---

## 8. 分块、对齐、混音（不做就会裂音）

长歌不能一次进网。

推荐切片（与 MDX 公开实践接近）：

- 块长约 **5–8 秒**，重叠 **50%**，Hann 交叉淡化后再拼。  
- 内容特征与 F0 的 **帧率必须对齐**（RVC  hop 与 ContentVec 插值要和训练时一致，改一个就跑调）。  
- 变声输出相对伴奏常有 ** hop 级延迟**：用互相关或录音时写入的时间戳对齐，不要只靠「两个文件从头叠」。  
- 后处理：高通踩气噪、轻压缩、按伴奏做响度匹配（LUFS），再 limiter。这些是 DSP，不需要再下一个大模型。

伪代码（逻辑；真实 tensor 名必须对齐导出图）：

```javascript
/**
 * 把一段已是单声道、目标采样率的唱歌干声，按块做 SVC 再 overlap-add。
 * 训练与导出必须在电脑完成；本函数只做端侧推理编排。
 *
 * @param {Float32Array} dryVocalPcm - 用户干声或分离后的人声
 * @param {number} sampleRate - 须与生成器训练采样率一致（RVC 常见 40k / 48k）
 * @param {object} sessions - { contentEncoder, f0Model, generator } 已加载的本地会话
 * @param {object} opts - { chunkSamples, hopSamples, f0UpKey }
 * @returns {Promise<Float32Array>} 变声后干声，长度与输入同量级
 */
async function convertSingingOnDevice(dryVocalPcm, sampleRate, sessions, opts) {
  const chunkSamples = opts.chunkSamples;
  const hopSamples = opts.hopSamples;
  const out = new Float32Array(dryVocalPcm.length);
  const window = makeHannWindow(chunkSamples);
  const weight = new Float32Array(dryVocalPcm.length);

  for (let start = 0; start < dryVocalPcm.length; start += hopSamples) {
    const end = Math.min(start + chunkSamples, dryVocalPcm.length);
    const chunk = dryVocalPcm.subarray(start, end);

    const audio16k = resample(chunk, sampleRate, 16000);
    const content = await sessions.contentEncoder.run(audio16k);
    const f0Hz = await estimateF0(chunk, sampleRate, sessions.f0Model);
    const f0Shifted = shiftF0Semitones(f0Hz, opts.f0UpKey);
    const converted = await sessions.generator.run({
      phone: alignFrames(content, f0Shifted.length),
      pitch: f0ToMelBins(f0Shifted),
      pitchf: f0Shifted,
    });

    const resampled = resample(converted, /* generator sr */ sampleRate, sampleRate);
    for (let i = 0; i < resampled.length && start + i < out.length; i += 1) {
      const w = window[i] || 1;
      out[start + i] += resampled[i] * w;
      weight[start + i] += w;
    }
  }

  for (let i = 0; i < out.length; i += 1) {
    out[i] /= weight[i] > 1e-6 ? weight[i] : 1;
  }
  return out;
}
```

`f0UpKey`：目标歌手与用户音域差。男唱女模常要升 12 个半音量级，反之亦然。这是产品上要暴露的「音高对齐」，不是隐藏魔法。

---

## 9. 实时 vs 离线导出

| 档 | 延迟目标 | 端侧现实（2026） |
|---|---|---|
| **离线导出** | 一首 3 分钟，旗舰 0.3–1× 实时 | **该打的档**：先录音/导入，HUD 跑完再播 |
| **准实时试听** | 块 300–800 ms | 旗舰可试；要裁掉分离、用 DIO、小生成器 |
| **直播级实时** | < 80–120 ms | 游戏变声那一档；唱歌 SVC 默认 **不要承诺** |

Seed-VC 桌面实时说话大约算法延迟 300 ms + 设备 100 ms，还要笔记本 GPU。手机唱歌不要按这个 SLA 卖。

---

## 10. 质量：什么时候会「不像」

即使模型对，这些输入也会毁听感：

- 参考/训练集是 **说话**，推理却是 **唱歌**（音色像说话的他，唱腔不像）。唱模必须用唱的干声训（07）。  
- 用户录音带伴奏泄漏、房间混响、自动美声。先 RNNoise / 简单去混，再进 SVC。  
- 音域差太大还不调 `f0UpKey`。  
- 分离残留鼓点进了 ContentVec，内容特征被污染。  
- INT8 量化把高频气声切掉：应用听测决定哪些图能量化、哪些留 FP16。

对用户必须写：这是 **音色靠拢的翻唱**，不是把原唱版权和人格权一并买下来。

---

## 11. 合规（技术能做 ≠ 能上架）

同时踩两套权：

1. **声音权 / 人格权**：名人音色要授权；用户克隆自己要明示同意。  
2. **音乐版权**：词曲 + 录音。用户自唱仍可能涉及词曲；成片 Cover 还涉及原录音。

产品形态若要上架商店：

- 默认能力是 **用户自己的声音** 或 **已授权角色**。  
- 不预装、不提供「明星音色商店」除非合同在手。  
- 合成音频加可见声明；有条件再加水印（06 W5）。  
- 拒绝「实时伪造成熟人」类用途（05/06 L4）。

本站网页工具默认 **不托管名人模型**（03 §7 已写）。本篇若将来做独立 App，同一条红线。

---

## 12. 推荐落地顺序（端侧工程）

不要一上来做「任意明星唱任意歌」。

1. **原生壳 + 本地录音/导入干声 + 导出 WAV**（无模型也能验对齐与混音）。  
2. **接入共用 ContentVec + DIO + 一颗「用户自己」的 RVC**（电脑训好，手机导入）。证明离线闭环。  
3. F0 换成 RMVPE；听测假声/气声。  
4. 可选：INT8 分离模型，打开模式 B。  
5. 授权音色包按需下载；零样本唱模只给「克隆我自己」。  
6. 实时试听最后做，且单独标延迟。

和 06 对齐：这是声音应用 **W5 授权 Cover** 的端侧形态，前置是 W2 分轨、W4 修音、法务轨道。不是 W0 网页编辑器的范围。

---

## 13. 结论表

| 问题 | 答案 |
|---|---|
| 手机能不能离线仿明星唱歌？ | **能做离线 SVC 推理**；不能在手机上训练；名人包要授权。 |
| 主算法？ | 分轨（可选）+ ContentVec + F0 + RVC/SVC 生成器 + 混音。 |
| 主平台？ | **原生 iOS Core ML / Android ORT+QNN**，不要用浏览器当主壳。 |
| 模型怎么来？ | 电脑训、量化、下发；或用户导入自己的 `.onnx`。 |
| 零样本行不行？ | 自己的参考可以试；200M 唱模对中端机不友好。 |
| 说话 V1 能不能凑合唱？ | **不能当产品**。 |
| 和 03/04/07 的关系？ | 03 是浏览器说话 V1；04 分档；07 是训练账单；**本篇是手机推理架构**。 |
