// game-genre.js

import gameGenreTemplate from "./game-genre-template";
import {getElementFromTemplate, replayGame} from "./utils";
import {renderNextLevel, reset} from "./game";

export default (state, options, answer) => {
  const template = gameGenreTemplate(state, options, answer);
  const gameGenre = getElementFromTemplate(template);

  const gameInputs = gameGenre.querySelectorAll(`.game__input`);
  const gameChecks = gameGenre.querySelectorAll(`.game__check`);
  const gameSubmit = gameGenre.querySelector(`.game__submit`);
  gameSubmit.setAttribute(`disabled`, `true`);

  const validateChecked = () => {
    let disabled = true;
    for (let input of gameInputs) {
      if (input.checked) {
        disabled = false;
        break;
      }
    }
    if (disabled) {
      gameSubmit.setAttribute(`disabled`, true);
    } else {
      gameSubmit.removeAttribute(`disabled`);
    }
  };

  const triggerInput = (e) => {
    const inp = document.querySelector(`#${e.target.attributes.for[`value`]}`);
    inp.addEventListener(`change`, validateChecked);
  };

  [...gameChecks].forEach((gameCheck) => gameCheck.addEventListener(`click`, triggerInput));

  gameSubmit.addEventListener(`click`, function () {
    renderNextLevel(state);
  });

  //replayGame(gameGenre, `.game__back`, reset);

  return gameGenre;
};
