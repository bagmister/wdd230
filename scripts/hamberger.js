const hamButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});