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
        navHeader.style.boxShadow = "0 1px 6px rgb(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }
    else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

var typingEffect = new Typed('.type-text', {
    strings: ['Software Developer', 'Passionate Coder'],
    loop: true,
    typeSpeed: 150,
    backSpeed: 80,
    backDelay: 2000
})

const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})
sr.reveal('.project-box',{interval: 200})
sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
  
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  function sendMail() {
    emailjs.init('zP8FLCLloUFr_Q6po');

    let name = document.getElementById('sender-name').value;
    let message = document.getElementById('message').value;
    let email = document.getElementById('sender-email').value;

    if (name === '' || message === '' || email === ''){
        alert('Please fill in all the fields before submitting.');
        return;
    }

    emailjs.send('service_ax3l8s5', 'template_tzqacbb', {
        to_name: "Elyn Nguyen",
        from_name: name,
        message: message,
        from_mail: email
        })
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email: ' + error);
        });
  }
