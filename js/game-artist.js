// game-get-artist.js
// <!-- Игра на выбор исполнителя -->

import {getElementFromTemplate, replayGame} from "./utils";
import gameArtistTemplate from "./game-artist-template";
import {renderNextLevel, reset} from "./game";

export default (state, options, answer) => {
  const template = gameArtistTemplate(state, options, answer);
  const gameArtist = getElementFromTemplate(template);

  const artists = gameArtist.querySelectorAll(`.artist`);

  [...artists].forEach((artist) => {
    artist.addEventListener(`click`, function () {
      renderNextLevel(state);
    });
  });

  replayGame(gameArtist, `.game__back`, reset);

  return gameArtist;
};
