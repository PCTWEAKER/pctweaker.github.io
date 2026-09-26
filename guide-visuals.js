(function(){
const map=[
  ["refresh","guide-refresh.svg","VISUAL","Windows refresh rate — verify the display before changing game settings."],
  ["game mode","guide-windows.svg","VISUAL","Windows gaming baseline — keep the supported settings simple and measurable."],
  ["graphics","guide-windows.svg","VISUAL","Windows Graphics — check the game's GPU preference and supported graphics options."],
  ["startup","guide-windows.svg","VISUAL","Background load — remove only apps you actually do not need at startup."],
  ["temperature","guide-fps.svg","VISUAL","Thermals and clocks — performance can change when hardware reaches its limits."],
  ["ram","guide-fps.svg","VISUAL","Memory check — verify the expected capacity and configuration before advanced tweaks."],
  ["driver","guide-drivers.svg","VISUAL","Driver testing — record the version and compare the same workload."],
  ["frametime","guide-fps.svg","VISUAL","Frame-time view — average FPS does not show every frame."],
  ["stutter","guide-fps.svg","VISUAL","Stutter diagnosis — identify whether the spike follows CPU, GPU, memory or software behavior."],
  ["fps","guide-fps.svg","VISUAL","Performance workflow — measure FPS, 1% lows and frame-time behavior."],
  ["latency","guide-latency.svg","VISUAL","Input path — mouse, game, render queue, GPU and display all contribute to responsiveness."],
  ["input","guide-latency.svg","VISUAL","Input consistency — keep hardware, refresh rate and FPS conditions consistent."],
  ["mouse","guide-latency.svg","VISUAL","Mouse/input — test polling and sensitivity without changing multiple variables at once."],
  ["ping","guide-network.svg","VISUAL","Ping — round-trip latency to a destination."],
  ["jitter","guide-network.svg","VISUAL","Jitter — variation in latency over time."],
  ["packet loss","guide-network.svg","VISUAL","Packet loss — missing packets can create rubber-banding and delayed updates."],
  ["network","guide-network.svg","VISUAL","Network troubleshooting — separate local FPS problems from connection problems."],
  ["route","guide-network.svg","VISUAL","Routing — compare the same game region/server before and after a routing change."],
  ["atlas","guide-atlas.svg","VISUAL","AtlasOS path — backup → clean Windows → official Playbook → verify."],
  ["iso","guide-atlas.svg","VISUAL","Windows ISO — use an official, unmodified Microsoft ISO."],
  ["playbook","guide-atlas.svg","VISUAL","Atlas Playbook — follow the current official Atlas documentation."],
  ["timerresolution","guide-timer.svg","VISUAL","TimerResolution — optional experiment; measure before and after."],
  ["vanguard","guide-valorant.svg","VISUAL","Riot Vanguard — troubleshoot the exact VAN error instead of applying random security changes."],
  ["valorant","guide-valorant.svg","GAME","VALORANT — competitive baseline and Vanguard troubleshooting."],
  ["cs2","guide-cs2.svg","GAME","Counter-Strike 2 — baseline → video → input → repeatable test."],
  ["counter-strike","guide-cs2.svg","GAME","Counter-Strike 2 — baseline → video → input → repeatable test."],
  ["warzone","guide-warzone.svg","GAME","Warzone — requirements → shaders → drivers → stability."],
  ["shader","guide-warzone.svg","VISUAL","Shader preloading — let the process finish before judging performance."],
  ["fortnite","guide-fortnite.svg","GAME","Fortnite — refresh rate → renderer → FPS cap → measure."],
  ["rendering","guide-fortnite.svg","VISUAL","Fortnite renderer — test the current Performance rendering path deliberately."],
  ["competitive","guide-fortnite.svg","VISUAL","Competitive baseline — use the current in-game options as a starting point."],
  ["game mode","guide-windows.svg","VISUAL","Windows Game Mode — establish a clean baseline before advanced tweaks."]
];
function pick(text){
  const t=text.toLowerCase();
  for(const [key,file,type,caption] of map){if(t.includes(key)) return {file,type,caption};}
  return null;
}
function addVisual(target, data, hero){
  if(!data || (target.nextElementSibling && target.nextElementSibling.classList.contains('guide-visual'))) return;
  const fig=document.createElement('figure');
  fig.className='guide-visual'+(hero?' guide-hero':'');
  const img=document.createElement('img');
  img.src='assets/'+data.file;
  img.alt=data.caption;
  img.loading=hero?'eager':'lazy';
  const cap=document.createElement('figcaption');
  cap.innerHTML='<span class="guide-step">'+(hero?'PCTWEAKER VISUAL':'VISUAL GUIDE')+'</span><br>'+data.caption;
  fig.append(img,cap);
  target.insertAdjacentElement('afterend',fig);
}
const main=document.querySelector('main.article-page, article.article, main.section');
if(!main) return;
const title=main.querySelector('h1');
const lead=main.querySelector('.hero-lead, .lead');
if(title && lead){
  const data=pick((location.pathname+' '+title.textContent));
  if(data) addVisual(lead,data,true);
}
main.querySelectorAll('h2').forEach(h=>{
  const data=pick(h.textContent+' '+title?.textContent+' '+location.pathname);
  if(data) addVisual(h,data,false);
});
})();