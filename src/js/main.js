"use strict";

//Codigo de header
// trayendome los elementos
const btnElement = document.querySelector(".js-click");
const menuElement = document.querySelector(".js-menu");

function getHidden() {
  menuElement.classList.toggle("hidden");
}

btnElement.addEventListener("click", getHidden);

//collapsed Section Herramientas

const collapsedFrontElement = document.querySelector(".js-collapsed-front");
const collapsedBackElement = document.querySelector(".js-collapsed-back");
const collapsedOtherElement = document.querySelector(".js-collapsed-other");
const collapsedSkillElement = document.querySelector(".js-collapsed-skill");

function getClick(event) {
  const currentTarget = event.currentTarget;
  currentTarget.parentNode.classList.toggle('collapsed');

  const sectionElement = document.querySelectorAll('.js-section');

  for (let index = 0; index < sectionElement.length; index++) {
    if (!currentTarget.parentNode.classList.toggle("collapsed")) {
      currentTarget.parentNode.classList.toggle("collapsed");
    }
  }
}

//listener

collapsedFrontElement.addEventListener("click", getClick);
collapsedBackElement.addEventListener("click", getClick);
collapsedOtherElement.addEventListener("click", getClick);
collapsedSkillElement.addEventListener("click", getClick);
