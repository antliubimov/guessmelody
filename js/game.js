// game.js

import data from "./data/data";
import welcome from "./welcome";
import gameGenre from "./game-genre";
import gameArtist from "./game-artist";

const rules = {
  maxLives: 3,
  time: 600,
  numberOfLevels: data.length,
};

const initialState = {
  level: 0,
  time: rules.time,
  lives: rules.maxLives,
  results: new Array(rules.numberOfLevels).fill(`unknown`)
};

const taskTypes = {
  'task-1': gameGenre,
  'task-2': gameArtist
};

const main = document.querySelector(`.main`);

export const changeScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};

export const renderLevel = (state) => {
  const type = data[state.level].type;
  const options = data[state.level].options;
  const answer = data[state.level].answer;
  const screen = taskTypes[type](state, options, answer);
  changeScreen(screen);
};

export const renderNextLevel = (state) => {
  state.level++;
  if (state.level < rules.numberOfLevels) {
    renderLevel(state);
  } else {
    // statistics
    console.log(state);
  }
};

export const reset = () => {
  changeScreen(welcome());
};

export const start = () => {
  let currState = Object.assign({}, initialState);
  renderLevel(currState);
};
