const menuBar = document.querySelector('.menubar');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.icons');

menuBar.addEventListener('click', () => {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});