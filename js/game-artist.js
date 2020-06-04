// game-get-artist.js
// <!-- Игра на выбор исполнителя -->

import {getElementFromTemplate, replayGame} from "./utils";
import gameArtistTemplate from "./get-game-artist";

import resultSuccess from "./result-success";
import failTime from "./fail-time";
import failTries from "./fail-tries";

export default () => {
  const gameArtist = getElementFromTemplate(gameArtistTemplate);

  const artists = gameArtist.querySelectorAll(`.artist`);

  [...artists].forEach((artist) => {
    artist.addEventListener(`click`, function () {
      const result = [resultSuccess, failTries, failTime];
      let randomResult = Math.floor(Math.random() * 2 + 0.5);

      //changeScreen(result[randomResult]());
    });
  });

  replayGame(gameArtist, `.game__back`);

  return gameArtist;
};
