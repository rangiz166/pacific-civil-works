async function loadSite(){
  const res=await fetch('content/site.json',{cache:'no-store'});
  const s=await res.json();
  const q=id=>document.getElementById(id);
  q('heroHeading').textContent=s.hero_heading;
  q('tagline').textContent=s.tagline;
  q('heroText').textContent=s.hero_text;
  q('phoneTop').textContent=s.phone_display; q('phoneTop').href='tel:'+s.phone_link;
  q('emailTop').textContent=s.email; q('emailTop').href='mailto:'+s.email;
  q('callBtn').href='tel:'+s.phone_link; q('textBtn').href='sms:'+s.phone_link;
  q('serviceAreaMini').textContent=s.service_area;
  q('director').textContent=s.director;
  q('phoneContact').textContent=s.phone_display; q('phoneContact').href='tel:'+s.phone_link;
  q('emailContact').textContent=s.email; q('emailContact').href='mailto:'+s.email;
  q('serviceArea').textContent='Serving '+s.service_area;
  q('footerTagline').textContent=s.tagline;
  q('aboutTagline').textContent=s.tagline;
  const sg=q('servicesGrid'); sg.innerHTML='';
  s.services.forEach(x=>{const a=document.createElement('article');a.className='service-card';a.innerHTML=`<h3>${x.name}</h3><p>${x.description}</p>`;sg.appendChild(a)});
  const mg=q('machineryGrid'); mg.innerHTML='';
  s.machinery.forEach(x=>{const a=document.createElement('article');a.className='card';a.innerHTML=`<img src="${x.image}" alt="${x.name}"><div class="pad"><h3>${x.name}</h3><p>${x.description}</p></div>`;mg.appendChild(a)});
  const pg=q('projectsGrid'); pg.innerHTML='';
  s.projects.forEach(x=>{const a=document.createElement('article');a.className='card';a.innerHTML=`<img src="${x.image}" alt="${x.title}"><div class="pad"><h3>${x.title}</h3><p>${x.description}</p></div>`;pg.appendChild(a)});
}
loadSite();