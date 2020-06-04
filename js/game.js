// game.js

import welcome from "./welcome";
import gameGenre from "./game-genre";
import gameArtist from "./game-artist";

const taskTypes = {
  'task-1': gameGenre,
  'task-2': gameArtist
};

const main = document.querySelector(`.main`);

export const changeScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};

export const reset = () => {
  changeScreen(welcome());
};

export const start = () => {

};

export const renderNextLevel = (state) => {

};
