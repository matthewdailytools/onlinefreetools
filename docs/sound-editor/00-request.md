# 00 — 用户原话

**日期**：2026-09-09

## 第一轮

> 调研 sound editor用js怎么实现

## 第二轮

> 单独一个fold，形成调研文档，另外给出产品设计文档

## 第三轮

> 重新分析和调研，要做一个最好的sound editor

## 第四轮

> 变声用js是否可行，用js如何实现根据一系列sound个人的声音实现变声

## 本夹如何响应（随轮次追加）

- **调研（重写）** → [01-js-implementation-research.md](./01-js-implementation-research.md)  
- **产品设计（重写）** → [02-product-design.md](./02-product-design.md)  
- **音色迁移（第四轮）** → [03-voice-conversion-from-speaker-samples.md](./03-voice-conversion-from-speaker-samples.md)  
- **三种变声（第五轮）** → [04-three-kinds-of-voice-change.md](./04-three-kinds-of-voice-change.md)  
- **需求全景（第六轮）** → [05-sound-universe-demand-map.md](./05-sound-universe-demand-map.md)  
- **分层节奏（第七轮）** → [06-demand-difficulty-cost-roadmap.md](./06-demand-difficulty-cost-roadmap.md)  
- **训练成本（第八轮）** → [07-voice-clone-training-cost.md](./07-voice-clone-training-cost.md)  
- 目录入口 → [README.md](./README.md)

第三轮：完整波形编辑器，不是薄裁剪器。  
第四轮：说话人音色迁移需要目标人多段录音；不是 DSP 升调。  

## 第五轮

> 详细解释三种变声

第五轮详解见 [04-three-kinds-of-voice-change.md](./04-three-kinds-of-voice-change.md)。

## 第六轮

> sound editor，不考虑本站的定位，不考虑是否js实现，只考虑从用户需求出发。我能想到的是围绕声音，可以衍生出声音编辑工具，ai变声工具，声音tts生成工具，某个明星音乐仿声工具，声音内容（人，动物，自然等），要建立一个以声音为核心，editor为切入口的应用。除此外，还有什么功能，都发散枚举，只要有需求。形成文档

第六轮需求全景见 [05-sound-universe-demand-map.md](./05-sound-universe-demand-map.md)。  
本轮明确：不按本站定位过滤，不按 JS/浏览器可行性过滤；编辑器只是入口，枚举的是声音应用宇宙。

## 第七轮

> 新文档：根据用户需求，技术难度，实现成本对这些需求进行排序分层，给出开发节奏

第七轮见 [06-demand-difficulty-cost-roadmap.md](./06-demand-difficulty-cost-roadmap.md)。  
在 05 的枚举上引入难度与成本；波次是声音应用主链，不是本站 slug 排期。

## 第八轮

> 给出声音训练仿声，歌曲仿声的训练成本

第八轮见 [07-voice-clone-training-cost.md](./07-voice-clone-training-cost.md)。  
说话 RVC 与唱歌 SVC 的 GPU 通常是美元级；干声、人时、授权才是大头。ElevenLabs PVC 官方不支持唱歌。

## 第九轮

> 如何实现手机端实现仿照明星声音唱歌，不依赖云端

第九轮见 [08-on-device-celebrity-singing.md](./08-on-device-celebrity-singing.md)。  
端侧是 SVC 推理（ContentVec + F0 + 已训生成器），不是云端 TTS，也不是浏览器说话 V1。训练仍在电脑完成。
