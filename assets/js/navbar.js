/** Set up mobile menu start */

const menuOverlay = document.querySelector('.menu-overlay');
const mobileMenuButton = document.querySelector('#mobileMenuButton');
const closeMenu = document.querySelector('.closeMenu');

function mobileMenuToogle() {
  menuOverlay.style.width = '100%';
}

function closeMobileMenu() {
  menuOverlay.style.width = '';
}

closeMenu.addEventListener('click', () => {
  closeMobileMenu();
});

mobileMenuButton.addEventListener('click', () => {
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll('.menu-mobile li a');
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener('click', () => {
    closeMobileMenu();
  });
}

window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  if (newWidth >= 768) {
    menuOverlay.style.width = '';
  }
});

/** Set up mobile menu finish */