async function loadSite(){
  const s = await (await fetch('/content/site.json',{cache:'no-store'})).json();
  const $ = id => document.getElementById(id);

  $('directorTop').textContent=s.director;
  $('phoneTop').textContent='☎ '+s.phone; $('phoneTop').href='tel:'+s.phone_link;
  $('emailTop').textContent='✉ '+s.email; $('emailTop').href='mailto:'+s.email;
  $('heroHeading').innerHTML=s.hero_heading.replace('Machinery Hire','<span class="red">Machinery Hire</span>');
  $('tagline').textContent=s.tagline;
  $('heroText').textContent=s.hero_text;
  $('heroImage').src=s.hero_image;
  $('callBtn').href='tel:'+s.phone_link;
  $('phoneBtn').textContent=s.phone;
  $('textBtn').href='sms:'+s.phone_link;
  $('serviceAreaTrust').textContent='Serving '+s.service_area;

  const makeCard=(x,cls='')=>`<article class="card ${cls}"><img src="${x.image}" alt="${x.name}"><div class="card-body"><h3>${x.name}</h3><p>${x.description}</p></div></article>`;
  $('servicesGrid').innerHTML=s.services.map(x=>makeCard(x)).join('');
  $('machineryGrid').innerHTML=s.machinery.map(x=>makeCard(x,'machine')).join('');
  $('projectsGrid').innerHTML=s.projects.map(x=>`<article class="project"><img src="${x.image}" alt="${x.title}"><div class="project-info"><b>${x.title}</b><span>${x.description}</span></div></article>`).join('');

  $('addressHeading').textContent=s.address;
  $('directionsBtn').href=s.directions_url;
  $('mapLink').href=s.directions_url;
  $('mapFrame').src='https://www.google.com/maps?q='+encodeURIComponent(s.address)+'&output=embed';

  $('directorContact').textContent=s.director;
  $('phoneContact').textContent='☎ '+s.phone; $('phoneContact').href='tel:'+s.phone_link;
  $('emailContact').textContent='✉ '+s.email; $('emailContact').href='mailto:'+s.email;
  $('addressContact').textContent='📍 '+s.address;
}
loadSite();
