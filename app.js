
var typed = new Typed('.text', {
  strings: ["an Open Source Enthusiast", "a Web Developer", "a Competitive Programmer"],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
  smartBackspace: true,
  autoInsertCss: true,
  // color: "#FF6A6A"
});

function goToSection() {
  content.classList.remove('hidden');
  toggleNav.classList.add('hidden');
  toggleNav.classList.remove('display-flex');
}

const toggle = document.querySelector('.toggle');
const content = document.querySelector('.content');
const toggleNav = document.querySelector('.toggle-navbar');

toggle.addEventListener('click', () => {
  content.classList.add('hidden');
  toggleNav.classList.remove('hidden');
  toggleNav.classList.add('display-flex');

  const home = document.querySelector('.home-link');
  const tech = document.querySelector('.tech-link');
  const project = document.querySelector('.project-link');
  const contact = document.querySelector('.contact-link');
  const resume = document.querySelector('.resume-link');
  
  home.addEventListener('click', () => {
    goToSection();
  })
  tech.addEventListener('click', () => {
    goToSection();
  })
  project.addEventListener('click', () => {
    goToSection();
  })
  contact.addEventListener('click', () => {
    goToSection();
  })
  resume.addEventListener('click', () => {
    goToSection();
  })

  const cross = document.querySelector('.cross');
  cross.addEventListener('click', () => {
    content.classList.remove('hidden');
    toggleNav.classList.add('hidden');
    toggleNav.classList.remove('display-flex');
  })

})
