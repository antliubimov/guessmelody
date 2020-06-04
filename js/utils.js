// utils.js

export const getElementFromTemplate = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div;
};

export const replayGame = (element, btnClass, fn) => {
  const replay = element.querySelector(btnClass);
  replay.addEventListener(`click`, fn);
};

