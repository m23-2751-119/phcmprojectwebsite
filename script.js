/* ===== SAMPLE DATA ===== */
/* Images: local file in /images is tried */
var LOCAL={'phcm-library':'phcmlibrary.jpeg','phcm-admission':'phcmadmission.jpg','phcm-pc':'phcmpc.jpeg','prog-cs':'phcmcomputer.jpeg','prog-comm':'phcmart.jpeg','prog-nursing':'phcmnursing.jpeg','prog-biz':'phcmbusiness.jpg','prog-shs':'phcmseniorhigh.jpeg','prog-short':'phcmshortcourses.jpg','phcm-tour':'phcmtour.jpg','phcm-tech':'phcmtech.jpeg','phcm-christmas':'phcmchristmas.jpeg','phcm-scholar':'phcmscholar.jpg','phcm-sport':'phcmsport.jpeg','phcm-seminar':'phcmseminar.jpg','phcm-patientroom':'phcmpatient.jpg','phcm-gym':'phcmgymnasium.jpg'};
var IMG=function(id){return 'images/'+LOCAL[id]};
/* Program photo names above (prog-*) fall back to a sample online photo */

var ONLINE=function(id){return 'https://images.unsplash.com/photo-1'+(ALIAS[id]||id)+'?auto=format&fit=crop&w=800&q=60'};
function imgFail(el,id){if(!el.dataset.t){el.dataset.t=1;el.src=ONLINE(id)}else{el.remove()}}
var PROGS=[
 {t:'College of Computer Studies',d:'BS Computer Science and BS Information Technology .',i:'prog-cs',full:'Covers programming, databases, networking and software projects. Confirm the official offerings with the school.'},
 {t:'Communication & Arts',d:'BA Communication with media and creative practice .',i:'prog-comm',full:'Builds writing, broadcasting and digital media skills through studio and community projects.'},
 {t:'College of Nursing',d:'Nursing preparation with medical practice .',i:'prog-nursing',full:'Combines pedagogy, medical development and a supervised teaching practicum.'},
 {t:'Business & Accountancy',d:'Business programs for future entrepreneurs and professionals .',i:'prog-biz',full:'Covers accounting, marketing, management and entrepreneurship.'},
 {t:'Senior High School',d:'Academic, TVL, Arts & Design and Sports tracks .',i:'prog-shs',full:'Prepares Grade 11 and 12 learners for college, work or entrepreneurship.'},
 {t:'Graduate & Short Courses',d:'Continuing education for working professionals .',i:'prog-short',full:'Flexible evening and weekend courses for upskilling.'}];
var NEWS=[
 {t:'Admissions Inquiries Open for the Next Term',c:'Admissions',dt:'2026-11-10',i:'phcm-admission',d:'Prospective students may now send inquiries online.',full:'Prospective students may submit an inquiry through the Admissions page.'},
 {t:'Computer Studies Students Showcase Capstone Projects',c:'Academics',dt:'2026-11-03',i:'phcm-pc',d:'Student teams present software and IT solutions.',full:'Graduating students presented capstone projects to faculty and guests.'},
 {t:'Library Orientation for New Students',c:'Campus',dt:'2026-10-24',i:'phcm-library',d:'Learn how to use library and online resources.',full:'The library holds orientation sessions on research tools and borrowing.'},
 {t:'Scholarship and Financial Assistance Reminder',c:'Admissions',dt:'2026-10-12',i:'phcm-scholar',d:'Check requirements and deadlines.',full:'Students are reminded to check scholarship requirements with the assistance office.'},
 {t:'Faculty Seminar on Modern Teaching Methods',c:'Academics',dt:'2026-09-30',i:'phcm-seminar',d:'Teachers explore blended learning tools.',full:'Faculty members joined a workshop on blended and outcomes-based teaching.'},
 {t:'Intramurals Opening Program',c:'Student Life',dt:'2026-09-15',i:'phcm-sport',d:'Teams kick off a week of sports and fellowship.',full:'Student teams paraded and competed in opening games.'}];
var EVS=[
 {t:'Open House & Campus Tour',dt:'2026-12-05',l:'PHCM Main Building',i:'phcm-tour',d:'Meet teachers and tour facilities.',full:'Families are invited to explore classrooms and meet faculty.'},
 {t:'Tech & Media Fair',dt:'2026-12-12',l:'Student Hall',i:'phcm-tech',d:'Student projects on display.',full:'Computer Studies and Communication students present projects.'},
 {t:'Perpetualites Christmas Fellowship',dt:'2026-12-18',l:'School Quadrangle',i:'phcm-christmas',d:'A community celebration with performances.',full:'Students, faculty and staff gather for songs, games and sharing.'}];
var LEAD=[['Dr. Jose Tamayo ','President'],['Dr. Jose Ramirez Jr. ','Vice President, Academics'],['Atty. Stee Boh Run ','Registrar']];
var FAC=[['Prof. Lisa Ana Village ','Computer Studies'],['Prof. Mark Santiago ','Business'],['Prof. Elena Robles ','Communication'],['Prof. Selene Sapphi ','Nursing']];
var CAMP=[['Library','phcm-library'],['Computer & Science Laboratories','phcm-pc'],['Classrooms & Study Areas','phcm-tour'],['Patient Rooms','phcm-patientroom'],['Gymnasium','phcm-gym']];
var CLUBS=[['💻','Computing Society','Tech talks, coding sessions and hackathons.'],['🎤','Communication Guild','Broadcasting, writing and media projects.'],['🏀','Sports Council','Intramurals and sports clinics.'],['🎭','Cultural Troupe','Music, dance and theater performances.'],['🤝','Outreach Volunteers','Community service and fellowship.']];
var FAQS=[['When does enrollment start?','Enrollment dates are announced each term .'],['Are scholarships available?','Scholarship and assistance options may be offered .'],['Can I transfer from another school?','Yes. Submit your transcript for evaluation .'],['Is there a payment plan?','Installment options may be available .']];

/* ===== HELPERS ===== */
var $=function(s,e){return (e||document).querySelector(s)},$$=function(s,e){return Array.from((e||document).querySelectorAll(s))};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function fmt(d){return new Date(d+'T00:00:00').toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}
function pic(id,alt){return '<div class="ph"><img loading="lazy" src="'+IMG(id)+'" alt="'+esc(alt)+'" onerror="imgFail(this,\''+id+'\')"></div>'}
function newsCard(n,k){return '<article class="card rv">'+pic(n.i,n.t)+'<div class="body"><span class="tag">'+n.c+'</span><div class="date">'+fmt(n.dt)+'</div><h3>'+esc(n.t)+'</h3><p>'+esc(n.d)+'</p><button class="btn s" data-modal="n'+k+'">Read More</button></div></article>'}
function evCard(e,k){return '<article class="card rv">'+pic(e.i,e.t)+'<div class="body"><span class="tag">📅 '+fmt(e.dt)+'</span><h3>'+esc(e.t)+'</h3><div class="date">📍 '+esc(e.l)+'</div><p>'+esc(e.d)+'</p><button class="btn s" data-modal="e'+k+'">View Details</button></article>'}
function progCard(p,k){return '<article class="card rv">'+pic(p.i,p.t)+'<div class="body"><h3>'+esc(p.t)+'</h3><p>'+esc(p.d)+'</p><button class="btn s" data-modal="p'+k+'">Learn More</button></div></article>'}
function personCard(p){return '<div class="card person rv"><div class="av">'+p[0].replace(/^(Dr|Prof|Atty)\.\s/,'').split(' ').map(function(w){return w[0]}).join('')+'</div><div class="body"><h3>'+p[0]+'</h3><p>'+p[1]+'</p></div></div>'}

/* ===== RENDER ===== */
$('#h-prog').innerHTML=PROGS.map(progCard).join('');
$('#ac-prog').innerHTML=PROGS.map(progCard).join('');
$('#h-news').innerHTML=NEWS.slice(0,3).map(function(n,k){return newsCard(n,k)}).join('');
$('#h-ev').innerHTML=EVS.map(evCard).join('');
$('#e-list').innerHTML=EVS.map(evCard).join('');
$('#a-lead').innerHTML=LEAD.map(personCard).join('');
$('#a-fac').innerHTML=FAC.map(personCard).join('');
$('#a-camp').innerHTML=CAMP.map(function(c){return '<div class="card rv">'+pic(c[1],c[0])+'<div class="body"><h3>'+c[0]+'</h3></div></div>'}).join('');
$('#faq').innerHTML=FAQS.map(function(f){return '<div class="fq"><button aria-expanded="false">'+f[0]+'</button><div class="a"><p>'+f[1]+'</p></div></div>'}).join('');
$('#ag').innerHTML+=PROGS.map(function(p){return '<option>'+esc(p.t)+'</option>'}).join('');
$('#sl-clubs').innerHTML=CLUBS.map(function(c){return '<div class="card why rv"><i>'+c[0]+'</i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>'}).join('');
$('#yr').textContent=new Date().getFullYear();

/* News filters + search */
var cat='All',q='';
var cats=['All'].concat(Array.from(new Set(NEWS.map(function(n){return n.c}))));
$('#nf').innerHTML=cats.map(function(c){return '<button data-cat="'+c+'"'+(c==='All'?' class="on"':'')+'>'+c+'</button>'}).join('')+'<input id="nq" type="search" placeholder="Search announcements…" aria-label="Search announcements">';
function renderNews(){
 var list=NEWS.map(function(n,k){return{n:n,k:k}}).filter(function(o){return(cat==='All'||o.n.c===cat)&&(o.n.t+o.n.d+o.n.full).toLowerCase().indexOf(q)>-1});
 $('#n-list').innerHTML=list.map(function(o){return newsCard(o.n,o.k)}).join('');
 $('#n-none').style.display=list.length?'none':'block';reveal();
}
$('#nf').addEventListener('click',function(e){var b=e.target.closest('[data-cat]');if(!b)return;cat=b.dataset.cat;$$('#nf button').forEach(function(x){x.classList.toggle('on',x===b)});renderNews()});
$('#nq').addEventListener('input',function(e){q=e.target.value.toLowerCase();renderNews()});
renderNews();

/* ===== MODAL ===== */
var lastFocus;
function openModal(key){
 var t=key[0],k=+key.slice(1),o=t==='n'?NEWS[k]:t==='e'?EVS[k]:PROGS[k];if(!o)return;
 var meta=t==='n'?'<span class="tag">'+o.c+'</span> <span class="date">'+fmt(o.dt)+'</span>':t==='e'?'<span class="tag">📅 '+fmt(o.dt)+'</span> <span class="date">📍 '+esc(o.l)+'</span>':'';
 var extra=t==='p'?'<p style="margin-top:12px"><a class="btn s" href="#admissions/apply" data-close>Apply to this program</a></p>':'';
 $('#mbox').innerHTML='<button class="x" data-close aria-label="Close dialog">✕</button>'+pic(o.i,o.t)+'<div class="body">'+meta+'<h2 id="mt">'+esc(o.t)+'</h2><p style="margin-top:8px">'+esc(o.full)+'</p>'+extra+'</div>';
 lastFocus=document.activeElement;$('#modal').classList.add('show');$('.x').focus();
}
function closeModal(){$('#modal').classList.remove('show');if(lastFocus)lastFocus.focus()}
$('#modal').addEventListener('click',function(e){if(e.target.id==='modal'||e.target.closest('[data-close]'))closeModal()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModal();$('#sbar').classList.remove('show')}});
document.addEventListener('click',function(e){var b=e.target.closest('[data-modal]');if(b)openModal(b.dataset.modal)});

/* ===== FAQ ===== */
$('#faq').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var f=b.parentNode,o=f.classList.toggle('open');b.setAttribute('aria-expanded',o)});

/* ===== ROUTER (hash based) ===== */
var PAGES=['home','about','academics','admissions','studentlife','news','campus','contact'];
function route(){
 var h=(location.hash||'#home').slice(1).split('/'),p=h[0]||'home',sec=h[1];
 var id=PAGES.indexOf(p)>-1?p:'404';
 $$('.page').forEach(function(x){x.classList.toggle('on',x.id==='p-'+id)});
 $$('nav a.nl').forEach(function(a){a.classList.toggle('on',a.dataset.p===id)});
 $('#menu').classList.remove('open');$('#burger').setAttribute('aria-expanded','false');$$('.dd').forEach(function(d){d.classList.remove('open')});
 document.title=(id==='404'?'Not Found':id.charAt(0).toUpperCase()+id.slice(1))+' – PHCM';
 var target=sec&&document.getElementById(sec);
 if(target){setTimeout(function(){target.scrollIntoView({behavior:'smooth'})},60)}else{window.scrollTo(0,0)}
 setTimeout(reveal,80);
}
window.addEventListener('hashchange',route);

/* ===== MOBILE MENU / DROPDOWN ===== */
$('#burger').addEventListener('click',function(){var o=$('#menu').classList.toggle('open');this.setAttribute('aria-expanded',o)});
$$('.dd > a').forEach(function(a){a.addEventListener('click',function(e){if(window.innerWidth<=900&&!a.parentNode.classList.contains('open')){e.preventDefault();a.parentNode.classList.add('open')}})});

/* ===== SEARCH (news, events, programs) ===== */
$('#sbtn').addEventListener('click',function(){var s=$('#sbar');s.classList.toggle('show');if(s.classList.contains('show'))$('#sq').focus()});
$('#sq').addEventListener('input',function(){
 var v=this.value.trim().toLowerCase(),out='';
 if(v.length>1){
  NEWS.forEach(function(n,k){if((n.t+n.d+n.full).toLowerCase().indexOf(v)>-1)out+='<a data-modal="n'+k+'">📰 '+esc(n.t)+'</a>'});
  EVS.forEach(function(n,k){if((n.t+n.d+n.l).toLowerCase().indexOf(v)>-1)out+='<a data-modal="e'+k+'">📅 '+esc(n.t)+'</a>'});
  PROGS.forEach(function(n,k){if((n.t+n.d+n.full).toLowerCase().indexOf(v)>-1)out+='<a data-modal="p'+k+'">🎓 '+esc(n.t)+'</a>'});
  if(!out)out='<a>No results found.</a>';
 }
 $('#sres').innerHTML=out;
});
$('#sres').addEventListener('click',function(e){if(e.target.dataset.modal)$('#sbar').classList.remove('show')});

/* ===== FORMS (front-end demo only – nothing is sent or saved) ===== */
function validate(form){
 var ok=true;
 $$('input[required],select[required],textarea[required]',form).forEach(function(el){
  var good=el.value.trim()!==''&&el.checkValidity();
  el.parentNode.classList.toggle('bad',!good);el.setAttribute('aria-invalid',!good);if(!good)ok=false;
 });return ok;
}
function wire(id,okText){
 var f=$(id),m=$('.msg',f);
 f.addEventListener('submit',function(e){
  e.preventDefault();m.style.display='block';
  if(validate(f)){m.textContent=okText;f.reset()}else{m.textContent='Please fix the highlighted fields and try again.'}
 });
 f.addEventListener('input',function(e){if(e.target.parentNode.classList.contains('bad'))validate(f)});
}
wire('#fa','✔ Demo only: your application was validated, but NOT sent or saved (no backend connected).');
wire('#fc','✔ Demo only: your message was validated, but NOT sent or saved (no backend connected).');

/* ===== SCROLL EFFECTS ===== */
var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
function reveal(){$$('.rv:not(.in)').forEach(function(el){io?io.observe(el):el.classList.add('in')})}
var counted=false;
function counters(){
 if(counted)return;var s=$('.stats');if(!s||!s.offsetParent)return;
 if(s.getBoundingClientRect().top<innerHeight){counted=true;$$('[data-n]').forEach(function(el){var n=+el.dataset.n,c=0,st=Math.ceil(n/60);var t=setInterval(function(){c=Math.min(n,c+st);el.textContent=c.toLocaleString()+'+';if(c>=n)clearInterval(t)},25)})}
}
window.addEventListener('scroll',function(){$('#top').style.display=scrollY>400?'block':'none';counters()});
$('#top').addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

/* ===== INIT ===== */
window.addEventListener('load',function(){
 route();counters();
 setTimeout(function(){var l=$('#loader');l.style.opacity=0;setTimeout(function(){l.style.display='none'},500)},400);
});