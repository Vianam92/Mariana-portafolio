"use strict";

//collapsed Section Herramientas

function getClick(event) {
  const currentTarget = event.currentTarget;
  currentTarget.parentNode.classList.toggle("collapsed");
  document.getElementById('arrow').classList.toggle('rotate');
  if(currentTarget.parentNode.classList.contains('collapsed')){
currentTarget.parentNode.classList.add('collapsed');
  }

}

//listener

const listerEvent = () => {
  const collapsedFront = document.querySelectorAll(".js-collapsed");
  for (const element of collapsedFront) {
    element.addEventListener("click", getClick);
  }
};
listerEvent();
