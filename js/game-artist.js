// game-artist.js

import header from "./header";
import getElementFromTemplate from "./get-element-from-template";
import changeScreen from "./change-screen";
import artistTemplate from "./artist";
import {games} from "./data/data";
import resultSuccess from "./result-success";
import failTime from "./fail-time";
import failTries from "./fail-tries";
import replayGame from "./replay-game";

const artistsHTML = games[`game-artist`].answers.map((artist) => artistTemplate(artist)).join(``);

// <!-- Игра на выбор исполнителя -->
const gameArtistTemplate = `<section class="game game--artist">
    ${header.innerHTML}
    <section class="game__screen">
      <h2 class="game__title">${games[`game-artist`].description}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>

      <form class="game__artist">
        ${artistsHTML}
      </form>
    </section>
  </section>`;


const gameArtist = getElementFromTemplate(gameArtistTemplate);
const artists = gameArtist.querySelectorAll(`.artist`);

[...artists].forEach((artist) => {
  artist.addEventListener(`click`, function () {
    const result = [resultSuccess, failTries, failTime];
    let randomResult = Math.floor(Math.random() * 2 + 0.5);

    changeScreen(result[randomResult]);
  });
});

// replayGame(gameArtist, `.game__back`);

export default gameArtist;
