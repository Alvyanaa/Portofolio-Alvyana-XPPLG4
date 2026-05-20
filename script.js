// THEME TOGGLE
const btn  = document.getElementById('theme-toggle');
const html = document.documentElement;

// Terapkan tema tersimpan
const saved = localStorage.getItem('theme') || 'dark';
setTheme(saved);

btn.addEventListener('click', function() {
    const current = html.getAttribute('data-theme');
    const next = (current === 'dark') ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
});

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (theme === 'light') {
        btn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        btn.title = 'Switch to Dark Mode';
    } else {
        btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        btn.title = 'Switch to Light Mode';
    }
}

// TYPING EFFECT
const words  = ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast', 'Creative Coder'];
const target = document.getElementById('typing-text');
let wi = 0, ci = 0, del = false;

function type() {
    if (!target) return;
    const word = words[wi];
    target.textContent = del ? word.slice(0, --ci) : word.slice(0, ++ci);
    if (!del && ci === word.length) { del = true; return setTimeout(type, 1500); }
    if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; }
    setTimeout(type, del ? 60 : 110);
}
type();

// SCROLL REVEAL
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.15 });
document.querySelectorAll('.hidden').forEach(el => obs.observe(el));