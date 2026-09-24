function showMenu() {
    var menuBtn = document.getElementById('myNavMenu');

    if (menuBtn.className === 'nav-menu') {
        menuBtn.className += ' responsive';
    }
    else {
        menuBtn.className = 'nav-menu';
    }
}

document.querySelectorAll('.nav-list').forEach(item => {
    item.addEventListener('click', function() {
        var menuBtn = document.getElementById('myNavMenu');
        if (menuBtn.classList.contains('responsive')) {
            menuBtn.classList.remove('responsive');
        }
    });
});

window.onscroll = function() { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById('header');

    if (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    )
    {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    }
    else {
        navHeader.style.boxShadow = "none";
    }
}

/* ---- Language (en / ko / vi) ---- */
const LANGS = ['en', 'ko', 'vi'];
const LANG_KEY = 'portfolio-lang';
let currentLang = 'en';
let typingEffect = null;

function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    return key in dict ? dict[key] : I18N.en[key];
}

function detectLang() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
        const saved = localStorage.getItem(LANG_KEY);
        if (LANGS.includes(saved)) return saved;
    } catch (e) { /* storage blocked */ }
    const browser = (navigator.languages || [navigator.language || 'en'])
        .map(l => l.slice(0, 2).toLowerCase())
        .find(l => LANGS.includes(l));
    return browser || 'en';
}

function startTyping() {
    if (typingEffect) typingEffect.destroy();
    typingEffect = new Typed('.type-text', {
        strings: t('hero.typed'),
        loop: true,
        typeSpeed: 150,
        backSpeed: 80,
        backDelay: 2000
    });
}

function setLang(lang) {
    currentLang = LANGS.includes(lang) ? lang : 'en';
    document.documentElement.lang = currentLang;
    try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) { /* storage blocked */ }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
    });

    renderProjects();
    applyFilter();
    startTyping();
}

document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id'),
            link = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');
        if (!link) return;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link')
        } else {
            link.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ---- Reveal-on-scroll + animated counters ---- */
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCount(el) {
    if (el._done) return;
    el._done = true;
    const target = parseInt(el.dataset.countTo, 10) || 0;
    const pad = parseInt(el.dataset.pad, 10) || 0;
    const fmt = (n) => pad ? String(Math.round(n)).padStart(pad, '0') : String(Math.round(n));
    if (reduceMotion) { el.textContent = fmt(target); return; }
    const dur = 1100, t0 = performance.now();
    const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

const revealEls = document.querySelectorAll('.section');
if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => {
        el.classList.add('is-visible');
        el.querySelectorAll('[data-count-to]').forEach(animateCount);
    });
} else {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            entry.target.querySelectorAll('[data-count-to]').forEach(animateCount);
            io.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
}

/* ---- Hero grid canvas ---- */
(function setupHeroCanvas() {
    const cv = document.getElementById('hero-canvas');
    if (!cv || reduceMotion) return;
    const ctx = cv.getContext('2d');
    const grid = 28;
    let mx = -9999, my = -9999, w = 0, h = 0, dpr = 1, raf;

    function resize() {
        const r = cv.getBoundingClientRect();
        dpr = Math.min(2, window.devicePixelRatio || 1);
        w = r.width; h = r.height;
        cv.width = w * dpr; cv.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
        const r = cv.getBoundingClientRect();
        mx = e.clientX - r.left; my = e.clientY - r.top;
    });

    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(29,31,32,0.055)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= w; x += grid) { ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, h); }
        for (let y = 0; y <= h; y += grid) { ctx.moveTo(0, y + .5); ctx.lineTo(w, y + .5); }
        ctx.stroke();
        if (mx > -9000) {
            const gx = Math.round(mx / grid) * grid, gy = Math.round(my / grid) * grid;
            ctx.strokeStyle = 'rgba(89,128,166,0.5)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(gx + .5, 0); ctx.lineTo(gx + .5, h);
            ctx.moveTo(0, gy + .5); ctx.lineTo(w, gy + .5);
            ctx.stroke();
            ctx.fillStyle = 'rgba(89,128,166,0.9)';
            ctx.fillRect(gx - 2, gy - 2, 4, 4);
        }
        raf = requestAnimationFrame(draw);
    }
    draw();
})();

/* ---- Projects (rendered from projects.js) ---- */
const projectList = document.getElementById('project-list');
const openProjects = new Set([PROJECTS[0].code]);

function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const CHEVRON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';

function renderProjects() {
    projectList.innerHTML = PROJECTS.map(p => {
        const d = p[currentLang] || p.en;
        const open = openProjects.has(p.code);
        const link = p.link
            ? `<a class="project-link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(t('work.live'))}: ${esc(p.link.replace(/^https?:\/\//, ''))} &#8599;</a>`
            : '';
        return `
        <div class="project-box blueprint is-shown${open ? ' is-open' : ''}" data-code="${esc(p.code)}" data-tags="${esc(p.stack.join(','))}">
            <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
            <button type="button" class="project-toggle" aria-expanded="${open}">
                <span class="project-code">${esc(p.code)}</span>
                <span class="project-heading">
                    <span class="project-name">${esc(d.name)}</span>
                    <span class="project-info">${esc(d.period)} &middot; ${esc(d.org)}</span>
                    <span class="project-meta">
                        <span class="project-role">${esc(d.role)}</span>
                        ${p.stack.map(s => `<span class="tag">${esc(s)}</span>`).join('')}
                    </span>
                </span>
                <span class="project-chevron">${CHEVRON}</span>
            </button>
            <div class="project-body">
                <div class="project-body-inner">
                    <div class="project-detail">
                        <h4 class="project-subhead">${esc(t('work.overview'))}</h4>
                        ${d.intro.map(s => `<p class="project-intro">${esc(s)}</p>`).join('')}
                        ${link}
                        <h4 class="project-subhead">${esc(t('work.highlights'))}</h4>
                        <ul class="project-list">
                            ${d.highlights.map(s => `<li>${esc(s)}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

projectList.addEventListener('click', (e) => {
    const btn = e.target.closest('.project-toggle');
    if (!btn) return;
    const box = btn.closest('.project-box');
    const open = box.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
    if (open) openProjects.add(box.dataset.code);
    else openProjects.delete(box.dataset.code);
});

/* ---- Project tag filter ---- */
const filterButtons = document.querySelectorAll('#tag-filter .tag');
const resultNote = document.getElementById('result-note');
let currentFilter = 'all';

function applyFilter() {
    const boxes = projectList.querySelectorAll('.project-box');
    let shown = 0;
    boxes.forEach(box => {
        const tags = (box.dataset.tags || '').split(',');
        const match = currentFilter === 'all' || tags.includes(currentFilter);
        box.classList.toggle('is-shown', match);
        if (match) shown++;
    });
    const template = currentFilter === 'all' ? t('work.resultAll')
        : shown === 1 ? t('work.resultOne') : t('work.resultMany');
    resultNote.textContent = template
        .replace('{n}', currentFilter === 'all' ? boxes.length : shown)
        .replace('{tag}', currentFilter);
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentFilter = btn.dataset.filter;
        applyFilter();
    });
});

setLang(detectLang());

function sendMail() {
    emailjs.init('zP8FLCLloUFr_Q6po');

    let name = document.getElementById('sender-name').value;
    let message = document.getElementById('message').value;
    let email = document.getElementById('sender-email').value;

    if (name === '' || message === '' || email === ''){
        alert(t('alert.empty'));
        return;
    }

    emailjs.send('service_ax3l8s5', 'template_tzqacbb', {
        to_name: "Elyn Nguyen",
        from_name: name,
        message: message,
        from_mail: email
        })
        .then(function(response) {
            alert(t('alert.sent'));
        }, function(error) {
            alert(t('alert.failed') + error);
        });
}
