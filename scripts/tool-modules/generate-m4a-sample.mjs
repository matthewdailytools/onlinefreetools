// Run with a full FFmpeg installation: node scripts/tool-modules/generate-m4a-sample.mjs
// Produces original synthetic audio; no downloaded media or copyright dependency.
import {spawnSync} from 'node:child_process';
import {mkdirSync,existsSync} from 'node:fs';
const target='public/samples/convert-an-m4a-file-to-mp3.m4a';
if(existsSync(target))throw Error('Sample already exists; refusing to overwrite it.');
mkdirSync('public/samples',{recursive:true});
const result=spawnSync(process.env.FFMPEG_PATH||'ffmpeg',[
 '-nostdin','-n','-f','lavfi','-i','aevalsrc=0.25*sin(2*PI*440*t)|0.25*sin(2*PI*660*t):s=44100:d=5',
 '-c:a','aac','-b:a','128k','-movflags','+faststart',target,
],{stdio:'inherit'});
if(result.error)console.error('Full FFmpeg with AAC encoding is required:',result.error.code);
if(result.error||result.signal||result.status!==0)process.exitCode=result.status||1;
