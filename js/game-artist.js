// game-get-artist.js
// <!-- Игра на выбор исполнителя -->

import {getElementFromTemplate, replayGame} from "./utils";
import gameArtistTemplate from "./game-artist-template";
import {reset} from "./game";

import resultSuccess from "./result-success";
import failTime from "./fail-time";
import failTries from "./fail-tries";

export default (state, options, answer) => {
  const template = gameArtistTemplate(state, options, answer);
  const gameArtist = getElementFromTemplate(template);

  const artists = gameArtist.querySelectorAll(`.artist`);

  [...artists].forEach((artist) => {
    artist.addEventListener(`click`, function () {
      const result = [resultSuccess, failTries, failTime];
      let randomResult = Math.floor(Math.random() * 2 + 0.5);

      //changeScreen(result[randomResult]());
    });
  });

  replayGame(gameArtist, `.game__back`, reset);

  return gameArtist;
};
