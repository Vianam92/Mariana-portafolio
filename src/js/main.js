'use strict';

//Codigo de header
// trayendome los elementos
const btnElement = document.querySelector('.js-click');
const menuElement = document.querySelector('.js-menu');

function getHidden() {
  menuElement.classList.toggle('hidden');
}

btnElement.addEventListener('click', getHidden);

//collapsed Section Herramientas

const collapsedElement = document.querySelectorAll('.js-collapsed');

function getClick(event) {
  const currentTarget = event.currentTarget;
  currentTarget.parentNode.classList.toggle('collapsed');
}

//listener

function handlerAllElements(){
  for(const elements of collapsedElement){
    elements.addEventListener('click', getClick);
  }
}

handlerAllElements();

