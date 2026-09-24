const projects = [
  {title:'Project One', type:'Campaign / Creative Direction', year:'2026', image:'assets/project-01.svg'},
  {title:'Project Two', type:'Brand / Visual System', year:'2026', image:'assets/project-02.svg'},
  {title:'Project Three', type:'Digital / Art Direction', year:'2025', image:'assets/project-03.svg'},
  {title:'Project Four', type:'Film / Production', year:'2025', image:'assets/project-04.svg'},
  {title:'Project Five', type:'Editorial / Design', year:'2025', image:'assets/project-05.svg'},
  {title:'Project Six', type:'Identity / Strategy', year:'2024', image:'assets/project-06.svg'}
];

const root = document.getElementById('projects');
root.innerHTML = projects.map((p,i)=>`
  <a class="project-card fade-in" href="#" data-project="${i}" aria-label="Open ${p.title}">
    <div class="project-visual"><img src="${p.image}" alt="${p.title} placeholder artwork"></div>
    <div class="project-meta"><span>${p.title}</span><span class="type">${p.type} · ${p.year}</span><span class="arrow">↗</span></div>
  </a>`).join('');

const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-project]').forEach(card=>card.addEventListener('click', e=>{
  e.preventDefault();
  const p=projects[card.dataset.project];
  alert(`${p.title}\n\nReplace this placeholder with a project page, case study, video embed, or gallery.\n\n${p.type} · ${p.year}`);
}));

document.querySelector('.footer span:last-child').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
