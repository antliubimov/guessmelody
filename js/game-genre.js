// game-genre.js

import {getElementFromTemplate, changeScreen, replayGame} from "./utils";
import gameGenreTemplate from "./get-game-genre";
import gameArtist from "./game-artist";

export default () => {
  const gameGenre = getElementFromTemplate(gameGenreTemplate);
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
    changeScreen(gameArtist());
  });

  replayGame(gameGenre, `.game__back`);

  return gameGenre;
};
