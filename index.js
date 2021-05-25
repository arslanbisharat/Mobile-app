const menuButton = document.getElementById('menuu');
const mobileNav = document.getElementById('mobile-navv');
const desctopNav = document.getElementById('desktop-nav');
const logo = document.getElementById('logo');
menuButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  desctopNav.style.display = 'block';
  menuButton.style.display = 'none';
  logo.style.display = 'none';
});

const navLink1 = document.getElementById('nav-v1');
const navLink2 = document.getElementById('nav-v2');
const navLink3 = document.getElementById('nav-v3');

navLink1.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display = 'none';
  logo.style.display = 'block';
});

navLink2.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display = 'none';
  logo.style.display = 'block';
});

navLink3.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display = 'none';
  logo.style.display = 'block';
});

const close1 = document.getElementById('span1');

close1.addEventListener('click', () => {
  menuButton.style.display = 'block';
  mobileNav.style.display = 'none';
  desctopNav.style.display = 'none';
  logo.style.display = 'block';
});