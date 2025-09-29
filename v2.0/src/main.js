/** @format */

const toggleButton = document.querySelector('#toggle-menu');
const navLinks = document.querySelector('#nav-links');
const closeBtn = document.querySelector('.close-menu');

toggleButton.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});
