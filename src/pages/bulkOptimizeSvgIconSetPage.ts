import { renderToolReferencesSection } from './site/toolContent';
import { renderLocalFileWorkbench } from './site/localFileWorkbench';
import type { SiteLang } from '../site/i18n';
/** Conservative XML cleanup: references are a precondition and a postcondition. */
export const renderBulkOptimizeSvgIconSetPage = (opts: {lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[]}) => renderLocalFileWorkbench(opts, {
 slug:'bulk-optimize-svg-icon-set',accept:'.svg,image/svg+xml',multiple:true,
 messages:['comments','metadata','whitespace','svg_error','unsafe','references','optimized','unchanged','saved','preview'],
 settings:l=>['comments','metadata','whitespace'].map(k=>`<label><span><input type="checkbox" id="${k}" checked> ${l(k)}</span></label>`).join(''),
 referencesHtml:renderToolReferencesSection({lang:opts.lang,links:[{label:'SVG linking and references',href:'https://www.w3.org/TR/SVG2/linking.html'}]}),
 runtime:String.raw`
const NS='http://www.w3.org/2000/svg';
function inspect(source){
 if(/<!DOCTYPE|<!ENTITY|<\?(?!xml\s)/i.test(source))throw new Error(M.unsafe);
 const doc=new DOMParser().parseFromString(source,'image/svg+xml');if(doc.querySelector('parsererror')||doc.documentElement.localName!=='svg'||doc.documentElement.namespaceURI!==NS)throw new Error(M.svg_error);
 const nodes=Array.from(doc.getElementsByTagName('*'));if(nodes.length>20000)throw new Error(M.limit);
 const allowed=new Set('svg g defs symbol use path rect circle ellipse line polyline polygon text tspan textPath linearGradient radialGradient stop clipPath mask pattern title desc metadata style filter feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence'.split(' '));
 const ids=new Set(),refs=[];
 const ref=value=>{if(!value.startsWith('#')||value.length<2)throw new Error(M.unsafe);let id;try{id=decodeURIComponent(value.slice(1));}catch{throw new Error(M.references);}refs.push(id);};
 function css(value){if(/@|\\|\/\*|(?:https?:|data:|\/\/)|image-set|expression\s*\(|src\s*\(/i.test(value))throw new Error(M.unsafe);const rest=value.replace(/url\s*\(\s*(['"]?)(.*?)\1\s*\)/gi,(_,q,v)=>{ref(v.trim());return '';});if(/url\s*\(/i.test(rest))throw new Error(M.unsafe);}
 for(const node of nodes){
 // RDF/editor data inside metadata is inert and can be preserved or removed as a unit.
 const inMetadata=node.localName!=='metadata'&&node.closest('metadata');
 if(/^(script|foreignObject|iframe|object|embed|animate|animateMotion|animateTransform|set)$/i.test(node.localName)||node.namespaceURI==='http://www.w3.org/1999/xhtml')throw new Error(M.unsafe);
 if(!inMetadata&&(node.namespaceURI!==NS||!allowed.has(node.localName)))throw new Error(M.unsafe);
 if(node.hasAttribute('id')){const id=node.getAttribute('id');if(!id||ids.has(id))throw new Error(M.references);ids.add(id);}
 for(const attr of node.attributes){const name=attr.localName.toLowerCase(),value=attr.value;
 if(/^on/i.test(name)||name==='base'||name==='src')throw new Error(M.unsafe);
 if(name==='href')ref(value.trim());
 if(name==='style'||/url\s*\(/i.test(value))css(value);
 if(name==='aria-labelledby'||name==='aria-describedby')refs.push(...value.trim().split(/\s+/).filter(Boolean));
 }
 if(node.localName==='style')css(node.textContent);
 }
 for(const id of refs)if(!ids.has(id))throw new Error(M.references);
 return {doc,ids,refs};
}
function optimize(source,original){const before=inspect(source),doc=before.doc;
 if($('comments').checked){const walker=doc.createTreeWalker(doc,NodeFilter.SHOW_COMMENT),remove=[];while(walker.nextNode())remove.push(walker.currentNode);remove.forEach(n=>n.remove());}
 const hasStyle=!!doc.querySelector('style');
 if($('metadata').checked&&!hasStyle){for(const el of Array.from(doc.getElementsByTagNameNS(NS,'metadata'))){const contained=[el,...el.querySelectorAll('[id]')];if(!contained.some(n=>n.id&&before.refs.includes(n.id)))el.remove();}}
 if($('whitespace').checked&&!hasStyle){const walker=doc.createTreeWalker(doc,NodeFilter.SHOW_TEXT),remove=[];while(walker.nextNode()){const n=walker.currentNode;if(n.textContent.trim()||!n.parentElement)continue;let preserve=false;for(let p=n.parentElement;p;p=p.parentElement){if(['text','tspan','textPath','title','desc','style','metadata'].includes(p.localName)||p.getAttribute('xml:space')==='preserve'){preserve=true;break;}}if(!preserve)remove.push(n);}remove.forEach(n=>n.remove());}
 let result=new XMLSerializer().serializeToString(doc);const after=inspect(result);for(const id of before.refs)if(!after.ids.has(id))throw new Error(M.references);
 const optimized=new TextEncoder().encode(result);return {bytes:optimized.length<original.length?optimized:original,original,changed:optimized.length<original.length};
}
function preview(name,original,optimized){const figure=document.createElement('figure'),caption=document.createElement('figcaption');caption.textContent=name+' · '+M.before+' / '+M.after;figure.append(caption);for(const [data,label] of [[original,M.before],[optimized,M.after]]){const img=document.createElement('img'),url=URL.createObjectURL(new Blob([data],{type:'image/svg+xml'}));urls.push(url);img.src=url;img.alt=label+' '+name;figure.append(img);}$('previews').append(figure);}
async function convert(){await execute(async()=>{if(!files.length)throw new Error(M.invalid);if(files.length>50||files.reduce((n,f)=>n+f.size,0)>20*1024*1024)throw new Error(M.limit);const entries={};let totalBefore=0,totalAfter=0;
 for(let i=0;i<files.length;i++){const file=files[i];progress(5+85*i/files.length,file.name);await yieldUi();try{if(!file.name.toLowerCase().endsWith('.svg'))throw new Error(M.svg_error);if(file.size>2*1024*1024)throw new Error(M.limit);const raw=new Uint8Array(await file.arrayBuffer()),source=new TextDecoder('utf-8',{fatal:true}).decode(raw);if(/<\?xml[^>]*encoding\s*=\s*['"](?!utf-8['"])/i.test(source))throw new Error(M.svg_error);const result=optimize(source,raw),name=safeName(file.name,i,'.svg');entries[name]=result.bytes;totalBefore+=raw.length;totalAfter+=result.bytes.length;row(file.name,M.done,raw.length,result.bytes.length,(result.changed?M.optimized:M.unchanged)+' · '+((1-result.bytes.length/raw.length)*100).toFixed(1)+'% · '+name);preview(file.name,result.original,result.bytes);}catch(e){row(file.name,M.skipped,file.size,'—',[M.svg_error,M.unsafe,M.references,M.limit].includes(e.message)?e.message:M.svg_error);}}
 if(Object.keys(entries).length){row(M.saved,M.done,totalBefore,totalAfter,((1-totalAfter/totalBefore)*100).toFixed(1)+'%');await zipOutput(entries,'optimized-svg-icons.zip');}
 });}
async function loadSample(){if(busy)return;const source='<?xml version="1.0"?>\n<!-- sample icon -->\n<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">\n <metadata>Example editor notes</metadata>\n <defs><linearGradient id="paint"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#14b8a6"/></linearGradient><path id="shape" d="M20 20H140V140H20Z"/></defs>\n <use href="#shape" fill="url(#paint)"/>\n</svg>';choose([new File([source],'sample-icon.svg',{type:'image/svg+xml'})]);await convert();}
$('run').addEventListener('click',convert);$('sample').addEventListener('click',loadSample);setTimeout(()=>{if(!files.length&&!busy)loadSample();},0);
`});
