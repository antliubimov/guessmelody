// utils.js

import welcome from "./welcome";

const main = document.querySelector(`.main`);

export const getElementFromTemplate = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div;
};

export const changeScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export const replayGame = (element, btnClass) => {
  const resultReplay = element.querySelector(btnClass);
  resultReplay.addEventListener(`click`, backToWelcome);
};


const backToWelcome = () => {
  changeScreen(welcome());
};
