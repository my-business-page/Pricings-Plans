(() => {
function init(){
 const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
 const btn=document.querySelector('.menu'),nav=document.getElementById('nav');
 const close=()=>{if(!btn||!nav)return;btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open navigation');nav.classList.remove('open');};
 if(btn&&nav){btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')!=='true';btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));window.addEventListener('resize',()=>{if(innerWidth>720)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}
 const contact=document.getElementById('contact-link');
 document.querySelectorAll('[data-plan]').forEach(a=>a.addEventListener('click',()=>{if(contact){contact.dataset.selectedPlan=a.dataset.plan;contact.setAttribute('aria-label','Start a conversation about the '+a.dataset.plan+' package')}}));
 if(matchMedia('(prefers-reduced-motion: reduce)').matches||!window.gsap)return;
 if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
 gsap.from('.hero-copy > *',{y:16,opacity:0,duration:.65,stagger:.07,ease:'power2.out',delay:.1});
 gsap.from('.hero-art',{y:18,opacity:0,duration:.8,ease:'power2.out',delay:.2});
 if(window.ScrollTrigger)gsap.utils.toArray('.reveal').forEach((el,i)=>{if(el.closest('.hero'))return;gsap.from(el,{y:20,opacity:0,duration:.65,ease:'power2.out',delay:(i%3)*.04,scrollTrigger:{trigger:el,start:'top 90%',once:true}})});
 gsap.to('.orb',{rotation:25,scale:1.06,duration:7,repeat:-1,yoyo:true,ease:'sine.inOut'});
 gsap.to('.change-art',{y:-5,duration:3,repeat:-1,yoyo:true,ease:'sine.inOut'});
 gsap.to('.host-core',{y:-7,duration:3,repeat:-1,yoyo:true,ease:'sine.inOut'});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();