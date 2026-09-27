const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  let open = false;
  btn.addEventListener('click', () => { open = !open; menu.style.maxHeight = open ? menu.scrollHeight + 'px' : '0px'; });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { open = false; menu.style.maxHeight = '0px'; }));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));