/**
 * 浏览器端 Whisper 入口：esbuild 打进 public/vendor/whisper/transformers.bundle.js。
 * 页面只 import 本入口导出的 pipeline / env，不直连 huggingface.co。
 */
export { pipeline, env } from '@huggingface/transformers';
