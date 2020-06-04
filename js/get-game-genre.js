// get-game-genre.js

import {initialState, data} from "./data/data";
import getHeader from "./get-header";
import getRandomTracks from "./get-random-tracks";
import getTrack from "./get-track";

const tracks = getRandomTracks(data, 4);
const tracksHTML = tracks.map((answer, idx) => getTrack(answer, idx)).join(``);
const genre = tracks[Math.floor(Math.random() + 0.5)].genre;

const gameGenreTemplate = `<section class="game game--genre">
    ${getHeader(initialState)}
    <section class="game__screen">
      <h2 class="game__title">Выберите ${genre} треки</h2>
      <form class="game__tracks">
        ${tracksHTML}

<!--       track__button&--pause" -->

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>`;

export default gameGenreTemplate;
