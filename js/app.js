/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
function lum(h){const n=parseInt(h.slice(1),16),f=v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)};return .2126*f(n>>16)+.7152*f((n>>8)&255)+.0722*f(n&255)}
const ink=h=>lum(h)>.42?"#0B1B2B":"#FFFFFF";
const EXTS=["png","webp","svg","jpg","jpeg"],FB={};
const logo=(p,s=64)=>{FB[p.id]=p.icon?svgIcon(p.icon,p.c):p.ini;
 return `<span class="logo" style="--s:${s}px;color:${p.c}"><img src="assets/brands/${p.id}.png" data-id="${p.id}" data-i="0" alt="${p.name} logo" loading="lazy" onload="logoFit(this)" onerror="logoFail(this)"></span>`};
function logoFit(img){const s=img.parentNode,r=img.naturalWidth/img.naturalHeight;if(!s||!img.naturalHeight)return;if(Math.abs(r-1)<.06)s.classList.add("fill");else img.style.padding="9%"}
function logoFail(img){const i=+img.dataset.i+1;if(i<EXTS.length){img.dataset.i=i;img.src=`assets/brands/${img.dataset.id}.${EXTS[i]}`}else{img.parentNode.innerHTML=FB[img.dataset.id]}}
/* brand colour taken from the brand's own logo */
const COL={};
function dominant(img){try{const s=48,c=document.createElement("canvas");c.width=c.height=s;const x=c.getContext("2d");x.drawImage(img,0,0,s,s);const d=x.getImageData(0,0,s,s).data,b={};let best=null,bn=0;
 for(let i=0;i<d.length;i+=4){if(d[i+3]<200)continue;const r=d[i],g=d[i+1],bl=d[i+2],mx=Math.max(r,g,bl),mn=Math.min(r,g,bl),l=(mx+mn)/510,sat=mx?(mx-mn)/mx:0;if(sat<.28||l>.88||l<.12)continue;const k=(r>>5)+","+(g>>5)+","+(bl>>5),o=b[k]||(b[k]={n:0,r:0,g:0,b:0});o.n++;o.r+=r;o.g+=g;o.b+=bl;if(o.n>bn){bn=o.n;best=o}}
 if(!best||bn<12)return null;const h=v=>Math.round(v/best.n).toString(16).padStart(2,"0");return "#"+h(best.r)+h(best.g)+h(best.b)}catch(e){return null}}
function themeBrands(){document.querySelectorAll("[data-brand]").forEach(w=>{const id=w.dataset.brand,img=w.querySelector("img[data-id]");if(!img)return;
 const go=()=>{if(!(id in COL))COL[id]=dominant(img);const c=COL[id];if(c){w.style.setProperty("--pc",c);w.style.setProperty("--pi",ink(c))}};
 img.complete&&img.naturalWidth?go():img.addEventListener("load",go,{once:true})})}
const mk=(m,sm)=>{const cls="mk"+(sm?" sm":"");
  if(m.i){return `<span class="${cls}" style="background:${m.bg||"#fff"}">${svgIcon(m.i)}</span>`}
  return `<span class="${cls}" style="background:${m.bg};color:${m.fg}">${m.t}</span>`};
const lvl=l=>`<span class="lv ${l==="Pro"?"pro":"adv"}">${l==="Pro"?"Pro level":"Advanced"}</span>`;
const skillCard=(s,j)=>`<article class="skill tilt rv" style="--d:${(j%6)*60}ms;--w:${s[1]==="Pro"?"100":"92"}%"><header><h3>${s[0]}</h3>${lvl(s[1])}</header><p>${s[2]}</p><div class="bar"><i></i></div></article>`;
const toolCard=(g,t,j)=>`<article class="tool tilt rv" style="--d:${(j%6)*60}ms"><div class="top"><span class="nm">${mk(t[1])}<b>${t[0]}</b></span></div><p>${t[2]}</p>${lvl(toolLevel(g))}</article>`;

/* ---------- forms ---------- */
const formHTML=`
<form class="lead-form tilt rv" id="lead" novalidate>
  <label>Your name<input name="name" autocomplete="name" required placeholder="Full name"></label>
  <label>Contact number<input name="phone" type="tel" autocomplete="tel" required placeholder="03xx xxxxxxx or +country code"></label>
  <label>Brand name<input name="brand" required placeholder="Your brand or company"></label>
  <label>Brand links <small>(optional) website, Instagram, Facebook</small><textarea name="links" placeholder="https://"></textarea></label>
  <div class="row">
    <button class="btn wa mag" type="submit" value="wa">${WAICON}Send on WhatsApp</button>
    <button class="btn mag" type="submit" value="mail">Send by email</button>
  </div>
  <p class="status" id="status" role="status"></p>
</form>`;
const leadSection=(o={})=>`<section class="blk" id="start"><div class="wrap formbox">
  <div class="rv"><h2>${o.h||'Start a <span class="grad">project</span>'}</h2><p class="lead" style="margin-top:16px">${o.p||"Share your details and brand links. Your message opens in WhatsApp or email, ready to send to me."}</p>
  <p><a class="btn wa mag" href="#" data-wa="Hi Bilal, I saw your portfolio and want to discuss my brand.">${WAICON}Or chat on WhatsApp now</a></p></div>
  ${formHTML.replace('id="lead"','id="lead" data-intent="'+(o.i||"")+'"')}</div></section>`;

/* ---------- pages ---------- */
function home(){
 const tiles=P.map((p,i)=>`<a href="#/p/${p.id}" style="--i:${i}" title="${p.name}" aria-label="${p.name}">${logo(p,0)}</a>`).join("");
 const allT=TL.flatMap(g=>g.i);
 const tick=[...allT,...allT].map(t=>`<span class="tk">${mk(t[1],1)}${t[0]}</span>`).join("");
 return `
 <section class="hero"><div class="wrap">
  <h1 id="h1" aria-label="Built by Bilal"><span class="grad">Built by Bilal</span></h1>
  <div class="hero-grid">
   <div>
    <p class="typed" aria-live="off">I build <span id="typed"></span></p>
    <p class="lead">Bilal Javed. I run a brand's marketing from the first idea to the last ad, and I can do all of it on my own.</p>
    <ul class="facts"><li><b data-count="32">0</b><span>years old</span></li><li><b data-count="12" data-suf="+">0</b><span>years in marketing</span></li><li><b data-count="${P.length}">0</b><span>brands worked with</span></li></ul>
    <div class="row"><a class="btn wa mag" href="#" data-wa="Hi Bilal, I saw your portfolio.">${WAICON}Chat on WhatsApp</a><a class="btn primary mag" href="#start" data-go="start">Start a project</a></div>
   </div>
   <div><img class="hero-art" src="assets/logo/logo.jpg" alt="Built by Bilal: AI, automation, systems, growth. Bilal Javed." onerror="this.remove()"></div>
  </div>
 </div></section>

 <div class="ticker" aria-label="Tools I use"><div>${tick}</div></div>

 <section class="blk" id="validator"><div class="wrap toolhero">
  <div>
   <span class="eyebrow rv">For first-time founders</span>
   <h2 class="rv">Are you starting a business? <span class="grad">Don't take the risk.</span></h2>
   <p class="lead rv" style="--d:60ms">Test your idea before you spend a rupee on it. Try the Business Evaluation Tool I built and see where your idea is strong, where it is weak, and what to fix first.</p>
   <div class="benefits">${[
    ["Know before you invest","A score out of 100 and a clear verdict on your idea, before any money is spent."],
    ["Spot the weak points","Six areas scored: market, customer problem, competition, pricing, differentiation and customer clarity."],
    ["A plan, not just a score","What to change, an MVP recommendation and a first 30-day launch plan."],
    ["Know your customer and rivals","An ideal customer profile and a competitor analysis written for your idea."],
    ["Find your first customers","Marketing channels and customer acquisition ideas to start with."],
    ["Keep your report","Download it as a text file, or save it as a PDF to share."]
   ].map((b,j)=>`<div class="panel tilt rv" style="--d:${j*60}ms"><h3>${b[0]}</h3><p>${b[1]}</p></div>`).join("")}</div>
   <div class="row rv"><a class="btn primary mag" href="${TOOL_URL}" target="_blank" rel="noopener">Try the evaluation tool</a><a class="btn wa mag" href="#" data-wa="Hi Bilal, I would like a license key for the Business Idea Validation Kit.">${WAICON}Get a license key</a><a class="btn mag" href="#/tool">See how it works</a></div>
   <p class="note">A thinking framework to sharpen your idea. It is not financial or legal advice.</p>
  </div>
  <figure class="shot rv" style="--d:120ms"><img src="assets/tool-report.jpg" alt="Sample report from the Business Idea Validation Kit showing a score and verdict" loading="lazy"><figcaption>A sample report</figcaption></figure>
 </div></section>


 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><h2>Brands I have <span class="grad">built for</span></h2><p class="lead">${P.length} brands across more than ten industries. Every tile opens that brand's page.</p></div>
  <div class="mosaic">${tiles}</div>
 </div></section>

 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><div><h2>Skills at <span class="grad">pro level</span></h2></div><div><p class="lead">${SKN} skills across marketing, production, people and AI. Every one is at Pro level or Advanced.</p><a class="more" href="#/skills">See every skill in detail →</a></div></div>
  <div class="cols">${SK.map((g,j)=>`<div class="panel sum tilt rv" style="--d:${j*70}ms"><h3>${g.g}</h3><ul>${g.i.slice(0,5).map(s=>`<li>${s[0]}</li>`).join("")}${g.i.length>5?`<li>and ${g.i.length-5} more</li>`:""}</ul></div>`).join("")}</div>
 </div></section>

 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><div><h2>Tools I <span class="grad">work in</span></h2></div><div><p class="lead">${TLN} tools across design, video, websites, AI and ad platforms.</p><a class="more" href="#/tools">See the full toolkit →</a></div></div>
  <div class="cols" style="grid-template-columns:repeat(auto-fill,minmax(170px,1fr))">${allT.map((t,j)=>`<div class="tilt rv" style="--d:${(j%8)*40}ms;padding:16px;display:flex;align-items:center;gap:12px">${mk(t[1],1)}<b style="font:700 15px var(--display)">${t[0]}</b></div>`).join("")}</div>
 </div></section>

 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><h2>How I work</h2><p class="lead">One person for small briefs, a coordinated team for large ones.</p></div>
  <div class="cols" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">
   <div class="panel tilt rv"><h3>On my own</h3><p>I can manage everything alone: strategy, website, content, shoots, edits, ads and reporting, with one point of contact.</p></div>
   <div class="panel tilt rv" style="--d:80ms"><h3>With my team</h3><p>A full team of freelancers is attached to me, so the workload is shared and bigger projects keep moving without slowing down.</p></div>
  </div>
 </div></section>

 

 <section class="blk"><div class="wrap"><div class="free tilt rv"><h2>Get a <span class="grad">free brand report</span></h2><p class="lead">No fixed packages. We analyse your brand first, then tell you what it needs and what it costs.</p><a class="btn primary mag" href="#/packages">See how it works</a></div></div></section>
 ${leadSection()}`;
}

function skills(){
 return `<section class="hero" style="padding-bottom:16px"><div class="wrap">
  <h1 class="pgtitle" data-scr>Skills</h1>
  <p class="lead">12+ years of hands-on work. Every skill below is at Pro level or Advanced.</p>
 </div></section>
 <div class="wrap">${SK.map(g=>`<div class="group"><h2>${g.g}</h2><p>${g.d}</p><div class="cols" style="margin-bottom:32px">${g.i.map(skillCard).join("")}</div></div>`).join("")}</div>
 ${leadSection()}`;
}

function tools(){
 return `<section class="hero" style="padding-bottom:16px"><div class="wrap">
  <h1 class="pgtitle" data-scr>Tools</h1>
  <p class="lead">The software, AI platforms and ad networks I work in every day. Pro level, with Advanced command of the AI stack.</p>
 </div></section>
 <div class="wrap">${TL.map(g=>`<div class="group"><h2>${g.g}</h2><div class="cols" style="margin:24px 0 32px">${g.i.map((t,j)=>toolCard(g.g,t,j)).join("")}</div></div>`).join("")}</div>
 ${leadSection()}`;
}

function industries(){
 return `<section class="hero" style="padding-bottom:16px"><div class="wrap">
  <h1 class="pgtitle" data-scr>Industries</h1>
  <p class="lead">The niches I have worked in, with the brands in each. Every brand opens its own page.</p>
 </div></section>
 <div class="wrap">${GROUPS.map(g=>{const it=P.filter(p=>p.group===g);return `
  <div class="ind"><div class="rv"><h3 style="font-size:24px">${g}</h3><small>${it.length} ${it.length>1?"brands":"brand"}</small></div>
  <div class="bgrid">${it.map((p,j)=>`<a class="bm tilt rv" style="--d:${j*50}ms" href="#/p/${p.id}">${logo(p,56)}<span style="margin:0"><b>${p.name}</b><span>${p.cat}</span></span></a>`).join("")}</div></div>`}).join("")}</div>`;
}

function work(){
 return `<section class="hero" style="padding-bottom:20px"><div class="wrap">
  <h1 class="pgtitle" data-scr>Brands</h1>
  <p class="lead">${P.length} brands, each with its own page, scope of work and website.</p>
 </div></section>
 <div class="wrap"><div class="bigrid">${P.map((p,j)=>`
  <a class="bc tilt rv" data-brand="${p.id}" style="--d:${(j%6)*50}ms;--pc:${p.c}" href="#/p/${p.id}"><div class="band" style="background:var(--pc)">${logo(p,76)}</div><div class="meta"><b>${p.name}</b><span>${p.cat}</span></div></a>`).join("")}</div></div>`;
}

function project(id){
 const i=P.findIndex(p=>p.id===id); if(i<0) return home();
 const p=P[i],fg=ink(p.c),prev=P[(i-1+P.length)%P.length],next=P[(i+1)%P.length];
 const scope=p.mode==="inf"?INF:FULL;
 const role=p.mode==="inf"?"I managed the influencers and the content for this brand.":"I handled this brand from website to ads, and did the work myself.";
 return `<div data-brand="${p.id}" style="--pc:${p.c};--pi:${fg}">
 <section class="pband" style="background:linear-gradient(135deg,var(--pc),color-mix(in srgb,var(--pc) 55%,#000));color:var(--pi)"><div class="wrap">
  <div><p class="cat">${p.group}</p><h1>${p.name}</h1><p class="cat">${p.cat}</p></div>
  ${logo(p,150)}
 </div></section>
 <section class="blk" style="border-top:0"><div class="wrap">
  <div class="blk-head rv"><h2>My role</h2><p class="role">${role}</p></div>
  <div class="scope">${scope.map((s,j)=>`<div class="tilt rv" style="--d:${(j%6)*50}ms"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div>
  <div class="row" style="margin-top:32px">${p.url?`<a class="pbtn mag" href="${p.url}" target="_blank" rel="noopener">Visit ${p.name}</a>`:""}<a class="btn wa mag" href="#" data-wa="Hi Bilal, I saw your work for ${p.name} and want something similar for my brand.">${WAICON}Want this for your brand?</a></div>
 </div></section>
 <section class="blk"><div class="wrap pager">
  <a class="tilt" href="#/p/${prev.id}"><small>Previous</small><b>${prev.name}</b></a>
  <a class="tilt" href="#/p/${next.id}" style="text-align:right"><small>Next</small><b>${next.name}</b></a>
 </div></section></div>`;
}

function contact(){
 return `<section class="hero" style="padding-bottom:0"><div class="wrap">
  <img class="big-logo" src="assets/logo/logo.jpg" alt="Built by Bilal logo" onerror="this.remove()">
  <h1 class="pgtitle" data-scr>Contact</h1>
  <p class="lead">Send me the brief on WhatsApp, call, or fill in the form below.</p>
  <dl class="ctrow">
   <dt>WhatsApp and call</dt><dd><a href="#" data-wa="Hi Bilal, I saw your portfolio.">03344399998</a></dd>
   <dt>Email</dt><dd><a href="mailto:${EMAIL}">${EMAIL}</a></dd>
   <dt>Based in</dt><dd>Lahore, Pakistan</dd>
  </dl>
 </div></section>${leadSection()}`;
}


function packages(){
 const steps=[
  ["Share your brand","Send your name, contact number, brand name and links through the form on this page."],
  ["We analyse it","We review your website, social media, content, ads and positioning."],
  ["You receive a report","A written report, free of charge, covering everything listed below."],
  ["You choose","Monthly work, one-time work, or both. There is no fixed bundle to fit into."],
  ["We start","Work begins on the scope you approve, with clear monthly deliverables."]];
 const rep=[
  ["If you already have a brand",["The loopholes we find in your current setup","The fixes for each one","Optimisations to get more from what you already run"]],
  ["If you are starting from scratch",["The services your brand needs, and why","What to build first and what can wait"]],
  ["Pricing for your case",["What we charge per month","What we charge for one-time work"]],
  ["Monthly output",["Exactly what you receive each month","So you know what the monthly fee delivers"]]];
 return `<section class="hero" style="padding-bottom:16px"><div class="wrap">
  <h1 class="pgtitle" data-scr>Packages</h1>
  <p class="lead">We do not sell fixed packages. We study your brand first, then price a plan that fits it.</p>
 </div></section>

 <section class="blk" style="border-top:0"><div class="wrap">
  <div class="blk-head rv"><h2>Why no packages</h2><p class="lead">Most freelancers and agencies hand over a price list and guess what a brand needs. A package is written before anyone has looked at your brand, so it only fits by luck. We do not guide you blindly. We look at your brand first.</p></div>
 </div></section>

 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><h2>How it works</h2><p class="lead">From your first message to the start of work.</p></div>
  <ol class="steps">${steps.map((s,j)=>`<li class="tilt rv" style="--d:${j*70}ms"><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join("")}</ol>
 </div></section>

 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><h2>What the report covers</h2><p class="lead">One report, written for your brand and its situation.</p></div>
  <div class="cols" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">${rep.map((r,j)=>`<div class="panel rep tilt rv" style="--d:${j*70}ms"><h3>${r[0]}</h3><ul>${r[1].map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}</div>
 </div></section>

 <section class="blk"><div class="wrap"><div class="free tilt rv"><h2>The report is <span class="grad">free</span></h2><p class="lead">No charge and no obligation to work with us afterwards. You keep the report either way.</p></div></div></section>
 ${leadSection({h:'Get your free <span class="grad">brand report</span>',p:"Share your brand name, contact number and links. Your message opens in WhatsApp or email, ready to send.",i:"I'd like to request the free brand analysis report."})}`;
}


function tool(){
 const feats=[
  ["Score out of 100","One overall validation score and a clear verdict for your idea."],
  ["Six-part breakdown","Market opportunity, customer problem, competition, pricing, differentiation and customer clarity, each scored."],
  ["Eleven report sections","Executive verdict, ideal customer, competitor analysis, unique selling proposition, biggest risks, what to change, MVP recommendation, 30-day launch plan, marketing channels, customer acquisition ideas and final verdict."],
  ["Take it with you","Download the report as a text file, or print it and save it as a PDF."]];
 const steps=[
  ["Get a license key","Message me on WhatsApp and I will send you a key."],
  ["Open the tool","Enter the key. It activates once, on the device you use."],
  ["Enter your idea","Business name, contact number, idea, target customer, market, price and competition."],
  ["Read your report","A structured evaluation of your idea in a few moments."]];
 return `<section class="hero" style="padding-bottom:16px"><div class="wrap">
  <h1 class="pgtitle" data-scr>Validation Kit</h1>
  <p class="subtitle">Business Idea Validation Kit</p>
  <p class="lead">Starting a business? Don't take the risk. Test your idea before you spend money on it. Enter your idea and receive a structured AI evaluation with a score and a verdict.</p>
  <div class="row" style="margin-top:24px"><a class="btn primary mag" href="${TOOL_URL}" target="_blank" rel="noopener">Open the tool</a><a class="btn wa mag" href="#" data-wa="Hi Bilal, I would like a license key for the Business Idea Validation Kit.">${WAICON}Get a license key</a></div>
 </div></section>

 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><h2>See it in action</h2><p class="lead">Real screens from the tool, using a sample idea.</p></div>
  <div class="shots">
   <figure class="shot rv"><img src="assets/tool-gate.jpg" alt="License key screen of the Business Idea Validation Kit" loading="lazy"><figcaption>1. Enter your license key</figcaption></figure>
   <figure class="shot rv" style="--d:80ms"><img src="assets/tool-form.jpg" alt="Idea entry form of the Business Idea Validation Kit" loading="lazy"><figcaption>2. Describe your idea</figcaption></figure>
   <figure class="shot rv" style="--d:160ms"><img src="assets/tool-report.jpg" alt="Sample validation report with score and verdict" loading="lazy"><figcaption>3. Get your report</figcaption></figure>
  </div>
 </div></section>

 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><h2>What you get</h2><p class="lead">A thinking framework that shows where an idea is strong and where it is weak.</p></div>
  <div class="cols" style="grid-template-columns:repeat(auto-fit,minmax(250px,1fr))">${feats.map((f,j)=>`<div class="panel tilt rv" style="--d:${j*70}ms"><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join("")}</div>
 </div></section>

 <section class="blk"><div class="wrap">
  <div class="blk-head rv"><h2>How it works</h2><p class="lead">Four steps from license key to report.</p></div>
  <ol class="steps">${steps.map((s,j)=>`<li class="tilt rv" style="--d:${j*70}ms"><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join("")}</ol>
 </div></section>

 <section class="blk"><div class="wrap"><div class="free tilt rv"><h2>Ready to <span class="grad">test your idea?</span></h2><p class="lead">The tool needs a license key. Message me on WhatsApp and I will send you one.</p><div class="row" style="justify-content:center"><a class="btn wa mag" href="#" data-wa="Hi Bilal, I would like a license key for the Business Idea Validation Kit.">${WAICON}Get a license key</a><a class="btn mag" href="${TOOL_URL}" target="_blank" rel="noopener">Open the tool</a></div><p class="note" style="max-width:56ch">The tool scores the structure and clarity of your idea. It is a thinking framework, not financial or legal advice.</p></div></div></section>`;
}

/* ---------- effects ---------- */
let cleanups=[];
const CH="ABCDEFGHJKLMNPQRSTUVWXYZ#%&*+=<>/";
function scramble(el,final,dur=800){
 if(RM){el.textContent=final;return}
 const t0=performance.now(),n=final.length;
 (function f(now){const p=Math.min(1,(now-t0)/dur);let s="";
  for(let i=0;i<n;i++){const c=final[i];s+=(c===" "||i<p*n)?c:CH[(Math.random()*CH.length)|0]}
  el.textContent=s;if(p<1)requestAnimationFrame(f)})(t0)}
function typer(el){
 const words=["brands.","websites.","campaigns.","videos.","stalls and events.","AI workflows."];
 if(RM){el.textContent=words[0];return}
 let w=0,c=0,del=false,t;
 (function tick(){const full=words[w];
  c+=del?-1:1;el.textContent=full.slice(0,c);
  let d=del?35:70;
  if(!del&&c===full.length){del=true;d=1400}
  else if(del&&c===0){del=false;w=(w+1)%words.length;d=300}
  t=setTimeout(tick,d)})();
 cleanups.push(()=>clearTimeout(t));
}
function counters(){
 document.querySelectorAll("[data-count]").forEach(el=>{
  const n=+el.dataset.count,suf=el.dataset.suf||"";
  if(RM){el.textContent=n+suf;return}
  const t0=performance.now();
  (function f(now){const p=Math.min(1,(now-t0)/1400),e=1-Math.pow(1-p,3);el.textContent=Math.round(n*e)+suf;if(p<1)requestAnimationFrame(f)})(t0)});
}
let io;
function observe(){
 if(io)io.disconnect();
 io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target;el.classList.add("in");setTimeout(()=>el.classList.add("done"),1000);io.unobserve(el)}}),{threshold:.12});
 document.querySelectorAll(".rv").forEach(el=>io.observe(el));
}
/* tilt, spotlight, magnetic buttons, cursor glow */
document.addEventListener("pointermove",e=>{
 document.body.style.setProperty("--gx",e.clientX+"px");document.body.style.setProperty("--gy",e.clientY+"px");
 if(RM||e.pointerType==="touch")return;
 const t=e.target.closest&&e.target.closest(".tilt");
 if(t){const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  t.style.setProperty("--mx",x*100+"%");t.style.setProperty("--my",y*100+"%");
  if(r.width<520){t.style.setProperty("--ry",((x-.5)*8)+"deg");t.style.setProperty("--rx",(-(y-.5)*8)+"deg")}}
 const m=e.target.closest&&e.target.closest(".mag");
 if(m){const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`}
});
document.addEventListener("pointerout",e=>{
 const t=e.target.closest&&e.target.closest(".tilt");if(t&&!t.contains(e.relatedTarget)){t.style.setProperty("--rx","0deg");t.style.setProperty("--ry","0deg")}
 const m=e.target.closest&&e.target.closest(".mag");if(m&&!m.contains(e.relatedTarget))m.style.transform="";
});
/* hover scramble on page titles */
document.addEventListener("pointerover",e=>{const h=e.target.closest&&e.target.closest("[data-scr]");if(h&&!h.dataset.busy){h.dataset.busy=1;scramble(h,h.dataset.scr,500);setTimeout(()=>delete h.dataset.busy,550)}});
/* haptics + whatsapp deep links */
const buzz=ms=>{try{navigator.vibrate&&navigator.vibrate(ms)}catch(_){}};
document.addEventListener("click",e=>{
 const a=e.target.closest&&e.target.closest("a,button");
 if(a)buzz(a.dataset.wa?[12,40,12]:10);
 if(a&&a.dataset.wa){a.href=waLink(a.dataset.wa)}
 if(a&&a.dataset.go){e.preventDefault();const el=document.getElementById(a.dataset.go);el&&el.scrollIntoView({behavior:RM?"auto":"smooth"})}
});
/* lead form */
document.addEventListener("submit",e=>{
 if(e.target.id!=="lead")return;e.preventDefault();
 const f=e.target,st=f.querySelector("#status"),d=Object.fromEntries(new FormData(f));
 const name=(d.name||"").trim(),phone=(d.phone||"").trim(),brand=(d.brand||"").trim(),links=(d.links||"").trim();
 if(!name||!phone||!brand){st.textContent="Please fill in your name, contact number and brand name.";buzz([30,40,30]);(f.querySelector(!name?"[name=name]":!phone?"[name=phone]":"[name=brand]")).focus();return}
 if(phone.replace(/\D/g,"").length<7){st.textContent="Please enter a valid contact number.";f.querySelector("[name=phone]").focus();return}
 const msg=`Hi Bilal, ${f.dataset.intent||"I'd like to discuss a project."}\n\nName: ${name}\nContact number: ${phone}\nBrand name: ${brand}\nBrand links: ${links||"Not available"}`;
 const how=e.submitter&&e.submitter.value;
 if(how==="mail"){location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry: "+brand)}&body=${encodeURIComponent(msg)}`;st.textContent="Opening your email app with your details."}
 else{const a=document.createElement("a");a.href=waLink(msg);a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();st.textContent="Opening WhatsApp with your details. Press send there to deliver them."}
 buzz([15,50,15]);
});
/* particle network background */
(function(){
 const cv=$("#net"),cx=cv.getContext("2d");if(RM||!cx)return;
 let W,H,pts=[],raf;
 const rs=()=>{W=cv.width=innerWidth;H=cv.height=innerHeight;const n=Math.min(95,Math.round(W*H/16000));pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))};
 rs();addEventListener("resize",rs);
 const col=()=>getComputedStyle(document.documentElement).getPropertyValue("--a").trim()||"#1FB84F";
 function draw(){
  cx.clearRect(0,0,W,H);const c=col();cx.fillStyle=c;cx.strokeStyle=c;
  for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;p.t=(p.t||Math.random()*6)+.03;cx.globalAlpha=.6+.4*Math.sin(p.t);cx.shadowColor=c;cx.shadowBlur=12;cx.beginPath();cx.arc(p.x,p.y,1.9,0,6.3);cx.fill();cx.shadowBlur=0}
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=dx*dx+dy*dy;if(d<19000){cx.globalAlpha=.24*(1-d/19000);cx.beginPath();cx.moveTo(pts[i].x,pts[i].y);cx.lineTo(pts[j].x,pts[j].y);cx.stroke()}}
  raf=requestAnimationFrame(draw)}
 draw();
 document.addEventListener("visibilitychange",()=>{if(document.hidden)cancelAnimationFrame(raf);else draw()});
})();

/* ---------- router ---------- */
function route(){
 cleanups.forEach(f=>f());cleanups=[];
 const h=location.hash.replace(/^#\/?/,""),[r,arg]=h.split("/");
 let html,key="home",title="Built by Bilal — Portfolio";
 if(r==="skills"){html=skills();key="skills";title="Skills — Built by Bilal"}
 else if(r==="tools"){html=tools();key="tools";title="Tools — Built by Bilal"}
 else if(r==="industries"){html=industries();key="industries";title="Industries — Built by Bilal"}
 else if(r==="work"){html=work();key="work";title="Brands — Built by Bilal"}
 else if(r==="packages"){html=packages();key="packages";title="Packages — Built by Bilal"}
 else if(r==="tool"){html=tool();key="tool";title="Validation Kit — Built by Bilal"}
 else if(r==="contact"){html=contact();key="contact";title="Contact — Built by Bilal"}
 else if(r==="p"&&arg){html=project(arg);key="work";const p=P.find(x=>x.id===arg);if(p)title=p.name+" — Built by Bilal"}
 else if(r==="start"){html=home()}
 else html=home();
 const app=$("#app");app.style.animation="none";void app.offsetWidth;app.style.animation="";
 app.innerHTML=html;document.title=title;
 document.querySelectorAll("nav a").forEach(a=>{if(a.dataset.r===key)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
 /* page titles: store text for hover scramble, scramble hero on load */
 document.querySelectorAll("[data-scr]").forEach(el=>{const t=el.textContent;el.dataset.scr=t;scramble(el,t,700)});
 const hh=$("#h1 .grad");if(hh)scramble(hh,"Built by Bilal",1000);
 const ty=$("#typed");if(ty)typer(ty);
 document.querySelectorAll("[data-wa]").forEach(a=>a.href=waLink(a.dataset.wa));
 themeBrands();counters();observe();window.scrollTo(0,0);
}
addEventListener("hashchange",route);route();
