'use strict';
// trayendome los elementos
const btnElement = document.querySelector('.js-click');
const menuElement = document.querySelector('.js-menu');

function getHidden() {
  if (menuElement.classList.contains('hidden')) {
    menuElement.classList.toggle('hidden');
  } else{
    menuElement.classList.toggle('hidden');
  }
}

btnElement.addEventListener('click', getHidden);
