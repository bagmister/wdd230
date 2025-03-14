const hamburgerMenu = document.querySelector('.hamburger')
const offScreenMenu = document.querySelector('.off-screen-menu')
const navigationMenu = document.querySelector('nav')
const oldTemples = document.querySelector('#siteplan')
const newTemples = document.querySelector('#chamber')
const homeTemples = document.querySelector('#home')
const largeTemples = document.querySelector('#form')

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
  });
  
  navigationMenu.addEventListener('click', (event) => {
	const navMenuText = event.target.title;
	galleryHeader.textContent = navMenuText;
  });
  
  offScreenMenu.addEventListener('click', (event) => {
	const navMenuText = event.target.title;
	galleryHeader.textContent = navMenuText;
  });